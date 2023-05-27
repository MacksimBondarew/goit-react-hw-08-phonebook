"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{2436:function(e,a,r){r.r(a),r.d(a,{default:function(){return k}});var n,s=r(1413),t=r(9439),i=r(168),l=r(2791),o=r(1134),d=r(8007),c=r(4695),m=r(9434),p=r(4313),h=r(9273),x=r(1087),u=r(4087),f=r(9229),g=r(6192),j=r(7806),Z=r(1148),w=r(4224),y=r(4363),b=r(9398),A=r(6220),v=r(9085),z=r(184),I=(0,p.ZP)(x.rU)(n||(n=(0,i.Z)(["\n    color: teal;\n    text-align: center;\n    margin-left: 5px;\n    font-weight: 700;\n"]))),V=(0,d.Ry)({name:(0,d.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces").required(),email:(0,d.Z_)().matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,"Email may contain only letters, apostrophe, dash and spaces").required(),password:(0,d.Z_)().matches(/.{7,}/,"The password must be at least 7 characters long").required()}).required();function k(){var e=(0,l.useState)(!1),a=(0,t.Z)(e,2),r=a[0],n=a[1],i=(0,o.cI)({defaultValues:{name:"",email:"",password:""},resolver:(0,c.X)(V)}),d=i.register,p=i.handleSubmit,x=i.reset,k=i.formState.errors,E=(0,m.I0)();return(0,z.jsx)(u.xu,{display:"flex",justifyContent:"center",alignItems:"center",height:"500px",children:(0,z.jsx)(u.xu,{width:"sm",height:"sm",pb:"70px",pr:"50px",pl:"50px",bg:"white",paddingTop:"30px",borderRadius:"20px",textAlign:"center",children:(0,z.jsxs)("form",{onSubmit:p((function(e){!function(e,a,r){E((0,h.registerUser)({name:a,email:e,password:r}))}(e.email,e.name,e.password),x()})),children:[(0,z.jsx)(f.x,{fontSize:"30px",textAlign:"center",fontWeight:"semibold",mb:"10px",children:"Registration"}),(0,z.jsxs)(g.B,{mb:"20px",children:[(0,z.jsx)(j.Z,{pointerEvents:"none",children:(0,z.jsx)(y.J,{viewBox:"0 0 32 32",children:(0,z.jsx)("path",{d:"M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"})})}),(0,z.jsx)(Z.I,(0,s.Z)((0,s.Z)({type:"text",name:"name"},d("name")),{},{"aria-invalid":k.name?"true":"false",size:"md",placeholder:"Enter name"})),k.name&&v.Am.error("".concat(k.name.message))]}),(0,z.jsxs)(g.B,{mb:"20px",children:[(0,z.jsx)(j.Z,{pointerEvents:"none",children:(0,z.jsx)(b.L,{})}),(0,z.jsx)(Z.I,(0,s.Z)((0,s.Z)({type:"text",name:"email"},d("email")),{},{"aria-invalid":k.email?"true":"false",size:"md",placeholder:"Enter email"})),k.email&&v.Am.error("".concat(k.email.message))]}),(0,z.jsxs)(g.B,{mb:"20px",children:[(0,z.jsx)(j.Z,{pointerEvents:"none",children:(0,z.jsx)(A.m,{})}),(0,z.jsx)(Z.I,(0,s.Z)((0,s.Z)({type:r?"text":"password",name:"password"},d("password")),{},{"aria-invalid":k.password?"true":"false",size:"md",placeholder:"Enter password"})),(0,z.jsx)(j.x,{width:"4.5rem",children:(0,z.jsx)(w.z,{h:"1.75rem",size:"sm",onClick:function(){return n(!r)},children:r?"Hide":"Show"})}),k.password&&k.password&&v.Am.error("".concat(k.password.message))]}),(0,z.jsxs)(f.x,{mb:"10px",fontWeight:"500",fontSize:"15px",children:["If you are already registered, log in using your",(0,z.jsx)(I,{to:"/authorisation/login",children:"Login"})]}),(0,z.jsx)(w.z,{variant:"solid",display:"inline-block",colorScheme:"teal",type:"submit",children:"Register"})]})})})}},9398:function(e,a,r){r.d(a,{L:function(){return t}});var n=r(5903),s=r(184),t=(0,n.I)({displayName:"EmailIcon",path:(0,s.jsxs)("g",{fill:"currentColor",children:[(0,s.jsx)("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),(0,s.jsx)("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"})]})})},6220:function(e,a,r){r.d(a,{m:function(){return n}});var n=(0,r(5903).I)({d:"M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",displayName:"LockIcon"})}}]);
//# sourceMappingURL=436.0e59f55d.chunk.js.map