"use strict";(()=>{var Fl,yt,If,G3,_s,Af,Df,Lf,zu,Rl,Wo,Uf,Vu,ku,Hu,W3,Dl={},Ll=[],X3=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Nl=Array.isArray;function zi(n,e){for(var t in e)n[t]=e[t];return n}function Gu(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Ol(n,e,t){var i,s,r,o={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?Fl.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)o[r]===void 0&&(o[r]=n.defaultProps[r]);return Pl(n,o,i,s,null)}function Pl(n,e,t,i,s){var r={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++If,__i:-1,__u:0};return s==null&&yt.vnode!=null&&yt.vnode(r),r}function ki(n){return n.children}function Il(n,e){this.props=n,this.context=e}function Ys(n,e){if(e==null)return n.__?Ys(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Ys(n):null}function Y3(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],s=[],r=zi({},e);r.__v=e.__v+1,yt.vnode&&yt.vnode(r),Wu(n.__P,r,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??Ys(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,zf(i,r,s),e.__e=e.__=null,r.__e!=t&&Ff(r)}}function Ff(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Ff(n)}function Cf(n){(!n.__d&&(n.__d=!0)&&_s.push(n)&&!Ul.__r++||Af!=yt.debounceRendering)&&((Af=yt.debounceRendering)||Df)(Ul)}function Ul(){try{for(var n,e=1;_s.length;)_s.length>e&&_s.sort(Lf),n=_s.shift(),e=_s.length,Y3(n)}finally{_s.length=Ul.__r=0}}function Nf(n,e,t,i,s,r,o,a,l,c,h){var d,u,f,x,g,m,p=i&&i.__k||Ll,v=e.length;for(l=$3(t,e,p,l,v),d=0;d<v;d++)(f=t.__k[d])!=null&&(u=f.__i!=-1&&p[f.__i]||Dl,f.__i=d,m=Wu(n,f,u,s,r,o,a,l,c,h),x=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&Xu(u.ref,null,f),h.push(f.ref,f.__c||x,f)),g==null&&x!=null&&(g=x),4&f.__u?(l=Of(f,l,n),u.__e&&(u.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:x&&(l=x.nextSibling),f.__u&=-7);return t.__e=g,l}function $3(n,e,t,i,s){var r,o,a,l,c,h=t.length,d=h,u=0;for(n.__k=new Array(s),r=0;r<s;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=n.__k[r]=Pl(null,o,null,null,null):Nl(o)?o=n.__k[r]=Pl(ki,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=n.__k[r]=Pl(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,l=r+u,o.__=n,o.__b=n.__b+1,a=null,(c=o.__i=Z3(o,t,l,d))!=-1&&(d--,(a=t[c])&&(a.__u|=2)),a==null||a.__v==null?(c==-1&&(s>h?u--:s<h&&u++),typeof o.type!="function"&&(o.__u|=4)):c!=l&&(c==l-1?u--:c==l+1?u++:(c>l?u--:u++,o.__u|=4))):n.__k[r]=null;if(d)for(r=0;r<h;r++)(a=t[r])!=null&&(2&a.__u)==0&&(a.__e==i&&(i=Ys(a)),Hf(a,a));return i}function Of(n,e,t){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=Of(i[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=Ys(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Z3(n,e,t,i){var s,r,o,a=n.key,l=n.type,c=e[t],h=c!=null&&(2&c.__u)==0;if(c===null&&a==null||h&&a==c.key&&l==c.type)return t;if(i>(h?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((c=e[o=s>=0?s--:r++])!=null&&(2&c.__u)==0&&a==c.key&&l==c.type)return o}return-1}function Rf(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||X3.test(e)?t:t+"px"}function Cl(n,e,t,i,s){var r,o;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Rf(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Rf(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Uf,"$1")),o=e.toLowerCase(),e=o in n||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?i?t[Wo]=i[Wo]:(t[Wo]=Vu,n.addEventListener(e,r?Hu:ku,r)):n.removeEventListener(e,r?Hu:ku,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Pf(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Rl]==null)e[Rl]=Vu++;else if(e[Rl]<t[Wo])return;return t(yt.event?yt.event(e):e)}}}function Wu(n,e,t,i,s,r,o,a,l,c){var h,d,u,f,x,g,m,p,v,_,S,C,E,T,P,M,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[a=e.__e=t.__e]),(h=yt.__b)&&h(e);e:if(typeof b=="function"){d=o.length;try{if(v=e.props,_=b.prototype&&b.prototype.render,S=(h=b.contextType)&&i[h.__c],C=h?S?S.props.value:h.__:i,t.__c?p=(u=e.__c=t.__c).__=u.__E:(_?e.__c=u=new b(v,C):(e.__c=u=new Il(v,C),u.constructor=b,u.render=J3),S&&S.sub(u),u.state||(u.state={}),u.__n=i,f=u.__d=!0,u.__h=[],u._sb=[]),_&&u.__s==null&&(u.__s=u.state),_&&b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=zi({},u.__s)),zi(u.__s,b.getDerivedStateFromProps(v,u.__s))),x=u.props,g=u.state,u.__v=e,f)_&&b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),_&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(_&&b.getDerivedStateFromProps==null&&v!==x&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,C),e.__v==t.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,C)===!1){e.__v!=t.__v&&(u.props=v,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(R){R&&(R.__=e)}),Ll.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&o.push(u),a=Ys(t);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,C),_&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(x,g,m)})}if(u.context=C,u.props=v,u.__P=n,u.__e=!1,E=yt.__r,T=0,_)u.state=u.__s,u.__d=!1,E&&E(e),h=u.render(u.props,u.state,u.context),Ll.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,E&&E(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++T<25);u.state=u.__s,u.getChildContext!=null&&(i=zi(zi({},i),u.getChildContext())),_&&!f&&u.getSnapshotBeforeUpdate!=null&&(m=u.getSnapshotBeforeUpdate(x,g)),P=h!=null&&h.type===ki&&h.key==null?kf(h.props.children):h,a=Nf(n,Nl(P)?P:[P],e,t,i,s,r,o,a,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&o.push(u),p&&(u.__E=u.__=null)}catch(R){if(o.length=d,e.__v=null,l||r!=null){if(R.then){for(e.__u|=l?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;r!=null&&(r[r.indexOf(a)]=null),e.__e=a}else if(r!=null)for(M=r.length;M--;)Gu(r[M])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),R.then||Bf(e),yt.__e(R,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=K3(t.__e,e,t,i,s,r,o,l,c);return(h=yt.diffed)&&h(e),128&e.__u?void 0:a}function Bf(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Bf))}function zf(n,e,t){for(var i=0;i<t.length;i++)Xu(t[i],t[++i],t[++i]);yt.__c&&yt.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(r){r.call(s)})}catch(r){yt.__e(r,s.__v)}})}function kf(n){return typeof n!="object"||n==null||n.__b>0?n:Nl(n)?n.map(kf):n.constructor!==void 0?null:zi({},n)}function K3(n,e,t,i,s,r,o,a,l){var c,h,d,u,f,x,g,m=t.props||Dl,p=e.props,v=e.type;if(v=="svg"?s="http://www.w3.org/2000/svg":v=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((f=r[c])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){n=f,r[c]=null;break}}if(n==null){if(v==null)return document.createTextNode(p);n=document.createElementNS(s,v,p.is&&p),a&&(yt.__m&&yt.__m(e,r),a=!1),r=null}if(v==null)m===p||a&&n.data==p||(n.data=p);else{if(r=v=="textarea"&&p.defaultValue!=null?null:r&&Fl.call(n.childNodes),!a&&r!=null)for(m={},c=0;c<n.attributes.length;c++)m[(f=n.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?d=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||Cl(n,c,null,f,s);for(c in p)f=p[c],c=="children"?u=f:c=="dangerouslySetInnerHTML"?h=f:c=="value"?x=f:c=="checked"?g=f:a&&typeof f!="function"||m[c]===f||Cl(n,c,f,m[c],s);if(h)a||d&&(h.__html==d.__html||h.__html==n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(d&&(n.innerHTML=""),Nf(e.type=="template"?n.content:n,Nl(u)?u:[u],e,t,i,v=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:t.__k&&Ys(t,0),a,l),r!=null)for(c=r.length;c--;)Gu(r[c]);a&&v!="textarea"||(c="value",v=="progress"&&x==null?n.removeAttribute("value"):x!=null&&(x!==n[c]||v=="progress"&&!x||v=="option"&&x!=m[c])&&Cl(n,c,x,m[c],s),c="checked",g!=null&&g!=n[c]&&Cl(n,c,g,m[c],s))}return n}function Xu(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){yt.__e(s,t)}}function Hf(n,e,t){var i,s;if(yt.unmount&&yt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||Xu(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){yt.__e(r,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&Hf(i[s],e,t||typeof n.type!="function");t||Gu(n.__e),n.__c=n.__=n.__e=void 0}function J3(n,e,t){return this.constructor(n,t)}function Vf(n,e,t){var i,s,r,o;e==document&&(e=document.documentElement),yt.__&&yt.__(n,e),s=(i=typeof t=="function")?null:t&&t.__k||e.__k,r=[],o=[],Wu(e,n=(!i&&t||e).__k=Ol(ki,null,[n]),s||Dl,Dl,e.namespaceURI,!i&&t?[t]:s?null:e.firstChild?Fl.call(e.childNodes):null,r,!i&&t?t:s?s.__e:e.firstChild,i,o),zf(r,n,o),n.props.children=null}Fl=Ll.slice,yt={__e:function(n,e,t,i){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},If=0,G3=function(n){return n!=null&&n.constructor===void 0},Il.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=zi({},this.state),typeof n=="function"&&(n=n(zi({},t),this.props)),n&&zi(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Cf(this))},Il.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Cf(this))},Il.prototype.render=ki,_s=[],Df=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Lf=function(n,e){return n.__v.__b-e.__v.__b},Ul.__r=0,zu=Math.random().toString(8),Rl="__d"+zu,Wo="__a"+zu,Uf=/(PointerCapture)$|Capture$/i,Vu=0,ku=Pf(!1),Hu=Pf(!0),W3=0;var Q3=0,j3=0,Wf=n=>{Q3=n,j3=0};var e2=4,t2=.001,n2=1e-7,i2=10,kl=11,Bl=1/(kl-1),Xf=(n,e)=>1-3*e+3*n,Yf=(n,e)=>3*e-6*n,$f=n=>3*n,zl=(n,e,t)=>((Xf(e,t)*n+Yf(e,t))*n+$f(e))*n,Gf=(n,e,t)=>3*Xf(e,t)*n*n+2*Yf(e,t)*n+$f(e),s2=(n,e,t,i)=>{if(n===e&&t===i)return o=>o;let s=new Float32Array(kl);for(let o=0;o<kl;++o)s[o]=zl(o*Bl,n,t);let r=o=>{let a=0,l=1,c=kl-1;for(;l!==c&&s[l]<=o;++l)a+=Bl;--l;let h=(o-s[l])/(s[l+1]-s[l]),d=a+h*Bl,u=Gf(d,n,t);if(u>=t2){let v=d;for(let _=0;_<e2;++_){let S=Gf(v,n,t);if(S===0)return v;v-=(zl(v,n,t)-o)/S}return v}if(u===0)return d;let f=a,x=a+Bl,g=0,m=0,p=0;do g=f+(x-f)/2,m=zl(g,n,t)-o,m>0?x=g:f=g;while(Math.abs(m)>n2&&++p<i2);return g};return o=>o===0||o===1?o:zl(r(o),e,i)},On={bezier:s2,linear:n=>n,in:n=>n,out:n=>e=>1-n(1-e),inOut:n=>e=>e<.5?n(e*2)/2:1-n((1-e)*2)/2,poly:n=>e=>Math.pow(e,n),cubic:n=>n*n*n,sin:n=>1-Math.cos(n*Math.PI/2)},Zf=(n,e,t,i={})=>{let{easing:s=m=>m,extrapolateLeft:r="extend",extrapolateRight:o="extend"}=i,a=1;for(;a<e.length-1&&!(e[a]>=n);a++);let l=a-1,c=a,h=e[l],d=e[c],u=t[l],f=t[c],x=n;if(x<h){if(r==="clamp")x=h;else if(r==="identity")return x}if(x>d){if(o==="clamp")x=d;else if(o==="identity")return x}if(h===d)return u;let g=(x-h)/(d-h);return g=s(g),u+(f-u)*g};var li=[{scene:"hook",a:0,b:3.58,text:"An American company bought Afterpay for $29 billion.",w:[["An",0],["American",.16],["company",.54],["bought",1.04],["Afterpay",1.44],["for",1.98],["$29",2.24],["billion,",3.315]]},{scene:"hook",a:4.478,b:8.44,text:"But when the deal closed, its own filing put the price at 13.8.",w:[["but",4.478],["when",4.6],["the",4.74],["deal",4.86],["closed,",5.02],["its",5.92],["own",6.06],["filing",6.34],["put",6.72],["the",6.94],["price",7.1],["at",7.34],["13.8.",7.58]]},{scene:"hook",a:8.44,b:10.28,text:"So which number is right?",w:[["So",8.44],["which",9.12],["number",9.58],["is",9.78],["right?",10.04]]},{scene:"explain",a:10.54,b:11.16,text:"Let us explain.",w:[["Let",10.54],["us",10.64],["explain.",10.78]]},{scene:"deal",a:11.88,b:16.86,text:"In August 2021, Jack Dorsey's company, Square, agreed to buy Afterpay.",w:[["In",11.88],["August",11.98],["2021,",12.3],["Jack",13.63],["Dorsey's",13.84],["company",14.36],["Square",14.68],["agreed",15.518],["to",15.8],["buy",16.02],["Afterpay.",16.26]]},{scene:"deal",a:17.058,b:18.54,text:"But Square didn't pay in cash.",w:[["But",17.058],["Square",17.16],["didn't",17.46],["pay",17.86],["in",18.06],["cash.",18.2]]},{scene:"deal",a:18.92,b:20.4,text:"It paid in its own shares.",w:[["It",18.92],["paid",19.02],["in",19.32],["its",19.56],["own",19.7],["shares.",19.96]]},{scene:"deal",a:20.8,b:25.06,text:"For every Afterpay share, you got 0.375 of a Square share.",w:[["For",20.8],["every",20.88],["Afterpay",21.26],["share,",21.82],["you",22.413],["got",22.56],[".375",22.902],["of",23.6],["a",24.38],["Square",24.52],["share.",24.76]]},{scene:"price",a:25.275,b:28.3,text:"At the time, each Square share was worth $247.",w:[["At",25.275],["the",25.36],["time,",25.5],["each",26.104],["Square",26.28],["share",26.62],["was",26.92],["worth",27.14],["$247.",27.538]]},{scene:"price",a:29.315,b:31.86,text:"Multiply it out, and you get 29 billion.",w:[["Multiply",29.315],["it",29.74],["out,",29.84],["and",30.39],["you",30.46],["get",30.62],["$29",31.092],["billion.",31.5]]},{scene:"catch",a:32.06,b:32.76,text:"But here's the catch.",w:[["But",32.06],["here's",32.08],["the",32.36],["catch.",32.48]]},{scene:"close",a:33.61,b:35.68,text:"The deal took six months to close.",w:[["The",33.61],["deal",33.68],["took",33.98],["six",34.26],["months",34.7],["to",35.08],["close.",35.32]]},{scene:"close",a:35.98,b:40.6,text:"By then, Square had renamed itself Block, and its share price had roughly halved.",w:[["By",35.98],["then,",36.04],["Square",36.62],["had",36.9],["renamed",37.12],["itself",37.5],["Block,",38.142],["and",38.669],["its",38.74],["share",38.92],["price",39.16],["had",39.48],["roughly",39.68],["halved.",40.04]]},{scene:"close",a:40.76,b:43.02,text:"Same number of shares. About half the price.",w:[["Same",40.76],["number",40.94],["of",41.16],["shares,",41.38],["about",41.989],["half",42.2],["the",42.56],["price.",42.76]]},{scene:"close",a:43.33,b:48.98,text:"So when the deal closed, Block told the SEC what those shares were worth: 13.8 billion.",w:[["So",43.33],["when",43.44],["the",43.58],["deal",43.7],["closed,",43.86],["Block",44.76],["told",44.98],["the",45.22],["SEC",45.4],["what",45.8],["those",46.315],["shares",46.5],["were",46.74],["worth,",46.98],["$13.8",47.58],["billion.",48.679]]},{scene:"fair",a:49.16,b:55.3,text:"To be fair, 29 billion was real on day one, and Afterpay's shareholders got the shares they were promised.",w:[["To",49.16],["be",49.24],["fair,",49.38],["$29",50.02],["billion",50.44],["was",50.82],["real",51.18],["on",51.56],["day",51.84],["one,",52.02],["and",52.662],["Afterpay",52.86],["shareholders",53.34],["got",53.78],["the",54.24],["shares",54.4],["they",54.62],["were",54.8],["promised.",54.96]]},{scene:"verdict",a:55.3,b:59.06,text:"But the price tag everyone remembers was never the price paid.",w:[["But",55.3],["the",55.64],["price",55.8],["tag",56.04],["everyone",56.28],["remembers",56.74],["was",57.26],["never",57.76],["the",58.16],["price",58.38],["paid.",58.66]]},{scene:"verdict",a:59.25,b:60.52,text:"Our rating: inflated.",w:[["Our",59.25],["rating?",59.4],["Inflated.",59.93]]},{scene:"verdict",a:60.74,b:62,text:"Send us who to audit next.",w:[["Send",60.74],["us",60.88],["who",61.04],["to",61.24],["audit",61.42],["next.",61.6]]}];var Kf={note:"037 \u2014 script v2 (2026-11-18). Lines the BRIEF had that fail verification: any caption matching a `bad` pattern means a take was read from the brief. Read with JSON.parse.",fixes:[{at:"hook c0",brief:"That's the number on every headline.",briefSpoken:"That's the number on every headline.",use:"(line dropped in v2)",why:"'Every' cannot be shown.",bad:"\\bevery headline\\b"},{at:"price c0",brief:"That day, one Square share was worth two hundred and forty-seven dollars.",briefSpoken:"That day, one Square share was worth two hundred and forty-seven dollars.",use:"At the time, each Square share was worth two hundred and forty-seven dollars.",why:"US$247.26 is the 30 Jul 2021 close; 1 Aug 2021 was a Sunday.",bad:"\\bthat day,? (one|each) square share\\b"},{at:"fair c0",brief:"and Afterpay's owners kept those shares.",briefSpoken:"and Afterpay's owners kept those shares.",use:"and Afterpay's shareholders got the shares they were promised.",why:"They received the shares; whether holders kept them is undocumented.",bad:"\\b(owners|shareholders) kept those shares\\b"}],guardrails:[{why:"$29B was accurate on announcement day: never imply Square, Block, Dorsey or the founders misled anyone (the brief).",bad:"\\b(lied|lying|misled|mislead\\w*|deceiv\\w*|cover(ed)?[- ]up|hid the|fake)\\b",example:"Square misled the market."},{why:"Never say founders or shareholders 'lost' $15B: they received Block shares whose value kept moving (the brief).",bad:"\\b(lost|losing|wiped out|robbed|cheated)\\b",example:"Shareholders lost fifteen billion."},{why:"No current Block share price anywhere (the brief).",bad:"\\b(today|now|currently)\\b[^.]*\\b(share|stock) price\\b|\\b(share|stock) price\\b[^.]*\\b(today|now|currently)\\b",example:"Today the share price is sixty dollars."},{why:"'Fraud' and 'scam' never appear (standing rule).",bad:"\\b(fraud|scam)\\w*\\b",example:"The deal was a scam."},{why:"The verdict rates the $29 billion figure as the price paid, not any person or company (the brief).",bad:"\\b(afterpay|square|block|dorsey|the founders?) (is|was|are|were) (inflated|overpriced|overvalued|dishonest)\\b",example:"Afterpay was overvalued."}]};var Yu=30;var t8=Kf.fixes,a2=n=>li.some(e=>n.test(e.text)),n8={ctaSpoken:a2(/audit next/i)},Jf=!1,Qf="afterpay_face.jpg";var i8=Math.round(0*Yu);var Vl=["hook","explain","deal","price","catch","close","fair","verdict"],Hl={hook:3,explain:1,deal:4,price:2,catch:1,close:4,fair:1,verdict:3};{let n={};for(let t of li)n[t.scene]=(n[t.scene]??0)+1;let e=Vl.filter(t=>(n[t]??0)!==Hl[t]).map(t=>`${t}: wired ${n[t]??0}, the film indexes ${Hl[t]}`);if(e.length)throw new Error(`037 CUE COUNT MISMATCH \u2014 the wired take does not match the film.
`+e.map(t=>"  \xB7 "+t).join(`
`))}var l2=.8,c2=Math.round(li[li.length-1].b*Yu),h2=Math.round(l2*Yu),Xo=c2+h2;var Ke=On.bezier(.5,0,.25,1),l8=On.bezier(.45,0,.25,1),c8=On.bezier(.45,.05,.35,1),Yo=On.bezier(.6,0,.4,1),Mt=On.bezier(.4,.12,0,1),$u=On.out(On.poly(4)),h8=On.inOut(On.sin),u8=On.bezier(.45,0,.25,1);var $s=On.in(On.cubic),Ae=n=>Math.max(0,Math.min(1,n)),Ot=(n,e,t,i=Ke)=>Zf(n,[e,t],[0,1],{extrapolateLeft:"clamp",extrapolateRight:"clamp",easing:i});var u2=0;function Hi(n,e,t,i,s,r){e||(e={});var o,a,l=e;if("ref"in l)for(a in l={},e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--u2,__i:-1,__u:0,__source:s,__self:r};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return yt.vnode&&yt.vnode(c),c}var d2={coin:.1,ding:.699,flick:.09,thud:.06,tick:.03,sub:.043,bloom:.107,ping:.743,whooshlong:.202,whooshsoft:.202,click:.232,data:.286,airwoosh:.072,chain:.947,lowwoosh:.283,swoosh:.065,pingshort:.85,chainshort:.7,datashort:.34,datamid:.31},f2=.94,b8=Object.fromEntries(Object.entries(d2).map(([n,e])=>[n,e*f2]));var jf={coin:24,ding:40,flick:16,thud:30,tick:8,sub:30,bloom:60,ping:108,whooshlong:32,whooshsoft:27,click:7,data:68,airwoosh:53,chain:90,lowwoosh:75,swoosh:40,pingshort:39,chainshort:32,datashort:29,datamid:48},ep={coin:0,ding:0,flick:0,thud:0,tick:0,sub:0,bloom:0,ping:0,whooshlong:8,whooshsoft:6,click:0,data:0,airwoosh:19,chain:0,lowwoosh:10,swoosh:10,pingshort:0,chainshort:4,datashort:0,datamid:0},Zu={airwoosh:21,bloom:3,chain:0,chainshort:4,click:0,coin:0,data:2,datamid:2,datashort:2,ding:0,flick:0,lowwoosh:13,ping:0,pingshort:0,sub:1,swoosh:12,thud:0,tick:0,whooshlong:13,whooshsoft:8},p2=new Set(["data","datamid","datashort","chain","chainshort","lowwoosh","airwoosh","swoosh","whooshlong","whooshsoft"]),Ku=n=>(e,t,i,s,r)=>{let o=Math.max(Math.round(n.at),Math.round(t-ep[e])),a=p2.has(e)&&i!==void 0?Math.min(Math.round(i),Math.round(n.end)):Math.round(n.end),l=Math.max(3,Math.min(jf[e],a-o));return{s:e,at:o,dur:l,fade:l<jf[e]?Math.min(10,Math.max(3,Math.round(l/3))):0,vol:s,why:r}},Ju=n=>(e,t,i,s,r)=>Ku(n)(e,t-(Zu[e]-ep[e]),i,s,r);var tp=(n,e,t)=>{let i=[],s=l=>{let c=n.find(h=>h.id===l);return{at:c.from,end:c.to}};for(let l of e)i.push(Ju(s(l.id))("airwoosh",l.mid,l.end,l.vol,`the camera moves (${l.id}: ${l.why})`));for(let l of t)i.push((l.kind==="move"?Ju:Ku)(s(l.id))(l.s,l.at,l.end,l.vol,l.why));let r=new Set(["swoosh","whooshlong","whooshsoft","airwoosh","lowwoosh"]),o=l=>l.at+Zu[l.s],a=i.filter(l=>!(l.why.startsWith("the camera moves")&&i.some(c=>c!==l&&r.has(c.s)&&!c.why.startsWith("the camera moves")&&Math.abs(o(c)-o(l))<=6)));return a.sort((l,c)=>l.at-c.at),{cues:a}};var Qu=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Zs=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],Mi=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],Dr=n=>Math.hypot(n[0],n[1],n[2]),$o=(n,e,t)=>n+(e-n)*t,m2=50,Lr=(n,e,t,i)=>{let s=e*Math.PI/180;return[n[0]+Math.sin(s)*t,i,n[2]+Math.cos(s)*t]},ed=(n,e)=>Lr(n.c,$o(n.a0,n.a1,e),$o(n.r0,n.r1??n.r0,e),$o(n.y0,n.y1??n.y0,e)),Zo=(n,e,t,i={})=>({at:n,dur:e,pos:ed(t,1),look:i.look??t.c,fov:i.fov,ease:i.ease??Ke,orbit:t,why:i.why??"orbit"}),St=(n,e,t,i,s={})=>({at:n,dur:e,pos:t,look:i,fov:s.fov,ease:s.ease??Mt,why:s.why??"dolly"}),Wl=(n,e,t,i,s={})=>({at:n,dur:e,pos:t,look:i,fov:s.fov,ease:s.ease??Yo,arc:s.bulge??[0,0,120],why:s.why??"crane",whoosh:.5}),vs=(n,e,t,i,s={})=>({at:n,dur:e,pos:t,look:i,fov:s.fov,ease:s.ease??Yo,arc:s.bulge,why:s.why??"travel",whoosh:s.vol??.6}),Gt=(n,e,t,i={})=>({at:n,dur:0,pos:e,look:t,fov:i.fov,roll:i.roll,cut:!0,dip:i.dip??0,why:i.why??"cut",focus:i.focus,still:i.still});var np=(n,e)=>{for(let t=1;t<e.length;t++){let i=e[t-1],s=e[t];if(s.at<i.at+i.dur-1e-6)throw new Error(`camera ${n}: key ${t} "${s.why??""}" (f${s.at}) starts before key ${t-1} "${i.why??""}" ends (f${i.at+i.dur}): camera keys never overlap`);if(!s.cut&&s.dur<1)throw new Error(`camera ${n}: key ${t} "${s.why??""}" has no duration (use cut())`)}return e},ju=7,x2=n=>[ju*(Math.sin(n*.0213+1.3)+.5*Math.sin(n*.0091+4.1)),ju*.6*(Math.sin(n*.0171+2.9)+.4*Math.sin(n*.0123+.4)),ju*1.2*Math.sin(n*.0137+5.2)],Gl=(n,e)=>{let t={pos:n[0].pos,look:n[0].look,fov:n[0].fov??m2,roll:n[0].roll??0,focus:n[0].focus??n[0].look},i=!!n[0].still;for(let r=1;r<n.length;r++){let o=n[r];if(e<o.at)break;let a={pos:o.pos,look:o.look,fov:o.fov??t.fov,roll:o.roll??0,focus:o.focus??o.look};if(i=!!o.still,o.cut||e>=o.at+o.dur){t=a;continue}let l=(o.ease??Mt)(Ae((e-o.at)/o.dur)),c=Mi(t.pos,o.pos,l);if(o.orbit){let h=ed(o.orbit,l),d=Ke(Ae(l/.34)),u=ed(o.orbit,0);c=Dr(Zs(u,t.pos))<2?h:Mi(Mi(t.pos,h,l),h,d)}if(o.arc){let h=Math.sin(Math.PI*l);c=Qu(c,[o.arc[0]*h,o.arc[1]*h,o.arc[2]*h])}t={pos:c,look:Mi(t.look,o.look,l),fov:$o(t.fov,a.fov,l),roll:$o(t.roll,a.roll,l),focus:Mi(t.focus,a.focus,l)};break}if(i)return t;let s=x2(e);return{pos:Qu(t.pos,s),look:Qu(t.look,[s[0]*.25,s[1]*.25,0]),fov:t.fov,roll:t.roll,focus:t.focus}};var ip=(n,e)=>{let t=Gl(n,e-.5),i=Gl(n,e+.5),s=Math.max(200,Dr(Zs(t.look,t.pos)));return(Dr(Zs(i.pos,t.pos))+Dr(Zs(i.look,t.look)))/s};var Rp=0,Hd=1,Pp=2;var Vd=1,dr=2,ti=3,Zi=0,on=1,qi=2,Rn=0,tr=1,ji=2,Gd=3,Wd=4,Hc=5,wi=100,Ip=101,Dp=102,Lp=103,Up=104,Fp=200,ka=201,Np=202,Op=203,mc=204,xc=205,Bp=206,zp=207,kp=208,Hp=209,Vp=210,Gp=211,Wp=212,Xp=213,Yp=214,Vc=0,Gc=1,Wc=2,nr=3,Xc=4,Yc=5,$c=6,Zc=7,Kc=0,$p=1,Zp=2,es=0,ro=1,Jc=2,Qc=3,jc=4,eh=5,th=6,oo=7;var Xd=300,fr=301,pr=302,nh=303,ih=304,Ha=306,gc=1e3,Si=1001,_c=1002,rn=1003,Kp=1004;var Va=1005;var kn=1006,sh=1007;var Ai=1008;var fi=1009,Yd=1010,$d=1011,ao=1012,rh=1013,Ds=1014,pi=1015,Ht=1016,oh=1017,ah=1018,lo=1020,Zd=35902,Kd=35899,Jd=1021,Qd=1022,ni=1023,Zr=1026,co=1027,lh=1028,ch=1029,hh=1030,uh=1031;var dh=1033,Ga=33776,Wa=33777,Xa=33778,Ya=33779,fh=35840,ph=35841,mh=35842,xh=35843,gh=36196,_h=37492,vh=37496,bh=37808,yh=37809,Mh=37810,Sh=37811,Eh=37812,wh=37813,Th=37814,qh=37815,Ah=37816,Ch=37817,Rh=37818,Ph=37819,Ih=37820,Dh=37821,Lh=36492,Uh=36494,Fh=36495,Nh=36283,Oh=36284,Bh=36285,zh=36286;var aa=2300,vc=2301,pc=2302,Cd=2400,Rd=2401,Pd=2402;var Jp=3200,kh=3201;var Hh=0,Qp=1,ts="",sn="srgb",ir="srgb-linear",la="linear",ht="srgb";var er=7680;var Id=519,jp=512,e1=513,t1=514,jd=515,n1=516,i1=517,s1=518,r1=519,Dd=35044;var e0="300 es",di=2e3,ca=2001;function t0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o1(){let n=ha("canvas");return n.style.display="block",n}var sp={},Kr=null;function n0(...n){let e="THREE."+n.shift();Kr?Kr("log",e,...n):console.log(e,...n)}function Xe(...n){let e="THREE."+n.shift();Kr?Kr("warn",e,...n):console.warn(e,...n)}function tt(...n){let e="THREE."+n.shift();Kr?Kr("error",e,...n):console.error(e,...n)}function Jr(...n){let e=n.join(" ");e in sp||(sp[e]=!0,Xe(...n))}function a1(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var td=Math.PI/180,ua=180/Math.PI;function ho(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function g2(n,e){return(n%e+e)%e}function nd(n,e,t){return(1-t)*n+t*e}function Ko(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Q=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ji=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],x=r[o+2],g=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a>=1){e[t+0]=u,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==u||c!==f||h!==x){let m=l*u+c*f+h*x+d*g;m<0&&(u=-u,f=-f,x=-x,g=-g,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),_=Math.sin(v);p=Math.sin(p*v)/_,a=Math.sin(a*v)/_,l=l*p+u*a,c=c*p+f*a,h=h*p+x*a,d=d*p+g*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+x*a,d=d*p+g*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return e[t]=a*x+h*d+l*f-c*u,e[t+1]=l*x+h*u+c*d-a*f,e[t+2]=c*x+h*f+a*u-l*d,e[t+3]=h*x-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},id=new I,rp=new Ji,Je=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],x=i[8],g=s[0],m=s[3],p=s[6],v=s[1],_=s[4],S=s[7],C=s[2],E=s[5],T=s[8];return r[0]=o*g+a*v+l*C,r[3]=o*m+a*_+l*E,r[6]=o*p+a*S+l*T,r[1]=c*g+h*v+d*C,r[4]=c*m+h*_+d*E,r[7]=c*p+h*S+d*T,r[2]=u*g+f*v+x*C,r[5]=u*m+f*_+x*E,r[8]=u*p+f*S+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,x=t*d+i*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=u*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sd=new Je,op=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _2(){let n={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ir]:{primaries:e,whitePoint:i,transfer:la,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}var it=_2();function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ur,bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=ha("canvas")),Ur.width=e.width,Ur.height=e.height;let s=Ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($i(t[i]/255)*255):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},v2=0,Qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v2++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rd(s[o].image)):r.push(rd(s[o]))}else r=rd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function rd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var b2=0,od=new I,An=class n extends Ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Si,s=Si,r=kn,o=Ai,a=ni,l=fi,c=n.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=ho(),this.name="",this.source=new Qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gc:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gc:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Xd;An.DEFAULT_ANISOTROPY=1;var pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,S=(f+1)/2,C=(p+1)/2,E=(h+u)/4,T=(d+g)/4,P=(x+m)/4;return _>S&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=T/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=E/s,r=P/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=T/r,s=P/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new An(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends yc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mc=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xl.copy(i.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Yl.subVectors(this.max,Jo),Fr.subVectors(e.a,Jo),Nr.subVectors(e.b,Jo),Or.subVectors(e.c,Jo),bs.subVectors(Nr,Fr),ys.subVectors(Or,Nr),Ks.subVectors(Fr,Or);let t=[0,-bs.z,bs.y,0,-ys.z,ys.y,0,-Ks.z,Ks.y,bs.z,0,-bs.x,ys.z,0,-ys.x,Ks.z,0,-Ks.x,-bs.y,bs.x,0,-ys.y,ys.x,0,-Ks.y,Ks.x,0];return!ad(t,Fr,Nr,Or,Yl)||(t=[1,0,0,0,1,0,0,0,1],!ad(t,Fr,Nr,Or,Yl))?!1:($l.crossVectors(bs,ys),t=[$l.x,$l.y,$l.z],ad(t,Fr,Nr,Or,Yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new I,new I,new I,new I,new I,new I,new I,new I],ci=new I,Xl=new Hn,Fr=new I,Nr=new I,Or=new I,bs=new I,ys=new I,Ks=new I,Jo=new I,Yl=new I,$l=new I,Js=new I;function ad(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Js.fromArray(n,r);let a=s.x*Math.abs(Js.x)+s.y*Math.abs(Js.y)+s.z*Math.abs(Js.z),l=e.dot(Js),c=t.dot(Js),h=i.dot(Js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var y2=new Hn,Qo=new I,ld=new I,As=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):y2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);let t=Qo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(ld)),this.expandByPoint(Qo.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gi=new I,cd=new I,Zl=new I,Ms=new I,hd=new I,Kl=new I,ud=new I,Sc=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){cd.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(cd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=Ms.dot(this.direction),l=-Ms.dot(Zl),c=Ms.lengthSq(),h=Math.abs(1-o*o),d,u,f,x;if(h>0)if(d=o*l-a,u=o*a-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cd).addScaledVector(Zl,u),f}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,r){hd.subVectors(t,e),Kl.subVectors(i,e),ud.crossVectors(hd,Kl);let o=this.direction.dot(ud),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);let l=a*this.direction.dot(Kl.crossVectors(Ms,Kl));if(l<0)return null;let c=a*this.direction.dot(hd.cross(Ms));if(c<0||l+c>o)return null;let h=-a*Ms.dot(ud);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,x,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,x,g,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,x,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,x=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+x*c,t[5]=u-g*c,t[9]=-a*l,t[2]=g-u*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,x=c*h,g=c*d;t[0]=u+g*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-x,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,x=c*h,g=c*d;t[0]=u-g*a,t[4]=-o*d,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*h,t[9]=g-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,x=a*h,g=a*d;t[0]=l*h,t[4]=x*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-u*d,t[8]=x*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+x,t[10]=u-g*d}else if(e.order==="XZY"){let u=o*l,f=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=o*h,t[9]=f*d-x,t[2]=x*d-f,t[6]=a*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M2,e,S2)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ss.crossVectors(i,Bn),Ss.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ss.crossVectors(i,Bn)),Ss.normalize(),Jl.crossVectors(Bn,Ss),s[0]=Ss.x,s[4]=Jl.x,s[8]=Bn.x,s[1]=Ss.y,s[5]=Jl.y,s[9]=Bn.y,s[2]=Ss.z,s[6]=Jl.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],x=i[2],g=i[6],m=i[10],p=i[14],v=i[3],_=i[7],S=i[11],C=i[15],E=s[0],T=s[4],P=s[8],M=s[12],b=s[1],R=s[5],F=s[9],O=s[13],H=s[2],G=s[6],X=s[10],se=s[14],k=s[3],re=s[7],he=s[11],qe=s[15];return r[0]=o*E+a*b+l*H+c*k,r[4]=o*T+a*R+l*G+c*re,r[8]=o*P+a*F+l*X+c*he,r[12]=o*M+a*O+l*se+c*qe,r[1]=h*E+d*b+u*H+f*k,r[5]=h*T+d*R+u*G+f*re,r[9]=h*P+d*F+u*X+f*he,r[13]=h*M+d*O+u*se+f*qe,r[2]=x*E+g*b+m*H+p*k,r[6]=x*T+g*R+m*G+p*re,r[10]=x*P+g*F+m*X+p*he,r[14]=x*M+g*O+m*se+p*qe,r[3]=v*E+_*b+S*H+C*k,r[7]=v*T+_*R+S*G+C*re,r[11]=v*P+_*F+S*X+C*he,r[15]=v*M+_*O+S*se+C*qe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+g*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],v=d*m*c-g*u*c+g*l*f-a*m*f-d*l*p+a*u*p,_=x*u*c-h*m*c-x*l*f+o*m*f+h*l*p-o*u*p,S=h*g*c-x*d*c+x*a*f-o*g*f-h*a*p+o*d*p,C=x*d*l-h*g*l-x*a*u+o*g*u+h*a*m-o*d*m,E=t*v+i*_+s*S+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=v*T,e[1]=(g*u*r-d*m*r-g*s*f+i*m*f+d*s*p-i*u*p)*T,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*p+i*l*p)*T,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*T,e[4]=_*T,e[5]=(h*m*r-x*u*r+x*s*f-t*m*f-h*s*p+t*u*p)*T,e[6]=(x*l*r-o*m*r-x*s*c+t*m*c+o*s*p-t*l*p)*T,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*T,e[8]=S*T,e[9]=(x*d*r-h*g*r-x*i*f+t*g*f+h*i*p-t*d*p)*T,e[10]=(o*g*r-x*a*r+x*i*c-t*g*c-o*i*p+t*a*p)*T,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*f-t*a*f)*T,e[12]=C*T,e[13]=(h*g*s-x*d*s+x*i*u-t*g*u-h*i*m+t*d*m)*T,e[14]=(x*a*s-o*g*s-x*i*l+t*g*l+o*i*m-t*a*m)*T,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,x=r*d,g=o*h,m=o*d,p=a*d,v=l*c,_=l*h,S=l*d,C=i.x,E=i.y,T=i.z;return s[0]=(1-(g+p))*C,s[1]=(f+S)*C,s[2]=(x-_)*C,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(u+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(x+_)*T,s[9]=(m-v)*T,s[10]=(1-(u+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Br.set(s[0],s[1],s[2]).length(),o=Br.set(s[4],s[5],s[6]).length(),a=Br.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);let c=1/r,h=1/o,d=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,t.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=di,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),x,g;if(l)x=r/(o-r),g=o*r/(o-r);else if(a===di)x=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)x=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=di,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),x,g;if(l)x=1/(o-r),g=o/(o-r);else if(a===di)x=-2/(o-r),g=-(o+r)/(o-r);else if(a===ca)x=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Br=new I,hi=new dt,M2=new I(0,0,0),S2=new I(1,1,1),Ss=new I,Jl=new I,Bn=new I,lp=new dt,cp=new Ji,ei=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},E2=0,hp=new I,zr=new Ji,Wi=new dt,Ql=new I,jo=new I,w2=new I,T2=new Ji,up=new I(1,0,0),dp=new I(0,1,0),fp=new I(0,0,1),pp={type:"added"},q2={type:"removed"},kr={type:"childadded",child:null},dd={type:"childremoved",child:null},Ft=class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ei,i=new Ji,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Je}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return hp.copy(e).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ql.copy(e):Ql.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(jo,Ql,this.up):Wi.lookAt(Ql,jo,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(Wi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pp),kr.child=e,this.dispatchEvent(kr),kr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q2),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pp),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,w2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,T2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new I(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new I,Xi=new I,fd=new I,Yi=new I,Hr=new I,Vr=new I,mp=new I,pd=new I,md=new I,xd=new I,gd=new pt,_d=new pt,vd=new pt,Ts=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ui.subVectors(e,t),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ui.subVectors(s,t),Xi.subVectors(i,t),fd.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Xi),l=ui.dot(fd),c=Xi.dot(Xi),h=Xi.dot(fd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(gd,r.x),o.addScaledVector(_d,r.y),o.addScaledVector(vd,r.z),o}static isFrontFacing(e,t,i,s){return ui.subVectors(i,t),Xi.subVectors(e,t),ui.cross(Xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),ui.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Hr.subVectors(s,i),Vr.subVectors(r,i),pd.subVectors(e,i);let l=Hr.dot(pd),c=Vr.dot(pd);if(l<=0&&c<=0)return t.copy(i);md.subVectors(e,s);let h=Hr.dot(md),d=Vr.dot(md);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Hr,o);xd.subVectors(e,r);let f=Hr.dot(xd),x=Vr.dot(xd);if(x>=0&&f<=x)return t.copy(r);let g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Vr,a);let m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return mp.subVectors(r,s),a=(d-h)/(d-h+(f-x)),t.copy(s).addScaledVector(mp,a);let p=1/(m+g+u);return o=g*p,a=u*p,t.copy(i).addScaledVector(Hr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},l1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},jl={h:0,s:0,l:0};function bd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=g2(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bd(o,r,e+1/3),this.g=bd(o,r,e),this.b=bd(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let i=l1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return it.workingToColorSpace(fn.copy(this),e),Math.round(Qe(fn.r*255,0,255))*65536+Math.round(Qe(fn.g*255,0,255))*256+Math.round(Qe(fn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=sn){it.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(jl);let i=nd(Es.h,jl.h,t),s=nd(Es.s,jl.s,t),r=nd(Es.l,jl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ce;ce.NAMES=l1;var A2=0,Ti=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A2++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=tr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=xc,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vn=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new I,ec=new Q,C2=0,pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dd,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ko(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dd&&(e.usage=this.usage),e}};var pa=class extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ma=class extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}},R2=0,jn=new dt,yd=new Ft,Gr=new I,zn=new Hn,ea=new Hn,Jt=new I,Qt=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?ma:pa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(zn.min,ea.min),zn.expandByPoint(Jt),Jt.addVectors(zn.max,ea.max),zn.expandByPoint(Jt)):(zn.expandByPoint(ea.min),zn.expandByPoint(ea.max))}zn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),Jt.add(Gr)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;let c=new I,h=new I,d=new I,u=new Q,f=new Q,x=new Q,g=new I,m=new I;function p(P,M,b){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),x.fromBufferAttribute(r,b),h.sub(c),d.sub(c),f.sub(u),x.sub(u);let R=1/(f.x*x.y-x.x*f.y);isFinite(R)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(R),a[P].add(g),a[M].add(g),a[b].add(g),l[P].add(m),l[M].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){let b=v[P],R=b.start,F=b.count;for(let O=R,H=R+F;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let _=new I,S=new I,C=new I,E=new I;function T(P){C.fromBufferAttribute(s,P),E.copy(C);let M=a[P];_.copy(M),_.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(E,M);let R=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,M=v.length;P<M;++P){let b=v[P],R=b.start,F=b.count;for(let O=R,H=R+F;O<H;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)u[x++]=c[f++]}return new pn(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xp=new dt,Qs=new Sc,tc=new As,gp=new I,nc=new I,ic=new I,sc=new I,Md=new I,rc=new I,_p=new I,oc=new I,le=class extends Ft{constructor(e=new Qt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){rc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Md.fromBufferAttribute(d,e),o?rc.addScaledVector(Md,h):rc.addScaledVector(Md.sub(t),h))}t.add(rc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),Qs.copy(e.ray).recast(e.near),!(tc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(tc,gp)===null||Qs.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(xp.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(xp),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=_;S<C;S+=3){let E=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);s=ac(this,p,e,i,c,h,d,E,T,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);s=ac(this,o,e,i,c,h,d,v,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=_;S<C;S+=3){let E=S,T=S+1,P=S+2;s=ac(this,p,e,i,c,h,d,E,T,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let v=m,_=m+1,S=m+2;s=ac(this,o,e,i,c,h,d,v,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function P2(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Zi,a),l===null)return null;oc.copy(a),oc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(oc);return c<t.near||c>t.far?null:{distance:c,point:oc.clone(),object:n}}function ac(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,nc),n.getVertexPosition(l,ic),n.getVertexPosition(c,sc);let h=P2(n,e,t,i,nc,ic,sc,_p);if(h){let d=new I;Ts.getBarycoord(_p,nc,ic,sc,d),s&&(h.uv=Ts.getInterpolatedAttribute(s,a,l,c,d,new Q)),r&&(h.uv1=Ts.getInterpolatedAttribute(r,a,l,c,d,new Q)),o&&(h.normal=Ts.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Ts.getNormal(nc,ic,sc,u.normal),h.face=u,h.barycoord=d}return h}var Cn=class n extends Qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(d,2));function x(g,m,p,v,_,S,C,E,T,P,M){let b=S/T,R=C/P,F=S/2,O=C/2,H=E/2,G=T+1,X=P+1,se=0,k=0,re=new I;for(let he=0;he<X;he++){let qe=he*R-O;for(let ze=0;ze<G;ze++){let je=ze*b-F;re[g]=je*v,re[m]=qe*_,re[p]=H,c.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[p]=E>0?1:-1,h.push(re.x,re.y,re.z),d.push(ze/T),d.push(1-he/P),se+=1}}for(let he=0;he<P;he++)for(let qe=0;qe<T;qe++){let ze=u+qe+G*he,je=u+qe+G*(he+1),ct=u+(qe+1)+G*(he+1),ft=u+(qe+1)+G*he;l.push(ze,je,ft),l.push(je,ct,ft),k+=6}a.addGroup(f,k,M),f+=k,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=mr(n[t]);for(let s in i)e[s]=i[s]}return e}function I2(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function i0(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var mi={clone:mr,merge:mn},D2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_t=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D2,this.fragmentShader=L2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=I2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},xa=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ws=new I,vp=new Q,bp=new Q,zt=class extends xa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,vp,bp),t.subVectors(bp,vp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(td*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wr=-90,Xr=1,Ec=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Wr,Xr,e,t);s.layers=this.layers,this.add(s);let r=new zt(Wr,Xr,e,t);r.layers=this.layers,this.add(r);let o=new zt(Wr,Xr,e,t);o.layers=this.layers,this.add(o);let a=new zt(Wr,Xr,e,t);a.layers=this.layers,this.add(a);let l=new zt(Wr,Xr,e,t);l.layers=this.layers,this.add(l);let c=new zt(Wr,Xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},ga=class extends An{constructor(e=[],t=fr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wc=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ga(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Rn});r.uniforms.tEquirect.value=t;let o=new le(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=kn),new Ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ne=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},U2={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var sr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qi=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var _a=class extends An{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,h=rn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var va=class extends pn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new dt,yp=new dt,lc=[],Mp=new Hn,F2=new dt,ta=new le,na=new As,ba=class extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new va(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,F2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),Mp.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),na.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yr),yp.multiplyMatrices(i,Yr),ta.matrixWorld=yp,ta.raycast(e,lc);for(let o=0,a=lc.length;o<a;o++){let l=lc[o];l.instanceId=r,l.object=this,t.push(l)}lc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new va(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new _a(new Float32Array(s*this.count),s,this.count,lh,pi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sd=new I,N2=new I,O2=new Je,qn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sd.subVectors(i,t).cross(N2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Sd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||O2.getNormalMatrix(e),s=this.coplanarPoint(Sd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},js=new As,B2=new Q(.5,.5),cc=new I,eo=class{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],g=r[9],m=r[10],p=r[11],v=r[12],_=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,p-x,C-v).normalize(),s[1].setComponents(c+o,f+h,p+x,C+v).normalize(),s[2].setComponents(c+a,f+d,p+g,C+_).normalize(),s[3].setComponents(c-a,f-d,p-g,C-_).normalize(),i)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,C-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,C-S).normalize(),t===di)s[5].setComponents(c+l,f+u,p+m,C+S).normalize();else if(t===ca)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);let t=B2.distanceTo(e.center);return js.radius=.7071067811865476+t,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(cc.x=s.normal.x>0?e.max.x:e.min.x,cc.y=s.normal.y>0?e.max.y:e.min.y,cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ya=class extends An{constructor(e,t,i=Ds,s,r,o,a=rn,l=rn,c,h=Zr,d=1){if(h!==Zr&&h!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ma=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sa=class n extends Qt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,x=i*2+r,g=s+1,m=new I,p=new I;for(let v=0;v<=x;v++){let _=0,S=0,C=0,E=0;if(v<=i){let M=v/i,b=M*Math.PI/2;S=-h-e*Math.cos(b),C=e*Math.sin(b),E=-e*Math.cos(b),_=M*d}else if(v<=i+r){let M=(v-i)/r;S=-h+M*t,C=e,E=0,_=d+M*u}else{let M=(v-i-r)/i,b=M*Math.PI/2;S=h+e*Math.sin(b),C=e*Math.cos(b),E=e*Math.sin(b),_=d+u+M*d}let T=Math.max(0,Math.min(1,_/f)),P=0;v===0?P=.5/s:v===x&&(P=-.5/s);for(let M=0;M<=s;M++){let b=M/s,R=b*Math.PI*2,F=Math.sin(R),O=Math.cos(R);p.x=-C*O,p.y=S,p.z=C*F,a.push(p.x,p.y,p.z),m.set(-C*O,E,C*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(b+P,T)}if(v>0){let M=(v-1)*g;for(let b=0;b<s;b++){let R=M+b,F=M+b+1,O=v*g+b,H=v*g+b+1;o.push(R,F,O),o.push(F,H,O)}}}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var mt=class n extends Qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],x=0,g=[],m=i/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2));function v(){let S=new I,C=new I,E=0,T=(t-e)/i;for(let P=0;P<=r;P++){let M=[],b=P/r,R=b*(t-e)+e;for(let F=0;F<=s;F++){let O=F/s,H=O*l+a,G=Math.sin(H),X=Math.cos(H);C.x=R*G,C.y=-b*i+m,C.z=R*X,d.push(C.x,C.y,C.z),S.set(G,T,X).normalize(),u.push(S.x,S.y,S.z),f.push(O,1-b),M.push(x++)}g.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let b=g[M][P],R=g[M+1][P],F=g[M+1][P+1],O=g[M][P+1];(e>0||M!==0)&&(h.push(b,R,O),E+=3),(t>0||M!==r-1)&&(h.push(R,F,O),E+=3)}c.addGroup(p,E,0),p+=E}function _(S){let C=x,E=new Q,T=new I,P=0,M=S===!0?e:t,b=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),x++;let R=x;for(let F=0;F<=s;F++){let H=F/s*l+a,G=Math.cos(H),X=Math.sin(H);T.x=M*X,T.y=m*b,T.z=M*G,d.push(T.x,T.y,T.z),u.push(0,b,0),E.x=G*.5+.5,E.y=X*.5*b+.5,f.push(E.x,E.y),x++}for(let F=0;F<s;F++){let O=C+F,H=R+F;S===!0?h.push(H,H+1,O):h.push(H+1,H,O),P+=3}c.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Q:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,l=new dt;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},to=class extends Vn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Q){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tc=class extends to{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function s0(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var hc=new I,Ed=new s0,wd=new s0,Td=new s0,qc=class extends Vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(hc.subVectors(s[0],s[1]).add(s[0]),c=hc);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),Ed.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,x,g,m),wd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,x,g,m),Td.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(Ed.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),wd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Td.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ed.calc(l),wd.calc(l),Td.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function z2(n,e){let t=1-n;return t*t*e}function k2(n,e){return 2*(1-n)*n*e}function H2(n,e){return n*n*e}function ra(n,e,t,i){return z2(n,e)+k2(n,t)+H2(n,i)}function V2(n,e){let t=1-n;return t*t*t*e}function G2(n,e){let t=1-n;return 3*t*t*n*e}function W2(n,e){return 3*(1-n)*n*n*e}function X2(n,e){return n*n*n*e}function oa(n,e,t,i,s){return V2(n,e)+G2(n,t)+W2(n,i)+X2(n,s)}var Ea=class extends Vn{constructor(e=new Q,t=new Q,i=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Q){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oa(e,s.x,r.x,o.x,a.x),oa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ac=class extends Vn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oa(e,s.x,r.x,o.x,a.x),oa(e,s.y,r.y,o.y,a.y),oa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends Vn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends Vn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Vn{constructor(e=new Q,t=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Q){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ra(e,s.x,r.x,o.x),ra(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends Vn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ra(e,s.x,r.x,o.x),ra(e,s.y,r.y,o.y),ra(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Sp(a,l.x,c.x,h.x,d.x),Sp(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},Ld=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:qc,CubicBezierCurve:Ea,CubicBezierCurve3:Ac,EllipseCurve:to,LineCurve:wa,LineCurve3:Cc,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Rc,SplineCurve:qa}),Pc=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ld[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ld[s.type]().fromJSON(s))}return this}},Cs=class extends Pc{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new wa(this.currentPoint.clone(),new Q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ta(this.currentPoint.clone(),new Q(e,t),new Q(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ea(this.currentPoint.clone(),new Q(e,t),new Q(i,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new qa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new to(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ei=class extends Cs{constructor(e){super(e),this.uuid=ho(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Cs().fromJSON(s))}return this}};function Y2(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=c1(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Q2(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=n[u],x=n[u+1];f<a&&(a=f),x<l&&(l=x),f>h&&(h=f),x>d&&(d=x)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Aa(r,o,t,a,l,c,0),o}function c1(n,e,t,i,s){let r;if(s===c4(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ep(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ep(o/i|0,n[o],n[o+1],r);return r&&no(r,r.next)&&(Ra(r),r=r.next),r}function rr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(no(t,t.next)||It(t.prev,t,t.next)===0)){if(Ra(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Aa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&i4(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Z2(n,i,s,r):$2(n)){e.push(l.i,n.i,c.i),Ra(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=K2(rr(n),e),Aa(n,e,t,i,s,r,2)):o===2&&J2(n,e,t,i,s,r):Aa(rr(n),e,t,i,s,r,1);break}}}function $2(n){let e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=d&&x.y<=f&&sa(s,a,r,l,o,c,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Z2(n,e,t,i){let s=n.prev,r=n,o=n.next;if(It(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),x=Math.min(h,d,u),g=Math.max(a,l,c),m=Math.max(h,d,u),p=Ud(f,x,e,t,i),v=Ud(g,m,e,t,i),_=n.prevZ,S=n.nextZ;for(;_&&_.z>=p&&S&&S.z<=v;){if(_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&sa(a,h,l,d,c,u,_.x,_.y)&&It(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=f&&S.x<=g&&S.y>=x&&S.y<=m&&S!==s&&S!==o&&sa(a,h,l,d,c,u,S.x,S.y)&&It(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&sa(a,h,l,d,c,u,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=g&&S.y>=x&&S.y<=m&&S!==s&&S!==o&&sa(a,h,l,d,c,u,S.x,S.y)&&It(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function K2(n,e){let t=n;do{let i=t.prev,s=t.next.next;!no(i,s)&&u1(i,t,t.next,s)&&Ca(i,s)&&Ca(s,i)&&(e.push(i.i,t.i,s.i),Ra(t),Ra(t.next),t=n=s),t=t.next}while(t!==n);return rr(t)}function J2(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&o4(o,a)){let l=d1(o,a);o=rr(o,o.next),l=rr(l,l.next),Aa(o,e,t,i,s,r,0),Aa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Q2(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=c1(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(r4(c))}s.sort(j2);for(let r=0;r<s.length;r++)t=e4(s[r],t);return t}function j2(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function e4(n,e){let t=t4(n,e);if(!t)return e;let i=d1(t,n);return rr(i,i.next),rr(t,t.next)}function t4(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(no(n,t))return t;do{if(no(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&h1(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Ca(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&n4(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function n4(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function i4(n,e,t,i){let s=n;do s.z===0&&(s.z=Ud(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,s4(s)}function s4(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ud(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function r4(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function h1(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function sa(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&h1(n,e,t,i,s,r,o,a)}function o4(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!a4(n,e)&&(Ca(n,e)&&Ca(e,n)&&l4(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||no(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function no(n,e){return n.x===e.x&&n.y===e.y}function u1(n,e,t,i){let s=dc(It(n,e,t)),r=dc(It(n,e,i)),o=dc(It(t,i,n)),a=dc(It(t,i,e));return!!(s!==r&&o!==a||s===0&&uc(n,t,e)||r===0&&uc(n,i,e)||o===0&&uc(t,n,i)||a===0&&uc(t,e,i))}function uc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function dc(n){return n>0?1:n<0?-1:0}function a4(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&u1(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ca(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function l4(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function d1(n,e){let t=Fd(n.i,n.x,n.y),i=Fd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ep(n,e,t,i){let s=Fd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ra(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c4(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Nd=class{static triangulate(e,t,i=2){return Y2(e,t,i)}},qs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];wp(e),Tp(i,e);let o=e.length;t.forEach(wp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Tp(i,t[l]);let a=Nd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Tp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Rs=class n extends Qt{constructor(e=new Ei([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:h4,_,S=!1,C,E,T,P;p&&(_=p.getSpacedPoints(h),S=!0,u=!1,C=p.computeFrenetFrames(h,!1),E=new I,T=new I,P=new I),u||(m=0,f=0,x=0,g=0);let M=a.extractPoints(c),b=M.shape,R=M.holes;if(!qs.isClockWise(b)){b=b.reverse();for(let ee=0,A=R.length;ee<A;ee++){let j=R[ee];qs.isClockWise(j)&&(R[ee]=j.reverse())}}function O(ee){let j=10000000000000001e-36,ae=ee[0];for(let de=1;de<=ee.length;de++){let ie=de%ee.length,Te=ee[ie],xe=Te.x-ae.x,Se=Te.y-ae.y,q=xe*xe+Se*Se,y=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(ae.x),Math.abs(ae.y)),N=j*y*y;if(q<=N){ee.splice(ie,1),de--;continue}ae=Te}}O(b),R.forEach(O);let H=R.length,G=b;for(let ee=0;ee<H;ee++){let A=R[ee];b=b.concat(A)}function X(ee,A,j){return A||tt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(A,j)}let se=b.length;function k(ee,A,j){let ae,de,ie,Te=ee.x-A.x,xe=ee.y-A.y,Se=j.x-ee.x,q=j.y-ee.y,y=Te*Te+xe*xe,N=Te*q-xe*Se;if(Math.abs(N)>Number.EPSILON){let W=Math.sqrt(y),K=Math.sqrt(Se*Se+q*q),V=A.x-xe/W,De=A.y+Te/W,_e=j.x-q/K,Ue=j.y+Se/K,Pe=((_e-V)*q-(Ue-De)*Se)/(Te*q-xe*Se);ae=V+Te*Pe-ee.x,de=De+xe*Pe-ee.y;let te=ae*ae+de*de;if(te<=2)return new Q(ae,de);ie=Math.sqrt(te/2)}else{let W=!1;Te>Number.EPSILON?Se>Number.EPSILON&&(W=!0):Te<-Number.EPSILON?Se<-Number.EPSILON&&(W=!0):Math.sign(xe)===Math.sign(q)&&(W=!0),W?(ae=-xe,de=Te,ie=Math.sqrt(y)):(ae=Te,de=xe,ie=Math.sqrt(y/2))}return new Q(ae/ie,de/ie)}let re=[];for(let ee=0,A=G.length,j=A-1,ae=ee+1;ee<A;ee++,j++,ae++)j===A&&(j=0),ae===A&&(ae=0),re[ee]=k(G[ee],G[j],G[ae]);let he=[],qe,ze=re.concat();for(let ee=0,A=H;ee<A;ee++){let j=R[ee];qe=[];for(let ae=0,de=j.length,ie=de-1,Te=ae+1;ae<de;ae++,ie++,Te++)ie===de&&(ie=0),Te===de&&(Te=0),qe[ae]=k(j[ae],j[ie],j[Te]);he.push(qe),ze=ze.concat(qe)}let je;if(m===0)je=qs.triangulateShape(G,R);else{let ee=[],A=[];for(let j=0;j<m;j++){let ae=j/m,de=f*Math.cos(ae*Math.PI/2),ie=x*Math.sin(ae*Math.PI/2)+g;for(let Te=0,xe=G.length;Te<xe;Te++){let Se=X(G[Te],re[Te],ie);Ne(Se.x,Se.y,-de),ae===0&&ee.push(Se)}for(let Te=0,xe=H;Te<xe;Te++){let Se=R[Te];qe=he[Te];let q=[];for(let y=0,N=Se.length;y<N;y++){let W=X(Se[y],qe[y],ie);Ne(W.x,W.y,-de),ae===0&&q.push(W)}ae===0&&A.push(q)}}je=qs.triangulateShape(ee,A)}let ct=je.length,ft=x+g;for(let ee=0;ee<se;ee++){let A=u?X(b[ee],ze[ee],ft):b[ee];S?(T.copy(C.normals[0]).multiplyScalar(A.x),E.copy(C.binormals[0]).multiplyScalar(A.y),P.copy(_[0]).add(T).add(E),Ne(P.x,P.y,P.z)):Ne(A.x,A.y,0)}for(let ee=1;ee<=h;ee++)for(let A=0;A<se;A++){let j=u?X(b[A],ze[A],ft):b[A];S?(T.copy(C.normals[ee]).multiplyScalar(j.x),E.copy(C.binormals[ee]).multiplyScalar(j.y),P.copy(_[ee]).add(T).add(E),Ne(P.x,P.y,P.z)):Ne(j.x,j.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){let A=ee/m,j=f*Math.cos(A*Math.PI/2),ae=x*Math.sin(A*Math.PI/2)+g;for(let de=0,ie=G.length;de<ie;de++){let Te=X(G[de],re[de],ae);Ne(Te.x,Te.y,d+j)}for(let de=0,ie=R.length;de<ie;de++){let Te=R[de];qe=he[de];for(let xe=0,Se=Te.length;xe<Se;xe++){let q=X(Te[xe],qe[xe],ae);S?Ne(q.x,q.y+_[h-1].y,_[h-1].x+j):Ne(q.x,q.y,d+j)}}}Y(),J();function Y(){let ee=s.length/3;if(u){let A=0,j=se*A;for(let ae=0;ae<ct;ae++){let de=je[ae];Ie(de[2]+j,de[1]+j,de[0]+j)}A=h+m*2,j=se*A;for(let ae=0;ae<ct;ae++){let de=je[ae];Ie(de[0]+j,de[1]+j,de[2]+j)}}else{for(let A=0;A<ct;A++){let j=je[A];Ie(j[2],j[1],j[0])}for(let A=0;A<ct;A++){let j=je[A];Ie(j[0]+se*h,j[1]+se*h,j[2]+se*h)}}i.addGroup(ee,s.length/3-ee,0)}function J(){let ee=s.length/3,A=0;Ee(G,A),A+=G.length;for(let j=0,ae=R.length;j<ae;j++){let de=R[j];Ee(de,A),A+=de.length}i.addGroup(ee,s.length/3-ee,1)}function Ee(ee,A){let j=ee.length;for(;--j>=0;){let ae=j,de=j-1;de<0&&(de=ee.length-1);for(let ie=0,Te=h+m*2;ie<Te;ie++){let xe=se*ie,Se=se*(ie+1),q=A+ae+xe,y=A+de+xe,N=A+de+Se,W=A+ae+Se;et(q,y,N,W)}}}function Ne(ee,A,j){l.push(ee),l.push(A),l.push(j)}function Ie(ee,A,j){vt(ee),vt(A),vt(j);let ae=s.length/3,de=v.generateTopUV(i,s,ae-3,ae-2,ae-1);Ve(de[0]),Ve(de[1]),Ve(de[2])}function et(ee,A,j,ae){vt(ee),vt(A),vt(ae),vt(A),vt(j),vt(ae);let de=s.length/3,ie=v.generateSideWallUV(i,s,de-6,de-3,de-2,de-1);Ve(ie[0]),Ve(ie[1]),Ve(ie[3]),Ve(ie[1]),Ve(ie[2]),Ve(ie[3])}function vt(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Ve(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return u4(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ld[s.type]().fromJSON(s)),new n(i,e.options)}},h4={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],x=e[s*3+2],g=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-d),new Q(u,1-x),new Q(g,1-p)]:[new Q(a,1-l),new Q(h,1-d),new Q(f,1-x),new Q(m,1-p)]}};function u4(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var or=class n extends Qt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new I,u=new Q,f=new I,x=new I,g=new I,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(x)}for(let v=0;v<=t;v++){let _=i+v*h*s,S=Math.sin(_),C=Math.cos(_);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*S,d.y=e[E].y,d.z=e[E].x*C,o.push(d.x,d.y,d.z),u.x=v/t,u.y=E/(e.length-1),a.push(u.x,u.y);let T=l[3*E+0]*S,P=l[3*E+1],M=l[3*E+0]*C;c.push(T,P,M)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let S=_+v*e.length,C=S,E=S+e.length,T=S+e.length+1,P=S+1;r.push(C,E,P),r.push(T,P,E)}this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("uv",new ot(a,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var bn=class n extends Qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let S=_*d-r;x.push(S,-v,0),g.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,S=v+c*(p+1),C=v+1+c*(p+1),E=v+1+c*p;f.push(_,S,E),f.push(S,C,E)}this.setIndex(f),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Pa=class n extends Qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new I,x=new Q;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}d+=u}for(let g=0;g<s;g++){let m=g*(i+1);for(let p=0;p<i;p++){let v=p+m,_=v,S=v+i+1,C=v+i+2,E=v+1;a.push(_,S,E),a.push(S,C,E)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Gn=class n extends Qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],x=[],g=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){let E=C/t;d.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),x.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(E+S,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let _=h[p][v+1],S=h[p][v],C=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(_,S,E),(p!==i-1||l<Math.PI)&&f.push(S,C,E)}this.setIndex(f),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kt=class n extends Qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=i;f++)for(let x=0;x<=s;x++){let g=x/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(x/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=s;x++){let g=(s+1)*f+x-1,m=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,v=(s+1)*f+x;o.push(g,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ia=class extends Ti{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Da=class extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jt=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wt=class extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var La=class extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},io=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function d4(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ar=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dc=class extends ar{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cd,endingEnd:Cd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rd:r=e,a=2*t-i;break;case Pd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rd:o=e,l=2*i-t;break;case Pd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(i-t)/(s-t),g=x*x,m=g*x,p=-u*m+2*u*g-u*x,v=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,_=(-1-f)*m+(1.5+f)*g+.5*x,S=f*m-f*g;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+v*o[c+C]+_*o[l+C]+S*o[d+C];return r}},Lc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Uc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case vc:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return vc;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&d4(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let x=0;x!==i;++x){let g=t[d+x];if(g!==t[u+x]||g!==t[f+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=vc;var Ps=class extends Wn{constructor(e,t,i){super(e,t,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=aa;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Fc.prototype.ValueTypeName="color";var Nc=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Nc.prototype.ValueTypeName="number";var Oc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ji.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ua=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}};Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Wn{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=aa;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Bc.prototype.ValueTypeName="vector";var zc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},f1=new zc,Fa=class{constructor(e){this.manager=e!==void 0?e:f1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},cr=class extends lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},qd=new dt,qp=new I,Ap=new I,Na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(qp),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),qd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Od=class extends Na{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ua*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oa=class extends lr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Od}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Cp=new dt,ia=new I,Ad=new I,Bd=class extends Na{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(ia),Ad.copy(i.position),Ad.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ad),i.updateMatrixWorld(),s.makeTranslation(-ia.x,-ia.y,-ia.z),Cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp,i.coordinateSystem,i.reversedDepth)}},hr=class extends lr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Bd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ur=class extends xa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zd=class extends Na{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var kc=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ba=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var r0="\\[\\]\\.:\\/",f4=new RegExp("["+r0+"]","g"),o0="[^"+r0+"]",p4="[^"+r0.replace("\\.","")+"]",m4=/((?:WC+[\/:])*)/.source.replace("WC",o0),x4=/(WCOD+)?/.source.replace("WCOD",p4),g4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",o0),_4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",o0),v4=new RegExp("^"+m4+x4+g4+_4+"$"),b4=["material","materials","bones","map"],kd=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f4,"")}static parseTrackName(e){let t=v4.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);b4.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=kd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q8=new Float32Array(1);var za=class{constructor(){this.type="ShapePath",this.color=new ce,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Cs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let v=[];for(let _=0,S=p.length;_<S;_++){let C=p[_],E=new Ei;E.curves=C.curves,v.push(E)}return v}function i(p,v){let _=v.length,S=!1;for(let C=_-1,E=0;E<_;C=E++){let T=v[C],P=v[E],M=P.x-T.x,b=P.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=v[E],M=-M,P=v[C],b=-b),p.y<T.y||p.y>P.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{let R=b*(p.x-T.x)-M*(p.y-T.y);if(R===0)return!0;if(R<0)continue;S=!S}}else{if(p.y!==T.y)continue;if(P.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=P.x)return!0}}return S}let s=qs.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new Ei,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;let d=[],u=[],f=[],x=0,g;u[x]=void 0,f[x]=[];for(let p=0,v=r.length;p<v;p++)a=r[p],g=a.getPoints(),o=s(g),o=e?!o:o,o?(!h&&u[x]&&x++,u[x]={s:new Ei,p:g},u[x].s.curves=a.curves,h&&x++,f[x]=[]):f[x].push({h:a,p:g[0]});if(!u[0])return t(r);if(u.length>1){let p=!1,v=0;for(let _=0,S=u.length;_<S;_++)d[_]=[];for(let _=0,S=u.length;_<S;_++){let C=f[_];for(let E=0;E<C.length;E++){let T=C[E],P=!0;for(let M=0;M<u.length;M++)i(T.p,u[M].p)&&(_!==M&&v++,P?(P=!1,d[M].push(T)):p=!0);P&&d[_].push(T)}}v>0&&p===!1&&(f=d)}let m;for(let p=0,v=u.length;p<v;p++){l=u[p].s,c.push(l),m=f[p];for(let _=0,S=m.length;_<S;_++)l.holes.push(m[_].h)}return c}};function a0(n,e,t,i){let s=y4(i);switch(t){case Jd:return n*e;case lh:return n*e/s.components*s.byteLength;case ch:return n*e/s.components*s.byteLength;case hh:return n*e*2/s.components*s.byteLength;case uh:return n*e*2/s.components*s.byteLength;case Qd:return n*e*3/s.components*s.byteLength;case ni:return n*e*4/s.components*s.byteLength;case dh:return n*e*4/s.components*s.byteLength;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:case xh:return Math.max(n,16)*Math.max(e,8)/4;case fh:case mh:return Math.max(n,8)*Math.max(e,8)/2;case gh:case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lh:case Uh:case Fh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Nh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bh:case zh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y4(n){switch(n){case fi:case Yd:return{byteLength:1,components:1};case ao:case $d:case Ht:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case Ds:case rh:case pi:return{byteLength:4,components:1};case Zd:case Kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function F1(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function w4(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],g=d[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let g=d[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var T4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q4=`#ifdef USE_ALPHAHASH
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
#endif`,A4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I4=`#ifdef USE_AOMAP
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
#endif`,D4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L4=`#ifdef USE_BATCHING
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
#endif`,U4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O4=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B4=`#ifdef USE_IRIDESCENCE
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
#endif`,z4=`#ifdef USE_BUMPMAP
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
#endif`,k4=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$4=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z4=`#define PI 3.141592653589793
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
} // validated`,K4=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J4=`vec3 transformedNormal = objectNormal;
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
#endif`,Q4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
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
#endif`,Ex=`uniform sampler2D dfgLUT;
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
}`,wx=`
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ux=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h5=`float getShadowMask() {
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
}`,u5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d5=`#ifdef USE_SKINNING
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
#endif`,f5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p5=`#ifdef USE_SKINNING
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
#endif`,m5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v5=`#ifdef USE_TRANSMISSION
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
#endif`,b5=`#ifdef USE_TRANSMISSION
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
#endif`,y5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T5=`uniform sampler2D t2D;
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
}`,q5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P5=`#include <common>
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
}`,I5=`#if DEPTH_PACKING == 3200
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
}`,D5=`#define DISTANCE
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
}`,L5=`#define DISTANCE
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
}`,U5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N5=`uniform float scale;
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
}`,O5=`uniform vec3 diffuse;
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
}`,B5=`#include <common>
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
}`,z5=`uniform vec3 diffuse;
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
}`,k5=`#define LAMBERT
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
}`,H5=`#define LAMBERT
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
}`,V5=`#define MATCAP
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
}`,G5=`#define MATCAP
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
}`,W5=`#define NORMAL
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
}`,X5=`#define NORMAL
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
}`,Y5=`#define PHONG
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
}`,$5=`#define PHONG
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
}`,Z5=`#define STANDARD
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
}`,K5=`#define STANDARD
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
}`,J5=`#define TOON
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
}`,Q5=`#define TOON
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
}`,j5=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:T4,alphahash_pars_fragment:q4,alphamap_fragment:A4,alphamap_pars_fragment:C4,alphatest_fragment:R4,alphatest_pars_fragment:P4,aomap_fragment:I4,aomap_pars_fragment:D4,batching_pars_vertex:L4,batching_vertex:U4,begin_vertex:F4,beginnormal_vertex:N4,bsdfs:O4,iridescence_fragment:B4,bumpmap_pars_fragment:z4,clipping_planes_fragment:k4,clipping_planes_pars_fragment:H4,clipping_planes_pars_vertex:V4,clipping_planes_vertex:G4,color_fragment:W4,color_pars_fragment:X4,color_pars_vertex:Y4,color_vertex:$4,common:Z4,cube_uv_reflection_fragment:K4,defaultnormal_vertex:J4,displacementmap_pars_vertex:Q4,displacementmap_vertex:j4,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:sx,envmap_common_pars_fragment:rx,envmap_pars_fragment:ox,envmap_pars_vertex:ax,envmap_physical_pars_fragment:_x,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:hx,fog_fragment:ux,fog_pars_fragment:dx,gradientmap_pars_fragment:fx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:xx,lights_pars_begin:gx,lights_toon_fragment:vx,lights_toon_pars_fragment:bx,lights_phong_fragment:yx,lights_phong_pars_fragment:Mx,lights_physical_fragment:Sx,lights_physical_pars_fragment:Ex,lights_fragment_begin:wx,lights_fragment_maps:Tx,lights_fragment_end:qx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Px,map_fragment:Ix,map_pars_fragment:Dx,map_particle_fragment:Lx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ox,morphcolor_vertex:Bx,morphnormal_vertex:zx,morphtarget_pars_vertex:kx,morphtarget_vertex:Hx,normal_fragment_begin:Vx,normal_fragment_maps:Gx,normal_pars_fragment:Wx,normal_pars_vertex:Xx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Qx,opaque_fragment:jx,packing:e5,premultiplied_alpha_fragment:t5,project_vertex:n5,dithering_fragment:i5,dithering_pars_fragment:s5,roughnessmap_fragment:r5,roughnessmap_pars_fragment:o5,shadowmap_pars_fragment:a5,shadowmap_pars_vertex:l5,shadowmap_vertex:c5,shadowmask_pars_fragment:h5,skinbase_vertex:u5,skinning_pars_vertex:d5,skinning_vertex:f5,skinnormal_vertex:p5,specularmap_fragment:m5,specularmap_pars_fragment:x5,tonemapping_fragment:g5,tonemapping_pars_fragment:_5,transmission_fragment:v5,transmission_pars_fragment:b5,uv_pars_fragment:y5,uv_pars_vertex:M5,uv_vertex:S5,worldpos_vertex:E5,background_vert:w5,background_frag:T5,backgroundCube_vert:q5,backgroundCube_frag:A5,cube_vert:C5,cube_frag:R5,depth_vert:P5,depth_frag:I5,distanceRGBA_vert:D5,distanceRGBA_frag:L5,equirect_vert:U5,equirect_frag:F5,linedashed_vert:N5,linedashed_frag:O5,meshbasic_vert:B5,meshbasic_frag:z5,meshlambert_vert:k5,meshlambert_frag:H5,meshmatcap_vert:V5,meshmatcap_frag:G5,meshnormal_vert:W5,meshnormal_frag:X5,meshphong_vert:Y5,meshphong_frag:$5,meshphysical_vert:Z5,meshphysical_frag:K5,meshtoon_vert:J5,meshtoon_frag:Q5,points_vert:j5,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},ve={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ci={basic:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ce(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:mn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:mn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ce(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:mn([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:mn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:mn([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:mn([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:mn([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:mn([ve.lights,ve.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ci.physical={uniforms:mn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Vh={r:0,b:0,g:0},xr=new ei,rg=new dt;function og(n,e,t,i,s,r,o){let a=new ce(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function x(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function g(_){let S=!1,C=x(_);C===null?p(a,l):C&&C.isColor&&(p(C,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,S){let C=x(S);C&&(C.isCubeTexture||C.mapping===Ha)?(h===void 0&&(h=new le(new Cn(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:mr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xr.copy(S.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(xr)),h.material.toneMapped=it.getTransfer(C.colorSpace)!==ht,(d!==C||u!==C.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new le(new bn(2,2),new _t({name:"BackgroundMaterial",uniforms:mr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB(Vh,i0(n)),i.buffers.color.setClear(Vh.r,Vh.g,Vh.b,S,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:g,addToRenderList:m,dispose:v}}function ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(b,R,F,O,H){let G=!1,X=d(O,F,R);r!==X&&(r=X,c(r.object)),G=f(b,O,F,H),G&&x(b,O,F,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(b,R,F,O),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,R,F){let O=F.wireframe===!0,H=i[b.id];H===void 0&&(H={},i[b.id]=H);let G=H[R.id];G===void 0&&(G={},H[R.id]=G);let X=G[O];return X===void 0&&(X=u(l()),G[O]=X),X}function u(b){let R=[],F=[],O=[];for(let H=0;H<t;H++)R[H]=0,F[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,R,F,O){let H=r.attributes,G=R.attributes,X=0,se=F.getAttributes();for(let k in se)if(se[k].location>=0){let he=H[k],qe=G[k];if(qe===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(qe=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(qe=b.instanceColor)),he===void 0||he.attribute!==qe||qe&&he.data!==qe.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function x(b,R,F,O){let H={},G=R.attributes,X=0,se=F.getAttributes();for(let k in se)if(se[k].location>=0){let he=G[k];he===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));let qe={};qe.attribute=he,he&&he.data&&(qe.data=he.data),H[k]=qe,X++}r.attributes=H,r.attributesNum=X,r.index=O}function g(){let b=r.newAttributes;for(let R=0,F=b.length;R<F;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){let F=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;F[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),H[b]!==R&&(n.vertexAttribDivisor(b,R),H[b]=R)}function v(){let b=r.newAttributes,R=r.enabledAttributes;for(let F=0,O=R.length;F<O;F++)R[F]!==b[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function _(b,R,F,O,H,G,X){X===!0?n.vertexAttribIPointer(b,R,F,H,G):n.vertexAttribPointer(b,R,F,O,H,G)}function S(b,R,F,O){g();let H=O.attributes,G=F.getAttributes(),X=R.defaultAttributeValues;for(let se in G){let k=G[se];if(k.location>=0){let re=H[se];if(re===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let he=re.normalized,qe=re.itemSize,ze=e.get(re);if(ze===void 0)continue;let je=ze.buffer,ct=ze.type,ft=ze.bytesPerElement,Y=ct===n.INT||ct===n.UNSIGNED_INT||re.gpuType===rh;if(re.isInterleavedBufferAttribute){let J=re.data,Ee=J.stride,Ne=re.offset;if(J.isInstancedInterleavedBuffer){for(let Ie=0;Ie<k.locationSize;Ie++)p(k.location+Ie,J.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ie=0;Ie<k.locationSize;Ie++)m(k.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ie=0;Ie<k.locationSize;Ie++)_(k.location+Ie,qe/k.locationSize,ct,he,Ee*ft,(Ne+qe/k.locationSize*Ie)*ft,Y)}else{if(re.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)p(k.location+J,re.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);n.bindBuffer(n.ARRAY_BUFFER,je);for(let J=0;J<k.locationSize;J++)_(k.location+J,qe/k.locationSize,ct,he,qe*ft,qe/k.locationSize*J*ft,Y)}}else if(X!==void 0){let he=X[se];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(k.location,he);break;case 3:n.vertexAttrib3fv(k.location,he);break;case 4:n.vertexAttrib4fv(k.location,he);break;default:n.vertexAttrib1fv(k.location,he)}}}}v()}function C(){P();for(let b in i){let R=i[b];for(let F in R){let O=R[F];for(let H in O)h(O[H].object),delete O[H];delete R[F]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let R=i[b.id];for(let F in R){let O=R[F];for(let H in O)h(O[H].object),delete O[H];delete R[F]}delete i[b.id]}function T(b){for(let R in i){let F=i[R];if(F[b.id]===void 0)continue;let O=F[b.id];for(let H in O)h(O[H].object),delete O[H];delete F[b.id]}}function P(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function lg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],h[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g]*u[g];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ni&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==fi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pi&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:C,maxSamples:E}}function hg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new qn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,S=p.clippingState||null;l.value=S,S=h(x,u,_,f);for(let C=0;C!==_;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,x){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let p=f+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==g;++_,S+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function ug(n){let e=new WeakMap;function t(o,a){return a===nh?o.mapping=fr:a===ih&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===nh||a===ih)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new wc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ls=4,p1=[.125,.215,.35,.446,.526,.582],_r=20,dg=256,$a=new ur,m1=new ce,l0=null,c0=0,h0=0,u0=!1,fg=new I,Us=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=fg}=r;l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),h0=this._renderer.getActiveMipmapLevel(),u0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(l0,c0,h0),this._renderer.xr.enabled=u0,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),h0=this._renderer.getActiveMipmapLevel(),u0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ht,format:ni,colorSpace:ir,depthBuffer:!1},s=x1(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x1(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pg(r)),this._blurMaterial=xg(r,e,t),this._ggxMaterial=mg(r,e,t)}return s}_compileMaterial(e){let t=new le(new Qt,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,s,r){let l=new zt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(m1),d.toneMapping=es,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Cn,new vn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(m1),p=!0);for(let _=0;_<6;_++){let S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let C=this._cubeSize;uo(s,S*C,_>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(g,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===fr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g1());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$a)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=.05+c*.95,f=d*u,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-Ls?i-x+Ls:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,uo(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(a,$a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,uo(e,m,p,3*g,2*g),s.setRenderTarget(e),s.render(a,$a)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_r-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):_r;m>_r&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);let p=[],v=0;for(let T=0;T<_r;++T){let P=T/g,M=Math.exp(-P*P/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=x,u.mipInt.value=_-i;let S=this._sizeLods[s],C=3*S*(s>_-Ls?s-_+Ls:0),E=4*(this._cubeSize-S);uo(t,C,E,3*S,2*S),l.setRenderTarget(t),l.render(d,$a)}};function pg(n){let e=[],t=[],i=[],s=n,r=n-Ls+1+p1.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ls?l=p1[o-n+Ls-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,g=3,m=2,p=1,v=new Float32Array(g*x*f),_=new Float32Array(m*x*f),S=new Float32Array(p*x*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,P=E>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(M,g*x*E),_.set(u,m*x*E);let b=[E,E,E,E,E,E];S.set(b,p*x*E)}let C=new Qt;C.setAttribute("position",new pn(v,g)),C.setAttribute("uv",new pn(_,m)),C.setAttribute("faceIndex",new pn(S,p)),i.push(new le(C,null)),s>Ls&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function x1(n,e,t){let i=new Dt(n,e,t);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function mg(n,e,t){return new _t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function xg(n,e,t){let i=new Float32Array(_r),s=new I(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function g1(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function _1(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}function gg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===nh||l===ih,h=l===fr||l===pr;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Us(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Us(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _g(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Jr("WebGLRenderer: "+i+" extension not supported."),s}}}function vg(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,x=d.attributes.position,g=0;if(f!==null){let v=f.array;g=f.version;for(let _=0,S=v.length;_<S;_+=3){let C=v[_+0],E=v[_+1],T=v[_+2];u.push(C,E,E,T,T,C)}}else if(x!==void 0){let v=x.array;g=x.version;for(let _=0,S=v.length/3-1;_<S;_+=3){let C=_+0,E=_+1,T=_+2;u.push(C,E,E,T,T,C)}}else return;let m=new(t0(u)?ma:pa)(u,1);m.version=g;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function bg(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,u*o,x),t.update(f,i,x))}function h(u,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,i,1)}function d(u,f,x,g){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,g,0,x);let p=0;for(let v=0;v<x;v++)p+=f[v]*g[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function yg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Mg(n,e,t){let i=new WeakMap,s=new pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let S=a.attributes.position.count*_,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*C*4*d),T=new da(E,S,C,d);T.type=pi,T.needsUpdate=!0;let P=_*4;for(let b=0;b<d;b++){let R=m[b],F=p[b],O=v[b],H=S*C*4*b;for(let G=0;G<R.count;G++){let X=G*P;f===!0&&(s.fromBufferAttribute(R,G),E[H+X+0]=s.x,E[H+X+1]=s.y,E[H+X+2]=s.z,E[H+X+3]=0),x===!0&&(s.fromBufferAttribute(F,G),E[H+X+4]=s.x,E[H+X+5]=s.y,E[H+X+6]=s.z,E[H+X+7]=0),g===!0&&(s.fromBufferAttribute(O,G),E[H+X+8]=s.x,E[H+X+9]=s.y,E[H+X+10]=s.z,E[H+X+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new Q(S,C)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Sg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var N1=new An,v1=new ya(1,1),O1=new da,B1=new Mc,z1=new ga,b1=[],y1=[],M1=new Float32Array(16),S1=new Float32Array(9),E1=new Float32Array(4);function mo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=b1[s];if(r===void 0&&(r=new Float32Array(s),b1[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xh(n,e){let t=y1[e];t===void 0&&(t=new Int32Array(e),y1[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Eg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function Tg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function Ag(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;E1.set(i),n.uniformMatrix2fv(this.addr,!1,E1),Yt(t,i)}}function Cg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;S1.set(i),n.uniformMatrix3fv(this.addr,!1,S1),Yt(t,i)}}function Rg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;M1.set(i),n.uniformMatrix4fv(this.addr,!1,M1),Yt(t,i)}}function Pg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function Dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function Lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function Ug(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function Ng(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function Bg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(v1.compareFunction=jd,r=v1):r=N1,t.setTexture2D(e||r,s)}function zg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||B1,s)}function kg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||z1,s)}function Hg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||O1,s)}function Vg(n){switch(n){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return qg;case 35674:return Ag;case 35675:return Cg;case 35676:return Rg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Lg;case 5125:return Ug;case 36294:return Fg;case 36295:return Ng;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Gg(n,e){n.uniform1fv(this.addr,e)}function Wg(n,e){let t=mo(e,this.size,2);n.uniform2fv(this.addr,t)}function Xg(n,e){let t=mo(e,this.size,3);n.uniform3fv(this.addr,t)}function Yg(n,e){let t=mo(e,this.size,4);n.uniform4fv(this.addr,t)}function $g(n,e){let t=mo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zg(n,e){let t=mo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kg(n,e){let t=mo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jg(n,e){n.uniform1iv(this.addr,e)}function Qg(n,e){n.uniform2iv(this.addr,e)}function jg(n,e){n.uniform3iv(this.addr,e)}function e6(n,e){n.uniform4iv(this.addr,e)}function t6(n,e){n.uniform1uiv(this.addr,e)}function n6(n,e){n.uniform2uiv(this.addr,e)}function i6(n,e){n.uniform3uiv(this.addr,e)}function s6(n,e){n.uniform4uiv(this.addr,e)}function r6(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||N1,r[o])}function o6(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||B1,r[o])}function a6(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||z1,r[o])}function l6(n,e,t){let i=this.cache,s=e.length,r=Xh(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||O1,r[o])}function c6(n){switch(n){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return $g;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return jg;case 35669:case 35673:return e6;case 5125:return t6;case 36294:return n6;case 36295:return i6;case 36296:return s6;case 35678:case 36198:case 36298:case 36306:case 35682:return r6;case 35679:case 36299:case 36307:return o6;case 35680:case 36300:case 36308:case 36293:return a6;case 36289:case 36303:case 36311:case 36292:return l6}}var f0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}},p0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c6(t.type)}},m0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},d0=/(\w+)(\])?(\[|\.)?/g;function w1(n,e){n.seq.push(e),n.map[e.id]=e}function h6(n,e,t){let i=n.name,s=i.length;for(d0.lastIndex=0;;){let r=d0.exec(i),o=d0.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){w1(t,c===void 0?new f0(a,n,e):new p0(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new m0(a),w1(t,d)),t=d}}}var fo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);h6(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function T1(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var u6=37297,d6=0;function f6(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var q1=new Je;function p6(n){it._getMatrix(q1,it.workingColorSpace,n);let e=`mat3( ${q1.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function A1(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+f6(n.getShaderSource(e),a)}else return r}function m6(n,e){let t=p6(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x6(n,e){let t;switch(e){case ro:t="Linear";break;case Jc:t="Reinhard";break;case Qc:t="Cineon";break;case jc:t="ACESFilmic";break;case th:t="AgX";break;case oo:t="Neutral";break;case eh:t="Custom";break;default:Xe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gh=new I;function g6(){it.getLuminanceCoefficients(Gh);let n=Gh.x.toFixed(4),e=Gh.y.toFixed(4),t=Gh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _6(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function v6(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b6(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Za(n){return n!==""}function C1(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R1(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y6=/^[ \t]*#include +<([\w\d./]+)>/gm;function x0(n){return n.replace(y6,S6)}var M6=new Map;function S6(n,e){let t=Ze[e];if(t===void 0){let i=M6.get(e);if(i!==void 0)t=Ze[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return x0(t)}var E6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P1(n){return n.replace(E6,w6)}function w6(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function I1(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function T6(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dr?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function q6(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A6(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function C6(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case $p:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function R6(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function P6(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=T6(t),c=q6(t),h=A6(t),d=C6(t),u=R6(t),f=_6(t),x=v6(r),g=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Za).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Za).join(`
`),p.length>0&&(p+=`
`)):(m=[I1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),p=[I1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?Ze.tonemapping_pars_fragment:"",t.toneMapping!==es?x6("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,m6("linearToOutputTexel",t.outputColorSpace),g6(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),o=x0(o),o=C1(o,t),o=R1(o,t),a=x0(a),a=C1(a,t),a=R1(a,t),o=P1(o),a=P1(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,S=v+p+a,C=T1(s,s.VERTEX_SHADER,_),E=T1(s,s.FRAGMENT_SHADER,S);s.attachShader(g,C),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(R){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(C)||"",H=s.getShaderInfoLog(E)||"",G=F.trim(),X=O.trim(),se=H.trim(),k=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,C,E);else{let he=A1(s,C,"vertex"),qe=A1(s,E,"fragment");tt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+he+`
`+qe)}else G!==""?Xe("WebGLProgram: Program Info Log:",G):(X===""||se==="")&&(re=!1);re&&(R.diagnostics={runnable:k,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:se,prefix:p}})}s.deleteShader(C),s.deleteShader(E),P=new fo(s,g),M=b6(s,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,u6)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d6++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=E,this}var I6=0,g0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _0(e),t.set(e,i)),i}},_0=class{constructor(e){this.id=I6++,this.code=e,this.usedTimes=0}};function D6(n,e,t,i,s,r,o){let a=new fa,l=new g0,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,R,F,O){let H=F.fog,G=O.geometry,X=M.isMeshStandardMaterial?F.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),k=se&&se.mapping===Ha?se.image.height:null,re=x[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&Xe("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qe=he!==void 0?he.length:0,ze=0;G.morphAttributes.position!==void 0&&(ze=1),G.morphAttributes.normal!==void 0&&(ze=2),G.morphAttributes.color!==void 0&&(ze=3);let je,ct,ft,Y;if(re){let xt=Ci[re];je=xt.vertexShader,ct=xt.fragmentShader}else je=M.vertexShader,ct=M.fragmentShader,l.update(M),ft=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);let J=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,et=!!M.map,vt=!!M.matcap,Ve=!!se,ee=!!M.aoMap,A=!!M.lightMap,j=!!M.bumpMap,ae=!!M.normalMap,de=!!M.displacementMap,ie=!!M.emissiveMap,Te=!!M.metalnessMap,xe=!!M.roughnessMap,Se=M.anisotropy>0,q=M.clearcoat>0,y=M.dispersion>0,N=M.iridescence>0,W=M.sheen>0,K=M.transmission>0,V=Se&&!!M.anisotropyMap,De=q&&!!M.clearcoatMap,_e=q&&!!M.clearcoatNormalMap,Ue=q&&!!M.clearcoatRoughnessMap,Pe=N&&!!M.iridescenceMap,te=N&&!!M.iridescenceThicknessMap,fe=W&&!!M.sheenColorMap,He=W&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Me=!!M.specularColorMap,We=!!M.specularIntensityMap,D=K&&!!M.transmissionMap,be=K&&!!M.thicknessMap,pe=!!M.gradientMap,me=!!M.alphaMap,oe=M.alphaTest>0,$=!!M.alphaHash,Ce=!!M.extensions,$e=es;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&($e=n.toneMapping);let qt={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:je,fragmentShader:ct,defines:M.defines,customVertexShaderID:ft,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ir,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:vt,envMap:Ve,envMapMode:Ve&&se.mapping,envMapCubeUVHeight:k,aoMap:ee,lightMap:A,bumpMap:j,normalMap:ae,displacementMap:u&&de,emissiveMap:ie,normalMapObjectSpace:ae&&M.normalMapType===Qp,normalMapTangentSpace:ae&&M.normalMapType===Hh,metalnessMap:Te,roughnessMap:xe,anisotropy:Se,anisotropyMap:V,clearcoat:q,clearcoatMap:De,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ue,dispersion:y,iridescence:N,iridescenceMap:Pe,iridescenceThicknessMap:te,sheen:W,sheenColorMap:fe,sheenRoughnessMap:He,specularMap:Be,specularColorMap:Me,specularIntensityMap:We,transmission:K,transmissionMap:D,thicknessMap:be,gradientMap:pe,opaque:M.transparent===!1&&M.blending===tr&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:oe,alphaHash:$,combine:M.combine,mapUv:et&&g(M.map.channel),aoMapUv:ee&&g(M.aoMap.channel),lightMapUv:A&&g(M.lightMap.channel),bumpMapUv:j&&g(M.bumpMap.channel),normalMapUv:ae&&g(M.normalMap.channel),displacementMapUv:de&&g(M.displacementMap.channel),emissiveMapUv:ie&&g(M.emissiveMap.channel),metalnessMapUv:Te&&g(M.metalnessMap.channel),roughnessMapUv:xe&&g(M.roughnessMap.channel),anisotropyMapUv:V&&g(M.anisotropyMap.channel),clearcoatMapUv:De&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(M.sheenRoughnessMap.channel),specularMapUv:Be&&g(M.specularMap.channel),specularColorMapUv:Me&&g(M.specularColorMap.channel),specularIntensityMapUv:We&&g(M.specularIntensityMap.channel),transmissionMapUv:D&&g(M.transmissionMap.channel),thicknessMapUv:be&&g(M.thicknessMap.channel),alphaMapUv:me&&g(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ae||Se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(et||me),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:qe,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ht,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qi,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)b.push(R),b.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(v(b,M),_(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){let b=x[M.type],R;if(b){let F=Ci[b];R=mi.clone(F.uniforms)}else R=M.uniforms;return R}function C(M,b){let R;for(let F=0,O=h.length;F<O;F++){let H=h[F];if(H.cacheKey===b){R=H,++R.usedTimes;break}}return R===void 0&&(R=new P6(n,b,M,r),h.push(R)),R}function E(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:P}}function L6(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function U6(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function D1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function L1(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,x,g,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function a(d,u,f,x,g,m){let p=o(d,u,f,x,g,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,x,g,m){let p=o(d,u,f,x,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||U6),i.length>1&&i.sort(u||D1),s.length>1&&s.sort(u||D1)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function F6(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new L1,n.set(i,[o])):s>=r.length?(o=new L1,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function N6(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ce};break;case"SpotLight":t={position:new I,direction:new I,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function O6(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var B6=0;function z6(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k6(n){let e=new N6,t=O6(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new dt,o=new dt;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,v=0,_=0,S=0,C=0,E=0,T=0;c.sort(z6);for(let M=0,b=c.length;M<b;M++){let R=c[M],F=R.color,O=R.intensity,H=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*O,d+=F.g*O,u+=F.b*O;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],O);T++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let se=R.shadow,k=t.get(R);k.shadowIntensity=se.intensity,k.shadowBias=se.bias,k.shadowNormalBias=se.normalBias,k.shadowRadius=se.radius,k.shadowMapSize=se.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=R.shadow.matrix,v++}i.directional[f]=X,f++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(F).multiplyScalar(O),X.distance=H,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[g]=X;let se=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,se.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[g]=se.matrix,R.castShadow){let k=t.get(R);k.shadowIntensity=se.intensity,k.shadowBias=se.bias,k.shadowNormalBias=se.normalBias,k.shadowRadius=se.radius,k.shadowMapSize=se.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=G,S++}g++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(F).multiplyScalar(O),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=X,m++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let se=R.shadow,k=t.get(R);k.shadowIntensity=se.intensity,k.shadowBias=se.bias,k.shadowNormalBias=se.normalBias,k.shadowRadius=se.radius,k.shadowMapSize=se.mapSize,k.shadowCameraNear=se.camera.near,k.shadowCameraFar=se.camera.far,i.pointShadow[x]=k,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=R.shadow.matrix,_++}i.point[x]=X,x++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(O),X.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.directionalLength!==f||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,P.directionalLength=f,P.pointLength=x,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=T,i.version=B6++)}function l(c,h){let d=0,u=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(_.isSpotLight){let S=i.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function U1(n){let e=new k6(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function H6(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new U1(n),e.set(s,[a])):r>=o.length?(a=new U1(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var V6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G6=`uniform sampler2D shadow_pass;
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
}`;function W6(n,e,t){let i=new eo,s=new Q,r=new Q,o=new pt,a=new io({depthPacking:kh}),l=new Ic,c={},h=t.maxTextureSize,d={[Zi]:on,[on]:Zi,[qi]:qi},u=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:V6,fragmentShader:G6}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new Qt;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new le(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vd;let p=this.type;this.render=function(E,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Rn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==ti&&this.type===ti,H=p===ti&&this.type!==ti;for(let G=0,X=E.length;G<X;G++){let se=E[G],k=se.shadow;if(k===void 0){Xe("WebGLShadowMap:",se,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let re=k.getFrameExtents();if(s.multiply(re),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,k.mapSize.y=r.y)),k.map===null||O===!0||H===!0){let qe=this.type!==ti?{minFilter:rn,magFilter:rn}:{};k.map!==null&&k.map.dispose(),k.map=new Dt(s.x,s.y,qe),k.map.texture.name=se.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let he=k.getViewportCount();for(let qe=0;qe<he;qe++){let ze=k.getViewport(qe);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),F.viewport(o),k.updateMatrices(se,qe),i=k.getFrustum(),S(T,P,k.camera,se,this.type)}k.isPointLightShadow!==!0&&this.type===ti&&v(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,R)};function v(E,T){let P=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Dt(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,P,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,P,f,g,null)}function _(E,T,P,M){let b=null,R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)b=R;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=b.uuid,O=T.uuid,H=c[F];H===void 0&&(H={},c[F]=H);let G=H[O];G===void 0&&(G=b.clone(),H[O]=G,T.addEventListener("dispose",C)),b=G}if(b.visible=T.visible,b.wireframe=T.wireframe,M===ti?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=n.properties.get(b);F.light=P}return b}function S(E,T,P,M,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ti)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let O=e.update(E),H=E.material;if(Array.isArray(H)){let G=O.groups;for(let X=0,se=G.length;X<se;X++){let k=G[X],re=H[k.materialIndex];if(re&&re.visible){let he=_(E,re,M,b);E.onBeforeShadow(n,E,T,P,O,he,k),n.renderBufferDirect(P,null,O,he,E,k),E.onAfterShadow(n,E,T,P,O,he,k)}}}else if(H.visible){let G=_(E,H,M,b);E.onBeforeShadow(n,E,T,P,O,G,null),n.renderBufferDirect(P,null,O,G,E,null),E.onAfterShadow(n,E,T,P,O,G,null)}}let F=E.children;for(let O=0,H=F.length;O<H;O++)S(F[O],T,P,M,b)}function C(E){E.target.removeEventListener("dispose",C);for(let P in c){let M=c[P],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var X6={[Vc]:Gc,[Wc]:$c,[Xc]:Zc,[nr]:Yc,[Gc]:Vc,[$c]:Wc,[Zc]:Xc,[Yc]:nr};function Y6(n,e){function t(){let D=!1,be=new pt,pe=null,me=new pt(0,0,0,0);return{setMask:function(oe){pe!==oe&&!D&&(n.colorMask(oe,oe,oe,oe),pe=oe)},setLocked:function(oe){D=oe},setClear:function(oe,$,Ce,$e,qt){qt===!0&&(oe*=$e,$*=$e,Ce*=$e),be.set(oe,$,Ce,$e),me.equals(be)===!1&&(n.clearColor(oe,$,Ce,$e),me.copy(be))},reset:function(){D=!1,pe=null,me.set(-1,0,0,0)}}}function i(){let D=!1,be=!1,pe=null,me=null,oe=null;return{setReversed:function($){if(be!==$){let Ce=e.get("EXT_clip_control");$?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),be=$;let $e=oe;oe=null,this.setClear($e)}},getReversed:function(){return be},setTest:function($){$?J(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function($){pe!==$&&!D&&(n.depthMask($),pe=$)},setFunc:function($){if(be&&($=X6[$]),me!==$){switch($){case Vc:n.depthFunc(n.NEVER);break;case Gc:n.depthFunc(n.ALWAYS);break;case Wc:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Xc:n.depthFunc(n.EQUAL);break;case Yc:n.depthFunc(n.GEQUAL);break;case $c:n.depthFunc(n.GREATER);break;case Zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=$}},setLocked:function($){D=$},setClear:function($){oe!==$&&(be&&($=1-$),n.clearDepth($),oe=$)},reset:function(){D=!1,pe=null,me=null,oe=null,be=!1}}}function s(){let D=!1,be=null,pe=null,me=null,oe=null,$=null,Ce=null,$e=null,qt=null;return{setTest:function(xt){D||(xt?J(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(xt){be!==xt&&!D&&(n.stencilMask(xt),be=xt)},setFunc:function(xt,yi,ai){(pe!==xt||me!==yi||oe!==ai)&&(n.stencilFunc(xt,yi,ai),pe=xt,me=yi,oe=ai)},setOp:function(xt,yi,ai){($!==xt||Ce!==yi||$e!==ai)&&(n.stencilOp(xt,yi,ai),$=xt,Ce=yi,$e=ai)},setLocked:function(xt){D=xt},setClear:function(xt){qt!==xt&&(n.clearStencil(xt),qt=xt)},reset:function(){D=!1,be=null,pe=null,me=null,oe=null,$=null,Ce=null,$e=null,qt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,v=null,_=null,S=null,C=null,E=null,T=new ce(0,0,0),P=0,M=!1,b=null,R=null,F=null,O=null,H=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,se=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=se>=1):k.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=se>=2);let re=null,he={},qe=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),je=new pt().fromArray(qe),ct=new pt().fromArray(ze);function ft(D,be,pe,me){let oe=new Uint8Array(4),$=n.createTexture();n.bindTexture(D,$),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<pe;Ce++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(be+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return $}let Y={};Y[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(nr),j(!1),ae(Hd),J(n.CULL_FACE),ee(Rn);function J(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ee(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ne(D,be){return d[D]!==be?(n.bindFramebuffer(D,be),d[D]=be,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Ie(D,be){let pe=f,me=!1;if(D){pe=u.get(be),pe===void 0&&(pe=[],u.set(be,pe));let oe=D.textures;if(pe.length!==oe.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Ce=oe.length;$<Ce;$++)pe[$]=n.COLOR_ATTACHMENT0+$;pe.length=oe.length,me=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,me=!0);me&&n.drawBuffers(pe)}function et(D){return x!==D?(n.useProgram(D),x=D,!0):!1}let vt={[wi]:n.FUNC_ADD,[Ip]:n.FUNC_SUBTRACT,[Dp]:n.FUNC_REVERSE_SUBTRACT};vt[Lp]=n.MIN,vt[Up]=n.MAX;let Ve={[Fp]:n.ZERO,[ka]:n.ONE,[Np]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[Vp]:n.SRC_ALPHA_SATURATE,[kp]:n.DST_COLOR,[Bp]:n.DST_ALPHA,[Op]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[Hp]:n.ONE_MINUS_DST_COLOR,[zp]:n.ONE_MINUS_DST_ALPHA,[Gp]:n.CONSTANT_COLOR,[Wp]:n.ONE_MINUS_CONSTANT_COLOR,[Xp]:n.CONSTANT_ALPHA,[Yp]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(D,be,pe,me,oe,$,Ce,$e,qt,xt){if(D===Rn){g===!0&&(Ee(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),D!==Hc){if(D!==m||xt!==M){if((p!==wi||S!==wi)&&(n.blendEquation(n.FUNC_ADD),p=wi,S=wi),xt)switch(D){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ji:n.blendFunc(n.ONE,n.ONE);break;case Gd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",D);break}else switch(D){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gd:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wd:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",D);break}v=null,_=null,C=null,E=null,T.set(0,0,0),P=0,m=D,M=xt}return}oe=oe||be,$=$||pe,Ce=Ce||me,(be!==p||oe!==S)&&(n.blendEquationSeparate(vt[be],vt[oe]),p=be,S=oe),(pe!==v||me!==_||$!==C||Ce!==E)&&(n.blendFuncSeparate(Ve[pe],Ve[me],Ve[$],Ve[Ce]),v=pe,_=me,C=$,E=Ce),($e.equals(T)===!1||qt!==P)&&(n.blendColor($e.r,$e.g,$e.b,qt),T.copy($e),P=qt),m=D,M=!1}function A(D,be){D.side===qi?Ee(n.CULL_FACE):J(n.CULL_FACE);let pe=D.side===on;be&&(pe=!pe),j(pe),D.blending===tr&&D.transparent===!1?ee(Rn):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){b!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),b=D)}function ae(D){D!==Rp?(J(n.CULL_FACE),D!==R&&(D===Hd?n.cullFace(n.BACK):D===Pp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),R=D}function de(D){D!==F&&(X&&n.lineWidth(D),F=D)}function ie(D,be,pe){D?(J(n.POLYGON_OFFSET_FILL),(O!==be||H!==pe)&&(n.polygonOffset(be,pe),O=be,H=pe)):Ee(n.POLYGON_OFFSET_FILL)}function Te(D){D?J(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function xe(D){D===void 0&&(D=n.TEXTURE0+G-1),re!==D&&(n.activeTexture(D),re=D)}function Se(D,be,pe){pe===void 0&&(re===null?pe=n.TEXTURE0+G-1:pe=re);let me=he[pe];me===void 0&&(me={type:void 0,texture:void 0},he[pe]=me),(me.type!==D||me.texture!==be)&&(re!==pe&&(n.activeTexture(pe),re=pe),n.bindTexture(D,be||Y[D]),me.type=D,me.texture=be)}function q(){let D=he[re];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function W(){try{n.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function K(){try{n.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function _e(){try{n.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Ue(){try{n.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Pe(){try{n.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function te(){try{n.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function fe(D){je.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function He(D){ct.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ct.copy(D))}function Be(D,be){let pe=c.get(be);pe===void 0&&(pe=new WeakMap,c.set(be,pe));let me=pe.get(D);me===void 0&&(me=n.getUniformBlockIndex(be,D.name),pe.set(D,me))}function Me(D,be){let me=c.get(be).get(D);l.get(be)!==me&&(n.uniformBlockBinding(be,me,D.__bindingPointIndex),l.set(be,me))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,he={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,v=null,_=null,S=null,C=null,E=null,T=new ce(0,0,0),P=0,M=!1,b=null,R=null,F=null,O=null,H=null,je.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:Ee,bindFramebuffer:Ne,drawBuffers:Ie,useProgram:et,setBlending:ee,setMaterial:A,setFlipSided:j,setCullFace:ae,setLineWidth:de,setPolygonOffset:ie,setScissorTest:Te,activeTexture:xe,bindTexture:Se,unbindTexture:q,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:Pe,texImage3D:te,updateUBOMapping:Be,uniformBlockBinding:Me,texStorage2D:_e,texStorage3D:Ue,texSubImage2D:W,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:De,scissor:fe,viewport:He,reset:We}}function $6(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(q,y){return f?new OffscreenCanvas(q,y):ha("canvas")}function g(q,y,N){let W=1,K=Se(q);if((K.width>N||K.height>N)&&(W=N/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&q instanceof ImageBitmap||typeof VideoFrame<"u"&&q instanceof VideoFrame){let V=Math.floor(W*K.width),De=Math.floor(W*K.height);d===void 0&&(d=x(V,De));let _e=y?x(V,De):d;return _e.width=V,_e.height=De,_e.getContext("2d").drawImage(q,0,0,V,De),Xe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+De+")."),_e}else return"data"in q&&Xe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),q;return q}function m(q){return q.generateMipmaps}function p(q){n.generateMipmap(q)}function v(q){return q.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:q.isWebGL3DRenderTarget?n.TEXTURE_3D:q.isWebGLArrayRenderTarget||q.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(q,y,N,W,K=!1){if(q!==null){if(n[q]!==void 0)return n[q];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+q+"'")}let V=y;if(y===n.RED&&(N===n.FLOAT&&(V=n.R32F),N===n.HALF_FLOAT&&(V=n.R16F),N===n.UNSIGNED_BYTE&&(V=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.R8UI),N===n.UNSIGNED_SHORT&&(V=n.R16UI),N===n.UNSIGNED_INT&&(V=n.R32UI),N===n.BYTE&&(V=n.R8I),N===n.SHORT&&(V=n.R16I),N===n.INT&&(V=n.R32I)),y===n.RG&&(N===n.FLOAT&&(V=n.RG32F),N===n.HALF_FLOAT&&(V=n.RG16F),N===n.UNSIGNED_BYTE&&(V=n.RG8)),y===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RG8UI),N===n.UNSIGNED_SHORT&&(V=n.RG16UI),N===n.UNSIGNED_INT&&(V=n.RG32UI),N===n.BYTE&&(V=n.RG8I),N===n.SHORT&&(V=n.RG16I),N===n.INT&&(V=n.RG32I)),y===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGB8UI),N===n.UNSIGNED_SHORT&&(V=n.RGB16UI),N===n.UNSIGNED_INT&&(V=n.RGB32UI),N===n.BYTE&&(V=n.RGB8I),N===n.SHORT&&(V=n.RGB16I),N===n.INT&&(V=n.RGB32I)),y===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),N===n.UNSIGNED_INT&&(V=n.RGBA32UI),N===n.BYTE&&(V=n.RGBA8I),N===n.SHORT&&(V=n.RGBA16I),N===n.INT&&(V=n.RGBA32I)),y===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),y===n.RGBA){let De=K?la:it.getTransfer(W);N===n.FLOAT&&(V=n.RGBA32F),N===n.HALF_FLOAT&&(V=n.RGBA16F),N===n.UNSIGNED_BYTE&&(V=De===ht?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(q,y){let N;return q?y===null||y===Ds||y===lo?N=n.DEPTH24_STENCIL8:y===pi?N=n.DEPTH32F_STENCIL8:y===ao&&(N=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ds||y===lo?N=n.DEPTH_COMPONENT24:y===pi?N=n.DEPTH_COMPONENT32F:y===ao&&(N=n.DEPTH_COMPONENT16),N}function C(q,y){return m(q)===!0||q.isFramebufferTexture&&q.minFilter!==rn&&q.minFilter!==kn?Math.log2(Math.max(y.width,y.height))+1:q.mipmaps!==void 0&&q.mipmaps.length>0?q.mipmaps.length:q.isCompressedTexture&&Array.isArray(q.image)?y.mipmaps.length:1}function E(q){let y=q.target;y.removeEventListener("dispose",E),P(y),y.isVideoTexture&&h.delete(y)}function T(q){let y=q.target;y.removeEventListener("dispose",T),b(y)}function P(q){let y=i.get(q);if(y.__webglInit===void 0)return;let N=q.source,W=u.get(N);if(W){let K=W[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(q),Object.keys(W).length===0&&u.delete(N)}i.remove(q)}function M(q){let y=i.get(q);n.deleteTexture(y.__webglTexture);let N=q.source,W=u.get(N);delete W[y.__cacheKey],o.memory.textures--}function b(q){let y=i.get(q);if(q.depthTexture&&(q.depthTexture.dispose(),i.remove(q.depthTexture)),q.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let K=0;K<y.__webglFramebuffer[W].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[W][K]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let N=q.textures;for(let W=0,K=N.length;W<K;W++){let V=i.get(N[W]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(N[W])}i.remove(q)}let R=0;function F(){R=0}function O(){let q=R;return q>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+q+" texture units while this GPU supports only "+s.maxTextures),R+=1,q}function H(q){let y=[];return y.push(q.wrapS),y.push(q.wrapT),y.push(q.wrapR||0),y.push(q.magFilter),y.push(q.minFilter),y.push(q.anisotropy),y.push(q.internalFormat),y.push(q.format),y.push(q.type),y.push(q.generateMipmaps),y.push(q.premultiplyAlpha),y.push(q.flipY),y.push(q.unpackAlignment),y.push(q.colorSpace),y.join()}function G(q,y){let N=i.get(q);if(q.isVideoTexture&&Te(q),q.isRenderTargetTexture===!1&&q.isExternalTexture!==!0&&q.version>0&&N.__version!==q.version){let W=q.image;if(W===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,q,y);return}}else q.isExternalTexture&&(N.__webglTexture=q.sourceTexture?q.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function X(q,y){let N=i.get(q);if(q.isRenderTargetTexture===!1&&q.version>0&&N.__version!==q.version){Y(N,q,y);return}else q.isExternalTexture&&(N.__webglTexture=q.sourceTexture?q.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function se(q,y){let N=i.get(q);if(q.isRenderTargetTexture===!1&&q.version>0&&N.__version!==q.version){Y(N,q,y);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function k(q,y){let N=i.get(q);if(q.version>0&&N.__version!==q.version){J(N,q,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}let re={[gc]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},he={[rn]:n.NEAREST,[Kp]:n.NEAREST_MIPMAP_NEAREST,[Va]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[sh]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},qe={[jp]:n.NEVER,[r1]:n.ALWAYS,[e1]:n.LESS,[jd]:n.LEQUAL,[t1]:n.EQUAL,[s1]:n.GEQUAL,[n1]:n.GREATER,[i1]:n.NOTEQUAL};function ze(q,y){if(y.type===pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kn||y.magFilter===sh||y.magFilter===Va||y.magFilter===Ai||y.minFilter===kn||y.minFilter===sh||y.minFilter===Va||y.minFilter===Ai)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(q,n.TEXTURE_WRAP_S,re[y.wrapS]),n.texParameteri(q,n.TEXTURE_WRAP_T,re[y.wrapT]),(q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY)&&n.texParameteri(q,n.TEXTURE_WRAP_R,re[y.wrapR]),n.texParameteri(q,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(q,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(q,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(q,n.TEXTURE_COMPARE_FUNC,qe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==Va&&y.minFilter!==Ai||y.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(q,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function je(q,y){let N=!1;q.__webglInit===void 0&&(q.__webglInit=!0,y.addEventListener("dispose",E));let W=y.source,K=u.get(W);K===void 0&&(K={},u.set(W,K));let V=H(y);if(V!==q.__cacheKey){K[V]===void 0&&(K[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[V].usedTimes++;let De=K[q.__cacheKey];De!==void 0&&(K[q.__cacheKey].usedTimes--,De.usedTimes===0&&M(y)),q.__cacheKey=V,q.__webglTexture=K[V].texture}return N}function ct(q,y,N){return Math.floor(Math.floor(q/N)/y)}function ft(q,y,N,W){let V=q.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,N,W,y.data);else{V.sort((te,fe)=>te.start-fe.start);let De=0;for(let te=1;te<V.length;te++){let fe=V[De],He=V[te],Be=fe.start+fe.count,Me=ct(He.start,y.width,4),We=ct(fe.start,y.width,4);He.start<=Be+1&&Me===We&&ct(He.start+He.count-1,y.width,4)===Me?fe.count=Math.max(fe.count,He.start+He.count-fe.start):(++De,V[De]=He)}V.length=De+1;let _e=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let te=0,fe=V.length;te<fe;te++){let He=V[te],Be=Math.floor(He.start/4),Me=Math.ceil(He.count/4),We=Be%y.width,D=Math.floor(Be/y.width),be=Me,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,We,D,be,pe,N,W,y.data)}q.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function Y(q,y,N){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);let K=je(q,y),V=y.source;t.bindTexture(W,q.__webglTexture,n.TEXTURE0+N);let De=i.get(V);if(V.version!==De.__version||K===!0){t.activeTexture(n.TEXTURE0+N);let _e=it.getPrimaries(it.workingColorSpace),Ue=y.colorSpace===ts?null:it.getPrimaries(y.colorSpace),Pe=y.colorSpace===ts||_e===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let te=g(y.image,!1,s.maxTextureSize);te=xe(y,te);let fe=r.convert(y.format,y.colorSpace),He=r.convert(y.type),Be=_(y.internalFormat,fe,He,y.colorSpace,y.isVideoTexture);ze(W,y);let Me,We=y.mipmaps,D=y.isVideoTexture!==!0,be=De.__version===void 0||K===!0,pe=V.dataReady,me=C(y,te);if(y.isDepthTexture)Be=S(y.format===co,y.type),be&&(D?t.texStorage2D(n.TEXTURE_2D,1,Be,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Be,te.width,te.height,0,fe,He,null));else if(y.isDataTexture)if(We.length>0){D&&be&&t.texStorage2D(n.TEXTURE_2D,me,Be,We[0].width,We[0].height);for(let oe=0,$=We.length;oe<$;oe++)Me=We[oe],D?pe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,fe,He,Me.data):t.texImage2D(n.TEXTURE_2D,oe,Be,Me.width,Me.height,0,fe,He,Me.data);y.generateMipmaps=!1}else D?(be&&t.texStorage2D(n.TEXTURE_2D,me,Be,te.width,te.height),pe&&ft(y,te,fe,He)):t.texImage2D(n.TEXTURE_2D,0,Be,te.width,te.height,0,fe,He,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Be,We[0].width,We[0].height,te.depth);for(let oe=0,$=We.length;oe<$;oe++)if(Me=We[oe],y.format!==ni)if(fe!==null)if(D){if(pe)if(y.layerUpdates.size>0){let Ce=a0(Me.width,Me.height,y.format,y.type);for(let $e of y.layerUpdates){let qt=Me.data.subarray($e*Ce/Me.data.BYTES_PER_ELEMENT,($e+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,$e,Me.width,Me.height,1,fe,qt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,te.depth,fe,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Be,Me.width,Me.height,te.depth,0,Me.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,te.depth,fe,He,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Be,Me.width,Me.height,te.depth,0,fe,He,Me.data)}else{D&&be&&t.texStorage2D(n.TEXTURE_2D,me,Be,We[0].width,We[0].height);for(let oe=0,$=We.length;oe<$;oe++)Me=We[oe],y.format!==ni?fe!==null?D?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Be,Me.width,Me.height,0,Me.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?pe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,fe,He,Me.data):t.texImage2D(n.TEXTURE_2D,oe,Be,Me.width,Me.height,0,fe,He,Me.data)}else if(y.isDataArrayTexture)if(D){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Be,te.width,te.height,te.depth),pe)if(y.layerUpdates.size>0){let oe=a0(te.width,te.height,y.format,y.type);for(let $ of y.layerUpdates){let Ce=te.data.subarray($*oe/te.data.BYTES_PER_ELEMENT,($+1)*oe/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,fe,He,Ce)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,He,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,te.width,te.height,te.depth,0,fe,He,te.data);else if(y.isData3DTexture)D?(be&&t.texStorage3D(n.TEXTURE_3D,me,Be,te.width,te.height,te.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,He,te.data)):t.texImage3D(n.TEXTURE_3D,0,Be,te.width,te.height,te.depth,0,fe,He,te.data);else if(y.isFramebufferTexture){if(be)if(D)t.texStorage2D(n.TEXTURE_2D,me,Be,te.width,te.height);else{let oe=te.width,$=te.height;for(let Ce=0;Ce<me;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Be,oe,$,0,fe,He,null),oe>>=1,$>>=1}}else if(We.length>0){if(D&&be){let oe=Se(We[0]);t.texStorage2D(n.TEXTURE_2D,me,Be,oe.width,oe.height)}for(let oe=0,$=We.length;oe<$;oe++)Me=We[oe],D?pe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,fe,He,Me):t.texImage2D(n.TEXTURE_2D,oe,Be,fe,He,Me);y.generateMipmaps=!1}else if(D){if(be){let oe=Se(te);t.texStorage2D(n.TEXTURE_2D,me,Be,oe.width,oe.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,He,te)}else t.texImage2D(n.TEXTURE_2D,0,Be,fe,He,te);m(y)&&p(W),De.__version=V.version,y.onUpdate&&y.onUpdate(y)}q.__version=y.version}function J(q,y,N){if(y.image.length!==6)return;let W=je(q,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+N);let V=i.get(K);if(K.version!==V.__version||W===!0){t.activeTexture(n.TEXTURE0+N);let De=it.getPrimaries(it.workingColorSpace),_e=y.colorSpace===ts?null:it.getPrimaries(y.colorSpace),Ue=y.colorSpace===ts||De===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!Pe&&!te?fe[$]=g(y.image[$],!0,s.maxCubemapSize):fe[$]=te?y.image[$].image:y.image[$],fe[$]=xe(y,fe[$]);let He=fe[0],Be=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),We=_(y.internalFormat,Be,Me,y.colorSpace),D=y.isVideoTexture!==!0,be=V.__version===void 0||W===!0,pe=K.dataReady,me=C(y,He);ze(n.TEXTURE_CUBE_MAP,y);let oe;if(Pe){D&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,We,He.width,He.height);for(let $=0;$<6;$++){oe=fe[$].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){let $e=oe[Ce];y.format!==ni?Be!==null?D?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,$e.width,$e.height,Be,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,We,$e.width,$e.height,0,$e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,$e.width,$e.height,Be,Me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,We,$e.width,$e.height,0,Be,Me,$e.data)}}}else{if(oe=y.mipmaps,D&&be){oe.length>0&&me++;let $=Se(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,We,$.width,$.height)}for(let $=0;$<6;$++)if(te){D?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Be,Me,fe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,fe[$].width,fe[$].height,0,Be,Me,fe[$].data);for(let Ce=0;Ce<oe.length;Ce++){let qt=oe[Ce].image[$].image;D?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,qt.width,qt.height,Be,Me,qt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,We,qt.width,qt.height,0,Be,Me,qt.data)}}else{D?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Be,Me,fe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,Be,Me,fe[$]);for(let Ce=0;Ce<oe.length;Ce++){let $e=oe[Ce];D?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,Be,Me,$e.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,We,Be,Me,$e.image[$])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),V.__version=K.version,y.onUpdate&&y.onUpdate(y)}q.__version=y.version}function Ee(q,y,N,W,K,V){let De=r.convert(N.format,N.colorSpace),_e=r.convert(N.type),Ue=_(N.internalFormat,De,_e,N.colorSpace),Pe=i.get(y),te=i.get(N);if(te.__renderTarget=y,!Pe.__hasExternalTextures){let fe=Math.max(1,y.width>>V),He=Math.max(1,y.height>>V);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,V,Ue,fe,He,y.depth,0,De,_e,null):t.texImage2D(K,V,Ue,fe,He,0,De,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,q),ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,K,te.__webglTexture,0,de(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,K,te.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(q,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,q),y.depthBuffer){let W=y.depthTexture,K=W&&W.isDepthTexture?W.type:null,V=S(y.stencilBuffer,K),De=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=de(y);ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,V,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,V,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,V,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,q)}else{let W=y.textures;for(let K=0;K<W.length;K++){let V=W[K],De=r.convert(V.format,V.colorSpace),_e=r.convert(V.type),Ue=_(V.internalFormat,De,_e,V.colorSpace),Pe=de(y);N&&ie(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ue,y.width,y.height):ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Ue,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(q,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,q),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(y.depthTexture);W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);let K=W.__webglTexture,V=de(y);if(y.depthTexture.format===Zr)ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(y.depthTexture.format===co)ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function et(q){let y=i.get(q),N=q.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==q.depthTexture){let W=q.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=W}if(q.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let W=q.texture.mipmaps;W&&W.length>0?Ie(y.__webglFramebuffer[0],q):Ie(y.__webglFramebuffer,q)}else if(N){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),Ne(y.__webglDepthbuffer[W],q,!1);else{let K=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}else{let W=q.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ne(y.__webglDepthbuffer,q,!1);else{let K=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(q,y,N){let W=i.get(q);y!==void 0&&Ee(W.__webglFramebuffer,q,q.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&et(q)}function Ve(q){let y=q.texture,N=i.get(q),W=i.get(y);q.addEventListener("dispose",T);let K=q.textures,V=q.isWebGLCubeRenderTarget===!0,De=K.length>1;if(De||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,o.memory.textures++),V){N.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[_e]=[];for(let Ue=0;Ue<y.mipmaps.length;Ue++)N.__webglFramebuffer[_e][Ue]=n.createFramebuffer()}else N.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)N.__webglFramebuffer[_e]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(De)for(let _e=0,Ue=K.length;_e<Ue;_e++){let Pe=i.get(K[_e]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(q.samples>0&&ie(q)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let _e=0;_e<K.length;_e++){let Ue=K[_e];N.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[_e]);let Pe=r.convert(Ue.format,Ue.colorSpace),te=r.convert(Ue.type),fe=_(Ue.internalFormat,Pe,te,Ue.colorSpace,q.isXRRenderTarget===!0),He=de(q);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,fe,q.width,q.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,N.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),q.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(N.__webglDepthRenderbuffer,q,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ze(n.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)Ee(N.__webglFramebuffer[_e][Ue],q,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue);else Ee(N.__webglFramebuffer[_e],q,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let _e=0,Ue=K.length;_e<Ue;_e++){let Pe=K[_e],te=i.get(Pe),fe=n.TEXTURE_2D;(q.isWebGL3DRenderTarget||q.isWebGLArrayRenderTarget)&&(fe=q.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),ze(fe,Pe),Ee(N.__webglFramebuffer,q,Pe,n.COLOR_ATTACHMENT0+_e,fe,0),m(Pe)&&p(fe)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((q.isWebGL3DRenderTarget||q.isWebGLArrayRenderTarget)&&(_e=q.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,W.__webglTexture),ze(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)Ee(N.__webglFramebuffer[Ue],q,y,n.COLOR_ATTACHMENT0,_e,Ue);else Ee(N.__webglFramebuffer,q,y,n.COLOR_ATTACHMENT0,_e,0);m(y)&&p(_e),t.unbindTexture()}q.depthBuffer&&et(q)}function ee(q){let y=q.textures;for(let N=0,W=y.length;N<W;N++){let K=y[N];if(m(K)){let V=v(q),De=i.get(K).__webglTexture;t.bindTexture(V,De),p(V),t.unbindTexture()}}}let A=[],j=[];function ae(q){if(q.samples>0){if(ie(q)===!1){let y=q.textures,N=q.width,W=q.height,K=n.COLOR_BUFFER_BIT,V=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(q),_e=y.length>1;if(_e)for(let Pe=0;Pe<y.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Ue=q.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){if(q.resolveDepthBuffer&&(q.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),q.stencilBuffer&&q.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let te=i.get(y[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,N,W,0,0,N,W,K,n.NEAREST),l===!0&&(A.length=0,j.length=0,A.push(n.COLOR_ATTACHMENT0+Pe),q.depthBuffer&&q.resolveDepthBuffer===!1&&(A.push(V),j.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Pe=0;Pe<y.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);let te=i.get(y[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(q.depthBuffer&&q.resolveDepthBuffer===!1&&l){let y=q.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function de(q){return Math.min(s.maxSamples,q.samples)}function ie(q){let y=i.get(q);return q.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Te(q){let y=o.render.frame;h.get(q)!==y&&(h.set(q,y),q.update())}function xe(q,y){let N=q.colorSpace,W=q.format,K=q.type;return q.isCompressedTexture===!0||q.isVideoTexture===!0||N!==ir&&N!==ts&&(it.getTransfer(N)===ht?(W!==ni||K!==fi)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",N)),y}function Se(q){return typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement?(c.width=q.naturalWidth||q.width,c.height=q.naturalHeight||q.height):typeof VideoFrame<"u"&&q instanceof VideoFrame?(c.width=q.displayWidth,c.height=q.displayHeight):(c.width=q.width,c.height=q.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=se,this.setTextureCube=k,this.rebindTextures=vt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ie}function Z6(n,e){function t(i,s=ts){let r,o=it.getTransfer(s);if(i===fi)return n.UNSIGNED_BYTE;if(i===oh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ah)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yd)return n.BYTE;if(i===$d)return n.SHORT;if(i===ao)return n.UNSIGNED_SHORT;if(i===rh)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Ht)return n.HALF_FLOAT;if(i===Jd)return n.ALPHA;if(i===Qd)return n.RGB;if(i===ni)return n.RGBA;if(i===Zr)return n.DEPTH_COMPONENT;if(i===co)return n.DEPTH_STENCIL;if(i===lh)return n.RED;if(i===ch)return n.RED_INTEGER;if(i===hh)return n.RG;if(i===uh)return n.RG_INTEGER;if(i===dh)return n.RGBA_INTEGER;if(i===Ga||i===Wa||i===Xa||i===Ya)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fh||i===ph||i===mh||i===xh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===_h||i===vh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gh||i===_h)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bh||i===yh||i===Mh||i===Sh||i===Eh||i===wh||i===Th||i===qh||i===Ah||i===Ch||i===Rh||i===Ph||i===Ih||i===Dh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ah)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ih)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lh||i===Uh||i===Fh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lh)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nh||i===Oh||i===Bh||i===zh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var K6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J6=`
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

}`,v0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _t({vertexShader:K6,fragmentShader:J6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},b0=class extends Ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,g=typeof XRWebGLBinding<"u",m=new v0,p={},v=t.getContextAttributes(),_=null,S=null,C=[],E=[],T=new Q,P=null,M=new zt;M.viewport=new pt;let b=new zt;b.viewport=new pt;let R=[M,b],F=new kc,O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=C[Y];return J===void 0&&(J=new jr,C[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=C[Y];return J===void 0&&(J=new jr,C[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=C[Y];return J===void 0&&(J=new jr,C[Y]=J),J.getHandSpace()};function G(Y){let J=E.indexOf(Y.inputSource);if(J===-1)return;let Ee=C[J];Ee!==void 0&&(Ee.update(Y.inputSource,Y.frame,c||o),Ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",se);for(let Y=0;Y<C.length;Y++){let J=E[Y];J!==null&&(E[Y]=null,C[Y].disconnect(J))}O=null,H=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(_),f=null,u=null,d=null,s=null,S=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ne=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?co:Zr,Ne=v.stencil?lo:Ds);let et={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(et),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Dt(u.textureWidth,u.textureHeight,{format:ni,type:fi,depthTexture:new ya(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Dt(f.framebufferWidth,f.framebufferHeight,{format:ni,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(Y){for(let J=0;J<Y.removed.length;J++){let Ee=Y.removed[J],Ne=E.indexOf(Ee);Ne>=0&&(E[Ne]=null,C[Ne].disconnect(Ee))}for(let J=0;J<Y.added.length;J++){let Ee=Y.added[J],Ne=E.indexOf(Ee);if(Ne===-1){for(let et=0;et<C.length;et++)if(et>=E.length){E.push(Ee),Ne=et;break}else if(E[et]===null){E[et]=Ee,Ne=et;break}if(Ne===-1)break}let Ie=C[Ne];Ie&&Ie.connect(Ee)}}let k=new I,re=new I;function he(Y,J,Ee){k.setFromMatrixPosition(J.matrixWorld),re.setFromMatrixPosition(Ee.matrixWorld);let Ne=k.distanceTo(re),Ie=J.projectionMatrix.elements,et=Ee.projectionMatrix.elements,vt=Ie[14]/(Ie[10]-1),Ve=Ie[14]/(Ie[10]+1),ee=(Ie[9]+1)/Ie[5],A=(Ie[9]-1)/Ie[5],j=(Ie[8]-1)/Ie[0],ae=(et[8]+1)/et[0],de=vt*j,ie=vt*ae,Te=Ne/(-j+ae),xe=Te*-j;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Se=vt+Te,q=Ve+Te,y=de-xe,N=ie+(Ne-xe),W=ee*Ve/q*Se,K=A*Ve/q*Se;Y.projectionMatrix.makePerspective(y,N,W,K,Se,q),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function qe(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,Ee=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),F.near=b.near=M.near=J,F.far=b.far=M.far=Ee,(O!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,H=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Ne=Y.parent,Ie=F.cameras;qe(F,Ne);for(let et=0;et<Ie.length;et++)qe(Ie[et],Ne);Ie.length===2?he(F,M,b):F.projectionMatrix.copy(M.projectionMatrix),ze(Y,F,Ne)};function ze(Y,J,Ee){Ee===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(Ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let je=null;function ct(Y,J){if(h=J.getViewerPose(c||o),x=J,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ne=!1;Ee.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let Ve=0;Ve<Ee.length;Ve++){let ee=Ee[Ve],A=null;if(f!==null)A=f.getViewport(ee);else{let ae=d.getViewSubImage(u,ee);A=ae.viewport,Ve===0&&(e.setRenderTargetTextures(S,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(S))}let j=R[Ve];j===void 0&&(j=new zt,j.layers.enable(Ve),j.viewport=new pt,R[Ve]=j),j.matrix.fromArray(ee.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ee.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(A.x,A.y,A.width,A.height),Ve===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(j)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Ve=d.getDepthInformation(Ee[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,s.renderState)}if(Ie&&Ie.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<Ee.length;Ve++){let ee=Ee[Ve].camera;if(ee){let A=p[ee];A||(A=new Ma,p[ee]=A);let j=d.getCameraImage(ee);A.sourceTexture=j}}}}for(let Ee=0;Ee<C.length;Ee++){let Ne=E[Ee],Ie=C[Ee];Ne!==null&&Ie!==void 0&&Ie.update(Ne,J,c||o)}je&&je(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}let ft=new F1;ft.setAnimationLoop(ct),this.setAnimationLoop=function(Y){je=Y},this.dispose=function(){}}},gr=new ei,Q6=new dt;function j6(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,i0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,gr.copy(S),gr.x*=-1,gr.y*=-1,gr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(Q6.makeRotationFromEuler(gr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function e7(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=s[v.id];S===void 0&&(x(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",m));let C=_.program;i.updateUBOMapping(v,C);let E=e.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){let _=d();v.__bindingPointIndex=_;let S=n.createBuffer(),C=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,T=S.length;E<T;E++){let P=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,b=P.length;M<b;M++){let R=P[M];if(f(R,E,M,C)===!0){let F=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],H=0;for(let G=0;G<O.length;G++){let X=O[G],se=g(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,F+H,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,H),H+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,S,C){let E=v.value,T=_+"_"+S;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let P=C[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function x(v){let _=v.uniforms,S=0,C=16;for(let T=0,P=_.length;T<P;T++){let M=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,R=M.length;b<R;b++){let F=M[b],O=Array.isArray(F.value)?F.value:[F.value];for(let H=0,G=O.length;H<G;H++){let X=O[H],se=g(X),k=S%C,re=k%se.boundary,he=k+re;S+=re,he!==0&&C-he<se.storage&&(S+=C-he),F.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=se.storage}}}let E=S%C;return E>0&&(S+=C-E),v.__size=S,v.__cache={},this}function g(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var t7=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),ns=null;function n7(){return ns===null&&(ns=new _a(t7,32,32,hh,Ht),ns.minFilter=kn,ns.magFilter=kn,ns.wrapS=Si,ns.wrapT=Si,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var po=class{constructor(e={}){let{canvas:t=o1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let x=new Set([dh,uh,ch]),g=new Set([fi,Ds,ao,lo,oh,ah]),m=new Uint32Array(4),p=new Int32Array(4),v=null,_=null,S=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,T=!1;this._outputColorSpace=sn;let P=0,M=0,b=null,R=-1,F=null,O=new pt,H=new pt,G=null,X=new ce(0),se=0,k=t.width,re=t.height,he=1,qe=null,ze=null,je=new pt(0,0,k,re),ct=new pt(0,0,k,re),ft=!1,Y=new eo,J=!1,Ee=!1,Ne=new dt,Ie=new I,et=new pt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function ee(){return b===null?he:1}let A=i;function j(w,L){return t.getContext(w,L)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),A===null){let L="webgl2";if(A=j(L,w),A===null)throw j(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let ae,de,ie,Te,xe,Se,q,y,N,W,K,V,De,_e,Ue,Pe,te,fe,He,Be,Me,We,D,be;function pe(){ae=new _g(A),ae.init(),We=new Z6(A,ae),de=new cg(A,ae,e,We),ie=new Y6(A,ae),de.reversedDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),Te=new yg(A),xe=new L6,Se=new $6(A,ae,ie,xe,de,We,Te),q=new ug(E),y=new gg(E),N=new w4(A),D=new ag(A,N),W=new vg(A,N,Te,D),K=new Sg(A,W,N,Te),He=new Mg(A,de,Se),Pe=new hg(xe),V=new D6(E,q,y,ae,de,D,Pe),De=new j6(E,xe),_e=new F6,Ue=new H6(ae),fe=new og(E,q,y,ie,K,f,l),te=new W6(E,K,de),be=new e7(A,Te,de,ie),Be=new lg(A,ae,Te),Me=new bg(A,ae,Te),Te.programs=V.programs,E.capabilities=de,E.extensions=ae,E.properties=xe,E.renderLists=_e,E.shadowMap=te,E.state=ie,E.info=Te}pe();let me=new b0(E,A);this.xr=me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(w){w!==void 0&&(he=w,this.setSize(k,re,!1))},this.getSize=function(w){return w.set(k,re)},this.setSize=function(w,L,B=!0){if(me.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,re=L,t.width=Math.floor(w*he),t.height=Math.floor(L*he),B===!0&&(t.style.width=w+"px",t.style.height=L+"px"),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(k*he,re*he).floor()},this.setDrawingBufferSize=function(w,L,B){k=w,re=L,he=B,t.width=Math.floor(w*B),t.height=Math.floor(L*B),this.setViewport(0,0,w,L)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(je)},this.setViewport=function(w,L,B,z){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,L,B,z),ie.viewport(O.copy(je).multiplyScalar(he).round())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,L,B,z){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,L,B,z),ie.scissor(H.copy(ct).multiplyScalar(he).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){ie.setScissorTest(ft=w)},this.setOpaqueSort=function(w){qe=w},this.setTransparentSort=function(w){ze=w},this.getClearColor=function(w){return w.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(w=!0,L=!0,B=!0){let z=0;if(w){let U=!1;if(b!==null){let ue=b.texture.format;U=x.has(ue)}if(U){let ue=b.texture.type,ye=g.has(ue),Re=fe.getClearColor(),we=fe.getClearAlpha(),ke=Re.r,Ge=Re.g,Fe=Re.b;ye?(m[0]=ke,m[1]=Ge,m[2]=Fe,m[3]=we,A.clearBufferuiv(A.COLOR,0,m)):(p[0]=ke,p[1]=Ge,p[2]=Fe,p[3]=we,A.clearBufferiv(A.COLOR,0,p))}else z|=A.COLOR_BUFFER_BIT}L&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),fe.dispose(),_e.dispose(),Ue.dispose(),xe.dispose(),q.dispose(),y.dispose(),K.dispose(),D.dispose(),be.dispose(),V.dispose(),me.dispose(),me.removeEventListener("sessionstart",yf),me.removeEventListener("sessionend",Mf),Ws.stop()};function oe(w){w.preventDefault(),n0("WebGLRenderer: Context Lost."),T=!0}function $(){n0("WebGLRenderer: Context Restored."),T=!1;let w=Te.autoReset,L=te.enabled,B=te.autoUpdate,z=te.needsUpdate,U=te.type;pe(),Te.autoReset=w,te.enabled=L,te.autoUpdate=B,te.needsUpdate=z,te.type=U}function Ce(w){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){let L=w.target;L.removeEventListener("dispose",$e),qt(L)}function qt(w){xt(w),xe.remove(w)}function xt(w){let L=xe.get(w).programs;L!==void 0&&(L.forEach(function(B){V.releaseProgram(B)}),w.isShaderMaterial&&V.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,B,z,U,ue){L===null&&(L=vt);let ye=U.isMesh&&U.matrixWorld.determinant()<0,Re=O3(w,L,B,z,U);ie.setMaterial(z,ye);let we=B.index,ke=1;if(z.wireframe===!0){if(we=W.getWireframeAttribute(B),we===void 0)return;ke=2}let Ge=B.drawRange,Fe=B.attributes.position,nt=Ge.start*ke,gt=(Ge.start+Ge.count)*ke;ue!==null&&(nt=Math.max(nt,ue.start*ke),gt=Math.min(gt,(ue.start+ue.count)*ke)),we!==null?(nt=Math.max(nt,0),gt=Math.min(gt,we.count)):Fe!=null&&(nt=Math.max(nt,0),gt=Math.min(gt,Fe.count));let Lt=gt-nt;if(Lt<0||Lt===1/0)return;D.setup(U,z,Re,B,we);let Ut,bt=Be;if(we!==null&&(Ut=N.get(we),bt=Me,bt.setIndex(Ut)),U.isMesh)z.wireframe===!0?(ie.setLineWidth(z.wireframeLinewidth*ee()),bt.setMode(A.LINES)):bt.setMode(A.TRIANGLES);else if(U.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),ie.setLineWidth(Oe*ee()),U.isLineSegments?bt.setMode(A.LINES):U.isLineLoop?bt.setMode(A.LINE_LOOP):bt.setMode(A.LINE_STRIP)}else U.isPoints?bt.setMode(A.POINTS):U.isSprite&&bt.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))bt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Oe=U._multiDrawStarts,Rt=U._multiDrawCounts,lt=U._multiDrawCount,Fn=we?N.get(we).bytesPerElement:1,Ir=xe.get(z).currentProgram.getUniforms();for(let Nn=0;Nn<lt;Nn++)Ir.setValue(A,"_gl_DrawID",Nn),bt.render(Oe[Nn]/Fn,Rt[Nn])}else if(U.isInstancedMesh)bt.renderInstances(nt,Lt,U.count);else if(B.isInstancedBufferGeometry){let Oe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Rt=Math.min(B.instanceCount,Oe);bt.renderInstances(nt,Lt,Rt)}else bt.render(nt,Lt)};function yi(w,L,B){w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,Al(w,L,B),w.side=Zi,w.needsUpdate=!0,Al(w,L,B),w.side=qi):Al(w,L,B)}this.compile=function(w,L,B=null){B===null&&(B=w),_=Ue.get(B),_.init(L),C.push(_),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights();let z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ue=U.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let Re=ue[ye];yi(Re,B,U),z.add(Re)}else yi(ue,B,U),z.add(ue)}),_=C.pop(),z},this.compileAsync=function(w,L,B=null){let z=this.compile(w,L,B);return new Promise(U=>{function ue(){if(z.forEach(function(ye){xe.get(ye).currentProgram.isReady()&&z.delete(ye)}),z.size===0){U(w);return}setTimeout(ue,10)}ae.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ai=null;function N3(w){ai&&ai(w)}function yf(){Ws.stop()}function Mf(){Ws.start()}let Ws=new F1;Ws.setAnimationLoop(N3),typeof self<"u"&&Ws.setContext(self),this.setAnimationLoop=function(w){ai=w,me.setAnimationLoop(w),w===null?Ws.stop():Ws.start()},me.addEventListener("sessionstart",yf),me.addEventListener("sessionend",Mf),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(L),L=me.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,L,b),_=Ue.get(w,C.length),_.init(L),C.push(_),Ne.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Ne,di,L.reversedDepth),Ee=this.localClippingEnabled,J=Pe.init(this.clippingPlanes,Ee),v=_e.get(w,S.length),v.init(),S.push(v),me.enabled===!0&&me.isPresenting===!0){let ue=E.xr.getDepthSensingMesh();ue!==null&&Ou(ue,L,-1/0,E.sortObjects)}Ou(w,L,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(qe,ze),Ve=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ve&&fe.addToRenderList(v,w),this.info.render.frame++,J===!0&&Pe.beginShadows();let B=_.state.shadowsArray;te.render(B,w,L),J===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=v.opaque,U=v.transmissive;if(_.setupLights(),L.isArrayCamera){let ue=L.cameras;if(U.length>0)for(let ye=0,Re=ue.length;ye<Re;ye++){let we=ue[ye];Ef(z,U,w,we)}Ve&&fe.render(w);for(let ye=0,Re=ue.length;ye<Re;ye++){let we=ue[ye];Sf(v,w,we,we.viewport)}}else U.length>0&&Ef(z,U,w,L),Ve&&fe.render(w),Sf(v,w,L);b!==null&&M===0&&(Se.updateMultisampleRenderTarget(b),Se.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(E,w,L),D.resetDefaultState(),R=-1,F=null,C.pop(),C.length>0?(_=C[C.length-1],J===!0&&Pe.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function Ou(w,L,B,z){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){z&&et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ne);let ye=K.update(w),Re=w.material;Re.visible&&v.push(w,ye,Re,B,et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let ye=K.update(w),Re=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),et.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),et.copy(ye.boundingSphere.center)),et.applyMatrix4(w.matrixWorld).applyMatrix4(Ne)),Array.isArray(Re)){let we=ye.groups;for(let ke=0,Ge=we.length;ke<Ge;ke++){let Fe=we[ke],nt=Re[Fe.materialIndex];nt&&nt.visible&&v.push(w,ye,nt,B,et.z,Fe)}}else Re.visible&&v.push(w,ye,Re,B,et.z,null)}}let ue=w.children;for(let ye=0,Re=ue.length;ye<Re;ye++)Ou(ue[ye],L,B,z)}function Sf(w,L,B,z){let{opaque:U,transmissive:ue,transparent:ye}=w;_.setupLightsView(B),J===!0&&Pe.setGlobalState(E.clippingPlanes,B),z&&ie.viewport(O.copy(z)),U.length>0&&ql(U,L,B),ue.length>0&&ql(ue,L,B),ye.length>0&&ql(ye,L,B),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ef(w,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[z.id]===void 0&&(_.state.transmissionRenderTarget[z.id]=new Dt(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Ht:fi,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ue=_.state.transmissionRenderTarget[z.id],ye=z.viewport||O;ue.setSize(ye.z*E.transmissionResolutionScale,ye.w*E.transmissionResolutionScale);let Re=E.getRenderTarget(),we=E.getActiveCubeFace(),ke=E.getActiveMipmapLevel();E.setRenderTarget(ue),E.getClearColor(X),se=E.getClearAlpha(),se<1&&E.setClearColor(16777215,.5),E.clear(),Ve&&fe.render(B);let Ge=E.toneMapping;E.toneMapping=es;let Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),_.setupLightsView(z),J===!0&&Pe.setGlobalState(E.clippingPlanes,z),ql(w,B,z),Se.updateMultisampleRenderTarget(ue),Se.updateRenderTargetMipmap(ue),ae.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let gt=0,Lt=L.length;gt<Lt;gt++){let Ut=L[gt],{object:bt,geometry:Oe,material:Rt,group:lt}=Ut;if(Rt.side===qi&&bt.layers.test(z.layers)){let Fn=Rt.side;Rt.side=on,Rt.needsUpdate=!0,wf(bt,B,z,Oe,Rt,lt),Rt.side=Fn,Rt.needsUpdate=!0,nt=!0}}nt===!0&&(Se.updateMultisampleRenderTarget(ue),Se.updateRenderTargetMipmap(ue))}E.setRenderTarget(Re,we,ke),E.setClearColor(X,se),Fe!==void 0&&(z.viewport=Fe),E.toneMapping=Ge}function ql(w,L,B){let z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ue=w.length;U<ue;U++){let ye=w[U],{object:Re,geometry:we,group:ke}=ye,Ge=ye.material;Ge.allowOverride===!0&&z!==null&&(Ge=z),Re.layers.test(B.layers)&&wf(Re,L,B,we,Ge,ke)}}function wf(w,L,B,z,U,ue){w.onBeforeRender(E,L,B,z,U,ue),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(E,L,B,z,w,ue),U.transparent===!0&&U.side===qi&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,E.renderBufferDirect(B,L,z,U,w,ue),U.side=Zi,U.needsUpdate=!0,E.renderBufferDirect(B,L,z,U,w,ue),U.side=qi):E.renderBufferDirect(B,L,z,U,w,ue),w.onAfterRender(E,L,B,z,U,ue)}function Al(w,L,B){L.isScene!==!0&&(L=vt);let z=xe.get(w),U=_.state.lights,ue=_.state.shadowsArray,ye=U.state.version,Re=V.getParameters(w,U.state,ue,L,B),we=V.getProgramCacheKey(Re),ke=z.programs;z.environment=w.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(w.isMeshStandardMaterial?y:q).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",$e),ke=new Map,z.programs=ke);let Ge=ke.get(we);if(Ge!==void 0){if(z.currentProgram===Ge&&z.lightsStateVersion===ye)return qf(w,Re),Ge}else Re.uniforms=V.getUniforms(w),w.onBeforeCompile(Re,E),Ge=V.acquireProgram(Re,we),ke.set(we,Ge),z.uniforms=Re.uniforms;let Fe=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=Pe.uniform),qf(w,Re),z.needsLights=z3(w),z.lightsStateVersion=ye,z.needsLights&&(Fe.ambientLightColor.value=U.state.ambient,Fe.lightProbe.value=U.state.probe,Fe.directionalLights.value=U.state.directional,Fe.directionalLightShadows.value=U.state.directionalShadow,Fe.spotLights.value=U.state.spot,Fe.spotLightShadows.value=U.state.spotShadow,Fe.rectAreaLights.value=U.state.rectArea,Fe.ltc_1.value=U.state.rectAreaLTC1,Fe.ltc_2.value=U.state.rectAreaLTC2,Fe.pointLights.value=U.state.point,Fe.pointLightShadows.value=U.state.pointShadow,Fe.hemisphereLights.value=U.state.hemi,Fe.directionalShadowMap.value=U.state.directionalShadowMap,Fe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Fe.spotShadowMap.value=U.state.spotShadowMap,Fe.spotLightMatrix.value=U.state.spotLightMatrix,Fe.spotLightMap.value=U.state.spotLightMap,Fe.pointShadowMap.value=U.state.pointShadowMap,Fe.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ge,z.uniformsList=null,Ge}function Tf(w){if(w.uniformsList===null){let L=w.currentProgram.getUniforms();w.uniformsList=fo.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function qf(w,L){let B=xe.get(w);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function O3(w,L,B,z,U){L.isScene!==!0&&(L=vt),Se.resetTextureUnits();let ue=L.fog,ye=z.isMeshStandardMaterial?L.environment:null,Re=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ir,we=(z.isMeshStandardMaterial?y:q).get(z.envMap||ye),ke=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ge=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Fe=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,gt=!!B.morphAttributes.color,Lt=es;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Lt=E.toneMapping);let Ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,bt=Ut!==void 0?Ut.length:0,Oe=xe.get(z),Rt=_.state.lights;if(J===!0&&(Ee===!0||w!==F)){let _n=w===F&&z.id===R;Pe.setState(z,w,_n)}let lt=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Rt.state.version||Oe.outputColorSpace!==Re||U.isBatchedMesh&&Oe.batching===!1||!U.isBatchedMesh&&Oe.batching===!0||U.isBatchedMesh&&Oe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Oe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Oe.instancing===!1||!U.isInstancedMesh&&Oe.instancing===!0||U.isSkinnedMesh&&Oe.skinning===!1||!U.isSkinnedMesh&&Oe.skinning===!0||U.isInstancedMesh&&Oe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Oe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Oe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Oe.instancingMorph===!1&&U.morphTexture!==null||Oe.envMap!==we||z.fog===!0&&Oe.fog!==ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Pe.numPlanes||Oe.numIntersection!==Pe.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ge||Oe.morphTargets!==Fe||Oe.morphNormals!==nt||Oe.morphColors!==gt||Oe.toneMapping!==Lt||Oe.morphTargetsCount!==bt)&&(lt=!0):(lt=!0,Oe.__version=z.version);let Fn=Oe.currentProgram;lt===!0&&(Fn=Al(z,L,U));let Ir=!1,Nn=!1,Go=!1,Pt=Fn.getUniforms(),En=Oe.uniforms;if(ie.useProgram(Fn.program)&&(Ir=!0,Nn=!0,Go=!0),z.id!==R&&(R=z.id,Nn=!0),Ir||F!==w){ie.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(A,"projectionMatrix",w.projectionMatrix),Pt.setValue(A,"viewMatrix",w.matrixWorldInverse);let wn=Pt.map.cameraPosition;wn!==void 0&&wn.setValue(A,Ie.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&Pt.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Pt.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Nn=!0,Go=!0)}if(U.isSkinnedMesh){Pt.setOptional(A,U,"bindMatrix"),Pt.setOptional(A,U,"bindMatrixInverse");let _n=U.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Pt.setValue(A,"boneTexture",_n.boneTexture,Se))}U.isBatchedMesh&&(Pt.setOptional(A,U,"batchingTexture"),Pt.setValue(A,"batchingTexture",U._matricesTexture,Se),Pt.setOptional(A,U,"batchingIdTexture"),Pt.setValue(A,"batchingIdTexture",U._indirectTexture,Se),Pt.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&Pt.setValue(A,"batchingColorTexture",U._colorsTexture,Se));let Qn=B.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&He.update(U,B,Fn),(Nn||Oe.receiveShadow!==U.receiveShadow)&&(Oe.receiveShadow=U.receiveShadow,Pt.setValue(A,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(En.envMap.value=we,En.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(En.envMapIntensity.value=L.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=n7()),Nn&&(Pt.setValue(A,"toneMappingExposure",E.toneMappingExposure),Oe.needsLights&&B3(En,Go),ue&&z.fog===!0&&De.refreshFogUniforms(En,ue),De.refreshMaterialUniforms(En,z,he,re,_.state.transmissionRenderTarget[w.id]),fo.upload(A,Tf(Oe),En,Se)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fo.upload(A,Tf(Oe),En,Se),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Pt.setValue(A,"center",U.center),Pt.setValue(A,"modelViewMatrix",U.modelViewMatrix),Pt.setValue(A,"normalMatrix",U.normalMatrix),Pt.setValue(A,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let _n=z.uniformsGroups;for(let wn=0,Bu=_n.length;wn<Bu;wn++){let Xs=_n[wn];be.update(Xs,Fn),be.bind(Xs,Fn)}}return Fn}function B3(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function z3(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,L,B){let z=xe.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),xe.get(w.texture).__webglTexture=L,xe.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,L){let B=xe.get(w);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};let k3=A.createFramebuffer();this.setRenderTarget=function(w,L=0,B=0){b=w,P=L,M=B;let z=!0,U=null,ue=!1,ye=!1;if(w){let we=xe.get(w);if(we.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(we.__webglFramebuffer===void 0)Se.setupRenderTarget(w);else if(we.__hasExternalTextures)Se.rebindTextures(w,xe.get(w.texture).__webglTexture,xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Fe=w.depthTexture;if(we.__boundDepthTexture!==Fe){if(Fe!==null&&xe.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(w)}}let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);let Ge=xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[L])?U=Ge[L][B]:U=Ge[L],ue=!0):w.samples>0&&Se.useMultisampledRTT(w)===!1?U=xe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?U=Ge[B]:U=Ge,O.copy(w.viewport),H.copy(w.scissor),G=w.scissorTest}else O.copy(je).multiplyScalar(he).floor(),H.copy(ct).multiplyScalar(he).floor(),G=ft;if(B!==0&&(U=k3),ie.bindFramebuffer(A.FRAMEBUFFER,U)&&z&&ie.drawBuffers(w,U),ie.viewport(O),ie.scissor(H),ie.setScissorTest(G),ue){let we=xe.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,we.__webglTexture,B)}else if(ye){let we=L;for(let ke=0;ke<w.textures.length;ke++){let Ge=xe.get(w.textures[ke]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,B,we)}}else if(w!==null&&B!==0){let we=xe.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,B)}R=-1},this.readRenderTargetPixels=function(w,L,B,z,U,ue,ye,Re=0){if(!(w&&w.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){ie.bindFramebuffer(A.FRAMEBUFFER,we);try{let ke=w.textures[Re],Ge=ke.format,Fe=ke.type;if(!de.textureFormatReadable(Ge)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Fe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-z&&B>=0&&B<=w.height-U&&(w.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Re),A.readPixels(L,B,z,U,We.convert(Ge),We.convert(Fe),ue))}finally{let ke=b!==null?xe.get(b).__webglFramebuffer:null;ie.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,L,B,z,U,ue,ye,Re=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(L>=0&&L<=w.width-z&&B>=0&&B<=w.height-U){ie.bindFramebuffer(A.FRAMEBUFFER,we);let ke=w.textures[Re],Ge=ke.format,Fe=ke.type;if(!de.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,nt),A.bufferData(A.PIXEL_PACK_BUFFER,ue.byteLength,A.STREAM_READ),w.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Re),A.readPixels(L,B,z,U,We.convert(Ge),We.convert(Fe),0);let gt=b!==null?xe.get(b).__webglFramebuffer:null;ie.bindFramebuffer(A.FRAMEBUFFER,gt);let Lt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await a1(A,Lt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,nt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ue),A.deleteBuffer(nt),A.deleteSync(Lt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,L=null,B=0){let z=Math.pow(2,-B),U=Math.floor(w.image.width*z),ue=Math.floor(w.image.height*z),ye=L!==null?L.x:0,Re=L!==null?L.y:0;Se.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,ye,Re,U,ue),ie.unbindTexture()};let H3=A.createFramebuffer(),V3=A.createFramebuffer();this.copyTextureToTexture=function(w,L,B=null,z=null,U=0,ue=null){ue===null&&(U!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=U,U=0):ue=0);let ye,Re,we,ke,Ge,Fe,nt,gt,Lt,Ut=w.isCompressedTexture?w.mipmaps[ue]:w.image;if(B!==null)ye=B.max.x-B.min.x,Re=B.max.y-B.min.y,we=B.isBox3?B.max.z-B.min.z:1,ke=B.min.x,Ge=B.min.y,Fe=B.isBox3?B.min.z:0;else{let Qn=Math.pow(2,-U);ye=Math.floor(Ut.width*Qn),Re=Math.floor(Ut.height*Qn),w.isDataArrayTexture?we=Ut.depth:w.isData3DTexture?we=Math.floor(Ut.depth*Qn):we=1,ke=0,Ge=0,Fe=0}z!==null?(nt=z.x,gt=z.y,Lt=z.z):(nt=0,gt=0,Lt=0);let bt=We.convert(L.format),Oe=We.convert(L.type),Rt;L.isData3DTexture?(Se.setTexture3D(L,0),Rt=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Se.setTexture2DArray(L,0),Rt=A.TEXTURE_2D_ARRAY):(Se.setTexture2D(L,0),Rt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);let lt=A.getParameter(A.UNPACK_ROW_LENGTH),Fn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ir=A.getParameter(A.UNPACK_SKIP_PIXELS),Nn=A.getParameter(A.UNPACK_SKIP_ROWS),Go=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ut.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ut.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ge),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Fe);let Pt=w.isDataArrayTexture||w.isData3DTexture,En=L.isDataArrayTexture||L.isData3DTexture;if(w.isDepthTexture){let Qn=xe.get(w),_n=xe.get(L),wn=xe.get(Qn.__renderTarget),Bu=xe.get(_n.__renderTarget);ie.bindFramebuffer(A.READ_FRAMEBUFFER,wn.__webglFramebuffer),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,Bu.__webglFramebuffer);for(let Xs=0;Xs<we;Xs++)Pt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(w).__webglTexture,U,Fe+Xs),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(L).__webglTexture,ue,Lt+Xs)),A.blitFramebuffer(ke,Ge,ye,Re,nt,gt,ye,Re,A.DEPTH_BUFFER_BIT,A.NEAREST);ie.bindFramebuffer(A.READ_FRAMEBUFFER,null),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||w.isRenderTargetTexture||xe.has(w)){let Qn=xe.get(w),_n=xe.get(L);ie.bindFramebuffer(A.READ_FRAMEBUFFER,H3),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,V3);for(let wn=0;wn<we;wn++)Pt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Qn.__webglTexture,U,Fe+wn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Qn.__webglTexture,U),En?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_n.__webglTexture,ue,Lt+wn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_n.__webglTexture,ue),U!==0?A.blitFramebuffer(ke,Ge,ye,Re,nt,gt,ye,Re,A.COLOR_BUFFER_BIT,A.NEAREST):En?A.copyTexSubImage3D(Rt,ue,nt,gt,Lt+wn,ke,Ge,ye,Re):A.copyTexSubImage2D(Rt,ue,nt,gt,ke,Ge,ye,Re);ie.bindFramebuffer(A.READ_FRAMEBUFFER,null),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else En?w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Rt,ue,nt,gt,Lt,ye,Re,we,bt,Oe,Ut.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(Rt,ue,nt,gt,Lt,ye,Re,we,bt,Ut.data):A.texSubImage3D(Rt,ue,nt,gt,Lt,ye,Re,we,bt,Oe,Ut):w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ue,nt,gt,ye,Re,bt,Oe,Ut.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ue,nt,gt,Ut.width,Ut.height,bt,Ut.data):A.texSubImage2D(A.TEXTURE_2D,ue,nt,gt,ye,Re,bt,Oe,Ut);A.pixelStorei(A.UNPACK_ROW_LENGTH,lt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Fn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ir),A.pixelStorei(A.UNPACK_SKIP_ROWS,Nn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Go),ue===0&&L.generateMipmaps&&A.generateMipmap(Rt),ie.unbindTexture()},this.initRenderTarget=function(w){xe.get(w).__webglFramebuffer===void 0&&Se.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Se.setTextureCube(w,0):w.isData3DTexture?Se.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Se.setTexture2DArray(w,0):Se.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){P=0,M=0,b=null,ie.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var i7=30,is=n=>Math.round(n*i7),y0=n=>li.filter(e=>e.scene===n),en=(n,e)=>is(y0(n)[e].a),Yh=(n,e)=>is(y0(n)[e].b),Ye=(n,e,t)=>{let i=y0(n)[e],s=i?.w?.find(([r])=>t.test(r));if(!s)throw new Error(`r45 time: no token matching ${t} in ${n}[${e}] "${i?.text}"`);return is(s[1])};var $h=class extends Rs{constructor(e,t={}){let i=t.font;if(i===void 0)super();else{let s=i.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}};var Zh=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let s=[],r=s7(e,t,this.data,i);for(let o=0,a=r.length;o<a;o++)s.push(...r[o].toShapes());return s}};function s7(n,e,t,i){let s=Array.from(n),r=e/t.resolution,o=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[],l=0,c=0;(i=="rtl"||i=="tb")&&s.reverse();for(let h=0;h<s.length;h++){let d=s[h];if(d===`
`)l=0,c-=o;else{let u=r7(d,r,l,c,t);i=="tb"?(l=0,c+=t.ascender*r):l+=u.offsetX,a.push(u.path)}}return a}function r7(n,e,t,i,s){let r=s.glyphs[n]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}let o=new za,a,l,c,h,d,u,f,x;if(r.o){let g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+i,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+i,o.lineTo(a,l);break;case"q":c=g[m++]*e+t,h=g[m++]*e+i,d=g[m++]*e+t,u=g[m++]*e+i,o.quadraticCurveTo(d,u,c,h);break;case"b":c=g[m++]*e+t,h=g[m++]*e+i,d=g[m++]*e+t,u=g[m++]*e+i,f=g[m++]*e+t,x=g[m++]*e+i,o.bezierCurveTo(d,u,f,x,c,h);break}}return{offsetX:r.ha*e,path:o}}var k1={glyphs:{"0":{ha:797,x_min:68,x_max:729,o:"m 399 -17 l 399 -17 q 260 6 322 -17 q 156 85 199 29 q 91 235 114 140 q 68 476 68 331 l 68 476 q 91 717 68 622 q 156 868 114 813 q 260 947 199 924 q 399 969 322 969 l 399 969 q 538 947 476 969 q 641 868 599 924 q 706 717 683 813 q 729 476 729 622 l 729 476 q 706 235 729 331 q 641 85 683 140 q 538 6 599 29 q 399 -17 476 -17 z m 399 103 l 399 103 q 510 141 472 103 q 564 254 549 179 q 579 440 579 329 l 579 440 l 579 508 q 564 698 579 622 q 510 812 549 774 q 399 850 472 850 l 399 850 q 288 812 326 850 q 233 699 249 774 q 218 511 218 624 l 218 511 l 218 443 q 233 256 218 332 q 288 141 249 179 q 399 103 326 103 z "},"1":{ha:760,x_min:113,x_max:713,o:"m 713 0 l 113 0 l 113 121 l 349 121 l 349 753 l 113 753 l 113 843 q 214 860 158 846 q 325 897 269 874 q 426 954 381 921 l 426 954 l 494 954 l 494 121 l 713 121 l 713 0 z "},"2":{ha:793,x_min:69,x_max:729,o:"m 729 0 l 69 0 l 69 43 q 92 153 69 103 q 153 246 115 204 q 239 325 192 288 q 335 397 286 363 l 335 397 q 453 489 399 443 q 541 588 507 535 q 575 706 575 640 l 575 706 q 558 775 575 743 q 504 827 540 807 q 410 847 468 847 l 410 847 q 306 826 346 847 q 248 767 267 804 q 229 682 229 731 l 229 682 l 229 625 l 85 625 q 82 646 83 632 q 81 681 81 660 l 81 681 q 127 847 81 783 q 251 940 174 910 q 417 969 328 969 l 417 969 q 562 945 503 969 q 656 881 621 921 q 708 792 692 840 q 724 697 724 743 l 724 697 q 701 576 724 631 q 637 475 678 522 q 541 384 596 428 q 424 297 486 340 l 424 297 q 348 243 385 271 q 283 187 311 215 q 246 132 256 158 l 246 132 l 729 132 l 729 0 z "},"3":{ha:799,x_min:60,x_max:733,o:"m 401 -17 l 401 -17 q 215 18 290 -17 q 99 117 139 53 q 60 267 60 181 l 60 267 l 60 285 l 206 285 l 206 264 q 255 144 206 186 q 393 103 304 103 l 393 103 q 531 142 479 103 q 583 267 583 181 l 583 267 q 556 363 583 329 q 482 411 528 397 q 385 425 436 425 l 385 425 l 294 425 l 294 544 l 389 544 q 476 560 436 544 q 540 612 515 576 q 564 703 564 647 l 564 703 q 542 786 564 754 q 483 834 521 818 q 400 850 446 850 l 400 850 q 312 833 351 850 q 250 782 272 815 q 228 697 228 749 l 228 697 l 228 676 l 81 676 l 81 706 q 122 844 81 785 q 234 937 163 904 q 397 969 306 969 l 397 969 q 562 940 490 969 q 673 852 633 910 q 713 711 713 794 l 713 711 q 692 611 713 653 q 635 542 671 569 q 557 494 600 514 l 557 494 l 557 489 q 683 408 632 467 q 733 256 733 350 l 733 256 q 691 110 733 171 q 574 16 649 49 q 401 -17 499 -17 z "},"4":{ha:786,x_min:42,x_max:740,o:"m 618 0 l 474 0 l 474 224 l 42 224 l 42 343 q 146 539 99 440 q 232 745 193 638 q 297 969 271 853 l 297 969 l 449 969 q 403 816 431 894 q 344 663 376 738 q 279 524 311 588 q 219 413 247 460 q 175 343 192 365 l 175 343 l 474 343 l 474 617 q 494 667 483 640 q 514 723 504 694 q 532 778 524 751 q 547 828 540 804 l 547 828 l 618 828 l 618 343 l 740 343 l 740 224 l 618 224 l 618 0 z "},"5":{ha:796,x_min:67,x_max:732,o:"m 401 -17 l 401 -17 q 226 21 301 -17 q 108 128 150 58 q 67 296 67 199 l 67 296 l 215 296 q 239 192 215 236 q 305 126 263 149 q 401 103 347 103 l 401 103 q 495 126 454 103 q 559 195 536 149 q 582 311 582 242 l 582 311 q 560 417 582 375 q 499 480 539 460 q 408 500 460 500 l 408 500 q 338 488 371 500 q 279 456 304 476 q 236 406 254 435 l 236 406 l 100 425 l 139 953 l 682 953 l 682 819 l 265 819 l 246 553 q 295 585 268 569 q 359 610 322 600 q 443 619 396 619 l 443 619 q 589 586 524 619 q 693 485 654 553 q 732 313 732 418 l 732 313 q 692 135 732 208 q 578 22 651 61 q 401 -17 504 -17 z "},"6":{ha:799,x_min:69,x_max:739,o:"m 419 -17 l 419 -17 q 273 7 338 -17 q 163 84 208 31 q 93 227 117 138 q 69 449 69 317 l 69 449 q 92 696 69 596 q 160 856 115 796 q 268 943 204 917 q 414 969 332 969 l 414 969 q 581 931 517 969 q 676 825 646 892 q 706 674 706 758 l 706 674 l 558 674 q 542 770 558 731 q 492 830 526 810 q 407 850 458 850 l 407 850 q 290 809 331 850 q 234 692 249 768 q 218 511 219 617 l 218 511 q 264 557 232 533 q 342 597 296 581 q 444 613 389 613 l 444 613 q 611 572 546 613 q 708 460 676 531 q 739 300 739 389 l 739 300 q 697 133 739 204 q 583 22 656 61 q 419 -17 511 -17 z m 410 103 l 410 103 q 510 130 471 103 q 569 202 550 157 q 589 301 589 247 l 589 301 q 570 399 589 356 q 512 469 551 443 q 411 494 472 494 l 411 494 q 310 469 350 494 q 250 399 269 443 q 231 297 231 354 l 231 297 q 250 199 231 244 q 309 128 269 154 q 410 103 349 103 z "},"7":{ha:783,x_min:58,x_max:733,o:"m 361 0 l 203 0 q 233 240 203 124 q 316 460 264 356 q 430 656 368 565 q 553 819 492 747 l 553 819 l 58 819 l 58 953 l 733 953 l 733 860 q 632 731 685 801 q 531 582 579 661 q 444 418 482 503 q 383 245 406 333 q 361 68 361 157 l 361 68 l 361 0 z "},"8":{ha:799,x_min:64,x_max:733,o:"m 400 -17 l 400 -17 q 206 21 281 -17 q 98 122 132 58 q 64 261 64 185 l 64 261 q 101 398 64 339 q 221 489 139 457 l 221 489 q 122 581 156 524 q 89 706 89 638 l 89 706 q 124 839 89 779 q 228 934 158 899 q 400 969 297 969 l 400 969 q 571 934 503 969 q 674 839 639 899 q 710 706 710 779 l 710 706 q 676 581 710 638 q 576 489 642 524 l 576 489 q 697 398 660 457 q 733 261 733 339 l 733 261 q 699 122 733 185 q 592 21 665 58 q 400 -17 518 -17 z m 400 101 l 400 101 q 538 145 490 101 q 585 265 585 189 l 585 265 q 538 385 585 342 q 400 428 490 428 l 400 428 q 260 385 308 428 q 213 265 213 342 l 213 265 q 260 145 213 189 q 400 101 308 101 z m 400 546 l 400 546 q 519 585 475 546 q 563 699 563 625 l 563 699 q 519 811 563 771 q 400 851 476 851 l 400 851 q 278 811 322 851 q 235 699 235 771 l 235 699 q 278 585 235 625 q 400 546 322 546 z "},"9":{ha:797,x_min:60,x_max:729,o:"m 383 -17 l 383 -17 q 217 22 281 -17 q 122 128 153 61 q 92 279 92 196 l 92 279 l 239 279 q 256 183 239 222 q 306 123 272 143 q 390 103 339 103 l 390 103 q 508 144 468 103 q 563 261 547 185 q 579 442 578 338 l 579 442 q 535 397 567 421 q 457 356 503 372 q 356 340 411 340 l 356 340 q 189 381 254 340 q 92 494 124 422 q 60 653 60 565 l 60 653 q 101 821 60 750 q 215 931 143 892 q 378 969 288 969 l 378 969 q 525 946 460 969 q 636 869 590 922 q 706 726 682 815 q 729 504 729 636 l 729 504 q 706 258 729 358 q 638 97 682 157 q 531 10 594 36 q 383 -17 467 -17 z m 386 458 l 386 458 q 488 484 447 458 q 548 555 528 510 q 568 656 568 600 l 568 656 q 549 754 568 710 q 489 824 529 799 q 388 850 449 850 l 388 850 q 287 823 326 850 q 228 751 247 796 q 208 651 208 707 l 208 651 q 228 553 208 597 q 286 484 247 510 q 386 458 325 458 z "},"=":{ha:875,x_min:110,x_max:767,o:"m 767 440 l 110 440 l 110 560 l 767 560 l 767 440 z m 767 147 l 110 147 l 110 265 l 767 265 l 767 147 z "},"+":{ha:875,x_min:110,x_max:765,o:"m 496 0 l 378 0 l 378 294 l 110 294 l 110 414 l 378 414 l 378 710 l 496 710 l 496 414 l 765 414 l 765 294 l 496 294 l 496 0 z "}," ":{ha:285,x_min:0,x_max:0,o:""},A:{ha:965,x_min:8,x_max:956,o:"m 168 0 l 8 0 l 382 953 l 581 953 l 956 0 l 789 0 l 704 221 l 253 221 l 168 0 z m 408 632 l 303 353 l 653 353 l 546 632 q 533 667 542 644 q 516 715 525 689 q 498 769 507 742 q 482 818 489 796 l 482 818 l 474 818 q 453 756 465 792 q 428 686 440 719 q 408 632 417 653 l 408 632 z "},B:{ha:975,x_min:113,x_max:911,o:"m 618 0 l 113 0 l 113 953 l 618 953 q 757 924 697 953 q 851 843 817 896 q 885 719 885 790 l 885 719 q 865 621 885 665 q 809 546 844 576 q 729 500 774 515 l 729 500 l 729 494 q 822 453 781 483 q 887 376 863 424 q 911 261 911 328 l 911 261 q 872 113 911 171 q 767 27 832 54 q 618 0 701 0 l 618 0 z m 268 424 l 268 133 l 606 133 q 710 167 669 133 q 751 278 751 201 l 751 278 q 734 356 751 324 q 682 406 717 389 q 594 424 647 424 l 594 424 l 268 424 z m 268 819 l 268 554 l 582 554 q 658 571 626 554 q 708 618 690 588 q 725 686 725 649 l 725 686 q 688 787 725 754 q 592 819 651 819 l 592 819 l 268 819 z "},C:{ha:1007,x_min:67,x_max:946,o:"m 525 -17 l 525 -17 q 277 35 379 -17 q 121 197 175 88 q 67 476 67 307 l 67 476 q 188 848 67 726 q 526 969 310 969 l 526 969 q 741 929 646 969 q 891 809 836 889 q 946 606 946 729 l 946 606 l 788 606 q 756 733 788 682 q 665 811 724 785 q 528 838 606 838 l 528 838 q 363 799 431 838 q 262 685 296 761 q 228 490 228 608 l 228 490 l 228 460 q 262 265 228 342 q 363 152 296 189 q 528 115 429 115 l 528 115 q 668 141 608 115 q 760 218 728 167 q 793 346 793 269 l 793 346 l 946 346 q 891 142 946 222 q 741 22 836 61 q 525 -17 646 -17 z "},D:{ha:1015,x_min:113,x_max:949,o:"m 481 0 l 113 0 l 113 953 l 481 953 q 732 902 628 953 q 892 747 836 851 q 949 476 949 642 l 949 476 q 892 207 949 313 q 732 51 836 101 q 481 0 628 0 l 481 0 z m 268 819 l 268 133 l 479 133 q 610 153 553 133 q 708 213 668 172 q 767 315 747 253 q 788 461 788 376 l 788 461 l 788 490 q 767 638 788 576 q 708 740 747 700 q 610 800 668 781 q 479 819 553 819 l 479 819 l 268 819 z "},E:{ha:936,x_min:113,x_max:860,o:"m 860 0 l 113 0 l 113 953 l 851 953 l 851 819 l 268 819 l 268 554 l 790 554 l 790 421 l 268 421 l 268 133 l 860 133 l 860 0 z "},F:{ha:849,x_min:113,x_max:793,o:"m 268 0 l 113 0 l 113 953 l 793 953 l 793 819 l 268 819 l 268 538 l 743 538 l 743 406 l 268 406 l 268 0 z "},G:{ha:1104,x_min:75,x_max:1e3,o:"m 544 -17 l 544 -17 q 197 103 318 -17 q 75 476 75 222 l 75 476 q 132 752 75 643 q 297 915 189 861 q 561 969 406 969 l 561 969 q 734 949 654 969 q 874 885 814 928 q 967 779 935 843 q 1000 628 1000 715 l 1000 628 l 842 628 q 820 722 842 682 q 760 788 799 761 q 672 826 722 814 q 564 838 621 838 l 564 838 q 423 817 485 838 q 319 753 361 796 q 257 644 278 710 q 236 490 236 579 l 236 490 l 236 461 q 272 263 236 339 q 377 151 307 186 q 549 115 447 115 l 549 115 q 710 143 644 115 q 810 226 775 171 q 844 363 844 281 l 844 363 l 844 376 l 524 376 l 524 506 l 1000 506 l 1000 0 l 888 0 l 872 114 q 783 40 833 68 q 674 -3 733 11 q 544 -17 615 -17 z "},H:{ha:1019,x_min:113,x_max:907,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 554 l 751 554 l 751 953 l 907 953 l 907 0 l 751 0 l 751 421 l 268 421 l 268 0 z "},I:{ha:381,x_min:113,x_max:268,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 0 z "},J:{ha:793,x_min:49,x_max:685,o:"m 367 -17 l 367 -17 q 194 15 265 -17 q 86 108 124 47 q 49 261 49 169 l 49 261 l 49 307 l 203 307 l 203 257 q 244 152 203 189 q 367 115 286 115 l 367 115 q 488 168 446 115 q 529 319 529 221 l 529 319 l 529 953 l 685 953 l 685 322 q 647 134 685 210 q 539 21 610 58 q 367 -17 468 -17 z "},K:{ha:940,x_min:113,x_max:924,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 478 l 722 953 l 914 953 l 547 569 l 924 0 l 740 0 l 442 460 l 268 300 l 268 0 z "},L:{ha:767,x_min:113,x_max:743,o:"m 743 0 l 113 0 l 113 953 l 268 953 l 268 135 l 743 135 l 743 0 z "},M:{ha:1175,x_min:113,x_max:1061,o:"m 263 0 l 113 0 l 113 953 l 356 953 l 540 375 q 557 318 549 350 q 573 257 565 286 q 585 206 581 228 l 585 206 l 596 206 q 606 256 599 226 q 620 317 613 285 q 636 376 628 349 l 636 376 l 822 953 l 1061 953 l 1061 0 l 907 0 l 907 522 q 908 632 907 575 q 911 733 910 689 q 913 790 913 778 l 913 790 l 901 790 q 888 738 899 775 q 867 660 878 701 q 846 588 856 618 l 846 588 l 653 0 l 515 0 l 322 586 q 304 649 314 613 q 285 722 294 685 q 268 790 275 760 l 268 790 l 257 790 q 259 708 258 757 q 261 610 260 660 q 263 522 263 561 l 263 522 l 263 0 z "},N:{ha:1019,x_min:113,x_max:907,o:"m 263 0 l 113 0 l 113 953 l 263 953 l 697 356 q 716 332 706 347 q 736 301 726 317 q 750 276 746 286 l 750 276 l 757 276 l 757 953 l 907 953 l 907 0 l 763 0 l 322 604 q 294 647 311 621 q 269 686 278 672 l 269 686 l 263 686 l 263 0 z "},O:{ha:1090,x_min:67,x_max:1024,o:"m 544 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 966 201 1024 311 q 801 38 908 92 q 544 -17 694 -17 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z "},P:{ha:926,x_min:113,x_max:890,o:"m 268 0 l 113 0 l 113 953 l 588 953 q 756 915 689 953 q 856 812 822 878 q 890 656 890 746 l 890 656 q 854 497 890 565 q 749 390 818 428 q 582 353 681 353 l 582 353 l 268 353 l 268 0 z m 268 819 l 268 486 l 575 486 q 691 531 649 486 q 733 654 733 575 l 733 654 q 715 744 733 707 q 663 800 697 781 q 575 819 628 819 l 575 819 l 268 819 z "},Q:{ha:1090,x_min:67,x_max:1024,o:"m 976 -181 l 769 -181 l 606 -14 q 575 -16 590 -15 q 544 -17 560 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 956 185 1024 297 q 767 22 889 72 l 767 22 l 976 -181 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z "},R:{ha:1003,x_min:113,x_max:949,o:"m 268 0 l 113 0 l 113 953 l 614 953 q 782 917 715 953 q 882 816 849 881 q 915 665 915 751 l 915 665 q 872 499 915 569 q 750 394 829 428 l 750 394 l 949 0 l 779 0 l 599 368 l 268 368 l 268 0 z m 268 819 l 268 499 l 601 499 q 717 543 676 499 q 758 667 758 588 l 758 667 q 740 749 758 715 q 688 801 722 783 q 601 819 653 819 l 601 819 l 268 819 z "},S:{ha:931,x_min:68,x_max:863,o:"m 465 -17 l 465 -17 q 315 -1 388 -17 q 188 51 243 15 q 100 141 132 86 q 68 272 68 196 l 68 272 q 69 288 68 281 q 69 301 69 296 l 69 301 l 225 301 q 224 289 225 297 q 224 275 224 281 l 224 275 q 254 188 224 224 q 340 133 285 151 q 465 115 394 115 l 465 115 q 540 120 504 115 q 606 135 576 125 q 658 162 636 146 q 693 200 681 178 q 706 251 706 222 l 706 251 q 680 325 706 296 q 610 374 654 354 q 512 408 567 393 q 399 439 457 424 q 285 475 340 454 q 187 526 231 496 q 117 601 143 556 q 92 711 92 646 l 92 711 q 118 822 92 774 q 194 903 144 871 q 314 953 244 936 q 471 969 383 969 l 471 969 q 613 953 546 969 q 729 904 679 938 q 808 819 779 871 q 836 697 836 768 l 836 697 l 836 681 l 682 681 l 682 699 q 656 774 682 743 q 582 821 629 804 q 472 838 535 838 l 472 838 q 349 823 399 838 q 273 783 299 808 q 247 721 247 757 l 247 721 q 274 655 247 681 q 344 611 300 629 q 442 578 388 593 q 555 548 497 564 q 667 511 613 532 q 766 460 722 490 q 836 384 810 429 q 863 274 863 339 l 863 274 q 811 106 863 171 q 670 13 760 42 q 465 -17 581 -17 z "},T:{ha:850,x_min:31,x_max:819,o:"m 501 0 l 346 0 l 346 819 l 31 819 l 31 953 l 819 953 l 819 819 l 501 819 l 501 0 z "},U:{ha:1011,x_min:108,x_max:903,o:"m 503 -17 l 503 -17 q 292 23 381 -17 q 156 146 203 63 q 108 357 108 229 l 108 357 l 108 953 l 264 953 l 264 353 q 326 175 264 235 q 503 115 389 115 l 503 115 q 683 175 618 115 q 747 353 747 235 l 747 353 l 747 953 l 903 953 l 903 357 q 855 146 903 229 q 717 23 807 63 q 503 -17 628 -17 z "},V:{ha:915,x_min:14,x_max:901,o:"m 549 0 l 365 0 l 14 953 l 182 953 l 418 288 q 432 249 425 271 q 446 206 439 226 q 458 171 453 186 l 458 171 l 465 171 q 478 206 471 186 q 492 246 485 225 q 506 286 499 267 l 506 286 l 739 953 l 901 953 l 549 0 z "},W:{ha:1303,x_min:15,x_max:1288,o:"m 465 0 l 278 0 l 15 953 l 181 953 l 343 325 q 353 283 347 310 q 363 228 358 257 q 372 176 368 200 l 372 176 l 381 176 q 388 215 385 194 q 394 257 390 236 q 402 296 399 278 q 407 325 406 314 l 407 325 l 557 953 l 757 953 l 908 325 q 918 283 913 310 q 928 228 924 257 q 938 176 933 200 l 938 176 l 946 176 q 953 214 949 193 q 961 255 957 235 q 970 293 965 275 q 978 325 975 311 l 978 325 l 1140 953 l 1288 953 l 1025 0 l 843 0 l 683 636 q 674 684 679 657 q 663 740 668 711 q 656 789 658 768 l 656 789 l 649 789 q 642 738 646 767 q 632 681 638 708 q 622 636 626 654 l 622 636 l 465 0 z "},X:{ha:949,x_min:15,x_max:933,o:"m 196 0 l 15 0 l 374 500 l 49 953 l 239 953 l 476 615 l 482 615 l 718 953 l 897 953 l 574 501 l 933 0 l 744 0 l 474 386 l 465 386 l 196 0 z "},Y:{ha:925,x_min:14,x_max:911,o:"m 540 0 l 385 0 l 385 392 l 14 953 l 192 953 l 464 531 l 471 531 l 740 953 l 911 953 l 540 392 l 540 0 z "},Z:{ha:882,x_min:43,x_max:831,o:"m 831 0 l 43 0 l 43 76 l 588 819 l 79 819 l 79 953 l 818 953 l 818 876 l 271 133 l 831 133 l 831 0 z "},a:{ha:764,x_min:47,x_max:757,o:"m 278 -17 l 278 -17 q 203 -8 243 -17 q 127 22 163 0 q 69 84 92 44 q 47 188 47 124 l 47 188 q 82 311 47 263 q 179 388 117 360 q 328 426 242 415 q 518 438 415 438 l 518 438 l 518 510 q 506 574 518 546 q 463 617 494 601 q 374 632 432 632 q 283 617 315 632 q 237 581 250 603 q 224 535 224 560 l 224 535 l 224 514 l 85 514 q 83 528 83 521 l 83 528 l 83 544 q 120 655 83 610 q 224 724 157 700 q 378 747 290 747 l 378 747 q 535 720 472 747 q 631 643 599 693 q 663 522 663 593 l 663 522 l 663 151 q 676 114 663 125 q 707 103 689 103 l 707 103 l 757 103 l 757 6 q 715 -8 740 -1 q 657 -15 690 -15 l 657 -15 q 594 -2 619 -15 q 552 35 568 11 q 531 90 536 60 l 531 90 l 522 90 q 462 34 497 58 q 381 -3 426 10 q 278 -17 335 -17 z m 318 103 l 318 103 q 398 116 361 103 q 461 153 435 129 q 503 212 488 178 q 518 286 518 246 l 518 286 l 518 335 q 350 324 422 335 q 238 283 278 313 q 197 200 197 253 l 197 200 q 211 147 197 168 q 253 114 225 125 q 318 103 281 103 z "},b:{ha:804,x_min:93,x_max:749,o:"m 460 -17 l 460 -17 q 329 13 388 -17 q 233 100 271 42 l 233 100 l 224 100 l 211 0 l 93 0 l 93 1004 l 238 1004 l 238 642 l 246 642 q 302 701 269 678 q 376 736 335 725 q 467 747 418 747 l 467 747 q 614 707 550 747 q 713 583 678 667 q 749 368 749 500 l 749 368 q 714 149 749 233 q 615 24 679 64 q 460 -17 550 -17 z m 419 108 l 419 108 q 522 133 482 108 q 581 212 561 158 q 600 351 600 265 l 600 351 l 600 376 q 581 517 600 463 q 522 597 563 571 q 417 622 482 622 l 417 622 q 343 608 376 622 q 286 565 310 594 q 250 488 263 535 q 238 374 238 440 l 238 374 l 238 354 q 256 220 238 275 q 315 137 275 165 q 419 108 356 108 z "},c:{ha:739,x_min:53,x_max:686,o:"m 383 -17 l 383 -17 q 200 24 274 -17 q 90 150 126 65 q 53 365 53 235 l 53 365 q 90 580 53 496 q 202 706 128 664 q 385 747 276 747 l 385 747 q 515 728 460 747 q 610 673 571 710 q 667 582 649 636 q 686 458 686 528 l 686 458 l 540 458 q 524 554 540 517 q 472 610 507 592 q 382 629 438 629 l 382 629 q 283 602 324 629 q 222 520 243 575 q 201 376 201 465 l 201 376 l 201 353 q 222 212 201 268 q 283 128 242 156 q 388 101 324 101 l 388 101 q 477 122 443 101 q 528 180 511 142 q 546 272 546 218 l 546 272 l 686 272 q 667 154 686 207 q 610 63 649 101 q 515 4 572 25 q 383 -17 458 -17 z "},d:{ha:804,x_min:54,x_max:711,o:"m 344 -17 l 344 -17 q 190 24 256 -17 q 90 149 125 64 q 54 368 54 233 l 54 368 q 90 583 54 500 q 190 707 126 667 q 338 747 254 747 l 338 747 q 428 736 386 747 q 502 701 469 725 q 557 642 535 678 l 557 642 l 567 642 l 567 1004 l 711 1004 l 711 0 l 593 0 l 579 100 l 569 100 q 474 13 533 42 q 344 -17 415 -17 z m 385 108 l 385 108 q 488 137 449 108 q 547 220 528 165 q 567 354 567 275 l 567 354 l 567 374 q 554 488 567 440 q 518 565 542 535 q 461 608 494 594 q 386 622 428 622 l 386 622 q 282 597 322 622 q 223 517 242 571 q 204 376 204 463 l 204 376 l 204 351 q 224 212 204 265 q 283 133 243 158 q 385 108 322 108 z "},e:{ha:769,x_min:54,x_max:715,o:"m 396 -17 l 396 -17 q 208 24 283 -17 q 93 150 132 65 q 54 365 54 235 l 54 365 q 93 581 54 497 q 208 706 132 665 q 399 747 285 747 l 399 747 q 573 708 503 747 q 679 588 643 668 q 715 385 715 507 l 715 385 l 715 329 l 203 329 q 226 199 206 251 q 290 123 247 147 q 397 99 332 99 l 397 99 q 469 109 438 99 q 524 140 501 119 q 558 188 546 160 q 571 253 571 217 l 571 253 l 713 253 q 690 138 713 188 q 626 53 668 88 q 525 1 583 19 q 396 -17 467 -17 z m 206 435 l 206 435 l 564 435 q 552 526 564 489 q 518 586 540 563 q 465 620 496 610 q 396 631 435 631 l 396 631 q 297 610 338 631 q 233 545 256 589 q 206 435 211 501 z "},f:{ha:407,x_min:18,x_max:406,o:"m 269 0 l 125 0 l 125 611 l 18 611 l 18 731 l 125 731 l 125 836 q 140 922 125 882 q 191 989 154 963 q 296 1015 228 1015 l 296 1015 q 335 1013 315 1015 q 374 1007 356 1011 q 406 997 392 1003 l 406 997 l 406 896 l 335 896 q 285 879 301 896 q 269 831 269 863 l 269 831 l 269 731 l 406 731 l 406 611 l 269 611 l 269 0 z "},g:{ha:796,x_min:25,x_max:779,o:"m 529 -253 l 215 -253 q 122 -232 165 -253 q 51 -172 78 -211 q 25 -78 25 -133 l 25 -78 q 59 22 25 -17 q 139 79 93 60 l 139 79 q 85 124 106 94 q 65 190 65 153 l 65 190 q 103 274 65 242 q 190 315 140 306 l 190 315 q 115 396 142 347 q 88 506 88 444 l 88 506 q 122 633 88 579 q 226 717 157 686 q 393 747 294 747 l 393 747 q 474 741 436 747 q 543 724 513 735 l 543 724 q 613 784 592 749 q 638 850 633 819 l 638 850 l 779 850 q 760 767 779 804 q 709 706 742 731 q 631 672 676 682 l 631 672 q 683 598 665 640 q 700 506 700 556 l 700 506 q 667 379 700 433 q 566 294 633 325 q 400 264 499 264 l 400 264 l 286 264 q 233 250 253 264 q 213 208 213 236 l 213 208 q 232 169 213 185 q 283 154 251 154 l 283 154 l 592 154 q 725 101 672 154 q 778 -36 778 47 l 778 -36 q 747 -147 778 -97 q 659 -224 715 -196 q 529 -253 603 -253 l 529 -253 z m 263 -146 l 263 -146 l 528 -146 q 581 -135 557 -146 q 618 -103 604 -124 q 632 -58 632 -83 l 632 -58 q 606 7 632 -17 q 543 31 581 31 l 543 31 l 263 31 q 197 5 224 31 q 171 -58 171 -21 l 171 -58 q 197 -122 171 -97 q 263 -146 222 -146 z m 394 368 l 394 368 q 517 405 476 368 q 557 506 557 442 l 557 506 q 517 606 557 571 q 394 642 476 642 l 394 642 q 272 606 313 642 q 232 506 232 571 l 232 506 q 249 433 232 464 q 303 385 267 401 q 394 368 340 368 z "},h:{ha:796,x_min:93,x_max:708,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 643 l 247 643 q 307 699 274 676 q 382 735 340 722 q 474 747 424 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 531 288 574 q 238 428 238 488 l 238 428 l 238 0 z "},i:{ha:331,x_min:93,x_max:238,o:"m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 238 0 l 93 0 l 93 731 l 238 731 l 238 0 z "},j:{ha:328,x_min:-36,x_max:238,o:"m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 71 -253 l 71 -253 q 34 -251 54 -253 q -5 -244 14 -249 q -36 -235 -24 -239 l -36 -235 l -36 -135 l 31 -135 q 77 -118 61 -135 q 93 -71 93 -101 l 93 -71 l 93 731 l 238 731 l 238 -78 q 223 -162 238 -122 q 172 -227 208 -201 q 71 -253 136 -253 z "},k:{ha:733,x_min:93,x_max:710,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 397 l 525 731 l 696 731 l 449 447 l 710 0 l 543 0 l 356 342 l 238 225 l 238 0 z "},l:{ha:331,x_min:93,x_max:238,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 0 z "},m:{ha:1194,x_min:93,x_max:1108,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 292 693 260 667 q 366 733 325 719 q 454 747 407 747 l 454 747 q 573 719 522 747 q 650 626 624 692 l 650 626 l 660 626 q 718 692 685 665 q 794 733 751 719 q 885 747 836 747 l 885 747 q 1000 724 950 747 q 1079 648 1050 701 q 1108 506 1108 594 l 1108 506 l 1108 0 l 964 0 l 964 479 q 954 548 964 521 q 928 591 944 575 q 888 614 911 607 q 836 621 864 621 l 836 621 q 754 597 790 621 q 696 529 718 572 q 674 428 674 486 l 674 428 l 674 0 l 529 0 l 529 479 q 519 548 529 521 q 493 591 510 575 q 453 614 476 607 q 403 621 429 621 l 403 621 q 319 597 357 621 q 260 529 282 572 q 238 428 238 486 l 238 428 l 238 0 z "},n:{ha:796,x_min:93,x_max:708,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 297 693 261 667 q 377 733 333 719 q 474 747 421 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 529 288 572 q 238 428 238 486 l 238 428 l 238 0 z "},o:{ha:810,x_min:54,x_max:756,o:"m 404 -17 l 404 -17 q 212 24 290 -17 q 94 150 133 65 q 54 365 54 235 l 54 365 q 94 581 54 497 q 212 706 133 665 q 404 747 290 747 l 404 747 q 599 706 521 747 q 716 581 676 665 q 756 365 756 497 l 756 365 q 716 150 756 235 q 599 24 676 65 q 404 -17 521 -17 z m 404 103 l 404 103 q 518 130 474 103 q 584 213 563 157 q 606 353 606 268 l 606 353 l 606 378 q 584 518 606 463 q 518 601 563 574 q 404 628 474 628 l 404 628 q 292 601 336 628 q 226 518 247 574 q 204 378 204 463 l 204 378 l 204 353 q 226 213 204 268 q 292 130 247 157 q 404 103 336 103 z "},p:{ha:804,x_min:93,x_max:749,o:"m 238 -240 l 93 -240 l 93 731 l 211 731 l 224 631 l 233 631 q 329 718 271 689 q 460 747 388 747 l 460 747 q 615 707 550 747 q 714 582 679 667 q 749 363 749 497 l 749 363 q 713 148 749 232 q 614 24 678 64 q 467 -17 550 -17 l 467 -17 q 376 -6 418 -17 q 302 29 335 6 q 246 89 269 53 l 246 89 l 238 89 l 238 -240 z m 417 108 l 417 108 q 522 134 482 108 q 581 214 563 160 q 600 351 600 268 l 600 351 l 600 376 q 581 518 600 464 q 522 597 561 572 q 419 622 482 622 l 419 622 q 315 594 356 622 q 256 510 275 565 q 238 375 238 454 l 238 375 l 238 356 q 250 243 238 290 q 286 166 263 196 q 343 122 310 136 q 417 108 376 108 z "},q:{ha:804,x_min:54,x_max:711,o:"m 711 -240 l 567 -240 l 567 89 l 557 89 q 501 29 535 53 q 426 -6 468 6 q 338 -17 385 -17 l 338 -17 q 190 24 254 -17 q 90 148 126 64 q 54 363 54 232 l 54 363 q 90 582 54 497 q 190 707 125 667 q 344 747 256 747 l 344 747 q 475 718 417 747 q 569 631 533 689 l 569 631 l 579 631 l 593 731 l 711 731 l 711 -240 z m 386 108 l 386 108 q 462 122 429 108 q 518 166 494 136 q 554 243 542 196 q 567 356 567 290 l 567 356 l 567 375 q 547 510 567 454 q 488 594 528 565 q 385 622 449 622 l 385 622 q 283 597 322 622 q 224 518 243 572 q 204 376 204 464 l 204 376 l 204 351 q 223 214 204 268 q 282 134 242 160 q 386 108 322 108 z "},r:{ha:481,x_min:93,x_max:465,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 613 l 233 613 q 266 678 246 647 q 319 728 286 708 q 399 747 351 747 l 399 747 q 438 743 421 747 q 465 736 456 739 l 465 736 l 465 600 l 417 600 q 338 586 372 600 q 281 545 304 572 q 248 479 258 518 q 238 392 238 440 l 238 392 l 238 0 z "},s:{ha:728,x_min:51,x_max:675,o:"m 363 -17 l 363 -17 q 228 0 286 -17 q 131 46 169 17 q 72 116 92 75 q 51 207 51 157 l 51 207 q 52 219 51 214 q 53 229 53 225 l 53 229 l 196 229 l 196 214 q 219 145 196 171 q 283 109 243 119 q 369 99 322 99 l 369 99 q 447 109 411 99 q 505 140 482 119 q 528 193 528 161 l 528 193 q 499 257 528 235 q 422 292 469 279 q 324 321 375 306 l 324 321 q 233 348 278 333 q 151 386 188 363 q 93 446 115 410 q 71 536 71 482 l 71 536 q 93 626 71 588 q 155 692 115 665 q 249 732 194 718 q 369 746 304 746 l 369 746 q 490 731 438 746 q 580 690 543 717 q 636 627 617 664 q 656 549 656 590 l 656 549 q 655 531 656 540 q 654 519 654 522 l 654 519 l 513 519 l 513 532 q 497 582 513 560 q 449 618 482 604 q 363 632 417 632 l 363 632 q 299 626 326 632 q 253 608 271 619 q 226 582 235 597 q 217 547 217 567 l 217 547 q 240 498 217 515 q 300 469 263 481 q 381 443 338 457 l 381 443 q 482 415 431 429 q 577 378 533 400 q 648 317 621 356 q 675 213 675 278 l 675 213 q 651 108 675 153 q 585 37 628 64 q 486 -3 543 10 q 363 -17 429 -17 z "},t:{ha:424,x_min:21,x_max:389,o:"m 275 -17 l 275 -17 q 177 8 213 -17 q 127 70 142 32 q 113 151 113 108 l 113 151 l 113 611 l 21 611 l 21 731 l 115 731 l 142 935 l 257 935 l 257 731 l 389 731 l 389 611 l 257 611 l 257 168 q 271 119 257 136 q 317 103 285 103 l 317 103 l 389 103 l 389 6 q 355 -5 375 0 q 314 -13 335 -10 q 275 -17 293 -17 z "},u:{ha:794,x_min:86,x_max:701,o:"m 322 -17 l 322 -17 q 151 40 217 -17 q 86 232 86 96 l 86 232 l 86 731 l 231 731 l 231 254 q 241 185 231 213 q 271 140 251 157 q 317 117 290 124 q 375 110 343 110 l 375 110 q 466 134 425 110 q 532 202 507 158 q 557 303 557 246 l 557 303 l 557 731 l 701 731 l 701 0 l 583 0 l 571 104 l 561 104 q 499 38 535 64 q 419 -3 463 11 q 322 -17 375 -17 z "},v:{ha:717,x_min:13,x_max:704,o:"m 432 0 l 283 0 l 13 731 l 164 731 l 290 382 q 311 317 299 357 q 336 236 324 278 q 358 161 349 194 l 358 161 l 365 161 q 385 234 374 193 q 410 315 397 275 q 432 382 422 356 l 432 382 l 557 731 l 704 731 l 432 0 z "},w:{ha:1028,x_min:10,x_max:1017,o:"m 379 0 l 229 0 l 10 731 l 160 731 l 267 331 q 281 269 275 301 q 293 213 288 238 q 301 178 299 188 l 301 178 l 310 178 q 322 235 315 203 q 335 294 329 267 q 343 335 340 321 l 343 335 l 440 731 l 596 731 l 696 333 q 708 283 701 311 q 720 226 714 254 q 729 178 726 199 l 729 178 l 738 178 q 748 224 742 197 q 761 279 754 251 q 774 331 768 307 l 774 331 l 879 731 l 1017 731 l 799 0 l 649 0 l 560 364 q 546 425 554 390 q 531 494 538 460 q 519 556 524 529 l 519 556 l 511 556 q 503 511 508 540 q 490 444 499 482 q 471 364 482 407 l 471 364 l 379 0 z "},x:{ha:735,x_min:17,x_max:718,o:"m 182 0 l 17 0 l 278 375 l 32 731 l 207 731 l 368 486 l 376 486 l 539 731 l 704 731 l 457 379 l 718 0 l 544 0 l 367 268 l 360 268 l 182 0 z "},y:{ha:717,x_min:13,x_max:704,o:"m 172 -253 l 172 -253 q 103 -247 131 -253 q 68 -239 75 -240 l 68 -239 l 68 -135 l 138 -135 q 199 -121 168 -135 q 256 -76 231 -107 q 297 0 281 -46 l 297 0 l 13 731 l 164 731 l 306 367 q 327 304 315 342 q 351 228 339 267 q 371 158 363 189 l 371 158 l 378 158 q 392 206 385 179 q 408 263 400 233 q 425 319 417 292 q 439 365 433 346 l 439 365 l 557 731 l 704 731 l 457 28 q 411 -82 436 -31 q 353 -172 386 -133 q 276 -231 321 -210 q 172 -253 232 -253 z "},z:{ha:699,x_min:39,x_max:656,o:"m 656 0 l 39 0 l 39 72 l 428 611 l 65 611 l 65 731 l 636 731 l 636 660 l 246 119 l 656 119 l 656 0 z "},".":{ha:400,x_min:122,x_max:276,o:"m 276 0 l 122 0 l 122 161 l 276 161 l 276 0 z "},",":{ha:400,x_min:110,x_max:276,o:"m 110 -214 l 110 -214 l 110 -151 q 159 -124 140 -146 q 187 -71 178 -103 q 196 0 196 -39 l 196 0 l 122 0 l 122 161 l 276 161 l 276 15 q 252 -112 276 -65 q 190 -183 228 -160 q 110 -214 151 -206 z "},"'":{ha:315,x_min:82,x_max:233,o:"m 206 568 l 103 568 l 82 749 l 82 953 l 233 953 l 233 749 l 206 568 z "},"\u2019":{ha:358,x_min:93,x_max:261,o:"m 93 578 l 93 578 l 93 642 q 143 669 124 647 q 171 722 163 690 q 179 792 179 754 l 179 792 l 106 792 l 106 953 l 261 953 l 261 807 q 236 680 261 728 q 173 609 211 632 q 93 578 135 586 z "},"!":{ha:392,x_min:111,x_max:281,o:"m 242 257 l 150 257 l 111 953 l 281 953 l 242 257 z m 274 0 l 118 0 l 118 161 l 274 161 l 274 0 z "},"?":{ha:826,x_min:86,x_max:724,o:"m 472 256 l 336 256 l 336 328 q 353 420 336 383 q 396 485 369 457 q 452 535 422 513 q 508 581 482 557 q 551 634 533 604 q 568 704 568 664 l 568 704 q 563 744 568 721 q 542 789 558 767 q 494 826 526 811 q 408 840 463 840 l 408 840 q 317 822 351 840 q 265 778 282 804 q 242 724 247 751 q 236 678 236 697 l 236 678 l 236 660 q 238 640 236 650 l 238 640 l 90 640 q 88 658 89 646 q 86 688 86 669 l 86 688 q 98 766 86 726 q 134 842 110 806 q 198 908 158 879 q 292 953 238 936 q 419 969 347 969 l 419 969 q 532 956 482 969 q 617 919 582 943 q 676 865 653 896 q 712 797 700 833 q 724 722 724 761 l 724 722 q 706 612 724 657 q 659 535 688 567 q 599 480 631 504 q 538 433 567 456 q 490 381 508 410 q 472 311 472 353 l 472 311 l 472 256 z m 481 0 l 328 0 l 328 161 l 481 161 l 481 0 z "},$:{ha:728,x_min:51,x_max:675,o:"m 403 -68 l 333 -68 l 333 94 q 228 111 275 97 l 228 111 q 131 156 169 126 q 72 227 92 186 q 51 318 51 268 l 51 318 q 52 331 51 325 q 53 340 53 336 l 53 340 l 196 340 l 196 325 q 219 256 196 282 q 283 221 243 231 l 283 221 q 333 211 307 214 l 333 211 l 333 428 q 324 431 329 429 l 324 431 q 233 458 278 443 q 151 497 188 474 q 93 556 115 519 q 71 647 71 593 l 71 647 q 93 738 71 699 q 155 803 115 776 q 250 843 194 829 l 250 843 q 333 856 289 853 l 333 856 l 333 1004 l 403 1004 l 403 856 q 490 843 451 853 l 490 843 q 580 801 543 828 q 636 738 617 774 q 656 660 656 701 l 656 660 q 655 642 656 650 q 654 631 654 633 l 654 631 l 513 631 l 513 643 q 497 693 513 671 q 450 729 482 715 l 450 729 q 403 740 431 738 l 403 740 l 403 549 q 482 526 442 538 l 482 526 q 577 489 533 511 q 648 427 621 467 q 675 324 675 388 l 675 324 q 651 219 675 263 q 585 147 628 175 q 486 107 543 119 l 486 107 q 403 96 447 99 l 403 96 l 403 -68 z m 403 408 l 403 211 q 447 219 426 214 l 447 219 q 505 251 482 229 q 528 304 528 272 l 528 304 q 499 368 528 346 q 422 404 469 390 l 422 404 q 403 408 413 406 l 403 408 z m 333 569 l 333 569 l 333 742 q 299 738 315 740 l 299 738 q 253 719 271 731 q 226 692 235 707 q 217 658 217 678 l 217 658 q 240 609 217 626 q 300 581 263 592 l 300 581 q 333 569 317 575 z "},"%":{ha:1331,x_min:125,x_max:1206,o:"m 381 0 l 260 0 l 953 953 l 1075 953 l 381 0 z m 344 468 l 344 468 q 227 491 276 468 q 151 568 178 514 q 125 718 125 622 l 125 718 q 151 869 125 815 q 227 947 178 924 q 344 969 276 969 l 344 969 q 460 947 413 969 q 535 869 508 924 q 561 718 561 815 l 561 718 q 535 567 561 622 q 460 490 508 513 q 344 468 413 468 z m 344 560 l 344 560 q 424 600 404 560 q 443 711 443 640 l 443 711 l 443 726 q 435 808 443 774 q 405 860 426 842 q 344 878 383 878 l 344 878 q 265 838 285 878 q 244 726 244 797 l 244 726 l 244 711 q 265 600 244 640 q 344 560 285 560 z m 989 -17 l 989 -17 q 873 6 922 -17 q 797 83 824 29 q 771 233 771 138 l 771 233 q 797 385 771 331 q 873 462 824 439 q 989 485 922 485 l 989 485 q 1106 462 1057 485 q 1180 385 1154 439 q 1206 233 1206 331 l 1206 233 q 1180 83 1206 138 q 1106 6 1154 28 q 989 -17 1057 -17 z m 989 75 l 989 75 q 1068 115 1049 75 q 1088 226 1088 156 l 1088 226 l 1088 242 q 1080 323 1088 289 q 1051 375 1072 357 q 989 393 1029 393 l 989 393 q 910 353 931 393 q 890 242 890 313 l 890 242 l 890 226 q 910 115 890 156 q 989 75 931 75 z "},"&":{ha:986,x_min:71,x_max:931,o:"m 439 -17 l 439 -17 q 248 16 331 -17 q 118 110 165 49 q 71 256 71 171 l 71 256 q 122 410 71 353 q 249 489 172 467 l 249 489 l 249 494 q 138 574 182 525 q 93 708 93 622 l 93 708 q 138 851 93 793 q 265 940 183 910 q 454 969 346 969 l 454 969 q 638 938 558 969 q 763 847 718 906 q 808 708 808 788 l 808 708 l 808 679 l 664 679 l 664 697 q 636 783 663 750 q 563 833 610 817 q 451 849 515 849 l 451 849 q 368 840 407 849 q 301 812 329 831 q 257 764 272 793 q 242 696 242 735 l 242 696 q 267 610 242 644 q 333 560 292 576 q 422 543 375 543 l 422 543 l 513 543 l 513 425 l 426 425 q 326 412 374 425 q 250 365 279 399 q 221 268 221 331 l 221 268 q 249 174 221 210 q 327 121 276 138 q 446 104 378 104 l 446 104 q 567 122 519 104 q 640 178 615 140 q 664 269 664 215 l 664 269 l 664 543 l 931 543 l 931 424 l 808 424 l 808 274 q 767 118 808 183 q 643 18 725 53 q 439 -17 561 -17 z "},"-":{ha:463,x_min:56,x_max:407,o:"m 407 306 l 56 306 l 56 444 l 407 444 l 407 306 z "},":":{ha:438,x_min:142,x_max:296,o:"m 296 569 l 142 569 l 142 731 l 296 731 l 296 569 z m 296 0 l 142 0 l 142 161 l 296 161 l 296 0 z "},"|":{ha:340,x_min:113,x_max:228,o:"m 228 -260 l 113 -260 l 113 1004 l 228 1004 l 228 -260 z "}},familyName:"Archivo Medium",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-239,xMax:1319,yMin:-400,yMax:1087},resolution:1e3};var H1={glyphs:{"0":{ha:868,x_min:63,x_max:806,o:"m 435 -17 l 435 -17 q 264 13 335 -17 q 149 103 193 43 q 83 257 104 164 q 63 478 63 350 l 63 478 q 83 697 63 604 q 149 851 104 790 q 264 941 193 911 q 435 971 335 971 l 435 971 q 605 941 535 971 q 719 851 675 911 q 785 697 764 790 q 806 478 806 604 l 806 478 q 785 257 806 350 q 719 103 764 164 q 605 13 675 43 q 435 -17 535 -17 z m 435 149 l 435 149 q 522 178 490 149 q 565 269 553 208 q 576 422 576 329 l 576 422 l 576 531 q 565 686 576 625 q 522 776 553 747 q 435 806 490 806 l 435 806 q 348 776 379 806 q 304 687 317 747 q 292 532 292 626 l 292 532 l 292 425 q 304 269 292 331 q 348 178 317 208 q 435 149 379 149 z "},"1":{ha:868,x_min:140,x_max:813,o:"m 813 0 l 142 0 l 142 179 l 369 179 l 369 689 l 140 689 l 140 824 q 262 847 196 828 q 392 895 328 867 q 508 956 457 924 l 508 956 l 597 956 l 597 179 l 813 179 l 813 0 z "},"2":{ha:868,x_min:69,x_max:803,o:"m 803 0 l 69 0 l 69 57 q 93 169 69 118 q 157 265 117 221 q 247 351 197 310 q 346 429 296 392 l 346 429 q 453 510 403 471 q 534 592 503 549 q 565 688 565 635 l 565 688 q 552 741 565 715 q 510 783 539 767 q 435 800 482 800 l 435 800 q 356 783 388 800 q 307 735 324 765 q 290 663 290 704 l 290 663 l 290 621 l 79 621 q 77 640 78 629 q 76 664 76 650 l 76 664 q 122 832 76 764 q 252 935 168 900 q 453 971 336 971 l 453 971 q 606 947 542 971 q 713 883 671 924 q 774 792 754 843 q 794 688 794 742 l 794 688 q 771 569 794 622 q 706 470 747 517 q 608 381 664 424 q 489 296 553 339 l 489 296 q 431 255 457 274 q 390 222 406 236 q 368 197 375 208 l 368 197 l 803 197 l 803 0 z "},"3":{ha:868,x_min:60,x_max:807,o:"m 436 -17 l 436 -17 q 227 20 311 -17 q 101 120 143 57 q 60 264 60 183 l 60 264 l 60 289 l 271 289 l 271 263 q 310 181 271 211 q 425 150 349 150 l 425 150 q 539 185 501 150 q 576 286 576 221 l 576 286 q 558 358 576 332 q 510 397 540 385 q 444 408 481 408 l 444 408 l 354 408 l 354 564 l 435 564 q 497 577 469 564 q 540 617 524 590 q 556 683 556 643 l 556 683 q 540 748 556 721 q 495 790 525 775 q 425 804 465 804 l 425 804 q 356 790 388 804 q 308 751 325 776 q 290 693 290 726 l 290 693 l 290 675 l 86 675 l 86 710 q 128 844 86 785 q 250 937 171 903 q 438 971 329 971 l 438 971 q 622 938 544 971 q 742 847 700 906 q 783 711 783 788 l 783 711 q 765 617 783 660 q 713 546 746 575 q 638 499 681 517 l 638 499 l 638 493 q 761 409 715 469 q 807 258 807 349 l 807 258 q 763 116 806 178 q 638 19 719 54 q 436 -17 556 -17 z "},"4":{ha:869,x_min:38,x_max:829,o:"m 703 0 l 482 0 l 482 203 l 38 203 l 38 379 q 135 551 88 457 q 226 751 183 644 q 299 971 269 858 l 299 971 l 528 971 q 490 845 517 913 q 428 709 464 778 q 353 577 393 640 q 277 462 314 514 q 210 378 240 410 l 210 378 l 482 378 l 482 596 q 515 654 497 621 q 549 724 532 688 q 580 794 567 760 q 601 857 593 828 l 601 857 l 703 857 l 703 378 l 829 378 l 829 203 l 703 203 l 703 0 z "},"5":{ha:868,x_min:58,x_max:806,o:"m 440 -17 l 440 -17 q 234 23 319 -17 q 103 134 149 63 q 58 303 58 206 l 58 303 l 271 303 q 289 224 271 258 q 342 170 307 189 q 425 151 376 151 l 425 151 q 507 171 474 151 q 558 227 540 190 q 576 314 576 264 l 576 314 q 558 399 576 364 q 507 452 540 433 q 428 471 474 471 l 428 471 q 360 458 388 471 q 317 429 333 446 q 289 397 300 413 l 289 397 l 96 422 l 136 954 l 744 954 l 744 756 l 315 756 l 303 569 q 335 590 311 576 q 401 617 360 604 q 496 629 442 629 l 496 629 q 657 593 588 629 q 766 486 726 557 q 806 313 806 415 l 806 313 q 761 141 806 215 q 635 25 717 67 q 440 -17 553 -17 z "},"6":{ha:868,x_min:64,x_max:815,o:"m 449 -17 l 449 -17 q 283 10 354 -17 q 162 92 211 36 q 88 237 113 147 q 64 451 64 326 l 64 451 q 88 694 64 594 q 160 854 113 793 q 280 943 208 915 q 444 971 351 971 l 444 971 q 631 933 554 971 q 747 825 707 894 q 788 660 788 756 l 788 660 l 575 660 q 560 740 575 708 q 515 789 544 772 q 444 806 486 806 l 444 806 q 351 775 383 806 q 306 684 318 744 q 294 532 294 624 l 294 532 q 346 569 314 551 q 417 599 378 588 q 499 610 457 610 l 499 610 q 667 573 596 610 q 776 469 738 536 q 815 308 815 401 l 815 308 q 769 133 815 206 q 640 22 722 61 q 449 -17 558 -17 z m 444 149 l 444 149 q 525 167 493 149 q 573 221 557 186 q 589 301 589 256 l 589 301 q 573 383 589 349 q 525 438 557 418 q 444 458 493 458 l 444 458 q 365 439 397 458 q 316 385 332 419 q 300 303 300 351 l 300 303 q 316 222 300 257 q 365 168 332 188 q 444 149 397 149 z "},"7":{ha:868,x_min:63,x_max:811,o:"m 464 0 l 213 0 q 238 210 213 107 q 307 409 263 313 q 408 592 351 506 q 529 754 465 679 l 529 754 l 63 754 l 63 954 l 811 954 l 811 835 q 711 705 761 774 q 617 562 661 636 q 538 408 572 488 q 483 246 503 329 q 464 76 464 163 l 464 76 l 464 0 z "},"8":{ha:868,x_min:58,x_max:810,o:"m 433 -17 l 433 -17 q 228 18 311 -17 q 101 115 144 53 q 58 263 58 178 l 58 263 q 98 398 58 344 q 211 486 138 451 l 211 486 q 117 583 144 533 q 89 697 89 633 l 89 697 q 132 842 89 781 q 252 937 175 903 q 433 971 329 971 l 433 971 q 614 937 536 971 q 735 842 692 903 q 779 697 779 781 l 779 697 q 751 581 779 632 q 656 486 722 531 l 656 486 q 770 398 731 451 q 810 263 810 344 l 810 263 q 766 115 810 178 q 639 18 722 53 q 433 -17 556 -17 z m 433 149 l 433 149 q 540 182 500 149 q 579 278 579 215 l 579 278 q 539 374 579 342 q 433 407 499 407 l 433 407 q 329 374 369 407 q 289 278 289 342 l 289 278 q 328 182 289 215 q 433 149 367 149 z m 433 567 l 433 567 q 531 596 492 567 q 571 686 571 625 l 571 686 q 533 776 571 746 q 433 807 494 807 l 433 807 q 335 776 372 807 q 299 686 299 746 l 299 686 q 336 596 299 625 q 433 567 374 567 z "},"9":{ha:868,x_min:54,x_max:806,o:"m 424 -17 l 424 -17 q 239 22 315 -17 q 122 129 163 60 q 81 294 81 199 l 81 294 l 294 294 q 309 215 294 247 q 353 165 324 182 q 425 149 383 149 l 425 149 q 518 179 486 149 q 562 271 550 210 q 574 422 574 332 l 574 422 q 524 386 556 404 q 452 356 492 368 q 371 344 413 344 l 371 344 q 203 381 274 344 q 93 486 132 418 q 54 646 54 554 l 54 646 q 100 822 54 749 q 228 933 146 894 q 419 971 311 971 l 419 971 q 586 944 514 971 q 707 863 658 918 q 781 718 756 807 q 806 503 806 629 l 806 503 q 781 260 806 360 q 709 100 757 161 q 590 11 661 39 q 424 -17 518 -17 z m 424 497 l 424 497 q 503 516 471 497 q 552 569 536 535 q 568 650 568 603 l 568 650 q 552 732 568 697 q 504 786 536 767 q 424 806 472 806 l 424 806 q 344 786 376 806 q 296 733 313 767 q 279 651 279 699 l 279 651 q 295 569 279 604 q 343 516 311 535 q 424 497 375 497 z "},"=":{ha:901,x_min:101,x_max:800,o:"m 800 432 l 101 432 l 101 593 l 800 593 l 800 432 z m 800 126 l 101 126 l 101 288 l 800 288 l 800 126 z "},"+":{ha:901,x_min:101,x_max:800,o:"m 531 0 l 369 0 l 369 281 l 101 281 l 101 442 l 369 442 l 369 722 l 531 722 l 531 442 l 800 442 l 800 281 l 531 281 l 531 0 z "}," ":{ha:263,x_min:0,x_max:0,o:""},A:{ha:1036,x_min:11,x_max:1026,o:"m 267 0 l 11 0 l 369 954 l 668 954 l 1026 0 l 761 0 l 704 165 l 324 165 l 267 0 z m 453 553 l 383 351 l 643 351 l 575 553 q 562 591 569 568 q 547 640 554 614 q 532 692 539 665 q 518 738 525 718 l 518 738 l 508 738 q 493 678 503 711 l 493 678 l 472 611 q 453 553 461 578 l 453 553 z "},B:{ha:1035,x_min:104,x_max:976,o:"m 692 0 l 104 0 l 104 954 l 688 954 q 821 925 761 954 q 916 843 881 896 q 951 719 951 790 l 951 719 q 930 613 951 657 q 873 540 908 568 q 793 499 838 513 l 793 499 l 793 493 q 886 453 844 482 q 952 376 928 425 q 976 258 976 328 l 976 258 q 938 119 976 176 q 835 31 899 61 q 692 0 771 0 l 692 0 z m 353 399 l 353 192 l 624 192 q 695 218 668 192 q 722 299 722 244 l 722 299 q 710 351 722 328 q 676 386 699 374 q 619 399 653 399 l 619 399 l 353 399 z m 353 769 l 353 575 l 601 575 q 653 588 632 575 q 687 622 675 600 q 699 675 699 644 l 699 675 q 672 744 699 719 q 606 769 646 769 l 606 769 l 353 769 z "},C:{ha:1044,x_min:63,x_max:985,o:"m 543 -17 l 543 -17 q 281 37 389 -17 q 118 200 174 90 q 63 478 63 310 l 63 478 q 187 848 63 725 q 543 971 311 971 l 543 971 q 772 927 672 971 q 928 797 872 883 q 985 581 985 710 l 985 581 l 742 581 q 717 685 742 642 q 649 753 693 729 q 543 776 606 776 l 543 776 q 415 744 465 776 q 342 653 365 713 q 318 508 318 593 l 318 508 l 318 446 q 342 301 318 361 q 415 209 365 240 q 542 178 464 178 l 542 178 q 655 200 608 178 q 726 266 701 222 q 750 371 750 310 l 750 371 l 985 371 q 930 156 985 242 q 776 26 875 69 q 543 -17 676 -17 z "},D:{ha:1049,x_min:104,x_max:986,o:"m 503 0 l 104 0 l 104 954 l 503 954 q 766 903 658 954 q 930 747 874 851 q 986 478 986 642 l 986 478 q 930 209 986 315 q 766 51 874 103 q 503 0 658 0 l 503 0 z m 353 760 l 353 194 l 500 194 q 601 211 558 194 q 674 260 644 228 q 717 339 703 292 q 731 447 731 386 l 731 447 l 731 506 q 717 615 731 568 q 674 694 703 663 q 601 743 644 726 q 500 760 558 760 l 500 760 l 353 760 z "},E:{ha:971,x_min:107,x_max:904,o:"m 904 0 l 107 0 l 107 954 l 894 954 l 894 760 l 356 760 l 356 581 l 826 581 l 826 390 l 356 390 l 356 194 l 904 194 l 904 0 z "},F:{ha:890,x_min:104,x_max:836,o:"m 353 0 l 104 0 l 104 954 l 836 954 l 836 760 l 353 760 l 353 554 l 778 554 l 778 364 l 353 364 l 353 0 z "},G:{ha:1132,x_min:68,x_max:1040,o:"m 539 -17 l 539 -17 q 188 106 308 -17 q 68 478 68 228 l 68 478 q 127 752 68 643 q 299 916 186 861 q 572 971 413 971 l 572 971 q 753 949 668 971 q 903 883 838 926 q 1004 773 968 839 q 1040 618 1040 707 l 1040 618 l 796 618 q 779 685 796 656 q 733 735 763 715 q 664 766 703 756 q 582 776 625 776 l 582 776 q 469 760 518 776 q 388 708 419 743 q 340 624 356 674 q 324 507 324 574 l 324 507 l 324 446 q 351 297 324 357 q 435 208 379 238 q 574 178 492 178 l 574 178 q 688 197 638 178 q 769 253 739 217 q 799 342 799 290 l 799 342 l 799 349 l 542 349 l 542 524 l 1040 524 l 1040 0 l 896 0 l 872 100 q 780 35 829 61 q 672 -4 731 8 q 539 -17 613 -17 z "},H:{ha:1093,x_min:104,x_max:989,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 588 l 740 588 l 740 954 l 989 954 l 989 0 l 740 0 l 740 385 l 353 385 l 353 0 z "},I:{ha:457,x_min:104,x_max:353,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 0 z "},J:{ha:875,x_min:40,x_max:772,o:"m 407 -17 l 407 -17 q 209 17 292 -17 q 83 122 126 51 q 40 301 40 192 l 40 301 l 40 332 l 278 332 l 278 301 q 309 208 278 238 q 401 178 340 178 l 401 178 q 492 215 461 178 q 524 331 524 253 l 524 331 l 524 954 l 772 954 l 772 329 q 729 134 772 211 q 604 20 686 57 q 407 -17 522 -17 z "},K:{ha:1069,x_min:104,x_max:1046,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 531 l 731 954 l 1039 954 l 683 564 l 1046 0 l 751 0 l 511 394 l 353 249 l 353 0 z "},L:{ha:865,x_min:104,x_max:838,o:"m 838 0 l 104 0 l 104 954 l 353 954 l 353 204 l 838 204 l 838 0 z "},M:{ha:1269,x_min:104,x_max:1165,o:"m 331 0 l 104 0 l 104 954 l 467 954 l 582 529 q 599 469 589 507 q 618 389 608 431 q 635 314 628 347 l 635 314 l 646 314 q 660 377 651 340 q 678 455 668 414 q 696 531 688 496 l 696 531 l 813 954 l 1165 954 l 1165 0 l 924 0 l 924 407 q 924 528 924 467 q 926 639 925 589 q 928 711 928 689 l 928 711 l 917 711 q 903 651 913 690 q 884 569 894 611 q 865 496 874 526 l 865 496 l 726 0 l 526 0 l 386 496 l 369 563 q 351 642 360 601 q 335 710 342 682 l 335 710 l 324 710 q 326 622 325 674 q 329 513 328 569 q 331 407 331 457 l 331 407 l 331 0 z "},N:{ha:1093,x_min:104,x_max:989,o:"m 335 0 l 104 0 l 104 954 l 325 954 l 672 511 q 698 479 682 500 q 729 437 714 458 q 751 403 744 415 l 751 403 l 758 404 l 758 954 l 989 954 l 989 0 l 769 0 l 401 467 q 367 513 383 489 q 342 551 351 536 l 342 551 l 335 550 l 335 0 z "},O:{ha:1125,x_min:63,x_max:1063,o:"m 563 -17 l 563 -17 q 294 38 406 -17 q 122 203 182 93 q 63 478 63 313 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 1003 203 1063 313 q 831 38 943 93 q 563 -17 719 -17 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z "},P:{ha:969,x_min:104,x_max:938,o:"m 353 0 l 104 0 l 104 954 l 629 954 q 795 915 726 954 q 901 805 864 875 q 938 640 938 735 l 938 640 q 899 472 938 543 q 791 362 861 401 q 624 322 721 322 l 624 322 l 353 322 l 353 0 z m 353 761 l 353 514 l 565 514 q 654 547 624 514 q 685 638 685 579 l 685 638 q 672 706 685 679 q 632 747 658 732 q 565 761 606 761 l 565 761 l 353 761 z "},Q:{ha:1125,x_min:63,x_max:1063,o:"m 1036 -182 l 728 -182 l 575 -12 q 557 -15 567 -14 q 539 -15 547 -15 l 539 -15 q 283 40 390 -15 q 119 206 176 96 q 63 478 63 317 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 999 198 1063 308 q 821 32 936 88 l 821 32 l 1036 -182 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z "},R:{ha:1042,x_min:104,x_max:1007,o:"m 353 0 l 104 0 l 104 954 l 658 954 q 835 915 764 954 q 941 806 906 875 q 976 653 976 738 l 976 653 q 934 490 976 561 q 815 378 892 418 l 815 378 l 1007 0 l 729 0 l 571 336 l 353 336 l 353 0 z m 353 765 l 353 521 l 610 521 q 692 555 661 521 q 724 646 724 589 l 724 646 q 710 710 724 683 q 671 751 696 736 q 610 765 646 765 l 610 765 l 353 765 z "},S:{ha:968,x_min:61,x_max:913,o:"m 500 -17 l 500 -17 q 331 -1 410 -17 q 191 51 251 15 q 96 147 131 88 q 61 292 61 206 l 61 292 l 61 304 q 63 315 61 311 l 63 315 l 303 315 q 302 305 303 311 q 301 294 301 299 l 301 294 q 324 223 301 250 q 389 184 347 196 q 486 172 431 172 l 486 172 q 543 175 517 172 q 590 185 569 178 q 627 202 611 192 q 651 227 643 213 q 658 261 658 242 l 658 261 q 634 314 658 293 q 569 349 610 335 q 476 375 528 363 q 369 401 425 388 q 263 436 314 415 q 170 489 211 457 q 105 569 129 521 q 81 685 81 617 l 81 685 q 113 815 81 760 q 201 904 144 869 q 331 955 257 939 q 488 971 404 971 l 488 971 q 641 954 569 971 q 768 902 713 938 q 855 813 824 867 q 888 685 886 760 l 888 685 l 888 668 l 649 668 l 649 678 q 631 734 649 710 q 579 773 614 758 q 493 788 544 788 q 406 778 442 788 q 352 750 371 768 q 333 707 333 732 l 333 707 q 358 657 333 676 q 424 624 382 638 q 517 598 465 610 q 623 573 568 586 q 729 540 678 560 q 822 488 781 519 q 888 411 864 457 q 913 300 913 365 l 913 300 q 859 117 913 186 q 712 15 806 47 q 500 -17 618 -17 z "},T:{ha:938,x_min:33,x_max:901,o:"m 592 0 l 343 0 l 343 750 l 33 750 l 33 954 l 901 954 l 901 750 l 592 750 l 592 0 z "},U:{ha:1088,x_min:101,x_max:986,o:"m 543 -17 l 543 -17 q 306 26 406 -17 q 154 156 207 69 q 101 369 101 242 l 101 369 l 101 954 l 351 954 l 351 375 q 400 231 351 283 q 543 178 449 178 l 543 178 q 688 231 638 178 q 738 375 738 283 l 738 375 l 738 954 l 986 954 l 986 369 q 933 156 986 242 q 782 26 881 69 q 543 -17 683 -17 z "},V:{ha:1013,x_min:19,x_max:993,o:"m 651 0 l 363 0 l 19 954 l 286 954 l 461 415 q 475 372 467 399 q 492 316 483 344 q 507 265 501 288 l 507 265 l 517 265 q 531 313 524 286 q 547 367 539 340 q 561 414 556 394 l 561 414 l 736 954 l 993 954 l 651 0 z "},W:{ha:1360,x_min:10,x_max:1350,o:"m 532 0 l 250 0 l 10 954 l 271 954 l 388 453 q 394 417 390 440 q 403 367 399 393 q 413 318 408 340 l 413 318 l 418 318 q 424 351 421 332 q 430 388 426 369 q 437 424 433 407 q 442 453 440 440 l 442 453 l 551 954 l 822 954 l 935 453 q 943 415 939 439 q 952 365 947 392 q 961 318 957 339 l 961 318 l 967 318 q 973 351 969 333 q 980 387 976 368 q 987 422 983 406 q 993 453 990 439 l 993 453 l 1106 954 l 1350 954 l 1110 0 l 832 0 l 710 528 q 701 572 707 547 q 691 622 696 597 q 683 667 686 647 l 683 667 l 678 667 q 671 622 675 647 q 662 572 667 597 q 653 528 657 547 l 653 528 l 532 0 z "},X:{ha:1022,x_min:10,x_max:1015,o:"m 292 0 l 10 0 l 353 503 l 43 954 l 344 954 l 519 676 l 526 676 l 701 954 l 983 954 l 672 503 l 1015 0 l 713 0 l 506 329 l 499 329 l 292 0 z "},Y:{ha:1017,x_min:11,x_max:1004,o:"m 635 0 l 385 0 l 385 378 l 11 954 l 299 954 l 513 597 l 519 597 l 732 954 l 1004 954 l 635 378 l 635 0 z "},Z:{ha:947,x_min:36,x_max:900,o:"m 900 0 l 36 0 l 36 93 l 510 760 l 71 760 l 71 954 l 889 954 l 889 861 l 415 194 l 900 194 l 900 0 z "},a:{ha:856,x_min:44,x_max:849,o:"m 290 -17 l 290 -17 q 201 -8 244 -17 q 122 24 157 1 q 65 88 86 47 q 44 189 44 128 l 44 189 q 78 318 44 268 q 174 397 111 368 q 327 436 238 425 q 528 447 417 447 l 528 447 l 528 493 q 515 547 528 525 q 478 580 503 568 q 414 592 454 592 l 414 592 q 351 583 378 592 q 310 559 324 575 q 296 521 296 543 l 296 521 l 296 508 l 74 508 q 72 521 72 515 l 72 521 l 72 533 q 113 647 72 599 q 231 722 154 696 q 415 749 307 749 l 415 749 q 592 724 517 749 q 712 647 668 699 q 756 513 756 596 l 756 513 l 756 200 q 769 163 756 176 q 801 149 782 149 l 801 149 l 849 149 l 849 8 q 801 -8 833 1 q 722 -17 768 -17 l 722 -17 q 640 -5 675 -17 q 581 28 604 7 q 550 79 558 50 l 550 79 l 540 79 q 478 29 514 51 q 397 -5 443 7 q 290 -17 350 -17 z m 375 140 l 375 140 q 436 150 408 140 q 484 177 464 160 q 516 219 504 194 q 528 274 528 244 l 528 274 l 528 322 q 392 311 449 322 q 304 276 335 300 q 274 217 274 253 l 274 217 q 287 173 274 190 q 322 148 300 156 q 375 140 344 140 z "},b:{ha:879,x_min:88,x_max:826,o:"m 526 -17 l 526 -17 q 396 13 456 -17 q 300 101 336 42 l 300 101 l 290 101 l 274 0 l 88 0 l 88 1006 l 315 1006 l 315 657 l 324 657 q 377 707 346 686 q 447 738 408 728 q 531 749 486 749 l 531 749 q 688 707 621 749 q 790 581 754 665 q 826 368 826 497 l 826 368 q 790 151 826 236 q 687 25 754 67 q 526 -17 619 -17 z m 456 161 l 456 161 q 538 181 507 161 q 583 242 569 201 q 597 340 597 282 l 597 340 l 597 389 q 583 489 597 449 q 538 550 569 529 q 456 571 507 571 l 456 571 q 391 557 418 571 q 347 518 364 543 q 322 458 329 493 q 314 382 314 424 l 314 382 l 314 349 q 328 249 314 292 q 374 184 343 207 q 456 161 406 161 z "},c:{ha:850,x_min:51,x_max:793,o:"m 432 -17 l 432 -17 q 226 25 311 -17 q 97 152 142 67 q 51 367 51 238 l 51 367 q 97 581 51 496 q 228 708 143 667 q 432 750 313 750 l 432 750 q 576 732 510 750 q 691 676 642 714 q 767 582 740 639 q 793 446 793 525 l 793 446 l 569 446 q 553 524 569 493 q 507 569 538 554 q 431 585 476 585 l 431 585 q 345 563 378 585 q 297 497 313 540 q 282 390 282 454 l 282 390 l 282 340 q 297 235 282 278 q 347 170 313 192 q 436 149 382 149 l 436 149 q 515 163 483 149 q 563 209 546 178 q 579 288 579 240 l 579 288 l 793 288 q 767 153 793 211 q 692 58 740 96 q 576 2 643 21 q 432 -17 510 -17 z "},d:{ha:879,x_min:51,x_max:792,o:"m 353 -17 l 353 -17 q 192 25 260 -17 q 88 151 124 67 q 51 368 51 236 l 51 368 q 88 581 51 497 q 192 707 125 665 q 349 749 258 749 l 349 749 q 431 739 392 749 q 502 708 471 729 q 556 657 533 688 l 556 657 l 564 657 l 564 1006 l 792 1006 l 792 0 l 606 0 l 589 101 l 579 101 q 483 13 542 42 q 353 -17 425 -17 z m 424 161 l 424 161 q 505 184 474 161 q 551 249 536 207 q 565 349 565 292 l 565 349 l 565 382 q 557 458 565 424 q 532 518 549 493 q 488 557 515 543 q 424 571 461 571 l 424 571 q 341 550 372 571 q 296 489 310 529 q 282 389 282 449 l 282 389 l 282 340 q 296 242 282 282 q 341 181 310 201 q 424 161 372 161 z "},e:{ha:860,x_min:51,x_max:807,o:"m 444 -17 l 444 -17 q 232 24 319 -17 q 98 150 144 65 q 51 367 51 235 l 51 367 q 97 581 51 496 q 229 707 143 665 q 436 749 315 749 l 436 749 q 638 708 556 749 q 764 585 721 668 q 807 369 807 501 l 807 369 l 807 321 l 282 321 q 299 222 282 263 q 350 161 315 182 q 443 140 385 140 l 443 140 q 504 149 478 140 q 549 173 531 157 q 576 211 567 189 q 586 261 586 233 l 586 261 l 807 261 q 783 142 807 194 q 711 55 758 90 q 597 1 664 19 q 444 -17 529 -17 z m 283 447 l 283 447 l 575 447 q 566 510 575 483 q 540 556 557 538 q 498 583 522 574 q 442 592 474 592 l 442 592 q 358 575 392 592 q 307 526 325 558 q 283 447 289 494 z "},f:{ha:489,x_min:15,x_max:483,o:"m 346 0 l 119 0 l 119 567 l 15 567 l 15 732 l 119 732 l 119 792 q 145 919 119 868 q 222 994 171 969 q 349 1019 274 1019 l 349 1019 q 394 1017 369 1019 q 444 1008 419 1014 q 483 997 468 1003 l 483 997 l 483 854 l 417 854 q 362 838 378 854 q 346 786 346 821 l 346 786 l 346 732 l 483 732 l 483 567 l 346 567 l 346 0 z "},g:{ha:878,x_min:18,x_max:864,o:"m 578 -274 l 204 -274 q 113 -252 156 -274 q 44 -191 69 -231 q 18 -99 18 -151 l 18 -99 q 53 -1 18 -40 q 133 58 89 39 l 133 58 q 81 110 101 79 q 61 181 61 142 l 61 181 q 101 272 61 235 q 196 322 142 310 l 196 322 q 115 401 146 354 q 83 507 83 449 l 83 507 q 128 644 83 592 q 253 723 174 697 q 433 749 332 749 l 433 749 q 506 745 474 749 q 565 735 539 742 l 565 735 q 642 804 621 768 q 664 863 663 840 l 664 863 l 863 863 q 843 769 863 807 q 788 707 824 731 q 701 671 751 683 l 701 671 q 760 598 739 640 q 781 507 781 556 l 781 507 q 741 374 781 428 q 632 293 701 321 q 472 265 563 265 l 472 265 l 364 265 q 306 253 325 265 q 288 222 288 242 l 288 222 q 304 191 288 204 q 361 178 321 178 l 361 178 l 643 178 q 807 117 750 178 q 864 -36 864 57 l 864 -36 q 825 -160 864 -107 q 722 -244 786 -214 q 578 -274 657 -274 l 578 -274 z m 314 -135 l 314 -135 l 554 -135 q 596 -126 578 -135 q 624 -101 614 -117 q 635 -64 635 -85 l 635 -64 q 613 -11 635 -29 q 558 7 590 7 l 558 7 l 314 7 q 260 -12 282 7 q 239 -62 239 -31 l 239 -62 q 260 -115 239 -94 q 314 -135 282 -135 z m 432 399 l 432 399 q 524 426 492 399 q 557 507 557 454 l 557 507 q 524 588 557 561 q 432 615 492 615 l 432 615 q 342 588 375 615 q 308 507 308 561 l 308 507 q 322 448 308 472 q 364 411 336 424 q 432 399 392 399 z "},h:{ha:874,x_min:86,x_max:790,o:"m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 653 l 324 653 q 381 703 347 682 q 457 737 415 725 q 543 749 499 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z "},i:{ha:400,x_min:86,x_max:314,o:"m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 314 0 l 86 0 l 86 732 l 314 732 l 314 0 z "},j:{ha:397,x_min:-54,x_max:314,o:"m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 93 -274 l 93 -274 q 45 -271 72 -274 q -9 -262 18 -268 q -54 -251 -36 -257 l -54 -251 l -54 -108 l 17 -108 q 69 -88 53 -108 q 86 -31 86 -68 l 86 -31 l 86 732 l 314 732 l 314 -51 q 292 -171 314 -121 q 222 -247 271 -221 q 93 -274 174 -274 z "},k:{ha:847,x_min:86,x_max:838,o:"m 314 0 l 86 0 l 86 1007 l 314 1007 l 314 438 l 561 732 l 828 732 l 568 442 l 838 0 l 578 0 l 415 285 l 314 186 l 314 0 z "},l:{ha:400,x_min:86,x_max:314,o:"m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 0 z "},m:{ha:1301,x_min:86,x_max:1218,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 360 693 325 665 q 439 735 396 721 q 531 749 482 749 l 531 749 q 658 719 606 749 q 739 628 711 689 l 739 628 l 749 628 q 809 693 774 665 q 888 735 844 721 q 979 749 932 749 l 979 749 q 1108 720 1056 749 q 1190 634 1161 692 q 1218 488 1218 576 l 1218 488 l 1218 0 l 990 0 l 990 453 q 983 505 990 483 q 964 541 976 526 q 932 563 951 556 q 890 569 913 569 l 890 569 q 826 551 854 569 q 782 501 797 532 q 767 428 767 469 l 767 428 l 767 0 l 539 0 l 539 453 q 532 505 539 483 q 513 541 525 526 q 481 563 500 556 q 439 569 461 569 l 439 569 q 374 551 403 569 q 330 501 346 532 q 314 428 314 469 l 314 428 l 314 0 z "},n:{ha:874,x_min:86,x_max:790,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 364 693 328 665 q 446 735 400 721 q 543 749 492 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z "},o:{ha:882,x_min:51,x_max:831,o:"m 440 -17 l 440 -17 q 231 25 318 -17 q 98 152 144 67 q 51 367 51 238 l 51 367 q 98 581 51 496 q 231 707 144 665 q 440 749 318 749 l 440 749 q 651 707 564 749 q 784 581 738 665 q 831 367 831 496 l 831 367 q 784 152 831 238 q 651 25 738 67 q 440 -17 564 -17 z m 440 149 l 440 149 q 533 171 497 149 q 584 235 568 193 q 600 340 600 278 l 600 340 l 600 392 q 584 497 600 454 q 533 562 568 540 q 440 583 497 583 l 440 583 q 349 562 385 583 q 298 497 314 540 q 282 392 282 454 l 282 392 l 282 340 q 298 235 282 278 q 349 171 314 193 q 440 149 385 149 z "},p:{ha:879,x_min:88,x_max:826,o:"m 315 -258 l 88 -258 l 88 732 l 274 732 l 293 631 l 303 631 q 398 721 340 693 q 526 749 456 749 l 526 749 q 687 707 619 749 q 790 581 754 665 q 826 365 826 496 l 826 365 q 790 151 826 236 q 688 25 754 67 q 531 -17 621 -17 l 531 -17 q 447 -7 486 -17 q 377 24 408 3 q 324 75 346 44 l 324 75 l 315 75 l 315 -258 z m 456 161 l 456 161 q 538 182 507 161 q 583 243 569 203 q 597 342 597 283 l 597 342 l 597 390 q 583 490 597 449 q 538 551 569 531 q 456 571 507 571 l 456 571 q 374 548 406 571 q 328 483 343 525 q 314 383 314 440 l 314 383 l 314 350 q 322 274 314 308 q 347 214 329 239 q 391 175 364 189 q 456 161 418 161 z "},q:{ha:879,x_min:51,x_max:792,o:"m 792 -258 l 564 -258 l 564 75 l 556 75 q 500 25 531 46 q 431 -6 469 4 q 349 -17 392 -17 l 349 -17 q 192 25 258 -17 q 88 151 125 67 q 51 365 51 236 l 51 365 q 88 581 51 496 q 192 707 124 665 q 353 749 260 749 l 353 749 q 483 719 424 749 q 576 631 542 689 l 576 631 l 586 631 l 606 732 l 792 732 l 792 -258 z m 424 161 l 424 161 q 488 175 461 161 q 532 214 515 189 q 557 274 549 239 q 565 350 565 308 l 565 350 l 565 383 q 551 483 565 440 q 505 548 536 525 q 424 571 474 571 l 424 571 q 341 551 372 571 q 296 490 310 531 q 282 390 282 449 l 282 390 l 282 342 q 296 243 282 283 q 341 182 310 203 q 424 161 372 161 z "},r:{ha:565,x_min:86,x_max:556,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 619 l 300 619 q 341 687 317 657 q 401 733 365 717 q 479 750 436 750 l 479 750 q 525 745 504 750 q 556 735 546 740 l 556 735 l 556 536 l 483 536 q 408 524 440 536 q 354 488 375 513 q 324 429 333 464 q 314 349 314 394 l 314 349 l 314 0 z "},s:{ha:804,x_min:51,x_max:754,o:"m 400 -17 l 400 -17 q 265 -1 328 -17 q 153 43 201 14 q 78 115 106 72 q 51 215 51 158 l 51 215 l 51 226 q 53 235 51 231 l 53 235 l 268 235 l 268 222 q 288 172 269 192 q 338 142 307 151 q 404 133 368 133 l 404 133 q 460 139 431 133 q 511 158 490 144 q 532 199 532 172 l 532 199 q 506 243 532 228 q 438 269 481 258 q 347 289 396 279 l 347 289 q 249 314 299 300 q 159 352 200 328 q 93 415 118 376 q 68 514 68 454 l 68 514 q 95 623 68 578 q 169 696 122 668 q 278 736 217 724 q 410 749 340 749 l 410 749 q 531 736 474 749 q 635 698 589 724 q 708 633 682 672 q 735 540 735 593 l 735 540 q 734 526 735 533 q 733 515 733 518 l 733 515 l 519 515 l 519 526 q 504 565 519 550 q 463 590 489 581 q 404 599 436 599 l 404 599 q 363 595 383 599 q 326 585 343 592 q 299 568 310 579 q 289 540 289 557 l 289 540 q 307 506 289 519 q 356 485 325 493 q 425 467 388 476 l 425 467 q 533 444 476 456 q 641 410 590 432 q 723 347 692 389 q 754 231 754 304 l 754 231 q 726 113 754 161 q 650 37 699 65 q 538 -4 601 8 q 400 -17 474 -17 z "},t:{ha:535,x_min:29,x_max:494,o:"m 343 -17 l 343 -17 q 223 5 272 -17 q 149 69 174 26 q 125 174 125 113 l 125 174 l 125 567 l 29 567 l 29 732 l 132 732 l 179 946 l 351 946 l 351 732 l 494 732 l 494 567 l 351 567 l 351 229 q 367 169 351 190 q 422 149 382 149 l 422 149 l 494 149 l 494 7 q 449 -5 476 1 q 394 -14 422 -11 q 343 -17 367 -17 z "},u:{ha:874,x_min:82,x_max:786,o:"m 329 -17 l 329 -17 q 147 49 211 -17 q 82 249 82 114 l 82 249 l 82 732 l 310 732 l 310 281 q 317 229 310 251 q 339 192 325 207 q 374 169 353 176 q 421 163 396 163 l 421 163 q 492 181 461 163 q 540 233 522 200 q 558 304 558 265 l 558 304 l 558 732 l 786 732 l 786 0 l 599 0 l 585 104 l 575 104 q 512 40 550 68 q 427 -2 474 13 q 329 -17 381 -17 z "},v:{ha:797,x_min:3,x_max:793,o:"m 517 0 l 278 0 l 3 732 l 246 732 l 339 453 q 357 392 346 432 q 381 310 368 353 q 403 232 393 268 l 403 232 l 411 232 q 433 307 421 265 q 456 388 444 349 q 475 453 467 428 l 475 453 l 567 732 l 793 732 l 517 0 z "},w:{ha:1193,x_min:1,x_max:1192,o:"m 475 0 l 247 0 l 1 732 l 244 732 l 321 429 q 335 372 328 406 q 351 306 343 338 q 364 253 358 274 l 364 253 l 372 253 q 388 315 381 283 q 403 378 394 347 l 403 378 l 415 431 l 490 732 l 724 732 l 800 429 q 813 378 806 410 q 828 313 819 346 q 842 253 836 279 l 842 253 l 851 253 q 863 307 856 276 q 879 370 871 338 q 893 426 888 403 l 893 426 l 971 732 l 1192 732 l 946 0 l 718 0 l 642 293 q 628 350 636 318 q 613 413 619 382 q 600 465 606 443 l 600 465 l 594 465 q 585 424 592 450 q 572 364 579 397 q 553 294 564 331 l 553 294 l 475 0 z "},x:{ha:850,x_min:10,x_max:839,o:"m 264 0 l 10 0 l 282 383 l 33 732 l 303 732 l 432 524 l 439 524 l 569 732 l 824 732 l 572 382 l 839 0 l 572 0 l 422 240 l 415 240 l 264 0 z "},y:{ha:797,x_min:3,x_max:793,o:"m 203 -274 l 203 -274 q 115 -266 153 -274 q 63 -253 78 -258 l 63 -253 l 63 -108 l 158 -108 q 225 -91 197 -108 q 269 -49 253 -74 q 292 0 285 -25 l 292 0 l 3 732 l 246 732 l 354 411 q 373 353 363 389 q 394 281 383 318 q 411 215 404 244 l 411 215 l 419 215 q 432 260 425 235 q 446 313 439 286 q 460 365 453 340 q 474 410 468 390 l 474 410 l 567 732 l 793 732 l 540 29 q 488 -90 517 -35 q 421 -187 460 -146 q 328 -251 382 -228 q 203 -274 275 -274 z "},z:{ha:743,x_min:31,x_max:707,o:"m 707 0 l 31 0 l 31 85 l 367 567 l 50 567 l 50 732 l 694 732 l 694 650 l 356 165 l 707 165 l 707 0 z "},".":{ha:442,x_min:100,x_max:342,o:"m 342 0 l 100 0 l 100 232 l 342 232 l 342 0 z "},",":{ha:442,x_min:96,x_max:342,o:"m 96 -249 l 96 -249 l 96 -151 q 158 -126 131 -147 q 201 -72 185 -106 q 218 0 218 -39 l 218 0 l 101 0 l 101 232 l 342 232 l 342 25 q 308 -122 342 -64 q 217 -210 274 -179 q 96 -249 161 -240 z "},"'":{ha:365,x_min:82,x_max:286,o:"m 236 558 l 128 558 l 82 750 l 82 954 l 286 954 l 286 750 l 236 558 z "},"\u2019":{ha:388,x_min:81,x_max:307,o:"m 81 496 l 81 496 l 81 585 q 138 610 113 589 q 178 667 164 632 q 193 742 193 701 l 193 742 l 86 742 l 86 954 l 307 954 l 307 764 q 275 620 307 678 q 192 533 243 563 q 81 496 140 503 z "},"!":{ha:436,x_min:96,x_max:342,o:"m 289 306 l 147 306 l 96 954 l 342 954 l 289 306 z m 333 0 l 104 0 l 104 221 l 333 221 l 333 0 z "},"?":{ha:850,x_min:69,x_max:769,o:"m 525 307 l 324 307 l 324 375 q 338 444 324 414 q 376 498 353 474 q 425 544 399 522 q 474 587 451 565 q 511 634 496 608 q 526 690 526 660 l 526 690 q 522 726 526 708 q 504 761 517 744 q 470 788 492 778 q 414 799 449 799 l 414 799 q 349 786 374 799 q 313 754 325 774 q 295 713 300 735 q 290 669 290 690 l 290 669 l 290 651 q 292 632 290 642 l 292 632 l 74 632 q 71 654 72 642 q 69 682 69 667 l 69 682 q 85 778 69 733 q 132 858 101 822 q 208 918 163 893 q 309 957 253 943 q 432 971 365 971 l 432 971 q 545 959 493 971 q 639 925 597 947 q 709 870 681 903 q 753 796 738 838 q 769 704 769 754 l 769 704 q 752 608 769 649 q 706 538 735 568 q 647 485 678 508 q 589 440 617 461 q 543 395 561 418 q 525 343 525 372 l 525 343 l 525 307 z m 540 0 l 311 0 l 311 221 l 540 221 l 540 0 z "},$:{ha:804,x_min:51,x_max:754,o:"m 447 -82 l 357 -82 l 357 96 q 265 110 308 99 l 265 110 q 153 154 201 125 q 78 226 106 183 q 51 326 51 269 l 51 326 l 51 338 q 53 346 51 342 l 53 346 l 268 346 l 268 333 q 288 283 269 303 q 338 254 307 263 l 338 254 q 357 249 347 250 l 357 249 l 357 399 q 347 400 353 399 l 347 400 q 249 425 299 411 q 159 463 200 439 q 93 526 118 488 q 68 625 68 565 l 68 625 q 95 734 68 689 q 169 807 122 779 q 279 847 217 835 l 279 847 q 357 858 317 856 l 357 858 l 357 1029 l 447 1029 l 447 858 q 532 847 490 856 l 532 847 q 635 809 589 835 q 708 744 682 783 q 735 651 735 704 l 735 651 q 734 637 735 644 q 733 626 733 629 l 733 626 l 519 626 l 519 638 q 504 676 519 661 q 463 701 489 692 l 463 701 q 447 706 456 703 l 447 706 l 447 574 q 533 556 489 564 l 533 556 q 641 522 590 543 q 723 458 692 500 q 754 342 754 415 l 754 342 q 726 224 754 272 q 650 148 699 176 q 538 107 601 119 l 538 107 q 447 96 494 99 l 447 96 l 447 -82 z m 447 378 l 447 247 q 461 250 454 249 l 461 250 q 511 269 490 256 q 532 310 532 283 l 532 310 q 507 354 532 339 l 507 354 q 447 378 483 368 l 447 378 z m 357 596 l 357 596 l 357 706 q 326 697 340 701 l 326 697 q 299 679 310 690 q 289 651 289 668 l 289 651 q 307 617 289 631 q 357 596 325 604 l 357 596 q 357 596 357 596 z "},"%":{ha:1367,x_min:94,x_max:1274,o:"m 440 0 l 296 0 l 931 954 l 1075 954 l 440 0 z m 338 472 l 338 472 q 203 499 257 472 q 122 581 149 526 q 94 721 94 636 l 94 721 q 122 861 94 806 q 203 944 149 917 q 338 971 257 971 l 338 971 q 472 944 418 971 q 551 861 525 917 q 578 721 578 806 l 578 721 q 551 581 578 636 q 472 499 525 526 q 338 472 418 472 z m 338 576 l 338 576 q 406 613 388 576 q 424 706 424 649 l 424 706 l 424 738 q 416 804 424 775 q 390 850 408 833 q 338 867 371 867 l 338 867 q 269 831 288 867 q 250 738 250 794 l 250 738 l 250 706 q 269 613 250 649 q 338 576 288 576 z m 1033 -17 l 1033 -17 q 899 11 953 -17 q 818 94 844 39 q 792 232 792 149 l 792 232 q 818 372 792 317 q 899 455 844 428 q 1033 482 953 482 l 1033 482 q 1168 455 1114 482 q 1248 372 1222 428 q 1274 232 1274 317 l 1274 232 q 1248 93 1274 149 q 1168 10 1222 38 q 1033 -17 1114 -17 z m 1033 88 l 1033 88 q 1101 124 1083 88 q 1119 217 1119 160 l 1119 217 l 1119 249 q 1112 316 1119 288 q 1085 361 1104 344 q 1033 378 1067 378 l 1033 378 q 965 342 983 378 q 946 249 946 307 l 946 249 l 946 217 q 965 124 946 160 q 1033 88 983 88 z "},"&":{ha:1133,x_min:90,x_max:1107,o:"m 526 -17 l 526 -17 q 287 19 383 -17 q 140 117 190 54 q 90 261 90 179 l 90 261 q 139 411 90 353 q 267 493 188 469 l 267 493 l 267 499 q 159 574 203 524 q 115 703 115 625 l 115 703 q 164 842 115 782 q 305 937 213 903 q 528 971 397 971 l 528 971 q 750 937 657 971 q 893 844 843 903 q 943 710 943 785 l 943 710 l 943 675 l 732 675 l 732 696 q 708 753 731 729 q 644 789 686 776 q 539 801 601 801 l 539 801 q 456 792 492 801 q 396 765 419 782 q 360 724 372 747 q 349 674 349 701 l 349 674 q 367 612 349 636 q 415 576 385 588 q 478 564 444 564 l 478 564 l 599 564 l 599 407 l 463 407 q 394 396 426 407 q 342 359 361 385 q 324 288 324 333 l 324 288 q 345 215 324 244 q 413 169 367 185 q 528 153 458 153 l 528 153 q 648 170 603 153 q 713 219 693 188 q 732 290 732 250 l 732 290 l 732 564 l 1107 564 l 1107 407 l 944 407 l 944 294 q 901 131 944 201 q 764 22 857 60 q 526 -17 671 -17 z "},"-":{ha:463,x_min:56,x_max:407,o:"m 407 283 l 56 283 l 56 474 l 407 474 l 407 283 z "},":":{ha:464,x_min:113,x_max:353,o:"m 353 500 l 113 500 l 113 732 l 353 732 l 353 500 z m 353 0 l 113 0 l 113 232 l 353 232 l 353 0 z "},"|":{ha:368,x_min:104,x_max:264,o:"m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z "}},familyName:"Archivo ExtraBold",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-220,xMax:1393,yMin:-405,yMax:1100},resolution:1e3};var V1={glyphs:{"0":{ha:868,x_min:64,x_max:844,o:"m 385 -17 l 385 -17 q 205 17 276 -17 q 99 122 133 51 q 64 299 64 193 l 64 299 q 66 355 64 325 q 72 416 68 385 q 83 482 76 447 l 83 482 q 140 701 106 608 q 228 853 175 793 q 353 942 281 913 q 524 971 426 971 l 524 971 q 705 937 635 971 q 810 833 775 903 q 844 657 844 763 l 844 657 q 842 601 844 631 q 835 540 839 572 q 825 475 832 508 l 825 475 q 768 255 804 347 q 680 102 732 163 q 556 13 628 42 q 385 -17 483 -17 z m 394 149 l 394 149 q 473 167 442 149 q 526 226 504 186 q 565 335 549 267 q 600 499 582 403 l 600 499 q 610 558 606 532 q 617 604 614 583 q 620 642 619 625 q 621 672 621 658 l 621 672 q 596 774 621 742 q 514 806 571 806 l 514 806 q 435 787 467 806 q 381 727 403 768 q 342 619 360 686 q 307 456 325 553 l 307 456 q 297 397 301 422 q 290 351 293 371 q 287 314 288 331 q 286 283 286 297 l 286 283 q 311 182 286 215 q 394 149 336 149 z "},"1":{ha:868,x_min:40,x_max:743,o:"m 711 0 l 40 0 l 72 179 l 300 179 l 390 689 l 161 689 l 186 824 q 276 838 226 826 q 380 868 326 850 q 484 908 433 886 q 576 956 535 931 l 576 956 l 665 956 l 528 179 l 743 179 l 711 0 z "},"2":{ha:868,x_min:-3,x_max:846,o:"m 729 0 l -3 0 l 8 57 q 60 182 21 125 q 153 288 99 239 q 271 379 208 336 q 394 462 333 422 q 505 542 454 501 q 585 624 556 582 q 615 711 615 665 l 615 711 q 590 772 615 744 q 503 800 564 800 l 503 800 q 420 783 456 800 q 363 735 385 765 q 333 663 342 704 l 333 663 l 326 621 l 113 621 q 155 779 121 713 q 245 888 189 846 q 373 951 301 931 q 525 971 444 971 l 525 971 q 705 938 633 971 q 811 848 776 904 q 846 724 846 792 l 846 724 q 826 610 846 663 q 771 515 806 558 q 692 433 736 471 q 599 363 647 396 q 501 300 550 331 q 410 239 453 269 l 410 239 q 383 219 397 231 q 361 197 369 207 l 361 197 l 764 197 l 729 0 z "},"3":{ha:868,x_min:38,x_max:849,o:"m 388 -17 l 388 -17 q 192 13 269 -17 q 76 94 115 42 q 38 215 38 147 l 38 215 q 40 247 38 229 q 47 289 42 265 l 47 289 l 258 289 q 254 264 256 274 q 253 246 253 254 l 253 246 q 288 174 253 199 q 388 150 324 150 l 388 150 q 481 169 440 150 q 544 226 521 189 q 567 315 567 263 l 567 315 q 551 370 567 350 q 510 399 536 390 q 453 407 485 407 l 453 407 l 363 407 l 389 564 l 471 564 q 526 574 500 564 q 572 602 551 583 q 604 648 593 621 q 615 710 615 675 l 615 710 q 602 760 615 739 q 563 792 589 781 q 501 804 538 804 l 501 804 q 426 790 458 804 q 374 750 394 775 q 349 693 354 725 l 349 693 l 346 675 l 140 675 l 146 707 q 209 843 160 783 q 340 937 258 903 q 526 971 421 971 l 526 971 q 700 943 628 971 q 810 865 772 915 q 849 744 849 814 l 849 744 q 824 633 849 682 q 756 550 799 583 q 663 499 713 517 l 663 499 l 661 493 q 758 422 722 471 q 793 300 793 372 l 793 300 q 739 128 793 199 q 592 20 685 57 q 388 -17 499 -17 z "},"4":{ha:869,x_min:13,x_max:835,o:"m 640 0 l 419 0 l 457 203 l 13 203 l 43 379 q 169 551 106 457 q 290 751 232 644 q 397 971 349 858 l 397 971 l 639 971 q 578 845 617 913 q 494 709 540 778 q 398 577 447 640 q 303 462 349 514 q 222 378 257 410 l 222 378 l 488 378 l 522 585 q 567 646 543 611 q 615 718 592 681 q 658 792 639 756 q 690 857 678 828 l 690 857 l 792 857 l 708 378 l 835 378 l 804 203 l 678 203 l 640 0 z "},"5":{ha:868,x_min:40,x_max:847,o:"m 393 -17 l 393 -17 q 202 15 281 -17 q 82 104 124 46 q 40 242 40 163 l 40 242 q 42 272 40 256 q 46 303 43 288 l 46 303 l 258 303 q 256 285 257 293 q 256 268 256 276 l 256 268 q 270 207 256 233 q 313 166 285 181 q 383 151 342 151 l 383 151 q 456 165 422 151 q 515 204 489 178 q 555 267 540 231 q 569 350 569 304 l 569 350 q 538 439 569 407 q 446 471 506 471 l 446 471 q 376 458 406 471 q 326 429 346 446 q 292 397 306 413 l 292 397 l 104 422 l 238 954 l 847 954 l 813 756 l 382 756 l 336 571 q 378 596 353 582 q 440 619 403 610 q 528 629 478 629 l 528 629 q 671 600 610 629 q 766 513 732 571 q 800 374 800 456 l 800 374 q 746 167 800 254 q 599 31 692 79 q 393 -17 507 -17 z "},"6":{ha:868,x_min:58,x_max:840,o:"m 393 -17 l 393 -17 q 211 17 286 -17 q 97 121 136 50 q 58 304 58 192 l 58 304 q 62 378 58 339 q 74 460 65 417 l 74 460 q 166 763 107 651 q 315 922 225 874 q 528 971 406 971 l 528 971 q 697 942 628 971 q 803 859 767 914 q 840 728 840 804 l 840 728 q 839 695 840 713 q 835 660 838 678 l 835 660 l 621 660 q 624 683 624 672 q 625 701 625 693 l 625 701 q 598 780 625 754 q 517 806 571 806 l 517 806 q 418 775 456 806 q 358 684 381 744 q 319 533 336 624 l 319 533 q 372 569 340 551 q 442 598 403 586 q 525 610 482 610 l 525 610 q 675 581 613 610 q 772 496 738 551 q 806 363 806 440 l 806 363 q 774 205 806 275 q 688 85 743 135 q 557 10 632 36 q 393 -17 482 -17 z m 401 149 l 401 149 q 474 165 442 149 q 528 206 507 181 l 528 206 q 564 266 551 231 q 576 340 576 301 l 576 340 q 563 403 576 376 q 524 443 550 429 q 457 457 497 457 l 457 457 q 383 442 417 457 q 328 401 350 428 l 328 401 q 292 342 304 376 q 281 265 281 307 l 281 265 q 293 203 281 229 q 333 163 306 176 q 401 149 360 149 z "},"7":{ha:868,x_min:129,x_max:914,o:"m 411 0 l 136 0 q 199 210 156 107 q 301 409 242 313 q 433 592 361 506 q 581 754 504 679 l 581 754 l 129 754 l 165 954 l 914 954 l 893 835 q 772 705 832 772 q 656 563 711 638 q 553 410 600 489 q 474 249 507 332 q 425 76 440 165 l 425 76 q 417 40 421 57 q 411 0 414 22 l 411 0 z "},"8":{ha:868,x_min:25,x_max:829,o:"m 371 -17 l 371 -17 q 181 12 258 -17 q 65 93 104 40 q 25 215 25 146 l 25 215 q 49 332 25 279 q 117 424 72 385 q 221 486 161 464 l 221 486 q 154 562 176 518 q 132 657 132 606 l 132 657 q 160 784 132 726 q 241 883 189 842 q 362 948 293 925 q 513 971 431 971 l 513 971 q 680 942 608 971 q 790 860 751 913 q 829 735 829 807 l 829 735 q 810 635 829 682 q 756 551 792 589 q 665 486 719 514 l 665 486 q 752 413 721 460 q 783 300 783 367 l 783 300 q 731 132 783 203 q 587 22 679 61 q 371 -17 494 -17 z m 383 149 l 383 149 q 428 153 407 149 q 469 167 450 158 q 504 189 489 176 l 504 189 q 540 239 526 210 q 554 306 554 268 l 554 306 q 520 381 554 356 q 429 407 486 407 l 429 407 q 385 403 406 407 q 345 390 364 399 q 311 368 326 382 l 311 368 q 274 317 288 347 q 260 249 260 288 l 260 249 q 292 174 260 200 q 383 149 325 149 z m 456 567 l 456 567 q 500 571 479 567 q 539 584 521 575 q 571 606 557 593 l 571 606 q 605 651 593 624 q 617 713 617 678 l 617 713 q 585 783 617 760 q 500 807 553 807 l 500 807 q 456 802 476 807 q 419 789 436 797 q 388 768 401 781 l 388 768 q 354 722 367 750 q 342 657 342 694 l 342 657 q 372 589 342 611 q 456 567 403 567 z "},"9":{ha:868,x_min:61,x_max:843,o:"m 374 -17 l 374 -17 q 205 13 275 -17 q 98 97 135 42 q 61 226 61 151 l 61 226 q 63 260 61 243 q 67 294 64 276 l 67 294 l 279 294 q 277 272 278 282 q 276 253 276 261 l 276 253 q 303 175 276 201 q 385 149 331 149 l 385 149 q 484 179 447 149 q 544 270 521 210 q 582 421 567 331 l 582 421 q 530 385 561 403 q 460 356 499 368 q 376 344 421 344 l 376 344 q 226 374 289 344 q 130 460 164 404 q 96 592 96 515 l 96 592 q 127 749 96 679 q 214 869 158 819 q 344 944 269 918 q 508 971 419 971 l 508 971 q 690 938 615 971 q 804 833 765 904 q 843 650 843 763 l 843 650 q 840 576 843 615 q 828 494 836 538 l 828 494 q 736 192 796 304 q 586 32 676 81 q 374 -17 496 -17 z m 444 497 l 444 497 q 518 513 485 497 q 574 553 551 528 l 574 553 q 609 613 597 578 q 621 690 621 649 l 621 690 q 608 752 621 726 q 568 792 594 778 q 500 806 542 806 l 500 806 q 427 790 460 806 q 374 749 394 775 l 374 749 q 338 689 350 724 q 325 614 325 654 l 325 614 q 338 552 325 578 q 378 512 351 526 q 444 497 404 497 z "},"=":{ha:901,x_min:60,x_max:840,o:"m 811 432 l 113 432 l 143 593 l 840 593 l 811 432 z m 757 126 l 60 126 l 88 288 l 786 288 l 757 126 z "},"+":{ha:901,x_min:86,x_max:814,o:"m 467 0 l 303 0 l 353 281 l 86 281 l 115 442 l 383 442 l 432 722 l 596 722 l 546 442 l 814 442 l 785 281 l 517 281 l 467 0 z "}," ":{ha:263,x_min:0,x_max:0,o:""},A:{ha:1036,x_min:-53,x_max:961,o:"m 208 0 l -53 0 l 474 954 l 772 954 l 961 0 l 706 0 l 678 165 l 294 165 l 208 0 z m 489 549 l 389 351 l 649 351 l 615 550 q 608 600 613 575 l 608 600 l 600 649 q 593 694 596 672 q 588 738 590 717 l 588 738 l 582 738 q 551 674 568 708 q 519 608 535 640 l 519 608 l 489 549 z "},B:{ha:1035,x_min:39,x_max:1017,o:"m 631 0 l 39 0 l 208 954 l 744 954 q 895 926 835 954 q 986 850 956 899 q 1017 739 1017 801 l 1017 739 q 991 631 1017 681 q 921 546 965 581 q 818 499 876 511 l 818 499 l 817 493 q 921 424 879 474 q 963 294 963 375 l 963 294 q 917 133 963 199 q 797 33 872 67 q 631 0 721 0 l 631 0 z m 358 397 l 324 192 l 592 192 q 654 206 626 192 q 697 247 682 219 q 713 311 713 274 l 713 311 q 690 374 713 350 q 615 397 667 397 l 615 397 l 358 397 z m 425 769 l 390 575 l 638 575 q 691 584 668 575 q 728 609 714 593 q 749 645 742 625 q 756 688 756 665 l 756 688 q 733 748 756 726 q 672 769 711 769 l 672 769 l 425 769 z "},C:{ha:1044,x_min:69,x_max:1031,o:"m 490 -17 l 490 -17 q 177 75 285 -17 q 69 356 69 167 l 69 356 q 73 426 69 390 q 82 497 76 461 l 82 497 q 181 755 110 649 q 364 916 251 861 q 626 971 476 971 l 626 971 q 840 936 749 971 q 981 833 931 901 q 1031 664 1031 765 l 1031 664 q 1028 623 1031 644 q 1024 581 1026 601 l 1024 581 l 779 581 q 783 605 782 593 q 783 626 783 617 l 783 626 q 764 708 783 675 q 708 759 744 742 q 618 776 671 776 l 618 776 q 513 758 558 776 q 433 705 467 739 q 378 622 400 671 q 344 515 356 574 l 344 515 q 333 456 338 479 q 327 415 329 432 q 324 386 325 399 q 324 363 324 374 l 324 363 q 343 263 324 304 q 403 199 363 221 q 504 178 443 178 l 504 178 q 623 201 572 178 q 707 267 674 224 q 751 371 740 310 l 751 371 l 986 371 q 899 156 965 242 q 730 26 833 69 q 490 -17 626 -17 z "},D:{ha:1049,x_min:40,x_max:1018,o:"m 465 0 l 40 0 l 208 954 l 590 954 q 907 864 796 954 q 1018 583 1018 774 l 1018 583 q 1015 520 1018 553 q 1007 454 1013 488 l 1007 454 q 909 204 981 306 q 726 51 838 103 q 465 0 614 0 l 465 0 z m 422 760 l 324 194 l 465 194 q 571 211 524 194 q 653 260 618 228 q 712 338 689 292 q 744 443 735 385 l 744 443 q 756 509 753 485 q 761 549 760 533 q 763 575 763 564 l 763 575 q 741 677 763 636 q 676 739 719 718 q 568 760 633 760 l 568 760 l 422 760 z "},E:{ha:971,x_min:39,x_max:997,o:"m 838 0 l 39 0 l 208 954 l 997 954 l 963 760 l 424 760 l 392 581 l 863 581 l 829 390 l 358 390 l 324 194 l 872 194 l 838 0 z "},F:{ha:890,x_min:39,x_max:942,o:"m 289 0 l 39 0 l 208 954 l 942 954 l 907 760 l 424 760 l 386 554 l 811 554 l 778 364 l 354 364 l 289 0 z "},G:{ha:1132,x_min:71,x_max:1086,o:"m 479 -17 l 479 -17 q 178 75 285 -17 q 71 353 71 167 l 71 353 q 78 463 71 410 q 99 561 85 515 l 99 561 q 210 785 133 694 q 400 924 288 876 q 651 971 513 971 l 651 971 q 824 953 744 971 q 962 899 903 935 q 1053 808 1021 863 q 1086 681 1086 754 l 1086 681 q 1085 650 1086 665 q 1081 618 1083 635 l 1081 618 l 836 618 q 838 632 838 625 l 838 632 l 838 643 q 824 700 838 675 q 785 742 811 725 q 726 767 760 758 q 654 776 693 776 l 654 776 q 538 759 590 776 q 446 708 485 742 q 381 626 407 674 q 346 515 356 578 l 346 515 q 335 458 339 481 q 331 418 332 435 l 331 418 l 326 390 q 325 368 325 379 l 325 368 q 349 263 325 306 q 417 199 372 221 q 531 178 463 178 l 531 178 q 652 199 596 178 q 746 256 708 219 q 790 342 783 293 l 790 342 l 792 349 l 535 349 l 567 524 l 1064 524 l 972 0 l 828 0 l 819 101 q 721 36 774 63 q 609 -3 668 10 q 479 -17 550 -17 z "},H:{ha:1093,x_min:39,x_max:1093,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 393 588 l 779 588 l 844 954 l 1093 954 l 925 0 l 675 0 l 743 385 l 357 385 l 289 0 z "},I:{ha:457,x_min:39,x_max:457,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 289 0 z "},J:{ha:875,x_min:22,x_max:876,o:"m 356 -17 l 356 -17 q 108 46 193 -17 q 22 233 22 108 l 22 233 q 25 274 22 251 q 35 332 28 297 l 35 332 l 272 332 q 265 288 267 304 q 264 261 264 271 l 264 261 q 288 198 264 218 q 365 178 313 178 l 365 178 q 465 215 425 178 q 518 331 504 253 l 518 331 l 628 954 l 876 954 l 767 325 q 691 130 746 206 q 551 19 636 54 q 356 -17 467 -17 z "},K:{ha:1069,x_min:39,x_max:1142,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 385 546 l 819 954 l 1142 954 l 719 564 l 981 0 l 697 0 l 524 397 l 331 238 l 289 0 z "},L:{ha:865,x_min:40,x_max:803,o:"m 767 0 l 40 0 l 208 954 l 457 954 l 325 204 l 803 204 l 767 0 z "},M:{ha:1269,x_min:39,x_max:1269,o:"m 271 0 l 39 0 l 208 954 l 557 954 l 599 529 q 604 467 601 506 q 610 387 607 428 q 614 313 613 346 l 614 313 l 624 313 q 652 384 638 347 q 682 459 667 421 q 713 531 697 497 l 713 531 l 906 954 l 1269 954 l 1100 0 l 858 0 l 942 467 q 958 554 949 507 q 978 644 968 601 q 994 713 988 688 l 994 713 l 985 713 q 970 675 979 697 q 953 632 961 653 q 938 596 944 611 l 938 596 l 663 0 l 453 0 l 396 589 q 392 652 394 618 q 388 711 389 686 l 388 711 l 378 711 l 372 631 q 363 542 368 585 q 353 467 358 499 l 353 467 l 271 0 z "},N:{ha:1093,x_min:39,x_max:1093,o:"m 271 0 l 39 0 l 208 954 l 428 954 l 688 503 q 712 463 699 485 q 737 418 725 440 q 758 378 749 396 l 758 378 l 765 381 q 772 431 768 406 q 779 476 776 456 l 779 476 l 863 954 l 1093 954 l 925 0 l 707 0 l 438 461 q 407 515 425 482 q 375 574 389 549 l 375 574 l 368 572 q 360 515 365 546 q 351 464 354 483 l 351 464 l 271 0 z "},O:{ha:1125,x_min:69,x_max:1094,o:"m 513 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 984 204 1057 313 q 793 40 911 96 q 513 -17 675 -17 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z "},P:{ha:969,x_min:39,x_max:993,o:"m 289 0 l 39 0 l 208 954 l 699 954 q 861 921 796 954 q 960 828 926 888 q 993 689 993 768 l 993 689 q 967 540 993 607 q 892 424 940 474 q 775 349 843 375 q 624 322 707 322 l 624 322 l 346 322 l 289 0 z m 424 761 l 381 514 l 588 514 q 668 533 635 514 q 719 585 701 551 q 738 663 738 618 l 738 663 q 710 735 738 710 q 625 761 682 761 l 625 761 l 424 761 z "},Q:{ha:1125,x_min:69,x_max:1094,o:"m 956 -182 l 668 -182 l 532 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 979 197 1057 308 q 776 33 901 86 l 776 33 l 956 -182 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z "},R:{ha:1042,x_min:40,x_max:1035,o:"m 289 0 l 40 0 l 208 954 l 743 954 q 906 923 842 954 q 1003 838 971 892 q 1035 713 1035 783 l 1035 713 q 1008 563 1035 628 q 934 451 982 497 q 818 378 886 406 l 818 378 l 943 0 l 671 0 l 572 336 l 349 336 l 289 0 z m 424 765 l 382 521 l 629 521 q 701 540 668 521 q 756 593 735 558 q 776 672 776 628 l 776 672 q 751 740 776 715 q 682 765 726 765 l 682 765 l 424 765 z "},S:{ha:968,x_min:33,x_max:938,o:"m 458 -17 l 458 -17 q 292 -3 369 -17 q 156 38 214 10 q 66 115 99 67 q 33 232 33 163 l 33 232 q 36 274 33 251 q 44 315 39 297 l 44 315 l 285 315 q 279 293 282 306 q 276 271 276 281 l 276 271 q 297 215 276 236 q 356 183 318 193 q 443 174 393 174 l 443 174 q 517 179 483 174 q 577 196 551 185 q 617 226 603 207 q 632 274 632 246 l 632 274 q 613 318 632 300 q 560 349 593 336 q 487 373 528 363 q 401 396 446 383 l 401 396 q 301 428 351 410 q 211 474 251 446 q 147 544 171 501 q 122 647 122 586 l 122 647 q 158 795 122 735 q 256 895 194 856 q 394 953 317 935 q 553 971 471 971 q 705 957 635 971 q 827 914 775 943 q 908 840 879 885 q 938 733 938 796 l 938 733 q 936 708 938 722 q 931 668 935 693 l 931 668 l 693 668 q 696 686 696 679 l 696 686 l 696 697 q 661 763 696 738 q 558 788 626 788 l 558 788 q 465 776 504 788 q 404 744 425 764 q 383 696 383 724 l 383 696 q 397 660 383 675 q 433 633 410 644 q 488 611 457 621 q 557 593 519 601 l 557 593 q 670 562 611 579 q 781 515 729 544 q 863 441 832 486 q 894 329 894 396 l 894 329 q 858 174 894 239 q 760 66 822 108 q 621 3 699 24 q 458 -17 543 -17 z "},T:{ha:938,x_min:103,x_max:1007,o:"m 529 0 l 279 0 l 413 750 l 103 750 l 139 954 l 1007 954 l 971 750 l 661 750 l 529 0 z "},U:{ha:1088,x_min:96,x_max:1090,o:"m 496 -17 l 496 -17 q 201 60 307 -17 q 96 290 96 138 l 96 290 q 98 333 96 311 q 104 379 100 356 l 104 379 l 206 954 l 454 954 l 353 376 q 349 351 351 365 q 347 325 347 338 l 347 325 q 388 217 347 256 q 510 178 428 178 l 510 178 q 663 231 604 178 q 739 375 722 283 l 739 375 l 842 954 l 1090 954 l 986 363 q 900 151 964 236 q 735 25 836 67 q 496 -17 633 -17 z "},V:{ha:1013,x_min:124,x_max:1097,o:"m 588 0 l 299 0 l 124 954 l 381 954 l 454 465 q 464 397 458 435 q 474 325 469 360 q 482 264 479 290 l 482 264 l 490 264 q 524 333 506 296 q 560 406 542 369 q 592 471 578 442 l 592 471 l 833 954 l 1097 954 l 588 0 z "},W:{ha:1360,x_min:115,x_max:1454,o:"m 461 0 l 182 0 l 115 954 l 358 954 l 388 453 q 389 411 389 435 q 390 364 389 388 q 392 318 392 340 l 392 318 l 397 318 q 414 365 406 340 q 431 412 422 389 q 446 453 439 435 l 446 453 l 643 954 l 914 954 l 939 453 q 942 411 940 435 l 942 411 l 943 364 q 943 318 943 340 l 943 318 l 949 318 q 965 363 957 339 l 965 363 l 982 410 q 999 453 990 433 l 999 453 l 1200 954 l 1454 954 l 1043 0 l 764 0 l 735 528 q 733 574 733 550 q 731 622 732 597 q 729 665 731 646 l 729 665 l 724 665 q 708 620 717 644 q 690 572 699 596 q 674 528 682 549 l 674 528 l 461 0 z "},X:{ha:1022,x_min:-56,x_max:1085,o:"m 243 0 l -56 0 l 389 506 l 146 954 l 432 954 l 560 682 l 565 682 l 790 954 l 1085 954 l 682 499 l 949 0 l 664 0 l 515 318 l 508 318 l 243 0 z "},Y:{ha:1017,x_min:117,x_max:1110,o:"m 571 0 l 322 0 l 389 378 l 117 954 l 385 954 l 544 596 l 551 596 l 831 954 l 1110 954 l 638 378 l 571 0 z "},Z:{ha:947,x_min:-25,x_max:994,o:"m 838 0 l -25 0 l -7 100 l 567 760 l 143 760 l 178 954 l 994 954 l 978 854 l 401 194 l 872 194 l 838 0 z "},a:{ha:875,x_min:33,x_max:849,o:"m 292 -17 l 292 -17 q 154 15 213 -17 q 65 107 96 46 q 33 257 33 168 l 33 257 q 36 315 33 285 q 44 378 39 344 l 44 378 q 115 586 67 504 q 233 708 163 668 q 393 749 304 749 l 393 749 q 480 738 440 749 q 550 703 519 726 q 601 643 581 681 l 601 643 l 611 643 l 665 732 l 849 732 l 815 553 q 797 451 807 503 q 779 354 788 400 q 764 271 771 308 q 753 210 757 233 q 750 179 750 186 l 750 179 q 760 151 750 160 q 788 142 771 142 l 788 142 l 831 142 l 807 8 q 751 -9 783 -1 q 685 -17 719 -17 l 685 -17 q 612 -5 643 -17 q 561 32 581 7 l 561 32 q 545 60 551 43 q 536 94 539 76 l 536 94 l 526 94 q 421 12 482 40 q 292 -17 360 -17 z m 381 161 l 381 161 q 444 175 415 161 q 496 214 474 189 q 533 274 518 239 q 556 350 549 308 l 556 350 q 563 395 561 378 q 566 424 565 413 q 567 444 567 436 l 567 444 q 555 512 567 483 q 518 556 543 540 q 453 571 493 571 l 453 571 q 367 551 401 571 q 311 490 332 531 q 279 390 290 449 l 279 390 q 269 333 272 354 q 265 299 265 313 q 264 278 264 286 l 264 278 q 291 191 264 221 q 381 161 318 161 z "},b:{ha:879,x_min:24,x_max:840,o:"m 474 -17 l 474 -17 q 339 13 397 -17 q 253 101 281 42 l 253 101 l 243 101 l 208 0 l 24 0 l 199 1006 l 426 1006 l 365 657 l 375 657 q 434 708 401 688 q 505 738 467 728 q 585 749 543 749 l 585 749 q 721 718 664 749 q 809 626 778 688 q 840 475 840 565 l 840 475 q 838 418 840 449 q 828 354 835 388 l 828 354 q 758 147 807 229 q 636 24 708 64 q 474 -17 564 -17 z m 419 161 l 419 161 q 506 181 471 161 q 561 242 540 201 q 594 342 582 283 l 594 342 q 604 399 601 378 q 608 433 607 419 q 610 454 610 446 l 610 454 q 598 519 610 493 q 560 558 586 544 q 492 571 533 571 l 492 571 q 426 557 456 571 q 376 518 397 543 q 338 458 354 493 q 315 382 322 424 l 315 382 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 378 161 z "},c:{ha:850,x_min:44,x_max:814,o:"m 389 -17 l 389 -17 q 201 15 278 -17 q 85 113 125 47 q 44 278 44 179 l 44 278 q 48 347 44 313 q 58 411 51 381 l 58 411 q 109 552 74 490 q 198 658 144 614 q 322 726 251 703 q 479 749 393 749 l 479 749 q 654 721 579 749 q 772 640 729 693 q 814 510 814 588 l 814 510 q 813 478 814 494 q 808 446 811 463 l 808 446 l 585 446 q 587 464 586 456 q 588 481 588 472 l 588 481 q 575 537 588 514 q 536 572 563 560 q 469 585 510 585 l 469 585 q 380 561 417 585 q 321 495 343 538 q 289 394 299 453 l 289 394 q 278 336 282 358 q 274 301 275 314 q 272 278 272 288 l 272 278 q 286 206 272 235 q 328 163 300 178 q 400 149 357 149 l 400 149 q 481 165 447 149 q 537 212 515 181 q 567 288 558 243 l 567 288 l 781 288 q 710 117 764 185 q 573 16 656 49 q 389 -17 490 -17 z "},d:{ha:879,x_min:40,x_max:904,o:"m 299 -17 l 299 -17 q 160 15 218 -17 q 71 110 101 47 q 40 260 40 172 l 40 260 q 43 317 40 288 q 51 381 46 347 l 51 381 q 100 543 68 474 q 176 658 132 613 q 277 726 221 704 q 401 749 333 749 l 401 749 q 488 738 449 749 q 558 708 528 728 q 607 657 589 688 l 607 657 l 615 657 l 676 1006 l 904 1006 l 728 0 l 542 0 l 542 101 l 532 101 q 427 13 488 42 q 299 -17 367 -17 z m 386 161 l 386 161 q 473 184 438 161 q 531 250 508 207 q 563 350 553 293 l 563 350 q 570 394 568 376 q 574 423 572 411 q 575 444 575 435 l 575 444 q 563 512 575 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 491 339 531 q 288 393 297 451 l 288 393 q 276 335 281 357 q 272 299 272 313 q 271 276 271 286 l 271 276 q 298 190 271 219 q 386 161 325 161 z "},e:{ha:860,x_min:44,x_max:815,o:"m 403 -17 l 403 -17 q 208 15 288 -17 q 86 111 128 46 q 44 276 44 176 l 44 276 q 47 344 44 311 q 57 408 50 376 l 57 408 q 131 590 76 514 q 273 707 186 665 q 475 749 360 749 l 475 749 q 662 719 586 749 q 776 628 738 689 q 815 471 815 567 l 815 471 q 812 409 815 444 q 797 321 808 374 l 797 321 l 272 321 q 268 294 269 308 q 267 267 267 279 l 267 267 q 281 198 267 226 q 325 156 294 169 q 403 142 356 142 l 403 142 q 467 149 439 142 q 514 173 494 157 q 547 211 533 189 q 564 261 560 233 l 564 261 l 786 261 q 744 142 775 194 q 663 55 713 90 q 549 1 614 19 q 403 -17 483 -17 z m 294 447 l 294 447 l 586 447 q 590 467 589 457 q 590 485 590 478 l 590 485 q 577 544 590 521 q 538 580 564 568 q 478 592 513 592 l 478 592 q 393 574 429 592 q 333 525 357 557 q 294 447 310 493 z "},f:{ha:489,x_min:-118,x_max:608,o:"m 25 -274 l 25 -274 q -23 -271 4 -274 q -75 -262 -50 -268 q -118 -251 -100 -257 l -118 -251 l -92 -107 l -21 -107 q 37 -87 17 -107 q 63 -31 57 -68 l 63 -31 l 167 567 l 64 567 l 93 732 l 197 732 l 207 792 q 253 920 222 869 q 338 995 285 971 q 469 1019 392 1019 l 469 1019 q 519 1017 493 1019 q 569 1008 546 1014 q 608 997 593 1003 l 608 997 l 583 854 l 517 854 q 459 838 478 854 q 433 786 440 821 l 433 786 l 425 732 l 561 732 l 532 567 l 394 567 l 286 -50 q 244 -170 274 -119 q 162 -247 215 -221 q 25 -274 108 -274 z "},g:{ha:878,x_min:6,x_max:854,o:"m 314 -274 l 314 -274 q 144 -252 213 -274 q 40 -191 75 -231 q 6 -96 6 -151 l 6 -96 q 7 -68 6 -86 q 15 -28 8 -50 l 15 -28 l 236 -28 q 234 -36 235 -32 q 233 -44 233 -40 l 233 -44 q 245 -77 233 -64 q 279 -97 257 -90 q 333 -104 301 -104 l 333 -104 q 424 -85 388 -104 q 480 -32 460 -67 q 508 49 500 3 l 508 49 q 515 87 511 68 q 521 122 518 106 l 521 122 l 511 122 q 448 71 482 92 q 375 40 414 50 q 293 31 336 31 l 293 31 q 160 60 217 31 q 74 148 104 89 q 44 296 44 207 l 44 296 q 47 346 44 319 q 54 401 49 372 l 54 401 q 179 664 86 579 q 408 749 272 749 l 408 749 q 538 719 483 749 q 621 631 593 689 l 621 631 l 631 631 l 668 732 l 854 732 l 738 68 q 660 -129 715 -54 q 518 -239 604 -204 q 314 -274 432 -274 z m 393 206 l 393 206 q 458 219 429 206 q 510 256 488 232 q 546 310 532 279 q 567 379 560 342 l 567 379 q 572 413 569 400 q 574 435 574 425 q 575 453 575 444 l 575 453 q 563 515 575 489 q 524 556 550 542 q 458 571 499 571 l 458 571 q 374 551 410 571 q 317 495 339 532 q 288 406 296 458 l 288 406 q 280 363 282 379 q 277 335 278 346 q 276 317 276 325 l 276 317 q 288 258 276 282 q 325 219 299 233 q 393 206 351 206 z "},h:{ha:874,x_min:24,x_max:818,o:"m 250 0 l 24 0 l 199 1006 l 426 1006 l 365 653 l 374 653 q 438 703 401 682 q 517 737 475 725 q 601 749 560 749 l 601 749 q 717 727 669 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 579 464 578 453 q 581 485 581 475 l 581 485 q 571 533 581 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 322 413 329 449 l 322 413 l 250 0 z "},i:{ha:400,x_min:22,x_max:425,o:"m 394 831 l 167 831 l 197 1006 l 425 1006 l 394 831 z m 250 0 l 22 0 l 151 732 l 379 732 l 250 0 z "},j:{ha:397,x_min:-164,x_max:422,o:"m 392 831 l 164 831 l 194 1006 l 422 1006 l 392 831 z m -8 -274 l -8 -274 q -60 -271 -31 -274 q -118 -262 -90 -268 q -164 -251 -146 -257 l -164 -251 l -139 -107 l -68 -107 q -11 -87 -31 -107 q 15 -31 8 -68 l 15 -31 l 150 732 l 378 732 l 239 -51 q 199 -171 226 -121 q 122 -247 172 -221 q -8 -274 72 -274 z "},k:{ha:847,x_min:22,x_max:892,o:"m 250 0 l 22 0 l 199 1007 l 426 1007 l 326 438 l 626 732 l 892 732 l 581 443 l 772 0 l 526 0 l 410 294 l 282 186 l 250 0 z "},l:{ha:400,x_min:22,x_max:426,o:"m 250 0 l 22 0 l 199 1006 l 426 1006 l 250 0 z "},m:{ha:1301,x_min:22,x_max:1246,o:"m 250 0 l 22 0 l 151 732 l 338 732 l 338 628 l 347 628 q 415 692 376 665 q 497 734 453 719 q 588 749 542 749 l 588 749 q 717 719 667 749 q 785 628 767 689 l 785 628 l 794 628 q 864 692 825 665 q 947 734 903 719 q 1038 749 990 749 l 1038 749 q 1192 702 1138 749 q 1246 558 1246 656 l 1246 558 q 1243 515 1246 538 q 1236 469 1240 493 l 1236 469 l 1153 0 l 925 0 l 1004 443 q 1007 467 1006 456 q 1008 488 1008 478 l 1008 488 q 999 533 1008 515 q 972 560 989 551 q 928 569 954 569 l 928 569 q 858 549 890 569 q 805 495 826 529 q 775 417 783 461 l 775 417 l 701 0 l 474 0 l 553 443 q 556 467 554 456 q 557 488 557 479 l 557 488 q 547 533 557 515 q 520 560 538 551 q 476 569 503 569 l 476 569 q 407 549 439 569 q 353 495 375 529 q 324 417 332 461 l 324 417 l 250 0 z "},n:{ha:874,x_min:22,x_max:818,o:"m 250 0 l 22 0 l 151 732 l 338 732 l 338 626 l 347 626 q 418 692 378 665 q 505 734 458 719 q 599 749 551 749 l 599 749 q 717 727 668 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 580 465 578 453 q 582 486 582 476 l 582 486 q 572 533 582 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 324 413 329 449 l 324 413 l 250 0 z "},o:{ha:882,x_min:42,x_max:840,o:"m 386 -17 l 386 -17 q 201 15 278 -17 q 83 113 124 47 q 42 276 42 178 l 42 276 q 44 333 42 304 q 53 389 47 361 l 53 389 q 132 591 74 511 q 282 710 190 671 q 493 749 374 749 l 493 749 q 681 717 604 749 q 799 619 758 685 q 840 454 840 554 l 840 454 q 826 335 840 389 q 783 236 811 281 l 783 236 q 694 94 750 150 q 563 10 639 38 q 386 -17 486 -17 z m 403 149 l 403 149 q 498 171 460 149 q 560 235 536 193 q 594 340 583 278 l 594 340 q 605 399 601 378 q 609 433 608 421 q 610 456 610 446 l 610 456 q 596 526 610 497 q 553 569 582 554 q 478 583 525 583 l 478 583 q 383 561 421 583 q 321 497 344 539 q 286 392 297 454 l 286 392 q 276 332 279 354 q 271 298 272 310 q 269 276 269 286 l 269 276 q 283 206 269 235 q 327 163 297 178 q 403 149 357 149 z "},p:{ha:879,x_min:-22,x_max:839,o:"m 204 -258 l -22 -258 l 151 732 l 336 732 l 339 631 l 349 631 q 453 721 394 693 q 579 749 513 749 l 579 749 q 720 718 663 749 q 808 626 778 688 q 839 472 839 564 l 839 472 q 836 415 839 446 q 828 351 833 385 l 828 351 q 757 146 806 228 q 638 24 708 64 q 478 -17 567 -17 l 478 -17 q 391 -7 431 -17 q 322 24 351 3 q 272 75 292 44 l 272 75 l 264 75 l 204 -258 z m 419 161 l 419 161 q 506 181 472 161 q 561 242 540 201 q 593 339 582 282 l 593 339 q 603 397 600 375 q 608 433 607 419 q 608 456 608 446 l 608 456 q 597 519 608 494 q 559 558 585 544 q 492 571 533 571 l 492 571 q 407 548 443 571 q 349 483 371 525 q 317 383 326 440 l 317 383 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 379 161 z "},q:{ha:879,x_min:39,x_max:856,o:"m 682 -258 l 454 -258 l 513 75 l 503 75 q 444 25 476 46 q 373 -6 411 4 q 294 -17 335 -17 l 294 -17 q 158 14 215 -17 q 69 106 100 44 q 39 257 39 167 l 39 257 q 42 315 39 285 q 51 378 46 344 l 51 378 q 122 586 74 504 q 243 708 171 668 q 406 749 315 749 l 406 749 q 539 719 482 749 q 622 631 596 689 l 622 631 l 632 631 l 669 732 l 856 732 l 682 -258 z m 388 161 l 388 161 q 452 175 424 161 q 503 214 481 189 q 540 274 525 239 q 563 350 556 308 l 563 350 q 570 395 568 378 q 573 424 572 413 q 574 444 574 436 l 574 444 q 562 512 574 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 490 339 531 q 286 390 297 449 l 286 390 q 276 333 279 354 q 271 299 272 313 q 269 278 269 286 l 269 278 q 297 191 269 221 q 388 161 325 161 z "},r:{ha:565,x_min:22,x_max:621,o:"m 250 0 l 22 0 l 151 732 l 336 732 l 336 619 l 346 619 q 397 687 368 657 q 463 733 426 717 q 544 750 500 750 l 544 750 q 591 745 571 750 q 621 735 611 740 l 621 735 l 586 536 l 514 536 q 436 524 471 536 q 376 488 401 511 q 335 428 351 464 q 311 347 318 393 l 311 347 l 250 0 z "},s:{ha:804,x_min:18,x_max:765,o:"m 350 -17 l 350 -17 q 220 -4 281 -17 q 115 33 160 8 q 44 94 69 57 q 18 179 18 131 l 18 179 q 21 209 18 193 q 26 235 24 225 l 26 235 l 242 235 q 239 220 240 228 q 238 208 238 213 l 238 208 q 253 166 238 183 q 298 141 269 149 q 360 133 326 133 l 360 133 q 407 137 382 133 q 453 149 432 140 q 488 170 475 157 q 500 204 500 183 l 500 204 q 487 236 500 224 q 451 258 474 249 q 398 275 428 268 q 335 290 368 282 l 335 290 q 248 315 292 301 q 168 349 204 328 q 110 403 132 371 q 88 486 88 436 l 88 486 q 116 604 88 554 q 195 686 144 654 q 313 734 246 718 q 456 750 379 750 l 456 750 q 572 739 517 750 q 672 706 628 728 q 740 650 715 683 q 765 572 765 617 l 765 572 q 762 538 765 554 q 757 515 758 522 l 757 515 l 543 515 q 545 527 544 522 q 546 535 546 532 l 546 535 q 533 571 546 557 q 496 592 519 585 q 439 599 472 599 l 439 599 q 393 594 415 599 q 353 583 371 590 q 326 563 336 575 q 317 536 317 551 l 317 536 q 335 502 317 515 q 385 481 354 489 q 451 463 417 472 l 451 463 q 544 440 496 451 q 635 407 593 428 q 704 351 678 386 q 731 260 731 315 l 731 260 q 701 129 731 182 q 618 44 671 76 q 497 -2 565 13 q 350 -17 428 -17 z "},t:{ha:535,x_min:69,x_max:564,o:"m 283 -17 l 283 -17 q 178 0 219 -17 q 115 49 136 17 q 94 131 94 82 l 94 131 q 97 167 94 144 q 106 228 100 190 l 106 228 l 165 567 l 69 567 l 97 732 l 201 732 l 286 946 l 458 946 l 421 732 l 564 732 l 535 567 l 392 567 l 336 251 q 333 224 335 239 q 331 201 331 210 l 331 201 q 344 163 331 176 q 389 149 357 149 l 389 149 l 461 149 l 436 7 q 389 -5 417 1 q 333 -14 361 -11 q 283 -17 306 -17 z "},u:{ha:874,x_min:54,x_max:850,o:"m 272 -18 l 272 -18 q 155 3 204 -18 q 80 67 106 25 q 54 175 54 110 l 54 175 q 57 220 54 197 q 64 268 60 243 l 64 268 l 144 732 l 374 732 l 296 290 q 292 267 293 278 q 290 246 290 256 l 290 246 q 301 198 290 217 q 331 170 311 179 q 378 161 350 161 l 378 161 q 437 172 408 161 q 488 204 465 183 q 526 254 510 225 q 549 318 542 283 l 549 318 l 622 732 l 850 732 l 721 -1 l 535 -1 l 535 104 l 525 104 q 454 39 494 67 q 368 -3 414 11 q 272 -18 322 -18 z "},v:{ha:797,x_min:69,x_max:858,o:"m 453 0 l 213 0 l 69 732 l 301 732 l 346 453 q 355 391 350 426 q 365 315 360 356 q 375 232 371 274 l 375 232 l 383 232 q 417 313 400 274 q 451 388 435 351 q 482 453 468 424 l 482 453 l 622 732 l 858 732 l 453 0 z "},w:{ha:1193,x_min:67,x_max:1256,o:"m 410 0 l 182 0 l 67 732 l 300 732 l 322 458 q 327 393 325 431 q 332 318 329 356 q 336 253 335 281 l 336 253 l 344 253 q 372 322 356 283 q 403 397 388 361 q 428 457 418 433 l 428 457 l 546 732 l 779 732 l 800 456 q 804 399 801 436 q 810 324 807 363 q 815 253 813 285 l 815 253 l 822 253 q 849 318 833 281 q 879 392 864 356 q 906 456 894 429 l 906 456 l 1026 732 l 1256 732 l 881 0 l 653 0 l 628 306 q 624 358 626 329 q 620 416 622 388 q 617 465 618 444 l 617 465 l 611 465 q 592 417 603 446 q 568 360 581 389 q 544 307 556 332 l 544 307 l 410 0 z "},x:{ha:850,x_min:-56,x_max:888,o:"m 206 0 l -56 0 l 292 382 l 97 732 l 351 732 l 453 524 l 460 524 l 633 732 l 888 732 l 563 378 l 774 0 l 521 0 l 411 232 l 404 232 l 206 0 z "},y:{ha:797,x_min:-46,x_max:858,o:"m 97 -274 l 97 -274 q 7 -266 44 -274 q -46 -253 -31 -258 l -46 -253 l -21 -107 l 75 -107 q 145 -92 115 -107 q 195 -52 175 -76 q 229 0 215 -28 l 229 0 l 68 732 l 301 732 l 353 418 q 363 351 358 388 q 373 281 368 315 q 381 215 378 246 l 381 215 l 390 215 q 410 265 400 239 q 432 316 421 290 q 453 365 443 342 q 474 410 464 389 l 474 410 l 624 732 l 858 732 l 488 29 q 415 -90 454 -35 q 330 -186 376 -144 q 226 -251 283 -228 q 97 -274 168 -274 z "},z:{ha:743,x_min:-32,x_max:761,o:"m 646 0 l -32 0 l -15 89 l 394 567 l 89 567 l 118 732 l 761 732 l 746 646 l 333 165 l 675 165 l 646 0 z "},".":{ha:442,x_min:36,x_max:318,o:"m 276 0 l 36 0 l 78 232 l 318 232 l 276 0 z "},",":{ha:442,x_min:-14,x_max:315,o:"m -14 -249 l -14 -249 l 3 -151 q 70 -126 39 -147 q 124 -72 101 -106 q 151 0 146 -39 l 151 0 l 35 0 l 76 232 l 315 232 l 279 25 q 240 -93 268 -43 q 172 -176 213 -143 q 85 -226 132 -208 q -14 -249 38 -244 z "},"'":{ha:365,x_min:149,x_max:389,o:"m 268 558 l 164 558 l 149 750 l 185 954 l 389 954 l 353 750 l 268 558 z "},"\u2019":{ha:388,x_min:100,x_max:407,o:"m 100 496 l 100 496 l 117 585 q 178 610 149 589 q 229 667 208 632 q 257 742 250 701 l 257 742 l 149 742 l 186 954 l 407 954 l 374 764 q 317 619 358 678 q 219 531 276 561 q 100 496 163 501 z "},"!":{ha:436,x_min:46,x_max:443,o:"m 274 300 l 138 300 l 203 954 l 443 954 l 274 300 z m 261 0 l 46 0 l 82 207 l 299 207 l 261 0 z "},"?":{ha:850,x_min:124,x_max:836,o:"m 518 307 l 317 307 l 328 375 q 356 449 335 417 q 408 506 378 481 q 469 556 438 532 q 527 603 500 579 q 572 653 554 626 q 589 714 589 679 l 589 714 q 580 754 589 735 q 549 786 571 774 q 490 799 528 799 l 490 799 q 431 788 457 799 q 388 759 406 778 q 358 717 369 740 q 343 668 347 693 l 343 668 q 341 649 342 658 q 340 632 340 640 l 340 632 l 124 632 q 144 747 124 694 q 200 842 164 800 q 285 913 236 883 q 395 956 335 942 q 522 971 456 971 l 522 971 q 652 954 594 971 q 751 907 710 938 q 815 833 793 876 q 836 733 836 789 l 836 733 q 815 630 836 675 q 760 551 794 585 q 686 490 725 517 q 612 440 647 463 q 552 394 576 417 q 524 343 528 371 l 524 343 l 518 307 z m 483 0 l 254 0 l 293 221 l 522 221 l 483 0 z "},$:{ha:803,x_min:38,x_max:785,o:"m 360 -82 l 268 -82 l 300 97 q 240 107 268 101 l 240 107 q 134 144 179 119 q 63 206 89 168 q 38 290 38 243 l 38 290 q 40 320 38 304 q 46 346 43 336 l 46 346 l 261 346 q 258 331 260 339 q 257 319 257 324 l 257 319 q 273 277 257 294 q 318 253 289 260 l 318 253 q 328 250 322 251 l 328 250 l 354 401 q 268 426 311 413 l 268 426 q 188 460 224 439 q 129 515 151 482 q 107 597 107 549 l 107 597 q 135 715 107 665 q 215 797 164 765 q 332 846 265 829 l 332 846 q 435 860 381 857 l 435 860 l 465 1029 l 557 1029 l 526 860 q 592 850 560 857 l 592 850 q 691 817 647 839 q 760 761 735 794 q 785 683 785 728 l 785 683 q 781 650 785 667 q 776 626 778 633 l 776 626 l 563 626 q 565 638 564 633 q 565 646 565 643 l 565 646 q 552 682 565 668 q 515 703 539 696 l 515 703 q 500 707 508 706 l 500 707 l 476 572 q 564 551 518 563 l 564 551 q 655 518 613 539 q 724 462 697 497 q 750 371 750 426 l 750 371 q 720 240 750 293 q 638 156 690 188 q 517 110 585 124 l 517 110 q 392 94 457 96 l 392 94 l 360 -82 z m 442 381 l 418 247 q 426 249 422 249 l 426 249 q 473 260 451 251 q 507 281 494 268 q 519 315 519 294 l 519 315 q 506 347 519 335 q 471 369 493 360 l 471 369 q 442 381 457 375 l 442 381 z m 389 597 l 389 597 l 408 704 q 374 694 389 700 l 374 694 q 346 674 356 686 q 336 647 336 663 l 336 647 q 356 614 336 626 l 356 614 q 389 597 368 604 z "},"%":{ha:1367,x_min:151,x_max:1257,o:"m 376 0 l 232 0 l 1035 954 l 1179 954 l 376 0 z m 368 472 l 368 472 q 206 519 260 472 q 151 656 151 565 l 151 656 q 153 690 151 672 q 158 726 154 708 l 158 726 q 207 861 172 807 q 297 943 242 915 q 433 971 353 971 l 433 971 q 594 925 540 971 q 647 788 647 879 l 647 788 q 646 753 647 771 q 642 717 644 736 l 642 717 q 594 583 628 638 q 504 501 560 529 q 368 472 449 472 z m 975 -17 l 975 -17 q 814 29 868 -17 q 760 165 760 75 l 760 165 q 762 202 760 183 q 767 240 764 221 l 767 240 q 815 373 782 319 q 905 454 849 426 q 1040 482 961 482 l 1040 482 q 1203 436 1149 482 q 1257 297 1257 390 l 1257 297 q 1255 263 1257 282 q 1250 225 1253 244 l 1250 225 q 1201 92 1235 146 q 1112 11 1168 39 q 975 -17 1056 -17 z m 375 576 l 375 576 q 449 613 425 576 q 483 703 472 650 l 483 703 q 490 741 488 726 q 493 766 492 756 q 494 785 494 776 l 494 785 q 478 845 494 824 q 424 867 463 867 l 424 867 q 351 831 375 867 q 315 740 326 794 l 315 740 q 310 703 313 718 q 306 678 307 689 q 304 660 304 668 l 304 660 q 321 599 304 621 q 375 576 338 576 z m 983 88 l 983 88 q 1060 126 1038 88 q 1097 239 1083 165 l 1097 239 q 1101 261 1100 251 q 1102 280 1101 271 q 1103 296 1103 289 l 1103 296 q 1087 356 1103 335 q 1033 378 1071 378 l 1033 378 q 956 338 979 378 q 919 226 933 299 l 919 226 q 916 205 917 215 q 915 187 915 194 q 914 171 914 179 l 914 171 q 930 110 914 132 q 983 88 946 88 z "},"&":{ha:1133,x_min:69,x_max:1143,o:"m 476 -17 l 476 -17 q 253 14 343 -17 q 116 99 163 44 q 69 226 69 154 l 69 226 q 99 349 69 296 q 179 440 129 403 q 292 493 229 478 l 292 493 l 293 499 q 208 565 242 521 q 175 671 175 608 l 175 671 q 211 801 175 746 q 310 895 247 857 q 454 952 374 933 q 624 971 535 971 l 624 971 q 831 942 744 971 q 965 862 918 913 q 1011 744 1011 811 l 1011 744 q 1009 718 1011 735 q 1001 675 1007 701 l 1001 675 l 789 675 q 793 700 793 692 l 793 700 l 793 711 q 774 759 793 739 q 717 790 754 779 q 621 801 679 801 l 621 801 q 528 790 568 801 q 460 758 488 778 q 419 710 433 738 q 404 651 404 683 l 404 651 q 419 602 404 622 q 459 573 433 582 q 515 564 485 564 l 515 564 l 636 564 l 608 407 l 472 407 q 413 399 442 407 q 360 373 383 390 q 324 328 338 356 q 311 263 311 301 l 311 263 q 330 203 311 228 q 388 166 349 179 q 488 153 426 153 l 488 153 q 613 170 564 153 q 689 219 663 188 q 722 290 715 250 l 722 290 l 769 564 l 1143 564 l 1115 407 l 956 407 l 935 294 q 864 130 918 200 q 714 22 810 60 q 476 -17 618 -17 z "},"-":{ha:463,x_min:42,x_max:425,o:"m 392 283 l 42 283 l 75 474 l 425 474 l 392 283 z "},":":{ha:464,x_min:49,x_max:418,o:"m 376 500 l 136 500 l 178 733 l 418 733 l 376 500 z m 289 0 l 49 0 l 90 232 l 331 232 l 289 0 z "},"|":{ha:368,x_min:104,x_max:264,o:"m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z "}},familyName:"Archivo ExtraBold Italic",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-268,xMax:1462,yMin:-405,yMax:1100},resolution:1e3};var X1={500:k1,800:H1,"800i":V1},G1=new Map,c7=n=>{let e=G1.get(n);return e||(e=new Zh(X1[n]),G1.set(n,e)),e},W1=new Map,Y1=(n,e,t,i,s)=>{let r=`${e}|${t}|${i}|${s}|${n}`,o=W1.get(r);if(!o){let a=new $h(n,{font:c7(e),size:t,depth:Math.max(.1,i-2*s),curveSegments:6,bevelEnabled:s>0,bevelThickness:s,bevelSize:s*.8,bevelOffset:-s*.8,bevelSegments:2});a.translate(0,0,s),a.computeBoundingBox();let l=a.boundingBox;o={g:a,w:Number.isFinite(l.max.x)?l.max.x-Math.min(0,l.min.x):0},W1.set(r,o)}return o},ii=(n,e,t)=>{let i=X1[e],s=0;for(let r of n)s+=(i.glyphs[r]??i.glyphs["?"]).ha*t/i.resolution;return s},Nt=(n,e)=>{let t=e.depth??e.size*.25,i=e.bevel??Math.min(t*.2,e.size*.03),s=Y1(n,e.font??"800",e.size,t,i),r=new le(s.g,[e.face,e.side??e.face]);r.castShadow=!0,r.receiveShadow=!0;let o=new ne;return r.position.x=e.align==="left"?0:-ii(n,e.font??"800",e.size)/2,o.add(r),o.userData.width=ii(n,e.font??"800",e.size),o},$1=n=>{let e=n.font??"800",t=n.depth??n.size*.25,i=n.bevel??Math.min(t*.2,n.size*.03),s=new ne,r=[],o=[n.face,n.side??n.face],a=Math.max(...Array.from("0123456789",d=>ii(d,e,n.size))),l=d=>/\d/.test(d)?a:ii(d,e,n.size),c="";return{group:s,set:d=>{if(d===c)return;c=d;let u=Array.from(d).reduce((g,m)=>g+l(m),0),f=-u/2,x=0;for(let g of d){let m=l(g);if(g!==" "){let p=r[x];p||(p=new le(void 0,o),p.castShadow=!0,p.receiveShadow=!0,r.push(p),s.add(p)),p.geometry=Y1(g,e,n.size,t,i).g,p.position.x=f+(/\d/.test(g)?(a-ii(g,e,n.size))/2:0),p.visible=!0,x++}f+=m}for(;x<r.length;x++)r[x].visible=!1;s.userData.width=u}}};var Ka=new I;function si(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ka.copy(e),Ka[i]=0,Ka.normalize();let c=.5*o/(o+a),h=1-Ka.angleTo(n)/l;return Math.sign(Ka[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Kh=class n extends Cn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,x=d.length/6,g=new I,m=.5/o;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/x)){case 0:g.set(1,0,0),f[v+0]=si(g,c,"z","y",r,i),f[v+1]=1-si(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[v+0]=1-si(g,c,"z","y",r,i),f[v+1]=1-si(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[v+0]=1-si(g,c,"x","z",r,e),f[v+1]=si(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),f[v+0]=1-si(g,c,"x","z",r,e),f[v+1]=1-si(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),f[v+0]=1-si(g,c,"x","y",r,e),f[v+1]=1-si(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[v+0]=si(g,c,"x","y",r,e),f[v+1]=1-si(g,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var vr=1.18,Z1=n=>(n.traverse(e=>{let t=e;if(t.isMesh)for(let i of Array.isArray(t.material)?t.material:[t.material]){if(i.isMeshBasicMaterial){t.castShadow=!1;continue}let s=i;s.isMeshStandardMaterial&&s.userData.envBase===void 0&&(s.userData.envBase=s.envMapIntensity)}}),n),an=(n,e={})=>{let t=e.s??1;return{amb:e.amb??.2,key:{pos:[n[0]-900*t,n[1]+2300*t,n[2]+1500*t],at:[n[0],n[1]*.5,n[2]],i:e.key??3.6,color:e.color??"#FBF7F6",angle:.42,soft:1},rim:{pos:[n[0]+1300*t,n[1]+1100*t,n[2]-1500*t],at:n,i:e.rim??3,color:"#F4F1F2",angle:.8,soft:.8},aux:{pos:[n[0]-1700*t,n[1]+500*t,n[2]-700*t],at:n,i:(e.rim??3)*.5,color:"#EEEAEA",angle:.8,soft:.8},back:{pos:[n[0],n[1]+900*t,n[2]+600],at:[n[0],n[1]+500*t,xo],i:e.back??3.2,color:"#F2EEEE",angle:.5,soft:1},focus:[n[0],n[2]],reach:e.reach??2600*t,reflect:.06}},xo=-2600,K1=(n,e={})=>({amb:e.amb??.95,key:{pos:[n[0]-700,n[1]+2600,n[2]+900],at:n,i:e.key??1.1,color:"#FFFFFF",angle:.8,soft:1},aux:{pos:[n[0]+1500,n[1]+1500,n[2]+900],at:n,i:.35,color:"#FFFFFF",angle:.9,soft:1},back:{pos:[n[0],n[1]+1200,n[2]+600],at:[n[0],n[1]+600,xo],i:.4,color:"#FFFFFF",angle:.9,soft:1},focus:[n[0],n[2]],reach:2600,reflect:0});var ge={white:"#f8f2f2",money:"#f6f2bd",red:"#f55048",amber:"#f6b050",gold:"#8a6f47",cream:"#f8e9c0",black:"#09090a",graphite:"#19191b",satin:"#9a9a9e",paper:"#e8e5de"},ss=n=>new ce(n),Z={black:()=>new Wt({color:ss(ge.black),roughness:.42,metalness:.15,envMapIntensity:.9,clearcoat:.25,clearcoatRoughness:.45}),graphite:()=>new Wt({color:ss(ge.graphite),roughness:.5,metalness:.3,envMapIntensity:.8}),satin:()=>new Wt({color:ss(ge.satin),roughness:.32,metalness:1,envMapIntensity:.9}),gold:()=>new Wt({color:ss(ge.gold),roughness:.34,metalness:1,envMapIntensity:1.25}),paper:()=>new jt({color:ss(ge.paper),roughness:.92,metalness:0}),rubber:()=>new jt({color:ss("#09090a"),roughness:.85,metalness:0})},Tt=(n,e=vr)=>{let t=new vn({color:ss(n).multiplyScalar(e),toneMapped:!1});return t.userData.full=t.color.clone(),t},tn=(n,e,t=.07)=>{n.color.copy(n.userData.full).multiplyScalar(t+(1-t)*Ae(e))},J1=n=>(n.castShadow=!0,n.receiveShadow=!0,n),Le=(n,e,t,i,s)=>J1(new le(new Kh(n,e,t,4,Math.min(i,n/2-.01,e/2-.01,t/2-.01)),s)),ut=(n,e,t,i,s)=>{let r=Le(n,e,t,i,s);return r.position.y=e/2,r},Pn=(n,e,t,i=64)=>{let s=J1(new le(new mt(n,n,e,i),t));return s.position.y=e/2,s},ln=(n,e=1.14)=>(n.scale.x*=e,n),Xn=(n,e,t,i,s)=>{if(n>=t)return s;if(n<=e)return i;let r=(n-e)/(t-e);return i+(s-i)*(1-Math.pow(1-r,2.6))},Ja=n=>"$"+Math.round(n).toLocaleString("en-US"),Q1=n=>{let e=Math.abs(n);return e>=1e9?"$"+(e>=1e10?Math.round(n/1e9):Math.round(n/1e8)/10)+"B":e>=1e6?"$"+(e>=1e7?Math.round(n/1e6):Math.round(n/1e5)/10)+"M":"$"+Math.round(n).toLocaleString("en-US")},In=n=>{let e=Tt(n.color??ge.white),t=new jt({color:ss(n.color??ge.white).multiplyScalar(.22),roughness:.5,metalness:.4}),i=$1({font:n.font??"800",size:n.size,depth:n.depth??n.size*.34,face:e,side:t});return i.group.scale.x=n.wide??1.14,{group:i.group,set:i.set,face:e,side:t}},yn=(n,e={})=>{let t=n.join(" ").trim().split(/\s+/).length;if(t>3&&!/^[\d$.,%×x= ]+$/.test(n.join("")))throw new Error(`litPlate: "${n.join(" ")}" is ${t} words; in-scene text is at most three words or one figure with a unit (R8)`);let i=e.size??110,s=e.font??"800",r=1.14,o=Tt(e.color??ge.white),a=n.map(f=>ii(f,s,i)*r),l=e.w??Math.max(...a)+2*(e.padX??i*.55),c=i*1.12,h=n.length*c+2*(e.padY??i*.42),d=e.depth??Math.max(40,i*.5),u=new ne;return u.add(Le(l,h,d,Math.min(18,d*.3),e.mat??Z.black())),n.forEach((f,x)=>{let g=ln(Nt(f,{font:s,size:i,depth:4,bevel:0,face:o}),r);g.position.set(0,((n.length-1)/2-x)*c-i*.345,d/2+.5),g.traverse(m=>{m.castShadow=!1}),u.add(g)}),{group:u,face:o,w:l,h,d,setLit:f=>tn(o,f)}},cn=(n={})=>{let e=n.r??900,t=(n.w??12)/e,i=n.dur??28,s=new vn({color:ss(n.color??ge.white).multiplyScalar(1.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1,blending:ji,fog:!1}),r=new le(new Pa(1-t,1,96),s);return r.rotation.x=-Math.PI/2,r.position.y=1.5,r.renderOrder=3,r.userData.isFloor=!0,{mesh:r,update:(o,a)=>{let l=(o-a)/i;if(l<=0||l>=1){r.visible=!1;return}r.visible=!0;let c=1-Math.pow(1-l,2.2);r.scale.setScalar(Math.max(1,e*c)),s.opacity=Math.pow(1-l,1.4)*.9}}},j1=(n,e,t)=>({pos:[n[0],n[1]+900,n[2]+600],at:[n[0],n[1]+500,xo],i:t,color:e,angle:.85,soft:1}),wt=(n,e,t={})=>{let i=t.h??1400,s=t.fall??9,r=i*(t.bounce??1)*.045,o=n-e;if(o<-s)return{y:i,on:!1,fast:!1};if(o<0){let c=(o+s)/s;return{y:i*(1-c*c),on:!0,fast:!0}}let a=9,l=6;if(o<a){let c=o/a;return{y:r*4*c*(1-c),on:!0,fast:o<2}}if(o<a+l){let c=(o-a)/l;return{y:r*.28*4*c*(1-c),on:!0,fast:!1}}return{y:0,on:!0,fast:!1}},em=(n,e,t={})=>{let i=t.amp??1.1,s=t.period??30,r=t.damp??.075,o=n-e;return o<0?{a:i,on:!1,fast:!1}:{a:i*Math.exp(-r*o)*Math.cos(2*Math.PI*o/s),on:!0,fast:o<s/4}},Jh=(n,e,t=11)=>{let i=(n-e)/t;if(i<=0)return 0;if(i>=1)return 1;if(i<.62){let r=i/.62;return 1.08*(1-Math.pow(1-r,3))}let s=(i-.62)/.38;return 1.08-.08*(s*s*(3-2*s))};var h7=5,ri=n=>{let e=Vl.indexOf(n);if(e<=0)return 0;let t=Vl[e-1];return Math.max(Yh(t,Hl[t]-1)+2,en(n,0)-h7)};var im=30,u7=960/Math.tan(im*Math.PI/360),Qa=84,tm=.06,M0=250,d7=.62*1080,f7=(.5-.52)*1920,nm=190,p7=n=>{let e=li.find(t=>t.scene===n);if(!e?.w?.length)throw new Error(`turn card ${n}: its cue has no tokens`);return e.w.map(([t,i])=>({t,at:is(i)-1}))},m7=n=>new _t({transparent:!0,depthWrite:!1,blending:ji,fog:!1,uniforms:{col:{value:new ce(n)},a:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 col; uniform float a; varying vec2 vUv;
    void main() { float d = length((vUv - 0.5) * vec2(2.0, 2.3)); float g = pow(clamp(1.0 - d, 0.0, 1.0), 1.7); gl_FragColor = vec4(col * g * a, 1.0); }`}),sm=(n,e,t,i)=>{let s=p7(n),r=s[s.length-1],o=s.slice(0,-1),a=ri(n),l=Math.min(M0,M0*d7/Math.max(1,ii(r.t,"800i",M0))),c=f7-nm/2-l*.2,h=c+nm+l*.25;return{id:n,label:e,enter:a,stage:"card",shots:({from:d})=>[Gt(d,[0,0,u7],[0,0,0],{fov:im,still:!0,why:"the card"})],lights:()=>({amb:0,key:{pos:[0,1e3,2e3],at:[0,0,0],i:0}}),cues:()=>[{kind:"hit",s:"sub",at:r.at,vol:.42,why:`the card's word lands: ${r.t}`},{kind:"hit",s:"bloom",at:r.at+1,vol:.3,why:"the glow blooms behind it"}],build:()=>{let d=new ne,u=Tt("#faf0ee",1),f=Tt(t,1.12),x=new vn({color:new ce("#faf0ee"),transparent:!0,opacity:.32,toneMapped:!1,depthWrite:!1}),g=Qa*.34,m=o.map(T=>ii(T.t,"500",Qa)*(1+tm)),v=-(m.reduce((T,P)=>T+P,0)+g*Math.max(0,o.length-1))/2,_=o.map((T,P)=>{let M=Nt(T.t,{font:"500",size:Qa,depth:1,bevel:0,face:u,align:"left"});M.scale.x=1+tm,M.position.set(v,h,0);let b=new le(new bn(m[P],Qa*.62),x);return b.position.set(v+m[P]/2,h+Qa*.3,1),v+=m[P]+g,d.add(M,b),{g:M,b,at:T.at}}),S=Nt(r.t,{font:"800i",size:l,depth:1,bevel:0,face:f});S.position.set(0,c,2);let C=m7(i),E=new le(new bn(1500,1300),C);return E.position.set(0,c+l*.3,-4),d.add(E,S),d.traverse(T=>{T.castShadow=!1}),{group:d,update:T=>{for(let M of _)M.g.visible=T>=M.at,M.b.visible=T>=M.at-2&&T<M.at;S.visible=T>=r.at;let P=Ae((T-r.at+1)/3);S.scale.set(1,.55+.45*P,1),C.uniforms.a.value=.85*(1-Math.pow(1-Ae((T-r.at)/7),2))}}}}},rm=sm("explain","2 Turn card: Let us explain.",ge.amber,"#743815"),om=sm("catch","5 Turn card: But here's the catch.",ge.red,"#6c1310");var ja=1500,xi={w:760,h:470,d:66,centre:ja+150+235,chain:ja},am=(n,e="SOLD FOR")=>{let t=new ne;t.name=`tag-${n}`;let i=Z.satin(),s=new kt(24,7,10,24),r=(P,M,b)=>{let R=Math.round(Math.abs(b-M)/58);for(let F=0;F<R;F++){let O=new le(s,i);O.scale.y=1.55,O.position.y=M+(b-M)*(F+.5)/R,O.rotation.y=F%2?Math.PI/2:0,O.castShadow=!0,P.add(O)}},o=new ne;r(o,0,2600);let a=new ne;r(a,-ja,0);let l=new le(new mt(34,40,70,24),Z.black());l.position.y=-ja-30,l.castShadow=!0;let c=new le(new kt(46,13,14,40,Math.PI*1.45),i);c.position.y=-ja-106,c.rotation.z=Math.PI*.82,c.castShadow=!0;let h=xi.w,d=xi.h,u=120,f=new Ei;f.moveTo(-h/2,-d/2),f.lineTo(h/2,-d/2),f.lineTo(h/2,d/2-u),f.lineTo(h/2-u,d/2),f.lineTo(-h/2+u,d/2),f.lineTo(-h/2,d/2-u),f.closePath();let x=new Cs;x.absarc(0,d/2-62,26,0,Math.PI*2,!0),f.holes.push(x);let g=new Rs(f,{depth:xi.d-20,bevelEnabled:!0,bevelThickness:10,bevelSize:10,bevelSegments:4,curveSegments:24});g.translate(0,0,-(xi.d-20)/2);let m=new le(g,Z.black());m.castShadow=!0,m.receiveShadow=!0;let p=new le(new kt(31,8,12,32),i);p.position.set(0,d/2-62,xi.d/2-4);let v=p.clone();v.position.z=-xi.d/2+4;let _=new le(new kt(40,7,10,32),i);_.position.set(0,d/2-22,0),_.rotation.y=Math.PI/2,_.castShadow=!0;let S=Tt(ge.white,1),C=ln(Nt(e,{font:"800",size:92,depth:6,bevel:0,face:S}));C.position.set(0,-95,xi.d/2+.5);let E=new le(new Cn(h-220,6,3),i);E.position.set(0,60,xi.d/2+1);let T=new ne;return T.add(m,p,v,_,C,E),T.position.y=-xi.centre,a.add(l,c,T),t.add(o,a),{group:t,face:S,update:P=>{a.rotation.z=P.swing,tn(S,P.lit,.16)}}};var rs={w:360,h:420,d:200},Qh=n=>{let e=new ne;e.name=`bag-${n}`;let t=Le(rs.w,rs.h,rs.d,16,Z.black());t.position.y=rs.h/2;let i=Le(rs.w+10,52,rs.d+10,12,Z.graphite());i.position.y=rs.h-26,e.add(t,i);let s=Z.satin();for(let a of[62,-62]){let l=new le(new kt(74,9,14,40,Math.PI),s);l.position.set(0,rs.h-4,a),l.castShadow=!0,e.add(l)}let r=Tt(ge.white,1),o=ln(Nt("AFTERPAY",{font:"800",size:46,depth:5,bevel:0,face:r}));return o.position.set(0,172,rs.d/2+.5),e.add(o),{group:e,face:r}};var os={w:520,h:620,d:600,travel:430},jh=n=>{let e=new ne;e.name=`drawer-${n}`;let t=Z.graphite(),i=Z.satin(),s=Le(os.w,os.h,os.d,22,t);s.position.set(0,os.h/2,-os.d/2),e.add(s);let r=_=>{let S=new ne,C=Le(476,176,26,9,Z.black());C.position.z=9;let E=Le(190,24,30,8,i);E.position.set(0,-34,34);let T=Le(150,44,8,3,i);return T.position.set(0,36,24),S.add(C,E,T),S.position.y=_,S};e.add(r(110),r(310));let o=Le(470,170,6,2,Z.rubber());o.position.set(0,510,.5),e.add(o);let a=r(510),l=new ne,c=Le(452,12,500,4,t);c.position.set(0,-78,-250);let h=Le(12,150,500,4,t);h.position.set(-226,-9,-250);let d=Le(12,150,500,4,t);d.position.set(226,-9,-250);let u=Le(452,150,12,4,t);u.position.set(0,-9,-494),l.add(c,h,d,u);let f=new ne;f.add(Le(424,236,20,8,Z.black()));let x=In({size:84,color:ge.money,depth:10});x.group.position.set(0,12,10);let g=In({size:34,color:ge.money,depth:6});g.group.position.set(0,-58,10),f.add(x.group,g.group),f.position.set(0,62,-214),f.rotation.x=-1.05,l.add(f),a.add(l);let m=Tt(ge.white),p=ln(Nt("FILING",{font:"800",size:24,depth:3,bevel:0,face:m}));p.position.set(0,27,28.5),a.add(p),e.add(a);let v="";return{group:e,size:{w:os.w,h:os.h,d:os.d},update:_=>{if(a.position.z=Math.max(0,_.open)*os.travel,_.value!==v){v=_.value;let S=_.value.indexOf(" ");x.set(S<0?_.value:_.value.slice(0,S)),g.set(S<0?"":_.value.slice(S+1))}x.group.visible=g.group.visible=_.lit>.001,tn(x.face,_.lit),tn(g.face,_.lit)}}};var br={plinthW:640,plinthH:340,plinthD:560,tagY:1190,numZ:610,numW:1e3,centre:[0,700,0]},T0=n=>{let e=br,t=new ne;t.add(ut(e.plinthW,e.plinthH,e.plinthD,28,Z.black()));let i=Qh(n);i.group.scale.setScalar(1.15),i.group.position.y=e.plinthH;let s=am(n),r=e.tagY+xi.centre;s.group.position.set(0,r,0);let o=In({size:110,color:ge.money});o.set(Ja(29e9));let a=e.numW/(o.group.userData.width*1.14);o.group.scale.set(1.14*a,a,a),o.group.position.set(0,.25*110*a,e.numZ);let l=cn({r:1500,color:ge.money,dur:30});return l.mesh.position.set(0,1.5,e.numZ),t.add(i.group,s.group,o.group,l.mesh),{group:t,tag:s,num:o,halo:l,pivotY:r}},Dn={pos:[-300,500,3750],look:[0,540,150],fov:42,push:{pos:[-130,470,3420],look:[0,530,150]},numFocus:[0,80,610]},Bs="hook",x7=Ye(Bs,0,/^\$29/),Ns=Ye(Bs,0,/^billion/),as=Ye(Bs,1,/^filing/),Os=Ye(Bs,1,/^13/),g7=en(Bs,1),q0=en(Bs,2),S0=Ye(Bs,2,/^right/),_o=g7-6,eu=13,el=q0-7,E0=9,w0=el+5,tu=q0+4,vo=q0+15,Fs=3e3,Ri=-3200,_7=1.7,v7=n=>{let e=Ae((n+10)/50);return 900*Math.pow(1-e,3)},b7=n=>.2*Math.exp(-.028*Math.max(0,n))*Math.cos(2*Math.PI*(n+6)/44),y7=n=>{let e=Ae((n-(as-12))/14);return 1-Math.pow(1-e,3)-.045*Math.sin(Math.PI*Ae((n-as-2)/9))},go={count:[x7-6,Ns],whip:_o,open:[as-12,as+2],count138:[Os-22,Os],drops:[tu,vo]},lm={id:Bs,label:"1 Hook: the price tag, $29,000,000,000; the filing drawer, $13.8 billion",enter:0,stage:"dark",shots:({to:n})=>[Gt(0,[-520,1560,3300],[0,1620,0],{fov:44,focus:[0,1500,0],why:"open on the tag, mid-descent"}),{...Wl(1,46,Dn.pos,Dn.look,{fov:Dn.fov,bulge:[0,0,160],why:"crane down with the tag"}),whoosh:void 0},{...St(48,_o-49,Dn.push.pos,Dn.push.look,{fov:42,ease:Ke,why:"push in as the figure counts"}),focus:Dn.numFocus},vs(_o,eu,[Fs-1050,1500,2900],[Fs,760,300],{fov:42,why:"whip along the set to the filing drawer",vol:.7}),St(_o+eu+1,el-(_o+eu+1)-1,[Fs-560,1950,2150],[Fs,800,420],{fov:42,ease:Ke,why:"push in and rise over the open drawer"}),{...vs(el,E0,[Ri-420,640,2950],[Ri-40,640,0],{fov:42,why:"whip back along the set to the two figures",vol:.7}),focus:[Ri,700,60]},{...St(el+E0+1,n-(el+E0+1)-1,[Ri+80,820,3550],[Ri,600,0],{fov:42,ease:Ke,why:"pull out and up"}),focus:[Ri,700,60]}],lights:n=>{if(n>=w0){let o=Math.sin((n-vo)/7)*Ae((n-vo)/6)*(1-Ae((n-(S0-2))/8)),a=an([Ri,640,0],{s:1.2,key:3.8});return a.key.at=[Ri+330*o,620,0],a.key.angle=.3+.12*Ae((n-(S0-2))/8),a}let e=Ke(Ae((n-_o)/eu)),t=Mi(br.centre,[Fs,640,250],e),i=n>=Ns?Math.exp(-(n-Ns)/11):0,s=n>=Os?Math.exp(-(n-Os)/11):0,r=an(t,{s:1.3,key:3.5+1.1*i+.9*s});return r.accent={pos:e<.5?[0,260,1100]:[Fs,1200,900],color:ge.money,i:2.4*(e<.5?i:s)},r},blur:n=>n<12||n>=as-12&&n<=as-3||wt(n,tu).fast||wt(n,vo).fast,cues:()=>[{kind:"hit",s:"chainshort",at:2,vol:.4,why:"the crane lowers the tag on its chain"},{kind:"hit",s:"thud",at:40,vol:.3,why:"the tag settles over the bag"},{kind:"hit",s:"datashort",at:go.count[0],end:Ns,vol:.35,why:"the floor numerals count up"},{kind:"hit",s:"sub",at:Ns,vol:.5,why:"$29,000,000,000 lands; the ring spreads"},{kind:"hit",s:"pingshort",at:Ns+1,vol:.3,why:"the ring of light"},{kind:"move",s:"lowwoosh",at:as-5,end:as+3,vol:.4,why:"the drawer rolls open"},{kind:"hit",s:"thud",at:as+2,vol:.45,why:"the drawer hits its stop"},{kind:"hit",s:"datashort",at:go.count138[0],end:Os,vol:.3,why:"the plate counts"},{kind:"hit",s:"pingshort",at:Os,vol:.35,why:"$13.8 BILLION lands"},{kind:"hit",s:"thud",at:tu,vol:.45,why:"the $29B plinth drops in"},{kind:"hit",s:"thud",at:vo,vol:.45,why:"the $13.8B plinth drops in"},{kind:"hit",s:"tick",at:S0-2,vol:.3,why:"the spot rests on both"}],build:()=>{let n=new ne,e=T0("hook");n.add(e.group);let t=jh("hook");t.group.scale.setScalar(_7),t.group.position.set(Fs,0,0);let i=cn({r:1300,color:ge.money,dur:28});i.mesh.position.set(Fs,1.5,420),n.add(t.group,i.mesh);let s=(a,l,c,h)=>{let d=new ne;d.add(ut(560,640,460,26,Z.black()));let u=In({size:h,color:c});return u.set(l),u.group.position.set(0,640,30),d.add(u.group),d.position.x=a,n.add(d),d},r=s(Ri-330,"$29B",ge.money,132),o=s(Ri+330,"$13.8B",ge.white,98);return{group:n,update:a=>{e.tag.group.position.y=e.pivotY+v7(a),e.tag.update({swing:b7(a),lit:.35+.65*Ae((a-30)/10)}),e.num.group.visible=a>=go.count[0],e.num.set(Ja(Xn(a,go.count[0],Ns,102e8,29e9))),e.halo.update(a,Ns);let l=Xn(a,go.count138[0],Os,1.2,13.8);t.update({open:y7(a),value:`$${l.toFixed(1)} BILLION`,lit:Ae((a-(go.count138[0]-4))/5)}),i.update(a,Os);let c=wt(a,tu,{h:1500}),h=wt(a,vo,{h:1500});r.visible=a>=w0&&c.on,r.position.y=c.y,o.visible=a>=w0&&h.on,o.position.y=h.y}}}};var M7=()=>new Wt({color:new ce("#0b0b0c"),roughness:.2,metalness:.1,envMapIntensity:.55,clearcoat:1,clearcoatRoughness:.16}),nu=(n=1)=>{let e=new ne,t=M7(),i=new le(new Gn(105,48,32),t);i.position.y=105,i.scale.set(1,1.02,1);let s=new le(new Gn(58,40,28),t);s.position.y=246;let r=new le(new kt(46,7,12,48),Z.satin());r.rotation.x=Math.PI/2,r.position.y=198;for(let o of[i,s,r])o.castShadow=!0,o.receiveShadow=!0,e.add(o);return e.scale.setScalar(n),e};var Pi={w:520,h:700,d:400,top:750},cm=n=>{let e=new ne;e.add(ut(Pi.w,Pi.h,Pi.d,30,Z.black()));let t=Le(600,50,470,16,Z.graphite());t.position.y=Pi.h+25,e.add(t);let i=ut(580,36,450,14,Z.graphite());e.add(i);let s=yn([n],{size:46,color:ge.white,depth:26});s.group.position.set(0,440,Pi.d/2+13),e.add(s.group);let r=nu(2.5),o=[-20,330,-360];e.add(r);let a=new ne;a.position.set(-170,Pi.top,40),a.add(Pn(36,12,Z.graphite()));let l=new le(new mt(6,6,250,16),Z.satin());l.position.set(34,118,-56),l.rotation.set(-.45,0,-.28),l.castShadow=!0;let c=new le(new Sa(27,44,8,24),Z.graphite());c.position.set(70,248,-116),c.rotation.set(-.45,0,-.28),c.castShadow=!0;let h=Tt(ge.amber,1.15),d=new le(new kt(31,5.5,12,40),h);d.position.copy(c.position),d.rotation.set(Math.PI/2-.45,0,-.28),a.add(l,c,d),e.add(a);let u=Pn(64,22,Z.graphite());u.position.set(150,Pi.top+11,70),e.add(u);let f=new ne;f.position.set(318,Pi.top+62,70);let x=new le(new mt(9,11,250,20),Z.satin());x.rotation.z=Math.PI/2,x.position.x=-70;let g=new le(new mt(36,36,124,32),Z.black());g.position.x=-168;for(let m of[-1,1]){let p=new le(new mt(37.5,37.5,12,32),Z.satin());p.position.set(-168,m*44,0),f.add(p)}for(let m of[x,g])m.castShadow=!0,f.add(m);return e.add(f),{group:e,plate:s,update:m=>{r.visible=m.pawn>.001,r.position.set(o[0],o[1]-(1-m.pawn)*620,o[2]),tn(h,m.mic,.05),s.setLit(m.name),f.rotation.z=-(1-m.gavel)*1+.02}}};var Vt={w:780,d:540,h:96},hm=()=>{let n=new ne,e=()=>{let a=new ne,l=Z.black();a.add(ut(Vt.w,30,Vt.d,12,l));for(let[c,h,d,u]of[[Vt.w,26,0,Vt.d/2-13],[Vt.w,26,0,-Vt.d/2+13],[26,Vt.d,Vt.w/2-13,0],[26,Vt.d,-Vt.w/2+13,0]]){let f=Le(c,Vt.h,h,10,l);f.position.set(d,Vt.h/2,u),a.add(f)}return a};n.add(e());let t=new jt({color:new ce("#8f8a76"),roughness:.95}),i=Z.gold();for(let a=0;a<3;a++)for(let l=0;l<2;l++){let c=(a-1)*236,h=(l-.5)*236;for(let u=0;u<2;u++){let f=Le(214,34,214,7,t);f.position.set(c+(u?5:-3),47+u*35,h+(u?-4:3)),n.add(f)}let d=Le(64,73,218,5,i);d.position.set(c,66,h),n.add(d)}let s=new ne;s.position.set(0,Vt.h,-Vt.d/2);let r=e();r.rotation.x=Math.PI,r.position.set(0,Vt.h,Vt.d/2),s.add(r),n.add(s);let o=new le(new kt(64,9,10,32,Math.PI),Z.satin());o.rotation.x=Math.PI/2,o.position.set(0,Vt.h*.6,Vt.d/2+4),n.add(o);for(let a of[-1,1]){let l=Le(46,26,12,4,Z.satin());l.position.set(a*230,Vt.h-8,Vt.d/2+5),n.add(l)}return{group:n,update:a=>{s.rotation.x=-(1-a.lid)*1.95}}};var Ii={die:150,up:330,dieZ:70},um=()=>{let n=new ne;n.add(ut(640,150,560,30,Z.black()));let e=Pn(112,8,Z.satin());e.position.set(0,154,Ii.dieZ),n.add(e);for(let l of[-1,1]){let c=Pn(34,560,Z.satin(),40);c.position.set(l*240,430,-150),n.add(c)}let t=Le(660,150,300,30,Z.black());t.position.set(0,770,-110),n.add(t);let i=Le(260,110,330,24,Z.graphite());i.position.set(0,750,20),n.add(i);let s=yn(["SHARES"],{size:54,color:ge.white,depth:20});s.group.position.set(0,772,50),s.group.rotation.x=-.5,s.group.position.set(0,860,-60),n.add(s.group);let r=new ne,o=Pn(46,360,Z.satin(),40);o.position.y=240;let a=Pn(104,60,Z.graphite(),56);return r.add(o,a),r.position.set(0,Ii.up,Ii.dieZ),n.add(r),{group:n,plate:s,update:l=>{r.position.y=Ii.up-l.ram*(Ii.up-(Ii.die+8+34))}}};var xn={w:660,h:760,d:520},dm=()=>{let n=new ne,e=new ne;e.add(ut(xn.w,xn.h,xn.d,44,Z.black()));let t=Pn(150,46,Z.graphite(),56);t.position.set(0,xn.h,0),t.position.y=xn.h,e.add(t);let i=new jt({color:new ce("#020203"),roughness:1}),s=new le(new mt(118,118,4,48),i);s.position.set(0,xn.h+47,0),e.add(s);let r=Le(520,210,18,10,new Wt({color:new ce("#050506"),roughness:.22,metalness:.3,clearcoat:.6,envMapIntensity:.7}));r.position.set(0,520,xn.d/2+2),e.add(r);let o=In({size:130,color:ge.white,depth:16});o.group.position.set(0,475,xn.d/2+12),o.group.traverse(d=>{d.castShadow=!1}),e.add(o.group);let a=Tt(ge.amber,1.15),l=new le(new Gn(22,24,16),a);l.position.set(250,700,xn.d/2+6),e.add(l);let c=Le(330,150,20,10,i);c.position.set(0,150,xn.d/2+1),e.add(c);let h=Le(350,24,330,10,Z.graphite());h.position.set(0,46,xn.d/2+130),h.rotation.x=.2,e.add(h);for(let d of[-1,1]){let u=Le(22,60,330,8,Z.graphite());u.position.set(d*175,62,xn.d/2+130),u.rotation.x=.2,e.add(u)}return n.add(e),{group:n,fig:o,update:d=>{o.set(d.value),o.group.visible=d.on>.02,tn(o.face,d.on,.05),tn(a,d.lamp,.06),e.rotation.z=d.shake*.012,e.position.x=d.shake*5}}};var hn=90,$t=34,A0=(n,e)=>{let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},C0=null,fm=null,pm=null,mm=null,xm=null,R0=()=>(C0||(C0=new or([[0,0],[hn-7,0],[hn,7],[hn,$t-7],[hn-7,$t],[hn-16,$t],[hn-20,$t-3],[0,$t-3]].map(([e,t])=>new Q(e,t)),72),fm=new or([[hn+.6,10],[hn+.6,$t-10]].map(([e,t])=>new Q(e,t)),72),pm=Z.black(),mm=new Wt({color:new ce("#b89a5e"),roughness:.3,metalness:1,envMapIntensity:1.3,emissive:new ce(ge.money),emissiveIntensity:.07}),xm=Tt(ge.money,.86)),{bodyGeo:C0,rimGeo:fm,bodyMat:pm,rimMat:mm,faceMat:xm}),gm=(n,e=2*hn-44,t=$t-2.5)=>{let i=R0(),s=Math.min(44,e/(ii(n,"800",1)*1.14)),r=ln(Nt(n,{font:"800",size:s,depth:2.5,bevel:0,face:i.faceMat}));return r.rotation.x=-Math.PI/2,r.position.set(0,t,s*.345),r.traverse(o=>{o.castShadow=!1}),r},gi=n=>{let e=R0(),t=new ne,i=new le(e.bodyGeo,e.bodyMat);i.castShadow=!0,i.receiveShadow=!0;let s=new le(e.rimGeo,e.rimMat);return t.add(i,s,gm(n)),t},_m=(n,e)=>{let t=R0(),i=new ne,s=n*Math.PI*2,r=-s/2,o=new le(new mt(hn,hn,$t,48,1,!1,r,s),t.bodyMat);o.position.y=$t/2,o.castShadow=!0,o.receiveShadow=!0,i.add(o);for(let l of[-1,1]){let c=new le(new bn(hn,$t),t.bodyMat),h=l*s/2;c.position.set(Math.sin(h)*hn/2,$t/2,Math.cos(h)*hn/2),c.rotation.y=h+l*Math.PI/2,c.castShadow=!0,i.add(c)}let a=new le(new mt(hn+.6,hn+.6,$t-20,48,1,!0,r,s),t.rimMat);if(a.position.y=$t/2,i.add(a),e){let l=gm(e,70,$t+.6);l.position.z+=hn*.56,i.add(l)}return i},bo=(n,e,t="SHARE")=>{let i=new ne;i.name=`tokens:${n}`;let s=n.length*3.7,r=Array.from({length:e},(a,l)=>{let c=gi(t);return c.rotation.y=(A0(l,s)-.5)*.5,c.userData.ox=(A0(l,s+1)-.5)*7,c.userData.oz=(A0(l,s+2)-.5)*7,i.add(c),c});return{group:i,h:a=>Math.max(0,a)*$t,update:a=>{let l=Math.max(0,Math.min(e,a.count));r.forEach((c,h)=>{let d=l-h;if(c.visible=d>0,!c.visible)return;let u=Math.min(1,d);c.position.set(c.userData.ox,h*$t+(1-u)*(1-u)*520,c.userData.oz)})}}};var nn="deal",bm=ri(nn),S7=Ye(nn,0,/^August/),ls=Ye(nn,0,/^Jack/),ym=Ye(nn,0,/^Square/),il=Ye(nn,0,/^agreed/),E7=Ye(nn,0,/^Afterpay/),tl=Math.max(bm+8,S7+2),P0=ls-10,yo=ym-14,nl=ym,zs=il+1,I0=E7+3,yr=Math.max(Yh(nn,0)+2,en(nn,1)-4),w7=Ye(nn,1,/^didn/),Mm=Ye(nn,1,/^cash/),D0=yr+4,Sr=Math.max(w7+10,Mm-8),Mr=Mm+3,iu=Mr+13,Er=Mr+1,sl=20,T7=Ye(nn,2,/^shares/),Di=[en(nn,2)+4,en(nn,2)+17,T7+2],ks=en(nn,3)-8,Mo=20,q7=Ye(nn,3,/^Afterpay/),Li=Ye(nn,3,/^\.375/),A7=Ye(nn,3,/^Square/),Yn=Math.max(ks+Mo+4,q7+8),su=Li-6,ru=Li+1,L0=A7+3,cs=0,_i=1200,$n=2500,vm=470;var C7=n=>{if(n<il-14)return 1;if(n<zs-4)return 1-Ke(Ae((n-(il-14))/(zs-4-(il-14))));if(n<zs)return $s(Ae((n-(zs-4))/4));let e=n-zs;return e<6?1-.16*Math.sin(Math.PI*e/6):1},R7=n=>{if(n<Sr-9)return 0;if(n<Sr)return $s(Ae((n-(Sr-9))/9));let e=n-Sr;return e<5?1-.035*Math.sin(Math.PI*e/5):1},P7=n=>{let e=0;for(let i of Di)n>=i-4&&n<i?e=Math.max(e,$s(Ae((n-(i-4))/4))):n>=i&&n<i+7&&(e=Math.max(e,1-Ke(Ae((n-i-1)/6))));let t=Di[0]-13;return n>=t-4&&n<t?e=Math.max(e,$s(Ae((n-(t-4))/4))):n>=t&&n<t+7&&(e=Math.max(e,1-Ke(Ae((n-t-1)/6)))),e},U0=10,I7=n=>n<Er?cs:n<Er+sl?cs+(_i-cs)*Ke((n-Er)/sl):n<ks?_i:n<ks+Mo?_i+($n-_i)*Ke((n-ks)/Mo):$n,D7=n=>n>=Yn+3&&n<Li,Sm={id:nn,label:"3 The deal: a podium, a briefcase of cash, a press of shares, the exchange machine (0.375)",enter:bm,stage:"dark",stageAt:n=>n>=yr?"light":"dark",shots:({from:n,to:e})=>[Gt(n,[-620,470,2150],[40,560,60],{fov:44,focus:[0,500,200],why:"low on the podium"}),St(n+1,Math.max(24,ls-n-8),[-470,760,2500],[70,760,0],{fov:44,ease:Ke,why:"rise to the speaker"}),St(yo-2,30,[-330,1e3,3350],[120,900,0],{fov:44,why:"pull out: the sign swings in"}),St(il-8,36,[300,860,2900],[130,760,20],{fov:44,why:"push to the gavel and the bag"}),Gt(yr,[cs-190,1780,1750],[cs,110,20],{fov:40,focus:[cs,80,0],why:"CUT: the table, the briefcase"}),St(yr+1,Er-yr-2,[cs+40,1560,1520],[cs,110,20],{fov:40,ease:Ke,why:"push on the briefcase"}),vs(Er,sl,[_i+150,1640,1700],[_i+170,330,30],{fov:40,why:"along the table to the press",vol:.5}),St(Er+sl+1,ks-(Er+sl)-2,[_i+210,1480,1500],[_i+190,330,30],{fov:40,ease:Ke,why:"push on the press"}),vs(ks,Mo,[$n-60,1950,2200],[$n,360,150],{fov:40,why:"along the table to the machine",vol:.5}),St(ks+Mo+1,Math.max(20,Li-16-(ks+Mo+1)),[$n-110,1900,2120],[$n,330,170],{fov:40,ease:Ke,why:"push on the machine"}),St(Li-14,Math.max(24,e-(Li-14)-2),[$n+70,1500,2050],[$n+10,200,380],{fov:40,ease:Ke,why:"down to the chute: the wedge"})],lights:n=>{if(n>=yr)return K1([I7(n),160,0]);let e=an([110,760,0],{s:1.15,key:3.4,rim:3.2,back:2.5,amb:.15}),t=Ot(n,ls-2,ls+6,Mt),i=Ot(n,nl-2,nl+7,Mt);return e.accent={pos:[-80,1060,260],color:ge.amber,i:.6*t},e.back.i*=.8+.3*i,e},blur:n=>wt(n,tl,{h:900,fall:12}).fast||wt(n,I0,{h:1100,fall:9}).fast||n>=zs-4&&n<=zs+1||n>=yo&&n<yo+7||wt(n,D0,{h:700,fall:7}).fast||n>=Sr-5&&n<=Sr+1||n>=Mr+3&&n<=iu||Di.some(e=>n>=e-3&&n<=e+1||n>=e+3&&n<=e+3+U0)||n>=Yn-9&&n<=Yn+3||n>=su&&n<=ru?!0:wt(n,L0,{h:800,fall:8}).fast,cues:()=>[{kind:"hit",s:"thud",at:tl,vol:.35,why:"the AUG 2021 plate lands"},{kind:"move",s:"whooshsoft",at:P0+5,end:P0+16,vol:.3,why:"the pawn rises behind the podium"},{kind:"hit",s:"click",at:ls,vol:.3,why:"the microphone's ring lights: Jack Dorsey"},{kind:"move",s:"swoosh",at:yo+5,end:yo+22,vol:.4,why:"the SQUARE sign swings in"},{kind:"hit",s:"pingshort",at:nl,vol:.3,why:"SQUARE lights"},{kind:"hit",s:"thud",at:zs,vol:.55,why:"the gavel: agreed"},{kind:"hit",s:"thud",at:I0,vol:.4,why:"the Afterpay bag lands"},{kind:"hit",s:"thud",at:D0,vol:.4,why:"the briefcase of cash lands"},{kind:"hit",s:"thud",at:Sr,vol:.6,why:"the lid slams: not in cash"},{kind:"move",s:"swoosh",at:Mr+8,end:iu+6,vol:.45,why:"the briefcase slides off the table"},...Di.flatMap((n,e)=>[{kind:"hit",s:"thud",at:n,vol:.4,why:`the press stamps share ${e+1}`},{kind:"hit",s:"coin",at:n+3+U0,vol:.3,why:`share ${e+1} lands on the stack`}]),{kind:"hit",s:"coin",at:Yn,vol:.4,why:"the Afterpay token drops into the machine"},{kind:"hit",s:"datashort",at:Yn+5,end:Li,vol:.3,why:"the machine works: its screen counts"},{kind:"hit",s:"pingshort",at:ru,vol:.4,why:"0.375: the wedge slides out"},{kind:"hit",s:"coin",at:L0,vol:.35,why:"a whole Square share lands beside it"}],build:()=>{let n=new ne,e=new ne,t=cm("JACK DORSEY");e.add(t.group);let i=yn(["AUG 2021"],{size:62,color:ge.white,depth:46}),s=new ne;i.group.position.y=i.h/2,i.group.rotation.x=-.16,s.add(i.group),s.position.set(-150,0,Pi.d/2+190),s.rotation.y=.14,e.add(s);let r=yn(["SQUARE"],{size:128,color:ge.white,depth:60}),o=new ne;o.position.set(110,1960,-520),r.group.position.y=-560,o.add(r.group);for(let T of[-1,1]){let P=new le(new mt(7,7,440,12),Z.satin());P.position.set(T*(r.w/2-70),-560+r.h/2+220,0),o.add(P)}e.add(o);let a=ut(380,250,300,24,Z.black()),l=Qh("deal").group;l.rotation.y=-.22,l.position.y=250;let c=new ne;c.position.set(520,0,150),c.add(a,l),e.add(c),n.add(e);let h=new ne,d=new ne,u=hm();u.group.rotation.y=.2,d.add(u.group),h.add(d);let f=um();f.group.position.set(_i,0,0),f.group.rotation.y=-.16,h.add(f.group);let x=bo("deal",3+Di.length+1);x.group.position.set(_i+vm,0,110),h.add(x.group);let g=Di.map(()=>{let T=gi("SHARE");return h.add(T),T}),m=gi("SHARE");h.add(m);let p=dm();p.group.position.set($n,0,0),p.group.rotation.y=.1,h.add(p.group);let v=gi("AFTERPAY");h.add(v);let _=_m(.375);h.add(_);let S=gi("SQUARE");h.add(S);let C=cn({r:900,w:14,dur:30});C.mesh.position.set($n-90,2,xn.d/2+360),h.add(C.mesh),n.add(h);let E=[_i,Ii.die+8,Ii.dieZ];return{group:n,update:T=>{let P=T>=yr;if(e.visible=!P,h.visible=P,!P){let k=wt(T,tl,{h:900,fall:12});s.visible=k.on,s.position.y=k.y,i.setLit(.35+.65*Ot(T,tl,tl+6,Mt)),t.update({pawn:Jh(T,P0,15),mic:Ot(T,ls-2,ls+6,Mt),name:.25+.75*Ot(T,ls-2,ls+6,Mt),gavel:C7(T)});let re=em(T,yo,{amp:1.15,period:30,damp:.11});o.visible=re.on,o.rotation.x=-re.a,r.setLit(Ot(T,nl-2,nl+7,Mt));let he=wt(T,I0,{h:1100,fall:9});c.visible=he.on,c.position.y=he.y;return}let M=wt(T,D0,{h:700,fall:7}),b=T<Mr?0:$s(Ae((T-Mr)/(iu-Mr)));d.visible=M.on&&T<iu+2,d.position.set(cs-b*2300,M.y,20+b*260),d.rotation.y=b*.5,u.update({lid:R7(T)}),f.update({ram:P7(T)});let R=3;g.forEach((k,re)=>{let he=Di[re],qe=he+3,ze=(T-qe)/U0;if(k.visible=ze>=0&&ze<1,ze>=1&&R++,!k.visible)return;let je=x.h(3+re);k.position.set(E[0]+(vm-0)*ze+0,E[1]+(je-E[1])*ze+330*4*ze*(1-ze)*.5+0,E[2]+(110-Ii.dieZ)*ze),k.rotation.z=-ze*Math.PI*2}),x.update({count:R});let F=Di.some(k=>T>=k+1&&T<k+3)||T>=Di[0]-12&&T<Di[0]-10;m.visible=F,m.position.set(E[0],E[1],E[2]);let O=T-Yn;if(v.visible=O>-12&&O<5,v.visible){let k=Ae((O+12)/12);v.position.set($n+6,xn.h+60+(1-k*k)*1200-Math.max(0,O)*22,0),v.rotation.y=.4}let H=D7(T);p.update({value:Xn(T,Yn+6,Li,0,.375).toFixed(3),on:Ot(T,Yn+2,Yn+9,Mt),lamp:H?Math.floor((T-Yn)/3)%2?1:.25:T>=Li?1:0,shake:H?Math.sin((T-Yn)*1.9)*(1-.6*Ae((T-Yn)/(Li-Yn))):0});let G=$u(Ae((T-su)/(ru-su)));_.visible=T>=su;let X=xn.d/2;_.position.set($n-90-20*G,150*(1-G)*(1-G)+.5,X+20+340*G),_.rotation.y=.5*(1-G)+.35,C.update(T,ru);let se=wt(T,L0,{h:800,fall:8});S.visible=se.on,S.position.set($n+150,se.y,X+350),S.rotation.y=-.25}}}};var ou=n=>{let e=new ne;e.name=`board:${n}`,e.add(ut(330,56,300,18,Z.black()));let t=ut(120,330,120,16,Z.graphite());t.position.y=221,e.add(t);let i=Le(760,500,130,30,Z.black());i.position.y=636,e.add(i);let s=Le(676,300,16,8,new Wt({color:new ce("#050506"),roughness:.22,metalness:.3,envMapIntensity:.7,clearcoat:.6,clearcoatRoughness:.2}));s.position.set(0,606,68),e.add(s);let r=Le(800,44,190,16,Z.graphite());r.position.set(0,908,12),e.add(r);for(let f of[-1,1]){let x=new le(new mt(11,11,8,24),Z.satin());x.rotation.x=Math.PI/2,x.position.set(f*340,832,66),e.add(x)}let o=Tt(ge.white,.8),a=ln(Nt("SHARE PRICE",{font:"800",size:34,depth:3,bevel:0,face:o}));a.position.set(0,800,66),a.traverse(f=>{f.castShadow=!1}),e.add(a);let l=In({size:190,color:ge.money,depth:20});l.group.position.set(0,540,77),l.group.traverse(f=>{f.castShadow=!1}),e.add(l.group);let c=new ce(ge.money),h=new ce(ge.red),d=l.face.userData.full,u=d.r/Math.max(1e-6,c.r);return{group:e,update:f=>{l.set(f.value),l.group.visible=f.on>.02,d.copy(c).lerp(h,Math.max(0,Math.min(1,f.red))).multiplyScalar(u*(1+.1*f.red)),tn(l.face,f.on,.05),l.side.color.copy(d).multiplyScalar(.2),tn(o,.25+.75*f.on,.05)}}};var N0=900,F0=26,au=n=>{let e=new ne;e.name=`column:${n}`,e.add(ut(280,F0,280,10,Z.black()));let t=new Cn(220,1,220,1,12,1),i=t.attributes.position,s=new Float32Array(i.count*3);for(let c=0;c<i.count;c++){let h=i.getY(c)+.5,d=i.getY(c)>.499?1.08:1,u=(.5+.5*Math.pow(h,.8))*d;s[c*3]=u,s[c*3+1]=u*(.9+.1*h),s[c*3+2]=u*(.62+.38*h)}t.setAttribute("color",new pn(s,3));let r=new ce(ge.money).multiplyScalar(vr*1.05),o=new vn({color:r.clone(),vertexColors:!0,toneMapped:!1}),a=new le(t,o);e.add(a);let l=ut(232,10,232,4,Z.graphite());return e.add(l),{group:e,update:c=>{let h=Math.max(1,Math.max(0,Math.min(1.2,c.h))*N0);a.visible=l.visible=c.h>.004,a.scale.y=h,a.position.y=F0+h/2,l.position.y=F0+h+5,o.color.copy(r).multiplyScalar(.3+.7*Math.max(0,Math.min(1,c.glow)))}}};var Hs="price",Am=ri(Hs),L7=Ye(Hs,0,/^each/),uM=Ye(Hs,0,/^worth/),Ui=Ye(Hs,0,/^\$?247/),cu=en(Hs,1),U7=Ye(Hs,1,/^out/),Fi=Ye(Hs,1,/^\$?29/),hu=Am+6,uu=L7-4,Em=Math.max(uu+4,Ui-40),k0=[Ui+16,Ui+27],fu=cu+3,du=Fi-12,O0=U7-2,B0=Fi-26,H0=24,lu=230,z0=-240,wm=300,Tm=640;var F7=n=>{let e=Ae((n-(hu-9))/9);for(let t of k0)e+=Ae((n-(t-7))/7);return e+=(H0-3)*Ke(Ae((n-fu)/(du-fu))),e},qm=n=>n<O0?0:1-Math.pow(1-Ae((n-O0)/(Fi-O0)),2.4),Cm={id:Hs,label:"4 The price: a share on a plinth, the board counts to $247; the stack shoots up into $29B",enter:Am,stage:"dark",shots:({from:n,to:e})=>[Gt(n,[-1200,260,1700],[-170,600,0],{fov:46,focus:[z0,620,60],why:"low under the board, the token drops"}),St(n+1,Math.max(30,Ui-n+4),[-480,640,2650],[-110,640,0],{fov:46,ease:Ke,why:"rise round the board as it counts"}),St(Ui+8,Math.max(20,cu-4-(Ui+8)),[-120,600,2700],[-20,560,60],{fov:46,ease:Ke,why:"drift toward the share on its plinth"}),Wl(cu-2,Math.max(30,Fi-6-(cu-2)),[280,1e3,3300],[150,440,0],{fov:46,bulge:[0,0,260],why:"crane up and back as the stack shoots up"}),St(Fi-4,Math.max(12,e-(Fi-4)-1),[250,900,3150],[150,420,0],{fov:46,ease:Ke,why:"settle on the three: $29B"})],lights:n=>{let e=qm(n),t=an([120,620,0],{s:1.2,key:3.5,rim:3.2,back:2.4,amb:.15});return t.accent={pos:[Tm-60,260+500*e,320],color:ge.money,i:2.6*e},t.back.i*=1+.25*e,t},blur:n=>n>=hu-9&&n<=hu+1||k0.some(e=>n>=e-7&&n<=e+1)||n>=fu&&n<=du+2,cues:()=>[{kind:"hit",s:"coin",at:hu,vol:.4,why:"one Square share lands on its plinth"},{kind:"hit",s:"click",at:uu,vol:.3,why:"the price board lights"},{kind:"hit",s:"datashort",at:Em,end:Ui+2,vol:.3,why:"the board counts up"},{kind:"hit",s:"pingshort",at:Ui,vol:.35,why:"$247"},...k0.map((n,e)=>({kind:"hit",s:"coin",at:n,vol:.3,why:`share ${e+2} lands`})),{kind:"move",s:"whooshsoft",at:Math.round((fu+du)/2),end:du+6,vol:.45,why:"the stack shoots up"},{kind:"hit",s:"data",at:B0,end:Fi+2,vol:.3,why:"the numerals count to $29B"},{kind:"hit",s:"ping",at:Fi,vol:.4,why:"$29B lands: a ring of light"}],build:()=>{let n=new ne,e=ou("price");e.group.position.set(z0,0,-160),e.group.rotation.y=.2,n.add(e.group);let t=ut(300,lu,300,26,Z.black());t.position.set(wm,lu/2,160),n.add(t);let i=bo("price",H0);i.group.position.set(wm,lu,160),n.add(i.group);let s=au("price");s.group.position.set(Tm,0,-60),n.add(s.group);let r=In({size:190,color:ge.money});r.group.position.set(190,0,430),r.group.rotation.y=-.06,n.add(r.group);let o=cn({r:1300,w:13,dur:30,color:ge.money});o.mesh.position.set(190,2,420),n.add(o.mesh);let a=cn({r:700,w:10,dur:24});return a.mesh.position.set(z0,2,60),n.add(a.mesh),{group:n,update:l=>{e.update({value:"$"+Math.round(Xn(l,Em,Ui,1,247)),red:0,on:Ot(l,uu,uu+8,Mt)}),a.update(l,Ui),i.update({count:F7(l)});let c=qm(l);s.update({h:c*Math.min(1.05,(H0*$t+lu-26)/N0),glow:.35+.65*c}),r.group.visible=l>=B0,r.set(Q1(Xn(l,B0,Fi,1e9,29e9))),o.update(l,Fi)}}}};var un={rod:850,leafW:680,leafH:600,months:[["AUG","2021"],["SEP","2021"],["OCT","2021"],["NOV","2021"],["DEC","2021"],["JAN","2022"]]},Rm=-.15,N7=-2*Math.PI+.15,O7=n=>n<=0?0:n>=1?1:n*n*(3-2*n),Pm=()=>{let n=new ne;n.add(ut(900,130,520,30,Z.black()));let e=ut(760,60,380,20,Z.graphite());e.position.y+=130,n.add(e);for(let l of[-1,1]){let c=Le(56,un.rod-150,70,14,Z.black());c.position.set(l*400,190+(un.rod-150)/2-20,0),n.add(c);let h=Le(84,84,96,20,Z.black());h.position.set(l*400,un.rod,0),n.add(h)}let t=new le(new mt(15,15,820,32),Z.satin());t.rotation.z=Math.PI/2,t.position.y=un.rod,t.castShadow=!0,n.add(t);let i=Le(720,un.rod-210,30,10,Z.black());i.position.set(0,190+(un.rod-210)/2,0),n.add(i);let s=un.months.length-1,r=l=>30+(s-l)*20,o=l=>-(48+l*20),a=un.months.map(([l,c],h)=>{let d=new ne;d.position.set(0,un.rod,0);let u=new ne;d.add(u);let f=Le(un.leafW,un.leafH,18,8,Z.graphite());f.position.set(0,-un.leafH/2-12,0),u.add(f);for(let p of[-1,1]){let v=new le(new kt(26,6,12,32),Z.satin());v.rotation.y=Math.PI/2,v.position.set(p*230,0,0),u.add(v)}let x=Tt(ge.white,.86),g=ln(Nt(l,{font:"800",size:196,depth:5,bevel:0,face:x}),1.12);g.position.set(0,-un.leafH/2-12-20,9.5);let m=ln(Nt(c,{font:"500",size:70,depth:4,bevel:0,face:x}),1.3);return m.position.set(0,-un.leafH/2-12-170,9.5),u.add(g,m),u.position.z=r(h),n.add(d),{pivot:d,leaf:u}});return{group:n,update:l=>{a.forEach((c,h)=>{let d=O7(l[h]??0);c.pivot.rotation.x=Rm+(N7-Rm)*d;let u=Math.max(0,Math.min(1,(d-.38)/.24));c.leaf.position.z=r(h)+(o(h)-r(h))*u*u*(3-2*u)})}}};var at={top:980,cy:740,pitch:268,w:244,h:300,d:60,from:"SQUARE",to:"BLOCK"},Im=.69,Dm=()=>{let n=new ne;for(let r of[-1,1]){let o=ut(80,at.top+40,80,18,Z.black());o.position.x=r*880,n.add(o);let a=ut(260,46,260,14,Z.black());a.position.x=r*880,n.add(a)}let e=Le(1900,70,96,20,Z.black());e.position.y=at.top,n.add(e);let t=new ne;n.add(t);let i=215,s=Array.from(at.from,(r,o)=>{let a=new ne;a.position.set((o-2.5)*at.pitch,at.cy,0);let l=new ne;a.add(l),l.add(Le(at.w,at.h,at.d,16,Z.graphite()));let c=Le(at.w-34,at.h-34,8,6,Z.graphite());c.position.z=at.d/2-2,l.add(c);let h=Tt(ge.white,.88),d=ln(Nt(r,{font:"800",size:i,depth:5,bevel:0,face:h}),1.1);d.position.set(0,-(i*Im)/2,at.d/2+2.5),l.add(d);let u=at.to[o];if(u){let x=Le(at.w-34,at.h-34,8,6,Z.graphite());x.position.z=-at.d/2+2,l.add(x);let g=ln(Nt(u,{font:"800",size:i,depth:5,bevel:0,face:Tt(ge.white,.88)}),1.1);g.rotation.x=Math.PI,g.position.set(0,i*Im/2,-at.d/2-2.5),l.add(g)}let f=new ne;for(let x of[-1,1]){let g=Le(12,at.top-35-(at.cy+at.h/2)+14,12,4,Z.satin());g.position.set(x*70,at.h/2+(at.top-35-(at.cy+at.h/2))/2,0),f.add(g)}return a.add(f),(o<5?t:n).add(a),{hold:a,t:l,hang:f,fa:h}});return{group:n,update:r=>{s.forEach(({t:a,fa:l},c)=>{c<5&&(a.rotation.x=-Math.PI*(r.flip[c]??0)),tn(l,r.on[c]??1)}),t.position.x=r.shift*at.pitch*.5;let o=s[5];o.hang.visible=r.dropY>-1,o.hold.position.set(2.5*at.pitch+r.dropX,at.cy+r.dropY,r.dropX*.6),o.t.rotation.x=r.dropTip*(-Math.PI/2),o.t.rotation.z=-r.dropTip*.5-(r.dropY<-1?Math.min(.5,-r.dropY/1400):0)}}};var gn="close",Y0=ri(gn),B7=Ye(gn,0,/^months/),Lm=Ye(gn,1,/^Square/),z7=Ye(gn,1,/^renamed/),mu=Ye(gn,1,/^Block/),Nm=Ye(gn,1,/^halved/),Om=Ye(gn,2,/^Same/),rl=Ye(gn,2,/^half/),$0=Ye(gn,3,/^closed/),k7=Ye(gn,3,/^SEC/),Bm=Ye(gn,3,/^worth/),H7=Ye(gn,3,/13/),bi=en(gn,1)-4,Ni=en(gn,2)-3,hs=en(gn,3)-3,xu=0,ol=6e3,Ao=ol+2300,Z0=12e3,vi=18e3,K0=11,_u=un.months.length-1,Um=Y0-5,zm=B7+2-K0,J0=n=>Um+n*(zm-Um)/(_u-1),al=zm+K0,km=n=>Array.from({length:_u},(e,t)=>Ae((n-J0(t))/K0)),G0=bi-6,vu=z7-2,Hm=3.6,Vm=-(at.cy-at.h/2),V7=Math.sqrt(2*-Vm/Hm),ll=vu+V7,Q0=10,cl=n=>mu+2-Q0-(4-n)*4,To=mu+9,pu=26,j0=Nm-22,Vs=Nm+3,V0=16,wo=11,hl=n=>Ni-3+n*5,Gm=rl-9,ef=rl+8,tf=$0-10,wr=$0+7,ul=k7+3,W0=Bm-8,qo=Bm-2,Tr=H7+12,PM={E:Y0,B0:bi,C0:Ni,D0:hs,flips:Array.from({length:_u},(n,e)=>J0(e)),jan:al,drop:vu,hit:ll,tflips:[0,1,2,3,4].map(cl),track:To,count:[j0,Vs],toks:[0,1,2,3,4].map(hl),sink:[Gm,ef],roll:[tf,wr],form:ul,cnt:[qo,Tr]},So={c:[xu,540,0],a0:-26,a1:12,r0:2550,r1:2050,y0:520,y1:640},Eo={c:[Z0+20,600,0],a0:-18,a1:15,r0:3350,r1:2950,y0:560,y1:720},gu=[ol+60,830,0],X0=[Ao,980,60],G7=({from:n,to:e})=>[Gt(n,Lr(So.c,So.a0,So.r0,So.y0),So.c,{fov:40,why:"cut: the calendar"}),Zo(n+1,bi-n-2,So,{fov:40,ease:Ke,why:"orbit and push on the calendar"}),Gt(bi,[ol-420,560,4e3],gu,{fov:46,why:"cut: the sign"}),St(bi+1,To-bi-2,[ol-120,620,3550],gu,{fov:46,ease:Ke,why:"push on the sign"}),vs(To,pu,[Ao-480,720,2900],X0,{fov:44,bulge:[0,40,260],why:"track from the sign to the board",vol:.5}),St(To+pu+1,Ni-(To+pu)-2,[Ao+160,760,2350],X0,{fov:44,ease:Ke,why:"push on the falling price"}),Gt(Ni,Lr(Eo.c,Eo.a0,Eo.r0,Eo.y0),Eo.c,{fov:42,why:"cut: the stack and the column"}),Zo(Ni+1,hs-Ni-2,Eo,{fov:42,ease:Ke,why:"orbit the stack and the column"}),Gt(hs,[vi+850,1750,2700],[vi,780,360],{fov:44,why:"cut: the drawer"}),St(hs+1,qo-hs-2,[vi+520,2050,2050],[vi+40,840,400],{fov:44,ease:Ke,why:"push toward the drawer"}),St(qo,Math.max(20,e-qo-1),[vi+300,2200,1650],[vi+60,930,400],{fov:44,ease:Ke,why:"push onto the plate"})],Fm=(n,e,t)=>"#"+new ce(n).lerp(new ce(e),Ae(t)).getHexString(),W7=n=>{if(n<bi)return an([xu,520,0],{s:1.05,key:3.4+.5*Ot(n,al-2,al+8,Mt)});if(n<Ni){let i=Yo(Ae((n-To)/pu)),s=[gu[0]+(X0[0]-gu[0])*i,820-80*i,0],r=Ot(n,Vs-3,Vs+14,Mt),o=an(s,{s:1.3-.25*i,key:2.9+.8*Ot(n,Lm-4,Lm+8,Mt),back:3.2});return o.back={...o.back,color:Fm("#F2EEEE",ge.red,r*.9),i:3.2+2.2*r},o.accent={pos:[Ao-300,900,900],color:ge.red,i:2.4*r},o}if(n<hs)return an([Z0,480,0],{s:1.1,key:3.5});let e=Ot(n,Tr-2,Tr+14,Mt),t=an([vi,640,-200],{s:1.2,key:3.5});return t.back={...t.back,color:Fm("#F2EEEE",ge.money,e*.6),i:3.2+1.2*e},t.accent={pos:[vi+200,1500,1200],color:ge.money,i:1.6*e},t},X7=()=>[...Array.from({length:_u},(n,e)=>({kind:"hit",s:"flick",at:Math.round(J0(e)+3),vol:.34,why:`the calendar: leaf ${un.months[e][0]} whips over`})),{kind:"hit",s:"thud",at:al,vol:.3,why:"the calendar: JAN lands"},{kind:"hit",s:"datashort",at:G0+2,end:G0+20,vol:.22,why:"the sign: its letters light, S-Q-U-A-R-E"},{kind:"hit",s:"thud",at:Math.round(ll),vol:.42,why:"the sign: the last tile hits the floor"},...[0,1,2,3,4].map(n=>({kind:"hit",s:"click",at:cl(n)+4,vol:.3,why:`the sign: tile ${n+1} flips to ${at.to[n]}`})),{kind:"hit",s:"data",at:j0,end:Vs,vol:.3,why:"the board counts down: $247 \u2192 $122"},{kind:"hit",s:"sub",at:Vs,vol:.45,why:"the board lands on $122 and turns red"},...[0,1,2,3,4].map(n=>({kind:"hit",s:"coin",at:hl(n),vol:.3,why:`the stack: token ${wo+n+1} lands`})),{kind:"hit",s:"click",at:Om+2,vol:.28,why:"SAME SHARES lights"},{kind:"move",s:"lowwoosh",at:rl,end:ef+6,vol:.4,why:"the value column sinks to half"},{kind:"hit",s:"click",at:rl+2,vol:.28,why:"HALF PRICE lights"},{kind:"move",s:"whooshsoft",at:$0-2,end:wr,vol:.4,why:"the drawer rolls open"},{kind:"hit",s:"thud",at:wr-2,vol:.4,why:"the drawer stops on its runners"},{kind:"hit",s:"thud",at:ul,vol:.36,why:"FORM 10-Q drops onto the cabinet"},{kind:"hit",s:"click",at:W0+2,vol:.28,why:"the drawer's plate lights"},{kind:"hit",s:"data",at:qo,end:Tr,vol:.3,why:"the plate counts up to $13.8 BILLION"},{kind:"hit",s:"bloom",at:Tr,vol:.4,why:"$13.8 BILLION lands: the ring of light"}],Y7=n=>n<bi&&km(n).some(e=>e>.12&&e<.9)||n>=vu&&n<ll+3||[0,1,2,3,4].some(e=>n>cl(e)+2&&n<cl(e)+Q0-2)||[0,1,2,3,4].some(e=>wt(n,hl(e),{h:900,fall:8}).fast)||n>tf+2&&n<wr-5||wt(n,ul,{h:1300,fall:8}).fast,$7=()=>{let n=new ne,e=Pm();e.group.position.set(xu,0,0),e.group.rotation.y=-.1,n.add(e.group);let t=cn({r:1500,dur:26});t.mesh.position.set(xu,1.5,150),n.add(t.mesh);let i=Dm();i.group.position.set(ol,0,0),n.add(i.group);let s=ou("close");s.group.position.set(Ao,0,0),s.group.rotation.y=-.16,s.group.scale.setScalar(1.15),n.add(s.group);let r=cn({r:1500,dur:26,color:ge.red});r.mesh.position.set(Ao,1.5,260),n.add(r.mesh);let o=new ne;o.position.set(Z0,0,0),o.scale.setScalar(1.9),n.add(o);let a=bo("close",V0);a.group.position.set(-200,0,0),o.add(a.group);let l=gi("SQ");o.add(l);let c=au("close");c.group.position.set(200,0,0),o.add(c.group);let h=yn(["SAME SHARES"],{size:18,depth:16});h.group.position.set(-200,h.h/2,150),h.group.rotation.x=-.32,o.add(h.group);let d=yn(["HALF PRICE"],{size:18,depth:16});d.group.position.set(200,d.h/2,200),d.group.rotation.x=-.32,o.add(d.group);let u=a.h(V0)/900,f=jh("close");f.group.position.set(vi,0,0),f.group.rotation.y=.2,f.group.scale.setScalar(1.7),n.add(f.group);let x=yn(["FORM 10-Q"],{size:50,depth:30}),g=new ne;g.add(x.group),g.rotation.y=.2,g.position.set(vi,0,0),n.add(g);let m=f.size.h*1.7,p=m+x.h/2;x.group.position.set(-170,p,-45);let v=cn({r:1700,dur:30,color:ge.money});return v.mesh.position.set(vi+120,1.5,700),n.add(v.mesh),{group:n,update:_=>{if(e.group.visible=_<bi,t.mesh.visible=!1,i.group.visible=s.group.visible=_>=bi&&_<Ni,o.visible=_>=Ni&&_<hs,f.group.visible=g.visible=_>=hs,_<bi)e.update(km(_)),t.update(_,al);else if(_<Ni){let S=_-vu,C=0,E=0,T=0;if(S>0)if(_<ll)C=-.5*Hm*S*S;else{let M=_-ll;C=Vm-(at.h/2-at.d/2-4)*Mt(Ae(M/12))+46*Math.max(0,Math.sin(Math.PI*Ae(M/9))),E=Mt(Ae(M/12)),T=90*Mt(Ae(M/14))}i.update({flip:[0,1,2,3,4].map(M=>Ke(Ae((_-cl(M))/Q0))),on:[0,1,2,3,4,5].map(M=>Ae((_-(G0+M*3))/4)),dropY:C,dropTip:E,dropX:T,shift:Ot(_,mu+2,mu+14,Mt)});let P=Math.round(Xn(_,j0,Vs,247,122));s.update({value:"$"+P,red:Ae((_-(Vs-3))/5),on:1}),r.update(_,Vs)}else if(_<hs){let S=wo;l.visible=!1;for(let E=0;E<V0-wo;E++){let T=wt(_,hl(E),{h:900,fall:8,bounce:.6});_>=hl(E)+9?S=wo+E+1:T.on&&!l.visible&&(l.visible=!0,l.position.set(-200,a.h(wo+E)+T.y,0),l.rotation.y=(wo+E)*.7)}a.update({count:S}),h.setLit((_-Om)/6),d.setLit((_-rl)/6);let C=Ot(_,Gm,ef,Mt);c.update({h:u*(1-.5*C),glow:1-.45*C})}else{let S=Ot(_,tf,wr,Mt)+.035*Math.sin(Math.PI*Ae((_-wr)/8))*(_>wr?-1:0),C=Xn(_,qo,Tr,0,13.8);f.update({open:S,value:_<W0?"":`$${C.toFixed(1)} BILLION`,lit:Ae((_-W0)/8)});let E=wt(_,ul,{h:1300,fall:8,bounce:.5});x.group.visible=E.on,x.group.position.y=p+E.y,x.setLit((_-ul)/6),v.update(_,Tr)}}}},Wm={id:gn,label:"6 The close: six months, Square \u2192 Block, the price halves, $13.8 BILLION",enter:Y0,stage:"dark",shots:G7,lights:W7,build:$7,blur:Y7,cues:X7};var Zt={pivot:1040,arm:440,hang:470,dish:205},Xm=()=>{let n=new ne;n.add(Pn(330,56,Z.black(),96));let e=Pn(230,50,Z.black(),96);e.position.y+=56,n.add(e);let t=Pn(48,Zt.pivot-90,Z.black(),48);t.position.y+=100,n.add(t);let i=new le(new Gn(78,48,32),Z.satin());i.position.y=Zt.pivot,i.castShadow=!0,n.add(i);let s=new ne;s.position.y=Zt.pivot,n.add(s),s.add(Le(Zt.arm*2+90,62,70,24,Z.black()));let r=Le(14,190,14,5,Z.satin());r.position.y=-110,s.add(r);let o=[-1,1].map(a=>{let l=new ne;n.add(l);let c=new le(new Gn(24,24,16),Z.satin());l.add(c);for(let f=0;f<3;f++){let x=f/3*Math.PI*2+Math.PI/6,g=Math.cos(x)*(Zt.dish-14),m=Math.sin(x)*(Zt.dish-14),p=Math.hypot(g,Zt.hang,m),v=new le(new mt(7,7,p,10),Z.graphite());v.position.set(g/2,-Zt.hang/2,m/2),v.quaternion.setFromUnitVectors(new I(0,1,0),new I(g,-Zt.hang,m).normalize()),l.add(v)}let h=new le(new mt(Zt.dish,Zt.dish-50,44,96),Z.black());h.position.y=-Zt.hang-22,h.castShadow=!0,h.receiveShadow=!0,l.add(h);let d=new le(new kt(Zt.dish,9,12,96),Z.graphite());d.rotation.x=Math.PI/2,d.position.y=-Zt.hang,l.add(d);let u=new ne;return u.position.y=-Zt.hang,l.add(u),{pan:l,seat:u,s:a}});return{group:n,left:o[0].seat,right:o[1].seat,update:a=>{s.rotation.z=a.tilt;for(let{pan:l,s:c}of o)l.position.set(c*Zt.arm*Math.cos(a.tilt),Zt.pivot+c*Zt.arm*Math.sin(a.tilt),0)}}};var st={x0:-1250,y0:640,x1:-250,y1:13},Ym=()=>{let n=new ne,e=st.x1-st.x0,t=st.y1-st.y0,i=Math.hypot(e,t),s=Math.atan2(t,e),r=new ne;r.position.set((st.x0+st.x1)/2,(st.y0+st.y1)/2,0),r.rotation.z=s,n.add(r);let o=Le(i+60,26,150,10,Z.black());o.position.y=-13,r.add(o);for(let h of[-1,1]){let d=Le(i+60,70,20,8,Z.black());d.position.set(0,22,h*76),r.add(d)}let a=Le(520,420,420,34,Z.black());a.position.set(st.x0-230,st.y0+200,0),n.add(a);let l=Le(90,240,190,14,Z.graphite());l.position.set(st.x0+20,st.y0+110,0),n.add(l);for(let h of[-1,1])for(let d of[-1,1]){let u=ut(46,st.y0+10,46,10,Z.black());u.position.x=st.x0-230+h*200,u.position.z=d*150,n.add(u)}let c=yn(["SHARES"],{size:78,color:ge.white,depth:30});c.group.position.set(st.x0-230,st.y0+210,210+c.d/2),n.add(c.group);for(let h of[.35,.7]){let d=st.x0+e*h,u=st.y0+t*h,f=ut(34,u-20,120,8,Z.black());f.position.x=d,n.add(f)}return{group:n,plate:c}};var Do="fair",of=ri(Do),Z7=Ye(Do,0,/29/),bu=Ye(Do,0,/^real/),K7=Ye(Do,0,/^and/),J7=Ye(Do,0,/^shareholders/),oi=K7-4,nf=1,Ar=of+4,ml=Z7+2,Io=[bu-17,bu-10,bu-3],pl=bu+4,$m=(n,e=5.5,t=17)=>n<=0?0:1-Math.exp(-n/e)*Math.cos(2*Math.PI*n/t),Q7=n=>(n>Ar?.07*Math.exp(-(n-Ar)/7)*Math.sin(2*Math.PI*(n-Ar)/15):0)+.26*$m(n-ml)-.26/3*Io.reduce((t,i)=>t+$m(n-i),0),Ro=6e3,yu=5,qr=90,dl=34,Zm=n=>170+n*350,Po=Math.hypot(st.x1-st.x0,st.y1-st.y0),sf=-(st.y1-st.y0)/Po,j7=(st.x1-st.x0)/Po,fl=n=>J7-6+n*10,Km=n=>Po+(Zm(n)-(st.x1+sf*qr)),e_=n=>Km(n)/52,rf=8,YM={E:of,F2:oi,land:Ar,l29:ml,toks:Io,level:pl,arrive:Array.from({length:yu},(n,e)=>fl(e))},Co={c:[0,640,0],a0:-12,a1:13,r0:3e3,r1:2650,y0:420,y1:540},t_=({from:n,to:e})=>[Gt(n,Lr(Co.c,Co.a0,Co.r0,Co.y0),Co.c,{fov:48,why:"cut: the scale"}),Zo(n+1,oi-n-2,Co,{fov:48,ease:Ke,why:"low orbit of the scale"}),Gt(oi,[Ro-1500,700,2700],[Ro-1e3,420,0],{fov:46,why:"cut: the chute"}),St(oi+1,Math.max(20,e-oi-2),[Ro+1750,430,2050],[Ro+1550,190,-150],{fov:46,ease:Ke,why:"travel along the pawns with the tokens"})],n_=n=>{if(n<oi)return an([0,620,0],{s:1.25,key:3.3+.6*Ot(n,pl-2,pl+10,Mt)});let e=Ke(Ae((n-oi)/80));return an([Ro-800+2300*e,320,0],{s:1.3,key:3.5})},i_=()=>[{kind:"hit",s:"thud",at:Ar,vol:.42,why:"the scale lands"},{kind:"hit",s:"thud",at:ml,vol:.36,why:"$29B lands on the near pan"},...Io.map((n,e)=>({kind:"hit",s:"coin",at:n,vol:.3,why:`token ${e+1} lands on the far pan`})),{kind:"hit",s:"bloom",at:pl,vol:.36,why:"the beam comes level: the ring of light"},{kind:"move",s:"whooshsoft",at:oi+8,end:oi+30,vol:.3,why:"the tokens roll down the chute"},...Array.from({length:yu},(n,e)=>({kind:"hit",s:"coin",at:fl(e)+rf-2,vol:.28,why:`pawn ${e+1} gets its token`}))],s_=n=>wt(n,Ar,{h:1500,fall:9}).fast||wt(n,ml,{h:1200,fall:8}).fast||Io.some(e=>wt(n,e,{h:900,fall:7}).fast)||n>=oi&&n<oi+14,r_=()=>{let n=new ne,e=Xm();e.group.scale.setScalar(nf),e.group.rotation.y=.1,n.add(e.group);let t=In({size:76,color:ge.money,depth:34});t.set("$29B");let i=new ne;i.add(t.group),e.left.add(i);let s=Io.map((h,d)=>{let u=gi("SQ");return u.rotation.y=.5+d*1.1,e.right.add(u),u}),r=cn({r:1700,dur:28});r.mesh.position.set(0,1.5,200),n.add(r.mesh);let o=new ne;o.position.set(Ro,0,0),o.scale.setScalar(1.5),n.add(o);let a=Ym();o.add(a.group);let l=Array.from({length:yu},(h,d)=>{let u=nu(1.2);return u.position.set(Zm(d),0,-250),o.add(u),u}),c=Array.from({length:yu},()=>{let h=new ne,d=gi("SQ");d.position.y=-dl/2;let u=new ne;return u.add(d),h.add(u),o.add(h),{hold:h,spin:u}});return{group:n,update:h=>{let d=h<oi;if(e.group.visible=d,r.mesh.visible=!1,o.visible=!d,d){let u=wt(h,Ar,{h:1500,fall:9,bounce:.5});e.group.position.y=u.y,e.update({tilt:Q7(h)});let f=wt(h,ml,{h:1200,fall:8,bounce:.4});i.visible=f.on,i.position.y=f.y/nf,tn(t.face,1),s.forEach((x,g)=>{let m=wt(h,Io[g],{h:900,fall:7,bounce:.5});x.visible=m.on,x.position.set((g-1)*26,g*(dl+2)+m.y/nf,g%2*18-9)}),r.update(h,pl)}else a.plate.setLit(1),c.forEach(({hold:u,spin:f},x)=>{let g=e_(x),m=fl(x)-g,p=Ae((h-m)/g),_=Km(x)*(1-Math.pow(1-p,1.7));u.visible=h>=m;let S,C;if(_<Po){let P=_/Po;S=st.x0+(st.x1-st.x0)*P+sf*qr,C=st.y0+(st.y1-st.y0)*P+j7*qr}else S=st.x1+sf*qr+(_-Po),C=qr;let E=Mt(Ae((h-fl(x))/rf)),T=Math.PI/2*(1-E);u.position.set(S,dl/2+(C-dl/2)*Math.sin(T)+(E>0&&E<1,0),130-(qr-dl/2)*(1-Math.sin(T))),u.rotation.x=T,f.rotation.y=-_/qr}),l.forEach((u,f)=>{let x=Ae((h-(fl(f)+rf-2))/9);u.position.y=46*Math.sin(Math.PI*x)})}}},Jm={id:Do,label:"7 To be fair: the scale comes level on $29B; the shareholders get their shares",enter:of,stage:"dark",shots:t_,lights:n_,build:r_,blur:s_,cues:i_};var us={w:600,h:176,d:96},Qm=n=>{let e=new ne;e.name=`stamp-${n}`;let t=Le(us.w-18,us.h-18,16,5,Z.rubber());t.position.z=8;let i=Le(us.w,us.h,us.d,20,Z.black());i.position.z=16+us.d/2;let s=new le(new mt(58,74,46,40),Z.satin());s.rotation.x=Math.PI/2,s.position.z=16+us.d+22;let r=new le(new mt(36,46,150,40),Z.black());r.rotation.x=Math.PI/2,r.position.z=16+us.d+118;let o=new le(new Gn(80,40,28),Z.black());o.position.z=16+us.d+232;for(let a of[i,s,r,o])a.castShadow=!0,a.receiveShadow=!0;return e.add(t,i,s,r,o),{group:e}};var Rr="verdict",af=ri(Rr),jm=Ye(Rr,0,/^price/),o_=Ye(Rr,0,/^never/),ds=Ye(Rr,0,/^paid/),Kt=Ye(Rr,1,/^inflated/i),Cr=en(Rr,2),e3=[o_-4,ds],n3=190,lf=br.plinthD/2;var t3=n=>{let e=[1500,760,2300],t=[0,n3,lf+41];if(n<Kt-12)return{pos:e,yaw:-.7,on:!1,fast:!1};if(n<=Kt){let r=Ae((n-(Kt-12))/12),o=r*r;return{pos:Mi(e,t,o),yaw:-.7*(1-o),on:!0,fast:r>.25}}if(n<Kt+3)return{pos:t,yaw:0,on:!0,fast:!1};let i=Ae((n-(Kt+3))/15),s=Ke(i);return{pos:Mi(t,e,s),yaw:-.7*s,on:i<1,fast:!1}},i3={id:Rr,label:"8 The verdict: the opening returns; $29,000,000,000 rolls down to $13,800,000,000; INFLATED",enter:af,stage:"dark",shots:({from:n,to:e})=>[Gt(n,Dn.pos,Dn.look,{fov:Dn.fov,focus:Dn.numFocus,why:"cut back to the opening shot"}),{...St(n+1,ds-6-(n+1),Dn.push.pos,Dn.push.look,{fov:42,ease:Ke,why:"the opening's push-in"}),focus:Dn.numFocus},{...St(Kt-20,22,[-330,360,3250],[0,310,320],{fov:42,why:"push in on the plinth for the stamp"}),focus:[0,190,330]},St(Cr+2,e-(Cr+2)-1,[-460,1350,4300],[0,600,0],{fov:42,ease:Ke,why:"pull up and back"})],lights:n=>{let e=n>=ds?Math.exp(-(n-ds)/12):0,t=n>=Kt?Math.exp(-(n-Kt)/14):0,i=an(br.centre,{s:1.3,key:3.5+.9*e+1.3*t});return i.accent={pos:[0,260,1100],color:ge.red,i:2.2*e+2.6*t},n>=Kt&&(i.back=j1(br.centre,ge.red,2.2*(.35+.65*t))),i},blur:n=>t3(n).fast,cues:()=>[{kind:"hit",s:"chainshort",at:af+1,vol:.3,why:"the tag sways on its chain"},{kind:"hit",s:"click",at:jm,vol:.3,why:"the tag's lamp comes up"},{kind:"hit",s:"datamid",at:e3[0],end:ds,vol:.35,why:"the floor numerals roll down"},{kind:"hit",s:"sub",at:ds,vol:.5,why:"$13,800,000,000 lands, red"},{kind:"hit",s:"chainshort",at:Kt-26,vol:.3,why:"the crane lifts the tag clear"},{kind:"move",s:"whooshsoft",at:Kt-4,end:Kt,vol:.4,why:"the stamp comes in"},{kind:"hit",s:"chainshort",at:Cr-4,vol:.3,why:"the tag comes back down"},{kind:"hit",s:"thud",at:Kt,vol:.55,why:"the stamp slams: INFLATED"},{kind:"hit",s:"sub",at:Kt,vol:.45,why:"the slam's weight"},{kind:"hit",s:"pingshort",at:Kt+1,vol:.3,why:"the red ring"}],build:()=>{let n=new ne,e=T0("verdict");n.add(e.group);let t=new ce(ge.money).multiplyScalar(vr),i=new ce(ge.red).multiplyScalar(vr),s=cn({r:1500,color:ge.red,dur:30});s.mesh.position.set(0,1.5,br.numZ);let r=yn(["INFLATED"],{size:78,color:ge.red,depth:40});r.group.position.set(0,n3,lf+r.d/2-2);let o=Qm("verdict"),a=cn({r:1700,color:ge.red,dur:32});return a.mesh.position.set(0,1.5,lf+200),n.add(s.mesh,r.group,o.group,a.mesh),{group:n,update:l=>{let c=l-af,h=l>=Cr?.05*Math.exp(-.03*(l-Cr))*Math.sin(2*Math.PI*(l-Cr)/44):0,d=f=>{let x=Ae(f);return x*x*(3-2*x)};e.tag.group.position.y=e.pivotY+900*(d((l-(Kt-26))/16)-d((l-(Cr-4))/26)),e.tag.update({swing:.1*Math.exp(-.022*c)*Math.cos(2*Math.PI*c/44)+h,lit:.4+.6*Ae((l-jm)/6)}),e.num.set(Ja(Xn(l,e3[0],ds,29e9,138e8))),e.num.face.color.copy(t).lerp(i,Ae((l-(ds-5))/5)),e.num.side.color.copy(e.num.face.color).multiplyScalar(.2),s.update(l,ds);let u=t3(l);o.group.visible=u.on,o.group.position.set(...u.pos),o.group.rotation.y=u.yaw,r.group.visible=l>=Kt,r.group.scale.setScalar(.9+.1*Jh(l,Kt,8)),a.update(l,Kt)}}}};var Zn=[lm,rm,Sm,Cm,om,Wm,Jm,i3],Mn=Zn.map((n,e)=>({id:n.id,from:e===0?0:n.enter,to:e+1<Zn.length?Zn[e+1].enter:Xo}));for(let n=1;n<Mn.length;n++)if(Mn[n].from<=Mn[n-1].from)throw new Error(`037 world: ${Mn[n].id} enters at f${Mn[n].from}, not after ${Mn[n-1].id}`);var s3=Zn.map((n,e)=>{let t=Mn[e],i=n.shots({from:t.from,to:t.to});if(!i.length||Math.round(i[0].at)!==t.from)throw new Error(`037 world: ${n.id}'s first camera key must start on its enter frame f${t.from} (it starts at f${i[0]?.at})`);if(e>0&&!i[0].cut)throw new Error(`037 world: ${n.id} must open on a hard cut (cut(...) or whipIn(...)): places are never joined by a travel (R23)`);if(i.some(r=>(r.dip??0)>0))throw new Error(`037 world: ${n.id} dips to black: there is never a black frame between places (R23)`);let s=i[i.length-1];if(s.at+s.dur>t.to+1e-6&&e+1<Zn.length)throw new Error(`037 world: ${n.id}'s last camera key ends at f${s.at+s.dur}, after ${Zn[e+1].id} enters (f${t.to})`);return i}),xl=np("037",s3.flat()),cf=n=>{let e=0;for(let t=0;t<Mn.length;t++)n>=Mn[t].from&&(e=t);return e},a_=s3.flatMap((n,e)=>n.filter(t=>t.whoosh&&!t.cut).map(t=>({id:Zn[e].id,mid:t.at+t.dur/2,end:t.at+t.dur,vol:t.whoosh,why:t.why??"move"}))),bS=tp(Mn.map(n=>({id:n.id,from:n.from,to:n.to})),a_,Zn.flatMap((n,e)=>(n.cues?.({from:Mn[e].from,to:Mn[e].to})??[]).map(t=>({...t,id:n.id})))).cues;var r3=[{a:0,b:4.478,cue:0,objWords:!1,lines:[[{t:"An",bold:!1,a:0},{t:"American",bold:!1,a:.16},{t:"company",bold:!1,a:.54},{t:"bought",bold:!1,a:1.04},{t:"Afterpay",bold:!1,a:1.44},{t:"for",bold:!1,a:1.98},{t:"$29",bold:!1,a:2.24},{t:"billion.",bold:!1,a:3.315}]]},{a:4.478,b:8.44,cue:1,objWords:!1,lines:[[{t:"But",bold:!1,a:4.478},{t:"when",bold:!1,a:4.6},{t:"the",bold:!1,a:4.74},{t:"deal",bold:!1,a:4.86},{t:"closed,",bold:!1,a:5.02},{t:"its",bold:!1,a:5.92},{t:"own",bold:!1,a:6.06},{t:"filing",bold:!1,a:6.34},{t:"put",bold:!1,a:6.72},{t:"the",bold:!1,a:6.94},{t:"price",bold:!1,a:7.1},{t:"at",bold:!1,a:7.34},{t:"13.8.",bold:!1,a:7.58}]]},{a:8.44,b:10.54,cue:2,objWords:!1,lines:[[{t:"So",bold:!1,a:8.44},{t:"which",bold:!1,a:9.12},{t:"number",bold:!1,a:9.58},{t:"is",bold:!1,a:9.78},{t:"right?",bold:!1,a:10.04}]]},{a:10.54,b:11.88,cue:3,objWords:!1,lines:[[{t:"Let",bold:!1,a:10.54},{t:"us",bold:!1,a:10.64},{t:"explain.",bold:!1,a:10.78}]]},{a:11.88,b:17.058,cue:4,objWords:!1,lines:[[{t:"In",bold:!1,a:11.88},{t:"August",bold:!1,a:11.98},{t:"2021,",bold:!1,a:12.3},{t:"Jack",bold:!1,a:13.63},{t:"Dorsey's",bold:!1,a:13.84},{t:"company,",bold:!1,a:14.36},{t:"Square,",bold:!1,a:14.68},{t:"agreed",bold:!1,a:15.518},{t:"to",bold:!1,a:15.8},{t:"buy",bold:!1,a:16.02},{t:"Afterpay.",bold:!1,a:16.26}]]},{a:17.058,b:18.92,cue:5,objWords:!1,lines:[[{t:"But",bold:!1,a:17.058},{t:"Square",bold:!1,a:17.16},{t:"didn't",bold:!1,a:17.46},{t:"pay",bold:!1,a:17.86},{t:"in",bold:!1,a:18.06},{t:"cash.",bold:!1,a:18.2}]]},{a:18.92,b:20.8,cue:6,objWords:!1,lines:[[{t:"It",bold:!1,a:18.92},{t:"paid",bold:!1,a:19.02},{t:"in",bold:!1,a:19.32},{t:"its",bold:!1,a:19.56},{t:"own",bold:!1,a:19.7},{t:"shares.",bold:!1,a:19.96}]]},{a:20.8,b:25.275,cue:7,objWords:!1,lines:[[{t:"For",bold:!1,a:20.8},{t:"every",bold:!1,a:20.88},{t:"Afterpay",bold:!1,a:21.26},{t:"share,",bold:!1,a:21.82},{t:"you",bold:!1,a:22.413},{t:"got",bold:!1,a:22.56},{t:"0.375",bold:!1,a:22.902},{t:"of",bold:!1,a:23.6},{t:"a",bold:!1,a:24.38},{t:"Square",bold:!1,a:24.52},{t:"share.",bold:!1,a:24.76}]]},{a:25.275,b:29.315,cue:8,objWords:!1,lines:[[{t:"At",bold:!1,a:25.275},{t:"the",bold:!1,a:25.36},{t:"time,",bold:!1,a:25.5},{t:"each",bold:!1,a:26.104},{t:"Square",bold:!1,a:26.28},{t:"share",bold:!1,a:26.62},{t:"was",bold:!1,a:26.92},{t:"worth",bold:!1,a:27.14},{t:"$247.",bold:!1,a:27.538}]]},{a:29.315,b:32.06,cue:9,objWords:!1,lines:[[{t:"Multiply",bold:!1,a:29.315},{t:"it",bold:!1,a:29.74},{t:"out,",bold:!1,a:29.84},{t:"and",bold:!1,a:30.39},{t:"you",bold:!1,a:30.46},{t:"get",bold:!1,a:30.62},{t:"29",bold:!1,a:31.092},{t:"billion.",bold:!1,a:31.5}]]},{a:32.06,b:33.61,cue:10,objWords:!1,lines:[[{t:"But",bold:!1,a:32.06},{t:"here's",bold:!1,a:32.08},{t:"the",bold:!1,a:32.36},{t:"catch.",bold:!1,a:32.48}]]},{a:33.61,b:35.98,cue:11,objWords:!1,lines:[[{t:"The",bold:!1,a:33.61},{t:"deal",bold:!1,a:33.68},{t:"took",bold:!1,a:33.98},{t:"six",bold:!1,a:34.26},{t:"months",bold:!1,a:34.7},{t:"to",bold:!1,a:35.08},{t:"close.",bold:!1,a:35.32}]]},{a:35.98,b:40.76,cue:12,objWords:!1,lines:[[{t:"By",bold:!1,a:35.98},{t:"then,",bold:!1,a:36.04},{t:"Square",bold:!1,a:36.62},{t:"had",bold:!1,a:36.9},{t:"renamed",bold:!1,a:37.12},{t:"itself",bold:!1,a:37.5},{t:"Block,",bold:!1,a:38.142},{t:"and",bold:!1,a:38.669},{t:"its",bold:!1,a:38.74},{t:"share",bold:!1,a:38.92},{t:"price",bold:!1,a:39.16},{t:"had",bold:!1,a:39.48},{t:"roughly",bold:!1,a:39.68},{t:"halved.",bold:!1,a:40.04}]]},{a:40.76,b:43.33,cue:13,objWords:!1,lines:[[{t:"Same",bold:!1,a:40.76},{t:"number",bold:!1,a:40.94},{t:"of",bold:!1,a:41.16},{t:"shares.",bold:!1,a:41.38},{t:"About",bold:!1,a:41.989},{t:"half",bold:!1,a:42.2},{t:"the",bold:!1,a:42.56},{t:"price.",bold:!1,a:42.76}]]},{a:43.33,b:49.16,cue:14,objWords:!1,lines:[[{t:"So",bold:!1,a:43.33},{t:"when",bold:!1,a:43.44},{t:"the",bold:!1,a:43.58},{t:"deal",bold:!1,a:43.7},{t:"closed,",bold:!1,a:43.86},{t:"Block",bold:!1,a:44.76},{t:"told",bold:!1,a:44.98},{t:"the",bold:!1,a:45.22},{t:"SEC",bold:!1,a:45.4},{t:"what",bold:!1,a:45.8},{t:"those",bold:!1,a:46.315},{t:"shares",bold:!1,a:46.5},{t:"were",bold:!1,a:46.74},{t:"worth:",bold:!1,a:46.98},{t:"13.8",bold:!1,a:47.58},{t:"billion.",bold:!1,a:48.679}]]},{a:49.16,b:55.3,cue:15,objWords:!1,lines:[[{t:"To",bold:!1,a:49.16},{t:"be",bold:!1,a:49.24},{t:"fair,",bold:!1,a:49.38},{t:"29",bold:!1,a:50.02},{t:"billion",bold:!1,a:50.44},{t:"was",bold:!1,a:50.82},{t:"real",bold:!1,a:51.18},{t:"on",bold:!1,a:51.56},{t:"day",bold:!1,a:51.84},{t:"one,",bold:!1,a:52.02},{t:"and",bold:!1,a:52.662},{t:"Afterpay's",bold:!1,a:52.86},{t:"shareholders",bold:!1,a:53.34},{t:"got",bold:!1,a:53.78},{t:"the",bold:!1,a:54.24},{t:"shares",bold:!1,a:54.4},{t:"they",bold:!1,a:54.62},{t:"were",bold:!1,a:54.8},{t:"promised.",bold:!1,a:54.96}]]},{a:55.3,b:59.25,cue:16,objWords:!1,lines:[[{t:"But",bold:!1,a:55.3},{t:"the",bold:!1,a:55.64},{t:"price",bold:!1,a:55.8},{t:"tag",bold:!1,a:56.04},{t:"everyone",bold:!1,a:56.28},{t:"remembers",bold:!1,a:56.74},{t:"was",bold:!1,a:57.26},{t:"never",bold:!1,a:57.76},{t:"the",bold:!1,a:58.16},{t:"price",bold:!1,a:58.38},{t:"paid.",bold:!1,a:58.66}]]},{a:59.25,b:60.74,cue:17,objWords:!1,lines:[[{t:"Our",bold:!1,a:59.25},{t:"rating:",bold:!1,a:59.4},{t:"inflated.",bold:!1,a:59.93}]]},{a:60.74,b:62,cue:18,objWords:!1,lines:[[{t:"Send",bold:!1,a:60.74},{t:"us",bold:!1,a:60.88},{t:"who",bold:!1,a:61.04},{t:"to",bold:!1,a:61.24},{t:"audit",bold:!1,a:61.42},{t:"next.",bold:!1,a:61.6}]]}];var o3='"Archivo", sans-serif';var a3=()=>(n,e)=>({}),l3=({children:n})=>Hi(ki,{children:n});var Mu=30,hf=275,l_=500,c_="#e9e2e1",h_=2,u_=1,uf=new Set(["explain","catch"]),IS={y0:hf-10,y1:hf+Mu*1.3},d_=/[,.:;!?]$/,f_=n=>{let e=[],t=[];return n.forEach((i,s)=>{t.push(i);let r=n.length-1-s;(r===0||(t.length>=4||t.length>=2&&d_.test(i.t))&&r!==1)&&(e.push(t),t=[])}),e},Gs=r3.flatMap(n=>{let e=li[n.cue].scene;return f_(n.lines.flat()).map(t=>({text:t.map(i=>i.t).join(" "),a:t[0].a,cue:n.cue,scene:e}))}),c3=n=>is(n.a)-u_;var p_=(n,e)=>{for(let t=Gs.length-1;t>=0;t--)if(Gs[t].scene===n&&e>=c3(Gs[t]))return t;return-1},h3=({scene:n,f:e})=>{let t=a3();if(uf.has(n))return null;let i=p_(n,e);if(i<0)return null;let s=Ke(Ae((e-c3(Gs[i]))/h_));return Hi(l3,{s:n,g:"caption",children:Hi("div",{"data-cap":"1",style:{position:"absolute",inset:0,pointerEvents:"none"},children:Hi("div",{...t("cap.0","cap"),style:{position:"absolute",left:90,width:860,top:hf,height:Mu*1.25,lineHeight:`${Mu*1.25}px`,textAlign:"center",whiteSpace:"nowrap",color:c_,fontFamily:o3,fontSize:Mu,fontWeight:l_,letterSpacing:"0.005em",opacity:s<.999?s:void 0,textShadow:"0 1px 6px rgba(0,0,0,0.55)",transform:"perspective(1200px) rotateX(0.15deg)"},children:Gs[i].text})})})};var df="world",u3=()=>[{id:df,from:0,to:Xo,track:0,z:1,label:"The world: one 3-D scene, one camera"},{id:"captions",from:0,to:Xo,track:1,z:30,label:"Captions"},...Zn.map((n,e)=>({id:n.id,from:Mn[e].from,to:Mn[e].to,track:2+e,z:2,label:n.label}))],m_=n=>{let e=Gs[0].scene;for(let t of Gs)n>=is(t.a)-2&&(e=t.scene);return e},d3=({id:n,f:e})=>{if(n!=="captions")return null;let t=m_(e);return uf.has(t)?null:Hi(h3,{scene:t,f:e,ground:"dark",align:()=>"centre"})};var Uo=class extends Qi{constructor(){super();let e=new Cn;e.deleteAttribute("uv");let t=new jt({side:on}),i=new jt,s=new hr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ba(e,i,6),a=new Ft;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new le(e,Lo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new le(e,Lo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new le(e,Lo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new le(e,Lo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new le(e,Lo(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new le(e,Lo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Lo(n){return new La({color:0,emissive:16777215,emissiveIntensity:n})}var Fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},x_=new ur(-1,1,1,-1,0,1),ff=class extends Qt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},g_=new ff,Oi=class{constructor(e){this._mesh=new le(g_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,x_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var No=class extends Sn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mi.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Oi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var gl=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Su=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Eu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Q);this._width=i.width,this._height=i.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new No(Fo),this.copyPass.material.blending=Rn,this.clock=new Ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gl!==void 0&&(o instanceof gl?i=!0:o instanceof Su&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wu=class extends Sn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var _l={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var Tu=class extends Sn{constructor(e,t,i){super(),this.scene=e,this.camera=t;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new Dt(1,1,{minFilter:rn,magFilter:rn,type:Ht}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new io,this._materialDepth.depthPacking=kh,this._materialDepth.blending=Rn;let a=mi.clone(_l.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=t.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=t.near,a.farClip.value=t.far,this.materialBokeh=new _t({defines:Object.assign({},_l.defines),uniforms:a,vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader}),this.uniforms=a,this._fsQuad=new Oi(this.materialBokeh),this._oldClearColor=new ce}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var f3={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Oo=class n extends Sn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(r,o,{type:Ht}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Dt(r,o,{type:Ht});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Dt(r,o,{type:Ht});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=f3;this.highPassUniforms=mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mi.clone(Fo.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,blending:ji,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new Oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Oo.BlurDirectionX=new Q(1,0);Oo.BlurDirectionY=new Q(0,1);var vl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qu=class extends Sn{constructor(){super(),this.uniforms=mi.clone(vl.uniforms),this.material=new Da({name:vl.name,uniforms:this.uniforms,vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader}),this._fsQuad=new Oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ro?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===th?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===eh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ms=1080,xs=1920,rt={dark:{base:"#0c0b0d",floor:"#121113",wall:"#1a191b",self:.06,fogNear:3600,fogFar:14e3},light:{base:"#8f8e8c",floor:"#a2a19e",wall:"#989794",self:.42,fogNear:5e3,fogFar:16e3},card:{base:"#000000",floor:"#000000",wall:"#000000",self:0,fogNear:2e4,fogFar:4e4},darkFill:.35,darkBack:.6,darkKey:1.25,floorRough:.9,floorSpec:.22,env:.6,envMetal:1,hemiSky:"#e9e6e7",hemiGround:"#4a4849",bloom:.34,bloomRadius:.5,bloomAt:.92,vignette:.3,grain:0,exposure:1,aperture:22e-6,maxBlur:.012,blurAt:.012,blurN:8,shutter:.45,mirrorLod:5.6},Kn=null,ps,Ml,Sl,Ru,bl=()=>Ru.uniforms,Ct,Ln,p3,mf,El,m3,x3,g3,zo,Pu,Iu,Bo,yl,Bi,xf,gf=new Map,_3=new Set,fs=null,__={uniforms:{tDiffuse:{value:null},vig:{value:.3},grain:{value:0},seed:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},v_=()=>new _t({name:"WorldFloorPool",transparent:!0,depthWrite:!1,uniforms:{tRefl:{value:null},res:{value:new Q(ms,xs)},strength:{value:.08},fadeC:{value:new Q},fadeR:{value:2600},eye:{value:new I},lod:{value:rt.mirrorLod}},vertexShader:"varying vec3 vWorld; void main() { vWorld = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0); }",fragmentShader:`
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
    }`,blending:Hc,blendEquation:wi,blendSrc:ka,blendDst:ka}),Au=n=>{let e=new Oa(16777215,0,0,.6,.7,0);return e.castShadow=n,n&&(e.shadow.mapSize.set(2048,2048),e.shadow.bias=-6e-4,e.shadow.normalBias=1.2,e.shadow.radius=9,e.shadow.blurSamples=16,e.shadow.camera.near=200,e.shadow.camera.far=9e3),Ct.add(e,e.target),e},b_=()=>{let n=document.createElement("canvas");Kn=new po({canvas:n,antialias:!1,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),Kn.setPixelRatio(1),Kn.setSize(ms,xs,!1),Kn.outputColorSpace=sn,Kn.toneMapping=ro,Kn.toneMappingExposure=rt.exposure,Kn.shadowMap.enabled=!0,Kn.shadowMap.type=dr,Kn.localClippingEnabled=!0,Ze.fog_fragment=`#ifdef USE_FOG
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif`;let e=new Us(Kn);p3=e.fromScene(new Uo,.04).texture,e.dispose(),Ct=new Qi,Ct.background=new ce(rt.dark.base),Ct.fog=new sr(new ce(rt.dark.base),rt.dark.fogNear,rt.dark.fogFar),Ln=new zt(45,ms/xs,20,4e4),mf=new cr(new ce(rt.hemiSky),new ce(rt.hemiGround),.55),Ct.add(mf),El=Au(!0),m3=Au(!1),x3=Au(!1),g3=Au(!1),zo=new hr(16777215,0,0,0),Ct.add(zo),Pu=new Wt({color:new ce(rt.dark.floor),roughness:rt.floorRough,metalness:0,envMapIntensity:0,specularIntensity:rt.floorSpec}),Bo=new le(new bn(6e4,6e4),Pu),Bo.rotation.x=-Math.PI/2,Bo.receiveShadow=!0,Bo.userData.isFloor=!0,Iu=new jt({color:new ce(rt.dark.wall),roughness:1,metalness:0,envMapIntensity:0}),yl=new le(new bn(6e4,16e3),Iu),yl.position.set(0,8e3,xo),yl.userData.isFloor=!0,Bi=new le(new bn(6e4,6e4),v_()),Bi.rotation.x=-Math.PI/2,Bi.position.set(0,.6,0),Bi.userData.isFloor=!0,Bi.renderOrder=1,Ct.add(Bo,yl,Bi),xf=new Dt(ms/2,xs/2,{type:Ht,generateMipmaps:!0,minFilter:Ai}),ps=new Eu(Kn,new Dt(ms,xs,{type:Ht,samples:4})),ps.setPixelRatio(1),ps.setSize(ms,xs),ps.addPass(new wu(Ct,Ln)),Ru=new Tu(Ct,Ln,{focus:2e3,aperture:rt.aperture,maxblur:rt.maxBlur}),ps.addPass(Ru),Sl=new Oo(new Q(ms/2,xs/2),rt.bloom,rt.bloomRadius,rt.bloomAt),ps.addPass(Sl),Ml=new No(__),ps.addPass(Ml),ps.addPass(new qu)},y_=n=>{let e=gf.get(n);return e||(e=Zn[n].build(),Z1(e.group),e.group.traverse(t=>{let i=t;if(i.isMesh)for(let s of Array.isArray(i.material)?i.material:[i.material])s.isMeshStandardMaterial&&(s.userData.envBase===void 0&&(s.userData.envBase=s.envMapIntensity),s.envMap||(s.envMap=p3,s.needsUpdate=!0),_3.add(s))}),Ct.add(e.group),gf.set(n,e)),e},M_=new I,Cu=(n,e)=>{if(!e){n.intensity=0;return}n.position.set(...e.pos),n.target.position.set(...e.at),n.target.updateMatrixWorld(),n.intensity=e.i,n.color.set(e.color??"#ffffff"),n.angle=e.angle??.6,n.penumbra=e.soft??.7},S_=n=>{let e=rt[n];Ct.background.set(e.base);let t=Ct.fog;t.color.set(e.base),t.near=e.fogNear,t.far=e.fogFar,Pu.color.set(e.floor),Iu.color.set(e.wall),Pu.emissive.set(e.base).multiplyScalar(e.self),Iu.emissive.set(e.base).multiplyScalar(e.self),Bo.visible=yl.visible=Bi.visible=n!=="card"},E_=(n,e)=>{let t=e==="dark";mf.intensity=(n.amb??(e==="card"?0:.2))*(t?rt.darkFill:1),Cu(El,n.key&&t?{...n.key,i:n.key.i*rt.darkKey}:n.key),Cu(m3,n.rim),Cu(x3,n.aux),Cu(g3,n.back&&t?{...n.back,i:n.back.i*rt.darkBack}:n.back),n.accent?(zo.position.set(...n.accent.pos),zo.color.set(n.accent.color),zo.intensity=n.accent.i):zo.intensity=0;let i=Bi.material.uniforms;i.fadeC.value.set(n.focus?.[0]??0,n.focus?.[1]??0),i.fadeR.value=n.reach??2600,i.strength.value=e==="card"?0:n.reflect??.08;let s=n.env??1;for(let r of _3)r.envMapIntensity=r.userData.envBase*(r.metalness>.5?rt.envMetal:rt.env)*s},w_=new dt().set(1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1),T_=[new qn(new I(0,-1,0),.5)],q_=n=>{let e=Bi.material.uniforms;if(e.strength.value<=.001||!Bi.visible)return;let t=[];Ct.traverse(o=>{o.userData.isFloor&&o.visible&&(t.push(o),o.visible=!1)});let i=El.castShadow;El.castShadow=!1;let s=Ct.background;Ct.background=null,Ct.matrixAutoUpdate=!1,Ct.matrix.copy(w_),Ct.updateMatrixWorld(!0);let r=n.clippingPlanes;n.clippingPlanes=T_,n.setRenderTarget(xf),n.setClearColor(0,1),n.clear(!0,!0,!0),n.render(Ct,Ln),n.setRenderTarget(null),n.clippingPlanes=r,Ct.matrix.identity(),Ct.matrixAutoUpdate=!0,Ct.updateMatrixWorld(!0),Ct.background=s,El.castShadow=i;for(let o of t)o.visible=!0;e.tRefl.value=xf.texture,e.eye.value.copy(Ln.position)},A_=n=>{let e=Gl(xl,n);Ln.position.set(...e.pos),Ln.up.set(0,1,0),Ln.lookAt(M_.set(...e.look)),e.roll&&Ln.rotateZ(e.roll*Math.PI/180),Ln.fov=e.fov,Ln.updateProjectionMatrix(),Ln.updateMatrixWorld(!0);let t=Zs(e.focus,e.pos),i=Zs(e.look,e.pos),s=Math.max(1,Dr(i));bl().focus.value=Math.max(50,(t[0]*i[0]+t[1]*i[1]+t[2]*i[2])/s)},pf={ms:0,samples:1,place:""},v3=(n,e)=>{let t=performance.now();Kn||b_();let i=Kn;fs||(fs=document.createElement("canvas"),fs.width=ms,fs.height=xs,fs.dataset.world="1",fs.style.cssText="position:absolute;left:0;top:0;width:1080px;height:1920px;display:block;background:#000"),fs.parentElement!==n&&n.appendChild(fs);let s=cf(e);for(let[f,x]of gf)f!==s&&(x.group.visible=!1);let r=Zn[s],o=y_(s);o.group.visible=!0;let a=r.stageAt?.(e)??r.stage??"dark";S_(a),E_(r.lights(e),a),pf.place=r.id;let l=window.__world??{};Sl.strength=l.bloom??rt.bloom,Sl.radius=l.bloomRadius??rt.bloomRadius,Sl.threshold=l.bloomAt??rt.bloomAt,Ml.uniforms.vig.value=a==="card"?0:l.vignette??rt.vignette,Ml.uniforms.grain.value=l.grain??rt.grain,Ml.uniforms.seed.value=e%97+1,Ru.enabled=!l.noDof&&a!=="card",bl().aperture.value=l.aperture??rt.aperture,bl().maxblur.value=l.maxBlur??rt.maxBlur,bl().nearClip.value=Ln.near,bl().farClip.value=Ln.far,i.toneMappingExposure=l.exposure??rt.exposure;let c=xl.some(f=>f.cut&&Math.abs(f.at-e)<.5),d=!l.noBlur&&!c&&(ip(xl,e)>rt.blurAt||!!r.blur?.(e))?rt.blurN:1,u=fs.getContext("2d");for(let f=0;f<d;f++){let x=d===1?e:e+((f+.5)/d-.5)*rt.shutter;(cf(x)!==s||xl.some(g=>g.cut&&g.at>Math.min(x,e)&&g.at<=Math.max(x,e)))&&(x=e),o.update(x),A_(x),Ct.updateMatrixWorld(!0),q_(i),i.shadowMap.needsUpdate=!0,ps.render(),u.globalAlpha=1/(f+1),u.drawImage(i.domElement,0,0,ms,xs)}u.globalAlpha=1,pf.ms=performance.now()-t,pf.samples=d};var b3={};var vf=[],C_=0;var q3=n=>{C_=n,vf=[]};var R_="x",P_=0,A3=n=>{R_=n.replace(/[^a-z0-9]+/gi,"-"),P_=0};var C3=['500 40px "Archivo"','600 40px "Archivo"','700 40px "Archivo"','800 40px "Archivo"','italic 300 40px "Archivo"'],Du=!1,I_=()=>{if(Du)return!0;try{Du=C3.every(n=>document.fonts.check(n))}catch{Du=!1}return Du},y3=new Map,D_=n=>{let e=y3.get(n);return e||(e=new Image,e.src=n,y3.set(n,e)),e};var R3=n=>Promise.all(n.map(e=>D_(e).decode().catch(()=>{}))),P3=()=>Promise.all(C3.map(n=>document.fonts.load(n))).then(()=>{I_()});Ze.fog_fragment=`#ifdef USE_FOG
  float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor * 0.45 );
  gl_FragColor *= 1.0 - 0.82 * fogFactor;
#endif`;var Un=null,Lu=0,Tl=0,bf=null,I3=new ne,Jn=new so(16777215,2.6),Fu=new so(13226722,1.4),D3=new cr(12897496,460810,.55),Nu=new Ft;I3.add(Jn,Fu,D3,Nu);Jn.target=Nu;Fu.target=Nu;Jn.castShadow=!0;Jn.shadow.mapSize.set(2048,2048);Jn.shadow.bias=-3e-4;Jn.shadow.radius=12;Jn.shadow.blurSamples=20;Jn.shadow.normalBias=.8;var L_=new I(.75,.45,-.55).normalize(),U_={key:3.8,rim:.7,fill:.3,env:.35,envMetal:1,dir:[-.5,.75,.43],exposure:1,pcf:!0},F_=()=>({...U_,...window.__g3light??{}}),M3=new I,N_=()=>{if(Un)return Un;let n=document.createElement("canvas");Un=new po({canvas:n,antialias:!0,alpha:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),Un.setPixelRatio(1),Un.outputColorSpace=sn,Un.toneMapping=oo,Un.toneMappingExposure=1,Un.localClippingEnabled=!0,Un.shadowMap.enabled=!0,Un.shadowMap.type=dr,Un.setClearColor(0,0);let e=new Us(Un);return bf=e.fromScene(new Uo,.04).texture,e.dispose(),Un},O_=(n,e)=>{n<=Lu&&e<=Tl||(Lu=Math.max(Lu,Math.ceil(n/256)*256),Tl=Math.max(Tl,Math.ceil(e/256)*256),Un.setSize(Lu,Tl,!1))},S3=new Map,gs=new zt,Pr=new Hn,E3=new Hn,Uu=new I,B_=new I,z_=(n,e)=>{let i=e.D+8e3,s=20/e.D,r=(n.x-e.x)*s,o=(n.x+n.w-e.x)*s,a=(e.y-n.y)*s,l=(e.y-n.y-n.h)*s;gs.position.set(e.x,-e.y,e.D),gs.quaternion.identity(),gs.updateMatrixWorld(!0),gs.projectionMatrix.makePerspective(r,o,a,l,20,i),gs.projectionMatrixInverse.copy(gs.projectionMatrix).invert()},k_=n=>(Pr.makeEmpty(),n.traverse(e=>{if(e.userData.noBounds)return;let t=e.parent;for(;t;){if(t.userData.noBounds)return;t=t.parent}let i=e;!i.isMesh||!i.visible||(i.geometry.boundingBox||i.geometry.computeBoundingBox(),E3.copy(i.geometry.boundingBox).applyMatrix4(i.matrixWorld),Pr.union(E3))}),Pr),L3=()=>{if(!vf.length)return;let n=N_();for(let e of vf)try{G_(n,e)}catch(t){console.error(`[v34 3d] view ${e.id} failed:`,t)}n.setScissorTest(!1)},w3={w:1,h:1},wl=new Dt(64,64,{samples:4,type:Ht}),T3=new dt,_f=new qn,H_=new I,V_=(n,e,t,i,s)=>{let r=t.getWorldPosition(H_).y,o=Math.max(64,Math.round(i/2)),a=Math.max(64,Math.round(s/2));(wl.width!==o||wl.height!==a)&&wl.setSize(o,a);let l=[];e.traverse(d=>{d.userData.isFloor&&d.visible&&l.push(d)});for(let d of l)d.visible=!1;T3.set(1,0,0,0,0,-1,0,2*r,0,0,1,0,0,0,0,1),e.matrixAutoUpdate=!1,e.matrix.copy(T3),e.updateMatrixWorld(!0),_f.normal.set(0,-1,0),_f.constant=r+.5;let c=n.clippingPlanes;n.clippingPlanes=[_f],n.setRenderTarget(wl),n.clear(!0,!0,!0),n.render(e,gs),n.setRenderTarget(null),n.clippingPlanes=c,e.matrix.identity(),e.matrixAutoUpdate=!0,e.updateMatrixWorld(!0);for(let d of l)d.visible=!0;let h=t.material.uniforms;h.tRefl.value=wl.texture,h.res.value.set(i,s)},G_=(n,e)=>{let t=document.querySelector(`canvas[data-g3="${e.id}"]`);if(!t)return;let i=t.getBoundingClientRect(),s=document.getElementById("root")?.getBoundingClientRect(),r=s&&s.width>0?1080/s.width:1,o=i.width*r/Math.max(1,e.rect.w),a=b3[e.id],l=a!==void 0&&o>=a-.3&&o<=a+.1?a:a!==void 0?Math.ceil((o-.05)/.25-1e-9)*.25:Math.ceil(o*20-1e-6)/20,c=Math.max(1,Math.min(2.25,l)),h=Math.max(1,Math.round(e.rect.w*c)),d=Math.max(1,Math.round(e.rect.h*c)),u=window;if(u.__v34dbg?.push({id:e.id,rw:e.rect.w,bxx:i.x,bxy:i.y,bxw:i.width,bxh:i.height,hostw:s?.width,sRaw:o,s:c,pw:h,ph:d,eye:e.eye,params:JSON.stringify(e.params),light:e.light}),u.__v34measureOnly)return;(t.width!==h||t.height!==d)&&(t.width=h,t.height=d),O_(h,d),w3.w=h,w3.h=d;let f=S3.get(e.id);if(!f){let T=new Qi;T.environment=bf;let P=e.make();T.add(P.root),P.root.traverse(M=>{let b=M.material;for(let R of Array.isArray(b)?b:b?[b]:[])!R.isMeshStandardMaterial||R.userData.envBase!==void 0||(R.userData.envBase=R.envMapIntensity,R.envMap||(R.envMap=bf,R.needsUpdate=!0))}),P.fog&&(T.fog=new sr(new ce(P.fog.color),P.fog.near,P.fog.far)),f={scene:T,model:P},S3.set(e.id,f)}f.model.update?.(e.params);let x=F_();f.model.root.traverse(T=>{let P=T.material;for(let M of Array.isArray(P)?P:P?[P]:[])M.userData?.envBase!==void 0&&(M.envMapIntensity=M.userData.envBase*(M.metalness>.5?x.envMetal:x.env))}),n.toneMappingExposure=x.exposure;let g=x.pcf?dr:ti;n.shadowMap.type!==g&&(n.shadowMap.type=g,n.shadowMap.needsUpdate=!0),window.__g3before?.(e.id,f.model.root),f.scene.add(I3),f.model.root.updateMatrixWorld(!0),k_(f.model.root),Pr.isEmpty()&&Pr.setFromCenterAndSize(new I,new I(10,10,10)),Pr.getCenter(Uu);let m=Math.max(10,Pr.getSize(B_).length()/2),p=f.model.rig??{},v=p.dir?M3.set(...p.dir).normalize():M3.set(...x.dir).normalize();Nu.position.copy(Uu),Jn.position.copy(Uu).addScaledVector(v,m*3),Fu.position.copy(Uu).addScaledVector(L_,m*3),Jn.intensity=x.key*(p.key??1)*(e.light??1),Fu.intensity=x.rim*(p.rim??1),D3.intensity=x.fill*(p.fill??1);let _=Jn.shadow.camera;_.left=-m,_.right=m,_.top=m,_.bottom=-m,_.near=m*.5,_.far=m*6,_.updateProjectionMatrix(),Jn.castShadow=f.model.shadows!==!1;let S=window.__v34flags;if(S&&(S.noShadow&&(Jn.castShadow=!1),f.scene.traverse(T=>{T.userData.isMirror?T.visible=!S.noReflect:T.renderOrder===1.5?T.visible=!S.noBlob:T.renderOrder===2&&T.material instanceof Ia&&(T.visible=!S.noCatcher)})),z_(e.rect,e.eye),!f.mirrors){let T=[];f.scene.traverse(P=>{P.userData.isMirror&&T.push(P)}),f.mirrors=T}for(let T of f.mirrors)T.visible&&T.material.uniforms.strength.value>.001&&V_(n,f.scene,T,h,d);n.setViewport(0,0,h,d),n.setScissor(0,0,h,d),n.setScissorTest(!0),n.clear(!0,!0,!0),n.render(f.scene,gs);let C=t.getContext("2d");C.clearRect(0,0,h,d);let E=f.model.blur??0;C.filter=E>0?`blur(${(E*c).toFixed(2)}px)`:"none",C.drawImage(n.domElement,0,Tl-d,h,d,0,0,h,d),C.filter="none",window.__g3after?.(n,e.id,f.scene,gs,h,d,t,f.model.root)};var W_=[],F3=30,Ho="",X_=new Map(u3().map(n=>[n.id,n])),Vo=n=>{let e=Math.max(0,Math.round(n*F3)),t=Array.from(document.querySelectorAll("[data-film-layer]")),i=`${e}|${t.length}`;if(i!==Ho){Ho=i,Wf(e),q3(e);for(let s of t){let r=s.dataset.filmLayer,o=X_.get(r);if(A3(r),r===df){try{v3(s,e)}catch(a){console.error("[world] frame",e,"failed:",a)}continue}Vf(!o||e>=o.from&&e<o.to?Ol(d3,{id:r,f:e}):null,s)}L3()}};window.addEventListener("hf-seek",n=>Vo(n.detail.time));window.__film={draw:n=>{Ho="",Vo(n)},frame:()=>Math.round((window.__hfThreeTime??0)*F3)};var U3=()=>Vo(window.__hfThreeTime??0);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",U3):U3();var ko=window.__hf??(window.__hf={});ko.buildReady??(ko.buildReady={});ko.buildReady["film-fonts"]=Promise.all([P3(),document.fonts.load('italic 300 60px "Archivo"'),document.fonts.load('800 60px "Archivo"'),document.fonts.load('700 40px "Archivo"'),document.fonts.load('600 40px "Archivo"'),document.fonts.load('500 40px "Archivo"')]).then(()=>{Ho="",Vo(window.__hfThreeTime??0)});ko.buildReady["film-page-photos"]=R3(W_).then(()=>{Ho="",Vo(window.__hfThreeTime??0)});if(Jf){let n=new Image;n.src=`assets/${Qf}`,ko.buildReady["film-photo"]=n.decode().catch(()=>{}).then(()=>{Ho="",Vo(window.__hfThreeTime??0)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
