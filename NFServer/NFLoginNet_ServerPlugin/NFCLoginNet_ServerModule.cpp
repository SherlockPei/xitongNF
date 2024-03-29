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
#include "NFCLoginNet_ServerModule.h"
#include "NFLoginNet_ServerPlugin.h"
#include "NFComm/NFMessageDefine/NFProtocolDefine.hpp"

bool NFCLoginNet_ServerModule::Init()
{
	m_pNetModule = pPluginManager->FindModule<NFINetModule>();
	m_pKernelModule = pPluginManager->FindModule<NFIKernelModule>();
	m_pLogModule = pPluginManager->FindModule<NFILogModule>();
	m_pClassModule = pPluginManager->FindModule<NFIClassModule>();
	m_pElementModule = pPluginManager->FindModule<NFIElementModule>();
	m_pNetClientModule = pPluginManager->FindModule<NFINetClientModule>();
	m_pLoginToMasterModule = pPluginManager->FindModule<NFILoginToMasterModule>();
	m_pWebSocketModule = pPluginManager->FindModule<NFIWebsocketModule>();
	m_pLoginLogicModule = pPluginManager->FindModule<NFILoginLogicModule>();
	return true;
}

bool NFCLoginNet_ServerModule::Shut()
{
	return true;
}

bool NFCLoginNet_ServerModule::BeforeShut()
{
	return true;
}

bool NFCLoginNet_ServerModule::AfterInit()
{
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_STS_HEART_BEAT, this, &NFCLoginNet_ServerModule::OnHeartBeat);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_LOGIN, this, &NFCLoginNet_ServerModule::OnLoginProcess);

	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_LOGOUT, this, &NFCLoginNet_ServerModule::OnLogOut);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_CONNECT_WORLD, this, &NFCLoginNet_ServerModule::OnSelectWorldProcess);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_CONNECT_WORLD, this, &NFCLoginNet_ServerModule::OnSelectWorldProcessWS);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_WORLD_LIST, this, &NFCLoginNet_ServerModule::OnViewWorldProcess);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_WORLD_LIST, this, &NFCLoginNet_ServerModule::OnViewWorldProcessWS);
	m_pNetModule->AddReceiveCallBack(this, &NFCLoginNet_ServerModule::InvalidMessage);
	m_pWebSocketModule->SetEventCallBack(this, &NFCLoginNet_ServerModule::OnSocketClientEventWS);
	m_pNetModule->AddEventCallBack(this, &NFCLoginNet_ServerModule::OnSocketClientEvent);
	m_pNetModule->ExpandBufferSize();

	NF_SHARE_PTR<NFIClass> xLogicClass = m_pClassModule->GetElement(NFrame::Server::ThisName());
	if (xLogicClass)
	{
		const std::vector<std::string>& strIdList = xLogicClass->GetIDList();
		for (int i = 0; i < strIdList.size(); ++i)
		{
			const std::string& strId = strIdList[i];

			const int nServerType = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::Type());
			const int nServerID = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::ServerID());
			if (nServerType == NF_SERVER_TYPES::NF_ST_LOGIN && pPluginManager->GetAppID() == nServerID)
			{
				const int nPort = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::Port());
				const int nMaxConnect = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::MaxOnline());
				const int nCpus = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::CpuCount());

				//int nRet = m_pNetModule->Initialization(nMaxConnect, nPort, nCpus);
				int nRet = m_pWebSocketModule->Initialization(nMaxConnect, nPort, nCpus);
				if (nRet < 0)
				{
					std::ostringstream strLog;
					strLog << "Cannot init server net, Port = " << nPort;
					m_pLogModule->LogNormal(NFILogModule::NLL_ERROR_NORMAL, NULL_OBJECT, strLog, __FUNCTION__, __LINE__);
					NFASSERT(nRet, "Cannot init server net", __FILE__, __FUNCTION__);
					exit(0);
				}
			}
		}
	}

	return true;
}

int NFCLoginNet_ServerModule::OnSelectWorldResultsProcess(const int nWorldID, const NFGUID xSenderID, const int nLoginID, const std::string& strAccount, const std::string& strWorldIP, const int nWorldPort, const std::string& strWorldKey)
{
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldResultsProcess----------------");
	NF_SHARE_PTR<NFSOCK> xFD = mxClientIdent.GetElement(xSenderID);
	if (xFD)
	{
		NFMsg::AckConnectWorldResult xMsg;
		xMsg.set_world_id(nWorldID);
		xMsg.mutable_sender()->CopyFrom(NFINetModule::NFToPB(xSenderID));
		xMsg.set_login_id(nLoginID);
		xMsg.set_account(strAccount);
		xMsg.set_world_ip(strWorldIP);
		xMsg.set_world_port(nWorldPort);
		xMsg.set_world_key(strWorldKey);

		m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_CONNECT_WORLD, xMsg, *xFD);
	}
	else {
		auto wsFd = mxClientIdentWS.GetElement(xSenderID);
		if (wsFd) {
			NFMsg::AckConnectWorldResult xMsg;
			xMsg.set_world_id(nWorldID);
			xMsg.mutable_sender()->CopyFrom(NFINetModule::NFToPB(xSenderID));
			xMsg.set_login_id(nLoginID);
			xMsg.set_account(strAccount);
			xMsg.set_world_ip(strWorldIP);
			xMsg.set_world_port(nWorldPort);
			xMsg.set_world_key(strWorldKey);
			m_pWebSocketModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_CONNECT_WORLD, xMsg, *wsFd);
		}
	}

	return 0;
}

bool NFCLoginNet_ServerModule::Execute()
{
	return true;
}
void NFCLoginNet_ServerModule::OnClientConnectedWS(websocketpp::connection_hdl hdl)
{
	auto pObject = m_pWebSocketModule->GetNet()->GetNetObject(hdl);
	if (pObject)
	{
		NFGUID xIdent = m_pKernelModule->CreateGUID();
		pObject->SetClientID(xIdent);
		mxClientIdentWS.AddElement(xIdent, NF_SHARE_PTR<websocketpp::connection_hdl>(NF_NEW websocketpp::connection_hdl(hdl)));
	}
}
void NFCLoginNet_ServerModule::OnClientConnected(const NFSOCK nAddress)
{
	NetObject* pObject = m_pNetModule->GetNet()->GetNetObject(nAddress);
	if (pObject)
	{
		NFGUID xIdent = m_pKernelModule->CreateGUID();
		pObject->SetClientID(xIdent);
		mxClientIdent.AddElement(xIdent, NF_SHARE_PTR<NFSOCK>(NF_NEW NFSOCK(nAddress)));
	}
}
void NFCLoginNet_ServerModule::OnClientDisconnectWS(websocketpp::connection_hdl nAddress)
{
	auto pObject = m_pWebSocketModule->GetNet()->GetNetObject(nAddress);
	if (pObject)
	{
		NFGUID xIdent = pObject->GetClientID();
		mxClientIdentWS.RemoveElement(xIdent);
	}
}
void NFCLoginNet_ServerModule::OnClientDisconnect(const NFSOCK nAddress)
{
	NetObject* pObject = m_pNetModule->GetNet()->GetNetObject(nAddress);
	if (pObject)
	{
		NFGUID xIdent = pObject->GetClientID();
		mxClientIdent.RemoveElement(xIdent);
	}
}

void NFCLoginNet_ServerModule::OnLoginProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	NFGUID nPlayerID;
	NFMsg::ReqAccountLogin xMsg;
	if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xMsg, nPlayerID))
	{
		return;
	}

	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (pNetObject)
	{
		if (pNetObject->GetConnectKeyState() == 0)
		{
			int nState = 0;//successful
			if (0 != nState)
			{
				std::ostringstream strLog;
				strLog << "Check password failed, Account = " << xMsg.account() << " Password = " << xMsg.password();
				m_pLogModule->LogNormal(NFILogModule::NLL_ERROR_NORMAL, NFGUID(0, nSockIndex), strLog, __FUNCTION__, __LINE__);

				NFMsg::AckEventResult xMsg;
				xMsg.set_event_code(NFMsg::EGEC_ACCOUNTPWD_INVALID);

				m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_LOGIN, xMsg, nSockIndex);
				return;
			}

			pNetObject->SetConnectKeyState(1);
			pNetObject->SetAccount(xMsg.account());

			NFMsg::AckEventResult xData;
			xData.set_event_code(NFMsg::EGEC_ACCOUNT_SUCCESS);

			m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_LOGIN, xData, nSockIndex);

			m_pLogModule->LogNormal(NFILogModule::NLL_INFO_NORMAL, NFGUID(0, nSockIndex), "Login successed :", xMsg.account().c_str());
		}
	}
}
void NFCLoginNet_ServerModule::OnSelectWorldProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	NFGUID nPlayerID;
	NFMsg::ReqConnectWorld xMsg;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xMsg, nPlayerID))
	{
		return;
	}

	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}


	if (pNetObject->GetConnectKeyState() <= 0)
	{
		return;
	}
	NFMsg::ReqConnectWorld xData;
	xData.set_world_id(xMsg.world_id());
	xData.set_login_id(pPluginManager->GetAppID());
	xData.mutable_sender()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));
	xData.set_account(pNetObject->GetAccount());

	m_pNetClientModule->SendSuitByPB(NF_SERVER_TYPES::NF_ST_MASTER, pNetObject->GetAccount(), NFMsg::EGameMsgID::EGMI_REQ_CONNECT_WORLD, xData);
}
void NFCLoginNet_ServerModule::OnSelectWorldProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	NFGUID nPlayerID;
	NFMsg::ReqConnectWorld xMsg;
	if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xMsg, nPlayerID))
	{
		return;
	}

	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	
	if (pNetObject->GetConnectKeyState() <= 0)
	{
		return;
	}

	NFMsg::ReqConnectWorld xData;
	xData.set_world_id(xMsg.world_id());
	xData.set_login_id(pPluginManager->GetAppID());
	xData.mutable_sender()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));
	xData.set_account(pNetObject->GetAccount());

	m_pNetClientModule->SendSuitByPB(NF_SERVER_TYPES::NF_ST_MASTER, pNetObject->GetAccount(), NFMsg::EGameMsgID::EGMI_REQ_CONNECT_WORLD, xData);
}
void NFCLoginNet_ServerModule::OnSocketClientEventWS(websocketpp::connection_hdl hdl, NF_WS_EVENT event) {
	switch (event)
	{
	case NF_WS_EVENT_OPEN:
		OnClientConnectedWS(hdl);
		break;
	case NF_WS_EVENT_CLOSE:
		break;
	case NF_WS_EVENT_FAIL:
		break;
	case NF_WS_EVENT_INTERRUPT:
		break;
	case NF_WS_EVENT_PING:
		break;
	case NF_WS_EVENT_PONG:
		break;
	case NF_WS_EVENT_PONG_TIMEOUT:
		break;
	case NF_WS_EVENT_MSG:
		break;
	default:
		break;
	}
	;
}
void NFCLoginNet_ServerModule::OnSocketClientEvent(const NFSOCK nSockIndex, const NF_NET_EVENT eEvent, NFINet* pNet)
{
	if (eEvent & NF_NET_EVENT_EOF)
	{
		m_pLogModule->LogNormal(NFILogModule::NLL_INFO_NORMAL, NFGUID(0, nSockIndex), "NF_NET_EVENT_EOF", "Connection closed", __FUNCTION__, __LINE__);
		OnClientDisconnect(nSockIndex);
	}
	else if (eEvent & NF_NET_EVENT_ERROR)
	{
		m_pLogModule->LogNormal(NFILogModule::NLL_INFO_NORMAL, NFGUID(0, nSockIndex), "NF_NET_EVENT_ERROR", "Got an error on the connection", __FUNCTION__, __LINE__);
		OnClientDisconnect(nSockIndex);
	}
	else if (eEvent & NF_NET_EVENT_TIMEOUT)
	{
		m_pLogModule->LogNormal(NFILogModule::NLL_INFO_NORMAL, NFGUID(0, nSockIndex), "NF_NET_EVENT_TIMEOUT", "read timeout", __FUNCTION__, __LINE__);
		OnClientDisconnect(nSockIndex);
	}
	else  if (eEvent & NF_NET_EVENT_CONNECTED)
	{
		m_pLogModule->LogNormal(NFILogModule::NLL_INFO_NORMAL, NFGUID(0, nSockIndex), "NF_NET_EVENT_CONNECTED", "connected success", __FUNCTION__, __LINE__);
		OnClientConnected(nSockIndex);
	}
}
void NFCLoginNet_ServerModule::SynWorldToClientWS(websocketpp::connection_hdl nFD)
{
	NFMsg::AckServerList xData;
	xData.set_type(NFMsg::RSLT_WORLD_SERVER);

	NFMapEx<int, NFMsg::ServerInfoReport>& xWorldMap = m_pLoginToMasterModule->GetWorldMap();
	NFMsg::ServerInfoReport* pWorldData = xWorldMap.FirstNude();
	while (pWorldData)
	{
		NFMsg::ServerInfo* pServerInfo = xData.add_info();

		pServerInfo->set_name(pWorldData->server_name());
		pServerInfo->set_status(pWorldData->server_state());
		pServerInfo->set_server_id(pWorldData->server_id());
		pServerInfo->set_wait_count(0);

		pWorldData = xWorldMap.NextNude();
	}


	m_pWebSocketModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_WORLD_LIST, xData, nFD);
}
void NFCLoginNet_ServerModule::SynWorldToClient(const NFSOCK nFD)
{
	NFMsg::AckServerList xData;
	xData.set_type(NFMsg::RSLT_WORLD_SERVER);

	NFMapEx<int, NFMsg::ServerInfoReport>& xWorldMap = m_pLoginToMasterModule->GetWorldMap();
	NFMsg::ServerInfoReport* pWorldData = xWorldMap.FirstNude();
	while (pWorldData)
	{
		NFMsg::ServerInfo* pServerInfo = xData.add_info();

		pServerInfo->set_name(pWorldData->server_name());
		pServerInfo->set_status(pWorldData->server_state());
		pServerInfo->set_server_id(pWorldData->server_id());
		pServerInfo->set_wait_count(0);

		pWorldData = xWorldMap.NextNude();
	}


	m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_WORLD_LIST, xData, nFD);
}
void NFCLoginNet_ServerModule::OnViewWorldProcessWS(websocketpp::connection_hdl hdl, const int nMsgID, const char* msg, const uint32_t nLen)
{
	NFGUID nPlayerID;
	NFMsg::ReqServerList xMsg;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xMsg, nPlayerID))
	{
		return;
	}

	if (xMsg.type() == NFMsg::RSLT_WORLD_SERVER)
	{
		SynWorldToClientWS(hdl);
	}
}
void NFCLoginNet_ServerModule::OnViewWorldProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	NFGUID nPlayerID;
	NFMsg::ReqServerList xMsg;
	if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xMsg, nPlayerID))
	{
		return;
	}

	if (xMsg.type() == NFMsg::RSLT_WORLD_SERVER)
	{
		SynWorldToClient(nSockIndex);
	}
}

void NFCLoginNet_ServerModule::OnHeartBeat(const NFSOCK nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen)
{
}

void NFCLoginNet_ServerModule::OnLogOut(const NFSOCK nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen)
{
}

void NFCLoginNet_ServerModule::InvalidMessage(const NFSOCK nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen)
{
	printf("NFNet || unMsgID=%d\n", nMsgID);
}
