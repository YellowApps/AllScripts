var shell = WScript.CreateObject("WScript.Shell");

shell.SendKeys("{PRTSC}");

shell.Run("mspaint");
WScript.Sleep(1000);
shell.AppActivate("mspaint");

shell.SendKeys("^v");

WScript.Sleep(700);

shell.SendKeys("%{F4}~");
shell.SendKeys(Math.floor(Math.random()*10000) + ".png");
shell.SendKeys("~");