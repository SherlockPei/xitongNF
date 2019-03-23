cd /d %~dp0
cd Debug

echo Starting NFLoginServer...
start "NFLoginServer" "NFPluginLoader_d.exe" "Server=MasterServer" "ID=3" "PluginX.xml"



