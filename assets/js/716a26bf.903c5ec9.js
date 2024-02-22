"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[8904],{1023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453);const s={},o="Preparing Your Assets",a={id:"Modders/process-avatars",title:"Preparing Your Assets",description:"After cloning and installing Character Studio, you will want to then copy your assets into the public folder and check the .env variable to ensure it's configured to the right location.",source:"@site/docs/Modders/process-avatars.md",sourceDirName:"Modders",slug:"/Modders/process-avatars",permalink:"/characterstudio-docs/docs/Modders/process-avatars",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Modders/process-avatars.md",tags:[],version:"current",lastUpdatedBy:"madjin",lastUpdatedAt:1708577163,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Optimize avatars",permalink:"/characterstudio-docs/docs/General/optimize-avatars"},next:{title:"Change animations",permalink:"/characterstudio-docs/docs/Modders/change-animations"}},d={},l=[{value:"Blender",id:"blender",level:2},{value:"Unity",id:"unity",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"preparing-your-assets",children:"Preparing Your Assets"}),"\n",(0,r.jsxs)(t.p,{children:["After cloning and installing ",(0,r.jsx)(t.a,{href:"https://github.com/m3-org/CharacterStudio",children:"Character Studio"}),", you will want to then copy your assets into the public folder and check the ",(0,r.jsx)(t.code,{children:".env"})," variable to ensure it's configured to the right location."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"blender",children:"Blender"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Requirements"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.blender.org/download/lts/",children:"https://www.blender.org/download/lts/"})," Tested with Blender 3.6"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/saturday06/VRM-Addon-for-Blender",children:"https://github.com/saturday06/VRM-Addon-for-Blender"})," Need this plugin"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"When modeling traits"})}),"\n",(0,r.jsx)(t.p,{children:"It's recommended to separate traits into different blend files for each trait type (clothing, hair, etc). You don't want blend files to get too big or it'll be hard to open and debug later."}),"\n",(0,r.jsx)(t.p,{children:"Pro tip: Artists designing traits should always import the rigged base mesh in order to keep things aligned so everything can merge correctly as a VRM file. We don't have the ability to adjust position/scale/rotation after importing in the app yet, so adjust in blender."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Preparing to export"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note: If you encounter issues try Blender LTS 3.6, when we last tested Blender 4.0 the material export was not working properly."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You should first have the ",(0,r.jsx)(t.a,{href:"https://github.com/saturday06/VRM-Addon-for-Blender",children:"Saturday06 VRM add-on"})," downloaded and installed first. Every trait is parented to a VRM armature, of which we are mainly using version VRM 0. Some traits might have additional bones than others, which is why we have every trait parented to their own VRM armatures vs parenting everything to 1 VRM armature."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://hackmd.io/_uploads/SJebjntDeT.jpg",alt:""})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"REMEMBER TO CHANGE EXPORT PATH!"})}),"\n",(0,r.jsx)(t.p,{children:"We have written a blender python script to help with batch exporting VRM files, make sure to modify the export path to destination folder, all the VRM files will export there."}),"\n",(0,r.jsxs)(t.p,{children:["Here's how to run it: ",(0,r.jsx)(t.code,{children:"blender -b -P scripts/blender_export.py -- blends/Waist.blend"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python!",children:'import bpy\nimport os\nimport sys\n\ndef export_vrm(input_blend):\n    # Set the path to the input blend file\n    bpy.ops.wm.open_mainfile(filepath=os.path.abspath(input_blend))\n\n    # REMEMBER TO SET THE VIEW LAYER NAME\n    view_layer_name = \'ViewLayer\'\n    view_layer = bpy.context.scene.view_layers.get(view_layer_name)\n\n    if view_layer is None:\n        print(f"View Layer \'{view_layer_name}\' not found.")\n        sys.exit(1)\n\n    bpy.context.window.view_layer = view_layer\n\n    # Get a list of all visible objects in the scene\n    visible_objects = [obj for obj in bpy.context.scene.objects if obj.parent is None]\n\n    # Iterate over each visible object and export it as a separate VRM file\n    for obj in visible_objects:\n        # Skip objects not in the specified view layer\n        if obj.name not in view_layer.objects:\n            print(f"Object \'{obj.name}\' is not in view layer \'{view_layer_name}\'. Skipping.")\n            continue\n\n        # Search for a mesh in the hierarchy of children\n        mesh = None\n        for child in obj.children_recursive:\n            if child.type == \'MESH\':\n                mesh = child\n                # If a mesh is found and it\'s in the view layer, select it for export\n                if mesh and mesh.name in view_layer.objects:\n                    # Set the filename for the exported VRM file\n                    armature = mesh.parent\n                    armature.data.vrm_addon_extension.spec_version = "0.0"\n                    filename = mesh.name + ".vrm"\n\n                    # Select the mesh for export\n                    bpy.context.view_layer.objects.active = mesh\n                    mesh.select_set(True)\n\n                    # Export the mesh (VRM)\n                    bpy.ops.export_scene.vrm(\n                        filepath=os.path.join(export_path, filename),  # Corrected line\n                        export_invisibles=False,\n                        enable_advanced_preferences=True,\n                        export_fb_ngon_encoding=False,\n                        export_only_selections=True,\n                        armature_object_name=obj.name\n                    )\n\nif __name__ == "__main__":\n    # Check if the command line arguments are provided\n    if "--" in sys.argv:\n        argv = sys.argv[sys.argv.index("--") + 1:]  # Get arguments after "--"\n    else:\n        argv = []\n\n    # Default export path, CHANGE THIS!\n    export_path = "/home/user/Desktop/Exports"\n\n    # Ensure the export folder exists; create it if it doesn\'t\n    os.makedirs(export_path, exist_ok=True)\n\n    # Set the path to the input blend file\n    input_blend = os.path.abspath(argv[0]) if argv else None\n\n    if not input_blend:\n        print("Error: Input .blend file not provided.")\n        sys.exit(1)\n\n    export_vrm(input_blend)\n'})}),"\n",(0,r.jsx)(t.p,{children:"You can either use the Scripting tab in the blender gui to run it or run it headlessly by saving as a python script then passing the blend file as an argument like so:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"blender -b -P blender_export.py -- clothing_traits.blend"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://hackmd.io/_uploads/Bke-i2YPeT.jpg",alt:""})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"unity",children:"Unity"}),"\n",(0,r.jsx)(t.p,{children:"Requirements:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/vrm-c/UniVRM/",children:"https://github.com/vrm-c/UniVRM/"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://hackmd.io/_uploads/HkeZs2Kvla.jpg",alt:""})}),"\n",(0,r.jsxs)(t.p,{children:["reference: ",(0,r.jsx)(t.a,{href:"https://hackmd.io/@XR/character-studio-overview",children:"https://hackmd.io/@XR/character-studio-overview"})]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);