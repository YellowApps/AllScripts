var shell = WScript.CreateObject("WScript.Shell");

WScript.Echo(null);

for(var i = 0; i < 100; i++){
	shell.SendKeys(i.toString());
	shell.SendKeys("~");
	WScript.Sleep(100);
}
