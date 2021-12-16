(this["webpackJsonpintro-component-with-signup-form"]=this["webpackJsonpintro-component-with-signup-form"]||[]).push([[0],{179:function(t,e,n){"use strict";n.r(e);var r,a,o,s,i=n(0),l=n.n(i),c=n(61),d=n.n(c),u=n(10),h=(n(75),n(12)),m=n(70),p=n(13),b=p.a({firstName:p.b().max(15,"Must be 15 characters or less").required("Don't you have a name?"),lastName:p.b().max(20,"Must be 20 characters or less").required("Yo mama did give you a name!"),email:p.b().email("Invalid email address").required("no@no.com works!"),password:p.b().required("Seriously?").min(8,"Password is too short - should be 8 chars minimum.")}),g=n.p+"static/media/icon-error.b72f792e.svg",x=n(1),j=h.a.div(r||(r=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tbackground-color: white;\n\tborder-radius: var(--radius);\n\tpadding-bottom: 20px;\n\tgap: 10px;\n\t\n\tform {\n\t\t\n\t\tinput {\n\t\t\twidth: 90%;\n\t\t\tborder: 1px solid rgb(62, 60, 73, 0.2);\n\t\t\tfont-size: 0.9rem;\n\t\t\tpadding: 0 10px;\n\t\t\tborder-radius: var(--radius);\n\t\t\tmargin-top: 15px;\n\t\t\tfont-weight: 600;\n\t\t\tcolor: var(--dark-blue);\n\t\t\toutline: none;\n            height: 50px;\n\t\t\tcaret-color: var(--blue);\n\t\t\t\n            ::placeholder{\n                color: rgb(62, 60, 73, 0.5);\n            }\n\t\t\t:focus {\n\t\t\t\tborder: 1px solid var(--blue);\n\t\t\t}\n\t\t\ttransition: background-position .3s ease;\n\t\t}\n\n\t\tbutton {\n\t\t\tbackground-color: var(--green);\n\t\t\tcolor: white;\n\t\t\ttext-transform: uppercase;\n\t\t\tpadding: 20px 50px;\n\t\t\tborder-radius: var(--radius);\n\t\t\tfont-size: 0.7rem;\n\t\t\tletter-spacing: 1.6px;\n\t\t\tmargin-top: 15px;\n\t\t\tcursor: pointer;\n\t\t\toutline: none;\n\n\t\t\t:hover,\n\t\t\t:focus {\n\t\t\t\tbackground-color: rgb(5 158 92);\n\t\t\t}\n\t\t\ttransition: background-color .5s ease;\n\t\t}\n\t\t.error {\n\t\t\tcolor: var(--red);\n\t\t\tfont-size: 0.7rem;\n\t\t\ttext-align: right;\n\t\t\twidth: 90%;\n\t\t\ttransition: visibility 1s ease;\n\t\t}\n\t}\n\tsmall {\n\t\twidth: 80%;\n\t\tcolor: var(--grayish-blue);\n\t\tfont-size: 0.6rem;\n\t\tmargin: 0 auto;\n\t\tspan {\n\t\t\tcolor: var(--red);\n\t\t\tfont-weight: 600;\n\t\t}\n\t}\n"]))),f=function(){var t=Object(m.a)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:b,onSubmit:function(t){alert(JSON.stringify(t,null,2))}}),e=function(t){return t?{backgroundImage:" url(".concat(g,") "),backgroundRepeat:"no-repeat",backgroundPosition:"right 5% bottom 45%",right:"0",border:"1px solid var(--red)"}:{}};return Object(x.jsxs)(j,{children:[Object(x.jsxs)("form",{action:"",onSubmit:t.handleSubmit,children:[Object(x.jsx)("input",{type:"text",id:"firstName",name:"firstName",placeholder:"First Name",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.firstName,style:e(t.touched.firstName&&t.errors.firstName)}),t.touched.firstName&&t.errors.firstName?Object(x.jsx)("div",{className:"error",children:t.errors.firstName}):null,Object(x.jsx)("input",{type:"text",id:"lastName",name:"lastName",placeholder:"Last Name",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.lastName,style:e(t.touched.lastName&&t.errors.lastName)}),t.touched.lastName&&t.errors.lastName?Object(x.jsx)("div",{className:"error",children:t.errors.lastName}):null,Object(x.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email Address",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email,style:e(t.touched.email&&t.errors.email)}),t.touched.email&&t.errors.email?Object(x.jsx)("div",{className:"error",children:t.errors.email}):null,Object(x.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"password",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.password,style:e(t.touched.password&&t.errors.password)}),t.touched.password&&t.errors.password?Object(x.jsx)("div",{className:"error",children:t.errors.password}):null,Object(x.jsx)("button",{type:"submit",children:"Claim your free trial "})]}),Object(x.jsxs)("small",{children:["By clicking the button, you are agreeing to our"," ",Object(x.jsx)("span",{children:"Terms and Services"})]})]})},v=h.a.div(a||(a=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 300px;\n\theight: 100vh;\n\tcolor: white;\n\ttext-align: center;\n\tgap: 20px;\n"]))),w=h.a.div(o||(o=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 20px;\n\n\tp {\n\t\tfont-size: 0.9rem;\n\t\tline-height: 24px;\n\t}\n"]))),y=h.a.button(s||(s=Object(u.a)(["\n\tcursor: pointer;\n\tpadding: 20px 60px;\n\tborder-radius: var(--radius);\n\tcolor: var(--grayish-blue);\n\twidth: 300px;\n\tbackground-color: var(--blue);\n\tspan {\n\t\tfont-weight: 600;\n\t\tcolor: white;\n\t}\n\t:hover,\n\t:focus {\n\t\tbackground-color: #3d3670;\n\t}\n  transition: background-color .5s ease;\n"]))),O=function(){return Object(x.jsxs)(v,{children:[Object(x.jsxs)(w,{children:[Object(x.jsx)("h2",{children:"Learn to code by watching others"}),Object(x.jsx)("p",{children:"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."})]}),Object(x.jsxs)(y,{children:[Object(x.jsx)("span",{children:"Try it free 7 days"})," then ",Object(x.jsx)("br",{}),"$20/mo. thereafter"]}),Object(x.jsx)(f,{})]})};d.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root"))},75:function(t,e,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.6d402e54.chunk.js.map