@echo off
REM Kill the process stored in .pidfile
for /f %%a in (.pidfile) do taskkill /PID %%a /F

del .pidfile
