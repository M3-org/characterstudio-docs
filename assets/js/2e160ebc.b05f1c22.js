"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[6421],{1876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(4848),r=t(8453);const i={},o="Optimizer",a={id:"Developers/Pages/optimizer",title:"Optimizer",description:"You can access this page by going to Optimize Character menu button.",source:"@site/docs/Developers/Pages/optimizer.md",sourceDirName:"Developers/Pages",slug:"/Developers/Pages/optimizer",permalink:"/characterstudio-docs/docs/Developers/Pages/optimizer",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Developers/Pages/optimizer.md",tags:[],version:"current",lastUpdatedBy:"memelotsqui",lastUpdatedAt:1709352314,formattedLastUpdatedAt:"Mar 2, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Batch Manifest",permalink:"/characterstudio-docs/docs/Developers/Pages/batch-manifest"},next:{title:"Wallet",permalink:"/characterstudio-docs/docs/Developers/Pages/wallet"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"optimizer",children:"Optimizer"}),"\n",(0,s.jsxs)(n.p,{children:["You can access this page by going to ",(0,s.jsx)(n.code,{children:"Optimize Character"})," menu button."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Summary"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Optimizer"})," page, allows you to drag and drop an existing vrm file and add optimzation options, such as reducing meshes, manual face culling, reducing material count, and reducing file size by applying sparse accessors to expression shapes."]}),"\n",(0,s.jsx)(n.p,{children:"It uses the drag and drop component to allow the user to drop any vrm file model or animation file into the window."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Logic"})}),"\n",(0,s.jsxs)(n.p,{children:["For this component we want the user to be able to drag and drop a file with ",(0,s.jsx)(n.code,{children:"FileDropComponent"})," and detect wether the user dropped an nft json file (.json), animation file (.fbx) or .vrm file to start the optimization process."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pre-process Functions:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"handleFilesDrop"}),": Function to detect wether the user dropped a manifest, animation, or vrm file(s)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"handleVRMDrop"}),": User dropped a VRM file, load the vrm file into the current view. (if multiple files are added, only the first one will be used)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"handleAnimationDrop"}),": User dropped an animation file, load the animation into the current displayed character, if no vrm or manifest has been added, this will have no effect. (if multiple files are added, only the first one will be used)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Process Functions:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"download"}),": Start optimization and download process for current loaded character."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Util Functions:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"back"}),": Go to the previous menu"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);