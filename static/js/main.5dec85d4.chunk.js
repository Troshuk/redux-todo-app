(this["webpackJsonpredux-todo-app"]=this["webpackJsonpredux-todo-app"]||[]).push([[0],{10:function(e,t,c){e.exports={wrapper:"AppBar_wrapper__21lfN",section:"AppBar_section__3Iy4s",title:"AppBar_title__JfHv9"}},11:function(e,t,c){e.exports={wrapper:"Task_wrapper__1Un4J",text:"Task_text__7szr-",btn:"Task_btn__2cnNo",checkbox:"Task_checkbox__1kBaq"}},18:function(e,t,c){e.exports={btn:"Button_btn__3xaJM",isSelected:"Button_isSelected__2JVMn"}},21:function(e,t,c){e.exports={text:"TaskCounter_text__3WbH2"}},22:function(e,t,c){e.exports={form:"TaskForm_form__1kzwH",field:"TaskForm_field__8trCg"}},23:function(e,t,c){e.exports={list:"TaskList_list__2xVr5",listItem:"TaskList_listItem__XeAAN"}},26:function(e,t,c){e.exports={container:"Layout_container__1nNA4"}},28:function(e,t,c){e.exports={wrapper:"StatusFilter_wrapper__1VEdi"}},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(25),s=c.n(a),n=c(26),r=c.n(n),l=c(2);const i=e=>{let{children:t}=e;return Object(l.jsx)("main",{className:r.a.container,children:t})};var d=c(27),o=c(18),j=c.n(o);const p=e=>{let{selected:t=!1,type:c="button",children:a,...s}=e;return Object(l.jsx)("button",{className:Object(d.a)(j.a.btn,{[j.a.isSelected]:t}),type:c,...s,children:a})};var b=c(28),u=c.n(b),m=c(6);const x=Object.freeze({all:"all",active:"active",completed:"completed"});var O=c(8);const _=e=>e.tasks.items,h=e=>e.tasks.isLoading,f=e=>e.tasks.error,k=e=>e.filters.status,v=Object(O.a)([_,k],((e,t)=>{switch(t){case x.active:return e.filter((e=>{let{completed:t}=e;return!t}));case x.completed:return e.filter((e=>{let{completed:t}=e;return t}));default:return e}})),N=Object(O.a)([_],(e=>e.reduce(((e,t)=>(t.completed?e.completed+=1:e.active+=1,e)),{active:0,completed:0})));var g=c(7);const y=Object(g.c)({name:"filter",initialState:{status:x.all},reducers:{setStatusFilter:(e,t)=>{let{payload:c}=t;e.status=c}}}),{setStatusFilter:w}=y.actions,C=y.reducer,L=()=>{const e=Object(m.b)(),t=Object(m.c)(k),c=t=>e(w(t));return Object(l.jsxs)("div",{className:u.a.wrapper,children:[Object(l.jsx)(p,{selected:t===x.all,onClick:()=>c(x.all),children:"All"}),Object(l.jsx)(p,{selected:t===x.active,onClick:()=>c(x.active),children:"Active"}),Object(l.jsx)(p,{selected:t===x.completed,onClick:()=>c(x.completed),children:"Completed"})]})};var T=c(21),A=c.n(T);const S=()=>{const{active:e,completed:t}=Object(m.c)(N);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:A.a.text,children:["Active: ",e]}),Object(l.jsxs)("p",{className:A.a.text,children:["Completed: ",t]})]})};var B=c(10),F=c.n(B);const I=()=>Object(l.jsxs)("header",{className:F.a.wrapper,children:[Object(l.jsxs)("section",{className:F.a.section,children:[Object(l.jsx)("h2",{className:F.a.title,children:"Tasks"}),Object(l.jsx)(S,{})]}),Object(l.jsxs)("section",{className:F.a.section,children:[Object(l.jsx)("h2",{className:F.a.title,children:"Filter by status"}),Object(l.jsx)(L,{})]})]});var J=c(22),z=c.n(J),E=c(51);const M=Object(g.c)({name:"tasks",initialState:{items:[],isLoading:!1,error:null},extraReducers:e=>{e.addCase(U.fulfilled,((e,t)=>{let{payload:c}=t;e.isLoading=!1,e.items=c})).addCase(W.fulfilled,((e,t)=>{let{payload:c}=t;e.isLoading=!1,e.items.push(c)})).addCase(q.fulfilled,((e,t)=>{let{payload:c}=t;e.isLoading=!1,e.items=e.items.filter((e=>{let{id:t}=e;return t!==c.id}))})).addCase(D.fulfilled,((e,t)=>{let{payload:c}=t;e.isLoading=!1;const a=e.items.findIndex((e=>{let{id:t}=e;return t===c.id}));e.items.splice(a,1,c)})).addMatcher(Object(g.d)(U.pending,W.pending,q.pending,D.pending),(e=>{e.isLoading=!0,e.error=null})).addMatcher(Object(g.d)(U.rejected,W.rejected,q.rejected,D.rejected),((e,t)=>{let{error:c,payload:a}=t;e.isLoading=!1,e.error=null!==a&&void 0!==a?a:c.message}))}}),V=M.reducer;E.a.defaults.baseURL="https://65ab32c3fcd1c9dcffc62bda.mockapi.io/";const H="tasks",R=e=>"".concat(M.name,"/").concat(e),U=Object(g.b)(R("fetchAll"),(async(e,t)=>{let{rejectWithValue:c}=t;try{return(await E.a.get(H)).data}catch({message:a}){return c(a)}})),W=Object(g.b)(R("addTask"),(async e=>(await E.a.post(H,{text:e,completed:!1})).data)),q=Object(g.b)(R("deleteTask"),(async e=>(await E.a.delete("".concat(H,"/").concat(e))).data)),D=Object(g.b)(R("toggleCompleted"),(async e=>{let{id:t,completed:c}=e;return(await E.a.put("".concat(H,"/").concat(t),{completed:!c})).data})),X=()=>{const e=Object(m.b)();return Object(l.jsxs)("form",{className:z.a.form,onSubmit:t=>{t.preventDefault();const c=t.target;e(W(c.elements.text.value)),c.reset()},children:[Object(l.jsx)("input",{className:z.a.field,type:"text",name:"text",placeholder:"Enter task text..."}),Object(l.jsx)(p,{type:"submit",children:"Add task"})]})};var G=c(31),K=c(11),P=c.n(K);const Q=e=>{let{task:{id:t,text:c,completed:a}}=e;const s=Object(m.b)();return Object(l.jsxs)("div",{className:P.a.wrapper,children:[Object(l.jsx)("input",{type:"checkbox",className:P.a.checkbox,checked:a,onChange:()=>s(D({id:t,completed:a}))}),Object(l.jsx)("p",{className:P.a.text,children:c}),Object(l.jsx)("button",{className:P.a.btn,onClick:()=>s(q(t)),children:Object(l.jsx)(G.a,{size:24})})]})};var Y=c(23),Z=c.n(Y);const $=()=>{const e=Object(m.c)(v);return Object(l.jsx)("ul",{className:Z.a.list,children:null===e||void 0===e?void 0:e.map((e=>Object(l.jsx)("li",{className:Z.a.listItem,children:Object(l.jsx)(Q,{task:e})},e.id)))})};var ee=c(1);const te=()=>{const e=Object(m.b)(),t=Object(m.c)(h),c=Object(m.c)(f);return Object(ee.useEffect)((()=>{e(U())}),[e]),Object(l.jsxs)(i,{children:[Object(l.jsx)(I,{}),Object(l.jsx)(X,{}),!t&&c&&Object(l.jsx)("p",{children:c}),Object(l.jsx)($,{})]})};c(48);const ce=Object(g.a)({reducer:{tasks:V,filters:C}});s.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(m.a,{store:ce,children:Object(l.jsx)(te,{})}))}},[[49,1,2]]]);
//# sourceMappingURL=main.5dec85d4.chunk.js.map