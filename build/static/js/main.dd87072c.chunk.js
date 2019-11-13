(this.webpackJsonppjonps_website=this.webpackJsonppjonps_website||[]).push([[0],{14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),c=t.n(o),i=t(1),s=t(2),l=t(4),m=t(3),p=t(5),g=t(8),d=t.n(g),u=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=function(){document.getElementById("sidebarSlider").checked=!1;var e=document.getElementById("websiteNote");e.className.includes("redGlow")||(e.classList.add("redGlow"),setTimeout((function(){e.classList.remove("redGlow")}),2500))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",id:"sidebarSlider"}),r.a.createElement("label",{htmlFor:"sidebarSlider"},r.a.createElement("div",{id:"sidebarcontainer"},r.a.createElement("div",{id:"sidebar"},r.a.createElement("nav",{id:"sidebar-links"},r.a.createElement("div",{className:"sidebarLink"},r.a.createElement("a",{href:"#content_intro",onClick:e},r.a.createElement("i",{className:"fa fa-envelope"})," Email")),r.a.createElement("div",{className:"sidebarLink"},r.a.createElement("a",{href:"#content_intro",onClick:e},r.a.createElement("i",{className:"fab fa-github-square"})," Github")),r.a.createElement("div",{className:"sidebarLink"},r.a.createElement("a",{href:"#content_intro",onClick:e},r.a.createElement("i",{className:"fab fa-linkedin"})," LinkedIn")),r.a.createElement("div",{className:"sidebarLink"},r.a.createElement("a",{href:"#content_intro",onClick:e},r.a.createElement("i",{className:"fab fa-free-code-camp"})," F.C.C."))),r.a.createElement("div",{id:"sidebar-info"},r.a.createElement("img",{className:"logo-img",alt:"React Logo",src:d.a}),r.a.createElement("p",null,"Made with React"))))))}}]),a}(n.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"headercontainer"},r.a.createElement("div",{id:"headerbar"},r.a.createElement("div",{id:"headerbar-intro"},r.a.createElement("h1",null,"pjonp")),r.a.createElement("nav",{id:"headerbar-links"},r.a.createElement("div",null,r.a.createElement("a",{href:"#content_intro"},"Intro")),r.a.createElement("div",null,r.a.createElement("a",{href:"#content_certs"},"Certifications")),r.a.createElement("div",null,r.a.createElement("a",{href:"#content_projects"},"Projects")),r.a.createElement("div",null,r.a.createElement("a",{href:"#content_experience"},"Experience")))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"content_intro"},r.a.createElement("h1",null,"P. Jon P."),r.a.createElement("div",{id:"introContainer"},r.a.createElement("h3",null,"Looking to apply over ten years experience of design and problem solving in the mechanical engineering industry to computer programing."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"websiteNote",id:"websiteNote"},"This website was built from Facebook's ",r.a.createElement("a",{href:"https://github.com/facebook/create-react-app",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("em",null,"create-react-app"))," with no additonal scripts imported. Personal information has been omited for this public project. For contact information and references, please refer to the resume submited.")))}}]),a}(n.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=[{name:"Responsive Web Design",image:"/images/certs/fccWebDesign.png",link:"https://www.freecodecamp.org/certification/pjonp/responsive-web-design"},{name:"JavaScript Algorithms & Data Structures",image:"/images/certs/fccJavascript.png",link:"https://www.freecodecamp.org/certification/pjonp/javascript-algorithms-and-data-structures"},{name:"Front End Libraries",image:"/images/certs/fccFrontEnd.png",link:"https://www.freecodecamp.org/certification/pjonp/front-end-libraries"},{name:"Data Visualization",image:"/images/certs/fccDataVis.png",link:"https://www.freecodecamp.org/certification/pjonp/data-visualization"},{name:"APIs and Microservices",image:"/images/certs/fccAPIs.png",link:"https://www.freecodecamp.org/certification/pjonp/apis-and-microservices"},{name:"Information Security & Quality Assurance",image:"/images/certs/fccISQA.png",link:"https://www.freecodecamp.org/certification/pjonp/information-security-and-quality-assurance"},{name:"Full Stack",image:"/images/certs/fccFullStack.png",link:"https://www.freecodecamp.org/certification/pjonp/full-stack"}].map((function(e,a){return r.a.createElement("div",{className:"certItem",key:e.name+"cert"},r.a.createElement("input",{type:"checkbox",id:"cert"+a}),r.a.createElement("label",{htmlFor:"cert"+a},r.a.createElement("img",{className:"certImg",alt:e.name+"Certification",src:"/About"+e.image}),r.a.createElement("p",{className:"certText"},e.name)))}));return r.a.createElement("div",{id:"content_certs"},r.a.createElement("h1",null,"Certifications"),r.a.createElement("div",{id:"certContainer"},e))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=[{name:"Random Quote Machine",image:"/images/projects/project_randomQuotes.png",link:"https://codepen.io/pjonp/pen/VwwayjZ",tools:[["HTML5","html5"],["CSS3","css3"],["JS","js"],["JSON","database"]]},{name:"Javascript Calculator",image:"/images/projects/project_calculator.png",link:"https://codepen.io/pjonp/pen/jOOMGqz",tools:[["CSS3","css3"],["JS","js"],["REACT","react"]]},{name:"Markdown Previewer",image:"/images/projects/project_markdown.png",link:"https://codepen.io/pjonp/pen/yLLajgb",tools:[["CSS3","css3"],["JS","js"],["REACT","react"]]},{name:"Pomodoro Clock",image:"/images/projects/project_pomodoroClock.png",link:"https://codepen.io/pjonp/pen/OJJbVLR",tools:[["CSS3","css3"],["JS","js"],["REACT","react"]]},{name:"D3 Bar Chart",image:"/images/projects/project_d3Bar.png",link:"https://codepen.io/pjonp/pen/zYYNPVB",tools:[["CSS3","css3"],["JS","js"],["D3.js","project-diagram"],["JSON","database"]]},{name:"D3 Heat Map",image:"/images/projects/project_d3Heatmap.png",link:"https://codepen.io/pjonp/pen/abbJxKW",tools:[["CSS3","css3"],["JS","js"],["D3.js","project-diagram"],["JSON","database"]]},{name:"D3 Choropleth Map",image:"/images/projects/project_d3Choropleth.png",link:"https://codepen.io/pjonp/pen/ZEEKrgr",tools:[["CSS3","css3"],["JS","js"],["D3.js","project-diagram"],["JSON","database"]]},{name:"Unit Converter",image:"/images/projects/project_unitConverter.png",link:"https://fcc6-pjonp.glitch.me/",tools:[["HTML5","html5"],["JS","js"],["EXPRESS","node"]]},{name:"Exercise Tracker",image:"/images/projects/project_exerciseTracker.png",link:"https://fcc4-pjonp.glitch.me/",tools:[["HTML5","html5"],["JS","js"],["EXPRESS","node"],["MongoDB","database"]]},{name:"Personal Library",image:"/images/projects/project_personalLibrary.png",link:"https://fcc8-pjonp.glitch.me/",tools:[["HTML5","html5"],["JS","js"],["EXPRESS","node"],["MongoDB","database"]]},{name:"Message Board",image:"/images/projects/project_messageBoard.png",link:"https://fcc10-jonp.glitch.me/",tools:[["HTML5","html5"],["JS","js"],["EXPRESS","node"],["MongoDB","database"]]},{name:"Issue Tracker",image:"/images/projects/project_issueTracker.png",link:"https://fcc7-pjonp.glitch.me/",tools:[["HTML5","html5"],["JS","js"],["EXPRESS","node"],["MongoDB","database"]]}].map((function(e){var a=e.tools.map((function(e){var a;return a="database"===e[1]||"project-diagram"===e[1]?"":"b",r.a.createElement("div",{className:"projectIcon",key:e[0]},r.a.createElement("i",{className:"fa"+a+" fa-"+e[1]+" fa-2x"}),r.a.createElement("p",{className:"projectIconName"},e[0]))}));return r.a.createElement("a",{className:"projectItem",href:e.link,rel:"noreferrer noopener",target:"_blank",key:e.name+"project"},r.a.createElement("img",{className:"projectImg",alt:e.name+"Project",src:"/About"+e.image}),r.a.createElement("div",{className:"projectIconsList"},a),r.a.createElement("p",{className:"projectText"},e.name))}));return r.a.createElement("div",{id:"content_projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{id:"projectContainer"},e))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=[{name:"GM",image:"/images/logos/logo_GM.png"},{name:"Tesla",image:"/images/logos/logo_Tesla.png"},{name:"Michigan State University",image:"/images/logos/logo_MSU.png"},{name:"Nissan",image:"/images/logos/logo_Nissan.png"},{name:"Honda",image:"/images/logos/logo_Honda.png"},{name:"Boeing",image:"/images/logos/logo_Boeing.png"},{name:"Jeep",image:"/images/logos/logo_Jeep.png"},{name:"Dart",image:"/images/logos/logo_Dart.png"},{name:"Ford",image:"/images/logos/logo_Ford.png"},{name:"John Deere",image:"/images/logos/logo_JohnDeere.png"},{name:"Club Car",image:"/images/logos/logo_ClubCar.png"}].map((function(e,a){return r.a.createElement("img",{className:"logoImg",alt:e.name+"Logo",src:"/About"+e.image,key:e.name+"logo"})}));return r.a.createElement("div",{id:"content_experience"},r.a.createElement("h1",null,"Experience"),r.a.createElement("p",null,"For the last ten years I've been grateful to work with more the 50+ companies creating solutions to their problems; both simple and complex."),r.a.createElement("p",null,"I'm ready for a new challenge."),r.a.createElement("div",{id:"logoContainer"},e))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement(j,null),r.a.createElement(u,null),r.a.createElement("content",null,r.a.createElement("div",{className:"contentContainer"},r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},9:function(e,a,t){e.exports=t(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.dd87072c.chunk.js.map