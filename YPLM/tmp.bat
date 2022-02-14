@echo off
title UltraBatch
color 1f
chcp 65001 > nul
setlocal EnableDelayedExpansion

rem ***
rem Made with UltraBatch based by YPLM
rem ***

echo Условия

:1

echo.

set /p "n=Введите число: "

cls

If %n% LSS 9 (
echo Число меньше 9
) Else (
echo Число больше 9
)

GoTo:1


pause > nul