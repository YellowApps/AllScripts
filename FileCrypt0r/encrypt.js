var shell = WScript.CreateObject("WScript.Shell");
var fs = WScript.CreateObject("Scripting.FileSystemObject");
var args = WScript.Arguments;
var key, filew, filename, text, isOk;

try{
	var keytxt = fs.OpenTextFile("key.json", 1, false, -2).ReadAll();
	eval('key = ' + keytxt);
	filename = args(0);
	text = fs.OpenTextFile(filename, 1, false , -2).ReadAll();
	filew = fs.CreateTextFile("encrypted." + filename, false, true);
	isOk = true;
}catch(e){
	WScript.Echo(e.name + ": " + e.message);
	isOk = false;
}

function main(){
	if(!isOk) return;
		
	for(var i in key){
		text = text.split(i).join(key[i]);
	}
	
	filew.Write(text);
	filew.Close();
	
	WScript.Echo("Done.");
}

main();