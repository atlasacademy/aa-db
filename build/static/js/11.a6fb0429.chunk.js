(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[11],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return c}));var r=n(0),a=n.n(r);function i(e,t){if("string"===typeof e)return i(parseInt(e),t);var n=(null!==e&&void 0!==e?e:0)/Math.pow(10,t);return"".concat(n,"%")}function s(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")}function o(e){return e?a.a.createElement("span",null,c(e.split("\n"),a.a.createElement("br",null))):""}function u(e,t){var n=[],r=function(e){if(void 0!==e)if("object"!==typeof e)if(0!==n.length){var t=n[n.length-1];"string"===typeof t?n[n.length-1]=t+e.toString():n.push(e.toString())}else n.push(e.toString());else n.push(e)};return e.forEach((function(e,n){n>0&&r(t),r(e)})),n}function c(e,t){return a.a.createElement(a.a.Fragment,null,u(e,t).map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},e)})))}},143:function(e,t,n){"use strict";var r=n(26),a=n.n(r),i=n(37),s=n(12),o=n(13),u=n(22),c=n(21),l=n(0),p=n.n(l),f=n(49),b=new Map([[1,"Gender:Male"],[2,"Gender:Female"],[3,"Gender:Unknown"],[100,"Class:Saber"],[101,"Class:Lancer"],[102,"Class:Archer"],[103,"Class:Rider"],[104,"Class:Caster"],[105,"Class:Assassin"],[106,"Class:Berserker"],[107,"Class:Shielder"],[108,"Class:Ruler"],[109,"Class:Alter Ego"],[110,"Class:Avenger"],[111,"Demon Pillar"],[112,"Class:Grand Caster"],[113,"Beast I"],[114,"Beast II"],[115,"Class:Moon Cancer"],[116,"Beast IIIR"],[117,"Class:Foreigner"],[118,"Beast IIIL"],[119,"Beast Unknown"],[200,"Attribute:Sky"],[201,"Attribute:Eart"],[202,"Attribute:Human"],[203,"Attribute:Star"],[204,"Attribute:Beast"],[300,"Alignment:Lawful"],[301,"Alignment:Chaotic"],[302,"Alignment:Neutral"],[303,"Alignment:Good"],[304,"Alignment:Evil"],[305,"Alignment:Balanced"],[306,"Alignment:Madness"],[308,"Alignment:Summer"],[1e3,"Servant"],[1002,"Undead"],[1122,"Shadow Servant"],[2004,"Roman"],[2005,"Beasts"],[2019,"Demonic"],[2039,"Near Water"],[2386,"Kingprotea: Proliferation"],[2387,"Kingprotea: Growth"],[2466,"Argonaut"],[2654,"Pseudo-Servant"],[2664,"Kingprotea: Proliferation NP Defense"],[3004,"Buff"],[3005,"Debuff"],[3006,"Buff:Offensive"],[3007,"Buff:Defensive"],[3011,"Poison"],[3012,"Charm"],[3015,"Burn"],[3021,"Evade"],[3026,"Curse"],[3047,"Pigify"],[4001,"Card:Arts"],[4002,"Card:Buster"],[4003,"Card:Quick"],[4004,"Card:Extra"],[4008,"Player Card"],[4100,"Critical Hit"]]),d=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={id:"number"===typeof e.trait?e.trait:e.trait.id,trait:"number"===typeof e.trait?void 0:e.trait},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.trait){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,f.a.traitList();case 4:t=e.sent,n=0;case 6:if(!(n<t.length)){e.next=14;break}if((r=t[n]).id!==this.state.id){e.next=11;break}return this.setState({trait:r}),e.abrupt("return");case 11:n++,e.next=6;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(){return b.get(this.state.id)||(this.state.trait&&"unknown"!==this.state.trait.name?this.state.trait.name:"unknown(".concat(this.state.id,")"))}},{key:"render",value:function(){return p.a.createElement("span",null,"[",this.getDescription(),"]")}}]),n}(p.a.Component);t.a=d},145:function(e,t,n){"use strict";var r=n(12),a=n(13),i=n(22),s=n(21),o=n(0),u=n.n(o),c=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e;return u.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:25,verticalAlign:"bottom"}})}}]),n}(u.a.Component);t.a=c},153:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return E}));var r=n(12),a=n(13),i=n(22),s=n(21),o=n(11),u=n(0),c=n.n(u),l=n(16),p=n(145),f=n(137),b=n(143),d=[{up:o.b.ADD_MAXHP,down:o.b.SUB_MAXHP,description:"Max HP"},{up:o.b.UP_ATK,down:o.b.DOWN_ATK,description:"ATK"},{up:o.b.UP_CHAGETD,down:void 0,description:"Overcharge"},{up:o.b.UP_COMMANDATK,down:o.b.DOWN_COMMANDATK,description:"ATK"},{up:o.b.UP_CRITICALDAMAGE,down:o.b.DOWN_CRITICALDAMAGE,description:"Critical Damage"},{up:o.b.UP_CRITICALPOINT,down:o.b.DOWN_CRITICALPOINT,description:"Star Drop Rate"},{up:o.b.UP_CRITICALRATE,down:o.b.DOWN_CRITICALRATE,description:"Critical Rate"},{up:o.b.UP_CRITICAL_RATE_DAMAGE_TAKEN,down:o.b.DOWN_CRITICAL_RATE_DAMAGE_TAKEN,description:"Critical Rate Taken"},{up:o.b.UP_DAMAGE,down:o.b.DOWN_DAMAGE,description:"SP.DMG"},{up:o.b.UP_DAMAGEDROPNP,down:o.b.DOWN_DAMAGEDROPNP,description:"NP Gain When Damaged"},{up:o.b.UP_DEFENCE,down:o.b.DOWN_DEFENCE,description:"DEF"},{up:o.b.UP_DEFENCECOMMANDALL,down:o.b.DOWN_DEFENCECOMMANDALL,description:"Resistance"},{up:o.b.UP_DROPNP,down:o.b.DOWN_DROPNP,description:"NP Gain"},{up:o.b.UP_FUNC_HP_REDUCE,down:o.b.DOWN_FUNC_HP_REDUCE,description:"DoT Effectiveness"},{up:o.b.UP_GRANT_INSTANTDEATH,down:o.b.DOWN_GRANT_INSTANTDEATH,description:"Death Chance"},{up:o.b.UP_GRANTSTATE,down:o.b.DOWN_GRANTSTATE,description:"Buff Chance"},{up:void 0,down:o.b.UP_NONRESIST_INSTANTDEATH,description:"Death Resist"},{up:o.b.UP_NPDAMAGE,down:o.b.DOWN_NPDAMAGE,description:"NP Damage"},{up:o.b.UP_SPECIALDEFENCE,down:o.b.DOWN_SPECIALDEFENCE,description:"SP.DEF"},{up:o.b.UP_STARWEIGHT,down:o.b.DOWN_STARWEIGHT,description:"Star Weight"},{up:o.b.UP_TOLERANCE,down:o.b.DOWN_TOLERANCE,description:"Debuff Resist"},{up:o.b.UP_TOLERANCE_SUBSTATE,down:o.b.DOWN_TOLERANCE_SUBSTATE,description:"Buff Removal Resist"}],h=new Map([[3012,"Charm"],[3015,"Burn"],[3026,"Curse"],[3045,"Stun"]]),E=new Map([[o.b.AVOID_INSTANTDEATH,"Immune to Death"],[o.b.AVOID_STATE,"Immunity"],[o.b.ADD_DAMAGE,"Damage Plus"],[o.b.ADD_INDIVIDUALITY,"Add Trait"],[o.b.AVOIDANCE,"Evade"],[o.b.COMMANDCODEATTACK_FUNCTION,"Command Code Effect"],[o.b.BREAK_AVOIDANCE,"Sure Hit"],[o.b.DELAY_FUNCTION,"Trigger Skill after Duration"],[o.b.DONOT_NOBLE,"NP Seal"],[o.b.DONOT_NOBLE_COND_MISMATCH,"NP Block if Condition Failed"],[o.b.DONOT_RECOVERY,"Recovery Disabled"],[o.b.DONOT_SELECT_COMMANDCARD,"Do Not Shuffle In Cards"],[o.b.DONOT_SKILL,"Skill Seal"],[o.b.FIELD_INDIVIDUALITY,"Change Field Type"],[o.b.FIX_COMMANDCARD,"Freeze Command Cards"],[o.b.GUTS,"Guts"],[o.b.INVINCIBLE,"Invincible"],[o.b.MULTIATTACK,"Multiple Hits"],[o.b.PIERCE_INVINCIBLE,"Ignore Invincible"],[o.b.REGAIN_HP,"HP Per Turn"],[o.b.REGAIN_NP,"NP Per Turn"],[o.b.REGAIN_STAR,"Stars Per Turn"],[o.b.SELFTURNEND_FUNCTION,"Trigger Skill every Turn"],[o.b.SUB_SELFDAMAGE,"Damage Cut"],[o.b.TD_TYPE_CHANGE,"Change Noble Phantasm"],[o.b.UP_HATE,"Taunt"]]),g=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"getTraitFilterAppend",value:function(){if(this.getTraitFilters())return c.a.createElement(c.a.Fragment,null," for ",this.getTraitFilters())}},{key:"getTraitFilterAppendWithoutCards",value:function(){var e=this,t=this.props.buff.ckSelfIndv.filter((function(e){return-1===[4001,4002,4003,4004].indexOf(e.id)}));if(t.length)return c.a.createElement(c.a.Fragment,null," ","for"," ",Object(f.d)(t.map((function(t){return c.a.createElement(b.a,{region:e.props.region,trait:t})}))," & "))}},{key:"getCommandCardTypes",value:function(){var e=[];return this.hasApplicableTrait(4001)&&e.push("Arts"),this.hasApplicableTrait(4002)&&e.push("Buster"),this.hasApplicableTrait(4003)&&e.push("Quick"),this.hasApplicableTrait(4004)&&e.push("Extra"),e.length||e.push("Command Card"),e.join(" & ")}},{key:"getEffectiveTargetsDescriptions",value:function(){var e=this,t=this.props.buff;if(t.ckOpIndv.length)return c.a.createElement(c.a.Fragment,null," vs. ",Object(f.d)(t.ckOpIndv.map((function(t){return c.a.createElement(b.a,{region:e.props.region,trait:t})}))," & ").map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},e)})))}},{key:"getTraitDescription",value:function(){var e=this.props.buff.vals.map((function(e){return e.id}));for(var t in e){var n=e[t],r=h.get(n);if(void 0!==r)return r}return""}},{key:"getTraitFilters",value:function(){var e=this;if(this.props.buff.ckSelfIndv.length)return c.a.createElement(c.a.Fragment,null,Object(f.e)(this.props.buff.ckSelfIndv.map((function(t){return c.a.createElement(b.a,{region:e.props.region,trait:t})}))," & "))}},{key:"getTypeDescription",value:function(){var e,t=this.props.buff.type;return null!==(e=E.get(t))&&void 0!==e?e:""}},{key:"getUpDownDescription",value:function(){var e=this.props.buff.type;for(var t in d){if(d[t].up===e)return"".concat(d[t].description," Up");if(d[t].down===e)return"".concat(d[t].description," Down")}return""}},{key:"hasApplicableTrait",value:function(e){return this.props.buff.ckSelfIndv.filter((function(t){return t.id===e})).length>0}},{key:"hasTraitDescription",value:function(){var e=this.props.buff.vals.map((function(e){return e.id}));for(var t in e){var n=e[t];if(void 0!==h.get(n))return!0}return!1}},{key:"hasTypeDescription",value:function(){var e=this.props.buff;return E.has(e.type)}},{key:"isUpDownBuff",value:function(){var e=this.props.buff.type;for(var t in d)if(d[t].up===e||d[t].down===e)return!0;return!1}},{key:"render",value:function(){var e=this.props.buff,t=e.name;return this.isUpDownBuff()?t=c.a.createElement(c.a.Fragment,null,this.getUpDownDescription(),this.getTraitFilterAppend()):e.type===o.b.UP_COMMANDALL?t=c.a.createElement(c.a.Fragment,null,this.getCommandCardTypes()," Up",this.getTraitFilterAppendWithoutCards()):e.type===o.b.DOWN_COMMANDALL?t=c.a.createElement(c.a.Fragment,null,this.getCommandCardTypes()," Down",this.getTraitFilterAppendWithoutCards()):e.type===o.b.ATTACK_FUNCTION?t=c.a.createElement(c.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," attacks"):e.type===o.b.COMMANDATTACK_FUNCTION?t=c.a.createElement(c.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," cards"):e.type===o.b.COMMANDATTACK_BEFORE_FUNCTION?t=c.a.createElement(c.a.Fragment,null,"Trigger Skill before ",this.getTraitFilters()," cards"):e.type===o.b.DAMAGE_FUNCTION?t=c.a.createElement(c.a.Fragment,null,"Trigger Skill on receiving ",this.getTraitFilters()," attacks"):e.type===o.b.DEAD_FUNCTION?t=c.a.createElement(c.a.Fragment,null,"Trigger Skill on death",this.getTraitFilterAppend()):e.type===o.b.NPATTACK_PREV_BUFF?t=c.a.createElement(c.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," NP"):this.hasTypeDescription()?t=c.a.createElement(c.a.Fragment,null,this.getTypeDescription(),this.getTraitFilterAppend()):this.hasTraitDescription()&&(t=c.a.createElement(c.a.Fragment,null,this.getTraitDescription(),this.getTraitFilterAppend())),c.a.createElement(l.b,{to:"/".concat(this.props.region,"/buff/").concat(e.id)},"[",e.icon?c.a.createElement(p.a,{location:e.icon}):void 0,e.icon?" ":void 0,t,this.getEffectiveTargetsDescriptions(),"]")}}]),n}(c.a.Component);t.a=g},154:function(e,t,n){"use strict";var r=n(26),a=n.n(r),i=n(37),s=n(12),o=n(13),u=n(22),c=n(21),l=n(59),p=n(34),f=n(0),b=n.n(f),d=n(173),h=(n(155),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={ref:b.a.createRef(),selected:e.selected,focused:!1,results:!1},r}return Object(o.a)(n,[{key:"clearSelection",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selected:void 0,results:!0});case 2:this.state.ref.current.clear();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){if(void 0===e)return"All";var t=this.props.labels.get(e);return this.props.disableLabelStyling?t||("string"===typeof e?e:"Unknown"):t?"".concat(t," - ").concat(e):"(".concat(e,")")}},{key:"getOption",value:function(e){return{label:this.getDescription(e),value:e}}},{key:"getOptions",value:function(){var e=this;return(this.props.hideAll?[]:[this.getOption()]).concat(this.props.options.map((function(t){return e.getOption(t)})))}},{key:"resetInput",value:function(){this.setState({focused:!1,results:!1})}},{key:"selectOption",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=4;break}this.setState({results:!1}),e.next=8;break;case 4:return n=t[0].value,e.next=7,this.setState({selected:n,results:!0});case 7:this.props.onChange(n);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return b.a.createElement(d.a,{ref:this.state.ref,id:this.props.id,options:this.getOptions(),placeholder:this.getDescription(this.state.selected),selected:this.state.focused&&this.state.results?[this.getOption(this.state.selected)]:[],ignoreDiacritics:!0,maxResults:null!==(e=this.props.maxResults)&&void 0!==e?e:1e3,onBlur:function(){t.resetInput()},onChange:function(e){t.selectOption(e)},onFocus:function(){t.setState({focused:!0})}},this.props.hideReset?null:b.a.createElement("button",{className:"searchable-select-clear",onClick:function(e){e.preventDefault(),t.clearSelection()},onMouseDown:function(e){e.preventDefault()}},b.a.createElement(p.a,{icon:l.e})))}}]),n}(b.a.Component));t.a=h},155:function(e,t,n){},156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))},157:function(e,t,n){"use strict";var r=n(1),a=n(3),i=n(4),s=n.n(i),o=n(0),u=n.n(o),c=n(5),l=u.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.striped,l=e.bordered,p=e.borderless,f=e.hover,b=e.size,d=e.variant,h=e.responsive,E=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=Object(c.b)(n,"table"),v=s()(i,g,d&&g+"-"+d,b&&g+"-"+b,o&&g+"-striped",l&&g+"-bordered",p&&g+"-borderless",f&&g+"-hover"),m=u.a.createElement("table",Object(r.a)({},E,{className:v,ref:t}));if(h){var A=g+"-responsive";return"string"===typeof h&&(A=A+"-"+h),u.a.createElement("div",{className:A},m)}return m}));t.a=l},256:function(e,t,n){"use strict";n.r(t);var r=n(26),a=n.n(r),i=n(37),s=n(156),o=n(12),u=n(13),c=n(22),l=n(21),p=n(11),f=n(59),b=n(34),d=n(0),h=n.n(d),E=n(135),g=n(133),v=n(157),m=n(49),A=n(60),D=n(10),T=n(154),C=n(153),O=n(7),N=new Map([]),_=new Map;Object.values(p.b).forEach((function(e){var t;for(var n in C.c)C.c[n].up===e&&(t=C.c[n].description+" Up"),C.c[n].down===e&&(t=C.c[n].description+" Down");void 0===t&&(t=C.b.get(e)),void 0!==t&&_.set(e,t)}));var y=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var r,a;return Object(o.a)(this,n),(a=t.call(this,e)).state=null!==(r=N.get(e.region))&&void 0!==r?r:{searching:!1,buffs:[]},a}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){O.a.setRegion(this.props.region),N.set(this.props.region,Object(s.a)({},this.state))}},{key:"search",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.name||this.state.type){e.next=4;break}return this.setState({buffs:[]}),alert("Please refine the results before searching"),e.abrupt("return");case 4:return e.prev=4,e.next=7,this.setState({searching:!0,buffs:[]});case 7:return e.next=9,m.a.searchBuffs(this.state.name,this.state.type);case 9:t=e.sent,this.setState({searching:!1,buffs:t}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return this.state.error?h.a.createElement(A.a,{error:this.state.error}):h.a.createElement("div",null,this.state.searching?h.a.createElement(D.a,null):null,h.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.search()}},h.a.createElement(E.a.Group,null,h.a.createElement(E.a.Label,null,"Name"),h.a.createElement(E.a.Control,{value:null!==(e=this.state.name)&&void 0!==e?e:"",onChange:function(e){t.setState({name:e.target.value})}})),h.a.createElement(E.a.Group,null,h.a.createElement(E.a.Label,null,"Type"),h.a.createElement(T.a,{id:"select-BuffType",options:Object.values(p.b),labels:_,onChange:function(e){t.setState({type:e})}})),h.a.createElement(g.a,{variant:"primary",onClick:function(){return t.search()}},"Search"," ",h.a.createElement(b.a,{icon:f.b}))),h.a.createElement("hr",null),h.a.createElement(v.a,{responsive:!0},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",null,"#"),h.a.createElement("th",null,"Buff"),h.a.createElement("th",null,"Usage Count"))),h.a.createElement("tbody",null,this.state.buffs.map((function(e,n){var r,a,i;return h.a.createElement("tr",{key:n},h.a.createElement("td",null,e.id),h.a.createElement("td",null,h.a.createElement(C.a,{region:t.props.region,buff:e})),h.a.createElement("td",null,(null!==(r=null===(a=e.reverse)||void 0===a||null===(i=a.nice)||void 0===i?void 0:i.function)&&void 0!==r?r:[]).length))})))))}}]),n}(h.a.Component);t.default=y}}]);
//# sourceMappingURL=11.a6fb0429.chunk.js.map