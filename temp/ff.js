function scan_folder(_path)
{
    var folder = fso.GetFolder(_path);
    for (var e = new Enumerator(folder.Files); !e.atEnd(); e.moveNext())
        f.writeline(e.item().Path);
    for (var e = new Enumerator(folder.SubFolders); !e.atEnd(); e.moveNext())
        scan_folder(e.item().Path);
}
 
var fso = WScript.CreateObject("Scripting.FileSystemObject");
var fn = "scan_tree.txt";
var f = fso.CreateTextFile(fn,true,true);
scan_folder(".");
f.Close();