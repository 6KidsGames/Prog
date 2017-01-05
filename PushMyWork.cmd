@echo off
pushd %~dp0

call git add *
call git commit -am "Latest code updates"
call git push

popd
