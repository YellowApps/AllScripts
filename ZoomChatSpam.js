WScript.Echo("Open the chat");

var shell = WScript.CreateObject("WScript.Shell");

for(var i = 0; i < 30; i++){
	shell.SendKeys(Math.floor(Math.random()*1000000000000) + "~");
	WScript.Sleep(200);
}
WScript.Echo("Done");