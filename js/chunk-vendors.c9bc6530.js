(self["webpackChunkloginform"]=self["webpackChunkloginform"]||[]).push([[504],{6743:function(t,e,n){"use strict";n.d(e,{Am:function(){return U},FA:function(){return R},Fy:function(){return w},I9:function(){return B},Im:function(){return D},Ku:function(){return q},T9:function(){return _},Tj:function(){return m},Uj:function(){return c},XA:function(){return v},ZQ:function(){return b},bD:function(){return F},c1:function(){return S},cY:function(){return y},eX:function(){return A},g:function(){return L},hp:function(){return z},jZ:function(){return T},lT:function(){return C},lV:function(){return x},nr:function(){return P},sr:function(){return I},tD:function(){return V},u:function(){return u},yU:function(){return g},zW:function(){return k}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,a=s?n[t.charAt(r)]:0;++r;const c=r<t.length,u=c?n[t.charAt(r)]:64;++r;const l=r<t.length,h=l?n[t.charAt(r)]:64;if(++r,null==e||null==a||null==u||null==h)throw new o;const d=e<<2|a>>4;if(i.push(d),64!==u){const t=a<<4&240|u>>2;if(i.push(t),64!==h){const t=u<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/Vue-app/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},v=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function E(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function S(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function I(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function x(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function P(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"===typeof indexedDB}catch(t){return!1}}function A(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class L extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?N(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new L(i,o,n);return a}}function N(t,e){return t.replace(M,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(j(n)&&j(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function B(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function z(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){const n=new H(t,e);return n.subscribe.bind(n)}class H{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=$(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Z),void 0===i.error&&(i.error=Z),void 0===i.complete&&(i.complete=Z);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function Z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){return t&&t._delegate?t._delegate:t}},953:function(t,e,n){"use strict";n.d(e,{C4:function(){return S},EW:function(){return Ft},Gc:function(){return _t},IG:function(){return It},IJ:function(){return At},KR:function(){return kt},Kh:function(){return gt},Pr:function(){return Mt},R1:function(){return Rt},X2:function(){return u},bl:function(){return I},hV:function(){return Ht},hZ:function(){return D},i9:function(){return Pt},ju:function(){return Et},u4:function(){return M},ux:function(){return St},wB:function(){return Vt},yC:function(){return o}});var i=n(33);
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let r,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=r,!t&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=r;try{return r=this,t()}finally{r=e}}else 0}on(){r=this}off(){r=this.parent}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return r}const c=new WeakSet;class u{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,r&&r.active&&r.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,x(this),g(this);const t=s,e=T;s=this,T=!0;try{return this.fn()}finally{0,_(this),s=t,T=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)w(t);this.deps=this.depsTail=void 0,x(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let l,h,d=0;function f(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=l,l=t}function p(){d++}function m(){if(--d>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(l){let n=l;l=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=i}}if(t)throw t}function g(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _(t){let e,n=t.depsTail,i=n;while(i){const t=i.prevDep;-1===i.version?(i===n&&(n=t),w(i),b(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=t}t.deps=e,t.depsTail=n}function v(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(y(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function y(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===C)return;t.globalVersion=C;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!v(t))return void(t.flags&=-3);const n=s,r=T;s=t,T=!0;try{g(t);const n=t.fn(t._value);(0===e.version||(0,i.$H)(n,t._value))&&(t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,T=r,_(t),t.flags&=-3}}function w(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)w(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function b(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let T=!0;const E=[];function S(){E.push(T),T=!1}function I(){const t=E.pop();T=void 0===t||t}function x(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let C=0;class P{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class k{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!s||!T||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new P(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,A(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,C++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{m()}}}function A(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)A(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const O=new WeakMap,L=Symbol(""),R=Symbol(""),N=Symbol("");function M(t,e,n){if(T&&s){let e=O.get(t);e||O.set(t,e=new Map);let i=e.get(n);i||(e.set(n,i=new k),i.map=e,i.key=n),i.track()}}function D(t,e,n,r,s,o){const a=O.get(t);if(!a)return void C++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const s=(0,i.cy)(t),o=s&&(0,i.yI)(n);if(s&&"length"===n){const t=Number(r);a.forEach(((e,n)=>{("length"===n||n===N||!(0,i.Bm)(n)&&n>=t)&&c(e)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(N)),e){case"add":s?o&&c(a.get("length")):(c(a.get(L)),(0,i.CE)(t)&&c(a.get(R)));break;case"delete":s||(c(a.get(L)),(0,i.CE)(t)&&c(a.get(R)));break;case"set":(0,i.CE)(t)&&c(a.get(L));break}}m()}function F(t){const e=St(t);return e===t?e:(M(e,"iterate",N),Tt(t)?e:e.map(xt))}function j(t){return M(t=St(t),"iterate",N),t}const U={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,xt)},concat(...t){return F(this).concat(...t.map((t=>(0,i.cy)(t)?F(t):t)))},entries(){return B(this,"entries",(t=>(t[1]=xt(t[1]),t)))},every(t,e){return V(this,"every",t,e,void 0,arguments)},filter(t,e){return V(this,"filter",t,e,(t=>t.map(xt)),arguments)},find(t,e){return V(this,"find",t,e,xt,arguments)},findIndex(t,e){return V(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return V(this,"findLast",t,e,xt,arguments)},findLastIndex(t,e){return V(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return V(this,"forEach",t,e,void 0,arguments)},includes(...t){return $(this,"includes",t)},indexOf(...t){return $(this,"indexOf",t)},join(t){return F(this).join(t)},lastIndexOf(...t){return $(this,"lastIndexOf",t)},map(t,e){return V(this,"map",t,e,void 0,arguments)},pop(){return Z(this,"pop")},push(...t){return Z(this,"push",t)},reduce(t,...e){return H(this,"reduce",t,e)},reduceRight(t,...e){return H(this,"reduceRight",t,e)},shift(){return Z(this,"shift")},some(t,e){return V(this,"some",t,e,void 0,arguments)},splice(...t){return Z(this,"splice",t)},toReversed(){return F(this).toReversed()},toSorted(t){return F(this).toSorted(t)},toSpliced(...t){return F(this).toSpliced(...t)},unshift(...t){return Z(this,"unshift",t)},values(){return B(this,"values",xt)}};function B(t,e,n){const i=j(t),r=i[e]();return i===t||Tt(t)||(r._next=r.next,r.next=()=>{const t=r._next();return t.value&&(t.value=n(t.value)),t}),r}const z=Array.prototype;function V(t,e,n,i,r,s){const o=j(t),a=o!==t&&!Tt(t),c=o[e];if(c!==z[e]){const e=c.apply(t,s);return a?xt(e):e}let u=n;o!==t&&(a?u=function(e,i){return n.call(this,xt(e),i,t)}:n.length>2&&(u=function(e,i){return n.call(this,e,i,t)}));const l=c.call(o,u,i);return a&&r?r(l):l}function H(t,e,n,i){const r=j(t);let s=n;return r!==t&&(Tt(t)?n.length>3&&(s=function(e,i,r){return n.call(this,e,i,r,t)}):s=function(e,i,r){return n.call(this,e,xt(i),r,t)}),r[e](s,...i)}function $(t,e,n){const i=St(t);M(i,"iterate",N);const r=i[e](...n);return-1!==r&&!1!==r||!Et(n[0])?r:(n[0]=St(n[0]),i[e](...n))}function Z(t,e,n=[]){S(),p();const i=St(t)[e].apply(t,n);return m(),I(),i}const q=(0,i.pD)("__proto__,__v_isRef,__isVue"),W=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(i.Bm));function K(t){(0,i.Bm)(t)||(t=String(t));const e=St(this);return M(e,"has",t),e.hasOwnProperty(t)}class G{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!r;if("__v_isReadonly"===e)return r;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(r?s?ft:dt:s?ht:lt).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,i.cy)(t);if(!r){let t;if(o&&(t=U[e]))return t;if("hasOwnProperty"===e)return K}const a=Reflect.get(t,e,Pt(t)?t:n);return((0,i.Bm)(e)?W.has(e):q(e))?a:(r||M(t,"get",e),s?a:Pt(a)?o&&(0,i.yI)(e)?a:a.value:(0,i.Gv)(a)?r?vt(a):gt(a):a)}}class Q extends G{constructor(t=!1){super(!1,t)}set(t,e,n,r){let s=t[e];if(!this._isShallow){const e=bt(s);if(Tt(n)||bt(n)||(s=St(s),n=St(n)),!(0,i.cy)(t)&&Pt(s)&&!Pt(n))return!e&&(s.value=n,!0)}const o=(0,i.cy)(t)&&(0,i.yI)(e)?Number(e)<t.length:(0,i.$3)(t,e),a=Reflect.set(t,e,n,Pt(t)?t:r);return t===St(r)&&(o?(0,i.$H)(n,s)&&D(t,"set",e,n,s):D(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,i.$3)(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&D(t,"delete",e,void 0,r),s}has(t,e){const n=Reflect.has(t,e);return(0,i.Bm)(e)&&W.has(e)||M(t,"has",e),n}ownKeys(t){return M(t,"iterate",(0,i.cy)(t)?"length":L),Reflect.ownKeys(t)}}class X extends G{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const J=new Q,Y=new X,tt=new Q(!0),et=t=>t,nt=t=>Reflect.getPrototypeOf(t);function it(t,e,n){return function(...r){const s=this["__v_raw"],o=St(s),a=(0,i.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...r),h=n?et:e?Ct:xt;return!e&&M(o,"iterate",u?R:L),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function st(t,e){const n={get(n){const r=this["__v_raw"],s=St(r),o=St(n);t||((0,i.$H)(n,o)&&M(s,"get",n),M(s,"get",o));const{has:a}=nt(s),c=e?et:t?Ct:xt;return a.call(s,n)?c(r.get(n)):a.call(s,o)?c(r.get(o)):void(r!==s&&r.get(n))},get size(){const e=this["__v_raw"];return!t&&M(St(e),"iterate",L),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],r=St(n),s=St(e);return t||((0,i.$H)(e,s)&&M(r,"has",e),M(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,i){const r=this,s=r["__v_raw"],o=St(s),a=e?et:t?Ct:xt;return!t&&M(o,"iterate",L),s.forEach(((t,e)=>n.call(i,a(t),a(e),r)))}};(0,i.X$)(n,t?{add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear")}:{add(t){e||Tt(t)||bt(t)||(t=St(t));const n=St(this),i=nt(n),r=i.has.call(n,t);return r||(n.add(t),D(n,"add",t,t)),this},set(t,n){e||Tt(n)||bt(n)||(n=St(n));const r=St(this),{has:s,get:o}=nt(r);let a=s.call(r,t);a||(t=St(t),a=s.call(r,t));const c=o.call(r,t);return r.set(t,n),a?(0,i.$H)(n,c)&&D(r,"set",t,n,c):D(r,"add",t,n),this},delete(t){const e=St(this),{has:n,get:i}=nt(e);let r=n.call(e,t);r||(t=St(t),r=n.call(e,t));const s=i?i.call(e,t):void 0,o=e.delete(t);return r&&D(e,"delete",t,void 0,s),o},clear(){const t=St(this),e=0!==t.size,n=void 0,i=t.clear();return e&&D(t,"clear",void 0,void 0,n),i}});const r=["keys","values","entries",Symbol.iterator];return r.forEach((i=>{n[i]=it(i,t,e)})),n}function ot(t,e){const n=st(t,e);return(e,r,s)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get((0,i.$3)(n,r)&&r in e?n:e,r,s)}const at={get:ot(!1,!1)},ct={get:ot(!1,!0)},ut={get:ot(!0,!1)};const lt=new WeakMap,ht=new WeakMap,dt=new WeakMap,ft=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt((0,i.Zf)(t))}function gt(t){return bt(t)?t:yt(t,!1,J,at,lt)}function _t(t){return yt(t,!1,tt,ct,ht)}function vt(t){return yt(t,!0,Y,ut,dt)}function yt(t,e,n,r,s){if(!(0,i.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=mt(t);if(0===a)return t;const c=new Proxy(t,2===a?r:n);return s.set(t,c),c}function wt(t){return bt(t)?wt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function bt(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function Et(t){return!!t&&!!t["__v_raw"]}function St(t){const e=t&&t["__v_raw"];return e?St(e):t}function It(t){return!(0,i.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,i.yQ)(t,"__v_skip",!0),t}const xt=t=>(0,i.Gv)(t)?gt(t):t,Ct=t=>(0,i.Gv)(t)?vt(t):t;function Pt(t){return!!t&&!0===t["__v_isRef"]}function kt(t){return Ot(t,!1)}function At(t){return Ot(t,!0)}function Ot(t,e){return Pt(t)?t:new Lt(t,e)}class Lt{constructor(t,e){this.dep=new k,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:St(t),this._value=e?t:xt(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Tt(t)||bt(t);t=n?t:St(t),(0,i.$H)(t,e)&&(this._rawValue=t,this._value=n?t:xt(t),this.dep.trigger())}}function Rt(t){return Pt(t)?t.value:t}const Nt={get:(t,e,n)=>"__v_raw"===e?t:Rt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Pt(r)&&!Pt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Mt(t){return wt(t)?t:new Proxy(t,Nt)}class Dt{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new k(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=C-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this,!0),!0}get value(){const t=this.dep.track();return y(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ft(t,e,n=!1){let r,s;(0,i.Tn)(t)?r=t:(r=t.get,s=t.set);const o=new Dt(r,s,n);return o}const jt={},Ut=new WeakMap;let Bt;function zt(t,e=!1,n=Bt){if(n){let e=Ut.get(n);e||Ut.set(n,e=[]),e.push(t)}else 0}function Vt(t,e,n=i.MZ){const{immediate:r,deep:s,once:o,scheduler:c,augmentJob:l,call:h}=n,d=t=>s?t:Tt(t)||!1===s||0===s?Ht(t,1):Ht(t);let f,p,m,g,_=!1,v=!1;if(Pt(t)?(p=()=>t.value,_=Tt(t)):wt(t)?(p=()=>d(t),_=!0):(0,i.cy)(t)?(v=!0,_=t.some((t=>wt(t)||Tt(t))),p=()=>t.map((t=>Pt(t)?t.value:wt(t)?d(t):(0,i.Tn)(t)?h?h(t,2):t():void 0))):p=(0,i.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(m){S();try{m()}finally{I()}}const e=Bt;Bt=f;try{return h?h(t,3,[g]):t(g)}finally{Bt=e}}:i.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>Ht(t(),e)}const y=a(),w=()=>{f.stop(),y&&y.active&&(0,i.TF)(y.effects,f)};if(o&&e){const t=e;e=(...e)=>{t(...e),w()}}let b=v?new Array(t.length).fill(jt):jt;const T=t=>{if(1&f.flags&&(f.dirty||t))if(e){const t=f.run();if(s||_||(v?t.some(((t,e)=>(0,i.$H)(t,b[e]))):(0,i.$H)(t,b))){m&&m();const n=Bt;Bt=f;try{const n=[t,b===jt?void 0:v&&b[0]===jt?[]:b,g];h?h(e,3,n):e(...n),b=t}finally{Bt=n}}}else f.run()};return l&&l(T),f=new u(p),f.scheduler=c?()=>c(T,!1):T,g=t=>zt(t,!1,f),m=f.onStop=()=>{const t=Ut.get(f);if(t){if(h)h(t,4);else for(const e of t)e();Ut.delete(f)}},e?r?T(!0):b=f.run():c?c(T.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function Ht(t,e=1/0,n){if(e<=0||!(0,i.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,Pt(t))Ht(t.value,e,n);else if((0,i.cy)(t))for(let i=0;i<t.length;i++)Ht(t[i],e,n);else if((0,i.vM)(t)||(0,i.CE)(t))t.forEach((t=>{Ht(t,e,n)}));else if((0,i.Qd)(t)){for(const i in t)Ht(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ht(t[i],e,n)}return t}},641:function(t,e,n){"use strict";n.d(e,{$u:function(){return st},CE:function(){return We},Df:function(){return z},EW:function(){return Nn},FK:function(){return De},Gt:function(){return zt},Gy:function(){return M},K9:function(){return ue},Lk:function(){return Ye},MZ:function(){return B},OW:function(){return U},Q3:function(){return on},QP:function(){return F},WQ:function(){return Vt},bF:function(){return tn},bo:function(){return k},dY:function(){return g},eW:function(){return sn},g2:function(){return ft},h:function(){return Mn},k6:function(){return P},nI:function(){return gn},pM:function(){return V},qL:function(){return o},uX:function(){return Ve},wB:function(){return we}});var i=n(953),r=n(33);function s(t,e,n,i){try{return i?t(...i):t()}catch(r){a(r,e,n)}}function o(t,e,n,i){if((0,r.Tn)(t)){const o=s(t,e,n,i);return o&&(0,r.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,r.cy)(t)){const r=[];for(let s=0;s<t.length;s++)r.push(o(t[s],e,n,i));return r}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||r.MZ;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;r=r.parent}if(u)return(0,i.C4)(),s(u,null,10,[t,o,a]),void(0,i.bl)()}c(t,n,a,o,l)}function c(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const u=[];let l=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let m=null;function g(t){const e=m||p;return t?e.then(this?t.bind(this):t):e}function _(t){let e=l+1,n=u.length;while(e<n){const i=e+n>>>1,r=u[i],s=E(r);s<t||s===t&&2&r.flags?e=i+1:n=i}return e}function v(t){if(!(1&t.flags)){const e=E(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=E(n)?u.push(t):u.splice(_(e),0,t),t.flags|=1,y()}}function y(){m||(m=p.then(S))}function w(t){(0,r.cy)(t)?h.push(...t):d&&-1===t.id?d.splice(f+1,0,t):1&t.flags||(h.push(t),t.flags|=1),y()}function b(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function T(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>E(t)-E(e)));if(h.length=0,d)return void d.push(...t);for(d=t,f=0;f<d.length;f++){const t=d[f];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}d=null,f=0}}const E=t=>null==t.id?2&t.flags?-1:1/0:t.id;function S(t){r.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,T(t),m=null,(u.length||h.length)&&S(t)}}let I=null,x=null;function C(t){const e=I;return I=t,x=t&&t.type.__scopeId||null,e}function P(t,e=I,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&Ze(-1);const r=C(e);let s;try{s=t(...n)}finally{C(r),i._d&&Ze(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function k(t,e){if(null===I)return t;const n=On(I),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,c,u=r.MZ]=e[o];t&&((0,r.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,i.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function A(t,e,n,r){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[r];l&&((0,i.C4)(),o(l,n,8,[t.el,u,t,e]),(0,i.bl)())}}const O=Symbol("_vte"),L=t=>t.__isTeleport;const R=Symbol("_leaveCb"),N=Symbol("_enterCb");function M(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return it((()=>{t.isMounted=!0})),ot((()=>{t.isUnmounting=!0})),t}const D=[Function,Array],F={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:D,onEnter:D,onAfterEnter:D,onEnterCancelled:D,onBeforeLeave:D,onLeave:D,onAfterLeave:D,onLeaveCancelled:D,onBeforeAppear:D,onAppear:D,onAfterAppear:D,onAppearCancelled:D};function j(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function U(t,e,n,i,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=e,T=String(t.key),E=j(n,t),S=(t,e)=>{t&&o(t,i,9,e)},I=(t,e)=>{const n=e[1];S(t,e),(0,r.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},x={mode:c,persisted:u,beforeEnter(e){let i=l;if(!n.isMounted){if(!a)return;i=v||l}e[R]&&e[R](!0);const r=E[T];r&&Qe(t,r)&&r.el[R]&&r.el[R](),S(i,[e])},enter(t){let e=h,i=d,r=f;if(!n.isMounted){if(!a)return;e=y||h,i=w||d,r=b||f}let s=!1;const o=t[N]=e=>{s||(s=!0,S(e?r:i,[t]),x.delayedLeave&&x.delayedLeave(),t[N]=void 0)};e?I(e,[t,o]):o()},leave(e,i){const r=String(t.key);if(e[N]&&e[N](!0),n.isUnmounting)return i();S(p,[e]);let s=!1;const o=e[R]=n=>{s||(s=!0,i(),S(n?_:g,[e]),e[R]=void 0,E[r]===t&&delete E[r])};E[r]=t,m?I(m,[e,o]):o()},clone(t){const r=U(t,e,n,i,s);return s&&s(r),r}};return x}function B(t,e){6&t.shapeFlag&&t.component?(t.transition=e,B(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function z(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===De?(128&o.patchFlag&&r++,i=i.concat(z(o.children,e,a))):(e||o.type!==je)&&i.push(null!=a?rn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function V(t,e){return(0,r.Tn)(t)?(()=>(0,r.X$)({name:t.name},e,{setup:t}))():t}function H(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $(t,e,n,o,a=!1){if((0,r.cy)(t))return void t.forEach(((t,i)=>$(t,e&&((0,r.cy)(e)?e[i]:e),n,o,a)));if(Z(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&$(t,e,n,o.component.subTree));const c=4&o.shapeFlag?On(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===r.MZ?l.refs={}:l.refs,p=l.setupState,m=(0,i.ux)(p),g=p===r.MZ?()=>!1:t=>(0,r.$3)(m,t);if(null!=d&&d!==h&&((0,r.Kg)(d)?(f[d]=null,g(d)&&(p[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,r.Tn)(h))s(h,l,12,[u,f]);else{const e=(0,r.Kg)(h),s=(0,i.i9)(h);if(e||s){const i=()=>{if(t.f){const n=e?g(h)?p[h]:f[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,c):(0,r.cy)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],g(h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,g(h)&&(p[h]=u)):s&&(h.value=u,t.k&&(f[t.k]=u))};u?(i.id=-1,ce(i,n)):i()}else 0}}(0,r.We)().requestIdleCallback,(0,r.We)().cancelIdleCallback;const Z=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const q=t=>t.type.__isKeepAlive;RegExp,RegExp;function W(t,e){return(0,r.cy)(t)?t.some((t=>W(t,e))):(0,r.Kg)(t)?t.split(",").includes(e):!!(0,r.gd)(t)&&(t.lastIndex=0,t.test(e))}function K(t,e){Q(t,"a",e)}function G(t,e){Q(t,"da",e)}function Q(t,e,n=mn){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(tt(e,i,n),n){let t=n.parent;while(t&&t.parent)q(t.parent.vnode)&&X(i,e,n,t),t=t.parent}}function X(t,e,n,i){const s=tt(e,t,i,!0);at((()=>{(0,r.TF)(i[e],s)}),n)}function J(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Y(t){return 128&t.shapeFlag?t.ssContent:t}function tt(t,e,n=mn,r=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...r)=>{(0,i.C4)();const s=yn(n),a=o(e,n,t,r);return s(),(0,i.bl)(),a});return r?s.unshift(a):s.push(a),a}}const et=t=>(e,n=mn)=>{Sn&&"sp"!==t||tt(t,((...t)=>e(...t)),n)},nt=et("bm"),it=et("m"),rt=et("bu"),st=et("u"),ot=et("bum"),at=et("um"),ct=et("sp"),ut=et("rtg"),lt=et("rtc");function ht(t,e=mn){tt("ec",t,e)}const dt="components";function ft(t,e){return mt(dt,t,!0,e)||t}const pt=Symbol.for("v-ndc");function mt(t,e,n=!0,i=!1){const s=I||mn;if(s){const n=s.type;if(t===dt){const t=Ln(n,!1);if(t&&(t===e||t===(0,r.PT)(e)||t===(0,r.ZH)((0,r.PT)(e))))return n}const o=gt(s[t]||n[t],e)||gt(s.appContext[t],e);return!o&&i?n:o}}function gt(t,e){return t&&(t[e]||t[(0,r.PT)(e)]||t[(0,r.ZH)((0,r.PT)(e))])}const _t=t=>t?bn(t)?On(t):_t(t.parent):null,vt=(0,r.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_t(t.parent),$root:t=>_t(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ct(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=g.bind(t.proxy)),$watch:t=>Te.bind(t)}),yt=(t,e)=>t!==r.MZ&&!t.__isScriptSetup&&(0,r.$3)(t,e),wt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const i=c[e];if(void 0!==i)switch(i){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(yt(s,e))return c[e]=1,s[e];if(o!==r.MZ&&(0,r.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,r.$3)(h,e))return c[e]=3,a[e];if(n!==r.MZ&&(0,r.$3)(n,e))return c[e]=4,n[e];Tt&&(c[e]=0)}}const d=vt[e];let f,p;return d?("$attrs"===e&&(0,i.u4)(t.attrs,"get",""),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==r.MZ&&(0,r.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,r.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return yt(s,e)?(s[e]=n,!0):i!==r.MZ&&(0,r.$3)(i,e)?(i[e]=n,!0):!(0,r.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==r.MZ&&(0,r.$3)(t,a)||yt(e,a)||(c=o[0])&&(0,r.$3)(c,a)||(0,r.$3)(i,a)||(0,r.$3)(vt,a)||(0,r.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,r.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bt(t){return(0,r.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Tt=!0;function Et(t){const e=Ct(t),n=t.proxy,s=t.ctx;Tt=!1,e.beforeCreate&&It(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:_,deactivated:v,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:T,render:E,renderTracked:S,renderTriggered:I,errorCaptured:x,serverPrefetch:C,expose:P,inheritAttrs:k,components:A,directives:O,filters:L}=e,R=null;if(h&&St(h,s,R),c)for(const i in c){const t=c[i];(0,r.Tn)(t)&&(s[i]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,r.Gv)(e)&&(t.data=(0,i.Kh)(e))}if(Tt=!0,a)for(const i in a){const t=a[i],e=(0,r.Tn)(t)?t.bind(n,n):(0,r.Tn)(t.get)?t.get.bind(n,n):r.tE;0;const o=!(0,r.Tn)(t)&&(0,r.Tn)(t.set)?t.set.bind(n):r.tE,c=Nn({get:e,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const i in u)xt(u[i],s,n,i);if(l){const t=(0,r.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{zt(e,t[e])}))}function N(t,e){(0,r.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&It(d,t,"c"),N(nt,f),N(it,p),N(rt,m),N(st,g),N(K,_),N(G,v),N(ht,x),N(lt,S),N(ut,I),N(ot,w),N(at,T),N(ct,C),(0,r.cy)(P))if(P.length){const e=t.exposed||(t.exposed={});P.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});E&&t.render===r.tE&&(t.render=E),null!=k&&(t.inheritAttrs=k),A&&(t.components=A),O&&(t.directives=O),C&&H(t)}function St(t,e,n=r.tE){(0,r.cy)(t)&&(t=Lt(t));for(const s in t){const n=t[s];let o;o=(0,r.Gv)(n)?"default"in n?Vt(n.from||s,n.default,!0):Vt(n.from||s):Vt(n),(0,i.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function It(t,e,n){o((0,r.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function xt(t,e,n,i){let s=i.includes(".")?Ee(n,i):()=>n[i];if((0,r.Kg)(t)){const n=e[t];(0,r.Tn)(n)&&we(s,n)}else if((0,r.Tn)(t))we(s,t.bind(n));else if((0,r.Gv)(t))if((0,r.cy)(t))t.forEach((t=>xt(t,e,n,i)));else{const i=(0,r.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,r.Tn)(i)&&we(s,i,t)}else 0}function Ct(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||i?(u={},s.length&&s.forEach((t=>Pt(u,t,a,!0))),Pt(u,e,a)):u=e,(0,r.Gv)(e)&&o.set(e,u),u}function Pt(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Pt(t,s,n,!0),r&&r.forEach((e=>Pt(t,e,n,!0)));for(const o in e)if(i&&"expose"===o);else{const i=kt[o]||n&&n[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const kt={data:At,props:Mt,emits:Mt,methods:Nt,computed:Nt,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Nt,directives:Nt,watch:Dt,provide:At,inject:Ot};function At(t,e){return e?t?function(){return(0,r.X$)((0,r.Tn)(t)?t.call(this,this):t,(0,r.Tn)(e)?e.call(this,this):e)}:e:t}function Ot(t,e){return Nt(Lt(t),Lt(e))}function Lt(t){if((0,r.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Nt(t,e){return t?(0,r.X$)(Object.create(null),t,e):e}function Mt(t,e){return t?(0,r.cy)(t)&&(0,r.cy)(e)?[...new Set([...t,...e])]:(0,r.X$)(Object.create(null),bt(t),bt(null!=e?e:{})):e}function Dt(t,e){if(!t)return e;if(!e)return t;const n=(0,r.X$)(Object.create(null),t);for(const i in e)n[i]=Rt(t[i],e[i]);return n}function Ft(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jt=0;function Ut(t,e){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const s=Ft(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:jt++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Dn,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,r.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,r.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(r,o,a){if(!u){0;const c=l._ceVNode||tn(n,i);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,r):t(c,r,a),u=!0,l._container=r,r.__vue_app__=l,On(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(o(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=Bt;Bt=l;try{return t()}finally{Bt=e}}};return l}}let Bt=null;function zt(t,e){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[t]=e}else 0}function Vt(t,e,n=!1){const i=mn||I;if(i||Bt){const s=Bt?Bt._context.provides:i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,r.Tn)(e)?e.call(i&&i.proxy):e}else 0}const Ht={},$t=()=>Object.create(Ht),Zt=t=>Object.getPrototypeOf(t)===Ht;function qt(t,e,n,r=!1){const s={},o=$t();t.propsDefaults=Object.create(null),Kt(t,e,s,o);for(const i in t.propsOptions[0])i in s||(s[i]=void 0);n?t.props=r?s:(0,i.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Wt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,i.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let i;Kt(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,r.$3)(e,s)||(i=(0,r.Tg)(s))!==s&&(0,r.$3)(e,i))||(l?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Gt(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,r.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(Ce(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,r.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,r.PT)(s);o[e]=Gt(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,i.hZ)(t.attrs,"set","")}function Kt(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let i in e){if((0,r.SU)(i))continue;const l=e[i];let h;o&&(0,r.$3)(o,h=(0,r.PT)(i))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Ce(t.emitsOptions,i)||i in s&&l===s[i]||(s[i]=l,u=!0)}if(a){const e=(0,i.ux)(n),s=c||r.MZ;for(let i=0;i<a.length;i++){const c=a[i];n[c]=Gt(o,e,c,s[c],t,!(0,r.$3)(s,c))}}return u}function Gt(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=(0,r.$3)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(t)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=yn(s);i=r[n]=t.call(null,e),o()}}else i=t;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}const Qt=new WeakMap;function Xt(t,e,n=!1){const i=n?Qt:e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,r.Tn)(t)){const i=t=>{u=!0;const[n,i]=Xt(t,e,!0);(0,r.X$)(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!u)return(0,r.Gv)(t)&&i.set(t,r.Oj),r.Oj;if((0,r.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,r.PT)(o[h]);Jt(t)&&(a[t]=r.MZ)}else if(o){0;for(const t in o){const e=(0,r.PT)(t);if(Jt(e)){const n=o[t],i=a[e]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n),s=i.type;let u=!1,l=!0;if((0,r.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,r.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,r.Tn)(s)&&"Boolean"===s.name;i[0]=u,i[1]=l,(u||(0,r.$3)(i,"default"))&&c.push(e)}}}const l=[a,c];return(0,r.Gv)(t)&&i.set(t,l),l}function Jt(t){return"$"!==t[0]&&!(0,r.SU)(t)}const Yt=t=>"_"===t[0]||"$stable"===t,te=t=>(0,r.cy)(t)?t.map(an):[an(t)],ee=(t,e,n)=>{if(e._n)return e;const i=P(((...t)=>te(e(...t))),n);return i._c=!1,i},ne=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Yt(s))continue;const n=t[s];if((0,r.Tn)(n))e[s]=ee(s,n,i);else if(null!=n){0;const t=te(n);e[s]=()=>t}}},ie=(t,e)=>{const n=te(e);t.slots.default=()=>n},re=(t,e,n)=>{for(const i in e)(n||"_"!==i)&&(t[i]=e[i])},se=(t,e,n)=>{const i=t.slots=$t();if(32&t.vnode.shapeFlag){const t=e._;t?(re(i,e,n),n&&(0,r.yQ)(i,"_",t,!0)):ne(e,i)}else e&&ie(t,e)},oe=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r.MZ;if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:re(s,e,n):(o=!e.$stable,ne(e,s)),a=e}else e&&(ie(t,e),a={default:1});if(o)for(const r in s)Yt(r)||null!=a[r]||delete s[r]};function ae(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ce=Me;function ue(t){return le(t)}function le(t,e){ae();const n=(0,r.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=r.tE,insertStaticContent:g}=t,_=(t,e,n,i=null,r=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Qe(t,e)&&(i=Y(t),K(t,r,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Fe:y(t,e,n,i);break;case je:w(t,e,n,i);break;case Ue:null==t&&E(e,n,i,o);break;case De:M(t,e,n,i,r,s,o,a,c);break;default:1&h?x(t,e,n,i,r,s,o,a,c):6&h?D(t,e,n,i,r,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,i,r,s,o,a,c,nt)}null!=l&&r&&$(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,i)=>{if(null==t)s(e.el=u(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,i)=>{null==t?s(e.el=l(e.children||""),n,i):e.el=t.el},E=(t,e,n,i)=>{[t.el,t.anchor]=g(t.children,e,n,i,t.el,t.anchor)},S=({el:t,anchor:e},n,i)=>{let r;while(t&&t!==e)r=p(t),s(t,n,i),t=r;s(e,n,i)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},x=(t,e,n,i,r,s,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?C(e,n,i,r,s,o,a,c):L(t,e,r,s,o,a,c)},C=(t,e,n,i,o,u,l,h)=>{let f,p;const{props:m,shapeFlag:g,transition:_,dirs:v}=t;if(f=t.el=c(t.type,u,m&&m.is,m),8&g?d(f,t.children):16&g&&k(t.children,f,null,i,o,he(t,u),l,h),v&&A(t,null,i,"created"),P(f,t,t.scopeId,l,i),m){for(const t in m)"value"===t||(0,r.SU)(t)||a(f,t,null,m[t],u,i);"value"in m&&a(f,"value",null,m.value,u),(p=m.onVnodeBeforeMount)&&hn(p,i,t)}v&&A(t,null,i,"beforeMount");const y=fe(o,_);y&&_.beforeEnter(f),s(f,e,n),((p=m&&m.onVnodeMounted)||y||v)&&ce((()=>{p&&hn(p,i,t),y&&_.enter(f),v&&A(t,null,i,"mounted")}),o)},P=(t,e,n,i,r)=>{if(n&&m(t,n),i)for(let s=0;s<i.length;s++)m(t,i[s]);if(r){let n=r.subTree;if(e===n||Ne(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=r.vnode;P(t,e,e.scopeId,e.slotScopeIds,r.parent)}}},k=(t,e,n,i,r,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?cn(t[u]):an(t[u]);_(null,c,e,n,i,r,s,o,a)}},L=(t,e,n,i,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||r.MZ,m=e.props||r.MZ;let g;if(n&&de(n,!1),(g=m.onVnodeBeforeUpdate)&&hn(g,n,e,t),f&&A(e,t,n,"beforeUpdate"),n&&de(n,!0),(p.innerHTML&&null==m.innerHTML||p.textContent&&null==m.textContent)&&d(u,""),h?R(t.dynamicChildren,h,u,n,i,he(e,s),o):c||z(t,e,u,null,n,i,he(e,s),o,!1),l>0){if(16&l)N(u,p,m,n,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const i=t[e],r=p[i],o=m[i];o===r&&"value"!==i||a(u,i,r,o,s,n)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||N(u,p,m,n,s);((g=m.onVnodeUpdated)||f)&&ce((()=>{g&&hn(g,n,e,t),f&&A(e,t,n,"updated")}),i)},R=(t,e,n,i,r,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===De||!Qe(c,u)||70&c.shapeFlag)?f(c.el):n;_(c,u,l,null,i,r,s,o,!0)}},N=(t,e,n,i,s)=>{if(e!==n){if(e!==r.MZ)for(const o in e)(0,r.SU)(o)||o in n||a(t,o,e[o],null,s,i);for(const o in n){if((0,r.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,s,i)}"value"in n&&a(t,"value",e.value,n.value,s)}},M=(t,e,n,i,r,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,i),s(d,n,i),k(e.children||[],n,d,r,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,r,o,a,c),(null!=e.key||r&&e===r.subTree)&&pe(t,e,!0)):z(t,e,n,d,r,o,a,c,l)},D=(t,e,n,i,r,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?r.ctx.activate(e,n,i,o,c):F(e,n,i,r,s,o,c):j(t,e,c)},F=(t,e,n,i,r,s,o)=>{const a=t.component=pn(t,i,r);if(q(t)&&(a.ctx.renderer=nt),In(a,!1,o),a.asyncDep){if(r&&r.registerDep(a,U,o),!t.el){const t=a.subTree=tn(je);w(null,t,e,n)}}else U(a,t,e,n,r,s,o)},j=(t,e,n)=>{const i=e.component=t.component;if(Oe(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void B(i,e,n);i.next=e,i.update()}else e.el=t.el,i.vnode=e},U=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:i,parent:s,vnode:l}=t;{const n=ge(t);if(n)return e&&(e.el=l.el,B(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||u()}))}let h,d=e;0,de(t,!1),e?(e.el=l.el,B(t,e,c)):e=l,n&&(0,r.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&hn(h,s,e,l),de(t,!0);const p=Pe(t);0;const m=t.subTree;t.subTree=p,_(m,p,f(m.el),Y(m),t,o,a),e.el=p.el,null===d&&Re(t,p.el),i&&ce(i,o),(h=e.props&&e.props.onVnodeUpdated)&&ce((()=>hn(h,s,e,l)),o)}else{let i;const{el:c,props:u}=e,{bm:l,m:h,parent:d,root:f,type:p}=t,m=Z(e);if(de(t,!1),l&&(0,r.DY)(l),!m&&(i=u&&u.onVnodeBeforeMount)&&hn(i,d,e),de(t,!0),c&&rt){const e=()=>{t.subTree=Pe(t),rt(c,t.subTree,t,o,null)};m&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{f.ce&&f.ce._injectChildStyle(p);const i=t.subTree=Pe(t);0,_(null,i,n,s,t,o,a),e.el=i.el}if(h&&ce(h,o),!m&&(i=u&&u.onVnodeMounted)){const t=e;ce((()=>hn(i,d,t)),o)}(256&e.shapeFlag||d&&Z(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&ce(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new i.X2(u);t.scope.off();const h=t.update=l.run.bind(l),d=t.job=l.runIfDirty.bind(l);d.i=t,d.id=t.uid,l.scheduler=()=>v(d),de(t,!0),h()},B=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,Wt(t,e.props,r,n),oe(t,e.children,n),(0,i.C4)(),b(t),(0,i.bl)()},z=(t,e,n,i,r,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void H(u,h,n,i,r,s,o,a,c);if(256&f)return void V(u,h,n,i,r,s,o,a,c)}8&p?(16&l&&J(u,r,s),h!==u&&d(n,h)):16&l?16&p?H(u,h,n,i,r,s,o,a,c):J(u,r,s,!0):(8&l&&d(n,""),16&p&&k(h,n,i,r,s,o,a,c))},V=(t,e,n,i,s,o,a,c,u)=>{t=t||r.Oj,e=e||r.Oj;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const i=e[f]=u?cn(e[f]):an(e[f]);_(t[f],i,n,null,s,o,a,c,u)}l>h?J(t,s,o,!0,!1,d):k(e,n,i,s,o,a,c,u,d)},H=(t,e,n,i,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const i=t[l],r=e[l]=u?cn(e[l]):an(e[l]);if(!Qe(i,r))break;_(i,r,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const i=t[d],r=e[f]=u?cn(e[f]):an(e[f]);if(!Qe(i,r))break;_(i,r,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,r=t<h?e[t].el:i;while(l<=f)_(null,e[l]=u?cn(e[l]):an(e[l]),n,r,s,o,a,c,u),l++}}else if(l>f)while(l<=d)K(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const t=e[l]=u?cn(e[l]):an(e[l]);null!=t.key&&g.set(t.key,l)}let v,y=0;const w=f-m+1;let b=!1,T=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=d;l++){const i=t[l];if(y>=w){K(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(v=m;v<=f;v++)if(0===E[v-m]&&Qe(i,e[v])){r=v;break}void 0===r?K(i,s,o,!0):(E[r-m]=l+1,r>=T?T=r:b=!0,_(i,e[r],n,null,s,o,a,c,u),y++)}const S=b?me(E):r.Oj;for(v=S.length-1,l=w-1;l>=0;l--){const t=m+l,r=e[t],d=t+1<h?e[t+1].el:i;0===E[l]?_(null,r,n,d,s,o,a,c,u):b&&(v<0||l!==S[v]?W(r,n,d,2):v--)}}},W=(t,e,n,i,r=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void W(t.component.subTree,e,n,i);if(128&l)return void t.suspense.move(e,n,i);if(64&l)return void a.move(t,e,n,nt);if(a===De){s(o,e,n);for(let t=0;t<u.length;t++)W(u[t],e,n,i);return void s(t.anchor,e,n)}if(a===Ue)return void S(t,e,n);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(o),s(o,e,n),ce((()=>c.enter(o)),r);else{const{leave:t,delayLeave:i,afterLeave:r}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),r&&r()}))};i?i(o,a,u):u()}else s(o,e,n)},K=(t,e,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d,cacheIndex:f}=t;if(-2===h&&(r=!1),null!=a&&$(a,null,n,t,!0),null!=f&&(e.renderCache[f]=void 0),256&l)return void e.ctx.deactivate(t);const p=1&l&&d,m=!Z(t);let g;if(m&&(g=o&&o.onVnodeBeforeUnmount)&&hn(g,e,t),6&l)X(t.component,n,i);else{if(128&l)return void t.suspense.unmount(n,i);p&&A(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,nt,i):u&&!u.hasOnce&&(s!==De||h>0&&64&h)?J(u,e,n,!1,!0):(s===De&&384&h||!r&&16&l)&&J(c,e,n),i&&G(t)}(m&&(g=o&&o.onVnodeUnmounted)||p)&&ce((()=>{g&&hn(g,e,t),p&&A(t,null,e,"unmounted")}),n)},G=t=>{const{type:e,el:n,anchor:i,transition:r}=t;if(e===De)return void Q(n,i);if(e===Ue)return void I(t);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&t.shapeFlag&&r&&!r.persisted){const{leave:e,delayLeave:i}=r,o=()=>e(n,s);i?i(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},X=(t,e,n)=>{const{bum:i,scope:s,job:o,subTree:a,um:c,m:u,a:l}=t;_e(u),_e(l),i&&(0,r.DY)(i),s.stop(),o&&(o.flags|=8,K(a,t,e,n)),c&&ce(c,e),ce((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,i=!1,r=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,i,r)},Y=t=>{if(6&t.shapeFlag)return Y(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[O];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):_(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,b(),T(),tt=!1)},nt={p:_,um:K,m:W,r:G,mt:F,mc:k,pc:z,pbc:R,n:Y,o:t};let it,rt;return e&&([it,rt]=e(nt)),{render:et,hydrate:it,createApp:Ut(et,it)}}function he({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function de({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fe(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pe(t,e,n=!1){const i=t.children,s=e.children;if((0,r.cy)(i)&&(0,r.cy)(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=cn(s[r]),e.el=t.el),n||-2===e.patchFlag||pe(t,e)),e.type===Fe&&(e.el=t.el)}}function me(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const c=t[i];if(0!==c){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function ge(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ge(e)}function _e(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ve=Symbol.for("v-scx"),ye=()=>{{const t=Vt(ve);return t}};function we(t,e,n){return be(t,e,n)}function be(t,e,n=r.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,r.X$)({},n);const h=e&&s||!e&&"post"!==c;let d;if(Sn)if("sync"===c){const t=ye();d=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=r.tE,t.resume=r.tE,t.pause=r.tE,t}const f=mn;l.call=(t,e,n)=>o(t,f,e,n);let p=!1;"post"===c?l.scheduler=t=>{ce(t,f&&f.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():v(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,f&&(t.id=f.uid,t.i=f))};const m=(0,i.wB)(t,e,l);return Sn&&(d?d.push(m):h&&m()),m}function Te(t,e,n){const i=this.proxy,s=(0,r.Kg)(t)?t.includes(".")?Ee(i,t):()=>i[t]:t.bind(i,i);let o;(0,r.Tn)(e)?o=e:(o=e.handler,n=e);const a=yn(this),c=be(s,o.bind(i),n);return a(),c}function Ee(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Se=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,r.PT)(e)}Modifiers`]||t[`${(0,r.Tg)(e)}Modifiers`];function Ie(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||r.MZ;let s=n;const a=e.startsWith("update:"),c=a&&Se(i,e.slice(7));let u;c&&(c.trim&&(s=n.map((t=>(0,r.Kg)(t)?t.trim():t))),c.number&&(s=n.map(r.bB)));let l=i[u=(0,r.rU)(e)]||i[u=(0,r.rU)((0,r.PT)(e))];!l&&a&&(l=i[u=(0,r.rU)((0,r.Tg)(e))]),l&&o(l,t,6,s);const h=i[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function xe(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,r.Tn)(t)){const i=t=>{const n=xe(t,e,!0);n&&(c=!0,(0,r.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?((0,r.cy)(o)?o.forEach((t=>a[t]=null)):(0,r.X$)(a,o),(0,r.Gv)(t)&&i.set(t,a),a):((0,r.Gv)(t)&&i.set(t,null),null)}function Ce(t,e){return!(!t||!(0,r.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,r.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,r.$3)(t,(0,r.Tg)(e))||(0,r.$3)(t,e))}function Pe(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:d,props:f,data:p,setupState:m,ctx:g,inheritAttrs:_}=t,v=C(t);let y,w;try{if(4&n.shapeFlag){const t=s||i,e=t;y=an(h.call(e,t,d,f,m,p,g)),w=u}else{const t=e;0,y=an(t.length>1?t(f,{attrs:u,slots:c,emit:l}):t(f,null)),w=e.props?u:ke(u)}}catch(T){Be.length=0,a(T,t,1),y=tn(je)}let b=y;if(w&&!1!==_){const t=Object.keys(w),{shapeFlag:e}=b;t.length&&7&e&&(o&&t.some(r.CP)&&(w=Ae(w,o)),b=rn(b,w,!1,!0))}return n.dirs&&(b=rn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&B(b,n.transition),y=b,C(v),y}const ke=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,r.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},Ae=(t,e)=>{const n={};for(const i in t)(0,r.CP)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function Oe(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||Le(i,o,u):!!o);if(1024&c)return!0;if(16&c)return i?Le(i,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==i[n]&&!Ce(u,n))return!0}}return!1}function Le(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ce(n,s))return!0}return!1}function Re({vnode:t,parent:e},n){while(e){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i!==t)break;(t=e.vnode).el=n,e=e.parent}}const Ne=t=>t.__isSuspense;function Me(t,e){e&&e.pendingBranch?(0,r.cy)(t)?e.effects.push(...t):e.effects.push(t):w(t)}const De=Symbol.for("v-fgt"),Fe=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),Ue=Symbol.for("v-stc"),Be=[];let ze=null;function Ve(t=!1){Be.push(ze=t?null:[])}function He(){Be.pop(),ze=Be[Be.length-1]||null}let $e=1;function Ze(t,e=!1){$e+=t,t<0&&ze&&e&&(ze.hasOnce=!0)}function qe(t){return t.dynamicChildren=$e>0?ze||r.Oj:null,He(),$e>0&&ze&&ze.push(t),t}function We(t,e,n,i,r,s){return qe(Ye(t,e,n,i,r,s,!0))}function Ke(t,e,n,i,r){return qe(tn(t,e,n,i,r,!0))}function Ge(t){return!!t&&!0===t.__v_isVNode}function Qe(t,e){return t.type===e.type&&t.key===e.key}const Xe=({key:t})=>null!=t?t:null,Je=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,r.Kg)(t)||(0,i.i9)(t)||(0,r.Tn)(t)?{i:I,r:t,k:e,f:!!n}:t:null);function Ye(t,e=null,n=null,i=0,s=null,o=(t===De?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xe(e),ref:e&&Je(e),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:I};return c?(un(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,r.Kg)(n)?8:16),$e>0&&!a&&ze&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&ze.push(u),u}const tn=en;function en(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==pt||(t=je),Ge(t)){const i=rn(t,e,!0);return n&&un(i,n),$e>0&&!a&&ze&&(6&i.shapeFlag?ze[ze.indexOf(t)]=i:ze.push(i)),i.patchFlag=-2,i}if(Rn(t)&&(t=t.__vccOpts),e){e=nn(e);let{class:t,style:n}=e;t&&!(0,r.Kg)(t)&&(e.class=(0,r.C4)(t)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),e.style=(0,r.Tr)(n))}const c=(0,r.Kg)(t)?1:Ne(t)?128:L(t)?64:(0,r.Gv)(t)?4:(0,r.Tn)(t)?2:0;return Ye(t,e,n,s,o,c,a,!0)}function nn(t){return t?(0,i.ju)(t)||Zt(t)?(0,r.X$)({},t):t:null}function rn(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?ln(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Xe(l),ref:e&&e.ref?n&&o?(0,r.cy)(o)?o.concat(Je(e)):[o,Je(e)]:Je(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&i&&B(h,u.clone(h)),h}function sn(t=" ",e=0){return tn(Fe,null,t,e)}function on(t="",e=!1){return e?(Ve(),Ke(je,null,t)):tn(je,null,t)}function an(t){return null==t||"boolean"===typeof t?tn(je):(0,r.cy)(t)?tn(De,null,t.slice()):Ge(t)?cn(t):tn(Fe,null,String(t))}function cn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:rn(t)}function un(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,r.cy)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),un(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||Zt(e)?3===i&&I&&(1===I.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=I}}else(0,r.Tn)(e)?(e={default:e,_ctx:I},n=32):(e=String(e),64&i?(n=16,e=[sn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ln(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,r.C4)([e.class,i.class]));else if("style"===t)e.style=(0,r.Tr)([e.style,i.style]);else if((0,r.Mp)(t)){const n=e[t],s=i[t];!s||n===s||(0,r.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function hn(t,e,n,i=null){o(t,e,7,[n,i])}const dn=Ft();let fn=0;function pn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||dn,a={uid:fn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xt(s,o),emitsOptions:xe(s,o),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:s.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ie.bind(null,a),t.ce&&t.ce(a),a}let mn=null;const gn=()=>mn||I;let _n,vn;{const t=(0,r.We)(),e=(e,n)=>{let i;return(i=t[e])||(i=t[e]=[]),i.push(n),t=>{i.length>1?i.forEach((e=>e(t))):i[0](t)}};_n=e("__VUE_INSTANCE_SETTERS__",(t=>mn=t)),vn=e("__VUE_SSR_SETTERS__",(t=>Sn=t))}const yn=t=>{const e=mn;return _n(t),t.scope.on(),()=>{t.scope.off(),_n(e)}},wn=()=>{mn&&mn.scope.off(),_n(null)};function bn(t){return 4&t.vnode.shapeFlag}let Tn,En,Sn=!1;function In(t,e=!1,n=!1){e&&vn(e);const{props:i,children:r}=t.vnode,s=bn(t);qt(t,i,s,e),se(t,r,n);const o=s?xn(t,e):void 0;return e&&vn(!1),o}function xn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wt);const{setup:o}=n;if(o){(0,i.C4)();const n=t.setupContext=o.length>1?An(t):null,c=yn(t),u=s(o,t,0,[t.props,n]),l=(0,r.yL)(u);if((0,i.bl)(),c(),!l&&!t.sp||Z(t)||H(t),l){if(u.then(wn,wn),e)return u.then((n=>{Cn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=u}else Cn(t,u,e)}else Pn(t,e)}function Cn(t,e,n){(0,r.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,r.Gv)(e)&&(t.setupState=(0,i.Pr)(e)),Pn(t,n)}function Pn(t,e,n){const s=t.type;if(!t.render){if(!e&&Tn&&!s.render){const e=s.template||Ct(t).template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:o},i),a);s.render=Tn(e,c)}}t.render=s.render||r.tE,En&&En(t)}{const e=yn(t);(0,i.C4)();try{Et(t)}finally{(0,i.bl)(),e()}}}const kn={get(t,e){return(0,i.u4)(t,"get",""),t[e]}};function An(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,kn),slots:t.slots,emit:t.emit,expose:e}}function On(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in vt?vt[n](t):void 0},has(t,e){return e in t||e in vt}})):t.proxy}function Ln(t,e=!0){return(0,r.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Rn(t){return(0,r.Tn)(t)&&"__vccOpts"in t}const Nn=(t,e)=>{const n=(0,i.EW)(t,e,Sn);return n};function Mn(t,e,n){const i=arguments.length;return 2===i?(0,r.Gv)(e)&&!(0,r.cy)(e)?Ge(e)?tn(t,null,[e]):tn(t,e):tn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Ge(n)&&(n=[n]),tn(t,e,n))}const Dn="3.5.13"},3751:function(t,e,n){"use strict";n.d(e,{D$:function(){return Q},Ef:function(){return tt},Jo:function(){return W}});var i=n(641),r=n(33);n(953);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(it){}const a=s?t=>s.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),d={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(e.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{h.innerHTML=a("svg"===i?`<svg>${t}</svg>`:"mathml"===i?`<math>${t}</math>`:t);const r=h.content;if("svg"===i||"mathml"===i){const t=r.firstChild;while(t.firstChild)r.appendChild(t.firstChild);r.removeChild(t)}e.insertBefore(r,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};i.QP;function m(t,e,n){const i=t[f];i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const g=Symbol("_vod"),_=Symbol("_vsh");const v=Symbol("");const y=/(^|;)\s*display\s*:/;function w(t,e,n){const i=t.style,s=(0,r.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,r.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&T(i,e,"")}else for(const t in e)null==n[t]&&T(i,t,"");for(const t in n)"display"===t&&(o=!0),T(i,t,n[t])}else if(s){if(e!==n){const t=i[v];t&&(n+=";"+t),i.cssText=n,o=y.test(n)}}else e&&t.removeAttribute("style");g in t&&(t[g]=o?i.display:"",t[_]&&(i.display="none"))}const b=/\s*!important$/;function T(t,e,n){if((0,r.cy)(n))n.forEach((n=>T(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=I(t,e);b.test(n)?t.setProperty((0,r.Tg)(i),n.replace(b,""),"important"):t[i]=n}}const E=["Webkit","Moz","ms"],S={};function I(t,e){const n=S[e];if(n)return n;let i=(0,r.PT)(e);if("filter"!==i&&i in t)return S[e]=i;i=(0,r.ZH)(i);for(let r=0;r<E.length;r++){const n=E[r]+i;if(n in t)return S[e]=n}return e}const x="http://www.w3.org/1999/xlink";function C(t,e,n,i,s,o=(0,r.J$)(e)){i&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(x,e.slice(6,e.length)):t.setAttributeNS(x,e,n):null==n||o&&!(0,r.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,r.Bm)(n)?String(n):n)}function P(t,e,n,i,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const i="OPTION"===o?t.getAttribute("value")||"":t.value,r=null==n?"checkbox"===t.type?"on":"":String(n);return i===r&&"_value"in t||(t.value=r),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(it){0}c&&t.removeAttribute(s||e)}function k(t,e,n,i){t.addEventListener(e,n,i)}function A(t,e,n,i){t.removeEventListener(e,n,i)}const O=Symbol("_vei");function L(t,e,n,i,r=null){const s=t[O]||(t[O]={}),o=s[e];if(i&&o)o.value=i;else{const[n,a]=N(e);if(i){const o=s[e]=j(i,r);k(t,n,o,a)}else o&&(A(t,n,o,a),s[e]=void 0)}}const R=/(?:Once|Passive|Capture)$/;function N(t){let e;if(R.test(t)){let n;e={};while(n=t.match(R))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.Tg)(t.slice(2));return[n,e]}let M=0;const D=Promise.resolve(),F=()=>M||(D.then((()=>M=0)),M=Date.now());function j(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.qL)(U(t,n.value),e,5,[t])};return n.value=t,n.attached=F(),n}function U(t,e){if((0,r.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const B=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,z=(t,e,n,i,s,o)=>{const a="svg"===s;"class"===e?m(t,i,a):"style"===e?w(t,n,i):(0,r.Mp)(e)?(0,r.CP)(e)||L(t,e,n,i,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):V(t,e,i,a))?(P(t,e,i),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||C(t,e,i,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,r.Kg)(i)?("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),C(t,e,i,a)):P(t,(0,r.PT)(e),i,o,e)};function V(t,e,n,i){if(i)return"innerHTML"===e||"textContent"===e||!!(e in t&&B(e)&&(0,r.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!B(e)||!(0,r.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const H=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.cy)(e)?t=>(0,r.DY)(e,t):e};function $(t){t.target.composing=!0}function Z(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const q=Symbol("_assign"),W={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[q]=H(s);const o=i||s.props&&"number"===s.props.type;k(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.bB)(i)),t[q](i)})),n&&k(t,"change",(()=>{t.value=t.value.trim()})),e||(k(t,"compositionstart",$),k(t,"compositionend",Z),k(t,"change",Z))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},a){if(t[q]=H(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,r.bB)(t.value),u=null==e?"":e;if(c!==u){if(document.activeElement===t&&"range"!==t.type){if(i&&e===n)return;if(s&&t.value.trim()===u)return}t.value=u}}};const K=["ctrl","shift","alt","meta"],G={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>K.some((n=>t[`${n}Key`]&&!e.includes(n)))},Q=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(n,...i)=>{for(let t=0;t<e.length;t++){const i=G[e[t]];if(i&&i(n,e))return}return t(n,...i)})},X=(0,r.X$)({patchProp:z},d);let J;function Y(){return J||(J=(0,i.K9)(X))}const tt=(...t)=>{const e=Y().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=nt(t);if(!i)return;const s=e._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,et(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function et(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function nt(t){if((0,r.Kg)(t)){const e=document.querySelector(t);return e}return t}},33:function(t,e,n){"use strict";
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}n.d(e,{$3:function(){return f},$H:function(){return F},BH:function(){return Z},BX:function(){return nt},Bm:function(){return b},C4:function(){return X},CE:function(){return m},CP:function(){return u},DY:function(){return j},Gv:function(){return T},J$:function(){return Y},Kg:function(){return w},MZ:function(){return r},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return L},Qd:function(){return C},Ro:function(){return z},SU:function(){return k},TF:function(){return h},Tg:function(){return N},Tn:function(){return y},Tr:function(){return q},We:function(){return H},X$:function(){return l},Y2:function(){return tt},ZH:function(){return M},Zf:function(){return x},bB:function(){return B},cy:function(){return p},gd:function(){return v},pD:function(){return i},rU:function(){return D},tE:function(){return o},u3:function(){return it},vM:function(){return g},v_:function(){return st},yI:function(){return P},yL:function(){return E},yQ:function(){return U}});const r={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,m=t=>"[object Map]"===I(t),g=t=>"[object Set]"===I(t),_=t=>"[object Date]"===I(t),v=t=>"[object RegExp]"===I(t),y=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,E=t=>(T(t)||y(t))&&y(t.then)&&y(t.catch),S=Object.prototype.toString,I=t=>S.call(t),x=t=>I(t).slice(8,-1),C=t=>"[object Object]"===I(t),P=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,k=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},O=/-(\w)/g,L=A((t=>t.replace(O,((t,e)=>e?e.toUpperCase():"")))),R=/\B([A-Z])/g,N=A((t=>t.replace(R,"-$1").toLowerCase())),M=A((t=>t.charAt(0).toUpperCase()+t.slice(1))),D=A((t=>{const e=t?`on${M(t)}`:"";return e})),F=(t,e)=>!Object.is(t,e),j=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},U=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},B=t=>{const e=parseFloat(t);return isNaN(e)?t:e},z=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let V;const H=()=>V||(V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const $="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",Z=i($);function q(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=w(i)?Q(i):q(i);if(r)for(const t in r)e[t]=r[t]}return e}if(w(t)||T(t))return t}const W=/;(?![^(]*\))/g,K=/:([^]+)/,G=/\/\*[^]*?\*\//g;function Q(t){const e={};return t.replace(G,"").split(W).forEach((t=>{if(t){const n=t.split(K);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const i=X(t[n]);i&&(e+=i+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y=i(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=nt(t[i],e[i]);return n}function nt(t,e){if(t===e)return!0;let n=_(t),i=_(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=b(t),i=b(e),n||i)return t===e;if(n=p(t),i=p(e),n||i)return!(!n||!i)&&et(t,e);if(n=T(t),i=T(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const n in t){const i=t.hasOwnProperty(n),r=e.hasOwnProperty(n);if(i&&!r||!i&&r||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function it(t,e){return t.findIndex((t=>nt(t,e)))}const rt=t=>!(!t||!0!==t["__v_isRef"]),st=t=>w(t)?t:null==t?"":p(t)||T(t)&&(t.toString===S||!y(t.toString))?rt(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>rt(e)?ot(t,e.value):m(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],i)=>(t[at(e,i)+" =>"]=n,t)),{})}:g(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:b(e)?at(e):!T(e)||p(e)||C(e)?e:String(e),at=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},3481:function(t,e){
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(t,n){n(e)})(0,(function(t){"use strict";var e="1.9.4";function n(t){var e,n,i,r;for(n=1,i=arguments.length;n<i;n++)for(e in r=arguments[n],r)t[e]=r[e];return t}var i=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function r(t,e){var n=Array.prototype.slice;if(t.bind)return t.bind.apply(t,n.call(arguments,1));var i=n.call(arguments,2);return function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)}}var s=0;function o(t){return"_leaflet_id"in t||(t["_leaflet_id"]=++s),t._leaflet_id}function a(t,e,n){var i,r,s,o;return o=function(){i=!1,r&&(s.apply(n,r),r=!1)},s=function(){i?r=arguments:(t.apply(n,arguments),setTimeout(o,e),i=!0)},s}function c(t,e,n){var i=e[1],r=e[0],s=i-r;return t===i&&n?t:((t-r)%s+s)%s+r}function u(){return!1}function l(t,e){if(!1===e)return t;var n=Math.pow(10,void 0===e?6:e);return Math.round(t*n)/n}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function d(t){return h(t).split(/\s+/)}function f(t,e){for(var n in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?i(t.options):{}),e)t.options[n]=e[n];return t.options}function p(t,e,n){var i=[];for(var r in t)i.push(encodeURIComponent(n?r.toUpperCase():r)+"="+encodeURIComponent(t[r]));return(e&&-1!==e.indexOf("?")?"&":"?")+i.join("&")}var m=/\{ *([\w_ -]+) *\}/g;function g(t,e){return t.replace(m,(function(t,n){var i=e[n];if(void 0===i)throw new Error("No value provided for variable "+t);return"function"===typeof i&&(i=i(e)),i}))}var _=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function v(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}var y="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function w(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var b=0;function T(t){var e=+new Date,n=Math.max(0,16-(e-b));return b=e+n,window.setTimeout(t,n)}var E=window.requestAnimationFrame||w("RequestAnimationFrame")||T,S=window.cancelAnimationFrame||w("CancelAnimationFrame")||w("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function I(t,e,n){if(!n||E!==T)return E.call(window,r(t,e));t.call(e)}function x(t){t&&S.call(window,t)}var C={__proto__:null,extend:n,create:i,bind:r,get lastId(){return s},stamp:o,throttle:a,wrapNum:c,falseFn:u,formatNum:l,trim:h,splitWords:d,setOptions:f,getParamString:p,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:E,cancelFn:S,requestAnimFrame:I,cancelAnimFrame:x};function P(){}function k(t){if("undefined"!==typeof L&&L&&L.Mixin){t=_(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}P.extend=function(t){var e=function(){f(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},r=e.__super__=this.prototype,s=i(r);for(var o in s.constructor=e,e.prototype=s,this)Object.prototype.hasOwnProperty.call(this,o)&&"prototype"!==o&&"__super__"!==o&&(e[o]=this[o]);return t.statics&&n(e,t.statics),t.includes&&(k(t.includes),n.apply(null,[s].concat(t.includes))),n(s,t),delete s.statics,delete s.includes,s.options&&(s.options=r.options?i(r.options):{},n(s.options,t.options)),s._initHooks=[],s.callInitHooks=function(){if(!this._initHooksCalled){r.callInitHooks&&r.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=s._initHooks.length;t<e;t++)s._initHooks[t].call(this)}},e},P.include=function(t){var e=this.prototype.options;return n(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},P.mergeOptions=function(t){return n(this.prototype.options,t),this},P.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),n="function"===typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};var A={on:function(t,e,n){if("object"===typeof t)for(var i in t)this._on(i,t[i],e);else{t=d(t);for(var r=0,s=t.length;r<s;r++)this._on(t[r],e,n)}return this},off:function(t,e,n){if(arguments.length)if("object"===typeof t)for(var i in t)this._off(i,t[i],e);else{t=d(t);for(var r=1===arguments.length,s=0,o=t.length;s<o;s++)r?this._off(t[s]):this._off(t[s],e,n)}else delete this._events;return this},_on:function(t,e,n,i){if("function"===typeof e){if(!1===this._listens(t,e,n)){n===this&&(n=void 0);var r={fn:e,ctx:n};i&&(r.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(r)}}else console.warn("wrong listener type: "+typeof e)},_off:function(t,e,n){var i,r,s;if(this._events&&(i=this._events[t],i))if(1!==arguments.length)if("function"===typeof e){var o=this._listens(t,e,n);if(!1!==o){var a=i[o];this._firingCount&&(a.fn=u,this._events[t]=i=i.slice()),i.splice(o,1)}}else console.warn("wrong listener type: "+typeof e);else{if(this._firingCount)for(r=0,s=i.length;r<s;r++)i[r].fn=u;delete this._events[t]}},fire:function(t,e,i){if(!this.listens(t,i))return this;var r=n({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var o=0,a=s.length;o<a;o++){var c=s[o],u=c.fn;c.once&&this.off(t,u,c.ctx),u.call(c.ctx||this,r)}this._firingCount--}}return i&&this._propagateEvent(r),this},listens:function(t,e,n,i){"string"!==typeof t&&console.warn('"string" type argument expected');var r=e;"function"!==typeof e&&(i=!!e,r=void 0,n=void 0);var s=this._events&&this._events[t];if(s&&s.length&&!1!==this._listens(t,r,n))return!0;if(i)for(var o in this._eventParents)if(this._eventParents[o].listens(t,e,n,i))return!0;return!1},_listens:function(t,e,n){if(!this._events)return!1;var i=this._events[t]||[];if(!e)return!!i.length;n===this&&(n=void 0);for(var r=0,s=i.length;r<s;r++)if(i[r].fn===e&&i[r].ctx===n)return r;return!1},once:function(t,e,n){if("object"===typeof t)for(var i in t)this._on(i,t[i],e,!0);else{t=d(t);for(var r=0,s=t.length;r<s;r++)this._on(t[r],e,n,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[o(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[o(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,n({layer:t.target,propagatedFrom:t.target},t),!0)}};A.addEventListener=A.on,A.removeEventListener=A.clearAllEventListeners=A.off,A.addOneTimeEventListener=A.once,A.fireEvent=A.fire,A.hasEventListeners=A.listens;var O=P.extend(A);function R(t,e,n){this.x=n?Math.round(t):t,this.y=n?Math.round(e):e}var N=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};function M(t,e,n){return t instanceof R?t:_(t)?new R(t[0],t[1]):void 0===t||null===t?t:"object"===typeof t&&"x"in t&&"y"in t?new R(t.x,t.y):new R(t,e,n)}function D(t,e){if(t)for(var n=e?[t,e]:t,i=0,r=n.length;i<r;i++)this.extend(n[i])}function F(t,e){return!t||t instanceof D?t:new D(t,e)}function j(t,e){if(t)for(var n=e?[t,e]:t,i=0,r=n.length;i<r;i++)this.extend(n[i])}function U(t,e){return t instanceof j?t:new j(t,e)}function B(t,e,n){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==n&&(this.alt=+n)}function z(t,e,n){return t instanceof B?t:_(t)&&"object"!==typeof t[0]?3===t.length?new B(t[0],t[1],t[2]):2===t.length?new B(t[0],t[1]):null:void 0===t||null===t?t:"object"===typeof t&&"lat"in t?new B(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new B(t,e,n)}R.prototype={clone:function(){return new R(this.x,this.y)},add:function(t){return this.clone()._add(M(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(M(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new R(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new R(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=N(this.x),this.y=N(this.y),this},distanceTo:function(t){t=M(t);var e=t.x-this.x,n=t.y-this.y;return Math.sqrt(e*e+n*n)},equals:function(t){return t=M(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=M(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+l(this.x)+", "+l(this.y)+")"}},D.prototype={extend:function(t){var e,n;if(!t)return this;if(t instanceof R||"number"===typeof t[0]||"x"in t)e=n=M(t);else if(t=F(t),e=t.min,n=t.max,!e||!n)return this;return this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)):(this.min=e.clone(),this.max=n.clone()),this},getCenter:function(t){return M((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return M(this.min.x,this.max.y)},getTopRight:function(){return M(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,n;return t="number"===typeof t[0]||t instanceof R?M(t):F(t),t instanceof D?(e=t.min,n=t.max):e=n=t,e.x>=this.min.x&&n.x<=this.max.x&&e.y>=this.min.y&&n.y<=this.max.y},intersects:function(t){t=F(t);var e=this.min,n=this.max,i=t.min,r=t.max,s=r.x>=e.x&&i.x<=n.x,o=r.y>=e.y&&i.y<=n.y;return s&&o},overlaps:function(t){t=F(t);var e=this.min,n=this.max,i=t.min,r=t.max,s=r.x>e.x&&i.x<n.x,o=r.y>e.y&&i.y<n.y;return s&&o},isValid:function(){return!(!this.min||!this.max)},pad:function(t){var e=this.min,n=this.max,i=Math.abs(e.x-n.x)*t,r=Math.abs(e.y-n.y)*t;return F(M(e.x-i,e.y-r),M(n.x+i,n.y+r))},equals:function(t){return!!t&&(t=F(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},j.prototype={extend:function(t){var e,n,i=this._southWest,r=this._northEast;if(t instanceof B)e=t,n=t;else{if(!(t instanceof j))return t?this.extend(z(t)||U(t)):this;if(e=t._southWest,n=t._northEast,!e||!n)return this}return i||r?(i.lat=Math.min(e.lat,i.lat),i.lng=Math.min(e.lng,i.lng),r.lat=Math.max(n.lat,r.lat),r.lng=Math.max(n.lng,r.lng)):(this._southWest=new B(e.lat,e.lng),this._northEast=new B(n.lat,n.lng)),this},pad:function(t){var e=this._southWest,n=this._northEast,i=Math.abs(e.lat-n.lat)*t,r=Math.abs(e.lng-n.lng)*t;return new j(new B(e.lat-i,e.lng-r),new B(n.lat+i,n.lng+r))},getCenter:function(){return new B((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new B(this.getNorth(),this.getWest())},getSouthEast:function(){return new B(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"===typeof t[0]||t instanceof B||"lat"in t?z(t):U(t);var e,n,i=this._southWest,r=this._northEast;return t instanceof j?(e=t.getSouthWest(),n=t.getNorthEast()):e=n=t,e.lat>=i.lat&&n.lat<=r.lat&&e.lng>=i.lng&&n.lng<=r.lng},intersects:function(t){t=U(t);var e=this._southWest,n=this._northEast,i=t.getSouthWest(),r=t.getNorthEast(),s=r.lat>=e.lat&&i.lat<=n.lat,o=r.lng>=e.lng&&i.lng<=n.lng;return s&&o},overlaps:function(t){t=U(t);var e=this._southWest,n=this._northEast,i=t.getSouthWest(),r=t.getNorthEast(),s=r.lat>e.lat&&i.lat<n.lat,o=r.lng>e.lng&&i.lng<n.lng;return s&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=U(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}},B.prototype={equals:function(t,e){if(!t)return!1;t=z(t);var n=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return n<=(void 0===e?1e-9:e)},toString:function(t){return"LatLng("+l(this.lat,t)+", "+l(this.lng,t)+")"},distanceTo:function(t){return H.distance(this,z(t))},wrap:function(){return H.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,n=e/Math.cos(Math.PI/180*this.lat);return U([this.lat-e,this.lng-n],[this.lat+e,this.lng+n])},clone:function(){return new B(this.lat,this.lng,this.alt)}};var V={latLngToPoint:function(t,e){var n=this.projection.project(t),i=this.scale(e);return this.transformation._transform(n,i)},pointToLatLng:function(t,e){var n=this.scale(e),i=this.transformation.untransform(t,n);return this.projection.unproject(i)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,n=this.scale(t),i=this.transformation.transform(e.min,n),r=this.transformation.transform(e.max,n);return new D(i,r)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?c(t.lng,this.wrapLng,!0):t.lng,n=this.wrapLat?c(t.lat,this.wrapLat,!0):t.lat,i=t.alt;return new B(n,e,i)},wrapLatLngBounds:function(t){var e=t.getCenter(),n=this.wrapLatLng(e),i=e.lat-n.lat,r=e.lng-n.lng;if(0===i&&0===r)return t;var s=t.getSouthWest(),o=t.getNorthEast(),a=new B(s.lat-i,s.lng-r),c=new B(o.lat-i,o.lng-r);return new j(a,c)}},H=n({},V,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var n=Math.PI/180,i=t.lat*n,r=e.lat*n,s=Math.sin((e.lat-t.lat)*n/2),o=Math.sin((e.lng-t.lng)*n/2),a=s*s+Math.cos(i)*Math.cos(r)*o*o,c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*c}}),$=6378137,Z={R:$,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,n=this.MAX_LATITUDE,i=Math.max(Math.min(n,t.lat),-n),r=Math.sin(i*e);return new R(this.R*t.lng*e,this.R*Math.log((1+r)/(1-r))/2)},unproject:function(t){var e=180/Math.PI;return new B((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=$*Math.PI;return new D([-t,-t],[t,t])}()};function q(t,e,n,i){if(_(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=e,this._c=n,this._d=i}function W(t,e,n,i){return new q(t,e,n,i)}q.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new R((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};var K=n({},H,{code:"EPSG:3857",projection:Z,transformation:function(){var t=.5/(Math.PI*Z.R);return W(t,.5,-t,.5)}()}),G=n({},K,{code:"EPSG:900913"});function Q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t,e){var n,i,r,s,o,a,c="";for(n=0,r=t.length;n<r;n++){for(o=t[n],i=0,s=o.length;i<s;i++)a=o[i],c+=(i?"L":"M")+a.x+" "+a.y;c+=e?Dt.svg?"z":"x":""}return c||"M0 0"}var J=document.documentElement.style,Y="ActiveXObject"in window,tt=Y&&!document.addEventListener,et="msLaunchUri"in navigator&&!("documentMode"in document),nt=Mt("webkit"),it=Mt("android"),rt=Mt("android 2")||Mt("android 3"),st=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ot=it&&Mt("Google")&&st<537&&!("AudioNode"in window),at=!!window.opera,ct=!et&&Mt("chrome"),ut=Mt("gecko")&&!nt&&!at&&!Y,lt=!ct&&Mt("safari"),ht=Mt("phantom"),dt="OTransition"in J,ft=0===navigator.platform.indexOf("Win"),pt=Y&&"transition"in J,mt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rt,gt="MozPerspective"in J,_t=!window.L_DISABLE_3D&&(pt||mt||gt)&&!dt&&!ht,vt="undefined"!==typeof orientation||Mt("mobile"),yt=vt&&nt,wt=vt&&mt,bt=!window.PointerEvent&&window.MSPointerEvent,Tt=!(!window.PointerEvent&&!bt),Et="ontouchstart"in window||!!window.TouchEvent,St=!window.L_NO_TOUCH&&(Et||Tt),It=vt&&at,xt=vt&&ut,Ct=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Pt=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",u,e),window.removeEventListener("testPassiveEventSupport",u,e)}catch(n){}return t}(),kt=function(){return!!document.createElement("canvas").getContext}(),At=!(!document.createElementNS||!Q("svg").createSVGRect),Ot=!!At&&function(){var t=document.createElement("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}(),Lt=!At&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"===typeof e.adj}catch(n){return!1}}(),Rt=0===navigator.platform.indexOf("Mac"),Nt=0===navigator.platform.indexOf("Linux");function Mt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var Dt={ie:Y,ielt9:tt,edge:et,webkit:nt,android:it,android23:rt,androidStock:ot,opera:at,chrome:ct,gecko:ut,safari:lt,phantom:ht,opera12:dt,win:ft,ie3d:pt,webkit3d:mt,gecko3d:gt,any3d:_t,mobile:vt,mobileWebkit:yt,mobileWebkit3d:wt,msPointer:bt,pointer:Tt,touch:St,touchNative:Et,mobileOpera:It,mobileGecko:xt,retina:Ct,passiveEvents:Pt,canvas:kt,svg:At,vml:Lt,inlineSvg:Ot,mac:Rt,linux:Nt},Ft=Dt.msPointer?"MSPointerDown":"pointerdown",jt=Dt.msPointer?"MSPointerMove":"pointermove",Ut=Dt.msPointer?"MSPointerUp":"pointerup",Bt=Dt.msPointer?"MSPointerCancel":"pointercancel",zt={touchstart:Ft,touchmove:jt,touchend:Ut,touchcancel:Bt},Vt={touchstart:Jt,touchmove:Xt,touchend:Xt,touchcancel:Xt},Ht={},$t=!1;function Zt(t,e,n){return"touchstart"===e&&Qt(),Vt[e]?(n=Vt[e].bind(this,n),t.addEventListener(zt[e],n,!1),n):(console.warn("wrong event specified:",e),u)}function qt(t,e,n){zt[e]?t.removeEventListener(zt[e],n,!1):console.warn("wrong event specified:",e)}function Wt(t){Ht[t.pointerId]=t}function Kt(t){Ht[t.pointerId]&&(Ht[t.pointerId]=t)}function Gt(t){delete Ht[t.pointerId]}function Qt(){$t||(document.addEventListener(Ft,Wt,!0),document.addEventListener(jt,Kt,!0),document.addEventListener(Ut,Gt,!0),document.addEventListener(Bt,Gt,!0),$t=!0)}function Xt(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var n in e.touches=[],Ht)e.touches.push(Ht[n]);e.changedTouches=[e],t(e)}}function Jt(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&We(e),Xt(t,e)}function Yt(t){var e,n,i={};for(n in t)e=t[n],i[n]=e&&e.bind?e.bind(t):e;return t=i,i.type="dblclick",i.detail=2,i.isTrusted=!1,i._simulated=!0,i}var te=200;function ee(t,e){t.addEventListener("dblclick",e);var n,i=0;function r(t){if(1===t.detail){if("mouse"!==t.pointerType&&(!t.sourceCapabilities||t.sourceCapabilities.firesTouchEvents)){var r=Ge(t);if(!r.some((function(t){return t instanceof HTMLLabelElement&&t.attributes.for}))||r.some((function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement}))){var s=Date.now();s-i<=te?(n++,2===n&&e(Yt(t))):n=1,i=s}}}else n=t.detail}return t.addEventListener("click",r),{dblclick:e,simDblclick:r}}function ne(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var ie,re,se,oe,ae,ce=Ie(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ue=Ie(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),le="webkitTransition"===ue||"OTransition"===ue?ue+"End":"transitionend";function he(t){return"string"===typeof t?document.getElementById(t):t}function de(t,e){var n=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!n||"auto"===n)&&document.defaultView){var i=document.defaultView.getComputedStyle(t,null);n=i?i[e]:null}return"auto"===n?null:n}function fe(t,e,n){var i=document.createElement(t);return i.className=e||"",n&&n.appendChild(i),i}function pe(t){var e=t.parentNode;e&&e.removeChild(t)}function me(t){while(t.firstChild)t.removeChild(t.firstChild)}function ge(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function _e(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ve(t,e){if(void 0!==t.classList)return t.classList.contains(e);var n=Te(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)}function ye(t,e){if(void 0!==t.classList)for(var n=d(e),i=0,r=n.length;i<r;i++)t.classList.add(n[i]);else if(!ve(t,e)){var s=Te(t);be(t,(s?s+" ":"")+e)}}function we(t,e){void 0!==t.classList?t.classList.remove(e):be(t,h((" "+Te(t)+" ").replace(" "+e+" "," ")))}function be(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function Te(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function Ee(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Se(t,e)}function Se(t,e){var n=!1,i="DXImageTransform.Microsoft.Alpha";try{n=t.filters.item(i)}catch(r){if(1===e)return}e=Math.round(100*e),n?(n.Enabled=100!==e,n.Opacity=e):t.style.filter+=" progid:"+i+"(opacity="+e+")"}function Ie(t){for(var e=document.documentElement.style,n=0;n<t.length;n++)if(t[n]in e)return t[n];return!1}function xe(t,e,n){var i=e||new R(0,0);t.style[ce]=(Dt.ie3d?"translate("+i.x+"px,"+i.y+"px)":"translate3d("+i.x+"px,"+i.y+"px,0)")+(n?" scale("+n+")":"")}function Ce(t,e){t._leaflet_pos=e,Dt.any3d?xe(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Pe(t){return t._leaflet_pos||new R(0,0)}if("onselectstart"in document)ie=function(){Fe(window,"selectstart",We)},re=function(){Ue(window,"selectstart",We)};else{var ke=Ie(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ie=function(){if(ke){var t=document.documentElement.style;se=t[ke],t[ke]="none"}},re=function(){ke&&(document.documentElement.style[ke]=se,se=void 0)}}function Ae(){Fe(window,"dragstart",We)}function Oe(){Ue(window,"dragstart",We)}function Le(t){while(-1===t.tabIndex)t=t.parentNode;t.style&&(Re(),oe=t,ae=t.style.outlineStyle,t.style.outlineStyle="none",Fe(window,"keydown",Re))}function Re(){oe&&(oe.style.outlineStyle=ae,oe=void 0,ae=void 0,Ue(window,"keydown",Re))}function Ne(t){do{t=t.parentNode}while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Me(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var De={__proto__:null,TRANSFORM:ce,TRANSITION:ue,TRANSITION_END:le,get:he,getStyle:de,create:fe,remove:pe,empty:me,toFront:ge,toBack:_e,hasClass:ve,addClass:ye,removeClass:we,setClass:be,getClass:Te,setOpacity:Ee,testProp:Ie,setTransform:xe,setPosition:Ce,getPosition:Pe,get disableTextSelection(){return ie},get enableTextSelection(){return re},disableImageDrag:Ae,enableImageDrag:Oe,preventOutline:Le,restoreOutline:Re,getSizedParentNode:Ne,getScale:Me};function Fe(t,e,n,i){if(e&&"object"===typeof e)for(var r in e)Ve(t,r,e[r],n);else{e=d(e);for(var s=0,o=e.length;s<o;s++)Ve(t,e[s],n,i)}return this}var je="_leaflet_events";function Ue(t,e,n,i){if(1===arguments.length)Be(t),delete t[je];else if(e&&"object"===typeof e)for(var r in e)He(t,r,e[r],n);else if(e=d(e),2===arguments.length)Be(t,(function(t){return-1!==v(e,t)}));else for(var s=0,o=e.length;s<o;s++)He(t,e[s],n,i);return this}function Be(t,e){for(var n in t[je]){var i=n.split(/\d/)[0];e&&!e(i)||He(t,i,null,null,n)}}var ze={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ve(t,e,n,i){var r=e+o(n)+(i?"_"+o(i):"");if(t[je]&&t[je][r])return this;var s=function(e){return n.call(i||t,e||window.event)},a=s;!Dt.touchNative&&Dt.pointer&&0===e.indexOf("touch")?s=Zt(t,e,s):Dt.touch&&"dblclick"===e?s=ee(t,s):"addEventListener"in t?"touchstart"===e||"touchmove"===e||"wheel"===e||"mousewheel"===e?t.addEventListener(ze[e]||e,s,!!Dt.passiveEvents&&{passive:!1}):"mouseenter"===e||"mouseleave"===e?(s=function(e){e=e||window.event,Ye(t,e)&&a(e)},t.addEventListener(ze[e],s,!1)):t.addEventListener(e,a,!1):t.attachEvent("on"+e,s),t[je]=t[je]||{},t[je][r]=s}function He(t,e,n,i,r){r=r||e+o(n)+(i?"_"+o(i):"");var s=t[je]&&t[je][r];if(!s)return this;!Dt.touchNative&&Dt.pointer&&0===e.indexOf("touch")?qt(t,e,s):Dt.touch&&"dblclick"===e?ne(t,s):"removeEventListener"in t?t.removeEventListener(ze[e]||e,s,!1):t.detachEvent("on"+e,s),t[je][r]=null}function $e(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Ze(t){return Ve(t,"wheel",$e),this}function qe(t){return Fe(t,"mousedown touchstart dblclick contextmenu",$e),t["_leaflet_disable_click"]=!0,this}function We(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ke(t){return We(t),$e(t),this}function Ge(t){if(t.composedPath)return t.composedPath();var e=[],n=t.target;while(n)e.push(n),n=n.parentNode;return e}function Qe(t,e){if(!e)return new R(t.clientX,t.clientY);var n=Me(e),i=n.boundingClientRect;return new R((t.clientX-i.left)/n.x-e.clientLeft,(t.clientY-i.top)/n.y-e.clientTop)}var Xe=Dt.linux&&Dt.chrome?window.devicePixelRatio:Dt.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Je(t){return Dt.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/Xe:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function Ye(t,e){var n=e.relatedTarget;if(!n)return!0;try{while(n&&n!==t)n=n.parentNode}catch(i){return!1}return n!==t}var tn={__proto__:null,on:Fe,off:Ue,stopPropagation:$e,disableScrollPropagation:Ze,disableClickPropagation:qe,preventDefault:We,stop:Ke,getPropagationPath:Ge,getMousePosition:Qe,getWheelDelta:Je,isExternalTarget:Ye,addListener:Fe,removeListener:Ue},en=O.extend({run:function(t,e,n,i){this.stop(),this._el=t,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(i||.5,.2),this._startPos=Pe(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=I(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,n=1e3*this._duration;e<n?this._runFrame(this._easeOut(e/n),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var n=this._startPos.add(this._offset.multiplyBy(t));e&&n._round(),Ce(this._el,n),this.fire("step")},_complete:function(){x(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),nn=O.extend({options:{crs:K,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=f(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(z(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ue&&Dt.any3d&&!Dt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Fe(this._proxy,le,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(z(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i){void 0!==i.animate&&(i.zoom=n({animate:i.animate},i.zoom),i.pan=n({animate:i.animate,duration:i.duration},i.pan));var r=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(r)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(Dt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(Dt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,n){var i=this.getZoomScale(e),r=this.getSize().divideBy(2),s=t instanceof R?t:this.latLngToContainerPoint(t),o=s.subtract(r).multiplyBy(1-1/i),a=this.containerPointToLatLng(r.add(o));return this.setView(a,e,{zoom:n})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():U(t);var n=M(e.paddingTopLeft||e.padding||[0,0]),i=M(e.paddingBottomRight||e.padding||[0,0]),r=this.getBoundsZoom(t,!1,n.add(i));if(r="number"===typeof e.maxZoom?Math.min(e.maxZoom,r):r,r===1/0)return{center:t.getCenter(),zoom:r};var s=i.subtract(n).divideBy(2),o=this.project(t.getSouthWest(),r),a=this.project(t.getNorthEast(),r),c=this.unproject(o.add(a).divideBy(2).add(s),r);return{center:c,zoom:r}},fitBounds:function(t,e){if(t=U(t),!t.isValid())throw new Error("Bounds are not valid.");var n=this._getBoundsCenterZoom(t,e);return this.setView(n.center,n.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=M(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new en,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){ye(this._mapPane,"leaflet-pan-anim");var n=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,n,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,n){if(n=n||{},!1===n.animate||!Dt.any3d)return this.setView(t,e,n);this._stop();var i=this.project(this.getCenter()),r=this.project(t),s=this.getSize(),o=this._zoom;t=z(t),e=void 0===e?o:e;var a=Math.max(s.x,s.y),c=a*this.getZoomScale(o,e),u=r.distanceTo(i)||1,l=1.42,h=l*l;function d(t){var e=t?-1:1,n=t?c:a,i=c*c-a*a+e*h*h*u*u,r=2*n*h*u,s=i/r,o=Math.sqrt(s*s+1)-s,l=o<1e-9?-18:Math.log(o);return l}function f(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}function m(t){return f(t)/p(t)}var g=d(0);function _(t){return a*(p(g)/p(g+l*t))}function v(t){return a*(p(g)*m(g+l*t)-f(g))/h}function y(t){return 1-Math.pow(1-t,1.5)}var w=Date.now(),b=(d(1)-g)/l,T=n.duration?1e3*n.duration:1e3*b*.8;function E(){var n=(Date.now()-w)/T,s=y(n)*b;n<=1?(this._flyToFrame=I(E,this),this._move(this.unproject(i.add(r.subtract(i).multiplyBy(v(s)/u)),o),this.getScaleZoom(a/_(s),o),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),E.call(this),this},flyToBounds:function(t,e){var n=this._getBoundsCenterZoom(t,e);return this.flyTo(n.center,n.zoom,e)},setMaxBounds:function(t){return t=U(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var n=this.getCenter(),i=this._limitCenter(n,this._zoom,U(t));return n.equals(i)||this.panTo(i,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var n=M(e.paddingTopLeft||e.padding||[0,0]),i=M(e.paddingBottomRight||e.padding||[0,0]),r=this.project(this.getCenter()),s=this.project(t),o=this.getPixelBounds(),a=F([o.min.add(n),o.max.subtract(i)]),c=a.getSize();if(!a.contains(s)){this._enforcingBounds=!0;var u=s.subtract(a.getCenter()),l=a.extend(s).getSize().subtract(c);r.x+=u.x<0?-l.x:l.x,r.y+=u.y<0?-l.y:l.y,this.panTo(this.unproject(r),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=n({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),s=e.divideBy(2).round(),o=i.divideBy(2).round(),a=s.subtract(o);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=n({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=r(this._handleGeolocationResponse,this),i=r(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,n=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+n+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,n=t.coords.longitude,i=new B(e,n),r=i.toBounds(2*t.coords.accuracy),s=this._locateOptions;if(s.setView){var o=this.getBoundsZoom(r);this.setView(i,s.maxZoom?Math.min(o,s.maxZoom):o)}var a={latlng:i,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"===typeof t.coords[c]&&(a[c]=t.coords[c]);this.fire("locationfound",a)}},addHandler:function(t,e){if(!e)return this;var n=this[t]=new e(this);return this._handlers.push(n),this.options[t]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(e){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),pe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(x(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)pe(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var n="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i=fe("div",n,e||this._mapPane);return t&&(this._panes[t]=i),i},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),n=this.unproject(t.getTopRight());return new j(e,n)},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,n){t=U(t),n=M(n||[0,0]);var i=this.getZoom()||0,r=this.getMinZoom(),s=this.getMaxZoom(),o=t.getNorthWest(),a=t.getSouthEast(),c=this.getSize().subtract(n),u=F(this.project(a,i),this.project(o,i)).getSize(),l=Dt.any3d?this.options.zoomSnap:1,h=c.x/u.x,d=c.y/u.y,f=e?Math.max(h,d):Math.min(h,d);return i=this.getScaleZoom(f,i),l&&(i=Math.round(i/(l/100))*(l/100),i=e?Math.ceil(i/l)*l:Math.floor(i/l)*l),Math.max(r,Math.min(s,i))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new R(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var n=this._getTopLeftPoint(t,e);return new D(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"===typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var n=this.options.crs;return e=void 0===e?this._zoom:e,n.scale(t)/n.scale(e)},getScaleZoom:function(t,e){var n=this.options.crs;e=void 0===e?this._zoom:e;var i=n.zoom(t*n.scale(e));return isNaN(i)?1/0:i},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(z(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(M(t),e)},layerPointToLatLng:function(t){var e=M(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(z(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(z(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(U(t))},distance:function(t,e){return this.options.crs.distance(z(t),z(e))},containerPointToLayerPoint:function(t){return M(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return M(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(M(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(z(t)))},mouseEventToContainerPoint:function(t){return Qe(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=he(t);if(!e)throw new Error("Map container not found.");if(e._leaflet_id)throw new Error("Map container is already initialized.");Fe(e,"scroll",this._onScroll,this),this._containerId=o(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&Dt.any3d,ye(t,"leaflet-container"+(Dt.touch?" leaflet-touch":"")+(Dt.retina?" leaflet-retina":"")+(Dt.ielt9?" leaflet-oldie":"")+(Dt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=de(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ce(this._mapPane,new R(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ye(t.markerPane,"leaflet-zoom-hide"),ye(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,n){Ce(this._mapPane,new R(0,0));var i=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var r=this._zoom!==e;this._moveStart(r,n)._move(t,e)._moveEnd(r),this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,n,i){void 0===e&&(e=this._zoom);var r=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),i?n&&n.pinch&&this.fire("zoom",n):((r||n&&n.pinch)&&this.fire("zoom",n),this.fire("move",n)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return x(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Ce(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[o(this._container)]=this;var e=t?Ue:Fe;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),Dt.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){x(this._resizeRequest),this._resizeRequest=I((function(){this.invalidateSize({debounceMoveend:!0})}),this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){var n,i=[],r="mouseout"===e||"mouseover"===e,s=t.target||t.srcElement,a=!1;while(s){if(n=this._targets[o(s)],n&&("click"===e||"preclick"===e)&&this._draggableMoved(n)){a=!0;break}if(n&&n.listens(e,!0)){if(r&&!Ye(s,t))break;if(i.push(n),r)break}if(s===this._container)break;s=s.parentNode}return i.length||a||r||!this.listens(e,!0)||(i=[this]),i},_isClickDisabled:function(t){while(t&&t!==this._container){if(t["_leaflet_disable_click"])return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e["_leaflet_disable_events"]||"click"===t.type&&this._isClickDisabled(e))){var n=t.type;"mousedown"===n&&Le(e),this._fireDOMEvent(t,n)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if("click"===t.type){var r=n({},t);r.type="preclick",this._fireDOMEvent(r,r.type,i)}var s=this._findEventTargets(t,e);if(i){for(var o=[],a=0;a<i.length;a++)i[a].listens(e,!0)&&o.push(i[a]);s=o.concat(s)}if(s.length){"contextmenu"===e&&We(t);var c=s[0],u={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var l=c.getLatLng&&(!c._radius||c._radius<=10);u.containerPoint=l?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(t),u.layerPoint=this.containerPointToLayerPoint(u.containerPoint),u.latlng=l?c.getLatLng():this.layerPointToLatLng(u.layerPoint)}for(a=0;a<s.length;a++)if(s[a].fire(e,u,!0),u.originalEvent._stopped||!1===s[a].options.bubblingMouseEvents&&-1!==v(this._mouseEvents,e))return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Pe(this._mapPane)||new R(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var n=t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return n.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var n=this.getSize()._divideBy(2);return this.project(t,e)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,n){var i=this._getNewPixelOrigin(n,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,n){var i=this._getNewPixelOrigin(n,e);return F([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,n){if(!n)return t;var i=this.project(t,e),r=this.getSize().divideBy(2),s=new D(i.subtract(r),i.add(r)),o=this._getBoundsOffset(s,n,e);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?t:this.unproject(i.add(o),e)},_limitOffset:function(t,e){if(!e)return t;var n=this.getPixelBounds(),i=new D(n.min.add(t),n.max.add(t));return t.add(this._getBoundsOffset(i,e))},_getBoundsOffset:function(t,e,n){var i=F(this.project(e.getNorthEast(),n),this.project(e.getSouthWest(),n)),r=i.min.subtract(t.min),s=i.max.subtract(t.max),o=this._rebound(r.x,-s.x),a=this._rebound(r.y,-s.y);return new R(o,a)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),n=this.getMaxZoom(),i=Dt.any3d?this.options.zoomSnap:1;return i&&(t=Math.round(t/i)*i),Math.max(e,Math.min(n,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){we(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var n=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(n))&&(this.panBy(n,e),!0)},_createAnimProxy:function(){var t=this._proxy=fe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",(function(t){var e=ce,n=this._proxy.style[e];xe(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),n===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()}),this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){pe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();xe(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,n){if(this._animatingZoom)return!0;if(n=n||{},!this._zoomAnimated||!1===n.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var i=this.getZoomScale(e),r=this._getCenterOffset(t)._divideBy(1-1/i);return!(!0!==n.animate&&!this.getSize().contains(r))&&(I((function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(t,e,!0)}),this),!0)},_animateZoom:function(t,e,n,i){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,ye(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:i}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&we(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function rn(t,e){return new nn(t,e)}var sn=P.extend({options:{position:"topright"},initialize:function(t){f(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),n=this.getPosition(),i=t._controlCorners[n];return ye(e,"leaflet-control"),-1!==n.indexOf("bottom")?i.insertBefore(e,i.firstChild):i.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(pe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),on=function(t){return new sn(t)};nn.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",n=this._controlContainer=fe("div",e+"control-container",this._container);function i(i,r){var s=e+i+" "+e+r;t[i+r]=fe("div",s,n)}i("top","left"),i("top","right"),i("bottom","left"),i("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)pe(this._controlCorners[t]);pe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var an=sn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,n,i){return n<i?-1:i<n?1:0}},initialize:function(t,e,n){for(var i in f(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[i],i);for(i in e)this._addLayer(e[i],i,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return sn.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(o(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){ye(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(ye(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):we(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return we(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=fe("div",t),n=this.options.collapsed;e.setAttribute("aria-haspopup",!0),qe(e),Ze(e);var i=this._section=fe("section",t+"-list");n&&(this._map.on("click",this.collapse,this),Fe(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var r=this._layersLink=fe("a",t+"-toggle",e);r.href="#",r.title="Layers",r.setAttribute("role","button"),Fe(r,{keydown:function(t){13===t.keyCode&&this._expandSafely()},click:function(t){We(t),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=fe("div",t+"-base",i),this._separator=fe("div",t+"-separator",i),this._overlaysList=fe("div",t+"-overlays",i),e.appendChild(i)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&o(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:n}),this.options.sortLayers&&this._layers.sort(r((function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)}),this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;me(this._baseLayersList),me(this._overlaysList),this._layerControlInputs=[];var t,e,n,i,r=0;for(n=0;n<this._layers.length;n++)i=this._layers[n],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,r+=i.overlay?0:1;return this.options.hideSingleBase&&(t=t&&r>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(o(t.target)),n=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;n&&this._map.fire(n,e)},_createRadioElement:function(t,e){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",i=document.createElement("div");return i.innerHTML=n,i.firstChild},_addItem:function(t){var e,n=document.createElement("label"),i=this._map.hasLayer(t.layer);t.overlay?(e=document.createElement("input"),e.type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=i):e=this._createRadioElement("leaflet-base-layers_"+o(this),i),this._layerControlInputs.push(e),e.layerId=o(t.layer),Fe(e,"click",this._onInputClick,this);var r=document.createElement("span");r.innerHTML=" "+t.name;var s=document.createElement("span");n.appendChild(s),s.appendChild(e),s.appendChild(r);var a=t.overlay?this._overlaysList:this._baseLayersList;return a.appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){if(!this._preventClick){var t,e,n=this._layerControlInputs,i=[],r=[];this._handlingClick=!0;for(var s=n.length-1;s>=0;s--)t=n[s],e=this._getLayer(t.layerId).layer,t.checked?i.push(e):t.checked||r.push(e);for(s=0;s<r.length;s++)this._map.hasLayer(r[s])&&this._map.removeLayer(r[s]);for(s=0;s<i.length;s++)this._map.hasLayer(i[s])||this._map.addLayer(i[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,n=this._layerControlInputs,i=this._map.getZoom(),r=n.length-1;r>=0;r--)t=n[r],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&i<e.options.minZoom||void 0!==e.options.maxZoom&&i>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,Fe(t,"click",We),this.expand();var e=this;setTimeout((function(){Ue(t,"click",We),e._preventClick=!1}))}}),cn=function(t,e,n){return new an(t,e,n)},un=sn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",n=fe("div",e+" leaflet-bar"),i=this.options;return this._zoomInButton=this._createButton(i.zoomInText,i.zoomInTitle,e+"-in",n,this._zoomIn),this._zoomOutButton=this._createButton(i.zoomOutText,i.zoomOutTitle,e+"-out",n,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,n,i,r){var s=fe("a",n,i);return s.innerHTML=t,s.href="#",s.title=e,s.setAttribute("role","button"),s.setAttribute("aria-label",e),qe(s),Fe(s,"click",Ke),Fe(s,"click",r,this),Fe(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";we(this._zoomInButton,e),we(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(ye(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(ye(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});nn.mergeOptions({zoomControl:!0}),nn.addInitHook((function(){this.options.zoomControl&&(this.zoomControl=new un,this.addControl(this.zoomControl))}));var ln=function(t){return new un(t)},hn=sn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",n=fe("div",e),i=this.options;return this._addScales(i,e+"-line",n),t.on(i.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),n},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,n){t.metric&&(this._mScale=fe("div",e,n)),t.imperial&&(this._iScale=fe("div",e,n))},_update:function(){var t=this._map,e=t.getSize().y/2,n=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(n)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),n=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,n,e/t)},_updateImperial:function(t){var e,n,i,r=3.2808399*t;r>5280?(e=r/5280,n=this._getRoundNum(e),this._updateScale(this._iScale,n+" mi",n/e)):(i=this._getRoundNum(r),this._updateScale(this._iScale,i+" ft",i/r))},_updateScale:function(t,e,n){t.style.width=Math.round(this.options.maxWidth*n)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),n=t/e;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,e*n}}),dn=function(t){return new hn(t)},fn='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',pn=sn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Dt.inlineSvg?fn+" ":"")+"Leaflet</a>"},initialize:function(t){f(this,t),this._attributions={}},onAdd:function(t){for(var e in t.attributionControl=this,this._container=fe("div","leaflet-control-attribution"),qe(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",(function(){this.removeAttribution(t.layer.getAttribution())}),this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var n=[];this.options.prefix&&n.push(this.options.prefix),t.length&&n.push(t.join(", ")),this._container.innerHTML=n.join(' <span aria-hidden="true">|</span> ')}}});nn.mergeOptions({attributionControl:!0}),nn.addInitHook((function(){this.options.attributionControl&&(new pn).addTo(this)}));var mn=function(t){return new pn(t)};sn.Layers=an,sn.Zoom=un,sn.Scale=hn,sn.Attribution=pn,on.layers=cn,on.zoom=ln,on.scale=dn,on.attribution=mn;var gn=P.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});gn.addTo=function(t,e){return t.addHandler(e,this),this};var _n={Events:A},vn=Dt.touch?"touchstart mousedown":"mousedown",yn=O.extend({options:{clickTolerance:3},initialize:function(t,e,n,i){f(this,i),this._element=t,this._dragStartTarget=e||t,this._preventOutline=n},enable:function(){this._enabled||(Fe(this._dragStartTarget,vn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(yn._dragging===this&&this.finishDrag(!0),Ue(this._dragStartTarget,vn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!ve(this._element,"leaflet-zoom-anim")))if(t.touches&&1!==t.touches.length)yn._dragging===this&&this.finishDrag();else if(!(yn._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches)&&(yn._dragging=this,this._preventOutline&&Le(this._element),Ae(),ie(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,n=Ne(this._element);this._startPoint=new R(e.clientX,e.clientY),this._startPos=Pe(this._element),this._parentScale=Me(n);var i="mousedown"===t.type;Fe(document,i?"mousemove":"touchmove",this._onMove,this),Fe(document,i?"mouseup":"touchend touchcancel",this._onUp,this)}},_onMove:function(t){if(this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var e=t.touches&&1===t.touches.length?t.touches[0]:t,n=new R(e.clientX,e.clientY)._subtract(this._startPoint);(n.x||n.y)&&(Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,We(t),this._moved||(this.fire("dragstart"),this._moved=!0,ye(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ye(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=t,this._updatePosition()))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Ce(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){we(document.body,"leaflet-dragging"),this._lastTarget&&(we(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ue(document,"mousemove touchmove",this._onMove,this),Ue(document,"mouseup touchend touchcancel",this._onUp,this),Oe(),re();var e=this._moved&&this._moving;this._moving=!1,yn._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function wn(t,e,n){var i,r,s,o,a,c,u,l,h,d=[1,4,2,8];for(r=0,u=t.length;r<u;r++)t[r]._code=Rn(t[r],e);for(o=0;o<4;o++){for(l=d[o],i=[],r=0,u=t.length,s=u-1;r<u;s=r++)a=t[r],c=t[s],a._code&l?c._code&l||(h=Ln(c,a,l,e,n),h._code=Rn(h,e),i.push(h)):(c._code&l&&(h=Ln(c,a,l,e,n),h._code=Rn(h,e),i.push(h)),i.push(a));t=i}return t}function bn(t,e){var n,i,r,s,o,a,c,u,l;if(!t||0===t.length)throw new Error("latlngs not passed");Dn(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var h=z([0,0]),d=U(t),f=d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest());f<1700&&(h=Tn(t));var p=t.length,m=[];for(n=0;n<p;n++){var g=z(t[n]);m.push(e.project(z([g.lat-h.lat,g.lng-h.lng])))}for(a=c=u=0,n=0,i=p-1;n<p;i=n++)r=m[n],s=m[i],o=r.y*s.x-s.y*r.x,c+=(r.x+s.x)*o,u+=(r.y+s.y)*o,a+=3*o;l=0===a?m[0]:[c/a,u/a];var _=e.unproject(M(l));return z([_.lat+h.lat,_.lng+h.lng])}function Tn(t){for(var e=0,n=0,i=0,r=0;r<t.length;r++){var s=z(t[r]);e+=s.lat,n+=s.lng,i++}return z([e/i,n/i])}var En,Sn={__proto__:null,clipPolygon:wn,polygonCenter:bn,centroid:Tn};function In(t,e){if(!e||!t.length)return t.slice();var n=e*e;return t=An(t,n),t=Pn(t,n),t}function xn(t,e,n){return Math.sqrt(Mn(t,e,n,!0))}function Cn(t,e,n){return Mn(t,e,n)}function Pn(t,e){var n=t.length,i=typeof Uint8Array!==void 0+""?Uint8Array:Array,r=new i(n);r[0]=r[n-1]=1,kn(t,r,e,0,n-1);var s,o=[];for(s=0;s<n;s++)r[s]&&o.push(t[s]);return o}function kn(t,e,n,i,r){var s,o,a,c=0;for(o=i+1;o<=r-1;o++)a=Mn(t[o],t[i],t[r],!0),a>c&&(s=o,c=a);c>n&&(e[s]=1,kn(t,e,n,i,s),kn(t,e,n,s,r))}function An(t,e){for(var n=[t[0]],i=1,r=0,s=t.length;i<s;i++)Nn(t[i],t[r])>e&&(n.push(t[i]),r=i);return r<s-1&&n.push(t[s-1]),n}function On(t,e,n,i,r){var s,o,a,c=i?En:Rn(t,n),u=Rn(e,n);En=u;while(1){if(!(c|u))return[t,e];if(c&u)return!1;s=c||u,o=Ln(t,e,s,n,r),a=Rn(o,n),s===c?(t=o,c=a):(e=o,u=a)}}function Ln(t,e,n,i,r){var s,o,a=e.x-t.x,c=e.y-t.y,u=i.min,l=i.max;return 8&n?(s=t.x+a*(l.y-t.y)/c,o=l.y):4&n?(s=t.x+a*(u.y-t.y)/c,o=u.y):2&n?(s=l.x,o=t.y+c*(l.x-t.x)/a):1&n&&(s=u.x,o=t.y+c*(u.x-t.x)/a),new R(s,o,r)}function Rn(t,e){var n=0;return t.x<e.min.x?n|=1:t.x>e.max.x&&(n|=2),t.y<e.min.y?n|=4:t.y>e.max.y&&(n|=8),n}function Nn(t,e){var n=e.x-t.x,i=e.y-t.y;return n*n+i*i}function Mn(t,e,n,i){var r,s=e.x,o=e.y,a=n.x-s,c=n.y-o,u=a*a+c*c;return u>0&&(r=((t.x-s)*a+(t.y-o)*c)/u,r>1?(s=n.x,o=n.y):r>0&&(s+=a*r,o+=c*r)),a=t.x-s,c=t.y-o,i?a*a+c*c:new R(s,o)}function Dn(t){return!_(t[0])||"object"!==typeof t[0][0]&&"undefined"!==typeof t[0][0]}function Fn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Dn(t)}function jn(t,e){var n,i,r,s,o,a,c,u;if(!t||0===t.length)throw new Error("latlngs not passed");Dn(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var l=z([0,0]),h=U(t),d=h.getNorthWest().distanceTo(h.getSouthWest())*h.getNorthEast().distanceTo(h.getNorthWest());d<1700&&(l=Tn(t));var f=t.length,p=[];for(n=0;n<f;n++){var m=z(t[n]);p.push(e.project(z([m.lat-l.lat,m.lng-l.lng])))}for(n=0,i=0;n<f-1;n++)i+=p[n].distanceTo(p[n+1])/2;if(0===i)u=p[0];else for(n=0,s=0;n<f-1;n++)if(o=p[n],a=p[n+1],r=o.distanceTo(a),s+=r,s>i){c=(s-i)/r,u=[a.x-c*(a.x-o.x),a.y-c*(a.y-o.y)];break}var g=e.unproject(M(u));return z([g.lat+l.lat,g.lng+l.lng])}var Un={__proto__:null,simplify:In,pointToSegmentDistance:xn,closestPointOnSegment:Cn,clipSegment:On,_getEdgeIntersection:Ln,_getBitCode:Rn,_sqClosestPointOnSegment:Mn,isFlat:Dn,_flat:Fn,polylineCenter:jn},Bn={project:function(t){return new R(t.lng,t.lat)},unproject:function(t){return new B(t.y,t.x)},bounds:new D([-180,-90],[180,90])},zn={R:6378137,R_MINOR:6356752.314245179,bounds:new D([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,n=this.R,i=t.lat*e,r=this.R_MINOR/n,s=Math.sqrt(1-r*r),o=s*Math.sin(i),a=Math.tan(Math.PI/4-i/2)/Math.pow((1-o)/(1+o),s/2);return i=-n*Math.log(Math.max(a,1e-10)),new R(t.lng*e*n,i)},unproject:function(t){for(var e,n=180/Math.PI,i=this.R,r=this.R_MINOR/i,s=Math.sqrt(1-r*r),o=Math.exp(-t.y/i),a=Math.PI/2-2*Math.atan(o),c=0,u=.1;c<15&&Math.abs(u)>1e-7;c++)e=s*Math.sin(a),e=Math.pow((1-e)/(1+e),s/2),u=Math.PI/2-2*Math.atan(o*e)-a,a+=u;return new B(a*n,t.x*n/i)}},Vn={__proto__:null,LonLat:Bn,Mercator:zn,SphericalMercator:Z},Hn=n({},H,{code:"EPSG:3395",projection:zn,transformation:function(){var t=.5/(Math.PI*zn.R);return W(t,.5,-t,.5)}()}),$n=n({},H,{code:"EPSG:4326",projection:Bn,transformation:W(1/180,1,-1/180,.5)}),Zn=n({},V,{projection:Bn,transformation:W(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var n=e.lng-t.lng,i=e.lat-t.lat;return Math.sqrt(n*n+i*i)},infinite:!0});V.Earth=H,V.EPSG3395=Hn,V.EPSG3857=K,V.EPSG900913=G,V.EPSG4326=$n,V.Simple=Zn;var qn=O.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[o(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[o(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var n=this.getEvents();e.on(n,this),this.once("remove",(function(){e.off(n,this)}),this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});nn.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=o(t);return this._layers[e]||(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},removeLayer:function(t){var e=o(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return o(t)in this._layers},eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},_addLayers:function(t){t=t?_(t)?t:[t]:[];for(var e=0,n=t.length;e<n;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[o(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=o(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,n=this._getZoomSpan();for(var i in this._zoomBoundLayers){var r=this._zoomBoundLayers[i].options;t=void 0===r.minZoom?t:Math.min(t,r.minZoom),e=void 0===r.maxZoom?e:Math.max(e,r.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Wn=qn.extend({initialize:function(t,e){var n,i;if(f(this,e),this._layers={},t)for(n=0,i=t.length;n<i;n++)this.addLayer(t[n])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e="number"===typeof t?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,n,i=Array.prototype.slice.call(arguments,1);for(e in this._layers)n=this._layers[e],n[t]&&n[t].apply(n,i);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o(t)}}),Kn=function(t,e){return new Wn(t,e)},Gn=Wn.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Wn.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Wn.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new j;for(var e in this._layers){var n=this._layers[e];t.extend(n.getBounds?n.getBounds():n.getLatLng())}return t}}),Qn=function(t,e){return new Gn(t,e)},Xn=P.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){f(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var n=this._getIconUrl(t);if(!n){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var i=this._createImg(n,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(i,t),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i},_setIconStyles:function(t,e){var n=this.options,i=n[e+"Size"];"number"===typeof i&&(i=[i,i]);var r=M(i),s=M("shadow"===e&&n.shadowAnchor||n.iconAnchor||r&&r.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(n.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),r&&(t.style.width=r.x+"px",t.style.height=r.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return Dt.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Jn(t){return new Xn(t)}var Yn=Xn.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return"string"!==typeof Yn.imagePath&&(Yn.imagePath=this._detectIconPath()),(this.options.imagePath||Yn.imagePath)+Xn.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(t,e,n){var i=e.exec(t);return i&&i[n]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=fe("div","leaflet-default-icon-path",document.body),e=de(t,"background-image")||de(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var n=document.querySelector('link[href$="leaflet.css"]');return n?n.href.substring(0,n.href.length-11-1):""}}),ti=gn.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new yn(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ye(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&we(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,n=e._map,i=this._marker.options.autoPanSpeed,r=this._marker.options.autoPanPadding,s=Pe(e._icon),o=n.getPixelBounds(),a=n.getPixelOrigin(),c=F(o.min._subtract(a).add(r),o.max._subtract(a).subtract(r));if(!c.contains(s)){var u=M((Math.max(c.max.x,s.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,s.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,s.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,s.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(i);n.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),Ce(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=I(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(x(this._panRequest),this._panRequest=I(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,n=e._shadow,i=Pe(e._icon),r=e._map.layerPointToLatLng(i);n&&Ce(n,i),e._latlng=r,t.latlng=r,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){x(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),ei=qn.extend({options:{icon:new Yn,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){f(this,e),this._latlng=z(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=z(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),n=t.icon.createIcon(this._icon),i=!1;n!==this._icon&&(this._icon&&this._removeIcon(),i=!0,t.title&&(n.title=t.title),"IMG"===n.tagName&&(n.alt=t.alt||"")),ye(n,e),t.keyboard&&(n.tabIndex="0",n.setAttribute("role","button")),this._icon=n,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Fe(n,"focus",this._panOnFocus,this);var r=t.icon.createShadow(this._shadow),s=!1;r!==this._shadow&&(this._removeShadow(),s=!0),r&&(ye(r,e),r.alt=""),this._shadow=r,t.opacity<1&&this._updateOpacity(),i&&this.getPane().appendChild(this._icon),this._initInteraction(),r&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ue(this._icon,"focus",this._panOnFocus,this),pe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&pe(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Ce(this._icon,t),this._shadow&&Ce(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(ye(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ti)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ti(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Ee(this._icon,t),this._shadow&&Ee(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,n=e.iconSize?M(e.iconSize):M(0,0),i=e.iconAnchor?M(e.iconAnchor):M(0,0);t.panInside(this._latlng,{paddingTopLeft:i,paddingBottomRight:n.subtract(i)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ni(t,e){return new ei(t,e)}var ii=qn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return f(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ri=ii.extend({options:{fill:!0,radius:10},initialize:function(t,e){f(this,e),this._latlng=z(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=z(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return ii.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,n=this._clickTolerance(),i=[t+n,e+n];this._pxBounds=new D(this._point.subtract(i),this._point.add(i))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function si(t,e){return new ri(t,e)}var oi=ri.extend({initialize:function(t,e,i){if("number"===typeof e&&(e=n({},i,{radius:e})),f(this,e),this._latlng=z(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new j(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:ii.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,n=this._map,i=n.options.crs;if(i.distance===H.distance){var r=Math.PI/180,s=this._mRadius/H.R/r,o=n.project([e+s,t]),a=n.project([e-s,t]),c=o.add(a).divideBy(2),u=n.unproject(c).lat,l=Math.acos((Math.cos(s*r)-Math.sin(e*r)*Math.sin(u*r))/(Math.cos(e*r)*Math.cos(u*r)))/r;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*e)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(l)?0:c.x-n.project([u,t-l]).x,this._radiusY=c.y-o.y}else{var h=i.unproject(i.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(h).x}this._updateBounds()}});function ai(t,e,n){return new oi(t,e,n)}var ci=ii.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){f(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e,n,i=1/0,r=null,s=Mn,o=0,a=this._parts.length;o<a;o++)for(var c=this._parts[o],u=1,l=c.length;u<l;u++){e=c[u-1],n=c[u];var h=s(t,e,n,!0);h<i&&(i=h,r=s(t,e,n))}return r&&(r.distance=Math.sqrt(i)),r},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return jn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=z(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new j,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Dn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],n=Dn(t),i=0,r=t.length;i<r;i++)n?(e[i]=z(t[i]),this._bounds.extend(e[i])):e[i]=this._convertLatLngs(t[i]);return e},_project:function(){var t=new D;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new R(t,t);this._rawPxBounds&&(this._pxBounds=new D([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,n){var i,r,s=t[0]instanceof B,o=t.length;if(s){for(r=[],i=0;i<o;i++)r[i]=this._map.latLngToLayerPoint(t[i]),n.extend(r[i]);e.push(r)}else for(i=0;i<o;i++)this._projectLatlngs(t[i],e,n)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var e,n,i,r,s,o,a,c=this._parts;for(e=0,i=0,r=this._rings.length;e<r;e++)for(a=this._rings[e],n=0,s=a.length;n<s-1;n++)o=On(a[n],a[n+1],t,n,!0),o&&(c[i]=c[i]||[],c[i].push(o[0]),o[1]===a[n+1]&&n!==s-2||(c[i].push(o[1]),i++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,n=0,i=t.length;n<i;n++)t[n]=In(t[n],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var n,i,r,s,o,a,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(n=0,s=this._parts.length;n<s;n++)for(a=this._parts[n],i=0,o=a.length,r=o-1;i<o;r=i++)if((e||0!==i)&&xn(t,a[r],a[i])<=c)return!0;return!1}});function ui(t,e){return new ci(t,e)}ci._flat=Fn;var li=ci.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return bn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=ci.prototype._convertLatLngs.call(this,t),n=e.length;return n>=2&&e[0]instanceof B&&e[0].equals(e[n-1])&&e.pop(),e},_setLatLngs:function(t){ci.prototype._setLatLngs.call(this,t),Dn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Dn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,n=new R(e,e);if(t=new D(t.min.subtract(n),t.max.add(n)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,r=0,s=this._rings.length;r<s;r++)i=wn(this._rings[r],t,!0),i.length&&this._parts.push(i)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,n,i,r,s,o,a,c,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(r=0,a=this._parts.length;r<a;r++)for(e=this._parts[r],s=0,c=e.length,o=c-1;s<c;o=s++)n=e[s],i=e[o],n.y>t.y!==i.y>t.y&&t.x<(i.x-n.x)*(t.y-n.y)/(i.y-n.y)+n.x&&(u=!u);return u||ci.prototype._containsPoint.call(this,t,!0)}});function hi(t,e){return new li(t,e)}var di=Gn.extend({initialize:function(t,e){f(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,n,i,r=_(t)?t:t.features;if(r){for(e=0,n=r.length;e<n;e++)i=r[e],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var o=fi(t,s);return o?(o.feature=wi(t),o.defaultOptions=o.options,this.resetStyle(o),s.onEachFeature&&s.onEachFeature(t,o),this.addLayer(o)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=n({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer((function(e){this._setLayerStyle(e,t)}),this)},_setLayerStyle:function(t,e){t.setStyle&&("function"===typeof e&&(e=e(t.feature)),t.setStyle(e))}});function fi(t,e){var n,i,r,s,o="Feature"===t.type?t.geometry:t,a=o?o.coordinates:null,c=[],u=e&&e.pointToLayer,l=e&&e.coordsToLatLng||mi;if(!a&&!o)return null;switch(o.type){case"Point":return n=l(a),pi(u,t,n,e);case"MultiPoint":for(r=0,s=a.length;r<s;r++)n=l(a[r]),c.push(pi(u,t,n,e));return new Gn(c);case"LineString":case"MultiLineString":return i=gi(a,"LineString"===o.type?0:1,l),new ci(i,e);case"Polygon":case"MultiPolygon":return i=gi(a,"Polygon"===o.type?1:2,l),new li(i,e);case"GeometryCollection":for(r=0,s=o.geometries.length;r<s;r++){var h=fi({geometry:o.geometries[r],type:"Feature",properties:t.properties},e);h&&c.push(h)}return new Gn(c);case"FeatureCollection":for(r=0,s=o.features.length;r<s;r++){var d=fi(o.features[r],e);d&&c.push(d)}return new Gn(c);default:throw new Error("Invalid GeoJSON object.")}}function pi(t,e,n,i){return t?t(e,n):new ei(n,i&&i.markersInheritOptions&&i)}function mi(t){return new B(t[1],t[0],t[2])}function gi(t,e,n){for(var i,r=[],s=0,o=t.length;s<o;s++)i=e?gi(t[s],e-1,n):(n||mi)(t[s]),r.push(i);return r}function _i(t,e){return t=z(t),void 0!==t.alt?[l(t.lng,e),l(t.lat,e),l(t.alt,e)]:[l(t.lng,e),l(t.lat,e)]}function vi(t,e,n,i){for(var r=[],s=0,o=t.length;s<o;s++)r.push(e?vi(t[s],Dn(t[s])?0:e-1,n,i):_i(t[s],i));return!e&&n&&r.length>0&&r.push(r[0].slice()),r}function yi(t,e){return t.feature?n({},t.feature,{geometry:e}):wi(e)}function wi(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var bi={toGeoJSON:function(t){return yi(this,{type:"Point",coordinates:_i(this.getLatLng(),t)})}};function Ti(t,e){return new di(t,e)}ei.include(bi),oi.include(bi),ri.include(bi),ci.include({toGeoJSON:function(t){var e=!Dn(this._latlngs),n=vi(this._latlngs,e?1:0,!1,t);return yi(this,{type:(e?"Multi":"")+"LineString",coordinates:n})}}),li.include({toGeoJSON:function(t){var e=!Dn(this._latlngs),n=e&&!Dn(this._latlngs[0]),i=vi(this._latlngs,n?2:e?1:0,!0,t);return e||(i=[i]),yi(this,{type:(n?"Multi":"")+"Polygon",coordinates:i})}}),Wn.include({toMultiPoint:function(t){var e=[];return this.eachLayer((function(n){e.push(n.toGeoJSON(t).geometry.coordinates)})),yi(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var n="GeometryCollection"===e,i=[];return this.eachLayer((function(e){if(e.toGeoJSON){var r=e.toGeoJSON(t);if(n)i.push(r.geometry);else{var s=wi(r);"FeatureCollection"===s.type?i.push.apply(i,s.features):i.push(s)}}})),n?yi(this,{geometries:i,type:"GeometryCollection"}):{type:"FeatureCollection",features:i}}});var Ei=Ti,Si=qn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,n){this._url=t,this._bounds=U(e),f(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ye(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){pe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ge(this._image),this},bringToBack:function(){return this._map&&_e(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=U(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:fe("img");ye(e,"leaflet-image-layer"),this._zoomAnimated&&ye(e,"leaflet-zoom-animated"),this.options.className&&ye(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onload=r(this.fire,this,"load"),e.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;xe(this._image,n,e)},_reset:function(){var t=this._image,e=new D(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=e.getSize();Ce(t,e.min),t.style.width=n.x+"px",t.style.height=n.y+"px"},_updateOpacity:function(){Ee(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Ii=function(t,e,n){return new Si(t,e,n)},xi=Si.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:fe("video");if(ye(e,"leaflet-image-layer"),this._zoomAnimated&&ye(e,"leaflet-zoom-animated"),this.options.className&&ye(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onloadeddata=r(this.fire,this,"load"),t){for(var n=e.getElementsByTagName("source"),i=[],s=0;s<n.length;s++)i.push(n[s].src);this._url=n.length>0?i:[e.src]}else{_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style["objectFit"]="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var a=fe("source");a.src=this._url[o],e.appendChild(a)}}}});function Ci(t,e,n){return new xi(t,e,n)}var Pi=Si.extend({_initImage:function(){var t=this._image=this._url;ye(t,"leaflet-image-layer"),this._zoomAnimated&&ye(t,"leaflet-zoom-animated"),this.options.className&&ye(t,this.options.className),t.onselectstart=u,t.onmousemove=u}});function ki(t,e,n){return new Pi(t,e,n)}var Ai=qn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof B||_(t))?(this._latlng=z(t),f(this,e)):(f(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Ee(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Ee(this._container,1),this.bringToFront(),this.options.interactive&&(ye(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Ee(this._container,0),this._removeTimeout=setTimeout(r(pe,void 0,this._container),200)):pe(this._container),this.options.interactive&&(we(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=z(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ge(this._container),this},bringToBack:function(){return this._map&&_e(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof Gn){e=null;var n=this._source._layers;for(var i in n)if(n[i]._map){e=n[i];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else{if(!e.getBounds)throw new Error("Unable to get source layer LatLng.");t=e.getBounds().getCenter()}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"===typeof this._content?this._content(this._source||this):this._content;if("string"===typeof e)t.innerHTML=e;else{while(t.hasChildNodes())t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=M(this.options.offset),n=this._getAnchor();this._zoomAnimated?Ce(this._container,t.add(n)):e=e.add(t).add(n);var i=this._containerBottom=-e.y,r=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=i+"px",this._container.style.left=r+"px"}},_getAnchor:function(){return[0,0]}});nn.include({_initOverlay:function(t,e,n,i){var r=e;return r instanceof t||(r=new t(i).setContent(e)),n&&r.setLatLng(n),r}}),qn.include({_initOverlay:function(t,e,n,i){var r=n;return r instanceof t?(f(r,i),r._source=this):(r=e&&!i?e:new t(i,this),r.setContent(n)),r}});var Oi=Ai.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ai.prototype.openOn.call(this,t)},onAdd:function(t){Ai.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ii||this._source.on("preclick",$e))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ii||this._source.off("preclick",$e))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=fe("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),n=this._wrapper=fe("div",t+"-content-wrapper",e);if(this._contentNode=fe("div",t+"-content",n),qe(e),Ze(this._contentNode),Fe(e,"contextmenu",$e),this._tipContainer=fe("div",t+"-tip-container",e),this._tip=fe("div",t+"-tip",this._tipContainer),this.options.closeButton){var i=this._closeButton=fe("a",t+"-close-button",e);i.setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',Fe(i,"click",(function(t){We(t),this.close()}),this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var n=t.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),e.width=n+1+"px",e.whiteSpace="",e.height="";var i=t.offsetHeight,r=this.options.maxHeight,s="leaflet-popup-scrolled";r&&i>r?(e.height=r+"px",ye(t,s)):we(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),n=this._getAnchor();Ce(this._container,e.add(n))},_adjustPan:function(){if(this.options.autoPan)if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning)this._autopanning=!1;else{var t=this._map,e=parseInt(de(this._container,"marginBottom"),10)||0,n=this._container.offsetHeight+e,i=this._containerWidth,r=new R(this._containerLeft,-n-this._containerBottom);r._add(Pe(this._container));var s=t.layerPointToContainerPoint(r),o=M(this.options.autoPanPadding),a=M(this.options.autoPanPaddingTopLeft||o),c=M(this.options.autoPanPaddingBottomRight||o),u=t.getSize(),l=0,h=0;s.x+i+c.x>u.x&&(l=s.x+i-u.x+c.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+n+c.y>u.y&&(h=s.y+n-u.y+c.y),s.y-h-a.y<0&&(h=s.y-a.y),(l||h)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([l,h]))}},_getAnchor:function(){return M(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Li=function(t,e){return new Oi(t,e)};nn.mergeOptions({closePopupOnClick:!0}),nn.include({openPopup:function(t,e,n){return this._initOverlay(Oi,t,e,n).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),qn.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Oi,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Gn||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(this._popup&&this._map){Ke(t);var e=t.layer||t.target;this._popup._source!==e||e instanceof ii?(this._popup._source=e,this.openPopup(t.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var Ri=Ai.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ai.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=fe("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,n,i=this._map,r=this._container,s=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),a=this.options.direction,c=r.offsetWidth,u=r.offsetHeight,l=M(this.options.offset),h=this._getAnchor();"top"===a?(e=c/2,n=u):"bottom"===a?(e=c/2,n=0):"center"===a?(e=c/2,n=u/2):"right"===a?(e=0,n=u/2):"left"===a?(e=c,n=u/2):o.x<s.x?(a="right",e=0,n=u/2):(a="left",e=c+2*(l.x+h.x),n=u/2),t=t.subtract(M(e,n,!0)).add(l).add(h),we(r,"leaflet-tooltip-right"),we(r,"leaflet-tooltip-left"),we(r,"leaflet-tooltip-top"),we(r,"leaflet-tooltip-bottom"),ye(r,"leaflet-tooltip-"+a),Ce(r,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Ee(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return M(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Ni=function(t,e){return new Ri(t,e)};nn.include({openTooltip:function(t,e,n){return this._initOverlay(Ri,t,e,n).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),qn.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ri,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e=t?"off":"on",n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[e](n),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Gn||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"===typeof t.getElement&&t.getElement();e&&(Fe(e,"focus",(function(){this._tooltip._source=t,this.openTooltip()}),this),Fe(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e="function"===typeof t.getElement&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(this._tooltip&&this._map)if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",(function(){e._openOnceFlag=!1,e._openTooltip(t)}))}else this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var e,n,i=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(e),i=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(i)}});var Mi=Xn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),n=this.options;if(n.html instanceof Element?(me(e),e.appendChild(n.html)):e.innerHTML=!1!==n.html?n.html:"",n.bgPos){var i=M(n.bgPos);e.style.backgroundPosition=-i.x+"px "+-i.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Di(t){return new Mi(t)}Xn.Default=Yn;var Fi=qn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Dt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){f(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),pe(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ge(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_e(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=a(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof R?t:new R(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,n=this.getPane().children,i=-t(-1/0,1/0),r=0,s=n.length;r<s;r++)e=n[r].style.zIndex,n[r]!==this._container&&e&&(i=t(i,+e));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Dt.ielt9){Ee(this._container,this.options.opacity);var t=+new Date,e=!1,n=!1;for(var i in this._tiles){var r=this._tiles[i];if(r.current&&r.loaded){var s=Math.min(1,(t-r.loaded)/200);Ee(r.el,s),s<1?e=!0:(r.active?n=!0:this._onOpaqueTile(r),r.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),e&&(x(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this))}},_onOpaqueTile:u,_initContainer:function(){this._container||(this._container=fe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===t?(this._levels[n].el.style.zIndex=e-Math.abs(t-n),this._onUpdateLevel(n)):(pe(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var i=this._levels[t],r=this._map;return i||(i=this._levels[t]={},i.el=fe("div","leaflet-tile-container leaflet-zoom-animated",this._container),i.el.style.zIndex=e,i.origin=r.project(r.unproject(r.getPixelOrigin()),t).round(),i.zoom=t,this._setZoomTransform(i,r.getCenter(),r.getZoom()),u(i.el.offsetWidth),this._onCreateLevel(i)),this._level=i,i}},_onUpdateLevel:u,_onRemoveLevel:u,_onCreateLevel:u,_pruneTiles:function(){if(this._map){var t,e,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var i=e.coords;this._retainParent(i.x,i.y,i.z,i.z-5)||this._retainChildren(i.x,i.y,i.z,i.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)pe(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,n,i){var r=Math.floor(t/2),s=Math.floor(e/2),o=n-1,a=new R(+r,+s);a.z=+o;var c=this._tileCoordsToKey(a),u=this._tiles[c];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),o>i&&this._retainParent(r,s,o,i))},_retainChildren:function(t,e,n,i){for(var r=2*t;r<2*t+2;r++)for(var s=2*e;s<2*e+2;s++){var o=new R(r,s);o.z=n+1;var a=this._tileCoordsToKey(o),c=this._tiles[a];c&&c.active?c.retain=!0:(c&&c.loaded&&(c.retain=!0),n+1<i&&this._retainChildren(r,s,n+1,i))}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,n,i){var r=Math.round(e);r=void 0!==this.options.maxZoom&&r>this.options.maxZoom||void 0!==this.options.minZoom&&r<this.options.minZoom?void 0:this._clampZoom(r);var s=this.options.updateWhenZooming&&r!==this._tileZoom;i&&!s||(this._tileZoom=r,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==r&&this._update(t),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var n in this._levels)this._setZoomTransform(this._levels[n],t,e)},_setZoomTransform:function(t,e,n){var i=this._map.getZoomScale(n,t.zoom),r=t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e,n)).round();Dt.any3d?xe(t.el,r,i):Ce(t.el,r)},_resetGrid:function(){var t=this._map,e=t.options.crs,n=this._tileSize=this.getTileSize(),i=this._tileZoom,r=this._map.getPixelWorldBounds(this._tileZoom);r&&(this._globalTileRange=this._pxBoundsToTileRange(r)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],i).x/n.x),Math.ceil(t.project([0,e.wrapLng[1]],i).x/n.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],i).y/n.x),Math.ceil(t.project([e.wrapLat[1],0],i).y/n.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,n=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(n,this._tileZoom),r=e.project(t,this._tileZoom).floor(),s=e.getSize().divideBy(2*i);return new D(r.subtract(s),r.add(s))},_update:function(t){var e=this._map;if(e){var n=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var i=this._getTiledPixelBounds(t),r=this._pxBoundsToTileRange(i),s=r.getCenter(),o=[],a=this.options.keepBuffer,c=new D(r.getBottomLeft().subtract([a,-a]),r.getTopRight().add([a,-a]));if(!(isFinite(r.min.x)&&isFinite(r.min.y)&&isFinite(r.max.x)&&isFinite(r.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&c.contains(new R(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(n-this._tileZoom)>1)this._setView(t,n);else{for(var h=r.min.y;h<=r.max.y;h++)for(var d=r.min.x;d<=r.max.x;d++){var f=new R(d,h);if(f.z=this._tileZoom,this._isValidTile(f)){var p=this._tiles[this._tileCoordsToKey(f)];p?p.current=!0:o.push(f)}}if(o.sort((function(t,e){return t.distanceTo(s)-e.distanceTo(s)})),0!==o.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(d=0;d<o.length;d++)this._addTile(o[d],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var n=this._globalTileRange;if(!e.wrapLng&&(t.x<n.min.x||t.x>n.max.x)||!e.wrapLat&&(t.y<n.min.y||t.y>n.max.y))return!1}if(!this.options.bounds)return!0;var i=this._tileCoordsToBounds(t);return U(this.options.bounds).overlaps(i)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,n=this.getTileSize(),i=t.scaleBy(n),r=i.add(n),s=e.unproject(i,t.z),o=e.unproject(r,t.z);return[s,o]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),n=new j(e[0],e[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),n=new R(+e[0],+e[1]);return n.z=+e[2],n},_removeTile:function(t){var e=this._tiles[t];e&&(pe(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){ye(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=u,t.onmousemove=u,Dt.ielt9&&this.options.opacity<1&&Ee(t,this.options.opacity)},_addTile:function(t,e){var n=this._getTilePos(t),i=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),r(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&I(r(this._tileReady,this,t,null,s)),Ce(s,n),this._tiles[i]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,n){e&&this.fire("tileerror",{error:e,tile:n,coords:t});var i=this._tileCoordsToKey(t);n=this._tiles[i],n&&(n.loaded=+new Date,this._map._fadeAnimated?(Ee(n.el,0),x(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),e||(ye(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Dt.ielt9||!this._map._fadeAnimated?I(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new R(this._wrapX?c(t.x,this._wrapX):t.x,this._wrapY?c(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new D(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function ji(t){return new Fi(t)}var Ui=Fi.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=f(this,e),e.detectRetina&&Dt.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"===typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var n=document.createElement("img");return Fe(n,"load",r(this._tileOnLoad,this,e,n)),Fe(n,"error",r(this._tileOnError,this,e,n)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"===typeof this.options.referrerPolicy&&(n.referrerPolicy=this.options.referrerPolicy),n.alt="",n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:Dt.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e["y"]=i),e["-y"]=i}return g(this._url,n(e,this.options))},_tileOnLoad:function(t,e){Dt.ielt9?setTimeout(r(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,n){var i=this.options.errorTileUrl;i&&e.getAttribute("src")!==i&&(e.src=i),t(n,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,n=this.options.zoomReverse,i=this.options.zoomOffset;return n&&(t=e-t),t+i},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=u,e.onerror=u,!e.complete)){e.src=y;var n=this._tiles[t].coords;pe(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:n})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",y),Fi.prototype._removeTile.call(this,t)},_tileReady:function(t,e,n){if(this._map&&(!n||n.getAttribute("src")!==y))return Fi.prototype._tileReady.call(this,t,e,n)}});function Bi(t,e){return new Ui(t,e)}var zi=Ui.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=n({},this.defaultWmsParams);for(var r in e)r in this.options||(i[r]=e[r]);e=f(this,e);var s=e.detectRetina&&Dt.retina?2:1,o=this.getTileSize();i.width=o.x*s,i.height=o.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Ui.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),n=this._crs,i=F(n.project(e[0]),n.project(e[1])),r=i.min,s=i.max,o=(this._wmsVersion>=1.3&&this._crs===$n?[r.y,r.x,s.y,s.x]:[r.x,r.y,s.x,s.y]).join(","),a=Ui.prototype.getTileUrl.call(this,t);return a+p(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+o},setParams:function(t,e){return n(this.wmsParams,t),e||this.redraw(),this}});function Vi(t,e){return new zi(t,e)}Ui.WMS=zi,Bi.wms=Vi;var Hi=qn.extend({options:{padding:.1},initialize:function(t){f(this,t),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ye(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var n=this._map.getZoomScale(e,this._zoom),i=this._map.getSize().multiplyBy(.5+this.options.padding),r=this._map.project(this._center,e),s=i.multiplyBy(-n).add(r).subtract(this._map._getNewPixelOrigin(t,e));Dt.any3d?xe(this._container,s,n):Ce(this._container,s)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),n=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new D(n,n.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),$i=Hi.extend({options:{tolerance:0},getEvents:function(){var t=Hi.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Hi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Fe(t,"mousemove",this._onMouseMove,this),Fe(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Fe(t,"mouseout",this._handleMouseOut,this),t["_leaflet_disable_events"]=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){x(this._redrawRequest),delete this._ctx,pe(this._container),Ue(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;for(var e in this._redrawBounds=null,this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){Hi.prototype._update.call(this);var t=this._bounds,e=this._container,n=t.getSize(),i=Dt.retina?2:1;Ce(e,t.min),e.width=i*n.x,e.height=i*n.y,e.style.width=n.x+"px",e.style.height=n.y+"px",Dt.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Hi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[o(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,n=e.next,i=e.prev;n?n.prev=i:this._drawLast=i,i?i.next=n:this._drawFirst=n,delete t._order,delete this._layers[o(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"===typeof t.options.dashArray){var e,n,i=t.options.dashArray.split(/[, ]+/),r=[];for(n=0;n<i.length;n++){if(e=Number(i[n]),isNaN(e))return;r.push(e)}t.options._dashArray=r}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||I(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new D,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var n=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var i=this._drawFirst;i;i=i.next)t=i.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var n,i,r,s,o=t._parts,a=o.length,c=this._ctx;if(a){for(c.beginPath(),n=0;n<a;n++){for(i=0,r=o[n].length;i<r;i++)s=o[n][i],c[i?"lineTo":"moveTo"](s.x,s.y);e&&c.closePath()}this._fillStroke(c,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var e=t._point,n=this._ctx,i=Math.max(Math.round(t._radius),1),r=(Math.max(Math.round(t._radiusY),1)||i)/i;1!==r&&(n.save(),n.scale(1,r)),n.beginPath(),n.arc(e.x,e.y/r,i,0,2*Math.PI,!1),1!==r&&n.restore(),this._fillStroke(n,t)}},_fillStroke:function(t,e){var n=e.options;n.fill&&(t.globalAlpha=n.fillOpacity,t.fillStyle=n.fillColor||n.color,t.fill(n.fillRule||"evenodd")),n.stroke&&0!==n.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=n.opacity,t.lineWidth=n.weight,t.strokeStyle=n.color,t.lineCap=n.lineCap,t.lineJoin=n.lineJoin,t.stroke())},_onClick:function(t){for(var e,n,i=this._map.mouseEventToLayerPoint(t),r=this._drawFirst;r;r=r.next)e=r.layer,e.options.interactive&&e._containsPoint(i)&&("click"!==t.type&&"preclick"!==t.type||!this._map._draggableMoved(e))&&(n=e);this._fireEvent(!!n&&[n],t)},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(we(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var n,i,s=this._drawFirst;s;s=s.next)n=s.layer,n.options.interactive&&n._containsPoint(e)&&(i=n);i!==this._hoveredLayer&&(this._handleMouseOut(t),i&&(ye(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseover"),this._hoveredLayer=i)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(r((function(){this._mouseHoverThrottled=!1}),this),32)}},_fireEvent:function(t,e,n){this._map._fireDOMEvent(e,n||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var n=e.next,i=e.prev;n&&(n.prev=i,i?i.next=n:n&&(this._drawFirst=n),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t))}},_bringToBack:function(t){var e=t._order;if(e){var n=e.next,i=e.prev;i&&(i.next=n,n?n.prev=i:i&&(this._drawLast=i),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t))}}});function Zi(t){return Dt.canvas?new $i(t):null}var qi=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Wi={_initContainer:function(){this._container=fe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Hi.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=qi("shape");ye(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=qi("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[o(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;pe(e),t.removeInteractiveTarget(e),delete this._layers[o(t)]},_updateStyle:function(t){var e=t._stroke,n=t._fill,i=t.options,r=t._container;r.stroked=!!i.stroke,r.filled=!!i.fill,i.stroke?(e||(e=t._stroke=qi("stroke")),r.appendChild(e),e.weight=i.weight+"px",e.color=i.color,e.opacity=i.opacity,i.dashArray?e.dashStyle=_(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=i.lineCap.replace("butt","flat"),e.joinstyle=i.lineJoin):e&&(r.removeChild(e),t._stroke=null),i.fill?(n||(n=t._fill=qi("fill")),r.appendChild(n),n.color=i.fillColor||i.color,n.opacity=i.fillOpacity):n&&(r.removeChild(n),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),n=Math.round(t._radius),i=Math.round(t._radiusY||n);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+n+","+i+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){ge(t._container)},_bringToBack:function(t){_e(t._container)}},Ki=Dt.vml?qi:Q,Gi=Hi.extend({_initContainer:function(){this._container=Ki("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ki("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){pe(this._container),Ue(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){Hi.prototype._update.call(this);var t=this._bounds,e=t.getSize(),n=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,n.setAttribute("width",e.x),n.setAttribute("height",e.y)),Ce(n,t.min),n.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Ki("path");t.options.className&&ye(e,t.options.className),t.options.interactive&&ye(e,"leaflet-interactive"),this._updateStyle(t),this._layers[o(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){pe(t._path),t.removeInteractiveTarget(t._path),delete this._layers[o(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,n=t.options;e&&(n.stroke?(e.setAttribute("stroke",n.color),e.setAttribute("stroke-opacity",n.opacity),e.setAttribute("stroke-width",n.weight),e.setAttribute("stroke-linecap",n.lineCap),e.setAttribute("stroke-linejoin",n.lineJoin),n.dashArray?e.setAttribute("stroke-dasharray",n.dashArray):e.removeAttribute("stroke-dasharray"),n.dashOffset?e.setAttribute("stroke-dashoffset",n.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),n.fill?(e.setAttribute("fill",n.fillColor||n.color),e.setAttribute("fill-opacity",n.fillOpacity),e.setAttribute("fill-rule",n.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,X(t._parts,e))},_updateCircle:function(t){var e=t._point,n=Math.max(Math.round(t._radius),1),i=Math.max(Math.round(t._radiusY),1)||n,r="a"+n+","+i+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(e.x-n)+","+e.y+r+2*n+",0 "+r+2*-n+",0 ";this._setPath(t,s)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){ge(t._path)},_bringToBack:function(t){_e(t._path)}});function Qi(t){return Dt.svg||Dt.vml?new Gi(t):null}Dt.vml&&Gi.include(Wi),nn.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Zi(t)||Qi(t)}});var Xi=li.extend({initialize:function(t,e){li.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=U(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Ji(t,e){return new Xi(t,e)}Gi.create=Ki,Gi.pointsToPath=X,di.geometryToLayer=fi,di.coordsToLatLng=mi,di.coordsToLatLngs=gi,di.latLngToCoords=_i,di.latLngsToCoords=vi,di.getFeature=yi,di.asFeature=wi,nn.mergeOptions({boxZoom:!0});var Yi=gn.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Fe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ue(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){pe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),ie(),Ae(),this._startPoint=this._map.mouseEventToContainerPoint(t),Fe(document,{contextmenu:Ke,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=fe("div","leaflet-zoom-box",this._container),ye(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new D(this._point,this._startPoint),n=e.getSize();Ce(this._box,e.min),this._box.style.width=n.x+"px",this._box.style.height=n.y+"px"},_finish:function(){this._moved&&(pe(this._box),we(this._container,"leaflet-crosshair")),re(),Oe(),Ue(document,{contextmenu:Ke,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var e=new j(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});nn.addInitHook("addHandler","boxZoom",Yi),nn.mergeOptions({doubleClickZoom:!0});var tr=gn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,n=e.getZoom(),i=e.options.zoomDelta,r=t.originalEvent.shiftKey?n-i:n+i;"center"===e.options.doubleClickZoom?e.setZoom(r):e.setZoomAround(t.containerPoint,r)}});nn.addInitHook("addHandler","doubleClickZoom",tr),nn.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var er=gn.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new yn(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}ye(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){we(this._map._container,"leaflet-grab"),we(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=U(this._map.options.maxBounds);this._offsetLimit=F(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){while(this._positions.length>1&&t-this._times[0]>50)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),n=this._initialWorldOffset,i=this._draggable._newPos.x,r=(i-e+n)%t+e-n,s=(i+e+n)%t-e-n,o=Math.abs(r+n)<Math.abs(s+n)?r:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(t){var e=this._map,n=e.options,i=!n.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),i)e.fire("moveend");else{this._prunePositions(+new Date);var r=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,a=r.multiplyBy(o/s),c=a.distanceTo([0,0]),u=Math.min(n.inertiaMaxSpeed,c),l=a.multiplyBy(u/c),h=u/(n.inertiaDeceleration*o),d=l.multiplyBy(-h/2).round();d.x||d.y?(d=e._limitOffset(d,e.options.maxBounds),I((function(){e.panBy(d,{duration:h,easeLinearity:o,noMoveStart:!0,animate:!0})}))):e.fire("moveend")}}});nn.addInitHook("addHandler","dragging",er),nn.mergeOptions({keyboard:!0,keyboardPanDelta:80});var nr=gn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Fe(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ue(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,n=t.scrollTop||e.scrollTop,i=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(i,n)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,n,i=this._panKeys={},r=this.keyCodes;for(e=0,n=r.left.length;e<n;e++)i[r.left[e]]=[-1*t,0];for(e=0,n=r.right.length;e<n;e++)i[r.right[e]]=[t,0];for(e=0,n=r.down.length;e<n;e++)i[r.down[e]]=[0,t];for(e=0,n=r.up.length;e<n;e++)i[r.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,n,i=this._zoomKeys={},r=this.keyCodes;for(e=0,n=r.zoomIn.length;e<n;e++)i[r.zoomIn[e]]=t;for(e=0,n=r.zoomOut.length;e<n;e++)i[r.zoomOut[e]]=-t},_addHooks:function(){Fe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ue(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,n=t.keyCode,i=this._map;if(n in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(e=this._panKeys[n],t.shiftKey&&(e=M(e).multiplyBy(3)),i.options.maxBounds&&(e=i._limitOffset(M(e),i.options.maxBounds)),i.options.worldCopyJump){var r=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(e)));i.panTo(r)}else i.panBy(e)}else if(n in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[n]);else{if(27!==n||!i._popup||!i._popup.options.closeOnEscapeKey)return;i.closePopup()}Ke(t)}}});nn.addInitHook("addHandler","keyboard",nr),nn.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ir=gn.extend({addHooks:function(){Fe(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ue(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Je(t),n=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),i),Ke(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),n=this._map.options.zoomSnap||0;t._stop();var i=this._delta/(4*this._map.options.wheelPxPerZoomLevel),r=4*Math.log(2/(1+Math.exp(-Math.abs(i))))/Math.LN2,s=n?Math.ceil(r/n)*n:r,o=t._limitZoom(e+(this._delta>0?s:-s))-e;this._delta=0,this._startTime=null,o&&("center"===t.options.scrollWheelZoom?t.setZoom(e+o):t.setZoomAround(this._lastMousePos,e+o))}});nn.addInitHook("addHandler","scrollWheelZoom",ir);var rr=600;nn.mergeOptions({tapHold:Dt.touchNative&&Dt.safari&&Dt.mobile,tapTolerance:15});var sr=gn.extend({addHooks:function(){Fe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ue(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),1===t.touches.length){var e=t.touches[0];this._startPos=this._newPos=new R(e.clientX,e.clientY),this._holdTimeout=setTimeout(r((function(){this._cancel(),this._isTapValid()&&(Fe(document,"touchend",We),Fe(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))}),this),rr),Fe(document,"touchend touchcancel contextmenu",this._cancel,this),Fe(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){Ue(document,"touchend",We),Ue(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),Ue(document,"touchend touchcancel contextmenu",this._cancel,this),Ue(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new R(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var n=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});n._simulated=!0,e.target.dispatchEvent(n)}});nn.addInitHook("addHandler","tapHold",sr),nn.mergeOptions({touchZoom:Dt.touch,bounceAtZoomLimits:!0});var or=gn.extend({addHooks:function(){ye(this._map._container,"leaflet-touch-zoom"),Fe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){we(this._map._container,"leaflet-touch-zoom"),Ue(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var n=e.mouseEventToContainerPoint(t.touches[0]),i=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(n.add(i)._divideBy(2))),this._startDist=n.distanceTo(i),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),Fe(document,"touchmove",this._onTouchMove,this),Fe(document,"touchend touchcancel",this._onTouchEnd,this),We(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,n=e.mouseEventToContainerPoint(t.touches[0]),i=e.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(i)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var o=n._add(i)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===o.x&&0===o.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),x(this._animRequest);var a=r(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=I(a,this,!0),We(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,x(this._animRequest),Ue(document,"touchmove",this._onTouchMove,this),Ue(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});nn.addInitHook("addHandler","touchZoom",or),nn.BoxZoom=Yi,nn.DoubleClickZoom=tr,nn.Drag=er,nn.Keyboard=nr,nn.ScrollWheelZoom=ir,nn.TapHold=sr,nn.TouchZoom=or,t.Bounds=D,t.Browser=Dt,t.CRS=V,t.Canvas=$i,t.Circle=oi,t.CircleMarker=ri,t.Class=P,t.Control=sn,t.DivIcon=Mi,t.DivOverlay=Ai,t.DomEvent=tn,t.DomUtil=De,t.Draggable=yn,t.Evented=O,t.FeatureGroup=Gn,t.GeoJSON=di,t.GridLayer=Fi,t.Handler=gn,t.Icon=Xn,t.ImageOverlay=Si,t.LatLng=B,t.LatLngBounds=j,t.Layer=qn,t.LayerGroup=Wn,t.LineUtil=Un,t.Map=nn,t.Marker=ei,t.Mixin=_n,t.Path=ii,t.Point=R,t.PolyUtil=Sn,t.Polygon=li,t.Polyline=ci,t.Popup=Oi,t.PosAnimation=en,t.Projection=Vn,t.Rectangle=Xi,t.Renderer=Hi,t.SVG=Gi,t.SVGOverlay=Pi,t.TileLayer=Ui,t.Tooltip=Ri,t.Transformation=q,t.Util=C,t.VideoOverlay=xi,t.bind=r,t.bounds=F,t.canvas=Zi,t.circle=ai,t.circleMarker=si,t.control=on,t.divIcon=Di,t.extend=n,t.featureGroup=Qn,t.geoJSON=Ti,t.geoJson=Ei,t.gridLayer=ji,t.icon=Jn,t.imageOverlay=Ii,t.latLng=z,t.latLngBounds=U,t.layerGroup=Kn,t.map=rn,t.marker=ni,t.point=M,t.polygon=hi,t.polyline=ui,t.popup=Li,t.rectangle=Ji,t.setOptions=f,t.stamp=o,t.svg=Qi,t.svgOverlay=ki,t.tileLayer=Bi,t.tooltip=Ni,t.transformation=W,t.version=e,t.videoOverlay=Ci;var ar=window.L;t.noConflict=function(){return window.L=ar,this},window.L=t}))},6262:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n}},9306:function(t,e,n){"use strict";var i=n(4901),r=n(6823),s=TypeError;t.exports=function(t){if(i(t))return t;throw new s(r(t)+" is not a function")}},679:function(t,e,n){"use strict";var i=n(1625),r=TypeError;t.exports=function(t,e){if(i(e,t))return t;throw new r("Incorrect invocation")}},8551:function(t,e,n){"use strict";var i=n(34),r=String,s=TypeError;t.exports=function(t){if(i(t))return t;throw new s(r(t)+" is not an object")}},9617:function(t,e,n){"use strict";var i=n(5397),r=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=i(e),c=s(a);if(0===c)return!t&&-1;var u,l=r(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){"use strict";var i=n(3724),r=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(r(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},6319:function(t,e,n){"use strict";var i=n(8551),r=n(9539);t.exports=function(t,e,n,s){try{return s?e(i(n)[0],n[1]):e(n)}catch(o){r(t,"throw",o)}}},2195:function(t,e,n){"use strict";var i=n(9504),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},6955:function(t,e,n){"use strict";var i=n(2140),r=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(i=s(e))&&r(e.callee)?"Arguments":i}},7740:function(t,e,n){"use strict";var i=n(9297),r=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=r(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];i(t,h)||n&&i(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){"use strict";var i=n(9039);t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2529:function(t){"use strict";t.exports=function(t,e){return{value:t,done:e}}},6699:function(t,e,n){"use strict";var i=n(3724),r=n(4913),s=n(6980);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4659:function(t,e,n){"use strict";var i=n(3724),r=n(4913),s=n(6980);t.exports=function(t,e,n){i?r.f(t,e,s(0,n)):t[e]=n}},2106:function(t,e,n){"use strict";var i=n(283),r=n(4913);t.exports=function(t,e,n){return n.get&&i(n.get,e,{getter:!0}),n.set&&i(n.set,e,{setter:!0}),r.f(t,e,n)}},6840:function(t,e,n){"use strict";var i=n(4901),r=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(i(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:r.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6279:function(t,e,n){"use strict";var i=n(6840);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},9433:function(t,e,n){"use strict";var i=n(4576),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},3724:function(t,e,n){"use strict";var i=n(9039);t.exports=!i((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(t,e,n){"use strict";var i=n(4576),r=n(34),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(t,e,n){"use strict";var i=n(4576),r=i.navigator,s=r&&r.userAgent;t.exports=s?String(s):""},9519:function(t,e,n){"use strict";var i,r,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(i=l.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},6518:function(t,e,n){"use strict";var i=n(4576),r=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,_=t.stat;if(l=g?i:_?i[m]||a(m,{}):i[m]&&i[m].prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=r(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(_?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},9039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},6080:function(t,e,n){"use strict";var i=n(7476),r=n(9306),s=n(616),o=i(i.bind);t.exports=function(t,e){return r(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},616:function(t,e,n){"use strict";var i=n(9039);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){"use strict";var i=n(616),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},350:function(t,e,n){"use strict";var i=n(3724),r=n(9297),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},7476:function(t,e,n){"use strict";var i=n(2195),r=n(9504);t.exports=function(t){if("Function"===i(t))return r(t)}},9504:function(t,e,n){"use strict";var i=n(616),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);t.exports=i?o:function(t){return function(){return s.apply(t,arguments)}}},7751:function(t,e,n){"use strict";var i=n(4576),r=n(4901),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},1767:function(t){"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},851:function(t,e,n){"use strict";var i=n(6955),r=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!s(t))return r(t,c)||r(t,"@@iterator")||o[i(t)]}},81:function(t,e,n){"use strict";var i=n(9565),r=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(r(n))return s(i(n,t));throw new c(o(t)+" is not iterable")}},5966:function(t,e,n){"use strict";var i=n(9306),r=n(4117);t.exports=function(t,e){var n=t[e];return r(n)?void 0:i(n)}},4576:function(t,e,n){"use strict";var i=function(t){return t&&t.Math===Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||i("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){"use strict";var i=n(9504),r=n(8981),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},421:function(t){"use strict";t.exports={}},397:function(t,e,n){"use strict";var i=n(7751);t.exports=i("document","documentElement")},5917:function(t,e,n){"use strict";var i=n(3724),r=n(9039),s=n(4055);t.exports=!i&&!r((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){"use strict";var i=n(9504),r=n(9039),s=n(2195),o=Object,a=i("".split);t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3706:function(t,e,n){"use strict";var i=n(9504),r=n(4901),s=n(7629),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){"use strict";var i,r,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",m=a.TypeError,g=a.WeakMap,_=function(t){return s(t)?r(t):i(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw new m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var y=h.state||(h.state=new g);y.get=y.get,y.has=y.has,y.set=y.set,i=function(t,e){if(y.has(t))throw new m(p);return e.facade=t,y.set(t,e),e},r=function(t){return y.get(t)||{}},s=function(t){return y.has(t)}}else{var w=d("state");f[w]=!0,i=function(t,e){if(l(t,w))throw new m(p);return e.facade=t,u(t,w,e),e},r=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:i,get:r,has:s,enforce:_,getterFor:v}},4209:function(t,e,n){"use strict";var i=n(8227),r=n(6269),s=i("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[s]===t)}},4376:function(t,e,n){"use strict";var i=n(2195);t.exports=Array.isArray||function(t){return"Array"===i(t)}},4901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){"use strict";var i=n(9039),r=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){"use strict";var i=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},6395:function(t){"use strict";t.exports=!1},757:function(t,e,n){"use strict";var i=n(7751),r=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&s(e.prototype,a(t))}},2652:function(t,e,n){"use strict";var i=n(6080),r=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),d=n(9539),f=TypeError,p=function(t,e){this.stopped=t,this.result=e},m=p.prototype;t.exports=function(t,e,n){var g,_,v,y,w,b,T,E=n&&n.that,S=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_RECORD),x=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),P=i(e,E),k=function(t){return g&&d(g,"normal",t),new p(!0,t)},A=function(t){return S?(s(t),C?P(t[0],t[1],k):P(t[0],t[1])):C?P(t,k):P(t)};if(I)g=t.iterator;else if(x)g=t;else{if(_=h(t),!_)throw new f(o(t)+" is not iterable");if(a(_)){for(v=0,y=c(t);y>v;v++)if(w=A(t[v]),w&&u(m,w))return w;return new p(!1)}g=l(t,_)}b=I?t.next:g.next;while(!(T=r(b,g)).done){try{w=A(T.value)}catch(O){d(g,"throw",O)}if("object"==typeof w&&w&&u(m,w))return w}return new p(!1)}},9539:function(t,e,n){"use strict";var i=n(9565),r=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;r(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=i(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return r(o),n}},9462:function(t,e,n){"use strict";var i=n(9565),r=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),d=n(9539),f=a("toStringTag"),p="IteratorHelper",m="WrapForValidIterator",g=c.set,_=function(t){var e=c.getterFor(t?m:p);return o(r(l),{next:function(){var n=e(this);if(t)return n.nextHandler();try{var i=n.done?void 0:n.nextHandler();return h(i,n.done)}catch(r){throw n.done=!0,r}},return:function(){var n=e(this),r=n.iterator;if(n.done=!0,t){var s=u(r,"return");return s?i(s,r):h(void 0,!0)}if(n.inner)try{d(n.inner.iterator,"normal")}catch(o){return d(r,"throw",o)}return r&&d(r,"normal"),h(void 0,!0)}})},v=_(!0),y=_(!1);s(y,f,"Iterator Helper"),t.exports=function(t,e){var n=function(n,i){i?(i.iterator=n.iterator,i.next=n.next):i=n,i.type=e?m:p,i.nextHandler=t,i.counter=0,i.done=!1,g(this,i)};return n.prototype=e?v:y,n}},713:function(t,e,n){"use strict";var i=n(9565),r=n(9306),s=n(8551),o=n(1767),a=n(9462),c=n(6319),u=a((function(){var t=this.iterator,e=s(i(this.next,t)),n=this.done=!!e.done;if(!n)return c(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return s(this),r(t),new u(o(this),{mapper:t})}},7657:function(t,e,n){"use strict";var i,r,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),d=n(8227),f=n(6395),p=d("iterator"),m=!1;[].keys&&(s=[].keys(),"next"in s?(r=l(l(s)),r!==Object.prototype&&(i=r)):m=!0);var g=!c(i)||o((function(){var t={};return i[p].call(t)!==t}));g?i={}:f&&(i=u(i)),a(i[p])||h(i,p,(function(){return this})),t.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:m}},6269:function(t){"use strict";t.exports={}},6198:function(t,e,n){"use strict";var i=n(8014);t.exports=function(t){return i(t.length)}},283:function(t,e,n){"use strict";var i=n(9504),r=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=i("".slice),g=i("".replace),_=i([].join),v=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===m(f(e),0,7)&&(e="["+g(f(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var i=h(t);return o(i,"source")||(i.source=_(y,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},2360:function(t,e,n){"use strict";var i,r=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},_=function(t){return d+p+h+t+d+"/"+p+h},v=function(t){t.write(_("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(_("document.F=Object")),t.close(),t.F},w=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&i?v(i):y():v(i);var t=o.length;while(t--)delete w[f][o[t]];return w()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=r(t),n=new g,g[f]=null,n[m]=t):n=w(),void 0===e?n:s.f(n,e)}},6801:function(t,e,n){"use strict";var i=n(3724),r=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=i&&!r?Object.defineProperties:function(t,e){o(t);var n,i=a(e),r=c(e),u=r.length,l=0;while(u>l)s.f(t,n=r[l++],i[n]);return t}},4913:function(t,e,n){"use strict";var i=n(3724),r=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=i?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=l(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),r)try{return u(t,e,n)}catch(i){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){"use strict";var i=n(3724),r=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!r(s.f,t,e),t[e])}},8480:function(t,e,n){"use strict";var i=n(1828),r=n(8727),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},3717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){"use strict";var i=n(9297),r=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(i(e,c))return e[c];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){"use strict";var i=n(9504);t.exports=i({}.isPrototypeOf)},1828:function(t,e,n){"use strict";var i=n(9504),r=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=i([].push);t.exports=function(t,e){var n,i=s(t),u=0,l=[];for(n in i)!r(a,n)&&r(i,n)&&c(l,n);while(e.length>u)r(i,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1072:function(t,e,n){"use strict";var i=n(1828),r=n(8727);t.exports=Object.keys||function(t){return i(t,r)}},8773:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},4270:function(t,e,n){"use strict";var i=n(9565),r=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!s(a=i(n,t)))return a;if(r(n=t.valueOf)&&!s(a=i(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!s(a=i(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){"use strict";var i=n(7751),r=n(9504),s=n(8480),o=n(3717),a=n(8551),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},7750:function(t,e,n){"use strict";var i=n(4117),r=TypeError;t.exports=function(t){if(i(t))throw new r("Can't call method on "+t);return t}},6119:function(t,e,n){"use strict";var i=n(5745),r=n(3392),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},7629:function(t,e,n){"use strict";var i=n(6395),r=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=r[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.39.0",mode:i?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){"use strict";var i=n(7629);t.exports=function(t,e){return i[t]||(i[t]=e||{})}},4495:function(t,e,n){"use strict";var i=n(9519),r=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},5610:function(t,e,n){"use strict";var i=n(1291),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5397:function(t,e,n){"use strict";var i=n(7055),r=n(7750);t.exports=function(t){return i(r(t))}},1291:function(t,e,n){"use strict";var i=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},8014:function(t,e,n){"use strict";var i=n(1291),r=Math.min;t.exports=function(t){var e=i(t);return e>0?r(e,9007199254740991):0}},8981:function(t,e,n){"use strict";var i=n(7750),r=Object;t.exports=function(t){return r(i(t))}},2777:function(t,e,n){"use strict";var i=n(9565),r=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!r(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=i(c,t,e),!r(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){"use strict";var i=n(2777),r=n(757);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},2140:function(t,e,n){"use strict";var i=n(8227),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},6823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){"use strict";var i=n(9504),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},7040:function(t,e,n){"use strict";var i=n(4495);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){"use strict";var i=n(3724),r=n(9039);t.exports=i&&r((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(t,e,n){"use strict";var i=n(4576),r=n(4901),s=i.WeakMap;t.exports=r(s)&&/native code/.test(String(s))},8227:function(t,e,n){"use strict";var i=n(4576),r=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=i.Symbol,l=r("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},4114:function(t,e,n){"use strict";var i=n(6518),r=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=r(this),n=s(e),i=arguments.length;a(n+i);for(var c=0;c<i;c++)e[n]=arguments[c],n++;return o(e,n),n}})},8111:function(t,e,n){"use strict";var i=n(6518),r=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),d=n(9297),f=n(8227),p=n(7657).IteratorPrototype,m=n(3724),g=n(6395),_="constructor",v="Iterator",y=f("toStringTag"),w=TypeError,b=r[v],T=g||!a(b)||b.prototype!==p||!h((function(){b({})})),E=function(){if(s(this,p),c(this)===p)throw new w("Abstract class Iterator not directly constructable")},S=function(t,e){m?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new w("You can't redefine this property");d(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};d(p,y)||S(y,v),!T&&d(p,_)&&p[_]!==Object||S(_,E),E.prototype=p,i({global:!0,constructor:!0,forced:T},{Iterator:E})},7588:function(t,e,n){"use strict";var i=n(6518),r=n(2652),s=n(9306),o=n(8551),a=n(1767);i({target:"Iterator",proto:!0,real:!0},{forEach:function(t){o(this),s(t);var e=a(this),n=0;r(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},1701:function(t,e,n){"use strict";var i=n(6518),r=n(713),s=n(6395);i({target:"Iterator",proto:!0,real:!0,forced:s},{map:r})},8992:function(t,e,n){"use strict";n(8111)},3949:function(t,e,n){"use strict";n(7588)},1454:function(t,e,n){"use strict";n(1701)},9928:function(t,e,n){"use strict";n.d(e,{MF:function(){return yt},j6:function(){return pt},xZ:function(){return mt},om:function(){return ft},Sx:function(){return bt},Wp:function(){return wt},KO:function(){return Tt}});var i=n(5125),r=n(3424),s=n(6743);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(T(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function _(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){v=t(v)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(E(this),e),T(h.get(this))}:function(...e){return T(t.apply(E(this),e))}:function(e,...n){const i=t.call(E(this),e,...n);return f.set(i,e.sort?e.sort():[e]),T(i)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&_(t),o(t,u())?new Proxy(t,v):t)}function T(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const E=t=>m.get(t);function S(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=T(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(T(o.result),t.oldVersion,t.newVersion,T(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],C=new Map;function P(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=x.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!I.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return C.set(e,s),s}y((t=>({...t,get:(e,n,i)=>P(e,n)||t.get(e,n,i),has:(e,n)=>!!P(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(A(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function A(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const O="@firebase/app",L="0.10.16",R=new r.Vy("@firebase/app"),N="@firebase/app-compat",M="@firebase/analytics-compat",D="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",z="@firebase/database",V="@firebase/data-connect",H="@firebase/database-compat",$="@firebase/functions",Z="@firebase/functions-compat",q="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Y="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",it="@firebase/vertexai",rt="@firebase/firestore-compat",st="firebase",ot="11.0.2",at="[DEFAULT]",ct={[O]:"fire-core",[N]:"fire-core-compat",[D]:"fire-analytics",[M]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[z]:"fire-rtdb",[V]:"fire-data-connect",[H]:"fire-rtdb-compat",[$]:"fire-fn",[Z]:"fire-fn-compat",[q]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Y]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[rt]:"fire-fst-compat",[it]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(ht.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())dt(n,t);for(const n of lt.values())dt(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},_t=new s.FA("app","Firebase",gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt=ot;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw _t.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw _t.create("no-options");const a=ut.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw _t.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const i of ht.values())c.addComponent(i);const u=new vt(n,r,c);return ut.set(o,u),u}function bt(t=at){const e=ut.get(t);if(!e&&t===at&&(0,s.T9)())return wt();if(!e)throw _t.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let s=null!==(r=ct[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}ft(new i.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et="firebase-heartbeat-database",St=1,It="firebase-heartbeat-store";let xt=null;function Ct(){return xt||(xt=S(Et,St,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(It)}catch(n){console.warn(n)}}}}).catch((t=>{throw _t.create("idb-open",{originalErrorMessage:t.message})}))),xt}async function Pt(t){try{const e=await Ct(),n=e.transaction(It),i=await n.objectStore(It).get(At(t));return await n.done,i}catch(e){if(e instanceof s.g)R.warn(e.message);else{const t=_t.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});R.warn(t.message)}}}async function kt(t,e){try{const n=await Ct(),i=n.transaction(It,"readwrite"),r=i.objectStore(It);await r.put(e,At(t)),await i.done}catch(n){if(n instanceof s.g)R.warn(n.message);else{const t=_t.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(t.message)}}}function At(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=1024,Lt=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Nt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Lt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){R.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Nt(),{heartbeatsToSend:n,unsentEntries:i}=Mt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return R.warn(e),""}}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function Mt(t,e=Ot){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ft(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ft(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Pt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ft(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){ft(new i.uA("platform-logger",(t=>new k(t)),"PRIVATE")),ft(new i.uA("heartbeat",(t=>new Rt(t)),"PRIVATE")),Tt(O,L,t),Tt(O,L,"esm2017"),Tt("fire-js","")}jt("")},5125:function(t,e,n){"use strict";n.d(e,{h1:function(){return u},uA:function(){return r}});var i=n(6743);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3424:function(t,e,n){"use strict";n.d(e,{$b:function(){return r},Vy:function(){return u}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},4335:function(t,e,n){"use strict";n.d(e,{A:function(){return yn}});var i={};function r(t,e){return function(){return t.apply(e,arguments)}}n.r(i),n.d(i,{hasBrowserEnv:function(){return jt},hasStandardBrowserEnv:function(){return Bt},hasStandardBrowserWebWorkerEnv:function(){return zt},navigator:function(){return Ut},origin:function(){return Vt}});const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,a=(t=>e=>{const n=s.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=t=>(t=t.toLowerCase(),e=>a(e)===t),u=t=>e=>typeof e===t,{isArray:l}=Array,h=u("undefined");function d(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const f=c("ArrayBuffer");function p(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}const m=u("string"),g=u("function"),_=u("number"),v=t=>null!==t&&"object"===typeof t,y=t=>!0===t||!1===t,w=t=>{if("object"!==a(t))return!1;const e=o(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},b=c("Date"),T=c("File"),E=c("Blob"),S=c("FileList"),I=t=>v(t)&&g(t.pipe),x=t=>{let e;return t&&("function"===typeof FormData&&t instanceof FormData||g(t.append)&&("formdata"===(e=a(t))||"object"===e&&g(t.toString)&&"[object FormData]"===t.toString()))},C=c("URLSearchParams"),[P,k,A,O]=["ReadableStream","Request","Response","Headers"].map(c),L=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function R(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let i,r;if("object"!==typeof t&&(t=[t]),l(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function N(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;while(r-- >0)if(i=n[r],e===i.toLowerCase())return i;return null}const M=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),D=t=>!h(t)&&t!==M;function F(){const{caseless:t}=D(this)&&this||{},e={},n=(n,i)=>{const r=t&&N(e,i)||i;w(e[r])&&w(n)?e[r]=F(e[r],n):w(n)?e[r]=F({},n):l(n)?e[r]=n.slice():e[r]=n};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&R(arguments[i],n);return e}const j=(t,e,n,{allOwnKeys:i}={})=>(R(e,((e,i)=>{n&&g(e)?t[i]=r(e,n):t[i]=e}),{allOwnKeys:i}),t),U=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),B=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},z=(t,e,n,i)=>{let r,s,a;const c={};if(e=e||{},null==t)return e;do{r=Object.getOwnPropertyNames(t),s=r.length;while(s-- >0)a=r[s],i&&!i(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},V=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},H=t=>{if(!t)return null;if(l(t))return t;let e=t.length;if(!_(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},$=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&o(Uint8Array)),Z=(t,e)=>{const n=t&&t[Symbol.iterator],i=n.call(t);let r;while((r=i.next())&&!r.done){const n=r.value;e.call(t,n[0],n[1])}},q=(t,e)=>{let n;const i=[];while(null!==(n=t.exec(e)))i.push(n);return i},W=c("HTMLFormElement"),K=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),G=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Q=c("RegExp"),X=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};R(n,((n,r)=>{let s;!1!==(s=e(n,r,t))&&(i[r]=s||n)})),Object.defineProperties(t,i)},J=t=>{X(t,((e,n)=>{if(g(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];g(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Y=(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return l(t)?i(t):i(String(t).split(e)),n},tt=()=>{},et=(t,e)=>null!=t&&Number.isFinite(t=+t)?t:e,nt="abcdefghijklmnopqrstuvwxyz",it="0123456789",rt={DIGIT:it,ALPHA:nt,ALPHA_DIGIT:nt+nt.toUpperCase()+it},st=(t=16,e=rt.ALPHA_DIGIT)=>{let n="";const{length:i}=e;while(t--)n+=e[Math.random()*i|0];return n};function ot(t){return!!(t&&g(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])}const at=t=>{const e=new Array(10),n=(t,i)=>{if(v(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=l(t)?[]:{};return R(t,((t,e)=>{const s=n(t,i+1);!h(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)},ct=c("AsyncFunction"),ut=t=>t&&(v(t)||g(t))&&g(t.then)&&g(t.catch),lt=((t,e)=>t?setImmediate:e?((t,e)=>(M.addEventListener("message",(({source:n,data:i})=>{n===M&&i===t&&e.length&&e.shift()()}),!1),n=>{e.push(n),M.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))("function"===typeof setImmediate,g(M.postMessage)),ht="undefined"!==typeof queueMicrotask?queueMicrotask.bind(M):"undefined"!==typeof process&&process.nextTick||lt;var dt={isArray:l,isArrayBuffer:f,isBuffer:d,isFormData:x,isArrayBufferView:p,isString:m,isNumber:_,isBoolean:y,isObject:v,isPlainObject:w,isReadableStream:P,isRequest:k,isResponse:A,isHeaders:O,isUndefined:h,isDate:b,isFile:T,isBlob:E,isRegExp:Q,isFunction:g,isStream:I,isURLSearchParams:C,isTypedArray:$,isFileList:S,forEach:R,merge:F,extend:j,trim:L,stripBOM:U,inherits:B,toFlatObject:z,kindOf:a,kindOfTest:c,endsWith:V,toArray:H,forEachEntry:Z,matchAll:q,isHTMLForm:W,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:X,freezeMethods:J,toObjectSet:Y,toCamelCase:K,noop:tt,toFiniteNumber:et,findKey:N,global:M,isContextDefined:D,ALPHABET:rt,generateString:st,isSpecCompliantForm:ot,toJSONObject:at,isAsyncFn:ct,isThenable:ut,setImmediate:lt,asap:ht};function ft(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}dt.inherits(ft,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:dt.toJSONObject(this.config),code:this.code,status:this.status}}});const pt=ft.prototype,mt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{mt[t]={value:t}})),Object.defineProperties(ft,mt),Object.defineProperty(pt,"isAxiosError",{value:!0}),ft.from=(t,e,n,i,r,s)=>{const o=Object.create(pt);return dt.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),ft.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var gt=ft,_t=null;function vt(t){return dt.isPlainObject(t)||dt.isArray(t)}function yt(t){return dt.endsWith(t,"[]")?t.slice(0,-2):t}function wt(t,e,n){return t?t.concat(e).map((function(t,e){return t=yt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function bt(t){return dt.isArray(t)&&!t.some(vt)}const Tt=dt.toFlatObject(dt,{},null,(function(t){return/^is[A-Z]/.test(t)}));function Et(t,e,n){if(!dt.isObject(t))throw new TypeError("target must be an object");e=e||new(_t||FormData),n=dt.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!dt.isUndefined(e[t])}));const i=n.metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&dt.isSpecCompliantForm(e);if(!dt.isFunction(r))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(dt.isDate(t))return t.toISOString();if(!c&&dt.isBlob(t))throw new gt("Blob is not supported. Use a Buffer instead.");return dt.isArrayBuffer(t)||dt.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,r){let a=t;if(t&&!r&&"object"===typeof t)if(dt.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(dt.isArray(t)&&bt(t)||(dt.isFileList(t)||dt.endsWith(n,"[]"))&&(a=dt.toArray(t)))return n=yt(n),a.forEach((function(t,i){!dt.isUndefined(t)&&null!==t&&e.append(!0===o?wt([n],i,s):null===o?n:n+"[]",u(t))})),!1;return!!vt(t)||(e.append(wt(r,n,s),u(t)),!1)}const h=[],d=Object.assign(Tt,{defaultVisitor:l,convertValue:u,isVisitable:vt});function f(t,n){if(!dt.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),dt.forEach(t,(function(t,i){const s=!(dt.isUndefined(t)||null===t)&&r.call(e,t,dt.isString(i)?i.trim():i,n,d);!0===s&&f(t,n?n.concat(i):[i])})),h.pop()}}if(!dt.isObject(t))throw new TypeError("data must be an object");return f(t),e}var St=Et;function It(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function xt(t,e){this._pairs=[],t&&St(t,this,e)}const Ct=xt.prototype;Ct.append=function(t,e){this._pairs.push([t,e])},Ct.toString=function(t){const e=t?function(e){return t.call(this,e,It)}:It;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Pt=xt;function kt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function At(t,e,n){if(!e)return t;const i=n&&n.encode||kt;dt.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(s=r?r(e,n):dt.isURLSearchParams(e)?e.toString():new Pt(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}class Ot{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){dt.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var Lt=Ot,Rt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt="undefined"!==typeof URLSearchParams?URLSearchParams:Pt,Mt="undefined"!==typeof FormData?FormData:null,Dt="undefined"!==typeof Blob?Blob:null,Ft={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Mt,Blob:Dt},protocols:["http","https","file","blob","url","data"]};const jt="undefined"!==typeof window&&"undefined"!==typeof document,Ut="object"===typeof navigator&&navigator||void 0,Bt=jt&&(!Ut||["ReactNative","NativeScript","NS"].indexOf(Ut.product)<0),zt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Vt=jt&&window.location.href||"http://localhost";var Ht={...i,...Ft};function $t(t,e){return St(t,new Ht.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return Ht.isNode&&dt.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Zt(t){return dt.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function qt(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Wt(t){function e(t,n,i,r){let s=t[r++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&dt.isArray(i)?i.length:s,a)return dt.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&dt.isObject(i[s])||(i[s]=[]);const c=e(t,n,i[s],r);return c&&dt.isArray(i[s])&&(i[s]=qt(i[s])),!o}if(dt.isFormData(t)&&dt.isFunction(t.entries)){const n={};return dt.forEachEntry(t,((t,i)=>{e(Zt(t),i,n,0)})),n}return null}var Kt=Wt;function Gt(t,e,n){if(dt.isString(t))try{return(e||JSON.parse)(t),dt.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(t)}const Qt={transitional:Rt,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=dt.isObject(t);r&&dt.isHTMLForm(t)&&(t=new FormData(t));const s=dt.isFormData(t);if(s)return i?JSON.stringify(Kt(t)):t;if(dt.isArrayBuffer(t)||dt.isBuffer(t)||dt.isStream(t)||dt.isFile(t)||dt.isBlob(t)||dt.isReadableStream(t))return t;if(dt.isArrayBufferView(t))return t.buffer;if(dt.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return $t(t,this.formSerializer).toString();if((o=dt.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return St(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),Gt(t)):t}],transformResponse:[function(t){const e=this.transitional||Qt.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(dt.isResponse(t)||dt.isReadableStream(t))return t;if(t&&dt.isString(t)&&(n&&!this.responseType||i)){const n=e&&e.silentJSONParsing,s=!n&&i;try{return JSON.parse(t)}catch(r){if(s){if("SyntaxError"===r.name)throw gt.from(r,gt.ERR_BAD_RESPONSE,this,null,this.response);throw r}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};dt.forEach(["delete","get","head","post","put","patch"],(t=>{Qt.headers[t]={}}));var Xt=Qt;const Jt=dt.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Yt=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&Jt[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const te=Symbol("internals");function ee(t){return t&&String(t).trim().toLowerCase()}function ne(t){return!1===t||null==t?t:dt.isArray(t)?t.map(ne):String(t)}function ie(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;while(i=n.exec(t))e[i[1]]=i[2];return e}const re=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function se(t,e,n,i,r){return dt.isFunction(i)?i.call(this,e,n):(r&&(e=n),dt.isString(e)?dt.isString(i)?-1!==e.indexOf(i):dt.isRegExp(i)?i.test(e):void 0:void 0)}function oe(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function ae(t,e){const n=dt.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}class ce{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(t,e,n){const r=ee(e);if(!r)throw new Error("header name must be a non-empty string");const s=dt.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=ne(t))}const s=(t,e)=>dt.forEach(t,((t,n)=>r(t,n,e)));if(dt.isPlainObject(t)||t instanceof this.constructor)s(t,e);else if(dt.isString(t)&&(t=t.trim())&&!re(t))s(Yt(t),e);else if(dt.isHeaders(t))for(const[o,a]of t.entries())r(a,o,n);else null!=t&&r(e,t,n);return this}get(t,e){if(t=ee(t),t){const n=dt.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return ie(t);if(dt.isFunction(e))return e.call(this,t,n);if(dt.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ee(t),t){const n=dt.findKey(this,t);return!(!n||void 0===this[n]||e&&!se(this,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=ee(t),t){const r=dt.findKey(n,t);!r||e&&!se(n,n[r],r,e)||(delete n[r],i=!0)}}return dt.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;while(n--){const r=e[n];t&&!se(this,this[r],r,t,!0)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return dt.forEach(this,((i,r)=>{const s=dt.findKey(n,r);if(s)return e[s]=ne(i),void delete e[r];const o=t?oe(r):String(r).trim();o!==r&&delete e[r],e[o]=ne(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return dt.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&dt.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=this[te]=this[te]={accessors:{}},n=e.accessors,i=this.prototype;function r(t){const e=ee(t);n[e]||(ae(i,t),n[e]=!0)}return dt.isArray(t)?t.forEach(r):r(t),this}}ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),dt.reduceDescriptors(ce.prototype,(({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[n]=t}}})),dt.freezeMethods(ce);var ue=ce;function le(t,e){const n=this||Xt,i=e||n,r=ue.from(i.headers);let s=i.data;return dt.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function he(t){return!(!t||!t.__CANCEL__)}function de(t,e,n){gt.call(this,null==t?"canceled":t,gt.ERR_CANCELED,e,n),this.name="CanceledError"}dt.inherits(de,gt,{__CANCEL__:!0});var fe=de;function pe(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new gt("Request failed with status code "+n.status,[gt.ERR_BAD_REQUEST,gt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}function me(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function ge(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=i[o];r||(r=c),n[s]=a,i[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-r<e)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}var _e=ge;function ve(t,e){let n,i,r=0,s=1e3/e;const o=(e,s=Date.now())=>{r=s,n=null,i&&(clearTimeout(i),i=null),t.apply(null,e)},a=(...t)=>{const e=Date.now(),a=e-r;a>=s?o(t,e):(n=t,i||(i=setTimeout((()=>{i=null,o(n)}),s-a)))},c=()=>n&&o(n);return[a,c]}var ye=ve;const we=(t,e,n=3)=>{let i=0;const r=_e(50,250);return ye((n=>{const s=n.loaded,o=n.lengthComputable?n.total:void 0,a=s-i,c=r(a),u=s<=o;i=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:n,lengthComputable:null!=o,[e?"download":"upload"]:!0};t(l)}),n)},be=(t,e)=>{const n=null!=t;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Te=t=>(...e)=>dt.asap((()=>t(...e)));var Ee=Ht.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ht.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ht.origin),Ht.navigator&&/(msie|trident)/i.test(Ht.navigator.userAgent)):()=>!0,Se=Ht.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];dt.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),dt.isString(i)&&o.push("path="+i),dt.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ie(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function xe(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ce(t,e){return t&&!Ie(e)?xe(t,e):e}const Pe=t=>t instanceof ue?{...t}:t;function ke(t,e){e=e||{};const n={};function i(t,e,n,i){return dt.isPlainObject(t)&&dt.isPlainObject(e)?dt.merge.call({caseless:i},t,e):dt.isPlainObject(e)?dt.merge({},e):dt.isArray(e)?e.slice():e}function r(t,e,n,r){return dt.isUndefined(e)?dt.isUndefined(t)?void 0:i(void 0,t,n,r):i(t,e,n,r)}function s(t,e){if(!dt.isUndefined(e))return i(void 0,e)}function o(t,e){return dt.isUndefined(e)?dt.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e,n)=>r(Pe(t),Pe(e),n,!0)};return dt.forEach(Object.keys(Object.assign({},t,e)),(function(i){const s=c[i]||r,o=s(t[i],e[i],i);dt.isUndefined(o)&&s!==a||(n[i]=o)})),n}var Ae=t=>{const e=ke({},t);let n,{data:i,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:a,auth:c}=e;if(e.headers=a=ue.from(a),e.url=At(Ce(e.baseURL,e.url),t.params,t.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),dt.isFormData(i))if(Ht.hasStandardBrowserEnv||Ht.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[t,...e]=n?n.split(";").map((t=>t.trim())).filter(Boolean):[];a.setContentType([t||"multipart/form-data",...e].join("; "))}if(Ht.hasStandardBrowserEnv&&(r&&dt.isFunction(r)&&(r=r(e)),r||!1!==r&&Ee(e.url))){const t=s&&o&&Se.read(o);t&&a.set(s,t)}return e};const Oe="undefined"!==typeof XMLHttpRequest;var Le=Oe&&function(t){return new Promise((function(e,n){const i=Ae(t);let r=i.data;const s=ue.from(i.headers).normalize();let o,a,c,u,l,{responseType:h,onUploadProgress:d,onDownloadProgress:f}=i;function p(){u&&u(),l&&l(),i.cancelToken&&i.cancelToken.unsubscribe(o),i.signal&&i.signal.removeEventListener("abort",o)}let m=new XMLHttpRequest;function g(){if(!m)return;const i=ue.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),r=h&&"text"!==h&&"json"!==h?m.response:m.responseText,s={data:r,status:m.status,statusText:m.statusText,headers:i,config:t,request:m};pe((function(t){e(t),p()}),(function(t){n(t),p()}),s),m=null}m.open(i.method.toUpperCase(),i.url,!0),m.timeout=i.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new gt("Request aborted",gt.ECONNABORTED,t,m)),m=null)},m.onerror=function(){n(new gt("Network Error",gt.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let e=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const r=i.transitional||Rt;i.timeoutErrorMessage&&(e=i.timeoutErrorMessage),n(new gt(e,r.clarifyTimeoutError?gt.ETIMEDOUT:gt.ECONNABORTED,t,m)),m=null},void 0===r&&s.setContentType(null),"setRequestHeader"in m&&dt.forEach(s.toJSON(),(function(t,e){m.setRequestHeader(e,t)})),dt.isUndefined(i.withCredentials)||(m.withCredentials=!!i.withCredentials),h&&"json"!==h&&(m.responseType=i.responseType),f&&([c,l]=we(f,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,u]=we(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",u)),(i.cancelToken||i.signal)&&(o=e=>{m&&(n(!e||e.type?new fe(null,t,m):e),m.abort(),m=null)},i.cancelToken&&i.cancelToken.subscribe(o),i.signal&&(i.signal.aborted?o():i.signal.addEventListener("abort",o)));const _=me(i.url);_&&-1===Ht.protocols.indexOf(_)?n(new gt("Unsupported protocol "+_+":",gt.ERR_BAD_REQUEST,t)):m.send(r||null)}))};const Re=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let n,i=new AbortController;const r=function(t){if(!n){n=!0,o();const e=t instanceof Error?t:this.reason;i.abort(e instanceof gt?e:new fe(e instanceof Error?e.message:e))}};let s=e&&setTimeout((()=>{s=null,r(new gt(`timeout ${e} of ms exceeded`,gt.ETIMEDOUT))}),e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach((t=>{t.unsubscribe?t.unsubscribe(r):t.removeEventListener("abort",r)})),t=null)};t.forEach((t=>t.addEventListener("abort",r)));const{signal:a}=i;return a.unsubscribe=()=>dt.asap(o),a}};var Ne=Re;const Me=function*(t,e){let n=t.byteLength;if(!e||n<e)return void(yield t);let i,r=0;while(r<n)i=r+e,yield t.slice(r,i),r=i},De=async function*(t,e){for await(const n of Fe(t))yield*Me(n,e)},Fe=async function*(t){if(t[Symbol.asyncIterator])return void(yield*t);const e=t.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},je=(t,e,n,i)=>{const r=De(t,e);let s,o=0,a=t=>{s||(s=!0,i&&i(t))};return new ReadableStream({async pull(t){try{const{done:e,value:i}=await r.next();if(e)return a(),void t.close();let s=i.byteLength;if(n){let t=o+=s;n(t)}t.enqueue(new Uint8Array(i))}catch(e){throw a(e),e}},cancel(t){return a(t),r.return()}},{highWaterMark:2})},Ue="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Be=Ue&&"function"===typeof ReadableStream,ze=Ue&&("function"===typeof TextEncoder?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Ve=(t,...e)=>{try{return!!t(...e)}catch(n){return!1}},He=Be&&Ve((()=>{let t=!1;const e=new Request(Ht.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})),$e=65536,Ze=Be&&Ve((()=>dt.isReadableStream(new Response("").body))),qe={stream:Ze&&(t=>t.body)};Ue&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!qe[e]&&(qe[e]=dt.isFunction(t[e])?t=>t[e]():(t,n)=>{throw new gt(`Response type '${e}' is not supported`,gt.ERR_NOT_SUPPORT,n)})}))})(new Response);const We=async t=>{if(null==t)return 0;if(dt.isBlob(t))return t.size;if(dt.isSpecCompliantForm(t)){const e=new Request(Ht.origin,{method:"POST",body:t});return(await e.arrayBuffer()).byteLength}return dt.isArrayBufferView(t)||dt.isArrayBuffer(t)?t.byteLength:(dt.isURLSearchParams(t)&&(t+=""),dt.isString(t)?(await ze(t)).byteLength:void 0)},Ke=async(t,e)=>{const n=dt.toFiniteNumber(t.getContentLength());return null==n?We(e):n};var Ge=Ue&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:h="same-origin",fetchOptions:d}=Ae(t);u=u?(u+"").toLowerCase():"text";let f,p=Ne([r,s&&s.toAbortSignal()],o);const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let g;try{if(c&&He&&"get"!==n&&"head"!==n&&0!==(g=await Ke(l,i))){let t,n=new Request(e,{method:"POST",body:i,duplex:"half"});if(dt.isFormData(i)&&(t=n.headers.get("content-type"))&&l.setContentType(t),n.body){const[t,e]=be(g,we(Te(c)));i=je(n.body,$e,t,e)}}dt.isString(h)||(h=h?"include":"omit");const r="credentials"in Request.prototype;f=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:i,duplex:"half",credentials:r?h:void 0});let s=await fetch(f);const o=Ze&&("stream"===u||"response"===u);if(Ze&&(a||o&&m)){const t={};["status","statusText","headers"].forEach((e=>{t[e]=s[e]}));const e=dt.toFiniteNumber(s.headers.get("content-length")),[n,i]=a&&be(e,we(Te(a),!0))||[];s=new Response(je(s.body,$e,n,(()=>{i&&i(),m&&m()})),t)}u=u||"text";let _=await qe[dt.findKey(qe,u)||"text"](s,t);return!o&&m&&m(),await new Promise(((e,n)=>{pe(e,n,{data:_,headers:ue.from(s.headers),status:s.status,statusText:s.statusText,config:t,request:f})}))}catch(_){if(m&&m(),_&&"TypeError"===_.name&&/fetch/i.test(_.message))throw Object.assign(new gt("Network Error",gt.ERR_NETWORK,t,f),{cause:_.cause||_});throw gt.from(_,_&&_.code,t,f)}});const Qe={http:_t,xhr:Le,fetch:Ge};dt.forEach(Qe,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}}));const Xe=t=>`- ${t}`,Je=t=>dt.isFunction(t)||null===t||!1===t;var Ye={getAdapter:t=>{t=dt.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){let e;if(n=t[s],i=n,!Je(n)&&(i=Qe[(e=String(n)).toLowerCase()],void 0===i))throw new gt(`Unknown adapter '${e}'`);if(i)break;r[e||"#"+s]=i}if(!i){const t=Object.entries(r).map((([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")));let n=e?t.length>1?"since :\n"+t.map(Xe).join("\n"):" "+Xe(t[0]):"as no adapter specified";throw new gt("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return i},adapters:Qe};function tn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new fe(null,t)}function en(t){tn(t),t.headers=ue.from(t.headers),t.data=le.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=Ye.getAdapter(t.adapter||Xt.adapter);return e(t).then((function(e){return tn(t),e.data=le.call(t,t.transformResponse,e),e.headers=ue.from(e.headers),e}),(function(e){return he(e)||(tn(t),e&&e.response&&(e.response.data=le.call(t,t.transformResponse,e.response),e.response.headers=ue.from(e.response.headers))),Promise.reject(e)}))}const nn="1.7.8",rn={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{rn[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const sn={};function on(t,e,n){if("object"!==typeof t)throw new gt("options must be an object",gt.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;while(r-- >0){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new gt("option "+s+" must be "+n,gt.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new gt("Unknown option "+s,gt.ERR_BAD_OPTION)}}rn.transitional=function(t,e,n){function i(t,e){return"[Axios v"+nn+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new gt(i(r," has been removed"+(e?" in "+e:"")),gt.ERR_DEPRECATED);return e&&!sn[r]&&(sn[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}},rn.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};var an={assertOptions:on,validators:rn};const cn=an.validators;class un{constructor(t){this.defaults=t,this.interceptors={request:new Lt,response:new Lt}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const e=t.stack?t.stack.replace(/^.+\n/,""):"";try{n.stack?e&&!String(n.stack).endsWith(e.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+e):n.stack=e}catch(i){}}throw n}}_request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=ke(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;void 0!==n&&an.assertOptions(n,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),null!=i&&(dt.isFunction(i)?e.paramsSerializer={serialize:i}:an.assertOptions(i,{encode:cn.function,serialize:cn.function},!0)),an.assertOptions(e,{baseUrl:cn.spelling("baseURL"),withXsrfToken:cn.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let s=r&&dt.merge(r.common,r[e.method]);r&&dt.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=ue.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[en.bind(this),void 0];t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(h<l)u=u.then(t[h++],t[h++]);return u}l=o.length;let d=e;h=0;while(h<l){const t=o[h++],e=o[h++];try{d=t(d)}catch(f){e.call(this,f);break}}try{u=en.call(this,d)}catch(f){return Promise.reject(f)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(t){t=ke(this.defaults,t);const e=Ce(t.baseURL,t.url);return At(e,t.params,t.paramsSerializer)}}dt.forEach(["delete","get","head","options"],(function(t){un.prototype[t]=function(e,n){return this.request(ke(n||{},{method:t,url:e,data:(n||{}).data}))}})),dt.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(ke(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}un.prototype[t]=e(),un.prototype[t+"Form"]=e(!0)}));var ln=un;class hn{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new fe(t,i,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=e=>{t.abort(e)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;const e=new hn((function(e){t=e}));return{token:e,cancel:t}}}var dn=hn;function fn(t){return function(e){return t.apply(null,e)}}function pn(t){return dt.isObject(t)&&!0===t.isAxiosError}const mn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(mn).forEach((([t,e])=>{mn[e]=t}));var gn=mn;function _n(t){const e=new ln(t),n=r(ln.prototype.request,e);return dt.extend(n,ln.prototype,e,{allOwnKeys:!0}),dt.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return _n(ke(t,e))},n}const vn=_n(Xt);vn.Axios=ln,vn.CanceledError=fe,vn.CancelToken=dn,vn.isCancel=he,vn.VERSION=nn,vn.toFormData=St,vn.AxiosError=gt,vn.Cancel=vn.CanceledError,vn.all=function(t){return Promise.all(t)},vn.spread=fn,vn.isAxiosError=pn,vn.mergeConfig=ke,vn.AxiosHeaders=ue,vn.formToJSON=t=>Kt(dt.isHTMLForm(t)?new FormData(t):t),vn.getAdapter=Ye.getAdapter,vn.HttpStatusCode=gn,vn.default=vn;var yn=vn},223:function(t,e,n){"use strict";n.d(e,{Wp:function(){return i.Wp}});var i=n(9928),r="firebase",s="11.0.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(r,s,"app")},1268:function(t,e,n){"use strict";n.d(e,{eJ:function(){return Fe},xI:function(){return Ki},x9:function(){return je}});var i=n(9928),r=n(6743),s=n(3424);function o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${t}`,...e)}function f(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function m(t,...e){return v(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.FA("auth","Firebase",i);return s.create(e,{appName:t.name})}function _(t){return g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw v(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function R(t,e,n,i,s={}){return N(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return(0,r.c1)()||(u.referrerPolicy="no-referrer"),k.fetch()(D(t,t.config.apiHost,n,a),u)}))}async function N(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},A),e);try{const e=new j(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(s){if(s instanceof r.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function M(t,e,n,i,r={}){const s=await R(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function D(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?P(t.config,r):`${t.config.apiScheme}://${r}`}function F(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class j{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),O.get())}))}}function U(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=m(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return void 0!==t&&void 0!==t.enterprise}class z{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return F(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(t,e){return R(t,"GET","/v2/recaptchaConfig",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e){return R(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return R(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e=!1){const n=(0,r.Ku)(t),i=await n.getIdToken(e),s=K(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:Z(W(s.auth_time)),issuedAtTime:Z(W(s.iat)),expirationTime:Z(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(t){return 1e3*Number(t)}function K(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.u)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function G(t){const e=K(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.g&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Q(t,$(n,{idToken:i}));y(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?it(s.providerUserInfo):[],a=nt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function et(t){const e=(0,r.Ku)(t);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){const n=await N(t,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=D(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function st(t,e){return R(t,"POST","/v2/accounts:revokeToken",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){y(0!==t.length,"internal-error");const e=G(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(y(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await rt(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new ot;return n&&(y("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(y("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(y("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ct{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Y(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Q(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return q(this,t)}reload(){return et(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await tt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.xZ)(this.auth.app))return Promise.reject(_(this.auth));const t=await this.getIdToken();return await Q(this,H(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,_=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:T,stsTokenManager:E}=e;y(v&&E,t,"internal-error");const S=ot.fromJSON(this.name,E);y("string"===typeof v,t,"internal-error"),at(l,t.name),at(h,t.name),y("boolean"===typeof w,t,"internal-error"),y("boolean"===typeof b,t,"internal-error"),at(d,t.name),at(f,t.name),at(p,t.name),at(m,t.name),at(g,t.name),at(_,t.name);const I=new ct({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:_});return T&&Array.isArray(T)&&(I.providerData=T.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new ot;i.updateFromServerResponse(e);const r=new ct({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await tt(r),r}static async _fromGetAccountInfoResponse(t,e,n){const i=e.users[0];y(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?it(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),o=new ot;o.updateFromIdToken(n);const a=new ct({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Map;function lt(t){b(t instanceof Function,"Expected a class definition");let e=ut.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ut.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ft(this.userKey,i.apiKey,r),this.fullPersistenceKey=ft("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ct._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(lt(dt),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||lt(dt);const s=ft(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=ct._fromJSON(t,e);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(c){}}))),new pt(r,t,n)):new pt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bt(e))return"Blackberry";if(Tt(e))return"Webos";if(_t(e))return"Safari";if((e.includes("chrome/")||vt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=(0,r.ZQ)()){return/firefox\//i.test(t)}function _t(t=(0,r.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vt(t=(0,r.ZQ)()){return/crios\//i.test(t)}function yt(t=(0,r.ZQ)()){return/iemobile/i.test(t)}function wt(t=(0,r.ZQ)()){return/android/i.test(t)}function bt(t=(0,r.ZQ)()){return/blackberry/i.test(t)}function Tt(t=(0,r.ZQ)()){return/webos/i.test(t)}function Et(t=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function St(t=(0,r.ZQ)()){var e;return Et(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function It(){return(0,r.lT)()&&10===document.documentMode}function xt(t=(0,r.ZQ)()){return Et(t)||wt(t)||Tt(t)||bt(t)||/windows phone/i.test(t)||yt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e=[]){let n;switch(t){case"Browser":n=mt((0,r.ZQ)());break;case"Worker":n=`${mt((0,r.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e={}){return R(t,"GET","/v2/passwordPolicy",L(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=6;class Ot{constructor(t){var e,n,i,r;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:At,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=t.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nt(this),this.idTokenSubscription=new Nt(this),this.beforeStateQueue=new Pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=lt(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await $(this,{idToken:t}),n=await ct._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,i.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await tt(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,i.xZ)(this.app))return Promise.reject(_(this));const e=t?(0,r.Ku)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,i.xZ)(this.app)?Promise.reject(_(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,i.xZ)(this.app)?Promise.reject(_(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(lt(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kt(this),e=new Ot(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await st(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&lt(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[lt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"===typeof e){const r=t.addObserver(e,n,i);return()=>{s=!0,r()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Rt(t){return(0,r.Ku)(t)}class Nt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.tD)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dt(t){Mt=t}function Ft(t){return Mt.loadJS(t)}function jt(){return Mt.recaptchaEnterpriseScript}function Ut(){return Mt.gapiScript}function Bt(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.enterprise=new Vt}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class Vt{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const Ht="recaptcha-enterprise",$t="NO_RECAPTCHA";class Zt{constructor(t){this.type=Ht,this.auth=Rt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{V(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new z(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function i(e,n,i){const r=window.grecaptcha;B(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n($t)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const t=new zt;return t.execute("siteKey",{action:"verify"})}return new Promise(((t,r)=>{n(this.auth).then((n=>{if(!e&&B(window.grecaptcha))i(n,t,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let e=jt();0!==e.length&&(e+=n),Ft(e).then((()=>{i(n,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}}async function qt(t,e,n,i=!1,r=!1){const s=new Zt(t);let o;if(r)o=$t;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a=Object.assign({},e);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wt(t,e,n,i,r){var s,o;if("EMAIL_PASSWORD_PROVIDER"===r){if(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await qt(t,e,n,"getOobCode"===n);return i(t,r)}return i(t,e).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await qt(t,e,n,"getOobCode"===n);return i(t,r)}return Promise.reject(r)}))}if("PHONE_PROVIDER"===r){if(null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const r=await qt(t,e,n);return i(t,r).catch((async r=>{var s;if("AUDIT"===(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===r.code||"auth/invalid-app-credential"===r.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const r=await qt(t,e,n,!1,!0);return i(t,r)}return Promise.reject(r)}))}{const r=await qt(t,e,n,!1,!0);return i(t,r)}}return Promise.reject(r+" provider is not supported.")}async function Kt(t){const e=Rt(t),n=await V(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new z(n);if(null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()){const t=new Zt(e);t.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){const n=(0,i.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Qt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(lt);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Xt(t,e,n){const i=Rt(t);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Jt(e),{host:o,port:a}=Yt(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ee()}function Jt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yt(t){const e=Jt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:te(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:te(e)}}}function te(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ee(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e){return R(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function oe(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends ne{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new ae(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ae(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,e,"signInWithPassword",re,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return se(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,n,"signUpPassword",ie,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oe(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="http://localhost";class le extends ne{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new le(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=o(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new le(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ce(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ce(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ce(t,e)}buildRequest(){const t={requestUri:ue,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e){return R(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function de(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function fe(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const pe={["USER_NOT_FOUND"]:"user-not-found"};async function me(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),pe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends ne{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ge({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ge({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return de(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return fe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return me(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new ge({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ve(t){const e=(0,r.I9)((0,r.hp)(t))["link"],n=e?(0,r.I9)((0,r.hp)(e))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(t))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||e||t}class ye{constructor(t){var e,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=_e(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ve(t);try{return new ye(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we{constructor(){this.providerId=we.PROVIDER_ID}static credential(t,e){return ae._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ye.parseLink(e);return y(n,"argument-error"),ae._fromEmailAndCode(t,n.code,n.tenantId)}}we.PROVIDER_ID="password",we.EMAIL_PASSWORD_SIGN_IN_METHOD="password",we.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends be{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends Te{constructor(){super("facebook.com")}static credential(t){return le._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ee.credentialFromTaggedObject(t)}static credentialFromError(t){return Ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ee.credential(t.oauthAccessToken)}catch(e){return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ee.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return le._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Se.credential(e,n)}catch(i){return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com",Se.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends Te{constructor(){super("github.com")}static credential(t){return le._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ie.credential(t.oauthAccessToken)}catch(e){return null}}}Ie.GITHUB_SIGN_IN_METHOD="github.com",Ie.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends Te{constructor(){super("twitter.com")}static credential(t,e){return le._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return xe.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(t,e){return M(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.TWITTER_SIGN_IN_METHOD="twitter.com",xe.PROVIDER_ID="twitter.com";class Pe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await ct._fromIdTokenResponse(t,n,i),s=ke(n),o=new Pe({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=ke(n);return new Pe({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function ke(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends r.g{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ae.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Ae(t,e,n,i)}}function Oe(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ae._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e,n=!1){const i=await Q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pe._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(t,e,n=!1){const{auth:r}=t;if((0,i.xZ)(r.app))return Promise.reject(_(r));const s="reauthenticate";try{const i=await Q(t,Oe(r,s,e,t),n);y(i.idToken,r,"internal-error");const o=K(i.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(t.uid===a,r,"user-mismatch"),Pe._forOperation(t,s,i)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e,n=!1){if((0,i.xZ)(t.app))return Promise.reject(_(t));const r="signIn",s=await Oe(t,r,e),o=await Pe._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function Me(t,e){return Ne(Rt(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function De(t){const e=Rt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Fe(t,e,n){if((0,i.xZ)(t.app))return Promise.reject(_(t));const r=Rt(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},o=Wt(r,s,"signUpPassword",Ce,"EMAIL_PASSWORD_PROVIDER"),a=await o.catch((e=>{throw"auth/password-does-not-meet-requirements"===e.code&&De(t),e})),c=await Pe._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function je(t,e,n){return(0,i.xZ)(t.app)?Promise.reject(_(t)):Me((0,r.Ku)(t),we.credential(e,n)).catch((async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&De(t),e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e,n,i){return(0,r.Ku)(t).onIdTokenChanged(e,n,i)}function Be(t,e,n){return(0,r.Ku)(t).beforeAuthStateChanged(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function Ve(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}function He(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function $e(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const Ze="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ze,"1"),this.storage.removeItem(Ze),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=1e3,Ke=10;class Ge extends qe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);It()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Ke):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),We)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ge.type="LOCAL";const Qe=Ge;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends qe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Xe.type="SESSION";const Je=Xe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new tn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await Ye(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.receivers=[];class nn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=en("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function sn(t){rn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return"undefined"!==typeof rn()["WorkerGlobalScope"]&&"function"===typeof rn()["importScripts"]}async function an(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function cn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function un(){return on()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="firebaseLocalStorageDb",hn=1,dn="firebaseLocalStorage",fn="fbase_key";class pn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function mn(t,e){return t.transaction([dn],e?"readwrite":"readonly").objectStore(dn)}function gn(){const t=indexedDB.deleteDatabase(ln);return new pn(t).toPromise()}function _n(){const t=indexedDB.open(ln,hn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(dn,{keyPath:fn})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(dn)?e(n):(n.close(),await gn(),e(await _n()))}))}))}async function vn(t,e,n){const i=mn(t,!0).put({[fn]:e,value:n});return new pn(i).toPromise()}async function yn(t,e){const n=mn(t,!1).get(e),i=await new pn(n).toPromise();return void 0===i?null:i.value}function wn(t,e){const n=mn(t,!0).delete(e);return new pn(n).toPromise()}const bn=800,Tn=3;class En{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _n()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return on()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(un()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await an(),!this.activeServiceWorker)return;this.sender=new nn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&cn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _n();return await vn(t,Ze,"1"),await wn(t,Ze),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>vn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>yn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>wn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=mn(t,!1).getAll();return new pn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),bn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}En.type="LOCAL";const Sn=En;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function xn(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}function Cn(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn="recaptcha";async function kn(t,e,n){var i;if(!t._getRecaptchaConfig())try{await Kt(t)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){y("enroll"===e.type,t,"internal-error");const i={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(t,e)=>{if(e.phoneEnrollmentInfo.captchaResponse===$t){y((null===n||void 0===n?void 0:n.type)===Pn,t,"argument-error");const i=await An(t,e,n);return ze(t,i)}return ze(t,e)},o=Wt(t,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((t=>Promise.reject(t)));return a.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const s=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;y(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:e.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(t,e)=>{if(e.phoneSignInInfo.captchaResponse===$t){y((null===n||void 0===n?void 0:n.type)===Pn,t,"argument-error");const i=await An(t,e,n);return In(t,i)}return In(t,e)},c=Wt(t,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),u=await c.catch((t=>Promise.reject(t)));return u.phoneResponseInfo.sessionInfo}}{const e={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(t,e)=>{if(e.captchaResponse===$t){y((null===n||void 0===n?void 0:n.type)===Pn,t,"argument-error");const i=await An(t,e,n);return he(t,i)}return he(t,e)},s=Wt(t,e,"sendVerificationCode",i,"PHONE_PROVIDER"),o=await s.catch((t=>Promise.reject(t)));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function An(t,e,n){y(n.type===Pn,t,"argument-error");const i=await n.verify();y("string"===typeof i,t,"argument-error");const r=Object.assign({},e);if("phoneEnrollmentInfo"in r){const t=r.phoneEnrollmentInfo.phoneNumber,e=r.phoneEnrollmentInfo.captchaResponse,n=r.phoneEnrollmentInfo.clientType,s=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:i,captchaResponse:e,clientType:n,recaptchaVersion:s}}),r}if("phoneSignInInfo"in r){const t=r.phoneSignInInfo.captchaResponse,e=r.phoneSignInInfo.clientType,n=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:t,clientType:e,recaptchaVersion:n}}),r}return Object.assign(r,{recaptchaToken:i}),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.providerId=On.PROVIDER_ID,this.auth=Rt(t)}verifyPhoneNumber(t,e){return kn(this.auth,t,(0,r.Ku)(e))}static credential(t,e){return ge._fromVerification(t,e)}static credentialFromResult(t){const e=t;return On.credentialFromTaggedObject(e)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ge._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ln(t,e){return e?lt(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class Rn extends ne{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ce(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ce(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ce(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Nn(t){return Ne(t.auth,new Rn(t),t.bypassAuthState)}function Mn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Re(n,new Rn(t),t.bypassAuthState)}async function Dn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Le(n,new Rn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Nn;case"linkViaPopup":case"linkViaRedirect":return Dn;case"reauthViaPopup":case"reauthViaRedirect":return Mn;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new C(2e3,1e4);class Un extends Fn{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=en();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,jn.get())};t()}}Un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bn="pendingRedirect",zn=new Map;class Vn extends Fn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=zn.get(this.auth._key());if(!t){try{const e=await Hn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}zn.set(this.auth._key(),t)}return this.bypassAuthState||zn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hn(t,e){const n=qn(e),i=Zn(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function $n(t,e){zn.set(t._key(),e)}function Zn(t){return lt(t._redirectPersistence)}function qn(t){return ft(Bn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(t,e,n=!1){if((0,i.xZ)(t.app))return Promise.reject(_(t));const r=Rt(t),s=Ln(r,e),o=new Vn(r,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kn=6e5;class Gn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Jn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Xn(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(t))}saveEventToCache(t){this.cachedEventUids.add(Qn(t)),this.lastProcessedEventTime=Date.now()}}function Qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Xn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Jn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e={}){return R(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ei=/^https?/;async function ni(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yn(t);for(const i of e)try{if(ii(i))return}catch(n){}p(t,"unauthorized-domain")}function ii(t){const e=T(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ei.test(n))return!1;if(ti.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new C(3e4,6e4);function si(){const t=rn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function oi(t){return new Promise(((e,n)=>{var i,r,s;function o(){si(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{si(),n(m(t,"network-request-failed"))},timeout:ri.get()})}if(null===(r=null===(i=rn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=rn().gapi)||void 0===s?void 0:s.load)){const e=Bt("iframefcb");return rn()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},Ft(`${Ut()}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw ai=null,t}))}let ai=null;function ci(t){return ai=ai||oi(t),ai}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new C(5e3,15e3),li="__/auth/iframe",hi="emulator/auth/iframe",di={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pi(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?P(e,hi):`https://${t.config.authDomain}/${li}`,s={apiKey:e.apiKey,appName:t.name,v:i.MF},o=fi.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function mi(t){const e=await ci(t),n=rn().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:pi(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:di,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=m(t,"network-request-failed"),s=rn().setTimeout((()=>{i(r)}),ui.get());function o(){rn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_i=500,vi=600,yi="_blank",wi="http://localhost";class bi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ti(t,e,n,i=_i,s=vi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},gi),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=vt(l)?yi:n),gt(l)&&(e=e||wi,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(l)&&"_self"!==c)return Ei(e||"",c),new bi(null);const d=window.open(e||"",c,h);y(d,t,"popup-blocked");try{d.focus()}catch(f){}return new bi(d)}function Ei(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="__/auth/handler",Ii="emulator/auth/handler",xi=encodeURIComponent("fac");async function Ci(t,e,n,s,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(e instanceof be){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await t._getAppCheckToken(),h=l?`#${xi}=${encodeURIComponent(l)}`:"";return`${Pi(t)}?${(0,r.Am)(u).slice(1)}${h}`}function Pi({config:t}){return t.emulator?P(t,Ii):`https://${t.authDomain}/${Si}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="webStorageSupport";class Ai{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Je,this._completeRedirectFn=Wn,this._overrideRedirectResult=$n}async _openPopup(t,e,n,i){var r;b(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await Ci(t,e,n,T(),i);return Ti(t,s,en())}async _openRedirect(t,e,n,i){await this._originValidation(t);const r=await Ci(t,e,n,T(),i);return sn(r),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await mi(t),n=new Gn(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ki,{type:ki},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ki];void 0!==r&&e(!!r),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=ni(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return xt()||_t()||Et()}}const Oi=Ai;class Li{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Ri extends Li{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Ri(t)}_finalizeEnroll(t,e,n){return Ve(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return xn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ni{constructor(){}static assertion(t){return Ri._fromCredential(t)}}Ni.FACTOR_ID="phone";class Mi{static assertionForEnrollment(t,e){return Di._fromSecret(t,e)}static assertionForSignIn(t,e){return Di._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;y("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const i=await He(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Fi._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Mi.FACTOR_ID="totp";class Di extends Li{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Di(e,void 0,t)}static _fromEnrollmentId(t,e){return new Di(e,t)}async _finalizeEnroll(t,e,n){return y("undefined"!==typeof this.secret,t,"argument-error"),$e(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){y(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return Cn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Fi{constructor(t,e,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Fi(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let i=!1;return(ji(t)||ji(e))&&(i=!0),i&&(ji(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ji(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ji(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Ui="@firebase/auth",Bi="1.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hi(t){(0,i.om)(new a.uA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ct(t)},u=new Lt(i,r,s,c);return Qt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,i.om)(new a.uA("auth-internal",(t=>{const e=Rt(t.getProvider("auth").getImmediate());return(t=>new zi(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(Ui,Bi,Vi(t)),(0,i.KO)(Ui,Bi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=300,Zi=(0,r.XA)("authIdTokenMaxAge")||$i;let qi=null;const Wi=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Zi)return;const r=null===n||void 0===n?void 0:n.token;qi!==r&&(qi=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ki(t=(0,i.Sx)()){const e=(0,i.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gt(t,{popupRedirectResolver:Oi,persistence:[Sn,Qe,Je]}),s=(0,r.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=Wi(t.toString());Be(n,e,(()=>e(n.currentUser))),Ue(n,(t=>e(t)))}}const o=(0,r.Tj)("auth");return o&&Xt(n,`http://${o}`),n}function Gi(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Dt({loadJS(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Gi().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Hi("Browser")},1884:function(t,e,n){"use strict";n.d(e,{H9:function(){return vo},x7:function(){return jo},aU:function(){return bo}});var i,r,s=n(9928),o=n(5125),a=n(3424),c=n(6743),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function a(t,e){var n=u;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.B,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){o(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){o(this,i),r=0;break}}this.h=r,this.o+=e},s.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var u={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new c([0|t],0>t?-1:0)})):new c([0|t],0>t?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return y(d(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new c(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return y(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(e,8)),i=p,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=d(Math.pow(e,s)),i=i.j(s).add(d(o))):(i=i.j(n),i=i.add(d(o)))}return i}var p=h(0),m=h(1),g=h(16777216);function _(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function y(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new c(n,~t.h).add(m)}function w(t,e){return t.add(y(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function T(t,e){this.g=t,this.h=e}function E(t,e){if(_(e))throw Error("division by zero");if(_(t))return new T(p,p);if(v(t))return e=E(y(t),e),new T(y(e.g),y(e.h));if(v(e))return e=E(t,y(e)),new T(y(e.g),e.h);if(30<t.g.length){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=m,i=e;0>=i.l(t);)n=S(n),i=S(i);var r=I(n,1),s=I(i,1);for(i=I(i,2),n=I(n,2);!_(i);){var o=s.add(i);0>=o.l(t)&&(r=r.add(n),s=o),i=I(i,1),n=I(n,1)}return e=w(t,r.j(e)),new T(r,e)}for(r=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=d(n),o=s.j(e);v(o)||0<o.l(t);)n-=i,s=d(n),o=s.j(e);_(s)&&(s=m),r=r.add(s),t=w(t,o)}return new T(r,t)}function S(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new c(n,t.h)}function I(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(r,t.h)}t=c.prototype,t.m=function(){if(v(this))return-y(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.i(n);t+=(0<=i?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_(this))return"0";if(v(this))return"-"+y(this).toString(t);for(var e=d(Math.pow(t,6)),n=this,i="";;){var r=E(n,e).g;n=w(n,r.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,_(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=w(this,t),v(t)?-1:_(t)?0:1},t.abs=function(){return v(this)?y(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.i(r))+(65535&t.i(r)),o=(s>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(_(this)||_(t))return p;if(v(this))return v(t)?y(this).j(y(t)):y(y(this).j(t));if(v(t))return y(this.j(y(t)));if(0>this.l(g)&&0>t.l(g))return d(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.i(i)>>>16,o=65535&this.i(i),a=t.i(r)>>>16,u=65535&t.i(r);n[2*i+2*r]+=o*u,b(n,2*i+2*r),n[2*i+2*r+1]+=s*u,b(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,b(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,b(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new c(n,0)},t.A=function(t){return E(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new c(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new c(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,r=l.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,i=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,m,g,_,v,y="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof y&&y];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var i=n(this);function r(t,n){if(n)t:{var r=i;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in r))break t;r=r[o]}t=t[t.length-1],s=r[t],n=n(s),n!=s&&null!=n&&e(r,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,i=!1,r={next:function(){if(!i&&n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}r("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t,e,n){return t.call.apply(t.bind,arguments)}function T(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:T,E.apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function x(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function P(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}class k{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function A(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function L(t){return L[" "](t),t}L[" "]=function(){};var R=-1!=O().indexOf("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&-1==O().indexOf("Edge"))&&!(-1!=O().indexOf("Trident")||-1!=O().indexOf("MSIE"))&&-1==O().indexOf("Edge");function N(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function M(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function D(t){const e={};for(const n in t)e[n]=t[n];return e}const F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<F.length;e++)n=F[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function U(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function B(t){a.setTimeout((()=>{throw t}),0)}function z(){var t=W;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class V{constructor(){this.h=this.g=null}add(t,e){const n=H.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var H=new k((()=>new $),(t=>t.reset()));class ${constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,q=!1,W=new V,K=()=>{const t=a.Promise.resolve(void 0);Z=()=>{t.then(G)}};var G=()=>{for(var t;t=z();){try{t.h.call(t.g)}catch(n){B(n)}var e=H;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}q=!1};function Q(){this.s=this.s,this.C=this.C}function X(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},X.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Y(t,e){if(X.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(R){t:{try{L(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Y.aa.h.call(this)}}x(Y,X);var tt={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function it(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++nt,this.da=this.fa=!1}function rt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Array.prototype.indexOf.call(r,e,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}st.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new it(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,i,r){if(i&&i.once)return ft(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,i,r);return null}return n=wt(n),t&&t[et]?t.K(e,n,u(i)?!!i.capture:!!i,r):ht(t,e,n,!1,i,r)}function ht(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=u(r)?!!r.capture:!!r,a=vt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=dt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)J||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(gt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=_t;return t}function ft(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ft(t,e[s],n,i,r);return null}return n=wt(n),t&&t[et]?t.L(e,n,u(i)?!!i.capture:!!i,r):ht(t,e,n,!0,i,r)}function pt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,i,r);else i=u(i)?!!i.capture:!!i,n=wt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,i,r),-1<n&&(rt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,i,r)),(n=-1<t?e[t]:null)&&mt(n))}function mt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])ot(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(gt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):rt(t)}}}function gt(t){return t in ut?ut[t]:ut[t]="on"+t}function _t(t,e){if(t.da)t=!0;else{e=new Y(e,this);var n=t.listener,i=t.ha||t.src;t.fa&&mt(t),t=n.call(i,e)}return t}function vt(t){return t=t[ct],t instanceof st?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function bt(){Q.call(this),this.i=new st(this),this.M=this,this.F=null}function Tt(t,e){var n,i=t.F;if(i)for(n=[];i;i=i.F)n.push(i);if(t=t.M,i=e.type||e,"string"===typeof e)e=new X(e,t);else if(e instanceof X)e.target=e.target||t;else{var r=e;e=new X(i,t),j(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Et(o,i,!0,e)&&r}if(o=e.g=t,r=Et(o,i,!0,e)&&r,r=Et(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Et(o,i,!1,e)&&r}function Et(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&ot(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}function St(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function It(t){t.g=St((()=>{t.g=null,t.i&&(t.i=!1,It(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}x(bt,Q),bt.prototype[et]=!0,bt.prototype.removeEventListener=function(t,e,n,i){pt(this,t,e,n,i)},bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rt(n[i]);delete e.g[t],e.h--}}this.F=null},bt.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},bt.prototype.L=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class xt extends Q{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(t){Q.call(this),this.h=t,this.g={}}x(Ct,Q);var Pt=[];function kt(t){N(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mt(t)}),t),t.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),kt(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var At=a.JSON.stringify,Ot=a.JSON.parse,Lt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Rt(){}function Nt(t){return t.h||(t.h=t.i())}function Mt(){}Rt.prototype.h=null;var Dt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ft(){X.call(this,"d")}function jt(){X.call(this,"c")}x(Ft,X),x(jt,X);var Ut={},Bt=null;function zt(){return Bt=Bt||new bt}function Vt(t){X.call(this,Ut.La,t)}function Ht(t){const e=zt();Tt(e,new Vt(e))}function $t(t,e){X.call(this,Ut.STAT_EVENT,t),this.stat=e}function Zt(t){const e=zt();Tt(e,new $t(e,t))}function qt(t,e){X.call(this,Ut.Ma,t),this.size=e}function Wt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Kt(){this.g=!0}function Gt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Xt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(i?" "+i:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return At(n)}catch(a){return e}}Ut.La="serverreachability",x(Vt,X),Ut.STAT_EVENT="statevent",x($t,X),Ut.Ma="timingevent",x(qt,X),Kt.prototype.xa=function(){this.g=!1},Kt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ie(){}function re(t,e,n,i){this.j=t,this.i=e,this.l=n,this.R=i||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new se}function se(){this.i=null,this.g="",this.h=!1}x(ie,Rt),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},te=new ie;var oe={},ae={};function ce(t,e,n){t.L=1,t.v=Fe(Le(e)),t.m=n,t.P=!0,ue(t,null)}function ue(t,e){t.F=Date.now(),de(t),t.A=Le(t.v);var n=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),Qe(n.i,"t",i),t.C=0,n=t.j.J,t.h=new se,t.g=Hn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new xt(E(t.Y,t,t.g),t.O)),e=t.U,n=t.g,i=t.ca;var r="readystatechange";Array.isArray(r)||(r&&(Pt[0]=r.toString()),r=Pt);for(var s=0;s<r.length;s++){var o=lt(n,r[s],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?D(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ht(),Gt(t.i,t.u,t.A,t.l,t.R,t.m)}function le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ae:(n=Number(e.substring(n,i)),isNaN(n)?oe:(i+=1,i+n>e.length?ae:(e=e.slice(i,i+n),t.C=i+n,e)))}function de(t){t.S=Date.now()+t.I,fe(t,t.I)}function fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Wt(E(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function me(t){0==t.j.G||t.J||jn(t.j,t)}function ge(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,kt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function _e(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Te(n.h,t)))if(!t.K&&Te(n.h,t)&&3==n.G){try{var i=n.Da.g.parse(e)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Fn(n),xn(n)}Nn(n),Zt(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=Wt(E(n.Za,n),6e3));if(1>=be(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Bn(n,11)}else if((t.K||n.g==t)&&Fn(n),!A(e))for(r=n.Da.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const r=u[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(i=1.5*l,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ee(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,De(i.I,i.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),i=n;var o=t;if(i.qa=Vn(i,i.J?i.ia:null,i.W),o.K){Se(i.h,o);var a=o,c=i.L;c&&(a.I=c),a.B&&(pe(a),de(a)),i.g=o}else Rn(i);0<n.i.length&&Pn(n)}else"stop"!=u[0]&&"close"!=u[0]||Bn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Bn(n,7):In(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ht(4)}catch(u){}}re.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==wn(t)?e.j():this.Y(t)},re.prototype.Y=function(t){try{if(t==this.g)t:{const d=wn(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=d||7==e||Ht(8==e||0>=f?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(le(this)){var i=bn(this.g);t="";var r=i.length,s=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ge(this),me(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:!(s&&e==r-1)});i.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Qt(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,Zt(12),ge(this),me(this);break t}Xt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_e(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=he(this,o),t==ae){4==d&&(this.s=4,Zt(14),n=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}if(t==oe){this.s=4,Zt(15),Xt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Xt(this.i,this.l,t,null),_e(this,t)}if(le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Zt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Mn(h),h.M=!0,Zt(11))}}else Xt(this.i,this.l,o,"[Invalid Chunked Response]"),ge(this),me(this)}else Xt(this.i,this.l,o,null),_e(this,o);4==d&&ge(this),this.o&&!this.J&&(4==d?jn(this.j,this):(this.o=!1,de(this)))}else Tn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Zt(12)):(this.s=0,Zt(13)),ge(this),me(this)}}}catch(b){}},re.prototype.cancel=function(){this.J=!0,ge(this)},re.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(Ht(),Zt(17)),ge(this),this.s=2,me(this)):fe(this,this.S-t)};var ve=class{constructor(t,e){this.g=t,this.map=e}};function ye(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function we(t){return!!t.h||!!t.g&&t.g.size>=t.j}function be(t){return t.h?1:t.g?t.g.size:0}function Te(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ee(t,e){t.g?t.g.add(e):t.h=e}function Se(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ie(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function xe(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Ce(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ce(t),i=xe(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}ye.prototype.cancel=function(){if(this.i=Ie(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ke=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ae(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Re(this,t.j),this.o=t.o,this.g=t.g,Ne(this,t.s),this.l=t.l;var e=t.i,n=new qe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Me(this,n),this.m=t.m}else t&&(e=String(t).match(ke))?(this.h=!1,Re(this,e[1]||"",!0),this.o=je(e[2]||""),this.g=je(e[3]||"",!0),Ne(this,e[4]),this.l=je(e[5]||"",!0),Me(this,e[6]||"",!0),this.m=je(e[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}function Le(t){return new Oe(t)}function Re(t,e,n){t.j=n?je(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ne(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Me(t,e,n){e instanceof qe?(t.i=e,Je(t.i,t.h)):(n||(e=Ue(e,$e)),t.i=new qe(e,t.h))}function De(t,e,n){t.i.set(e,n)}function Fe(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function je(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ue(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Be),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Be(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Oe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ue(e,ze,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ue(e,ze,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ue(n,"/"==n.charAt(0)?He:Ve,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ue(n,Ze)),t.join("")};var ze=/[#\/\?@]/g,Ve=/[#\?:]/g,He=/[#\?]/g,$e=/[#\?@]/g,Ze=/#/g;function qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function We(t){t.g||(t.g=new Map,t.h=0,t.i&&Ae(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ke(t,e){We(t),e=Xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ge(t,e){return We(t),e=Xe(t,e),t.g.has(e)}function Qe(t,e,n){Ke(t,e),0<n.length&&(t.i=null,t.g.set(Xe(t,e),C(n)),t.h+=n.length)}function Xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(We(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ke(this,e),Qe(this,n,t))}),t)),t.j=e}function Ye(t,e){const n=new Kt;if(a.Image){const i=new Image;i.onload=I(en,n,"TestLoadImage: loaded",!0,e,i),i.onerror=I(en,n,"TestLoadImage: error",!1,e,i),i.onabort=I(en,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=I(en,n,"TestLoadImage: timeout",!1,e,i),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function tn(t,e){const n=new Kt,i=new AbortController,r=setTimeout((()=>{i.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:i.signal}).then((t=>{clearTimeout(r),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(r),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function nn(){this.g=new Lt}function rn(t,e,n){const i=n||"";try{Pe(t,(function(t,n){let r=t;u(t)&&(r=At(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function sn(t){this.l=t.Ub||null,this.j=t.eb||!1}function on(t,e){bt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function cn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,un(t)}function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ln(t){let e="";return N(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ln(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):De(t,e,n))}function dn(t){bt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=qe.prototype,t.add=function(t,e){We(this),this.i=null,t=Xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){We(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},t.na=function(){We(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},t.V=function(t){We(this);let e=[];if("string"===typeof t)Ge(this,t)&&(e=e.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return We(this),this.i=null,t=Xe(this,t),Ge(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")},x(sn,Rt),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(t){return function(){return t}}({}),x(on,bt),t=on.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,un(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):un(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,cn(this))},t.Qa=function(t){this.g&&(this.response=t,cn(this))},t.ga=function(){this.g&&cn(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),x(dn,bt);var fn=/^https?$/i,pn=["POST","PUT"];function mn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,gn(t),vn(t)}function gn(t){t.A||(t.A=!0,Tt(t,"complete"),Tt(t,"error"))}function _n(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=wn(t)||2!=t.Z()))if(t.u&&4==wn(t))St(t.Ea,0,t);else if(Tt(t,"readystatechange"),4==wn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.D).match(ke)[1]||null;!r&&a.self&&a.self.location&&(r=a.self.location.protocol.slice(0,-1)),i=!fn.test(r?r.toLowerCase():"")}n=i}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var s=2<wn(t)?t.g.statusText:""}catch(c){s=""}t.l=s+" ["+t.Z()+"]",gn(t)}}finally{vn(t)}}}function vn(t,e){if(t.g){yn(t);const i=t.g,r=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Tt(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function yn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function wn(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(S){return null}}function Tn(t){const e={};t=(t.g&&2<=wn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(A(t[i]))continue;var n=U(t[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}M(e,(function(t){return t.join(", ")}))}function En(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.Aa=0,this.i=[],this.j=new Kt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,t),this.cb=En("retryDelaySeedMs",1e4,t),this.Wa=En("forwardChannelMaxRetries",2,t),this.wa=En("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ye(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function In(t){if(Cn(t),3==t.G){var e=t.U++,n=Le(t.I);if(De(n,"SID",t.K),De(n,"RID",e),De(n,"TYPE","terminate"),On(t,n),e=new re(t,t.j,e),e.L=2,e.v=Fe(Le(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(i){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),de(e)}zn(t)}function xn(t){t.g&&(Mn(t),t.g.cancel(),t.g=null)}function Cn(t){xn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Fn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function Pn(t){if(!we(t.h)&&!t.s){t.s=!0;var e=t.Ga;Z||K(),q||(Z(),q=!0),W.add(e,t),t.B=0}}function kn(t,e){return!(be(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Wt(E(t.Ga,t,e),Un(t,t.B)),t.B++,!0))}function An(t,e){var n;n=e?e.l:t.U++;const i=Le(t.I);De(i,"SID",t.K),De(i,"RID",n),De(i,"AID",t.T),On(t,i),t.m&&t.o&&hn(i,t.m,t.o),n=new re(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Ln(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ee(t.h,n),ce(n,i,e)}function On(t,e){t.H&&N(t.H,(function(t,n){De(e,n,t)})),t.l&&Pe({},(function(t,n){De(e,n,t)}))}function Ln(t,e,n){n=Math.min(t.i.length,n);var i=t.l?E(t.l.Na,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{rn(a,t,"req"+n+"_")}catch(b){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Rn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;Z||K(),q||(Z(),q=!0),W.add(e,t),t.v=0}}function Nn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Wt(E(t.Fa,t),Un(t,t.v)),t.v++,!0)}function Mn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Dn(t){t.g=new re(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Le(t.qa);De(e,"RID","rpc"),De(e,"SID",t.K),De(e,"AID",t.T),De(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&De(e,"TO",t.ja),De(e,"TYPE","xmlhttp"),On(t,e),t.m&&t.o&&hn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Fe(Le(e)),n.m=null,n.P=!0,ue(n,t)}function Fn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function jn(t,e){var n=null;if(t.g==e){Fn(t),Mn(t),t.g=null;var i=2}else{if(!Te(t.h,e))return;n=e.D,Se(t.h,e),i=1}if(0!=t.G)if(e.o)if(1==i){n=e.m?e.m.length:0,e=Date.now()-e.F;var r=t.B;i=zt(),Tt(i,new qt(i,n)),Pn(t)}else Rn(t);else if(r=e.s,3==r||0==r&&0<e.X||!(1==i&&kn(t,e)||2==i&&Nn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}function Un(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Bn(t,e){if(t.j.info("Error code "+e),2==e){var n=E(t.fb,t),i=t.Xa;const e=!i;i=new Oe(i||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Re(i,"https"),Fe(i),e?Ye(i.toString(),n):tn(i.toString(),n)}else Zt(2);t.G=0,t.l&&t.l.sa(e),zn(t),Cn(t)}function zn(t){if(t.G=0,t.ka=[],t.l){const e=Ie(t.h);0==e.length&&0==t.i.length||(P(t.ka,e),P(t.ka,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ra()}}function Vn(t,e,n){var i=n instanceof Oe?Le(n):new Oe(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Ne(i,i.s);else{var r=a.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Oe(null);i&&Re(s,i),e&&(s.g=e),r&&Ne(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.ya,n&&e&&De(i,n,e),De(i,"VER",t.la),On(t,i),i}function Hn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new dn(new sn({eb:n})):new dn(t.pa),e.Ha(t.J),e}function $n(){}function Zn(){}function qn(t,e){bt.call(this),this.g=new Sn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!A(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gn(this)}function Wn(t){Ft.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Kn(){jt.call(this),this.status=1}function Gn(t){this.g=t}t=dn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Nt(this.o):Nt(te),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void mn(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yn(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){mn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),dn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_n(this):this.bb())},t.bb=function(){_n(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ot(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Sn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,i){Zt(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=Vn(this,null,this.W),Pn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new re(this,this.j,t);let s=this.o;if(this.S&&(s?(s=D(s),j(s,this.S)):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ln(this,r,e),n=Le(this.I),De(n,"RID",t),De(n,"CVER",22),this.D&&De(n,"X-HTTP-Session-Id",this.D),On(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ln(s)))+"&"+e:this.m&&hn(n,this.m,s)),Ee(this.h,r),this.Ua&&De(n,"TYPE","init"),this.P?(De(n,"$req",e),De(n,"SID","null"),r.T=!0,ce(r,n,null)):ce(r,n,e),this.G=2}}else 3==this.G&&(t?An(this,t):0==this.i.length||we(this.h)||An(this))},t.Fa=function(){if(this.u=null,Dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Wt(E(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Zt(10),xn(this),Dn(this))},t.Za=function(){null!=this.C&&(this.C=null,xn(this),Nn(this),Zt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Zt(2)):(this.j.info("Failed to ping google.com"),Zt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=$n.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Zn.prototype.g=function(t,e){return new qn(t,e)},x(qn,bt),qn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){In(this.g)},qn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=At(t),t=n);e.i.push(new ve(e.Ya++,t)),3==e.G&&Pn(e)},qn.prototype.N=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,qn.aa.N.call(this)},x(Wn,Ft),x(Kn,jt),x(Gn,$n),Gn.prototype.ua=function(){Tt(this.g,"a")},Gn.prototype.ta=function(t){Tt(this.g,new Wn(t))},Gn.prototype.sa=function(t){Tt(this.g,new Kn)},Gn.prototype.ra=function(){Tt(this.g,"b")},Zn.prototype.createWebChannel=Zn.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,v=w.createWebChannelTransport=function(){return new Zn},_=w.getStatEventTarget=function(){return zt()},g=w.Event=Ut,m=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,p=w.ErrorCode=ee,ne.COMPLETE="complete",f=w.EventType=ne,Mt.EventType=Dt,Dt.OPEN="a",Dt.CLOSE="b",Dt.ERROR="c",Dt.MESSAGE="d",bt.prototype.listen=bt.prototype.K,d=w.WebChannel=Mt,w.FetchXmlHttpFactory=sn,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,h=w.XhrIo=dn}).apply("undefined"!==typeof y?y:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="11.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new a.Vy("@firebase/firestore");function I(){return S.logLevel}function x(t,...e){if(S.logLevel<=a.$b.DEBUG){const n=e.map(k);S.debug(`Firestore (${E}): ${t}`,...n)}}function C(t,...e){if(S.logLevel<=a.$b.ERROR){const n=e.map(k);S.error(`Firestore (${E}): ${t}`,...n)}}function P(t,...e){if(S.logLevel<=a.$b.WARN){const n=e.map(k);S.warn(`Firestore (${E}): ${t}`,...n)}}function k(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t="Unexpected state"){const e=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: `+t;throw C(e),new Error(e)}function O(t,e){t||A()}function L(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(T.UNAUTHENTICATED)))}shutdown(){}}class j{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class U{constructor(t){this.t=t,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){O(void 0===this.o);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new M;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new M,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new M)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(O("string"==typeof e.accessToken),new D(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return O(null===t||"string"==typeof t),new T(t)}}class B{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class z{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new B(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class V{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){O(void 0===this.o);const n=t=>{null!=t.error&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,x("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(O("string"==typeof t.token),this.R=t.token,new V(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=$(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function q(t,e){return t<e?-1:t>e?1:0}function W(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new K(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(t){return new G(t)}static min(){return new G(new K(0,0))}static max(){return new G(new K(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e,n){void 0===e?e=0:e>t.length&&A(),void 0===n?n=t.length-e:n>t.length-e&&A(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Q?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Q{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const J=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends Q{construct(t,e,n){return new Y(t,e,n)}static isValidIdentifier(t){return J.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new N(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new N(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new N(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new N(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(e)}static emptyPath(){return new Y([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(X.fromString(t))}static fromName(t){return new tt(X.fromString(t).popFirst(5))}static empty(){return new tt(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===X.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new X(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}et.UNKNOWN_ID=-1;function nt(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(1e9===i?new K(n+1,0):new K(n,i));return new rt(r,tt.empty(),e)}function it(t){return new rt(t.readTime,t.key,-1)}class rt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new rt(G.min(),tt.empty(),-1)}static max(){return new rt(G.max(),tt.empty(),-1)}}function st(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=tt.comparator(t.documentKey,e.documentKey),0!==n?n:q(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ot="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class at{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==ot)throw t;x("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ut(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ut?e:ut.resolve(e)}catch(t){return ut.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ut.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ut.reject(e)}static resolve(t){return new ut(((e,n)=>{e(t)}))}static reject(t){return new ut(((e,n)=>{n(t)}))}static waitFor(t){return new ut(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=ut.resolve(!1);for(const n of t)e=e.next((t=>t?ut.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ut(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new ut(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ht(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function ft(t){return null==t}function pt(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_t(e)),e=gt(t.get(n),e);return _t(e)}function gt(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function _t(t){return t+""}dt.oe=-1;const vt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],yt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wt=yt,bt=[...wt,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Et(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function St(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){this.comparator=t,this.root=e||Ct.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xt(this.root,t,this.comparator,!1)}getReverseIterator(){return new xt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xt(this.root,t,this.comparator,!0)}}class xt{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ct{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Ct.RED,this.left=null!=i?i:Ct.EMPTY,this.right=null!=r?r:Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Ct(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ct.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw A();if(this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1,Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new kt(this.data.getIterator())}getIteratorFrom(t){return new kt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Pt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Pt(this.comparator);return e.data=t,e}}class kt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new At([])}unionWith(t){let e=new Pt(Y.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return W(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ot("Invalid base64 string: "+t):t}}(t);return new Lt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const Rt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(t){if(O(!!t),"string"==typeof t){let e=0;const n=Rt.exec(t);if(O(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Mt(t.seconds),nanos:Mt(t.nanos)}}function Mt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Dt(t){return"string"==typeof t?Lt.fromBase64String(t):Lt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function jt(t){const e=t.mapValue.fields.__previous_value__;return Ft(e)?jt(e):e}function Ut(t){const e=Nt(t.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,n,i,r,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class zt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new zt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof zt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ht(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ft(t)?4:se(t)?9007199254740991:ie(t)?10:11:A()}function $t(t,e){if(t===e)return!0;const n=Ht(t);if(n!==Ht(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ut(t).isEqual(Ut(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Nt(t.timestampValue),i=Nt(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Dt(t.bytesValue).isEqual(Dt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Mt(t.geoPointValue.latitude)===Mt(e.geoPointValue.latitude)&&Mt(t.geoPointValue.longitude)===Mt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Mt(t.integerValue)===Mt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Mt(t.doubleValue),i=Mt(e.doubleValue);return n===i?pt(n)===pt(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return W(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Tt(n)!==Tt(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!$t(n[r],i[r])))return!1;return!0}(t,e);default:return A()}}function Zt(t,e){return void 0!==(t.values||[]).find((t=>$t(t,e)))}function qt(t,e){if(t===e)return 0;const n=Ht(t),i=Ht(e);if(n!==i)return q(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Mt(t.integerValue||t.doubleValue),i=Mt(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Wt(t.timestampValue,e.timestampValue);case 4:return Wt(Ut(t),Ut(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Dt(t),i=Dt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=q(n[r],i[r]);if(0!==t)return t}return q(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=q(Mt(t.latitude),Mt(e.latitude));return 0!==n?n:q(Mt(t.longitude),Mt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kt(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,i,r,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(i=a.value)||void 0===i?void 0:i.arrayValue,l=q((null===(r=null==c?void 0:c.values)||void 0===r?void 0:r.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:Kt(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Vt.mapValue&&e===Vt.mapValue)return 0;if(t===Vt.mapValue)return 1;if(e===Vt.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=q(i[o],s[o]);if(0!==t)return t;const e=qt(n[i[o]],r[s[o]]);if(0!==e)return e}return q(i.length,s.length)}(t.mapValue,e.mapValue);default:throw A()}}function Wt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return q(t,e);const n=Nt(t),i=Nt(e),r=q(n.seconds,i.seconds);return 0!==r?r:q(n.nanos,i.nanos)}function Kt(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=qt(n[r],i[r]);if(t)return t}return q(n.length,i.length)}function Gt(t){return Qt(t)}function Qt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Nt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Dt(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return tt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Qt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Qt(t.fields[r])}`;return n+"}"}(t.mapValue):A()}function Xt(t){switch(Ht(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jt(t);return e?16+Xt(e):16;case 5:return 2*t.stringValue.length;case 6:return Dt(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Xt(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return Et(t.fields,((t,n)=>{e+=t.length+Xt(n)})),e}(t.mapValue);default:throw A()}}function Jt(t){return!!t&&"integerValue"in t}function Yt(t){return!!t&&"arrayValue"in t}function te(t){return!!t&&"nullValue"in t}function ee(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ne(t){return!!t&&"mapValue"in t}function ie(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function re(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Et(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=re(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=re(t.arrayValue.values[n]);return e}return Object.assign({},t)}function se(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe{constructor(t){this.value=t}static empty(){return new oe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ne(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(e)}setAll(t){let e=Y.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=re(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());ne(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ne(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Et(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new oe(re(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ae(t,0,G.min(),G.min(),G.min(),oe.empty(),0)}static newFoundDocument(t,e,n,i){return new ae(t,1,e,G.min(),n,i,0)}static newNoDocument(t,e){return new ae(t,2,e,G.min(),G.min(),oe.empty(),0)}static newUnknownDocument(t,e){return new ae(t,3,e,G.min(),G.min(),oe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ae&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e){this.position=t,this.inclusive=e}}function ue(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):qt(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function le(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e="asc"){this.field=t,this.dir=e}}function de(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{}class pe extends fe{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Te(t,e,n):"array-contains"===e?new xe(t,n):"in"===e?new Ce(t,n):"not-in"===e?new Pe(t,n):"array-contains-any"===e?new ke(t,n):new pe(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ee(t,n):new Se(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(qt(e,this.value)):null!==e&&Ht(this.value)===Ht(e)&&this.matchesComparison(qt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends fe{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new me(t,e)}matches(t){return ge(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ge(t){return"and"===t.op}function _e(t){return ve(t)&&ge(t)}function ve(t){for(const e of t.filters)if(e instanceof me)return!1;return!0}function ye(t){if(t instanceof pe)return t.field.canonicalString()+t.op.toString()+Gt(t.value);if(_e(t))return t.filters.map((t=>ye(t))).join(",");{const e=t.filters.map((t=>ye(t))).join(",");return`${t.op}(${e})`}}function we(t,e){return t instanceof pe?function(t,e){return e instanceof pe&&t.op===e.op&&t.field.isEqual(e.field)&&$t(t.value,e.value)}(t,e):t instanceof me?function(t,e){return e instanceof me&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&we(n,e.filters[i])),!0)}(t,e):void A()}function be(t){return t instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${Gt(t.value)}`}(t):t instanceof me?function(t){return t.op.toString()+" {"+t.getFilters().map(be).join(" ,")+"}"}(t):"Filter"}class Te extends pe{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ee extends pe{constructor(t,e){super(t,"in",e),this.keys=Ie("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Se extends pe{constructor(t,e){super(t,"not-in",e),this.keys=Ie("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ie(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>tt.fromName(t.referenceValue)))}class xe extends pe{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yt(e)&&Zt(e.arrayValue,this.value)}}class Ce extends pe{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Zt(this.value.arrayValue,e)}}class Pe extends pe{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Zt(this.value.arrayValue,e)}}class ke extends pe{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Zt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function Oe(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Ae(t,e,n,i,r,s,o)}function Le(t){const e=L(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ye(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ft(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Gt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Gt(t))).join(",")),e.ue=t}return e.ue}function Re(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!de(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!we(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!le(t.startAt,e.startAt)&&le(t.endAt,e.endAt)}function Ne(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function De(t,e,n,i,r,s,o,a){return new Me(t,e,n,i,r,s,o,a)}function Fe(t){return new Me(t)}function je(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ue(t){return null!==t.collectionGroup}function Be(t){const e=L(t);if(null===e.ce){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new Pt(Y.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new he(i,n))})),t.has(Y.keyField().canonicalString())||e.ce.push(new he(Y.keyField(),n))}return e.ce}function ze(t){const e=L(t);return e.le||(e.le=Ve(e,Be(t))),e.le}function Ve(t,e){if("F"===t.limitType)return Oe(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new he(t.field,e)}));const n=t.endAt?new ce(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ce(t.startAt.position,t.startAt.inclusive):null;return Oe(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function He(t,e,n){return new Me(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $e(t,e){return Re(ze(t),ze(e))&&t.limitType===e.limitType}function Ze(t){return`${Le(ze(t))}|lt:${t.limitType}`}function qe(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>be(t))).join(", ")}]`),ft(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Gt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Gt(t))).join(",")),`Target(${e})`}(ze(t))}; limitType=${t.limitType})`}function We(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Be(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=ue(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Be(t),e))&&!(t.endAt&&!function(t,e,n){const i=ue(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Be(t),e))}(t,e)}function Ke(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ge(t){return(e,n)=>{let i=!1;for(const r of Be(t)){const t=Qe(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Qe(t,e,n){const i=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?qt(i,r):A()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return A()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Et(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return St(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new It(tt.comparator);function Ye(){return Je}const tn=new It(tt.comparator);function en(...t){let e=tn;for(const n of t)e=e.insert(n.key,n);return e}function nn(t){let e=tn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function rn(){return on()}function sn(){return on()}function on(){return new Xe((t=>t.toString()),((t,e)=>t.isEqual(e)))}new It(tt.comparator);const an=new Pt(tt.comparator);function cn(...t){let e=an;for(const n of t)e=e.add(n);return e}const un=new Pt(q);function ln(){return un}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pt(e)?"-0":e}}function dn(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this._=void 0}}function pn(t,e,n){return t instanceof _n?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ft(e)&&(e=jt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof vn?yn(t,e):t instanceof wn?bn(t,e):function(t,e){const n=gn(t,e),i=En(n)+En(t.Pe);return Jt(n)&&Jt(t.Pe)?dn(i):hn(t.serializer,i)}(t,e)}function mn(t,e,n){return t instanceof vn?yn(t,e):t instanceof wn?bn(t,e):n}function gn(t,e){return t instanceof Tn?function(t){return Jt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class _n extends fn{}class vn extends fn{constructor(t){super(),this.elements=t}}function yn(t,e){const n=Sn(e);for(const i of t.elements)n.some((t=>$t(t,i)))||n.push(i);return{arrayValue:{values:n}}}class wn extends fn{constructor(t){super(),this.elements=t}}function bn(t,e){let n=Sn(e);for(const i of t.elements)n=n.filter((t=>!$t(t,i)));return{arrayValue:{values:n}}}class Tn extends fn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function En(t){return Mt(t.integerValue||t.doubleValue)}function Sn(t){return Yt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof vn&&e instanceof vn||t instanceof wn&&e instanceof wn?W(t.elements,e.elements,$t):t instanceof Tn&&e instanceof Tn?$t(t.Pe,e.Pe):t instanceof _n&&e instanceof _n}(t.transform,e.transform)}class xn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xn}static exists(t){return new xn(void 0,t)}static updateTime(t){return new xn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Pn{}function kn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new jn(t.key,xn.none()):new Rn(t.key,t.data,xn.none());{const n=t.data,i=oe.empty();let r=new Pt(Y.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Nn(t.key,i,new At(r.toArray()),xn.none())}}function An(t,e,n){t instanceof Rn?function(t,e,n){const i=t.value.clone(),r=Dn(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Nn?function(t,e,n){if(!Cn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Dn(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Mn(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function On(t,e,n,i){return t instanceof Rn?function(t,e,n,i){if(!Cn(t.precondition,e))return n;const r=t.value.clone(),s=Fn(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Nn?function(t,e,n,i){if(!Cn(t.precondition,e))return n;const r=Fn(t.fieldTransforms,i,e),s=e.data;return s.setAll(Mn(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Cn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ln(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&W(t,e,((t,e)=>In(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rn extends Pn{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nn extends Pn{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Dn(t,e,n){const i=new Map;O(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,mn(o,a,n[r]))}return i}function Fn(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,pn(t,s,e))}return i}class jn extends Pn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&An(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=On(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=On(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sn();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=kn(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(G.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),cn())}isEqual(t){return this.batchId===t.batchId&&W(this.mutations,t.mutations,((t,e)=>Ln(t,e)))&&W(this.baseMutations,t.baseMutations,((t,e)=>Ln(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn,Hn;function $n(t){if(void 0===t)return C("GRPC error has no .code"),R.UNKNOWN;switch(t){case Vn.OK:return R.OK;case Vn.CANCELLED:return R.CANCELLED;case Vn.UNKNOWN:return R.UNKNOWN;case Vn.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Vn.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Vn.INTERNAL:return R.INTERNAL;case Vn.UNAVAILABLE:return R.UNAVAILABLE;case Vn.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Vn.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Vn.NOT_FOUND:return R.NOT_FOUND;case Vn.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Vn.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Vn.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Vn.ABORTED:return R.ABORTED;case Vn.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Vn.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Vn.DATA_LOSS:return R.DATA_LOSS;default:return A()}}(Hn=Vn||(Vn={}))[Hn.OK=0]="OK",Hn[Hn.CANCELLED=1]="CANCELLED",Hn[Hn.UNKNOWN=2]="UNKNOWN",Hn[Hn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Hn[Hn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Hn[Hn.NOT_FOUND=5]="NOT_FOUND",Hn[Hn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Hn[Hn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Hn[Hn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Hn[Hn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Hn[Hn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Hn[Hn.ABORTED=10]="ABORTED",Hn[Hn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Hn[Hn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Hn[Hn.INTERNAL=13]="INTERNAL",Hn[Hn.UNAVAILABLE=14]="UNAVAILABLE",Hn[Hn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new i([4294967295,4294967295],0);function Kn(t){const e=qn().encode(t),n=new r;return n.update(e),new Uint8Array(n.digest())}function Gn(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new i([n,r],0),new i([s,o],0)]}class Qn{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Xn(`Invalid padding: ${e}`);if(n<0)throw new Xn(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Xn(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Xn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=i.fromNumber(this.Te)}Ee(t,e,n){let r=t.add(e.multiply(i.fromNumber(n)));return 1===r.compare(Wn)&&(r=new i([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Kn(t),[n,i]=Gn(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,i,r);if(!this.de(t))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),s=new Qn(r,i,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=Kn(t),[n,i]=Gn(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,i,r);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Yn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Jn(G.min(),i,new It(q),Ye(),cn())}}class Yn{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Yn(n,e,cn(),cn(),cn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class ei{constructor(t,e){this.targetId=t,this.me=e}}class ni{constructor(t,e,n=Lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ii{constructor(){this.fe=0,this.ge=oi(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=cn(),e=cn(),n=cn();return this.ge.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:A()}})),new Yn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=oi()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,O(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ri{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ye(),this.qe=si(),this.Qe=si(),this.Ke=new It(q)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:A()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.me.count,i=this.Ye(e);if(i){const r=i.target;if(Ne(r))if(0===n){const t=new tt(r.path);this.We(e,t,ae.newNoDocument(t,G.min()))}else O(1===n);else{const i=this.Ze(e);if(i!==n){const n=this.Xe(t),r=n?this.et(n,t,i):1;if(0!==r){this.He(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==Zn||Zn.tt(function(t,e,n,i,r){var s,o,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==i?void 0:i.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,t.me,this.Le.nt(),n,r))}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=e;let s,o;try{s=Dt(n).toUint8Array()}catch(t){if(t instanceof Ot)return P("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Qn(s,i,r)}catch(t){return P(t instanceof Xn?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const r=this.Le.nt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),i++)})),i}it(t){const e=new Map;this.Be.forEach(((n,i)=>{const r=this.Ye(i);if(r){if(n.current&&Ne(r.target)){const e=new tt(r.target.path);this.st(e).has(i)||this.ot(i,e)||this.We(i,e,ae.newNoDocument(e,t))}n.be&&(e.set(i,n.ve()),n.Ce())}}));let n=cn();this.Qe.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const i=new Jn(t,e,this.Ke,this.ke,n);return this.ke=Ye(),this.qe=si(),this.Qe=si(),this.Ke=new It(q),i}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new ii,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new Pt(q),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Pt(q),this.qe=this.qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||x("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new ii),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function si(){return new It(tt.comparator)}function oi(){return new It(tt.comparator)}const ai=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ci=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),ui=(()=>{const t={and:"AND",or:"OR"};return t})();class li{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hi(t,e){return t.useProto3Json||ft(e)?e:{value:e}}function di(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pi(t){return O(!!t),G.fromTimestamp(function(t){const e=Nt(t);return new K(e.seconds,e.nanos)}(t))}function mi(t,e){return gi(t,e).canonicalString()}function gi(t,e){const n=function(t){return new X(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function _i(t){const e=X.fromString(t);return O(Mi(e)),e}function vi(t,e){const n=_i(e);if(n.get(1)!==t.databaseId.projectId)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(Ti(n))}function yi(t,e){return mi(t.databaseId,e)}function wi(t){const e=_i(t);return 4===e.length?X.emptyPath():Ti(e)}function bi(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ti(t){return O(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ei(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(O(void 0===e||"string"==typeof e),Lt.fromBase64String(e||"")):(O(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Lt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?R.UNKNOWN:$n(t.code);return new N(e,t.message||"")}(o);n=new ni(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=vi(t,i.document.name),s=pi(i.document.updateTime),o=i.document.createTime?pi(i.document.createTime):G.min(),a=new oe({mapValue:{fields:i.document.fields}}),c=ae.newFoundDocument(r,s,o,a),u=i.targetIds||[],l=i.removedTargetIds||[];n=new ti(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=vi(t,i.document),s=i.readTime?pi(i.readTime):G.min(),o=ae.newNoDocument(r,s),a=i.removedTargetIds||[];n=new ti([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=vi(t,i.document),s=i.removedTargetIds||[];n=new ti([],s,r,null)}else{if(!("filter"in e))return A();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:r}=t,s=new zn(i,r),o=t.targetId;n=new ei(o,s)}}return n}function Si(t,e){return{documents:[yi(t,e.path)]}}function Ii(t,e){const n={structuredQuery:{}},i=e.path;let r;null!==e.collectionGroup?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=yi(t,r);const s=function(t){if(0!==t.length)return Ni(me.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Li(t.field),direction:ki(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ct:n,parent:r}}function xi(t){let e=wi(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){O(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Pi(t);return e instanceof me&&_e(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new he(Ri(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ft(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ce(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ce(n,e)}(n.endAt)),De(e,r,o,s,a,"F",c,u)}function Ci(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Pi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ri(t.unaryFilter.field);return pe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ri(t.unaryFilter.field);return pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ri(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ri(t.unaryFilter.field);return pe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(t):void 0!==t.fieldFilter?function(t){return pe.create(Ri(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return me.create(t.compositeFilter.filters.map((t=>Pi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(t):A()}function ki(t){return ai[t]}function Ai(t){return ci[t]}function Oi(t){return ui[t]}function Li(t){return{fieldPath:t.canonicalString()}}function Ri(t){return Y.fromServerFormat(t.fieldPath)}function Ni(t){return t instanceof pe?function(t){if("=="===t.op){if(ee(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NAN"}};if(te(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ee(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NOT_NAN"}};if(te(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Li(t.field),op:Ai(t.op),value:t.value}}}(t):t instanceof me?function(t){const e=t.getFilters().map((t=>Ni(t)));return 1===e.length?e[0]:{compositeFilter:{op:Oi(t.op),filters:e}}}(t):A()}function Mi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,n,i,r=G.min(),s=G.min(),o=Lt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Di(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.ht=t}}function ji(t){const e=xi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?He(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(){}Et(t,e){this.dt(t,e),e.At()}dt(t,e){if("nullValue"in t)this.Rt(e,5);else if("booleanValue"in t)this.Rt(e,10),e.Vt(t.booleanValue?1:0);else if("integerValue"in t)this.Rt(e,15),e.Vt(Mt(t.integerValue));else if("doubleValue"in t){const n=Mt(t.doubleValue);isNaN(n)?this.Rt(e,13):(this.Rt(e,15),pt(n)?e.Vt(0):e.Vt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Rt(e,20),"string"==typeof n&&(n=Nt(n)),e.ft(`${n.seconds||""}`),e.Vt(n.nanos||0)}else if("stringValue"in t)this.gt(t.stringValue,e),this.yt(e);else if("bytesValue"in t)this.Rt(e,30),e.wt(Dt(t.bytesValue)),this.yt(e);else if("referenceValue"in t)this.St(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Rt(e,45),e.Vt(n.latitude||0),e.Vt(n.longitude||0)}else"mapValue"in t?se(t)?this.Rt(e,Number.MAX_SAFE_INTEGER):ie(t)?this.bt(t.mapValue,e):(this.Dt(t.mapValue,e),this.yt(e)):"arrayValue"in t?(this.vt(t.arrayValue,e),this.yt(e)):A()}gt(t,e){this.Rt(e,25),this.Ct(t,e)}Ct(t,e){e.ft(t)}Dt(t,e){const n=t.fields||{};this.Rt(e,55);for(const i of Object.keys(n))this.gt(i,e),this.dt(n[i],e)}bt(t,e){var n,i;const r=t.fields||{};this.Rt(e,53);const s="value",o=(null===(i=null===(n=r[s].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.Rt(e,15),e.Vt(Mt(o)),this.gt(s,e),this.dt(r[s],e)}vt(t,e){const n=t.values||[];this.Rt(e,50);for(const i of n)this.dt(i,e)}St(t,e){this.Rt(e,37),tt.fromName(t).path.forEach((t=>{this.Rt(e,60),this.Ct(t,e)}))}Rt(t,e){t.Vt(e)}yt(t){t.Vt(2)}}Ui.Ft=new Ui;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(){this.ln=new zi}addToCollectionParentIndex(t,e){return this.ln.add(e),ut.resolve()}getCollectionParents(t,e){return ut.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return ut.resolve()}deleteFieldIndex(t,e){return ut.resolve()}deleteAllFieldIndexes(t){return ut.resolve()}createTargetIndexes(t,e){return ut.resolve()}getDocumentsMatchingTarget(t,e){return ut.resolve(null)}getIndexType(t,e){return ut.resolve(0)}getFieldIndexes(t,e){return ut.resolve([])}getNextCollectionGroupToUpdate(t){return ut.resolve(null)}getMinOffset(t,e){return ut.resolve(rt.min())}getMinOffsetFromCollectionGroup(t,e){return ut.resolve(rt.min())}updateCollectionGroup(t,e,n){return ut.resolve()}updateIndexEntries(t,e){return ut.resolve()}}class zi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Pt(X.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Pt(X.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Hi{static withCacheSize(t){return new Hi(t,Hi.DEFAULT_COLLECTION_PERCENTILE,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hi.DEFAULT_COLLECTION_PERCENTILE=10,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hi.DEFAULT=new Hi(41943040,Hi.DEFAULT_COLLECTION_PERCENTILE,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hi.DISABLED=new Hi(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new $i(0)}static Qn(){return new $i(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zi([t,e],[n,i]){const r=q(t,n);return 0===r?q(e,i):r}class qi{constructor(t){this.Gn=t,this.buffer=new Pt(Zi),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Zi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Wi{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(t){x("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ht(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ct(t)}await this.Yn(3e5)}))}}class Ki{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return ut.resolve(dt.oe);const n=new qi(e);return this.Zn.forEachTarget(t,(t=>n.Hn(t.sequenceNumber))).next((()=>this.Zn.er(t,(t=>n.Hn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector","Garbage collection skipped; disabled"),ut.resolve(Vi)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vi):this.tr(t,e)))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,i,r,s,o,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),i=this.params.maximumSequenceNumbersToCollect):i=e,s=Date.now(),this.nthSequenceNumber(t,i)))).next((i=>(n=i,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(r=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(u=Date.now(),I()<=a.$b.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${i} in `+(o-s)+"ms\n"+`\tRemoved ${r} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),ut.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:t}))))}}function Gi(t,e){return new Ki(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(){this.changes=new Xe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ut.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&On(n.mutation,t,At.empty(),K.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,cn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=cn()){const i=rn();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=en();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=rn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,cn())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Ye();const s=on(),o=function(){return on()}();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Nn)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),On(o.mutation,e,o.mutation.getFieldMask(),K.now())):s.set(e.key,At.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Xi(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=on();let i=new It(((t,e)=>t-e)),r=cn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||At.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||cn()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=sn();c.forEach((t=>{if(!r.has(t)){const i=kn(e.get(t),n.get(t));null!==i&&u.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ut.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ue(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):ut.resolve(rn());let o=-1,a=r;return s.next((e=>ut.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?ut.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,cn()))).next((t=>({batchId:o,changes:nn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next((t=>{let e=en();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=en();return this.indexManager.getCollectionParents(t,r).next((o=>ut.forEach(o,(o=>{const a=function(t,e){return new Me(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,ae.newInvalidDocument(i)))}));let n=en();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&On(s.mutation,i,At.empty(),K.now()),We(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return ut.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:pi(t.createTime)}}(e)),ut.resolve()}getNamedQuery(t,e){return ut.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(t){return{name:t.name,query:ji(t.bundledQuery),readTime:pi(t.readTime)}}(e)),ut.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.overlays=new It(tt.comparator),this.Er=new Map}getOverlay(t,e){return ut.resolve(this.overlays.get(e))}getOverlays(t,e){const n=rn();return ut.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.Tt(t,e,i)})),ut.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Er.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Er.delete(n)),ut.resolve()}getOverlaysForCollection(t,e,n){const i=rn(),r=e.length+1,s=new tt(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ut.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new It(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=rn(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=rn(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return ut.resolve(o)}Tt(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Bn(e,n));let r=this.Er.get(e);void 0===r&&(r=cn(),this.Er.set(e,r)),this.Er.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(t){return ut.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,ut.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.dr=new Pt(ir.Ar),this.Rr=new Pt(ir.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new ir(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gr(new ir(t,e))}pr(t,e){t.forEach((t=>this.removeReference(t,e)))}yr(t){const e=new tt(new X([])),n=new ir(e,t),i=new ir(e,t+1),r=[];return this.Rr.forEachInRange([n,i],(t=>{this.gr(t),r.push(t.key)})),r}wr(){this.dr.forEach((t=>this.gr(t)))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new tt(new X([])),n=new ir(e,t),i=new ir(e,t+1);let r=cn();return this.Rr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new ir(t,0),n=this.dr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ir{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return tt.comparator(t.key,e.key)||q(t.br,e.br)}static Vr(t,e){return q(t.br,e.br)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new Pt(ir.Ar)}checkEmpty(t){return ut.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Un(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.vr=this.vr.add(new ir(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ut.resolve(s)}lookupMutationBatch(t,e){return ut.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Fr(n),r=i<0?0:i;return ut.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ut.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(t){return ut.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ir(e,0),i=new ir(e,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([n,i],(t=>{const e=this.Cr(t.br);r.push(e)})),ut.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pt(q);return e.forEach((t=>{const e=new ir(t,0),i=new ir(t,Number.POSITIVE_INFINITY);this.vr.forEachInRange([e,i],(t=>{n=n.add(t.br)}))})),ut.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;tt.isDocumentKey(r)||(r=r.child(""));const s=new ir(new tt(r),0);let o=new Pt(q);return this.vr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.br)),!0)}),s),ut.resolve(this.Mr(o))}Mr(t){const e=[];return t.forEach((t=>{const n=this.Cr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){O(0===this.Or(e.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return ut.forEach(e.mutations,(i=>{const r=new ir(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.vr=n}))}Ln(t){}containsKey(t,e){const n=new ir(e,0),i=this.vr.firstAfterOrEqual(n);return ut.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ut.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this.Nr=t,this.docs=function(){return new It(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ut.resolve(n?n.document.mutableCopy():ae.newInvalidDocument(e))}getEntries(t,e){let n=Ye();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ae.newInvalidDocument(t))})),ut.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Ye();const s=e.path,o=new tt(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||st(it(o),n)<=0||(i.has(o.key)||We(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ut.resolve(r)}getAllFromCollectionGroup(t,e,n,i){A()}Lr(t,e){return ut.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new or(this)}getSize(t){return ut.resolve(this.size)}}class or extends Qi{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(n)})),ut.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.persistence=t,this.Br=new Xe((t=>Le(t)),Re),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.kr=0,this.qr=new nr,this.targetCount=0,this.Qr=$i.qn()}forEachTarget(t,e){return this.Br.forEach(((t,n)=>e(n))),ut.resolve()}getLastRemoteSnapshotVersion(t){return ut.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ut.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),ut.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),ut.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new $i(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,ut.resolve()}updateTargetData(t,e){return this.Un(e),ut.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,ut.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Br.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Br.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ut.waitFor(r).next((()=>i))}getTargetCount(t){return ut.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return ut.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),ut.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),ut.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),ut.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return ut.resolve(n)}containsKey(t,e){return ut.resolve(this.qr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e){this.Kr={},this.overlays={},this.$r=new dt(0),this.Ur=!1,this.Ur=!0,this.Wr=new er,this.referenceDelegate=t(this),this.Gr=new ar(this),this.indexManager=new Bi,this.remoteDocumentCache=function(t){return new sr(t)}((t=>this.referenceDelegate.zr(t))),this.serializer=new Fi(e),this.jr=new Yi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new rr(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){x("MemoryPersistence","Starting transaction:",t);const i=new ur(this.$r.next());return this.referenceDelegate.Hr(),n(i).next((t=>this.referenceDelegate.Jr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Yr(t,e){return ut.or(Object.values(this.Kr).map((n=>()=>n.containsKey(t,e))))}}class ur extends at{constructor(t){super(),this.currentSequenceNumber=t}}class lr{constructor(t){this.persistence=t,this.Zr=new nr,this.Xr=null}static ei(t){return new lr(t)}get ti(){if(this.Xr)return this.Xr;throw A()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),ut.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),ut.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),ut.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach((t=>this.ti.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ti.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ut.forEach(this.ti,(n=>{const i=tt.fromPath(n);return this.ni(t,i).next((t=>{t||e.removeEntry(i,G.min())}))})).next((()=>(this.Xr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ni(t,e).next((t=>{t?this.ti.delete(e.toString()):this.ti.add(e.toString())}))}zr(t){return 0}ni(t,e){return ut.or([()=>ut.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class hr{constructor(t,e){this.persistence=t,this.ri=new Xe((t=>mt(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=Gi(this,e)}static ei(t,e){return new hr(t,e)}Hr(){}Jr(t){return ut.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}nr(t){let e=0;return this.er(t,(t=>{e++})).next((()=>e))}er(t,e){return ut.forEach(this.ri,((n,i)=>this.ir(t,n,i).next((t=>t?ut.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.Lr(t,(i=>this.ir(t,i,e).next((t=>{t||(n++,r.removeEntry(i,G.min()))})))).next((()=>r.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),ut.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),ut.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),ut.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),ut.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Xt(t.data.value)),e}ir(t,e,n){return ut.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.ri.get(e);return ut.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=i}static zi(t,e){let n=cn(),i=cn();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new dr(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return(0,c.nr)()?8:lt((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.Xi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.es(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new fr;return this.ts(t,e,n).next((i=>{if(r.result=i,this.Hi)return this.ns(t,e,n,i.size)}))})).next((()=>r.result))}ns(t,e,n,i){return n.documentReadCount<this.Ji?(I()<=a.$b.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),ut.resolve()):(I()<=a.$b.DEBUG&&x("QueryEngine","Query:",qe(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(I()<=a.$b.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ze(e))):ut.resolve())}Xi(t,e){if(je(e))return ut.resolve(null);let n=ze(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=He(e,null,"F"),n=ze(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=cn(...i);return this.Zi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.rs(e,i);return this.ss(e,s,r,n.readTime)?this.Xi(t,He(e,null,"F")):this.os(t,s,e,n)}))))})))))}es(t,e,n,i){return je(e)||i.isEqual(G.min())?ut.resolve(null):this.Zi.getDocuments(t,n).next((r=>{const s=this.rs(e,r);return this.ss(e,s,n,i)?ut.resolve(null):(I()<=a.$b.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qe(e)),this.os(t,s,e,nt(i,-1)).next((t=>t)))}))}rs(t,e){let n=new Pt(Ge(t));return e.forEach(((e,i)=>{We(t,i)&&(n=n.add(i))})),n}ss(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ts(t,e,n){return I()<=a.$b.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",qe(e)),this.Zi.getDocumentsMatchingQuery(t,e,rt.min(),n)}os(t,e,n,i){return this.Zi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,n,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new It(q),this.cs=new Xe((t=>Le(t)),Re),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ji(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.us)))}}function gr(t,e,n,i){return new mr(t,e,n,i)}async function _r(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Ps(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=cn();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ts:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function vr(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Gr.getLastRemoteSnapshotVersion(t)))}function yr(t,e){const n=L(t),i=e.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Gr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Gr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(Lt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Gr.updateTargetData(t,u))}));let a=Ye(),c=cn();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(wr(t,s,e.documentUpdates).next((t=>{a=t.Is,c=t.Es}))),!i.isEqual(G.min())){const e=n.Gr.getLastRemoteSnapshotVersion(t).next((e=>n.Gr.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return ut.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.us=r,t)))}function wr(t,e,n){let i=cn(),r=cn();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Ye();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(G.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):x("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Is:i,Es:r}}))}function br(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Gr.getTargetData(t,e).next((r=>r?(i=r,ut.resolve(i)):n.Gr.allocateTargetId(t).next((r=>(i=new Di(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.Gr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.us.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(t.targetId,t),n.cs.set(e,t.targetId)),t}))}async function Tr(t,e,n){const i=L(t),r=i.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!ht(t))throw t;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.us=i.us.remove(e),i.cs.delete(r.target)}function Er(t,e,n){const i=L(t);let r=G.min(),s=cn();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const i=L(t),r=i.cs.get(n);return void 0!==r?ut.resolve(i.us.get(r)):i.Gr.getTargetData(e,n)}(i,t,ze(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i._s.getDocumentsMatchingQuery(t,e,n?r:G.min(),n?s:cn()))).next((t=>(Sr(i,Ke(e),t),{documents:t,ds:s})))))}function Sr(t,e,n){let i=t.ls.get(e)||G.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.ls.set(e,i)}class Ir{constructor(){this.activeTargetIds=ln()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xr{constructor(){this._o=new Ir,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Ir,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{uo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr=null;function Ar(){return null===kr?kr=function(){return 268435456+Math.round(2147483648*Math.random())}():kr++,"0x"+kr.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Or={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="WebChannelConnection";class Nr extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=e+"://"+t.host,this.Mo=`projects/${n}/databases/${i}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Oo(t,e,n,i,r){const s=Ar(),o=this.No(t,e.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,i,r),this.Bo(t,o,a,n).then((e=>(x("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw P("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}ko(t,e,n,i,r,s){return this.Oo(t,e,n,i,r)}Lo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}No(t,e){const n=Or[t];return`${this.Fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,i){const r=Ar();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();x(Rr,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case p.TIMEOUT:x(Rr,`RPC '${t}' ${r} timed out`),o(new N(R.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(x(Rr,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(e)>=0?e:R.UNKNOWN}(e.status);o(new N(t,e.message))}else o(new N(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(R.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{x(Rr,`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);x(Rr,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}qo(t,e,n){const i=Ar(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=v(),o=_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=r.join("");x(Rr,`Creating RPC '${t}' stream ${i}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,f=!1;const p=new Lr({Eo:e=>{f?x(Rr,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(x(Rr,`Opening RPC '${t}' stream ${i} transport.`),l.open(),h=!0),x(Rr,`RPC '${t}' stream ${i} sending:`,e),l.send(e))},Ao:()=>l.close()}),y=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return y(l,d.EventType.OPEN,(()=>{f||(x(Rr,`RPC '${t}' stream ${i} transport opened.`),p.So())})),y(l,d.EventType.CLOSE,(()=>{f||(f=!0,x(Rr,`RPC '${t}' stream ${i} transport closed`),p.Do())})),y(l,d.EventType.ERROR,(e=>{f||(f=!0,P(Rr,`RPC '${t}' stream ${i} transport errored:`,e),p.Do(new N(R.UNAVAILABLE,"The operation could not be completed")))})),y(l,d.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];O(!!r);const s=r,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){x(Rr,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Vn[t];if(void 0!==e)return $n(e)}(e),r=o.message;void 0===n&&(n=R.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,p.Do(new N(n,r)),l.close()}else x(Rr,`RPC '${t}' stream ${i} received:`,r),p.vo(r)}})),y(o,g.STAT_EVENT,(e=>{e.stat===m.PROXY?x(Rr,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===m.NOPROXY&&x(Rr,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{p.bo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){return new li(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,n=1e3,i=1.5,r=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=i,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-n);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,(()=>(this.Go=Date.now(),t()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e,n,i,r,s,o,a){this.li=t,this.Yo=n,this.Zo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Fr(t,e)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==t?this.r_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(C(e.toString()),C("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===R.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Xo===e&&this.I_(t,n)}),(e=>{t((()=>{const t=new N(R.UNKNOWN,"Fetching auth token failed: "+e.message);return this.E_(t)}))}))}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro((()=>{n((()=>this.listener.Ro()))})),this.stream.mo((()=>{n((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((t=>{n((()=>this.E_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.n_?this.A_(t):this.onNext(t)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}E_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget((()=>this.Xo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ur extends jr{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Ei(this.serializer,t),n=function(t){if(!("targetChange"in t))return G.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?G.min():e.readTime?pi(e.readTime):G.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=bi(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=Ne(i)?{documents:Si(t,i)}:{query:Ii(t,i).ct},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=fi(t,e.resumeToken);const i=hi(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(G.min())>0){n.readTime=di(t,e.snapshotVersion.toTimestamp());const i=hi(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=Ci(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=bi(this.serializer),e.removeTarget=t,this.c_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Oo(t,gi(e,n),i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N(R.UNKNOWN,t.toString())}))}ko(t,e,n,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.ko(t,gi(e,n),i,s,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N(R.UNKNOWN,t.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class zr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(t){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,"Online"===t&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(C(e),this.C_=!1):x("OnlineStateTracker",e)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo((t=>{n.enqueueAndForget((async()=>{Xr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=L(t);e.k_.add(4),await $r(e),e.K_.set("Unknown"),e.k_.delete(4),await Hr(e)}(this))}))})),this.K_=new zr(n,i)}}async function Hr(t){if(Xr(t))for(const e of t.q_)await e(!0)}async function $r(t){for(const e of t.q_)await e(!1)}function Zr(t,e){const n=L(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Qr(n)?Gr(n):os(n).s_()&&Wr(n,e))}function qr(t,e){const n=L(t),i=os(n);n.B_.delete(e),i.s_()&&Kr(n,e),0===n.B_.size&&(i.s_()?i.a_():Xr(n)&&n.K_.set("Unknown"))}function Wr(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}os(t).V_(e)}function Kr(t,e){t.U_.xe(e),os(t).m_(e)}function Gr(t){t.U_=new ri({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),os(t).start(),t.K_.F_()}function Qr(t){return Xr(t)&&!os(t).i_()&&t.B_.size>0}function Xr(t){return 0===L(t).k_.size}function Jr(t){t.U_=void 0}async function Yr(t){t.K_.set("Online")}async function ts(t){t.B_.forEach(((e,n)=>{Wr(t,e)}))}async function es(t,e){Jr(t),Qr(t)?(t.K_.O_(e),Gr(t)):t.K_.set("Unknown")}async function ns(t,e,n){if(t.K_.set("Online"),e instanceof ni&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.B_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.B_.delete(i),t.U_.removeTarget(i))}(t,e)}catch(n){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await is(t,n)}else if(e instanceof ti?t.U_.$e(e):e instanceof ei?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(G.min()))try{const e=await vr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.U_.it(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.B_.get(i);r&&t.B_.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.B_.get(e);if(!i)return;t.B_.set(e,i.withResumeToken(Lt.EMPTY_BYTE_STRING,i.snapshotVersion)),Kr(t,e);const r=new Di(i.target,e,n,i.sequenceNumber);Wr(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){x("RemoteStore","Failed to raise snapshot:",e),await is(t,e)}}async function is(t,e,n){if(!ht(e))throw e;t.k_.add(1),await $r(t),t.K_.set("Offline"),n||(n=()=>vr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Hr(t)}))}async function rs(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const i=Xr(n);n.k_.add(3),await $r(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Hr(n)}async function ss(t,e){const n=L(t);e?(n.k_.delete(2),await Hr(n)):e||(n.k_.add(2),await $r(n),n.K_.set("Unknown"))}function os(t){return t.W_||(t.W_=function(t,e,n){const i=L(t);return i.b_(),new Ur(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Ro:Yr.bind(null,t),mo:ts.bind(null,t),po:es.bind(null,t),R_:ns.bind(null,t)}),t.q_.push((async e=>{e?(t.W_.__(),Qr(t)?Gr(t):t.K_.set("Unknown")):(await t.W_.stop(),Jr(t))}))),t.W_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new as(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new N(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cs(t,e){if(C("AsyncQueue",`${e}: ${t}`),ht(t))return new N(R.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static emptySet(t){return new us(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=en(),this.sortedSet=new It(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof us))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new us;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.z_=new It(tt.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?0!==t.type&&3===n.type?this.z_=this.z_.insert(e,t):3===t.type&&1!==n.type?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.z_=this.z_.remove(e):1===t.type&&2===n.type?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):A():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class hs{constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new hs(t,e,us.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$e(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some((t=>t.Z_()))}}class fs{constructor(){this.queries=ps(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(t,e){const n=L(t),i=n.queries;n.queries=ps(),i.forEach(((t,n)=>{for(const i of n.J_)i.onError(e)}))}(this,new N(R.ABORTED,"Firestore shutting down"))}}function ps(){return new Xe((t=>Ze(t)),$e)}async function ms(t,e){const n=L(t);let i=3;const r=e.query;let s=n.queries.get(r);s?!s.Y_()&&e.Z_()&&(i=2):(s=new ds,i=e.Z_()?0:1);try{switch(i){case 0:s.H_=await n.onListen(r,!0);break;case 1:s.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(t){const n=cs(t,`Initialization of query '${qe(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&ys(n)}async function gs(t,e){const n=L(t),i=e.query;let r=3;const s=n.queries.get(i);if(s){const t=s.J_.indexOf(e);t>=0&&(s.J_.splice(t,1),0===s.J_.length?r=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function _s(t,e){const n=L(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.J_)t.ta(r)&&(i=!0);e.H_=r}}i&&ys(n)}function vs(t,e,n){const i=L(t),r=i.queries.get(e);if(r)for(const s of r.J_)s.onError(n);i.queries.delete(e)}function ys(t){t.X_.forEach((t=>{t.next()}))}var ws,bs;(bs=ws||(ws={})).na="default",bs.Cache="cache";class Ts{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new hs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache)return!0;if(!this.Z_())return!0;const n="Offline"!==e;return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}aa(t){t=hs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==ws.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(t){this.key=t}}class Ss{constructor(t){this.key=t}}class Is{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=cn(),this.mutatedKeys=cn(),this.Va=Ge(t),this.ma=new us(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new ls,i=e?e.ma:this.ma;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const u=i.get(t),l=We(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ya(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Va(l,a)>0||c&&this.Va(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{ma:s,pa:n,ss:o,mutatedKeys:r}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const r=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const s=t.pa.j_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Va(t.doc,e.doc))),this.wa(n),i=null!=i&&i;const o=e&&!i?this.Sa():[],a=0===this.Ra.size&&this.current&&!i?1:0,c=a!==this.Aa;return this.Aa=a,0!==s.length||c?{snapshot:new hs(this.query,t.ma,r,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ls,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach((t=>this.da=this.da.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.da=this.da.delete(t))),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=cn(),this.ma.forEach((t=>{this.Da(t.key)&&(this.Ra=this.Ra.add(t.key))}));const e=[];return t.forEach((t=>{this.Ra.has(t)||e.push(new Ss(t))})),this.Ra.forEach((n=>{t.has(n)||e.push(new Es(n))})),e}va(t){this.da=t.ds,this.Ra=cn();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return hs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class xs{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Cs{constructor(t){this.key=t,this.Fa=!1}}class Ps{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new Xe((t=>Ze(t)),$e),this.Oa=new Map,this.Na=new Set,this.La=new It(tt.comparator),this.Ba=new Map,this.ka=new nr,this.qa={},this.Qa=new Map,this.Ka=$i.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function ks(t,e,n=!0){const i=qs(t);let r;const s=i.xa.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Ca()):r=await Os(i,e,n,!0),r}async function As(t,e){const n=qs(t);await Os(n,e,!0,!1)}async function Os(t,e,n,i){const r=await br(t.localStore,ze(e)),s=r.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await Ls(t,e,s,"current"===o,r.resumeToken)),t.isPrimaryClient&&n&&Zr(t.remoteStore,r),a}async function Ls(t,e,n,i,r){t.Ua=(e,n,i)=>async function(t,e,n,i){let r=e.view.ga(n);r.ss&&(r=await Er(t.localStore,e.query,!1).then((({documents:t})=>e.view.ga(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=i&&null!=i.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,s,o);return Bs(t,e.targetId,a.ba),a.snapshot}(t,e,n,i);const s=await Er(t.localStore,e,!0),o=new Is(e,s.ds),a=o.ga(s.documents),c=Yn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);Bs(t,n,u.ba);const l=new xs(e,n,o);return t.xa.set(e,l),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function Rs(t,e,n){const i=L(t),r=i.xa.get(e),s=i.Oa.get(r.targetId);if(s.length>1)return i.Oa.set(r.targetId,s.filter((t=>!$e(t,e)))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Tr(i.localStore,r.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(r.targetId),n&&qr(i.remoteStore,r.targetId),js(i,r.targetId)})).catch(ct)):(js(i,r.targetId),await Tr(i.localStore,r.targetId,!0))}async function Ns(t,e){const n=L(t),i=n.xa.get(e),r=n.Oa.get(i.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),qr(n.remoteStore,i.targetId))}async function Ms(t,e){const n=L(t);try{const t=await yr(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Ba.get(e);i&&(O(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Fa=!0:t.modifiedDocuments.size>0?O(i.Fa):t.removedDocuments.size>0&&(O(i.Fa),i.Fa=!1))})),await Hs(n,t,e)}catch(t){await ct(t)}}function Ds(t,e,n){const i=L(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.xa.forEach(((n,i)=>{const r=i.view.ea(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=L(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.J_)r.ea(e)&&(i=!0)})),i&&ys(n)}(i.eventManager,e),t.length&&i.Ma.R_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Fs(t,e,n){const i=L(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Ba.get(e),s=r&&r.key;if(s){let t=new It(tt.comparator);t=t.insert(s,ae.newNoDocument(s,G.min()));const n=cn().add(s),r=new Jn(G.min(),new Map,new It(q),t,n);await Ms(i,r),i.La=i.La.remove(s),i.Ba.delete(e),Vs(i)}else await Tr(i.localStore,e,!1).then((()=>js(i,e,n))).catch(ct)}function js(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Oa.get(e))t.xa.delete(i),n&&t.Ma.Wa(i,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach((e=>{t.ka.containsKey(e)||Us(t,e)}))}function Us(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);null!==n&&(qr(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Vs(t))}function Bs(t,e,n){for(const i of n)i instanceof Es?(t.ka.addReference(i.key,e),zs(t,i)):i instanceof Ss?(x("SyncEngine","Document no longer in limbo: "+i.key),t.ka.removeReference(i.key,e),t.ka.containsKey(i.key)||Us(t,i.key)):A()}function zs(t,e){const n=e.key,i=n.path.canonicalString();t.La.get(n)||t.Na.has(i)||(x("SyncEngine","New document in limbo: "+n),t.Na.add(i),Vs(t))}function Vs(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new tt(X.fromString(e)),i=t.Ka.next();t.Ba.set(i,new Cs(n)),t.La=t.La.insert(n,i),Zr(t.remoteStore,new Di(ze(Fe(n.path)),i,"TargetPurposeLimboResolution",dt.oe))}}async function Hs(t,e,n){const i=L(t),r=[],s=[],o=[];i.xa.isEmpty()||(i.xa.forEach(((t,a)=>{o.push(i.Ua(a,e,n).then((t=>{var e;if((t||n)&&i.isPrimaryClient){const r=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;i.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);const e=dr.zi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Ma.R_(r),await async function(t,e){const n=L(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ut.forEach(e,(e=>ut.forEach(e.Wi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ut.forEach(e.Gi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ht(t))throw t;x("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.us.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.us=n.us.insert(t,r)}}}(i.localStore,s))}async function $s(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const t=await _r(n.localStore,e);n.currentUser=e,function(t,e){t.Qa.forEach((t=>{t.forEach((t=>{t.reject(new N(R.CANCELLED,e))}))})),t.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Hs(n,t.Ts)}}function Zs(t,e){const n=L(t),i=n.Ba.get(e);if(i&&i.Fa)return cn().add(i.key);{let t=cn();const i=n.Oa.get(e);if(!i)return t;for(const e of i){const i=n.xa.get(e);t=t.unionWith(i.view.fa)}return t}}function qs(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ms.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fs.bind(null,e),e.Ma.R_=_s.bind(null,e.eventManager),e.Ma.Wa=vs.bind(null,e.eventManager),e}class Ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Dr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return gr(this.persistence,new pr,t.initialUser,this.serializer)}ja(t){return new cr(lr.ei,this.serializer)}za(t){return new xr}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ws.provider={build:()=>new Ws};class Ks extends Ws{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){O(this.persistence.referenceDelegate instanceof hr);const n=this.persistence.referenceDelegate.garbageCollector;return new Wi(n,t.asyncQueue,e)}ja(t){const e=void 0!==this.cacheSizeBytes?Hi.withCacheSize(this.cacheSizeBytes):Hi.DEFAULT;return new cr((t=>hr.ei(t,e)),this.serializer)}}class Gs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ds(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=$s.bind(null,this.syncEngine),await ss(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fs}()}createDatastore(t){const e=Dr(t.databaseInfo.databaseId),n=function(t){return new Nr(t)}(t.databaseInfo);return function(t,e,n,i){return new Br(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Vr(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>Ds(this.syncEngine,t,0)),function(){return Pr.p()?new Pr:new Cr}())}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Ps(t,e,n,i,r,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=L(t);x("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await $r(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Gs.provider={build:()=>new Gs};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):C("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(t,e,n,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=T.UNAUTHENTICATED,this.clientId=Z.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,(async t=>{x("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(x("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cs(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Js(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await _r(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Ys(t,e){t.asyncQueue.verifyOperationInProgress();const n=await to(t);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>rs(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>rs(e.remoteStore,n))),t._onlineComponents=e}async function to(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Js(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;P("Error using user provided cache. Falling back to memory cache: "+n),await Js(t,new Ws)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Js(t,new Ks(void 0));return t._offlineComponents}async function eo(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Ys(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Ys(t,new Gs))),t._onlineComponents}async function no(t){const e=await eo(t),n=e.eventManager;return n.onListen=ks.bind(null,e.syncEngine),n.onUnlisten=Rs.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=As.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ns.bind(null,e.syncEngine),n}function io(t,e,n={}){const i=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Qs({next:a=>{s.eu(),e.enqueueAndForget((()=>gs(t,o)));const c=a.docs.has(n);!c&&a.fromCache?r.reject(new N(R.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&i&&"server"===i.source?r.reject(new N(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(a)},error:t=>r.reject(t)}),o=new Ts(Fe(n.path),s,{includeMetadataChanges:!0,ua:!0});return ms(t,o)}(await no(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ro(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const so=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t,e,n){if(!n)throw new N(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ao(t,e,n,i){if(!0===e&&!0===i)throw new N(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function co(t){if(!tt.isDocumentKey(t))throw new N(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":A()}function lo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uo(t);throw new N(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new N(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new N(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ao("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ro(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fo{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ho({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new N(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ho(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new z(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new N(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=so.get(t);e&&(x("ComponentProvider","Removing Datastore"),so.delete(t),e.terminate())}(this),Promise.resolve()}}function po(t,e,n,i={}){var r;const s=(t=lo(t,fo))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&P("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=T.MOCK_USER;else{e=(0,c.Fy)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new N(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(s)}t._authCredentials=new j(new D(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new mo(this.firestore,t,this._query)}}class go{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _o(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new go(this.firestore,t,this._key)}}class _o extends mo{constructor(t,e,n){super(t,e,Fe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new go(this.firestore,null,new tt(t))}withConverter(t){return new _o(this.firestore,t,this._path)}}function vo(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=Z.newId()),oo("doc","path",e),t instanceof fo){const i=X.fromString(e,...n);return co(i),new go(t,null,new tt(i))}{if(!(t instanceof go||t instanceof _o))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(X.fromString(e,...n));return co(i),new go(t.firestore,t instanceof _o?t.converter:null,new tt(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Fr(this,"async_queue_retry"),this.fu=()=>{const t=Mr();t&&x("AsyncQueue","Visibility state changed to "+t.visibilityState),this.r_.Jo()},this.gu=t;const e=Mr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Mr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise((()=>{}));const e=new M;return this.yu((()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Iu.push(t),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!ht(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(t){const e=this.gu.then((()=>(this.Ru=!0,t().catch((t=>{this.Au=t,this.Ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw C("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ru=!1,t))))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=as.createAndSchedule(this,t,e,n,(t=>this.Su(t)));return this.du.push(i),i}pu(){this.Au&&A()}verifyOperationInProgress(){}async bu(){let t;do{t=this.gu,await t}while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bu()}))}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class wo extends fo{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new yo,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new yo(t),this._firestoreClient=void 0,await t}}}function bo(t,e){const n="object"==typeof t?t:(0,s.Sx)(),i="string"==typeof t?t:e||"(default)",r=(0,s.j6)(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=(0,c.yU)("firestore");t&&po(r,...t)}return r}function To(t){if(t._terminated)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Eo(t),t._firestoreClient}function Eo(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Bt(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,ro(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new Xs(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t){this._byteString=t}static fromBase64String(t){try{return new So(Lt.fromBase64String(t))}catch(t){throw new N(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new So(Lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new N(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new RegExp("[~\\*/\\[\\]]");function ko(t,e,n){if(e.search(Po)>=0)throw Ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Io(...e.split("."))._internalPath}catch(i){throw Ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ao(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new N(R.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oo{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new go(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Lo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ro("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Lo extends Oo{data(){return super.data()}}function Ro(t,e){return"string"==typeof e?ko(t,e):e instanceof Io?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{convertValue(t,e="none"){switch(Ht(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Dt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Et(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,i;const r=null===(i=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.map((t=>Mt(t.doubleValue)));return new Co(r)}convertGeoPoint(t){return new xo(Mt(t.latitude),Mt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=jt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ut(t));default:return null}}convertTimestamp(t){const e=Nt(t);return new K(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);O(Mi(n));const i=new zt(n.get(1),n.get(3)),r=new tt(n.popFirst(5));return i.isEqual(e)||C(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Do extends Oo{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ro("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Fo extends Do{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jo(t){t=lo(t,go);const e=lo(t.firestore,wo);return io(To(e),t._key).then((n=>Bo(e,t,n)))}class Uo extends No{constructor(t){super(),this.firestore=t}convertBytes(t){return new So(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new go(this.firestore,null,e)}}function Bo(t,e,n){const i=n.docs.get(e._key),r=new Uo(t);return new Do(t,r,e._key,i,new Mo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){E=t}(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new wo(new U(t.getProvider("auth-internal")),new H(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new N(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zt(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(b,"4.7.5",t),(0,s.KO)(b,"4.7.5","esm2017")}()},5220:function(t,e,n){"use strict";n.d(e,{Bt:function(){return ut},aE:function(){return se}});var i=n(641),r=n(953);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function a(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&o(t.default)}const c=Object.assign;function u(t,e){const n={};for(const i in e){const r=e[i];n[i]=h(r)?r.map(t):t(r)}return n}const l=()=>{},h=Array.isArray;const d=/#/g,f=/&/g,p=/\//g,m=/=/g,g=/\?/g,_=/\+/g,v=/%5B/g,y=/%5D/g,w=/%5E/g,b=/%60/g,T=/%7B/g,E=/%7C/g,S=/%7D/g,I=/%20/g;function x(t){return encodeURI(""+t).replace(E,"|").replace(v,"[").replace(y,"]")}function C(t){return x(t).replace(T,"{").replace(S,"}").replace(w,"^")}function P(t){return x(t).replace(_,"%2B").replace(I,"+").replace(d,"%23").replace(f,"%26").replace(b,"`").replace(T,"{").replace(S,"}").replace(w,"^")}function k(t){return P(t).replace(m,"%3D")}function A(t){return x(t).replace(d,"%23").replace(g,"%3F")}function O(t){return null==t?"":A(t).replace(p,"%2F")}function L(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const R=/\/$/,N=t=>t.replace(R,"");function M(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=H(null!=i?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:L(o)}}function D(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function F(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function j(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&U(e.matched[i],n.matched[r])&&B(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function U(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function B(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!z(t[n],e[n]))return!1;return!0}function z(t,e){return h(t)?V(t,e):h(e)?V(e,t):t===e}function V(t,e){return h(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function H(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];".."!==r&&"."!==r||i.push("");let s,o,a=n.length-1;for(s=0;s<i.length;s++)if(o=i[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(s).join("/")}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Z,q;(function(t){t["pop"]="pop",t["push"]="push"})(Z||(Z={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(q||(q={}));function W(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),N(t)}const K=/^[^#]+#/;function G(t,e){return t.replace(K,"#")+e}function Q(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function J(t){let e;if("el"in t){const n=t.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Q(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function Y(t,e){const n=history.state?history.state.position-e:-1;return n+t}const tt=new Map;function et(t,e){tt.set(t,e)}function nt(t){const e=tt.get(t);return tt.delete(t),e}let it=()=>location.protocol+"//"+location.host;function rt(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let e=r.includes(t.slice(s))?t.slice(s).length:1,n=r.slice(e);return"/"!==n[0]&&(n="/"+n),F(n,"")}const o=F(n,t);return o+i+r}function st(t,e,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=rt(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else i(a);r.forEach((t=>{t(n.value,c,{delta:l,type:Z.pop,direction:l?l>0?q.forward:q.back:q.unknown})}))};function u(){o=n.value}function l(t){r.push(t);const e=()=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(c({},t.state,{scroll:X()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function ot(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?X():null}}function at(t){const{history:e,location:n}=window,i={value:rt(t,n)},r={value:e.state};function s(i,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+i:it()+t+i;try{e[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=c({},e.state,ot(r.value.back,t,r.value.forward,!0),n,{position:r.value.position});s(t,o,!0),i.value=t}function a(t,n){const o=c({},r.value,e.state,{forward:t,scroll:X()});s(o.current,o,!0);const a=c({},ot(i.value,t,null),{position:o.position+1},n);s(t,a,!1),i.value=t}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function ct(t){t=W(t);const e=at(t),n=st(t,e.state,e.location,e.replace);function i(t,e=!0){e||n.pauseListeners(),history.go(t)}const r=c({location:"",base:t,go:i,createHref:G.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ut(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ct(t)}function lt(t){return"string"===typeof t||t&&"object"===typeof t}function ht(t){return"string"===typeof t||"symbol"===typeof t}const dt=Symbol("");var ft;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(ft||(ft={}));function pt(t,e){return c(new Error,{type:t,[dt]:!0},e)}function mt(t,e){return t instanceof Error&&dt in t&&(null==e||!!(t.type&e))}const gt="[^/]+?",_t={sensitive:!1,strict:!1,start:!0,end:!0},vt=/[.+*?^${}()[\]/\\]/g;function yt(t,e){const n=c({},_t,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const t=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let e=0;e<c.length;e++){const i=c[e];let o=40+(n.sensitive?.25:0);if(0===i.type)e||(r+="/"),r+=i.value.replace(vt,"\\$&"),o+=40;else if(1===i.type){const{value:t,repeatable:n,optional:a,regexp:u}=i;s.push({name:t,repeatable:n,optional:a});const h=u||gt;if(h!==gt){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&c.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}i.push(t)}if(n.strict&&n.end){const t=i.length-1;i[t][i[t].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let i=1;i<e.length;i++){const t=e[i]||"",r=s[i-1];n[r.name]=t&&r.repeatable?t.split("/"):t}return n}function u(e){let n="",i=!1;for(const r of t){i&&n.endsWith("/")||(n+="/"),i=!1;for(const t of r)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(h(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=h(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=u}}return n||"/"}return{re:o,score:i,keys:s,parse:a,stringify:u}}function wt(t,e){let n=0;while(n<t.length&&n<e.length){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function bt(t,e){let n=0;const i=t.score,r=e.score;while(n<i.length&&n<r.length){const t=wt(i[n],r[n]);if(t)return t;n++}if(1===Math.abs(r.length-i.length)){if(Tt(i))return 1;if(Tt(r))return-1}return r.length-i.length}function Tt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Et={type:0,value:""},St=/[a-zA-Z0-9_]/;function It(t){if(!t)return[[]];if("/"===t)return[[Et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:St.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else i=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function xt(t,e,n){const i=yt(It(t.path),n);const r=c(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf===!e.record.aliasOf&&e.children.push(r),r}function Ct(t,e){const n=[],i=new Map;function r(t){return i.get(t)}function s(t,n,i){const r=!i,a=kt(t);a.aliasOf=i&&i.record;const h=Rt(e,t),d=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(kt(c({},a,{components:i?i.record.components:a.components,path:t,aliasOf:i?i.record:a})))}let f,p;for(const e of d){const{path:c}=e;if(n&&"/"!==c[0]){const t=n.record.path,i="/"===t[t.length-1]?"":"/";e.path=n.record.path+(c&&i+c)}if(f=xt(e,n,h),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&t.name&&!Ot(f)&&o(t.name)),Dt(f)&&u(f),a.children){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],f,i&&i.children[e])}i=i||f}return p?()=>{o(p)}:l}function o(t){if(ht(t)){const e=i.get(t);e&&(i.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&i.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function u(t){const e=Nt(t,n);n.splice(e,0,t),t.record.name&&!Ot(t)&&i.set(t.record.name,t)}function h(t,e){let r,s,o,a={};if("name"in t&&t.name){if(r=i.get(t.name),!r)throw pt(1,{location:t});0,o=r.record.name,a=c(Pt(e.params,r.keys.filter((t=>!t.optional)).concat(r.parent?r.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&Pt(t.params,r.keys.map((t=>t.name)))),s=r.stringify(a)}else if(null!=t.path)s=t.path,r=n.find((t=>t.re.test(s))),r&&(a=r.parse(s),o=r.record.name);else{if(r=e.name?i.get(e.name):n.find((t=>t.re.test(e.path))),!r)throw pt(1,{location:t,currentLocation:e});o=r.record.name,a=c({},e.params,t.params),s=r.stringify(a)}const u=[];let l=r;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:u,meta:Lt(u)}}function d(){n.length=0,i.clear()}return e=Rt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:r}}function Pt(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function kt(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:At(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function At(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]="object"===typeof n?n[i]:n;return e}function Ot(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lt(t){return t.reduce(((t,e)=>c(t,e.meta)),{})}function Rt(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Nt(t,e){let n=0,i=e.length;while(n!==i){const r=n+i>>1,s=bt(t,e[r]);s<0?i=r:n=r+1}const r=Mt(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Mt(t){let e=t;while(e=e.parent)if(Dt(e)&&0===bt(t,e))return e}function Dt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ft(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],i=(n?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const t=i[r].replace(_," "),n=t.indexOf("="),s=L(n<0?t:t.slice(0,n)),o=n<0?null:L(t.slice(n+1));if(s in e){let t=e[s];h(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function jt(t){let e="";for(let n in t){const i=t[n];if(n=k(n),null==i){void 0!==i&&(e+=(e.length?"&":"")+n);continue}const r=h(i)?i.map((t=>t&&P(t))):[i&&P(i)];r.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Ut(t){const e={};for(const n in t){const i=t[n];void 0!==i&&(e[n]=h(i)?i.map((t=>null==t?null:""+t)):null==i?i:""+i)}return e}const Bt=Symbol(""),zt=Symbol(""),Vt=Symbol(""),Ht=Symbol(""),$t=Symbol("");function Zt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qt(t,e,n,i,r,s=t=>t()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((a,c)=>{const u=t=>{!1===t?c(pt(4,{from:n,to:e})):t instanceof Error?c(t):lt(t)?c(pt(2,{from:e,to:t})):(o&&i.enterCallbacks[r]===o&&"function"===typeof t&&o.push(t),a())},l=s((()=>t.call(i&&i.instances[r],e,n,u)));let h=Promise.resolve(l);t.length<3&&(h=h.then(u)),h.catch((t=>c(t)))}))}function Wt(t,e,n,i,r=t=>t()){const s=[];for(const c of t){0;for(const t in c.components){let u=c.components[t];if("beforeRouteEnter"===e||c.instances[t])if(o(u)){const o=u.__vccOpts||u,a=o[e];a&&s.push(qt(a,n,i,c,t,r))}else{let o=u();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${t}" at "${c.path}"`);const o=a(s)?s.default:s;c.mods[t]=s,c.components[t]=o;const u=o.__vccOpts||o,l=u[e];return l&&qt(l,n,i,c,t,r)()}))))}}}return s}function Kt(t){const e=(0,i.WQ)(Vt),n=(0,i.WQ)(Ht);const s=(0,i.EW)((()=>{const n=(0,r.R1)(t.to);return e.resolve(n)})),o=(0,i.EW)((()=>{const{matched:t}=s.value,{length:e}=t,i=t[e-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(U.bind(null,i));if(o>-1)return o;const a=te(t[e-2]);return e>1&&te(i)===a&&r[r.length-1].path!==a?r.findIndex(U.bind(null,t[e-2])):o})),a=(0,i.EW)((()=>o.value>-1&&Yt(n.params,s.value.params))),c=(0,i.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&B(n.params,s.value.params)));function u(n={}){if(Jt(n)){const n=e[(0,r.R1)(t.replace)?"replace":"push"]((0,r.R1)(t.to)).catch(l);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,i.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:u}}function Gt(t){return 1===t.length?t[0]:t}const Qt=(0,i.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kt,setup(t,{slots:e}){const n=(0,r.Kh)(Kt(t)),{options:s}=(0,i.WQ)(Vt),o=(0,i.EW)((()=>({[ee(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ee(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=e.default&&Gt(e.default(n));return t.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Xt=Qt;function Jt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yt(t,e){for(const n in e){const i=e[n],r=t[n];if("string"===typeof i){if(i!==r)return!1}else if(!h(r)||r.length!==i.length||i.some(((t,e)=>t!==r[e])))return!1}return!0}function te(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ee=(t,e,n)=>null!=t?t:null!=e?e:n,ne=(0,i.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,i.WQ)($t),o=(0,i.EW)((()=>t.route||s.value)),a=(0,i.WQ)(zt,0),u=(0,i.EW)((()=>{let t=(0,r.R1)(a);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,i.EW)((()=>o.value.matched[u.value]));(0,i.Gt)(zt,(0,i.EW)((()=>u.value+1))),(0,i.Gt)(Bt,l),(0,i.Gt)($t,o);const h=(0,r.KR)();return(0,i.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[i,r,s])=>{e&&(e.instances[n]=t,r&&r!==e&&t&&t===i&&(e.leaveGuards.size||(e.leaveGuards=r.leaveGuards),e.updateGuards.size||(e.updateGuards=r.updateGuards))),!t||!e||r&&U(e,r)&&i||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const r=o.value,s=t.name,a=l.value,u=a&&a.components[s];if(!u)return ie(n.default,{Component:u,route:r});const d=a.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=t=>{t.component.isUnmounted&&(a.instances[s]=null)},m=(0,i.h)(u,c({},f,e,{onVnodeUnmounted:p,ref:h}));return ie(n.default,{Component:m,route:r})||m}}});function ie(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const re=ne;function se(t){const e=Ct(t.routes,t),n=t.parseQuery||Ft,o=t.stringifyQuery||jt,a=t.history;const d=Zt(),f=Zt(),p=Zt(),m=(0,r.IJ)($);let g=$;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=u.bind(null,(t=>""+t)),v=u.bind(null,O),y=u.bind(null,L);function w(t,n){let i,r;return ht(t)?(i=e.getRecordMatcher(t),r=n):r=t,e.addRoute(r,i)}function b(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function T(){return e.getRoutes().map((t=>t.record))}function E(t){return!!e.getRecordMatcher(t)}function S(t,i){if(i=c({},i||m.value),"string"===typeof t){const r=M(n,t,i.path),s=e.resolve({path:r.path},i),o=a.createHref(r.fullPath);return c(r,s,{params:y(s.params),hash:L(r.hash),redirectedFrom:void 0,href:o})}let r;if(null!=t.path)r=c({},t,{path:M(n,t.path,i.path).path});else{const e=c({},t.params);for(const t in e)null==e[t]&&delete e[t];r=c({},t,{params:v(e)}),i.params=v(i.params)}const s=e.resolve(r,i),u=t.hash||"";s.params=_(y(s.params));const l=D(o,c({},t,{hash:C(u),path:s.path})),h=a.createHref(l);return c({fullPath:l,hash:u,query:o===jt?Ut(t.query):t.query||{}},s,{redirectedFrom:void 0,href:h})}function I(t){return"string"===typeof t?M(n,t,m.value.path):c({},t)}function x(t,e){if(g!==t)return pt(8,{from:e,to:t})}function P(t){return R(t)}function k(t){return P(c(I(t),{replace:!0}))}function A(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let i="function"===typeof n?n(t):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=I(i):{path:i},i.params={}),c({query:t.query,hash:t.hash,params:null!=i.path?{}:t.params},i)}}function R(t,e){const n=g=S(t),i=m.value,r=t.state,s=t.force,a=!0===t.replace,u=A(n);if(u)return R(c(I(u),{state:"object"===typeof u?c({},r,u.state):r,force:s,replace:a}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&j(o,i,n)&&(h=pt(16,{to:l,from:i}),it(i,i,!0,!1)),(h?Promise.resolve(h):U(l,i)).catch((t=>mt(t)?mt(t,2)?t:tt(t):G(t,l,i))).then((t=>{if(t){if(mt(t,2))return R(c({replace:a},I(t.to),{state:"object"===typeof t.to?c({},r,t.to.state):r,force:s}),e||l)}else t=z(l,i,!0,a,r);return B(l,i,t),t}))}function N(t,e){const n=x(t,e);return n?Promise.reject(n):Promise.resolve()}function F(t){const e=ot.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function U(t,e){let n;const[i,r,s]=oe(t,e);n=Wt(i.reverse(),"beforeRouteLeave",t,e);for(const a of i)a.leaveGuards.forEach((i=>{n.push(qt(i,t,e))}));const o=N.bind(null,t,e);return n.push(o),ct(n).then((()=>{n=[];for(const i of d.list())n.push(qt(i,t,e));return n.push(o),ct(n)})).then((()=>{n=Wt(r,"beforeRouteUpdate",t,e);for(const i of r)i.updateGuards.forEach((i=>{n.push(qt(i,t,e))}));return n.push(o),ct(n)})).then((()=>{n=[];for(const i of s)if(i.beforeEnter)if(h(i.beforeEnter))for(const r of i.beforeEnter)n.push(qt(r,t,e));else n.push(qt(i.beforeEnter,t,e));return n.push(o),ct(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Wt(s,"beforeRouteEnter",t,e,F),n.push(o),ct(n)))).then((()=>{n=[];for(const i of f.list())n.push(qt(i,t,e));return n.push(o),ct(n)})).catch((t=>mt(t,8)?t:Promise.reject(t)))}function B(t,e,n){p.list().forEach((i=>F((()=>i(t,e,n)))))}function z(t,e,n,i,r){const o=x(t,e);if(o)return o;const u=e===$,l=s?history.state:{};n&&(i||u?a.replace(t.fullPath,c({scroll:u&&l&&l.scroll},r)):a.push(t.fullPath,r)),m.value=t,it(t,e,n,u),tt()}let V;function H(){V||(V=a.listen(((t,e,n)=>{if(!at.listening)return;const i=S(t),r=A(i);if(r)return void R(c(r,{replace:!0,force:!0}),i).catch(l);g=i;const o=m.value;s&&et(Y(o.fullPath,n.delta),X()),U(i,o).catch((t=>mt(t,12)?t:mt(t,2)?(R(c(I(t.to),{force:!0}),i).then((t=>{mt(t,20)&&!n.delta&&n.type===Z.pop&&a.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&a.go(-n.delta,!1),G(t,i,o)))).then((t=>{t=t||z(i,o,!1),t&&(n.delta&&!mt(t,8)?a.go(-n.delta,!1):n.type===Z.pop&&mt(t,20)&&a.go(-1,!1)),B(i,o,t)})).catch(l)})))}let q,W=Zt(),K=Zt();function G(t,e,n){tt(t);const i=K.list();return i.length?i.forEach((i=>i(t,e,n))):console.error(t),Promise.reject(t)}function Q(){return q&&m.value!==$?Promise.resolve():new Promise(((t,e)=>{W.add([t,e])}))}function tt(t){return q||(q=!t,H(),W.list().forEach((([e,n])=>t?n(t):e())),W.reset()),t}function it(e,n,r,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!r&&nt(Y(e.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.dY)().then((()=>a(e,n,c))).then((t=>t&&J(t))).catch((t=>G(t,e,n)))}const rt=t=>a.go(t);let st;const ot=new Set,at={currentRoute:m,listening:!0,addRoute:w,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:E,getRoutes:T,resolve:S,options:t,push:P,replace:k,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:K.add,isReady:Q,install(t){const e=this;t.component("RouterLink",Xt),t.component("RouterView",re),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(m)}),s&&!st&&m.value===$&&(st=!0,P(a.location).catch((t=>{0})));const n={};for(const r in $)Object.defineProperty(n,r,{get:()=>m.value[r],enumerable:!0});t.provide(Vt,e),t.provide(Ht,(0,r.Gc)(n)),t.provide($t,m);const i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(g=$,V&&V(),V=null,m.value=$,st=!1,q=!1),i()}}};function ct(t){return t.reduce(((t,e)=>t.then((()=>F(e)))),Promise.resolve())}return at}function oe(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>U(t,s)))?i.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>U(t,a)))||r.push(a))}return[n,i,r]}}}]);
//# sourceMappingURL=chunk-vendors.c9bc6530.js.map