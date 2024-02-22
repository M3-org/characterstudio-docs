"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[6810],{5982:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=s(4848),r=s(8453);const n={sidebar_position:1},a="Overview",o={id:"Modders/manifest-files/overview",title:"Overview",description:"The manifest files are essential if you want to mod Character Studio with your own assets and selection screens. They are found in various parts of the project, and basically are the main file other than art assets that you would need to modify to make an avatar builder program.",source:"@site/docs/Modders/manifest-files/overview.md",sourceDirName:"Modders/manifest-files",slug:"/Modders/manifest-files/overview",permalink:"/characterstudio-docs/docs/Modders/manifest-files/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Modders/manifest-files/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Change animations",permalink:"/characterstudio-docs/docs/Modders/change-animations"},next:{title:"Character Select",permalink:"/characterstudio-docs/docs/Modders/manifest-files/character-select"}},l={},c=[{value:"Character Selection",id:"character-selection",level:2},{value:"Manifest Files for Traits",id:"manifest-files-for-traits",level:2},{value:"Manifest Files for LoRAs",id:"manifest-files-for-loras",level:2},{value:"Personality.json",id:"personalityjson",level:2},{value:"Generating Manifest Files",id:"generating-manifest-files",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",...(0,r.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The manifest files are essential if you want to mod Character Studio with your own assets and selection screens. They are found in various parts of the project, and basically are the main file other than art assets that you would need to modify to make an avatar builder program."}),"\n",(0,i.jsx)(t.h2,{id:"character-selection",children:"Character Selection"}),"\n",(0,i.jsx)(t.p,{children:"This is for the select screen that loads up profiles for character bases models and their associated assets."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/HkU6ZQWhT.png",alt:"Screenshot from 2024-02-16 02-27-37"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(t.p,{children:"character-select"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"manifest-files-for-traits",children:"Manifest Files for Traits"}),"\n",(0,i.jsx)(t.p,{children:"Setting up this manifest will populate the asset trait section with your own traits that people can select from. It will also serve the character studio for cull trait model options (remove faces underneath) based on the layers, so the triangles disappear underneath the clothing for example."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/By1NZXbhT.jpg",alt:"Screenshot from 2024-02-19 13-42-19"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(t.p,{children:"character-traits"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"manifest-files-for-loras",children:"Manifest Files for LoRAs"}),"\n",(0,i.jsxs)(t.p,{children:["This manifest is inspired by the ",(0,i.jsx)(t.a,{href:"https://hackmd.io/@reneil1337/avatar-lora",children:"VRM to LoRA guide"})," by ",(0,i.jsx)(t.a,{href:"https://github.com/reneil1337",children:"reneil1337"})," will generate training data that can be used for training LoRAs using tools such as ",(0,i.jsx)(t.a,{href:"https://github.com/bmaltais/kohya_ss",children:"Kohya"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/H1OJTfb36.jpg",alt:"rendercombined"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(t.p,{children:"vrm-to-lora"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"personalityjson",children:"Personality.json"}),"\n",(0,i.jsxs)(t.p,{children:["This is an experimental feature for prepopulating and customizing personalities for VRM avatars for AI chatbot application use cases. There's also an ongoing effort to standardize this type of metadata as a ",(0,i.jsx)(t.a,{href:"https://github.com/omigroup/gltf-extensions/tree/main/extensions/2.0/OMI_personality",children:"gltf extension"})," if interested."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/B11GGmZnT.jpg",alt:"Screenshot from 2024-02-19 13-46-05"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(t.p,{children:"ai-personalities"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"generating-manifest-files",children:"Generating Manifest Files"}),"\n",(0,i.jsx)(t.p,{children:"Some useful scripts to help with generating the manifest files"}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(t.p,{children:"generating-manifest"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(6540);const r={},n=i.createContext(r);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);