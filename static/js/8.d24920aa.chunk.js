"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{6008:function(n,e,r){r.r(e),r.d(e,{default:function(){return dn}});var t,o,a,i,s,c,l,d,m,f,u,p,x,b,g,h,Z,v,j=r(2791),y=r(1413),w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},P=r(1134),z=r(8007),k=r(4695),C=r(8313),F=function(n){return n.filter.filter},I=function(n){return n.contacts.contacts.items},Y=function(n){return n.contacts.contacts.isLoading},A=function(n){return n.contacts.contacts.error},_=r(9434),L=r(3634),S=r(184),N=(0,z.Ry)({name:(0,z.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:(0,z.Z_)().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, 5 min numbers").required()}).required(),O=function(){var n=(0,P.cI)({defaultValues:{name:"",number:""},resolver:(0,k.X)(N)}),e=n.register,r=n.handleSubmit,t=n.reset,o=n.formState.errors,a=(0,_.v9)(I),i=(0,_.I0)();function s(n){return n.replace(/\D/g,"")}return(0,S.jsxs)(C.a3,{onSubmit:r((function(n){var e=n.name,r=n.number;a.find((function(n){return n.name.toLowerCase()===e.toLowerCase()||s(n.number)===s(r)}))?alert("".concat(e," and phone number ").concat(r," is already in contacts")):(!function(n,e){var r={id:w(),name:n,number:e};i((0,L.uK)(r))}(e,r),t())})),children:[(0,S.jsx)(C.m0,{htmlFor:"name",children:"Name:"}),(0,S.jsx)(C.II,(0,y.Z)((0,y.Z)({type:"text",name:"name"},e("name")),{},{"aria-invalid":o.name?"true":"false"})),o.name&&(0,S.jsxs)(C.jj,{children:[(0,S.jsx)(C.Pz,{children:"\u26a0\ufe0f"}),(0,S.jsx)(C.s,{children:o.name.message})]}),(0,S.jsx)(C.Zk,{htmlFor:"number",children:"Phone Number:"}),(0,S.jsx)(C.II,(0,y.Z)((0,y.Z)({type:"tel",name:"number"},e("number")),{},{"aria-invalid":o.number?"true":"false"})),o.number&&(0,S.jsxs)(C.jj,{children:[(0,S.jsx)(C.Pz,{children:"\u26a0\ufe0f"}),(0,S.jsx)(C.s,{children:o.number.message})]}),(0,S.jsx)(C.yt,{type:"submit",children:"add Contact"})]})},q=r(3433),D=r(168),B=r(4313),H=B.ZP.ul(t||(t=(0,D.Z)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),K=B.ZP.li(o||(o=(0,D.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 10px;\n    background-color: #f9f9f9;\n    border-radius: 5px;\n    margin-bottom: 10px;\n    animation: fadeIn 0.5s ease-in-out;\n    position: relative;\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n            transform: translateY(-10px);\n        }\n        to {\n            opacity: 1;\n            transform: translateY(0);\n        }\n    }\n\n    &.fadeOut {\n        animation: fadeOut 0.5s ease-in-out forwards;\n    }\n\n    @keyframes fadeOut {\n        from {\n            opacity: 1;\n            transform: translateY(0);\n        }\n        to {\n            opacity: 0;\n            transform: translateY(-10px);\n        }\n    }\n"]))),M=B.ZP.span(a||(a=(0,D.Z)(["\n    font-size: 16px;\n    font-weight: bold;\n    color: #333;\n    margin: auto 0;\n"]))),R=B.ZP.span(i||(i=(0,D.Z)(["\n    font-size: 14px;\n    color: #666;\n    margin: auto 0;\n"]))),U=(0,B.F4)(s||(s=(0,D.Z)(["\n    0% {\n    transform: scale(1);\n    }\n    50% {\n    transform: scale(1.2);\n    }\n  100% {\n    transform: scale(1);\n  }\n"]))),V=(0,B.F4)(c||(c=(0,D.Z)(["\n    from {\n        opacity: 1;\n        transform: translateY(0);\n    }\n    to {\n        opacity: 0;\n        transform: translateY(-10px);\n    }\n"]))),E=B.ZP.button(l||(l=(0,D.Z)(["\n    padding: 8px 12px;\n    background-color: #f44336;\n    color: #fff;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n        background-color: #d32f2f;\n        svg {\n            animation: "," 1s ease-in-out infinite;\n        }\n    }\n\n    &:active {\n        background-color: #b71c1c;\n        svg {\n            fill: #f44336;\n        }\n        + "," {\n            animation: "," 0.5s ease-in-out forwards;\n        }\n    }\n\n    &:focus {\n        outline: none;\n        box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.4);\n    }\n\n    svg {\n        width: 20px;\n        height: 20px;\n        fill: #fff;\n        margin-right: 5px;\n        transition: all 0.2s ease-in-out;\n    }\n"])),U,K,V),G=B.ZP.h1(d||(d=(0,D.Z)(["\n    font-size: 24px;\n    font-weight: bold;\n    text-align: center;\n    color: #ff4d4f;\n    margin-top: 20px;\n"]))),J=function(n){var e=n.id,r=n.name,t=n.number,o=(0,_.I0)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(M,{children:r}),(0,S.jsx)(R,{children:t}),(0,S.jsx)(E,{type:"button",onClick:function(){return n=e,void o((0,L.GK)(n));var n},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})},X=r(1325),$=function(){var n=(0,_.I0)();(0,j.useEffect)((function(){n((0,L.Fk)())}),[n]);var e=(0,_.v9)(F),r=(0,_.v9)(I),t=(0,_.v9)(A),o=(0,_.v9)(Y);return(0,S.jsxs)(S.Fragment,{children:[o&&(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(X.Z,{style:{position:"fixed",top:"50%",left:"50%",zIndex:"999"},color:"#3682d6",cssOverride:{},loading:!0,size:50})}),t?(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(G,{children:"Sorry, an error occurred while loading this page. Please try again later"})}):(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(H,{children:function(){var n=e.toLowerCase(),t=r.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,q.Z)(t).sort((function(n,e){return n.name.toLowerCase().localeCompare(e.name)}))}().map((function(n){var e=n.id,r=n.name,t=n.number;return(0,S.jsx)(K,{children:(0,S.jsx)(J,{id:e,name:r,number:t})},e)}))})})]})},Q=(0,B.F4)(m||(m=(0,D.Z)(["\n    from {\n        opacity: 0;\n        transform: translateY(-10px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n"]))),T=(0,B.F4)(f||(f=(0,D.Z)(["\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n"]))),W=B.ZP.div(u||(u=(0,D.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px auto;\n    margin-top: 0px;\n"]))),nn=B.ZP.label(p||(p=(0,D.Z)(["\n    display: flex;\n    align-items: center;\n    position: relative;\n"]))),en=B.ZP.span(x||(x=(0,D.Z)(["\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n    color: #555;\n    animation: "," 0.5s ease-in-out;\n"])),Q),rn=B.ZP.input(b||(b=(0,D.Z)(["\n    padding: 10px;\n    border-radius: 20px;\n    font-size: 16px;\n    border: none;\n    border-bottom: 2px solid #eee;\n    outline: none;\n    flex-grow: 1;\n    background-color: #fff;\n    transition: all 0.2s ease-in-out;\n\n    &:focus {\n        border-bottom: 2px solid #3f51b5;\n    }\n\n    &::placeholder {\n        color: #bbb;\n    }\n"]))),tn=B.ZP.svg(g||(g=(0,D.Z)(["\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    fill: #bbb;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n        animation: "," 1s ease-in-out infinite;\n        fill: #3f51b5;\n    }\n\n    &:active {\n        fill: #3f51b5;\n    }\n"])),T),on=r(1833),an=function(){var n=(0,_.I0)(),e=(0,_.v9)(F);return(0,S.jsx)(W,{children:(0,S.jsxs)(nn,{children:[(0,S.jsx)(en,{children:"Filter Name"}),(0,S.jsx)(rn,{type:"text",value:e,onChange:function(e){n((0,on.P)(e.target.value))}}),(0,S.jsx)(tn,{viewBox:"0 0 24 24",children:(0,S.jsx)("path",{d:"M21.71,20.29l-5.05-5a8,8,0,1,0-1.41,1.41l5,5a1,1,0,0,0,1.41-1.41Zm-13.12-6.44a6,6,0,1,1,6-6A6,6,0,0,1,8.59,13.85Z"})})]})})},sn=B.ZP.div(h||(h=(0,D.Z)(["\n    padding-top: 20px;\n    padding-bottom: 20px;\n"]))),cn=B.ZP.h1(Z||(Z=(0,D.Z)(["\n    text-align: center;\n    font-family: 'Delicious Handrawn', cursive;\n    font-size: 40px;\n    letter-spacing: 0px;\n    word-spacing: 0px;\n    color: yellow;\n    font-weight: normal;\n    text-decoration: none;\n    font-style: normal;\n    font-variant: normal;\n    text-transform: none;\n    margin-bottom: 20px;\n"]))),ln=B.ZP.h2(v||(v=(0,D.Z)(['\n    text-align: center;\n    color: yellow;\n    font-family: "Delicious Handrawn", cursive;\n    font-size: 35px;\n    letter-spacing: 0px;\n    word-spacing: 0px;\n    font-weight: normal;\n    text-decoration: none;\n    font-style: normal;\n    font-variant: normal;\n    text-transform: none;\n    margin-bottom: 20px;\n'])));function dn(){return(0,S.jsxs)(sn,{children:[(0,S.jsx)(cn,{children:"Phonebook"}),(0,S.jsx)(O,{}),(0,S.jsx)(ln,{children:"Contacts"}),(0,S.jsx)(an,{}),(0,S.jsx)($,{})]})}},8313:function(n,e,r){r.d(e,{II:function(){return w},Pz:function(){return v},Zk:function(){return g},a3:function(){return y},jj:function(){return Z},m0:function(){return b},s:function(){return j},yt:function(){return h}});var t,o,a,i,s,c,l,d,m,f,u,p=r(168),x=r(4313),b=(x.ZP.form(t||(t=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n"]))),x.ZP.label(o||(o=(0,p.Z)(["\n    margin-bottom: 0.5rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n"])))),g=x.ZP.label(a||(a=(0,p.Z)(["\n    margin-bottom: 0.5rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n"]))),h=(x.ZP.input(i||(i=(0,p.Z)(["\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    border: 2px solid #ccc;\n    border-radius: 5px;\n\n    &:focus {\n        outline: none;\n        border-color: #0088cc;\n    }\n\n    &:invalid {\n        border-color: #e74c3c;\n    }\n"]))),x.ZP.input(s||(s=(0,p.Z)(["\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    border: 2px solid #ccc;\n    border-radius: 5px;\n\n    &:focus {\n        outline: none;\n        border-color: #0088cc;\n    }\n\n    &:invalid {\n        border-color: #e74c3c;\n    }\n"]))),x.ZP.button(c||(c=(0,p.Z)(["\n    padding: 0.5rem 1rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #fff;\n    background-color: #0088cc;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    &:hover {\n        background-color: #006699;\n    }\n"])))),Z=x.ZP.div(l||(l=(0,p.Z)(["\n    background-color: #ff6b6b;\n    color: #fff;\n    padding: 10px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-bottom: 10px;\n"]))),v=x.ZP.span(d||(d=(0,p.Z)(["\n    font-size: 20px;\n    margin-right: 10px;\n"]))),j=x.ZP.span(m||(m=(0,p.Z)(["\n    font-size: 16px;\n"]))),y=x.ZP.form(f||(f=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n"]))),w=x.ZP.input(u||(u=(0,p.Z)(["\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    border: 2px solid #ccc;\n    border-radius: 5px;\n\n    &:focus {\n        outline: none;\n        border-color: #0088cc;\n    }\n\n    &:invalid {\n        border-color: #e74c3c;\n    }\n"])))}}]);
//# sourceMappingURL=8.d24920aa.chunk.js.map