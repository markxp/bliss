#!/usr/bin/env python

# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

'''This examples shows how to submit an Condor job .

   If something doesn't work as expected, try to set 
   SAGA_VERBOSE=3 in your environment before you run the
   script in order to get some debug output.

   If you think you have encountered a defect, please 
   report it at: https://github.com/saga-project/bliss/issues
'''

__author__    = "Ashley Zebrowski"
__copyright__ = "Copyright 2012, Ashley Zebrowski"
__license__   = "MIT"

import sys, time
import bliss.saga as saga

def main():
    
    try:
        js = saga.job.Service("condor://localhost?WhenToTransferOutput=ON_EXIT&should_transfer_files=YES&notifications=Always")

        # describe our job
        jd = saga.job.Description()

        # environment, executable & arguments
        jd.environment = {'SLEEP_TIME':'10'}       
        jd.executable  = '/bin/sleep'
        jd.arguments   = ['$SLEEP_TIME']

        # output options
        jd.output = "bliss_ssh_job.stdout"
        jd.error  = "bliss_ssh_job.stderr"

        # create the job (state: New)
        #myjob = js.create_job(jd)

        #print "Job ID    : %s" % (myjob.jobid)
        #print "Job State : %s" % (myjob.get_state())

        #print "\n...starting job...\n"
        # run the job (submit the job via SSH)
        #myjob.run()

        #print "Job ID    : %s" % (myjob.jobid)
        #print "Job State : %s" % (myjob.get_state())

        #print "\n...waiting for job...\n"
        # wait for the job to either finish or fail
        #myjob.wait()

        #print "Job State : %s" % (myjob.get_state())
        #print "Exitcode  : %s" % (myjob.exitcode)

    except saga.Exception, ex:
        print "An error occured during job execution: %s" % (str(ex))
        sys.exit(-1)

if __name__ == "__main__":
    main()
