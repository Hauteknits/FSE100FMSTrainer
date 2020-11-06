@echo off

REM Creating a Newline variable (the two blank lines are required!)
set NLM=^


set NL=^^^%NLM%%NLM%^%NLM%%NLM%

echo FMSTrainer, Copyright (C) 2020 Holden Clarke, Licensed under the GNU General Public License v3
echo.
echo This program is free software: you can redistribute it and/or modify%NLM%
echo it under the terms of the GNU General Public License as published by%NLM%
echo the Free Software Foundation, either version 3 of the License, or%NLM%
echo (at your option) any later version.%NLM%
echo.
echo This program is distributed in the hope that it will be useful,%NLM%
echo but WITHOUT ANY WARRANTY; without even the implied warranty of%NLM%
echo MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the%NLM%
echo GNU General Public License for more details.%NLM%
echo. 
echo. 
echo.
pause

echo.
echo ****************************************************************%NLM%
echo Open your web browser of choice and navigate to "127.0.0.1:8080" %NLM%
echo When you are finished with the program, close this window
echo ****************************************************************%NLM%
echo.
color 7
cd portable-apache
start.bat