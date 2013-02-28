Version 0.2.8 released 2013-02-28
----------------------------------------------------------------------

* Fixed PBS adaptor to work with older PBS Pro installations

Version 0.2.7 released 2012-11-09
----------------------------------------------------------------------

* Fixed errors related to pbs://localhost and sge://localhost
  URLs that were caused by a bug in the command-line wrappers.

Version 0.2.6 released 2012-10-25
----------------------------------------------------------------------

* HOTFIX: credential management for SGE and PBS. both adaptors now 
  iterate over SSH and GSISSH contexts as well as consider usernames
  that are part of the url, e.g., pbs+ssh://ole@lonestar.tacc...

Version 0.2.5 released 2012-10-24
----------------------------------------------------------------------

* Changed documentation to Sphinx
* Removed object_type API. Python buildins can be used instead
* Updates to Filesystem API
* Added JobDescription.name attribute (as defined in DRMAA)
* Introduced stateful SSH connection substrate for PBS, SGE, etc
* Introduced support for GSISSH: pbs+gsissh://, sge+gsissh://
* Re-implementation of a (more Python-esque) attribute interface
* Fixed JobID issues, i.e., job.job_id returns 'None' in case the
  job is not running instead of "[serviceurl]-[None]"
* Introduced dynamic, fault-tolerant plug-in loader. If anything 
  goes wrong during loading of a specific plug-in (i.e., dependencies 
  on 3rd party modules cannot be fulfilled, the plug-in will just get 
  skipped and the remaining ones will still get loaded. Previously, a
  single problem during plug-in loading would take Bliss down.

Version 0.2.4 released 2012-7-10
----------------------------------------------------------------------

* Added unit-tests for SPMDVariation
* Added 'mpirun' support for local job plug-in (via SPMDVariation)
* Added some of the missing methods and flags to filesystem package
* An URL object can now be constructed from another URL object
* Fixed job.cancel()
* Wildcard support for Directory.list()

Version 0.2.3 released 2012-6-26
----------------------------------------------------------------------

* Fixed query support for URL class (issue #61)
* Improved logging. No root logger hijacking anymore (issue #62)
* Fixed job.Description.number_of_processes (issue #63)
* Less chatty SSH plug-in (issue #51)

Version 0.2.2 released 2012-6-12
----------------------------------------------------------------------

* job.Decription now accepts strings for int values. This has been
  implemented for backwards compatibility
* Fixed resource.Compute.wait() timeout issue
* Removed excessive SGE/PBS plug-in logging
* job.Service can now be created from a resource.Manager
* Implemented deep copy for description objects
* Runtime now supports multiple plug-ins for the same schema

Version 0.2.1 released 2012-5-16
----------------------------------------------------------------------

* Fixed https://github.com/saga-project/bliss/issues/5
* Fixed https://github.com/saga-project/bliss/issues/13

Version 0.2.0 released 2012-5-15
----------------------------------------------------------------------

* SFTP support for local <-> remote copy operations, mkdir, get_size
* Added supoprt for ssh re-connection after timeout (issue #29)
* Abandoned 'Exception' filenames and API inheritance. The Bliss interface
  looks much cleaner now. Compatibility with previous versions has
  been ensured
* Improved (inline) API documentation
* Swapped urlparse with furl in saga.Url class This hopefully fixes
  the problem with inconsistent parsing accross different Python versions
* Added SGE (Sun Grid Engine) plug-in (issue #11)
* Removed sagacompat compatibility API
* Log source names now all start with 'bliss.'. This should make 
  filtering much easier
* Moved SD package into development branch features/servicediscovery

Version 0.1.19 released 2012-02-29
----------------------------------------------------------------------

* Hotfix - removed experimental Resource plug-in from release

Version 0.1.18 released 2012-02-29
----------------------------------------------------------------------

* Fixed issue with plugin introspection 
* Added template for job plug-in

Version 0.1.17 released 2012-01-04
----------------------------------------------------------------------

* Hotfix

Version 0.1.16 released 2012-01-03
----------------------------------------------------------------------

* Fixed issue: https://github.com/oweidner/bliss/issues/9

Version 0.1.15 released 2012-01-03
----------------------------------------------------------------------

* Fixed issue: https://github.com/oweidner/bliss/issues/8
* Fixed issue: https://github.com/oweidner/bliss/issues/6
* First version of a bigjob plugin. See wiki for details.
* Fixed Python 2.4 compatibility issue

Version 0.1.14 released 2011-12-08
----------------------------------------------------------------------

* Added bliss.sagacompat module for API compatibility.
  API documentation: http://oweidner.github.com/bliss/apidoc-compat/
* Added examples for 'compat' API, e.g.:
  https://github.com/oweidner/bliss/tree/master/examples/job-api/compat/
* Added configuration files for epydoc

Version 0.1.13 released 2011-12-07
----------------------------------------------------------------------

* Fixed executable & argument handling for the local job plugin
* Added support for jd.output and jd.error to local job plugin

Version 0.1.12 released 2011-12-06
----------------------------------------------------------------------

* Fixed bug in URL.get_host()
* Fixed issues with extremely short running PBS jobs 
  in conjunction with scheduler configruations that 
  remove the job from the queue the second it finishes execution.
* First working version of an SFTP file API plugini based on Paramiko
* Two advance bfast examples incl. output file staging:
  https://github.com/oweidner/bliss/blob/master/examples/advanced/bfast_workflow_01.py
  https://github.com/oweidner/bliss/blob/master/examples/advanced/bfast_workflow_02.py

Version 0.1.11 released 2011-11-28
----------------------------------------------------------------------

* Fixed issues with PBS working directory 
* Added simple job API example that uses BFAST:
  https://github.com/oweidner/bliss/blob/master/examples/job-api/pbs_via_ssh_bfast_job.py
* Updated apidoc: http://oweidner.github.com/bliss/apidoc/
* First prototype of a job container. Example can be found here:
  https://github.com/oweidner/bliss/blob/master/examples/job-api/pbs_via_ssh_container.py  
* Implemented CPU and Memory information via PBS service discovery
* Changed job.Description.walltime_limit to 
  job.Description.wall_time_limit

Version 0.1.10 released 2011-11-16
----------------------------------------------------------------------

* Fixed issue with local job plugin

Version 0.1.9 released 2011-11-16
----------------------------------------------------------------------

* Prototype of a Service Discovery packages
* PBS/SSH support for service discovery

Version 0.1.8 released 2011-11-09
----------------------------------------------------------------------

* Fixed issue with PBS plugin job.wait()

Version 0.1.7 released 2011-11-09
----------------------------------------------------------------------

* More or less stable job API    
* First functional PBS over SSH plugin 
