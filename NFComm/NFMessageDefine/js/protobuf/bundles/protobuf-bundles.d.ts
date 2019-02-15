type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace NFMsg. */
declare namespace NFMsg {

    /** EGameEventCode enum. */
    enum EGameEventCode {
        EGEC_SUCCESS = 0,
        EGEC_UNKOWN_ERROR = 1,
        EGEC_ACCOUNT_EXIST = 2,
        EGEC_ACCOUNTPWD_INVALID = 3,
        EGEC_ACCOUNT_USING = 4,
        EGEC_ACCOUNT_LOCKED = 5,
        EGEC_ACCOUNT_SUCCESS = 6,
        EGEC_VERIFY_KEY_SUCCESS = 7,
        EGEC_VERIFY_KEY_FAIL = 8,
        EGEC_SELECTSERVER_SUCCESS = 9,
        EGEC_SELECTSERVER_FAIL = 10,
        EGEC_CHARACTER_EXIST = 110,
        EGEC_SVRZONEID_INVALID = 111,
        EGEC_CHARACTER_NUMOUT = 112,
        EGEC_CHARACTER_INVALID = 113,
        EGEC_CHARACTER_NOTEXIST = 114,
        EGEC_CHARACTER_USING = 115,
        EGEC_CHARACTER_LOCKED = 116,
        EGEC_ZONE_OVERLOAD = 117,
        EGEC_NOT_ONLINE = 118,
        EGEC_ALREAY_IN_TEAM = 119,
        EGEC_INVALID_TEAM_INVITE = 120,
        EGEC_TEAM_FULL = 121,
        EGEC_MAIL_UPDATE_ERROR = 122,
        EGEC_MAIL_TONAME_INVALID = 123,
        EGEC_MAIL_DELETE_ERROR = 124,
        EGEC_MAIL_TOWNAME_EQUAL = 125,
        EGEC_LACK_MONEY = 126,
        EGEC_FULL_PACKAGE = 127,
        EGEC_INVALID_ITEM = 128,
        EGEC_INVALID_CONSIGNMENT = 129,
        EGEC_NOT_ENOUGH_VIP = 130,
        EGEC_NEED_LEVEL = 131,
        EGEC_MAX_FRIEND_LIST = 132,
        EGEC_MAX_ENEMY_LIST = 133,
        EGEC_MAX_GANGS_LSIT = 134,
        EGEC_LIMITS_TO_RIGHTS = 135,
        EGEC_INVALID_GANGS_NAME = 136,
        EGEC_REPEAT_ENTER_GANGS = 137,
        EGEC_INVALID_GANGSMEMBER = 138,
        EGEC_MASTER_LEAVE_GANGS = 139,
        EGEC_GANGS_TITLE_OUTOF = 140,
        EGEC_ENTER_GATEWAY_FAILD = 141,
        EGEC_NO_SERVER4ZONE = 142,
        EGEC_INVALID_SKILL = 143,
        EGEC_CREATE_GUILD_SUCCESS = 200,
        EGEC_JOIN_GUILD_SUCCESS = 201,
        EGEC_LEAVE_GUILD_SUCCESS = 202
    }

    /** ESynMsgID enum. */
    enum ESynMsgID {
        ESMI_UNKNOW = 0
    }

    /** EGameMsgID enum. */
    enum EGameMsgID {
        EGMI_UNKNOW = 0,
        EGMI_EVENT_RESULT = 1,
        EGMI_EVENT_TRANSPOND = 2,
        EGMI_CLOSE_SOCKET = 3,
        EGMI_WTM_WORLD_REGISTERED = 10,
        EGMI_WTM_WORLD_UNREGISTERED = 11,
        EGMI_WTM_WORLD_REFRESH = 12,
        EGMI_LTM_LOGIN_REGISTERED = 20,
        EGMI_LTM_LOGIN_UNREGISTERED = 21,
        EGMI_LTM_LOGIN_REFRESH = 22,
        EGMI_PTWG_PROXY_REGISTERED = 30,
        EGMI_PTWG_PROXY_UNREGISTERED = 31,
        EGMI_PTWG_PROXY_REFRESH = 32,
        EGMI_GTW_GAME_REGISTERED = 40,
        EGMI_GTW_GAME_UNREGISTERED = 41,
        EGMI_GTW_GAME_REFRESH = 42,
        EGMI_DTW_DB_REGISTERED = 60,
        EGMI_DTW_DB_UNREGISTERED = 61,
        EGMI_DTW_DB_REFRESH = 62,
        EGMI_STS_NET_INFO = 70,
        EGMI_STS_SERVER_REPORT = 90,
        EGMI_STS_HEART_BEAT = 100,
        EGMI_REQ_LOGIN = 101,
        EGMI_ACK_LOGIN = 102,
        EGMI_REQ_LOGOUT = 103,
        EGMI_REQ_WORLD_LIST = 110,
        EGMI_ACK_WORLD_LIST = 111,
        EGMI_REQ_CONNECT_WORLD = 112,
        EGMI_ACK_CONNECT_WORLD = 113,
        EGMI_REQ_KICK_CLIENT_INWORLD = 114,
        EGMI_REQ_CONNECT_KEY = 120,
        EGMI_ACK_CONNECT_KEY = 122,
        EGMI_REQ_SELECT_SERVER = 130,
        EGMI_ACK_SELECT_SERVER = 131,
        EGMI_REQ_ROLE_LIST = 132,
        EGMI_ACK_ROLE_LIST = 133,
        EGMI_REQ_CREATE_ROLE = 134,
        EGMI_REQ_DELETE_ROLE = 135,
        EGMI_REQ_RECOVER_ROLE = 136,
        EGMI_REQ_LOAD_ROLE_DATA = 140,
        EGMI_ACK_LOAD_ROLE_DATA = 141,
        EGMI_REQ_SAVE_ROLE_DATA = 142,
        EGMI_ACK_SAVE_ROLE_DATA = 143,
        EGMI_REQ_ENTER_GAME = 150,
        EGMI_ACK_ENTER_GAME = 151,
        EGMI_REQ_LEAVE_GAME = 152,
        EGMI_ACK_LEAVE_GAME = 153,
        EGMI_REQ_SWAP_GAME = 154,
        EGMI_REQ_SWAP_SCENE = 155,
        EGMI_ACK_SWAP_SCENE = 156,
        EGMI_REQ_SWAP_HOME_SCENE = 157,
        EGMI_ACK_SWAP_HOME_SCENE = 158,
        EGMI_REQ_ENTER_GAME_FINISH = 159,
        EGMI_ACK_ENTER_GAME_FINISH = 160,
        EGMI_REQ_ACK_RELIVE = 180,
        EGMI_ACK_OBJECT_ENTRY = 200,
        EGMI_ACK_OBJECT_LEAVE = 201,
        EGMI_ACK_OBJECT_PROPERTY_ENTRY = 202,
        EGMI_ACK_OBJECT_RECORD_ENTRY = 203,
        EGMI_ACK_PROPERTY_INT = 210,
        EGMI_ACK_PROPERTY_FLOAT = 211,
        EGMI_ACK_PROPERTY_STRING = 212,
        EGMI_ACK_PROPERTY_OBJECT = 214,
        EGMI_ACK_PROPERTY_VECTOR2 = 215,
        EGMI_ACK_PROPERTY_VECTOR3 = 216,
        EGMI_ACK_ADD_ROW = 220,
        EGMI_ACK_REMOVE_ROW = 221,
        EGMI_ACK_SWAP_ROW = 222,
        EGMI_ACK_RECORD_INT = 223,
        EGMI_ACK_RECORD_FLOAT = 224,
        EGMI_ACK_RECORD_STRING = 226,
        EGMI_ACK_RECORD_OBJECT = 227,
        EGMI_ACK_RECORD_VECTOR2 = 228,
        EGMI_ACK_RECORD_VECTOR3 = 229,
        EGMI_ACK_RECORD_CLEAR = 250,
        EGMI_ACK_RECORD_SORT = 251,
        EGMI_ACK_DATA_FINISHED = 260,
        EGMI_REQ_START_OPPNENT = 1220,
        EGMI_ACK_START_OPPNENT = 1221,
        EGMI_REQ_END_OPPNENT = 1222,
        EGMI_ACK_END_OPPNENT = 1223,
        EGMI_REQ_SEARCH_OPPNENT = 1224,
        EGMI_ACK_SEARCH_OPPNENT = 1225,
        EGMI_REQ_ADJUST_GAMBLE = 1226,
        EGMI_REQ_MOVE = 1230,
        EGMI_ACK_MOVE = 1231,
        EGMI_REQ_MOVE_IMMUNE = 1232,
        EGMI_ACK_MOVE_IMMUNE = 1233,
        EGMI_REQ_STATE_SYNC = 1234,
        EGMI_ACK_STATE_SYNC = 1235,
        EGMI_REQ_SKILL_OBJECTX = 1240,
        EGMI_ACK_SKILL_OBJECTX = 1241,
        EGMI_REQ_SKILL_POS = 1242,
        EGMI_ACK_SKILL_POS = 1243,
        EGMI_REQ_ITEM_OBJECT = 1244,
        EGMI_ACK_ITEM_OBJECT = 1245,
        EGMI_REQ_ITEM_POS = 1246,
        EGMI_ACK_ITEM_POS = 1247,
        EGMI_REQ_CHAT = 1250,
        EGMI_ACK_CHAT = 1251,
        EGMI_REQ_SALE_ITEM = 1252,
        EGMI_REQ_SPLIT_ITEM = 1253,
        EGMI_REQ_PRODUCE_ITEM = 1254,
        EGMI_REQ_PICK_ITEM = 1255,
        EGMI_REQ_ACCEPT_TASK = 1256,
        EGMI_REQ_COMPELETE_TASK = 1257,
        EGMI_ACK_ONLINE_NOTIFY = 1290,
        EGMI_ACK_OFFLINE_NOTIFY = 1291,
        EGMI_REQ_CREATE_GUILD = 1300,
        EGMI_ACK_CREATE_GUILD = 1301,
        EGMI_REQ_JOIN_GUILD = 1302,
        EGMI_ACK_JOIN_GUILD = 1303,
        EGMI_REQ_LEAVE_GUILD = 1304,
        EGMI_ACK_LEAVE_GUILD = 1305,
        EGMI_REQ_OPR_GUILD = 1306,
        EGMI_ACK_OPR_GUILD = 1307,
        EGMI_REQ_SEARCH_GUILD = 1308,
        EGMI_ACK_SEARCH_GUILD = 1309,
        EGMI_REQ_OPR_GUILDINFO = 1310,
        EGMI_ACK_OPR_GUILDINFO = 1311,
        EGMI_REQ_GUILDECTYPEINFO = 1312,
        EGMI_ACK_GUILDECTYPEINFO = 1313,
        EGMI_SET_GUILDECTYPEINFO = 1314,
        EGMI_ReqEnterGuildEctype = 1315,
        EGEC_REQ_CREATE_CHATGROUP = 1400,
        EGEC_ACK_CREATE_CHATGROUP = 1401,
        EGEC_REQ_JOIN_CHATGROUP = 1402,
        EGEC_ACK_JOIN_CHATGROUP = 1403,
        EGEC_REQ_LEAVE_CHATGROUP = 1404,
        EGEC_ACK_LEAVE_CHATGROUP = 1405,
        EGEC_REQ_SUBSCRIPTION_CHATGROUP = 1406,
        EGEC_REQ_CANCELSUBSCRIPTION_CHATGROUP = 1407,
        EGEC_REQ_INVITE_CHATGROUP = 1408,
        EGEC_ACK_INVITE_CHATGROUP = 1409,
        EGEC_REQ_KICK_CHATGROUP = 1410,
        EGEC_ACK_KICK_CHATGROUP = 1411,
        EGEC_REQ_CHATGROUP_TO_TEAM = 1450,
        EGEC_ACK_CHATGROUP_TO_TEAM = 1451,
        EGEC_REQ_INTENSIFYLEVEL_TO_EQUIP = 1500,
        EGEC_ACK_INTENSIFYLEVEL_TO_EQUIP = 1501,
        EGEC_REQ_HOLE_TO_EQUIP = 1502,
        EGEC_ACK_HOLE_TO_EQUIP = 1503,
        EGEC_REQ_INLAYSTONE_TO_EQUIP = 1504,
        EGEC_ACK_INLAYSTONE_TO_EQUIP = 1505,
        EGEC_REQ_ELEMENTLEVEL_TO_EQUIP = 1506,
        EGEC_ACK_ELEMENTLEVEL_TO_EQUIP = 1507,
        EGEC_WEAR_EQUIP = 1508,
        EGEC_TAKEOFF_EQUIP = 1509,
        EGEC_REQ_SET_FIGHT_HERO = 1520,
        EGEC_REQ_SWITCH_FIGHT_HERO = 1521,
        EGEC_REQ_MINING_TITLE = 1600,
        EGEC_ACK_MINING_TITLE = 1601,
        EGEC_REQ_SEND_MAIL = 1700,
        EGEC_REQ_DRAW_MAIL = 1701,
        EGEC_REQ_DELETE_MAIL = 1702,
        EGMI_ACK_CLONE_OBJECT_ENTRY = 1800,
        EGMI_ACK_CLONE_OBJECT_LEAVE = 1801,
        EGMI_ACK_CLONE_OBJECT_PROPERTY_ENTRY = 1802,
        EGMI_ACK_CLONE_OBJECT_RECORD_ENTRY = 1803,
        EGMI_ACK_CLONE_PROPERTY_INT = 1810,
        EGMI_ACK_CLONE_PROPERTY_FLOAT = 1811,
        EGMI_ACK_CLONE_PROPERTY_STRING = 1812,
        EGMI_ACK_CLONE_PROPERTY_OBJECT = 1814,
        EGMI_REQSWICHSERVER = 1840,
        EGMI_ACKSWICHSERVER = 1841,
        EGMI_REQ_CREATE_TEAM = 1860,
        EGMI_ACK_CREATE_TEAM = 1861,
        EGMI_REQ_JOIN_TEAM = 1862,
        EGMI_ACK_JOIN_TEAM = 1863,
        EGMI_REQ_LEAVE_TEAM = 1864,
        EGMI_ACK_LEAVE_TEAM = 1865,
        EGMI_REQ_INVITE_TEAM = 1866,
        EGMI_REQ_OPRMEMBER_TEAM = 1867,
        EGMI_ACK_OPRMEMBER_TEAM = 1868,
        EGMI_REQ_TEAM_ENTER_ECTYPE = 1869,
        EGMI_ACK_TEAM_ENTER_ECTYPE = 1870,
        EGMI_REQ_MAP_GRID_INFO = 1900,
        EGMI_ACK_MAP_GRID_INFO = 1901,
        EGMI_REQ_BIG_MAP_INFO = 1902,
        EGMI_ACK_BIG_MAP_INFO = 1903,
        EGMI_REQ_HOLD_MAP_GRID = 1910,
        EGMI_ACK_HOLD_MAP_GRID = 1911,
        EGMI_REQ_LEAVE_MSG_MAP_GRID = 1912,
        EGMI_ACK_LEAVE_MSG_MAP_GRID = 1913,
        EGMI_REQ_GET_MAP_GRID_AWARD = 1914,
        EGMI_ACK_GET_MAP_GRID_AWARD = 1915,
        EGMI_REQ_MAP_GRID_HUNTING = 1916,
        EGMI_ACK_MAP_GRID_HUNTING = 1917,
        EGMI_REQ_MAP_GRID_KING_WAR = 1918,
        EGMI_ACK_MAP_GRID_KING_WAR = 1919,
        EGMI_REQ_CMD_PROPERTY_INT = 10000,
        EGMI_REQ_CMD_PROPERTY_STR = 10001,
        EGMI_REQ_CMD_PROPERTY_OBJECT = 10002,
        EGMI_REQ_CMD_PROPERTY_FLOAT = 10003,
        EGMI_REQ_CMD_RECORD_INT = 10004,
        EGMI_REQ_CMD_RECORD_STR = 10005,
        EGMI_REQ_CMD_RECORD_OBJECT = 10006,
        EGMI_REQ_CMD_RECORD_FLOAT = 10007,
        EGMI_REQ_CMD_NORMAL = 10008,
        EGMI_REQ_QUERY_SERVER_STATUS = 10200,
        EGMI_REQ_BUY_FORM_SHOP = 20000,
        EGMI_ACK_BUY_FORM_SHOP = 20001,
        EGMI_REQ_MOVE_BUILD_OBJECT = 20002,
        EGMI_ACK_MOVE_BUILD_OBJECT = 20003,
        EGMI_REQ_UP_BUILD_LVL = 20101,
        EGMI_REQ_CREATE_ITEM = 20102,
        EGMI_REQ_BUILD_OPERATE = 20103,
        EGMI_REQ_SEARCH_TO_SHARE = 30000,
        EGMI_ACK_SEARCH_TO_SHARE = 30001,
        EGMI_REQ_SHARE_TO_ATART = 30002,
        EGMI_ACK_SHARE_TO_ATART = 30003
    }

    /** ESkillType enum. */
    enum ESkillType {
        EST_BRIEF_SINGLE = 0,
        EST_BRIEF_GROUP = 1,
        EST_BULLET_SINGLE = 2,
        EST_BULLET_REBOUND = 3,
        EST_BULLET_BOMB = 4,
        EST_TARGET_SINGLE = 5,
        EST_TARGET_GROUP = 6,
        EST_POSITION_GROUP = 7
    }

    /** EItemType enum. */
    enum EItemType {
        EIT_EQUIP = 0,
        EIT_GEM = 1,
        EIT_ITEM = 2,
        EIT_CARD = 3,
        EIT_TOKEN = 4
    }

    /** EGameEquipSubType enum. */
    enum EGameEquipSubType {
        EQUIPTYPE_WEAPON = 0,
        EQUIPTYPE_HELMET = 1,
        EQUIPTYPE_ARMOR = 2,
        EQUIPTYPE_WRIST = 3,
        EQUIPTYPE_PANT = 4,
        EQUIPTYPE_BOOT = 5
    }

    /** EGameGemSubType enum. */
    enum EGameGemSubType {
        EGGSTYPE_GEM_ATK = 0,
        EGGSTYPE_GEM_DEF = 1,
        EGGSTYPE_GEM_FIRE = 3,
        EGGSTYPE_GEM_LIGHT = 4,
        EGGSTYPE_GEM_WIND = 5,
        EGGSTYPE_GEM_ICE = 6,
        EGGSTYPE_GEM_POISON = 7
    }

    /** EGameItemSubType enum. */
    enum EGameItemSubType {
        EGIT_ITEM_WATER = 0,
        EGIT_ITEM_DIAMOND = 1,
        EGIT_ITEM_CURRENCY = 2,
        EGIT_ITEM_EXP = 3,
        EGIT_ITEM_HP = 4,
        EGIT_ITEM_MP = 5,
        EGIT_ITEM_SP = 6,
        EGIT_ITEM_PACK = 7,
        EGIT_ITEM_MEMORY_POS = 8
    }

    /** EGameCardSubType enum. */
    enum EGameCardSubType {
        EGCST_UNKNOW = 0,
        EGCST_STRENGTH = 1,
        EGCST_AGILITY = 2,
        EGCST_INTELLIGENCE = 3
    }

    /** EGameTokenSubType enum. */
    enum EGameTokenSubType {
        EGTST_TOKEN_REBORN = 0,
        EGTST_TOKEN_POSITION = 1,
        EGTST_TOKEN_BOUNTY = 2,
        EGTST_TOKEN_ACTIVITY = 3,
        EGTST_TOKEN_BUILD = 4
    }

    /** EGameItemExpiredType enum. */
    enum EGameItemExpiredType {
        EGIET_NONE = 0,
        EGIET_USE_TIMES = 1,
        EGIET_REAL_TIME = 2,
        EGIET_END_INDEX = 3
    }

    /** EDrawDropItemState enum. */
    enum EDrawDropItemState {
        E_DRAW_STATE_NONE = 0,
        E_DRAW_STATE_GAIN = 1,
        E_DRAW_STATE_RECV = 2
    }

    /** EGuildPowerType enum. */
    enum EGuildPowerType {
        GUILD_POWER_TYPE_NORMAL = 0,
        GUILD_POWER_TYPE_VICE_PRESIDENT = 1,
        GUILD_POWER_TYPE_PRESIDENT = 2
    }

    /** ETaskState enum. */
    enum ETaskState {
        TASK_IN_PROCESS = 0,
        TASK_DONE = 1,
        TASK_DRAW_AWARD = 2,
        TASK_FINISH = 3
    }

    /** ETaskType enum. */
    enum ETaskType {
        TASK_LEVEL_UPDATE_SOME_LEVEL = 0,
        TASK_PASS_ECTYPE = 1,
        TASK_PASS_ECTYPE_COUNT = 2,
        TASK_PASS_SOME_TYPE_ECTYPE_COUNT = 3,
        TASK_UPDATE_SKILL_COUNT = 4,
        TASK_CONSUME_MONEY = 5,
        TASK_CONSUME_DIAMOND = 6,
        TASK_ARENA_COUNT = 7,
        TASK_KILL_MONSTER_COUNT = 8,
        TASK_KILL_SOME_MONSTER_COUNT = 9
    }

    /** EPVPType enum. */
    enum EPVPType {
        PVP_HOME = 0,
        PVP_INDIVIDUAL = 1,
        PVP_DOTA = 2,
        PVP_SURVIVAL = 3,
        PVP_GUILD_WAR = 4,
        PVP_GUILD_DUNGEON = 5
    }

    /** EShopType enum. */
    enum EShopType {
        EST_UNKNOW = 0,
        EST_BUILDING = 1,
        EST_GOLD = 2,
        EST_ITEM = 3,
        EST_EQUIP = 5,
        EST_GEM = 6,
        EST_CARD = 7
    }

    /** ERankType enum. */
    enum ERankType {
        ERT_UNKNOW = 0,
        ERT_PLAYER_LEVEL = 1,
        ERT_FIGHT_VALUE = 2,
        ERT_PLAYER_MONEY = 3,
        ERT_GUILD_LEVEL = 4,
        ERT_GUILD_KINGSOURCE = 5
    }

    /** ENPCType enum. */
    enum ENPCType {
        ENPCTYPE_NORMAL = 0,
        ENPCTYPE_HERO = 1,
        ENPCTYPE_TURRET = 2
    }

    /** ETARGETType enum. */
    enum ETARGETType {
        ETARGETTYPE_ENEMY = 0,
        ETARGETTYPE_SELF = 1,
        ETARGETTYPE_FRIEND = 2
    }

    /** EPropertyType enum. */
    enum EPropertyType {
        EPT_UNKNOW = 0,
        EPT_STRENGTH = 1,
        EPT_AGILITY = 2,
        EPT_INTELLIGENCE = 3
    }

    /** EGameElementType enum. */
    enum EGameElementType {
        EELEMENTTYPE_FIRE = 0,
        EELEMENTTYPE_LIGHT = 1,
        EELEMENTTYPE_WIND = 2,
        EELEMENTTYPE_ICE = 3,
        EELEMENTTYPE_POISON = 4,
        EELEMENTTYPE_DARK = 5
    }

    /** Properties of an Ident. */
    interface IIdent {

        /** Ident svrid */
        svrid?: (number|Long|null);

        /** Ident index */
        index?: (number|Long|null);
    }

    /** Represents an Ident. */
    class Ident implements IIdent {

        /**
         * Constructs a new Ident.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IIdent);

        /** Ident svrid. */
        public svrid: (number|Long);

        /** Ident index. */
        public index: (number|Long);

        /**
         * Creates a new Ident instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ident instance
         */
        public static create(properties?: NFMsg.IIdent): NFMsg.Ident;

        /**
         * Encodes the specified Ident message. Does not implicitly {@link NFMsg.Ident.verify|verify} messages.
         * @param message Ident message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IIdent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Ident message, length delimited. Does not implicitly {@link NFMsg.Ident.verify|verify} messages.
         * @param message Ident message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IIdent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Ident message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.Ident;

        /**
         * Decodes an Ident message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.Ident;

        /**
         * Verifies an Ident message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Vector2. */
    interface IVector2 {

        /** Vector2 x */
        x?: (number|null);

        /** Vector2 y */
        y?: (number|null);
    }

    /** Represents a Vector2. */
    class Vector2 implements IVector2 {

        /**
         * Constructs a new Vector2.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IVector2);

        /** Vector2 x. */
        public x: number;

        /** Vector2 y. */
        public y: number;

        /**
         * Creates a new Vector2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vector2 instance
         */
        public static create(properties?: NFMsg.IVector2): NFMsg.Vector2;

        /**
         * Encodes the specified Vector2 message. Does not implicitly {@link NFMsg.Vector2.verify|verify} messages.
         * @param message Vector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Vector2 message, length delimited. Does not implicitly {@link NFMsg.Vector2.verify|verify} messages.
         * @param message Vector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Vector2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.Vector2;

        /**
         * Decodes a Vector2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.Vector2;

        /**
         * Verifies a Vector2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Vector3. */
    interface IVector3 {

        /** Vector3 x */
        x?: (number|null);

        /** Vector3 y */
        y?: (number|null);

        /** Vector3 z */
        z?: (number|null);
    }

    /** Represents a Vector3. */
    class Vector3 implements IVector3 {

        /**
         * Constructs a new Vector3.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IVector3);

        /** Vector3 x. */
        public x: number;

        /** Vector3 y. */
        public y: number;

        /** Vector3 z. */
        public z: number;

        /**
         * Creates a new Vector3 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vector3 instance
         */
        public static create(properties?: NFMsg.IVector3): NFMsg.Vector3;

        /**
         * Encodes the specified Vector3 message. Does not implicitly {@link NFMsg.Vector3.verify|verify} messages.
         * @param message Vector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link NFMsg.Vector3.verify|verify} messages.
         * @param message Vector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Vector3 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.Vector3;

        /**
         * Decodes a Vector3 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.Vector3;

        /**
         * Verifies a Vector3 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PropertyInt. */
    interface IPropertyInt {

        /** PropertyInt property_name */
        property_name?: (Uint8Array|null);

        /** PropertyInt data */
        data?: (number|Long|null);
    }

    /** BaseCommon///////////////////////////// */
    class PropertyInt implements IPropertyInt {

        /**
         * Constructs a new PropertyInt.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPropertyInt);

        /** PropertyInt property_name. */
        public property_name: Uint8Array;

        /** PropertyInt data. */
        public data: (number|Long);

        /**
         * Creates a new PropertyInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PropertyInt instance
         */
        public static create(properties?: NFMsg.IPropertyInt): NFMsg.PropertyInt;

        /**
         * Encodes the specified PropertyInt message. Does not implicitly {@link NFMsg.PropertyInt.verify|verify} messages.
         * @param message PropertyInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPropertyInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PropertyInt message, length delimited. Does not implicitly {@link NFMsg.PropertyInt.verify|verify} messages.
         * @param message PropertyInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPropertyInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PropertyInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PropertyInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PropertyInt;

        /**
         * Decodes a PropertyInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PropertyInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PropertyInt;

        /**
         * Verifies a PropertyInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PropertyFloat. */
    interface IPropertyFloat {

        /** PropertyFloat property_name */
        property_name?: (Uint8Array|null);

        /** PropertyFloat data */
        data?: (number|null);
    }

    /** Represents a PropertyFloat. */
    class PropertyFloat implements IPropertyFloat {

        /**
         * Constructs a new PropertyFloat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPropertyFloat);

        /** PropertyFloat property_name. */
        public property_name: Uint8Array;

        /** PropertyFloat data. */
        public data: number;

        /**
         * Creates a new PropertyFloat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PropertyFloat instance
         */
        public static create(properties?: NFMsg.IPropertyFloat): NFMsg.PropertyFloat;

        /**
         * Encodes the specified PropertyFloat message. Does not implicitly {@link NFMsg.PropertyFloat.verify|verify} messages.
         * @param message PropertyFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPropertyFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PropertyFloat message, length delimited. Does not implicitly {@link NFMsg.PropertyFloat.verify|verify} messages.
         * @param message PropertyFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPropertyFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PropertyFloat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PropertyFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PropertyFloat;

        /**
         * Decodes a PropertyFloat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PropertyFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PropertyFloat;

        /**
         * Verifies a PropertyFloat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PropertyString. */
    interface IPropertyString {

        /** PropertyString property_name */
        property_name?: (Uint8Array|null);

        /** PropertyString data */
        data?: (Uint8Array|null);
    }

    /** Represents a PropertyString. */
    class PropertyString implements IPropertyString {

        /**
         * Constructs a new PropertyString.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPropertyString);

        /** PropertyString property_name. */
        public property_name: Uint8Array;

        /** PropertyString data. */
        public data: Uint8Array;

        /**
         * Creates a new PropertyString instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PropertyString instance
         */
        public static create(properties?: NFMsg.IPropertyString): NFMsg.PropertyString;

        /**
         * Encodes the specified PropertyString message. Does not implicitly {@link NFMsg.PropertyString.verify|verify} messages.
         * @param message PropertyString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPropertyString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PropertyString message, length delimited. Does not implicitly {@link NFMsg.PropertyString.verify|verify} messages.
         * @param message PropertyString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPropertyString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PropertyString message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PropertyString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PropertyString;

        /**
         * Decodes a PropertyString message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PropertyString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PropertyString;

        /**
         * Verifies a PropertyString message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PropertyObject. */
    interface IPropertyObject {

        /** PropertyObject property_name */
        property_name?: (Uint8Array|null);

        /** PropertyObject data */
        data?: (NFMsg.IIdent|null);
    }

    /** Represents a PropertyObject. */
    class PropertyObject implements IPropertyObject {

        /**
         * Constructs a new PropertyObject.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPropertyObject);

        /** PropertyObject property_name. */
        public property_name: Uint8Array;

        /** PropertyObject data. */
        public data?: (NFMsg.IIdent|null);

        /**
         * Creates a new PropertyObject instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PropertyObject instance
         */
        public static create(properties?: NFMsg.IPropertyObject): NFMsg.PropertyObject;

        /**
         * Encodes the specified PropertyObject message. Does not implicitly {@link NFMsg.PropertyObject.verify|verify} messages.
         * @param message PropertyObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPropertyObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PropertyObject message, length delimited. Does not implicitly {@link NFMsg.PropertyObject.verify|verify} messages.
         * @param message PropertyObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPropertyObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PropertyObject message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PropertyObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PropertyObject;

        /**
         * Decodes a PropertyObject message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PropertyObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PropertyObject;

        /**
         * Verifies a PropertyObject message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PropertyVector2. */
    interface IPropertyVector2 {

        /** PropertyVector2 property_name */
        property_name?: (Uint8Array|null);

        /** PropertyVector2 data */
        data?: (NFMsg.IVector2|null);
    }

    /** Represents a PropertyVector2. */
    class PropertyVector2 implements IPropertyVector2 {

        /**
         * Constructs a new PropertyVector2.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPropertyVector2);

        /** PropertyVector2 property_name. */
        public property_name: Uint8Array;

        /** PropertyVector2 data. */
        public data?: (NFMsg.IVector2|null);

        /**
         * Creates a new PropertyVector2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PropertyVector2 instance
         */
        public static create(properties?: NFMsg.IPropertyVector2): NFMsg.PropertyVector2;

        /**
         * Encodes the specified PropertyVector2 message. Does not implicitly {@link NFMsg.PropertyVector2.verify|verify} messages.
         * @param message PropertyVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPropertyVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PropertyVector2 message, length delimited. Does not implicitly {@link NFMsg.PropertyVector2.verify|verify} messages.
         * @param message PropertyVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPropertyVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PropertyVector2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PropertyVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PropertyVector2;

        /**
         * Decodes a PropertyVector2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PropertyVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PropertyVector2;

        /**
         * Verifies a PropertyVector2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PropertyVector3. */
    interface IPropertyVector3 {

        /** PropertyVector3 property_name */
        property_name?: (Uint8Array|null);

        /** PropertyVector3 data */
        data?: (NFMsg.IVector3|null);
    }

    /** Represents a PropertyVector3. */
    class PropertyVector3 implements IPropertyVector3 {

        /**
         * Constructs a new PropertyVector3.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPropertyVector3);

        /** PropertyVector3 property_name. */
        public property_name: Uint8Array;

        /** PropertyVector3 data. */
        public data?: (NFMsg.IVector3|null);

        /**
         * Creates a new PropertyVector3 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PropertyVector3 instance
         */
        public static create(properties?: NFMsg.IPropertyVector3): NFMsg.PropertyVector3;

        /**
         * Encodes the specified PropertyVector3 message. Does not implicitly {@link NFMsg.PropertyVector3.verify|verify} messages.
         * @param message PropertyVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPropertyVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PropertyVector3 message, length delimited. Does not implicitly {@link NFMsg.PropertyVector3.verify|verify} messages.
         * @param message PropertyVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPropertyVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PropertyVector3 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PropertyVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PropertyVector3;

        /**
         * Decodes a PropertyVector3 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PropertyVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PropertyVector3;

        /**
         * Verifies a PropertyVector3 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RecordInt. */
    interface IRecordInt {

        /** RecordInt row */
        row?: (number|null);

        /** RecordInt col */
        col?: (number|null);

        /** RecordInt data */
        data?: (number|Long|null);
    }

    /** Represents a RecordInt. */
    class RecordInt implements IRecordInt {

        /**
         * Constructs a new RecordInt.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRecordInt);

        /** RecordInt row. */
        public row: number;

        /** RecordInt col. */
        public col: number;

        /** RecordInt data. */
        public data: (number|Long);

        /**
         * Creates a new RecordInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordInt instance
         */
        public static create(properties?: NFMsg.IRecordInt): NFMsg.RecordInt;

        /**
         * Encodes the specified RecordInt message. Does not implicitly {@link NFMsg.RecordInt.verify|verify} messages.
         * @param message RecordInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRecordInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecordInt message, length delimited. Does not implicitly {@link NFMsg.RecordInt.verify|verify} messages.
         * @param message RecordInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRecordInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RecordInt;

        /**
         * Decodes a RecordInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RecordInt;

        /**
         * Verifies a RecordInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RecordFloat. */
    interface IRecordFloat {

        /** RecordFloat row */
        row?: (number|null);

        /** RecordFloat col */
        col?: (number|null);

        /** RecordFloat data */
        data?: (number|null);
    }

    /** Represents a RecordFloat. */
    class RecordFloat implements IRecordFloat {

        /**
         * Constructs a new RecordFloat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRecordFloat);

        /** RecordFloat row. */
        public row: number;

        /** RecordFloat col. */
        public col: number;

        /** RecordFloat data. */
        public data: number;

        /**
         * Creates a new RecordFloat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordFloat instance
         */
        public static create(properties?: NFMsg.IRecordFloat): NFMsg.RecordFloat;

        /**
         * Encodes the specified RecordFloat message. Does not implicitly {@link NFMsg.RecordFloat.verify|verify} messages.
         * @param message RecordFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRecordFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecordFloat message, length delimited. Does not implicitly {@link NFMsg.RecordFloat.verify|verify} messages.
         * @param message RecordFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRecordFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordFloat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RecordFloat;

        /**
         * Decodes a RecordFloat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RecordFloat;

        /**
         * Verifies a RecordFloat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RecordString. */
    interface IRecordString {

        /** RecordString row */
        row?: (number|null);

        /** RecordString col */
        col?: (number|null);

        /** RecordString data */
        data?: (Uint8Array|null);
    }

    /** Represents a RecordString. */
    class RecordString implements IRecordString {

        /**
         * Constructs a new RecordString.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRecordString);

        /** RecordString row. */
        public row: number;

        /** RecordString col. */
        public col: number;

        /** RecordString data. */
        public data: Uint8Array;

        /**
         * Creates a new RecordString instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordString instance
         */
        public static create(properties?: NFMsg.IRecordString): NFMsg.RecordString;

        /**
         * Encodes the specified RecordString message. Does not implicitly {@link NFMsg.RecordString.verify|verify} messages.
         * @param message RecordString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRecordString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecordString message, length delimited. Does not implicitly {@link NFMsg.RecordString.verify|verify} messages.
         * @param message RecordString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRecordString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordString message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RecordString;

        /**
         * Decodes a RecordString message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RecordString;

        /**
         * Verifies a RecordString message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RecordObject. */
    interface IRecordObject {

        /** RecordObject row */
        row?: (number|null);

        /** RecordObject col */
        col?: (number|null);

        /** RecordObject data */
        data?: (NFMsg.IIdent|null);
    }

    /** Represents a RecordObject. */
    class RecordObject implements IRecordObject {

        /**
         * Constructs a new RecordObject.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRecordObject);

        /** RecordObject row. */
        public row: number;

        /** RecordObject col. */
        public col: number;

        /** RecordObject data. */
        public data?: (NFMsg.IIdent|null);

        /**
         * Creates a new RecordObject instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordObject instance
         */
        public static create(properties?: NFMsg.IRecordObject): NFMsg.RecordObject;

        /**
         * Encodes the specified RecordObject message. Does not implicitly {@link NFMsg.RecordObject.verify|verify} messages.
         * @param message RecordObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRecordObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecordObject message, length delimited. Does not implicitly {@link NFMsg.RecordObject.verify|verify} messages.
         * @param message RecordObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRecordObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordObject message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RecordObject;

        /**
         * Decodes a RecordObject message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RecordObject;

        /**
         * Verifies a RecordObject message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RecordVector2. */
    interface IRecordVector2 {

        /** RecordVector2 row */
        row?: (number|null);

        /** RecordVector2 col */
        col?: (number|null);

        /** RecordVector2 data */
        data?: (NFMsg.IVector2|null);
    }

    /** Represents a RecordVector2. */
    class RecordVector2 implements IRecordVector2 {

        /**
         * Constructs a new RecordVector2.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRecordVector2);

        /** RecordVector2 row. */
        public row: number;

        /** RecordVector2 col. */
        public col: number;

        /** RecordVector2 data. */
        public data?: (NFMsg.IVector2|null);

        /**
         * Creates a new RecordVector2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordVector2 instance
         */
        public static create(properties?: NFMsg.IRecordVector2): NFMsg.RecordVector2;

        /**
         * Encodes the specified RecordVector2 message. Does not implicitly {@link NFMsg.RecordVector2.verify|verify} messages.
         * @param message RecordVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRecordVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecordVector2 message, length delimited. Does not implicitly {@link NFMsg.RecordVector2.verify|verify} messages.
         * @param message RecordVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRecordVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordVector2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RecordVector2;

        /**
         * Decodes a RecordVector2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RecordVector2;

        /**
         * Verifies a RecordVector2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RecordVector3. */
    interface IRecordVector3 {

        /** RecordVector3 row */
        row?: (number|null);

        /** RecordVector3 col */
        col?: (number|null);

        /** RecordVector3 data */
        data?: (NFMsg.IVector3|null);
    }

    /** Represents a RecordVector3. */
    class RecordVector3 implements IRecordVector3 {

        /**
         * Constructs a new RecordVector3.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRecordVector3);

        /** RecordVector3 row. */
        public row: number;

        /** RecordVector3 col. */
        public col: number;

        /** RecordVector3 data. */
        public data?: (NFMsg.IVector3|null);

        /**
         * Creates a new RecordVector3 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordVector3 instance
         */
        public static create(properties?: NFMsg.IRecordVector3): NFMsg.RecordVector3;

        /**
         * Encodes the specified RecordVector3 message. Does not implicitly {@link NFMsg.RecordVector3.verify|verify} messages.
         * @param message RecordVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRecordVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecordVector3 message, length delimited. Does not implicitly {@link NFMsg.RecordVector3.verify|verify} messages.
         * @param message RecordVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRecordVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordVector3 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RecordVector3;

        /**
         * Decodes a RecordVector3 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RecordVector3;

        /**
         * Verifies a RecordVector3 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RecordAddRowStruct. */
    interface IRecordAddRowStruct {

        /** RecordAddRowStruct row */
        row?: (number|null);

        /** RecordAddRowStruct record_int_list */
        record_int_list?: (NFMsg.IRecordInt[]|null);

        /** RecordAddRowStruct record_float_list */
        record_float_list?: (NFMsg.IRecordFloat[]|null);

        /** RecordAddRowStruct record_string_list */
        record_string_list?: (NFMsg.IRecordString[]|null);

        /** RecordAddRowStruct record_object_list */
        record_object_list?: (NFMsg.IRecordObject[]|null);

        /** RecordAddRowStruct record_vector2_list */
        record_vector2_list?: (NFMsg.IRecordVector2[]|null);

        /** RecordAddRowStruct record_vector3_list */
        record_vector3_list?: (NFMsg.IRecordVector3[]|null);
    }

    /** Represents a RecordAddRowStruct. */
    class RecordAddRowStruct implements IRecordAddRowStruct {

        /**
         * Constructs a new RecordAddRowStruct.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRecordAddRowStruct);

        /** RecordAddRowStruct row. */
        public row: number;

        /** RecordAddRowStruct record_int_list. */
        public record_int_list: NFMsg.IRecordInt[];

        /** RecordAddRowStruct record_float_list. */
        public record_float_list: NFMsg.IRecordFloat[];

        /** RecordAddRowStruct record_string_list. */
        public record_string_list: NFMsg.IRecordString[];

        /** RecordAddRowStruct record_object_list. */
        public record_object_list: NFMsg.IRecordObject[];

        /** RecordAddRowStruct record_vector2_list. */
        public record_vector2_list: NFMsg.IRecordVector2[];

        /** RecordAddRowStruct record_vector3_list. */
        public record_vector3_list: NFMsg.IRecordVector3[];

        /**
         * Creates a new RecordAddRowStruct instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordAddRowStruct instance
         */
        public static create(properties?: NFMsg.IRecordAddRowStruct): NFMsg.RecordAddRowStruct;

        /**
         * Encodes the specified RecordAddRowStruct message. Does not implicitly {@link NFMsg.RecordAddRowStruct.verify|verify} messages.
         * @param message RecordAddRowStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRecordAddRowStruct, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecordAddRowStruct message, length delimited. Does not implicitly {@link NFMsg.RecordAddRowStruct.verify|verify} messages.
         * @param message RecordAddRowStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRecordAddRowStruct, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecordAddRowStruct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordAddRowStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RecordAddRowStruct;

        /**
         * Decodes a RecordAddRowStruct message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordAddRowStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RecordAddRowStruct;

        /**
         * Verifies a RecordAddRowStruct message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordBase. */
    interface IObjectRecordBase {

        /** ObjectRecordBase record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordBase row_struct */
        row_struct?: (NFMsg.IRecordAddRowStruct[]|null);
    }

    /** Represents an ObjectRecordBase. */
    class ObjectRecordBase implements IObjectRecordBase {

        /**
         * Constructs a new ObjectRecordBase.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordBase);

        /** ObjectRecordBase record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordBase row_struct. */
        public row_struct: NFMsg.IRecordAddRowStruct[];

        /**
         * Creates a new ObjectRecordBase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordBase instance
         */
        public static create(properties?: NFMsg.IObjectRecordBase): NFMsg.ObjectRecordBase;

        /**
         * Encodes the specified ObjectRecordBase message. Does not implicitly {@link NFMsg.ObjectRecordBase.verify|verify} messages.
         * @param message ObjectRecordBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordBase message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordBase.verify|verify} messages.
         * @param message ObjectRecordBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordBase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordBase;

        /**
         * Decodes an ObjectRecordBase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordBase;

        /**
         * Verifies an ObjectRecordBase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectPropertyInt. */
    interface IObjectPropertyInt {

        /** ObjectPropertyInt player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyInt property_list */
        property_list?: (NFMsg.IPropertyInt[]|null);
    }

    /** Represents an ObjectPropertyInt. */
    class ObjectPropertyInt implements IObjectPropertyInt {

        /**
         * Constructs a new ObjectPropertyInt.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectPropertyInt);

        /** ObjectPropertyInt player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyInt property_list. */
        public property_list: NFMsg.IPropertyInt[];

        /**
         * Creates a new ObjectPropertyInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectPropertyInt instance
         */
        public static create(properties?: NFMsg.IObjectPropertyInt): NFMsg.ObjectPropertyInt;

        /**
         * Encodes the specified ObjectPropertyInt message. Does not implicitly {@link NFMsg.ObjectPropertyInt.verify|verify} messages.
         * @param message ObjectPropertyInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectPropertyInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectPropertyInt message, length delimited. Does not implicitly {@link NFMsg.ObjectPropertyInt.verify|verify} messages.
         * @param message ObjectPropertyInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectPropertyInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectPropertyInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectPropertyInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectPropertyInt;

        /**
         * Decodes an ObjectPropertyInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectPropertyInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectPropertyInt;

        /**
         * Verifies an ObjectPropertyInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectPropertyFloat. */
    interface IObjectPropertyFloat {

        /** ObjectPropertyFloat player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyFloat property_list */
        property_list?: (NFMsg.IPropertyFloat[]|null);
    }

    /** Represents an ObjectPropertyFloat. */
    class ObjectPropertyFloat implements IObjectPropertyFloat {

        /**
         * Constructs a new ObjectPropertyFloat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectPropertyFloat);

        /** ObjectPropertyFloat player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyFloat property_list. */
        public property_list: NFMsg.IPropertyFloat[];

        /**
         * Creates a new ObjectPropertyFloat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectPropertyFloat instance
         */
        public static create(properties?: NFMsg.IObjectPropertyFloat): NFMsg.ObjectPropertyFloat;

        /**
         * Encodes the specified ObjectPropertyFloat message. Does not implicitly {@link NFMsg.ObjectPropertyFloat.verify|verify} messages.
         * @param message ObjectPropertyFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectPropertyFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectPropertyFloat message, length delimited. Does not implicitly {@link NFMsg.ObjectPropertyFloat.verify|verify} messages.
         * @param message ObjectPropertyFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectPropertyFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectPropertyFloat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectPropertyFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectPropertyFloat;

        /**
         * Decodes an ObjectPropertyFloat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectPropertyFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectPropertyFloat;

        /**
         * Verifies an ObjectPropertyFloat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectPropertyString. */
    interface IObjectPropertyString {

        /** ObjectPropertyString player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyString property_list */
        property_list?: (NFMsg.IPropertyString[]|null);
    }

    /** Represents an ObjectPropertyString. */
    class ObjectPropertyString implements IObjectPropertyString {

        /**
         * Constructs a new ObjectPropertyString.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectPropertyString);

        /** ObjectPropertyString player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyString property_list. */
        public property_list: NFMsg.IPropertyString[];

        /**
         * Creates a new ObjectPropertyString instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectPropertyString instance
         */
        public static create(properties?: NFMsg.IObjectPropertyString): NFMsg.ObjectPropertyString;

        /**
         * Encodes the specified ObjectPropertyString message. Does not implicitly {@link NFMsg.ObjectPropertyString.verify|verify} messages.
         * @param message ObjectPropertyString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectPropertyString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectPropertyString message, length delimited. Does not implicitly {@link NFMsg.ObjectPropertyString.verify|verify} messages.
         * @param message ObjectPropertyString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectPropertyString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectPropertyString message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectPropertyString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectPropertyString;

        /**
         * Decodes an ObjectPropertyString message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectPropertyString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectPropertyString;

        /**
         * Verifies an ObjectPropertyString message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectPropertyObject. */
    interface IObjectPropertyObject {

        /** ObjectPropertyObject player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyObject property_list */
        property_list?: (NFMsg.IPropertyObject[]|null);
    }

    /** Represents an ObjectPropertyObject. */
    class ObjectPropertyObject implements IObjectPropertyObject {

        /**
         * Constructs a new ObjectPropertyObject.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectPropertyObject);

        /** ObjectPropertyObject player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyObject property_list. */
        public property_list: NFMsg.IPropertyObject[];

        /**
         * Creates a new ObjectPropertyObject instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectPropertyObject instance
         */
        public static create(properties?: NFMsg.IObjectPropertyObject): NFMsg.ObjectPropertyObject;

        /**
         * Encodes the specified ObjectPropertyObject message. Does not implicitly {@link NFMsg.ObjectPropertyObject.verify|verify} messages.
         * @param message ObjectPropertyObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectPropertyObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectPropertyObject message, length delimited. Does not implicitly {@link NFMsg.ObjectPropertyObject.verify|verify} messages.
         * @param message ObjectPropertyObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectPropertyObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectPropertyObject message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectPropertyObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectPropertyObject;

        /**
         * Decodes an ObjectPropertyObject message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectPropertyObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectPropertyObject;

        /**
         * Verifies an ObjectPropertyObject message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectPropertyVector2. */
    interface IObjectPropertyVector2 {

        /** ObjectPropertyVector2 player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyVector2 property_list */
        property_list?: (NFMsg.IPropertyVector2[]|null);
    }

    /** Represents an ObjectPropertyVector2. */
    class ObjectPropertyVector2 implements IObjectPropertyVector2 {

        /**
         * Constructs a new ObjectPropertyVector2.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectPropertyVector2);

        /** ObjectPropertyVector2 player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyVector2 property_list. */
        public property_list: NFMsg.IPropertyVector2[];

        /**
         * Creates a new ObjectPropertyVector2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectPropertyVector2 instance
         */
        public static create(properties?: NFMsg.IObjectPropertyVector2): NFMsg.ObjectPropertyVector2;

        /**
         * Encodes the specified ObjectPropertyVector2 message. Does not implicitly {@link NFMsg.ObjectPropertyVector2.verify|verify} messages.
         * @param message ObjectPropertyVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectPropertyVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectPropertyVector2 message, length delimited. Does not implicitly {@link NFMsg.ObjectPropertyVector2.verify|verify} messages.
         * @param message ObjectPropertyVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectPropertyVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectPropertyVector2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectPropertyVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectPropertyVector2;

        /**
         * Decodes an ObjectPropertyVector2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectPropertyVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectPropertyVector2;

        /**
         * Verifies an ObjectPropertyVector2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectPropertyVector3. */
    interface IObjectPropertyVector3 {

        /** ObjectPropertyVector3 player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyVector3 property_list */
        property_list?: (NFMsg.IPropertyVector3[]|null);
    }

    /** Represents an ObjectPropertyVector3. */
    class ObjectPropertyVector3 implements IObjectPropertyVector3 {

        /**
         * Constructs a new ObjectPropertyVector3.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectPropertyVector3);

        /** ObjectPropertyVector3 player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyVector3 property_list. */
        public property_list: NFMsg.IPropertyVector3[];

        /**
         * Creates a new ObjectPropertyVector3 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectPropertyVector3 instance
         */
        public static create(properties?: NFMsg.IObjectPropertyVector3): NFMsg.ObjectPropertyVector3;

        /**
         * Encodes the specified ObjectPropertyVector3 message. Does not implicitly {@link NFMsg.ObjectPropertyVector3.verify|verify} messages.
         * @param message ObjectPropertyVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectPropertyVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectPropertyVector3 message, length delimited. Does not implicitly {@link NFMsg.ObjectPropertyVector3.verify|verify} messages.
         * @param message ObjectPropertyVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectPropertyVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectPropertyVector3 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectPropertyVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectPropertyVector3;

        /**
         * Decodes an ObjectPropertyVector3 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectPropertyVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectPropertyVector3;

        /**
         * Verifies an ObjectPropertyVector3 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordInt. */
    interface IObjectRecordInt {

        /** ObjectRecordInt player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordInt record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordInt property_list */
        property_list?: (NFMsg.IRecordInt[]|null);
    }

    /** Represents an ObjectRecordInt. */
    class ObjectRecordInt implements IObjectRecordInt {

        /**
         * Constructs a new ObjectRecordInt.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordInt);

        /** ObjectRecordInt player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordInt record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordInt property_list. */
        public property_list: NFMsg.IRecordInt[];

        /**
         * Creates a new ObjectRecordInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordInt instance
         */
        public static create(properties?: NFMsg.IObjectRecordInt): NFMsg.ObjectRecordInt;

        /**
         * Encodes the specified ObjectRecordInt message. Does not implicitly {@link NFMsg.ObjectRecordInt.verify|verify} messages.
         * @param message ObjectRecordInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordInt message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordInt.verify|verify} messages.
         * @param message ObjectRecordInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordInt;

        /**
         * Decodes an ObjectRecordInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordInt;

        /**
         * Verifies an ObjectRecordInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordFloat. */
    interface IObjectRecordFloat {

        /** ObjectRecordFloat player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordFloat record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordFloat property_list */
        property_list?: (NFMsg.IRecordFloat[]|null);
    }

    /** Represents an ObjectRecordFloat. */
    class ObjectRecordFloat implements IObjectRecordFloat {

        /**
         * Constructs a new ObjectRecordFloat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordFloat);

        /** ObjectRecordFloat player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordFloat record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordFloat property_list. */
        public property_list: NFMsg.IRecordFloat[];

        /**
         * Creates a new ObjectRecordFloat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordFloat instance
         */
        public static create(properties?: NFMsg.IObjectRecordFloat): NFMsg.ObjectRecordFloat;

        /**
         * Encodes the specified ObjectRecordFloat message. Does not implicitly {@link NFMsg.ObjectRecordFloat.verify|verify} messages.
         * @param message ObjectRecordFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordFloat message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordFloat.verify|verify} messages.
         * @param message ObjectRecordFloat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordFloat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordFloat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordFloat;

        /**
         * Decodes an ObjectRecordFloat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordFloat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordFloat;

        /**
         * Verifies an ObjectRecordFloat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordString. */
    interface IObjectRecordString {

        /** ObjectRecordString player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordString record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordString property_list */
        property_list?: (NFMsg.IRecordString[]|null);
    }

    /** Represents an ObjectRecordString. */
    class ObjectRecordString implements IObjectRecordString {

        /**
         * Constructs a new ObjectRecordString.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordString);

        /** ObjectRecordString player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordString record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordString property_list. */
        public property_list: NFMsg.IRecordString[];

        /**
         * Creates a new ObjectRecordString instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordString instance
         */
        public static create(properties?: NFMsg.IObjectRecordString): NFMsg.ObjectRecordString;

        /**
         * Encodes the specified ObjectRecordString message. Does not implicitly {@link NFMsg.ObjectRecordString.verify|verify} messages.
         * @param message ObjectRecordString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordString message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordString.verify|verify} messages.
         * @param message ObjectRecordString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordString message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordString;

        /**
         * Decodes an ObjectRecordString message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordString;

        /**
         * Verifies an ObjectRecordString message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordObject. */
    interface IObjectRecordObject {

        /** ObjectRecordObject player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordObject record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordObject property_list */
        property_list?: (NFMsg.IRecordObject[]|null);
    }

    /** Represents an ObjectRecordObject. */
    class ObjectRecordObject implements IObjectRecordObject {

        /**
         * Constructs a new ObjectRecordObject.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordObject);

        /** ObjectRecordObject player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordObject record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordObject property_list. */
        public property_list: NFMsg.IRecordObject[];

        /**
         * Creates a new ObjectRecordObject instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordObject instance
         */
        public static create(properties?: NFMsg.IObjectRecordObject): NFMsg.ObjectRecordObject;

        /**
         * Encodes the specified ObjectRecordObject message. Does not implicitly {@link NFMsg.ObjectRecordObject.verify|verify} messages.
         * @param message ObjectRecordObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordObject message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordObject.verify|verify} messages.
         * @param message ObjectRecordObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordObject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordObject message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordObject;

        /**
         * Decodes an ObjectRecordObject message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordObject;

        /**
         * Verifies an ObjectRecordObject message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordVector2. */
    interface IObjectRecordVector2 {

        /** ObjectRecordVector2 player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordVector2 record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordVector2 property_list */
        property_list?: (NFMsg.IRecordVector2[]|null);
    }

    /** Represents an ObjectRecordVector2. */
    class ObjectRecordVector2 implements IObjectRecordVector2 {

        /**
         * Constructs a new ObjectRecordVector2.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordVector2);

        /** ObjectRecordVector2 player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordVector2 record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordVector2 property_list. */
        public property_list: NFMsg.IRecordVector2[];

        /**
         * Creates a new ObjectRecordVector2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordVector2 instance
         */
        public static create(properties?: NFMsg.IObjectRecordVector2): NFMsg.ObjectRecordVector2;

        /**
         * Encodes the specified ObjectRecordVector2 message. Does not implicitly {@link NFMsg.ObjectRecordVector2.verify|verify} messages.
         * @param message ObjectRecordVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordVector2 message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordVector2.verify|verify} messages.
         * @param message ObjectRecordVector2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordVector2, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordVector2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordVector2;

        /**
         * Decodes an ObjectRecordVector2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordVector2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordVector2;

        /**
         * Verifies an ObjectRecordVector2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordVector3. */
    interface IObjectRecordVector3 {

        /** ObjectRecordVector3 player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordVector3 record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordVector3 property_list */
        property_list?: (NFMsg.IRecordVector3[]|null);
    }

    /** Represents an ObjectRecordVector3. */
    class ObjectRecordVector3 implements IObjectRecordVector3 {

        /**
         * Constructs a new ObjectRecordVector3.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordVector3);

        /** ObjectRecordVector3 player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordVector3 record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordVector3 property_list. */
        public property_list: NFMsg.IRecordVector3[];

        /**
         * Creates a new ObjectRecordVector3 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordVector3 instance
         */
        public static create(properties?: NFMsg.IObjectRecordVector3): NFMsg.ObjectRecordVector3;

        /**
         * Encodes the specified ObjectRecordVector3 message. Does not implicitly {@link NFMsg.ObjectRecordVector3.verify|verify} messages.
         * @param message ObjectRecordVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordVector3 message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordVector3.verify|verify} messages.
         * @param message ObjectRecordVector3 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordVector3, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordVector3 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordVector3;

        /**
         * Decodes an ObjectRecordVector3 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordVector3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordVector3;

        /**
         * Verifies an ObjectRecordVector3 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordSwap. */
    interface IObjectRecordSwap {

        /** ObjectRecordSwap player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordSwap origin_record_name */
        origin_record_name?: (Uint8Array|null);

        /** ObjectRecordSwap target_record_name */
        target_record_name?: (Uint8Array|null);

        /** ObjectRecordSwap row_origin */
        row_origin?: (number|null);

        /** ObjectRecordSwap row_target */
        row_target?: (number|null);
    }

    /** Represents an ObjectRecordSwap. */
    class ObjectRecordSwap implements IObjectRecordSwap {

        /**
         * Constructs a new ObjectRecordSwap.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordSwap);

        /** ObjectRecordSwap player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordSwap origin_record_name. */
        public origin_record_name: Uint8Array;

        /** ObjectRecordSwap target_record_name. */
        public target_record_name: Uint8Array;

        /** ObjectRecordSwap row_origin. */
        public row_origin: number;

        /** ObjectRecordSwap row_target. */
        public row_target: number;

        /**
         * Creates a new ObjectRecordSwap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordSwap instance
         */
        public static create(properties?: NFMsg.IObjectRecordSwap): NFMsg.ObjectRecordSwap;

        /**
         * Encodes the specified ObjectRecordSwap message. Does not implicitly {@link NFMsg.ObjectRecordSwap.verify|verify} messages.
         * @param message ObjectRecordSwap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordSwap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordSwap message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordSwap.verify|verify} messages.
         * @param message ObjectRecordSwap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordSwap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordSwap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordSwap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordSwap;

        /**
         * Decodes an ObjectRecordSwap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordSwap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordSwap;

        /**
         * Verifies an ObjectRecordSwap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordAddRow. */
    interface IObjectRecordAddRow {

        /** ObjectRecordAddRow player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordAddRow record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordAddRow row_data */
        row_data?: (NFMsg.IRecordAddRowStruct[]|null);
    }

    /** Represents an ObjectRecordAddRow. */
    class ObjectRecordAddRow implements IObjectRecordAddRow {

        /**
         * Constructs a new ObjectRecordAddRow.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordAddRow);

        /** ObjectRecordAddRow player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordAddRow record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordAddRow row_data. */
        public row_data: NFMsg.IRecordAddRowStruct[];

        /**
         * Creates a new ObjectRecordAddRow instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordAddRow instance
         */
        public static create(properties?: NFMsg.IObjectRecordAddRow): NFMsg.ObjectRecordAddRow;

        /**
         * Encodes the specified ObjectRecordAddRow message. Does not implicitly {@link NFMsg.ObjectRecordAddRow.verify|verify} messages.
         * @param message ObjectRecordAddRow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordAddRow, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordAddRow message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordAddRow.verify|verify} messages.
         * @param message ObjectRecordAddRow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordAddRow, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordAddRow message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordAddRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordAddRow;

        /**
         * Decodes an ObjectRecordAddRow message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordAddRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordAddRow;

        /**
         * Verifies an ObjectRecordAddRow message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordRemove. */
    interface IObjectRecordRemove {

        /** ObjectRecordRemove player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordRemove record_name */
        record_name?: (Uint8Array|null);

        /** ObjectRecordRemove remove_row */
        remove_row?: (number[]|null);
    }

    /** Represents an ObjectRecordRemove. */
    class ObjectRecordRemove implements IObjectRecordRemove {

        /**
         * Constructs a new ObjectRecordRemove.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordRemove);

        /** ObjectRecordRemove player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordRemove record_name. */
        public record_name: Uint8Array;

        /** ObjectRecordRemove remove_row. */
        public remove_row: number[];

        /**
         * Creates a new ObjectRecordRemove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordRemove instance
         */
        public static create(properties?: NFMsg.IObjectRecordRemove): NFMsg.ObjectRecordRemove;

        /**
         * Encodes the specified ObjectRecordRemove message. Does not implicitly {@link NFMsg.ObjectRecordRemove.verify|verify} messages.
         * @param message ObjectRecordRemove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordRemove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordRemove message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordRemove.verify|verify} messages.
         * @param message ObjectRecordRemove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordRemove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordRemove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordRemove;

        /**
         * Decodes an ObjectRecordRemove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordRemove;

        /**
         * Verifies an ObjectRecordRemove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectPropertyList. */
    interface IObjectPropertyList {

        /** ObjectPropertyList player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyList property_int_list */
        property_int_list?: (NFMsg.IPropertyInt[]|null);

        /** ObjectPropertyList property_float_list */
        property_float_list?: (NFMsg.IPropertyFloat[]|null);

        /** ObjectPropertyList property_string_list */
        property_string_list?: (NFMsg.IPropertyString[]|null);

        /** ObjectPropertyList property_object_list */
        property_object_list?: (NFMsg.IPropertyObject[]|null);

        /** ObjectPropertyList property_vector2_list */
        property_vector2_list?: (NFMsg.IPropertyVector2[]|null);

        /** ObjectPropertyList property_vector3_list */
        property_vector3_list?: (NFMsg.IPropertyVector3[]|null);
    }

    /** Represents an ObjectPropertyList. */
    class ObjectPropertyList implements IObjectPropertyList {

        /**
         * Constructs a new ObjectPropertyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectPropertyList);

        /** ObjectPropertyList player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectPropertyList property_int_list. */
        public property_int_list: NFMsg.IPropertyInt[];

        /** ObjectPropertyList property_float_list. */
        public property_float_list: NFMsg.IPropertyFloat[];

        /** ObjectPropertyList property_string_list. */
        public property_string_list: NFMsg.IPropertyString[];

        /** ObjectPropertyList property_object_list. */
        public property_object_list: NFMsg.IPropertyObject[];

        /** ObjectPropertyList property_vector2_list. */
        public property_vector2_list: NFMsg.IPropertyVector2[];

        /** ObjectPropertyList property_vector3_list. */
        public property_vector3_list: NFMsg.IPropertyVector3[];

        /**
         * Creates a new ObjectPropertyList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectPropertyList instance
         */
        public static create(properties?: NFMsg.IObjectPropertyList): NFMsg.ObjectPropertyList;

        /**
         * Encodes the specified ObjectPropertyList message. Does not implicitly {@link NFMsg.ObjectPropertyList.verify|verify} messages.
         * @param message ObjectPropertyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectPropertyList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectPropertyList message, length delimited. Does not implicitly {@link NFMsg.ObjectPropertyList.verify|verify} messages.
         * @param message ObjectPropertyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectPropertyList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectPropertyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectPropertyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectPropertyList;

        /**
         * Decodes an ObjectPropertyList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectPropertyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectPropertyList;

        /**
         * Verifies an ObjectPropertyList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MultiObjectPropertyList. */
    interface IMultiObjectPropertyList {

        /** MultiObjectPropertyList multi_player_property */
        multi_player_property?: (NFMsg.IObjectPropertyList[]|null);
    }

    /** Represents a MultiObjectPropertyList. */
    class MultiObjectPropertyList implements IMultiObjectPropertyList {

        /**
         * Constructs a new MultiObjectPropertyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IMultiObjectPropertyList);

        /** MultiObjectPropertyList multi_player_property. */
        public multi_player_property: NFMsg.IObjectPropertyList[];

        /**
         * Creates a new MultiObjectPropertyList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiObjectPropertyList instance
         */
        public static create(properties?: NFMsg.IMultiObjectPropertyList): NFMsg.MultiObjectPropertyList;

        /**
         * Encodes the specified MultiObjectPropertyList message. Does not implicitly {@link NFMsg.MultiObjectPropertyList.verify|verify} messages.
         * @param message MultiObjectPropertyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IMultiObjectPropertyList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MultiObjectPropertyList message, length delimited. Does not implicitly {@link NFMsg.MultiObjectPropertyList.verify|verify} messages.
         * @param message MultiObjectPropertyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IMultiObjectPropertyList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MultiObjectPropertyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiObjectPropertyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.MultiObjectPropertyList;

        /**
         * Decodes a MultiObjectPropertyList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiObjectPropertyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.MultiObjectPropertyList;

        /**
         * Verifies a MultiObjectPropertyList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ObjectRecordList. */
    interface IObjectRecordList {

        /** ObjectRecordList player_id */
        player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordList record_list */
        record_list?: (NFMsg.IObjectRecordBase[]|null);
    }

    /** Represents an ObjectRecordList. */
    class ObjectRecordList implements IObjectRecordList {

        /**
         * Constructs a new ObjectRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IObjectRecordList);

        /** ObjectRecordList player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** ObjectRecordList record_list. */
        public record_list: NFMsg.IObjectRecordBase[];

        /**
         * Creates a new ObjectRecordList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectRecordList instance
         */
        public static create(properties?: NFMsg.IObjectRecordList): NFMsg.ObjectRecordList;

        /**
         * Encodes the specified ObjectRecordList message. Does not implicitly {@link NFMsg.ObjectRecordList.verify|verify} messages.
         * @param message ObjectRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IObjectRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ObjectRecordList message, length delimited. Does not implicitly {@link NFMsg.ObjectRecordList.verify|verify} messages.
         * @param message ObjectRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IObjectRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ObjectRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ObjectRecordList;

        /**
         * Decodes an ObjectRecordList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ObjectRecordList;

        /**
         * Verifies an ObjectRecordList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MultiObjectRecordList. */
    interface IMultiObjectRecordList {

        /** MultiObjectRecordList multi_player_record */
        multi_player_record?: (NFMsg.IObjectRecordList[]|null);
    }

    /** Represents a MultiObjectRecordList. */
    class MultiObjectRecordList implements IMultiObjectRecordList {

        /**
         * Constructs a new MultiObjectRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IMultiObjectRecordList);

        /** MultiObjectRecordList multi_player_record. */
        public multi_player_record: NFMsg.IObjectRecordList[];

        /**
         * Creates a new MultiObjectRecordList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiObjectRecordList instance
         */
        public static create(properties?: NFMsg.IMultiObjectRecordList): NFMsg.MultiObjectRecordList;

        /**
         * Encodes the specified MultiObjectRecordList message. Does not implicitly {@link NFMsg.MultiObjectRecordList.verify|verify} messages.
         * @param message MultiObjectRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IMultiObjectRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MultiObjectRecordList message, length delimited. Does not implicitly {@link NFMsg.MultiObjectRecordList.verify|verify} messages.
         * @param message MultiObjectRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IMultiObjectRecordList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MultiObjectRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiObjectRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.MultiObjectRecordList;

        /**
         * Decodes a MultiObjectRecordList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiObjectRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.MultiObjectRecordList;

        /**
         * Verifies a MultiObjectRecordList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MsgBase. */
    interface IMsgBase {

        /** MsgBase player_id */
        player_id?: (NFMsg.IIdent|null);

        /** MsgBase msg_data */
        msg_data?: (Uint8Array|null);

        /** MsgBase player_Client_list */
        player_Client_list?: (NFMsg.IIdent[]|null);

        /** MsgBase hash_ident */
        hash_ident?: (NFMsg.IIdent|null);
    }

    /** Represents a MsgBase. */
    class MsgBase implements IMsgBase {

        /**
         * Constructs a new MsgBase.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IMsgBase);

        /** MsgBase player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** MsgBase msg_data. */
        public msg_data: Uint8Array;

        /** MsgBase player_Client_list. */
        public player_Client_list: NFMsg.IIdent[];

        /** MsgBase hash_ident. */
        public hash_ident?: (NFMsg.IIdent|null);

        /**
         * Creates a new MsgBase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBase instance
         */
        public static create(properties?: NFMsg.IMsgBase): NFMsg.MsgBase;

        /**
         * Encodes the specified MsgBase message. Does not implicitly {@link NFMsg.MsgBase.verify|verify} messages.
         * @param message MsgBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IMsgBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgBase message, length delimited. Does not implicitly {@link NFMsg.MsgBase.verify|verify} messages.
         * @param message MsgBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IMsgBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgBase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.MsgBase;

        /**
         * Decodes a MsgBase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.MsgBase;

        /**
         * Verifies a MsgBase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqCommand. */
    interface IReqCommand {

        /** ReqCommand control_id */
        control_id?: (NFMsg.IIdent|null);

        /** ReqCommand command_id */
        command_id?: (NFMsg.ReqCommand.EGameCommandType|null);

        /** ReqCommand command_str_value */
        command_str_value?: (Uint8Array|null);

        /** ReqCommand command_value_int */
        command_value_int?: (number|Long|null);

        /** ReqCommand command_value_float */
        command_value_float?: (number|null);

        /** ReqCommand command_value_str */
        command_value_str?: (Uint8Array|null);

        /** ReqCommand command_value_object */
        command_value_object?: (NFMsg.IIdent|null);

        /** ReqCommand row */
        row?: (number|null);

        /** ReqCommand col */
        col?: (number|null);
    }

    /** Represents a ReqCommand. */
    class ReqCommand implements IReqCommand {

        /**
         * Constructs a new ReqCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqCommand);

        /** ReqCommand control_id. */
        public control_id?: (NFMsg.IIdent|null);

        /** ReqCommand command_id. */
        public command_id: NFMsg.ReqCommand.EGameCommandType;

        /** ReqCommand command_str_value. */
        public command_str_value: Uint8Array;

        /** ReqCommand command_value_int. */
        public command_value_int: (number|Long);

        /** ReqCommand command_value_float. */
        public command_value_float: number;

        /** ReqCommand command_value_str. */
        public command_value_str: Uint8Array;

        /** ReqCommand command_value_object. */
        public command_value_object?: (NFMsg.IIdent|null);

        /** ReqCommand row. */
        public row: number;

        /** ReqCommand col. */
        public col: number;

        /**
         * Creates a new ReqCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqCommand instance
         */
        public static create(properties?: NFMsg.IReqCommand): NFMsg.ReqCommand;

        /**
         * Encodes the specified ReqCommand message. Does not implicitly {@link NFMsg.ReqCommand.verify|verify} messages.
         * @param message ReqCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqCommand, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqCommand message, length delimited. Does not implicitly {@link NFMsg.ReqCommand.verify|verify} messages.
         * @param message ReqCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqCommand, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqCommand;

        /**
         * Decodes a ReqCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqCommand;

        /**
         * Verifies a ReqCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqCommand {

        /** EGameCommandType enum. */
        enum EGameCommandType {
            EGCT_MODIY_PROPERTY = 0,
            EGCT_MODIY_ITEM = 1,
            EGCT_CREATE_OBJECT = 2,
            EGCT_ADD_ROLE_EXP = 3
        }
    }

    /** Properties of a TeamInfo. */
    interface ITeamInfo {

        /** TeamInfo team_id */
        team_id?: (NFMsg.IIdent|null);

        /** TeamInfo captain_id */
        captain_id?: (NFMsg.IIdent|null);

        /** TeamInfo teammemberInfo */
        teammemberInfo?: (NFMsg.ITeammemberInfo[]|null);
    }

    /** 组队///////////////////////////////////////////////////////////////////////////////////// */
    class TeamInfo implements ITeamInfo {

        /**
         * Constructs a new TeamInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.ITeamInfo);

        /** TeamInfo team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** TeamInfo captain_id. */
        public captain_id?: (NFMsg.IIdent|null);

        /** TeamInfo teammemberInfo. */
        public teammemberInfo: NFMsg.ITeammemberInfo[];

        /**
         * Creates a new TeamInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamInfo instance
         */
        public static create(properties?: NFMsg.ITeamInfo): NFMsg.TeamInfo;

        /**
         * Encodes the specified TeamInfo message. Does not implicitly {@link NFMsg.TeamInfo.verify|verify} messages.
         * @param message TeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.ITeamInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TeamInfo message, length delimited. Does not implicitly {@link NFMsg.TeamInfo.verify|verify} messages.
         * @param message TeamInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.ITeamInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TeamInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.TeamInfo;

        /**
         * Decodes a TeamInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.TeamInfo;

        /**
         * Verifies a TeamInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TeammemberInfo. */
    interface ITeammemberInfo {

        /** TeammemberInfo player_id */
        player_id?: (NFMsg.IIdent|null);

        /** TeammemberInfo name */
        name?: (string|null);

        /** TeammemberInfo nLevel */
        nLevel?: (number|null);

        /** TeammemberInfo job */
        job?: (number|null);

        /** TeammemberInfo HeadIcon */
        HeadIcon?: (string|null);
    }

    /** Represents a TeammemberInfo. */
    class TeammemberInfo implements ITeammemberInfo {

        /**
         * Constructs a new TeammemberInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.ITeammemberInfo);

        /** TeammemberInfo player_id. */
        public player_id?: (NFMsg.IIdent|null);

        /** TeammemberInfo name. */
        public name: string;

        /** TeammemberInfo nLevel. */
        public nLevel: number;

        /** TeammemberInfo job. */
        public job: number;

        /** TeammemberInfo HeadIcon. */
        public HeadIcon: string;

        /**
         * Creates a new TeammemberInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeammemberInfo instance
         */
        public static create(properties?: NFMsg.ITeammemberInfo): NFMsg.TeammemberInfo;

        /**
         * Encodes the specified TeammemberInfo message. Does not implicitly {@link NFMsg.TeammemberInfo.verify|verify} messages.
         * @param message TeammemberInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.ITeammemberInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TeammemberInfo message, length delimited. Does not implicitly {@link NFMsg.TeammemberInfo.verify|verify} messages.
         * @param message TeammemberInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.ITeammemberInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TeammemberInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeammemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.TeammemberInfo;

        /**
         * Decodes a TeammemberInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeammemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.TeammemberInfo;

        /**
         * Verifies a TeammemberInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckCreateTeam. */
    interface IReqAckCreateTeam {

        /** ReqAckCreateTeam team_id */
        team_id?: (NFMsg.IIdent|null);

        /** ReqAckCreateTeam xTeamInfo */
        xTeamInfo?: (NFMsg.ITeamInfo|null);
    }

    /** Represents a ReqAckCreateTeam. */
    class ReqAckCreateTeam implements IReqAckCreateTeam {

        /**
         * Constructs a new ReqAckCreateTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckCreateTeam);

        /** ReqAckCreateTeam team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** ReqAckCreateTeam xTeamInfo. */
        public xTeamInfo?: (NFMsg.ITeamInfo|null);

        /**
         * Creates a new ReqAckCreateTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckCreateTeam instance
         */
        public static create(properties?: NFMsg.IReqAckCreateTeam): NFMsg.ReqAckCreateTeam;

        /**
         * Encodes the specified ReqAckCreateTeam message. Does not implicitly {@link NFMsg.ReqAckCreateTeam.verify|verify} messages.
         * @param message ReqAckCreateTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckCreateTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckCreateTeam message, length delimited. Does not implicitly {@link NFMsg.ReqAckCreateTeam.verify|verify} messages.
         * @param message ReqAckCreateTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckCreateTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckCreateTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckCreateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckCreateTeam;

        /**
         * Decodes a ReqAckCreateTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckCreateTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckCreateTeam;

        /**
         * Verifies a ReqAckCreateTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckJoinTeam. */
    interface IReqAckJoinTeam {

        /** ReqAckJoinTeam team_id */
        team_id?: (NFMsg.IIdent|null);

        /** ReqAckJoinTeam xTeamInfo */
        xTeamInfo?: (NFMsg.ITeamInfo|null);
    }

    /** Represents a ReqAckJoinTeam. */
    class ReqAckJoinTeam implements IReqAckJoinTeam {

        /**
         * Constructs a new ReqAckJoinTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckJoinTeam);

        /** ReqAckJoinTeam team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** ReqAckJoinTeam xTeamInfo. */
        public xTeamInfo?: (NFMsg.ITeamInfo|null);

        /**
         * Creates a new ReqAckJoinTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckJoinTeam instance
         */
        public static create(properties?: NFMsg.IReqAckJoinTeam): NFMsg.ReqAckJoinTeam;

        /**
         * Encodes the specified ReqAckJoinTeam message. Does not implicitly {@link NFMsg.ReqAckJoinTeam.verify|verify} messages.
         * @param message ReqAckJoinTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckJoinTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckJoinTeam message, length delimited. Does not implicitly {@link NFMsg.ReqAckJoinTeam.verify|verify} messages.
         * @param message ReqAckJoinTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckJoinTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckJoinTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckJoinTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckJoinTeam;

        /**
         * Decodes a ReqAckJoinTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckJoinTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckJoinTeam;

        /**
         * Verifies a ReqAckJoinTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckLeaveTeam. */
    interface IReqAckLeaveTeam {

        /** ReqAckLeaveTeam team_id */
        team_id?: (NFMsg.IIdent|null);

        /** ReqAckLeaveTeam xTeamInfo */
        xTeamInfo?: (NFMsg.ITeamInfo|null);
    }

    /** Represents a ReqAckLeaveTeam. */
    class ReqAckLeaveTeam implements IReqAckLeaveTeam {

        /**
         * Constructs a new ReqAckLeaveTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckLeaveTeam);

        /** ReqAckLeaveTeam team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** ReqAckLeaveTeam xTeamInfo. */
        public xTeamInfo?: (NFMsg.ITeamInfo|null);

        /**
         * Creates a new ReqAckLeaveTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckLeaveTeam instance
         */
        public static create(properties?: NFMsg.IReqAckLeaveTeam): NFMsg.ReqAckLeaveTeam;

        /**
         * Encodes the specified ReqAckLeaveTeam message. Does not implicitly {@link NFMsg.ReqAckLeaveTeam.verify|verify} messages.
         * @param message ReqAckLeaveTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckLeaveTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckLeaveTeam message, length delimited. Does not implicitly {@link NFMsg.ReqAckLeaveTeam.verify|verify} messages.
         * @param message ReqAckLeaveTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckLeaveTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckLeaveTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckLeaveTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckLeaveTeam;

        /**
         * Decodes a ReqAckLeaveTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckLeaveTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckLeaveTeam;

        /**
         * Verifies a ReqAckLeaveTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckOprTeamMember. */
    interface IReqAckOprTeamMember {

        /** ReqAckOprTeamMember team_id */
        team_id?: (NFMsg.IIdent|null);

        /** ReqAckOprTeamMember member_id */
        member_id?: (NFMsg.IIdent|null);

        /** ReqAckOprTeamMember type */
        type?: (NFMsg.ReqAckOprTeamMember.EGTeamMemberOprType|null);

        /** ReqAckOprTeamMember xTeamInfo */
        xTeamInfo?: (NFMsg.ITeamInfo|null);
    }

    /** Represents a ReqAckOprTeamMember. */
    class ReqAckOprTeamMember implements IReqAckOprTeamMember {

        /**
         * Constructs a new ReqAckOprTeamMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckOprTeamMember);

        /** ReqAckOprTeamMember team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** ReqAckOprTeamMember member_id. */
        public member_id?: (NFMsg.IIdent|null);

        /** ReqAckOprTeamMember type. */
        public type: NFMsg.ReqAckOprTeamMember.EGTeamMemberOprType;

        /** ReqAckOprTeamMember xTeamInfo. */
        public xTeamInfo?: (NFMsg.ITeamInfo|null);

        /**
         * Creates a new ReqAckOprTeamMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckOprTeamMember instance
         */
        public static create(properties?: NFMsg.IReqAckOprTeamMember): NFMsg.ReqAckOprTeamMember;

        /**
         * Encodes the specified ReqAckOprTeamMember message. Does not implicitly {@link NFMsg.ReqAckOprTeamMember.verify|verify} messages.
         * @param message ReqAckOprTeamMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckOprTeamMember, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckOprTeamMember message, length delimited. Does not implicitly {@link NFMsg.ReqAckOprTeamMember.verify|verify} messages.
         * @param message ReqAckOprTeamMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckOprTeamMember, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckOprTeamMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckOprTeamMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckOprTeamMember;

        /**
         * Decodes a ReqAckOprTeamMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckOprTeamMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckOprTeamMember;

        /**
         * Verifies a ReqAckOprTeamMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqAckOprTeamMember {

        /** EGTeamMemberOprType enum. */
        enum EGTeamMemberOprType {
            EGAT_DOWN = 0,
            EGAT_UP = 1,
            EGAT_KICK = 2,
            EGAT_APPOINT = 3,
            EGAT_FIRE = 4,
            EGAT_DEMISE = 5,
            EGAT_ACCEPTAPPLY = 6,
            EGAT_DENYAPPLY = 7,
            EGAT_KICKOUT = 8
        }
    }

    /** Properties of a ReqAckInviteTeam. */
    interface IReqAckInviteTeam {

        /** ReqAckInviteTeam team_id */
        team_id?: (NFMsg.IIdent|null);

        /** ReqAckInviteTeam self_id */
        self_id?: (NFMsg.IIdent|null);

        /** ReqAckInviteTeam invite_target_id */
        invite_target_id?: (NFMsg.IIdent|null);
    }

    /** Represents a ReqAckInviteTeam. */
    class ReqAckInviteTeam implements IReqAckInviteTeam {

        /**
         * Constructs a new ReqAckInviteTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckInviteTeam);

        /** ReqAckInviteTeam team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** ReqAckInviteTeam self_id. */
        public self_id?: (NFMsg.IIdent|null);

        /** ReqAckInviteTeam invite_target_id. */
        public invite_target_id?: (NFMsg.IIdent|null);

        /**
         * Creates a new ReqAckInviteTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckInviteTeam instance
         */
        public static create(properties?: NFMsg.IReqAckInviteTeam): NFMsg.ReqAckInviteTeam;

        /**
         * Encodes the specified ReqAckInviteTeam message. Does not implicitly {@link NFMsg.ReqAckInviteTeam.verify|verify} messages.
         * @param message ReqAckInviteTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckInviteTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckInviteTeam message, length delimited. Does not implicitly {@link NFMsg.ReqAckInviteTeam.verify|verify} messages.
         * @param message ReqAckInviteTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckInviteTeam, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckInviteTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckInviteTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckInviteTeam;

        /**
         * Decodes a ReqAckInviteTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckInviteTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckInviteTeam;

        /**
         * Verifies a ReqAckInviteTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqTeamEnterEctype. */
    interface IReqTeamEnterEctype {

        /** ReqTeamEnterEctype team_id */
        team_id?: (NFMsg.IIdent|null);

        /** ReqTeamEnterEctype self_id */
        self_id?: (NFMsg.IIdent|null);

        /** ReqTeamEnterEctype nEctypeID */
        nEctypeID?: (number|null);

        /** ReqTeamEnterEctype nGroupID */
        nGroupID?: (number|null);

        /** ReqTeamEnterEctype nResult */
        nResult?: (number|null);

        /** ReqTeamEnterEctype nServerID */
        nServerID?: (number|null);
    }

    /** Represents a ReqTeamEnterEctype. */
    class ReqTeamEnterEctype implements IReqTeamEnterEctype {

        /**
         * Constructs a new ReqTeamEnterEctype.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqTeamEnterEctype);

        /** ReqTeamEnterEctype team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** ReqTeamEnterEctype self_id. */
        public self_id?: (NFMsg.IIdent|null);

        /** ReqTeamEnterEctype nEctypeID. */
        public nEctypeID: number;

        /** ReqTeamEnterEctype nGroupID. */
        public nGroupID: number;

        /** ReqTeamEnterEctype nResult. */
        public nResult: number;

        /** ReqTeamEnterEctype nServerID. */
        public nServerID: number;

        /**
         * Creates a new ReqTeamEnterEctype instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqTeamEnterEctype instance
         */
        public static create(properties?: NFMsg.IReqTeamEnterEctype): NFMsg.ReqTeamEnterEctype;

        /**
         * Encodes the specified ReqTeamEnterEctype message. Does not implicitly {@link NFMsg.ReqTeamEnterEctype.verify|verify} messages.
         * @param message ReqTeamEnterEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqTeamEnterEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqTeamEnterEctype message, length delimited. Does not implicitly {@link NFMsg.ReqTeamEnterEctype.verify|verify} messages.
         * @param message ReqTeamEnterEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqTeamEnterEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqTeamEnterEctype message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqTeamEnterEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqTeamEnterEctype;

        /**
         * Decodes a ReqTeamEnterEctype message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqTeamEnterEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqTeamEnterEctype;

        /**
         * Verifies a ReqTeamEnterEctype message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckTeamEnterEctype. */
    interface IAckTeamEnterEctype {

        /** AckTeamEnterEctype team_id */
        team_id?: (NFMsg.IIdent|null);

        /** AckTeamEnterEctype self_id */
        self_id?: (NFMsg.IIdent|null);

        /** AckTeamEnterEctype nEctypeID */
        nEctypeID?: (number|null);

        /** AckTeamEnterEctype nGroupID */
        nGroupID?: (number|null);

        /** AckTeamEnterEctype nResult */
        nResult?: (number|null);
    }

    /** Represents an AckTeamEnterEctype. */
    class AckTeamEnterEctype implements IAckTeamEnterEctype {

        /**
         * Constructs a new AckTeamEnterEctype.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckTeamEnterEctype);

        /** AckTeamEnterEctype team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /** AckTeamEnterEctype self_id. */
        public self_id?: (NFMsg.IIdent|null);

        /** AckTeamEnterEctype nEctypeID. */
        public nEctypeID: number;

        /** AckTeamEnterEctype nGroupID. */
        public nGroupID: number;

        /** AckTeamEnterEctype nResult. */
        public nResult: number;

        /**
         * Creates a new AckTeamEnterEctype instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckTeamEnterEctype instance
         */
        public static create(properties?: NFMsg.IAckTeamEnterEctype): NFMsg.AckTeamEnterEctype;

        /**
         * Encodes the specified AckTeamEnterEctype message. Does not implicitly {@link NFMsg.AckTeamEnterEctype.verify|verify} messages.
         * @param message AckTeamEnterEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckTeamEnterEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckTeamEnterEctype message, length delimited. Does not implicitly {@link NFMsg.AckTeamEnterEctype.verify|verify} messages.
         * @param message AckTeamEnterEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckTeamEnterEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckTeamEnterEctype message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckTeamEnterEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckTeamEnterEctype;

        /**
         * Decodes an AckTeamEnterEctype message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckTeamEnterEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckTeamEnterEctype;

        /**
         * Verifies an AckTeamEnterEctype message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GridGuildBaseInfo. */
    interface IGridGuildBaseInfo {

        /** GridGuildBaseInfo id */
        id?: (NFMsg.IIdent|null);

        /** GridGuildBaseInfo level */
        level?: (number|null);

        /** GridGuildBaseInfo count */
        count?: (number|null);

        /** GridGuildBaseInfo resource */
        resource?: (number|null);

        /** GridGuildBaseInfo icon */
        icon?: (Uint8Array|null);
    }

    /** big map///////////////////////////////////////////////////////////////////////////////////// */
    class GridGuildBaseInfo implements IGridGuildBaseInfo {

        /**
         * Constructs a new GridGuildBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IGridGuildBaseInfo);

        /** GridGuildBaseInfo id. */
        public id?: (NFMsg.IIdent|null);

        /** GridGuildBaseInfo level. */
        public level: number;

        /** GridGuildBaseInfo count. */
        public count: number;

        /** GridGuildBaseInfo resource. */
        public resource: number;

        /** GridGuildBaseInfo icon. */
        public icon: Uint8Array;

        /**
         * Creates a new GridGuildBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GridGuildBaseInfo instance
         */
        public static create(properties?: NFMsg.IGridGuildBaseInfo): NFMsg.GridGuildBaseInfo;

        /**
         * Encodes the specified GridGuildBaseInfo message. Does not implicitly {@link NFMsg.GridGuildBaseInfo.verify|verify} messages.
         * @param message GridGuildBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IGridGuildBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GridGuildBaseInfo message, length delimited. Does not implicitly {@link NFMsg.GridGuildBaseInfo.verify|verify} messages.
         * @param message GridGuildBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IGridGuildBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GridGuildBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GridGuildBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.GridGuildBaseInfo;

        /**
         * Decodes a GridGuildBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GridGuildBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.GridGuildBaseInfo;

        /**
         * Verifies a GridGuildBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqBigMapGridInfo. */
    interface IReqBigMapGridInfo {

        /** ReqBigMapGridInfo map_title_id */
        map_title_id?: (Uint8Array[]|null);
    }

    /** Represents a ReqBigMapGridInfo. */
    class ReqBigMapGridInfo implements IReqBigMapGridInfo {

        /**
         * Constructs a new ReqBigMapGridInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqBigMapGridInfo);

        /** ReqBigMapGridInfo map_title_id. */
        public map_title_id: Uint8Array[];

        /**
         * Creates a new ReqBigMapGridInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqBigMapGridInfo instance
         */
        public static create(properties?: NFMsg.IReqBigMapGridInfo): NFMsg.ReqBigMapGridInfo;

        /**
         * Encodes the specified ReqBigMapGridInfo message. Does not implicitly {@link NFMsg.ReqBigMapGridInfo.verify|verify} messages.
         * @param message ReqBigMapGridInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqBigMapGridInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqBigMapGridInfo message, length delimited. Does not implicitly {@link NFMsg.ReqBigMapGridInfo.verify|verify} messages.
         * @param message ReqBigMapGridInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqBigMapGridInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqBigMapGridInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqBigMapGridInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqBigMapGridInfo;

        /**
         * Decodes a ReqBigMapGridInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqBigMapGridInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqBigMapGridInfo;

        /**
         * Verifies a ReqBigMapGridInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BigMapGridBaseInfo. */
    interface IBigMapGridBaseInfo {

        /** BigMapGridBaseInfo id */
        id?: (Uint8Array|null);

        /** BigMapGridBaseInfo guild_info */
        guild_info?: (NFMsg.IGridGuildBaseInfo|null);

        /** BigMapGridBaseInfo kingwar_time */
        kingwar_time?: (number|null);

        /** BigMapGridBaseInfo kingwarrer */
        kingwarrer?: (NFMsg.IIdent|null);

        /** BigMapGridBaseInfo hurting_time */
        hurting_time?: (number|null);

        /** BigMapGridBaseInfo hurter */
        hurter?: (NFMsg.IIdent|null);
    }

    /** Represents a BigMapGridBaseInfo. */
    class BigMapGridBaseInfo implements IBigMapGridBaseInfo {

        /**
         * Constructs a new BigMapGridBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IBigMapGridBaseInfo);

        /** BigMapGridBaseInfo id. */
        public id: Uint8Array;

        /** BigMapGridBaseInfo guild_info. */
        public guild_info?: (NFMsg.IGridGuildBaseInfo|null);

        /** BigMapGridBaseInfo kingwar_time. */
        public kingwar_time: number;

        /** BigMapGridBaseInfo kingwarrer. */
        public kingwarrer?: (NFMsg.IIdent|null);

        /** BigMapGridBaseInfo hurting_time. */
        public hurting_time: number;

        /** BigMapGridBaseInfo hurter. */
        public hurter?: (NFMsg.IIdent|null);

        /**
         * Creates a new BigMapGridBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BigMapGridBaseInfo instance
         */
        public static create(properties?: NFMsg.IBigMapGridBaseInfo): NFMsg.BigMapGridBaseInfo;

        /**
         * Encodes the specified BigMapGridBaseInfo message. Does not implicitly {@link NFMsg.BigMapGridBaseInfo.verify|verify} messages.
         * @param message BigMapGridBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IBigMapGridBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BigMapGridBaseInfo message, length delimited. Does not implicitly {@link NFMsg.BigMapGridBaseInfo.verify|verify} messages.
         * @param message BigMapGridBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IBigMapGridBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BigMapGridBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BigMapGridBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.BigMapGridBaseInfo;

        /**
         * Decodes a BigMapGridBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BigMapGridBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.BigMapGridBaseInfo;

        /**
         * Verifies a BigMapGridBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BigMapLeaveMsg. */
    interface IBigMapLeaveMsg {

        /** BigMapLeaveMsg owner */
        owner?: (NFMsg.IIdent|null);

        /** BigMapLeaveMsg owner_name */
        owner_name?: (Uint8Array|null);

        /** BigMapLeaveMsg msg_data */
        msg_data?: (Uint8Array|null);

        /** BigMapLeaveMsg msg_time */
        msg_time?: (number|null);

        /** BigMapLeaveMsg owner_level */
        owner_level?: (number|null);
    }

    /** Represents a BigMapLeaveMsg. */
    class BigMapLeaveMsg implements IBigMapLeaveMsg {

        /**
         * Constructs a new BigMapLeaveMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IBigMapLeaveMsg);

        /** BigMapLeaveMsg owner. */
        public owner?: (NFMsg.IIdent|null);

        /** BigMapLeaveMsg owner_name. */
        public owner_name: Uint8Array;

        /** BigMapLeaveMsg msg_data. */
        public msg_data: Uint8Array;

        /** BigMapLeaveMsg msg_time. */
        public msg_time: number;

        /** BigMapLeaveMsg owner_level. */
        public owner_level: number;

        /**
         * Creates a new BigMapLeaveMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BigMapLeaveMsg instance
         */
        public static create(properties?: NFMsg.IBigMapLeaveMsg): NFMsg.BigMapLeaveMsg;

        /**
         * Encodes the specified BigMapLeaveMsg message. Does not implicitly {@link NFMsg.BigMapLeaveMsg.verify|verify} messages.
         * @param message BigMapLeaveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IBigMapLeaveMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BigMapLeaveMsg message, length delimited. Does not implicitly {@link NFMsg.BigMapLeaveMsg.verify|verify} messages.
         * @param message BigMapLeaveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IBigMapLeaveMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BigMapLeaveMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BigMapLeaveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.BigMapLeaveMsg;

        /**
         * Decodes a BigMapLeaveMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BigMapLeaveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.BigMapLeaveMsg;

        /**
         * Verifies a BigMapLeaveMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BigMapWarHistory. */
    interface IBigMapWarHistory {

        /** BigMapWarHistory red_info */
        red_info?: (NFMsg.IGridGuildBaseInfo|null);

        /** BigMapWarHistory blue_info */
        blue_info?: (NFMsg.IGridGuildBaseInfo|null);

        /** BigMapWarHistory winner_id */
        winner_id?: (NFMsg.IIdent|null);

        /** BigMapWarHistory war_time */
        war_time?: (number|null);
    }

    /** Represents a BigMapWarHistory. */
    class BigMapWarHistory implements IBigMapWarHistory {

        /**
         * Constructs a new BigMapWarHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IBigMapWarHistory);

        /** BigMapWarHistory red_info. */
        public red_info?: (NFMsg.IGridGuildBaseInfo|null);

        /** BigMapWarHistory blue_info. */
        public blue_info?: (NFMsg.IGridGuildBaseInfo|null);

        /** BigMapWarHistory winner_id. */
        public winner_id?: (NFMsg.IIdent|null);

        /** BigMapWarHistory war_time. */
        public war_time: number;

        /**
         * Creates a new BigMapWarHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BigMapWarHistory instance
         */
        public static create(properties?: NFMsg.IBigMapWarHistory): NFMsg.BigMapWarHistory;

        /**
         * Encodes the specified BigMapWarHistory message. Does not implicitly {@link NFMsg.BigMapWarHistory.verify|verify} messages.
         * @param message BigMapWarHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IBigMapWarHistory, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BigMapWarHistory message, length delimited. Does not implicitly {@link NFMsg.BigMapWarHistory.verify|verify} messages.
         * @param message BigMapWarHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IBigMapWarHistory, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BigMapWarHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BigMapWarHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.BigMapWarHistory;

        /**
         * Decodes a BigMapWarHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BigMapWarHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.BigMapWarHistory;

        /**
         * Verifies a BigMapWarHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BigMapGridDetailInfo. */
    interface IBigMapGridDetailInfo {

        /** BigMapGridDetailInfo grid_base_info */
        grid_base_info?: (NFMsg.IBigMapGridBaseInfo|null);

        /** BigMapGridDetailInfo stay_guid_list */
        stay_guid_list?: (NFMsg.IGridGuildBaseInfo[]|null);

        /** BigMapGridDetailInfo leave_msg */
        leave_msg?: (NFMsg.IBigMapLeaveMsg[]|null);

        /** BigMapGridDetailInfo war_history */
        war_history?: (NFMsg.IBigMapWarHistory[]|null);
    }

    /** Represents a BigMapGridDetailInfo. */
    class BigMapGridDetailInfo implements IBigMapGridDetailInfo {

        /**
         * Constructs a new BigMapGridDetailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IBigMapGridDetailInfo);

        /** BigMapGridDetailInfo grid_base_info. */
        public grid_base_info?: (NFMsg.IBigMapGridBaseInfo|null);

        /** BigMapGridDetailInfo stay_guid_list. */
        public stay_guid_list: NFMsg.IGridGuildBaseInfo[];

        /** BigMapGridDetailInfo leave_msg. */
        public leave_msg: NFMsg.IBigMapLeaveMsg[];

        /** BigMapGridDetailInfo war_history. */
        public war_history: NFMsg.IBigMapWarHistory[];

        /**
         * Creates a new BigMapGridDetailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BigMapGridDetailInfo instance
         */
        public static create(properties?: NFMsg.IBigMapGridDetailInfo): NFMsg.BigMapGridDetailInfo;

        /**
         * Encodes the specified BigMapGridDetailInfo message. Does not implicitly {@link NFMsg.BigMapGridDetailInfo.verify|verify} messages.
         * @param message BigMapGridDetailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IBigMapGridDetailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BigMapGridDetailInfo message, length delimited. Does not implicitly {@link NFMsg.BigMapGridDetailInfo.verify|verify} messages.
         * @param message BigMapGridDetailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IBigMapGridDetailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BigMapGridDetailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BigMapGridDetailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.BigMapGridDetailInfo;

        /**
         * Decodes a BigMapGridDetailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BigMapGridDetailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.BigMapGridDetailInfo;

        /**
         * Verifies a BigMapGridDetailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckBigMapGridInfo. */
    interface IAckBigMapGridInfo {

        /** AckBigMapGridInfo map_data */
        map_data?: (NFMsg.IBigMapGridDetailInfo[]|null);
    }

    /** Represents an AckBigMapGridInfo. */
    class AckBigMapGridInfo implements IAckBigMapGridInfo {

        /**
         * Constructs a new AckBigMapGridInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckBigMapGridInfo);

        /** AckBigMapGridInfo map_data. */
        public map_data: NFMsg.IBigMapGridDetailInfo[];

        /**
         * Creates a new AckBigMapGridInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckBigMapGridInfo instance
         */
        public static create(properties?: NFMsg.IAckBigMapGridInfo): NFMsg.AckBigMapGridInfo;

        /**
         * Encodes the specified AckBigMapGridInfo message. Does not implicitly {@link NFMsg.AckBigMapGridInfo.verify|verify} messages.
         * @param message AckBigMapGridInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckBigMapGridInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckBigMapGridInfo message, length delimited. Does not implicitly {@link NFMsg.AckBigMapGridInfo.verify|verify} messages.
         * @param message AckBigMapGridInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckBigMapGridInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckBigMapGridInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckBigMapGridInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckBigMapGridInfo;

        /**
         * Decodes an AckBigMapGridInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckBigMapGridInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckBigMapGridInfo;

        /**
         * Verifies an AckBigMapGridInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqBigMapInfo. */
    interface IReqBigMapInfo {
    }

    /** Represents a ReqBigMapInfo. */
    class ReqBigMapInfo implements IReqBigMapInfo {

        /**
         * Constructs a new ReqBigMapInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqBigMapInfo);

        /**
         * Creates a new ReqBigMapInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqBigMapInfo instance
         */
        public static create(properties?: NFMsg.IReqBigMapInfo): NFMsg.ReqBigMapInfo;

        /**
         * Encodes the specified ReqBigMapInfo message. Does not implicitly {@link NFMsg.ReqBigMapInfo.verify|verify} messages.
         * @param message ReqBigMapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqBigMapInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqBigMapInfo message, length delimited. Does not implicitly {@link NFMsg.ReqBigMapInfo.verify|verify} messages.
         * @param message ReqBigMapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqBigMapInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqBigMapInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqBigMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqBigMapInfo;

        /**
         * Decodes a ReqBigMapInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqBigMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqBigMapInfo;

        /**
         * Verifies a ReqBigMapInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckBigMapInfo. */
    interface IAckBigMapInfo {

        /** AckBigMapInfo grid_base_info */
        grid_base_info?: (NFMsg.IBigMapGridBaseInfo[]|null);
    }

    /** Represents an AckBigMapInfo. */
    class AckBigMapInfo implements IAckBigMapInfo {

        /**
         * Constructs a new AckBigMapInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckBigMapInfo);

        /** AckBigMapInfo grid_base_info. */
        public grid_base_info: NFMsg.IBigMapGridBaseInfo[];

        /**
         * Creates a new AckBigMapInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckBigMapInfo instance
         */
        public static create(properties?: NFMsg.IAckBigMapInfo): NFMsg.AckBigMapInfo;

        /**
         * Encodes the specified AckBigMapInfo message. Does not implicitly {@link NFMsg.AckBigMapInfo.verify|verify} messages.
         * @param message AckBigMapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckBigMapInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckBigMapInfo message, length delimited. Does not implicitly {@link NFMsg.AckBigMapInfo.verify|verify} messages.
         * @param message AckBigMapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckBigMapInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckBigMapInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckBigMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckBigMapInfo;

        /**
         * Decodes an AckBigMapInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckBigMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckBigMapInfo;

        /**
         * Verifies an AckBigMapInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHoldMapGrid. */
    interface IReqHoldMapGrid {

        /** ReqHoldMapGrid map_title_id */
        map_title_id?: (Uint8Array|null);

        /** ReqHoldMapGrid guild_id */
        guild_id?: (NFMsg.IIdent|null);
    }

    /** Represents a ReqHoldMapGrid. */
    class ReqHoldMapGrid implements IReqHoldMapGrid {

        /**
         * Constructs a new ReqHoldMapGrid.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqHoldMapGrid);

        /** ReqHoldMapGrid map_title_id. */
        public map_title_id: Uint8Array;

        /** ReqHoldMapGrid guild_id. */
        public guild_id?: (NFMsg.IIdent|null);

        /**
         * Creates a new ReqHoldMapGrid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHoldMapGrid instance
         */
        public static create(properties?: NFMsg.IReqHoldMapGrid): NFMsg.ReqHoldMapGrid;

        /**
         * Encodes the specified ReqHoldMapGrid message. Does not implicitly {@link NFMsg.ReqHoldMapGrid.verify|verify} messages.
         * @param message ReqHoldMapGrid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqHoldMapGrid, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHoldMapGrid message, length delimited. Does not implicitly {@link NFMsg.ReqHoldMapGrid.verify|verify} messages.
         * @param message ReqHoldMapGrid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqHoldMapGrid, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHoldMapGrid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHoldMapGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqHoldMapGrid;

        /**
         * Decodes a ReqHoldMapGrid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHoldMapGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqHoldMapGrid;

        /**
         * Verifies a ReqHoldMapGrid message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckHoldMapGrid. */
    interface IAckHoldMapGrid {
    }

    /** Represents an AckHoldMapGrid. */
    class AckHoldMapGrid implements IAckHoldMapGrid {

        /**
         * Constructs a new AckHoldMapGrid.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckHoldMapGrid);

        /**
         * Creates a new AckHoldMapGrid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckHoldMapGrid instance
         */
        public static create(properties?: NFMsg.IAckHoldMapGrid): NFMsg.AckHoldMapGrid;

        /**
         * Encodes the specified AckHoldMapGrid message. Does not implicitly {@link NFMsg.AckHoldMapGrid.verify|verify} messages.
         * @param message AckHoldMapGrid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckHoldMapGrid, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckHoldMapGrid message, length delimited. Does not implicitly {@link NFMsg.AckHoldMapGrid.verify|verify} messages.
         * @param message AckHoldMapGrid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckHoldMapGrid, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckHoldMapGrid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckHoldMapGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckHoldMapGrid;

        /**
         * Decodes an AckHoldMapGrid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckHoldMapGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckHoldMapGrid;

        /**
         * Verifies an AckHoldMapGrid message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqLeaveMapMsg. */
    interface IReqLeaveMapMsg {

        /** ReqLeaveMapMsg map_title_id */
        map_title_id?: (Uint8Array|null);

        /** ReqLeaveMapMsg leave_msg */
        leave_msg?: (NFMsg.IBigMapLeaveMsg|null);
    }

    /** Represents a ReqLeaveMapMsg. */
    class ReqLeaveMapMsg implements IReqLeaveMapMsg {

        /**
         * Constructs a new ReqLeaveMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqLeaveMapMsg);

        /** ReqLeaveMapMsg map_title_id. */
        public map_title_id: Uint8Array;

        /** ReqLeaveMapMsg leave_msg. */
        public leave_msg?: (NFMsg.IBigMapLeaveMsg|null);

        /**
         * Creates a new ReqLeaveMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLeaveMapMsg instance
         */
        public static create(properties?: NFMsg.IReqLeaveMapMsg): NFMsg.ReqLeaveMapMsg;

        /**
         * Encodes the specified ReqLeaveMapMsg message. Does not implicitly {@link NFMsg.ReqLeaveMapMsg.verify|verify} messages.
         * @param message ReqLeaveMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqLeaveMapMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqLeaveMapMsg message, length delimited. Does not implicitly {@link NFMsg.ReqLeaveMapMsg.verify|verify} messages.
         * @param message ReqLeaveMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqLeaveMapMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqLeaveMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLeaveMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqLeaveMapMsg;

        /**
         * Decodes a ReqLeaveMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLeaveMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqLeaveMapMsg;

        /**
         * Verifies a ReqLeaveMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckLeaveMapMsg. */
    interface IAckLeaveMapMsg {
    }

    /** Represents an AckLeaveMapMsg. */
    class AckLeaveMapMsg implements IAckLeaveMapMsg {

        /**
         * Constructs a new AckLeaveMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckLeaveMapMsg);

        /**
         * Creates a new AckLeaveMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckLeaveMapMsg instance
         */
        public static create(properties?: NFMsg.IAckLeaveMapMsg): NFMsg.AckLeaveMapMsg;

        /**
         * Encodes the specified AckLeaveMapMsg message. Does not implicitly {@link NFMsg.AckLeaveMapMsg.verify|verify} messages.
         * @param message AckLeaveMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckLeaveMapMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckLeaveMapMsg message, length delimited. Does not implicitly {@link NFMsg.AckLeaveMapMsg.verify|verify} messages.
         * @param message AckLeaveMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckLeaveMapMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckLeaveMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckLeaveMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckLeaveMapMsg;

        /**
         * Decodes an AckLeaveMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckLeaveMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckLeaveMapMsg;

        /**
         * Verifies an AckLeaveMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqGetMapAward. */
    interface IReqGetMapAward {

        /** ReqGetMapAward map_title_id */
        map_title_id?: (Uint8Array|null);
    }

    /** Represents a ReqGetMapAward. */
    class ReqGetMapAward implements IReqGetMapAward {

        /**
         * Constructs a new ReqGetMapAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqGetMapAward);

        /** ReqGetMapAward map_title_id. */
        public map_title_id: Uint8Array;

        /**
         * Creates a new ReqGetMapAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqGetMapAward instance
         */
        public static create(properties?: NFMsg.IReqGetMapAward): NFMsg.ReqGetMapAward;

        /**
         * Encodes the specified ReqGetMapAward message. Does not implicitly {@link NFMsg.ReqGetMapAward.verify|verify} messages.
         * @param message ReqGetMapAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqGetMapAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqGetMapAward message, length delimited. Does not implicitly {@link NFMsg.ReqGetMapAward.verify|verify} messages.
         * @param message ReqGetMapAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqGetMapAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqGetMapAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqGetMapAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqGetMapAward;

        /**
         * Decodes a ReqGetMapAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqGetMapAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqGetMapAward;

        /**
         * Verifies a ReqGetMapAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGetMapAward. */
    interface IAckGetMapAward {
    }

    /** Represents an AckGetMapAward. */
    class AckGetMapAward implements IAckGetMapAward {

        /**
         * Constructs a new AckGetMapAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckGetMapAward);

        /**
         * Creates a new AckGetMapAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGetMapAward instance
         */
        public static create(properties?: NFMsg.IAckGetMapAward): NFMsg.AckGetMapAward;

        /**
         * Encodes the specified AckGetMapAward message. Does not implicitly {@link NFMsg.AckGetMapAward.verify|verify} messages.
         * @param message AckGetMapAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckGetMapAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGetMapAward message, length delimited. Does not implicitly {@link NFMsg.AckGetMapAward.verify|verify} messages.
         * @param message AckGetMapAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckGetMapAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGetMapAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGetMapAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckGetMapAward;

        /**
         * Decodes an AckGetMapAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGetMapAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckGetMapAward;

        /**
         * Verifies an AckGetMapAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqMapHunting. */
    interface IReqMapHunting {

        /** ReqMapHunting map_title_id */
        map_title_id?: (Uint8Array|null);
    }

    /** Represents a ReqMapHunting. */
    class ReqMapHunting implements IReqMapHunting {

        /**
         * Constructs a new ReqMapHunting.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqMapHunting);

        /** ReqMapHunting map_title_id. */
        public map_title_id: Uint8Array;

        /**
         * Creates a new ReqMapHunting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMapHunting instance
         */
        public static create(properties?: NFMsg.IReqMapHunting): NFMsg.ReqMapHunting;

        /**
         * Encodes the specified ReqMapHunting message. Does not implicitly {@link NFMsg.ReqMapHunting.verify|verify} messages.
         * @param message ReqMapHunting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqMapHunting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMapHunting message, length delimited. Does not implicitly {@link NFMsg.ReqMapHunting.verify|verify} messages.
         * @param message ReqMapHunting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqMapHunting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMapHunting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMapHunting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqMapHunting;

        /**
         * Decodes a ReqMapHunting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMapHunting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqMapHunting;

        /**
         * Verifies a ReqMapHunting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckMapHunting. */
    interface IAckMapHunting {
    }

    /** Represents an AckMapHunting. */
    class AckMapHunting implements IAckMapHunting {

        /**
         * Constructs a new AckMapHunting.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckMapHunting);

        /**
         * Creates a new AckMapHunting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckMapHunting instance
         */
        public static create(properties?: NFMsg.IAckMapHunting): NFMsg.AckMapHunting;

        /**
         * Encodes the specified AckMapHunting message. Does not implicitly {@link NFMsg.AckMapHunting.verify|verify} messages.
         * @param message AckMapHunting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckMapHunting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckMapHunting message, length delimited. Does not implicitly {@link NFMsg.AckMapHunting.verify|verify} messages.
         * @param message AckMapHunting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckMapHunting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckMapHunting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckMapHunting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckMapHunting;

        /**
         * Decodes an AckMapHunting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckMapHunting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckMapHunting;

        /**
         * Verifies an AckMapHunting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqMapKingWar. */
    interface IReqMapKingWar {

        /** ReqMapKingWar map_title */
        map_title?: (Uint8Array|null);
    }

    /** Represents a ReqMapKingWar. */
    class ReqMapKingWar implements IReqMapKingWar {

        /**
         * Constructs a new ReqMapKingWar.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqMapKingWar);

        /** ReqMapKingWar map_title. */
        public map_title: Uint8Array;

        /**
         * Creates a new ReqMapKingWar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMapKingWar instance
         */
        public static create(properties?: NFMsg.IReqMapKingWar): NFMsg.ReqMapKingWar;

        /**
         * Encodes the specified ReqMapKingWar message. Does not implicitly {@link NFMsg.ReqMapKingWar.verify|verify} messages.
         * @param message ReqMapKingWar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqMapKingWar, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMapKingWar message, length delimited. Does not implicitly {@link NFMsg.ReqMapKingWar.verify|verify} messages.
         * @param message ReqMapKingWar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqMapKingWar, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMapKingWar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMapKingWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqMapKingWar;

        /**
         * Decodes a ReqMapKingWar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMapKingWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqMapKingWar;

        /**
         * Verifies a ReqMapKingWar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckMapKingWar. */
    interface IAckMapKingWar {

        /** AckMapKingWar map_title */
        map_title?: (Uint8Array|null);
    }

    /** Represents an AckMapKingWar. */
    class AckMapKingWar implements IAckMapKingWar {

        /**
         * Constructs a new AckMapKingWar.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckMapKingWar);

        /** AckMapKingWar map_title. */
        public map_title: Uint8Array;

        /**
         * Creates a new AckMapKingWar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckMapKingWar instance
         */
        public static create(properties?: NFMsg.IAckMapKingWar): NFMsg.AckMapKingWar;

        /**
         * Encodes the specified AckMapKingWar message. Does not implicitly {@link NFMsg.AckMapKingWar.verify|verify} messages.
         * @param message AckMapKingWar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckMapKingWar, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckMapKingWar message, length delimited. Does not implicitly {@link NFMsg.AckMapKingWar.verify|verify} messages.
         * @param message AckMapKingWar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckMapKingWar, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckMapKingWar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckMapKingWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckMapKingWar;

        /**
         * Decodes an AckMapKingWar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckMapKingWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckMapKingWar;

        /**
         * Verifies an AckMapKingWar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** EServerState enum. */
    enum EServerState {
        EST_CRASH = 0,
        EST_NARMAL = 1,
        EST_BUSY = 2,
        EST_FIRE = 3,
        EST_MAINTEN = 4
    }

    /** ELoginMode enum. */
    enum ELoginMode {
        ELM_LOGIN = 0,
        ELM_REGISTER = 1,
        ELM_AUTO_REGISTER_LOGIN = 2
    }

    /** Properties of a ServerInfoReport. */
    interface IServerInfoReport {

        /** ServerInfoReport server_id */
        server_id?: (number|null);

        /** ServerInfoReport server_name */
        server_name?: (Uint8Array|null);

        /** ServerInfoReport server_ip */
        server_ip?: (Uint8Array|null);

        /** ServerInfoReport server_port */
        server_port?: (number|null);

        /** ServerInfoReport server_max_online */
        server_max_online?: (number|null);

        /** ServerInfoReport server_cur_count */
        server_cur_count?: (number|null);

        /** ServerInfoReport server_state */
        server_state?: (NFMsg.EServerState|null);

        /** ServerInfoReport server_type */
        server_type?: (number|null);
    }

    /** Represents a ServerInfoReport. */
    class ServerInfoReport implements IServerInfoReport {

        /**
         * Constructs a new ServerInfoReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IServerInfoReport);

        /** ServerInfoReport server_id. */
        public server_id: number;

        /** ServerInfoReport server_name. */
        public server_name: Uint8Array;

        /** ServerInfoReport server_ip. */
        public server_ip: Uint8Array;

        /** ServerInfoReport server_port. */
        public server_port: number;

        /** ServerInfoReport server_max_online. */
        public server_max_online: number;

        /** ServerInfoReport server_cur_count. */
        public server_cur_count: number;

        /** ServerInfoReport server_state. */
        public server_state: NFMsg.EServerState;

        /** ServerInfoReport server_type. */
        public server_type: number;

        /**
         * Creates a new ServerInfoReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfoReport instance
         */
        public static create(properties?: NFMsg.IServerInfoReport): NFMsg.ServerInfoReport;

        /**
         * Encodes the specified ServerInfoReport message. Does not implicitly {@link NFMsg.ServerInfoReport.verify|verify} messages.
         * @param message ServerInfoReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IServerInfoReport, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ServerInfoReport message, length delimited. Does not implicitly {@link NFMsg.ServerInfoReport.verify|verify} messages.
         * @param message ServerInfoReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IServerInfoReport, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerInfoReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfoReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ServerInfoReport;

        /**
         * Decodes a ServerInfoReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfoReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ServerInfoReport;

        /**
         * Verifies a ServerInfoReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ServerInfoReportList. */
    interface IServerInfoReportList {

        /** ServerInfoReportList server_list */
        server_list?: (NFMsg.IServerInfoReport[]|null);
    }

    /** Represents a ServerInfoReportList. */
    class ServerInfoReportList implements IServerInfoReportList {

        /**
         * Constructs a new ServerInfoReportList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IServerInfoReportList);

        /** ServerInfoReportList server_list. */
        public server_list: NFMsg.IServerInfoReport[];

        /**
         * Creates a new ServerInfoReportList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfoReportList instance
         */
        public static create(properties?: NFMsg.IServerInfoReportList): NFMsg.ServerInfoReportList;

        /**
         * Encodes the specified ServerInfoReportList message. Does not implicitly {@link NFMsg.ServerInfoReportList.verify|verify} messages.
         * @param message ServerInfoReportList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IServerInfoReportList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ServerInfoReportList message, length delimited. Does not implicitly {@link NFMsg.ServerInfoReportList.verify|verify} messages.
         * @param message ServerInfoReportList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IServerInfoReportList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerInfoReportList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfoReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ServerInfoReportList;

        /**
         * Decodes a ServerInfoReportList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfoReportList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ServerInfoReportList;

        /**
         * Verifies a ServerInfoReportList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckEventResult. */
    interface IAckEventResult {

        /** AckEventResult event_code */
        event_code?: (NFMsg.EGameEventCode|null);

        /** AckEventResult event_object */
        event_object?: (NFMsg.IIdent|null);

        /** AckEventResult event_client */
        event_client?: (NFMsg.IIdent|null);
    }

    /** Represents an AckEventResult. */
    class AckEventResult implements IAckEventResult {

        /**
         * Constructs a new AckEventResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckEventResult);

        /** AckEventResult event_code. */
        public event_code: NFMsg.EGameEventCode;

        /** AckEventResult event_object. */
        public event_object?: (NFMsg.IIdent|null);

        /** AckEventResult event_client. */
        public event_client?: (NFMsg.IIdent|null);

        /**
         * Creates a new AckEventResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckEventResult instance
         */
        public static create(properties?: NFMsg.IAckEventResult): NFMsg.AckEventResult;

        /**
         * Encodes the specified AckEventResult message. Does not implicitly {@link NFMsg.AckEventResult.verify|verify} messages.
         * @param message AckEventResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckEventResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckEventResult message, length delimited. Does not implicitly {@link NFMsg.AckEventResult.verify|verify} messages.
         * @param message AckEventResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckEventResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckEventResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckEventResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckEventResult;

        /**
         * Decodes an AckEventResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckEventResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckEventResult;

        /**
         * Verifies an AckEventResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAccountLogin. */
    interface IReqAccountLogin {

        /** ReqAccountLogin account */
        account?: (Uint8Array|null);

        /** ReqAccountLogin password */
        password?: (Uint8Array|null);

        /** ReqAccountLogin security_code */
        security_code?: (Uint8Array|null);

        /** ReqAccountLogin signBuff */
        signBuff?: (Uint8Array|null);

        /** ReqAccountLogin clientVersion */
        clientVersion?: (number|null);

        /** ReqAccountLogin loginMode */
        loginMode?: (NFMsg.ELoginMode|null);

        /** ReqAccountLogin clientIP */
        clientIP?: (number|null);

        /** ReqAccountLogin clientMAC */
        clientMAC?: (number|Long|null);

        /** ReqAccountLogin device_info */
        device_info?: (Uint8Array|null);

        /** ReqAccountLogin extra_info */
        extra_info?: (Uint8Array|null);

        /** ReqAccountLogin platform_type */
        platform_type?: (number|null);
    }

    /** Represents a ReqAccountLogin. */
    class ReqAccountLogin implements IReqAccountLogin {

        /**
         * Constructs a new ReqAccountLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAccountLogin);

        /** ReqAccountLogin account. */
        public account: Uint8Array;

        /** ReqAccountLogin password. */
        public password: Uint8Array;

        /** ReqAccountLogin security_code. */
        public security_code: Uint8Array;

        /** ReqAccountLogin signBuff. */
        public signBuff: Uint8Array;

        /** ReqAccountLogin clientVersion. */
        public clientVersion: number;

        /** ReqAccountLogin loginMode. */
        public loginMode: NFMsg.ELoginMode;

        /** ReqAccountLogin clientIP. */
        public clientIP: number;

        /** ReqAccountLogin clientMAC. */
        public clientMAC: (number|Long);

        /** ReqAccountLogin device_info. */
        public device_info: Uint8Array;

        /** ReqAccountLogin extra_info. */
        public extra_info: Uint8Array;

        /** ReqAccountLogin platform_type. */
        public platform_type: number;

        /**
         * Creates a new ReqAccountLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAccountLogin instance
         */
        public static create(properties?: NFMsg.IReqAccountLogin): NFMsg.ReqAccountLogin;

        /**
         * Encodes the specified ReqAccountLogin message. Does not implicitly {@link NFMsg.ReqAccountLogin.verify|verify} messages.
         * @param message ReqAccountLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAccountLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAccountLogin message, length delimited. Does not implicitly {@link NFMsg.ReqAccountLogin.verify|verify} messages.
         * @param message ReqAccountLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAccountLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAccountLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAccountLogin;

        /**
         * Decodes a ReqAccountLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAccountLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAccountLogin;

        /**
         * Verifies a ReqAccountLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAccountLogout. */
    interface IReqAccountLogout {

        /** ReqAccountLogout account */
        account?: (Uint8Array|null);

        /** ReqAccountLogout extra_info */
        extra_info?: (Uint8Array|null);
    }

    /** Represents a ReqAccountLogout. */
    class ReqAccountLogout implements IReqAccountLogout {

        /**
         * Constructs a new ReqAccountLogout.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAccountLogout);

        /** ReqAccountLogout account. */
        public account: Uint8Array;

        /** ReqAccountLogout extra_info. */
        public extra_info: Uint8Array;

        /**
         * Creates a new ReqAccountLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAccountLogout instance
         */
        public static create(properties?: NFMsg.IReqAccountLogout): NFMsg.ReqAccountLogout;

        /**
         * Encodes the specified ReqAccountLogout message. Does not implicitly {@link NFMsg.ReqAccountLogout.verify|verify} messages.
         * @param message ReqAccountLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAccountLogout, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAccountLogout message, length delimited. Does not implicitly {@link NFMsg.ReqAccountLogout.verify|verify} messages.
         * @param message ReqAccountLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAccountLogout, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAccountLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAccountLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAccountLogout;

        /**
         * Decodes a ReqAccountLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAccountLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAccountLogout;

        /**
         * Verifies a ReqAccountLogout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo server_id */
        server_id?: (number|null);

        /** ServerInfo name */
        name?: (Uint8Array|null);

        /** ServerInfo wait_count */
        wait_count?: (number|null);

        /** ServerInfo status */
        status?: (NFMsg.EServerState|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IServerInfo);

        /** ServerInfo server_id. */
        public server_id: number;

        /** ServerInfo name. */
        public name: Uint8Array;

        /** ServerInfo wait_count. */
        public wait_count: number;

        /** ServerInfo status. */
        public status: NFMsg.EServerState;

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfo instance
         */
        public static create(properties?: NFMsg.IServerInfo): NFMsg.ServerInfo;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link NFMsg.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link NFMsg.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ServerInfo;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ServerInfo;

        /**
         * Verifies a ServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** ReqServerListType enum. */
    enum ReqServerListType {
        RSLT_WORLD_SERVER = 0,
        RSLT_GAMES_ERVER = 1
    }

    /** Properties of a ReqServerList. */
    interface IReqServerList {

        /** ReqServerList type */
        type?: (NFMsg.ReqServerListType|null);
    }

    /** Represents a ReqServerList. */
    class ReqServerList implements IReqServerList {

        /**
         * Constructs a new ReqServerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqServerList);

        /** ReqServerList type. */
        public type: NFMsg.ReqServerListType;

        /**
         * Creates a new ReqServerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqServerList instance
         */
        public static create(properties?: NFMsg.IReqServerList): NFMsg.ReqServerList;

        /**
         * Encodes the specified ReqServerList message. Does not implicitly {@link NFMsg.ReqServerList.verify|verify} messages.
         * @param message ReqServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqServerList message, length delimited. Does not implicitly {@link NFMsg.ReqServerList.verify|verify} messages.
         * @param message ReqServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqServerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqServerList;

        /**
         * Decodes a ReqServerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqServerList;

        /**
         * Verifies a ReqServerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckServerList. */
    interface IAckServerList {

        /** AckServerList type */
        type?: (NFMsg.ReqServerListType|null);

        /** AckServerList info */
        info?: (NFMsg.IServerInfo[]|null);
    }

    /** Represents an AckServerList. */
    class AckServerList implements IAckServerList {

        /**
         * Constructs a new AckServerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckServerList);

        /** AckServerList type. */
        public type: NFMsg.ReqServerListType;

        /** AckServerList info. */
        public info: NFMsg.IServerInfo[];

        /**
         * Creates a new AckServerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckServerList instance
         */
        public static create(properties?: NFMsg.IAckServerList): NFMsg.AckServerList;

        /**
         * Encodes the specified AckServerList message. Does not implicitly {@link NFMsg.AckServerList.verify|verify} messages.
         * @param message AckServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckServerList message, length delimited. Does not implicitly {@link NFMsg.AckServerList.verify|verify} messages.
         * @param message AckServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckServerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckServerList;

        /**
         * Decodes an AckServerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckServerList;

        /**
         * Verifies an AckServerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqConnectWorld. */
    interface IReqConnectWorld {

        /** ReqConnectWorld world_id */
        world_id?: (number|null);

        /** ReqConnectWorld account */
        account?: (Uint8Array|null);

        /** ReqConnectWorld sender */
        sender?: (NFMsg.IIdent|null);

        /** ReqConnectWorld login_id */
        login_id?: (number|null);
    }

    /** Represents a ReqConnectWorld. */
    class ReqConnectWorld implements IReqConnectWorld {

        /**
         * Constructs a new ReqConnectWorld.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqConnectWorld);

        /** ReqConnectWorld world_id. */
        public world_id: number;

        /** ReqConnectWorld account. */
        public account: Uint8Array;

        /** ReqConnectWorld sender. */
        public sender?: (NFMsg.IIdent|null);

        /** ReqConnectWorld login_id. */
        public login_id: number;

        /**
         * Creates a new ReqConnectWorld instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqConnectWorld instance
         */
        public static create(properties?: NFMsg.IReqConnectWorld): NFMsg.ReqConnectWorld;

        /**
         * Encodes the specified ReqConnectWorld message. Does not implicitly {@link NFMsg.ReqConnectWorld.verify|verify} messages.
         * @param message ReqConnectWorld message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqConnectWorld, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqConnectWorld message, length delimited. Does not implicitly {@link NFMsg.ReqConnectWorld.verify|verify} messages.
         * @param message ReqConnectWorld message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqConnectWorld, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqConnectWorld message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqConnectWorld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqConnectWorld;

        /**
         * Decodes a ReqConnectWorld message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqConnectWorld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqConnectWorld;

        /**
         * Verifies a ReqConnectWorld message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckConnectWorldResult. */
    interface IAckConnectWorldResult {

        /** AckConnectWorldResult world_id */
        world_id?: (number|null);

        /** AckConnectWorldResult sender */
        sender?: (NFMsg.IIdent|null);

        /** AckConnectWorldResult login_id */
        login_id?: (number|null);

        /** AckConnectWorldResult account */
        account?: (Uint8Array|null);

        /** AckConnectWorldResult world_ip */
        world_ip?: (Uint8Array|null);

        /** AckConnectWorldResult world_port */
        world_port?: (number|null);

        /** AckConnectWorldResult world_key */
        world_key?: (Uint8Array|null);
    }

    /** Represents an AckConnectWorldResult. */
    class AckConnectWorldResult implements IAckConnectWorldResult {

        /**
         * Constructs a new AckConnectWorldResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckConnectWorldResult);

        /** AckConnectWorldResult world_id. */
        public world_id: number;

        /** AckConnectWorldResult sender. */
        public sender?: (NFMsg.IIdent|null);

        /** AckConnectWorldResult login_id. */
        public login_id: number;

        /** AckConnectWorldResult account. */
        public account: Uint8Array;

        /** AckConnectWorldResult world_ip. */
        public world_ip: Uint8Array;

        /** AckConnectWorldResult world_port. */
        public world_port: number;

        /** AckConnectWorldResult world_key. */
        public world_key: Uint8Array;

        /**
         * Creates a new AckConnectWorldResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckConnectWorldResult instance
         */
        public static create(properties?: NFMsg.IAckConnectWorldResult): NFMsg.AckConnectWorldResult;

        /**
         * Encodes the specified AckConnectWorldResult message. Does not implicitly {@link NFMsg.AckConnectWorldResult.verify|verify} messages.
         * @param message AckConnectWorldResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckConnectWorldResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckConnectWorldResult message, length delimited. Does not implicitly {@link NFMsg.AckConnectWorldResult.verify|verify} messages.
         * @param message AckConnectWorldResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckConnectWorldResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckConnectWorldResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckConnectWorldResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckConnectWorldResult;

        /**
         * Decodes an AckConnectWorldResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckConnectWorldResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckConnectWorldResult;

        /**
         * Verifies an AckConnectWorldResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSelectServer. */
    interface IReqSelectServer {

        /** ReqSelectServer world_id */
        world_id?: (number|null);
    }

    /** Represents a ReqSelectServer. */
    class ReqSelectServer implements IReqSelectServer {

        /**
         * Constructs a new ReqSelectServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqSelectServer);

        /** ReqSelectServer world_id. */
        public world_id: number;

        /**
         * Creates a new ReqSelectServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSelectServer instance
         */
        public static create(properties?: NFMsg.IReqSelectServer): NFMsg.ReqSelectServer;

        /**
         * Encodes the specified ReqSelectServer message. Does not implicitly {@link NFMsg.ReqSelectServer.verify|verify} messages.
         * @param message ReqSelectServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqSelectServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSelectServer message, length delimited. Does not implicitly {@link NFMsg.ReqSelectServer.verify|verify} messages.
         * @param message ReqSelectServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqSelectServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSelectServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSelectServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqSelectServer;

        /**
         * Decodes a ReqSelectServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSelectServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqSelectServer;

        /**
         * Verifies a ReqSelectServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqKickFromWorld. */
    interface IReqKickFromWorld {

        /** ReqKickFromWorld world_id */
        world_id?: (number|null);

        /** ReqKickFromWorld account */
        account?: (Uint8Array|null);
    }

    /** Represents a ReqKickFromWorld. */
    class ReqKickFromWorld implements IReqKickFromWorld {

        /**
         * Constructs a new ReqKickFromWorld.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqKickFromWorld);

        /** ReqKickFromWorld world_id. */
        public world_id: number;

        /** ReqKickFromWorld account. */
        public account: Uint8Array;

        /**
         * Creates a new ReqKickFromWorld instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqKickFromWorld instance
         */
        public static create(properties?: NFMsg.IReqKickFromWorld): NFMsg.ReqKickFromWorld;

        /**
         * Encodes the specified ReqKickFromWorld message. Does not implicitly {@link NFMsg.ReqKickFromWorld.verify|verify} messages.
         * @param message ReqKickFromWorld message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqKickFromWorld, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqKickFromWorld message, length delimited. Does not implicitly {@link NFMsg.ReqKickFromWorld.verify|verify} messages.
         * @param message ReqKickFromWorld message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqKickFromWorld, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqKickFromWorld message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqKickFromWorld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqKickFromWorld;

        /**
         * Decodes a ReqKickFromWorld message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqKickFromWorld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqKickFromWorld;

        /**
         * Verifies a ReqKickFromWorld message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqRoleList. */
    interface IReqRoleList {

        /** ReqRoleList game_id */
        game_id?: (number|null);

        /** ReqRoleList account */
        account?: (Uint8Array|null);
    }

    /** Represents a ReqRoleList. */
    class ReqRoleList implements IReqRoleList {

        /**
         * Constructs a new ReqRoleList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqRoleList);

        /** ReqRoleList game_id. */
        public game_id: number;

        /** ReqRoleList account. */
        public account: Uint8Array;

        /**
         * Creates a new ReqRoleList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqRoleList instance
         */
        public static create(properties?: NFMsg.IReqRoleList): NFMsg.ReqRoleList;

        /**
         * Encodes the specified ReqRoleList message. Does not implicitly {@link NFMsg.ReqRoleList.verify|verify} messages.
         * @param message ReqRoleList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqRoleList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqRoleList message, length delimited. Does not implicitly {@link NFMsg.ReqRoleList.verify|verify} messages.
         * @param message ReqRoleList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqRoleList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRoleList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqRoleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqRoleList;

        /**
         * Decodes a ReqRoleList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqRoleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqRoleList;

        /**
         * Verifies a ReqRoleList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoleLiteInfo. */
    interface IRoleLiteInfo {

        /** RoleLiteInfo id */
        id?: (NFMsg.IIdent|null);

        /** RoleLiteInfo career */
        career?: (number|null);

        /** RoleLiteInfo sex */
        sex?: (number|null);

        /** RoleLiteInfo race */
        race?: (number|null);

        /** RoleLiteInfo noob_name */
        noob_name?: (Uint8Array|null);

        /** RoleLiteInfo game_id */
        game_id?: (number|null);

        /** RoleLiteInfo role_level */
        role_level?: (number|null);

        /** RoleLiteInfo delete_time */
        delete_time?: (number|null);

        /** RoleLiteInfo reg_time */
        reg_time?: (number|null);

        /** RoleLiteInfo last_offline_time */
        last_offline_time?: (number|null);

        /** RoleLiteInfo last_offline_ip */
        last_offline_ip?: (number|null);

        /** RoleLiteInfo view_record */
        view_record?: (Uint8Array|null);
    }

    /** Represents a RoleLiteInfo. */
    class RoleLiteInfo implements IRoleLiteInfo {

        /**
         * Constructs a new RoleLiteInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRoleLiteInfo);

        /** RoleLiteInfo id. */
        public id?: (NFMsg.IIdent|null);

        /** RoleLiteInfo career. */
        public career: number;

        /** RoleLiteInfo sex. */
        public sex: number;

        /** RoleLiteInfo race. */
        public race: number;

        /** RoleLiteInfo noob_name. */
        public noob_name: Uint8Array;

        /** RoleLiteInfo game_id. */
        public game_id: number;

        /** RoleLiteInfo role_level. */
        public role_level: number;

        /** RoleLiteInfo delete_time. */
        public delete_time: number;

        /** RoleLiteInfo reg_time. */
        public reg_time: number;

        /** RoleLiteInfo last_offline_time. */
        public last_offline_time: number;

        /** RoleLiteInfo last_offline_ip. */
        public last_offline_ip: number;

        /** RoleLiteInfo view_record. */
        public view_record: Uint8Array;

        /**
         * Creates a new RoleLiteInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleLiteInfo instance
         */
        public static create(properties?: NFMsg.IRoleLiteInfo): NFMsg.RoleLiteInfo;

        /**
         * Encodes the specified RoleLiteInfo message. Does not implicitly {@link NFMsg.RoleLiteInfo.verify|verify} messages.
         * @param message RoleLiteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRoleLiteInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoleLiteInfo message, length delimited. Does not implicitly {@link NFMsg.RoleLiteInfo.verify|verify} messages.
         * @param message RoleLiteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRoleLiteInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoleLiteInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleLiteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RoleLiteInfo;

        /**
         * Decodes a RoleLiteInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleLiteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RoleLiteInfo;

        /**
         * Verifies a RoleLiteInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckRoleLiteInfoList. */
    interface IAckRoleLiteInfoList {

        /** AckRoleLiteInfoList char_data */
        char_data?: (NFMsg.IRoleLiteInfo[]|null);

        /** AckRoleLiteInfoList account */
        account?: (Uint8Array|null);
    }

    /** Represents an AckRoleLiteInfoList. */
    class AckRoleLiteInfoList implements IAckRoleLiteInfoList {

        /**
         * Constructs a new AckRoleLiteInfoList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckRoleLiteInfoList);

        /** AckRoleLiteInfoList char_data. */
        public char_data: NFMsg.IRoleLiteInfo[];

        /** AckRoleLiteInfoList account. */
        public account: Uint8Array;

        /**
         * Creates a new AckRoleLiteInfoList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckRoleLiteInfoList instance
         */
        public static create(properties?: NFMsg.IAckRoleLiteInfoList): NFMsg.AckRoleLiteInfoList;

        /**
         * Encodes the specified AckRoleLiteInfoList message. Does not implicitly {@link NFMsg.AckRoleLiteInfoList.verify|verify} messages.
         * @param message AckRoleLiteInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckRoleLiteInfoList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckRoleLiteInfoList message, length delimited. Does not implicitly {@link NFMsg.AckRoleLiteInfoList.verify|verify} messages.
         * @param message AckRoleLiteInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckRoleLiteInfoList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckRoleLiteInfoList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckRoleLiteInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckRoleLiteInfoList;

        /**
         * Decodes an AckRoleLiteInfoList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckRoleLiteInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckRoleLiteInfoList;

        /**
         * Verifies an AckRoleLiteInfoList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqCreateRole. */
    interface IReqCreateRole {

        /** ReqCreateRole account */
        account?: (Uint8Array|null);

        /** ReqCreateRole career */
        career?: (number|null);

        /** ReqCreateRole sex */
        sex?: (number|null);

        /** ReqCreateRole race */
        race?: (number|null);

        /** ReqCreateRole noob_name */
        noob_name?: (Uint8Array|null);

        /** ReqCreateRole game_id */
        game_id?: (number|null);
    }

    /** Represents a ReqCreateRole. */
    class ReqCreateRole implements IReqCreateRole {

        /**
         * Constructs a new ReqCreateRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqCreateRole);

        /** ReqCreateRole account. */
        public account: Uint8Array;

        /** ReqCreateRole career. */
        public career: number;

        /** ReqCreateRole sex. */
        public sex: number;

        /** ReqCreateRole race. */
        public race: number;

        /** ReqCreateRole noob_name. */
        public noob_name: Uint8Array;

        /** ReqCreateRole game_id. */
        public game_id: number;

        /**
         * Creates a new ReqCreateRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqCreateRole instance
         */
        public static create(properties?: NFMsg.IReqCreateRole): NFMsg.ReqCreateRole;

        /**
         * Encodes the specified ReqCreateRole message. Does not implicitly {@link NFMsg.ReqCreateRole.verify|verify} messages.
         * @param message ReqCreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqCreateRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqCreateRole message, length delimited. Does not implicitly {@link NFMsg.ReqCreateRole.verify|verify} messages.
         * @param message ReqCreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqCreateRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqCreateRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqCreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqCreateRole;

        /**
         * Decodes a ReqCreateRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqCreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqCreateRole;

        /**
         * Verifies a ReqCreateRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqDeleteRole. */
    interface IReqDeleteRole {

        /** ReqDeleteRole account */
        account?: (Uint8Array|null);

        /** ReqDeleteRole name */
        name?: (Uint8Array|null);

        /** ReqDeleteRole game_id */
        game_id?: (number|null);
    }

    /** Represents a ReqDeleteRole. */
    class ReqDeleteRole implements IReqDeleteRole {

        /**
         * Constructs a new ReqDeleteRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqDeleteRole);

        /** ReqDeleteRole account. */
        public account: Uint8Array;

        /** ReqDeleteRole name. */
        public name: Uint8Array;

        /** ReqDeleteRole game_id. */
        public game_id: number;

        /**
         * Creates a new ReqDeleteRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqDeleteRole instance
         */
        public static create(properties?: NFMsg.IReqDeleteRole): NFMsg.ReqDeleteRole;

        /**
         * Encodes the specified ReqDeleteRole message. Does not implicitly {@link NFMsg.ReqDeleteRole.verify|verify} messages.
         * @param message ReqDeleteRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqDeleteRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqDeleteRole message, length delimited. Does not implicitly {@link NFMsg.ReqDeleteRole.verify|verify} messages.
         * @param message ReqDeleteRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqDeleteRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqDeleteRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqDeleteRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqDeleteRole;

        /**
         * Decodes a ReqDeleteRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqDeleteRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqDeleteRole;

        /**
         * Verifies a ReqDeleteRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqRecoverRole. */
    interface IReqRecoverRole {

        /** ReqRecoverRole account */
        account?: (Uint8Array|null);

        /** ReqRecoverRole name */
        name?: (Uint8Array|null);

        /** ReqRecoverRole game_id */
        game_id?: (number|null);
    }

    /** Represents a ReqRecoverRole. */
    class ReqRecoverRole implements IReqRecoverRole {

        /**
         * Constructs a new ReqRecoverRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqRecoverRole);

        /** ReqRecoverRole account. */
        public account: Uint8Array;

        /** ReqRecoverRole name. */
        public name: Uint8Array;

        /** ReqRecoverRole game_id. */
        public game_id: number;

        /**
         * Creates a new ReqRecoverRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqRecoverRole instance
         */
        public static create(properties?: NFMsg.IReqRecoverRole): NFMsg.ReqRecoverRole;

        /**
         * Encodes the specified ReqRecoverRole message. Does not implicitly {@link NFMsg.ReqRecoverRole.verify|verify} messages.
         * @param message ReqRecoverRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqRecoverRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqRecoverRole message, length delimited. Does not implicitly {@link NFMsg.ReqRecoverRole.verify|verify} messages.
         * @param message ReqRecoverRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqRecoverRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRecoverRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqRecoverRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqRecoverRole;

        /**
         * Decodes a ReqRecoverRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqRecoverRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqRecoverRole;

        /**
         * Verifies a ReqRecoverRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ServerHeartBeat. */
    interface IServerHeartBeat {

        /** ServerHeartBeat count */
        count?: (number|null);
    }

    /** Represents a ServerHeartBeat. */
    class ServerHeartBeat implements IServerHeartBeat {

        /**
         * Constructs a new ServerHeartBeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IServerHeartBeat);

        /** ServerHeartBeat count. */
        public count: number;

        /**
         * Creates a new ServerHeartBeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerHeartBeat instance
         */
        public static create(properties?: NFMsg.IServerHeartBeat): NFMsg.ServerHeartBeat;

        /**
         * Encodes the specified ServerHeartBeat message. Does not implicitly {@link NFMsg.ServerHeartBeat.verify|verify} messages.
         * @param message ServerHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IServerHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ServerHeartBeat message, length delimited. Does not implicitly {@link NFMsg.ServerHeartBeat.verify|verify} messages.
         * @param message ServerHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IServerHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerHeartBeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ServerHeartBeat;

        /**
         * Decodes a ServerHeartBeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ServerHeartBeat;

        /**
         * Verifies a ServerHeartBeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoleOnlineNotify. */
    interface IRoleOnlineNotify {

        /** RoleOnlineNotify self */
        self?: (NFMsg.IIdent|null);

        /** RoleOnlineNotify guild */
        guild?: (NFMsg.IIdent|null);

        /** RoleOnlineNotify game */
        game?: (number|null);

        /** RoleOnlineNotify proxy */
        proxy?: (number|null);
    }

    /** Represents a RoleOnlineNotify. */
    class RoleOnlineNotify implements IRoleOnlineNotify {

        /**
         * Constructs a new RoleOnlineNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRoleOnlineNotify);

        /** RoleOnlineNotify self. */
        public self?: (NFMsg.IIdent|null);

        /** RoleOnlineNotify guild. */
        public guild?: (NFMsg.IIdent|null);

        /** RoleOnlineNotify game. */
        public game: number;

        /** RoleOnlineNotify proxy. */
        public proxy: number;

        /**
         * Creates a new RoleOnlineNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleOnlineNotify instance
         */
        public static create(properties?: NFMsg.IRoleOnlineNotify): NFMsg.RoleOnlineNotify;

        /**
         * Encodes the specified RoleOnlineNotify message. Does not implicitly {@link NFMsg.RoleOnlineNotify.verify|verify} messages.
         * @param message RoleOnlineNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRoleOnlineNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoleOnlineNotify message, length delimited. Does not implicitly {@link NFMsg.RoleOnlineNotify.verify|verify} messages.
         * @param message RoleOnlineNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRoleOnlineNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoleOnlineNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleOnlineNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RoleOnlineNotify;

        /**
         * Decodes a RoleOnlineNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleOnlineNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RoleOnlineNotify;

        /**
         * Verifies a RoleOnlineNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoleOfflineNotify. */
    interface IRoleOfflineNotify {

        /** RoleOfflineNotify self */
        self?: (NFMsg.IIdent|null);

        /** RoleOfflineNotify guild */
        guild?: (NFMsg.IIdent|null);

        /** RoleOfflineNotify game */
        game?: (number|null);

        /** RoleOfflineNotify proxy */
        proxy?: (number|null);
    }

    /** Represents a RoleOfflineNotify. */
    class RoleOfflineNotify implements IRoleOfflineNotify {

        /**
         * Constructs a new RoleOfflineNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRoleOfflineNotify);

        /** RoleOfflineNotify self. */
        public self?: (NFMsg.IIdent|null);

        /** RoleOfflineNotify guild. */
        public guild?: (NFMsg.IIdent|null);

        /** RoleOfflineNotify game. */
        public game: number;

        /** RoleOfflineNotify proxy. */
        public proxy: number;

        /**
         * Creates a new RoleOfflineNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleOfflineNotify instance
         */
        public static create(properties?: NFMsg.IRoleOfflineNotify): NFMsg.RoleOfflineNotify;

        /**
         * Encodes the specified RoleOfflineNotify message. Does not implicitly {@link NFMsg.RoleOfflineNotify.verify|verify} messages.
         * @param message RoleOfflineNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRoleOfflineNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoleOfflineNotify message, length delimited. Does not implicitly {@link NFMsg.RoleOfflineNotify.verify|verify} messages.
         * @param message RoleOfflineNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRoleOfflineNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoleOfflineNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleOfflineNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RoleOfflineNotify;

        /**
         * Decodes a RoleOfflineNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleOfflineNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RoleOfflineNotify;

        /**
         * Verifies a RoleOfflineNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoleDataPack. */
    interface IRoleDataPack {

        /** RoleDataPack id */
        id?: (NFMsg.IIdent|null);

        /** RoleDataPack property */
        property?: (NFMsg.IObjectPropertyList|null);

        /** RoleDataPack record */
        record?: (NFMsg.IObjectRecordList|null);
    }

    /** Represents a RoleDataPack. */
    class RoleDataPack implements IRoleDataPack {

        /**
         * Constructs a new RoleDataPack.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IRoleDataPack);

        /** RoleDataPack id. */
        public id?: (NFMsg.IIdent|null);

        /** RoleDataPack property. */
        public property?: (NFMsg.IObjectPropertyList|null);

        /** RoleDataPack record. */
        public record?: (NFMsg.IObjectRecordList|null);

        /**
         * Creates a new RoleDataPack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleDataPack instance
         */
        public static create(properties?: NFMsg.IRoleDataPack): NFMsg.RoleDataPack;

        /**
         * Encodes the specified RoleDataPack message. Does not implicitly {@link NFMsg.RoleDataPack.verify|verify} messages.
         * @param message RoleDataPack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IRoleDataPack, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoleDataPack message, length delimited. Does not implicitly {@link NFMsg.RoleDataPack.verify|verify} messages.
         * @param message RoleDataPack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IRoleDataPack, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoleDataPack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleDataPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.RoleDataPack;

        /**
         * Decodes a RoleDataPack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleDataPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.RoleDataPack;

        /**
         * Verifies a RoleDataPack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqEnterGameServer. */
    interface IReqEnterGameServer {

        /** ReqEnterGameServer id */
        id?: (NFMsg.IIdent|null);

        /** ReqEnterGameServer account */
        account?: (Uint8Array|null);

        /** ReqEnterGameServer game_id */
        game_id?: (number|null);

        /** ReqEnterGameServer name */
        name?: (Uint8Array|null);
    }

    /** Represents a ReqEnterGameServer. */
    class ReqEnterGameServer implements IReqEnterGameServer {

        /**
         * Constructs a new ReqEnterGameServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqEnterGameServer);

        /** ReqEnterGameServer id. */
        public id?: (NFMsg.IIdent|null);

        /** ReqEnterGameServer account. */
        public account: Uint8Array;

        /** ReqEnterGameServer game_id. */
        public game_id: number;

        /** ReqEnterGameServer name. */
        public name: Uint8Array;

        /**
         * Creates a new ReqEnterGameServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGameServer instance
         */
        public static create(properties?: NFMsg.IReqEnterGameServer): NFMsg.ReqEnterGameServer;

        /**
         * Encodes the specified ReqEnterGameServer message. Does not implicitly {@link NFMsg.ReqEnterGameServer.verify|verify} messages.
         * @param message ReqEnterGameServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqEnterGameServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGameServer message, length delimited. Does not implicitly {@link NFMsg.ReqEnterGameServer.verify|verify} messages.
         * @param message ReqEnterGameServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqEnterGameServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEnterGameServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqEnterGameServer;

        /**
         * Decodes a ReqEnterGameServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqEnterGameServer;

        /**
         * Verifies a ReqEnterGameServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckEnterGameSuccess. */
    interface IReqAckEnterGameSuccess {

        /** ReqAckEnterGameSuccess arg */
        arg?: (number|null);
    }

    /** Represents a ReqAckEnterGameSuccess. */
    class ReqAckEnterGameSuccess implements IReqAckEnterGameSuccess {

        /**
         * Constructs a new ReqAckEnterGameSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckEnterGameSuccess);

        /** ReqAckEnterGameSuccess arg. */
        public arg: number;

        /**
         * Creates a new ReqAckEnterGameSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckEnterGameSuccess instance
         */
        public static create(properties?: NFMsg.IReqAckEnterGameSuccess): NFMsg.ReqAckEnterGameSuccess;

        /**
         * Encodes the specified ReqAckEnterGameSuccess message. Does not implicitly {@link NFMsg.ReqAckEnterGameSuccess.verify|verify} messages.
         * @param message ReqAckEnterGameSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckEnterGameSuccess, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckEnterGameSuccess message, length delimited. Does not implicitly {@link NFMsg.ReqAckEnterGameSuccess.verify|verify} messages.
         * @param message ReqAckEnterGameSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckEnterGameSuccess, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckEnterGameSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckEnterGameSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckEnterGameSuccess;

        /**
         * Decodes a ReqAckEnterGameSuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckEnterGameSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckEnterGameSuccess;

        /**
         * Verifies a ReqAckEnterGameSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHeartBeat. */
    interface IReqHeartBeat {

        /** ReqHeartBeat arg */
        arg?: (number|null);
    }

    /** Represents a ReqHeartBeat. */
    class ReqHeartBeat implements IReqHeartBeat {

        /**
         * Constructs a new ReqHeartBeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqHeartBeat);

        /** ReqHeartBeat arg. */
        public arg: number;

        /**
         * Creates a new ReqHeartBeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHeartBeat instance
         */
        public static create(properties?: NFMsg.IReqHeartBeat): NFMsg.ReqHeartBeat;

        /**
         * Encodes the specified ReqHeartBeat message. Does not implicitly {@link NFMsg.ReqHeartBeat.verify|verify} messages.
         * @param message ReqHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHeartBeat message, length delimited. Does not implicitly {@link NFMsg.ReqHeartBeat.verify|verify} messages.
         * @param message ReqHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHeartBeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqHeartBeat;

        /**
         * Decodes a ReqHeartBeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqHeartBeat;

        /**
         * Verifies a ReqHeartBeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqLeaveGameServer. */
    interface IReqLeaveGameServer {

        /** ReqLeaveGameServer arg */
        arg?: (number|null);
    }

    /** Represents a ReqLeaveGameServer. */
    class ReqLeaveGameServer implements IReqLeaveGameServer {

        /**
         * Constructs a new ReqLeaveGameServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqLeaveGameServer);

        /** ReqLeaveGameServer arg. */
        public arg: number;

        /**
         * Creates a new ReqLeaveGameServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLeaveGameServer instance
         */
        public static create(properties?: NFMsg.IReqLeaveGameServer): NFMsg.ReqLeaveGameServer;

        /**
         * Encodes the specified ReqLeaveGameServer message. Does not implicitly {@link NFMsg.ReqLeaveGameServer.verify|verify} messages.
         * @param message ReqLeaveGameServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqLeaveGameServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqLeaveGameServer message, length delimited. Does not implicitly {@link NFMsg.ReqLeaveGameServer.verify|verify} messages.
         * @param message ReqLeaveGameServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqLeaveGameServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqLeaveGameServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLeaveGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqLeaveGameServer;

        /**
         * Decodes a ReqLeaveGameServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLeaveGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqLeaveGameServer;

        /**
         * Verifies a ReqLeaveGameServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerEntryInfo. */
    interface IPlayerEntryInfo {

        /** PlayerEntryInfo object_guid */
        object_guid?: (NFMsg.IIdent|null);

        /** PlayerEntryInfo x */
        x?: (number|null);

        /** PlayerEntryInfo y */
        y?: (number|null);

        /** PlayerEntryInfo z */
        z?: (number|null);

        /** PlayerEntryInfo career_type */
        career_type?: (number|null);

        /** PlayerEntryInfo player_state */
        player_state?: (number|null);

        /** PlayerEntryInfo config_id */
        config_id?: (Uint8Array|null);

        /** PlayerEntryInfo scene_id */
        scene_id?: (number|null);

        /** PlayerEntryInfo class_id */
        class_id?: (Uint8Array|null);
    }

    /** Represents a PlayerEntryInfo. */
    class PlayerEntryInfo implements IPlayerEntryInfo {

        /**
         * Constructs a new PlayerEntryInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPlayerEntryInfo);

        /** PlayerEntryInfo object_guid. */
        public object_guid?: (NFMsg.IIdent|null);

        /** PlayerEntryInfo x. */
        public x: number;

        /** PlayerEntryInfo y. */
        public y: number;

        /** PlayerEntryInfo z. */
        public z: number;

        /** PlayerEntryInfo career_type. */
        public career_type: number;

        /** PlayerEntryInfo player_state. */
        public player_state: number;

        /** PlayerEntryInfo config_id. */
        public config_id: Uint8Array;

        /** PlayerEntryInfo scene_id. */
        public scene_id: number;

        /** PlayerEntryInfo class_id. */
        public class_id: Uint8Array;

        /**
         * Creates a new PlayerEntryInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerEntryInfo instance
         */
        public static create(properties?: NFMsg.IPlayerEntryInfo): NFMsg.PlayerEntryInfo;

        /**
         * Encodes the specified PlayerEntryInfo message. Does not implicitly {@link NFMsg.PlayerEntryInfo.verify|verify} messages.
         * @param message PlayerEntryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPlayerEntryInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerEntryInfo message, length delimited. Does not implicitly {@link NFMsg.PlayerEntryInfo.verify|verify} messages.
         * @param message PlayerEntryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPlayerEntryInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerEntryInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerEntryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PlayerEntryInfo;

        /**
         * Decodes a PlayerEntryInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerEntryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PlayerEntryInfo;

        /**
         * Verifies a PlayerEntryInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerEntryList. */
    interface IAckPlayerEntryList {

        /** AckPlayerEntryList object_list */
        object_list?: (NFMsg.IPlayerEntryInfo[]|null);
    }

    /** Represents an AckPlayerEntryList. */
    class AckPlayerEntryList implements IAckPlayerEntryList {

        /**
         * Constructs a new AckPlayerEntryList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckPlayerEntryList);

        /** AckPlayerEntryList object_list. */
        public object_list: NFMsg.IPlayerEntryInfo[];

        /**
         * Creates a new AckPlayerEntryList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerEntryList instance
         */
        public static create(properties?: NFMsg.IAckPlayerEntryList): NFMsg.AckPlayerEntryList;

        /**
         * Encodes the specified AckPlayerEntryList message. Does not implicitly {@link NFMsg.AckPlayerEntryList.verify|verify} messages.
         * @param message AckPlayerEntryList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckPlayerEntryList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerEntryList message, length delimited. Does not implicitly {@link NFMsg.AckPlayerEntryList.verify|verify} messages.
         * @param message AckPlayerEntryList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckPlayerEntryList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerEntryList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerEntryList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckPlayerEntryList;

        /**
         * Decodes an AckPlayerEntryList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerEntryList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckPlayerEntryList;

        /**
         * Verifies an AckPlayerEntryList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerLeaveList. */
    interface IAckPlayerLeaveList {

        /** AckPlayerLeaveList object_list */
        object_list?: (NFMsg.IIdent[]|null);
    }

    /** Represents an AckPlayerLeaveList. */
    class AckPlayerLeaveList implements IAckPlayerLeaveList {

        /**
         * Constructs a new AckPlayerLeaveList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckPlayerLeaveList);

        /** AckPlayerLeaveList object_list. */
        public object_list: NFMsg.IIdent[];

        /**
         * Creates a new AckPlayerLeaveList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerLeaveList instance
         */
        public static create(properties?: NFMsg.IAckPlayerLeaveList): NFMsg.AckPlayerLeaveList;

        /**
         * Encodes the specified AckPlayerLeaveList message. Does not implicitly {@link NFMsg.AckPlayerLeaveList.verify|verify} messages.
         * @param message AckPlayerLeaveList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckPlayerLeaveList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerLeaveList message, length delimited. Does not implicitly {@link NFMsg.AckPlayerLeaveList.verify|verify} messages.
         * @param message AckPlayerLeaveList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckPlayerLeaveList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerLeaveList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerLeaveList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckPlayerLeaveList;

        /**
         * Decodes an AckPlayerLeaveList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerLeaveList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckPlayerLeaveList;

        /**
         * Verifies an AckPlayerLeaveList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckSynData. */
    interface IReqAckSynData {

        /** ReqAckSynData syser */
        syser?: (NFMsg.IIdent|null);

        /** ReqAckSynData object_list */
        object_list?: (NFMsg.IIdent[]|null);

        /** ReqAckSynData data */
        data?: (Uint8Array|null);

        /** ReqAckSynData syn_type */
        syn_type?: (NFMsg.ReqAckSynData.SynType|null);

        /** ReqAckSynData msg_id */
        msg_id?: (NFMsg.ESynMsgID|null);
    }

    /** Represents a ReqAckSynData. */
    class ReqAckSynData implements IReqAckSynData {

        /**
         * Constructs a new ReqAckSynData.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckSynData);

        /** ReqAckSynData syser. */
        public syser?: (NFMsg.IIdent|null);

        /** ReqAckSynData object_list. */
        public object_list: NFMsg.IIdent[];

        /** ReqAckSynData data. */
        public data: Uint8Array;

        /** ReqAckSynData syn_type. */
        public syn_type: NFMsg.ReqAckSynData.SynType;

        /** ReqAckSynData msg_id. */
        public msg_id: NFMsg.ESynMsgID;

        /**
         * Creates a new ReqAckSynData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckSynData instance
         */
        public static create(properties?: NFMsg.IReqAckSynData): NFMsg.ReqAckSynData;

        /**
         * Encodes the specified ReqAckSynData message. Does not implicitly {@link NFMsg.ReqAckSynData.verify|verify} messages.
         * @param message ReqAckSynData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckSynData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckSynData message, length delimited. Does not implicitly {@link NFMsg.ReqAckSynData.verify|verify} messages.
         * @param message ReqAckSynData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckSynData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckSynData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckSynData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckSynData;

        /**
         * Decodes a ReqAckSynData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckSynData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckSynData;

        /**
         * Verifies a ReqAckSynData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqAckSynData {

        /** SynType enum. */
        enum SynType {
            EST_UNKNOW = 0,
            EST_GROUP = 1,
            EST_SCENE = 2,
            EST_GUILD = 3,
            EST_FRIEND = 4
        }
    }

    /** Properties of a ReqAckPlayerMove. */
    interface IReqAckPlayerMove {

        /** ReqAckPlayerMove mover */
        mover?: (NFMsg.IIdent|null);

        /** ReqAckPlayerMove moveType */
        moveType?: (number|null);

        /** ReqAckPlayerMove speed */
        speed?: (number|null);

        /** ReqAckPlayerMove time */
        time?: (number|null);

        /** ReqAckPlayerMove lastState */
        lastState?: (number|null);

        /** ReqAckPlayerMove target_pos */
        target_pos?: (NFMsg.IVector3[]|null);

        /** ReqAckPlayerMove source_pos */
        source_pos?: (NFMsg.IVector3[]|null);

        /** ReqAckPlayerMove move_direction */
        move_direction?: (NFMsg.IVector3[]|null);
    }

    /** Represents a ReqAckPlayerMove. */
    class ReqAckPlayerMove implements IReqAckPlayerMove {

        /**
         * Constructs a new ReqAckPlayerMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckPlayerMove);

        /** ReqAckPlayerMove mover. */
        public mover?: (NFMsg.IIdent|null);

        /** ReqAckPlayerMove moveType. */
        public moveType: number;

        /** ReqAckPlayerMove speed. */
        public speed: number;

        /** ReqAckPlayerMove time. */
        public time: number;

        /** ReqAckPlayerMove lastState. */
        public lastState: number;

        /** ReqAckPlayerMove target_pos. */
        public target_pos: NFMsg.IVector3[];

        /** ReqAckPlayerMove source_pos. */
        public source_pos: NFMsg.IVector3[];

        /** ReqAckPlayerMove move_direction. */
        public move_direction: NFMsg.IVector3[];

        /**
         * Creates a new ReqAckPlayerMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckPlayerMove instance
         */
        public static create(properties?: NFMsg.IReqAckPlayerMove): NFMsg.ReqAckPlayerMove;

        /**
         * Encodes the specified ReqAckPlayerMove message. Does not implicitly {@link NFMsg.ReqAckPlayerMove.verify|verify} messages.
         * @param message ReqAckPlayerMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckPlayerMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckPlayerMove message, length delimited. Does not implicitly {@link NFMsg.ReqAckPlayerMove.verify|verify} messages.
         * @param message ReqAckPlayerMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckPlayerMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckPlayerMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckPlayerMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckPlayerMove;

        /**
         * Decodes a ReqAckPlayerMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckPlayerMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckPlayerMove;

        /**
         * Verifies a ReqAckPlayerMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckPlayerChat. */
    interface IReqAckPlayerChat {

        /** ReqAckPlayerChat chat_id */
        chat_id?: (NFMsg.IIdent|null);

        /** ReqAckPlayerChat chat_type */
        chat_type?: (NFMsg.ReqAckPlayerChat.EGameChatType|null);

        /** ReqAckPlayerChat chat_info */
        chat_info?: (Uint8Array|null);

        /** ReqAckPlayerChat chat_name */
        chat_name?: (Uint8Array|null);

        /** ReqAckPlayerChat target_id */
        target_id?: (NFMsg.IIdent|null);

        /** ReqAckPlayerChat Container_data */
        Container_data?: (NFMsg.ReqAckPlayerChat.IChatContainer[]|null);
    }

    /** Represents a ReqAckPlayerChat. */
    class ReqAckPlayerChat implements IReqAckPlayerChat {

        /**
         * Constructs a new ReqAckPlayerChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckPlayerChat);

        /** ReqAckPlayerChat chat_id. */
        public chat_id?: (NFMsg.IIdent|null);

        /** ReqAckPlayerChat chat_type. */
        public chat_type: NFMsg.ReqAckPlayerChat.EGameChatType;

        /** ReqAckPlayerChat chat_info. */
        public chat_info: Uint8Array;

        /** ReqAckPlayerChat chat_name. */
        public chat_name: Uint8Array;

        /** ReqAckPlayerChat target_id. */
        public target_id?: (NFMsg.IIdent|null);

        /** ReqAckPlayerChat Container_data. */
        public Container_data: NFMsg.ReqAckPlayerChat.IChatContainer[];

        /**
         * Creates a new ReqAckPlayerChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckPlayerChat instance
         */
        public static create(properties?: NFMsg.IReqAckPlayerChat): NFMsg.ReqAckPlayerChat;

        /**
         * Encodes the specified ReqAckPlayerChat message. Does not implicitly {@link NFMsg.ReqAckPlayerChat.verify|verify} messages.
         * @param message ReqAckPlayerChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckPlayerChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckPlayerChat message, length delimited. Does not implicitly {@link NFMsg.ReqAckPlayerChat.verify|verify} messages.
         * @param message ReqAckPlayerChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckPlayerChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckPlayerChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckPlayerChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckPlayerChat;

        /**
         * Decodes a ReqAckPlayerChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckPlayerChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckPlayerChat;

        /**
         * Verifies a ReqAckPlayerChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqAckPlayerChat {

        /** EGameChatType enum. */
        enum EGameChatType {
            EGCT_GUILD = 0,
            EGCT_PRIVATE = 1,
            EGCT_TEAM = 2,
            EGCT_WORLD = 3
        }

        /** Properties of a ChatContainer. */
        interface IChatContainer {

            /** ChatContainer ConTainerType */
            ConTainerType?: (number|null);

            /** ChatContainer data_info */
            data_info?: (Uint8Array|null);
        }

        /** Represents a ChatContainer. */
        class ChatContainer implements IChatContainer {

            /**
             * Constructs a new ChatContainer.
             * @param [properties] Properties to set
             */
            constructor(properties?: NFMsg.ReqAckPlayerChat.IChatContainer);

            /** ChatContainer ConTainerType. */
            public ConTainerType: number;

            /** ChatContainer data_info. */
            public data_info: Uint8Array;

            /**
             * Creates a new ChatContainer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatContainer instance
             */
            public static create(properties?: NFMsg.ReqAckPlayerChat.IChatContainer): NFMsg.ReqAckPlayerChat.ChatContainer;

            /**
             * Encodes the specified ChatContainer message. Does not implicitly {@link NFMsg.ReqAckPlayerChat.ChatContainer.verify|verify} messages.
             * @param message ChatContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NFMsg.ReqAckPlayerChat.IChatContainer, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ChatContainer message, length delimited. Does not implicitly {@link NFMsg.ReqAckPlayerChat.ChatContainer.verify|verify} messages.
             * @param message ChatContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: NFMsg.ReqAckPlayerChat.IChatContainer, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ChatContainer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckPlayerChat.ChatContainer;

            /**
             * Decodes a ChatContainer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckPlayerChat.ChatContainer;

            /**
             * Verifies a ChatContainer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ChatContainer {

            /** ContainerType enum. */
            enum ContainerType {
                EGCT_UNKNOW = 0,
                EGCT_ITEM = 1
            }
        }
    }

    /** Properties of an EffectData. */
    interface IEffectData {

        /** EffectData effect_ident */
        effect_ident?: (NFMsg.IIdent|null);

        /** EffectData effect_value */
        effect_value?: (number|null);

        /** EffectData effect_rlt */
        effect_rlt?: (NFMsg.EffectData.EResultType|null);
    }

    /** Represents an EffectData. */
    class EffectData implements IEffectData {

        /**
         * Constructs a new EffectData.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IEffectData);

        /** EffectData effect_ident. */
        public effect_ident?: (NFMsg.IIdent|null);

        /** EffectData effect_value. */
        public effect_value: number;

        /** EffectData effect_rlt. */
        public effect_rlt: NFMsg.EffectData.EResultType;

        /**
         * Creates a new EffectData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EffectData instance
         */
        public static create(properties?: NFMsg.IEffectData): NFMsg.EffectData;

        /**
         * Encodes the specified EffectData message. Does not implicitly {@link NFMsg.EffectData.verify|verify} messages.
         * @param message EffectData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IEffectData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EffectData message, length delimited. Does not implicitly {@link NFMsg.EffectData.verify|verify} messages.
         * @param message EffectData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IEffectData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EffectData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EffectData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.EffectData;

        /**
         * Decodes an EffectData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EffectData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.EffectData;

        /**
         * Verifies an EffectData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace EffectData {

        /** EResultType enum. */
        enum EResultType {
            EET_FAIL = 0,
            EET_SUCCESS = 1,
            EET_REFUSE = 2,
            EET_MISS = 3,
            EET_CRIT = 4
        }
    }

    /** Properties of a ReqAckUseSkill. */
    interface IReqAckUseSkill {

        /** ReqAckUseSkill user */
        user?: (NFMsg.IIdent|null);

        /** ReqAckUseSkill skill_id */
        skill_id?: (Uint8Array|null);

        /** ReqAckUseSkill use_index */
        use_index?: (number|null);

        /** ReqAckUseSkill effect_data */
        effect_data?: (NFMsg.IEffectData[]|null);
    }

    /** Represents a ReqAckUseSkill. */
    class ReqAckUseSkill implements IReqAckUseSkill {

        /**
         * Constructs a new ReqAckUseSkill.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckUseSkill);

        /** ReqAckUseSkill user. */
        public user?: (NFMsg.IIdent|null);

        /** ReqAckUseSkill skill_id. */
        public skill_id: Uint8Array;

        /** ReqAckUseSkill use_index. */
        public use_index: number;

        /** ReqAckUseSkill effect_data. */
        public effect_data: NFMsg.IEffectData[];

        /**
         * Creates a new ReqAckUseSkill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckUseSkill instance
         */
        public static create(properties?: NFMsg.IReqAckUseSkill): NFMsg.ReqAckUseSkill;

        /**
         * Encodes the specified ReqAckUseSkill message. Does not implicitly {@link NFMsg.ReqAckUseSkill.verify|verify} messages.
         * @param message ReqAckUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckUseSkill, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckUseSkill message, length delimited. Does not implicitly {@link NFMsg.ReqAckUseSkill.verify|verify} messages.
         * @param message ReqAckUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckUseSkill, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckUseSkill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckUseSkill;

        /**
         * Decodes a ReqAckUseSkill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckUseSkill;

        /**
         * Verifies a ReqAckUseSkill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckUseItem. */
    interface IReqAckUseItem {

        /** ReqAckUseItem user */
        user?: (NFMsg.IIdent|null);

        /** ReqAckUseItem item_guid */
        item_guid?: (NFMsg.IIdent|null);

        /** ReqAckUseItem effect_data */
        effect_data?: (NFMsg.IEffectData[]|null);

        /** ReqAckUseItem item */
        item?: (NFMsg.IItemStruct|null);

        /** ReqAckUseItem targetid */
        targetid?: (NFMsg.IIdent|null);

        /** ReqAckUseItem position */
        position?: (NFMsg.IVector3|null);
    }

    /** Represents a ReqAckUseItem. */
    class ReqAckUseItem implements IReqAckUseItem {

        /**
         * Constructs a new ReqAckUseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckUseItem);

        /** ReqAckUseItem user. */
        public user?: (NFMsg.IIdent|null);

        /** ReqAckUseItem item_guid. */
        public item_guid?: (NFMsg.IIdent|null);

        /** ReqAckUseItem effect_data. */
        public effect_data: NFMsg.IEffectData[];

        /** ReqAckUseItem item. */
        public item?: (NFMsg.IItemStruct|null);

        /** ReqAckUseItem targetid. */
        public targetid?: (NFMsg.IIdent|null);

        /** ReqAckUseItem position. */
        public position?: (NFMsg.IVector3|null);

        /**
         * Creates a new ReqAckUseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckUseItem instance
         */
        public static create(properties?: NFMsg.IReqAckUseItem): NFMsg.ReqAckUseItem;

        /**
         * Encodes the specified ReqAckUseItem message. Does not implicitly {@link NFMsg.ReqAckUseItem.verify|verify} messages.
         * @param message ReqAckUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckUseItem message, length delimited. Does not implicitly {@link NFMsg.ReqAckUseItem.verify|verify} messages.
         * @param message ReqAckUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckUseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckUseItem;

        /**
         * Decodes a ReqAckUseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckUseItem;

        /**
         * Verifies a ReqAckUseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckSwapScene. */
    interface IReqAckSwapScene {

        /** ReqAckSwapScene transfer_type */
        transfer_type?: (NFMsg.ReqAckSwapScene.EGameSwapType|null);

        /** ReqAckSwapScene scene_id */
        scene_id?: (number|null);

        /** ReqAckSwapScene line_id */
        line_id?: (number|null);

        /** ReqAckSwapScene x */
        x?: (number|null);

        /** ReqAckSwapScene y */
        y?: (number|null);

        /** ReqAckSwapScene z */
        z?: (number|null);

        /** ReqAckSwapScene data */
        data?: (Uint8Array|null);
    }

    /** Represents a ReqAckSwapScene. */
    class ReqAckSwapScene implements IReqAckSwapScene {

        /**
         * Constructs a new ReqAckSwapScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckSwapScene);

        /** ReqAckSwapScene transfer_type. */
        public transfer_type: NFMsg.ReqAckSwapScene.EGameSwapType;

        /** ReqAckSwapScene scene_id. */
        public scene_id: number;

        /** ReqAckSwapScene line_id. */
        public line_id: number;

        /** ReqAckSwapScene x. */
        public x: number;

        /** ReqAckSwapScene y. */
        public y: number;

        /** ReqAckSwapScene z. */
        public z: number;

        /** ReqAckSwapScene data. */
        public data: Uint8Array;

        /**
         * Creates a new ReqAckSwapScene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckSwapScene instance
         */
        public static create(properties?: NFMsg.IReqAckSwapScene): NFMsg.ReqAckSwapScene;

        /**
         * Encodes the specified ReqAckSwapScene message. Does not implicitly {@link NFMsg.ReqAckSwapScene.verify|verify} messages.
         * @param message ReqAckSwapScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckSwapScene, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckSwapScene message, length delimited. Does not implicitly {@link NFMsg.ReqAckSwapScene.verify|verify} messages.
         * @param message ReqAckSwapScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckSwapScene, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckSwapScene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckSwapScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckSwapScene;

        /**
         * Decodes a ReqAckSwapScene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckSwapScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckSwapScene;

        /**
         * Verifies a ReqAckSwapScene message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqAckSwapScene {

        /** EGameSwapType enum. */
        enum EGameSwapType {
            EGST_NARMAL = 0,
            EGST_CLONE = 1,
            EGST_ARENA = 2,
            EGST_MIRROR = 3
        }
    }

    /** Properties of a ReqAckHomeScene. */
    interface IReqAckHomeScene {

        /** ReqAckHomeScene data */
        data?: (Uint8Array|null);
    }

    /** Represents a ReqAckHomeScene. */
    class ReqAckHomeScene implements IReqAckHomeScene {

        /**
         * Constructs a new ReqAckHomeScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckHomeScene);

        /** ReqAckHomeScene data. */
        public data: Uint8Array;

        /**
         * Creates a new ReqAckHomeScene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckHomeScene instance
         */
        public static create(properties?: NFMsg.IReqAckHomeScene): NFMsg.ReqAckHomeScene;

        /**
         * Encodes the specified ReqAckHomeScene message. Does not implicitly {@link NFMsg.ReqAckHomeScene.verify|verify} messages.
         * @param message ReqAckHomeScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckHomeScene, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckHomeScene message, length delimited. Does not implicitly {@link NFMsg.ReqAckHomeScene.verify|verify} messages.
         * @param message ReqAckHomeScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckHomeScene, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckHomeScene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckHomeScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckHomeScene;

        /**
         * Decodes a ReqAckHomeScene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckHomeScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckHomeScene;

        /**
         * Verifies a ReqAckHomeScene message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ItemStruct. */
    interface IItemStruct {

        /** ItemStruct item_id */
        item_id?: (Uint8Array|null);

        /** ItemStruct item_count */
        item_count?: (number|null);
    }

    /** Represents an ItemStruct. */
    class ItemStruct implements IItemStruct {

        /**
         * Constructs a new ItemStruct.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IItemStruct);

        /** ItemStruct item_id. */
        public item_id: Uint8Array;

        /** ItemStruct item_count. */
        public item_count: number;

        /**
         * Creates a new ItemStruct instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemStruct instance
         */
        public static create(properties?: NFMsg.IItemStruct): NFMsg.ItemStruct;

        /**
         * Encodes the specified ItemStruct message. Does not implicitly {@link NFMsg.ItemStruct.verify|verify} messages.
         * @param message ItemStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IItemStruct, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemStruct message, length delimited. Does not implicitly {@link NFMsg.ItemStruct.verify|verify} messages.
         * @param message ItemStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IItemStruct, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemStruct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ItemStruct;

        /**
         * Decodes an ItemStruct message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ItemStruct;

        /**
         * Verifies an ItemStruct message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CurrencyStruct. */
    interface ICurrencyStruct {

        /** CurrencyStruct currency_type */
        currency_type?: (number|null);

        /** CurrencyStruct currency_count */
        currency_count?: (number|null);
    }

    /** Represents a CurrencyStruct. */
    class CurrencyStruct implements ICurrencyStruct {

        /**
         * Constructs a new CurrencyStruct.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.ICurrencyStruct);

        /** CurrencyStruct currency_type. */
        public currency_type: number;

        /** CurrencyStruct currency_count. */
        public currency_count: number;

        /**
         * Creates a new CurrencyStruct instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyStruct instance
         */
        public static create(properties?: NFMsg.ICurrencyStruct): NFMsg.CurrencyStruct;

        /**
         * Encodes the specified CurrencyStruct message. Does not implicitly {@link NFMsg.CurrencyStruct.verify|verify} messages.
         * @param message CurrencyStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.ICurrencyStruct, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CurrencyStruct message, length delimited. Does not implicitly {@link NFMsg.CurrencyStruct.verify|verify} messages.
         * @param message CurrencyStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.ICurrencyStruct, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CurrencyStruct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.CurrencyStruct;

        /**
         * Decodes a CurrencyStruct message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.CurrencyStruct;

        /**
         * Verifies a CurrencyStruct message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckStartBattle. */
    interface IReqAckStartBattle {

        /** ReqAckStartBattle gold */
        gold?: (number|null);

        /** ReqAckStartBattle diamond */
        diamond?: (number|null);
    }

    /** Represents a ReqAckStartBattle. */
    class ReqAckStartBattle implements IReqAckStartBattle {

        /**
         * Constructs a new ReqAckStartBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckStartBattle);

        /** ReqAckStartBattle gold. */
        public gold: number;

        /** ReqAckStartBattle diamond. */
        public diamond: number;

        /**
         * Creates a new ReqAckStartBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckStartBattle instance
         */
        public static create(properties?: NFMsg.IReqAckStartBattle): NFMsg.ReqAckStartBattle;

        /**
         * Encodes the specified ReqAckStartBattle message. Does not implicitly {@link NFMsg.ReqAckStartBattle.verify|verify} messages.
         * @param message ReqAckStartBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckStartBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckStartBattle message, length delimited. Does not implicitly {@link NFMsg.ReqAckStartBattle.verify|verify} messages.
         * @param message ReqAckStartBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckStartBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckStartBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckStartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckStartBattle;

        /**
         * Decodes a ReqAckStartBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckStartBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckStartBattle;

        /**
         * Verifies a ReqAckStartBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqEndBattle. */
    interface IReqEndBattle {
    }

    /** Represents a ReqEndBattle. */
    class ReqEndBattle implements IReqEndBattle {

        /**
         * Constructs a new ReqEndBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqEndBattle);

        /**
         * Creates a new ReqEndBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEndBattle instance
         */
        public static create(properties?: NFMsg.IReqEndBattle): NFMsg.ReqEndBattle;

        /**
         * Encodes the specified ReqEndBattle message. Does not implicitly {@link NFMsg.ReqEndBattle.verify|verify} messages.
         * @param message ReqEndBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqEndBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqEndBattle message, length delimited. Does not implicitly {@link NFMsg.ReqEndBattle.verify|verify} messages.
         * @param message ReqEndBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqEndBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEndBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEndBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqEndBattle;

        /**
         * Decodes a ReqEndBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEndBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqEndBattle;

        /**
         * Verifies a ReqEndBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckRelive. */
    interface IReqAckRelive {

        /** ReqAckRelive diamond */
        diamond?: (number|null);
    }

    /** Represents a ReqAckRelive. */
    class ReqAckRelive implements IReqAckRelive {

        /**
         * Constructs a new ReqAckRelive.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckRelive);

        /** ReqAckRelive diamond. */
        public diamond: number;

        /**
         * Creates a new ReqAckRelive instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckRelive instance
         */
        public static create(properties?: NFMsg.IReqAckRelive): NFMsg.ReqAckRelive;

        /**
         * Encodes the specified ReqAckRelive message. Does not implicitly {@link NFMsg.ReqAckRelive.verify|verify} messages.
         * @param message ReqAckRelive message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckRelive, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckRelive message, length delimited. Does not implicitly {@link NFMsg.ReqAckRelive.verify|verify} messages.
         * @param message ReqAckRelive message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckRelive, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckRelive message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckRelive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckRelive;

        /**
         * Decodes a ReqAckRelive message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckRelive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckRelive;

        /**
         * Verifies a ReqAckRelive message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckEndBattle. */
    interface IAckEndBattle {

        /** AckEndBattle win */
        win?: (number|null);

        /** AckEndBattle star */
        star?: (number|null);

        /** AckEndBattle gold */
        gold?: (number|null);

        /** AckEndBattle exp */
        exp?: (number|null);

        /** AckEndBattle diamond */
        diamond?: (number|null);

        /** AckEndBattle item_list */
        item_list?: (NFMsg.IItemStruct[]|null);
    }

    /** Represents an AckEndBattle. */
    class AckEndBattle implements IAckEndBattle {

        /**
         * Constructs a new AckEndBattle.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckEndBattle);

        /** AckEndBattle win. */
        public win: number;

        /** AckEndBattle star. */
        public star: number;

        /** AckEndBattle gold. */
        public gold: number;

        /** AckEndBattle exp. */
        public exp: number;

        /** AckEndBattle diamond. */
        public diamond: number;

        /** AckEndBattle item_list. */
        public item_list: NFMsg.IItemStruct[];

        /**
         * Creates a new AckEndBattle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckEndBattle instance
         */
        public static create(properties?: NFMsg.IAckEndBattle): NFMsg.AckEndBattle;

        /**
         * Encodes the specified AckEndBattle message. Does not implicitly {@link NFMsg.AckEndBattle.verify|verify} messages.
         * @param message AckEndBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckEndBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckEndBattle message, length delimited. Does not implicitly {@link NFMsg.AckEndBattle.verify|verify} messages.
         * @param message AckEndBattle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckEndBattle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckEndBattle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckEndBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckEndBattle;

        /**
         * Decodes an AckEndBattle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckEndBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckEndBattle;

        /**
         * Verifies an AckEndBattle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqPickDropItem. */
    interface IReqPickDropItem {

        /** ReqPickDropItem item_guid */
        item_guid?: (NFMsg.IIdent|null);
    }

    /** Represents a ReqPickDropItem. */
    class ReqPickDropItem implements IReqPickDropItem {

        /**
         * Constructs a new ReqPickDropItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqPickDropItem);

        /** ReqPickDropItem item_guid. */
        public item_guid?: (NFMsg.IIdent|null);

        /**
         * Creates a new ReqPickDropItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPickDropItem instance
         */
        public static create(properties?: NFMsg.IReqPickDropItem): NFMsg.ReqPickDropItem;

        /**
         * Encodes the specified ReqPickDropItem message. Does not implicitly {@link NFMsg.ReqPickDropItem.verify|verify} messages.
         * @param message ReqPickDropItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqPickDropItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqPickDropItem message, length delimited. Does not implicitly {@link NFMsg.ReqPickDropItem.verify|verify} messages.
         * @param message ReqPickDropItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqPickDropItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPickDropItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPickDropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqPickDropItem;

        /**
         * Decodes a ReqPickDropItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPickDropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqPickDropItem;

        /**
         * Verifies a ReqPickDropItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAcceptTask. */
    interface IReqAcceptTask {

        /** ReqAcceptTask task_id */
        task_id?: (Uint8Array|null);
    }

    /** Represents a ReqAcceptTask. */
    class ReqAcceptTask implements IReqAcceptTask {

        /**
         * Constructs a new ReqAcceptTask.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAcceptTask);

        /** ReqAcceptTask task_id. */
        public task_id: Uint8Array;

        /**
         * Creates a new ReqAcceptTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAcceptTask instance
         */
        public static create(properties?: NFMsg.IReqAcceptTask): NFMsg.ReqAcceptTask;

        /**
         * Encodes the specified ReqAcceptTask message. Does not implicitly {@link NFMsg.ReqAcceptTask.verify|verify} messages.
         * @param message ReqAcceptTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAcceptTask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAcceptTask message, length delimited. Does not implicitly {@link NFMsg.ReqAcceptTask.verify|verify} messages.
         * @param message ReqAcceptTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAcceptTask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAcceptTask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAcceptTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAcceptTask;

        /**
         * Decodes a ReqAcceptTask message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAcceptTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAcceptTask;

        /**
         * Verifies a ReqAcceptTask message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqCompeleteTask. */
    interface IReqCompeleteTask {

        /** ReqCompeleteTask task_id */
        task_id?: (Uint8Array|null);
    }

    /** Represents a ReqCompeleteTask. */
    class ReqCompeleteTask implements IReqCompeleteTask {

        /**
         * Constructs a new ReqCompeleteTask.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqCompeleteTask);

        /** ReqCompeleteTask task_id. */
        public task_id: Uint8Array;

        /**
         * Creates a new ReqCompeleteTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqCompeleteTask instance
         */
        public static create(properties?: NFMsg.IReqCompeleteTask): NFMsg.ReqCompeleteTask;

        /**
         * Encodes the specified ReqCompeleteTask message. Does not implicitly {@link NFMsg.ReqCompeleteTask.verify|verify} messages.
         * @param message ReqCompeleteTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqCompeleteTask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqCompeleteTask message, length delimited. Does not implicitly {@link NFMsg.ReqCompeleteTask.verify|verify} messages.
         * @param message ReqCompeleteTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqCompeleteTask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqCompeleteTask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqCompeleteTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqCompeleteTask;

        /**
         * Decodes a ReqCompeleteTask message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqCompeleteTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqCompeleteTask;

        /**
         * Verifies a ReqCompeleteTask message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckJoinActivity. */
    interface IReqAckJoinActivity {

        /** ReqAckJoinActivity activity_type */
        activity_type?: (NFMsg.ReqAckJoinActivity.EGameActivityType|null);

        /** ReqAckJoinActivity sub_activity_type */
        sub_activity_type?: (NFMsg.ReqAckJoinActivity.EGameActivitySubType|null);
    }

    /** Represents a ReqAckJoinActivity. */
    class ReqAckJoinActivity implements IReqAckJoinActivity {

        /**
         * Constructs a new ReqAckJoinActivity.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckJoinActivity);

        /** ReqAckJoinActivity activity_type. */
        public activity_type: NFMsg.ReqAckJoinActivity.EGameActivityType;

        /** ReqAckJoinActivity sub_activity_type. */
        public sub_activity_type: NFMsg.ReqAckJoinActivity.EGameActivitySubType;

        /**
         * Creates a new ReqAckJoinActivity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckJoinActivity instance
         */
        public static create(properties?: NFMsg.IReqAckJoinActivity): NFMsg.ReqAckJoinActivity;

        /**
         * Encodes the specified ReqAckJoinActivity message. Does not implicitly {@link NFMsg.ReqAckJoinActivity.verify|verify} messages.
         * @param message ReqAckJoinActivity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckJoinActivity, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckJoinActivity message, length delimited. Does not implicitly {@link NFMsg.ReqAckJoinActivity.verify|verify} messages.
         * @param message ReqAckJoinActivity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckJoinActivity, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckJoinActivity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckJoinActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckJoinActivity;

        /**
         * Decodes a ReqAckJoinActivity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckJoinActivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckJoinActivity;

        /**
         * Verifies a ReqAckJoinActivity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqAckJoinActivity {

        /** EGameActivityType enum. */
        enum EGameActivityType {
            EGAT_PVP = 0
        }

        /** EGameActivitySubType enum. */
        enum EGameActivitySubType {
            EGAT_NORMAL = 0
        }
    }

    /** Properties of a ReqAckCreateGuild. */
    interface IReqAckCreateGuild {

        /** ReqAckCreateGuild guild_id */
        guild_id?: (NFMsg.IIdent|null);

        /** ReqAckCreateGuild guild_name */
        guild_name?: (Uint8Array|null);
    }

    /** Represents a ReqAckCreateGuild. */
    class ReqAckCreateGuild implements IReqAckCreateGuild {

        /**
         * Constructs a new ReqAckCreateGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckCreateGuild);

        /** ReqAckCreateGuild guild_id. */
        public guild_id?: (NFMsg.IIdent|null);

        /** ReqAckCreateGuild guild_name. */
        public guild_name: Uint8Array;

        /**
         * Creates a new ReqAckCreateGuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckCreateGuild instance
         */
        public static create(properties?: NFMsg.IReqAckCreateGuild): NFMsg.ReqAckCreateGuild;

        /**
         * Encodes the specified ReqAckCreateGuild message. Does not implicitly {@link NFMsg.ReqAckCreateGuild.verify|verify} messages.
         * @param message ReqAckCreateGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckCreateGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckCreateGuild message, length delimited. Does not implicitly {@link NFMsg.ReqAckCreateGuild.verify|verify} messages.
         * @param message ReqAckCreateGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckCreateGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckCreateGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckCreateGuild;

        /**
         * Decodes a ReqAckCreateGuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckCreateGuild;

        /**
         * Verifies a ReqAckCreateGuild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSearchGuild. */
    interface IReqSearchGuild {

        /** ReqSearchGuild guild_name */
        guild_name?: (Uint8Array|null);
    }

    /** Represents a ReqSearchGuild. */
    class ReqSearchGuild implements IReqSearchGuild {

        /**
         * Constructs a new ReqSearchGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqSearchGuild);

        /** ReqSearchGuild guild_name. */
        public guild_name: Uint8Array;

        /**
         * Creates a new ReqSearchGuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSearchGuild instance
         */
        public static create(properties?: NFMsg.IReqSearchGuild): NFMsg.ReqSearchGuild;

        /**
         * Encodes the specified ReqSearchGuild message. Does not implicitly {@link NFMsg.ReqSearchGuild.verify|verify} messages.
         * @param message ReqSearchGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqSearchGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSearchGuild message, length delimited. Does not implicitly {@link NFMsg.ReqSearchGuild.verify|verify} messages.
         * @param message ReqSearchGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqSearchGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSearchGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSearchGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqSearchGuild;

        /**
         * Decodes a ReqSearchGuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSearchGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqSearchGuild;

        /**
         * Verifies a ReqSearchGuild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckSearchGuild. */
    interface IAckSearchGuild {

        /** AckSearchGuild guild_list */
        guild_list?: (NFMsg.AckSearchGuild.ISearchGuildObject[]|null);
    }

    /** Represents an AckSearchGuild. */
    class AckSearchGuild implements IAckSearchGuild {

        /**
         * Constructs a new AckSearchGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckSearchGuild);

        /** AckSearchGuild guild_list. */
        public guild_list: NFMsg.AckSearchGuild.ISearchGuildObject[];

        /**
         * Creates a new AckSearchGuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckSearchGuild instance
         */
        public static create(properties?: NFMsg.IAckSearchGuild): NFMsg.AckSearchGuild;

        /**
         * Encodes the specified AckSearchGuild message. Does not implicitly {@link NFMsg.AckSearchGuild.verify|verify} messages.
         * @param message AckSearchGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckSearchGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckSearchGuild message, length delimited. Does not implicitly {@link NFMsg.AckSearchGuild.verify|verify} messages.
         * @param message AckSearchGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckSearchGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckSearchGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckSearchGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckSearchGuild;

        /**
         * Decodes an AckSearchGuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckSearchGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckSearchGuild;

        /**
         * Verifies an AckSearchGuild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace AckSearchGuild {

        /** Properties of a SearchGuildObject. */
        interface ISearchGuildObject {

            /** SearchGuildObject guild_ID */
            guild_ID?: (NFMsg.IIdent|null);

            /** SearchGuildObject guild_name */
            guild_name?: (Uint8Array|null);

            /** SearchGuildObject guild_icon */
            guild_icon?: (Uint8Array|null);

            /** SearchGuildObject guild_member_count */
            guild_member_count?: (number|null);

            /** SearchGuildObject guild_member_max_count */
            guild_member_max_count?: (number|null);

            /** SearchGuildObject guild_honor */
            guild_honor?: (number|null);

            /** SearchGuildObject guild_rank */
            guild_rank?: (number|null);
        }

        /** Represents a SearchGuildObject. */
        class SearchGuildObject implements ISearchGuildObject {

            /**
             * Constructs a new SearchGuildObject.
             * @param [properties] Properties to set
             */
            constructor(properties?: NFMsg.AckSearchGuild.ISearchGuildObject);

            /** SearchGuildObject guild_ID. */
            public guild_ID?: (NFMsg.IIdent|null);

            /** SearchGuildObject guild_name. */
            public guild_name: Uint8Array;

            /** SearchGuildObject guild_icon. */
            public guild_icon: Uint8Array;

            /** SearchGuildObject guild_member_count. */
            public guild_member_count: number;

            /** SearchGuildObject guild_member_max_count. */
            public guild_member_max_count: number;

            /** SearchGuildObject guild_honor. */
            public guild_honor: number;

            /** SearchGuildObject guild_rank. */
            public guild_rank: number;

            /**
             * Creates a new SearchGuildObject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchGuildObject instance
             */
            public static create(properties?: NFMsg.AckSearchGuild.ISearchGuildObject): NFMsg.AckSearchGuild.SearchGuildObject;

            /**
             * Encodes the specified SearchGuildObject message. Does not implicitly {@link NFMsg.AckSearchGuild.SearchGuildObject.verify|verify} messages.
             * @param message SearchGuildObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NFMsg.AckSearchGuild.ISearchGuildObject, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SearchGuildObject message, length delimited. Does not implicitly {@link NFMsg.AckSearchGuild.SearchGuildObject.verify|verify} messages.
             * @param message SearchGuildObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: NFMsg.AckSearchGuild.ISearchGuildObject, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SearchGuildObject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchGuildObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckSearchGuild.SearchGuildObject;

            /**
             * Decodes a SearchGuildObject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchGuildObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckSearchGuild.SearchGuildObject;

            /**
             * Verifies a SearchGuildObject message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Properties of a ReqAckJoinGuild. */
    interface IReqAckJoinGuild {

        /** ReqAckJoinGuild guild_id */
        guild_id?: (NFMsg.IIdent|null);

        /** ReqAckJoinGuild guild_name */
        guild_name?: (Uint8Array|null);
    }

    /** Represents a ReqAckJoinGuild. */
    class ReqAckJoinGuild implements IReqAckJoinGuild {

        /**
         * Constructs a new ReqAckJoinGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckJoinGuild);

        /** ReqAckJoinGuild guild_id. */
        public guild_id?: (NFMsg.IIdent|null);

        /** ReqAckJoinGuild guild_name. */
        public guild_name: Uint8Array;

        /**
         * Creates a new ReqAckJoinGuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckJoinGuild instance
         */
        public static create(properties?: NFMsg.IReqAckJoinGuild): NFMsg.ReqAckJoinGuild;

        /**
         * Encodes the specified ReqAckJoinGuild message. Does not implicitly {@link NFMsg.ReqAckJoinGuild.verify|verify} messages.
         * @param message ReqAckJoinGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckJoinGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckJoinGuild message, length delimited. Does not implicitly {@link NFMsg.ReqAckJoinGuild.verify|verify} messages.
         * @param message ReqAckJoinGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckJoinGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckJoinGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckJoinGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckJoinGuild;

        /**
         * Decodes a ReqAckJoinGuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckJoinGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckJoinGuild;

        /**
         * Verifies a ReqAckJoinGuild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckLeaveGuild. */
    interface IReqAckLeaveGuild {

        /** ReqAckLeaveGuild guild_id */
        guild_id?: (NFMsg.IIdent|null);

        /** ReqAckLeaveGuild guild_name */
        guild_name?: (Uint8Array|null);
    }

    /** Represents a ReqAckLeaveGuild. */
    class ReqAckLeaveGuild implements IReqAckLeaveGuild {

        /**
         * Constructs a new ReqAckLeaveGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckLeaveGuild);

        /** ReqAckLeaveGuild guild_id. */
        public guild_id?: (NFMsg.IIdent|null);

        /** ReqAckLeaveGuild guild_name. */
        public guild_name: Uint8Array;

        /**
         * Creates a new ReqAckLeaveGuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckLeaveGuild instance
         */
        public static create(properties?: NFMsg.IReqAckLeaveGuild): NFMsg.ReqAckLeaveGuild;

        /**
         * Encodes the specified ReqAckLeaveGuild message. Does not implicitly {@link NFMsg.ReqAckLeaveGuild.verify|verify} messages.
         * @param message ReqAckLeaveGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckLeaveGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckLeaveGuild message, length delimited. Does not implicitly {@link NFMsg.ReqAckLeaveGuild.verify|verify} messages.
         * @param message ReqAckLeaveGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckLeaveGuild, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckLeaveGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckLeaveGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckLeaveGuild;

        /**
         * Decodes a ReqAckLeaveGuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckLeaveGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckLeaveGuild;

        /**
         * Verifies a ReqAckLeaveGuild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAckOprGuildMember. */
    interface IReqAckOprGuildMember {

        /** ReqAckOprGuildMember guild_id */
        guild_id?: (NFMsg.IIdent|null);

        /** ReqAckOprGuildMember member_id */
        member_id?: (NFMsg.IIdent|null);

        /** ReqAckOprGuildMember type */
        type?: (NFMsg.ReqAckOprGuildMember.EGGuildMemberOprType|null);
    }

    /** Represents a ReqAckOprGuildMember. */
    class ReqAckOprGuildMember implements IReqAckOprGuildMember {

        /**
         * Constructs a new ReqAckOprGuildMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAckOprGuildMember);

        /** ReqAckOprGuildMember guild_id. */
        public guild_id?: (NFMsg.IIdent|null);

        /** ReqAckOprGuildMember member_id. */
        public member_id?: (NFMsg.IIdent|null);

        /** ReqAckOprGuildMember type. */
        public type: NFMsg.ReqAckOprGuildMember.EGGuildMemberOprType;

        /**
         * Creates a new ReqAckOprGuildMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAckOprGuildMember instance
         */
        public static create(properties?: NFMsg.IReqAckOprGuildMember): NFMsg.ReqAckOprGuildMember;

        /**
         * Encodes the specified ReqAckOprGuildMember message. Does not implicitly {@link NFMsg.ReqAckOprGuildMember.verify|verify} messages.
         * @param message ReqAckOprGuildMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAckOprGuildMember, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAckOprGuildMember message, length delimited. Does not implicitly {@link NFMsg.ReqAckOprGuildMember.verify|verify} messages.
         * @param message ReqAckOprGuildMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAckOprGuildMember, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAckOprGuildMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAckOprGuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAckOprGuildMember;

        /**
         * Decodes a ReqAckOprGuildMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAckOprGuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAckOprGuildMember;

        /**
         * Verifies a ReqAckOprGuildMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqAckOprGuildMember {

        /** EGGuildMemberOprType enum. */
        enum EGGuildMemberOprType {
            EGAT_DOWN = 0,
            EGAT_UP = 1,
            EGAT_KICK = 2
        }
    }

    /** Properties of a ReqEnterGuildEctype. */
    interface IReqEnterGuildEctype {

        /** ReqEnterGuildEctype guild_id */
        guild_id?: (NFMsg.IIdent|null);
    }

    /** Represents a ReqEnterGuildEctype. */
    class ReqEnterGuildEctype implements IReqEnterGuildEctype {

        /**
         * Constructs a new ReqEnterGuildEctype.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqEnterGuildEctype);

        /** ReqEnterGuildEctype guild_id. */
        public guild_id?: (NFMsg.IIdent|null);

        /**
         * Creates a new ReqEnterGuildEctype instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGuildEctype instance
         */
        public static create(properties?: NFMsg.IReqEnterGuildEctype): NFMsg.ReqEnterGuildEctype;

        /**
         * Encodes the specified ReqEnterGuildEctype message. Does not implicitly {@link NFMsg.ReqEnterGuildEctype.verify|verify} messages.
         * @param message ReqEnterGuildEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqEnterGuildEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGuildEctype message, length delimited. Does not implicitly {@link NFMsg.ReqEnterGuildEctype.verify|verify} messages.
         * @param message ReqEnterGuildEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqEnterGuildEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEnterGuildEctype message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGuildEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqEnterGuildEctype;

        /**
         * Decodes a ReqEnterGuildEctype message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGuildEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqEnterGuildEctype;

        /**
         * Verifies a ReqEnterGuildEctype message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSetFightHero. */
    interface IReqSetFightHero {

        /** ReqSetFightHero Heroid */
        Heroid?: (NFMsg.IIdent|null);

        /** ReqSetFightHero Set */
        Set?: (number|null);
    }

    /** Represents a ReqSetFightHero. */
    class ReqSetFightHero implements IReqSetFightHero {

        /**
         * Constructs a new ReqSetFightHero.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqSetFightHero);

        /** ReqSetFightHero Heroid. */
        public Heroid?: (NFMsg.IIdent|null);

        /** ReqSetFightHero Set. */
        public Set: number;

        /**
         * Creates a new ReqSetFightHero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSetFightHero instance
         */
        public static create(properties?: NFMsg.IReqSetFightHero): NFMsg.ReqSetFightHero;

        /**
         * Encodes the specified ReqSetFightHero message. Does not implicitly {@link NFMsg.ReqSetFightHero.verify|verify} messages.
         * @param message ReqSetFightHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqSetFightHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSetFightHero message, length delimited. Does not implicitly {@link NFMsg.ReqSetFightHero.verify|verify} messages.
         * @param message ReqSetFightHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqSetFightHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSetFightHero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSetFightHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqSetFightHero;

        /**
         * Decodes a ReqSetFightHero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSetFightHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqSetFightHero;

        /**
         * Verifies a ReqSetFightHero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSwitchFightHero. */
    interface IReqSwitchFightHero {

        /** ReqSwitchFightHero Heroid */
        Heroid?: (NFMsg.IIdent|null);
    }

    /** Represents a ReqSwitchFightHero. */
    class ReqSwitchFightHero implements IReqSwitchFightHero {

        /**
         * Constructs a new ReqSwitchFightHero.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqSwitchFightHero);

        /** ReqSwitchFightHero Heroid. */
        public Heroid?: (NFMsg.IIdent|null);

        /**
         * Creates a new ReqSwitchFightHero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSwitchFightHero instance
         */
        public static create(properties?: NFMsg.IReqSwitchFightHero): NFMsg.ReqSwitchFightHero;

        /**
         * Encodes the specified ReqSwitchFightHero message. Does not implicitly {@link NFMsg.ReqSwitchFightHero.verify|verify} messages.
         * @param message ReqSwitchFightHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqSwitchFightHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSwitchFightHero message, length delimited. Does not implicitly {@link NFMsg.ReqSwitchFightHero.verify|verify} messages.
         * @param message ReqSwitchFightHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqSwitchFightHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSwitchFightHero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSwitchFightHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqSwitchFightHero;

        /**
         * Decodes a ReqSwitchFightHero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSwitchFightHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqSwitchFightHero;

        /**
         * Verifies a ReqSwitchFightHero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqBuyItemFromShop. */
    interface IReqBuyItemFromShop {

        /** ReqBuyItemFromShop itemID */
        itemID?: (Uint8Array|null);

        /** ReqBuyItemFromShop count */
        count?: (number|null);
    }

    /** Represents a ReqBuyItemFromShop. */
    class ReqBuyItemFromShop implements IReqBuyItemFromShop {

        /**
         * Constructs a new ReqBuyItemFromShop.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqBuyItemFromShop);

        /** ReqBuyItemFromShop itemID. */
        public itemID: Uint8Array;

        /** ReqBuyItemFromShop count. */
        public count: number;

        /**
         * Creates a new ReqBuyItemFromShop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqBuyItemFromShop instance
         */
        public static create(properties?: NFMsg.IReqBuyItemFromShop): NFMsg.ReqBuyItemFromShop;

        /**
         * Encodes the specified ReqBuyItemFromShop message. Does not implicitly {@link NFMsg.ReqBuyItemFromShop.verify|verify} messages.
         * @param message ReqBuyItemFromShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqBuyItemFromShop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqBuyItemFromShop message, length delimited. Does not implicitly {@link NFMsg.ReqBuyItemFromShop.verify|verify} messages.
         * @param message ReqBuyItemFromShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqBuyItemFromShop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqBuyItemFromShop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqBuyItemFromShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqBuyItemFromShop;

        /**
         * Decodes a ReqBuyItemFromShop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqBuyItemFromShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqBuyItemFromShop;

        /**
         * Verifies a ReqBuyItemFromShop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAddGambleValue. */
    interface IReqAddGambleValue {

        /** ReqAddGambleValue property */
        property?: (Uint8Array|null);

        /** ReqAddGambleValue number */
        number?: (number|null);
    }

    /** Represents a ReqAddGambleValue. */
    class ReqAddGambleValue implements IReqAddGambleValue {

        /**
         * Constructs a new ReqAddGambleValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqAddGambleValue);

        /** ReqAddGambleValue property. */
        public property: Uint8Array;

        /** ReqAddGambleValue number. */
        public number: number;

        /**
         * Creates a new ReqAddGambleValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAddGambleValue instance
         */
        public static create(properties?: NFMsg.IReqAddGambleValue): NFMsg.ReqAddGambleValue;

        /**
         * Encodes the specified ReqAddGambleValue message. Does not implicitly {@link NFMsg.ReqAddGambleValue.verify|verify} messages.
         * @param message ReqAddGambleValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqAddGambleValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAddGambleValue message, length delimited. Does not implicitly {@link NFMsg.ReqAddGambleValue.verify|verify} messages.
         * @param message ReqAddGambleValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqAddGambleValue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAddGambleValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAddGambleValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqAddGambleValue;

        /**
         * Decodes a ReqAddGambleValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAddGambleValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqAddGambleValue;

        /**
         * Verifies a ReqAddGambleValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqMiningTitle. */
    interface IReqMiningTitle {

        /** ReqMiningTitle x */
        x?: (number|null);

        /** ReqMiningTitle y */
        y?: (number|null);

        /** ReqMiningTitle opr */
        opr?: (number|null);
    }

    /** Represents a ReqMiningTitle. */
    class ReqMiningTitle implements IReqMiningTitle {

        /**
         * Constructs a new ReqMiningTitle.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqMiningTitle);

        /** ReqMiningTitle x. */
        public x: number;

        /** ReqMiningTitle y. */
        public y: number;

        /** ReqMiningTitle opr. */
        public opr: number;

        /**
         * Creates a new ReqMiningTitle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMiningTitle instance
         */
        public static create(properties?: NFMsg.IReqMiningTitle): NFMsg.ReqMiningTitle;

        /**
         * Encodes the specified ReqMiningTitle message. Does not implicitly {@link NFMsg.ReqMiningTitle.verify|verify} messages.
         * @param message ReqMiningTitle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqMiningTitle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMiningTitle message, length delimited. Does not implicitly {@link NFMsg.ReqMiningTitle.verify|verify} messages.
         * @param message ReqMiningTitle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqMiningTitle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMiningTitle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMiningTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqMiningTitle;

        /**
         * Decodes a ReqMiningTitle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMiningTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqMiningTitle;

        /**
         * Verifies a ReqMiningTitle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TileState. */
    interface ITileState {

        /** TileState x */
        x?: (number|null);

        /** TileState y */
        y?: (number|null);

        /** TileState opr */
        opr?: (number|null);
    }

    /** Represents a TileState. */
    class TileState implements ITileState {

        /**
         * Constructs a new TileState.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.ITileState);

        /** TileState x. */
        public x: number;

        /** TileState y. */
        public y: number;

        /** TileState opr. */
        public opr: number;

        /**
         * Creates a new TileState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TileState instance
         */
        public static create(properties?: NFMsg.ITileState): NFMsg.TileState;

        /**
         * Encodes the specified TileState message. Does not implicitly {@link NFMsg.TileState.verify|verify} messages.
         * @param message TileState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.ITileState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TileState message, length delimited. Does not implicitly {@link NFMsg.TileState.verify|verify} messages.
         * @param message TileState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.ITileState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TileState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TileState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.TileState;

        /**
         * Decodes a TileState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TileState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.TileState;

        /**
         * Verifies a TileState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TileBuilding. */
    interface ITileBuilding {

        /** TileBuilding x */
        x?: (number|null);

        /** TileBuilding y */
        y?: (number|null);

        /** TileBuilding configID */
        configID?: (Uint8Array|null);

        /** TileBuilding guid */
        guid?: (NFMsg.IIdent|null);
    }

    /** Represents a TileBuilding. */
    class TileBuilding implements ITileBuilding {

        /**
         * Constructs a new TileBuilding.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.ITileBuilding);

        /** TileBuilding x. */
        public x: number;

        /** TileBuilding y. */
        public y: number;

        /** TileBuilding configID. */
        public configID: Uint8Array;

        /** TileBuilding guid. */
        public guid?: (NFMsg.IIdent|null);

        /**
         * Creates a new TileBuilding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TileBuilding instance
         */
        public static create(properties?: NFMsg.ITileBuilding): NFMsg.TileBuilding;

        /**
         * Encodes the specified TileBuilding message. Does not implicitly {@link NFMsg.TileBuilding.verify|verify} messages.
         * @param message TileBuilding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.ITileBuilding, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TileBuilding message, length delimited. Does not implicitly {@link NFMsg.TileBuilding.verify|verify} messages.
         * @param message TileBuilding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.ITileBuilding, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TileBuilding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TileBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.TileBuilding;

        /**
         * Decodes a TileBuilding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TileBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.TileBuilding;

        /**
         * Verifies a TileBuilding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TileNPC. */
    interface ITileNPC {

        /** TileNPC x */
        x?: (number|null);

        /** TileNPC y */
        y?: (number|null);

        /** TileNPC configID */
        configID?: (Uint8Array|null);

        /** TileNPC guid */
        guid?: (NFMsg.IIdent|null);
    }

    /** Represents a TileNPC. */
    class TileNPC implements ITileNPC {

        /**
         * Constructs a new TileNPC.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.ITileNPC);

        /** TileNPC x. */
        public x: number;

        /** TileNPC y. */
        public y: number;

        /** TileNPC configID. */
        public configID: Uint8Array;

        /** TileNPC guid. */
        public guid?: (NFMsg.IIdent|null);

        /**
         * Creates a new TileNPC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TileNPC instance
         */
        public static create(properties?: NFMsg.ITileNPC): NFMsg.TileNPC;

        /**
         * Encodes the specified TileNPC message. Does not implicitly {@link NFMsg.TileNPC.verify|verify} messages.
         * @param message TileNPC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.ITileNPC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TileNPC message, length delimited. Does not implicitly {@link NFMsg.TileNPC.verify|verify} messages.
         * @param message TileNPC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.ITileNPC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TileNPC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TileNPC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.TileNPC;

        /**
         * Decodes a TileNPC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TileNPC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.TileNPC;

        /**
         * Verifies a TileNPC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckMiningTitle. */
    interface IAckMiningTitle {

        /** AckMiningTitle tile */
        tile?: (NFMsg.ITileState[]|null);

        /** AckMiningTitle building */
        building?: (NFMsg.ITileBuilding[]|null);

        /** AckMiningTitle npc */
        npc?: (NFMsg.ITileNPC[]|null);
    }

    /** Represents an AckMiningTitle. */
    class AckMiningTitle implements IAckMiningTitle {

        /**
         * Constructs a new AckMiningTitle.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckMiningTitle);

        /** AckMiningTitle tile. */
        public tile: NFMsg.ITileState[];

        /** AckMiningTitle building. */
        public building: NFMsg.ITileBuilding[];

        /** AckMiningTitle npc. */
        public npc: NFMsg.ITileNPC[];

        /**
         * Creates a new AckMiningTitle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckMiningTitle instance
         */
        public static create(properties?: NFMsg.IAckMiningTitle): NFMsg.AckMiningTitle;

        /**
         * Encodes the specified AckMiningTitle message. Does not implicitly {@link NFMsg.AckMiningTitle.verify|verify} messages.
         * @param message AckMiningTitle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckMiningTitle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckMiningTitle message, length delimited. Does not implicitly {@link NFMsg.AckMiningTitle.verify|verify} messages.
         * @param message AckMiningTitle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckMiningTitle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckMiningTitle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckMiningTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckMiningTitle;

        /**
         * Decodes an AckMiningTitle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckMiningTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckMiningTitle;

        /**
         * Verifies an AckMiningTitle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSearchOppnent. */
    interface IReqSearchOppnent {

        /** ReqSearchOppnent self_scene */
        self_scene?: (number|null);
    }

    /** Represents a ReqSearchOppnent. */
    class ReqSearchOppnent implements IReqSearchOppnent {

        /**
         * Constructs a new ReqSearchOppnent.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqSearchOppnent);

        /** ReqSearchOppnent self_scene. */
        public self_scene: number;

        /**
         * Creates a new ReqSearchOppnent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSearchOppnent instance
         */
        public static create(properties?: NFMsg.IReqSearchOppnent): NFMsg.ReqSearchOppnent;

        /**
         * Encodes the specified ReqSearchOppnent message. Does not implicitly {@link NFMsg.ReqSearchOppnent.verify|verify} messages.
         * @param message ReqSearchOppnent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqSearchOppnent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSearchOppnent message, length delimited. Does not implicitly {@link NFMsg.ReqSearchOppnent.verify|verify} messages.
         * @param message ReqSearchOppnent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqSearchOppnent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSearchOppnent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSearchOppnent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqSearchOppnent;

        /**
         * Decodes a ReqSearchOppnent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSearchOppnent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqSearchOppnent;

        /**
         * Verifies a ReqSearchOppnent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckSearchOppnent. */
    interface IAckSearchOppnent {

        /** AckSearchOppnent scene_id */
        scene_id?: (number|null);

        /** AckSearchOppnent gold */
        gold?: (number|null);

        /** AckSearchOppnent diamond */
        diamond?: (number|null);

        /** AckSearchOppnent level */
        level?: (number|null);

        /** AckSearchOppnent cup */
        cup?: (number|null);

        /** AckSearchOppnent name */
        name?: (Uint8Array|null);

        /** AckSearchOppnent head */
        head?: (Uint8Array|null);

        /** AckSearchOppnent hero_cnf1 */
        hero_cnf1?: (Uint8Array|null);

        /** AckSearchOppnent hero_star1 */
        hero_star1?: (number|null);

        /** AckSearchOppnent hero_cnf2 */
        hero_cnf2?: (Uint8Array|null);

        /** AckSearchOppnent hero_star2 */
        hero_star2?: (number|null);

        /** AckSearchOppnent hero_cnf3 */
        hero_cnf3?: (Uint8Array|null);

        /** AckSearchOppnent hero_star3 */
        hero_star3?: (number|null);

        /** AckSearchOppnent hero_id1 */
        hero_id1?: (NFMsg.IIdent|null);

        /** AckSearchOppnent hero_id2 */
        hero_id2?: (NFMsg.IIdent|null);

        /** AckSearchOppnent hero_id3 */
        hero_id3?: (NFMsg.IIdent|null);

        /** AckSearchOppnent hero_pos1 */
        hero_pos1?: (NFMsg.IVector3|null);

        /** AckSearchOppnent hero_pos2 */
        hero_pos2?: (NFMsg.IVector3|null);

        /** AckSearchOppnent hero_pos3 */
        hero_pos3?: (NFMsg.IVector3|null);

        /** AckSearchOppnent title */
        title?: (NFMsg.IAckMiningTitle|null);

        /** AckSearchOppnent opponent */
        opponent?: (NFMsg.IIdent|null);
    }

    /** Represents an AckSearchOppnent. */
    class AckSearchOppnent implements IAckSearchOppnent {

        /**
         * Constructs a new AckSearchOppnent.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckSearchOppnent);

        /** AckSearchOppnent scene_id. */
        public scene_id: number;

        /** AckSearchOppnent gold. */
        public gold: number;

        /** AckSearchOppnent diamond. */
        public diamond: number;

        /** AckSearchOppnent level. */
        public level: number;

        /** AckSearchOppnent cup. */
        public cup: number;

        /** AckSearchOppnent name. */
        public name: Uint8Array;

        /** AckSearchOppnent head. */
        public head: Uint8Array;

        /** AckSearchOppnent hero_cnf1. */
        public hero_cnf1: Uint8Array;

        /** AckSearchOppnent hero_star1. */
        public hero_star1: number;

        /** AckSearchOppnent hero_cnf2. */
        public hero_cnf2: Uint8Array;

        /** AckSearchOppnent hero_star2. */
        public hero_star2: number;

        /** AckSearchOppnent hero_cnf3. */
        public hero_cnf3: Uint8Array;

        /** AckSearchOppnent hero_star3. */
        public hero_star3: number;

        /** AckSearchOppnent hero_id1. */
        public hero_id1?: (NFMsg.IIdent|null);

        /** AckSearchOppnent hero_id2. */
        public hero_id2?: (NFMsg.IIdent|null);

        /** AckSearchOppnent hero_id3. */
        public hero_id3?: (NFMsg.IIdent|null);

        /** AckSearchOppnent hero_pos1. */
        public hero_pos1?: (NFMsg.IVector3|null);

        /** AckSearchOppnent hero_pos2. */
        public hero_pos2?: (NFMsg.IVector3|null);

        /** AckSearchOppnent hero_pos3. */
        public hero_pos3?: (NFMsg.IVector3|null);

        /** AckSearchOppnent title. */
        public title?: (NFMsg.IAckMiningTitle|null);

        /** AckSearchOppnent opponent. */
        public opponent?: (NFMsg.IIdent|null);

        /**
         * Creates a new AckSearchOppnent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckSearchOppnent instance
         */
        public static create(properties?: NFMsg.IAckSearchOppnent): NFMsg.AckSearchOppnent;

        /**
         * Encodes the specified AckSearchOppnent message. Does not implicitly {@link NFMsg.AckSearchOppnent.verify|verify} messages.
         * @param message AckSearchOppnent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckSearchOppnent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckSearchOppnent message, length delimited. Does not implicitly {@link NFMsg.AckSearchOppnent.verify|verify} messages.
         * @param message AckSearchOppnent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckSearchOppnent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckSearchOppnent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckSearchOppnent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckSearchOppnent;

        /**
         * Decodes an AckSearchOppnent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckSearchOppnent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckSearchOppnent;

        /**
         * Verifies an AckSearchOppnent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSendMail. */
    interface IReqSendMail {

        /** ReqSendMail reciever */
        reciever?: (NFMsg.IIdent|null);

        /** ReqSendMail item_list */
        item_list?: (NFMsg.IItemStruct[]|null);

        /** ReqSendMail currency_list */
        currency_list?: (NFMsg.ICurrencyStruct[]|null);
    }

    /** Represents a ReqSendMail. */
    class ReqSendMail implements IReqSendMail {

        /**
         * Constructs a new ReqSendMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqSendMail);

        /** ReqSendMail reciever. */
        public reciever?: (NFMsg.IIdent|null);

        /** ReqSendMail item_list. */
        public item_list: NFMsg.IItemStruct[];

        /** ReqSendMail currency_list. */
        public currency_list: NFMsg.ICurrencyStruct[];

        /**
         * Creates a new ReqSendMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSendMail instance
         */
        public static create(properties?: NFMsg.IReqSendMail): NFMsg.ReqSendMail;

        /**
         * Encodes the specified ReqSendMail message. Does not implicitly {@link NFMsg.ReqSendMail.verify|verify} messages.
         * @param message ReqSendMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqSendMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSendMail message, length delimited. Does not implicitly {@link NFMsg.ReqSendMail.verify|verify} messages.
         * @param message ReqSendMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqSendMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSendMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSendMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqSendMail;

        /**
         * Decodes a ReqSendMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSendMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqSendMail;

        /**
         * Verifies a ReqSendMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSwitchServer. */
    interface IReqSwitchServer {

        /** ReqSwitchServer selfid */
        selfid?: (NFMsg.IIdent|null);

        /** ReqSwitchServer self_serverid */
        self_serverid?: (number|Long|null);

        /** ReqSwitchServer target_serverid */
        target_serverid?: (number|Long|null);

        /** ReqSwitchServer gate_serverid */
        gate_serverid?: (number|Long|null);

        /** ReqSwitchServer SceneID */
        SceneID?: (number|Long|null);

        /** ReqSwitchServer client_id */
        client_id?: (NFMsg.IIdent|null);

        /** ReqSwitchServer groupID */
        groupID?: (number|Long|null);
    }

    /** Represents a ReqSwitchServer. */
    class ReqSwitchServer implements IReqSwitchServer {

        /**
         * Constructs a new ReqSwitchServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqSwitchServer);

        /** ReqSwitchServer selfid. */
        public selfid?: (NFMsg.IIdent|null);

        /** ReqSwitchServer self_serverid. */
        public self_serverid: (number|Long);

        /** ReqSwitchServer target_serverid. */
        public target_serverid: (number|Long);

        /** ReqSwitchServer gate_serverid. */
        public gate_serverid: (number|Long);

        /** ReqSwitchServer SceneID. */
        public SceneID: (number|Long);

        /** ReqSwitchServer client_id. */
        public client_id?: (NFMsg.IIdent|null);

        /** ReqSwitchServer groupID. */
        public groupID: (number|Long);

        /**
         * Creates a new ReqSwitchServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSwitchServer instance
         */
        public static create(properties?: NFMsg.IReqSwitchServer): NFMsg.ReqSwitchServer;

        /**
         * Encodes the specified ReqSwitchServer message. Does not implicitly {@link NFMsg.ReqSwitchServer.verify|verify} messages.
         * @param message ReqSwitchServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqSwitchServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSwitchServer message, length delimited. Does not implicitly {@link NFMsg.ReqSwitchServer.verify|verify} messages.
         * @param message ReqSwitchServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqSwitchServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSwitchServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSwitchServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqSwitchServer;

        /**
         * Decodes a ReqSwitchServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSwitchServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqSwitchServer;

        /**
         * Verifies a ReqSwitchServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckSwitchServer. */
    interface IAckSwitchServer {

        /** AckSwitchServer selfid */
        selfid?: (NFMsg.IIdent|null);

        /** AckSwitchServer self_serverid */
        self_serverid?: (number|Long|null);

        /** AckSwitchServer target_serverid */
        target_serverid?: (number|Long|null);

        /** AckSwitchServer gate_serverid */
        gate_serverid?: (number|Long|null);
    }

    /** Represents an AckSwitchServer. */
    class AckSwitchServer implements IAckSwitchServer {

        /**
         * Constructs a new AckSwitchServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckSwitchServer);

        /** AckSwitchServer selfid. */
        public selfid?: (NFMsg.IIdent|null);

        /** AckSwitchServer self_serverid. */
        public self_serverid: (number|Long);

        /** AckSwitchServer target_serverid. */
        public target_serverid: (number|Long);

        /** AckSwitchServer gate_serverid. */
        public gate_serverid: (number|Long);

        /**
         * Creates a new AckSwitchServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckSwitchServer instance
         */
        public static create(properties?: NFMsg.IAckSwitchServer): NFMsg.AckSwitchServer;

        /**
         * Encodes the specified AckSwitchServer message. Does not implicitly {@link NFMsg.AckSwitchServer.verify|verify} messages.
         * @param message AckSwitchServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckSwitchServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckSwitchServer message, length delimited. Does not implicitly {@link NFMsg.AckSwitchServer.verify|verify} messages.
         * @param message AckSwitchServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckSwitchServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckSwitchServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckSwitchServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckSwitchServer;

        /**
         * Decodes an AckSwitchServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckSwitchServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckSwitchServer;

        /**
         * Verifies an AckSwitchServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PVPRoomInfo. */
    interface IPVPRoomInfo {

        /** PVPRoomInfo nCellStatus */
        nCellStatus?: (number|null);

        /** PVPRoomInfo RoomID */
        RoomID?: (NFMsg.IIdent|null);

        /** PVPRoomInfo nPVPMode */
        nPVPMode?: (number|null);

        /** PVPRoomInfo nPVPGrade */
        nPVPGrade?: (number|null);

        /** PVPRoomInfo MaxPalyer */
        MaxPalyer?: (number|null);

        /** PVPRoomInfo xRedPlayer */
        xRedPlayer?: (NFMsg.IIdent[]|null);

        /** PVPRoomInfo xBluePlayer */
        xBluePlayer?: (NFMsg.IIdent[]|null);

        /** PVPRoomInfo serverid */
        serverid?: (number|Long|null);

        /** PVPRoomInfo SceneID */
        SceneID?: (number|Long|null);

        /** PVPRoomInfo groupID */
        groupID?: (number|Long|null);
    }

    /** pvp--/////////////////////////////////////////////////////////////////////////// */
    class PVPRoomInfo implements IPVPRoomInfo {

        /**
         * Constructs a new PVPRoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IPVPRoomInfo);

        /** PVPRoomInfo nCellStatus. */
        public nCellStatus: number;

        /** PVPRoomInfo RoomID. */
        public RoomID?: (NFMsg.IIdent|null);

        /** PVPRoomInfo nPVPMode. */
        public nPVPMode: number;

        /** PVPRoomInfo nPVPGrade. */
        public nPVPGrade: number;

        /** PVPRoomInfo MaxPalyer. */
        public MaxPalyer: number;

        /** PVPRoomInfo xRedPlayer. */
        public xRedPlayer: NFMsg.IIdent[];

        /** PVPRoomInfo xBluePlayer. */
        public xBluePlayer: NFMsg.IIdent[];

        /** PVPRoomInfo serverid. */
        public serverid: (number|Long);

        /** PVPRoomInfo SceneID. */
        public SceneID: (number|Long);

        /** PVPRoomInfo groupID. */
        public groupID: (number|Long);

        /**
         * Creates a new PVPRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PVPRoomInfo instance
         */
        public static create(properties?: NFMsg.IPVPRoomInfo): NFMsg.PVPRoomInfo;

        /**
         * Encodes the specified PVPRoomInfo message. Does not implicitly {@link NFMsg.PVPRoomInfo.verify|verify} messages.
         * @param message PVPRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IPVPRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PVPRoomInfo message, length delimited. Does not implicitly {@link NFMsg.PVPRoomInfo.verify|verify} messages.
         * @param message PVPRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IPVPRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PVPRoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PVPRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.PVPRoomInfo;

        /**
         * Decodes a PVPRoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PVPRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.PVPRoomInfo;

        /**
         * Verifies a PVPRoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqPVPApplyMatch. */
    interface IReqPVPApplyMatch {

        /** ReqPVPApplyMatch self_id */
        self_id?: (NFMsg.IIdent|null);

        /** ReqPVPApplyMatch nPVPMode */
        nPVPMode?: (number|null);

        /** ReqPVPApplyMatch score */
        score?: (number|Long|null);

        /** ReqPVPApplyMatch ApplyType */
        ApplyType?: (number|null);

        /** ReqPVPApplyMatch team_id */
        team_id?: (NFMsg.IIdent|null);
    }

    /** Represents a ReqPVPApplyMatch. */
    class ReqPVPApplyMatch implements IReqPVPApplyMatch {

        /**
         * Constructs a new ReqPVPApplyMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqPVPApplyMatch);

        /** ReqPVPApplyMatch self_id. */
        public self_id?: (NFMsg.IIdent|null);

        /** ReqPVPApplyMatch nPVPMode. */
        public nPVPMode: number;

        /** ReqPVPApplyMatch score. */
        public score: (number|Long);

        /** ReqPVPApplyMatch ApplyType. */
        public ApplyType: number;

        /** ReqPVPApplyMatch team_id. */
        public team_id?: (NFMsg.IIdent|null);

        /**
         * Creates a new ReqPVPApplyMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPVPApplyMatch instance
         */
        public static create(properties?: NFMsg.IReqPVPApplyMatch): NFMsg.ReqPVPApplyMatch;

        /**
         * Encodes the specified ReqPVPApplyMatch message. Does not implicitly {@link NFMsg.ReqPVPApplyMatch.verify|verify} messages.
         * @param message ReqPVPApplyMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqPVPApplyMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqPVPApplyMatch message, length delimited. Does not implicitly {@link NFMsg.ReqPVPApplyMatch.verify|verify} messages.
         * @param message ReqPVPApplyMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqPVPApplyMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPVPApplyMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPVPApplyMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqPVPApplyMatch;

        /**
         * Decodes a ReqPVPApplyMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPVPApplyMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqPVPApplyMatch;

        /**
         * Verifies a ReqPVPApplyMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace ReqPVPApplyMatch {

        /** EApplyType enum. */
        enum EApplyType {
            EApplyType_Single = 0,
            EApplyType_Team = 1
        }
    }

    /** Properties of an AckPVPApplyMatch. */
    interface IAckPVPApplyMatch {

        /** AckPVPApplyMatch self_id */
        self_id?: (NFMsg.IIdent|null);

        /** AckPVPApplyMatch xRoomInfo */
        xRoomInfo?: (NFMsg.IPVPRoomInfo|null);

        /** AckPVPApplyMatch ApplyType */
        ApplyType?: (number|null);

        /** AckPVPApplyMatch nResult */
        nResult?: (number|null);
    }

    /** Represents an AckPVPApplyMatch. */
    class AckPVPApplyMatch implements IAckPVPApplyMatch {

        /**
         * Constructs a new AckPVPApplyMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckPVPApplyMatch);

        /** AckPVPApplyMatch self_id. */
        public self_id?: (NFMsg.IIdent|null);

        /** AckPVPApplyMatch xRoomInfo. */
        public xRoomInfo?: (NFMsg.IPVPRoomInfo|null);

        /** AckPVPApplyMatch ApplyType. */
        public ApplyType: number;

        /** AckPVPApplyMatch nResult. */
        public nResult: number;

        /**
         * Creates a new AckPVPApplyMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPVPApplyMatch instance
         */
        public static create(properties?: NFMsg.IAckPVPApplyMatch): NFMsg.AckPVPApplyMatch;

        /**
         * Encodes the specified AckPVPApplyMatch message. Does not implicitly {@link NFMsg.AckPVPApplyMatch.verify|verify} messages.
         * @param message AckPVPApplyMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckPVPApplyMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPVPApplyMatch message, length delimited. Does not implicitly {@link NFMsg.AckPVPApplyMatch.verify|verify} messages.
         * @param message AckPVPApplyMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckPVPApplyMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPVPApplyMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPVPApplyMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckPVPApplyMatch;

        /**
         * Decodes an AckPVPApplyMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPVPApplyMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckPVPApplyMatch;

        /**
         * Verifies an AckPVPApplyMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqCreatePVPEctype. */
    interface IReqCreatePVPEctype {

        /** ReqCreatePVPEctype self_id */
        self_id?: (NFMsg.IIdent|null);

        /** ReqCreatePVPEctype xRoomInfo */
        xRoomInfo?: (NFMsg.IPVPRoomInfo|null);
    }

    /** Represents a ReqCreatePVPEctype. */
    class ReqCreatePVPEctype implements IReqCreatePVPEctype {

        /**
         * Constructs a new ReqCreatePVPEctype.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IReqCreatePVPEctype);

        /** ReqCreatePVPEctype self_id. */
        public self_id?: (NFMsg.IIdent|null);

        /** ReqCreatePVPEctype xRoomInfo. */
        public xRoomInfo?: (NFMsg.IPVPRoomInfo|null);

        /**
         * Creates a new ReqCreatePVPEctype instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqCreatePVPEctype instance
         */
        public static create(properties?: NFMsg.IReqCreatePVPEctype): NFMsg.ReqCreatePVPEctype;

        /**
         * Encodes the specified ReqCreatePVPEctype message. Does not implicitly {@link NFMsg.ReqCreatePVPEctype.verify|verify} messages.
         * @param message ReqCreatePVPEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IReqCreatePVPEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqCreatePVPEctype message, length delimited. Does not implicitly {@link NFMsg.ReqCreatePVPEctype.verify|verify} messages.
         * @param message ReqCreatePVPEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IReqCreatePVPEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqCreatePVPEctype message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqCreatePVPEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.ReqCreatePVPEctype;

        /**
         * Decodes a ReqCreatePVPEctype message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqCreatePVPEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.ReqCreatePVPEctype;

        /**
         * Verifies a ReqCreatePVPEctype message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckCreatePVPEctype. */
    interface IAckCreatePVPEctype {

        /** AckCreatePVPEctype self_id */
        self_id?: (NFMsg.IIdent|null);

        /** AckCreatePVPEctype xRoomInfo */
        xRoomInfo?: (NFMsg.IPVPRoomInfo|null);

        /** AckCreatePVPEctype ApplyType */
        ApplyType?: (number|null);
    }

    /** Represents an AckCreatePVPEctype. */
    class AckCreatePVPEctype implements IAckCreatePVPEctype {

        /**
         * Constructs a new AckCreatePVPEctype.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsg.IAckCreatePVPEctype);

        /** AckCreatePVPEctype self_id. */
        public self_id?: (NFMsg.IIdent|null);

        /** AckCreatePVPEctype xRoomInfo. */
        public xRoomInfo?: (NFMsg.IPVPRoomInfo|null);

        /** AckCreatePVPEctype ApplyType. */
        public ApplyType: number;

        /**
         * Creates a new AckCreatePVPEctype instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckCreatePVPEctype instance
         */
        public static create(properties?: NFMsg.IAckCreatePVPEctype): NFMsg.AckCreatePVPEctype;

        /**
         * Encodes the specified AckCreatePVPEctype message. Does not implicitly {@link NFMsg.AckCreatePVPEctype.verify|verify} messages.
         * @param message AckCreatePVPEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsg.IAckCreatePVPEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckCreatePVPEctype message, length delimited. Does not implicitly {@link NFMsg.AckCreatePVPEctype.verify|verify} messages.
         * @param message AckCreatePVPEctype message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsg.IAckCreatePVPEctype, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckCreatePVPEctype message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckCreatePVPEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsg.AckCreatePVPEctype;

        /**
         * Decodes an AckCreatePVPEctype message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckCreatePVPEctype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsg.AckCreatePVPEctype;

        /**
         * Verifies an AckCreatePVPEctype message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace NFMsgBase. */
declare namespace NFMsgBase {

    /** Properties of an Ident. */
    interface IIdent {

        /** Ident svrid */
        svrid?: (number|Long|null);

        /** Ident index */
        index?: (number|Long|null);
    }

    /** Represents an Ident. */
    class Ident implements IIdent {

        /**
         * Constructs a new Ident.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsgBase.IIdent);

        /** Ident svrid. */
        public svrid: (number|Long);

        /** Ident index. */
        public index: (number|Long);

        /**
         * Creates a new Ident instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ident instance
         */
        public static create(properties?: NFMsgBase.IIdent): NFMsgBase.Ident;

        /**
         * Encodes the specified Ident message. Does not implicitly {@link NFMsgBase.Ident.verify|verify} messages.
         * @param message Ident message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsgBase.IIdent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Ident message, length delimited. Does not implicitly {@link NFMsgBase.Ident.verify|verify} messages.
         * @param message Ident message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsgBase.IIdent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Ident message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsgBase.Ident;

        /**
         * Decodes an Ident message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsgBase.Ident;

        /**
         * Verifies an Ident message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MsgBase. */
    interface IMsgBase {

        /** MsgBase player_id */
        player_id?: (NFMsgBase.IIdent|null);

        /** MsgBase msg_data */
        msg_data?: (Uint8Array|null);

        /** MsgBase player_Client_list */
        player_Client_list?: (NFMsgBase.IIdent[]|null);

        /** MsgBase hash_ident */
        hash_ident?: (NFMsgBase.IIdent|null);
    }

    /** Represents a MsgBase. */
    class MsgBase implements IMsgBase {

        /**
         * Constructs a new MsgBase.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsgBase.IMsgBase);

        /** MsgBase player_id. */
        public player_id?: (NFMsgBase.IIdent|null);

        /** MsgBase msg_data. */
        public msg_data: Uint8Array;

        /** MsgBase player_Client_list. */
        public player_Client_list: NFMsgBase.IIdent[];

        /** MsgBase hash_ident. */
        public hash_ident?: (NFMsgBase.IIdent|null);

        /**
         * Creates a new MsgBase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBase instance
         */
        public static create(properties?: NFMsgBase.IMsgBase): NFMsgBase.MsgBase;

        /**
         * Encodes the specified MsgBase message. Does not implicitly {@link NFMsgBase.MsgBase.verify|verify} messages.
         * @param message MsgBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsgBase.IMsgBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgBase message, length delimited. Does not implicitly {@link NFMsgBase.MsgBase.verify|verify} messages.
         * @param message MsgBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsgBase.IMsgBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgBase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsgBase.MsgBase;

        /**
         * Decodes a MsgBase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsgBase.MsgBase;

        /**
         * Verifies a MsgBase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
