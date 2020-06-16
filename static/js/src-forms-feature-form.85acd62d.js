(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/enums/FormRegExp.ts":function(e,A,t){"use strict";var n={PINT:/[1-9]\d*/,PINT_AND_ZERO:/^([1-9]\d*|[0]{1,1})$/,NINT:/-[1-9]\d*/,CHINESE:/^[\u4e00-\u9fa5]+$/,NOT_CHINESE:/^[^\u4e00-\u9fa5]+$/,EMAIL:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,NUMBER:/^\d{2,4}$/,NUMBER_OR_FLOAT:/^(-)?\d+(\.\d+)?$/,MOBILE:/^1[3456789]\d{9}$/,PHONE:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,INT_OR_FLOAT:/^([1-9][0-9]*)+(.[0-9]{1,4})?$/,SOCIALCREDITCODE:/^[A-Z0-9]{18}$/,SOCIALCREDITCODE_PRECISE:/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,BUSLICENSE:/\d{15}$/,ORGCODE:/^[A-Z0-9]{9}$/,TAXID:/^[A-Za-z0-9]{15}$|^[A-Za-z0-9]{18}$|^[A-Za-z0-9]{20}$/,IDCARD:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/,HK_IDCARD:/^([A-Z]\d{6,10}(\(\w{1}\))?)$/,TW_IDCARD:/^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/,OFFICERCARD:/^[\u4E00-\u9FA5](\u5b57\u7b2c)([0-9a-zA-Z]{4,8})(\u53f7?)$/,ACCOUNTCARD:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,PASSPORTCARD:/^([a-zA-z]|[0-9]){5,17}$/,DRIVERCARD:/^[1-8]\d{11}$/,IPADRESS:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,FAX:/^(\d{3,4}-)?\d{7,8}$/,ICP:/^[\u4eac\u6d25\u664b\u5180\u8499\u8fbd\u5409\u9ed1\u6caa\u82cf\u6d59\u7696\u95fd\u8d63\u9c81\u8c6b\u9102\u6e58\u7ca4\u6842\u743c\u6e1d\u5ddd\u8d35\u4e91\u85cf\u9655\u7518\u9752\u5b81\u65b0]ICP\u5907\d{8}(-[1-9]\d?)?$/};A.a=n,"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormRegExp",filename:"src/enums/FormRegExp.ts"}})},"./src/forms/FeatureForm.mdx":function(e,A,t){"use strict";t.r(A),t.d(A,"default",(function(){return B}));var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),r=(t("./node_modules/antd/es/button/style/index.js"),t("./node_modules/antd/es/button/index.js")),d=(t("./node_modules/antd/es/form/style/index.js"),t("./node_modules/antd/es/form/index.js")),m=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=t("react"),i=t.n(l),c=t("./node_modules/@mdx-js/react/dist/esm.js"),u=t("./node_modules/father/node_modules/docz/dist/index.esm.js"),b=(t("./node_modules/antd/dist/antd.css"),t("./node_modules/antd/es/input/style/index.js"),t("./node_modules/antd/es/input/index.js")),g=t("./src/enums/FormRegExp.ts"),p=t("./node_modules/idcard/index.js"),O=t("./node_modules/classnames/index.js"),j=function(e){Object(s.a)(t,e);var A=Object(a.a)(t);function t(){var e;Object(n.a)(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=A.call.apply(A,[this].concat(a))).getIdCard=function(e){var A=g.a.IDCARD;switch(e){case 1:A=g.a.IDCARD;break;case 2:A=g.a.HK_IDCARD;break;case 3:A=g.a.TW_IDCARD}return A},e.onChange=function(A){var t=A.target.value;if(t&&p.verify(t)){var n=p.info(t),o=e.props.onSuccess;o&&o(n)}},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,A=e.fromItemProps,t=e.className,n=e.required,o=e.idCardType,a=e.style,s=e.name,r=e.label,m=e.emptyMsg,l=e.errMsg;return i.a.createElement(d.a.Item,Object.assign({className:O("idCard-from",t),style:a},this.props,A,{name:s,label:r,rules:[{required:n,message:m||"\u8bf7\u586b\u5199\u8eab\u4efd\u8bc1\u53f7\u7801"},{pattern:this.getIdCard(o),message:l||"\u8eab\u4efd\u8bc1\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}]}),i.a.createElement(b.a,{onChange:this.onChange}))}}]),t}(l.Component),h=j;"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IdCardFormItem",filename:"src/forms/IdCardFormItem.tsx"}});var C=t("./src/forms/PhoneFormItem.tsx"),I=t("./node_modules/classnames/index.js"),D=function(e){Object(s.a)(t,e);var A=Object(a.a)(t);function t(){return Object(n.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,A=e.fromItemProps,t=e.className,n=e.required,o=e.style,a=e.name,s=e.label,r=e.emptyMsg,m=e.errMsg;return i.a.createElement(d.a.Item,Object.assign({className:I("email-from",t),style:o},this.props,A,{name:a,label:s,rules:[{required:n,message:r||"\u8bf7\u586b\u5199\u90ae\u7bb1"},{pattern:g.a.EMAIL,message:m||"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"}]}),i.a.createElement(b.a,null))}}]),t}(l.Component),E=D;"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EmailFormItem",filename:"src/forms/EmailFormItem.tsx"}});var f={};function B(e){var A=e.components,t=Object(m.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},f,t,{components:A,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"idcardformitemphoneformitememailformitem"},"IdCardFormItem/PhoneFormItem/EmailFormItem"),Object(c.b)("h2",{id:"\u4e09\u7c7b\u7279\u6027\u8868\u5355\u7ec4\u4ef6"},"\u4e09\u7c7b\u7279\u6027\u8868\u5355\u7ec4\u4ef6"),Object(c.b)("h3",{id:"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"},"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8eab\u4efd\u8bc1\u8868\u5355\u7ec4\u4ef6\u5c01\u88c5\uff0c\u53ef\u914d\u7f6e\u5927\u9646\uff0c\u6e2f\u6fb3\uff0c\u53f0\u6e7e\u8eab\u4efd\u8bc1\uff0c\u6821\u9a8c\u901a\u8fc7\u8fd4\u56de\u4e2a\u4eba\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},"\u7535\u8bdd\u53f7\u7801\u7ec4\u4ef6\u5c01\u88c5\uff0c\u53ef\u914d\u7f6e\u624b\u673a\u53f7\u7801\u548c\u56fa\u5b9a\u7535\u8bdd"),Object(c.b)("li",{parentName:"ul"},"\u90ae\u7bb1\u8868\u5355\u7ec4\u4ef6\u5c01\u88c5"),Object(c.b)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5185\u90e8\u5e26\u6709\u5b8c\u6574\u7684\u6821\u9a8c\u673a\u5236\uff0c\u53ef\u914d\u7f6e\u6837\u5f0f\uff0c\u6807\u9898\u548c\u6821\u9a8c\u63d0\u793a\u4fe1\u606f")),Object(c.b)("h3",{id:"\u4f60\u53ef\u4ee5"},"\u4f60\u53ef\u4ee5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5f53\u4f5c\u5b8c\u6574\u7684\u7279\u6027\u8868\u5355\u7ec4\u4ef6\u6765\u4f7f\u7528")),Object(c.b)("h3",{id:"\u540e\u671f"},"\u540e\u671f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f1a\u6839\u636e\u5b9e\u9645\u573a\u666f\u6269\u5c55\u7279\u6027\u8868\u5355\u7ec4\u4ef6\u7684\u529f\u80fd")),Object(c.b)(u.c,{__position:0,__code:'class Demo extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        info: \'\',\n      }\n    }\n    onFinish(value) {\n      console.log(\'value=\', value)\n    }\n    onSuccess(value) {\n      if (value) {\n        this.setState({\n          info: JSON.stringify(value),\n        })\n      }\n    }\n    render() {\n      const { info } = this.state\n      return (\n        <div>\n          <Form layout="inline" onFinish={value => this.onFinish(value)}>\n            <IdCardFormItem\n              name="idCard"\n              label="\u8eab\u4efd\u8bc1"\n              onSuccess={value => this.onSuccess(value)}\n            />\n            <PhoneFormItem name="phone" label="\u7535\u8bdd" />\n            <EmailFormItem name="email" label="\u90ae\u7bb1" />\n            <Form.Item>\n              <Button type="primary" htmlType="submit">\n                \u63d0\u4ea4\n              </Button>\n            </Form.Item>\n          </Form>\n          <div>{info}</div>\n        </div>\n      )\n    }\n  }',__scope:{props:this?this.props:t,Playground:u.c,Props:u.d,Form:d.a,Button:r.a,IdCardFormItem:h,PhoneFormItem:C.a,EmailFormItem:E},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIg9goIAMSFIglmvcIInMTCjVlEiaHQBiiMadB7FcAR0FYgQiCbGBZT491JDgARyEkMA2LgSR73EyTpNk2hrRVVBCPVGDhmdfS5IUt12g9FS1I0mStOgiyYCswzhLMs8omgDz5Kw_j7NU9TNMkHzXD8tjrK8-1A0lQKTU1dowVQXQUWOU5cOcAhEixdhuCY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnCqABY6vYAA2OqGvWDSaGY71oESCr-GcQ4EQdTAYKEfgliIahKDgZqEX66tBoIZwIFwy52AARnaxr5FS9KpgAQTmAr2AjKDyBsKB0DDdh5A5AqxFu6MZHYFE8pgbhgDwnL_rgeQtxrYAHugZ7ggAMjh8ZEnmShmmhp6Xu4LG5TAZDJQGVB2nYAB-DYYbDCN3qudHYdQU7qykGQqzfMwYTMzAwDCKApkpj6voZq7l2rCxgF57hPuAFcLHIOC6PYLV5OHbAQPQOx4oIHA12oF1JeFmtpeoFE0UlIUI37Sg7ne3X9Zt37QlhM30LfW39YmWwcBRLIbutl39bQDSKo232LHp33Q5d6hmLQWw8AjVh4gZK2pZt9LKFgHAoEoFJH3jqAGW4Br2FzxPk5D0u9lQZxQnIBE6LjhOYCTvXbYgZp67zxuiubl23bgD3RxyrI7vLlvUAD9gAClnB1AA5D3UQKVvEnbxPGuDms3pH17y_D23J0jJv1_OpjODH4dMMK3v56yLeugIPpzCjbvbZjWQt_1xh9PYODWnCPgVFQFANAjIQAVyjiZOAeBAbF26OLfE7tI7R0gSvRu4N3420YDpCSUloqGXQbbVA3oAb8C4LpdA_B8E2zgoEKA_9ADVcYAX7lACD0RQ5-68K5VxrvAOA0CG58yvtQThtc4AoI5LvdhFhNyUITK5bW_lZSEKPP_GYbl-Df1cDQ_-gBWV0ALvRaipFsN9owCKUUZLWXYIo4hIB5KRSgGo6h85_6ADqEwAjd76IhhIhM-kcDWQ8Z4hMnEbjMlyvMZR_QSqJDUYQEglhkZWPpB4IgLxxDSJtoABeNAAlcqk7cgTuJ-IkVIbxvjKGFLYvk4Or8xDAH9pQeQjNYzoPqW_Qx7BnYu3EWXbud8H61gVktdgBj9byHDlIQWzMzBfhAA5UKzltJiWwfInABA4BYEAroECBgwKmXtCxNiSwGioBmOEV6iUBJkVipBdg8i0IWwwqc6ikggEeBmUZW0Zl1ZLCglrDMBAljqxnoCE5il5RmguVctiYoUhniwDMU5OAPR0FCEQLS-lIXQpmGCho3z9A3MHMC-Fkg0C0AEJzWu2lsU0FxfRYyx8sGSRul0AAjqECAXRHxcDiJJV8NLDZTBlv4OAli7CFSZSytl7R-V0SFdy1KRKMiku6A0OlOCzGGSpdCLAKs7BYsdNrSl6Eu6SJMPGIw7BtgwESIAHgUTW8mrJYq4RsCjGSNaYYWprACwKoAB88bXrAcVAYmDqF4zmdQM41br2CAHozQAZCqAFH9QA1ho-urKK1l2QA3sC8GncUqAQ3GFdTWU1RTDKAD0dQA5AaAD7owAdv6JosHxayVK03XPQjmsN-b2CMKYYAQgtAAxWYALATADj8YAGH_ACH8oAewNAB7aoAYBjq0cOrsItNKD7ghFQIkd6cDWCUC4M2vNFhTXtsAN4-gBo9QHQdHAgByTUAGJp7aB0ACYcCAHo7QAzfZXqTDgQAD8qAD87dt07SHYNifMNNB12AAB92DXuAzVLdJr2Dxu7YATFTAD30aO6d8kZi5T1HAFIabHXBvWLmqD7bADvyoAQA9AA8FoAeH04OIZHchgQAh0OYcDdOFIxl6ZmEldq-ZelcEBWVnQVWDp0z6EwcqxttylhIglusfsbAvanmVTdCMIT9qoCRYEI4IHkIc2AegVdkm9awDHJxnIhVUUwChTCnxWp7AXRFFqENFg4D5gerdJTh8U4UkOogcuP76UmYhWZ9FlnrO2fszbDwpptihelh569Xm2E-eM-CmSaKLMAAkADSAB9BoVmbN2fLuF8UkXk5xDgN0JMcXfYJZuqZ8zMwcCWAAOrZdyyFgrEWovHBgJzUI3NKsu0K64YretxHdIELSIzIb5DGSk_0eOtAK72D8DOWBt19pQQIBJU8VwoIwKuEiE5b0-Y-wNqgDK1XCp_k26VUcOAYGhdbrdarCNRJkLuxkJeEYEscjc_rY-NSbrKpwDUr7RmPwld5SfQRs7uEnMvgSHA5s7idcexGaHXC6K_Ztuj4RX2z7g-7uI8O03UoWCOR4IB5AJx8YPlcf5gKTuFjO5BZOta1XoTXinWWcAZ5EM5_rZNXRFjJwS3-mA_Oax_VgBLiwliZfqJofLlDaGMNK9o_RiXF94F9yR3AULY3H7J0_mxHxeC2Hsd50oqG3OhXsqM-aPihcLdELEeXKXANgDu46ZDeFSyEe6-9yLX3bP5JUsDxYohgNLHh79YDP14e0RYkBgAbS3oz32gvsjy9tkeOirg0hXGV4kejwGQPtEAO_RcbACZioRojQdg5KDT-g5qNwMjlW1yeUcyrQdkLFxybPNtc8VAL9CdXGHS9ylr-RwAsHKAGNrQAdh717DgPgAut78pCYDlHIOKgJb7g0iAwEbv5baRMKDIwZIQt8k_EE86ax50ML2bda5lMET3GiDGUmdMpyyLJCyMsu_ksismssBPoAwNspcvpPsocscrxLZNRGCrsqqqHganAdhA8k8i8mCh8ifBSr8uwPTrNGgfxKaIqMZBAUlkQClrCvigiipr_rVuipingeqrQYSnoCShKPAOSrqj8lSn6GxpDuxkKgyjAMyimo-MIUQvRATnyBwQqo0P_u5O_uqrxhgNqiwQaj7HhuGualatOvar9EGsxrhi2juuwF6tOn6lhsYZBuGtGvGtOpnugGmhmuSNmqYduuwAWibtZKWpWtOiHkQPWlcKJsjp4VBrooesejgIANJGgAXObEagY4CABfaoAFnaui06Ki2sYuAG4G16dhraMGXaCGSGbqtqFgRe9GNhTGhR5huixG5GlGZR-aFRo-dGGGNRTqZg9-7G5kci7-GqWqAm64NAmCShYRcA4my6emZOc2smo4ShCmSmVw9Bam4Gmm3W2mumhqNYBmfYbkNW_mdWOAeoOo14DQAAMmeKFo5i8M5opnEljtFmVp5uXNkc6EcclgFhZmcRcdcZ1hYINsNrbKVt0LFu8YcX5t8ScdBKlrPDce1kVp1hzC_v1rbMCaFqNqOD0h8TAFNjNk1G8JTtTuGAIJTHTpqACrNIzsfOnoFHWhziVtzpbuLsnM4fLniWLvLu7vLnLsnH6krgKCrikGrh0aKSuFrlfLrvrjieNvzC_FfkQOXM7lblIbno-HiQ7jKE7iyS7uHu7oDF7uXMAL7tKehOHqafCkEWHuXJYlHkQjHhoo4sAPHuXInvACnk3i0hYByegkPvnvtFUePkBmXpXlXg0XXgPiHNGbsevC3sSu3lfKeEoWbG5H3rGRYAGSPhkOKRPu0JGTPgvkvu0qvuvuXJgjAVMOfh_Jfr4YZDflNj0alGzPaKib1lMBMe_p_koFMiFD_lpCYlAIsssqstoOsmAVsoxEgexI0FWUCvAYJIgZQYybcguegYJI8hAM8j_tgZqJ8iMXqvgYQd0MQUlKCuQYxIwTCnCnQUiiiscUwZeSJDqoJvqmuWwXKpwWSq-aMQQPwYScfOqfAKIeIeKsBTIYSV-QoQ0EOZMUMXxhobwTiloREboRatauUesIYdhiYdWDoa2pYVhdWNYYxt0fhWYd4ZGrGgmsRb6WIWKqmlcG4VmnUVRUqf4VWnRQyezrcg2ioU2mhUUXGs0dRtxcGQxkYbUUJeYa4k0SUVRjRuKV0ThnTGdNzuwHBYMWofxngZglpcgcERzkuokLMX2MSbEKSVOBSQQVSQziuHSTxSgWJj0HqUeEsByUYf9EsHLgrvOEsBJQFWPrOFKf7oJXrAbgqRgkqSqW5R7hBY-DYtANqZELqQKqya7mwoaZ7rlLAJaWaWFbcvldaTKKuXcOHvacANHuXLHq6c6VAAnr1p6cAKni0vSXvAxSmsLj6ewNmUGcKcXiGWGdXq4iWbbI3m1c3tEImaEY-RZmeHqBdFcZmb1dwoGYXsFfmXJWRnPovrGRNb7GvsnBvrWFvscjWTWKUjJKbtfiuLftvGpf6A_iJO2dzJpb5MOd2RMr2dMoigwXNfVssiAXoKBEBMzpQdQd7DJVRbPoAC6mgADqbTrQQNAzyWBXCSDJ4HTmgACcK-vAvA6APInOBF5hcN8NgA1CqVRI0o2WCZYXQzxaiZYABaZ4IoOo6NAAehGJjTjXjQTUYEBsnpVCvsAAdIoAdG9AACSSDE2UWmqAD4sQjdOjPDTejeaDzbjfjYTTLdDaapIIALRygA4abTr2CpYo1njOBnic2p68ChDtQwCVSVTmj42hDY2cwACsK-AA1NLbLV4aaoAHrpRtytOotNpt5tlt1tHNLt9tjtztttbtrgntPtOtFF_t7Ari06C1S1lx6N-NIwye8dIwOAXtK-RgAAAtzRdOaEza4OaLhE7bjYXdXbXfXY3d7fjTgByF7cni3XXbhCLdeuLe1PIKnS6lBpIAouwIAADpgAgZGABXgWkYAJJyiggAJEqAC1ptGhGteoALLykgSYO9gAaEbtQ73w2ADq2srQAKp6jXis2c1a3ABD0j2-263sCz6K3w2H2ACgAe_YAPA6iN3FM819t9IomWOooDzElxOoF0aNAyXN5oHIxMWtXtUYvAOAyDiDL9adUGCRxG06jw7AfxVxZ4cJCJFUHNB0QtvNotlU8gktQGHNPd7dotigSY8glDzDB0tDkt9eRD1xnNlDSY7U7t3UAA7AABya0E3ADY10Nj2hrp2ZHcWkMzxW1wOoOoPoDABJiKAj340chAYP06Mj3miGO8BwCIMP2iPD1yN-1QaABkeoAFzKBGgAIW5KOtG4aSAwTwmqM2ZngXSc0RgRhU3SND1sMcgIOaPADWPiNvQRjmhRM6NvSYPyMk1UUB2ABvaYAAD6gALJouOAAA5oAFia9jJ9_9Lj5906NNYDEDUDMDgTGtK-VDuNRg3dEYOATTItYtI9KTdj4akggAfJ6ABY8oAPt-gAAHJDqAAUroAMdyRG4t4jO97A59h9p6VegAj0GG1n2ACz1oACN-gACEbTrTz2ANAXSXH2AihnhagNCWD2A6hahqOSAc29012cOxNYPj3hqAB9PoAGOKLjQzYzkzMziggAK9aABBmoAJvxgAVHKACMOhGoAJ_aLjiAF0R0SYlUB0aLi17UlxB03UE8AAitjdeAczqEcyc2cxc1czc3c5ltBOc0c5HXA8nhzdljqEzc4AAGr9342NaD2nTSPdTyCMvMusscv11cudPcNPC9OtqACnuoAGKqgAFzaAAxigRogAdO7afRfdxdeJfc4JcVimeDPPS7yNI2q7Y6_ds4AON-8RgAIeYzOIDY0avLNrMbObPTrgMADilL9zjzLdzDsjbzCjE9gAzX6ABwXoAF1ygAY9GADUSiq2qzvYAIAMB04j3916lUjrWz06lgF0AAGjltbX3W3dQ6a_Qz6zXf3S83Qww0863Q3dQ6m2a9g-GrXoAFxycb39SbO9x66rgAb6aAAWis2-fcevM4ALJKB0ojO9A7Z9A6-TgAcCqjM70RrdqduAD3yoAL8Bk7h9Z9gAZN7ZuVOtZajo0RiPNY1SNaPu3yARhJtAYHTY1Abc3XpJh806ZcihMXvBMNMGOXuVTXsHTXvXo_ZBNUPXqNMnsr4GNcNAaptAYovQcHQvtaNsNNPZtYAr6S0cipNy3sCPpfrcUZYtbBYHvqPVtPvADdTi20MaP52i28s_bEwcgBtpOmofo4cePVhNb4d5b33SOxNVv92-tFu0MMMP1JsNvvOtqADZioABnaLC3FOozEzE-rIoBH1tMdZ4cdLt2NzEF0ntEYZ9gANN4cjc2N18c10i3HSxOGcEZ0cMeYeADsRoAMfKgANObToXT2A3OX2o3KcDJHvCfntod3vR0muvOfuBdaNjsXta1AbZtAZYD0fodSvmGAAlRoAOaOSNF0zgzg0E4D1znHRHJnA9gt7dHIwA7t4tojongb4agAflmABuWTJ6xxYFqCKA0Gy6zV5w8zzeIyR2ixV4x5wDMIAAzqgAAuqVPQQXRNcW3OCBPCeKDXryDXta2RfXpUPtRPuQfu1UOe0vs4BRNi1zcLcE1LcrdrfXobdO1bed27ezfzcHSLcE2QfHdLdnfmgXdoNXf7e3eHf3fLdO2rdPebdgc2fp2AAE8oAPju_OPI6wWn2b030jxj8gCDSD0jMTvXmHWK0EgA4JqAASFgRpU_YNBNbYADVygApLaADSZoAAGKgAmSGAC98YAJAqgAi3mABVNoAPNBgAmraABpboAL-pgAxrGACBOYANYxgAQImAAadoACU-gAQhaAA8LoALh2gAu7qACssYAIlygA86GACqaYABiugASumACB2oAA2mK-6PGPD9sT8TDTWtdHxMWDJOT1rZUwr1Uw15MwPZyg0y0FXBWkv5R5VKQBwNGy4B8hXBjQmha52hmHgA7BZkburTqqkwAqV4Wv2AChioACoBEf067uaa6smsGXuKGQMQ8ALGLZj-bZz-HZQfyF754RqAkya02wgZ_4cA1Avvk5IAPs_Ali_AVw_APwxY1QGQ5oP4ZIICnO_ArAGQ-Q1AHf7A_AlUOAM_VNIAw_IA5Q5A_QqGBMk__AF0v0hEsAGq3og_XWZIlAiQuYeQBQ1OZo5o3ffwpYC06w_Avk_oSAU_ACag9fd_1Y_AmA8w4YaUEA8Ak_RnF_yygb8QAHNW9C-lu4L8Vw_AaiKAI5rtQcAt6dqB_31j8BSCogZ_vwGxY4AsAqAmsCQnQCcpyEWAsAYgJPTz8JcXfG3NIXgG3pb03UfARYHQGahLQkQUATgLwEgB1g9MeQF_hv64BdAkAFIPX0b7jlQCoNSWCAEMhkgb4SALvqaFoDmgMB5oWYDMH4B8Dhk8gIAA",mdxType:"Playground"},function(e){Object(s.a)(t,e);var A=Object(a.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=A.call(this,e)).state={info:""},o}return Object(o.a)(t,[{key:"onFinish",value:function(e){console.log("value=",e)}},{key:"onSuccess",value:function(e){e&&this.setState({info:JSON.stringify(e)})}},{key:"render",value:function(){var e=this,A=this.state.info;return Object(c.b)("div",null,Object(c.b)(d.a,{layout:"inline",onFinish:function(A){return e.onFinish(A)},mdxType:"Form"},Object(c.b)(h,{name:"idCard",label:"\u8eab\u4efd\u8bc1",onSuccess:function(A){return e.onSuccess(A)},mdxType:"IdCardFormItem"}),Object(c.b)(C.a,{name:"phone",label:"\u7535\u8bdd",mdxType:"PhoneFormItem"}),Object(c.b)(E,{name:"email",label:"\u90ae\u7bb1",mdxType:"EmailFormItem"}),Object(c.b)(d.a.Item,null,Object(c.b)(r.a,{type:"primary",htmlType:"submit",mdxType:"Button"},"\u63d0\u4ea4"))),Object(c.b)("div",null,A))}}]),t}(i.a.Component)),Object(c.b)("h2",{id:"\u8eab\u4efd\u8bc1\u8868\u5355\u7ec4\u4ef6\u5c5e\u6027"},"\u8eab\u4efd\u8bc1\u8868\u5355\u7ec4\u4ef6\u5c5e\u6027"),Object(c.b)(u.d,{of:h,mdxType:"Props"}),Object(c.b)("hr",null),Object(c.b)("h2",{id:"\u7535\u8bdd\u53f7\u7801\u8868\u5355\u7ec4\u4ef6\u5c5e\u6027"},"\u7535\u8bdd\u53f7\u7801\u8868\u5355\u7ec4\u4ef6\u5c5e\u6027"),Object(c.b)(u.d,{of:C.a,mdxType:"Props"}),Object(c.b)("hr",null),Object(c.b)("h2",{id:"\u90ae\u7bb1\u8868\u5355\u7ec4\u4ef6\u5c5e\u6027"},"\u90ae\u7bb1\u8868\u5355\u7ec4\u4ef6\u5c5e\u6027"),Object(c.b)(u.d,{of:E,mdxType:"Props"}))}B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/forms/FeatureForm.mdx"}}),B.isMDXComponent=!0},"./src/forms/PhoneFormItem.tsx":function(e,A,t){"use strict";t("./node_modules/antd/es/form/style/index.js");var n=t("./node_modules/antd/es/form/index.js"),o=(t("./node_modules/antd/es/input/style/index.js"),t("./node_modules/antd/es/input/index.js")),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),d=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=t("react"),l=t.n(m),i=t("./src/enums/FormRegExp.ts"),c=t("./node_modules/classnames/index.js"),u=function(e){Object(d.a)(t,e);var A=Object(r.a)(t);function t(){var e;Object(a.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=A.call.apply(A,[this].concat(o))).getPhone=function(e){var A=i.a.MOBILE;switch(e){case 1:A=i.a.MOBILE;break;case 2:A=i.a.PHONE}return A},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,A=e.fromItemProps,t=e.className,a=e.required,s=e.phoneType,r=e.style,d=e.name,m=e.label,i=e.emptyMsg,u=e.errMsg;return l.a.createElement(n.a.Item,Object.assign({className:c("phone-from",t),style:r},this.props,A,{name:d,label:m,rules:[{required:a,message:i||"\u8bf7\u586b\u5199\u7535\u8bdd\u53f7\u7801"},{pattern:this.getPhone(s),message:u||"\u7535\u8bdd\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}]}),l.a.createElement(o.a,null))}}]),t}(m.Component);A.a=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PhoneFormItem",filename:"src/forms/PhoneFormItem.tsx"}})}}]);