"use strict";(()=>{var Xa,dt,Hh,Sf,gi,Oh,Vh,Gh,Ac,Ba,xs,Wh,Ic,Cc,Rc,Ef,Va={},Ga=[],Tf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ya=Array.isArray;function Jn(n,e){for(var t in e)n[t]=e[t];return n}function Pc(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function $a(n,e,t){var i,r,s,a={};for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?Xa.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)a[s]===void 0&&(a[s]=n.defaultProps[s]);return ka(n,a,i,r,null)}function ka(n,e,t,i,r){var s={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Hh,__i:-1,__u:0};return r==null&&dt.vnode!=null&&dt.vnode(s),s}function Kn(n){return n.children}function Ha(n,e){this.props=n,this.context=e}function ki(n,e){if(e==null)return n.__?ki(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?ki(n):null}function wf(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],r=[],s=Jn({},e);s.__v=e.__v+1,dt.vnode&&dt.vnode(s),Dc(n.__P,s,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??ki(e),!!(32&e.__u),r),s.__v=e.__v,s.__.__k[s.__i]=s,Jh(i,s,r),e.__e=e.__=null,s.__e!=t&&Xh(s)}}function Xh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Xh(n)}function zh(n){(!n.__d&&(n.__d=!0)&&gi.push(n)&&!Wa.__r++||Oh!=dt.debounceRendering)&&((Oh=dt.debounceRendering)||Vh)(Wa)}function Wa(){try{for(var n,e=1;gi.length;)gi.length>e&&gi.sort(Gh),n=gi.shift(),e=gi.length,wf(n)}finally{gi.length=Wa.__r=0}}function Yh(n,e,t,i,r,s,a,o,l,c,h){var d,u,f,x,g,m,p=i&&i.__k||Ga,y=e.length;for(l=Af(t,e,p,l,y),d=0;d<y;d++)(f=t.__k[d])!=null&&(u=f.__i!=-1&&p[f.__i]||Va,f.__i=d,m=Dc(n,f,u,r,s,a,o,l,c,h),x=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&Lc(u.ref,null,f),h.push(f.ref,f.__c||x,f)),g==null&&x!=null&&(g=x),4&f.__u?(l=$h(f,l,n),u.__e&&(u.__e=null)):typeof f.type=="function"&&m!==void 0?l=m:x&&(l=x.nextSibling),f.__u&=-7);return t.__e=g,l}function Af(n,e,t,i,r){var s,a,o,l,c,h=t.length,d=h,u=0;for(n.__k=new Array(r),s=0;s<r;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[s]=ka(null,a,null,null,null):Ya(a)?a=n.__k[s]=ka(Kn,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[s]=ka(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[s]=a,l=s+u,a.__=n,a.__b=n.__b+1,o=null,(c=a.__i=Cf(a,t,l,d))!=-1&&(d--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(r>h?u--:r<h&&u++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?u--:c==l+1?u++:(c>l?u--:u++,a.__u|=4))):n.__k[s]=null;if(d)for(s=0;s<h;s++)(o=t[s])!=null&&(2&o.__u)==0&&(o.__e==i&&(i=ki(o)),Qh(o,o));return i}function $h(n,e,t){var i,r;if(typeof n.type=="function"){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,e=$h(i[r],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=ki(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Cf(n,e,t,i){var r,s,a,o=n.key,l=n.type,c=e[t],h=c!=null&&(2&c.__u)==0;if(c===null&&o==null||h&&o==c.key&&l==c.type)return t;if(i>(h?1:0)){for(r=t-1,s=t+1;r>=0||s<e.length;)if((c=e[a=r>=0?r--:s++])!=null&&(2&c.__u)==0&&o==c.key&&l==c.type)return a}return-1}function Bh(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Tf.test(e)?t:t+"px"}function za(n,e,t,i,r){var s,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Bh(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Bh(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(Wh,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?i?t[xs]=i[xs]:(t[xs]=Ic,n.addEventListener(e,s?Rc:Cc,s)):n.removeEventListener(e,s?Rc:Cc,s);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function kh(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Ba]==null)e[Ba]=Ic++;else if(e[Ba]<t[xs])return;return t(dt.event?dt.event(e):e)}}}function Dc(n,e,t,i,r,s,a,o,l,c){var h,d,u,f,x,g,m,p,y,b,E,C,S,A,P,q,v=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),s=[o=e.__e=t.__e]),(h=dt.__b)&&h(e);e:if(typeof v=="function"){d=a.length;try{if(y=e.props,b=v.prototype&&v.prototype.render,E=(h=v.contextType)&&i[h.__c],C=h?E?E.props.value:h.__:i,t.__c?p=(u=e.__c=t.__c).__=u.__E:(b?e.__c=u=new v(y,C):(e.__c=u=new Ha(y,C),u.constructor=v,u.render=If),E&&E.sub(u),u.state||(u.state={}),u.__n=i,f=u.__d=!0,u.__h=[],u._sb=[]),b&&u.__s==null&&(u.__s=u.state),b&&v.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Jn({},u.__s)),Jn(u.__s,v.getDerivedStateFromProps(y,u.__s))),x=u.props,g=u.state,u.__v=e,f)b&&v.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),b&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b&&v.getDerivedStateFromProps==null&&y!==x&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(y,C),e.__v==t.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(y,u.__s,C)===!1){e.__v!=t.__v&&(u.props=y,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(R){R&&(R.__=e)}),Ga.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&a.push(u),o=ki(t);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(y,u.__s,C),b&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(x,g,m)})}if(u.context=C,u.props=y,u.__P=n,u.__e=!1,S=dt.__r,A=0,b)u.state=u.__s,u.__d=!1,S&&S(e),h=u.render(u.props,u.state,u.context),Ga.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,S&&S(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++A<25);u.state=u.__s,u.getChildContext!=null&&(i=Jn(Jn({},i),u.getChildContext())),b&&!f&&u.getSnapshotBeforeUpdate!=null&&(m=u.getSnapshotBeforeUpdate(x,g)),P=h!=null&&h.type===Kn&&h.key==null?Kh(h.props.children):h,o=Yh(n,Ya(P)?P:[P],e,t,i,r,s,a,o,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&a.push(u),p&&(u.__E=u.__=null)}catch(R){if(a.length=d,e.__v=null,l||s!=null){if(R.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;s!=null&&(s[s.indexOf(o)]=null),e.__e=o}else if(s!=null)for(q=s.length;q--;)Pc(s[q])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),R.then||Zh(e),dt.__e(R,e,t)}}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=Rf(t.__e,e,t,i,r,s,a,l,c);return(h=dt.diffed)&&h(e),128&e.__u?void 0:o}function Zh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Zh))}function Jh(n,e,t){for(var i=0;i<t.length;i++)Lc(t[i],t[++i],t[++i]);dt.__c&&dt.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(s){s.call(r)})}catch(s){dt.__e(s,r.__v)}})}function Kh(n){return typeof n!="object"||n==null||n.__b>0?n:Ya(n)?n.map(Kh):n.constructor!==void 0?null:Jn({},n)}function Rf(n,e,t,i,r,s,a,o,l){var c,h,d,u,f,x,g,m=t.props||Va,p=e.props,y=e.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){n=f,s[c]=null;break}}if(n==null){if(y==null)return document.createTextNode(p);n=document.createElementNS(r,y,p.is&&p),o&&(dt.__m&&dt.__m(e,s),o=!1),s=null}if(y==null)m===p||o&&n.data==p||(n.data=p);else{if(s=y=="textarea"&&p.defaultValue!=null?null:s&&Xa.call(n.childNodes),!o&&s!=null)for(m={},c=0;c<n.attributes.length;c++)m[(f=n.attributes[c]).name]=f.value;for(c in m)f=m[c],c=="dangerouslySetInnerHTML"?d=f:c=="children"||c in p||c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p||za(n,c,null,f,r);for(c in p)f=p[c],c=="children"?u=f:c=="dangerouslySetInnerHTML"?h=f:c=="value"?x=f:c=="checked"?g=f:o&&typeof f!="function"||m[c]===f||za(n,c,f,m[c],r);if(h)o||d&&(h.__html==d.__html||h.__html==n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(d&&(n.innerHTML=""),Yh(e.type=="template"?n.content:n,Ya(u)?u:[u],e,t,i,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,a,s?s[0]:t.__k&&ki(t,0),o,l),s!=null)for(c=s.length;c--;)Pc(s[c]);o&&y!="textarea"||(c="value",y=="progress"&&x==null?n.removeAttribute("value"):x!=null&&(x!==n[c]||y=="progress"&&!x||y=="option"&&x!=m[c])&&za(n,c,x,m[c],r),c="checked",g!=null&&g!=n[c]&&za(n,c,g,m[c],r))}return n}function Lc(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(r){dt.__e(r,t)}}function Qh(n,e,t){var i,r;if(dt.unmount&&dt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||Lc(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){dt.__e(s,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&Qh(i[r],e,t||typeof n.type!="function");t||Pc(n.__e),n.__c=n.__=n.__e=void 0}function If(n,e,t){return this.constructor(n,t)}function jh(n,e,t){var i,r,s,a;e==document&&(e=document.documentElement),dt.__&&dt.__(n,e),r=(i=typeof t=="function")?null:t&&t.__k||e.__k,s=[],a=[],Dc(e,n=(!i&&t||e).__k=$a(Kn,null,[n]),r||Va,Va,e.namespaceURI,!i&&t?[t]:r?null:e.firstChild?Xa.call(e.childNodes):null,s,!i&&t?t:r?r.__e:e.firstChild,i,a),Jh(s,n,a),n.props.children=null}Xa=Ga.slice,dt={__e:function(n,e,t,i){for(var r,s,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(n)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,i||{}),a=r.__d),a)return r.__E=r}catch(o){n=o}throw n}},Hh=0,Sf=function(n){return n!=null&&n.constructor===void 0},Ha.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Jn({},this.state),typeof n=="function"&&(n=n(Jn({},t),this.props)),n&&Jn(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),zh(this))},Ha.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),zh(this))},Ha.prototype.render=Kn,gi=[],Vh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Gh=function(n,e){return n.__v.__b-e.__v.__b},Wa.__r=0,Ac=Math.random().toString(8),Ba="__d"+Ac,xs="__a"+Ac,Wh=/(PointerCapture)$|Capture$/i,Ic=0,Cc=kh(!1),Rc=kh(!0),Ef=0;var Pf=0,Df=0,tu=n=>{Pf=n,Df=0};var Lf=4,Uf=.001,Ff=1e-7,Nf=10,Ka=11,Za=1/(Ka-1),nu=(n,e)=>1-3*e+3*n,iu=(n,e)=>3*e-6*n,ru=n=>3*n,Ja=(n,e,t)=>((nu(e,t)*n+iu(e,t))*n+ru(e))*n,eu=(n,e,t)=>3*nu(e,t)*n*n+2*iu(e,t)*n+ru(e),Of=(n,e,t,i)=>{if(n===e&&t===i)return a=>a;let r=new Float32Array(Ka);for(let a=0;a<Ka;++a)r[a]=Ja(a*Za,n,t);let s=a=>{let o=0,l=1,c=Ka-1;for(;l!==c&&r[l]<=a;++l)o+=Za;--l;let h=(a-r[l])/(r[l+1]-r[l]),d=o+h*Za,u=eu(d,n,t);if(u>=Uf){let y=d;for(let b=0;b<Lf;++b){let E=eu(y,n,t);if(E===0)return y;y-=(Ja(y,n,t)-a)/E}return y}if(u===0)return d;let f=o,x=o+Za,g=0,m=0,p=0;do g=f+(x-f)/2,m=Ja(g,n,t)-a,m>0?x=g:f=g;while(Math.abs(m)>Ff&&++p<Nf);return g};return a=>a===0||a===1?a:Ja(s(a),e,i)},an={bezier:Of,linear:n=>n,in:n=>n,out:n=>e=>1-n(1-e),inOut:n=>e=>e<.5?n(e*2)/2:1-n((1-e)*2)/2,poly:n=>e=>Math.pow(e,n),cubic:n=>n*n*n,sin:n=>1-Math.cos(n*Math.PI/2)};var Cn=[{scene:"hook",a:0,b:4.56,text:"The Glazers bought Manchester United for \xA3790 million.",w:[["The",0],["Glazers",.2],["bought",.6],["Manchester",.86],["United",1.38],["for",1.82],["790",2.16],["million",3.48],["pounds.",4.02]]},{scene:"hook",a:4.83,b:6.66,text:"More than \xA3500 million was borrowed.",w:[["More",4.83],["than",4.96],["500",5.12],["million",5.56],["was",5.96],["borrowed.",6.26]]},{scene:"hook",a:6.9,b:10.3,text:"And within a year, most of that debt was on United's own books.",w:[["And",6.9],["within",6.98],["a",7.18],["year,",7.38],["most",7.96],["of",8.16],["that",8.38],["debt",8.54],["was",8.76],["on",8.98],["United's",9.14],["own",9.66],["books.",9.88]]},{scene:"explain",a:10.55,b:11.14,text:"Let me explain.",w:[["Let",10.55],["me",10.68],["explain.",10.78]]},{scene:"sides",a:11.83,b:15.5,text:"The American family took over in 2005, mostly with loans.",w:[["The",11.83],["American",11.9],["family",12.2],["took",12.62],["over",12.9],["in",13.2],["2005,",13.4],["mostly",14.62],["with",14.86],["loans.",15.16]]},{scene:"bonds",a:15.8,b:21.96,text:"Nearly five years later, United itself sold \xA3500 million of bonds to pay off the bank loans.",w:[["Nearly",15.8],["five",15.96],["years",16.42],["later,",16.68],["United",17.31],["itself",17.64],["sold",18.18],["500",18.56],["million",19.18],["pounds",19.7],["of",20.08],["bonds",20.32],["to",20.64],["pay",20.92],["off",21.12],["the",21.3],["bank",21.46],["loans.",21.66]]},{scene:"money",a:22.23,b:26.1,text:"So ticket, shirt and TV money went on paying for the takeover.",w:[["So,",22.23],["ticket,",22.8],["shirt,",23.35],["and",23.78],["TV",23.98],["money",24.22],["went",24.58],["on",24.88],["paying",25.12],["for",25.38],["the",25.64],["takeover.",25.78]]},{scene:"money",a:26.429,b:31.14,text:"ESPN says that by 2018, the cost had passed \xA31 billion.",w:[["ESPN",26.429],["says",26.84],["that",27.36],["by",27.62],["2018,",27.78],["the",28.8],["cost",28.9],["had",29.14],["passed",29.36],["1",29.7],["billion",30.397],["pounds.",30.66]]},{scene:"worst",a:31.5,b:32.42,text:"And here's the worst part.",w:[["And",31.5],["here's",31.54],["the",31.76],["worst",31.88],["part.",32.08]]},{scene:"board",a:33.22,b:37.82,text:"21 years later, United's borrowings stand at about \xA3690 million.",w:[["21",33.22],["years",33.48],["later,",33.92],["United's",34.56],["borrowing",35.078],["stand",35.34],["at",35.82],["about",36.02],["690",36.24],["million.",37.36]]},{scene:"board",a:38.158,b:42.6,text:"Last season, net finance costs alone were \xA369.6 million.",w:[["Last",38.158],["season,",38.38],["net",39.11],["finance",39.3],["costs",39.8],["alone",40.16],["were",40.58],["69.6",40.92],["million,",42.28]]},{scene:"board",a:42.78,b:45.1,text:"About \xA3190,000 a day.",w:[["about",42.78],["190,000",42.96],["a",44.6],["day.",44.82]]},{scene:"fair",a:45.325,b:49.82,text:"To be fair, under the Glazers, United won five league titles and the Champions League.",w:[["To",45.325],["be",45.4],["fair,",45.52],["under",46.17],["the",46.3],["Glazers,",46.46],["United",47.12],["won",47.3],["five",47.62],["league",48.02],["titles",48.3],["and",48.68],["the",49],["Champions",49.18],["League.",49.44]]},{scene:"verdict",a:50.019,b:52.54,text:"But \xA3790 million was the price.",w:[["But",50.019],["790",50.12],["million",51.34],["was",51.76],["the",52.08],["price.",52.26]]},{scene:"verdict",a:52.87,b:54.98,text:"United has been paying the bill ever since.",w:[["United",52.87],["has",53.18],["been",53.42],["paying",53.6],["the",53.86],["bill",54.08],["ever",54.477],["since.",54.62]]},{scene:"verdict",a:54.98,b:56.58,text:"Our rating: inflated.",w:[["Our",54.98],["rating?",55.44],["Inflated.",55.97]]},{scene:"verdict",a:56.8,b:58.02,text:"Send us who to audit next.",w:[["Send",56.8],["us",56.92],["who",57.08],["to",57.28],["audit",57.42],["next.",57.6]]}];var su={note:"038 \u2014 brief lines that FAIL verification (armed BEFORE the take). Read with JSON.parse. Verified 2026-11-20; VO_SCRIPT.txt has the trail.",fixes:[{at:"hook c1",brief:"And most of that debt landed on United's own books.",briefSpoken:"And most of that debt landed on United's own books.",use:"And within a year, most of that debt was on United's own books.",why:"In 2005 only the \xA3265m loan was on the club; the \xA3275m securities had no hold over its assets.",bad:"\\bmost of that debt landed\\b"},{at:"bonds c0",brief:"Five years later, United itself sold\u2026",briefSpoken:"Five years later, United itself sold five hundred million pounds of bonds",use:"Nearly five years later, United itself sold\u2026",why:"January 2010 is 4 years 8 months after May 2005.",bad:"^five years later\\b"},{at:"money c1",brief:"By twenty eighteen, ESPN put the cost at over one billion pounds.",briefSpoken:"By twenty eighteen, ESPN put the cost at over one billion pounds.",use:"ESPN says that by twenty eighteen, the cost had passed one billion pounds.",why:"ESPN dates the \xA31bn mark to 2018 and to 2015; 'by 2018' is true either way.",bad:"\\bespn put the cost\\b"},{at:"board c0",brief:"Twenty-one years later, United still owes about six hundred and ninety million.",briefSpoken:"Twenty-one years later, United still owes about six hundred and ninety million.",use:"Twenty-one years later, United's borrowings stand at about six hundred and ninety million.",why:"Guardrail: today's \xA3689m is current borrowing, not the 2005 loan.",bad:"\\bstill owes\\b"}],guardrails:[{why:"The takeover was legal: nothing implies wrongdoing (the brief).",bad:"\\b(illegal|stole|stolen|theft|crooks?|criminal|robbed|looted|con(ned)?|lied|misled)\\b",example:"The Glazers stole the club."},{why:"Never say all \xA3540m was put on the club (the brief).",bad:"\\ball (of )?(that|the|\xA3?540|five hundred and forty)\\b[^.]*\\b(debt|loan)",example:"All of that debt went onto United."},{why:"The \xA31bn+ is ESPN's estimate: always labelled as ESPN's (the brief).",bad:"^(?!.*\\bespn\\b).*\\b(1 billion|one billion|\xA31bn|1bn)\\b",example:"The cost passed one billion pounds."},{why:"'Finance costs', never 'interest' for the \xA369.6m (the brief).",bad:"\\binterest\\b[^.]*\\b(69|sixty-nine)|\\b(69|sixty-nine)[^.]*\\binterest\\b",example:"Interest was sixty-nine point six million."},{why:"No mention of current sale reports (the brief).",bad:"\\b(for sale|sale process|selling the club|ratcliffe|ineos|qatar|bid(s|der)?)\\b",example:"Ratcliffe's bid changed that."},{why:"'Fraud' and 'scam' never appear (standing rule).",bad:"\\b(fraud|scam)\\w*\\b",example:"The takeover was a scam."},{why:"The verdict rates the \xA3790m as money the Glazers paid, not the Glazers (the brief).",bad:"\\b(the glazers|glazer family|united|manchester united) (is|was|are|were) (inflated|greedy|dishonest|frauds?)\\b",example:"The Glazers were greedy."}]};var Uc=30;var o7=su.fixes,kf=n=>Cn.some(e=>n.test(e.text)),l7={ctaSpoken:kf(/audit next/i)},au=!1,ou="none.png";var c7=Math.round(0*Uc);var ja=["hook","explain","sides","bonds","money","worst","board","fair","verdict"],Qa={hook:3,explain:1,sides:1,bonds:1,money:2,worst:1,board:3,fair:1,verdict:4};{let n={};for(let t of Cn)n[t.scene]=(n[t.scene]??0)+1;let e=ja.filter(t=>(n[t]??0)!==Qa[t]).map(t=>`${t}: wired ${n[t]??0}, the film indexes ${Qa[t]}`);if(e.length)throw new Error(`038 CUE COUNT MISMATCH \u2014 the wired take does not match the film.
`+e.map(t=>"  \xB7 "+t).join(`
`))}var Hf=.8,Vf=Math.round(Cn[Cn.length-1].b*Uc),Gf=Math.round(Hf*Uc),gs=Vf+Gf;var Hi=an.bezier(.5,0,.25,1),m7=an.bezier(.45,0,.25,1),x7=an.bezier(.45,.05,.35,1),Wf=an.bezier(.6,0,.4,1),_s=an.bezier(.4,.12,0,1),Xf=an.out(an.poly(4)),g7=an.inOut(an.sin),_7=an.bezier(.45,0,.25,1);var Yf=an.in(an.cubic),zn=n=>Math.max(0,Math.min(1,n));var $f=0;function Qn(n,e,t,i,r,s){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var c={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--$f,__i:-1,__u:0,__source:r,__self:s};if(typeof n=="function"&&(a=n.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return dt.vnode&&dt.vnode(c),c}var Zf={coin:.1,ding:.699,flick:.09,thud:.06,tick:.03,sub:.043,bloom:.107,ping:.743,whooshlong:.202,whooshsoft:.202,click:.232,data:.286,airwoosh:.072,chain:.947,lowwoosh:.283,swoosh:.065,pingshort:.85,chainshort:.7,datashort:.34,datamid:.31},Jf=.94,w7=Object.fromEntries(Object.entries(Zf).map(([n,e])=>[n,e*Jf]));var lu={coin:24,ding:40,flick:16,thud:30,tick:8,sub:30,bloom:60,ping:108,whooshlong:32,whooshsoft:27,click:7,data:68,airwoosh:53,chain:90,lowwoosh:75,swoosh:40,pingshort:39,chainshort:32,datashort:29,datamid:48},cu={coin:0,ding:0,flick:0,thud:0,tick:0,sub:0,bloom:0,ping:0,whooshlong:8,whooshsoft:6,click:0,data:0,airwoosh:19,chain:0,lowwoosh:10,swoosh:10,pingshort:0,chainshort:4,datashort:0,datamid:0},Fc={airwoosh:21,bloom:3,chain:0,chainshort:4,click:0,coin:0,data:2,datamid:2,datashort:2,ding:0,flick:0,lowwoosh:13,ping:0,pingshort:0,sub:1,swoosh:12,thud:0,tick:0,whooshlong:13,whooshsoft:8},Kf=new Set(["data","datamid","datashort","chain","chainshort","lowwoosh","airwoosh","swoosh","whooshlong","whooshsoft"]),Nc=n=>(e,t,i,r,s)=>{let a=Math.max(Math.round(n.at),Math.round(t-cu[e])),o=Kf.has(e)&&i!==void 0?Math.min(Math.round(i),Math.round(n.end)):Math.round(n.end),l=Math.max(3,Math.min(lu[e],o-a));return{s:e,at:a,dur:l,fade:l<lu[e]?Math.min(10,Math.max(3,Math.round(l/3))):0,vol:r,why:s}},Oc=n=>(e,t,i,r,s)=>Nc(n)(e,t-(Fc[e]-cu[e]),i,r,s);var hu=(n,e,t)=>{let i=[],r=l=>{let c=n.find(h=>h.id===l);return{at:c.from,end:c.to}};for(let l of e)i.push(Oc(r(l.id))("airwoosh",l.mid,l.end,l.vol,`the camera moves (${l.id}: ${l.why})`));for(let l of t)i.push((l.kind==="move"?Oc:Nc)(r(l.id))(l.s,l.at,l.end,l.vol,l.why));let s=new Set(["swoosh","whooshlong","whooshsoft","airwoosh","lowwoosh"]),a=l=>l.at+Fc[l.s],o=i.filter(l=>!(l.why.startsWith("the camera moves")&&i.some(c=>c!==l&&s.has(c.s)&&!c.why.startsWith("the camera moves")&&Math.abs(a(c)-a(l))<=6)));return o.sort((l,c)=>l.at-c.at),{cues:o}};var zc=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Vi=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],vs=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],xr=n=>Math.hypot(n[0],n[1],n[2]),bs=(n,e,t)=>n+(e-n)*t,Qf=50,jf=(n,e,t,i)=>{let r=e*Math.PI/180;return[n[0]+Math.sin(r)*t,i,n[2]+Math.cos(r)*t]},uu=(n,e)=>jf(n.c,bs(n.a0,n.a1,e),bs(n.r0,n.r1??n.r0,e),bs(n.y0,n.y1??n.y0,e));var kc=(n,e,t,i,r={})=>({at:n,dur:e,pos:t,look:i,fov:r.fov,ease:r.ease??_s,why:r.why??"dolly"});var ys=(n,e,t,i={})=>({at:n,dur:0,pos:e,look:t,fov:i.fov,roll:i.roll,cut:!0,dip:i.dip??0,why:i.why??"cut",focus:i.focus,still:i.still});var du=(n,e)=>{for(let t=1;t<e.length;t++){let i=e[t-1],r=e[t];if(r.at<i.at+i.dur-1e-6)throw new Error(`camera ${n}: key ${t} "${r.why??""}" (f${r.at}) starts before key ${t-1} "${i.why??""}" ends (f${i.at+i.dur}): camera keys never overlap`);if(!r.cut&&r.dur<1)throw new Error(`camera ${n}: key ${t} "${r.why??""}" has no duration (use cut())`)}return e},Bc=7,e3=n=>[Bc*(Math.sin(n*.0213+1.3)+.5*Math.sin(n*.0091+4.1)),Bc*.6*(Math.sin(n*.0171+2.9)+.4*Math.sin(n*.0123+.4)),Bc*1.2*Math.sin(n*.0137+5.2)],eo=(n,e)=>{let t={pos:n[0].pos,look:n[0].look,fov:n[0].fov??Qf,roll:n[0].roll??0,focus:n[0].focus??n[0].look},i=!!n[0].still;for(let s=1;s<n.length;s++){let a=n[s];if(e<a.at)break;let o={pos:a.pos,look:a.look,fov:a.fov??t.fov,roll:a.roll??0,focus:a.focus??a.look};if(i=!!a.still,a.cut||e>=a.at+a.dur){t=o;continue}let l=(a.ease??_s)(zn((e-a.at)/a.dur)),c=vs(t.pos,a.pos,l);if(a.orbit){let h=uu(a.orbit,l),d=Hi(zn(l/.34)),u=uu(a.orbit,0);c=xr(Vi(u,t.pos))<2?h:vs(vs(t.pos,h,l),h,d)}if(a.arc){let h=Math.sin(Math.PI*l);c=zc(c,[a.arc[0]*h,a.arc[1]*h,a.arc[2]*h])}t={pos:c,look:vs(t.look,a.look,l),fov:bs(t.fov,o.fov,l),roll:bs(t.roll,o.roll,l),focus:vs(t.focus,o.focus,l)};break}if(i)return t;let r=e3(e);return{pos:zc(t.pos,r),look:zc(t.look,[r[0]*.25,r[1]*.25,0]),fov:t.fov,roll:t.roll,focus:t.focus}};var fu=(n,e)=>{let t=eo(n,e-.5),i=eo(n,e+.5),r=Math.max(200,xr(Vi(t.look,t.pos)));return(xr(Vi(i.pos,t.pos))+xr(Vi(i.look,t.look)))/r};var Bu=0,C0=1,ku=2;var R0=1,ar=2,Mn=3,Ln=0,Rt=1,Wn=2,Qt=0,Zi=1,Xn=2,I0=3,P0=4,Ko=5,kn=100,Hu=101,Vu=102,Gu=103,Wu=104,Xu=200,fa=201,Yu=202,$u=203,Eo=204,To=205,Zu=206,Ju=207,Ku=208,Qu=209,ju=210,ed=211,td=212,nd=213,id=214,Qo=0,jo=1,el=2,Ji=3,tl=4,nl=5,il=6,rl=7,sl=0,rd=1,sd=2,li=0,Vr=1,al=2,ol=3,ll=4,cl=5,hl=6,Gr=7;var D0=300,or=301,lr=302,ul=303,dl=304,pa=306,Ir=1e3,Bn=1001,wo=1002,Ut=1003,ad=1004;var ma=1005;var cn=1006,fl=1007;var Sn=1008;var Un=1009,L0=1010,U0=1011,Wr=1012,pl=1013,Ri=1014,Fn=1015,At=1016,ml=1017,xl=1018,Xr=1020,F0=35902,N0=35899,O0=1021,z0=1022,En=1023,Pr=1026,Yr=1027,gl=1028,_l=1029,vl=1030,bl=1031;var yl=1033,xa=33776,ga=33777,_a=33778,va=33779,ql=35840,Ml=35841,Sl=35842,El=35843,Tl=36196,wl=37492,Al=37496,Cl=37808,Rl=37809,Il=37810,Pl=37811,Dl=37812,Ll=37813,Ul=37814,Fl=37815,Nl=37816,Ol=37817,zl=37818,Bl=37819,kl=37820,Hl=37821,Vl=36492,Gl=36494,Wl=36495,Xl=36283,Yl=36284,$l=36285,Zl=36286;var Ds=2300,Ao=2301,So=2302,x0=2400,g0=2401,_0=2402;var od=3200,Jl=3201;var Kl=0,ld=1,ci="",Et="srgb",Ki="srgb-linear",Ls="linear",tt="srgb";var $i=7680;var v0=519,cd=512,hd=513,ud=514,B0=515,dd=516,fd=517,pd=518,md=519,b0=35044;var k0="300 es",Dn=2e3,Us=2001;function H0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xd(){let n=Fs("canvas");return n.style.display="block",n}var pu={},Dr=null;function V0(...n){let e="THREE."+n.shift();Dr?Dr("log",e,...n):console.log(e,...n)}function Be(...n){let e="THREE."+n.shift();Dr?Dr("warn",e,...n):console.warn(e,...n)}function Ye(...n){let e="THREE."+n.shift();Dr?Dr("error",e,...n):console.error(e,...n)}function Lr(...n){let e=n.join(" ");e in pu||(pu[e]=!0,Be(...n))}function gd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hc=Math.PI/180,Ns=180/Math.PI;function $r(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function t3(n,e){return(n%e+e)%e}function Vc(n,e,t){return(1-t)*n+t*e}function qs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ee=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ai=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],f=s[a+1],x=s[a+2],g=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=u,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==u||c!==f||h!==x){let m=l*u+c*f+h*x+d*g;m<0&&(u=-u,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+u*o,c=c*p+f*o,h=h*p+x*o,d=d*p+g*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+x*o,d=d*p+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],u=s[a+1],f=s[a+2],x=s[a+3];return e[t]=o*x+h*d+l*f-c*u,e[t+1]=l*x+h*u+c*d-o*f,e[t+2]=c*x+h*f+o*u-l*d,e[t+3]=h*x-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),u=l(i/2),f=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gc=new I,mu=new ai,Ge=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],x=i[8],g=r[0],m=r[3],p=r[6],y=r[1],b=r[4],E=r[7],C=r[2],S=r[5],A=r[8];return s[0]=a*g+o*y+l*C,s[3]=a*m+o*b+l*S,s[6]=a*p+o*E+l*A,s[1]=c*g+h*y+d*C,s[4]=c*m+h*b+d*S,s[7]=c*p+h*E+d*A,s[2]=u*g+f*y+x*C,s[5]=u*m+f*b+x*S,s[8]=u*p+f*E+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,x=t*d+i*u+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=d*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=u*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new Ge,xu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n3(){let n={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?Ls:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ki]:{primaries:e,whitePoint:i,transfer:Ls,toXYZ:xu,fromXYZ:gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:xu,fromXYZ:gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),n}var Ke=n3();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gr,Co=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=Fs("canvas")),gr.width=e.width,gr.height=e.height;let r=gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ri(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},i3=0,Ur=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i3++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xc(r[a].image)):s.push(Xc(r[a]))}else s=Xc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Co.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var r3=0,Yc=new I,Lt=class n extends si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Bn,r=Bn,s=cn,a=Sn,o=En,l=Un,c=n.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r3++}),this.uuid=$r(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=D0;Lt.DEFAULT_ANISOTROPY=1;var at=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,E=(f+1)/2,C=(p+1)/2,S=(h+u)/4,A=(d+g)/4,P=(x+m)/4;return b>E&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=S/i,s=A/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=S/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ro=class extends si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ur(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bt=class extends Ro{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Os=class extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),no.subVectors(this.max,Ms),_r.subVectors(e.a,Ms),vr.subVectors(e.b,Ms),br.subVectors(e.c,Ms),_i.subVectors(vr,_r),vi.subVectors(br,vr),Gi.subVectors(_r,br);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Gi.z,Gi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Gi.z,0,-Gi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Gi.y,Gi.x,0];return!$c(t,_r,vr,br,no)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,_r,vr,br,no))?!1:(io.crossVectors(_i,vi),t=[io.x,io.y,io.z],$c(t,_r,vr,br,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,to=new Gt,_r=new I,vr=new I,br=new I,_i=new I,vi=new I,Gi=new I,Ms=new I,no=new I,io=new I,Wi=new I;function $c(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wi.fromArray(n,s);let o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var s3=new Gt,Ss=new I,Zc=new I,Ti=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):s3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);let t=Ss.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Zc)),this.expandByPoint(Ss.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ei=new I,Jc=new I,ro=new I,bi=new I,Kc=new I,so=new I,Qc=new I,Po=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jc.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Jc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ro),o=bi.dot(this.direction),l=-bi.dot(ro),c=bi.lengthSq(),h=Math.abs(1-a*a),d,u,f,x;if(h>0)if(d=a*l-o,u=a*o-l,x=s*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jc).addScaledVector(ro,u),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,s){Kc.subVectors(t,e),so.subVectors(i,e),Qc.crossVectors(Kc,so);let a=this.direction.dot(Qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);let l=o*this.direction.dot(so.crossVectors(bi,so));if(l<0)return null;let c=o*this.direction.dot(Kc.cross(bi));if(c<0||l+c>a)return null;let h=-o*bi.dot(Qc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class n{constructor(e,t,i,r,s,a,o,l,c,h,d,u,f,x,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,d,u,f,x,g,m)}set(e,t,i,r,s,a,o,l,c,h,d,u,f,x,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,x=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+x*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,x=c*h,g=c*d;t[0]=u+g*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,x=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,x=o*h,g=o*d;t[0]=l*h,t[4]=x*c-f,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=x*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+x,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*l,f=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a3,e,o3)}lookAt(e,t,i){let r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(i,on),yi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(i,on)),yi.normalize(),ao.crossVectors(on,yi),r[0]=yi.x,r[4]=ao.x,r[8]=on.x,r[1]=yi.y,r[5]=ao.y,r[9]=on.y,r[2]=yi.z,r[6]=ao.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],x=i[2],g=i[6],m=i[10],p=i[14],y=i[3],b=i[7],E=i[11],C=i[15],S=r[0],A=r[4],P=r[8],q=r[12],v=r[1],R=r[5],N=r[9],B=r[13],H=r[2],G=r[6],X=r[10],re=r[14],W=r[3],se=r[7],le=r[11],Te=r[15];return s[0]=a*S+o*v+l*H+c*W,s[4]=a*A+o*R+l*G+c*se,s[8]=a*P+o*N+l*X+c*le,s[12]=a*q+o*B+l*re+c*Te,s[1]=h*S+d*v+u*H+f*W,s[5]=h*A+d*R+u*G+f*se,s[9]=h*P+d*N+u*X+f*le,s[13]=h*q+d*B+u*re+f*Te,s[2]=x*S+g*v+m*H+p*W,s[6]=x*A+g*R+m*G+p*se,s[10]=x*P+g*N+m*X+p*le,s[14]=x*q+g*B+m*re+p*Te,s[3]=y*S+b*v+E*H+C*W,s[7]=y*A+b*R+E*G+C*se,s[11]=y*P+b*N+E*X+C*le,s[15]=y*q+b*B+E*re+C*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+s*l*d-r*c*d-s*o*u+i*c*u+r*o*f-i*l*f)+g*(+t*l*f-t*c*u+s*a*u-r*a*f+r*c*h-s*l*h)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*h-i*c*h)+p*(-r*o*h-t*l*d+t*o*u+r*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],y=d*m*c-g*u*c+g*l*f-o*m*f-d*l*p+o*u*p,b=x*u*c-h*m*c-x*l*f+a*m*f+h*l*p-a*u*p,E=h*g*c-x*d*c+x*o*f-a*g*f-h*o*p+a*d*p,C=x*d*l-h*g*l-x*o*u+a*g*u+h*o*m-a*d*m,S=t*y+i*b+r*E+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=y*A,e[1]=(g*u*s-d*m*s-g*r*f+i*m*f+d*r*p-i*u*p)*A,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*p+i*l*p)*A,e[3]=(d*l*s-o*u*s-d*r*c+i*u*c+o*r*f-i*l*f)*A,e[4]=b*A,e[5]=(h*m*s-x*u*s+x*r*f-t*m*f-h*r*p+t*u*p)*A,e[6]=(x*l*s-a*m*s-x*r*c+t*m*c+a*r*p-t*l*p)*A,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*f+t*l*f)*A,e[8]=E*A,e[9]=(x*d*s-h*g*s-x*i*f+t*g*f+h*i*p-t*d*p)*A,e[10]=(a*g*s-x*o*s+x*i*c-t*g*c-a*i*p+t*o*p)*A,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*f-t*o*f)*A,e[12]=C*A,e[13]=(h*g*r-x*d*r+x*i*u-t*g*u-h*i*m+t*d*m)*A,e[14]=(x*o*r-a*g*r-x*i*l+t*g*l+a*i*m-t*o*m)*A,e[15]=(a*d*r-h*o*r+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,x=s*d,g=a*h,m=a*d,p=o*d,y=l*c,b=l*h,E=l*d,C=i.x,S=i.y,A=i.z;return r[0]=(1-(g+p))*C,r[1]=(f+E)*C,r[2]=(x-b)*C,r[3]=0,r[4]=(f-E)*S,r[5]=(1-(u+p))*S,r[6]=(m+y)*S,r[7]=0,r[8]=(x+b)*A,r[9]=(m-y)*A,r[10]=(1-(u+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=yr.set(r[0],r[1],r[2]).length(),a=yr.set(r[4],r[5],r[6]).length(),o=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);let c=1/s,h=1/a,d=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Dn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),x,g;if(l)x=s/(a-s),g=a*s/(a-s);else if(o===Dn)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Us)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Dn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),f=-(i+r)/(i-r),x,g;if(l)x=1/(a-s),g=a/(a-s);else if(o===Dn)x=-2/(a-s),g=-(a+s)/(a-s);else if(o===Us)x=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},yr=new I,In=new it,a3=new I(0,0,0),o3=new I(1,1,1),yi=new I,ao=new I,on=new I,_u=new it,vu=new ai,qn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},l3=0,bu=new I,qr=new ai,ti=new it,oo=new I,Es=new I,c3=new I,h3=new ai,yu=new I(1,0,0),qu=new I(0,1,0),Mu=new I(0,0,1),Su={type:"added"},u3={type:"removed"},Mr={type:"childadded",child:null},jc={type:"childremoved",child:null},St=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l3++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new qn,i=new ai,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ge}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Es,oo,this.up):ti.lookAt(oo,Es,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(ti),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Su),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u3),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Su),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,c3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,h3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};St.DEFAULT_UP=new I(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new I,ni=new I,e0=new I,ii=new I,Sr=new I,Er=new I,Eu=new I,t0=new I,n0=new I,i0=new I,r0=new at,s0=new at,a0=new at,Si=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pn.subVectors(e,t),r.cross(Pn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pn.subVectors(r,t),ni.subVectors(i,t),e0.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(ni),l=Pn.dot(e0),c=ni.dot(ni),h=ni.dot(e0),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,x=(a*h-o*l)*u;return s.set(1-f-x,x,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return r0.setScalar(0),s0.setScalar(0),a0.setScalar(0),r0.fromBufferAttribute(e,t),s0.fromBufferAttribute(e,i),a0.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(r0,s.x),a.addScaledVector(s0,s.y),a.addScaledVector(a0,s.z),a}static isFrontFacing(e,t,i,r){return Pn.subVectors(i,t),ni.subVectors(e,t),Pn.cross(ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Pn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Sr.subVectors(r,i),Er.subVectors(s,i),t0.subVectors(e,i);let l=Sr.dot(t0),c=Er.dot(t0);if(l<=0&&c<=0)return t.copy(i);n0.subVectors(e,r);let h=Sr.dot(n0),d=Er.dot(n0);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Sr,a);i0.subVectors(e,s);let f=Sr.dot(i0),x=Er.dot(i0);if(x>=0&&f<=x)return t.copy(s);let g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Er,o);let m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return Eu.subVectors(s,r),o=(d-h)/(d-h+(f-x)),t.copy(r).addScaledVector(Eu,o);let p=1/(m+g+u);return a=g*p,o=u*p,t.copy(i).addScaledVector(Sr,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function o0(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=t3(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=o0(a,s,e+1/3),this.g=o0(a,s,e),this.b=o0(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Et){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ke.workingToColorSpace(zt.copy(this),e),Math.round($e(zt.r*255,0,255))*65536+Math.round($e(zt.g*255,0,255))*256+Math.round($e(zt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Et){Ke.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(lo);let i=Vc(qi.h,lo.h,t),r=Vc(qi.s,lo.s,t),s=Vc(qi.l,lo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new xe;xe.NAMES=_d;var d3=0,Hn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d3++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Zi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hn=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new I,co=new ee,f3=0,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f3++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=b0,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b0&&(e.usage=this.usage),e}};var Bs=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ks=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},p3=0,bn=new it,l0=new St,Tr=new I,ln=new Gt,Ts=new Gt,Dt=new I,Ft=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p3++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?ks:Bs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return l0.lookAt(e),l0.updateMatrix(),this.applyMatrix4(l0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(ln.min,Ts.min),ln.expandByPoint(Dt),Dt.addVectors(ln.max,Ts.max),ln.expandByPoint(Dt)):(ln.expandByPoint(Ts.min),ln.expandByPoint(Ts.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),Dt.add(Tr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new I,l[P]=new I;let c=new I,h=new I,d=new I,u=new ee,f=new ee,x=new ee,g=new I,m=new I;function p(P,q,v){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,q),d.fromBufferAttribute(i,v),u.fromBufferAttribute(s,P),f.fromBufferAttribute(s,q),x.fromBufferAttribute(s,v),h.sub(c),d.sub(c),f.sub(u),x.sub(u);let R=1/(f.x*x.y-x.x*f.y);isFinite(R)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(R),o[P].add(g),o[q].add(g),o[v].add(g),l[P].add(m),l[q].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,q=y.length;P<q;++P){let v=y[P],R=v.start,N=v.count;for(let B=R,H=R+N;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new I,E=new I,C=new I,S=new I;function A(P){C.fromBufferAttribute(r,P),S.copy(C);let q=o[P];b.copy(q),b.sub(C.multiplyScalar(C.dot(q))).normalize(),E.crossVectors(S,q);let R=E.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,R)}for(let P=0,q=y.length;P<q;++P){let v=y[P],R=v.start,N=v.count;for(let B=R,H=R+N;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)u[x++]=c[f++]}return new Kt(u,h,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tu=new it,Xi=new Po,ho=new Ti,wu=new I,uo=new I,fo=new I,po=new I,c0=new I,mo=new I,Au=new I,xo=new I,qe=class extends St{constructor(e=new Ft,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(c0.fromBufferAttribute(d,e),a?mo.addScaledVector(c0,h):mo.addScaledVector(c0.sub(t),h))}t.add(mo)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(ho.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ho,wu)===null||Xi.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(Tu.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(Tu),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,C=b;E<C;E+=3){let S=o.getX(E),A=o.getX(E+1),P=o.getX(E+2);r=go(this,p,e,i,c,h,d,S,A,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);r=go(this,a,e,i,c,h,d,y,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,C=b;E<C;E+=3){let S=E,A=E+1,P=E+2;r=go(this,p,e,i,c,h,d,S,A,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let y=m,b=m+1,E=m+2;r=go(this,a,e,i,c,h,d,y,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function m3(n,e,t,i,r,s,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ln,o),l===null)return null;xo.copy(o),xo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:n}}function go(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,uo),n.getVertexPosition(l,fo),n.getVertexPosition(c,po);let h=m3(n,e,t,i,uo,fo,po,Au);if(h){let d=new I;Si.getBarycoord(Au,uo,fo,po,d),r&&(h.uv=Si.getInterpolatedAttribute(r,o,l,c,d,new ee)),s&&(h.uv1=Si.getInterpolatedAttribute(s,o,l,c,d,new ee)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Si.getNormal(uo,fo,po,u.normal),h.face=u,h.barycoord=d}return h}var un=class n extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function x(g,m,p,y,b,E,C,S,A,P,q){let v=E/A,R=C/P,N=E/2,B=C/2,H=S/2,G=A+1,X=P+1,re=0,W=0,se=new I;for(let le=0;le<X;le++){let Te=le*R-B;for(let We=0;We<G;We++){let Ze=We*v-N;se[g]=Ze*y,se[m]=Te*b,se[p]=H,c.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[p]=S>0?1:-1,h.push(se.x,se.y,se.z),d.push(We/A),d.push(1-le/P),re+=1}}for(let le=0;le<P;le++)for(let Te=0;Te<A;Te++){let We=u+Te+G*le,Ze=u+Te+G*(le+1),et=u+(Te+1)+G*(le+1),st=u+(Te+1)+G*le;l.push(We,Ze,st),l.push(Ze,et,st),W+=6}o.addGroup(f,W,q),f+=W,u+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){let e={};for(let t=0;t<n.length;t++){let i=cr(n[t]);for(let r in i)e[r]=i[r]}return e}function x3(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function G0(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Nn={clone:cr,merge:Ht},g3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ct=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g3,this.fragmentShader=_3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=x3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Hs=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new I,Cu=new ee,Ru=new ee,wt=class extends Hs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Cu,Ru),t.subVectors(Ru,Cu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Ar=1,Do=class extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wt(wr,Ar,e,t);r.layers=this.layers,this.add(r);let s=new wt(wr,Ar,e,t);s.layers=this.layers,this.add(s);let a=new wt(wr,Ar,e,t);a.layers=this.layers,this.add(a);let o=new wt(wr,Ar,e,t);o.layers=this.layers,this.add(o);let l=new wt(wr,Ar,e,t);l.layers=this.layers,this.add(l);let c=new wt(wr,Ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Vs=class extends Lt{constructor(e=[],t=or,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lo=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new un(5,5,5),s=new ct({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Qt});s.uniforms.tEquirect.value=t;let a=new qe(r,s),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=cn),new Do(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},ke=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},v3={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v3)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Qi=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oi=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Gs=class extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ut,h=Ut,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ws=class extends Kt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cr=new it,Iu=new it,_o=[],Pu=new Gt,b3=new it,ws=new qe,As=new Ti,Xs=class extends qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,b3)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cr),Pu.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(Pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cr),As.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(i),e.ray.intersectsSphere(As)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cr),Iu.multiplyMatrices(i,Cr),ws.matrixWorld=Iu,ws.raycast(e,_o);for(let a=0,o=_o.length;a<o;a++){let l=_o[a];l.instanceId=s,l.object=this,t.push(l)}_o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gs(new Float32Array(r*this.count),r,this.count,gl,Fn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},h0=new I,y3=new I,q3=new Ge,Jt=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=h0.subVectors(i,t).cross(y3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(h0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||q3.getNormalMatrix(e),r=this.coplanarPoint(h0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Ti,M3=new ee(.5,.5),vo=new I,Nr=class{constructor(e=new Jt,t=new Jt,i=new Jt,r=new Jt,s=new Jt,a=new Jt){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],x=s[8],g=s[9],m=s[10],p=s[11],y=s[12],b=s[13],E=s[14],C=s[15];if(r[0].setComponents(c-a,f-h,p-x,C-y).normalize(),r[1].setComponents(c+a,f+h,p+x,C+y).normalize(),r[2].setComponents(c+o,f+d,p+g,C+b).normalize(),r[3].setComponents(c-o,f-d,p-g,C-b).normalize(),i)r[4].setComponents(l,u,m,E).normalize(),r[5].setComponents(c-l,f-u,p-m,C-E).normalize();else if(r[4].setComponents(c-l,f-u,p-m,C-E).normalize(),t===Dn)r[5].setComponents(c+l,f+u,p+m,C+E).normalize();else if(t===Us)r[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);let t=M3.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(vo.x=r.normal.x>0?e.max.x:e.min.x,vo.y=r.normal.y>0?e.max.y:e.min.y,vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Or=class extends Lt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ys=class extends Lt{constructor(e,t,i=Ri,r,s,a,o=Ut,l=Ut,c,h=Pr,d=1){if(h!==Pr&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$s=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Zs=class n extends Ft{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new I,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class n extends Ft{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],f=[],x=0,g=[],m=i/2,p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function y(){let E=new I,C=new I,S=0,A=(t-e)/i;for(let P=0;P<=s;P++){let q=[],v=P/s,R=v*(t-e)+e;for(let N=0;N<=r;N++){let B=N/r,H=B*l+o,G=Math.sin(H),X=Math.cos(H);C.x=R*G,C.y=-v*i+m,C.z=R*X,d.push(C.x,C.y,C.z),E.set(G,A,X).normalize(),u.push(E.x,E.y,E.z),f.push(B,1-v),q.push(x++)}g.push(q)}for(let P=0;P<r;P++)for(let q=0;q<s;q++){let v=g[q][P],R=g[q+1][P],N=g[q+1][P+1],B=g[q][P+1];(e>0||q!==0)&&(h.push(v,R,B),S+=3),(t>0||q!==s-1)&&(h.push(R,N,B),S+=3)}c.addGroup(p,S,0),p+=S}function b(E){let C=x,S=new ee,A=new I,P=0,q=E===!0?e:t,v=E===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),x++;let R=x;for(let N=0;N<=r;N++){let H=N/r*l+o,G=Math.cos(H),X=Math.sin(H);A.x=q*X,A.y=m*v,A.z=q*G,d.push(A.x,A.y,A.z),u.push(0,v,0),S.x=G*.5+.5,S.y=X*.5*v+.5,f.push(S.x,S.y),x++}for(let N=0;N<r;N++){let B=C+N,H=R+N;E===!0?h.push(H,H+1,B):h.push(H+1,H,B),P+=3}c.addGroup(p,P,E===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let h=i[r],u=i[r+1]-h,f=(a-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ee:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,r=[],s=[],a=[],o=new I,l=new it;for(let f=0;f<=e;f++){let x=f/e;r[f]=this.getTangentAt(x,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos($e(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos($e(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],f*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends dn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ee){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uo=class extends zr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function W0(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,r(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}var bo=new I,u0=new W0,d0=new W0,f0=new W0,Fo=class extends dn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(bo.subVectors(r[0],r[1]).add(r[0]),c=bo);let d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(bo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),u0.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,x,g,m),d0.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,x,g,m),f0.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(u0.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),d0.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),f0.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(u0.calc(l),d0.calc(l),f0.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Du(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function S3(n,e){let t=1-n;return t*t*e}function E3(n,e){return 2*(1-n)*n*e}function T3(n,e){return n*n*e}function Is(n,e,t,i){return S3(n,e)+E3(n,t)+T3(n,i)}function w3(n,e){let t=1-n;return t*t*t*e}function A3(n,e){let t=1-n;return 3*t*t*n*e}function C3(n,e){return 3*(1-n)*n*n*e}function R3(n,e){return n*n*n*e}function Ps(n,e,t,i,r){return w3(n,e)+A3(n,t)+C3(n,i)+R3(n,r)}var Js=class extends dn{constructor(e=new ee,t=new ee,i=new ee,r=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ee){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ps(e,r.x,s.x,a.x,o.x),Ps(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends dn{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ps(e,r.x,s.x,a.x,o.x),Ps(e,r.y,s.y,a.y,o.y),Ps(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ks=class extends dn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends dn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qs=class extends dn{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Is(e,r.x,s.x,a.x),Is(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends dn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Is(e,r.x,s.x,a.x),Is(e,r.y,s.y,a.y),Is(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},js=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(Du(o,l.x,c.x,h.x,d.x),Du(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ee().fromArray(r))}return this}},y0=Object.freeze({__proto__:null,ArcCurve:Uo,CatmullRomCurve3:Fo,CubicBezierCurve:Js,CubicBezierCurve3:No,EllipseCurve:zr,LineCurve:Ks,LineCurve3:Oo,QuadraticBezierCurve:Qs,QuadraticBezierCurve3:zo,SplineCurve:js}),Bo=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new y0[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new y0[r.type]().fromJSON(r))}return this}},wi=class extends Bo{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ks(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Qs(this.currentPoint.clone(),new ee(e,t),new ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Js(this.currentPoint.clone(),new ee(e,t),new ee(i,r),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new js(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new zr(e,t,i,r,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yn=class extends wi{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new wi().fromJSON(r))}return this}};function I3(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=vd(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=F3(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,d=l;for(let u=t;u<r;u+=t){let f=n[u],x=n[u+1];f<o&&(o=f),x<l&&(l=x),f>h&&(h=f),x>d&&(d=x)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ea(s,a,t,o,l,c,0),a}function vd(n,e,t,i,r){let s;if(r===Y3(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Lu(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Lu(a/i|0,n[a],n[a+1],s);return s&&Br(s,s.next)&&(na(s),s=s.next),s}function ji(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Br(t,t.next)||vt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ea(n,e,t,i,r,s,a){if(!n)return;!a&&s&&k3(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?D3(n,i,r,s):P3(n)){e.push(l.i,n.i,c.i),na(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=L3(ji(n),e),ea(n,e,t,i,r,s,2)):a===2&&U3(n,e,t,i,r,s):ea(ji(n),e,t,i,r,s,1);break}}}function P3(n){let e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),d=Math.min(o,l,c),u=Math.max(r,s,a),f=Math.max(o,l,c),x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=d&&x.y<=f&&Rs(r,o,s,l,a,c,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function D3(n,e,t,i){let r=n.prev,s=n,a=n.next;if(vt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,f=Math.min(o,l,c),x=Math.min(h,d,u),g=Math.max(o,l,c),m=Math.max(h,d,u),p=q0(f,x,e,t,i),y=q0(g,m,e,t,i),b=n.prevZ,E=n.nextZ;for(;b&&b.z>=p&&E&&E.z<=y;){if(b.x>=f&&b.x<=g&&b.y>=x&&b.y<=m&&b!==r&&b!==a&&Rs(o,h,l,d,c,u,b.x,b.y)&&vt(b.prev,b,b.next)>=0||(b=b.prevZ,E.x>=f&&E.x<=g&&E.y>=x&&E.y<=m&&E!==r&&E!==a&&Rs(o,h,l,d,c,u,E.x,E.y)&&vt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=g&&b.y>=x&&b.y<=m&&b!==r&&b!==a&&Rs(o,h,l,d,c,u,b.x,b.y)&&vt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;E&&E.z<=y;){if(E.x>=f&&E.x<=g&&E.y>=x&&E.y<=m&&E!==r&&E!==a&&Rs(o,h,l,d,c,u,E.x,E.y)&&vt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function L3(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Br(i,r)&&yd(i,t,t.next,r)&&ta(i,r)&&ta(r,i)&&(e.push(i.i,t.i,r.i),na(t),na(t.next),t=n=r),t=t.next}while(t!==n);return ji(t)}function U3(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&G3(a,o)){let l=qd(a,o);a=ji(a,a.next),l=ji(l,l.next),ea(a,e,t,i,r,s,0),ea(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function F3(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=vd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(V3(c))}r.sort(N3);for(let s=0;s<r.length;s++)t=O3(r[s],t);return t}function N3(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function O3(n,e){let t=z3(n,e);if(!t)return e;let i=qd(t,n);return ji(i,i.next),ji(t,t.next)}function z3(n,e){let t=e,i=n.x,r=n.y,s=-1/0,a;if(Br(n,t))return t;do{if(Br(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&bd(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);ta(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&B3(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function B3(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function k3(n,e,t,i){let r=n;do r.z===0&&(r.z=q0(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,H3(r)}function H3(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function q0(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function V3(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function bd(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Rs(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&bd(n,e,t,i,r,s,a,o)}function G3(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!W3(n,e)&&(ta(n,e)&&ta(e,n)&&X3(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||Br(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Br(n,e){return n.x===e.x&&n.y===e.y}function yd(n,e,t,i){let r=qo(vt(n,e,t)),s=qo(vt(n,e,i)),a=qo(vt(t,i,n)),o=qo(vt(t,i,e));return!!(r!==s&&a!==o||r===0&&yo(n,t,e)||s===0&&yo(n,i,e)||a===0&&yo(t,n,i)||o===0&&yo(t,e,i))}function yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qo(n){return n>0?1:n<0?-1:0}function W3(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&yd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ta(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function X3(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function qd(n,e){let t=M0(n.i,n.x,n.y),i=M0(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Lu(n,e,t,i){let r=M0(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function M0(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y3(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var S0=class{static triangulate(e,t,i=2){return I3(e,t,i)}},Ei=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Uu(e),Fu(i,e);let a=e.length;t.forEach(Uu);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Fu(i,t[l]);let o=S0.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Uu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Vn=class n extends Ft{constructor(e=new yn([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new rt(r,3)),this.setAttribute("uv",new rt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:$3,b,E=!1,C,S,A,P;p&&(b=p.getSpacedPoints(h),E=!0,u=!1,C=p.computeFrenetFrames(h,!1),S=new I,A=new I,P=new I),u||(m=0,f=0,x=0,g=0);let q=o.extractPoints(c),v=q.shape,R=q.holes;if(!Ei.isClockWise(v)){v=v.reverse();for(let Q=0,w=R.length;Q<w;Q++){let K=R[Q];Ei.isClockWise(K)&&(R[Q]=K.reverse())}}function B(Q){let K=10000000000000001e-36,ie=Q[0];for(let oe=1;oe<=Q.length;oe++){let te=oe%Q.length,Me=Q[te],de=Me.x-ie.x,ve=Me.y-ie.y,T=de*de+ve*ve,_=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(ie.x),Math.abs(ie.y)),F=K*_*_;if(T<=F){Q.splice(te,1),oe--;continue}ie=Me}}B(v),R.forEach(B);let H=R.length,G=v;for(let Q=0;Q<H;Q++){let w=R[Q];v=v.concat(w)}function X(Q,w,K){return w||Ye("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(w,K)}let re=v.length;function W(Q,w,K){let ie,oe,te,Me=Q.x-w.x,de=Q.y-w.y,ve=K.x-Q.x,T=K.y-Q.y,_=Me*Me+de*de,F=Me*T-de*ve;if(Math.abs(F)>Number.EPSILON){let V=Math.sqrt(_),Z=Math.sqrt(ve*ve+T*T),k=w.x-de/V,Ce=w.y+Me/V,fe=K.x-T/Z,Re=K.y+ve/Z,we=((fe-k)*T-(Re-Ce)*ve)/(Me*T-de*ve);ie=k+Me*we-Q.x,oe=Ce+de*we-Q.y;let j=ie*ie+oe*oe;if(j<=2)return new ee(ie,oe);te=Math.sqrt(j/2)}else{let V=!1;Me>Number.EPSILON?ve>Number.EPSILON&&(V=!0):Me<-Number.EPSILON?ve<-Number.EPSILON&&(V=!0):Math.sign(de)===Math.sign(T)&&(V=!0),V?(ie=-de,oe=Me,te=Math.sqrt(_)):(ie=Me,oe=de,te=Math.sqrt(_/2))}return new ee(ie/te,oe/te)}let se=[];for(let Q=0,w=G.length,K=w-1,ie=Q+1;Q<w;Q++,K++,ie++)K===w&&(K=0),ie===w&&(ie=0),se[Q]=W(G[Q],G[K],G[ie]);let le=[],Te,We=se.concat();for(let Q=0,w=H;Q<w;Q++){let K=R[Q];Te=[];for(let ie=0,oe=K.length,te=oe-1,Me=ie+1;ie<oe;ie++,te++,Me++)te===oe&&(te=0),Me===oe&&(Me=0),Te[ie]=W(K[ie],K[te],K[Me]);le.push(Te),We=We.concat(Te)}let Ze;if(m===0)Ze=Ei.triangulateShape(G,R);else{let Q=[],w=[];for(let K=0;K<m;K++){let ie=K/m,oe=f*Math.cos(ie*Math.PI/2),te=x*Math.sin(ie*Math.PI/2)+g;for(let Me=0,de=G.length;Me<de;Me++){let ve=X(G[Me],se[Me],te);Pe(ve.x,ve.y,-oe),ie===0&&Q.push(ve)}for(let Me=0,de=H;Me<de;Me++){let ve=R[Me];Te=le[Me];let T=[];for(let _=0,F=ve.length;_<F;_++){let V=X(ve[_],Te[_],te);Pe(V.x,V.y,-oe),ie===0&&T.push(V)}ie===0&&w.push(T)}}Ze=Ei.triangulateShape(Q,w)}let et=Ze.length,st=x+g;for(let Q=0;Q<re;Q++){let w=u?X(v[Q],We[Q],st):v[Q];E?(A.copy(C.normals[0]).multiplyScalar(w.x),S.copy(C.binormals[0]).multiplyScalar(w.y),P.copy(b[0]).add(A).add(S),Pe(P.x,P.y,P.z)):Pe(w.x,w.y,0)}for(let Q=1;Q<=h;Q++)for(let w=0;w<re;w++){let K=u?X(v[w],We[w],st):v[w];E?(A.copy(C.normals[Q]).multiplyScalar(K.x),S.copy(C.binormals[Q]).multiplyScalar(K.y),P.copy(b[Q]).add(A).add(S),Pe(P.x,P.y,P.z)):Pe(K.x,K.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){let w=Q/m,K=f*Math.cos(w*Math.PI/2),ie=x*Math.sin(w*Math.PI/2)+g;for(let oe=0,te=G.length;oe<te;oe++){let Me=X(G[oe],se[oe],ie);Pe(Me.x,Me.y,d+K)}for(let oe=0,te=R.length;oe<te;oe++){let Me=R[oe];Te=le[oe];for(let de=0,ve=Me.length;de<ve;de++){let T=X(Me[de],Te[de],ie);E?Pe(T.x,T.y+b[h-1].y,b[h-1].x+K):Pe(T.x,T.y,d+K)}}}Y(),J();function Y(){let Q=r.length/3;if(u){let w=0,K=re*w;for(let ie=0;ie<et;ie++){let oe=Ze[ie];Ae(oe[2]+K,oe[1]+K,oe[0]+K)}w=h+m*2,K=re*w;for(let ie=0;ie<et;ie++){let oe=Ze[ie];Ae(oe[0]+K,oe[1]+K,oe[2]+K)}}else{for(let w=0;w<et;w++){let K=Ze[w];Ae(K[2],K[1],K[0])}for(let w=0;w<et;w++){let K=Ze[w];Ae(K[0]+re*h,K[1]+re*h,K[2]+re*h)}}i.addGroup(Q,r.length/3-Q,0)}function J(){let Q=r.length/3,w=0;be(G,w),w+=G.length;for(let K=0,ie=R.length;K<ie;K++){let oe=R[K];be(oe,w),w+=oe.length}i.addGroup(Q,r.length/3-Q,1)}function be(Q,w){let K=Q.length;for(;--K>=0;){let ie=K,oe=K-1;oe<0&&(oe=Q.length-1);for(let te=0,Me=h+m*2;te<Me;te++){let de=re*te,ve=re*(te+1),T=w+ie+de,_=w+oe+de,F=w+oe+ve,V=w+ie+ve;Xe(T,_,F,V)}}}function Pe(Q,w,K){l.push(Q),l.push(w),l.push(K)}function Ae(Q,w,K){ht(Q),ht(w),ht(K);let ie=r.length/3,oe=y.generateTopUV(i,r,ie-3,ie-2,ie-1);Ne(oe[0]),Ne(oe[1]),Ne(oe[2])}function Xe(Q,w,K,ie){ht(Q),ht(w),ht(ie),ht(w),ht(K),ht(ie);let oe=r.length/3,te=y.generateSideWallUV(i,r,oe-6,oe-3,oe-2,oe-1);Ne(te[0]),Ne(te[1]),Ne(te[3]),Ne(te[1]),Ne(te[2]),Ne(te[3])}function ht(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function Ne(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Z3(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new y0[r.type]().fromJSON(r)),new n(i,e.options)}},$3={generateTopUV:function(n,e,t,i,r){let s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ee(s,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[r*3],f=e[r*3+1],x=e[r*3+2],g=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-d),new ee(u,1-x),new ee(g,1-p)]:[new ee(o,1-l),new ee(h,1-d),new ee(f,1-x),new ee(m,1-p)]}};function Z3(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kt=class n extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*u-a;for(let b=0;b<c;b++){let E=b*d-s;x.push(E,-y,0),g.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+c*p,E=y+c*(p+1),C=y+1+c*(p+1),S=y+1+c*p;f.push(b,E,S),f.push(E,C,S)}this.setIndex(f),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ia=class n extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/r,f=new I,x=new ee;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){let p=s+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}d+=u}for(let g=0;g<r;g++){let m=g*(i+1);for(let p=0;p<i;p++){let y=p+m,b=y,E=y+i+1,C=y+i+2,S=y+1;o.push(b,E,S),o.push(E,C,S)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var er=class n extends Ft{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],x=[],g=[],m=[];for(let p=0;p<=i;p++){let y=[],b=p/i,E=0;p===0&&a===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){let S=C/t;d.x=-e*Math.cos(r+S*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+S*s)*Math.sin(a+b*o),x.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(S+E,1-b),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let b=h[p][y+1],E=h[p][y],C=h[p+1][y],S=h[p+1][y+1];(p!==0||a>0)&&f.push(b,E,S),(p!==i-1||l<Math.PI)&&f.push(E,C,S)}this.setIndex(f),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gn=class n extends Ft{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=i;f++)for(let x=0;x<=r;x++){let g=x/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(x/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=r;x++){let g=(r+1)*f+x-1,m=(r+1)*(f-1)+x-1,p=(r+1)*(f-1)+x,y=(r+1)*f+x;a.push(g,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ra=class extends Hn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},sa=class extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nt=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var aa=class extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kr=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function J3(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var tr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ho=class extends tr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:x0,endingEnd:x0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case g0:s=e,o=2*t-i;break;case _0:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case g0:a=e,l=2*i-t;break;case _0:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(i-t)/(r-t),g=x*x,m=g*x,p=-u*m+2*u*g-u*x,y=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,b=(-1-f)*m+(1.5+f)*g+.5*x,E=f*m-f*g;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+y*a[c+C]+b*a[l+C]+E*a[d+C];return s}},Vo=class extends tr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Go=class extends tr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ho(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Ao:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&J3(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===So,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let x=0;x!==i;++x){let g=t[d+x];if(g!==t[u+x]||g!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Ao;var Ai=class extends fn{constructor(e,t,i){super(e,t,i)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Ds;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}};Wo.prototype.ValueTypeName="color";var Xo=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}};Xo.prototype.ValueTypeName="number";var Yo=class extends tr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)ai.slerpFlat(s,0,a,c-o,a,c,l);return s}},oa=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends fn{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ds;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}};$o.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Md=new Zo,la=class{constructor(e){this.manager=e!==void 0?e:Md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};la.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ir=class extends nr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},p0=new it,Nu=new I,Ou=new I,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),p0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p0,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(p0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},E0=class extends ca{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ns*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ha=class extends nr{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new E0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zu=new it,Cs=new I,m0=new I,T0=class extends ca{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),m0.copy(i.position),m0.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(m0),i.updateMatrixWorld(),r.makeTranslation(-Cs.x,-Cs.y,-Cs.z),zu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu,i.coordinateSystem,i.reversedDepth)}},rr=class extends nr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new T0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sr=class extends Hs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},w0=class extends ca{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Jo=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ua=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var X0="\\[\\]\\.:\\/",K3=new RegExp("["+X0+"]","g"),Y0="[^"+X0+"]",Q3="[^"+X0.replace("\\.","")+"]",j3=/((?:WC+[\/:])*)/.source.replace("WC",Y0),ep=/(WCOD+)?/.source.replace("WCOD",Q3),tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Y0),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Y0),ip=new RegExp("^"+j3+ep+tp+np+"$"),rp=["material","materials","bones","map"],A0=class{constructor(e,t,i){let r=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K3,"")}static parseTrackName(e){let t=ip.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);rp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=A0;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L7=new Float32Array(1);var da=class{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new wi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,a){return this.currentPath.bezierCurveTo(e,t,i,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let y=[];for(let b=0,E=p.length;b<E;b++){let C=p[b],S=new yn;S.curves=C.curves,y.push(S)}return y}function i(p,y){let b=y.length,E=!1;for(let C=b-1,S=0;S<b;C=S++){let A=y[C],P=y[S],q=P.x-A.x,v=P.y-A.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(A=y[S],q=-q,P=y[C],v=-v),p.y<A.y||p.y>P.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{let R=v*(p.x-A.x)-q*(p.y-A.y);if(R===0)return!0;if(R<0)continue;E=!E}}else{if(p.y!==A.y)continue;if(P.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=P.x)return!0}}return E}let r=Ei.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l,c=[];if(s.length===1)return o=s[0],l=new yn,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;let d=[],u=[],f=[],x=0,g;u[x]=void 0,f[x]=[];for(let p=0,y=s.length;p<y;p++)o=s[p],g=o.getPoints(),a=r(g),a=e?!a:a,a?(!h&&u[x]&&x++,u[x]={s:new yn,p:g},u[x].s.curves=o.curves,h&&x++,f[x]=[]):f[x].push({h:o,p:g[0]});if(!u[0])return t(s);if(u.length>1){let p=!1,y=0;for(let b=0,E=u.length;b<E;b++)d[b]=[];for(let b=0,E=u.length;b<E;b++){let C=f[b];for(let S=0;S<C.length;S++){let A=C[S],P=!0;for(let q=0;q<u.length;q++)i(A.p,u[q].p)&&(b!==q&&y++,P?(P=!1,d[q].push(A)):p=!0);P&&d[b].push(A)}}y>0&&p===!1&&(f=d)}let m;for(let p=0,y=u.length;p<y;p++){l=u[p].s,c.push(l),m=f[p];for(let b=0,E=m.length;b<E;b++)l.holes.push(m[b].h)}return c}};function $0(n,e,t,i){let r=sp(i);switch(t){case O0:return n*e;case gl:return n*e/r.components*r.byteLength;case _l:return n*e/r.components*r.byteLength;case vl:return n*e*2/r.components*r.byteLength;case bl:return n*e*2/r.components*r.byteLength;case z0:return n*e*3/r.components*r.byteLength;case En:return n*e*4/r.components*r.byteLength;case yl:return n*e*4/r.components*r.byteLength;case xa:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:case El:return Math.max(n,16)*Math.max(e,8)/4;case ql:case Sl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Gl:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xl:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $l:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sp(n){switch(n){case Un:case L0:return{byteLength:1,components:1};case Wr:case U0:case At:return{byteLength:2,components:1};case ml:case xl:return{byteLength:2,components:4};case Ri:case pl:case Fn:return{byteLength:4,components:1};case F0:case N0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Xd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cp(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],g=d[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let g=d[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t2=`uniform bool receiveShadow;
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
#endif`,n2=`#ifdef USE_ENVMAP
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
#endif`,i2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o2=`PhysicalMaterial material;
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
#endif`,l2=`uniform sampler2D dfgLUT;
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
}`,c2=`
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
#endif`,h2=`#if defined( RE_IndirectDiffuse )
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
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v2=`#if defined( USE_POINTS_UV )
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
#endif`,b2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
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
#endif`,T2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P2=`#ifdef USE_NORMALMAP
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
#endif`,D2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$2=`float getShadowMask() {
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
}`,Z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J2=`#ifdef USE_SKINNING
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
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q2=`#ifdef USE_SKINNING
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
#endif`,j2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,_m=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Am=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:dp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:xp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:bp,beginnormal_vertex:yp,bsdfs:qp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ap,color_fragment:Cp,color_pars_fragment:Rp,color_pars_vertex:Ip,color_vertex:Pp,common:Dp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Fp,displacementmap_vertex:Np,emissivemap_fragment:Op,emissivemap_pars_fragment:zp,colorspace_fragment:Bp,colorspace_pars_fragment:kp,envmap_fragment:Hp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:n2,envmap_vertex:Xp,fog_vertex:Yp,fog_pars_vertex:$p,fog_fragment:Zp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:e2,lights_pars_begin:t2,lights_toon_fragment:i2,lights_toon_pars_fragment:r2,lights_phong_fragment:s2,lights_phong_pars_fragment:a2,lights_physical_fragment:o2,lights_physical_pars_fragment:l2,lights_fragment_begin:c2,lights_fragment_maps:h2,lights_fragment_end:u2,logdepthbuf_fragment:d2,logdepthbuf_pars_fragment:f2,logdepthbuf_pars_vertex:p2,logdepthbuf_vertex:m2,map_fragment:x2,map_pars_fragment:g2,map_particle_fragment:_2,map_particle_pars_fragment:v2,metalnessmap_fragment:b2,metalnessmap_pars_fragment:y2,morphinstance_vertex:q2,morphcolor_vertex:M2,morphnormal_vertex:S2,morphtarget_pars_vertex:E2,morphtarget_vertex:T2,normal_fragment_begin:w2,normal_fragment_maps:A2,normal_pars_fragment:C2,normal_pars_vertex:R2,normal_vertex:I2,normalmap_pars_fragment:P2,clearcoat_normal_fragment_begin:D2,clearcoat_normal_fragment_maps:L2,clearcoat_pars_fragment:U2,iridescence_pars_fragment:F2,opaque_fragment:N2,packing:O2,premultiplied_alpha_fragment:z2,project_vertex:B2,dithering_fragment:k2,dithering_pars_fragment:H2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:G2,shadowmap_pars_fragment:W2,shadowmap_pars_vertex:X2,shadowmap_vertex:Y2,shadowmask_pars_fragment:$2,skinbase_vertex:Z2,skinning_pars_vertex:J2,skinning_vertex:K2,skinnormal_vertex:Q2,specularmap_fragment:j2,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:rm,uv_pars_fragment:sm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:xm,distanceRGBA_vert:gm,distanceRGBA_frag:_m,equirect_vert:vm,equirect_frag:bm,linedashed_vert:ym,linedashed_frag:qm,meshbasic_vert:Mm,meshbasic_frag:Sm,meshlambert_vert:Em,meshlambert_frag:Tm,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Cm,meshnormal_frag:Rm,meshphong_vert:Im,meshphong_frag:Pm,meshphysical_vert:Dm,meshphysical_frag:Lm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Nm,points_frag:Om,shadow_vert:zm,shadow_frag:Bm,sprite_vert:km,sprite_frag:Hm},pe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yn={basic:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ht([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ht([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ht([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ht([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ht([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ht([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ht([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ht([pe.lights,pe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Yn.physical={uniforms:Ht([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ql={r:0,b:0,g:0},hr=new qn,Vm=new it;function Gm(n,e,t,i,r,s,a){let o=new xe(0),l=s===!0?0:1,c,h,d=null,u=0,f=null;function x(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function g(b){let E=!1,C=x(b);C===null?p(o,l):C&&C.isColor&&(p(C,1),E=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){let C=x(E);C&&(C.isCubeTexture||C.mapping===pa)?(h===void 0&&(h=new qe(new un(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:cr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hr.copy(E.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(hr)),h.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,(d!==C||u!==C.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new qe(new kt(2,2),new ct({name:"BackgroundMaterial",uniforms:cr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(C.colorSpace)!==tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(Ql,G0(n)),i.buffers.color.setClear(Ql.r,Ql.g,Ql.b,E,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:g,addToRenderList:m,dispose:y}}function Wm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,a=!1;function o(v,R,N,B,H){let G=!1,X=d(B,N,R);s!==X&&(s=X,c(s.object)),G=f(v,B,N,H),G&&x(v,B,N,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(v,R,N,B),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,R,N){let B=N.wireframe===!0,H=i[v.id];H===void 0&&(H={},i[v.id]=H);let G=H[R.id];G===void 0&&(G={},H[R.id]=G);let X=G[B];return X===void 0&&(X=u(l()),G[B]=X),X}function u(v){let R=[],N=[],B=[];for(let H=0;H<t;H++)R[H]=0,N[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,R,N,B){let H=s.attributes,G=R.attributes,X=0,re=N.getAttributes();for(let W in re)if(re[W].location>=0){let le=H[W],Te=G[W];if(Te===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Te=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Te=v.instanceColor)),le===void 0||le.attribute!==Te||Te&&le.data!==Te.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function x(v,R,N,B){let H={},G=R.attributes,X=0,re=N.getAttributes();for(let W in re)if(re[W].location>=0){let le=G[W];le===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));let Te={};Te.attribute=le,le&&le.data&&(Te.data=le.data),H[W]=Te,X++}s.attributes=H,s.attributesNum=X,s.index=B}function g(){let v=s.newAttributes;for(let R=0,N=v.length;R<N;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){let N=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;N[v]=1,B[v]===0&&(n.enableVertexAttribArray(v),B[v]=1),H[v]!==R&&(n.vertexAttribDivisor(v,R),H[v]=R)}function y(){let v=s.newAttributes,R=s.enabledAttributes;for(let N=0,B=R.length;N<B;N++)R[N]!==v[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function b(v,R,N,B,H,G,X){X===!0?n.vertexAttribIPointer(v,R,N,H,G):n.vertexAttribPointer(v,R,N,B,H,G)}function E(v,R,N,B){g();let H=B.attributes,G=N.getAttributes(),X=R.defaultAttributeValues;for(let re in G){let W=G[re];if(W.location>=0){let se=H[re];if(se===void 0&&(re==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),re==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){let le=se.normalized,Te=se.itemSize,We=e.get(se);if(We===void 0)continue;let Ze=We.buffer,et=We.type,st=We.bytesPerElement,Y=et===n.INT||et===n.UNSIGNED_INT||se.gpuType===pl;if(se.isInterleavedBufferAttribute){let J=se.data,be=J.stride,Pe=se.offset;if(J.isInstancedInterleavedBuffer){for(let Ae=0;Ae<W.locationSize;Ae++)p(W.location+Ae,J.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)m(W.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Ae=0;Ae<W.locationSize;Ae++)b(W.location+Ae,Te/W.locationSize,et,le,be*st,(Pe+Te/W.locationSize*Ae)*st,Y)}else{if(se.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,se.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let J=0;J<W.locationSize;J++)b(W.location+J,Te/W.locationSize,et,le,Te*st,Te/W.locationSize*J*st,Y)}}else if(X!==void 0){let le=X[re];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(W.location,le);break;case 3:n.vertexAttrib3fv(W.location,le);break;case 4:n.vertexAttrib4fv(W.location,le);break;default:n.vertexAttrib1fv(W.location,le)}}}}y()}function C(){P();for(let v in i){let R=i[v];for(let N in R){let B=R[N];for(let H in B)h(B[H].object),delete B[H];delete R[N]}delete i[v]}}function S(v){if(i[v.id]===void 0)return;let R=i[v.id];for(let N in R){let B=R[N];for(let H in B)h(B[H].object),delete B[H];delete R[N]}delete i[v.id]}function A(v){for(let R in i){let N=i[R];if(N[v.id]===void 0)continue;let B=N[v.id];for(let H in B)h(B[H].object),delete B[H];delete N[v.id]}}function P(){q(),a=!0,s!==r&&(s=r,c(s.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Xm(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g]*u[g];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ym(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==En&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===At&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Un&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:C,maxSamples:S}}function $m(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Jt,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?h(null):c();else{let y=s?0:i,b=y*4,E=p.clippingState||null;l.value=E,E=h(x,u,b,f);for(let C=0;C!==b;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,x){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let p=f+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,E=f;b!==g;++b,E+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Zm(n){let e=new WeakMap;function t(a,o){return o===ul?a.mapping=or:o===dl&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ul||o===dl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Lo(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ii=4,Sd=[.125,.215,.35,.446,.526,.582],dr=20,Jm=256,ba=new sr,Ed=new xe,Z0=null,J0=0,K0=0,Q0=!1,Km=new I,Pi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Km}=s;Z0=this._renderer.getRenderTarget(),J0=this._renderer.getActiveCubeFace(),K0=this._renderer.getActiveMipmapLevel(),Q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Z0,J0,K0),this._renderer.xr.enabled=Q0,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Z0=this._renderer.getRenderTarget(),J0=this._renderer.getActiveCubeFace(),K0=this._renderer.getActiveMipmapLevel(),Q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:At,format:En,colorSpace:Ki,depthBuffer:!1},r=Td(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qm(s)),this._blurMaterial=e4(s,e,t),this._ggxMaterial=jm(s,e,t)}return r}_compileMaterial(e){let t=new qe(new Ft,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,r,s){let l=new wt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ed),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new un,new hn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Ed),p=!0);for(let b=0;b<6;b++){let E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let C=this._cubeSize;Zr(r,E*C,b>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(g,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===or||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ba)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=.05+c*.95,f=d*u,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-Ii?i-x+Ii:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,Zr(s,m,p,3*g,2*g),r.setRenderTarget(s),r.render(o,ba),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Zr(e,m,p,3*g,2*g),r.setRenderTarget(e),r.render(o,ba)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[r];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*dr-1),g=s/x,m=isFinite(s)?1+Math.floor(h*g):dr;m>dr&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);let p=[],y=0;for(let A=0;A<dr;++A){let P=A/g,q=Math.exp(-P*P/2);p.push(q),A===0?y+=q:A<m&&(y+=2*q)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=x,u.mipInt.value=b-i;let E=this._sizeLods[r],C=3*E*(r>b-Ii?r-b+Ii:0),S=4*(this._cubeSize-E);Zr(t,C,S,3*E,2*E),l.setRenderTarget(t),l.render(d,ba)}};function Qm(n){let e=[],t=[],i=[],r=n,s=n-Ii+1+Sd.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ii?l=Sd[a-n+Ii-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,g=3,m=2,p=1,y=new Float32Array(g*x*f),b=new Float32Array(m*x*f),E=new Float32Array(p*x*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,P=S>2?0:-1,q=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(q,g*x*S),b.set(u,m*x*S);let v=[S,S,S,S,S,S];E.set(v,p*x*S)}let C=new Ft;C.setAttribute("position",new Kt(y,g)),C.setAttribute("uv",new Kt(b,m)),C.setAttribute("faceIndex",new Kt(E,p)),i.push(new qe(C,null)),r>Ii&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Td(n,e,t){let i=new bt(n,e,t);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jm(n,e,t){return new ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function e4(n,e,t){let i=new Float32Array(dr),r=new I(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function wd(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Ad(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function t4(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ul||l===dl,h=l===or||l===lr;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Pi(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Pi(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function n4(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Lr("WebGLRenderer: "+i+" extension not supported."),r}}}function i4(n,e,t,i){let r={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,x=d.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let b=0,E=y.length;b<E;b+=3){let C=y[b+0],S=y[b+1],A=y[b+2];u.push(C,S,S,A,A,C)}}else if(x!==void 0){let y=x.array;g=x.version;for(let b=0,E=y.length/3-1;b<E;b+=3){let C=b+0,S=b+1,A=b+2;u.push(C,S,S,A,A,C)}}else return;let m=new(H0(u)?ks:Bs)(u,1);m.version=g;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function r4(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,s,u*a),t.update(f,i,1)}function c(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,s,u*a,x),t.update(f,i,x))}function h(u,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,i,1)}function d(u,f,x,g){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,g,0,x);let p=0;for(let y=0;y<x;y++)p+=f[y]*g[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function s4(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function a4(n,e,t){let i=new WeakMap,r=new at;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let q=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",q)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;f===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let E=o.attributes.position.count*b,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let S=new Float32Array(E*C*4*d),A=new Os(S,E,C,d);A.type=Fn,A.needsUpdate=!0;let P=b*4;for(let v=0;v<d;v++){let R=m[v],N=p[v],B=y[v],H=E*C*4*v;for(let G=0;G<R.count;G++){let X=G*P;f===!0&&(r.fromBufferAttribute(R,G),S[H+X+0]=r.x,S[H+X+1]=r.y,S[H+X+2]=r.z,S[H+X+3]=0),x===!0&&(r.fromBufferAttribute(N,G),S[H+X+4]=r.x,S[H+X+5]=r.y,S[H+X+6]=r.z,S[H+X+7]=0),g===!0&&(r.fromBufferAttribute(B,G),S[H+X+8]=r.x,S[H+X+9]=r.y,S[H+X+10]=r.z,S[H+X+11]=B.itemSize===4?r.w:1)}}u={count:d,texture:A,size:new ee(E,C)},i.set(o,u),o.addEventListener("dispose",q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function o4(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var Yd=new Lt,Cd=new Ys(1,1),$d=new Os,Zd=new Io,Jd=new Vs,Rd=[],Id=[],Pd=new Float32Array(16),Dd=new Float32Array(9),Ld=new Float32Array(4);function Qr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Rd[r];if(s===void 0&&(s=new Float32Array(r),Rd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tc(n,e){let t=Id[e];t===void 0&&(t=new Int32Array(e),Id[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function h4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function u4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function d4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,i))return;Ld.set(i),n.uniformMatrix2fv(this.addr,!1,Ld),Pt(t,i)}}function f4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),Pt(t,i)}}function p4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,i))return;Pd.set(i),n.uniformMatrix4fv(this.addr,!1,Pd),Pt(t,i)}}function m4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function g4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function _4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function v4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function y4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function q4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function M4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cd.compareFunction=B0,s=Cd):s=Yd,t.setTexture2D(e||s,r)}function S4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zd,r)}function E4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jd,r)}function T4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$d,r)}function w4(n){switch(n){case 5126:return l4;case 35664:return c4;case 35665:return h4;case 35666:return u4;case 35674:return d4;case 35675:return f4;case 35676:return p4;case 5124:case 35670:return m4;case 35667:case 35671:return x4;case 35668:case 35672:return g4;case 35669:case 35673:return _4;case 5125:return v4;case 36294:return b4;case 36295:return y4;case 36296:return q4;case 35678:case 36198:case 36298:case 36306:case 35682:return M4;case 35679:case 36299:case 36307:return S4;case 35680:case 36300:case 36308:case 36293:return E4;case 36289:case 36303:case 36311:case 36292:return T4}}function A4(n,e){n.uniform1fv(this.addr,e)}function C4(n,e){let t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function R4(n,e){let t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function I4(n,e){let t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function P4(n,e){let t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D4(n,e){let t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L4(n,e){let t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U4(n,e){n.uniform1iv(this.addr,e)}function F4(n,e){n.uniform2iv(this.addr,e)}function N4(n,e){n.uniform3iv(this.addr,e)}function O4(n,e){n.uniform4iv(this.addr,e)}function z4(n,e){n.uniform1uiv(this.addr,e)}function B4(n,e){n.uniform2uiv(this.addr,e)}function k4(n,e){n.uniform3uiv(this.addr,e)}function H4(n,e){n.uniform4uiv(this.addr,e)}function V4(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yd,s[a])}function G4(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Zd,s[a])}function W4(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Jd,s[a])}function X4(n,e,t){let i=this.cache,r=e.length,s=tc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$d,s[a])}function Y4(n){switch(n){case 5126:return A4;case 35664:return C4;case 35665:return R4;case 35666:return I4;case 35674:return P4;case 35675:return D4;case 35676:return L4;case 5124:case 35670:return U4;case 35667:case 35671:return F4;case 35668:case 35672:return N4;case 35669:case 35673:return O4;case 5125:return z4;case 36294:return B4;case 36295:return k4;case 36296:return H4;case 35678:case 36198:case 36298:case 36306:case 35682:return V4;case 35679:case 36299:case 36307:return G4;case 35680:case 36300:case 36308:case 36293:return W4;case 36289:case 36303:case 36311:case 36292:return X4}}var eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w4(t.type)}},th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y4(t.type)}},nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},j0=/(\w+)(\])?(\[|\.)?/g;function Ud(n,e){n.seq.push(e),n.map[e.id]=e}function $4(n,e,t){let i=n.name,r=i.length;for(j0.lastIndex=0;;){let s=j0.exec(i),a=j0.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ud(t,c===void 0?new eh(o,n,e):new th(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new nh(o),Ud(t,d)),t=d}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);$4(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Fd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Z4=37297,J4=0;function K4(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Nd=new Ge;function Q4(n){Ke._getMatrix(Nd,Ke.workingColorSpace,n);let e=`mat3( ${Nd.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Ls:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Od(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+K4(n.getShaderSource(e),o)}else return s}function j4(n,e){let t=Q4(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e5(n,e){let t;switch(e){case Vr:t="Linear";break;case al:t="Reinhard";break;case ol:t="Cineon";break;case ll:t="ACESFilmic";break;case hl:t="AgX";break;case Gr:t="Neutral";break;case cl:t="Custom";break;default:Be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new I;function t5(){Ke.getLuminanceCoefficients(jl);let n=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n5(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function i5(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r5(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ya(n){return n!==""}function zd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var s5=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(n){return n.replace(s5,o5)}var a5=new Map;function o5(n,e){let t=Ve[e];if(t===void 0){let i=a5.get(e);if(i!==void 0)t=Ve[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ih(t)}var l5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(n){return n.replace(l5,c5)}function c5(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function h5(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ar?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function u5(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case lr:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d5(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function f5(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case rd:e="ENVMAP_BLENDING_MIX";break;case sd:e="ENVMAP_BLENDING_ADD";break}return e}function p5(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function m5(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=h5(t),c=u5(t),h=d5(t),d=f5(t),u=p5(t),f=n5(t),x=i5(s),g=r.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ya).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(m=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ve.tonemapping_pars_fragment:"",t.toneMapping!==li?e5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,j4("linearToOutputTexel",t.outputColorSpace),t5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=ih(a),a=zd(a,t),a=Bd(a,t),o=ih(o),o=zd(o,t),o=Bd(o,t),a=kd(a),o=kd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+a,E=y+p+o,C=Fd(r,r.VERTEX_SHADER,b),S=Fd(r,r.FRAGMENT_SHADER,E);r.attachShader(g,C),r.attachShader(g,S),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(R){if(n.debug.checkShaderErrors){let N=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(S)||"",G=N.trim(),X=B.trim(),re=H.trim(),W=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,S);else{let le=Od(r,C,"vertex"),Te=Od(r,S,"fragment");Ye("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+le+`
`+Te)}else G!==""?Be("WebGLProgram: Program Info Log:",G):(X===""||re==="")&&(se=!1);se&&(R.diagnostics={runnable:W,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:re,prefix:p}})}r.deleteShader(C),r.deleteShader(S),P=new Jr(r,g),q=r5(r,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let q;this.getAttributes=function(){return q===void 0&&A(this),q};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,Z4)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J4++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=S,this}var x5=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sh(e),t.set(e,i)),i}},sh=class{constructor(e){this.id=x5++,this.code=e,this.usedTimes=0}};function g5(n,e,t,i,r,s,a){let o=new zs,l=new rh,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,f=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(q){return c.add(q),q===0?"uv":`uv${q}`}function m(q,v,R,N,B){let H=N.fog,G=B.geometry,X=q.isMeshStandardMaterial?N.environment:null,re=(q.isMeshStandardMaterial?t:e).get(q.envMap||X),W=re&&re.mapping===pa?re.image.height:null,se=x[q.type];q.precision!==null&&(f=r.getMaxPrecision(q.precision),f!==q.precision&&Be("WebGLProgram.getParameters:",q.precision,"not supported, using",f,"instead."));let le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=le!==void 0?le.length:0,We=0;G.morphAttributes.position!==void 0&&(We=1),G.morphAttributes.normal!==void 0&&(We=2),G.morphAttributes.color!==void 0&&(We=3);let Ze,et,st,Y;if(se){let ot=Yn[se];Ze=ot.vertexShader,et=ot.fragmentShader}else Ze=q.vertexShader,et=q.fragmentShader,l.update(q),st=l.getVertexShaderID(q),Y=l.getFragmentShaderID(q);let J=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Pe=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,Xe=!!q.map,ht=!!q.matcap,Ne=!!re,Q=!!q.aoMap,w=!!q.lightMap,K=!!q.bumpMap,ie=!!q.normalMap,oe=!!q.displacementMap,te=!!q.emissiveMap,Me=!!q.metalnessMap,de=!!q.roughnessMap,ve=q.anisotropy>0,T=q.clearcoat>0,_=q.dispersion>0,F=q.iridescence>0,V=q.sheen>0,Z=q.transmission>0,k=ve&&!!q.anisotropyMap,Ce=T&&!!q.clearcoatMap,fe=T&&!!q.clearcoatNormalMap,Re=T&&!!q.clearcoatRoughnessMap,we=F&&!!q.iridescenceMap,j=F&&!!q.iridescenceThicknessMap,ce=V&&!!q.sheenColorMap,Fe=V&&!!q.sheenRoughnessMap,Le=!!q.specularMap,_e=!!q.specularColorMap,ze=!!q.specularIntensityMap,D=Z&&!!q.transmissionMap,me=Z&&!!q.thicknessMap,he=!!q.gradientMap,ue=!!q.alphaMap,ne=q.alphaTest>0,$=!!q.alphaHash,Se=!!q.extensions,He=li;q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=n.toneMapping);let pt={shaderID:se,shaderType:q.type,shaderName:q.name,vertexShader:Ze,fragmentShader:et,defines:q.defines,customVertexShaderID:st,customFragmentShaderID:Y,isRawShaderMaterial:q.isRawShaderMaterial===!0,glslVersion:q.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ki,alphaToCoverage:!!q.alphaToCoverage,map:Xe,matcap:ht,envMap:Ne,envMapMode:Ne&&re.mapping,envMapCubeUVHeight:W,aoMap:Q,lightMap:w,bumpMap:K,normalMap:ie,displacementMap:u&&oe,emissiveMap:te,normalMapObjectSpace:ie&&q.normalMapType===ld,normalMapTangentSpace:ie&&q.normalMapType===Kl,metalnessMap:Me,roughnessMap:de,anisotropy:ve,anisotropyMap:k,clearcoat:T,clearcoatMap:Ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:_,iridescence:F,iridescenceMap:we,iridescenceThicknessMap:j,sheen:V,sheenColorMap:ce,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:_e,specularIntensityMap:ze,transmission:Z,transmissionMap:D,thicknessMap:me,gradientMap:he,opaque:q.transparent===!1&&q.blending===Zi&&q.alphaToCoverage===!1,alphaMap:ue,alphaTest:ne,alphaHash:$,combine:q.combine,mapUv:Xe&&g(q.map.channel),aoMapUv:Q&&g(q.aoMap.channel),lightMapUv:w&&g(q.lightMap.channel),bumpMapUv:K&&g(q.bumpMap.channel),normalMapUv:ie&&g(q.normalMap.channel),displacementMapUv:oe&&g(q.displacementMap.channel),emissiveMapUv:te&&g(q.emissiveMap.channel),metalnessMapUv:Me&&g(q.metalnessMap.channel),roughnessMapUv:de&&g(q.roughnessMap.channel),anisotropyMapUv:k&&g(q.anisotropyMap.channel),clearcoatMapUv:Ce&&g(q.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(q.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(q.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(q.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(q.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(q.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(q.sheenRoughnessMap.channel),specularMapUv:Le&&g(q.specularMap.channel),specularColorMapUv:_e&&g(q.specularColorMap.channel),specularIntensityMapUv:ze&&g(q.specularIntensityMap.channel),transmissionMapUv:D&&g(q.transmissionMap.channel),thicknessMapUv:me&&g(q.thicknessMap.channel),alphaMapUv:ue&&g(q.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ie||ve),vertexColors:q.vertexColors,vertexAlphas:q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Xe||ue),fog:!!H,useFog:q.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:q.flatShading===!0&&q.wireframe===!1,sizeAttenuation:q.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:We,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:q.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Xe&&q.map.isVideoTexture===!0&&Ke.getTransfer(q.map.colorSpace)===tt,decodeVideoTextureEmissive:te&&q.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(q.emissiveMap.colorSpace)===tt,premultipliedAlpha:q.premultipliedAlpha,doubleSided:q.side===Wn,flipSided:q.side===Rt,useDepthPacking:q.depthPacking>=0,depthPacking:q.depthPacking||0,index0AttributeName:q.index0AttributeName,extensionClipCullDistance:Se&&q.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&q.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:q.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(q){let v=[];if(q.shaderID?v.push(q.shaderID):(v.push(q.customVertexShaderID),v.push(q.customFragmentShaderID)),q.defines!==void 0)for(let R in q.defines)v.push(R),v.push(q.defines[R]);return q.isRawShaderMaterial===!1&&(y(v,q),b(v,q),v.push(n.outputColorSpace)),v.push(q.customProgramCacheKey),v.join()}function y(q,v){q.push(v.precision),q.push(v.outputColorSpace),q.push(v.envMapMode),q.push(v.envMapCubeUVHeight),q.push(v.mapUv),q.push(v.alphaMapUv),q.push(v.lightMapUv),q.push(v.aoMapUv),q.push(v.bumpMapUv),q.push(v.normalMapUv),q.push(v.displacementMapUv),q.push(v.emissiveMapUv),q.push(v.metalnessMapUv),q.push(v.roughnessMapUv),q.push(v.anisotropyMapUv),q.push(v.clearcoatMapUv),q.push(v.clearcoatNormalMapUv),q.push(v.clearcoatRoughnessMapUv),q.push(v.iridescenceMapUv),q.push(v.iridescenceThicknessMapUv),q.push(v.sheenColorMapUv),q.push(v.sheenRoughnessMapUv),q.push(v.specularMapUv),q.push(v.specularColorMapUv),q.push(v.specularIntensityMapUv),q.push(v.transmissionMapUv),q.push(v.thicknessMapUv),q.push(v.combine),q.push(v.fogExp2),q.push(v.sizeAttenuation),q.push(v.morphTargetsCount),q.push(v.morphAttributeCount),q.push(v.numDirLights),q.push(v.numPointLights),q.push(v.numSpotLights),q.push(v.numSpotLightMaps),q.push(v.numHemiLights),q.push(v.numRectAreaLights),q.push(v.numDirLightShadows),q.push(v.numPointLightShadows),q.push(v.numSpotLightShadows),q.push(v.numSpotLightShadowsWithMaps),q.push(v.numLightProbes),q.push(v.shadowMapType),q.push(v.toneMapping),q.push(v.numClippingPlanes),q.push(v.numClipIntersection),q.push(v.depthPacking)}function b(q,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),q.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),q.push(o.mask)}function E(q){let v=x[q.type],R;if(v){let N=Yn[v];R=Nn.clone(N.uniforms)}else R=q.uniforms;return R}function C(q,v){let R;for(let N=0,B=h.length;N<B;N++){let H=h[N];if(H.cacheKey===v){R=H,++R.usedTimes;break}}return R===void 0&&(R=new m5(n,v,q,s),h.push(R)),R}function S(q){if(--q.usedTimes===0){let v=h.indexOf(q);h[v]=h[h.length-1],h.pop(),q.destroy()}}function A(q){l.remove(q)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:P}}function _5(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function v5(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gd(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,u,f,x,g,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function o(d,u,f,x,g,m){let p=a(d,u,f,x,g,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,u,f,x,g,m){let p=a(d,u,f,x,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||v5),i.length>1&&i.sort(u||Vd),r.length>1&&r.sort(u||Vd)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function b5(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Gd,n.set(i,[a])):r>=s.length?(a=new Gd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function y5(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new xe};break;case"SpotLight":t={position:new I,direction:new I,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function q5(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var M5=0;function S5(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function E5(n){let e=new y5,t=q5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let r=new I,s=new it,a=new it;function o(c){let h=0,d=0,u=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,y=0,b=0,E=0,C=0,S=0,A=0;c.sort(S5);for(let q=0,v=c.length;q<v;q++){let R=c[q],N=R.color,B=R.intensity,H=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*B,d+=N.g*B,u+=N.b*B;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],B);A++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let re=R.shadow,W=t.get(R);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=R.shadow.matrix,y++}i.directional[f]=X,f++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(N).multiplyScalar(B),X.distance=H,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[g]=X;let re=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,re.updateMatrices(R),R.castShadow&&S++),i.spotLightMatrix[g]=re.matrix,R.castShadow){let W=t.get(R);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=G,E++}g++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(N).multiplyScalar(B),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=X,m++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let re=R.shadow,W=t.get(R);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,W.shadowCameraNear=re.camera.near,W.shadowCameraFar=re.camera.far,i.pointShadow[x]=W,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=R.shadow.matrix,b++}i.point[x]=X,x++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(B),X.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.directionalLength!==f||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==E||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+C-S,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,P.directionalLength=f,P.pointLength=x,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=E,P.numSpotMaps=C,P.numLightProbes=A,i.version=M5++)}function l(c,h){let d=0,u=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(b.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let E=i.point[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Wd(n){let e=new E5(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function T5(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Wd(n),e.set(r,[o])):s>=a.length?(o=new Wd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var w5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A5=`uniform sampler2D shadow_pass;
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
}`;function C5(n,e,t){let i=new Nr,r=new ee,s=new ee,a=new at,o=new kr({depthPacking:Jl}),l=new ko,c={},h=t.maxTextureSize,d={[Ln]:Rt,[Rt]:Ln,[Wn]:Wn},u=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:w5,fragmentShader:A5}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ft;x.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new qe(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R0;let p=this.type;this.render=function(S,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let q=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Qt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==Mn&&this.type===Mn,H=p===Mn&&this.type!==Mn;for(let G=0,X=S.length;G<X;G++){let re=S[G],W=re.shadow;if(W===void 0){Be("WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let se=W.getFrameExtents();if(r.multiply(se),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,W.mapSize.y=s.y)),W.map===null||B===!0||H===!0){let Te=this.type!==Mn?{minFilter:Ut,magFilter:Ut}:{};W.map!==null&&W.map.dispose(),W.map=new bt(r.x,r.y,Te),W.map.texture.name=re.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let le=W.getViewportCount();for(let Te=0;Te<le;Te++){let We=W.getViewport(Te);a.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),N.viewport(a),W.updateMatrices(re,Te),i=W.getFrustum(),E(A,P,W.camera,re,this.type)}W.isPointLightShadow!==!0&&this.type===Mn&&y(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(q,v,R)};function y(S,A){let P=e.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new bt(r.x,r.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,P,u,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,P,f,g,null)}function b(S,A,P,q){let v=null,R=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=v.uuid,B=A.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let G=H[B];G===void 0&&(G=v.clone(),H[B]=G,A.addEventListener("dispose",C)),v=G}if(v.visible=A.visible,v.wireframe=A.wireframe,q===Mn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=n.properties.get(v);N.light=P}return v}function E(S,A,P,q,v){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Mn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let B=e.update(S),H=S.material;if(Array.isArray(H)){let G=B.groups;for(let X=0,re=G.length;X<re;X++){let W=G[X],se=H[W.materialIndex];if(se&&se.visible){let le=b(S,se,q,v);S.onBeforeShadow(n,S,A,P,B,le,W),n.renderBufferDirect(P,null,B,le,S,W),S.onAfterShadow(n,S,A,P,B,le,W)}}}else if(H.visible){let G=b(S,H,q,v);S.onBeforeShadow(n,S,A,P,B,G,null),n.renderBufferDirect(P,null,B,G,S,null),S.onAfterShadow(n,S,A,P,B,G,null)}}let N=S.children;for(let B=0,H=N.length;B<H;B++)E(N[B],A,P,q,v)}function C(S){S.target.removeEventListener("dispose",C);for(let P in c){let q=c[P],v=S.target.uuid;v in q&&(q[v].dispose(),delete q[v])}}}var R5={[Qo]:jo,[el]:il,[tl]:rl,[Ji]:nl,[jo]:Qo,[il]:el,[rl]:tl,[nl]:Ji};function I5(n,e){function t(){let D=!1,me=new at,he=null,ue=new at(0,0,0,0);return{setMask:function(ne){he!==ne&&!D&&(n.colorMask(ne,ne,ne,ne),he=ne)},setLocked:function(ne){D=ne},setClear:function(ne,$,Se,He,pt){pt===!0&&(ne*=He,$*=He,Se*=He),me.set(ne,$,Se,He),ue.equals(me)===!1&&(n.clearColor(ne,$,Se,He),ue.copy(me))},reset:function(){D=!1,he=null,ue.set(-1,0,0,0)}}}function i(){let D=!1,me=!1,he=null,ue=null,ne=null;return{setReversed:function($){if(me!==$){let Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),me=$;let He=ne;ne=null,this.setClear(He)}},getReversed:function(){return me},setTest:function($){$?J(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function($){he!==$&&!D&&(n.depthMask($),he=$)},setFunc:function($){if(me&&($=R5[$]),ue!==$){switch($){case Qo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case el:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case tl:n.depthFunc(n.EQUAL);break;case nl:n.depthFunc(n.GEQUAL);break;case il:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=$}},setLocked:function($){D=$},setClear:function($){ne!==$&&(me&&($=1-$),n.clearDepth($),ne=$)},reset:function(){D=!1,he=null,ue=null,ne=null,me=!1}}}function r(){let D=!1,me=null,he=null,ue=null,ne=null,$=null,Se=null,He=null,pt=null;return{setTest:function(ot){D||(ot?J(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ot){me!==ot&&!D&&(n.stencilMask(ot),me=ot)},setFunc:function(ot,On,An){(he!==ot||ue!==On||ne!==An)&&(n.stencilFunc(ot,On,An),he=ot,ue=On,ne=An)},setOp:function(ot,On,An){($!==ot||Se!==On||He!==An)&&(n.stencilOp(ot,On,An),$=ot,Se=On,He=An)},setLocked:function(ot){D=ot},setClear:function(ot){pt!==ot&&(n.clearStencil(ot),pt=ot)},reset:function(){D=!1,me=null,he=null,ue=null,ne=null,$=null,Se=null,He=null,pt=null}}}let s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,y=null,b=null,E=null,C=null,S=null,A=new xe(0,0,0),P=0,q=!1,v=null,R=null,N=null,B=null,H=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,re=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=re>=1):W.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=re>=2);let se=null,le={},Te=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),Ze=new at().fromArray(Te),et=new at().fromArray(We);function st(D,me,he,ue){let ne=new Uint8Array(4),$=n.createTexture();n.bindTexture(D,$),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<he;Se++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(me+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return $}let Y={};Y[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(Ji),K(!1),ie(C0),J(n.CULL_FACE),Q(Qt);function J(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function be(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Pe(D,me){return d[D]!==me?(n.bindFramebuffer(D,me),d[D]=me,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ae(D,me){let he=f,ue=!1;if(D){he=u.get(me),he===void 0&&(he=[],u.set(me,he));let ne=D.textures;if(he.length!==ne.length||he[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Se=ne.length;$<Se;$++)he[$]=n.COLOR_ATTACHMENT0+$;he.length=ne.length,ue=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,ue=!0);ue&&n.drawBuffers(he)}function Xe(D){return x!==D?(n.useProgram(D),x=D,!0):!1}let ht={[kn]:n.FUNC_ADD,[Hu]:n.FUNC_SUBTRACT,[Vu]:n.FUNC_REVERSE_SUBTRACT};ht[Gu]=n.MIN,ht[Wu]=n.MAX;let Ne={[Xu]:n.ZERO,[fa]:n.ONE,[Yu]:n.SRC_COLOR,[Eo]:n.SRC_ALPHA,[ju]:n.SRC_ALPHA_SATURATE,[Ku]:n.DST_COLOR,[Zu]:n.DST_ALPHA,[$u]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[Qu]:n.ONE_MINUS_DST_COLOR,[Ju]:n.ONE_MINUS_DST_ALPHA,[ed]:n.CONSTANT_COLOR,[td]:n.ONE_MINUS_CONSTANT_COLOR,[nd]:n.CONSTANT_ALPHA,[id]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(D,me,he,ue,ne,$,Se,He,pt,ot){if(D===Qt){g===!0&&(be(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),D!==Ko){if(D!==m||ot!==q){if((p!==kn||E!==kn)&&(n.blendEquation(n.FUNC_ADD),p=kn,E=kn),ot)switch(D){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xn:n.blendFunc(n.ONE,n.ONE);break;case I0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case P0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case I0:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case P0:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",D);break}y=null,b=null,C=null,S=null,A.set(0,0,0),P=0,m=D,q=ot}return}ne=ne||me,$=$||he,Se=Se||ue,(me!==p||ne!==E)&&(n.blendEquationSeparate(ht[me],ht[ne]),p=me,E=ne),(he!==y||ue!==b||$!==C||Se!==S)&&(n.blendFuncSeparate(Ne[he],Ne[ue],Ne[$],Ne[Se]),y=he,b=ue,C=$,S=Se),(He.equals(A)===!1||pt!==P)&&(n.blendColor(He.r,He.g,He.b,pt),A.copy(He),P=pt),m=D,q=!1}function w(D,me){D.side===Wn?be(n.CULL_FACE):J(n.CULL_FACE);let he=D.side===Rt;me&&(he=!he),K(he),D.blending===Zi&&D.transparent===!1?Q(Qt):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){v!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),v=D)}function ie(D){D!==Bu?(J(n.CULL_FACE),D!==R&&(D===C0?n.cullFace(n.BACK):D===ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),R=D}function oe(D){D!==N&&(X&&n.lineWidth(D),N=D)}function te(D,me,he){D?(J(n.POLYGON_OFFSET_FILL),(B!==me||H!==he)&&(n.polygonOffset(me,he),B=me,H=he)):be(n.POLYGON_OFFSET_FILL)}function Me(D){D?J(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function de(D){D===void 0&&(D=n.TEXTURE0+G-1),se!==D&&(n.activeTexture(D),se=D)}function ve(D,me,he){he===void 0&&(se===null?he=n.TEXTURE0+G-1:he=se);let ue=le[he];ue===void 0&&(ue={type:void 0,texture:void 0},le[he]=ue),(ue.type!==D||ue.texture!==me)&&(se!==he&&(n.activeTexture(he),se=he),n.bindTexture(D,me||Y[D]),ue.type=D,ue.texture=me)}function T(){let D=le[se];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function V(){try{n.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Z(){try{n.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function fe(){try{n.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Re(){try{n.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function we(){try{n.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function j(){try{n.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ce(D){Ze.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Fe(D){et.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),et.copy(D))}function Le(D,me){let he=c.get(me);he===void 0&&(he=new WeakMap,c.set(me,he));let ue=he.get(D);ue===void 0&&(ue=n.getUniformBlockIndex(me,D.name),he.set(D,ue))}function _e(D,me){let ue=c.get(me).get(D);l.get(me)!==ue&&(n.uniformBlockBinding(me,ue,D.__bindingPointIndex),l.set(me,ue))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,le={},d={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,y=null,b=null,E=null,C=null,S=null,A=new xe(0,0,0),P=0,q=!1,v=null,R=null,N=null,B=null,H=null,Ze.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:be,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:Xe,setBlending:Q,setMaterial:w,setFlipSided:K,setCullFace:ie,setLineWidth:oe,setPolygonOffset:te,setScissorTest:Me,activeTexture:de,bindTexture:ve,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:we,texImage3D:j,updateUBOMapping:Le,uniformBlockBinding:_e,texStorage2D:fe,texStorage3D:Re,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:Ce,scissor:ce,viewport:Fe,reset:ze}}function P5(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,_){return f?new OffscreenCanvas(T,_):Fs("canvas")}function g(T,_,F){let V=1,Z=ve(T);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let k=Math.floor(V*Z.width),Ce=Math.floor(V*Z.height);d===void 0&&(d=x(k,Ce));let fe=_?x(k,Ce):d;return fe.width=k,fe.height=Ce,fe.getContext("2d").drawImage(T,0,0,k,Ce),Be("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+Ce+")."),fe}else return"data"in T&&Be("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,_,F,V,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=_;if(_===n.RED&&(F===n.FLOAT&&(k=n.R32F),F===n.HALF_FLOAT&&(k=n.R16F),F===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.R8UI),F===n.UNSIGNED_SHORT&&(k=n.R16UI),F===n.UNSIGNED_INT&&(k=n.R32UI),F===n.BYTE&&(k=n.R8I),F===n.SHORT&&(k=n.R16I),F===n.INT&&(k=n.R32I)),_===n.RG&&(F===n.FLOAT&&(k=n.RG32F),F===n.HALF_FLOAT&&(k=n.RG16F),F===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RG8UI),F===n.UNSIGNED_SHORT&&(k=n.RG16UI),F===n.UNSIGNED_INT&&(k=n.RG32UI),F===n.BYTE&&(k=n.RG8I),F===n.SHORT&&(k=n.RG16I),F===n.INT&&(k=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGB8UI),F===n.UNSIGNED_SHORT&&(k=n.RGB16UI),F===n.UNSIGNED_INT&&(k=n.RGB32UI),F===n.BYTE&&(k=n.RGB8I),F===n.SHORT&&(k=n.RGB16I),F===n.INT&&(k=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),F===n.UNSIGNED_INT&&(k=n.RGBA32UI),F===n.BYTE&&(k=n.RGBA8I),F===n.SHORT&&(k=n.RGBA16I),F===n.INT&&(k=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),_===n.RGBA){let Ce=Z?Ls:Ke.getTransfer(V);F===n.FLOAT&&(k=n.RGBA32F),F===n.HALF_FLOAT&&(k=n.RGBA16F),F===n.UNSIGNED_BYTE&&(k=Ce===tt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(T,_){let F;return T?_===null||_===Ri||_===Xr?F=n.DEPTH24_STENCIL8:_===Fn?F=n.DEPTH32F_STENCIL8:_===Wr&&(F=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ri||_===Xr?F=n.DEPTH_COMPONENT24:_===Fn?F=n.DEPTH_COMPONENT32F:_===Wr&&(F=n.DEPTH_COMPONENT16),F}function C(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function S(T){let _=T.target;_.removeEventListener("dispose",S),P(_),_.isVideoTexture&&h.delete(_)}function A(T){let _=T.target;_.removeEventListener("dispose",A),v(_)}function P(T){let _=i.get(T);if(_.__webglInit===void 0)return;let F=T.source,V=u.get(F);if(V){let Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&q(T),Object.keys(V).length===0&&u.delete(F)}i.remove(T)}function q(T){let _=i.get(T);n.deleteTexture(_.__webglTexture);let F=T.source,V=u.get(F);delete V[_.__cacheKey],a.memory.textures--}function v(T){let _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)n.deleteFramebuffer(_.__webglFramebuffer[V]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=T.textures;for(let V=0,Z=F.length;V<Z;V++){let k=i.get(F[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(F[V])}i.remove(T)}let R=0;function N(){R=0}function B(){let T=R;return T>=r.maxTextures&&Be("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function H(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function G(T,_){let F=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let V=T.image;if(V===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(T,_){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,_);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function re(T,_){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function W(T,_){let F=i.get(T);if(T.version>0&&F.__version!==T.version){J(F,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let se={[Ir]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},le={[Ut]:n.NEAREST,[ad]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[Sn]:n.LINEAR_MIPMAP_LINEAR},Te={[cd]:n.NEVER,[md]:n.ALWAYS,[hd]:n.LESS,[B0]:n.LEQUAL,[ud]:n.EQUAL,[pd]:n.GEQUAL,[dd]:n.GREATER,[fd]:n.NOTEQUAL};function We(T,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===fl||_.magFilter===ma||_.magFilter===Sn||_.minFilter===cn||_.minFilter===fl||_.minFilter===ma||_.minFilter===Sn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,se[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,se[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,se[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,le[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==ma&&_.minFilter!==Sn||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",S));let V=_.source,Z=u.get(V);Z===void 0&&(Z={},u.set(V,Z));let k=H(_);if(k!==T.__cacheKey){Z[k]===void 0&&(Z[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[k].usedTimes++;let Ce=Z[T.__cacheKey];Ce!==void 0&&(Z[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&q(_)),T.__cacheKey=k,T.__webglTexture=Z[k].texture}return F}function et(T,_,F){return Math.floor(Math.floor(T/F)/_)}function st(T,_,F,V){let k=T.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{k.sort((j,ce)=>j.start-ce.start);let Ce=0;for(let j=1;j<k.length;j++){let ce=k[Ce],Fe=k[j],Le=ce.start+ce.count,_e=et(Fe.start,_.width,4),ze=et(ce.start,_.width,4);Fe.start<=Le+1&&_e===ze&&et(Fe.start+Fe.count-1,_.width,4)===_e?ce.count=Math.max(ce.count,Fe.start+Fe.count-ce.start):(++Ce,k[Ce]=Fe)}k.length=Ce+1;let fe=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let j=0,ce=k.length;j<ce;j++){let Fe=k[j],Le=Math.floor(Fe.start/4),_e=Math.ceil(Fe.count/4),ze=Le%_.width,D=Math.floor(Le/_.width),me=_e,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,ze,D,me,he,F,V,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function Y(T,_,F){let V=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=n.TEXTURE_3D);let Z=Ze(T,_),k=_.source;t.bindTexture(V,T.__webglTexture,n.TEXTURE0+F);let Ce=i.get(k);if(k.version!==Ce.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);let fe=Ke.getPrimaries(Ke.workingColorSpace),Re=_.colorSpace===ci?null:Ke.getPrimaries(_.colorSpace),we=_.colorSpace===ci||fe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let j=g(_.image,!1,r.maxTextureSize);j=de(_,j);let ce=s.convert(_.format,_.colorSpace),Fe=s.convert(_.type),Le=b(_.internalFormat,ce,Fe,_.colorSpace,_.isVideoTexture);We(V,_);let _e,ze=_.mipmaps,D=_.isVideoTexture!==!0,me=Ce.__version===void 0||Z===!0,he=k.dataReady,ue=C(_,j);if(_.isDepthTexture)Le=E(_.format===Yr,_.type),me&&(D?t.texStorage2D(n.TEXTURE_2D,1,Le,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,Le,j.width,j.height,0,ce,Fe,null));else if(_.isDataTexture)if(ze.length>0){D&&me&&t.texStorage2D(n.TEXTURE_2D,ue,Le,ze[0].width,ze[0].height);for(let ne=0,$=ze.length;ne<$;ne++)_e=ze[ne],D?he&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,ce,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,ne,Le,_e.width,_e.height,0,ce,Fe,_e.data);_.generateMipmaps=!1}else D?(me&&t.texStorage2D(n.TEXTURE_2D,ue,Le,j.width,j.height),he&&st(_,j,ce,Fe)):t.texImage2D(n.TEXTURE_2D,0,Le,j.width,j.height,0,ce,Fe,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Le,ze[0].width,ze[0].height,j.depth);for(let ne=0,$=ze.length;ne<$;ne++)if(_e=ze[ne],_.format!==En)if(ce!==null)if(D){if(he)if(_.layerUpdates.size>0){let Se=$0(_e.width,_e.height,_.format,_.type);for(let He of _.layerUpdates){let pt=_e.data.subarray(He*Se/_e.data.BYTES_PER_ELEMENT,(He+1)*Se/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,He,_e.width,_e.height,1,ce,pt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,j.depth,ce,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Le,_e.width,_e.height,j.depth,0,_e.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,j.depth,ce,Fe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Le,_e.width,_e.height,j.depth,0,ce,Fe,_e.data)}else{D&&me&&t.texStorage2D(n.TEXTURE_2D,ue,Le,ze[0].width,ze[0].height);for(let ne=0,$=ze.length;ne<$;ne++)_e=ze[ne],_.format!==En?ce!==null?D?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,ce,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Le,_e.width,_e.height,0,_e.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?he&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,ce,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,ne,Le,_e.width,_e.height,0,ce,Fe,_e.data)}else if(_.isDataArrayTexture)if(D){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Le,j.width,j.height,j.depth),he)if(_.layerUpdates.size>0){let ne=$0(j.width,j.height,_.format,_.type);for(let $ of _.layerUpdates){let Se=j.data.subarray($*ne/j.data.BYTES_PER_ELEMENT,($+1)*ne/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,j.width,j.height,1,ce,Fe,Se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,Fe,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,j.width,j.height,j.depth,0,ce,Fe,j.data);else if(_.isData3DTexture)D?(me&&t.texStorage3D(n.TEXTURE_3D,ue,Le,j.width,j.height,j.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,Fe,j.data)):t.texImage3D(n.TEXTURE_3D,0,Le,j.width,j.height,j.depth,0,ce,Fe,j.data);else if(_.isFramebufferTexture){if(me)if(D)t.texStorage2D(n.TEXTURE_2D,ue,Le,j.width,j.height);else{let ne=j.width,$=j.height;for(let Se=0;Se<ue;Se++)t.texImage2D(n.TEXTURE_2D,Se,Le,ne,$,0,ce,Fe,null),ne>>=1,$>>=1}}else if(ze.length>0){if(D&&me){let ne=ve(ze[0]);t.texStorage2D(n.TEXTURE_2D,ue,Le,ne.width,ne.height)}for(let ne=0,$=ze.length;ne<$;ne++)_e=ze[ne],D?he&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ce,Fe,_e):t.texImage2D(n.TEXTURE_2D,ne,Le,ce,Fe,_e);_.generateMipmaps=!1}else if(D){if(me){let ne=ve(j);t.texStorage2D(n.TEXTURE_2D,ue,Le,ne.width,ne.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Fe,j)}else t.texImage2D(n.TEXTURE_2D,0,Le,ce,Fe,j);m(_)&&p(V),Ce.__version=k.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function J(T,_,F){if(_.image.length!==6)return;let V=Ze(T,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);let k=i.get(Z);if(Z.version!==k.__version||V===!0){t.activeTexture(n.TEXTURE0+F);let Ce=Ke.getPrimaries(Ke.workingColorSpace),fe=_.colorSpace===ci?null:Ke.getPrimaries(_.colorSpace),Re=_.colorSpace===ci||Ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let we=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!we&&!j?ce[$]=g(_.image[$],!0,r.maxCubemapSize):ce[$]=j?_.image[$].image:_.image[$],ce[$]=de(_,ce[$]);let Fe=ce[0],Le=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),ze=b(_.internalFormat,Le,_e,_.colorSpace),D=_.isVideoTexture!==!0,me=k.__version===void 0||V===!0,he=Z.dataReady,ue=C(_,Fe);We(n.TEXTURE_CUBE_MAP,_);let ne;if(we){D&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,Fe.width,Fe.height);for(let $=0;$<6;$++){ne=ce[$].mipmaps;for(let Se=0;Se<ne.length;Se++){let He=ne[Se];_.format!==En?Le!==null?D?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,He.width,He.height,Le,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,ze,He.width,He.height,0,He.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,He.width,He.height,Le,_e,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,ze,He.width,He.height,0,Le,_e,He.data)}}}else{if(ne=_.mipmaps,D&&me){ne.length>0&&ue++;let $=ve(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,$.width,$.height)}for(let $=0;$<6;$++)if(j){D?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,Le,_e,ce[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,ce[$].width,ce[$].height,0,Le,_e,ce[$].data);for(let Se=0;Se<ne.length;Se++){let pt=ne[Se].image[$].image;D?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,pt.width,pt.height,Le,_e,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,ze,pt.width,pt.height,0,Le,_e,pt.data)}}else{D?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le,_e,ce[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,Le,_e,ce[$]);for(let Se=0;Se<ne.length;Se++){let He=ne[Se];D?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Le,_e,He.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,ze,Le,_e,He.image[$])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),k.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function be(T,_,F,V,Z,k){let Ce=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),Re=b(F.internalFormat,Ce,fe,F.colorSpace),we=i.get(_),j=i.get(F);if(j.__renderTarget=_,!we.__hasExternalTextures){let ce=Math.max(1,_.width>>k),Fe=Math.max(1,_.height>>k);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,Re,ce,Fe,_.depth,0,Ce,fe,null):t.texImage2D(Z,k,Re,ce,Fe,0,Ce,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),te(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,j.__webglTexture,0,oe(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,j.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){let V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,k=E(_.stencilBuffer,Z),Ce=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=oe(_);te(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,k,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,T)}else{let V=_.textures;for(let Z=0;Z<V.length;Z++){let k=V[Z],Ce=s.convert(k.format,k.colorSpace),fe=s.convert(k.type),Re=b(k.internalFormat,Ce,fe,k.colorSpace),we=oe(_);F&&te(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Re,_.width,_.height):te(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=i.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);let Z=V.__webglTexture,k=oe(_);if(_.depthTexture.format===Pr)te(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Yr)te(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xe(T){let _=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let V=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let V=T.texture.mipmaps;V&&V.length>0?Ae(_.__webglFramebuffer[0],T):Ae(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=n.createRenderbuffer(),Pe(_.__webglDepthbuffer[V],T,!1);else{let Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,k)}}else{let V=T.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Pe(_.__webglDepthbuffer,T,!1);else{let Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(T,_,F){let V=i.get(T);_!==void 0&&be(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xe(T)}function Ne(T){let _=T.texture,F=i.get(T),V=i.get(_);T.addEventListener("dispose",A);let Z=T.textures,k=T.isWebGLCubeRenderTarget===!0,Ce=Z.length>1;if(Ce||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=_.version,a.memory.textures++),k){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Re=0;Re<_.mipmaps.length;Re++)F.__webglFramebuffer[fe][Re]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let fe=0,Re=Z.length;fe<Re;fe++){let we=i.get(Z[fe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&te(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<Z.length;fe++){let Re=Z[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);let we=s.convert(Re.format,Re.colorSpace),j=s.convert(Re.type),ce=b(Re.internalFormat,we,j,Re.colorSpace,T.isXRRenderTarget===!0),Fe=oe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ce,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),We(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)be(F.__webglFramebuffer[fe][Re],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re);else be(F.__webglFramebuffer[fe],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Re=Z.length;fe<Re;fe++){let we=Z[fe],j=i.get(we),ce=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,j.__webglTexture),We(ce,we),be(F.__webglFramebuffer,T,we,n.COLOR_ATTACHMENT0+fe,ce,0),m(we)&&p(ce)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,V.__webglTexture),We(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)be(F.__webglFramebuffer[Re],T,_,n.COLOR_ATTACHMENT0,fe,Re);else be(F.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}T.depthBuffer&&Xe(T)}function Q(T){let _=T.textures;for(let F=0,V=_.length;F<V;F++){let Z=_[F];if(m(Z)){let k=y(T),Ce=i.get(Z).__webglTexture;t.bindTexture(k,Ce),p(k),t.unbindTexture()}}}let w=[],K=[];function ie(T){if(T.samples>0){if(te(T)===!1){let _=T.textures,F=T.width,V=T.height,Z=n.COLOR_BUFFER_BIT,k=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(T),fe=_.length>1;if(fe)for(let we=0;we<_.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let Re=T.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<_.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);let j=i.get(_[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,Z,n.NEAREST),l===!0&&(w.length=0,K.length=0,w.push(n.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push(k),K.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<_.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);let j=i.get(_[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,j,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function oe(T){return Math.min(r.maxSamples,T.samples)}function te(T){let _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(T){let _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function de(T,_){let F=T.colorSpace,V=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ki&&F!==ci&&(Ke.getTransfer(F)===tt?(V!==En||Z!==Un)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",F)),_}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=re,this.setTextureCube=W,this.rebindTextures=ht,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=te}function D5(n,e){function t(i,r=ci){let s,a=Ke.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===F0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===N0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===L0)return n.BYTE;if(i===U0)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===At)return n.HALF_FLOAT;if(i===O0)return n.ALPHA;if(i===z0)return n.RGB;if(i===En)return n.RGBA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===gl)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===vl)return n.RG;if(i===bl)return n.RG_INTEGER;if(i===yl)return n.RGBA_INTEGER;if(i===xa||i===ga||i===_a||i===va)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===Ml||i===Sl||i===El)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===wl||i===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tl||i===wl)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Al)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cl||i===Rl||i===Il||i===Pl||i===Dl||i===Ll||i===Ul||i===Fl||i===Nl||i===Ol||i===zl||i===Bl||i===kl||i===Hl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===Gl||i===Wl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vl)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xl||i===Yl||i===$l||i===Zl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var L5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U5=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new $s(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ct({vertexShader:L5,fragmentShader:U5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends si{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,g=typeof XRWebGLBinding<"u",m=new ah,p={},y=t.getContextAttributes(),b=null,E=null,C=[],S=[],A=new ee,P=null,q=new wt;q.viewport=new at;let v=new wt;v.viewport=new at;let R=[q,v],N=new Jo,B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=C[Y];return J===void 0&&(J=new Fr,C[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=C[Y];return J===void 0&&(J=new Fr,C[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=C[Y];return J===void 0&&(J=new Fr,C[Y]=J),J.getHandSpace()};function G(Y){let J=S.indexOf(Y.inputSource);if(J===-1)return;let be=C[J];be!==void 0&&(be.update(Y.inputSource,Y.frame,c||a),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",re);for(let Y=0;Y<C.length;Y++){let J=S[Y];J!==null&&(S[Y]=null,C[Y].disconnect(J))}B=null,H=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(b),f=null,u=null,d=null,r=null,E=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Yr:Pr,Pe=y.stencil?Xr:Ri);let Xe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Xe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new bt(u.textureWidth,u.textureHeight,{format:En,type:Un,depthTexture:new Ys(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new bt(f.framebufferWidth,f.framebufferHeight,{format:En,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Y){for(let J=0;J<Y.removed.length;J++){let be=Y.removed[J],Pe=S.indexOf(be);Pe>=0&&(S[Pe]=null,C[Pe].disconnect(be))}for(let J=0;J<Y.added.length;J++){let be=Y.added[J],Pe=S.indexOf(be);if(Pe===-1){for(let Xe=0;Xe<C.length;Xe++)if(Xe>=S.length){S.push(be),Pe=Xe;break}else if(S[Xe]===null){S[Xe]=be,Pe=Xe;break}if(Pe===-1)break}let Ae=C[Pe];Ae&&Ae.connect(be)}}let W=new I,se=new I;function le(Y,J,be){W.setFromMatrixPosition(J.matrixWorld),se.setFromMatrixPosition(be.matrixWorld);let Pe=W.distanceTo(se),Ae=J.projectionMatrix.elements,Xe=be.projectionMatrix.elements,ht=Ae[14]/(Ae[10]-1),Ne=Ae[14]/(Ae[10]+1),Q=(Ae[9]+1)/Ae[5],w=(Ae[9]-1)/Ae[5],K=(Ae[8]-1)/Ae[0],ie=(Xe[8]+1)/Xe[0],oe=ht*K,te=ht*ie,Me=Pe/(-K+ie),de=Me*-K;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let ve=ht+Me,T=Ne+Me,_=oe-de,F=te+(Pe-de),V=Q*Ne/T*ve,Z=w*Ne/T*ve;Y.projectionMatrix.makePerspective(_,F,V,Z,ve,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Te(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,be=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(be=m.depthFar)),N.near=v.near=q.near=J,N.far=v.far=q.far=be,(B!==N.near||H!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,H=N.far),N.layers.mask=Y.layers.mask|6,q.layers.mask=N.layers.mask&3,v.layers.mask=N.layers.mask&5;let Pe=Y.parent,Ae=N.cameras;Te(N,Pe);for(let Xe=0;Xe<Ae.length;Xe++)Te(Ae[Xe],Pe);Ae.length===2?le(N,q,v):N.projectionMatrix.copy(q.projectionMatrix),We(Y,N,Pe)};function We(Y,J,be){be===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let Ze=null;function et(Y,J){if(h=J.getViewerPose(c||a),x=J,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Pe=!1;be.length!==N.cameras.length&&(N.cameras.length=0,Pe=!0);for(let Ne=0;Ne<be.length;Ne++){let Q=be[Ne],w=null;if(f!==null)w=f.getViewport(Q);else{let ie=d.getViewSubImage(u,Q);w=ie.viewport,Ne===0&&(e.setRenderTargetTextures(E,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(E))}let K=R[Ne];K===void 0&&(K=new wt,K.layers.enable(Ne),K.viewport=new at,R[Ne]=K),K.matrix.fromArray(Q.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Q.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(w.x,w.y,w.width,w.height),Ne===0&&(N.matrix.copy(K.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pe===!0&&N.cameras.push(K)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Ne=d.getDepthInformation(be[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(Ae&&Ae.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Ne=0;Ne<be.length;Ne++){let Q=be[Ne].camera;if(Q){let w=p[Q];w||(w=new $s,p[Q]=w);let K=d.getCameraImage(Q);w.sourceTexture=K}}}}for(let be=0;be<C.length;be++){let Pe=S[be],Ae=C[be];Pe!==null&&Ae!==void 0&&Ae.update(Pe,J,c||a)}Ze&&Ze(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}let st=new Xd;st.setAnimationLoop(et),this.setAnimationLoop=function(Y){Ze=Y},this.dispose=function(){}}},ur=new qn,F5=new it;function N5(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,G0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,E=y.envMapRotation;b&&(m.envMap.value=b,ur.copy(E),ur.x*=-1,ur.y*=-1,ur.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(F5.makeRotationFromEuler(ur)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O5(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let E=b.program;i.uniformBlockBinding(y,E)}function c(y,b){let E=r[y.id];E===void 0&&(x(y),E=h(y),r[y.id]=E,y.addEventListener("dispose",m));let C=b.program;i.updateUBOMapping(y,C);let S=e.render.frame;s[y.id]!==S&&(u(y),s[y.id]=S)}function h(y){let b=d();y.__bindingPointIndex=b;let E=n.createBuffer(),C=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=r[y.id],E=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,A=E.length;S<A;S++){let P=Array.isArray(E[S])?E[S]:[E[S]];for(let q=0,v=P.length;q<v;q++){let R=P[q];if(f(R,S,q,C)===!0){let N=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],H=0;for(let G=0;G<B.length;G++){let X=B[G],re=g(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,N+H,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,H),H+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,b,E,C){let S=y.value,A=b+"_"+E;if(C[A]===void 0)return typeof S=="number"||typeof S=="boolean"?C[A]=S:C[A]=S.clone(),!0;{let P=C[A];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[A]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function x(y){let b=y.uniforms,E=0,C=16;for(let A=0,P=b.length;A<P;A++){let q=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,R=q.length;v<R;v++){let N=q[v],B=Array.isArray(N.value)?N.value:[N.value];for(let H=0,G=B.length;H<G;H++){let X=B[H],re=g(X),W=E%C,se=W%re.boundary,le=W+se;E+=se,le!==0&&C-le<re.storage&&(E+=C-le),N.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=re.storage}}}let S=E%C;return S>0&&(E+=C-S),y.__size=E,y.__cache={},this}function g(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var z5=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),hi=null;function B5(){return hi===null&&(hi=new Gs(z5,32,32,vl,At),hi.minFilter=cn,hi.magFilter=cn,hi.wrapS=Bn,hi.wrapT=Bn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Kr=class{constructor(e={}){let{canvas:t=xd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let x=new Set([yl,bl,_l]),g=new Set([Un,Ri,Wr,Xr,ml,xl]),m=new Uint32Array(4),p=new Int32Array(4),y=null,b=null,E=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,A=!1;this._outputColorSpace=Et;let P=0,q=0,v=null,R=-1,N=null,B=new at,H=new at,G=null,X=new xe(0),re=0,W=t.width,se=t.height,le=1,Te=null,We=null,Ze=new at(0,0,W,se),et=new at(0,0,W,se),st=!1,Y=new Nr,J=!1,be=!1,Pe=new it,Ae=new I,Xe=new at,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Q(){return v===null?le:1}let w=i;function K(M,L){return t.getContext(M,L)}try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",Se,!1),w===null){let L="webgl2";if(w=K(L,M),w===null)throw K(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let ie,oe,te,Me,de,ve,T,_,F,V,Z,k,Ce,fe,Re,we,j,ce,Fe,Le,_e,ze,D,me;function he(){ie=new n4(w),ie.init(),ze=new D5(w,ie),oe=new Ym(w,ie,e,ze),te=new I5(w,ie),oe.reversedDepthBuffer&&u&&te.buffers.depth.setReversed(!0),Me=new s4(w),de=new _5,ve=new P5(w,ie,te,de,oe,ze,Me),T=new Zm(S),_=new t4(S),F=new cp(w),D=new Wm(w,F),V=new i4(w,F,Me,D),Z=new o4(w,V,F,Me),Fe=new a4(w,oe,ve),we=new $m(de),k=new g5(S,T,_,ie,oe,D,we),Ce=new N5(S,de),fe=new b5,Re=new T5(ie),ce=new Gm(S,T,_,te,Z,f,l),j=new C5(S,Z,oe),me=new O5(w,Me,oe,te),Le=new Xm(w,ie,Me),_e=new r4(w,ie,Me),Me.programs=k.programs,S.capabilities=oe,S.extensions=ie,S.properties=de,S.renderLists=fe,S.shadowMap=j,S.state=te,S.info=Me}he();let ue=new oh(S,w);this.xr=ue,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let M=ie.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ie.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(M){M!==void 0&&(le=M,this.setSize(W,se,!1))},this.getSize=function(M){return M.set(W,se)},this.setSize=function(M,L,O=!0){if(ue.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,se=L,t.width=Math.floor(M*le),t.height=Math.floor(L*le),O===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(W*le,se*le).floor()},this.setDrawingBufferSize=function(M,L,O){W=M,se=L,le=O,t.width=Math.floor(M*O),t.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(B)},this.getViewport=function(M){return M.copy(Ze)},this.setViewport=function(M,L,O,z){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,L,O,z),te.viewport(B.copy(Ze).multiplyScalar(le).round())},this.getScissor=function(M){return M.copy(et)},this.setScissor=function(M,L,O,z){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,L,O,z),te.scissor(H.copy(et).multiplyScalar(le).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){te.setScissorTest(st=M)},this.setOpaqueSort=function(M){Te=M},this.setTransparentSort=function(M){We=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,O=!0){let z=0;if(M){let U=!1;if(v!==null){let ae=v.texture.format;U=x.has(ae)}if(U){let ae=v.texture.type,ge=g.has(ae),Ee=ce.getClearColor(),ye=ce.getClearAlpha(),Ue=Ee.r,Oe=Ee.g,Ie=Ee.b;ge?(m[0]=Ue,m[1]=Oe,m[2]=Ie,m[3]=ye,w.clearBufferuiv(w.COLOR,0,m)):(p[0]=Ue,p[1]=Oe,p[2]=Ie,p[3]=ye,w.clearBufferiv(w.COLOR,0,p))}else z|=w.COLOR_BUFFER_BIT}L&&(z|=w.DEPTH_BUFFER_BIT),O&&(z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ce.dispose(),fe.dispose(),Re.dispose(),de.dispose(),T.dispose(),_.dispose(),Z.dispose(),D.dispose(),me.dispose(),k.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ih),ue.removeEventListener("sessionend",Ph),zi.stop()};function ne(M){M.preventDefault(),V0("WebGLRenderer: Context Lost."),A=!0}function $(){V0("WebGLRenderer: Context Restored."),A=!1;let M=Me.autoReset,L=j.enabled,O=j.autoUpdate,z=j.needsUpdate,U=j.type;he(),Me.autoReset=M,j.enabled=L,j.autoUpdate=O,j.needsUpdate=z,j.type=U}function Se(M){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function He(M){let L=M.target;L.removeEventListener("dispose",He),pt(L)}function pt(M){ot(M),de.remove(M)}function ot(M){let L=de.get(M).programs;L!==void 0&&(L.forEach(function(O){k.releaseProgram(O)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,z,U,ae){L===null&&(L=ht);let ge=U.isMesh&&U.matrixWorld.determinant()<0,Ee=_f(M,L,O,z,U);te.setMaterial(z,ge);let ye=O.index,Ue=1;if(z.wireframe===!0){if(ye=V.getWireframeAttribute(O),ye===void 0)return;Ue=2}let Oe=O.drawRange,Ie=O.attributes.position,Je=Oe.start*Ue,lt=(Oe.start+Oe.count)*Ue;ae!==null&&(Je=Math.max(Je,ae.start*Ue),lt=Math.min(lt,(ae.start+ae.count)*Ue)),ye!==null?(Je=Math.max(Je,0),lt=Math.min(lt,ye.count)):Ie!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Ie.count));let qt=lt-Je;if(qt<0||qt===1/0)return;D.setup(U,z,Ee,O,ye);let Mt,ut=Le;if(ye!==null&&(Mt=F.get(ye),ut=_e,ut.setIndex(Mt)),U.isMesh)z.wireframe===!0?(te.setLineWidth(z.wireframeLinewidth*Q()),ut.setMode(w.LINES)):ut.setMode(w.TRIANGLES);else if(U.isLine){let De=z.linewidth;De===void 0&&(De=1),te.setLineWidth(De*Q()),U.isLineSegments?ut.setMode(w.LINES):U.isLineLoop?ut.setMode(w.LINE_LOOP):ut.setMode(w.LINE_STRIP)}else U.isPoints?ut.setMode(w.POINTS):U.isSprite&&ut.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Lr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ut.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let De=U._multiDrawStarts,gt=U._multiDrawCounts,je=U._multiDrawCount,rn=ye?F.get(ye).bytesPerElement:1,mr=de.get(z).currentProgram.getUniforms();for(let sn=0;sn<je;sn++)mr.setValue(w,"_gl_DrawID",sn),ut.render(De[sn]/rn,gt[sn])}else if(U.isInstancedMesh)ut.renderInstances(Je,qt,U.count);else if(O.isInstancedBufferGeometry){let De=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,gt=Math.min(O.instanceCount,De);ut.renderInstances(Je,qt,gt)}else ut.render(Je,qt)};function On(M,L,O){M.transparent===!0&&M.side===Wn&&M.forceSinglePass===!1?(M.side=Rt,M.needsUpdate=!0,Oa(M,L,O),M.side=Ln,M.needsUpdate=!0,Oa(M,L,O),M.side=Wn):Oa(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),b=Re.get(O),b.init(L),C.push(b),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),b.setupLights();let z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ae=U.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Ee=ae[ge];On(Ee,O,U),z.add(Ee)}else On(ae,O,U),z.add(ae)}),b=C.pop(),z},this.compileAsync=function(M,L,O=null){let z=this.compile(M,L,O);return new Promise(U=>{function ae(){if(z.forEach(function(ge){de.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){U(M);return}setTimeout(ae,10)}ie.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let An=null;function gf(M){An&&An(M)}function Ih(){zi.stop()}function Ph(){zi.start()}let zi=new Xd;zi.setAnimationLoop(gf),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(M){An=M,ue.setAnimationLoop(M),M===null?zi.stop():zi.start()},ue.addEventListener("sessionstart",Ih),ue.addEventListener("sessionend",Ph),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(L),L=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,L,v),b=Re.get(M,C.length),b.init(L),C.push(b),Pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Pe,Dn,L.reversedDepth),be=this.localClippingEnabled,J=we.init(this.clippingPlanes,be),y=fe.get(M,E.length),y.init(),E.push(y),ue.enabled===!0&&ue.isPresenting===!0){let ae=S.xr.getDepthSensingMesh();ae!==null&&Tc(ae,L,-1/0,S.sortObjects)}Tc(M,L,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Te,We),Ne=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ne&&ce.addToRenderList(y,M),this.info.render.frame++,J===!0&&we.beginShadows();let O=b.state.shadowsArray;j.render(O,M,L),J===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=y.opaque,U=y.transmissive;if(b.setupLights(),L.isArrayCamera){let ae=L.cameras;if(U.length>0)for(let ge=0,Ee=ae.length;ge<Ee;ge++){let ye=ae[ge];Lh(z,U,M,ye)}Ne&&ce.render(M);for(let ge=0,Ee=ae.length;ge<Ee;ge++){let ye=ae[ge];Dh(y,M,ye,ye.viewport)}}else U.length>0&&Lh(z,U,M,L),Ne&&ce.render(M),Dh(y,M,L);v!==null&&q===0&&(ve.updateMultisampleRenderTarget(v),ve.updateRenderTargetMipmap(v)),M.isScene===!0&&M.onAfterRender(S,M,L),D.resetDefaultState(),R=-1,N=null,C.pop(),C.length>0?(b=C[C.length-1],J===!0&&we.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Tc(M,L,O,z){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){z&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pe);let ge=Z.update(M),Ee=M.material;Ee.visible&&y.push(M,ge,Ee,O,Xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){let ge=Z.update(M),Ee=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Xe.copy(ge.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ee)){let ye=ge.groups;for(let Ue=0,Oe=ye.length;Ue<Oe;Ue++){let Ie=ye[Ue],Je=Ee[Ie.materialIndex];Je&&Je.visible&&y.push(M,ge,Je,O,Xe.z,Ie)}}else Ee.visible&&y.push(M,ge,Ee,O,Xe.z,null)}}let ae=M.children;for(let ge=0,Ee=ae.length;ge<Ee;ge++)Tc(ae[ge],L,O,z)}function Dh(M,L,O,z){let{opaque:U,transmissive:ae,transparent:ge}=M;b.setupLightsView(O),J===!0&&we.setGlobalState(S.clippingPlanes,O),z&&te.viewport(B.copy(z)),U.length>0&&Na(U,L,O),ae.length>0&&Na(ae,L,O),ge.length>0&&Na(ge,L,O),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Lh(M,L,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[z.id]===void 0&&(b.state.transmissionRenderTarget[z.id]=new bt(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?At:Un,minFilter:Sn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let ae=b.state.transmissionRenderTarget[z.id],ge=z.viewport||B;ae.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);let Ee=S.getRenderTarget(),ye=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(ae),S.getClearColor(X),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),Ne&&ce.render(O);let Oe=S.toneMapping;S.toneMapping=li;let Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),J===!0&&we.setGlobalState(S.clippingPlanes,z),Na(M,O,z),ve.updateMultisampleRenderTarget(ae),ve.updateRenderTargetMipmap(ae),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,qt=L.length;lt<qt;lt++){let Mt=L[lt],{object:ut,geometry:De,material:gt,group:je}=Mt;if(gt.side===Wn&&ut.layers.test(z.layers)){let rn=gt.side;gt.side=Rt,gt.needsUpdate=!0,Uh(ut,O,z,De,gt,je),gt.side=rn,gt.needsUpdate=!0,Je=!0}}Je===!0&&(ve.updateMultisampleRenderTarget(ae),ve.updateRenderTargetMipmap(ae))}S.setRenderTarget(Ee,ye,Ue),S.setClearColor(X,re),Ie!==void 0&&(z.viewport=Ie),S.toneMapping=Oe}function Na(M,L,O){let z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ae=M.length;U<ae;U++){let ge=M[U],{object:Ee,geometry:ye,group:Ue}=ge,Oe=ge.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),Ee.layers.test(O.layers)&&Uh(Ee,L,O,ye,Oe,Ue)}}function Uh(M,L,O,z,U,ae){M.onBeforeRender(S,L,O,z,U,ae),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(S,L,O,z,M,ae),U.transparent===!0&&U.side===Wn&&U.forceSinglePass===!1?(U.side=Rt,U.needsUpdate=!0,S.renderBufferDirect(O,L,z,U,M,ae),U.side=Ln,U.needsUpdate=!0,S.renderBufferDirect(O,L,z,U,M,ae),U.side=Wn):S.renderBufferDirect(O,L,z,U,M,ae),M.onAfterRender(S,L,O,z,U,ae)}function Oa(M,L,O){L.isScene!==!0&&(L=ht);let z=de.get(M),U=b.state.lights,ae=b.state.shadowsArray,ge=U.state.version,Ee=k.getParameters(M,U.state,ae,L,O),ye=k.getProgramCacheKey(Ee),Ue=z.programs;z.environment=M.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(M.isMeshStandardMaterial?_:T).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",He),Ue=new Map,z.programs=Ue);let Oe=Ue.get(ye);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===ge)return Nh(M,Ee),Oe}else Ee.uniforms=k.getUniforms(M),M.onBeforeCompile(Ee,S),Oe=k.acquireProgram(Ee,ye),Ue.set(ye,Oe),z.uniforms=Ee.uniforms;let Ie=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=we.uniform),Nh(M,Ee),z.needsLights=bf(M),z.lightsStateVersion=ge,z.needsLights&&(Ie.ambientLightColor.value=U.state.ambient,Ie.lightProbe.value=U.state.probe,Ie.directionalLights.value=U.state.directional,Ie.directionalLightShadows.value=U.state.directionalShadow,Ie.spotLights.value=U.state.spot,Ie.spotLightShadows.value=U.state.spotShadow,Ie.rectAreaLights.value=U.state.rectArea,Ie.ltc_1.value=U.state.rectAreaLTC1,Ie.ltc_2.value=U.state.rectAreaLTC2,Ie.pointLights.value=U.state.point,Ie.pointLightShadows.value=U.state.pointShadow,Ie.hemisphereLights.value=U.state.hemi,Ie.directionalShadowMap.value=U.state.directionalShadowMap,Ie.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ie.spotShadowMap.value=U.state.spotShadowMap,Ie.spotLightMatrix.value=U.state.spotLightMatrix,Ie.spotLightMap.value=U.state.spotLightMap,Ie.pointShadowMap.value=U.state.pointShadowMap,Ie.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Oe,z.uniformsList=null,Oe}function Fh(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Jr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Nh(M,L){let O=de.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function _f(M,L,O,z,U){L.isScene!==!0&&(L=ht),ve.resetTextureUnits();let ae=L.fog,ge=z.isMeshStandardMaterial?L.environment:null,Ee=v===null?S.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Ki,ye=(z.isMeshStandardMaterial?_:T).get(z.envMap||ge),Ue=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Oe=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!O.morphAttributes.position,Je=!!O.morphAttributes.normal,lt=!!O.morphAttributes.color,qt=li;z.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(qt=S.toneMapping);let Mt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ut=Mt!==void 0?Mt.length:0,De=de.get(z),gt=b.state.lights;if(J===!0&&(be===!0||M!==N)){let Vt=M===N&&z.id===R;we.setState(z,M,Vt)}let je=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==gt.state.version||De.outputColorSpace!==Ee||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isBatchedMesh&&De.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&De.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==ye||z.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==we.numPlanes||De.numIntersection!==we.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Oe||De.morphTargets!==Ie||De.morphNormals!==Je||De.morphColors!==lt||De.toneMapping!==qt||De.morphTargetsCount!==ut)&&(je=!0):(je=!0,De.__version=z.version);let rn=De.currentProgram;je===!0&&(rn=Oa(z,L,U));let mr=!1,sn=!1,ms=!1,_t=rn.getUniforms(),Yt=De.uniforms;if(te.useProgram(rn.program)&&(mr=!0,sn=!0,ms=!0),z.id!==R&&(R=z.id,sn=!0),mr||N!==M){te.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(w,"projectionMatrix",M.projectionMatrix),_t.setValue(w,"viewMatrix",M.matrixWorldInverse);let $t=_t.map.cameraPosition;$t!==void 0&&$t.setValue(w,Ae.setFromMatrixPosition(M.matrixWorld)),oe.logarithmicDepthBuffer&&_t.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),N!==M&&(N=M,sn=!0,ms=!0)}if(U.isSkinnedMesh){_t.setOptional(w,U,"bindMatrix"),_t.setOptional(w,U,"bindMatrixInverse");let Vt=U.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),_t.setValue(w,"boneTexture",Vt.boneTexture,ve))}U.isBatchedMesh&&(_t.setOptional(w,U,"batchingTexture"),_t.setValue(w,"batchingTexture",U._matricesTexture,ve),_t.setOptional(w,U,"batchingIdTexture"),_t.setValue(w,"batchingIdTexture",U._indirectTexture,ve),_t.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(w,"batchingColorTexture",U._colorsTexture,ve));let vn=O.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Fe.update(U,O,rn),(sn||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,_t.setValue(w,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Yt.envMap.value=ye,Yt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Yt.envMapIntensity.value=L.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=B5()),sn&&(_t.setValue(w,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&vf(Yt,ms),ae&&z.fog===!0&&Ce.refreshFogUniforms(Yt,ae),Ce.refreshMaterialUniforms(Yt,z,le,se,b.state.transmissionRenderTarget[M.id]),Jr.upload(w,Fh(De),Yt,ve)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Jr.upload(w,Fh(De),Yt,ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(w,"center",U.center),_t.setValue(w,"modelViewMatrix",U.modelViewMatrix),_t.setValue(w,"normalMatrix",U.normalMatrix),_t.setValue(w,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Vt=z.uniformsGroups;for(let $t=0,wc=Vt.length;$t<wc;$t++){let Bi=Vt[$t];me.update(Bi,rn),me.bind(Bi,rn)}}return rn}function vf(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function bf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(M,L,O){let z=de.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),de.get(M.texture).__webglTexture=L,de.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let O=de.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};let yf=w.createFramebuffer();this.setRenderTarget=function(M,L=0,O=0){v=M,P=L,q=O;let z=!0,U=null,ae=!1,ge=!1;if(M){let ye=de.get(M);if(ye.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(w.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)ve.setupRenderTarget(M);else if(ye.__hasExternalTextures)ve.rebindTextures(M,de.get(M.texture).__webglTexture,de.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ie=M.depthTexture;if(ye.__boundDepthTexture!==Ie){if(Ie!==null&&de.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(M)}}let Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);let Oe=de.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[L])?U=Oe[L][O]:U=Oe[L],ae=!0):M.samples>0&&ve.useMultisampledRTT(M)===!1?U=de.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?U=Oe[O]:U=Oe,B.copy(M.viewport),H.copy(M.scissor),G=M.scissorTest}else B.copy(Ze).multiplyScalar(le).floor(),H.copy(et).multiplyScalar(le).floor(),G=st;if(O!==0&&(U=yf),te.bindFramebuffer(w.FRAMEBUFFER,U)&&z&&te.drawBuffers(M,U),te.viewport(B),te.scissor(H),te.setScissorTest(G),ae){let ye=de.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,O)}else if(ge){let ye=L;for(let Ue=0;Ue<M.textures.length;Ue++){let Oe=de.get(M.textures[Ue]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,O,ye)}}else if(M!==null&&O!==0){let ye=de.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ye.__webglTexture,O)}R=-1},this.readRenderTargetPixels=function(M,L,O,z,U,ae,ge,Ee=0){if(!(M&&M.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=de.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){te.bindFramebuffer(w.FRAMEBUFFER,ye);try{let Ue=M.textures[Ee],Oe=Ue.format,Ie=Ue.type;if(!oe.textureFormatReadable(Oe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ie)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-z&&O>=0&&O<=M.height-U&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),w.readPixels(L,O,z,U,ze.convert(Oe),ze.convert(Ie),ae))}finally{let Ue=v!==null?de.get(v).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,L,O,z,U,ae,ge,Ee=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=de.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(L>=0&&L<=M.width-z&&O>=0&&O<=M.height-U){te.bindFramebuffer(w.FRAMEBUFFER,ye);let Ue=M.textures[Ee],Oe=Ue.format,Ie=Ue.type;if(!oe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Je),w.bufferData(w.PIXEL_PACK_BUFFER,ae.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),w.readPixels(L,O,z,U,ze.convert(Oe),ze.convert(Ie),0);let lt=v!==null?de.get(v).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,lt);let qt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await gd(w,qt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Je),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ae),w.deleteBuffer(Je),w.deleteSync(qt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,O=0){let z=Math.pow(2,-O),U=Math.floor(M.image.width*z),ae=Math.floor(M.image.height*z),ge=L!==null?L.x:0,Ee=L!==null?L.y:0;ve.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,ge,Ee,U,ae),te.unbindTexture()};let qf=w.createFramebuffer(),Mf=w.createFramebuffer();this.copyTextureToTexture=function(M,L,O=null,z=null,U=0,ae=null){ae===null&&(U!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=U,U=0):ae=0);let ge,Ee,ye,Ue,Oe,Ie,Je,lt,qt,Mt=M.isCompressedTexture?M.mipmaps[ae]:M.image;if(O!==null)ge=O.max.x-O.min.x,Ee=O.max.y-O.min.y,ye=O.isBox3?O.max.z-O.min.z:1,Ue=O.min.x,Oe=O.min.y,Ie=O.isBox3?O.min.z:0;else{let vn=Math.pow(2,-U);ge=Math.floor(Mt.width*vn),Ee=Math.floor(Mt.height*vn),M.isDataArrayTexture?ye=Mt.depth:M.isData3DTexture?ye=Math.floor(Mt.depth*vn):ye=1,Ue=0,Oe=0,Ie=0}z!==null?(Je=z.x,lt=z.y,qt=z.z):(Je=0,lt=0,qt=0);let ut=ze.convert(L.format),De=ze.convert(L.type),gt;L.isData3DTexture?(ve.setTexture3D(L,0),gt=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ve.setTexture2DArray(L,0),gt=w.TEXTURE_2D_ARRAY):(ve.setTexture2D(L,0),gt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);let je=w.getParameter(w.UNPACK_ROW_LENGTH),rn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),mr=w.getParameter(w.UNPACK_SKIP_PIXELS),sn=w.getParameter(w.UNPACK_SKIP_ROWS),ms=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Mt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Mt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ue),w.pixelStorei(w.UNPACK_SKIP_ROWS,Oe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ie);let _t=M.isDataArrayTexture||M.isData3DTexture,Yt=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let vn=de.get(M),Vt=de.get(L),$t=de.get(vn.__renderTarget),wc=de.get(Vt.__renderTarget);te.bindFramebuffer(w.READ_FRAMEBUFFER,$t.__webglFramebuffer),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,wc.__webglFramebuffer);for(let Bi=0;Bi<ye;Bi++)_t&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,de.get(M).__webglTexture,U,Ie+Bi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,de.get(L).__webglTexture,ae,qt+Bi)),w.blitFramebuffer(Ue,Oe,ge,Ee,Je,lt,ge,Ee,w.DEPTH_BUFFER_BIT,w.NEAREST);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||de.has(M)){let vn=de.get(M),Vt=de.get(L);te.bindFramebuffer(w.READ_FRAMEBUFFER,qf),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,Mf);for(let $t=0;$t<ye;$t++)_t?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,vn.__webglTexture,U,Ie+$t):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,vn.__webglTexture,U),Yt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Vt.__webglTexture,ae,qt+$t):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Vt.__webglTexture,ae),U!==0?w.blitFramebuffer(Ue,Oe,ge,Ee,Je,lt,ge,Ee,w.COLOR_BUFFER_BIT,w.NEAREST):Yt?w.copyTexSubImage3D(gt,ae,Je,lt,qt+$t,Ue,Oe,ge,Ee):w.copyTexSubImage2D(gt,ae,Je,lt,Ue,Oe,ge,Ee);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Yt?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(gt,ae,Je,lt,qt,ge,Ee,ye,ut,De,Mt.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(gt,ae,Je,lt,qt,ge,Ee,ye,ut,Mt.data):w.texSubImage3D(gt,ae,Je,lt,qt,ge,Ee,ye,ut,De,Mt):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ae,Je,lt,ge,Ee,ut,De,Mt.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ae,Je,lt,Mt.width,Mt.height,ut,Mt.data):w.texSubImage2D(w.TEXTURE_2D,ae,Je,lt,ge,Ee,ut,De,Mt);w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,rn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,mr),w.pixelStorei(w.UNPACK_SKIP_ROWS,sn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ms),ae===0&&L.generateMipmaps&&w.generateMipmap(gt),te.unbindTexture()},this.initRenderTarget=function(M){de.get(M).__webglFramebuffer===void 0&&ve.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ve.setTextureCube(M,0):M.isData3DTexture?ve.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ve.setTexture2DArray(M,0):ve.setTexture2D(M,0),te.unbindTexture()},this.resetState=function(){P=0,q=0,v=null,te.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var k5=30,Di=n=>Math.round(n*k5),Kd=n=>Cn.filter(e=>e.scene===n),nc=(n,e)=>Di(Kd(n)[e].a),Qd=(n,e)=>Di(Kd(n)[e].b);var ic=class extends Vn{constructor(e,t={}){let i=t.font;if(i===void 0)super();else{let r=i.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}};var rc=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let r=[],s=H5(e,t,this.data,i);for(let a=0,o=s.length;a<o;a++)r.push(...s[a].toShapes());return r}};function H5(n,e,t,i){let r=Array.from(n),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[],l=0,c=0;(i=="rtl"||i=="tb")&&r.reverse();for(let h=0;h<r.length;h++){let d=r[h];if(d===`
`)l=0,c-=a;else{let u=V5(d,s,l,c,t);i=="tb"?(l=0,c+=t.ascender*s):l+=u.offsetX,o.push(u.path)}}return o}function V5(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let a=new da,o,l,c,h,d,u,f,x;if(s.o){let g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":o=g[m++]*e+t,l=g[m++]*e+i,a.moveTo(o,l);break;case"l":o=g[m++]*e+t,l=g[m++]*e+i,a.lineTo(o,l);break;case"q":c=g[m++]*e+t,h=g[m++]*e+i,d=g[m++]*e+t,u=g[m++]*e+i,a.quadraticCurveTo(d,u,c,h);break;case"b":c=g[m++]*e+t,h=g[m++]*e+i,d=g[m++]*e+t,u=g[m++]*e+i,f=g[m++]*e+t,x=g[m++]*e+i,a.bezierCurveTo(d,u,f,x,c,h);break}}return{offsetX:s.ha*e,path:a}}var jd={glyphs:{"0":{ha:797,x_min:68,x_max:729,o:"m 399 -17 l 399 -17 q 260 6 322 -17 q 156 85 199 29 q 91 235 114 140 q 68 476 68 331 l 68 476 q 91 717 68 622 q 156 868 114 813 q 260 947 199 924 q 399 969 322 969 l 399 969 q 538 947 476 969 q 641 868 599 924 q 706 717 683 813 q 729 476 729 622 l 729 476 q 706 235 729 331 q 641 85 683 140 q 538 6 599 29 q 399 -17 476 -17 z m 399 103 l 399 103 q 510 141 472 103 q 564 254 549 179 q 579 440 579 329 l 579 440 l 579 508 q 564 698 579 622 q 510 812 549 774 q 399 850 472 850 l 399 850 q 288 812 326 850 q 233 699 249 774 q 218 511 218 624 l 218 511 l 218 443 q 233 256 218 332 q 288 141 249 179 q 399 103 326 103 z "},"1":{ha:760,x_min:113,x_max:713,o:"m 713 0 l 113 0 l 113 121 l 349 121 l 349 753 l 113 753 l 113 843 q 214 860 158 846 q 325 897 269 874 q 426 954 381 921 l 426 954 l 494 954 l 494 121 l 713 121 l 713 0 z "},"2":{ha:793,x_min:69,x_max:729,o:"m 729 0 l 69 0 l 69 43 q 92 153 69 103 q 153 246 115 204 q 239 325 192 288 q 335 397 286 363 l 335 397 q 453 489 399 443 q 541 588 507 535 q 575 706 575 640 l 575 706 q 558 775 575 743 q 504 827 540 807 q 410 847 468 847 l 410 847 q 306 826 346 847 q 248 767 267 804 q 229 682 229 731 l 229 682 l 229 625 l 85 625 q 82 646 83 632 q 81 681 81 660 l 81 681 q 127 847 81 783 q 251 940 174 910 q 417 969 328 969 l 417 969 q 562 945 503 969 q 656 881 621 921 q 708 792 692 840 q 724 697 724 743 l 724 697 q 701 576 724 631 q 637 475 678 522 q 541 384 596 428 q 424 297 486 340 l 424 297 q 348 243 385 271 q 283 187 311 215 q 246 132 256 158 l 246 132 l 729 132 l 729 0 z "},"3":{ha:799,x_min:60,x_max:733,o:"m 401 -17 l 401 -17 q 215 18 290 -17 q 99 117 139 53 q 60 267 60 181 l 60 267 l 60 285 l 206 285 l 206 264 q 255 144 206 186 q 393 103 304 103 l 393 103 q 531 142 479 103 q 583 267 583 181 l 583 267 q 556 363 583 329 q 482 411 528 397 q 385 425 436 425 l 385 425 l 294 425 l 294 544 l 389 544 q 476 560 436 544 q 540 612 515 576 q 564 703 564 647 l 564 703 q 542 786 564 754 q 483 834 521 818 q 400 850 446 850 l 400 850 q 312 833 351 850 q 250 782 272 815 q 228 697 228 749 l 228 697 l 228 676 l 81 676 l 81 706 q 122 844 81 785 q 234 937 163 904 q 397 969 306 969 l 397 969 q 562 940 490 969 q 673 852 633 910 q 713 711 713 794 l 713 711 q 692 611 713 653 q 635 542 671 569 q 557 494 600 514 l 557 494 l 557 489 q 683 408 632 467 q 733 256 733 350 l 733 256 q 691 110 733 171 q 574 16 649 49 q 401 -17 499 -17 z "},"4":{ha:786,x_min:42,x_max:740,o:"m 618 0 l 474 0 l 474 224 l 42 224 l 42 343 q 146 539 99 440 q 232 745 193 638 q 297 969 271 853 l 297 969 l 449 969 q 403 816 431 894 q 344 663 376 738 q 279 524 311 588 q 219 413 247 460 q 175 343 192 365 l 175 343 l 474 343 l 474 617 q 494 667 483 640 q 514 723 504 694 q 532 778 524 751 q 547 828 540 804 l 547 828 l 618 828 l 618 343 l 740 343 l 740 224 l 618 224 l 618 0 z "},"5":{ha:796,x_min:67,x_max:732,o:"m 401 -17 l 401 -17 q 226 21 301 -17 q 108 128 150 58 q 67 296 67 199 l 67 296 l 215 296 q 239 192 215 236 q 305 126 263 149 q 401 103 347 103 l 401 103 q 495 126 454 103 q 559 195 536 149 q 582 311 582 242 l 582 311 q 560 417 582 375 q 499 480 539 460 q 408 500 460 500 l 408 500 q 338 488 371 500 q 279 456 304 476 q 236 406 254 435 l 236 406 l 100 425 l 139 953 l 682 953 l 682 819 l 265 819 l 246 553 q 295 585 268 569 q 359 610 322 600 q 443 619 396 619 l 443 619 q 589 586 524 619 q 693 485 654 553 q 732 313 732 418 l 732 313 q 692 135 732 208 q 578 22 651 61 q 401 -17 504 -17 z "},"6":{ha:799,x_min:69,x_max:739,o:"m 419 -17 l 419 -17 q 273 7 338 -17 q 163 84 208 31 q 93 227 117 138 q 69 449 69 317 l 69 449 q 92 696 69 596 q 160 856 115 796 q 268 943 204 917 q 414 969 332 969 l 414 969 q 581 931 517 969 q 676 825 646 892 q 706 674 706 758 l 706 674 l 558 674 q 542 770 558 731 q 492 830 526 810 q 407 850 458 850 l 407 850 q 290 809 331 850 q 234 692 249 768 q 218 511 219 617 l 218 511 q 264 557 232 533 q 342 597 296 581 q 444 613 389 613 l 444 613 q 611 572 546 613 q 708 460 676 531 q 739 300 739 389 l 739 300 q 697 133 739 204 q 583 22 656 61 q 419 -17 511 -17 z m 410 103 l 410 103 q 510 130 471 103 q 569 202 550 157 q 589 301 589 247 l 589 301 q 570 399 589 356 q 512 469 551 443 q 411 494 472 494 l 411 494 q 310 469 350 494 q 250 399 269 443 q 231 297 231 354 l 231 297 q 250 199 231 244 q 309 128 269 154 q 410 103 349 103 z "},"7":{ha:783,x_min:58,x_max:733,o:"m 361 0 l 203 0 q 233 240 203 124 q 316 460 264 356 q 430 656 368 565 q 553 819 492 747 l 553 819 l 58 819 l 58 953 l 733 953 l 733 860 q 632 731 685 801 q 531 582 579 661 q 444 418 482 503 q 383 245 406 333 q 361 68 361 157 l 361 68 l 361 0 z "},"8":{ha:799,x_min:64,x_max:733,o:"m 400 -17 l 400 -17 q 206 21 281 -17 q 98 122 132 58 q 64 261 64 185 l 64 261 q 101 398 64 339 q 221 489 139 457 l 221 489 q 122 581 156 524 q 89 706 89 638 l 89 706 q 124 839 89 779 q 228 934 158 899 q 400 969 297 969 l 400 969 q 571 934 503 969 q 674 839 639 899 q 710 706 710 779 l 710 706 q 676 581 710 638 q 576 489 642 524 l 576 489 q 697 398 660 457 q 733 261 733 339 l 733 261 q 699 122 733 185 q 592 21 665 58 q 400 -17 518 -17 z m 400 101 l 400 101 q 538 145 490 101 q 585 265 585 189 l 585 265 q 538 385 585 342 q 400 428 490 428 l 400 428 q 260 385 308 428 q 213 265 213 342 l 213 265 q 260 145 213 189 q 400 101 308 101 z m 400 546 l 400 546 q 519 585 475 546 q 563 699 563 625 l 563 699 q 519 811 563 771 q 400 851 476 851 l 400 851 q 278 811 322 851 q 235 699 235 771 l 235 699 q 278 585 235 625 q 400 546 322 546 z "},"9":{ha:797,x_min:60,x_max:729,o:"m 383 -17 l 383 -17 q 217 22 281 -17 q 122 128 153 61 q 92 279 92 196 l 92 279 l 239 279 q 256 183 239 222 q 306 123 272 143 q 390 103 339 103 l 390 103 q 508 144 468 103 q 563 261 547 185 q 579 442 578 338 l 579 442 q 535 397 567 421 q 457 356 503 372 q 356 340 411 340 l 356 340 q 189 381 254 340 q 92 494 124 422 q 60 653 60 565 l 60 653 q 101 821 60 750 q 215 931 143 892 q 378 969 288 969 l 378 969 q 525 946 460 969 q 636 869 590 922 q 706 726 682 815 q 729 504 729 636 l 729 504 q 706 258 729 358 q 638 97 682 157 q 531 10 594 36 q 383 -17 467 -17 z m 386 458 l 386 458 q 488 484 447 458 q 548 555 528 510 q 568 656 568 600 l 568 656 q 549 754 568 710 q 489 824 529 799 q 388 850 449 850 l 388 850 q 287 823 326 850 q 228 751 247 796 q 208 651 208 707 l 208 651 q 228 553 208 597 q 286 484 247 510 q 386 458 325 458 z "},"=":{ha:875,x_min:110,x_max:767,o:"m 767 440 l 110 440 l 110 560 l 767 560 l 767 440 z m 767 147 l 110 147 l 110 265 l 767 265 l 767 147 z "},"+":{ha:875,x_min:110,x_max:765,o:"m 496 0 l 378 0 l 378 294 l 110 294 l 110 414 l 378 414 l 378 710 l 496 710 l 496 414 l 765 414 l 765 294 l 496 294 l 496 0 z "}," ":{ha:285,x_min:0,x_max:0,o:""},A:{ha:965,x_min:8,x_max:956,o:"m 168 0 l 8 0 l 382 953 l 581 953 l 956 0 l 789 0 l 704 221 l 253 221 l 168 0 z m 408 632 l 303 353 l 653 353 l 546 632 q 533 667 542 644 q 516 715 525 689 q 498 769 507 742 q 482 818 489 796 l 482 818 l 474 818 q 453 756 465 792 q 428 686 440 719 q 408 632 417 653 l 408 632 z "},B:{ha:975,x_min:113,x_max:911,o:"m 618 0 l 113 0 l 113 953 l 618 953 q 757 924 697 953 q 851 843 817 896 q 885 719 885 790 l 885 719 q 865 621 885 665 q 809 546 844 576 q 729 500 774 515 l 729 500 l 729 494 q 822 453 781 483 q 887 376 863 424 q 911 261 911 328 l 911 261 q 872 113 911 171 q 767 27 832 54 q 618 0 701 0 l 618 0 z m 268 424 l 268 133 l 606 133 q 710 167 669 133 q 751 278 751 201 l 751 278 q 734 356 751 324 q 682 406 717 389 q 594 424 647 424 l 594 424 l 268 424 z m 268 819 l 268 554 l 582 554 q 658 571 626 554 q 708 618 690 588 q 725 686 725 649 l 725 686 q 688 787 725 754 q 592 819 651 819 l 592 819 l 268 819 z "},C:{ha:1007,x_min:67,x_max:946,o:"m 525 -17 l 525 -17 q 277 35 379 -17 q 121 197 175 88 q 67 476 67 307 l 67 476 q 188 848 67 726 q 526 969 310 969 l 526 969 q 741 929 646 969 q 891 809 836 889 q 946 606 946 729 l 946 606 l 788 606 q 756 733 788 682 q 665 811 724 785 q 528 838 606 838 l 528 838 q 363 799 431 838 q 262 685 296 761 q 228 490 228 608 l 228 490 l 228 460 q 262 265 228 342 q 363 152 296 189 q 528 115 429 115 l 528 115 q 668 141 608 115 q 760 218 728 167 q 793 346 793 269 l 793 346 l 946 346 q 891 142 946 222 q 741 22 836 61 q 525 -17 646 -17 z "},D:{ha:1015,x_min:113,x_max:949,o:"m 481 0 l 113 0 l 113 953 l 481 953 q 732 902 628 953 q 892 747 836 851 q 949 476 949 642 l 949 476 q 892 207 949 313 q 732 51 836 101 q 481 0 628 0 l 481 0 z m 268 819 l 268 133 l 479 133 q 610 153 553 133 q 708 213 668 172 q 767 315 747 253 q 788 461 788 376 l 788 461 l 788 490 q 767 638 788 576 q 708 740 747 700 q 610 800 668 781 q 479 819 553 819 l 479 819 l 268 819 z "},E:{ha:936,x_min:113,x_max:860,o:"m 860 0 l 113 0 l 113 953 l 851 953 l 851 819 l 268 819 l 268 554 l 790 554 l 790 421 l 268 421 l 268 133 l 860 133 l 860 0 z "},F:{ha:849,x_min:113,x_max:793,o:"m 268 0 l 113 0 l 113 953 l 793 953 l 793 819 l 268 819 l 268 538 l 743 538 l 743 406 l 268 406 l 268 0 z "},G:{ha:1104,x_min:75,x_max:1e3,o:"m 544 -17 l 544 -17 q 197 103 318 -17 q 75 476 75 222 l 75 476 q 132 752 75 643 q 297 915 189 861 q 561 969 406 969 l 561 969 q 734 949 654 969 q 874 885 814 928 q 967 779 935 843 q 1000 628 1000 715 l 1000 628 l 842 628 q 820 722 842 682 q 760 788 799 761 q 672 826 722 814 q 564 838 621 838 l 564 838 q 423 817 485 838 q 319 753 361 796 q 257 644 278 710 q 236 490 236 579 l 236 490 l 236 461 q 272 263 236 339 q 377 151 307 186 q 549 115 447 115 l 549 115 q 710 143 644 115 q 810 226 775 171 q 844 363 844 281 l 844 363 l 844 376 l 524 376 l 524 506 l 1000 506 l 1000 0 l 888 0 l 872 114 q 783 40 833 68 q 674 -3 733 11 q 544 -17 615 -17 z "},H:{ha:1019,x_min:113,x_max:907,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 554 l 751 554 l 751 953 l 907 953 l 907 0 l 751 0 l 751 421 l 268 421 l 268 0 z "},I:{ha:381,x_min:113,x_max:268,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 0 z "},J:{ha:793,x_min:49,x_max:685,o:"m 367 -17 l 367 -17 q 194 15 265 -17 q 86 108 124 47 q 49 261 49 169 l 49 261 l 49 307 l 203 307 l 203 257 q 244 152 203 189 q 367 115 286 115 l 367 115 q 488 168 446 115 q 529 319 529 221 l 529 319 l 529 953 l 685 953 l 685 322 q 647 134 685 210 q 539 21 610 58 q 367 -17 468 -17 z "},K:{ha:940,x_min:113,x_max:924,o:"m 268 0 l 113 0 l 113 953 l 268 953 l 268 478 l 722 953 l 914 953 l 547 569 l 924 0 l 740 0 l 442 460 l 268 300 l 268 0 z "},L:{ha:767,x_min:113,x_max:743,o:"m 743 0 l 113 0 l 113 953 l 268 953 l 268 135 l 743 135 l 743 0 z "},M:{ha:1175,x_min:113,x_max:1061,o:"m 263 0 l 113 0 l 113 953 l 356 953 l 540 375 q 557 318 549 350 q 573 257 565 286 q 585 206 581 228 l 585 206 l 596 206 q 606 256 599 226 q 620 317 613 285 q 636 376 628 349 l 636 376 l 822 953 l 1061 953 l 1061 0 l 907 0 l 907 522 q 908 632 907 575 q 911 733 910 689 q 913 790 913 778 l 913 790 l 901 790 q 888 738 899 775 q 867 660 878 701 q 846 588 856 618 l 846 588 l 653 0 l 515 0 l 322 586 q 304 649 314 613 q 285 722 294 685 q 268 790 275 760 l 268 790 l 257 790 q 259 708 258 757 q 261 610 260 660 q 263 522 263 561 l 263 522 l 263 0 z "},N:{ha:1019,x_min:113,x_max:907,o:"m 263 0 l 113 0 l 113 953 l 263 953 l 697 356 q 716 332 706 347 q 736 301 726 317 q 750 276 746 286 l 750 276 l 757 276 l 757 953 l 907 953 l 907 0 l 763 0 l 322 604 q 294 647 311 621 q 269 686 278 672 l 269 686 l 263 686 l 263 0 z "},O:{ha:1090,x_min:67,x_max:1024,o:"m 544 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 966 201 1024 311 q 801 38 908 92 q 544 -17 694 -17 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z "},P:{ha:926,x_min:113,x_max:890,o:"m 268 0 l 113 0 l 113 953 l 588 953 q 756 915 689 953 q 856 812 822 878 q 890 656 890 746 l 890 656 q 854 497 890 565 q 749 390 818 428 q 582 353 681 353 l 582 353 l 268 353 l 268 0 z m 268 819 l 268 486 l 575 486 q 691 531 649 486 q 733 654 733 575 l 733 654 q 715 744 733 707 q 663 800 697 781 q 575 819 628 819 l 575 819 l 268 819 z "},Q:{ha:1090,x_min:67,x_max:1024,o:"m 976 -181 l 769 -181 l 606 -14 q 575 -16 590 -15 q 544 -17 560 -17 l 544 -17 q 290 38 397 -17 q 124 201 182 92 q 67 476 67 311 l 67 476 q 124 752 67 643 q 290 915 182 861 q 544 969 397 969 l 544 969 q 801 915 694 969 q 966 752 908 861 q 1024 476 1024 643 l 1024 476 q 956 185 1024 297 q 767 22 889 72 l 767 22 l 976 -181 z m 544 115 l 544 115 q 680 136 621 115 q 780 200 739 157 q 842 308 821 243 q 864 460 864 374 l 864 460 l 864 490 q 842 644 864 579 q 780 753 821 710 q 680 817 739 796 q 544 838 621 838 l 544 838 q 410 817 469 838 q 310 753 351 796 q 249 644 269 710 q 228 490 228 579 l 228 490 l 228 460 q 249 308 228 374 q 310 200 269 243 q 410 136 351 157 q 544 115 469 115 z "},R:{ha:1003,x_min:113,x_max:949,o:"m 268 0 l 113 0 l 113 953 l 614 953 q 782 917 715 953 q 882 816 849 881 q 915 665 915 751 l 915 665 q 872 499 915 569 q 750 394 829 428 l 750 394 l 949 0 l 779 0 l 599 368 l 268 368 l 268 0 z m 268 819 l 268 499 l 601 499 q 717 543 676 499 q 758 667 758 588 l 758 667 q 740 749 758 715 q 688 801 722 783 q 601 819 653 819 l 601 819 l 268 819 z "},S:{ha:931,x_min:68,x_max:863,o:"m 465 -17 l 465 -17 q 315 -1 388 -17 q 188 51 243 15 q 100 141 132 86 q 68 272 68 196 l 68 272 q 69 288 68 281 q 69 301 69 296 l 69 301 l 225 301 q 224 289 225 297 q 224 275 224 281 l 224 275 q 254 188 224 224 q 340 133 285 151 q 465 115 394 115 l 465 115 q 540 120 504 115 q 606 135 576 125 q 658 162 636 146 q 693 200 681 178 q 706 251 706 222 l 706 251 q 680 325 706 296 q 610 374 654 354 q 512 408 567 393 q 399 439 457 424 q 285 475 340 454 q 187 526 231 496 q 117 601 143 556 q 92 711 92 646 l 92 711 q 118 822 92 774 q 194 903 144 871 q 314 953 244 936 q 471 969 383 969 l 471 969 q 613 953 546 969 q 729 904 679 938 q 808 819 779 871 q 836 697 836 768 l 836 697 l 836 681 l 682 681 l 682 699 q 656 774 682 743 q 582 821 629 804 q 472 838 535 838 l 472 838 q 349 823 399 838 q 273 783 299 808 q 247 721 247 757 l 247 721 q 274 655 247 681 q 344 611 300 629 q 442 578 388 593 q 555 548 497 564 q 667 511 613 532 q 766 460 722 490 q 836 384 810 429 q 863 274 863 339 l 863 274 q 811 106 863 171 q 670 13 760 42 q 465 -17 581 -17 z "},T:{ha:850,x_min:31,x_max:819,o:"m 501 0 l 346 0 l 346 819 l 31 819 l 31 953 l 819 953 l 819 819 l 501 819 l 501 0 z "},U:{ha:1011,x_min:108,x_max:903,o:"m 503 -17 l 503 -17 q 292 23 381 -17 q 156 146 203 63 q 108 357 108 229 l 108 357 l 108 953 l 264 953 l 264 353 q 326 175 264 235 q 503 115 389 115 l 503 115 q 683 175 618 115 q 747 353 747 235 l 747 353 l 747 953 l 903 953 l 903 357 q 855 146 903 229 q 717 23 807 63 q 503 -17 628 -17 z "},V:{ha:915,x_min:14,x_max:901,o:"m 549 0 l 365 0 l 14 953 l 182 953 l 418 288 q 432 249 425 271 q 446 206 439 226 q 458 171 453 186 l 458 171 l 465 171 q 478 206 471 186 q 492 246 485 225 q 506 286 499 267 l 506 286 l 739 953 l 901 953 l 549 0 z "},W:{ha:1303,x_min:15,x_max:1288,o:"m 465 0 l 278 0 l 15 953 l 181 953 l 343 325 q 353 283 347 310 q 363 228 358 257 q 372 176 368 200 l 372 176 l 381 176 q 388 215 385 194 q 394 257 390 236 q 402 296 399 278 q 407 325 406 314 l 407 325 l 557 953 l 757 953 l 908 325 q 918 283 913 310 q 928 228 924 257 q 938 176 933 200 l 938 176 l 946 176 q 953 214 949 193 q 961 255 957 235 q 970 293 965 275 q 978 325 975 311 l 978 325 l 1140 953 l 1288 953 l 1025 0 l 843 0 l 683 636 q 674 684 679 657 q 663 740 668 711 q 656 789 658 768 l 656 789 l 649 789 q 642 738 646 767 q 632 681 638 708 q 622 636 626 654 l 622 636 l 465 0 z "},X:{ha:949,x_min:15,x_max:933,o:"m 196 0 l 15 0 l 374 500 l 49 953 l 239 953 l 476 615 l 482 615 l 718 953 l 897 953 l 574 501 l 933 0 l 744 0 l 474 386 l 465 386 l 196 0 z "},Y:{ha:925,x_min:14,x_max:911,o:"m 540 0 l 385 0 l 385 392 l 14 953 l 192 953 l 464 531 l 471 531 l 740 953 l 911 953 l 540 392 l 540 0 z "},Z:{ha:882,x_min:43,x_max:831,o:"m 831 0 l 43 0 l 43 76 l 588 819 l 79 819 l 79 953 l 818 953 l 818 876 l 271 133 l 831 133 l 831 0 z "},a:{ha:764,x_min:47,x_max:757,o:"m 278 -17 l 278 -17 q 203 -8 243 -17 q 127 22 163 0 q 69 84 92 44 q 47 188 47 124 l 47 188 q 82 311 47 263 q 179 388 117 360 q 328 426 242 415 q 518 438 415 438 l 518 438 l 518 510 q 506 574 518 546 q 463 617 494 601 q 374 632 432 632 q 283 617 315 632 q 237 581 250 603 q 224 535 224 560 l 224 535 l 224 514 l 85 514 q 83 528 83 521 l 83 528 l 83 544 q 120 655 83 610 q 224 724 157 700 q 378 747 290 747 l 378 747 q 535 720 472 747 q 631 643 599 693 q 663 522 663 593 l 663 522 l 663 151 q 676 114 663 125 q 707 103 689 103 l 707 103 l 757 103 l 757 6 q 715 -8 740 -1 q 657 -15 690 -15 l 657 -15 q 594 -2 619 -15 q 552 35 568 11 q 531 90 536 60 l 531 90 l 522 90 q 462 34 497 58 q 381 -3 426 10 q 278 -17 335 -17 z m 318 103 l 318 103 q 398 116 361 103 q 461 153 435 129 q 503 212 488 178 q 518 286 518 246 l 518 286 l 518 335 q 350 324 422 335 q 238 283 278 313 q 197 200 197 253 l 197 200 q 211 147 197 168 q 253 114 225 125 q 318 103 281 103 z "},b:{ha:804,x_min:93,x_max:749,o:"m 460 -17 l 460 -17 q 329 13 388 -17 q 233 100 271 42 l 233 100 l 224 100 l 211 0 l 93 0 l 93 1004 l 238 1004 l 238 642 l 246 642 q 302 701 269 678 q 376 736 335 725 q 467 747 418 747 l 467 747 q 614 707 550 747 q 713 583 678 667 q 749 368 749 500 l 749 368 q 714 149 749 233 q 615 24 679 64 q 460 -17 550 -17 z m 419 108 l 419 108 q 522 133 482 108 q 581 212 561 158 q 600 351 600 265 l 600 351 l 600 376 q 581 517 600 463 q 522 597 563 571 q 417 622 482 622 l 417 622 q 343 608 376 622 q 286 565 310 594 q 250 488 263 535 q 238 374 238 440 l 238 374 l 238 354 q 256 220 238 275 q 315 137 275 165 q 419 108 356 108 z "},c:{ha:739,x_min:53,x_max:686,o:"m 383 -17 l 383 -17 q 200 24 274 -17 q 90 150 126 65 q 53 365 53 235 l 53 365 q 90 580 53 496 q 202 706 128 664 q 385 747 276 747 l 385 747 q 515 728 460 747 q 610 673 571 710 q 667 582 649 636 q 686 458 686 528 l 686 458 l 540 458 q 524 554 540 517 q 472 610 507 592 q 382 629 438 629 l 382 629 q 283 602 324 629 q 222 520 243 575 q 201 376 201 465 l 201 376 l 201 353 q 222 212 201 268 q 283 128 242 156 q 388 101 324 101 l 388 101 q 477 122 443 101 q 528 180 511 142 q 546 272 546 218 l 546 272 l 686 272 q 667 154 686 207 q 610 63 649 101 q 515 4 572 25 q 383 -17 458 -17 z "},d:{ha:804,x_min:54,x_max:711,o:"m 344 -17 l 344 -17 q 190 24 256 -17 q 90 149 125 64 q 54 368 54 233 l 54 368 q 90 583 54 500 q 190 707 126 667 q 338 747 254 747 l 338 747 q 428 736 386 747 q 502 701 469 725 q 557 642 535 678 l 557 642 l 567 642 l 567 1004 l 711 1004 l 711 0 l 593 0 l 579 100 l 569 100 q 474 13 533 42 q 344 -17 415 -17 z m 385 108 l 385 108 q 488 137 449 108 q 547 220 528 165 q 567 354 567 275 l 567 354 l 567 374 q 554 488 567 440 q 518 565 542 535 q 461 608 494 594 q 386 622 428 622 l 386 622 q 282 597 322 622 q 223 517 242 571 q 204 376 204 463 l 204 376 l 204 351 q 224 212 204 265 q 283 133 243 158 q 385 108 322 108 z "},e:{ha:769,x_min:54,x_max:715,o:"m 396 -17 l 396 -17 q 208 24 283 -17 q 93 150 132 65 q 54 365 54 235 l 54 365 q 93 581 54 497 q 208 706 132 665 q 399 747 285 747 l 399 747 q 573 708 503 747 q 679 588 643 668 q 715 385 715 507 l 715 385 l 715 329 l 203 329 q 226 199 206 251 q 290 123 247 147 q 397 99 332 99 l 397 99 q 469 109 438 99 q 524 140 501 119 q 558 188 546 160 q 571 253 571 217 l 571 253 l 713 253 q 690 138 713 188 q 626 53 668 88 q 525 1 583 19 q 396 -17 467 -17 z m 206 435 l 206 435 l 564 435 q 552 526 564 489 q 518 586 540 563 q 465 620 496 610 q 396 631 435 631 l 396 631 q 297 610 338 631 q 233 545 256 589 q 206 435 211 501 z "},f:{ha:407,x_min:18,x_max:406,o:"m 269 0 l 125 0 l 125 611 l 18 611 l 18 731 l 125 731 l 125 836 q 140 922 125 882 q 191 989 154 963 q 296 1015 228 1015 l 296 1015 q 335 1013 315 1015 q 374 1007 356 1011 q 406 997 392 1003 l 406 997 l 406 896 l 335 896 q 285 879 301 896 q 269 831 269 863 l 269 831 l 269 731 l 406 731 l 406 611 l 269 611 l 269 0 z "},g:{ha:796,x_min:25,x_max:779,o:"m 529 -253 l 215 -253 q 122 -232 165 -253 q 51 -172 78 -211 q 25 -78 25 -133 l 25 -78 q 59 22 25 -17 q 139 79 93 60 l 139 79 q 85 124 106 94 q 65 190 65 153 l 65 190 q 103 274 65 242 q 190 315 140 306 l 190 315 q 115 396 142 347 q 88 506 88 444 l 88 506 q 122 633 88 579 q 226 717 157 686 q 393 747 294 747 l 393 747 q 474 741 436 747 q 543 724 513 735 l 543 724 q 613 784 592 749 q 638 850 633 819 l 638 850 l 779 850 q 760 767 779 804 q 709 706 742 731 q 631 672 676 682 l 631 672 q 683 598 665 640 q 700 506 700 556 l 700 506 q 667 379 700 433 q 566 294 633 325 q 400 264 499 264 l 400 264 l 286 264 q 233 250 253 264 q 213 208 213 236 l 213 208 q 232 169 213 185 q 283 154 251 154 l 283 154 l 592 154 q 725 101 672 154 q 778 -36 778 47 l 778 -36 q 747 -147 778 -97 q 659 -224 715 -196 q 529 -253 603 -253 l 529 -253 z m 263 -146 l 263 -146 l 528 -146 q 581 -135 557 -146 q 618 -103 604 -124 q 632 -58 632 -83 l 632 -58 q 606 7 632 -17 q 543 31 581 31 l 543 31 l 263 31 q 197 5 224 31 q 171 -58 171 -21 l 171 -58 q 197 -122 171 -97 q 263 -146 222 -146 z m 394 368 l 394 368 q 517 405 476 368 q 557 506 557 442 l 557 506 q 517 606 557 571 q 394 642 476 642 l 394 642 q 272 606 313 642 q 232 506 232 571 l 232 506 q 249 433 232 464 q 303 385 267 401 q 394 368 340 368 z "},h:{ha:796,x_min:93,x_max:708,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 643 l 247 643 q 307 699 274 676 q 382 735 340 722 q 474 747 424 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 531 288 574 q 238 428 238 488 l 238 428 l 238 0 z "},i:{ha:331,x_min:93,x_max:238,o:"m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 238 0 l 93 0 l 93 731 l 238 731 l 238 0 z "},j:{ha:328,x_min:-36,x_max:238,o:"m 238 857 l 93 857 l 93 1004 l 238 1004 l 238 857 z m 71 -253 l 71 -253 q 34 -251 54 -253 q -5 -244 14 -249 q -36 -235 -24 -239 l -36 -235 l -36 -135 l 31 -135 q 77 -118 61 -135 q 93 -71 93 -101 l 93 -71 l 93 731 l 238 731 l 238 -78 q 223 -162 238 -122 q 172 -227 208 -201 q 71 -253 136 -253 z "},k:{ha:733,x_min:93,x_max:710,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 397 l 525 731 l 696 731 l 449 447 l 710 0 l 543 0 l 356 342 l 238 225 l 238 0 z "},l:{ha:331,x_min:93,x_max:238,o:"m 238 0 l 93 0 l 93 1004 l 238 1004 l 238 0 z "},m:{ha:1194,x_min:93,x_max:1108,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 292 693 260 667 q 366 733 325 719 q 454 747 407 747 l 454 747 q 573 719 522 747 q 650 626 624 692 l 650 626 l 660 626 q 718 692 685 665 q 794 733 751 719 q 885 747 836 747 l 885 747 q 1000 724 950 747 q 1079 648 1050 701 q 1108 506 1108 594 l 1108 506 l 1108 0 l 964 0 l 964 479 q 954 548 964 521 q 928 591 944 575 q 888 614 911 607 q 836 621 864 621 l 836 621 q 754 597 790 621 q 696 529 718 572 q 674 428 674 486 l 674 428 l 674 0 l 529 0 l 529 479 q 519 548 529 521 q 493 591 510 575 q 453 614 476 607 q 403 621 429 621 l 403 621 q 319 597 357 621 q 260 529 282 572 q 238 428 238 486 l 238 428 l 238 0 z "},n:{ha:796,x_min:93,x_max:708,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 626 l 235 626 q 297 693 261 667 q 377 733 333 719 q 474 747 421 747 l 474 747 q 596 723 543 747 q 678 644 649 699 q 708 499 708 590 l 708 499 l 708 0 l 564 0 l 564 476 q 553 546 564 518 q 524 590 543 574 q 478 614 504 607 q 419 621 451 621 l 419 621 q 328 597 369 621 q 263 529 288 572 q 238 428 238 486 l 238 428 l 238 0 z "},o:{ha:810,x_min:54,x_max:756,o:"m 404 -17 l 404 -17 q 212 24 290 -17 q 94 150 133 65 q 54 365 54 235 l 54 365 q 94 581 54 497 q 212 706 133 665 q 404 747 290 747 l 404 747 q 599 706 521 747 q 716 581 676 665 q 756 365 756 497 l 756 365 q 716 150 756 235 q 599 24 676 65 q 404 -17 521 -17 z m 404 103 l 404 103 q 518 130 474 103 q 584 213 563 157 q 606 353 606 268 l 606 353 l 606 378 q 584 518 606 463 q 518 601 563 574 q 404 628 474 628 l 404 628 q 292 601 336 628 q 226 518 247 574 q 204 378 204 463 l 204 378 l 204 353 q 226 213 204 268 q 292 130 247 157 q 404 103 336 103 z "},p:{ha:804,x_min:93,x_max:749,o:"m 238 -240 l 93 -240 l 93 731 l 211 731 l 224 631 l 233 631 q 329 718 271 689 q 460 747 388 747 l 460 747 q 615 707 550 747 q 714 582 679 667 q 749 363 749 497 l 749 363 q 713 148 749 232 q 614 24 678 64 q 467 -17 550 -17 l 467 -17 q 376 -6 418 -17 q 302 29 335 6 q 246 89 269 53 l 246 89 l 238 89 l 238 -240 z m 417 108 l 417 108 q 522 134 482 108 q 581 214 563 160 q 600 351 600 268 l 600 351 l 600 376 q 581 518 600 464 q 522 597 561 572 q 419 622 482 622 l 419 622 q 315 594 356 622 q 256 510 275 565 q 238 375 238 454 l 238 375 l 238 356 q 250 243 238 290 q 286 166 263 196 q 343 122 310 136 q 417 108 376 108 z "},q:{ha:804,x_min:54,x_max:711,o:"m 711 -240 l 567 -240 l 567 89 l 557 89 q 501 29 535 53 q 426 -6 468 6 q 338 -17 385 -17 l 338 -17 q 190 24 254 -17 q 90 148 126 64 q 54 363 54 232 l 54 363 q 90 582 54 497 q 190 707 125 667 q 344 747 256 747 l 344 747 q 475 718 417 747 q 569 631 533 689 l 569 631 l 579 631 l 593 731 l 711 731 l 711 -240 z m 386 108 l 386 108 q 462 122 429 108 q 518 166 494 136 q 554 243 542 196 q 567 356 567 290 l 567 356 l 567 375 q 547 510 567 454 q 488 594 528 565 q 385 622 449 622 l 385 622 q 283 597 322 622 q 224 518 243 572 q 204 376 204 464 l 204 376 l 204 351 q 223 214 204 268 q 282 134 242 160 q 386 108 322 108 z "},r:{ha:481,x_min:93,x_max:465,o:"m 238 0 l 93 0 l 93 731 l 213 731 l 225 613 l 233 613 q 266 678 246 647 q 319 728 286 708 q 399 747 351 747 l 399 747 q 438 743 421 747 q 465 736 456 739 l 465 736 l 465 600 l 417 600 q 338 586 372 600 q 281 545 304 572 q 248 479 258 518 q 238 392 238 440 l 238 392 l 238 0 z "},s:{ha:728,x_min:51,x_max:675,o:"m 363 -17 l 363 -17 q 228 0 286 -17 q 131 46 169 17 q 72 116 92 75 q 51 207 51 157 l 51 207 q 52 219 51 214 q 53 229 53 225 l 53 229 l 196 229 l 196 214 q 219 145 196 171 q 283 109 243 119 q 369 99 322 99 l 369 99 q 447 109 411 99 q 505 140 482 119 q 528 193 528 161 l 528 193 q 499 257 528 235 q 422 292 469 279 q 324 321 375 306 l 324 321 q 233 348 278 333 q 151 386 188 363 q 93 446 115 410 q 71 536 71 482 l 71 536 q 93 626 71 588 q 155 692 115 665 q 249 732 194 718 q 369 746 304 746 l 369 746 q 490 731 438 746 q 580 690 543 717 q 636 627 617 664 q 656 549 656 590 l 656 549 q 655 531 656 540 q 654 519 654 522 l 654 519 l 513 519 l 513 532 q 497 582 513 560 q 449 618 482 604 q 363 632 417 632 l 363 632 q 299 626 326 632 q 253 608 271 619 q 226 582 235 597 q 217 547 217 567 l 217 547 q 240 498 217 515 q 300 469 263 481 q 381 443 338 457 l 381 443 q 482 415 431 429 q 577 378 533 400 q 648 317 621 356 q 675 213 675 278 l 675 213 q 651 108 675 153 q 585 37 628 64 q 486 -3 543 10 q 363 -17 429 -17 z "},t:{ha:424,x_min:21,x_max:389,o:"m 275 -17 l 275 -17 q 177 8 213 -17 q 127 70 142 32 q 113 151 113 108 l 113 151 l 113 611 l 21 611 l 21 731 l 115 731 l 142 935 l 257 935 l 257 731 l 389 731 l 389 611 l 257 611 l 257 168 q 271 119 257 136 q 317 103 285 103 l 317 103 l 389 103 l 389 6 q 355 -5 375 0 q 314 -13 335 -10 q 275 -17 293 -17 z "},u:{ha:794,x_min:86,x_max:701,o:"m 322 -17 l 322 -17 q 151 40 217 -17 q 86 232 86 96 l 86 232 l 86 731 l 231 731 l 231 254 q 241 185 231 213 q 271 140 251 157 q 317 117 290 124 q 375 110 343 110 l 375 110 q 466 134 425 110 q 532 202 507 158 q 557 303 557 246 l 557 303 l 557 731 l 701 731 l 701 0 l 583 0 l 571 104 l 561 104 q 499 38 535 64 q 419 -3 463 11 q 322 -17 375 -17 z "},v:{ha:717,x_min:13,x_max:704,o:"m 432 0 l 283 0 l 13 731 l 164 731 l 290 382 q 311 317 299 357 q 336 236 324 278 q 358 161 349 194 l 358 161 l 365 161 q 385 234 374 193 q 410 315 397 275 q 432 382 422 356 l 432 382 l 557 731 l 704 731 l 432 0 z "},w:{ha:1028,x_min:10,x_max:1017,o:"m 379 0 l 229 0 l 10 731 l 160 731 l 267 331 q 281 269 275 301 q 293 213 288 238 q 301 178 299 188 l 301 178 l 310 178 q 322 235 315 203 q 335 294 329 267 q 343 335 340 321 l 343 335 l 440 731 l 596 731 l 696 333 q 708 283 701 311 q 720 226 714 254 q 729 178 726 199 l 729 178 l 738 178 q 748 224 742 197 q 761 279 754 251 q 774 331 768 307 l 774 331 l 879 731 l 1017 731 l 799 0 l 649 0 l 560 364 q 546 425 554 390 q 531 494 538 460 q 519 556 524 529 l 519 556 l 511 556 q 503 511 508 540 q 490 444 499 482 q 471 364 482 407 l 471 364 l 379 0 z "},x:{ha:735,x_min:17,x_max:718,o:"m 182 0 l 17 0 l 278 375 l 32 731 l 207 731 l 368 486 l 376 486 l 539 731 l 704 731 l 457 379 l 718 0 l 544 0 l 367 268 l 360 268 l 182 0 z "},y:{ha:717,x_min:13,x_max:704,o:"m 172 -253 l 172 -253 q 103 -247 131 -253 q 68 -239 75 -240 l 68 -239 l 68 -135 l 138 -135 q 199 -121 168 -135 q 256 -76 231 -107 q 297 0 281 -46 l 297 0 l 13 731 l 164 731 l 306 367 q 327 304 315 342 q 351 228 339 267 q 371 158 363 189 l 371 158 l 378 158 q 392 206 385 179 q 408 263 400 233 q 425 319 417 292 q 439 365 433 346 l 439 365 l 557 731 l 704 731 l 457 28 q 411 -82 436 -31 q 353 -172 386 -133 q 276 -231 321 -210 q 172 -253 232 -253 z "},z:{ha:699,x_min:39,x_max:656,o:"m 656 0 l 39 0 l 39 72 l 428 611 l 65 611 l 65 731 l 636 731 l 636 660 l 246 119 l 656 119 l 656 0 z "},".":{ha:400,x_min:122,x_max:276,o:"m 276 0 l 122 0 l 122 161 l 276 161 l 276 0 z "},",":{ha:400,x_min:110,x_max:276,o:"m 110 -214 l 110 -214 l 110 -151 q 159 -124 140 -146 q 187 -71 178 -103 q 196 0 196 -39 l 196 0 l 122 0 l 122 161 l 276 161 l 276 15 q 252 -112 276 -65 q 190 -183 228 -160 q 110 -214 151 -206 z "},"'":{ha:315,x_min:82,x_max:233,o:"m 206 568 l 103 568 l 82 749 l 82 953 l 233 953 l 233 749 l 206 568 z "},"\u2019":{ha:358,x_min:93,x_max:261,o:"m 93 578 l 93 578 l 93 642 q 143 669 124 647 q 171 722 163 690 q 179 792 179 754 l 179 792 l 106 792 l 106 953 l 261 953 l 261 807 q 236 680 261 728 q 173 609 211 632 q 93 578 135 586 z "},"!":{ha:392,x_min:111,x_max:281,o:"m 242 257 l 150 257 l 111 953 l 281 953 l 242 257 z m 274 0 l 118 0 l 118 161 l 274 161 l 274 0 z "},"?":{ha:826,x_min:86,x_max:724,o:"m 472 256 l 336 256 l 336 328 q 353 420 336 383 q 396 485 369 457 q 452 535 422 513 q 508 581 482 557 q 551 634 533 604 q 568 704 568 664 l 568 704 q 563 744 568 721 q 542 789 558 767 q 494 826 526 811 q 408 840 463 840 l 408 840 q 317 822 351 840 q 265 778 282 804 q 242 724 247 751 q 236 678 236 697 l 236 678 l 236 660 q 238 640 236 650 l 238 640 l 90 640 q 88 658 89 646 q 86 688 86 669 l 86 688 q 98 766 86 726 q 134 842 110 806 q 198 908 158 879 q 292 953 238 936 q 419 969 347 969 l 419 969 q 532 956 482 969 q 617 919 582 943 q 676 865 653 896 q 712 797 700 833 q 724 722 724 761 l 724 722 q 706 612 724 657 q 659 535 688 567 q 599 480 631 504 q 538 433 567 456 q 490 381 508 410 q 472 311 472 353 l 472 311 l 472 256 z m 481 0 l 328 0 l 328 161 l 481 161 l 481 0 z "},$:{ha:728,x_min:51,x_max:675,o:"m 403 -68 l 333 -68 l 333 94 q 228 111 275 97 l 228 111 q 131 156 169 126 q 72 227 92 186 q 51 318 51 268 l 51 318 q 52 331 51 325 q 53 340 53 336 l 53 340 l 196 340 l 196 325 q 219 256 196 282 q 283 221 243 231 l 283 221 q 333 211 307 214 l 333 211 l 333 428 q 324 431 329 429 l 324 431 q 233 458 278 443 q 151 497 188 474 q 93 556 115 519 q 71 647 71 593 l 71 647 q 93 738 71 699 q 155 803 115 776 q 250 843 194 829 l 250 843 q 333 856 289 853 l 333 856 l 333 1004 l 403 1004 l 403 856 q 490 843 451 853 l 490 843 q 580 801 543 828 q 636 738 617 774 q 656 660 656 701 l 656 660 q 655 642 656 650 q 654 631 654 633 l 654 631 l 513 631 l 513 643 q 497 693 513 671 q 450 729 482 715 l 450 729 q 403 740 431 738 l 403 740 l 403 549 q 482 526 442 538 l 482 526 q 577 489 533 511 q 648 427 621 467 q 675 324 675 388 l 675 324 q 651 219 675 263 q 585 147 628 175 q 486 107 543 119 l 486 107 q 403 96 447 99 l 403 96 l 403 -68 z m 403 408 l 403 211 q 447 219 426 214 l 447 219 q 505 251 482 229 q 528 304 528 272 l 528 304 q 499 368 528 346 q 422 404 469 390 l 422 404 q 403 408 413 406 l 403 408 z m 333 569 l 333 569 l 333 742 q 299 738 315 740 l 299 738 q 253 719 271 731 q 226 692 235 707 q 217 658 217 678 l 217 658 q 240 609 217 626 q 300 581 263 592 l 300 581 q 333 569 317 575 z "},"%":{ha:1331,x_min:125,x_max:1206,o:"m 381 0 l 260 0 l 953 953 l 1075 953 l 381 0 z m 344 468 l 344 468 q 227 491 276 468 q 151 568 178 514 q 125 718 125 622 l 125 718 q 151 869 125 815 q 227 947 178 924 q 344 969 276 969 l 344 969 q 460 947 413 969 q 535 869 508 924 q 561 718 561 815 l 561 718 q 535 567 561 622 q 460 490 508 513 q 344 468 413 468 z m 344 560 l 344 560 q 424 600 404 560 q 443 711 443 640 l 443 711 l 443 726 q 435 808 443 774 q 405 860 426 842 q 344 878 383 878 l 344 878 q 265 838 285 878 q 244 726 244 797 l 244 726 l 244 711 q 265 600 244 640 q 344 560 285 560 z m 989 -17 l 989 -17 q 873 6 922 -17 q 797 83 824 29 q 771 233 771 138 l 771 233 q 797 385 771 331 q 873 462 824 439 q 989 485 922 485 l 989 485 q 1106 462 1057 485 q 1180 385 1154 439 q 1206 233 1206 331 l 1206 233 q 1180 83 1206 138 q 1106 6 1154 28 q 989 -17 1057 -17 z m 989 75 l 989 75 q 1068 115 1049 75 q 1088 226 1088 156 l 1088 226 l 1088 242 q 1080 323 1088 289 q 1051 375 1072 357 q 989 393 1029 393 l 989 393 q 910 353 931 393 q 890 242 890 313 l 890 242 l 890 226 q 910 115 890 156 q 989 75 931 75 z "},"&":{ha:986,x_min:71,x_max:931,o:"m 439 -17 l 439 -17 q 248 16 331 -17 q 118 110 165 49 q 71 256 71 171 l 71 256 q 122 410 71 353 q 249 489 172 467 l 249 489 l 249 494 q 138 574 182 525 q 93 708 93 622 l 93 708 q 138 851 93 793 q 265 940 183 910 q 454 969 346 969 l 454 969 q 638 938 558 969 q 763 847 718 906 q 808 708 808 788 l 808 708 l 808 679 l 664 679 l 664 697 q 636 783 663 750 q 563 833 610 817 q 451 849 515 849 l 451 849 q 368 840 407 849 q 301 812 329 831 q 257 764 272 793 q 242 696 242 735 l 242 696 q 267 610 242 644 q 333 560 292 576 q 422 543 375 543 l 422 543 l 513 543 l 513 425 l 426 425 q 326 412 374 425 q 250 365 279 399 q 221 268 221 331 l 221 268 q 249 174 221 210 q 327 121 276 138 q 446 104 378 104 l 446 104 q 567 122 519 104 q 640 178 615 140 q 664 269 664 215 l 664 269 l 664 543 l 931 543 l 931 424 l 808 424 l 808 274 q 767 118 808 183 q 643 18 725 53 q 439 -17 561 -17 z "},"-":{ha:463,x_min:56,x_max:407,o:"m 407 306 l 56 306 l 56 444 l 407 444 l 407 306 z "},":":{ha:438,x_min:142,x_max:296,o:"m 296 569 l 142 569 l 142 731 l 296 731 l 296 569 z m 296 0 l 142 0 l 142 161 l 296 161 l 296 0 z "},"|":{ha:340,x_min:113,x_max:228,o:"m 228 -260 l 113 -260 l 113 1004 l 228 1004 l 228 -260 z "},"\xA3":{ha:797,x_min:36,x_max:726,o:"m 722 0 l 54 0 l 54 124 l 153 124 l 153 411 l 36 411 l 36 532 l 153 532 l 153 701 q 188 850 153 790 q 288 940 224 910 q 440 969 353 969 l 440 969 q 590 940 526 969 q 690 853 654 911 q 726 706 726 796 l 726 706 l 726 686 l 582 686 l 582 710 q 565 788 582 757 q 515 835 547 819 q 440 850 483 850 l 440 850 q 365 835 397 850 q 316 790 333 819 q 299 715 299 760 l 299 715 l 299 532 l 524 532 l 524 411 l 297 411 l 283 124 l 722 124 l 722 0 z "},"/":{ha:411,x_min:0,x_max:411,o:"m 110 -68 l 0 -68 l 301 1021 l 411 1021 l 110 -68 z "},"(":{ha:494,x_min:94,x_max:429,o:"m 429 -218 l 336 -218 q 157 72 219 -89 q 94 404 94 232 l 94 404 q 157 735 94 574 q 336 1022 219 896 l 336 1022 l 429 1022 q 330 836 375 938 q 259 624 285 735 q 233 404 233 514 l 233 404 q 259 182 233 293 q 330 -31 285 71 q 429 -218 375 -133 l 429 -218 z "},")":{ha:494,x_min:65,x_max:400,o:"m 65 1021 l 158 1021 q 338 731 276 892 q 400 399 400 571 l 400 399 q 338 69 400 229 q 158 -219 276 -92 l 158 -219 l 65 -219 q 165 -33 121 -135 q 235 178 210 68 q 261 399 261 289 l 261 399 q 235 621 261 510 q 165 834 210 732 q 65 1021 121 936 l 65 1021 z "}},familyName:"Archivo Medium",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-239,xMax:1319,yMin:-400,yMax:1087},resolution:1e3};var e1={glyphs:{"0":{ha:868,x_min:63,x_max:806,o:"m 435 -17 l 435 -17 q 264 13 335 -17 q 149 103 193 43 q 83 257 104 164 q 63 478 63 350 l 63 478 q 83 697 63 604 q 149 851 104 790 q 264 941 193 911 q 435 971 335 971 l 435 971 q 605 941 535 971 q 719 851 675 911 q 785 697 764 790 q 806 478 806 604 l 806 478 q 785 257 806 350 q 719 103 764 164 q 605 13 675 43 q 435 -17 535 -17 z m 435 149 l 435 149 q 522 178 490 149 q 565 269 553 208 q 576 422 576 329 l 576 422 l 576 531 q 565 686 576 625 q 522 776 553 747 q 435 806 490 806 l 435 806 q 348 776 379 806 q 304 687 317 747 q 292 532 292 626 l 292 532 l 292 425 q 304 269 292 331 q 348 178 317 208 q 435 149 379 149 z "},"1":{ha:868,x_min:140,x_max:813,o:"m 813 0 l 142 0 l 142 179 l 369 179 l 369 689 l 140 689 l 140 824 q 262 847 196 828 q 392 895 328 867 q 508 956 457 924 l 508 956 l 597 956 l 597 179 l 813 179 l 813 0 z "},"2":{ha:868,x_min:69,x_max:803,o:"m 803 0 l 69 0 l 69 57 q 93 169 69 118 q 157 265 117 221 q 247 351 197 310 q 346 429 296 392 l 346 429 q 453 510 403 471 q 534 592 503 549 q 565 688 565 635 l 565 688 q 552 741 565 715 q 510 783 539 767 q 435 800 482 800 l 435 800 q 356 783 388 800 q 307 735 324 765 q 290 663 290 704 l 290 663 l 290 621 l 79 621 q 77 640 78 629 q 76 664 76 650 l 76 664 q 122 832 76 764 q 252 935 168 900 q 453 971 336 971 l 453 971 q 606 947 542 971 q 713 883 671 924 q 774 792 754 843 q 794 688 794 742 l 794 688 q 771 569 794 622 q 706 470 747 517 q 608 381 664 424 q 489 296 553 339 l 489 296 q 431 255 457 274 q 390 222 406 236 q 368 197 375 208 l 368 197 l 803 197 l 803 0 z "},"3":{ha:868,x_min:60,x_max:807,o:"m 436 -17 l 436 -17 q 227 20 311 -17 q 101 120 143 57 q 60 264 60 183 l 60 264 l 60 289 l 271 289 l 271 263 q 310 181 271 211 q 425 150 349 150 l 425 150 q 539 185 501 150 q 576 286 576 221 l 576 286 q 558 358 576 332 q 510 397 540 385 q 444 408 481 408 l 444 408 l 354 408 l 354 564 l 435 564 q 497 577 469 564 q 540 617 524 590 q 556 683 556 643 l 556 683 q 540 748 556 721 q 495 790 525 775 q 425 804 465 804 l 425 804 q 356 790 388 804 q 308 751 325 776 q 290 693 290 726 l 290 693 l 290 675 l 86 675 l 86 710 q 128 844 86 785 q 250 937 171 903 q 438 971 329 971 l 438 971 q 622 938 544 971 q 742 847 700 906 q 783 711 783 788 l 783 711 q 765 617 783 660 q 713 546 746 575 q 638 499 681 517 l 638 499 l 638 493 q 761 409 715 469 q 807 258 807 349 l 807 258 q 763 116 806 178 q 638 19 719 54 q 436 -17 556 -17 z "},"4":{ha:869,x_min:38,x_max:829,o:"m 703 0 l 482 0 l 482 203 l 38 203 l 38 379 q 135 551 88 457 q 226 751 183 644 q 299 971 269 858 l 299 971 l 528 971 q 490 845 517 913 q 428 709 464 778 q 353 577 393 640 q 277 462 314 514 q 210 378 240 410 l 210 378 l 482 378 l 482 596 q 515 654 497 621 q 549 724 532 688 q 580 794 567 760 q 601 857 593 828 l 601 857 l 703 857 l 703 378 l 829 378 l 829 203 l 703 203 l 703 0 z "},"5":{ha:868,x_min:58,x_max:806,o:"m 440 -17 l 440 -17 q 234 23 319 -17 q 103 134 149 63 q 58 303 58 206 l 58 303 l 271 303 q 289 224 271 258 q 342 170 307 189 q 425 151 376 151 l 425 151 q 507 171 474 151 q 558 227 540 190 q 576 314 576 264 l 576 314 q 558 399 576 364 q 507 452 540 433 q 428 471 474 471 l 428 471 q 360 458 388 471 q 317 429 333 446 q 289 397 300 413 l 289 397 l 96 422 l 136 954 l 744 954 l 744 756 l 315 756 l 303 569 q 335 590 311 576 q 401 617 360 604 q 496 629 442 629 l 496 629 q 657 593 588 629 q 766 486 726 557 q 806 313 806 415 l 806 313 q 761 141 806 215 q 635 25 717 67 q 440 -17 553 -17 z "},"6":{ha:868,x_min:64,x_max:815,o:"m 449 -17 l 449 -17 q 283 10 354 -17 q 162 92 211 36 q 88 237 113 147 q 64 451 64 326 l 64 451 q 88 694 64 594 q 160 854 113 793 q 280 943 208 915 q 444 971 351 971 l 444 971 q 631 933 554 971 q 747 825 707 894 q 788 660 788 756 l 788 660 l 575 660 q 560 740 575 708 q 515 789 544 772 q 444 806 486 806 l 444 806 q 351 775 383 806 q 306 684 318 744 q 294 532 294 624 l 294 532 q 346 569 314 551 q 417 599 378 588 q 499 610 457 610 l 499 610 q 667 573 596 610 q 776 469 738 536 q 815 308 815 401 l 815 308 q 769 133 815 206 q 640 22 722 61 q 449 -17 558 -17 z m 444 149 l 444 149 q 525 167 493 149 q 573 221 557 186 q 589 301 589 256 l 589 301 q 573 383 589 349 q 525 438 557 418 q 444 458 493 458 l 444 458 q 365 439 397 458 q 316 385 332 419 q 300 303 300 351 l 300 303 q 316 222 300 257 q 365 168 332 188 q 444 149 397 149 z "},"7":{ha:868,x_min:63,x_max:811,o:"m 464 0 l 213 0 q 238 210 213 107 q 307 409 263 313 q 408 592 351 506 q 529 754 465 679 l 529 754 l 63 754 l 63 954 l 811 954 l 811 835 q 711 705 761 774 q 617 562 661 636 q 538 408 572 488 q 483 246 503 329 q 464 76 464 163 l 464 76 l 464 0 z "},"8":{ha:868,x_min:58,x_max:810,o:"m 433 -17 l 433 -17 q 228 18 311 -17 q 101 115 144 53 q 58 263 58 178 l 58 263 q 98 398 58 344 q 211 486 138 451 l 211 486 q 117 583 144 533 q 89 697 89 633 l 89 697 q 132 842 89 781 q 252 937 175 903 q 433 971 329 971 l 433 971 q 614 937 536 971 q 735 842 692 903 q 779 697 779 781 l 779 697 q 751 581 779 632 q 656 486 722 531 l 656 486 q 770 398 731 451 q 810 263 810 344 l 810 263 q 766 115 810 178 q 639 18 722 53 q 433 -17 556 -17 z m 433 149 l 433 149 q 540 182 500 149 q 579 278 579 215 l 579 278 q 539 374 579 342 q 433 407 499 407 l 433 407 q 329 374 369 407 q 289 278 289 342 l 289 278 q 328 182 289 215 q 433 149 367 149 z m 433 567 l 433 567 q 531 596 492 567 q 571 686 571 625 l 571 686 q 533 776 571 746 q 433 807 494 807 l 433 807 q 335 776 372 807 q 299 686 299 746 l 299 686 q 336 596 299 625 q 433 567 374 567 z "},"9":{ha:868,x_min:54,x_max:806,o:"m 424 -17 l 424 -17 q 239 22 315 -17 q 122 129 163 60 q 81 294 81 199 l 81 294 l 294 294 q 309 215 294 247 q 353 165 324 182 q 425 149 383 149 l 425 149 q 518 179 486 149 q 562 271 550 210 q 574 422 574 332 l 574 422 q 524 386 556 404 q 452 356 492 368 q 371 344 413 344 l 371 344 q 203 381 274 344 q 93 486 132 418 q 54 646 54 554 l 54 646 q 100 822 54 749 q 228 933 146 894 q 419 971 311 971 l 419 971 q 586 944 514 971 q 707 863 658 918 q 781 718 756 807 q 806 503 806 629 l 806 503 q 781 260 806 360 q 709 100 757 161 q 590 11 661 39 q 424 -17 518 -17 z m 424 497 l 424 497 q 503 516 471 497 q 552 569 536 535 q 568 650 568 603 l 568 650 q 552 732 568 697 q 504 786 536 767 q 424 806 472 806 l 424 806 q 344 786 376 806 q 296 733 313 767 q 279 651 279 699 l 279 651 q 295 569 279 604 q 343 516 311 535 q 424 497 375 497 z "},"=":{ha:901,x_min:101,x_max:800,o:"m 800 432 l 101 432 l 101 593 l 800 593 l 800 432 z m 800 126 l 101 126 l 101 288 l 800 288 l 800 126 z "},"+":{ha:901,x_min:101,x_max:800,o:"m 531 0 l 369 0 l 369 281 l 101 281 l 101 442 l 369 442 l 369 722 l 531 722 l 531 442 l 800 442 l 800 281 l 531 281 l 531 0 z "}," ":{ha:263,x_min:0,x_max:0,o:""},A:{ha:1036,x_min:11,x_max:1026,o:"m 267 0 l 11 0 l 369 954 l 668 954 l 1026 0 l 761 0 l 704 165 l 324 165 l 267 0 z m 453 553 l 383 351 l 643 351 l 575 553 q 562 591 569 568 q 547 640 554 614 q 532 692 539 665 q 518 738 525 718 l 518 738 l 508 738 q 493 678 503 711 l 493 678 l 472 611 q 453 553 461 578 l 453 553 z "},B:{ha:1035,x_min:104,x_max:976,o:"m 692 0 l 104 0 l 104 954 l 688 954 q 821 925 761 954 q 916 843 881 896 q 951 719 951 790 l 951 719 q 930 613 951 657 q 873 540 908 568 q 793 499 838 513 l 793 499 l 793 493 q 886 453 844 482 q 952 376 928 425 q 976 258 976 328 l 976 258 q 938 119 976 176 q 835 31 899 61 q 692 0 771 0 l 692 0 z m 353 399 l 353 192 l 624 192 q 695 218 668 192 q 722 299 722 244 l 722 299 q 710 351 722 328 q 676 386 699 374 q 619 399 653 399 l 619 399 l 353 399 z m 353 769 l 353 575 l 601 575 q 653 588 632 575 q 687 622 675 600 q 699 675 699 644 l 699 675 q 672 744 699 719 q 606 769 646 769 l 606 769 l 353 769 z "},C:{ha:1044,x_min:63,x_max:985,o:"m 543 -17 l 543 -17 q 281 37 389 -17 q 118 200 174 90 q 63 478 63 310 l 63 478 q 187 848 63 725 q 543 971 311 971 l 543 971 q 772 927 672 971 q 928 797 872 883 q 985 581 985 710 l 985 581 l 742 581 q 717 685 742 642 q 649 753 693 729 q 543 776 606 776 l 543 776 q 415 744 465 776 q 342 653 365 713 q 318 508 318 593 l 318 508 l 318 446 q 342 301 318 361 q 415 209 365 240 q 542 178 464 178 l 542 178 q 655 200 608 178 q 726 266 701 222 q 750 371 750 310 l 750 371 l 985 371 q 930 156 985 242 q 776 26 875 69 q 543 -17 676 -17 z "},D:{ha:1049,x_min:104,x_max:986,o:"m 503 0 l 104 0 l 104 954 l 503 954 q 766 903 658 954 q 930 747 874 851 q 986 478 986 642 l 986 478 q 930 209 986 315 q 766 51 874 103 q 503 0 658 0 l 503 0 z m 353 760 l 353 194 l 500 194 q 601 211 558 194 q 674 260 644 228 q 717 339 703 292 q 731 447 731 386 l 731 447 l 731 506 q 717 615 731 568 q 674 694 703 663 q 601 743 644 726 q 500 760 558 760 l 500 760 l 353 760 z "},E:{ha:971,x_min:107,x_max:904,o:"m 904 0 l 107 0 l 107 954 l 894 954 l 894 760 l 356 760 l 356 581 l 826 581 l 826 390 l 356 390 l 356 194 l 904 194 l 904 0 z "},F:{ha:890,x_min:104,x_max:836,o:"m 353 0 l 104 0 l 104 954 l 836 954 l 836 760 l 353 760 l 353 554 l 778 554 l 778 364 l 353 364 l 353 0 z "},G:{ha:1132,x_min:68,x_max:1040,o:"m 539 -17 l 539 -17 q 188 106 308 -17 q 68 478 68 228 l 68 478 q 127 752 68 643 q 299 916 186 861 q 572 971 413 971 l 572 971 q 753 949 668 971 q 903 883 838 926 q 1004 773 968 839 q 1040 618 1040 707 l 1040 618 l 796 618 q 779 685 796 656 q 733 735 763 715 q 664 766 703 756 q 582 776 625 776 l 582 776 q 469 760 518 776 q 388 708 419 743 q 340 624 356 674 q 324 507 324 574 l 324 507 l 324 446 q 351 297 324 357 q 435 208 379 238 q 574 178 492 178 l 574 178 q 688 197 638 178 q 769 253 739 217 q 799 342 799 290 l 799 342 l 799 349 l 542 349 l 542 524 l 1040 524 l 1040 0 l 896 0 l 872 100 q 780 35 829 61 q 672 -4 731 8 q 539 -17 613 -17 z "},H:{ha:1093,x_min:104,x_max:989,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 588 l 740 588 l 740 954 l 989 954 l 989 0 l 740 0 l 740 385 l 353 385 l 353 0 z "},I:{ha:457,x_min:104,x_max:353,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 0 z "},J:{ha:875,x_min:40,x_max:772,o:"m 407 -17 l 407 -17 q 209 17 292 -17 q 83 122 126 51 q 40 301 40 192 l 40 301 l 40 332 l 278 332 l 278 301 q 309 208 278 238 q 401 178 340 178 l 401 178 q 492 215 461 178 q 524 331 524 253 l 524 331 l 524 954 l 772 954 l 772 329 q 729 134 772 211 q 604 20 686 57 q 407 -17 522 -17 z "},K:{ha:1069,x_min:104,x_max:1046,o:"m 353 0 l 104 0 l 104 954 l 353 954 l 353 531 l 731 954 l 1039 954 l 683 564 l 1046 0 l 751 0 l 511 394 l 353 249 l 353 0 z "},L:{ha:865,x_min:104,x_max:838,o:"m 838 0 l 104 0 l 104 954 l 353 954 l 353 204 l 838 204 l 838 0 z "},M:{ha:1269,x_min:104,x_max:1165,o:"m 331 0 l 104 0 l 104 954 l 467 954 l 582 529 q 599 469 589 507 q 618 389 608 431 q 635 314 628 347 l 635 314 l 646 314 q 660 377 651 340 q 678 455 668 414 q 696 531 688 496 l 696 531 l 813 954 l 1165 954 l 1165 0 l 924 0 l 924 407 q 924 528 924 467 q 926 639 925 589 q 928 711 928 689 l 928 711 l 917 711 q 903 651 913 690 q 884 569 894 611 q 865 496 874 526 l 865 496 l 726 0 l 526 0 l 386 496 l 369 563 q 351 642 360 601 q 335 710 342 682 l 335 710 l 324 710 q 326 622 325 674 q 329 513 328 569 q 331 407 331 457 l 331 407 l 331 0 z "},N:{ha:1093,x_min:104,x_max:989,o:"m 335 0 l 104 0 l 104 954 l 325 954 l 672 511 q 698 479 682 500 q 729 437 714 458 q 751 403 744 415 l 751 403 l 758 404 l 758 954 l 989 954 l 989 0 l 769 0 l 401 467 q 367 513 383 489 q 342 551 351 536 l 342 551 l 335 550 l 335 0 z "},O:{ha:1125,x_min:63,x_max:1063,o:"m 563 -17 l 563 -17 q 294 38 406 -17 q 122 203 182 93 q 63 478 63 313 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 1003 203 1063 313 q 831 38 943 93 q 563 -17 719 -17 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z "},P:{ha:969,x_min:104,x_max:938,o:"m 353 0 l 104 0 l 104 954 l 629 954 q 795 915 726 954 q 901 805 864 875 q 938 640 938 735 l 938 640 q 899 472 938 543 q 791 362 861 401 q 624 322 721 322 l 624 322 l 353 322 l 353 0 z m 353 761 l 353 514 l 565 514 q 654 547 624 514 q 685 638 685 579 l 685 638 q 672 706 685 679 q 632 747 658 732 q 565 761 606 761 l 565 761 l 353 761 z "},Q:{ha:1125,x_min:63,x_max:1063,o:"m 1036 -182 l 728 -182 l 575 -12 q 557 -15 567 -14 q 539 -15 547 -15 l 539 -15 q 283 40 390 -15 q 119 206 176 96 q 63 478 63 317 l 63 478 q 122 752 63 643 q 294 916 182 861 q 563 971 406 971 l 563 971 q 831 916 719 971 q 1003 752 943 861 q 1063 478 1063 643 l 1063 478 q 999 198 1063 308 q 821 32 936 88 l 821 32 l 1036 -182 z m 563 178 l 563 178 q 668 196 622 178 q 745 249 714 214 q 792 333 776 283 q 807 446 807 383 l 807 446 l 807 507 q 792 621 807 571 q 745 706 776 671 q 668 758 714 740 q 563 776 622 776 l 563 776 q 456 758 501 776 q 379 706 410 740 q 333 621 349 671 q 318 507 318 571 l 318 507 l 318 446 q 333 333 318 383 q 379 249 349 283 q 456 196 410 214 q 563 178 501 178 z "},R:{ha:1042,x_min:104,x_max:1007,o:"m 353 0 l 104 0 l 104 954 l 658 954 q 835 915 764 954 q 941 806 906 875 q 976 653 976 738 l 976 653 q 934 490 976 561 q 815 378 892 418 l 815 378 l 1007 0 l 729 0 l 571 336 l 353 336 l 353 0 z m 353 765 l 353 521 l 610 521 q 692 555 661 521 q 724 646 724 589 l 724 646 q 710 710 724 683 q 671 751 696 736 q 610 765 646 765 l 610 765 l 353 765 z "},S:{ha:968,x_min:61,x_max:913,o:"m 500 -17 l 500 -17 q 331 -1 410 -17 q 191 51 251 15 q 96 147 131 88 q 61 292 61 206 l 61 292 l 61 304 q 63 315 61 311 l 63 315 l 303 315 q 302 305 303 311 q 301 294 301 299 l 301 294 q 324 223 301 250 q 389 184 347 196 q 486 172 431 172 l 486 172 q 543 175 517 172 q 590 185 569 178 q 627 202 611 192 q 651 227 643 213 q 658 261 658 242 l 658 261 q 634 314 658 293 q 569 349 610 335 q 476 375 528 363 q 369 401 425 388 q 263 436 314 415 q 170 489 211 457 q 105 569 129 521 q 81 685 81 617 l 81 685 q 113 815 81 760 q 201 904 144 869 q 331 955 257 939 q 488 971 404 971 l 488 971 q 641 954 569 971 q 768 902 713 938 q 855 813 824 867 q 888 685 886 760 l 888 685 l 888 668 l 649 668 l 649 678 q 631 734 649 710 q 579 773 614 758 q 493 788 544 788 q 406 778 442 788 q 352 750 371 768 q 333 707 333 732 l 333 707 q 358 657 333 676 q 424 624 382 638 q 517 598 465 610 q 623 573 568 586 q 729 540 678 560 q 822 488 781 519 q 888 411 864 457 q 913 300 913 365 l 913 300 q 859 117 913 186 q 712 15 806 47 q 500 -17 618 -17 z "},T:{ha:938,x_min:33,x_max:901,o:"m 592 0 l 343 0 l 343 750 l 33 750 l 33 954 l 901 954 l 901 750 l 592 750 l 592 0 z "},U:{ha:1088,x_min:101,x_max:986,o:"m 543 -17 l 543 -17 q 306 26 406 -17 q 154 156 207 69 q 101 369 101 242 l 101 369 l 101 954 l 351 954 l 351 375 q 400 231 351 283 q 543 178 449 178 l 543 178 q 688 231 638 178 q 738 375 738 283 l 738 375 l 738 954 l 986 954 l 986 369 q 933 156 986 242 q 782 26 881 69 q 543 -17 683 -17 z "},V:{ha:1013,x_min:19,x_max:993,o:"m 651 0 l 363 0 l 19 954 l 286 954 l 461 415 q 475 372 467 399 q 492 316 483 344 q 507 265 501 288 l 507 265 l 517 265 q 531 313 524 286 q 547 367 539 340 q 561 414 556 394 l 561 414 l 736 954 l 993 954 l 651 0 z "},W:{ha:1360,x_min:10,x_max:1350,o:"m 532 0 l 250 0 l 10 954 l 271 954 l 388 453 q 394 417 390 440 q 403 367 399 393 q 413 318 408 340 l 413 318 l 418 318 q 424 351 421 332 q 430 388 426 369 q 437 424 433 407 q 442 453 440 440 l 442 453 l 551 954 l 822 954 l 935 453 q 943 415 939 439 q 952 365 947 392 q 961 318 957 339 l 961 318 l 967 318 q 973 351 969 333 q 980 387 976 368 q 987 422 983 406 q 993 453 990 439 l 993 453 l 1106 954 l 1350 954 l 1110 0 l 832 0 l 710 528 q 701 572 707 547 q 691 622 696 597 q 683 667 686 647 l 683 667 l 678 667 q 671 622 675 647 q 662 572 667 597 q 653 528 657 547 l 653 528 l 532 0 z "},X:{ha:1022,x_min:10,x_max:1015,o:"m 292 0 l 10 0 l 353 503 l 43 954 l 344 954 l 519 676 l 526 676 l 701 954 l 983 954 l 672 503 l 1015 0 l 713 0 l 506 329 l 499 329 l 292 0 z "},Y:{ha:1017,x_min:11,x_max:1004,o:"m 635 0 l 385 0 l 385 378 l 11 954 l 299 954 l 513 597 l 519 597 l 732 954 l 1004 954 l 635 378 l 635 0 z "},Z:{ha:947,x_min:36,x_max:900,o:"m 900 0 l 36 0 l 36 93 l 510 760 l 71 760 l 71 954 l 889 954 l 889 861 l 415 194 l 900 194 l 900 0 z "},a:{ha:856,x_min:44,x_max:849,o:"m 290 -17 l 290 -17 q 201 -8 244 -17 q 122 24 157 1 q 65 88 86 47 q 44 189 44 128 l 44 189 q 78 318 44 268 q 174 397 111 368 q 327 436 238 425 q 528 447 417 447 l 528 447 l 528 493 q 515 547 528 525 q 478 580 503 568 q 414 592 454 592 l 414 592 q 351 583 378 592 q 310 559 324 575 q 296 521 296 543 l 296 521 l 296 508 l 74 508 q 72 521 72 515 l 72 521 l 72 533 q 113 647 72 599 q 231 722 154 696 q 415 749 307 749 l 415 749 q 592 724 517 749 q 712 647 668 699 q 756 513 756 596 l 756 513 l 756 200 q 769 163 756 176 q 801 149 782 149 l 801 149 l 849 149 l 849 8 q 801 -8 833 1 q 722 -17 768 -17 l 722 -17 q 640 -5 675 -17 q 581 28 604 7 q 550 79 558 50 l 550 79 l 540 79 q 478 29 514 51 q 397 -5 443 7 q 290 -17 350 -17 z m 375 140 l 375 140 q 436 150 408 140 q 484 177 464 160 q 516 219 504 194 q 528 274 528 244 l 528 274 l 528 322 q 392 311 449 322 q 304 276 335 300 q 274 217 274 253 l 274 217 q 287 173 274 190 q 322 148 300 156 q 375 140 344 140 z "},b:{ha:879,x_min:88,x_max:826,o:"m 526 -17 l 526 -17 q 396 13 456 -17 q 300 101 336 42 l 300 101 l 290 101 l 274 0 l 88 0 l 88 1006 l 315 1006 l 315 657 l 324 657 q 377 707 346 686 q 447 738 408 728 q 531 749 486 749 l 531 749 q 688 707 621 749 q 790 581 754 665 q 826 368 826 497 l 826 368 q 790 151 826 236 q 687 25 754 67 q 526 -17 619 -17 z m 456 161 l 456 161 q 538 181 507 161 q 583 242 569 201 q 597 340 597 282 l 597 340 l 597 389 q 583 489 597 449 q 538 550 569 529 q 456 571 507 571 l 456 571 q 391 557 418 571 q 347 518 364 543 q 322 458 329 493 q 314 382 314 424 l 314 382 l 314 349 q 328 249 314 292 q 374 184 343 207 q 456 161 406 161 z "},c:{ha:850,x_min:51,x_max:793,o:"m 432 -17 l 432 -17 q 226 25 311 -17 q 97 152 142 67 q 51 367 51 238 l 51 367 q 97 581 51 496 q 228 708 143 667 q 432 750 313 750 l 432 750 q 576 732 510 750 q 691 676 642 714 q 767 582 740 639 q 793 446 793 525 l 793 446 l 569 446 q 553 524 569 493 q 507 569 538 554 q 431 585 476 585 l 431 585 q 345 563 378 585 q 297 497 313 540 q 282 390 282 454 l 282 390 l 282 340 q 297 235 282 278 q 347 170 313 192 q 436 149 382 149 l 436 149 q 515 163 483 149 q 563 209 546 178 q 579 288 579 240 l 579 288 l 793 288 q 767 153 793 211 q 692 58 740 96 q 576 2 643 21 q 432 -17 510 -17 z "},d:{ha:879,x_min:51,x_max:792,o:"m 353 -17 l 353 -17 q 192 25 260 -17 q 88 151 124 67 q 51 368 51 236 l 51 368 q 88 581 51 497 q 192 707 125 665 q 349 749 258 749 l 349 749 q 431 739 392 749 q 502 708 471 729 q 556 657 533 688 l 556 657 l 564 657 l 564 1006 l 792 1006 l 792 0 l 606 0 l 589 101 l 579 101 q 483 13 542 42 q 353 -17 425 -17 z m 424 161 l 424 161 q 505 184 474 161 q 551 249 536 207 q 565 349 565 292 l 565 349 l 565 382 q 557 458 565 424 q 532 518 549 493 q 488 557 515 543 q 424 571 461 571 l 424 571 q 341 550 372 571 q 296 489 310 529 q 282 389 282 449 l 282 389 l 282 340 q 296 242 282 282 q 341 181 310 201 q 424 161 372 161 z "},e:{ha:860,x_min:51,x_max:807,o:"m 444 -17 l 444 -17 q 232 24 319 -17 q 98 150 144 65 q 51 367 51 235 l 51 367 q 97 581 51 496 q 229 707 143 665 q 436 749 315 749 l 436 749 q 638 708 556 749 q 764 585 721 668 q 807 369 807 501 l 807 369 l 807 321 l 282 321 q 299 222 282 263 q 350 161 315 182 q 443 140 385 140 l 443 140 q 504 149 478 140 q 549 173 531 157 q 576 211 567 189 q 586 261 586 233 l 586 261 l 807 261 q 783 142 807 194 q 711 55 758 90 q 597 1 664 19 q 444 -17 529 -17 z m 283 447 l 283 447 l 575 447 q 566 510 575 483 q 540 556 557 538 q 498 583 522 574 q 442 592 474 592 l 442 592 q 358 575 392 592 q 307 526 325 558 q 283 447 289 494 z "},f:{ha:489,x_min:15,x_max:483,o:"m 346 0 l 119 0 l 119 567 l 15 567 l 15 732 l 119 732 l 119 792 q 145 919 119 868 q 222 994 171 969 q 349 1019 274 1019 l 349 1019 q 394 1017 369 1019 q 444 1008 419 1014 q 483 997 468 1003 l 483 997 l 483 854 l 417 854 q 362 838 378 854 q 346 786 346 821 l 346 786 l 346 732 l 483 732 l 483 567 l 346 567 l 346 0 z "},g:{ha:878,x_min:18,x_max:864,o:"m 578 -274 l 204 -274 q 113 -252 156 -274 q 44 -191 69 -231 q 18 -99 18 -151 l 18 -99 q 53 -1 18 -40 q 133 58 89 39 l 133 58 q 81 110 101 79 q 61 181 61 142 l 61 181 q 101 272 61 235 q 196 322 142 310 l 196 322 q 115 401 146 354 q 83 507 83 449 l 83 507 q 128 644 83 592 q 253 723 174 697 q 433 749 332 749 l 433 749 q 506 745 474 749 q 565 735 539 742 l 565 735 q 642 804 621 768 q 664 863 663 840 l 664 863 l 863 863 q 843 769 863 807 q 788 707 824 731 q 701 671 751 683 l 701 671 q 760 598 739 640 q 781 507 781 556 l 781 507 q 741 374 781 428 q 632 293 701 321 q 472 265 563 265 l 472 265 l 364 265 q 306 253 325 265 q 288 222 288 242 l 288 222 q 304 191 288 204 q 361 178 321 178 l 361 178 l 643 178 q 807 117 750 178 q 864 -36 864 57 l 864 -36 q 825 -160 864 -107 q 722 -244 786 -214 q 578 -274 657 -274 l 578 -274 z m 314 -135 l 314 -135 l 554 -135 q 596 -126 578 -135 q 624 -101 614 -117 q 635 -64 635 -85 l 635 -64 q 613 -11 635 -29 q 558 7 590 7 l 558 7 l 314 7 q 260 -12 282 7 q 239 -62 239 -31 l 239 -62 q 260 -115 239 -94 q 314 -135 282 -135 z m 432 399 l 432 399 q 524 426 492 399 q 557 507 557 454 l 557 507 q 524 588 557 561 q 432 615 492 615 l 432 615 q 342 588 375 615 q 308 507 308 561 l 308 507 q 322 448 308 472 q 364 411 336 424 q 432 399 392 399 z "},h:{ha:874,x_min:86,x_max:790,o:"m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 653 l 324 653 q 381 703 347 682 q 457 737 415 725 q 543 749 499 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z "},i:{ha:400,x_min:86,x_max:314,o:"m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 314 0 l 86 0 l 86 732 l 314 732 l 314 0 z "},j:{ha:397,x_min:-54,x_max:314,o:"m 314 831 l 86 831 l 86 1006 l 314 1006 l 314 831 z m 93 -274 l 93 -274 q 45 -271 72 -274 q -9 -262 18 -268 q -54 -251 -36 -257 l -54 -251 l -54 -108 l 17 -108 q 69 -88 53 -108 q 86 -31 86 -68 l 86 -31 l 86 732 l 314 732 l 314 -51 q 292 -171 314 -121 q 222 -247 271 -221 q 93 -274 174 -274 z "},k:{ha:847,x_min:86,x_max:838,o:"m 314 0 l 86 0 l 86 1007 l 314 1007 l 314 438 l 561 732 l 828 732 l 568 442 l 838 0 l 578 0 l 415 285 l 314 186 l 314 0 z "},l:{ha:400,x_min:86,x_max:314,o:"m 314 0 l 86 0 l 86 1006 l 314 1006 l 314 0 z "},m:{ha:1301,x_min:86,x_max:1218,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 360 693 325 665 q 439 735 396 721 q 531 749 482 749 l 531 749 q 658 719 606 749 q 739 628 711 689 l 739 628 l 749 628 q 809 693 774 665 q 888 735 844 721 q 979 749 932 749 l 979 749 q 1108 720 1056 749 q 1190 634 1161 692 q 1218 488 1218 576 l 1218 488 l 1218 0 l 990 0 l 990 453 q 983 505 990 483 q 964 541 976 526 q 932 563 951 556 q 890 569 913 569 l 890 569 q 826 551 854 569 q 782 501 797 532 q 767 428 767 469 l 767 428 l 767 0 l 539 0 l 539 453 q 532 505 539 483 q 513 541 525 526 q 481 563 500 556 q 439 569 461 569 l 439 569 q 374 551 403 569 q 330 501 346 532 q 314 428 314 469 l 314 428 l 314 0 z "},n:{ha:874,x_min:86,x_max:790,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 628 l 300 628 q 364 693 328 665 q 446 735 400 721 q 543 749 492 749 l 543 749 q 677 719 622 749 q 761 632 732 690 q 790 483 790 574 l 790 483 l 790 0 l 563 0 l 563 451 q 555 503 563 482 q 533 540 547 525 q 499 563 519 556 q 451 569 478 569 l 451 569 q 381 551 411 569 q 332 501 350 532 q 314 428 314 469 l 314 428 l 314 0 z "},o:{ha:882,x_min:51,x_max:831,o:"m 440 -17 l 440 -17 q 231 25 318 -17 q 98 152 144 67 q 51 367 51 238 l 51 367 q 98 581 51 496 q 231 707 144 665 q 440 749 318 749 l 440 749 q 651 707 564 749 q 784 581 738 665 q 831 367 831 496 l 831 367 q 784 152 831 238 q 651 25 738 67 q 440 -17 564 -17 z m 440 149 l 440 149 q 533 171 497 149 q 584 235 568 193 q 600 340 600 278 l 600 340 l 600 392 q 584 497 600 454 q 533 562 568 540 q 440 583 497 583 l 440 583 q 349 562 385 583 q 298 497 314 540 q 282 392 282 454 l 282 392 l 282 340 q 298 235 282 278 q 349 171 314 193 q 440 149 385 149 z "},p:{ha:879,x_min:88,x_max:826,o:"m 315 -258 l 88 -258 l 88 732 l 274 732 l 293 631 l 303 631 q 398 721 340 693 q 526 749 456 749 l 526 749 q 687 707 619 749 q 790 581 754 665 q 826 365 826 496 l 826 365 q 790 151 826 236 q 688 25 754 67 q 531 -17 621 -17 l 531 -17 q 447 -7 486 -17 q 377 24 408 3 q 324 75 346 44 l 324 75 l 315 75 l 315 -258 z m 456 161 l 456 161 q 538 182 507 161 q 583 243 569 203 q 597 342 597 283 l 597 342 l 597 390 q 583 490 597 449 q 538 551 569 531 q 456 571 507 571 l 456 571 q 374 548 406 571 q 328 483 343 525 q 314 383 314 440 l 314 383 l 314 350 q 322 274 314 308 q 347 214 329 239 q 391 175 364 189 q 456 161 418 161 z "},q:{ha:879,x_min:51,x_max:792,o:"m 792 -258 l 564 -258 l 564 75 l 556 75 q 500 25 531 46 q 431 -6 469 4 q 349 -17 392 -17 l 349 -17 q 192 25 258 -17 q 88 151 125 67 q 51 365 51 236 l 51 365 q 88 581 51 496 q 192 707 124 665 q 353 749 260 749 l 353 749 q 483 719 424 749 q 576 631 542 689 l 576 631 l 586 631 l 606 732 l 792 732 l 792 -258 z m 424 161 l 424 161 q 488 175 461 161 q 532 214 515 189 q 557 274 549 239 q 565 350 565 308 l 565 350 l 565 383 q 551 483 565 440 q 505 548 536 525 q 424 571 474 571 l 424 571 q 341 551 372 571 q 296 490 310 531 q 282 390 282 449 l 282 390 l 282 342 q 296 243 282 283 q 341 182 310 203 q 424 161 372 161 z "},r:{ha:565,x_min:86,x_max:556,o:"m 314 0 l 86 0 l 86 732 l 274 732 l 290 619 l 300 619 q 341 687 317 657 q 401 733 365 717 q 479 750 436 750 l 479 750 q 525 745 504 750 q 556 735 546 740 l 556 735 l 556 536 l 483 536 q 408 524 440 536 q 354 488 375 513 q 324 429 333 464 q 314 349 314 394 l 314 349 l 314 0 z "},s:{ha:804,x_min:51,x_max:754,o:"m 400 -17 l 400 -17 q 265 -1 328 -17 q 153 43 201 14 q 78 115 106 72 q 51 215 51 158 l 51 215 l 51 226 q 53 235 51 231 l 53 235 l 268 235 l 268 222 q 288 172 269 192 q 338 142 307 151 q 404 133 368 133 l 404 133 q 460 139 431 133 q 511 158 490 144 q 532 199 532 172 l 532 199 q 506 243 532 228 q 438 269 481 258 q 347 289 396 279 l 347 289 q 249 314 299 300 q 159 352 200 328 q 93 415 118 376 q 68 514 68 454 l 68 514 q 95 623 68 578 q 169 696 122 668 q 278 736 217 724 q 410 749 340 749 l 410 749 q 531 736 474 749 q 635 698 589 724 q 708 633 682 672 q 735 540 735 593 l 735 540 q 734 526 735 533 q 733 515 733 518 l 733 515 l 519 515 l 519 526 q 504 565 519 550 q 463 590 489 581 q 404 599 436 599 l 404 599 q 363 595 383 599 q 326 585 343 592 q 299 568 310 579 q 289 540 289 557 l 289 540 q 307 506 289 519 q 356 485 325 493 q 425 467 388 476 l 425 467 q 533 444 476 456 q 641 410 590 432 q 723 347 692 389 q 754 231 754 304 l 754 231 q 726 113 754 161 q 650 37 699 65 q 538 -4 601 8 q 400 -17 474 -17 z "},t:{ha:535,x_min:29,x_max:494,o:"m 343 -17 l 343 -17 q 223 5 272 -17 q 149 69 174 26 q 125 174 125 113 l 125 174 l 125 567 l 29 567 l 29 732 l 132 732 l 179 946 l 351 946 l 351 732 l 494 732 l 494 567 l 351 567 l 351 229 q 367 169 351 190 q 422 149 382 149 l 422 149 l 494 149 l 494 7 q 449 -5 476 1 q 394 -14 422 -11 q 343 -17 367 -17 z "},u:{ha:874,x_min:82,x_max:786,o:"m 329 -17 l 329 -17 q 147 49 211 -17 q 82 249 82 114 l 82 249 l 82 732 l 310 732 l 310 281 q 317 229 310 251 q 339 192 325 207 q 374 169 353 176 q 421 163 396 163 l 421 163 q 492 181 461 163 q 540 233 522 200 q 558 304 558 265 l 558 304 l 558 732 l 786 732 l 786 0 l 599 0 l 585 104 l 575 104 q 512 40 550 68 q 427 -2 474 13 q 329 -17 381 -17 z "},v:{ha:797,x_min:3,x_max:793,o:"m 517 0 l 278 0 l 3 732 l 246 732 l 339 453 q 357 392 346 432 q 381 310 368 353 q 403 232 393 268 l 403 232 l 411 232 q 433 307 421 265 q 456 388 444 349 q 475 453 467 428 l 475 453 l 567 732 l 793 732 l 517 0 z "},w:{ha:1193,x_min:1,x_max:1192,o:"m 475 0 l 247 0 l 1 732 l 244 732 l 321 429 q 335 372 328 406 q 351 306 343 338 q 364 253 358 274 l 364 253 l 372 253 q 388 315 381 283 q 403 378 394 347 l 403 378 l 415 431 l 490 732 l 724 732 l 800 429 q 813 378 806 410 q 828 313 819 346 q 842 253 836 279 l 842 253 l 851 253 q 863 307 856 276 q 879 370 871 338 q 893 426 888 403 l 893 426 l 971 732 l 1192 732 l 946 0 l 718 0 l 642 293 q 628 350 636 318 q 613 413 619 382 q 600 465 606 443 l 600 465 l 594 465 q 585 424 592 450 q 572 364 579 397 q 553 294 564 331 l 553 294 l 475 0 z "},x:{ha:850,x_min:10,x_max:839,o:"m 264 0 l 10 0 l 282 383 l 33 732 l 303 732 l 432 524 l 439 524 l 569 732 l 824 732 l 572 382 l 839 0 l 572 0 l 422 240 l 415 240 l 264 0 z "},y:{ha:797,x_min:3,x_max:793,o:"m 203 -274 l 203 -274 q 115 -266 153 -274 q 63 -253 78 -258 l 63 -253 l 63 -108 l 158 -108 q 225 -91 197 -108 q 269 -49 253 -74 q 292 0 285 -25 l 292 0 l 3 732 l 246 732 l 354 411 q 373 353 363 389 q 394 281 383 318 q 411 215 404 244 l 411 215 l 419 215 q 432 260 425 235 q 446 313 439 286 q 460 365 453 340 q 474 410 468 390 l 474 410 l 567 732 l 793 732 l 540 29 q 488 -90 517 -35 q 421 -187 460 -146 q 328 -251 382 -228 q 203 -274 275 -274 z "},z:{ha:743,x_min:31,x_max:707,o:"m 707 0 l 31 0 l 31 85 l 367 567 l 50 567 l 50 732 l 694 732 l 694 650 l 356 165 l 707 165 l 707 0 z "},".":{ha:442,x_min:100,x_max:342,o:"m 342 0 l 100 0 l 100 232 l 342 232 l 342 0 z "},",":{ha:442,x_min:96,x_max:342,o:"m 96 -249 l 96 -249 l 96 -151 q 158 -126 131 -147 q 201 -72 185 -106 q 218 0 218 -39 l 218 0 l 101 0 l 101 232 l 342 232 l 342 25 q 308 -122 342 -64 q 217 -210 274 -179 q 96 -249 161 -240 z "},"'":{ha:365,x_min:82,x_max:286,o:"m 236 558 l 128 558 l 82 750 l 82 954 l 286 954 l 286 750 l 236 558 z "},"\u2019":{ha:388,x_min:81,x_max:307,o:"m 81 496 l 81 496 l 81 585 q 138 610 113 589 q 178 667 164 632 q 193 742 193 701 l 193 742 l 86 742 l 86 954 l 307 954 l 307 764 q 275 620 307 678 q 192 533 243 563 q 81 496 140 503 z "},"!":{ha:436,x_min:96,x_max:342,o:"m 289 306 l 147 306 l 96 954 l 342 954 l 289 306 z m 333 0 l 104 0 l 104 221 l 333 221 l 333 0 z "},"?":{ha:850,x_min:69,x_max:769,o:"m 525 307 l 324 307 l 324 375 q 338 444 324 414 q 376 498 353 474 q 425 544 399 522 q 474 587 451 565 q 511 634 496 608 q 526 690 526 660 l 526 690 q 522 726 526 708 q 504 761 517 744 q 470 788 492 778 q 414 799 449 799 l 414 799 q 349 786 374 799 q 313 754 325 774 q 295 713 300 735 q 290 669 290 690 l 290 669 l 290 651 q 292 632 290 642 l 292 632 l 74 632 q 71 654 72 642 q 69 682 69 667 l 69 682 q 85 778 69 733 q 132 858 101 822 q 208 918 163 893 q 309 957 253 943 q 432 971 365 971 l 432 971 q 545 959 493 971 q 639 925 597 947 q 709 870 681 903 q 753 796 738 838 q 769 704 769 754 l 769 704 q 752 608 769 649 q 706 538 735 568 q 647 485 678 508 q 589 440 617 461 q 543 395 561 418 q 525 343 525 372 l 525 343 l 525 307 z m 540 0 l 311 0 l 311 221 l 540 221 l 540 0 z "},$:{ha:804,x_min:51,x_max:754,o:"m 447 -82 l 357 -82 l 357 96 q 265 110 308 99 l 265 110 q 153 154 201 125 q 78 226 106 183 q 51 326 51 269 l 51 326 l 51 338 q 53 346 51 342 l 53 346 l 268 346 l 268 333 q 288 283 269 303 q 338 254 307 263 l 338 254 q 357 249 347 250 l 357 249 l 357 399 q 347 400 353 399 l 347 400 q 249 425 299 411 q 159 463 200 439 q 93 526 118 488 q 68 625 68 565 l 68 625 q 95 734 68 689 q 169 807 122 779 q 279 847 217 835 l 279 847 q 357 858 317 856 l 357 858 l 357 1029 l 447 1029 l 447 858 q 532 847 490 856 l 532 847 q 635 809 589 835 q 708 744 682 783 q 735 651 735 704 l 735 651 q 734 637 735 644 q 733 626 733 629 l 733 626 l 519 626 l 519 638 q 504 676 519 661 q 463 701 489 692 l 463 701 q 447 706 456 703 l 447 706 l 447 574 q 533 556 489 564 l 533 556 q 641 522 590 543 q 723 458 692 500 q 754 342 754 415 l 754 342 q 726 224 754 272 q 650 148 699 176 q 538 107 601 119 l 538 107 q 447 96 494 99 l 447 96 l 447 -82 z m 447 378 l 447 247 q 461 250 454 249 l 461 250 q 511 269 490 256 q 532 310 532 283 l 532 310 q 507 354 532 339 l 507 354 q 447 378 483 368 l 447 378 z m 357 596 l 357 596 l 357 706 q 326 697 340 701 l 326 697 q 299 679 310 690 q 289 651 289 668 l 289 651 q 307 617 289 631 q 357 596 325 604 l 357 596 q 357 596 357 596 z "},"%":{ha:1367,x_min:94,x_max:1274,o:"m 440 0 l 296 0 l 931 954 l 1075 954 l 440 0 z m 338 472 l 338 472 q 203 499 257 472 q 122 581 149 526 q 94 721 94 636 l 94 721 q 122 861 94 806 q 203 944 149 917 q 338 971 257 971 l 338 971 q 472 944 418 971 q 551 861 525 917 q 578 721 578 806 l 578 721 q 551 581 578 636 q 472 499 525 526 q 338 472 418 472 z m 338 576 l 338 576 q 406 613 388 576 q 424 706 424 649 l 424 706 l 424 738 q 416 804 424 775 q 390 850 408 833 q 338 867 371 867 l 338 867 q 269 831 288 867 q 250 738 250 794 l 250 738 l 250 706 q 269 613 250 649 q 338 576 288 576 z m 1033 -17 l 1033 -17 q 899 11 953 -17 q 818 94 844 39 q 792 232 792 149 l 792 232 q 818 372 792 317 q 899 455 844 428 q 1033 482 953 482 l 1033 482 q 1168 455 1114 482 q 1248 372 1222 428 q 1274 232 1274 317 l 1274 232 q 1248 93 1274 149 q 1168 10 1222 38 q 1033 -17 1114 -17 z m 1033 88 l 1033 88 q 1101 124 1083 88 q 1119 217 1119 160 l 1119 217 l 1119 249 q 1112 316 1119 288 q 1085 361 1104 344 q 1033 378 1067 378 l 1033 378 q 965 342 983 378 q 946 249 946 307 l 946 249 l 946 217 q 965 124 946 160 q 1033 88 983 88 z "},"&":{ha:1133,x_min:90,x_max:1107,o:"m 526 -17 l 526 -17 q 287 19 383 -17 q 140 117 190 54 q 90 261 90 179 l 90 261 q 139 411 90 353 q 267 493 188 469 l 267 493 l 267 499 q 159 574 203 524 q 115 703 115 625 l 115 703 q 164 842 115 782 q 305 937 213 903 q 528 971 397 971 l 528 971 q 750 937 657 971 q 893 844 843 903 q 943 710 943 785 l 943 710 l 943 675 l 732 675 l 732 696 q 708 753 731 729 q 644 789 686 776 q 539 801 601 801 l 539 801 q 456 792 492 801 q 396 765 419 782 q 360 724 372 747 q 349 674 349 701 l 349 674 q 367 612 349 636 q 415 576 385 588 q 478 564 444 564 l 478 564 l 599 564 l 599 407 l 463 407 q 394 396 426 407 q 342 359 361 385 q 324 288 324 333 l 324 288 q 345 215 324 244 q 413 169 367 185 q 528 153 458 153 l 528 153 q 648 170 603 153 q 713 219 693 188 q 732 290 732 250 l 732 290 l 732 564 l 1107 564 l 1107 407 l 944 407 l 944 294 q 901 131 944 201 q 764 22 857 60 q 526 -17 671 -17 z "},"-":{ha:463,x_min:56,x_max:407,o:"m 407 283 l 56 283 l 56 474 l 407 474 l 407 283 z "},":":{ha:464,x_min:113,x_max:353,o:"m 353 500 l 113 500 l 113 732 l 353 732 l 353 500 z m 353 0 l 113 0 l 113 232 l 353 232 l 353 0 z "},"|":{ha:368,x_min:104,x_max:264,o:"m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z "},"\xA3":{ha:871,x_min:39,x_max:818,o:"m 788 0 l 69 0 l 69 175 l 160 175 l 160 392 l 39 392 l 39 551 l 160 551 l 160 689 q 197 838 160 775 q 306 936 233 901 q 489 971 379 971 l 489 971 q 667 936 594 971 q 779 840 740 901 q 818 693 818 778 l 818 693 l 818 663 l 590 663 l 590 694 q 577 748 590 725 q 542 783 564 771 q 489 796 519 796 l 489 796 q 435 783 458 796 q 400 749 413 771 q 388 699 388 728 l 388 699 l 388 551 l 575 551 l 575 392 l 386 392 l 363 175 l 788 175 l 788 0 z "},"/":{ha:419,x_min:0,x_max:419,o:"m 147 -67 l 0 -67 l 272 1022 l 419 1022 l 147 -67 z "},"(":{ha:519,x_min:82,x_max:467,o:"m 467 -221 l 326 -221 q 145 69 208 -92 q 82 401 82 231 l 82 401 q 145 734 82 572 q 326 1024 208 896 l 326 1024 l 467 1024 q 370 833 413 939 q 304 617 328 728 q 281 401 281 506 l 281 401 q 304 187 281 299 q 370 -30 328 75 q 467 -221 413 -135 l 467 -221 z "},")":{ha:519,x_min:54,x_max:438,o:"m 54 1024 l 194 1024 q 374 733 311 894 q 438 401 438 572 l 438 401 q 374 69 438 231 q 194 -221 311 -93 l 194 -221 l 54 -221 q 150 -30 108 -135 q 215 187 192 75 q 239 401 239 299 l 239 401 q 215 616 239 504 q 150 833 192 728 q 54 1024 108 939 l 54 1024 z "}},familyName:"Archivo ExtraBold",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-220,xMax:1393,yMin:-405,yMax:1100},resolution:1e3};var t1={glyphs:{"0":{ha:868,x_min:64,x_max:844,o:"m 385 -17 l 385 -17 q 205 17 276 -17 q 99 122 133 51 q 64 299 64 193 l 64 299 q 66 355 64 325 q 72 416 68 385 q 83 482 76 447 l 83 482 q 140 701 106 608 q 228 853 175 793 q 353 942 281 913 q 524 971 426 971 l 524 971 q 705 937 635 971 q 810 833 775 903 q 844 657 844 763 l 844 657 q 842 601 844 631 q 835 540 839 572 q 825 475 832 508 l 825 475 q 768 255 804 347 q 680 102 732 163 q 556 13 628 42 q 385 -17 483 -17 z m 394 149 l 394 149 q 473 167 442 149 q 526 226 504 186 q 565 335 549 267 q 600 499 582 403 l 600 499 q 610 558 606 532 q 617 604 614 583 q 620 642 619 625 q 621 672 621 658 l 621 672 q 596 774 621 742 q 514 806 571 806 l 514 806 q 435 787 467 806 q 381 727 403 768 q 342 619 360 686 q 307 456 325 553 l 307 456 q 297 397 301 422 q 290 351 293 371 q 287 314 288 331 q 286 283 286 297 l 286 283 q 311 182 286 215 q 394 149 336 149 z "},"1":{ha:868,x_min:40,x_max:743,o:"m 711 0 l 40 0 l 72 179 l 300 179 l 390 689 l 161 689 l 186 824 q 276 838 226 826 q 380 868 326 850 q 484 908 433 886 q 576 956 535 931 l 576 956 l 665 956 l 528 179 l 743 179 l 711 0 z "},"2":{ha:868,x_min:-3,x_max:846,o:"m 729 0 l -3 0 l 8 57 q 60 182 21 125 q 153 288 99 239 q 271 379 208 336 q 394 462 333 422 q 505 542 454 501 q 585 624 556 582 q 615 711 615 665 l 615 711 q 590 772 615 744 q 503 800 564 800 l 503 800 q 420 783 456 800 q 363 735 385 765 q 333 663 342 704 l 333 663 l 326 621 l 113 621 q 155 779 121 713 q 245 888 189 846 q 373 951 301 931 q 525 971 444 971 l 525 971 q 705 938 633 971 q 811 848 776 904 q 846 724 846 792 l 846 724 q 826 610 846 663 q 771 515 806 558 q 692 433 736 471 q 599 363 647 396 q 501 300 550 331 q 410 239 453 269 l 410 239 q 383 219 397 231 q 361 197 369 207 l 361 197 l 764 197 l 729 0 z "},"3":{ha:868,x_min:38,x_max:849,o:"m 388 -17 l 388 -17 q 192 13 269 -17 q 76 94 115 42 q 38 215 38 147 l 38 215 q 40 247 38 229 q 47 289 42 265 l 47 289 l 258 289 q 254 264 256 274 q 253 246 253 254 l 253 246 q 288 174 253 199 q 388 150 324 150 l 388 150 q 481 169 440 150 q 544 226 521 189 q 567 315 567 263 l 567 315 q 551 370 567 350 q 510 399 536 390 q 453 407 485 407 l 453 407 l 363 407 l 389 564 l 471 564 q 526 574 500 564 q 572 602 551 583 q 604 648 593 621 q 615 710 615 675 l 615 710 q 602 760 615 739 q 563 792 589 781 q 501 804 538 804 l 501 804 q 426 790 458 804 q 374 750 394 775 q 349 693 354 725 l 349 693 l 346 675 l 140 675 l 146 707 q 209 843 160 783 q 340 937 258 903 q 526 971 421 971 l 526 971 q 700 943 628 971 q 810 865 772 915 q 849 744 849 814 l 849 744 q 824 633 849 682 q 756 550 799 583 q 663 499 713 517 l 663 499 l 661 493 q 758 422 722 471 q 793 300 793 372 l 793 300 q 739 128 793 199 q 592 20 685 57 q 388 -17 499 -17 z "},"4":{ha:869,x_min:13,x_max:835,o:"m 640 0 l 419 0 l 457 203 l 13 203 l 43 379 q 169 551 106 457 q 290 751 232 644 q 397 971 349 858 l 397 971 l 639 971 q 578 845 617 913 q 494 709 540 778 q 398 577 447 640 q 303 462 349 514 q 222 378 257 410 l 222 378 l 488 378 l 522 585 q 567 646 543 611 q 615 718 592 681 q 658 792 639 756 q 690 857 678 828 l 690 857 l 792 857 l 708 378 l 835 378 l 804 203 l 678 203 l 640 0 z "},"5":{ha:868,x_min:40,x_max:847,o:"m 393 -17 l 393 -17 q 202 15 281 -17 q 82 104 124 46 q 40 242 40 163 l 40 242 q 42 272 40 256 q 46 303 43 288 l 46 303 l 258 303 q 256 285 257 293 q 256 268 256 276 l 256 268 q 270 207 256 233 q 313 166 285 181 q 383 151 342 151 l 383 151 q 456 165 422 151 q 515 204 489 178 q 555 267 540 231 q 569 350 569 304 l 569 350 q 538 439 569 407 q 446 471 506 471 l 446 471 q 376 458 406 471 q 326 429 346 446 q 292 397 306 413 l 292 397 l 104 422 l 238 954 l 847 954 l 813 756 l 382 756 l 336 571 q 378 596 353 582 q 440 619 403 610 q 528 629 478 629 l 528 629 q 671 600 610 629 q 766 513 732 571 q 800 374 800 456 l 800 374 q 746 167 800 254 q 599 31 692 79 q 393 -17 507 -17 z "},"6":{ha:868,x_min:58,x_max:840,o:"m 393 -17 l 393 -17 q 211 17 286 -17 q 97 121 136 50 q 58 304 58 192 l 58 304 q 62 378 58 339 q 74 460 65 417 l 74 460 q 166 763 107 651 q 315 922 225 874 q 528 971 406 971 l 528 971 q 697 942 628 971 q 803 859 767 914 q 840 728 840 804 l 840 728 q 839 695 840 713 q 835 660 838 678 l 835 660 l 621 660 q 624 683 624 672 q 625 701 625 693 l 625 701 q 598 780 625 754 q 517 806 571 806 l 517 806 q 418 775 456 806 q 358 684 381 744 q 319 533 336 624 l 319 533 q 372 569 340 551 q 442 598 403 586 q 525 610 482 610 l 525 610 q 675 581 613 610 q 772 496 738 551 q 806 363 806 440 l 806 363 q 774 205 806 275 q 688 85 743 135 q 557 10 632 36 q 393 -17 482 -17 z m 401 149 l 401 149 q 474 165 442 149 q 528 206 507 181 l 528 206 q 564 266 551 231 q 576 340 576 301 l 576 340 q 563 403 576 376 q 524 443 550 429 q 457 457 497 457 l 457 457 q 383 442 417 457 q 328 401 350 428 l 328 401 q 292 342 304 376 q 281 265 281 307 l 281 265 q 293 203 281 229 q 333 163 306 176 q 401 149 360 149 z "},"7":{ha:868,x_min:129,x_max:914,o:"m 411 0 l 136 0 q 199 210 156 107 q 301 409 242 313 q 433 592 361 506 q 581 754 504 679 l 581 754 l 129 754 l 165 954 l 914 954 l 893 835 q 772 705 832 772 q 656 563 711 638 q 553 410 600 489 q 474 249 507 332 q 425 76 440 165 l 425 76 q 417 40 421 57 q 411 0 414 22 l 411 0 z "},"8":{ha:868,x_min:25,x_max:829,o:"m 371 -17 l 371 -17 q 181 12 258 -17 q 65 93 104 40 q 25 215 25 146 l 25 215 q 49 332 25 279 q 117 424 72 385 q 221 486 161 464 l 221 486 q 154 562 176 518 q 132 657 132 606 l 132 657 q 160 784 132 726 q 241 883 189 842 q 362 948 293 925 q 513 971 431 971 l 513 971 q 680 942 608 971 q 790 860 751 913 q 829 735 829 807 l 829 735 q 810 635 829 682 q 756 551 792 589 q 665 486 719 514 l 665 486 q 752 413 721 460 q 783 300 783 367 l 783 300 q 731 132 783 203 q 587 22 679 61 q 371 -17 494 -17 z m 383 149 l 383 149 q 428 153 407 149 q 469 167 450 158 q 504 189 489 176 l 504 189 q 540 239 526 210 q 554 306 554 268 l 554 306 q 520 381 554 356 q 429 407 486 407 l 429 407 q 385 403 406 407 q 345 390 364 399 q 311 368 326 382 l 311 368 q 274 317 288 347 q 260 249 260 288 l 260 249 q 292 174 260 200 q 383 149 325 149 z m 456 567 l 456 567 q 500 571 479 567 q 539 584 521 575 q 571 606 557 593 l 571 606 q 605 651 593 624 q 617 713 617 678 l 617 713 q 585 783 617 760 q 500 807 553 807 l 500 807 q 456 802 476 807 q 419 789 436 797 q 388 768 401 781 l 388 768 q 354 722 367 750 q 342 657 342 694 l 342 657 q 372 589 342 611 q 456 567 403 567 z "},"9":{ha:868,x_min:61,x_max:843,o:"m 374 -17 l 374 -17 q 205 13 275 -17 q 98 97 135 42 q 61 226 61 151 l 61 226 q 63 260 61 243 q 67 294 64 276 l 67 294 l 279 294 q 277 272 278 282 q 276 253 276 261 l 276 253 q 303 175 276 201 q 385 149 331 149 l 385 149 q 484 179 447 149 q 544 270 521 210 q 582 421 567 331 l 582 421 q 530 385 561 403 q 460 356 499 368 q 376 344 421 344 l 376 344 q 226 374 289 344 q 130 460 164 404 q 96 592 96 515 l 96 592 q 127 749 96 679 q 214 869 158 819 q 344 944 269 918 q 508 971 419 971 l 508 971 q 690 938 615 971 q 804 833 765 904 q 843 650 843 763 l 843 650 q 840 576 843 615 q 828 494 836 538 l 828 494 q 736 192 796 304 q 586 32 676 81 q 374 -17 496 -17 z m 444 497 l 444 497 q 518 513 485 497 q 574 553 551 528 l 574 553 q 609 613 597 578 q 621 690 621 649 l 621 690 q 608 752 621 726 q 568 792 594 778 q 500 806 542 806 l 500 806 q 427 790 460 806 q 374 749 394 775 l 374 749 q 338 689 350 724 q 325 614 325 654 l 325 614 q 338 552 325 578 q 378 512 351 526 q 444 497 404 497 z "},"=":{ha:901,x_min:60,x_max:840,o:"m 811 432 l 113 432 l 143 593 l 840 593 l 811 432 z m 757 126 l 60 126 l 88 288 l 786 288 l 757 126 z "},"+":{ha:901,x_min:86,x_max:814,o:"m 467 0 l 303 0 l 353 281 l 86 281 l 115 442 l 383 442 l 432 722 l 596 722 l 546 442 l 814 442 l 785 281 l 517 281 l 467 0 z "}," ":{ha:263,x_min:0,x_max:0,o:""},A:{ha:1036,x_min:-53,x_max:961,o:"m 208 0 l -53 0 l 474 954 l 772 954 l 961 0 l 706 0 l 678 165 l 294 165 l 208 0 z m 489 549 l 389 351 l 649 351 l 615 550 q 608 600 613 575 l 608 600 l 600 649 q 593 694 596 672 q 588 738 590 717 l 588 738 l 582 738 q 551 674 568 708 q 519 608 535 640 l 519 608 l 489 549 z "},B:{ha:1035,x_min:39,x_max:1017,o:"m 631 0 l 39 0 l 208 954 l 744 954 q 895 926 835 954 q 986 850 956 899 q 1017 739 1017 801 l 1017 739 q 991 631 1017 681 q 921 546 965 581 q 818 499 876 511 l 818 499 l 817 493 q 921 424 879 474 q 963 294 963 375 l 963 294 q 917 133 963 199 q 797 33 872 67 q 631 0 721 0 l 631 0 z m 358 397 l 324 192 l 592 192 q 654 206 626 192 q 697 247 682 219 q 713 311 713 274 l 713 311 q 690 374 713 350 q 615 397 667 397 l 615 397 l 358 397 z m 425 769 l 390 575 l 638 575 q 691 584 668 575 q 728 609 714 593 q 749 645 742 625 q 756 688 756 665 l 756 688 q 733 748 756 726 q 672 769 711 769 l 672 769 l 425 769 z "},C:{ha:1044,x_min:69,x_max:1031,o:"m 490 -17 l 490 -17 q 177 75 285 -17 q 69 356 69 167 l 69 356 q 73 426 69 390 q 82 497 76 461 l 82 497 q 181 755 110 649 q 364 916 251 861 q 626 971 476 971 l 626 971 q 840 936 749 971 q 981 833 931 901 q 1031 664 1031 765 l 1031 664 q 1028 623 1031 644 q 1024 581 1026 601 l 1024 581 l 779 581 q 783 605 782 593 q 783 626 783 617 l 783 626 q 764 708 783 675 q 708 759 744 742 q 618 776 671 776 l 618 776 q 513 758 558 776 q 433 705 467 739 q 378 622 400 671 q 344 515 356 574 l 344 515 q 333 456 338 479 q 327 415 329 432 q 324 386 325 399 q 324 363 324 374 l 324 363 q 343 263 324 304 q 403 199 363 221 q 504 178 443 178 l 504 178 q 623 201 572 178 q 707 267 674 224 q 751 371 740 310 l 751 371 l 986 371 q 899 156 965 242 q 730 26 833 69 q 490 -17 626 -17 z "},D:{ha:1049,x_min:40,x_max:1018,o:"m 465 0 l 40 0 l 208 954 l 590 954 q 907 864 796 954 q 1018 583 1018 774 l 1018 583 q 1015 520 1018 553 q 1007 454 1013 488 l 1007 454 q 909 204 981 306 q 726 51 838 103 q 465 0 614 0 l 465 0 z m 422 760 l 324 194 l 465 194 q 571 211 524 194 q 653 260 618 228 q 712 338 689 292 q 744 443 735 385 l 744 443 q 756 509 753 485 q 761 549 760 533 q 763 575 763 564 l 763 575 q 741 677 763 636 q 676 739 719 718 q 568 760 633 760 l 568 760 l 422 760 z "},E:{ha:971,x_min:39,x_max:997,o:"m 838 0 l 39 0 l 208 954 l 997 954 l 963 760 l 424 760 l 392 581 l 863 581 l 829 390 l 358 390 l 324 194 l 872 194 l 838 0 z "},F:{ha:890,x_min:39,x_max:942,o:"m 289 0 l 39 0 l 208 954 l 942 954 l 907 760 l 424 760 l 386 554 l 811 554 l 778 364 l 354 364 l 289 0 z "},G:{ha:1132,x_min:71,x_max:1086,o:"m 479 -17 l 479 -17 q 178 75 285 -17 q 71 353 71 167 l 71 353 q 78 463 71 410 q 99 561 85 515 l 99 561 q 210 785 133 694 q 400 924 288 876 q 651 971 513 971 l 651 971 q 824 953 744 971 q 962 899 903 935 q 1053 808 1021 863 q 1086 681 1086 754 l 1086 681 q 1085 650 1086 665 q 1081 618 1083 635 l 1081 618 l 836 618 q 838 632 838 625 l 838 632 l 838 643 q 824 700 838 675 q 785 742 811 725 q 726 767 760 758 q 654 776 693 776 l 654 776 q 538 759 590 776 q 446 708 485 742 q 381 626 407 674 q 346 515 356 578 l 346 515 q 335 458 339 481 q 331 418 332 435 l 331 418 l 326 390 q 325 368 325 379 l 325 368 q 349 263 325 306 q 417 199 372 221 q 531 178 463 178 l 531 178 q 652 199 596 178 q 746 256 708 219 q 790 342 783 293 l 790 342 l 792 349 l 535 349 l 567 524 l 1064 524 l 972 0 l 828 0 l 819 101 q 721 36 774 63 q 609 -3 668 10 q 479 -17 550 -17 z "},H:{ha:1093,x_min:39,x_max:1093,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 393 588 l 779 588 l 844 954 l 1093 954 l 925 0 l 675 0 l 743 385 l 357 385 l 289 0 z "},I:{ha:457,x_min:39,x_max:457,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 289 0 z "},J:{ha:875,x_min:22,x_max:876,o:"m 356 -17 l 356 -17 q 108 46 193 -17 q 22 233 22 108 l 22 233 q 25 274 22 251 q 35 332 28 297 l 35 332 l 272 332 q 265 288 267 304 q 264 261 264 271 l 264 261 q 288 198 264 218 q 365 178 313 178 l 365 178 q 465 215 425 178 q 518 331 504 253 l 518 331 l 628 954 l 876 954 l 767 325 q 691 130 746 206 q 551 19 636 54 q 356 -17 467 -17 z "},K:{ha:1069,x_min:39,x_max:1142,o:"m 289 0 l 39 0 l 208 954 l 457 954 l 385 546 l 819 954 l 1142 954 l 719 564 l 981 0 l 697 0 l 524 397 l 331 238 l 289 0 z "},L:{ha:865,x_min:40,x_max:803,o:"m 767 0 l 40 0 l 208 954 l 457 954 l 325 204 l 803 204 l 767 0 z "},M:{ha:1269,x_min:39,x_max:1269,o:"m 271 0 l 39 0 l 208 954 l 557 954 l 599 529 q 604 467 601 506 q 610 387 607 428 q 614 313 613 346 l 614 313 l 624 313 q 652 384 638 347 q 682 459 667 421 q 713 531 697 497 l 713 531 l 906 954 l 1269 954 l 1100 0 l 858 0 l 942 467 q 958 554 949 507 q 978 644 968 601 q 994 713 988 688 l 994 713 l 985 713 q 970 675 979 697 q 953 632 961 653 q 938 596 944 611 l 938 596 l 663 0 l 453 0 l 396 589 q 392 652 394 618 q 388 711 389 686 l 388 711 l 378 711 l 372 631 q 363 542 368 585 q 353 467 358 499 l 353 467 l 271 0 z "},N:{ha:1093,x_min:39,x_max:1093,o:"m 271 0 l 39 0 l 208 954 l 428 954 l 688 503 q 712 463 699 485 q 737 418 725 440 q 758 378 749 396 l 758 378 l 765 381 q 772 431 768 406 q 779 476 776 456 l 779 476 l 863 954 l 1093 954 l 925 0 l 707 0 l 438 461 q 407 515 425 482 q 375 574 389 549 l 375 574 l 368 572 q 360 515 365 546 q 351 464 354 483 l 351 464 l 271 0 z "},O:{ha:1125,x_min:69,x_max:1094,o:"m 513 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 984 204 1057 313 q 793 40 911 96 q 513 -17 675 -17 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z "},P:{ha:969,x_min:39,x_max:993,o:"m 289 0 l 39 0 l 208 954 l 699 954 q 861 921 796 954 q 960 828 926 888 q 993 689 993 768 l 993 689 q 967 540 993 607 q 892 424 940 474 q 775 349 843 375 q 624 322 707 322 l 624 322 l 346 322 l 289 0 z m 424 761 l 381 514 l 588 514 q 668 533 635 514 q 719 585 701 551 q 738 663 738 618 l 738 663 q 710 735 738 710 q 625 761 682 761 l 625 761 l 424 761 z "},Q:{ha:1125,x_min:69,x_max:1094,o:"m 956 -182 l 668 -182 l 532 -17 l 513 -17 q 273 26 372 -17 q 122 152 174 68 q 69 361 69 236 l 69 361 q 73 424 69 393 q 82 488 76 456 l 82 488 q 180 751 108 643 q 369 915 251 858 q 650 971 486 971 l 650 971 q 891 928 792 971 q 1042 801 990 886 q 1094 590 1094 717 l 1094 590 q 1092 531 1094 561 q 1083 469 1089 500 l 1083 469 q 979 197 1057 308 q 776 33 901 86 l 776 33 l 956 -182 z m 525 178 l 525 178 q 638 197 588 178 q 724 250 688 215 q 785 335 761 285 q 821 449 810 385 l 821 449 q 830 503 826 481 q 835 540 833 525 q 838 564 838 554 q 839 583 839 574 l 839 583 q 816 687 839 643 q 748 753 793 731 q 636 776 703 776 l 636 776 q 525 758 575 776 q 438 705 475 740 q 377 619 401 669 q 342 507 353 569 l 342 507 q 333 451 336 474 q 328 415 329 429 q 326 390 326 400 q 325 371 325 381 l 325 371 q 347 268 325 311 q 414 201 369 225 q 525 178 458 178 z "},R:{ha:1042,x_min:40,x_max:1035,o:"m 289 0 l 40 0 l 208 954 l 743 954 q 906 923 842 954 q 1003 838 971 892 q 1035 713 1035 783 l 1035 713 q 1008 563 1035 628 q 934 451 982 497 q 818 378 886 406 l 818 378 l 943 0 l 671 0 l 572 336 l 349 336 l 289 0 z m 424 765 l 382 521 l 629 521 q 701 540 668 521 q 756 593 735 558 q 776 672 776 628 l 776 672 q 751 740 776 715 q 682 765 726 765 l 682 765 l 424 765 z "},S:{ha:968,x_min:33,x_max:938,o:"m 458 -17 l 458 -17 q 292 -3 369 -17 q 156 38 214 10 q 66 115 99 67 q 33 232 33 163 l 33 232 q 36 274 33 251 q 44 315 39 297 l 44 315 l 285 315 q 279 293 282 306 q 276 271 276 281 l 276 271 q 297 215 276 236 q 356 183 318 193 q 443 174 393 174 l 443 174 q 517 179 483 174 q 577 196 551 185 q 617 226 603 207 q 632 274 632 246 l 632 274 q 613 318 632 300 q 560 349 593 336 q 487 373 528 363 q 401 396 446 383 l 401 396 q 301 428 351 410 q 211 474 251 446 q 147 544 171 501 q 122 647 122 586 l 122 647 q 158 795 122 735 q 256 895 194 856 q 394 953 317 935 q 553 971 471 971 q 705 957 635 971 q 827 914 775 943 q 908 840 879 885 q 938 733 938 796 l 938 733 q 936 708 938 722 q 931 668 935 693 l 931 668 l 693 668 q 696 686 696 679 l 696 686 l 696 697 q 661 763 696 738 q 558 788 626 788 l 558 788 q 465 776 504 788 q 404 744 425 764 q 383 696 383 724 l 383 696 q 397 660 383 675 q 433 633 410 644 q 488 611 457 621 q 557 593 519 601 l 557 593 q 670 562 611 579 q 781 515 729 544 q 863 441 832 486 q 894 329 894 396 l 894 329 q 858 174 894 239 q 760 66 822 108 q 621 3 699 24 q 458 -17 543 -17 z "},T:{ha:938,x_min:103,x_max:1007,o:"m 529 0 l 279 0 l 413 750 l 103 750 l 139 954 l 1007 954 l 971 750 l 661 750 l 529 0 z "},U:{ha:1088,x_min:96,x_max:1090,o:"m 496 -17 l 496 -17 q 201 60 307 -17 q 96 290 96 138 l 96 290 q 98 333 96 311 q 104 379 100 356 l 104 379 l 206 954 l 454 954 l 353 376 q 349 351 351 365 q 347 325 347 338 l 347 325 q 388 217 347 256 q 510 178 428 178 l 510 178 q 663 231 604 178 q 739 375 722 283 l 739 375 l 842 954 l 1090 954 l 986 363 q 900 151 964 236 q 735 25 836 67 q 496 -17 633 -17 z "},V:{ha:1013,x_min:124,x_max:1097,o:"m 588 0 l 299 0 l 124 954 l 381 954 l 454 465 q 464 397 458 435 q 474 325 469 360 q 482 264 479 290 l 482 264 l 490 264 q 524 333 506 296 q 560 406 542 369 q 592 471 578 442 l 592 471 l 833 954 l 1097 954 l 588 0 z "},W:{ha:1360,x_min:115,x_max:1454,o:"m 461 0 l 182 0 l 115 954 l 358 954 l 388 453 q 389 411 389 435 q 390 364 389 388 q 392 318 392 340 l 392 318 l 397 318 q 414 365 406 340 q 431 412 422 389 q 446 453 439 435 l 446 453 l 643 954 l 914 954 l 939 453 q 942 411 940 435 l 942 411 l 943 364 q 943 318 943 340 l 943 318 l 949 318 q 965 363 957 339 l 965 363 l 982 410 q 999 453 990 433 l 999 453 l 1200 954 l 1454 954 l 1043 0 l 764 0 l 735 528 q 733 574 733 550 q 731 622 732 597 q 729 665 731 646 l 729 665 l 724 665 q 708 620 717 644 q 690 572 699 596 q 674 528 682 549 l 674 528 l 461 0 z "},X:{ha:1022,x_min:-56,x_max:1085,o:"m 243 0 l -56 0 l 389 506 l 146 954 l 432 954 l 560 682 l 565 682 l 790 954 l 1085 954 l 682 499 l 949 0 l 664 0 l 515 318 l 508 318 l 243 0 z "},Y:{ha:1017,x_min:117,x_max:1110,o:"m 571 0 l 322 0 l 389 378 l 117 954 l 385 954 l 544 596 l 551 596 l 831 954 l 1110 954 l 638 378 l 571 0 z "},Z:{ha:947,x_min:-25,x_max:994,o:"m 838 0 l -25 0 l -7 100 l 567 760 l 143 760 l 178 954 l 994 954 l 978 854 l 401 194 l 872 194 l 838 0 z "},a:{ha:875,x_min:33,x_max:849,o:"m 292 -17 l 292 -17 q 154 15 213 -17 q 65 107 96 46 q 33 257 33 168 l 33 257 q 36 315 33 285 q 44 378 39 344 l 44 378 q 115 586 67 504 q 233 708 163 668 q 393 749 304 749 l 393 749 q 480 738 440 749 q 550 703 519 726 q 601 643 581 681 l 601 643 l 611 643 l 665 732 l 849 732 l 815 553 q 797 451 807 503 q 779 354 788 400 q 764 271 771 308 q 753 210 757 233 q 750 179 750 186 l 750 179 q 760 151 750 160 q 788 142 771 142 l 788 142 l 831 142 l 807 8 q 751 -9 783 -1 q 685 -17 719 -17 l 685 -17 q 612 -5 643 -17 q 561 32 581 7 l 561 32 q 545 60 551 43 q 536 94 539 76 l 536 94 l 526 94 q 421 12 482 40 q 292 -17 360 -17 z m 381 161 l 381 161 q 444 175 415 161 q 496 214 474 189 q 533 274 518 239 q 556 350 549 308 l 556 350 q 563 395 561 378 q 566 424 565 413 q 567 444 567 436 l 567 444 q 555 512 567 483 q 518 556 543 540 q 453 571 493 571 l 453 571 q 367 551 401 571 q 311 490 332 531 q 279 390 290 449 l 279 390 q 269 333 272 354 q 265 299 265 313 q 264 278 264 286 l 264 278 q 291 191 264 221 q 381 161 318 161 z "},b:{ha:879,x_min:24,x_max:840,o:"m 474 -17 l 474 -17 q 339 13 397 -17 q 253 101 281 42 l 253 101 l 243 101 l 208 0 l 24 0 l 199 1006 l 426 1006 l 365 657 l 375 657 q 434 708 401 688 q 505 738 467 728 q 585 749 543 749 l 585 749 q 721 718 664 749 q 809 626 778 688 q 840 475 840 565 l 840 475 q 838 418 840 449 q 828 354 835 388 l 828 354 q 758 147 807 229 q 636 24 708 64 q 474 -17 564 -17 z m 419 161 l 419 161 q 506 181 471 161 q 561 242 540 201 q 594 342 582 283 l 594 342 q 604 399 601 378 q 608 433 607 419 q 610 454 610 446 l 610 454 q 598 519 610 493 q 560 558 586 544 q 492 571 533 571 l 492 571 q 426 557 456 571 q 376 518 397 543 q 338 458 354 493 q 315 382 322 424 l 315 382 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 378 161 z "},c:{ha:850,x_min:44,x_max:814,o:"m 389 -17 l 389 -17 q 201 15 278 -17 q 85 113 125 47 q 44 278 44 179 l 44 278 q 48 347 44 313 q 58 411 51 381 l 58 411 q 109 552 74 490 q 198 658 144 614 q 322 726 251 703 q 479 749 393 749 l 479 749 q 654 721 579 749 q 772 640 729 693 q 814 510 814 588 l 814 510 q 813 478 814 494 q 808 446 811 463 l 808 446 l 585 446 q 587 464 586 456 q 588 481 588 472 l 588 481 q 575 537 588 514 q 536 572 563 560 q 469 585 510 585 l 469 585 q 380 561 417 585 q 321 495 343 538 q 289 394 299 453 l 289 394 q 278 336 282 358 q 274 301 275 314 q 272 278 272 288 l 272 278 q 286 206 272 235 q 328 163 300 178 q 400 149 357 149 l 400 149 q 481 165 447 149 q 537 212 515 181 q 567 288 558 243 l 567 288 l 781 288 q 710 117 764 185 q 573 16 656 49 q 389 -17 490 -17 z "},d:{ha:879,x_min:40,x_max:904,o:"m 299 -17 l 299 -17 q 160 15 218 -17 q 71 110 101 47 q 40 260 40 172 l 40 260 q 43 317 40 288 q 51 381 46 347 l 51 381 q 100 543 68 474 q 176 658 132 613 q 277 726 221 704 q 401 749 333 749 l 401 749 q 488 738 449 749 q 558 708 528 728 q 607 657 589 688 l 607 657 l 615 657 l 676 1006 l 904 1006 l 728 0 l 542 0 l 542 101 l 532 101 q 427 13 488 42 q 299 -17 367 -17 z m 386 161 l 386 161 q 473 184 438 161 q 531 250 508 207 q 563 350 553 293 l 563 350 q 570 394 568 376 q 574 423 572 411 q 575 444 575 435 l 575 444 q 563 512 575 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 491 339 531 q 288 393 297 451 l 288 393 q 276 335 281 357 q 272 299 272 313 q 271 276 271 286 l 271 276 q 298 190 271 219 q 386 161 325 161 z "},e:{ha:860,x_min:44,x_max:815,o:"m 403 -17 l 403 -17 q 208 15 288 -17 q 86 111 128 46 q 44 276 44 176 l 44 276 q 47 344 44 311 q 57 408 50 376 l 57 408 q 131 590 76 514 q 273 707 186 665 q 475 749 360 749 l 475 749 q 662 719 586 749 q 776 628 738 689 q 815 471 815 567 l 815 471 q 812 409 815 444 q 797 321 808 374 l 797 321 l 272 321 q 268 294 269 308 q 267 267 267 279 l 267 267 q 281 198 267 226 q 325 156 294 169 q 403 142 356 142 l 403 142 q 467 149 439 142 q 514 173 494 157 q 547 211 533 189 q 564 261 560 233 l 564 261 l 786 261 q 744 142 775 194 q 663 55 713 90 q 549 1 614 19 q 403 -17 483 -17 z m 294 447 l 294 447 l 586 447 q 590 467 589 457 q 590 485 590 478 l 590 485 q 577 544 590 521 q 538 580 564 568 q 478 592 513 592 l 478 592 q 393 574 429 592 q 333 525 357 557 q 294 447 310 493 z "},f:{ha:489,x_min:-118,x_max:608,o:"m 25 -274 l 25 -274 q -23 -271 4 -274 q -75 -262 -50 -268 q -118 -251 -100 -257 l -118 -251 l -92 -107 l -21 -107 q 37 -87 17 -107 q 63 -31 57 -68 l 63 -31 l 167 567 l 64 567 l 93 732 l 197 732 l 207 792 q 253 920 222 869 q 338 995 285 971 q 469 1019 392 1019 l 469 1019 q 519 1017 493 1019 q 569 1008 546 1014 q 608 997 593 1003 l 608 997 l 583 854 l 517 854 q 459 838 478 854 q 433 786 440 821 l 433 786 l 425 732 l 561 732 l 532 567 l 394 567 l 286 -50 q 244 -170 274 -119 q 162 -247 215 -221 q 25 -274 108 -274 z "},g:{ha:878,x_min:6,x_max:854,o:"m 314 -274 l 314 -274 q 144 -252 213 -274 q 40 -191 75 -231 q 6 -96 6 -151 l 6 -96 q 7 -68 6 -86 q 15 -28 8 -50 l 15 -28 l 236 -28 q 234 -36 235 -32 q 233 -44 233 -40 l 233 -44 q 245 -77 233 -64 q 279 -97 257 -90 q 333 -104 301 -104 l 333 -104 q 424 -85 388 -104 q 480 -32 460 -67 q 508 49 500 3 l 508 49 q 515 87 511 68 q 521 122 518 106 l 521 122 l 511 122 q 448 71 482 92 q 375 40 414 50 q 293 31 336 31 l 293 31 q 160 60 217 31 q 74 148 104 89 q 44 296 44 207 l 44 296 q 47 346 44 319 q 54 401 49 372 l 54 401 q 179 664 86 579 q 408 749 272 749 l 408 749 q 538 719 483 749 q 621 631 593 689 l 621 631 l 631 631 l 668 732 l 854 732 l 738 68 q 660 -129 715 -54 q 518 -239 604 -204 q 314 -274 432 -274 z m 393 206 l 393 206 q 458 219 429 206 q 510 256 488 232 q 546 310 532 279 q 567 379 560 342 l 567 379 q 572 413 569 400 q 574 435 574 425 q 575 453 575 444 l 575 453 q 563 515 575 489 q 524 556 550 542 q 458 571 499 571 l 458 571 q 374 551 410 571 q 317 495 339 532 q 288 406 296 458 l 288 406 q 280 363 282 379 q 277 335 278 346 q 276 317 276 325 l 276 317 q 288 258 276 282 q 325 219 299 233 q 393 206 351 206 z "},h:{ha:874,x_min:24,x_max:818,o:"m 250 0 l 24 0 l 199 1006 l 426 1006 l 365 653 l 374 653 q 438 703 401 682 q 517 737 475 725 q 601 749 560 749 l 601 749 q 717 727 669 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 579 464 578 453 q 581 485 581 475 l 581 485 q 571 533 581 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 322 413 329 449 l 322 413 l 250 0 z "},i:{ha:400,x_min:22,x_max:425,o:"m 394 831 l 167 831 l 197 1006 l 425 1006 l 394 831 z m 250 0 l 22 0 l 151 732 l 379 732 l 250 0 z "},j:{ha:397,x_min:-164,x_max:422,o:"m 392 831 l 164 831 l 194 1006 l 422 1006 l 392 831 z m -8 -274 l -8 -274 q -60 -271 -31 -274 q -118 -262 -90 -268 q -164 -251 -146 -257 l -164 -251 l -139 -107 l -68 -107 q -11 -87 -31 -107 q 15 -31 8 -68 l 15 -31 l 150 732 l 378 732 l 239 -51 q 199 -171 226 -121 q 122 -247 172 -221 q -8 -274 72 -274 z "},k:{ha:847,x_min:22,x_max:892,o:"m 250 0 l 22 0 l 199 1007 l 426 1007 l 326 438 l 626 732 l 892 732 l 581 443 l 772 0 l 526 0 l 410 294 l 282 186 l 250 0 z "},l:{ha:400,x_min:22,x_max:426,o:"m 250 0 l 22 0 l 199 1006 l 426 1006 l 250 0 z "},m:{ha:1301,x_min:22,x_max:1246,o:"m 250 0 l 22 0 l 151 732 l 338 732 l 338 628 l 347 628 q 415 692 376 665 q 497 734 453 719 q 588 749 542 749 l 588 749 q 717 719 667 749 q 785 628 767 689 l 785 628 l 794 628 q 864 692 825 665 q 947 734 903 719 q 1038 749 990 749 l 1038 749 q 1192 702 1138 749 q 1246 558 1246 656 l 1246 558 q 1243 515 1246 538 q 1236 469 1240 493 l 1236 469 l 1153 0 l 925 0 l 1004 443 q 1007 467 1006 456 q 1008 488 1008 478 l 1008 488 q 999 533 1008 515 q 972 560 989 551 q 928 569 954 569 l 928 569 q 858 549 890 569 q 805 495 826 529 q 775 417 783 461 l 775 417 l 701 0 l 474 0 l 553 443 q 556 467 554 456 q 557 488 557 479 l 557 488 q 547 533 557 515 q 520 560 538 551 q 476 569 503 569 l 476 569 q 407 549 439 569 q 353 495 375 529 q 324 417 332 461 l 324 417 l 250 0 z "},n:{ha:874,x_min:22,x_max:818,o:"m 250 0 l 22 0 l 151 732 l 338 732 l 338 626 l 347 626 q 418 692 378 665 q 505 734 458 719 q 599 749 551 749 l 599 749 q 717 727 668 749 q 792 663 765 706 q 818 556 818 621 l 818 556 q 815 512 818 535 q 808 464 813 489 l 808 464 l 726 0 l 499 0 l 576 440 q 580 465 578 453 q 582 486 582 476 l 582 486 q 572 533 582 514 q 542 560 561 551 q 494 569 522 569 l 494 569 q 435 559 464 569 q 383 528 406 549 q 345 478 361 507 q 324 413 329 449 l 324 413 l 250 0 z "},o:{ha:882,x_min:42,x_max:840,o:"m 386 -17 l 386 -17 q 201 15 278 -17 q 83 113 124 47 q 42 276 42 178 l 42 276 q 44 333 42 304 q 53 389 47 361 l 53 389 q 132 591 74 511 q 282 710 190 671 q 493 749 374 749 l 493 749 q 681 717 604 749 q 799 619 758 685 q 840 454 840 554 l 840 454 q 826 335 840 389 q 783 236 811 281 l 783 236 q 694 94 750 150 q 563 10 639 38 q 386 -17 486 -17 z m 403 149 l 403 149 q 498 171 460 149 q 560 235 536 193 q 594 340 583 278 l 594 340 q 605 399 601 378 q 609 433 608 421 q 610 456 610 446 l 610 456 q 596 526 610 497 q 553 569 582 554 q 478 583 525 583 l 478 583 q 383 561 421 583 q 321 497 344 539 q 286 392 297 454 l 286 392 q 276 332 279 354 q 271 298 272 310 q 269 276 269 286 l 269 276 q 283 206 269 235 q 327 163 297 178 q 403 149 357 149 z "},p:{ha:879,x_min:-22,x_max:839,o:"m 204 -258 l -22 -258 l 151 732 l 336 732 l 339 631 l 349 631 q 453 721 394 693 q 579 749 513 749 l 579 749 q 720 718 663 749 q 808 626 778 688 q 839 472 839 564 l 839 472 q 836 415 839 446 q 828 351 833 385 l 828 351 q 757 146 806 228 q 638 24 708 64 q 478 -17 567 -17 l 478 -17 q 391 -7 431 -17 q 322 24 351 3 q 272 75 292 44 l 272 75 l 264 75 l 204 -258 z m 419 161 l 419 161 q 506 181 472 161 q 561 242 540 201 q 593 339 582 282 l 593 339 q 603 397 600 375 q 608 433 607 419 q 608 456 608 446 l 608 456 q 597 519 608 494 q 559 558 585 544 q 492 571 533 571 l 492 571 q 407 548 443 571 q 349 483 371 525 q 317 383 326 440 l 317 383 q 308 338 311 356 q 305 308 306 319 q 304 288 304 297 l 304 288 q 316 220 304 249 q 353 176 328 192 q 419 161 379 161 z "},q:{ha:879,x_min:39,x_max:856,o:"m 682 -258 l 454 -258 l 513 75 l 503 75 q 444 25 476 46 q 373 -6 411 4 q 294 -17 335 -17 l 294 -17 q 158 14 215 -17 q 69 106 100 44 q 39 257 39 167 l 39 257 q 42 315 39 285 q 51 378 46 344 l 51 378 q 122 586 74 504 q 243 708 171 668 q 406 749 315 749 l 406 749 q 539 719 482 749 q 622 631 596 689 l 622 631 l 632 631 l 669 732 l 856 732 l 682 -258 z m 388 161 l 388 161 q 452 175 424 161 q 503 214 481 189 q 540 274 525 239 q 563 350 556 308 l 563 350 q 570 395 568 378 q 573 424 572 413 q 574 444 574 436 l 574 444 q 562 512 574 483 q 525 556 550 540 q 460 571 500 571 l 460 571 q 374 551 408 571 q 318 490 339 531 q 286 390 297 449 l 286 390 q 276 333 279 354 q 271 299 272 313 q 269 278 269 286 l 269 278 q 297 191 269 221 q 388 161 325 161 z "},r:{ha:565,x_min:22,x_max:621,o:"m 250 0 l 22 0 l 151 732 l 336 732 l 336 619 l 346 619 q 397 687 368 657 q 463 733 426 717 q 544 750 500 750 l 544 750 q 591 745 571 750 q 621 735 611 740 l 621 735 l 586 536 l 514 536 q 436 524 471 536 q 376 488 401 511 q 335 428 351 464 q 311 347 318 393 l 311 347 l 250 0 z "},s:{ha:804,x_min:18,x_max:765,o:"m 350 -17 l 350 -17 q 220 -4 281 -17 q 115 33 160 8 q 44 94 69 57 q 18 179 18 131 l 18 179 q 21 209 18 193 q 26 235 24 225 l 26 235 l 242 235 q 239 220 240 228 q 238 208 238 213 l 238 208 q 253 166 238 183 q 298 141 269 149 q 360 133 326 133 l 360 133 q 407 137 382 133 q 453 149 432 140 q 488 170 475 157 q 500 204 500 183 l 500 204 q 487 236 500 224 q 451 258 474 249 q 398 275 428 268 q 335 290 368 282 l 335 290 q 248 315 292 301 q 168 349 204 328 q 110 403 132 371 q 88 486 88 436 l 88 486 q 116 604 88 554 q 195 686 144 654 q 313 734 246 718 q 456 750 379 750 l 456 750 q 572 739 517 750 q 672 706 628 728 q 740 650 715 683 q 765 572 765 617 l 765 572 q 762 538 765 554 q 757 515 758 522 l 757 515 l 543 515 q 545 527 544 522 q 546 535 546 532 l 546 535 q 533 571 546 557 q 496 592 519 585 q 439 599 472 599 l 439 599 q 393 594 415 599 q 353 583 371 590 q 326 563 336 575 q 317 536 317 551 l 317 536 q 335 502 317 515 q 385 481 354 489 q 451 463 417 472 l 451 463 q 544 440 496 451 q 635 407 593 428 q 704 351 678 386 q 731 260 731 315 l 731 260 q 701 129 731 182 q 618 44 671 76 q 497 -2 565 13 q 350 -17 428 -17 z "},t:{ha:535,x_min:69,x_max:564,o:"m 283 -17 l 283 -17 q 178 0 219 -17 q 115 49 136 17 q 94 131 94 82 l 94 131 q 97 167 94 144 q 106 228 100 190 l 106 228 l 165 567 l 69 567 l 97 732 l 201 732 l 286 946 l 458 946 l 421 732 l 564 732 l 535 567 l 392 567 l 336 251 q 333 224 335 239 q 331 201 331 210 l 331 201 q 344 163 331 176 q 389 149 357 149 l 389 149 l 461 149 l 436 7 q 389 -5 417 1 q 333 -14 361 -11 q 283 -17 306 -17 z "},u:{ha:874,x_min:54,x_max:850,o:"m 272 -18 l 272 -18 q 155 3 204 -18 q 80 67 106 25 q 54 175 54 110 l 54 175 q 57 220 54 197 q 64 268 60 243 l 64 268 l 144 732 l 374 732 l 296 290 q 292 267 293 278 q 290 246 290 256 l 290 246 q 301 198 290 217 q 331 170 311 179 q 378 161 350 161 l 378 161 q 437 172 408 161 q 488 204 465 183 q 526 254 510 225 q 549 318 542 283 l 549 318 l 622 732 l 850 732 l 721 -1 l 535 -1 l 535 104 l 525 104 q 454 39 494 67 q 368 -3 414 11 q 272 -18 322 -18 z "},v:{ha:797,x_min:69,x_max:858,o:"m 453 0 l 213 0 l 69 732 l 301 732 l 346 453 q 355 391 350 426 q 365 315 360 356 q 375 232 371 274 l 375 232 l 383 232 q 417 313 400 274 q 451 388 435 351 q 482 453 468 424 l 482 453 l 622 732 l 858 732 l 453 0 z "},w:{ha:1193,x_min:67,x_max:1256,o:"m 410 0 l 182 0 l 67 732 l 300 732 l 322 458 q 327 393 325 431 q 332 318 329 356 q 336 253 335 281 l 336 253 l 344 253 q 372 322 356 283 q 403 397 388 361 q 428 457 418 433 l 428 457 l 546 732 l 779 732 l 800 456 q 804 399 801 436 q 810 324 807 363 q 815 253 813 285 l 815 253 l 822 253 q 849 318 833 281 q 879 392 864 356 q 906 456 894 429 l 906 456 l 1026 732 l 1256 732 l 881 0 l 653 0 l 628 306 q 624 358 626 329 q 620 416 622 388 q 617 465 618 444 l 617 465 l 611 465 q 592 417 603 446 q 568 360 581 389 q 544 307 556 332 l 544 307 l 410 0 z "},x:{ha:850,x_min:-56,x_max:888,o:"m 206 0 l -56 0 l 292 382 l 97 732 l 351 732 l 453 524 l 460 524 l 633 732 l 888 732 l 563 378 l 774 0 l 521 0 l 411 232 l 404 232 l 206 0 z "},y:{ha:797,x_min:-46,x_max:858,o:"m 97 -274 l 97 -274 q 7 -266 44 -274 q -46 -253 -31 -258 l -46 -253 l -21 -107 l 75 -107 q 145 -92 115 -107 q 195 -52 175 -76 q 229 0 215 -28 l 229 0 l 68 732 l 301 732 l 353 418 q 363 351 358 388 q 373 281 368 315 q 381 215 378 246 l 381 215 l 390 215 q 410 265 400 239 q 432 316 421 290 q 453 365 443 342 q 474 410 464 389 l 474 410 l 624 732 l 858 732 l 488 29 q 415 -90 454 -35 q 330 -186 376 -144 q 226 -251 283 -228 q 97 -274 168 -274 z "},z:{ha:743,x_min:-32,x_max:761,o:"m 646 0 l -32 0 l -15 89 l 394 567 l 89 567 l 118 732 l 761 732 l 746 646 l 333 165 l 675 165 l 646 0 z "},".":{ha:442,x_min:36,x_max:318,o:"m 276 0 l 36 0 l 78 232 l 318 232 l 276 0 z "},",":{ha:442,x_min:-14,x_max:315,o:"m -14 -249 l -14 -249 l 3 -151 q 70 -126 39 -147 q 124 -72 101 -106 q 151 0 146 -39 l 151 0 l 35 0 l 76 232 l 315 232 l 279 25 q 240 -93 268 -43 q 172 -176 213 -143 q 85 -226 132 -208 q -14 -249 38 -244 z "},"'":{ha:365,x_min:149,x_max:389,o:"m 268 558 l 164 558 l 149 750 l 185 954 l 389 954 l 353 750 l 268 558 z "},"\u2019":{ha:388,x_min:100,x_max:407,o:"m 100 496 l 100 496 l 117 585 q 178 610 149 589 q 229 667 208 632 q 257 742 250 701 l 257 742 l 149 742 l 186 954 l 407 954 l 374 764 q 317 619 358 678 q 219 531 276 561 q 100 496 163 501 z "},"!":{ha:436,x_min:46,x_max:443,o:"m 274 300 l 138 300 l 203 954 l 443 954 l 274 300 z m 261 0 l 46 0 l 82 207 l 299 207 l 261 0 z "},"?":{ha:850,x_min:124,x_max:836,o:"m 518 307 l 317 307 l 328 375 q 356 449 335 417 q 408 506 378 481 q 469 556 438 532 q 527 603 500 579 q 572 653 554 626 q 589 714 589 679 l 589 714 q 580 754 589 735 q 549 786 571 774 q 490 799 528 799 l 490 799 q 431 788 457 799 q 388 759 406 778 q 358 717 369 740 q 343 668 347 693 l 343 668 q 341 649 342 658 q 340 632 340 640 l 340 632 l 124 632 q 144 747 124 694 q 200 842 164 800 q 285 913 236 883 q 395 956 335 942 q 522 971 456 971 l 522 971 q 652 954 594 971 q 751 907 710 938 q 815 833 793 876 q 836 733 836 789 l 836 733 q 815 630 836 675 q 760 551 794 585 q 686 490 725 517 q 612 440 647 463 q 552 394 576 417 q 524 343 528 371 l 524 343 l 518 307 z m 483 0 l 254 0 l 293 221 l 522 221 l 483 0 z "},$:{ha:803,x_min:38,x_max:785,o:"m 360 -82 l 268 -82 l 300 97 q 240 107 268 101 l 240 107 q 134 144 179 119 q 63 206 89 168 q 38 290 38 243 l 38 290 q 40 320 38 304 q 46 346 43 336 l 46 346 l 261 346 q 258 331 260 339 q 257 319 257 324 l 257 319 q 273 277 257 294 q 318 253 289 260 l 318 253 q 328 250 322 251 l 328 250 l 354 401 q 268 426 311 413 l 268 426 q 188 460 224 439 q 129 515 151 482 q 107 597 107 549 l 107 597 q 135 715 107 665 q 215 797 164 765 q 332 846 265 829 l 332 846 q 435 860 381 857 l 435 860 l 465 1029 l 557 1029 l 526 860 q 592 850 560 857 l 592 850 q 691 817 647 839 q 760 761 735 794 q 785 683 785 728 l 785 683 q 781 650 785 667 q 776 626 778 633 l 776 626 l 563 626 q 565 638 564 633 q 565 646 565 643 l 565 646 q 552 682 565 668 q 515 703 539 696 l 515 703 q 500 707 508 706 l 500 707 l 476 572 q 564 551 518 563 l 564 551 q 655 518 613 539 q 724 462 697 497 q 750 371 750 426 l 750 371 q 720 240 750 293 q 638 156 690 188 q 517 110 585 124 l 517 110 q 392 94 457 96 l 392 94 l 360 -82 z m 442 381 l 418 247 q 426 249 422 249 l 426 249 q 473 260 451 251 q 507 281 494 268 q 519 315 519 294 l 519 315 q 506 347 519 335 q 471 369 493 360 l 471 369 q 442 381 457 375 l 442 381 z m 389 597 l 389 597 l 408 704 q 374 694 389 700 l 374 694 q 346 674 356 686 q 336 647 336 663 l 336 647 q 356 614 336 626 l 356 614 q 389 597 368 604 z "},"%":{ha:1367,x_min:151,x_max:1257,o:"m 376 0 l 232 0 l 1035 954 l 1179 954 l 376 0 z m 368 472 l 368 472 q 206 519 260 472 q 151 656 151 565 l 151 656 q 153 690 151 672 q 158 726 154 708 l 158 726 q 207 861 172 807 q 297 943 242 915 q 433 971 353 971 l 433 971 q 594 925 540 971 q 647 788 647 879 l 647 788 q 646 753 647 771 q 642 717 644 736 l 642 717 q 594 583 628 638 q 504 501 560 529 q 368 472 449 472 z m 975 -17 l 975 -17 q 814 29 868 -17 q 760 165 760 75 l 760 165 q 762 202 760 183 q 767 240 764 221 l 767 240 q 815 373 782 319 q 905 454 849 426 q 1040 482 961 482 l 1040 482 q 1203 436 1149 482 q 1257 297 1257 390 l 1257 297 q 1255 263 1257 282 q 1250 225 1253 244 l 1250 225 q 1201 92 1235 146 q 1112 11 1168 39 q 975 -17 1056 -17 z m 375 576 l 375 576 q 449 613 425 576 q 483 703 472 650 l 483 703 q 490 741 488 726 q 493 766 492 756 q 494 785 494 776 l 494 785 q 478 845 494 824 q 424 867 463 867 l 424 867 q 351 831 375 867 q 315 740 326 794 l 315 740 q 310 703 313 718 q 306 678 307 689 q 304 660 304 668 l 304 660 q 321 599 304 621 q 375 576 338 576 z m 983 88 l 983 88 q 1060 126 1038 88 q 1097 239 1083 165 l 1097 239 q 1101 261 1100 251 q 1102 280 1101 271 q 1103 296 1103 289 l 1103 296 q 1087 356 1103 335 q 1033 378 1071 378 l 1033 378 q 956 338 979 378 q 919 226 933 299 l 919 226 q 916 205 917 215 q 915 187 915 194 q 914 171 914 179 l 914 171 q 930 110 914 132 q 983 88 946 88 z "},"&":{ha:1133,x_min:69,x_max:1143,o:"m 476 -17 l 476 -17 q 253 14 343 -17 q 116 99 163 44 q 69 226 69 154 l 69 226 q 99 349 69 296 q 179 440 129 403 q 292 493 229 478 l 292 493 l 293 499 q 208 565 242 521 q 175 671 175 608 l 175 671 q 211 801 175 746 q 310 895 247 857 q 454 952 374 933 q 624 971 535 971 l 624 971 q 831 942 744 971 q 965 862 918 913 q 1011 744 1011 811 l 1011 744 q 1009 718 1011 735 q 1001 675 1007 701 l 1001 675 l 789 675 q 793 700 793 692 l 793 700 l 793 711 q 774 759 793 739 q 717 790 754 779 q 621 801 679 801 l 621 801 q 528 790 568 801 q 460 758 488 778 q 419 710 433 738 q 404 651 404 683 l 404 651 q 419 602 404 622 q 459 573 433 582 q 515 564 485 564 l 515 564 l 636 564 l 608 407 l 472 407 q 413 399 442 407 q 360 373 383 390 q 324 328 338 356 q 311 263 311 301 l 311 263 q 330 203 311 228 q 388 166 349 179 q 488 153 426 153 l 488 153 q 613 170 564 153 q 689 219 663 188 q 722 290 715 250 l 722 290 l 769 564 l 1143 564 l 1115 407 l 956 407 l 935 294 q 864 130 918 200 q 714 22 810 60 q 476 -17 618 -17 z "},"-":{ha:463,x_min:42,x_max:425,o:"m 392 283 l 42 283 l 75 474 l 425 474 l 392 283 z "},":":{ha:464,x_min:49,x_max:418,o:"m 376 500 l 136 500 l 178 733 l 418 733 l 376 500 z m 289 0 l 49 0 l 90 232 l 331 232 l 289 0 z "},"|":{ha:368,x_min:104,x_max:264,o:"m 264 -281 l 104 -281 l 104 1007 l 264 1007 l 264 -281 z "},"\xA3":{ha:872,x_min:13,x_max:886,o:"m 728 0 l 13 0 l 43 175 l 133 175 l 171 392 l 50 392 l 76 551 l 199 551 l 224 689 q 283 839 239 776 q 403 936 328 901 q 585 971 478 971 l 585 971 q 748 944 681 971 q 851 867 815 917 q 886 749 886 817 l 886 749 q 885 710 886 728 q 876 663 883 693 l 876 663 l 650 663 q 654 690 653 681 q 656 706 656 700 q 657 717 657 713 l 657 717 q 647 759 657 742 q 617 786 636 776 q 572 796 599 796 l 572 796 q 517 783 542 796 q 474 749 492 771 q 453 699 457 728 l 453 699 l 426 551 l 614 551 l 588 392 l 397 392 l 339 175 l 758 175 l 728 0 z "},"/":{ha:419,x_min:-76,x_max:535,o:"m 76 -67 l -76 -67 l 383 1022 l 535 1022 l 76 -67 z "},"(":{ha:519,x_min:60,x_max:576,o:"m 357 -221 l 217 -221 q 96 38 132 -106 q 76 332 60 181 l 76 332 q 133 581 88 458 q 255 817 179 704 q 433 1022 331 929 l 433 1022 l 576 1022 q 465 865 517 950 q 373 687 414 779 q 306 502 332 594 q 274 321 281 410 l 274 321 q 272 134 265 231 q 301 -53 279 38 q 357 -221 324 -144 l 357 -221 z "},")":{ha:519,x_min:-43,x_max:474,o:"m 176 1024 l 317 1024 q 438 765 401 908 q 457 471 474 622 l 457 471 q 401 222 447 344 q 279 -13 356 99 q 100 -219 203 -125 l 100 -219 l -43 -219 q 68 -62 17 -147 q 160 116 119 24 q 226 301 200 208 q 260 482 253 393 l 260 482 q 262 669 269 572 q 233 857 254 765 q 176 1024 211 949 l 176 1024 z "}},familyName:"Archivo ExtraBold Italic",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-268,xMax:1462,yMin:-405,yMax:1100},resolution:1e3};var n1={glyphs:{"0":{ha:794,x_min:60,x_max:774,o:"m 339 -17 l 339 -17 q 192 11 254 -17 q 94 103 129 39 q 60 279 60 168 l 60 279 q 62 342 60 310 q 68 408 64 375 l 68 408 l 76 475 q 128 683 94 592 q 212 838 161 774 q 333 936 263 903 q 493 969 403 969 l 493 969 q 641 942 578 969 q 739 849 704 914 q 774 672 774 785 l 774 672 q 771 610 774 643 q 765 544 768 578 q 756 478 763 511 l 756 478 q 704 270 738 361 q 620 115 671 179 q 499 17 569 50 q 339 -17 429 -17 z m 343 72 l 343 72 q 462 99 411 72 q 548 176 513 126 q 608 295 583 226 q 646 446 632 364 l 646 446 q 658 512 653 481 q 665 572 663 543 q 668 626 667 600 q 669 676 669 653 l 669 676 q 628 832 669 783 q 489 881 586 881 l 489 881 q 372 853 422 881 q 285 775 321 825 q 225 657 249 725 q 186 507 201 589 l 186 507 q 176 441 181 472 q 168 382 171 410 q 164 327 165 354 q 163 275 163 300 l 163 275 q 204 121 163 169 q 343 72 246 72 z "},"1":{ha:689,x_min:-7,x_max:589,o:"m 572 0 l -7 0 l 8 89 l 253 89 l 375 776 l 129 776 l 140 842 q 232 851 189 844 q 315 872 275 858 q 392 906 354 886 q 465 957 429 926 l 465 957 l 508 957 l 356 89 l 589 89 l 572 0 z "},"2":{ha:782,x_min:-4,x_max:769,o:"m 646 0 l -4 0 l 4 38 q 60 162 17 106 q 163 265 103 218 q 290 354 222 311 q 425 439 358 397 q 546 526 492 481 q 633 622 600 571 q 665 738 665 674 l 665 738 q 619 842 665 804 q 483 881 574 881 l 483 881 q 347 852 400 881 q 267 778 294 824 q 231 682 240 733 l 231 682 l 221 625 l 121 625 q 151 765 125 701 q 226 874 178 828 q 342 945 274 921 q 497 969 411 969 l 497 969 q 644 942 583 969 q 737 865 704 915 q 769 747 769 815 l 769 747 q 737 605 769 668 q 651 490 704 542 q 531 394 597 439 q 399 310 465 350 q 274 231 332 269 q 179 147 217 192 l 179 147 q 158 121 168 136 q 140 93 147 106 l 140 93 l 663 93 l 646 0 z "},"3":{ha:794,x_min:33,x_max:774,o:"m 340 -17 l 340 -17 q 173 9 242 -17 q 69 84 104 35 q 33 206 33 133 l 33 206 q 36 238 33 221 l 36 238 l 40 276 l 140 276 q 136 244 138 260 q 135 217 135 228 l 135 217 q 188 103 135 139 q 335 68 242 68 l 335 68 q 476 93 414 68 q 575 169 539 118 q 611 294 611 219 l 611 294 q 580 382 611 350 q 499 428 549 414 q 394 442 450 442 l 394 442 l 285 442 l 300 526 l 414 526 q 513 541 467 526 q 593 583 558 556 q 648 651 628 611 q 668 746 668 692 l 668 746 q 644 824 668 794 q 580 867 621 853 q 486 881 539 881 l 486 881 q 370 860 424 881 q 281 801 317 840 q 236 703 246 763 l 236 703 l 233 681 l 133 681 l 136 699 q 199 847 147 786 q 327 938 250 907 q 494 969 404 969 l 494 969 q 640 944 578 969 q 738 872 703 919 q 774 751 774 824 l 774 751 q 747 633 774 683 q 672 548 719 582 q 569 493 625 514 l 569 493 l 568 488 q 674 418 633 467 q 715 293 715 369 l 715 293 q 666 128 715 197 q 532 21 617 58 q 340 -17 447 -17 z "},"4":{ha:757,x_min:18,x_max:717,o:"m 529 0 l 429 0 l 472 243 l 18 243 l 33 329 q 176 536 111 433 q 297 747 242 639 q 397 969 353 854 l 397 969 l 508 969 q 438 811 478 892 q 353 654 397 731 q 267 513 310 578 q 190 399 225 447 q 135 329 156 351 l 135 329 l 486 329 l 544 658 q 567 701 556 678 l 567 701 l 588 747 q 607 790 597 769 q 624 828 617 810 l 624 828 l 675 828 l 588 329 l 717 329 l 703 243 l 574 243 l 529 0 z "},"5":{ha:792,x_min:43,x_max:778,o:"m 340 -17 l 340 -17 q 183 13 250 -17 q 80 97 117 42 q 43 231 43 151 l 43 231 q 44 262 43 246 q 49 296 46 278 l 49 296 l 150 296 q 147 269 149 282 q 144 243 144 256 l 144 243 q 169 146 144 185 q 239 88 194 107 q 342 68 283 68 l 342 68 q 452 88 401 68 q 539 146 503 108 q 595 237 575 183 q 615 356 615 290 l 615 356 q 571 487 615 443 q 442 531 526 531 l 442 531 q 350 517 396 531 q 265 476 304 503 q 197 408 225 449 l 197 408 l 107 425 l 239 953 l 778 953 l 760 858 l 314 858 l 232 532 q 293 575 258 556 q 372 606 328 594 q 468 618 417 618 l 468 618 q 601 590 543 618 q 690 506 658 561 q 721 369 721 450 l 721 369 q 672 166 721 253 q 538 31 624 79 q 340 -17 453 -17 z "},"6":{ha:794,x_min:61,x_max:757,o:"m 357 -17 l 357 -17 q 200 12 267 -17 q 97 105 133 40 q 61 278 61 169 l 61 278 q 65 358 61 315 q 76 451 68 400 l 76 451 q 170 758 111 644 q 314 920 229 871 q 506 969 399 969 l 506 969 q 649 942 593 969 q 731 865 704 914 q 757 751 757 817 l 757 751 q 755 715 757 733 q 750 676 753 696 l 750 676 l 647 676 q 651 708 650 693 q 653 738 653 724 l 653 738 q 613 847 653 813 q 496 881 572 881 l 496 881 q 344 834 404 881 q 248 699 285 788 q 188 486 211 611 l 188 486 q 266 560 221 532 q 362 601 311 588 q 464 615 413 615 l 464 615 q 613 581 556 615 q 699 490 671 547 q 726 360 726 432 l 726 360 q 698 207 726 276 q 619 88 669 138 q 501 10 568 38 q 357 -17 433 -17 z m 351 72 l 351 72 q 469 96 417 72 q 556 160 521 119 l 556 160 q 603 244 588 196 q 619 346 619 292 l 619 346 q 601 435 619 394 q 542 502 582 476 q 436 528 501 528 l 436 528 q 318 503 371 528 q 229 438 265 479 l 229 438 q 181 353 197 403 q 164 249 164 304 l 164 249 q 184 157 164 197 q 246 94 204 117 q 351 72 288 72 z "},"7":{ha:753,x_min:129,x_max:813,o:"m 250 0 l 131 0 q 208 256 153 133 q 336 487 263 378 q 490 690 410 596 q 646 858 571 783 l 646 858 l 129 858 l 146 953 l 813 953 l 803 892 q 669 757 738 831 q 535 600 600 683 q 413 428 469 517 q 317 247 357 339 q 260 63 276 156 l 260 63 q 254 35 256 44 q 250 0 253 25 l 250 0 z "},"8":{ha:796,x_min:42,x_max:764,o:"m 339 -17 l 339 -17 q 169 14 236 -17 q 72 95 103 44 q 42 210 42 146 l 42 210 q 66 331 42 276 q 138 426 90 385 q 251 489 185 467 l 251 489 q 174 565 200 517 q 147 668 147 614 l 147 668 q 172 788 147 733 q 244 884 197 843 q 353 947 290 925 q 489 969 415 969 l 489 969 q 642 940 582 969 q 733 863 703 911 q 764 751 764 814 l 764 751 q 742 642 764 693 q 678 551 719 590 q 582 489 638 513 l 582 489 q 680 410 650 460 q 710 299 710 360 l 710 299 q 665 133 710 204 q 538 23 621 63 q 339 -17 456 -17 z m 343 71 l 343 71 q 415 77 381 71 q 478 96 449 83 q 529 126 507 108 l 529 126 q 587 196 567 154 q 607 293 607 238 l 607 293 q 558 403 607 363 q 408 444 508 444 l 408 444 q 347 440 376 444 q 292 426 317 435 q 244 403 267 417 l 244 403 q 171 329 197 375 q 144 221 144 283 l 144 221 q 194 109 144 147 q 343 71 244 71 z m 424 529 l 424 529 q 490 536 458 529 q 547 556 521 543 q 594 588 574 568 l 594 588 q 642 653 625 615 q 660 740 660 692 l 660 740 q 613 847 660 811 q 483 882 565 882 l 483 882 q 421 876 450 882 q 367 858 392 869 q 321 831 342 847 l 321 831 q 269 762 288 803 q 251 668 251 721 l 251 668 q 296 565 251 601 q 424 529 340 529 z "},"9":{ha:794,x_min:68,x_max:764,o:"m 319 -17 l 319 -17 q 177 11 233 -17 q 94 88 121 39 q 68 201 68 138 l 68 201 q 70 239 68 219 q 75 276 72 258 l 75 276 l 178 276 q 174 244 175 260 q 172 215 172 229 l 172 215 q 213 107 172 142 q 329 72 253 72 l 329 72 q 481 119 421 72 q 578 253 540 165 q 638 467 615 342 l 638 467 q 559 393 604 421 q 464 351 514 365 q 361 338 414 338 l 361 338 q 212 373 269 338 q 126 469 154 408 q 99 601 99 529 l 99 601 q 126 751 99 683 q 204 867 154 818 q 322 943 254 917 q 468 969 389 969 l 468 969 q 626 941 560 969 q 728 848 692 913 q 764 675 764 783 l 764 675 q 760 595 764 638 q 749 501 757 553 l 749 501 q 656 195 715 308 q 512 33 596 82 q 319 -17 428 -17 z m 389 425 l 389 425 q 507 449 454 425 q 596 515 560 474 l 596 515 q 644 600 628 551 q 661 704 661 649 l 661 704 q 641 797 661 757 q 580 858 621 836 q 474 881 539 881 l 474 881 q 357 857 410 881 q 269 793 304 833 l 269 793 q 222 709 238 757 q 206 607 206 661 l 206 607 q 224 517 206 558 q 284 451 243 476 q 389 425 325 425 z "},"=":{ha:861,x_min:67,x_max:793,o:"m 776 454 l 117 454 l 133 544 l 793 544 l 776 454 z m 725 163 l 67 163 l 82 253 l 742 253 l 725 163 z "},"+":{ha:861,x_min:93,x_max:765,o:"m 411 0 l 318 0 l 374 308 l 93 308 l 110 400 l 390 400 l 444 710 l 538 710 l 483 400 l 765 400 l 749 308 l 467 308 l 411 0 z "}," ":{ha:297,x_min:0,x_max:0,o:""},A:{ha:929,x_min:-36,x_max:839,o:"m 79 0 l -36 0 l 500 953 l 638 953 l 839 0 l 728 0 l 676 257 l 221 257 l 79 0 z m 450 667 l 275 351 l 656 351 l 592 668 q 584 710 589 688 q 574 759 579 733 q 564 809 568 785 q 556 853 560 833 l 556 853 l 549 853 q 515 790 535 825 q 478 721 496 754 q 450 667 461 688 l 450 667 z "},B:{ha:965,x_min:63,x_max:939,o:"m 553 0 l 63 0 l 231 953 l 685 953 q 821 929 764 953 q 908 862 878 906 q 939 756 939 818 l 939 756 q 915 643 939 696 q 849 553 892 590 q 744 500 806 517 l 744 500 l 744 494 q 843 430 803 476 q 883 301 883 383 l 883 301 q 842 134 883 201 q 726 33 801 67 q 553 0 651 0 l 553 0 z m 250 442 l 189 94 l 564 94 q 679 118 632 94 q 751 188 726 142 q 775 300 775 233 l 775 300 q 734 405 775 368 q 615 442 693 442 l 615 442 l 250 442 z m 322 858 l 267 536 l 621 536 q 703 550 665 536 q 769 590 742 564 q 810 651 796 617 q 825 728 825 686 l 825 728 q 788 826 825 793 q 688 858 750 858 l 688 858 l 322 858 z "},C:{ha:1017,x_min:83,x_max:999,o:"m 474 -17 l 474 -17 q 184 77 285 -17 q 83 354 83 171 l 83 354 q 87 432 83 394 q 96 504 90 469 l 96 504 q 193 752 122 649 q 374 913 264 856 q 628 969 485 969 l 628 969 q 825 940 742 969 q 953 848 908 910 q 999 690 999 786 l 999 690 q 997 653 999 672 q 992 613 996 633 l 992 613 l 879 613 q 885 648 883 631 q 886 681 886 665 l 886 681 q 854 790 886 747 q 763 854 822 833 q 619 875 703 875 l 619 875 q 465 847 535 875 q 343 768 396 819 q 257 645 290 717 q 208 486 224 574 l 208 486 q 203 451 206 468 q 199 419 200 435 q 197 388 197 403 q 196 357 196 374 l 196 357 q 230 197 196 258 q 327 107 264 136 q 475 78 390 78 l 475 78 q 651 106 576 78 q 772 192 725 135 q 838 340 819 250 l 838 340 l 943 340 q 858 139 924 218 q 694 22 793 60 q 474 -17 594 -17 z "},D:{ha:1024,x_min:63,x_max:979,o:"m 422 0 l 63 0 l 231 953 l 565 953 q 871 866 763 953 q 979 593 979 779 l 979 593 q 976 517 979 554 q 967 443 974 479 l 967 443 q 869 201 942 300 q 685 51 797 103 q 422 0 572 0 l 422 0 z m 324 858 l 189 94 l 415 94 q 589 119 513 94 q 721 192 665 144 q 810 308 776 239 q 857 467 843 378 l 857 467 q 862 508 860 488 q 865 547 864 528 q 865 585 865 567 l 865 585 q 829 746 865 686 q 723 832 793 806 q 554 858 653 858 l 554 858 l 324 858 z "},E:{ha:943,x_min:64,x_max:960,o:"m 801 0 l 64 0 l 231 953 l 960 953 l 943 858 l 324 858 l 267 536 l 826 536 l 808 440 l 250 440 l 189 94 l 818 94 l 801 0 z "},F:{ha:853,x_min:64,x_max:901,o:"m 172 0 l 64 0 l 231 953 l 901 953 l 885 858 l 324 858 l 265 529 l 778 529 l 761 435 l 250 435 l 172 0 z "},G:{ha:1107,x_min:82,x_max:1039,o:"m 490 -17 l 490 -17 q 185 77 288 -17 q 82 356 82 171 l 82 356 q 85 426 82 389 q 96 500 89 463 l 96 500 q 196 755 122 650 q 385 915 269 860 q 650 969 500 969 l 650 969 q 813 953 740 969 q 935 903 885 936 q 1013 819 986 869 q 1039 700 1039 768 l 1039 700 q 1038 665 1039 683 q 1033 628 1036 647 l 1033 628 l 921 628 q 925 656 924 640 q 926 682 926 671 l 926 682 q 906 772 926 735 q 849 831 886 808 q 763 865 813 854 q 651 875 713 875 l 651 875 q 496 853 569 875 q 364 785 422 832 q 266 667 306 739 q 210 496 226 596 l 210 496 q 203 449 206 469 q 199 410 200 428 q 197 378 197 393 q 196 349 196 364 l 196 349 q 231 193 196 253 q 333 106 267 133 q 490 78 399 78 l 490 78 q 690 113 610 78 q 816 214 769 149 q 878 368 863 279 l 878 368 l 883 403 l 533 403 l 549 496 l 1010 496 l 922 0 l 846 0 l 846 128 q 745 45 803 78 q 622 -2 688 13 q 490 -17 557 -17 z "},H:{ha:1024,x_min:64,x_max:1003,o:"m 172 0 l 64 0 l 231 953 l 340 953 l 265 535 l 819 535 l 893 953 l 1003 953 l 836 0 l 726 0 l 803 439 l 250 439 l 172 0 z "},I:{ha:361,x_min:63,x_max:340,o:"m 172 0 l 63 0 l 231 953 l 340 953 l 172 0 z "},J:{ha:760,x_min:28,x_max:744,o:"m 293 -17 l 293 -17 q 97 38 165 -17 q 28 199 28 92 l 28 199 q 29 233 28 213 q 40 292 31 253 l 40 292 l 150 292 q 139 233 140 250 q 138 206 138 215 l 138 206 q 176 111 138 144 q 288 78 215 78 l 288 78 q 440 135 379 78 q 521 307 501 192 l 521 307 l 635 953 l 744 953 l 633 317 q 566 129 613 203 q 451 19 519 56 q 293 -17 382 -17 z "},K:{ha:897,x_min:64,x_max:990,o:"m 172 0 l 64 0 l 231 953 l 340 953 l 247 428 l 844 953 l 990 953 l 563 578 l 839 0 l 718 0 l 479 504 l 222 286 l 172 0 z "},L:{ha:722,x_min:63,x_max:660,o:"m 643 0 l 63 0 l 229 953 l 338 953 l 188 96 l 660 96 l 643 0 z "},M:{ha:1179,x_min:64,x_max:1157,o:"m 171 0 l 64 0 l 231 953 l 392 953 l 525 293 q 534 244 531 269 q 540 192 538 218 q 544 144 543 167 l 544 144 l 553 144 q 576 194 564 168 q 600 245 588 219 q 624 293 613 271 l 624 293 l 988 953 l 1157 953 l 990 0 l 881 0 l 993 636 q 1006 706 999 669 q 1019 773 1013 742 q 1028 821 1025 804 l 1028 821 l 1017 821 q 998 777 1008 799 q 978 735 988 756 q 958 699 968 715 l 958 699 l 569 0 l 479 0 l 338 694 q 328 756 332 724 q 322 821 325 789 l 322 821 l 313 821 q 303 763 308 797 q 293 696 299 729 q 282 636 288 663 l 282 636 l 171 0 z "},N:{ha:1024,x_min:64,x_max:1003,o:"m 171 0 l 64 0 l 231 953 l 338 953 l 701 296 q 720 262 710 282 q 741 221 731 242 q 758 183 751 200 l 758 183 l 765 185 q 772 238 768 210 l 772 238 l 781 293 l 896 953 l 1003 953 l 836 0 l 740 0 l 374 658 q 342 717 363 679 q 311 779 322 754 l 311 779 l 303 779 q 295 720 300 753 q 286 664 290 688 l 286 664 l 171 0 z "},O:{ha:1099,x_min:83,x_max:1056,o:"m 489 -17 l 489 -17 q 270 26 361 -17 q 131 151 179 68 q 83 356 83 235 l 83 356 q 86 428 83 393 q 94 496 89 463 l 94 496 q 193 745 121 639 q 381 910 265 851 q 649 969 496 969 l 649 969 q 868 927 778 969 q 1007 801 958 885 q 1056 597 1056 718 l 1056 597 q 1053 528 1056 563 q 1043 460 1050 493 l 1043 460 q 947 210 1019 317 q 758 43 874 103 q 489 -17 642 -17 z m 494 78 l 494 78 q 665 107 590 78 q 794 188 739 136 q 883 313 849 240 q 932 472 917 385 l 932 472 q 937 506 935 490 q 940 537 939 522 q 942 566 942 551 q 943 594 943 581 l 943 594 q 906 755 943 693 q 802 846 869 817 q 642 875 735 875 l 642 875 q 474 847 549 875 q 344 765 399 818 q 255 640 289 713 q 206 481 221 568 l 206 481 q 201 448 203 464 q 197 417 199 432 q 195 388 196 401 q 194 360 194 374 l 194 360 q 231 199 194 261 q 335 108 268 138 q 494 78 403 78 z "},P:{ha:921,x_min:64,x_max:940,o:"m 172 0 l 64 0 l 231 953 l 675 953 q 825 924 767 953 q 912 843 883 894 q 940 722 940 792 l 940 722 q 916 581 940 644 q 847 471 892 517 q 742 401 803 425 q 607 378 681 378 l 607 378 l 239 378 l 172 0 z m 324 858 l 256 472 l 601 472 q 721 501 669 472 q 801 584 772 531 q 829 711 829 638 l 829 711 q 790 819 829 781 q 668 858 750 858 l 668 858 l 324 858 z "},Q:{ha:1099,x_min:83,x_max:1056,o:"m 858 -181 l 719 -181 l 579 -10 q 535 -15 558 -14 q 489 -17 513 -17 l 489 -17 q 270 26 361 -17 q 131 151 179 68 q 83 356 83 235 l 83 356 q 86 428 83 393 q 94 496 89 463 l 94 496 q 193 745 121 639 q 381 910 265 851 q 649 969 496 969 l 649 969 q 868 927 778 969 q 1007 801 958 885 q 1056 597 1056 718 l 1056 597 q 1053 528 1056 563 q 1043 460 1050 493 l 1043 460 q 924 181 1014 297 q 692 15 835 65 l 692 15 l 858 -181 z m 494 78 l 494 78 q 665 107 590 78 q 794 188 739 136 q 883 313 849 240 q 932 472 917 385 l 932 472 q 937 506 935 490 q 940 537 939 522 q 942 566 942 551 q 943 594 943 581 l 943 594 q 906 755 943 693 q 802 846 869 817 q 642 875 735 875 l 642 875 q 474 847 549 875 q 344 765 399 818 q 255 640 289 713 q 206 481 221 568 l 206 481 q 201 448 203 464 q 197 417 199 432 q 195 388 196 401 q 194 360 194 374 l 194 360 q 231 199 194 261 q 335 108 268 138 q 494 78 403 78 z "},R:{ha:1017,x_min:63,x_max:969,o:"m 172 0 l 63 0 l 231 953 l 713 953 q 857 926 800 953 q 942 851 914 899 q 969 740 969 803 l 969 740 q 938 580 969 646 q 855 473 906 514 q 742 411 804 432 l 742 411 l 876 0 l 760 0 l 633 392 l 240 392 l 172 0 z m 324 858 l 258 486 l 626 486 q 741 515 689 486 q 825 597 793 544 q 857 725 857 650 l 857 725 q 819 823 857 788 q 703 858 781 858 l 703 858 l 324 858 z "},S:{ha:938,x_min:46,x_max:896,o:"m 424 -15 l 424 -15 q 274 -3 343 -15 q 154 35 206 8 q 74 106 103 63 q 46 211 46 149 l 46 211 q 49 255 46 232 q 58 300 53 278 l 58 300 l 164 300 q 156 262 158 281 q 153 225 153 243 l 153 225 q 188 138 153 169 q 282 92 222 106 q 418 79 342 79 l 418 79 q 543 92 488 79 q 639 128 599 104 q 701 186 679 151 q 722 265 722 221 l 722 265 q 701 335 722 307 q 642 383 679 363 q 560 419 606 404 q 464 450 514 435 l 464 450 q 356 486 410 467 q 258 534 303 506 q 188 604 214 563 q 163 706 163 646 l 163 706 q 193 824 163 775 q 278 906 224 874 q 401 953 332 938 q 549 968 471 968 l 549 968 q 690 954 626 968 q 799 913 753 940 q 871 845 846 886 q 896 750 896 804 l 896 750 q 894 718 896 735 q 888 682 892 701 l 888 682 l 779 682 q 785 712 783 699 q 786 735 786 725 l 786 735 q 724 841 786 807 q 544 875 663 875 l 544 875 q 408 857 469 875 q 310 805 346 839 q 274 719 274 771 l 274 719 q 290 659 274 685 q 337 615 307 633 q 405 581 367 596 q 486 553 443 565 l 486 553 q 606 515 544 535 q 719 465 668 494 q 803 392 771 436 q 835 283 835 349 l 835 283 q 802 148 835 204 q 713 56 769 92 q 581 2 656 19 q 424 -15 506 -15 z "},T:{ha:832,x_min:110,x_max:913,o:"m 406 0 l 297 0 l 447 857 l 110 857 l 126 953 l 913 953 l 897 857 l 557 857 l 406 0 z "},U:{ha:1021,x_min:115,x_max:1001,o:"m 453 -17 l 453 -17 q 205 50 294 -17 q 115 264 115 117 l 115 264 q 118 316 115 286 q 126 375 121 346 l 126 375 l 229 953 l 339 953 l 232 353 q 226 311 228 336 q 224 269 224 286 l 224 269 q 284 124 224 169 q 457 78 344 78 l 457 78 q 675 144 589 78 q 783 342 761 210 l 783 342 l 892 953 l 1001 953 l 897 364 q 814 144 872 229 q 665 22 756 60 q 453 -17 574 -17 z "},V:{ha:885,x_min:128,x_max:965,o:"m 447 0 l 313 0 l 128 953 l 238 953 l 363 306 q 374 242 368 278 q 385 173 379 207 q 393 114 390 139 l 393 114 l 401 114 q 435 180 415 143 q 472 252 454 217 q 501 308 490 288 l 501 308 l 846 953 l 965 953 l 447 0 z "},W:{ha:1263,x_min:124,x_max:1349,o:"m 381 0 l 242 0 l 124 953 l 232 953 l 308 296 q 314 249 311 279 q 321 186 317 218 q 328 128 325 154 l 328 128 l 339 128 q 360 187 349 154 q 383 249 372 219 q 400 296 394 279 l 400 296 l 663 953 l 804 953 l 869 296 q 874 249 871 279 q 878 186 876 218 q 883 128 881 154 l 883 128 l 893 128 q 915 185 903 153 q 940 248 928 218 q 960 296 951 278 l 960 296 l 1238 953 l 1349 953 l 933 0 l 796 0 l 731 657 q 726 708 728 678 q 723 772 725 739 q 721 828 721 804 l 721 828 l 711 828 q 690 772 701 804 q 667 708 678 739 q 647 657 656 678 l 647 657 l 381 0 z "},X:{ha:940,x_min:-47,x_max:986,o:"m 93 0 l -47 0 l 429 501 l 154 953 l 279 953 l 503 585 l 508 585 l 850 953 l 986 953 l 561 497 l 861 0 l 735 0 l 488 411 l 482 411 l 93 0 z "},Y:{ha:896,x_min:118,x_max:988,o:"m 439 0 l 331 0 l 400 399 l 118 953 l 232 953 l 465 494 l 472 494 l 863 953 l 988 953 l 510 399 l 439 0 z "},Z:{ha:883,x_min:-25,x_max:915,o:"m 760 0 l -25 0 l -14 60 l 728 858 l 161 858 l 178 953 l 915 953 l 906 894 l 160 94 l 776 94 l 760 0 z "},a:{ha:763,x_min:43,x_max:724,o:"m 279 -17 l 279 -17 q 153 12 206 -17 q 72 99 100 40 q 43 246 43 157 l 43 246 q 46 305 43 274 q 54 371 49 336 l 54 371 q 123 586 76 503 q 238 708 169 669 q 393 747 307 747 l 393 747 q 483 735 443 747 q 552 696 522 722 q 600 628 582 669 l 600 628 l 608 628 l 644 731 l 724 731 l 694 563 q 677 465 688 521 q 656 350 667 408 q 638 240 646 292 q 624 153 629 189 q 618 106 618 117 l 618 106 q 628 80 618 89 q 656 71 638 71 l 656 71 l 714 71 l 704 7 q 668 -8 690 0 q 619 -15 646 -15 l 619 -15 q 558 4 579 -15 q 531 58 536 24 l 531 58 q 528 82 529 69 q 529 108 528 94 l 529 108 l 521 111 q 412 15 475 46 q 279 -17 349 -17 z m 310 71 l 310 71 q 381 84 344 71 q 453 128 418 97 q 516 214 489 158 q 557 353 543 269 l 557 353 q 565 406 563 383 q 569 447 568 429 q 571 479 571 465 l 571 479 q 553 578 571 539 q 500 639 536 618 q 407 660 464 660 l 407 660 q 300 633 349 660 q 216 547 251 607 q 163 382 181 486 l 163 382 q 153 322 156 346 q 149 278 150 297 q 147 244 147 260 l 147 244 q 188 113 147 154 q 310 71 229 71 z "},b:{ha:771,x_min:33,x_max:724,o:"m 369 -17 l 369 -17 q 235 13 290 -17 q 151 107 181 43 l 151 107 l 142 107 l 113 0 l 33 0 l 210 1004 l 310 1004 l 246 636 l 256 636 q 324 701 286 676 q 403 737 363 726 q 483 747 444 747 l 483 747 q 613 719 558 747 q 695 633 667 690 q 724 485 724 575 l 724 485 q 721 427 724 458 q 711 361 718 396 l 711 361 q 642 144 689 228 q 526 22 594 61 q 369 -17 457 -17 z m 356 71 l 356 71 q 465 97 415 71 q 550 185 514 124 q 604 349 586 246 l 604 349 q 613 410 610 385 q 618 453 617 435 q 619 486 619 471 l 619 486 q 601 585 619 547 q 546 641 583 622 q 453 660 508 660 l 453 660 q 379 648 418 660 q 306 606 340 636 q 242 519 271 575 q 200 378 214 464 l 200 378 q 192 324 194 347 q 188 284 189 301 q 186 251 186 267 l 186 251 q 204 153 186 193 q 260 92 222 113 q 356 71 297 71 z "},c:{ha:701,x_min:49,x_max:678,o:"m 322 -17 l 322 -17 q 172 12 233 -17 q 80 101 111 40 q 49 256 49 161 l 49 256 q 53 322 49 288 q 64 393 57 357 l 64 393 q 109 543 79 478 q 183 654 139 608 q 288 724 228 700 q 425 747 347 747 l 425 747 q 569 722 514 747 q 651 650 625 696 q 678 540 678 604 l 678 540 q 676 502 678 522 q 669 461 674 482 l 669 461 l 571 461 q 575 496 574 479 q 576 528 576 513 l 576 528 q 561 603 576 574 q 512 648 546 633 q 424 663 478 663 l 424 663 q 312 635 364 663 q 222 546 260 607 q 167 385 185 485 l 167 385 q 158 327 161 351 q 153 285 154 303 q 153 253 153 268 l 153 253 q 172 148 153 189 q 230 88 192 107 q 321 68 268 68 l 321 68 q 433 93 389 68 q 503 163 478 118 q 539 269 529 208 l 539 269 l 636 269 q 587 124 624 189 q 485 21 550 58 q 322 -17 421 -17 z "},d:{ha:771,x_min:51,x_max:785,o:"m 293 -17 l 293 -17 q 161 12 215 -17 q 79 99 107 40 q 51 246 51 158 l 51 246 q 53 310 51 276 q 63 383 56 344 l 63 383 q 110 546 79 478 q 184 659 140 614 q 282 726 228 704 q 400 747 336 747 l 400 747 q 488 736 447 747 q 560 701 528 725 q 611 636 593 676 l 611 636 l 619 636 l 685 1004 l 785 1004 l 608 0 l 531 0 l 538 107 l 528 107 q 421 14 481 44 q 293 -17 361 -17 z m 313 71 l 313 71 q 434 103 382 71 q 521 197 486 135 q 571 347 556 258 l 571 347 q 578 400 575 378 q 583 440 582 422 q 585 471 585 457 l 585 471 q 561 588 585 547 q 500 644 538 629 q 424 660 463 660 l 424 660 q 304 632 356 660 q 219 544 253 604 q 168 389 185 485 l 168 389 q 159 326 163 351 q 155 282 156 300 q 154 247 154 264 l 154 247 q 196 112 154 153 q 313 71 238 71 z "},e:{ha:751,x_min:50,x_max:706,o:"m 331 -17 l 331 -17 q 174 14 236 -17 q 81 105 111 44 q 50 254 50 165 l 50 254 q 54 329 50 292 q 65 401 58 367 l 65 401 q 131 581 86 503 q 250 703 175 658 q 436 747 325 747 l 436 747 q 588 715 529 747 q 676 625 647 683 q 706 485 706 567 l 706 485 q 701 415 706 453 q 686 339 696 378 l 686 339 l 161 339 q 156 297 157 317 q 154 257 154 276 l 154 257 q 174 149 154 190 q 235 88 194 107 q 336 68 276 68 l 336 68 q 408 78 374 68 q 474 108 443 88 q 528 163 504 129 q 567 246 553 197 l 567 246 l 664 246 q 617 130 647 179 q 543 48 586 81 q 446 -1 500 15 q 331 -17 392 -17 z m 176 418 l 176 418 l 599 418 q 603 459 601 440 q 606 496 606 478 l 606 496 q 587 588 606 550 q 530 644 568 625 q 432 663 492 663 l 432 663 q 315 635 367 663 q 229 552 264 607 q 176 418 194 497 z "},f:{ha:372,x_min:-114,x_max:492,o:"m -25 -253 l -25 -253 q -60 -251 -43 -253 q -90 -246 -76 -249 q -114 -239 -103 -243 l -114 -239 l -101 -169 l -29 -169 q 28 -151 7 -169 q 54 -99 49 -132 l 54 -99 l 185 646 l 78 646 l 92 731 l 200 731 l 222 854 q 245 930 229 893 q 298 991 261 967 q 403 1015 335 1015 l 403 1015 q 437 1014 421 1015 q 467 1010 453 1013 q 492 1001 481 1007 l 492 1001 l 478 932 l 406 932 q 349 914 369 932 q 322 861 329 896 l 322 861 l 300 731 l 443 731 l 429 646 l 285 646 l 154 -96 q 132 -171 149 -135 q 80 -230 115 -207 q -25 -253 44 -253 z "},g:{ha:750,x_min:7,x_max:726,o:"m 244 -253 l 244 -253 q 124 -234 178 -253 q 38 -178 69 -215 q 7 -86 7 -142 l 7 -86 q 8 -65 7 -78 q 13 -35 8 -51 l 13 -35 l 110 -35 q 108 -50 108 -43 q 107 -64 107 -57 l 107 -64 q 126 -124 107 -101 q 180 -158 146 -147 q 254 -168 214 -168 l 254 -168 q 378 -144 326 -168 q 463 -69 431 -119 q 510 56 496 -19 l 510 56 q 515 88 513 72 q 519 118 518 104 l 519 118 l 510 118 q 442 54 479 79 q 365 18 406 29 q 282 7 324 7 l 282 7 q 154 35 207 7 q 73 120 101 63 q 44 265 44 178 l 44 265 q 47 320 44 292 q 56 382 50 349 l 56 382 q 176 661 89 575 q 394 747 264 747 l 394 747 q 526 717 472 747 q 610 624 581 686 l 610 624 l 619 624 l 649 731 l 726 731 l 611 69 q 547 -115 592 -44 q 427 -219 501 -186 q 244 -253 353 -253 z m 315 94 l 315 94 q 388 107 350 94 q 461 149 426 119 q 523 232 496 179 q 563 364 550 285 l 563 364 q 571 416 568 394 q 575 454 574 438 q 576 485 576 471 l 576 485 q 558 581 576 543 q 503 640 540 619 q 408 660 467 660 l 408 660 q 302 635 351 660 q 217 553 253 611 q 164 394 181 494 l 164 394 q 154 335 157 360 q 150 295 151 311 q 149 265 149 279 l 149 265 q 167 168 149 206 q 223 113 186 131 q 315 94 260 94 z "},h:{ha:768,x_min:33,x_max:708,o:"m 133 0 l 33 0 l 210 1004 l 310 1004 l 246 635 l 256 635 q 331 700 292 675 q 415 736 371 725 q 507 747 460 747 l 507 747 q 610 730 565 747 q 682 674 656 713 q 708 572 708 635 l 708 572 q 706 535 708 554 q 700 494 704 515 l 700 494 l 614 0 l 514 0 l 600 492 q 604 522 603 507 q 606 549 606 536 l 606 549 q 588 617 606 593 q 540 649 571 640 q 468 658 508 658 l 468 658 q 385 643 428 658 q 306 597 342 628 q 243 519 269 565 q 206 411 217 472 l 206 411 l 133 0 z "},i:{ha:296,x_min:33,x_max:308,o:"m 286 881 l 186 881 l 208 1004 l 308 1004 l 286 881 z m 133 0 l 33 0 l 163 731 l 263 731 l 133 0 z "},j:{ha:292,x_min:-135,x_max:306,o:"m 285 881 l 183 881 l 206 1004 l 306 1004 l 285 881 z m -46 -253 l -46 -253 q -78 -251 -61 -253 q -110 -246 -94 -249 q -135 -239 -125 -243 l -135 -239 l -122 -169 l -64 -169 q -11 -152 -31 -169 q 14 -101 8 -135 l 14 -101 l 161 731 l 261 731 l 114 -101 q 91 -175 108 -140 q 41 -231 74 -210 q -46 -253 8 -253 z "},k:{ha:694,x_min:33,x_max:715,o:"m 133 0 l 33 0 l 210 1004 l 310 1004 l 197 360 l 590 731 l 715 731 l 415 446 l 600 0 l 492 0 l 339 379 l 176 235 l 133 0 z "},l:{ha:296,x_min:33,x_max:310,o:"m 133 0 l 33 0 l 210 1004 l 310 1004 l 133 0 z "},m:{ha:1193,x_min:33,x_max:1133,o:"m 133 0 l 33 0 l 161 731 l 239 731 l 228 615 l 238 615 q 318 694 276 665 q 403 735 360 722 q 494 747 447 747 l 494 747 q 615 717 565 747 q 676 615 664 686 l 676 615 l 686 615 q 768 694 726 665 q 853 735 810 722 q 944 747 897 747 l 944 747 q 1081 707 1028 747 q 1133 572 1133 667 l 1133 572 q 1131 537 1133 556 q 1126 499 1129 518 l 1126 499 l 1038 0 l 939 0 l 1025 493 q 1029 524 1028 510 q 1031 550 1031 538 l 1031 550 q 1014 617 1031 593 q 968 650 997 642 q 903 658 939 658 l 903 658 q 800 631 851 658 q 710 548 749 603 q 658 414 672 493 l 658 414 l 586 0 l 486 0 l 572 493 q 577 524 575 510 q 579 550 579 538 l 579 550 q 563 617 579 593 q 517 650 546 642 q 451 658 488 658 l 451 658 q 348 631 399 658 q 259 550 297 604 q 207 414 221 496 l 207 414 l 133 0 z "},n:{ha:768,x_min:33,x_max:708,o:"m 133 0 l 33 0 l 161 731 l 239 731 l 228 615 l 238 615 q 322 694 278 665 q 413 735 367 722 q 507 747 460 747 l 507 747 q 610 730 565 747 q 682 674 656 713 q 708 572 708 635 l 708 572 q 706 535 708 554 q 700 494 704 515 l 700 494 l 614 0 l 514 0 l 600 492 q 604 522 603 507 q 606 549 606 538 l 606 549 q 588 617 606 593 q 540 649 571 640 q 468 658 508 658 l 468 658 q 385 643 428 658 q 307 597 343 628 q 244 519 271 565 q 206 411 217 472 l 206 411 l 133 0 z "},o:{ha:772,x_min:47,x_max:724,o:"m 331 -17 l 331 -17 q 176 13 239 -17 q 80 102 113 42 q 47 256 47 163 l 47 256 q 51 313 47 283 q 60 376 54 343 l 60 376 q 132 588 82 506 q 260 708 182 669 q 440 747 338 747 l 440 747 q 597 718 533 747 q 692 628 660 689 q 724 472 724 567 l 724 472 q 722 417 724 446 q 713 354 719 388 l 713 354 q 640 144 690 226 q 512 23 589 63 q 331 -17 435 -17 z m 333 68 l 333 68 q 460 97 406 68 q 552 188 515 126 q 604 349 589 250 l 604 349 q 614 406 611 382 q 618 446 617 429 q 619 476 619 463 l 619 476 q 598 581 619 540 q 536 642 576 622 q 438 663 496 663 l 438 663 q 311 633 365 663 q 221 542 257 603 q 167 382 185 481 l 167 382 q 158 324 161 349 q 153 284 154 300 q 151 253 151 268 l 151 253 q 172 149 151 189 q 234 88 193 108 q 333 68 275 68 z "},p:{ha:771,x_min:-10,x_max:719,o:"m 90 -240 l -10 -240 l 161 731 l 239 731 l 232 624 l 242 624 q 350 717 290 686 q 478 747 410 747 l 478 747 q 610 719 556 747 q 692 633 664 692 q 719 485 719 575 l 719 485 q 717 420 719 454 q 708 347 715 386 l 708 347 q 638 142 686 222 q 522 22 590 61 q 371 -17 454 -17 l 371 -17 q 283 -6 324 -17 q 210 31 242 6 q 158 94 178 56 l 158 94 l 150 94 l 90 -240 z m 347 71 l 347 71 q 466 99 415 71 q 551 187 517 126 q 601 342 585 247 l 601 342 q 612 405 608 379 q 616 449 615 431 q 617 483 617 468 l 617 483 q 597 585 617 547 q 543 642 578 624 q 458 660 508 660 l 458 660 q 338 628 390 660 q 249 535 285 596 q 199 383 214 474 l 199 383 q 191 331 194 353 q 186 292 188 308 q 185 260 185 275 l 185 260 q 209 142 185 183 q 270 86 233 101 q 347 71 307 71 z "},q:{ha:771,x_min:46,x_max:736,o:"m 565 -240 l 465 -240 l 525 94 l 515 94 q 448 29 486 54 q 368 -6 410 4 q 288 -17 326 -17 l 288 -17 q 159 12 214 -17 q 75 99 104 40 q 46 246 46 157 l 46 246 q 49 305 46 274 q 58 371 53 336 l 58 371 q 130 586 83 503 q 245 708 176 669 q 401 747 314 747 l 401 747 q 536 717 481 747 q 619 624 592 688 l 619 624 l 629 624 l 658 731 l 736 731 l 565 -240 z m 319 71 l 319 71 q 392 83 354 71 q 466 125 431 94 q 528 211 501 156 q 571 353 556 267 l 571 353 q 578 406 575 383 q 583 447 582 429 q 583 479 583 465 l 583 479 q 566 578 583 539 q 512 639 549 618 q 417 660 475 660 l 417 660 q 307 633 357 660 q 221 547 257 607 q 167 382 185 486 l 167 382 q 157 322 161 346 q 151 278 153 297 q 150 244 150 260 l 150 244 q 193 113 150 154 q 319 71 236 71 z "},r:{ha:440,x_min:33,x_max:489,o:"m 133 0 l 33 0 l 163 731 l 238 731 l 228 611 l 235 611 q 276 672 251 640 q 338 725 301 703 q 426 747 375 747 l 426 747 q 465 744 449 747 q 489 738 482 740 l 489 738 l 474 646 l 428 646 q 344 628 382 646 q 279 578 307 610 q 233 503 251 546 q 206 411 214 461 l 206 411 l 133 0 z "},s:{ha:688,x_min:15,x_max:643,o:"m 286 -17 l 286 -17 q 172 -5 222 -17 q 87 30 122 7 q 33 86 51 53 q 15 161 15 119 l 15 161 q 18 194 15 178 q 25 225 21 211 l 25 225 l 124 225 q 119 199 121 211 q 117 176 117 186 l 117 176 q 138 113 117 136 q 200 78 160 89 q 296 67 240 67 l 296 67 q 374 76 338 67 q 437 103 410 85 q 479 149 464 121 q 494 214 494 176 l 494 214 q 477 264 494 244 q 431 297 460 283 q 366 322 401 311 q 292 346 331 333 l 292 346 q 223 371 257 358 q 162 403 189 383 q 119 451 135 422 q 103 525 103 481 l 103 525 q 126 624 103 582 q 189 693 149 665 q 282 734 229 721 q 393 747 335 747 l 393 747 q 490 738 444 747 q 570 706 536 728 q 624 653 604 685 q 643 578 643 621 l 643 578 q 640 547 643 563 q 635 522 638 532 l 635 522 l 538 522 q 540 542 539 533 q 540 560 540 551 l 540 560 q 520 623 540 600 q 465 655 500 646 q 389 664 431 664 l 389 664 q 320 657 353 664 q 262 635 288 650 q 222 597 236 621 q 207 540 207 574 l 207 540 q 229 485 207 504 q 287 455 251 467 q 364 428 322 443 l 364 428 q 446 399 404 413 q 523 365 488 385 q 579 313 558 344 q 600 231 600 281 l 600 231 q 578 124 600 171 q 515 47 556 78 q 417 -1 475 15 q 286 -17 358 -17 z "},t:{ha:401,x_min:79,x_max:433,o:"m 197 -15 l 197 -15 q 128 -2 153 -15 q 92 33 103 11 q 82 86 82 56 l 82 86 q 83 105 82 94 q 86 125 85 115 l 86 125 l 176 646 l 79 646 l 94 731 l 192 731 l 247 933 l 326 933 l 290 731 l 433 731 l 418 646 l 276 646 l 189 150 q 185 128 188 140 q 183 110 183 115 l 183 110 q 194 78 183 89 q 233 68 206 68 l 233 68 l 318 68 l 306 4 q 272 -6 292 -1 q 233 -13 253 -11 q 197 -15 214 -15 z "},u:{ha:768,x_min:58,x_max:733,o:"m 261 -17 l 261 -17 q 157 1 203 -17 q 85 57 111 18 q 58 158 58 96 l 58 158 q 60 196 58 176 q 67 236 63 215 l 67 236 l 153 731 l 254 731 l 168 239 q 163 209 165 224 q 161 182 161 194 l 161 182 q 178 113 161 138 q 228 81 196 89 q 299 72 260 72 l 299 72 q 383 87 342 72 q 460 131 424 101 q 522 205 496 160 q 558 310 549 250 l 558 310 l 633 731 l 733 731 l 606 0 l 528 0 l 539 115 l 531 115 q 446 38 490 67 q 356 -4 401 8 q 261 -17 310 -17 z "},v:{ha:685,x_min:93,x_max:721,o:"m 326 0 l 229 0 l 93 731 l 194 731 l 263 349 q 274 280 268 321 q 286 197 281 239 q 296 121 292 154 l 296 121 l 303 121 q 339 196 318 154 l 339 196 l 379 279 q 413 349 399 321 l 413 349 l 615 731 l 721 731 l 326 0 z "},w:{ha:982,x_min:89,x_max:1021,o:"m 279 0 l 181 0 l 89 731 l 190 731 l 231 347 q 238 283 235 322 q 244 205 240 244 q 249 135 247 165 l 249 135 l 256 135 q 283 206 268 167 q 314 283 299 244 q 340 347 329 321 l 340 347 l 501 731 l 608 731 l 636 347 q 640 281 639 319 q 644 204 642 243 q 647 135 646 165 l 647 135 l 654 135 l 717 281 q 746 347 733 319 l 746 347 l 919 731 l 1021 731 l 672 0 l 575 0 l 544 400 q 541 460 543 425 q 538 531 539 494 q 535 597 536 568 l 535 597 l 528 597 q 503 532 517 569 q 474 460 489 494 q 450 400 460 425 l 450 400 l 279 0 z "},x:{ha:692,x_min:-44,x_max:719,o:"m 74 0 l -44 0 l 286 375 l 93 731 l 206 731 l 354 449 l 363 449 l 603 731 l 719 731 l 406 372 l 604 0 l 493 0 l 340 296 l 332 296 l 74 0 z "},y:{ha:685,x_min:-40,x_max:719,o:"m 50 -253 l 50 -253 q -3 -249 22 -253 q -40 -244 -28 -246 l -40 -244 l -28 -169 l 35 -169 q 105 -156 72 -169 q 171 -106 138 -143 q 240 7 204 -68 l 240 7 l 92 731 l 192 731 l 265 347 q 279 276 272 318 q 294 192 286 235 q 306 117 301 150 l 306 117 l 313 117 q 338 171 324 140 q 366 232 351 201 q 394 292 381 263 q 418 342 407 321 l 418 342 l 614 731 l 719 731 l 347 13 q 287 -97 317 -49 q 223 -181 257 -146 q 147 -234 189 -215 q 50 -253 106 -253 z "},z:{ha:683,x_min:-17,x_max:676,o:"m 572 0 l -17 0 l -7 60 l 511 646 l 128 646 l 143 731 l 676 731 l 665 674 l 144 85 l 589 85 l 572 0 z "},".":{ha:369,x_min:63,x_max:201,o:"m 179 0 l 63 0 l 85 131 l 201 131 l 179 0 z "},",":{ha:369,x_min:11,x_max:203,o:"m 11 -193 l 11 -193 l 22 -143 q 66 -117 47 -137 q 97 -67 85 -97 q 115 0 110 -37 l 115 0 l 63 0 l 86 131 l 203 131 l 182 15 q 153 -83 172 -44 q 109 -146 133 -122 q 59 -180 85 -169 q 11 -193 33 -190 z "},"'":{ha:267,x_min:136,x_max:289,o:"m 201 572 l 136 572 l 146 749 l 182 953 l 289 953 l 253 749 l 201 572 z "},"\u2019":{ha:304,x_min:122,x_max:313,o:"m 122 629 l 122 629 l 132 679 q 176 706 157 686 q 207 756 194 726 q 225 822 219 786 l 225 822 l 172 822 l 196 953 l 313 953 l 292 838 q 249 715 278 760 q 185 652 219 671 q 122 629 151 633 z "},"!":{ha:367,x_min:61,x_max:347,o:"m 196 246 l 129 246 l 228 953 l 347 953 l 196 246 z m 178 0 l 61 0 l 85 131 l 201 131 l 178 0 z "},"?":{ha:781,x_min:142,x_max:754,o:"m 417 236 l 319 236 l 333 321 q 369 414 343 376 q 431 480 396 451 q 504 533 467 508 q 574 588 542 558 q 626 655 606 617 q 646 749 646 693 l 646 749 q 634 808 646 778 q 589 858 622 838 q 492 879 556 879 l 492 879 q 385 859 429 879 q 313 808 342 839 q 267 743 283 778 q 244 678 251 708 l 244 678 q 242 660 243 668 q 242 644 242 651 l 242 644 l 142 644 q 154 722 142 678 q 192 808 167 765 q 258 888 217 851 q 358 947 300 925 q 493 969 415 969 l 493 969 q 620 951 569 969 q 701 901 671 932 q 742 833 731 869 q 754 760 754 797 l 754 760 q 733 639 754 689 q 676 552 711 589 q 602 488 642 515 q 526 434 563 460 q 463 379 489 408 q 429 310 436 350 l 429 310 l 417 236 z m 386 0 l 269 0 l 293 131 l 410 131 l 386 0 z "},$:{ha:688,x_min:35,x_max:663,o:"m 297 -68 l 231 -68 l 260 96 q 192 107 224 99 l 192 107 q 106 141 142 118 q 53 197 71 164 q 35 272 35 231 l 35 272 q 38 304 35 288 q 44 336 40 321 l 44 336 l 143 336 q 138 310 140 322 q 136 286 136 297 l 136 286 q 158 223 136 247 q 219 189 179 199 l 219 189 q 275 179 244 182 l 275 179 l 324 453 q 311 457 317 456 l 311 457 q 242 481 276 468 q 181 514 208 494 q 138 563 154 533 q 122 636 122 592 l 122 636 q 145 735 122 693 q 208 804 168 776 q 301 846 249 832 l 301 846 q 394 858 346 857 l 394 858 l 421 1004 l 488 1004 l 461 856 q 510 849 486 853 l 510 849 q 590 817 556 838 q 643 764 624 796 q 663 689 663 732 l 663 689 q 660 658 663 672 q 654 633 657 643 l 654 633 l 557 633 q 559 653 558 643 q 560 671 560 663 l 560 671 q 540 733 560 711 q 485 765 519 756 l 485 765 q 446 772 467 769 l 446 772 l 403 531 q 465 510 433 521 l 465 510 q 542 476 507 496 q 599 424 578 456 q 619 340 619 392 l 619 340 q 597 235 619 282 q 535 158 575 189 q 436 111 494 126 l 436 111 q 326 94 386 97 l 326 94 l 297 -68 z m 386 433 l 342 179 q 393 188 368 181 l 393 188 q 456 213 429 196 q 499 259 483 231 q 514 325 514 288 l 514 325 q 497 374 514 354 q 450 408 479 394 l 450 408 q 386 433 421 422 l 386 433 z m 340 553 l 340 553 l 379 772 q 340 768 360 771 l 340 768 q 281 747 307 761 q 241 708 256 732 q 226 651 226 685 l 226 651 q 249 596 226 615 q 307 565 271 576 l 307 565 q 340 553 322 560 z "},"%":{ha:1310,x_min:183,x_max:1167,o:"m 303 0 l 201 0 l 1053 953 l 1154 953 l 303 0 z m 369 468 l 369 468 q 233 504 282 468 q 183 632 183 540 l 183 632 q 185 674 183 651 q 192 721 188 696 l 192 721 q 238 869 208 815 q 314 946 268 922 q 422 969 360 969 l 422 969 q 559 933 511 969 q 607 806 607 897 l 607 806 q 606 765 607 786 q 599 717 604 743 l 599 717 q 554 569 583 624 q 479 492 525 515 q 369 468 433 468 z m 928 -17 l 928 -17 q 792 19 842 -17 q 742 147 742 56 l 742 147 q 744 190 742 167 q 751 238 747 213 l 751 238 q 797 384 768 331 q 872 461 826 438 q 981 485 918 485 l 981 485 q 1118 449 1069 485 q 1167 321 1167 413 l 1167 321 q 1165 278 1167 301 q 1157 229 1163 256 l 1157 229 q 1111 83 1140 138 q 1037 6 1082 29 q 928 -17 992 -17 z m 365 540 l 365 540 q 461 585 432 540 q 504 711 490 629 l 504 711 q 510 747 508 731 q 514 776 513 763 q 515 800 515 789 l 515 800 q 495 873 515 849 q 426 897 475 897 l 426 897 q 333 853 363 897 q 288 726 303 808 l 288 726 q 282 692 285 707 q 278 664 279 676 q 278 639 278 651 l 278 639 q 298 565 278 590 q 365 540 318 540 z m 924 56 l 924 56 q 1020 100 990 56 q 1064 226 1050 144 l 1064 226 q 1069 262 1068 246 q 1072 291 1071 278 q 1074 315 1074 304 l 1074 315 q 1053 388 1074 364 q 986 413 1033 413 l 986 413 q 892 368 922 413 q 846 240 861 324 l 846 240 q 840 206 843 222 q 837 178 838 190 q 836 154 836 167 l 836 154 q 856 81 836 106 q 924 56 876 56 z "},"&":{ha:938,x_min:46,x_max:918,o:"m 371 -17 l 371 -17 q 199 12 272 -17 q 86 94 126 40 q 46 221 46 147 l 46 221 q 78 355 46 300 q 160 443 110 410 q 261 489 210 476 l 261 489 l 263 494 q 180 563 213 521 q 147 664 147 604 l 147 664 q 176 796 147 739 q 258 892 206 853 q 379 950 310 931 q 529 969 449 969 l 529 969 q 694 942 624 969 q 802 867 764 915 q 840 750 840 818 l 840 750 q 840 725 840 742 q 835 689 839 708 l 835 689 l 735 689 q 738 715 738 704 q 739 733 739 725 l 739 733 q 711 819 739 786 q 636 867 683 851 q 529 882 589 882 l 529 882 q 433 871 482 882 q 342 835 383 860 q 275 771 300 811 q 250 672 250 731 l 250 672 q 275 591 250 624 q 343 542 300 558 q 438 526 386 526 l 438 526 l 519 526 l 504 443 l 425 443 q 329 433 378 443 q 240 399 281 422 q 175 335 200 375 q 150 238 150 296 l 150 238 q 178 142 150 179 q 256 88 206 106 q 375 71 307 71 l 375 71 q 517 92 458 71 q 612 155 576 113 q 658 261 647 197 l 658 261 l 704 526 l 918 526 l 903 440 l 790 440 l 760 265 q 694 110 743 172 q 563 15 644 47 q 371 -17 482 -17 z "},"-":{ha:463,x_min:49,x_max:418,o:"m 399 322 l 49 322 l 67 431 l 418 431 l 399 322 z "},":":{ha:385,x_min:72,x_max:317,o:"m 294 601 l 176 601 l 200 731 l 317 731 l 294 601 z m 189 0 l 72 0 l 94 131 l 211 131 l 189 0 z "},"|":{ha:342,x_min:129,x_max:217,o:"m 217 -249 l 129 -249 l 129 1004 l 217 1004 l 217 -249 z "},"\xA3":{ha:782,x_min:4,x_max:783,o:"m 657 0 l 4 0 l 19 92 l 129 92 l 189 428 l 60 428 l 74 518 l 204 518 l 239 715 q 298 859 256 803 q 404 942 340 915 q 544 969 468 969 l 544 969 q 670 948 617 969 q 753 883 724 926 q 783 775 783 840 l 783 775 q 782 742 783 758 q 775 693 781 725 l 775 693 l 675 693 q 681 725 679 713 q 683 745 682 738 q 683 758 683 753 l 683 758 q 665 830 683 803 q 615 871 647 857 q 543 885 583 885 l 543 885 q 451 867 494 885 q 380 813 408 849 q 340 721 351 778 l 340 721 l 304 518 l 538 518 l 522 428 l 289 428 l 218 92 l 672 92 l 657 0 z "},"/":{ha:406,x_min:-76,x_max:521,o:"m 14 -68 l -76 -68 l 431 1021 l 521 1021 l 14 -68 z "},"(":{ha:492,x_min:90,x_max:528,o:"m 310 -218 l 244 -218 q 130 2 169 -118 q 90 251 90 122 l 90 251 q 135 533 90 396 q 263 793 179 669 q 461 1021 346 917 l 461 1021 l 528 1021 q 399 853 458 942 q 293 666 339 764 q 221 463 247 568 q 194 243 194 357 l 194 243 q 209 77 194 158 q 250 -79 224 -4 q 310 -218 276 -154 l 310 -218 z "},")":{ha:492,x_min:-22,x_max:415,o:"m 196 1021 l 261 1021 q 376 801 336 921 q 415 551 415 681 l 415 551 q 371 270 415 407 q 244 10 326 133 q 44 -218 161 -114 l 44 -218 l -22 -218 q 108 -50 47 -139 q 214 137 168 39 q 285 340 260 235 q 311 560 311 446 l 311 560 q 297 726 311 644 q 256 882 282 807 q 196 1021 231 957 l 196 1021 z "}},familyName:"Archivo Light Italic",ascender:1219,descender:-292,underlinePosition:-148,underlineThickness:44,boundingBox:{xMin:-274,xMax:1385,yMin:-390,yMax:1078},resolution:1e3};var s1={500:jd,800:e1,"800i":t1,"300i":n1},i1=new Map,$5=n=>{let e=i1.get(n);return e||(e=new rc(s1[n]),i1.set(n,e)),e},r1=new Map,a1=(n,e,t,i,r)=>{let s=`${e}|${t}|${i}|${r}|${n}`,a=r1.get(s);if(!a){let o=new ic(n,{font:$5(e),size:t,depth:Math.max(.1,i-2*r),curveSegments:6,bevelEnabled:r>0,bevelThickness:r,bevelSize:r*.8,bevelOffset:-r*.8,bevelSegments:2});o.translate(0,0,r),o.computeBoundingBox();let l=o.boundingBox;a={g:o,w:Number.isFinite(l.max.x)?l.max.x-Math.min(0,l.min.x):0},r1.set(s,a)}return a},en=(n,e,t)=>{let i=s1[e],r=0;for(let s of n)r+=(i.glyphs[s]??i.glyphs["?"]).ha*t/i.resolution;return r},pn=(n,e)=>{let t=e.depth??e.size*.25,i=e.bevel??Math.min(t*.2,e.size*.03),r=a1(n,e.font??"800",e.size,t,i),s=new qe(r.g,[e.face,e.side??e.face]);s.castShadow=!0,s.receiveShadow=!0;let a=new ke;return s.position.x=e.align==="left"?0:-en(n,e.font??"800",e.size)/2,a.add(s),a.userData.width=en(n,e.font??"800",e.size),a.userData.isText=!0,a.userData.textSize=e.size,a.userData.textStr=n,a},o1=n=>{let e=n.font??"800",t=n.depth??n.size*.25,i=n.bevel??Math.min(t*.2,n.size*.03),r=new ke;r.userData.isText=!0,r.userData.textSize=n.size,r.userData.textStr="(figure)";let s=[],a=[n.face,n.side??n.face],o=Math.max(...Array.from("0123456789",d=>en(d,e,n.size))),l=d=>/\d/.test(d)?o:en(d,e,n.size),c="";return{group:r,set:d=>{if(d===c)return;c=d;let u=Array.from(d).reduce((g,m)=>g+l(m),0),f=-u/2,x=0;for(let g of d){let m=l(g);if(g!==" "){let p=s[x];p||(p=new qe(void 0,a),p.castShadow=!0,p.receiveShadow=!0,s.push(p),r.add(p)),p.geometry=a1(g,e,n.size,t,i).g,p.position.x=f+(/\d/.test(g)?(o-en(g,e,n.size))/2:0),p.visible=!0,x++}f+=m}for(;x<s.length;x++)s[x].visible=!1;r.userData.width=u,r.userData.textStr=d}}};var qa=new I;function Tn(n,e,t,i,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;qa.copy(e),qa[i]=0,qa.normalize();let c=.5*a/(a+o),h=1-qa.angleTo(n)/l;return Math.sign(qa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var sc=class n extends un{constructor(e=1,t=1,i=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,h=new I(e,t,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,x=d.length/6,g=new I,m=.5/a;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*s,d[p+1]=h.y*Math.sign(l.y)+c.y*s,d[p+2]=h.z*Math.sign(l.z)+c.z*s,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/x)){case 0:g.set(1,0,0),f[y+0]=Tn(g,c,"z","y",s,i),f[y+1]=1-Tn(g,c,"y","z",s,t);break;case 1:g.set(-1,0,0),f[y+0]=1-Tn(g,c,"z","y",s,i),f[y+1]=1-Tn(g,c,"y","z",s,t);break;case 2:g.set(0,1,0),f[y+0]=1-Tn(g,c,"x","z",s,e),f[y+1]=Tn(g,c,"z","x",s,i);break;case 3:g.set(0,-1,0),f[y+0]=1-Tn(g,c,"x","z",s,e),f[y+1]=1-Tn(g,c,"z","x",s,i);break;case 4:g.set(0,0,1),f[y+0]=1-Tn(g,c,"x","y",s,e),f[y+1]=1-Tn(g,c,"y","x",s,t);break;case 5:g.set(0,0,-1),f[y+0]=Tn(g,c,"x","y",s,e),f[y+1]=1-Tn(g,c,"y","x",s,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var l1=1.18,c1=n=>(n.traverse(e=>{let t=e;if(t.isMesh)for(let i of Array.isArray(t.material)?t.material:[t.material]){if(i.isMeshBasicMaterial){t.castShadow=!1;continue}let r=i;r.isMeshStandardMaterial&&r.userData.envBase===void 0&&(r.userData.envBase=r.envMapIntensity)}}),n),lh=(n,e={})=>{let t=e.s??1;return{amb:e.amb??.2,key:{pos:[n[0]-900*t,n[1]+2300*t,n[2]+1500*t],at:[n[0],n[1]*.5,n[2]],i:e.key??3.6,color:e.color??"#FBF7F6",angle:.42,soft:1},rim:{pos:[n[0]+1300*t,n[1]+1100*t,n[2]-1500*t],at:n,i:e.rim??3,color:"#F4F1F2",angle:.8,soft:.8},aux:{pos:[n[0]-1700*t,n[1]+500*t,n[2]-700*t],at:n,i:(e.rim??3)*.5,color:"#EEEAEA",angle:.8,soft:.8},back:{pos:[n[0],n[1]+900*t,n[2]+600],at:[n[0],n[1]+500*t,Ma],i:e.back??3.2,color:"#F2EEEE",angle:.5,soft:1},focus:[n[0],n[2]],reach:e.reach??2600*t,reflect:.06}},Ma=-2600,h1=(n,e={})=>({amb:e.amb??.95,key:{pos:[n[0]-700,n[1]+2600,n[2]+900],at:n,i:e.key??1.1,color:"#FFFFFF",angle:.8,soft:1},aux:{pos:[n[0]+1500,n[1]+1500,n[2]+900],at:n,i:.35,color:"#FFFFFF",angle:.9,soft:1},back:{pos:[n[0],n[1]+1200,n[2]+600],at:[n[0],n[1]+600,Ma],i:.4,color:"#FFFFFF",angle:.9,soft:1},focus:[n[0],n[2]],reach:2600,reflect:0});var ft={white:"#f8f2f2",money:"#f6f2bd",red:"#f55048",amber:"#f6b050",gold:"#8a6f47",cream:"#f8e9c0",black:"#09090a",graphite:"#19191b",satin:"#9a9a9e",paper:"#e8e5de"},ui=n=>new xe(n),nt={black:()=>new Nt({color:ui(ft.black),roughness:.42,metalness:.15,envMapIntensity:.9,clearcoat:.25,clearcoatRoughness:.45}),graphite:()=>new Nt({color:ui(ft.graphite),roughness:.5,metalness:.3,envMapIntensity:.8}),satin:()=>new Nt({color:ui(ft.satin),roughness:.32,metalness:1,envMapIntensity:.9}),gold:()=>new Nt({color:ui(ft.gold),roughness:.34,metalness:1,envMapIntensity:1.25}),paper:()=>new yt({color:ui(ft.paper),roughness:.92,metalness:0}),rubber:()=>new yt({color:ui("#09090a"),roughness:.85,metalness:0})},Li=(n,e=l1)=>{let t=new hn({color:ui(n).multiplyScalar(e),toneMapped:!1});return t.userData.full=t.color.clone(),t},Z5=(n,e,t=.07)=>{n.color.copy(n.userData.full).multiplyScalar(t+(1-t)*zn(e))},J5=n=>(n.castShadow=!0,n.receiveShadow=!0,n),Ct=(n,e,t,i,r)=>J5(new qe(new sc(n,e,t,4,Math.min(i,n/2-.01,e/2-.01,t/2-.01)),r)),jr=(n,e,t,i,r)=>{let s=Ct(n,e,t,i,r);return s.position.y=e/2,s};var Ui=(n,e=1.14)=>(n.scale.x*=e,n),Fi=(n,e,t={})=>(n.userData.fitOn=e,n.userData.fitInset=t.inset??0,n.userData.fitRound=t.round,n.userData.fitMargin=t.margin,n.userData.fitStand=!!t.stand,n),u1=(n,e,t={})=>(n.userData.fitOn=e,n.userData.fitInset=t.inset??0,n.userData.fitMargin=0,n.userData.fitPlate=!0,n),es=(n,e)=>(n.userData.fitFree=e,n),ch=(n,e,t)=>{var i,r,s;((i=n.userData).joinWith??(i.joinWith=[])).push(e),((r=e.userData).joinWith??(r.joinWith=[])).push(n),((s=n.userData).joinWhy??(s.joinWhy=[])).push(t)},d1=(n,e,t,i,r)=>{if(n>=t)return r;if(n<=e)return i;let s=(n-e)/(t-e);return i+(r-i)*(1-Math.pow(1-s,2.6))};var f1=(n,e="$")=>{let t=Math.abs(n);return t>=1e9?e+(t>=1e10?Math.round(n/1e9):Math.round(n/1e8)/10)+"B":t>=1e6?e+(t>=1e7?Math.round(n/1e6):Math.round(n/1e5)/10)+"M":e+Math.round(n).toLocaleString("en-US")},p1=n=>{let e=Li(n.color??ft.white),t=new yt({color:ui(n.color??ft.white).multiplyScalar(.22),roughness:.5,metalness:.4}),i=o1({font:n.font??"800",size:n.size,depth:n.depth??n.size*.34,face:e,side:t});return i.group.scale.x=n.wide??1.14,{group:i.group,set:i.set,face:e,side:t}},Sa=(n,e={})=>{let t=n.join(" ").trim().split(/\s+/).length;if(t>3&&!/^[\d$.,%×x= ]+$/.test(n.join("")))throw new Error(`litPlate: "${n.join(" ")}" is ${t} words; in-scene text is at most three words or one figure with a unit (R8)`);let i=e.size??110,r=e.font??"800",s=1.14,a=Li(e.color??ft.white),o=n.map(x=>en(x,r,i)*s),l=e.w??Math.max(...o)+2*(e.padX??i*.55),c=i*1.12,h=n.length*c+2*(e.padY??i*.42),d=e.depth??Math.max(40,i*.5),u=new ke,f=Ct(l,h,d,Math.min(18,d*.3),e.mat??nt.black());return u.add(f),n.forEach((x,g)=>{let m=Ui(pn(x,{font:r,size:i,depth:4,bevel:0,face:a}),s);m.position.set(0,((n.length-1)/2-g)*c-i*.345,d/2+.5),m.traverse(p=>{p.castShadow=!1}),Fi(m,f,{inset:Math.min(18,d*.3)*.5}),u.add(m)}),{group:u,body:f,face:a,w:l,h,d,setLit:x=>Z5(a,x)}},m1=(n={})=>{let e=n.r??900,t=(n.w??12)/e,i=n.dur??28,r=new hn({color:ui(n.color??ft.white).multiplyScalar(1.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1,blending:Xn,fog:!1}),s=new qe(new ia(1-t,1,96),r);return s.rotation.x=-Math.PI/2,s.position.y=1.5,s.renderOrder=3,s.userData.isFloor=!0,{mesh:s,update:(a,o)=>{let l=(a-o)/i;if(l<=0||l>=1){s.visible=!1;return}s.visible=!0;let c=1-Math.pow(1-l,2.2);s.scale.setScalar(Math.max(1,e*c)),r.opacity=Math.pow(1-l,1.4)*.9}}};var hh=(n,e,t={})=>{let i=t.h??1400,r=t.fall??9,s=i*(t.bounce??1)*.045,a=n-e;if(a<-r)return{y:i,on:!1,fast:!1};if(a<0){let c=(a+r)/r;return{y:i*(1-c*c),on:!0,fast:!0}}let o=9,l=6;if(a<o){let c=a/o;return{y:s*4*c*(1-c),on:!0,fast:a<2}}if(a<o+l){let c=(a-o)/l;return{y:s*.28*4*c*(1-c),on:!0,fast:!1}}return{y:0,on:!0,fast:!1}};var K5=5,Ea=n=>{let e=ja.indexOf(n);if(e<=0)return 0;let t=ja[e-1];return Math.max(Qd(t,Qa[t]-1)+2,nc(n,0)-K5)};var _1=30,Q5=960/Math.tan(_1*Math.PI/360),x1=86,uh=250,j5=.62*1080,e6=196,t6=10,n6=8,i6=.2,ac=[[0,0],...[0,1,2,3,4,5].map(n=>[.5*Math.cos(n*Math.PI/3),.5*Math.sin(n*Math.PI/3)]),...[0,1,2,3,4,5].map(n=>[Math.cos((n+.5)*(Math.PI/3)),Math.sin((n+.5)*(Math.PI/3))])],r6=n=>{let e=Cn.find(t=>t.scene===n);if(!e?.w?.length)throw new Error(`turn card ${n}: its cue has no tokens`);return e.w.map(([t,i])=>({t,at:Di(i)-2}))},s6=n=>new ct({transparent:!0,depthWrite:!1,blending:Xn,fog:!1,uniforms:{col:{value:new xe(n)},a:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 col; uniform float a; varying vec2 vUv;
    void main() { float d = length((vUv - 0.5) * vec2(2.0, 2.3)); float g = pow(clamp(1.0 - d, 0.0, 1.0), 2.4); gl_FragColor = vec4(col * g * a, 1.0); }`}),g1=(n,e,t,i,r)=>{let s=new ke,a=new xe(i).multiplyScalar(r),o=new hn({color:a.clone(),toneMapped:!1,transparent:!0,depthWrite:!1,depthTest:!1,blending:Xn,fog:!1}),l=ac.map(()=>{let c=pn(n,{font:e,size:t,depth:1,bevel:0,face:o,align:"left"});return s.add(c),c});return es(s,"a turn card's word: on black, on no surface"),{group:s,width:en(n,e,t),set:c=>{s.visible=c>.001;let h=n6*(1-c);l.forEach((d,u)=>{d.position.set(ac[u][0]*h,ac[u][1]*h,0)}),o.color.copy(a).multiplyScalar(c/ac.length)}}},v1=(n,e,t,i,r=1)=>{let s=r6(n),a=s.slice(0,-r),o={t:s.slice(-r).map(h=>h.t).join(" "),at:s[s.length-r].at},l=Ea(n),c=Math.min(uh,uh*j5/Math.max(1,en(o.t,"800i",uh)));return{id:n,label:e,enter:l,stage:"card",shots:({from:h})=>[ys(h,[0,0,Q5],[0,0,0],{fov:_1,still:!0,why:"the card"})],lights:()=>({amb:0,key:{pos:[0,1e3,2e3],at:[0,0,0],i:0}}),cues:()=>[{kind:"hit",s:"sub",at:o.at+2,vol:.42,why:`the card's word lands: ${o.t}`},{kind:"hit",s:"bloom",at:o.at+3,vol:.22,why:"the soft glow comes up behind it"}],build:()=>{let h=new ke,d=new ke,u=x1*.3,f=a.map(S=>({...g1(S.t,"300i",x1,"#faf0ee",.86),at:S.at})),g=-(f.reduce((S,A)=>S+A.width,0)+u*Math.max(0,a.length-1))/2;for(let S of f)S.group.position.set(g,e6,0),g+=S.width+u,d.add(S.group);let m={...g1(o.t,"800i",c,t,.88),at:o.at};m.group.position.set(-m.width/2,0,0),d.add(m.group);for(let S of[...f,m])S.set(1);d.updateMatrixWorld(!0);let p=new Gt().setFromObject(d),y=new I;p.getCenter(y),d.position.set(-y.x,-y.y,0);let b=s6(i),E=new qe(new kt(1700,1500),b);E.position.set(0,-y.y+c*.3,-4),h.add(E,d),h.traverse(S=>{S.castShadow=!1});let C=(S,A)=>_s(zn((S-A)/t6));return{group:h,update:S=>{for(let P of f)P.set(C(S,P.at));let A=C(S,m.at);m.set(A),b.uniforms.a.value=i6*A}}}}},b1=v1("explain","2 Turn card: Let me explain.",ft.amber,"#743815"),y1=v1("worst","6 Turn card: And here's the worst part.",ft.red,"#6c1310",2);var dh={note:"outer silhouette of assets/brand/crest.png (alpha>40, closed 41px, dilated 17px), image-centred, x and y in units of the image WIDTH, y up; image aspect h/w",aspect:1.013125,pts:[[-.00188,.50656],[-.00625,.49969],[-.02375,.48531],[-.035,.46906],[-.04188,.46531],[-.04688,.46656],[-.07312,.48219],[-.09188,.48844],[-.10938,.49031],[-.12937,.48469],[-.13688,.47969],[-.15062,.46406],[-.15812,.44844],[-.16188,.43344],[-.165,.42969],[-.21875,.40344],[-.26125,.37531],[-.29812,.34469],[-.34125,.29906],[-.35,.29906],[-.35625,.30906],[-.36688,.31844],[-.3775,.32031],[-.38812,.31719],[-.45312,.25094],[-.4625,.23531],[-.46312,.22469],[-.46125,.21781],[-.45125,.20594],[-.4375,.20156],[-.43438,.19781],[-.43375,.19344],[-.43812,.18719],[-.46,.17031],[-.45875,.13656],[-.45312,.10906],[-.4475,.09281],[-.43875,.07531],[-.42625,.05906],[-.425,.05344],[-.42938,.04719],[-.4475,.03969],[-.46,.03094],[-.47875,.01031],[-.4875,-.00594],[-.49312,-.02406],[-.5,-.02781],[-.5,-.05656],[-.49312,-.06031],[-.48312,-.08719],[-.47438,-.10031],[-.46312,-.11219],[-.43938,-.12781],[-.41188,-.13531],[-.40812,-.13844],[-.40688,-.14406],[-.41625,-.16281],[-.42125,-.18406],[-.42062,-.20781],[-.41375,-.23094],[-.4,-.25844],[-.37625,-.29344],[-.35562,-.31781],[-.32375,-.34906],[-.28875,-.37656],[-.24125,-.40531],[-.1975,-.42594],[-.14688,-.44406],[-.12812,-.47219],[-.11188,-.48469],[-.0975,-.48906],[-.08312,-.48969],[-.06562,-.48594],[-.04562,-.47594],[-.04125,-.47719],[-.02375,-.49344],[-.01,-.49906],[-.00625,-.50594],[.00875,-.50594],[.0125,-.49906],[.02875,-.49219],[.04562,-.47594],[.0525,-.47594],[.06688,-.48469],[.0875,-.48969],[.10188,-.48906],[.11875,-.48344],[.135,-.46969],[.15188,-.44219],[.205,-.42219],[.25375,-.39781],[.29188,-.37344],[.33062,-.34156],[.36375,-.30719],[.38562,-.27906],[.40188,-.25281],[.41375,-.22781],[.41938,-.20781],[.42,-.18406],[.41562,-.16406],[.40562,-.14406],[.40688,-.13844],[.41062,-.13531],[.42938,-.13156],[.44812,-.12344],[.46062,-.11469],[.47438,-.10094],[.4825,-.08906],[.4925,-.06469],[.49938,-.06094],[.49938,-.02281],[.4925,-.01906],[.4825,.00531],[.46875,.02344],[.45125,.03781],[.42875,.04781],[.42438,.05406],[.42562,.05969],[.4375,.07531],[.44438,.08844],[.45062,.10469],[.45625,.12781],[.45938,.16969],[.455,.17469],[.43375,.19031],[.4325,.19594],[.43625,.20156],[.44875,.20469],[.45375,.20781],[.46125,.21719],[.46312,.23344],[.45688,.24781],[.39938,.30781],[.3875,.31781],[.37812,.32031],[.36812,.31844],[.3575,.30969],[.35,.29781],[.34125,.29781],[.29688,.34469],[.26,.37531],[.2175,.40344],[.16375,.42969],[.16062,.43344],[.15625,.44969],[.14938,.46406],[.14438,.47094],[.12937,.48406],[.11312,.48969],[.09375,.48906],[.07187,.48219],[.04188,.46656],[.035,.47031],[.02625,.48531],[.00812,.50219],[.00625,.50656]]};var ns=class extends oi{constructor(){super();let e=new un;e.deleteAttribute("uv");let t=new yt({side:Rt}),i=new yt,r=new rr(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new qe(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Xs(e,i,6),o=new St;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new qe(e,ts(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new qe(e,ts(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new qe(e,ts(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new qe(e,ts(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new qe(e,ts(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new qe(e,ts(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ts(n){return new aa({color:0,emissive:16777215,emissiveIntensity:n})}var q1={};var ph=[],o6=0;var C1=n=>{o6=n,ph=[]};var l6="x",c6=0,R1=n=>{l6=n.replace(/[^a-z0-9]+/gi,"-"),c6=0};var I1=['500 40px "Archivo"','600 40px "Archivo"','700 40px "Archivo"','800 40px "Archivo"','italic 300 40px "Archivo"'],oc=!1,h6=()=>{if(oc)return!0;try{oc=I1.every(n=>document.fonts.check(n))}catch{oc=!1}return oc},M1=new Map,xh=n=>{let e=M1.get(n);return e||(e=new Image,e.src=n,M1.set(n,e)),e};var P1=n=>Promise.all(n.map(e=>xh(e).decode().catch(()=>{}))),D1=()=>Promise.all(I1.map(n=>document.fonts.load(n))).then(()=>{h6()});Ve.fog_fragment=`#ifdef USE_FOG
  float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor * 0.45 );
  gl_FragColor *= 1.0 - 0.82 * fogFactor;
#endif`;var tn=null,lc=0,wa=0,mh=null,L1=new ke,mn=new Hr(16777215,2.6),hc=new Hr(13226722,1.4),U1=new ir(12897496,460810,.55),uc=new St;L1.add(mn,hc,U1,uc);mn.target=uc;hc.target=uc;mn.castShadow=!0;mn.shadow.mapSize.set(2048,2048);mn.shadow.bias=-3e-4;mn.shadow.radius=12;mn.shadow.blurSamples=20;mn.shadow.normalBias=.8;var u6=new I(.75,.45,-.55).normalize(),d6={key:3.8,rim:.7,fill:.3,env:.35,envMetal:1,dir:[-.5,.75,.43],exposure:1,pcf:!0},f6=()=>({...d6,...window.__g3light??{}}),S1=new I,p6=()=>{if(tn)return tn;let n=document.createElement("canvas");tn=new Kr({canvas:n,antialias:!0,alpha:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),tn.setPixelRatio(1),tn.outputColorSpace=Et,tn.toneMapping=Gr,tn.toneMappingExposure=1,tn.localClippingEnabled=!0,tn.shadowMap.enabled=!0,tn.shadowMap.type=ar,tn.setClearColor(0,0);let e=new Pi(tn);return mh=e.fromScene(new ns,.04).texture,e.dispose(),tn},m6=(n,e)=>{n<=lc&&e<=wa||(lc=Math.max(lc,Math.ceil(n/256)*256),wa=Math.max(wa,Math.ceil(e/256)*256),tn.setSize(lc,wa,!1))},E1=new Map,di=new wt,fr=new Gt,T1=new Gt,cc=new I,x6=new I,g6=(n,e)=>{let i=e.D+8e3,r=20/e.D,s=(n.x-e.x)*r,a=(n.x+n.w-e.x)*r,o=(e.y-n.y)*r,l=(e.y-n.y-n.h)*r;di.position.set(e.x,-e.y,e.D),di.quaternion.identity(),di.updateMatrixWorld(!0),di.projectionMatrix.makePerspective(s,a,o,l,20,i),di.projectionMatrixInverse.copy(di.projectionMatrix).invert()},_6=n=>(fr.makeEmpty(),n.traverse(e=>{if(e.userData.noBounds)return;let t=e.parent;for(;t;){if(t.userData.noBounds)return;t=t.parent}let i=e;!i.isMesh||!i.visible||(i.geometry.boundingBox||i.geometry.computeBoundingBox(),T1.copy(i.geometry.boundingBox).applyMatrix4(i.matrixWorld),fr.union(T1))}),fr),F1=()=>{if(!ph.length)return;let n=p6();for(let e of ph)try{y6(n,e)}catch(t){console.error(`[v34 3d] view ${e.id} failed:`,t)}n.setScissorTest(!1)},w1={w:1,h:1},Ta=new bt(64,64,{samples:4,type:At}),A1=new it,fh=new Jt,v6=new I,b6=(n,e,t,i,r)=>{let s=t.getWorldPosition(v6).y,a=Math.max(64,Math.round(i/2)),o=Math.max(64,Math.round(r/2));(Ta.width!==a||Ta.height!==o)&&Ta.setSize(a,o);let l=[];e.traverse(d=>{d.userData.isFloor&&d.visible&&l.push(d)});for(let d of l)d.visible=!1;A1.set(1,0,0,0,0,-1,0,2*s,0,0,1,0,0,0,0,1),e.matrixAutoUpdate=!1,e.matrix.copy(A1),e.updateMatrixWorld(!0),fh.normal.set(0,-1,0),fh.constant=s+.5;let c=n.clippingPlanes;n.clippingPlanes=[fh],n.setRenderTarget(Ta),n.clear(!0,!0,!0),n.render(e,di),n.setRenderTarget(null),n.clippingPlanes=c,e.matrix.identity(),e.matrixAutoUpdate=!0,e.updateMatrixWorld(!0);for(let d of l)d.visible=!0;let h=t.material.uniforms;h.tRefl.value=Ta.texture,h.res.value.set(i,r)},y6=(n,e)=>{let t=document.querySelector(`canvas[data-g3="${e.id}"]`);if(!t)return;let i=t.getBoundingClientRect(),r=document.getElementById("root")?.getBoundingClientRect(),s=r&&r.width>0?1080/r.width:1,a=i.width*s/Math.max(1,e.rect.w),o=q1[e.id],l=o!==void 0&&a>=o-.3&&a<=o+.1?o:o!==void 0?Math.ceil((a-.05)/.25-1e-9)*.25:Math.ceil(a*20-1e-6)/20,c=Math.max(1,Math.min(2.25,l)),h=Math.max(1,Math.round(e.rect.w*c)),d=Math.max(1,Math.round(e.rect.h*c)),u=window;if(u.__v34dbg?.push({id:e.id,rw:e.rect.w,bxx:i.x,bxy:i.y,bxw:i.width,bxh:i.height,hostw:r?.width,sRaw:a,s:c,pw:h,ph:d,eye:e.eye,params:JSON.stringify(e.params),light:e.light}),u.__v34measureOnly)return;(t.width!==h||t.height!==d)&&(t.width=h,t.height=d),m6(h,d),w1.w=h,w1.h=d;let f=E1.get(e.id);if(!f){let A=new oi;A.environment=mh;let P=e.make();A.add(P.root),P.root.traverse(q=>{let v=q.material;for(let R of Array.isArray(v)?v:v?[v]:[])!R.isMeshStandardMaterial||R.userData.envBase!==void 0||(R.userData.envBase=R.envMapIntensity,R.envMap||(R.envMap=mh,R.needsUpdate=!0))}),P.fog&&(A.fog=new Qi(new xe(P.fog.color),P.fog.near,P.fog.far)),f={scene:A,model:P},E1.set(e.id,f)}f.model.update?.(e.params);let x=f6();f.model.root.traverse(A=>{let P=A.material;for(let q of Array.isArray(P)?P:P?[P]:[])q.userData?.envBase!==void 0&&(q.envMapIntensity=q.userData.envBase*(q.metalness>.5?x.envMetal:x.env))}),n.toneMappingExposure=x.exposure;let g=x.pcf?ar:Mn;n.shadowMap.type!==g&&(n.shadowMap.type=g,n.shadowMap.needsUpdate=!0),window.__g3before?.(e.id,f.model.root),f.scene.add(L1),f.model.root.updateMatrixWorld(!0),_6(f.model.root),fr.isEmpty()&&fr.setFromCenterAndSize(new I,new I(10,10,10)),fr.getCenter(cc);let m=Math.max(10,fr.getSize(x6).length()/2),p=f.model.rig??{},y=p.dir?S1.set(...p.dir).normalize():S1.set(...x.dir).normalize();uc.position.copy(cc),mn.position.copy(cc).addScaledVector(y,m*3),hc.position.copy(cc).addScaledVector(u6,m*3),mn.intensity=x.key*(p.key??1)*(e.light??1),hc.intensity=x.rim*(p.rim??1),U1.intensity=x.fill*(p.fill??1);let b=mn.shadow.camera;b.left=-m,b.right=m,b.top=m,b.bottom=-m,b.near=m*.5,b.far=m*6,b.updateProjectionMatrix(),mn.castShadow=f.model.shadows!==!1;let E=window.__v34flags;if(E&&(E.noShadow&&(mn.castShadow=!1),f.scene.traverse(A=>{A.userData.isMirror?A.visible=!E.noReflect:A.renderOrder===1.5?A.visible=!E.noBlob:A.renderOrder===2&&A.material instanceof ra&&(A.visible=!E.noCatcher)})),g6(e.rect,e.eye),!f.mirrors){let A=[];f.scene.traverse(P=>{P.userData.isMirror&&A.push(P)}),f.mirrors=A}for(let A of f.mirrors)A.visible&&A.material.uniforms.strength.value>.001&&b6(n,f.scene,A,h,d);n.setViewport(0,0,h,d),n.setScissor(0,0,h,d),n.setScissorTest(!0),n.clear(!0,!0,!0),n.render(f.scene,di);let C=t.getContext("2d");C.clearRect(0,0,h,d);let S=f.model.blur??0;C.filter=S>0?`blur(${(S*c).toFixed(2)}px)`:"none",C.drawImage(n.domElement,0,wa-d,h,d,0,0,h,d),C.filter="none",window.__g3after?.(n,e.id,f.scene,di,h,d,t,f.model.root)};var q6={crest:"assets/brand/crest.png",usflag:"assets/brand/usflag.png",espn:"assets/brand/espn.png"},gh=new Map,_h=n=>{let e=gh.get(n);if(e)return e;if(typeof Image>"u")return e=new Lt,gh.set(n,e),e;let t=xh(q6[n]);return e=new Lt(t),e.colorSpace=Et,e.anisotropy=8,e.generateMipmaps=!0,e.minFilter=Sn,t.complete&&t.naturalWidth>0?e.needsUpdate=!0:t.addEventListener("load",()=>{e.needsUpdate=!0},{once:!0}),gh.set(n,e),e},dc=(n,e={})=>{let t=_h(n);return new yt({map:t,transparent:!1,alphaTest:e.alphaTest??0,roughness:e.rough??.45,metalness:.05,emissive:new xe("#ffffff"),emissiveMap:t,emissiveIntensity:e.emissive??.18})};var M6=()=>new Nt({color:new xe("#b08a3c"),roughness:.28,metalness:1,envMapIntensity:1.3,clearcoat:.3}),vh=(n,e=600)=>{let t=new ke,i=e*.09,r=e*.018,s=dh.pts,a=new yn(s.map(([d,u])=>new ee(d*e,u*e))),o=new Vn(a,{depth:i-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r*.9,bevelSegments:4,curveSegments:6});o.translate(0,0,-(i-2*r)/2);let l=new qe(o,M6());l.castShadow=!0,l.receiveShadow=!0,t.add(l);let c=dh.aspect,h=d=>{let u=dc("crest",{alphaTest:.5,emissive:0,rough:.55});u.side=Ln,u.color.setScalar(.82);let f=new qe(new kt(e,e*c),u);return f.position.z=(d?1:-1)*(i/2+.6),d||(f.rotation.y=Math.PI),f.receiveShadow=!0,f.userData.print="the Manchester United crest (assets/brand/crest.png), printed on the badge's face",f};return t.add(h(!0),h(!1)),{group:t,size:e,depth:i}};var N1=(n,e,t)=>{let i=new ke,r=Ct(e+44,t+44,40,12,nt.black());i.add(r);let s=new qe(new kt(e,t),dc("usflag",{emissive:.3,rough:.6}));return s.position.z=20.6,s.userData.print="the US flag (assets/brand/usflag.png), the panel's lit face",i.add(s),{group:i,w:e+44,h:t+44,d:40}},O1=(n,e=180)=>{let t=new ke,i=_h("usflag").clone();i.needsUpdate=!0,i.wrapS=Ir,i.offset.x=.62;let r=new Nt({map:i,roughness:.18,metalness:0,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.1,emissive:new xe("#ffffff"),emissiveMap:i,emissiveIntensity:.12}),s=new qe(new er(e,96,64),r);return s.castShadow=!0,s.receiveShadow=!0,s.userData.print="the US flag (assets/brand/usflag.png), wrapped round the ball",t.add(s),{group:t,r:e}};var fc=(n,e,t={})=>{let i=new ke,r=t.size??64,s=r*.62,a=1.12,o=Li(t.color??ft.white,.95),l=46,c=-.21,h=new ke;i.add(h);let d=new ke;i.add(d);let u={w:0,h:0,d:l},f=x=>{d.clear(),h.clear();let g=x.map((E,C)=>en(E,"800",C===0?r:s)*a),m=Math.max(t.minW??0,Math.max(...g)+r*1.5),p=r*1.55+(x.length>1?s*1.45:0),y=Ct(m+40,22,160,8,nt.satin());y.position.y=11,h.add(y);let b=Ct(m,p,l,10,nt.black());d.position.set(0,22+p/2*Math.cos(c)+10,0),d.rotation.x=c,d.add(b),x.forEach((E,C)=>{let S=C===0?r:s,A=x.length===1?-S*.345:C===0?p/2-r*.5-r*.69:-p/2+s*.7,P=Ui(pn(E,{font:"800",size:S,depth:3,bevel:0,face:o}),a);P.position.set(0,A,l/2+.5),P.traverse(q=>{q.castShadow=!1}),Fi(P,b,{inset:5}),d.add(P)}),u={w:m+40,h:22+p+10,d:160}};return f(e),{group:i,setText:f,get size(){return u}}};var wn={rod:850,leafW:780,leafH:600},z1=-.15,S6=-2*Math.PI+.15,E6=n=>n<=0?0:n>=1?1:n*n*(3-2*n),B1=(n,e=["2005","2010","2018","2026"])=>{let t=e.map(u=>[u,"MANCHESTER UNITED"]),i=new ke;i.add(jr(1010,130,520,30,nt.black()));let r=jr(870,60,380,20,nt.graphite());r.position.y+=130,i.add(r);for(let u of[-1,1]){let f=Ct(56,wn.rod-150,70,14,nt.black());f.position.set(u*455,190+(wn.rod-150)/2-20,0),i.add(f);let x=Ct(84,84,96,20,nt.black());x.position.set(u*455,wn.rod,0),i.add(x)}let s=new qe(new Bt(15,15,930,32),nt.satin());s.rotation.z=Math.PI/2,s.position.y=wn.rod,s.castShadow=!0,i.add(s);let a=Ct(820,wn.rod-236,30,10,nt.black());a.position.set(0,190+(wn.rod-236)/2,0),i.add(a);let o=t.length-1,l=u=>30+(o-u)*20,c=u=>-(48+u*20),h=t.map(([u,f],x)=>{let g=new ke;g.position.set(0,wn.rod,0);let m=new ke;g.add(m);let p=Ct(wn.leafW,wn.leafH,18,8,nt.graphite());p.position.set(0,-wn.leafH/2-12,0),m.add(p);let y=[];for(let S of[-1,1]){let A=new qe(new Gn(26,6,12,32),nt.satin());A.rotation.y=Math.PI/2,A.position.set(S*(270+(x-2.5)*14),0,0),m.add(A),y.push(A)}let b=Li(ft.white,.86),E=Ui(pn(u,{font:"800",size:200,depth:5,bevel:0,face:b}),1.08);E.position.set(0,-wn.leafH/2-12-20,9.5);let C=Ui(pn(f,{font:"500",size:40,depth:4,bevel:0,face:b}),1.1);C.position.set(0,-wn.leafH/2-12-170,9.5),Fi(E,p,{inset:8}),Fi(C,p,{inset:8}),m.add(E,C),m.position.z=l(x),i.add(g);for(let S of y)ch(S,s,"the leaf's rings hang on the rod");return{pivot:g,leaf:m,rings:y,card:p}});for(let u of h)for(let f of h)if(u!==f)for(let x of u.rings)ch(x,f.card,"the rings run through the leaves' punched holes");let d=u=>{h.forEach((f,x)=>{let g=E6(u[x]??0);f.pivot.rotation.x=z1+(S6-z1)*g;let m=Math.max(0,Math.min(1,(g-.38)/.24));f.leaf.position.z=l(x)+(c(x)-l(x))*m*m*(3-2*m)})};return{group:i,years:e,update:u=>{let f=typeof u.year=="number"&&u.year<e.length?u.year:e.indexOf(String(u.year)),x=Math.max(0,f);d(h.map((g,m)=>m<x?1:m===x&&x<h.length-1?u.flip??0:0))}}};var is=()=>new Nt({color:new xe("#5e6066"),roughness:.3,metalness:1,envMapIntensity:1.1,clearcoat:.2}),xn=430,k1=n=>{let e=new ke,t=1300,i=1350,r=420,s=640,a=new yn;a.moveTo(-t/2,0),a.lineTo(t/2,0),a.lineTo(t/2,i),a.lineTo(-t/2,i),a.lineTo(-t/2,0);let o=new wi;o.absarc(0,s,xn,0,Math.PI*2,!0),a.holes.push(o);let l=new Vn(a,{depth:r-16,bevelEnabled:!0,bevelThickness:8,bevelSize:8,bevelOffset:-8,bevelSegments:3,curveSegments:96});l.translate(0,0,-r+8);let c=new qe(l,nt.black());c.castShadow=!0,c.receiveShadow=!0,e.add(c);let h=new qe(new Gn(xn+40,40,32,96),is());h.position.set(0,s,18),h.castShadow=!0,h.receiveShadow=!0,e.add(h);let d=new yt({color:"#1b1b1e",roughness:.6,metalness:.6,side:Rt}),u=new qe(new Bt(xn-1,xn-1,r-20,96,1,!0),d);u.rotation.x=Math.PI/2,u.position.set(0,s,-r/2-2),u.receiveShadow=!0,e.add(u);let f=new qe(new Zs(xn,96),new yt({color:"#121214",roughness:.8}));f.position.set(0,s,-r+14),e.add(f);for(let A of[-160,40,220]){let P=Ct(560,12,120,4,is());P.position.set(0,s+A,-r+90),e.add(P);for(let q=-2;q<=2;q++){let v=Ct(80,34,50,6,nt.gold());v.position.set(q*96,s+A+23.5,-r+90),e.add(v)}}let x=new ke;x.position.set(-xn-60,s,120),e.add(x);let g=new ke;g.position.set(xn+60,0,0),x.add(g);let m=new qe(new Bt(xn,xn,110,96),is());m.rotation.x=Math.PI/2,m.position.z=0,m.castShadow=!0,m.receiveShadow=!0,g.add(m);let p=new qe(new Bt(xn-60,xn-40,30,96),is());p.rotation.x=Math.PI/2,p.position.z=68,g.add(p);for(let A=0;A<12;A++){let P=A/12*Math.PI*2,q=new qe(new Bt(22,22,70,24),nt.satin());q.position.set(Math.cos(P)*(xn-22),Math.sin(P)*(xn-22),30),q.rotation.x=Math.PI/2,g.add(q)}let y=new ke;y.position.z=110,g.add(y);let b=new qe(new Bt(60,60,50,48),nt.satin());b.rotation.x=Math.PI/2,y.add(b);let E=new qe(new Gn(200,16,16,64),nt.satin());y.add(E);for(let A=0;A<4;A++){let P=new qe(new Bt(12,12,400,16),nt.satin());P.rotation.z=A*Math.PI/4*2,y.add(P);let q=new qe(new er(26,24,16),nt.satin()),v=A/4*Math.PI*2;q.position.set(Math.cos(v)*200,Math.sin(v)*200,0),y.add(q)}for(let A of[-260,260]){let P=new qe(new Bt(38,38,150,32),is());P.position.set(0,A,0),x.add(P);let q=Ct(120,60,50,10,is());q.position.set(70,A,0),x.add(q)}let C=new ke;C.position.set(0,i-120,32),e.add(C);let S=Sa(["VAULT"],{size:76,color:ft.white});return C.add(S.group),{group:e,size:{w:t,h:i,d:r},mouth:new I(0,s,0),label:A=>(C.clear(),S=Sa(A.split(" | "),{size:76,color:ft.white}),C.add(S.group),S),get plate(){return S},update:A=>{y.rotation.z=-(A.wheel??0)*Math.PI*2,x.rotation.y=-Math.max(0,Math.min(1,A.door))*(105*Math.PI/180)}}};var pc=320,ss=150,Ni=70,rs=null,H1=()=>{if(rs)return rs;if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=512,n.height=240;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,512,240);t.addColorStop(0,"#c9b8c9"),t.addColorStop(.5,"#b5a6c2"),t.addColorStop(1,"#c7bcaf"),e.fillStyle=t,e.fillRect(0,0,512,240),e.strokeStyle="rgba(70,40,80,0.35)",e.lineWidth=1.2;for(let i=0;i<26;i++){e.beginPath();for(let r=0;r<=512;r+=8)e.lineTo(r,120+Math.sin(r/22+i*.5)*(40+i*2));e.stroke()}return e.fillStyle="rgba(60,30,70,0.85)",e.font="800 92px Archivo, sans-serif",e.fillText("\xA350",330,110),e.font="600 22px Archivo, sans-serif",e.fillText("FIFTY POUNDS",26,214),e.strokeStyle="rgba(60,30,70,0.6)",e.lineWidth=6,e.strokeRect(8,8,496,224),e.beginPath(),e.arc(130,110,62,0,Math.PI*2),e.fillStyle="rgba(255,255,255,0.35)",e.fill(),rs=new Or(n),rs.colorSpace=Et,rs.anisotropy=8,rs},T6=n=>{let e=new ke,t=new yt({map:H1(),color:H1()?"#ffffff":"#c3b4c4",roughness:.8}),i=new yt({color:"#d9d0cf",roughness:.9}),r=new qe(new un(pc,Ni,ss),[i,i,t,i,i,i]);r.position.y=Ni/2,r.castShadow=!0,r.receiveShadow=!0,e.add(r);for(let o=1;o<10;o++){let l=new qe(new un(pc+.5,.8,ss+.5),new yt({color:"#b9aead"}));l.position.y=o*Ni/10,e.add(l)}let a=Ct(92,Ni+4,ss+4,2,nt.gold());if(a.position.y=Ni/2,e.add(a),n){let o=Math.min(26,(ss-20)/Math.max(1,en(n,"800",26)*1.08)*26),l=Ui(pn(n,{font:"800",size:o,depth:1.5,bevel:0,face:Li(ft.cream,.95)}),1.08);l.rotation.set(-Math.PI/2,0,Math.PI/2),l.position.set(0,Ni+3.2,0),Fi(l,a,{inset:2}),e.add(l)}return e},V1=(n,e,t={})=>{let i=new ke,r=t.bricks??1,s=t.cols??1,a=t.rows??1;for(let o=0;o<r;o++)for(let l=0;l<s;l++)for(let c=0;c<a;c++){let h=T6(e);h.position.set((l-(s-1)/2)*(pc+6),o*(Ni+1),(c-(a-1)/2)*(ss+6)),i.add(h)}return{group:i,size:{w:s*(pc+6),h:r*(Ni+1),d:a*(ss+6)}}};var as={r:60,t:14},w6=null,A6=()=>w6??(w6={body:new Bt(as.r,as.r,as.t,48),rim:new Gn(as.r-5,3.2,8,48),mat:nt.gold()}),G1=n=>{let e=A6(),t=new ke,i=new qe(e.body,e.mat);i.castShadow=!0,i.receiveShadow=!0,t.add(i);for(let r of[1,-1]){let s=new qe(e.rim,e.mat);s.rotation.x=Math.PI/2,s.position.y=r*as.t/2,t.add(s);let a=pn("\xA3",{font:"800",size:64,depth:3,bevel:0,face:e.mat,align:"centre"});a.rotation.x=r>0?-Math.PI/2:Math.PI/2,a.position.set(0,r*as.t/2,r>0?22:-22),es(a,"the \xA3 embossed in the coin's face (it is part of the coin)"),t.add(a)}return{group:t}};var pr=(n,e,t,i,r={})=>{let s=Ea(n),a=Math.max(s+12,nc(n,0)+6),o=[0,330,0];return{id:n,label:e,enter:s,stage:r.stage??"dark",shots:({from:l,to:c})=>[ys(l,[-900,420,2500],[0,360,0],{fov:42,focus:o,why:"enter"}),kc(l+1,Math.max(30,c-l-2),[-520,470,1750],[0,380,0],{fov:42,ease:Hi,why:"slow push-in"})],lights:()=>r.stage==="light"?h1(o):lh(o),blur:l=>hh(l,a).fast,cues:()=>[{kind:"hit",s:"thud",at:a,vol:.4,why:`${t}: the block lands`}],build:()=>{let l=new ke,c=new ke;c.add(jr(760,520,560,34,nt.black()));let h=Sa([t],{size:58,color:ft.white});h.group.position.set(0,300,280+h.d/2),c.add(h.group);let d=p1({size:90,color:r.color??ft.money});es(d.group,"a placeholder figure standing in front of its block"),d.group.position.set(0,0,440);let u=m1({r:1100});return l.add(c,d.group,u.mesh),{group:l,update:f=>{let x=hh(f,a);c.visible=x.on,c.position.y=x.y,h.setLit((f-a)/10),d.group.visible=f>=a,d.set(f1(d1(f,a,a+26,i*.2,i),"\xA3")),u.update(f,a+26)}}}}},Kg=pr("hook","1 Set A: the crane plinth (placeholder)","THE TAKEOVER",79e7),Qg=pr("sides","3 Set B: two sides (placeholder)","2005",54e7),W1=pr("bonds","4 Set C: the bonds (placeholder, light stage)","THE BONDS",504e6,{stage:"light"}),jg=pr("money","5 Set D: where the money came from (placeholder)","THE MONEY",1e9),X1=pr("board","7 Set E: the scoreboard (placeholder)","BORROWINGS",689e6,{color:ft.red}),Y1=pr("fair","8 Set F: to be fair (placeholder)","TO BE FAIR",6),$1=pr("verdict","9 Set A again: the bookend (placeholder)","THE BILL",79e7,{color:ft.red}),yh=(n,e,t,i,r)=>{let s=Ea(n);return{id:n,label:e,enter:s,stage:"dark",shots:({from:a,to:o})=>[ys(a,i[0],i[1],{fov:42,focus:t,why:"enter"}),kc(a+1,Math.max(30,o-a-2),i[2],i[3],{fov:42,ease:Hi,why:"slow push-in"})],lights:()=>lh(t),build:()=>{let a=new ke,o=r(a);return{group:a,update:l=>o?.(l)}}}},bh=(n,e,t,i)=>{let r=jr(t,i,t*.8,26,nt.black());return r.position.x=e,n.add(r),r},Z1=yh("hook","1 Set A: the crane plinth (showcase placeholder)",[0,520,0],[[-700,760,2200],[0,620,0],[-420,700,1650],[0,640,0]],n=>{bh(n,0,640,300);let e=vh("hook",520);e.group.position.set(0,570,0),n.add(e.group);let t=Ct(1500,90,120,16,nt.black());t.position.set(0,1380,-60),n.add(t);let i=N1("hook",380,200);i.group.position.set(-420,1380,10),n.add(i.group);let r=fc("hook",["THE GLAZER FAMILY","TAMPA, FLORIDA"],{size:52});return r.group.position.set(0,0,420),n.add(r.group),s=>{e.group.rotation.y=Math.sin(s/40)*.25}}),J1=yh("sides","3 Set B: two sides (showcase placeholder)",[0,420,0],[[0,650,2600],[0,520,0],[0,600,2e3],[0,520,0]],n=>{bh(n,-520,420,260),bh(n,520,420,260);let e=O1("sides",170);e.group.position.set(-520,430,0),n.add(e.group);let t=vh("sides",380);t.group.position.set(520,460,0),n.add(t.group);let i=fc("sides1",["THE GLAZER FAMILY","TAMPA, FLORIDA"],{size:34});i.group.position.set(-520,0,300),n.add(i.group);let r=fc("sides2",["MANCHESTER UNITED","OLD TRAFFORD"],{size:34});r.group.position.set(520,0,300),n.add(r.group);let s=B1("sides",["2005","2010"]);return s.group.scale.setScalar(.55),s.group.position.set(0,0,-500),n.add(s.group),a=>{e.group.rotation.y=a/60,s.update({year:0,flip:0})}}),K1=yh("money","5 Set D: the money (showcase placeholder)",[0,640,0],[[-900,800,2500],[0,640,0],[-500,760,1900],[0,660,0]],n=>{let e=k1("money");e.label("LOANS"),n.add(e.group);let t=V1("money","LOANS",{bricks:3,cols:2});t.group.position.set(820,0,420),n.add(t.group);let i=[0,1,2,3,4].map(r=>{let s=G1("money"+r);return s.group.position.set(420+r%2*20,7+r*15,700),n.add(s.group),s});return r=>{e.update({door:Math.min(1,Math.max(0,r%120/60)),wheel:Math.min(1,r%120/30)})}});var gn=[Z1,b1,J1,W1,K1,y1,X1,Y1,$1],Wt=gn.map((n,e)=>({id:n.id,from:e===0?0:n.enter,to:e+1<gn.length?gn[e+1].enter:gs}));for(let n=1;n<Wt.length;n++)if(Wt[n].from<=Wt[n-1].from)throw new Error(`038 world: ${Wt[n].id} enters at f${Wt[n].from}, not after ${Wt[n-1].id}`);var Q1=gn.map((n,e)=>{let t=Wt[e],i=n.shots({from:t.from,to:t.to});if(!i.length||Math.round(i[0].at)!==t.from)throw new Error(`038 world: ${n.id}'s first camera key must start on its enter frame f${t.from} (it starts at f${i[0]?.at})`);if(e>0&&!i[0].cut)throw new Error(`038 world: ${n.id} must open on a hard cut (cut(...) or whipIn(...)): places are never joined by a travel (R23)`);if(i.some(s=>(s.dip??0)>0))throw new Error(`038 world: ${n.id} dips to black: there is never a black frame between places (R23)`);let r=i[i.length-1];if(r.at+r.dur>t.to+1e-6&&e+1<gn.length)throw new Error(`038 world: ${n.id}'s last camera key ends at f${r.at+r.dur}, after ${gn[e+1].id} enters (f${t.to})`);return i}),Aa=du("038",Q1.flat()),qh=n=>{let e=0;for(let t=0;t<Wt.length;t++)n>=Wt[t].from&&(e=t);return e},C6=Q1.flatMap((n,e)=>n.filter(t=>t.whoosh&&!t.cut).map(t=>({id:gn[e].id,mid:t.at+t.dur/2,end:t.at+t.dur,vol:t.whoosh,why:t.why??"move"}))),__=hu(Wt.map(n=>({id:n.id,from:n.from,to:n.to})),C6,gn.flatMap((n,e)=>(n.cues?.({from:Wt[e].from,to:Wt[e].to})??[]).map(t=>({...t,id:n.id})))).cues;var j1=[{a:0,b:4.83,cue:0,objWords:!1,lines:[[{t:"The",bold:!1,a:0},{t:"Glazers",bold:!1,a:.2},{t:"bought",bold:!1,a:.6},{t:"Manchester",bold:!1,a:.86},{t:"United",bold:!1,a:1.38},{t:"for",bold:!1,a:1.82},{t:"\xA3790",bold:!1,a:2.16},{t:"million.",bold:!1,a:3.48}]]},{a:4.83,b:6.9,cue:1,objWords:!1,lines:[[{t:"More",bold:!1,a:4.83},{t:"than",bold:!1,a:4.96},{t:"\xA3500",bold:!1,a:5.12},{t:"million",bold:!1,a:5.56},{t:"was",bold:!1,a:5.96},{t:"borrowed.",bold:!1,a:6.26}]]},{a:6.9,b:10.55,cue:2,objWords:!1,lines:[[{t:"And",bold:!1,a:6.9},{t:"within",bold:!1,a:6.98},{t:"a",bold:!1,a:7.18},{t:"year,",bold:!1,a:7.38},{t:"most",bold:!1,a:7.96},{t:"of",bold:!1,a:8.16},{t:"that",bold:!1,a:8.38},{t:"debt",bold:!1,a:8.54},{t:"was",bold:!1,a:8.76},{t:"on",bold:!1,a:8.98},{t:"United's",bold:!1,a:9.14},{t:"own",bold:!1,a:9.66},{t:"books.",bold:!1,a:9.88}]]},{a:10.55,b:11.83,cue:3,objWords:!1,lines:[[{t:"Let",bold:!1,a:10.55},{t:"me",bold:!1,a:10.68},{t:"explain.",bold:!1,a:10.78}]]},{a:11.83,b:15.8,cue:4,objWords:!1,lines:[[{t:"The",bold:!1,a:11.83},{t:"American",bold:!1,a:11.9},{t:"family",bold:!1,a:12.2},{t:"took",bold:!1,a:12.62},{t:"over",bold:!1,a:12.9},{t:"in",bold:!1,a:13.2},{t:"2005,",bold:!1,a:13.4},{t:"mostly",bold:!1,a:14.62},{t:"with",bold:!1,a:14.86},{t:"loans.",bold:!1,a:15.16}]]},{a:15.8,b:22.23,cue:5,objWords:!1,lines:[[{t:"Nearly",bold:!1,a:15.8},{t:"five",bold:!1,a:15.96},{t:"years",bold:!1,a:16.42},{t:"later,",bold:!1,a:16.68},{t:"United",bold:!1,a:17.31},{t:"itself",bold:!1,a:17.64},{t:"sold",bold:!1,a:18.18},{t:"\xA3500",bold:!1,a:18.56},{t:"million",bold:!1,a:19.18},{t:"of",bold:!1,a:20.08},{t:"bonds",bold:!1,a:20.32},{t:"to",bold:!1,a:20.64},{t:"pay",bold:!1,a:20.92},{t:"off",bold:!1,a:21.12},{t:"the",bold:!1,a:21.3},{t:"bank",bold:!1,a:21.46},{t:"loans.",bold:!1,a:21.66}]]},{a:22.23,b:26.429,cue:6,objWords:!1,lines:[[{t:"So",bold:!1,a:22.23},{t:"ticket,",bold:!1,a:22.8},{t:"shirt",bold:!1,a:23.35},{t:"and",bold:!1,a:23.78},{t:"TV",bold:!1,a:23.98},{t:"money",bold:!1,a:24.22},{t:"went",bold:!1,a:24.58},{t:"on",bold:!1,a:24.88},{t:"paying",bold:!1,a:25.12},{t:"for",bold:!1,a:25.38},{t:"the",bold:!1,a:25.64},{t:"takeover.",bold:!1,a:25.78}]]},{a:26.429,b:31.5,cue:7,objWords:!1,lines:[[{t:"ESPN",bold:!1,a:26.429},{t:"says",bold:!1,a:26.84},{t:"that",bold:!1,a:27.36},{t:"by",bold:!1,a:27.62},{t:"2018,",bold:!1,a:27.78},{t:"the",bold:!1,a:28.8},{t:"cost",bold:!1,a:28.9},{t:"had",bold:!1,a:29.14},{t:"passed",bold:!1,a:29.36},{t:"\xA31",bold:!1,a:29.7},{t:"billion.",bold:!1,a:30.397}]]},{a:31.5,b:33.22,cue:8,objWords:!1,lines:[[{t:"And",bold:!1,a:31.5},{t:"here's",bold:!1,a:31.54},{t:"the",bold:!1,a:31.76},{t:"worst",bold:!1,a:31.88},{t:"part.",bold:!1,a:32.08}]]},{a:33.22,b:38.158,cue:9,objWords:!1,lines:[[{t:"21",bold:!1,a:33.22},{t:"years",bold:!1,a:33.48},{t:"later,",bold:!1,a:33.92},{t:"United's",bold:!1,a:34.56},{t:"borrowings",bold:!1,a:35.078},{t:"stand",bold:!1,a:35.34},{t:"at",bold:!1,a:35.82},{t:"about",bold:!1,a:36.02},{t:"\xA3690",bold:!1,a:36.24},{t:"million.",bold:!1,a:37.36}]]},{a:38.158,b:42.78,cue:10,objWords:!1,lines:[[{t:"Last",bold:!1,a:38.158},{t:"season,",bold:!1,a:38.38},{t:"net",bold:!1,a:39.11},{t:"finance",bold:!1,a:39.3},{t:"costs",bold:!1,a:39.8},{t:"alone",bold:!1,a:40.16},{t:"were",bold:!1,a:40.58},{t:"\xA369.6",bold:!1,a:40.92},{t:"million.",bold:!1,a:42.28}]]},{a:42.78,b:45.325,cue:11,objWords:!1,lines:[[{t:"About",bold:!1,a:42.78},{t:"\xA3190,000",bold:!1,a:42.96},{t:"a",bold:!1,a:44.6},{t:"day.",bold:!1,a:44.82}]]},{a:45.325,b:50.019,cue:12,objWords:!1,lines:[[{t:"To",bold:!1,a:45.325},{t:"be",bold:!1,a:45.4},{t:"fair,",bold:!1,a:45.52},{t:"under",bold:!1,a:46.17},{t:"the",bold:!1,a:46.3},{t:"Glazers,",bold:!1,a:46.46},{t:"United",bold:!1,a:47.12},{t:"won",bold:!1,a:47.3},{t:"five",bold:!1,a:47.62},{t:"league",bold:!1,a:48.02},{t:"titles",bold:!1,a:48.3},{t:"and",bold:!1,a:48.68},{t:"the",bold:!1,a:49},{t:"Champions",bold:!1,a:49.18},{t:"League.",bold:!1,a:49.44}]]},{a:50.019,b:52.87,cue:13,objWords:!1,lines:[[{t:"But",bold:!1,a:50.019},{t:"\xA3790",bold:!1,a:50.12},{t:"million",bold:!1,a:51.34},{t:"was",bold:!1,a:51.76},{t:"the",bold:!1,a:52.08},{t:"price.",bold:!1,a:52.26}]]},{a:52.87,b:54.98,cue:14,objWords:!1,lines:[[{t:"United",bold:!1,a:52.87},{t:"has",bold:!1,a:53.18},{t:"been",bold:!1,a:53.42},{t:"paying",bold:!1,a:53.6},{t:"the",bold:!1,a:53.86},{t:"bill",bold:!1,a:54.08},{t:"ever",bold:!1,a:54.477},{t:"since.",bold:!1,a:54.62}]]},{a:54.98,b:56.8,cue:15,objWords:!1,lines:[[{t:"Our",bold:!1,a:54.98},{t:"rating:",bold:!1,a:55.44},{t:"inflated.",bold:!1,a:55.97}]]},{a:56.8,b:58.02,cue:16,objWords:!1,lines:[[{t:"Send",bold:!1,a:56.8},{t:"us",bold:!1,a:56.92},{t:"who",bold:!1,a:57.08},{t:"to",bold:!1,a:57.28},{t:"audit",bold:!1,a:57.42},{t:"next.",bold:!1,a:57.6}]]}];var ef='"Archivo", sans-serif';var tf=()=>(n,e)=>({}),nf=({children:n})=>Qn(Kn,{children:n});var mc=30,Mh=275,R6=500,I6="#e9e2e1",P6=2,D6=1,Sh=new Set(["explain","worst"]),R_={y0:Mh-10,y1:Mh+mc*1.3},L6=/[,.:;!?]$/,U6=n=>{let e=[],t=[];return n.forEach((i,r)=>{t.push(i);let s=n.length-1-r;(s===0||(t.length>=4||t.length>=2&&L6.test(i.t))&&s!==1)&&(e.push(t),t=[])}),e},Oi=j1.flatMap(n=>{let e=Cn[n.cue].scene;return U6(n.lines.flat()).map(t=>({text:t.map(i=>i.t).join(" "),a:t[0].a,cue:n.cue,scene:e}))}),rf=n=>Di(n.a)-D6;var F6=(n,e)=>{for(let t=Oi.length-1;t>=0;t--)if(Oi[t].scene===n&&e>=rf(Oi[t]))return t;return-1},sf=({scene:n,f:e})=>{let t=tf();if(Sh.has(n))return null;let i=F6(n,e);if(i<0)return null;let r=Hi(zn((e-rf(Oi[i]))/P6));return Qn(nf,{s:n,g:"caption",children:Qn("div",{"data-cap":"1",style:{position:"absolute",inset:0,pointerEvents:"none"},children:Qn("div",{...t("cap.0","cap"),style:{position:"absolute",left:90,width:860,top:Mh,height:mc*1.25,lineHeight:`${mc*1.25}px`,textAlign:"center",whiteSpace:"nowrap",color:I6,fontFamily:ef,fontSize:mc,fontWeight:R6,letterSpacing:"0.005em",opacity:r<.999?r:void 0,textShadow:"0 0 2px rgba(0,0,0,0.95), 0 0 5px rgba(0,0,0,0.85), 0 1px 12px rgba(0,0,0,0.7), 0 0 26px rgba(0,0,0,0.45)",transform:"perspective(1200px) rotateX(0.15deg)"},children:Oi[i].text})})})};var Eh="world",af=()=>[{id:Eh,from:0,to:gs,track:0,z:1,label:"The world: one 3-D scene, one camera"},{id:"captions",from:0,to:gs,track:1,z:30,label:"Captions"},...gn.map((n,e)=>({id:n.id,from:Wt[e].from,to:Wt[e].to,track:2+e,z:2,label:n.label}))],N6=n=>{let e=Oi[0].scene;for(let t of Oi)n>=Di(t.a)-2&&(e=t.scene);return e},of=({id:n,f:e})=>{if(n!=="captions")return null;let t=N6(e);return Sh.has(t)?null:Qn(sf,{scene:t,f:e,ground:"dark",align:()=>"centre"})};var os={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},O6=new sr(-1,1,1,-1,0,1),Th=class extends Ft{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},z6=new Th,$n=class{constructor(e){this._mesh=new qe(z6,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,O6)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ls=class extends Xt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Nn.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $n(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ca=class extends Xt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},xc=class extends Xt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var gc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:At}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ls(os),this.copyPass.material.blending=Qt,this.clock=new ua}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(a instanceof Ca?i=!0:a instanceof xc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _c=class extends Xt{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var Ra={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var vc=class extends Xt{constructor(e,t,i){super(),this.scene=e,this.camera=t;let r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new bt(1,1,{minFilter:Ut,magFilter:Ut,type:At}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new kr,this._materialDepth.depthPacking=Jl,this._materialDepth.blending=Qt;let o=Nn.clone(Ra.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=r,o.aspect.value=t.aspect,o.aperture.value=s,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new ct({defines:Object.assign({},Ra.defines),uniforms:o,vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader}),this.uniforms=o,this._fsQuad=new $n(this.materialBokeh),this._oldClearColor=new xe}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var lf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var cs=class n extends Xt{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bt(s,a,{type:At}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new bt(s,a,{type:At});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new bt(s,a,{type:At});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}let o=lf;this.highPassUniforms=Nn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ee(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Nn.clone(os.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:os.vertexShader,fragmentShader:os.fragmentShader,blending:Xn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new hn,this._fsQuad=new $n(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ee(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};cs.BlurDirectionX=new ee(1,0);cs.BlurDirectionY=new ee(0,1);var Ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var bc=class extends Xt{constructor(){super(),this.uniforms=Nn.clone(Ia.uniforms),this.material=new sa({name:Ia.name,uniforms:this.uniforms,vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader}),this._fsQuad=new $n(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===al?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var mi=1080,xi=1920,Qe={dark:{base:"#0c0b0d",floor:"#121113",wall:"#1a191b",self:.06,fogNear:3600,fogFar:14e3},light:{base:"#8f8e8c",floor:"#a2a19e",wall:"#989794",self:.42,fogNear:5e3,fogFar:16e3},card:{base:"#000000",floor:"#000000",wall:"#000000",self:0,fogNear:2e4,fogFar:4e4},darkFill:.35,darkBack:.6,darkKey:1.25,floorRough:.9,floorSpec:.22,env:.6,envMetal:1,hemiSky:"#e9e6e7",hemiGround:"#4a4849",bloom:.34,bloomRadius:.5,bloomAt:.92,vignette:.3,grain:0,exposure:1,aperture:22e-6,maxBlur:.012,blurAt:.012,blurN:8,shutter:.45,mirrorLod:5.6},_n=null,pi,La,Ua,Mc,Pa=()=>Mc.uniforms,xt,nn,cf,Ah,Fa,hf,uf,df,us,Sc,Ec,hs,Da,Zn,Ch,Rh=new Map,ff=new Set,fi=null,B6={uniforms:{tDiffuse:{value:null},vig:{value:.3},grain:{value:0},seed:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},k6=()=>new ct({name:"WorldFloorPool",transparent:!0,depthWrite:!1,uniforms:{tRefl:{value:null},res:{value:new ee(mi,xi)},strength:{value:.08},fadeC:{value:new ee},fadeR:{value:2600},eye:{value:new I},lod:{value:Qe.mirrorLod}},vertexShader:"varying vec3 vWorld; void main() { vWorld = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0); }",fragmentShader:`
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
    }`,blending:Ko,blendEquation:kn,blendSrc:fa,blendDst:fa}),yc=n=>{let e=new ha(16777215,0,0,.6,.7,0);return e.castShadow=n,n&&(e.shadow.mapSize.set(2048,2048),e.shadow.bias=-6e-4,e.shadow.normalBias=1.2,e.shadow.radius=9,e.shadow.blurSamples=16,e.shadow.camera.near=200,e.shadow.camera.far=9e3),xt.add(e,e.target),e},H6=()=>{let n=document.createElement("canvas");_n=new Kr({canvas:n,antialias:!1,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),_n.setPixelRatio(1),_n.setSize(mi,xi,!1),_n.outputColorSpace=Et,_n.toneMapping=Vr,_n.toneMappingExposure=Qe.exposure,_n.shadowMap.enabled=!0,_n.shadowMap.type=ar,_n.localClippingEnabled=!0,Ve.fog_fragment=`#ifdef USE_FOG
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif`;let e=new Pi(_n);cf=e.fromScene(new ns,.04).texture,e.dispose(),xt=new oi,xt.background=new xe(Qe.dark.base),xt.fog=new Qi(new xe(Qe.dark.base),Qe.dark.fogNear,Qe.dark.fogFar),nn=new wt(45,mi/xi,20,4e4),Ah=new ir(new xe(Qe.hemiSky),new xe(Qe.hemiGround),.55),xt.add(Ah),Fa=yc(!0),hf=yc(!1),uf=yc(!1),df=yc(!1),us=new rr(16777215,0,0,0),xt.add(us),Sc=new Nt({color:new xe(Qe.dark.floor),roughness:Qe.floorRough,metalness:0,envMapIntensity:0,specularIntensity:Qe.floorSpec}),hs=new qe(new kt(6e4,6e4),Sc),hs.rotation.x=-Math.PI/2,hs.receiveShadow=!0,hs.userData.isFloor=!0,Ec=new yt({color:new xe(Qe.dark.wall),roughness:1,metalness:0,envMapIntensity:0}),Da=new qe(new kt(6e4,16e3),Ec),Da.position.set(0,8e3,Ma),Da.userData.isFloor=!0,Zn=new qe(new kt(6e4,6e4),k6()),Zn.rotation.x=-Math.PI/2,Zn.position.set(0,.6,0),Zn.userData.isFloor=!0,Zn.renderOrder=1,xt.add(hs,Da,Zn),Ch=new bt(mi/2,xi/2,{type:At,generateMipmaps:!0,minFilter:Sn}),pi=new gc(_n,new bt(mi,xi,{type:At,samples:4})),pi.setPixelRatio(1),pi.setSize(mi,xi),pi.addPass(new _c(xt,nn)),Mc=new vc(xt,nn,{focus:2e3,aperture:Qe.aperture,maxblur:Qe.maxBlur}),pi.addPass(Mc),Ua=new cs(new ee(mi/2,xi/2),Qe.bloom,Qe.bloomRadius,Qe.bloomAt),pi.addPass(Ua),La=new ls(B6),pi.addPass(La),pi.addPass(new bc)},V6=n=>{let e=Rh.get(n);return e||(e=gn[n].build(),c1(e.group),e.group.traverse(t=>{let i=t;if(i.isMesh)for(let r of Array.isArray(i.material)?i.material:[i.material])r.isMeshStandardMaterial&&(r.userData.envBase===void 0&&(r.userData.envBase=r.envMapIntensity),r.envMap||(r.envMap=cf,r.needsUpdate=!0),ff.add(r))}),xt.add(e.group),Rh.set(n,e)),e},G6=new I,qc=(n,e)=>{if(!e){n.intensity=0;return}n.position.set(...e.pos),n.target.position.set(...e.at),n.target.updateMatrixWorld(),n.intensity=e.i,n.color.set(e.color??"#ffffff"),n.angle=e.angle??.6,n.penumbra=e.soft??.7},W6=n=>{let e=Qe[n];xt.background.set(e.base);let t=xt.fog;t.color.set(e.base),t.near=e.fogNear,t.far=e.fogFar,Sc.color.set(e.floor),Ec.color.set(e.wall),Sc.emissive.set(e.base).multiplyScalar(e.self),Ec.emissive.set(e.base).multiplyScalar(e.self),hs.visible=Da.visible=Zn.visible=n!=="card"},X6=(n,e)=>{let t=e==="dark";Ah.intensity=(n.amb??(e==="card"?0:.2))*(t?Qe.darkFill:1),qc(Fa,n.key&&t?{...n.key,i:n.key.i*Qe.darkKey}:n.key),qc(hf,n.rim),qc(uf,n.aux),qc(df,n.back&&t?{...n.back,i:n.back.i*Qe.darkBack}:n.back),n.accent?(us.position.set(...n.accent.pos),us.color.set(n.accent.color),us.intensity=n.accent.i):us.intensity=0;let i=Zn.material.uniforms;i.fadeC.value.set(n.focus?.[0]??0,n.focus?.[1]??0),i.fadeR.value=n.reach??2600,i.strength.value=e==="card"?0:n.reflect??.08;let r=n.env??1;for(let s of ff)s.envMapIntensity=s.userData.envBase*(s.metalness>.5?Qe.envMetal:Qe.env)*r},Y6=new it().set(1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1),$6=[new Jt(new I(0,-1,0),.5)],Z6=n=>{let e=Zn.material.uniforms;if(e.strength.value<=.001||!Zn.visible)return;let t=[];xt.traverse(a=>{a.userData.isFloor&&a.visible&&(t.push(a),a.visible=!1)});let i=Fa.castShadow;Fa.castShadow=!1;let r=xt.background;xt.background=null,xt.matrixAutoUpdate=!1,xt.matrix.copy(Y6),xt.updateMatrixWorld(!0);let s=n.clippingPlanes;n.clippingPlanes=$6,n.setRenderTarget(Ch),n.setClearColor(0,1),n.clear(!0,!0,!0),n.render(xt,nn),n.setRenderTarget(null),n.clippingPlanes=s,xt.matrix.identity(),xt.matrixAutoUpdate=!0,xt.updateMatrixWorld(!0),xt.background=r,Fa.castShadow=i;for(let a of t)a.visible=!0;e.tRefl.value=Ch.texture,e.eye.value.copy(nn.position)},J6=n=>{let e=eo(Aa,n);nn.position.set(...e.pos),nn.up.set(0,1,0),nn.lookAt(G6.set(...e.look)),e.roll&&nn.rotateZ(e.roll*Math.PI/180),nn.fov=e.fov,nn.updateProjectionMatrix(),nn.updateMatrixWorld(!0);let t=Vi(e.focus,e.pos),i=Vi(e.look,e.pos),r=Math.max(1,xr(i));Pa().focus.value=Math.max(50,(t[0]*i[0]+t[1]*i[1]+t[2]*i[2])/r)},wh={ms:0,samples:1,place:""},pf=(n,e)=>{let t=performance.now();_n||H6();let i=_n;fi||(fi=document.createElement("canvas"),fi.width=mi,fi.height=xi,fi.dataset.world="1",fi.style.cssText="position:absolute;left:0;top:0;width:1080px;height:1920px;display:block;background:#000"),fi.parentElement!==n&&n.appendChild(fi);let r=qh(e);for(let[f,x]of Rh)f!==r&&(x.group.visible=!1);let s=gn[r],a=V6(r);a.group.visible=!0;let o=s.stageAt?.(e)??s.stage??"dark";W6(o),X6(s.lights(e),o),wh.place=s.id;let l=window.__world??{};Ua.strength=l.bloom??Qe.bloom,Ua.radius=l.bloomRadius??Qe.bloomRadius,Ua.threshold=l.bloomAt??Qe.bloomAt,La.uniforms.vig.value=o==="card"?0:l.vignette??Qe.vignette,La.uniforms.grain.value=l.grain??Qe.grain,La.uniforms.seed.value=e%97+1,Mc.enabled=!l.noDof&&o!=="card",Pa().aperture.value=l.aperture??Qe.aperture,Pa().maxblur.value=l.maxBlur??Qe.maxBlur,Pa().nearClip.value=nn.near,Pa().farClip.value=nn.far,i.toneMappingExposure=l.exposure??Qe.exposure;let c=Aa.some(f=>f.cut&&Math.abs(f.at-e)<.5),d=!l.noBlur&&!c&&(fu(Aa,e)>Qe.blurAt||!!s.blur?.(e))?Qe.blurN:1,u=fi.getContext("2d");for(let f=0;f<d;f++){let x=d===1?e:e+((f+.5)/d-.5)*Qe.shutter;(qh(x)!==r||Aa.some(g=>g.cut&&g.at>Math.min(x,e)&&g.at<=Math.max(x,e)))&&(x=e),a.update(x),J6(x),xt.updateMatrixWorld(!0),Z6(i),i.shadowMap.needsUpdate=!0,pi.render(),u.globalAlpha=1/(f+1),u.drawImage(i.domElement,0,0,mi,xi)}u.globalAlpha=1,wh.ms=performance.now()-t,wh.samples=d};var K6=["assets/brand/crest.png","assets/brand/usflag.png","assets/brand/espn.png"],xf=30,fs="",Q6=new Map(af().map(n=>[n.id,n])),ps=n=>{let e=Math.max(0,Math.round(n*xf)),t=Array.from(document.querySelectorAll("[data-film-layer]")),i=`${e}|${t.length}`;if(i!==fs){fs=i,tu(e),C1(e);for(let r of t){let s=r.dataset.filmLayer,a=Q6.get(s);if(R1(s),s===Eh){try{pf(r,e)}catch(o){console.error("[world] frame",e,"failed:",o)}continue}jh(!a||e>=a.from&&e<a.to?$a(of,{id:s,f:e}):null,r)}F1()}};window.addEventListener("hf-seek",n=>ps(n.detail.time));window.__film={draw:n=>{fs="",ps(n)},frame:()=>Math.round((window.__hfThreeTime??0)*xf)};var mf=()=>ps(window.__hfThreeTime??0);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",mf):mf();var ds=window.__hf??(window.__hf={});ds.buildReady??(ds.buildReady={});ds.buildReady["film-fonts"]=Promise.all([D1(),document.fonts.load('italic 300 60px "Archivo"'),document.fonts.load('800 60px "Archivo"'),document.fonts.load('700 40px "Archivo"'),document.fonts.load('600 40px "Archivo"'),document.fonts.load('500 40px "Archivo"')]).then(()=>{fs="",ps(window.__hfThreeTime??0)});ds.buildReady["film-page-photos"]=P1(K6).then(()=>{fs="",ps(window.__hfThreeTime??0)});if(au){let n=new Image;n.src=`assets/${ou}`,ds.buildReady["film-photo"]=n.decode().catch(()=>{}).then(()=>{fs="",ps(window.__hfThreeTime??0)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
