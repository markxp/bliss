Search.setIndex({objects:{"bliss.saga.resource.State":{Unknown:[12,1,1,""],Draining:[12,1,1,""],Destroyed:[12,1,1,""],Failed:[12,1,1,""],Running:[12,1,1,""],Active:[12,1,1,""],Expired:[12,1,1,""],Final:[12,1,1,""],Pending:[12,1,1,""]},"bliss.saga.job.Job":{run:[1,2,1,""],Failed:[1,1,1,""],Unknown:[1,1,1,""],Running:[1,1,1,""],JobID:[1,1,1,""],get_description:[1,2,1,""],Canceled:[1,1,1,""],get_job_id:[1,2,1,""],Done:[1,1,1,""],ServiceURL:[1,1,1,""],get_state:[1,2,1,""],cancel:[1,2,1,""],New:[1,1,1,""],wait:[1,2,1,""],Pending:[1,1,1,""],ExitCode:[1,1,1,""]},"bliss.saga.filesystem.Directory":{open_dir:[3,2,1,""],exists:[3,2,1,""],get_url:[3,2,1,""],move:[3,2,1,""],list:[3,2,1,""],remove:[3,2,1,""],get_size:[3,2,1,""],make_dir:[3,2,1,""],close:[3,2,1,""],is_dir:[3,2,1,""],copy:[3,2,1,""]},"bliss.saga.AttributeInterface":{find_attributes:[9,2,1,""],update:[9,2,1,""],attribute_is_removable:[9,2,1,""],attribute_is_writable:[9,2,1,""],set_vector_attribute:[9,2,1,""],get_attribute:[9,2,1,""],remove_callback:[9,2,1,""],get_vector_attribute:[9,2,1,""],set_attribute:[9,2,1,""],list_attributes:[9,2,1,""],remove_attribute:[9,2,1,""],attribute_exists:[9,2,1,""],add_callback:[9,2,1,""],attribute_is_vector:[9,2,1,""],attribute_is_readonly:[9,2,1,""],iterkeys:[9,2,1,""]},"bliss.saga.job":{Job:[1,3,1,""],Description:[7,3,1,""],Service:[4,3,1,""]},"bliss.saga.Session":{contexts:[11,1,1,""],remove_context:[11,2,1,""],list_contexts:[11,2,1,""],add_context:[11,2,1,""]},"bliss.saga":{Exception:[22,3,1,""],AttributeInterface:[9,3,1,""],resource:[8,0,1,""],Url:[17,3,1,""],filesystem:[13,0,1,""],Object:[19,3,1,""],job:[21,0,1,""],Session:[11,3,1,""],Context:[20,3,1,""],Error:[15,3,1,""]},"bliss.saga.Error":{DoesNotExist:[15,1,1,""],AuthenticationFailed:[15,1,1,""],IncorrectURL:[15,1,1,""],AuthorizationFailed:[15,1,1,""],BadParameter:[15,1,1,""],PermissionDenied:[15,1,1,""],Timeout:[15,1,1,""],AlreadyExists:[15,1,1,""],IncorrectState:[15,1,1,""],NoSuccess:[15,1,1,""],NotImplemented:[15,1,1,""]},"bliss.saga.Url":{set_query:[17,2,1,""],get_username:[17,2,1,""],set_scheme:[17,2,1,""],get_query:[17,2,1,""],set_host:[17,2,1,""],query:[17,1,1,""],port:[17,1,1,""],set_fragment:[17,2,1,""],get_port:[17,2,1,""],get_fragment:[17,2,1,""],scheme:[17,1,1,""],username:[17,1,1,""],set_username:[17,2,1,""],fragment:[17,1,1,""],get_host:[17,2,1,""],host:[17,1,1,""],path:[17,1,1,""],password:[17,1,1,""],set_password:[17,2,1,""],get_scheme:[17,2,1,""],set_port:[17,2,1,""],get_path:[17,2,1,""],get_password:[17,2,1,""],set_path:[17,2,1,""]},"bliss.saga.Object":{get_session:[19,2,1,""],session:[19,1,1,""]},"bliss.saga.resource.Manager":{create_storage:[2,2,1,""],get_compute:[2,2,1,""],destroy_compute:[2,2,1,""],create_compute:[2,2,1,""],list_storage_templates:[2,2,1,""],get_storage:[2,2,1,""],list_storage_resources:[2,2,1,""],destroy_storage:[2,2,1,""],get_template_details:[2,2,1,""],list_compute_templates:[2,2,1,""],list_compute_resources:[2,2,1,""]},"bliss.saga.resource":{Compute:[18,3,1,""],Storage:[14,3,1,""],Manager:[2,3,1,""],State:[12,3,1,""],StorageDescription:[16,3,1,""],ComputeDescription:[0,3,1,""]},"bliss.saga.Exception":{message:[22,1,1,""],traceback:[22,1,1,""],error:[22,1,1,""]},"bliss.saga.filesystem.File":{move:[6,2,1,""],get_url:[6,2,1,""],copy:[6,2,1,""],remove:[6,2,1,""],get_size:[6,2,1,""]},"bliss.saga.job.Service":{create_job:[4,2,1,""],from_compute:[4,4,1,""],list:[4,2,1,""],from_url:[4,4,1,""],get_job:[4,2,1,""]},"bliss.saga.Context":{X509:[20,1,1,""],UserID:[20,1,1,""],ContextType:[20,1,1,""],SSH:[20,1,1,""],UserProxy:[20,1,1,""],UserKey:[20,1,1,""],UserPass:[20,1,1,""],UserCert:[20,1,1,""],EC2:[20,1,1,""]},"bliss.saga.job.Description":{Queue:[7,1,1,""],Executable:[7,1,1,""],WorkingDirectory:[7,1,1,""],NumberOfProcesses:[7,1,1,""],SPMDVariation:[7,1,1,""],FileTransfer:[7,1,1,""],Project:[7,1,1,""],WallTimeLimit:[7,1,1,""],Contact:[7,1,1,""],Arguments:[7,1,1,""],Error:[7,1,1,""],Output:[7,1,1,""],TotalCPUCount:[7,1,1,""],Environment:[7,1,1,""],Name:[7,1,1,""]},"bliss.saga.resource.Compute":{get_state_detail:[18,2,1,""],get_description:[18,2,1,""],get_id:[18,2,1,""],get_manager:[18,2,1,""],get_state:[18,2,1,""],destroy:[18,2,1,""],get_job_service:[18,2,1,""],wait:[18,2,1,""]},"bliss.saga.filesystem":{Directory:[3,3,1,""],File:[6,3,1,""]},"bliss.saga.resource.Storage":{get_filesystem:[14,2,1,""],get_state_detail:[14,2,1,""],get_description:[14,2,1,""],get_id:[14,2,1,""],get_manager:[14,2,1,""],get_state:[14,2,1,""],destroy:[14,2,1,""],wait:[14,2,1,""]}},terms:{represent:[21,4],all:[13,1,7,9,18,4,11,14],concept:9,add_callback:9,scratch:7,consum:[9,1],focus:[5,10],prefix:7,code:[20,22,19],abil:13,follow:[5,1,17,11],total_cpu_count:7,set_schem:17,privat:20,send:7,init:9,program:7,filetransf:7,behalf:1,queri:[9,17],leav:1,sourc:[12,0,19,6,1,2,7,9,18,15,3,4,11,20,16,17,14,22],everi:[14,18],string:[9,20],fals:[9,3],numberofprocess:[0,7],account:7,mpi:[21,0,7],mechan:[7,11],veri:[8,9,14,18],affect:11,blast:[21,0,7],tri:15,id_rsa:20,liss:5,list:[13,19,2,7,8,9,3,4,11,20],scalar:9,get_sess:19,"try":22,item:12,vector:9,stderr:7,cooki:9,dir:[17,3,13],pleas:[5,20],eas:5,walltimelimit:7,second:1,design:17,get_job_servic:[8,18,0],pass:[9,17],manner:8,further:9,bern:9,port:17,append:20,compat:7,get_stat:[1,21,14,4,18],what:[9,20,11],neg:1,abl:[14,20],"while":[14,17,18],overload:9,current:[1,15],delet:6,birn:9,"new":[12,6,1,2,9,18,3,4,14],net:[21,20,11],mere:4,method:[1,2,9,18,15,4,17,14],hasn:1,full:7,abov:[13,7,8,11,21,17,20],absolut:[6,3],gener:[1,7,20],decid:11,here:[9,14,18],free:20,path:[6,17,3,7],userpass:20,rudimentari:9,modifi:[17,11],valu:[9,1,7],wait:[0,19,1,2,8,18,21,14],search:[5,7],open_dir:3,convers:9,anymor:[0,14,8,9,18,16],larger:8,queue:[1,7],credit:7,behav:13,pick:[20,11],action:[14,18],chang:[9,1,7],commonli:10,spawn:1,semant:[9,21,13,4],via:[13,1,8,9,21,17],dictionari:9,forbid:9,appli:9,app:7,forev:1,unix:[7,13],api:[5,13,14,18,8,9,10,21,17],instal:5,number_of_process:[8,21,7],total:7,establish:15,middlewar:10,from:[14,9,18,3,4,11,17,1,20],describ:[12,0,14,7,8,18,4,11,16,20],would:11,memori:[1,7],incorrecturl:15,regist:[9,11],two:[9,1,13,11],next:9,gsissh:20,live:19,call:[6,14,9,18,3,4,1],usr:[21,7],storage_id:2,dict:9,authenticationfail:15,type:[2,7,9,15,20,17,22],until:[8,14,2,18],more:[1,10,17,7,21],evalu:7,serviceurl:1,notif:7,finit:8,flag:[6,3],appel:9,indic:[5,6,1,7,8,15,3],particular:[8,12,14,18,19],known:[9,2,4],actual:[9,1,14,4,18],hold:[2,20],document:[5,21,13,9],overrun:7,must:[6,3,9],fly:9,none:[19,6,2,7,9,3,4,17],endpoint:[17,7,4],word:11,err:7,setup:9,work:[12,7,19],uniqu:[1,14,18],jobid:1,remain:9,itself:8,obvious:20,can:[0,13,6,1,2,7,9,10,3,4,11,21,16,17,14,20,18],cal:9,under:1,purpos:[1,17,21,11],attribute_is_vector:9,def:9,control:9,encapsul:22,stream:7,give:7,process:[1,7,21],mayb:22,registr:9,share:7,remove_callback:9,accept:[12,1,9,18,4,21,14],want:19,serial:9,get_queri:17,occur:[15,22],attribute_is_remov:9,egrep:7,secur:[19,20,11],rather:[5,14,18,4],anoth:6,how:[8,16,0,7],purg:[9,14],sever:[14,17,18],subdirectori:3,instead:[19,11,3,7],simpl:[9,1,10],updat:[9,11],map:9,resourc:[12,5,0,1,2,7,8,18,4,16,17,14],x509:[20,19],after:[14,18,21],usabl:[5,10],reflect:1,wrong:[12,22],cours:9,numa:7,pflaum:9,date:[1,7,4],interconnect:7,compute_id:2,data:[13,6,14,2,8,3,21,16],demonstr:9,set_frag:17,list_templ:[],alloc:[14,7,18],github:10,attempt:[9,4],practic:[7,20],classmethod:4,light:[5,10],credenti:[19,11],get_path:17,ambigu:9,caus:9,callback:9,maintain:11,environ:[1,10,7],allow:[19,14,7,9,18,15,21,17],enter:[9,1],callabl:9,doesnotexist:[9,15],order:[9,7],apfel:9,elif:[1,4],help:[7,11],wut:12,over:7,move:[6,1,3,13],galaxi:1,suspend:[1,21],reconnect:[14,18,4],is_dir:3,still:12,paramet:[6,14,9,18,15,3,4,1],job_id:[1,4],instantli:8,set_usernam:17,pend:[12,1,14,4,18],bypass:1,persist:[14,18],abbel:9,"_attributes_set_fin":9,finer:[14,18],non:[12,9,1,15],good:[7,20],"return":[19,6,1,2,9,18,3,4,17,14],thei:[8,9,1,2],python:[5,19,14,18,9,10,15,20,11,1,22],safe:11,cover:13,initi:[9,1,14,4,18],dat:[16,3,22,13],storage_descript:[16,2],now:[8,20,11],complain:9,nor:7,introduct:13,file_stag:7,workload:12,somewher:19,name:[6,1,2,7,9,3,4,20],anyth:[16,0,4],config:20,tran:9,userid:20,authent:11,token:20,val:9,create_storag:[14,16,2],mode:9,timeout:[1,15,14,22,18],each:17,debug:[7,20],fulli:[8,20,11],went:[12,22],complet:[5,3,6],from_comput:4,mean:8,get_filesystem:[14,16],weight:[5,10],resum:21,individu:[21,17,7,13],hard:[7,20],idea:9,realli:20,list_context:11,expect:[9,7,20],our:9,globu:21,totalcpucount:7,gfd:[5,0,19,6,1,9,10,3,4,11,16,17,20],out:[15,20,22,11],variabl:[1,7],shown:[14,18],network:[7,22],space:14,influenc:7,identifi:[1,9,18,4,14,22],get_usernam:17,content:[3,20,13],mess:9,suitabl:[0,14,2,8,18,16],rel:[3,7],print:[6,14,9,18,3,4,21,17,1,22],got:[9,22],correct:9,gram:21,directoi:3,proxi:20,advanc:8,manipul:17,differ:[14,2,7,9,10,1,18],pub:[20,11],standard:5,reason:[8,9],base:[9,10,20,19],transliter:9,releas:[14,18],org:[9,7,22],"byte":[6,3],bash:7,care:20,wai:[1,11],launch:7,could:[8,15,20],traceback:22,keep:9,place:[17,7],unknown:[12,1],lifetim:[8,2],onto:[8,16],oper:[13,19,6,7,15,3,11],major:[20,11],cpt_hook:7,set_vector_attribut:9,onc:[0,19,1,8,9,16],qualiti:7,number:[13,6,7,9,3,20],echo:7,mai:[14,2,7,9,18,1,20],instruct:5,alreadi:[14,15,18,4],done:[1,16],messag:22,get_vector_attribut:9,remove_context:11,open:3,suffic:[20,11],size:[0,6,14,8,3,16],given:[6,15,3,4,9],silent:9,script:7,associ:[14,1,3,18],interact:[15,13,11],iaa:[8,4],system:[12,13,1,7,10,4,14],construct:9,attach:11,necessarili:[8,1,7],contexttyp:20,termin:21,scheme:17,"final":[12,1,9,18,4,14],store:[14,16],schema:15,shell:[9,7,4],option:[14,7,18,11,1,20],userproxi:20,destroy_comput:2,tool:13,attribute_is_writ:9,get_schem:17,specifi:[19,14,7,9,18,17,1],get_job_id:[1,21],getter:[9,17],pars:4,somewhat:9,pruim:9,essenti:[16,0],exactli:11,than:[5,14,7,18],serv:[1,11],badparamet:[9,15],set_port:17,grep:9,target:[6,3,7],provid:[13,19,8,9,10,22],remov:[6,11,3,9],project:[10,7],matter:9,posix:[9,3],str:[9,21,17,22],computedescript:[8,5,18,0,2],minut:7,provis:8,pre:9,analysi:10,sai:7,comput:[12,5,0,2,18,8,10,4],explicit:7,ogf:[5,10,9],respons:2,argument:[1,7,9,11,21,20],get_comput:[18,2],list_compute_resourc:2,packag:[8,5,10,13,21],compute_obj:4,have:[8,9,1,2,7],tabl:5,need:[0,14,8,18,11,16],element:17,unexpect:1,equival:[1,17],inform:[14,7,9,10,20,21,22,18],destroi:[12,0,14,2,8,18,16],self:9,note:[8,9,1,7],also:[8,9,1,20,22],contact:[1,7,4,21],build:5,which:[0,13,19,1,7,9,18,20,4,11,16,14,22],combin:[14,18],data1:22,noth:9,even:[8,1],copi:[13,19,6,1,3,11,16],unless:9,distribut:[10,7],trace:[9,22],exec:7,usernam:17,object:[5,19,6,1,9,18,3,4,11,14,20],reach:[14,18],list_attribut:9,discov:8,most:[13,19,8,9,10,21],get_siz:[6,3,13],"class":[0,1,2,3,4,5,6,7,8,9,18,11,12,13,14,15,16,17,19,22,21,20],don:7,url:[5,6,1,2,8,9,18,15,3,4,21,17,14],doc:5,clear:20,later:[9,11],request:[14,2,7,18,15,4,1],doe:[8,9,1,15,7],part:[1,10],runtim:7,wildcard:9,obedi:5,usual:[1,4],boundari:7,fact:9,show:[16,0,7,20,21],saga:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],text:20,connect:[7,22],session:[5,19,6,2,3,4,11,20],passwd:6,permissiondeni:15,trivial:9,find:[16,0,7,11],setter:[9,17],slot:[8,18,0],set_fin:9,onli:[19,14,7,18,11,1,20],explicitli:[9,7,20],locat:[6,8,3,20,17,22],execut:[12,0,1,7,8,4,21],get_job:4,piratebai:7,get_frag:17,activ:[12,1,2,8,18,14],attributeinterfac:9,should:[9,1,7,11],wall_time_limit:7,bliss:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],spmd_variat:[21,7],project_42:7,list_compute_templ:2,footnot:5,local:[13,6,7,3,4,21],overwritten:6,iterkei:9,get:[13,6,1,2,9,18,3,14],get_host:17,nativ:[14,18,19],cannot:9,ssh:[20,4,11],notimpl:15,report:[1,7],requir:[0,14,7,8,9,18,16],yield:9,"public":20,get_manag:[14,18],remot:[13,19,6,3,4,11,21,20],bad:9,stupid:9,common:13,though:9,contain:[9,19,11],where:[9,1,17,7,22],bak:6,wiki:5,certif:20,set:[9,21,17,7],startup:7,accord:[1,14,18],see:[16,9,1,0,2],attribute_exist:9,result:[9,17],workingdirectori:[7,19],arg:9,fail:[12,9,1,14,18],close:[12,14,2,3,18],best:9,awar:20,hopefulli:20,heterogen:10,pattern:[9,3],someth:[12,3,22],state:[12,5,1,2,7,8,9,18,15,4,21,14],subdir:[3,13],"import":20,entiti:[1,15,14,4,18],email:7,attribut:[12,5,1,7,9],altern:17,assumpt:7,rm1:[14,18],syntact:4,kei:[9,7,20],set_queri:17,extens:[9,10],job:[5,0,19,1,7,8,18,4,11,21,17,20],from_url:4,wohhooo:4,addit:[9,21,13],both:[9,7],ill:15,make_dir:[3,13],etc:[5,13,6,1,7,9,21,17,20],set_path:17,instanc:[12,0,19,1,2,7,8,9,18,4,11,21,16,14,20],grain:[14,18],context:[5,19,7,20,11],pdf:[9,7],com:10,t_id:2,job_descript:4,spmdvariat:[0,7],point:[6,9,3,4,21,20],instanti:[9,21,2],overview:[8,5,10,13,21],written:5,openmp:7,cancel:1,respect:[21,2],usercert:[20,19],destroy_storag:2,backend:[19,14,7,8,18,15,4,1,20],becom:[12,14,18],add_context:[19,20,11],addition:[9,22],due:15,been:[9,1],mark:9,compon:17,trigger:9,interpret:[9,15],certain:[16,0],templat:2,myblastjob_01:7,get_state_detail:[14,18],attribute_is_readonli:9,ani:[19,14,7,9,18,11],assert:[14,18],get_id:[14,18],understand:20,els:[1,22,4,19],those:[9,7,4],pilot:[8,9],"case":[14,18,9,10,11,20],ident:[1,15],plain:20,servic:[5,19,1,7,10,4,11,21,17,20],properti:[0,19,14,7,9,18,11,16,17,1],act:[8,14,18,7,11],defin:[0,19,6,1,7,9,18,3,4,11,16,17,14,20],invok:9,behavior:9,error:[5,1,7,9,15,22],"_attributes_i_set":9,exist:[6,14,2,7,8,9,18,15,3],modul:5,loos:[6,1,3,4,11,20],expir:[12,14,18],get_attribut:9,bin:[6,1,7,8,3,4,21],pragmat:5,stdout:7,fill:21,"__main__":9,them:[14,2,18,20],cluster:[8,0,4],kwarg:9,set_host:17,"__init__":9,perform:[9,15,4],suggest:2,make:[7,20],format:[15,17,7],same:[2,19],fragment:17,complex:9,eventu:12,cd2:18,difficult:11,finish:[8,1,0,19],http:[9,10,20],optim:7,permit:15,upon:[10,21],capabl:[16,0,13],rais:[9,1,22],user:[12,5,1,7,9,17,20],mani:7,stack:22,expand:7,stateless:11,drain:12,descr:21,scenario:10,choos:7,entri:3,thu:[9,1,21,4],incorrectst:[9,15],well:[1,17,7],inherit:[9,19],exampl:[0,13,19,6,1,7,8,9,15,3,4,11,20,21,16,17,22],command:[5,7,13],thi:[5,19,6,1,7,9,18,15,3,4,11,14,20],filesystem:[5,13,19,6,3,11,17,22],undefin:[9,1],model:[1,14,21,18],user_cert:[20,11],left:[8,20,11],alreadyexist:15,set_attribut:9,x_42:21,just:[14,18,20],get_template_detail:2,obtain:[0,19,14,2,8,18,16],reserv:8,anotherschem:17,kill:[18,7],world:10,flavor:9,list_storage_resourc:2,yet:1,previous:[9,21],spmd:7,signific:7,expos:[9,1,11],hint:7,except:[5,15,20,22,9],param:[3,4],get_descript:[1,19,14,21,18],add:[9,20,11],other:[19,14,7,9,18,15,11,1],get_port:17,schedul:[18,7],cherri:9,kingkong:7,subsequ:[14,18],transit:[1,7],match:[9,13],nosuccess:15,real:10,applic:[1,7,8,10,4,21,16,20],around:9,transpar:9,handl:[0,13,6,14,2,8,9,18,3,16],test:1,guid:5,simgl:9,password:[17,20],set_password:17,presum:19,like:[3,7],specif:[0,14,7,9,10,21,16,20,18],arbitrari:7,signal:[9,14,18],html:5,alamo:22,necessari:20,either:[8,9,1],output:[7,19],manag:[12,5,0,13,1,2,8,9,18,4,11,21,16,17,14],create_comput:[8,14,0,2,18],exitcod:1,working_directori:7,simplifi:[12,17],authorizationfail:15,creation:[9,3,4],some:[6,1,9,15,3,11,21,16,20],back:9,intern:9,"export":7,slice:8,guarante:[9,7],successfulli:1,transport:20,x509_special:19,txt:3,lead:9,deploy:[5,10],protocol:20,pem:19,larg:[8,0,7],condit:[7,22],three:[9,1],localhost:[13,19,6,1,7,3,4,16],refer:5,core:[5,10,9],encourag:[19,11],run:[12,0,19,1,7,8,18,4,21,16],inspect:[14,2,18,3,21,1],usag:[16,0,7,20],unsuccessfulli:1,host:[21,17,7,20,11],find_attribut:9,found:[10,21,7,4,13],"__name__":9,"super":9,stage:[21,16,7,19],plug:10,about:[14,7,9,18,21,22],obj:9,get_url:[6,3],plum:9,page:5,storagedescript:[5,14,16,2],constructor:[20,11],attrib:9,block:[1,14,18],routin:[14,18],own:1,sd2:14,eucalyptu:20,within:3,encod:20,bound:[15,20],automat:[7,11],unregist:9,down:22,ensur:[9,17],old:9,destructor:[14,18],storag:[12,5,14,2,8,16],your:20,mpirun:7,span:7,log:[7,20],kersch:9,user_kei:[20,11],transfer:14,support:[9,7,4,19],captur:7,submit:[8,1,0,14,18],custom:9,avail:[9,14,2,7,22],start:[1,14,21],"_attributes_extens":9,appl:9,interfac:[9,10],submiss:[1,17,18,4,21],strict:5,"function":[9,19],convert:9,form:[9,20],offer:[6,3],argv:17,link:2,might:20,scope:11,rm2:[14,18],line:13,futuregrid:22,"true":[9,3],reset:9,made:7,input:[16,17],consist:[1,17,4],possibl:8,"default":[1,9,18,11,14,20],userkei:20,access:[14,9,18,15,4,17],analyz:20,below:[9,14,18,20],limit:7,otherwis:[9,1,3],similar:[8,9,13],ec2:20,featur:[5,10],creat:[0,13,1,7,8,9,18,15,3,4,11,21,16,17,14,20],"int":[9,17],retriev:11,dure:21,repres:[6,14,18,3,4,1],implement:[5,10,15,9],aga:5,file:[5,13,19,6,14,7,3,11,20,21,16,17,22],home:[7,20,11],check:[9,1,3],compute_descript:[0,2],probabl:9,incorrect:15,again:[9,4],readonli:9,peach:9,index:5,when:[9,14,7,20,18],detail:[9,14,2,18],virtual:8,create_job:[0,19,1,7,8,4,21],valid:[9,15,11],writabl:9,pathnam:7,you:[4,19],queu:[1,14,4,18],fork:[1,7,4],tmp:[13,19,6,7,3,22],my_job_id:4,intend:9,"_attributes_regist":9,why:8,get_storag:[14,2],remove_attribut:9,meaning:1,list_storage_templ:2,encount:22,context_typ:[20,11],sphinx:5,directori:[5,13,19,6,7,3,17],descript:[5,0,1,2,7,8,18,4,21,16,14,20],rule:20,sftp:[6,3,22,13],get_password:17,ignor:9,potenti:4,time:[9,1,15,7,22],special_id_rsa:[20,11],cpu:[1,7],unset:9,oop:[1,4]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class","4":"py:classmethod"},titles:["ComputeDescription","Job","Manager","Directory","Job Service","Bliss, a SAGA implementation in Python","File","Job Description","Resource Management Overview","Attributes","SAGA Core API Overview","Session","State","File/Directory Management Overview","Storage","Error","StorageDescription","URL","Compute","Object","Context","Job Management Overview","Exception"],objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","classmethod","Python class method"]},filenames:["bliss/saga/resource/ComputeDescription","bliss/saga/job/Job","bliss/saga/resource/Manager","bliss/saga/filesystem/Directory","bliss/saga/job/Service","index","bliss/saga/filesystem/File","bliss/saga/job/Description","bliss/saga/resource/__init__","bliss/saga/Attributes","bliss/saga/__init__","bliss/saga/Session","bliss/saga/resource/State","bliss/saga/filesystem/__init__","bliss/saga/resource/Storage","bliss/saga/Error","bliss/saga/resource/StorageDescription","bliss/saga/Url","bliss/saga/resource/Compute","bliss/saga/Object","bliss/saga/Context","bliss/saga/job/__init__","bliss/saga/Exception"]})