cd /d %~dp0
cd Debug

echo Starting NFLoginServer...
start "NFLoginServer" "NFPluginLoader_d.exe" "Server=MasterServer" "ID=3" "PluginX.xml"


choice /t 2 /d y /n >nul
echo Starting NFWorldServer...
start "NFWorldServer" "NFPluginLoader_d.exe" "Server=WorldServer" "ID=7" "PluginX.xml"

choice /t 2 /d y /n >nul

echo Starting NFGameServer...
start "NFGameServer" "NFPluginLoader_d.exe" "Server=GameServer" "ID=6" "PluginX.xml"

echo Starting NFProxyServer...
start "NFProxyServer" "NFPluginLoader_d.exe" "Server=LoginServer" "ID=4" "PluginX.xml"




