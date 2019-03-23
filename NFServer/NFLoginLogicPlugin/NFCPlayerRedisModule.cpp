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

#include "NFCPlayerRedisModule.h"
#include "NFCCommonRedisModule.h"

/**
处理角色信息 账号--》角色
*/
NFCPlayerRedisModule::NFCPlayerRedisModule(NFIPluginManager * p)
{
	pPluginManager = p;
}

bool NFCPlayerRedisModule::Init()
{
	m_pLogicClassModule = pPluginManager->FindModule<NFIClassModule>();
	m_pNoSqlModule = pPluginManager->FindModule<NFINoSqlModule>();
	m_pCommonRedisModule = pPluginManager->FindModule<NFICommonRedisModule>();
	m_pKernelModule = pPluginManager->FindModule<NFIKernelModule>();
	m_pLogModule = pPluginManager->FindModule<NFILogModule>();
	m_pWebSocketModule = pPluginManager->FindModule<NFIWebsocketModule>();
	m_pSecurityModule = pPluginManager->FindModule<NFISecurityModule>();
	m_pNetModule = pPluginManager->FindModule<NFINetModule>();
	m_pNetClientModule = pPluginManager->FindModule<NFINetClientModule>();
	return true;
}

bool NFCPlayerRedisModule::Shut()
{
	return true;
}

bool NFCPlayerRedisModule::Execute()
{
	return true;
}

bool NFCPlayerRedisModule::AfterInit()
{
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_ROLE_LIST, this, &NFCPlayerRedisModule::OnReqRoleListProcessWS);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_CREATE_ROLE, this, &NFCPlayerRedisModule::OnCreateRoleGameProcessWS);
	m_pWebSocketModule->AddReceiveCallBack(NFMsg::EGMI_REQ_LOAD_ROLE_DATA, this, &NFCPlayerRedisModule::OnReqLoadRoleDataWS);

	//查询用户
	return true;
}
void NFCPlayerRedisModule::OnReqLoadRoleDataWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen) {
	
	auto pNetObject = m_pWebSocketModule->GetNet()->GetNetObject(nSockIndex);
	if (!pNetObject)
	{
		return;
	}
	NFGUID nClientID;
	NFMsg::ReqRoleData xMsg;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xMsg, nClientID)) {
		return;
	}
	auto strAccount = xMsg.account();
	auto noob_name = xMsg.noob_name();
	NFGUID xPlayerID;
	std::string strRoleName;
	if (!GetRoleInfo(xMsg.account(), strRoleName, xPlayerID)) {
		return;
	}
	if (noob_name.compare(strRoleName)==0) {
		NFMsg::RoleDataPack xRoleDataxMsg;
		NFGUID nRoleId = NFINetModule::PBToNF(xMsg.role_id());
		LoadPlayerData(nRoleId, xRoleDataxMsg);
		xRoleDataxMsg.mutable_id()->CopyFrom(xMsg.role_id());
		m_pWebSocketModule->SendMsgPB(NFMsg::EGMI_ACK_LOAD_ROLE_DATA, xRoleDataxMsg, nSockIndex);

	}

}

//创建角色请求
void NFCPlayerRedisModule::OnCreateRoleGameProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char * msg, const uint32_t nLen)
{
	NFGUID nClientID;
	NFMsg::ReqCreateRole xMsg;
	if (!m_pNetModule->ReceivePB(nMsgID, msg, nLen, xMsg, nClientID))
	{
		return;
	}

	const std::string& strAccount = xMsg.account();
	const std::string& strName = xMsg.noob_name();
	const int nHomeSceneID = 1;//TODO TileSceneId??
	NFGUID xID = m_pKernelModule->CreateGUID();

	if (CreateRole(strAccount, strName, xID, nHomeSceneID))
	{
		SavePlayerTile(nHomeSceneID, xID, "");

		NFMsg::AckRoleLiteInfoList xAckRoleLiteInfoList;
		xAckRoleLiteInfoList.set_account(strAccount);

		NFMsg::RoleLiteInfo* pData = xAckRoleLiteInfoList.add_char_data();
		pData->mutable_id()->CopyFrom(NFINetModule::NFToPB(xID));
		pData->set_career(xMsg.career());
		pData->set_game_id(pPluginManager->GetAppID());
		pData->set_sex(xMsg.sex());
		pData->set_race(xMsg.race());
		pData->set_noob_name(xMsg.noob_name());
		pData->set_role_level(1);
		pData->set_delete_time(0);
		pData->set_reg_time(0);
		pData->set_last_offline_time(0);
		pData->set_last_offline_ip(0);
		pData->set_view_record("");

		m_pWebSocketModule->SendMsgPB(NFMsg::EGMI_ACK_ROLE_LIST, xAckRoleLiteInfoList, nSockIndex);
	}
}
void NFCPlayerRedisModule::OnReqRoleListProcessWS(websocketpp::connection_hdl nSockIndex, const int nMsgID, const char* msg, const uint32_t nLen)
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
	NFGUID xPlayerID;
	std::string strRoleName;
	if (!GetRoleInfo(xData.account(), strRoleName, xPlayerID))
	{
		NFMsg::AckRoleLiteInfoList xAckRoleLiteInfoList;
		xAckRoleLiteInfoList.set_account(xData.account());
		m_pWebSocketModule->SendMsgPB(NFMsg::EGMI_ACK_ROLE_LIST, xAckRoleLiteInfoList, nSockIndex);
		return;
	}
	NFMsg::AckRoleLiteInfoList xAckRoleLiteInfoList;
	xAckRoleLiteInfoList.set_account(xData.account());

	NFMsg::RoleLiteInfo* pData = xAckRoleLiteInfoList.add_char_data();
	pData->mutable_id()->CopyFrom(NFINetModule::NFToPB(xPlayerID));
	pData->set_game_id(pPluginManager->GetAppID());
	pData->set_career(0);
	pData->set_sex(0);
	pData->set_race(0);
	pData->set_noob_name(strRoleName);
	pData->set_role_level(0);
	pData->set_delete_time(0);
	pData->set_reg_time(0);
	pData->set_last_offline_time(0);
	pData->set_last_offline_ip(0);
	pData->set_view_record("");

	m_pWebSocketModule->SendMsgPB(NFMsg::EGMI_ACK_ROLE_LIST, xAckRoleLiteInfoList, nSockIndex);

}

bool NFCPlayerRedisModule::LoadPlayerData(const NFGUID & self, NFMsg::RoleDataPack& roleData)
{
	NFCCommonRedisModule* pCommonRedisModule = (NFCCommonRedisModule*)(m_pCommonRedisModule);

	NF_SHARE_PTR<NFIPropertyManager> xPropertyManager = m_pCommonRedisModule->GetPropertyInfo(self, NFrame::Player::ThisName());
	if (xPropertyManager)
	{
		*(roleData.mutable_property()->mutable_player_id()) = NFINetModule::NFToPB(self);

		pCommonRedisModule->ConvertPropertyManagerToPB(xPropertyManager, roleData.mutable_property());

		pCommonRedisModule->GetRecordInfo(self, NFrame::Player::ThisName(), roleData.mutable_record());
		
		return true;
	}

	

	/*
	if (xRecordManager)
	{
		NF_SHARE_PTR<NFIRecord> xRecord = xRecordManager->First();
		while (xRecord)
		{
			NFMsg::ObjectRecordBase* pRecord = roleData.mutable_record()->add_record_list();

			pCommonRedisModule->ConvertRecordToPB(xRecord, pRecord);

			xRecord = xRecordManager->Next();
		}
	}
	*/
	m_pLogModule->LogNormal(NFILogModule::NF_LOG_LEVEL::NLL_ERROR_NORMAL, self, "loaded data false", NFGetTimeMS());

	return false;
}

bool NFCPlayerRedisModule::SavePlayerData(const NFGUID & self, const NFMsg::RoleDataPack& roleData)
{
	NFCCommonRedisModule* pCommonRedisModule = (NFCCommonRedisModule*)m_pCommonRedisModule;

	NF_SHARE_PTR<NFIPropertyManager> xPropManager = pCommonRedisModule->NewPropertyManager(NFrame::Player::ThisName());
	if (pCommonRedisModule->ConvertPBToPropertyManager(roleData.property(), xPropManager))
	{
		m_pCommonRedisModule->SavePropertyInfo(self, xPropManager);
	}

	pCommonRedisModule->SaveRecordInfo(self, roleData.record(), -1);

	return true;
}

bool NFCPlayerRedisModule::SavePlayerTile(const int nSceneID, const NFGUID & self, const std::string & strTileData)
{
	std::string strTileKey = m_pCommonRedisModule->GetTileCacheKey(nSceneID);
	NF_SHARE_PTR<NFIRedisClient> xNoSqlDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (xNoSqlDriver)
	{
		return xNoSqlDriver->HSET(strTileKey, self.ToString(), strTileData);
	}

	return false;
}

bool NFCPlayerRedisModule::LoadPlayerTile(const int nSceneID, const NFGUID & self, std::string & strTileData)
{
	std::string strTileKey = m_pCommonRedisModule->GetTileCacheKey(nSceneID);
	NF_SHARE_PTR<NFIRedisClient> xNoSqlDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (xNoSqlDriver && xNoSqlDriver->EXISTS(strTileKey))
	{
		return xNoSqlDriver->HGET(strTileKey, self.ToString(), strTileData);
	}

	return false;
}

bool NFCPlayerRedisModule::LoadPlayerTileRandom(const int nSceneID, NFGUID& xPlayer, std::string & strTileData)
{
	std::string strTileKey = m_pCommonRedisModule->GetTileCacheKey(nSceneID);
	NF_SHARE_PTR<NFIRedisClient> xNoSqlDriver = m_pNoSqlModule->GetDriverBySuit(xPlayer.ToString());
	if (xNoSqlDriver && xNoSqlDriver->EXISTS(strTileKey))
	{
		//its a good way to cache these keys to boost the performance
		std::vector<std::string> vKeys;
		if (xNoSqlDriver->HKEYS(strTileKey, vKeys))
		{
			int nKeyIndex = m_pKernelModule->Random(0, (int)vKeys.size());
			std::string strKey = vKeys[nKeyIndex];
			if (xPlayer.FromString(strKey) && xNoSqlDriver->HGET(strTileKey, strKey, strTileData))
			{

				return true;
			}
		}
	}

	return false;
}

bool NFCPlayerRedisModule::LoadPlayerTileRandomCache(const NFGUID & xPlayer, std::string & strTileData)
{

	return false;
}

NFINT64 NFCPlayerRedisModule::GetPropertyInt(const NFGUID & self, const std::string & strPropertyName)
{
	NF_SHARE_PTR<NFIRedisClient> pDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (!pDriver)
	{
		return 0;
	}

	std::string strValue;
	std::string strCacheKey = m_pCommonRedisModule->GetPropertyCacheKey(self);
	if (!pDriver->HGET(strCacheKey, strPropertyName, strValue))
	{
		return 0;
	}

	return lexical_cast<NFINT64>(strValue);
}

int NFCPlayerRedisModule::GetPropertyInt32(const NFGUID & self, const std::string & strPropertyName)
{
	NF_SHARE_PTR<NFIRedisClient> pDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (!pDriver)
	{
		return 0;
	}

	std::string strValue;
	std::string strCacheKey = m_pCommonRedisModule->GetPropertyCacheKey(self);
	if (!pDriver->HGET(strCacheKey, strPropertyName, strValue))
	{
		return 0;
	}

	return lexical_cast<NFINT64>(strValue);
}

double NFCPlayerRedisModule::GetPropertyFloat(const NFGUID & self, const std::string & strPropertyName)
{
	NF_SHARE_PTR<NFIRedisClient> pDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (!pDriver)
	{
		return 0;
	}

	std::string strValue;
	std::string strCacheKey = m_pCommonRedisModule->GetPropertyCacheKey(self);
	if (!pDriver->HGET(strCacheKey, strPropertyName, strValue))
	{
		return 0;
	}

	return lexical_cast<double>(strValue);
}

std::string NFCPlayerRedisModule::GetPropertyString(const NFGUID & self, const std::string & strPropertyName)
{
	NF_SHARE_PTR<NFIRedisClient> pDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (!pDriver)
	{
		return "";
	}

	std::string strValue;
	std::string strCacheKey = m_pCommonRedisModule->GetPropertyCacheKey(self);
	if (!pDriver->HGET(strCacheKey, strPropertyName, strValue))
	{
		return "";
	}

	return strValue;
}

NFGUID NFCPlayerRedisModule::GetPropertyObject(const NFGUID & self, const std::string & strPropertyName)
{
	NF_SHARE_PTR<NFIRedisClient> pDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (!pDriver)
	{
		return NFGUID();
	}

	std::string strValue;
	std::string strCacheKey = m_pCommonRedisModule->GetPropertyCacheKey(self);
	if (!pDriver->HGET(strCacheKey, strPropertyName, strValue))
	{
		return NFGUID();
	}
	NFGUID xID;
	xID.FromString(strValue);
	return xID;
}

NFVector2 NFCPlayerRedisModule::GetPropertyVector2(const NFGUID & self, const std::string & strPropertyName)
{
	NF_SHARE_PTR<NFIRedisClient> pDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (!pDriver)
	{
		return NFVector2();
	}

	std::string strValue;
	std::string strCacheKey = m_pCommonRedisModule->GetPropertyCacheKey(self);
	if (!pDriver->HGET(strCacheKey, strPropertyName, strValue))
	{
		return NFVector2();
	}

	NFVector2 xValue;
	xValue.FromString(strValue);
	return xValue;
}

NFVector3 NFCPlayerRedisModule::GetPropertyVector3(const NFGUID & self, const std::string & strPropertyName)
{
	NF_SHARE_PTR<NFIRedisClient> pDriver = m_pNoSqlModule->GetDriverBySuit(self.ToString());
	if (!pDriver)
	{
		return NFVector3();
	}

	std::string strValue;
	std::string strCacheKey = m_pCommonRedisModule->GetPropertyCacheKey(self);
	if (!pDriver->HGET(strCacheKey, strPropertyName, strValue))
	{
		return NFVector3();
	}

	NFVector3 xValue;
	xValue.FromString(strValue);
	return xValue;
}

std::string NFCPlayerRedisModule::GetOnlineGameServerKey()
{
	//if (strValue == "**nonexistent-key**")
	return "OnlineGameKey";
}

std::string NFCPlayerRedisModule::GetOnlineProxyServerKey()
{
	return "OnlineProxyKey";
}


bool NFCPlayerRedisModule::ExistRoleName(const std::string & strRoleName)
{
	NF_SHARE_PTR<NFIRedisClient> xNoSqlDriver = m_pNoSqlModule->GetDriverBySuitConsistent();
	if (xNoSqlDriver)
	{
		return xNoSqlDriver->EXISTS(strRoleName);
	}

	return false;
}

bool NFCPlayerRedisModule::CreateRole(const std::string & strAccount, const std::string & strRoleName, const NFGUID & id, const int nHomeSceneID)
{
	const std::string strAccountKey = m_pCommonRedisModule->GetAccountCacheKey(strAccount);
	NF_SHARE_PTR<NFIRedisClient> xNoSqlDriver = m_pNoSqlModule->GetDriverBySuit(strAccount);
	if (xNoSqlDriver)
	{
		if (xNoSqlDriver->EXISTS(strAccountKey) && !xNoSqlDriver->EXISTS(strRoleName))
		{
			std::vector<std::string> vecFields;
			std::vector<std::string> vecValues;

			vecFields.push_back(NFrame::Player::Name());
			vecFields.push_back(NFrame::Player::ID());

			vecValues.push_back(strRoleName);
			vecValues.push_back(id.ToString());

			xNoSqlDriver->HMSET(strAccountKey, vecFields, vecValues);

			NF_SHARE_PTR<NFIRedisClient> xRoleNameNoSqlDriver = m_pNoSqlModule->GetDriverBySuitConsistent();
			if (xRoleNameNoSqlDriver)
			{
				//the name ref to the guid
				xRoleNameNoSqlDriver->HSET(strRoleName, NFrame::Player::ID(), id.ToString());
			}

			NF_SHARE_PTR<NFIPropertyManager> xPropertyManager = m_pCommonRedisModule->NewPropertyManager(NFrame::Player::ThisName());
			if (xPropertyManager)
			{
				NF_SHARE_PTR<NFIProperty> xProperty = xPropertyManager->GetElement(NFrame::Player::Account());
				if (xProperty)
				{
					xProperty->SetString(strAccount);
				}

				xProperty = xPropertyManager->GetElement(NFrame::Player::Level());
				if (xProperty)
				{
					xProperty->SetInt(1);
				}

				xProperty = xPropertyManager->GetElement(NFrame::Player::HomeSceneID());
				if (xProperty)
				{
					xProperty->SetInt(nHomeSceneID);
				}

				xProperty = xPropertyManager->GetElement(NFrame::Player::Name());
				if (xProperty)
				{
					xProperty->SetString(strRoleName);
				}

				m_pCommonRedisModule->SavePropertyInfo(id, xPropertyManager);
			}

			return true;
		}
	}

	return false;
}

bool NFCPlayerRedisModule::GetRoleInfo(const std::string & strAccount, std::string & strRoleName, NFGUID & id)
{
	std::string strAccountKey = m_pCommonRedisModule->GetAccountCacheKey(strAccount);
	NF_SHARE_PTR<NFIRedisClient> xNoSqlDriver = m_pNoSqlModule->GetDriverBySuit(strAccount);
	if (xNoSqlDriver)
	{
		if (xNoSqlDriver->EXISTS(strAccountKey))
		{
			std::string strID;
			bool bRoleNameRet = xNoSqlDriver->HGET(strAccountKey, NFrame::Player::Name(), strRoleName);
			bool bRoleIDRet = xNoSqlDriver->HGET(strAccountKey, NFrame::Player::ID(), strID);
			if (bRoleNameRet && bRoleIDRet
				&& !strRoleName.empty() && !strID.empty())
			{
				return id.FromString(strID);
			}

			return false;
		}
	}

	return false;
}
