(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[21],{149:function(e,t,n){"use strict";var a=n(98),r=n.n(a),s=n(99),c=n(11),i=n(12),u=n(19),l=n(18),o=n(53),f=n(30),h=n(0),p=n.n(h),v=n(180),m=(n(150),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={ref:p.a.createRef(),selected:e.selected,focused:!1,results:!1},a}return Object(i.a)(n,[{key:"clearSelection",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selected:void 0,results:!0});case 2:this.state.ref.current.clear();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){if(void 0===e)return"All";var t=this.props.labels.get(e);return t?"".concat(t," - ").concat(e):"(".concat(e,")")}},{key:"getOption",value:function(e){return{label:this.getDescription(e),value:e}}},{key:"getOptions",value:function(){var e=this;return[this.getOption()].concat(this.props.options.map((function(t){return e.getOption(t)})))}},{key:"resetInput",value:function(){this.setState({focused:!1,results:!1})}},{key:"selectOption",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=4;break}this.setState({results:!1}),e.next=8;break;case 4:return n=t[0].value,e.next=7,this.setState({selected:n,results:!0});case 7:this.props.onChange(n);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return p.a.createElement(v.a,{ref:this.state.ref,id:this.props.id,options:this.getOptions(),placeholder:this.getDescription(this.state.selected),selected:this.state.focused&&this.state.results?[this.getOption(this.state.selected)]:[],ignoreDiacritics:!0,maxResults:1e3,onBlur:function(){e.resetInput()},onChange:function(t){e.selectOption(t)},onFocus:function(){e.setState({focused:!0})}},p.a.createElement("button",{className:"searchable-select-clear",onClick:function(t){t.preventDefault(),e.clearSelection()},onMouseDown:function(e){e.preventDefault()}},p.a.createElement(f.a,{icon:o.e})))}}]),n}(p.a.Component));t.a=m},150:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(98),r=n.n(a),s=n(99),c=n(121),i=n(11),u=n(12),l=n(19),o=n(18),f=n(53),h=n(30),p=n(0),v=n.n(p),m=n(96),b=n(94),d=n(228),g=n(100),E=n(133),k=n(54),O=n(9),y=n(149),S=n(141),j=new Map([]),w=new Map;Object.values(E.a).forEach((function(e){var t;for(var n in S.c)S.c[n].up===e&&(t=S.c[n].description+" Up"),S.c[n].down===e&&(t=S.c[n].description+" Down");void 0===t&&(t=S.b.get(e)),void 0!==t&&w.set(e,t)}));var x=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a,r;return Object(i.a)(this,n),(r=t.call(this,e)).state=null!==(a=j.get(e.region))&&void 0!==a?a:{searching:!1,buffs:[]},r}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){j.set(this.props.region,Object(c.a)({},this.state))}},{key:"search",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.name||this.state.type){e.next=4;break}return this.setState({buffs:[]}),alert("Please refine the results before searching"),e.abrupt("return");case 4:return e.prev=4,e.next=7,this.setState({searching:!0,buffs:[]});case 7:return e.next=9,g.a.searchBuffs(this.props.region,this.state.name,this.state.type);case 9:t=e.sent,this.setState({searching:!1,buffs:t}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return this.state.error?v.a.createElement(k.a,{error:this.state.error}):v.a.createElement("div",null,this.state.searching?v.a.createElement(O.a,null):null,v.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.search()}},v.a.createElement(m.a.Group,null,v.a.createElement(m.a.Label,null,"Name"),v.a.createElement(m.a.Control,{value:null!==(e=this.state.name)&&void 0!==e?e:"",onChange:function(e){t.setState({name:e.target.value})}})),v.a.createElement(m.a.Group,null,v.a.createElement(m.a.Label,null,"Type"),v.a.createElement(y.a,{id:"select-BuffType",options:Object.values(E.a),labels:w,onChange:function(e){t.setState({type:e})}})),v.a.createElement(b.a,{variant:"primary",onClick:function(){return t.search()}},"Search"," ",v.a.createElement(h.a,{icon:f.b}))),v.a.createElement("hr",null),v.a.createElement(d.a,{responsive:!0},v.a.createElement("thead",null,v.a.createElement("tr",null,v.a.createElement("th",null,"#"),v.a.createElement("th",null,"Buff"),v.a.createElement("th",null,"Usage Count"))),v.a.createElement("tbody",null,this.state.buffs.map((function(e,n){return v.a.createElement("tr",{key:n},v.a.createElement("td",null,e.id),v.a.createElement("td",null,v.a.createElement(S.a,{region:t.props.region,buff:e})),v.a.createElement("td",null,e.reverseFunctions.length))})))))}}]),n}(v.a.Component);t.default=x}}]);
//# sourceMappingURL=21.702bdd8f.chunk.js.map