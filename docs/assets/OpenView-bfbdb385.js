import{_ as f,d as g,r as o,c as N,b as a,e,w as t,F as b,C as x,f as y,g as E,h as O,N as T,i as v,u as I,k as R,l as h,o as k,n as C,m as c}from"./index-afb106da.js";import{N as M}from"./Image-df786572.js";import"./use-locale-9d0613ed.js";const S=g({components:{NLayoutFooter:x,NGrid:y,NGi:E,NCard:O,NImage:M,NButton:T,NText:v},setup(){const s=I(),i=R(),r=h();return{isMobile:s,isTablet:i,isSmallDesktop:r}}}),w={class:"main-content"},B=a("h1",null,"OPEN",-1),$=a("p",null,"THE ENIGMATIC BOX OPENING",-1),A=a("p",null,"CEREMONY WILL UNLOCK SOON...",-1),F={class:"footer-center"};function L(s,i,r,V,D,G){const l=o("n-card"),_=o("n-image"),n=o("n-gi"),p=o("n-text"),d=o("n-grid"),u=o("n-button"),m=o("n-layout-footer");return k(),N(b,null,[a("div",w,[e(l,{class:"content-card"},{default:t(()=>[e(d,{class:"grid-center","x-gap":0,"y-gap":12,cols:"8 xs:3 s:3 m:8 l:8",responsive:"screen",style:{"align-items":"center"}},{default:t(()=>[e(n,{span:"3 m:0"},{default:t(()=>[e(l,{style:{"text-align":"center"}},{default:t(()=>[B]),_:1}),e(l,{style:{"text-align":"center"}},{cover:t(()=>[e(_,{src:"/assets/img/open-enigmatic-box.png","preview-disabled":"",alt:"Enigmatic Box"})]),_:1})]),_:1}),e(n,{span:"3"},{default:t(()=>[e(l,null,{default:t(()=>[$,A]),_:1})]),_:1}),e(n,{span:"0 m:2"},{default:t(()=>[e(l,{style:{"text-align":"center"}},{cover:t(()=>[e(_,{src:"/assets/img/open-enigmatic-box.png","preview-disabled":"",alt:"Enigmatic Box"})]),_:1})]),_:1}),e(n,{span:"3"},{default:t(()=>[e(l,{style:C(s.isMobile||s.isTablet?"":"text-align:right")},{default:t(()=>[a("p",null,[e(p,{strong:""},{default:t(()=>[c("THIS IS THE POINT OF")]),_:1})]),a("p",null,[e(p,{strong:""},{default:t(()=>[c("NO RETURN. ARE YOU SURE?")]),_:1})])]),_:1},8,["style"])]),_:1})]),_:1})]),_:1})]),e(m,{class:"footer footer--centered"},{default:t(()=>[a("div",F,[e(d,{"x-gap":24,"y-gap":12,cols:"3 xs:1 s:1 m:3 l:3",responsive:"screen"},{default:t(()=>[e(n,{style:{"text-align":"left"}},{default:t(()=>[e(u,{block:!!(s.isMobile||s.isTablet),type:"warning",onClick:i[0]||(i[0]=U=>s.$router.push("/home/faq"))},{default:t(()=>[c("READ FAQs TO LEARN MORE")]),_:1},8,["block"])]),_:1}),e(n),e(n)]),_:1})])]),_:1})],64)}const q=f(S,[["render",L]]);export{q as default};