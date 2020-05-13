(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),i=(r(0),r(302)),o={id:"roadmap",title:"Roadmap"},l={id:"roadmap",title:"Roadmap",description:"This document lists short-term, medium-term, and long-term goals for the project.",source:"@site/../docs/roadmap.md",permalink:"/docs/roadmap",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/roadmap.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1588830198,sidebar:"docs",previous:{title:"Create a New Generator",permalink:"/docs/new-generator"},next:{title:"Migrating from Swagger Codegen",permalink:"/docs/swagger-codegen-migration"}},c=[{value:"Short-term",id:"short-term",children:[]},{value:"Medium-term",id:"medium-term",children:[{value:"API",id:"api",children:[]},{value:"General",id:"general",children:[]}]},{value:"Long-term",id:"long-term",children:[]}],p={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document lists short-term, medium-term, and long-term goals for the project."),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE")),Object(i.b)("p",null,"These are goals, not necessarily commitments. The sections are not intended to represent exclusive focus during these terms. For example, when you start at a college or university you may have a long-term goal to graduate and a short-term goal to find a job for supplemental income. We will similarly work toward many of our medium-term and long-term goals in the near future as we move toward meeting our short-term goals."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"short-term"},"Short-term"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Usability, stability, and marketing.")),Object(i.b)("p",null,"Short term are focused on improving contributor and user productivity (part of this is getting the word out)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CLI improvements",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Search functionality (e.g. what generators support retrofit, what generators are available for kotlin)"))),Object(i.b)("li",{parentName:"ul"},"Build automation improvements"),Object(i.b)("li",{parentName:"ul"},"Discuss consolidating current third-party build systems"),Object(i.b)("li",{parentName:"ul"},"Investigate custom docker containerization for prepared build environments"),Object(i.b)("li",{parentName:"ul"},"Automated release stability"),Object(i.b)("li",{parentName:"ul"},"General"),Object(i.b)("li",{parentName:"ul"},"OAS3.0 features support: anyOf, oneOf, callbacks, etc"),Object(i.b)("li",{parentName:"ul"},"Consider opt-in telemetry about generators being used, limited to a counter of invocations by generator name). This would allow us to make prioritization decisions based on statistics."),Object(i.b)("li",{parentName:"ul"},"Code clean up",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"centralize build scripts"),Object(i.b)("li",{parentName:"ul"},"organize samples/bin scripts according to new generator names"),Object(i.b)("li",{parentName:"ul"},"consolidate typescript generators"),Object(i.b)("li",{parentName:"ul"},"jaxrs => use Swagger core v3 (see ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator/issues/27%5B#27%5D"}),"https://github.com/OpenAPITools/openapi-generator/issues/27[#27]"),")"))),Object(i.b)("li",{parentName:"ul"},"Documentation"),Object(i.b)("li",{parentName:"ul"},"Static pages, preferably on gh-pages, devoted to each generator"),Object(i.b)("li",{parentName:"ul"},"Explain generator options"),Object(i.b)("li",{parentName:"ul"},"Centralized docs on generated code usage/examples/configuration")),Object(i.b)("h2",{id:"medium-term"},"Medium-term"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Feature set, well-defined API (code and templates), and extensibility improvements.")),Object(i.b)("h3",{id:"api"},"API"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Typed representation of the model bound to our templates. As it is, everything is treated an an Object, and this can lead to changes in the interface which might be unexpected from the template perspective."),Object(i.b)("li",{parentName:"ul"},"Feature set (potential generators to add; not an exhaustive list)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Azure functions (node.js, server)"),Object(i.b)("li",{parentName:"ul"},"Finagle HTTP Client (Scala, client)"),Object(i.b)("li",{parentName:"ul"},"Finagle Http Server (Scala, server)"),Object(i.b)("li",{parentName:"ul"},"Finatra (Scala, server)"),Object(i.b)("li",{parentName:"ul"},"Kotlin Spring MVC/Springboot (server)"),Object(i.b)("li",{parentName:"ul"},"C++ Server, any framework (server)")))),Object(i.b)("h3",{id:"general"},"General"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Migrate from Maven to Gradle"),Object(i.b)("li",{parentName:"ul"},"Java 9+ support"),Object(i.b)("li",{parentName:"ul"},"Feature set (other options to investigate)"),Object(i.b)("li",{parentName:"ul"},"SPI plugins",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Templating engine"),Object(i.b)("li",{parentName:"ul"},"Language extensions"),Object(i.b)("li",{parentName:"ul"},"Custom extensions (e.g. allowing users to load support for ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Azure/azure-rest-api-specs%5Bazure-rest-api-specs%5D"}),"https://github.com/Azure/azure-rest-api-specs[azure-rest-api-specs]"),")"))),Object(i.b)("li",{parentName:"ul"},"Customizable templating engines (handlebars support)"),Object(i.b)("li",{parentName:"ul"},"Unit-testing templates (to previously mentioned explicit type as an interface to the template)"),Object(i.b)("li",{parentName:"ul"},"Reduce coupling"),Object(i.b)("li",{parentName:"ul"},"Make types extending ",Object(i.b)("inlineCode",{parentName:"li"},"CodegenConfig")," become the generation entrypoint"),Object(i.b)("li",{parentName:"ul"},"Allow current ",Object(i.b)("inlineCode",{parentName:"li"},"CodegenConfig")," types to define templating engine"),Object(i.b)("li",{parentName:"ul"},"Allow current ",Object(i.b)("inlineCode",{parentName:"li"},"CodegenConfig")," types to modify workflow (currently encapsulated in ",Object(i.b)("inlineCode",{parentName:"li"},"DefaultGenerator")," and tightly coupled to the template engine"),Object(i.b)("li",{parentName:"ul"},'Clearer reuse of "language" features, outside of "generator" types. That is, rather than enforcing polymorphic sharing of "language" which currently allows the super type to redefine framework-specific mapping functionality, generators could compose one or more language support types.'),Object(i.b)("li",{parentName:"ul"},"Define template deprecation/removal process")),Object(i.b)("h2",{id:"long-term"},"Long-term"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Expanding tooling offered, integrations, potentially SaaS offering to partially fund efforts.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Generator UI wrappers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Move jimschubert/intellij-swagger-codegen plugin under the org, and rename"),Object(i.b)("li",{parentName:"ul"},"Look into an Eclipse UI wrapper around the generator"),Object(i.b)("li",{parentName:"ul"},"Look at Visual Studio Code (and/or Atom, sublime text) integration"))),Object(i.b)("li",{parentName:"ul"},"Provide a native GUI for viewing/editing specs. Most tools are currently geared toward developers, but often times it may be non-technical business users who are interested in an API."),Object(i.b)("li",{parentName:"ul"},"A paid service (SaaS) for generation may be enticing for some users. Such a service would allow for statistics (mentioned earlier in telemetry)"),Object(i.b)("li",{parentName:"ul"},"Additional tools"),Object(i.b)("li",{parentName:"ul"},"node.js build system(s) integration (grunt/gulp/webpack/etc)"),Object(i.b)("li",{parentName:"ul"},"ruby gem"),Object(i.b)("li",{parentName:"ul"},"others (which may require previously mentioned SaaS API)")))}u.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return r?a.a.createElement(d,l({ref:t},p,{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);