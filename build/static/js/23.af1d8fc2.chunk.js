(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[23],{140:function(e,t,a){"use strict";var r=a(12),n=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:"2em"}})}}]),a}(o.a.Component);t.a=l},167:function(e,t,a){"use strict";var r=a(1),n=a(3),i=a(4),s=a.n(i),c=a(0),o=a.n(c),l=a(5),m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.striped,m=e.bordered,d=e.borderless,u=e.hover,h=e.size,b=e.variant,p=e.responsive,v=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(l.b)(a,"table"),E=s()(i,f,b&&f+"-"+b,h&&f+"-"+h,c&&f+"-striped",m&&f+"-bordered",d&&f+"-borderless",u&&f+"-hover"),y=o.a.createElement("table",Object(r.a)({},v,{className:E,ref:t}));if(p){var g=f+"-responsive";return"string"===typeof p&&(g=g+"-"+p),o.a.createElement("div",{className:g},y)}return y}));t.a=m},260:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a(13),i=a(23),s=a(22),c=a(0),o=a.n(c),l=a(167),m=a(14),d=a(49),u=a(60),h=a(140),b=a(10),p=a(6),v=(a(260),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={loading:!0,mysticCodes:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{p.a.setRegion(this.props.region),d.a.mysticCodeList().then((function(t){e.setState({loading:!1,mysticCodes:t})}))}catch(t){this.setState({error:t})}}},{key:"render",value:function(){var e=this;return this.state.error?o.a.createElement(u.a,{error:this.state.error}):this.state.loading?o.a.createElement(b.a,null):o.a.createElement("div",{id:"mystic-codes"},o.a.createElement(l.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),o.a.createElement("th",{style:{textAlign:"center",width:"140px"}},"Thumbnail"),o.a.createElement("th",null,"Name"))),o.a.createElement("tbody",null,this.state.mysticCodes.map((function(t,a){var r="/".concat(e.props.region,"/mystic-code/").concat(t.id);return o.a.createElement("tr",{key:a},o.a.createElement("td",{align:"center"},o.a.createElement(m.b,{to:r},t.id)),o.a.createElement("td",{align:"center"},o.a.createElement(m.b,{to:r},o.a.createElement(h.a,{location:t.item.male,height:50}),o.a.createElement(h.a,{location:t.item.female,height:50}))),o.a.createElement("td",null,o.a.createElement(m.b,{to:r},t.name)))})))))}}]),a}(o.a.Component));t.default=v}}]);
//# sourceMappingURL=23.af1d8fc2.chunk.js.map