import copy
import time
import subprocess
import bliss.saga
import os 

import warnings
with warnings.catch_warnings():
    warnings.simplefilter("ignore")
    import paramiko

class SSHJobProcess(object):
    '''A wrapper around an SSH process'''
    def __init__(self, jobdescription,  plugin, service_object):
        self.pi = plugin

        #check for things we dont support
        if jobdescription.file_transfer != None: 
            self.pi.log_error_and_raise(bliss.saga.Error.NotImplemented,
                                        "SSH Job adaptor doesn't support the file transfer attribute!") 

        if jobdescription.contact != None: 
            self.pi.log_error_and_raise(bliss.saga.Error.NotImplemented,
                                        "SSH Job adaptor doesn't support the contact attribute!")

        if jobdescription.wall_time_limit != None:
            self.pi.log_debug("Silently ignoring the walltime_limit attribute. It's not supported by SSH.")
              
        if jobdescription.total_cpu_count != None: 
            self.pi.log_debug("Silently ignoring the total_cpu_count attribute. It's not supported by SSH.")

        if jobdescription.number_of_processes != None: 
            self.pi.log_debug("Silently ignoring the number_of_processes attribute. It's not supported by SSH.")        

        if jobdescription.spmd_variation != None: 
            self.pi.log_debug("Silently ignoring the spmd_variation attribute. It's not supported by SSH.")

        if jobdescription.project != None: 
            self.pi.log_debug("Silently ignoring the project attribute. It's not supported by SSH.")
        
        if jobdescription.queue != None: 
            self.pi.log_debug("Silently ignoring the queue attribute. It's not supported by SSH.")


        self.executable  = jobdescription.executable
        self.arguments   = jobdescription.arguments
        self.environment = jobdescription.environment
        self.working_directory=jobdescription.working_directory
        self.so = service_object
        self.sshclient = None
        self.sshchannel = None
        self.pid = None
        self.returncode = None
        self.state = bliss.saga.job.Job.New
        self._job_output=None
        self._job_error=None

    def __del__(self):
        try:
            if self.sshchannel is not None:
                self.pi.log_debug("Closing SSH channel")   
                self.sshchannel.close()
                
        except Exception, ex:
            self.pi.log_error_and_raise(bliss.saga.Error.NoSuccess, "Couldn't close SSH channel because %s" % str(ex))

        try:
            if self.sshclient is not None:
                self.pi.log_debug("Closing SSH client")
                self.sshclient.close()
                
        except Exception ,ex:
            self.pi.log_error_and_raise(bliss.saga.Error.NoSuccess, "Couldn't close SSH client because %s" % str(ex))


    def run(self, jd, url):
        #check if there are things in the job descriptor that we don't support

        #load up ssh config file
        self.config = paramiko.SSHConfig()
        try:
            config_file = os.path.expanduser(os.path.join("~", ".ssh", "config"))
            self.pi.log_info("Attempting to load SSH configuration file: %s" % config_file)
            self.config.parse(open(config_file))
        except:
            self.pi.log_info("Couldn't open SSH configuration file: %s" % config_file)

        #see if we have any information on the host from the ssh config
        # that must be loaded
        hn = url.host
        try:
            temp = self.config.lookup(hn)['hostname']
            self.pi.log_debug("Translating provided hostname %s to %s" % (hn, temp))
            hn = temp
        except Exception, ex:
            self.pi.log_debug("No hostname lookup for %s" % hn)


        usable_ctx = None

        #grab an SSH context if one exists
        for ctx in self.so.session.contexts:
            if ctx.type is bliss.saga.Context.SSH:
                usable_ctx = ctx
                self.pi.log_debug("Found SSH context to use!")
                break

        #look for a username and key to use in the context
        username = None
        userkey  = None
        if usable_ctx is not None:
            if usable_ctx.userid is not None:
                username = usable_ctx.userid
            if usable_ctx.userkey is not None:
                userkey = usable_ctx.userkey

        #overwrite the context username/password with our url-provided username/password
        #(if they exist)
        if url.username:
            username = url.username
        if url.password:
            password = url.password

        #set missing host key policy to automatically add it
        self.sshclient=paramiko.SSHClient()
        self.sshclient.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        #have paramiko load host keys from .ssh directory
        try:
            self.sshclient.load_host_keys(os.path.expanduser(os.path.join("~", ".ssh", "known_hosts")))
        except Exception, ex:
            self.pi.log_warning("Could not load known_hosts from ~/.ssh, exception: %s" % ex)
            
        #if the context provides a user_key, let us know that we're using it
        if not userkey:
            self.pi.log_info("Using default ssh key")    
        else:
            self.pi.log_info("Using context-provided ssh key")

        #if the context provided a username, let us know that we're using it
        if not username:
            self.pi.log_info("Using default username")
        else:
            if url.username:
                self.pi.log_info("Using username from URL")
            else:
                self.pi.log_info("Using context-provided username")


        self.pi.log_info("Connecting to host %s" % hn)

        #set up our ssh channel
        try :
          self.sshclient.connect(hn, username=username, key_filename=userkey)
          self.sshchannel = self.sshclient.get_transport().open_session()
        except Exception as e :
          msg = str(e)
          if msg == 'No existing session' :
            raise bliss.saga.Exception(bliss.saga.Error.NoSuccess, "ssh authentication failed")
          raise bliss.saga.Exception(bliss.saga.Error.NoSuccess, "ssh job run failed: " + str(e))

        #parse environment variables

        envline=""
        if self.environment:
            envline = "env "
            for k in self.environment.keys():
                envline += k+"="+self.environment[k]+" "
            envline += " /bin/sh -c "
        
        #set up our commandline
        cmdline = ""
        cmdline+= str(self.executable)

        cdline = ""
        #do we have a working directory to cd into?
        if(self.working_directory):
            cdline+="cd "+self.working_directory + " && "

        #make a list of arguments
        args = ""
        argline=""
        if self.arguments is not None:
            for arg in self.arguments:
                #if we're just working with a string
                arg = "%s" % arg
                if isinstance(arg, basestring):
                    #make it a list so that if we get a list of strings, we can iterate
                    s=[arg]
                else:
                    #leave it be if it's already a list
                    s=arg
                for a in s:
                    #iterate across the list of strings
                    argline += " %s" % a 

        full_line=""

        #change the executed command depending on if we're using env or not
        if envline=="":
            full_line = "echo $$ && " + cdline + "("+envline+" "+cmdline+" "+argline+")"
        else:
            full_line = "echo $$ && " + cdline + "("+envline+"'"+cmdline+" "+argline+"')"

        if jd.output:
            full_line +=  " > " + jd.output
        if jd.error:
            full_line += " 2> " + jd.error
            
        self.pi.log_debug("Sending command %s to remote server:" % full_line)
        self.sshchannel.exec_command(full_line)
        
        #the below is commented out because if we create a shell, i'm not sure how to
        #wait for the process to end execution properly, and i'm not sure how to get
        #the output status.  leaving it in here anyway in case the code turns out to
        #be needed at a later date.

        # new method of doing this by creating a shell
        #cmdline = "(" + cmdline + ")" + "> " + jd.output + " 2> " + jd.error
        #self.sshchannel.invoke_shell()
        #self.stdout=self.sshchannel.makefile('rb')
        #self.stdin=self.sshchannel.makefile('wb')
        #self.stdin.write("echo $$\n")
        #self.pid = self.stdout.readline().strip()
        #self.stdin.write(cmdline)

        #leave pipes open for reading/writing later if needed
        self._job_output = self.sshchannel.makefile('rb')
        self._job_error = self.sshchannel.makefile_stderr('rb')
        self.pid=self._job_output.readline().strip()
        self.state = bliss.saga.job.Job.Running

    def getpid(self, serviceurl):
        if self.pid == None:
            return None
        else:
            return bliss.utils.jobid.JobID(serviceurl, self.pid)

    def getstate(self):
        if self.state == bliss.saga.job.Job.Running:
            # only update if still running 
            if self.sshchannel.exit_status_ready():
                # are we all done?
                self.returncode = self.sshchannel.recv_exit_status()
                if self.returncode is not None:
                    if self.returncode != 0:
                        self.state = bliss.saga.job.Job.Failed
                    else:
                        self.state = bliss.saga.job.Job.Done
               
        return self.state

    def terminate(self):
        self.sshchannel.close()
        self.state = bliss.saga.job.Job.Canceled

    def wait(self, timeout):
        if timeout == -1:
            self.returncode = self.sshchannel.recv_exit_status()
            self.sshchannel.close()
        else:
            t_beginning = time.time()
            seconds_passed = 0
            while True:
                if self.sshchannel.exit_status_ready():
                    self.returncode = self.sshchannel.recv_exit_status()
                if self.returncode is not None:
                    break
                seconds_passed = time.time() - t_beginning
                if timeout and seconds_passed > timeout:
                    break
                time.sleep(0.1)

    def get_exitcode(self):
        return self.returncode
