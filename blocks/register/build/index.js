!function(){"use strict";var e=window.wp.blocks,a=window.wp.element,t=window.wp.blockEditor,l=window.wp.components;(0,e.registerBlockType)("plz/register",{title:"Register",category:"widgets",icon:"admin-users",attributes:{title:{source:"html",selector:"h1",default:"Register"},nameLabel:{type:"string",default:"Name"},emailLabel:{type:"string",default:"Email"},passwordLabel:{type:"string",default:"Password"},text:{source:"html",selector:"p"}},styles:[{name:"light",label:"Light mode",isDefault:!0},{name:"dark",label:"Dark mode",isDefault:!1}],edit:e=>{const{className:n,attributes:m,setAttributes:i}=e,{title:s,nameLabel:r,emailLabel:c,passwordLabel:o,text:p}=m,[d,u]=(0,a.useState)(p);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(t.InspectorControls,null,(0,a.createElement)(l.Panel,null,(0,a.createElement)(l.PanelBody,{title:"Labels",initialOpen:!0},(0,a.createElement)(l.TextControl,{label:"Name Label",value:r,onChange:e=>i({nameLabel:e})}),(0,a.createElement)(l.TextControl,{label:"Name Label",value:c,onChange:e=>i({emailLabel:e})}),(0,a.createElement)(l.TextControl,{label:"Name Label",value:o,onChange:e=>i({passwordLabel:e})})))),(0,a.createElement)(t.BlockControls,{controls:[{icon:"text",title:"Add text",isActive:p||d,onClick:()=>u(!d)}]}),(0,a.createElement)("div",{className:n},(0,a.createElement)("div",{className:"signin__container"},(0,a.createElement)(t.RichText,{tagName:"h1",placeholder:"Write a title",className:"sigin__titulo",value:s,onChange:e=>i({title:e})}),(p||d)&&(0,a.createElement)(t.RichText,{tagName:"p",placeholder:"Write a paragraph",className:"sigin__titulo",value:p,onChange:e=>i({text:e})}),(0,a.createElement)("form",{className:"signin__form",id:"signup"},(0,a.createElement)("div",{className:"signin__name name--campo"},(0,a.createElement)("label",{for:"Name"},r),(0,a.createElement)("input",{name:"name",type:"text",id:"Name"})),(0,a.createElement)("div",{className:"signin__email name--campo"},(0,a.createElement)("label",{for:"email"},c),(0,a.createElement)("input",{name:"email",type:"email",id:"email"})),(0,a.createElement)("div",{className:"signin__pass name--campo"},(0,a.createElement)("label",{for:"password"},o),(0,a.createElement)("input",{name:"password",type:"password",id:"password"})),(0,a.createElement)("div",{className:"signin__submit"},(0,a.createElement)("input",{type:"submit",value:"Create"})),(0,a.createElement)("div",{className:"msg"})))))},save:e=>{const{className:l,attributes:n}=e,{title:m,nameLabel:i,emailLabel:s,passwordLabel:r,text:c}=n;return(0,a.createElement)("div",{className:l},(0,a.createElement)("div",{className:"signin__container"},(0,a.createElement)(t.RichText.Content,{tagName:"h1",className:"sigin__titulo",value:m}),c&&(0,a.createElement)(t.RichText.Content,{tagName:"p",className:"sigin__titulo",value:c}),(0,a.createElement)("form",{className:"signin__form",id:"signup"},(0,a.createElement)("div",{className:"signin__name name--campo"},(0,a.createElement)("label",{for:"Name"},i),(0,a.createElement)("input",{name:"name",type:"text",id:"Name"})),(0,a.createElement)("div",{className:"signin__email name--campo"},(0,a.createElement)("label",{for:"email"},s),(0,a.createElement)("input",{name:"email",type:"email",id:"email"})),(0,a.createElement)("div",{className:"signin__pass name--campo"},(0,a.createElement)("label",{for:"password"},r),(0,a.createElement)("input",{name:"password",type:"password",id:"password"})),(0,a.createElement)("div",{className:"signin__submit"},(0,a.createElement)("input",{type:"submit",value:"Create"})),(0,a.createElement)("div",{className:"msg"}))))}})}();