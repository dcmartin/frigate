(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(98)),l={id:"objects",title:"Default available objects",sidebar_label:"Available objects"},i={unversionedId:"configuration/objects",id:"configuration/objects",isDocsHomePage:!1,title:"Default available objects",description:"By default, Frigate includes the following object models from the Google Coral test data.",source:"@site/docs/configuration/objects.mdx",slug:"/configuration/objects",permalink:"/frigate/configuration/objects",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/configuration/objects.mdx",version:"current",sidebar_label:"Available objects",sidebar:"docs",previous:{title:"Reducing false positives",permalink:"/frigate/configuration/false_positives"},next:{title:"Advanced",permalink:"/frigate/configuration/advanced"}},c=[{value:"Custom Models",id:"custom-models",children:[{value:"Customizing the Labelmap",id:"customizing-the-labelmap",children:[]}]}],b={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By default, Frigate includes the following object models from the Google Coral test data."),Object(r.b)("ul",null,"0  person\n1  bicycle\n2  car\n3  motorcycle\n4  airplane\n5  bus\n6  train\n7  car\n8  boat\n9  traffic light\n10  fire hydrant\n12  stop sign\n13  parking meter\n14  bench\n15  bird\n16  cat\n17  dog\n18  horse\n19  sheep\n20  cow\n21  elephant\n22  bear\n23  zebra\n24  giraffe\n26  backpack\n27  umbrella\n30  handbag\n31  tie\n32  suitcase\n33  frisbee\n34  skis\n35  snowboard\n36  sports ball\n37  kite\n38  baseball bat\n39  baseball glove\n40  skateboard\n41  surfboard\n42  tennis racket\n43  bottle\n45  wine glass\n46  cup\n47  fork\n48  knife\n49  spoon\n50  bowl\n51  banana\n52  apple\n53  sandwich\n54  orange\n55  broccoli\n56  carrot\n57  hot dog\n58  pizza\n59  donut\n60  cake\n61  chair\n62  couch\n63  potted plant\n64  bed\n66  dining table\n69  toilet\n71  tv\n72  laptop\n73  mouse\n74  remote\n75  keyboard\n76  cell phone\n77  microwave\n78  oven\n79  toaster\n80  sink\n81  refrigerator\n83  book\n84  clock\n85  vase\n86  scissors\n87  teddy bear\n88  hair drier\n89  toothbrush".split("\n").map((function(e){return Object(r.b)("li",null,e.replace(/^\d+\s+/,""))}))),Object(r.b)("h2",{id:"custom-models"},"Custom Models"),Object(r.b)("p",null,"Models for both CPU and EdgeTPU (Coral) are bundled in the image. You can use your own models with volume mounts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CPU Model: ",Object(r.b)("inlineCode",{parentName:"li"},"/cpu_model.tflite")),Object(r.b)("li",{parentName:"ul"},"EdgeTPU Model: ",Object(r.b)("inlineCode",{parentName:"li"},"/edgetpu_model.tflite")),Object(r.b)("li",{parentName:"ul"},"Labels: ",Object(r.b)("inlineCode",{parentName:"li"},"/labelmap.txt"))),Object(r.b)("p",null,"You also need to update the model width/height in the config if they differ from the defaults."),Object(r.b)("h3",{id:"customizing-the-labelmap"},"Customizing the Labelmap"),Object(r.b)("p",null,"The labelmap can be customized to your needs. A common reason to do this is to combine multiple object types that are easily confused when you don't need to be as granular such as car/truck. You must retain the same number of labels, but you can change the names. To change:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://dl.google.com/coral/canned_models/coco_labels.txt"}),"COCO labelmap")),Object(r.b)("li",{parentName:"ul"},"Modify the label names as desired. For example, change ",Object(r.b)("inlineCode",{parentName:"li"},"7 truck")," to ",Object(r.b)("inlineCode",{parentName:"li"},"7 car")),Object(r.b)("li",{parentName:"ul"},"Mount the new file at ",Object(r.b)("inlineCode",{parentName:"li"},"/labelmap.txt")," in the container with an additional volume",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"-v ./config/labelmap.txt:/labelmap.txt\n")))))}s.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),s=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return t?o.a.createElement(m,i(i({ref:n},b),{},{components:t})):o.a.createElement(m,i({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<r;b++)l[b]=t[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);