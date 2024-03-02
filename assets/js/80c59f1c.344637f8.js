"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[198],{7810:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(4848),c=n(8453);const i={},r="View Context",o={id:"Developers/Contexts/view-context",title:"View Context",description:"Allows navigation within the app and current active page. Viewmode just defines which page is currently active:",source:"@site/docs/Developers/Contexts/view-context.md",sourceDirName:"Developers/Contexts",slug:"/Developers/Contexts/view-context",permalink:"/characterstudio-docs/docs/Developers/Contexts/view-context",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Developers/Contexts/view-context.md",tags:[],version:"current",lastUpdatedBy:"memelotsqui",lastUpdatedAt:1709261688,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scene Context",permalink:"/characterstudio-docs/docs/Developers/Contexts/scene-context"},next:{title:"Sound Context",permalink:"/characterstudio-docs/docs/Developers/Contexts/sound-context"}},a={},d=[];function l(e){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"view-context",children:"View Context"}),"\n",(0,t.jsx)(s.p,{children:"Allows navigation within the app and current active page. Viewmode just defines which page is currently active:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/landing",children:"Landing"}),": Iinitial Landing page with menu selection."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/create",children:"Create"}),": Character selection page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/claim",children:"Claim"}),": Type of batch downlaod selection page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/load",children:"Load"}),": Load created character selection page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/appearance",children:"Appearance"}),": Character dress up and customization page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/batch-download",children:"Batch Download"}),": Page to download with NFT json traits."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/batch-manifest",children:"Batch Manifest"}),": Page to download with manifest."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/bio",children:"Bio"}),": Character Bio description page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/view",children:"Chat"}),": Chat with created character page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/optimizer",children:"Optimizer"}),": Optimize existing VRM page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/characterstudio-docs/docs/Developers/Pages/wallet",children:"Wallet"}),": Menu after connecting wallet Page."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Functions"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"setViewMode"}),": set the current view mode, access it with variable ",(0,t.jsx)(s.code,{children:"viewMode"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"setIsLoading"}),": toggle loading validation, access it with variable  ",(0,t.jsx)(s.code,{children:"isLoading"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"setMouseIsOverUI"}),": function to know if the user has the mouse inside ui, access it with variable  ",(0,t.jsx)(s.code,{children:"mouseIsOverUI"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"setCurrentCameraMode"}),": (wip) set camera type (",(0,t.jsx)(s.code,{children:"Normal"}),", ",(0,t.jsx)(s.code,{children:"AR"}),", ",(0,t.jsx)(s.code,{children:"AR_Front"}),", ",(0,t.jsx)(s.code,{children:"VR"}),"), access it with variable  ",(0,t.jsx)(s.code,{children:"currentCameraMode"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(6540);const c={},i=t.createContext(c);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);