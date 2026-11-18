"use strict";(()=>{var Sa,ct,uu,k0,oi,ou,du,fu,rc,ga,Jr,pu,oc,sc,ac,V0,ba={},ya=[],H0=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ea=Array.isArray;function On(n,e){for(var t in e)n[t]=e[t];return n}function lc(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function wa(n,e,t){var i,r,s,a={};for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?Sa.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)a[s]===void 0&&(a[s]=n.defaultProps[s]);return _a(n,a,i,r,null)}function _a(n,e,t,i,r){var s={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++uu,__i:-1,__u:0};return r==null&&ct.vnode!=null&&ct.vnode(s),s}function Bn(n){return n.children}function va(n,e){this.props=n,this.context=e}function qi(n,e){if(e==null)return n.__?qi(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?qi(n):null}function G0(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],r=[],s=On({},e);s.__v=e.__v+1,ct.vnode&&ct.vnode(s),cc(n.__P,s,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??qi(e),!!(32&e.__u),r),s.__v=e.__v,s.__.__k[s.__i]=s,vu(i,s,r),e.__e=e.__=null,s.__e!=t&&mu(s)}}function mu(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),mu(n)}function lu(n){(!n.__d&&(n.__d=!0)&&oi.push(n)&&!Ma.__r++||ou!=ct.debounceRendering)&&((ou=ct.debounceRendering)||du)(Ma)}function Ma(){try{for(var n,e=1;oi.length;)oi.length>e&&oi.sort(fu),n=oi.shift(),e=oi.length,G0(n)}finally{oi.length=Ma.__r=0}}function xu(n,e,t,i,r,s,a,o,l,c,h){var d,u,f,x,g,m,p=i&&i.__k||ya,S=e.length;for(l=W0(t,e,p,l,S),d=0;d<S;d++)(f=t.__k[d])!=null&&(u=f.__i!=-1&&p[f.__i]||ba,f.__i=d,m=cc(n,f,u,r,s,a,o,l,c,h),x=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&hc(u.ref,null,f),h.push(f.ref,f.__c||x,f)),g==null&&x!=null&&(g=x),4&f.__u?(l=gu(f,l,n),u.__e&&(u.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:x&&(l=x.nextSibling),f.__u&=-7);return t.__e=g,l}function W0(n,e,t,i,r){var s,a,o,l,c,h=t.length,d=h,u=0;for(n.__k=new Array(r),s=0;s<r;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[s]=_a(null,a,null,null,null):Ea(a)?a=n.__k[s]=_a(Bn,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[s]=_a(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[s]=a,l=s+u,a.__=n,a.__b=n.__b+1,o=null,(c=a.__i=X0(a,t,l,d))!=-1&&(d--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(r>h?u--:r<h&&u++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?u--:c==l+1?u++:(c>l?u--:u++,a.__u|=4))):n.__k[s]=null;if(d)for(s=0;s<h;s++)(o=t[s])!=null&&(2&o.__u)==0&&(o.__e==i&&(i=qi(o)),yu(o,o));return i}function gu(n,e,t){var i,r;if(typeof n.type=="function"){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,e=gu(i[r],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=qi(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function X0(n,e,t,i){var r,s,a,o=n.key,l=n.type,c=e[t],h=c!=null&&(2&c.__u)==0;if(c===null&&o==null||h&&o==c.key&&l==c.type)return t;if(i>(h?1:0)){for(r=t-1,s=t+1;r>=0||s<e.length;)if((c=e[a=r>=0?r--:s++])!=null&&(2&c.__u)==0&&o==c.key&&l==c.type)return a}return-1}function cu(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||H0.test(e)?t:t+"px"}function xa(n,e,t,i,r){var s,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||cu(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||cu(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(pu,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?i?t[Jr]=i[Jr]:(t[Jr]=oc,n.addEventListener(e,s?ac:sc,s)):n.removeEventListener(e,s?ac:sc,s);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function hu(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[ga]==null)e[ga]=oc++;else if(e[ga]<t[Jr])return;return t(ct.event?ct.event(e):e)}}}function cc(n,e,t,i,r,s,a,o,l,c){var h,d,u,f,x,g,m,p,S,y,w,C,q,A,D,M,v=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),s=[o=e.__e=t.__e]),(h=ct.__b)&&h(e);e:if(typeof v=="function"){d=a.length;try{if(S=e.props,y=v.prototype&&v.prototype.render,w=(h=v.contextType)&&i[h.__c],C=h?w?w.props.value:h.__:i,t.__c?p=(u=e.__c=t.__c).__=u.__E:(y?e.__c=u=new v(S,C):(e.__c=u=new va(S,C),u.constructor=v,u.render=$0),w&&w.sub(u),u.state||(u.state={}),u.__n=i,f=u.__d=!0,u.__h=[],u._sb=[]),y&&u.__s==null&&(u.__s=u.state),y&&v.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=On({},u.__s)),On(u.__s,v.getDerivedStateFromProps(S,u.__s))),x=u.props,g=u.state,u.__v=e,f)y&&v.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),y&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(y&&v.getDerivedStateFromProps==null&&S!==x&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(S,C),e.__v==t.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(S,u.__s,C)===!1){e.__v!=t.__v&&(u.props=S,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(R){R&&(R.__=e)}),ya.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&a.push(u),o=qi(t);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(S,u.__s,C),y&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(x,g,m)})}if(u.context=C,u.props=S,u.__P=n,u.__e=!1,q=ct.__r,A=0,y)u.state=u.__s,u.__d=!1,q&&q(e),h=u.render(u.props,u.state,u.context),ya.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,q&&q(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++A<25);u.state=u.__s,u.getChildContext!=null&&(i=On(On({},i),u.getChildContext())),y&&!f&&u.getSnapshotBeforeUpdate!=null&&(m=u.getSnapshotBeforeUpdate(x,g)),D=h!=null&&h.type===Bn&&h.key==null?bu(h.props.children):h,o=xu(n,Ea(D)?D:[D],e,t,i,r,s,a,o,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&a.push(u),p&&(u.__E=u.__=null)}catch(R){if(a.length=d,e.__v=null,l||s!=null){if(R.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;s!=null&&(s[s.indexOf(o)]=null),e.__e=o}else if(s!=null)for(M=s.length;M--;)lc(s[M])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),R.then||_u(e),ct.__e(R,e,t)}}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=Y0(t.__e,e,t,i,r,s,a,l,c);return(h=ct.diffed)&&h(e),128&e.__u?void 0:o}function _u(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(_u))}function vu(n,e,t){for(var i=0;i<t.length;i++)hc(t[i],t[++i],t[++i]);ct.__c&&ct.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(s){s.call(r)})}catch(s){ct.__e(s,r.__v)}})}function bu(n){return typeof n!="object"||n==null||n.__b>0?n:Ea(n)?n.map(bu):n.constructor!==void 0?null:On({},n)}function Y0(n,e,t,i,r,s,a,o,l){var c,h,d,u,f,x,g,m=t.props||ba,p=e.props,S=e.type;if(S=="svg"?r="http://www.w3.org/2000/svg":S=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!S&&(S?f.localName==S:f.nodeType==3)){n=f,s[c]=null;break}}if(n==null){if(S==null)return document.createTextNode(p);n=document.createElementNS(r,S,p.is&&p),o&&(ct.__m&&ct.__m(e,s),o=!1),s=null}if(S==null)m===p||o&&n.data==p||(n.data=p);else{if(s=S=="textarea"&&p.defaultValue!=null?null:s&&Sa.call(n.childNodes),!o&&s!=null)for(m={},c=0;c<n.attributes.length;c++)m[(f=n.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?d=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||xa(n,c,null,f,r);for(c in p)f=p[c],c=="children"?u=f:c=="dangerouslySetInnerHTML"?h=f:c=="value"?x=f:c=="checked"?g=f:o&&typeof f!="function"||m[c]===f||xa(n,c,f,m[c],r);if(h)o||d&&(h.__html==d.__html||h.__html==n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(d&&(n.innerHTML=""),xu(e.type=="template"?n.content:n,Ea(u)?u:[u],e,t,i,S=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,a,s?s[0]:t.__k&&qi(t,0),o,l),s!=null)for(c=s.length;c--;)lc(s[c]);o&&S!="textarea"||(c="value",S=="progress"&&x==null?n.removeAttribute("value"):x!=null&&(x!==n[c]||S=="progress"&&!x||S=="option"&&x!=m[c])&&xa(n,c,x,m[c],r),c="checked",g!=null&&g!=n[c]&&xa(n,c,g,m[c],r))}return n}function hc(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(r){ct.__e(r,t)}}function yu(n,e,t){var i,r;if(ct.unmount&&ct.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||hc(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){ct.__e(s,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&yu(i[r],e,t||typeof n.type!="function");t||lc(n.__e),n.__c=n.__=n.__e=void 0}function $0(n,e,t){return this.constructor(n,t)}function Mu(n,e,t){var i,r,s,a;e==document&&(e=document.documentElement),ct.__&&ct.__(n,e),r=(i=typeof t=="function")?null:t&&t.__k||e.__k,s=[],a=[],cc(e,n=(!i&&t||e).__k=wa(Bn,null,[n]),r||ba,ba,e.namespaceURI,!i&&t?[t]:r?null:e.firstChild?Sa.call(e.childNodes):null,s,!i&&t?t:r?r.__e:e.firstChild,i,a),vu(s,n,a),n.props.children=null}Sa=ya.slice,ct={__e:function(n,e,t,i){for(var r,s,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(n)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,i||{}),a=r.__d),a)return r.__E=r}catch(o){n=o}throw n}},uu=0,k0=function(n){return n!=null&&n.constructor===void 0},va.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=On({},this.state),typeof n=="function"&&(n=n(On({},t),this.props)),n&&On(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),lu(this))},va.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),lu(this))},va.prototype.render=Bn,oi=[],du=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fu=function(n,e){return n.__v.__b-e.__v.__b},Ma.__r=0,rc=Math.random().toString(8),ga="__d"+rc,Jr="__a"+rc,pu=/(PointerCapture)$|Capture$/i,oc=0,sc=hu(!1),ac=hu(!0),V0=0;var Z0=0,J0=0,Eu=n=>{Z0=n,J0=0};var K0=4,Q0=.001,j0=1e-7,ep=10,Aa=11,Ta=1/(Aa-1),wu=(n,e)=>1-3*e+3*n,Tu=(n,e)=>3*e-6*n,qu=n=>3*n,qa=(n,e,t)=>((wu(e,t)*n+Tu(e,t))*n+qu(e))*n,Su=(n,e,t)=>3*wu(e,t)*n*n+2*Tu(e,t)*n+qu(e),tp=(n,e,t,i)=>{if(n===e&&t===i)return a=>a;let r=new Float32Array(Aa);for(let a=0;a<Aa;++a)r[a]=qa(a*Ta,n,t);let s=a=>{let o=0,l=1,c=Aa-1;for(;l!==c&&r[l]<=a;++l)o+=Ta;--l;let h=(a-r[l])/(r[l+1]-r[l]),d=o+h*Ta,u=Su(d,n,t);if(u>=Q0){let S=d;for(let y=0;y<K0;++y){let w=Su(S,n,t);if(w===0)return S;S-=(qa(S,n,t)-a)/w}return S}if(u===0)return d;let f=o,x=o+Ta,g=0,m=0,p=0;do g=f+(x-f)/2,m=qa(g,n,t)-a,m>0?x=g:f=g;while(Math.abs(m)>j0&&++p<ep);return g};return a=>a===0||a===1?a:qa(s(a),e,i)},Jt={bezier:tp,linear:n=>n,in:n=>n,out:n=>e=>1-n(1-e),inOut:n=>e=>e<.5?n(e*2)/2:1-n((1-e)*2)/2,poly:n=>e=>Math.pow(e,n),cubic:n=>n*n*n,sin:n=>1-Math.cos(n*Math.PI/2)};var gn=[{scene:"hook",a:0,b:3.58,text:"An American company bought Afterpay for $29 billion.",w:[["An",0],["American",.16],["company",.54],["bought",1.04],["Afterpay",1.44],["for",1.98],["$29",2.24],["billion,",3.315]]},{scene:"hook",a:4.478,b:8.44,text:"But when the deal closed, its own filing put the price at 13.8.",w:[["but",4.478],["when",4.6],["the",4.74],["deal",4.86],["closed,",5.02],["its",5.92],["own",6.06],["filing",6.34],["put",6.72],["the",6.94],["price",7.1],["at",7.34],["13.8.",7.58]]},{scene:"hook",a:8.44,b:10.28,text:"So which number is right?",w:[["So",8.44],["which",9.12],["number",9.58],["is",9.78],["right?",10.04]]},{scene:"explain",a:10.54,b:11.16,text:"Let us explain.",w:[["Let",10.54],["us",10.64],["explain.",10.78]]},{scene:"deal",a:11.88,b:16.86,text:"In August 2021, Jack Dorsey's company, Square, agreed to buy Afterpay.",w:[["In",11.88],["August",11.98],["2021,",12.3],["Jack",13.63],["Dorsey's",13.84],["company",14.36],["Square",14.68],["agreed",15.518],["to",15.8],["buy",16.02],["Afterpay.",16.26]]},{scene:"deal",a:17.058,b:18.54,text:"But Square didn't pay in cash.",w:[["But",17.058],["Square",17.16],["didn't",17.46],["pay",17.86],["in",18.06],["cash.",18.2]]},{scene:"deal",a:18.92,b:20.4,text:"It paid in its own shares.",w:[["It",18.92],["paid",19.02],["in",19.32],["its",19.56],["own",19.7],["shares.",19.96]]},{scene:"deal",a:20.8,b:25.06,text:"For every Afterpay share, you got 0.375 of a Square share.",w:[["For",20.8],["every",20.88],["Afterpay",21.26],["share,",21.82],["you",22.413],["got",22.56],[".375",22.902],["of",23.6],["a",24.38],["Square",24.52],["share.",24.76]]},{scene:"price",a:25.275,b:28.3,text:"At the time, each Square share was worth $247.",w:[["At",25.275],["the",25.36],["time,",25.5],["each",26.104],["Square",26.28],["share",26.62],["was",26.92],["worth",27.14],["$247.",27.538]]},{scene:"price",a:29.315,b:31.86,text:"Multiply it out, and you get 29 billion.",w:[["Multiply",29.315],["it",29.74],["out,",29.84],["and",30.39],["you",30.46],["get",30.62],["$29",31.092],["billion.",31.5]]},{scene:"catch",a:32.06,b:32.76,text:"But here's the catch.",w:[["But",32.06],["here's",32.08],["the",32.36],["catch.",32.48]]},{scene:"close",a:33.61,b:35.68,text:"The deal took six months to close.",w:[["The",33.61],["deal",33.68],["took",33.98],["six",34.26],["months",34.7],["to",35.08],["close.",35.32]]},{scene:"close",a:35.98,b:40.6,text:"By then, Square had renamed itself Block, and its share price had roughly halved.",w:[["By",35.98],["then,",36.04],["Square",36.62],["had",36.9],["renamed",37.12],["itself",37.5],["Block,",38.142],["and",38.669],["its",38.74],["share",38.92],["price",39.16],["had",39.48],["roughly",39.68],["halved.",40.04]]},{scene:"close",a:40.76,b:43.02,text:"Same number of shares. About half the price.",w:[["Same",40.76],["number",40.94],["of",41.16],["shares,",41.38],["about",41.989],["half",42.2],["the",42.56],["price.",42.76]]},{scene:"close",a:43.33,b:48.98,text:"So when the deal closed, Block told the SEC what those shares were worth: 13.8 billion.",w:[["So",43.33],["when",43.44],["the",43.58],["deal",43.7],["closed,",43.86],["Block",44.76],["told",44.98],["the",45.22],["SEC",45.4],["what",45.8],["those",46.315],["shares",46.5],["were",46.74],["worth,",46.98],["$13.8",47.58],["billion.",48.679]]},{scene:"fair",a:49.16,b:55.3,text:"To be fair, 29 billion was real on day one, and Afterpay's shareholders got the shares they were promised.",w:[["To",49.16],["be",49.24],["fair,",49.38],["$29",50.02],["billion",50.44],["was",50.82],["real",51.18],["on",51.56],["day",51.84],["one,",52.02],["and",52.662],["Afterpay",52.86],["shareholders",53.34],["got",53.78],["the",54.24],["shares",54.4],["they",54.62],["were",54.8],["promised.",54.96]]},{scene:"verdict",a:55.3,b:59.06,text:"But the price tag everyone remembers was never the price paid.",w:[["But",55.3],["the",55.64],["price",55.8],["tag",56.04],["everyone",56.28],["remembers",56.74],["was",57.26],["never",57.76],["the",58.16],["price",58.38],["paid.",58.66]]},{scene:"verdict",a:59.25,b:60.52,text:"Our rating: inflated.",w:[["Our",59.25],["rating?",59.4],["Inflated.",59.93]]},{scene:"verdict",a:60.74,b:62,text:"Send us who to audit next.",w:[["Send",60.74],["us",60.88],["who",61.04],["to",61.24],["audit",61.42],["next.",61.6]]}];var Au={note:"037 \u2014 script v2 (2026-11-18). Lines the BRIEF had that fail verification: any caption matching a `bad` pattern means a take was read from the brief. Read with JSON.parse.",fixes:[{at:"hook c0",brief:"That's the number on every headline.",briefSpoken:"That's the number on every headline.",use:"(line dropped in v2)",why:"'Every' cannot be shown.",bad:"\\bevery headline\\b"},{at:"price c0",brief:"That day, one Square share was worth two hundred and forty-seven dollars.",briefSpoken:"That day, one Square share was worth two hundred and forty-seven dollars.",use:"At the time, each Square share was worth two hundred and forty-seven dollars.",why:"US$247.26 is the 30 Jul 2021 close; 1 Aug 2021 was a Sunday.",bad:"\\bthat day,? (one|each) square share\\b"},{at:"fair c0",brief:"and Afterpay's owners kept those shares.",briefSpoken:"and Afterpay's owners kept those shares.",use:"and Afterpay's shareholders got the shares they were promised.",why:"They received the shares; whether holders kept them is undocumented.",bad:"\\b(owners|shareholders) kept those shares\\b"}],guardrails:[{why:"$29B was accurate on announcement day: never imply Square, Block, Dorsey or the founders misled anyone (the brief).",bad:"\\b(lied|lying|misled|mislead\\w*|deceiv\\w*|cover(ed)?[- ]up|hid the|fake)\\b",example:"Square misled the market."},{why:"Never say founders or shareholders 'lost' $15B: they received Block shares whose value kept moving (the brief).",bad:"\\b(lost|losing|wiped out|robbed|cheated)\\b",example:"Shareholders lost fifteen billion."},{why:"No current Block share price anywhere (the brief).",bad:"\\b(today|now|currently)\\b[^.]*\\b(share|stock) price\\b|\\b(share|stock) price\\b[^.]*\\b(today|now|currently)\\b",example:"Today the share price is sixty dollars."},{why:"'Fraud' and 'scam' never appear (standing rule).",bad:"\\b(fraud|scam)\\w*\\b",example:"The deal was a scam."},{why:"The verdict rates the $29 billion figure as the price paid, not any person or company (the brief).",bad:"\\b(afterpay|square|block|dorsey|the founders?) (is|was|are|were) (inflated|overpriced|overvalued|dishonest)\\b",example:"Afterpay was overvalued."}]};var uc=30;var x5=Au.fixes,rp=n=>gn.some(e=>n.test(e.text)),g5={ctaSpoken:rp(/audit next/i)},Cu=!1,Ru="afterpay_face.jpg";var _5=Math.round(0*uc);var Ra=["hook","explain","deal","price","catch","close","fair","verdict"],Ca={hook:3,explain:1,deal:4,price:2,catch:1,close:4,fair:1,verdict:3};{let n={};for(let t of gn)n[t.scene]=(n[t.scene]??0)+1;let e=Ra.filter(t=>(n[t]??0)!==Ca[t]).map(t=>`${t}: wired ${n[t]??0}, the film indexes ${Ca[t]}`);if(e.length)throw new Error(`037 CUE COUNT MISMATCH \u2014 the wired take does not match the film.
`+e.map(t=>"  \xB7 "+t).join(`
`))}var sp=.8,ap=Math.round(gn[gn.length-1].b*uc),op=Math.round(sp*uc),Kr=ap+op;var ji=Jt.bezier(.5,0,.25,1),E5=Jt.bezier(.45,0,.25,1),w5=Jt.bezier(.45,.05,.35,1),lp=Jt.bezier(.6,0,.4,1),dc=Jt.bezier(.4,.12,0,1),cp=Jt.out(Jt.poly(4)),T5=Jt.inOut(Jt.sin),q5=Jt.bezier(.45,0,.25,1);var hp=Jt.in(Jt.cubic),_n=n=>Math.max(0,Math.min(1,n));var up=0;function zn(n,e,t,i,r,s){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var c={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--up,__i:-1,__u:0,__source:r,__self:s};if(typeof n=="function"&&(a=n.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return ct.vnode&&ct.vnode(c),c}var dp={coin:.1,ding:.699,flick:.09,thud:.06,tick:.03,sub:.043,bloom:.107,ping:.743,whooshlong:.202,whooshsoft:.202,click:.232,data:.286,airwoosh:.072,chain:.947,lowwoosh:.283,swoosh:.065,pingshort:.85,chainshort:.7,datashort:.34,datamid:.31},fp=.94,F5=Object.fromEntries(Object.entries(dp).map(([n,e])=>[n,e*fp]));var Iu={coin:24,ding:40,flick:16,thud:30,tick:8,sub:30,bloom:60,ping:108,whooshlong:32,whooshsoft:27,click:7,data:68,airwoosh:53,chain:90,lowwoosh:75,swoosh:40,pingshort:39,chainshort:32,datashort:29,datamid:48},Pu={coin:0,ding:0,flick:0,thud:0,tick:0,sub:0,bloom:0,ping:0,whooshlong:8,whooshsoft:6,click:0,data:0,airwoosh:19,chain:0,lowwoosh:10,swoosh:10,pingshort:0,chainshort:4,datashort:0,datamid:0},fc={airwoosh:21,bloom:3,chain:0,chainshort:4,click:0,coin:0,data:2,datamid:2,datashort:2,ding:0,flick:0,lowwoosh:13,ping:0,pingshort:0,sub:1,swoosh:12,thud:0,tick:0,whooshlong:13,whooshsoft:8},pp=new Set(["data","datamid","datashort","chain","chainshort","lowwoosh","airwoosh","swoosh","whooshlong","whooshsoft"]),pc=n=>(e,t,i,r,s)=>{let a=Math.max(Math.round(n.at),Math.round(t-Pu[e])),o=pp.has(e)&&i!==void 0?Math.min(Math.round(i),Math.round(n.end)):Math.round(n.end),l=Math.max(3,Math.min(Iu[e],o-a));return{s:e,at:a,dur:l,fade:l<Iu[e]?Math.min(10,Math.max(3,Math.round(l/3))):0,vol:r,why:s}},mc=n=>(e,t,i,r,s)=>pc(n)(e,t-(fc[e]-Pu[e]),i,r,s);var Du=(n,e,t)=>{let i=[],r=l=>{let c=n.find(h=>h.id===l);return{at:c.from,end:c.to}};for(let l of e)i.push(mc(r(l.id))("airwoosh",l.mid,l.end,l.vol,`the camera moves (${l.id}: ${l.why})`));for(let l of t)i.push((l.kind==="move"?mc:pc)(r(l.id))(l.s,l.at,l.end,l.vol,l.why));let s=new Set(["swoosh","whooshlong","whooshsoft","airwoosh","lowwoosh"]),a=l=>l.at+fc[l.s],o=i.filter(l=>!(l.why.startsWith("the camera moves")&&i.some(c=>c!==l&&s.has(c.s)&&!c.why.startsWith("the camera moves")&&Math.abs(a(c)-a(l))<=6)));return o.sort((l,c)=>l.at-c.at),{cues:o}};var xc=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Ai=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],Qr=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],er=n=>Math.hypot(n[0],n[1],n[2]),jr=(n,e,t)=>n+(e-n)*t,mp=50,xp=(n,e,t,i)=>{let r=e*Math.PI/180;return[n[0]+Math.sin(r)*t,i,n[2]+Math.cos(r)*t]},Lu=(n,e)=>xp(n.c,jr(n.a0,n.a1,e),jr(n.r0,n.r1??n.r0,e),jr(n.y0,n.y1??n.y0,e));var Uu=(n,e,t,i,r={})=>({at:n,dur:e,pos:t,look:i,fov:r.fov,ease:r.ease??dc,why:r.why??"dolly"});var Pa=(n,e,t,i={})=>({at:n,dur:0,pos:e,look:t,fov:i.fov,roll:i.roll,cut:!0,dip:i.dip??0,why:i.why??"cut",focus:i.focus,still:i.still});var Fu=(n,e)=>{for(let t=1;t<e.length;t++){let i=e[t-1],r=e[t];if(r.at<i.at+i.dur-1e-6)throw new Error(`camera ${n}: key ${t} "${r.why??""}" (f${r.at}) starts before key ${t-1} "${i.why??""}" ends (f${i.at+i.dur}): camera keys never overlap`);if(!r.cut&&r.dur<1)throw new Error(`camera ${n}: key ${t} "${r.why??""}" has no duration (use cut())`)}return e},gc=7,gp=n=>[gc*(Math.sin(n*.0213+1.3)+.5*Math.sin(n*.0091+4.1)),gc*.6*(Math.sin(n*.0171+2.9)+.4*Math.sin(n*.0123+.4)),gc*1.2*Math.sin(n*.0137+5.2)],Ia=(n,e)=>{let t={pos:n[0].pos,look:n[0].look,fov:n[0].fov??mp,roll:n[0].roll??0,focus:n[0].focus??n[0].look},i=!!n[0].still;for(let s=1;s<n.length;s++){let a=n[s];if(e<a.at)break;let o={pos:a.pos,look:a.look,fov:a.fov??t.fov,roll:a.roll??0,focus:a.focus??a.look};if(i=!!a.still,a.cut||e>=a.at+a.dur){t=o;continue}let l=(a.ease??dc)(_n((e-a.at)/a.dur)),c=Qr(t.pos,a.pos,l);if(a.orbit){let h=Lu(a.orbit,l),d=ji(_n(l/.34)),u=Lu(a.orbit,0);c=er(Ai(u,t.pos))<2?h:Qr(Qr(t.pos,h,l),h,d)}if(a.arc){let h=Math.sin(Math.PI*l);c=xc(c,[a.arc[0]*h,a.arc[1]*h,a.arc[2]*h])}t={pos:c,look:Qr(t.look,a.look,l),fov:jr(t.fov,o.fov,l),roll:jr(t.roll,o.roll,l),focus:Qr(t.focus,o.focus,l)};break}if(i)return t;let r=gp(e);return{pos:xc(t.pos,r),look:xc(t.look,[r[0]*.25,r[1]*.25,0]),fov:t.fov,roll:t.roll,focus:t.focus}};var Nu=(n,e)=>{let t=Ia(n,e-.5),i=Ia(n,e+.5),r=Math.max(200,er(Ai(t.look,t.pos)));return(er(Ai(i.pos,t.pos))+er(Ai(i.look,t.look)))/r};var hd=0,sh=1,ud=2;var ah=1,Gi=2,fn=3,Yn=0,Rt=1,Pn=2,Wt=0,Li=1,Kn=2,oh=3,lh=4,Ro=5,Cn=100,dd=101,fd=102,pd=103,md=104,xd=200,Gs=201,gd=202,_d=203,no=204,io=205,vd=206,bd=207,yd=208,Md=209,Sd=210,Ed=211,wd=212,Td=213,qd=214,Io=0,Po=1,Do=2,Ui=3,Lo=4,Uo=5,Fo=6,No=7,Oo=0,Ad=1,Cd=2,Qn=0,qr=1,Bo=2,zo=3,ko=4,Vo=5,Ho=6,Ar=7;var ch=300,Wi=301,Xi=302,Go=303,Wo=304,Ws=306,ro=1e3,An=1001,so=1002,Ct=1003,Rd=1004;var Xs=1005;var jt=1006,Xo=1007;var Dn=1008;var En=1009,hh=1010,uh=1011,Cr=1012,Yo=1013,bi=1014,wn=1015,Mt=1016,$o=1017,Zo=1018,Rr=1020,dh=35902,fh=35899,ph=1021,mh=1022,pn=1023,mr=1026,Ir=1027,Jo=1028,Ko=1029,Qo=1030,jo=1031;var el=1033,Ys=33776,$s=33777,Zs=33778,Js=33779,tl=35840,nl=35841,il=35842,rl=35843,sl=36196,al=37492,ol=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,xl=37816,gl=37817,_l=37818,vl=37819,bl=37820,yl=37821,Ml=36492,Sl=36494,El=36495,wl=36283,Tl=36284,ql=36285,Al=36286;var us=2300,ao=2301,to=2302,Xc=2400,Yc=2401,$c=2402;var Id=3200,Cl=3201;var Rl=0,Pd=1,jn="",At="srgb",Fi="srgb-linear",ds="linear",je="srgb";var Di=7680;var Zc=519,Dd=512,Ld=513,Ud=514,xh=515,Fd=516,Nd=517,Od=518,Bd=519,Jc=35044;var gh="300 es",Mn=2e3,fs=2001;function _h(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zd(){let n=ps("canvas");return n.style.display="block",n}var Ou={},xr=null;function vh(...n){let e="THREE."+n.shift();xr?xr("log",e,...n):console.log(e,...n)}function Be(...n){let e="THREE."+n.shift();xr?xr("warn",e,...n):console.warn(e,...n)}function We(...n){let e="THREE."+n.shift();xr?xr("error",e,...n):console.error(e,...n)}function gr(...n){let e=n.join(" ");e in Ou||(Ou[e]=!0,Be(...n))}function kd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var $n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _c=Math.PI/180,ms=180/Math.PI;function Pr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function _p(n,e){return(n%e+e)%e}function vc(n,e,t){return(1-t)*n+t*e}function es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ee=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],f=s[a+1],x=s[a+2],g=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=u,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==u||c!==f||h!==x){let m=l*u+c*f+h*x+d*g;m<0&&(u=-u,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),y=Math.sin(S);p=Math.sin(p*S)/y,o=Math.sin(o*S)/y,l=l*p+u*o,c=c*p+f*o,h=h*p+x*o,d=d*p+g*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+x*o,d=d*p+g*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],u=s[a+1],f=s[a+2],x=s[a+3];return e[t]=o*x+h*d+l*f-c*u,e[t+1]=l*x+h*u+c*d-o*f,e[t+2]=c*x+h*f+o*u-l*d,e[t+3]=h*x-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),u=l(i/2),f=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new P,Bu=new Zn,Ve=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],x=i[8],g=r[0],m=r[3],p=r[6],S=r[1],y=r[4],w=r[7],C=r[2],q=r[5],A=r[8];return s[0]=a*g+o*S+l*C,s[3]=a*m+o*y+l*q,s[6]=a*p+o*w+l*A,s[1]=c*g+h*S+d*C,s[4]=c*m+h*y+d*q,s[7]=c*p+h*w+d*A,s[2]=u*g+f*S+x*C,s[5]=u*m+f*y+x*q,s[8]=u*p+f*w+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,x=t*d+i*u+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=d*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=u*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yc.makeScale(e,t)),this}rotate(e){return this.premultiply(yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yc=new Ve,zu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){let n={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fi]:{primaries:e,whitePoint:i,transfer:ds,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:je,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var Je=vp();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tr,oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{tr===void 0&&(tr=ps("canvas")),tr.width=e.width,tr.height=e.height;let r=tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bp=0,_r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Mc(r[a].image)):s.push(Mc(r[a]))}else s=Mc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var yp=0,Sc=new P,Ht=class n extends $n{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=An,r=An,s=jt,a=Dn,o=pn,l=En,c=n.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Pr(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=ch;Ht.DEFAULT_ANISOTROPY=1;var it=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,w=(f+1)/2,C=(p+1)/2,q=(h+u)/4,A=(d+g)/4,D=(x+m)/4;return y>w&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=q/i,s=A/i):w>C?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=q/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=D/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-g)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lo=class extends $n{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Ht(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xt=class extends lo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xs=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),La.subVectors(this.max,ts),nr.subVectors(e.a,ts),ir.subVectors(e.b,ts),rr.subVectors(e.c,ts),li.subVectors(ir,nr),ci.subVectors(rr,ir),Ci.subVectors(nr,rr);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ci.z,Ci.y,li.z,0,-li.x,ci.z,0,-ci.x,Ci.z,0,-Ci.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ci.y,Ci.x,0];return!Ec(t,nr,ir,rr,La)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,nr,ir,rr,La))?!1:(Ua.crossVectors(li,ci),t=[Ua.x,Ua.y,Ua.z],Ec(t,nr,ir,rr,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,Da=new en,nr=new P,ir=new P,rr=new P,li=new P,ci=new P,Ci=new P,ts=new P,La=new P,Ua=new P,Ri=new P;function Ec(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ri.fromArray(n,s);let o=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Mp=new en,ns=new P,wc=new P,gi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);let t=ns.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(wc)),this.expandByPoint(ns.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vn=new P,Tc=new P,Fa=new P,hi=new P,qc=new P,Na=new P,Ac=new P,ho=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tc.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Tc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),o=hi.dot(this.direction),l=-hi.dot(Fa),c=hi.lengthSq(),h=Math.abs(1-a*a),d,u,f,x;if(h>0)if(d=a*l-o,u=a*o-l,x=s*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tc).addScaledVector(Fa,u),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,s){qc.subVectors(t,e),Na.subVectors(i,e),Ac.crossVectors(qc,Na);let a=this.direction.dot(Ac),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);let l=o*this.direction.dot(Na.crossVectors(hi,Na));if(l<0)return null;let c=o*this.direction.dot(qc.cross(hi));if(c<0||l+c>a)return null;let h=-o*hi.dot(Ac);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class n{constructor(e,t,i,r,s,a,o,l,c,h,d,u,f,x,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,d,u,f,x,g,m)}set(e,t,i,r,s,a,o,l,c,h,d,u,f,x,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,x=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+x*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,x=c*h,g=c*d;t[0]=u+g*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,x=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,x=o*h,g=o*d;t[0]=l*h,t[4]=x*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=x*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+x,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*l,f=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,Ep)}lookAt(e,t,i){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ui.crossVectors(i,Kt),ui.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ui.crossVectors(i,Kt)),ui.normalize(),Oa.crossVectors(Kt,ui),r[0]=ui.x,r[4]=Oa.x,r[8]=Kt.x,r[1]=ui.y,r[5]=Oa.y,r[9]=Kt.y,r[2]=ui.z,r[6]=Oa.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],x=i[2],g=i[6],m=i[10],p=i[14],S=i[3],y=i[7],w=i[11],C=i[15],q=r[0],A=r[4],D=r[8],M=r[12],v=r[1],R=r[5],B=r[9],k=r[13],G=r[2],W=r[6],X=r[10],re=r[14],H=r[3],se=r[7],le=r[11],we=r[15];return s[0]=a*q+o*v+l*G+c*H,s[4]=a*A+o*R+l*W+c*se,s[8]=a*D+o*B+l*X+c*le,s[12]=a*M+o*k+l*re+c*we,s[1]=h*q+d*v+u*G+f*H,s[5]=h*A+d*R+u*W+f*se,s[9]=h*D+d*B+u*X+f*le,s[13]=h*M+d*k+u*re+f*we,s[2]=x*q+g*v+m*G+p*H,s[6]=x*A+g*R+m*W+p*se,s[10]=x*D+g*B+m*X+p*le,s[14]=x*M+g*k+m*re+p*we,s[3]=S*q+y*v+w*G+C*H,s[7]=S*A+y*R+w*W+C*se,s[11]=S*D+y*B+w*X+C*le,s[15]=S*M+y*k+w*re+C*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+s*l*d-r*c*d-s*o*u+i*c*u+r*o*f-i*l*f)+g*(+t*l*f-t*c*u+s*a*u-r*a*f+r*c*h-s*l*h)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*h-i*c*h)+p*(-r*o*h-t*l*d+t*o*u+r*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],S=d*m*c-g*u*c+g*l*f-o*m*f-d*l*p+o*u*p,y=x*u*c-h*m*c-x*l*f+a*m*f+h*l*p-a*u*p,w=h*g*c-x*d*c+x*o*f-a*g*f-h*o*p+a*d*p,C=x*d*l-h*g*l-x*o*u+a*g*u+h*o*m-a*d*m,q=t*S+i*y+r*w+s*C;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/q;return e[0]=S*A,e[1]=(g*u*s-d*m*s-g*r*f+i*m*f+d*r*p-i*u*p)*A,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*p+i*l*p)*A,e[3]=(d*l*s-o*u*s-d*r*c+i*u*c+o*r*f-i*l*f)*A,e[4]=y*A,e[5]=(h*m*s-x*u*s+x*r*f-t*m*f-h*r*p+t*u*p)*A,e[6]=(x*l*s-a*m*s-x*r*c+t*m*c+a*r*p-t*l*p)*A,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*f+t*l*f)*A,e[8]=w*A,e[9]=(x*d*s-h*g*s-x*i*f+t*g*f+h*i*p-t*d*p)*A,e[10]=(a*g*s-x*o*s+x*i*c-t*g*c-a*i*p+t*o*p)*A,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*f-t*o*f)*A,e[12]=C*A,e[13]=(h*g*r-x*d*r+x*i*u-t*g*u-h*i*m+t*d*m)*A,e[14]=(x*o*r-a*g*r-x*i*l+t*g*l+a*i*m-t*o*m)*A,e[15]=(a*d*r-h*o*r+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,x=s*d,g=a*h,m=a*d,p=o*d,S=l*c,y=l*h,w=l*d,C=i.x,q=i.y,A=i.z;return r[0]=(1-(g+p))*C,r[1]=(f+w)*C,r[2]=(x-y)*C,r[3]=0,r[4]=(f-w)*q,r[5]=(1-(u+p))*q,r[6]=(m+S)*q,r[7]=0,r[8]=(x+y)*A,r[9]=(m-S)*A,r[10]=(1-(u+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=sr.set(r[0],r[1],r[2]).length(),a=sr.set(r[4],r[5],r[6]).length(),o=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);let c=1/s,h=1/a,d=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Mn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),x,g;if(l)x=s/(a-s),g=a*s/(a-s);else if(o===Mn)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===fs)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Mn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),f=-(i+r)/(i-r),x,g;if(l)x=1/(a-s),g=a/(a-s);else if(o===Mn)x=-2/(a-s),g=-(a+s)/(a-s);else if(o===fs)x=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},sr=new P,bn=new tt,Sp=new P(0,0,0),Ep=new P(1,1,1),ui=new P,Oa=new P,Kt=new P,Vu=new tt,Hu=new Zn,dn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wp=0,Gu=new P,ar=new Zn,Hn=new tt,Ba=new P,is=new P,Tp=new P,qp=new Zn,Wu=new P(1,0,0),Xu=new P(0,1,0),Yu=new P(0,0,1),$u={type:"added"},Ap={type:"removed"},or={type:"childadded",child:null},Cc={type:"childremoved",child:null},vt=class n extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new dn,i=new Zn,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ve}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(is,Ba,this.up):Hn.lookAt(Ba,is,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Hn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),or.child=e,this.dispatchEvent(or),or.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new P,Gn=new P,Rc=new P,Wn=new P,lr=new P,cr=new P,Zu=new P,Ic=new P,Pc=new P,Dc=new P,Lc=new it,Uc=new it,Fc=new it,pi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Gn.subVectors(i,t),Rc.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(Gn),l=yn.dot(Rc),c=Gn.dot(Gn),h=Gn.dot(Rc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,x=(a*h-o*l)*u;return s.set(1-f-x,x,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Lc.setScalar(0),Uc.setScalar(0),Fc.setScalar(0),Lc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,i),Fc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Lc,s.x),a.addScaledVector(Uc,s.y),a.addScaledVector(Fc,s.z),a}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Gn.subVectors(e,t),yn.cross(Gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;lr.subVectors(r,i),cr.subVectors(s,i),Ic.subVectors(e,i);let l=lr.dot(Ic),c=cr.dot(Ic);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,r);let h=lr.dot(Pc),d=cr.dot(Pc);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(lr,a);Dc.subVectors(e,s);let f=lr.dot(Dc),x=cr.dot(Dc);if(x>=0&&f<=x)return t.copy(s);let g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(cr,o);let m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return Zu.subVectors(s,r),o=(d-h)/(d-h+(f-x)),t.copy(r).addScaledVector(Zu,o);let p=1/(m+g+u);return a=g*p,o=u*p,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},za={h:0,s:0,l:0};function Nc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=_p(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Nc(a,s,e+1/3),this.g=Nc(a,s,e),this.b=Nc(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Je.workingToColorSpace(Pt.copy(this),e),Math.round(Xe(Pt.r*255,0,255))*65536+Math.round(Xe(Pt.g*255,0,255))*256+Math.round(Xe(Pt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Pt.copy(this),t);let i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=At){Je.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,i=Pt.g,r=Pt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(za);let i=vc(di.h,za.h,t),r=vc(di.s,za.s,t),s=vc(di.l,za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new be;be.NAMES=Vd;var Cp=0,Rn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=Li,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==io&&(i.blendDst=this.blendDst),this.blendEquation!==Cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new P,ka=new ee,Rp=0,Vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var _s=class extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vs=class extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var qt=class extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ip=0,un=new tt,Oc=new vt,hr=new P,Qt=new en,rs=new en,Tt=new P,nn=class n extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?vs:_s)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Qt.min,rs.min),Qt.expandByPoint(Tt),Tt.addVectors(Qt.max,rs.max),Qt.expandByPoint(Tt)):(Qt.expandByPoint(rs.min),Qt.expandByPoint(rs.max))}Qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),Tt.add(hr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;let c=new P,h=new P,d=new P,u=new ee,f=new ee,x=new ee,g=new P,m=new P;function p(D,M,v){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,v),u.fromBufferAttribute(s,D),f.fromBufferAttribute(s,M),x.fromBufferAttribute(s,v),h.sub(c),d.sub(c),f.sub(u),x.sub(u);let R=1/(f.x*x.y-x.x*f.y);isFinite(R)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(R),o[D].add(g),o[M].add(g),o[v].add(g),l[D].add(m),l[M].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,M=S.length;D<M;++D){let v=S[D],R=v.start,B=v.count;for(let k=R,G=R+B;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new P,w=new P,C=new P,q=new P;function A(D){C.fromBufferAttribute(r,D),q.copy(C);let M=o[D];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),w.crossVectors(q,M);let R=w.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,R)}for(let D=0,M=S.length;D<M;++D){let v=S[D],R=v.start,B=v.count;for(let k=R,G=R+B;k<G;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)u[x++]=c[f++]}return new Vt(u,h,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new tt,Ii=new ho,Va=new gi,Ku=new P,Ha=new P,Ga=new P,Wa=new P,Bc=new P,Xa=new P,Qu=new P,Ya=new P,Ye=class extends vt{constructor(e=new nn,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Bc.fromBufferAttribute(d,e),a?Xa.addScaledVector(Bc,h):Xa.addScaledVector(Bc.sub(t),h))}t.add(Xa)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(Va.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Va,Ku)===null||Ii.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,C=y;w<C;w+=3){let q=o.getX(w),A=o.getX(w+1),D=o.getX(w+2);r=$a(this,p,e,i,c,h,d,q,A,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let S=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);r=$a(this,a,e,i,c,h,d,S,y,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,C=y;w<C;w+=3){let q=w,A=w+1,D=w+2;r=$a(this,p,e,i,c,h,d,q,A,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let S=m,y=m+1,w=m+2;r=$a(this,a,e,i,c,h,d,S,y,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Pp(n,e,t,i,r,s,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yn,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function $a(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ha),n.getVertexPosition(l,Ga),n.getVertexPosition(c,Wa);let h=Pp(n,e,t,i,Ha,Ga,Wa,Qu);if(h){let d=new P;pi.getBarycoord(Qu,Ha,Ga,Wa,d),r&&(h.uv=pi.getInterpolatedAttribute(r,o,l,c,d,new ee)),s&&(h.uv1=pi.getInterpolatedAttribute(s,o,l,c,d,new ee)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};pi.getNormal(Ha,Ga,Wa,u.normal),h.face=u,h.barycoord=d}return h}var In=class n extends nn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function x(g,m,p,S,y,w,C,q,A,D,M){let v=w/A,R=C/D,B=w/2,k=C/2,G=q/2,W=A+1,X=D+1,re=0,H=0,se=new P;for(let le=0;le<X;le++){let we=le*R-k;for(let He=0;He<W;He++){let $e=He*v-B;se[g]=$e*S,se[m]=we*y,se[p]=G,c.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[p]=q>0?1:-1,h.push(se.x,se.y,se.z),d.push(He/A),d.push(1-le/D),re+=1}}for(let le=0;le<D;le++)for(let we=0;we<A;we++){let He=u+we+W*le,$e=u+we+W*(le+1),Qe=u+(we+1)+W*(le+1),nt=u+(we+1)+W*le;l.push(He,$e,nt),l.push($e,Qe,nt),H+=6}o.addGroup(f,H,M),f+=H,u+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){let e={};for(let t=0;t<n.length;t++){let i=Yi(n[t]);for(let r in i)e[r]=i[r]}return e}function Dp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Tn={clone:Yi,merge:Dt},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,at=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},bs=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new P,ju=new ee,ed=new ee,yt=class extends bs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,ju,ed),t.subVectors(ed,ju)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ur=-90,dr=1,uo=class extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yt(ur,dr,e,t);r.layers=this.layers,this.add(r);let s=new yt(ur,dr,e,t);s.layers=this.layers,this.add(s);let a=new yt(ur,dr,e,t);a.layers=this.layers,this.add(a);let o=new yt(ur,dr,e,t);o.layers=this.layers,this.add(o);let l=new yt(ur,dr,e,t);l.layers=this.layers,this.add(l);let c=new yt(ur,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},ys=class extends Ht{constructor(e=[],t=Wi,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fo=class extends xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ys(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new In(5,5,5),s=new at({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Wt});s.uniforms.tEquirect.value=t;let a=new Ye(r,s),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=jt),new uo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},St=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fp={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ni=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Jn=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ms=class extends Ht{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ct,h=Ct,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ss=class extends Vt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new tt,td=new tt,Za=[],nd=new en,Np=new tt,ss=new Ye,as=new gi,Es=class extends Ye{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Np)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),nd.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(nd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),as.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(i),e.ray.intersectsSphere(as)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fr),td.multiplyMatrices(i,fr),ss.matrixWorld=td,ss.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let l=Za[a];l.instanceId=s,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ms(new Float32Array(r*this.count),r,this.count,Jo,wn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zc=new P,Op=new P,Bp=new Ve,kt=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=zc.subVectors(i,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bp.getNormalMatrix(e),r=this.coplanarPoint(zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new gi,zp=new ee(.5,.5),Ja=new P,br=class{constructor(e=new kt,t=new kt,i=new kt,r=new kt,s=new kt,a=new kt){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],x=s[8],g=s[9],m=s[10],p=s[11],S=s[12],y=s[13],w=s[14],C=s[15];if(r[0].setComponents(c-a,f-h,p-x,C-S).normalize(),r[1].setComponents(c+a,f+h,p+x,C+S).normalize(),r[2].setComponents(c+o,f+d,p+g,C+y).normalize(),r[3].setComponents(c-o,f-d,p-g,C-y).normalize(),i)r[4].setComponents(l,u,m,w).normalize(),r[5].setComponents(c-l,f-u,p-m,C-w).normalize();else if(r[4].setComponents(c-l,f-u,p-m,C-w).normalize(),t===Mn)r[5].setComponents(c+l,f+u,p+m,C+w).normalize();else if(t===fs)r[5].setComponents(l,u,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);let t=zp.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ws=class extends Ht{constructor(e,t,i=bi,r,s,a,o=Ct,l=Ct,c,h=mr,d=1){if(h!==mr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ts=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let h=i[r],u=i[r+1]-h,f=(a-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ee:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,r=[],s=[],a=[],o=new P,l=new tt;for(let f=0;f<=e;f++){let x=f/e;r[f]=this.getTangentAt(x,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Xe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Xe(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],f*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yr=class extends rn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ee){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},po=class extends yr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,r(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}var Ka=new P,kc=new yh,Vc=new yh,Hc=new yh,mo=class extends rn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Ka.subVectors(r[0],r[1]).add(r[0]),c=Ka);let d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Ka.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),kc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,x,g,m),Vc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,x,g,m),Hc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Vc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Hc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(kc.calc(l),Vc.calc(l),Hc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function id(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function kp(n,e){let t=1-n;return t*t*e}function Vp(n,e){return 2*(1-n)*n*e}function Hp(n,e){return n*n*e}function cs(n,e,t,i){return kp(n,e)+Vp(n,t)+Hp(n,i)}function Gp(n,e){let t=1-n;return t*t*t*e}function Wp(n,e){let t=1-n;return 3*t*t*n*e}function Xp(n,e){return 3*(1-n)*n*n*e}function Yp(n,e){return n*n*n*e}function hs(n,e,t,i,r){return Gp(n,e)+Wp(n,t)+Xp(n,i)+Yp(n,r)}var qs=class extends rn{constructor(e=new ee,t=new ee,i=new ee,r=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ee){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hs(e,r.x,s.x,a.x,o.x),hs(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xo=class extends rn{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hs(e,r.x,s.x,a.x,o.x),hs(e,r.y,s.y,a.y,o.y),hs(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},As=class extends rn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends rn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cs=class extends rn{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(cs(e,r.x,s.x,a.x),cs(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends rn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(cs(e,r.x,s.x,a.x),cs(e,r.y,s.y,a.y),cs(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rs=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(id(o,l.x,c.x,h.x,d.x),id(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ee().fromArray(r))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:po,CatmullRomCurve3:mo,CubicBezierCurve:qs,CubicBezierCurve3:xo,EllipseCurve:yr,LineCurve:As,LineCurve3:go,QuadraticBezierCurve:Cs,QuadraticBezierCurve3:_o,SplineCurve:Rs}),vo=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Kc[r.type]().fromJSON(r))}return this}},Mr=class extends vo{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new As(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Cs(this.currentPoint.clone(),new ee(e,t),new ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new qs(this.currentPoint.clone(),new ee(e,t),new ee(i,r),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Rs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new yr(e,t,i,r,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xi=class extends Mr{constructor(e){super(e),this.uuid=Pr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Mr().fromJSON(r))}return this}};function $p(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Hd(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=jp(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,d=l;for(let u=t;u<r;u+=t){let f=n[u],x=n[u+1];f<o&&(o=f),x<l&&(l=x),f>h&&(h=f),x>d&&(d=x)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Is(s,a,t,o,l,c,0),a}function Hd(n,e,t,i,r){let s;if(r===h1(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=rd(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=rd(a/i|0,n[a],n[a+1],s);return s&&Sr(s,s.next)&&(Ds(s),s=s.next),s}function Oi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Sr(t,t.next)||mt(t.prev,t,t.next)===0)){if(Ds(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Is(n,e,t,i,r,s,a){if(!n)return;!a&&s&&r1(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Jp(n,i,r,s):Zp(n)){e.push(l.i,n.i,c.i),Ds(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Kp(Oi(n),e),Is(n,e,t,i,r,s,2)):a===2&&Qp(n,e,t,i,r,s):Is(Oi(n),e,t,i,r,s,1);break}}}function Zp(n){let e=n.prev,t=n,i=n.next;if(mt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),d=Math.min(o,l,c),u=Math.max(r,s,a),f=Math.max(o,l,c),x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=d&&x.y<=f&&ls(r,o,s,l,a,c,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Jp(n,e,t,i){let r=n.prev,s=n,a=n.next;if(mt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,f=Math.min(o,l,c),x=Math.min(h,d,u),g=Math.max(o,l,c),m=Math.max(h,d,u),p=Qc(f,x,e,t,i),S=Qc(g,m,e,t,i),y=n.prevZ,w=n.nextZ;for(;y&&y.z>=p&&w&&w.z<=S;){if(y.x>=f&&y.x<=g&&y.y>=x&&y.y<=m&&y!==r&&y!==a&&ls(o,h,l,d,c,u,y.x,y.y)&&mt(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=f&&w.x<=g&&w.y>=x&&w.y<=m&&w!==r&&w!==a&&ls(o,h,l,d,c,u,w.x,w.y)&&mt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=g&&y.y>=x&&y.y<=m&&y!==r&&y!==a&&ls(o,h,l,d,c,u,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=S;){if(w.x>=f&&w.x<=g&&w.y>=x&&w.y<=m&&w!==r&&w!==a&&ls(o,h,l,d,c,u,w.x,w.y)&&mt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Kp(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Sr(i,r)&&Wd(i,t,t.next,r)&&Ps(i,r)&&Ps(r,i)&&(e.push(i.i,t.i,r.i),Ds(t),Ds(t.next),t=n=r),t=t.next}while(t!==n);return Oi(t)}function Qp(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o1(a,o)){let l=Xd(a,o);a=Oi(a,a.next),l=Oi(l,l.next),Is(a,e,t,i,r,s,0),Is(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function jp(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Hd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(a1(c))}r.sort(e1);for(let s=0;s<r.length;s++)t=t1(r[s],t);return t}function e1(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function t1(n,e){let t=n1(n,e);if(!t)return e;let i=Xd(t,n);return Oi(i,i.next),Oi(t,t.next)}function n1(n,e){let t=e,i=n.x,r=n.y,s=-1/0,a;if(Sr(n,t))return t;do{if(Sr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Gd(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);Ps(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&i1(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function i1(n,e){return mt(n.prev,n,e.prev)<0&&mt(e.next,n,n.next)<0}function r1(n,e,t,i){let r=n;do r.z===0&&(r.z=Qc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,s1(r)}function s1(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Qc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function a1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Gd(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function ls(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Gd(n,e,t,i,r,s,a,o)}function o1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!l1(n,e)&&(Ps(n,e)&&Ps(e,n)&&c1(n,e)&&(mt(n.prev,n,e.prev)||mt(n,e.prev,e))||Sr(n,e)&&mt(n.prev,n,n.next)>0&&mt(e.prev,e,e.next)>0)}function mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Sr(n,e){return n.x===e.x&&n.y===e.y}function Wd(n,e,t,i){let r=ja(mt(n,e,t)),s=ja(mt(n,e,i)),a=ja(mt(t,i,n)),o=ja(mt(t,i,e));return!!(r!==s&&a!==o||r===0&&Qa(n,t,e)||s===0&&Qa(n,i,e)||a===0&&Qa(t,n,i)||o===0&&Qa(t,e,i))}function Qa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ja(n){return n>0?1:n<0?-1:0}function l1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ps(n,e){return mt(n.prev,n,n.next)<0?mt(n,e,n.next)>=0&&mt(n,n.prev,e)>=0:mt(n,e,n.prev)<0||mt(n,n.next,e)<0}function c1(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xd(n,e){let t=jc(n.i,n.x,n.y),i=jc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function rd(n,e,t,i){let r=jc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ds(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function h1(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var eh=class{static triangulate(e,t,i=2){return $p(e,t,i)}},mi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];sd(e),ad(i,e);let a=e.length;t.forEach(sd);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,ad(i,t[l]);let o=eh.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function sd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ad(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Er=class n extends nn{constructor(e=new xi([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:u1,y,w=!1,C,q,A,D;p&&(y=p.getSpacedPoints(h),w=!0,u=!1,C=p.computeFrenetFrames(h,!1),q=new P,A=new P,D=new P),u||(m=0,f=0,x=0,g=0);let M=o.extractPoints(c),v=M.shape,R=M.holes;if(!mi.isClockWise(v)){v=v.reverse();for(let Q=0,T=R.length;Q<T;Q++){let K=R[Q];mi.isClockWise(K)&&(R[Q]=K.reverse())}}function k(Q){let K=10000000000000001e-36,ie=Q[0];for(let oe=1;oe<=Q.length;oe++){let te=oe%Q.length,Me=Q[te],de=Me.x-ie.x,_e=Me.y-ie.y,E=de*de+_e*_e,_=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(ie.x),Math.abs(ie.y)),F=K*_*_;if(E<=F){Q.splice(te,1),oe--;continue}ie=Me}}k(v),R.forEach(k);let G=R.length,W=v;for(let Q=0;Q<G;Q++){let T=R[Q];v=v.concat(T)}function X(Q,T,K){return T||We("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(T,K)}let re=v.length;function H(Q,T,K){let ie,oe,te,Me=Q.x-T.x,de=Q.y-T.y,_e=K.x-Q.x,E=K.y-Q.y,_=Me*Me+de*de,F=Me*E-de*_e;if(Math.abs(F)>Number.EPSILON){let V=Math.sqrt(_),Z=Math.sqrt(_e*_e+E*E),z=T.x-de/V,Ae=T.y+Me/V,fe=K.x-E/Z,Ce=K.y+_e/Z,Te=((fe-z)*E-(Ce-Ae)*_e)/(Me*E-de*_e);ie=z+Me*Te-Q.x,oe=Ae+de*Te-Q.y;let j=ie*ie+oe*oe;if(j<=2)return new ee(ie,oe);te=Math.sqrt(j/2)}else{let V=!1;Me>Number.EPSILON?_e>Number.EPSILON&&(V=!0):Me<-Number.EPSILON?_e<-Number.EPSILON&&(V=!0):Math.sign(de)===Math.sign(E)&&(V=!0),V?(ie=-de,oe=Me,te=Math.sqrt(_)):(ie=Me,oe=de,te=Math.sqrt(_/2))}return new ee(ie/te,oe/te)}let se=[];for(let Q=0,T=W.length,K=T-1,ie=Q+1;Q<T;Q++,K++,ie++)K===T&&(K=0),ie===T&&(ie=0),se[Q]=H(W[Q],W[K],W[ie]);let le=[],we,He=se.concat();for(let Q=0,T=G;Q<T;Q++){let K=R[Q];we=[];for(let ie=0,oe=K.length,te=oe-1,Me=ie+1;ie<oe;ie++,te++,Me++)te===oe&&(te=0),Me===oe&&(Me=0),we[ie]=H(K[ie],K[te],K[Me]);le.push(we),He=He.concat(we)}let $e;if(m===0)$e=mi.triangulateShape(W,R);else{let Q=[],T=[];for(let K=0;K<m;K++){let ie=K/m,oe=f*Math.cos(ie*Math.PI/2),te=x*Math.sin(ie*Math.PI/2)+g;for(let Me=0,de=W.length;Me<de;Me++){let _e=X(W[Me],se[Me],te);Ie(_e.x,_e.y,-oe),ie===0&&Q.push(_e)}for(let Me=0,de=G;Me<de;Me++){let _e=R[Me];we=le[Me];let E=[];for(let _=0,F=_e.length;_<F;_++){let V=X(_e[_],we[_],te);Ie(V.x,V.y,-oe),ie===0&&E.push(V)}ie===0&&T.push(E)}}$e=mi.triangulateShape(Q,T)}let Qe=$e.length,nt=x+g;for(let Q=0;Q<re;Q++){let T=u?X(v[Q],He[Q],nt):v[Q];w?(A.copy(C.normals[0]).multiplyScalar(T.x),q.copy(C.binormals[0]).multiplyScalar(T.y),D.copy(y[0]).add(A).add(q),Ie(D.x,D.y,D.z)):Ie(T.x,T.y,0)}for(let Q=1;Q<=h;Q++)for(let T=0;T<re;T++){let K=u?X(v[T],He[T],nt):v[T];w?(A.copy(C.normals[Q]).multiplyScalar(K.x),q.copy(C.binormals[Q]).multiplyScalar(K.y),D.copy(y[Q]).add(A).add(q),Ie(D.x,D.y,D.z)):Ie(K.x,K.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){let T=Q/m,K=f*Math.cos(T*Math.PI/2),ie=x*Math.sin(T*Math.PI/2)+g;for(let oe=0,te=W.length;oe<te;oe++){let Me=X(W[oe],se[oe],ie);Ie(Me.x,Me.y,d+K)}for(let oe=0,te=R.length;oe<te;oe++){let Me=R[oe];we=le[oe];for(let de=0,_e=Me.length;de<_e;de++){let E=X(Me[de],we[de],ie);w?Ie(E.x,E.y+y[h-1].y,y[h-1].x+K):Ie(E.x,E.y,d+K)}}}Y(),J();function Y(){let Q=r.length/3;if(u){let T=0,K=re*T;for(let ie=0;ie<Qe;ie++){let oe=$e[ie];qe(oe[2]+K,oe[1]+K,oe[0]+K)}T=h+m*2,K=re*T;for(let ie=0;ie<Qe;ie++){let oe=$e[ie];qe(oe[0]+K,oe[1]+K,oe[2]+K)}}else{for(let T=0;T<Qe;T++){let K=$e[T];qe(K[2],K[1],K[0])}for(let T=0;T<Qe;T++){let K=$e[T];qe(K[0]+re*h,K[1]+re*h,K[2]+re*h)}}i.addGroup(Q,r.length/3-Q,0)}function J(){let Q=r.length/3,T=0;ve(W,T),T+=W.length;for(let K=0,ie=R.length;K<ie;K++){let oe=R[K];ve(oe,T),T+=oe.length}i.addGroup(Q,r.length/3-Q,1)}function ve(Q,T){let K=Q.length;for(;--K>=0;){let ie=K,oe=K-1;oe<0&&(oe=Q.length-1);for(let te=0,Me=h+m*2;te<Me;te++){let de=re*te,_e=re*(te+1),E=T+ie+de,_=T+oe+de,F=T+oe+_e,V=T+ie+_e;Ge(E,_,F,V)}}}function Ie(Q,T,K){l.push(Q),l.push(T),l.push(K)}function qe(Q,T,K){ot(Q),ot(T),ot(K);let ie=r.length/3,oe=S.generateTopUV(i,r,ie-3,ie-2,ie-1);Fe(oe[0]),Fe(oe[1]),Fe(oe[2])}function Ge(Q,T,K,ie){ot(Q),ot(T),ot(ie),ot(T),ot(K),ot(ie);let oe=r.length/3,te=S.generateSideWallUV(i,r,oe-6,oe-3,oe-2,oe-1);Fe(te[0]),Fe(te[1]),Fe(te[3]),Fe(te[1]),Fe(te[2]),Fe(te[3])}function ot(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function Fe(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return d1(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Kc[r.type]().fromJSON(r)),new n(i,e.options)}},u1={generateTopUV:function(n,e,t,i,r){let s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ee(s,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[r*3],f=e[r*3+1],x=e[r*3+2],g=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-d),new ee(u,1-x),new ee(g,1-p)]:[new ee(o,1-l),new ee(h,1-d),new ee(f,1-x),new ee(m,1-p)]}};function d1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var sn=class n extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let y=0;y<c;y++){let w=y*d-s;x.push(w,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let y=S+c*p,w=S+c*(p+1),C=S+1+c*(p+1),q=S+1+c*p;f.push(y,w,q),f.push(w,C,q)}this.setIndex(f),this.setAttribute("position",new qt(x,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ls=class n extends nn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/r,f=new P,x=new ee;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){let p=s+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}d+=u}for(let g=0;g<r;g++){let m=g*(i+1);for(let p=0;p<i;p++){let S=p+m,y=S,w=S+i+1,C=S+i+2,q=S+1;o.push(y,w,q),o.push(w,C,q)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Us=class extends Rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Fs=class extends at{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ns=class extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wr=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bo=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function eo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function f1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Bi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yo=class extends Bi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yc:s=e,o=2*t-i;break;case $c:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:a=e,l=2*i-t;break;case $c:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(i-t)/(r-t),g=x*x,m=g*x,p=-u*m+2*u*g-u*x,S=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,y=(-1-f)*m+(1.5+f)*g+.5*x,w=f*m-f*g;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+S*a[c+C]+y*a[l+C]+w*a[d+C];return s}},Mo=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},So=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case to:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&f1(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===to,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let x=0;x!==i;++x){let g=t[d+x];if(g!==t[u+x]||g!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=ao;var _i=class extends an{constructor(e,t,i){super(e,t,i)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=us;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends an{constructor(e,t,i,r){super(e,t,i,r)}};Eo.prototype.ValueTypeName="color";var wo=class extends an{constructor(e,t,i,r){super(e,t,i,r)}};wo.prototype.ValueTypeName="number";var To=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Os=class extends an{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends an{constructor(e,t,i){super(e,t,i)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=us;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends an{constructor(e,t,i,r){super(e,t,i,r)}};qo.prototype.ValueTypeName="vector";var Ao=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yd=new Ao,Bs=class{constructor(e){this.manager=e!==void 0?e:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ki=class extends zi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gc=new tt,od=new P,ld=new P,zs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},th=class extends zs{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ms*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ks=class extends zi{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cd=new tt,os=new P,Wc=new P,nh=class extends zs{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),i.position.copy(os),Wc.copy(i.position),Wc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wc),i.updateMatrixWorld(),r.makeTranslation(-os.x,-os.y,-os.z),cd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd,i.coordinateSystem,i.reversedDepth)}},Vi=class extends zi{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Hi=class extends bs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends zs{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tr=class extends zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Co=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Mh="\\[\\]\\.:\\/",p1=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",m1="[^"+Mh.replace("\\.","")+"]",x1=/((?:WC+[\/:])*)/.source.replace("WC",Sh),g1=/(WCOD+)?/.source.replace("WCOD",m1),_1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),v1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),b1=new RegExp("^"+x1+g1+_1+v1+"$"),y1=["material","materials","bones","map"],rh=class{constructor(e,t,i){let r=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p1,"")}static parseTrackName(e){let t=b1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);y1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=rh;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H5=new Float32Array(1);var Hs=class{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Mr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,a){return this.currentPath.bezierCurveTo(e,t,i,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let S=[];for(let y=0,w=p.length;y<w;y++){let C=p[y],q=new xi;q.curves=C.curves,S.push(q)}return S}function i(p,S){let y=S.length,w=!1;for(let C=y-1,q=0;q<y;C=q++){let A=S[C],D=S[q],M=D.x-A.x,v=D.y-A.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(A=S[q],M=-M,D=S[C],v=-v),p.y<A.y||p.y>D.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{let R=v*(p.x-A.x)-M*(p.y-A.y);if(R===0)return!0;if(R<0)continue;w=!w}}else{if(p.y!==A.y)continue;if(D.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=D.x)return!0}}return w}let r=mi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l,c=[];if(s.length===1)return o=s[0],l=new xi,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;let d=[],u=[],f=[],x=0,g;u[x]=void 0,f[x]=[];for(let p=0,S=s.length;p<S;p++)o=s[p],g=o.getPoints(),a=r(g),a=e?!a:a,a?(!h&&u[x]&&x++,u[x]={s:new xi,p:g},u[x].s.curves=o.curves,h&&x++,f[x]=[]):f[x].push({h:o,p:g[0]});if(!u[0])return t(s);if(u.length>1){let p=!1,S=0;for(let y=0,w=u.length;y<w;y++)d[y]=[];for(let y=0,w=u.length;y<w;y++){let C=f[y];for(let q=0;q<C.length;q++){let A=C[q],D=!0;for(let M=0;M<u.length;M++)i(A.p,u[M].p)&&(y!==M&&S++,D?(D=!1,d[M].push(A)):p=!0);D&&d[y].push(A)}}S>0&&p===!1&&(f=d)}let m;for(let p=0,S=u.length;p<S;p++){l=u[p].s,c.push(l),m=f[p];for(let y=0,w=m.length;y<w;y++)l.holes.push(m[y].h)}return c}};function Eh(n,e,t,i){let r=M1(i);switch(t){case ph:return n*e;case Jo:return n*e/r.components*r.byteLength;case Ko:return n*e/r.components*r.byteLength;case Qo:return n*e*2/r.components*r.byteLength;case jo:return n*e*2/r.components*r.byteLength;case mh:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case el:return n*e*4/r.components*r.byteLength;case Ys:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:case rl:return Math.max(n,16)*Math.max(e,8)/4;case tl:case il:return Math.max(n,8)*Math.max(e,8)/2;case sl:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ql:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M1(n){switch(n){case En:case hh:return{byteLength:1,components:1};case Cr:case uh:case Mt:return{byteLength:2,components:1};case $o:case Zo:return{byteLength:2,components:4};case bi:case Yo:case wn:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function gf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function A1(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],g=d[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let g=d[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var C1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,u3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:C1,alphahash_pars_fragment:R1,alphamap_fragment:I1,alphamap_pars_fragment:P1,alphatest_fragment:D1,alphatest_pars_fragment:L1,aomap_fragment:U1,aomap_pars_fragment:F1,batching_pars_vertex:N1,batching_vertex:O1,begin_vertex:B1,beginnormal_vertex:z1,bsdfs:k1,iridescence_fragment:V1,bumpmap_pars_fragment:H1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:X1,clipping_planes_vertex:Y1,color_fragment:$1,color_pars_fragment:Z1,color_pars_vertex:J1,color_vertex:K1,common:Q1,cube_uv_reflection_fragment:j1,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:rm,colorspace_fragment:sm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:ym,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:bm,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Em,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:qm,lights_fragment_begin:Am,lights_fragment_maps:Cm,lights_fragment_end:Rm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Lm,map_fragment:Um,map_pars_fragment:Fm,map_particle_fragment:Nm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Vm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:Ym,normal_pars_fragment:$m,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:e3,iridescence_pars_fragment:t3,opaque_fragment:n3,packing:i3,premultiplied_alpha_fragment:r3,project_vertex:s3,dithering_fragment:a3,dithering_pars_fragment:o3,roughnessmap_fragment:l3,roughnessmap_pars_fragment:c3,shadowmap_pars_fragment:h3,shadowmap_pars_vertex:u3,shadowmap_vertex:d3,shadowmask_pars_fragment:f3,skinbase_vertex:p3,skinning_pars_vertex:m3,skinning_vertex:x3,skinnormal_vertex:g3,specularmap_fragment:_3,specularmap_pars_fragment:v3,tonemapping_fragment:b3,tonemapping_pars_fragment:y3,transmission_fragment:M3,transmission_pars_fragment:S3,uv_pars_fragment:E3,uv_pars_vertex:w3,uv_vertex:T3,worldpos_vertex:q3,background_vert:A3,background_frag:C3,backgroundCube_vert:R3,backgroundCube_frag:I3,cube_vert:P3,cube_frag:D3,depth_vert:L3,depth_frag:U3,distanceRGBA_vert:F3,distanceRGBA_frag:N3,equirect_vert:O3,equirect_frag:B3,linedashed_vert:z3,linedashed_frag:k3,meshbasic_vert:V3,meshbasic_frag:H3,meshlambert_vert:G3,meshlambert_frag:W3,meshmatcap_vert:X3,meshmatcap_frag:Y3,meshnormal_vert:$3,meshnormal_frag:Z3,meshphong_vert:J3,meshphong_frag:K3,meshphysical_vert:Q3,meshphysical_frag:j3,meshtoon_vert:e2,meshtoon_frag:t2,points_vert:n2,points_frag:i2,shadow_vert:r2,shadow_frag:s2,sprite_vert:a2,sprite_frag:o2},pe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Ln={basic:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new be(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Dt([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Dt([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Dt([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Dt([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Dt([pe.lights,pe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Ln.physical={uniforms:Dt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Il={r:0,b:0,g:0},$i=new dn,l2=new tt;function c2(n,e,t,i,r,s,a){let o=new be(0),l=s===!0?0:1,c,h,d=null,u=0,f=null;function x(y){let w=y.isScene===!0?y.background:null;return w&&w.isTexture&&(w=(y.backgroundBlurriness>0?t:e).get(w)),w}function g(y){let w=!1,C=x(y);C===null?p(o,l):C&&C.isColor&&(p(C,1),w=!0);let q=n.xr.getEnvironmentBlendMode();q==="additive"?i.buffers.color.setClear(0,0,0,1,a):q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,w){let C=x(w);C&&(C.isCubeTexture||C.mapping===Ws)?(h===void 0&&(h=new Ye(new In(1,1,1),new at({name:"BackgroundCubeMaterial",uniforms:Yi(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(q,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),$i.copy(w.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l2.makeRotationFromEuler($i)),h.material.toneMapped=Je.getTransfer(C.colorSpace)!==je,(d!==C||u!==C.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ye(new sn(2,2),new at({name:"BackgroundMaterial",uniforms:Yi(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Je.getTransfer(C.colorSpace)!==je,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,w){y.getRGB(Il,bh(n)),i.buffers.color.setClear(Il.r,Il.g,Il.b,w,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:g,addToRenderList:m,dispose:S}}function h2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,a=!1;function o(v,R,B,k,G){let W=!1,X=d(k,B,R);s!==X&&(s=X,c(s.object)),W=f(v,k,B,G),W&&x(v,k,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,w(v,R,B,k),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,R,B){let k=B.wireframe===!0,G=i[v.id];G===void 0&&(G={},i[v.id]=G);let W=G[R.id];W===void 0&&(W={},G[R.id]=W);let X=W[k];return X===void 0&&(X=u(l()),W[k]=X),X}function u(v){let R=[],B=[],k=[];for(let G=0;G<t;G++)R[G]=0,B[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,R,B,k){let G=s.attributes,W=R.attributes,X=0,re=B.getAttributes();for(let H in re)if(re[H].location>=0){let le=G[H],we=W[H];if(we===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),le===void 0||le.attribute!==we||we&&le.data!==we.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function x(v,R,B,k){let G={},W=R.attributes,X=0,re=B.getAttributes();for(let H in re)if(re[H].location>=0){let le=W[H];le===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));let we={};we.attribute=le,le&&le.data&&(we.data=le.data),G[H]=we,X++}s.attributes=G,s.attributesNum=X,s.index=k}function g(){let v=s.newAttributes;for(let R=0,B=v.length;R<B;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){let B=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;B[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),G[v]!==R&&(n.vertexAttribDivisor(v,R),G[v]=R)}function S(){let v=s.newAttributes,R=s.enabledAttributes;for(let B=0,k=R.length;B<k;B++)R[B]!==v[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function y(v,R,B,k,G,W,X){X===!0?n.vertexAttribIPointer(v,R,B,G,W):n.vertexAttribPointer(v,R,B,k,G,W)}function w(v,R,B,k){g();let G=k.attributes,W=B.getAttributes(),X=R.defaultAttributeValues;for(let re in W){let H=W[re];if(H.location>=0){let se=G[re];if(se===void 0&&(re==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),re==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){let le=se.normalized,we=se.itemSize,He=e.get(se);if(He===void 0)continue;let $e=He.buffer,Qe=He.type,nt=He.bytesPerElement,Y=Qe===n.INT||Qe===n.UNSIGNED_INT||se.gpuType===Yo;if(se.isInterleavedBufferAttribute){let J=se.data,ve=J.stride,Ie=se.offset;if(J.isInstancedInterleavedBuffer){for(let qe=0;qe<H.locationSize;qe++)p(H.location+qe,J.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let qe=0;qe<H.locationSize;qe++)m(H.location+qe);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let qe=0;qe<H.locationSize;qe++)y(H.location+qe,we/H.locationSize,Qe,le,ve*nt,(Ie+we/H.locationSize*qe)*nt,Y)}else{if(se.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)p(H.location+J,se.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let J=0;J<H.locationSize;J++)y(H.location+J,we/H.locationSize,Qe,le,we*nt,we/H.locationSize*J*nt,Y)}}else if(X!==void 0){let le=X[re];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(H.location,le);break;case 3:n.vertexAttrib3fv(H.location,le);break;case 4:n.vertexAttrib4fv(H.location,le);break;default:n.vertexAttrib1fv(H.location,le)}}}}S()}function C(){D();for(let v in i){let R=i[v];for(let B in R){let k=R[B];for(let G in k)h(k[G].object),delete k[G];delete R[B]}delete i[v]}}function q(v){if(i[v.id]===void 0)return;let R=i[v.id];for(let B in R){let k=R[B];for(let G in k)h(k[G].object),delete k[G];delete R[B]}delete i[v.id]}function A(v){for(let R in i){let B=i[R];if(B[v.id]===void 0)continue;let k=B[v.id];for(let G in k)h(k[G].object),delete k[G];delete B[v.id]}}function D(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:q,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function u2(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g]*u[g];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function d2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let D=A===Mt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==En&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!D)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,q=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:C,maxSamples:q}}function f2(n){let e=this,t=null,i=0,r=!1,s=!1,a=new kt,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?h(null):c();else{let S=s?0:i,y=S*4,w=p.clippingState||null;l.value=w,w=h(x,u,y,f);for(let C=0;C!==y;++C)w[C]=t[C];p.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,x){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let p=f+g*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=f;y!==g;++y,w+=4)a.copy(d[y]).applyMatrix4(S,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function p2(n){let e=new WeakMap;function t(a,o){return o===Go?a.mapping=Wi:o===Wo&&(a.mapping=Xi),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Go||o===Wo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new fo(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var yi=4,$d=[.125,.215,.35,.446,.526,.582],Ji=20,m2=256,Ks=new Hi,Zd=new be,wh=null,Th=0,qh=0,Ah=!1,x2=new P,Mi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=x2}=s;wh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Th,qh),this._renderer.xr.enabled=Ah,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Mt,format:pn,colorSpace:Fi,depthBuffer:!1},r=Jd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g2(s)),this._blurMaterial=v2(s,e,t),this._ggxMaterial=_2(s,e,t)}return r}_compileMaterial(e){let t=new Ye(new nn,e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,i,r,s){let l=new yt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Zd),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new In,new tn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Zd),p=!0);for(let y=0;y<6;y++){let w=y%3;w===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):w===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let C=this._cubeSize;Dr(r,w*C,y>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(g,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Wi||e.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kd());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ks)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=.05+c*.95,f=d*u,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-yi?i-x+yi:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,Dr(s,m,p,3*g,2*g),r.setRenderTarget(s),r.render(o,Ks),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Dr(e,m,p,3*g,2*g),r.setRenderTarget(e),r.render(o,Ks)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[r];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),g=s/x,m=isFinite(s)?1+Math.floor(h*g):Ji;m>Ji&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let p=[],S=0;for(let A=0;A<Ji;++A){let D=A/g,M=Math.exp(-D*D/2);p.push(M),A===0?S+=M:A<m&&(S+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-i;let w=this._sizeLods[r],C=3*w*(r>y-yi?r-y+yi:0),q=4*(this._cubeSize-w);Dr(t,C,q,3*w,2*w),l.setRenderTarget(t),l.render(d,Ks)}};function g2(n){let e=[],t=[],i=[],r=n,s=n-yi+1+$d.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>n-yi?l=$d[a-n+yi-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,g=3,m=2,p=1,S=new Float32Array(g*x*f),y=new Float32Array(m*x*f),w=new Float32Array(p*x*f);for(let q=0;q<f;q++){let A=q%3*2/3-1,D=q>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];S.set(M,g*x*q),y.set(u,m*x*q);let v=[q,q,q,q,q,q];w.set(v,p*x*q)}let C=new nn;C.setAttribute("position",new Vt(S,g)),C.setAttribute("uv",new Vt(y,m)),C.setAttribute("faceIndex",new Vt(w,p)),i.push(new Ye(C,null)),r>yi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Jd(n,e,t){let i=new xt(n,e,t);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _2(n,e,t){return new at({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function v2(n,e,t){let i=new Float32Array(Ji),r=new P(0,1,0);return new at({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Kd(){return new at({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Qd(){return new at({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b2(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Go||l===Wo,h=l===Wi||l===Xi;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Mi(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Mi(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function y2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&gr("WebGLRenderer: "+i+" extension not supported."),r}}}function M2(n,e,t,i){let r={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,x=d.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let y=0,w=S.length;y<w;y+=3){let C=S[y+0],q=S[y+1],A=S[y+2];u.push(C,q,q,A,A,C)}}else if(x!==void 0){let S=x.array;g=x.version;for(let y=0,w=S.length/3-1;y<w;y+=3){let C=y+0,q=y+1,A=y+2;u.push(C,q,q,A,A,C)}}else return;let m=new(_h(u)?vs:_s)(u,1);m.version=g;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function S2(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,s,u*a),t.update(f,i,1)}function c(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,s,u*a,x),t.update(f,i,x))}function h(u,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,i,1)}function d(u,f,x,g){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,g,0,x);let p=0;for(let S=0;S<x;S++)p+=f[S]*g[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function E2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function w2(n,e,t){let i=new WeakMap,r=new it;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let M=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],y=0;f===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let w=o.attributes.position.count*y,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let q=new Float32Array(w*C*4*d),A=new xs(q,w,C,d);A.type=wn,A.needsUpdate=!0;let D=y*4;for(let v=0;v<d;v++){let R=m[v],B=p[v],k=S[v],G=w*C*4*v;for(let W=0;W<R.count;W++){let X=W*D;f===!0&&(r.fromBufferAttribute(R,W),q[G+X+0]=r.x,q[G+X+1]=r.y,q[G+X+2]=r.z,q[G+X+3]=0),x===!0&&(r.fromBufferAttribute(B,W),q[G+X+4]=r.x,q[G+X+5]=r.y,q[G+X+6]=r.z,q[G+X+7]=0),g===!0&&(r.fromBufferAttribute(k,W),q[G+X+8]=r.x,q[G+X+9]=r.y,q[G+X+10]=r.z,q[G+X+11]=k.itemSize===4?r.w:1)}}u={count:d,texture:A,size:new ee(w,C)},i.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function T2(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var _f=new Ht,jd=new ws(1,1),vf=new xs,bf=new co,yf=new ys,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function Fr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ef[r];if(s===void 0&&(s=new Float32Array(r),ef[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ll(n,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function q2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function C2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function R2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function I2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),wt(t,i)}}function P2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;rf.set(i),n.uniformMatrix3fv(this.addr,!1,rf),wt(t,i)}}function D2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),wt(t,i)}}function L2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function F2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function N2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function O2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function z2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function k2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function V2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jd.compareFunction=xh,s=jd):s=_f,t.setTexture2D(e||s,r)}function H2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bf,r)}function G2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yf,r)}function W2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vf,r)}function X2(n){switch(n){case 5126:return q2;case 35664:return A2;case 35665:return C2;case 35666:return R2;case 35674:return I2;case 35675:return P2;case 35676:return D2;case 5124:case 35670:return L2;case 35667:case 35671:return U2;case 35668:case 35672:return F2;case 35669:case 35673:return N2;case 5125:return O2;case 36294:return B2;case 36295:return z2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return H2;case 35680:case 36300:case 36308:case 36293:return G2;case 36289:case 36303:case 36311:case 36292:return W2}}function Y2(n,e){n.uniform1fv(this.addr,e)}function $2(n,e){let t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Z2(n,e){let t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function J2(n,e){let t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function K2(n,e){let t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q2(n,e){let t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j2(n,e){let t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ex(n,e){n.uniform1iv(this.addr,e)}function tx(n,e){n.uniform2iv(this.addr,e)}function nx(n,e){n.uniform3iv(this.addr,e)}function ix(n,e){n.uniform4iv(this.addr,e)}function rx(n,e){n.uniform1uiv(this.addr,e)}function sx(n,e){n.uniform2uiv(this.addr,e)}function ax(n,e){n.uniform3uiv(this.addr,e)}function ox(n,e){n.uniform4uiv(this.addr,e)}function lx(n,e,t){let i=this.cache,r=e.length,s=Ll(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||_f,s[a])}function cx(n,e,t){let i=this.cache,r=e.length,s=Ll(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bf,s[a])}function hx(n,e,t){let i=this.cache,r=e.length,s=Ll(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||yf,s[a])}function ux(n,e,t){let i=this.cache,r=e.length,s=Ll(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||vf,s[a])}function dx(n){switch(n){case 5126:return Y2;case 35664:return $2;case 35665:return Z2;case 35666:return J2;case 35674:return K2;case 35675:return Q2;case 35676:return j2;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}var Rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X2(t.type)}},Ih=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dx(t.type)}},Ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function af(n,e){n.seq.push(e),n.map[e.id]=e}function fx(n,e,t){let i=n.name,r=i.length;for(Ch.lastIndex=0;;){let s=Ch.exec(i),a=Ch.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){af(t,c===void 0?new Rh(o,n,e):new Ih(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Ph(o),af(t,d)),t=d}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);fx(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function of(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var px=37297,mx=0;function xx(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var lf=new Ve;function gx(n){Je._getMatrix(lf,Je.workingColorSpace,n);let e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ds:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xx(n.getShaderSource(e),o)}else return s}function _x(n,e){let t=gx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vx(n,e){let t;switch(e){case qr:t="Linear";break;case Bo:t="Reinhard";break;case zo:t="Cineon";break;case ko:t="ACESFilmic";break;case Ho:t="AgX";break;case Ar:t="Neutral";break;case Vo:t="Custom";break;default:Be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pl=new P;function bx(){Je.getLuminanceCoefficients(Pl);let n=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Mx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Sx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Qs(n){return n!==""}function hf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(n){return n.replace(Ex,Tx)}var wx=new Map;function Tx(n,e){let t=ke[e];if(t===void 0){let i=wx.get(e);if(i!==void 0)t=ke[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dh(t)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(qx,Ax)}function Ax(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ff(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gi?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case Xi:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ix(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Px(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ad:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function Dx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lx(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Cx(t),c=Rx(t),h=Ix(t),d=Px(t),u=Dx(t),f=yx(t),x=Mx(s),g=r.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Qn?vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,_x("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Dh(a),a=hf(a,t),a=uf(a,t),o=Dh(o),o=hf(o,t),o=uf(o,t),a=df(a),o=df(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+a,w=S+p+o,C=of(r,r.VERTEX_SHADER,y),q=of(r,r.FRAGMENT_SHADER,w);r.attachShader(g,C),r.attachShader(g,q),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(R){if(n.debug.checkShaderErrors){let B=r.getProgramInfoLog(g)||"",k=r.getShaderInfoLog(C)||"",G=r.getShaderInfoLog(q)||"",W=B.trim(),X=k.trim(),re=G.trim(),H=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,q);else{let le=cf(r,C,"vertex"),we=cf(r,q,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+le+`
`+we)}else W!==""?Be("WebGLProgram: Program Info Log:",W):(X===""||re==="")&&(se=!1);se&&(R.diagnostics={runnable:H,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:re,prefix:p}})}r.deleteShader(C),r.deleteShader(q),D=new Lr(r,g),M=Sx(r,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,px)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=q,this}var Ux=0,Lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Uh(e),t.set(e,i)),i}},Uh=class{constructor(e){this.id=Ux++,this.code=e,this.usedTimes=0}};function Fx(n,e,t,i,r,s,a){let o=new gs,l=new Lh,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,f=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,B,k){let G=B.fog,W=k.geometry,X=M.isMeshStandardMaterial?B.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),H=re&&re.mapping===Ws?re.image.height:null,se=x[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&Be("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,we=le!==void 0?le.length:0,He=0;W.morphAttributes.position!==void 0&&(He=1),W.morphAttributes.normal!==void 0&&(He=2),W.morphAttributes.color!==void 0&&(He=3);let $e,Qe,nt,Y;if(se){let rt=Ln[se];$e=rt.vertexShader,Qe=rt.fragmentShader}else $e=M.vertexShader,Qe=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);let J=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,qe=k.isBatchedMesh===!0,Ge=!!M.map,ot=!!M.matcap,Fe=!!re,Q=!!M.aoMap,T=!!M.lightMap,K=!!M.bumpMap,ie=!!M.normalMap,oe=!!M.displacementMap,te=!!M.emissiveMap,Me=!!M.metalnessMap,de=!!M.roughnessMap,_e=M.anisotropy>0,E=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,V=M.sheen>0,Z=M.transmission>0,z=_e&&!!M.anisotropyMap,Ae=E&&!!M.clearcoatMap,fe=E&&!!M.clearcoatNormalMap,Ce=E&&!!M.clearcoatRoughnessMap,Te=F&&!!M.iridescenceMap,j=F&&!!M.iridescenceThicknessMap,ce=V&&!!M.sheenColorMap,Ue=V&&!!M.sheenRoughnessMap,De=!!M.specularMap,ge=!!M.specularColorMap,Oe=!!M.specularIntensityMap,I=Z&&!!M.transmissionMap,me=Z&&!!M.thicknessMap,he=!!M.gradientMap,ue=!!M.alphaMap,ne=M.alphaTest>0,$=!!M.alphaHash,Se=!!M.extensions,ze=Qn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ze=n.toneMapping);let ht={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:Qe,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:qe,batchingColor:qe&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Fi,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:ot,envMap:Fe,envMapMode:Fe&&re.mapping,envMapCubeUVHeight:H,aoMap:Q,lightMap:T,bumpMap:K,normalMap:ie,displacementMap:u&&oe,emissiveMap:te,normalMapObjectSpace:ie&&M.normalMapType===Pd,normalMapTangentSpace:ie&&M.normalMapType===Rl,metalnessMap:Me,roughnessMap:de,anisotropy:_e,anisotropyMap:z,clearcoat:E,clearcoatMap:Ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:F,iridescenceMap:Te,iridescenceThicknessMap:j,sheen:V,sheenColorMap:ce,sheenRoughnessMap:Ue,specularMap:De,specularColorMap:ge,specularIntensityMap:Oe,transmission:Z,transmissionMap:I,thicknessMap:me,gradientMap:he,opaque:M.transparent===!1&&M.blending===Li&&M.alphaToCoverage===!1,alphaMap:ue,alphaTest:ne,alphaHash:$,combine:M.combine,mapUv:Ge&&g(M.map.channel),aoMapUv:Q&&g(M.aoMap.channel),lightMapUv:T&&g(M.lightMap.channel),bumpMapUv:K&&g(M.bumpMap.channel),normalMapUv:ie&&g(M.normalMap.channel),displacementMapUv:oe&&g(M.displacementMap.channel),emissiveMapUv:te&&g(M.emissiveMap.channel),metalnessMapUv:Me&&g(M.metalnessMap.channel),roughnessMapUv:de&&g(M.roughnessMap.channel),anisotropyMapUv:z&&g(M.anisotropyMap.channel),clearcoatMapUv:Ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(M.sheenRoughnessMap.channel),specularMapUv:De&&g(M.specularMap.channel),specularColorMapUv:ge&&g(M.specularColorMap.channel),specularIntensityMapUv:Oe&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:me&&g(M.thicknessMap.channel),alphaMapUv:ue&&g(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ie||_e),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ge||ue),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:He,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===je,decodeVideoTextureEmissive:te&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(v,M),y(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function y(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function w(M){let v=x[M.type],R;if(v){let B=Ln[v];R=Tn.clone(B.uniforms)}else R=M.uniforms;return R}function C(M,v){let R;for(let B=0,k=h.length;B<k;B++){let G=h[B];if(G.cacheKey===v){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Lx(n,v,M,s),h.push(R)),R}function q(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:C,releaseProgram:q,releaseShaderCache:A,programs:h,dispose:D}}function Nx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,u,f,x,g,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function o(d,u,f,x,g,m){let p=a(d,u,f,x,g,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,u,f,x,g,m){let p=a(d,u,f,x,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Ox),i.length>1&&i.sort(u||pf),r.length>1&&r.sort(u||pf)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Bx(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new mf,n.set(i,[a])):r>=s.length?(a=new mf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function zx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new be};break;case"SpotLight":t={position:new P,direction:new P,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function kx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Vx=0;function Hx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gx(n){let e=new zx,t=kx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let r=new P,s=new tt,a=new tt;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,S=0,y=0,w=0,C=0,q=0,A=0;c.sort(Hx);for(let M=0,v=c.length;M<v;M++){let R=c[M],B=R.color,k=R.intensity,G=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*k,d+=B.g*k,u+=B.b*k;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],k);A++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let re=R.shadow,H=t.get(R);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=R.shadow.matrix,S++}i.directional[f]=X,f++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(B).multiplyScalar(k),X.distance=G,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[g]=X;let re=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,re.updateMatrices(R),R.castShadow&&q++),i.spotLightMatrix[g]=re.matrix,R.castShadow){let H=t.get(R);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=W,w++}g++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(B).multiplyScalar(k),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=X,m++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let re=R.shadow,H=t.get(R);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=W,i.pointShadowMatrix[x]=R.shadow.matrix,y++}i.point[x]=X,x++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(k),X.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.directionalLength!==f||D.pointLength!==x||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==w||D.numSpotMaps!==C||D.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+C-q,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=A,D.directionalLength=f,D.pointLength=x,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=w,D.numSpotMaps=C,D.numLightProbes=A,i.version=Vx++)}function l(c,h){let d=0,u=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let y=c[p];if(y.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),d++}else if(y.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=i.point[u];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function xf(n){let e=new Gx(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Wx(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new xf(n),e.set(r,[o])):s>=a.length?(o=new xf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $x(n,e,t){let i=new br,r=new ee,s=new ee,a=new it,o=new wr({depthPacking:Cl}),l=new bo,c={},h=t.maxTextureSize,d={[Yn]:Rt,[Rt]:Yn,[Pn]:Pn},u=new at({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Xx,fragmentShader:Yx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new nn;x.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ye(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(q,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||q.length===0)return;let M=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Wt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=p!==fn&&this.type===fn,G=p===fn&&this.type!==fn;for(let W=0,X=q.length;W<X;W++){let re=q[W],H=re.shadow;if(H===void 0){Be("WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||k===!0||G===!0){let we=this.type!==fn?{minFilter:Ct,magFilter:Ct}:{};H.map!==null&&H.map.dispose(),H.map=new xt(r.x,r.y,we),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let le=H.getViewportCount();for(let we=0;we<le;we++){let He=H.getViewport(we);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),B.viewport(a),H.updateMatrices(re,we),i=H.getFrustum(),w(A,D,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&S(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,v,R)};function S(q,A){let D=e.update(g);u.defines.VSM_SAMPLES!==q.blurSamples&&(u.defines.VSM_SAMPLES=q.blurSamples,f.defines.VSM_SAMPLES=q.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),q.mapPass===null&&(q.mapPass=new xt(r.x,r.y)),u.uniforms.shadow_pass.value=q.map.texture,u.uniforms.resolution.value=q.mapSize,u.uniforms.radius.value=q.radius,n.setRenderTarget(q.mapPass),n.clear(),n.renderBufferDirect(A,null,D,u,g,null),f.uniforms.shadow_pass.value=q.mapPass.texture,f.uniforms.resolution.value=q.mapSize,f.uniforms.radius.value=q.radius,n.setRenderTarget(q.map),n.clear(),n.renderBufferDirect(A,null,D,f,g,null)}function y(q,A,D,M){let v=null,R=D.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(R!==void 0)v=R;else if(v=D.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=v.uuid,k=A.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let W=G[k];W===void 0&&(W=v.clone(),G[k]=W,A.addEventListener("dispose",C)),v=W}if(v.visible=A.visible,v.wireframe=A.wireframe,M===fn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let B=n.properties.get(v);B.light=D}return v}function w(q,A,D,M,v){if(q.visible===!1)return;if(q.layers.test(A.layers)&&(q.isMesh||q.isLine||q.isPoints)&&(q.castShadow||q.receiveShadow&&v===fn)&&(!q.frustumCulled||i.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,q.matrixWorld);let k=e.update(q),G=q.material;if(Array.isArray(G)){let W=k.groups;for(let X=0,re=W.length;X<re;X++){let H=W[X],se=G[H.materialIndex];if(se&&se.visible){let le=y(q,se,M,v);q.onBeforeShadow(n,q,A,D,k,le,H),n.renderBufferDirect(D,null,k,le,q,H),q.onAfterShadow(n,q,A,D,k,le,H)}}}else if(G.visible){let W=y(q,G,M,v);q.onBeforeShadow(n,q,A,D,k,W,null),n.renderBufferDirect(D,null,k,W,q,null),q.onAfterShadow(n,q,A,D,k,W,null)}}let B=q.children;for(let k=0,G=B.length;k<G;k++)w(B[k],A,D,M,v)}function C(q){q.target.removeEventListener("dispose",C);for(let D in c){let M=c[D],v=q.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Zx={[Io]:Po,[Do]:Fo,[Lo]:No,[Ui]:Uo,[Po]:Io,[Fo]:Do,[No]:Lo,[Uo]:Ui};function Jx(n,e){function t(){let I=!1,me=new it,he=null,ue=new it(0,0,0,0);return{setMask:function(ne){he!==ne&&!I&&(n.colorMask(ne,ne,ne,ne),he=ne)},setLocked:function(ne){I=ne},setClear:function(ne,$,Se,ze,ht){ht===!0&&(ne*=ze,$*=ze,Se*=ze),me.set(ne,$,Se,ze),ue.equals(me)===!1&&(n.clearColor(ne,$,Se,ze),ue.copy(me))},reset:function(){I=!1,he=null,ue.set(-1,0,0,0)}}}function i(){let I=!1,me=!1,he=null,ue=null,ne=null;return{setReversed:function($){if(me!==$){let Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),me=$;let ze=ne;ne=null,this.setClear(ze)}},getReversed:function(){return me},setTest:function($){$?J(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function($){he!==$&&!I&&(n.depthMask($),he=$)},setFunc:function($){if(me&&($=Zx[$]),ue!==$){switch($){case Io:n.depthFunc(n.NEVER);break;case Po:n.depthFunc(n.ALWAYS);break;case Do:n.depthFunc(n.LESS);break;case Ui:n.depthFunc(n.LEQUAL);break;case Lo:n.depthFunc(n.EQUAL);break;case Uo:n.depthFunc(n.GEQUAL);break;case Fo:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=$}},setLocked:function($){I=$},setClear:function($){ne!==$&&(me&&($=1-$),n.clearDepth($),ne=$)},reset:function(){I=!1,he=null,ue=null,ne=null,me=!1}}}function r(){let I=!1,me=null,he=null,ue=null,ne=null,$=null,Se=null,ze=null,ht=null;return{setTest:function(rt){I||(rt?J(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(rt){me!==rt&&!I&&(n.stencilMask(rt),me=rt)},setFunc:function(rt,qn,xn){(he!==rt||ue!==qn||ne!==xn)&&(n.stencilFunc(rt,qn,xn),he=rt,ue=qn,ne=xn)},setOp:function(rt,qn,xn){($!==rt||Se!==qn||ze!==xn)&&(n.stencilOp(rt,qn,xn),$=rt,Se=qn,ze=xn)},setLocked:function(rt){I=rt},setClear:function(rt){ht!==rt&&(n.clearStencil(rt),ht=rt)},reset:function(){I=!1,me=null,he=null,ue=null,ne=null,$=null,Se=null,ze=null,ht=null}}}let s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,y=null,w=null,C=null,q=null,A=new be(0,0,0),D=0,M=!1,v=null,R=null,B=null,k=null,G=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,re=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=re>=2);let se=null,le={},we=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),$e=new it().fromArray(we),Qe=new it().fromArray(He);function nt(I,me,he,ue){let ne=new Uint8Array(4),$=n.createTexture();n.bindTexture(I,$),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<he;Se++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(me+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return $}let Y={};Y[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(Ui),K(!1),ie(sh),J(n.CULL_FACE),Q(Wt);function J(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function ve(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ie(I,me){return d[I]!==me?(n.bindFramebuffer(I,me),d[I]=me,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=me),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=me),!0):!1}function qe(I,me){let he=f,ue=!1;if(I){he=u.get(me),he===void 0&&(he=[],u.set(me,he));let ne=I.textures;if(he.length!==ne.length||he[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Se=ne.length;$<Se;$++)he[$]=n.COLOR_ATTACHMENT0+$;he.length=ne.length,ue=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,ue=!0);ue&&n.drawBuffers(he)}function Ge(I){return x!==I?(n.useProgram(I),x=I,!0):!1}let ot={[Cn]:n.FUNC_ADD,[dd]:n.FUNC_SUBTRACT,[fd]:n.FUNC_REVERSE_SUBTRACT};ot[pd]=n.MIN,ot[md]=n.MAX;let Fe={[xd]:n.ZERO,[Gs]:n.ONE,[gd]:n.SRC_COLOR,[no]:n.SRC_ALPHA,[Sd]:n.SRC_ALPHA_SATURATE,[yd]:n.DST_COLOR,[vd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[io]:n.ONE_MINUS_SRC_ALPHA,[Md]:n.ONE_MINUS_DST_COLOR,[bd]:n.ONE_MINUS_DST_ALPHA,[Ed]:n.CONSTANT_COLOR,[wd]:n.ONE_MINUS_CONSTANT_COLOR,[Td]:n.CONSTANT_ALPHA,[qd]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(I,me,he,ue,ne,$,Se,ze,ht,rt){if(I===Wt){g===!0&&(ve(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),I!==Ro){if(I!==m||rt!==M){if((p!==Cn||w!==Cn)&&(n.blendEquation(n.FUNC_ADD),p=Cn,w=Cn),rt)switch(I){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kn:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",I);break}else switch(I){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",I);break}S=null,y=null,C=null,q=null,A.set(0,0,0),D=0,m=I,M=rt}return}ne=ne||me,$=$||he,Se=Se||ue,(me!==p||ne!==w)&&(n.blendEquationSeparate(ot[me],ot[ne]),p=me,w=ne),(he!==S||ue!==y||$!==C||Se!==q)&&(n.blendFuncSeparate(Fe[he],Fe[ue],Fe[$],Fe[Se]),S=he,y=ue,C=$,q=Se),(ze.equals(A)===!1||ht!==D)&&(n.blendColor(ze.r,ze.g,ze.b,ht),A.copy(ze),D=ht),m=I,M=!1}function T(I,me){I.side===Pn?ve(n.CULL_FACE):J(n.CULL_FACE);let he=I.side===Rt;me&&(he=!he),K(he),I.blending===Li&&I.transparent===!1?Q(Wt):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),te(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function ie(I){I!==hd?(J(n.CULL_FACE),I!==R&&(I===sh?n.cullFace(n.BACK):I===ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),R=I}function oe(I){I!==B&&(X&&n.lineWidth(I),B=I)}function te(I,me,he){I?(J(n.POLYGON_OFFSET_FILL),(k!==me||G!==he)&&(n.polygonOffset(me,he),k=me,G=he)):ve(n.POLYGON_OFFSET_FILL)}function Me(I){I?J(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function de(I){I===void 0&&(I=n.TEXTURE0+W-1),se!==I&&(n.activeTexture(I),se=I)}function _e(I,me,he){he===void 0&&(se===null?he=n.TEXTURE0+W-1:he=se);let ue=le[he];ue===void 0&&(ue={type:void 0,texture:void 0},le[he]=ue),(ue.type!==I||ue.texture!==me)&&(se!==he&&(n.activeTexture(he),se=he),n.bindTexture(I,me||Y[I]),ue.type=I,ue.texture=me)}function E(){let I=le[se];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function V(){try{n.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function fe(){try{n.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Ce(){try{n.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Te(){try{n.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function j(){try{n.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ce(I){$e.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function Ue(I){Qe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Qe.copy(I))}function De(I,me){let he=c.get(me);he===void 0&&(he=new WeakMap,c.set(me,he));let ue=he.get(I);ue===void 0&&(ue=n.getUniformBlockIndex(me,I.name),he.set(I,ue))}function ge(I,me){let ue=c.get(me).get(I);l.get(me)!==ue&&(n.uniformBlockBinding(me,ue,I.__bindingPointIndex),l.set(me,ue))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,le={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,y=null,w=null,C=null,q=null,A=new be(0,0,0),D=0,M=!1,v=null,R=null,B=null,k=null,G=null,$e.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ve,bindFramebuffer:Ie,drawBuffers:qe,useProgram:Ge,setBlending:Q,setMaterial:T,setFlipSided:K,setCullFace:ie,setLineWidth:oe,setPolygonOffset:te,setScissorTest:Me,activeTexture:de,bindTexture:_e,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Te,texImage3D:j,updateUBOMapping:De,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Ce,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:Ae,scissor:ce,viewport:Ue,reset:Oe}}function Kx(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return f?new OffscreenCanvas(E,_):ps("canvas")}function g(E,_,F){let V=1,Z=_e(E);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let z=Math.floor(V*Z.width),Ae=Math.floor(V*Z.height);d===void 0&&(d=x(z,Ae));let fe=_?x(z,Ae):d;return fe.width=z,fe.height=Ae,fe.getContext("2d").drawImage(E,0,0,z,Ae),Be("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+Ae+")."),fe}else return"data"in E&&Be("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,_,F,V,Z=!1){if(E!==null){if(n[E]!==void 0)return n[E];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let z=_;if(_===n.RED&&(F===n.FLOAT&&(z=n.R32F),F===n.HALF_FLOAT&&(z=n.R16F),F===n.UNSIGNED_BYTE&&(z=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.R8UI),F===n.UNSIGNED_SHORT&&(z=n.R16UI),F===n.UNSIGNED_INT&&(z=n.R32UI),F===n.BYTE&&(z=n.R8I),F===n.SHORT&&(z=n.R16I),F===n.INT&&(z=n.R32I)),_===n.RG&&(F===n.FLOAT&&(z=n.RG32F),F===n.HALF_FLOAT&&(z=n.RG16F),F===n.UNSIGNED_BYTE&&(z=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RG8UI),F===n.UNSIGNED_SHORT&&(z=n.RG16UI),F===n.UNSIGNED_INT&&(z=n.RG32UI),F===n.BYTE&&(z=n.RG8I),F===n.SHORT&&(z=n.RG16I),F===n.INT&&(z=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(z=n.RGB16UI),F===n.UNSIGNED_INT&&(z=n.RGB32UI),F===n.BYTE&&(z=n.RGB8I),F===n.SHORT&&(z=n.RGB16I),F===n.INT&&(z=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),F===n.UNSIGNED_INT&&(z=n.RGBA32UI),F===n.BYTE&&(z=n.RGBA8I),F===n.SHORT&&(z=n.RGBA16I),F===n.INT&&(z=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),_===n.RGBA){let Ae=Z?ds:Je.getTransfer(V);F===n.FLOAT&&(z=n.RGBA32F),F===n.HALF_FLOAT&&(z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(z=Ae===je?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function w(E,_){let F;return E?_===null||_===bi||_===Rr?F=n.DEPTH24_STENCIL8:_===wn?F=n.DEPTH32F_STENCIL8:_===Cr&&(F=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bi||_===Rr?F=n.DEPTH_COMPONENT24:_===wn?F=n.DEPTH_COMPONENT32F:_===Cr&&(F=n.DEPTH_COMPONENT16),F}function C(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function q(E){let _=E.target;_.removeEventListener("dispose",q),D(_),_.isVideoTexture&&h.delete(_)}function A(E){let _=E.target;_.removeEventListener("dispose",A),v(_)}function D(E){let _=i.get(E);if(_.__webglInit===void 0)return;let F=E.source,V=u.get(F);if(V){let Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(E),Object.keys(V).length===0&&u.delete(F)}i.remove(E)}function M(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let F=E.source,V=u.get(F);delete V[_.__cacheKey],a.memory.textures--}function v(E){let _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)n.deleteFramebuffer(_.__webglFramebuffer[V]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=E.textures;for(let V=0,Z=F.length;V<Z;V++){let z=i.get(F[V]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(F[V])}i.remove(E)}let R=0;function B(){R=0}function k(){let E=R;return E>=r.maxTextures&&Be("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function G(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function W(E,_){let F=i.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let V=E.image;if(V===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,_);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(E,_){let F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,_);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function re(E,_){let F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function H(E,_){let F=i.get(E);if(E.version>0&&F.__version!==E.version){J(F,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let se={[ro]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[so]:n.MIRRORED_REPEAT},le={[Ct]:n.NEAREST,[Rd]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},we={[Dd]:n.NEVER,[Bd]:n.ALWAYS,[Ld]:n.LESS,[xh]:n.LEQUAL,[Ud]:n.EQUAL,[Od]:n.GEQUAL,[Fd]:n.GREATER,[Nd]:n.NOTEQUAL};function He(E,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===Xo||_.magFilter===Xs||_.magFilter===Dn||_.minFilter===jt||_.minFilter===Xo||_.minFilter===Xs||_.minFilter===Dn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,se[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,se[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,se[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,le[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ct||_.minFilter!==Xs&&_.minFilter!==Dn||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $e(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",q));let V=_.source,Z=u.get(V);Z===void 0&&(Z={},u.set(V,Z));let z=G(_);if(z!==E.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[z].usedTimes++;let Ae=Z[E.__cacheKey];Ae!==void 0&&(Z[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(_)),E.__cacheKey=z,E.__webglTexture=Z[z].texture}return F}function Qe(E,_,F){return Math.floor(Math.floor(E/F)/_)}function nt(E,_,F,V){let z=E.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{z.sort((j,ce)=>j.start-ce.start);let Ae=0;for(let j=1;j<z.length;j++){let ce=z[Ae],Ue=z[j],De=ce.start+ce.count,ge=Qe(Ue.start,_.width,4),Oe=Qe(ce.start,_.width,4);Ue.start<=De+1&&ge===Oe&&Qe(Ue.start+Ue.count-1,_.width,4)===ge?ce.count=Math.max(ce.count,Ue.start+Ue.count-ce.start):(++Ae,z[Ae]=Ue)}z.length=Ae+1;let fe=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let j=0,ce=z.length;j<ce;j++){let Ue=z[j],De=Math.floor(Ue.start/4),ge=Math.ceil(Ue.count/4),Oe=De%_.width,I=Math.floor(De/_.width),me=ge,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Oe,I,me,he,F,V,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Y(E,_,F){let V=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=n.TEXTURE_3D);let Z=$e(E,_),z=_.source;t.bindTexture(V,E.__webglTexture,n.TEXTURE0+F);let Ae=i.get(z);if(z.version!==Ae.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);let fe=Je.getPrimaries(Je.workingColorSpace),Ce=_.colorSpace===jn?null:Je.getPrimaries(_.colorSpace),Te=_.colorSpace===jn||fe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let j=g(_.image,!1,r.maxTextureSize);j=de(_,j);let ce=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type),De=y(_.internalFormat,ce,Ue,_.colorSpace,_.isVideoTexture);He(V,_);let ge,Oe=_.mipmaps,I=_.isVideoTexture!==!0,me=Ae.__version===void 0||Z===!0,he=z.dataReady,ue=C(_,j);if(_.isDepthTexture)De=w(_.format===Ir,_.type),me&&(I?t.texStorage2D(n.TEXTURE_2D,1,De,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,De,j.width,j.height,0,ce,Ue,null));else if(_.isDataTexture)if(Oe.length>0){I&&me&&t.texStorage2D(n.TEXTURE_2D,ue,De,Oe[0].width,Oe[0].height);for(let ne=0,$=Oe.length;ne<$;ne++)ge=Oe[ne],I?he&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ge.width,ge.height,ce,Ue,ge.data):t.texImage2D(n.TEXTURE_2D,ne,De,ge.width,ge.height,0,ce,Ue,ge.data);_.generateMipmaps=!1}else I?(me&&t.texStorage2D(n.TEXTURE_2D,ue,De,j.width,j.height),he&&nt(_,j,ce,Ue)):t.texImage2D(n.TEXTURE_2D,0,De,j.width,j.height,0,ce,Ue,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,De,Oe[0].width,Oe[0].height,j.depth);for(let ne=0,$=Oe.length;ne<$;ne++)if(ge=Oe[ne],_.format!==pn)if(ce!==null)if(I){if(he)if(_.layerUpdates.size>0){let Se=Eh(ge.width,ge.height,_.format,_.type);for(let ze of _.layerUpdates){let ht=ge.data.subarray(ze*Se/ge.data.BYTES_PER_ELEMENT,(ze+1)*Se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,ze,ge.width,ge.height,1,ce,ht)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,j.depth,ce,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,De,ge.width,ge.height,j.depth,0,ge.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,j.depth,ce,Ue,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,De,ge.width,ge.height,j.depth,0,ce,Ue,ge.data)}else{I&&me&&t.texStorage2D(n.TEXTURE_2D,ue,De,Oe[0].width,Oe[0].height);for(let ne=0,$=Oe.length;ne<$;ne++)ge=Oe[ne],_.format!==pn?ce!==null?I?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ge.width,ge.height,ce,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,De,ge.width,ge.height,0,ge.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?he&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ge.width,ge.height,ce,Ue,ge.data):t.texImage2D(n.TEXTURE_2D,ne,De,ge.width,ge.height,0,ce,Ue,ge.data)}else if(_.isDataArrayTexture)if(I){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,De,j.width,j.height,j.depth),he)if(_.layerUpdates.size>0){let ne=Eh(j.width,j.height,_.format,_.type);for(let $ of _.layerUpdates){let Se=j.data.subarray($*ne/j.data.BYTES_PER_ELEMENT,($+1)*ne/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,j.width,j.height,1,ce,Ue,Se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,Ue,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,j.width,j.height,j.depth,0,ce,Ue,j.data);else if(_.isData3DTexture)I?(me&&t.texStorage3D(n.TEXTURE_3D,ue,De,j.width,j.height,j.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,Ue,j.data)):t.texImage3D(n.TEXTURE_3D,0,De,j.width,j.height,j.depth,0,ce,Ue,j.data);else if(_.isFramebufferTexture){if(me)if(I)t.texStorage2D(n.TEXTURE_2D,ue,De,j.width,j.height);else{let ne=j.width,$=j.height;for(let Se=0;Se<ue;Se++)t.texImage2D(n.TEXTURE_2D,Se,De,ne,$,0,ce,Ue,null),ne>>=1,$>>=1}}else if(Oe.length>0){if(I&&me){let ne=_e(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ue,De,ne.width,ne.height)}for(let ne=0,$=Oe.length;ne<$;ne++)ge=Oe[ne],I?he&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ce,Ue,ge):t.texImage2D(n.TEXTURE_2D,ne,De,ce,Ue,ge);_.generateMipmaps=!1}else if(I){if(me){let ne=_e(j);t.texStorage2D(n.TEXTURE_2D,ue,De,ne.width,ne.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Ue,j)}else t.texImage2D(n.TEXTURE_2D,0,De,ce,Ue,j);m(_)&&p(V),Ae.__version=z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,F){if(_.image.length!==6)return;let V=$e(E,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let z=i.get(Z);if(Z.version!==z.__version||V===!0){t.activeTexture(n.TEXTURE0+F);let Ae=Je.getPrimaries(Je.workingColorSpace),fe=_.colorSpace===jn?null:Je.getPrimaries(_.colorSpace),Ce=_.colorSpace===jn||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Te=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!Te&&!j?ce[$]=g(_.image[$],!0,r.maxCubemapSize):ce[$]=j?_.image[$].image:_.image[$],ce[$]=de(_,ce[$]);let Ue=ce[0],De=s.convert(_.format,_.colorSpace),ge=s.convert(_.type),Oe=y(_.internalFormat,De,ge,_.colorSpace),I=_.isVideoTexture!==!0,me=z.__version===void 0||V===!0,he=Z.dataReady,ue=C(_,Ue);He(n.TEXTURE_CUBE_MAP,_);let ne;if(Te){I&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Oe,Ue.width,Ue.height);for(let $=0;$<6;$++){ne=ce[$].mipmaps;for(let Se=0;Se<ne.length;Se++){let ze=ne[Se];_.format!==pn?De!==null?I?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,ze.width,ze.height,De,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Oe,ze.width,ze.height,0,ze.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,ze.width,ze.height,De,ge,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Oe,ze.width,ze.height,0,De,ge,ze.data)}}}else{if(ne=_.mipmaps,I&&me){ne.length>0&&ue++;let $=_e(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(j){I?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,De,ge,ce[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ce[$].width,ce[$].height,0,De,ge,ce[$].data);for(let Se=0;Se<ne.length;Se++){let ht=ne[Se].image[$].image;I?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,ht.width,ht.height,De,ge,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Oe,ht.width,ht.height,0,De,ge,ht.data)}}else{I?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,ge,ce[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,De,ge,ce[$]);for(let Se=0;Se<ne.length;Se++){let ze=ne[Se];I?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,De,ge,ze.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Oe,De,ge,ze.image[$])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ve(E,_,F,V,Z,z){let Ae=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),Ce=y(F.internalFormat,Ae,fe,F.colorSpace),Te=i.get(_),j=i.get(F);if(j.__renderTarget=_,!Te.__hasExternalTextures){let ce=Math.max(1,_.width>>z),Ue=Math.max(1,_.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,Ce,ce,Ue,_.depth,0,Ae,fe,null):t.texImage2D(Z,z,Ce,ce,Ue,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),te(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,j.__webglTexture,0,oe(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,j.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(E,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){let V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,z=w(_.stencilBuffer,Z),Ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=oe(_);te(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,z,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,E)}else{let V=_.textures;for(let Z=0;Z<V.length;Z++){let z=V[Z],Ae=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),Ce=y(z.internalFormat,Ae,fe,z.colorSpace),Te=oe(_);F&&te(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ce,_.width,_.height):te(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Ce,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=i.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);let Z=V.__webglTexture,z=oe(_);if(_.depthTexture.format===mr)te(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Ir)te(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ge(E){let _=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let V=E.texture.mipmaps;V&&V.length>0?qe(_.__webglFramebuffer[0],E):qe(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=n.createRenderbuffer(),Ie(_.__webglDepthbuffer[V],E,!1);else{let Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ie(_.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(E,_,F){let V=i.get(E);_!==void 0&&ve(V.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ge(E)}function Fe(E){let _=E.texture,F=i.get(E),V=i.get(_);E.addEventListener("dispose",A);let Z=E.textures,z=E.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=_.version,a.memory.textures++),z){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)F.__webglFramebuffer[fe][Ce]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let fe=0,Ce=Z.length;fe<Ce;fe++){let Te=i.get(Z[fe]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&te(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<Z.length;fe++){let Ce=Z[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);let Te=s.convert(Ce.format,Ce.colorSpace),j=s.convert(Ce.type),ce=y(Ce.internalFormat,Te,j,Ce.colorSpace,E.isXRRenderTarget===!0),Ue=oe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ve(F.__webglFramebuffer[fe][Ce],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce);else ve(F.__webglFramebuffer[fe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,Ce=Z.length;fe<Ce;fe++){let Te=Z[fe],j=i.get(Te),ce=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,j.__webglTexture),He(ce,Te),ve(F.__webglFramebuffer,E,Te,n.COLOR_ATTACHMENT0+fe,ce,0),m(Te)&&p(ce)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,V.__webglTexture),He(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ve(F.__webglFramebuffer[Ce],E,_,n.COLOR_ATTACHMENT0,fe,Ce);else ve(F.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}E.depthBuffer&&Ge(E)}function Q(E){let _=E.textures;for(let F=0,V=_.length;F<V;F++){let Z=_[F];if(m(Z)){let z=S(E),Ae=i.get(Z).__webglTexture;t.bindTexture(z,Ae),p(z),t.unbindTexture()}}}let T=[],K=[];function ie(E){if(E.samples>0){if(te(E)===!1){let _=E.textures,F=E.width,V=E.height,Z=n.COLOR_BUFFER_BIT,z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(E),fe=_.length>1;if(fe)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Ce=E.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let j=i.get(_[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,Z,n.NEAREST),l===!0&&(T.length=0,K.length=0,T.push(n.COLOR_ATTACHMENT0+Te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(T.push(z),K.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let j=i.get(_[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,j,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function oe(E){return Math.min(r.maxSamples,E.samples)}function te(E){let _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function de(E,_){let F=E.colorSpace,V=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Fi&&F!==jn&&(Je.getTransfer(F)===je?(V!==pn||Z!==En)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",F)),_}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=te}function Qx(n,e){function t(i,r=jn){let s,a=Je.getTransfer(r);if(i===En)return n.UNSIGNED_BYTE;if(i===$o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hh)return n.BYTE;if(i===uh)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Mt)return n.HALF_FLOAT;if(i===ph)return n.ALPHA;if(i===mh)return n.RGB;if(i===pn)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===Jo)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Qo)return n.RG;if(i===jo)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===Ys||i===$s||i===Zs||i===Js)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===nl||i===il||i===rl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sl||i===al||i===ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sl||i===al)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ol)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===xl||i===gl||i===_l||i===vl||i===bl||i===yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ll)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_l)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ml||i===Sl||i===El)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ml)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===El)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wl||i===Tl||i===ql||i===Al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new at({vertexShader:jx,fragmentShader:e4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends $n{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,g=typeof XRWebGLBinding<"u",m=new Fh,p={},S=t.getContextAttributes(),y=null,w=null,C=[],q=[],A=new ee,D=null,M=new yt;M.viewport=new it;let v=new yt;v.viewport=new it;let R=[M,v],B=new Co,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=C[Y];return J===void 0&&(J=new vr,C[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=C[Y];return J===void 0&&(J=new vr,C[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=C[Y];return J===void 0&&(J=new vr,C[Y]=J),J.getHandSpace()};function W(Y){let J=q.indexOf(Y.inputSource);if(J===-1)return;let ve=C[J];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",re);for(let Y=0;Y<C.length;Y++){let J=q[Y];J!==null&&(q[Y]=null,C[Y].disconnect(J))}k=null,G=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(y),f=null,u=null,d=null,r=null,w=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,qe=null;S.depth&&(qe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?Ir:mr,Ie=S.stencil?Rr:bi);let Ge={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new xt(u.textureWidth,u.textureHeight,{format:pn,type:En,depthTexture:new ws(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new xt(f.framebufferWidth,f.framebufferHeight,{format:pn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Y){for(let J=0;J<Y.removed.length;J++){let ve=Y.removed[J],Ie=q.indexOf(ve);Ie>=0&&(q[Ie]=null,C[Ie].disconnect(ve))}for(let J=0;J<Y.added.length;J++){let ve=Y.added[J],Ie=q.indexOf(ve);if(Ie===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=q.length){q.push(ve),Ie=Ge;break}else if(q[Ge]===null){q[Ge]=ve,Ie=Ge;break}if(Ie===-1)break}let qe=C[Ie];qe&&qe.connect(ve)}}let H=new P,se=new P;function le(Y,J,ve){H.setFromMatrixPosition(J.matrixWorld),se.setFromMatrixPosition(ve.matrixWorld);let Ie=H.distanceTo(se),qe=J.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,ot=qe[14]/(qe[10]-1),Fe=qe[14]/(qe[10]+1),Q=(qe[9]+1)/qe[5],T=(qe[9]-1)/qe[5],K=(qe[8]-1)/qe[0],ie=(Ge[8]+1)/Ge[0],oe=ot*K,te=ot*ie,Me=Ie/(-K+ie),de=Me*-K;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),qe[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let _e=ot+Me,E=Fe+Me,_=oe-de,F=te+(Ie-de),V=Q*Fe/E*_e,Z=T*Fe/E*_e;Y.projectionMatrix.makePerspective(_,F,V,Z,_e,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function we(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,ve=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),B.near=v.near=M.near=J,B.far=v.far=M.far=ve,(k!==B.near||G!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,G=B.far),B.layers.mask=Y.layers.mask|6,M.layers.mask=B.layers.mask&3,v.layers.mask=B.layers.mask&5;let Ie=Y.parent,qe=B.cameras;we(B,Ie);for(let Ge=0;Ge<qe.length;Ge++)we(qe[Ge],Ie);qe.length===2?le(B,M,v):B.projectionMatrix.copy(M.projectionMatrix),He(Y,B,Ie)};function He(Y,J,ve){ve===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return p[Y]};let $e=null;function Qe(Y,J){if(h=J.getViewerPose(c||a),x=J,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let Ie=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let Fe=0;Fe<ve.length;Fe++){let Q=ve[Fe],T=null;if(f!==null)T=f.getViewport(Q);else{let ie=d.getViewSubImage(u,Q);T=ie.viewport,Fe===0&&(e.setRenderTargetTextures(w,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(w))}let K=R[Fe];K===void 0&&(K=new yt,K.layers.enable(Fe),K.viewport=new it,R[Fe]=K),K.matrix.fromArray(Q.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Q.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(T.x,T.y,T.width,T.height),Fe===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(K)}let qe=r.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Fe=d.getDepthInformation(ve[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,r.renderState)}if(qe&&qe.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Fe=0;Fe<ve.length;Fe++){let Q=ve[Fe].camera;if(Q){let T=p[Q];T||(T=new Ts,p[Q]=T);let K=d.getCameraImage(Q);T.sourceTexture=K}}}}for(let ve=0;ve<C.length;ve++){let Ie=q[ve],qe=C[ve];Ie!==null&&qe!==void 0&&qe.update(Ie,J,c||a)}$e&&$e(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}let nt=new gf;nt.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){$e=Y},this.dispose=function(){}}},Zi=new dn,t4=new tt;function n4(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),y=S.envMap,w=S.envMapRotation;y&&(m.envMap.value=y,Zi.copy(w),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(t4.makeRotationFromEuler(Zi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i4(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let w=y.program;i.uniformBlockBinding(S,w)}function c(S,y){let w=r[S.id];w===void 0&&(x(S),w=h(S),r[S.id]=w,S.addEventListener("dispose",m));let C=y.program;i.updateUBOMapping(S,C);let q=e.render.frame;s[S.id]!==q&&(u(S),s[S.id]=q)}function h(S){let y=d();S.__bindingPointIndex=y;let w=n.createBuffer(),C=S.__size,q=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,q),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let y=r[S.id],w=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let q=0,A=w.length;q<A;q++){let D=Array.isArray(w[q])?w[q]:[w[q]];for(let M=0,v=D.length;M<v;M++){let R=D[M];if(f(R,q,M,C)===!0){let B=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],G=0;for(let W=0;W<k.length;W++){let X=k[W],re=g(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+G,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,G),G+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,y,w,C){let q=S.value,A=y+"_"+w;if(C[A]===void 0)return typeof q=="number"||typeof q=="boolean"?C[A]=q:C[A]=q.clone(),!0;{let D=C[A];if(typeof q=="number"||typeof q=="boolean"){if(D!==q)return C[A]=q,!0}else if(D.equals(q)===!1)return D.copy(q),!0}return!1}function x(S){let y=S.uniforms,w=0,C=16;for(let A=0,D=y.length;A<D;A++){let M=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,R=M.length;v<R;v++){let B=M[v],k=Array.isArray(B.value)?B.value:[B.value];for(let G=0,W=k.length;G<W;G++){let X=k[G],re=g(X),H=w%C,se=H%re.boundary,le=H+se;w+=se,le!==0&&C-le<re.storage&&(w+=C-le),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=re.storage}}}let q=w%C;return q>0&&(w+=C-q),S.__size=w,S.__cache={},this}function g(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(let S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var r4=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),ei=null;function s4(){return ei===null&&(ei=new Ms(r4,32,32,Qo,Mt),ei.minFilter=jt,ei.magFilter=jt,ei.wrapS=An,ei.wrapT=An,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Ur=class{constructor(e={}){let{canvas:t=zd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let x=new Set([el,jo,Ko]),g=new Set([En,bi,Cr,Rr,$o,Zo]),m=new Uint32Array(4),p=new Int32Array(4),S=null,y=null,w=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let q=this,A=!1;this._outputColorSpace=At;let D=0,M=0,v=null,R=-1,B=null,k=new it,G=new it,W=null,X=new be(0),re=0,H=t.width,se=t.height,le=1,we=null,He=null,$e=new it(0,0,H,se),Qe=new it(0,0,H,se),nt=!1,Y=new br,J=!1,ve=!1,Ie=new tt,qe=new P,Ge=new it,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Q(){return v===null?le:1}let T=i;function K(b,L){return t.getContext(b,L)}try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",Se,!1),T===null){let L="webgl2";if(T=K(L,b),T===null)throw K(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let ie,oe,te,Me,de,_e,E,_,F,V,Z,z,Ae,fe,Ce,Te,j,ce,Ue,De,ge,Oe,I,me;function he(){ie=new y2(T),ie.init(),Oe=new Qx(T,ie),oe=new d2(T,ie,e,Oe),te=new Jx(T,ie),oe.reversedDepthBuffer&&u&&te.buffers.depth.setReversed(!0),Me=new E2(T),de=new Nx,_e=new Kx(T,ie,te,de,oe,Oe,Me),E=new p2(q),_=new b2(q),F=new A1(T),I=new h2(T,F),V=new M2(T,F,Me,I),Z=new T2(T,V,F,Me),Ue=new w2(T,oe,_e),Te=new f2(de),z=new Fx(q,E,_,ie,oe,I,Te),Ae=new n4(q,de),fe=new Bx,Ce=new Wx(ie),ce=new c2(q,E,_,te,Z,f,l),j=new $x(q,Z,oe),me=new i4(T,Me,oe,te),De=new u2(T,ie,Me),ge=new S2(T,ie,Me),Me.programs=z.programs,q.capabilities=oe,q.extensions=ie,q.properties=de,q.renderLists=fe,q.shadowMap=j,q.state=te,q.info=Me}he();let ue=new Nh(q,T);this.xr=ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(H,se,!1))},this.getSize=function(b){return b.set(H,se)},this.setSize=function(b,L,N=!0){if(ue.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,se=L,t.width=Math.floor(b*le),t.height=Math.floor(L*le),N===!0&&(t.style.width=b+"px",t.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(H*le,se*le).floor()},this.setDrawingBufferSize=function(b,L,N){H=b,se=L,le=N,t.width=Math.floor(b*N),t.height=Math.floor(L*N),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy($e)},this.setViewport=function(b,L,N,O){b.isVector4?$e.set(b.x,b.y,b.z,b.w):$e.set(b,L,N,O),te.viewport(k.copy($e).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(Qe)},this.setScissor=function(b,L,N,O){b.isVector4?Qe.set(b.x,b.y,b.z,b.w):Qe.set(b,L,N,O),te.scissor(G.copy(Qe).multiplyScalar(le).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){te.setScissorTest(nt=b)},this.setOpaqueSort=function(b){we=b},this.setTransparentSort=function(b){He=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,N=!0){let O=0;if(b){let U=!1;if(v!==null){let ae=v.texture.format;U=x.has(ae)}if(U){let ae=v.texture.type,xe=g.has(ae),Ee=ce.getClearColor(),ye=ce.getClearAlpha(),Le=Ee.r,Ne=Ee.g,Re=Ee.b;xe?(m[0]=Le,m[1]=Ne,m[2]=Re,m[3]=ye,T.clearBufferuiv(T.COLOR,0,m)):(p[0]=Le,p[1]=Ne,p[2]=Re,p[3]=ye,T.clearBufferiv(T.COLOR,0,p))}else O|=T.COLOR_BUFFER_BIT}L&&(O|=T.DEPTH_BUFFER_BIT),N&&(O|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ce.dispose(),fe.dispose(),Ce.dispose(),de.dispose(),E.dispose(),_.dispose(),Z.dispose(),I.dispose(),me.dispose(),z.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",eu),ue.removeEventListener("sessionend",tu),wi.stop()};function ne(b){b.preventDefault(),vh("WebGLRenderer: Context Lost."),A=!0}function $(){vh("WebGLRenderer: Context Restored."),A=!1;let b=Me.autoReset,L=j.enabled,N=j.autoUpdate,O=j.needsUpdate,U=j.type;he(),Me.autoReset=b,j.enabled=L,j.autoUpdate=N,j.needsUpdate=O,j.type=U}function Se(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){let L=b.target;L.removeEventListener("dispose",ze),ht(L)}function ht(b){rt(b),de.remove(b)}function rt(b){let L=de.get(b).programs;L!==void 0&&(L.forEach(function(N){z.releaseProgram(N)}),b.isShaderMaterial&&z.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,N,O,U,ae){L===null&&(L=ot);let xe=U.isMesh&&U.matrixWorld.determinant()<0,Ee=U0(b,L,N,O,U);te.setMaterial(O,xe);let ye=N.index,Le=1;if(O.wireframe===!0){if(ye=V.getWireframeAttribute(N),ye===void 0)return;Le=2}let Ne=N.drawRange,Re=N.attributes.position,Ze=Ne.start*Le,st=(Ne.start+Ne.count)*Le;ae!==null&&(Ze=Math.max(Ze,ae.start*Le),st=Math.min(st,(ae.start+ae.count)*Le)),ye!==null?(Ze=Math.max(Ze,0),st=Math.min(st,ye.count)):Re!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Re.count));let gt=st-Ze;if(gt<0||gt===1/0)return;I.setup(U,O,Ee,N,ye);let _t,lt=De;if(ye!==null&&(_t=F.get(ye),lt=ge,lt.setIndex(_t)),U.isMesh)O.wireframe===!0?(te.setLineWidth(O.wireframeLinewidth*Q()),lt.setMode(T.LINES)):lt.setMode(T.TRIANGLES);else if(U.isLine){let Pe=O.linewidth;Pe===void 0&&(Pe=1),te.setLineWidth(Pe*Q()),U.isLineSegments?lt.setMode(T.LINES):U.isLineLoop?lt.setMode(T.LINE_LOOP):lt.setMode(T.LINE_STRIP)}else U.isPoints?lt.setMode(T.POINTS):U.isSprite&&lt.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)gr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))lt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Pe=U._multiDrawStarts,ft=U._multiDrawCounts,Ke=U._multiDrawCount,$t=ye?F.get(ye).bytesPerElement:1,Qi=de.get(O).currentProgram.getUniforms();for(let Zt=0;Zt<Ke;Zt++)Qi.setValue(T,"_gl_DrawID",Zt),lt.render(Pe[Zt]/$t,ft[Zt])}else if(U.isInstancedMesh)lt.renderInstances(Ze,gt,U.count);else if(N.isInstancedBufferGeometry){let Pe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,ft=Math.min(N.instanceCount,Pe);lt.renderInstances(Ze,gt,ft)}else lt.render(Ze,gt)};function qn(b,L,N){b.transparent===!0&&b.side===Pn&&b.forceSinglePass===!1?(b.side=Rt,b.needsUpdate=!0,ma(b,L,N),b.side=Yn,b.needsUpdate=!0,ma(b,L,N),b.side=Pn):ma(b,L,N)}this.compile=function(b,L,N=null){N===null&&(N=b),y=Ce.get(N),y.init(L),C.push(y),N.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(y.pushLight(U),U.castShadow&&y.pushShadow(U))}),b!==N&&b.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(y.pushLight(U),U.castShadow&&y.pushShadow(U))}),y.setupLights();let O=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ae=U.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){let Ee=ae[xe];qn(Ee,N,U),O.add(Ee)}else qn(ae,N,U),O.add(ae)}),y=C.pop(),O},this.compileAsync=function(b,L,N=null){let O=this.compile(b,L,N);return new Promise(U=>{function ae(){if(O.forEach(function(xe){de.get(xe).currentProgram.isReady()&&O.delete(xe)}),O.size===0){U(b);return}setTimeout(ae,10)}ie.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let xn=null;function L0(b){xn&&xn(b)}function eu(){wi.stop()}function tu(){wi.start()}let wi=new gf;wi.setAnimationLoop(L0),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(b){xn=b,ue.setAnimationLoop(b),b===null?wi.stop():wi.start()},ue.addEventListener("sessionstart",eu),ue.addEventListener("sessionend",tu),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(L),L=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(q,b,L,v),y=Ce.get(b,C.length),y.init(L),C.push(y),Ie.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Ie,Mn,L.reversedDepth),ve=this.localClippingEnabled,J=Te.init(this.clippingPlanes,ve),S=fe.get(b,w.length),S.init(),w.push(S),ue.enabled===!0&&ue.isPresenting===!0){let ae=q.xr.getDepthSensingMesh();ae!==null&&nc(ae,L,-1/0,q.sortObjects)}nc(b,L,0,q.sortObjects),S.finish(),q.sortObjects===!0&&S.sort(we,He),Fe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Fe&&ce.addToRenderList(S,b),this.info.render.frame++,J===!0&&Te.beginShadows();let N=y.state.shadowsArray;j.render(N,b,L),J===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=S.opaque,U=S.transmissive;if(y.setupLights(),L.isArrayCamera){let ae=L.cameras;if(U.length>0)for(let xe=0,Ee=ae.length;xe<Ee;xe++){let ye=ae[xe];iu(O,U,b,ye)}Fe&&ce.render(b);for(let xe=0,Ee=ae.length;xe<Ee;xe++){let ye=ae[xe];nu(S,b,ye,ye.viewport)}}else U.length>0&&iu(O,U,b,L),Fe&&ce.render(b),nu(S,b,L);v!==null&&M===0&&(_e.updateMultisampleRenderTarget(v),_e.updateRenderTargetMipmap(v)),b.isScene===!0&&b.onAfterRender(q,b,L),I.resetDefaultState(),R=-1,B=null,C.pop(),C.length>0?(y=C[C.length-1],J===!0&&Te.setGlobalState(q.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function nc(b,L,N,O){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)N=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){O&&Ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ie);let xe=Z.update(b),Ee=b.material;Ee.visible&&S.push(b,xe,Ee,N,Ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let xe=Z.update(b),Ee=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ge.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ge.copy(xe.boundingSphere.center)),Ge.applyMatrix4(b.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ee)){let ye=xe.groups;for(let Le=0,Ne=ye.length;Le<Ne;Le++){let Re=ye[Le],Ze=Ee[Re.materialIndex];Ze&&Ze.visible&&S.push(b,xe,Ze,N,Ge.z,Re)}}else Ee.visible&&S.push(b,xe,Ee,N,Ge.z,null)}}let ae=b.children;for(let xe=0,Ee=ae.length;xe<Ee;xe++)nc(ae[xe],L,N,O)}function nu(b,L,N,O){let{opaque:U,transmissive:ae,transparent:xe}=b;y.setupLightsView(N),J===!0&&Te.setGlobalState(q.clippingPlanes,N),O&&te.viewport(k.copy(O)),U.length>0&&pa(U,L,N),ae.length>0&&pa(ae,L,N),xe.length>0&&pa(xe,L,N),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function iu(b,L,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[O.id]===void 0&&(y.state.transmissionRenderTarget[O.id]=new xt(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Mt:En,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ae=y.state.transmissionRenderTarget[O.id],xe=O.viewport||k;ae.setSize(xe.z*q.transmissionResolutionScale,xe.w*q.transmissionResolutionScale);let Ee=q.getRenderTarget(),ye=q.getActiveCubeFace(),Le=q.getActiveMipmapLevel();q.setRenderTarget(ae),q.getClearColor(X),re=q.getClearAlpha(),re<1&&q.setClearColor(16777215,.5),q.clear(),Fe&&ce.render(N);let Ne=q.toneMapping;q.toneMapping=Qn;let Re=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),y.setupLightsView(O),J===!0&&Te.setGlobalState(q.clippingPlanes,O),pa(b,N,O),_e.updateMultisampleRenderTarget(ae),_e.updateRenderTargetMipmap(ae),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let st=0,gt=L.length;st<gt;st++){let _t=L[st],{object:lt,geometry:Pe,material:ft,group:Ke}=_t;if(ft.side===Pn&&lt.layers.test(O.layers)){let $t=ft.side;ft.side=Rt,ft.needsUpdate=!0,ru(lt,N,O,Pe,ft,Ke),ft.side=$t,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(_e.updateMultisampleRenderTarget(ae),_e.updateRenderTargetMipmap(ae))}q.setRenderTarget(Ee,ye,Le),q.setClearColor(X,re),Re!==void 0&&(O.viewport=Re),q.toneMapping=Ne}function pa(b,L,N){let O=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ae=b.length;U<ae;U++){let xe=b[U],{object:Ee,geometry:ye,group:Le}=xe,Ne=xe.material;Ne.allowOverride===!0&&O!==null&&(Ne=O),Ee.layers.test(N.layers)&&ru(Ee,L,N,ye,Ne,Le)}}function ru(b,L,N,O,U,ae){b.onBeforeRender(q,L,N,O,U,ae),b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(q,L,N,O,b,ae),U.transparent===!0&&U.side===Pn&&U.forceSinglePass===!1?(U.side=Rt,U.needsUpdate=!0,q.renderBufferDirect(N,L,O,U,b,ae),U.side=Yn,U.needsUpdate=!0,q.renderBufferDirect(N,L,O,U,b,ae),U.side=Pn):q.renderBufferDirect(N,L,O,U,b,ae),b.onAfterRender(q,L,N,O,U,ae)}function ma(b,L,N){L.isScene!==!0&&(L=ot);let O=de.get(b),U=y.state.lights,ae=y.state.shadowsArray,xe=U.state.version,Ee=z.getParameters(b,U.state,ae,L,N),ye=z.getProgramCacheKey(Ee),Le=O.programs;O.environment=b.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(b.isMeshStandardMaterial?_:E).get(b.envMap||O.environment),O.envMapRotation=O.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",ze),Le=new Map,O.programs=Le);let Ne=Le.get(ye);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===xe)return au(b,Ee),Ne}else Ee.uniforms=z.getUniforms(b),b.onBeforeCompile(Ee,q),Ne=z.acquireProgram(Ee,ye),Le.set(ye,Ne),O.uniforms=Ee.uniforms;let Re=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=Te.uniform),au(b,Ee),O.needsLights=N0(b),O.lightsStateVersion=xe,O.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Ne,O.uniformsList=null,Ne}function su(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=Lr.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function au(b,L){let N=de.get(b);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.batchingColor=L.batchingColor,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.instancingMorph=L.instancingMorph,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function U0(b,L,N,O,U){L.isScene!==!0&&(L=ot),_e.resetTextureUnits();let ae=L.fog,xe=O.isMeshStandardMaterial?L.environment:null,Ee=v===null?q.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Fi,ye=(O.isMeshStandardMaterial?_:E).get(O.envMap||xe),Le=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ne=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Re=!!N.morphAttributes.position,Ze=!!N.morphAttributes.normal,st=!!N.morphAttributes.color,gt=Qn;O.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(gt=q.toneMapping);let _t=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,lt=_t!==void 0?_t.length:0,Pe=de.get(O),ft=y.state.lights;if(J===!0&&(ve===!0||b!==B)){let Ut=b===B&&O.id===R;Te.setState(O,b,Ut)}let Ke=!1;O.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ft.state.version||Pe.outputColorSpace!==Ee||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==ye||O.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Te.numPlanes||Pe.numIntersection!==Te.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ne||Pe.morphTargets!==Re||Pe.morphNormals!==Ze||Pe.morphColors!==st||Pe.toneMapping!==gt||Pe.morphTargetsCount!==lt)&&(Ke=!0):(Ke=!0,Pe.__version=O.version);let $t=Pe.currentProgram;Ke===!0&&($t=ma(O,L,U));let Qi=!1,Zt=!1,Zr=!1,pt=$t.getUniforms(),Ot=Pe.uniforms;if(te.useProgram($t.program)&&(Qi=!0,Zt=!0,Zr=!0),O.id!==R&&(R=O.id,Zt=!0),Qi||B!==b){te.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(T,"projectionMatrix",b.projectionMatrix),pt.setValue(T,"viewMatrix",b.matrixWorldInverse);let Bt=pt.map.cameraPosition;Bt!==void 0&&Bt.setValue(T,qe.setFromMatrixPosition(b.matrixWorld)),oe.logarithmicDepthBuffer&&pt.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&pt.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Zt=!0,Zr=!0)}if(U.isSkinnedMesh){pt.setOptional(T,U,"bindMatrix"),pt.setOptional(T,U,"bindMatrixInverse");let Ut=U.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),pt.setValue(T,"boneTexture",Ut.boneTexture,_e))}U.isBatchedMesh&&(pt.setOptional(T,U,"batchingTexture"),pt.setValue(T,"batchingTexture",U._matricesTexture,_e),pt.setOptional(T,U,"batchingIdTexture"),pt.setValue(T,"batchingIdTexture",U._indirectTexture,_e),pt.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&pt.setValue(T,"batchingColorTexture",U._colorsTexture,_e));let hn=N.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ue.update(U,N,$t),(Zt||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,pt.setValue(T,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ot.envMap.value=ye,Ot.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Ot.envMapIntensity.value=L.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=s4()),Zt&&(pt.setValue(T,"toneMappingExposure",q.toneMappingExposure),Pe.needsLights&&F0(Ot,Zr),ae&&O.fog===!0&&Ae.refreshFogUniforms(Ot,ae),Ae.refreshMaterialUniforms(Ot,O,le,se,y.state.transmissionRenderTarget[b.id]),Lr.upload(T,su(Pe),Ot,_e)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Lr.upload(T,su(Pe),Ot,_e),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&pt.setValue(T,"center",U.center),pt.setValue(T,"modelViewMatrix",U.modelViewMatrix),pt.setValue(T,"normalMatrix",U.normalMatrix),pt.setValue(T,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Ut=O.uniformsGroups;for(let Bt=0,ic=Ut.length;Bt<ic;Bt++){let Ti=Ut[Bt];me.update(Ti,$t),me.bind(Ti,$t)}}return $t}function F0(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function N0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(b,L,N){let O=de.get(b);O.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),de.get(b.texture).__webglTexture=L,de.get(b.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let N=de.get(b);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0};let O0=T.createFramebuffer();this.setRenderTarget=function(b,L=0,N=0){v=b,D=L,M=N;let O=!0,U=null,ae=!1,xe=!1;if(b){let ye=de.get(b);if(ye.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(T.FRAMEBUFFER,null),O=!1;else if(ye.__webglFramebuffer===void 0)_e.setupRenderTarget(b);else if(ye.__hasExternalTextures)_e.rebindTextures(b,de.get(b.texture).__webglTexture,de.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Re=b.depthTexture;if(ye.__boundDepthTexture!==Re){if(Re!==null&&de.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(b)}}let Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(xe=!0);let Ne=de.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[L])?U=Ne[L][N]:U=Ne[L],ae=!0):b.samples>0&&_e.useMultisampledRTT(b)===!1?U=de.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[N]:U=Ne,k.copy(b.viewport),G.copy(b.scissor),W=b.scissorTest}else k.copy($e).multiplyScalar(le).floor(),G.copy(Qe).multiplyScalar(le).floor(),W=nt;if(N!==0&&(U=O0),te.bindFramebuffer(T.FRAMEBUFFER,U)&&O&&te.drawBuffers(b,U),te.viewport(k),te.scissor(G),te.setScissorTest(W),ae){let ye=de.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,N)}else if(xe){let ye=L;for(let Le=0;Le<b.textures.length;Le++){let Ne=de.get(b.textures[Le]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,N,ye)}}else if(b!==null&&N!==0){let ye=de.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ye.__webglTexture,N)}R=-1},this.readRenderTargetPixels=function(b,L,N,O,U,ae,xe,Ee=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=de.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){te.bindFramebuffer(T.FRAMEBUFFER,ye);try{let Le=b.textures[Ee],Ne=Le.format,Re=Le.type;if(!oe.textureFormatReadable(Ne)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Re)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-O&&N>=0&&N<=b.height-U&&(b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ee),T.readPixels(L,N,O,U,Oe.convert(Ne),Oe.convert(Re),ae))}finally{let Le=v!==null?de.get(v).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,L,N,O,U,ae,xe,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=de.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(L>=0&&L<=b.width-O&&N>=0&&N<=b.height-U){te.bindFramebuffer(T.FRAMEBUFFER,ye);let Le=b.textures[Ee],Ne=Le.format,Re=Le.type;if(!oe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.bufferData(T.PIXEL_PACK_BUFFER,ae.byteLength,T.STREAM_READ),b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ee),T.readPixels(L,N,O,U,Oe.convert(Ne),Oe.convert(Re),0);let st=v!==null?de.get(v).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,st);let gt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await kd(T,gt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ae),T.deleteBuffer(Ze),T.deleteSync(gt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,N=0){let O=Math.pow(2,-N),U=Math.floor(b.image.width*O),ae=Math.floor(b.image.height*O),xe=L!==null?L.x:0,Ee=L!==null?L.y:0;_e.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,xe,Ee,U,ae),te.unbindTexture()};let B0=T.createFramebuffer(),z0=T.createFramebuffer();this.copyTextureToTexture=function(b,L,N=null,O=null,U=0,ae=null){ae===null&&(U!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=U,U=0):ae=0);let xe,Ee,ye,Le,Ne,Re,Ze,st,gt,_t=b.isCompressedTexture?b.mipmaps[ae]:b.image;if(N!==null)xe=N.max.x-N.min.x,Ee=N.max.y-N.min.y,ye=N.isBox3?N.max.z-N.min.z:1,Le=N.min.x,Ne=N.min.y,Re=N.isBox3?N.min.z:0;else{let hn=Math.pow(2,-U);xe=Math.floor(_t.width*hn),Ee=Math.floor(_t.height*hn),b.isDataArrayTexture?ye=_t.depth:b.isData3DTexture?ye=Math.floor(_t.depth*hn):ye=1,Le=0,Ne=0,Re=0}O!==null?(Ze=O.x,st=O.y,gt=O.z):(Ze=0,st=0,gt=0);let lt=Oe.convert(L.format),Pe=Oe.convert(L.type),ft;L.isData3DTexture?(_e.setTexture3D(L,0),ft=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(_e.setTexture2DArray(L,0),ft=T.TEXTURE_2D_ARRAY):(_e.setTexture2D(L,0),ft=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);let Ke=T.getParameter(T.UNPACK_ROW_LENGTH),$t=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Qi=T.getParameter(T.UNPACK_SKIP_PIXELS),Zt=T.getParameter(T.UNPACK_SKIP_ROWS),Zr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,_t.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_t.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Le),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ne),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Re);let pt=b.isDataArrayTexture||b.isData3DTexture,Ot=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let hn=de.get(b),Ut=de.get(L),Bt=de.get(hn.__renderTarget),ic=de.get(Ut.__renderTarget);te.bindFramebuffer(T.READ_FRAMEBUFFER,Bt.__webglFramebuffer),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,ic.__webglFramebuffer);for(let Ti=0;Ti<ye;Ti++)pt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,de.get(b).__webglTexture,U,Re+Ti),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,de.get(L).__webglTexture,ae,gt+Ti)),T.blitFramebuffer(Le,Ne,xe,Ee,Ze,st,xe,Ee,T.DEPTH_BUFFER_BIT,T.NEAREST);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||b.isRenderTargetTexture||de.has(b)){let hn=de.get(b),Ut=de.get(L);te.bindFramebuffer(T.READ_FRAMEBUFFER,B0),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,z0);for(let Bt=0;Bt<ye;Bt++)pt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,hn.__webglTexture,U,Re+Bt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,hn.__webglTexture,U),Ot?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ut.__webglTexture,ae,gt+Bt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ut.__webglTexture,ae),U!==0?T.blitFramebuffer(Le,Ne,xe,Ee,Ze,st,xe,Ee,T.COLOR_BUFFER_BIT,T.NEAREST):Ot?T.copyTexSubImage3D(ft,ae,Ze,st,gt+Bt,Le,Ne,xe,Ee):T.copyTexSubImage2D(ft,ae,Ze,st,Le,Ne,xe,Ee);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Ot?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(ft,ae,Ze,st,gt,xe,Ee,ye,lt,Pe,_t.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(ft,ae,Ze,st,gt,xe,Ee,ye,lt,_t.data):T.texSubImage3D(ft,ae,Ze,st,gt,xe,Ee,ye,lt,Pe,_t):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ae,Ze,st,xe,Ee,lt,Pe,_t.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ae,Ze,st,_t.width,_t.height,lt,_t.data):T.texSubImage2D(T.TEXTURE_2D,ae,Ze,st,xe,Ee,lt,Pe,_t);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ke),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$t),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Qi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Zr),ae===0&&L.generateMipmaps&&T.generateMipmap(ft),te.unbindTexture()},this.initRenderTarget=function(b){de.get(b).__webglFramebuffer===void 0&&_e.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?_e.setTextureCube(b,0):b.isData3DTexture?_e.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_e.setTexture2DArray(b,0):_e.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){D=0,M=0,v=null,te.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var a4=30,Si=n=>Math.round(n*a4),Mf=n=>gn.filter(e=>e.scene===n),Ul=(n,e)=>Si(Mf(n)[e].a),Sf=(n,e)=>Si(Mf(n)[e].b);var Fl=class extends Er{constructor(e,t={}){let i=t.font;if(i===void 0)super();else{let r=i.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}};var Nl=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let r=[],s=o4(e,t,this.data,i);for(let a=0,o=s.length;a<o;a++)r.push(...s[a].toShapes());return r}};function o4(n,e,t,i){let r=Array.from(n),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[],l=0,c=0;(i=="rtl"||i=="tb")&&r.reverse();for(let h=0;h<r.length;h++){let d=r[h];if(d===`
`)l=0,c-=a;else{let u=l4(d,s,l,c,t);i=="tb"?(l=0,c+=t.ascender*s):l+=u.offsetX,o.push(u.path)}}return o}function l4(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let a=new Hs,o,l,c,h,d,u,f,x;if(s.o){let g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":o=g[m++]*e+t,l=g[m++]*e+i,a.moveTo(o,l);break;case"l":o=g[m++]*e+t,l=g[m++]*e+i,a.lineTo(o,l);break;case"q":c=g[m++]*e+t,h=g[m++]*e+i,d=g[m++]*e+t,u=g[m++]*e+i,a.quadraticCurveTo(d,u,c,h);break;case"b":c=g[m++]*e+t,h=g[m++]*e+i,d=g[m++]*e+t,u=g[m++]*e+i,f=g[m++]*e+t,x=g[m++]*e+i,a.bezierCurveTo(d,u,f,x,c,h);break}}return{offsetX:s.ha*e,path:a}}var Ef={glyphs:{"0":{ha:797,x_min:68,x_max:729,o:"m 399 -17 l 399 -17 q 260 6 322 -17 q 156 85 199 29 q 91 235 114 140 q 68 476 68 331 l 68 476 q 91 717 68 622 q 156 868 114 813 q 260 947 199 924 q 399 969 322 969 l 399 969 q 538 947 476 969 q 641 868 599 924 q 706 717 683 813 q 729 476 729 622 l 729 476 q 706 235 729 331 q 641 85 683 140 q 538 6 599 29 q 399 -17 476 -17 z m 399 103 l 399 103 q 510 141 472 103 q 564 254 549 179 q 579 440 579 329 l 579 440 l 579 508 q 564 698 579 622 q 510 812 549 774 q 399 850 472 850 l 399 850 q 288 812 326 850 q 233 699 249 774 q 218 511 218 624 l 218 511 l 218 443 q 233 256 218 332 q 288 141 249 179 q 399 103 326 103 z "},"1":{ha:760,x_min:113,x_max:713,o:"m 713 0 l 113 0 l 113 121 l 349 121 l 349 753 l 113 753 l 113 843 q 214 860 158 846 q 325 897 269 874 q 426 954 381 921 l 426 954 l 494 954 l 494 121 l 713 121 l 713 0 z "},"2":{ha:793,x_min:69,x_max:729,o:"m 729 0 l 69 0 l 69 43 q 92 153 69 103 q 153 246 115 204 q 239 325 192 288 q 335 397 286 363 l 335 397 q 453 489 399 443 q 541 588 507 535 q 575 706 575 640 l 575 706 q 558 775 575 743 q 504 827 540 807 q 410 847 468 847 l 410 847 q 306 826 346 847 q 248 767 267 804 q 229 682 229 731 l 229 682 l 229 625 l 85 625 q 82 646 83 632 q 81 681 81 660 l 81 681 q 127 847 81 783 q 251 940 174 910 q 417 969 328 969 l 417 969 q 562 945 503 969 q 656 881 621 921 q 708 792 692 840 q 724 697 724 743 l 724 697 q 701 576 724 631 q 637 475 678 522 q 541 384 596 428 q 424 297 486 340 l 424 297 q 348 243 385 271 q 283 187 311 215 q 246 132 256 158 l 246 132 l 729 132 l 729 0 z "},"3":{ha:799,x_min:60,x_max:733,o:"m 401 -17 l 401 -17 q 215 18 290 -17 q 99 117 139 53 q 60 267 60 181 l 60 267 l 60 285 l 206 285 l 206 264 q 255 144 206 186 q 393 103 304 103 l 393 103 q 531 142 479 103 q 583 267 583 181 l 583 267 q 556 363 583 329 q 482 411 528 397 q 385 425 436 425 l 385 425 l 294 425 l 294 544 l 389 544 q 476 560 436 544 q 540 612 515 576 q 564 703 564 647 l 564 703 q 542 786 564 754 q 483 834 521 818 q 400 850 446 850 l 400 850 q 312 833 351 850 q 250 782 272 815 q 228 697 228 749 l 228 697 l 228 676 l 81 676 l 81 706 q 122 844 81 785 q 234 937 163 904 q 397 969 306 969 l 397 969 q 562 940 490 969 q 673 852 633 910 q 713 711 713 794 l 713 711 q 692 611 713 653 q 635 542 671 569 q 557 494 600 514 l 557 494 l 557 489 q 683 408 632 467 q 733 256 733 350 l 733 256 q 691 110 733 171 q 574 16 649 49 q 401 -17 499 -17 z "},"4":{ha:786,x_min:42,x_max:740,o:"m 618 0 l 474 0 l 474 224 l 42 224 l 42 343 q 146 539 99 440 q 232 745 193 638 q 297 969 271 853 l 297 969 l 449 969 q 403 816 431 894 q 344 663 376 738 q 279 524 311 588 q 219 413 247 460 q 175 343 192 365 l 175 343 l 474 343 l 474 617 q 494 667 483 640 q 514 723 504 694 q 532 778 524 751 q 547 828 540 804 l 547 828 l 618 828 l 618 343 l 740 343 l 740 224 l 618 224 l 618 0 z "},"5":{ha:796,x_min:67,x_max:732,o:"m 401 -17 l 401 -17 q 226 21 301 -17 q 108 128 150 58 q 67 296 67 199 l 67 296 l 215 296 q 239 192 215 236 q 305 126 263 149 q 401 103 347 103 l 401 103 q 495 126 454 103 q 559 195 536 149 q 582 311 582 242 l 582 311 q 560 417 582 375 q 499 480 539 460 q 408 500 460 500 l 408 500 q 338 488 371 500 q 279 456 304 476 q 236 406 254 435 l 236 406 l 100 425 l 139 953 l 682 953 l 682 819 l 265 819 l 246 553 q 295 585 268 569 q 359 610 322 600 q 443 619 396 619 l 443 619 q 589 586 524 619 q 693 485 654 553 q 732 313 732 418 l 732 313 q 692 135 732 208 q 578 22 651 61 q 401 -17 504 -17 z "},"6":{ha:799,x_min:69,x_max:739,o:"m 419 -17 l 419 -17 q 273 7 338 -17 q 163 84 208 31 q 93 227 117 138 q 69 449 69 317 l 69 449 q 92 696 69 596 q 160 856 115 796 q 268 943 204 917 q 414 969 332 969 l 414 969 q 581 931 517 969 q 676 825 646 892 q 706 674 706 758 l 706 674 l 558 674 q 542 770 558 731 q 492 830 526 810 q 407 850 458 850 l 407 850 q 290 809 331 850 q 234 692 249 768 q 218 511 219 617 l 218 511 q 264 557 232 533 q 342 597 296 581 q 444 613 389 613 l 444 613 q 611 572 546 613 q 708 460 676 531 q 739 300 739 389 l 739 300 q 697 133 739 204 q 583 22 656 61 q 419 -17 511 -17 z m 410 103 l 410 103 q 510 130 471 103 q 569 202 550 157 q 589 301 589 247 l 589 301 q 570 399 589 356 q 512 469 551 443 q 411 494 472 494 l 411 494 q 310 469 350 494 q 250 399 269 443 q 231 297 231 354 l 231 297 q 250 199 231 244 q 309 128 269 154 q 410 103 349 103 z "},"7":{ha:783,x_min:58,x_max:733,o:"m 361 0 l 203 0 q 233 240 203 124 q 316 460 264 356 q 430 656 368 565 q 553 819 492 747 l 553 819 l 58 819 l 58 953 l 733 953 l 733 860 q 632 731 685 801 q 531 582 579 661 q 444 418 482 503 q 383 245 406 333 q 361 68 361 157 l 361 68 l 361 0 z "},"8":{ha:799,x_min:64,x_max:733,o:"m 400 -17 l 400 -17 q 206 21 281 -17 q 98 122 132 58 q 64 261 64 185 l 64 261 q 101 398 64 339 q 221 489 139 457 l 221 489 q 122 581 156 524 q 89 706 89 638 l 89 706 q 124 839 89 779 q 228 934 158 899 q 400 969 297 969 l 400 969 q 571 934 503 969 q 674 839 639 899 q 710 706 710 779 l 710 706 q 676 581 710 638 q 576 489 642 524 l 576 489 q 697 398 660 457 q 733 261 733 339 l 733 261 q 699 122 733 185 q 592 21 665 58 q 400 -17 518 -17 z m 400 101 l 400 101 q 538 145 490 101 q 585 265 585 189 l 585 265 q 538 385 585 342 q 400 428 490 428 l 400 428 q 260 385 308 428 q 213 265 213 342 l 213 265 q 260 145 213 189 q 400 101 308 101 z m 400 546 l 400 546 q 519 585 475 546 q 563 699 563 625 l 563 699 q 519 811 563 771 q 400 851 476 851 l 400 851 q 278 811 322 851 q 235 699 235 771 l 235 699 q 278 585 235 625 q 400 546 322 546 z "},"9":{ha:797,x_min:60,x_max:729,o:"m 383 -17 l 383 -17 q 217 22 281 -17 q 122 128 153 61 q 92 279 92 196 l 92 279 l 239 279 q 256 183 239 222 q 306 123 272 143 q 390 103 339 103 l 390 103 q 508 144 468 103 q 563 261 547 185 q 579 442 578 338 l 579 442 q 535 397 567 421 q 457 356 503 372 q 356 340 411 340 l 356 340 q 189 381 254 340 q 92 494 124 422 q 60 653 60 565 l 60 653 q 101 821 60 750 q 215 931 143 892 q 378 969 288 969 l 378 969 q 525 946 460 969 q 636 869 590 922 q 706 726 682 815 q 729 504 729 636 l 729 504 q 706 258 729 358 q 638 97 682 157 q 531 10 594 36 q 383 -17 467 -17 z m 386 458 l 386 458 q 488 484 447 458 q 548 555 528 510 q 568 656 568 600 l 568 656 q 549 754 568 710 q 489 824 529 799 q 388 850 449 850 l 388 850 q 287 823 326 850 q 228 751 247 796 q 208 651 208 707 l 208 651 q 228 553 208 597 q 286 484 247 510 q 386 458 325 458 z "},"=":{ha:875,x_min:110,x_max:767,o:"m 767 440 l 110 440 l 110 560 l 767 560 l 767 440 z m 767 147 l 110 147 l 110 265 l 767 265 l 767 147 z "},"+":{ha:875,x_min:110,x_max:765,o:"m 496 0 l 378 0 l 378 294 l 110 294 l 110 414 l 378 414 l 378 710 l 496 710 l 496 414 l 765 414 l 765 294 l 496 294 l 496 0 z "}," ":{ha:285,x_min:0,x_max:0,o:""},A:{ha:965,x_min:8,x_max:956,o:"m 168 0 l 8 0 l 382 953 l 581 953 l 956 0 l 789 0 l 704 221 l 253 221 l 168 0 z m 408 632 l 303 353 l 653 353 l 546 632 q 533 667 542 644 q 516 715 525 689 q 498 769 507 742 q 482 818 489 796 l 482 818 l 474 818 q 453 756 465 792 q 428 686 440 719 q 408 632 417 653 l 408 632 z "},B:{ha:975,x_min:113,x_max:911,o:"m 618 0 l 113 0 l 113 953 l 618 953 q 757 924 697 953 q 851 843 817 896 q 885 719 885 790 l 885 719 q 865 621 885 665 q 809 546 844 576 q 729 500 774 515 l 729 500 l 729 494 q 822 453 781 483 q 887 376 863 424 q 911 261 911 328 l 911 261 q 872 113 911 171 q 767 27 832 54 q 618 0 701 0 l 618 0 z m 268 424 l 268 133 l 606 133 q 710 167 669 133 q 751 278 751 201 l 751 278 q 734 356 751 324 q 682 406 717 389 q 594 424 647 424 l 594 424 l 268 424 z m 268 819 l 268 554 l 582 554 q 658 571 626 554 q 708 618 690 588 q 725 686 725 649 l 725 686 q 688 787 725 754 q 592 819 651 819 l 592 819 l 268 819 z "},C:{ha:1007,x_min:67,x_max:946,o:"m 525 -17 l 525 -17 q 277 35 379 -17 q 121 197 175 88 q 67 476 67 307 l 67 476 q 188 848 67 726 q 526 969 310 969 l 526 969 q 741 929 646 969 q 891 809 836 889 q 946 606 946 729 l 946 606 l 788 606 q 756 733 788 682 q 665 811 724 785 q 528 838 606 838 l 528 838 q 363 799 431 838 q 262 685 296 761 q 228 490 228 608 l 228 490 l 228 460 q 262 265 228 342 q 363 152 296 189 q 528 115 429 115 l 528 115 q 668 141 608 115 q 760 218 728 167 q 793 346 793 269 l 793 346 l 946 346 q 891 142 946 222 q 741 22 836 61 q 525 -17 646 -17 z "},D:{ha:1015,x_min:113,x_max:949,o:"m 481 0 l 113 0 l 113 953 l 481 953 q 732 902 628 953 q 892 747 836 851 q 949 476 949 642 l 949 476 q 892 207 949 313 q 732 51 836 101 q 481 0 628 0 l 481 0 z m 268 819 l 268 133 l 479 133 q 610 153 553 133 q 708 213 668 172 q 767 315 747 253 q 788 461 788 376 l 788 461 l 788 490 q 767 638 788 576 q 708 740 747 700 q 610 800 668 781 q 479 819 553 819 l 479 819 l 268 819 z "},E:{ha:936,x_min:113,x_max:860,o:"m 860 0 l 113 0 l 113 953 l 851 953 l 851 819 l 268 819 l 268 554 l 790 554 l 790 421 l 268 421 l 268 133 l 860 133 l 860 0 z "},F:{ha:849,x_min:113,x_max:793,o:"m 268 0 l 113 0 l 113 953 l 793 953 l 793 819 l 268 819 l 268 538 l 743 538 l 743 406 l 268 406 l 268 0 z "},G:{ha:1104,x_min:75,x_max:1e3,o:"m 544 -17 l 544 -17 q 197 103 318 -17 q 75 476 75 222 l 75 476 q 132 752 75 643 q 297 915 189 861 q 561 969 406 969 l 561 969 q 734 949 654 969 q 874 885 814 928 q 967 779 935 843 q 1000 628 1000 715 l 1000 628 l 842 628 q 820 722 842 682 q 760 788 799 761 q 672 826 722 814 q 564 838 621 838 l 564 838 q 423 817 485 838 q 319 753 361 796 q 257 644 278 710 q 236 490 236 579 l 236 490 l 236 461 q 272 263 236 339 q 377 151 307 186 q 549 115 447 115 l 549 115 q 710 143 644 115 q 810 226 775 171 q 844 363 844 281 l 844 363 l 844 376 l 524 376 l 524 506 l 1000 506 l 1000 0 l 888 0 l 872 114 q 783 40 833 68 q 674 -3 733 11 q 544 -17 615 -17 z "},H:{ha:1019,x_min:113,x_max:907,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 554 l 751 554 l 751 953 l 907 953 l 907 0 l 751 0 l 751 421 l 268 421 l 268 0 z "},I:{ha:381,x_min:113,x_max:268,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 0 z "},J:{ha:793,x_min:49,x_max:685,o:"m 367 -17 l 367 -17 q 194 15 265 -17 q 86 108 124 47 q 49 261 49 169 l 49 261 l 49 307 l 203 307 l 203 257 q 244 152 203 189 q 367 115 286 115 l 367 115 q 488 168 446 115 q 529 319 529 221 l 529 319 l 529 953 l 685 953 l 685 322 q 647 134 685 210 q 539 21 610 58 q 367 -17 468 -17 z "},K:{ha:940,x_min:113,x_max:924,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 478 l 722 953 l 914 953 l 547 569 l 924 0 l 740 0 l 442 460 l 268 300 l 268 0 z "},L:{ha:767,x_min:113,x_max:743,o:"m 743 0 l 113 0 l 113 953 l 268 953 l 268 135 l 743 135 l 743 0 z "},M:{ha:1175,x_min:113,x_max:1061,o:"m 263 0 l 113 0 l 113 953 l 356 953 l 540 375 q 557 318 549 350 q 573 257 565 286 q 585 206 581 228 l 585 206 l 596 206 q 606 256 599 226 q 620 317 613 285 q 636 376 628 349 l 636 376 l 822 953 l 1061 953 l 1061 0 l 907 0 l 907 522 q 908 632 907 575 q 911 733 910 689 q 913 790 913 778 l 913 790 l 901 790 q 888 738 899 775 q 867 660 878 701 q 846 588 856 618 l 846 588 l 653 0 l 515 0 l 322 586 q 304 649 314 613 q 285 722 294 685 q 268 790 275 760 l 268 790 l 257 790 q 259 708 258 757 q 261 610 260 660 q 263 522 263 561 l 263 522 l 263 0 z "},N:{ha:1019,x_min:113,x_max:907,o:"m 263 0 l 113 0 l 113 953 l 263 953 l 697 356 q 716 332 706 347 q 736 301 726 317 q 750 276 746 286 l 750 276 l 757 276 l 757 953 l 907 953 l 907 0 l 763 0 l 322 604 q 294 647 311 621 q 269 686 278 672 l 269 686 l 263 686 l 263 0 z "},O:{ha:1090,x_min:67,x_max:1024,o:"m 544 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 966 201 1024 311 q 801 38 908 92 q 544 -17 694 -17 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z "},P:{ha:926,x_min:113,x_max:890,o:"m 268 0 l 113 0 l 113 953 l 588 953 q 756 915 689 953 q 856 812 822 878 q 890 656 890 746 l 890 656 q 854 497 890 565 q 749 390 818 428 q 582 353 681 353 l 582 353 l 268 353 l 268 0 z m 268 819 l 268 486 l 575 486 q 691 531 649 486 q 733 654 733 575 l 733 654 q 715 744 733 707 q 663 800 697 781 q 575 819 628 819 l 575 819 l 268 819 z "},Q:{ha:1090,x_min:67,x_max:1024,o:"m 976 -181 l 769 -181 l 606 -14 q 575 -16 590 -15 q 544 -17 560 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 956 185 1024 297 q 767 22 889 72 l 767 22 l 976 -181 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z "},R:{ha:1003,x_min:113,x_max:949,o:"m 268 0 l 113 0 l 113 953 l 614 953 q 782 917 715 953 q 882 816 849 881 q 915 665 915 751 l 915 665 q 872 499 915 569 q 750 394 829 428 l 750 394 l 949 0 l 779 0 l 599 368 l 268 368 l 268 0 z m 268 819 l 268 499 l 601 499 q 717 543 676 499 q 758 667 758 588 l 758 667 q 740 749 758 715 q 688 801 722 783 q 601 819 653 819 l 601 819 l 268 819 z "},S:{ha:931,x_min:68,x_max:863,o:"m 465 -17 l 465 -17 q 315 -1 388 -17 q 188 51 243 15 q 100 141 132 86 q 68 272 68 196 l 68 272 q 69 288 68 281 q 69 301 69 296 l 69 301 l 225 301 q 224 289 225 297 q 224 275 224 281 l 224 275 q 254 188 224 224 q 340 133 285 151 q 465 115 394 115 l 465 115 q 540 120 504 115 q 606 135 576 125 q 658 162 636 146 q 693 200 681 178 q 706 251 706 222 l 706 251 q 680 325 706 296 q 610 374 654 354 q 512 408 567 393 q 399 439 457 424 q 285 475 340 454 q 187 526 231 496 q 117 601 143 556 q 92 711 92 646 l 92 711 q 118 822 92 774 q 194 903 144 871 q 314 953 244 936 q 471 969 383 969 l 471 969 q 613 953 546 969 q 729 904 679 938 q 808 819 779 871 q 836 697 836 768 l 836 697 l 836 681 l 682 681 l 682 699 q 656 774 682 743 q 582 821 629 804 q 472 838 535 838 l 472 838 q 349 823 399 838 q 273 783 299 808 q 247 721 247 757 l 247 721 q 274 655 247 681 q 344 611 300 629 q 442 578 388 593 q 555 548 497 564 q 667 511 613 532 q 766 460 722 490 q 836 384 810 429 q 863 274 863 339 l 863 274 q 811 106 863 171 q 670 13 760 42 q 465 -17 581 -17 z "},T:{ha:850,x_min:31,x_max:819,o:"m 501 0 l 346 0 l 346 819 l 31 819 l 31 953 l 819 953 l 819 819 l 501 819 l 501 0 z "},U:{ha:1011,x_min:108,x_max:903,o:"m 503 -17 l 503 -17 q 292 23 381 -17 q 156 146 203 63 q 108 357 108 229 l 108 357 l 108 953 l 264 953 l 264 353 q 326 175 264 235 q 503 115 389 115 l 503 115 q 683 175 618 115 q 747 353 747 235 l 747 353 l 747 953 l 903 953 l 903 357 q 855 146 903 229 q 717 23 807 63 q 503 -17 628 -17 z "},V:{ha:915,x_min:14,x_max:901,o:"m 549 0 l 365 0 l 14 953 l 182 953 l 418 288 q 432 249 425 271 q 446 206 439 226 q 458 171 453 186 l 458 171 l 465 171 q 478 206 471 186 q 492 246 485 225 q 506 286 499 267 l 506 286 l 739 953 l 901 953 l 549 0 z "},W:{ha:1303,x_min:15,x_max:1288,o:"m 465 0 l 278 0 l 15 953 l 181 953 l 343 325 q 353 283 347 310 q 363 228 358 257 q 372 176 368 200 l 372 176 l 381 176 q 388 215 385 194 q 394 257 390 236 q 402 296 399 278 q 407 325 406 314 l 407 325 l 557 953 l 757 953 l 908 325 q 918 283 913 310 q 928 228 924 257 q 938 176 933 200 l 938 176 l 946 176 q 953 214 949 193 q 961 255 957 235 q 970 293 965 275 q 978 325 975 311 l 978 325 l 1140 953 l 1288 953 l 1025 0 l 843 0 l 683 636 q 674 684 679 657 q 663 740 668 711 q 656 789 658 768 l 656 789 l 649 789 q 642 738 646 767 q 632 681 638 708 q 622 636 626 654 l 622 636 l 465 0 z "},X:{ha:949,x_min:15,x_max:933,o:"m 196 0 l 15 0 l 374 500 l 49 953 l 239 953 l 476 615 l 482 615 l 718 953 l 897 953 l 574 501 l 933 0 l 744 0 l 474 386 l 465 386 l 196 0 z "},Y:{ha:925,x_min:14,x_max:911,o:"m 540 0 l 385 0 l 385 392 l 14 953 l 192 953 l 464 531 l 471 531 l 740 953 l 911 953 l 540 392 l 540 0 z "},Z:{ha:882,x_min:43,x_max:831,o:"m 831 0 l 43 0 l 43 76 l 588 819 l 79 819 l 79 953 l 818 953 l 818 876 l 271 133 l 831 133 l 831 0 z "},a:{ha:764,x_min:47,x_max:757,o:"m 278 -17 l 278 -17 q 203 -8 243 -17 q 127 22 163 0 q 69 84 92 44 q 47 188 47 124 l 47 188 q 82 311 47 263 q 179 388 117 360 q 328 426 242 415 q 518 438 415 438 l 518 438 l 518 510 q 506 574 518 546 q 463 617 494 601 q 374 632 432 632 q 283 617 315 632 q 237 581 250 603 q 224 535 224 560 l 224 535 l 224 514 l 85 514 q 83 528 83 521 l 83 528 l 83 544 q 120 655 83 610 q 224 724 157 700 q 378 747 290 747 l 378 747 q 535 720 472 747 q 631 643 599 693 q 663 522 663 593 l 663 522 l 663 151 q 676 114 663 125 q 707 103 689 103 l 707 103 l 757 103 l 757 6 q 715 -8 740 -1 q 657 -15 690 -15 l 657 -15 q 594 -2 619 -15 q 552 35 568 11 q 531 90 536 60 l 531 90 l 522 90 q 462 34 497 58 q 381 -3 426 10 q 278 -17 335 -17 z m 318 103 l 318 103 q 398 116 361 103 q 461 153 435 129 q 503 212 488 178 q 518 286 518 246 l 518 286 l 518 335 q 350 324 422 335 q 238 283 278 313 q 197 200 197 253 l 197 200 q 211 147 197 168 q 253 114 225 125 q 318 103 281 103 z "},b:{ha:804,x_min:93,x_max:749,o:"m 460 -17 l 460 -17 q 329 13 388 -17 q 233 100 271 42 l 233 100 l 224 100 l 211 0 l 93 0 l 93 1004 l 238 1004 l 238 642 l 246 642 q 302 701 269 678 q 376 736 335 725 q 467 747 418 747 l 467 747 q 614 707 550 747 q 713 583 678 667 q 749 368 749 500 l 749 368 q 714 149 749 233 q 615 24 679 64 q 460 -17 550 -17 z m 419 108 l 419 108 q 522 133 482 108 q 581 212 561 158 q 600 351 600 265 l 600 351 l 600 376 q 581 517 600 463 q 522 597 563 571 q 417 622 482 622 l 417 622 q 343 608 376 622 q 286 565 310 594 q 250 488 263 535 q 238 374 238 440 l 238 374 l 238 354 q 256 220 238 275 q 315 137 275 165 q 419 108 356 108 z "},c:{ha:739,x_min:53,x_max:686,o:"m 383 -17 l 383 -17 q 200 24 274 -17 q 90 150 126 65 q 53 365 53 235 l 53 365 q 90 580 53 496 q 202 706 128 664 q 385 747 276 747 l 385 747 q 515 728 460 747 q 610 673 571 710 q 667 582 649 636 q 686 458 686 528 l 686 458 l 540 458 q 524 554 540 517 q 472 610 507 592 q 382 629 438 629 l 382 629 q 283 602 324 629 q 222 520 243 575 q 201 376 201 465 l 201 376 l 201 353 q 222 212 201 268 q 283 128 242 156 q 388 101 324 101 l 388 101 q 477 122 443 101 q 528 180 511 142 q 546 272 546 218 l 546 272 l 686 272 q 667 154 686 207 q 610 63 649 101 q 515 4 572 25 q 383 -17 458 -17 z "},d:{ha:804,x_min:54,x_max:711,o:"m 344 -17 l 344 -17 q 190 24 256 -17 q 90 149 125 64 q 54 368 54 233 l 54 368 q 90 583 54 500 q 190 707 126 667 q 338 747 254 747 l 338 747 q 428 736 386 747 q 502 701 469 725 q 557 642 535 678 l 557 642 l 567 642 l 567 1004 l 711 1004 l 711 0 l 593 0 l 579 100 l 569 100 q 474 13 533 42 q 344 -17 415 -17 z m 385 108 l 385 108 q 488 137 449 108 q 547 220 528 165 q 567 354 567 275 l 567 354 l 567 374 q 554 488 567 440 q 518 565 542 535 q 461 608 494 594 q 386 622 428 622 l 386 622 q 282 597 322 622 q 223 517 242 571 q 204 376 204 463 l 204 376 l 204 351 q 224 212 204 265 q 283 133 243 158 q 385 108 322 108 z "},e:{ha:769,x_min:54,x_max:715,o:"m 396 -17 l 396 -17 q 208 24 283 -17 q 93 150 132 65 q 54 365 54 235 l 54 365 q 93 581 54 497 q 208 706 132 665 q 399 747 285 747 l 399 747 q 573 708 503 747 q 679 588 643 668 q 715 385 715 507 l 715 385 l 715 329 l 203 329 q 226 199 206 251 q 290 123 247 147 q 397 99 332 99 l 397 99 q 469 109 438 99 q 524 140 501 119 q 558 188 546 160 q 571 253 571 217 l 571 253 l 713 253 q 690 138 713 188 q 626 53 668 88 q 525 1 583 19 q 396 -17 467 -17 z m 206 435 l 206 435 l 564 435 q 552 526 564 489 q 518 586 540 563 q 465 620 496 610 q 396 631 435 631 l 396 631 q 297 610 338 631 q 233 545 256 589 q 206 435 211 501 z "},f:{ha:407,x_min:18,x_max:406,o:"m 269 0 l 125 0 l 125 611 l 18 611 l 18 731 l 125 731 l 125 836 q 140 922 125 882 q 191 989 154 963 q 296 1015 228 1015 l 296 1015 q 335 1013 315 1015 q 374 1007 356 1011 q 406 997 392 1003 l 406 997 l 406 896 l 335 896 q 285 879 301 896 q 269 831 269 863 l 269 831 l 269 731 l 406 731 l 406 611 l 269 611 l 269 0 z "},g:{ha:796,x_min:25,x_max:779,o:"m 529 -253 l 215 -253 q 122 -232 165 -253 q 51 -172 78 -211 q 25 -78 25 -133 l 25 -78 q 59 22 25 -17 q 139 79 93 60 l 139 79 q 85 124 106 94 q 65 190 65 153 l 65 190 q 103 274 65 242 q 190 315 140 306 l 190 315 q 115 396 142 347 q 88 506 88 444 l 88 506 q 122 633 88 579 q 226 717 157 686 q 393 747 294 747 l 393 747 q 474 741 436 747 q 543 724 513 735 l 543 724 q 613 784 592 749 q 638 850 633 819 l 638 850 l 779 850 q 760 767 779 804 q 709 706 742 731 q 631 672 676 682 l 631 672 q 683 598 665 640 q 700 506 700 556 l 700 506 q 667 379 700 433 q 566 294 633 325 q 400 264 499 264 l 400 264 l 286 264 q 233 250 253 264 q 213 208 213 236 l 213 208 q 232 169 213 185 q 283 154 251 154 l 283 154 l 592 154 q 725 101 672 154 q 778 -36 778 47 l 778 -36 q 747 -147 778 -97 q 659 -224 715 -196 q 529 -253 603 -253 l 529 -253 z m 263 -146 l 263 -146 l 528 -146 q 581 -135 557 -146 q 618 -103 604 -124 q 632 -58 632 -83 l 632 -58 q 606 7 632 -17 q 543 31 581 31 l 543 31 l 263 31 q 197 5 224 31 q 171 -58 171 -21 l 171 -58 q 197 -122 171 -97 q 263 -146 222 -146 z m 394 368 l 394 368 q 517 405 476 368 q 557 506 557 442 l 557 506 q 517 606 557 571 q 394 642 476 642 l 394 642 q 272 606 313 642 q 232 506 232 571 l 232 506 q 249 433 232 464 q 303 385 267 401 q 394 368 340 368 z "},h:{ha:796,x_min:93,x_max:708,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 643 l 247 643 q 307 699 274 676 q 382 735 340 722 q 474 747 424 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 531 288 574 q 238 428 238 488 l 238 428 l 238 0 z "},i:{ha:331,x_min:93,x_max:238,o:"m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 238 0 l 93 0 l 93 731 l 238 731 l 238 0 z "},j:{ha:328,x_min:-36,x_max:238,o:"m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 71 -253 l 71 -253 q 34 -251 54 -253 q -5 -244 14 -249 q -36 -235 -24 -239 l -36 -235 l -36 -135 l 31 -135 q 77 -118 61 -135 q 93 -71 93 -101 l 93 -71 l 93 731 l 238 731 l 238 -78 q 223 -162 238 -122 q 172 -227 208 -201 q 71 -253 136 -253 z "},k:{ha:733,x_min:93,x_max:710,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 397 l 525 731 l 696 731 l 449 447 l 710 0 l 543 0 l 356 342 l 238 225 l 238 0 z "},l:{ha:331,x_min:93,x_max:238,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 0 z "},m:{ha:1194,x_min:93,x_max:1108,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 292 693 260 667 q 366 733 325 719 q 454 747 407 747 l 454 747 q 573 719 522 747 q 650 626 624 692 l 650 626 l 660 626 q 718 692 685 665 q 794 733 751 719 q 885 747 836 747 l 885 747 q 1000 724 950 747 q 1079 648 1050 701 q 1108 506 1108 594 l 1108 506 l 1108 0 l 964 0 l 964 479 q 954 548 964 521 q 928 591 944 575 q 888 614 911 607 q 836 621 864 621 l 836 621 q 754 597 790 621 q 696 529 718 572 q 674 428 674 486 l 674 428 l 674 0 l 529 0 l 529 479 q 519 548 529 521 q 493 591 510 575 q 453 614 476 607 q 403 621 429 621 l 403 621 q 319 597 357 621 q 260 529 282 572 q 238 428 238 486 l 238 428 l 238 0 z "},n:{ha:796,x_min:93,x_max:708,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 297 693 261 667 q 377 733 333 719 q 474 747 421 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 529 288 572 q 238 428 238 486 l 238 428 l 238 0 z "},o:{ha:810,x_min:54,x_max:756,o:"m 404 -17 l 404 -17 q 212 24 290 -17 q 94 150 133 65 q 54 365 54 235 l 54 365 q 94 581 54 497 q 212 706 133 665 q 404 747 290 747 l 404 747 q 599 706 521 747 q 716 581 676 665 q 756 365 756 497 l 756 365 q 716 150 756 235 q 599 24 676 65 q 404 -17 521 -17 z m 404 103 l 404 103 q 518 130 474 103 q 584 213 563 157 q 606 353 606 268 l 606 353 l 606 378 q 584 518 606 463 q 518 601 563 574 q 404 628 474 628 l 404 628 q 292 601 336 628 q 226 518 247 574 q 204 378 204 463 l 204 378 l 204 353 q 226 213 204 268 q 292 130 247 157 q 404 103 336 103 z "},p:{ha:804,x_min:93,x_max:749,o:"m 238 -240 l 93 -240 l 93 731 l 211 731 l 224 631 l 233 631 q 329 718 271 689 q 460 747 388 747 l 460 747 q 615 707 550 747 q 714 582 679 667 q 749 363 749 497 l 749 363 q 713 148 749 232 q 614 24 678 64 q 467 -17 550 -17 l 467 -17 q 376 -6 418 -17 q 302 29 335 6 q 246 89 269 53 l 246 89 l 238 89 l 238 -240 z m 417 108 l 417 108 q 522 134 482 108 q 581 214 563 160 q 600 351 600 268 l 600 351 l 600 376 q 581 518 600 464 q 522 597 561 572 q 419 622 482 622 l 419 622 q 315 594 356 622 q 256 510 275 565 q 238 375 238 454 l 238 375 l 238 356 q 250 243 238 290 q 286 166 263 196 q 343 122 310 136 q 417 108 376 108 z "},q:{ha:804,x_min:54,x_max:711,o:"m 711 -240 l 567 -240 l 567 89 l 557 89 q 501 29 535 53 q 426 -6 468 6 q 338 -17 385 -17 l 338 -17 q 190 24 254 -17 q 90 148 126 64 q 54 363 54 232 l 54 363 q 90 582 54 497 q 190 707 125 667 q 344 747 256 747 l 344 747 q 475 718 417 747 q 569 631 533 689 l 569 631 l 579 631 l 593 731 l 711 731 l 711 -240 z m 386 108 l 386 108 q 462 122 429 108 q 518 166 494 136 q 554 243 542 196 q 567 356 567 290 l 567 356 l 567 375 q 547 510 567 454 q 488 594 528 565 q 385 622 449 622 l 385 622 q 283 597 322 622 q 224 518 243 572 q 204 376 204 464 l 204 376 l 204 351 q 223 214 204 268 q 282 134 242 160 q 386 108 322 108 z "},r:{ha:481,x_min:93,x_max:465,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 613 l 233 613 q 266 678 246 647 q 319 728 286 708 q 399 747 351 747 l 399 747 q 438 743 421 747 q 465 736 456 739 l 465 736 l 465 600 l 417 600 q 338 586 372 600 q 281 545 304 572 q 248 479 258 518 q 238 392 238 440 l 238 392 l 238 0 z "},s:{ha:728,x_min:51,x_max:675,o:"m 363 -17 l 363 -17 q 228 0 286 -17 q 131 46 169 17 q 72 116 92 75 q 51 207 51 157 l 51 207 q 52 219 51 214 q 53 229 53 225 l 53 229 l 196 229 l 196 214 q 219 145 196 171 q 283 109 243 119 q 369 99 322 99 l 369 99 q 447 109 411 99 q 505 140 482 119 q 528 193 528 161 l 528 193 q 499 257 528 235 q 422 292 469 279 q 324 321 375 306 l 324 321 q 233 348 278 333 q 151 386 188 363 q 93 446 115 410 q 71 536 71 482 l 71 536 q 93 626 71 588 q 155 692 115 665 q 249 732 194 718 q 369 746 304 746 l 369 746 q 490 731 438 746 q 580 690 543 717 q 636 627 617 664 q 656 549 656 590 l 656 549 q 655 531 656 540 q 654 519 654 522 l 654 519 l 513 519 l 513 532 q 497 582 513 560 q 449 618 482 604 q 363 632 417 632 l 363 632 q 299 626 326 632 q 253 608 271 619 q 226 582 235 597 q 217 547 217 567 l 217 547 q 240 498 217 515 q 300 469 263 481 q 381 443 338 457 l 381 443 q 482 415 431 429 q 577 378 533 400 q 648 317 621 356 q 675 213 675 278 l 675 213 q 651 108 675 153 q 585 37 628 64 q 486 -3 543 10 q 363 -17 429 -17 z "},t:{ha:424,x_min:21,x_max:389,o:"m 275 -17 l 275 -17 q 177 8 213 -17 q 127 70 142 32 q 113 151 113 108 l 113 151 l 113 611 l 21 611 l 21 731 l 115 731 l 142 935 l 257 935 l 257 731 l 389 731 l 389 611 l 257 611 l 257 168 q 271 119 257 136 q 317 103 285 103 l 317 103 l 389 103 l 389 6 q 355 -5 375 0 q 314 -13 335 -10 q 275 -17 293 -17 z "},u:{ha:794,x_min:86,x_max:701,o:"m 322 -17 l 322 -17 q 151 40 217 -17 q 86 232 86 96 l 86 232 l 86 731 l 231 731 l 231 254 q 241 185 231 213 q 271 140 251 157 q 317 117 290 124 q 375 110 343 110 l 375 110 q 466 134 425 110 q 532 202 507 158 q 557 303 557 246 l 557 303 l 557 731 l 701 731 l 701 0 l 583 0 l 571 104 l 561 104 q 499 38 535 64 q 419 -3 463 11 q 322 -17 375 -17 z "},v:{ha:717,x_min:13,x_max:704,o:"m 432 0 l 283 0 l 13 731 l 164 731 l 290 382 q 311 317 299 357 q 336 236 324 278 q 358 161 349 194 l 358 161 l 365 161 q 385 234 374 193 q 410 315 397 275 q 432 382 422 356 l 432 382 l 557 731 l 704 731 l 432 0 z "},w:{ha:1028,x_min:10,x_max:1017,o:"m 379 0 l 229 0 l 10 731 l 160 731 l 267 331 q 281 269 275 301 q 293 213 288 238 q 301 178 299 188 l 301 178 l 310 178 q 322 235 315 203 q 335 294 329 267 q 343 335 340 321 l 343 335 l 440 731 l 596 731 l 696 333 q 708 283 701 311 q 720 226 714 254 q 729 178 726 199 l 729 178 l 738 178 q 748 224 742 197 q 761 279 754 251 q 774 331 768 307 l 774 331 l 879 731 l 1017 731 l 799 0 l 649 0 l 560 364 q 546 425 554 390 q 531 494 538 460 q 519 556 524 529 l 519 556 l 511 556 q 503 511 508 540 q 490 444 499 482 q 471 364 482 407 l 471 364 l 379 0 z "},x:{ha:735,x_min:17,x_max:718,o:"m 182 0 l 17 0 l 278 375 l 32 731 l 207 731 l 368 486 l 376 486 l 539 731 l 704 731 l 457 379 l 718 0 l 544 0 l 367 268 l 360 268 l 182 0 z "},y:{ha:717,x_min:13,x_max:704,o:"m 172 -253 l 172 -253 q 103 -247 131 -253 q 68 -239 75 -240 l 68 -239 l 68 -135 l 138 -135 q 199 -121 168 -135 q 256 -76 231 -107 q 297 0 281 -46 l 297 0 l 13 731 l 164 731 l 306 367 q 327 304 315 342 q 351 228 339 267 q 371 158 363 189 l 371 158 l 378 158 q 392 206 385 179 q 408 263 400 233 q 425 319 417 292 q 439 365 433 346 l 439 365 l 557 731 l 704 731 l 457 28 q 411 -82 436 -31 q 353 -172 386 -133 q 276 -231 321 -210 q 172 -253 232 -253 z "},z:{ha:699,x_min:39,x_max:656,o:"m 656 0 l 39 0 l 39 72 l 428 611 l 65 611 l 65 731 l 636 731 l 636 660 l 246 119 l 656 119 l 656 0 z "},".":{ha:400,x_min:122,x_max:276,o:"m 276 0 l 122 0 l 122 161 l 276 161 l 276 0 z "},",":{ha:400,x_min:110,x_max:276,o:"m 110 -214 l 110 -214 l 110 -151 q 159 -124 140 -146 q 187 -71 178 -103 q 196 0 196 -39 l 196 0 l 122 0 l 122 161 l 276 161 l 276 15 q 252 -112 276 -65 q 190 -183 228 -160 q 110 -214 151 -206 z "},"'":{ha:315,x_min:82,x_max:233,o:"m 206 568 l 103 568 l 82 749 l 82 953 l 233 953 l 233 749 l 206 568 z "},"\u2019":{ha:358,x_min:93,x_max:261,o:"m 93 578 l 93 578 l 93 642 q 143 669 124 647 q 171 722 163 690 q 179 792 179 754 l 179 792 l 106 792 l 106 953 l 261 953 l 261 807 q 236 680 261 728 q 173 609 211 632 q 93 578 135 586 z "},"!":{ha:392,x_min:111,x_max:281,o:"m 242 257 l 150 257 l 111 953 l 281 953 l 242 257 z m 274 0 l 118 0 l 118 161 l 274 161 l 274 0 z "},"?":{ha:826,x_min:86,x_max:724,o:"m 472 256 l 336 256 l 336 328 q 353 420 336 383 q 396 485 369 457 q 452 535 422 513 q 508 581 482 557 q 551 634 533 604 q 568 704 568 664 l 568 704 q 563 744 568 721 q 542 789 558 767 q 494 826 526 811 q 408 840 463 840 l 408 840 q 317 822 351 840 q 265 778 282 804 q 242 724 247 751 q 236 678 236 697 l 236 678 l 236 660 q 238 640 236 650 l 238 640 l 90 640 q 88 658 89 646 q 86 688 86 669 l 86 688 q 98 766 86 726 q 134 842 110 806 q 198 908 158 879 q 292 953 238 936 q 419 969 347 969 l 419 969 q 532 956 482 969 q 617 919 582 943 q 676 865 653 896 q 712 797 700 833 q 724 722 724 761 l 724 722 q 706 612 724 657 q 659 535 688 567 q 599 480 631 504 q 538 433 567 456 q 490 381 508 410 q 472 311 472 353 l 472 311 l 472 256 z m 481 0 l 328 0 l 328 161 l 481 161 l 481 0 z "},$:{ha:728,x_min:51,x_max:675,o:"m 403 -68 l 333 -68 l 333 94 q 228 111 275 97 l 228 111 q 131 156 169 126 q 72 227 92 186 q 51 318 51 268 l 51 318 q 52 331 51 325 q 53 340 53 336 l 53 340 l 196 340 l 196 325 q 219 256 196 282 q 283 221 243 231 l 283 221 q 333 211 307 214 l 333 211 l 333 428 q 324 431 329 429 l 324 431 q 233 458 278 443 q 151 497 188 474 q 93 556 115 519 q 71 647 71 593 l 71 647 q 93 738 71 699 q 155 803 115 776 q 250 843 194 829 l 250 843 q 333 856 289 853 l 333 856 l 333 1004 l 403 1004 l 403 856 q 490 843 451 853 l 490 843 q 580 801 543 828 q 636 738 617 774 q 656 660 656 701 l 656 660 q 655 642 656 650 q 654 631 654 633 l 654 631 l 513 631 l 513 643 q 497 693 513 671 q 450 729 482 715 l 450 729 q 403 740 431 738 l 403 740 l 403 549 q 482 526 442 538 l 482 526 q 577 489 533 511 q 648 427 621 467 q 675 324 675 388 l 675 324 q 651 219 675 263 q 585 147 628 175 q 486 107 543 119 l 486 107 q 403 96 447 99 l 403 96 l 403 -68 z m 403 408 l 403 211 q 447 219 426 214 l 447 219 q 505 251 482 229 q 528 304 528 272 l 528 304 q 499 368 528 346 q 422 404 469 390 l 422 404 q 403 408 413 406 l 403 408 z m 333 569 l 333 569 l 333 742 q 299 738 315 740 l 299 738 q 253 719 271 731 q 226 692 235 707 q 217 658 217 678 l 217 658 q 240 609 217 626 q 300 581 263 592 l 300 581 q 333 569 317 575 z "},"%":{ha:1331,x_min:125,x_max:1206,o:"m 381 0 l 260 0 l 953 953 l 1075 953 l 381 0 z m 344 468 l 344 468 q 227 491 276 468 q 151 568 178 514 q 125 718 125 622 l 125 718 q 151 869 125 815 q 227 947 178 924 q 344 969 276 969 l 344 969 q 460 947 413 969 q 535 869 508 924 q 561 718 561 815 l 561 718 q 535 567 561 622 q 460 490 508 513 q 344 468 413 468 z m 344 560 l 344 560 q 424 600 404 560 q 443 711 443 640 l 443 711 l 443 726 q 435 808 443 774 q 405 860 426 842 q 344 878 383 878 l 344 878 q 265 838 285 878 q 244 726 244 797 l 244 726 l 244 711 q 265 600 244 640 q 344 560 285 560 z m 989 -17 l 989 -17 q 873 6 922 -17 q 797 83 824 29 q 771 233 771 138 l 771 233 q 797 385 771 331 q 873 462 824 439 q 989 485 922 485 l 989 485 q 1106 462 1057 485 q 1180 385 1154 439 q 1206 233 1206 331 l 1206 233 q 1180 83 1206 138 q 1106 6 1154 28 q 989 -17 1057 -17 z m 989 75 l 989 75 q 1068 115 1049 75 q 1088 226 1088 156 l 1088 226 l 1088 242 q 1080 323 1088 289 q 1051 375 1072 357 q 989 393 1029 393 l 989 393 q 910 353 931 393 q 890 242 890 313 l 890 242 l 890 226 q 910 115 890 156 q 989 75 931 75 z "},"&":{ha:986,x_min:71,x_max:931,o:"m 439 -17 l 439 -17 q 248 16 331 -17 q 118 110 165 49 q 71 256 71 171 l 71 256 q 122 410 71 353 q 249 489 172 467 l 249 489 l 249 494 q 138 574 182 525 q 93 708 93 622 l 93 708 q 138 851 93 793 q 265 940 183 910 q 454 969 346 969 l 454 969 q 638 938 558 969 q 763 847 718 906 q 808 708 808 788 l 808 708 l 808 679 l 664 679 l 664 697 q 636 783 663 750 q 563 833 610 817 q 451 849 515 849 l 451 849 q 368 840 407 849 q 301 812 329 831 q 257 764 272 793 q 242 696 242 735 l 242 696 q 267 610 242 644 q 333 560 292 576 q 422 543 375 543 l 422 543 l 513 543 l 513 425 l 426 425 q 326 412 374 425 q 250 365 279 399 q 221 268 221 331 l 221 268 q 249 174 221 210 q 327 121 276 138 q 446 104 378 104 l 446 104 q 567 122 519 104 q 640 178 615 140 q 664 269 664 215 l 664 269 l 664 543 l 931 543 l 931 424 l 808 424 l 808 274 q 767 118 808 183 q 643 18 725 53 q 439 -17 561 -17 z "},"-":{ha:463,x_min:56,x_max:407,o:"m 407 306 l 56 306 l 56 444 l 407 444 l 407 306 z "},":":{ha:438,x_min:142,x_max:296,o:"m 296 569 l 142 569 l 142 731 l 296 731 l 296 569 z m 296 0 l 142 0 l 142 161 l 296 161 l 296 0 z "},"|":{ha:340,x_min:113,x_max:228,o:"m 228 -260 l 113 -260 l 113 1004 l 228 1004 l 228 -260 z "}},familyName:"Archivo Medium",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-239,xMax:1319,yMin:-400,yMax:1087},resolution:1e3};var wf={glyphs:{"0":{ha:868,x_min:63,x_max:806,o:"m 435 -17 l 435 -17 q 264 13 335 -17 q 149 103 193 43 q 83 257 104 164 q 63 478 63 350 l 63 478 q 83 697 63 604 q 149 851 104 790 q 264 941 193 911 q 435 971 335 971 l 435 971 q 605 941 535 971 q 719 851 675 911 q 785 697 764 790 q 806 478 806 604 l 806 478 q 785 257 806 350 q 719 103 764 164 q 605 13 675 43 q 435 -17 535 -17 z m 435 149 l 435 149 q 522 178 490 149 q 565 269 553 208 q 576 422 576 329 l 576 422 l 576 531 q 565 686 576 625 q 522 776 553 747 q 435 806 490 806 l 435 806 q 348 776 379 806 q 304 687 317 747 q 292 532 292 626 l 292 532 l 292 425 q 304 269 292 331 q 348 178 317 208 q 435 149 379 149 z "},"1":{ha:868,x_min:140,x_max:813,o:"m 813 0 l 142 0 l 142 179 l 369 179 l 369 689 l 140 689 l 140 824 q 262 847 196 828 q 392 895 328 867 q 508 956 457 924 l 508 956 l 597 956 l 597 179 l 813 179 l 813 0 z "},"2":{ha:868,x_min:69,x_max:803,o:"m 803 0 l 69 0 l 69 57 q 93 169 69 118 q 157 265 117 221 q 247 351 197 310 q 346 429 296 392 l 346 429 q 453 510 403 471 q 534 592 503 549 q 565 688 565 635 l 565 688 q 552 741 565 715 q 510 783 539 767 q 435 800 482 800 l 435 800 q 356 783 388 800 q 307 735 324 765 q 290 663 290 704 l 290 663 l 290 621 l 79 621 q 77 640 78 629 q 76 664 76 650 l 76 664 q 122 832 76 764 q 252 935 168 900 q 453 971 336 971 l 453 971 q 606 947 542 971 q 713 883 671 924 q 774 792 754 843 q 794 688 794 742 l 794 688 q 771 569 794 622 q 706 470 747 517 q 608 381 664 424 q 489 296 553 339 l 489 296 q 431 255 457 274 q 390 222 406 236 q 368 197 375 208 l 368 197 l 803 197 l 803 0 z "},"3":{ha:868,x_min:60,x_max:807,o:"m 436 -17 l 436 -17 q 227 20 311 -17 q 101 120 143 57 q 60 264 60 183 l 60 264 l 60 289 l 271 289 l 271 263 q 310 181 271 211 q 425 150 349 150 l 425 150 q 539 185 501 150 q 576 286 576 221 l 576 286 q 558 358 576 332 q 510 397 540 385 q 444 408 481 408 l 444 408 l 354 408 l 354 564 l 435 564 q 497 577 469 564 q 540 617 524 590 q 556 683 556 643 l 556 683 q 540 748 556 721 q 495 790 525 775 q 425 804 465 804 l 425 804 q 356 790 388 804 q 308 751 325 776 q 290 693 290 726 l 290 693 l 290 675 l 86 675 l 86 710 q 128 844 86 785 q 250 937 171 903 q 438 971 329 971 l 438 971 q 622 938 544 971 q 742 847 700 906 q 783 711 783 788 l 783 711 q 765 617 783 660 q 713 546 746 575 q 638 499 681 517 l 638 499 l 638 493 q 761 409 715 469 q 807 258 807 349 l 807 258 q 763 116 806 178 q 638 19 719 54 q 436 -17 556 -17 z "},"4":{ha:869,x_min:38,x_max:829,o:"m 703 0 l 482 0 l 482 203 l 38 203 l 38 379 q 135 551 88 457 q 226 751 183 644 q 299 971 269 858 l 299 971 l 528 971 q 490 845 517 913 q 428 709 464 778 q 353 577 393 640 q 277 462 314 514 q 210 378 240 410 l 210 378 l 482 378 l 482 596 q 515 654 497 621 q 549 724 532 688 q 580 794 567 760 q 601 857 593 828 l 601 857 l 703 857 l 703 378 l 829 378 l 829 203 l 703 203 l 703 0 z "},"5":{ha:868,x_min:58,x_max:806,o:"m 440 -17 l 440 -17 q 234 23 319 -17 q 103 134 149 63 q 58 303 58 206 l 58 303 l 271 303 q 289 224 271 258 q 342 170 307 189 q 425 151 376 151 l 425 151 q 507 171 474 151 q 558 227 540 190 q 576 314 576 264 l 576 314 q 558 399 576 364 q 507 452 540 433 q 428 471 474 471 l 428 471 q 360 458 388 471 q 317 429 333 446 q 289 397 300 413 l 289 397 l 96 422 l 136 954 l 744 954 l 744 756 l 315 756 l 303 569 q 335 590 311 576 q 401 617 360 604 q 496 629 442 629 l 496 629 q 657 593 588 629 q 766 486 726 557 q 806 313 806 415 l 806 313 q 761 141 806 215 q 635 25 717 67 q 440 -17 553 -17 z "},"6":{ha:868,x_min:64,x_max:815,o:"m 449 -17 l 449 -17 q 283 10 354 -17 q 162 92 211 36 q 88 237 113 147 q 64 451 64 326 l 64 451 q 88 694 64 594 q 160 854 113 793 q 280 943 208 915 q 444 971 351 971 l 444 971 q 631 933 554 971 q 747 825 707 894 q 788 660 788 756 l 788 660 l 575 660 q 560 740 575 708 q 515 789 544 772 q 444 806 486 806 l 444 806 q 351 775 383 806 q 306 684 318 744 q 294 532 294 624 l 294 532 q 346 569 314 551 q 417 599 378 588 q 499 610 457 610 l 499 610 q 667 573 596 610 q 776 469 738 536 q 815 308 815 401 l 815 308 q 769 133 815 206 q 640 22 722 61 q 449 -17 558 -17 z m 444 149 l 444 149 q 525 167 493 149 q 573 221 557 186 q 589 301 589 256 l 589 301 q 573 383 589 349 q 525 438 557 418 q 444 458 493 458 l 444 458 q 365 439 397 458 q 316 385 332 419 q 300 303 300 351 l 300 303 q 316 222 300 257 q 365 168 332 188 q 444 149 397 149 z "},"7":{ha:868,x_min:63,x_max:811,o:"m 464 0 l 213 0 q 238 210 213 107 q 307 409 263 313 q 408 592 351 506 q 529 754 465 679 l 529 754 l 63 754 l 63 954 l 811 954 l 811 835 q 711 705 761 774 q 617 562 661 636 q 538 408 572 488 q 483 246 503 329 q 464 76 464 163 l 464 76 l 464 0 z "},"8":{ha:868,x_min:58,x_max:810,o:"m 433 -17 l 433 -17 q 228 18 311 -17 q 101 115 144 53 q 58 263 58 178 l 58 263 q 98 398 58 344 q 211 486 138 451 l 211 486 q 117 583 144 533 q 89 697 89 633 l 89 697 q 132 842 89 781 q 252 937 175 903 q 433 971 329 971 l 433 971 q 614 937 536 971 q 735 842 692 903 q 779 697 779 781 l 779 697 q 751 581 779 632 q 656 486 722 531 l 656 486 q 770 398 731 451 q 810 263 810 344 l 810 263 q 766 115 810 178 q 639 18 722 53 q 433 -17 556 -17 z m 433 149 l 433 149 q 540 182 500 149 q 579 278 579 215 l 579 278 q 539 374 579 342 q 433 407 499 407 l 433 407 q 329 374 369 407 q 289 278 289 342 l 289 278 q 328 182 289 215 q 433 149 367 149 z m 433 567 l 433 567 q 531 596 492 567 q 571 686 571 625 l 571 686 q 533 776 571 746 q 433 807 494 807 l 433 807 q 335 776 372 807 q 299 686 299 746 l 299 686 q 336 596 299 625 q 433 567 374 567 z "},"9":{ha:868,x_min:54,x_max:806,o:"m 424 -17 l 424 -17 q 239 22 315 -17 q 122 129 163 60 q 81 294 81 199 l 81 294 l 294 294 q 309 215 294 247 q 353 165 324 182 q 425 149 383 149 l 425 149 q 518 179 486 149 q 562 271 550 210 q 574 422 574 332 l 574 422 q 524 386 556 404 q 452 356 492 368 q 371 344 413 344 l 371 344 q 203 381 274 344 q 93 486 132 418 q 54 646 54 554 l 54 646 q 100 822 54 749 q 228 933 146 894 q 419 971 311 971 l 419 971 q 586 944 514 971 q 707 863 658 918 q 781 718 756 807 q 806 503 806 629 l 806 503 q 781 260 806 360 q 709 100 757 161 q 590 11 661 39 q 424 -17 518 -17 z m 424 497 l 424 497 q 503 516 471 497 q 552 569 536 535 q 568 650 568 603 l 568 650 q 552 732 568 697 q 504 786 536 767 q 424 806 472 806 l 424 806 q 344 786 376 806 q 296 733 313 767 q 279 651 279 699 l 279 651 q 295 569 279 604 q 343 516 311 535 q 424 497 375 497 z "},"=":{ha:901,x_min:101,x_max:800,o:"m 800 432 l 101 432 l 101 593 l 800 593 l 800 432 z m 800 126 l 101 126 l 101 288 l 800 288 l 800 126 z "},"+":{ha:901,x_min:101,x_max:800,o:"m 531 0 l 369 0 l 369 281 l 101 281 l 101 442 l 369 442 l 369 722 l 531 722 l 531 442 l 800 442 l 800 281 l 531 281 l 531 0 z "}," ":{ha:263,x_min:0,x_max:0,o:""},A:{ha:1036,x_min:11,x_max:1026,o:"m 267 0 l 11 0 l 369 954 l 668 954 l 1026 0 l 761 0 l 704 165 l 324 165 l 267 0 z m 453 553 l 383 351 l 643 351 l 575 553 q 562 591 569 568 q 547 640 554 614 q 532 692 539 665 q 518 738 525 718 l 518 738 l 508 738 q 493 678 503 711 l 493 678 l 472 611 q 453 553 461 578 l 453 553 z "},B:{ha:1035,x_min:104,x_max:976,o:"m 692 0 l 104 0 l 104 954 l 688 954 q 821 925 761 954 q 916 843 881 896 q 951 719 951 790 l 951 719 q 930 613 951 657 q 873 540 908 568 q 793 499 838 513 l 793 499 l 793 493 q 886 453 844 482 q 952 376 928 425 q 976 258 976 328 l 976 258 q 938 119 976 176 q 835 31 899 61 q 692 0 771 0 l 692 0 z m 353 399 l 353 192 l 624 192 q 695 218 668 192 q 722 299 722 244 l 722 299 q 710 351 722 328 q 676 386 699 374 q 619 399 653 399 l 619 399 l 353 399 z m 353 769 l 353 575 l 601 575 q 653 588 632 575 q 687 622 675 600 q 699 675 699 644 l 699 675 q 672 744 699 719 q 606 769 646 769 l 606 769 l 353 769 z "},C:{ha:1044,x_min:63,x_max:985,o:"m 543 -17 l 543 -17 q 281 37 389 -17 q 118 200 174 90 q 63 478 63 310 l 63 478 q 187 848 63 725 q 543 971 311 971 l 543 971 q 772 927 672 971 q 928 797 872 883 q 985 581 985 710 l 985 581 l 742 581 q 717 685 742 642 q 649 753 693 729 q 543 776 606 776 l 543 776 q 415 744 465 776 q 342 653 365 713 q 318 508 318 593 l 318 508 l 318 446 q 342 301 318 361 q 415 209 365 240 q 542 178 464 178 l 542 178 q 655 200 608 178 q 726 266 701 222 q 750 371 750 310 l 750 371 l 985 371 q 930 156 985 242 q 776 26 875 69 q 543 -17 676 -17 z "},D:{ha:1049,x_min:104,x_max:986,o:"m 503 0 l 104 0 l 104 954 l 503 954 q 766 903 658 954 q 930 747 874 851 q 986 478 986 642 l 986 478 q 930 209 986 315 q 766 51 874 103 q 503 0 658 0 l 503 0 z m 353 760 l 353 194 l 500 194 q 601 211 558 194 q 674 260 644 228 q 717 339 703 292 q 731 447 731 386 l 731 447 l 731 506 q 717 615 731 568 q 674 694 703 663 q 601 743 644 726 q 500 760 558 760 l 500 760 l 353 760 z "},E:{ha:971,x_min:107,x_max:904,o:"m 904 0 l 107 0 l 107 954 l 894 954 l 894 760 l 356 760 l 356 581 l 826 581 l 826 390 l 356 390 l 356 194 l 904 194 l 904 0 z "},F:{ha:890,x_min:104,x_max:836,o:"m 353 0 l 104 0 l 104 954 l 836 954 l 836 760 l 353 760 l 353 554 l 778 554 l 778 364 l 353 364 l 353 0 z "},G:{ha:1132,x_min:68,x_max:1040,o:"m 539 -17 l 539 -17 q 188 106 308 -17 q 68 478 68 228 l 68 478 q 127 752 68 643 q 299 916 186 861 q 572 971 413 971 l 572 971 q 753 949 668 971 q 903 883 838 926 q 1004 773 968 839 q 1040 618 1040 707 l 1040 618 l 796 618 q 779 685 796 656 q 733 735 763 715 q 664 766 703 756 q 582 776 625 776 l 582 776 q 469 760 518 776 q 388 708 419 743 q 340 624 356 674 q 324 507 324 574 l 324 507 l 324 446 q 351 297 324 357 q 435 208 379 238 q 574 178 492 178 l 574 178 q 688 197 638 178 q 769 253 739 217 q 799 342 799 290 l 799 342 l 799 349 l 542 349 l 542 524 l 1040 524 l 1040 0 l 896 0 l 872 100 q 780 35 829 61 q 672 -4 731 8 q 539 -17 613 -17 z "},H:{ha:1093,x_min:104,x_max:989,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 588 l 740 588 l 740 954 l 989 954 l 989 0 l 740 0 l 740 385 l 353 385 l 353 0 z "},I:{ha:457,x_min:104,x_max:353,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 0 z "},J:{ha:875,x_min:40,x_max:772,o:"m 407 -17 l 407 -17 q 209 17 292 -17 q 83 122 126 51 q 40 301 40 192 l 40 301 l 40 332 l 278 332 l 278 301 q 309 208 278 238 q 401 178 340 178 l 401 178 q 492 215 461 178 q 524 331 524 253 l 524 331 l 524 954 l 772 954 l 772 329 q 729 134 772 211 q 604 20 686 57 q 407 -17 522 -17 z "},K:{ha:1069,x_min:104,x_max:1046,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 531 l 731 954 l 1039 954 l 683 564 l 1046 0 l 751 0 l 511 394 l 353 249 l 353 0 z "},L:{ha:865,x_min:104,x_max:838,o:"m 838 0 l 104 0 l 104 954 l 353 954 l 353 204 l 838 204 l 838 0 z "},M:{ha:1269,x_min:104,x_max:1165,o:"m 331 0 l 104 0 l 104 954 l 467 954 l 582 529 q 599 469 589 507 q 618 389 608 431 q 635 314 628 347 l 635 314 l 646 314 q 660 377 651 340 q 678 455 668 414 q 696 531 688 496 l 696 531 l 813 954 l 1165 954 l 1165 0 l 924 0 l 924 407 q 924 528 924 467 q 926 639 925 589 q 928 711 928 689 l 928 711 l 917 711 q 903 651 913 690 q 884 569 894 611 q 865 496 874 526 l 865 496 l 726 0 l 526 0 l 386 496 l 369 563 q 351 642 360 601 q 335 710 342 682 l 335 710 l 324 710 q 326 622 325 674 q 329 513 328 569 q 331 407 331 457 l 331 407 l 331 0 z "},N:{ha:1093,x_min:104,x_max:989,o:"m 335 0 l 104 0 l 104 954 l 325 954 l 672 511 q 698 479 682 500 q 729 437 714 458 q 751 403 744 415 l 751 403 l 758 404 l 758 954 l 989 954 l 989 0 l 769 0 l 401 467 q 367 513 383 489 q 342 551 351 536 l 342 551 l 335 550 l 335 0 z "},O:{ha:1125,x_min:63,x_max:1063,o:"m 563 -17 l 563 -17 q 294 38 406 -17 q 122 203 182 93 q 63 478 63 313 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 1003 203 1063 313 q 831 38 943 93 q 563 -17 719 -17 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z "},P:{ha:969,x_min:104,x_max:938,o:"m 353 0 l 104 0 l 104 954 l 629 954 q 795 915 726 954 q 901 805 864 875 q 938 640 938 735 l 938 640 q 899 472 938 543 q 791 362 861 401 q 624 322 721 322 l 624 322 l 353 322 l 353 0 z m 353 761 l 353 514 l 565 514 q 654 547 624 514 q 685 638 685 579 l 685 638 q 672 706 685 679 q 632 747 658 732 q 565 761 606 761 l 565 761 l 353 761 z "},Q:{ha:1125,x_min:63,x_max:1063,o:"m 1036 -182 l 728 -182 l 575 -12 q 557 -15 567 -14 q 539 -15 547 -15 l 539 -15 q 283 40 390 -15 q 119 206 176 96 q 63 478 63 317 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 999 198 1063 308 q 821 32 936 88 l 821 32 l 1036 -182 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z "},R:{ha:1042,x_min:104,x_max:1007,o:"m 353 0 l 104 0 l 104 954 l 658 954 q 835 915 764 954 q 941 806 906 875 q 976 653 976 738 l 976 653 q 934 490 976 561 q 815 378 892 418 l 815 378 l 1007 0 l 729 0 l 571 336 l 353 336 l 353 0 z m 353 765 l 353 521 l 610 521 q 692 555 661 521 q 724 646 724 589 l 724 646 q 710 710 724 683 q 671 751 696 736 q 610 765 646 765 l 610 765 l 353 765 z "},S:{ha:968,x_min:61,x_max:913,o:"m 500 -17 l 500 -17 q 331 -1 410 -17 q 191 51 251 15 q 96 147 131 88 q 61 292 61 206 l 61 292 l 61 304 q 63 315 61 311 l 63 315 l 303 315 q 302 305 303 311 q 301 294 301 299 l 301 294 q 324 223 301 250 q 389 184 347 196 q 486 172 431 172 l 486 172 q 543 175 517 172 q 590 185 569 178 q 627 202 611 192 q 651 227 643 213 q 658 261 658 242 l 658 261 q 634 314 658 293 q 569 349 610 335 q 476 375 528 363 q 369 401 425 388 q 263 436 314 415 q 170 489 211 457 q 105 569 129 521 q 81 685 81 617 l 81 685 q 113 815 81 760 q 201 904 144 869 q 331 955 257 939 q 488 971 404 971 l 488 971 q 641 954 569 971 q 768 902 713 938 q 855 813 824 867 q 888 685 886 760 l 888 685 l 888 668 l 649 668 l 649 678 q 631 734 649 710 q 579 773 614 758 q 493 788 544 788 q 406 778 442 788 q 352 750 371 768 q 333 707 333 732 l 333 707 q 358 657 333 676 q 424 624 382 638 q 517 598 465 610 q 623 573 568 586 q 729 540 678 560 q 822 488 781 519 q 888 411 864 457 q 913 300 913 365 l 913 300 q 859 117 913 186 q 712 15 806 47 q 500 -17 618 -17 z "},T:{ha:938,x_min:33,x_max:901,o:"m 592 0 l 343 0 l 343 750 l 33 750 l 33 954 l 901 954 l 901 750 l 592 750 l 592 0 z "},U:{ha:1088,x_min:101,x_max:986,o:"m 543 -17 l 543 -17 q 306 26 406 -17 q 154 156 207 69 q 101 369 101 242 l 101 369 l 101 954 l 351 954 l 351 375 q 400 231 351 283 q 543 178 449 178 l 543 178 q 688 231 638 178 q 738 375 738 283 l 738 375 l 738 954 l 986 954 l 986 369 q 933 156 986 242 q 782 26 881 69 q 543 -17 683 -17 z "},V:{ha:1013,x_min:19,x_max:993,o:"m 651 0 l 363 0 l 19 954 l 286 954 l 461 415 q 475 372 467 399 q 492 316 483 344 q 507 265 501 288 l 507 265 l 517 265 q 531 313 524 286 q 547 367 539 340 q 561 414 556 394 l 561 414 l 736 954 l 993 954 l 651 0 z "},W:{ha:1360,x_min:10,x_max:1350,o:"m 532 0 l 250 0 l 10 954 l 271 954 l 388 453 q 394 417 390 440 q 403 367 399 393 q 413 318 408 340 l 413 318 l 418 318 q 424 351 421 332 q 430 388 426 369 q 437 424 433 407 q 442 453 440 440 l 442 453 l 551 954 l 822 954 l 935 453 q 943 415 939 439 q 952 365 947 392 q 961 318 957 339 l 961 318 l 967 318 q 973 351 969 333 q 980 387 976 368 q 987 422 983 406 q 993 453 990 439 l 993 453 l 1106 954 l 1350 954 l 1110 0 l 832 0 l 710 528 q 701 572 707 547 q 691 622 696 597 q 683 667 686 647 l 683 667 l 678 667 q 671 622 675 647 q 662 572 667 597 q 653 528 657 547 l 653 528 l 532 0 z "},X:{ha:1022,x_min:10,x_max:1015,o:"m 292 0 l 10 0 l 353 503 l 43 954 l 344 954 l 519 676 l 526 676 l 701 954 l 983 954 l 672 503 l 1015 0 l 713 0 l 506 329 l 499 329 l 292 0 z "},Y:{ha:1017,x_min:11,x_max:1004,o:"m 635 0 l 385 0 l 385 378 l 11 954 l 299 954 l 513 597 l 519 597 l 732 954 l 1004 954 l 635 378 l 635 0 z "},Z:{ha:947,x_min:36,x_max:900,o:"m 900 0 l 36 0 l 36 93 l 510 760 l 71 760 l 71 954 l 889 954 l 889 861 l 415 194 l 900 194 l 900 0 z "},a:{ha:856,x_min:44,x_max:849,o:"m 290 -17 l 290 -17 q 201 -8 244 -17 q 122 24 157 1 q 65 88 86 47 q 44 189 44 128 l 44 189 q 78 318 44 268 q 174 397 111 368 q 327 436 238 425 q 528 447 417 447 l 528 447 l 528 493 q 515 547 528 525 q 478 580 503 568 q 414 592 454 592 l 414 592 q 351 583 378 592 q 310 559 324 575 q 296 521 296 543 l 296 521 l 296 508 l 74 508 q 72 521 72 515 l 72 521 l 72 533 q 113 647 72 599 q 231 722 154 696 q 415 749 307 749 l 415 749 q 592 724 517 749 q 712 647 668 699 q 756 513 756 596 l 756 513 l 756 200 q 769 163 756 176 q 801 149 782 149 l 801 149 l 849 149 l 849 8 q 801 -8 833 1 q 722 -17 768 -17 l 722 -17 q 640 -5 675 -17 q 581 28 604 7 q 550 79 558 50 l 550 79 l 540 79 q 478 29 514 51 q 397 -5 443 7 q 290 -17 350 -17 z m 375 140 l 375 140 q 436 150 408 140 q 484 177 464 160 q 516 219 504 194 q 528 274 528 244 l 528 274 l 528 322 q 392 311 449 322 q 304 276 335 300 q 274 217 274 253 l 274 217 q 287 173 274 190 q 322 148 300 156 q 375 140 344 140 z "},b:{ha:879,x_min:88,x_max:826,o:"m 526 -17 l 526 -17 q 396 13 456 -17 q 300 101 336 42 l 300 101 l 290 101 l 274 0 l 88 0 l 88 1006 l 315 1006 l 315 657 l 324 657 q 377 707 346 686 q 447 738 408 728 q 531 749 486 749 l 531 749 q 688 707 621 749 q 790 581 754 665 q 826 368 826 497 l 826 368 q 790 151 826 236 q 687 25 754 67 q 526 -17 619 -17 z m 456 161 l 456 161 q 538 181 507 161 q 583 242 569 201 q 597 340 597 282 l 597 340 l 597 389 q 583 489 597 449 q 538 550 569 529 q 456 571 507 571 l 456 571 q 391 557 418 571 q 347 518 364 543 q 322 458 329 493 q 314 382 314 424 l 314 382 l 314 349 q 328 249 314 292 q 374 184 343 207 q 456 161 406 161 z "},c:{ha:850,x_min:51,x_max:793,o:"m 432 -17 l 432 -17 q 226 25 311 -17 q 97 152 142 67 q 51 367 51 238 l 51 367 q 97 581 51 496 q 228 708 143 667 q 432 750 313 750 l 432 750 q 576 732 510 750 q 691 676 642 714 q 767 582 740 639 q 793 446 793 525 l 793 446 l 569 446 q 553 524 569 493 q 507 569 538 554 q 431 585 476 585 l 431 585 q 345 563 378 585 q 297 497 313 540 q 282 390 282 454 l 282 390 l 282 340 q 297 235 282 278 q 347 170 313 192 q 436 149 382 149 l 436 149 q 515 163 483 149 q 563 209 546 178 q 579 288 579 240 l 579 288 l 793 288 q 767 153 793 211 q 692 58 740 96 q 576 2 643 21 q 432 -17 510 -17 z "},d:{ha:879,x_min:51,x_max:792,o:"m 353 -17 l 353 -17 q 192 25 260 -17 q 88 151 124 67 q 51 368 51 236 l 51 368 q 88 581 51 497 q 192 707 125 665 q 349 749 258 749 l 349 749 q 431 739 392 749 q 502 708 471 729 q 556 657 533 688 l 556 657 l 564 657 l 564 1006 l 792 1006 l 792 0 l 606 0 l 589 101 l 579 101 q 483 13 542 42 q 353 -17 425 -17 z m 424 161 l 424 161 q 505 184 474 161 q 551 249 536 207 q 565 349 565 292 l 565 349 l 565 382 q 557 458 565 424 q 532 518 549 493 q 488 557 515 543 q 424 571 461 571 l 424 571 q 341 550 372 571 q 296 489 310 529 q 282 389 282 449 l 282 389 l 282 340 q 296 242 282 282 q 341 181 310 201 q 424 161 372 161 z "},e:{ha:860,x_min:51,x_max:807,o:"m 444 -17 l 444 -17 q 232 24 319 -17 q 98 150 144 65 q 51 367 51 235 l 51 367 q 97 581 51 496 q 229 707 143 665 q 436 749 315 749 l 436 749 q 638 708 556 749 q 764 585 721 668 q 807 369 807 501 l 807 369 l 807 321 l 282 321 q 299 222 282 263 q 350 161 315 182 q 443 140 385 140 l 443 140 q 504 149 478 140 q 549 173 531 157 q 576 211 567 189 q 586 261 586 233 l 586 261 l 807 261 q 783 142 807 194 q 711 55 758 90 q 597 1 664 19 q 444 -17 529 -17 z m 283 447 l 283 447 l 575 447 q 566 510 575 483 q 540 556 557 538 q 498 583 522 574 q 442 592 474 592 l 442 592 q 358 575 392 592 q 307 526 325 558 q 283 447 289 494 z "},f:{ha:489,x_min:15,x_max:483,o:"m 346 0 l 119 0 l 119 567 l 15 567 l 15 732 l 119 732 l 119 792 q 145 919 119 868 q 222 994 171 969 q 349 1019 274 1019 l 349 1019 q 394 1017 369 1019 q 444 1008 419 1014 q 483 997 468 1003 l 483 997 l 483 854 l 417 854 q 362 838 378 854 q 346 786 346 821 l 346 786 l 346 732 l 483 732 l 483 567 l 346 567 l 346 0 z "},g:{ha:878,x_min:18,x_max:864,o:"m 578 -274 l 204 -274 q 113 -252 156 -274 q 44 -191 69 -231 q 18 -99 18 -151 l 18 -99 q 53 -1 18 -40 q 133 58 89 39 l 133 58 q 81 110 101 79 q 61 181 61 142 l 61 181 q 101 272 61 235 q 196 322 142 310 l 196 322 q 115 401 146 354 q 83 507 83 449 l 83 507 q 128 644 83 592 q 253 723 174 697 q 433 749 332 749 l 433 749 q 506 745 474 749 q 565 735 539 742 l 565 735 q 642 804 621 768 q 664 863 663 840 l 664 863 l 863 863 q 843 769 863 807 q 788 707 824 731 q 701 671 751 683 l 701 671 q 760 598 739 640 q 781 507 781 556 l 781 507 q 741 374 781 428 q 632 293 701 321 q 472 265 563 265 l 472 265 l 364 265 q 306 253 325 265 q 288 222 288 242 l 288 222 q 304 191 288 204 q 361 178 321 178 l 361 178 l 643 178 q 807 117 750 178 q 864 -36 864 57 l 864 -36 q 825 -160 864 -107 q 722 -244 786 -214 q 578 -274 657 -274 l 578 -274 z m 314 -135 l 314 -135 l 554 -135 q 596 -126 578 -135 q 624 -101 614 -117 q 635 -64 635 -85 l 635 -64 q 613 -11 635 -29 q 558 7 590 7 l 558 7 l 314 7 q 260 -12 282 7 q 239 -62 239 -31 l 239 -62 q 260 -115 239 -94 q 314 -135 282 -135 z m 432 399 l 432 399 q 524 426 492 399 q 557 507 557 454 l 557 507 q 524 588 557 561 q 432 615 492 615 l 432 615 q 342 588 375 615 q 308 507 308 561 l 308 507 q 322 448 308 472 q 364 411 336 424 q 432 399 392 399 z "},h:{ha:874,x_min:86,x_max:790,o:"m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 653 l 324 653 q 381 703 347 682 q 457 737 415 725 q 543 749 499 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z "},i:{ha:400,x_min:86,x_max:314,o:"m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 314 0 l 86 0 l 86 732 l 314 732 l 314 0 z "},j:{ha:397,x_min:-54,x_max:314,o:"m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 93 -274 l 93 -274 q 45 -271 72 -274 q -9 -262 18 -268 q -54 -251 -36 -257 l -54 -251 l -54 -108 l 17 -108 q 69 -88 53 -108 q 86 -31 86 -68 l 86 -31 l 86 732 l 314 732 l 314 -51 q 292 -171 314 -121 q 222 -247 271 -221 q 93 -274 174 -274 z "},k:{ha:847,x_min:86,x_max:838,o:"m 314 0 l 86 0 l 86 1007 l 314 1007 l 314 438 l 561 732 l 828 732 l 568 442 l 838 0 l 578 0 l 415 285 l 314 186 l 314 0 z "},l:{ha:400,x_min:86,x_max:314,o:"m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 0 z "},m:{ha:1301,x_min:86,x_max:1218,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 360 693 325 665 q 439 735 396 721 q 531 749 482 749 l 531 749 q 658 719 606 749 q 739 628 711 689 l 739 628 l 749 628 q 809 693 774 665 q 888 735 844 721 q 979 749 932 749 l 979 749 q 1108 720 1056 749 q 1190 634 1161 692 q 1218 488 1218 576 l 1218 488 l 1218 0 l 990 0 l 990 453 q 983 505 990 483 q 964 541 976 526 q 932 563 951 556 q 890 569 913 569 l 890 569 q 826 551 854 569 q 782 501 797 532 q 767 428 767 469 l 767 428 l 767 0 l 539 0 l 539 453 q 532 505 539 483 q 513 541 525 526 q 481 563 500 556 q 439 569 461 569 l 439 569 q 374 551 403 569 q 330 501 346 532 q 314 428 314 469 l 314 428 l 314 0 z "},n:{ha:874,x_min:86,x_max:790,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 364 693 328 665 q 446 735 400 721 q 543 749 492 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z "},o:{ha:882,x_min:51,x_max:831,o:"m 440 -17 l 440 -17 q 231 25 318 -17 q 98 152 144 67 q 51 367 51 238 l 51 367 q 98 581 51 496 q 231 707 144 665 q 440 749 318 749 l 440 749 q 651 707 564 749 q 784 581 738 665 q 831 367 831 496 l 831 367 q 784 152 831 238 q 651 25 738 67 q 440 -17 564 -17 z m 440 149 l 440 149 q 533 171 497 149 q 584 235 568 193 q 600 340 600 278 l 600 340 l 600 392 q 584 497 600 454 q 533 562 568 540 q 440 583 497 583 l 440 583 q 349 562 385 583 q 298 497 314 540 q 282 392 282 454 l 282 392 l 282 340 q 298 235 282 278 q 349 171 314 193 q 440 149 385 149 z "},p:{ha:879,x_min:88,x_max:826,o:"m 315 -258 l 88 -258 l 88 732 l 274 732 l 293 631 l 303 631 q 398 721 340 693 q 526 749 456 749 l 526 749 q 687 707 619 749 q 790 581 754 665 q 826 365 826 496 l 826 365 q 790 151 826 236 q 688 25 754 67 q 531 -17 621 -17 l 531 -17 q 447 -7 486 -17 q 377 24 408 3 q 324 75 346 44 l 324 75 l 315 75 l 315 -258 z m 456 161 l 456 161 q 538 182 507 161 q 583 243 569 203 q 597 342 597 283 l 597 342 l 597 390 q 583 490 597 449 q 538 551 569 531 q 456 571 507 571 l 456 571 q 374 548 406 571 q 328 483 343 525 q 314 383 314 440 l 314 383 l 314 350 q 322 274 314 308 q 347 214 329 239 q 391 175 364 189 q 456 161 418 161 z "},q:{ha:879,x_min:51,x_max:792,o:"m 792 -258 l 564 -258 l 564 75 l 556 75 q 500 25 531 46 q 431 -6 469 4 q 349 -17 392 -17 l 349 -17 q 192 25 258 -17 q 88 151 125 67 q 51 365 51 236 l 51 365 q 88 581 51 496 q 192 707 124 665 q 353 749 260 749 l 353 749 q 483 719 424 749 q 576 631 542 689 l 576 631 l 586 631 l 606 732 l 792 732 l 792 -258 z m 424 161 l 424 161 q 488 175 461 161 q 532 214 515 189 q 557 274 549 239 q 565 350 565 308 l 565 350 l 565 383 q 551 483 565 440 q 505 548 536 525 q 424 571 474 571 l 424 571 q 341 551 372 571 q 296 490 310 531 q 282 390 282 449 l 282 390 l 282 342 q 296 243 282 283 q 341 182 310 203 q 424 161 372 161 z "},r:{ha:565,x_min:86,x_max:556,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 619 l 300 619 q 341 687 317 657 q 401 733 365 717 q 479 750 436 750 l 479 750 q 525 745 504 750 q 556 735 546 740 l 556 735 l 556 536 l 483 536 q 408 524 440 536 q 354 488 375 513 q 324 429 333 464 q 314 349 314 394 l 314 349 l 314 0 z "},s:{ha:804,x_min:51,x_max:754,o:"m 400 -17 l 400 -17 q 265 -1 328 -17 q 153 43 201 14 q 78 115 106 72 q 51 215 51 158 l 51 215 l 51 226 q 53 235 51 231 l 53 235 l 268 235 l 268 222 q 288 172 269 192 q 338 142 307 151 q 404 133 368 133 l 404 133 q 460 139 431 133 q 511 158 490 144 q 532 199 532 172 l 532 199 q 506 243 532 228 q 438 269 481 258 q 347 289 396 279 l 347 289 q 249 314 299 300 q 159 352 200 328 q 93 415 118 376 q 68 514 68 454 l 68 514 q 95 623 68 578 q 169 696 122 668 q 278 736 217 724 q 410 749 340 749 l 410 749 q 531 736 474 749 q 635 698 589 724 q 708 633 682 672 q 735 540 735 593 l 735 540 q 734 526 735 533 q 733 515 733 518 l 733 515 l 519 515 l 519 526 q 504 565 519 550 q 463 590 489 581 q 404 599 436 599 l 404 599 q 363 595 383 599 q 326 585 343 592 q 299 568 310 579 q 289 540 289 557 l 289 540 q 307 506 289 519 q 356 485 325 493 q 425 467 388 476 l 425 467 q 533 444 476 456 q 641 410 590 432 q 723 347 692 389 q 754 231 754 304 l 754 231 q 726 113 754 161 q 650 37 699 65 q 538 -4 601 8 q 400 -17 474 -17 z "},t:{ha:535,x_min:29,x_max:494,o:"m 343 -17 l 343 -17 q 223 5 272 -17 q 149 69 174 26 q 125 174 125 113 l 125 174 l 125 567 l 29 567 l 29 732 l 132 732 l 179 946 l 351 946 l 351 732 l 494 732 l 494 567 l 351 567 l 351 229 q 367 169 351 190 q 422 149 382 149 l 422 149 l 494 149 l 494 7 q 449 -5 476 1 q 394 -14 422 -11 q 343 -17 367 -17 z "},u:{ha:874,x_min:82,x_max:786,o:"m 329 -17 l 329 -17 q 147 49 211 -17 q 82 249 82 114 l 82 249 l 82 732 l 310 732 l 310 281 q 317 229 310 251 q 339 192 325 207 q 374 169 353 176 q 421 163 396 163 l 421 163 q 492 181 461 163 q 540 233 522 200 q 558 304 558 265 l 558 304 l 558 732 l 786 732 l 786 0 l 599 0 l 585 104 l 575 104 q 512 40 550 68 q 427 -2 474 13 q 329 -17 381 -17 z "},v:{ha:797,x_min:3,x_max:793,o:"m 517 0 l 278 0 l 3 732 l 246 732 l 339 453 q 357 392 346 432 q 381 310 368 353 q 403 232 393 268 l 403 232 l 411 232 q 433 307 421 265 q 456 388 444 349 q 475 453 467 428 l 475 453 l 567 732 l 793 732 l 517 0 z "},w:{ha:1193,x_min:1,x_max:1192,o:"m 475 0 l 247 0 l 1 732 l 244 732 l 321 429 q 335 372 328 406 q 351 306 343 338 q 364 253 358 274 l 364 253 l 372 253 q 388 315 381 283 q 403 378 394 347 l 403 378 l 415 431 l 490 732 l 724 732 l 800 429 q 813 378 806 410 q 828 313 819 346 q 842 253 836 279 l 842 253 l 851 253 q 863 307 856 276 q 879 370 871 338 q 893 426 888 403 l 893 426 l 971 732 l 1192 732 l 946 0 l 718 0 l 642 293 q 628 350 636 318 q 613 413 619 382 q 600 465 606 443 l 600 465 l 594 465 q 585 424 592 450 q 572 364 579 397 q 553 294 564 331 l 553 294 l 475 0 z "},x:{ha:850,x_min:10,x_max:839,o:"m 264 0 l 10 0 l 282 383 l 33 732 l 303 732 l 432 524 l 439 524 l 569 732 l 824 732 l 572 382 l 839 0 l 572 0 l 422 240 l 415 240 l 264 0 z "},y:{ha:797,x_min:3,x_max:793,o:"m 203 -274 l 203 -274 q 115 -266 153 -274 q 63 -253 78 -258 l 63 -253 l 63 -108 l 158 -108 q 225 -91 197 -108 q 269 -49 253 -74 q 292 0 285 -25 l 292 0 l 3 732 l 246 732 l 354 411 q 373 353 363 389 q 394 281 383 318 q 411 215 404 244 l 411 215 l 419 215 q 432 260 425 235 q 446 313 439 286 q 460 365 453 340 q 474 410 468 390 l 474 410 l 567 732 l 793 732 l 540 29 q 488 -90 517 -35 q 421 -187 460 -146 q 328 -251 382 -228 q 203 -274 275 -274 z "},z:{ha:743,x_min:31,x_max:707,o:"m 707 0 l 31 0 l 31 85 l 367 567 l 50 567 l 50 732 l 694 732 l 694 650 l 356 165 l 707 165 l 707 0 z "},".":{ha:442,x_min:100,x_max:342,o:"m 342 0 l 100 0 l 100 232 l 342 232 l 342 0 z "},",":{ha:442,x_min:96,x_max:342,o:"m 96 -249 l 96 -249 l 96 -151 q 158 -126 131 -147 q 201 -72 185 -106 q 218 0 218 -39 l 218 0 l 101 0 l 101 232 l 342 232 l 342 25 q 308 -122 342 -64 q 217 -210 274 -179 q 96 -249 161 -240 z "},"'":{ha:365,x_min:82,x_max:286,o:"m 236 558 l 128 558 l 82 750 l 82 954 l 286 954 l 286 750 l 236 558 z "},"\u2019":{ha:388,x_min:81,x_max:307,o:"m 81 496 l 81 496 l 81 585 q 138 610 113 589 q 178 667 164 632 q 193 742 193 701 l 193 742 l 86 742 l 86 954 l 307 954 l 307 764 q 275 620 307 678 q 192 533 243 563 q 81 496 140 503 z "},"!":{ha:436,x_min:96,x_max:342,o:"m 289 306 l 147 306 l 96 954 l 342 954 l 289 306 z m 333 0 l 104 0 l 104 221 l 333 221 l 333 0 z "},"?":{ha:850,x_min:69,x_max:769,o:"m 525 307 l 324 307 l 324 375 q 338 444 324 414 q 376 498 353 474 q 425 544 399 522 q 474 587 451 565 q 511 634 496 608 q 526 690 526 660 l 526 690 q 522 726 526 708 q 504 761 517 744 q 470 788 492 778 q 414 799 449 799 l 414 799 q 349 786 374 799 q 313 754 325 774 q 295 713 300 735 q 290 669 290 690 l 290 669 l 290 651 q 292 632 290 642 l 292 632 l 74 632 q 71 654 72 642 q 69 682 69 667 l 69 682 q 85 778 69 733 q 132 858 101 822 q 208 918 163 893 q 309 957 253 943 q 432 971 365 971 l 432 971 q 545 959 493 971 q 639 925 597 947 q 709 870 681 903 q 753 796 738 838 q 769 704 769 754 l 769 704 q 752 608 769 649 q 706 538 735 568 q 647 485 678 508 q 589 440 617 461 q 543 395 561 418 q 525 343 525 372 l 525 343 l 525 307 z m 540 0 l 311 0 l 311 221 l 540 221 l 540 0 z "},$:{ha:804,x_min:51,x_max:754,o:"m 447 -82 l 357 -82 l 357 96 q 265 110 308 99 l 265 110 q 153 154 201 125 q 78 226 106 183 q 51 326 51 269 l 51 326 l 51 338 q 53 346 51 342 l 53 346 l 268 346 l 268 333 q 288 283 269 303 q 338 254 307 263 l 338 254 q 357 249 347 250 l 357 249 l 357 399 q 347 400 353 399 l 347 400 q 249 425 299 411 q 159 463 200 439 q 93 526 118 488 q 68 625 68 565 l 68 625 q 95 734 68 689 q 169 807 122 779 q 279 847 217 835 l 279 847 q 357 858 317 856 l 357 858 l 357 1029 l 447 1029 l 447 858 q 532 847 490 856 l 532 847 q 635 809 589 835 q 708 744 682 783 q 735 651 735 704 l 735 651 q 734 637 735 644 q 733 626 733 629 l 733 626 l 519 626 l 519 638 q 504 676 519 661 q 463 701 489 692 l 463 701 q 447 706 456 703 l 447 706 l 447 574 q 533 556 489 564 l 533 556 q 641 522 590 543 q 723 458 692 500 q 754 342 754 415 l 754 342 q 726 224 754 272 q 650 148 699 176 q 538 107 601 119 l 538 107 q 447 96 494 99 l 447 96 l 447 -82 z m 447 378 l 447 247 q 461 250 454 249 l 461 250 q 511 269 490 256 q 532 310 532 283 l 532 310 q 507 354 532 339 l 507 354 q 447 378 483 368 l 447 378 z m 357 596 l 357 596 l 357 706 q 326 697 340 701 l 326 697 q 299 679 310 690 q 289 651 289 668 l 289 651 q 307 617 289 631 q 357 596 325 604 l 357 596 q 357 596 357 596 z "},"%":{ha:1367,x_min:94,x_max:1274,o:"m 440 0 l 296 0 l 931 954 l 1075 954 l 440 0 z m 338 472 l 338 472 q 203 499 257 472 q 122 581 149 526 q 94 721 94 636 l 94 721 q 122 861 94 806 q 203 944 149 917 q 338 971 257 971 l 338 971 q 472 944 418 971 q 551 861 525 917 q 578 721 578 806 l 578 721 q 551 581 578 636 q 472 499 525 526 q 338 472 418 472 z m 338 576 l 338 576 q 406 613 388 576 q 424 706 424 649 l 424 706 l 424 738 q 416 804 424 775 q 390 850 408 833 q 338 867 371 867 l 338 867 q 269 831 288 867 q 250 738 250 794 l 250 738 l 250 706 q 269 613 250 649 q 338 576 288 576 z m 1033 -17 l 1033 -17 q 899 11 953 -17 q 818 94 844 39 q 792 232 792 149 l 792 232 q 818 372 792 317 q 899 455 844 428 q 1033 482 953 482 l 1033 482 q 1168 455 1114 482 q 1248 372 1222 428 q 1274 232 1274 317 l 1274 232 q 1248 93 1274 149 q 1168 10 1222 38 q 1033 -17 1114 -17 z m 1033 88 l 1033 88 q 1101 124 1083 88 q 1119 217 1119 160 l 1119 217 l 1119 249 q 1112 316 1119 288 q 1085 361 1104 344 q 1033 378 1067 378 l 1033 378 q 965 342 983 378 q 946 249 946 307 l 946 249 l 946 217 q 965 124 946 160 q 1033 88 983 88 z "},"&":{ha:1133,x_min:90,x_max:1107,o:"m 526 -17 l 526 -17 q 287 19 383 -17 q 140 117 190 54 q 90 261 90 179 l 90 261 q 139 411 90 353 q 267 493 188 469 l 267 493 l 267 499 q 159 574 203 524 q 115 703 115 625 l 115 703 q 164 842 115 782 q 305 937 213 903 q 528 971 397 971 l 528 971 q 750 937 657 971 q 893 844 843 903 q 943 710 943 785 l 943 710 l 943 675 l 732 675 l 732 696 q 708 753 731 729 q 644 789 686 776 q 539 801 601 801 l 539 801 q 456 792 492 801 q 396 765 419 782 q 360 724 372 747 q 349 674 349 701 l 349 674 q 367 612 349 636 q 415 576 385 588 q 478 564 444 564 l 478 564 l 599 564 l 599 407 l 463 407 q 394 396 426 407 q 342 359 361 385 q 324 288 324 333 l 324 288 q 345 215 324 244 q 413 169 367 185 q 528 153 458 153 l 528 153 q 648 170 603 153 q 713 219 693 188 q 732 290 732 250 l 732 290 l 732 564 l 1107 564 l 1107 407 l 944 407 l 944 294 q 901 131 944 201 q 764 22 857 60 q 526 -17 671 -17 z "},"-":{ha:463,x_min:56,x_max:407,o:"m 407 283 l 56 283 l 56 474 l 407 474 l 407 283 z "},":":{ha:464,x_min:113,x_max:353,o:"m 353 500 l 113 500 l 113 732 l 353 732 l 353 500 z m 353 0 l 113 0 l 113 232 l 353 232 l 353 0 z "},"|":{ha:368,x_min:104,x_max:264,o:"m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z "}},familyName:"Archivo ExtraBold",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-220,xMax:1393,yMin:-405,yMax:1100},resolution:1e3};var Tf={glyphs:{"0":{ha:868,x_min:64,x_max:844,o:"m 385 -17 l 385 -17 q 205 17 276 -17 q 99 122 133 51 q 64 299 64 193 l 64 299 q 66 355 64 325 q 72 416 68 385 q 83 482 76 447 l 83 482 q 140 701 106 608 q 228 853 175 793 q 353 942 281 913 q 524 971 426 971 l 524 971 q 705 937 635 971 q 810 833 775 903 q 844 657 844 763 l 844 657 q 842 601 844 631 q 835 540 839 572 q 825 475 832 508 l 825 475 q 768 255 804 347 q 680 102 732 163 q 556 13 628 42 q 385 -17 483 -17 z m 394 149 l 394 149 q 473 167 442 149 q 526 226 504 186 q 565 335 549 267 q 600 499 582 403 l 600 499 q 610 558 606 532 q 617 604 614 583 q 620 642 619 625 q 621 672 621 658 l 621 672 q 596 774 621 742 q 514 806 571 806 l 514 806 q 435 787 467 806 q 381 727 403 768 q 342 619 360 686 q 307 456 325 553 l 307 456 q 297 397 301 422 q 290 351 293 371 q 287 314 288 331 q 286 283 286 297 l 286 283 q 311 182 286 215 q 394 149 336 149 z "},"1":{ha:868,x_min:40,x_max:743,o:"m 711 0 l 40 0 l 72 179 l 300 179 l 390 689 l 161 689 l 186 824 q 276 838 226 826 q 380 868 326 850 q 484 908 433 886 q 576 956 535 931 l 576 956 l 665 956 l 528 179 l 743 179 l 711 0 z "},"2":{ha:868,x_min:-3,x_max:846,o:"m 729 0 l -3 0 l 8 57 q 60 182 21 125 q 153 288 99 239 q 271 379 208 336 q 394 462 333 422 q 505 542 454 501 q 585 624 556 582 q 615 711 615 665 l 615 711 q 590 772 615 744 q 503 800 564 800 l 503 800 q 420 783 456 800 q 363 735 385 765 q 333 663 342 704 l 333 663 l 326 621 l 113 621 q 155 779 121 713 q 245 888 189 846 q 373 951 301 931 q 525 971 444 971 l 525 971 q 705 938 633 971 q 811 848 776 904 q 846 724 846 792 l 846 724 q 826 610 846 663 q 771 515 806 558 q 692 433 736 471 q 599 363 647 396 q 501 300 550 331 q 410 239 453 269 l 410 239 q 383 219 397 231 q 361 197 369 207 l 361 197 l 764 197 l 729 0 z "},"3":{ha:868,x_min:38,x_max:849,o:"m 388 -17 l 388 -17 q 192 13 269 -17 q 76 94 115 42 q 38 215 38 147 l 38 215 q 40 247 38 229 q 47 289 42 265 l 47 289 l 258 289 q 254 264 256 274 q 253 246 253 254 l 253 246 q 288 174 253 199 q 388 150 324 150 l 388 150 q 481 169 440 150 q 544 226 521 189 q 567 315 567 263 l 567 315 q 551 370 567 350 q 510 399 536 390 q 453 407 485 407 l 453 407 l 363 407 l 389 564 l 471 564 q 526 574 500 564 q 572 602 551 583 q 604 648 593 621 q 615 710 615 675 l 615 710 q 602 760 615 739 q 563 792 589 781 q 501 804 538 804 l 501 804 q 426 790 458 804 q 374 750 394 775 q 349 693 354 725 l 349 693 l 346 675 l 140 675 l 146 707 q 209 843 160 783 q 340 937 258 903 q 526 971 421 971 l 526 971 q 700 943 628 971 q 810 865 772 915 q 849 744 849 814 l 849 744 q 824 633 849 682 q 756 550 799 583 q 663 499 713 517 l 663 499 l 661 493 q 758 422 722 471 q 793 300 793 372 l 793 300 q 739 128 793 199 q 592 20 685 57 q 388 -17 499 -17 z "},"4":{ha:869,x_min:13,x_max:835,o:"m 640 0 l 419 0 l 457 203 l 13 203 l 43 379 q 169 551 106 457 q 290 751 232 644 q 397 971 349 858 l 397 971 l 639 971 q 578 845 617 913 q 494 709 540 778 q 398 577 447 640 q 303 462 349 514 q 222 378 257 410 l 222 378 l 488 378 l 522 585 q 567 646 543 611 q 615 718 592 681 q 658 792 639 756 q 690 857 678 828 l 690 857 l 792 857 l 708 378 l 835 378 l 804 203 l 678 203 l 640 0 z "},"5":{ha:868,x_min:40,x_max:847,o:"m 393 -17 l 393 -17 q 202 15 281 -17 q 82 104 124 46 q 40 242 40 163 l 40 242 q 42 272 40 256 q 46 303 43 288 l 46 303 l 258 303 q 256 285 257 293 q 256 268 256 276 l 256 268 q 270 207 256 233 q 313 166 285 181 q 383 151 342 151 l 383 151 q 456 165 422 151 q 515 204 489 178 q 555 267 540 231 q 569 350 569 304 l 569 350 q 538 439 569 407 q 446 471 506 471 l 446 471 q 376 458 406 471 q 326 429 346 446 q 292 397 306 413 l 292 397 l 104 422 l 238 954 l 847 954 l 813 756 l 382 756 l 336 571 q 378 596 353 582 q 440 619 403 610 q 528 629 478 629 l 528 629 q 671 600 610 629 q 766 513 732 571 q 800 374 800 456 l 800 374 q 746 167 800 254 q 599 31 692 79 q 393 -17 507 -17 z "},"6":{ha:868,x_min:58,x_max:840,o:"m 393 -17 l 393 -17 q 211 17 286 -17 q 97 121 136 50 q 58 304 58 192 l 58 304 q 62 378 58 339 q 74 460 65 417 l 74 460 q 166 763 107 651 q 315 922 225 874 q 528 971 406 971 l 528 971 q 697 942 628 971 q 803 859 767 914 q 840 728 840 804 l 840 728 q 839 695 840 713 q 835 660 838 678 l 835 660 l 621 660 q 624 683 624 672 q 625 701 625 693 l 625 701 q 598 780 625 754 q 517 806 571 806 l 517 806 q 418 775 456 806 q 358 684 381 744 q 319 533 336 624 l 319 533 q 372 569 340 551 q 442 598 403 586 q 525 610 482 610 l 525 610 q 675 581 613 610 q 772 496 738 551 q 806 363 806 440 l 806 363 q 774 205 806 275 q 688 85 743 135 q 557 10 632 36 q 393 -17 482 -17 z m 401 149 l 401 149 q 474 165 442 149 q 528 206 507 181 l 528 206 q 564 266 551 231 q 576 340 576 301 l 576 340 q 563 403 576 376 q 524 443 550 429 q 457 457 497 457 l 457 457 q 383 442 417 457 q 328 401 350 428 l 328 401 q 292 342 304 376 q 281 265 281 307 l 281 265 q 293 203 281 229 q 333 163 306 176 q 401 149 360 149 z "},"7":{ha:868,x_min:129,x_max:914,o:"m 411 0 l 136 0 q 199 210 156 107 q 301 409 242 313 q 433 592 361 506 q 581 754 504 679 l 581 754 l 129 754 l 165 954 l 914 954 l 893 835 q 772 705 832 772 q 656 563 711 638 q 553 410 600 489 q 474 249 507 332 q 425 76 440 165 l 425 76 q 417 40 421 57 q 411 0 414 22 l 411 0 z "},"8":{ha:868,x_min:25,x_max:829,o:"m 371 -17 l 371 -17 q 181 12 258 -17 q 65 93 104 40 q 25 215 25 146 l 25 215 q 49 332 25 279 q 117 424 72 385 q 221 486 161 464 l 221 486 q 154 562 176 518 q 132 657 132 606 l 132 657 q 160 784 132 726 q 241 883 189 842 q 362 948 293 925 q 513 971 431 971 l 513 971 q 680 942 608 971 q 790 860 751 913 q 829 735 829 807 l 829 735 q 810 635 829 682 q 756 551 792 589 q 665 486 719 514 l 665 486 q 752 413 721 460 q 783 300 783 367 l 783 300 q 731 132 783 203 q 587 22 679 61 q 371 -17 494 -17 z m 383 149 l 383 149 q 428 153 407 149 q 469 167 450 158 q 504 189 489 176 l 504 189 q 540 239 526 210 q 554 306 554 268 l 554 306 q 520 381 554 356 q 429 407 486 407 l 429 407 q 385 403 406 407 q 345 390 364 399 q 311 368 326 382 l 311 368 q 274 317 288 347 q 260 249 260 288 l 260 249 q 292 174 260 200 q 383 149 325 149 z m 456 567 l 456 567 q 500 571 479 567 q 539 584 521 575 q 571 606 557 593 l 571 606 q 605 651 593 624 q 617 713 617 678 l 617 713 q 585 783 617 760 q 500 807 553 807 l 500 807 q 456 802 476 807 q 419 789 436 797 q 388 768 401 781 l 388 768 q 354 722 367 750 q 342 657 342 694 l 342 657 q 372 589 342 611 q 456 567 403 567 z "},"9":{ha:868,x_min:61,x_max:843,o:"m 374 -17 l 374 -17 q 205 13 275 -17 q 98 97 135 42 q 61 226 61 151 l 61 226 q 63 260 61 243 q 67 294 64 276 l 67 294 l 279 294 q 277 272 278 282 q 276 253 276 261 l 276 253 q 303 175 276 201 q 385 149 331 149 l 385 149 q 484 179 447 149 q 544 270 521 210 q 582 421 567 331 l 582 421 q 530 385 561 403 q 460 356 499 368 q 376 344 421 344 l 376 344 q 226 374 289 344 q 130 460 164 404 q 96 592 96 515 l 96 592 q 127 749 96 679 q 214 869 158 819 q 344 944 269 918 q 508 971 419 971 l 508 971 q 690 938 615 971 q 804 833 765 904 q 843 650 843 763 l 843 650 q 840 576 843 615 q 828 494 836 538 l 828 494 q 736 192 796 304 q 586 32 676 81 q 374 -17 496 -17 z m 444 497 l 444 497 q 518 513 485 497 q 574 553 551 528 l 574 553 q 609 613 597 578 q 621 690 621 649 l 621 690 q 608 752 621 726 q 568 792 594 778 q 500 806 542 806 l 500 806 q 427 790 460 806 q 374 749 394 775 l 374 749 q 338 689 350 724 q 325 614 325 654 l 325 614 q 338 552 325 578 q 378 512 351 526 q 444 497 404 497 z "},"=":{ha:901,x_min:60,x_max:840,o:"m 811 432 l 113 432 l 143 593 l 840 593 l 811 432 z m 757 126 l 60 126 l 88 288 l 786 288 l 757 126 z "},"+":{ha:901,x_min:86,x_max:814,o:"m 467 0 l 303 0 l 353 281 l 86 281 l 115 442 l 383 442 l 432 722 l 596 722 l 546 442 l 814 442 l 785 281 l 517 281 l 467 0 z "}," ":{ha:263,x_min:0,x_max:0,o:""},A:{ha:1036,x_min:-53,x_max:961,o:"m 208 0 l -53 0 l 474 954 l 772 954 l 961 0 l 706 0 l 678 165 l 294 165 l 208 0 z m 489 549 l 389 351 l 649 351 l 615 550 q 608 600 613 575 l 608 600 l 600 649 q 593 694 596 672 q 588 738 590 717 l 588 738 l 582 738 q 551 674 568 708 q 519 608 535 640 l 519 608 l 489 549 z "},B:{ha:1035,x_min:39,x_max:1017,o:"m 631 0 l 39 0 l 208 954 l 744 954 q 895 926 835 954 q 986 850 956 899 q 1017 739 1017 801 l 1017 739 q 991 631 1017 681 q 921 546 965 581 q 818 499 876 511 l 818 499 l 817 493 q 921 424 879 474 q 963 294 963 375 l 963 294 q 917 133 963 199 q 797 33 872 67 q 631 0 721 0 l 631 0 z m 358 397 l 324 192 l 592 192 q 654 206 626 192 q 697 247 682 219 q 713 311 713 274 l 713 311 q 690 374 713 350 q 615 397 667 397 l 615 397 l 358 397 z m 425 769 l 390 575 l 638 575 q 691 584 668 575 q 728 609 714 593 q 749 645 742 625 q 756 688 756 665 l 756 688 q 733 748 756 726 q 672 769 711 769 l 672 769 l 425 769 z "},C:{ha:1044,x_min:69,x_max:1031,o:"m 490 -17 l 490 -17 q 177 75 285 -17 q 69 356 69 167 l 69 356 q 73 426 69 390 q 82 497 76 461 l 82 497 q 181 755 110 649 q 364 916 251 861 q 626 971 476 971 l 626 971 q 840 936 749 971 q 981 833 931 901 q 1031 664 1031 765 l 1031 664 q 1028 623 1031 644 q 1024 581 1026 601 l 1024 581 l 779 581 q 783 605 782 593 q 783 626 783 617 l 783 626 q 764 708 783 675 q 708 759 744 742 q 618 776 671 776 l 618 776 q 513 758 558 776 q 433 705 467 739 q 378 622 400 671 q 344 515 356 574 l 344 515 q 333 456 338 479 q 327 415 329 432 q 324 386 325 399 q 324 363 324 374 l 324 363 q 343 263 324 304 q 403 199 363 221 q 504 178 443 178 l 504 178 q 623 201 572 178 q 707 267 674 224 q 751 371 740 310 l 751 371 l 986 371 q 899 156 965 242 q 730 26 833 69 q 490 -17 626 -17 z "},D:{ha:1049,x_min:40,x_max:1018,o:"m 465 0 l 40 0 l 208 954 l 590 954 q 907 864 796 954 q 1018 583 1018 774 l 1018 583 q 1015 520 1018 553 q 1007 454 1013 488 l 1007 454 q 909 204 981 306 q 726 51 838 103 q 465 0 614 0 l 465 0 z m 422 760 l 324 194 l 465 194 q 571 211 524 194 q 653 260 618 228 q 712 338 689 292 q 744 443 735 385 l 744 443 q 756 509 753 485 q 761 549 760 533 q 763 575 763 564 l 763 575 q 741 677 763 636 q 676 739 719 718 q 568 760 633 760 l 568 760 l 422 760 z "},E:{ha:971,x_min:39,x_max:997,o:"m 838 0 l 39 0 l 208 954 l 997 954 l 963 760 l 424 760 l 392 581 l 863 581 l 829 390 l 358 390 l 324 194 l 872 194 l 838 0 z "},F:{ha:890,x_min:39,x_max:942,o:"m 289 0 l 39 0 l 208 954 l 942 954 l 907 760 l 424 760 l 386 554 l 811 554 l 778 364 l 354 364 l 289 0 z "},G:{ha:1132,x_min:71,x_max:1086,o:"m 479 -17 l 479 -17 q 178 75 285 -17 q 71 353 71 167 l 71 353 q 78 463 71 410 q 99 561 85 515 l 99 561 q 210 785 133 694 q 400 924 288 876 q 651 971 513 971 l 651 971 q 824 953 744 971 q 962 899 903 935 q 1053 808 1021 863 q 1086 681 1086 754 l 1086 681 q 1085 650 1086 665 q 1081 618 1083 635 l 1081 618 l 836 618 q 838 632 838 625 l 838 632 l 838 643 q 824 700 838 675 q 785 742 811 725 q 726 767 760 758 q 654 776 693 776 l 654 776 q 538 759 590 776 q 446 708 485 742 q 381 626 407 674 q 346 515 356 578 l 346 515 q 335 458 339 481 q 331 418 332 435 l 331 418 l 326 390 q 325 368 325 379 l 325 368 q 349 263 325 306 q 417 199 372 221 q 531 178 463 178 l 531 178 q 652 199 596 178 q 746 256 708 219 q 790 342 783 293 l 790 342 l 792 349 l 535 349 l 567 524 l 1064 524 l 972 0 l 828 0 l 819 101 q 721 36 774 63 q 609 -3 668 10 q 479 -17 550 -17 z "},H:{ha:1093,x_min:39,x_max:1093,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 393 588 l 779 588 l 844 954 l 1093 954 l 925 0 l 675 0 l 743 385 l 357 385 l 289 0 z "},I:{ha:457,x_min:39,x_max:457,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 289 0 z "},J:{ha:875,x_min:22,x_max:876,o:"m 356 -17 l 356 -17 q 108 46 193 -17 q 22 233 22 108 l 22 233 q 25 274 22 251 q 35 332 28 297 l 35 332 l 272 332 q 265 288 267 304 q 264 261 264 271 l 264 261 q 288 198 264 218 q 365 178 313 178 l 365 178 q 465 215 425 178 q 518 331 504 253 l 518 331 l 628 954 l 876 954 l 767 325 q 691 130 746 206 q 551 19 636 54 q 356 -17 467 -17 z "},K:{ha:1069,x_min:39,x_max:1142,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 385 546 l 819 954 l 1142 954 l 719 564 l 981 0 l 697 0 l 524 397 l 331 238 l 289 0 z "},L:{ha:865,x_min:40,x_max:803,o:"m 767 0 l 40 0 l 208 954 l 457 954 l 325 204 l 803 204 l 767 0 z "},M:{ha:1269,x_min:39,x_max:1269,o:"m 271 0 l 39 0 l 208 954 l 557 954 l 599 529 q 604 467 601 506 q 610 387 607 428 q 614 313 613 346 l 614 313 l 624 313 q 652 384 638 347 q 682 459 667 421 q 713 531 697 497 l 713 531 l 906 954 l 1269 954 l 1100 0 l 858 0 l 942 467 q 958 554 949 507 q 978 644 968 601 q 994 713 988 688 l 994 713 l 985 713 q 970 675 979 697 q 953 632 961 653 q 938 596 944 611 l 938 596 l 663 0 l 453 0 l 396 589 q 392 652 394 618 q 388 711 389 686 l 388 711 l 378 711 l 372 631 q 363 542 368 585 q 353 467 358 499 l 353 467 l 271 0 z "},N:{ha:1093,x_min:39,x_max:1093,o:"m 271 0 l 39 0 l 208 954 l 428 954 l 688 503 q 712 463 699 485 q 737 418 725 440 q 758 378 749 396 l 758 378 l 765 381 q 772 431 768 406 q 779 476 776 456 l 779 476 l 863 954 l 1093 954 l 925 0 l 707 0 l 438 461 q 407 515 425 482 q 375 574 389 549 l 375 574 l 368 572 q 360 515 365 546 q 351 464 354 483 l 351 464 l 271 0 z "},O:{ha:1125,x_min:69,x_max:1094,o:"m 513 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 984 204 1057 313 q 793 40 911 96 q 513 -17 675 -17 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z "},P:{ha:969,x_min:39,x_max:993,o:"m 289 0 l 39 0 l 208 954 l 699 954 q 861 921 796 954 q 960 828 926 888 q 993 689 993 768 l 993 689 q 967 540 993 607 q 892 424 940 474 q 775 349 843 375 q 624 322 707 322 l 624 322 l 346 322 l 289 0 z m 424 761 l 381 514 l 588 514 q 668 533 635 514 q 719 585 701 551 q 738 663 738 618 l 738 663 q 710 735 738 710 q 625 761 682 761 l 625 761 l 424 761 z "},Q:{ha:1125,x_min:69,x_max:1094,o:"m 956 -182 l 668 -182 l 532 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 979 197 1057 308 q 776 33 901 86 l 776 33 l 956 -182 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z "},R:{ha:1042,x_min:40,x_max:1035,o:"m 289 0 l 40 0 l 208 954 l 743 954 q 906 923 842 954 q 1003 838 971 892 q 1035 713 1035 783 l 1035 713 q 1008 563 1035 628 q 934 451 982 497 q 818 378 886 406 l 818 378 l 943 0 l 671 0 l 572 336 l 349 336 l 289 0 z m 424 765 l 382 521 l 629 521 q 701 540 668 521 q 756 593 735 558 q 776 672 776 628 l 776 672 q 751 740 776 715 q 682 765 726 765 l 682 765 l 424 765 z "},S:{ha:968,x_min:33,x_max:938,o:"m 458 -17 l 458 -17 q 292 -3 369 -17 q 156 38 214 10 q 66 115 99 67 q 33 232 33 163 l 33 232 q 36 274 33 251 q 44 315 39 297 l 44 315 l 285 315 q 279 293 282 306 q 276 271 276 281 l 276 271 q 297 215 276 236 q 356 183 318 193 q 443 174 393 174 l 443 174 q 517 179 483 174 q 577 196 551 185 q 617 226 603 207 q 632 274 632 246 l 632 274 q 613 318 632 300 q 560 349 593 336 q 487 373 528 363 q 401 396 446 383 l 401 396 q 301 428 351 410 q 211 474 251 446 q 147 544 171 501 q 122 647 122 586 l 122 647 q 158 795 122 735 q 256 895 194 856 q 394 953 317 935 q 553 971 471 971 q 705 957 635 971 q 827 914 775 943 q 908 840 879 885 q 938 733 938 796 l 938 733 q 936 708 938 722 q 931 668 935 693 l 931 668 l 693 668 q 696 686 696 679 l 696 686 l 696 697 q 661 763 696 738 q 558 788 626 788 l 558 788 q 465 776 504 788 q 404 744 425 764 q 383 696 383 724 l 383 696 q 397 660 383 675 q 433 633 410 644 q 488 611 457 621 q 557 593 519 601 l 557 593 q 670 562 611 579 q 781 515 729 544 q 863 441 832 486 q 894 329 894 396 l 894 329 q 858 174 894 239 q 760 66 822 108 q 621 3 699 24 q 458 -17 543 -17 z "},T:{ha:938,x_min:103,x_max:1007,o:"m 529 0 l 279 0 l 413 750 l 103 750 l 139 954 l 1007 954 l 971 750 l 661 750 l 529 0 z "},U:{ha:1088,x_min:96,x_max:1090,o:"m 496 -17 l 496 -17 q 201 60 307 -17 q 96 290 96 138 l 96 290 q 98 333 96 311 q 104 379 100 356 l 104 379 l 206 954 l 454 954 l 353 376 q 349 351 351 365 q 347 325 347 338 l 347 325 q 388 217 347 256 q 510 178 428 178 l 510 178 q 663 231 604 178 q 739 375 722 283 l 739 375 l 842 954 l 1090 954 l 986 363 q 900 151 964 236 q 735 25 836 67 q 496 -17 633 -17 z "},V:{ha:1013,x_min:124,x_max:1097,o:"m 588 0 l 299 0 l 124 954 l 381 954 l 454 465 q 464 397 458 435 q 474 325 469 360 q 482 264 479 290 l 482 264 l 490 264 q 524 333 506 296 q 560 406 542 369 q 592 471 578 442 l 592 471 l 833 954 l 1097 954 l 588 0 z "},W:{ha:1360,x_min:115,x_max:1454,o:"m 461 0 l 182 0 l 115 954 l 358 954 l 388 453 q 389 411 389 435 q 390 364 389 388 q 392 318 392 340 l 392 318 l 397 318 q 414 365 406 340 q 431 412 422 389 q 446 453 439 435 l 446 453 l 643 954 l 914 954 l 939 453 q 942 411 940 435 l 942 411 l 943 364 q 943 318 943 340 l 943 318 l 949 318 q 965 363 957 339 l 965 363 l 982 410 q 999 453 990 433 l 999 453 l 1200 954 l 1454 954 l 1043 0 l 764 0 l 735 528 q 733 574 733 550 q 731 622 732 597 q 729 665 731 646 l 729 665 l 724 665 q 708 620 717 644 q 690 572 699 596 q 674 528 682 549 l 674 528 l 461 0 z "},X:{ha:1022,x_min:-56,x_max:1085,o:"m 243 0 l -56 0 l 389 506 l 146 954 l 432 954 l 560 682 l 565 682 l 790 954 l 1085 954 l 682 499 l 949 0 l 664 0 l 515 318 l 508 318 l 243 0 z "},Y:{ha:1017,x_min:117,x_max:1110,o:"m 571 0 l 322 0 l 389 378 l 117 954 l 385 954 l 544 596 l 551 596 l 831 954 l 1110 954 l 638 378 l 571 0 z "},Z:{ha:947,x_min:-25,x_max:994,o:"m 838 0 l -25 0 l -7 100 l 567 760 l 143 760 l 178 954 l 994 954 l 978 854 l 401 194 l 872 194 l 838 0 z "},a:{ha:875,x_min:33,x_max:849,o:"m 292 -17 l 292 -17 q 154 15 213 -17 q 65 107 96 46 q 33 257 33 168 l 33 257 q 36 315 33 285 q 44 378 39 344 l 44 378 q 115 586 67 504 q 233 708 163 668 q 393 749 304 749 l 393 749 q 480 738 440 749 q 550 703 519 726 q 601 643 581 681 l 601 643 l 611 643 l 665 732 l 849 732 l 815 553 q 797 451 807 503 q 779 354 788 400 q 764 271 771 308 q 753 210 757 233 q 750 179 750 186 l 750 179 q 760 151 750 160 q 788 142 771 142 l 788 142 l 831 142 l 807 8 q 751 -9 783 -1 q 685 -17 719 -17 l 685 -17 q 612 -5 643 -17 q 561 32 581 7 l 561 32 q 545 60 551 43 q 536 94 539 76 l 536 94 l 526 94 q 421 12 482 40 q 292 -17 360 -17 z m 381 161 l 381 161 q 444 175 415 161 q 496 214 474 189 q 533 274 518 239 q 556 350 549 308 l 556 350 q 563 395 561 378 q 566 424 565 413 q 567 444 567 436 l 567 444 q 555 512 567 483 q 518 556 543 540 q 453 571 493 571 l 453 571 q 367 551 401 571 q 311 490 332 531 q 279 390 290 449 l 279 390 q 269 333 272 354 q 265 299 265 313 q 264 278 264 286 l 264 278 q 291 191 264 221 q 381 161 318 161 z "},b:{ha:879,x_min:24,x_max:840,o:"m 474 -17 l 474 -17 q 339 13 397 -17 q 253 101 281 42 l 253 101 l 243 101 l 208 0 l 24 0 l 199 1006 l 426 1006 l 365 657 l 375 657 q 434 708 401 688 q 505 738 467 728 q 585 749 543 749 l 585 749 q 721 718 664 749 q 809 626 778 688 q 840 475 840 565 l 840 475 q 838 418 840 449 q 828 354 835 388 l 828 354 q 758 147 807 229 q 636 24 708 64 q 474 -17 564 -17 z m 419 161 l 419 161 q 506 181 471 161 q 561 242 540 201 q 594 342 582 283 l 594 342 q 604 399 601 378 q 608 433 607 419 q 610 454 610 446 l 610 454 q 598 519 610 493 q 560 558 586 544 q 492 571 533 571 l 492 571 q 426 557 456 571 q 376 518 397 543 q 338 458 354 493 q 315 382 322 424 l 315 382 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 378 161 z "},c:{ha:850,x_min:44,x_max:814,o:"m 389 -17 l 389 -17 q 201 15 278 -17 q 85 113 125 47 q 44 278 44 179 l 44 278 q 48 347 44 313 q 58 411 51 381 l 58 411 q 109 552 74 490 q 198 658 144 614 q 322 726 251 703 q 479 749 393 749 l 479 749 q 654 721 579 749 q 772 640 729 693 q 814 510 814 588 l 814 510 q 813 478 814 494 q 808 446 811 463 l 808 446 l 585 446 q 587 464 586 456 q 588 481 588 472 l 588 481 q 575 537 588 514 q 536 572 563 560 q 469 585 510 585 l 469 585 q 380 561 417 585 q 321 495 343 538 q 289 394 299 453 l 289 394 q 278 336 282 358 q 274 301 275 314 q 272 278 272 288 l 272 278 q 286 206 272 235 q 328 163 300 178 q 400 149 357 149 l 400 149 q 481 165 447 149 q 537 212 515 181 q 567 288 558 243 l 567 288 l 781 288 q 710 117 764 185 q 573 16 656 49 q 389 -17 490 -17 z "},d:{ha:879,x_min:40,x_max:904,o:"m 299 -17 l 299 -17 q 160 15 218 -17 q 71 110 101 47 q 40 260 40 172 l 40 260 q 43 317 40 288 q 51 381 46 347 l 51 381 q 100 543 68 474 q 176 658 132 613 q 277 726 221 704 q 401 749 333 749 l 401 749 q 488 738 449 749 q 558 708 528 728 q 607 657 589 688 l 607 657 l 615 657 l 676 1006 l 904 1006 l 728 0 l 542 0 l 542 101 l 532 101 q 427 13 488 42 q 299 -17 367 -17 z m 386 161 l 386 161 q 473 184 438 161 q 531 250 508 207 q 563 350 553 293 l 563 350 q 570 394 568 376 q 574 423 572 411 q 575 444 575 435 l 575 444 q 563 512 575 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 491 339 531 q 288 393 297 451 l 288 393 q 276 335 281 357 q 272 299 272 313 q 271 276 271 286 l 271 276 q 298 190 271 219 q 386 161 325 161 z "},e:{ha:860,x_min:44,x_max:815,o:"m 403 -17 l 403 -17 q 208 15 288 -17 q 86 111 128 46 q 44 276 44 176 l 44 276 q 47 344 44 311 q 57 408 50 376 l 57 408 q 131 590 76 514 q 273 707 186 665 q 475 749 360 749 l 475 749 q 662 719 586 749 q 776 628 738 689 q 815 471 815 567 l 815 471 q 812 409 815 444 q 797 321 808 374 l 797 321 l 272 321 q 268 294 269 308 q 267 267 267 279 l 267 267 q 281 198 267 226 q 325 156 294 169 q 403 142 356 142 l 403 142 q 467 149 439 142 q 514 173 494 157 q 547 211 533 189 q 564 261 560 233 l 564 261 l 786 261 q 744 142 775 194 q 663 55 713 90 q 549 1 614 19 q 403 -17 483 -17 z m 294 447 l 294 447 l 586 447 q 590 467 589 457 q 590 485 590 478 l 590 485 q 577 544 590 521 q 538 580 564 568 q 478 592 513 592 l 478 592 q 393 574 429 592 q 333 525 357 557 q 294 447 310 493 z "},f:{ha:489,x_min:-118,x_max:608,o:"m 25 -274 l 25 -274 q -23 -271 4 -274 q -75 -262 -50 -268 q -118 -251 -100 -257 l -118 -251 l -92 -107 l -21 -107 q 37 -87 17 -107 q 63 -31 57 -68 l 63 -31 l 167 567 l 64 567 l 93 732 l 197 732 l 207 792 q 253 920 222 869 q 338 995 285 971 q 469 1019 392 1019 l 469 1019 q 519 1017 493 1019 q 569 1008 546 1014 q 608 997 593 1003 l 608 997 l 583 854 l 517 854 q 459 838 478 854 q 433 786 440 821 l 433 786 l 425 732 l 561 732 l 532 567 l 394 567 l 286 -50 q 244 -170 274 -119 q 162 -247 215 -221 q 25 -274 108 -274 z "},g:{ha:878,x_min:6,x_max:854,o:"m 314 -274 l 314 -274 q 144 -252 213 -274 q 40 -191 75 -231 q 6 -96 6 -151 l 6 -96 q 7 -68 6 -86 q 15 -28 8 -50 l 15 -28 l 236 -28 q 234 -36 235 -32 q 233 -44 233 -40 l 233 -44 q 245 -77 233 -64 q 279 -97 257 -90 q 333 -104 301 -104 l 333 -104 q 424 -85 388 -104 q 480 -32 460 -67 q 508 49 500 3 l 508 49 q 515 87 511 68 q 521 122 518 106 l 521 122 l 511 122 q 448 71 482 92 q 375 40 414 50 q 293 31 336 31 l 293 31 q 160 60 217 31 q 74 148 104 89 q 44 296 44 207 l 44 296 q 47 346 44 319 q 54 401 49 372 l 54 401 q 179 664 86 579 q 408 749 272 749 l 408 749 q 538 719 483 749 q 621 631 593 689 l 621 631 l 631 631 l 668 732 l 854 732 l 738 68 q 660 -129 715 -54 q 518 -239 604 -204 q 314 -274 432 -274 z m 393 206 l 393 206 q 458 219 429 206 q 510 256 488 232 q 546 310 532 279 q 567 379 560 342 l 567 379 q 572 413 569 400 q 574 435 574 425 q 575 453 575 444 l 575 453 q 563 515 575 489 q 524 556 550 542 q 458 571 499 571 l 458 571 q 374 551 410 571 q 317 495 339 532 q 288 406 296 458 l 288 406 q 280 363 282 379 q 277 335 278 346 q 276 317 276 325 l 276 317 q 288 258 276 282 q 325 219 299 233 q 393 206 351 206 z "},h:{ha:874,x_min:24,x_max:818,o:"m 250 0 l 24 0 l 199 1006 l 426 1006 l 365 653 l 374 653 q 438 703 401 682 q 517 737 475 725 q 601 749 560 749 l 601 749 q 717 727 669 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 579 464 578 453 q 581 485 581 475 l 581 485 q 571 533 581 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 322 413 329 449 l 322 413 l 250 0 z "},i:{ha:400,x_min:22,x_max:425,o:"m 394 831 l 167 831 l 197 1006 l 425 1006 l 394 831 z m 250 0 l 22 0 l 151 732 l 379 732 l 250 0 z "},j:{ha:397,x_min:-164,x_max:422,o:"m 392 831 l 164 831 l 194 1006 l 422 1006 l 392 831 z m -8 -274 l -8 -274 q -60 -271 -31 -274 q -118 -262 -90 -268 q -164 -251 -146 -257 l -164 -251 l -139 -107 l -68 -107 q -11 -87 -31 -107 q 15 -31 8 -68 l 15 -31 l 150 732 l 378 732 l 239 -51 q 199 -171 226 -121 q 122 -247 172 -221 q -8 -274 72 -274 z "},k:{ha:847,x_min:22,x_max:892,o:"m 250 0 l 22 0 l 199 1007 l 426 1007 l 326 438 l 626 732 l 892 732 l 581 443 l 772 0 l 526 0 l 410 294 l 282 186 l 250 0 z "},l:{ha:400,x_min:22,x_max:426,o:"m 250 0 l 22 0 l 199 1006 l 426 1006 l 250 0 z "},m:{ha:1301,x_min:22,x_max:1246,o:"m 250 0 l 22 0 l 151 732 l 338 732 l 338 628 l 347 628 q 415 692 376 665 q 497 734 453 719 q 588 749 542 749 l 588 749 q 717 719 667 749 q 785 628 767 689 l 785 628 l 794 628 q 864 692 825 665 q 947 734 903 719 q 1038 749 990 749 l 1038 749 q 1192 702 1138 749 q 1246 558 1246 656 l 1246 558 q 1243 515 1246 538 q 1236 469 1240 493 l 1236 469 l 1153 0 l 925 0 l 1004 443 q 1007 467 1006 456 q 1008 488 1008 478 l 1008 488 q 999 533 1008 515 q 972 560 989 551 q 928 569 954 569 l 928 569 q 858 549 890 569 q 805 495 826 529 q 775 417 783 461 l 775 417 l 701 0 l 474 0 l 553 443 q 556 467 554 456 q 557 488 557 479 l 557 488 q 547 533 557 515 q 520 560 538 551 q 476 569 503 569 l 476 569 q 407 549 439 569 q 353 495 375 529 q 324 417 332 461 l 324 417 l 250 0 z "},n:{ha:874,x_min:22,x_max:818,o:"m 250 0 l 22 0 l 151 732 l 338 732 l 338 626 l 347 626 q 418 692 378 665 q 505 734 458 719 q 599 749 551 749 l 599 749 q 717 727 668 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 580 465 578 453 q 582 486 582 476 l 582 486 q 572 533 582 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 324 413 329 449 l 324 413 l 250 0 z "},o:{ha:882,x_min:42,x_max:840,o:"m 386 -17 l 386 -17 q 201 15 278 -17 q 83 113 124 47 q 42 276 42 178 l 42 276 q 44 333 42 304 q 53 389 47 361 l 53 389 q 132 591 74 511 q 282 710 190 671 q 493 749 374 749 l 493 749 q 681 717 604 749 q 799 619 758 685 q 840 454 840 554 l 840 454 q 826 335 840 389 q 783 236 811 281 l 783 236 q 694 94 750 150 q 563 10 639 38 q 386 -17 486 -17 z m 403 149 l 403 149 q 498 171 460 149 q 560 235 536 193 q 594 340 583 278 l 594 340 q 605 399 601 378 q 609 433 608 421 q 610 456 610 446 l 610 456 q 596 526 610 497 q 553 569 582 554 q 478 583 525 583 l 478 583 q 383 561 421 583 q 321 497 344 539 q 286 392 297 454 l 286 392 q 276 332 279 354 q 271 298 272 310 q 269 276 269 286 l 269 276 q 283 206 269 235 q 327 163 297 178 q 403 149 357 149 z "},p:{ha:879,x_min:-22,x_max:839,o:"m 204 -258 l -22 -258 l 151 732 l 336 732 l 339 631 l 349 631 q 453 721 394 693 q 579 749 513 749 l 579 749 q 720 718 663 749 q 808 626 778 688 q 839 472 839 564 l 839 472 q 836 415 839 446 q 828 351 833 385 l 828 351 q 757 146 806 228 q 638 24 708 64 q 478 -17 567 -17 l 478 -17 q 391 -7 431 -17 q 322 24 351 3 q 272 75 292 44 l 272 75 l 264 75 l 204 -258 z m 419 161 l 419 161 q 506 181 472 161 q 561 242 540 201 q 593 339 582 282 l 593 339 q 603 397 600 375 q 608 433 607 419 q 608 456 608 446 l 608 456 q 597 519 608 494 q 559 558 585 544 q 492 571 533 571 l 492 571 q 407 548 443 571 q 349 483 371 525 q 317 383 326 440 l 317 383 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 379 161 z "},q:{ha:879,x_min:39,x_max:856,o:"m 682 -258 l 454 -258 l 513 75 l 503 75 q 444 25 476 46 q 373 -6 411 4 q 294 -17 335 -17 l 294 -17 q 158 14 215 -17 q 69 106 100 44 q 39 257 39 167 l 39 257 q 42 315 39 285 q 51 378 46 344 l 51 378 q 122 586 74 504 q 243 708 171 668 q 406 749 315 749 l 406 749 q 539 719 482 749 q 622 631 596 689 l 622 631 l 632 631 l 669 732 l 856 732 l 682 -258 z m 388 161 l 388 161 q 452 175 424 161 q 503 214 481 189 q 540 274 525 239 q 563 350 556 308 l 563 350 q 570 395 568 378 q 573 424 572 413 q 574 444 574 436 l 574 444 q 562 512 574 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 490 339 531 q 286 390 297 449 l 286 390 q 276 333 279 354 q 271 299 272 313 q 269 278 269 286 l 269 278 q 297 191 269 221 q 388 161 325 161 z "},r:{ha:565,x_min:22,x_max:621,o:"m 250 0 l 22 0 l 151 732 l 336 732 l 336 619 l 346 619 q 397 687 368 657 q 463 733 426 717 q 544 750 500 750 l 544 750 q 591 745 571 750 q 621 735 611 740 l 621 735 l 586 536 l 514 536 q 436 524 471 536 q 376 488 401 511 q 335 428 351 464 q 311 347 318 393 l 311 347 l 250 0 z "},s:{ha:804,x_min:18,x_max:765,o:"m 350 -17 l 350 -17 q 220 -4 281 -17 q 115 33 160 8 q 44 94 69 57 q 18 179 18 131 l 18 179 q 21 209 18 193 q 26 235 24 225 l 26 235 l 242 235 q 239 220 240 228 q 238 208 238 213 l 238 208 q 253 166 238 183 q 298 141 269 149 q 360 133 326 133 l 360 133 q 407 137 382 133 q 453 149 432 140 q 488 170 475 157 q 500 204 500 183 l 500 204 q 487 236 500 224 q 451 258 474 249 q 398 275 428 268 q 335 290 368 282 l 335 290 q 248 315 292 301 q 168 349 204 328 q 110 403 132 371 q 88 486 88 436 l 88 486 q 116 604 88 554 q 195 686 144 654 q 313 734 246 718 q 456 750 379 750 l 456 750 q 572 739 517 750 q 672 706 628 728 q 740 650 715 683 q 765 572 765 617 l 765 572 q 762 538 765 554 q 757 515 758 522 l 757 515 l 543 515 q 545 527 544 522 q 546 535 546 532 l 546 535 q 533 571 546 557 q 496 592 519 585 q 439 599 472 599 l 439 599 q 393 594 415 599 q 353 583 371 590 q 326 563 336 575 q 317 536 317 551 l 317 536 q 335 502 317 515 q 385 481 354 489 q 451 463 417 472 l 451 463 q 544 440 496 451 q 635 407 593 428 q 704 351 678 386 q 731 260 731 315 l 731 260 q 701 129 731 182 q 618 44 671 76 q 497 -2 565 13 q 350 -17 428 -17 z "},t:{ha:535,x_min:69,x_max:564,o:"m 283 -17 l 283 -17 q 178 0 219 -17 q 115 49 136 17 q 94 131 94 82 l 94 131 q 97 167 94 144 q 106 228 100 190 l 106 228 l 165 567 l 69 567 l 97 732 l 201 732 l 286 946 l 458 946 l 421 732 l 564 732 l 535 567 l 392 567 l 336 251 q 333 224 335 239 q 331 201 331 210 l 331 201 q 344 163 331 176 q 389 149 357 149 l 389 149 l 461 149 l 436 7 q 389 -5 417 1 q 333 -14 361 -11 q 283 -17 306 -17 z "},u:{ha:874,x_min:54,x_max:850,o:"m 272 -18 l 272 -18 q 155 3 204 -18 q 80 67 106 25 q 54 175 54 110 l 54 175 q 57 220 54 197 q 64 268 60 243 l 64 268 l 144 732 l 374 732 l 296 290 q 292 267 293 278 q 290 246 290 256 l 290 246 q 301 198 290 217 q 331 170 311 179 q 378 161 350 161 l 378 161 q 437 172 408 161 q 488 204 465 183 q 526 254 510 225 q 549 318 542 283 l 549 318 l 622 732 l 850 732 l 721 -1 l 535 -1 l 535 104 l 525 104 q 454 39 494 67 q 368 -3 414 11 q 272 -18 322 -18 z "},v:{ha:797,x_min:69,x_max:858,o:"m 453 0 l 213 0 l 69 732 l 301 732 l 346 453 q 355 391 350 426 q 365 315 360 356 q 375 232 371 274 l 375 232 l 383 232 q 417 313 400 274 q 451 388 435 351 q 482 453 468 424 l 482 453 l 622 732 l 858 732 l 453 0 z "},w:{ha:1193,x_min:67,x_max:1256,o:"m 410 0 l 182 0 l 67 732 l 300 732 l 322 458 q 327 393 325 431 q 332 318 329 356 q 336 253 335 281 l 336 253 l 344 253 q 372 322 356 283 q 403 397 388 361 q 428 457 418 433 l 428 457 l 546 732 l 779 732 l 800 456 q 804 399 801 436 q 810 324 807 363 q 815 253 813 285 l 815 253 l 822 253 q 849 318 833 281 q 879 392 864 356 q 906 456 894 429 l 906 456 l 1026 732 l 1256 732 l 881 0 l 653 0 l 628 306 q 624 358 626 329 q 620 416 622 388 q 617 465 618 444 l 617 465 l 611 465 q 592 417 603 446 q 568 360 581 389 q 544 307 556 332 l 544 307 l 410 0 z "},x:{ha:850,x_min:-56,x_max:888,o:"m 206 0 l -56 0 l 292 382 l 97 732 l 351 732 l 453 524 l 460 524 l 633 732 l 888 732 l 563 378 l 774 0 l 521 0 l 411 232 l 404 232 l 206 0 z "},y:{ha:797,x_min:-46,x_max:858,o:"m 97 -274 l 97 -274 q 7 -266 44 -274 q -46 -253 -31 -258 l -46 -253 l -21 -107 l 75 -107 q 145 -92 115 -107 q 195 -52 175 -76 q 229 0 215 -28 l 229 0 l 68 732 l 301 732 l 353 418 q 363 351 358 388 q 373 281 368 315 q 381 215 378 246 l 381 215 l 390 215 q 410 265 400 239 q 432 316 421 290 q 453 365 443 342 q 474 410 464 389 l 474 410 l 624 732 l 858 732 l 488 29 q 415 -90 454 -35 q 330 -186 376 -144 q 226 -251 283 -228 q 97 -274 168 -274 z "},z:{ha:743,x_min:-32,x_max:761,o:"m 646 0 l -32 0 l -15 89 l 394 567 l 89 567 l 118 732 l 761 732 l 746 646 l 333 165 l 675 165 l 646 0 z "},".":{ha:442,x_min:36,x_max:318,o:"m 276 0 l 36 0 l 78 232 l 318 232 l 276 0 z "},",":{ha:442,x_min:-14,x_max:315,o:"m -14 -249 l -14 -249 l 3 -151 q 70 -126 39 -147 q 124 -72 101 -106 q 151 0 146 -39 l 151 0 l 35 0 l 76 232 l 315 232 l 279 25 q 240 -93 268 -43 q 172 -176 213 -143 q 85 -226 132 -208 q -14 -249 38 -244 z "},"'":{ha:365,x_min:149,x_max:389,o:"m 268 558 l 164 558 l 149 750 l 185 954 l 389 954 l 353 750 l 268 558 z "},"\u2019":{ha:388,x_min:100,x_max:407,o:"m 100 496 l 100 496 l 117 585 q 178 610 149 589 q 229 667 208 632 q 257 742 250 701 l 257 742 l 149 742 l 186 954 l 407 954 l 374 764 q 317 619 358 678 q 219 531 276 561 q 100 496 163 501 z "},"!":{ha:436,x_min:46,x_max:443,o:"m 274 300 l 138 300 l 203 954 l 443 954 l 274 300 z m 261 0 l 46 0 l 82 207 l 299 207 l 261 0 z "},"?":{ha:850,x_min:124,x_max:836,o:"m 518 307 l 317 307 l 328 375 q 356 449 335 417 q 408 506 378 481 q 469 556 438 532 q 527 603 500 579 q 572 653 554 626 q 589 714 589 679 l 589 714 q 580 754 589 735 q 549 786 571 774 q 490 799 528 799 l 490 799 q 431 788 457 799 q 388 759 406 778 q 358 717 369 740 q 343 668 347 693 l 343 668 q 341 649 342 658 q 340 632 340 640 l 340 632 l 124 632 q 144 747 124 694 q 200 842 164 800 q 285 913 236 883 q 395 956 335 942 q 522 971 456 971 l 522 971 q 652 954 594 971 q 751 907 710 938 q 815 833 793 876 q 836 733 836 789 l 836 733 q 815 630 836 675 q 760 551 794 585 q 686 490 725 517 q 612 440 647 463 q 552 394 576 417 q 524 343 528 371 l 524 343 l 518 307 z m 483 0 l 254 0 l 293 221 l 522 221 l 483 0 z "},$:{ha:803,x_min:38,x_max:785,o:"m 360 -82 l 268 -82 l 300 97 q 240 107 268 101 l 240 107 q 134 144 179 119 q 63 206 89 168 q 38 290 38 243 l 38 290 q 40 320 38 304 q 46 346 43 336 l 46 346 l 261 346 q 258 331 260 339 q 257 319 257 324 l 257 319 q 273 277 257 294 q 318 253 289 260 l 318 253 q 328 250 322 251 l 328 250 l 354 401 q 268 426 311 413 l 268 426 q 188 460 224 439 q 129 515 151 482 q 107 597 107 549 l 107 597 q 135 715 107 665 q 215 797 164 765 q 332 846 265 829 l 332 846 q 435 860 381 857 l 435 860 l 465 1029 l 557 1029 l 526 860 q 592 850 560 857 l 592 850 q 691 817 647 839 q 760 761 735 794 q 785 683 785 728 l 785 683 q 781 650 785 667 q 776 626 778 633 l 776 626 l 563 626 q 565 638 564 633 q 565 646 565 643 l 565 646 q 552 682 565 668 q 515 703 539 696 l 515 703 q 500 707 508 706 l 500 707 l 476 572 q 564 551 518 563 l 564 551 q 655 518 613 539 q 724 462 697 497 q 750 371 750 426 l 750 371 q 720 240 750 293 q 638 156 690 188 q 517 110 585 124 l 517 110 q 392 94 457 96 l 392 94 l 360 -82 z m 442 381 l 418 247 q 426 249 422 249 l 426 249 q 473 260 451 251 q 507 281 494 268 q 519 315 519 294 l 519 315 q 506 347 519 335 q 471 369 493 360 l 471 369 q 442 381 457 375 l 442 381 z m 389 597 l 389 597 l 408 704 q 374 694 389 700 l 374 694 q 346 674 356 686 q 336 647 336 663 l 336 647 q 356 614 336 626 l 356 614 q 389 597 368 604 z "},"%":{ha:1367,x_min:151,x_max:1257,o:"m 376 0 l 232 0 l 1035 954 l 1179 954 l 376 0 z m 368 472 l 368 472 q 206 519 260 472 q 151 656 151 565 l 151 656 q 153 690 151 672 q 158 726 154 708 l 158 726 q 207 861 172 807 q 297 943 242 915 q 433 971 353 971 l 433 971 q 594 925 540 971 q 647 788 647 879 l 647 788 q 646 753 647 771 q 642 717 644 736 l 642 717 q 594 583 628 638 q 504 501 560 529 q 368 472 449 472 z m 975 -17 l 975 -17 q 814 29 868 -17 q 760 165 760 75 l 760 165 q 762 202 760 183 q 767 240 764 221 l 767 240 q 815 373 782 319 q 905 454 849 426 q 1040 482 961 482 l 1040 482 q 1203 436 1149 482 q 1257 297 1257 390 l 1257 297 q 1255 263 1257 282 q 1250 225 1253 244 l 1250 225 q 1201 92 1235 146 q 1112 11 1168 39 q 975 -17 1056 -17 z m 375 576 l 375 576 q 449 613 425 576 q 483 703 472 650 l 483 703 q 490 741 488 726 q 493 766 492 756 q 494 785 494 776 l 494 785 q 478 845 494 824 q 424 867 463 867 l 424 867 q 351 831 375 867 q 315 740 326 794 l 315 740 q 310 703 313 718 q 306 678 307 689 q 304 660 304 668 l 304 660 q 321 599 304 621 q 375 576 338 576 z m 983 88 l 983 88 q 1060 126 1038 88 q 1097 239 1083 165 l 1097 239 q 1101 261 1100 251 q 1102 280 1101 271 q 1103 296 1103 289 l 1103 296 q 1087 356 1103 335 q 1033 378 1071 378 l 1033 378 q 956 338 979 378 q 919 226 933 299 l 919 226 q 916 205 917 215 q 915 187 915 194 q 914 171 914 179 l 914 171 q 930 110 914 132 q 983 88 946 88 z "},"&":{ha:1133,x_min:69,x_max:1143,o:"m 476 -17 l 476 -17 q 253 14 343 -17 q 116 99 163 44 q 69 226 69 154 l 69 226 q 99 349 69 296 q 179 440 129 403 q 292 493 229 478 l 292 493 l 293 499 q 208 565 242 521 q 175 671 175 608 l 175 671 q 211 801 175 746 q 310 895 247 857 q 454 952 374 933 q 624 971 535 971 l 624 971 q 831 942 744 971 q 965 862 918 913 q 1011 744 1011 811 l 1011 744 q 1009 718 1011 735 q 1001 675 1007 701 l 1001 675 l 789 675 q 793 700 793 692 l 793 700 l 793 711 q 774 759 793 739 q 717 790 754 779 q 621 801 679 801 l 621 801 q 528 790 568 801 q 460 758 488 778 q 419 710 433 738 q 404 651 404 683 l 404 651 q 419 602 404 622 q 459 573 433 582 q 515 564 485 564 l 515 564 l 636 564 l 608 407 l 472 407 q 413 399 442 407 q 360 373 383 390 q 324 328 338 356 q 311 263 311 301 l 311 263 q 330 203 311 228 q 388 166 349 179 q 488 153 426 153 l 488 153 q 613 170 564 153 q 689 219 663 188 q 722 290 715 250 l 722 290 l 769 564 l 1143 564 l 1115 407 l 956 407 l 935 294 q 864 130 918 200 q 714 22 810 60 q 476 -17 618 -17 z "},"-":{ha:463,x_min:42,x_max:425,o:"m 392 283 l 42 283 l 75 474 l 425 474 l 392 283 z "},":":{ha:464,x_min:49,x_max:418,o:"m 376 500 l 136 500 l 178 733 l 418 733 l 376 500 z m 289 0 l 49 0 l 90 232 l 331 232 l 289 0 z "},"|":{ha:368,x_min:104,x_max:264,o:"m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z "}},familyName:"Archivo ExtraBold Italic",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-268,xMax:1462,yMin:-405,yMax:1100},resolution:1e3};var Cf={500:Ef,800:wf,"800i":Tf},qf=new Map,d4=n=>{let e=qf.get(n);return e||(e=new Nl(Cf[n]),qf.set(n,e)),e},Af=new Map,Rf=(n,e,t,i,r)=>{let s=`${e}|${t}|${i}|${r}|${n}`,a=Af.get(s);if(!a){let o=new Fl(n,{font:d4(e),size:t,depth:Math.max(.1,i-2*r),curveSegments:6,bevelEnabled:r>0,bevelThickness:r,bevelSize:r*.8,bevelOffset:-r*.8,bevelSegments:2});o.translate(0,0,r),o.computeBoundingBox();let l=o.boundingBox;a={g:o,w:Number.isFinite(l.max.x)?l.max.x-Math.min(0,l.min.x):0},Af.set(s,a)}return a},Un=(n,e,t)=>{let i=Cf[e],r=0;for(let s of n)r+=(i.glyphs[s]??i.glyphs["?"]).ha*t/i.resolution;return r},js=(n,e)=>{let t=e.depth??e.size*.25,i=e.bevel??Math.min(t*.2,e.size*.03),r=Rf(n,e.font??"800",e.size,t,i),s=new Ye(r.g,[e.face,e.side??e.face]);s.castShadow=!0,s.receiveShadow=!0;let a=new St;return s.position.x=e.align==="left"?0:-Un(n,e.font??"800",e.size)/2,a.add(s),a.userData.width=Un(n,e.font??"800",e.size),a},If=n=>{let e=n.font??"800",t=n.depth??n.size*.25,i=n.bevel??Math.min(t*.2,n.size*.03),r=new St,s=[],a=[n.face,n.side??n.face],o=Math.max(...Array.from("0123456789",d=>Un(d,e,n.size))),l=d=>/\d/.test(d)?o:Un(d,e,n.size),c="";return{group:r,set:d=>{if(d===c)return;c=d;let u=Array.from(d).reduce((g,m)=>g+l(m),0),f=-u/2,x=0;for(let g of d){let m=l(g);if(g!==" "){let p=s[x];p||(p=new Ye(void 0,a),p.castShadow=!0,p.receiveShadow=!0,s.push(p),r.add(p)),p.geometry=Rf(g,e,n.size,t,i).g,p.position.x=f+(/\d/.test(g)?(o-Un(g,e,n.size))/2:0),p.visible=!0,x++}f+=m}for(;x<s.length;x++)s[x].visible=!1;r.userData.width=u}}};var ea=new P;function mn(n,e,t,i,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ea.copy(e),ea[i]=0,ea.normalize();let c=.5*a/(a+o),h=1-ea.angleTo(n)/l;return Math.sign(ea[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ol=class n extends In{constructor(e=1,t=1,i=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,t,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,x=d.length/6,g=new P,m=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*s,d[p+1]=h.y*Math.sign(l.y)+c.y*s,d[p+2]=h.z*Math.sign(l.z)+c.z*s,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/x)){case 0:g.set(1,0,0),f[S+0]=mn(g,c,"z","y",s,i),f[S+1]=1-mn(g,c,"y","z",s,t);break;case 1:g.set(-1,0,0),f[S+0]=1-mn(g,c,"z","y",s,i),f[S+1]=1-mn(g,c,"y","z",s,t);break;case 2:g.set(0,1,0),f[S+0]=1-mn(g,c,"x","z",s,e),f[S+1]=mn(g,c,"z","x",s,i);break;case 3:g.set(0,-1,0),f[S+0]=1-mn(g,c,"x","z",s,e),f[S+1]=1-mn(g,c,"z","x",s,i);break;case 4:g.set(0,0,1),f[S+0]=1-mn(g,c,"x","y",s,e),f[S+1]=1-mn(g,c,"y","x",s,t);break;case 5:g.set(0,0,-1),f[S+0]=mn(g,c,"x","y",s,e),f[S+1]=1-mn(g,c,"y","x",s,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Pf=1.18,Df=n=>(n.traverse(e=>{let t=e;if(t.isMesh)for(let i of Array.isArray(t.material)?t.material:[t.material]){if(i.isMeshBasicMaterial){t.castShadow=!1;continue}let r=i;r.isMeshStandardMaterial&&r.userData.envBase===void 0&&(r.userData.envBase=r.envMapIntensity)}}),n),Lf=(n,e={})=>{let t=e.s??1;return{amb:e.amb??.2,key:{pos:[n[0]-900*t,n[1]+2300*t,n[2]+1500*t],at:[n[0],n[1]*.5,n[2]],i:e.key??3.6,color:e.color??"#FBF7F6",angle:.42,soft:1},rim:{pos:[n[0]+1300*t,n[1]+1100*t,n[2]-1500*t],at:n,i:e.rim??3,color:"#F4F1F2",angle:.8,soft:.8},aux:{pos:[n[0]-1700*t,n[1]+500*t,n[2]-700*t],at:n,i:(e.rim??3)*.5,color:"#EEEAEA",angle:.8,soft:.8},back:{pos:[n[0],n[1]+900*t,n[2]+600],at:[n[0],n[1]+500*t,ta],i:e.back??3.2,color:"#F2EEEE",angle:.5,soft:1},focus:[n[0],n[2]],reach:e.reach??2600*t,reflect:.06}},ta=-2600,Uf=(n,e={})=>({amb:e.amb??.95,key:{pos:[n[0]-700,n[1]+2600,n[2]+900],at:n,i:e.key??1.1,color:"#FFFFFF",angle:.8,soft:1},aux:{pos:[n[0]+1500,n[1]+1500,n[2]+900],at:n,i:.35,color:"#FFFFFF",angle:.9,soft:1},back:{pos:[n[0],n[1]+1200,n[2]+600],at:[n[0],n[1]+600,ta],i:.4,color:"#FFFFFF",angle:.9,soft:1},focus:[n[0],n[2]],reach:2600,reflect:0});var Lt={white:"#f8f2f2",money:"#f6f2bd",red:"#f55048",amber:"#f6b050",gold:"#8a6f47",cream:"#f8e9c0",black:"#09090a",graphite:"#19191b",satin:"#9a9a9e",paper:"#e8e5de"},ti=n=>new be(n),Oh={black:()=>new Sn({color:ti(Lt.black),roughness:.42,metalness:.15,envMapIntensity:.9,clearcoat:.25,clearcoatRoughness:.45}),graphite:()=>new Sn({color:ti(Lt.graphite),roughness:.5,metalness:.3,envMapIntensity:.8}),satin:()=>new Sn({color:ti(Lt.satin),roughness:.32,metalness:1,envMapIntensity:.9}),gold:()=>new Sn({color:ti(Lt.gold),roughness:.34,metalness:1,envMapIntensity:1.25}),paper:()=>new Gt({color:ti(Lt.paper),roughness:.92,metalness:0}),rubber:()=>new Gt({color:ti("#09090a"),roughness:.85,metalness:0})},na=(n,e=Pf)=>{let t=new tn({color:ti(n).multiplyScalar(e),toneMapped:!1});return t.userData.full=t.color.clone(),t},f4=(n,e,t=.07)=>{n.color.copy(n.userData.full).multiplyScalar(t+(1-t)*_n(e))},p4=n=>(n.castShadow=!0,n.receiveShadow=!0,n),Ff=(n,e,t,i,r)=>p4(new Ye(new Ol(n,e,t,4,Math.min(i,n/2-.01,e/2-.01,t/2-.01)),r)),Nf=(n,e,t,i,r)=>{let s=Ff(n,e,t,i,r);return s.position.y=e/2,s};var m4=(n,e=1.14)=>(n.scale.x*=e,n),Of=(n,e,t,i,r)=>{if(n>=t)return r;if(n<=e)return i;let s=(n-e)/(t-e);return i+(r-i)*(1-Math.pow(1-s,2.6))};var Bf=n=>{let e=Math.abs(n);return e>=1e9?"$"+(e>=1e10?Math.round(n/1e9):Math.round(n/1e8)/10)+"B":e>=1e6?"$"+(e>=1e7?Math.round(n/1e6):Math.round(n/1e5)/10)+"M":"$"+Math.round(n).toLocaleString("en-US")},zf=n=>{let e=na(n.color??Lt.white),t=new Gt({color:ti(n.color??Lt.white).multiplyScalar(.22),roughness:.5,metalness:.4}),i=If({font:n.font??"800",size:n.size,depth:n.depth??n.size*.34,face:e,side:t});return i.group.scale.x=n.wide??1.14,{group:i.group,set:i.set,face:e,side:t}},kf=(n,e={})=>{let t=n.join(" ").trim().split(/\s+/).length;if(t>3&&!/^[\d$.,%×x= ]+$/.test(n.join("")))throw new Error(`litPlate: "${n.join(" ")}" is ${t} words; in-scene text is at most three words or one figure with a unit (R8)`);let i=e.size??110,r=e.font??"800",s=1.14,a=na(e.color??Lt.white),o=n.map(f=>Un(f,r,i)*s),l=e.w??Math.max(...o)+2*(e.padX??i*.55),c=i*1.12,h=n.length*c+2*(e.padY??i*.42),d=e.depth??Math.max(40,i*.5),u=new St;return u.add(Ff(l,h,d,Math.min(18,d*.3),e.mat??Oh.black())),n.forEach((f,x)=>{let g=m4(js(f,{font:r,size:i,depth:4,bevel:0,face:a}),s);g.position.set(0,((n.length-1)/2-x)*c-i*.345,d/2+.5),g.traverse(m=>{m.castShadow=!1}),u.add(g)}),{group:u,face:a,w:l,h,d,setLit:f=>f4(a,f)}},Vf=(n={})=>{let e=n.r??900,t=(n.w??12)/e,i=n.dur??28,r=new tn({color:ti(n.color??Lt.white).multiplyScalar(1.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1,blending:Kn,fog:!1}),s=new Ye(new Ls(1-t,1,96),r);return s.rotation.x=-Math.PI/2,s.position.y=1.5,s.renderOrder=3,s.userData.isFloor=!0,{mesh:s,update:(a,o)=>{let l=(a-o)/i;if(l<=0||l>=1){s.visible=!1;return}s.visible=!0;let c=1-Math.pow(1-l,2.2);s.scale.setScalar(Math.max(1,e*c)),r.opacity=Math.pow(1-l,1.4)*.9}}};var Bh=(n,e,t={})=>{let i=t.h??1400,r=t.fall??9,s=i*(t.bounce??1)*.045,a=n-e;if(a<-r)return{y:i,on:!1,fast:!1};if(a<0){let c=(a+r)/r;return{y:i*(1-c*c),on:!0,fast:!0}}let o=9,l=6;if(a<o){let c=a/o;return{y:s*4*c*(1-c),on:!0,fast:a<2}}if(a<o+l){let c=(a-o)/l;return{y:s*.28*4*c*(1-c),on:!0,fast:!1}}return{y:0,on:!0,fast:!1}};var x4=5,Bl=n=>{let e=Ra.indexOf(n);if(e<=0)return 0;let t=Ra[e-1];return Math.max(Sf(t,Ca[t]-1)+2,Ul(n,0)-x4)};var Wf=30,g4=960/Math.tan(Wf*Math.PI/360),ia=84,Hf=.06,zh=250,_4=.62*1080,v4=(.5-.52)*1920,Gf=190,b4=n=>{let e=gn.find(t=>t.scene===n);if(!e?.w?.length)throw new Error(`turn card ${n}: its cue has no tokens`);return e.w.map(([t,i])=>({t,at:Si(i)-1}))},y4=n=>new at({transparent:!0,depthWrite:!1,blending:Kn,fog:!1,uniforms:{col:{value:new be(n)},a:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 col; uniform float a; varying vec2 vUv;
    void main() { float d = length((vUv - 0.5) * vec2(2.0, 2.3)); float g = pow(clamp(1.0 - d, 0.0, 1.0), 1.7); gl_FragColor = vec4(col * g * a, 1.0); }`}),Xf=(n,e,t,i)=>{let r=b4(n),s=r[r.length-1],a=r.slice(0,-1),o=Bl(n),l=Math.min(zh,zh*_4/Math.max(1,Un(s.t,"800i",zh))),c=v4-Gf/2-l*.2,h=c+Gf+l*.25;return{id:n,label:e,enter:o,stage:"card",shots:({from:d})=>[Pa(d,[0,0,g4],[0,0,0],{fov:Wf,still:!0,why:"the card"})],lights:()=>({amb:0,key:{pos:[0,1e3,2e3],at:[0,0,0],i:0}}),cues:()=>[{kind:"hit",s:"sub",at:s.at,vol:.42,why:`the card's word lands: ${s.t}`},{kind:"hit",s:"bloom",at:s.at+1,vol:.3,why:"the glow blooms behind it"}],build:()=>{let d=new St,u=na("#faf0ee",1),f=na(t,1.12),x=new tn({color:new be("#faf0ee"),transparent:!0,opacity:.32,toneMapped:!1,depthWrite:!1}),g=ia*.34,m=a.map(A=>Un(A.t,"500",ia)*(1+Hf)),S=-(m.reduce((A,D)=>A+D,0)+g*Math.max(0,a.length-1))/2,y=a.map((A,D)=>{let M=js(A.t,{font:"500",size:ia,depth:1,bevel:0,face:u,align:"left"});M.scale.x=1+Hf,M.position.set(S,h,0);let v=new Ye(new sn(m[D],ia*.62),x);return v.position.set(S+m[D]/2,h+ia*.3,1),S+=m[D]+g,d.add(M,v),{g:M,b:v,at:A.at}}),w=js(s.t,{font:"800i",size:l,depth:1,bevel:0,face:f});w.position.set(0,c,2);let C=y4(i),q=new Ye(new sn(1500,1300),C);return q.position.set(0,c+l*.3,-4),d.add(q,w),d.traverse(A=>{A.castShadow=!1}),{group:d,update:A=>{for(let M of y)M.g.visible=A>=M.at,M.b.visible=A>=M.at-2&&A<M.at;w.visible=A>=s.at;let D=_n((A-s.at+1)/3);w.scale.set(1,.55+.45*D,1),C.uniforms.a.value=.85*(1-Math.pow(1-_n((A-s.at)/7),2))}}}}},Yf=Xf("explain","2 Turn card: Let us explain.",Lt.amber,"#743815"),$f=Xf("catch","5 Turn card: But here's the catch.",Lt.red,"#6c1310");var Or=(n,e,t,i,r={})=>{let s=Bl(n),a=Math.max(s+12,Ul(n,0)+6),o=[0,330,0];return{id:n,label:e,enter:s,stage:r.stage??"dark",shots:({from:l,to:c})=>[Pa(l,[-900,420,2500],[0,360,0],{fov:42,focus:o,why:"enter"}),Uu(l+1,Math.max(30,c-l-2),[-520,470,1750],[0,380,0],{fov:42,ease:ji,why:"slow push-in"})],lights:()=>r.stage==="light"?Uf(o):Lf(o),blur:l=>Bh(l,a).fast,cues:()=>[{kind:"hit",s:"thud",at:a,vol:.4,why:`${t}: the block lands`}],build:()=>{let l=new St,c=new St;c.add(Nf(760,520,560,34,Oh.black()));let h=kf([t],{size:58,color:Lt.white});h.group.position.set(0,300,280+h.d/2),c.add(h.group);let d=zf({size:90,color:r.color??Lt.money});d.group.position.set(0,0,440);let u=Vf({r:1100});return l.add(c,d.group,u.mesh),{group:l,update:f=>{let x=Bh(f,a);c.visible=x.on,c.position.y=x.y,h.setLit((f-a)/10),d.group.visible=f>=a,d.set(Bf(Of(f,a,a+26,i*.2,i))),u.update(f,a+26)}}}}},Zf=Or("hook","1 Hook (placeholder)","HOOK",29e9),Jf=Or("deal","3 The deal (placeholder)","THE DEAL",375e6),Kf=Or("price","4 The price (placeholder, light stage)","THE PRICE",247,{stage:"light"}),Qf=Or("close","6 The close (placeholder)","THE CLOSE",138e8,{color:Lt.red}),jf=Or("fair","7 To be fair (placeholder)","TO BE FAIR",29e9),e0=Or("verdict","8 The verdict (placeholder)","THE VERDICT",138e8);var on=[Zf,Yf,Jf,Kf,$f,Qf,jf,e0],Ft=on.map((n,e)=>({id:n.id,from:e===0?0:n.enter,to:e+1<on.length?on[e+1].enter:Kr}));for(let n=1;n<Ft.length;n++)if(Ft[n].from<=Ft[n-1].from)throw new Error(`037 world: ${Ft[n].id} enters at f${Ft[n].from}, not after ${Ft[n-1].id}`);var t0=on.map((n,e)=>{let t=Ft[e],i=n.shots({from:t.from,to:t.to});if(!i.length||Math.round(i[0].at)!==t.from)throw new Error(`037 world: ${n.id}'s first camera key must start on its enter frame f${t.from} (it starts at f${i[0]?.at})`);if(e>0&&!i[0].cut)throw new Error(`037 world: ${n.id} must open on a hard cut (cut(...) or whipIn(...)): places are never joined by a travel (R23)`);if(i.some(s=>(s.dip??0)>0))throw new Error(`037 world: ${n.id} dips to black: there is never a black frame between places (R23)`);let r=i[i.length-1];if(r.at+r.dur>t.to+1e-6&&e+1<on.length)throw new Error(`037 world: ${n.id}'s last camera key ends at f${r.at+r.dur}, after ${on[e+1].id} enters (f${t.to})`);return i}),kh=Fu("037",t0.flat()),Vh=n=>{let e=0;for(let t=0;t<Ft.length;t++)n>=Ft[t].from&&(e=t);return e},M4=t0.flatMap((n,e)=>n.filter(t=>t.whoosh&&!t.cut).map(t=>({id:on[e].id,mid:t.at+t.dur/2,end:t.at+t.dur,vol:t.whoosh,why:t.why??"move"}))),z_=Du(Ft.map(n=>({id:n.id,from:n.from,to:n.to})),M4,on.flatMap((n,e)=>(n.cues?.({from:Ft[e].from,to:Ft[e].to})??[]).map(t=>({...t,id:n.id})))).cues;var n0=[{a:0,b:4.478,cue:0,objWords:!1,lines:[[{t:"An",bold:!1,a:0},{t:"American",bold:!1,a:.16},{t:"company",bold:!1,a:.54},{t:"bought",bold:!1,a:1.04},{t:"Afterpay",bold:!1,a:1.44},{t:"for",bold:!1,a:1.98},{t:"$29",bold:!1,a:2.24},{t:"billion.",bold:!1,a:3.315}]]},{a:4.478,b:8.44,cue:1,objWords:!1,lines:[[{t:"But",bold:!1,a:4.478},{t:"when",bold:!1,a:4.6},{t:"the",bold:!1,a:4.74},{t:"deal",bold:!1,a:4.86},{t:"closed,",bold:!1,a:5.02},{t:"its",bold:!1,a:5.92},{t:"own",bold:!1,a:6.06},{t:"filing",bold:!1,a:6.34},{t:"put",bold:!1,a:6.72},{t:"the",bold:!1,a:6.94},{t:"price",bold:!1,a:7.1},{t:"at",bold:!1,a:7.34},{t:"13.8.",bold:!1,a:7.58}]]},{a:8.44,b:10.54,cue:2,objWords:!1,lines:[[{t:"So",bold:!1,a:8.44},{t:"which",bold:!1,a:9.12},{t:"number",bold:!1,a:9.58},{t:"is",bold:!1,a:9.78},{t:"right?",bold:!1,a:10.04}]]},{a:10.54,b:11.88,cue:3,objWords:!1,lines:[[{t:"Let",bold:!1,a:10.54},{t:"us",bold:!1,a:10.64},{t:"explain.",bold:!1,a:10.78}]]},{a:11.88,b:17.058,cue:4,objWords:!1,lines:[[{t:"In",bold:!1,a:11.88},{t:"August",bold:!1,a:11.98},{t:"2021,",bold:!1,a:12.3},{t:"Jack",bold:!1,a:13.63},{t:"Dorsey's",bold:!1,a:13.84},{t:"company,",bold:!1,a:14.36},{t:"Square,",bold:!1,a:14.68},{t:"agreed",bold:!1,a:15.518},{t:"to",bold:!1,a:15.8},{t:"buy",bold:!1,a:16.02},{t:"Afterpay.",bold:!1,a:16.26}]]},{a:17.058,b:18.92,cue:5,objWords:!1,lines:[[{t:"But",bold:!1,a:17.058},{t:"Square",bold:!1,a:17.16},{t:"didn't",bold:!1,a:17.46},{t:"pay",bold:!1,a:17.86},{t:"in",bold:!1,a:18.06},{t:"cash.",bold:!1,a:18.2}]]},{a:18.92,b:20.8,cue:6,objWords:!1,lines:[[{t:"It",bold:!1,a:18.92},{t:"paid",bold:!1,a:19.02},{t:"in",bold:!1,a:19.32},{t:"its",bold:!1,a:19.56},{t:"own",bold:!1,a:19.7},{t:"shares.",bold:!1,a:19.96}]]},{a:20.8,b:25.275,cue:7,objWords:!1,lines:[[{t:"For",bold:!1,a:20.8},{t:"every",bold:!1,a:20.88},{t:"Afterpay",bold:!1,a:21.26},{t:"share,",bold:!1,a:21.82},{t:"you",bold:!1,a:22.413},{t:"got",bold:!1,a:22.56},{t:"0.375",bold:!1,a:22.902},{t:"of",bold:!1,a:23.6},{t:"a",bold:!1,a:24.38},{t:"Square",bold:!1,a:24.52},{t:"share.",bold:!1,a:24.76}]]},{a:25.275,b:29.315,cue:8,objWords:!1,lines:[[{t:"At",bold:!1,a:25.275},{t:"the",bold:!1,a:25.36},{t:"time,",bold:!1,a:25.5},{t:"each",bold:!1,a:26.104},{t:"Square",bold:!1,a:26.28},{t:"share",bold:!1,a:26.62},{t:"was",bold:!1,a:26.92},{t:"worth",bold:!1,a:27.14},{t:"$247.",bold:!1,a:27.538}]]},{a:29.315,b:32.06,cue:9,objWords:!1,lines:[[{t:"Multiply",bold:!1,a:29.315},{t:"it",bold:!1,a:29.74},{t:"out,",bold:!1,a:29.84},{t:"and",bold:!1,a:30.39},{t:"you",bold:!1,a:30.46},{t:"get",bold:!1,a:30.62},{t:"29",bold:!1,a:31.092},{t:"billion.",bold:!1,a:31.5}]]},{a:32.06,b:33.61,cue:10,objWords:!1,lines:[[{t:"But",bold:!1,a:32.06},{t:"here's",bold:!1,a:32.08},{t:"the",bold:!1,a:32.36},{t:"catch.",bold:!1,a:32.48}]]},{a:33.61,b:35.98,cue:11,objWords:!1,lines:[[{t:"The",bold:!1,a:33.61},{t:"deal",bold:!1,a:33.68},{t:"took",bold:!1,a:33.98},{t:"six",bold:!1,a:34.26},{t:"months",bold:!1,a:34.7},{t:"to",bold:!1,a:35.08},{t:"close.",bold:!1,a:35.32}]]},{a:35.98,b:40.76,cue:12,objWords:!1,lines:[[{t:"By",bold:!1,a:35.98},{t:"then,",bold:!1,a:36.04},{t:"Square",bold:!1,a:36.62},{t:"had",bold:!1,a:36.9},{t:"renamed",bold:!1,a:37.12},{t:"itself",bold:!1,a:37.5},{t:"Block,",bold:!1,a:38.142},{t:"and",bold:!1,a:38.669},{t:"its",bold:!1,a:38.74},{t:"share",bold:!1,a:38.92},{t:"price",bold:!1,a:39.16},{t:"had",bold:!1,a:39.48},{t:"roughly",bold:!1,a:39.68},{t:"halved.",bold:!1,a:40.04}]]},{a:40.76,b:43.33,cue:13,objWords:!1,lines:[[{t:"Same",bold:!1,a:40.76},{t:"number",bold:!1,a:40.94},{t:"of",bold:!1,a:41.16},{t:"shares.",bold:!1,a:41.38},{t:"About",bold:!1,a:41.989},{t:"half",bold:!1,a:42.2},{t:"the",bold:!1,a:42.56},{t:"price.",bold:!1,a:42.76}]]},{a:43.33,b:49.16,cue:14,objWords:!1,lines:[[{t:"So",bold:!1,a:43.33},{t:"when",bold:!1,a:43.44},{t:"the",bold:!1,a:43.58},{t:"deal",bold:!1,a:43.7},{t:"closed,",bold:!1,a:43.86},{t:"Block",bold:!1,a:44.76},{t:"told",bold:!1,a:44.98},{t:"the",bold:!1,a:45.22},{t:"SEC",bold:!1,a:45.4},{t:"what",bold:!1,a:45.8},{t:"those",bold:!1,a:46.315},{t:"shares",bold:!1,a:46.5},{t:"were",bold:!1,a:46.74},{t:"worth:",bold:!1,a:46.98},{t:"13.8",bold:!1,a:47.58},{t:"billion.",bold:!1,a:48.679}]]},{a:49.16,b:55.3,cue:15,objWords:!1,lines:[[{t:"To",bold:!1,a:49.16},{t:"be",bold:!1,a:49.24},{t:"fair,",bold:!1,a:49.38},{t:"29",bold:!1,a:50.02},{t:"billion",bold:!1,a:50.44},{t:"was",bold:!1,a:50.82},{t:"real",bold:!1,a:51.18},{t:"on",bold:!1,a:51.56},{t:"day",bold:!1,a:51.84},{t:"one,",bold:!1,a:52.02},{t:"and",bold:!1,a:52.662},{t:"Afterpay's",bold:!1,a:52.86},{t:"shareholders",bold:!1,a:53.34},{t:"got",bold:!1,a:53.78},{t:"the",bold:!1,a:54.24},{t:"shares",bold:!1,a:54.4},{t:"they",bold:!1,a:54.62},{t:"were",bold:!1,a:54.8},{t:"promised.",bold:!1,a:54.96}]]},{a:55.3,b:59.25,cue:16,objWords:!1,lines:[[{t:"But",bold:!1,a:55.3},{t:"the",bold:!1,a:55.64},{t:"price",bold:!1,a:55.8},{t:"tag",bold:!1,a:56.04},{t:"everyone",bold:!1,a:56.28},{t:"remembers",bold:!1,a:56.74},{t:"was",bold:!1,a:57.26},{t:"never",bold:!1,a:57.76},{t:"the",bold:!1,a:58.16},{t:"price",bold:!1,a:58.38},{t:"paid.",bold:!1,a:58.66}]]},{a:59.25,b:60.74,cue:17,objWords:!1,lines:[[{t:"Our",bold:!1,a:59.25},{t:"rating:",bold:!1,a:59.4},{t:"inflated.",bold:!1,a:59.93}]]},{a:60.74,b:62,cue:18,objWords:!1,lines:[[{t:"Send",bold:!1,a:60.74},{t:"us",bold:!1,a:60.88},{t:"who",bold:!1,a:61.04},{t:"to",bold:!1,a:61.24},{t:"audit",bold:!1,a:61.42},{t:"next.",bold:!1,a:61.6}]]}];var i0='"Archivo", sans-serif';var r0=()=>(n,e)=>({}),s0=({children:n})=>zn(Bn,{children:n});var zl=30,Hh=275,S4=500,E4="#e9e2e1",w4=2,T4=1,Gh=new Set(["explain","catch"]),Q_={y0:Hh-10,y1:Hh+zl*1.3},q4=/[,.:;!?]$/,A4=n=>{let e=[],t=[];return n.forEach((i,r)=>{t.push(i);let s=n.length-1-r;(s===0||(t.length>=4||t.length>=2&&q4.test(i.t))&&s!==1)&&(e.push(t),t=[])}),e},Ei=n0.flatMap(n=>{let e=gn[n.cue].scene;return A4(n.lines.flat()).map(t=>({text:t.map(i=>i.t).join(" "),a:t[0].a,cue:n.cue,scene:e}))}),a0=n=>Si(n.a)-T4;var C4=(n,e)=>{for(let t=Ei.length-1;t>=0;t--)if(Ei[t].scene===n&&e>=a0(Ei[t]))return t;return-1},o0=({scene:n,f:e})=>{let t=r0();if(Gh.has(n))return null;let i=C4(n,e);if(i<0)return null;let r=ji(_n((e-a0(Ei[i]))/w4));return zn(s0,{s:n,g:"caption",children:zn("div",{"data-cap":"1",style:{position:"absolute",inset:0,pointerEvents:"none"},children:zn("div",{...t("cap.0","cap"),style:{position:"absolute",left:90,width:860,top:Hh,height:zl*1.25,lineHeight:`${zl*1.25}px`,textAlign:"center",whiteSpace:"nowrap",color:E4,fontFamily:i0,fontSize:zl,fontWeight:S4,letterSpacing:"0.005em",opacity:r<.999?r:void 0,textShadow:"0 1px 6px rgba(0,0,0,0.55)",transform:"perspective(1200px) rotateX(0.15deg)"},children:Ei[i].text})})})};var Wh="world",l0=()=>[{id:Wh,from:0,to:Kr,track:0,z:1,label:"The world: one 3-D scene, one camera"},{id:"captions",from:0,to:Kr,track:1,z:30,label:"Captions"},...on.map((n,e)=>({id:n.id,from:Ft[e].from,to:Ft[e].to,track:2+e,z:2,label:n.label}))],R4=n=>{let e=Ei[0].scene;for(let t of Ei)n>=Si(t.a)-2&&(e=t.scene);return e},c0=({id:n,f:e})=>{if(n!=="captions")return null;let t=R4(e);return Gh.has(t)?null:zn(o0,{scene:t,f:e,ground:"dark",align:()=>"centre"})};var zr=class extends Jn{constructor(){super();let e=new In;e.deleteAttribute("uv");let t=new Gt({side:Rt}),i=new Gt,r=new Vi(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Ye(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Es(e,i,6),o=new vt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ye(e,Br(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ye(e,Br(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ye(e,Br(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ye(e,Br(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ye(e,Br(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ye(e,Br(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Br(n){return new Ns({color:0,emissive:16777215,emissiveIntensity:n})}var kr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},I4=new Hi(-1,1,1,-1,0,1),Xh=class extends nn{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},P4=new Xh,Fn=class{constructor(e){this._mesh=new Ye(P4,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,I4)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vr=class extends Nt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof at?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tn.clone(e.uniforms),this.material=new at({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Fn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ra=class extends Nt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},kl=class extends Nt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Vl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vr(kr),this.copyPass.material.blending=Wt,this.clock=new Vs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ra!==void 0&&(a instanceof ra?i=!0:a instanceof kl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hl=class extends Nt{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var sa={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Gl=class extends Nt{constructor(e,t,i){super(),this.scene=e,this.camera=t;let r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new xt(1,1,{minFilter:Ct,magFilter:Ct,type:Mt}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new wr,this._materialDepth.depthPacking=Cl,this._materialDepth.blending=Wt;let o=Tn.clone(sa.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=r,o.aspect.value=t.aspect,o.aperture.value=s,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new at({defines:Object.assign({},sa.defines),uniforms:o,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader}),this.uniforms=o,this._fsQuad=new Fn(this.materialBokeh),this._oldClearColor=new be}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var h0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Hr=class n extends Nt{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xt(s,a,{type:Mt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new xt(s,a,{type:Mt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new xt(s,a,{type:Mt});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}let o=h0;this.highPassUniforms=Tn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new at({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ee(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Tn.clone(kr.uniforms),this.blendMaterial=new at({uniforms:this.copyUniforms,vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new tn,this._fsQuad=new Fn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ee(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new at({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(e){return new at({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Hr.BlurDirectionX=new ee(1,0);Hr.BlurDirectionY=new ee(0,1);var aa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wl=class extends Nt{constructor(){super(),this.uniforms=Tn.clone(aa.uniforms),this.material=new Fs({name:aa.name,uniforms:this.uniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader}),this._fsQuad=new Fn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Vo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ri=1080,si=1920,et={dark:{base:"#151416",floor:"#1d1c1e",wall:"#2a292b",self:.1,fogNear:3600,fogFar:14e3},light:{base:"#b4b3b0",floor:"#c6c5c2",wall:"#bcbbb8",self:.5,fogNear:5e3,fogFar:16e3},card:{base:"#000000",floor:"#000000",wall:"#000000",self:0,fogNear:2e4,fogFar:4e4},floorRough:.9,floorSpec:.22,env:.9,envMetal:1,hemiSky:"#e9e6e7",hemiGround:"#4a4849",bloom:.34,bloomRadius:.5,bloomAt:.92,vignette:.3,grain:0,exposure:1,aperture:22e-6,maxBlur:.012,blurAt:.012,blurN:8,shutter:.45,mirrorLod:5.6},ln=null,ii,ca,ha,$l,oa=()=>$l.uniforms,dt,Xt,u0,$h,ua,d0,f0,p0,Wr,Zl,Jl,Gr,la,Nn,Zh,Jh=new Map,m0=new Set,ni=null,D4={uniforms:{tDiffuse:{value:null},vig:{value:.3},grain:{value:0},seed:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float vig; uniform float grain; uniform float seed; varying vec2 vUv;
    float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // a GENTLE vignette (centre \xF7 corners 1.7\u20133.3 in the references): wide, never to black
      vec2 q = (vUv - 0.5) * vec2(0.92, 1.0);
      float v = 1.0 - vig * smoothstep(0.30, 1.0, length(q) * 1.45);
      vec3 col = c.rgb * v;
      if (grain > 0.0) col += (hash(vUv * vec2(1080.0, 1920.0) + seed * 17.0) - 0.5) * grain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`},L4=()=>new at({name:"WorldFloorPool",transparent:!0,depthWrite:!1,uniforms:{tRefl:{value:null},res:{value:new ee(ri,si)},strength:{value:.08},fadeC:{value:new ee},fadeR:{value:2600},eye:{value:new P},lod:{value:et.mirrorLod}},vertexShader:"varying vec3 vWorld; void main() { vWorld = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0); }",fragmentShader:`
    uniform sampler2D tRefl; uniform vec2 res; uniform float strength; uniform vec2 fadeC; uniform float fadeR; uniform vec3 eye; uniform float lod; varying vec3 vWorld;
    void main() {
      vec2 uv = gl_FragCoord.xy / res;
      float b = 26.0 / res.y;
      vec4 s = textureLod(tRefl, uv, lod) * 0.4;
      s += (textureLod(tRefl, uv + vec2(b, 0.0), lod) + textureLod(tRefl, uv - vec2(b, 0.0), lod)
          + textureLod(tRefl, uv + vec2(0.0, b * 1.5), lod) + textureLod(tRefl, uv - vec2(0.0, b * 1.5), lod)) * 0.15;
      vec3 v = normalize(eye - vWorld);
      float fres = mix(0.45, 1.0, pow(1.0 - clamp(v.y, 0.0, 1.0), 2.0));
      float a = strength * fres * (1.0 - smoothstep(0.35, 1.0, length(vWorld.xz - fadeC) / fadeR));
      gl_FragColor = vec4(s.rgb * a, 0.0);
    }`,blending:Ro,blendEquation:Cn,blendSrc:Gs,blendDst:Gs}),Xl=n=>{let e=new ks(16777215,0,0,.6,.7,0);return e.castShadow=n,n&&(e.shadow.mapSize.set(2048,2048),e.shadow.bias=-6e-4,e.shadow.normalBias=1.2,e.shadow.radius=9,e.shadow.blurSamples=16,e.shadow.camera.near=200,e.shadow.camera.far=9e3),dt.add(e,e.target),e},U4=()=>{let n=document.createElement("canvas");ln=new Ur({canvas:n,antialias:!1,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),ln.setPixelRatio(1),ln.setSize(ri,si,!1),ln.outputColorSpace=At,ln.toneMapping=qr,ln.toneMappingExposure=et.exposure,ln.shadowMap.enabled=!0,ln.shadowMap.type=Gi,ln.localClippingEnabled=!0,ke.fog_fragment=`#ifdef USE_FOG
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif`;let e=new Mi(ln);u0=e.fromScene(new zr,.04).texture,e.dispose(),dt=new Jn,dt.background=new be(et.dark.base),dt.fog=new Ni(new be(et.dark.base),et.dark.fogNear,et.dark.fogFar),Xt=new yt(45,ri/si,20,4e4),$h=new ki(new be(et.hemiSky),new be(et.hemiGround),.55),dt.add($h),ua=Xl(!0),d0=Xl(!1),f0=Xl(!1),p0=Xl(!1),Wr=new Vi(16777215,0,0,0),dt.add(Wr),Zl=new Sn({color:new be(et.dark.floor),roughness:et.floorRough,metalness:0,envMapIntensity:0,specularIntensity:et.floorSpec}),Gr=new Ye(new sn(6e4,6e4),Zl),Gr.rotation.x=-Math.PI/2,Gr.receiveShadow=!0,Gr.userData.isFloor=!0,Jl=new Gt({color:new be(et.dark.wall),roughness:1,metalness:0,envMapIntensity:0}),la=new Ye(new sn(6e4,16e3),Jl),la.position.set(0,8e3,ta),la.userData.isFloor=!0,Nn=new Ye(new sn(6e4,6e4),L4()),Nn.rotation.x=-Math.PI/2,Nn.position.set(0,.6,0),Nn.userData.isFloor=!0,Nn.renderOrder=1,dt.add(Gr,la,Nn),Zh=new xt(ri/2,si/2,{type:Mt,generateMipmaps:!0,minFilter:Dn}),ii=new Vl(ln,new xt(ri,si,{type:Mt,samples:4})),ii.setPixelRatio(1),ii.setSize(ri,si),ii.addPass(new Hl(dt,Xt)),$l=new Gl(dt,Xt,{focus:2e3,aperture:et.aperture,maxblur:et.maxBlur}),ii.addPass($l),ha=new Hr(new ee(ri/2,si/2),et.bloom,et.bloomRadius,et.bloomAt),ii.addPass(ha),ca=new Vr(D4),ii.addPass(ca),ii.addPass(new Wl)},F4=n=>{let e=Jh.get(n);return e||(e=on[n].build(),Df(e.group),e.group.traverse(t=>{let i=t;if(i.isMesh)for(let r of Array.isArray(i.material)?i.material:[i.material])r.isMeshStandardMaterial&&(r.userData.envBase===void 0&&(r.userData.envBase=r.envMapIntensity),r.envMap||(r.envMap=u0,r.needsUpdate=!0),m0.add(r))}),dt.add(e.group),Jh.set(n,e)),e},N4=new P,Yl=(n,e)=>{if(!e){n.intensity=0;return}n.position.set(...e.pos),n.target.position.set(...e.at),n.target.updateMatrixWorld(),n.intensity=e.i,n.color.set(e.color??"#ffffff"),n.angle=e.angle??.6,n.penumbra=e.soft??.7},O4=n=>{let e=et[n];dt.background.set(e.base);let t=dt.fog;t.color.set(e.base),t.near=e.fogNear,t.far=e.fogFar,Zl.color.set(e.floor),Jl.color.set(e.wall),Zl.emissive.set(e.base).multiplyScalar(e.self),Jl.emissive.set(e.base).multiplyScalar(e.self),Gr.visible=la.visible=Nn.visible=n!=="card"},B4=(n,e)=>{$h.intensity=n.amb??(e==="card"?0:.2),Yl(ua,n.key),Yl(d0,n.rim),Yl(f0,n.aux),Yl(p0,n.back),n.accent?(Wr.position.set(...n.accent.pos),Wr.color.set(n.accent.color),Wr.intensity=n.accent.i):Wr.intensity=0;let t=Nn.material.uniforms;t.fadeC.value.set(n.focus?.[0]??0,n.focus?.[1]??0),t.fadeR.value=n.reach??2600,t.strength.value=e==="card"?0:n.reflect??.08;let i=n.env??1;for(let r of m0)r.envMapIntensity=r.userData.envBase*(r.metalness>.5?et.envMetal:et.env)*i},z4=new tt().set(1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1),k4=[new kt(new P(0,-1,0),.5)],V4=n=>{let e=Nn.material.uniforms;if(e.strength.value<=.001||!Nn.visible)return;let t=[];dt.traverse(a=>{a.userData.isFloor&&a.visible&&(t.push(a),a.visible=!1)});let i=ua.castShadow;ua.castShadow=!1;let r=dt.background;dt.background=null,dt.matrixAutoUpdate=!1,dt.matrix.copy(z4),dt.updateMatrixWorld(!0);let s=n.clippingPlanes;n.clippingPlanes=k4,n.setRenderTarget(Zh),n.setClearColor(0,1),n.clear(!0,!0,!0),n.render(dt,Xt),n.setRenderTarget(null),n.clippingPlanes=s,dt.matrix.identity(),dt.matrixAutoUpdate=!0,dt.updateMatrixWorld(!0),dt.background=r,ua.castShadow=i;for(let a of t)a.visible=!0;e.tRefl.value=Zh.texture,e.eye.value.copy(Xt.position)},H4=n=>{let e=Ia(kh,n);Xt.position.set(...e.pos),Xt.up.set(0,1,0),Xt.lookAt(N4.set(...e.look)),e.roll&&Xt.rotateZ(e.roll*Math.PI/180),Xt.fov=e.fov,Xt.updateProjectionMatrix(),Xt.updateMatrixWorld(!0);let t=Ai(e.focus,e.pos),i=Ai(e.look,e.pos),r=Math.max(1,er(i));oa().focus.value=Math.max(50,(t[0]*i[0]+t[1]*i[1]+t[2]*i[2])/r)},Yh={ms:0,samples:1,place:""},x0=(n,e)=>{let t=performance.now();ln||U4();let i=ln;ni||(ni=document.createElement("canvas"),ni.width=ri,ni.height=si,ni.dataset.world="1",ni.style.cssText="position:absolute;left:0;top:0;width:1080px;height:1920px;display:block;background:#000"),ni.parentElement!==n&&n.appendChild(ni);let r=Vh(e);for(let[u,f]of Jh)u!==r&&(f.group.visible=!1);let s=on[r],a=F4(r);a.group.visible=!0;let o=s.stage??"dark";O4(o),B4(s.lights(e),o),Yh.place=s.id;let l=window.__world??{};ha.strength=l.bloom??et.bloom,ha.radius=l.bloomRadius??et.bloomRadius,ha.threshold=l.bloomAt??et.bloomAt,ca.uniforms.vig.value=o==="card"?0:l.vignette??et.vignette,ca.uniforms.grain.value=l.grain??et.grain,ca.uniforms.seed.value=e%97+1,$l.enabled=!l.noDof&&o!=="card",oa().aperture.value=l.aperture??et.aperture,oa().maxblur.value=l.maxBlur??et.maxBlur,oa().nearClip.value=Xt.near,oa().farClip.value=Xt.far,i.toneMappingExposure=l.exposure??et.exposure;let h=!l.noBlur&&(Nu(kh,e)>et.blurAt||!!s.blur?.(e))?et.blurN:1,d=ni.getContext("2d");for(let u=0;u<h;u++){let f=h===1?e:e+((u+.5)/h-.5)*et.shutter;Vh(f)!==r&&(f=e),a.update(f),H4(f),dt.updateMatrixWorld(!0),V4(i),i.shadowMap.needsUpdate=!0,ii.render(),d.globalAlpha=1/(u+1),d.drawImage(i.domElement,0,0,ri,si)}d.globalAlpha=1,Yh.ms=performance.now()-t,Yh.samples=h};var g0={};var Qh=[],G4=0;var E0=n=>{G4=n,Qh=[]};var W4="x",X4=0,w0=n=>{W4=n.replace(/[^a-z0-9]+/gi,"-"),X4=0};var T0=['500 40px "Archivo"','600 40px "Archivo"','700 40px "Archivo"','800 40px "Archivo"','italic 300 40px "Archivo"'],Kl=!1,Y4=()=>{if(Kl)return!0;try{Kl=T0.every(n=>document.fonts.check(n))}catch{Kl=!1}return Kl},_0=new Map,$4=n=>{let e=_0.get(n);return e||(e=new Image,e.src=n,_0.set(n,e)),e};var q0=n=>Promise.all(n.map(e=>$4(e).decode().catch(()=>{}))),A0=()=>Promise.all(T0.map(n=>document.fonts.load(n))).then(()=>{Y4()});ke.fog_fragment=`#ifdef USE_FOG
  float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor * 0.45 );
  gl_FragColor *= 1.0 - 0.82 * fogFactor;
#endif`;var Yt=null,Ql=0,fa=0,jh=null,C0=new St,cn=new Tr(16777215,2.6),ec=new Tr(13226722,1.4),R0=new ki(12897496,460810,.55),tc=new vt;C0.add(cn,ec,R0,tc);cn.target=tc;ec.target=tc;cn.castShadow=!0;cn.shadow.mapSize.set(2048,2048);cn.shadow.bias=-3e-4;cn.shadow.radius=12;cn.shadow.blurSamples=20;cn.shadow.normalBias=.8;var Z4=new P(.75,.45,-.55).normalize(),J4={key:3.8,rim:.7,fill:.3,env:.35,envMetal:1,dir:[-.5,.75,.43],exposure:1,pcf:!0},K4=()=>({...J4,...window.__g3light??{}}),v0=new P,Q4=()=>{if(Yt)return Yt;let n=document.createElement("canvas");Yt=new Ur({canvas:n,antialias:!0,alpha:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),Yt.setPixelRatio(1),Yt.outputColorSpace=At,Yt.toneMapping=Ar,Yt.toneMappingExposure=1,Yt.localClippingEnabled=!0,Yt.shadowMap.enabled=!0,Yt.shadowMap.type=Gi,Yt.setClearColor(0,0);let e=new Mi(Yt);return jh=e.fromScene(new zr,.04).texture,e.dispose(),Yt},j4=(n,e)=>{n<=Ql&&e<=fa||(Ql=Math.max(Ql,Math.ceil(n/256)*256),fa=Math.max(fa,Math.ceil(e/256)*256),Yt.setSize(Ql,fa,!1))},b0=new Map,ai=new yt,Ki=new en,y0=new en,jl=new P,e5=new P,t5=(n,e)=>{let i=e.D+8e3,r=20/e.D,s=(n.x-e.x)*r,a=(n.x+n.w-e.x)*r,o=(e.y-n.y)*r,l=(e.y-n.y-n.h)*r;ai.position.set(e.x,-e.y,e.D),ai.quaternion.identity(),ai.updateMatrixWorld(!0),ai.projectionMatrix.makePerspective(s,a,o,l,20,i),ai.projectionMatrixInverse.copy(ai.projectionMatrix).invert()},n5=n=>(Ki.makeEmpty(),n.traverse(e=>{if(e.userData.noBounds)return;let t=e.parent;for(;t;){if(t.userData.noBounds)return;t=t.parent}let i=e;!i.isMesh||!i.visible||(i.geometry.boundingBox||i.geometry.computeBoundingBox(),y0.copy(i.geometry.boundingBox).applyMatrix4(i.matrixWorld),Ki.union(y0))}),Ki),I0=()=>{if(!Qh.length)return;let n=Q4();for(let e of Qh)try{s5(n,e)}catch(t){console.error(`[v34 3d] view ${e.id} failed:`,t)}n.setScissorTest(!1)},M0={w:1,h:1},da=new xt(64,64,{samples:4,type:Mt}),S0=new tt,Kh=new kt,i5=new P,r5=(n,e,t,i,r)=>{let s=t.getWorldPosition(i5).y,a=Math.max(64,Math.round(i/2)),o=Math.max(64,Math.round(r/2));(da.width!==a||da.height!==o)&&da.setSize(a,o);let l=[];e.traverse(d=>{d.userData.isFloor&&d.visible&&l.push(d)});for(let d of l)d.visible=!1;S0.set(1,0,0,0,0,-1,0,2*s,0,0,1,0,0,0,0,1),e.matrixAutoUpdate=!1,e.matrix.copy(S0),e.updateMatrixWorld(!0),Kh.normal.set(0,-1,0),Kh.constant=s+.5;let c=n.clippingPlanes;n.clippingPlanes=[Kh],n.setRenderTarget(da),n.clear(!0,!0,!0),n.render(e,ai),n.setRenderTarget(null),n.clippingPlanes=c,e.matrix.identity(),e.matrixAutoUpdate=!0,e.updateMatrixWorld(!0);for(let d of l)d.visible=!0;let h=t.material.uniforms;h.tRefl.value=da.texture,h.res.value.set(i,r)},s5=(n,e)=>{let t=document.querySelector(`canvas[data-g3="${e.id}"]`);if(!t)return;let i=t.getBoundingClientRect(),r=document.getElementById("root")?.getBoundingClientRect(),s=r&&r.width>0?1080/r.width:1,a=i.width*s/Math.max(1,e.rect.w),o=g0[e.id],l=o!==void 0&&a>=o-.3&&a<=o+.1?o:o!==void 0?Math.ceil((a-.05)/.25-1e-9)*.25:Math.ceil(a*20-1e-6)/20,c=Math.max(1,Math.min(2.25,l)),h=Math.max(1,Math.round(e.rect.w*c)),d=Math.max(1,Math.round(e.rect.h*c)),u=window;if(u.__v34dbg?.push({id:e.id,rw:e.rect.w,bxx:i.x,bxy:i.y,bxw:i.width,bxh:i.height,hostw:r?.width,sRaw:a,s:c,pw:h,ph:d,eye:e.eye,params:JSON.stringify(e.params),light:e.light}),u.__v34measureOnly)return;(t.width!==h||t.height!==d)&&(t.width=h,t.height=d),j4(h,d),M0.w=h,M0.h=d;let f=b0.get(e.id);if(!f){let A=new Jn;A.environment=jh;let D=e.make();A.add(D.root),D.root.traverse(M=>{let v=M.material;for(let R of Array.isArray(v)?v:v?[v]:[])!R.isMeshStandardMaterial||R.userData.envBase!==void 0||(R.userData.envBase=R.envMapIntensity,R.envMap||(R.envMap=jh,R.needsUpdate=!0))}),D.fog&&(A.fog=new Ni(new be(D.fog.color),D.fog.near,D.fog.far)),f={scene:A,model:D},b0.set(e.id,f)}f.model.update?.(e.params);let x=K4();f.model.root.traverse(A=>{let D=A.material;for(let M of Array.isArray(D)?D:D?[D]:[])M.userData?.envBase!==void 0&&(M.envMapIntensity=M.userData.envBase*(M.metalness>.5?x.envMetal:x.env))}),n.toneMappingExposure=x.exposure;let g=x.pcf?Gi:fn;n.shadowMap.type!==g&&(n.shadowMap.type=g,n.shadowMap.needsUpdate=!0),window.__g3before?.(e.id,f.model.root),f.scene.add(C0),f.model.root.updateMatrixWorld(!0),n5(f.model.root),Ki.isEmpty()&&Ki.setFromCenterAndSize(new P,new P(10,10,10)),Ki.getCenter(jl);let m=Math.max(10,Ki.getSize(e5).length()/2),p=f.model.rig??{},S=p.dir?v0.set(...p.dir).normalize():v0.set(...x.dir).normalize();tc.position.copy(jl),cn.position.copy(jl).addScaledVector(S,m*3),ec.position.copy(jl).addScaledVector(Z4,m*3),cn.intensity=x.key*(p.key??1)*(e.light??1),ec.intensity=x.rim*(p.rim??1),R0.intensity=x.fill*(p.fill??1);let y=cn.shadow.camera;y.left=-m,y.right=m,y.top=m,y.bottom=-m,y.near=m*.5,y.far=m*6,y.updateProjectionMatrix(),cn.castShadow=f.model.shadows!==!1;let w=window.__v34flags;if(w&&(w.noShadow&&(cn.castShadow=!1),f.scene.traverse(A=>{A.userData.isMirror?A.visible=!w.noReflect:A.renderOrder===1.5?A.visible=!w.noBlob:A.renderOrder===2&&A.material instanceof Us&&(A.visible=!w.noCatcher)})),t5(e.rect,e.eye),!f.mirrors){let A=[];f.scene.traverse(D=>{D.userData.isMirror&&A.push(D)}),f.mirrors=A}for(let A of f.mirrors)A.visible&&A.material.uniforms.strength.value>.001&&r5(n,f.scene,A,h,d);n.setViewport(0,0,h,d),n.setScissor(0,0,h,d),n.setScissorTest(!0),n.clear(!0,!0,!0),n.render(f.scene,ai);let C=t.getContext("2d");C.clearRect(0,0,h,d);let q=f.model.blur??0;C.filter=q>0?`blur(${(q*c).toFixed(2)}px)`:"none",C.drawImage(n.domElement,0,fa-d,h,d,0,0,h,d),C.filter="none",window.__g3after?.(n,e.id,f.scene,ai,h,d,t,f.model.root)};var a5=[],D0=30,Yr="",o5=new Map(l0().map(n=>[n.id,n])),$r=n=>{let e=Math.max(0,Math.round(n*D0)),t=Array.from(document.querySelectorAll("[data-film-layer]")),i=`${e}|${t.length}`;if(i!==Yr){Yr=i,Eu(e),E0(e);for(let r of t){let s=r.dataset.filmLayer,a=o5.get(s);if(w0(s),s===Wh){try{x0(r,e)}catch(o){console.error("[world] frame",e,"failed:",o)}continue}Mu(!a||e>=a.from&&e<a.to?wa(c0,{id:s,f:e}):null,r)}I0()}};window.addEventListener("hf-seek",n=>$r(n.detail.time));window.__film={draw:n=>{Yr="",$r(n)},frame:()=>Math.round((window.__hfThreeTime??0)*D0)};var P0=()=>$r(window.__hfThreeTime??0);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P0):P0();var Xr=window.__hf??(window.__hf={});Xr.buildReady??(Xr.buildReady={});Xr.buildReady["film-fonts"]=Promise.all([A0(),document.fonts.load('italic 300 60px "Archivo"'),document.fonts.load('800 60px "Archivo"'),document.fonts.load('700 40px "Archivo"'),document.fonts.load('600 40px "Archivo"'),document.fonts.load('500 40px "Archivo"')]).then(()=>{Yr="",$r(window.__hfThreeTime??0)});Xr.buildReady["film-page-photos"]=q0(a5).then(()=>{Yr="",$r(window.__hfThreeTime??0)});if(Cu){let n=new Image;n.src=`assets/${Ru}`,Xr.buildReady["film-photo"]=n.decode().catch(()=>{}).then(()=>{Yr="",$r(window.__hfThreeTime??0)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
