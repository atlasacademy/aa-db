(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[3],{120:function(e,a,t){"use strict";var n,r,i,s;t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return s})),function(e){e.NONE="none",e.ADD_STATE="addState",e.SUB_STATE="subState",e.DAMAGE="damage",e.DAMAGE_NP="damageNp",e.GAIN_STAR="gainStar",e.GAIN_HP="gainHp",e.GAIN_NP="gainNp",e.LOSS_NP="lossNp",e.SHORTEN_SKILL="shortenSkill",e.EXTEND_SKILL="extendSkill",e.RELEASE_STATE="releaseState",e.LOSS_HP="lossHp",e.INSTANT_DEATH="instantDeath",e.DAMAGE_NP_PIERCE="damageNpPierce",e.DAMAGE_NP_INDIVIDUAL="damageNpIndividual",e.ADD_STATE_SHORT="addStateShort",e.GAIN_HP_PER="gainHpPer",e.DAMAGE_NP_STATE_INDIVIDUAL="damageNpStateIndividual",e.HASTEN_NPTURN="hastenNpturn",e.DELAY_NPTURN="delayNpturn",e.DAMAGE_NP_HPRATIO_HIGH="damageNpHpratioHigh",e.DAMAGE_NP_HPRATIO_LOW="damageNpHpratioLow",e.CARD_RESET="cardReset",e.REPLACE_MEMBER="replaceMember",e.LOSS_HP_SAFE="lossHpSafe",e.DAMAGE_NP_COUNTER="damageNpCounter",e.DAMAGE_NP_STATE_INDIVIDUAL_FIX="damageNpStateIndividualFix",e.DAMAGE_NP_SAFE="damageNpSafe",e.CALL_SERVANT="callServant",e.PT_SHUFFLE="ptShuffle",e.LOSS_STAR="lossStar",e.CHANGE_SERVANT="changeServant",e.CHANGE_BG="changeBg",e.DAMAGE_VALUE="damageValue",e.WITHDRAW="withdraw",e.FIX_COMMANDCARD="fixCommandcard",e.SHORTEN_BUFFTURN="shortenBuffturn",e.EXTEND_BUFFTURN="extendBuffturn",e.SHORTEN_BUFFCOUNT="shortenBuffcount",e.EXTEND_BUFFCOUNT="extendBuffcount",e.CHANGE_BGM="changeBgm",e.DISPLAY_BUFFSTRING="displayBuffstring",e.RESURRECTION="resurrection",e.GAIN_NP_BUFF_INDIVIDUAL_SUM="gainNpBuffIndividualSum",e.SET_SYSTEM_ALIVE_FLAG="setSystemAliveFlag",e.FORCE_INSTANT_DEATH="forceInstantDeath",e.DAMAGE_NP_RARE="damageNpRare",e.GAIN_NP_FROM_TARGETS="gainNpFromTargets",e.GAIN_HP_FROM_TARGETS="gainHpFromTargets",e.LOSS_HP_PER="lossHpPer",e.LOSS_HP_PER_SAFE="lossHpPerSafe",e.SHORTEN_USER_EQUIP_SKILL="shortenUserEquipSkill",e.QUICK_CHANGE_BG="quickChangeBg",e.SHIFT_SERVANT="shiftServant",e.DAMAGE_NP_AND_CHECK_INDIVIDUALITY="damageNpAndCheckIndividuality",e.ABSORB_NPTURN="absorbNpturn",e.OVERWRITE_DEAD_TYPE="overwriteDeadType",e.FORCE_ALL_BUFF_NOACT="forceAllBuffNoact",e.BREAK_GAUGE_UP="breakGaugeUp",e.BREAK_GAUGE_DOWN="breakGaugeDown",e.EXP_UP="expUp",e.QP_UP="qpUp",e.DROP_UP="dropUp",e.FRIEND_POINT_UP="friendPointUp",e.EVENT_DROP_UP="eventDropUp",e.EVENT_DROP_RATE_UP="eventDropRateUp",e.EVENT_POINT_UP="eventPointUp",e.EVENT_POINT_RATE_UP="eventPointRateUp",e.TRANSFORM_SERVANT="transformServant",e.QP_DROP_UP="qpDropUp",e.SERVANT_FRIENDSHIP_UP="servantFriendshipUp",e.USER_EQUIP_EXP_UP="userEquipExpUp",e.CLASS_DROP_UP="classDropUp",e.ENEMY_ENCOUNT_COPY_RATE_UP="enemyEncountCopyRateUp",e.ENEMY_ENCOUNT_RATE_UP="enemyEncountRateUp",e.ENEMY_PROB_DOWN="enemyProbDown",e.GET_REWARD_GIFT="getRewardGift",e.SEND_SUPPORT_FRIEND_POINT="sendSupportFriendPoint",e.MOVE_POSITION="movePosition",e.REVIVAL="revival",e.DAMAGE_NP_INDIVIDUAL_SUM="damageNpIndividualSum"}(n||(n={})),function(e){e.SELF="self",e.PT_ONE="ptOne",e.PT_ANOTHER="ptAnother",e.PT_ALL="ptAll",e.ENEMY="enemy",e.ENEMY_ANOTHER="enemyAnother",e.ENEMY_ALL="enemyAll",e.PT_FULL="ptFull",e.ENEMY_FULL="enemyFull",e.PT_OTHER="ptOther",e.PT_ONE_OTHER="ptOneOther",e.PT_RANDOM="ptRandom",e.ENEMY_OTHER="enemyOther",e.ENEMY_RANDOM="enemyRandom",e.PT_OTHER_FULL="ptOtherFull",e.ENEMY_OTHER_FULL="enemyOtherFull",e.PTSELECT_ONE_SUB="ptselectOneSub",e.PTSELECT_SUB="ptselectSub",e.PT_ONE_ANOTHER_RANDOM="ptOneAnotherRandom",e.PT_SELF_ANOTHER_RANDOM="ptSelfAnotherRandom",e.ENEMY_ONE_ANOTHER_RANDOM="enemyOneAnotherRandom",e.PT_SELF_ANOTHER_FIRST="ptSelfAnotherFirst",e.PT_SELF_BEFORE="ptSelfBefore",e.PT_SELF_AFTER="ptSelfAfter",e.PT_SELF_ANOTHER_LAST="ptSelfAnotherLast",e.COMMAND_TYPE_SELF_TREASURE_DEVICE="commandTypeSelfTreasureDevice"}(r||(r={})),function(e){e.PLAYER="player",e.ENEMY="enemy",e.PLAYER_AND_ENEMY="playerAndEnemy"}(i||(i={})),function(e){e.RATE="Rate",e.TURN="Turn",e.COUNT="Count",e.VALUE="Value",e.VALUE2="Value2",e.USE_RATE="UseRate",e.TARGET="Target",e.CORRECTION="Correction",e.PARAM_ADD="ParamAdd",e.PARAM_MAX="ParamMax",e.HIDE_MISS="HideMiss",e.ON_FIELD="OnField",e.HIDE_NO_EFFECT="HideNoEffect",e.UNAFFECTED="Unaffected",e.SHOW_STATE="ShowState",e.AURA_EFFECT_ID="AuraEffectId",e.ACT_SET="ActSet",e.ACT_SET_WEIGHT="ActSetWeight",e.SHOW_QUEST_NO_EFFECT="ShowQuestNoEffect",e.CHECK_DEAD="CheckDead",e.RATIO_HP_HIGH="RatioHPHigh",e.RATIO_HP_LOW="RatioHPLow",e.SET_PASSIVE_FRAME="SetPassiveFrame",e.PROC_PASSIVE="ProcPassive",e.PROC_ACTIVE="ProcActive",e.HIDE_PARAM="HideParam",e.SKILL_ID="SkillID",e.SKILL_LV="SkillLV",e.SHOW_CARD_ONLY="ShowCardOnly",e.EFFECT_SUMMON="EffectSummon",e.RATIO_HP_RANGE_HIGH="RatioHPRangeHigh",e.RATIO_HP_RANGE_LOW="RatioHPRangeLow",e.TARGET_LIST="TargetList",e.OPPONENT_ONLY="OpponentOnly",e.STATUS_EFFECT_ID="StatusEffectId",e.END_BATTLE="EndBattle",e.LOSE_BATTLE="LoseBattle",e.ADD_INDIVIDUALTY="AddIndividualty",e.ADD_LINKAGE_TARGET_INDIVIDUALTY="AddLinkageTargetIndividualty",e.SAME_BUFF_LIMIT_TARGET_INDIVIDUALITY="SameBuffLimitTargetIndividuality",e.SAME_BUFF_LIMIT_NUM="SameBuffLimitNum",e.CHECK_DUPLICATE="CheckDuplicate",e.ON_FIELD_COUNT="OnFieldCount",e.TARGET_RARITY_LIST="TargetRarityList",e.DEPEND_FUNC_ID="DependFuncId",e.INVALID_HIDE="InvalidHide",e.OUT_ENEMY_NPC_ID="OutEnemyNpcId",e.IN_ENEMY_NPC_ID="InEnemyNpcId",e.OUT_ENEMY_POSITION="OutEnemyPosition",e.IGNORE_INDIVIDUALITY="IgnoreIndividuality",e.STAR_HIGHER="StarHigher",e.CHANGE_TD_COMMAND_TYPE="ChangeTDCommandType",e.SHIFT_NPC_ID="ShiftNpcId",e.DISPLAY_LAST_FUNC_INVALID_TYPE="DisplayLastFuncInvalidType",e.AND_CHECK_INDIVIDUALITY_LIST="AndCheckIndividualityList",e.WIN_BATTLE_NOT_RELATED_SURVIVAL_STATUS="WinBattleNotRelatedSurvivalStatus",e.FORCE_SELF_INSTANT_DEATH="ForceSelfInstantDeath",e.CHANGE_MAX_BREAK_GAUGE="ChangeMaxBreakGauge",e.PARAM_ADD_MAX_VALUE="ParamAddMaxValue",e.PARAM_ADD_MAX_COUNT="ParamAddMaxCount",e.LOSS_HP_NO_CHANGE_DAMAGE="LossHpNoChangeDamage",e.INCLUDE_PASSIVE_INDIVIDUALITY="IncludePassiveIndividuality",e.INDIVIDUALITY="Individuality",e.EVENT_ID="EventId",e.ADD_COUNT="AddCount",e.RATE_COUNT="RateCount"}(s||(s={}))},123:function(e,a,t){"use strict";t.d(a,"a",(function(){return E})),t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return A})),t.d(a,"d",(function(){return T})),t.d(a,"e",(function(){return l})),t.d(a,"f",(function(){return d})),t.d(a,"g",(function(){return D}));var n=t(0),r=t.n(n),i=t(127),s=t(120),_=t(156),u=function(e){if(!e.length)return!1;for(var a=e[0],t=1;t<e.length;t++){if(JSON.stringify(a)!==JSON.stringify(e[t]))return!0;a=e[t]}return!1},c=function(e){return new Set(e).size>1};function E(e,a){var t=T(a),n=d(t);return function e(a){if(!a.length)return[];var t=function(e){return Object.values(s.a).filter((function(a){var t=e.map((function(e){return e[a]}));return c(t)}))}(a),n=a.filter((function(e){return void 0!==e.DependFuncVals})).length>0?a.map((function(e){var a;return null!==(a=e.DependFuncVals)&&void 0!==a?a:{}})):void 0,r=n?e(n):[],i=d(a);return a.map((function(e,a){var n={};for(var s in t)n[t[s]]=e[t[s]];return i.DependFuncId&&r[a]&&(n.DependFuncId=i.DependFuncId,n.DependFuncVals=r[a]),n}))}(t).map((function(t){return r.a.createElement(_.a,{region:e,func:a,staticDataVal:n,dataVal:t})}))}function o(e){return u(N(e))}function A(e){return u(p(e))}function T(e){var a=o(e),t=A(e);return a&&t?function(e){for(var a=[],t=1;t<=5;t++){var n=D(e,t,t);void 0!==n&&a.push(n)}return a}(e):t?p(e):N(e)}function N(e){var a;return null!==(a=e.svals)&&void 0!==a?a:[]}function p(e){for(var a=[],t=1;t<=5;t++){var n=D(e,1,t);void 0!==n&&a.push(n)}return a}function l(e){if(e.funcType!==s.d.ADD_STATE&&e.funcType!==s.d.ADD_STATE_SHORT)return[];var a=e.buffs[0];if(a.type===i.a.ATTACK_FUNCTION||a.type===i.a.COMMANDATTACK_FUNCTION||a.type===i.a.COMMANDATTACK_BEFORE_FUNCTION||a.type===i.a.COMMANDCODEATTACK_FUNCTION||a.type===i.a.DAMAGE_FUNCTION||a.type===i.a.DEAD_FUNCTION||a.type===i.a.DELAY_FUNCTION||a.type===i.a.SELFTURNEND_FUNCTION){var t=T(e)[0];return"number"===typeof t.Value?[t.Value]:[]}if(a.type===i.a.NPATTACK_PREV_BUFF){var n=T(e)[0];return"number"===typeof n.SkillID?[n.SkillID]:[]}return[]}function d(e){if(!e.length)return{};var a=function(e){return Object.values(s.a).filter((function(a){var t=e.map((function(e){return e[a]}));return!c(t)}))}(e),t={},n=e.filter((function(e){return void 0!==e.DependFuncVals})).length>0,r=n?e.map((function(e){var a;return null!==(a=e.DependFuncVals)&&void 0!==a?a:{}})):void 0,i=r?d(r):void 0;for(var _ in a)t[a[_]]=e[0][a[_]];return n&&(t.DependFuncVals=i),t}function D(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(void 0!==e.svals)return(2===t&&e.svals2?e.svals2:3===t&&e.svals3?e.svals3:4===t&&e.svals4?e.svals4:5===t&&e.svals5?e.svals5:e.svals)[a-1]}},125:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),s=t(18),_=t(53),u=t(30),c=t(0),E=t.n(c),o=t(13),A=t(123),T=t(100),N=function e(a){Object(n.a)(this,e),this.showing=!0,this.parts=[],this.preposition=void 0,this.preposition=a},p=function e(){Object(n.a)(this,e),this.team=new N,this.chance=new N,this.action=new N,this.affects=new N,this.amount=new N("of"),this.target=new N("to"),this.duration=new N,this.scaling=new N},l=t(158),d=t(120),D=t(115),I=t(127),f=t(157),P=t(156),R=t(136),O=t(159),S=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"getDataVal",value:function(){var e,a,t=this.props.func;if(this.props.level)return null!==(e=Object(A.g)(t,this.props.level,null!==(a=this.props.overcharge)&&void 0!==a?a:1))&&void 0!==e?e:{};var n=Object(A.d)(t);return Object(A.f)(n)}},{key:"render",value:function(){var e=this.props.region,a=this.props.func,t=this.getDataVal(),n=new p;!function(e,a,t,n){var r=a.team,i=r.parts;t.funcTargetTeam===d.b.PLAYER?i.push("[Player]"):t.funcTargetTeam===d.b.ENEMY?i.push("[Enemy]"):r.showing=!1}(0,n,a),function(e,a,t,n){var r=a.chance,i=r.parts;n.Rate&&n.Rate<0?i.push("Guaranteed to"):"number"===typeof n.Rate&&1e3!==n.Rate?i.push(n.Rate/10+"% Chance to"):n.Rate||t.funcType===d.d.NONE?r.showing=!1:i.push("Chance to")}(0,n,a,t),Object(l.a)(e,n,a,t),function(e,a,t,n){var r=a.affects,i=r.parts;t.funcType===d.d.DAMAGE_NP_HPRATIO_LOW?i.push("(additional for low HP)"):"number"!==typeof n.Target||t.funcType!==d.d.DAMAGE_NP_INDIVIDUAL&&t.funcType!==d.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX?"number"===typeof n.TargetList&&t.funcType===d.d.DAMAGE_NP_INDIVIDUAL_SUM?i.push(E.a.createElement("span",null,"(bonus per trait of ",E.a.createElement(D.a,{region:e,trait:n.TargetList}),n.ParamAddMaxCount?"[Limit ".concat(n.ParamAddMaxCount,"]"):null,")")):"string"===typeof n.TargetRarityList&&t.funcType===d.d.DAMAGE_NP_RARE?i.push(E.a.createElement("span",null,"(bonus to ",n.TargetRarityList," ",n.TargetRarityList.split("/").length>1?"rarities":"rarity",")")):t.funcType===d.d.DAMAGE_NP_PIERCE&&i.push("(that pierces defense)"):i.push(E.a.createElement("span",null,"(additional to targets with ",E.a.createElement(D.a,{region:e,trait:n.Target}),")")),t.funcquestTvals.length&&(i.push("if on field"),i.push(Object(T.e)(t.funcquestTvals.map((function(a){return E.a.createElement(D.a,{region:e,trait:a})}))," & "))),t.functvals.length&&(i.push("for targets"),t.functvals.length>1&&i.push("all"),t.functvals.forEach((function(a,t){t>0&&i.push("&"),i.push(E.a.createElement(D.a,{region:e,trait:a}))}))),i.length||(r.showing=!1)}(e,n,a,t),function(e,a,t,n){var r,i,s,_,u,c,o,A,T,N,p=a.amount,l=p.parts;if((null===(r=t.buffs[0])||void 0===r?void 0:r.type)===I.a.ADD_INDIVIDUALITY&&"number"===typeof n.Value)l.push(E.a.createElement(D.a,{region:e,trait:n.Value}));else if((null===(i=t.buffs[0])||void 0===i?void 0:i.type)!==I.a.ATTACK_FUNCTION&&(null===(s=t.buffs[0])||void 0===s?void 0:s.type)!==I.a.COMMANDATTACK_FUNCTION&&(null===(_=t.buffs[0])||void 0===_?void 0:_.type)!==I.a.COMMANDATTACK_BEFORE_FUNCTION&&(null===(u=t.buffs[0])||void 0===u?void 0:u.type)!==I.a.COMMANDCODEATTACK_FUNCTION&&(null===(c=t.buffs[0])||void 0===c?void 0:c.type)!==I.a.DAMAGE_FUNCTION&&(null===(o=t.buffs[0])||void 0===o?void 0:o.type)!==I.a.DEAD_FUNCTION&&(null===(A=t.buffs[0])||void 0===A?void 0:A.type)!==I.a.DELAY_FUNCTION&&(null===(T=t.buffs[0])||void 0===T?void 0:T.type)!==I.a.SELFTURNEND_FUNCTION||"number"!==typeof n.Value)if(t.funcType===d.d.CARD_RESET&&n.Value)p.preposition=void 0,l.push("".concat(n.Value," time").concat(n.Value>1?"s":""));else if(t.funcType===d.d.DAMAGE_NP_INDIVIDUAL_SUM)l.push(E.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0}));else if(t.funcType!==d.d.ABSORB_NPTURN&&t.funcType!==d.d.GAIN_HP_FROM_TARGETS&&t.funcType!==d.d.GAIN_NP_FROM_TARGETS||!n.DependFuncId)if(t.funcType===d.d.SERVANT_FRIENDSHIP_UP&&n.RateCount)l.push(E.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n}));else if((null===(N=t.buffs[0])||void 0===N?void 0:N.type)===I.a.NPATTACK_PREV_BUFF){if("number"!==typeof n.SkillID)return void(p.showing=!1);p.preposition=void 0,l.push("that triggers"),l.push(E.a.createElement(R.a,{region:e,id:n.SkillID}))}else t.buffs[0]&&n.Value?l.push(E.a.createElement(f.a,{region:e,buff:t.buffs[0],dataVal:n})):n.Value?l.push(E.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0})):p.showing=!1;else{var O;(null===(O=n.DependFuncVals)||void 0===O?void 0:O.Value)?p.parts.push(E.a.createElement(P.a,{region:e,func:t,staticDataVal:n,dataVal:n,hideRate:!0})):p.showing=!1}else p.preposition=void 0,l.push("that triggers"),l.push(E.a.createElement(R.a,{region:e,id:n.Value}))}(e,n,a,t),Object(O.a)(e,n,a,t),function(e,a,t,n){var r=a.duration,i=r.parts;if(n.Count&&n.Count>0&&n.Turn&&n.Turn>0){var s=1===n.Count?"1 Time":"".concat(n.Count," Times"),_=1===n.Turn?"1 Turn":"".concat(n.Turn," Turns");i.push("(".concat(_,", ").concat(s,")"))}else n.Turn&&n.Turn>0?i.push(1===n.Turn?"(1 Turn)":"(".concat(n.Turn," Turns)")):n.Count&&n.Count>0?i.push(1===n.Count?"(1 Time)":"(".concat(n.Count," Times)")):r.showing=!1}(0,n,0,t),function(e,a,t,n){var r=a.scaling,i=r.parts,s=Object(A.b)(t),_=Object(A.c)(t);s||_?(s&&i.push("<LEVEL>"),_&&i.push("<OVERCHARGE>")):r.showing=!1}(0,n,a);var r=[];return Object.values(n).forEach((function(e){e.showing&&(e.preposition&&r.push(e.preposition),r=r.concat(e.parts))})),r.push(E.a.createElement(o.b,{to:"/".concat(e,"/func/").concat(a.funcId)},E.a.createElement(u.a,{icon:_.d}))),r=Object(T.d)(r," "),E.a.createElement("span",null,r.map((function(e,a){return E.a.createElement(E.a.Fragment,{key:a},e)})))}}]),t}(E.a.Component);a.a=S},128:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),s=t(18),_=t(0),u=t.n(_),c=t(13),E=t(122),o=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(c.b,{to:"/".concat(this.props.region,"/skill/").concat(this.props.skill.id)},u.a.createElement(E.a,{location:this.props.skill.icon,height:this.props.iconHeight})," ","[",this.props.skill.name?this.props.skill.name:"Skill: ".concat(this.props.skill.id),"]")}}]),t}(u.a.Component);a.a=o},136:function(e,a,t){"use strict";var n=t(97),r=t.n(n),i=t(98),s=t(11),_=t(12),u=t(19),c=t(18),E=t(0),o=t.n(E),A=t(13),T=t(99),N=t(128),p=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={},n}return Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,T.a.skill(this.props.region,this.props.id);case 4:e.t1=e.sent,e.t2={skill:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/".concat(this.props.region,"/skill/").concat(this.props.id);return void 0===this.state.skill?o.a.createElement(A.b,{to:e},"[Skill: ",this.props.id,"]"):o.a.createElement(N.a,{region:this.props.region,skill:this.state.skill})}}]),t}(o.a.Component);a.a=p},156:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),s=t(18),_=t(0),u=t.n(_),c=t(127),E=t(120),o=t(100),A=t(157),T=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t,n,r,i,s,_,T,N=this.props.region,p=this.props.func,l=this.props.dataVal,d=[];if(p.funcType===E.d.ABSORB_NPTURN)switch(this.props.staticDataVal.DependFuncId){case 469:var D=[];(null===(e=l.DependFuncVals)||void 0===e?void 0:e.Value)&&D.push("".concat(Object(o.a)(l.DependFuncVals.Value,2))),"number"===typeof(null===(a=l.DependFuncVals)||void 0===a?void 0:a.Value2)&&D.push("".concat(l.DependFuncVals.Value2/100," Charge")),D.length&&d.push(u.a.createElement(u.a.Fragment,null,"(",Object(o.e)(D," => "),")"));break;case 5061:(null===(t=l.DependFuncVals)||void 0===t?void 0:t.Value)&&d.push(l.DependFuncVals.Value.toString())}if(p.funcType===E.d.GAIN_HP_FROM_TARGETS)switch(this.props.staticDataVal.DependFuncId){case 711:(null===(n=l.DependFuncVals)||void 0===n?void 0:n.Value)&&d.push(null===(r=l.DependFuncVals)||void 0===r?void 0:r.Value.toString())}if(p.funcType===E.d.GAIN_NP_FROM_TARGETS)switch(this.props.staticDataVal.DependFuncId){case 474:var I=[];(null===(i=l.DependFuncVals)||void 0===i?void 0:i.Value)&&I.push("".concat(l.DependFuncVals.Value," Charge")),(null===(s=l.DependFuncVals)||void 0===s?void 0:s.Value2)&&I.push("".concat(Object(o.a)(l.DependFuncVals.Value2,2))),I.length&&d.push(u.a.createElement(u.a.Fragment,null,"(",Object(o.e)(I," => "),")"));break;case 3962:(null===(_=l.DependFuncVals)||void 0===_?void 0:_.Value)&&d.push(Object(o.a)(null===(T=l.DependFuncVals)||void 0===T?void 0:T.Value,2))}if((p.funcType===E.d.ADD_STATE||p.funcType===E.d.ADD_STATE_SHORT)&&p.buffs[0]&&(l.Value||p.buffs[0].type===c.a.DAMAGE_FUNCTION&&l.Value2||p.buffs[0].type===c.a.DEAD_FUNCTION&&l.Value2||p.buffs[0].type===c.a.DELAY_FUNCTION&&l.Value2||p.buffs[0].type===c.a.NPATTACK_PREV_BUFF&&l.SkillID||p.buffs[0].type===c.a.SELFTURNEND_FUNCTION&&l.Value2))return u.a.createElement(A.a,{region:N,buff:p.buffs[0],dataVal:l});if(this.props.hideRate||void 0===l.Rate||d.push(Object(o.a)(l.Rate,1)),void 0!==l.Value)switch(p.funcType){case E.d.DAMAGE_NP:case E.d.DAMAGE_NP_HPRATIO_LOW:case E.d.DAMAGE_NP_INDIVIDUAL:case E.d.DAMAGE_NP_INDIVIDUAL_SUM:case E.d.DAMAGE_NP_PIERCE:case E.d.DAMAGE_NP_RARE:case E.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:case E.d.GAIN_HP_PER:case E.d.QP_DROP_UP:d.push(Object(o.a)(l.Value,1));break;case E.d.GAIN_NP:case E.d.GAIN_NP_BUFF_INDIVIDUAL_SUM:case E.d.LOSS_NP:d.push(Object(o.a)(l.Value,2));break;default:d.push(l.Value.toString())}if(void 0!==l.Value2)switch(p.funcType){case E.d.GAIN_NP_FROM_TARGETS:d.push(Object(o.a)(l.Value2,2));break;case E.d.DAMAGE_NP_INDIVIDUAL_SUM:d.push("additional "+Object(o.a)(l.Value2,1))}if(void 0!==l.Correction)switch(p.funcType){case E.d.DAMAGE_NP_INDIVIDUAL:case E.d.DAMAGE_NP_RARE:case E.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:d.push(Object(o.a)(l.Correction,1));break;case E.d.DAMAGE_NP_INDIVIDUAL_SUM:d.push("("+Object(o.a)(l.Correction,1)+" x count)");break;default:d.push(l.Correction.toString())}if(void 0!==l.Target)switch(p.funcType){case E.d.DAMAGE_NP_HPRATIO_LOW:d.push(Object(o.a)(l.Target,1));break;default:d.push(l.Target.toString())}if(l.RateCount)switch(p.funcType){case E.d.SERVANT_FRIENDSHIP_UP:d.push(Object(o.a)(l.RateCount,1))}return d.length?u.a.createElement("span",null,Object(o.e)(d," + ")):u.a.createElement("span",null,"-")}}]),t}(u.a.Component);a.a=T},157:function(e,a,t){"use strict";var n=t(11),r=t(12),i=t(19),s=t(18),_=t(0),u=t.n(_),c=t(127),E=t(100),o=t(115),A=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t=null;switch(this.props.buff.type){case c.a.UP_ATK:case c.a.DOWN_ATK:case c.a.UP_COMMANDALL:case c.a.DOWN_COMMANDALL:case c.a.UP_CRITICALDAMAGE:case c.a.DOWN_CRITICALDAMAGE:case c.a.UP_CRITICALPOINT:case c.a.DOWN_CRITICALPOINT:case c.a.UP_CRITICALRATE:case c.a.DOWN_CRITICALRATE:case c.a.UP_CRITICAL_RATE_DAMAGE_TAKEN:case c.a.DOWN_CRITICAL_RATE_DAMAGE_TAKEN:case c.a.UP_DAMAGE:case c.a.DOWN_DAMAGE:case c.a.UP_DAMAGEDROPNP:case c.a.DOWN_DAMAGEDROPNP:case c.a.UP_DEFENCE:case c.a.DOWN_DEFENCE:case c.a.UP_DEFENCECOMMANDALL:case c.a.DOWN_DEFENCECOMMANDALL:case c.a.UP_DROPNP:case c.a.DOWN_DROPNP:case c.a.UP_FUNC_HP_REDUCE:case c.a.DOWN_FUNC_HP_REDUCE:case c.a.UP_HATE:case c.a.UP_NONRESIST_INSTANTDEATH:case c.a.UP_NPDAMAGE:case c.a.DOWN_NPDAMAGE:case c.a.UP_SPECIALDEFENCE:case c.a.DOWN_SPECIALDEFENCE:case c.a.UP_STARWEIGHT:case c.a.DOWN_STARWEIGHT:case c.a.UP_TOLERANCE:case c.a.DOWN_TOLERANCE:case c.a.UP_TOLERANCE_SUBSTATE:case c.a.DOWN_TOLERANCE_SUBSTATE:t=Object(E.a)(this.props.dataVal.Value,1);break;case c.a.REGAIN_NP:t=Object(E.a)(this.props.dataVal.Value,2);break;case c.a.ATTACK_FUNCTION:case c.a.COMMANDATTACK_FUNCTION:case c.a.COMMANDATTACK_BEFORE_FUNCTION:case c.a.DAMAGE_FUNCTION:case c.a.DEAD_FUNCTION:case c.a.DELAY_FUNCTION:case c.a.SELFTURNEND_FUNCTION:this.props.dataVal.Value2&&(t="Lv. "+this.props.dataVal.Value2);break;case c.a.NPATTACK_PREV_BUFF:this.props.dataVal.SkillLV&&(t="Lv. "+this.props.dataVal.SkillLV);break;case c.a.FIELD_INDIVIDUALITY:"number"===typeof this.props.dataVal.Value&&(t=u.a.createElement(o.a,{region:this.props.region,trait:this.props.dataVal.Value}));break;default:t=null!==(e=null===(a=this.props.dataVal.Value)||void 0===a?void 0:a.toString())&&void 0!==e?e:""}return t}}]),t}(u.a.Component);a.a=A},158:function(e,a,t){"use strict";t.d(a,"b",(function(){return c}));var n=t(0),r=t.n(n),i=t(127),s=t(120),_=t(135),u=t(115),c=new Map([[s.d.ABSORB_NPTURN,"Absorb Charge"],[s.d.ADD_STATE,"Apply Buff"],[s.d.ADD_STATE_SHORT,"Apply Buff"],[s.d.CARD_RESET,"Shuffle Cards"],[s.d.DAMAGE_NP,"Deal Damage"],[s.d.DAMAGE_NP_HPRATIO_LOW,"Deal Damage with Bonus for Low Health"],[s.d.DAMAGE_NP_INDIVIDUAL,"Deal Damage with Bonus to Trait"],[s.d.DAMAGE_NP_INDIVIDUAL_SUM,"Deal Damage with Bonus per Trait"],[s.d.DAMAGE_NP_PIERCE,"Deal Damage that pierces defense"],[s.d.DAMAGE_NP_RARE,"Deal Damage with Bonus to Rarity"],[s.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX,"Deal Damage with Bonus to Trait"],[s.d.DELAY_NPTURN,"Drain Charge"],[s.d.EXP_UP,"Increase Master Exp"],[s.d.EXTEND_SKILL,"Increase Cooldowns"],[s.d.FORCE_INSTANT_DEATH,"Force Instant Death"],[s.d.GAIN_HP,"Restore HP"],[s.d.GAIN_HP_FROM_TARGETS,"Absorb HP"],[s.d.GAIN_HP_PER,"Restore HP to Percent"],[s.d.GAIN_NP,"Charge NP"],[s.d.GAIN_NP_BUFF_INDIVIDUAL_SUM,"Charge NP per Trait"],[s.d.GAIN_NP_FROM_TARGETS,"Absorb NP"],[s.d.GAIN_STAR,"Gain Critical Stars"],[s.d.HASTEN_NPTURN,"Increase Charge"],[s.d.INSTANT_DEATH,"Apply Death"],[s.d.LOSS_HP,"Drain HP"],[s.d.LOSS_HP_SAFE,"Drain HP without killing"],[s.d.LOSS_NP,"Drain NP"],[s.d.LOSS_STAR,"Remove Critical Stars"],[s.d.NONE,"No Effect"],[s.d.QP_DROP_UP,"Increase QP Reward"],[s.d.QP_UP,"Increase QP Reward"],[s.d.REPLACE_MEMBER,"Swap members"],[s.d.SERVANT_FRIENDSHIP_UP,"Increase Bond Gain"],[s.d.SHORTEN_SKILL,"Reduce Cooldowns"],[s.d.SUB_STATE,"Remove Effects"]]);a.a=function(e,a,t,n){var E,o=a.action.parts;if(t.funcType!==s.d.ADD_STATE&&t.funcType!==s.d.ADD_STATE_SHORT)if(t.funcType!==s.d.SUB_STATE)if(t.funcType!==s.d.GAIN_NP_BUFF_INDIVIDUAL_SUM){if(t.funcType===s.d.DAMAGE_NP||t.funcType===s.d.DAMAGE_NP_HPRATIO_LOW||t.funcType===s.d.DAMAGE_NP_INDIVIDUAL||t.funcType===s.d.DAMAGE_NP_INDIVIDUAL_SUM||t.funcType===s.d.DAMAGE_NP_PIERCE||t.funcType===s.d.DAMAGE_NP_RARE||t.funcType===s.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX)return o.push("Deal damage"),void(a.amount.preposition="of");switch(t.funcType){case s.d.ABSORB_NPTURN:case s.d.GAIN_HP_FROM_TARGETS:case s.d.GAIN_NP_FROM_TARGETS:a.amount.preposition="of",a.target.preposition="from";break;case s.d.CARD_RESET:case s.d.GAIN_STAR:case s.d.LOSS_STAR:case s.d.NONE:a.target.showing=!1;break;case s.d.DELAY_NPTURN:case s.d.LOSS_HP:case s.d.LOSS_HP_SAFE:case s.d.LOSS_NP:a.amount.preposition="by",a.target.preposition="from";break;case s.d.EXP_UP:case s.d.QP_DROP_UP:case s.d.QP_UP:case s.d.SERVANT_FRIENDSHIP_UP:a.chance.showing=!1,a.amount.preposition="by",a.target.showing=!1;break;case s.d.EXTEND_SKILL:case s.d.GAIN_HP:case s.d.GAIN_NP:case s.d.HASTEN_NPTURN:case s.d.SHORTEN_SKILL:a.amount.preposition="by",a.target.preposition="for";break;case s.d.FORCE_INSTANT_DEATH:case s.d.INSTANT_DEATH:a.amount.showing=!1,a.target.preposition="on";break;case s.d.GAIN_HP_PER:a.amount.preposition="of",a.target.preposition="for";break;case s.d.REPLACE_MEMBER:a.amount.showing=!1,a.target.preposition="with"}o.push(null!==(E=c.get(t.funcType))&&void 0!==E?E:t.funcType)}else!function(e,a,t,n){var i,s=a.action.parts;s.push("Charge NP per"),(null===(i=t.traitVals)||void 0===i?void 0:i.length)&&t.traitVals.forEach((function(a,t){t>0&&s.push("&"),s.push(r.a.createElement(u.a,{region:e,trait:a}))})),s.push("traits"),a.amount.preposition="by",a.target.preposition="for"}(e,a,t);else!function(e,a,t,n){var i,s,_=a.action.parts;_.push(null!==(i=c.get(t.funcType))&&void 0!==i?i:t.funcType),(null===(s=t.traitVals)||void 0===s?void 0:s.length)&&(_.push("with"),t.traitVals.forEach((function(a,t){t>0&&_.push("or"),_.push(r.a.createElement(u.a,{region:e,trait:a}))}))),a.target.preposition="on"}(e,a,t);else!function(e,a,t,n){var s,u,c,E=a.action.parts;E.push("Apply"),t.buffs.forEach((function(a,t){t>0&&E.push("&"),E.push(r.a.createElement(_.a,{region:e,buff:a}))})),(null===(s=t.buffs[0])||void 0===s?void 0:s.type)===i.a.FIELD_INDIVIDUALITY&&(a.amount.preposition="to"),a.target.preposition="on",(null===(u=t.buffs[0])||void 0===u?void 0:u.type)!==i.a.COMMANDATTACK_FUNCTION&&(null===(c=t.buffs[0])||void 0===c?void 0:c.type)!==i.a.NPATTACK_PREV_BUFF||(a.target.preposition="for")}(e,a,t)}},159:function(e,a,t){"use strict";t.d(a,"b",(function(){return r}));var n=t(120),r=new Map([[n.c.SELF,"self"],[n.c.PT_ONE,"party member"],[n.c.PT_ALL,"party"],[n.c.ENEMY,"enemy"],[n.c.ENEMY_ALL,"enemies"],[n.c.PT_FULL,"party (including reserve)"],[n.c.ENEMY_FULL,"enemies (including reserve)"],[n.c.PT_OTHER,"party except self"],[n.c.PT_ONE_OTHER,"other party members besides target"],[n.c.PT_RANDOM,"random party member"],[n.c.ENEMY_OTHER,"other enemies besides target"],[n.c.ENEMY_RANDOM,"random enemy"],[n.c.PT_OTHER_FULL,"party except self (including reserve)"],[n.c.ENEMY_OTHER_FULL,"other enemies (including reserve)"],[n.c.PTSELECT_ONE_SUB,"active party member and reserve party member"],[n.c.PTSELECT_SUB,"reserve party member"],[n.c.PT_ONE_ANOTHER_RANDOM,"other random party member"],[n.c.PT_SELF_ANOTHER_RANDOM,"other random party member (except self)"],[n.c.ENEMY_ONE_ANOTHER_RANDOM,"other random enemy"],[n.c.PT_SELF_ANOTHER_FIRST,"first other party member (except self)"],[n.c.COMMAND_TYPE_SELF_TREASURE_DEVICE,"target noble phantasm version"]]);a.a=function(e,a,t,i){var s,_=a.target,u=_.parts,c=t.funcTargetType;if(t.funcType===n.d.ABSORB_NPTURN)switch(i.DependFuncId){case 469:c=n.c.ENEMY_ALL;break;case 5061:c=n.c.PT_OTHER}else if(t.funcType===n.d.GAIN_HP_FROM_TARGETS)switch(i.DependFuncId){case 711:c=n.c.ENEMY_ALL;break;default:c=void 0,_.showing=!1}else if(t.funcType===n.d.GAIN_NP_FROM_TARGETS)switch(i.DependFuncId){case 474:c=n.c.ENEMY_ALL;break;case 3962:c=n.c.PT_OTHER}c&&u.push(null!==(s=r.get(c))&&void 0!==s?s:c)}}}]);
//# sourceMappingURL=3.1ae5b2b7.chunk.js.map