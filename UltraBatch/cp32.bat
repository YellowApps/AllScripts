@echo off
title YPLM

set "in=tmp.txt"
set "out=tmp.bat"

copy nul %out%

main.js %in% %out%