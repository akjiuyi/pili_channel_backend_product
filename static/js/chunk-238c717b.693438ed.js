(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238c717b"],{"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=o(),r=t-n,l=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=l;var o=Math.easeInOutQuad(u,n,r,e);i(o),u<e?s(t):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:100},pageSizes:{type:Array,default:function(){return[1,2,100,200,500,1e3]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,pageSize:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,pageSize:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(a("8d67"),a("2877")),p=Object(d["a"])(c,n,r,!1,null,"4a26e435",null);e["a"]=p.exports},"364e":function(t,e,a){},3925:function(t,e,a){},7156:function(t,e,a){var n=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var s,i;return r&&"function"==typeof(s=e.constructor)&&s!==a&&n(i=s.prototype)&&i!==a.prototype&&r(t,i),t}},"8d67":function(t,e,a){"use strict";a("364e")},9406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelAllMemberCount))]),a("div",{staticClass:"desc"},[t._v("累计用户")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelTodayMemberCount))]),a("div",{staticClass:"desc"},[t._v("今日新增")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelTodayActiveMemberCount))]),a("div",{staticClass:"desc"},[t._v("今日活跃")])]),a("el-col",{attrs:{span:2,offset:11}},[a("el-button",{attrs:{type:"primary"},on:{click:t.open}},[t._v("导出")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelIosDeviceCount))]),a("div",{staticClass:"desc"},[t._v("苹果设备数量")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelAndroidDeviceCount))]),a("div",{staticClass:"desc"},[t._v("安卓设备数量")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelChargeCount))]),a("div",{staticClass:"desc"},[t._v("充值数量")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelChargeAmount))]),a("div",{staticClass:"desc"},[t._v("充值金额")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelChargeRate))]),a("div",{staticClass:"desc"},[t._v("充值比例")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"val"},[t._v(t._s(this.summaryInfo.channelAvgConsumption))]),a("div",{staticClass:"desc"},[t._v("人均消费")])])],1),a("el-form",{ref:"query",attrs:{model:t.query,"label-width":"80px;",inline:!0}},[a("el-form-item",{attrs:{label:"数据选项:",prop:"state"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.query.dataOptionValue,callback:function(e){t.$set(t.query,"dataOptionValue",e)},expression:"query.dataOptionValue"}},t._l(t.dataOption,(function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"日期选项"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"startDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始时间","value-format":"yyyy-MM-dd"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1)],1),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center","margin-right":"10px"},attrs:{span:1}},[t._v("至")]),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"endDate"}},[a("el-date-picker",{staticStyle:{width:"104%"},attrs:{type:"date",placeholder:"选择结束时间","value-format":"yyyy-MM-dd"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)],1)],1),a("el-form-item",[a("el-button",{staticStyle:{"margin-left":"100px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.search()}}},[t._v("搜索")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-refresh"},on:{click:function(e){return t.handleReset("query")}}},[t._v("重置")])],1)],1),a("el-table",{ref:"table",staticStyle:{width:"100%","margin-top":"5px"},attrs:{data:t.list,height:t.tableHeight}},[a("el-table-column",{attrs:{align:"center",label:"用户id"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"用户名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.nickname)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"使用设备"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.os)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"会员状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.state)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"消费金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.trade_amount)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"订单信息",width:"340"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"left"}},[t._v(" "+t._s(e.row.order_info.buy_time)+" "),a("br"),t._v(" "+t._s(e.row.order_info.buy_title)+" "),a("br"),e.row.order_count>1?a("span",{staticStyle:{color:"#409eff"},on:{click:function(a){return t.showMore(e.row.id)}}},[t._v("查看更多...")]):t._e()])]}}])}),a("el-table-column",{attrs:{align:"center",label:"时间",width:"340"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("pre",[t._v("          注册时间："+t._s(e.row.create_time)+"\n          "),e.row.vip_expired?a("span",[t._v("会员到期："+t._s(e.row.vip_expired))]):t._e(),t._v("\n          "),e.row.last_access?a("span",[t._v("最近访问："+t._s(e.row.last_access))]):t._e(),t._v("\n        ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,"page-sizes":t.pageSizes,page:t.query.page,limit:t.query.pageSize},on:{"update:page":function(e){return t.$set(t.query,"page",e)},"update:limit":function(e){return t.$set(t.query,"pageSize",e)},pagination:t.channelUserLists}}),a("el-dialog",{attrs:{title:"订单列表","lock-scroll":!0,width:"35%",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e},closed:t.closeOrderList}},[a("el-table",{attrs:{data:t.gridData}},[a("el-table-column",{attrs:{property:"trade_amount",label:"消费金额",width:"150"}}),a("el-table-column",{attrs:{property:"title",label:"购买商品"}}),a("el-table-column",{attrs:{property:"update_time",label:"购买时间"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{total:t.orderTotal,"page-sizes":t.pageSizes,page:t.orderQuery.page,limit:t.orderQuery.pageSize},on:{"update:page":function(e){return t.$set(t.orderQuery,"page",e)},"update:limit":function(e){return t.$set(t.orderQuery,"pageSize",e)},pagination:t.userOrderLists}})],1)],1)},r=[],s=a("1da1"),i=a("5530"),o=(a("96cf"),a("ac1f"),a("5319"),a("a9e3"),a("c24f")),l=a("333d"),u=a("2f62"),c={page:1,pageSize:10,dataOptionValue:null},d={name:"Dashboard",components:{Pagination:l["a"]},data:function(){return{startDate:"",endDate:"",startDateComp:"",endDateComp:"",query:Object.assign({},c),orderQuery:Object.assign({},c),pageSizes:[10,20,30,40,50,100],list:[],tableHeight:600,total:0,orderTotal:0,dataOption:[{id:1,value:1,label:"今天数据"},{id:2,value:2,label:"昨天数据"}],summaryInfo:{},dialogTableVisible:!1,gridData:[]}},computed:Object(i["a"])({},Object(u["b"])(["token"])),mounted:function(){this.summaryInfo1(this.query),this.channelUserLists(this.query)},watch:{startDate:function(t){if(t){if(this.startDateComp=t,this.startDateComp=this.startDateComp.replace(/-/g,""),this.endDate&&(this.endDateComp=this.endDate,this.endDateComp=this.endDateComp.replace(/-/g,""),Number(this.startDateComp)>Number(this.endDateComp)))return this.$message.error("开始日期应该小于结束日期"),this.startDate="",void(this.query.startDate=this.startDate);this.query.startDate=t}else this.query.startDate=t},endDate:function(t){if(t){if(this.endDateComp=t,this.endDateComp=this.endDateComp.replace(/-/g,""),this.startDate&&(this.startDateComp=this.startDate,this.startDateComp=this.startDateComp.replace(/-/g,""),Number(this.startDateComp)>Number(this.endDateComp)))return this.$message.error("开始日期应该小于结束日期"),this.endDate="",void(this.query.endDate=this.endDate);this.query.endDate=t}else this.query.endDate=t}},methods:{channelUserLists:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["a"])(this.query);case 2:e=t.sent,this.list=e.items,this.total=e.total;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),search:function(){var t=this;this.query.startDate&&!this.query.endDate||!this.query.startDate&&this.query.endDate?this.$alert("目前只选择了一个日期，确定搜索吗？","提示",{confirmButtonText:"确定",showCancelButton:!0,callback:function(e){"confirm"==e&&t.handleFilter()}}):this.handleFilter()},handleFilter:function(){this.summaryInfo1(this.query),this.channelUserLists(this.query)},summaryInfo1:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["f"])(this.query);case 2:e=t.sent,this.$nextTick((function(){this.summaryInfo=e}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleReset:function(){this.$data.query={page:this.query.page,pageSize:this.query.pageSize},this.$data.startDate=null,this.$data.endDate=null,this.summaryInfo1(this.query),this.channelUserLists(this.query)},open:function(){var t=this;this.$confirm("确定要导出渠道统计内容吗?","提示",{confirmButtonText:"确定",type:"warning"}).then((function(){var e="",a=t.query;for(var n in a)e+="&"+n+"="+a[n];e=e.substring(1)+"&channel_id="+t.summaryInfo.channelId,window.location.href="/test/exportFirstPageStatistics?"+e})).catch((function(){}))},showMore:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$data.dialogTableVisible=!0,this.orderQuery.member_id=e,this.orderQuery.dataOptionValue=this.query.dataOptionValue,this.orderQuery.startDate=this.startDate,this.orderQuery.endDate=this.endDate,t.next=7,Object(o["c"])(this.orderQuery);case 7:a=t.sent,this.$data.gridData=a.lists,this.$data.orderTotal=a.total;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),userOrderLists:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["c"])(this.orderQuery);case 2:e=t.sent,this.$data.gridData=e.lists,this.$data.orderTotal=e.total;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeOrderList:function(){this.orderQuery.page=1}}},p=d,h=(a("df4a"),a("2877")),f=Object(h["a"])(p,n,r,!1,null,"1c11a6ec",null);e["default"]=f.exports},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),s=a("94ca"),i=a("6eeb"),o=a("5135"),l=a("c6b6"),u=a("7156"),c=a("c04e"),d=a("d039"),p=a("7c73"),h=a("241c").f,f=a("06cf").f,m=a("9bf2").f,g=a("58a8").trim,y="Number",v=r[y],b=v.prototype,_=l(p(b))==y,w=function(t){var e,a,n,r,s,i,o,l,u=c(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(s=u.slice(2),i=s.length,o=0;o<i;o++)if(l=s.charCodeAt(o),l<48||l>r)return NaN;return parseInt(s,n)}return+u};if(s(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var D,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(_?d((function(){b.valueOf.call(a)})):l(a)!=y)?u(new v(w(e)),a,C):w(e)},S=n?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)o(v,D=S[I])&&!o(C,D)&&m(C,D,f(v,D));C.prototype=b,b.constructor=C,i(r,y,C)}},df4a:function(t,e,a){"use strict";a("3925")}}]);