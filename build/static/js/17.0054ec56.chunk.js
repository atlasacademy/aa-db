(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[17],{138:function(e,t,a){"use strict";var n=a(12),r=a(13),i=a(22),l=a(21),c=a(0),o=a.n(c),s=a(157),u=(a(146),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.header?o.a.createElement("div",{className:"data-header"},this.props.header):null,o.a.createElement(s.a,{bordered:!0,hover:!0,className:"data-table"},o.a.createElement("tbody",null,Object.keys(this.props.data).map((function(t,n){return o.a.createElement("tr",{key:n},o.a.createElement("th",null,t),o.a.createElement("td",null,a.dumpValue(e.props.data[t])))})))))}}],[{key:"dumpValue",value:function(e){if("object"===typeof e){var t=e;return void 0!==t.key&&void 0!==t.props&&void 0!==t.type?t:JSON.stringify(e)}return e}}]),a}(o.a.Component));t.a=u},141:function(e,t,a){"use strict";var n=a(26),r=a.n(n),i=a(37),l=a(12),c=a(13),o=a(22),s=a(21),u=a(59),d=a(34),p=a(158),h=a.n(p),f=a(159),m=a.n(f),v=a(0),b=a.n(v),E=a(134),g=a(160),y=a.n(g),k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showing:!1},n}return Object(c.a)(a,[{key:"hide",value:function(){this.setState({showing:!1})}},{key:"show",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.data){e.next=4;break}this.setState({showing:!0}),e.next=20;break;case 4:if("object"!==typeof this.props.data){e.next=8;break}this.setState({showing:!0,data:this.props.data}),e.next=20;break;case 8:return e.prev=8,e.t0=this,e.next=12,h.a.get(this.props.data);case 12:e.t1=e.sent.data,e.t2={showing:!0,data:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=20;break;case 17:e.prev=17,e.t3=e.catch(8),this.setState({showing:!0,data:{error:e.t3}});case 20:case"end":return e.stop()}}),e,this,[[8,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return b.a.createElement("div",null,b.a.createElement("span",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){e.show()}},"View \xa0",b.a.createElement(d.a,{icon:u.c})),b.a.createElement(E.a,{size:"lg",show:this.state.showing,onHide:function(){return e.hide()}},b.a.createElement(E.a.Header,{closeButton:!0},b.a.createElement(E.a.Title,null,"Raw Data Viewer")),b.a.createElement(E.a.Body,null,this.state.data?b.a.createElement(y.a,{src:this.state.data,collapsed:1,enableClipboard:function(e){"string"===typeof e.src&&m()(e.src)}}):null)))}}]),a}(b.a.Component);t.a=k},146:function(e,t,a){},255:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a.n(n),i=a(37),l=a(12),c=a(13),o=a(22),s=a(21),u=a(0),d=a.n(u),p=a(157),h=a(49),f=a(145),m=a(138),v=a(60),b=a(10),E=a(141),g=a(168),y=a(143),k=a(137),O=a(7),j=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){O.a.setRegion(this.props.region),this.loadBuff()}},{key:"loadBuff",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.buff(this.props.id);case 3:t=e.sent,this.setState({loading:!1,buff:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a=this;if(this.state.error)return d.a.createElement(v.a,{error:this.state.error});if(this.state.loading||!this.state.buff)return d.a.createElement(b.a,null);var n=this.state.buff;return d.a.createElement("div",null,d.a.createElement("h1",null,n.icon?d.a.createElement(f.a,{location:n.icon,height:48}):void 0,n.icon?" ":void 0,n.name),d.a.createElement("br",null),d.a.createElement(m.a,{data:{Data:d.a.createElement(E.a,{data:n}),Raw:d.a.createElement(E.a,{data:"https://api.atlasacademy.io/raw/".concat(this.props.region,"/buff/").concat(n.id)}),ID:n.id,Name:n.name,Detail:n.detail,Type:n.type,"Buff Traits":d.a.createElement("div",null,Object(k.e)(n.vals.map((function(e){return d.a.createElement(y.a,{region:a.props.region,trait:e})}))," ")),"Target Traits":d.a.createElement("div",null,Object(k.e)(n.tvals.map((function(e){return d.a.createElement(y.a,{region:a.props.region,trait:e})}))," ")),"Required Self Traits":d.a.createElement("div",null,Object(k.e)(n.ckSelfIndv.map((function(e){return d.a.createElement(y.a,{region:a.props.region,trait:e})}))," ")),"Required Opponent Traits":d.a.createElement("div",null,Object(k.e)(n.ckOpIndv.map((function(e){return d.a.createElement(y.a,{region:a.props.region,trait:e})}))," "))}}),d.a.createElement("h3",null,"Related Functions"),d.a.createElement(p.a,null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Function"),d.a.createElement("th",null,"Usage Count"))),d.a.createElement("tbody",null,(null===(e=n.reverse)||void 0===e||null===(t=e.nice)||void 0===t?void 0:t.function)?n.reverse.nice.function.map((function(e,t){var n,r,i,l,c,o;return d.a.createElement("tr",{key:t},d.a.createElement("td",null,d.a.createElement(g.a,{region:a.props.region,func:e})),d.a.createElement("td",null,(null!==(n=null===(r=e.reverse)||void 0===r||null===(i=r.nice)||void 0===i?void 0:i.NP)&&void 0!==n?n:[]).length+(null!==(l=null===(c=e.reverse)||void 0===c||null===(o=c.nice)||void 0===o?void 0:o.skill)&&void 0!==l?l:[]).length))})):void 0)))}}]),a}(d.a.Component);t.default=j}}]);
//# sourceMappingURL=17.0054ec56.chunk.js.map