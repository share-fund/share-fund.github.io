(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{419:function(e,t,a){},934:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(37),i=a.n(l),o=(a(419),a(259),a(155)),s=a(393),m=(a(260),a(113)),u=(a(207),a(34)),d=(a(263),a(65)),p=(a(206),a(55)),f=a(129),g=a.n(f),b=a(188),E=a(54),v=(a(261),a(112)),h=a(108),y=a.n(h),x=a(404),j=(a(936),a(409)),O=a(190),w=a(204),_=a(394),N=a.n(_),S=function(e){return Number(e)>=0?"green":Number(e)<0?"red":"grey"},I=function(e){return Number(e)>=0?"+".concat(e):e},L=function(e){return Number(e)>=0},B=function(e,t){var a=e.toString(),n=a.indexOf(".");for(n<0&&(n=a.length,a+=".");a.length<=n+t;)a+="0";return a},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Math.pow(10,t);if(Number(e)>0){var n=Math.floor(Number(e)*a)/a;return B(n,t)}var r=Math.ceil(Number(e)*a)/a;return B(r,t)},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/MM/DD";return N()(new Date(e)).format(t)},k=function(e){var t=e.title,a=void 0===t?"title":t,n=e.value,r=void 0===n?0:n,l=e.percision,i=void 0===l?2:l,o=e.isNormal,s=void 0===o||o,m=Object(w.a)(e,["title","value","percision","isNormal"]);return c.a.createElement(j.a,Object(O.a)({title:a,value:r,precision:i,valueStyle:{color:function(e,t){return e||"--"===t?"#000":t>=0?"#389e0d":"#cf1322"}(s,r),fontWeight:600},prefix:!s&&L(r)?"+":""},m))},C=function(e){var t=e.timestamp,a=e.pps,n=t?R(new Date(1e3*t)):"--";return c.a.createElement(k,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(n,"\uff09"),value:a||0,precision:4,suffix:"USD"})},A=function(e){var t,a=e.title,n=e.value;return t="--"===n?n:isNaN(n)?0:100*n,c.a.createElement(k,{title:a,value:t,precision:2,suffix:"%",isNormal:!1})},M=a(413),F=a(93),z=a.n(F),T=a(411),U=function(e){var t=e.className,a=void 0===t?"":t,n=e.style,l=void 0===n?{}:n,i=e.option,o=void 0===i?{}:i,s=e.showLoading,m=void 0!==s&&s,u=e.loadingOption,d=void 0===u?{}:u,p=Object(w.a)(e,["className","style","option","showLoading","loadingOption"]),f=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=z.a.getInstanceByDom(f.current)||z.a.init(f.current);return e.setOption(o),function(){z.a.dispose(e)}}),[o,f]),Object(T.a)(f,(function(e){(z.a.getInstanceByDom(f.current)||z.a.init(f.current)).resize()})),Object(r.useEffect)((function(){var e=z.a.getInstanceByDom(f.current)||z.a.init(f.current);m?e.showLoading("default",d):e.hideLoading()}),[m,d]),c.a.createElement("div",Object(O.a)({ref:f,className:"react-echarts ".concat(a),style:Object(M.a)({height:"300px",width:"600px"},l)},p))},P=function(e){var t=e.option,a=e.showLoading,n=void 0===a||a,r=e.height;return c.a.createElement(U,{option:t,style:{height:r||"350px",width:"100%"},showLoading:n,loadingOption:{text:"\u52a0\u8f7d\u4e2d...",color:"rgb(74,151,247)",zlevel:0}})},Y="https://raw.githubusercontent.com/share-fund",J=function(e){var t=e.fundManager,a=e.fundCode,n=e.dateRange,c=Object(r.useState)([]),l=Object(E.a)(c,2),i=l[0],o=l[1],s=Object(r.useState)([]),m=Object(E.a)(s,2),u=m[0],d=m[1],p=Object(r.useState)(!0),f=Object(E.a)(p,2),v=f[0],h=f[1];return Object(r.useEffect)((function(){var e="".concat(Y,"/").concat(t,"/main/").concat(a,"/raw/btc_price.json"),r="".concat(Y,"/").concat(t,"/main/").concat(a,"/").concat(n,".json");return function(){var t=Object(b.a)(g.a.mark((function t(){var a,n,c,l,i,s,m;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([y.a.get(e),y.a.get(r)]);case 2:a=t.sent,n=Object(E.a)(a,2),c=n[0].data,l=n[1].data,i=c[0][1],s=l.map((function(e){return[1e3*e[0],100*e[2]]})),m=c.map((function(e){return[1e3*e[0],100*(e[1]/i-1)]})),o(s),d(m),h(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){o([]),d([]),h(!0)}}),[t,a,n]),{income:i,handleIncome:u,isLoading:v}},K=function(e){var t=e.fundManager,a=e.fundCode,n=e.height,r=void 0===n?360:n,l=e.dateRange,i=J({fundManager:t,fundCode:a,dateRange:void 0===l?"all":l}),o=i.income,s=i.handleIncome,m=i.isLoading,u={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),a=R(t),n=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),c=n?"".concat(D(n.data[1],2),"%"):"--",l=r?"".concat(D(r.data[1],2),"%"):"--";return"<span>".concat(a,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(c,"</span> <br/> <span>BTCUSD: ").concat(l,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"},{name:"BTCUSD"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?o:s;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(I(D(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:o,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"#fa541c"}},{name:"BTCUSD",type:"line",data:s,itemStyle:{color:"rgba(0,0,0,.4)"},showSymbol:!1,hoverAnimation:!0}]};return c.a.createElement(P,{option:u,showLoading:m,height:r})},G=(a(937),a(408)),H=a(397),V=a.n(H),W=a(398),q=a.n(W),Q=function(e){var t=e.fund,a=Object(r.useState)("\u52a0\u8f7d\u4e2d..."),n=Object(E.a)(a,2),l=n[0],i=n[1];return fetch("".concat("https://raw.githubusercontent.com/share-fund/fund-descriptions/main","/").concat(t.manager,"/").concat(t.code,".md")).then((function(e){return e.text()})).then((function(e){i(e)})),c.a.createElement(G.a,null,c.a.createElement(V.a,{plugins:[q.a],children:l}))},X=(a(383),a(50)),Z=function(e){var t=e.statistic,a=function(e){return I(D(100*e||0,2))};return c.a.createElement(X.b,{bordered:!0,column:1,size:"small"},c.a.createElement(X.b.Item,{label:"\u8fd11\u6708"},c.a.createElement("span",{className:S(t.last_1m_pnl_rate||0)},a(t.last_1m_pnl_rate)," %")),c.a.createElement(X.b.Item,{label:"\u8fd13\u6708"},c.a.createElement("span",{className:S(t.last_3m_pnl_rate||0)},a(t.last_3m_pnl_rate)," %")),c.a.createElement(X.b.Item,{label:"\u8fd16\u6708"},c.a.createElement("span",{className:S(t.last_6m_pnl_rate||0)},a(t.last_6m_pnl_rate)," %")),c.a.createElement(X.b.Item,{label:"\u8fd11\u5e74"},c.a.createElement("span",{className:S(t.last_12m_pnl_rate||0)},a(t.last_12m_pnl_rate)," %")))},$=(a(935),a(407)),ee=a(410),te=function(e){var t=e.data,a=[{title:"\u65e5\u671f",dataIndex:"date",key:"date"},{title:"\u51c0\u503c",dataIndex:"value",key:"value",render:function(e){return e}},{title:"\u65e5\u6da8\u5e45",dataIndex:"incomeRate",key:"incomeRate",render:function(e){return c.a.createElement("span",{className:S(e)},I(D(e,2)),"%")}}];return c.a.createElement($.a,{columns:a,dataSource:function(e){return e.length>0?e.map((function(e){return{date:R(1e3*e[0]),value:D(e[1],4),incomeRate:100*e[3],key:e[0]}})):[]}(Object(ee.a)(t).reverse()),pagination:{simple:!0}})},ae=function(e){var t=e.metrics;return c.a.createElement(X.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"}},c.a.createElement(X.b.Item,{label:"\u65e5\u80dc\u7387"},t.strategy&&(100*t.strategy.daily_winning_ratio).toFixed(2)||"--"," %"),c.a.createElement(X.b.Item,{label:"\u5e74\u5316\u6ce2\u52a8\u7387"},t.strategy&&(100*t.strategy.annual_volatility).toFixed(2)||"--"," %"),c.a.createElement(X.b.Item,{label:"Alpha"},t.strategy&&t.strategy.alpha.toFixed(2)||"--"),c.a.createElement(X.b.Item,{label:"Beta"},t.strategy&&t.strategy.beta.toFixed(2)||"--"),c.a.createElement(X.b.Item,{label:"\u590f\u666e\u6bd4\u7387"},t.strategy&&t.strategy.sharpe_ratio.toFixed(2)||"--"),c.a.createElement(X.b.Item,{label:"\u7d22\u63d0\u8bfa\u6bd4\u7387"},t.strategy&&t.strategy.sortino_ratio.toFixed(2)||"--"),c.a.createElement(X.b.Item,{label:"\u6700\u5927\u56de\u64a4\u7387"},t.strategy&&(100*t.strategy.max_drawdown).toFixed(2)||"--"," %"))},ne=(a(932),a(412)),re=function(e){var t,a=e.metrics,n=e.statistic,r=e.fundName,l=e.showAnnualReturn,i=void 0!==l&&l;return c.a.createElement(u.a,{xs:24},c.a.createElement(m.a,{title:c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("span",{style:{marginRight:"20px"}},r)),extra:c.a.createElement(c.a.Fragment,null,c.a.createElement(ne.a,{color:"default"},"\u8fd0\u884c\u4e2d"))},c.a.createElement(p.a,null,c.a.createElement(u.a,{sm:5,xs:12},c.a.createElement(A,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:(t=i,t&&"false"!==t?a.strategy&&a.strategy.annual_return:"--")})),c.a.createElement(u.a,{sm:5,xs:12},c.a.createElement(A,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:n.pnl_rate})),c.a.createElement(u.a,{sm:5,xs:12},c.a.createElement(C,{timestamp:n.timestamp,pps:n.pps})),c.a.createElement(u.a,{sm:5,xs:12},c.a.createElement(A,{title:"\u6628\u65e5\u6da8\u8dcc",value:n.last_day_pnl_rate})),c.a.createElement(u.a,{sm:4,xs:12},c.a.createElement(k,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})))))},ce={jiuyao:{t2:{name:"91Coin BTC \u8d8b\u52bf\u57fa\u91d1",manager:"jiuyao",code:"t2"}}},le=o.a.Content,ie=v.a.TabPane,oe="https://raw.githubusercontent.com/share-fund",se=Object(x.a)((function(e){var t=e.className,a=Object(r.useState)([]),n=Object(E.a)(a,2),l=n[0],i=n[1],s=Object(r.useState)({}),f=Object(E.a)(s,2),h=f[0],x=f[1],j=Object(r.useState)({}),O=Object(E.a)(j,2),w=O[0],_=O[1],N=Object(r.useState)("all"),S=Object(E.a)(N,2),I=S[0],L=S[1],B=new URLSearchParams(window.location.search),D=B.get("manager"),R=B.get("code"),k=B.get("showAnnualReturn"),C=ce[D][R];Object(r.useEffect)((function(){(function(){var e=Object(b.a)(g.a.mark((function e(){var t,a,n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([y.a.get("".concat(oe,"/").concat(D,"/main/").concat(R,"/all.json")),y.a.get("".concat(oe,"/").concat(D,"/main/").concat(R,"/statistic.json")),y.a.get("".concat(oe,"/").concat(D,"/main/").concat(R,"/metrics.json"))]);case 2:t=e.sent,a=Object(E.a)(t,3),n=a[0].data,r=a[1].data,c=a[2].data,_(c),i(n),x(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[R,D]);return c.a.createElement(o.a,{className:t},c.a.createElement(le,null,c.a.createElement(p.a,{className:"content",gutter:24},c.a.createElement(re,{fundName:C.name,metrics:w,statistic:h,showAnnualReturn:k})),c.a.createElement(p.a,{className:"content",gutter:24},c.a.createElement(u.a,{sm:15,xs:24},c.a.createElement(m.a,{title:"\u4e1a\u7ee9\u8d70\u52bf"},c.a.createElement(p.a,null,c.a.createElement(u.a,{xs:24,style:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(r.useMemo)((function(){return c.a.createElement(K,{fundManager:D,fundCode:R,dateRange:I})}),[R,I,D]),c.a.createElement(d.a.Group,{defaultValue:"all",buttonStyle:"solid",onChange:function(e){L(e.target.value)},style:{marginTop:"10px"}},c.a.createElement(d.a.Button,{value:"1m"},"\u8fd11\u6708"),c.a.createElement(d.a.Button,{value:"3m"},"\u8fd13\u6708"),c.a.createElement(d.a.Button,{value:"6m"},"\u8fd16\u6708"),c.a.createElement(d.a.Button,{value:"12m"},"\u8fd11\u5e74"),c.a.createElement(d.a.Button,{value:"all"},"\u6240\u6709")))))),c.a.createElement(u.a,{sm:9,xs:24},c.a.createElement(m.a,{title:"\u7edf\u8ba1\u6307\u6807"},c.a.createElement(ae,{metrics:w})))),c.a.createElement(p.a,{className:"content",gutter:24},c.a.createElement(u.a,{sm:15,xs:24},c.a.createElement(m.a,{className:"p-t-0"},c.a.createElement(v.a,{defaultActiveKey:"1",style:{background:"#fff"},size:"large"},c.a.createElement(ie,{tab:"\u9879\u76ee\u7b80\u4ecb",key:"1"},c.a.createElement(Q,{fund:C}))))),c.a.createElement(u.a,{sm:9,xs:24},c.a.createElement(m.a,{className:"p-t-0"},c.a.createElement(v.a,{defaultActiveKey:"1",size:"large"},c.a.createElement(ie,{tab:"\u5386\u53f2\u4e1a\u7ee9",key:"1"},c.a.createElement(Z,{statistic:h})),c.a.createElement(ie,{tab:"\u5386\u53f2\u51c0\u503c",key:"2"},c.a.createElement(te,{data:l}))))))))}))(n||(n=Object(s.a)(["\n  .p-24 {\n    padding: 24px;\n  }\n  .m-t-24 {\n    margin-top: 24px;\n  }\n  .m-b-24 {\n    margin-bottom: 24px;\n  }\n  .p-t-0 {\n    padding-top: 0;\n    .ant-card-body {\n      padding-top: 0;\n    }\n  }\n  .content {\n    padding-top: 24px;\n    max-width: 1200px;\n    margin: 0 auto !important;\n  }\n  .title-p-t-10 {\n    padding-top: 20px;\n  }\n"]))),me=function(){return c.a.createElement(o.a,null,c.a.createElement(se,{fundCode:"t1"}))};i.a.render(c.a.createElement(me,null),document.getElementById("root"))}},[[934,1,2]]]);