/*
            This file is part of: 
                NoahFrame
            https://github.com/ketoo/NoahGameFrame

   Copyright 2009 - 2018 NoahFrame(NoahGameFrame)

   File creator: lvsheng.huang
   
   NoahFrame is open-source software and you can redistribute it and/or modify
   it under the terms of the License; besides, anyone who use this file/software must include this copyright announcement.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


#ifndef NFC_PLAYER_REDIS_MODULE_H
#define NFC_PLAYER_REDIS_MODULE_H

#include "NFComm/NFMessageDefine/NFMsgDefine.h"
#include "NFComm/NFMessageDefine/NFProtocolDefine.hpp"
#include "NFComm/NFCore/NFDateTime.hpp"
#include "NFComm/NFPluginModule/NFIKernelModule.h"
#include "NFComm/NFPluginModule/NFIPluginManager.h"
#include "NFComm/NFPluginModule/NFIClassModule.h"
#include "NFComm/NFPluginModule/NFILogModule.h"
#include "NFComm/NFPluginModule/NFIElementModule.h"
#include "NFComm/NFPluginModule/NFIPlayerRedisModule.h"
#include "NFComm/NFPluginModule/NFINoSqlModule.h"
#include "NFComm/NFPluginModule/NFICommonRedisModule.h"
#include "NFComm/NFPluginModule/NFINetModule.h"
#include "NFComm/NFPluginModule/NFIWebsocketModule.h"
#include "NFComm/NFPluginModule/NFINetClientModule.h"
#include "NFComm/NFPluginModule/NFISecurityModule.h"


class NFCPlayerRedisModule : public NFIPlayerRedisModule
{
public:

	NFCPlayerRedisModule(NFIPluginManager* p);

	virtual bool Init();
	virtual bool Shut();
	virtual bool Execute();

	virtual bool AfterInit();

	void OnReqLoadRoleDataWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen);

	void OnCreateRoleGameProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen);

	void OnReqRoleListProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen);

	virtual bool ExistRoleName(const std::string& strRoleName);
	virtual bool CreateRole(const std::string& strAccount, const std::string& strRoleName, const NFGUID& id, const int nHomeSceneID);
	virtual bool GetRoleInfo(const std::string& strAccount, std::string& strRoleName, NFGUID& id);

	virtual bool LoadPlayerData(const NFGUID& self, NFMsg::RoleDataPack& roleData);
	virtual bool SavePlayerData(const NFGUID& self, const NFMsg::RoleDataPack& roleData);

	virtual bool SavePlayerTile(const int nSceneID, const NFGUID& self, const std::string& strTileData);
	virtual bool LoadPlayerTile(const int nSceneID, const NFGUID& self, std::string& strTileData);
	virtual bool LoadPlayerTileRandom(const int nSceneID, NFGUID& xPlayer, std::string& strTileData);
	virtual bool LoadPlayerTileRandomCache(const NFGUID& xPlayer, std::string& strTileData);

	virtual NFINT64 GetPropertyInt(const NFGUID& self, const std::string& strPropertyName);
	virtual int GetPropertyInt32(const NFGUID& self, const std::string& strPropertyName);
	virtual double GetPropertyFloat(const NFGUID& self, const std::string& strPropertyName);
	virtual std::string GetPropertyString(const NFGUID& self, const std::string& strPropertyName);
	virtual NFGUID GetPropertyObject(const NFGUID& self, const std::string& strPropertyName);
	virtual NFVector2 GetPropertyVector2(const NFGUID& self, const std::string& strPropertyName);
	virtual NFVector3 GetPropertyVector3(const NFGUID& self, const std::string& strPropertyName);

protected:
	std::string GetOnlineGameServerKey();
	std::string GetOnlineProxyServerKey();

private:


private:
	NFIClassModule* m_pLogicClassModule;
	NFINoSqlModule* m_pNoSqlModule;
	NFICommonRedisModule* m_pCommonRedisModule;
	NFIKernelModule* m_pKernelModule;
	NFILogModule* m_pLogModule;
	NFIWebsocketModule * m_pWebSocketModule;
	NFINetModule* m_pNetModule;
	NFISecurityModule* m_pSecurityModule;
	NFINetClientModule* m_pNetClientModule;
};


#endif
