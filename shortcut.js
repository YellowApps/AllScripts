var shell = WScript.CreateObject("WScript.Shell");
var args = WScript.Arguments.Named;

try{
	var lnk = shell.CreateShortcut(args("name") || "./unnamed.lnk");
	with(lnk){
		TargetPath = args("target") || "%windir%\\system32\\cmd.exe";
		WorkingDirectory = args("wd") || "./";
		IconLocation = args("icon") || "%windir%\\system32\\shell32.dll, 42";
		Description = args("description") || "";
		Save();
	}
}catch(e){
	WScript.echo(e.name + ": " + e.message);
}