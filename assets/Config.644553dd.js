import{r as n,c,j as t,T as l}from"./index.0888f01f.js";import{m as i,p as d}from"./pageAnimation.8992af32.js";const h="_dot_o81zy_3",r={switch:"_switch_o81zy_1",dot:h},m=n.exports.forwardRef(({label:e,...s},o)=>{const a=n.exports.useId();return c("label",{htmlFor:a,className:`flex items-center cursor-pointer ${r.switch}`,children:[c("div",{className:"relative",children:[t("input",{type:"checkbox",id:a,className:"sr-only",ref:o,...s}),t("div",{className:"block bg-gray-600 w-14 h-8 rounded-full"}),t("div",{className:`${r.dot} absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition`})]}),t("div",{className:"ml-3 font-medium",children:e})]})}),u=m,x=()=>{const{theme:e,setTheme:s}=n.exports.useContext(l),o=n.exports.useCallback(()=>{s(e==="dark"?"light":"dark")},[e]);return{theme:e,toggle:o}},f=x;function w(){const{theme:e,toggle:s}=f(),o=()=>{s()};return t(i.div,{...d,className:"text-white tex-xl",children:t(u,{label:e,checked:e==="dark",onChange:o})},"config")}export{w as default};
