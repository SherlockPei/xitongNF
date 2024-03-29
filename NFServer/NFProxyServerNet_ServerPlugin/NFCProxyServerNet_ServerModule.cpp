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
#include "NFCProxyServerNet_ServerModule.h"
#include "NFProxyServerNet_ServerPlugin.h"
#include "NFComm/NFPluginModule/NFIKernelModule.h"
#include "NFComm/NFMessageDefine/NFProtocolDefine.hpp"

bool NFCProxyServerNet_ServerModule::Init()
{
	m_pNetModule = pPluginManager->FindModule<NFINetModule>();
	m_pKernelModule = pPluginManager->FindModule<NFIKernelModule>();
	m_pClassModule = pPluginManager->FindModule<NFIClassModule>();
	m_pNetClientModule = pPluginManager->FindModule<NFINetClientModule>();
	m_pLogModule = pPluginManager->FindModule<NFILogModule>();
	m_pElementModule = pPluginManager->FindModule<NFIElementModule>();
	m_pProxyToWorldModule = pPluginManager->FindModule<NFIProxyServerToWorldModule>();
	m_pSecurityModule = pPluginManager->FindModule<NFISecurityModule>();
	m_pNetModule = pPluginManager->FindModule<NFINetModule>();
	m_pWebSocketModule = pPluginManager->FindModule<NFIWebsocketModule>();
    return true;
}

bool NFCProxyServerNet_ServerModule::AfterInit()
{
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_CONNECT_KEY,this, &NFCProxyServerNet_ServerModule::OnWebSocketReciveTest);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_CONNECT_KEY, this, &NFCProxyServerNet_ServerModule::OnConnectKeyProcess);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_WORLD_LIST, this, &NFCProxyServerNet_ServerModule::OnReqServerListProcess);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_WORLD_LIST, this, &NFCProxyServerNet_ServerModule::OnReqServerListProcessWS);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_SELECT_SERVER, this, &NFCProxyServerNet_ServerModule::OnSelectServerProcessWS);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_SELECT_SERVER, this, &NFCProxyServerNet_ServerModule::OnSelectServerProcess);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_ROLE_LIST, this, &NFCProxyServerNet_ServerModule::OnReqRoleListProcess);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_ROLE_LIST, this, &NFCProxyServerNet_ServerModule::OnReqRoleListProcessWS);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_CREATE_ROLE, this, &NFCProxyServerNet_ServerModule::OnReqCreateRoleProcessWS);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_CREATE_ROLE, this, &NFCProxyServerNet_ServerModule::OnReqCreateRoleProcess);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_DELETE_ROLE, this, &NFCProxyServerNet_ServerModule::OnReqDelRoleProcess);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_ENTER_GAME, this, &NFCProxyServerNet_ServerModule::OnReqEnterGameServerWS);
	m_pNetModule->AddReceiveCallBack(NFMsg::EGMI_REQ_ENTER_GAME, this, &NFCProxyServerNet_ServerModule::OnReqEnterGameServer);
	m_pNetModule->AddReceiveCallBack(this, &NFCProxyServerNet_ServerModule::OnOtherMessage);
	m_pWebSocketModule->AddReceiveCallBack(this, &NFCProxyServerNet_ServerModule::OnOtherMessageWS);
	m_pWebSocketModule->SetEventCallBack(this, &NFCProxyServerNet_ServerModule::OnSocketClientEventWS);
	m_pNetModule->AddEventCallBack(this, &NFCProxyServerNet_ServerModule::OnSocketClientEvent);
	m_pNetModule->ExpandBufferSize(1024*1024*2);

    NF_SHARE_PTR<NFIClass> xLogicClass = m_pClassModule->GetElement(NFrame::Server::ThisName());
    if (xLogicClass)
    {
		const std::vector<std::string>& strIdList = xLogicClass->GetIDList();
		for (int i = 0; i < strIdList.size(); ++i)
		{
			const std::string& strId = strIdList[i];

            const int nServerType = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::Type());
            const int nServerID = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::ServerID());
            if (nServerType == NF_SERVER_TYPES::NF_ST_PROXY && pPluginManager->GetAppID() == nServerID)
            {
                const int nPort = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::Port());
                const int nMaxConnect = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::MaxOnline());
                const int nCpus = m_pElementModule->GetPropertyInt32(strId, NFrame::Server::CpuCount());
                //const std::string& strName = m_pElementModule->GetPropertyString(strId, NFrame::Server::Name());
                //const std::string& strIP = m_pElementModule->GetPropertyString(strId, NFrame::Server::IP());

                //int nRet = m_pNetModule->Initialization(nMaxConnect, nPort, nCpus);
				//TODO
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

bool NFCProxyServerNet_ServerModule::Shut()
{
    return true;
}

bool NFCProxyServerNet_ServerModule::Execute()
{
	return true;
}
void NFCProxyServerNet_ServerModule::OnOtherMessageWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen)
{
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject || pNetObject->GetConnectKeyState() <= 0 || pNetObject->GetGameID() <= 0)
	{
		//state error
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

	NFMsg::MsgBase xMsg;
	if (!xMsg.ParseFromString(strMsgData))
	{
		char szData[MAX_PATH] = { 0 };
		sprintf(szData, "Parse Message Failed from Packet to MsgBase, MessageID: %d\n", nMsgID);

		return;
	}


	//real user id
	*xMsg.mutable_player_id() = NFINetModule::NFToPB(pNetObject->GetUserID());


	std::string strMsg;
	if (!xMsg.SerializeToString(&strMsg))
	{
		return;
	}

	if (xMsg.has_hash_ident())
	{
		//special for distributed
		if (!pNetObject->GetHashIdentID().IsNull())
		{
			m_pNetClientModule->SendBySuitWithOutHead(NF_SERVER_TYPES::NF_ST_GAME, pNetObject->GetHashIdentID().ToString(), nMsgID, strMsg);
		}
		else
		{
			NFGUID xHashIdent = NFINetModule::PBToNF(xMsg.hash_ident());
			m_pNetClientModule->SendBySuitWithOutHead(NF_SERVER_TYPES::NF_ST_GAME, xHashIdent.ToString(), nMsgID, strMsg);
		}
	}
	else
	{
		m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), nMsgID, strMsg);
	}
}
void NFCProxyServerNet_ServerModule::OnOtherMessage(const NFSOCK nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen)
{
	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject || pNetObject->GetConnectKeyState() <= 0 || pNetObject->GetGameID() <= 0)
	{
		//state error
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

	NFMsg::MsgBase xMsg;
	if (!xMsg.ParseFromString(strMsgData))
	{
		char szData[MAX_PATH] = { 0 };
		sprintf(szData, "Parse Message Failed from Packet to MsgBase, MessageID: %d\n", nMsgID);

		return;
	}


	//real user id
	*xMsg.mutable_player_id() = NFINetModule::NFToPB(pNetObject->GetUserID());


	std::string strMsg;
	if (!xMsg.SerializeToString(&strMsg))
	{
		return;
	}

	if (xMsg.has_hash_ident())
	{
		//special for distributed
		if (!pNetObject->GetHashIdentID().IsNull())
		{
			m_pNetClientModule->SendBySuitWithOutHead(NF_SERVER_TYPES::NF_ST_GAME, pNetObject->GetHashIdentID().ToString(), nMsgID, strMsg);
		}
		else
		{
			NFGUID xHashIdent = NFINetModule::PBToNF(xMsg.hash_ident());
			m_pNetClientModule->SendBySuitWithOutHead(NF_SERVER_TYPES::NF_ST_GAME, xHashIdent.ToString(), nMsgID, strMsg);
		}
	}
	else
	{
		m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), nMsgID, strMsg);
	}
}

void NFCProxyServerNet_ServerModule::OnConnectKeyProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldResultsProces1111s----------------");
    NFGUID nPlayerID;
    NFMsg::ReqAccountLogin xMsg;
    if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xMsg, nPlayerID))
    {
        return;
    }

	bool bRet = m_pSecurityModule->VirifySecurityKey(xMsg.account(), xMsg.security_code());
    //bool bRet = m_pProxyToWorldModule->VerifyConnectData(xMsg.account(), xMsg.security_code());
    if (bRet)
    {
        NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
        if (pNetObject)
        {
            //this net-object verify successful and set state as true
            pNetObject->SetConnectKeyState(1);
			pNetObject->SetSecurityKey(xMsg.security_code());

            //this net-object bind a user's account
            pNetObject->SetAccount(xMsg.account());

            NFMsg::AckEventResult xSendMsg;
            xSendMsg.set_event_code(NFMsg::EGEC_VERIFY_KEY_SUCCESS);
            *xSendMsg.mutable_event_client() = NFINetModule::NFToPB(pNetObject->GetClientID());

			m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_CONNECT_KEY, xSendMsg, nSockIndex);
        }
    }
    else
    {
        //if verify failed then close this connect
		m_pNetModule->GetNet()->CloseNetObject(nSockIndex);
    }
}
void NFCProxyServerNet_ServerModule::OnSocketClientEventWS(websocketpp::connection_hdl hdl, NF_WS_EVENT event) {
	switch (event)
	{
	case NF_WS_EVENT_OPEN:
		OnClientConnectedWS(hdl);
		break;
	case NF_WS_EVENT_CLOSE:
		OnClientDisconnectWS(hdl);
		break;
	case NF_WS_EVENT_FAIL:
		OnClientDisconnectWS(hdl);
		break;
	case NF_WS_EVENT_INTERRUPT:
		OnClientDisconnectWS(hdl);
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
void NFCProxyServerNet_ServerModule::OnSocketClientEvent(const NFSOCK nSockIndex, const NF_NET_EVENT eEvent, NFINet* pNet)
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

void NFCProxyServerNet_ServerModule::OnClientDisconnectWS(websocketpp::connection_hdl nAddress)
{
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nAddress);
	if (pNetObject)
	{
		int nGameID = pNetObject->GetGameID();
		if (nGameID > 0)
		{
			//when a net-object bind a account then tell that game-server
			if (!pNetObject->GetUserID().IsNull())
			{
				NFMsg::ReqLeaveGameServer xData;
				xData.set_arg(nGameID);

				NFMsg::MsgBase xMsg;

				//real user id
				*xMsg.mutable_player_id() = NFINetModule::NFToPB(pNetObject->GetUserID());

				if (!xData.SerializeToString(xMsg.mutable_msg_data()))
				{
					return;
				}

				std::string strMsg;
				if (!xMsg.SerializeToString(&strMsg))
				{
					return;
				}

				m_pNetClientModule->SendByServerIDWithOutHead(nGameID, NFMsg::EGameMsgID::EGMI_REQ_LEAVE_GAME, strMsg);
			}
		}

		mxClientIdent.RemoveElement(pNetObject->GetClientID());
	}
}

void NFCProxyServerNet_ServerModule::OnClientDisconnect(const NFSOCK nAddress)
{
    NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nAddress);
    if (pNetObject)
    {
        int nGameID = pNetObject->GetGameID();
        if (nGameID > 0)
        {
            //when a net-object bind a account then tell that game-server
            if (!pNetObject->GetUserID().IsNull())
            {
                NFMsg::ReqLeaveGameServer xData;
				xData.set_arg(nGameID);

                NFMsg::MsgBase xMsg;

				//real user id
                *xMsg.mutable_player_id() = NFINetModule::NFToPB(pNetObject->GetUserID());

                if (!xData.SerializeToString(xMsg.mutable_msg_data()))
                {
                    return;
                }

                std::string strMsg;
                if (!xMsg.SerializeToString(&strMsg))
                {
                    return;
                }

				m_pNetClientModule->SendByServerIDWithOutHead(nGameID, NFMsg::EGameMsgID::EGMI_REQ_LEAVE_GAME, strMsg);
            }
        }

        mxClientIdent.RemoveElement(pNetObject->GetClientID());
    }
}
void NFCProxyServerNet_ServerModule::OnSelectServerProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

	NFGUID nPlayerID;
	NFMsg::ReqSelectServer xMsg;
	if (!m_pNetModule->ReceivePB(nMsgID, strMsgData, xMsg, nPlayerID))
	{
		return;
	}

	NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xMsg.world_id());
	if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
	{
		//Modify: not need check pNetObject again by wenmin
		//NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
		//if (pNetObject)
		//{
		//now this client bind a game server, all message will be sent to this game server whom bind with client
		pNetObject->SetGameID(xMsg.world_id());

		NFMsg::AckEventResult xMsg;
		xMsg.set_event_code(NFMsg::EGameEventCode::EGEC_SELECTSERVER_SUCCESS);
		m_pWebSocketModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_SELECT_SERVER, xMsg, nSockIndex);
		return;
		//}
	}

	//actually, if you want the game server working with a good performance then we need to find the game server with lowest workload
	int nWorkload = 999999;
	int nGameID = 0;
	NFMapEx<int, ConnectData>& xServerList = m_pNetClientModule->GetServerList();
	ConnectData* pGameData = xServerList.FirstNude();
	while (pGameData)
	{
		if (ConnectDataState::NORMAL == pGameData->eState
			&& NF_SERVER_TYPES::NF_ST_GAME == pGameData->eServerType)
		{
			if (pGameData->nWorkLoad < nWorkload)
			{
				nWorkload = pGameData->nWorkLoad;
				nGameID = pGameData->nGameID;
			}
		}

		pGameData = xServerList.NextNude();
	}

	if (nGameID > 0)
	{
		pNetObject->SetGameID(nGameID);

		NFMsg::AckEventResult xMsg;
		xMsg.set_event_code(NFMsg::EGameEventCode::EGEC_SELECTSERVER_SUCCESS);
		m_pWebSocketModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_SELECT_SERVER, xMsg, nSockIndex);
		return;
	}


	NFMsg::AckEventResult xSendMsg;
	xSendMsg.set_event_code(NFMsg::EGameEventCode::EGEC_SELECTSERVER_FAIL);
	m_pWebSocketModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_SELECT_SERVER, xMsg, nSockIndex);
}
void NFCProxyServerNet_ServerModule::OnSelectServerProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldResult3333sProcess----------------");
	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

    NFGUID nPlayerID;
    NFMsg::ReqSelectServer xMsg;
    if (!m_pNetModule->ReceivePB( nMsgID, strMsgData, xMsg, nPlayerID))
    {
        return;
    }

    NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xMsg.world_id());
    if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
    {
	//Modify: not need check pNetObject again by wenmin
        //NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
        //if (pNetObject)
        //{
            //now this client bind a game server, all message will be sent to this game server whom bind with client
            pNetObject->SetGameID(xMsg.world_id());

            NFMsg::AckEventResult xMsg;
            xMsg.set_event_code(NFMsg::EGameEventCode::EGEC_SELECTSERVER_SUCCESS);
			m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_SELECT_SERVER, xMsg, nSockIndex);
            return;
        //}
    }

    //actually, if you want the game server working with a good performance then we need to find the game server with lowest workload
	int nWorkload = 999999;
	int nGameID = 0;
    NFMapEx<int, ConnectData>& xServerList = m_pNetClientModule->GetServerList();
    ConnectData* pGameData = xServerList.FirstNude();
    while (pGameData)
    {
        if (ConnectDataState::NORMAL == pGameData->eState
            && NF_SERVER_TYPES::NF_ST_GAME == pGameData->eServerType)
        {
			if (pGameData->nWorkLoad < nWorkload)
			{
				nWorkload = pGameData->nWorkLoad;
				nGameID = pGameData->nGameID;
			}
        }

        pGameData = xServerList.NextNude();
    }

	if (nGameID > 0)
	{
		pNetObject->SetGameID(nGameID);

		NFMsg::AckEventResult xMsg;
		xMsg.set_event_code(NFMsg::EGameEventCode::EGEC_SELECTSERVER_SUCCESS);
		m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_SELECT_SERVER, xMsg, nSockIndex);
		return;
	}
	

    NFMsg::AckEventResult xSendMsg;
    xSendMsg.set_event_code(NFMsg::EGameEventCode::EGEC_SELECTSERVER_FAIL);
	m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_SELECT_SERVER, xMsg, nSockIndex);
}
void NFCProxyServerNet_ServerModule::OnReqServerListProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

	if (pNetObject->GetConnectKeyState() > 0)
	{
		NFGUID nPlayerID;//no value
		NFMsg::ReqServerList xMsg;
		if (!m_pNetModule->ReceivePB(nMsgID, strMsgData, xMsg, nPlayerID))
		{
			return;
		}

		if (xMsg.type() != NFMsg::RSLT_GAMES_ERVER)
		{
			return;
		}

		//ack all gameserver data
		NFMsg::AckServerList xData;
		xData.set_type(NFMsg::RSLT_GAMES_ERVER);

		NFMapEx<int, ConnectData>& xServerList = m_pNetClientModule->GetServerList();
		ConnectData* pGameData = xServerList.FirstNude();
		while (pGameData)
		{
			if (ConnectDataState::NORMAL == pGameData->eState
				&& NF_SERVER_TYPES::NF_ST_GAME == pGameData->eServerType)
			{
				NFMsg::ServerInfo* pServerInfo = xData.add_info();

				pServerInfo->set_name(pGameData->strName);
				pServerInfo->set_status(NFMsg::EServerState::EST_NARMAL);
				pServerInfo->set_server_id(pGameData->nGameID);
				pServerInfo->set_wait_count(0);
			}

			pGameData = xServerList.NextNude();
		}

		m_pWebSocketModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_WORLD_LIST, xData, nSockIndex);
	}
}
void NFCProxyServerNet_ServerModule::OnReqServerListProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldResultsProces4444s----------------");
	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

    if (pNetObject->GetConnectKeyState() > 0)
    {
		NFGUID nPlayerID;//no value
		NFMsg::ReqServerList xMsg;
		if (!m_pNetModule->ReceivePB( nMsgID, strMsgData, xMsg, nPlayerID))
		{
			return;
		}

		if (xMsg.type() != NFMsg::RSLT_GAMES_ERVER)
		{
			return;
		}

        //ack all gameserver data
        NFMsg::AckServerList xData;
        xData.set_type(NFMsg::RSLT_GAMES_ERVER);

        NFMapEx<int, ConnectData>& xServerList = m_pNetClientModule->GetServerList();
        ConnectData* pGameData = xServerList.FirstNude();
        while (pGameData)
        {
            if (ConnectDataState::NORMAL == pGameData->eState
				&& NF_SERVER_TYPES::NF_ST_GAME == pGameData->eServerType)
            {
                NFMsg::ServerInfo* pServerInfo = xData.add_info();

                pServerInfo->set_name(pGameData->strName);
                pServerInfo->set_status(NFMsg::EServerState::EST_NARMAL);
                pServerInfo->set_server_id(pGameData->nGameID);
                pServerInfo->set_wait_count(0);
            }

            pGameData = xServerList.NextNude();
        }

		m_pNetModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_WORLD_LIST, xData, nSockIndex);
    }
}

int NFCProxyServerNet_ServerModule::Transpond(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
    NFMsg::MsgBase xMsg;
    if (!xMsg.ParseFromArray(msg, nLen))
    {
        char szData[MAX_PATH] = { 0 };
        sprintf(szData, "Parse Message Failed from Packet to MsgBase, MessageID: %d\n", nMsgID);

        return false;
    }

    //broadcast many palyers
    for (int i = 0; i < xMsg.player_client_list_size(); ++i)
    {
        NF_SHARE_PTR<NFSOCK> pFD = mxClientIdent.GetElement(NFINetModule::PBToNF(xMsg.player_client_list(i)));
        if (pFD)
        {
            if (xMsg.has_hash_ident())
            {
                NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(*pFD);
                if (pNetObject)
                {
                    pNetObject->SetHashIdentID(NFINetModule::PBToNF(xMsg.hash_ident()));
                }
            }

			m_pNetModule->SendMsgWithOutHead(nMsgID, std::string(msg, nLen), *pFD);
        }
    }

    //send message to one player
    if (xMsg.player_client_list_size() <= 0)
    {
		NFGUID xClientIdent = NFINetModule::PBToNF(xMsg.player_id());
		NF_SHARE_PTR<websocketpp::connection_hdl> pHdl = mxClientIdentWS.GetElement(xClientIdent);
		if (pHdl)
		{
			if (xMsg.has_hash_ident())
			{
				auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(*pHdl);
				if (pNetObject)
				{
					pNetObject->SetHashIdentID(NFINetModule::PBToNF(xMsg.hash_ident()));
				}
			}

			m_pWebSocketModule->SendMsgWithOutHead(nMsgID, std::string(msg, nLen), *pHdl);
		}
        NF_SHARE_PTR<NFSOCK> pFD = mxClientIdent.GetElement(xClientIdent);
        if (pFD)
        {
            if (xMsg.has_hash_ident())
            {
                NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(*pFD);
                if (pNetObject)
                {
                    pNetObject->SetHashIdentID(NFINetModule::PBToNF(xMsg.hash_ident()));
                }
            }

			m_pNetModule->SendMsgWithOutHead(nMsgID, std::string(msg, nLen), *pFD);
        }
		else if(xClientIdent.IsNull())
		{
			//send this msessage to all clientss
			m_pNetModule->GetNet()->SendMsgToAllClientWithOutHead(nMsgID, msg, nLen);
		}
		//pFD is empty means end of connection, no need to send message to this client any more. And,
		//we should never send a message that specified to a player to all clients here.
		else
		{
		}
    }

    return true;
}
void NFCProxyServerNet_ServerModule::OnClientConnectedWS(websocketpp::connection_hdl hdl)
{
	//bind client'id with socket id
	NFGUID xClientIdent = m_pKernelModule->CreateGUID();
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(hdl);
	if (pNetObject)
	{
		pNetObject->SetClientID(xClientIdent);
	}

	mxClientIdentWS.AddElement(xClientIdent, NF_SHARE_PTR<websocketpp::connection_hdl>(new websocketpp::connection_hdl(hdl)));
}
void NFCProxyServerNet_ServerModule::OnClientConnected(const NFSOCK nAddress)
{
	//bind client'id with socket id
    NFGUID xClientIdent = m_pKernelModule->CreateGUID();
    NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nAddress);
    if (pNetObject)
    {
        pNetObject->SetClientID(xClientIdent);
    }

    mxClientIdent.AddElement(xClientIdent, NF_SHARE_PTR<NFSOCK>(new NFSOCK(nAddress)));
}
void NFCProxyServerNet_ServerModule::OnReqRoleListProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

	NFGUID nPlayerID;
	NFMsg::ReqRoleList xData;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xData, nPlayerID))
	{
		return;
	}

	NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xData.game_id());
	if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
	{
		if (pNetObject->GetConnectKeyState() > 0
			&& pNetObject->GetGameID() == xData.game_id()
			&& pNetObject->GetAccount() == xData.account())
		{
			NFMsg::MsgBase xMsg;
			if (!xData.SerializeToString(xMsg.mutable_msg_data()))
			{
				return;
			}

			//clientid
			xMsg.mutable_player_id()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));

			std::string strMsg;
			if (!xMsg.SerializeToString(&strMsg))
			{
				return;
			}

			m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), NFMsg::EGameMsgID::EGMI_REQ_ROLE_LIST, strMsg);
		}
	}
}
void NFCProxyServerNet_ServerModule::OnReqRoleListProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldResultsProc555555ess----------------");
	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

    NFGUID nPlayerID;
    NFMsg::ReqRoleList xData;
    if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xData, nPlayerID))
    {
        return;
    }

    NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xData.game_id());
    if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
    {
        if (pNetObject->GetConnectKeyState() > 0
            && pNetObject->GetGameID() == xData.game_id()
            && pNetObject->GetAccount() == xData.account())
        {
            NFMsg::MsgBase xMsg;
            if (!xData.SerializeToString(xMsg.mutable_msg_data()))
            {
                return;
            }

			//clientid
            xMsg.mutable_player_id()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));

            std::string strMsg;
            if (!xMsg.SerializeToString(&strMsg))
            {
                return;
            }

			m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), NFMsg::EGameMsgID::EGMI_REQ_ROLE_LIST, strMsg);
        }
    }
}
void NFCProxyServerNet_ServerModule::OnReqCreateRoleProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR555555555556666666esultsProcess----------------");
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR77777esultsProcess----------------");

	NFGUID nPlayerID;//no value
	NFMsg::ReqCreateRole xData;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xData, nPlayerID))
	{
		return;
	}
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR788888esultsProcess----------------");
	NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xData.game_id());
	if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
	{
		if (pNetObject->GetConnectKeyState() > 0
			&& pNetObject->GetGameID() == xData.game_id()
			&& pNetObject->GetAccount() == xData.account())
		{
			NFMsg::MsgBase xMsg;
			if (!xData.SerializeToString(xMsg.mutable_msg_data()))
			{
				return;
			}

			//the clientid == playerid before the player entre the game-server
			xMsg.mutable_player_id()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));

			std::string strMsg;
			if (!xMsg.SerializeToString(&strMsg))
			{
				return;
			}
			m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR9999999esultsProcess----------------");
			m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), nMsgID, strMsg);
		}
	}
}
void NFCProxyServerNet_ServerModule::OnReqCreateRoleProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR555555555556666666esultsProcess----------------");
	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR77777esultsProcess----------------");

    NFGUID nPlayerID;//no value
    NFMsg::ReqCreateRole xData;
    if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xData, nPlayerID))
    {
        return;
    }
	m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR788888esultsProcess----------------");
    NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xData.game_id());
    if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
    {
        if (pNetObject->GetConnectKeyState() > 0
            && pNetObject->GetGameID() == xData.game_id()
            && pNetObject->GetAccount() == xData.account())
        {
            NFMsg::MsgBase xMsg;
            if (!xData.SerializeToString(xMsg.mutable_msg_data()))
            {
                return;
            }
            
            //the clientid == playerid before the player entre the game-server
            xMsg.mutable_player_id()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));

            std::string strMsg;
            if (!xMsg.SerializeToString(&strMsg))
            {
                return;
            }
			m_pLogModule->LogInfo("This is a client, end to print Server Info-----OnSelectWorldR9999999esultsProcess----------------");
			m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), nMsgID, strMsg);
        }
    }
}

void NFCProxyServerNet_ServerModule::OnReqDelRoleProcess(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

    NFGUID nPlayerID;// no value
    NFMsg::ReqDeleteRole xData;
    if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xData, nPlayerID))
    {
        return;
    }

    NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xData.game_id());
	if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
    {
        if (pNetObject->GetConnectKeyState() > 0
            && pNetObject->GetGameID() == xData.game_id()
            && pNetObject->GetAccount() == xData.account())
        {
			NFMsg::MsgBase xMsg;
			if (!xData.SerializeToString(xMsg.mutable_msg_data()))
			{
				return;
			}

			//clientid
			xMsg.mutable_player_id()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));

			std::string strMsg;
			if (!xMsg.SerializeToString(&strMsg))
			{
				return;
			}

			m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), nMsgID, strMsg);
        }
    }
}
void NFCProxyServerNet_ServerModule::OnReqEnterGameServerWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

	NFGUID nPlayerID;//no value
	NFMsg::ReqEnterGameServer xData;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xData, nPlayerID))
	{
		return;
	}

	NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xData.game_id());
	if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
	{
		if (pNetObject->GetConnectKeyState() > 0
			&& pNetObject->GetGameID() == xData.game_id()
			&& pNetObject->GetAccount() == xData.account()
			&& !xData.name().empty()
			&& !xData.account().empty())
		{
			NFMsg::MsgBase xMsg;
			if (!xData.SerializeToString(xMsg.mutable_msg_data()))
			{
				return;
			}

			//clientid
			xMsg.mutable_player_id()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));
			std::string strMsg;
			if (!xMsg.SerializeToString(&strMsg))
			{
				return;
			}

			m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), NFMsg::EGameMsgID::EGMI_REQ_ENTER_GAME, strMsg);
		}
	}
}
void NFCProxyServerNet_ServerModule::OnReqEnterGameServer(const NFSOCK nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
{
	NetObject* pNetObject = m_pNetModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}

	std::string strMsgData = m_pSecurityModule->DecodeMsg(pNetObject->GetAccount(), pNetObject->GetSecurityKey(), nMsgID, msg, nLen);
	if (strMsgData.empty())
	{
		//decode failed
		return;
	}

    NFGUID nPlayerID;//no value
    NFMsg::ReqEnterGameServer xData;
    if (!m_pNetModule->ReceivePB( nMsgID, msg, nLen, xData, nPlayerID))
    {
        return;
    }

    NF_SHARE_PTR<ConnectData> pServerData = m_pNetClientModule->GetServerNetInfo(xData.game_id());
    if (pServerData && ConnectDataState::NORMAL == pServerData->eState)
    {
        if (pNetObject->GetConnectKeyState() > 0
            && pNetObject->GetGameID() == xData.game_id()
            && pNetObject->GetAccount() == xData.account()
            && !xData.name().empty()
            && !xData.account().empty())
        {
            NFMsg::MsgBase xMsg;
            if (!xData.SerializeToString(xMsg.mutable_msg_data()))
            {
                return;
            }

			//clientid
            xMsg.mutable_player_id()->CopyFrom(NFINetModule::NFToPB(pNetObject->GetClientID()));
            std::string strMsg;
            if (!xMsg.SerializeToString(&strMsg))
            {
                return;
            }

			m_pNetClientModule->SendByServerIDWithOutHead(pNetObject->GetGameID(), NFMsg::EGameMsgID::EGMI_REQ_ENTER_GAME, strMsg);
        }
    }
}

void NFCProxyServerNet_ServerModule::OnWebSocketReciveTest(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen)
{
	NFGUID nPlayerID;
	NFMsg::ReqAccountLogin xMsg;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xMsg, nPlayerID))
	{
		return;
	}


	bool bRet = m_pSecurityModule->VirifySecurityKey(xMsg.account(), xMsg.security_code());
	//bool bRet = m_pProxyToWorldModule->VerifyConnectData(xMsg.account(), xMsg.security_code());
	if (bRet)
	{
		auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
		if (pNetObject)
		{
			//this net-object verify successful and set state as true
			pNetObject->SetConnectKeyState(1);
			pNetObject->SetSecurityKey(xMsg.security_code());

			//this net-object bind a user's account
			pNetObject->SetAccount(xMsg.account());

			NFMsg::AckEventResult xSendMsg;
			xSendMsg.set_event_code(NFMsg::EGEC_VERIFY_KEY_SUCCESS);
			*xSendMsg.mutable_event_client() = NFINetModule::NFToPB(pNetObject->GetClientID());

			m_pWebSocketModule->SendMsgPB(NFMsg::EGameMsgID::EGMI_ACK_CONNECT_KEY, xSendMsg, nSockIndex);
		}
	}
	else
	{
		//if verify failed then close this connect
		//m_pWebSocketModule->GetNet()->CloseNetObject(nSockIndex);
	}
}

int NFCProxyServerNet_ServerModule::EnterGameSuccessEvent(const NFGUID xClientID, const NFGUID xPlayerID)
{
	NF_SHARE_PTR<websocketpp::connection_hdl> pHdl = mxClientIdentWS.GetElement(xClientID);
	if (pHdl)
	{
		auto pNetObeject = m_pWebSocketModule->GetNet()->GetNetObject(*pHdl);
		if (pNetObeject)
		{
			pNetObeject->SetUserID(xPlayerID);
		}
	}
	else {
		NF_SHARE_PTR<NFSOCK> pFD = mxClientIdent.GetElement(xClientID);
		if (pFD)
		{
			NetObject* pNetObeject = m_pNetModule->GetNet()->GetNetObject(*pFD);
			if (pNetObeject)
			{
				pNetObeject->SetUserID(xPlayerID);
			}
		}
	}
    return 0;
}
