var WshShell = WScript.CreateObject("WScript.Shell");
var fs = WScript.CreateObject("Scripting.FileSystemObject");

var file = WScript.Arguments.Unnamed(0);
var out = WScript.Arguments.Unnamed(1);

function OpenFile(file, state){
	return fs.OpenTextFile(file, state ? 2 : 1);
}

var config = OpenFile("files/config.txt", 0).ReadAll();
var config = config.split("\n");
for(var i in config){
	config[i] = config[i].split("=");
}

var filer = OpenFile(file, 0).ReadAll();

for(var i in config){
	filer = filer.replace(eval("/" + config[i][0] + "/g"), config[i][1]);
}

var start = OpenFile("files/start.txt", 0).ReadAll();
var end = OpenFile("files/end.txt", 0).ReadAll();

var filew = OpenFile(out, 1).Write(start + filer + end);