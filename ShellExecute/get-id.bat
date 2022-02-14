@echo off
chcp 65001 > nul
title Get ID

echo Ваш ID^: > id.txt
echo %RANDOM%%RANDOM%%RANDOM%%RANDOM%%RANDOM% >> id.txt
echo Используйте его в ShellExecute. >> id.txt

echo Успешно
pause > nul