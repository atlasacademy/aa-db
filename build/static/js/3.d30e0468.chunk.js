(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[3],{119:function(e,a,t){"use strict";var n,r,i,u;t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return u})),function(e){e.NONE="none",e.ADD_STATE="addState",e.SUB_STATE="subState",e.DAMAGE="damage",e.DAMAGE_NP="damageNp",e.GAIN_STAR="gainStar",e.GAIN_HP="gainHp",e.GAIN_NP="gainNp",e.LOSS_NP="lossNp",e.SHORTEN_SKILL="shortenSkill",e.EXTEND_SKILL="extendSkill",e.RELEASE_STATE="releaseState",e.LOSS_HP="lossHp",e.INSTANT_DEATH="instantDeath",e.DAMAGE_NP_PIERCE="damageNpPierce",e.DAMAGE_NP_INDIVIDUAL="damageNpIndividual",e.ADD_STATE_SHORT="addStateShort",e.GAIN_HP_PER="gainHpPer",e.DAMAGE_NP_STATE_INDIVIDUAL="damageNpStateIndividual",e.HASTEN_NPTURN="hastenNpturn",e.DELAY_NPTURN="delayNpturn",e.DAMAGE_NP_HPRATIO_HIGH="damageNpHpratioHigh",e.DAMAGE_NP_HPRATIO_LOW="damageNpHpratioLow",e.CARD_RESET="cardReset",e.REPLACE_MEMBER="replaceMember",e.LOSS_HP_SAFE="lossHpSafe",e.DAMAGE_NP_COUNTER="damageNpCounter",e.DAMAGE_NP_STATE_INDIVIDUAL_FIX="damageNpStateIndividualFix",e.DAMAGE_NP_SAFE="damageNpSafe",e.CALL_SERVANT="callServant",e.PT_SHUFFLE="ptShuffle",e.LOSS_STAR="lossStar",e.CHANGE_SERVANT="changeServant",e.CHANGE_BG="changeBg",e.DAMAGE_VALUE="damageValue",e.WITHDRAW="withdraw",e.FIX_COMMANDCARD="fixCommandcard",e.SHORTEN_BUFFTURN="shortenBuffturn",e.EXTEND_BUFFTURN="extendBuffturn",e.SHORTEN_BUFFCOUNT="shortenBuffcount",e.EXTEND_BUFFCOUNT="extendBuffcount",e.CHANGE_BGM="changeBgm",e.DISPLAY_BUFFSTRING="displayBuffstring",e.RESURRECTION="resurrection",e.GAIN_NP_BUFF_INDIVIDUAL_SUM="gainNpBuffIndividualSum",e.SET_SYSTEM_ALIVE_FLAG="setSystemAliveFlag",e.FORCE_INSTANT_DEATH="forceInstantDeath",e.DAMAGE_NP_RARE="damageNpRare",e.GAIN_NP_FROM_TARGETS="gainNpFromTargets",e.GAIN_HP_FROM_TARGETS="gainHpFromTargets",e.LOSS_HP_PER="lossHpPer",e.LOSS_HP_PER_SAFE="lossHpPerSafe",e.SHORTEN_USER_EQUIP_SKILL="shortenUserEquipSkill",e.QUICK_CHANGE_BG="quickChangeBg",e.SHIFT_SERVANT="shiftServant",e.DAMAGE_NP_AND_CHECK_INDIVIDUALITY="damageNpAndCheckIndividuality",e.ABSORB_NPTURN="absorbNpturn",e.OVERWRITE_DEAD_TYPE="overwriteDeadType",e.FORCE_ALL_BUFF_NOACT="forceAllBuffNoact",e.BREAK_GAUGE_UP="breakGaugeUp",e.BREAK_GAUGE_DOWN="breakGaugeDown",e.EXP_UP="expUp",e.QP_UP="qpUp",e.DROP_UP="dropUp",e.FRIEND_POINT_UP="friendPointUp",e.EVENT_DROP_UP="eventDropUp",e.EVENT_DROP_RATE_UP="eventDropRateUp",e.EVENT_POINT_UP="eventPointUp",e.EVENT_POINT_RATE_UP="eventPointRateUp",e.TRANSFORM_SERVANT="transformServant",e.QP_DROP_UP="qpDropUp",e.SERVANT_FRIENDSHIP_UP="servantFriendshipUp",e.USER_EQUIP_EXP_UP="userEquipExpUp",e.CLASS_DROP_UP="classDropUp",e.ENEMY_ENCOUNT_COPY_RATE_UP="enemyEncountCopyRateUp",e.ENEMY_ENCOUNT_RATE_UP="enemyEncountRateUp",e.ENEMY_PROB_DOWN="enemyProbDown",e.GET_REWARD_GIFT="getRewardGift",e.SEND_SUPPORT_FRIEND_POINT="sendSupportFriendPoint",e.MOVE_POSITION="movePosition",e.REVIVAL="revival",e.DAMAGE_NP_INDIVIDUAL_SUM="damageNpIndividualSum"}(n||(n={})),function(e){e.SELF="self",e.PT_ONE="ptOne",e.PT_ANOTHER="ptAnother",e.PT_ALL="ptAll",e.ENEMY="enemy",e.ENEMY_ANOTHER="enemyAnother",e.ENEMY_ALL="enemyAll",e.PT_FULL="ptFull",e.ENEMY_FULL="enemyFull",e.PT_OTHER="ptOther",e.PT_ONE_OTHER="ptOneOther",e.PT_RANDOM="ptRandom",e.ENEMY_OTHER="enemyOther",e.ENEMY_RANDOM="enemyRandom",e.PT_OTHER_FULL="ptOtherFull",e.ENEMY_OTHER_FULL="enemyOtherFull",e.PTSELECT_ONE_SUB="ptselectOneSub",e.PTSELECT_SUB="ptselectSub",e.PT_ONE_ANOTHER_RANDOM="ptOneAnotherRandom",e.PT_SELF_ANOTHER_RANDOM="ptSelfAnotherRandom",e.ENEMY_ONE_ANOTHER_RANDOM="enemyOneAnotherRandom",e.PT_SELF_ANOTHER_FIRST="ptSelfAnotherFirst",e.PT_SELF_BEFORE="ptSelfBefore",e.PT_SELF_AFTER="ptSelfAfter",e.PT_SELF_ANOTHER_LAST="ptSelfAnotherLast",e.COMMAND_TYPE_SELF_TREASURE_DEVICE="commandTypeSelfTreasureDevice"}(r||(r={})),function(e){e.PLAYER="player",e.ENEMY="enemy",e.PLAYER_AND_ENEMY="playerAndEnemy"}(i||(i={})),function(e){e.RATE="Rate",e.TURN="Turn",e.COUNT="Count",e.VALUE="Value",e.VALUE2="Value2",e.USE_RATE="UseRate",e.TARGET="Target",e.CORRECTION="Correction",e.PARAM_ADD="ParamAdd",e.PARAM_MAX="ParamMax",e.HIDE_MISS="HideMiss",e.ON_FIELD="OnField",e.HIDE_NO_EFFECT="HideNoEffect",e.UNAFFECTED="Unaffected",e.SHOW_STATE="ShowState",e.AURA_EFFECT_ID="AuraEffectId",e.ACT_SET="ActSet",e.ACT_SET_WEIGHT="ActSetWeight",e.SHOW_QUEST_NO_EFFECT="ShowQuestNoEffect",e.CHECK_DEAD="CheckDead",e.RATIO_HP_HIGH="RatioHPHigh",e.RATIO_HP_LOW="RatioHPLow",e.SET_PASSIVE_FRAME="SetPassiveFrame",e.PROC_PASSIVE="ProcPassive",e.PROC_ACTIVE="ProcActive",e.HIDE_PARAM="HideParam",e.SKILL_ID="SkillID",e.SKILL_LV="SkillLV",e.SHOW_CARD_ONLY="ShowCardOnly",e.EFFECT_SUMMON="EffectSummon",e.RATIO_HP_RANGE_HIGH="RatioHPRangeHigh",e.RATIO_HP_RANGE_LOW="RatioHPRangeLow",e.TARGET_LIST="TargetList",e.OPPONENT_ONLY="OpponentOnly",e.STATUS_EFFECT_ID="StatusEffectId",e.END_BATTLE="EndBattle",e.LOSE_BATTLE="LoseBattle",e.ADD_INDIVIDUALTY="AddIndividualty",e.ADD_LINKAGE_TARGET_INDIVIDUALTY="AddLinkageTargetIndividualty",e.SAME_BUFF_LIMIT_TARGET_INDIVIDUALITY="SameBuffLimitTargetIndividuality",e.SAME_BUFF_LIMIT_NUM="SameBuffLimitNum",e.CHECK_DUPLICATE="CheckDuplicate",e.ON_FIELD_COUNT="OnFieldCount",e.TARGET_RARITY_LIST="TargetRarityList",e.DEPEND_FUNC_ID="DependFuncId",e.INVALID_HIDE="InvalidHide",e.OUT_ENEMY_NPC_ID="OutEnemyNpcId",e.IN_ENEMY_NPC_ID="InEnemyNpcId",e.OUT_ENEMY_POSITION="OutEnemyPosition",e.IGNORE_INDIVIDUALITY="IgnoreIndividuality",e.STAR_HIGHER="StarHigher",e.CHANGE_TD_COMMAND_TYPE="ChangeTDCommandType",e.SHIFT_NPC_ID="ShiftNpcId",e.DISPLAY_LAST_FUNC_INVALID_TYPE="DisplayLastFuncInvalidType",e.AND_CHECK_INDIVIDUALITY_LIST="AndCheckIndividualityList",e.WIN_BATTLE_NOT_RELATED_SURVIVAL_STATUS="WinBattleNotRelatedSurvivalStatus",e.FORCE_SELF_INSTANT_DEATH="ForceSelfInstantDeath",e.CHANGE_MAX_BREAK_GAUGE="ChangeMaxBreakGauge",e.PARAM_ADD_MAX_VALUE="ParamAddMaxValue",e.PARAM_ADD_MAX_COUNT="ParamAddMaxCount",e.LOSS_HP_NO_CHANGE_DAMAGE="LossHpNoChangeDamage",e.INCLUDE_PASSIVE_INDIVIDUALITY="IncludePassiveIndividuality"}(u||(u={}))},122:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return A})),t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return T})),t.d(a,"e",(function(){return l})),t.d(a,"f",(function(){return d})),t.d(a,"g",(function(){return f}));var n=t(0),r=t.n(n),i=t(126),u=t(119),s=t(155),_=function(e){if(!e.length)return!1;for(var a=e[0],t=1;t<e.length;t++){if(JSON.stringify(a)!==JSON.stringify(e[t]))return!0;a=e[t]}return!1},E=function(e){return new Set(e).size>1};function c(e,a){var t=T(a),n=d(t);return function e(a){if(!a.length)return[];var t=function(e){return Object.values(u.a).filter((function(a){var t=e.map((function(e){return e[a]}));return E(t)}))}(a),n=a.filter((function(e){return void 0!==e.DependFuncVals})).length>0?a.map((function(e){var a;return null!==(a=e.DependFuncVals)&&void 0!==a?a:{}})):void 0,r=n?e(n):[],i=d(a);return a.map((function(e,a){var n={};for(var u in t)n[t[u]]=e[t[u]];return i.DependFuncId&&r[a]&&(n.DependFuncId=i.DependFuncId,n.DependFuncVals=r[a]),n}))}(t).map((function(t){return r.a.createElement(s.a,{region:e,func:a,staticDataVal:n,dataVal:t})}))}function A(e){return _(p(e))}function o(e){return _(N(e))}function T(e){var a=A(e),t=o(e);return a&&t?function(e){for(var a=[],t=1;t<=5;t++){var n=f(e,t,t);void 0!==n&&a.push(n)}return a}(e):t?N(e):p(e)}function p(e){var a;return null!==(a=e.svals)&&void 0!==a?a:[]}function N(e){for(var a=[],t=1;t<=5;t++){var n=f(e,1,t);void 0!==n&&a.push(n)}return a}function l(e){if(e.funcType!==u.d.ADD_STATE&&e.funcType!==u.d.ADD_STATE_SHORT)return[];var a=e.buffs[0];if(a.type===i.a.ATTACK_FUNCTION||a.type===i.a.COMMANDATTACK_FUNCTION||a.type===i.a.COMMANDATTACK_BEFORE_FUNCTION||a.type===i.a.COMMANDCODEATTACK_FUNCTION||a.type===i.a.DAMAGE_FUNCTION||a.type===i.a.DEAD_FUNCTION||a.type===i.a.DELAY_FUNCTION||a.type===i.a.SELFTURNEND_FUNCTION){var t=T(e)[0];return"number"===typeof t.Value?[t.Value]:[]}if(a.type===i.a.NPATTACK_PREV_BUFF){var n=T(e)[0];return"number"===typeof n.SkillID?[n.SkillID]:[]}return[]}function d(e){if(!e.length)return{};var a=function(e){return Object.values(u.a).filter((function(a){var t=e.map((function(e){return e[a]}));return!E(t)}))}(e),t={},n=e.filter((function(e){return void 0!==e.DependFuncVals})).length>0,r=n?e.map((function(e){var a;return null!==(a=e.DependFuncVals)&&void 0!==a?a:{}})):void 0,i=r?d(r):void 0;for(var s in a)t[a[s]]=e[0][a[s]];return n&&(t.DependFuncVals=i),t}function f(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(void 0!==e.svals)return(2===t&&e.svals2?e.svals2:3===t&&e.svals3?e.svals3:4===t&&e.svals4?e.svals4:5===t&&e.svals5?e.svals5:e.svals)[a-1]}},124:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),u=t(18),s=t(53),_=t(30),E=t(0),c=t.n(E),A=t(13),o=t(122),T=t(100),p=function e(a){Object(n.a)(this,e),this.showing=!0,this.parts=[],this.preposition=void 0,this.preposition=a},N=function e(){Object(n.a)(this,e),this.team=new p,this.chance=new p,this.action=new p,this.affects=new p,this.amount=new p("of"),this.target=new p("to"),this.duration=new p,this.scaling=new p},l=t(157),d=t(119),f=t(114),D=t(126),I=t(156),O=t(155),R=t(136),P=t(158),S=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"getDataVal",value:function(){var e,a,t=this.props.func;if(this.props.level)return null!==(e=Object(o.g)(t,this.props.level,null!==(a=this.props.overcharge)&&void 0!==a?a:1))&&void 0!==e?e:{};var n=Object(o.d)(t);return Object(o.f)(n)}},{key:"render",value:function(){var e=this.props.region,a=this.props.func,t=this.getDataVal(),n=new N;!function(e,a,t,n){var r=a.team,i=r.parts;t.funcTargetTeam===d.b.PLAYER?i.push("[Player]"):t.funcTargetTeam===d.b.ENEMY?i.push("[Enemy]"):r.showing=!1}(0,n,a),function(e,a,t,n){var r=a.chance,i=r.parts;n.Rate&&n.Rate<0?i.push("Guaranteed to"):"number"===typeof n.Rate&&1e3!==n.Rate?i.push(n.Rate/10+"% Chance to"):n.Rate||t.funcType===d.d.NONE?r.showing=!1:i.push("Chance to")}(0,n,a,t),Object(l.a)(e,n,a,t),function(e,a,t,n){var r=a.affects,i=r.parts;"number"!==typeof n.Target||t.funcType!==d.d.DAMAGE_NP_INDIVIDUAL&&t.funcType!==d.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX?"number"===typeof n.TargetList&&t.funcType===d.d.DAMAGE_NP_INDIVIDUAL_SUM?i.push(c.a.createElement("span",null,"(bonus per trait of ",c.a.createElement(f.a,{region:e,trait:n.TargetList}),n.ParamAddMaxCount?"[Limit ".concat(n.ParamAddMaxCount,"]"):null,")")):"string"===typeof n.TargetRarityList&&t.funcType===d.d.DAMAGE_NP_RARE?i.push(c.a.createElement("span",null,"(bonus to ",n.TargetRarityList," ",n.TargetRarityList.split("/").length>1?"rarities":"rarity",")")):t.funcType===d.d.DAMAGE_NP_PIERCE&&i.push("(that pierces defense)"):i.push(c.a.createElement("span",null,"(additional to targets with ",c.a.createElement(f.a,{region:e,trait:n.Target}),")")),t.funcquestTvals.length&&(i.push("if on field"),i.push(Object(T.e)(t.funcquestTvals.map((function(a){return c.a.createElement(f.a,{region:e,trait:a})}))," & "))),t.functvals.length&&(i.push("for"),t.functvals.length>1&&i.push("all"),t.functvals.forEach((function(a,t){t>0&&i.push("&"),i.push(c.a.createElement(f.a,{region:e,trait:a}))}))),i.length||(r.showing=!1)}(e,n,a,t),function(e,a,t,n){var r,i,u,s,_,E,A,o,T,p,N=a.amount,l=N.parts;if((null===(r=t.buffs[0])||void 0===r?void 0:r.type)===D.a.ADD_INDIVIDUALITY&&"number"===typeof n.Value)l.push(c.a.createElement(f.a,{region:e,trait:n.Value}));else if((null===(i=t.buffs[0])||void 0===i?void 0:i.type)!==D.a.ATTACK_FUNCTION&&(null===(u=t.buffs[0])||void 0===u?void 0:u.type)!==D.a.COMMANDATTACK_FUNCTION&&(null===(s=t.buffs[0])||void 0===s?void 0:s.type)!==D.a.COMMANDATTACK_BEFORE_FUNCTION&&(null===(_=t.buffs[0])||void 0===_?void 0:_.type)!==D.a.COMMANDCODEATTACK_FUNCTION&&(null===(E=t.buffs[0])||void 0===E?void 0:E.type)!==D.a.DAMAGE_FUNCTION&&(null===(A=t.buffs[0])||void 0===A?void 0:A.type)!==D.a.DEAD_FUNCTION&&(null===(o=t.buffs[0])||void 0===o?void 0:o.type)!==D.a.DELAY_FUNCTION&&(null===(T=t.buffs[0])||void 0===T?void 0:T.type)!==D.a.SELFTURNEND_FUNCTION||"number"!==typeof n.Value)if(t.funcType===d.d.CARD_RESET&&n.Value)N.preposition=void 0,l.push("".concat(n.Value," time").concat(n.Value>1?"s":""));else if(t.funcType===d.d.DAMAGE_NP_INDIVIDUAL_SUM)l.push(c.a.createElement(O.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0}));else if(t.funcType!==d.d.GAIN_HP_FROM_TARGETS&&t.funcType!==d.d.GAIN_NP_FROM_TARGETS||!n.DependFuncId)if((null===(p=t.buffs[0])||void 0===p?void 0:p.type)===D.a.NPATTACK_PREV_BUFF){if("number"!==typeof n.SkillID)return void(N.showing=!1);N.preposition=void 0,l.push("that triggers"),l.push(c.a.createElement(R.a,{region:e,id:n.SkillID}))}else t.buffs[0]&&n.Value?l.push(c.a.createElement(I.a,{region:e,buff:t.buffs[0],dataVal:n})):n.Value?l.push(c.a.createElement(O.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0})):N.showing=!1;else{var P;(null===(P=n.DependFuncVals)||void 0===P?void 0:P.Value)?N.parts.push(c.a.createElement(O.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0})):N.showing=!1}else N.preposition=void 0,l.push("that triggers"),l.push(c.a.createElement(R.a,{region:e,id:n.Value}))}(e,n,a,t),Object(P.a)(e,n,a,t),function(e,a,t,n){var r=a.duration,i=r.parts;if(n.Count&&n.Count>0&&n.Turn&&n.Turn>0){var u=1===n.Count?"1 Time":"".concat(n.Count," Times"),s=1===n.Turn?"1 Turn":"".concat(n.Turn," Turns");i.push("(".concat(s,", ").concat(u,")"))}else n.Turn&&n.Turn>0?i.push(1===n.Turn?"(1 Turn)":"(".concat(n.Turn," Turns)")):n.Count&&n.Count>0?i.push(1===n.Count?"(1 Time)":"(".concat(n.Count," Times)")):r.showing=!1}(0,n,0,t),function(e,a,t,n){var r=a.scaling,i=r.parts,u=Object(o.b)(t),s=Object(o.c)(t);u||s?(u&&i.push("<LEVEL>"),s&&i.push("<OVERCHARGE>")):r.showing=!1}(0,n,a);var r=[];return Object.values(n).forEach((function(e){e.showing&&(e.preposition&&r.push(e.preposition),r=r.concat(e.parts))})),r.push(c.a.createElement(A.b,{to:"/".concat(e,"/func/").concat(a.funcId)},c.a.createElement(_.a,{icon:s.d}))),r=Object(T.d)(r," "),c.a.createElement("span",null,r.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:a},e)})))}}]),t}(c.a.Component);a.a=S},127:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),u=t(18),s=t(0),_=t.n(s),E=t(13),c=t(121),A=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return _.a.createElement(E.b,{to:"/".concat(this.props.region,"/skill/").concat(this.props.skill.id)},"[",_.a.createElement(c.a,{location:this.props.skill.icon,height:this.props.iconHeight})," ",this.props.skill.name?this.props.skill.name:"Skill: ".concat(this.props.skill.id),"]")}}]),t}(_.a.Component);a.a=A},136:function(e,a,t){"use strict";var n=t(97),r=t.n(n),i=t(98),u=t(11),s=t(12),_=t(19),E=t(18),c=t(0),A=t.n(c),o=t(13),T=t(99),p=t(127),N=function(e){Object(_.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,T.a.skill(this.props.region,this.props.id);case 4:e.t1=e.sent,e.t2={skill:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/".concat(this.props.region,"/skill/").concat(this.props.id);return void 0===this.state.skill?A.a.createElement(o.b,{to:e},"[Skill: ",this.props.id,"]"):A.a.createElement(p.a,{region:this.props.region,skill:this.state.skill})}}]),t}(A.a.Component);a.a=N},155:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),u=t(18),s=t(0),_=t.n(s),E=t(126),c=t(119),A=t(100),o=t(156),T=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t=this.props.region,n=this.props.func,r=this.props.dataVal,i=[];if(this.props.func.funcType===c.d.GAIN_NP_FROM_TARGETS)switch(this.props.staticDataVal.DependFuncId){case 474:if((null===(e=this.props.dataVal.DependFuncVals)||void 0===e?void 0:e.Value)&&i.push("".concat(this.props.dataVal.DependFuncVals.Value," Charge")),(null===(a=this.props.dataVal.DependFuncVals)||void 0===a?void 0:a.Value2)&&i.push("".concat(Object(A.a)(this.props.dataVal.DependFuncVals.Value2,2))),i.length)return _.a.createElement(_.a.Fragment,null,"(",Object(A.e)(i," => "),")")}if((n.funcType===c.d.ADD_STATE||n.funcType===c.d.ADD_STATE_SHORT)&&n.buffs[0]&&(r.Value||n.buffs[0].type===E.a.DAMAGE_FUNCTION&&r.Value2||n.buffs[0].type===E.a.DEAD_FUNCTION&&r.Value2||n.buffs[0].type===E.a.DELAY_FUNCTION&&r.Value2||n.buffs[0].type===E.a.NPATTACK_PREV_BUFF&&r.SkillID||n.buffs[0].type===E.a.SELFTURNEND_FUNCTION&&r.Value2))return _.a.createElement(o.a,{region:t,buff:n.buffs[0],dataVal:r});if(this.props.hideRate||void 0===r.Rate||i.push(Object(A.a)(r.Rate,1)),void 0!==r.Value)switch(n.funcType){case c.d.DAMAGE_NP:case c.d.DAMAGE_NP_INDIVIDUAL:case c.d.DAMAGE_NP_INDIVIDUAL_SUM:case c.d.DAMAGE_NP_PIERCE:case c.d.DAMAGE_NP_RARE:case c.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:i.push(Object(A.a)(r.Value,1));break;case c.d.GAIN_NP:case c.d.LOSS_NP:i.push(Object(A.a)(r.Value,2));break;default:i.push(r.Value.toString())}if(void 0!==r.Value2)switch(n.funcType){case c.d.GAIN_NP_FROM_TARGETS:i.push(Object(A.a)(r.Value2,2));break;case c.d.DAMAGE_NP_INDIVIDUAL_SUM:i.push("additional "+Object(A.a)(r.Value2,1))}if(void 0!==r.Correction)switch(n.funcType){case c.d.DAMAGE_NP_INDIVIDUAL:case c.d.DAMAGE_NP_RARE:case c.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:i.push(Object(A.a)(r.Correction,1));break;case c.d.DAMAGE_NP_INDIVIDUAL_SUM:i.push("("+Object(A.a)(r.Correction,1)+" x count)");break;default:i.push(r.Correction.toString())}if(void 0!==r.DependFuncId&&void 0!==r.DependFuncVals)switch(n.funcType){case c.d.GAIN_HP_FROM_TARGETS:var u;switch(r.DependFuncId){case 711:u=r.DependFuncVals.Value}void 0!==u&&i.push(u);break;case c.d.GAIN_NP_FROM_TARGETS:var s;switch(r.DependFuncId){case 474:s=r.DependFuncVals.Value2;break;case 3962:s=r.DependFuncVals.Value}void 0!==s&&i.push(Object(A.a)(s,2))}return i.length?_.a.createElement("span",null,Object(A.e)(i," + ")):_.a.createElement("span",null,"-")}}]),t}(_.a.Component);a.a=T},156:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),u=t(18),s=t(0),_=t.n(s),E=t(126),c=t(100),A=t(114),o=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t=null;switch(this.props.buff.type){case E.a.UP_ATK:case E.a.DOWN_ATK:case E.a.UP_COMMANDALL:case E.a.DOWN_COMMANDALL:case E.a.UP_CRITICALDAMAGE:case E.a.DOWN_CRITICALDAMAGE:case E.a.UP_CRITICALPOINT:case E.a.DOWN_CRITICALPOINT:case E.a.UP_CRITICALRATE:case E.a.DOWN_CRITICALRATE:case E.a.UP_CRITICAL_RATE_DAMAGE_TAKEN:case E.a.DOWN_CRITICAL_RATE_DAMAGE_TAKEN:case E.a.UP_DAMAGE:case E.a.DOWN_DAMAGE:case E.a.UP_DAMAGEDROPNP:case E.a.DOWN_DAMAGEDROPNP:case E.a.UP_DEFENCE:case E.a.DOWN_DEFENCE:case E.a.UP_DEFENCECOMMANDALL:case E.a.DOWN_DEFENCECOMMANDALL:case E.a.UP_DROPNP:case E.a.DOWN_DROPNP:case E.a.UP_FUNC_HP_REDUCE:case E.a.DOWN_FUNC_HP_REDUCE:case E.a.UP_HATE:case E.a.UP_NONRESIST_INSTANTDEATH:case E.a.UP_NPDAMAGE:case E.a.DOWN_NPDAMAGE:case E.a.UP_SPECIALDEFENCE:case E.a.DOWN_SPECIALDEFENCE:case E.a.UP_STARWEIGHT:case E.a.DOWN_STARWEIGHT:case E.a.UP_TOLERANCE:case E.a.DOWN_TOLERANCE:case E.a.UP_TOLERANCE_SUBSTATE:case E.a.DOWN_TOLERANCE_SUBSTATE:t=Object(c.a)(this.props.dataVal.Value,1);break;case E.a.REGAIN_NP:t=Object(c.a)(this.props.dataVal.Value,2);break;case E.a.ATTACK_FUNCTION:case E.a.COMMANDATTACK_FUNCTION:case E.a.COMMANDATTACK_BEFORE_FUNCTION:case E.a.DAMAGE_FUNCTION:case E.a.DEAD_FUNCTION:case E.a.DELAY_FUNCTION:case E.a.SELFTURNEND_FUNCTION:this.props.dataVal.Value2&&(t="Lv. "+this.props.dataVal.Value2);break;case E.a.NPATTACK_PREV_BUFF:this.props.dataVal.SkillLV&&(t="Lv. "+this.props.dataVal.SkillLV);break;case E.a.FIELD_INDIVIDUALITY:"number"===typeof this.props.dataVal.Value&&(t=_.a.createElement(A.a,{region:this.props.region,trait:this.props.dataVal.Value}));break;default:t=null!==(e=null===(a=this.props.dataVal.Value)||void 0===a?void 0:a.toString())&&void 0!==e?e:""}return t}}]),t}(_.a.Component);a.a=o},157:function(e,a,t){"use strict";t.d(a,"b",(function(){return E}));var n=t(0),r=t.n(n),i=t(126),u=t(119),s=t(135),_=t(114),E=new Map([[u.d.ADD_STATE,"Apply Buff"],[u.d.ADD_STATE_SHORT,"Apply Buff"],[u.d.CARD_RESET,"Shuffle Cards"],[u.d.DAMAGE_NP,"Deal Damage"],[u.d.DAMAGE_NP_INDIVIDUAL,"Deal Damage with Bonus to Trait"],[u.d.DAMAGE_NP_INDIVIDUAL_SUM,"Deal Damage with Bonus per Trait"],[u.d.DAMAGE_NP_PIERCE,"Deal Damage that pierces defense"],[u.d.DAMAGE_NP_RARE,"Deal Damage with Bonus to Rarity"],[u.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX,"Deal Damage with Bonus to Trait"],[u.d.DELAY_NPTURN,"Drain Charge"],[u.d.EXP_UP,"Increase Master Exp"],[u.d.FORCE_INSTANT_DEATH,"Force Instant Death"],[u.d.GAIN_HP,"Restore HP"],[u.d.GAIN_HP_FROM_TARGETS,"Absorb HP"],[u.d.GAIN_NP_FROM_TARGETS,"Absorb NP"],[u.d.GAIN_NP,"Charge NP"],[u.d.GAIN_STAR,"Gain Critical Stars"],[u.d.HASTEN_NPTURN,"Increase Charge"],[u.d.INSTANT_DEATH,"Apply Death"],[u.d.LOSS_HP_SAFE,"Drain HP without killing"],[u.d.LOSS_NP,"Drain NP"],[u.d.NONE,"No Effect"],[u.d.SUB_STATE,"Remove Effects"]]);a.a=function(e,a,t,n){var c=a.action.parts;if(t.funcType===u.d.ADD_STATE||t.funcType===u.d.ADD_STATE_SHORT)!function(e,a,t,n){var u,_,E,c=a.action.parts;c.push("Apply"),t.buffs.forEach((function(a,t){t>0&&c.push("&"),c.push(r.a.createElement(s.a,{region:e,buff:a}))})),(null===(u=t.buffs[0])||void 0===u?void 0:u.type)===i.a.FIELD_INDIVIDUALITY&&(a.amount.preposition="to"),a.target.preposition="on",(null===(_=t.buffs[0])||void 0===_?void 0:_.type)!==i.a.COMMANDATTACK_FUNCTION&&(null===(E=t.buffs[0])||void 0===E?void 0:E.type)!==i.a.NPATTACK_PREV_BUFF||(a.target.preposition="for")}(e,a,t);else if(t.funcType===u.d.SUB_STATE)!function(e,a,t,n){var i,u,s=a.action.parts;s.push(null!==(i=E.get(t.funcType))&&void 0!==i?i:t.funcType),(null===(u=t.traitVals)||void 0===u?void 0:u.length)&&(s.push("with"),t.traitVals.forEach((function(a,t){t>0&&s.push("&"),s.push(r.a.createElement(_.a,{region:e,trait:a}))}))),a.target.preposition="on"}(e,a,t);else if(t.funcType===u.d.DAMAGE_NP||t.funcType===u.d.DAMAGE_NP_INDIVIDUAL||t.funcType===u.d.DAMAGE_NP_INDIVIDUAL_SUM||t.funcType===u.d.DAMAGE_NP_PIERCE||t.funcType===u.d.DAMAGE_NP_RARE||t.funcType===u.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX)c.push("Deal damage"),a.amount.preposition="of";else if(t.funcType===u.d.CARD_RESET||t.funcType===u.d.GAIN_STAR||t.funcType===u.d.NONE){var A;c.push(null!==(A=E.get(t.funcType))&&void 0!==A?A:t.funcType),a.target.showing=!1}else if(t.funcType===u.d.DELAY_NPTURN||t.funcType===u.d.GAIN_HP_FROM_TARGETS||t.funcType===u.d.GAIN_NP_FROM_TARGETS||t.funcType===u.d.LOSS_HP_SAFE||t.funcType===u.d.LOSS_NP){var o;c.push(null!==(o=E.get(t.funcType))&&void 0!==o?o:t.funcType),a.amount.preposition="of",a.target.preposition="from"}else if(t.funcType===u.d.EXP_UP){var T;c.push(null!==(T=E.get(t.funcType))&&void 0!==T?T:t.funcType),a.chance.showing=!1,a.amount.preposition="by",a.target.showing=!1}else if(t.funcType===u.d.FORCE_INSTANT_DEATH||t.funcType===u.d.INSTANT_DEATH){var p;c.push(null!==(p=E.get(t.funcType))&&void 0!==p?p:t.funcType),a.amount.showing=!1,a.target.preposition="on"}else if(t.funcType===u.d.GAIN_HP||t.funcType===u.d.GAIN_NP||t.funcType===u.d.HASTEN_NPTURN){var N;c.push(null!==(N=E.get(t.funcType))&&void 0!==N?N:t.funcType),a.amount.preposition="by",a.target.preposition="for"}else{var l;c.push(null!==(l=E.get(t.funcType))&&void 0!==l?l:t.funcType)}}},158:function(e,a,t){"use strict";t.d(a,"b",(function(){return r}));var n=t(119),r=new Map([[n.c.SELF,"self"],[n.c.PT_ONE,"party member"],[n.c.PT_ALL,"party"],[n.c.ENEMY,"enemy"],[n.c.ENEMY_ALL,"enemies"],[n.c.PT_FULL,"party (including reserve)"],[n.c.ENEMY_FULL,"enemies (including reserve)"],[n.c.PT_OTHER,"party except self"],[n.c.PT_ONE_OTHER,"other party members besides target"],[n.c.PT_RANDOM,"random party member"],[n.c.ENEMY_OTHER,"other enemies besides target"],[n.c.ENEMY_RANDOM,"random enemy"],[n.c.PT_OTHER_FULL,"party except self (including reserve)"],[n.c.ENEMY_OTHER_FULL,"other enemies (including reserve)"],[n.c.PTSELECT_ONE_SUB,"active party member and reserve party member"],[n.c.PTSELECT_SUB,"reserve party member"],[n.c.PT_ONE_ANOTHER_RANDOM,"other random party member"],[n.c.PT_SELF_ANOTHER_RANDOM,"other random party member (except self)"],[n.c.ENEMY_ONE_ANOTHER_RANDOM,"other random enemy"],[n.c.PT_SELF_ANOTHER_FIRST,"first other party member (except self)"],[n.c.COMMAND_TYPE_SELF_TREASURE_DEVICE,"target noble phantasm version"]]);a.a=function(e,a,t,i){var u,s=a.target,_=s.parts,E=t.funcTargetType;if(t.funcType===n.d.GAIN_HP_FROM_TARGETS)switch(i.DependFuncId){case 711:E=n.c.ENEMY_ALL;break;default:E=void 0,s.showing=!1}else if(t.funcType===n.d.GAIN_NP_FROM_TARGETS)switch(i.DependFuncId){case 474:E=n.c.ENEMY_ALL;break;case 3962:E=n.c.PT_OTHER}E&&_.push(null!==(u=r.get(E))&&void 0!==u?u:E)}}}]);
//# sourceMappingURL=3.d30e0468.chunk.js.map