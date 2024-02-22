"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[4319],{7577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(4848),o=t(8453);const s={},r="Appearance",i={id:"Developers/Pages/appearance",title:"Appearance",description:"The Appearance component is a part of a larger React application. It's responsible for handling the appearance settings of a character in a 3D modeling or animation application. This component provides a user interface for loading and manipulating 3D models, animations, and textures.",source:"@site/docs/Developers/Pages/appearance.md",sourceDirName:"Developers/Pages",slug:"/Developers/Pages/appearance",permalink:"/characterstudio-docs/docs/Developers/Pages/appearance",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Developers/Pages/appearance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Useful Scripts",permalink:"/characterstudio-docs/docs/Modders/manifest-files/generate-manifest-files"},next:{title:"Bio",permalink:"/characterstudio-docs/docs/Developers/Pages/bio"}},c={},d=[];function p(e){const n={code:"code",h1:"h1",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"appearance",children:"Appearance"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Appearance"})," component is a part of a larger React application. It's responsible for handling the appearance settings of a character in a 3D modeling or animation application. This component provides a user interface for loading and manipulating 3D models, animations, and textures."]}),"\n",(0,a.jsx)(n.p,{children:"In layman's terms, this component is like a control panel for a character in a video game or animation. It allows you to load different character models, animations, and textures, and provides buttons to perform various actions like moving to the next step, going back, randomizing the character's appearance, and entering debug mode."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Import Statements"})}),"\n",(0,a.jsxs)(n.p,{children:["The component begins with a series of import statements, which bring in various dependencies and other components that are used within the ",(0,a.jsx)(n.code,{children:"Appearance"})," component.\nFunction Definition"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Appearance"})," function is the main component function. It takes several props, which are parameters passed from a parent component. These props include various managers (",(0,a.jsx)(n.code,{children:"animationManager"}),", ",(0,a.jsx)(n.code,{children:"blinkManager"}),", ",(0,a.jsx)(n.code,{children:"lookatManager"}),", ",(0,a.jsx)(n.code,{children:"effectManager"}),") and a ",(0,a.jsx)(n.code,{children:"confirmDialog"})," function."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Contexts"})}),"\n",(0,a.jsx)(n.p,{children:"The component uses several React Contexts, which are a way of passing data through the component tree without having to pass props down manually at every level. These contexts provide various pieces of data and functions that are used throughout the component.\nState Variables"}),"\n",(0,a.jsxs)(n.p,{children:["The component defines several state variables using the ",(0,a.jsx)(n.code,{children:"useState"})," hook. These variables store the current state of the component and provide functions to update that state.\nEvent Listeners"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"useEffect"})," hook is used to add and remove event listeners to the ",(0,a.jsx)(n.code,{children:"effectManager"}),". These listeners trigger a function when certain events occur.\nTranslation Hook"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"useContext(LanguageContext)"})," hook is used to provide a translation function ",(0,a.jsx)(n.code,{children:"t"})," that can be used to display text in different languages.\nFile Handling Functions"]}),"\n",(0,a.jsxs)(n.p,{children:["There are several functions (",(0,a.jsx)(n.code,{children:"handleAnimationDrop"}),", ",(0,a.jsx)(n.code,{children:"handleImageDrop"}),", ",(0,a.jsx)(n.code,{children:"handleVRMDrop"}),", ",(0,a.jsx)(n.code,{children:"handleFilesDrop"}),") that handle different types of files when they are dropped onto the component. These functions read the files, create URLs for them, and update the state variables accordingly.\nRender"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"return"})," statement defines the JSX that will be rendered by the component. This includes a loading indicator, a title, a file drop component, an editor component, and several buttons. The buttons have various functions attached to their ",(0,a.jsx)(n.code,{children:"onClick"})," events, which trigger when the buttons are clicked."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6540);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);