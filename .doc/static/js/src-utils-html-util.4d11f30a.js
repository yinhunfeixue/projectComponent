(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/utils/HtmlUtil.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n("./node_modules/antd/es/button/style/css.js");var s=n("./node_modules/antd/es/button/index.js"),a=(n("./node_modules/antd/es/message/style/css.js"),n("./node_modules/antd/es/message/index.js")),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("react"),n("./node_modules/@mdx-js/react/dist/esm.js")),i=n("./node_modules/father/node_modules/docz/dist/index.esm.js"),c=(n("./node_modules/antd/dist/antd.css"),n("./src/utils/HtmlUtil.ts")),d={};function r(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"htmlutil"},"HtmlUtil"),Object(l.b)("p",null,"HTML\u76f8\u5173\u7684\u8f85\u52a9\u5de5\u5177"),Object(l.b)("h3",{id:"\u5bcc\u6587\u672c\u8f6c\u6362\u4e3a\u7eaf\u6587\u672c"},"\u5bcc\u6587\u672c\u8f6c\u6362\u4e3a\u7eaf\u6587\u672c"),Object(l.b)(i.c,{__position:0,__code:"<div>{HtmlUtil.plainHtml('<span>aaaa</span>')}</div>",__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,HtmlUtil:c.a,message:a.b,Button:s.a},__codesandbox:"undefined",mdxType:"Playground"},Object(l.b)("div",null,c.a.plainHtml("<span>aaaa</span>"))),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// \u5bfc\u51fablob\nHtmlUtil.exportBlob(blob, '\u6587\u4ef6\u540d.txt');\n")),Object(l.b)("h3",{id:"\u5bcc\u6587\u672c\u8f6c\u6362\u4e3a\u7eaf\u6587\u672c-1"},"\u5bcc\u6587\u672c\u8f6c\u6362\u4e3a\u7eaf\u6587\u672c"),Object(l.b)(i.c,{__position:1,__code:"<Button\n  onClick={() => {\n    if (HtmlUtil.copyText('aaaa')) {\n      message.success('\u590d\u5236\u6210\u529f\uff0c\u53ef\u7c98\u8d34\u5230\u5176\u5b83\u5730\u65b9')\n    } else {\n      message.error('\u590d\u5236\u5931\u8d25')\n    }\n  }}\n>\n  \u70b9\u6211\u590d\u5236 aaaa\n</Button>",__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,HtmlUtil:c.a,message:a.b,Button:s.a},__codesandbox:"undefined",mdxType:"Playground"},Object(l.b)(s.a,{onClick:function(){c.a.copyText("aaaa")?a.b.success("\u590d\u5236\u6210\u529f\uff0c\u53ef\u7c98\u8d34\u5230\u5176\u5b83\u5730\u65b9"):a.b.error("\u590d\u5236\u5931\u8d25")},mdxType:"Button"},"\u70b9\u6211\u590d\u5236 aaaa")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/utils/HtmlUtil.mdx"}}),r.isMDXComponent=!0},"./src/utils/HtmlUtil.ts":function(e,t,n){"use strict";var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=function(){function e(){Object(s.a)(this,e)}return Object(a.a)(e,null,[{key:"plainHtml",value:function(e){if(!e)return"";var t=document.createElement("span");return t.innerHTML=e,t.innerText}},{key:"exportBlob",value:function(e,t){var n=URL.createObjectURL(e),s=document.createElement("a");s.href=n,t&&(s.download=t),s.click()}},{key:"isMobile",value:function(){var e=navigator.userAgent,t=!e.match(/(iPad).*OS\s([\d_]+)/)&&e.match(/(iPhone\sOS)\s([\d_]+)/),n=e.match(/(Android)\s+([\d.]+)/);return t||n}},{key:"copyText",value:function(e){var t=document.createElement("textarea");t.value=e,t.style.visibility="false",t.style.width="0",t.style.height="0",document.body.appendChild(t),t.select();var n=!0;try{document.execCommand("Copy")}catch(s){n=!1}finally{document.body.removeChild(t)}return n}}]),e}();t.a=o,"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HtmlUtil",filename:"src/utils/HtmlUtil.ts"}})}}]);