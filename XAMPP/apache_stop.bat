@echo off
cd /D %~dp0
cmd.exe /C start "" /MIN call "C:\Users\holde\OneDrive\School Stuff\FSE100\FSE100FMSTrainer\FSE100FMSTrainer\XAMPP\killprocess.bat" "httpd.exe"
if not exist apache\logs\httpd.pid GOTO exit
del apache\logs\httpd.pid

:exit
