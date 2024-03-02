"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[1175],{3674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var s=n(4848),o=n(8453);const l={},c="Wallet",r={id:"Developers/Pages/wallet",title:"Wallet",description:"(WIP) For the connect wallet button to appear, you need to setup an open sea api key in the .env, the variable must be called with the name VITEOPENSEAKEY. Once a key is placed, you can access this menu, in the main window. it will request you to connect your wallet.",source:"@site/docs/Developers/Pages/wallet.md",sourceDirName:"Developers/Pages",slug:"/Developers/Pages/wallet",permalink:"/characterstudio-docs/docs/Developers/Pages/wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Developers/Pages/wallet.md",tags:[],version:"current",lastUpdatedBy:"memelotsqui",lastUpdatedAt:1709103052,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Optimizer",permalink:"/characterstudio-docs/docs/Developers/Pages/optimizer"},next:{title:"SDK",permalink:"/characterstudio-docs/docs/Developers/sdk"}},a={},i=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"wallet",children:"Wallet"}),"\n",(0,s.jsxs)(t.p,{children:["(WIP) For the connect wallet button to appear, you need to setup an ",(0,s.jsx)(t.code,{children:"open sea"})," api key in the ",(0,s.jsx)(t.code,{children:".env"}),", the variable must be called with the name ",(0,s.jsx)(t.code,{children:"VITE_OPENSEA_KEY"}),". Once a key is placed, you can access this menu, in the main window. it will request you to connect your wallet."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Summary"})}),"\n",(0,s.jsx)(t.p,{children:"Wallet component allows you to load nft data from owned nft assets from the connected wallet, or can be used to know if a user has an nft from a collection to unlock more options."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Logic"})}),"\n",(0,s.jsx)(t.p,{children:"This component allows the user to fecth nft data from the user wallet, if the user possess an nft from a collection we may display additional options or to load the specific character given the nft traits in his collection."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Wallet access"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"fetchWalletNFTS"}),": Called when user enters this page, it grabs all the nft's from a give collection from the user."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"selectClass"}),": If user possess 1 or more nft's from the collection, the user may select which one to display."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"appendManifest"})," User may combine 2 or more owned nfts into a single manifest with this function."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Utils functions"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"back"}),": Go back to menu selection page."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var s=n(6540);const o={},l=s.createContext(o);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);