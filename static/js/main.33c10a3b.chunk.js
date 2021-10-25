(this["webpackJsonpvictoriashaw.me"]=this["webpackJsonpvictoriashaw.me"]||[]).push([[0],{23:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(16),c=a.n(n),s=a(11),o=a(7),r=(a(23),a(0)),l=["btn--primary","btn--outline"],m=["btn--medium","btn--large"],j=function(e){var t=e.children,a=e.type,i=e.onClick,n=e.buttonStyle,c=e.buttonSize,s=l.includes(n)?n:l[0],j=m.includes(c)?c:m[0];return Object(r.jsx)(o.b,{to:"/resume",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(s," ").concat(j),onClick:i,type:a,children:t})})};a(33);var b=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(!0),l=Object(s.a)(c,2),m=l[0],b=l[1],d=function(){return n(!1)},h=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(i.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsx)(o.b,{to:"/",className:"navbar-logo",children:"My Website"}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return n(!a)},children:Object(r.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/resume",className:"nav-links",onClick:d,children:"Resume"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/coding",className:"nav-links",onClick:d,children:"Bio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/art-portfolio",className:"nav-links",onClick:d,children:"Art Portfolio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/contact-me",className:"nav-links-mobile",onClick:d,children:"Contact Me"})})]}),m&&Object(r.jsx)(j,{buttonStyle:"btn--outline",children:"Contact Me"})]})})})},d=a(2);a(9),a(34);var h=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsxs)("div",{className:"home-intro",children:[Object(r.jsx)("h1",{children:"Hello!"}),Object(r.jsx)("p",{children:"My name is Victoria Shaw! I'm a Dartmouth '24 from the Boston area."})]}),Object(r.jsx)("div",{className:"photo",children:Object(r.jsx)("img",{src:"/victoriashaw.me/images/IMG_7090.JPG",alt:" "})})]})},u=a.p+"static/media/Victoria_resume_8_8.1929e2db.pdf";a(35);var g=function(){return Object(r.jsx)("div",{className:"resume",children:Object(r.jsx)("div",{className:"link",children:Object(r.jsx)("a",{href:u,target:"_blank",rel:"noreferrer",children:"Resume PDF"})})})};a(36);var p=function(){return Object(r.jsxs)("div",{className:"about-me",children:[Object(r.jsx)("h1",{children:" A Little About Me"}),Object(r.jsx)("p",{children:"I'm a sophmore double majoring in CS and Econ. Outside of school, I'm a member of the Dartmouth Figure Skating Team where I serve as a Friends chair. Additionaly, I'm involved with WiCS. Last spring, I served as social chair for a term. My hobbies include hiking, baking, and art."}),Object(r.jsx)("h1",{children:" My Coding Experience"}),Object(r.jsx)("p",{children:" I am well-versed in Java and C. Additionaly, I am competent at Python, HTML/CSS, JS, and Bash. Here at Dartmouth, I have taken CS10, CS50, and CS70. "}),Object(r.jsx)("h1",{children:" Why I Want to Work at Dali"}),Object(r.jsx)("p",{children:"Through my time at Dartmouth, I have learned so much about coding through classes and projects. I would love the opprotunity to apply the skills I have learned in the classroom into real world projects. It is so exciting being able to assist in creating a product with actual impact. Moreover, I look forward to a collaborative space and tight-knight community Dali provides."})]})},f=[{image:"images/art portfolio/IMG_1.jpg"},{image:"images/art portfolio/IMG_2.JPG"},{image:"images/art portfolio/IMG_3.JPG"},{image:"images/art portfolio/IMG_4.JPG"},{image:"images/art portfolio/IMG_5.JPG"},{image:"images/art portfolio/IMG_6.JPG"},{image:"images/art portfolio/IMG_7.jpg"},{image:"images/art portfolio/IMG_8.JPG"},{image:"images/art portfolio/IMG_9.JPG"},{image:"images/art portfolio/IMG_10.JPG"},{image:"images/art portfolio/IMG_11.JPG"},{image:"images/art portfolio/IMG_12.jpg"},{image:"images/art portfolio/IMG_13.JPG"},{image:"images/art portfolio/IMG_14.jpg"},{image:"images/art portfolio/IMG_15.JPG"}],O=a(15),v=(a(37),function(e){var t=e.slides,a=Object(i.useState)(0),n=Object(s.a)(a,2),c=n[0],o=n[1],l=t.length;return console.log(c),!Array.isArray(t)||t.length<=0?null:Object(r.jsxs)("section",{className:"slider",children:[Object(r.jsx)(O.a,{className:"left-arrow",onClick:function(){o(0===c?0:c-1)}}),Object(r.jsx)(O.b,{className:"right-arrow",onClick:function(){o(c===l-1?0:c+1)}}),f.map((function(e,t){return Object(r.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(r.jsx)("img",{src:e.image,alt:" ",className:"image"})},t)}))]})});a(38);var x=function(){return Object(r.jsxs)("div",{className:"artwork",children:["Check out some of my artwork!",Object(r.jsx)(v,{slides:f})]})};var I=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(b,{}),Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/",exact:!0,component:h}),Object(r.jsx)(d.a,{path:"/resume",component:g}),Object(r.jsx)(d.a,{path:"/coding",component:p}),Object(r.jsx)(d.a,{path:"/art-portfolio",component:x})]})]})})};c.a.render(Object(r.jsx)(I,{}),document.getElementById("root"))},9:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.33c10a3b.chunk.js.map