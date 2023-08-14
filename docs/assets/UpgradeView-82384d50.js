import{d as B,G as d,K as M,O as h,a5 as I,M as g,P as H,Q as O,ac as K,z as v,aj as P,al as Y,a0 as Q,ap as J,p as R,V as q,S as D,a3 as W,aq as ee,ar as ne,ae as $,a7 as te,as as oe,at as se,au as j,av as ae,A as ie,W as re,aw as le,ax as Z,$ as ce,ay as de,az as ue,aA as me,aB as fe,a9 as pe,_ as ge,r as w,c as V,b as C,D as N,w as o,F,C as be,f as he,g as ve,h as ye,N as xe,j as Ce,i as _e,u as we,k as Se,l as ze,s as $e,o as k,e as a,n as ke,m as z,aC as Ee,t as G}from"./index-0dc2d56e.js";import{u as Re}from"./use-locale-b4d62d49.js";import{N as Ne}from"./Image-4fb74ae2.js";import{N as Be}from"./Space-8a03c937.js";function Le(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const Te=B({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Oe={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Ae=e=>{const{textColorDisabled:s,iconColor:n,textColor2:u,fontSizeSmall:l,fontSizeMedium:t,fontSizeLarge:r,fontSizeHuge:f}=e;return Object.assign(Object.assign({},Oe),{fontSizeSmall:l,fontSizeMedium:t,fontSizeLarge:r,fontSizeHuge:f,textColor:s,iconColor:n,extraTextColor:u})},Ie={name:"Empty",common:M,self:Ae},Pe=Ie,Ve=h("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[I("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[g("+",[I("description",`
 margin-top: 8px;
 `)])]),I("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),I("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),De=Object.assign(Object.assign({},O.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Me=B({name:"Empty",props:De,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=H(e),u=O("Empty","-empty",Ve,Pe,e,s),{localeRef:l}=Re("Empty"),t=K(J,null),r=v(()=>{var i,c,b;return(i=e.description)!==null&&i!==void 0?i:(b=(c=t==null?void 0:t.mergedComponentPropsRef.value)===null||c===void 0?void 0:c.Empty)===null||b===void 0?void 0:b.description}),f=v(()=>{var i,c;return((c=(i=t==null?void 0:t.mergedComponentPropsRef.value)===null||i===void 0?void 0:i.Empty)===null||c===void 0?void 0:c.renderIcon)||(()=>d(Te,null))}),m=v(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:c},self:{[P("iconSize",i)]:b,[P("fontSize",i)]:A,textColor:_,iconColor:y,extraTextColor:x}}=u.value;return{"--n-icon-size":b,"--n-font-size":A,"--n-bezier":c,"--n-text-color":_,"--n-icon-color":y,"--n-extra-text-color":x}}),p=n?Y("empty",v(()=>{let i="";const{size:c}=e;return i+=c[0],i}),m,e):void 0;return{mergedClsPrefix:s,mergedRenderIcon:f,localizedDescription:v(()=>r.value||l.value.description),cssVars:n?void 0:m,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{$slots:e,mergedClsPrefix:s,onRender:n}=this;return n==null||n(),d("div",{class:[`${s}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${s}-empty__icon`},e.icon?e.icon():d(Q,{clsPrefix:s},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${s}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${s}-empty__extra`},e.extra()):null)}}),X=B({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const s=R(null),n=R(e.value),u=R(e.value),l=R("up"),t=R(!1),r=v(()=>t.value?`${e.clsPrefix}-base-slot-machine-current-number--${l.value}-scroll`:null),f=v(()=>t.value?`${e.clsPrefix}-base-slot-machine-old-number--${l.value}-scroll`:null);q(D(e,"value"),(i,c)=>{n.value=c,u.value=i,W(m)});function m(){const i=e.newOriginalNumber,c=e.oldOriginalNumber;c===void 0||i===void 0||(i>c?p("up"):c>i&&p("down"))}function p(i){l.value=i,t.value=!1,W(()=>{var c;(c=s.value)===null||c===void 0||c.offsetWidth,t.value=!0})}return()=>{const{clsPrefix:i}=e;return d("span",{ref:s,class:`${i}-base-slot-machine-number`},n.value!==null?d("span",{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--top`,f.value]},n.value):null,d("span",{class:[`${i}-base-slot-machine-current-number`,r.value]},d("span",{ref:"numberWrapper",class:[`${i}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${i}-base-slot-machine-current-number__inner--not-number`]},u.value)),n.value!==null?d("span",{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--bottom`,f.value]},n.value):null)}}}),{cubicBezierEaseOut:T}=ee;function He({duration:e=".2s"}={}){return[g("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${T},
 max-width ${e} ${T},
 transform ${e} ${T}
 `}),g("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${T},
 max-width ${e} ${T},
 transform ${e} ${T}
 `}),g("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),g("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),g("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),g("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Ye=g([g("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),g("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),g("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),g("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),h("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[h("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[He({duration:".2s"}),ne({duration:".2s",delay:"0s"}),h("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[$("top",{transform:"translateY(-100%)"}),$("bottom",{transform:"translateY(100%)"}),$("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),$("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),h("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[$("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),$("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),I("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[$("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Ue=B({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){te("-base-slot-machine",Ye,D(e,"clsPrefix"));const s=R(),n=R(),u=v(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const l=[];let t=e.value;for(e.max!==void 0&&(t=Math.min(e.max,t));t>=1;)l.push(t%10),t/=10,t=Math.floor(t);return l.reverse(),l});return q(D(e,"value"),(l,t)=>{typeof l=="string"?(n.value=void 0,s.value=void 0):typeof t=="string"?(n.value=l,s.value=void 0):(n.value=l,s.value=t)}),()=>{const{value:l,clsPrefix:t}=e;return typeof l=="number"?d("span",{class:`${t}-base-slot-machine`},d(se,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>u.value.map((r,f)=>d(X,{clsPrefix:t,key:u.value.length-f-1,oldOriginalNumber:s.value,newOriginalNumber:n.value,value:r}))}),d(oe,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<l?d(X,{clsPrefix:t,value:"+"}):null})):d("span",{class:`${t}-base-slot-machine`},l)}}}),We=e=>{const{errorColor:s,infoColor:n,successColor:u,warningColor:l,fontFamily:t}=e;return{color:s,colorInfo:n,colorSuccess:u,colorError:s,colorWarning:l,fontSize:"12px",fontFamily:t}},je={name:"Badge",common:M,self:We},Fe=je,Ge=g([g("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),h("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[$("as-is",[h("badge-sup",{position:"static",transform:"translateX(0)"},[j({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),$("dot",[h("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[g("::before","border-radius: 4px;")])]),h("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[j({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),h("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),g("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Xe=Object.assign(Object.assign({},O.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),qe=B({name:"Badge",props:Xe,setup(e,{slots:s}){const{mergedClsPrefixRef:n,inlineThemeDisabled:u,mergedRtlRef:l}=H(e),t=O("Badge","-badge",Ge,Fe,e,n),r=R(!1),f=()=>{r.value=!0},m=()=>{r.value=!1},p=v(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!ae(s.value)));ie(()=>{p.value&&(r.value=!0)});const i=re("Badge",l,n),c=v(()=>{const{type:_,color:y}=e,{common:{cubicBezierEaseInOut:x,cubicBezierEaseOut:L},self:{[P("color",_)]:S,fontFamily:E,fontSize:U}}=t.value;return{"--n-font-size":U,"--n-font-family":E,"--n-color":y||S,"--n-ripple-color":y||S,"--n-bezier":x,"--n-ripple-bezier":L}}),b=u?Y("badge",v(()=>{let _="";const{type:y,color:x}=e;return y&&(_+=y[0]),x&&(_+=le(x)),_}),c,e):void 0,A=v(()=>{const{offset:_}=e;if(!_)return;const[y,x]=_,L=typeof y=="number"?`${y}px`:y,S=typeof x=="number"?`${x}px`:x;return{transform:`translate(calc(${i!=null&&i.value?"50%":"-50%"} + ${L}), ${S})`}});return{rtlEnabled:i,mergedClsPrefix:n,appeared:r,showBadge:p,handleAfterEnter:f,handleAfterLeave:m,cssVars:u?void 0:c,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender,offsetStyle:A}},render(){var e;const{mergedClsPrefix:s,onRender:n,themeClass:u,$slots:l}=this;n==null||n();const t=(e=l.default)===null||e===void 0?void 0:e.call(l);return d("div",{class:[`${s}-badge`,this.rtlEnabled&&`${s}-badge--rtl`,u,{[`${s}-badge--dot`]:this.dot,[`${s}-badge--as-is`]:!t}],style:this.cssVars},t,d(Z,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?d("sup",{class:`${s}-badge-sup`,title:Le(this.value),style:this.offsetStyle},ce(l.value,()=>[this.dot?null:d(Ue,{clsPrefix:s,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?d(de,{clsPrefix:s}):null):null}))}}),Ze=e=>{const{opacityDisabled:s,heightTiny:n,heightSmall:u,heightMedium:l,heightLarge:t,heightHuge:r,primaryColor:f,fontSize:m}=e;return{fontSize:m,textColor:f,sizeTiny:n,sizeSmall:u,sizeMedium:l,sizeLarge:t,sizeHuge:r,color:f,opacitySpinning:s}},Ke={name:"Spin",common:M,self:Ze},Qe=Ke,Je=g([g("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),h("spin-container",{position:"relative"},[h("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ue()])]),h("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),h("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[$("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),h("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),h("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[$("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),en={small:20,medium:18,large:16},nn=Object.assign(Object.assign({},O.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),tn=B({name:"Spin",props:nn,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=H(e),u=O("Spin","-spin",Je,Qe,e,s),l=v(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:f},self:m}=u.value,{opacitySpinning:p,color:i,textColor:c}=m,b=typeof r=="number"?me(r):m[P("size",r)];return{"--n-bezier":f,"--n-opacity-spinning":p,"--n-size":b,"--n-color":i,"--n-text-color":c}}),t=n?Y("spin",v(()=>{const{size:r}=e;return typeof r=="number"?String(r):r[0]}),l,e):void 0;return{mergedClsPrefix:s,compitableShow:fe(e,["spinning","show"]),mergedStrokeWidth:v(()=>{const{strokeWidth:r}=e;if(r!==void 0)return r;const{size:f}=e;return en[typeof f=="number"?"medium":f]}),cssVars:n?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,s;const{$slots:n,mergedClsPrefix:u,description:l}=this,t=n.icon&&this.rotate,r=(l||n.description)&&d("div",{class:`${u}-spin-description`},l||((e=n.description)===null||e===void 0?void 0:e.call(n))),f=n.icon?d("div",{class:[`${u}-spin-body`,this.themeClass]},d("div",{class:[`${u}-spin`,t&&`${u}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),r):d("div",{class:[`${u}-spin-body`,this.themeClass]},d(pe,{clsPrefix:u,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${u}-spin`}),r);return(s=this.onRender)===null||s===void 0||s.call(this),n.default?d("div",{class:[`${u}-spin-container`,this.themeClass],style:this.cssVars},d("div",{class:[`${u}-spin-content`,this.compitableShow&&`${u}-spin-content--spinning`]},n),d(Z,{name:"fade-in-transition"},{default:()=>this.compitableShow?f:null})):f}});const on=B({components:{NLayoutFooter:be,NGrid:he,NGi:ve,NCard:ye,NButton:xe,NImage:Ne,NBadge:qe,NIcon:Ce,NSpace:Be,NText:_e,NEmpty:Me,NSpin:tn},setup(){const e=we(),s=Se(),n=ze();return{isMobile:e,isTablet:s,isSmallDesktop:n,storeConnect:$e}}}),sn={class:"main-content",style:{"overflow-y":"auto",padding:"12px"}},an=C("h1",null,"UPGRADE",-1),rn=C("p",null,"PLEASE CONNECT WALLET",-1),ln=C("p",null,"YOU WILL NEED TWO THINGS:",-1),cn={key:1,style:{"text-align":"center"}},dn={class:"footer-center"},un={class:"footer-center"},mn=C("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},[C("g",null,[C("g",null,[C("path",{d:"M416,277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416V277.333z"})])])],-1),fn=C("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},[C("rect",{x:"96",y:"235",width:"320",height:"42"})],-1);function pn(e,s,n,u,l,t){const r=w("n-card"),f=w("n-image"),m=w("n-gi"),p=w("n-button"),i=w("n-space"),c=w("n-grid"),b=w("n-text"),A=w("n-badge"),_=w("n-spin"),y=w("n-empty"),x=w("n-layout-footer"),L=w("n-icon");return k(),V(F,null,[C("div",sn,[e.storeConnect.selectedAccount?e.storeConnect.valueUpgrades.length>0?(k(),N(r,{key:1,class:"content-card"},{default:o(()=>[a(c,{class:"grid-center","x-gap":0,"y-gap":12,cols:"8 xs:3 s:3 m:8 l:8",responsive:"screen",style:{"align-items":"center"}},{default:o(()=>[a(m,{span:"4 xs:8 m:4"},{default:o(()=>[C("p",null,[a(b,{strong:""},{default:o(()=>[z("UPGRADABLE BOXES IN YOUR WALLET")]),_:1})])]),_:1}),a(m,{span:"2 xs:0 m:2"}),a(m,{span:"2 xs:8 m:2"},{default:o(()=>[a(p,{block:"",type:"info",class:"button-info",onClick:e.storeConnect.upgradeAutoSelect,disabled:e.storeConnect.upgradeTxSending},{default:o(()=>[z("AUTO SELECT")]),_:1},8,["onClick","disabled"])]),_:1}),a(m,{span:"0 xs:8"})]),_:1}),e.storeConnect.upgradeTxSending?(k(),V("p",cn,[a(_,{size:"large"})])):(k(),N(c,{key:0,id:"image-scroll-container",class:"grid-center","x-gap":30,"y-gap":30,cols:"5 xs:2 s:3 m:4 l:5",responsive:"screen",style:{"align-items":"center"}},{default:o(()=>[(k(!0),V(F,null,Ee(e.storeConnect.rangeUpdateBoxes,(S,E)=>(k(),N(m,{key:S,style:{"text-align":"center"}},{default:o(()=>[a(r,{class:"box-select-to-upgrade",bordered:e.storeConnect.selectBordered[E],onClick:U=>e.storeConnect.selectBoxToUpgrade(S,E)},{cover:o(()=>[a(A,{value:e.storeConnect.valueUpgrades[E]},{default:o(()=>[a(f,{src:"/assets/img/upgrade-box-level"+(S+e.storeConnect.valueUpgrades[E])+".png","preview-disabled":"","intersection-observer-options":{root:"#image-scroll-container"}},null,8,["src"])]),_:2},1032,["value"])]),default:o(()=>[z(" "+G(e.storeConnect.selectBordered[E]?e.storeConnect.boxName[S+e.storeConnect.valueUpgrades[E]]:""),1)]),_:2},1032,["bordered","onClick"])]),_:2},1024))),128))]),_:1}))]),_:1})):(k(),N(r,{key:2,class:"content-card"},{default:o(()=>[a(c,{class:"grid-center","x-gap":30,"y-gap":30,cols:"1",responsive:"screen",style:{"align-items":"center","text-align":"center"}},{default:o(()=>[a(m,null,{default:o(()=>[a(y,{description:"NO UPGRADABLE BOXES IN YOUR WALLET"},{extra:o(()=>[a(p,{type:"warning",onClick:s[0]||(s[0]=S=>e.$router.push("/home/faq"))},{default:o(()=>[z("READ FAQs TO LEARN MORE")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(k(),N(r,{key:0,class:"content-card"},{default:o(()=>[a(c,{class:"grid-center","x-gap":0,"y-gap":12,cols:"8 xs:3 s:3 m:8 l:8",responsive:"screen",style:{"align-items":"center"}},{default:o(()=>[a(m,{span:"3 m:0"},{default:o(()=>[a(r,{style:{"text-align":"center"}},{default:o(()=>[an]),_:1}),a(r,{style:{"text-align":"center"}},{cover:o(()=>[a(f,{src:"/assets/img/upgrade-enigmatic-box.png","preview-disabled":"",alt:"Enigmatic Box"})]),_:1})]),_:1}),a(m,{span:"3"},{default:o(()=>[a(r,null,{default:o(()=>[rn,ln]),_:1})]),_:1}),a(m,{span:"0 m:2"},{default:o(()=>[a(r,{style:{"text-align":"center"}},{cover:o(()=>[a(f,{src:"/assets/img/upgrade-enigmatic-box.png","preview-disabled":"",alt:"Enigmatic Box"})]),_:1})]),_:1}),a(m,{span:"3"},{default:o(()=>[a(r,{style:ke(e.isMobile||e.isTablet?"":"text-align:right")},{default:o(()=>[a(i,{vertical:"",size:17},{default:o(()=>[a(p,{type:"secondary",tag:"a",href:"https://opensea.io/collection/onchainbirds",target:"_blank",style:{"--n-padding":"0 12px"}},{default:o(()=>[z("NESTED/STAKED BIRD")]),_:1}),a(p,{type:"secondary"},{default:o(()=>[z("BOX (CLAIM 1 OR LEVEL 1-4)")]),_:1})]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}))]),e.storeConnect.selectedAccount?(k(),N(x,{key:1,class:"footer footer--centered"},{default:o(()=>[C("div",un,[a(c,{"x-gap":24,"y-gap":12,cols:"3 xs:1 s:1 m:3 l:3",responsive:"screen"},{default:o(()=>[a(m,{style:{"text-align":"left"}},{default:o(()=>[a(p,{block:"",type:"secondary",class:"button-info"},{default:o(()=>[z(G(e.storeConnect.upgradesAvailable)+"x UPGRADES AVAILABLE",1)]),_:1})]),_:1}),a(m,null,{default:o(()=>[a(i,{justify:"center"},{default:o(()=>[a(p,{type:"primary",onClick:e.storeConnect.handlePlusButtonClick,disabled:e.storeConnect.upgradeTxSending},{icon:o(()=>[a(L,null,{default:o(()=>[mn]),_:1})]),default:o(()=>[z("ADD LEVEL ")]),_:1},8,["onClick","disabled"]),a(p,{type:"primary",onClick:e.storeConnect.handleMinusButtonClick,disabled:e.storeConnect.upgradeTxSending},{icon:o(()=>[a(L,null,{default:o(()=>[fn]),_:1})]),default:o(()=>[z("REMOVE LEVEL ")]),_:1},8,["onClick","disabled"])]),_:1})]),_:1}),a(m,null,{default:o(()=>[a(p,{block:"",type:"warning",onClick:e.storeConnect.upgradeSelection,disabled:e.storeConnect.upgradeTxSending},{default:o(()=>[z("UPGRADE SELECTION")]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})])]),_:1})):(k(),N(x,{key:0,class:"footer footer--centered"},{default:o(()=>[C("div",dn,[a(c,{"x-gap":24,"y-gap":12,cols:"3 xs:1 s:1 m:3 l:3",responsive:"screen"},{default:o(()=>[a(m,{style:{"text-align":"left"}},{default:o(()=>[a(p,{block:!!(e.isMobile||e.isTablet),type:"warning",onClick:s[1]||(s[1]=S=>e.$router.push("/home/faq"))},{default:o(()=>[z("READ FAQs TO LEARN MORE")]),_:1},8,["block"])]),_:1}),a(m),a(m)]),_:1})])]),_:1}))],64)}const yn=ge(on,[["render",pn]]);export{yn as default};
