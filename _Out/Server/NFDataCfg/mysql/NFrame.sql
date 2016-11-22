ALTER TABLE `BB_Build` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `BB_Build` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `BB_Build` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Block` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Block` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Block` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Buff` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Buff` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Buff` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Buff` ADD `EffectType` bigint(11) DEFAULT '0' COMMENT '影响属性类型(效果类型)  生命，法力(可组合,叠加)';
ALTER TABLE `Buff` ADD `EffectValueType` bigint(11) DEFAULT '0' COMMENT '影响值类型 百分比 绝对值--如果是控制属性开关，则只能是绝对值';
ALTER TABLE `Buff` ADD `EffectValueReferType` bigint(11) DEFAULT '0' COMMENT '影响值参考类型';
ALTER TABLE `Buff` ADD `EffectTimeValue` bigint(11) DEFAULT '0' COMMENT '总共产生几次';
ALTER TABLE `Buff` ADD `EffectTimeInterval` float(11,3) DEFAULT '0' COMMENT '每次间隔时间0.5f倍数';
ALTER TABLE `Buff` ADD `WashGroupID` bigint(11) DEFAULT '0' COMMENT '每次间隔时间0.5f倍数';
ALTER TABLE `Buff` ADD `ReverseReferType` bigint(11) DEFAULT '0' COMMENT '是否还原，不还原的在计算的时候不能保存在runTimeInfo,只能累计在最终值内';
ALTER TABLE `Buff` ADD `EffectClearOnDead` bigint(11) DEFAULT '0' COMMENT '死亡是否清除';
ALTER TABLE `Buff` ADD `DownSaveType` bigint(11) DEFAULT '0' COMMENT '下线是否保存';
ALTER TABLE `ChatGroup` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `ChatGroup` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `ChatGroup` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `ChatGroup` ADD `Name` varchar(128) DEFAULT '' COMMENT '组名字';
ALTER TABLE `ChatGroup` ADD `CreateObject` varchar(128) DEFAULT '' COMMENT '创建者';
ALTER TABLE `ChatGroup` ADD `GroupMemberList` BLOB COMMENT '';
ALTER TABLE `ChatGroup` ADD `ChatList` BLOB COMMENT '';
ALTER TABLE `ConsumeData` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `ConsumeData` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `ConsumeData` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `ConsumeData` ADD `VIPEXP` bigint(11) DEFAULT '0' COMMENT 'VIP经验';
ALTER TABLE `ConsumeData` ADD `EXP` bigint(11) DEFAULT '0' COMMENT '经验获得,如果是怪物，则是掉落经验';
ALTER TABLE `ConsumeData` ADD `HP` bigint(11) DEFAULT '0' COMMENT '生命值';
ALTER TABLE `ConsumeData` ADD `SP` bigint(11) DEFAULT '0' COMMENT '体力';
ALTER TABLE `ConsumeData` ADD `MP` bigint(11) DEFAULT '0' COMMENT '法力值';
ALTER TABLE `ConsumeData` ADD `Gold` bigint(11) DEFAULT '0' COMMENT '玩家游戏金币';
ALTER TABLE `ConsumeData` ADD `Money` bigint(11) DEFAULT '0' COMMENT '钻石';
ALTER TABLE `Cost` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Cost` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Cost` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `DescData` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `DescData` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `DescData` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `EffectData` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `EffectData` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `EffectData` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Equip` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Equip` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Equip` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Guild` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Guild` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Guild` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Guild` ADD `Name` varchar(128) DEFAULT '' COMMENT '工会名';
ALTER TABLE `Guild` ADD `PresidentID` varchar(128) DEFAULT '' COMMENT '会长ID';
ALTER TABLE `Guild` ADD `PresidentName` varchar(128) DEFAULT '' COMMENT '会长名';
ALTER TABLE `Guild` ADD `Rank` bigint(11) DEFAULT '0' COMMENT '公会排名';
ALTER TABLE `Guild` ADD `GuildAD` varchar(128) DEFAULT '' COMMENT '工会公告';
ALTER TABLE `Guild` ADD `GuildDesc` varchar(128) DEFAULT '' COMMENT '工会描述';
ALTER TABLE `Guild` ADD `GuildMoney` bigint(11) DEFAULT '0' COMMENT '工会财富';
ALTER TABLE `Guild` ADD `GuildLevel` bigint(11) DEFAULT '0' COMMENT '工会等级';
ALTER TABLE `Guild` ADD `GuildContinueDay` bigint(11) DEFAULT '0' COMMENT '工会霸占排行榜天数';
ALTER TABLE `Guild` ADD `GuilID` varchar(128) DEFAULT '' COMMENT '工会ID';
ALTER TABLE `Guild` ADD `GuilIDIcon` bigint(11) DEFAULT '0' COMMENT '公会头像';
ALTER TABLE `Guild` ADD `GuildMemeberCount` bigint(11) DEFAULT '0' COMMENT '成员数量(增加个字段，不然遍历Record太麻烦)';
ALTER TABLE `Guild` ADD `GuildMemeberMaxCount` bigint(11) DEFAULT '0' COMMENT '成员最大数量';
ALTER TABLE `Guild` ADD `GuildHonor` bigint(11) DEFAULT '0' COMMENT '公会荣誉';
ALTER TABLE `Guild` ADD `GuildCreateTime` bigint(11) DEFAULT '0' COMMENT '公会创建时间';
ALTER TABLE `Guild` ADD `GuildCreateter` bigint(11) DEFAULT '0' COMMENT '公会创始人';
ALTER TABLE `Guild` ADD `GuildExp` bigint(11) DEFAULT '0' COMMENT '公会经验';
ALTER TABLE `Guild` ADD `GuildStatus` bigint(11) DEFAULT '0' COMMENT '公会状态，正常状态，申请解散状态';
ALTER TABLE `Guild` ADD `DismissTime` bigint(11) DEFAULT '0' COMMENT '申请解散时间';
ALTER TABLE `Guild` ADD `RecruitAD` varchar(128) DEFAULT '' COMMENT '招募公告';
ALTER TABLE `Guild` ADD `RecruitLevel` bigint(11) DEFAULT '0' COMMENT '招募等级限制';
ALTER TABLE `Guild` ADD `KingWarResource` bigint(11) DEFAULT '0' COMMENT '获得的战役资源';
ALTER TABLE `Guild` ADD `AutoRecruit` varchar(128) DEFAULT '' COMMENT '自动招募';
ALTER TABLE `Guild` ADD `EctypServer` bigint(11) DEFAULT '0' COMMENT '工会副本所在的服';
ALTER TABLE `Guild` ADD `EctypID` bigint(11) DEFAULT '0' COMMENT '工会副本ID';
ALTER TABLE `Guild` ADD `GuildBoss` BLOB COMMENT 'guild';
ALTER TABLE `Guild` ADD `GuildMemberList` BLOB COMMENT 'guild';
ALTER TABLE `Guild` ADD `GuildAppyList` BLOB COMMENT 'guild';
ALTER TABLE `Guild` ADD `GuildEvent` BLOB COMMENT 'guild';
ALTER TABLE `Guild` ADD `GuildHouse` BLOB COMMENT 'guild';
ALTER TABLE `Guild` ADD `GuildSkill` BLOB COMMENT 'guild';
ALTER TABLE `GuildConfig` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildConfig` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildConfig` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildJob` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildJob` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildJob` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildName` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildName` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildName` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `GuildName` ADD `GuildID` varchar(128) DEFAULT '' COMMENT '';
ALTER TABLE `HttpServer` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `HttpServer` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `HttpServer` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `InitProperty` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `InitProperty` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `InitProperty` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Item` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Item` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Item` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Language` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Language` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Language` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Map` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Map` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Map` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Map` ADD `MaxCount` bigint(11) DEFAULT '0' COMMENT '最大入驻公会';
ALTER TABLE `Map` ADD `Station` BLOB COMMENT 'Station';
ALTER TABLE `NoSqlServer` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `NoSqlServer` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `NoSqlServer` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `NPC` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `NPC` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `NPC` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `NPC` ADD `VIPEXP` bigint(11) DEFAULT '0' COMMENT 'VIP经验';
ALTER TABLE `NPC` ADD `EXP` bigint(11) DEFAULT '0' COMMENT '经验获得,如果是怪物，则是掉落经验';
ALTER TABLE `NPC` ADD `HP` bigint(11) DEFAULT '0' COMMENT '生命值';
ALTER TABLE `NPC` ADD `SP` bigint(11) DEFAULT '0' COMMENT '体力';
ALTER TABLE `NPC` ADD `MP` bigint(11) DEFAULT '0' COMMENT '法力值';
ALTER TABLE `NPC` ADD `Gold` bigint(11) DEFAULT '0' COMMENT '玩家游戏金币';
ALTER TABLE `NPC` ADD `Money` bigint(11) DEFAULT '0' COMMENT '钻石';
ALTER TABLE `NPC` ADD `Camp` bigint(11) DEFAULT '0' COMMENT '阵营';
ALTER TABLE `NPC` ADD `MasterID` varchar(128) DEFAULT '' COMMENT '召唤者，主人';
ALTER TABLE `Player` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Player` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Player` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Player` ADD `Name` varchar(128) DEFAULT '' COMMENT '角色名';
ALTER TABLE `Player` ADD `Sex` bigint(11) DEFAULT '0' COMMENT '性别';
ALTER TABLE `Player` ADD `Race` bigint(11) DEFAULT '0' COMMENT '种族';
ALTER TABLE `Player` ADD `Camp` bigint(11) DEFAULT '0' COMMENT '阵营';
ALTER TABLE `Player` ADD `LastContainerID` bigint(11) DEFAULT '0' COMMENT '玩家下线的时候需要保存上次在线的场景';
ALTER TABLE `Player` ADD `Level` bigint(11) DEFAULT '0' COMMENT '等级';
ALTER TABLE `Player` ADD `ShowName` varchar(128) DEFAULT '' COMMENT '显示的名字';
ALTER TABLE `Player` ADD `PrefabPath` varchar(128) DEFAULT '' COMMENT '预设路径';
ALTER TABLE `Player` ADD `FirstTarget` varchar(128) DEFAULT '' COMMENT '首要目标';
ALTER TABLE `Player` ADD `CharType` bigint(11) DEFAULT '0' COMMENT '角色类型';
ALTER TABLE `Player` ADD `Job` bigint(11) DEFAULT '0' COMMENT '职业';
ALTER TABLE `Player` ADD `VIPLevel` bigint(11) DEFAULT '0' COMMENT '经验获得,如果是怪物，则是掉落经验';
ALTER TABLE `Player` ADD `VIPEXP` bigint(11) DEFAULT '0' COMMENT 'VIP经验';
ALTER TABLE `Player` ADD `EXP` bigint(11) DEFAULT '0' COMMENT '经验获得,如果是怪物，则是掉落经验';
ALTER TABLE `Player` ADD `HP` bigint(11) DEFAULT '0' COMMENT '生命值';
ALTER TABLE `Player` ADD `SP` bigint(11) DEFAULT '0' COMMENT '体力';
ALTER TABLE `Player` ADD `MP` bigint(11) DEFAULT '0' COMMENT '法力值';
ALTER TABLE `Player` ADD `Gold` bigint(11) DEFAULT '0' COMMENT '玩家游戏金币';
ALTER TABLE `Player` ADD `Money` bigint(11) DEFAULT '0' COMMENT '钻石';
ALTER TABLE `Player` ADD `Account` varchar(128) DEFAULT '' COMMENT '玩家的帐号';
ALTER TABLE `Player` ADD `ConnectKey` varchar(128) DEFAULT '' COMMENT '玩家连接服务器的KEY';
ALTER TABLE `Player` ADD `MAXEXP` bigint(11) DEFAULT '0' COMMENT '升级需要的经验';
ALTER TABLE `Player` ADD `RELIVE_SOUL` bigint(11) DEFAULT '0' COMMENT '转生次数';
ALTER TABLE `Player` ADD `ATK_PVP` bigint(11) DEFAULT '0' COMMENT 'PVP攻击力';
ALTER TABLE `Player` ADD `DEF_PVP` bigint(11) DEFAULT '0' COMMENT 'PVP防御力';
ALTER TABLE `Player` ADD `OnlineCount` bigint(11) DEFAULT '0' COMMENT '上线次数';
ALTER TABLE `Player` ADD `TotalTime` bigint(11) DEFAULT '0' COMMENT '在线时间';
ALTER TABLE `Player` ADD `LastOfflineTime` varchar(128) DEFAULT '' COMMENT '上次下线时间';
ALTER TABLE `Player` ADD `OnlineTime` varchar(128) DEFAULT '' COMMENT '本次上线时间';
ALTER TABLE `Player` ADD `TotalLineTime` varchar(128) DEFAULT '' COMMENT '今日在线时长{截至至本次上线时间}';
ALTER TABLE `Player` ADD `GMLevel` bigint(11) DEFAULT '0' COMMENT 'GM等级';
ALTER TABLE `Player` ADD `GameID` bigint(11) DEFAULT '0' COMMENT '登陆的服ID';
ALTER TABLE `Player` ADD `GateID` bigint(11) DEFAULT '0' COMMENT '登陆的网关ID';
ALTER TABLE `Player` ADD `GuildID` varchar(128) DEFAULT '' COMMENT '公会ID';
ALTER TABLE `Player` ADD `TeamID` varchar(128) DEFAULT '' COMMENT '所在队伍ID';
ALTER TABLE `Player` ADD `PlayerHero` BLOB COMMENT '';
ALTER TABLE `Player` ADD `PlayerFightHero` BLOB COMMENT '';
ALTER TABLE `Player` ADD `BagEquipList` BLOB COMMENT '普通背包';
ALTER TABLE `Player` ADD `BagItemList` BLOB COMMENT '普通背包';
ALTER TABLE `Player` ADD `TaskMonsterList` BLOB COMMENT '任务杀怪表';
ALTER TABLE `Player` ADD `TaskList` BLOB COMMENT '任务表';
ALTER TABLE `Player` ADD `BuildingList` BLOB COMMENT '';
ALTER TABLE `Player` ADD `BuildingListProduce` BLOB COMMENT '';
ALTER TABLE `Scene` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Scene` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Scene` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Server` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Server` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Server` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `Type` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `ItemID` varchar(128) DEFAULT '' COMMENT '';
ALTER TABLE `Shop` ADD `Gold` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `Steel` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `Stone` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `Diamond` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `Shop` ADD `Level` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `Skill` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Skill` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Skill` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `SkillRef` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `SkillRef` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `SkillRef` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `SqlServer` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `SqlServer` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `SqlServer` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFuncResources` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFuncResources` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFuncResources` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFuncResources` ADD `Atlas_ResID` varchar(128) DEFAULT '' COMMENT '';
ALTER TABLE `StateFunction` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_INFO` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_BOOOST` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_LVLUP` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_CREATE_SOLDER` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_CREATE_SPEEL` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_RESEARCH` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_COLLECT_GOLD` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_COLLECT_STONE` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_COLLECT_STEEL` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_COLLECT_DIAMOND` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_SELL` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_REPAIR` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_CANCEL` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `StateFunction` ADD `EFT_FINISH` bigint(11) DEFAULT '0' COMMENT '';
ALTER TABLE `Talent` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Talent` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Talent` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Task` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Task` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Task` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Team` ADD `X` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Team` ADD `Y` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Team` ADD `Z` float(11,3) DEFAULT '0' COMMENT '';
ALTER TABLE `Team` ADD `Captain` varchar(128) DEFAULT '' COMMENT '队长ID';
ALTER TABLE `Team` ADD `PresidentName` varchar(128) DEFAULT '' COMMENT '会长名';
ALTER TABLE `Team` ADD `MemberList` BLOB COMMENT 'guild';
ALTER TABLE `Team` ADD `ApplyList` BLOB COMMENT 'TeamApply';
