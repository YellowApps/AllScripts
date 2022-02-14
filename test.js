var shell = WScript.CreateObject("WScript.Shell");

var batch = "test.bat"

shell.Run("..\\bat\\" + batch)