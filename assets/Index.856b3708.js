import{u as D,r as m,R as O,a as U,b as C,j as s,c as A,M as z,d as _,e as H,f as J,g as j,h as F,i as W,k as X}from"./index.4d60ac66.js";import{s as Y,a as Q,b as Z,m as I,p as V}from"./pageAnimation.d0174b45.js";function ee(){let e=!1;const t=[],l=new Set,r={subscribe(a){return l.add(a),()=>void l.delete(a)},start(a,o){if(e){const n=[];return l.forEach(c=>{n.push(Z(c,a,{transitionOverride:o}))}),Promise.all(n)}else return new Promise(n=>{t.push({animation:[a,o],resolve:n})})},set(a){return l.forEach(o=>{Y(o,a)})},stop(){l.forEach(a=>{Q(a)})},mount(){return e=!0,t.forEach(({animation:a,resolve:o})=>{r.start(...a).then(o)}),()=>{e=!1,r.stop()}}};return r}function te(){const e=D(ee);return m.exports.useEffect(e.mount,[]),e}const R=O({key:"gameName",default:globalThis.localStorage.getItem("gameName")||""}),E=O({key:"gamePlayer",default:JSON.parse(globalThis.localStorage.getItem("gamePlayer")||"false")||{x:0,y:0}}),K=O({key:"gameBoxes",default:JSON.parse(globalThis.localStorage.getItem("gameBoxes")||"false")||{}}),L=O({key:"gameUndos",default:JSON.parse(globalThis.localStorage.getItem("gameUndos")||"false")||[]}),oe=U({key:"currentGameName",get:({get:e})=>e(R),set:({set:e},t)=>{e(R,t),globalThis.localStorage.setItem("gameName",t.toString())}}),re=U({key:"currentGamePlayer",get:({get:e})=>e(E),set:({set:e},t)=>{e(E,t),globalThis.localStorage.setItem("gamePlayer",JSON.stringify(t))}}),ae=U({key:"currentGameBoxes",get:({get:e})=>e(K),set:({set:e},t)=>{e(K,t),globalThis.localStorage.setItem("gameBoxes",JSON.stringify(t))}}),se=U({key:"currentGameUndos",get:({get:e})=>e(L),set:({set:e},t)=>{e(L,t),globalThis.localStorage.setItem("gameUndos",JSON.stringify(t))}}),$={board:{name:"",board:[],boxes:[],player:{x:0,y:0}},player:{x:0,y:0},boxes:{},meta:{size:0,walls:{top:0,bottom:0,left:0,right:0},squarePercent:0},undoStack:[],setPlayer:()=>{},setBoxes:()=>{},setMeta:()=>{},setUndoStack:()=>{}},G=m.exports.createContext({...$}),ne=({children:e,board:t})=>{const[l,r]=m.exports.useState(!1),[a,o]=C(oe),[n,c]=C(re),[x,g]=C(ae),[h,u]=C(se),[i,d]=m.exports.useState($.meta);return m.exports.useEffect(()=>{var w;const f=Math.max(t.board.length,(w=t.board[0])==null?void 0:w.length),y=(f-t.board.length)/2,b=(f-t.board[0].length)/2,p={top:1+Math.floor(y),bottom:1+Math.ceil(y),left:1+Math.floor(b),right:1+Math.ceil(b)};return d({size:f,squarePercent:100/(f+2),walls:p}),t.name!==a&&(o(t.name),c({...t.player}),g(t.boxes.reduce((k,N,B)=>{var S;return{...k,[B]:{...N,inButton:((S=t.board[N.y])==null?void 0:S[N.x])==="BUTTON"}}},{})),u([])),r(!0),()=>{r(!1)}},[t]),s(G.Provider,{value:{board:t,player:n,boxes:x,meta:i,undoStack:h,setPlayer:c,setBoxes:g,setMeta:d,setUndoStack:u},children:l&&e})},le=()=>{const{board:e,boxes:t,meta:l,player:r,undoStack:a,setPlayer:o,setBoxes:n,setUndoStack:c}=m.exports.useContext(G);return{board:e,boxes:t,meta:l,player:r,movePlayer:u=>{var B,S;const i={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}}[u],d={x:r.x+i.x,y:r.y+i.y},f={x:d.x+i.x,y:d.y+i.y},y=(B=e.board[d.y])==null?void 0:B[d.x],b=(S=e.board[f.y])==null?void 0:S[f.x];let p,w;Object.entries(t).forEach(([q,P])=>{if(P.x===d.x&&P.y===d.y){p=parseInt(q);return}P.x===f.x&&P.y===f.y&&(w=parseInt(q))});const k=Boolean(y)&&y!=="BLOCK",N=Boolean(b)&&b!=="BLOCK";if(p===void 0&&k){c([...a,{player:{...r}}]),o(d);return}p!==void 0&&w===void 0&&k&&N&&(c([...a,{player:{...r},box:[p,t[p]]}]),o(d),n({...t,[p]:{...f,inButton:b==="BUTTON"}}))},undo:()=>{const u=a.at(-1);if(u&&(c(a.slice(0,-1)),o(u.player),u.box)){const[i,d]=u.box;n({...t,[i]:{...d}})}},reset:()=>{o({...e.player}),n(e.boxes.reduce((u,i,d)=>{var f;return{...u,[d]:{...i,inButton:((f=e.board[i.y])==null?void 0:f[i.x])==="BUTTON"}}},{})),c([])}}},T=le;function ce({children:e}){const t=m.exports.useRef(null),{movePlayer:l,undo:r}=T(),a=o=>{if(o.preventDefault(),o.ctrlKey&&o.key==="z")r();else{const n={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"}[o.key];n&&l(n)}};return m.exports.useEffect(()=>{t.current&&t.current.focus()},[t]),s("div",{tabIndex:0,className:"h-full p-5 flex flex-col",ref:t,onKeyDown:a,children:e})}function M(){return"ontouchstart"in globalThis||navigator.maxTouchPoints>0}function ie({onHoldEnded:e,holdTime:t=2e3,children:l,className:r=""}){const a=te(),o=g=>{M()||(g.preventDefault(),g.button===0&&c())},n=g=>{!M()||(g.stopPropagation(),c())},c=async()=>{try{console.log("hola"),await a.start({width:"100%",transition:{duration:t/1e3}}),e(),a.start({opacity:0})}catch(g){console.log(g)}console.log("adios")},x=()=>{a.stop(),a.set({width:"0%",opacity:1})};return A("button",{className:`relative overflow-hidden grid rounded-md text-xl place-content-center bg-green-500 hover:bg-green-700 transition text-white ${r}`,onMouseDown:o,onTouchStart:n,onMouseUp:x,onMouseLeave:x,onTouchEnd:x,children:[s(I.span,{className:"absolute h-full bg-blue-500",initial:{width:"0%"},animate:a}),s("span",{className:"z-10",children:l})]})}function v({children:e,onTick:t,interval:l=100,className:r="",tickTimeout:a=500}){const o=m.exports.useRef(),n=m.exports.useRef(),c=m.exports.useRef(t);m.exports.useEffect(()=>{c.current=t},[t]);const x=i=>{M()||(i.preventDefault(),i.button===0&&o.current==null&&h())},g=i=>{!M()||o.current==null&&h()},h=()=>{c.current(),n.current=Number(setTimeout(()=>{o.current=Number(setInterval(()=>{c.current()},l))},a))},u=()=>{n.current&&(clearTimeout(n.current),n.current=void 0),o.current&&(clearInterval(o.current),o.current=void 0)};return s("button",{className:`grid rounded-md text-xl place-content-center bg-green-500 hover:bg-green-700 transition text-white ${r}`,onMouseDown:x,onTouchStart:g,onMouseLeave:u,onMouseUp:u,onTouchEnd:u,children:e})}function ue(){const{movePlayer:e,undo:t,reset:l}=T();m.exports.useRef();const r=a=>()=>{e(a)};return A("div",{className:"flex-grow grid max-h-[250px] grid-cols-3 grid-rows-2 gap-2 p-2 pb-14",children:[s(v,{onTick:t,className:"row-start-1 col-start-1",children:s(z,{})}),s(v,{onTick:r("up"),className:"row-start-1 col-start-2",children:s(_,{})}),s(ie,{onHoldEnded:l,className:"row-start-1 col-start-3",children:s(H,{})}),s(v,{onTick:r("left"),className:"row-start-2 col-start-1",children:s(J,{})}),s(v,{onTick:r("down"),className:"row-start-2 col-start-2",children:s(j,{})}),s(v,{onTick:r("right"),className:"row-start-2 col-start-3",children:s(F,{})})]})}function de({x:e,y:t,inButton:l}){const{meta:r}=T();return s(I.div,{className:`absolute aspect-square rounded-md transition ${l?"bg-blue-700":"bg-orange-700"}`,style:{width:`${r.squarePercent}%`},animate:{left:`${(r.walls.left+e)*r.squarePercent}%`,top:`${(r.walls.top+t)*r.squarePercent}%`},children:s("div",{className:`w-1/2 transition ${l?"bg-blue-500":"bg-orange-500"} aspect-square m-[25%]`})})}function me(){const{meta:e,player:t}=T();return s(I.div,{className:"absolute aspect-square rounded-full bg-yellow-600",style:{width:`${e.squarePercent}%`},animate:{left:`${(e.walls.left+t.x)*e.squarePercent}%`,top:`${(e.walls.top+t.y)*e.squarePercent}%`}})}function fe(){const{meta:e,board:t,boxes:l}=T(),r=(o,n)=>({BLOCK:s("div",{className:"bg-purple-900 aspect-square"},n),FREE:s("div",{className:"bg-purple-300 aspect-square"},n),BUTTON:s("div",{className:"bg-purple-300 aspect-square after:content-[''] after:bg-purple-50 after:rounded-full after:m-[25%] after:block after:w-1/2 after:h-1/2"},n)})[o],a=m.exports.useCallback(()=>{if(!e.size)return null;let o=0;return[...Array(e.walls.top*(e.size+2)).fill("").map(()=>r("BLOCK",String(o++))),...t.board.map(n=>[...Array(e.walls.left).fill("").map(()=>r("BLOCK",String(o++))),...n.map(c=>r(c,String(o++))),...Array(e.walls.right).fill("").map(()=>r("BLOCK",String(o++)))]).flat(),...Array(e.walls.bottom*(e.size+2)).fill("").map(()=>r("BLOCK",String(o++)))]},[e]);return A("div",{role:"grid",className:"grid w-full flex-grow-0 aspect-square rounded-xl border-4 border-violet-600 max-w-full max-h-full relative overflow-hidden",style:{gridTemplateColumns:`repeat(${(e.size||0)+2}, 1fr)`},children:[a(),s(me,{}),Object.entries(l).map(([o,n])=>s(de,{...n},o))]})}function ge({board:e}){return s(ne,{board:e,children:A(ce,{children:[s(fe,{}),s("div",{className:"flex-grow"}),s(ue,{})]})})}function be(){const e=W(X);return s(I.div,{...V,className:"h-full",children:e?s(ge,{board:e}):"Loading..."},"index")}export{be as default};
