import{r as f,R as t}from"./index-DRjF_FHU.js";import{I as u}from"./index-mAZdcZDK.js";import"./compact-item-mA-hkX0P.js";import"./index-BXCeiWJk.js";import"./index-DcfIKM1A.js";import"./SearchOutlined-BFzUnUxI.js";import"./index-BnpGAMrx.js";import"./button-BRgLJBBl.js";const s=e=>{const[g,o]=f.useState(!1);let{label:i,value:a,placeholder:l,type:n,required:b,maxLength:h,disabled:m}=e;l||(l=i);const y=g||a!=null&&a!==""?"label as-label":"label as-placeholder",E=b?t.createElement("span",{className:"text-danger"},"*"):null;return t.createElement("div",{className:"float-label",onBlur:()=>o(!1),onFocus:()=>o(!0)},(n=="text"||n=="email")&&t.createElement(u,{onChange:e.onChange,type:n,value:a,disabled:m}),n=="number"&&t.createElement(u,{onChange:e.onChange,maxLength:h,type:n,value:a,placeholder:l,disabled:m}),t.createElement("label",{className:y},i," ",E))};s.__docgenInfo={description:"",methods:[],displayName:"FloatInput",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'text' | 'email' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'number'"}]},description:""},required:{required:!0,tsType:{name:"boolean"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const w={title:"Components/FloatInput",component:s},v=e=>t.createElement(s,{...e}),r=v.bind({});r.args={label:"Enter Text",value:"",placeholder:"Type here...",type:"text",required:!1,maxLength:100,onChange:e=>console.log(e.target.value)};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <FloatInput {...args} />",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,w as default};