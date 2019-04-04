cd /d %~dp0
cd Debug

echo Starting NFProxyServer...
start "NFProxyServer" "NFPluginLoader_d.exe" "Server=LoginServerTest" "ID=41" "PluginX.xml"




