@echo off
title YPLM

set "in=tmp.txt"
set "out=tmp.ps1"

copy nul %out%

main.js %in% %out%