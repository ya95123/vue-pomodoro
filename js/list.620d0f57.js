(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"1a33":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"list"}},[n("h3",[t._v("待 辦 清 單")]),n("div",{attrs:{id:"addlist"}},[n("b-form-input",{attrs:{id:"input"},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo(o)}},model:{value:t.newtodo,callback:function(o){t.newtodo=o},expression:"newtodo"}}),n("b-btn",{attrs:{id:"input-btn",variant:"outline-dark"},on:{click:t.addTodo}},[t._v("新增")])],1),n("b-table-simple",{attrs:{id:"tableList"}},[n("b-thead",[n("b-tr",[n("b-th",[t._v("事項")]),n("b-th",[t._v("編輯／刪除")])],1)],1),n("draggable",t._b({attrs:{tag:"tbody"},model:{value:t.todos,callback:function(o){t.todos=o},expression:"todos"}},"draggable",t.dragOption,!1),[0==t.todos.length?n("b-tr",[n("b-td",{attrs:{colspan:"2"}},[t._v("沒有資料")])],1):t._l(t.todos,(function(o,e){return n("b-tr",{key:e},[n("b-td",[o.edit?n("b-form-input",{model:{value:o.model,callback:function(n){t.$set(o,"model",n)},expression:"todo.model"}}):t._e(),o.edit?n("b-btn",{staticClass:"text-danger",attrs:{variant:"link"},on:{click:function(o){return t.cancelTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","undo"]}})],1):t._e(),o.edit?n("b-btn",{staticClass:"text-success",attrs:{variant:"link"},on:{click:function(o){return t.saveTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","save"]}})],1):n("span",[t._v(t._s(o.name))])],1),n("b-td",[n("b-btn",{staticClass:"text-primary",attrs:{variant:"link"},on:{click:function(o){return t.editTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","pen"]}})],1),n("b-btn",{staticClass:"text-danger",attrs:{variant:"link"},on:{click:function(o){return t.delTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)],1)],1)}))],2)],1)],1)},i=[],a=(n("498a"),{data:function(){return{newtodo:"",dragOption:{animation:200}}},methods:{addTodo:function(){if(""===this.newtodo.trim())return alert("請輸入內容"),void(this.newtodo="");this.$store.commit("addTodo",this.newtodo),console.log("add了"),this.newtodo=""},delTodo:function(t){this.$store.commit("delTodo",t)},editTodo:function(t){this.$store.commit("editTodo",t)},cancelTodo:function(t){this.$store.commit("cancelTodo",t)},saveTodo:function(t){this.$store.commit("saveTodo",t)}},computed:{todos:{get:function(){return this.$store.getters.todos},set:function(t){this.$store.commit("dragTodo",t)}}}}),r=a,s=n("2877"),d=Object(s["a"])(r,e,i,!1,null,null,null);o["default"]=d.exports},"498a":function(t,o,n){"use strict";var e=n("23e7"),i=n("58a8").trim,a=n("c8d2");e({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},5899:function(t,o){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,o,n){var e=n("1d80"),i=n("5899"),a="["+i+"]",r=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),d=function(t){return function(o){var n=String(e(o));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},c8d2:function(t,o,n){var e=n("d039"),i=n("5899"),a="​᠎";t.exports=function(t){return e((function(){return!!i[t]()||a[t]()!=a||i[t].name!==t}))}}}]);
//# sourceMappingURL=list.620d0f57.js.map