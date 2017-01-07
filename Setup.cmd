@echo off
rem Prog learning project - setup script for Windows consoles.
rem Can be run over and over if you need to. If you see it change when
rem you do a git pull, you should run it again to pull down any Node.js
rem NPM packages or perform other setups.

where npm
if ERRORLEVEL 1 echo ERROR: NPM not found. Did you install Node.js according to the instructions at https://github.com/6kidsgames/Prog ? && exit /b 1

echo.
echo ==========================================================================
echo Ensuring we have all the needed Node.js Package Manager packages.
echo ==========================================================================

echo.
echo ==========================================================================
echo Installing learning packages for Node.js
echo   ijavascript - Lets us use JavaScript within Jupyter notebooks.
echo ==========================================================================
echo.
call npm install --save-dev ijavascript
if ERRORLEVEL 1 echo ERROR: npm install failed for leaning modules with errorlevel %ERRORLEVEL% && exit /b 1


call %~dp0Init.cmd

echo.
echo ==========================================================================
echo Complete!
echo ==========================================================================
echo.
