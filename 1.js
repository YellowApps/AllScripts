var shell = WScript.createObject("WScript.Shell");

shell.run("notepad");
WScript.sleep(500);
shell.appActivate("notepad");

var str = "Ха-ха-ха. Ты лох. \n Самый лошиный лох и блошиный блох";
shell.sendKeys(str);
WScript.sleep(5000);
shell.sendKeys("%{F4}");
shell.sendKeys("{right}");
shell.sendKeys("{enter}");
shell.sendKeys("^{esc}");
