(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[15],{138:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return l}));var n=a(0),r=a.n(n);function s(e,t){if("string"===typeof e)return s(parseInt(e),t);var a=(null!==e&&void 0!==e?e:0)/Math.pow(10,t);return"".concat(a,"%")}function i(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")}function c(e){return e?r.a.createElement("span",null,l(e.split("\n"),r.a.createElement("br",null))):""}function o(e,t){var a=[],n=function(e){if(void 0!==e)if("object"!==typeof e)if(0!==a.length){var t=a[a.length-1];"string"===typeof t?a[a.length-1]=t+e.toString():a.push(e.toString())}else a.push(e.toString());else a.push(e)};return e.forEach((function(e,a){a>0&&n(t),n(e)})),a}function l(e,t){return r.a.createElement(r.a.Fragment,null,o(e,t).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e)})))}},140:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),c=a(0),o=a.n(c),l=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:"2em"}})}}]),a}(o.a.Component);t.a=l},143:function(e,t,a){"use strict";a.d(t,"b",(function(){return d}));var n=a(20),r=a.n(n),s=a(34),i=a(12),c=a(13),o=a(23),l=a(22),u=a(0),p=a.n(u),f=a(14),h=a(49),d=new Map([[1,"Gender:Male"],[2,"Gender:Female"],[3,"Gender:Unknown"],[100,"Class:Saber"],[101,"Class:Lancer"],[102,"Class:Archer"],[103,"Class:Rider"],[104,"Class:Caster"],[105,"Class:Assassin"],[106,"Class:Berserker"],[107,"Class:Shielder"],[108,"Class:Ruler"],[109,"Class:Alter Ego"],[110,"Class:Avenger"],[111,"Demon Pillar"],[112,"Class:Grand Caster"],[113,"Beast I"],[114,"Beast II"],[115,"Class:Moon Cancer"],[116,"Beast IIIR"],[117,"Class:Foreigner"],[118,"Beast IIIL"],[119,"Beast Unknown"],[200,"Attribute:Sky"],[201,"Attribute:Earth"],[202,"Attribute:Human"],[203,"Attribute:Star"],[204,"Attribute:Beast"],[300,"Alignment:Lawful"],[301,"Alignment:Chaotic"],[302,"Alignment:Neutral"],[303,"Alignment:Good"],[304,"Alignment:Evil"],[305,"Alignment:Balanced"],[306,"Alignment:Madness"],[308,"Alignment:Summer"],[1e3,"Servant"],[1002,"Undead"],[1122,"Shadow Servant"],[1172,"Threats against Humanity"],[2004,"Roman"],[2005,"Beasts"],[2019,"Demonic"],[2039,"Near Water"],[2386,"Kingprotea: Proliferation"],[2387,"Kingprotea: Growth"],[2466,"Argonaut"],[2654,"Pseudo-Servant"],[2664,"Kingprotea: Proliferation NP Defense"],[3004,"Buff"],[3005,"Debuff"],[3006,"Buff:Offensive"],[3007,"Buff:Defensive"],[3011,"Poison"],[3012,"Charm"],[3015,"Burn"],[3021,"Evade"],[3026,"Curse"],[3047,"Pigify"],[4001,"Card:Arts"],[4002,"Card:Buster"],[4003,"Card:Quick"],[4004,"Card:Extra"],[4008,"Player Card"],[4100,"Critical Hit"]]),m=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={id:"number"===typeof e.trait?e.trait:e.trait.id,trait:"number"===typeof e.trait?void 0:e.trait},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.trait){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.a.traitList();case 4:t=e.sent,a=0;case 6:if(!(a<t.length)){e.next=14;break}if((n=t[a]).id!==this.state.id){e.next=11;break}return this.setState({trait:n}),e.abrupt("return");case 11:a++,e.next=6;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(){return d.get(this.state.id)||(this.state.trait&&"unknown"!==this.state.trait.name?this.state.trait.name:"unknown(".concat(this.state.id,")"))}},{key:"getLocation",value:function(){return"/".concat(this.props.region,"/entities/trait/").concat(this.state.id)}},{key:"render",value:function(){return this.props.disableLink?p.a.createElement("span",null,"[",this.getDescription(),"]"):p.a.createElement(f.b,{to:this.getLocation()},"[",this.getDescription(),"]")}}]),a}(p.a.Component);t.a=m},150:function(e,t,a){"use strict";var n=a(20),r=a.n(n),s=a(34),i=a(12),c=a(13),o=a(23),l=a(22),u=a(59),p=a(35),f=a(0),h=a.n(f),d=a(165),m=(a(151),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={ref:h.a.createRef(),selected:e.selected,focused:!1,results:!1},n}return Object(c.a)(a,[{key:"clearSelection",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selected:void 0,results:!0});case 2:this.state.ref.current.clear();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){if(void 0===e)return"All";var t=this.props.labels.get(e);return this.props.disableLabelStyling?t||("string"===typeof e?e:"Unknown"):t?"".concat(t," - ").concat(e):"(".concat(e,")")}},{key:"getOption",value:function(e){return{label:this.getDescription(e),value:e}}},{key:"getOptions",value:function(){var e=this;return(this.props.hideAll?[]:[this.getOption()]).concat(this.props.options.map((function(t){return e.getOption(t)})))}},{key:"resetInput",value:function(){this.setState({focused:!1,results:!1})}},{key:"selectOption",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=4;break}this.setState({results:!1}),e.next=8;break;case 4:return a=t[0].value,e.next=7,this.setState({selected:a,results:!0});case 7:this.props.onChange(a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return h.a.createElement(d.a,{ref:this.state.ref,id:this.props.id,options:this.getOptions(),placeholder:this.getDescription(this.state.selected),selected:this.state.focused&&this.state.results?[this.getOption(this.state.selected)]:[],ignoreDiacritics:!0,maxResults:null!==(e=this.props.maxResults)&&void 0!==e?e:1e3,onBlur:function(){t.resetInput()},onChange:function(e){t.selectOption(e)},onFocus:function(){t.setState({focused:!0})}},this.props.hideReset?null:h.a.createElement("button",{className:"searchable-select-clear",onClick:function(e){e.preventDefault(),t.clearSelection()},onMouseDown:function(e){e.preventDefault()}},h.a.createElement(p.a,{icon:u.e})))}}]),a}(h.a.Component));t.a=m},151:function(e,t,a){},153:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return s}))},167:function(e,t,a){"use strict";var n=a(1),r=a(3),s=a(4),i=a.n(s),c=a(0),o=a.n(c),l=a(5),u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,c=e.striped,u=e.bordered,p=e.borderless,f=e.hover,h=e.size,d=e.variant,m=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(l.b)(a,"table"),g=i()(s,v,d&&v+"-"+d,h&&v+"-"+h,c&&v+"-striped",u&&v+"-bordered",p&&v+"-borderless",f&&v+"-hover"),E=o.a.createElement("table",Object(n.a)({},b,{className:g,ref:t}));if(m){var O=v+"-responsive";return"string"===typeof m&&(O=O+"-"+m),o.a.createElement("div",{className:O},E)}return E}));t.a=u},281:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a.n(n),s=a(34),i=a(153),c=a(12),o=a(13),l=a(23),u=a(22),p=a(11),f=a(59),h=a(35),d=a(0),m=a.n(d),b=a(136),v=a(134),g=a(167),E=a(7),O=a(14),y=a(49),C=a(60),k=a(140),S=a(10),j=a(150),w=a(6),N=a(1),A=a(3),L=a(4),I=a.n(L),x=a(5),D=m.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,r=e.pill,s=e.className,i=e.as,c=void 0===i?"span":i,o=Object(A.a)(e,["bsPrefix","variant","pill","className","as"]),l=Object(x.b)(a,"badge");return m.a.createElement(c,Object(N.a)({ref:t},o,{className:I()(s,l,r&&l+"-pill",n&&l+"-"+n)}))}));D.displayName="Badge",D.defaultProps={pill:!1};var P=D,T=a(165),M=a(143),R=a(138),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ref:m.a.createRef()},n}return Object(o.a)(a,[{key:"options",value:function(){return this.props.traitList.map((function(e){var t,a=null!==(t=M.b.get(e.id))&&void 0!==t?t:"(".concat(e.name,")");return{label:"".concat(e.id.toString().padStart(4,"0")," - ").concat(a),value:e.id}}))}},{key:"resetInput",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({input:""}),e&&this.state.ref.current.clear()}},{key:"addInputTrait",value:function(){var e=this.state.input;e&&e.match(/^[0-9]+$/)?(this.addTrait(parseInt(e)),this.resetInput()):this.resetInput()}},{key:"addTrait",value:function(e){this.props.onUpdate(this.props.traits.concat([e]))}},{key:"removeTrait",value:function(e){console.log(e,this.props.traits.filter((function(t){return t!==e}))),this.props.onUpdate(this.props.traits.filter((function(t){return t!==e})))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("p",null,this.props.traits.length>0?Object(R.e)(this.props.traits.map((function(t){return m.a.createElement("span",{key:t,style:{cursor:"pointer"},onClick:function(a){a.preventDefault(),e.removeTrait(t)}},m.a.createElement(P,{variant:"primary"},m.a.createElement(M.a,{region:e.props.region,trait:t,disableLink:!0}),"\xa0",m.a.createElement(h.a,{icon:f.f})))}))," "):m.a.createElement("i",null,"No Traits Selected")),m.a.createElement(T.a,{ref:this.state.ref,id:"traitsSelector",options:this.options(),placeholder:"Add Trait Filter",ignoreDiacritics:!0,selected:[],onBlur:function(){e.resetInput(!1)},onChange:function(t){t.length>0&&e.addTrait(t[0].value)},onInputChange:function(t){e.setState({input:t})},onKeyDown:function(t){13===t.keyCode&&e.addInputTrait()}}))}}]),a}(m.a.Component),G=new Map,U=new Map,_=new Map([[p.f.NORMAL,"Servant"],[p.f.HEROINE,"Servant (Mash)"],[p.f.COMBINE_MATERIAL,"Exp Card"],[p.f.ENEMY,"Enemy"],[p.f.ENEMY_COLLECTION,"Enemy Servant"],[p.f.ENEMY_COLLECTION_DETAIL,"Boss"],[p.f.SERVANT_EQUIP,"Craft Essence"],[p.f.STATUS_UP,"Fou Card"]]),F=new Map,Y=new Map([]),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(c.a)(this,a),n=t.call(this,e);var r,s={loading:!0,traitList:[],searching:!1,entities:[],traits:[]};e.traitSelected?n.state=Object(i.a)(Object(i.a)({},s),{},{traits:[e.traitSelected]}):n.state=null!==(r=Y.get(e.region))&&void 0!==r?r:s;return n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.a.setRegion(this.props.region),e.prev=1,e.next=4,y.a.traitList();case 4:if(t=e.sent,!this.props.traitSelected){e.next=9;break}return e.next=8,this.search();case 8:this.props.history.replace("/".concat(this.props.region,"/entities"));case 9:this.setState({loading:!1,traitList:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.setState({error:e.t0});case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){Y.set(this.props.region,Object(i.a)({},this.state))}},{key:"location",value:function(e){switch(e.type){case p.f.NORMAL:case p.f.HEROINE:return"/".concat(this.props.region,"/servant/").concat(e.id);case p.f.SERVANT_EQUIP:return"/".concat(this.props.region,"/craft-essence/").concat(e.id);case p.f.ENEMY:case p.f.ENEMY_COLLECTION:case p.f.ENEMY_COLLECTION_DETAIL:return"/".concat(this.props.region,"/enemy/").concat(e.id)}}},{key:"search",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.name||this.state.className||this.state.gender||this.state.attribute||0!==this.state.traits.length){e.next=4;break}return this.setState({entities:[]}),alert("Please refine the results before searching"),e.abrupt("return");case 4:return e.prev=4,e.next=7,this.setState({searching:!0,entities:[]});case 7:return e.next=9,y.a.searchEntity(this.state.name,this.state.type,this.state.className,this.state.gender,this.state.attribute,this.state.traits);case 9:t=e.sent,this.setState({searching:!1,entities:t}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return this.state.error?m.a.createElement(C.a,{error:this.state.error}):this.state.loading?m.a.createElement(S.a,null):m.a.createElement("div",null,this.state.searching?m.a.createElement(S.a,null):null,m.a.createElement("h1",null,"Entities Search"),m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.search()}},m.a.createElement(b.a.Group,null,m.a.createElement(b.a.Label,null,"Name"),m.a.createElement(b.a.Control,{value:null!==(e=this.state.name)&&void 0!==e?e:"",onChange:function(e){t.setState({name:e.target.value})}})),m.a.createElement(b.a.Group,null,m.a.createElement(b.a.Label,null,"Type"),m.a.createElement(j.a,{id:"select-EntityType",options:Object.values(p.f),labels:_,selected:this.state.type,onChange:function(e){t.setState({type:e})}})),m.a.createElement(b.a.Group,null,m.a.createElement(b.a.Label,null,"Class"),m.a.createElement(j.a,{id:"select-ClassName",options:Object.values(p.d).filter((function(e){return e!==p.d.EXTRA})),labels:U,selected:this.state.className,onChange:function(e){t.setState({className:e})}})),m.a.createElement(b.a.Group,null,m.a.createElement(b.a.Label,null,"Gender"),m.a.createElement(j.a,{id:"select-Gender",options:Object.values(p.g),labels:F,selected:this.state.gender,onChange:function(e){t.setState({gender:e})}})),m.a.createElement(b.a.Group,null,m.a.createElement(b.a.Label,null,"Attribute"),m.a.createElement(j.a,{id:"select-Attribute",options:Object.values(p.b),labels:G,selected:this.state.attribute,onChange:function(e){t.setState({attribute:e})}})),m.a.createElement(b.a.Group,null,m.a.createElement(b.a.Label,null,"Traits"),m.a.createElement(B,{region:this.props.region,traitList:this.state.traitList,traits:this.state.traits,onUpdate:function(e){t.setState({traits:e})}})),m.a.createElement(v.a,{variant:"primary",onClick:function(){return t.search()}},"Search"," ",m.a.createElement(h.a,{icon:f.b}))),m.a.createElement("hr",null),m.a.createElement(g.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"Type"),m.a.createElement("th",null,"Icon"),m.a.createElement("th",null,"Name"))),m.a.createElement("tbody",null,this.state.entities.map((function(e,a){var n,r=t.location(e);return m.a.createElement("tr",{key:a},m.a.createElement("td",null,r?m.a.createElement(O.b,{to:r},e.id):e.id),m.a.createElement("td",null,null!==(n=_.get(e.type))&&void 0!==n?n:e.type),m.a.createElement("td",null,m.a.createElement(k.a,{location:e.face})),m.a.createElement("td",null,e.name))})))))}}]),a}(m.a.Component);t.default=Object(E.f)(H)}}]);
//# sourceMappingURL=15.a3c9c65a.chunk.js.map