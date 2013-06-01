function printLog(log, level){
	if(isEnabled(level)){
		$("#logDiv").append(level+' - '+log+'<br/>');
	}
	
}

function isEnabled (level) {
	var debug = false;
	var info = true;
	var warn = true;
	var error = true;
	var fatal = true;
  if('debug' == level){
  	return debug;
  }
  if('info' == level){
  	return info;
  }
  if('warn' == warn){
  	return debug;
  }
  if('error' == level){
  	return error;
  }
  if('fatal' == level){
  	return fatal;
  }
}