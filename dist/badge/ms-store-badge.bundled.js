let t;const i=new Uint8Array(16);function e(){if(!t&&(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(i)}const n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));var s={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function o(t,i,o){if(s.randomUUID&&!i&&!t)return s.randomUUID();const r=(t=t||{}).random||(t.rng||e)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,i){o=o||0;for(let t=0;t<16;++t)i[o+t]=r[t];return i}return function(t,i=0){return n[t[i+0]]+n[t[i+1]]+n[t[i+2]]+n[t[i+3]]+"-"+n[t[i+4]]+n[t[i+5]]+"-"+n[t[i+6]]+n[t[i+7]]+"-"+n[t[i+8]]+n[t[i+9]]+"-"+n[t[i+10]]+n[t[i+11]]+n[t[i+12]]+n[t[i+13]]+n[t[i+14]]+n[t[i+15]]}(r)}async function r(t,i,e={},n){const s=o(),r={...{method:"GET",headers:{Origin:"https://apps.microsoft.com",Referer:document.URL,"Access-Control-Request-Method":"GET","X-Correlation-Id":s,"Content-Type":"application/octet-stream"},cache:"no-cache",params:new URLSearchParams(n)},...e};let a=null;try{a=await fetch(`${n}`,r)}catch(i){window.location.href=`ms-windows-store://pdp/?productid=${t}&ocid=psi_f_svcna`}(null==a?void 0:a.ok)?async function(t){const e=t.headers.get("Content-Disposition");let n=`${i} Installer.exe`;if(e){const t=null==e?void 0:e.match(/filename\*=UTF-8''([\w%]*)/i);t&&t[1]&&(n=t[1])}const s=await t.blob(),o=URL.createObjectURL(s),r=document.createElement("a");r.href=o,r.download=decodeURIComponent(n),r.style.display="none",document.body.appendChild(r);try{r.click(),await new Promise((t=>setTimeout(t,1e3)))}catch(t){}finally{URL.revokeObjectURL(o),document.body.removeChild(r)}}(a):async function(i){const e=null==i?void 0:i.status;window.location.href=`ms-windows-store://pdp/?productid=${t}&ocid=psi_f_svc${e}`}(a)}let a=!1;var h,c,d,l,p,u,g,m,f,w=function(t,i,e,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof i?t!==i||!s:!i.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(t,e):s?s.value=e:i.set(t,e),e},v=function(t,i,e,n){if("a"===e&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof i?t!==i||!n:!i.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===e?n:"a"===e?n.call(t):n?n.value:i.get(t)};class y extends HTMLElement{constructor(){var t,i;super(),h.add(this),this.productId="",this.productName="",this.cid="",this.size="large",this.windowMode="direct",this.theme="dark",this.language="",this.animation="off",d.set(this,c.englishLanguage),l.set(this,"prod"),p.set(this,"dev"===v(this,l,"f")?"iframe.html":"https://get.microsoft.com/iframe.html"),u.set(this,"dev"===v(this,l,"f")?"/images":"https://get.microsoft.com/images"),g.set(this,{isWindows:!1,windowsVersion:null,isEdgeBrowser:!1}),m.set(this,!1),this.PSIDownloadUrl="https://get.microsoft.com/installer/download/",this.throttleDownload=(t=r,i=1500,async(...e)=>{if(!a){a=!0;try{await t(...e)}finally{setTimeout((()=>a=!1),i)}}}),this.imgPSIHandler=()=>this.throttleDownload(this.productId,this.productName,void 0,this.getPSIUrl()),this.imgPDPHandler=t=>this.launchApp(t),this.getPlatformDetails().then((t=>w(this,g,t,"f"))),w(this,d,c.getSupportedLanguageFromCode(this.language),"f"),this.language=v(this,d,"f").code;const e=this.attachShadow({mode:"open"}),n=this.createStyle(),s=this.createHtml();e.appendChild(n),e.appendChild(s)}updateImageSrc(){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("img");i&&(i.setAttribute("src",this.getImageSource()),i.className=this.getImageClass())}updateListeners(){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("img");null==i||i.removeEventListener("click",this.imgPDPHandler),null==i||i.removeEventListener("click",this.imgPSIHandler),"direct"===this.windowMode?null==i||i.addEventListener("click",this.imgPSIHandler):null==i||i.addEventListener("click",this.imgPDPHandler)}connectedCallback(){}static get observedAttributes(){return["productid","productname","cid","window-mode","theme","size","language","animation"]}attributeChangedCallback(t,i,e){var n;"size"!==t||"large"!==e&&"small"!==e||i===e?"language"!==t||e===i||"string"!=typeof e&&e?"productid"===t&&e!==i&&"string"==typeof e?this.productId=e:"productname"===t&&e!==i&&"string"==typeof e?this.productName=e:"cid"===t&&e!==i&&"string"==typeof e?this.cid=e:"window-mode"!==t||"popup"!==e&&"full"!==e&&"direct"!==e||i===e?"theme"!==t||"dark"!=e&&"light"!==e&&"auto"!==e||i===e?"animation"!==t||"on"!==e&&"off"!==e||i===e||(this.animation=e,null===(n=this.shadowRoot)||void 0===n||n.appendChild(this.createStyle())):(this.theme=e,this.updateImageSrc()):(this.windowMode=e,this.updateImageSrc(),this.updateListeners()):(w(this,d,c.getSupportedLanguageFromCode(e),"f"),this.language=v(this,d,"f").code,this.updateImageSrc()):(this.size=e,this.updateImageSrc())}createStyle(){var t="";t="on"===this.animation?"\n      :host {\n        display: inline-block;\n        cursor: pointer;\n        height: fit-content;\n      }\n\n      iframe {\n        border: none;\n        width: 0px;\n        height: 0px;\n      }\n\n      img {\n        border-radius: 8px;\n        transition: 0.35s ease;\n      }\n      \n      img:hover {\n        transform: translate(0, -4px);\n        cursor: pointer;\n        box-shadow: 0 12px 40px 20px rgba(0, 0, 0, 0.05);\n      }\n\n      img.small {\n        max-height: 52px;\n      }\n\n      img.large {\n        max-height: 104px;\n        height: 864px;\n      }":"\n      :host {\n        display: inline-block;\n        cursor: pointer;\n        height: fit-content;\n      }\n\n      iframe {\n        border: none;\n        width: 0px;\n        height: 0px;\n      }\n\n      img {\n        width: auto;\n        border-radius: 8px;\n      }\n\n      img.small {\n        max-height: 52px;\n      }\n\n      img.large {\n        max-height: 104px;\n        height: 864px;\n      }";const i=document.createElement("style");return i.textContent=t,i}createHtml(){const t=document.createElement("div");return t.appendChild(this.createImage()),t.appendChild(this.createIFrame()),t}async getPlatformDetails(){const t=navigator;if(t.userAgentData&&t.userAgentData.getHighEntropyValues)try{const i=await t.userAgentData.getHighEntropyValues(["platform","platformVersion"]),e="Windows"===i.platform;return{isWindows:e,windowsVersion:e?parseFloat((null==i?void 0:i.platformVersion)||""):null,isEdgeBrowser:(t.userAgentData.brands||[]).some((t=>"Microsoft Edge"===t.brand))}}catch(t){}const i=new RegExp(/.?Windows NT (\d+\.?\d?\.?\d?\.?\d?)/gi).exec(navigator.userAgent);return i&&i.length>=2?{isWindows:!0,windowsVersion:parseFloat(i[1]),isEdgeBrowser:!!navigator.userAgent.match("Edg/")}:{isWindows:!1,windowsVersion:null,isEdgeBrowser:!!navigator.userAgent.match("Edg/")}}static getSupportedLanguageFromCode(t){if(!t)return c.getSupportedLanguageFromUserAgent();const i=c.supportedLanguages.find((i=>i.code===t.toLowerCase()))||c.supportedLanguages.find((i=>i.code.substring(0,3)===t.toLowerCase()))||c.supportedLanguages.find((i=>i.code.substring(0,2)===t.toLowerCase()));return i||c.englishLanguage}static getSupportedLanguageFromUserAgent(){const t=c.supportedLanguages.find((t=>t.name===navigator.language));if(t)return t;if(navigator.languages){var i=navigator.languages.map((t=>c.supportedLanguages.find((i=>i.code===t)))).find((t=>!!t));if(i)return i}const e=navigator.language.indexOf("-");if(e>0){const t=navigator.language.substring(0,e),i=c.supportedLanguages.find((i=>i.name===t));if(i)return i}return c.englishLanguage}createIFrame(){const t=document.createElement("iframe");return t.setAttribute("loading","eager"),t.title="Microsoft Store App Badge",t.src=v(this,p,"f"),t}createImage(){const t=document.createElement("img");return t.setAttribute("part","img"),t.src=this.getImageSource(),t.className=this.getImageClass(),t.alt="Microsoft Store app badge","direct"===this.windowMode?t.addEventListener("click",this.imgPSIHandler):t.addEventListener("click",this.imgPDPHandler),t}getImageSource(){var t=null;if("dark"===this.theme)t="large"===this.size?v(this,d,"f").imageLarge.fileName:v(this,d,"f").imageSmall.fileName;else if("light"===this.theme)t="large"===this.size?v(this,d,"f").imageLargeLight.fileName:v(this,d,"f").imageSmall.fileName;else if("auto"===this.theme){t=window.matchMedia("(prefers-color-scheme:dark)").matches?"large"===this.size?v(this,d,"f").imageLargeLight.fileName:v(this,d,"f").imageSmall.fileName:"large"===this.size?v(this,d,"f").imageLarge.fileName:v(this,d,"f").imageSmall.fileName}return`${v(this,u,"f")}/${t}`}getImageClass(){return"large"===this.size?"large":"small"}launchApp(t){this.productId&&(v(this,g,"f").isWindows&&v(this,g,"f").isEdgeBrowser?this.launchStoreAppPdpViaWhitelistedDomain():v(this,g,"f").isWindows?this.launchStoreAppPdp():this.launchStoreWebPdp(t))}getPSIUrl(){return`${this.PSIDownloadUrl}${this.productId.toUpperCase()}?referrer=appbadge&source=${encodeURIComponent(window.location.hostname.toLowerCase())}`}launchStoreAppPdp(){const t=new URLSearchParams;if(t.append("productid",this.productId),t.append("referrer","appbadge"),t.append("source",window.location.hostname.toLowerCase()),this.cid&&t.append("cid",this.cid),"popup"===this.windowMode){t.append("mode","mini");const i=[Math.floor(window.screenLeft*window.devicePixelRatio),Math.floor(window.screenTop*window.devicePixelRatio),Math.floor(window.outerWidth*window.devicePixelRatio),Math.floor(window.outerHeight*window.devicePixelRatio)];t.append("pos",i.join(","))}location.href="ms-windows-store://pdp/?"+t.toString()}launchStoreAppPdpViaWhitelistedDomain(){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("iframe");if(!v(this,m,"f")&&i&&i.contentWindow){v(this,h,"m",f).call(this);const t={message:"launch",productId:this.productId,cid:this.cid,windowMode:this.windowMode,source:window.location.hostname};i.contentWindow.postMessage(t,"*")}else this.launchStoreAppPdp()}launchStoreWebPdp(t){var i="";i=this.cid?`https://apps.microsoft.com/store/detail/${this.productId}?cid=${encodeURIComponent(this.cid)}&referrer=appbadge&source=${encodeURIComponent(window.location.hostname.toLowerCase())}`:`https://apps.microsoft.com/store/detail/${this.productId}?referrer=appbadge&source=${encodeURIComponent(window.location.hostname.toLowerCase())}`,t.ctrlKey?window.open(i,"_blank"):window.location.href=i}static createSupportedLanguages(){let t=new Map;t.set("Afrikaans","af-za"),t.set("Arabic","ar-sa"),t.set("Belarusian","be"),t.set("Bulgarian","bg-bg"),t.set("Bengali","bn"),t.set("Bosnian","bs"),t.set("Catalan","ca-es"),t.set("Czech","cs-cz"),t.set("Welsh","cy-gb"),t.set("Danish","da-dk"),t.set("German","de-de"),t.set("Greek","el-gr"),t.set("English","en-us"),t.set("Spanish","es-es"),t.set("Estonian","et-ee"),t.set("Persian","fa-ir"),t.set("Finnish","fi-fi"),t.set("Filipino","fil"),t.set("French","fr-ca"),t.set("Galician","gl-es"),t.set("Hebrew","he-il"),t.set("Hindi","hi-in"),t.set("Croatian","hr-hr"),t.set("Hungarian","hu-hu"),t.set("Indonesian","id-id"),t.set("Icelandic","is-is"),t.set("Italian","it-it"),t.set("Japanese","ja-jp"),t.set("Georgian","ka-ge"),t.set("Kazakh","kk-kz"),t.set("Korean","ko-kr"),t.set("Lithuanian","lt-lt"),t.set("Latvian","lv-lv"),t.set("Malay","ms-my"),t.set("Norwegian","nb-no"),t.set("Dutch","nl-nl"),t.set("Polish","pl-pl"),t.set("Portuguese_Brazil","pt-br"),t.set("Portuguese_Portugal","pt-pt"),t.set("Romanian","ro-ro"),t.set("Russian","ru-ru"),t.set("Slovak","sk-sk"),t.set("Slovenian","sl-si"),t.set("Serbian","sr-cyrl-rs"),t.set("Swedish","sv-se"),t.set("Swahili","sw"),t.set("Thai","th-th"),t.set("Turkish","tr-tr"),t.set("Ukrainian","uk-ua"),t.set("Vietnamese","vi-vn"),t.set("Chinese_Simplified","zh-cn"),t.set("Chinese_Traditional","zh-tw");let i=[];for(let e of t.keys()){let n={name:e,imageLarge:{fileName:t.get(e).concat(" ").concat("dark.svg")},imageLargeLight:{fileName:t.get(e).concat(" ").concat("light.svg")},imageSmall:{fileName:e.concat("_S.png")},code:t.get(e)||""};i.push(n)}return i}}c=y,d=new WeakMap,l=new WeakMap,p=new WeakMap,u=new WeakMap,g=new WeakMap,m=new WeakMap,h=new WeakSet,f=function(){const t="securitypolicyviolation",i=i=>{"frame-src"===i.violatedDirective&&i.type===t&&(w(this,m,!0,"f"),this.launchStoreAppPdp())};document.addEventListener(t,i,{once:!0}),setTimeout((()=>document.removeEventListener(t,i)),2e3)},y.englishLanguage={name:"English",code:"en-us",imageSmall:{fileName:"English_S.png"},imageLarge:{fileName:"en-us dark.svg"},imageLargeLight:{fileName:"en-us light.svg"}},y.supportedLanguages=c.createSupportedLanguages(),customElements.define("ms-store-badge",y);
