(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{432:function(e,t,a){},949:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(38),i=a.n(l),o=(a(432),a(271),a(161)),u=a(81),s=a.n(u),m=a(128),d=(a(197),a(50)),p=a(406),f=(a(216),a(83)),g=(a(165),a(33)),E=(a(275),a(67)),b=(a(164),a(51)),h=(a(273),a(115)),v=a(82),x=a.n(v),y=a(419),j=(a(950),a(424)),O=a(199),_=a(214),w=a(407),N=a.n(w),I=function(e){return Number(e)>=0?"green":Number(e)<0?"red":"grey"},S=function(e){return Number(e)>=0?"+".concat(e):e},k=function(e){return Number(e)>=0},D=function(e,t){var a=e.toString(),n=a.indexOf(".");for(n<0&&(n=a.length,a+=".");a.length<=n+t;)a+="0";return a},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Math.pow(10,t);if(Number(e)>0){var n=Math.floor(Number(e)*a)/a;return D(n,t)}var r=Math.ceil(Number(e)*a)/a;return D(r,t)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/MM/DD";return N()(new Date(e)).format(t)},F=function(e){var t=e.title,a=void 0===t?"title":t,n=e.value,r=void 0===n?0:n,l=e.percision,i=void 0===l?2:l,o=e.isNormal,u=void 0===o||o,s=Object(_.a)(e,["title","value","percision","isNormal"]);return c.a.createElement(j.a,Object(O.a)({title:a,value:r,precision:i,valueStyle:{color:function(e,t){return e||"--"===t?"#000":t>=0?"#389e0d":"#cf1322"}(u,r),fontWeight:600},prefix:!u&&k(r)?"+":""},s))},M=function(e){var t=e.timestamp,a=e.pps,n=t?B(new Date(1e3*t)):"--";return c.a.createElement(F,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(n,"\uff09"),value:a||0,precision:4,suffix:"USD"})},R=function(e){var t,a=e.title,n=e.value;return t="--"===n?n:isNaN(n)?0:100*n,c.a.createElement(F,{title:a,value:t,precision:2,suffix:"%",isNormal:!1})},A=a(158),C=a(98),Y=a.n(C),z=a(426),T=function(e){var t=e.className,a=void 0===t?"":t,n=e.style,l=void 0===n?{}:n,i=e.option,o=void 0===i?{}:i,u=e.showLoading,s=void 0!==u&&u,m=e.loadingOption,d=void 0===m?{}:m,p=Object(_.a)(e,["className","style","option","showLoading","loadingOption"]),f=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=Y.a.getInstanceByDom(f.current)||Y.a.init(f.current);return e.setOption(o),function(){Y.a.dispose(e)}}),[o,f]),Object(z.a)(f,(function(e){(Y.a.getInstanceByDom(f.current)||Y.a.init(f.current)).resize()})),Object(r.useEffect)((function(){var e=Y.a.getInstanceByDom(f.current)||Y.a.init(f.current);s?e.showLoading("default",d):e.hideLoading()}),[s,d]),c.a.createElement("div",Object(O.a)({ref:f,className:"react-echarts ".concat(a),style:Object(A.a)({height:"300px",width:"600px"},l)},p))},U=function(e){var t=e.option,a=e.showLoading,n=void 0===a||a,r=e.height;return c.a.createElement(T,{option:t,style:{height:r||"350px",width:"100%"},showLoading:n,loadingOption:{text:"\u52a0\u8f7d\u4e2d...",color:"rgb(74,151,247)",zlevel:0}})},K={all:0,"1m":30,"3m":90,"6m":180,"12m":360},P="https://raw.githubusercontent.com/share-fund/fund-data/main",H=function(e){var t=e.fundManager,a=e.fundCode,n=e.dateRange,c=Object(r.useState)([]),l=Object(d.a)(c,2),i=l[0],o=l[1],u=Object(r.useState)([]),p=Object(d.a)(u,2),f=p[0],g=p[1],E=Object(r.useState)(!0),b=Object(d.a)(E,2),h=b[0],v=b[1];return Object(r.useEffect)((function(){var e="".concat(P,"/").concat(t,"/").concat(a,"/raw/btc_price.json"),r="".concat(P,"/").concat(t,"/").concat(a,"/").concat(n,".json");return function(){var t=Object(m.a)(s.a.mark((function t(){var a,c,l,i,u,m,p,f;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([x.a.get(e),x.a.get(r)]);case 2:a=t.sent,c=Object(d.a)(a,2),l=c[0].data,i=c[1].data,u=l.slice(-1*K[n]),m=u[0][1],p=i.map((function(e){return[1e3*e[0],100*e[2]]})),f=u.map((function(e){return[1e3*e[0],100*(e[1]/m-1)]})),o(p),g(f),v(!1);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){o([]),g([]),v(!0)}}),[t,a,n]),{income:i,handleIncome:f,isLoading:h}},J=function(e){var t=e.fundManager,a=e.fundCode,n=e.height,r=void 0===n?360:n,l=e.dateRange,i=H({fundManager:t,fundCode:a,dateRange:void 0===l?"all":l}),o=i.income,u=i.handleIncome,s=i.isLoading,m={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),a=B(t),n=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),c=n?"".concat(L(n.data[1],2),"%"):"--",l=r?"".concat(L(r.data[1],2),"%"):"--";return"<span>".concat(a,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(c,"</span> <br/> <span>BTCUSD: ").concat(l,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"},{name:"BTCUSD"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?o:u;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(S(L(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:o,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"#fa541c"}},{name:"BTCUSD",type:"line",data:u,itemStyle:{color:"rgba(0,0,0,.4)"},showSymbol:!1,hoverAnimation:!0}]};return c.a.createElement(U,{option:m,showLoading:s,height:r})},W=(a(951),a(423)),G=a(411),V=a.n(G),q=a(412),Q=a.n(q),X=function(e){var t=e.fund,a=Object(r.useState)("\u52a0\u8f7d\u4e2d..."),n=Object(d.a)(a,2),l=n[0],i=n[1];return Object(r.useEffect)((function(){t.manager&&t.code&&fetch("".concat("https://raw.githubusercontent.com/share-fund/fund-data/main","/").concat(t.manager,"/").concat(t.code,"/description.md")).then((function(e){return e.text()})).then((function(e){i(e)}))}),[t]),c.a.createElement(W.a,null,c.a.createElement(V.a,{plugins:[Q.a],children:l}))},Z=(a(394),a(53)),$=function(e){var t=e.statistic,a=function(e){return S(L(100*e||0,2))};return c.a.createElement(Z.b,{bordered:!0,column:1,size:"small"},c.a.createElement(Z.b.Item,{label:"\u8fd11\u6708"},c.a.createElement("span",{className:I(t.last_1m_pnl_rate||0)},a(t.last_1m_pnl_rate)," %")),c.a.createElement(Z.b.Item,{label:"\u8fd13\u6708"},c.a.createElement("span",{className:I(t.last_3m_pnl_rate||0)},a(t.last_3m_pnl_rate)," %")),c.a.createElement(Z.b.Item,{label:"\u8fd16\u6708"},c.a.createElement("span",{className:I(t.last_6m_pnl_rate||0)},a(t.last_6m_pnl_rate)," %")),c.a.createElement(Z.b.Item,{label:"\u8fd11\u5e74"},c.a.createElement("span",{className:I(t.last_12m_pnl_rate||0)},a(t.last_12m_pnl_rate)," %")))},ee=(a(405),a(162)),te=a(425),ae=function(e){var t=e.data,a=[{title:"\u65e5\u671f",dataIndex:"date",key:"date"},{title:"\u51c0\u503c",dataIndex:"value",key:"value",render:function(e){return e}},{title:"\u65e5\u6da8\u5e45",dataIndex:"incomeRate",key:"incomeRate",render:function(e){return c.a.createElement("span",{className:I(e)},S(L(e,2)),"%")}}];return c.a.createElement(ee.a,{columns:a,dataSource:function(e){return e.length>0?e.map((function(e){return{date:B(1e3*e[0]),value:L(e[1],4),incomeRate:100*e[3],key:e[0]}})):[]}(Object(te.a)(t).reverse()),pagination:{simple:!0}})},ne=function(e){var t=e.metrics;return c.a.createElement(Z.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"}},c.a.createElement(Z.b.Item,{label:"\u65e5\u80dc\u7387"},t.strategy&&(100*t.strategy.daily_winning_ratio).toFixed(2)||"--"," %"),c.a.createElement(Z.b.Item,{label:"\u5e74\u5316\u6ce2\u52a8\u7387"},t.strategy&&(100*t.strategy.annual_volatility).toFixed(2)||"--"," %"),c.a.createElement(Z.b.Item,{label:"Alpha"},t.strategy&&t.strategy.alpha.toFixed(2)||"--"),c.a.createElement(Z.b.Item,{label:"Beta"},t.strategy&&t.strategy.beta.toFixed(2)||"--"),c.a.createElement(Z.b.Item,{label:"\u590f\u666e\u6bd4\u7387"},t.strategy&&t.strategy.sharpe_ratio.toFixed(2)||"--"),c.a.createElement(Z.b.Item,{label:"\u7d22\u63d0\u8bfa\u6bd4\u7387"},t.strategy&&t.strategy.sortino_ratio.toFixed(2)||"--"),c.a.createElement(Z.b.Item,{label:"\u6700\u5927\u56de\u64a4\u7387"},t.strategy&&(100*t.strategy.max_drawdown).toFixed(2)||"--"," %"))},re=(a(403),a(212)),ce=function(e){var t,a=e.metrics,n=e.statistic,r=e.fundName,l=e.showAnnualReturn,i=void 0!==l&&l,o=e.status;return c.a.createElement(g.a,{xs:24},c.a.createElement(f.a,{title:c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("span",{style:{marginRight:"20px"}},r)),extra:c.a.createElement(c.a.Fragment,null,c.a.createElement(re.a,{color:"default"},function(e){return"stopped"===e?"\u5df2\u7ed3\u675f":"prepare"===e?"\u5f85\u542f\u52a8":"running"===e?"\u8fd0\u884c\u4e2d":"\u5df2\u7ed3\u675f"}(o)))},c.a.createElement(b.a,null,c.a.createElement(g.a,{sm:5,xs:12},c.a.createElement(R,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:(t=i,t?a.strategy&&a.strategy.annual_return:"--")})),c.a.createElement(g.a,{sm:5,xs:12},c.a.createElement(R,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:n.pnl_rate})),c.a.createElement(g.a,{sm:5,xs:12},c.a.createElement(M,{timestamp:n.timestamp,pps:n.pps})),c.a.createElement(g.a,{sm:5,xs:12},c.a.createElement(R,{title:"\u6628\u65e5\u6da8\u8dcc",value:n.last_day_pnl_rate})),c.a.createElement(g.a,{sm:4,xs:12},c.a.createElement(F,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})))))},le=a(26),ie=a(418),oe=a.n(ie),ue=o.a.Content,se=h.a.TabPane,me="https://raw.githubusercontent.com/share-fund/fund-data/main",de=Object(y.a)((function(e){var t,a=e.className,n=e.data,l=Object(r.useState)([]),i=Object(d.a)(l,2),u=i[0],p=i[1],v=Object(r.useState)({}),y=Object(d.a)(v,2),j=y[0],O=y[1],_=Object(r.useState)({}),w=Object(d.a)(_,2),N=w[0],I=w[1],S=Object(r.useState)("all"),k=Object(d.a)(S,2),D=k[0],L=k[1],B=Object(le.f)().search,F=oe.a.parse(B.replace("?","")),M=F.code,R=F.manager,A=(null===(t=n[R])||void 0===t?void 0:t.funds)?n[R].funds.find((function(e){return e.code===M})):{};A.manager=R;var C=A.showAnnualReturn,Y=A.status;Object(r.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([x.a.get("".concat(me,"/").concat(R,"/").concat(M,"/all.json")),x.a.get("".concat(me,"/").concat(R,"/").concat(M,"/statistic.json")),x.a.get("".concat(me,"/").concat(R,"/").concat(M,"/metrics.json"))]);case 2:t=e.sent,a=Object(d.a)(t,3),n=a[0].data,r=a[1].data,c=a[2].data,I(c),p(n),O(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[M,R]);return c.a.createElement(o.a,{className:a},c.a.createElement(ue,null,c.a.createElement(b.a,{className:"content",gutter:24},c.a.createElement(ce,{fundName:A.name,metrics:N,statistic:j,showAnnualReturn:C,status:Y})),c.a.createElement(b.a,{className:"content",gutter:24},c.a.createElement(g.a,{sm:15,xs:24},c.a.createElement(f.a,{title:"\u4e1a\u7ee9\u8d70\u52bf"},c.a.createElement(b.a,null,c.a.createElement(g.a,{xs:24,style:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(r.useMemo)((function(){return c.a.createElement(J,{fundManager:R,fundCode:M,dateRange:D})}),[M,D,R]),c.a.createElement(E.a.Group,{defaultValue:"all",buttonStyle:"solid",onChange:function(e){L(e.target.value)},style:{marginTop:"10px"}},c.a.createElement(E.a.Button,{value:"1m"},"\u8fd11\u6708"),c.a.createElement(E.a.Button,{value:"3m"},"\u8fd13\u6708"),c.a.createElement(E.a.Button,{value:"6m"},"\u8fd16\u6708"),c.a.createElement(E.a.Button,{value:"12m"},"\u8fd11\u5e74"),c.a.createElement(E.a.Button,{value:"all"},"\u6240\u6709")))))),c.a.createElement(g.a,{sm:9,xs:24},c.a.createElement(f.a,{title:"\u7edf\u8ba1\u6307\u6807"},c.a.createElement(ne,{metrics:N})))),c.a.createElement(b.a,{className:"content",gutter:24},c.a.createElement(g.a,{sm:15,xs:24},c.a.createElement(f.a,{className:"p-t-0"},c.a.createElement(h.a,{defaultActiveKey:"1",style:{background:"#fff"},size:"large"},c.a.createElement(se,{tab:"\u9879\u76ee\u7b80\u4ecb",key:"1"},c.a.createElement(X,{fund:A}))))),c.a.createElement(g.a,{sm:9,xs:24},c.a.createElement(f.a,{className:"p-t-0"},c.a.createElement(h.a,{defaultActiveKey:"1",size:"large"},c.a.createElement(se,{tab:"\u5386\u53f2\u4e1a\u7ee9",key:"1"},c.a.createElement($,{statistic:j})),c.a.createElement(se,{tab:"\u5386\u53f2\u51c0\u503c",key:"2"},c.a.createElement(ae,{data:u}))))))))}))(n||(n=Object(p.a)(["\n  .p-24 {\n    padding: 24px;\n  }\n  .m-t-24 {\n    margin-top: 24px;\n  }\n  .m-b-24 {\n    margin-bottom: 24px;\n  }\n  .p-t-0 {\n    padding-top: 0;\n    .ant-card-body {\n      padding-top: 0;\n    }\n  }\n  .content {\n    padding-top: 24px;\n    max-width: 1200px;\n    margin: 0 auto !important;\n  }\n  .title-p-t-10 {\n    padding-top: 20px;\n  }\n"]))),pe=a(127),fe=a(422),ge=a.n(fe),Ee=function(e){var t=e.data,a=Object.keys(t),n=[{title:"\u540d\u79f0",dataIndex:"name",key:"name",render:function(e,t){var a=t.code,n=t.manager;return"prepare"===t.status?e:c.a.createElement(pe.b,{to:"details?code=".concat(a,"&manager=").concat(n)},e)}},{title:"\u65e5\u671f",dataIndex:"data",render:function(e){return ge()(+new Date(e.datetime)).format("YYYY-MM-DD")}},{title:"\u6700\u65b0\u51c0\u503c",dataIndex:"data",render:function(e){return e.pps}},{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",dataIndex:"data",render:function(e){return c.a.createElement("span",{className:e.cum_pnl_rate>=0?"green":"red"},(100*e.cum_pnl_rate).toFixed(2)," %")}},{title:"\u6628\u65e5\u6da8\u8dcc",dataIndex:"data",render:function(e){return c.a.createElement("span",{className:e.daily_pnl_rate>=0?"green":"red"},(100*e.daily_pnl_rate).toFixed(2)," %")}},{title:"\u72b6\u6001",key:"status",dataIndex:"status",render:function(e){var t="running"===e?"green":"default";return c.a.createElement(re.a,{color:t,key:e},function(e){switch(e){case"prepare":return"\u5f85\u542f\u52a8";case"running":return"\u8fd0\u884c\u4e2d";case"done":return"\u5df2\u7ed3\u675f";default:return"\u672a\u77e5"}}(e))}}],r=function(e,t){return e.map((function(e){return Object(A.a)(Object(A.a)({},e),{},{manager:t})}))};return c.a.createElement("div",{style:{maxWidth:"1200px",margin:"24px auto",width:"100%"}},a.map((function(e){return c.a.createElement(b.a,{key:t[e].name,gutter:[24,24],style:{margin:"24px auto"}},c.a.createElement(g.a,{xs:24},c.a.createElement(f.a,{title:t[e].name},t[e].funds.filter((function(e){return"prepare"===e.status||"running"===e.status})).length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ee.a,{rowKey:"code",columns:n,dataSource:r(t[e].funds.filter((function(e){return"prepare"===e.status||"running"===e.status})),e),pagination:!1})),t[e].funds.filter((function(e){return"done"===e.status})).length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{style:{marginTop:"48px"}},"\u5f80\u671f\u9879\u76ee"),c.a.createElement(ee.a,{rowKey:"code",columns:n,dataSource:r(t[e].funds.filter((function(e){return"done"===e.status||"done"===e.status})),e),pagination:!1})))))})))},be=function(e){var t=e.url;return c.a.createElement("div",{style:{background:"#0A1825",height:"56px",lineHeight:"56px"}},c.a.createElement("a",{href:"/"},c.a.createElement("img",{style:{height:"26px",padding:"0 16px"},src:t,alt:"logo"})))},he=function(e){var t=e.url,a=t?"url(".concat(t,") center center / cover"):"#000";return c.a.createElement("div",{style:{height:"300px",background:a}})},ve=function(){var e=Object(r.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat("https://raw.githubusercontent.com/share-fund/fund-data/main","/list.json"));case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){}),[a]),c.a.createElement(o.a,null,c.a.createElement(be,{url:"/logo.png"}),c.a.createElement(le.c,null,c.a.createElement(le.a,{path:"/",element:c.a.createElement(he,{url:"/banner.png"})})),c.a.createElement(le.c,null,c.a.createElement(le.a,{path:"/",element:c.a.createElement(Ee,{data:a})}),c.a.createElement(le.a,{path:"/details",element:c.a.createElement(de,{data:a})})))},xe=a(62),ye=Object(xe.c)();i.a.render(c.a.createElement(pe.a,{history:ye},c.a.createElement(ve,null)),document.getElementById("root"))}},[[949,1,2]]]);