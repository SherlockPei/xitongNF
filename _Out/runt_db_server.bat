cd /d %~dp0
cd Debug


echo Starting NFDBServer...
start "NFDBServer" "NFPluginLoader_d.exe" "Server=DBServer" "ID=8" "PluginX.xml"








