(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[3],{106:function(e,a,t){"use strict";var n,r,i,_;t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return _})),function(e){e.NONE="none",e.ADD_STATE="addState",e.SUB_STATE="subState",e.DAMAGE="damage",e.DAMAGE_NP="damageNp",e.GAIN_STAR="gainStar",e.GAIN_HP="gainHp",e.GAIN_NP="gainNp",e.LOSS_NP="lossNp",e.SHORTEN_SKILL="shortenSkill",e.EXTEND_SKILL="extendSkill",e.RELEASE_STATE="releaseState",e.LOSS_HP="lossHp",e.INSTANT_DEATH="instantDeath",e.DAMAGE_NP_PIERCE="damageNpPierce",e.DAMAGE_NP_INDIVIDUAL="damageNpIndividual",e.ADD_STATE_SHORT="addStateShort",e.GAIN_HP_PER="gainHpPer",e.DAMAGE_NP_STATE_INDIVIDUAL="damageNpStateIndividual",e.HASTEN_NPTURN="hastenNpturn",e.DELAY_NPTURN="delayNpturn",e.DAMAGE_NP_HPRATIO_HIGH="damageNpHpratioHigh",e.DAMAGE_NP_HPRATIO_LOW="damageNpHpratioLow",e.CARD_RESET="cardReset",e.REPLACE_MEMBER="replaceMember",e.LOSS_HP_SAFE="lossHpSafe",e.DAMAGE_NP_COUNTER="damageNpCounter",e.DAMAGE_NP_STATE_INDIVIDUAL_FIX="damageNpStateIndividualFix",e.DAMAGE_NP_SAFE="damageNpSafe",e.CALL_SERVANT="callServant",e.PT_SHUFFLE="ptShuffle",e.LOSS_STAR="lossStar",e.CHANGE_SERVANT="changeServant",e.CHANGE_BG="changeBg",e.DAMAGE_VALUE="damageValue",e.WITHDRAW="withdraw",e.FIX_COMMANDCARD="fixCommandcard",e.SHORTEN_BUFFTURN="shortenBuffturn",e.EXTEND_BUFFTURN="extendBuffturn",e.SHORTEN_BUFFCOUNT="shortenBuffcount",e.EXTEND_BUFFCOUNT="extendBuffcount",e.CHANGE_BGM="changeBgm",e.DISPLAY_BUFFSTRING="displayBuffstring",e.RESURRECTION="resurrection",e.GAIN_NP_BUFF_INDIVIDUAL_SUM="gainNpBuffIndividualSum",e.SET_SYSTEM_ALIVE_FLAG="setSystemAliveFlag",e.FORCE_INSTANT_DEATH="forceInstantDeath",e.DAMAGE_NP_RARE="damageNpRare",e.GAIN_NP_FROM_TARGETS="gainNpFromTargets",e.GAIN_HP_FROM_TARGETS="gainHpFromTargets",e.LOSS_HP_PER="lossHpPer",e.LOSS_HP_PER_SAFE="lossHpPerSafe",e.SHORTEN_USER_EQUIP_SKILL="shortenUserEquipSkill",e.QUICK_CHANGE_BG="quickChangeBg",e.SHIFT_SERVANT="shiftServant",e.DAMAGE_NP_AND_CHECK_INDIVIDUALITY="damageNpAndCheckIndividuality",e.ABSORB_NPTURN="absorbNpturn",e.OVERWRITE_DEAD_TYPE="overwriteDeadType",e.FORCE_ALL_BUFF_NOACT="forceAllBuffNoact",e.BREAK_GAUGE_UP="breakGaugeUp",e.BREAK_GAUGE_DOWN="breakGaugeDown",e.EXP_UP="expUp",e.QP_UP="qpUp",e.DROP_UP="dropUp",e.FRIEND_POINT_UP="friendPointUp",e.EVENT_DROP_UP="eventDropUp",e.EVENT_DROP_RATE_UP="eventDropRateUp",e.EVENT_POINT_UP="eventPointUp",e.EVENT_POINT_RATE_UP="eventPointRateUp",e.TRANSFORM_SERVANT="transformServant",e.QP_DROP_UP="qpDropUp",e.SERVANT_FRIENDSHIP_UP="servantFriendshipUp",e.USER_EQUIP_EXP_UP="userEquipExpUp",e.CLASS_DROP_UP="classDropUp",e.ENEMY_ENCOUNT_COPY_RATE_UP="enemyEncountCopyRateUp",e.ENEMY_ENCOUNT_RATE_UP="enemyEncountRateUp",e.ENEMY_PROB_DOWN="enemyProbDown",e.GET_REWARD_GIFT="getRewardGift",e.SEND_SUPPORT_FRIEND_POINT="sendSupportFriendPoint",e.MOVE_POSITION="movePosition",e.REVIVAL="revival",e.DAMAGE_NP_INDIVIDUAL_SUM="damageNpIndividualSum"}(n||(n={})),function(e){e.SELF="self",e.PT_ONE="ptOne",e.PT_ANOTHER="ptAnother",e.PT_ALL="ptAll",e.ENEMY="enemy",e.ENEMY_ANOTHER="enemyAnother",e.ENEMY_ALL="enemyAll",e.PT_FULL="ptFull",e.ENEMY_FULL="enemyFull",e.PT_OTHER="ptOther",e.PT_ONE_OTHER="ptOneOther",e.PT_RANDOM="ptRandom",e.ENEMY_OTHER="enemyOther",e.ENEMY_RANDOM="enemyRandom",e.PT_OTHER_FULL="ptOtherFull",e.ENEMY_OTHER_FULL="enemyOtherFull",e.PTSELECT_ONE_SUB="ptselectOneSub",e.PTSELECT_SUB="ptselectSub",e.PT_ONE_ANOTHER_RANDOM="ptOneAnotherRandom",e.PT_SELF_ANOTHER_RANDOM="ptSelfAnotherRandom",e.ENEMY_ONE_ANOTHER_RANDOM="enemyOneAnotherRandom",e.PT_SELF_ANOTHER_FIRST="ptSelfAnotherFirst",e.PT_SELF_BEFORE="ptSelfBefore",e.PT_SELF_AFTER="ptSelfAfter",e.PT_SELF_ANOTHER_LAST="ptSelfAnotherLast",e.COMMAND_TYPE_SELF_TREASURE_DEVICE="commandTypeSelfTreasureDevice"}(r||(r={})),function(e){e.PLAYER="player",e.ENEMY="enemy",e.PLAYER_AND_ENEMY="playerAndEnemy"}(i||(i={})),function(e){e.RATE="Rate",e.TURN="Turn",e.COUNT="Count",e.VALUE="Value",e.VALUE2="Value2",e.USE_RATE="UseRate",e.TARGET="Target",e.CORRECTION="Correction",e.PARAM_ADD="ParamAdd",e.PARAM_MAX="ParamMax",e.HIDE_MISS="HideMiss",e.ON_FIELD="OnField",e.HIDE_NO_EFFECT="HideNoEffect",e.UNAFFECTED="Unaffected",e.SHOW_STATE="ShowState",e.AURA_EFFECT_ID="AuraEffectId",e.ACT_SET="ActSet",e.ACT_SET_WEIGHT="ActSetWeight",e.SHOW_QUEST_NO_EFFECT="ShowQuestNoEffect",e.CHECK_DEAD="CheckDead",e.RATIO_HP_HIGH="RatioHPHigh",e.RATIO_HP_LOW="RatioHPLow",e.SET_PASSIVE_FRAME="SetPassiveFrame",e.PROC_PASSIVE="ProcPassive",e.PROC_ACTIVE="ProcActive",e.HIDE_PARAM="HideParam",e.SKILL_ID="SkillID",e.SKILL_LV="SkillLV",e.SHOW_CARD_ONLY="ShowCardOnly",e.EFFECT_SUMMON="EffectSummon",e.RATIO_HP_RANGE_HIGH="RatioHPRangeHigh",e.RATIO_HP_RANGE_LOW="RatioHPRangeLow",e.TARGET_LIST="TargetList",e.OPPONENT_ONLY="OpponentOnly",e.STATUS_EFFECT_ID="StatusEffectId",e.END_BATTLE="EndBattle",e.LOSE_BATTLE="LoseBattle",e.ADD_INDIVIDUALTY="AddIndividualty",e.ADD_LINKAGE_TARGET_INDIVIDUALTY="AddLinkageTargetIndividualty",e.SAME_BUFF_LIMIT_TARGET_INDIVIDUALITY="SameBuffLimitTargetIndividuality",e.SAME_BUFF_LIMIT_NUM="SameBuffLimitNum",e.CHECK_DUPLICATE="CheckDuplicate",e.ON_FIELD_COUNT="OnFieldCount",e.TARGET_RARITY_LIST="TargetRarityList",e.DEPEND_FUNC_ID="DependFuncId",e.INVALID_HIDE="InvalidHide",e.OUT_ENEMY_NPC_ID="OutEnemyNpcId",e.IN_ENEMY_NPC_ID="InEnemyNpcId",e.OUT_ENEMY_POSITION="OutEnemyPosition",e.IGNORE_INDIVIDUALITY="IgnoreIndividuality",e.STAR_HIGHER="StarHigher",e.CHANGE_TD_COMMAND_TYPE="ChangeTDCommandType",e.SHIFT_NPC_ID="ShiftNpcId",e.DISPLAY_LAST_FUNC_INVALID_TYPE="DisplayLastFuncInvalidType",e.AND_CHECK_INDIVIDUALITY_LIST="AndCheckIndividualityList",e.WIN_BATTLE_NOT_RELATED_SURVIVAL_STATUS="WinBattleNotRelatedSurvivalStatus",e.FORCE_SELF_INSTANT_DEATH="ForceSelfInstantDeath",e.CHANGE_MAX_BREAK_GAUGE="ChangeMaxBreakGauge",e.PARAM_ADD_MAX_VALUE="ParamAddMaxValue",e.PARAM_ADD_MAX_COUNT="ParamAddMaxCount",e.LOSS_HP_NO_CHANGE_DAMAGE="LossHpNoChangeDamage",e.INCLUDE_PASSIVE_INDIVIDUALITY="IncludePassiveIndividuality",e.INDIVIDUALITY="Individuality",e.EVENT_ID="EventId",e.ADD_COUNT="AddCount",e.RATE_COUNT="RateCount"}(_||(_={}))},118:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return A})),t.d(a,"d",(function(){return T})),t.d(a,"e",(function(){return p})),t.d(a,"f",(function(){return d})),t.d(a,"g",(function(){return D})),t.d(a,"h",(function(){return f})),t.d(a,"i",(function(){return I})),t.d(a,"j",(function(){return P}));var n=t(0),r=t.n(n),i=t(113),_=t(106),s=t(136),u=function(e){if(!e.length)return!1;for(var a=e[0],t=1;t<e.length;t++){if(JSON.stringify(a)!==JSON.stringify(e[t]))return!0;a=e[t]}return!1},E=function(e){return new Set(e).size>1};function o(e,a){var t=T(a),n=D(t);return function e(a){if(!a.length)return[];var t=function(e){return Object.values(_.a).filter((function(a){var t=e.map((function(e){return e[a]}));return E(t)}))}(a),n=a.filter((function(e){return void 0!==e.DependFuncVals})).length>0?a.map((function(e){var a;return null!==(a=e.DependFuncVals)&&void 0!==a?a:{}})):void 0,r=n?e(n):[],i=D(a);return a.map((function(e,a){var n={};for(var _ in t)n[t[_]]=e[t[_]];return i.DependFuncId&&r[a]&&(n.DependFuncId=i.DependFuncId,n.DependFuncVals=r[a]),n}))}(t).map((function(t){return r.a.createElement(s.a,{region:e,func:a,staticDataVal:n,dataVal:t})}))}function c(e){return u(N(e))}function A(e){return u(l(e))}function T(e){var a=c(e),t=A(e);return a&&t?function(e){for(var a=[],t=1;t<=5;t++){var n=I(e,t,t);void 0!==n&&a.push(n)}return a}(e):t?l(e):N(e)}function p(e){var a;return null!==(a=e.followerVals)&&void 0!==a?a:[]}function N(e){var a;return null!==(a=e.svals)&&void 0!==a?a:[]}function l(e){for(var a=[],t=1;t<=5;t++){var n=I(e,1,t);void 0!==n&&a.push(n)}return a}function d(e){if(e.funcType!==_.d.ADD_STATE&&e.funcType!==_.d.ADD_STATE_SHORT)return[];var a=e.buffs[0];if(a.type===i.a.ATTACK_FUNCTION||a.type===i.a.COMMANDATTACK_FUNCTION||a.type===i.a.COMMANDATTACK_BEFORE_FUNCTION||a.type===i.a.COMMANDCODEATTACK_FUNCTION||a.type===i.a.DAMAGE_FUNCTION||a.type===i.a.DEAD_FUNCTION||a.type===i.a.DELAY_FUNCTION||a.type===i.a.SELFTURNEND_FUNCTION){var t=T(e)[0];return"number"===typeof t.Value?[t.Value]:[]}if(a.type===i.a.NPATTACK_PREV_BUFF){var n=T(e)[0];return"number"===typeof n.SkillID?[n.SkillID]:[]}return[]}function D(e){if(!e.length)return{};var a=function(e){return Object.values(_.a).filter((function(a){var t=e.map((function(e){return e[a]}));return!E(t)}))}(e),t={},n=e.filter((function(e){return void 0!==e.DependFuncVals})).length>0,r=n?e.map((function(e){var a;return null!==(a=e.DependFuncVals)&&void 0!==a?a:{}})):void 0,i=r?D(r):void 0;for(var s in a)t[a[s]]=e[0][a[s]];return n&&(t.DependFuncVals=i),t}function f(e,a){if(void 0!==e.followerVals)return e.followerVals[a-1]}function I(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(void 0!==e.svals)return(2===t&&e.svals2?e.svals2:3===t&&e.svals3?e.svals3:4===t&&e.svals4?e.svals4:5===t&&e.svals5?e.svals5:e.svals)[a-1]}function P(e){return void 0!==e.followerVals}},122:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),_=t(18),s=t(0),u=t.n(s),E=t(13),o=t(127),c=function(e){Object(i.a)(t,e);var a=Object(_.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(E.b,{to:"/".concat(this.props.region,"/skill/").concat(this.props.skill.id)},u.a.createElement(o.a,{location:this.props.skill.icon,height:this.props.iconHeight})," ","[",this.props.skill.name?this.props.skill.name:"Skill: ".concat(this.props.skill.id),"]")}}]),t}(u.a.Component);a.a=c},130:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),_=t(18),s=t(55),u=t(31),E=t(0),o=t.n(E),c=t(13),A=t(118),T=t(104),p=function e(a){Object(n.a)(this,e),this.showing=!0,this.parts=[],this.preposition=void 0,this.preposition=a},N=function e(){Object(n.a)(this,e),this.team=new p,this.chance=new p,this.action=new p,this.affects=new p,this.amount=new p("of"),this.target=new p("to"),this.duration=new p,this.scaling=new p},l=t(151),d=t(106),D=t(111),f=t(113),I=t(137),P=t(136),R=t(134),O=function(e,a,t,n,r){var i,_,s,u,E,c,A,T,p,N,l=a.amount,O=l.parts;if(r&&O.push("( Support only:"),(null===(i=t.buffs[0])||void 0===i?void 0:i.type)===f.a.ADD_INDIVIDUALITY&&"number"===typeof n.Value)O.push(o.a.createElement(D.a,{region:e,trait:n.Value}));else if((null===(_=t.buffs[0])||void 0===_?void 0:_.type)!==f.a.ATTACK_FUNCTION&&(null===(s=t.buffs[0])||void 0===s?void 0:s.type)!==f.a.COMMANDATTACK_FUNCTION&&(null===(u=t.buffs[0])||void 0===u?void 0:u.type)!==f.a.COMMANDATTACK_BEFORE_FUNCTION&&(null===(E=t.buffs[0])||void 0===E?void 0:E.type)!==f.a.COMMANDCODEATTACK_FUNCTION&&(null===(c=t.buffs[0])||void 0===c?void 0:c.type)!==f.a.DAMAGE_FUNCTION&&(null===(A=t.buffs[0])||void 0===A?void 0:A.type)!==f.a.DEAD_FUNCTION&&(null===(T=t.buffs[0])||void 0===T?void 0:T.type)!==f.a.DELAY_FUNCTION&&(null===(p=t.buffs[0])||void 0===p?void 0:p.type)!==f.a.SELFTURNEND_FUNCTION||"number"!==typeof n.Value)if(t.funcType===d.d.CARD_RESET&&n.Value)l.preposition=void 0,O.push("".concat(n.Value," time").concat(n.Value>1?"s":""));else if(t.funcType===d.d.DAMAGE_NP_INDIVIDUAL_SUM)O.push(o.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0}));else if(t.funcType!==d.d.ABSORB_NPTURN&&t.funcType!==d.d.GAIN_HP_FROM_TARGETS&&t.funcType!==d.d.GAIN_NP_FROM_TARGETS||!n.DependFuncId)if(!n.AddCount||t.funcType!==d.d.EVENT_DROP_UP&&t.funcType!==d.d.EXP_UP&&t.funcType!==d.d.QP_UP&&t.funcType!==d.d.USER_EQUIP_EXP_UP)if(!n.RateCount||t.funcType!==d.d.QP_DROP_UP&&t.funcType!==d.d.SERVANT_FRIENDSHIP_UP&&t.funcType!==d.d.USER_EQUIP_EXP_UP)if((null===(N=t.buffs[0])||void 0===N?void 0:N.type)===f.a.NPATTACK_PREV_BUFF){if("number"!==typeof n.SkillID)return void(l.showing=!1);l.preposition=void 0,O.push("that triggers"),O.push(o.a.createElement(R.a,{region:e,id:n.SkillID}))}else t.buffs[0]&&n.Value?O.push(o.a.createElement(I.a,{region:e,buff:t.buffs[0],dataVal:n})):n.Value?O.push(o.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0})):!n.Value&&n.Correction?(l.preposition="with",O.push("bonus"),O.push(o.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0}))):l.showing=!1;else O.push(o.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n}));else O.push(o.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n}));else{var S;(null===(S=n.DependFuncVals)||void 0===S?void 0:S.Value)?l.parts.push(o.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0})):l.showing=!1}else l.preposition=void 0,O.push("that triggers"),O.push(o.a.createElement(R.a,{region:e,id:n.Value}));r&&O.push(")")},S=t(152),h=function(e){Object(i.a)(t,e);var a=Object(_.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"getDataVal",value:function(){var e,a,t=this.props.func;if(this.props.level)return null!==(e=Object(A.i)(t,this.props.level,null!==(a=this.props.overcharge)&&void 0!==a?a:1))&&void 0!==e?e:{};var n=Object(A.d)(t);return Object(A.g)(n)}},{key:"getFollowerDataVal",value:function(){var e=this.props.func;if(Object(A.j)(e)){var a;if(this.props.level)return null!==(a=Object(A.h)(e,this.props.level))&&void 0!==a?a:{};var t=Object(A.e)(e);return Object(A.g)(t)}}},{key:"render",value:function(){var e=this.props.region,a=this.props.func,t=this.getDataVal(),n=this.getFollowerDataVal(),r=new N;!function(e,a,t,n){var r=a.team,i=r.parts;t.funcTargetTeam===d.b.PLAYER?i.push("[Player]"):t.funcTargetTeam===d.b.ENEMY?i.push("[Enemy]"):r.showing=!1}(0,r,a),function(e,a,t,n){var r=a.chance,i=r.parts;n.Rate&&n.Rate<0?i.push("Guaranteed to"):"number"===typeof n.Rate&&1e3!==n.Rate?i.push(n.Rate/10+"% Chance to"):!n.RateCount||t.funcType!==d.d.ENEMY_ENCOUNT_COPY_RATE_UP&&t.funcType!==d.d.ENEMY_ENCOUNT_RATE_UP?n.Rate||t.funcType===d.d.NONE?r.showing=!1:i.push("Chance to"):i.push(Object(T.a)(n.RateCount,1)+" Chance per Target to")}(0,r,a,t),Object(l.a)(e,r,a,t),function(e,a,t,n){var r=a.affects,i=r.parts;if(t.funcType===d.d.DAMAGE_NP_HPRATIO_LOW)i.push("(additional for low HP)");else if("number"!==typeof n.Target||t.funcType!==d.d.DAMAGE_NP_INDIVIDUAL&&t.funcType!==d.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX)if("number"!==typeof n.TargetList&&"string"!==typeof n.TargetList||t.funcType!==d.d.DAMAGE_NP_INDIVIDUAL_SUM)"string"===typeof n.TargetRarityList&&t.funcType===d.d.DAMAGE_NP_RARE?i.push(o.a.createElement("span",null,"(bonus to ",n.TargetRarityList," ",n.TargetRarityList.split("/").length>1?"rarities":"rarity",")")):t.funcType===d.d.DAMAGE_NP_PIERCE&&i.push("(that pierces defense)");else{var _=("number"===typeof n.TargetList?[n.TargetList]:n.TargetList.split("/").map((function(e){return parseInt(e)}))).map((function(a){return o.a.createElement(D.a,{region:e,trait:a})}));i.push(o.a.createElement("span",null,"(bonus per trait of ",Object(T.e)(_," or "),n.ParamAddMaxCount?"[Limit ".concat(n.ParamAddMaxCount,"]"):null,")"))}else i.push(o.a.createElement("span",null,"(additional to targets with ",o.a.createElement(D.a,{region:e,trait:n.Target}),")"));t.funcType!==d.d.ENEMY_ENCOUNT_COPY_RATE_UP&&t.funcType!==d.d.ENEMY_ENCOUNT_RATE_UP&&t.funcType!==d.d.EVENT_DROP_UP||(n.Individuality&&i.push(o.a.createElement("span",null,"with ",o.a.createElement(D.a,{region:e,trait:Number(n.Individuality)}))),n.EventId&&i.push(o.a.createElement("span",null,"during event ",o.a.createElement(D.a,{region:e,trait:Number(n.EventId)})))),t.funcquestTvals.length&&(i.push("if on field"),i.push(Object(T.e)(t.funcquestTvals.map((function(a){return o.a.createElement(D.a,{region:e,trait:a})}))," & "))),t.functvals.length&&(i.push("for targets"),t.functvals.length>1&&i.push("all"),t.functvals.forEach((function(a,t){t>0&&i.push("&"),i.push(o.a.createElement(D.a,{region:e,trait:a}))}))),i.length||(r.showing=!1)}(e,r,a,t),O(e,r,a,t),n&&O(e,r,a,n,!0),Object(S.a)(e,r,a,t),function(e,a,t,n){var r=a.duration,i=r.parts;if(n.Count&&n.Count>0&&n.Turn&&n.Turn>0){var _=1===n.Count?"1 Time":"".concat(n.Count," Times"),s=1===n.Turn?"1 Turn":"".concat(n.Turn," Turns");i.push("(".concat(s,", ").concat(_,")"))}else n.Turn&&n.Turn>0?i.push(1===n.Turn?"(1 Turn)":"(".concat(n.Turn," Turns)")):n.Count&&n.Count>0?i.push(1===n.Count?"(1 Time)":"(".concat(n.Count," Times)")):r.showing=!1}(0,r,0,t),function(e,a,t,n){var r=a.scaling,i=r.parts,_=Object(A.b)(t),s=Object(A.c)(t);_||s?(_&&i.push("<LEVEL>"),s&&i.push("<OVERCHARGE>")):r.showing=!1}(0,r,a);var i=[];return Object.values(r).forEach((function(e){e.showing&&(e.preposition&&i.push(e.preposition),i=i.concat(e.parts))})),i.push(o.a.createElement(c.b,{to:"/".concat(e,"/func/").concat(a.funcId)},o.a.createElement(u.a,{icon:s.d}))),i=Object(T.d)(i," "),o.a.createElement("span",null,i.map((function(e,a){return o.a.createElement(o.a.Fragment,{key:a},e)})))}}]),t}(o.a.Component);a.a=h},134:function(e,a,t){"use strict";var n=t(102),r=t.n(n),i=t(103),_=t(11),s=t(12),u=t(19),E=t(18),o=t(0),c=t.n(o),A=t(13),T=t(105),p=t(122),N=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(_.a)(this,t),(n=a.call(this,e)).state={},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,T.a.skill(this.props.region,this.props.id);case 4:e.t1=e.sent,e.t2={skill:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/".concat(this.props.region,"/skill/").concat(this.props.id);return void 0===this.state.skill?c.a.createElement(A.b,{to:e},"[Skill: ",this.props.id,"]"):c.a.createElement(p.a,{region:this.props.region,skill:this.state.skill})}}]),t}(c.a.Component);a.a=N},136:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),_=t(18),s=t(0),u=t.n(s),E=t(113),o=t(106),c=t(104),A=t(137),T=function(e){Object(i.a)(t,e);var a=Object(_.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t,n,r,i,_,s,T,p=this.props.region,N=this.props.func,l=this.props.dataVal,d=[];if(N.funcType===o.d.ABSORB_NPTURN)switch(this.props.staticDataVal.DependFuncId){case 469:var D=[];(null===(e=l.DependFuncVals)||void 0===e?void 0:e.Value)&&D.push("".concat(Object(c.a)(l.DependFuncVals.Value,2))),"number"===typeof(null===(a=l.DependFuncVals)||void 0===a?void 0:a.Value2)&&D.push("".concat(l.DependFuncVals.Value2/100," Charge")),D.length&&d.push(u.a.createElement(u.a.Fragment,null,"(",Object(c.e)(D," => "),")"));break;case 5061:(null===(t=l.DependFuncVals)||void 0===t?void 0:t.Value)&&d.push(l.DependFuncVals.Value.toString())}if(N.funcType===o.d.GAIN_HP_FROM_TARGETS)switch(this.props.staticDataVal.DependFuncId){case 711:(null===(n=l.DependFuncVals)||void 0===n?void 0:n.Value)&&d.push(null===(r=l.DependFuncVals)||void 0===r?void 0:r.Value.toString())}if(N.funcType===o.d.GAIN_NP_FROM_TARGETS)switch(this.props.staticDataVal.DependFuncId){case 474:var f=[];(null===(i=l.DependFuncVals)||void 0===i?void 0:i.Value)&&f.push("".concat(l.DependFuncVals.Value," Charge")),(null===(_=l.DependFuncVals)||void 0===_?void 0:_.Value2)&&f.push("".concat(Object(c.a)(l.DependFuncVals.Value2,2))),f.length&&d.push(u.a.createElement(u.a.Fragment,null,"(",Object(c.e)(f," => "),")"));break;case 3962:(null===(s=l.DependFuncVals)||void 0===s?void 0:s.Value)&&d.push(Object(c.a)(null===(T=l.DependFuncVals)||void 0===T?void 0:T.Value,2))}if((N.funcType===o.d.ADD_STATE||N.funcType===o.d.ADD_STATE_SHORT)&&N.buffs[0]&&(l.Value||N.buffs[0].type===E.a.DAMAGE_FUNCTION&&l.Value2||N.buffs[0].type===E.a.DEAD_FUNCTION&&l.Value2||N.buffs[0].type===E.a.DELAY_FUNCTION&&l.Value2||N.buffs[0].type===E.a.NPATTACK_PREV_BUFF&&l.SkillID||N.buffs[0].type===E.a.SELFTURNEND_FUNCTION&&l.Value2))return u.a.createElement(A.a,{region:p,buff:N.buffs[0],dataVal:l});if(this.props.hideRate||void 0===l.Rate||d.push(Object(c.a)(l.Rate,1)),void 0!==l.Value)switch(N.funcType){case o.d.DAMAGE_NP:case o.d.DAMAGE_NP_HPRATIO_LOW:case o.d.DAMAGE_NP_INDIVIDUAL:case o.d.DAMAGE_NP_INDIVIDUAL_SUM:case o.d.DAMAGE_NP_PIERCE:case o.d.DAMAGE_NP_RARE:case o.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:case o.d.GAIN_HP_PER:case o.d.QP_DROP_UP:d.push(Object(c.a)(l.Value,1));break;case o.d.GAIN_NP:case o.d.GAIN_NP_BUFF_INDIVIDUAL_SUM:case o.d.LOSS_NP:d.push(Object(c.a)(l.Value,2));break;default:d.push(l.Value.toString())}if(void 0!==l.Value2)switch(N.funcType){case o.d.GAIN_NP_FROM_TARGETS:d.push(Object(c.a)(l.Value2,2));break;case o.d.DAMAGE_NP_INDIVIDUAL_SUM:d.push("additional "+Object(c.a)(l.Value2,1))}if(l.Correction)switch(N.funcType){case o.d.DAMAGE_NP_INDIVIDUAL:case o.d.DAMAGE_NP_RARE:case o.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:d.push(Object(c.a)(l.Correction,1));break;case o.d.DAMAGE_NP_INDIVIDUAL_SUM:d.push("("+Object(c.a)(l.Correction,1)+" x count)");break;default:d.push(l.Correction.toString())}if(void 0!==l.Target)switch(N.funcType){case o.d.DAMAGE_NP_HPRATIO_LOW:d.push(Object(c.a)(l.Target,1))}if(void 0!==l.AddCount&&(N.funcType,d.push(l.AddCount)),l.RateCount)switch(N.funcType){case o.d.QP_DROP_UP:case o.d.SERVANT_FRIENDSHIP_UP:case o.d.USER_EQUIP_EXP_UP:d.push(Object(c.a)(l.RateCount,1));break;default:d.push(l.RateCount)}return d.length?u.a.createElement("span",null,Object(c.e)(d," + ")):u.a.createElement("span",null,"-")}}]),t}(u.a.Component);a.a=T},137:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),_=t(18),s=t(0),u=t.n(s),E=t(113),o=t(104),c=t(111),A=function(e){Object(i.a)(t,e);var a=Object(_.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t=null;switch(this.props.buff.type){case E.a.UP_ATK:case E.a.DOWN_ATK:case E.a.UP_COMMANDALL:case E.a.DOWN_COMMANDALL:case E.a.UP_CRITICALDAMAGE:case E.a.DOWN_CRITICALDAMAGE:case E.a.UP_CRITICALPOINT:case E.a.DOWN_CRITICALPOINT:case E.a.UP_CRITICALRATE:case E.a.DOWN_CRITICALRATE:case E.a.UP_CRITICAL_RATE_DAMAGE_TAKEN:case E.a.DOWN_CRITICAL_RATE_DAMAGE_TAKEN:case E.a.UP_DAMAGE:case E.a.DOWN_DAMAGE:case E.a.UP_DAMAGEDROPNP:case E.a.DOWN_DAMAGEDROPNP:case E.a.UP_DEFENCE:case E.a.DOWN_DEFENCE:case E.a.UP_DEFENCECOMMANDALL:case E.a.DOWN_DEFENCECOMMANDALL:case E.a.UP_DROPNP:case E.a.DOWN_DROPNP:case E.a.UP_FUNC_HP_REDUCE:case E.a.DOWN_FUNC_HP_REDUCE:case E.a.UP_HATE:case E.a.UP_NONRESIST_INSTANTDEATH:case E.a.UP_NPDAMAGE:case E.a.DOWN_NPDAMAGE:case E.a.UP_SPECIALDEFENCE:case E.a.DOWN_SPECIALDEFENCE:case E.a.UP_STARWEIGHT:case E.a.DOWN_STARWEIGHT:case E.a.UP_TOLERANCE:case E.a.DOWN_TOLERANCE:case E.a.UP_TOLERANCE_SUBSTATE:case E.a.DOWN_TOLERANCE_SUBSTATE:t=Object(o.a)(this.props.dataVal.Value,1);break;case E.a.REGAIN_NP:t=Object(o.a)(this.props.dataVal.Value,2);break;case E.a.ATTACK_FUNCTION:case E.a.COMMANDATTACK_FUNCTION:case E.a.COMMANDATTACK_BEFORE_FUNCTION:case E.a.DAMAGE_FUNCTION:case E.a.DEAD_FUNCTION:case E.a.DELAY_FUNCTION:case E.a.SELFTURNEND_FUNCTION:this.props.dataVal.Value2&&(t="Lv. "+this.props.dataVal.Value2);break;case E.a.NPATTACK_PREV_BUFF:this.props.dataVal.SkillLV&&(t="Lv. "+this.props.dataVal.SkillLV);break;case E.a.FIELD_INDIVIDUALITY:"number"===typeof this.props.dataVal.Value&&(t=u.a.createElement(c.a,{region:this.props.region,trait:this.props.dataVal.Value}));break;default:t=null!==(e=null===(a=this.props.dataVal.Value)||void 0===a?void 0:a.toString())&&void 0!==e?e:""}return t}}]),t}(u.a.Component);a.a=A},151:function(e,a,t){"use strict";t.d(a,"b",(function(){return E}));var n=t(0),r=t.n(n),i=t(113),_=t(106),s=t(142),u=t(111),E=new Map([[_.d.ABSORB_NPTURN,"Absorb Charge"],[_.d.ADD_STATE,"Apply Buff"],[_.d.ADD_STATE_SHORT,"Apply Buff"],[_.d.CARD_RESET,"Shuffle Cards"],[_.d.DAMAGE_NP,"Deal Damage"],[_.d.DAMAGE_NP_HPRATIO_LOW,"Deal Damage with Bonus for Low Health"],[_.d.DAMAGE_NP_INDIVIDUAL,"Deal Damage with Bonus to Trait"],[_.d.DAMAGE_NP_INDIVIDUAL_SUM,"Deal Damage with Bonus per Trait"],[_.d.DAMAGE_NP_PIERCE,"Deal Damage that pierces defense"],[_.d.DAMAGE_NP_RARE,"Deal Damage with Bonus to Rarity"],[_.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX,"Deal Damage with Bonus to Trait"],[_.d.DELAY_NPTURN,"Drain Charge"],[_.d.EVENT_DROP_UP,"Increase Drop Amount"],[_.d.ENEMY_ENCOUNT_COPY_RATE_UP,"Create Clone of Enemy"],[_.d.ENEMY_ENCOUNT_RATE_UP,"Improve Appearance Rate of Enemy"],[_.d.EXP_UP,"Increase Master Exp"],[_.d.EXTEND_SKILL,"Increase Cooldowns"],[_.d.FIX_COMMANDCARD,"Lock Command Cards"],[_.d.FORCE_INSTANT_DEATH,"Force Instant Death"],[_.d.GAIN_HP,"Restore HP"],[_.d.GAIN_HP_FROM_TARGETS,"Absorb HP"],[_.d.GAIN_HP_PER,"Restore HP to Percent"],[_.d.GAIN_NP,"Charge NP"],[_.d.GAIN_NP_BUFF_INDIVIDUAL_SUM,"Charge NP per Trait"],[_.d.GAIN_NP_FROM_TARGETS,"Absorb NP"],[_.d.GAIN_STAR,"Gain Critical Stars"],[_.d.HASTEN_NPTURN,"Increase Charge"],[_.d.INSTANT_DEATH,"Apply Death"],[_.d.LOSS_HP,"Drain HP"],[_.d.LOSS_HP_SAFE,"Drain HP without killing"],[_.d.LOSS_NP,"Drain NP"],[_.d.LOSS_STAR,"Remove Critical Stars"],[_.d.NONE,"No Effect"],[_.d.QP_DROP_UP,"Increase QP Reward"],[_.d.QP_UP,"Increase QP Reward"],[_.d.REPLACE_MEMBER,"Swap members"],[_.d.SERVANT_FRIENDSHIP_UP,"Increase Bond Gain"],[_.d.SHORTEN_SKILL,"Reduce Cooldowns"],[_.d.SUB_STATE,"Remove Effects"],[_.d.USER_EQUIP_EXP_UP,"Increase Mystic Code Exp"]]);a.a=function(e,a,t,n){var o,c=a.action.parts;if(t.funcType!==_.d.ADD_STATE&&t.funcType!==_.d.ADD_STATE_SHORT)if(t.funcType!==_.d.SUB_STATE)if(t.funcType!==_.d.GAIN_NP_BUFF_INDIVIDUAL_SUM){if(t.funcType===_.d.DAMAGE_NP||t.funcType===_.d.DAMAGE_NP_HPRATIO_LOW||t.funcType===_.d.DAMAGE_NP_INDIVIDUAL||t.funcType===_.d.DAMAGE_NP_INDIVIDUAL_SUM||t.funcType===_.d.DAMAGE_NP_PIERCE||t.funcType===_.d.DAMAGE_NP_RARE||t.funcType===_.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX)return c.push("Deal damage"),void(a.amount.preposition="of");switch(t.funcType){case _.d.ABSORB_NPTURN:case _.d.GAIN_HP_FROM_TARGETS:case _.d.GAIN_NP_FROM_TARGETS:a.amount.preposition="of",a.target.preposition="from";break;case _.d.CARD_RESET:case _.d.GAIN_STAR:case _.d.LOSS_STAR:case _.d.NONE:a.target.showing=!1;break;case _.d.DELAY_NPTURN:case _.d.LOSS_HP:case _.d.LOSS_HP_SAFE:case _.d.LOSS_NP:a.amount.preposition="by",a.target.preposition="from";break;case _.d.ENEMY_ENCOUNT_COPY_RATE_UP:case _.d.ENEMY_ENCOUNT_RATE_UP:case _.d.FIX_COMMANDCARD:a.amount.showing=!1,a.target.showing=!1;break;case _.d.EVENT_DROP_UP:case _.d.EXP_UP:case _.d.QP_DROP_UP:case _.d.QP_UP:case _.d.SERVANT_FRIENDSHIP_UP:case _.d.USER_EQUIP_EXP_UP:a.chance.showing=!1,a.amount.preposition="by",a.target.showing=!1;break;case _.d.EXTEND_SKILL:case _.d.GAIN_HP:case _.d.GAIN_NP:case _.d.HASTEN_NPTURN:case _.d.SHORTEN_SKILL:a.amount.preposition="by",a.target.preposition="for";break;case _.d.FORCE_INSTANT_DEATH:case _.d.INSTANT_DEATH:a.amount.showing=!1,a.target.preposition="on";break;case _.d.GAIN_HP_PER:a.amount.preposition="of",a.target.preposition="for";break;case _.d.REPLACE_MEMBER:a.amount.showing=!1,a.target.preposition="with"}c.push(null!==(o=E.get(t.funcType))&&void 0!==o?o:t.funcType)}else!function(e,a,t,n){var i,_=a.action.parts;_.push("Charge NP per"),(null===(i=t.traitVals)||void 0===i?void 0:i.length)&&t.traitVals.forEach((function(a,t){t>0&&_.push("&"),_.push(r.a.createElement(u.a,{region:e,trait:a}))})),_.push("traits"),a.amount.preposition="by",a.target.preposition="for"}(e,a,t);else!function(e,a,t,n){var i,_,s=a.action.parts;s.push(null!==(i=E.get(t.funcType))&&void 0!==i?i:t.funcType),(null===(_=t.traitVals)||void 0===_?void 0:_.length)&&(s.push("with"),t.traitVals.forEach((function(a,t){t>0&&s.push("or"),s.push(r.a.createElement(u.a,{region:e,trait:a}))}))),a.target.preposition="on"}(e,a,t);else!function(e,a,t,n){var _,u,E,o=a.action.parts;o.push("Apply"),t.buffs.forEach((function(a,t){t>0&&o.push("&"),o.push(r.a.createElement(s.a,{region:e,buff:a}))})),(null===(_=t.buffs[0])||void 0===_?void 0:_.type)===i.a.FIELD_INDIVIDUALITY&&(a.amount.preposition="to"),a.target.preposition="on",(null===(u=t.buffs[0])||void 0===u?void 0:u.type)!==i.a.COMMANDATTACK_FUNCTION&&(null===(E=t.buffs[0])||void 0===E?void 0:E.type)!==i.a.NPATTACK_PREV_BUFF||(a.target.preposition="for")}(e,a,t)}},152:function(e,a,t){"use strict";t.d(a,"b",(function(){return r}));var n=t(106),r=new Map([[n.c.SELF,"self"],[n.c.PT_ONE,"party member"],[n.c.PT_ALL,"party"],[n.c.ENEMY,"enemy"],[n.c.ENEMY_ALL,"enemies"],[n.c.PT_FULL,"party (including reserve)"],[n.c.ENEMY_FULL,"enemies (including reserve)"],[n.c.PT_OTHER,"party except self"],[n.c.PT_ONE_OTHER,"other party members besides target"],[n.c.PT_RANDOM,"random party member"],[n.c.ENEMY_OTHER,"other enemies besides target"],[n.c.ENEMY_RANDOM,"random enemy"],[n.c.PT_OTHER_FULL,"party except self (including reserve)"],[n.c.ENEMY_OTHER_FULL,"other enemies (including reserve)"],[n.c.PTSELECT_ONE_SUB,"active party member and reserve party member"],[n.c.PTSELECT_SUB,"reserve party member"],[n.c.PT_ONE_ANOTHER_RANDOM,"other random party member"],[n.c.PT_SELF_ANOTHER_RANDOM,"other random party member (except self)"],[n.c.ENEMY_ONE_ANOTHER_RANDOM,"other random enemy"],[n.c.PT_SELF_ANOTHER_FIRST,"first other party member (except self)"],[n.c.COMMAND_TYPE_SELF_TREASURE_DEVICE,"target noble phantasm version"]]);a.a=function(e,a,t,i){var _,s=a.target,u=s.parts,E=t.funcTargetType;if(t.funcType===n.d.ABSORB_NPTURN)switch(i.DependFuncId){case 469:E=n.c.ENEMY_ALL;break;case 5061:E=n.c.PT_OTHER}else if(t.funcType===n.d.GAIN_HP_FROM_TARGETS)switch(i.DependFuncId){case 711:E=n.c.ENEMY_ALL;break;default:E=void 0,s.showing=!1}else if(t.funcType===n.d.GAIN_NP_FROM_TARGETS)switch(i.DependFuncId){case 474:E=n.c.ENEMY_ALL;break;case 3962:E=n.c.PT_OTHER}E&&u.push(null!==(_=r.get(E))&&void 0!==_?_:E)}}}]);
//# sourceMappingURL=3.5a69aec0.chunk.js.map