(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{323:function(t,e,n){"use strict";n.r(e);var r=n(130),c=(n(67),n(6)),o=n(288),h=n.n(o),l=Object(r.a)({asyncData:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("https://www.thef2e.com/api/isSignUp",{email:"hexscholl@test.com"});case 2:e=t.sent,data=e.data,store.commit("setResult",data);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},"asyncData",function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("https://www.thef2e.com/api/search-signup-result",{email:"hexscholl@test.com"});case 2:e=t.sent,e.data;case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()),f=n(2),component=Object(f.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("六角報名查詢")]),this._v("\n\n  "+this._s(this.$store.state.result)+"\n")])},[],!1,null,null,null);e.default=component.exports}}]);