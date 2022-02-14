@echo off
title YPLM

set /p "in=Input file: "
set /p "out=Output file: "

copy nul %out%

main.js %in% %out%