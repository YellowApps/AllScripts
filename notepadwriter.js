var shell = WScript.CreateObject("WScript.Shell");
var fs = WScript.CreateObject("Scripting.FileSystemObject");
var args = WScript.Arguments;
var text;

try{
	text = fs.OpenTextFile(args(0), 1).ReadAll();
}catch(e){
	text = "Error\n#########\n1 argument - file name required.";
}

text = text.replace(/\r\n/g, "~");
text = text.replace(/\n/g, "~");

text = text.split("");

shell.Run("notepad");
WScript.Sleep(700);
shell.AppActivate("notepad");

for(var i in text){
	shell.SendKeys(text[i]);
	WScript.Sleep(200);
}

WScript.Sleep(10000);
shell.SendKeys("%{F4}{RIGHT}~");