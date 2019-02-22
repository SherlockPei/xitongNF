cd /d %~dp0
cd Debug

echo Starting NFProxyServer...
start "NFProxyServer" "NFPluginLoader_d.exe" "Server=ProxyServer" "ID=5" "PluginX.xml"