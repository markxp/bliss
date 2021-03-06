# -*- coding: utf-8 -*-
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

__author__    = "Ole Christian Weidner"
__copyright__ = "Copyright 2011-2012, Ole Christian Weidner"
__license__   = "MIT"

from bliss.interface import PluginBaseInterface

from bliss.saga.Error import Error as SAGAError
from bliss.saga.Exception import Exception as SAGAException

class FilesystemPluginInterface(PluginBaseInterface):
    '''Abstract base class for all filesystem plugins'''
 
    def __init__(self, name, schemas):
        '''Class constructor'''
        PluginBaseInterface.__init__(self, name=name, schemas=schemas,
                                     api=PluginBaseInterface.api_type_saga_filesystem)
    
    def register_file_object(self, file_obj):
        '''This method is called upon instantiation of a new file object
        '''
        errormsg = "Not implemented plugin method called: register_file_object()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg) 

    def unregister_file_object(self, file_obj):
        '''This method is called upon deletion of a file object
        '''
        self.log_error("Not implemented plugin method called: unregister_file_object()")
        # don't throw -- destructor context

    def register_directory_object(self, dir_obj):
        '''This method is called upon instantiation of a new file object
        '''
        errormsg = "Not implemented plugin method called: register_directory_object()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg) 

    def unregister_directory_object(self, dir_obj):
        '''This method is called upon deletion of a file object
        '''
        self.log_error("Not implemented plugin method called: unregister_directory_object()")
        # don't throw -- destructor context

    def file_copy(self, file_obj, target_url, flags):
        '''This method is called upon file.copy()
        '''
        errormsg = "Not implemented plugin method called: file_copy()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def file_move(self, file_obj, target_url, flags):
        '''This method is called upon file.copy()
        '''
        errormsg = "Not implemented plugin method called: file_copy()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def file_get_size(self, file_obj):
        '''This methid is called upon file.get_size()
        ''' 
        errormsg = "Not implemented plugin method called: file_get_size()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg) 

    def dir_close(self, dir_obj):
        '''This methid is called upon dir.close()
        ''' 
        errormsg = "Not implemented plugin method called: dir_close()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def dir_list(self, dir_obj):
        '''This method is called upon dir.list()
        '''
        errormsg = "Not implemented plugin method called: dir_list()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def dir_remove(self, dir_obj, path=None):
        '''This method is called upon dir.remove()
        '''
        errormsg = "Not implemented plugin method called: dir_remove()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def dir_make_dir(self, dir_obj, path, flags):
        '''This methid is called upon dir.make_dir()
        ''' 
        errormsg = "Not implemented plugin method called: dir_make_dir()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def dir_copy(self, dir_obj, source, target, flags):
        '''This methid is called upon dir.copy()
        ''' 
        errormsg = "Not implemented plugin method called: dir_copy()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def dir_get_size(self, dir_obj, path):
        '''This methid is called upon dir.get_size()
        ''' 
        errormsg = "Not implemented plugin method called: dir_get_size()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def dir_exists(self, dir_obj, path):
        '''This methid is called upon dir.exists()
        ''' 
        errormsg = "Not implemented plugin method called: dir_exists()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

    def dir_is_dir(self, dir_obj, path):
        '''This methid is called upon dir.is_dir()
        ''' 
        errormsg = "Not implemented plugin method called: dir_is_dir()"
        self.log_error_and_raise(SAGAError.NotImplemented, errormsg)

