(this["webpackJsonpmoon-monografia_online"]=this["webpackJsonpmoon-monografia_online"]||[]).push([[0],{163:function(e,t,a){},164:function(e,t,a){},172:function(e,t,a){},192:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),o=(a(163),a(236)),i=a(241),l=a(56),j=a(17),u=(a(164),a(229)),b=a(233),d=a(234),m=a(139),h=a(142),x=a(2),p={code:"pt-br",week:{dow:0,doy:6},buttonText:{prev:"Ant",next:"Sig",today:"Hoje",month:"Mes",week:"Semana",day:"D\xeda",list:"Agenda"},weekText:"Sm",allDayText:"Todo el d\xeda",moreLinkText:"m\xe1s",noEventsText:"No hay eventos para mostrar"};var O=function(){return Object(x.jsx)(u.a,{maxWidth:"sm",className:"App",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(m.a,{locales:[p],locale:"pt-br",plugins:[h.a],initialView:"dayGridMonth",weekends:!1,events:[{title:"Apresenta\xe7\xe3o Fred",date:"2021-09-13"},{title:"Pr\xf3xima aula",date:"2021-09-20"}]}),Object(x.jsx)(d.a,{variant:"contained",color:"primary",children:"Bot\xe3o 1"}),Object(x.jsx)(d.a,{variant:"contained",color:"secondary",children:"Bot\xe3o 2"})]})})},g=a(25),f=a.n(g),v=a(36),y=a(13),w=a(73),N=(a(172),a(23)),k=a(29),S=a(67),C=a(237),I=a(238),M=a(239),T=a(102),L=a(201),U=a(247),E=a(240),A=a(244),R=a(136),B=a(235),P=a(245),q=a(19);var W=function(){function e(e){var t=e.input,a=t.name,n=t.onChange,r=t.value,s=Object(w.a)(t,["name","onChange","value"]),c=e.meta,o=Object(w.a)(e,["input","meta"]),i=(c.submitError&&!c.dirtySinceLastSubmit||c.error)&&c.touched;return Object(x.jsx)(B.a,Object(y.a)(Object(y.a)({},o),{},{name:a,helperText:i?c.error||c.submitError:void 0,error:i,inputProps:s,onChange:n,value:""===r?null:r}))}function t(e){var t=e.input,a=t.name,n=t.onChange,r=t.value,s=Object(w.a)(t,["name","onChange","value"]),c=e.meta,o=Object(w.a)(e,["input","meta"]),i=(c.submitError&&!c.dirtySinceLastSubmit||c.error)&&c.touched;return Object(x.jsx)(P.a,Object(y.a)(Object(y.a)({},o),{},{name:a,helperText:i?c.error||c.submitError:void 0,error:i,inputProps:s,onChange:n,value:""===r?null:r}))}var a=function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return new Promise((function(t){return setTimeout(t,e)}))},e.next=3,a(300);case 3:window.alert(JSON.stringify(t,0,2));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(u.a,{maxWidth:"sm",className:"App",children:Object(x.jsxs)("div",{style:{padding:16,margin:"auto",maxWidth:600},children:[Object(x.jsx)(o.a,{}),Object(x.jsx)(S.a,{variant:"h4",align:"center",component:"h1",gutterBottom:!0,children:"\ud83c\udfc1 React Final Form"}),Object(x.jsx)(S.a,{variant:"h5",align:"center",component:"h2",gutterBottom:!0,children:"Material-UI Example"}),Object(x.jsxs)(S.a,{paragraph:!0,children:[Object(x.jsx)(C.a,{href:"https://github.com/erikras/react-final-form#-react-final-form",children:"Read Docs"}),". This example demonstrates using"," ",Object(x.jsx)(C.a,{href:"https://material-ui.com/demos/text-fields/",children:"Material-UI"})," ","form controls."]}),Object(x.jsx)(N.b,{onSubmit:a,initialValues:{employed:!0,stooge:"larry"},validate:function(e){var t={};return e.firstName||(t.firstName="Required"),e.lastName||(t.lastName="Required"),e.email||(t.email="Required"),t},render:function(a){var n=a.handleSubmit,r=a.reset,s=a.submitting,c=a.pristine,o=a.values;return Object(x.jsxs)("form",{onSubmit:n,noValidate:!0,children:[Object(x.jsx)(b.a,{style:{padding:16},children:Object(x.jsxs)(I.a,{container:!0,alignItems:"flex-start",spacing:2,children:[Object(x.jsx)(I.a,{item:!0,xs:6,children:Object(x.jsx)(N.a,{fullWidth:!0,required:!0,name:"firstName",component:k.TextField,type:"text",label:"First Name"})}),Object(x.jsx)(I.a,{item:!0,xs:6,children:Object(x.jsx)(N.a,{fullWidth:!0,required:!0,name:"lastName",component:k.TextField,type:"text",label:"Last Name"})}),Object(x.jsx)(I.a,{item:!0,xs:12,children:Object(x.jsx)(N.a,{name:"email",fullWidth:!0,required:!0,component:k.TextField,type:"email",label:"Email"})}),Object(x.jsx)(I.a,{item:!0,xs:12,children:Object(x.jsx)(M.a,{label:"Employed",control:Object(x.jsx)(N.a,{name:"employed",component:k.Checkbox,type:"checkbox"})})}),Object(x.jsx)(I.a,{item:!0,children:Object(x.jsxs)(T.a,{component:"fieldset",children:[Object(x.jsx)(L.a,{component:"legend",children:"Best Stooge"}),Object(x.jsxs)(U.a,{row:!0,children:[Object(x.jsx)(M.a,{label:"Larry",control:Object(x.jsx)(N.a,{name:"stooge",component:k.Radio,type:"radio",value:"larry"})}),Object(x.jsx)(M.a,{label:"Moe",control:Object(x.jsx)(N.a,{name:"stooge",component:k.Radio,type:"radio",value:"moe"})}),Object(x.jsx)(M.a,{label:"Curly",control:Object(x.jsx)(N.a,{name:"stooge",component:k.Radio,type:"radio",value:"curly"})})]})]})}),Object(x.jsx)(I.a,{item:!0,children:Object(x.jsxs)(T.a,{component:"fieldset",children:[Object(x.jsx)(L.a,{component:"legend",children:"Sauces"}),Object(x.jsxs)(E.a,{row:!0,children:[Object(x.jsx)(M.a,{label:"Ketchup",control:Object(x.jsx)(N.a,{name:"sauces",component:k.Checkbox,type:"checkbox",value:"ketchup"})}),Object(x.jsx)(M.a,{label:"Mustard",control:Object(x.jsx)(N.a,{name:"sauces",component:k.Checkbox,type:"checkbox",value:"mustard"})}),Object(x.jsx)(M.a,{label:"Salsa",control:Object(x.jsx)(N.a,{name:"sauces",component:k.Checkbox,type:"checkbox",value:"salsa"})}),Object(x.jsx)(M.a,{label:"Guacamole \ud83e\udd51",control:Object(x.jsx)(N.a,{name:"sauces",component:k.Checkbox,type:"checkbox",value:"guacamole"})})]})]})}),Object(x.jsx)(I.a,{item:!0,xs:12,children:Object(x.jsx)(N.a,{fullWidth:!0,name:"notes",component:k.TextField,multiline:!0,label:"Notes"})}),Object(x.jsx)(I.a,{item:!0,xs:12,children:Object(x.jsxs)(N.a,{fullWidth:!0,name:"city",component:k.Select,label:"Select a City",formControlProps:{fullWidth:!0},children:[Object(x.jsx)(A.a,{value:"London",children:"London"}),Object(x.jsx)(A.a,{value:"Paris",children:"Paris"}),Object(x.jsx)(A.a,{value:"Budapest",children:"A city with a very long Name"})]})}),Object(x.jsxs)(q.a,{utils:R.a,children:[Object(x.jsx)(I.a,{item:!0,xs:6,children:Object(x.jsx)(N.a,{name:"rendez-vous",component:e,fullWidth:!0,margin:"normal",label:"Rendez-vous"})}),Object(x.jsx)(I.a,{item:!0,xs:6,children:Object(x.jsx)(N.a,{name:"alarm",component:t,fullWidth:!0,margin:"normal",label:"Alarm"})})]}),Object(x.jsx)(I.a,{item:!0,style:{marginTop:16},children:Object(x.jsx)(d.a,{type:"button",variant:"contained",onClick:r,disabled:s||c,children:"Reset"})}),Object(x.jsx)(I.a,{item:!0,style:{marginTop:16},children:Object(x.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",disabled:s,children:"Submit"})})]})}),Object(x.jsx)("pre",{children:JSON.stringify(o,0,2)})]})}})]})})},F=a(59),D=a(62),_=a(132),V=a(133),z=a(141),J=a(138),H=a(134),G=a.n(H),K=Object(n.createContext)(),Q=G.a.create({baseURL:"https://organizacao-de-defesas.herokuapp.com"}),X=function(e){Object(z.a)(a,e);var t=Object(J.a)(a);function a(){var e;return Object(_.a)(this,a),(e=t.call(this)).state={showLogin:!0,isAuth:!1,theUser:null},e.toggleNav=function(){var t=!e.state.showLogin;e.setState(Object(y.a)(Object(y.a)({},e.state),{},{showLogin:t}))},e.logoutUser=function(){localStorage.removeItem("loginToken"),e.setState(Object(y.a)(Object(y.a)({},e.state),{},{isAuth:!1}))},e.registerUser=function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.post("register.php",{name:t.name,email:t.email,password:t.password});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.loginUser=function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.post("login",{username:t.username,password:t.password});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.isLoggedIn=Object(v.a)(f.a.mark((function t(){var a,n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=localStorage.getItem("loginToken"))){t.next=8;break}return Q.defaults.headers.common.Authorization="bearer "+a,t.next=5,Q.get("user-info.php");case 5:n=t.sent,(r=n.data).success&&r.user&&e.setState(Object(y.a)(Object(y.a)({},e.state),{},{isAuth:!0,theUser:r.user}));case 8:case"end":return t.stop()}}),t)}))),e.isLoggedIn(),e}return Object(V.a)(a,[{key:"render",value:function(){var e={rootState:this.state,toggleNav:this.toggleNav,isLoggedIn:this.isLoggedIn,registerUser:this.registerUser,loginUser:this.loginUser,logoutUser:this.logoutUser};return Object(x.jsx)(K.Provider,{value:e,children:this.props.children})}}]),a}(n.Component);a(192);var Y=function(){var e=Object(n.useContext)(K),t=e.toggleNav,a=e.loginUser,r=e.isLoggedIn,s={userInfo:{username:"",password:""},errorMsg:"",successMsg:""},c=Object(n.useState)(s),o=Object(D.a)(c,2),i=o[0],l=o[1],j=function(e){l(Object(y.a)(Object(y.a)({},i),{},{userInfo:Object(y.a)(Object(y.a)({},i.userInfo),{},Object(F.a)({},e.target.name,e.target.value))}))},u=function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(i.userInfo);case 3:if(!(n=e.sent).data){e.next=11;break}return l(Object(y.a)({},s)),localStorage.setItem("loginToken",n.data),e.next=9,r();case 9:e.next=12;break;case 11:l(Object(y.a)(Object(y.a)({},i),{},{successMsg:""}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b="",d="";return i.errorMsg&&(d=Object(x.jsx)("div",{className:"error-msg",children:i.errorMsg})),i.successMsg&&(b=Object(x.jsx)("div",{className:"success-msg",children:i.successMsg})),Object(x.jsxs)("div",{className:"_loginRegister",children:[Object(x.jsx)("div",{className:"column",children:Object(x.jsx)("img",{width:"70%",height:"70%",alt:"Logo Ufba",src:"https://www.ufba.br/sites/portal.ufba.br/files/brasao_ufba.jpg"})}),Object(x.jsxs)("div",{className:"column right",children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:u,noValidate:!0,children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Usu\xe1rio"}),Object(x.jsx)("input",{name:"username",type:"text",required:!0,placeholder:"Usu\xe1rio",value:i.userInfo.email,onChange:j})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Senha"}),Object(x.jsx)("input",{name:"password",type:"password",required:!0,placeholder:"Digite sua senha",value:i.userInfo.password,onChange:j})]}),d,b,Object(x.jsx)("div",{className:"form-control",children:Object(x.jsx)("button",{type:"submit",children:"Login"})})]}),Object(x.jsx)("div",{className:"_navBtn",children:Object(x.jsx)("button",{onClick:t,children:"Register"})})]})]})};var Z=function(){var e=Object(n.useContext)(K),t=e.toggleNav,a=e.registerUser,r={userInfo:{name:"",email:"",password:""},errorMsg:"",successMsg:""},s=Object(n.useState)(r),c=Object(D.a)(s,2),o=c[0],i=c[1],l=function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(o.userInfo);case 3:(n=e.sent).success?i(Object(y.a)(Object(y.a)({},r),{},{successMsg:n.message})):i(Object(y.a)(Object(y.a)({},o),{},{successMsg:"",errorMsg:n.message}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){i(Object(y.a)(Object(y.a)({},o),{},{userInfo:Object(y.a)(Object(y.a)({},o.userInfo),{},Object(F.a)({},e.target.name,e.target.value))}))},u="",b="";return o.errorMsg&&(b=Object(x.jsx)("div",{className:"error-msg",children:o.errorMsg})),o.successMsg&&(u=Object(x.jsx)("div",{className:"success-msg",children:o.successMsg})),Object(x.jsxs)("div",{className:"_loginRegister",children:[Object(x.jsx)("h1",{children:"Sign Up"}),Object(x.jsxs)("form",{onSubmit:l,noValidate:!0,children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Full Name"}),Object(x.jsx)("input",{name:"name",required:!0,type:"text",value:o.userInfo.name,onChange:j,placeholder:"Enter your name"})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{name:"email",required:!0,type:"email",value:o.userInfo.email,onChange:j,placeholder:"Enter your email"})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{name:"password",required:!0,type:"password",value:o.userInfo.password,onChange:j,placeholder:"Enter your password"})]}),b,u,Object(x.jsx)("div",{className:"form-control",children:Object(x.jsx)("button",{type:"submit",children:"Sign Up"})})]}),Object(x.jsx)("div",{className:"_navBtn",children:Object(x.jsx)("button",{onClick:t,children:"Login"})})]})},$=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{component:O,path:"/",exact:!0}),Object(x.jsx)(j.a,{component:W,path:"/banca/criar"}),Object(x.jsx)(j.a,{component:Y,path:"/login",exact:!0}),Object(x.jsx)(j.a,{component:Z,path:"/register",exact:!0})]})},ee=a(140);a(195);var te=function(){var e=r.a.useState(null),t=Object(D.a)(e,2),a=t[0],n=t[1],s=Boolean(a);return Object(x.jsxs)("div",{className:"header",bg:"light",expand:"lg",children:[Object(x.jsx)("h1",{className:"logo",children:"moon"}),Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:function(e){n(e.currentTarget)},style:{marginTop:20},children:"Dashboard"}),Object(x.jsxs)(ee.a,{id:"basic-menu",anchorEl:a,open:s,onClose:function(){n(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(x.jsx)(A.a,{component:l.b,to:"/",children:"Home"}),Object(x.jsx)(A.a,{component:l.b,to:"/login",children:"Login"}),Object(x.jsx)(A.a,{component:l.b,to:"/register",children:"Registre-se"})]})]})]})};a(196);var ae=function(){return Object(x.jsxs)("div",{className:"footer",bg:"light",expand:"lg",fixed:"bottom",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"INSTITUTO DE COMPUTA\xc7\xc3O"}),Object(x.jsx)("p",{children:"Avenida Adhemar de Barros, s/n - Campus de Ondina"}),Object(x.jsx)("p",{children:"CEP: 40.170-110 Salvador-Bahia Telefone: 3283-6164"})]}),Object(x.jsx)("img",{src:"https://dcc.ufba.br/sites/computacao.ufba.br/files/logos_ufba.png",alt:"Logos IC"})]})};var ne=function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)(X,{children:[Object(x.jsx)(te,{}),Object(x.jsx)("body",{style:{minHeight:500},children:Object(x.jsx)($,{})}),Object(x.jsx)(ae,{})]})})},re=a(95),se=a(137),ce=Object(se.a)({palette:{type:"light",primary:{main:"#61dafb",light:"#61dafb",dark:"#21a1c4"},secondary:{main:"#b5ecfb",light:"#61dafb",dark:"#21a1c4"},error:{main:re.a.A400},background:{default:"#282c34"}},overrides:{MuiPaper:{root:{padding:"20px 10px",margin:"10px",backgroundColor:"#fff"}},MuiButton:{root:{margin:"5px"}}}});c.a.render(Object(x.jsxs)(i.a,{theme:ce,children:[Object(x.jsx)(o.a,{}),Object(x.jsx)(ne,{})]}),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.70bd53fb.chunk.js.map