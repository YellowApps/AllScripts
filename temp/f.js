var fs = WScript.CreateObject("Scripting.FileSystemObject");

var folder = fs.GetFolder(".");

/*for(var e = new Enumerator(folder.Files); !e.atEnd(); e.moveNext()){
	WScript.Echo(e.item().Path);
}*/
