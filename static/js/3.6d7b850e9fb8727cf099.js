webpackJsonp([3],{"0IpB":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),s=n("Sgn/"),r=n("T452"),c=n("Zrlr"),o=n.n(c),l=function t(e){var n=e.id,i=e.name;o()(this,t),this.id=n,this.name=i,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+n+".jpg?max_age=2592000"},u=n("qwAB"),g={name:"listview",props:{data:{type:Array,defalut:[]}},methods:{selectItem:function(t){this.$emit("select",t)}},components:{Scroll:u.a}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{staticClass:"listview",attrs:{data:t.data}},[n("ul",t._l(t.data,function(e,i){return n("li",{key:i,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.items,function(e,i){return n("li",{key:i,staticClass:"list-group-item",on:{click:function(n){t.selectItem(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])}))])},staticRenderFns:[]};var d=n("VU/8")(g,f,!1,function(t){n("gagj")},"data-v-63b64ada",null).exports,m=n("NYxO"),h={name:"singer",data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:a()({selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;Object(s.b)().then(function(e){e.code===r.a&&(t.singers=t._normalizeSinger(e.data.list))})},_normalizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push(new l({id:t.Fsinger_mid,name:t.Fsinger_name}));var i=t.Findex;e[i]||(e[i]={title:i,items:[]}),e[i].items.push(new l({id:t.Fsinger_mid,name:t.Fsinger_name}))});var n=[],i=[];for(var a in e){var s=e[a];s.title.match(/[a-zA-Z]/)?n.push(s):"热门"===s.title&&i.push(s)}return n.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),i.concat(n)}},Object(m.d)({setSinger:"SET_SINGER"})),components:{ListView:d}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var _=n("VU/8")(h,v,!1,function(t){n("WKnH")},"data-v-7005199a",null);e.default=_.exports},"Sgn/":function(t,e,n){"use strict";e.b=function(){var t=a()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:5381});return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},e.a=function(t){var e=a()({},r.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:100,songstatus:1,singermid:t});return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,r.c)};var i=n("woOf"),a=n.n(i),s=n("Gak4"),r=n("T452")},WKnH:function(t,e){},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},gagj:function(t,e){}});
//# sourceMappingURL=3.6d7b850e9fb8727cf099.js.map