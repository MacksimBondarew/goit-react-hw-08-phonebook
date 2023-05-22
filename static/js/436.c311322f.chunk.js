"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{2436:function(n,e,r){r.r(e),r.d(e,{default:function(){return p}});var a=r(1413),o=(r(2791),r(5984)),t=r(887),i=r(6727),s=r(4695),d=r(8313),l=r(9434),c=r(2526),m=r(184),u=(0,i.Ry)({email:(0,i.Z_)().matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,"Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),password:(0,i.Z_)().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, 5 min numbers").required(),name:(0,i.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required()}).required();function p(){var n=(0,t.cI)({defaultValues:{email:"",name:"",password:""},resolver:(0,s.X)(u)}),e=n.register,r=n.handleSubmit,i=n.reset,p=n.formState.errors,f=(0,l.I0)();return(0,m.jsxs)("form",{onSubmit:r((function(n){!function(n,e,r){var a={id:(0,o.x0)(),email:n,name:r,password:e};f((0,c.uK)(a))}(n.email,n.name,n.password),i()})),children:[(0,m.jsx)("label",{htmlFor:"email",children:"email:"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text",name:"email"},e("email")),{},{"aria-invalid":p.email?"true":"false"})),p.email&&(0,m.jsxs)(d.jj,{children:[(0,m.jsx)(d.Pz,{children:"\u26a0\ufe0f"}),(0,m.jsx)(d.s,{children:p.email.message})]}),(0,m.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text",name:"name"},e("name")),{},{"aria-invalid":p.name?"true":"false"})),p.name&&(0,m.jsxs)(d.jj,{children:[(0,m.jsx)(d.Pz,{children:"\u26a0\ufe0f"}),(0,m.jsx)(d.s,{children:p.name.message})]}),(0,m.jsx)("label",{htmlFor:"password",children:"password:"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"password",name:"password"},e("password")),{},{"aria-invalid":p.password?"true":"false"})),p.password&&(0,m.jsxs)(d.jj,{children:[(0,m.jsx)(d.Pz,{children:"\u26a0\ufe0f"}),(0,m.jsx)(d.s,{children:p.password.message})]}),(0,m.jsx)("button",{type:"submit",children:"add Contact"})]})}},8313:function(n,e,r){r.d(e,{II:function(){return P},Pz:function(){return j},Zk:function(){return h},a3:function(){return z},jj:function(){return g},m0:function(){return b},s:function(){return w},yt:function(){return Z}});var a,o,t,i,s,d,l,c,m,u,p,f=r(168),x=r(6444),b=(x.ZP.form(a||(a=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n"]))),x.ZP.label(o||(o=(0,f.Z)(["\n    margin-bottom: 0.5rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n"])))),h=x.ZP.label(t||(t=(0,f.Z)(["\n    margin-bottom: 0.5rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n"]))),Z=(x.ZP.input(i||(i=(0,f.Z)(["\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    border: 2px solid #ccc;\n    border-radius: 5px;\n\n    &:focus {\n        outline: none;\n        border-color: #0088cc;\n    }\n\n    &:invalid {\n        border-color: #e74c3c;\n    }\n"]))),x.ZP.input(s||(s=(0,f.Z)(["\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    border: 2px solid #ccc;\n    border-radius: 5px;\n\n    &:focus {\n        outline: none;\n        border-color: #0088cc;\n    }\n\n    &:invalid {\n        border-color: #e74c3c;\n    }\n"]))),x.ZP.button(d||(d=(0,f.Z)(["\n    padding: 0.5rem 1rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #fff;\n    background-color: #0088cc;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    &:hover {\n        background-color: #006699;\n    }\n"])))),g=x.ZP.div(l||(l=(0,f.Z)(["\n    background-color: #ff6b6b;\n    color: #fff;\n    padding: 10px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-bottom: 10px;\n"]))),j=x.ZP.span(c||(c=(0,f.Z)(["\n    font-size: 20px;\n    margin-right: 10px;\n"]))),w=x.ZP.span(m||(m=(0,f.Z)(["\n    font-size: 16px;\n"]))),z=x.ZP.form(u||(u=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n"]))),P=x.ZP.input(p||(p=(0,f.Z)(["\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    border: 2px solid #ccc;\n    border-radius: 5px;\n\n    &:focus {\n        outline: none;\n        border-color: #0088cc;\n    }\n\n    &:invalid {\n        border-color: #e74c3c;\n    }\n"])))}}]);
//# sourceMappingURL=436.c311322f.chunk.js.map