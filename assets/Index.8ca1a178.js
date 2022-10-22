import{s as k,a as M,b as P,u as q,r as c,j as n,c as K,m as v,M as A,d as U,e as $,f as D,g as z,h as I}from"./index.cbdd4c3b.js";function j(){let e=!1;const t=[],l=new Set,o={subscribe(s){return l.add(s),()=>void l.delete(s)},start(s,r){if(e){const a=[];return l.forEach(d=>{a.push(P(d,s,{transitionOverride:r}))}),Promise.all(a)}else return new Promise(a=>{t.push({animation:[s,r],resolve:a})})},set(s){return l.forEach(r=>{k(r,s)})},stop(){l.forEach(s=>{M(s)})},mount(){return e=!0,t.forEach(({animation:s,resolve:r})=>{o.start(...s).then(r)}),()=>{e=!1,o.stop()}}};return o}function H(){const e=q(j);return c.exports.useEffect(e.mount,[]),e}const O={board:{board:[],boxes:[],player:{x:0,y:0}},player:{x:0,y:0},boxes:{},meta:{size:0,walls:{top:0,bottom:0,left:0,right:0},squarePercent:0},undoStack:[],setPlayer:()=>{},setBoxes:()=>{},setMeta:()=>{},setUndoStack:()=>{}},T=c.exports.createContext({...O}),V=({children:e,board:t})=>{const[l,o]=c.exports.useState(!1),[s,r]=c.exports.useState(O.player),[a,d]=c.exports.useState(O.boxes),[g,E]=c.exports.useState(O.meta),[y,x]=c.exports.useState([]);return c.exports.useEffect(()=>{var b;const u=Math.max(t.board.length,(b=t.board[0])==null?void 0:b.length),i=(u-t.board.length)/2,f=(u-t.board[0].length)/2,R={top:1+Math.floor(i),bottom:1+Math.ceil(i),left:1+Math.floor(f),right:1+Math.ceil(f)};return r({...t.player}),d(t.boxes.reduce((p,m,B)=>{var C;return{...p,[B]:{...m,inButton:((C=t.board[m.y])==null?void 0:C[m.x])==="BUTTON"}}},{})),E({size:u,squarePercent:100/(u+2),walls:R}),o(!0),()=>{o(!1)}},[t]),n(T.Provider,{value:{board:t,player:s,boxes:a,meta:g,undoStack:y,setPlayer:r,setBoxes:d,setMeta:E,setUndoStack:x},children:l&&e})},G=()=>{const{board:e,boxes:t,meta:l,player:o,undoStack:s,setPlayer:r,setBoxes:a,setUndoStack:d}=c.exports.useContext(T);return{board:e,boxes:t,meta:l,player:o,movePlayer:x=>{var L,N;const u={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}}[x],i={x:o.x+u.x,y:o.y+u.y},f={x:i.x+u.x,y:i.y+u.y},R=(L=e.board[i.y])==null?void 0:L[i.x],b=(N=e.board[f.y])==null?void 0:N[f.x];let p,m;Object.entries(t).forEach(([S,F])=>{if(F.x===i.x&&F.y===i.y){p=parseInt(S);return}F.x===f.x&&F.y===f.y&&(m=parseInt(S))});const B=Boolean(R)&&R!=="BLOCK",C=Boolean(b)&&b!=="BLOCK";if(p===void 0&&B){d([...s,{player:{...o}}]),r(i);return}p!==void 0&&m===void 0&&B&&C&&(d([...s,{player:{...o},box:[p,t[p]]}]),r(i),a({...t,[p]:{...f,inButton:b==="BUTTON"}}))},undo:()=>{const x=s.at(-1);if(x&&(d(s.slice(0,-1)),r(x.player),x.box)){const[u,i]=x.box;a({...t,[u]:{...i}})}},reset:()=>{r({...e.player}),a(e.boxes.reduce((x,u,i)=>{var f;return{...x,[i]:{...u,inButton:((f=e.board[u.y])==null?void 0:f[u.x])==="BUTTON"}}},{}))}}},w=G;function W({children:e}){const t=c.exports.useRef(null),{movePlayer:l,undo:o}=w(),s=r=>{if(r.preventDefault(),r.ctrlKey&&r.key==="z")o();else{const a={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"}[r.key];a&&l(a)}};return c.exports.useEffect(()=>{t.current&&t.current.focus()},[t]),n("div",{tabIndex:0,className:"h-full p-5 flex flex-col",ref:t,onKeyDown:s,children:e})}function X({onHoldEnded:e,holdTime:t=2e3,children:l,className:o=""}){const s=H(),r=async()=>{await s.start({width:"100%",transition:{duration:t/1e3}}),e(),s.start({opacity:0})},a=()=>{s.stop(),s.set({width:"0%",opacity:1})};return K("button",{className:`relative overflow-hidden grid rounded-md text-xl place-content-center bg-green-500 hover:bg-green-700 transition text-white ${o}`,onMouseDown:r,onMouseUp:a,onMouseLeave:a,children:[n(v.span,{className:"absolute h-full bg-blue-500",initial:{width:"0%"},animate:s}),n("span",{className:"z-10",children:l})]})}function h({children:e,onTick:t,interval:l=100,className:o="",tickTimeout:s=500}){const r=c.exports.useRef(),a=c.exports.useRef(),d=c.exports.useRef(t);c.exports.useEffect(()=>{d.current=t},[t]);const g=y=>{y.preventDefault(),y.button===0&&r.current==null&&(d.current(),a.current=Number(setTimeout(()=>{r.current=Number(setInterval(()=>{d.current()},l))},s)))},E=()=>{a.current&&(clearTimeout(a.current),a.current=void 0),r.current&&(clearInterval(r.current),r.current=void 0)};return n("button",{className:`grid rounded-md text-xl place-content-center bg-green-500 hover:bg-green-700 transition text-white ${o}`,onMouseDown:g,onMouseLeave:E,onMouseUp:E,children:e})}function Y(){const{movePlayer:e,undo:t,reset:l}=w();c.exports.useRef();const o=s=>()=>{e(s)};return K("div",{className:"flex-grow grid max-h-[250px] grid-cols-3 grid-rows-2 gap-2 p-2 pb-14",children:[n(h,{onTick:t,className:"row-start-1 col-start-1",children:n(A,{})}),n(h,{onTick:o("up"),className:"row-start-1 col-start-2",children:n(U,{})}),n(X,{onHoldEnded:l,className:"row-start-1 col-start-3",children:n($,{})}),n(h,{onTick:o("left"),className:"row-start-2 col-start-1",children:n(D,{})}),n(h,{onTick:o("down"),className:"row-start-2 col-start-2",children:n(z,{})}),n(h,{onTick:o("right"),className:"row-start-2 col-start-3",children:n(I,{})})]})}function J({x:e,y:t,inButton:l}){const{meta:o}=w();return n(v.div,{className:`absolute aspect-square rounded-md transition ${l?"bg-blue-700":"bg-orange-700"}`,style:{width:`${o.squarePercent}%`},animate:{left:`${(o.walls.left+e)*o.squarePercent}%`,top:`${(o.walls.top+t)*o.squarePercent}%`},children:n("div",{className:`w-1/2 transition ${l?"bg-blue-500":"bg-orange-500"} aspect-square m-[25%]`})})}function Q(){const{meta:e,player:t}=w();return n(v.div,{className:"absolute aspect-square rounded-full bg-yellow-600",style:{width:`${e.squarePercent}%`},animate:{left:`${(e.walls.left+t.x)*e.squarePercent}%`,top:`${(e.walls.top+t.y)*e.squarePercent}%`}})}function Z(){const{meta:e,board:t,boxes:l}=w(),o=(r,a)=>({BLOCK:n("div",{className:"bg-purple-900 aspect-square"},a),FREE:n("div",{className:"bg-purple-300 aspect-square"},a),BUTTON:n("div",{className:"bg-purple-300 aspect-square after:content-[''] after:bg-purple-50 after:rounded-full after:m-[25%] after:block after:w-1/2 after:h-1/2"},a)})[r],s=c.exports.useCallback(()=>{if(!e.size)return null;let r=0;return[...Array(e.walls.top*(e.size+2)).fill("").map(()=>o("BLOCK",String(r++))),...t.board.map(a=>[...Array(e.walls.left).fill("").map(()=>o("BLOCK",String(r++))),...a.map(d=>o(d,String(r++))),...Array(e.walls.right).fill("").map(()=>o("BLOCK",String(r++)))]).flat(),...Array(e.walls.bottom*(e.size+2)).fill("").map(()=>o("BLOCK",String(r++)))]},[e]);return K("div",{role:"grid",className:"grid w-full flex-grow-0 aspect-square rounded-xl border-4 border-violet-600 max-w-full max-h-full relative overflow-hidden",style:{gridTemplateColumns:`repeat(${(e.size||0)+2}, 1fr)`},children:[s(),n(Q,{}),Object.entries(l).map(([r,a])=>n(J,{...a},r))]})}function _(){return n(V,{board:{board:[["BLOCK","FREE","FREE","BLOCK","BLOCK","BLOCK","FREE","FREE"],["FREE","FREE","FREE","FREE","FREE","FREE","FREE","FREE"],["FREE","FREE","FREE","FREE","FREE","BLOCK","FREE","FREE"],["BLOCK","FREE","FREE","BLOCK","BLOCK","BLOCK","FREE","FREE"],["BLOCK","FREE","FREE","BLOCK","BUTTON","BUTTON","FREE","FREE"],["BLOCK","FREE","BLOCK","BLOCK","BUTTON","BLOCK","FREE","BLOCK"],["FREE","FREE","FREE","FREE","FREE","FREE","BLOCK","BLOCK"],["FREE","FREE","FREE","FREE","FREE","BLOCK","BLOCK","BLOCK"]],player:{x:2,y:2},boxes:[{x:3,y:2},{x:2,y:3},{x:1,y:1}]},children:K(W,{children:[n(Z,{}),n("div",{className:"flex-grow"}),n(Y,{})]})})}function te(){return n(_,{})}export{te as default};