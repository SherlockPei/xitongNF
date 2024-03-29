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
#ifndef NFC_LOGINNET_SERVER_MODULE_H
#define NFC_LOGINNET_SERVER_MODULE_H

#include "NFComm/NFCore/NFMap.hpp"
#include "NFComm/NFMessageDefine/NFMsgDefine.h"
#include "NFComm/NFPluginModule/NFIKernelModule.h"
#include "NFComm/NFPluginModule/NFILoginNet_ServerModule.h"
#include "NFComm/NFPluginModule/NFILoginLogicModule.h"
#include "NFComm/NFPluginModule/NFILogModule.h"
#include "NFComm/NFPluginModule/NFINetModule.h"
#include "NFComm/NFPluginModule/NFIElementModule.h"
#include "NFComm/NFPluginModule/NFIClassModule.h"
#include "NFComm/NFPluginModule/NFILoginToMasterModule.h"
#include "NFComm/NFPluginModule/NFIWebsocketModule.h"

class NFCLoginNet_ServerModule
    : public NFILoginNet_ServerModule
{
public:
    NFCLoginNet_ServerModule(NFIPluginManager* p)
    {
        pPluginManager = p;
    }

    virtual bool Init();
    virtual bool Shut();
    virtual bool Execute();

	void OnClientConnectedWS(websocketpp::connection_hdl hdl);


    virtual bool BeforeShut();
	void OnSocketClientEventWS(websocketpp::connection_hdl hdl, NF_WS_EVENT event);
    virtual bool AfterInit();

    virtual void LogReceive(const char* str) {}
    virtual void LogSend(const char* str) {}

    virtual int OnSelectWorldResultsProcess(const int nWorldID, const NFGUID xSenderID, const int nLoginID, const std::string& strAccount, const std::string& strWorldIP, const int nWorldPort, const std::string& strKey);

protected:
    void OnSocketClientEvent(const NFSOCK nSockIndex, const NF_NET_EVENT eEvent, NFINet* pNet);

	void SynWorldToClientWS(websocketpp::connection_hdl hdl);

protected:
    void OnClientDisconnect(const NFSOCK nAddress);
    void OnClientConnected(const NFSOCK nAddress);

	void OnClientDisconnectWS(websocketpp::connection_hdl nAddress);

    void OnLoginProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen);
	void OnSelectWorldProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen);
    void OnSelectWorldProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen);
    void OnViewWorldProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen);

	void OnHeartBeat(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen);
	void OnLogOut(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen);
	void InvalidMessage(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen);

protected:

protected:
    void SynWorldToClient(const NFSOCK nFD);

	void OnViewWorldProcessWS(websocketpp::connection_hdl hdl, const int nMsgID, const char * msg, const uint32_t nLen);

    NFMapEx<NFGUID, NFSOCK> mxClientIdent;
	NFMapEx<NFGUID, websocketpp::connection_hdl> mxClientIdentWS;

private:

	NFINetModule* m_pNetModule;
	NFINetClientModule* m_pNetClientModule;
	NFIWebsocketModule * m_pWebSocketModule;
    NFIClassModule* m_pClassModule;
    NFIElementModule* m_pElementModule;
    NFIKernelModule* m_pKernelModule;
    NFILogModule* m_pLogModule;
	NFILoginToMasterModule* m_pLoginToMasterModule;
	NFILoginLogicModule * m_pLoginLogicModule;
};

#endif