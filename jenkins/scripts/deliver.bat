@echo off
REM Build the React app
call npm run build

REM Start the app in the background
start /B cmd /c "npm start > output.log 2>&1"
echo %ERRORLEVEL%

REM Save PID of the last backgrounded process
for /f "tokens=2" %%a in ('tasklist /fi "imagename eq node.exe" /fo csv ^| findstr /i "node.exe"') do echo %%~a > .pidfile

echo Now...
echo Visit http://localhost:3000 to see your Node.js/React application in action.
