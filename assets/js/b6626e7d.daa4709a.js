"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[7229],{4516:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=r(4848),s=r(8453);const a={},o="LookAt Manager",i={id:"Developers/Managers/look-at-manager",title:"LookAt Manager",description:"LookAtManager is a class that manages the orientation of joints or bones in a Three.js scene, typically used for eyes and neck of a character, following the mouse movement within a defined hotzone.",source:"@site/docs/Developers/Managers/look-at-manager.md",sourceDirName:"Developers/Managers",slug:"/Developers/Managers/look-at-manager",permalink:"/characterstudio-docs/docs/Developers/Managers/look-at-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Developers/Managers/look-at-manager.md",tags:[],version:"current",lastUpdatedBy:"memelotsqui",lastUpdatedAt:1709269546,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Animation Manager",permalink:"/characterstudio-docs/docs/Developers/Managers/animation-manager"},next:{title:"Blink Manager",permalink:"/characterstudio-docs/docs/Developers/Managers/blink-manager"}},c={},d=[{value:"Constructor",id:"constructor",level:2},{value:"LookAtManager(screenViewPercentage, canvasID, camera)",id:"lookatmanagerscreenviewpercentage-canvasid-camera",level:3},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>setActive(active)</code>",id:"setactiveactive",level:3},{value:"<code>setCamera(camera)</code>",id:"setcameracamera",level:3},{value:"<code>addVRM(vrm)</code>",id:"addvrmvrm",level:3},{value:"<code>removeVRM(vrm)</code>",id:"removevrmvrm",level:3},{value:"<code>lerp(a, b, t)</code>",id:"lerpa-b-t",level:3},{value:"<code>update()</code>",id:"update",level:3},{value:"<code>getHotzoneSection()</code>",id:"gethotzonesection",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lookat-manager",children:"LookAt Manager"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"LookAtManager"})," is a class that manages the orientation of joints or bones in a Three.js scene, typically used for eyes and neck of a character, following the mouse movement within a defined hotzone."]}),"\n",(0,t.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,t.jsx)(n.h3,{id:"lookatmanagerscreenviewpercentage-canvasid-camera",children:"LookAtManager(screenViewPercentage, canvasID, camera)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"screenViewPercentage"}),": Percentage of the screen width to consider for the hotzone."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"canvasID"}),": The ID of the canvas element."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"camera"}),": The Three.js camera."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.p,{children:["Properties for ",(0,t.jsx)(n.code,{children:"ScreenshotManager"})," are not meant to be edited directly they are modified with methods."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".bonesInfo: Array"})}),"\n",(0,t.jsx)(n.p,{children:"An array containing information about the bones being managed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".curMousePos: Vector2"})}),"\n",(0,t.jsx)(n.p,{children:"Current mouse position."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".hotzoneSection: Object"})}),"\n",(0,t.jsx)(n.p,{children:"Object defining the hotzone section on the screen."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".enabled: Boolean"})}),"\n",(0,t.jsx)(n.p,{children:"Flag indicating whether the look-at feature is enabled."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".userActivated: Boolean"})}),"\n",(0,t.jsx)(n.p,{children:"Flag indicating whether the user has activated the look-at feature."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".lookInterest: Number"})}),"\n",(0,t.jsx)(n.p,{children:"The level of interest in looking at the target."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".hasInterest: Boolean"})}),"\n",(0,t.jsx)(n.p,{children:"Flag indicating whether there is an interest in looking at the target."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".interestSpeed: Number"})}),"\n",(0,t.jsx)(n.p,{children:"Speed of the interest adjustment."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".onCanvas: Boolean"})}),"\n",(0,t.jsx)(n.p,{children:"Flag indicating whether the mouse is on the canvas."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".camera: Camera"})}),"\n",(0,t.jsx)(n.p,{children:"The Three.js camera."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".maxLookPercent: Object"})}),"\n",(0,t.jsx)(n.p,{children:"Maximum percentage limits for different bones' look."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".windowEventListeners: Array"})}),"\n",(0,t.jsx)(n.p,{children:"Array to store references to window event listeners."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"setactiveactive",children:(0,t.jsx)(n.code,{children:"setActive(active)"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the activation state of the look-at feature."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"active"}),": Boolean value to set the activation state."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"setcameracamera",children:(0,t.jsx)(n.code,{children:"setCamera(camera)"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the camera for the look-at manager."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"camera"}),": The new Three.js camera."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"addvrmvrm",children:(0,t.jsx)(n.code,{children:"addVRM(vrm)"})}),"\n",(0,t.jsx)(n.p,{children:"Adds a VRM (Virtual Reality Model) to the look-at manager."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vrm"}),": The VRM instance to be added."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"removevrmvrm",children:(0,t.jsx)(n.code,{children:"removeVRM(vrm)"})}),"\n",(0,t.jsx)(n.p,{children:"Removes a VRM from the look-at manager."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vrm"}),": The VRM instance to be removed."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"lerpa-b-t",children:(0,t.jsx)(n.code,{children:"lerp(a, b, t)"})}),"\n",(0,t.jsx)(n.p,{children:"Performs linear interpolation between two values."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"a"}),": Initial value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"b"}),": Target value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"t"}),": Interpolation factor."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"update",children:(0,t.jsx)(n.code,{children:"update()"})}),"\n",(0,t.jsx)(n.p,{children:"Updates the look-at manager based on mouse movement and other settings. It adjusts the orientation of bones within the hotzone."}),"\n",(0,t.jsx)(n.h3,{id:"gethotzonesection",children:(0,t.jsx)(n.code,{children:"getHotzoneSection()"})}),"\n",(0,t.jsx)(n.p,{children:"Calculates and returns the hotzone section based on the screen width percentage."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);