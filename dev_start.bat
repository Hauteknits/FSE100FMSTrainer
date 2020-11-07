@echo off

REM Creating a Newline variable (the two blank lines are required!)
set NLM=^


set NL=^^^%NLM%%NLM%^%NLM%%NLM%

echo Open your web browser of choice and navigate to "127.0.0.1"%NLM%
echo When you are finished with the program, close this window
echo.
cd portable-apache
start.bat

