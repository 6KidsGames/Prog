rem @echo off

setlocal

echo.
echo ==========================================================================
echo Running Jupyter in local mode
echo ==========================================================================
echo.
@rem ijs.cmd must be on the path along with oits sister scripts.
set PATH=%PATH%;%~dp0node_modules\.bin
call ijs
if ERRORLEVEL 1 echo ERROR: npm install failed for leaning modules with errorlevel %ERRORLEVEL% && exit /b 1
