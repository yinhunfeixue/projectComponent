(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/IdCardInput/IdCardInput.mdx":function(e,A,n){"use strict";n.r(A),n.d(A,"default",(function(){return F}));var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),d=(n("./node_modules/antd/es/date-picker/style/css.js"),n("./node_modules/antd/es/date-picker/index.js")),l=(n("./node_modules/antd/es/radio/style/css.js"),n("./node_modules/antd/es/radio/index.js")),r=(n("./node_modules/antd/es/input/style/css.js"),n("./node_modules/antd/es/input/index.js")),i=(n("./node_modules/antd/es/col/style/css.js"),n("./node_modules/antd/es/col/index.js")),u=(n("./node_modules/antd/es/button/style/css.js"),n("./node_modules/antd/es/button/index.js")),c=(n("./node_modules/antd/es/form/style/css.js"),n("./node_modules/antd/es/form/index.js")),g=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),B=n("react"),p=n.n(B),m=n("./node_modules/@mdx-js/react/dist/esm.js"),C=n("./node_modules/father/node_modules/docz/dist/index.esm.js"),b=(n("./node_modules/antd/dist/antd.css"),n("./node_modules/moment/moment.js")),I=n.n(b),Q=n("./node_modules/lodash/lodash.js"),O=n.n(Q),j=n("./node_modules/idcard/index.js"),w=n("./node_modules/classnames/index.js"),E=function(e){Object(t.a)(n,e);var A=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,t=new Array(a),s=0;s<a;s++)t[s]=arguments[s];return(e=A.call.apply(A,[this].concat(t))).state={value:e.props.value},e.setIdCardInfo=function(A){var n=e.props.onSuccess;A&&j.verify(A)?n(j.info(A)):n({province:{},city:{},area:{}})},e.onChange=function(A){var n=A.target.value,o=e.props.onChange;e.setState({value:n},(function(){e.setIdCardInfo(n)})),o&&o(n)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.value;this.setIdCardInfo(e)}},{key:"componentDidUpdate",value:function(e){if(!O.a.isEqual(this.props.value,e.value)){var A=this.props.value;this.setState({value:A}),this.setIdCardInfo(A)}}},{key:"render",value:function(){var e=this.props,A=e.className,n=e.style;return p.a.createElement("span",{className:w("IdCardInput",A),style:n},p.a.createElement(r.a,{onChange:this.onChange,value:this.state.value}))}}]),n}(B.Component),y=E;"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IdCardInput",filename:"src/IdCardInput/IdCardInput.tsx"}});var h=n("./node_modules/idcard/index.js"),D=n.n(h),M={};function F(e){var A=e.components,n=Object(g.a)(e,["components"]);return Object(m.b)("wrapper",Object.assign({},M,n,{components:A,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"idcardinput"},"IdCardInput"),Object(m.b)("p",null,"\u6839\u636e\u8f93\u5165\u7684\u8eab\u4efd\u8bc1\u53f7\u83b7\u53d6\u5bf9\u5e94\u7684\u4e2a\u4eba\u4fe1\u606f"),Object(m.b)("h3",{id:"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"},"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8bbe\u5b9a\u9ed8\u8ba4\u521d\u59cb\u503c"),Object(m.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u7684\u8eab\u4efd\u4fe1\u606f\u8bbe\u7f6e\u505a\u5bf9\u5e94\u7684\u5904\u7406")),Object(m.b)("h3",{id:"\u4f60\u53ef\u4ee5"},"\u4f60\u53ef\u4ee5"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u9ed8\u8ba4\u9700\u8981\u83b7\u53d6\u4fe1\u606f\u7684\u8eab\u4efd\u8bc1")),Object(m.b)("h2",{id:"\u9ed8\u8ba4"},"\u9ed8\u8ba4"),Object(m.b)(C.c,{__position:0,__code:"<IdCardInput onSuccess={values => console.log(values)} />",__scope:{props:this?this.props:n,Playground:C.c,Props:C.d,Form:c.a,Button:u.a,Col:i.a,Input:r.a,Radio:l.a,DatePicker:d.a,moment:I.a,IdCardInput:y,IdCard:D.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIg9goIAMSFIglmvcIIlQJZHCgJYGlQGZwiWEUOwGJYtSyaDYm2DJ2Ewo1ZRImh0AYoj2CISIXSUuUtKvF8VVQQj1UadB7FcAR0EE4SpTddoPTgARyEke8LKsmzwlc8zLOsoTwnU0y3N8rDZX4Lg4is_gjJM-1A0lUKTU1dowVQXQUWOU5cOcAhEixdhuCY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnCqABY6vYAA2OqGvWMBgOY71oESCr-GcQ4EQdTAYKEfgli01BKDgZqEX66tBpoZwIFwy52AARnaxr5FS9KpgAQTmAr2AjKDyBsKB0DDBSOQKsRbujGR2BRPKYG4YA8Jyv64HkLca2AB7oGe4IADJYfGRJ5koZooael7uExuUwGQyUBlQdp2AAfg2aGwwjN6rjRmHUFO6spBkKs3zMGFTMwMAwigKYKfez76au5dqwTeKCBwZjMhSAzwZrWtgo8_yDlQZxQnIBE6IB1h4gZOxuA-9LKFgHAoEoFII01qBtY5TDNxXKQRbFiWpejSQBaZswvxAJyXLlvzbO89zffCHACDgLBAN0ECDDA2LIMaBWFMSlSyMC-1jfQfw8V09o04zlONTNJYoLXah9FEzUADlAQTrPTUVGLGIaYuMwINDKEHLOcA9NBaAEDm1dcpv9Fbu4_TMc6zIDm6ugAR1CCAukfCLfNfIzx_IOC6NQb14CnmBZ_nmBH3X_w4C3o96I_VLu4yPvugaH3PIIHKsiK6tzYZK4kSMunr97iU74fgrYedhsAgXQHYRujoS40GAa_CwxhTBCyMOwQA1XGAF-5QAg9GAFwlQA05qAB4FeMPJ1jvxgETK4KJpwpCMvAkwhD2CAGT4wApoqAGNrQAdh7oIwYAOBVAAhboAPbVADAMYQ3k1ZqDK1VvAe4t0SGSKRG9XW7BWCUC4EZJkqB7B-BnPtM2Wt9qyN5oo5RZg6Zjw3hAny8tbLQiwGAuwg8aCMHvuYwOLd0ICUAbZZ-tAPrAHWCiLIVxHEB0fp47ohUfFCwUToq4ExbA4H7G3OAOASGNQsPIahhZ0z6C1FwPUbQaA83CTLceUESEJ0KjExJ8S7jpIsBUnAcBRyAMGtoi2MBL7VmMdWT464aDZPQAAVRmOnWgEZ-wwFYMAgJ7jwjALeoUmsEBmgRgAIQ5zgHgHAtgzyz3iBGOpVTEnJL7F0CZ6Ekk6I5HMlcFhimRNaWU_EsSDk1JrHUhpT8CBZDutcmsySfnyHaTLWpBJ6mNKcYJZpJDAU1jpqk1KFh3lNOHIVFpH8QioESHI7xK5bmiJVmrDCN19noReYsqROj2Dwwnr5JJGRFmJFRW0q5ESbnUAymgQaN0fabNQJCi5LyLB4vEXRCMHLKDQtSdCKADS4FAqFQS75LKazxNYGgBEVxgBKB-Tcl4Y0mJaqVRYSy4oNUGqBa9F5sKFIqJEWojRaQboRn2lBT5pVRwaruWipECcAW83may1A7KnE3T_K6085zWkvNxXa9wDrMLlJBc8lcbzRwhKjEq_1QKSFXC4AHFJQKzVAp5vIzNMsU0ECRaKpxEqYX5osDWslEZqDqNjW02VMtm32sPrm3yNarVpPhX2N4UBYgTjoFOCmVwRaV1mpm25x86Ll23ksX6sAHnEoSS8roBA-jmHTeaxgq13A9FMUuo8AMF2n23nAR80yXxLEvWetpmFV3_WAK-sG2rZbx07a2gGdTf2aMwiQ_9IK_G0AjQya20saxSCPagGD0K6adNZvadmnMph3qMh7L2khf63zgAPKBzdgHBy0BQYC-gGD4f_o0OxLiEmyoQXQwA7BaAHh9QAsCpCPWI-7eZCfqogKDamhiCazIMAKGKgAVAPY9x6sr7-P23sM4Zww8MgxHgN_VKqGpjodCFzOjxGh4kvdkoEAa1tiuDSP-OA1Bw6UdAiAeZ_Az6MiQOwfgPxizVAyOaH8ZJXP5v4KwDI-RqD8CuPwSqOAouVQWusfg5RyD9BmN2f0bn-AXR-oRNdfm12YDJJQRIuY8gFDHWac0nm_ilji9WfgUQ0DhfcyocMGg4A1YsAlmA8xwxpQgPARrmaEtZUa_wAAegAJhwEmHAB12s1n4NREbIBRvtRwJN9qc2OsgH0voJbE21sAFYpubaa0vKK6XlurYOtFk7_Ba6iAuwdbqOAsC3ZAGsvAe2rsAHYZsHbe5elzbWLv7cm91N793LSRCW09l7_B1jIZw1V3AuhIApGs7Z7QEcqNgR8SAWgPosjhY86aWg5pIezBmPweQCh5DyCAA",mdxType:"Playground"},Object(m.b)(y,{onSuccess:function(e){return console.log(e)},mdxType:"IdCardInput"})),Object(m.b)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),Object(m.b)(C.c,{__position:1,__code:'<IdCardInput onSuccess={values => {}} value="420115199305126210" />',__scope:{props:this?this.props:n,Playground:C.c,Props:C.d,Form:c.a,Button:u.a,Col:i.a,Input:r.a,Radio:l.a,DatePicker:d.a,moment:I.a,IdCardInput:y,IdCard:D.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIg9goIAMSFIglmvcIIlQJZHCgJYGlQGZwiWEUOwGJYtSyaDYm2DJ2Ewo1ZRImh0AYoj2CISIXSUuUtKvF8VVQQj1UadB7FcAR0EE4SpTddoPTgARyEke8LKsmzwlc8zLOsoTwnU0y3N8rDZX4Lg4is_gjJM-1A0lUKTU1dowVQXQUWOU5cOcAhEixdhuCY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnCqABY6vYAA2OqGvWMBgOY71oESCr-GcQ4EQdTAYKEfgli01BKDgZqEX66tBpoZwIFwy52AARnaxr5FS9KpgAQTmAr2AjKDyBsKB0DDBSOQKsRbujGR2BRPKYG4YA8Jyv64HkLca2AB7oGe4IADJYfGRJ5koZooael7uExuUwGQyUBlQdp2AAfg2aGwwjN6rjRmHUFO6spBkKs3zMGFTMwMAwigKYKfez76au5dqwTeKCBwZjMhSAzwZrWtgo8_yDlQZxQnIBE6IB1h4gZOxuA-4B5EwzWoAZPgQHagAmSqDoOgBWA6AE57aTSq7fN7rzYOyr-HYTcVykEWxYlqXo0kAWmbML8QCcly5b82zvPcuPwhwAg4CwQDdBAgwwNiyDGgVhTEpUsjAvtKAnH8PFdPacv0Er0uNTNJYoLXah9FEzUADlAUL6vTUVGLGIaVuMwINDKEHaucA9NBaAEDm1dckf9HHu4_TMc6zMTm6ugAR1CCAukfCLfNfIzN_IOC6NQb14B3mB98PmBH0v_w4Bvo96I_VLZ4yBfugaLHTyBAcpZCKtWI2DIrhIiMnTX-88JQAKAQrVedhsAgXQHYYejo240FQeAiwxhTBCyMOwQA1XGAF-5QAg9GAFwlQA05qAB4FeMPJ1iQJgETK4KJpwpCMoQkwzD2CAGT4wApoqAGNrQAdh6UKoYAOBVAAhboAPbVADAMcw3k1ZqDK1VvAe4t02HaKRG9XW7BWCUC4EZJkqB7B-BnPtCMbDoGoESAYj6xjTFmDphvK-WCfLy1stCLAGC7DLxoIwQB3ik5j3QgJZBtlQG0D1usFEWQrihMTsA2J3RCrABXHY_EtgcD9gnnAHAbDGoWHkLwws6Z9Bai4HqNoNAeZZKFoWVAGUoJsMLoVCYeSCl3AqRYbpRS4CjmQYNWxWsYDf2rO46snx1w0BqegAAqjMOutAIz9hgKwVByTonhFQW9JpMsIDNAjAAQlrpXHAtgzz73iBGQZ-T0LFImaSLo2znlsI5IclcFhN7tImZ03JRTelwH6TWR5wyQEECyHdX5NYSnwvkFMmWAyCQ4ChaMyg4zjaTPBXTMpqULCYrCYJQaN0cVQJCA4pxBCaz_L2ErFWasMI3UeaC8FJydGAvhlvXyxSMgnMSJSyZPzml_OoBlNA5LCqx2uagMZXzwUWHUcyrREZpWUBRTWTC85hl0plqqzRdE4XiprAU1gaAERXH1qU1FfyXhjSYkoeFFhLLihtS6s1yL8XrHKUSxllj3BpApftKCMLSqjhtUYiZ9jkiYWRbzI59LJVjjCTdP8EbTwvNxeChl1Ag3WKBey9C4LIWjnSVGM1yb7U5K4InO1MsvX2p5oYmtqLy0ECxRqsJ2qm2NvYH2zgpyC1WLSGK-1o7g3P3rb5IdBKFJmKam8KAsQJx0CnBTK4Itu6zXbQy1-dFO63yWL9WAxb0UcpXF0AgfRzBVvtYwVa7geieOPUeAGh7363zgI-PZL4lhfvfZMzCZ7_rADA2DV1ssC5TusQDR5cG0iGwmQh9FiTaA5oZJhX2ZqpDPtQNLQdFS6YzNZvadmnMpj_qMpHaOkh4H_zgEvHBo9UEpy0BQYC-gGCMcQY0IJETCl0qIQIwA7BaAHh9QAsCoqPWEB2-HCfqogKEuvhxCaykMAKGKgAVAMk7J6sYHFMB3sM4Zwq8MgxHgLA1K5GpiUdCFzATrGV6lojkoEAa1tiuDSP-OA1AM7cdAiAZN_AP6MiQOwfgPxizVAyOaH8ZJwt2v4KwDI-RqD8CuPwSqOActexAMlkA5RyD9BmN2f0EX-AXR-oRc9CXz2YDJJQRIuY8gFHXWac00W_ilgWusfgUQ0CZciyocMGg4B9erPwRrG74QQHgMN9t02srDf4AAPXNjgJMOADqTZlvwaiq2QBrfajgTb7U9s1gG9pGgR2NtnZtlty7FhwroEiugO7p2Dq5eeyN_uohKsgAOt1HAWBfv8EuXAPAn2dsAHYds23BzoTxYWJuA_u5t7qSP_uWkiEd4HoP-B-rcXRnruBdCQBSL5_z2hM48bAlkkAtAfRZEy1F00tBzQ49mDMfg8gFAGyAA",mdxType:"Playground"},Object(m.b)(y,{onSuccess:function(e){},value:"420115199305126210",mdxType:"IdCardInput"})),Object(m.b)("h2",{id:"\u52a8\u6001\u6539\u53d8\u8eab\u4efd\u8bc1\u83b7\u53d6\u5177\u4f53\u4fe1\u606f"},"\u52a8\u6001\u6539\u53d8\u8eab\u4efd\u8bc1\u83b7\u53d6\u5177\u4f53\u4fe1\u606f"),Object(m.b)("p",null,"\u8bd5\u8bd5\u5728\u8eab\u4efd\u8bc1\u4e00\u680f\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u4fe1\u606f"),Object(m.b)(C.c,{__position:2,__code:"class Demo extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        idCard: '',\n        info: {\n          province: {},\n          city: {},\n          area: {},\n        },\n      }\n    }\n    render() {\n      const { info } = this.state\n      return (\n        <div>\n          <Button\n            type=\"primary\"\n            onClick={() => {\n              this.setState({\n                idCard: IdCard.generateIdcard(),\n              })\n            }}\n            style={{ marginBottom: 10 }}\n          >\n            \u968f\u673a\u751f\u6210\u8eab\u4efd\u8bc1\n          </Button>\n          <IdCardInput\n            value={this.state.idCard}\n            onSuccess={info => this.setState({ info })}\n          />\n          <div style={{ marginTop: 10 }}>\n            <div>\n              <label>\u6027\u522b: </label>\n              <span>\n                {info.gender ? (info.gender === 'M' ? '\u7537' : '\u5973') : ''}\n              </span>\n            </div>\n            <div>\n              <label>\u5e74\u9f84: </label>\n              <span>{info.age}</span>\n            </div>\n            <div>\n              <label>\u751f\u65e5: </label>\n              <span>{info.birthday}</span>\n            </div>\n            <div>\n              <label>\u7701: </label>\n              <span>{`${info.province.text || ''}  ${info.province.code ||\n                ''}`}</span>\n            </div>\n            <div>\n              <label>\u5e02: </label>\n              <span>{`${info.city.text || ''}  ${info.city.code ||\n                ''}`}</span>\n            </div>\n            <div>\n              <label>\u533a: </label>\n              <span>{`${info.area.text || ''}  ${info.area.code ||\n                ''}`}</span>\n            </div>\n            <div>\n              <label>\u5730\u5740: </label>\n              <span>{info.address}</span>\n            </div>\n          </div>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:n,Playground:C.c,Props:C.d,Form:c.a,Button:u.a,Col:i.a,Input:r.a,Radio:l.a,DatePicker:d.a,moment:I.a,IdCardInput:y,IdCard:D.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIg9goIAMSFIglmvcIIlQJZHCgJYGlQGZwiWEUOwGJYtSyaDYm2DJ2Ewo1ZRImh0AYoj2CISIXSUuUtKvF8VVQQj1UadB7FcAR0EE4SpTddoPTgARyEke8LKsmzwlc8zLOsoTwnU0y3N8rDZX4Lg4is_gjJM-1A0lUKTU1dowVQXQUWOU5cOcAhEixdhuCY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnCqABY6vYAA2OqGvWMBgOY71oESCr-GcQ4EQdTAYKEfgli01BKDgZqEX66tBpoZwIFwy52AARnaxr5FS9KpgAQTmAr2AjKDyBsKB0DDBSOQKsRbujGR2BRPKYG4YA8Jyv64HkLca2AB7oGe4IADJYfGRJ5koZooael7uExuUwGQyUBlQdp2AAfg2aGwwjN6rjRmHUFO6spBkKs3zMGFTMwMAwigKYKfez76au5dqwsYAee4D7gBXCxyDguj2C1GAtOhLAQPQOx4oIHA12oF0JaFmspeoFE0UlIUI37Sg7je3X9Ztn7QlhM30LfW39YmWwcBRLIbutl39a4dz0Aqjbfb91BBquH2Q5rc3WDQBEI6USWQ_IF4xqYxO9ajyzxQTxqo4sDOo7p33i5dydIytpP9fOpjODD4dMMKt24A9ggsirmsugIPpzCjTOXZjWQO9txhOJuahh5d3L5j4EB-35SzEn4SfbeoewoFkgHRfFlep4JD3RxyrI7t333_d8q5gqsk90kyWh70ih8OTz_PbfkZ3X5reRS8_n7ctgAGUESplWvCICIRArgHWqt_U-7Bwa_0APFpgAuc0APiugAEI0ANVxgBfuUAIPRsCpBj24vA_OjAr5-VsrAiwrB4gMgBs3VuWQcDnysj_T-1BnChHIAiOiAM0CDV5vQuAh8260DunXfh79WFR03Pg76v0AHACAZZMqlgLaQOgWDShtZGZaITHBQIUAxCAHIDQA1EpXCkPo-cxDf6MFWu4axv8mJ8MoDfcMRwSYRmca4qcBUsbtD1ITEm7RADsroTCqgBnTVfOwIOUjP5SDsagBxUcGaxi0YPJJJDLGGMAC56gAQ_PMZILJGTkkJLEMALxrg0jyHic1RJaSdxD37sknRTTMmuAMWIFBgBT0wKUU3RtZSnlPrjgDwEBhR4HQPBapkhSn1JaY47RqTWnJKKYAQHdentKsf02xtSynFAACRDMGjgGOcc_y0GVuwAAPlcuU7RMLsEOV405aU_w_GuVc_pFh2j3OKNM2ZyyB4NOKQPeZCzaxFMAEB6GyOnbMGQco5LiU65RwBcqYNy7kPKecM5FiQPiAg-V8zFfyan2LmUshZ6TtlFMAFzKMKtmAt9js-xwAEUVNNKi7A6Lbk_KxYinA2dXD4tmjcolvKSUzN2eSxplKwWUqKYABnVAAC6vSwxcLdn8pal0Oi_ypWMptikmVcTgW70NSCj-b8k6xK7j3Ws8tFYyL1jA-mkgBZMzMF-EATkXJkM8gQbyAc_WorgFgQCugQIGDArFSCjR_JTEUvZaigV7RQCcP4PEul2ipsmXAPAyaNRmiWFBLWGYCCiU1AAOQJQm7CppFQxUYg0Et-g0IWzsJmnAHo0C0AEBzbhrlm00FbXcP0Zga5kJul0AAjqEMZMBHwRV8q-IyNdpb-DgKgb08BJ0wBnXOx8a66KbqPPRD8qVu0ZD7d0Bovq41H1oEVas1CoAMiuEiIydML29olNe29tlh12C5XQVWjRB0EAA4-iwxhTBCyMOwbBODAC4SoAac1AA8CvGHk6xn0MiJlcI2BQjJQZMBh9ggBk-MAKaKgBja0AHYeCHABwKoAELdAB7aoAYBiMO8mrOwzh3D7i3Ww_AN9qBEhvTFuwVglAuBGSZKgewfgZz7QjPxwTwnebick2YOmY6ZZ2D_eEJWKs7BgdIbp8D6EBImfvTAHe1ZPa0EvhZkR3RCqRzEzQ_a9DzZ3BwPxl-8hCOFnTPoLUXA9RtBoDzFzNcoL8YUjdDz6F_MWEEaOW9g1FNubPdWTT1ZPjrhoMF9AABVGYkzRH9hgKwAD9mfIeTjQByuesIDNAjAAQmzemphcAzwzviBGeLbbvNudJF0Sr6FBsvpgByBrtsouuYm7Fpu-9PNwESzWZLBBLMn1aT5q1mXbbrdS5QdLE29tf3WNliwQiCCHZusd19IQhMies9XQ2MauNcPgBhOLS2Esria3xtz7B4ZmQDt5jITXEh3cm9Nm2NdnE3TIUw-uUPTv63ezxzx9dUexfnEIyDNt0efa277F58d04vxm6nXOHdBXU_7u_Vbpc_OpQsGvOTaRbv7Sgm3Uqo4I5zfu0iWL79eaRde5wGrORCrnOUaOcbDJVuzbZ-4Dnjd8Tu2W6t9bm2k4uf1kpiXAcKdf2NxYbe-P9v7yu4dzxkvscF2N9j_7EZlfyZh2jmT7P53MPQNjpnUmmpvA3uQCcwGK5XHVlW2aYvUAZXutpitW6ljyO6Gr_rdxVs2oEL3JOzLzCHrgIno8AMC_HvgI-EzDUegJ63RyTCKeAYp80a00hca9ie5V_9YA9DXdVIF13wRjn5cwEwo6kekqyV61O3TbLrN7Ts05lMEzRlPXeskF-q9cAB2Om1kOsbBAtAUGAvoBgG-f2gZ36WiDPtoMkcAOwWgB4fUALAq7H1gF6LzAXDf9pwpAD0RmDNYcGgAoYqAAqAY_q_jZv_J_hHpqJrM4M4MOhkDEPAB-qlHPlMAvqEFzBfoFnvm2ivkoHPBKNsJUn-JoNQGGsfqBCAD7PwGXvwFcPwD8MWNUBkOaD-GSIyCAC_PwKwBkPkBPEgOwPwJVDgKIZVAtOsPwOUOQP0DMN2P6EIfwBdD9IRLAErN6JwccDAGSJQIkLmHkAUKHmaOaMwX8KWJIdWPwFEGgAwcISoOGBoHAJYRYNIToWHmlBAPAHYS5tIVlHYfwAAHoABMOASYOAB0LhNY_A1EARIAgR7UOAoR7UURrhIA-k-gcRIRSRAArGEakfYYulFEofEYkQdGIQUfwHWqICUQdN1DgFgJUSAO1rmlkWUQAOwRE5FNGl5brOElHZGhHdRNHVGWiRBxF1ENHLxZYaar7mG4C6CQApD_hwAUHaDhon5gQSwgC0A-jtxIBMGmi0DmijGzAzD8DyAKDfxAA",mdxType:"Playground"},function(e){Object(t.a)(n,e);var A=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=A.call(this,e)).state={idCard:"",info:{province:{},city:{},area:{}}},a}return Object(a.a)(n,[{key:"render",value:function(){var e=this,A=this.state.info;return Object(m.b)("div",null,Object(m.b)(u.a,{type:"primary",onClick:function(){e.setState({idCard:D.a.generateIdcard()})},style:{marginBottom:10},mdxType:"Button"},"\u968f\u673a\u751f\u6210\u8eab\u4efd\u8bc1"),Object(m.b)(y,{value:this.state.idCard,onSuccess:function(A){return e.setState({info:A})},mdxType:"IdCardInput"}),Object(m.b)("div",{style:{marginTop:10}},Object(m.b)("div",null,Object(m.b)("label",null,"\u6027\u522b: "),Object(m.b)("span",null,A.gender?"M"===A.gender?"\u7537":"\u5973":"")),Object(m.b)("div",null,Object(m.b)("label",null,"\u5e74\u9f84: "),Object(m.b)("span",null,A.age)),Object(m.b)("div",null,Object(m.b)("label",null,"\u751f\u65e5: "),Object(m.b)("span",null,A.birthday)),Object(m.b)("div",null,Object(m.b)("label",null,"\u7701: "),Object(m.b)("span",null,"".concat(A.province.text||"","  ").concat(A.province.code||""))),Object(m.b)("div",null,Object(m.b)("label",null,"\u5e02: "),Object(m.b)("span",null,"".concat(A.city.text||"","  ").concat(A.city.code||""))),Object(m.b)("div",null,Object(m.b)("label",null,"\u533a: "),Object(m.b)("span",null,"".concat(A.area.text||"","  ").concat(A.area.code||""))),Object(m.b)("div",null,Object(m.b)("label",null,"\u5730\u5740: "),Object(m.b)("span",null,A.address))))}}]),n}(p.a.Component)),Object(m.b)("h2",{id:"form\u8868\u5355\u7528\u6cd5"},"Form\u8868\u5355\u7528\u6cd5"),Object(m.b)("p",null,"\u6839\u636e\u83b7\u53d6\u7684\u4fe1\u606f\u81ea\u52a8\u586b\u5145form\u8868\u5355"),Object(m.b)("p",null,"\u8bd5\u8bd5\u5728\u8eab\u4efd\u8bc1\u4e00\u680f\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u4fe1\u606f"),Object(m.b)(C.c,{__position:3,__code:'class Demo extends React.Component {\n    constructor(props) {\n      super(props)\n      this.formRef = React.createRef()\n    }\n    render() {\n      const tailLayout = {\n        labelCol: { span: 2 },\n        wrapperCol: { span: 22 },\n      }\n      return (\n        <Form\n          layout="inline"\n          labelCol={{ span: 4 }}\n          wrapperCol={{ span: 20 }}\n          ref={this.formRef}\n          initialValues={{ idCard: \'420115199305126210\' }}\n          onFinish={value => {\n            console.log(\'\u8868\u5355\u7ed3\u679c\uff1a\', value)\n          }}\n        >\n          <Col span={24} offset={2} style={{ marginBottom: 20 }}>\n            <Form.Item name="" label="">\n              <Button\n                type="primary"\n                onClick={() => {\n                  this.formRef.current.setFieldsValue({\n                    idCard: IdCard.generateIdcard(),\n                  })\n                }}\n              >\n                \u968f\u673a\u751f\u6210\u8eab\u4efd\u8bc1\n              </Button>\n            </Form.Item>\n          </Col>\n          <Col span={12} style={{ marginBottom: 20 }}>\n            <Form.Item\n              name="idCard"\n              label="\u8eab\u4efd\u8bc1"\n              rules={[{ required: true }]}\n            >\n              <IdCardInput\n                onSuccess={values =>\n                  this.setState(\n                    {\n                      values,\n                    },\n                    () => {\n                      this.formRef.current.setFieldsValue({\n                        sex: values.gender\n                          ? values.gender === \'M\'\n                            ? \'1\'\n                            : \'0\'\n                          : \'\',\n                        address: values.address || \'\',\n                        age: values.age || \'\',\n                        birthday: values.birthday\n                          ? moment(`${values.birthday}`)\n                          : \'\',\n                      })\n                    },\n                  )\n                }\n              />\n            </Form.Item>\n          </Col>\n          <Col span={12} style={{ marginBottom: 20 }}>\n            <Form.Item name="sex" label="\u6027\u522b" rules={[{ required: true }]}>\n              <Radio.Group>\n                <Radio value="1">\u7537</Radio>\n                <Radio value="0">\u5973</Radio>\n              </Radio.Group>\n            </Form.Item>\n          </Col>\n          <Col span={12} style={{ marginBottom: 20 }}>\n            <Form.Item name="age" label="\u5e74\u9f84" rules={[{ required: true }]}>\n              <Input />\n            </Form.Item>\n          </Col>\n          <Col span={12} style={{ marginBottom: 20 }}>\n            <Form.Item\n              name="birthday"\n              label="\u751f\u65e5"\n              rules={[{ required: true }]}\n            >\n              <DatePicker style={{ width: \'100%\' }} />\n            </Form.Item>\n          </Col>\n          <Col span={24}>\n            <Form.Item\n              {...tailLayout}\n              name="address"\n              label="\u5730\u5740"\n              rules={[{ required: true }]}\n            >\n              <Input />\n            </Form.Item>\n          </Col>\n          <Form.Item>\n            <Button htmlType="submit">\u63d0\u4ea4</Button>\n          </Form.Item>\n        </Form>\n      )\n    }\n  }',__scope:{props:this?this.props:n,Playground:C.c,Props:C.d,Form:c.a,Button:u.a,Col:i.a,Input:r.a,Radio:l.a,DatePicker:d.a,moment:I.a,IdCardInput:y,IdCard:D.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIg9goIAMSFIglmvcIIlQJZHCgJYGlQGZwiWEUOwGJYtSyaDYm2DJ2Ewo1ZRImh0AYoj2CISIXSUuUtKvF8VVQQj1UadB7FcAR0EE4SpTddoPTgARyEke8LKsmzwlc8zLOsoTwnU0y3N8rDZX4Lg4is_gjJM-1A0lUKTU1dowVQXQUWOU5cOcAhEixdhuCY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnCqABY6vYAA2OqGvWMBgOY71oESCr-GcQ4EQdTAYKEfgli01BKDgZqEX66tBpoZwIFwy52AARnaxr5FS9KpgAQTmAr2AjKDyBsKB0DDBSOQKsRbujGR2BRPKYG4YA8Jyv64HkLca2AB7oGe4IADJYfGRJ5koZooael7uExuUwGQyUBlQdp2AAfg2aGwwjN6rjRmHUFO6spBkKs3zMGFTMwMAwigKYKfez76au5dqwsYAee4D7gBXCxyDguj2C1GAtOhLAQPQOx4oIHA12oF0JaFmspeoFE0UlIUI37Sg7je3X9Ztn7QlhM30LfW39YmWwcEGgQiDFZpCvVj5TVoH2Kclms6Zdic6CnHnrYjwtUAyghXGgAAZeD9hu2O4_YODAigPirig1b3CuAAmBTGuziwRkyOYMgLpifua8r2FL8ulFD_Xw7jroCD6cwoz1iPGFYr3O5duDWnCPgVFQKA0EZEBx9t3P5z4gGi-bq52oU7uq7zWvYXX4BN5L1vqvkPeq66MAAbduAPbYn2r-ztAXggeIADV4gZOAN84HyVkOql0qgdA6ABWA6ABOKBSZKqQNLt1UuB1KqE0vsvG21BmJvzgHgAGrAf7dDFkVIeVd0qUFgDgKAlAUiPkABYRgBVZUAMt-gAc80AFj_DV2AEKgAyZ2-9d4YIsODfejA-JN3cADUu7VMIozAHAUckjMK_VgP_EqZVrwiAiEQMuF8waCJtiPNiOAmwK3YKgb0_1-D8Bzq4POM9xD6NtowTiNxqCOJdrleYM9-z8ksokKxpD-F7FQPYeeOwAai3Fu4iO99H5ex9h8PoYYNbyIINg-cqtv48JgHdaJccuDuXQFcYKVkTzpEyLQe8kUHwckrkEl28g-H1LDi_fhwjmnsEAPFpgAuc0APiugAEI0ANVxgBfuUAIPReTtwuO4u0kRkhR5EGMbQIgMy45SD4is4eYji6oABgdUuSjcoqJPppSy6jNGRB0bvDZqz5mLIVhMsxFiZ4FN8gEjpNi7H8BGeMpegTr6hCxADAA2lBLoABHUIEAuhFPGGibo8gAC6rTs7XOzowEpflbIPIsNQZwoRyAIjovgwhdgxbYprLE1JOUsiD3ebbLOdL9bcN_nUxlFgO5_OaZEkhbKbaxM9t7GAYBEkCGSTgVJ6SnpwCyQyXJnK6XyKwFcZl8AynhgEOS7OJMVUPzSOqgqWN2h6hSvK3lJN2gHRNby7OFVUGarjhVDa1qbYtS6HRZVJKcCuvgHYAAPr6uUTrnU1lcGkD12SH6hu6P6wNrLg0eChRMdA8Fw2_xwAm4UeBk3-NNXSkm-l9ARmKAAEmADq9Nias3wXkMUJpwaLCOrjbyxp9r2VNo6XW5pyKq6bjyVIW5JjlnuLWRQ1FBitnN12fsn6hz_rHLUWgDRrjtHnyuX2gdSzHlHhnoq6xq8oAz0AOQGgBqJWsWiQFwAQWRwhVC7IVxUQMgUkisdw8xIsEoDgAA4khQWjLGBvoGFwwhM8DriEAOyuUgAOUBfasqDQHskz0quIQAzpqQfEtBh5aH31fp_TB_W_ajGDrw7WSQ6zh0TokcAPZBy_qqNOYu85K6QFrtzfhjdpjzHbv4FGvdtj5wz0AC56gAQ_LPQC-AwLQUwBvdC-9cKn16NYwYzyUxe2Ke3OxodimR1QGI6Iih4idlUencoudUEF2oCXVoy5l9iMJg0w8zjliQAZqTfBN5HT90z16YAU9N3PNPPeJy9knpN3thY-xF3aI62ZrIwKStAZI7HkiZ_-OJ0ATAqigyqABSNBmFVPNII17O5mmgnad0xRwzUiFMFfs2piGOAGtJ1TuncIkW46OZnt6uifn6mef4IABnVAAC6j1oJAW_5BevZCmTYX4VIrydFhMyn2D5fqYVhZRHh2kdHcOjT0XnFcWZIQEglgkZOfpB4IgLxxCAAXjQAJXJSCmdQXTczCNLJg2tsdnaw6h1ab3futZ5aKxW-y7uUgBZMzMF-EATkXIYuU95QpymcAEDgFgQCugQIGDArFSCjR_JTEUvZaigV7TUOTbgxK7Qyf-DwCTjUZolhQS1hmAgolNQADlAQKUp6aRUMVGINGZ_oNCFs7C6Qch6NAtABAc0Ja5IXNARd3D9GYc6ZlCk3XBVNnJ7QIq-VfEZNX0t_BwEc6Sybt7HzG7ombg3qUpcZFl90BocP8fUtoDy-DDIrhIiMnTB3MuJTO9d7ZJXdhsAqzsILx02tFfoU98YUwQsjDsG-YAXCVADTmoAHgV4w8nWCqomVwjYFCMhYRPuf2CAGT4wApoqAGNrQAdh7fMAHAqgAQt0AHtqgBgGNz7yasuL8WEvuLdHVPvUCJDesQ1glAuBGSZCEvwM59oRhVSPsfvNJ_T7MHTVXMso-AMxeEJWkeHTpn0OikP4Qw8CXPwQd3MAonVhRFkYp1_b-ZxXMv_E7tzZ3BwCqup8hS9CwT8aAtQuA9Q2gaAY4Vw1coIVVudCpYlv84BACLBKVRxXdBol9CEPx1gt9qxPh1wQCuAABVGYZNWgR2GAVgMPZ_PfZTMPK2FcCAZoCMAAQmp1wRwFsDPAhXiAjEQPQl_0IVJC6GoMEJVQ5EYNIRgK93hRugENFxQIpQJHFVHFvzlQjj_x-xwNITQIIAwMoCwOyR0K7lwNSgsFSQMJuiMO9xCFH3H3v31hkL7wJR9XgM_wfiQKUOYKH0IXYHhnV18l_wyGYMSBsJgEkM9ycMNjHFQEGhugxS4LiMMIkKUJxVQDxVcLogjDQEGhMLDmhCgHkSiJrBcIHw0JdnNlYDQARELg5QjnIBeDGiYnqJdksnFDqPbUaSUO7gAPMOCXsHnzSGsP2igiTlKlHELlkJX250aV5gZTVxeSshuj_HGNPCEOySUOcLn3cGGMwgQJUK8JXD0PUNDgZSZUISuCWMWB-3bW5XOOUPdksLoOSJyL33yK7jjQ-M4BYOoEGN2IiJKPSP-IXzeMKW-N6JnyajeDCUjnVQpiuHVk51mgWJiMbmtzgHZwsSWBM3cIULuCUL-wEAHlDkYG2R6B3yxO3Uhh3zN0fGv04QxKpIiJoyORM2qxdnRXxwGKGLnViT-N5MwhVTvhUMf1oA2IZDyxWSkG2XaXyLpjwNZntHZk5imGvyMihxh0kADydzgHlxjxZzD2Ry0AoGAn0AYB1KD0aAVwIDDwTxMAr0AHYLQAeH1ABYFW73WCZIsULxnWnBSChLLwdOT3YEAFDFQAFQCXSPSH9Z0fT_Z7BnBnAlcMgYh4A_dUolSpgVSAU1SbSw8NSlAQA1ptgo1_w4BqB0czTQIQBY5-BHN-Arh-AfhixqgMhzQfwyRF46l-BWAMh8g3EkB2B-BKocBhykMQAuyQByhyB-gZhux_QBz-ALofpCJYAlZvQOzjgYAyRKBEhcw8gChI4zRzQmy_hSwFp1h-Aog0B6zBzZ41BSzzzqx-BMB5hww0oIB4AbyGVnysobz-AAA9UuHAJMHAUDcclcbjVSP8kAf89qHAIC9qR8_WS87SGgaCwC-C8BYCpCmscKdAapdCuCg6EcnCiwfgXnUQBckAA6bqHALAUi28jgvAQi0CgAdlAvAQYsbNpIsTgHQqAqAu6i4sEE1EtEiGgporovcwVM1NPNwF0EgBSFLPLO0Ax3NLAglhACWTJCyHrMbMDhgHNAovNFmBmH4HkAUEviAA",mdxType:"Playground"},function(e){Object(t.a)(n,e);var A=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=A.call(this,e)).formRef=p.a.createRef(),a}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(m.b)(c.a,{layout:"inline",labelCol:{span:4},wrapperCol:{span:20},ref:this.formRef,initialValues:{idCard:"420115199305126210"},onFinish:function(e){console.log("\u8868\u5355\u7ed3\u679c\uff1a",e)},mdxType:"Form"},Object(m.b)(i.a,{span:24,offset:2,style:{marginBottom:20},mdxType:"Col"},Object(m.b)(c.a.Item,{name:"",label:""},Object(m.b)(u.a,{type:"primary",onClick:function(){e.formRef.current.setFieldsValue({idCard:D.a.generateIdcard()})},mdxType:"Button"},"\u968f\u673a\u751f\u6210\u8eab\u4efd\u8bc1"))),Object(m.b)(i.a,{span:12,style:{marginBottom:20},mdxType:"Col"},Object(m.b)(c.a.Item,{name:"idCard",label:"\u8eab\u4efd\u8bc1",rules:[{required:!0}]},Object(m.b)(y,{onSuccess:function(A){return e.setState({values:A},(function(){e.formRef.current.setFieldsValue({sex:A.gender?"M"===A.gender?"1":"0":"",address:A.address||"",age:A.age||"",birthday:A.birthday?I()("".concat(A.birthday)):""})}))},mdxType:"IdCardInput"}))),Object(m.b)(i.a,{span:12,style:{marginBottom:20},mdxType:"Col"},Object(m.b)(c.a.Item,{name:"sex",label:"\u6027\u522b",rules:[{required:!0}]},Object(m.b)(l.a.Group,null,Object(m.b)(l.a,{value:"1",mdxType:"Radio"},"\u7537"),Object(m.b)(l.a,{value:"0",mdxType:"Radio"},"\u5973")))),Object(m.b)(i.a,{span:12,style:{marginBottom:20},mdxType:"Col"},Object(m.b)(c.a.Item,{name:"age",label:"\u5e74\u9f84",rules:[{required:!0}]},Object(m.b)(r.a,{mdxType:"Input"}))),Object(m.b)(i.a,{span:12,style:{marginBottom:20},mdxType:"Col"},Object(m.b)(c.a.Item,{name:"birthday",label:"\u751f\u65e5",rules:[{required:!0}]},Object(m.b)(d.a,{style:{width:"100%"},mdxType:"DatePicker"}))),Object(m.b)(i.a,{span:24,mdxType:"Col"},Object(m.b)(c.a.Item,Object.assign({},{labelCol:{span:2},wrapperCol:{span:22}},{name:"address",label:"\u5730\u5740",rules:[{required:!0}]}),Object(m.b)(r.a,{mdxType:"Input"}))),Object(m.b)(c.a.Item,null,Object(m.b)(u.a,{htmlType:"submit",mdxType:"Button"},"\u63d0\u4ea4")))}}]),n}(p.a.Component)),Object(m.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(m.b)(C.d,{of:y,mdxType:"Props"}))}F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/IdCardInput/IdCardInput.mdx"}}),F.isMDXComponent=!0}}]);