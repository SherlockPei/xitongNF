var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.NFMsg = (function() {

    /**
     * Namespace NFMsg.
     * @exports NFMsg
     * @namespace
     */
    var NFMsg = {};

    /**
     * EGameEventCode enum.
     * @name NFMsg.EGameEventCode
     * @enum {string}
     * @property {number} EGEC_SUCCESS=0 EGEC_SUCCESS value
     * @property {number} EGEC_UNKOWN_ERROR=1 EGEC_UNKOWN_ERROR value
     * @property {number} EGEC_ACCOUNT_EXIST=2 EGEC_ACCOUNT_EXIST value
     * @property {number} EGEC_ACCOUNTPWD_INVALID=3 EGEC_ACCOUNTPWD_INVALID value
     * @property {number} EGEC_ACCOUNT_USING=4 EGEC_ACCOUNT_USING value
     * @property {number} EGEC_ACCOUNT_LOCKED=5 EGEC_ACCOUNT_LOCKED value
     * @property {number} EGEC_ACCOUNT_SUCCESS=6 EGEC_ACCOUNT_SUCCESS value
     * @property {number} EGEC_VERIFY_KEY_SUCCESS=7 EGEC_VERIFY_KEY_SUCCESS value
     * @property {number} EGEC_VERIFY_KEY_FAIL=8 EGEC_VERIFY_KEY_FAIL value
     * @property {number} EGEC_SELECTSERVER_SUCCESS=9 EGEC_SELECTSERVER_SUCCESS value
     * @property {number} EGEC_SELECTSERVER_FAIL=10 EGEC_SELECTSERVER_FAIL value
     * @property {number} EGEC_CHARACTER_EXIST=110 EGEC_CHARACTER_EXIST value
     * @property {number} EGEC_SVRZONEID_INVALID=111 EGEC_SVRZONEID_INVALID value
     * @property {number} EGEC_CHARACTER_NUMOUT=112 EGEC_CHARACTER_NUMOUT value
     * @property {number} EGEC_CHARACTER_INVALID=113 EGEC_CHARACTER_INVALID value
     * @property {number} EGEC_CHARACTER_NOTEXIST=114 EGEC_CHARACTER_NOTEXIST value
     * @property {number} EGEC_CHARACTER_USING=115 EGEC_CHARACTER_USING value
     * @property {number} EGEC_CHARACTER_LOCKED=116 EGEC_CHARACTER_LOCKED value
     * @property {number} EGEC_ZONE_OVERLOAD=117 EGEC_ZONE_OVERLOAD value
     * @property {number} EGEC_NOT_ONLINE=118 EGEC_NOT_ONLINE value
     * @property {number} EGEC_ALREAY_IN_TEAM=119 EGEC_ALREAY_IN_TEAM value
     * @property {number} EGEC_INVALID_TEAM_INVITE=120 EGEC_INVALID_TEAM_INVITE value
     * @property {number} EGEC_TEAM_FULL=121 EGEC_TEAM_FULL value
     * @property {number} EGEC_MAIL_UPDATE_ERROR=122 EGEC_MAIL_UPDATE_ERROR value
     * @property {number} EGEC_MAIL_TONAME_INVALID=123 EGEC_MAIL_TONAME_INVALID value
     * @property {number} EGEC_MAIL_DELETE_ERROR=124 EGEC_MAIL_DELETE_ERROR value
     * @property {number} EGEC_MAIL_TOWNAME_EQUAL=125 EGEC_MAIL_TOWNAME_EQUAL value
     * @property {number} EGEC_LACK_MONEY=126 EGEC_LACK_MONEY value
     * @property {number} EGEC_FULL_PACKAGE=127 EGEC_FULL_PACKAGE value
     * @property {number} EGEC_INVALID_ITEM=128 EGEC_INVALID_ITEM value
     * @property {number} EGEC_INVALID_CONSIGNMENT=129 EGEC_INVALID_CONSIGNMENT value
     * @property {number} EGEC_NOT_ENOUGH_VIP=130 EGEC_NOT_ENOUGH_VIP value
     * @property {number} EGEC_NEED_LEVEL=131 EGEC_NEED_LEVEL value
     * @property {number} EGEC_MAX_FRIEND_LIST=132 EGEC_MAX_FRIEND_LIST value
     * @property {number} EGEC_MAX_ENEMY_LIST=133 EGEC_MAX_ENEMY_LIST value
     * @property {number} EGEC_MAX_GANGS_LSIT=134 EGEC_MAX_GANGS_LSIT value
     * @property {number} EGEC_LIMITS_TO_RIGHTS=135 EGEC_LIMITS_TO_RIGHTS value
     * @property {number} EGEC_INVALID_GANGS_NAME=136 EGEC_INVALID_GANGS_NAME value
     * @property {number} EGEC_REPEAT_ENTER_GANGS=137 EGEC_REPEAT_ENTER_GANGS value
     * @property {number} EGEC_INVALID_GANGSMEMBER=138 EGEC_INVALID_GANGSMEMBER value
     * @property {number} EGEC_MASTER_LEAVE_GANGS=139 EGEC_MASTER_LEAVE_GANGS value
     * @property {number} EGEC_GANGS_TITLE_OUTOF=140 EGEC_GANGS_TITLE_OUTOF value
     * @property {number} EGEC_ENTER_GATEWAY_FAILD=141 EGEC_ENTER_GATEWAY_FAILD value
     * @property {number} EGEC_NO_SERVER4ZONE=142 EGEC_NO_SERVER4ZONE value
     * @property {number} EGEC_INVALID_SKILL=143 EGEC_INVALID_SKILL value
     * @property {number} EGEC_CREATE_GUILD_SUCCESS=200 EGEC_CREATE_GUILD_SUCCESS value
     * @property {number} EGEC_JOIN_GUILD_SUCCESS=201 EGEC_JOIN_GUILD_SUCCESS value
     * @property {number} EGEC_LEAVE_GUILD_SUCCESS=202 EGEC_LEAVE_GUILD_SUCCESS value
     */
    NFMsg.EGameEventCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EGEC_SUCCESS"] = 0;
        values[valuesById[1] = "EGEC_UNKOWN_ERROR"] = 1;
        values[valuesById[2] = "EGEC_ACCOUNT_EXIST"] = 2;
        values[valuesById[3] = "EGEC_ACCOUNTPWD_INVALID"] = 3;
        values[valuesById[4] = "EGEC_ACCOUNT_USING"] = 4;
        values[valuesById[5] = "EGEC_ACCOUNT_LOCKED"] = 5;
        values[valuesById[6] = "EGEC_ACCOUNT_SUCCESS"] = 6;
        values[valuesById[7] = "EGEC_VERIFY_KEY_SUCCESS"] = 7;
        values[valuesById[8] = "EGEC_VERIFY_KEY_FAIL"] = 8;
        values[valuesById[9] = "EGEC_SELECTSERVER_SUCCESS"] = 9;
        values[valuesById[10] = "EGEC_SELECTSERVER_FAIL"] = 10;
        values[valuesById[110] = "EGEC_CHARACTER_EXIST"] = 110;
        values[valuesById[111] = "EGEC_SVRZONEID_INVALID"] = 111;
        values[valuesById[112] = "EGEC_CHARACTER_NUMOUT"] = 112;
        values[valuesById[113] = "EGEC_CHARACTER_INVALID"] = 113;
        values[valuesById[114] = "EGEC_CHARACTER_NOTEXIST"] = 114;
        values[valuesById[115] = "EGEC_CHARACTER_USING"] = 115;
        values[valuesById[116] = "EGEC_CHARACTER_LOCKED"] = 116;
        values[valuesById[117] = "EGEC_ZONE_OVERLOAD"] = 117;
        values[valuesById[118] = "EGEC_NOT_ONLINE"] = 118;
        values[valuesById[119] = "EGEC_ALREAY_IN_TEAM"] = 119;
        values[valuesById[120] = "EGEC_INVALID_TEAM_INVITE"] = 120;
        values[valuesById[121] = "EGEC_TEAM_FULL"] = 121;
        values[valuesById[122] = "EGEC_MAIL_UPDATE_ERROR"] = 122;
        values[valuesById[123] = "EGEC_MAIL_TONAME_INVALID"] = 123;
        values[valuesById[124] = "EGEC_MAIL_DELETE_ERROR"] = 124;
        values[valuesById[125] = "EGEC_MAIL_TOWNAME_EQUAL"] = 125;
        values[valuesById[126] = "EGEC_LACK_MONEY"] = 126;
        values[valuesById[127] = "EGEC_FULL_PACKAGE"] = 127;
        values[valuesById[128] = "EGEC_INVALID_ITEM"] = 128;
        values[valuesById[129] = "EGEC_INVALID_CONSIGNMENT"] = 129;
        values[valuesById[130] = "EGEC_NOT_ENOUGH_VIP"] = 130;
        values[valuesById[131] = "EGEC_NEED_LEVEL"] = 131;
        values[valuesById[132] = "EGEC_MAX_FRIEND_LIST"] = 132;
        values[valuesById[133] = "EGEC_MAX_ENEMY_LIST"] = 133;
        values[valuesById[134] = "EGEC_MAX_GANGS_LSIT"] = 134;
        values[valuesById[135] = "EGEC_LIMITS_TO_RIGHTS"] = 135;
        values[valuesById[136] = "EGEC_INVALID_GANGS_NAME"] = 136;
        values[valuesById[137] = "EGEC_REPEAT_ENTER_GANGS"] = 137;
        values[valuesById[138] = "EGEC_INVALID_GANGSMEMBER"] = 138;
        values[valuesById[139] = "EGEC_MASTER_LEAVE_GANGS"] = 139;
        values[valuesById[140] = "EGEC_GANGS_TITLE_OUTOF"] = 140;
        values[valuesById[141] = "EGEC_ENTER_GATEWAY_FAILD"] = 141;
        values[valuesById[142] = "EGEC_NO_SERVER4ZONE"] = 142;
        values[valuesById[143] = "EGEC_INVALID_SKILL"] = 143;
        values[valuesById[200] = "EGEC_CREATE_GUILD_SUCCESS"] = 200;
        values[valuesById[201] = "EGEC_JOIN_GUILD_SUCCESS"] = 201;
        values[valuesById[202] = "EGEC_LEAVE_GUILD_SUCCESS"] = 202;
        return values;
    })();

    /**
     * ESynMsgID enum.
     * @name NFMsg.ESynMsgID
     * @enum {string}
     * @property {number} ESMI_UNKNOW=0 ESMI_UNKNOW value
     */
    NFMsg.ESynMsgID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ESMI_UNKNOW"] = 0;
        return values;
    })();

    /**
     * EGameMsgID enum.
     * @name NFMsg.EGameMsgID
     * @enum {string}
     * @property {number} EGMI_UNKNOW=0 EGMI_UNKNOW value
     * @property {number} EGMI_EVENT_RESULT=1 EGMI_EVENT_RESULT value
     * @property {number} EGMI_EVENT_TRANSPOND=2 EGMI_EVENT_TRANSPOND value
     * @property {number} EGMI_CLOSE_SOCKET=3 EGMI_CLOSE_SOCKET value
     * @property {number} EGMI_WTM_WORLD_REGISTERED=10 EGMI_WTM_WORLD_REGISTERED value
     * @property {number} EGMI_WTM_WORLD_UNREGISTERED=11 EGMI_WTM_WORLD_UNREGISTERED value
     * @property {number} EGMI_WTM_WORLD_REFRESH=12 EGMI_WTM_WORLD_REFRESH value
     * @property {number} EGMI_LTM_LOGIN_REGISTERED=20 EGMI_LTM_LOGIN_REGISTERED value
     * @property {number} EGMI_LTM_LOGIN_UNREGISTERED=21 EGMI_LTM_LOGIN_UNREGISTERED value
     * @property {number} EGMI_LTM_LOGIN_REFRESH=22 EGMI_LTM_LOGIN_REFRESH value
     * @property {number} EGMI_PTWG_PROXY_REGISTERED=30 EGMI_PTWG_PROXY_REGISTERED value
     * @property {number} EGMI_PTWG_PROXY_UNREGISTERED=31 EGMI_PTWG_PROXY_UNREGISTERED value
     * @property {number} EGMI_PTWG_PROXY_REFRESH=32 EGMI_PTWG_PROXY_REFRESH value
     * @property {number} EGMI_GTW_GAME_REGISTERED=40 EGMI_GTW_GAME_REGISTERED value
     * @property {number} EGMI_GTW_GAME_UNREGISTERED=41 EGMI_GTW_GAME_UNREGISTERED value
     * @property {number} EGMI_GTW_GAME_REFRESH=42 EGMI_GTW_GAME_REFRESH value
     * @property {number} EGMI_DTW_DB_REGISTERED=60 EGMI_DTW_DB_REGISTERED value
     * @property {number} EGMI_DTW_DB_UNREGISTERED=61 EGMI_DTW_DB_UNREGISTERED value
     * @property {number} EGMI_DTW_DB_REFRESH=62 EGMI_DTW_DB_REFRESH value
     * @property {number} EGMI_STS_NET_INFO=70 EGMI_STS_NET_INFO value
     * @property {number} EGMI_STS_SERVER_REPORT=90 EGMI_STS_SERVER_REPORT value
     * @property {number} EGMI_STS_HEART_BEAT=100 EGMI_STS_HEART_BEAT value
     * @property {number} EGMI_REQ_LOGIN=101 EGMI_REQ_LOGIN value
     * @property {number} EGMI_ACK_LOGIN=102 EGMI_ACK_LOGIN value
     * @property {number} EGMI_REQ_LOGOUT=103 EGMI_REQ_LOGOUT value
     * @property {number} EGMI_REQ_WORLD_LIST=110 EGMI_REQ_WORLD_LIST value
     * @property {number} EGMI_ACK_WORLD_LIST=111 EGMI_ACK_WORLD_LIST value
     * @property {number} EGMI_REQ_CONNECT_WORLD=112 EGMI_REQ_CONNECT_WORLD value
     * @property {number} EGMI_ACK_CONNECT_WORLD=113 EGMI_ACK_CONNECT_WORLD value
     * @property {number} EGMI_REQ_KICK_CLIENT_INWORLD=114 EGMI_REQ_KICK_CLIENT_INWORLD value
     * @property {number} EGMI_REQ_CONNECT_KEY=120 EGMI_REQ_CONNECT_KEY value
     * @property {number} EGMI_ACK_CONNECT_KEY=122 EGMI_ACK_CONNECT_KEY value
     * @property {number} EGMI_REQ_SELECT_SERVER=130 EGMI_REQ_SELECT_SERVER value
     * @property {number} EGMI_ACK_SELECT_SERVER=131 EGMI_ACK_SELECT_SERVER value
     * @property {number} EGMI_REQ_ROLE_LIST=132 EGMI_REQ_ROLE_LIST value
     * @property {number} EGMI_ACK_ROLE_LIST=133 EGMI_ACK_ROLE_LIST value
     * @property {number} EGMI_REQ_CREATE_ROLE=134 EGMI_REQ_CREATE_ROLE value
     * @property {number} EGMI_REQ_DELETE_ROLE=135 EGMI_REQ_DELETE_ROLE value
     * @property {number} EGMI_REQ_RECOVER_ROLE=136 EGMI_REQ_RECOVER_ROLE value
     * @property {number} EGMI_REQ_LOAD_ROLE_DATA=140 EGMI_REQ_LOAD_ROLE_DATA value
     * @property {number} EGMI_ACK_LOAD_ROLE_DATA=141 EGMI_ACK_LOAD_ROLE_DATA value
     * @property {number} EGMI_REQ_SAVE_ROLE_DATA=142 EGMI_REQ_SAVE_ROLE_DATA value
     * @property {number} EGMI_ACK_SAVE_ROLE_DATA=143 EGMI_ACK_SAVE_ROLE_DATA value
     * @property {number} EGMI_REQ_ENTER_GAME=150 EGMI_REQ_ENTER_GAME value
     * @property {number} EGMI_ACK_ENTER_GAME=151 EGMI_ACK_ENTER_GAME value
     * @property {number} EGMI_REQ_LEAVE_GAME=152 EGMI_REQ_LEAVE_GAME value
     * @property {number} EGMI_ACK_LEAVE_GAME=153 EGMI_ACK_LEAVE_GAME value
     * @property {number} EGMI_REQ_SWAP_GAME=154 EGMI_REQ_SWAP_GAME value
     * @property {number} EGMI_REQ_SWAP_SCENE=155 EGMI_REQ_SWAP_SCENE value
     * @property {number} EGMI_ACK_SWAP_SCENE=156 EGMI_ACK_SWAP_SCENE value
     * @property {number} EGMI_REQ_SWAP_HOME_SCENE=157 EGMI_REQ_SWAP_HOME_SCENE value
     * @property {number} EGMI_ACK_SWAP_HOME_SCENE=158 EGMI_ACK_SWAP_HOME_SCENE value
     * @property {number} EGMI_REQ_ENTER_GAME_FINISH=159 EGMI_REQ_ENTER_GAME_FINISH value
     * @property {number} EGMI_ACK_ENTER_GAME_FINISH=160 EGMI_ACK_ENTER_GAME_FINISH value
     * @property {number} EGMI_REQ_ACK_RELIVE=180 EGMI_REQ_ACK_RELIVE value
     * @property {number} EGMI_ACK_OBJECT_ENTRY=200 EGMI_ACK_OBJECT_ENTRY value
     * @property {number} EGMI_ACK_OBJECT_LEAVE=201 EGMI_ACK_OBJECT_LEAVE value
     * @property {number} EGMI_ACK_OBJECT_PROPERTY_ENTRY=202 EGMI_ACK_OBJECT_PROPERTY_ENTRY value
     * @property {number} EGMI_ACK_OBJECT_RECORD_ENTRY=203 EGMI_ACK_OBJECT_RECORD_ENTRY value
     * @property {number} EGMI_ACK_PROPERTY_INT=210 EGMI_ACK_PROPERTY_INT value
     * @property {number} EGMI_ACK_PROPERTY_FLOAT=211 EGMI_ACK_PROPERTY_FLOAT value
     * @property {number} EGMI_ACK_PROPERTY_STRING=212 EGMI_ACK_PROPERTY_STRING value
     * @property {number} EGMI_ACK_PROPERTY_OBJECT=214 EGMI_ACK_PROPERTY_OBJECT value
     * @property {number} EGMI_ACK_PROPERTY_VECTOR2=215 EGMI_ACK_PROPERTY_VECTOR2 value
     * @property {number} EGMI_ACK_PROPERTY_VECTOR3=216 EGMI_ACK_PROPERTY_VECTOR3 value
     * @property {number} EGMI_ACK_ADD_ROW=220 EGMI_ACK_ADD_ROW value
     * @property {number} EGMI_ACK_REMOVE_ROW=221 EGMI_ACK_REMOVE_ROW value
     * @property {number} EGMI_ACK_SWAP_ROW=222 EGMI_ACK_SWAP_ROW value
     * @property {number} EGMI_ACK_RECORD_INT=223 EGMI_ACK_RECORD_INT value
     * @property {number} EGMI_ACK_RECORD_FLOAT=224 EGMI_ACK_RECORD_FLOAT value
     * @property {number} EGMI_ACK_RECORD_STRING=226 EGMI_ACK_RECORD_STRING value
     * @property {number} EGMI_ACK_RECORD_OBJECT=227 EGMI_ACK_RECORD_OBJECT value
     * @property {number} EGMI_ACK_RECORD_VECTOR2=228 EGMI_ACK_RECORD_VECTOR2 value
     * @property {number} EGMI_ACK_RECORD_VECTOR3=229 EGMI_ACK_RECORD_VECTOR3 value
     * @property {number} EGMI_ACK_RECORD_CLEAR=250 EGMI_ACK_RECORD_CLEAR value
     * @property {number} EGMI_ACK_RECORD_SORT=251 EGMI_ACK_RECORD_SORT value
     * @property {number} EGMI_ACK_DATA_FINISHED=260 EGMI_ACK_DATA_FINISHED value
     * @property {number} EGMI_REQ_START_OPPNENT=1220 EGMI_REQ_START_OPPNENT value
     * @property {number} EGMI_ACK_START_OPPNENT=1221 EGMI_ACK_START_OPPNENT value
     * @property {number} EGMI_REQ_END_OPPNENT=1222 EGMI_REQ_END_OPPNENT value
     * @property {number} EGMI_ACK_END_OPPNENT=1223 EGMI_ACK_END_OPPNENT value
     * @property {number} EGMI_REQ_SEARCH_OPPNENT=1224 EGMI_REQ_SEARCH_OPPNENT value
     * @property {number} EGMI_ACK_SEARCH_OPPNENT=1225 EGMI_ACK_SEARCH_OPPNENT value
     * @property {number} EGMI_REQ_ADJUST_GAMBLE=1226 EGMI_REQ_ADJUST_GAMBLE value
     * @property {number} EGMI_REQ_MOVE=1230 EGMI_REQ_MOVE value
     * @property {number} EGMI_ACK_MOVE=1231 EGMI_ACK_MOVE value
     * @property {number} EGMI_REQ_MOVE_IMMUNE=1232 EGMI_REQ_MOVE_IMMUNE value
     * @property {number} EGMI_ACK_MOVE_IMMUNE=1233 EGMI_ACK_MOVE_IMMUNE value
     * @property {number} EGMI_REQ_STATE_SYNC=1234 EGMI_REQ_STATE_SYNC value
     * @property {number} EGMI_ACK_STATE_SYNC=1235 EGMI_ACK_STATE_SYNC value
     * @property {number} EGMI_REQ_SKILL_OBJECTX=1240 EGMI_REQ_SKILL_OBJECTX value
     * @property {number} EGMI_ACK_SKILL_OBJECTX=1241 EGMI_ACK_SKILL_OBJECTX value
     * @property {number} EGMI_REQ_SKILL_POS=1242 EGMI_REQ_SKILL_POS value
     * @property {number} EGMI_ACK_SKILL_POS=1243 EGMI_ACK_SKILL_POS value
     * @property {number} EGMI_REQ_ITEM_OBJECT=1244 EGMI_REQ_ITEM_OBJECT value
     * @property {number} EGMI_ACK_ITEM_OBJECT=1245 EGMI_ACK_ITEM_OBJECT value
     * @property {number} EGMI_REQ_ITEM_POS=1246 EGMI_REQ_ITEM_POS value
     * @property {number} EGMI_ACK_ITEM_POS=1247 EGMI_ACK_ITEM_POS value
     * @property {number} EGMI_REQ_CHAT=1250 EGMI_REQ_CHAT value
     * @property {number} EGMI_ACK_CHAT=1251 EGMI_ACK_CHAT value
     * @property {number} EGMI_REQ_SALE_ITEM=1252 EGMI_REQ_SALE_ITEM value
     * @property {number} EGMI_REQ_SPLIT_ITEM=1253 EGMI_REQ_SPLIT_ITEM value
     * @property {number} EGMI_REQ_PRODUCE_ITEM=1254 EGMI_REQ_PRODUCE_ITEM value
     * @property {number} EGMI_REQ_PICK_ITEM=1255 EGMI_REQ_PICK_ITEM value
     * @property {number} EGMI_REQ_ACCEPT_TASK=1256 EGMI_REQ_ACCEPT_TASK value
     * @property {number} EGMI_REQ_COMPELETE_TASK=1257 EGMI_REQ_COMPELETE_TASK value
     * @property {number} EGMI_ACK_ONLINE_NOTIFY=1290 EGMI_ACK_ONLINE_NOTIFY value
     * @property {number} EGMI_ACK_OFFLINE_NOTIFY=1291 EGMI_ACK_OFFLINE_NOTIFY value
     * @property {number} EGMI_REQ_CREATE_GUILD=1300 EGMI_REQ_CREATE_GUILD value
     * @property {number} EGMI_ACK_CREATE_GUILD=1301 EGMI_ACK_CREATE_GUILD value
     * @property {number} EGMI_REQ_JOIN_GUILD=1302 EGMI_REQ_JOIN_GUILD value
     * @property {number} EGMI_ACK_JOIN_GUILD=1303 EGMI_ACK_JOIN_GUILD value
     * @property {number} EGMI_REQ_LEAVE_GUILD=1304 EGMI_REQ_LEAVE_GUILD value
     * @property {number} EGMI_ACK_LEAVE_GUILD=1305 EGMI_ACK_LEAVE_GUILD value
     * @property {number} EGMI_REQ_OPR_GUILD=1306 EGMI_REQ_OPR_GUILD value
     * @property {number} EGMI_ACK_OPR_GUILD=1307 EGMI_ACK_OPR_GUILD value
     * @property {number} EGMI_REQ_SEARCH_GUILD=1308 EGMI_REQ_SEARCH_GUILD value
     * @property {number} EGMI_ACK_SEARCH_GUILD=1309 EGMI_ACK_SEARCH_GUILD value
     * @property {number} EGMI_REQ_OPR_GUILDINFO=1310 EGMI_REQ_OPR_GUILDINFO value
     * @property {number} EGMI_ACK_OPR_GUILDINFO=1311 EGMI_ACK_OPR_GUILDINFO value
     * @property {number} EGMI_REQ_GUILDECTYPEINFO=1312 EGMI_REQ_GUILDECTYPEINFO value
     * @property {number} EGMI_ACK_GUILDECTYPEINFO=1313 EGMI_ACK_GUILDECTYPEINFO value
     * @property {number} EGMI_SET_GUILDECTYPEINFO=1314 EGMI_SET_GUILDECTYPEINFO value
     * @property {number} EGMI_ReqEnterGuildEctype=1315 EGMI_ReqEnterGuildEctype value
     * @property {number} EGEC_REQ_CREATE_CHATGROUP=1400 EGEC_REQ_CREATE_CHATGROUP value
     * @property {number} EGEC_ACK_CREATE_CHATGROUP=1401 EGEC_ACK_CREATE_CHATGROUP value
     * @property {number} EGEC_REQ_JOIN_CHATGROUP=1402 EGEC_REQ_JOIN_CHATGROUP value
     * @property {number} EGEC_ACK_JOIN_CHATGROUP=1403 EGEC_ACK_JOIN_CHATGROUP value
     * @property {number} EGEC_REQ_LEAVE_CHATGROUP=1404 EGEC_REQ_LEAVE_CHATGROUP value
     * @property {number} EGEC_ACK_LEAVE_CHATGROUP=1405 EGEC_ACK_LEAVE_CHATGROUP value
     * @property {number} EGEC_REQ_SUBSCRIPTION_CHATGROUP=1406 EGEC_REQ_SUBSCRIPTION_CHATGROUP value
     * @property {number} EGEC_REQ_CANCELSUBSCRIPTION_CHATGROUP=1407 EGEC_REQ_CANCELSUBSCRIPTION_CHATGROUP value
     * @property {number} EGEC_REQ_INVITE_CHATGROUP=1408 EGEC_REQ_INVITE_CHATGROUP value
     * @property {number} EGEC_ACK_INVITE_CHATGROUP=1409 EGEC_ACK_INVITE_CHATGROUP value
     * @property {number} EGEC_REQ_KICK_CHATGROUP=1410 EGEC_REQ_KICK_CHATGROUP value
     * @property {number} EGEC_ACK_KICK_CHATGROUP=1411 EGEC_ACK_KICK_CHATGROUP value
     * @property {number} EGEC_REQ_CHATGROUP_TO_TEAM=1450 EGEC_REQ_CHATGROUP_TO_TEAM value
     * @property {number} EGEC_ACK_CHATGROUP_TO_TEAM=1451 EGEC_ACK_CHATGROUP_TO_TEAM value
     * @property {number} EGEC_REQ_INTENSIFYLEVEL_TO_EQUIP=1500 EGEC_REQ_INTENSIFYLEVEL_TO_EQUIP value
     * @property {number} EGEC_ACK_INTENSIFYLEVEL_TO_EQUIP=1501 EGEC_ACK_INTENSIFYLEVEL_TO_EQUIP value
     * @property {number} EGEC_REQ_HOLE_TO_EQUIP=1502 EGEC_REQ_HOLE_TO_EQUIP value
     * @property {number} EGEC_ACK_HOLE_TO_EQUIP=1503 EGEC_ACK_HOLE_TO_EQUIP value
     * @property {number} EGEC_REQ_INLAYSTONE_TO_EQUIP=1504 EGEC_REQ_INLAYSTONE_TO_EQUIP value
     * @property {number} EGEC_ACK_INLAYSTONE_TO_EQUIP=1505 EGEC_ACK_INLAYSTONE_TO_EQUIP value
     * @property {number} EGEC_REQ_ELEMENTLEVEL_TO_EQUIP=1506 EGEC_REQ_ELEMENTLEVEL_TO_EQUIP value
     * @property {number} EGEC_ACK_ELEMENTLEVEL_TO_EQUIP=1507 EGEC_ACK_ELEMENTLEVEL_TO_EQUIP value
     * @property {number} EGEC_WEAR_EQUIP=1508 EGEC_WEAR_EQUIP value
     * @property {number} EGEC_TAKEOFF_EQUIP=1509 EGEC_TAKEOFF_EQUIP value
     * @property {number} EGEC_REQ_SET_FIGHT_HERO=1520 EGEC_REQ_SET_FIGHT_HERO value
     * @property {number} EGEC_REQ_SWITCH_FIGHT_HERO=1521 EGEC_REQ_SWITCH_FIGHT_HERO value
     * @property {number} EGEC_REQ_MINING_TITLE=1600 EGEC_REQ_MINING_TITLE value
     * @property {number} EGEC_ACK_MINING_TITLE=1601 EGEC_ACK_MINING_TITLE value
     * @property {number} EGEC_REQ_SEND_MAIL=1700 EGEC_REQ_SEND_MAIL value
     * @property {number} EGEC_REQ_DRAW_MAIL=1701 EGEC_REQ_DRAW_MAIL value
     * @property {number} EGEC_REQ_DELETE_MAIL=1702 EGEC_REQ_DELETE_MAIL value
     * @property {number} EGMI_ACK_CLONE_OBJECT_ENTRY=1800 EGMI_ACK_CLONE_OBJECT_ENTRY value
     * @property {number} EGMI_ACK_CLONE_OBJECT_LEAVE=1801 EGMI_ACK_CLONE_OBJECT_LEAVE value
     * @property {number} EGMI_ACK_CLONE_OBJECT_PROPERTY_ENTRY=1802 EGMI_ACK_CLONE_OBJECT_PROPERTY_ENTRY value
     * @property {number} EGMI_ACK_CLONE_OBJECT_RECORD_ENTRY=1803 EGMI_ACK_CLONE_OBJECT_RECORD_ENTRY value
     * @property {number} EGMI_ACK_CLONE_PROPERTY_INT=1810 EGMI_ACK_CLONE_PROPERTY_INT value
     * @property {number} EGMI_ACK_CLONE_PROPERTY_FLOAT=1811 EGMI_ACK_CLONE_PROPERTY_FLOAT value
     * @property {number} EGMI_ACK_CLONE_PROPERTY_STRING=1812 EGMI_ACK_CLONE_PROPERTY_STRING value
     * @property {number} EGMI_ACK_CLONE_PROPERTY_OBJECT=1814 EGMI_ACK_CLONE_PROPERTY_OBJECT value
     * @property {number} EGMI_REQSWICHSERVER=1840 EGMI_REQSWICHSERVER value
     * @property {number} EGMI_ACKSWICHSERVER=1841 EGMI_ACKSWICHSERVER value
     * @property {number} EGMI_REQ_CREATE_TEAM=1860 EGMI_REQ_CREATE_TEAM value
     * @property {number} EGMI_ACK_CREATE_TEAM=1861 EGMI_ACK_CREATE_TEAM value
     * @property {number} EGMI_REQ_JOIN_TEAM=1862 EGMI_REQ_JOIN_TEAM value
     * @property {number} EGMI_ACK_JOIN_TEAM=1863 EGMI_ACK_JOIN_TEAM value
     * @property {number} EGMI_REQ_LEAVE_TEAM=1864 EGMI_REQ_LEAVE_TEAM value
     * @property {number} EGMI_ACK_LEAVE_TEAM=1865 EGMI_ACK_LEAVE_TEAM value
     * @property {number} EGMI_REQ_INVITE_TEAM=1866 EGMI_REQ_INVITE_TEAM value
     * @property {number} EGMI_REQ_OPRMEMBER_TEAM=1867 EGMI_REQ_OPRMEMBER_TEAM value
     * @property {number} EGMI_ACK_OPRMEMBER_TEAM=1868 EGMI_ACK_OPRMEMBER_TEAM value
     * @property {number} EGMI_REQ_TEAM_ENTER_ECTYPE=1869 EGMI_REQ_TEAM_ENTER_ECTYPE value
     * @property {number} EGMI_ACK_TEAM_ENTER_ECTYPE=1870 EGMI_ACK_TEAM_ENTER_ECTYPE value
     * @property {number} EGMI_REQ_MAP_GRID_INFO=1900 MapModule/////////////////////////////////////
     * @property {number} EGMI_ACK_MAP_GRID_INFO=1901 EGMI_ACK_MAP_GRID_INFO value
     * @property {number} EGMI_REQ_BIG_MAP_INFO=1902 EGMI_REQ_BIG_MAP_INFO value
     * @property {number} EGMI_ACK_BIG_MAP_INFO=1903 EGMI_ACK_BIG_MAP_INFO value
     * @property {number} EGMI_REQ_HOLD_MAP_GRID=1910 EGMI_REQ_HOLD_MAP_GRID value
     * @property {number} EGMI_ACK_HOLD_MAP_GRID=1911 EGMI_ACK_HOLD_MAP_GRID value
     * @property {number} EGMI_REQ_LEAVE_MSG_MAP_GRID=1912 EGMI_REQ_LEAVE_MSG_MAP_GRID value
     * @property {number} EGMI_ACK_LEAVE_MSG_MAP_GRID=1913 EGMI_ACK_LEAVE_MSG_MAP_GRID value
     * @property {number} EGMI_REQ_GET_MAP_GRID_AWARD=1914 EGMI_REQ_GET_MAP_GRID_AWARD value
     * @property {number} EGMI_ACK_GET_MAP_GRID_AWARD=1915 EGMI_ACK_GET_MAP_GRID_AWARD value
     * @property {number} EGMI_REQ_MAP_GRID_HUNTING=1916 EGMI_REQ_MAP_GRID_HUNTING value
     * @property {number} EGMI_ACK_MAP_GRID_HUNTING=1917 EGMI_ACK_MAP_GRID_HUNTING value
     * @property {number} EGMI_REQ_MAP_GRID_KING_WAR=1918 EGMI_REQ_MAP_GRID_KING_WAR value
     * @property {number} EGMI_ACK_MAP_GRID_KING_WAR=1919 EGMI_ACK_MAP_GRID_KING_WAR value
     * @property {number} EGMI_REQ_CMD_PROPERTY_INT=10000 GM MSG/////////////////////////////////////
     * @property {number} EGMI_REQ_CMD_PROPERTY_STR=10001 EGMI_REQ_CMD_PROPERTY_STR value
     * @property {number} EGMI_REQ_CMD_PROPERTY_OBJECT=10002 EGMI_REQ_CMD_PROPERTY_OBJECT value
     * @property {number} EGMI_REQ_CMD_PROPERTY_FLOAT=10003 EGMI_REQ_CMD_PROPERTY_FLOAT value
     * @property {number} EGMI_REQ_CMD_RECORD_INT=10004 EGMI_REQ_CMD_RECORD_INT value
     * @property {number} EGMI_REQ_CMD_RECORD_STR=10005 EGMI_REQ_CMD_RECORD_STR value
     * @property {number} EGMI_REQ_CMD_RECORD_OBJECT=10006 EGMI_REQ_CMD_RECORD_OBJECT value
     * @property {number} EGMI_REQ_CMD_RECORD_FLOAT=10007 EGMI_REQ_CMD_RECORD_FLOAT value
     * @property {number} EGMI_REQ_CMD_NORMAL=10008 EGMI_REQ_CMD_NORMAL value
     * @property {number} EGMI_REQ_QUERY_SERVER_STATUS=10200 EGMI_REQ_QUERY_SERVER_STATUS value
     * @property {number} EGMI_REQ_BUY_FORM_SHOP=20000 Base SLG MSG/////////////////////////////////////
     * @property {number} EGMI_ACK_BUY_FORM_SHOP=20001 EGMI_ACK_BUY_FORM_SHOP value
     * @property {number} EGMI_REQ_MOVE_BUILD_OBJECT=20002 EGMI_REQ_MOVE_BUILD_OBJECT value
     * @property {number} EGMI_ACK_MOVE_BUILD_OBJECT=20003 EGMI_ACK_MOVE_BUILD_OBJECT value
     * @property {number} EGMI_REQ_UP_BUILD_LVL=20101 EGMI_REQ_UP_BUILD_LVL value
     * @property {number} EGMI_REQ_CREATE_ITEM=20102 EGMI_REQ_CREATE_ITEM value
     * @property {number} EGMI_REQ_BUILD_OPERATE=20103 EGMI_REQ_BUILD_OPERATE value
     * @property {number} EGMI_REQ_SEARCH_TO_SHARE=30000 Base SHARE-TOOL MSG/////////////////////////////////////
     * @property {number} EGMI_ACK_SEARCH_TO_SHARE=30001 EGMI_ACK_SEARCH_TO_SHARE value
     * @property {number} EGMI_REQ_SHARE_TO_ATART=30002 EGMI_REQ_SHARE_TO_ATART value
     * @property {number} EGMI_ACK_SHARE_TO_ATART=30003 EGMI_ACK_SHARE_TO_ATART value
     */
    NFMsg.EGameMsgID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EGMI_UNKNOW"] = 0;
        values[valuesById[1] = "EGMI_EVENT_RESULT"] = 1;
        values[valuesById[2] = "EGMI_EVENT_TRANSPOND"] = 2;
        values[valuesById[3] = "EGMI_CLOSE_SOCKET"] = 3;
        values[valuesById[10] = "EGMI_WTM_WORLD_REGISTERED"] = 10;
        values[valuesById[11] = "EGMI_WTM_WORLD_UNREGISTERED"] = 11;
        values[valuesById[12] = "EGMI_WTM_WORLD_REFRESH"] = 12;
        values[valuesById[20] = "EGMI_LTM_LOGIN_REGISTERED"] = 20;
        values[valuesById[21] = "EGMI_LTM_LOGIN_UNREGISTERED"] = 21;
        values[valuesById[22] = "EGMI_LTM_LOGIN_REFRESH"] = 22;
        values[valuesById[30] = "EGMI_PTWG_PROXY_REGISTERED"] = 30;
        values[valuesById[31] = "EGMI_PTWG_PROXY_UNREGISTERED"] = 31;
        values[valuesById[32] = "EGMI_PTWG_PROXY_REFRESH"] = 32;
        values[valuesById[40] = "EGMI_GTW_GAME_REGISTERED"] = 40;
        values[valuesById[41] = "EGMI_GTW_GAME_UNREGISTERED"] = 41;
        values[valuesById[42] = "EGMI_GTW_GAME_REFRESH"] = 42;
        values[valuesById[60] = "EGMI_DTW_DB_REGISTERED"] = 60;
        values[valuesById[61] = "EGMI_DTW_DB_UNREGISTERED"] = 61;
        values[valuesById[62] = "EGMI_DTW_DB_REFRESH"] = 62;
        values[valuesById[70] = "EGMI_STS_NET_INFO"] = 70;
        values[valuesById[90] = "EGMI_STS_SERVER_REPORT"] = 90;
        values[valuesById[100] = "EGMI_STS_HEART_BEAT"] = 100;
        values[valuesById[101] = "EGMI_REQ_LOGIN"] = 101;
        values[valuesById[102] = "EGMI_ACK_LOGIN"] = 102;
        values[valuesById[103] = "EGMI_REQ_LOGOUT"] = 103;
        values[valuesById[110] = "EGMI_REQ_WORLD_LIST"] = 110;
        values[valuesById[111] = "EGMI_ACK_WORLD_LIST"] = 111;
        values[valuesById[112] = "EGMI_REQ_CONNECT_WORLD"] = 112;
        values[valuesById[113] = "EGMI_ACK_CONNECT_WORLD"] = 113;
        values[valuesById[114] = "EGMI_REQ_KICK_CLIENT_INWORLD"] = 114;
        values[valuesById[120] = "EGMI_REQ_CONNECT_KEY"] = 120;
        values[valuesById[122] = "EGMI_ACK_CONNECT_KEY"] = 122;
        values[valuesById[130] = "EGMI_REQ_SELECT_SERVER"] = 130;
        values[valuesById[131] = "EGMI_ACK_SELECT_SERVER"] = 131;
        values[valuesById[132] = "EGMI_REQ_ROLE_LIST"] = 132;
        values[valuesById[133] = "EGMI_ACK_ROLE_LIST"] = 133;
        values[valuesById[134] = "EGMI_REQ_CREATE_ROLE"] = 134;
        values[valuesById[135] = "EGMI_REQ_DELETE_ROLE"] = 135;
        values[valuesById[136] = "EGMI_REQ_RECOVER_ROLE"] = 136;
        values[valuesById[140] = "EGMI_REQ_LOAD_ROLE_DATA"] = 140;
        values[valuesById[141] = "EGMI_ACK_LOAD_ROLE_DATA"] = 141;
        values[valuesById[142] = "EGMI_REQ_SAVE_ROLE_DATA"] = 142;
        values[valuesById[143] = "EGMI_ACK_SAVE_ROLE_DATA"] = 143;
        values[valuesById[150] = "EGMI_REQ_ENTER_GAME"] = 150;
        values[valuesById[151] = "EGMI_ACK_ENTER_GAME"] = 151;
        values[valuesById[152] = "EGMI_REQ_LEAVE_GAME"] = 152;
        values[valuesById[153] = "EGMI_ACK_LEAVE_GAME"] = 153;
        values[valuesById[154] = "EGMI_REQ_SWAP_GAME"] = 154;
        values[valuesById[155] = "EGMI_REQ_SWAP_SCENE"] = 155;
        values[valuesById[156] = "EGMI_ACK_SWAP_SCENE"] = 156;
        values[valuesById[157] = "EGMI_REQ_SWAP_HOME_SCENE"] = 157;
        values[valuesById[158] = "EGMI_ACK_SWAP_HOME_SCENE"] = 158;
        values[valuesById[159] = "EGMI_REQ_ENTER_GAME_FINISH"] = 159;
        values[valuesById[160] = "EGMI_ACK_ENTER_GAME_FINISH"] = 160;
        values[valuesById[180] = "EGMI_REQ_ACK_RELIVE"] = 180;
        values[valuesById[200] = "EGMI_ACK_OBJECT_ENTRY"] = 200;
        values[valuesById[201] = "EGMI_ACK_OBJECT_LEAVE"] = 201;
        values[valuesById[202] = "EGMI_ACK_OBJECT_PROPERTY_ENTRY"] = 202;
        values[valuesById[203] = "EGMI_ACK_OBJECT_RECORD_ENTRY"] = 203;
        values[valuesById[210] = "EGMI_ACK_PROPERTY_INT"] = 210;
        values[valuesById[211] = "EGMI_ACK_PROPERTY_FLOAT"] = 211;
        values[valuesById[212] = "EGMI_ACK_PROPERTY_STRING"] = 212;
        values[valuesById[214] = "EGMI_ACK_PROPERTY_OBJECT"] = 214;
        values[valuesById[215] = "EGMI_ACK_PROPERTY_VECTOR2"] = 215;
        values[valuesById[216] = "EGMI_ACK_PROPERTY_VECTOR3"] = 216;
        values[valuesById[220] = "EGMI_ACK_ADD_ROW"] = 220;
        values[valuesById[221] = "EGMI_ACK_REMOVE_ROW"] = 221;
        values[valuesById[222] = "EGMI_ACK_SWAP_ROW"] = 222;
        values[valuesById[223] = "EGMI_ACK_RECORD_INT"] = 223;
        values[valuesById[224] = "EGMI_ACK_RECORD_FLOAT"] = 224;
        values[valuesById[226] = "EGMI_ACK_RECORD_STRING"] = 226;
        values[valuesById[227] = "EGMI_ACK_RECORD_OBJECT"] = 227;
        values[valuesById[228] = "EGMI_ACK_RECORD_VECTOR2"] = 228;
        values[valuesById[229] = "EGMI_ACK_RECORD_VECTOR3"] = 229;
        values[valuesById[250] = "EGMI_ACK_RECORD_CLEAR"] = 250;
        values[valuesById[251] = "EGMI_ACK_RECORD_SORT"] = 251;
        values[valuesById[260] = "EGMI_ACK_DATA_FINISHED"] = 260;
        values[valuesById[1220] = "EGMI_REQ_START_OPPNENT"] = 1220;
        values[valuesById[1221] = "EGMI_ACK_START_OPPNENT"] = 1221;
        values[valuesById[1222] = "EGMI_REQ_END_OPPNENT"] = 1222;
        values[valuesById[1223] = "EGMI_ACK_END_OPPNENT"] = 1223;
        values[valuesById[1224] = "EGMI_REQ_SEARCH_OPPNENT"] = 1224;
        values[valuesById[1225] = "EGMI_ACK_SEARCH_OPPNENT"] = 1225;
        values[valuesById[1226] = "EGMI_REQ_ADJUST_GAMBLE"] = 1226;
        values[valuesById[1230] = "EGMI_REQ_MOVE"] = 1230;
        values[valuesById[1231] = "EGMI_ACK_MOVE"] = 1231;
        values[valuesById[1232] = "EGMI_REQ_MOVE_IMMUNE"] = 1232;
        values[valuesById[1233] = "EGMI_ACK_MOVE_IMMUNE"] = 1233;
        values[valuesById[1234] = "EGMI_REQ_STATE_SYNC"] = 1234;
        values[valuesById[1235] = "EGMI_ACK_STATE_SYNC"] = 1235;
        values[valuesById[1240] = "EGMI_REQ_SKILL_OBJECTX"] = 1240;
        values[valuesById[1241] = "EGMI_ACK_SKILL_OBJECTX"] = 1241;
        values[valuesById[1242] = "EGMI_REQ_SKILL_POS"] = 1242;
        values[valuesById[1243] = "EGMI_ACK_SKILL_POS"] = 1243;
        values[valuesById[1244] = "EGMI_REQ_ITEM_OBJECT"] = 1244;
        values[valuesById[1245] = "EGMI_ACK_ITEM_OBJECT"] = 1245;
        values[valuesById[1246] = "EGMI_REQ_ITEM_POS"] = 1246;
        values[valuesById[1247] = "EGMI_ACK_ITEM_POS"] = 1247;
        values[valuesById[1250] = "EGMI_REQ_CHAT"] = 1250;
        values[valuesById[1251] = "EGMI_ACK_CHAT"] = 1251;
        values[valuesById[1252] = "EGMI_REQ_SALE_ITEM"] = 1252;
        values[valuesById[1253] = "EGMI_REQ_SPLIT_ITEM"] = 1253;
        values[valuesById[1254] = "EGMI_REQ_PRODUCE_ITEM"] = 1254;
        values[valuesById[1255] = "EGMI_REQ_PICK_ITEM"] = 1255;
        values[valuesById[1256] = "EGMI_REQ_ACCEPT_TASK"] = 1256;
        values[valuesById[1257] = "EGMI_REQ_COMPELETE_TASK"] = 1257;
        values[valuesById[1290] = "EGMI_ACK_ONLINE_NOTIFY"] = 1290;
        values[valuesById[1291] = "EGMI_ACK_OFFLINE_NOTIFY"] = 1291;
        values[valuesById[1300] = "EGMI_REQ_CREATE_GUILD"] = 1300;
        values[valuesById[1301] = "EGMI_ACK_CREATE_GUILD"] = 1301;
        values[valuesById[1302] = "EGMI_REQ_JOIN_GUILD"] = 1302;
        values[valuesById[1303] = "EGMI_ACK_JOIN_GUILD"] = 1303;
        values[valuesById[1304] = "EGMI_REQ_LEAVE_GUILD"] = 1304;
        values[valuesById[1305] = "EGMI_ACK_LEAVE_GUILD"] = 1305;
        values[valuesById[1306] = "EGMI_REQ_OPR_GUILD"] = 1306;
        values[valuesById[1307] = "EGMI_ACK_OPR_GUILD"] = 1307;
        values[valuesById[1308] = "EGMI_REQ_SEARCH_GUILD"] = 1308;
        values[valuesById[1309] = "EGMI_ACK_SEARCH_GUILD"] = 1309;
        values[valuesById[1310] = "EGMI_REQ_OPR_GUILDINFO"] = 1310;
        values[valuesById[1311] = "EGMI_ACK_OPR_GUILDINFO"] = 1311;
        values[valuesById[1312] = "EGMI_REQ_GUILDECTYPEINFO"] = 1312;
        values[valuesById[1313] = "EGMI_ACK_GUILDECTYPEINFO"] = 1313;
        values[valuesById[1314] = "EGMI_SET_GUILDECTYPEINFO"] = 1314;
        values[valuesById[1315] = "EGMI_ReqEnterGuildEctype"] = 1315;
        values[valuesById[1400] = "EGEC_REQ_CREATE_CHATGROUP"] = 1400;
        values[valuesById[1401] = "EGEC_ACK_CREATE_CHATGROUP"] = 1401;
        values[valuesById[1402] = "EGEC_REQ_JOIN_CHATGROUP"] = 1402;
        values[valuesById[1403] = "EGEC_ACK_JOIN_CHATGROUP"] = 1403;
        values[valuesById[1404] = "EGEC_REQ_LEAVE_CHATGROUP"] = 1404;
        values[valuesById[1405] = "EGEC_ACK_LEAVE_CHATGROUP"] = 1405;
        values[valuesById[1406] = "EGEC_REQ_SUBSCRIPTION_CHATGROUP"] = 1406;
        values[valuesById[1407] = "EGEC_REQ_CANCELSUBSCRIPTION_CHATGROUP"] = 1407;
        values[valuesById[1408] = "EGEC_REQ_INVITE_CHATGROUP"] = 1408;
        values[valuesById[1409] = "EGEC_ACK_INVITE_CHATGROUP"] = 1409;
        values[valuesById[1410] = "EGEC_REQ_KICK_CHATGROUP"] = 1410;
        values[valuesById[1411] = "EGEC_ACK_KICK_CHATGROUP"] = 1411;
        values[valuesById[1450] = "EGEC_REQ_CHATGROUP_TO_TEAM"] = 1450;
        values[valuesById[1451] = "EGEC_ACK_CHATGROUP_TO_TEAM"] = 1451;
        values[valuesById[1500] = "EGEC_REQ_INTENSIFYLEVEL_TO_EQUIP"] = 1500;
        values[valuesById[1501] = "EGEC_ACK_INTENSIFYLEVEL_TO_EQUIP"] = 1501;
        values[valuesById[1502] = "EGEC_REQ_HOLE_TO_EQUIP"] = 1502;
        values[valuesById[1503] = "EGEC_ACK_HOLE_TO_EQUIP"] = 1503;
        values[valuesById[1504] = "EGEC_REQ_INLAYSTONE_TO_EQUIP"] = 1504;
        values[valuesById[1505] = "EGEC_ACK_INLAYSTONE_TO_EQUIP"] = 1505;
        values[valuesById[1506] = "EGEC_REQ_ELEMENTLEVEL_TO_EQUIP"] = 1506;
        values[valuesById[1507] = "EGEC_ACK_ELEMENTLEVEL_TO_EQUIP"] = 1507;
        values[valuesById[1508] = "EGEC_WEAR_EQUIP"] = 1508;
        values[valuesById[1509] = "EGEC_TAKEOFF_EQUIP"] = 1509;
        values[valuesById[1520] = "EGEC_REQ_SET_FIGHT_HERO"] = 1520;
        values[valuesById[1521] = "EGEC_REQ_SWITCH_FIGHT_HERO"] = 1521;
        values[valuesById[1600] = "EGEC_REQ_MINING_TITLE"] = 1600;
        values[valuesById[1601] = "EGEC_ACK_MINING_TITLE"] = 1601;
        values[valuesById[1700] = "EGEC_REQ_SEND_MAIL"] = 1700;
        values[valuesById[1701] = "EGEC_REQ_DRAW_MAIL"] = 1701;
        values[valuesById[1702] = "EGEC_REQ_DELETE_MAIL"] = 1702;
        values[valuesById[1800] = "EGMI_ACK_CLONE_OBJECT_ENTRY"] = 1800;
        values[valuesById[1801] = "EGMI_ACK_CLONE_OBJECT_LEAVE"] = 1801;
        values[valuesById[1802] = "EGMI_ACK_CLONE_OBJECT_PROPERTY_ENTRY"] = 1802;
        values[valuesById[1803] = "EGMI_ACK_CLONE_OBJECT_RECORD_ENTRY"] = 1803;
        values[valuesById[1810] = "EGMI_ACK_CLONE_PROPERTY_INT"] = 1810;
        values[valuesById[1811] = "EGMI_ACK_CLONE_PROPERTY_FLOAT"] = 1811;
        values[valuesById[1812] = "EGMI_ACK_CLONE_PROPERTY_STRING"] = 1812;
        values[valuesById[1814] = "EGMI_ACK_CLONE_PROPERTY_OBJECT"] = 1814;
        values[valuesById[1840] = "EGMI_REQSWICHSERVER"] = 1840;
        values[valuesById[1841] = "EGMI_ACKSWICHSERVER"] = 1841;
        values[valuesById[1860] = "EGMI_REQ_CREATE_TEAM"] = 1860;
        values[valuesById[1861] = "EGMI_ACK_CREATE_TEAM"] = 1861;
        values[valuesById[1862] = "EGMI_REQ_JOIN_TEAM"] = 1862;
        values[valuesById[1863] = "EGMI_ACK_JOIN_TEAM"] = 1863;
        values[valuesById[1864] = "EGMI_REQ_LEAVE_TEAM"] = 1864;
        values[valuesById[1865] = "EGMI_ACK_LEAVE_TEAM"] = 1865;
        values[valuesById[1866] = "EGMI_REQ_INVITE_TEAM"] = 1866;
        values[valuesById[1867] = "EGMI_REQ_OPRMEMBER_TEAM"] = 1867;
        values[valuesById[1868] = "EGMI_ACK_OPRMEMBER_TEAM"] = 1868;
        values[valuesById[1869] = "EGMI_REQ_TEAM_ENTER_ECTYPE"] = 1869;
        values[valuesById[1870] = "EGMI_ACK_TEAM_ENTER_ECTYPE"] = 1870;
        values[valuesById[1900] = "EGMI_REQ_MAP_GRID_INFO"] = 1900;
        values[valuesById[1901] = "EGMI_ACK_MAP_GRID_INFO"] = 1901;
        values[valuesById[1902] = "EGMI_REQ_BIG_MAP_INFO"] = 1902;
        values[valuesById[1903] = "EGMI_ACK_BIG_MAP_INFO"] = 1903;
        values[valuesById[1910] = "EGMI_REQ_HOLD_MAP_GRID"] = 1910;
        values[valuesById[1911] = "EGMI_ACK_HOLD_MAP_GRID"] = 1911;
        values[valuesById[1912] = "EGMI_REQ_LEAVE_MSG_MAP_GRID"] = 1912;
        values[valuesById[1913] = "EGMI_ACK_LEAVE_MSG_MAP_GRID"] = 1913;
        values[valuesById[1914] = "EGMI_REQ_GET_MAP_GRID_AWARD"] = 1914;
        values[valuesById[1915] = "EGMI_ACK_GET_MAP_GRID_AWARD"] = 1915;
        values[valuesById[1916] = "EGMI_REQ_MAP_GRID_HUNTING"] = 1916;
        values[valuesById[1917] = "EGMI_ACK_MAP_GRID_HUNTING"] = 1917;
        values[valuesById[1918] = "EGMI_REQ_MAP_GRID_KING_WAR"] = 1918;
        values[valuesById[1919] = "EGMI_ACK_MAP_GRID_KING_WAR"] = 1919;
        values[valuesById[10000] = "EGMI_REQ_CMD_PROPERTY_INT"] = 10000;
        values[valuesById[10001] = "EGMI_REQ_CMD_PROPERTY_STR"] = 10001;
        values[valuesById[10002] = "EGMI_REQ_CMD_PROPERTY_OBJECT"] = 10002;
        values[valuesById[10003] = "EGMI_REQ_CMD_PROPERTY_FLOAT"] = 10003;
        values[valuesById[10004] = "EGMI_REQ_CMD_RECORD_INT"] = 10004;
        values[valuesById[10005] = "EGMI_REQ_CMD_RECORD_STR"] = 10005;
        values[valuesById[10006] = "EGMI_REQ_CMD_RECORD_OBJECT"] = 10006;
        values[valuesById[10007] = "EGMI_REQ_CMD_RECORD_FLOAT"] = 10007;
        values[valuesById[10008] = "EGMI_REQ_CMD_NORMAL"] = 10008;
        values[valuesById[10200] = "EGMI_REQ_QUERY_SERVER_STATUS"] = 10200;
        values[valuesById[20000] = "EGMI_REQ_BUY_FORM_SHOP"] = 20000;
        values[valuesById[20001] = "EGMI_ACK_BUY_FORM_SHOP"] = 20001;
        values[valuesById[20002] = "EGMI_REQ_MOVE_BUILD_OBJECT"] = 20002;
        values[valuesById[20003] = "EGMI_ACK_MOVE_BUILD_OBJECT"] = 20003;
        values[valuesById[20101] = "EGMI_REQ_UP_BUILD_LVL"] = 20101;
        values[valuesById[20102] = "EGMI_REQ_CREATE_ITEM"] = 20102;
        values[valuesById[20103] = "EGMI_REQ_BUILD_OPERATE"] = 20103;
        values[valuesById[30000] = "EGMI_REQ_SEARCH_TO_SHARE"] = 30000;
        values[valuesById[30001] = "EGMI_ACK_SEARCH_TO_SHARE"] = 30001;
        values[valuesById[30002] = "EGMI_REQ_SHARE_TO_ATART"] = 30002;
        values[valuesById[30003] = "EGMI_ACK_SHARE_TO_ATART"] = 30003;
        return values;
    })();

    /**
     * ESkillType enum.
     * @name NFMsg.ESkillType
     * @enum {string}
     * @property {number} EST_BRIEF_SINGLE=0 EST_BRIEF_SINGLE value
     * @property {number} EST_BRIEF_GROUP=1 EST_BRIEF_GROUP value
     * @property {number} EST_BULLET_SINGLE=2 EST_BULLET_SINGLE value
     * @property {number} EST_BULLET_REBOUND=3 EST_BULLET_REBOUND value
     * @property {number} EST_BULLET_BOMB=4 EST_BULLET_BOMB value
     * @property {number} EST_TARGET_SINGLE=5 EST_TARGET_SINGLE value
     * @property {number} EST_TARGET_GROUP=6 EST_TARGET_GROUP value
     * @property {number} EST_POSITION_GROUP=7 EST_POSITION_GROUP value
     */
    NFMsg.ESkillType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EST_BRIEF_SINGLE"] = 0;
        values[valuesById[1] = "EST_BRIEF_GROUP"] = 1;
        values[valuesById[2] = "EST_BULLET_SINGLE"] = 2;
        values[valuesById[3] = "EST_BULLET_REBOUND"] = 3;
        values[valuesById[4] = "EST_BULLET_BOMB"] = 4;
        values[valuesById[5] = "EST_TARGET_SINGLE"] = 5;
        values[valuesById[6] = "EST_TARGET_GROUP"] = 6;
        values[valuesById[7] = "EST_POSITION_GROUP"] = 7;
        return values;
    })();

    /**
     * EItemType enum.
     * @name NFMsg.EItemType
     * @enum {string}
     * @property {number} EIT_EQUIP=0 EIT_EQUIP value
     * @property {number} EIT_GEM=1 EIT_GEM value
     * @property {number} EIT_ITEM=2 EIT_ITEM value
     * @property {number} EIT_CARD=3 EIT_CARD value
     * @property {number} EIT_TOKEN=4 EIT_TOKEN value
     */
    NFMsg.EItemType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EIT_EQUIP"] = 0;
        values[valuesById[1] = "EIT_GEM"] = 1;
        values[valuesById[2] = "EIT_ITEM"] = 2;
        values[valuesById[3] = "EIT_CARD"] = 3;
        values[valuesById[4] = "EIT_TOKEN"] = 4;
        return values;
    })();

    /**
     * EGameEquipSubType enum.
     * @name NFMsg.EGameEquipSubType
     * @enum {string}
     * @property {number} EQUIPTYPE_WEAPON=0 EQUIPTYPE_WEAPON value
     * @property {number} EQUIPTYPE_HELMET=1 EQUIPTYPE_HELMET value
     * @property {number} EQUIPTYPE_ARMOR=2 EQUIPTYPE_ARMOR value
     * @property {number} EQUIPTYPE_WRIST=3 EQUIPTYPE_WRIST value
     * @property {number} EQUIPTYPE_PANT=4 EQUIPTYPE_PANT value
     * @property {number} EQUIPTYPE_BOOT=5 EQUIPTYPE_BOOT value
     */
    NFMsg.EGameEquipSubType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EQUIPTYPE_WEAPON"] = 0;
        values[valuesById[1] = "EQUIPTYPE_HELMET"] = 1;
        values[valuesById[2] = "EQUIPTYPE_ARMOR"] = 2;
        values[valuesById[3] = "EQUIPTYPE_WRIST"] = 3;
        values[valuesById[4] = "EQUIPTYPE_PANT"] = 4;
        values[valuesById[5] = "EQUIPTYPE_BOOT"] = 5;
        return values;
    })();

    /**
     * EGameGemSubType enum.
     * @name NFMsg.EGameGemSubType
     * @enum {string}
     * @property {number} EGGSTYPE_GEM_ATK=0 EGGSTYPE_GEM_ATK value
     * @property {number} EGGSTYPE_GEM_DEF=1 EGGSTYPE_GEM_DEF value
     * @property {number} EGGSTYPE_GEM_FIRE=3 EGGSTYPE_GEM_FIRE value
     * @property {number} EGGSTYPE_GEM_LIGHT=4 EGGSTYPE_GEM_LIGHT value
     * @property {number} EGGSTYPE_GEM_WIND=5 EGGSTYPE_GEM_WIND value
     * @property {number} EGGSTYPE_GEM_ICE=6 EGGSTYPE_GEM_ICE value
     * @property {number} EGGSTYPE_GEM_POISON=7 EGGSTYPE_GEM_POISON value
     */
    NFMsg.EGameGemSubType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EGGSTYPE_GEM_ATK"] = 0;
        values[valuesById[1] = "EGGSTYPE_GEM_DEF"] = 1;
        values[valuesById[3] = "EGGSTYPE_GEM_FIRE"] = 3;
        values[valuesById[4] = "EGGSTYPE_GEM_LIGHT"] = 4;
        values[valuesById[5] = "EGGSTYPE_GEM_WIND"] = 5;
        values[valuesById[6] = "EGGSTYPE_GEM_ICE"] = 6;
        values[valuesById[7] = "EGGSTYPE_GEM_POISON"] = 7;
        return values;
    })();

    /**
     * EGameItemSubType enum.
     * @name NFMsg.EGameItemSubType
     * @enum {string}
     * @property {number} EGIT_ITEM_WATER=0 EGIT_ITEM_WATER value
     * @property {number} EGIT_ITEM_DIAMOND=1 EGIT_ITEM_DIAMOND value
     * @property {number} EGIT_ITEM_CURRENCY=2 EGIT_ITEM_CURRENCY value
     * @property {number} EGIT_ITEM_EXP=3 EGIT_ITEM_EXP value
     * @property {number} EGIT_ITEM_HP=4 EGIT_ITEM_HP value
     * @property {number} EGIT_ITEM_MP=5 EGIT_ITEM_MP value
     * @property {number} EGIT_ITEM_SP=6 EGIT_ITEM_SP value
     * @property {number} EGIT_ITEM_PACK=7 EGIT_ITEM_PACK value
     * @property {number} EGIT_ITEM_MEMORY_POS=8 EGIT_ITEM_MEMORY_POS value
     */
    NFMsg.EGameItemSubType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EGIT_ITEM_WATER"] = 0;
        values[valuesById[1] = "EGIT_ITEM_DIAMOND"] = 1;
        values[valuesById[2] = "EGIT_ITEM_CURRENCY"] = 2;
        values[valuesById[3] = "EGIT_ITEM_EXP"] = 3;
        values[valuesById[4] = "EGIT_ITEM_HP"] = 4;
        values[valuesById[5] = "EGIT_ITEM_MP"] = 5;
        values[valuesById[6] = "EGIT_ITEM_SP"] = 6;
        values[valuesById[7] = "EGIT_ITEM_PACK"] = 7;
        values[valuesById[8] = "EGIT_ITEM_MEMORY_POS"] = 8;
        return values;
    })();

    /**
     * EGameCardSubType enum.
     * @name NFMsg.EGameCardSubType
     * @enum {string}
     * @property {number} EGCST_UNKNOW=0 EGCST_UNKNOW value
     * @property {number} EGCST_STRENGTH=1 EGCST_STRENGTH value
     * @property {number} EGCST_AGILITY=2 EGCST_AGILITY value
     * @property {number} EGCST_INTELLIGENCE=3 EGCST_INTELLIGENCE value
     */
    NFMsg.EGameCardSubType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EGCST_UNKNOW"] = 0;
        values[valuesById[1] = "EGCST_STRENGTH"] = 1;
        values[valuesById[2] = "EGCST_AGILITY"] = 2;
        values[valuesById[3] = "EGCST_INTELLIGENCE"] = 3;
        return values;
    })();

    /**
     * EGameTokenSubType enum.
     * @name NFMsg.EGameTokenSubType
     * @enum {string}
     * @property {number} EGTST_TOKEN_REBORN=0 EGTST_TOKEN_REBORN value
     * @property {number} EGTST_TOKEN_POSITION=1 EGTST_TOKEN_POSITION value
     * @property {number} EGTST_TOKEN_BOUNTY=2 EGTST_TOKEN_BOUNTY value
     * @property {number} EGTST_TOKEN_ACTIVITY=3 EGTST_TOKEN_ACTIVITY value
     * @property {number} EGTST_TOKEN_BUILD=4 EGTST_TOKEN_BUILD value
     */
    NFMsg.EGameTokenSubType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EGTST_TOKEN_REBORN"] = 0;
        values[valuesById[1] = "EGTST_TOKEN_POSITION"] = 1;
        values[valuesById[2] = "EGTST_TOKEN_BOUNTY"] = 2;
        values[valuesById[3] = "EGTST_TOKEN_ACTIVITY"] = 3;
        values[valuesById[4] = "EGTST_TOKEN_BUILD"] = 4;
        return values;
    })();

    /**
     * EGameItemExpiredType enum.
     * @name NFMsg.EGameItemExpiredType
     * @enum {string}
     * @property {number} EGIET_NONE=0 EGIET_NONE value
     * @property {number} EGIET_USE_TIMES=1 EGIET_USE_TIMES value
     * @property {number} EGIET_REAL_TIME=2 EGIET_REAL_TIME value
     * @property {number} EGIET_END_INDEX=3 EGIET_END_INDEX value
     */
    NFMsg.EGameItemExpiredType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EGIET_NONE"] = 0;
        values[valuesById[1] = "EGIET_USE_TIMES"] = 1;
        values[valuesById[2] = "EGIET_REAL_TIME"] = 2;
        values[valuesById[3] = "EGIET_END_INDEX"] = 3;
        return values;
    })();

    /**
     * EDrawDropItemState enum.
     * @name NFMsg.EDrawDropItemState
     * @enum {string}
     * @property {number} E_DRAW_STATE_NONE=0 E_DRAW_STATE_NONE value
     * @property {number} E_DRAW_STATE_GAIN=1 E_DRAW_STATE_GAIN value
     * @property {number} E_DRAW_STATE_RECV=2 E_DRAW_STATE_RECV value
     */
    NFMsg.EDrawDropItemState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E_DRAW_STATE_NONE"] = 0;
        values[valuesById[1] = "E_DRAW_STATE_GAIN"] = 1;
        values[valuesById[2] = "E_DRAW_STATE_RECV"] = 2;
        return values;
    })();

    /**
     * EGuildPowerType enum.
     * @name NFMsg.EGuildPowerType
     * @enum {string}
     * @property {number} GUILD_POWER_TYPE_NORMAL=0 GUILD_POWER_TYPE_NORMAL value
     * @property {number} GUILD_POWER_TYPE_VICE_PRESIDENT=1 GUILD_POWER_TYPE_VICE_PRESIDENT value
     * @property {number} GUILD_POWER_TYPE_PRESIDENT=2 GUILD_POWER_TYPE_PRESIDENT value
     */
    NFMsg.EGuildPowerType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GUILD_POWER_TYPE_NORMAL"] = 0;
        values[valuesById[1] = "GUILD_POWER_TYPE_VICE_PRESIDENT"] = 1;
        values[valuesById[2] = "GUILD_POWER_TYPE_PRESIDENT"] = 2;
        return values;
    })();

    /**
     * ETaskState enum.
     * @name NFMsg.ETaskState
     * @enum {string}
     * @property {number} TASK_IN_PROCESS=0 TASK_IN_PROCESS value
     * @property {number} TASK_DONE=1 TASK_DONE value
     * @property {number} TASK_DRAW_AWARD=2 TASK_DRAW_AWARD value
     * @property {number} TASK_FINISH=3 TASK_FINISH value
     */
    NFMsg.ETaskState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TASK_IN_PROCESS"] = 0;
        values[valuesById[1] = "TASK_DONE"] = 1;
        values[valuesById[2] = "TASK_DRAW_AWARD"] = 2;
        values[valuesById[3] = "TASK_FINISH"] = 3;
        return values;
    })();

    /**
     * ETaskType enum.
     * @name NFMsg.ETaskType
     * @enum {string}
     * @property {number} TASK_LEVEL_UPDATE_SOME_LEVEL=0 TASK_LEVEL_UPDATE_SOME_LEVEL value
     * @property {number} TASK_PASS_ECTYPE=1 TASK_PASS_ECTYPE value
     * @property {number} TASK_PASS_ECTYPE_COUNT=2 TASK_PASS_ECTYPE_COUNT value
     * @property {number} TASK_PASS_SOME_TYPE_ECTYPE_COUNT=3 TASK_PASS_SOME_TYPE_ECTYPE_COUNT value
     * @property {number} TASK_UPDATE_SKILL_COUNT=4 TASK_UPDATE_SKILL_COUNT value
     * @property {number} TASK_CONSUME_MONEY=5 TASK_CONSUME_MONEY value
     * @property {number} TASK_CONSUME_DIAMOND=6 TASK_CONSUME_DIAMOND value
     * @property {number} TASK_ARENA_COUNT=7 TASK_ARENA_COUNT value
     * @property {number} TASK_KILL_MONSTER_COUNT=8 TASK_KILL_MONSTER_COUNT value
     * @property {number} TASK_KILL_SOME_MONSTER_COUNT=9 TASK_KILL_SOME_MONSTER_COUNT value
     */
    NFMsg.ETaskType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TASK_LEVEL_UPDATE_SOME_LEVEL"] = 0;
        values[valuesById[1] = "TASK_PASS_ECTYPE"] = 1;
        values[valuesById[2] = "TASK_PASS_ECTYPE_COUNT"] = 2;
        values[valuesById[3] = "TASK_PASS_SOME_TYPE_ECTYPE_COUNT"] = 3;
        values[valuesById[4] = "TASK_UPDATE_SKILL_COUNT"] = 4;
        values[valuesById[5] = "TASK_CONSUME_MONEY"] = 5;
        values[valuesById[6] = "TASK_CONSUME_DIAMOND"] = 6;
        values[valuesById[7] = "TASK_ARENA_COUNT"] = 7;
        values[valuesById[8] = "TASK_KILL_MONSTER_COUNT"] = 8;
        values[valuesById[9] = "TASK_KILL_SOME_MONSTER_COUNT"] = 9;
        return values;
    })();

    /**
     * EPVPType enum.
     * @name NFMsg.EPVPType
     * @enum {string}
     * @property {number} PVP_HOME=0 PVP_HOME value
     * @property {number} PVP_INDIVIDUAL=1 PVP_INDIVIDUAL value
     * @property {number} PVP_DOTA=2 PVP_DOTA value
     * @property {number} PVP_SURVIVAL=3 PVP_SURVIVAL value
     * @property {number} PVP_GUILD_WAR=4 PVP_GUILD_WAR value
     * @property {number} PVP_GUILD_DUNGEON=5 PVP_GUILD_DUNGEON value
     */
    NFMsg.EPVPType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PVP_HOME"] = 0;
        values[valuesById[1] = "PVP_INDIVIDUAL"] = 1;
        values[valuesById[2] = "PVP_DOTA"] = 2;
        values[valuesById[3] = "PVP_SURVIVAL"] = 3;
        values[valuesById[4] = "PVP_GUILD_WAR"] = 4;
        values[valuesById[5] = "PVP_GUILD_DUNGEON"] = 5;
        return values;
    })();

    /**
     * EShopType enum.
     * @name NFMsg.EShopType
     * @enum {string}
     * @property {number} EST_UNKNOW=0 EST_UNKNOW value
     * @property {number} EST_BUILDING=1 EST_BUILDING value
     * @property {number} EST_GOLD=2 EST_GOLD value
     * @property {number} EST_ITEM=3 EST_ITEM value
     * @property {number} EST_EQUIP=5 EST_EQUIP value
     * @property {number} EST_GEM=6 EST_GEM value
     * @property {number} EST_CARD=7 EST_CARD value
     */
    NFMsg.EShopType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EST_UNKNOW"] = 0;
        values[valuesById[1] = "EST_BUILDING"] = 1;
        values[valuesById[2] = "EST_GOLD"] = 2;
        values[valuesById[3] = "EST_ITEM"] = 3;
        values[valuesById[5] = "EST_EQUIP"] = 5;
        values[valuesById[6] = "EST_GEM"] = 6;
        values[valuesById[7] = "EST_CARD"] = 7;
        return values;
    })();

    /**
     * ERankType enum.
     * @name NFMsg.ERankType
     * @enum {string}
     * @property {number} ERT_UNKNOW=0 ERT_UNKNOW value
     * @property {number} ERT_PLAYER_LEVEL=1 ERT_PLAYER_LEVEL value
     * @property {number} ERT_FIGHT_VALUE=2 ERT_FIGHT_VALUE value
     * @property {number} ERT_PLAYER_MONEY=3 ERT_PLAYER_MONEY value
     * @property {number} ERT_GUILD_LEVEL=4 ERT_GUILD_LEVEL value
     * @property {number} ERT_GUILD_KINGSOURCE=5 ERT_GUILD_KINGSOURCE value
     */
    NFMsg.ERankType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERT_UNKNOW"] = 0;
        values[valuesById[1] = "ERT_PLAYER_LEVEL"] = 1;
        values[valuesById[2] = "ERT_FIGHT_VALUE"] = 2;
        values[valuesById[3] = "ERT_PLAYER_MONEY"] = 3;
        values[valuesById[4] = "ERT_GUILD_LEVEL"] = 4;
        values[valuesById[5] = "ERT_GUILD_KINGSOURCE"] = 5;
        return values;
    })();

    /**
     * ENPCType enum.
     * @name NFMsg.ENPCType
     * @enum {string}
     * @property {number} ENPCTYPE_NORMAL=0 ENPCTYPE_NORMAL value
     * @property {number} ENPCTYPE_HERO=1 ENPCTYPE_HERO value
     * @property {number} ENPCTYPE_TURRET=2 ENPCTYPE_TURRET value
     */
    NFMsg.ENPCType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ENPCTYPE_NORMAL"] = 0;
        values[valuesById[1] = "ENPCTYPE_HERO"] = 1;
        values[valuesById[2] = "ENPCTYPE_TURRET"] = 2;
        return values;
    })();

    /**
     * ETARGETType enum.
     * @name NFMsg.ETARGETType
     * @enum {string}
     * @property {number} ETARGETTYPE_ENEMY=0 ETARGETTYPE_ENEMY value
     * @property {number} ETARGETTYPE_SELF=1 ETARGETTYPE_SELF value
     * @property {number} ETARGETTYPE_FRIEND=2 ETARGETTYPE_FRIEND value
     */
    NFMsg.ETARGETType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ETARGETTYPE_ENEMY"] = 0;
        values[valuesById[1] = "ETARGETTYPE_SELF"] = 1;
        values[valuesById[2] = "ETARGETTYPE_FRIEND"] = 2;
        return values;
    })();

    /**
     * EPropertyType enum.
     * @name NFMsg.EPropertyType
     * @enum {string}
     * @property {number} EPT_UNKNOW=0 EPT_UNKNOW value
     * @property {number} EPT_STRENGTH=1 EPT_STRENGTH value
     * @property {number} EPT_AGILITY=2 EPT_AGILITY value
     * @property {number} EPT_INTELLIGENCE=3 EPT_INTELLIGENCE value
     */
    NFMsg.EPropertyType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EPT_UNKNOW"] = 0;
        values[valuesById[1] = "EPT_STRENGTH"] = 1;
        values[valuesById[2] = "EPT_AGILITY"] = 2;
        values[valuesById[3] = "EPT_INTELLIGENCE"] = 3;
        return values;
    })();

    /**
     * EGameElementType enum.
     * @name NFMsg.EGameElementType
     * @enum {string}
     * @property {number} EELEMENTTYPE_FIRE=0 EELEMENTTYPE_FIRE value
     * @property {number} EELEMENTTYPE_LIGHT=1 EELEMENTTYPE_LIGHT value
     * @property {number} EELEMENTTYPE_WIND=2 EELEMENTTYPE_WIND value
     * @property {number} EELEMENTTYPE_ICE=3 EELEMENTTYPE_ICE value
     * @property {number} EELEMENTTYPE_POISON=4 EELEMENTTYPE_POISON value
     * @property {number} EELEMENTTYPE_DARK=5 EELEMENTTYPE_DARK value
     */
    NFMsg.EGameElementType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EELEMENTTYPE_FIRE"] = 0;
        values[valuesById[1] = "EELEMENTTYPE_LIGHT"] = 1;
        values[valuesById[2] = "EELEMENTTYPE_WIND"] = 2;
        values[valuesById[3] = "EELEMENTTYPE_ICE"] = 3;
        values[valuesById[4] = "EELEMENTTYPE_POISON"] = 4;
        values[valuesById[5] = "EELEMENTTYPE_DARK"] = 5;
        return values;
    })();

    NFMsg.Ident = (function() {

        /**
         * Properties of an Ident.
         * @memberof NFMsg
         * @interface IIdent
         * @property {number|Long|null} [svrid] Ident svrid
         * @property {number|Long|null} [index] Ident index
         */

        /**
         * Constructs a new Ident.
         * @memberof NFMsg
         * @classdesc Represents an Ident.
         * @implements IIdent
         * @constructor
         * @param {NFMsg.IIdent=} [properties] Properties to set
         */
        function Ident(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ident svrid.
         * @member {number|Long} svrid
         * @memberof NFMsg.Ident
         * @instance
         */
        Ident.prototype.svrid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ident index.
         * @member {number|Long} index
         * @memberof NFMsg.Ident
         * @instance
         */
        Ident.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Ident instance using the specified properties.
         * @function create
         * @memberof NFMsg.Ident
         * @static
         * @param {NFMsg.IIdent=} [properties] Properties to set
         * @returns {NFMsg.Ident} Ident instance
         */
        Ident.create = function create(properties) {
            return new Ident(properties);
        };

        /**
         * Encodes the specified Ident message. Does not implicitly {@link NFMsg.Ident.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.Ident
         * @static
         * @param {NFMsg.IIdent} message Ident message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ident.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.svrid != null && message.hasOwnProperty("svrid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.svrid);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
            return writer;
        };

        /**
         * Decodes an Ident message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.Ident
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.Ident} Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ident.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.Ident();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.svrid = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Ident;
    })();

    NFMsg.Vector2 = (function() {

        /**
         * Properties of a Vector2.
         * @memberof NFMsg
         * @interface IVector2
         * @property {number|null} [x] Vector2 x
         * @property {number|null} [y] Vector2 y
         */

        /**
         * Constructs a new Vector2.
         * @memberof NFMsg
         * @classdesc Represents a Vector2.
         * @implements IVector2
         * @constructor
         * @param {NFMsg.IVector2=} [properties] Properties to set
         */
        function Vector2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vector2 x.
         * @member {number} x
         * @memberof NFMsg.Vector2
         * @instance
         */
        Vector2.prototype.x = 0;

        /**
         * Vector2 y.
         * @member {number} y
         * @memberof NFMsg.Vector2
         * @instance
         */
        Vector2.prototype.y = 0;

        /**
         * Creates a new Vector2 instance using the specified properties.
         * @function create
         * @memberof NFMsg.Vector2
         * @static
         * @param {NFMsg.IVector2=} [properties] Properties to set
         * @returns {NFMsg.Vector2} Vector2 instance
         */
        Vector2.create = function create(properties) {
            return new Vector2(properties);
        };

        /**
         * Encodes the specified Vector2 message. Does not implicitly {@link NFMsg.Vector2.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.Vector2
         * @static
         * @param {NFMsg.IVector2} message Vector2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vector2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };

        /**
         * Decodes a Vector2 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.Vector2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.Vector2} Vector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vector2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.Vector2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Vector2;
    })();

    NFMsg.Vector3 = (function() {

        /**
         * Properties of a Vector3.
         * @memberof NFMsg
         * @interface IVector3
         * @property {number|null} [x] Vector3 x
         * @property {number|null} [y] Vector3 y
         * @property {number|null} [z] Vector3 z
         */

        /**
         * Constructs a new Vector3.
         * @memberof NFMsg
         * @classdesc Represents a Vector3.
         * @implements IVector3
         * @constructor
         * @param {NFMsg.IVector3=} [properties] Properties to set
         */
        function Vector3(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vector3 x.
         * @member {number} x
         * @memberof NFMsg.Vector3
         * @instance
         */
        Vector3.prototype.x = 0;

        /**
         * Vector3 y.
         * @member {number} y
         * @memberof NFMsg.Vector3
         * @instance
         */
        Vector3.prototype.y = 0;

        /**
         * Vector3 z.
         * @member {number} z
         * @memberof NFMsg.Vector3
         * @instance
         */
        Vector3.prototype.z = 0;

        /**
         * Creates a new Vector3 instance using the specified properties.
         * @function create
         * @memberof NFMsg.Vector3
         * @static
         * @param {NFMsg.IVector3=} [properties] Properties to set
         * @returns {NFMsg.Vector3} Vector3 instance
         */
        Vector3.create = function create(properties) {
            return new Vector3(properties);
        };

        /**
         * Encodes the specified Vector3 message. Does not implicitly {@link NFMsg.Vector3.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.Vector3
         * @static
         * @param {NFMsg.IVector3} message Vector3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vector3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && message.hasOwnProperty("z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };

        /**
         * Decodes a Vector3 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.Vector3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.Vector3} Vector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vector3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.Vector3();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                case 3:
                    message.z = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Vector3;
    })();

    NFMsg.PropertyInt = (function() {

        /**
         * Properties of a PropertyInt.
         * @memberof NFMsg
         * @interface IPropertyInt
         * @property {Uint8Array|null} [property_name] PropertyInt property_name
         * @property {number|Long|null} [data] PropertyInt data
         */

        /**
         * Constructs a new PropertyInt.
         * @memberof NFMsg
         * @classdesc BaseCommon/////////////////////////////
         * @implements IPropertyInt
         * @constructor
         * @param {NFMsg.IPropertyInt=} [properties] Properties to set
         */
        function PropertyInt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PropertyInt property_name.
         * @member {Uint8Array} property_name
         * @memberof NFMsg.PropertyInt
         * @instance
         */
        PropertyInt.prototype.property_name = $util.newBuffer([]);

        /**
         * PropertyInt data.
         * @member {number|Long} data
         * @memberof NFMsg.PropertyInt
         * @instance
         */
        PropertyInt.prototype.data = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PropertyInt instance using the specified properties.
         * @function create
         * @memberof NFMsg.PropertyInt
         * @static
         * @param {NFMsg.IPropertyInt=} [properties] Properties to set
         * @returns {NFMsg.PropertyInt} PropertyInt instance
         */
        PropertyInt.create = function create(properties) {
            return new PropertyInt(properties);
        };

        /**
         * Encodes the specified PropertyInt message. Does not implicitly {@link NFMsg.PropertyInt.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PropertyInt
         * @static
         * @param {NFMsg.IPropertyInt} message PropertyInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyInt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.property_name != null && message.hasOwnProperty("property_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.property_name);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.data);
            return writer;
        };

        /**
         * Decodes a PropertyInt message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PropertyInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PropertyInt} PropertyInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PropertyInt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.property_name = reader.bytes();
                    break;
                case 2:
                    message.data = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PropertyInt;
    })();

    NFMsg.PropertyFloat = (function() {

        /**
         * Properties of a PropertyFloat.
         * @memberof NFMsg
         * @interface IPropertyFloat
         * @property {Uint8Array|null} [property_name] PropertyFloat property_name
         * @property {number|null} [data] PropertyFloat data
         */

        /**
         * Constructs a new PropertyFloat.
         * @memberof NFMsg
         * @classdesc Represents a PropertyFloat.
         * @implements IPropertyFloat
         * @constructor
         * @param {NFMsg.IPropertyFloat=} [properties] Properties to set
         */
        function PropertyFloat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PropertyFloat property_name.
         * @member {Uint8Array} property_name
         * @memberof NFMsg.PropertyFloat
         * @instance
         */
        PropertyFloat.prototype.property_name = $util.newBuffer([]);

        /**
         * PropertyFloat data.
         * @member {number} data
         * @memberof NFMsg.PropertyFloat
         * @instance
         */
        PropertyFloat.prototype.data = 0;

        /**
         * Creates a new PropertyFloat instance using the specified properties.
         * @function create
         * @memberof NFMsg.PropertyFloat
         * @static
         * @param {NFMsg.IPropertyFloat=} [properties] Properties to set
         * @returns {NFMsg.PropertyFloat} PropertyFloat instance
         */
        PropertyFloat.create = function create(properties) {
            return new PropertyFloat(properties);
        };

        /**
         * Encodes the specified PropertyFloat message. Does not implicitly {@link NFMsg.PropertyFloat.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PropertyFloat
         * @static
         * @param {NFMsg.IPropertyFloat} message PropertyFloat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyFloat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.property_name != null && message.hasOwnProperty("property_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.property_name);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.data);
            return writer;
        };

        /**
         * Decodes a PropertyFloat message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PropertyFloat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PropertyFloat} PropertyFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyFloat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PropertyFloat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.property_name = reader.bytes();
                    break;
                case 2:
                    message.data = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PropertyFloat;
    })();

    NFMsg.PropertyString = (function() {

        /**
         * Properties of a PropertyString.
         * @memberof NFMsg
         * @interface IPropertyString
         * @property {Uint8Array|null} [property_name] PropertyString property_name
         * @property {Uint8Array|null} [data] PropertyString data
         */

        /**
         * Constructs a new PropertyString.
         * @memberof NFMsg
         * @classdesc Represents a PropertyString.
         * @implements IPropertyString
         * @constructor
         * @param {NFMsg.IPropertyString=} [properties] Properties to set
         */
        function PropertyString(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PropertyString property_name.
         * @member {Uint8Array} property_name
         * @memberof NFMsg.PropertyString
         * @instance
         */
        PropertyString.prototype.property_name = $util.newBuffer([]);

        /**
         * PropertyString data.
         * @member {Uint8Array} data
         * @memberof NFMsg.PropertyString
         * @instance
         */
        PropertyString.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new PropertyString instance using the specified properties.
         * @function create
         * @memberof NFMsg.PropertyString
         * @static
         * @param {NFMsg.IPropertyString=} [properties] Properties to set
         * @returns {NFMsg.PropertyString} PropertyString instance
         */
        PropertyString.create = function create(properties) {
            return new PropertyString(properties);
        };

        /**
         * Encodes the specified PropertyString message. Does not implicitly {@link NFMsg.PropertyString.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PropertyString
         * @static
         * @param {NFMsg.IPropertyString} message PropertyString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyString.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.property_name != null && message.hasOwnProperty("property_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.property_name);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Decodes a PropertyString message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PropertyString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PropertyString} PropertyString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyString.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PropertyString();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.property_name = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PropertyString;
    })();

    NFMsg.PropertyObject = (function() {

        /**
         * Properties of a PropertyObject.
         * @memberof NFMsg
         * @interface IPropertyObject
         * @property {Uint8Array|null} [property_name] PropertyObject property_name
         * @property {NFMsg.IIdent|null} [data] PropertyObject data
         */

        /**
         * Constructs a new PropertyObject.
         * @memberof NFMsg
         * @classdesc Represents a PropertyObject.
         * @implements IPropertyObject
         * @constructor
         * @param {NFMsg.IPropertyObject=} [properties] Properties to set
         */
        function PropertyObject(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PropertyObject property_name.
         * @member {Uint8Array} property_name
         * @memberof NFMsg.PropertyObject
         * @instance
         */
        PropertyObject.prototype.property_name = $util.newBuffer([]);

        /**
         * PropertyObject data.
         * @member {NFMsg.IIdent|null|undefined} data
         * @memberof NFMsg.PropertyObject
         * @instance
         */
        PropertyObject.prototype.data = null;

        /**
         * Creates a new PropertyObject instance using the specified properties.
         * @function create
         * @memberof NFMsg.PropertyObject
         * @static
         * @param {NFMsg.IPropertyObject=} [properties] Properties to set
         * @returns {NFMsg.PropertyObject} PropertyObject instance
         */
        PropertyObject.create = function create(properties) {
            return new PropertyObject(properties);
        };

        /**
         * Encodes the specified PropertyObject message. Does not implicitly {@link NFMsg.PropertyObject.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PropertyObject
         * @static
         * @param {NFMsg.IPropertyObject} message PropertyObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.property_name != null && message.hasOwnProperty("property_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.property_name);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.NFMsg.Ident.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a PropertyObject message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PropertyObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PropertyObject} PropertyObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PropertyObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.property_name = reader.bytes();
                    break;
                case 2:
                    message.data = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PropertyObject;
    })();

    NFMsg.PropertyVector2 = (function() {

        /**
         * Properties of a PropertyVector2.
         * @memberof NFMsg
         * @interface IPropertyVector2
         * @property {Uint8Array|null} [property_name] PropertyVector2 property_name
         * @property {NFMsg.IVector2|null} [data] PropertyVector2 data
         */

        /**
         * Constructs a new PropertyVector2.
         * @memberof NFMsg
         * @classdesc Represents a PropertyVector2.
         * @implements IPropertyVector2
         * @constructor
         * @param {NFMsg.IPropertyVector2=} [properties] Properties to set
         */
        function PropertyVector2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PropertyVector2 property_name.
         * @member {Uint8Array} property_name
         * @memberof NFMsg.PropertyVector2
         * @instance
         */
        PropertyVector2.prototype.property_name = $util.newBuffer([]);

        /**
         * PropertyVector2 data.
         * @member {NFMsg.IVector2|null|undefined} data
         * @memberof NFMsg.PropertyVector2
         * @instance
         */
        PropertyVector2.prototype.data = null;

        /**
         * Creates a new PropertyVector2 instance using the specified properties.
         * @function create
         * @memberof NFMsg.PropertyVector2
         * @static
         * @param {NFMsg.IPropertyVector2=} [properties] Properties to set
         * @returns {NFMsg.PropertyVector2} PropertyVector2 instance
         */
        PropertyVector2.create = function create(properties) {
            return new PropertyVector2(properties);
        };

        /**
         * Encodes the specified PropertyVector2 message. Does not implicitly {@link NFMsg.PropertyVector2.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PropertyVector2
         * @static
         * @param {NFMsg.IPropertyVector2} message PropertyVector2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyVector2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.property_name != null && message.hasOwnProperty("property_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.property_name);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.NFMsg.Vector2.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a PropertyVector2 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PropertyVector2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PropertyVector2} PropertyVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyVector2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PropertyVector2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.property_name = reader.bytes();
                    break;
                case 2:
                    message.data = $root.NFMsg.Vector2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PropertyVector2;
    })();

    NFMsg.PropertyVector3 = (function() {

        /**
         * Properties of a PropertyVector3.
         * @memberof NFMsg
         * @interface IPropertyVector3
         * @property {Uint8Array|null} [property_name] PropertyVector3 property_name
         * @property {NFMsg.IVector3|null} [data] PropertyVector3 data
         */

        /**
         * Constructs a new PropertyVector3.
         * @memberof NFMsg
         * @classdesc Represents a PropertyVector3.
         * @implements IPropertyVector3
         * @constructor
         * @param {NFMsg.IPropertyVector3=} [properties] Properties to set
         */
        function PropertyVector3(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PropertyVector3 property_name.
         * @member {Uint8Array} property_name
         * @memberof NFMsg.PropertyVector3
         * @instance
         */
        PropertyVector3.prototype.property_name = $util.newBuffer([]);

        /**
         * PropertyVector3 data.
         * @member {NFMsg.IVector3|null|undefined} data
         * @memberof NFMsg.PropertyVector3
         * @instance
         */
        PropertyVector3.prototype.data = null;

        /**
         * Creates a new PropertyVector3 instance using the specified properties.
         * @function create
         * @memberof NFMsg.PropertyVector3
         * @static
         * @param {NFMsg.IPropertyVector3=} [properties] Properties to set
         * @returns {NFMsg.PropertyVector3} PropertyVector3 instance
         */
        PropertyVector3.create = function create(properties) {
            return new PropertyVector3(properties);
        };

        /**
         * Encodes the specified PropertyVector3 message. Does not implicitly {@link NFMsg.PropertyVector3.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PropertyVector3
         * @static
         * @param {NFMsg.IPropertyVector3} message PropertyVector3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyVector3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.property_name != null && message.hasOwnProperty("property_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.property_name);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.NFMsg.Vector3.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a PropertyVector3 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PropertyVector3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PropertyVector3} PropertyVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyVector3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PropertyVector3();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.property_name = reader.bytes();
                    break;
                case 2:
                    message.data = $root.NFMsg.Vector3.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PropertyVector3;
    })();

    NFMsg.RecordInt = (function() {

        /**
         * Properties of a RecordInt.
         * @memberof NFMsg
         * @interface IRecordInt
         * @property {number|null} [row] RecordInt row
         * @property {number|null} [col] RecordInt col
         * @property {number|Long|null} [data] RecordInt data
         */

        /**
         * Constructs a new RecordInt.
         * @memberof NFMsg
         * @classdesc Represents a RecordInt.
         * @implements IRecordInt
         * @constructor
         * @param {NFMsg.IRecordInt=} [properties] Properties to set
         */
        function RecordInt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordInt row.
         * @member {number} row
         * @memberof NFMsg.RecordInt
         * @instance
         */
        RecordInt.prototype.row = 0;

        /**
         * RecordInt col.
         * @member {number} col
         * @memberof NFMsg.RecordInt
         * @instance
         */
        RecordInt.prototype.col = 0;

        /**
         * RecordInt data.
         * @member {number|Long} data
         * @memberof NFMsg.RecordInt
         * @instance
         */
        RecordInt.prototype.data = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RecordInt instance using the specified properties.
         * @function create
         * @memberof NFMsg.RecordInt
         * @static
         * @param {NFMsg.IRecordInt=} [properties] Properties to set
         * @returns {NFMsg.RecordInt} RecordInt instance
         */
        RecordInt.create = function create(properties) {
            return new RecordInt(properties);
        };

        /**
         * Encodes the specified RecordInt message. Does not implicitly {@link NFMsg.RecordInt.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RecordInt
         * @static
         * @param {NFMsg.IRecordInt} message RecordInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordInt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.col != null && message.hasOwnProperty("col"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.data);
            return writer;
        };

        /**
         * Decodes a RecordInt message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RecordInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RecordInt} RecordInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RecordInt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.int32();
                    break;
                case 2:
                    message.col = reader.int32();
                    break;
                case 3:
                    message.data = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordInt;
    })();

    NFMsg.RecordFloat = (function() {

        /**
         * Properties of a RecordFloat.
         * @memberof NFMsg
         * @interface IRecordFloat
         * @property {number|null} [row] RecordFloat row
         * @property {number|null} [col] RecordFloat col
         * @property {number|null} [data] RecordFloat data
         */

        /**
         * Constructs a new RecordFloat.
         * @memberof NFMsg
         * @classdesc Represents a RecordFloat.
         * @implements IRecordFloat
         * @constructor
         * @param {NFMsg.IRecordFloat=} [properties] Properties to set
         */
        function RecordFloat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordFloat row.
         * @member {number} row
         * @memberof NFMsg.RecordFloat
         * @instance
         */
        RecordFloat.prototype.row = 0;

        /**
         * RecordFloat col.
         * @member {number} col
         * @memberof NFMsg.RecordFloat
         * @instance
         */
        RecordFloat.prototype.col = 0;

        /**
         * RecordFloat data.
         * @member {number} data
         * @memberof NFMsg.RecordFloat
         * @instance
         */
        RecordFloat.prototype.data = 0;

        /**
         * Creates a new RecordFloat instance using the specified properties.
         * @function create
         * @memberof NFMsg.RecordFloat
         * @static
         * @param {NFMsg.IRecordFloat=} [properties] Properties to set
         * @returns {NFMsg.RecordFloat} RecordFloat instance
         */
        RecordFloat.create = function create(properties) {
            return new RecordFloat(properties);
        };

        /**
         * Encodes the specified RecordFloat message. Does not implicitly {@link NFMsg.RecordFloat.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RecordFloat
         * @static
         * @param {NFMsg.IRecordFloat} message RecordFloat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordFloat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.col != null && message.hasOwnProperty("col"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.data);
            return writer;
        };

        /**
         * Decodes a RecordFloat message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RecordFloat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RecordFloat} RecordFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordFloat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RecordFloat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.int32();
                    break;
                case 2:
                    message.col = reader.int32();
                    break;
                case 3:
                    message.data = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordFloat;
    })();

    NFMsg.RecordString = (function() {

        /**
         * Properties of a RecordString.
         * @memberof NFMsg
         * @interface IRecordString
         * @property {number|null} [row] RecordString row
         * @property {number|null} [col] RecordString col
         * @property {Uint8Array|null} [data] RecordString data
         */

        /**
         * Constructs a new RecordString.
         * @memberof NFMsg
         * @classdesc Represents a RecordString.
         * @implements IRecordString
         * @constructor
         * @param {NFMsg.IRecordString=} [properties] Properties to set
         */
        function RecordString(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordString row.
         * @member {number} row
         * @memberof NFMsg.RecordString
         * @instance
         */
        RecordString.prototype.row = 0;

        /**
         * RecordString col.
         * @member {number} col
         * @memberof NFMsg.RecordString
         * @instance
         */
        RecordString.prototype.col = 0;

        /**
         * RecordString data.
         * @member {Uint8Array} data
         * @memberof NFMsg.RecordString
         * @instance
         */
        RecordString.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new RecordString instance using the specified properties.
         * @function create
         * @memberof NFMsg.RecordString
         * @static
         * @param {NFMsg.IRecordString=} [properties] Properties to set
         * @returns {NFMsg.RecordString} RecordString instance
         */
        RecordString.create = function create(properties) {
            return new RecordString(properties);
        };

        /**
         * Encodes the specified RecordString message. Does not implicitly {@link NFMsg.RecordString.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RecordString
         * @static
         * @param {NFMsg.IRecordString} message RecordString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordString.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.col != null && message.hasOwnProperty("col"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };

        /**
         * Decodes a RecordString message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RecordString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RecordString} RecordString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordString.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RecordString();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.int32();
                    break;
                case 2:
                    message.col = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordString;
    })();

    NFMsg.RecordObject = (function() {

        /**
         * Properties of a RecordObject.
         * @memberof NFMsg
         * @interface IRecordObject
         * @property {number|null} [row] RecordObject row
         * @property {number|null} [col] RecordObject col
         * @property {NFMsg.IIdent|null} [data] RecordObject data
         */

        /**
         * Constructs a new RecordObject.
         * @memberof NFMsg
         * @classdesc Represents a RecordObject.
         * @implements IRecordObject
         * @constructor
         * @param {NFMsg.IRecordObject=} [properties] Properties to set
         */
        function RecordObject(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordObject row.
         * @member {number} row
         * @memberof NFMsg.RecordObject
         * @instance
         */
        RecordObject.prototype.row = 0;

        /**
         * RecordObject col.
         * @member {number} col
         * @memberof NFMsg.RecordObject
         * @instance
         */
        RecordObject.prototype.col = 0;

        /**
         * RecordObject data.
         * @member {NFMsg.IIdent|null|undefined} data
         * @memberof NFMsg.RecordObject
         * @instance
         */
        RecordObject.prototype.data = null;

        /**
         * Creates a new RecordObject instance using the specified properties.
         * @function create
         * @memberof NFMsg.RecordObject
         * @static
         * @param {NFMsg.IRecordObject=} [properties] Properties to set
         * @returns {NFMsg.RecordObject} RecordObject instance
         */
        RecordObject.create = function create(properties) {
            return new RecordObject(properties);
        };

        /**
         * Encodes the specified RecordObject message. Does not implicitly {@link NFMsg.RecordObject.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RecordObject
         * @static
         * @param {NFMsg.IRecordObject} message RecordObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.col != null && message.hasOwnProperty("col"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.NFMsg.Ident.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RecordObject message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RecordObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RecordObject} RecordObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RecordObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.int32();
                    break;
                case 2:
                    message.col = reader.int32();
                    break;
                case 3:
                    message.data = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordObject;
    })();

    NFMsg.RecordVector2 = (function() {

        /**
         * Properties of a RecordVector2.
         * @memberof NFMsg
         * @interface IRecordVector2
         * @property {number|null} [row] RecordVector2 row
         * @property {number|null} [col] RecordVector2 col
         * @property {NFMsg.IVector2|null} [data] RecordVector2 data
         */

        /**
         * Constructs a new RecordVector2.
         * @memberof NFMsg
         * @classdesc Represents a RecordVector2.
         * @implements IRecordVector2
         * @constructor
         * @param {NFMsg.IRecordVector2=} [properties] Properties to set
         */
        function RecordVector2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordVector2 row.
         * @member {number} row
         * @memberof NFMsg.RecordVector2
         * @instance
         */
        RecordVector2.prototype.row = 0;

        /**
         * RecordVector2 col.
         * @member {number} col
         * @memberof NFMsg.RecordVector2
         * @instance
         */
        RecordVector2.prototype.col = 0;

        /**
         * RecordVector2 data.
         * @member {NFMsg.IVector2|null|undefined} data
         * @memberof NFMsg.RecordVector2
         * @instance
         */
        RecordVector2.prototype.data = null;

        /**
         * Creates a new RecordVector2 instance using the specified properties.
         * @function create
         * @memberof NFMsg.RecordVector2
         * @static
         * @param {NFMsg.IRecordVector2=} [properties] Properties to set
         * @returns {NFMsg.RecordVector2} RecordVector2 instance
         */
        RecordVector2.create = function create(properties) {
            return new RecordVector2(properties);
        };

        /**
         * Encodes the specified RecordVector2 message. Does not implicitly {@link NFMsg.RecordVector2.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RecordVector2
         * @static
         * @param {NFMsg.IRecordVector2} message RecordVector2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordVector2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.col != null && message.hasOwnProperty("col"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.NFMsg.Vector2.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RecordVector2 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RecordVector2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RecordVector2} RecordVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordVector2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RecordVector2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.int32();
                    break;
                case 2:
                    message.col = reader.int32();
                    break;
                case 3:
                    message.data = $root.NFMsg.Vector2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordVector2;
    })();

    NFMsg.RecordVector3 = (function() {

        /**
         * Properties of a RecordVector3.
         * @memberof NFMsg
         * @interface IRecordVector3
         * @property {number|null} [row] RecordVector3 row
         * @property {number|null} [col] RecordVector3 col
         * @property {NFMsg.IVector3|null} [data] RecordVector3 data
         */

        /**
         * Constructs a new RecordVector3.
         * @memberof NFMsg
         * @classdesc Represents a RecordVector3.
         * @implements IRecordVector3
         * @constructor
         * @param {NFMsg.IRecordVector3=} [properties] Properties to set
         */
        function RecordVector3(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordVector3 row.
         * @member {number} row
         * @memberof NFMsg.RecordVector3
         * @instance
         */
        RecordVector3.prototype.row = 0;

        /**
         * RecordVector3 col.
         * @member {number} col
         * @memberof NFMsg.RecordVector3
         * @instance
         */
        RecordVector3.prototype.col = 0;

        /**
         * RecordVector3 data.
         * @member {NFMsg.IVector3|null|undefined} data
         * @memberof NFMsg.RecordVector3
         * @instance
         */
        RecordVector3.prototype.data = null;

        /**
         * Creates a new RecordVector3 instance using the specified properties.
         * @function create
         * @memberof NFMsg.RecordVector3
         * @static
         * @param {NFMsg.IRecordVector3=} [properties] Properties to set
         * @returns {NFMsg.RecordVector3} RecordVector3 instance
         */
        RecordVector3.create = function create(properties) {
            return new RecordVector3(properties);
        };

        /**
         * Encodes the specified RecordVector3 message. Does not implicitly {@link NFMsg.RecordVector3.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RecordVector3
         * @static
         * @param {NFMsg.IRecordVector3} message RecordVector3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordVector3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.col != null && message.hasOwnProperty("col"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.NFMsg.Vector3.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RecordVector3 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RecordVector3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RecordVector3} RecordVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordVector3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RecordVector3();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.int32();
                    break;
                case 2:
                    message.col = reader.int32();
                    break;
                case 3:
                    message.data = $root.NFMsg.Vector3.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordVector3;
    })();

    NFMsg.RecordAddRowStruct = (function() {

        /**
         * Properties of a RecordAddRowStruct.
         * @memberof NFMsg
         * @interface IRecordAddRowStruct
         * @property {number|null} [row] RecordAddRowStruct row
         * @property {Array.<NFMsg.IRecordInt>|null} [record_int_list] RecordAddRowStruct record_int_list
         * @property {Array.<NFMsg.IRecordFloat>|null} [record_float_list] RecordAddRowStruct record_float_list
         * @property {Array.<NFMsg.IRecordString>|null} [record_string_list] RecordAddRowStruct record_string_list
         * @property {Array.<NFMsg.IRecordObject>|null} [record_object_list] RecordAddRowStruct record_object_list
         * @property {Array.<NFMsg.IRecordVector2>|null} [record_vector2_list] RecordAddRowStruct record_vector2_list
         * @property {Array.<NFMsg.IRecordVector3>|null} [record_vector3_list] RecordAddRowStruct record_vector3_list
         */

        /**
         * Constructs a new RecordAddRowStruct.
         * @memberof NFMsg
         * @classdesc Represents a RecordAddRowStruct.
         * @implements IRecordAddRowStruct
         * @constructor
         * @param {NFMsg.IRecordAddRowStruct=} [properties] Properties to set
         */
        function RecordAddRowStruct(properties) {
            this.record_int_list = [];
            this.record_float_list = [];
            this.record_string_list = [];
            this.record_object_list = [];
            this.record_vector2_list = [];
            this.record_vector3_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordAddRowStruct row.
         * @member {number} row
         * @memberof NFMsg.RecordAddRowStruct
         * @instance
         */
        RecordAddRowStruct.prototype.row = 0;

        /**
         * RecordAddRowStruct record_int_list.
         * @member {Array.<NFMsg.IRecordInt>} record_int_list
         * @memberof NFMsg.RecordAddRowStruct
         * @instance
         */
        RecordAddRowStruct.prototype.record_int_list = $util.emptyArray;

        /**
         * RecordAddRowStruct record_float_list.
         * @member {Array.<NFMsg.IRecordFloat>} record_float_list
         * @memberof NFMsg.RecordAddRowStruct
         * @instance
         */
        RecordAddRowStruct.prototype.record_float_list = $util.emptyArray;

        /**
         * RecordAddRowStruct record_string_list.
         * @member {Array.<NFMsg.IRecordString>} record_string_list
         * @memberof NFMsg.RecordAddRowStruct
         * @instance
         */
        RecordAddRowStruct.prototype.record_string_list = $util.emptyArray;

        /**
         * RecordAddRowStruct record_object_list.
         * @member {Array.<NFMsg.IRecordObject>} record_object_list
         * @memberof NFMsg.RecordAddRowStruct
         * @instance
         */
        RecordAddRowStruct.prototype.record_object_list = $util.emptyArray;

        /**
         * RecordAddRowStruct record_vector2_list.
         * @member {Array.<NFMsg.IRecordVector2>} record_vector2_list
         * @memberof NFMsg.RecordAddRowStruct
         * @instance
         */
        RecordAddRowStruct.prototype.record_vector2_list = $util.emptyArray;

        /**
         * RecordAddRowStruct record_vector3_list.
         * @member {Array.<NFMsg.IRecordVector3>} record_vector3_list
         * @memberof NFMsg.RecordAddRowStruct
         * @instance
         */
        RecordAddRowStruct.prototype.record_vector3_list = $util.emptyArray;

        /**
         * Creates a new RecordAddRowStruct instance using the specified properties.
         * @function create
         * @memberof NFMsg.RecordAddRowStruct
         * @static
         * @param {NFMsg.IRecordAddRowStruct=} [properties] Properties to set
         * @returns {NFMsg.RecordAddRowStruct} RecordAddRowStruct instance
         */
        RecordAddRowStruct.create = function create(properties) {
            return new RecordAddRowStruct(properties);
        };

        /**
         * Encodes the specified RecordAddRowStruct message. Does not implicitly {@link NFMsg.RecordAddRowStruct.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RecordAddRowStruct
         * @static
         * @param {NFMsg.IRecordAddRowStruct} message RecordAddRowStruct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordAddRowStruct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.record_int_list != null && message.record_int_list.length)
                for (var i = 0; i < message.record_int_list.length; ++i)
                    $root.NFMsg.RecordInt.encode(message.record_int_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.record_float_list != null && message.record_float_list.length)
                for (var i = 0; i < message.record_float_list.length; ++i)
                    $root.NFMsg.RecordFloat.encode(message.record_float_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.record_string_list != null && message.record_string_list.length)
                for (var i = 0; i < message.record_string_list.length; ++i)
                    $root.NFMsg.RecordString.encode(message.record_string_list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.record_object_list != null && message.record_object_list.length)
                for (var i = 0; i < message.record_object_list.length; ++i)
                    $root.NFMsg.RecordObject.encode(message.record_object_list[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.record_vector2_list != null && message.record_vector2_list.length)
                for (var i = 0; i < message.record_vector2_list.length; ++i)
                    $root.NFMsg.RecordVector2.encode(message.record_vector2_list[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.record_vector3_list != null && message.record_vector3_list.length)
                for (var i = 0; i < message.record_vector3_list.length; ++i)
                    $root.NFMsg.RecordVector3.encode(message.record_vector3_list[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RecordAddRowStruct message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RecordAddRowStruct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RecordAddRowStruct} RecordAddRowStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordAddRowStruct.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RecordAddRowStruct();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.int32();
                    break;
                case 2:
                    if (!(message.record_int_list && message.record_int_list.length))
                        message.record_int_list = [];
                    message.record_int_list.push($root.NFMsg.RecordInt.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.record_float_list && message.record_float_list.length))
                        message.record_float_list = [];
                    message.record_float_list.push($root.NFMsg.RecordFloat.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.record_string_list && message.record_string_list.length))
                        message.record_string_list = [];
                    message.record_string_list.push($root.NFMsg.RecordString.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.record_object_list && message.record_object_list.length))
                        message.record_object_list = [];
                    message.record_object_list.push($root.NFMsg.RecordObject.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.record_vector2_list && message.record_vector2_list.length))
                        message.record_vector2_list = [];
                    message.record_vector2_list.push($root.NFMsg.RecordVector2.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.record_vector3_list && message.record_vector3_list.length))
                        message.record_vector3_list = [];
                    message.record_vector3_list.push($root.NFMsg.RecordVector3.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordAddRowStruct;
    })();

    NFMsg.ObjectRecordBase = (function() {

        /**
         * Properties of an ObjectRecordBase.
         * @memberof NFMsg
         * @interface IObjectRecordBase
         * @property {Uint8Array|null} [record_name] ObjectRecordBase record_name
         * @property {Array.<NFMsg.IRecordAddRowStruct>|null} [row_struct] ObjectRecordBase row_struct
         */

        /**
         * Constructs a new ObjectRecordBase.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordBase.
         * @implements IObjectRecordBase
         * @constructor
         * @param {NFMsg.IObjectRecordBase=} [properties] Properties to set
         */
        function ObjectRecordBase(properties) {
            this.row_struct = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordBase record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordBase
         * @instance
         */
        ObjectRecordBase.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordBase row_struct.
         * @member {Array.<NFMsg.IRecordAddRowStruct>} row_struct
         * @memberof NFMsg.ObjectRecordBase
         * @instance
         */
        ObjectRecordBase.prototype.row_struct = $util.emptyArray;

        /**
         * Creates a new ObjectRecordBase instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordBase
         * @static
         * @param {NFMsg.IObjectRecordBase=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordBase} ObjectRecordBase instance
         */
        ObjectRecordBase.create = function create(properties) {
            return new ObjectRecordBase(properties);
        };

        /**
         * Encodes the specified ObjectRecordBase message. Does not implicitly {@link NFMsg.ObjectRecordBase.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordBase
         * @static
         * @param {NFMsg.IObjectRecordBase} message ObjectRecordBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.record_name);
            if (message.row_struct != null && message.row_struct.length)
                for (var i = 0; i < message.row_struct.length; ++i)
                    $root.NFMsg.RecordAddRowStruct.encode(message.row_struct[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordBase message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordBase} ObjectRecordBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordBase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordBase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.record_name = reader.bytes();
                    break;
                case 2:
                    if (!(message.row_struct && message.row_struct.length))
                        message.row_struct = [];
                    message.row_struct.push($root.NFMsg.RecordAddRowStruct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordBase;
    })();

    NFMsg.ObjectPropertyInt = (function() {

        /**
         * Properties of an ObjectPropertyInt.
         * @memberof NFMsg
         * @interface IObjectPropertyInt
         * @property {NFMsg.IIdent|null} [player_id] ObjectPropertyInt player_id
         * @property {Array.<NFMsg.IPropertyInt>|null} [property_list] ObjectPropertyInt property_list
         */

        /**
         * Constructs a new ObjectPropertyInt.
         * @memberof NFMsg
         * @classdesc Represents an ObjectPropertyInt.
         * @implements IObjectPropertyInt
         * @constructor
         * @param {NFMsg.IObjectPropertyInt=} [properties] Properties to set
         */
        function ObjectPropertyInt(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectPropertyInt player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectPropertyInt
         * @instance
         */
        ObjectPropertyInt.prototype.player_id = null;

        /**
         * ObjectPropertyInt property_list.
         * @member {Array.<NFMsg.IPropertyInt>} property_list
         * @memberof NFMsg.ObjectPropertyInt
         * @instance
         */
        ObjectPropertyInt.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectPropertyInt instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectPropertyInt
         * @static
         * @param {NFMsg.IObjectPropertyInt=} [properties] Properties to set
         * @returns {NFMsg.ObjectPropertyInt} ObjectPropertyInt instance
         */
        ObjectPropertyInt.create = function create(properties) {
            return new ObjectPropertyInt(properties);
        };

        /**
         * Encodes the specified ObjectPropertyInt message. Does not implicitly {@link NFMsg.ObjectPropertyInt.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectPropertyInt
         * @static
         * @param {NFMsg.IObjectPropertyInt} message ObjectPropertyInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectPropertyInt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.PropertyInt.encode(message.property_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectPropertyInt message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectPropertyInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectPropertyInt} ObjectPropertyInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectPropertyInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectPropertyInt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.PropertyInt.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectPropertyInt;
    })();

    NFMsg.ObjectPropertyFloat = (function() {

        /**
         * Properties of an ObjectPropertyFloat.
         * @memberof NFMsg
         * @interface IObjectPropertyFloat
         * @property {NFMsg.IIdent|null} [player_id] ObjectPropertyFloat player_id
         * @property {Array.<NFMsg.IPropertyFloat>|null} [property_list] ObjectPropertyFloat property_list
         */

        /**
         * Constructs a new ObjectPropertyFloat.
         * @memberof NFMsg
         * @classdesc Represents an ObjectPropertyFloat.
         * @implements IObjectPropertyFloat
         * @constructor
         * @param {NFMsg.IObjectPropertyFloat=} [properties] Properties to set
         */
        function ObjectPropertyFloat(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectPropertyFloat player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectPropertyFloat
         * @instance
         */
        ObjectPropertyFloat.prototype.player_id = null;

        /**
         * ObjectPropertyFloat property_list.
         * @member {Array.<NFMsg.IPropertyFloat>} property_list
         * @memberof NFMsg.ObjectPropertyFloat
         * @instance
         */
        ObjectPropertyFloat.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectPropertyFloat instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectPropertyFloat
         * @static
         * @param {NFMsg.IObjectPropertyFloat=} [properties] Properties to set
         * @returns {NFMsg.ObjectPropertyFloat} ObjectPropertyFloat instance
         */
        ObjectPropertyFloat.create = function create(properties) {
            return new ObjectPropertyFloat(properties);
        };

        /**
         * Encodes the specified ObjectPropertyFloat message. Does not implicitly {@link NFMsg.ObjectPropertyFloat.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectPropertyFloat
         * @static
         * @param {NFMsg.IObjectPropertyFloat} message ObjectPropertyFloat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectPropertyFloat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.PropertyFloat.encode(message.property_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectPropertyFloat message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectPropertyFloat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectPropertyFloat} ObjectPropertyFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectPropertyFloat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectPropertyFloat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.PropertyFloat.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectPropertyFloat;
    })();

    NFMsg.ObjectPropertyString = (function() {

        /**
         * Properties of an ObjectPropertyString.
         * @memberof NFMsg
         * @interface IObjectPropertyString
         * @property {NFMsg.IIdent|null} [player_id] ObjectPropertyString player_id
         * @property {Array.<NFMsg.IPropertyString>|null} [property_list] ObjectPropertyString property_list
         */

        /**
         * Constructs a new ObjectPropertyString.
         * @memberof NFMsg
         * @classdesc Represents an ObjectPropertyString.
         * @implements IObjectPropertyString
         * @constructor
         * @param {NFMsg.IObjectPropertyString=} [properties] Properties to set
         */
        function ObjectPropertyString(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectPropertyString player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectPropertyString
         * @instance
         */
        ObjectPropertyString.prototype.player_id = null;

        /**
         * ObjectPropertyString property_list.
         * @member {Array.<NFMsg.IPropertyString>} property_list
         * @memberof NFMsg.ObjectPropertyString
         * @instance
         */
        ObjectPropertyString.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectPropertyString instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectPropertyString
         * @static
         * @param {NFMsg.IObjectPropertyString=} [properties] Properties to set
         * @returns {NFMsg.ObjectPropertyString} ObjectPropertyString instance
         */
        ObjectPropertyString.create = function create(properties) {
            return new ObjectPropertyString(properties);
        };

        /**
         * Encodes the specified ObjectPropertyString message. Does not implicitly {@link NFMsg.ObjectPropertyString.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectPropertyString
         * @static
         * @param {NFMsg.IObjectPropertyString} message ObjectPropertyString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectPropertyString.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.PropertyString.encode(message.property_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectPropertyString message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectPropertyString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectPropertyString} ObjectPropertyString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectPropertyString.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectPropertyString();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.PropertyString.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectPropertyString;
    })();

    NFMsg.ObjectPropertyObject = (function() {

        /**
         * Properties of an ObjectPropertyObject.
         * @memberof NFMsg
         * @interface IObjectPropertyObject
         * @property {NFMsg.IIdent|null} [player_id] ObjectPropertyObject player_id
         * @property {Array.<NFMsg.IPropertyObject>|null} [property_list] ObjectPropertyObject property_list
         */

        /**
         * Constructs a new ObjectPropertyObject.
         * @memberof NFMsg
         * @classdesc Represents an ObjectPropertyObject.
         * @implements IObjectPropertyObject
         * @constructor
         * @param {NFMsg.IObjectPropertyObject=} [properties] Properties to set
         */
        function ObjectPropertyObject(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectPropertyObject player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectPropertyObject
         * @instance
         */
        ObjectPropertyObject.prototype.player_id = null;

        /**
         * ObjectPropertyObject property_list.
         * @member {Array.<NFMsg.IPropertyObject>} property_list
         * @memberof NFMsg.ObjectPropertyObject
         * @instance
         */
        ObjectPropertyObject.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectPropertyObject instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectPropertyObject
         * @static
         * @param {NFMsg.IObjectPropertyObject=} [properties] Properties to set
         * @returns {NFMsg.ObjectPropertyObject} ObjectPropertyObject instance
         */
        ObjectPropertyObject.create = function create(properties) {
            return new ObjectPropertyObject(properties);
        };

        /**
         * Encodes the specified ObjectPropertyObject message. Does not implicitly {@link NFMsg.ObjectPropertyObject.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectPropertyObject
         * @static
         * @param {NFMsg.IObjectPropertyObject} message ObjectPropertyObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectPropertyObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.PropertyObject.encode(message.property_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectPropertyObject message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectPropertyObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectPropertyObject} ObjectPropertyObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectPropertyObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectPropertyObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.PropertyObject.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectPropertyObject;
    })();

    NFMsg.ObjectPropertyVector2 = (function() {

        /**
         * Properties of an ObjectPropertyVector2.
         * @memberof NFMsg
         * @interface IObjectPropertyVector2
         * @property {NFMsg.IIdent|null} [player_id] ObjectPropertyVector2 player_id
         * @property {Array.<NFMsg.IPropertyVector2>|null} [property_list] ObjectPropertyVector2 property_list
         */

        /**
         * Constructs a new ObjectPropertyVector2.
         * @memberof NFMsg
         * @classdesc Represents an ObjectPropertyVector2.
         * @implements IObjectPropertyVector2
         * @constructor
         * @param {NFMsg.IObjectPropertyVector2=} [properties] Properties to set
         */
        function ObjectPropertyVector2(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectPropertyVector2 player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectPropertyVector2
         * @instance
         */
        ObjectPropertyVector2.prototype.player_id = null;

        /**
         * ObjectPropertyVector2 property_list.
         * @member {Array.<NFMsg.IPropertyVector2>} property_list
         * @memberof NFMsg.ObjectPropertyVector2
         * @instance
         */
        ObjectPropertyVector2.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectPropertyVector2 instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectPropertyVector2
         * @static
         * @param {NFMsg.IObjectPropertyVector2=} [properties] Properties to set
         * @returns {NFMsg.ObjectPropertyVector2} ObjectPropertyVector2 instance
         */
        ObjectPropertyVector2.create = function create(properties) {
            return new ObjectPropertyVector2(properties);
        };

        /**
         * Encodes the specified ObjectPropertyVector2 message. Does not implicitly {@link NFMsg.ObjectPropertyVector2.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectPropertyVector2
         * @static
         * @param {NFMsg.IObjectPropertyVector2} message ObjectPropertyVector2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectPropertyVector2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.PropertyVector2.encode(message.property_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectPropertyVector2 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectPropertyVector2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectPropertyVector2} ObjectPropertyVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectPropertyVector2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectPropertyVector2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.PropertyVector2.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectPropertyVector2;
    })();

    NFMsg.ObjectPropertyVector3 = (function() {

        /**
         * Properties of an ObjectPropertyVector3.
         * @memberof NFMsg
         * @interface IObjectPropertyVector3
         * @property {NFMsg.IIdent|null} [player_id] ObjectPropertyVector3 player_id
         * @property {Array.<NFMsg.IPropertyVector3>|null} [property_list] ObjectPropertyVector3 property_list
         */

        /**
         * Constructs a new ObjectPropertyVector3.
         * @memberof NFMsg
         * @classdesc Represents an ObjectPropertyVector3.
         * @implements IObjectPropertyVector3
         * @constructor
         * @param {NFMsg.IObjectPropertyVector3=} [properties] Properties to set
         */
        function ObjectPropertyVector3(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectPropertyVector3 player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectPropertyVector3
         * @instance
         */
        ObjectPropertyVector3.prototype.player_id = null;

        /**
         * ObjectPropertyVector3 property_list.
         * @member {Array.<NFMsg.IPropertyVector3>} property_list
         * @memberof NFMsg.ObjectPropertyVector3
         * @instance
         */
        ObjectPropertyVector3.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectPropertyVector3 instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectPropertyVector3
         * @static
         * @param {NFMsg.IObjectPropertyVector3=} [properties] Properties to set
         * @returns {NFMsg.ObjectPropertyVector3} ObjectPropertyVector3 instance
         */
        ObjectPropertyVector3.create = function create(properties) {
            return new ObjectPropertyVector3(properties);
        };

        /**
         * Encodes the specified ObjectPropertyVector3 message. Does not implicitly {@link NFMsg.ObjectPropertyVector3.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectPropertyVector3
         * @static
         * @param {NFMsg.IObjectPropertyVector3} message ObjectPropertyVector3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectPropertyVector3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.PropertyVector3.encode(message.property_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectPropertyVector3 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectPropertyVector3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectPropertyVector3} ObjectPropertyVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectPropertyVector3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectPropertyVector3();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.PropertyVector3.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectPropertyVector3;
    })();

    NFMsg.ObjectRecordInt = (function() {

        /**
         * Properties of an ObjectRecordInt.
         * @memberof NFMsg
         * @interface IObjectRecordInt
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordInt player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordInt record_name
         * @property {Array.<NFMsg.IRecordInt>|null} [property_list] ObjectRecordInt property_list
         */

        /**
         * Constructs a new ObjectRecordInt.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordInt.
         * @implements IObjectRecordInt
         * @constructor
         * @param {NFMsg.IObjectRecordInt=} [properties] Properties to set
         */
        function ObjectRecordInt(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordInt player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordInt
         * @instance
         */
        ObjectRecordInt.prototype.player_id = null;

        /**
         * ObjectRecordInt record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordInt
         * @instance
         */
        ObjectRecordInt.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordInt property_list.
         * @member {Array.<NFMsg.IRecordInt>} property_list
         * @memberof NFMsg.ObjectRecordInt
         * @instance
         */
        ObjectRecordInt.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectRecordInt instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordInt
         * @static
         * @param {NFMsg.IObjectRecordInt=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordInt} ObjectRecordInt instance
         */
        ObjectRecordInt.create = function create(properties) {
            return new ObjectRecordInt(properties);
        };

        /**
         * Encodes the specified ObjectRecordInt message. Does not implicitly {@link NFMsg.ObjectRecordInt.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordInt
         * @static
         * @param {NFMsg.IObjectRecordInt} message ObjectRecordInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordInt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.RecordInt.encode(message.property_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordInt message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordInt} ObjectRecordInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordInt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.RecordInt.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordInt;
    })();

    NFMsg.ObjectRecordFloat = (function() {

        /**
         * Properties of an ObjectRecordFloat.
         * @memberof NFMsg
         * @interface IObjectRecordFloat
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordFloat player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordFloat record_name
         * @property {Array.<NFMsg.IRecordFloat>|null} [property_list] ObjectRecordFloat property_list
         */

        /**
         * Constructs a new ObjectRecordFloat.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordFloat.
         * @implements IObjectRecordFloat
         * @constructor
         * @param {NFMsg.IObjectRecordFloat=} [properties] Properties to set
         */
        function ObjectRecordFloat(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordFloat player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordFloat
         * @instance
         */
        ObjectRecordFloat.prototype.player_id = null;

        /**
         * ObjectRecordFloat record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordFloat
         * @instance
         */
        ObjectRecordFloat.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordFloat property_list.
         * @member {Array.<NFMsg.IRecordFloat>} property_list
         * @memberof NFMsg.ObjectRecordFloat
         * @instance
         */
        ObjectRecordFloat.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectRecordFloat instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordFloat
         * @static
         * @param {NFMsg.IObjectRecordFloat=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordFloat} ObjectRecordFloat instance
         */
        ObjectRecordFloat.create = function create(properties) {
            return new ObjectRecordFloat(properties);
        };

        /**
         * Encodes the specified ObjectRecordFloat message. Does not implicitly {@link NFMsg.ObjectRecordFloat.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordFloat
         * @static
         * @param {NFMsg.IObjectRecordFloat} message ObjectRecordFloat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordFloat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.RecordFloat.encode(message.property_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordFloat message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordFloat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordFloat} ObjectRecordFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordFloat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordFloat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.RecordFloat.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordFloat;
    })();

    NFMsg.ObjectRecordString = (function() {

        /**
         * Properties of an ObjectRecordString.
         * @memberof NFMsg
         * @interface IObjectRecordString
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordString player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordString record_name
         * @property {Array.<NFMsg.IRecordString>|null} [property_list] ObjectRecordString property_list
         */

        /**
         * Constructs a new ObjectRecordString.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordString.
         * @implements IObjectRecordString
         * @constructor
         * @param {NFMsg.IObjectRecordString=} [properties] Properties to set
         */
        function ObjectRecordString(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordString player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordString
         * @instance
         */
        ObjectRecordString.prototype.player_id = null;

        /**
         * ObjectRecordString record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordString
         * @instance
         */
        ObjectRecordString.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordString property_list.
         * @member {Array.<NFMsg.IRecordString>} property_list
         * @memberof NFMsg.ObjectRecordString
         * @instance
         */
        ObjectRecordString.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectRecordString instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordString
         * @static
         * @param {NFMsg.IObjectRecordString=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordString} ObjectRecordString instance
         */
        ObjectRecordString.create = function create(properties) {
            return new ObjectRecordString(properties);
        };

        /**
         * Encodes the specified ObjectRecordString message. Does not implicitly {@link NFMsg.ObjectRecordString.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordString
         * @static
         * @param {NFMsg.IObjectRecordString} message ObjectRecordString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordString.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.RecordString.encode(message.property_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordString message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordString} ObjectRecordString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordString.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordString();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.RecordString.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordString;
    })();

    NFMsg.ObjectRecordObject = (function() {

        /**
         * Properties of an ObjectRecordObject.
         * @memberof NFMsg
         * @interface IObjectRecordObject
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordObject player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordObject record_name
         * @property {Array.<NFMsg.IRecordObject>|null} [property_list] ObjectRecordObject property_list
         */

        /**
         * Constructs a new ObjectRecordObject.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordObject.
         * @implements IObjectRecordObject
         * @constructor
         * @param {NFMsg.IObjectRecordObject=} [properties] Properties to set
         */
        function ObjectRecordObject(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordObject player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordObject
         * @instance
         */
        ObjectRecordObject.prototype.player_id = null;

        /**
         * ObjectRecordObject record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordObject
         * @instance
         */
        ObjectRecordObject.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordObject property_list.
         * @member {Array.<NFMsg.IRecordObject>} property_list
         * @memberof NFMsg.ObjectRecordObject
         * @instance
         */
        ObjectRecordObject.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectRecordObject instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordObject
         * @static
         * @param {NFMsg.IObjectRecordObject=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordObject} ObjectRecordObject instance
         */
        ObjectRecordObject.create = function create(properties) {
            return new ObjectRecordObject(properties);
        };

        /**
         * Encodes the specified ObjectRecordObject message. Does not implicitly {@link NFMsg.ObjectRecordObject.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordObject
         * @static
         * @param {NFMsg.IObjectRecordObject} message ObjectRecordObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.RecordObject.encode(message.property_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordObject message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordObject} ObjectRecordObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.RecordObject.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordObject;
    })();

    NFMsg.ObjectRecordVector2 = (function() {

        /**
         * Properties of an ObjectRecordVector2.
         * @memberof NFMsg
         * @interface IObjectRecordVector2
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordVector2 player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordVector2 record_name
         * @property {Array.<NFMsg.IRecordVector2>|null} [property_list] ObjectRecordVector2 property_list
         */

        /**
         * Constructs a new ObjectRecordVector2.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordVector2.
         * @implements IObjectRecordVector2
         * @constructor
         * @param {NFMsg.IObjectRecordVector2=} [properties] Properties to set
         */
        function ObjectRecordVector2(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordVector2 player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordVector2
         * @instance
         */
        ObjectRecordVector2.prototype.player_id = null;

        /**
         * ObjectRecordVector2 record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordVector2
         * @instance
         */
        ObjectRecordVector2.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordVector2 property_list.
         * @member {Array.<NFMsg.IRecordVector2>} property_list
         * @memberof NFMsg.ObjectRecordVector2
         * @instance
         */
        ObjectRecordVector2.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectRecordVector2 instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordVector2
         * @static
         * @param {NFMsg.IObjectRecordVector2=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordVector2} ObjectRecordVector2 instance
         */
        ObjectRecordVector2.create = function create(properties) {
            return new ObjectRecordVector2(properties);
        };

        /**
         * Encodes the specified ObjectRecordVector2 message. Does not implicitly {@link NFMsg.ObjectRecordVector2.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordVector2
         * @static
         * @param {NFMsg.IObjectRecordVector2} message ObjectRecordVector2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordVector2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.RecordVector2.encode(message.property_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordVector2 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordVector2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordVector2} ObjectRecordVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordVector2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordVector2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.RecordVector2.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordVector2;
    })();

    NFMsg.ObjectRecordVector3 = (function() {

        /**
         * Properties of an ObjectRecordVector3.
         * @memberof NFMsg
         * @interface IObjectRecordVector3
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordVector3 player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordVector3 record_name
         * @property {Array.<NFMsg.IRecordVector3>|null} [property_list] ObjectRecordVector3 property_list
         */

        /**
         * Constructs a new ObjectRecordVector3.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordVector3.
         * @implements IObjectRecordVector3
         * @constructor
         * @param {NFMsg.IObjectRecordVector3=} [properties] Properties to set
         */
        function ObjectRecordVector3(properties) {
            this.property_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordVector3 player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordVector3
         * @instance
         */
        ObjectRecordVector3.prototype.player_id = null;

        /**
         * ObjectRecordVector3 record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordVector3
         * @instance
         */
        ObjectRecordVector3.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordVector3 property_list.
         * @member {Array.<NFMsg.IRecordVector3>} property_list
         * @memberof NFMsg.ObjectRecordVector3
         * @instance
         */
        ObjectRecordVector3.prototype.property_list = $util.emptyArray;

        /**
         * Creates a new ObjectRecordVector3 instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordVector3
         * @static
         * @param {NFMsg.IObjectRecordVector3=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordVector3} ObjectRecordVector3 instance
         */
        ObjectRecordVector3.create = function create(properties) {
            return new ObjectRecordVector3(properties);
        };

        /**
         * Encodes the specified ObjectRecordVector3 message. Does not implicitly {@link NFMsg.ObjectRecordVector3.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordVector3
         * @static
         * @param {NFMsg.IObjectRecordVector3} message ObjectRecordVector3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordVector3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.property_list != null && message.property_list.length)
                for (var i = 0; i < message.property_list.length; ++i)
                    $root.NFMsg.RecordVector3.encode(message.property_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordVector3 message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordVector3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordVector3} ObjectRecordVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordVector3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordVector3();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.property_list && message.property_list.length))
                        message.property_list = [];
                    message.property_list.push($root.NFMsg.RecordVector3.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordVector3;
    })();

    NFMsg.ObjectRecordSwap = (function() {

        /**
         * Properties of an ObjectRecordSwap.
         * @memberof NFMsg
         * @interface IObjectRecordSwap
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordSwap player_id
         * @property {Uint8Array|null} [origin_record_name] ObjectRecordSwap origin_record_name
         * @property {Uint8Array|null} [target_record_name] ObjectRecordSwap target_record_name
         * @property {number|null} [row_origin] ObjectRecordSwap row_origin
         * @property {number|null} [row_target] ObjectRecordSwap row_target
         */

        /**
         * Constructs a new ObjectRecordSwap.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordSwap.
         * @implements IObjectRecordSwap
         * @constructor
         * @param {NFMsg.IObjectRecordSwap=} [properties] Properties to set
         */
        function ObjectRecordSwap(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordSwap player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordSwap
         * @instance
         */
        ObjectRecordSwap.prototype.player_id = null;

        /**
         * ObjectRecordSwap origin_record_name.
         * @member {Uint8Array} origin_record_name
         * @memberof NFMsg.ObjectRecordSwap
         * @instance
         */
        ObjectRecordSwap.prototype.origin_record_name = $util.newBuffer([]);

        /**
         * ObjectRecordSwap target_record_name.
         * @member {Uint8Array} target_record_name
         * @memberof NFMsg.ObjectRecordSwap
         * @instance
         */
        ObjectRecordSwap.prototype.target_record_name = $util.newBuffer([]);

        /**
         * ObjectRecordSwap row_origin.
         * @member {number} row_origin
         * @memberof NFMsg.ObjectRecordSwap
         * @instance
         */
        ObjectRecordSwap.prototype.row_origin = 0;

        /**
         * ObjectRecordSwap row_target.
         * @member {number} row_target
         * @memberof NFMsg.ObjectRecordSwap
         * @instance
         */
        ObjectRecordSwap.prototype.row_target = 0;

        /**
         * Creates a new ObjectRecordSwap instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordSwap
         * @static
         * @param {NFMsg.IObjectRecordSwap=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordSwap} ObjectRecordSwap instance
         */
        ObjectRecordSwap.create = function create(properties) {
            return new ObjectRecordSwap(properties);
        };

        /**
         * Encodes the specified ObjectRecordSwap message. Does not implicitly {@link NFMsg.ObjectRecordSwap.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordSwap
         * @static
         * @param {NFMsg.IObjectRecordSwap} message ObjectRecordSwap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordSwap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.origin_record_name != null && message.hasOwnProperty("origin_record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.origin_record_name);
            if (message.target_record_name != null && message.hasOwnProperty("target_record_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.target_record_name);
            if (message.row_origin != null && message.hasOwnProperty("row_origin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.row_origin);
            if (message.row_target != null && message.hasOwnProperty("row_target"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.row_target);
            return writer;
        };

        /**
         * Decodes an ObjectRecordSwap message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordSwap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordSwap} ObjectRecordSwap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordSwap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordSwap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.origin_record_name = reader.bytes();
                    break;
                case 3:
                    message.target_record_name = reader.bytes();
                    break;
                case 4:
                    message.row_origin = reader.int32();
                    break;
                case 5:
                    message.row_target = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordSwap;
    })();

    NFMsg.ObjectRecordAddRow = (function() {

        /**
         * Properties of an ObjectRecordAddRow.
         * @memberof NFMsg
         * @interface IObjectRecordAddRow
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordAddRow player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordAddRow record_name
         * @property {Array.<NFMsg.IRecordAddRowStruct>|null} [row_data] ObjectRecordAddRow row_data
         */

        /**
         * Constructs a new ObjectRecordAddRow.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordAddRow.
         * @implements IObjectRecordAddRow
         * @constructor
         * @param {NFMsg.IObjectRecordAddRow=} [properties] Properties to set
         */
        function ObjectRecordAddRow(properties) {
            this.row_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordAddRow player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordAddRow
         * @instance
         */
        ObjectRecordAddRow.prototype.player_id = null;

        /**
         * ObjectRecordAddRow record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordAddRow
         * @instance
         */
        ObjectRecordAddRow.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordAddRow row_data.
         * @member {Array.<NFMsg.IRecordAddRowStruct>} row_data
         * @memberof NFMsg.ObjectRecordAddRow
         * @instance
         */
        ObjectRecordAddRow.prototype.row_data = $util.emptyArray;

        /**
         * Creates a new ObjectRecordAddRow instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordAddRow
         * @static
         * @param {NFMsg.IObjectRecordAddRow=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordAddRow} ObjectRecordAddRow instance
         */
        ObjectRecordAddRow.create = function create(properties) {
            return new ObjectRecordAddRow(properties);
        };

        /**
         * Encodes the specified ObjectRecordAddRow message. Does not implicitly {@link NFMsg.ObjectRecordAddRow.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordAddRow
         * @static
         * @param {NFMsg.IObjectRecordAddRow} message ObjectRecordAddRow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordAddRow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.row_data != null && message.row_data.length)
                for (var i = 0; i < message.row_data.length; ++i)
                    $root.NFMsg.RecordAddRowStruct.encode(message.row_data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordAddRow message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordAddRow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordAddRow} ObjectRecordAddRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordAddRow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordAddRow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.row_data && message.row_data.length))
                        message.row_data = [];
                    message.row_data.push($root.NFMsg.RecordAddRowStruct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordAddRow;
    })();

    NFMsg.ObjectRecordRemove = (function() {

        /**
         * Properties of an ObjectRecordRemove.
         * @memberof NFMsg
         * @interface IObjectRecordRemove
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordRemove player_id
         * @property {Uint8Array|null} [record_name] ObjectRecordRemove record_name
         * @property {Array.<number>|null} [remove_row] ObjectRecordRemove remove_row
         */

        /**
         * Constructs a new ObjectRecordRemove.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordRemove.
         * @implements IObjectRecordRemove
         * @constructor
         * @param {NFMsg.IObjectRecordRemove=} [properties] Properties to set
         */
        function ObjectRecordRemove(properties) {
            this.remove_row = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordRemove player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordRemove
         * @instance
         */
        ObjectRecordRemove.prototype.player_id = null;

        /**
         * ObjectRecordRemove record_name.
         * @member {Uint8Array} record_name
         * @memberof NFMsg.ObjectRecordRemove
         * @instance
         */
        ObjectRecordRemove.prototype.record_name = $util.newBuffer([]);

        /**
         * ObjectRecordRemove remove_row.
         * @member {Array.<number>} remove_row
         * @memberof NFMsg.ObjectRecordRemove
         * @instance
         */
        ObjectRecordRemove.prototype.remove_row = $util.emptyArray;

        /**
         * Creates a new ObjectRecordRemove instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordRemove
         * @static
         * @param {NFMsg.IObjectRecordRemove=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordRemove} ObjectRecordRemove instance
         */
        ObjectRecordRemove.create = function create(properties) {
            return new ObjectRecordRemove(properties);
        };

        /**
         * Encodes the specified ObjectRecordRemove message. Does not implicitly {@link NFMsg.ObjectRecordRemove.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordRemove
         * @static
         * @param {NFMsg.IObjectRecordRemove} message ObjectRecordRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordRemove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.record_name);
            if (message.remove_row != null && message.remove_row.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.remove_row.length; ++i)
                    writer.int32(message.remove_row[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes an ObjectRecordRemove message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordRemove} ObjectRecordRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordRemove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordRemove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.record_name = reader.bytes();
                    break;
                case 3:
                    if (!(message.remove_row && message.remove_row.length))
                        message.remove_row = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.remove_row.push(reader.int32());
                    } else
                        message.remove_row.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordRemove;
    })();

    NFMsg.ObjectPropertyList = (function() {

        /**
         * Properties of an ObjectPropertyList.
         * @memberof NFMsg
         * @interface IObjectPropertyList
         * @property {NFMsg.IIdent|null} [player_id] ObjectPropertyList player_id
         * @property {Array.<NFMsg.IPropertyInt>|null} [property_int_list] ObjectPropertyList property_int_list
         * @property {Array.<NFMsg.IPropertyFloat>|null} [property_float_list] ObjectPropertyList property_float_list
         * @property {Array.<NFMsg.IPropertyString>|null} [property_string_list] ObjectPropertyList property_string_list
         * @property {Array.<NFMsg.IPropertyObject>|null} [property_object_list] ObjectPropertyList property_object_list
         * @property {Array.<NFMsg.IPropertyVector2>|null} [property_vector2_list] ObjectPropertyList property_vector2_list
         * @property {Array.<NFMsg.IPropertyVector3>|null} [property_vector3_list] ObjectPropertyList property_vector3_list
         */

        /**
         * Constructs a new ObjectPropertyList.
         * @memberof NFMsg
         * @classdesc Represents an ObjectPropertyList.
         * @implements IObjectPropertyList
         * @constructor
         * @param {NFMsg.IObjectPropertyList=} [properties] Properties to set
         */
        function ObjectPropertyList(properties) {
            this.property_int_list = [];
            this.property_float_list = [];
            this.property_string_list = [];
            this.property_object_list = [];
            this.property_vector2_list = [];
            this.property_vector3_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectPropertyList player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectPropertyList
         * @instance
         */
        ObjectPropertyList.prototype.player_id = null;

        /**
         * ObjectPropertyList property_int_list.
         * @member {Array.<NFMsg.IPropertyInt>} property_int_list
         * @memberof NFMsg.ObjectPropertyList
         * @instance
         */
        ObjectPropertyList.prototype.property_int_list = $util.emptyArray;

        /**
         * ObjectPropertyList property_float_list.
         * @member {Array.<NFMsg.IPropertyFloat>} property_float_list
         * @memberof NFMsg.ObjectPropertyList
         * @instance
         */
        ObjectPropertyList.prototype.property_float_list = $util.emptyArray;

        /**
         * ObjectPropertyList property_string_list.
         * @member {Array.<NFMsg.IPropertyString>} property_string_list
         * @memberof NFMsg.ObjectPropertyList
         * @instance
         */
        ObjectPropertyList.prototype.property_string_list = $util.emptyArray;

        /**
         * ObjectPropertyList property_object_list.
         * @member {Array.<NFMsg.IPropertyObject>} property_object_list
         * @memberof NFMsg.ObjectPropertyList
         * @instance
         */
        ObjectPropertyList.prototype.property_object_list = $util.emptyArray;

        /**
         * ObjectPropertyList property_vector2_list.
         * @member {Array.<NFMsg.IPropertyVector2>} property_vector2_list
         * @memberof NFMsg.ObjectPropertyList
         * @instance
         */
        ObjectPropertyList.prototype.property_vector2_list = $util.emptyArray;

        /**
         * ObjectPropertyList property_vector3_list.
         * @member {Array.<NFMsg.IPropertyVector3>} property_vector3_list
         * @memberof NFMsg.ObjectPropertyList
         * @instance
         */
        ObjectPropertyList.prototype.property_vector3_list = $util.emptyArray;

        /**
         * Creates a new ObjectPropertyList instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectPropertyList
         * @static
         * @param {NFMsg.IObjectPropertyList=} [properties] Properties to set
         * @returns {NFMsg.ObjectPropertyList} ObjectPropertyList instance
         */
        ObjectPropertyList.create = function create(properties) {
            return new ObjectPropertyList(properties);
        };

        /**
         * Encodes the specified ObjectPropertyList message. Does not implicitly {@link NFMsg.ObjectPropertyList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectPropertyList
         * @static
         * @param {NFMsg.IObjectPropertyList} message ObjectPropertyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectPropertyList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property_int_list != null && message.property_int_list.length)
                for (var i = 0; i < message.property_int_list.length; ++i)
                    $root.NFMsg.PropertyInt.encode(message.property_int_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.property_float_list != null && message.property_float_list.length)
                for (var i = 0; i < message.property_float_list.length; ++i)
                    $root.NFMsg.PropertyFloat.encode(message.property_float_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.property_string_list != null && message.property_string_list.length)
                for (var i = 0; i < message.property_string_list.length; ++i)
                    $root.NFMsg.PropertyString.encode(message.property_string_list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.property_object_list != null && message.property_object_list.length)
                for (var i = 0; i < message.property_object_list.length; ++i)
                    $root.NFMsg.PropertyObject.encode(message.property_object_list[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.property_vector2_list != null && message.property_vector2_list.length)
                for (var i = 0; i < message.property_vector2_list.length; ++i)
                    $root.NFMsg.PropertyVector2.encode(message.property_vector2_list[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.property_vector3_list != null && message.property_vector3_list.length)
                for (var i = 0; i < message.property_vector3_list.length; ++i)
                    $root.NFMsg.PropertyVector3.encode(message.property_vector3_list[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectPropertyList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectPropertyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectPropertyList} ObjectPropertyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectPropertyList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectPropertyList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.property_int_list && message.property_int_list.length))
                        message.property_int_list = [];
                    message.property_int_list.push($root.NFMsg.PropertyInt.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.property_float_list && message.property_float_list.length))
                        message.property_float_list = [];
                    message.property_float_list.push($root.NFMsg.PropertyFloat.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.property_string_list && message.property_string_list.length))
                        message.property_string_list = [];
                    message.property_string_list.push($root.NFMsg.PropertyString.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.property_object_list && message.property_object_list.length))
                        message.property_object_list = [];
                    message.property_object_list.push($root.NFMsg.PropertyObject.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.property_vector2_list && message.property_vector2_list.length))
                        message.property_vector2_list = [];
                    message.property_vector2_list.push($root.NFMsg.PropertyVector2.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.property_vector3_list && message.property_vector3_list.length))
                        message.property_vector3_list = [];
                    message.property_vector3_list.push($root.NFMsg.PropertyVector3.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectPropertyList;
    })();

    NFMsg.MultiObjectPropertyList = (function() {

        /**
         * Properties of a MultiObjectPropertyList.
         * @memberof NFMsg
         * @interface IMultiObjectPropertyList
         * @property {Array.<NFMsg.IObjectPropertyList>|null} [multi_player_property] MultiObjectPropertyList multi_player_property
         */

        /**
         * Constructs a new MultiObjectPropertyList.
         * @memberof NFMsg
         * @classdesc Represents a MultiObjectPropertyList.
         * @implements IMultiObjectPropertyList
         * @constructor
         * @param {NFMsg.IMultiObjectPropertyList=} [properties] Properties to set
         */
        function MultiObjectPropertyList(properties) {
            this.multi_player_property = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultiObjectPropertyList multi_player_property.
         * @member {Array.<NFMsg.IObjectPropertyList>} multi_player_property
         * @memberof NFMsg.MultiObjectPropertyList
         * @instance
         */
        MultiObjectPropertyList.prototype.multi_player_property = $util.emptyArray;

        /**
         * Creates a new MultiObjectPropertyList instance using the specified properties.
         * @function create
         * @memberof NFMsg.MultiObjectPropertyList
         * @static
         * @param {NFMsg.IMultiObjectPropertyList=} [properties] Properties to set
         * @returns {NFMsg.MultiObjectPropertyList} MultiObjectPropertyList instance
         */
        MultiObjectPropertyList.create = function create(properties) {
            return new MultiObjectPropertyList(properties);
        };

        /**
         * Encodes the specified MultiObjectPropertyList message. Does not implicitly {@link NFMsg.MultiObjectPropertyList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.MultiObjectPropertyList
         * @static
         * @param {NFMsg.IMultiObjectPropertyList} message MultiObjectPropertyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiObjectPropertyList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.multi_player_property != null && message.multi_player_property.length)
                for (var i = 0; i < message.multi_player_property.length; ++i)
                    $root.NFMsg.ObjectPropertyList.encode(message.multi_player_property[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MultiObjectPropertyList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.MultiObjectPropertyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.MultiObjectPropertyList} MultiObjectPropertyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiObjectPropertyList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.MultiObjectPropertyList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.multi_player_property && message.multi_player_property.length))
                        message.multi_player_property = [];
                    message.multi_player_property.push($root.NFMsg.ObjectPropertyList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MultiObjectPropertyList;
    })();

    NFMsg.ObjectRecordList = (function() {

        /**
         * Properties of an ObjectRecordList.
         * @memberof NFMsg
         * @interface IObjectRecordList
         * @property {NFMsg.IIdent|null} [player_id] ObjectRecordList player_id
         * @property {Array.<NFMsg.IObjectRecordBase>|null} [record_list] ObjectRecordList record_list
         */

        /**
         * Constructs a new ObjectRecordList.
         * @memberof NFMsg
         * @classdesc Represents an ObjectRecordList.
         * @implements IObjectRecordList
         * @constructor
         * @param {NFMsg.IObjectRecordList=} [properties] Properties to set
         */
        function ObjectRecordList(properties) {
            this.record_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectRecordList player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.ObjectRecordList
         * @instance
         */
        ObjectRecordList.prototype.player_id = null;

        /**
         * ObjectRecordList record_list.
         * @member {Array.<NFMsg.IObjectRecordBase>} record_list
         * @memberof NFMsg.ObjectRecordList
         * @instance
         */
        ObjectRecordList.prototype.record_list = $util.emptyArray;

        /**
         * Creates a new ObjectRecordList instance using the specified properties.
         * @function create
         * @memberof NFMsg.ObjectRecordList
         * @static
         * @param {NFMsg.IObjectRecordList=} [properties] Properties to set
         * @returns {NFMsg.ObjectRecordList} ObjectRecordList instance
         */
        ObjectRecordList.create = function create(properties) {
            return new ObjectRecordList(properties);
        };

        /**
         * Encodes the specified ObjectRecordList message. Does not implicitly {@link NFMsg.ObjectRecordList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ObjectRecordList
         * @static
         * @param {NFMsg.IObjectRecordList} message ObjectRecordList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectRecordList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.record_list != null && message.record_list.length)
                for (var i = 0; i < message.record_list.length; ++i)
                    $root.NFMsg.ObjectRecordBase.encode(message.record_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ObjectRecordList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ObjectRecordList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ObjectRecordList} ObjectRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectRecordList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ObjectRecordList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.record_list && message.record_list.length))
                        message.record_list = [];
                    message.record_list.push($root.NFMsg.ObjectRecordBase.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ObjectRecordList;
    })();

    NFMsg.MultiObjectRecordList = (function() {

        /**
         * Properties of a MultiObjectRecordList.
         * @memberof NFMsg
         * @interface IMultiObjectRecordList
         * @property {Array.<NFMsg.IObjectRecordList>|null} [multi_player_record] MultiObjectRecordList multi_player_record
         */

        /**
         * Constructs a new MultiObjectRecordList.
         * @memberof NFMsg
         * @classdesc Represents a MultiObjectRecordList.
         * @implements IMultiObjectRecordList
         * @constructor
         * @param {NFMsg.IMultiObjectRecordList=} [properties] Properties to set
         */
        function MultiObjectRecordList(properties) {
            this.multi_player_record = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultiObjectRecordList multi_player_record.
         * @member {Array.<NFMsg.IObjectRecordList>} multi_player_record
         * @memberof NFMsg.MultiObjectRecordList
         * @instance
         */
        MultiObjectRecordList.prototype.multi_player_record = $util.emptyArray;

        /**
         * Creates a new MultiObjectRecordList instance using the specified properties.
         * @function create
         * @memberof NFMsg.MultiObjectRecordList
         * @static
         * @param {NFMsg.IMultiObjectRecordList=} [properties] Properties to set
         * @returns {NFMsg.MultiObjectRecordList} MultiObjectRecordList instance
         */
        MultiObjectRecordList.create = function create(properties) {
            return new MultiObjectRecordList(properties);
        };

        /**
         * Encodes the specified MultiObjectRecordList message. Does not implicitly {@link NFMsg.MultiObjectRecordList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.MultiObjectRecordList
         * @static
         * @param {NFMsg.IMultiObjectRecordList} message MultiObjectRecordList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiObjectRecordList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.multi_player_record != null && message.multi_player_record.length)
                for (var i = 0; i < message.multi_player_record.length; ++i)
                    $root.NFMsg.ObjectRecordList.encode(message.multi_player_record[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MultiObjectRecordList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.MultiObjectRecordList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.MultiObjectRecordList} MultiObjectRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiObjectRecordList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.MultiObjectRecordList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.multi_player_record && message.multi_player_record.length))
                        message.multi_player_record = [];
                    message.multi_player_record.push($root.NFMsg.ObjectRecordList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MultiObjectRecordList;
    })();

    NFMsg.MsgBase = (function() {

        /**
         * Properties of a MsgBase.
         * @memberof NFMsg
         * @interface IMsgBase
         * @property {NFMsg.IIdent|null} [player_id] MsgBase player_id
         * @property {Uint8Array|null} [msg_data] MsgBase msg_data
         * @property {Array.<NFMsg.IIdent>|null} [player_Client_list] MsgBase player_Client_list
         * @property {NFMsg.IIdent|null} [hash_ident] MsgBase hash_ident
         */

        /**
         * Constructs a new MsgBase.
         * @memberof NFMsg
         * @classdesc Represents a MsgBase.
         * @implements IMsgBase
         * @constructor
         * @param {NFMsg.IMsgBase=} [properties] Properties to set
         */
        function MsgBase(properties) {
            this.player_Client_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBase player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.MsgBase
         * @instance
         */
        MsgBase.prototype.player_id = null;

        /**
         * MsgBase msg_data.
         * @member {Uint8Array} msg_data
         * @memberof NFMsg.MsgBase
         * @instance
         */
        MsgBase.prototype.msg_data = $util.newBuffer([]);

        /**
         * MsgBase player_Client_list.
         * @member {Array.<NFMsg.IIdent>} player_Client_list
         * @memberof NFMsg.MsgBase
         * @instance
         */
        MsgBase.prototype.player_Client_list = $util.emptyArray;

        /**
         * MsgBase hash_ident.
         * @member {NFMsg.IIdent|null|undefined} hash_ident
         * @memberof NFMsg.MsgBase
         * @instance
         */
        MsgBase.prototype.hash_ident = null;

        /**
         * Creates a new MsgBase instance using the specified properties.
         * @function create
         * @memberof NFMsg.MsgBase
         * @static
         * @param {NFMsg.IMsgBase=} [properties] Properties to set
         * @returns {NFMsg.MsgBase} MsgBase instance
         */
        MsgBase.create = function create(properties) {
            return new MsgBase(properties);
        };

        /**
         * Encodes the specified MsgBase message. Does not implicitly {@link NFMsg.MsgBase.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.MsgBase
         * @static
         * @param {NFMsg.IMsgBase} message MsgBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.msg_data != null && message.hasOwnProperty("msg_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.msg_data);
            if (message.player_Client_list != null && message.player_Client_list.length)
                for (var i = 0; i < message.player_Client_list.length; ++i)
                    $root.NFMsg.Ident.encode(message.player_Client_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.hash_ident != null && message.hasOwnProperty("hash_ident"))
                $root.NFMsg.Ident.encode(message.hash_ident, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MsgBase message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.MsgBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.MsgBase} MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.MsgBase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.msg_data = reader.bytes();
                    break;
                case 3:
                    if (!(message.player_Client_list && message.player_Client_list.length))
                        message.player_Client_list = [];
                    message.player_Client_list.push($root.NFMsg.Ident.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash_ident = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MsgBase;
    })();

    NFMsg.ReqCommand = (function() {

        /**
         * Properties of a ReqCommand.
         * @memberof NFMsg
         * @interface IReqCommand
         * @property {NFMsg.IIdent|null} [control_id] ReqCommand control_id
         * @property {NFMsg.ReqCommand.EGameCommandType|null} [command_id] ReqCommand command_id
         * @property {Uint8Array|null} [command_str_value] ReqCommand command_str_value
         * @property {number|Long|null} [command_value_int] ReqCommand command_value_int
         * @property {number|null} [command_value_float] ReqCommand command_value_float
         * @property {Uint8Array|null} [command_value_str] ReqCommand command_value_str
         * @property {NFMsg.IIdent|null} [command_value_object] ReqCommand command_value_object
         * @property {number|null} [row] ReqCommand row
         * @property {number|null} [col] ReqCommand col
         */

        /**
         * Constructs a new ReqCommand.
         * @memberof NFMsg
         * @classdesc Represents a ReqCommand.
         * @implements IReqCommand
         * @constructor
         * @param {NFMsg.IReqCommand=} [properties] Properties to set
         */
        function ReqCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqCommand control_id.
         * @member {NFMsg.IIdent|null|undefined} control_id
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.control_id = null;

        /**
         * ReqCommand command_id.
         * @member {NFMsg.ReqCommand.EGameCommandType} command_id
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.command_id = 0;

        /**
         * ReqCommand command_str_value.
         * @member {Uint8Array} command_str_value
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.command_str_value = $util.newBuffer([]);

        /**
         * ReqCommand command_value_int.
         * @member {number|Long} command_value_int
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.command_value_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqCommand command_value_float.
         * @member {number} command_value_float
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.command_value_float = 0;

        /**
         * ReqCommand command_value_str.
         * @member {Uint8Array} command_value_str
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.command_value_str = $util.newBuffer([]);

        /**
         * ReqCommand command_value_object.
         * @member {NFMsg.IIdent|null|undefined} command_value_object
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.command_value_object = null;

        /**
         * ReqCommand row.
         * @member {number} row
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.row = 0;

        /**
         * ReqCommand col.
         * @member {number} col
         * @memberof NFMsg.ReqCommand
         * @instance
         */
        ReqCommand.prototype.col = 0;

        /**
         * Creates a new ReqCommand instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqCommand
         * @static
         * @param {NFMsg.IReqCommand=} [properties] Properties to set
         * @returns {NFMsg.ReqCommand} ReqCommand instance
         */
        ReqCommand.create = function create(properties) {
            return new ReqCommand(properties);
        };

        /**
         * Encodes the specified ReqCommand message. Does not implicitly {@link NFMsg.ReqCommand.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqCommand
         * @static
         * @param {NFMsg.IReqCommand} message ReqCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.control_id != null && message.hasOwnProperty("control_id"))
                $root.NFMsg.Ident.encode(message.control_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.command_id != null && message.hasOwnProperty("command_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.command_id);
            if (message.command_str_value != null && message.hasOwnProperty("command_str_value"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.command_str_value);
            if (message.command_value_int != null && message.hasOwnProperty("command_value_int"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.command_value_int);
            if (message.command_value_float != null && message.hasOwnProperty("command_value_float"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.command_value_float);
            if (message.command_value_str != null && message.hasOwnProperty("command_value_str"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.command_value_str);
            if (message.command_value_object != null && message.hasOwnProperty("command_value_object"))
                $root.NFMsg.Ident.encode(message.command_value_object, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.row);
            if (message.col != null && message.hasOwnProperty("col"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.col);
            return writer;
        };

        /**
         * Decodes a ReqCommand message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqCommand} ReqCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.control_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.command_id = reader.int32();
                    break;
                case 3:
                    message.command_str_value = reader.bytes();
                    break;
                case 4:
                    message.command_value_int = reader.int64();
                    break;
                case 5:
                    message.command_value_float = reader.double();
                    break;
                case 6:
                    message.command_value_str = reader.bytes();
                    break;
                case 7:
                    message.command_value_object = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.row = reader.int32();
                    break;
                case 9:
                    message.col = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EGameCommandType enum.
         * @name NFMsg.ReqCommand.EGameCommandType
         * @enum {string}
         * @property {number} EGCT_MODIY_PROPERTY=0 EGCT_MODIY_PROPERTY value
         * @property {number} EGCT_MODIY_ITEM=1 EGCT_MODIY_ITEM value
         * @property {number} EGCT_CREATE_OBJECT=2 EGCT_CREATE_OBJECT value
         * @property {number} EGCT_ADD_ROLE_EXP=3 EGCT_ADD_ROLE_EXP value
         */
        ReqCommand.EGameCommandType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EGCT_MODIY_PROPERTY"] = 0;
            values[valuesById[1] = "EGCT_MODIY_ITEM"] = 1;
            values[valuesById[2] = "EGCT_CREATE_OBJECT"] = 2;
            values[valuesById[3] = "EGCT_ADD_ROLE_EXP"] = 3;
            return values;
        })();

        return ReqCommand;
    })();

    NFMsg.TeamInfo = (function() {

        /**
         * Properties of a TeamInfo.
         * @memberof NFMsg
         * @interface ITeamInfo
         * @property {NFMsg.IIdent|null} [team_id] TeamInfo team_id
         * @property {NFMsg.IIdent|null} [captain_id] TeamInfo captain_id
         * @property {Array.<NFMsg.ITeammemberInfo>|null} [teammemberInfo] TeamInfo teammemberInfo
         */

        /**
         * Constructs a new TeamInfo.
         * @memberof NFMsg
         * @classdesc 组队/////////////////////////////////////////////////////////////////////////////////////
         * @implements ITeamInfo
         * @constructor
         * @param {NFMsg.ITeamInfo=} [properties] Properties to set
         */
        function TeamInfo(properties) {
            this.teammemberInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamInfo team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.TeamInfo
         * @instance
         */
        TeamInfo.prototype.team_id = null;

        /**
         * TeamInfo captain_id.
         * @member {NFMsg.IIdent|null|undefined} captain_id
         * @memberof NFMsg.TeamInfo
         * @instance
         */
        TeamInfo.prototype.captain_id = null;

        /**
         * TeamInfo teammemberInfo.
         * @member {Array.<NFMsg.ITeammemberInfo>} teammemberInfo
         * @memberof NFMsg.TeamInfo
         * @instance
         */
        TeamInfo.prototype.teammemberInfo = $util.emptyArray;

        /**
         * Creates a new TeamInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.TeamInfo
         * @static
         * @param {NFMsg.ITeamInfo=} [properties] Properties to set
         * @returns {NFMsg.TeamInfo} TeamInfo instance
         */
        TeamInfo.create = function create(properties) {
            return new TeamInfo(properties);
        };

        /**
         * Encodes the specified TeamInfo message. Does not implicitly {@link NFMsg.TeamInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.TeamInfo
         * @static
         * @param {NFMsg.ITeamInfo} message TeamInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.captain_id != null && message.hasOwnProperty("captain_id"))
                $root.NFMsg.Ident.encode(message.captain_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.teammemberInfo != null && message.teammemberInfo.length)
                for (var i = 0; i < message.teammemberInfo.length; ++i)
                    $root.NFMsg.TeammemberInfo.encode(message.teammemberInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TeamInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.TeamInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.TeamInfo} TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.TeamInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.captain_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.teammemberInfo && message.teammemberInfo.length))
                        message.teammemberInfo = [];
                    message.teammemberInfo.push($root.NFMsg.TeammemberInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TeamInfo;
    })();

    NFMsg.TeammemberInfo = (function() {

        /**
         * Properties of a TeammemberInfo.
         * @memberof NFMsg
         * @interface ITeammemberInfo
         * @property {NFMsg.IIdent|null} [player_id] TeammemberInfo player_id
         * @property {string|null} [name] TeammemberInfo name
         * @property {number|null} [nLevel] TeammemberInfo nLevel
         * @property {number|null} [job] TeammemberInfo job
         * @property {string|null} [HeadIcon] TeammemberInfo HeadIcon
         */

        /**
         * Constructs a new TeammemberInfo.
         * @memberof NFMsg
         * @classdesc Represents a TeammemberInfo.
         * @implements ITeammemberInfo
         * @constructor
         * @param {NFMsg.ITeammemberInfo=} [properties] Properties to set
         */
        function TeammemberInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeammemberInfo player_id.
         * @member {NFMsg.IIdent|null|undefined} player_id
         * @memberof NFMsg.TeammemberInfo
         * @instance
         */
        TeammemberInfo.prototype.player_id = null;

        /**
         * TeammemberInfo name.
         * @member {string} name
         * @memberof NFMsg.TeammemberInfo
         * @instance
         */
        TeammemberInfo.prototype.name = "";

        /**
         * TeammemberInfo nLevel.
         * @member {number} nLevel
         * @memberof NFMsg.TeammemberInfo
         * @instance
         */
        TeammemberInfo.prototype.nLevel = 0;

        /**
         * TeammemberInfo job.
         * @member {number} job
         * @memberof NFMsg.TeammemberInfo
         * @instance
         */
        TeammemberInfo.prototype.job = 0;

        /**
         * TeammemberInfo HeadIcon.
         * @member {string} HeadIcon
         * @memberof NFMsg.TeammemberInfo
         * @instance
         */
        TeammemberInfo.prototype.HeadIcon = "";

        /**
         * Creates a new TeammemberInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.TeammemberInfo
         * @static
         * @param {NFMsg.ITeammemberInfo=} [properties] Properties to set
         * @returns {NFMsg.TeammemberInfo} TeammemberInfo instance
         */
        TeammemberInfo.create = function create(properties) {
            return new TeammemberInfo(properties);
        };

        /**
         * Encodes the specified TeammemberInfo message. Does not implicitly {@link NFMsg.TeammemberInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.TeammemberInfo
         * @static
         * @param {NFMsg.ITeammemberInfo} message TeammemberInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeammemberInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsg.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.nLevel != null && message.hasOwnProperty("nLevel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nLevel);
            if (message.job != null && message.hasOwnProperty("job"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.job);
            if (message.HeadIcon != null && message.hasOwnProperty("HeadIcon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.HeadIcon);
            return writer;
        };

        /**
         * Decodes a TeammemberInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.TeammemberInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.TeammemberInfo} TeammemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeammemberInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.TeammemberInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.nLevel = reader.int32();
                    break;
                case 4:
                    message.job = reader.int32();
                    break;
                case 5:
                    message.HeadIcon = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TeammemberInfo;
    })();

    NFMsg.ReqAckCreateTeam = (function() {

        /**
         * Properties of a ReqAckCreateTeam.
         * @memberof NFMsg
         * @interface IReqAckCreateTeam
         * @property {NFMsg.IIdent|null} [team_id] ReqAckCreateTeam team_id
         * @property {NFMsg.ITeamInfo|null} [xTeamInfo] ReqAckCreateTeam xTeamInfo
         */

        /**
         * Constructs a new ReqAckCreateTeam.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckCreateTeam.
         * @implements IReqAckCreateTeam
         * @constructor
         * @param {NFMsg.IReqAckCreateTeam=} [properties] Properties to set
         */
        function ReqAckCreateTeam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckCreateTeam team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.ReqAckCreateTeam
         * @instance
         */
        ReqAckCreateTeam.prototype.team_id = null;

        /**
         * ReqAckCreateTeam xTeamInfo.
         * @member {NFMsg.ITeamInfo|null|undefined} xTeamInfo
         * @memberof NFMsg.ReqAckCreateTeam
         * @instance
         */
        ReqAckCreateTeam.prototype.xTeamInfo = null;

        /**
         * Creates a new ReqAckCreateTeam instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckCreateTeam
         * @static
         * @param {NFMsg.IReqAckCreateTeam=} [properties] Properties to set
         * @returns {NFMsg.ReqAckCreateTeam} ReqAckCreateTeam instance
         */
        ReqAckCreateTeam.create = function create(properties) {
            return new ReqAckCreateTeam(properties);
        };

        /**
         * Encodes the specified ReqAckCreateTeam message. Does not implicitly {@link NFMsg.ReqAckCreateTeam.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckCreateTeam
         * @static
         * @param {NFMsg.IReqAckCreateTeam} message ReqAckCreateTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckCreateTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.xTeamInfo != null && message.hasOwnProperty("xTeamInfo"))
                $root.NFMsg.TeamInfo.encode(message.xTeamInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckCreateTeam message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckCreateTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckCreateTeam} ReqAckCreateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckCreateTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckCreateTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.xTeamInfo = $root.NFMsg.TeamInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckCreateTeam;
    })();

    NFMsg.ReqAckJoinTeam = (function() {

        /**
         * Properties of a ReqAckJoinTeam.
         * @memberof NFMsg
         * @interface IReqAckJoinTeam
         * @property {NFMsg.IIdent|null} [team_id] ReqAckJoinTeam team_id
         * @property {NFMsg.ITeamInfo|null} [xTeamInfo] ReqAckJoinTeam xTeamInfo
         */

        /**
         * Constructs a new ReqAckJoinTeam.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckJoinTeam.
         * @implements IReqAckJoinTeam
         * @constructor
         * @param {NFMsg.IReqAckJoinTeam=} [properties] Properties to set
         */
        function ReqAckJoinTeam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckJoinTeam team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.ReqAckJoinTeam
         * @instance
         */
        ReqAckJoinTeam.prototype.team_id = null;

        /**
         * ReqAckJoinTeam xTeamInfo.
         * @member {NFMsg.ITeamInfo|null|undefined} xTeamInfo
         * @memberof NFMsg.ReqAckJoinTeam
         * @instance
         */
        ReqAckJoinTeam.prototype.xTeamInfo = null;

        /**
         * Creates a new ReqAckJoinTeam instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckJoinTeam
         * @static
         * @param {NFMsg.IReqAckJoinTeam=} [properties] Properties to set
         * @returns {NFMsg.ReqAckJoinTeam} ReqAckJoinTeam instance
         */
        ReqAckJoinTeam.create = function create(properties) {
            return new ReqAckJoinTeam(properties);
        };

        /**
         * Encodes the specified ReqAckJoinTeam message. Does not implicitly {@link NFMsg.ReqAckJoinTeam.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckJoinTeam
         * @static
         * @param {NFMsg.IReqAckJoinTeam} message ReqAckJoinTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckJoinTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.xTeamInfo != null && message.hasOwnProperty("xTeamInfo"))
                $root.NFMsg.TeamInfo.encode(message.xTeamInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckJoinTeam message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckJoinTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckJoinTeam} ReqAckJoinTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckJoinTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckJoinTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.xTeamInfo = $root.NFMsg.TeamInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckJoinTeam;
    })();

    NFMsg.ReqAckLeaveTeam = (function() {

        /**
         * Properties of a ReqAckLeaveTeam.
         * @memberof NFMsg
         * @interface IReqAckLeaveTeam
         * @property {NFMsg.IIdent|null} [team_id] ReqAckLeaveTeam team_id
         * @property {NFMsg.ITeamInfo|null} [xTeamInfo] ReqAckLeaveTeam xTeamInfo
         */

        /**
         * Constructs a new ReqAckLeaveTeam.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckLeaveTeam.
         * @implements IReqAckLeaveTeam
         * @constructor
         * @param {NFMsg.IReqAckLeaveTeam=} [properties] Properties to set
         */
        function ReqAckLeaveTeam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckLeaveTeam team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.ReqAckLeaveTeam
         * @instance
         */
        ReqAckLeaveTeam.prototype.team_id = null;

        /**
         * ReqAckLeaveTeam xTeamInfo.
         * @member {NFMsg.ITeamInfo|null|undefined} xTeamInfo
         * @memberof NFMsg.ReqAckLeaveTeam
         * @instance
         */
        ReqAckLeaveTeam.prototype.xTeamInfo = null;

        /**
         * Creates a new ReqAckLeaveTeam instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckLeaveTeam
         * @static
         * @param {NFMsg.IReqAckLeaveTeam=} [properties] Properties to set
         * @returns {NFMsg.ReqAckLeaveTeam} ReqAckLeaveTeam instance
         */
        ReqAckLeaveTeam.create = function create(properties) {
            return new ReqAckLeaveTeam(properties);
        };

        /**
         * Encodes the specified ReqAckLeaveTeam message. Does not implicitly {@link NFMsg.ReqAckLeaveTeam.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckLeaveTeam
         * @static
         * @param {NFMsg.IReqAckLeaveTeam} message ReqAckLeaveTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckLeaveTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.xTeamInfo != null && message.hasOwnProperty("xTeamInfo"))
                $root.NFMsg.TeamInfo.encode(message.xTeamInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckLeaveTeam message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckLeaveTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckLeaveTeam} ReqAckLeaveTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckLeaveTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckLeaveTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.xTeamInfo = $root.NFMsg.TeamInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckLeaveTeam;
    })();

    NFMsg.ReqAckOprTeamMember = (function() {

        /**
         * Properties of a ReqAckOprTeamMember.
         * @memberof NFMsg
         * @interface IReqAckOprTeamMember
         * @property {NFMsg.IIdent|null} [team_id] ReqAckOprTeamMember team_id
         * @property {NFMsg.IIdent|null} [member_id] ReqAckOprTeamMember member_id
         * @property {NFMsg.ReqAckOprTeamMember.EGTeamMemberOprType|null} [type] ReqAckOprTeamMember type
         * @property {NFMsg.ITeamInfo|null} [xTeamInfo] ReqAckOprTeamMember xTeamInfo
         */

        /**
         * Constructs a new ReqAckOprTeamMember.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckOprTeamMember.
         * @implements IReqAckOprTeamMember
         * @constructor
         * @param {NFMsg.IReqAckOprTeamMember=} [properties] Properties to set
         */
        function ReqAckOprTeamMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckOprTeamMember team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.ReqAckOprTeamMember
         * @instance
         */
        ReqAckOprTeamMember.prototype.team_id = null;

        /**
         * ReqAckOprTeamMember member_id.
         * @member {NFMsg.IIdent|null|undefined} member_id
         * @memberof NFMsg.ReqAckOprTeamMember
         * @instance
         */
        ReqAckOprTeamMember.prototype.member_id = null;

        /**
         * ReqAckOprTeamMember type.
         * @member {NFMsg.ReqAckOprTeamMember.EGTeamMemberOprType} type
         * @memberof NFMsg.ReqAckOprTeamMember
         * @instance
         */
        ReqAckOprTeamMember.prototype.type = 0;

        /**
         * ReqAckOprTeamMember xTeamInfo.
         * @member {NFMsg.ITeamInfo|null|undefined} xTeamInfo
         * @memberof NFMsg.ReqAckOprTeamMember
         * @instance
         */
        ReqAckOprTeamMember.prototype.xTeamInfo = null;

        /**
         * Creates a new ReqAckOprTeamMember instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckOprTeamMember
         * @static
         * @param {NFMsg.IReqAckOprTeamMember=} [properties] Properties to set
         * @returns {NFMsg.ReqAckOprTeamMember} ReqAckOprTeamMember instance
         */
        ReqAckOprTeamMember.create = function create(properties) {
            return new ReqAckOprTeamMember(properties);
        };

        /**
         * Encodes the specified ReqAckOprTeamMember message. Does not implicitly {@link NFMsg.ReqAckOprTeamMember.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckOprTeamMember
         * @static
         * @param {NFMsg.IReqAckOprTeamMember} message ReqAckOprTeamMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckOprTeamMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.member_id != null && message.hasOwnProperty("member_id"))
                $root.NFMsg.Ident.encode(message.member_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.xTeamInfo != null && message.hasOwnProperty("xTeamInfo"))
                $root.NFMsg.TeamInfo.encode(message.xTeamInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckOprTeamMember message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckOprTeamMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckOprTeamMember} ReqAckOprTeamMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckOprTeamMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckOprTeamMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.member_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.xTeamInfo = $root.NFMsg.TeamInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EGTeamMemberOprType enum.
         * @name NFMsg.ReqAckOprTeamMember.EGTeamMemberOprType
         * @enum {string}
         * @property {number} EGAT_DOWN=0 EGAT_DOWN value
         * @property {number} EGAT_UP=1 EGAT_UP value
         * @property {number} EGAT_KICK=2 EGAT_KICK value
         * @property {number} EGAT_APPOINT=3 EGAT_APPOINT value
         * @property {number} EGAT_FIRE=4 EGAT_FIRE value
         * @property {number} EGAT_DEMISE=5 EGAT_DEMISE value
         * @property {number} EGAT_ACCEPTAPPLY=6 EGAT_ACCEPTAPPLY value
         * @property {number} EGAT_DENYAPPLY=7 EGAT_DENYAPPLY value
         * @property {number} EGAT_KICKOUT=8 EGAT_KICKOUT value
         */
        ReqAckOprTeamMember.EGTeamMemberOprType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EGAT_DOWN"] = 0;
            values[valuesById[1] = "EGAT_UP"] = 1;
            values[valuesById[2] = "EGAT_KICK"] = 2;
            values[valuesById[3] = "EGAT_APPOINT"] = 3;
            values[valuesById[4] = "EGAT_FIRE"] = 4;
            values[valuesById[5] = "EGAT_DEMISE"] = 5;
            values[valuesById[6] = "EGAT_ACCEPTAPPLY"] = 6;
            values[valuesById[7] = "EGAT_DENYAPPLY"] = 7;
            values[valuesById[8] = "EGAT_KICKOUT"] = 8;
            return values;
        })();

        return ReqAckOprTeamMember;
    })();

    NFMsg.ReqAckInviteTeam = (function() {

        /**
         * Properties of a ReqAckInviteTeam.
         * @memberof NFMsg
         * @interface IReqAckInviteTeam
         * @property {NFMsg.IIdent|null} [team_id] ReqAckInviteTeam team_id
         * @property {NFMsg.IIdent|null} [self_id] ReqAckInviteTeam self_id
         * @property {NFMsg.IIdent|null} [invite_target_id] ReqAckInviteTeam invite_target_id
         */

        /**
         * Constructs a new ReqAckInviteTeam.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckInviteTeam.
         * @implements IReqAckInviteTeam
         * @constructor
         * @param {NFMsg.IReqAckInviteTeam=} [properties] Properties to set
         */
        function ReqAckInviteTeam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckInviteTeam team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.ReqAckInviteTeam
         * @instance
         */
        ReqAckInviteTeam.prototype.team_id = null;

        /**
         * ReqAckInviteTeam self_id.
         * @member {NFMsg.IIdent|null|undefined} self_id
         * @memberof NFMsg.ReqAckInviteTeam
         * @instance
         */
        ReqAckInviteTeam.prototype.self_id = null;

        /**
         * ReqAckInviteTeam invite_target_id.
         * @member {NFMsg.IIdent|null|undefined} invite_target_id
         * @memberof NFMsg.ReqAckInviteTeam
         * @instance
         */
        ReqAckInviteTeam.prototype.invite_target_id = null;

        /**
         * Creates a new ReqAckInviteTeam instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckInviteTeam
         * @static
         * @param {NFMsg.IReqAckInviteTeam=} [properties] Properties to set
         * @returns {NFMsg.ReqAckInviteTeam} ReqAckInviteTeam instance
         */
        ReqAckInviteTeam.create = function create(properties) {
            return new ReqAckInviteTeam(properties);
        };

        /**
         * Encodes the specified ReqAckInviteTeam message. Does not implicitly {@link NFMsg.ReqAckInviteTeam.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckInviteTeam
         * @static
         * @param {NFMsg.IReqAckInviteTeam} message ReqAckInviteTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckInviteTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.self_id != null && message.hasOwnProperty("self_id"))
                $root.NFMsg.Ident.encode(message.self_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.invite_target_id != null && message.hasOwnProperty("invite_target_id"))
                $root.NFMsg.Ident.encode(message.invite_target_id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckInviteTeam message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckInviteTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckInviteTeam} ReqAckInviteTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckInviteTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckInviteTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.self_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.invite_target_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckInviteTeam;
    })();

    NFMsg.ReqTeamEnterEctype = (function() {

        /**
         * Properties of a ReqTeamEnterEctype.
         * @memberof NFMsg
         * @interface IReqTeamEnterEctype
         * @property {NFMsg.IIdent|null} [team_id] ReqTeamEnterEctype team_id
         * @property {NFMsg.IIdent|null} [self_id] ReqTeamEnterEctype self_id
         * @property {number|null} [nEctypeID] ReqTeamEnterEctype nEctypeID
         * @property {number|null} [nGroupID] ReqTeamEnterEctype nGroupID
         * @property {number|null} [nResult] ReqTeamEnterEctype nResult
         * @property {number|null} [nServerID] ReqTeamEnterEctype nServerID
         */

        /**
         * Constructs a new ReqTeamEnterEctype.
         * @memberof NFMsg
         * @classdesc Represents a ReqTeamEnterEctype.
         * @implements IReqTeamEnterEctype
         * @constructor
         * @param {NFMsg.IReqTeamEnterEctype=} [properties] Properties to set
         */
        function ReqTeamEnterEctype(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqTeamEnterEctype team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.ReqTeamEnterEctype
         * @instance
         */
        ReqTeamEnterEctype.prototype.team_id = null;

        /**
         * ReqTeamEnterEctype self_id.
         * @member {NFMsg.IIdent|null|undefined} self_id
         * @memberof NFMsg.ReqTeamEnterEctype
         * @instance
         */
        ReqTeamEnterEctype.prototype.self_id = null;

        /**
         * ReqTeamEnterEctype nEctypeID.
         * @member {number} nEctypeID
         * @memberof NFMsg.ReqTeamEnterEctype
         * @instance
         */
        ReqTeamEnterEctype.prototype.nEctypeID = 0;

        /**
         * ReqTeamEnterEctype nGroupID.
         * @member {number} nGroupID
         * @memberof NFMsg.ReqTeamEnterEctype
         * @instance
         */
        ReqTeamEnterEctype.prototype.nGroupID = 0;

        /**
         * ReqTeamEnterEctype nResult.
         * @member {number} nResult
         * @memberof NFMsg.ReqTeamEnterEctype
         * @instance
         */
        ReqTeamEnterEctype.prototype.nResult = 0;

        /**
         * ReqTeamEnterEctype nServerID.
         * @member {number} nServerID
         * @memberof NFMsg.ReqTeamEnterEctype
         * @instance
         */
        ReqTeamEnterEctype.prototype.nServerID = 0;

        /**
         * Creates a new ReqTeamEnterEctype instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqTeamEnterEctype
         * @static
         * @param {NFMsg.IReqTeamEnterEctype=} [properties] Properties to set
         * @returns {NFMsg.ReqTeamEnterEctype} ReqTeamEnterEctype instance
         */
        ReqTeamEnterEctype.create = function create(properties) {
            return new ReqTeamEnterEctype(properties);
        };

        /**
         * Encodes the specified ReqTeamEnterEctype message. Does not implicitly {@link NFMsg.ReqTeamEnterEctype.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqTeamEnterEctype
         * @static
         * @param {NFMsg.IReqTeamEnterEctype} message ReqTeamEnterEctype message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqTeamEnterEctype.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.self_id != null && message.hasOwnProperty("self_id"))
                $root.NFMsg.Ident.encode(message.self_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nEctypeID != null && message.hasOwnProperty("nEctypeID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nEctypeID);
            if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nGroupID);
            if (message.nResult != null && message.hasOwnProperty("nResult"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nResult);
            if (message.nServerID != null && message.hasOwnProperty("nServerID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nServerID);
            return writer;
        };

        /**
         * Decodes a ReqTeamEnterEctype message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqTeamEnterEctype
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqTeamEnterEctype} ReqTeamEnterEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTeamEnterEctype.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqTeamEnterEctype();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.self_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nEctypeID = reader.int32();
                    break;
                case 4:
                    message.nGroupID = reader.int32();
                    break;
                case 5:
                    message.nResult = reader.int32();
                    break;
                case 6:
                    message.nServerID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqTeamEnterEctype;
    })();

    NFMsg.AckTeamEnterEctype = (function() {

        /**
         * Properties of an AckTeamEnterEctype.
         * @memberof NFMsg
         * @interface IAckTeamEnterEctype
         * @property {NFMsg.IIdent|null} [team_id] AckTeamEnterEctype team_id
         * @property {NFMsg.IIdent|null} [self_id] AckTeamEnterEctype self_id
         * @property {number|null} [nEctypeID] AckTeamEnterEctype nEctypeID
         * @property {number|null} [nGroupID] AckTeamEnterEctype nGroupID
         * @property {number|null} [nResult] AckTeamEnterEctype nResult
         */

        /**
         * Constructs a new AckTeamEnterEctype.
         * @memberof NFMsg
         * @classdesc Represents an AckTeamEnterEctype.
         * @implements IAckTeamEnterEctype
         * @constructor
         * @param {NFMsg.IAckTeamEnterEctype=} [properties] Properties to set
         */
        function AckTeamEnterEctype(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckTeamEnterEctype team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.AckTeamEnterEctype
         * @instance
         */
        AckTeamEnterEctype.prototype.team_id = null;

        /**
         * AckTeamEnterEctype self_id.
         * @member {NFMsg.IIdent|null|undefined} self_id
         * @memberof NFMsg.AckTeamEnterEctype
         * @instance
         */
        AckTeamEnterEctype.prototype.self_id = null;

        /**
         * AckTeamEnterEctype nEctypeID.
         * @member {number} nEctypeID
         * @memberof NFMsg.AckTeamEnterEctype
         * @instance
         */
        AckTeamEnterEctype.prototype.nEctypeID = 0;

        /**
         * AckTeamEnterEctype nGroupID.
         * @member {number} nGroupID
         * @memberof NFMsg.AckTeamEnterEctype
         * @instance
         */
        AckTeamEnterEctype.prototype.nGroupID = 0;

        /**
         * AckTeamEnterEctype nResult.
         * @member {number} nResult
         * @memberof NFMsg.AckTeamEnterEctype
         * @instance
         */
        AckTeamEnterEctype.prototype.nResult = 0;

        /**
         * Creates a new AckTeamEnterEctype instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckTeamEnterEctype
         * @static
         * @param {NFMsg.IAckTeamEnterEctype=} [properties] Properties to set
         * @returns {NFMsg.AckTeamEnterEctype} AckTeamEnterEctype instance
         */
        AckTeamEnterEctype.create = function create(properties) {
            return new AckTeamEnterEctype(properties);
        };

        /**
         * Encodes the specified AckTeamEnterEctype message. Does not implicitly {@link NFMsg.AckTeamEnterEctype.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckTeamEnterEctype
         * @static
         * @param {NFMsg.IAckTeamEnterEctype} message AckTeamEnterEctype message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckTeamEnterEctype.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.self_id != null && message.hasOwnProperty("self_id"))
                $root.NFMsg.Ident.encode(message.self_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nEctypeID != null && message.hasOwnProperty("nEctypeID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nEctypeID);
            if (message.nGroupID != null && message.hasOwnProperty("nGroupID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nGroupID);
            if (message.nResult != null && message.hasOwnProperty("nResult"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nResult);
            return writer;
        };

        /**
         * Decodes an AckTeamEnterEctype message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckTeamEnterEctype
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckTeamEnterEctype} AckTeamEnterEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckTeamEnterEctype.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckTeamEnterEctype();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.self_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nEctypeID = reader.int32();
                    break;
                case 4:
                    message.nGroupID = reader.int32();
                    break;
                case 5:
                    message.nResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckTeamEnterEctype;
    })();

    NFMsg.GridGuildBaseInfo = (function() {

        /**
         * Properties of a GridGuildBaseInfo.
         * @memberof NFMsg
         * @interface IGridGuildBaseInfo
         * @property {NFMsg.IIdent|null} [id] GridGuildBaseInfo id
         * @property {number|null} [level] GridGuildBaseInfo level
         * @property {number|null} [count] GridGuildBaseInfo count
         * @property {number|null} [resource] GridGuildBaseInfo resource
         * @property {Uint8Array|null} [icon] GridGuildBaseInfo icon
         */

        /**
         * Constructs a new GridGuildBaseInfo.
         * @memberof NFMsg
         * @classdesc big map/////////////////////////////////////////////////////////////////////////////////////
         * @implements IGridGuildBaseInfo
         * @constructor
         * @param {NFMsg.IGridGuildBaseInfo=} [properties] Properties to set
         */
        function GridGuildBaseInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GridGuildBaseInfo id.
         * @member {NFMsg.IIdent|null|undefined} id
         * @memberof NFMsg.GridGuildBaseInfo
         * @instance
         */
        GridGuildBaseInfo.prototype.id = null;

        /**
         * GridGuildBaseInfo level.
         * @member {number} level
         * @memberof NFMsg.GridGuildBaseInfo
         * @instance
         */
        GridGuildBaseInfo.prototype.level = 0;

        /**
         * GridGuildBaseInfo count.
         * @member {number} count
         * @memberof NFMsg.GridGuildBaseInfo
         * @instance
         */
        GridGuildBaseInfo.prototype.count = 0;

        /**
         * GridGuildBaseInfo resource.
         * @member {number} resource
         * @memberof NFMsg.GridGuildBaseInfo
         * @instance
         */
        GridGuildBaseInfo.prototype.resource = 0;

        /**
         * GridGuildBaseInfo icon.
         * @member {Uint8Array} icon
         * @memberof NFMsg.GridGuildBaseInfo
         * @instance
         */
        GridGuildBaseInfo.prototype.icon = $util.newBuffer([]);

        /**
         * Creates a new GridGuildBaseInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.GridGuildBaseInfo
         * @static
         * @param {NFMsg.IGridGuildBaseInfo=} [properties] Properties to set
         * @returns {NFMsg.GridGuildBaseInfo} GridGuildBaseInfo instance
         */
        GridGuildBaseInfo.create = function create(properties) {
            return new GridGuildBaseInfo(properties);
        };

        /**
         * Encodes the specified GridGuildBaseInfo message. Does not implicitly {@link NFMsg.GridGuildBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.GridGuildBaseInfo
         * @static
         * @param {NFMsg.IGridGuildBaseInfo} message GridGuildBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GridGuildBaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                $root.NFMsg.Ident.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
            if (message.resource != null && message.hasOwnProperty("resource"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.resource);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.icon);
            return writer;
        };

        /**
         * Decodes a GridGuildBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.GridGuildBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.GridGuildBaseInfo} GridGuildBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GridGuildBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.GridGuildBaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.level = reader.int32();
                    break;
                case 3:
                    message.count = reader.int32();
                    break;
                case 4:
                    message.resource = reader.int32();
                    break;
                case 5:
                    message.icon = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GridGuildBaseInfo;
    })();

    NFMsg.ReqBigMapGridInfo = (function() {

        /**
         * Properties of a ReqBigMapGridInfo.
         * @memberof NFMsg
         * @interface IReqBigMapGridInfo
         * @property {Array.<Uint8Array>|null} [map_title_id] ReqBigMapGridInfo map_title_id
         */

        /**
         * Constructs a new ReqBigMapGridInfo.
         * @memberof NFMsg
         * @classdesc Represents a ReqBigMapGridInfo.
         * @implements IReqBigMapGridInfo
         * @constructor
         * @param {NFMsg.IReqBigMapGridInfo=} [properties] Properties to set
         */
        function ReqBigMapGridInfo(properties) {
            this.map_title_id = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqBigMapGridInfo map_title_id.
         * @member {Array.<Uint8Array>} map_title_id
         * @memberof NFMsg.ReqBigMapGridInfo
         * @instance
         */
        ReqBigMapGridInfo.prototype.map_title_id = $util.emptyArray;

        /**
         * Creates a new ReqBigMapGridInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqBigMapGridInfo
         * @static
         * @param {NFMsg.IReqBigMapGridInfo=} [properties] Properties to set
         * @returns {NFMsg.ReqBigMapGridInfo} ReqBigMapGridInfo instance
         */
        ReqBigMapGridInfo.create = function create(properties) {
            return new ReqBigMapGridInfo(properties);
        };

        /**
         * Encodes the specified ReqBigMapGridInfo message. Does not implicitly {@link NFMsg.ReqBigMapGridInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqBigMapGridInfo
         * @static
         * @param {NFMsg.IReqBigMapGridInfo} message ReqBigMapGridInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBigMapGridInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_title_id != null && message.map_title_id.length)
                for (var i = 0; i < message.map_title_id.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.map_title_id[i]);
            return writer;
        };

        /**
         * Decodes a ReqBigMapGridInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqBigMapGridInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqBigMapGridInfo} ReqBigMapGridInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBigMapGridInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqBigMapGridInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.map_title_id && message.map_title_id.length))
                        message.map_title_id = [];
                    message.map_title_id.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqBigMapGridInfo;
    })();

    NFMsg.BigMapGridBaseInfo = (function() {

        /**
         * Properties of a BigMapGridBaseInfo.
         * @memberof NFMsg
         * @interface IBigMapGridBaseInfo
         * @property {Uint8Array|null} [id] BigMapGridBaseInfo id
         * @property {NFMsg.IGridGuildBaseInfo|null} [guild_info] BigMapGridBaseInfo guild_info
         * @property {number|null} [kingwar_time] BigMapGridBaseInfo kingwar_time
         * @property {NFMsg.IIdent|null} [kingwarrer] BigMapGridBaseInfo kingwarrer
         * @property {number|null} [hurting_time] BigMapGridBaseInfo hurting_time
         * @property {NFMsg.IIdent|null} [hurter] BigMapGridBaseInfo hurter
         */

        /**
         * Constructs a new BigMapGridBaseInfo.
         * @memberof NFMsg
         * @classdesc Represents a BigMapGridBaseInfo.
         * @implements IBigMapGridBaseInfo
         * @constructor
         * @param {NFMsg.IBigMapGridBaseInfo=} [properties] Properties to set
         */
        function BigMapGridBaseInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BigMapGridBaseInfo id.
         * @member {Uint8Array} id
         * @memberof NFMsg.BigMapGridBaseInfo
         * @instance
         */
        BigMapGridBaseInfo.prototype.id = $util.newBuffer([]);

        /**
         * BigMapGridBaseInfo guild_info.
         * @member {NFMsg.IGridGuildBaseInfo|null|undefined} guild_info
         * @memberof NFMsg.BigMapGridBaseInfo
         * @instance
         */
        BigMapGridBaseInfo.prototype.guild_info = null;

        /**
         * BigMapGridBaseInfo kingwar_time.
         * @member {number} kingwar_time
         * @memberof NFMsg.BigMapGridBaseInfo
         * @instance
         */
        BigMapGridBaseInfo.prototype.kingwar_time = 0;

        /**
         * BigMapGridBaseInfo kingwarrer.
         * @member {NFMsg.IIdent|null|undefined} kingwarrer
         * @memberof NFMsg.BigMapGridBaseInfo
         * @instance
         */
        BigMapGridBaseInfo.prototype.kingwarrer = null;

        /**
         * BigMapGridBaseInfo hurting_time.
         * @member {number} hurting_time
         * @memberof NFMsg.BigMapGridBaseInfo
         * @instance
         */
        BigMapGridBaseInfo.prototype.hurting_time = 0;

        /**
         * BigMapGridBaseInfo hurter.
         * @member {NFMsg.IIdent|null|undefined} hurter
         * @memberof NFMsg.BigMapGridBaseInfo
         * @instance
         */
        BigMapGridBaseInfo.prototype.hurter = null;

        /**
         * Creates a new BigMapGridBaseInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.BigMapGridBaseInfo
         * @static
         * @param {NFMsg.IBigMapGridBaseInfo=} [properties] Properties to set
         * @returns {NFMsg.BigMapGridBaseInfo} BigMapGridBaseInfo instance
         */
        BigMapGridBaseInfo.create = function create(properties) {
            return new BigMapGridBaseInfo(properties);
        };

        /**
         * Encodes the specified BigMapGridBaseInfo message. Does not implicitly {@link NFMsg.BigMapGridBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.BigMapGridBaseInfo
         * @static
         * @param {NFMsg.IBigMapGridBaseInfo} message BigMapGridBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigMapGridBaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.guild_info != null && message.hasOwnProperty("guild_info"))
                $root.NFMsg.GridGuildBaseInfo.encode(message.guild_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.kingwar_time != null && message.hasOwnProperty("kingwar_time"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.kingwar_time);
            if (message.kingwarrer != null && message.hasOwnProperty("kingwarrer"))
                $root.NFMsg.Ident.encode(message.kingwarrer, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.hurting_time != null && message.hasOwnProperty("hurting_time"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.hurting_time);
            if (message.hurter != null && message.hasOwnProperty("hurter"))
                $root.NFMsg.Ident.encode(message.hurter, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a BigMapGridBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.BigMapGridBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.BigMapGridBaseInfo} BigMapGridBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigMapGridBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.BigMapGridBaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.guild_info = $root.NFMsg.GridGuildBaseInfo.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.kingwar_time = reader.int32();
                    break;
                case 11:
                    message.kingwarrer = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.hurting_time = reader.int32();
                    break;
                case 21:
                    message.hurter = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BigMapGridBaseInfo;
    })();

    NFMsg.BigMapLeaveMsg = (function() {

        /**
         * Properties of a BigMapLeaveMsg.
         * @memberof NFMsg
         * @interface IBigMapLeaveMsg
         * @property {NFMsg.IIdent|null} [owner] BigMapLeaveMsg owner
         * @property {Uint8Array|null} [owner_name] BigMapLeaveMsg owner_name
         * @property {Uint8Array|null} [msg_data] BigMapLeaveMsg msg_data
         * @property {number|null} [msg_time] BigMapLeaveMsg msg_time
         * @property {number|null} [owner_level] BigMapLeaveMsg owner_level
         */

        /**
         * Constructs a new BigMapLeaveMsg.
         * @memberof NFMsg
         * @classdesc Represents a BigMapLeaveMsg.
         * @implements IBigMapLeaveMsg
         * @constructor
         * @param {NFMsg.IBigMapLeaveMsg=} [properties] Properties to set
         */
        function BigMapLeaveMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BigMapLeaveMsg owner.
         * @member {NFMsg.IIdent|null|undefined} owner
         * @memberof NFMsg.BigMapLeaveMsg
         * @instance
         */
        BigMapLeaveMsg.prototype.owner = null;

        /**
         * BigMapLeaveMsg owner_name.
         * @member {Uint8Array} owner_name
         * @memberof NFMsg.BigMapLeaveMsg
         * @instance
         */
        BigMapLeaveMsg.prototype.owner_name = $util.newBuffer([]);

        /**
         * BigMapLeaveMsg msg_data.
         * @member {Uint8Array} msg_data
         * @memberof NFMsg.BigMapLeaveMsg
         * @instance
         */
        BigMapLeaveMsg.prototype.msg_data = $util.newBuffer([]);

        /**
         * BigMapLeaveMsg msg_time.
         * @member {number} msg_time
         * @memberof NFMsg.BigMapLeaveMsg
         * @instance
         */
        BigMapLeaveMsg.prototype.msg_time = 0;

        /**
         * BigMapLeaveMsg owner_level.
         * @member {number} owner_level
         * @memberof NFMsg.BigMapLeaveMsg
         * @instance
         */
        BigMapLeaveMsg.prototype.owner_level = 0;

        /**
         * Creates a new BigMapLeaveMsg instance using the specified properties.
         * @function create
         * @memberof NFMsg.BigMapLeaveMsg
         * @static
         * @param {NFMsg.IBigMapLeaveMsg=} [properties] Properties to set
         * @returns {NFMsg.BigMapLeaveMsg} BigMapLeaveMsg instance
         */
        BigMapLeaveMsg.create = function create(properties) {
            return new BigMapLeaveMsg(properties);
        };

        /**
         * Encodes the specified BigMapLeaveMsg message. Does not implicitly {@link NFMsg.BigMapLeaveMsg.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.BigMapLeaveMsg
         * @static
         * @param {NFMsg.IBigMapLeaveMsg} message BigMapLeaveMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigMapLeaveMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.owner != null && message.hasOwnProperty("owner"))
                $root.NFMsg.Ident.encode(message.owner, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.owner_name != null && message.hasOwnProperty("owner_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.owner_name);
            if (message.msg_data != null && message.hasOwnProperty("msg_data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msg_data);
            if (message.msg_time != null && message.hasOwnProperty("msg_time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.msg_time);
            if (message.owner_level != null && message.hasOwnProperty("owner_level"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.owner_level);
            return writer;
        };

        /**
         * Decodes a BigMapLeaveMsg message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.BigMapLeaveMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.BigMapLeaveMsg} BigMapLeaveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigMapLeaveMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.BigMapLeaveMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.owner = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner_name = reader.bytes();
                    break;
                case 3:
                    message.msg_data = reader.bytes();
                    break;
                case 4:
                    message.msg_time = reader.int32();
                    break;
                case 5:
                    message.owner_level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BigMapLeaveMsg;
    })();

    NFMsg.BigMapWarHistory = (function() {

        /**
         * Properties of a BigMapWarHistory.
         * @memberof NFMsg
         * @interface IBigMapWarHistory
         * @property {NFMsg.IGridGuildBaseInfo|null} [red_info] BigMapWarHistory red_info
         * @property {NFMsg.IGridGuildBaseInfo|null} [blue_info] BigMapWarHistory blue_info
         * @property {NFMsg.IIdent|null} [winner_id] BigMapWarHistory winner_id
         * @property {number|null} [war_time] BigMapWarHistory war_time
         */

        /**
         * Constructs a new BigMapWarHistory.
         * @memberof NFMsg
         * @classdesc Represents a BigMapWarHistory.
         * @implements IBigMapWarHistory
         * @constructor
         * @param {NFMsg.IBigMapWarHistory=} [properties] Properties to set
         */
        function BigMapWarHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BigMapWarHistory red_info.
         * @member {NFMsg.IGridGuildBaseInfo|null|undefined} red_info
         * @memberof NFMsg.BigMapWarHistory
         * @instance
         */
        BigMapWarHistory.prototype.red_info = null;

        /**
         * BigMapWarHistory blue_info.
         * @member {NFMsg.IGridGuildBaseInfo|null|undefined} blue_info
         * @memberof NFMsg.BigMapWarHistory
         * @instance
         */
        BigMapWarHistory.prototype.blue_info = null;

        /**
         * BigMapWarHistory winner_id.
         * @member {NFMsg.IIdent|null|undefined} winner_id
         * @memberof NFMsg.BigMapWarHistory
         * @instance
         */
        BigMapWarHistory.prototype.winner_id = null;

        /**
         * BigMapWarHistory war_time.
         * @member {number} war_time
         * @memberof NFMsg.BigMapWarHistory
         * @instance
         */
        BigMapWarHistory.prototype.war_time = 0;

        /**
         * Creates a new BigMapWarHistory instance using the specified properties.
         * @function create
         * @memberof NFMsg.BigMapWarHistory
         * @static
         * @param {NFMsg.IBigMapWarHistory=} [properties] Properties to set
         * @returns {NFMsg.BigMapWarHistory} BigMapWarHistory instance
         */
        BigMapWarHistory.create = function create(properties) {
            return new BigMapWarHistory(properties);
        };

        /**
         * Encodes the specified BigMapWarHistory message. Does not implicitly {@link NFMsg.BigMapWarHistory.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.BigMapWarHistory
         * @static
         * @param {NFMsg.IBigMapWarHistory} message BigMapWarHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigMapWarHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.red_info != null && message.hasOwnProperty("red_info"))
                $root.NFMsg.GridGuildBaseInfo.encode(message.red_info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.blue_info != null && message.hasOwnProperty("blue_info"))
                $root.NFMsg.GridGuildBaseInfo.encode(message.blue_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.winner_id != null && message.hasOwnProperty("winner_id"))
                $root.NFMsg.Ident.encode(message.winner_id, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.war_time != null && message.hasOwnProperty("war_time"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.war_time);
            return writer;
        };

        /**
         * Decodes a BigMapWarHistory message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.BigMapWarHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.BigMapWarHistory} BigMapWarHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigMapWarHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.BigMapWarHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.red_info = $root.NFMsg.GridGuildBaseInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blue_info = $root.NFMsg.GridGuildBaseInfo.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.winner_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.war_time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BigMapWarHistory;
    })();

    NFMsg.BigMapGridDetailInfo = (function() {

        /**
         * Properties of a BigMapGridDetailInfo.
         * @memberof NFMsg
         * @interface IBigMapGridDetailInfo
         * @property {NFMsg.IBigMapGridBaseInfo|null} [grid_base_info] BigMapGridDetailInfo grid_base_info
         * @property {Array.<NFMsg.IGridGuildBaseInfo>|null} [stay_guid_list] BigMapGridDetailInfo stay_guid_list
         * @property {Array.<NFMsg.IBigMapLeaveMsg>|null} [leave_msg] BigMapGridDetailInfo leave_msg
         * @property {Array.<NFMsg.IBigMapWarHistory>|null} [war_history] BigMapGridDetailInfo war_history
         */

        /**
         * Constructs a new BigMapGridDetailInfo.
         * @memberof NFMsg
         * @classdesc Represents a BigMapGridDetailInfo.
         * @implements IBigMapGridDetailInfo
         * @constructor
         * @param {NFMsg.IBigMapGridDetailInfo=} [properties] Properties to set
         */
        function BigMapGridDetailInfo(properties) {
            this.stay_guid_list = [];
            this.leave_msg = [];
            this.war_history = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BigMapGridDetailInfo grid_base_info.
         * @member {NFMsg.IBigMapGridBaseInfo|null|undefined} grid_base_info
         * @memberof NFMsg.BigMapGridDetailInfo
         * @instance
         */
        BigMapGridDetailInfo.prototype.grid_base_info = null;

        /**
         * BigMapGridDetailInfo stay_guid_list.
         * @member {Array.<NFMsg.IGridGuildBaseInfo>} stay_guid_list
         * @memberof NFMsg.BigMapGridDetailInfo
         * @instance
         */
        BigMapGridDetailInfo.prototype.stay_guid_list = $util.emptyArray;

        /**
         * BigMapGridDetailInfo leave_msg.
         * @member {Array.<NFMsg.IBigMapLeaveMsg>} leave_msg
         * @memberof NFMsg.BigMapGridDetailInfo
         * @instance
         */
        BigMapGridDetailInfo.prototype.leave_msg = $util.emptyArray;

        /**
         * BigMapGridDetailInfo war_history.
         * @member {Array.<NFMsg.IBigMapWarHistory>} war_history
         * @memberof NFMsg.BigMapGridDetailInfo
         * @instance
         */
        BigMapGridDetailInfo.prototype.war_history = $util.emptyArray;

        /**
         * Creates a new BigMapGridDetailInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.BigMapGridDetailInfo
         * @static
         * @param {NFMsg.IBigMapGridDetailInfo=} [properties] Properties to set
         * @returns {NFMsg.BigMapGridDetailInfo} BigMapGridDetailInfo instance
         */
        BigMapGridDetailInfo.create = function create(properties) {
            return new BigMapGridDetailInfo(properties);
        };

        /**
         * Encodes the specified BigMapGridDetailInfo message. Does not implicitly {@link NFMsg.BigMapGridDetailInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.BigMapGridDetailInfo
         * @static
         * @param {NFMsg.IBigMapGridDetailInfo} message BigMapGridDetailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigMapGridDetailInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.grid_base_info != null && message.hasOwnProperty("grid_base_info"))
                $root.NFMsg.BigMapGridBaseInfo.encode(message.grid_base_info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.stay_guid_list != null && message.stay_guid_list.length)
                for (var i = 0; i < message.stay_guid_list.length; ++i)
                    $root.NFMsg.GridGuildBaseInfo.encode(message.stay_guid_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.leave_msg != null && message.leave_msg.length)
                for (var i = 0; i < message.leave_msg.length; ++i)
                    $root.NFMsg.BigMapLeaveMsg.encode(message.leave_msg[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.war_history != null && message.war_history.length)
                for (var i = 0; i < message.war_history.length; ++i)
                    $root.NFMsg.BigMapWarHistory.encode(message.war_history[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a BigMapGridDetailInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.BigMapGridDetailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.BigMapGridDetailInfo} BigMapGridDetailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigMapGridDetailInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.BigMapGridDetailInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.grid_base_info = $root.NFMsg.BigMapGridBaseInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.stay_guid_list && message.stay_guid_list.length))
                        message.stay_guid_list = [];
                    message.stay_guid_list.push($root.NFMsg.GridGuildBaseInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.leave_msg && message.leave_msg.length))
                        message.leave_msg = [];
                    message.leave_msg.push($root.NFMsg.BigMapLeaveMsg.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.war_history && message.war_history.length))
                        message.war_history = [];
                    message.war_history.push($root.NFMsg.BigMapWarHistory.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BigMapGridDetailInfo;
    })();

    NFMsg.AckBigMapGridInfo = (function() {

        /**
         * Properties of an AckBigMapGridInfo.
         * @memberof NFMsg
         * @interface IAckBigMapGridInfo
         * @property {Array.<NFMsg.IBigMapGridDetailInfo>|null} [map_data] AckBigMapGridInfo map_data
         */

        /**
         * Constructs a new AckBigMapGridInfo.
         * @memberof NFMsg
         * @classdesc Represents an AckBigMapGridInfo.
         * @implements IAckBigMapGridInfo
         * @constructor
         * @param {NFMsg.IAckBigMapGridInfo=} [properties] Properties to set
         */
        function AckBigMapGridInfo(properties) {
            this.map_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckBigMapGridInfo map_data.
         * @member {Array.<NFMsg.IBigMapGridDetailInfo>} map_data
         * @memberof NFMsg.AckBigMapGridInfo
         * @instance
         */
        AckBigMapGridInfo.prototype.map_data = $util.emptyArray;

        /**
         * Creates a new AckBigMapGridInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckBigMapGridInfo
         * @static
         * @param {NFMsg.IAckBigMapGridInfo=} [properties] Properties to set
         * @returns {NFMsg.AckBigMapGridInfo} AckBigMapGridInfo instance
         */
        AckBigMapGridInfo.create = function create(properties) {
            return new AckBigMapGridInfo(properties);
        };

        /**
         * Encodes the specified AckBigMapGridInfo message. Does not implicitly {@link NFMsg.AckBigMapGridInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckBigMapGridInfo
         * @static
         * @param {NFMsg.IAckBigMapGridInfo} message AckBigMapGridInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckBigMapGridInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_data != null && message.map_data.length)
                for (var i = 0; i < message.map_data.length; ++i)
                    $root.NFMsg.BigMapGridDetailInfo.encode(message.map_data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckBigMapGridInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckBigMapGridInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckBigMapGridInfo} AckBigMapGridInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckBigMapGridInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckBigMapGridInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.map_data && message.map_data.length))
                        message.map_data = [];
                    message.map_data.push($root.NFMsg.BigMapGridDetailInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckBigMapGridInfo;
    })();

    NFMsg.ReqBigMapInfo = (function() {

        /**
         * Properties of a ReqBigMapInfo.
         * @memberof NFMsg
         * @interface IReqBigMapInfo
         */

        /**
         * Constructs a new ReqBigMapInfo.
         * @memberof NFMsg
         * @classdesc Represents a ReqBigMapInfo.
         * @implements IReqBigMapInfo
         * @constructor
         * @param {NFMsg.IReqBigMapInfo=} [properties] Properties to set
         */
        function ReqBigMapInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqBigMapInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqBigMapInfo
         * @static
         * @param {NFMsg.IReqBigMapInfo=} [properties] Properties to set
         * @returns {NFMsg.ReqBigMapInfo} ReqBigMapInfo instance
         */
        ReqBigMapInfo.create = function create(properties) {
            return new ReqBigMapInfo(properties);
        };

        /**
         * Encodes the specified ReqBigMapInfo message. Does not implicitly {@link NFMsg.ReqBigMapInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqBigMapInfo
         * @static
         * @param {NFMsg.IReqBigMapInfo} message ReqBigMapInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBigMapInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a ReqBigMapInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqBigMapInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqBigMapInfo} ReqBigMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBigMapInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqBigMapInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqBigMapInfo;
    })();

    NFMsg.AckBigMapInfo = (function() {

        /**
         * Properties of an AckBigMapInfo.
         * @memberof NFMsg
         * @interface IAckBigMapInfo
         * @property {Array.<NFMsg.IBigMapGridBaseInfo>|null} [grid_base_info] AckBigMapInfo grid_base_info
         */

        /**
         * Constructs a new AckBigMapInfo.
         * @memberof NFMsg
         * @classdesc Represents an AckBigMapInfo.
         * @implements IAckBigMapInfo
         * @constructor
         * @param {NFMsg.IAckBigMapInfo=} [properties] Properties to set
         */
        function AckBigMapInfo(properties) {
            this.grid_base_info = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckBigMapInfo grid_base_info.
         * @member {Array.<NFMsg.IBigMapGridBaseInfo>} grid_base_info
         * @memberof NFMsg.AckBigMapInfo
         * @instance
         */
        AckBigMapInfo.prototype.grid_base_info = $util.emptyArray;

        /**
         * Creates a new AckBigMapInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckBigMapInfo
         * @static
         * @param {NFMsg.IAckBigMapInfo=} [properties] Properties to set
         * @returns {NFMsg.AckBigMapInfo} AckBigMapInfo instance
         */
        AckBigMapInfo.create = function create(properties) {
            return new AckBigMapInfo(properties);
        };

        /**
         * Encodes the specified AckBigMapInfo message. Does not implicitly {@link NFMsg.AckBigMapInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckBigMapInfo
         * @static
         * @param {NFMsg.IAckBigMapInfo} message AckBigMapInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckBigMapInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.grid_base_info != null && message.grid_base_info.length)
                for (var i = 0; i < message.grid_base_info.length; ++i)
                    $root.NFMsg.BigMapGridBaseInfo.encode(message.grid_base_info[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckBigMapInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckBigMapInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckBigMapInfo} AckBigMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckBigMapInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckBigMapInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.grid_base_info && message.grid_base_info.length))
                        message.grid_base_info = [];
                    message.grid_base_info.push($root.NFMsg.BigMapGridBaseInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckBigMapInfo;
    })();

    NFMsg.ReqHoldMapGrid = (function() {

        /**
         * Properties of a ReqHoldMapGrid.
         * @memberof NFMsg
         * @interface IReqHoldMapGrid
         * @property {Uint8Array|null} [map_title_id] ReqHoldMapGrid map_title_id
         * @property {NFMsg.IIdent|null} [guild_id] ReqHoldMapGrid guild_id
         */

        /**
         * Constructs a new ReqHoldMapGrid.
         * @memberof NFMsg
         * @classdesc Represents a ReqHoldMapGrid.
         * @implements IReqHoldMapGrid
         * @constructor
         * @param {NFMsg.IReqHoldMapGrid=} [properties] Properties to set
         */
        function ReqHoldMapGrid(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqHoldMapGrid map_title_id.
         * @member {Uint8Array} map_title_id
         * @memberof NFMsg.ReqHoldMapGrid
         * @instance
         */
        ReqHoldMapGrid.prototype.map_title_id = $util.newBuffer([]);

        /**
         * ReqHoldMapGrid guild_id.
         * @member {NFMsg.IIdent|null|undefined} guild_id
         * @memberof NFMsg.ReqHoldMapGrid
         * @instance
         */
        ReqHoldMapGrid.prototype.guild_id = null;

        /**
         * Creates a new ReqHoldMapGrid instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqHoldMapGrid
         * @static
         * @param {NFMsg.IReqHoldMapGrid=} [properties] Properties to set
         * @returns {NFMsg.ReqHoldMapGrid} ReqHoldMapGrid instance
         */
        ReqHoldMapGrid.create = function create(properties) {
            return new ReqHoldMapGrid(properties);
        };

        /**
         * Encodes the specified ReqHoldMapGrid message. Does not implicitly {@link NFMsg.ReqHoldMapGrid.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqHoldMapGrid
         * @static
         * @param {NFMsg.IReqHoldMapGrid} message ReqHoldMapGrid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHoldMapGrid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_title_id != null && message.hasOwnProperty("map_title_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.map_title_id);
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                $root.NFMsg.Ident.encode(message.guild_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqHoldMapGrid message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqHoldMapGrid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqHoldMapGrid} ReqHoldMapGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHoldMapGrid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqHoldMapGrid();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.map_title_id = reader.bytes();
                    break;
                case 2:
                    message.guild_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqHoldMapGrid;
    })();

    NFMsg.AckHoldMapGrid = (function() {

        /**
         * Properties of an AckHoldMapGrid.
         * @memberof NFMsg
         * @interface IAckHoldMapGrid
         */

        /**
         * Constructs a new AckHoldMapGrid.
         * @memberof NFMsg
         * @classdesc Represents an AckHoldMapGrid.
         * @implements IAckHoldMapGrid
         * @constructor
         * @param {NFMsg.IAckHoldMapGrid=} [properties] Properties to set
         */
        function AckHoldMapGrid(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AckHoldMapGrid instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckHoldMapGrid
         * @static
         * @param {NFMsg.IAckHoldMapGrid=} [properties] Properties to set
         * @returns {NFMsg.AckHoldMapGrid} AckHoldMapGrid instance
         */
        AckHoldMapGrid.create = function create(properties) {
            return new AckHoldMapGrid(properties);
        };

        /**
         * Encodes the specified AckHoldMapGrid message. Does not implicitly {@link NFMsg.AckHoldMapGrid.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckHoldMapGrid
         * @static
         * @param {NFMsg.IAckHoldMapGrid} message AckHoldMapGrid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckHoldMapGrid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes an AckHoldMapGrid message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckHoldMapGrid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckHoldMapGrid} AckHoldMapGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckHoldMapGrid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckHoldMapGrid();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckHoldMapGrid;
    })();

    NFMsg.ReqLeaveMapMsg = (function() {

        /**
         * Properties of a ReqLeaveMapMsg.
         * @memberof NFMsg
         * @interface IReqLeaveMapMsg
         * @property {Uint8Array|null} [map_title_id] ReqLeaveMapMsg map_title_id
         * @property {NFMsg.IBigMapLeaveMsg|null} [leave_msg] ReqLeaveMapMsg leave_msg
         */

        /**
         * Constructs a new ReqLeaveMapMsg.
         * @memberof NFMsg
         * @classdesc Represents a ReqLeaveMapMsg.
         * @implements IReqLeaveMapMsg
         * @constructor
         * @param {NFMsg.IReqLeaveMapMsg=} [properties] Properties to set
         */
        function ReqLeaveMapMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLeaveMapMsg map_title_id.
         * @member {Uint8Array} map_title_id
         * @memberof NFMsg.ReqLeaveMapMsg
         * @instance
         */
        ReqLeaveMapMsg.prototype.map_title_id = $util.newBuffer([]);

        /**
         * ReqLeaveMapMsg leave_msg.
         * @member {NFMsg.IBigMapLeaveMsg|null|undefined} leave_msg
         * @memberof NFMsg.ReqLeaveMapMsg
         * @instance
         */
        ReqLeaveMapMsg.prototype.leave_msg = null;

        /**
         * Creates a new ReqLeaveMapMsg instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqLeaveMapMsg
         * @static
         * @param {NFMsg.IReqLeaveMapMsg=} [properties] Properties to set
         * @returns {NFMsg.ReqLeaveMapMsg} ReqLeaveMapMsg instance
         */
        ReqLeaveMapMsg.create = function create(properties) {
            return new ReqLeaveMapMsg(properties);
        };

        /**
         * Encodes the specified ReqLeaveMapMsg message. Does not implicitly {@link NFMsg.ReqLeaveMapMsg.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqLeaveMapMsg
         * @static
         * @param {NFMsg.IReqLeaveMapMsg} message ReqLeaveMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_title_id != null && message.hasOwnProperty("map_title_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.map_title_id);
            if (message.leave_msg != null && message.hasOwnProperty("leave_msg"))
                $root.NFMsg.BigMapLeaveMsg.encode(message.leave_msg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqLeaveMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqLeaveMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqLeaveMapMsg} ReqLeaveMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqLeaveMapMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.map_title_id = reader.bytes();
                    break;
                case 2:
                    message.leave_msg = $root.NFMsg.BigMapLeaveMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqLeaveMapMsg;
    })();

    NFMsg.AckLeaveMapMsg = (function() {

        /**
         * Properties of an AckLeaveMapMsg.
         * @memberof NFMsg
         * @interface IAckLeaveMapMsg
         */

        /**
         * Constructs a new AckLeaveMapMsg.
         * @memberof NFMsg
         * @classdesc Represents an AckLeaveMapMsg.
         * @implements IAckLeaveMapMsg
         * @constructor
         * @param {NFMsg.IAckLeaveMapMsg=} [properties] Properties to set
         */
        function AckLeaveMapMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AckLeaveMapMsg instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckLeaveMapMsg
         * @static
         * @param {NFMsg.IAckLeaveMapMsg=} [properties] Properties to set
         * @returns {NFMsg.AckLeaveMapMsg} AckLeaveMapMsg instance
         */
        AckLeaveMapMsg.create = function create(properties) {
            return new AckLeaveMapMsg(properties);
        };

        /**
         * Encodes the specified AckLeaveMapMsg message. Does not implicitly {@link NFMsg.AckLeaveMapMsg.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckLeaveMapMsg
         * @static
         * @param {NFMsg.IAckLeaveMapMsg} message AckLeaveMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckLeaveMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes an AckLeaveMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckLeaveMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckLeaveMapMsg} AckLeaveMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckLeaveMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckLeaveMapMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckLeaveMapMsg;
    })();

    NFMsg.ReqGetMapAward = (function() {

        /**
         * Properties of a ReqGetMapAward.
         * @memberof NFMsg
         * @interface IReqGetMapAward
         * @property {Uint8Array|null} [map_title_id] ReqGetMapAward map_title_id
         */

        /**
         * Constructs a new ReqGetMapAward.
         * @memberof NFMsg
         * @classdesc Represents a ReqGetMapAward.
         * @implements IReqGetMapAward
         * @constructor
         * @param {NFMsg.IReqGetMapAward=} [properties] Properties to set
         */
        function ReqGetMapAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqGetMapAward map_title_id.
         * @member {Uint8Array} map_title_id
         * @memberof NFMsg.ReqGetMapAward
         * @instance
         */
        ReqGetMapAward.prototype.map_title_id = $util.newBuffer([]);

        /**
         * Creates a new ReqGetMapAward instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqGetMapAward
         * @static
         * @param {NFMsg.IReqGetMapAward=} [properties] Properties to set
         * @returns {NFMsg.ReqGetMapAward} ReqGetMapAward instance
         */
        ReqGetMapAward.create = function create(properties) {
            return new ReqGetMapAward(properties);
        };

        /**
         * Encodes the specified ReqGetMapAward message. Does not implicitly {@link NFMsg.ReqGetMapAward.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqGetMapAward
         * @static
         * @param {NFMsg.IReqGetMapAward} message ReqGetMapAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGetMapAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_title_id != null && message.hasOwnProperty("map_title_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.map_title_id);
            return writer;
        };

        /**
         * Decodes a ReqGetMapAward message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqGetMapAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqGetMapAward} ReqGetMapAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGetMapAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqGetMapAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.map_title_id = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqGetMapAward;
    })();

    NFMsg.AckGetMapAward = (function() {

        /**
         * Properties of an AckGetMapAward.
         * @memberof NFMsg
         * @interface IAckGetMapAward
         */

        /**
         * Constructs a new AckGetMapAward.
         * @memberof NFMsg
         * @classdesc Represents an AckGetMapAward.
         * @implements IAckGetMapAward
         * @constructor
         * @param {NFMsg.IAckGetMapAward=} [properties] Properties to set
         */
        function AckGetMapAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AckGetMapAward instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckGetMapAward
         * @static
         * @param {NFMsg.IAckGetMapAward=} [properties] Properties to set
         * @returns {NFMsg.AckGetMapAward} AckGetMapAward instance
         */
        AckGetMapAward.create = function create(properties) {
            return new AckGetMapAward(properties);
        };

        /**
         * Encodes the specified AckGetMapAward message. Does not implicitly {@link NFMsg.AckGetMapAward.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckGetMapAward
         * @static
         * @param {NFMsg.IAckGetMapAward} message AckGetMapAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGetMapAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes an AckGetMapAward message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckGetMapAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckGetMapAward} AckGetMapAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGetMapAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckGetMapAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckGetMapAward;
    })();

    NFMsg.ReqMapHunting = (function() {

        /**
         * Properties of a ReqMapHunting.
         * @memberof NFMsg
         * @interface IReqMapHunting
         * @property {Uint8Array|null} [map_title_id] ReqMapHunting map_title_id
         */

        /**
         * Constructs a new ReqMapHunting.
         * @memberof NFMsg
         * @classdesc Represents a ReqMapHunting.
         * @implements IReqMapHunting
         * @constructor
         * @param {NFMsg.IReqMapHunting=} [properties] Properties to set
         */
        function ReqMapHunting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMapHunting map_title_id.
         * @member {Uint8Array} map_title_id
         * @memberof NFMsg.ReqMapHunting
         * @instance
         */
        ReqMapHunting.prototype.map_title_id = $util.newBuffer([]);

        /**
         * Creates a new ReqMapHunting instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqMapHunting
         * @static
         * @param {NFMsg.IReqMapHunting=} [properties] Properties to set
         * @returns {NFMsg.ReqMapHunting} ReqMapHunting instance
         */
        ReqMapHunting.create = function create(properties) {
            return new ReqMapHunting(properties);
        };

        /**
         * Encodes the specified ReqMapHunting message. Does not implicitly {@link NFMsg.ReqMapHunting.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqMapHunting
         * @static
         * @param {NFMsg.IReqMapHunting} message ReqMapHunting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMapHunting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_title_id != null && message.hasOwnProperty("map_title_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.map_title_id);
            return writer;
        };

        /**
         * Decodes a ReqMapHunting message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqMapHunting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqMapHunting} ReqMapHunting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMapHunting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqMapHunting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.map_title_id = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqMapHunting;
    })();

    NFMsg.AckMapHunting = (function() {

        /**
         * Properties of an AckMapHunting.
         * @memberof NFMsg
         * @interface IAckMapHunting
         */

        /**
         * Constructs a new AckMapHunting.
         * @memberof NFMsg
         * @classdesc Represents an AckMapHunting.
         * @implements IAckMapHunting
         * @constructor
         * @param {NFMsg.IAckMapHunting=} [properties] Properties to set
         */
        function AckMapHunting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AckMapHunting instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckMapHunting
         * @static
         * @param {NFMsg.IAckMapHunting=} [properties] Properties to set
         * @returns {NFMsg.AckMapHunting} AckMapHunting instance
         */
        AckMapHunting.create = function create(properties) {
            return new AckMapHunting(properties);
        };

        /**
         * Encodes the specified AckMapHunting message. Does not implicitly {@link NFMsg.AckMapHunting.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckMapHunting
         * @static
         * @param {NFMsg.IAckMapHunting} message AckMapHunting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckMapHunting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes an AckMapHunting message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckMapHunting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckMapHunting} AckMapHunting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckMapHunting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckMapHunting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckMapHunting;
    })();

    NFMsg.ReqMapKingWar = (function() {

        /**
         * Properties of a ReqMapKingWar.
         * @memberof NFMsg
         * @interface IReqMapKingWar
         * @property {Uint8Array|null} [map_title] ReqMapKingWar map_title
         */

        /**
         * Constructs a new ReqMapKingWar.
         * @memberof NFMsg
         * @classdesc Represents a ReqMapKingWar.
         * @implements IReqMapKingWar
         * @constructor
         * @param {NFMsg.IReqMapKingWar=} [properties] Properties to set
         */
        function ReqMapKingWar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMapKingWar map_title.
         * @member {Uint8Array} map_title
         * @memberof NFMsg.ReqMapKingWar
         * @instance
         */
        ReqMapKingWar.prototype.map_title = $util.newBuffer([]);

        /**
         * Creates a new ReqMapKingWar instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqMapKingWar
         * @static
         * @param {NFMsg.IReqMapKingWar=} [properties] Properties to set
         * @returns {NFMsg.ReqMapKingWar} ReqMapKingWar instance
         */
        ReqMapKingWar.create = function create(properties) {
            return new ReqMapKingWar(properties);
        };

        /**
         * Encodes the specified ReqMapKingWar message. Does not implicitly {@link NFMsg.ReqMapKingWar.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqMapKingWar
         * @static
         * @param {NFMsg.IReqMapKingWar} message ReqMapKingWar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMapKingWar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_title != null && message.hasOwnProperty("map_title"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.map_title);
            return writer;
        };

        /**
         * Decodes a ReqMapKingWar message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqMapKingWar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqMapKingWar} ReqMapKingWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMapKingWar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqMapKingWar();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.map_title = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqMapKingWar;
    })();

    NFMsg.AckMapKingWar = (function() {

        /**
         * Properties of an AckMapKingWar.
         * @memberof NFMsg
         * @interface IAckMapKingWar
         * @property {Uint8Array|null} [map_title] AckMapKingWar map_title
         */

        /**
         * Constructs a new AckMapKingWar.
         * @memberof NFMsg
         * @classdesc Represents an AckMapKingWar.
         * @implements IAckMapKingWar
         * @constructor
         * @param {NFMsg.IAckMapKingWar=} [properties] Properties to set
         */
        function AckMapKingWar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckMapKingWar map_title.
         * @member {Uint8Array} map_title
         * @memberof NFMsg.AckMapKingWar
         * @instance
         */
        AckMapKingWar.prototype.map_title = $util.newBuffer([]);

        /**
         * Creates a new AckMapKingWar instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckMapKingWar
         * @static
         * @param {NFMsg.IAckMapKingWar=} [properties] Properties to set
         * @returns {NFMsg.AckMapKingWar} AckMapKingWar instance
         */
        AckMapKingWar.create = function create(properties) {
            return new AckMapKingWar(properties);
        };

        /**
         * Encodes the specified AckMapKingWar message. Does not implicitly {@link NFMsg.AckMapKingWar.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckMapKingWar
         * @static
         * @param {NFMsg.IAckMapKingWar} message AckMapKingWar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckMapKingWar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map_title != null && message.hasOwnProperty("map_title"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.map_title);
            return writer;
        };

        /**
         * Decodes an AckMapKingWar message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckMapKingWar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckMapKingWar} AckMapKingWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckMapKingWar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckMapKingWar();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.map_title = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckMapKingWar;
    })();

    /**
     * EServerState enum.
     * @name NFMsg.EServerState
     * @enum {string}
     * @property {number} EST_CRASH=0 EST_CRASH value
     * @property {number} EST_NARMAL=1 EST_NARMAL value
     * @property {number} EST_BUSY=2 EST_BUSY value
     * @property {number} EST_FIRE=3 EST_FIRE value
     * @property {number} EST_MAINTEN=4 EST_MAINTEN value
     */
    NFMsg.EServerState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EST_CRASH"] = 0;
        values[valuesById[1] = "EST_NARMAL"] = 1;
        values[valuesById[2] = "EST_BUSY"] = 2;
        values[valuesById[3] = "EST_FIRE"] = 3;
        values[valuesById[4] = "EST_MAINTEN"] = 4;
        return values;
    })();

    /**
     * ELoginMode enum.
     * @name NFMsg.ELoginMode
     * @enum {string}
     * @property {number} ELM_LOGIN=0 ELM_LOGIN value
     * @property {number} ELM_REGISTER=1 ELM_REGISTER value
     * @property {number} ELM_AUTO_REGISTER_LOGIN=2 ELM_AUTO_REGISTER_LOGIN value
     */
    NFMsg.ELoginMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ELM_LOGIN"] = 0;
        values[valuesById[1] = "ELM_REGISTER"] = 1;
        values[valuesById[2] = "ELM_AUTO_REGISTER_LOGIN"] = 2;
        return values;
    })();

    NFMsg.ServerInfoReport = (function() {

        /**
         * Properties of a ServerInfoReport.
         * @memberof NFMsg
         * @interface IServerInfoReport
         * @property {number|null} [server_id] ServerInfoReport server_id
         * @property {Uint8Array|null} [server_name] ServerInfoReport server_name
         * @property {Uint8Array|null} [server_ip] ServerInfoReport server_ip
         * @property {number|null} [server_port] ServerInfoReport server_port
         * @property {number|null} [server_max_online] ServerInfoReport server_max_online
         * @property {number|null} [server_cur_count] ServerInfoReport server_cur_count
         * @property {NFMsg.EServerState|null} [server_state] ServerInfoReport server_state
         * @property {number|null} [server_type] ServerInfoReport server_type
         */

        /**
         * Constructs a new ServerInfoReport.
         * @memberof NFMsg
         * @classdesc Represents a ServerInfoReport.
         * @implements IServerInfoReport
         * @constructor
         * @param {NFMsg.IServerInfoReport=} [properties] Properties to set
         */
        function ServerInfoReport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfoReport server_id.
         * @member {number} server_id
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_id = 0;

        /**
         * ServerInfoReport server_name.
         * @member {Uint8Array} server_name
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_name = $util.newBuffer([]);

        /**
         * ServerInfoReport server_ip.
         * @member {Uint8Array} server_ip
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_ip = $util.newBuffer([]);

        /**
         * ServerInfoReport server_port.
         * @member {number} server_port
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_port = 0;

        /**
         * ServerInfoReport server_max_online.
         * @member {number} server_max_online
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_max_online = 0;

        /**
         * ServerInfoReport server_cur_count.
         * @member {number} server_cur_count
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_cur_count = 0;

        /**
         * ServerInfoReport server_state.
         * @member {NFMsg.EServerState} server_state
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_state = 0;

        /**
         * ServerInfoReport server_type.
         * @member {number} server_type
         * @memberof NFMsg.ServerInfoReport
         * @instance
         */
        ServerInfoReport.prototype.server_type = 0;

        /**
         * Creates a new ServerInfoReport instance using the specified properties.
         * @function create
         * @memberof NFMsg.ServerInfoReport
         * @static
         * @param {NFMsg.IServerInfoReport=} [properties] Properties to set
         * @returns {NFMsg.ServerInfoReport} ServerInfoReport instance
         */
        ServerInfoReport.create = function create(properties) {
            return new ServerInfoReport(properties);
        };

        /**
         * Encodes the specified ServerInfoReport message. Does not implicitly {@link NFMsg.ServerInfoReport.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ServerInfoReport
         * @static
         * @param {NFMsg.IServerInfoReport} message ServerInfoReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server_id != null && message.hasOwnProperty("server_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.server_id);
            if (message.server_name != null && message.hasOwnProperty("server_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.server_name);
            if (message.server_ip != null && message.hasOwnProperty("server_ip"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.server_ip);
            if (message.server_port != null && message.hasOwnProperty("server_port"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.server_port);
            if (message.server_max_online != null && message.hasOwnProperty("server_max_online"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.server_max_online);
            if (message.server_cur_count != null && message.hasOwnProperty("server_cur_count"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.server_cur_count);
            if (message.server_state != null && message.hasOwnProperty("server_state"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.server_state);
            if (message.server_type != null && message.hasOwnProperty("server_type"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.server_type);
            return writer;
        };

        /**
         * Decodes a ServerInfoReport message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ServerInfoReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ServerInfoReport} ServerInfoReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ServerInfoReport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.server_id = reader.int32();
                    break;
                case 2:
                    message.server_name = reader.bytes();
                    break;
                case 3:
                    message.server_ip = reader.bytes();
                    break;
                case 4:
                    message.server_port = reader.int32();
                    break;
                case 5:
                    message.server_max_online = reader.int32();
                    break;
                case 6:
                    message.server_cur_count = reader.int32();
                    break;
                case 7:
                    message.server_state = reader.int32();
                    break;
                case 8:
                    message.server_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ServerInfoReport;
    })();

    NFMsg.ServerInfoReportList = (function() {

        /**
         * Properties of a ServerInfoReportList.
         * @memberof NFMsg
         * @interface IServerInfoReportList
         * @property {Array.<NFMsg.IServerInfoReport>|null} [server_list] ServerInfoReportList server_list
         */

        /**
         * Constructs a new ServerInfoReportList.
         * @memberof NFMsg
         * @classdesc Represents a ServerInfoReportList.
         * @implements IServerInfoReportList
         * @constructor
         * @param {NFMsg.IServerInfoReportList=} [properties] Properties to set
         */
        function ServerInfoReportList(properties) {
            this.server_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfoReportList server_list.
         * @member {Array.<NFMsg.IServerInfoReport>} server_list
         * @memberof NFMsg.ServerInfoReportList
         * @instance
         */
        ServerInfoReportList.prototype.server_list = $util.emptyArray;

        /**
         * Creates a new ServerInfoReportList instance using the specified properties.
         * @function create
         * @memberof NFMsg.ServerInfoReportList
         * @static
         * @param {NFMsg.IServerInfoReportList=} [properties] Properties to set
         * @returns {NFMsg.ServerInfoReportList} ServerInfoReportList instance
         */
        ServerInfoReportList.create = function create(properties) {
            return new ServerInfoReportList(properties);
        };

        /**
         * Encodes the specified ServerInfoReportList message. Does not implicitly {@link NFMsg.ServerInfoReportList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ServerInfoReportList
         * @static
         * @param {NFMsg.IServerInfoReportList} message ServerInfoReportList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoReportList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server_list != null && message.server_list.length)
                for (var i = 0; i < message.server_list.length; ++i)
                    $root.NFMsg.ServerInfoReport.encode(message.server_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ServerInfoReportList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ServerInfoReportList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ServerInfoReportList} ServerInfoReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoReportList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ServerInfoReportList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.server_list && message.server_list.length))
                        message.server_list = [];
                    message.server_list.push($root.NFMsg.ServerInfoReport.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ServerInfoReportList;
    })();

    NFMsg.AckEventResult = (function() {

        /**
         * Properties of an AckEventResult.
         * @memberof NFMsg
         * @interface IAckEventResult
         * @property {NFMsg.EGameEventCode|null} [event_code] AckEventResult event_code
         * @property {NFMsg.IIdent|null} [event_object] AckEventResult event_object
         * @property {NFMsg.IIdent|null} [event_client] AckEventResult event_client
         */

        /**
         * Constructs a new AckEventResult.
         * @memberof NFMsg
         * @classdesc Represents an AckEventResult.
         * @implements IAckEventResult
         * @constructor
         * @param {NFMsg.IAckEventResult=} [properties] Properties to set
         */
        function AckEventResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckEventResult event_code.
         * @member {NFMsg.EGameEventCode} event_code
         * @memberof NFMsg.AckEventResult
         * @instance
         */
        AckEventResult.prototype.event_code = 0;

        /**
         * AckEventResult event_object.
         * @member {NFMsg.IIdent|null|undefined} event_object
         * @memberof NFMsg.AckEventResult
         * @instance
         */
        AckEventResult.prototype.event_object = null;

        /**
         * AckEventResult event_client.
         * @member {NFMsg.IIdent|null|undefined} event_client
         * @memberof NFMsg.AckEventResult
         * @instance
         */
        AckEventResult.prototype.event_client = null;

        /**
         * Creates a new AckEventResult instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckEventResult
         * @static
         * @param {NFMsg.IAckEventResult=} [properties] Properties to set
         * @returns {NFMsg.AckEventResult} AckEventResult instance
         */
        AckEventResult.create = function create(properties) {
            return new AckEventResult(properties);
        };

        /**
         * Encodes the specified AckEventResult message. Does not implicitly {@link NFMsg.AckEventResult.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckEventResult
         * @static
         * @param {NFMsg.IAckEventResult} message AckEventResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEventResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event_code != null && message.hasOwnProperty("event_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.event_code);
            if (message.event_object != null && message.hasOwnProperty("event_object"))
                $root.NFMsg.Ident.encode(message.event_object, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.event_client != null && message.hasOwnProperty("event_client"))
                $root.NFMsg.Ident.encode(message.event_client, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckEventResult message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckEventResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckEventResult} AckEventResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEventResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckEventResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.event_code = reader.int32();
                    break;
                case 2:
                    message.event_object = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.event_client = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckEventResult;
    })();

    NFMsg.ReqAccountLogin = (function() {

        /**
         * Properties of a ReqAccountLogin.
         * @memberof NFMsg
         * @interface IReqAccountLogin
         * @property {Uint8Array|null} [account] ReqAccountLogin account
         * @property {Uint8Array|null} [password] ReqAccountLogin password
         * @property {Uint8Array|null} [security_code] ReqAccountLogin security_code
         * @property {Uint8Array|null} [signBuff] ReqAccountLogin signBuff
         * @property {number|null} [clientVersion] ReqAccountLogin clientVersion
         * @property {NFMsg.ELoginMode|null} [loginMode] ReqAccountLogin loginMode
         * @property {number|null} [clientIP] ReqAccountLogin clientIP
         * @property {number|Long|null} [clientMAC] ReqAccountLogin clientMAC
         * @property {Uint8Array|null} [device_info] ReqAccountLogin device_info
         * @property {Uint8Array|null} [extra_info] ReqAccountLogin extra_info
         * @property {number|null} [platform_type] ReqAccountLogin platform_type
         */

        /**
         * Constructs a new ReqAccountLogin.
         * @memberof NFMsg
         * @classdesc Represents a ReqAccountLogin.
         * @implements IReqAccountLogin
         * @constructor
         * @param {NFMsg.IReqAccountLogin=} [properties] Properties to set
         */
        function ReqAccountLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAccountLogin account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.account = $util.newBuffer([]);

        /**
         * ReqAccountLogin password.
         * @member {Uint8Array} password
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.password = $util.newBuffer([]);

        /**
         * ReqAccountLogin security_code.
         * @member {Uint8Array} security_code
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.security_code = $util.newBuffer([]);

        /**
         * ReqAccountLogin signBuff.
         * @member {Uint8Array} signBuff
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.signBuff = $util.newBuffer([]);

        /**
         * ReqAccountLogin clientVersion.
         * @member {number} clientVersion
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.clientVersion = 0;

        /**
         * ReqAccountLogin loginMode.
         * @member {NFMsg.ELoginMode} loginMode
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.loginMode = 0;

        /**
         * ReqAccountLogin clientIP.
         * @member {number} clientIP
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.clientIP = 0;

        /**
         * ReqAccountLogin clientMAC.
         * @member {number|Long} clientMAC
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.clientMAC = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqAccountLogin device_info.
         * @member {Uint8Array} device_info
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.device_info = $util.newBuffer([]);

        /**
         * ReqAccountLogin extra_info.
         * @member {Uint8Array} extra_info
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.extra_info = $util.newBuffer([]);

        /**
         * ReqAccountLogin platform_type.
         * @member {number} platform_type
         * @memberof NFMsg.ReqAccountLogin
         * @instance
         */
        ReqAccountLogin.prototype.platform_type = 0;

        /**
         * Creates a new ReqAccountLogin instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAccountLogin
         * @static
         * @param {NFMsg.IReqAccountLogin=} [properties] Properties to set
         * @returns {NFMsg.ReqAccountLogin} ReqAccountLogin instance
         */
        ReqAccountLogin.create = function create(properties) {
            return new ReqAccountLogin(properties);
        };

        /**
         * Encodes the specified ReqAccountLogin message. Does not implicitly {@link NFMsg.ReqAccountLogin.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAccountLogin
         * @static
         * @param {NFMsg.IReqAccountLogin} message ReqAccountLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccountLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.password);
            if (message.security_code != null && message.hasOwnProperty("security_code"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.security_code);
            if (message.signBuff != null && message.hasOwnProperty("signBuff"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.signBuff);
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.clientVersion);
            if (message.loginMode != null && message.hasOwnProperty("loginMode"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.loginMode);
            if (message.clientIP != null && message.hasOwnProperty("clientIP"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.clientIP);
            if (message.clientMAC != null && message.hasOwnProperty("clientMAC"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.clientMAC);
            if (message.device_info != null && message.hasOwnProperty("device_info"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.device_info);
            if (message.extra_info != null && message.hasOwnProperty("extra_info"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.extra_info);
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.platform_type);
            return writer;
        };

        /**
         * Decodes a ReqAccountLogin message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAccountLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAccountLogin} ReqAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccountLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAccountLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.account = reader.bytes();
                    break;
                case 3:
                    message.password = reader.bytes();
                    break;
                case 4:
                    message.security_code = reader.bytes();
                    break;
                case 5:
                    message.signBuff = reader.bytes();
                    break;
                case 6:
                    message.clientVersion = reader.int32();
                    break;
                case 7:
                    message.loginMode = reader.int32();
                    break;
                case 8:
                    message.clientIP = reader.int32();
                    break;
                case 9:
                    message.clientMAC = reader.int64();
                    break;
                case 10:
                    message.device_info = reader.bytes();
                    break;
                case 11:
                    message.extra_info = reader.bytes();
                    break;
                case 12:
                    message.platform_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAccountLogin;
    })();

    NFMsg.ReqAccountLogout = (function() {

        /**
         * Properties of a ReqAccountLogout.
         * @memberof NFMsg
         * @interface IReqAccountLogout
         * @property {Uint8Array|null} [account] ReqAccountLogout account
         * @property {Uint8Array|null} [extra_info] ReqAccountLogout extra_info
         */

        /**
         * Constructs a new ReqAccountLogout.
         * @memberof NFMsg
         * @classdesc Represents a ReqAccountLogout.
         * @implements IReqAccountLogout
         * @constructor
         * @param {NFMsg.IReqAccountLogout=} [properties] Properties to set
         */
        function ReqAccountLogout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAccountLogout account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqAccountLogout
         * @instance
         */
        ReqAccountLogout.prototype.account = $util.newBuffer([]);

        /**
         * ReqAccountLogout extra_info.
         * @member {Uint8Array} extra_info
         * @memberof NFMsg.ReqAccountLogout
         * @instance
         */
        ReqAccountLogout.prototype.extra_info = $util.newBuffer([]);

        /**
         * Creates a new ReqAccountLogout instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAccountLogout
         * @static
         * @param {NFMsg.IReqAccountLogout=} [properties] Properties to set
         * @returns {NFMsg.ReqAccountLogout} ReqAccountLogout instance
         */
        ReqAccountLogout.create = function create(properties) {
            return new ReqAccountLogout(properties);
        };

        /**
         * Encodes the specified ReqAccountLogout message. Does not implicitly {@link NFMsg.ReqAccountLogout.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAccountLogout
         * @static
         * @param {NFMsg.IReqAccountLogout} message ReqAccountLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccountLogout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            if (message.extra_info != null && message.hasOwnProperty("extra_info"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.extra_info);
            return writer;
        };

        /**
         * Decodes a ReqAccountLogout message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAccountLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAccountLogout} ReqAccountLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccountLogout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAccountLogout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.account = reader.bytes();
                    break;
                case 3:
                    message.extra_info = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAccountLogout;
    })();

    NFMsg.ServerInfo = (function() {

        /**
         * Properties of a ServerInfo.
         * @memberof NFMsg
         * @interface IServerInfo
         * @property {number|null} [server_id] ServerInfo server_id
         * @property {Uint8Array|null} [name] ServerInfo name
         * @property {number|null} [wait_count] ServerInfo wait_count
         * @property {NFMsg.EServerState|null} [status] ServerInfo status
         */

        /**
         * Constructs a new ServerInfo.
         * @memberof NFMsg
         * @classdesc Represents a ServerInfo.
         * @implements IServerInfo
         * @constructor
         * @param {NFMsg.IServerInfo=} [properties] Properties to set
         */
        function ServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfo server_id.
         * @member {number} server_id
         * @memberof NFMsg.ServerInfo
         * @instance
         */
        ServerInfo.prototype.server_id = 0;

        /**
         * ServerInfo name.
         * @member {Uint8Array} name
         * @memberof NFMsg.ServerInfo
         * @instance
         */
        ServerInfo.prototype.name = $util.newBuffer([]);

        /**
         * ServerInfo wait_count.
         * @member {number} wait_count
         * @memberof NFMsg.ServerInfo
         * @instance
         */
        ServerInfo.prototype.wait_count = 0;

        /**
         * ServerInfo status.
         * @member {NFMsg.EServerState} status
         * @memberof NFMsg.ServerInfo
         * @instance
         */
        ServerInfo.prototype.status = 0;

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.ServerInfo
         * @static
         * @param {NFMsg.IServerInfo=} [properties] Properties to set
         * @returns {NFMsg.ServerInfo} ServerInfo instance
         */
        ServerInfo.create = function create(properties) {
            return new ServerInfo(properties);
        };

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link NFMsg.ServerInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ServerInfo
         * @static
         * @param {NFMsg.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server_id != null && message.hasOwnProperty("server_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.server_id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.name);
            if (message.wait_count != null && message.hasOwnProperty("wait_count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wait_count);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            return writer;
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.server_id = reader.int32();
                    break;
                case 2:
                    message.name = reader.bytes();
                    break;
                case 3:
                    message.wait_count = reader.int32();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ServerInfo;
    })();

    /**
     * ReqServerListType enum.
     * @name NFMsg.ReqServerListType
     * @enum {string}
     * @property {number} RSLT_WORLD_SERVER=0 RSLT_WORLD_SERVER value
     * @property {number} RSLT_GAMES_ERVER=1 RSLT_GAMES_ERVER value
     */
    NFMsg.ReqServerListType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RSLT_WORLD_SERVER"] = 0;
        values[valuesById[1] = "RSLT_GAMES_ERVER"] = 1;
        return values;
    })();

    NFMsg.ReqServerList = (function() {

        /**
         * Properties of a ReqServerList.
         * @memberof NFMsg
         * @interface IReqServerList
         * @property {NFMsg.ReqServerListType|null} [type] ReqServerList type
         */

        /**
         * Constructs a new ReqServerList.
         * @memberof NFMsg
         * @classdesc Represents a ReqServerList.
         * @implements IReqServerList
         * @constructor
         * @param {NFMsg.IReqServerList=} [properties] Properties to set
         */
        function ReqServerList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqServerList type.
         * @member {NFMsg.ReqServerListType} type
         * @memberof NFMsg.ReqServerList
         * @instance
         */
        ReqServerList.prototype.type = 0;

        /**
         * Creates a new ReqServerList instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqServerList
         * @static
         * @param {NFMsg.IReqServerList=} [properties] Properties to set
         * @returns {NFMsg.ReqServerList} ReqServerList instance
         */
        ReqServerList.create = function create(properties) {
            return new ReqServerList(properties);
        };

        /**
         * Encodes the specified ReqServerList message. Does not implicitly {@link NFMsg.ReqServerList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqServerList
         * @static
         * @param {NFMsg.IReqServerList} message ReqServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqServerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Decodes a ReqServerList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqServerList} ReqServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqServerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqServerList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqServerList;
    })();

    NFMsg.AckServerList = (function() {

        /**
         * Properties of an AckServerList.
         * @memberof NFMsg
         * @interface IAckServerList
         * @property {NFMsg.ReqServerListType|null} [type] AckServerList type
         * @property {Array.<NFMsg.IServerInfo>|null} [info] AckServerList info
         */

        /**
         * Constructs a new AckServerList.
         * @memberof NFMsg
         * @classdesc Represents an AckServerList.
         * @implements IAckServerList
         * @constructor
         * @param {NFMsg.IAckServerList=} [properties] Properties to set
         */
        function AckServerList(properties) {
            this.info = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckServerList type.
         * @member {NFMsg.ReqServerListType} type
         * @memberof NFMsg.AckServerList
         * @instance
         */
        AckServerList.prototype.type = 0;

        /**
         * AckServerList info.
         * @member {Array.<NFMsg.IServerInfo>} info
         * @memberof NFMsg.AckServerList
         * @instance
         */
        AckServerList.prototype.info = $util.emptyArray;

        /**
         * Creates a new AckServerList instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckServerList
         * @static
         * @param {NFMsg.IAckServerList=} [properties] Properties to set
         * @returns {NFMsg.AckServerList} AckServerList instance
         */
        AckServerList.create = function create(properties) {
            return new AckServerList(properties);
        };

        /**
         * Encodes the specified AckServerList message. Does not implicitly {@link NFMsg.AckServerList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckServerList
         * @static
         * @param {NFMsg.IAckServerList} message AckServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckServerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.info != null && message.info.length)
                for (var i = 0; i < message.info.length; ++i)
                    $root.NFMsg.ServerInfo.encode(message.info[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckServerList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckServerList} AckServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckServerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckServerList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.info && message.info.length))
                        message.info = [];
                    message.info.push($root.NFMsg.ServerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckServerList;
    })();

    NFMsg.ReqConnectWorld = (function() {

        /**
         * Properties of a ReqConnectWorld.
         * @memberof NFMsg
         * @interface IReqConnectWorld
         * @property {number|null} [world_id] ReqConnectWorld world_id
         * @property {Uint8Array|null} [account] ReqConnectWorld account
         * @property {NFMsg.IIdent|null} [sender] ReqConnectWorld sender
         * @property {number|null} [login_id] ReqConnectWorld login_id
         */

        /**
         * Constructs a new ReqConnectWorld.
         * @memberof NFMsg
         * @classdesc Represents a ReqConnectWorld.
         * @implements IReqConnectWorld
         * @constructor
         * @param {NFMsg.IReqConnectWorld=} [properties] Properties to set
         */
        function ReqConnectWorld(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqConnectWorld world_id.
         * @member {number} world_id
         * @memberof NFMsg.ReqConnectWorld
         * @instance
         */
        ReqConnectWorld.prototype.world_id = 0;

        /**
         * ReqConnectWorld account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqConnectWorld
         * @instance
         */
        ReqConnectWorld.prototype.account = $util.newBuffer([]);

        /**
         * ReqConnectWorld sender.
         * @member {NFMsg.IIdent|null|undefined} sender
         * @memberof NFMsg.ReqConnectWorld
         * @instance
         */
        ReqConnectWorld.prototype.sender = null;

        /**
         * ReqConnectWorld login_id.
         * @member {number} login_id
         * @memberof NFMsg.ReqConnectWorld
         * @instance
         */
        ReqConnectWorld.prototype.login_id = 0;

        /**
         * Creates a new ReqConnectWorld instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqConnectWorld
         * @static
         * @param {NFMsg.IReqConnectWorld=} [properties] Properties to set
         * @returns {NFMsg.ReqConnectWorld} ReqConnectWorld instance
         */
        ReqConnectWorld.create = function create(properties) {
            return new ReqConnectWorld(properties);
        };

        /**
         * Encodes the specified ReqConnectWorld message. Does not implicitly {@link NFMsg.ReqConnectWorld.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqConnectWorld
         * @static
         * @param {NFMsg.IReqConnectWorld} message ReqConnectWorld message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqConnectWorld.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.world_id != null && message.hasOwnProperty("world_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.world_id);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            if (message.sender != null && message.hasOwnProperty("sender"))
                $root.NFMsg.Ident.encode(message.sender, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.login_id != null && message.hasOwnProperty("login_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.login_id);
            return writer;
        };

        /**
         * Decodes a ReqConnectWorld message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqConnectWorld
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqConnectWorld} ReqConnectWorld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqConnectWorld.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqConnectWorld();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.world_id = reader.int32();
                    break;
                case 2:
                    message.account = reader.bytes();
                    break;
                case 3:
                    message.sender = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.login_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqConnectWorld;
    })();

    NFMsg.AckConnectWorldResult = (function() {

        /**
         * Properties of an AckConnectWorldResult.
         * @memberof NFMsg
         * @interface IAckConnectWorldResult
         * @property {number|null} [world_id] AckConnectWorldResult world_id
         * @property {NFMsg.IIdent|null} [sender] AckConnectWorldResult sender
         * @property {number|null} [login_id] AckConnectWorldResult login_id
         * @property {Uint8Array|null} [account] AckConnectWorldResult account
         * @property {Uint8Array|null} [world_ip] AckConnectWorldResult world_ip
         * @property {number|null} [world_port] AckConnectWorldResult world_port
         * @property {Uint8Array|null} [world_key] AckConnectWorldResult world_key
         */

        /**
         * Constructs a new AckConnectWorldResult.
         * @memberof NFMsg
         * @classdesc Represents an AckConnectWorldResult.
         * @implements IAckConnectWorldResult
         * @constructor
         * @param {NFMsg.IAckConnectWorldResult=} [properties] Properties to set
         */
        function AckConnectWorldResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckConnectWorldResult world_id.
         * @member {number} world_id
         * @memberof NFMsg.AckConnectWorldResult
         * @instance
         */
        AckConnectWorldResult.prototype.world_id = 0;

        /**
         * AckConnectWorldResult sender.
         * @member {NFMsg.IIdent|null|undefined} sender
         * @memberof NFMsg.AckConnectWorldResult
         * @instance
         */
        AckConnectWorldResult.prototype.sender = null;

        /**
         * AckConnectWorldResult login_id.
         * @member {number} login_id
         * @memberof NFMsg.AckConnectWorldResult
         * @instance
         */
        AckConnectWorldResult.prototype.login_id = 0;

        /**
         * AckConnectWorldResult account.
         * @member {Uint8Array} account
         * @memberof NFMsg.AckConnectWorldResult
         * @instance
         */
        AckConnectWorldResult.prototype.account = $util.newBuffer([]);

        /**
         * AckConnectWorldResult world_ip.
         * @member {Uint8Array} world_ip
         * @memberof NFMsg.AckConnectWorldResult
         * @instance
         */
        AckConnectWorldResult.prototype.world_ip = $util.newBuffer([]);

        /**
         * AckConnectWorldResult world_port.
         * @member {number} world_port
         * @memberof NFMsg.AckConnectWorldResult
         * @instance
         */
        AckConnectWorldResult.prototype.world_port = 0;

        /**
         * AckConnectWorldResult world_key.
         * @member {Uint8Array} world_key
         * @memberof NFMsg.AckConnectWorldResult
         * @instance
         */
        AckConnectWorldResult.prototype.world_key = $util.newBuffer([]);

        /**
         * Creates a new AckConnectWorldResult instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckConnectWorldResult
         * @static
         * @param {NFMsg.IAckConnectWorldResult=} [properties] Properties to set
         * @returns {NFMsg.AckConnectWorldResult} AckConnectWorldResult instance
         */
        AckConnectWorldResult.create = function create(properties) {
            return new AckConnectWorldResult(properties);
        };

        /**
         * Encodes the specified AckConnectWorldResult message. Does not implicitly {@link NFMsg.AckConnectWorldResult.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckConnectWorldResult
         * @static
         * @param {NFMsg.IAckConnectWorldResult} message AckConnectWorldResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckConnectWorldResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.world_id != null && message.hasOwnProperty("world_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.world_id);
            if (message.sender != null && message.hasOwnProperty("sender"))
                $root.NFMsg.Ident.encode(message.sender, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.login_id != null && message.hasOwnProperty("login_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.login_id);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.account);
            if (message.world_ip != null && message.hasOwnProperty("world_ip"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.world_ip);
            if (message.world_port != null && message.hasOwnProperty("world_port"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.world_port);
            if (message.world_key != null && message.hasOwnProperty("world_key"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.world_key);
            return writer;
        };

        /**
         * Decodes an AckConnectWorldResult message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckConnectWorldResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckConnectWorldResult} AckConnectWorldResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckConnectWorldResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckConnectWorldResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.world_id = reader.int32();
                    break;
                case 2:
                    message.sender = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.login_id = reader.int32();
                    break;
                case 4:
                    message.account = reader.bytes();
                    break;
                case 5:
                    message.world_ip = reader.bytes();
                    break;
                case 6:
                    message.world_port = reader.int32();
                    break;
                case 7:
                    message.world_key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckConnectWorldResult;
    })();

    NFMsg.ReqSelectServer = (function() {

        /**
         * Properties of a ReqSelectServer.
         * @memberof NFMsg
         * @interface IReqSelectServer
         * @property {number|null} [world_id] ReqSelectServer world_id
         */

        /**
         * Constructs a new ReqSelectServer.
         * @memberof NFMsg
         * @classdesc Represents a ReqSelectServer.
         * @implements IReqSelectServer
         * @constructor
         * @param {NFMsg.IReqSelectServer=} [properties] Properties to set
         */
        function ReqSelectServer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSelectServer world_id.
         * @member {number} world_id
         * @memberof NFMsg.ReqSelectServer
         * @instance
         */
        ReqSelectServer.prototype.world_id = 0;

        /**
         * Creates a new ReqSelectServer instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqSelectServer
         * @static
         * @param {NFMsg.IReqSelectServer=} [properties] Properties to set
         * @returns {NFMsg.ReqSelectServer} ReqSelectServer instance
         */
        ReqSelectServer.create = function create(properties) {
            return new ReqSelectServer(properties);
        };

        /**
         * Encodes the specified ReqSelectServer message. Does not implicitly {@link NFMsg.ReqSelectServer.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqSelectServer
         * @static
         * @param {NFMsg.IReqSelectServer} message ReqSelectServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSelectServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.world_id != null && message.hasOwnProperty("world_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.world_id);
            return writer;
        };

        /**
         * Decodes a ReqSelectServer message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqSelectServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqSelectServer} ReqSelectServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSelectServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqSelectServer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.world_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqSelectServer;
    })();

    NFMsg.ReqKickFromWorld = (function() {

        /**
         * Properties of a ReqKickFromWorld.
         * @memberof NFMsg
         * @interface IReqKickFromWorld
         * @property {number|null} [world_id] ReqKickFromWorld world_id
         * @property {Uint8Array|null} [account] ReqKickFromWorld account
         */

        /**
         * Constructs a new ReqKickFromWorld.
         * @memberof NFMsg
         * @classdesc Represents a ReqKickFromWorld.
         * @implements IReqKickFromWorld
         * @constructor
         * @param {NFMsg.IReqKickFromWorld=} [properties] Properties to set
         */
        function ReqKickFromWorld(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqKickFromWorld world_id.
         * @member {number} world_id
         * @memberof NFMsg.ReqKickFromWorld
         * @instance
         */
        ReqKickFromWorld.prototype.world_id = 0;

        /**
         * ReqKickFromWorld account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqKickFromWorld
         * @instance
         */
        ReqKickFromWorld.prototype.account = $util.newBuffer([]);

        /**
         * Creates a new ReqKickFromWorld instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqKickFromWorld
         * @static
         * @param {NFMsg.IReqKickFromWorld=} [properties] Properties to set
         * @returns {NFMsg.ReqKickFromWorld} ReqKickFromWorld instance
         */
        ReqKickFromWorld.create = function create(properties) {
            return new ReqKickFromWorld(properties);
        };

        /**
         * Encodes the specified ReqKickFromWorld message. Does not implicitly {@link NFMsg.ReqKickFromWorld.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqKickFromWorld
         * @static
         * @param {NFMsg.IReqKickFromWorld} message ReqKickFromWorld message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqKickFromWorld.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.world_id != null && message.hasOwnProperty("world_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.world_id);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            return writer;
        };

        /**
         * Decodes a ReqKickFromWorld message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqKickFromWorld
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqKickFromWorld} ReqKickFromWorld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqKickFromWorld.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqKickFromWorld();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.world_id = reader.int32();
                    break;
                case 2:
                    message.account = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqKickFromWorld;
    })();

    NFMsg.ReqRoleList = (function() {

        /**
         * Properties of a ReqRoleList.
         * @memberof NFMsg
         * @interface IReqRoleList
         * @property {number|null} [game_id] ReqRoleList game_id
         * @property {Uint8Array|null} [account] ReqRoleList account
         */

        /**
         * Constructs a new ReqRoleList.
         * @memberof NFMsg
         * @classdesc Represents a ReqRoleList.
         * @implements IReqRoleList
         * @constructor
         * @param {NFMsg.IReqRoleList=} [properties] Properties to set
         */
        function ReqRoleList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqRoleList game_id.
         * @member {number} game_id
         * @memberof NFMsg.ReqRoleList
         * @instance
         */
        ReqRoleList.prototype.game_id = 0;

        /**
         * ReqRoleList account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqRoleList
         * @instance
         */
        ReqRoleList.prototype.account = $util.newBuffer([]);

        /**
         * Creates a new ReqRoleList instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqRoleList
         * @static
         * @param {NFMsg.IReqRoleList=} [properties] Properties to set
         * @returns {NFMsg.ReqRoleList} ReqRoleList instance
         */
        ReqRoleList.create = function create(properties) {
            return new ReqRoleList(properties);
        };

        /**
         * Encodes the specified ReqRoleList message. Does not implicitly {@link NFMsg.ReqRoleList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqRoleList
         * @static
         * @param {NFMsg.IReqRoleList} message ReqRoleList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRoleList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.game_id);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            return writer;
        };

        /**
         * Decodes a ReqRoleList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqRoleList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqRoleList} ReqRoleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRoleList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqRoleList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.game_id = reader.int32();
                    break;
                case 2:
                    message.account = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqRoleList;
    })();

    NFMsg.ReqRoleData = (function() {

        /**
         * Properties of a ReqRoleData.
         * @memberof NFMsg
         * @interface IReqRoleData
         * @property {Uint8Array|null} [noob_name] ReqRoleData noob_name
         * @property {Uint8Array|null} [account] ReqRoleData account
         * @property {NFMsg.IIdent|null} [role_id] ReqRoleData role_id
         */

        /**
         * Constructs a new ReqRoleData.
         * @memberof NFMsg
         * @classdesc Represents a ReqRoleData.
         * @implements IReqRoleData
         * @constructor
         * @param {NFMsg.IReqRoleData=} [properties] Properties to set
         */
        function ReqRoleData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqRoleData noob_name.
         * @member {Uint8Array} noob_name
         * @memberof NFMsg.ReqRoleData
         * @instance
         */
        ReqRoleData.prototype.noob_name = $util.newBuffer([]);

        /**
         * ReqRoleData account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqRoleData
         * @instance
         */
        ReqRoleData.prototype.account = $util.newBuffer([]);

        /**
         * ReqRoleData role_id.
         * @member {NFMsg.IIdent|null|undefined} role_id
         * @memberof NFMsg.ReqRoleData
         * @instance
         */
        ReqRoleData.prototype.role_id = null;

        /**
         * Creates a new ReqRoleData instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqRoleData
         * @static
         * @param {NFMsg.IReqRoleData=} [properties] Properties to set
         * @returns {NFMsg.ReqRoleData} ReqRoleData instance
         */
        ReqRoleData.create = function create(properties) {
            return new ReqRoleData(properties);
        };

        /**
         * Encodes the specified ReqRoleData message. Does not implicitly {@link NFMsg.ReqRoleData.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqRoleData
         * @static
         * @param {NFMsg.IReqRoleData} message ReqRoleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRoleData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.noob_name != null && message.hasOwnProperty("noob_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.noob_name);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                $root.NFMsg.Ident.encode(message.role_id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqRoleData message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqRoleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqRoleData} ReqRoleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRoleData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqRoleData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.noob_name = reader.bytes();
                    break;
                case 2:
                    message.account = reader.bytes();
                    break;
                case 3:
                    message.role_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqRoleData;
    })();

    NFMsg.RoleLiteInfo = (function() {

        /**
         * Properties of a RoleLiteInfo.
         * @memberof NFMsg
         * @interface IRoleLiteInfo
         * @property {NFMsg.IIdent|null} [id] RoleLiteInfo id
         * @property {number|null} [career] RoleLiteInfo career
         * @property {number|null} [sex] RoleLiteInfo sex
         * @property {number|null} [race] RoleLiteInfo race
         * @property {Uint8Array|null} [noob_name] RoleLiteInfo noob_name
         * @property {number|null} [game_id] RoleLiteInfo game_id
         * @property {number|null} [role_level] RoleLiteInfo role_level
         * @property {number|null} [delete_time] RoleLiteInfo delete_time
         * @property {number|null} [reg_time] RoleLiteInfo reg_time
         * @property {number|null} [last_offline_time] RoleLiteInfo last_offline_time
         * @property {number|null} [last_offline_ip] RoleLiteInfo last_offline_ip
         * @property {Uint8Array|null} [view_record] RoleLiteInfo view_record
         */

        /**
         * Constructs a new RoleLiteInfo.
         * @memberof NFMsg
         * @classdesc Represents a RoleLiteInfo.
         * @implements IRoleLiteInfo
         * @constructor
         * @param {NFMsg.IRoleLiteInfo=} [properties] Properties to set
         */
        function RoleLiteInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleLiteInfo id.
         * @member {NFMsg.IIdent|null|undefined} id
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.id = null;

        /**
         * RoleLiteInfo career.
         * @member {number} career
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.career = 0;

        /**
         * RoleLiteInfo sex.
         * @member {number} sex
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.sex = 0;

        /**
         * RoleLiteInfo race.
         * @member {number} race
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.race = 0;

        /**
         * RoleLiteInfo noob_name.
         * @member {Uint8Array} noob_name
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.noob_name = $util.newBuffer([]);

        /**
         * RoleLiteInfo game_id.
         * @member {number} game_id
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.game_id = 0;

        /**
         * RoleLiteInfo role_level.
         * @member {number} role_level
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.role_level = 0;

        /**
         * RoleLiteInfo delete_time.
         * @member {number} delete_time
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.delete_time = 0;

        /**
         * RoleLiteInfo reg_time.
         * @member {number} reg_time
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.reg_time = 0;

        /**
         * RoleLiteInfo last_offline_time.
         * @member {number} last_offline_time
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.last_offline_time = 0;

        /**
         * RoleLiteInfo last_offline_ip.
         * @member {number} last_offline_ip
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.last_offline_ip = 0;

        /**
         * RoleLiteInfo view_record.
         * @member {Uint8Array} view_record
         * @memberof NFMsg.RoleLiteInfo
         * @instance
         */
        RoleLiteInfo.prototype.view_record = $util.newBuffer([]);

        /**
         * Creates a new RoleLiteInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.RoleLiteInfo
         * @static
         * @param {NFMsg.IRoleLiteInfo=} [properties] Properties to set
         * @returns {NFMsg.RoleLiteInfo} RoleLiteInfo instance
         */
        RoleLiteInfo.create = function create(properties) {
            return new RoleLiteInfo(properties);
        };

        /**
         * Encodes the specified RoleLiteInfo message. Does not implicitly {@link NFMsg.RoleLiteInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RoleLiteInfo
         * @static
         * @param {NFMsg.IRoleLiteInfo} message RoleLiteInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleLiteInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                $root.NFMsg.Ident.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.career != null && message.hasOwnProperty("career"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.career);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
            if (message.race != null && message.hasOwnProperty("race"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.race);
            if (message.noob_name != null && message.hasOwnProperty("noob_name"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.noob_name);
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.game_id);
            if (message.role_level != null && message.hasOwnProperty("role_level"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.role_level);
            if (message.delete_time != null && message.hasOwnProperty("delete_time"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.delete_time);
            if (message.reg_time != null && message.hasOwnProperty("reg_time"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.reg_time);
            if (message.last_offline_time != null && message.hasOwnProperty("last_offline_time"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.last_offline_time);
            if (message.last_offline_ip != null && message.hasOwnProperty("last_offline_ip"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.last_offline_ip);
            if (message.view_record != null && message.hasOwnProperty("view_record"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.view_record);
            return writer;
        };

        /**
         * Decodes a RoleLiteInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RoleLiteInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RoleLiteInfo} RoleLiteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleLiteInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RoleLiteInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.career = reader.int32();
                    break;
                case 3:
                    message.sex = reader.int32();
                    break;
                case 4:
                    message.race = reader.int32();
                    break;
                case 5:
                    message.noob_name = reader.bytes();
                    break;
                case 6:
                    message.game_id = reader.int32();
                    break;
                case 7:
                    message.role_level = reader.int32();
                    break;
                case 8:
                    message.delete_time = reader.int32();
                    break;
                case 9:
                    message.reg_time = reader.int32();
                    break;
                case 10:
                    message.last_offline_time = reader.int32();
                    break;
                case 11:
                    message.last_offline_ip = reader.int32();
                    break;
                case 12:
                    message.view_record = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoleLiteInfo;
    })();

    NFMsg.AckRoleLiteInfoList = (function() {

        /**
         * Properties of an AckRoleLiteInfoList.
         * @memberof NFMsg
         * @interface IAckRoleLiteInfoList
         * @property {Array.<NFMsg.IRoleLiteInfo>|null} [char_data] AckRoleLiteInfoList char_data
         * @property {Uint8Array|null} [account] AckRoleLiteInfoList account
         */

        /**
         * Constructs a new AckRoleLiteInfoList.
         * @memberof NFMsg
         * @classdesc Represents an AckRoleLiteInfoList.
         * @implements IAckRoleLiteInfoList
         * @constructor
         * @param {NFMsg.IAckRoleLiteInfoList=} [properties] Properties to set
         */
        function AckRoleLiteInfoList(properties) {
            this.char_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckRoleLiteInfoList char_data.
         * @member {Array.<NFMsg.IRoleLiteInfo>} char_data
         * @memberof NFMsg.AckRoleLiteInfoList
         * @instance
         */
        AckRoleLiteInfoList.prototype.char_data = $util.emptyArray;

        /**
         * AckRoleLiteInfoList account.
         * @member {Uint8Array} account
         * @memberof NFMsg.AckRoleLiteInfoList
         * @instance
         */
        AckRoleLiteInfoList.prototype.account = $util.newBuffer([]);

        /**
         * Creates a new AckRoleLiteInfoList instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckRoleLiteInfoList
         * @static
         * @param {NFMsg.IAckRoleLiteInfoList=} [properties] Properties to set
         * @returns {NFMsg.AckRoleLiteInfoList} AckRoleLiteInfoList instance
         */
        AckRoleLiteInfoList.create = function create(properties) {
            return new AckRoleLiteInfoList(properties);
        };

        /**
         * Encodes the specified AckRoleLiteInfoList message. Does not implicitly {@link NFMsg.AckRoleLiteInfoList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckRoleLiteInfoList
         * @static
         * @param {NFMsg.IAckRoleLiteInfoList} message AckRoleLiteInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckRoleLiteInfoList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.char_data != null && message.char_data.length)
                for (var i = 0; i < message.char_data.length; ++i)
                    $root.NFMsg.RoleLiteInfo.encode(message.char_data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            return writer;
        };

        /**
         * Decodes an AckRoleLiteInfoList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckRoleLiteInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckRoleLiteInfoList} AckRoleLiteInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckRoleLiteInfoList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckRoleLiteInfoList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.char_data && message.char_data.length))
                        message.char_data = [];
                    message.char_data.push($root.NFMsg.RoleLiteInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.account = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckRoleLiteInfoList;
    })();

    NFMsg.ReqCreateRole = (function() {

        /**
         * Properties of a ReqCreateRole.
         * @memberof NFMsg
         * @interface IReqCreateRole
         * @property {Uint8Array|null} [account] ReqCreateRole account
         * @property {number|null} [career] ReqCreateRole career
         * @property {number|null} [sex] ReqCreateRole sex
         * @property {number|null} [race] ReqCreateRole race
         * @property {Uint8Array|null} [noob_name] ReqCreateRole noob_name
         * @property {number|null} [game_id] ReqCreateRole game_id
         */

        /**
         * Constructs a new ReqCreateRole.
         * @memberof NFMsg
         * @classdesc Represents a ReqCreateRole.
         * @implements IReqCreateRole
         * @constructor
         * @param {NFMsg.IReqCreateRole=} [properties] Properties to set
         */
        function ReqCreateRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqCreateRole account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqCreateRole
         * @instance
         */
        ReqCreateRole.prototype.account = $util.newBuffer([]);

        /**
         * ReqCreateRole career.
         * @member {number} career
         * @memberof NFMsg.ReqCreateRole
         * @instance
         */
        ReqCreateRole.prototype.career = 0;

        /**
         * ReqCreateRole sex.
         * @member {number} sex
         * @memberof NFMsg.ReqCreateRole
         * @instance
         */
        ReqCreateRole.prototype.sex = 0;

        /**
         * ReqCreateRole race.
         * @member {number} race
         * @memberof NFMsg.ReqCreateRole
         * @instance
         */
        ReqCreateRole.prototype.race = 0;

        /**
         * ReqCreateRole noob_name.
         * @member {Uint8Array} noob_name
         * @memberof NFMsg.ReqCreateRole
         * @instance
         */
        ReqCreateRole.prototype.noob_name = $util.newBuffer([]);

        /**
         * ReqCreateRole game_id.
         * @member {number} game_id
         * @memberof NFMsg.ReqCreateRole
         * @instance
         */
        ReqCreateRole.prototype.game_id = 0;

        /**
         * Creates a new ReqCreateRole instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqCreateRole
         * @static
         * @param {NFMsg.IReqCreateRole=} [properties] Properties to set
         * @returns {NFMsg.ReqCreateRole} ReqCreateRole instance
         */
        ReqCreateRole.create = function create(properties) {
            return new ReqCreateRole(properties);
        };

        /**
         * Encodes the specified ReqCreateRole message. Does not implicitly {@link NFMsg.ReqCreateRole.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqCreateRole
         * @static
         * @param {NFMsg.IReqCreateRole} message ReqCreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCreateRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.account);
            if (message.career != null && message.hasOwnProperty("career"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.career);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
            if (message.race != null && message.hasOwnProperty("race"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.race);
            if (message.noob_name != null && message.hasOwnProperty("noob_name"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.noob_name);
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.game_id);
            return writer;
        };

        /**
         * Decodes a ReqCreateRole message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqCreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqCreateRole} ReqCreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCreateRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqCreateRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.bytes();
                    break;
                case 2:
                    message.career = reader.int32();
                    break;
                case 3:
                    message.sex = reader.int32();
                    break;
                case 4:
                    message.race = reader.int32();
                    break;
                case 5:
                    message.noob_name = reader.bytes();
                    break;
                case 6:
                    message.game_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqCreateRole;
    })();

    NFMsg.ReqDeleteRole = (function() {

        /**
         * Properties of a ReqDeleteRole.
         * @memberof NFMsg
         * @interface IReqDeleteRole
         * @property {Uint8Array|null} [account] ReqDeleteRole account
         * @property {Uint8Array|null} [name] ReqDeleteRole name
         * @property {number|null} [game_id] ReqDeleteRole game_id
         */

        /**
         * Constructs a new ReqDeleteRole.
         * @memberof NFMsg
         * @classdesc Represents a ReqDeleteRole.
         * @implements IReqDeleteRole
         * @constructor
         * @param {NFMsg.IReqDeleteRole=} [properties] Properties to set
         */
        function ReqDeleteRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqDeleteRole account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqDeleteRole
         * @instance
         */
        ReqDeleteRole.prototype.account = $util.newBuffer([]);

        /**
         * ReqDeleteRole name.
         * @member {Uint8Array} name
         * @memberof NFMsg.ReqDeleteRole
         * @instance
         */
        ReqDeleteRole.prototype.name = $util.newBuffer([]);

        /**
         * ReqDeleteRole game_id.
         * @member {number} game_id
         * @memberof NFMsg.ReqDeleteRole
         * @instance
         */
        ReqDeleteRole.prototype.game_id = 0;

        /**
         * Creates a new ReqDeleteRole instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqDeleteRole
         * @static
         * @param {NFMsg.IReqDeleteRole=} [properties] Properties to set
         * @returns {NFMsg.ReqDeleteRole} ReqDeleteRole instance
         */
        ReqDeleteRole.create = function create(properties) {
            return new ReqDeleteRole(properties);
        };

        /**
         * Encodes the specified ReqDeleteRole message. Does not implicitly {@link NFMsg.ReqDeleteRole.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqDeleteRole
         * @static
         * @param {NFMsg.IReqDeleteRole} message ReqDeleteRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDeleteRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.account);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.name);
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.game_id);
            return writer;
        };

        /**
         * Decodes a ReqDeleteRole message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqDeleteRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqDeleteRole} ReqDeleteRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDeleteRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqDeleteRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.bytes();
                    break;
                case 2:
                    message.name = reader.bytes();
                    break;
                case 3:
                    message.game_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqDeleteRole;
    })();

    NFMsg.ReqRecoverRole = (function() {

        /**
         * Properties of a ReqRecoverRole.
         * @memberof NFMsg
         * @interface IReqRecoverRole
         * @property {Uint8Array|null} [account] ReqRecoverRole account
         * @property {Uint8Array|null} [name] ReqRecoverRole name
         * @property {number|null} [game_id] ReqRecoverRole game_id
         */

        /**
         * Constructs a new ReqRecoverRole.
         * @memberof NFMsg
         * @classdesc Represents a ReqRecoverRole.
         * @implements IReqRecoverRole
         * @constructor
         * @param {NFMsg.IReqRecoverRole=} [properties] Properties to set
         */
        function ReqRecoverRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqRecoverRole account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqRecoverRole
         * @instance
         */
        ReqRecoverRole.prototype.account = $util.newBuffer([]);

        /**
         * ReqRecoverRole name.
         * @member {Uint8Array} name
         * @memberof NFMsg.ReqRecoverRole
         * @instance
         */
        ReqRecoverRole.prototype.name = $util.newBuffer([]);

        /**
         * ReqRecoverRole game_id.
         * @member {number} game_id
         * @memberof NFMsg.ReqRecoverRole
         * @instance
         */
        ReqRecoverRole.prototype.game_id = 0;

        /**
         * Creates a new ReqRecoverRole instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqRecoverRole
         * @static
         * @param {NFMsg.IReqRecoverRole=} [properties] Properties to set
         * @returns {NFMsg.ReqRecoverRole} ReqRecoverRole instance
         */
        ReqRecoverRole.create = function create(properties) {
            return new ReqRecoverRole(properties);
        };

        /**
         * Encodes the specified ReqRecoverRole message. Does not implicitly {@link NFMsg.ReqRecoverRole.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqRecoverRole
         * @static
         * @param {NFMsg.IReqRecoverRole} message ReqRecoverRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRecoverRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.account);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.name);
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.game_id);
            return writer;
        };

        /**
         * Decodes a ReqRecoverRole message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqRecoverRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqRecoverRole} ReqRecoverRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRecoverRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqRecoverRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.bytes();
                    break;
                case 2:
                    message.name = reader.bytes();
                    break;
                case 3:
                    message.game_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqRecoverRole;
    })();

    NFMsg.ServerHeartBeat = (function() {

        /**
         * Properties of a ServerHeartBeat.
         * @memberof NFMsg
         * @interface IServerHeartBeat
         * @property {number|null} [count] ServerHeartBeat count
         */

        /**
         * Constructs a new ServerHeartBeat.
         * @memberof NFMsg
         * @classdesc Represents a ServerHeartBeat.
         * @implements IServerHeartBeat
         * @constructor
         * @param {NFMsg.IServerHeartBeat=} [properties] Properties to set
         */
        function ServerHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerHeartBeat count.
         * @member {number} count
         * @memberof NFMsg.ServerHeartBeat
         * @instance
         */
        ServerHeartBeat.prototype.count = 0;

        /**
         * Creates a new ServerHeartBeat instance using the specified properties.
         * @function create
         * @memberof NFMsg.ServerHeartBeat
         * @static
         * @param {NFMsg.IServerHeartBeat=} [properties] Properties to set
         * @returns {NFMsg.ServerHeartBeat} ServerHeartBeat instance
         */
        ServerHeartBeat.create = function create(properties) {
            return new ServerHeartBeat(properties);
        };

        /**
         * Encodes the specified ServerHeartBeat message. Does not implicitly {@link NFMsg.ServerHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ServerHeartBeat
         * @static
         * @param {NFMsg.IServerHeartBeat} message ServerHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
            return writer;
        };

        /**
         * Decodes a ServerHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ServerHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ServerHeartBeat} ServerHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ServerHeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ServerHeartBeat;
    })();

    NFMsg.RoleOnlineNotify = (function() {

        /**
         * Properties of a RoleOnlineNotify.
         * @memberof NFMsg
         * @interface IRoleOnlineNotify
         * @property {NFMsg.IIdent|null} [self] RoleOnlineNotify self
         * @property {NFMsg.IIdent|null} [guild] RoleOnlineNotify guild
         * @property {number|null} [game] RoleOnlineNotify game
         * @property {number|null} [proxy] RoleOnlineNotify proxy
         */

        /**
         * Constructs a new RoleOnlineNotify.
         * @memberof NFMsg
         * @classdesc Represents a RoleOnlineNotify.
         * @implements IRoleOnlineNotify
         * @constructor
         * @param {NFMsg.IRoleOnlineNotify=} [properties] Properties to set
         */
        function RoleOnlineNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleOnlineNotify self.
         * @member {NFMsg.IIdent|null|undefined} self
         * @memberof NFMsg.RoleOnlineNotify
         * @instance
         */
        RoleOnlineNotify.prototype.self = null;

        /**
         * RoleOnlineNotify guild.
         * @member {NFMsg.IIdent|null|undefined} guild
         * @memberof NFMsg.RoleOnlineNotify
         * @instance
         */
        RoleOnlineNotify.prototype.guild = null;

        /**
         * RoleOnlineNotify game.
         * @member {number} game
         * @memberof NFMsg.RoleOnlineNotify
         * @instance
         */
        RoleOnlineNotify.prototype.game = 0;

        /**
         * RoleOnlineNotify proxy.
         * @member {number} proxy
         * @memberof NFMsg.RoleOnlineNotify
         * @instance
         */
        RoleOnlineNotify.prototype.proxy = 0;

        /**
         * Creates a new RoleOnlineNotify instance using the specified properties.
         * @function create
         * @memberof NFMsg.RoleOnlineNotify
         * @static
         * @param {NFMsg.IRoleOnlineNotify=} [properties] Properties to set
         * @returns {NFMsg.RoleOnlineNotify} RoleOnlineNotify instance
         */
        RoleOnlineNotify.create = function create(properties) {
            return new RoleOnlineNotify(properties);
        };

        /**
         * Encodes the specified RoleOnlineNotify message. Does not implicitly {@link NFMsg.RoleOnlineNotify.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RoleOnlineNotify
         * @static
         * @param {NFMsg.IRoleOnlineNotify} message RoleOnlineNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleOnlineNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self != null && message.hasOwnProperty("self"))
                $root.NFMsg.Ident.encode(message.self, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guild != null && message.hasOwnProperty("guild"))
                $root.NFMsg.Ident.encode(message.guild, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.game != null && message.hasOwnProperty("game"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.game);
            if (message.proxy != null && message.hasOwnProperty("proxy"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.proxy);
            return writer;
        };

        /**
         * Decodes a RoleOnlineNotify message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RoleOnlineNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RoleOnlineNotify} RoleOnlineNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleOnlineNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RoleOnlineNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.guild = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.game = reader.int32();
                    break;
                case 4:
                    message.proxy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoleOnlineNotify;
    })();

    NFMsg.RoleOfflineNotify = (function() {

        /**
         * Properties of a RoleOfflineNotify.
         * @memberof NFMsg
         * @interface IRoleOfflineNotify
         * @property {NFMsg.IIdent|null} [self] RoleOfflineNotify self
         * @property {NFMsg.IIdent|null} [guild] RoleOfflineNotify guild
         * @property {number|null} [game] RoleOfflineNotify game
         * @property {number|null} [proxy] RoleOfflineNotify proxy
         */

        /**
         * Constructs a new RoleOfflineNotify.
         * @memberof NFMsg
         * @classdesc Represents a RoleOfflineNotify.
         * @implements IRoleOfflineNotify
         * @constructor
         * @param {NFMsg.IRoleOfflineNotify=} [properties] Properties to set
         */
        function RoleOfflineNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleOfflineNotify self.
         * @member {NFMsg.IIdent|null|undefined} self
         * @memberof NFMsg.RoleOfflineNotify
         * @instance
         */
        RoleOfflineNotify.prototype.self = null;

        /**
         * RoleOfflineNotify guild.
         * @member {NFMsg.IIdent|null|undefined} guild
         * @memberof NFMsg.RoleOfflineNotify
         * @instance
         */
        RoleOfflineNotify.prototype.guild = null;

        /**
         * RoleOfflineNotify game.
         * @member {number} game
         * @memberof NFMsg.RoleOfflineNotify
         * @instance
         */
        RoleOfflineNotify.prototype.game = 0;

        /**
         * RoleOfflineNotify proxy.
         * @member {number} proxy
         * @memberof NFMsg.RoleOfflineNotify
         * @instance
         */
        RoleOfflineNotify.prototype.proxy = 0;

        /**
         * Creates a new RoleOfflineNotify instance using the specified properties.
         * @function create
         * @memberof NFMsg.RoleOfflineNotify
         * @static
         * @param {NFMsg.IRoleOfflineNotify=} [properties] Properties to set
         * @returns {NFMsg.RoleOfflineNotify} RoleOfflineNotify instance
         */
        RoleOfflineNotify.create = function create(properties) {
            return new RoleOfflineNotify(properties);
        };

        /**
         * Encodes the specified RoleOfflineNotify message. Does not implicitly {@link NFMsg.RoleOfflineNotify.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RoleOfflineNotify
         * @static
         * @param {NFMsg.IRoleOfflineNotify} message RoleOfflineNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleOfflineNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self != null && message.hasOwnProperty("self"))
                $root.NFMsg.Ident.encode(message.self, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guild != null && message.hasOwnProperty("guild"))
                $root.NFMsg.Ident.encode(message.guild, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.game != null && message.hasOwnProperty("game"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.game);
            if (message.proxy != null && message.hasOwnProperty("proxy"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.proxy);
            return writer;
        };

        /**
         * Decodes a RoleOfflineNotify message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RoleOfflineNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RoleOfflineNotify} RoleOfflineNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleOfflineNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RoleOfflineNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.guild = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.game = reader.int32();
                    break;
                case 4:
                    message.proxy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoleOfflineNotify;
    })();

    NFMsg.RoleDataPack = (function() {

        /**
         * Properties of a RoleDataPack.
         * @memberof NFMsg
         * @interface IRoleDataPack
         * @property {NFMsg.IIdent|null} [id] RoleDataPack id
         * @property {NFMsg.IObjectPropertyList|null} [property] RoleDataPack property
         * @property {NFMsg.IObjectRecordList|null} [record] RoleDataPack record
         */

        /**
         * Constructs a new RoleDataPack.
         * @memberof NFMsg
         * @classdesc Represents a RoleDataPack.
         * @implements IRoleDataPack
         * @constructor
         * @param {NFMsg.IRoleDataPack=} [properties] Properties to set
         */
        function RoleDataPack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleDataPack id.
         * @member {NFMsg.IIdent|null|undefined} id
         * @memberof NFMsg.RoleDataPack
         * @instance
         */
        RoleDataPack.prototype.id = null;

        /**
         * RoleDataPack property.
         * @member {NFMsg.IObjectPropertyList|null|undefined} property
         * @memberof NFMsg.RoleDataPack
         * @instance
         */
        RoleDataPack.prototype.property = null;

        /**
         * RoleDataPack record.
         * @member {NFMsg.IObjectRecordList|null|undefined} record
         * @memberof NFMsg.RoleDataPack
         * @instance
         */
        RoleDataPack.prototype.record = null;

        /**
         * Creates a new RoleDataPack instance using the specified properties.
         * @function create
         * @memberof NFMsg.RoleDataPack
         * @static
         * @param {NFMsg.IRoleDataPack=} [properties] Properties to set
         * @returns {NFMsg.RoleDataPack} RoleDataPack instance
         */
        RoleDataPack.create = function create(properties) {
            return new RoleDataPack(properties);
        };

        /**
         * Encodes the specified RoleDataPack message. Does not implicitly {@link NFMsg.RoleDataPack.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.RoleDataPack
         * @static
         * @param {NFMsg.IRoleDataPack} message RoleDataPack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleDataPack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                $root.NFMsg.Ident.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.property != null && message.hasOwnProperty("property"))
                $root.NFMsg.ObjectPropertyList.encode(message.property, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.record != null && message.hasOwnProperty("record"))
                $root.NFMsg.ObjectRecordList.encode(message.record, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RoleDataPack message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.RoleDataPack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.RoleDataPack} RoleDataPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleDataPack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.RoleDataPack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.property = $root.NFMsg.ObjectPropertyList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.record = $root.NFMsg.ObjectRecordList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoleDataPack;
    })();

    NFMsg.ReqEnterGameServer = (function() {

        /**
         * Properties of a ReqEnterGameServer.
         * @memberof NFMsg
         * @interface IReqEnterGameServer
         * @property {NFMsg.IIdent|null} [id] ReqEnterGameServer id
         * @property {Uint8Array|null} [account] ReqEnterGameServer account
         * @property {number|null} [game_id] ReqEnterGameServer game_id
         * @property {Uint8Array|null} [name] ReqEnterGameServer name
         */

        /**
         * Constructs a new ReqEnterGameServer.
         * @memberof NFMsg
         * @classdesc Represents a ReqEnterGameServer.
         * @implements IReqEnterGameServer
         * @constructor
         * @param {NFMsg.IReqEnterGameServer=} [properties] Properties to set
         */
        function ReqEnterGameServer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEnterGameServer id.
         * @member {NFMsg.IIdent|null|undefined} id
         * @memberof NFMsg.ReqEnterGameServer
         * @instance
         */
        ReqEnterGameServer.prototype.id = null;

        /**
         * ReqEnterGameServer account.
         * @member {Uint8Array} account
         * @memberof NFMsg.ReqEnterGameServer
         * @instance
         */
        ReqEnterGameServer.prototype.account = $util.newBuffer([]);

        /**
         * ReqEnterGameServer game_id.
         * @member {number} game_id
         * @memberof NFMsg.ReqEnterGameServer
         * @instance
         */
        ReqEnterGameServer.prototype.game_id = 0;

        /**
         * ReqEnterGameServer name.
         * @member {Uint8Array} name
         * @memberof NFMsg.ReqEnterGameServer
         * @instance
         */
        ReqEnterGameServer.prototype.name = $util.newBuffer([]);

        /**
         * Creates a new ReqEnterGameServer instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqEnterGameServer
         * @static
         * @param {NFMsg.IReqEnterGameServer=} [properties] Properties to set
         * @returns {NFMsg.ReqEnterGameServer} ReqEnterGameServer instance
         */
        ReqEnterGameServer.create = function create(properties) {
            return new ReqEnterGameServer(properties);
        };

        /**
         * Encodes the specified ReqEnterGameServer message. Does not implicitly {@link NFMsg.ReqEnterGameServer.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqEnterGameServer
         * @static
         * @param {NFMsg.IReqEnterGameServer} message ReqEnterGameServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterGameServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                $root.NFMsg.Ident.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.account);
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.game_id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.name);
            return writer;
        };

        /**
         * Decodes a ReqEnterGameServer message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqEnterGameServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqEnterGameServer} ReqEnterGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterGameServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqEnterGameServer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.account = reader.bytes();
                    break;
                case 3:
                    message.game_id = reader.int32();
                    break;
                case 4:
                    message.name = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqEnterGameServer;
    })();

    NFMsg.ReqAckEnterGameSuccess = (function() {

        /**
         * Properties of a ReqAckEnterGameSuccess.
         * @memberof NFMsg
         * @interface IReqAckEnterGameSuccess
         * @property {number|null} [arg] ReqAckEnterGameSuccess arg
         */

        /**
         * Constructs a new ReqAckEnterGameSuccess.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckEnterGameSuccess.
         * @implements IReqAckEnterGameSuccess
         * @constructor
         * @param {NFMsg.IReqAckEnterGameSuccess=} [properties] Properties to set
         */
        function ReqAckEnterGameSuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckEnterGameSuccess arg.
         * @member {number} arg
         * @memberof NFMsg.ReqAckEnterGameSuccess
         * @instance
         */
        ReqAckEnterGameSuccess.prototype.arg = 0;

        /**
         * Creates a new ReqAckEnterGameSuccess instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckEnterGameSuccess
         * @static
         * @param {NFMsg.IReqAckEnterGameSuccess=} [properties] Properties to set
         * @returns {NFMsg.ReqAckEnterGameSuccess} ReqAckEnterGameSuccess instance
         */
        ReqAckEnterGameSuccess.create = function create(properties) {
            return new ReqAckEnterGameSuccess(properties);
        };

        /**
         * Encodes the specified ReqAckEnterGameSuccess message. Does not implicitly {@link NFMsg.ReqAckEnterGameSuccess.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckEnterGameSuccess
         * @static
         * @param {NFMsg.IReqAckEnterGameSuccess} message ReqAckEnterGameSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckEnterGameSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.arg != null && message.hasOwnProperty("arg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.arg);
            return writer;
        };

        /**
         * Decodes a ReqAckEnterGameSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckEnterGameSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckEnterGameSuccess} ReqAckEnterGameSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckEnterGameSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckEnterGameSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.arg = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckEnterGameSuccess;
    })();

    NFMsg.ReqHeartBeat = (function() {

        /**
         * Properties of a ReqHeartBeat.
         * @memberof NFMsg
         * @interface IReqHeartBeat
         * @property {number|null} [arg] ReqHeartBeat arg
         */

        /**
         * Constructs a new ReqHeartBeat.
         * @memberof NFMsg
         * @classdesc Represents a ReqHeartBeat.
         * @implements IReqHeartBeat
         * @constructor
         * @param {NFMsg.IReqHeartBeat=} [properties] Properties to set
         */
        function ReqHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqHeartBeat arg.
         * @member {number} arg
         * @memberof NFMsg.ReqHeartBeat
         * @instance
         */
        ReqHeartBeat.prototype.arg = 0;

        /**
         * Creates a new ReqHeartBeat instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqHeartBeat
         * @static
         * @param {NFMsg.IReqHeartBeat=} [properties] Properties to set
         * @returns {NFMsg.ReqHeartBeat} ReqHeartBeat instance
         */
        ReqHeartBeat.create = function create(properties) {
            return new ReqHeartBeat(properties);
        };

        /**
         * Encodes the specified ReqHeartBeat message. Does not implicitly {@link NFMsg.ReqHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqHeartBeat
         * @static
         * @param {NFMsg.IReqHeartBeat} message ReqHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.arg != null && message.hasOwnProperty("arg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.arg);
            return writer;
        };

        /**
         * Decodes a ReqHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqHeartBeat} ReqHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqHeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.arg = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqHeartBeat;
    })();

    NFMsg.ReqLeaveGameServer = (function() {

        /**
         * Properties of a ReqLeaveGameServer.
         * @memberof NFMsg
         * @interface IReqLeaveGameServer
         * @property {number|null} [arg] ReqLeaveGameServer arg
         */

        /**
         * Constructs a new ReqLeaveGameServer.
         * @memberof NFMsg
         * @classdesc Represents a ReqLeaveGameServer.
         * @implements IReqLeaveGameServer
         * @constructor
         * @param {NFMsg.IReqLeaveGameServer=} [properties] Properties to set
         */
        function ReqLeaveGameServer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLeaveGameServer arg.
         * @member {number} arg
         * @memberof NFMsg.ReqLeaveGameServer
         * @instance
         */
        ReqLeaveGameServer.prototype.arg = 0;

        /**
         * Creates a new ReqLeaveGameServer instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqLeaveGameServer
         * @static
         * @param {NFMsg.IReqLeaveGameServer=} [properties] Properties to set
         * @returns {NFMsg.ReqLeaveGameServer} ReqLeaveGameServer instance
         */
        ReqLeaveGameServer.create = function create(properties) {
            return new ReqLeaveGameServer(properties);
        };

        /**
         * Encodes the specified ReqLeaveGameServer message. Does not implicitly {@link NFMsg.ReqLeaveGameServer.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqLeaveGameServer
         * @static
         * @param {NFMsg.IReqLeaveGameServer} message ReqLeaveGameServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveGameServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.arg != null && message.hasOwnProperty("arg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.arg);
            return writer;
        };

        /**
         * Decodes a ReqLeaveGameServer message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqLeaveGameServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqLeaveGameServer} ReqLeaveGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveGameServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqLeaveGameServer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.arg = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqLeaveGameServer;
    })();

    NFMsg.PlayerEntryInfo = (function() {

        /**
         * Properties of a PlayerEntryInfo.
         * @memberof NFMsg
         * @interface IPlayerEntryInfo
         * @property {NFMsg.IIdent|null} [object_guid] PlayerEntryInfo object_guid
         * @property {number|null} [x] PlayerEntryInfo x
         * @property {number|null} [y] PlayerEntryInfo y
         * @property {number|null} [z] PlayerEntryInfo z
         * @property {number|null} [career_type] PlayerEntryInfo career_type
         * @property {number|null} [player_state] PlayerEntryInfo player_state
         * @property {Uint8Array|null} [config_id] PlayerEntryInfo config_id
         * @property {number|null} [scene_id] PlayerEntryInfo scene_id
         * @property {Uint8Array|null} [class_id] PlayerEntryInfo class_id
         */

        /**
         * Constructs a new PlayerEntryInfo.
         * @memberof NFMsg
         * @classdesc Represents a PlayerEntryInfo.
         * @implements IPlayerEntryInfo
         * @constructor
         * @param {NFMsg.IPlayerEntryInfo=} [properties] Properties to set
         */
        function PlayerEntryInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerEntryInfo object_guid.
         * @member {NFMsg.IIdent|null|undefined} object_guid
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.object_guid = null;

        /**
         * PlayerEntryInfo x.
         * @member {number} x
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.x = 0;

        /**
         * PlayerEntryInfo y.
         * @member {number} y
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.y = 0;

        /**
         * PlayerEntryInfo z.
         * @member {number} z
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.z = 0;

        /**
         * PlayerEntryInfo career_type.
         * @member {number} career_type
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.career_type = 0;

        /**
         * PlayerEntryInfo player_state.
         * @member {number} player_state
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.player_state = 0;

        /**
         * PlayerEntryInfo config_id.
         * @member {Uint8Array} config_id
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.config_id = $util.newBuffer([]);

        /**
         * PlayerEntryInfo scene_id.
         * @member {number} scene_id
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.scene_id = 0;

        /**
         * PlayerEntryInfo class_id.
         * @member {Uint8Array} class_id
         * @memberof NFMsg.PlayerEntryInfo
         * @instance
         */
        PlayerEntryInfo.prototype.class_id = $util.newBuffer([]);

        /**
         * Creates a new PlayerEntryInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.PlayerEntryInfo
         * @static
         * @param {NFMsg.IPlayerEntryInfo=} [properties] Properties to set
         * @returns {NFMsg.PlayerEntryInfo} PlayerEntryInfo instance
         */
        PlayerEntryInfo.create = function create(properties) {
            return new PlayerEntryInfo(properties);
        };

        /**
         * Encodes the specified PlayerEntryInfo message. Does not implicitly {@link NFMsg.PlayerEntryInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PlayerEntryInfo
         * @static
         * @param {NFMsg.IPlayerEntryInfo} message PlayerEntryInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEntryInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.object_guid != null && message.hasOwnProperty("object_guid"))
                $root.NFMsg.Ident.encode(message.object_guid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
            if (message.z != null && message.hasOwnProperty("z"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.z);
            if (message.career_type != null && message.hasOwnProperty("career_type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.career_type);
            if (message.player_state != null && message.hasOwnProperty("player_state"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.player_state);
            if (message.config_id != null && message.hasOwnProperty("config_id"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.config_id);
            if (message.scene_id != null && message.hasOwnProperty("scene_id"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.scene_id);
            if (message.class_id != null && message.hasOwnProperty("class_id"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.class_id);
            return writer;
        };

        /**
         * Decodes a PlayerEntryInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PlayerEntryInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PlayerEntryInfo} PlayerEntryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEntryInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PlayerEntryInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.object_guid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.x = reader.float();
                    break;
                case 3:
                    message.y = reader.float();
                    break;
                case 4:
                    message.z = reader.float();
                    break;
                case 5:
                    message.career_type = reader.int32();
                    break;
                case 6:
                    message.player_state = reader.int32();
                    break;
                case 7:
                    message.config_id = reader.bytes();
                    break;
                case 8:
                    message.scene_id = reader.int32();
                    break;
                case 9:
                    message.class_id = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PlayerEntryInfo;
    })();

    NFMsg.AckPlayerEntryList = (function() {

        /**
         * Properties of an AckPlayerEntryList.
         * @memberof NFMsg
         * @interface IAckPlayerEntryList
         * @property {Array.<NFMsg.IPlayerEntryInfo>|null} [object_list] AckPlayerEntryList object_list
         */

        /**
         * Constructs a new AckPlayerEntryList.
         * @memberof NFMsg
         * @classdesc Represents an AckPlayerEntryList.
         * @implements IAckPlayerEntryList
         * @constructor
         * @param {NFMsg.IAckPlayerEntryList=} [properties] Properties to set
         */
        function AckPlayerEntryList(properties) {
            this.object_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckPlayerEntryList object_list.
         * @member {Array.<NFMsg.IPlayerEntryInfo>} object_list
         * @memberof NFMsg.AckPlayerEntryList
         * @instance
         */
        AckPlayerEntryList.prototype.object_list = $util.emptyArray;

        /**
         * Creates a new AckPlayerEntryList instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckPlayerEntryList
         * @static
         * @param {NFMsg.IAckPlayerEntryList=} [properties] Properties to set
         * @returns {NFMsg.AckPlayerEntryList} AckPlayerEntryList instance
         */
        AckPlayerEntryList.create = function create(properties) {
            return new AckPlayerEntryList(properties);
        };

        /**
         * Encodes the specified AckPlayerEntryList message. Does not implicitly {@link NFMsg.AckPlayerEntryList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckPlayerEntryList
         * @static
         * @param {NFMsg.IAckPlayerEntryList} message AckPlayerEntryList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerEntryList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.object_list != null && message.object_list.length)
                for (var i = 0; i < message.object_list.length; ++i)
                    $root.NFMsg.PlayerEntryInfo.encode(message.object_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckPlayerEntryList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckPlayerEntryList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckPlayerEntryList} AckPlayerEntryList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerEntryList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckPlayerEntryList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.object_list && message.object_list.length))
                        message.object_list = [];
                    message.object_list.push($root.NFMsg.PlayerEntryInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckPlayerEntryList;
    })();

    NFMsg.AckPlayerLeaveList = (function() {

        /**
         * Properties of an AckPlayerLeaveList.
         * @memberof NFMsg
         * @interface IAckPlayerLeaveList
         * @property {Array.<NFMsg.IIdent>|null} [object_list] AckPlayerLeaveList object_list
         */

        /**
         * Constructs a new AckPlayerLeaveList.
         * @memberof NFMsg
         * @classdesc Represents an AckPlayerLeaveList.
         * @implements IAckPlayerLeaveList
         * @constructor
         * @param {NFMsg.IAckPlayerLeaveList=} [properties] Properties to set
         */
        function AckPlayerLeaveList(properties) {
            this.object_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckPlayerLeaveList object_list.
         * @member {Array.<NFMsg.IIdent>} object_list
         * @memberof NFMsg.AckPlayerLeaveList
         * @instance
         */
        AckPlayerLeaveList.prototype.object_list = $util.emptyArray;

        /**
         * Creates a new AckPlayerLeaveList instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckPlayerLeaveList
         * @static
         * @param {NFMsg.IAckPlayerLeaveList=} [properties] Properties to set
         * @returns {NFMsg.AckPlayerLeaveList} AckPlayerLeaveList instance
         */
        AckPlayerLeaveList.create = function create(properties) {
            return new AckPlayerLeaveList(properties);
        };

        /**
         * Encodes the specified AckPlayerLeaveList message. Does not implicitly {@link NFMsg.AckPlayerLeaveList.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckPlayerLeaveList
         * @static
         * @param {NFMsg.IAckPlayerLeaveList} message AckPlayerLeaveList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerLeaveList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.object_list != null && message.object_list.length)
                for (var i = 0; i < message.object_list.length; ++i)
                    $root.NFMsg.Ident.encode(message.object_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckPlayerLeaveList message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckPlayerLeaveList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckPlayerLeaveList} AckPlayerLeaveList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerLeaveList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckPlayerLeaveList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.object_list && message.object_list.length))
                        message.object_list = [];
                    message.object_list.push($root.NFMsg.Ident.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckPlayerLeaveList;
    })();

    NFMsg.ReqAckSynData = (function() {

        /**
         * Properties of a ReqAckSynData.
         * @memberof NFMsg
         * @interface IReqAckSynData
         * @property {NFMsg.IIdent|null} [syser] ReqAckSynData syser
         * @property {Array.<NFMsg.IIdent>|null} [object_list] ReqAckSynData object_list
         * @property {Uint8Array|null} [data] ReqAckSynData data
         * @property {NFMsg.ReqAckSynData.SynType|null} [syn_type] ReqAckSynData syn_type
         * @property {NFMsg.ESynMsgID|null} [msg_id] ReqAckSynData msg_id
         */

        /**
         * Constructs a new ReqAckSynData.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckSynData.
         * @implements IReqAckSynData
         * @constructor
         * @param {NFMsg.IReqAckSynData=} [properties] Properties to set
         */
        function ReqAckSynData(properties) {
            this.object_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckSynData syser.
         * @member {NFMsg.IIdent|null|undefined} syser
         * @memberof NFMsg.ReqAckSynData
         * @instance
         */
        ReqAckSynData.prototype.syser = null;

        /**
         * ReqAckSynData object_list.
         * @member {Array.<NFMsg.IIdent>} object_list
         * @memberof NFMsg.ReqAckSynData
         * @instance
         */
        ReqAckSynData.prototype.object_list = $util.emptyArray;

        /**
         * ReqAckSynData data.
         * @member {Uint8Array} data
         * @memberof NFMsg.ReqAckSynData
         * @instance
         */
        ReqAckSynData.prototype.data = $util.newBuffer([]);

        /**
         * ReqAckSynData syn_type.
         * @member {NFMsg.ReqAckSynData.SynType} syn_type
         * @memberof NFMsg.ReqAckSynData
         * @instance
         */
        ReqAckSynData.prototype.syn_type = 0;

        /**
         * ReqAckSynData msg_id.
         * @member {NFMsg.ESynMsgID} msg_id
         * @memberof NFMsg.ReqAckSynData
         * @instance
         */
        ReqAckSynData.prototype.msg_id = 0;

        /**
         * Creates a new ReqAckSynData instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckSynData
         * @static
         * @param {NFMsg.IReqAckSynData=} [properties] Properties to set
         * @returns {NFMsg.ReqAckSynData} ReqAckSynData instance
         */
        ReqAckSynData.create = function create(properties) {
            return new ReqAckSynData(properties);
        };

        /**
         * Encodes the specified ReqAckSynData message. Does not implicitly {@link NFMsg.ReqAckSynData.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckSynData
         * @static
         * @param {NFMsg.IReqAckSynData} message ReqAckSynData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckSynData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.syser != null && message.hasOwnProperty("syser"))
                $root.NFMsg.Ident.encode(message.syser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.object_list != null && message.object_list.length)
                for (var i = 0; i < message.object_list.length; ++i)
                    $root.NFMsg.Ident.encode(message.object_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            if (message.syn_type != null && message.hasOwnProperty("syn_type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.syn_type);
            if (message.msg_id != null && message.hasOwnProperty("msg_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.msg_id);
            return writer;
        };

        /**
         * Decodes a ReqAckSynData message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckSynData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckSynData} ReqAckSynData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckSynData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckSynData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.syser = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.object_list && message.object_list.length))
                        message.object_list = [];
                    message.object_list.push($root.NFMsg.Ident.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.syn_type = reader.int32();
                    break;
                case 5:
                    message.msg_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * SynType enum.
         * @name NFMsg.ReqAckSynData.SynType
         * @enum {string}
         * @property {number} EST_UNKNOW=0 EST_UNKNOW value
         * @property {number} EST_GROUP=1 EST_GROUP value
         * @property {number} EST_SCENE=2 EST_SCENE value
         * @property {number} EST_GUILD=3 EST_GUILD value
         * @property {number} EST_FRIEND=4 EST_FRIEND value
         */
        ReqAckSynData.SynType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EST_UNKNOW"] = 0;
            values[valuesById[1] = "EST_GROUP"] = 1;
            values[valuesById[2] = "EST_SCENE"] = 2;
            values[valuesById[3] = "EST_GUILD"] = 3;
            values[valuesById[4] = "EST_FRIEND"] = 4;
            return values;
        })();

        return ReqAckSynData;
    })();

    NFMsg.ReqAckPlayerMove = (function() {

        /**
         * Properties of a ReqAckPlayerMove.
         * @memberof NFMsg
         * @interface IReqAckPlayerMove
         * @property {NFMsg.IIdent|null} [mover] ReqAckPlayerMove mover
         * @property {number|null} [moveType] ReqAckPlayerMove moveType
         * @property {number|null} [speed] ReqAckPlayerMove speed
         * @property {number|null} [time] ReqAckPlayerMove time
         * @property {number|null} [lastState] ReqAckPlayerMove lastState
         * @property {Array.<NFMsg.IVector3>|null} [target_pos] ReqAckPlayerMove target_pos
         * @property {Array.<NFMsg.IVector3>|null} [source_pos] ReqAckPlayerMove source_pos
         * @property {Array.<NFMsg.IVector3>|null} [move_direction] ReqAckPlayerMove move_direction
         */

        /**
         * Constructs a new ReqAckPlayerMove.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckPlayerMove.
         * @implements IReqAckPlayerMove
         * @constructor
         * @param {NFMsg.IReqAckPlayerMove=} [properties] Properties to set
         */
        function ReqAckPlayerMove(properties) {
            this.target_pos = [];
            this.source_pos = [];
            this.move_direction = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckPlayerMove mover.
         * @member {NFMsg.IIdent|null|undefined} mover
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.mover = null;

        /**
         * ReqAckPlayerMove moveType.
         * @member {number} moveType
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.moveType = 0;

        /**
         * ReqAckPlayerMove speed.
         * @member {number} speed
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.speed = 0;

        /**
         * ReqAckPlayerMove time.
         * @member {number} time
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.time = 0;

        /**
         * ReqAckPlayerMove lastState.
         * @member {number} lastState
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.lastState = 0;

        /**
         * ReqAckPlayerMove target_pos.
         * @member {Array.<NFMsg.IVector3>} target_pos
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.target_pos = $util.emptyArray;

        /**
         * ReqAckPlayerMove source_pos.
         * @member {Array.<NFMsg.IVector3>} source_pos
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.source_pos = $util.emptyArray;

        /**
         * ReqAckPlayerMove move_direction.
         * @member {Array.<NFMsg.IVector3>} move_direction
         * @memberof NFMsg.ReqAckPlayerMove
         * @instance
         */
        ReqAckPlayerMove.prototype.move_direction = $util.emptyArray;

        /**
         * Creates a new ReqAckPlayerMove instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckPlayerMove
         * @static
         * @param {NFMsg.IReqAckPlayerMove=} [properties] Properties to set
         * @returns {NFMsg.ReqAckPlayerMove} ReqAckPlayerMove instance
         */
        ReqAckPlayerMove.create = function create(properties) {
            return new ReqAckPlayerMove(properties);
        };

        /**
         * Encodes the specified ReqAckPlayerMove message. Does not implicitly {@link NFMsg.ReqAckPlayerMove.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckPlayerMove
         * @static
         * @param {NFMsg.IReqAckPlayerMove} message ReqAckPlayerMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckPlayerMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mover != null && message.hasOwnProperty("mover"))
                $root.NFMsg.Ident.encode(message.mover, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.moveType != null && message.hasOwnProperty("moveType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.moveType);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.speed);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.time);
            if (message.lastState != null && message.hasOwnProperty("lastState"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.lastState);
            if (message.target_pos != null && message.target_pos.length)
                for (var i = 0; i < message.target_pos.length; ++i)
                    $root.NFMsg.Vector3.encode(message.target_pos[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.source_pos != null && message.source_pos.length)
                for (var i = 0; i < message.source_pos.length; ++i)
                    $root.NFMsg.Vector3.encode(message.source_pos[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.move_direction != null && message.move_direction.length)
                for (var i = 0; i < message.move_direction.length; ++i)
                    $root.NFMsg.Vector3.encode(message.move_direction[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckPlayerMove message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckPlayerMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckPlayerMove} ReqAckPlayerMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckPlayerMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckPlayerMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mover = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.moveType = reader.int32();
                    break;
                case 3:
                    message.speed = reader.float();
                    break;
                case 4:
                    message.time = reader.int32();
                    break;
                case 5:
                    message.lastState = reader.int32();
                    break;
                case 6:
                    if (!(message.target_pos && message.target_pos.length))
                        message.target_pos = [];
                    message.target_pos.push($root.NFMsg.Vector3.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.source_pos && message.source_pos.length))
                        message.source_pos = [];
                    message.source_pos.push($root.NFMsg.Vector3.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.move_direction && message.move_direction.length))
                        message.move_direction = [];
                    message.move_direction.push($root.NFMsg.Vector3.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckPlayerMove;
    })();

    NFMsg.ReqAckPlayerChat = (function() {

        /**
         * Properties of a ReqAckPlayerChat.
         * @memberof NFMsg
         * @interface IReqAckPlayerChat
         * @property {NFMsg.IIdent|null} [chat_id] ReqAckPlayerChat chat_id
         * @property {NFMsg.ReqAckPlayerChat.EGameChatType|null} [chat_type] ReqAckPlayerChat chat_type
         * @property {Uint8Array|null} [chat_info] ReqAckPlayerChat chat_info
         * @property {Uint8Array|null} [chat_name] ReqAckPlayerChat chat_name
         * @property {NFMsg.IIdent|null} [target_id] ReqAckPlayerChat target_id
         * @property {Array.<NFMsg.ReqAckPlayerChat.IChatContainer>|null} [Container_data] ReqAckPlayerChat Container_data
         */

        /**
         * Constructs a new ReqAckPlayerChat.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckPlayerChat.
         * @implements IReqAckPlayerChat
         * @constructor
         * @param {NFMsg.IReqAckPlayerChat=} [properties] Properties to set
         */
        function ReqAckPlayerChat(properties) {
            this.Container_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckPlayerChat chat_id.
         * @member {NFMsg.IIdent|null|undefined} chat_id
         * @memberof NFMsg.ReqAckPlayerChat
         * @instance
         */
        ReqAckPlayerChat.prototype.chat_id = null;

        /**
         * ReqAckPlayerChat chat_type.
         * @member {NFMsg.ReqAckPlayerChat.EGameChatType} chat_type
         * @memberof NFMsg.ReqAckPlayerChat
         * @instance
         */
        ReqAckPlayerChat.prototype.chat_type = 0;

        /**
         * ReqAckPlayerChat chat_info.
         * @member {Uint8Array} chat_info
         * @memberof NFMsg.ReqAckPlayerChat
         * @instance
         */
        ReqAckPlayerChat.prototype.chat_info = $util.newBuffer([]);

        /**
         * ReqAckPlayerChat chat_name.
         * @member {Uint8Array} chat_name
         * @memberof NFMsg.ReqAckPlayerChat
         * @instance
         */
        ReqAckPlayerChat.prototype.chat_name = $util.newBuffer([]);

        /**
         * ReqAckPlayerChat target_id.
         * @member {NFMsg.IIdent|null|undefined} target_id
         * @memberof NFMsg.ReqAckPlayerChat
         * @instance
         */
        ReqAckPlayerChat.prototype.target_id = null;

        /**
         * ReqAckPlayerChat Container_data.
         * @member {Array.<NFMsg.ReqAckPlayerChat.IChatContainer>} Container_data
         * @memberof NFMsg.ReqAckPlayerChat
         * @instance
         */
        ReqAckPlayerChat.prototype.Container_data = $util.emptyArray;

        /**
         * Creates a new ReqAckPlayerChat instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckPlayerChat
         * @static
         * @param {NFMsg.IReqAckPlayerChat=} [properties] Properties to set
         * @returns {NFMsg.ReqAckPlayerChat} ReqAckPlayerChat instance
         */
        ReqAckPlayerChat.create = function create(properties) {
            return new ReqAckPlayerChat(properties);
        };

        /**
         * Encodes the specified ReqAckPlayerChat message. Does not implicitly {@link NFMsg.ReqAckPlayerChat.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckPlayerChat
         * @static
         * @param {NFMsg.IReqAckPlayerChat} message ReqAckPlayerChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckPlayerChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                $root.NFMsg.Ident.encode(message.chat_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chat_type != null && message.hasOwnProperty("chat_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chat_type);
            if (message.chat_info != null && message.hasOwnProperty("chat_info"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.chat_info);
            if (message.chat_name != null && message.hasOwnProperty("chat_name"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.chat_name);
            if (message.target_id != null && message.hasOwnProperty("target_id"))
                $root.NFMsg.Ident.encode(message.target_id, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.Container_data != null && message.Container_data.length)
                for (var i = 0; i < message.Container_data.length; ++i)
                    $root.NFMsg.ReqAckPlayerChat.ChatContainer.encode(message.Container_data[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckPlayerChat message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckPlayerChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckPlayerChat} ReqAckPlayerChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckPlayerChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckPlayerChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chat_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chat_type = reader.int32();
                    break;
                case 3:
                    message.chat_info = reader.bytes();
                    break;
                case 4:
                    message.chat_name = reader.bytes();
                    break;
                case 5:
                    message.target_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 6:
                    if (!(message.Container_data && message.Container_data.length))
                        message.Container_data = [];
                    message.Container_data.push($root.NFMsg.ReqAckPlayerChat.ChatContainer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EGameChatType enum.
         * @name NFMsg.ReqAckPlayerChat.EGameChatType
         * @enum {string}
         * @property {number} EGCT_GUILD=0 EGCT_GUILD value
         * @property {number} EGCT_PRIVATE=1 EGCT_PRIVATE value
         * @property {number} EGCT_TEAM=2 EGCT_TEAM value
         * @property {number} EGCT_WORLD=3 EGCT_WORLD value
         */
        ReqAckPlayerChat.EGameChatType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EGCT_GUILD"] = 0;
            values[valuesById[1] = "EGCT_PRIVATE"] = 1;
            values[valuesById[2] = "EGCT_TEAM"] = 2;
            values[valuesById[3] = "EGCT_WORLD"] = 3;
            return values;
        })();

        ReqAckPlayerChat.ChatContainer = (function() {

            /**
             * Properties of a ChatContainer.
             * @memberof NFMsg.ReqAckPlayerChat
             * @interface IChatContainer
             * @property {number|null} [ConTainerType] ChatContainer ConTainerType
             * @property {Uint8Array|null} [data_info] ChatContainer data_info
             */

            /**
             * Constructs a new ChatContainer.
             * @memberof NFMsg.ReqAckPlayerChat
             * @classdesc Represents a ChatContainer.
             * @implements IChatContainer
             * @constructor
             * @param {NFMsg.ReqAckPlayerChat.IChatContainer=} [properties] Properties to set
             */
            function ChatContainer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatContainer ConTainerType.
             * @member {number} ConTainerType
             * @memberof NFMsg.ReqAckPlayerChat.ChatContainer
             * @instance
             */
            ChatContainer.prototype.ConTainerType = 0;

            /**
             * ChatContainer data_info.
             * @member {Uint8Array} data_info
             * @memberof NFMsg.ReqAckPlayerChat.ChatContainer
             * @instance
             */
            ChatContainer.prototype.data_info = $util.newBuffer([]);

            /**
             * Creates a new ChatContainer instance using the specified properties.
             * @function create
             * @memberof NFMsg.ReqAckPlayerChat.ChatContainer
             * @static
             * @param {NFMsg.ReqAckPlayerChat.IChatContainer=} [properties] Properties to set
             * @returns {NFMsg.ReqAckPlayerChat.ChatContainer} ChatContainer instance
             */
            ChatContainer.create = function create(properties) {
                return new ChatContainer(properties);
            };

            /**
             * Encodes the specified ChatContainer message. Does not implicitly {@link NFMsg.ReqAckPlayerChat.ChatContainer.verify|verify} messages.
             * @function encode
             * @memberof NFMsg.ReqAckPlayerChat.ChatContainer
             * @static
             * @param {NFMsg.ReqAckPlayerChat.IChatContainer} message ChatContainer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatContainer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ConTainerType != null && message.hasOwnProperty("ConTainerType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ConTainerType);
                if (message.data_info != null && message.hasOwnProperty("data_info"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data_info);
                return writer;
            };

            /**
             * Decodes a ChatContainer message from the specified reader or buffer.
             * @function decode
             * @memberof NFMsg.ReqAckPlayerChat.ChatContainer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {NFMsg.ReqAckPlayerChat.ChatContainer} ChatContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatContainer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckPlayerChat.ChatContainer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.ConTainerType = reader.int32();
                        break;
                    case 3:
                        message.data_info = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * ContainerType enum.
             * @name NFMsg.ReqAckPlayerChat.ChatContainer.ContainerType
             * @enum {string}
             * @property {number} EGCT_UNKNOW=0 EGCT_UNKNOW value
             * @property {number} EGCT_ITEM=1 EGCT_ITEM value
             */
            ChatContainer.ContainerType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EGCT_UNKNOW"] = 0;
                values[valuesById[1] = "EGCT_ITEM"] = 1;
                return values;
            })();

            return ChatContainer;
        })();

        return ReqAckPlayerChat;
    })();

    NFMsg.EffectData = (function() {

        /**
         * Properties of an EffectData.
         * @memberof NFMsg
         * @interface IEffectData
         * @property {NFMsg.IIdent|null} [effect_ident] EffectData effect_ident
         * @property {number|null} [effect_value] EffectData effect_value
         * @property {NFMsg.EffectData.EResultType|null} [effect_rlt] EffectData effect_rlt
         */

        /**
         * Constructs a new EffectData.
         * @memberof NFMsg
         * @classdesc Represents an EffectData.
         * @implements IEffectData
         * @constructor
         * @param {NFMsg.IEffectData=} [properties] Properties to set
         */
        function EffectData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EffectData effect_ident.
         * @member {NFMsg.IIdent|null|undefined} effect_ident
         * @memberof NFMsg.EffectData
         * @instance
         */
        EffectData.prototype.effect_ident = null;

        /**
         * EffectData effect_value.
         * @member {number} effect_value
         * @memberof NFMsg.EffectData
         * @instance
         */
        EffectData.prototype.effect_value = 0;

        /**
         * EffectData effect_rlt.
         * @member {NFMsg.EffectData.EResultType} effect_rlt
         * @memberof NFMsg.EffectData
         * @instance
         */
        EffectData.prototype.effect_rlt = 0;

        /**
         * Creates a new EffectData instance using the specified properties.
         * @function create
         * @memberof NFMsg.EffectData
         * @static
         * @param {NFMsg.IEffectData=} [properties] Properties to set
         * @returns {NFMsg.EffectData} EffectData instance
         */
        EffectData.create = function create(properties) {
            return new EffectData(properties);
        };

        /**
         * Encodes the specified EffectData message. Does not implicitly {@link NFMsg.EffectData.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.EffectData
         * @static
         * @param {NFMsg.IEffectData} message EffectData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EffectData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.effect_ident != null && message.hasOwnProperty("effect_ident"))
                $root.NFMsg.Ident.encode(message.effect_ident, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.effect_value != null && message.hasOwnProperty("effect_value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.effect_value);
            if (message.effect_rlt != null && message.hasOwnProperty("effect_rlt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.effect_rlt);
            return writer;
        };

        /**
         * Decodes an EffectData message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.EffectData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.EffectData} EffectData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EffectData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.EffectData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.effect_ident = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.effect_value = reader.int32();
                    break;
                case 3:
                    message.effect_rlt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EResultType enum.
         * @name NFMsg.EffectData.EResultType
         * @enum {string}
         * @property {number} EET_FAIL=0 EET_FAIL value
         * @property {number} EET_SUCCESS=1 EET_SUCCESS value
         * @property {number} EET_REFUSE=2 EET_REFUSE value
         * @property {number} EET_MISS=3 EET_MISS value
         * @property {number} EET_CRIT=4 EET_CRIT value
         */
        EffectData.EResultType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EET_FAIL"] = 0;
            values[valuesById[1] = "EET_SUCCESS"] = 1;
            values[valuesById[2] = "EET_REFUSE"] = 2;
            values[valuesById[3] = "EET_MISS"] = 3;
            values[valuesById[4] = "EET_CRIT"] = 4;
            return values;
        })();

        return EffectData;
    })();

    NFMsg.ReqAckUseSkill = (function() {

        /**
         * Properties of a ReqAckUseSkill.
         * @memberof NFMsg
         * @interface IReqAckUseSkill
         * @property {NFMsg.IIdent|null} [user] ReqAckUseSkill user
         * @property {Uint8Array|null} [skill_id] ReqAckUseSkill skill_id
         * @property {number|null} [use_index] ReqAckUseSkill use_index
         * @property {Array.<NFMsg.IEffectData>|null} [effect_data] ReqAckUseSkill effect_data
         */

        /**
         * Constructs a new ReqAckUseSkill.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckUseSkill.
         * @implements IReqAckUseSkill
         * @constructor
         * @param {NFMsg.IReqAckUseSkill=} [properties] Properties to set
         */
        function ReqAckUseSkill(properties) {
            this.effect_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckUseSkill user.
         * @member {NFMsg.IIdent|null|undefined} user
         * @memberof NFMsg.ReqAckUseSkill
         * @instance
         */
        ReqAckUseSkill.prototype.user = null;

        /**
         * ReqAckUseSkill skill_id.
         * @member {Uint8Array} skill_id
         * @memberof NFMsg.ReqAckUseSkill
         * @instance
         */
        ReqAckUseSkill.prototype.skill_id = $util.newBuffer([]);

        /**
         * ReqAckUseSkill use_index.
         * @member {number} use_index
         * @memberof NFMsg.ReqAckUseSkill
         * @instance
         */
        ReqAckUseSkill.prototype.use_index = 0;

        /**
         * ReqAckUseSkill effect_data.
         * @member {Array.<NFMsg.IEffectData>} effect_data
         * @memberof NFMsg.ReqAckUseSkill
         * @instance
         */
        ReqAckUseSkill.prototype.effect_data = $util.emptyArray;

        /**
         * Creates a new ReqAckUseSkill instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckUseSkill
         * @static
         * @param {NFMsg.IReqAckUseSkill=} [properties] Properties to set
         * @returns {NFMsg.ReqAckUseSkill} ReqAckUseSkill instance
         */
        ReqAckUseSkill.create = function create(properties) {
            return new ReqAckUseSkill(properties);
        };

        /**
         * Encodes the specified ReqAckUseSkill message. Does not implicitly {@link NFMsg.ReqAckUseSkill.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckUseSkill
         * @static
         * @param {NFMsg.IReqAckUseSkill} message ReqAckUseSkill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckUseSkill.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.NFMsg.Ident.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.skill_id != null && message.hasOwnProperty("skill_id"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.skill_id);
            if (message.use_index != null && message.hasOwnProperty("use_index"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.use_index);
            if (message.effect_data != null && message.effect_data.length)
                for (var i = 0; i < message.effect_data.length; ++i)
                    $root.NFMsg.EffectData.encode(message.effect_data[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckUseSkill message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckUseSkill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckUseSkill} ReqAckUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckUseSkill.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckUseSkill();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.skill_id = reader.bytes();
                    break;
                case 3:
                    message.use_index = reader.int32();
                    break;
                case 4:
                    if (!(message.effect_data && message.effect_data.length))
                        message.effect_data = [];
                    message.effect_data.push($root.NFMsg.EffectData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckUseSkill;
    })();

    NFMsg.ReqAckUseItem = (function() {

        /**
         * Properties of a ReqAckUseItem.
         * @memberof NFMsg
         * @interface IReqAckUseItem
         * @property {NFMsg.IIdent|null} [user] ReqAckUseItem user
         * @property {NFMsg.IIdent|null} [item_guid] ReqAckUseItem item_guid
         * @property {Array.<NFMsg.IEffectData>|null} [effect_data] ReqAckUseItem effect_data
         * @property {NFMsg.IItemStruct|null} [item] ReqAckUseItem item
         * @property {NFMsg.IIdent|null} [targetid] ReqAckUseItem targetid
         * @property {NFMsg.IVector3|null} [position] ReqAckUseItem position
         */

        /**
         * Constructs a new ReqAckUseItem.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckUseItem.
         * @implements IReqAckUseItem
         * @constructor
         * @param {NFMsg.IReqAckUseItem=} [properties] Properties to set
         */
        function ReqAckUseItem(properties) {
            this.effect_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckUseItem user.
         * @member {NFMsg.IIdent|null|undefined} user
         * @memberof NFMsg.ReqAckUseItem
         * @instance
         */
        ReqAckUseItem.prototype.user = null;

        /**
         * ReqAckUseItem item_guid.
         * @member {NFMsg.IIdent|null|undefined} item_guid
         * @memberof NFMsg.ReqAckUseItem
         * @instance
         */
        ReqAckUseItem.prototype.item_guid = null;

        /**
         * ReqAckUseItem effect_data.
         * @member {Array.<NFMsg.IEffectData>} effect_data
         * @memberof NFMsg.ReqAckUseItem
         * @instance
         */
        ReqAckUseItem.prototype.effect_data = $util.emptyArray;

        /**
         * ReqAckUseItem item.
         * @member {NFMsg.IItemStruct|null|undefined} item
         * @memberof NFMsg.ReqAckUseItem
         * @instance
         */
        ReqAckUseItem.prototype.item = null;

        /**
         * ReqAckUseItem targetid.
         * @member {NFMsg.IIdent|null|undefined} targetid
         * @memberof NFMsg.ReqAckUseItem
         * @instance
         */
        ReqAckUseItem.prototype.targetid = null;

        /**
         * ReqAckUseItem position.
         * @member {NFMsg.IVector3|null|undefined} position
         * @memberof NFMsg.ReqAckUseItem
         * @instance
         */
        ReqAckUseItem.prototype.position = null;

        /**
         * Creates a new ReqAckUseItem instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckUseItem
         * @static
         * @param {NFMsg.IReqAckUseItem=} [properties] Properties to set
         * @returns {NFMsg.ReqAckUseItem} ReqAckUseItem instance
         */
        ReqAckUseItem.create = function create(properties) {
            return new ReqAckUseItem(properties);
        };

        /**
         * Encodes the specified ReqAckUseItem message. Does not implicitly {@link NFMsg.ReqAckUseItem.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckUseItem
         * @static
         * @param {NFMsg.IReqAckUseItem} message ReqAckUseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckUseItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.NFMsg.Ident.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.item_guid != null && message.hasOwnProperty("item_guid"))
                $root.NFMsg.Ident.encode(message.item_guid, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.effect_data != null && message.effect_data.length)
                for (var i = 0; i < message.effect_data.length; ++i)
                    $root.NFMsg.EffectData.encode(message.effect_data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.item != null && message.hasOwnProperty("item"))
                $root.NFMsg.ItemStruct.encode(message.item, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.targetid != null && message.hasOwnProperty("targetid"))
                $root.NFMsg.Ident.encode(message.targetid, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.position != null && message.hasOwnProperty("position"))
                $root.NFMsg.Vector3.encode(message.position, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqAckUseItem message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckUseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckUseItem} ReqAckUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckUseItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckUseItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.item_guid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.effect_data && message.effect_data.length))
                        message.effect_data = [];
                    message.effect_data.push($root.NFMsg.EffectData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.item = $root.NFMsg.ItemStruct.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.targetid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.position = $root.NFMsg.Vector3.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckUseItem;
    })();

    NFMsg.ReqAckSwapScene = (function() {

        /**
         * Properties of a ReqAckSwapScene.
         * @memberof NFMsg
         * @interface IReqAckSwapScene
         * @property {NFMsg.ReqAckSwapScene.EGameSwapType|null} [transfer_type] ReqAckSwapScene transfer_type
         * @property {number|null} [scene_id] ReqAckSwapScene scene_id
         * @property {number|null} [line_id] ReqAckSwapScene line_id
         * @property {number|null} [x] ReqAckSwapScene x
         * @property {number|null} [y] ReqAckSwapScene y
         * @property {number|null} [z] ReqAckSwapScene z
         * @property {Uint8Array|null} [data] ReqAckSwapScene data
         */

        /**
         * Constructs a new ReqAckSwapScene.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckSwapScene.
         * @implements IReqAckSwapScene
         * @constructor
         * @param {NFMsg.IReqAckSwapScene=} [properties] Properties to set
         */
        function ReqAckSwapScene(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckSwapScene transfer_type.
         * @member {NFMsg.ReqAckSwapScene.EGameSwapType} transfer_type
         * @memberof NFMsg.ReqAckSwapScene
         * @instance
         */
        ReqAckSwapScene.prototype.transfer_type = 0;

        /**
         * ReqAckSwapScene scene_id.
         * @member {number} scene_id
         * @memberof NFMsg.ReqAckSwapScene
         * @instance
         */
        ReqAckSwapScene.prototype.scene_id = 0;

        /**
         * ReqAckSwapScene line_id.
         * @member {number} line_id
         * @memberof NFMsg.ReqAckSwapScene
         * @instance
         */
        ReqAckSwapScene.prototype.line_id = 0;

        /**
         * ReqAckSwapScene x.
         * @member {number} x
         * @memberof NFMsg.ReqAckSwapScene
         * @instance
         */
        ReqAckSwapScene.prototype.x = 0;

        /**
         * ReqAckSwapScene y.
         * @member {number} y
         * @memberof NFMsg.ReqAckSwapScene
         * @instance
         */
        ReqAckSwapScene.prototype.y = 0;

        /**
         * ReqAckSwapScene z.
         * @member {number} z
         * @memberof NFMsg.ReqAckSwapScene
         * @instance
         */
        ReqAckSwapScene.prototype.z = 0;

        /**
         * ReqAckSwapScene data.
         * @member {Uint8Array} data
         * @memberof NFMsg.ReqAckSwapScene
         * @instance
         */
        ReqAckSwapScene.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new ReqAckSwapScene instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckSwapScene
         * @static
         * @param {NFMsg.IReqAckSwapScene=} [properties] Properties to set
         * @returns {NFMsg.ReqAckSwapScene} ReqAckSwapScene instance
         */
        ReqAckSwapScene.create = function create(properties) {
            return new ReqAckSwapScene(properties);
        };

        /**
         * Encodes the specified ReqAckSwapScene message. Does not implicitly {@link NFMsg.ReqAckSwapScene.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckSwapScene
         * @static
         * @param {NFMsg.IReqAckSwapScene} message ReqAckSwapScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckSwapScene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transfer_type != null && message.hasOwnProperty("transfer_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.transfer_type);
            if (message.scene_id != null && message.hasOwnProperty("scene_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scene_id);
            if (message.line_id != null && message.hasOwnProperty("line_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.line_id);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.y);
            if (message.z != null && message.hasOwnProperty("z"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.z);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.data);
            return writer;
        };

        /**
         * Decodes a ReqAckSwapScene message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckSwapScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckSwapScene} ReqAckSwapScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckSwapScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckSwapScene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.transfer_type = reader.int32();
                    break;
                case 2:
                    message.scene_id = reader.int32();
                    break;
                case 3:
                    message.line_id = reader.int32();
                    break;
                case 4:
                    message.x = reader.float();
                    break;
                case 5:
                    message.y = reader.float();
                    break;
                case 6:
                    message.z = reader.float();
                    break;
                case 7:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EGameSwapType enum.
         * @name NFMsg.ReqAckSwapScene.EGameSwapType
         * @enum {string}
         * @property {number} EGST_NARMAL=0 EGST_NARMAL value
         * @property {number} EGST_CLONE=1 EGST_CLONE value
         * @property {number} EGST_ARENA=2 EGST_ARENA value
         * @property {number} EGST_MIRROR=3 EGST_MIRROR value
         */
        ReqAckSwapScene.EGameSwapType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EGST_NARMAL"] = 0;
            values[valuesById[1] = "EGST_CLONE"] = 1;
            values[valuesById[2] = "EGST_ARENA"] = 2;
            values[valuesById[3] = "EGST_MIRROR"] = 3;
            return values;
        })();

        return ReqAckSwapScene;
    })();

    NFMsg.ReqAckHomeScene = (function() {

        /**
         * Properties of a ReqAckHomeScene.
         * @memberof NFMsg
         * @interface IReqAckHomeScene
         * @property {Uint8Array|null} [data] ReqAckHomeScene data
         */

        /**
         * Constructs a new ReqAckHomeScene.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckHomeScene.
         * @implements IReqAckHomeScene
         * @constructor
         * @param {NFMsg.IReqAckHomeScene=} [properties] Properties to set
         */
        function ReqAckHomeScene(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckHomeScene data.
         * @member {Uint8Array} data
         * @memberof NFMsg.ReqAckHomeScene
         * @instance
         */
        ReqAckHomeScene.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new ReqAckHomeScene instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckHomeScene
         * @static
         * @param {NFMsg.IReqAckHomeScene=} [properties] Properties to set
         * @returns {NFMsg.ReqAckHomeScene} ReqAckHomeScene instance
         */
        ReqAckHomeScene.create = function create(properties) {
            return new ReqAckHomeScene(properties);
        };

        /**
         * Encodes the specified ReqAckHomeScene message. Does not implicitly {@link NFMsg.ReqAckHomeScene.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckHomeScene
         * @static
         * @param {NFMsg.IReqAckHomeScene} message ReqAckHomeScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckHomeScene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };

        /**
         * Decodes a ReqAckHomeScene message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckHomeScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckHomeScene} ReqAckHomeScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckHomeScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckHomeScene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckHomeScene;
    })();

    NFMsg.ItemStruct = (function() {

        /**
         * Properties of an ItemStruct.
         * @memberof NFMsg
         * @interface IItemStruct
         * @property {Uint8Array|null} [item_id] ItemStruct item_id
         * @property {number|null} [item_count] ItemStruct item_count
         */

        /**
         * Constructs a new ItemStruct.
         * @memberof NFMsg
         * @classdesc Represents an ItemStruct.
         * @implements IItemStruct
         * @constructor
         * @param {NFMsg.IItemStruct=} [properties] Properties to set
         */
        function ItemStruct(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemStruct item_id.
         * @member {Uint8Array} item_id
         * @memberof NFMsg.ItemStruct
         * @instance
         */
        ItemStruct.prototype.item_id = $util.newBuffer([]);

        /**
         * ItemStruct item_count.
         * @member {number} item_count
         * @memberof NFMsg.ItemStruct
         * @instance
         */
        ItemStruct.prototype.item_count = 0;

        /**
         * Creates a new ItemStruct instance using the specified properties.
         * @function create
         * @memberof NFMsg.ItemStruct
         * @static
         * @param {NFMsg.IItemStruct=} [properties] Properties to set
         * @returns {NFMsg.ItemStruct} ItemStruct instance
         */
        ItemStruct.create = function create(properties) {
            return new ItemStruct(properties);
        };

        /**
         * Encodes the specified ItemStruct message. Does not implicitly {@link NFMsg.ItemStruct.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ItemStruct
         * @static
         * @param {NFMsg.IItemStruct} message ItemStruct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemStruct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.item_id != null && message.hasOwnProperty("item_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.item_id);
            if (message.item_count != null && message.hasOwnProperty("item_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.item_count);
            return writer;
        };

        /**
         * Decodes an ItemStruct message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ItemStruct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ItemStruct} ItemStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemStruct.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ItemStruct();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.item_id = reader.bytes();
                    break;
                case 2:
                    message.item_count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ItemStruct;
    })();

    NFMsg.CurrencyStruct = (function() {

        /**
         * Properties of a CurrencyStruct.
         * @memberof NFMsg
         * @interface ICurrencyStruct
         * @property {number|null} [currency_type] CurrencyStruct currency_type
         * @property {number|null} [currency_count] CurrencyStruct currency_count
         */

        /**
         * Constructs a new CurrencyStruct.
         * @memberof NFMsg
         * @classdesc Represents a CurrencyStruct.
         * @implements ICurrencyStruct
         * @constructor
         * @param {NFMsg.ICurrencyStruct=} [properties] Properties to set
         */
        function CurrencyStruct(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrencyStruct currency_type.
         * @member {number} currency_type
         * @memberof NFMsg.CurrencyStruct
         * @instance
         */
        CurrencyStruct.prototype.currency_type = 0;

        /**
         * CurrencyStruct currency_count.
         * @member {number} currency_count
         * @memberof NFMsg.CurrencyStruct
         * @instance
         */
        CurrencyStruct.prototype.currency_count = 0;

        /**
         * Creates a new CurrencyStruct instance using the specified properties.
         * @function create
         * @memberof NFMsg.CurrencyStruct
         * @static
         * @param {NFMsg.ICurrencyStruct=} [properties] Properties to set
         * @returns {NFMsg.CurrencyStruct} CurrencyStruct instance
         */
        CurrencyStruct.create = function create(properties) {
            return new CurrencyStruct(properties);
        };

        /**
         * Encodes the specified CurrencyStruct message. Does not implicitly {@link NFMsg.CurrencyStruct.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.CurrencyStruct
         * @static
         * @param {NFMsg.ICurrencyStruct} message CurrencyStruct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrencyStruct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currency_type != null && message.hasOwnProperty("currency_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.currency_type);
            if (message.currency_count != null && message.hasOwnProperty("currency_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currency_count);
            return writer;
        };

        /**
         * Decodes a CurrencyStruct message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.CurrencyStruct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.CurrencyStruct} CurrencyStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrencyStruct.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.CurrencyStruct();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currency_type = reader.int32();
                    break;
                case 2:
                    message.currency_count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CurrencyStruct;
    })();

    NFMsg.ReqAckStartBattle = (function() {

        /**
         * Properties of a ReqAckStartBattle.
         * @memberof NFMsg
         * @interface IReqAckStartBattle
         * @property {number|null} [gold] ReqAckStartBattle gold
         * @property {number|null} [diamond] ReqAckStartBattle diamond
         */

        /**
         * Constructs a new ReqAckStartBattle.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckStartBattle.
         * @implements IReqAckStartBattle
         * @constructor
         * @param {NFMsg.IReqAckStartBattle=} [properties] Properties to set
         */
        function ReqAckStartBattle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckStartBattle gold.
         * @member {number} gold
         * @memberof NFMsg.ReqAckStartBattle
         * @instance
         */
        ReqAckStartBattle.prototype.gold = 0;

        /**
         * ReqAckStartBattle diamond.
         * @member {number} diamond
         * @memberof NFMsg.ReqAckStartBattle
         * @instance
         */
        ReqAckStartBattle.prototype.diamond = 0;

        /**
         * Creates a new ReqAckStartBattle instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckStartBattle
         * @static
         * @param {NFMsg.IReqAckStartBattle=} [properties] Properties to set
         * @returns {NFMsg.ReqAckStartBattle} ReqAckStartBattle instance
         */
        ReqAckStartBattle.create = function create(properties) {
            return new ReqAckStartBattle(properties);
        };

        /**
         * Encodes the specified ReqAckStartBattle message. Does not implicitly {@link NFMsg.ReqAckStartBattle.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckStartBattle
         * @static
         * @param {NFMsg.IReqAckStartBattle} message ReqAckStartBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckStartBattle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gold);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.diamond);
            return writer;
        };

        /**
         * Decodes a ReqAckStartBattle message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckStartBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckStartBattle} ReqAckStartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckStartBattle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckStartBattle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gold = reader.int32();
                    break;
                case 2:
                    message.diamond = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckStartBattle;
    })();

    NFMsg.ReqEndBattle = (function() {

        /**
         * Properties of a ReqEndBattle.
         * @memberof NFMsg
         * @interface IReqEndBattle
         */

        /**
         * Constructs a new ReqEndBattle.
         * @memberof NFMsg
         * @classdesc Represents a ReqEndBattle.
         * @implements IReqEndBattle
         * @constructor
         * @param {NFMsg.IReqEndBattle=} [properties] Properties to set
         */
        function ReqEndBattle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqEndBattle instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqEndBattle
         * @static
         * @param {NFMsg.IReqEndBattle=} [properties] Properties to set
         * @returns {NFMsg.ReqEndBattle} ReqEndBattle instance
         */
        ReqEndBattle.create = function create(properties) {
            return new ReqEndBattle(properties);
        };

        /**
         * Encodes the specified ReqEndBattle message. Does not implicitly {@link NFMsg.ReqEndBattle.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqEndBattle
         * @static
         * @param {NFMsg.IReqEndBattle} message ReqEndBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEndBattle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a ReqEndBattle message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqEndBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqEndBattle} ReqEndBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEndBattle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqEndBattle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqEndBattle;
    })();

    NFMsg.ReqAckRelive = (function() {

        /**
         * Properties of a ReqAckRelive.
         * @memberof NFMsg
         * @interface IReqAckRelive
         * @property {number|null} [diamond] ReqAckRelive diamond
         */

        /**
         * Constructs a new ReqAckRelive.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckRelive.
         * @implements IReqAckRelive
         * @constructor
         * @param {NFMsg.IReqAckRelive=} [properties] Properties to set
         */
        function ReqAckRelive(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckRelive diamond.
         * @member {number} diamond
         * @memberof NFMsg.ReqAckRelive
         * @instance
         */
        ReqAckRelive.prototype.diamond = 0;

        /**
         * Creates a new ReqAckRelive instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckRelive
         * @static
         * @param {NFMsg.IReqAckRelive=} [properties] Properties to set
         * @returns {NFMsg.ReqAckRelive} ReqAckRelive instance
         */
        ReqAckRelive.create = function create(properties) {
            return new ReqAckRelive(properties);
        };

        /**
         * Encodes the specified ReqAckRelive message. Does not implicitly {@link NFMsg.ReqAckRelive.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckRelive
         * @static
         * @param {NFMsg.IReqAckRelive} message ReqAckRelive message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckRelive.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.diamond);
            return writer;
        };

        /**
         * Decodes a ReqAckRelive message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckRelive
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckRelive} ReqAckRelive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckRelive.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckRelive();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.diamond = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckRelive;
    })();

    NFMsg.AckEndBattle = (function() {

        /**
         * Properties of an AckEndBattle.
         * @memberof NFMsg
         * @interface IAckEndBattle
         * @property {number|null} [win] AckEndBattle win
         * @property {number|null} [star] AckEndBattle star
         * @property {number|null} [gold] AckEndBattle gold
         * @property {number|null} [exp] AckEndBattle exp
         * @property {number|null} [diamond] AckEndBattle diamond
         * @property {Array.<NFMsg.IItemStruct>|null} [item_list] AckEndBattle item_list
         */

        /**
         * Constructs a new AckEndBattle.
         * @memberof NFMsg
         * @classdesc Represents an AckEndBattle.
         * @implements IAckEndBattle
         * @constructor
         * @param {NFMsg.IAckEndBattle=} [properties] Properties to set
         */
        function AckEndBattle(properties) {
            this.item_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckEndBattle win.
         * @member {number} win
         * @memberof NFMsg.AckEndBattle
         * @instance
         */
        AckEndBattle.prototype.win = 0;

        /**
         * AckEndBattle star.
         * @member {number} star
         * @memberof NFMsg.AckEndBattle
         * @instance
         */
        AckEndBattle.prototype.star = 0;

        /**
         * AckEndBattle gold.
         * @member {number} gold
         * @memberof NFMsg.AckEndBattle
         * @instance
         */
        AckEndBattle.prototype.gold = 0;

        /**
         * AckEndBattle exp.
         * @member {number} exp
         * @memberof NFMsg.AckEndBattle
         * @instance
         */
        AckEndBattle.prototype.exp = 0;

        /**
         * AckEndBattle diamond.
         * @member {number} diamond
         * @memberof NFMsg.AckEndBattle
         * @instance
         */
        AckEndBattle.prototype.diamond = 0;

        /**
         * AckEndBattle item_list.
         * @member {Array.<NFMsg.IItemStruct>} item_list
         * @memberof NFMsg.AckEndBattle
         * @instance
         */
        AckEndBattle.prototype.item_list = $util.emptyArray;

        /**
         * Creates a new AckEndBattle instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckEndBattle
         * @static
         * @param {NFMsg.IAckEndBattle=} [properties] Properties to set
         * @returns {NFMsg.AckEndBattle} AckEndBattle instance
         */
        AckEndBattle.create = function create(properties) {
            return new AckEndBattle(properties);
        };

        /**
         * Encodes the specified AckEndBattle message. Does not implicitly {@link NFMsg.AckEndBattle.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckEndBattle
         * @static
         * @param {NFMsg.IAckEndBattle} message AckEndBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEndBattle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.win != null && message.hasOwnProperty("win"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.win);
            if (message.star != null && message.hasOwnProperty("star"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.star);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gold);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.exp);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.diamond);
            if (message.item_list != null && message.item_list.length)
                for (var i = 0; i < message.item_list.length; ++i)
                    $root.NFMsg.ItemStruct.encode(message.item_list[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckEndBattle message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckEndBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckEndBattle} AckEndBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEndBattle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckEndBattle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.win = reader.int32();
                    break;
                case 2:
                    message.star = reader.int32();
                    break;
                case 3:
                    message.gold = reader.int32();
                    break;
                case 4:
                    message.exp = reader.int32();
                    break;
                case 5:
                    message.diamond = reader.int32();
                    break;
                case 6:
                    if (!(message.item_list && message.item_list.length))
                        message.item_list = [];
                    message.item_list.push($root.NFMsg.ItemStruct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckEndBattle;
    })();

    NFMsg.ReqPickDropItem = (function() {

        /**
         * Properties of a ReqPickDropItem.
         * @memberof NFMsg
         * @interface IReqPickDropItem
         * @property {NFMsg.IIdent|null} [item_guid] ReqPickDropItem item_guid
         */

        /**
         * Constructs a new ReqPickDropItem.
         * @memberof NFMsg
         * @classdesc Represents a ReqPickDropItem.
         * @implements IReqPickDropItem
         * @constructor
         * @param {NFMsg.IReqPickDropItem=} [properties] Properties to set
         */
        function ReqPickDropItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqPickDropItem item_guid.
         * @member {NFMsg.IIdent|null|undefined} item_guid
         * @memberof NFMsg.ReqPickDropItem
         * @instance
         */
        ReqPickDropItem.prototype.item_guid = null;

        /**
         * Creates a new ReqPickDropItem instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqPickDropItem
         * @static
         * @param {NFMsg.IReqPickDropItem=} [properties] Properties to set
         * @returns {NFMsg.ReqPickDropItem} ReqPickDropItem instance
         */
        ReqPickDropItem.create = function create(properties) {
            return new ReqPickDropItem(properties);
        };

        /**
         * Encodes the specified ReqPickDropItem message. Does not implicitly {@link NFMsg.ReqPickDropItem.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqPickDropItem
         * @static
         * @param {NFMsg.IReqPickDropItem} message ReqPickDropItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPickDropItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.item_guid != null && message.hasOwnProperty("item_guid"))
                $root.NFMsg.Ident.encode(message.item_guid, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqPickDropItem message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqPickDropItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqPickDropItem} ReqPickDropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPickDropItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqPickDropItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.item_guid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqPickDropItem;
    })();

    NFMsg.ReqAcceptTask = (function() {

        /**
         * Properties of a ReqAcceptTask.
         * @memberof NFMsg
         * @interface IReqAcceptTask
         * @property {Uint8Array|null} [task_id] ReqAcceptTask task_id
         */

        /**
         * Constructs a new ReqAcceptTask.
         * @memberof NFMsg
         * @classdesc Represents a ReqAcceptTask.
         * @implements IReqAcceptTask
         * @constructor
         * @param {NFMsg.IReqAcceptTask=} [properties] Properties to set
         */
        function ReqAcceptTask(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAcceptTask task_id.
         * @member {Uint8Array} task_id
         * @memberof NFMsg.ReqAcceptTask
         * @instance
         */
        ReqAcceptTask.prototype.task_id = $util.newBuffer([]);

        /**
         * Creates a new ReqAcceptTask instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAcceptTask
         * @static
         * @param {NFMsg.IReqAcceptTask=} [properties] Properties to set
         * @returns {NFMsg.ReqAcceptTask} ReqAcceptTask instance
         */
        ReqAcceptTask.create = function create(properties) {
            return new ReqAcceptTask(properties);
        };

        /**
         * Encodes the specified ReqAcceptTask message. Does not implicitly {@link NFMsg.ReqAcceptTask.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAcceptTask
         * @static
         * @param {NFMsg.IReqAcceptTask} message ReqAcceptTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAcceptTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.task_id != null && message.hasOwnProperty("task_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.task_id);
            return writer;
        };

        /**
         * Decodes a ReqAcceptTask message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAcceptTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAcceptTask} ReqAcceptTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAcceptTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAcceptTask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.task_id = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAcceptTask;
    })();

    NFMsg.ReqCompeleteTask = (function() {

        /**
         * Properties of a ReqCompeleteTask.
         * @memberof NFMsg
         * @interface IReqCompeleteTask
         * @property {Uint8Array|null} [task_id] ReqCompeleteTask task_id
         */

        /**
         * Constructs a new ReqCompeleteTask.
         * @memberof NFMsg
         * @classdesc Represents a ReqCompeleteTask.
         * @implements IReqCompeleteTask
         * @constructor
         * @param {NFMsg.IReqCompeleteTask=} [properties] Properties to set
         */
        function ReqCompeleteTask(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqCompeleteTask task_id.
         * @member {Uint8Array} task_id
         * @memberof NFMsg.ReqCompeleteTask
         * @instance
         */
        ReqCompeleteTask.prototype.task_id = $util.newBuffer([]);

        /**
         * Creates a new ReqCompeleteTask instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqCompeleteTask
         * @static
         * @param {NFMsg.IReqCompeleteTask=} [properties] Properties to set
         * @returns {NFMsg.ReqCompeleteTask} ReqCompeleteTask instance
         */
        ReqCompeleteTask.create = function create(properties) {
            return new ReqCompeleteTask(properties);
        };

        /**
         * Encodes the specified ReqCompeleteTask message. Does not implicitly {@link NFMsg.ReqCompeleteTask.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqCompeleteTask
         * @static
         * @param {NFMsg.IReqCompeleteTask} message ReqCompeleteTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCompeleteTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.task_id != null && message.hasOwnProperty("task_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.task_id);
            return writer;
        };

        /**
         * Decodes a ReqCompeleteTask message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqCompeleteTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqCompeleteTask} ReqCompeleteTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCompeleteTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqCompeleteTask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.task_id = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqCompeleteTask;
    })();

    NFMsg.ReqAckJoinActivity = (function() {

        /**
         * Properties of a ReqAckJoinActivity.
         * @memberof NFMsg
         * @interface IReqAckJoinActivity
         * @property {NFMsg.ReqAckJoinActivity.EGameActivityType|null} [activity_type] ReqAckJoinActivity activity_type
         * @property {NFMsg.ReqAckJoinActivity.EGameActivitySubType|null} [sub_activity_type] ReqAckJoinActivity sub_activity_type
         */

        /**
         * Constructs a new ReqAckJoinActivity.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckJoinActivity.
         * @implements IReqAckJoinActivity
         * @constructor
         * @param {NFMsg.IReqAckJoinActivity=} [properties] Properties to set
         */
        function ReqAckJoinActivity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckJoinActivity activity_type.
         * @member {NFMsg.ReqAckJoinActivity.EGameActivityType} activity_type
         * @memberof NFMsg.ReqAckJoinActivity
         * @instance
         */
        ReqAckJoinActivity.prototype.activity_type = 0;

        /**
         * ReqAckJoinActivity sub_activity_type.
         * @member {NFMsg.ReqAckJoinActivity.EGameActivitySubType} sub_activity_type
         * @memberof NFMsg.ReqAckJoinActivity
         * @instance
         */
        ReqAckJoinActivity.prototype.sub_activity_type = 0;

        /**
         * Creates a new ReqAckJoinActivity instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckJoinActivity
         * @static
         * @param {NFMsg.IReqAckJoinActivity=} [properties] Properties to set
         * @returns {NFMsg.ReqAckJoinActivity} ReqAckJoinActivity instance
         */
        ReqAckJoinActivity.create = function create(properties) {
            return new ReqAckJoinActivity(properties);
        };

        /**
         * Encodes the specified ReqAckJoinActivity message. Does not implicitly {@link NFMsg.ReqAckJoinActivity.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckJoinActivity
         * @static
         * @param {NFMsg.IReqAckJoinActivity} message ReqAckJoinActivity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckJoinActivity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.activity_type != null && message.hasOwnProperty("activity_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activity_type);
            if (message.sub_activity_type != null && message.hasOwnProperty("sub_activity_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sub_activity_type);
            return writer;
        };

        /**
         * Decodes a ReqAckJoinActivity message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckJoinActivity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckJoinActivity} ReqAckJoinActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckJoinActivity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckJoinActivity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activity_type = reader.int32();
                    break;
                case 2:
                    message.sub_activity_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EGameActivityType enum.
         * @name NFMsg.ReqAckJoinActivity.EGameActivityType
         * @enum {string}
         * @property {number} EGAT_PVP=0 EGAT_PVP value
         */
        ReqAckJoinActivity.EGameActivityType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EGAT_PVP"] = 0;
            return values;
        })();

        /**
         * EGameActivitySubType enum.
         * @name NFMsg.ReqAckJoinActivity.EGameActivitySubType
         * @enum {string}
         * @property {number} EGAT_NORMAL=0 EGAT_NORMAL value
         */
        ReqAckJoinActivity.EGameActivitySubType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EGAT_NORMAL"] = 0;
            return values;
        })();

        return ReqAckJoinActivity;
    })();

    NFMsg.ReqAckCreateGuild = (function() {

        /**
         * Properties of a ReqAckCreateGuild.
         * @memberof NFMsg
         * @interface IReqAckCreateGuild
         * @property {NFMsg.IIdent|null} [guild_id] ReqAckCreateGuild guild_id
         * @property {Uint8Array|null} [guild_name] ReqAckCreateGuild guild_name
         */

        /**
         * Constructs a new ReqAckCreateGuild.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckCreateGuild.
         * @implements IReqAckCreateGuild
         * @constructor
         * @param {NFMsg.IReqAckCreateGuild=} [properties] Properties to set
         */
        function ReqAckCreateGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckCreateGuild guild_id.
         * @member {NFMsg.IIdent|null|undefined} guild_id
         * @memberof NFMsg.ReqAckCreateGuild
         * @instance
         */
        ReqAckCreateGuild.prototype.guild_id = null;

        /**
         * ReqAckCreateGuild guild_name.
         * @member {Uint8Array} guild_name
         * @memberof NFMsg.ReqAckCreateGuild
         * @instance
         */
        ReqAckCreateGuild.prototype.guild_name = $util.newBuffer([]);

        /**
         * Creates a new ReqAckCreateGuild instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckCreateGuild
         * @static
         * @param {NFMsg.IReqAckCreateGuild=} [properties] Properties to set
         * @returns {NFMsg.ReqAckCreateGuild} ReqAckCreateGuild instance
         */
        ReqAckCreateGuild.create = function create(properties) {
            return new ReqAckCreateGuild(properties);
        };

        /**
         * Encodes the specified ReqAckCreateGuild message. Does not implicitly {@link NFMsg.ReqAckCreateGuild.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckCreateGuild
         * @static
         * @param {NFMsg.IReqAckCreateGuild} message ReqAckCreateGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckCreateGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                $root.NFMsg.Ident.encode(message.guild_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guild_name != null && message.hasOwnProperty("guild_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.guild_name);
            return writer;
        };

        /**
         * Decodes a ReqAckCreateGuild message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckCreateGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckCreateGuild} ReqAckCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckCreateGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckCreateGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.guild_name = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckCreateGuild;
    })();

    NFMsg.ReqSearchGuild = (function() {

        /**
         * Properties of a ReqSearchGuild.
         * @memberof NFMsg
         * @interface IReqSearchGuild
         * @property {Uint8Array|null} [guild_name] ReqSearchGuild guild_name
         */

        /**
         * Constructs a new ReqSearchGuild.
         * @memberof NFMsg
         * @classdesc Represents a ReqSearchGuild.
         * @implements IReqSearchGuild
         * @constructor
         * @param {NFMsg.IReqSearchGuild=} [properties] Properties to set
         */
        function ReqSearchGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSearchGuild guild_name.
         * @member {Uint8Array} guild_name
         * @memberof NFMsg.ReqSearchGuild
         * @instance
         */
        ReqSearchGuild.prototype.guild_name = $util.newBuffer([]);

        /**
         * Creates a new ReqSearchGuild instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqSearchGuild
         * @static
         * @param {NFMsg.IReqSearchGuild=} [properties] Properties to set
         * @returns {NFMsg.ReqSearchGuild} ReqSearchGuild instance
         */
        ReqSearchGuild.create = function create(properties) {
            return new ReqSearchGuild(properties);
        };

        /**
         * Encodes the specified ReqSearchGuild message. Does not implicitly {@link NFMsg.ReqSearchGuild.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqSearchGuild
         * @static
         * @param {NFMsg.IReqSearchGuild} message ReqSearchGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSearchGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_name != null && message.hasOwnProperty("guild_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.guild_name);
            return writer;
        };

        /**
         * Decodes a ReqSearchGuild message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqSearchGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqSearchGuild} ReqSearchGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSearchGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqSearchGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_name = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqSearchGuild;
    })();

    NFMsg.AckSearchGuild = (function() {

        /**
         * Properties of an AckSearchGuild.
         * @memberof NFMsg
         * @interface IAckSearchGuild
         * @property {Array.<NFMsg.AckSearchGuild.ISearchGuildObject>|null} [guild_list] AckSearchGuild guild_list
         */

        /**
         * Constructs a new AckSearchGuild.
         * @memberof NFMsg
         * @classdesc Represents an AckSearchGuild.
         * @implements IAckSearchGuild
         * @constructor
         * @param {NFMsg.IAckSearchGuild=} [properties] Properties to set
         */
        function AckSearchGuild(properties) {
            this.guild_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckSearchGuild guild_list.
         * @member {Array.<NFMsg.AckSearchGuild.ISearchGuildObject>} guild_list
         * @memberof NFMsg.AckSearchGuild
         * @instance
         */
        AckSearchGuild.prototype.guild_list = $util.emptyArray;

        /**
         * Creates a new AckSearchGuild instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckSearchGuild
         * @static
         * @param {NFMsg.IAckSearchGuild=} [properties] Properties to set
         * @returns {NFMsg.AckSearchGuild} AckSearchGuild instance
         */
        AckSearchGuild.create = function create(properties) {
            return new AckSearchGuild(properties);
        };

        /**
         * Encodes the specified AckSearchGuild message. Does not implicitly {@link NFMsg.AckSearchGuild.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckSearchGuild
         * @static
         * @param {NFMsg.IAckSearchGuild} message AckSearchGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckSearchGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_list != null && message.guild_list.length)
                for (var i = 0; i < message.guild_list.length; ++i)
                    $root.NFMsg.AckSearchGuild.SearchGuildObject.encode(message.guild_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckSearchGuild message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckSearchGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckSearchGuild} AckSearchGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckSearchGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckSearchGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.guild_list && message.guild_list.length))
                        message.guild_list = [];
                    message.guild_list.push($root.NFMsg.AckSearchGuild.SearchGuildObject.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AckSearchGuild.SearchGuildObject = (function() {

            /**
             * Properties of a SearchGuildObject.
             * @memberof NFMsg.AckSearchGuild
             * @interface ISearchGuildObject
             * @property {NFMsg.IIdent|null} [guild_ID] SearchGuildObject guild_ID
             * @property {Uint8Array|null} [guild_name] SearchGuildObject guild_name
             * @property {Uint8Array|null} [guild_icon] SearchGuildObject guild_icon
             * @property {number|null} [guild_member_count] SearchGuildObject guild_member_count
             * @property {number|null} [guild_member_max_count] SearchGuildObject guild_member_max_count
             * @property {number|null} [guild_honor] SearchGuildObject guild_honor
             * @property {number|null} [guild_rank] SearchGuildObject guild_rank
             */

            /**
             * Constructs a new SearchGuildObject.
             * @memberof NFMsg.AckSearchGuild
             * @classdesc Represents a SearchGuildObject.
             * @implements ISearchGuildObject
             * @constructor
             * @param {NFMsg.AckSearchGuild.ISearchGuildObject=} [properties] Properties to set
             */
            function SearchGuildObject(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchGuildObject guild_ID.
             * @member {NFMsg.IIdent|null|undefined} guild_ID
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @instance
             */
            SearchGuildObject.prototype.guild_ID = null;

            /**
             * SearchGuildObject guild_name.
             * @member {Uint8Array} guild_name
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @instance
             */
            SearchGuildObject.prototype.guild_name = $util.newBuffer([]);

            /**
             * SearchGuildObject guild_icon.
             * @member {Uint8Array} guild_icon
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @instance
             */
            SearchGuildObject.prototype.guild_icon = $util.newBuffer([]);

            /**
             * SearchGuildObject guild_member_count.
             * @member {number} guild_member_count
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @instance
             */
            SearchGuildObject.prototype.guild_member_count = 0;

            /**
             * SearchGuildObject guild_member_max_count.
             * @member {number} guild_member_max_count
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @instance
             */
            SearchGuildObject.prototype.guild_member_max_count = 0;

            /**
             * SearchGuildObject guild_honor.
             * @member {number} guild_honor
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @instance
             */
            SearchGuildObject.prototype.guild_honor = 0;

            /**
             * SearchGuildObject guild_rank.
             * @member {number} guild_rank
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @instance
             */
            SearchGuildObject.prototype.guild_rank = 0;

            /**
             * Creates a new SearchGuildObject instance using the specified properties.
             * @function create
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @static
             * @param {NFMsg.AckSearchGuild.ISearchGuildObject=} [properties] Properties to set
             * @returns {NFMsg.AckSearchGuild.SearchGuildObject} SearchGuildObject instance
             */
            SearchGuildObject.create = function create(properties) {
                return new SearchGuildObject(properties);
            };

            /**
             * Encodes the specified SearchGuildObject message. Does not implicitly {@link NFMsg.AckSearchGuild.SearchGuildObject.verify|verify} messages.
             * @function encode
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @static
             * @param {NFMsg.AckSearchGuild.ISearchGuildObject} message SearchGuildObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchGuildObject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.guild_ID != null && message.hasOwnProperty("guild_ID"))
                    $root.NFMsg.Ident.encode(message.guild_ID, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.guild_name != null && message.hasOwnProperty("guild_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.guild_name);
                if (message.guild_icon != null && message.hasOwnProperty("guild_icon"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.guild_icon);
                if (message.guild_member_count != null && message.hasOwnProperty("guild_member_count"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.guild_member_count);
                if (message.guild_member_max_count != null && message.hasOwnProperty("guild_member_max_count"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.guild_member_max_count);
                if (message.guild_honor != null && message.hasOwnProperty("guild_honor"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.guild_honor);
                if (message.guild_rank != null && message.hasOwnProperty("guild_rank"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.guild_rank);
                return writer;
            };

            /**
             * Decodes a SearchGuildObject message from the specified reader or buffer.
             * @function decode
             * @memberof NFMsg.AckSearchGuild.SearchGuildObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {NFMsg.AckSearchGuild.SearchGuildObject} SearchGuildObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchGuildObject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckSearchGuild.SearchGuildObject();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.guild_ID = $root.NFMsg.Ident.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.guild_name = reader.bytes();
                        break;
                    case 3:
                        message.guild_icon = reader.bytes();
                        break;
                    case 4:
                        message.guild_member_count = reader.int32();
                        break;
                    case 5:
                        message.guild_member_max_count = reader.int32();
                        break;
                    case 6:
                        message.guild_honor = reader.int32();
                        break;
                    case 7:
                        message.guild_rank = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SearchGuildObject;
        })();

        return AckSearchGuild;
    })();

    NFMsg.ReqAckJoinGuild = (function() {

        /**
         * Properties of a ReqAckJoinGuild.
         * @memberof NFMsg
         * @interface IReqAckJoinGuild
         * @property {NFMsg.IIdent|null} [guild_id] ReqAckJoinGuild guild_id
         * @property {Uint8Array|null} [guild_name] ReqAckJoinGuild guild_name
         */

        /**
         * Constructs a new ReqAckJoinGuild.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckJoinGuild.
         * @implements IReqAckJoinGuild
         * @constructor
         * @param {NFMsg.IReqAckJoinGuild=} [properties] Properties to set
         */
        function ReqAckJoinGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckJoinGuild guild_id.
         * @member {NFMsg.IIdent|null|undefined} guild_id
         * @memberof NFMsg.ReqAckJoinGuild
         * @instance
         */
        ReqAckJoinGuild.prototype.guild_id = null;

        /**
         * ReqAckJoinGuild guild_name.
         * @member {Uint8Array} guild_name
         * @memberof NFMsg.ReqAckJoinGuild
         * @instance
         */
        ReqAckJoinGuild.prototype.guild_name = $util.newBuffer([]);

        /**
         * Creates a new ReqAckJoinGuild instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckJoinGuild
         * @static
         * @param {NFMsg.IReqAckJoinGuild=} [properties] Properties to set
         * @returns {NFMsg.ReqAckJoinGuild} ReqAckJoinGuild instance
         */
        ReqAckJoinGuild.create = function create(properties) {
            return new ReqAckJoinGuild(properties);
        };

        /**
         * Encodes the specified ReqAckJoinGuild message. Does not implicitly {@link NFMsg.ReqAckJoinGuild.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckJoinGuild
         * @static
         * @param {NFMsg.IReqAckJoinGuild} message ReqAckJoinGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckJoinGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                $root.NFMsg.Ident.encode(message.guild_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guild_name != null && message.hasOwnProperty("guild_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.guild_name);
            return writer;
        };

        /**
         * Decodes a ReqAckJoinGuild message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckJoinGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckJoinGuild} ReqAckJoinGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckJoinGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckJoinGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.guild_name = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckJoinGuild;
    })();

    NFMsg.ReqAckLeaveGuild = (function() {

        /**
         * Properties of a ReqAckLeaveGuild.
         * @memberof NFMsg
         * @interface IReqAckLeaveGuild
         * @property {NFMsg.IIdent|null} [guild_id] ReqAckLeaveGuild guild_id
         * @property {Uint8Array|null} [guild_name] ReqAckLeaveGuild guild_name
         */

        /**
         * Constructs a new ReqAckLeaveGuild.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckLeaveGuild.
         * @implements IReqAckLeaveGuild
         * @constructor
         * @param {NFMsg.IReqAckLeaveGuild=} [properties] Properties to set
         */
        function ReqAckLeaveGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckLeaveGuild guild_id.
         * @member {NFMsg.IIdent|null|undefined} guild_id
         * @memberof NFMsg.ReqAckLeaveGuild
         * @instance
         */
        ReqAckLeaveGuild.prototype.guild_id = null;

        /**
         * ReqAckLeaveGuild guild_name.
         * @member {Uint8Array} guild_name
         * @memberof NFMsg.ReqAckLeaveGuild
         * @instance
         */
        ReqAckLeaveGuild.prototype.guild_name = $util.newBuffer([]);

        /**
         * Creates a new ReqAckLeaveGuild instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckLeaveGuild
         * @static
         * @param {NFMsg.IReqAckLeaveGuild=} [properties] Properties to set
         * @returns {NFMsg.ReqAckLeaveGuild} ReqAckLeaveGuild instance
         */
        ReqAckLeaveGuild.create = function create(properties) {
            return new ReqAckLeaveGuild(properties);
        };

        /**
         * Encodes the specified ReqAckLeaveGuild message. Does not implicitly {@link NFMsg.ReqAckLeaveGuild.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckLeaveGuild
         * @static
         * @param {NFMsg.IReqAckLeaveGuild} message ReqAckLeaveGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckLeaveGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                $root.NFMsg.Ident.encode(message.guild_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guild_name != null && message.hasOwnProperty("guild_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.guild_name);
            return writer;
        };

        /**
         * Decodes a ReqAckLeaveGuild message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckLeaveGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckLeaveGuild} ReqAckLeaveGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckLeaveGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckLeaveGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.guild_name = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAckLeaveGuild;
    })();

    NFMsg.ReqAckOprGuildMember = (function() {

        /**
         * Properties of a ReqAckOprGuildMember.
         * @memberof NFMsg
         * @interface IReqAckOprGuildMember
         * @property {NFMsg.IIdent|null} [guild_id] ReqAckOprGuildMember guild_id
         * @property {NFMsg.IIdent|null} [member_id] ReqAckOprGuildMember member_id
         * @property {NFMsg.ReqAckOprGuildMember.EGGuildMemberOprType|null} [type] ReqAckOprGuildMember type
         */

        /**
         * Constructs a new ReqAckOprGuildMember.
         * @memberof NFMsg
         * @classdesc Represents a ReqAckOprGuildMember.
         * @implements IReqAckOprGuildMember
         * @constructor
         * @param {NFMsg.IReqAckOprGuildMember=} [properties] Properties to set
         */
        function ReqAckOprGuildMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAckOprGuildMember guild_id.
         * @member {NFMsg.IIdent|null|undefined} guild_id
         * @memberof NFMsg.ReqAckOprGuildMember
         * @instance
         */
        ReqAckOprGuildMember.prototype.guild_id = null;

        /**
         * ReqAckOprGuildMember member_id.
         * @member {NFMsg.IIdent|null|undefined} member_id
         * @memberof NFMsg.ReqAckOprGuildMember
         * @instance
         */
        ReqAckOprGuildMember.prototype.member_id = null;

        /**
         * ReqAckOprGuildMember type.
         * @member {NFMsg.ReqAckOprGuildMember.EGGuildMemberOprType} type
         * @memberof NFMsg.ReqAckOprGuildMember
         * @instance
         */
        ReqAckOprGuildMember.prototype.type = 0;

        /**
         * Creates a new ReqAckOprGuildMember instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAckOprGuildMember
         * @static
         * @param {NFMsg.IReqAckOprGuildMember=} [properties] Properties to set
         * @returns {NFMsg.ReqAckOprGuildMember} ReqAckOprGuildMember instance
         */
        ReqAckOprGuildMember.create = function create(properties) {
            return new ReqAckOprGuildMember(properties);
        };

        /**
         * Encodes the specified ReqAckOprGuildMember message. Does not implicitly {@link NFMsg.ReqAckOprGuildMember.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAckOprGuildMember
         * @static
         * @param {NFMsg.IReqAckOprGuildMember} message ReqAckOprGuildMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAckOprGuildMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                $root.NFMsg.Ident.encode(message.guild_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.member_id != null && message.hasOwnProperty("member_id"))
                $root.NFMsg.Ident.encode(message.member_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Decodes a ReqAckOprGuildMember message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAckOprGuildMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAckOprGuildMember} ReqAckOprGuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAckOprGuildMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAckOprGuildMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.member_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EGGuildMemberOprType enum.
         * @name NFMsg.ReqAckOprGuildMember.EGGuildMemberOprType
         * @enum {string}
         * @property {number} EGAT_DOWN=0 EGAT_DOWN value
         * @property {number} EGAT_UP=1 EGAT_UP value
         * @property {number} EGAT_KICK=2 EGAT_KICK value
         */
        ReqAckOprGuildMember.EGGuildMemberOprType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EGAT_DOWN"] = 0;
            values[valuesById[1] = "EGAT_UP"] = 1;
            values[valuesById[2] = "EGAT_KICK"] = 2;
            return values;
        })();

        return ReqAckOprGuildMember;
    })();

    NFMsg.ReqEnterGuildEctype = (function() {

        /**
         * Properties of a ReqEnterGuildEctype.
         * @memberof NFMsg
         * @interface IReqEnterGuildEctype
         * @property {NFMsg.IIdent|null} [guild_id] ReqEnterGuildEctype guild_id
         */

        /**
         * Constructs a new ReqEnterGuildEctype.
         * @memberof NFMsg
         * @classdesc Represents a ReqEnterGuildEctype.
         * @implements IReqEnterGuildEctype
         * @constructor
         * @param {NFMsg.IReqEnterGuildEctype=} [properties] Properties to set
         */
        function ReqEnterGuildEctype(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEnterGuildEctype guild_id.
         * @member {NFMsg.IIdent|null|undefined} guild_id
         * @memberof NFMsg.ReqEnterGuildEctype
         * @instance
         */
        ReqEnterGuildEctype.prototype.guild_id = null;

        /**
         * Creates a new ReqEnterGuildEctype instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqEnterGuildEctype
         * @static
         * @param {NFMsg.IReqEnterGuildEctype=} [properties] Properties to set
         * @returns {NFMsg.ReqEnterGuildEctype} ReqEnterGuildEctype instance
         */
        ReqEnterGuildEctype.create = function create(properties) {
            return new ReqEnterGuildEctype(properties);
        };

        /**
         * Encodes the specified ReqEnterGuildEctype message. Does not implicitly {@link NFMsg.ReqEnterGuildEctype.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqEnterGuildEctype
         * @static
         * @param {NFMsg.IReqEnterGuildEctype} message ReqEnterGuildEctype message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterGuildEctype.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                $root.NFMsg.Ident.encode(message.guild_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqEnterGuildEctype message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqEnterGuildEctype
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqEnterGuildEctype} ReqEnterGuildEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterGuildEctype.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqEnterGuildEctype();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqEnterGuildEctype;
    })();

    NFMsg.ReqSetFightHero = (function() {

        /**
         * Properties of a ReqSetFightHero.
         * @memberof NFMsg
         * @interface IReqSetFightHero
         * @property {NFMsg.IIdent|null} [Heroid] ReqSetFightHero Heroid
         * @property {number|null} [Set] ReqSetFightHero Set
         */

        /**
         * Constructs a new ReqSetFightHero.
         * @memberof NFMsg
         * @classdesc Represents a ReqSetFightHero.
         * @implements IReqSetFightHero
         * @constructor
         * @param {NFMsg.IReqSetFightHero=} [properties] Properties to set
         */
        function ReqSetFightHero(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSetFightHero Heroid.
         * @member {NFMsg.IIdent|null|undefined} Heroid
         * @memberof NFMsg.ReqSetFightHero
         * @instance
         */
        ReqSetFightHero.prototype.Heroid = null;

        /**
         * ReqSetFightHero Set.
         * @member {number} Set
         * @memberof NFMsg.ReqSetFightHero
         * @instance
         */
        ReqSetFightHero.prototype.Set = 0;

        /**
         * Creates a new ReqSetFightHero instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqSetFightHero
         * @static
         * @param {NFMsg.IReqSetFightHero=} [properties] Properties to set
         * @returns {NFMsg.ReqSetFightHero} ReqSetFightHero instance
         */
        ReqSetFightHero.create = function create(properties) {
            return new ReqSetFightHero(properties);
        };

        /**
         * Encodes the specified ReqSetFightHero message. Does not implicitly {@link NFMsg.ReqSetFightHero.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqSetFightHero
         * @static
         * @param {NFMsg.IReqSetFightHero} message ReqSetFightHero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSetFightHero.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Heroid != null && message.hasOwnProperty("Heroid"))
                $root.NFMsg.Ident.encode(message.Heroid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Set != null && message.hasOwnProperty("Set"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Set);
            return writer;
        };

        /**
         * Decodes a ReqSetFightHero message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqSetFightHero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqSetFightHero} ReqSetFightHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSetFightHero.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqSetFightHero();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Heroid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Set = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqSetFightHero;
    })();

    NFMsg.ReqSwitchFightHero = (function() {

        /**
         * Properties of a ReqSwitchFightHero.
         * @memberof NFMsg
         * @interface IReqSwitchFightHero
         * @property {NFMsg.IIdent|null} [Heroid] ReqSwitchFightHero Heroid
         */

        /**
         * Constructs a new ReqSwitchFightHero.
         * @memberof NFMsg
         * @classdesc Represents a ReqSwitchFightHero.
         * @implements IReqSwitchFightHero
         * @constructor
         * @param {NFMsg.IReqSwitchFightHero=} [properties] Properties to set
         */
        function ReqSwitchFightHero(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSwitchFightHero Heroid.
         * @member {NFMsg.IIdent|null|undefined} Heroid
         * @memberof NFMsg.ReqSwitchFightHero
         * @instance
         */
        ReqSwitchFightHero.prototype.Heroid = null;

        /**
         * Creates a new ReqSwitchFightHero instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqSwitchFightHero
         * @static
         * @param {NFMsg.IReqSwitchFightHero=} [properties] Properties to set
         * @returns {NFMsg.ReqSwitchFightHero} ReqSwitchFightHero instance
         */
        ReqSwitchFightHero.create = function create(properties) {
            return new ReqSwitchFightHero(properties);
        };

        /**
         * Encodes the specified ReqSwitchFightHero message. Does not implicitly {@link NFMsg.ReqSwitchFightHero.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqSwitchFightHero
         * @static
         * @param {NFMsg.IReqSwitchFightHero} message ReqSwitchFightHero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSwitchFightHero.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Heroid != null && message.hasOwnProperty("Heroid"))
                $root.NFMsg.Ident.encode(message.Heroid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqSwitchFightHero message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqSwitchFightHero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqSwitchFightHero} ReqSwitchFightHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSwitchFightHero.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqSwitchFightHero();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Heroid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqSwitchFightHero;
    })();

    NFMsg.ReqBuyItemFromShop = (function() {

        /**
         * Properties of a ReqBuyItemFromShop.
         * @memberof NFMsg
         * @interface IReqBuyItemFromShop
         * @property {Uint8Array|null} [itemID] ReqBuyItemFromShop itemID
         * @property {number|null} [count] ReqBuyItemFromShop count
         */

        /**
         * Constructs a new ReqBuyItemFromShop.
         * @memberof NFMsg
         * @classdesc Represents a ReqBuyItemFromShop.
         * @implements IReqBuyItemFromShop
         * @constructor
         * @param {NFMsg.IReqBuyItemFromShop=} [properties] Properties to set
         */
        function ReqBuyItemFromShop(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqBuyItemFromShop itemID.
         * @member {Uint8Array} itemID
         * @memberof NFMsg.ReqBuyItemFromShop
         * @instance
         */
        ReqBuyItemFromShop.prototype.itemID = $util.newBuffer([]);

        /**
         * ReqBuyItemFromShop count.
         * @member {number} count
         * @memberof NFMsg.ReqBuyItemFromShop
         * @instance
         */
        ReqBuyItemFromShop.prototype.count = 0;

        /**
         * Creates a new ReqBuyItemFromShop instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqBuyItemFromShop
         * @static
         * @param {NFMsg.IReqBuyItemFromShop=} [properties] Properties to set
         * @returns {NFMsg.ReqBuyItemFromShop} ReqBuyItemFromShop instance
         */
        ReqBuyItemFromShop.create = function create(properties) {
            return new ReqBuyItemFromShop(properties);
        };

        /**
         * Encodes the specified ReqBuyItemFromShop message. Does not implicitly {@link NFMsg.ReqBuyItemFromShop.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqBuyItemFromShop
         * @static
         * @param {NFMsg.IReqBuyItemFromShop} message ReqBuyItemFromShop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBuyItemFromShop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemID != null && message.hasOwnProperty("itemID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.itemID);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Decodes a ReqBuyItemFromShop message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqBuyItemFromShop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqBuyItemFromShop} ReqBuyItemFromShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBuyItemFromShop.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqBuyItemFromShop();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemID = reader.bytes();
                    break;
                case 2:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqBuyItemFromShop;
    })();

    NFMsg.ReqAddGambleValue = (function() {

        /**
         * Properties of a ReqAddGambleValue.
         * @memberof NFMsg
         * @interface IReqAddGambleValue
         * @property {Uint8Array|null} [property] ReqAddGambleValue property
         * @property {number|null} [number] ReqAddGambleValue number
         */

        /**
         * Constructs a new ReqAddGambleValue.
         * @memberof NFMsg
         * @classdesc Represents a ReqAddGambleValue.
         * @implements IReqAddGambleValue
         * @constructor
         * @param {NFMsg.IReqAddGambleValue=} [properties] Properties to set
         */
        function ReqAddGambleValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAddGambleValue property.
         * @member {Uint8Array} property
         * @memberof NFMsg.ReqAddGambleValue
         * @instance
         */
        ReqAddGambleValue.prototype.property = $util.newBuffer([]);

        /**
         * ReqAddGambleValue number.
         * @member {number} number
         * @memberof NFMsg.ReqAddGambleValue
         * @instance
         */
        ReqAddGambleValue.prototype.number = 0;

        /**
         * Creates a new ReqAddGambleValue instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqAddGambleValue
         * @static
         * @param {NFMsg.IReqAddGambleValue=} [properties] Properties to set
         * @returns {NFMsg.ReqAddGambleValue} ReqAddGambleValue instance
         */
        ReqAddGambleValue.create = function create(properties) {
            return new ReqAddGambleValue(properties);
        };

        /**
         * Encodes the specified ReqAddGambleValue message. Does not implicitly {@link NFMsg.ReqAddGambleValue.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqAddGambleValue
         * @static
         * @param {NFMsg.IReqAddGambleValue} message ReqAddGambleValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAddGambleValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.property != null && message.hasOwnProperty("property"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.property);
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            return writer;
        };

        /**
         * Decodes a ReqAddGambleValue message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqAddGambleValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqAddGambleValue} ReqAddGambleValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAddGambleValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqAddGambleValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.property = reader.bytes();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqAddGambleValue;
    })();

    NFMsg.ReqMiningTitle = (function() {

        /**
         * Properties of a ReqMiningTitle.
         * @memberof NFMsg
         * @interface IReqMiningTitle
         * @property {number|null} [x] ReqMiningTitle x
         * @property {number|null} [y] ReqMiningTitle y
         * @property {number|null} [opr] ReqMiningTitle opr
         */

        /**
         * Constructs a new ReqMiningTitle.
         * @memberof NFMsg
         * @classdesc Represents a ReqMiningTitle.
         * @implements IReqMiningTitle
         * @constructor
         * @param {NFMsg.IReqMiningTitle=} [properties] Properties to set
         */
        function ReqMiningTitle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMiningTitle x.
         * @member {number} x
         * @memberof NFMsg.ReqMiningTitle
         * @instance
         */
        ReqMiningTitle.prototype.x = 0;

        /**
         * ReqMiningTitle y.
         * @member {number} y
         * @memberof NFMsg.ReqMiningTitle
         * @instance
         */
        ReqMiningTitle.prototype.y = 0;

        /**
         * ReqMiningTitle opr.
         * @member {number} opr
         * @memberof NFMsg.ReqMiningTitle
         * @instance
         */
        ReqMiningTitle.prototype.opr = 0;

        /**
         * Creates a new ReqMiningTitle instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqMiningTitle
         * @static
         * @param {NFMsg.IReqMiningTitle=} [properties] Properties to set
         * @returns {NFMsg.ReqMiningTitle} ReqMiningTitle instance
         */
        ReqMiningTitle.create = function create(properties) {
            return new ReqMiningTitle(properties);
        };

        /**
         * Encodes the specified ReqMiningTitle message. Does not implicitly {@link NFMsg.ReqMiningTitle.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqMiningTitle
         * @static
         * @param {NFMsg.IReqMiningTitle} message ReqMiningTitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMiningTitle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.opr != null && message.hasOwnProperty("opr"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.opr);
            return writer;
        };

        /**
         * Decodes a ReqMiningTitle message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqMiningTitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqMiningTitle} ReqMiningTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMiningTitle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqMiningTitle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.opr = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqMiningTitle;
    })();

    NFMsg.TileState = (function() {

        /**
         * Properties of a TileState.
         * @memberof NFMsg
         * @interface ITileState
         * @property {number|null} [x] TileState x
         * @property {number|null} [y] TileState y
         * @property {number|null} [opr] TileState opr
         */

        /**
         * Constructs a new TileState.
         * @memberof NFMsg
         * @classdesc Represents a TileState.
         * @implements ITileState
         * @constructor
         * @param {NFMsg.ITileState=} [properties] Properties to set
         */
        function TileState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TileState x.
         * @member {number} x
         * @memberof NFMsg.TileState
         * @instance
         */
        TileState.prototype.x = 0;

        /**
         * TileState y.
         * @member {number} y
         * @memberof NFMsg.TileState
         * @instance
         */
        TileState.prototype.y = 0;

        /**
         * TileState opr.
         * @member {number} opr
         * @memberof NFMsg.TileState
         * @instance
         */
        TileState.prototype.opr = 0;

        /**
         * Creates a new TileState instance using the specified properties.
         * @function create
         * @memberof NFMsg.TileState
         * @static
         * @param {NFMsg.ITileState=} [properties] Properties to set
         * @returns {NFMsg.TileState} TileState instance
         */
        TileState.create = function create(properties) {
            return new TileState(properties);
        };

        /**
         * Encodes the specified TileState message. Does not implicitly {@link NFMsg.TileState.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.TileState
         * @static
         * @param {NFMsg.ITileState} message TileState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TileState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.opr != null && message.hasOwnProperty("opr"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.opr);
            return writer;
        };

        /**
         * Decodes a TileState message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.TileState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.TileState} TileState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TileState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.TileState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.opr = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TileState;
    })();

    NFMsg.TileBuilding = (function() {

        /**
         * Properties of a TileBuilding.
         * @memberof NFMsg
         * @interface ITileBuilding
         * @property {number|null} [x] TileBuilding x
         * @property {number|null} [y] TileBuilding y
         * @property {Uint8Array|null} [configID] TileBuilding configID
         * @property {NFMsg.IIdent|null} [guid] TileBuilding guid
         */

        /**
         * Constructs a new TileBuilding.
         * @memberof NFMsg
         * @classdesc Represents a TileBuilding.
         * @implements ITileBuilding
         * @constructor
         * @param {NFMsg.ITileBuilding=} [properties] Properties to set
         */
        function TileBuilding(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TileBuilding x.
         * @member {number} x
         * @memberof NFMsg.TileBuilding
         * @instance
         */
        TileBuilding.prototype.x = 0;

        /**
         * TileBuilding y.
         * @member {number} y
         * @memberof NFMsg.TileBuilding
         * @instance
         */
        TileBuilding.prototype.y = 0;

        /**
         * TileBuilding configID.
         * @member {Uint8Array} configID
         * @memberof NFMsg.TileBuilding
         * @instance
         */
        TileBuilding.prototype.configID = $util.newBuffer([]);

        /**
         * TileBuilding guid.
         * @member {NFMsg.IIdent|null|undefined} guid
         * @memberof NFMsg.TileBuilding
         * @instance
         */
        TileBuilding.prototype.guid = null;

        /**
         * Creates a new TileBuilding instance using the specified properties.
         * @function create
         * @memberof NFMsg.TileBuilding
         * @static
         * @param {NFMsg.ITileBuilding=} [properties] Properties to set
         * @returns {NFMsg.TileBuilding} TileBuilding instance
         */
        TileBuilding.create = function create(properties) {
            return new TileBuilding(properties);
        };

        /**
         * Encodes the specified TileBuilding message. Does not implicitly {@link NFMsg.TileBuilding.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.TileBuilding
         * @static
         * @param {NFMsg.ITileBuilding} message TileBuilding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TileBuilding.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.configID != null && message.hasOwnProperty("configID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.configID);
            if (message.guid != null && message.hasOwnProperty("guid"))
                $root.NFMsg.Ident.encode(message.guid, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TileBuilding message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.TileBuilding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.TileBuilding} TileBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TileBuilding.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.TileBuilding();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.configID = reader.bytes();
                    break;
                case 4:
                    message.guid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TileBuilding;
    })();

    NFMsg.TileNPC = (function() {

        /**
         * Properties of a TileNPC.
         * @memberof NFMsg
         * @interface ITileNPC
         * @property {number|null} [x] TileNPC x
         * @property {number|null} [y] TileNPC y
         * @property {Uint8Array|null} [configID] TileNPC configID
         * @property {NFMsg.IIdent|null} [guid] TileNPC guid
         */

        /**
         * Constructs a new TileNPC.
         * @memberof NFMsg
         * @classdesc Represents a TileNPC.
         * @implements ITileNPC
         * @constructor
         * @param {NFMsg.ITileNPC=} [properties] Properties to set
         */
        function TileNPC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TileNPC x.
         * @member {number} x
         * @memberof NFMsg.TileNPC
         * @instance
         */
        TileNPC.prototype.x = 0;

        /**
         * TileNPC y.
         * @member {number} y
         * @memberof NFMsg.TileNPC
         * @instance
         */
        TileNPC.prototype.y = 0;

        /**
         * TileNPC configID.
         * @member {Uint8Array} configID
         * @memberof NFMsg.TileNPC
         * @instance
         */
        TileNPC.prototype.configID = $util.newBuffer([]);

        /**
         * TileNPC guid.
         * @member {NFMsg.IIdent|null|undefined} guid
         * @memberof NFMsg.TileNPC
         * @instance
         */
        TileNPC.prototype.guid = null;

        /**
         * Creates a new TileNPC instance using the specified properties.
         * @function create
         * @memberof NFMsg.TileNPC
         * @static
         * @param {NFMsg.ITileNPC=} [properties] Properties to set
         * @returns {NFMsg.TileNPC} TileNPC instance
         */
        TileNPC.create = function create(properties) {
            return new TileNPC(properties);
        };

        /**
         * Encodes the specified TileNPC message. Does not implicitly {@link NFMsg.TileNPC.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.TileNPC
         * @static
         * @param {NFMsg.ITileNPC} message TileNPC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TileNPC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.configID != null && message.hasOwnProperty("configID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.configID);
            if (message.guid != null && message.hasOwnProperty("guid"))
                $root.NFMsg.Ident.encode(message.guid, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TileNPC message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.TileNPC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.TileNPC} TileNPC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TileNPC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.TileNPC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.configID = reader.bytes();
                    break;
                case 4:
                    message.guid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TileNPC;
    })();

    NFMsg.AckMiningTitle = (function() {

        /**
         * Properties of an AckMiningTitle.
         * @memberof NFMsg
         * @interface IAckMiningTitle
         * @property {Array.<NFMsg.ITileState>|null} [tile] AckMiningTitle tile
         * @property {Array.<NFMsg.ITileBuilding>|null} [building] AckMiningTitle building
         * @property {Array.<NFMsg.ITileNPC>|null} [npc] AckMiningTitle npc
         */

        /**
         * Constructs a new AckMiningTitle.
         * @memberof NFMsg
         * @classdesc Represents an AckMiningTitle.
         * @implements IAckMiningTitle
         * @constructor
         * @param {NFMsg.IAckMiningTitle=} [properties] Properties to set
         */
        function AckMiningTitle(properties) {
            this.tile = [];
            this.building = [];
            this.npc = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckMiningTitle tile.
         * @member {Array.<NFMsg.ITileState>} tile
         * @memberof NFMsg.AckMiningTitle
         * @instance
         */
        AckMiningTitle.prototype.tile = $util.emptyArray;

        /**
         * AckMiningTitle building.
         * @member {Array.<NFMsg.ITileBuilding>} building
         * @memberof NFMsg.AckMiningTitle
         * @instance
         */
        AckMiningTitle.prototype.building = $util.emptyArray;

        /**
         * AckMiningTitle npc.
         * @member {Array.<NFMsg.ITileNPC>} npc
         * @memberof NFMsg.AckMiningTitle
         * @instance
         */
        AckMiningTitle.prototype.npc = $util.emptyArray;

        /**
         * Creates a new AckMiningTitle instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckMiningTitle
         * @static
         * @param {NFMsg.IAckMiningTitle=} [properties] Properties to set
         * @returns {NFMsg.AckMiningTitle} AckMiningTitle instance
         */
        AckMiningTitle.create = function create(properties) {
            return new AckMiningTitle(properties);
        };

        /**
         * Encodes the specified AckMiningTitle message. Does not implicitly {@link NFMsg.AckMiningTitle.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckMiningTitle
         * @static
         * @param {NFMsg.IAckMiningTitle} message AckMiningTitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckMiningTitle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tile != null && message.tile.length)
                for (var i = 0; i < message.tile.length; ++i)
                    $root.NFMsg.TileState.encode(message.tile[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.building != null && message.building.length)
                for (var i = 0; i < message.building.length; ++i)
                    $root.NFMsg.TileBuilding.encode(message.building[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.npc != null && message.npc.length)
                for (var i = 0; i < message.npc.length; ++i)
                    $root.NFMsg.TileNPC.encode(message.npc[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckMiningTitle message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckMiningTitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckMiningTitle} AckMiningTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckMiningTitle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckMiningTitle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tile && message.tile.length))
                        message.tile = [];
                    message.tile.push($root.NFMsg.TileState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.building && message.building.length))
                        message.building = [];
                    message.building.push($root.NFMsg.TileBuilding.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.npc && message.npc.length))
                        message.npc = [];
                    message.npc.push($root.NFMsg.TileNPC.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckMiningTitle;
    })();

    NFMsg.ReqSearchOppnent = (function() {

        /**
         * Properties of a ReqSearchOppnent.
         * @memberof NFMsg
         * @interface IReqSearchOppnent
         * @property {number|null} [self_scene] ReqSearchOppnent self_scene
         */

        /**
         * Constructs a new ReqSearchOppnent.
         * @memberof NFMsg
         * @classdesc Represents a ReqSearchOppnent.
         * @implements IReqSearchOppnent
         * @constructor
         * @param {NFMsg.IReqSearchOppnent=} [properties] Properties to set
         */
        function ReqSearchOppnent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSearchOppnent self_scene.
         * @member {number} self_scene
         * @memberof NFMsg.ReqSearchOppnent
         * @instance
         */
        ReqSearchOppnent.prototype.self_scene = 0;

        /**
         * Creates a new ReqSearchOppnent instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqSearchOppnent
         * @static
         * @param {NFMsg.IReqSearchOppnent=} [properties] Properties to set
         * @returns {NFMsg.ReqSearchOppnent} ReqSearchOppnent instance
         */
        ReqSearchOppnent.create = function create(properties) {
            return new ReqSearchOppnent(properties);
        };

        /**
         * Encodes the specified ReqSearchOppnent message. Does not implicitly {@link NFMsg.ReqSearchOppnent.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqSearchOppnent
         * @static
         * @param {NFMsg.IReqSearchOppnent} message ReqSearchOppnent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSearchOppnent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self_scene != null && message.hasOwnProperty("self_scene"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.self_scene);
            return writer;
        };

        /**
         * Decodes a ReqSearchOppnent message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqSearchOppnent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqSearchOppnent} ReqSearchOppnent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSearchOppnent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqSearchOppnent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self_scene = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqSearchOppnent;
    })();

    NFMsg.AckSearchOppnent = (function() {

        /**
         * Properties of an AckSearchOppnent.
         * @memberof NFMsg
         * @interface IAckSearchOppnent
         * @property {number|null} [scene_id] AckSearchOppnent scene_id
         * @property {number|null} [gold] AckSearchOppnent gold
         * @property {number|null} [diamond] AckSearchOppnent diamond
         * @property {number|null} [level] AckSearchOppnent level
         * @property {number|null} [cup] AckSearchOppnent cup
         * @property {Uint8Array|null} [name] AckSearchOppnent name
         * @property {Uint8Array|null} [head] AckSearchOppnent head
         * @property {Uint8Array|null} [hero_cnf1] AckSearchOppnent hero_cnf1
         * @property {number|null} [hero_star1] AckSearchOppnent hero_star1
         * @property {Uint8Array|null} [hero_cnf2] AckSearchOppnent hero_cnf2
         * @property {number|null} [hero_star2] AckSearchOppnent hero_star2
         * @property {Uint8Array|null} [hero_cnf3] AckSearchOppnent hero_cnf3
         * @property {number|null} [hero_star3] AckSearchOppnent hero_star3
         * @property {NFMsg.IIdent|null} [hero_id1] AckSearchOppnent hero_id1
         * @property {NFMsg.IIdent|null} [hero_id2] AckSearchOppnent hero_id2
         * @property {NFMsg.IIdent|null} [hero_id3] AckSearchOppnent hero_id3
         * @property {NFMsg.IVector3|null} [hero_pos1] AckSearchOppnent hero_pos1
         * @property {NFMsg.IVector3|null} [hero_pos2] AckSearchOppnent hero_pos2
         * @property {NFMsg.IVector3|null} [hero_pos3] AckSearchOppnent hero_pos3
         * @property {NFMsg.IAckMiningTitle|null} [title] AckSearchOppnent title
         * @property {NFMsg.IIdent|null} [opponent] AckSearchOppnent opponent
         */

        /**
         * Constructs a new AckSearchOppnent.
         * @memberof NFMsg
         * @classdesc Represents an AckSearchOppnent.
         * @implements IAckSearchOppnent
         * @constructor
         * @param {NFMsg.IAckSearchOppnent=} [properties] Properties to set
         */
        function AckSearchOppnent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckSearchOppnent scene_id.
         * @member {number} scene_id
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.scene_id = 0;

        /**
         * AckSearchOppnent gold.
         * @member {number} gold
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.gold = 0;

        /**
         * AckSearchOppnent diamond.
         * @member {number} diamond
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.diamond = 0;

        /**
         * AckSearchOppnent level.
         * @member {number} level
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.level = 0;

        /**
         * AckSearchOppnent cup.
         * @member {number} cup
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.cup = 0;

        /**
         * AckSearchOppnent name.
         * @member {Uint8Array} name
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.name = $util.newBuffer([]);

        /**
         * AckSearchOppnent head.
         * @member {Uint8Array} head
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.head = $util.newBuffer([]);

        /**
         * AckSearchOppnent hero_cnf1.
         * @member {Uint8Array} hero_cnf1
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_cnf1 = $util.newBuffer([]);

        /**
         * AckSearchOppnent hero_star1.
         * @member {number} hero_star1
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_star1 = 0;

        /**
         * AckSearchOppnent hero_cnf2.
         * @member {Uint8Array} hero_cnf2
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_cnf2 = $util.newBuffer([]);

        /**
         * AckSearchOppnent hero_star2.
         * @member {number} hero_star2
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_star2 = 0;

        /**
         * AckSearchOppnent hero_cnf3.
         * @member {Uint8Array} hero_cnf3
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_cnf3 = $util.newBuffer([]);

        /**
         * AckSearchOppnent hero_star3.
         * @member {number} hero_star3
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_star3 = 0;

        /**
         * AckSearchOppnent hero_id1.
         * @member {NFMsg.IIdent|null|undefined} hero_id1
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_id1 = null;

        /**
         * AckSearchOppnent hero_id2.
         * @member {NFMsg.IIdent|null|undefined} hero_id2
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_id2 = null;

        /**
         * AckSearchOppnent hero_id3.
         * @member {NFMsg.IIdent|null|undefined} hero_id3
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_id3 = null;

        /**
         * AckSearchOppnent hero_pos1.
         * @member {NFMsg.IVector3|null|undefined} hero_pos1
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_pos1 = null;

        /**
         * AckSearchOppnent hero_pos2.
         * @member {NFMsg.IVector3|null|undefined} hero_pos2
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_pos2 = null;

        /**
         * AckSearchOppnent hero_pos3.
         * @member {NFMsg.IVector3|null|undefined} hero_pos3
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.hero_pos3 = null;

        /**
         * AckSearchOppnent title.
         * @member {NFMsg.IAckMiningTitle|null|undefined} title
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.title = null;

        /**
         * AckSearchOppnent opponent.
         * @member {NFMsg.IIdent|null|undefined} opponent
         * @memberof NFMsg.AckSearchOppnent
         * @instance
         */
        AckSearchOppnent.prototype.opponent = null;

        /**
         * Creates a new AckSearchOppnent instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckSearchOppnent
         * @static
         * @param {NFMsg.IAckSearchOppnent=} [properties] Properties to set
         * @returns {NFMsg.AckSearchOppnent} AckSearchOppnent instance
         */
        AckSearchOppnent.create = function create(properties) {
            return new AckSearchOppnent(properties);
        };

        /**
         * Encodes the specified AckSearchOppnent message. Does not implicitly {@link NFMsg.AckSearchOppnent.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckSearchOppnent
         * @static
         * @param {NFMsg.IAckSearchOppnent} message AckSearchOppnent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckSearchOppnent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scene_id != null && message.hasOwnProperty("scene_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.scene_id);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gold);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.diamond);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.cup != null && message.hasOwnProperty("cup"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cup);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.name);
            if (message.head != null && message.hasOwnProperty("head"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.head);
            if (message.hero_cnf1 != null && message.hasOwnProperty("hero_cnf1"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.hero_cnf1);
            if (message.hero_star1 != null && message.hasOwnProperty("hero_star1"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.hero_star1);
            if (message.hero_cnf2 != null && message.hasOwnProperty("hero_cnf2"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.hero_cnf2);
            if (message.hero_star2 != null && message.hasOwnProperty("hero_star2"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.hero_star2);
            if (message.hero_cnf3 != null && message.hasOwnProperty("hero_cnf3"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.hero_cnf3);
            if (message.hero_star3 != null && message.hasOwnProperty("hero_star3"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.hero_star3);
            if (message.hero_id1 != null && message.hasOwnProperty("hero_id1"))
                $root.NFMsg.Ident.encode(message.hero_id1, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.hero_id2 != null && message.hasOwnProperty("hero_id2"))
                $root.NFMsg.Ident.encode(message.hero_id2, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.hero_id3 != null && message.hasOwnProperty("hero_id3"))
                $root.NFMsg.Ident.encode(message.hero_id3, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.hero_pos1 != null && message.hasOwnProperty("hero_pos1"))
                $root.NFMsg.Vector3.encode(message.hero_pos1, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.hero_pos2 != null && message.hasOwnProperty("hero_pos2"))
                $root.NFMsg.Vector3.encode(message.hero_pos2, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.hero_pos3 != null && message.hasOwnProperty("hero_pos3"))
                $root.NFMsg.Vector3.encode(message.hero_pos3, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.title != null && message.hasOwnProperty("title"))
                $root.NFMsg.AckMiningTitle.encode(message.title, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.opponent != null && message.hasOwnProperty("opponent"))
                $root.NFMsg.Ident.encode(message.opponent, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AckSearchOppnent message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckSearchOppnent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckSearchOppnent} AckSearchOppnent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckSearchOppnent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckSearchOppnent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.scene_id = reader.int32();
                    break;
                case 2:
                    message.gold = reader.int32();
                    break;
                case 3:
                    message.diamond = reader.int32();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.cup = reader.int32();
                    break;
                case 6:
                    message.name = reader.bytes();
                    break;
                case 7:
                    message.head = reader.bytes();
                    break;
                case 8:
                    message.hero_cnf1 = reader.bytes();
                    break;
                case 9:
                    message.hero_star1 = reader.int32();
                    break;
                case 10:
                    message.hero_cnf2 = reader.bytes();
                    break;
                case 11:
                    message.hero_star2 = reader.int32();
                    break;
                case 12:
                    message.hero_cnf3 = reader.bytes();
                    break;
                case 13:
                    message.hero_star3 = reader.int32();
                    break;
                case 20:
                    message.hero_id1 = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.hero_id2 = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.hero_id3 = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.hero_pos1 = $root.NFMsg.Vector3.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.hero_pos2 = $root.NFMsg.Vector3.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.hero_pos3 = $root.NFMsg.Vector3.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.title = $root.NFMsg.AckMiningTitle.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.opponent = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckSearchOppnent;
    })();

    NFMsg.ReqSendMail = (function() {

        /**
         * Properties of a ReqSendMail.
         * @memberof NFMsg
         * @interface IReqSendMail
         * @property {NFMsg.IIdent|null} [reciever] ReqSendMail reciever
         * @property {Array.<NFMsg.IItemStruct>|null} [item_list] ReqSendMail item_list
         * @property {Array.<NFMsg.ICurrencyStruct>|null} [currency_list] ReqSendMail currency_list
         */

        /**
         * Constructs a new ReqSendMail.
         * @memberof NFMsg
         * @classdesc Represents a ReqSendMail.
         * @implements IReqSendMail
         * @constructor
         * @param {NFMsg.IReqSendMail=} [properties] Properties to set
         */
        function ReqSendMail(properties) {
            this.item_list = [];
            this.currency_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSendMail reciever.
         * @member {NFMsg.IIdent|null|undefined} reciever
         * @memberof NFMsg.ReqSendMail
         * @instance
         */
        ReqSendMail.prototype.reciever = null;

        /**
         * ReqSendMail item_list.
         * @member {Array.<NFMsg.IItemStruct>} item_list
         * @memberof NFMsg.ReqSendMail
         * @instance
         */
        ReqSendMail.prototype.item_list = $util.emptyArray;

        /**
         * ReqSendMail currency_list.
         * @member {Array.<NFMsg.ICurrencyStruct>} currency_list
         * @memberof NFMsg.ReqSendMail
         * @instance
         */
        ReqSendMail.prototype.currency_list = $util.emptyArray;

        /**
         * Creates a new ReqSendMail instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqSendMail
         * @static
         * @param {NFMsg.IReqSendMail=} [properties] Properties to set
         * @returns {NFMsg.ReqSendMail} ReqSendMail instance
         */
        ReqSendMail.create = function create(properties) {
            return new ReqSendMail(properties);
        };

        /**
         * Encodes the specified ReqSendMail message. Does not implicitly {@link NFMsg.ReqSendMail.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqSendMail
         * @static
         * @param {NFMsg.IReqSendMail} message ReqSendMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reciever != null && message.hasOwnProperty("reciever"))
                $root.NFMsg.Ident.encode(message.reciever, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.item_list != null && message.item_list.length)
                for (var i = 0; i < message.item_list.length; ++i)
                    $root.NFMsg.ItemStruct.encode(message.item_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.currency_list != null && message.currency_list.length)
                for (var i = 0; i < message.currency_list.length; ++i)
                    $root.NFMsg.CurrencyStruct.encode(message.currency_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqSendMail message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqSendMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqSendMail} ReqSendMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqSendMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reciever = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.item_list && message.item_list.length))
                        message.item_list = [];
                    message.item_list.push($root.NFMsg.ItemStruct.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.currency_list && message.currency_list.length))
                        message.currency_list = [];
                    message.currency_list.push($root.NFMsg.CurrencyStruct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqSendMail;
    })();

    NFMsg.ReqSwitchServer = (function() {

        /**
         * Properties of a ReqSwitchServer.
         * @memberof NFMsg
         * @interface IReqSwitchServer
         * @property {NFMsg.IIdent|null} [selfid] ReqSwitchServer selfid
         * @property {number|Long|null} [self_serverid] ReqSwitchServer self_serverid
         * @property {number|Long|null} [target_serverid] ReqSwitchServer target_serverid
         * @property {number|Long|null} [gate_serverid] ReqSwitchServer gate_serverid
         * @property {number|Long|null} [SceneID] ReqSwitchServer SceneID
         * @property {NFMsg.IIdent|null} [client_id] ReqSwitchServer client_id
         * @property {number|Long|null} [groupID] ReqSwitchServer groupID
         */

        /**
         * Constructs a new ReqSwitchServer.
         * @memberof NFMsg
         * @classdesc Represents a ReqSwitchServer.
         * @implements IReqSwitchServer
         * @constructor
         * @param {NFMsg.IReqSwitchServer=} [properties] Properties to set
         */
        function ReqSwitchServer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSwitchServer selfid.
         * @member {NFMsg.IIdent|null|undefined} selfid
         * @memberof NFMsg.ReqSwitchServer
         * @instance
         */
        ReqSwitchServer.prototype.selfid = null;

        /**
         * ReqSwitchServer self_serverid.
         * @member {number|Long} self_serverid
         * @memberof NFMsg.ReqSwitchServer
         * @instance
         */
        ReqSwitchServer.prototype.self_serverid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqSwitchServer target_serverid.
         * @member {number|Long} target_serverid
         * @memberof NFMsg.ReqSwitchServer
         * @instance
         */
        ReqSwitchServer.prototype.target_serverid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqSwitchServer gate_serverid.
         * @member {number|Long} gate_serverid
         * @memberof NFMsg.ReqSwitchServer
         * @instance
         */
        ReqSwitchServer.prototype.gate_serverid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqSwitchServer SceneID.
         * @member {number|Long} SceneID
         * @memberof NFMsg.ReqSwitchServer
         * @instance
         */
        ReqSwitchServer.prototype.SceneID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqSwitchServer client_id.
         * @member {NFMsg.IIdent|null|undefined} client_id
         * @memberof NFMsg.ReqSwitchServer
         * @instance
         */
        ReqSwitchServer.prototype.client_id = null;

        /**
         * ReqSwitchServer groupID.
         * @member {number|Long} groupID
         * @memberof NFMsg.ReqSwitchServer
         * @instance
         */
        ReqSwitchServer.prototype.groupID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqSwitchServer instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqSwitchServer
         * @static
         * @param {NFMsg.IReqSwitchServer=} [properties] Properties to set
         * @returns {NFMsg.ReqSwitchServer} ReqSwitchServer instance
         */
        ReqSwitchServer.create = function create(properties) {
            return new ReqSwitchServer(properties);
        };

        /**
         * Encodes the specified ReqSwitchServer message. Does not implicitly {@link NFMsg.ReqSwitchServer.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqSwitchServer
         * @static
         * @param {NFMsg.IReqSwitchServer} message ReqSwitchServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSwitchServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.selfid != null && message.hasOwnProperty("selfid"))
                $root.NFMsg.Ident.encode(message.selfid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.self_serverid != null && message.hasOwnProperty("self_serverid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.self_serverid);
            if (message.target_serverid != null && message.hasOwnProperty("target_serverid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.target_serverid);
            if (message.gate_serverid != null && message.hasOwnProperty("gate_serverid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gate_serverid);
            if (message.SceneID != null && message.hasOwnProperty("SceneID"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.SceneID);
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                $root.NFMsg.Ident.encode(message.client_id, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.groupID != null && message.hasOwnProperty("groupID"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.groupID);
            return writer;
        };

        /**
         * Decodes a ReqSwitchServer message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqSwitchServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqSwitchServer} ReqSwitchServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSwitchServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqSwitchServer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.selfid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.self_serverid = reader.int64();
                    break;
                case 3:
                    message.target_serverid = reader.int64();
                    break;
                case 4:
                    message.gate_serverid = reader.int64();
                    break;
                case 5:
                    message.SceneID = reader.int64();
                    break;
                case 6:
                    message.client_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.groupID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqSwitchServer;
    })();

    NFMsg.AckSwitchServer = (function() {

        /**
         * Properties of an AckSwitchServer.
         * @memberof NFMsg
         * @interface IAckSwitchServer
         * @property {NFMsg.IIdent|null} [selfid] AckSwitchServer selfid
         * @property {number|Long|null} [self_serverid] AckSwitchServer self_serverid
         * @property {number|Long|null} [target_serverid] AckSwitchServer target_serverid
         * @property {number|Long|null} [gate_serverid] AckSwitchServer gate_serverid
         */

        /**
         * Constructs a new AckSwitchServer.
         * @memberof NFMsg
         * @classdesc Represents an AckSwitchServer.
         * @implements IAckSwitchServer
         * @constructor
         * @param {NFMsg.IAckSwitchServer=} [properties] Properties to set
         */
        function AckSwitchServer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckSwitchServer selfid.
         * @member {NFMsg.IIdent|null|undefined} selfid
         * @memberof NFMsg.AckSwitchServer
         * @instance
         */
        AckSwitchServer.prototype.selfid = null;

        /**
         * AckSwitchServer self_serverid.
         * @member {number|Long} self_serverid
         * @memberof NFMsg.AckSwitchServer
         * @instance
         */
        AckSwitchServer.prototype.self_serverid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckSwitchServer target_serverid.
         * @member {number|Long} target_serverid
         * @memberof NFMsg.AckSwitchServer
         * @instance
         */
        AckSwitchServer.prototype.target_serverid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckSwitchServer gate_serverid.
         * @member {number|Long} gate_serverid
         * @memberof NFMsg.AckSwitchServer
         * @instance
         */
        AckSwitchServer.prototype.gate_serverid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AckSwitchServer instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckSwitchServer
         * @static
         * @param {NFMsg.IAckSwitchServer=} [properties] Properties to set
         * @returns {NFMsg.AckSwitchServer} AckSwitchServer instance
         */
        AckSwitchServer.create = function create(properties) {
            return new AckSwitchServer(properties);
        };

        /**
         * Encodes the specified AckSwitchServer message. Does not implicitly {@link NFMsg.AckSwitchServer.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckSwitchServer
         * @static
         * @param {NFMsg.IAckSwitchServer} message AckSwitchServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckSwitchServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.selfid != null && message.hasOwnProperty("selfid"))
                $root.NFMsg.Ident.encode(message.selfid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.self_serverid != null && message.hasOwnProperty("self_serverid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.self_serverid);
            if (message.target_serverid != null && message.hasOwnProperty("target_serverid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.target_serverid);
            if (message.gate_serverid != null && message.hasOwnProperty("gate_serverid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gate_serverid);
            return writer;
        };

        /**
         * Decodes an AckSwitchServer message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckSwitchServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckSwitchServer} AckSwitchServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckSwitchServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckSwitchServer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.selfid = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.self_serverid = reader.int64();
                    break;
                case 3:
                    message.target_serverid = reader.int64();
                    break;
                case 4:
                    message.gate_serverid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckSwitchServer;
    })();

    NFMsg.PVPRoomInfo = (function() {

        /**
         * Properties of a PVPRoomInfo.
         * @memberof NFMsg
         * @interface IPVPRoomInfo
         * @property {number|null} [nCellStatus] PVPRoomInfo nCellStatus
         * @property {NFMsg.IIdent|null} [RoomID] PVPRoomInfo RoomID
         * @property {number|null} [nPVPMode] PVPRoomInfo nPVPMode
         * @property {number|null} [nPVPGrade] PVPRoomInfo nPVPGrade
         * @property {number|null} [MaxPalyer] PVPRoomInfo MaxPalyer
         * @property {Array.<NFMsg.IIdent>|null} [xRedPlayer] PVPRoomInfo xRedPlayer
         * @property {Array.<NFMsg.IIdent>|null} [xBluePlayer] PVPRoomInfo xBluePlayer
         * @property {number|Long|null} [serverid] PVPRoomInfo serverid
         * @property {number|Long|null} [SceneID] PVPRoomInfo SceneID
         * @property {number|Long|null} [groupID] PVPRoomInfo groupID
         */

        /**
         * Constructs a new PVPRoomInfo.
         * @memberof NFMsg
         * @classdesc pvp--///////////////////////////////////////////////////////////////////////////
         * @implements IPVPRoomInfo
         * @constructor
         * @param {NFMsg.IPVPRoomInfo=} [properties] Properties to set
         */
        function PVPRoomInfo(properties) {
            this.xRedPlayer = [];
            this.xBluePlayer = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PVPRoomInfo nCellStatus.
         * @member {number} nCellStatus
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.nCellStatus = 0;

        /**
         * PVPRoomInfo RoomID.
         * @member {NFMsg.IIdent|null|undefined} RoomID
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.RoomID = null;

        /**
         * PVPRoomInfo nPVPMode.
         * @member {number} nPVPMode
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.nPVPMode = 0;

        /**
         * PVPRoomInfo nPVPGrade.
         * @member {number} nPVPGrade
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.nPVPGrade = 0;

        /**
         * PVPRoomInfo MaxPalyer.
         * @member {number} MaxPalyer
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.MaxPalyer = 0;

        /**
         * PVPRoomInfo xRedPlayer.
         * @member {Array.<NFMsg.IIdent>} xRedPlayer
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.xRedPlayer = $util.emptyArray;

        /**
         * PVPRoomInfo xBluePlayer.
         * @member {Array.<NFMsg.IIdent>} xBluePlayer
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.xBluePlayer = $util.emptyArray;

        /**
         * PVPRoomInfo serverid.
         * @member {number|Long} serverid
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.serverid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PVPRoomInfo SceneID.
         * @member {number|Long} SceneID
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.SceneID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PVPRoomInfo groupID.
         * @member {number|Long} groupID
         * @memberof NFMsg.PVPRoomInfo
         * @instance
         */
        PVPRoomInfo.prototype.groupID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PVPRoomInfo instance using the specified properties.
         * @function create
         * @memberof NFMsg.PVPRoomInfo
         * @static
         * @param {NFMsg.IPVPRoomInfo=} [properties] Properties to set
         * @returns {NFMsg.PVPRoomInfo} PVPRoomInfo instance
         */
        PVPRoomInfo.create = function create(properties) {
            return new PVPRoomInfo(properties);
        };

        /**
         * Encodes the specified PVPRoomInfo message. Does not implicitly {@link NFMsg.PVPRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.PVPRoomInfo
         * @static
         * @param {NFMsg.IPVPRoomInfo} message PVPRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PVPRoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nCellStatus != null && message.hasOwnProperty("nCellStatus"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nCellStatus);
            if (message.RoomID != null && message.hasOwnProperty("RoomID"))
                $root.NFMsg.Ident.encode(message.RoomID, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nPVPMode != null && message.hasOwnProperty("nPVPMode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nPVPMode);
            if (message.nPVPGrade != null && message.hasOwnProperty("nPVPGrade"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nPVPGrade);
            if (message.MaxPalyer != null && message.hasOwnProperty("MaxPalyer"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.MaxPalyer);
            if (message.xRedPlayer != null && message.xRedPlayer.length)
                for (var i = 0; i < message.xRedPlayer.length; ++i)
                    $root.NFMsg.Ident.encode(message.xRedPlayer[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.xBluePlayer != null && message.xBluePlayer.length)
                for (var i = 0; i < message.xBluePlayer.length; ++i)
                    $root.NFMsg.Ident.encode(message.xBluePlayer[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.serverid != null && message.hasOwnProperty("serverid"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.serverid);
            if (message.SceneID != null && message.hasOwnProperty("SceneID"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.SceneID);
            if (message.groupID != null && message.hasOwnProperty("groupID"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.groupID);
            return writer;
        };

        /**
         * Decodes a PVPRoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.PVPRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.PVPRoomInfo} PVPRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PVPRoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.PVPRoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nCellStatus = reader.int32();
                    break;
                case 2:
                    message.RoomID = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nPVPMode = reader.int32();
                    break;
                case 4:
                    message.nPVPGrade = reader.int32();
                    break;
                case 5:
                    message.MaxPalyer = reader.int32();
                    break;
                case 6:
                    if (!(message.xRedPlayer && message.xRedPlayer.length))
                        message.xRedPlayer = [];
                    message.xRedPlayer.push($root.NFMsg.Ident.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.xBluePlayer && message.xBluePlayer.length))
                        message.xBluePlayer = [];
                    message.xBluePlayer.push($root.NFMsg.Ident.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.serverid = reader.int64();
                    break;
                case 9:
                    message.SceneID = reader.int64();
                    break;
                case 10:
                    message.groupID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PVPRoomInfo;
    })();

    NFMsg.ReqPVPApplyMatch = (function() {

        /**
         * Properties of a ReqPVPApplyMatch.
         * @memberof NFMsg
         * @interface IReqPVPApplyMatch
         * @property {NFMsg.IIdent|null} [self_id] ReqPVPApplyMatch self_id
         * @property {number|null} [nPVPMode] ReqPVPApplyMatch nPVPMode
         * @property {number|Long|null} [score] ReqPVPApplyMatch score
         * @property {number|null} [ApplyType] ReqPVPApplyMatch ApplyType
         * @property {NFMsg.IIdent|null} [team_id] ReqPVPApplyMatch team_id
         */

        /**
         * Constructs a new ReqPVPApplyMatch.
         * @memberof NFMsg
         * @classdesc Represents a ReqPVPApplyMatch.
         * @implements IReqPVPApplyMatch
         * @constructor
         * @param {NFMsg.IReqPVPApplyMatch=} [properties] Properties to set
         */
        function ReqPVPApplyMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqPVPApplyMatch self_id.
         * @member {NFMsg.IIdent|null|undefined} self_id
         * @memberof NFMsg.ReqPVPApplyMatch
         * @instance
         */
        ReqPVPApplyMatch.prototype.self_id = null;

        /**
         * ReqPVPApplyMatch nPVPMode.
         * @member {number} nPVPMode
         * @memberof NFMsg.ReqPVPApplyMatch
         * @instance
         */
        ReqPVPApplyMatch.prototype.nPVPMode = 0;

        /**
         * ReqPVPApplyMatch score.
         * @member {number|Long} score
         * @memberof NFMsg.ReqPVPApplyMatch
         * @instance
         */
        ReqPVPApplyMatch.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqPVPApplyMatch ApplyType.
         * @member {number} ApplyType
         * @memberof NFMsg.ReqPVPApplyMatch
         * @instance
         */
        ReqPVPApplyMatch.prototype.ApplyType = 0;

        /**
         * ReqPVPApplyMatch team_id.
         * @member {NFMsg.IIdent|null|undefined} team_id
         * @memberof NFMsg.ReqPVPApplyMatch
         * @instance
         */
        ReqPVPApplyMatch.prototype.team_id = null;

        /**
         * Creates a new ReqPVPApplyMatch instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqPVPApplyMatch
         * @static
         * @param {NFMsg.IReqPVPApplyMatch=} [properties] Properties to set
         * @returns {NFMsg.ReqPVPApplyMatch} ReqPVPApplyMatch instance
         */
        ReqPVPApplyMatch.create = function create(properties) {
            return new ReqPVPApplyMatch(properties);
        };

        /**
         * Encodes the specified ReqPVPApplyMatch message. Does not implicitly {@link NFMsg.ReqPVPApplyMatch.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqPVPApplyMatch
         * @static
         * @param {NFMsg.IReqPVPApplyMatch} message ReqPVPApplyMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPVPApplyMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self_id != null && message.hasOwnProperty("self_id"))
                $root.NFMsg.Ident.encode(message.self_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.nPVPMode != null && message.hasOwnProperty("nPVPMode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nPVPMode);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.score);
            if (message.ApplyType != null && message.hasOwnProperty("ApplyType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ApplyType);
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                $root.NFMsg.Ident.encode(message.team_id, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqPVPApplyMatch message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqPVPApplyMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqPVPApplyMatch} ReqPVPApplyMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPVPApplyMatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqPVPApplyMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nPVPMode = reader.int32();
                    break;
                case 3:
                    message.score = reader.int64();
                    break;
                case 4:
                    message.ApplyType = reader.int32();
                    break;
                case 5:
                    message.team_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * EApplyType enum.
         * @name NFMsg.ReqPVPApplyMatch.EApplyType
         * @enum {string}
         * @property {number} EApplyType_Single=0 EApplyType_Single value
         * @property {number} EApplyType_Team=1 EApplyType_Team value
         */
        ReqPVPApplyMatch.EApplyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EApplyType_Single"] = 0;
            values[valuesById[1] = "EApplyType_Team"] = 1;
            return values;
        })();

        return ReqPVPApplyMatch;
    })();

    NFMsg.AckPVPApplyMatch = (function() {

        /**
         * Properties of an AckPVPApplyMatch.
         * @memberof NFMsg
         * @interface IAckPVPApplyMatch
         * @property {NFMsg.IIdent|null} [self_id] AckPVPApplyMatch self_id
         * @property {NFMsg.IPVPRoomInfo|null} [xRoomInfo] AckPVPApplyMatch xRoomInfo
         * @property {number|null} [ApplyType] AckPVPApplyMatch ApplyType
         * @property {number|null} [nResult] AckPVPApplyMatch nResult
         */

        /**
         * Constructs a new AckPVPApplyMatch.
         * @memberof NFMsg
         * @classdesc Represents an AckPVPApplyMatch.
         * @implements IAckPVPApplyMatch
         * @constructor
         * @param {NFMsg.IAckPVPApplyMatch=} [properties] Properties to set
         */
        function AckPVPApplyMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckPVPApplyMatch self_id.
         * @member {NFMsg.IIdent|null|undefined} self_id
         * @memberof NFMsg.AckPVPApplyMatch
         * @instance
         */
        AckPVPApplyMatch.prototype.self_id = null;

        /**
         * AckPVPApplyMatch xRoomInfo.
         * @member {NFMsg.IPVPRoomInfo|null|undefined} xRoomInfo
         * @memberof NFMsg.AckPVPApplyMatch
         * @instance
         */
        AckPVPApplyMatch.prototype.xRoomInfo = null;

        /**
         * AckPVPApplyMatch ApplyType.
         * @member {number} ApplyType
         * @memberof NFMsg.AckPVPApplyMatch
         * @instance
         */
        AckPVPApplyMatch.prototype.ApplyType = 0;

        /**
         * AckPVPApplyMatch nResult.
         * @member {number} nResult
         * @memberof NFMsg.AckPVPApplyMatch
         * @instance
         */
        AckPVPApplyMatch.prototype.nResult = 0;

        /**
         * Creates a new AckPVPApplyMatch instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckPVPApplyMatch
         * @static
         * @param {NFMsg.IAckPVPApplyMatch=} [properties] Properties to set
         * @returns {NFMsg.AckPVPApplyMatch} AckPVPApplyMatch instance
         */
        AckPVPApplyMatch.create = function create(properties) {
            return new AckPVPApplyMatch(properties);
        };

        /**
         * Encodes the specified AckPVPApplyMatch message. Does not implicitly {@link NFMsg.AckPVPApplyMatch.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckPVPApplyMatch
         * @static
         * @param {NFMsg.IAckPVPApplyMatch} message AckPVPApplyMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPVPApplyMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self_id != null && message.hasOwnProperty("self_id"))
                $root.NFMsg.Ident.encode(message.self_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.xRoomInfo != null && message.hasOwnProperty("xRoomInfo"))
                $root.NFMsg.PVPRoomInfo.encode(message.xRoomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ApplyType != null && message.hasOwnProperty("ApplyType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ApplyType);
            if (message.nResult != null && message.hasOwnProperty("nResult"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nResult);
            return writer;
        };

        /**
         * Decodes an AckPVPApplyMatch message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckPVPApplyMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckPVPApplyMatch} AckPVPApplyMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPVPApplyMatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckPVPApplyMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.xRoomInfo = $root.NFMsg.PVPRoomInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ApplyType = reader.int32();
                    break;
                case 4:
                    message.nResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckPVPApplyMatch;
    })();

    NFMsg.ReqCreatePVPEctype = (function() {

        /**
         * Properties of a ReqCreatePVPEctype.
         * @memberof NFMsg
         * @interface IReqCreatePVPEctype
         * @property {NFMsg.IIdent|null} [self_id] ReqCreatePVPEctype self_id
         * @property {NFMsg.IPVPRoomInfo|null} [xRoomInfo] ReqCreatePVPEctype xRoomInfo
         */

        /**
         * Constructs a new ReqCreatePVPEctype.
         * @memberof NFMsg
         * @classdesc Represents a ReqCreatePVPEctype.
         * @implements IReqCreatePVPEctype
         * @constructor
         * @param {NFMsg.IReqCreatePVPEctype=} [properties] Properties to set
         */
        function ReqCreatePVPEctype(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqCreatePVPEctype self_id.
         * @member {NFMsg.IIdent|null|undefined} self_id
         * @memberof NFMsg.ReqCreatePVPEctype
         * @instance
         */
        ReqCreatePVPEctype.prototype.self_id = null;

        /**
         * ReqCreatePVPEctype xRoomInfo.
         * @member {NFMsg.IPVPRoomInfo|null|undefined} xRoomInfo
         * @memberof NFMsg.ReqCreatePVPEctype
         * @instance
         */
        ReqCreatePVPEctype.prototype.xRoomInfo = null;

        /**
         * Creates a new ReqCreatePVPEctype instance using the specified properties.
         * @function create
         * @memberof NFMsg.ReqCreatePVPEctype
         * @static
         * @param {NFMsg.IReqCreatePVPEctype=} [properties] Properties to set
         * @returns {NFMsg.ReqCreatePVPEctype} ReqCreatePVPEctype instance
         */
        ReqCreatePVPEctype.create = function create(properties) {
            return new ReqCreatePVPEctype(properties);
        };

        /**
         * Encodes the specified ReqCreatePVPEctype message. Does not implicitly {@link NFMsg.ReqCreatePVPEctype.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.ReqCreatePVPEctype
         * @static
         * @param {NFMsg.IReqCreatePVPEctype} message ReqCreatePVPEctype message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCreatePVPEctype.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self_id != null && message.hasOwnProperty("self_id"))
                $root.NFMsg.Ident.encode(message.self_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.xRoomInfo != null && message.hasOwnProperty("xRoomInfo"))
                $root.NFMsg.PVPRoomInfo.encode(message.xRoomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReqCreatePVPEctype message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.ReqCreatePVPEctype
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.ReqCreatePVPEctype} ReqCreatePVPEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCreatePVPEctype.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.ReqCreatePVPEctype();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.xRoomInfo = $root.NFMsg.PVPRoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReqCreatePVPEctype;
    })();

    NFMsg.AckCreatePVPEctype = (function() {

        /**
         * Properties of an AckCreatePVPEctype.
         * @memberof NFMsg
         * @interface IAckCreatePVPEctype
         * @property {NFMsg.IIdent|null} [self_id] AckCreatePVPEctype self_id
         * @property {NFMsg.IPVPRoomInfo|null} [xRoomInfo] AckCreatePVPEctype xRoomInfo
         * @property {number|null} [ApplyType] AckCreatePVPEctype ApplyType
         */

        /**
         * Constructs a new AckCreatePVPEctype.
         * @memberof NFMsg
         * @classdesc Represents an AckCreatePVPEctype.
         * @implements IAckCreatePVPEctype
         * @constructor
         * @param {NFMsg.IAckCreatePVPEctype=} [properties] Properties to set
         */
        function AckCreatePVPEctype(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckCreatePVPEctype self_id.
         * @member {NFMsg.IIdent|null|undefined} self_id
         * @memberof NFMsg.AckCreatePVPEctype
         * @instance
         */
        AckCreatePVPEctype.prototype.self_id = null;

        /**
         * AckCreatePVPEctype xRoomInfo.
         * @member {NFMsg.IPVPRoomInfo|null|undefined} xRoomInfo
         * @memberof NFMsg.AckCreatePVPEctype
         * @instance
         */
        AckCreatePVPEctype.prototype.xRoomInfo = null;

        /**
         * AckCreatePVPEctype ApplyType.
         * @member {number} ApplyType
         * @memberof NFMsg.AckCreatePVPEctype
         * @instance
         */
        AckCreatePVPEctype.prototype.ApplyType = 0;

        /**
         * Creates a new AckCreatePVPEctype instance using the specified properties.
         * @function create
         * @memberof NFMsg.AckCreatePVPEctype
         * @static
         * @param {NFMsg.IAckCreatePVPEctype=} [properties] Properties to set
         * @returns {NFMsg.AckCreatePVPEctype} AckCreatePVPEctype instance
         */
        AckCreatePVPEctype.create = function create(properties) {
            return new AckCreatePVPEctype(properties);
        };

        /**
         * Encodes the specified AckCreatePVPEctype message. Does not implicitly {@link NFMsg.AckCreatePVPEctype.verify|verify} messages.
         * @function encode
         * @memberof NFMsg.AckCreatePVPEctype
         * @static
         * @param {NFMsg.IAckCreatePVPEctype} message AckCreatePVPEctype message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckCreatePVPEctype.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self_id != null && message.hasOwnProperty("self_id"))
                $root.NFMsg.Ident.encode(message.self_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.xRoomInfo != null && message.hasOwnProperty("xRoomInfo"))
                $root.NFMsg.PVPRoomInfo.encode(message.xRoomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ApplyType != null && message.hasOwnProperty("ApplyType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ApplyType);
            return writer;
        };

        /**
         * Decodes an AckCreatePVPEctype message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsg.AckCreatePVPEctype
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsg.AckCreatePVPEctype} AckCreatePVPEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckCreatePVPEctype.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsg.AckCreatePVPEctype();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self_id = $root.NFMsg.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.xRoomInfo = $root.NFMsg.PVPRoomInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ApplyType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AckCreatePVPEctype;
    })();

    return NFMsg;
})();

$root.NFMsgBase = (function() {

    /**
     * Namespace NFMsgBase.
     * @exports NFMsgBase
     * @namespace
     */
    var NFMsgBase = {};

    NFMsgBase.Ident = (function() {

        /**
         * Properties of an Ident.
         * @memberof NFMsgBase
         * @interface IIdent
         * @property {number|Long|null} [svrid] Ident svrid
         * @property {number|Long|null} [index] Ident index
         */

        /**
         * Constructs a new Ident.
         * @memberof NFMsgBase
         * @classdesc Represents an Ident.
         * @implements IIdent
         * @constructor
         * @param {NFMsgBase.IIdent=} [properties] Properties to set
         */
        function Ident(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ident svrid.
         * @member {number|Long} svrid
         * @memberof NFMsgBase.Ident
         * @instance
         */
        Ident.prototype.svrid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ident index.
         * @member {number|Long} index
         * @memberof NFMsgBase.Ident
         * @instance
         */
        Ident.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Ident instance using the specified properties.
         * @function create
         * @memberof NFMsgBase.Ident
         * @static
         * @param {NFMsgBase.IIdent=} [properties] Properties to set
         * @returns {NFMsgBase.Ident} Ident instance
         */
        Ident.create = function create(properties) {
            return new Ident(properties);
        };

        /**
         * Encodes the specified Ident message. Does not implicitly {@link NFMsgBase.Ident.verify|verify} messages.
         * @function encode
         * @memberof NFMsgBase.Ident
         * @static
         * @param {NFMsgBase.IIdent} message Ident message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ident.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.svrid != null && message.hasOwnProperty("svrid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.svrid);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
            return writer;
        };

        /**
         * Decodes an Ident message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsgBase.Ident
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsgBase.Ident} Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ident.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsgBase.Ident();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.svrid = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Ident;
    })();

    NFMsgBase.MsgBase = (function() {

        /**
         * Properties of a MsgBase.
         * @memberof NFMsgBase
         * @interface IMsgBase
         * @property {NFMsgBase.IIdent|null} [player_id] MsgBase player_id
         * @property {Uint8Array|null} [msg_data] MsgBase msg_data
         * @property {Array.<NFMsgBase.IIdent>|null} [player_Client_list] MsgBase player_Client_list
         * @property {NFMsgBase.IIdent|null} [hash_ident] MsgBase hash_ident
         */

        /**
         * Constructs a new MsgBase.
         * @memberof NFMsgBase
         * @classdesc Represents a MsgBase.
         * @implements IMsgBase
         * @constructor
         * @param {NFMsgBase.IMsgBase=} [properties] Properties to set
         */
        function MsgBase(properties) {
            this.player_Client_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBase player_id.
         * @member {NFMsgBase.IIdent|null|undefined} player_id
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.player_id = null;

        /**
         * MsgBase msg_data.
         * @member {Uint8Array} msg_data
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.msg_data = $util.newBuffer([]);

        /**
         * MsgBase player_Client_list.
         * @member {Array.<NFMsgBase.IIdent>} player_Client_list
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.player_Client_list = $util.emptyArray;

        /**
         * MsgBase hash_ident.
         * @member {NFMsgBase.IIdent|null|undefined} hash_ident
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.hash_ident = null;

        /**
         * Creates a new MsgBase instance using the specified properties.
         * @function create
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {NFMsgBase.IMsgBase=} [properties] Properties to set
         * @returns {NFMsgBase.MsgBase} MsgBase instance
         */
        MsgBase.create = function create(properties) {
            return new MsgBase(properties);
        };

        /**
         * Encodes the specified MsgBase message. Does not implicitly {@link NFMsgBase.MsgBase.verify|verify} messages.
         * @function encode
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {NFMsgBase.IMsgBase} message MsgBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsgBase.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.msg_data != null && message.hasOwnProperty("msg_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.msg_data);
            if (message.player_Client_list != null && message.player_Client_list.length)
                for (var i = 0; i < message.player_Client_list.length; ++i)
                    $root.NFMsgBase.Ident.encode(message.player_Client_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.hash_ident != null && message.hasOwnProperty("hash_ident"))
                $root.NFMsgBase.Ident.encode(message.hash_ident, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MsgBase message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsgBase.MsgBase} MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsgBase.MsgBase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsgBase.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.msg_data = reader.bytes();
                    break;
                case 3:
                    if (!(message.player_Client_list && message.player_Client_list.length))
                        message.player_Client_list = [];
                    message.player_Client_list.push($root.NFMsgBase.Ident.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash_ident = $root.NFMsgBase.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MsgBase;
    })();

    return NFMsgBase;
})();