var Mf=Object.defineProperty,xf=(r,e,t)=>e in r?Mf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,X0=(r,e,t)=>(xf(r,typeof e!="symbol"?e+"":e,t),t);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const me="152",e7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,Yn=1,Ef=2,Hr=1,Af=2,H2=3,l1=0,w9=1,S2=2,o1=0,R7=1,Zn=2,qn=3,jn=4,bf=5,E7=100,wf=101,Tf=102,Qn=103,Kn=104,Rf=200,Pf=201,Cf=202,Lf=203,Wr=204,kr=205,If=206,Uf=207,Df=208,Nf=209,Ff=210,Of=0,Bf=1,zf=2,ne=3,Gf=4,Hf=5,Wf=6,kf=7,ge=0,Vf=1,Xf=2,W2=0,Yf=1,Zf=2,qf=3,jf=4,Qf=5,Vr=300,U7=301,D7=302,ie=303,re=304,n6=306,se=1e3,d2=1001,oe=1002,A9=1003,Jn=1004,g8=1005,n2=1006,Kf=1007,A4=1008,D1=1009,Jf=1010,$f=1011,Xr=1012,ed=1013,P1=1014,C1=1015,b4=1016,td=1017,nd=1018,P7=1020,id=1021,p2=1023,rd=1024,sd=1025,L1=1026,N7=1027,od=1028,ad=1029,ld=1030,cd=1031,ud=1033,v8=33776,_8=33777,y8=33778,M8=33779,$n=35840,ei=35841,ti=35842,ni=35843,hd=36196,ii=37492,ri=37496,si=37808,oi=37809,ai=37810,li=37811,ci=37812,ui=37813,hi=37814,fi=37815,di=37816,pi=37817,mi=37818,gi=37819,vi=37820,_i=37821,x8=36492,fd=36283,yi=36284,Mi=36285,xi=36286,Yr=3e3,I1=3001,dd=3200,pd=3201,Zr=0,md=1,U1="",i5="srgb",E2="srgb-linear",qr="display-p3",S8=7680,gd=519,ae=35044,Si="300 es",le=1035;class O1{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,l=o.length;a<l;a++)o[a].call(this,e);e.target=null}}}const p9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],E8=Math.PI/180,ce=180/Math.PI;function a1(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(p9[r&255]+p9[r>>8&255]+p9[r>>16&255]+p9[r>>24&255]+"-"+p9[e&255]+p9[e>>8&255]+"-"+p9[e>>16&15|64]+p9[e>>24&255]+"-"+p9[t&63|128]+p9[t>>8&255]+"-"+p9[t>>16&255]+p9[t>>24&255]+p9[n&255]+p9[n>>8&255]+p9[n>>16&255]+p9[n>>24&255]).toLowerCase()}function u9(r,e,t){return Math.max(e,Math.min(t,r))}function vd(r,e){return(r%e+e)%e}function A8(r,e,t){return(1-t)*r+t*e}function Ei(r){return(r&r-1)===0&&r!==0}function _d(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function s1(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function C5(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class H0{constructor(e=0,t=0){H0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(u9(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*o+e.x,this.y=a*o+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class m5{constructor(){m5.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,o,a,l,c,h,f){const d=this.elements;return d[0]=e,d[1]=o,d[2]=c,d[3]=t,d[4]=a,d[5]=h,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,l=n[0],c=n[3],h=n[6],f=n[1],d=n[4],p=n[7],v=n[2],_=n[5],M=n[8],S=o[0],y=o[3],g=o[6],w=o[1],E=o[4],L=o[7],T=o[2],U=o[5],O=o[8];return a[0]=l*S+c*w+h*T,a[3]=l*y+c*E+h*U,a[6]=l*g+c*L+h*O,a[1]=f*S+d*w+p*T,a[4]=f*y+d*E+p*U,a[7]=f*g+d*L+p*O,a[2]=v*S+_*w+M*T,a[5]=v*y+_*E+M*U,a[8]=v*g+_*L+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8];return t*l*d-t*c*f-n*a*d+n*c*h+o*a*f-o*l*h}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8],p=d*l-c*f,v=c*h-d*a,_=f*a-l*h,M=t*p+n*v+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=p*S,e[1]=(o*f-d*n)*S,e[2]=(c*n-o*l)*S,e[3]=v*S,e[4]=(d*t-o*h)*S,e[5]=(o*a-c*t)*S,e[6]=_*S,e[7]=(n*h-f*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,l,c){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*l+f*c)+l+e,-o*f,o*h,-o*(-f*l+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(b8.makeScale(e,t)),this}rotate(e){return this.premultiply(b8.makeRotation(-e)),this}translate(e,t){return this.premultiply(b8.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const b8=new m5;function jr(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function w4(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Ai={};function E4(r){r in Ai||(Ai[r]=!0,console.warn(r))}function C7(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function w8(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const yd=new m5().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Md=new m5().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function xd(r){return r.convertSRGBToLinear().applyMatrix3(Md)}function Sd(r){return r.applyMatrix3(yd).convertLinearToSRGB()}const Ed={[E2]:r=>r,[i5]:r=>r.convertSRGBToLinear(),[qr]:xd},Ad={[E2]:r=>r,[i5]:r=>r.convertLinearToSRGB(),[qr]:Sd},c2={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return E2},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ed[e],o=Ad[t];if(n===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return o(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let n7;class Qr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{n7===void 0&&(n7=w4("canvas")),n7.width=e.width,n7.height=e.height;const n=n7.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=n7}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=w4("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let l=0;l<a.length;l++)a[l]=C7(a[l]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(C7(t[n]/255)*255):t[n]=C7(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Kr{constructor(e=null){this.isSource=!0,this.uuid=a1(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let l=0,c=o.length;l<c;l++)o[l].isDataTexture?a.push(T8(o[l].image)):a.push(T8(o[l]))}else a=T8(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function T8(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;class U9 extends O1{constructor(e=U9.DEFAULT_IMAGE,t=U9.DEFAULT_MAPPING,n=d2,o=d2,a=n2,l=A4,c=p2,h=D1,f=U9.DEFAULT_ANISOTROPY,d=U1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=a1(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new H0(0,0),this.repeat=new H0(1,1),this.center=new H0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new m5,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(E4("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===I1?i5:U1),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case se:e.x=e.x-Math.floor(e.x);break;case d2:e.x=e.x<0?0:1;break;case oe:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case se:e.y=e.y-Math.floor(e.y);break;case d2:e.y=e.y<0?0:1;break;case oe:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return E4("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===i5?I1:Yr}set encoding(e){E4("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===I1?i5:U1}}U9.DEFAULT_IMAGE=null;U9.DEFAULT_MAPPING=Vr;U9.DEFAULT_ANISOTROPY=1;class B5{constructor(e=0,t=0,n=0,o=1){B5.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*o+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*o+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*o+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*o+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const h=e.elements,f=h[0],d=h[4],p=h[8],v=h[1],_=h[5],M=h[9],S=h[2],y=h[6],g=h[10];if(Math.abs(d-v)<.01&&Math.abs(p-S)<.01&&Math.abs(M-y)<.01){if(Math.abs(d+v)<.1&&Math.abs(p+S)<.1&&Math.abs(M+y)<.1&&Math.abs(f+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,L=(_+1)/2,T=(g+1)/2,U=(d+v)/4,O=(p+S)/4,V=(M+y)/4;return E>L&&E>T?E<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(E),o=U/n,a=O/n):L>T?L<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),n=U/o,a=V/o):T<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(T),n=O/a,o=V/a),this.set(n,o,a,t),this}let w=Math.sqrt((y-M)*(y-M)+(p-S)*(p-S)+(v-d)*(v-d));return Math.abs(w)<.001&&(w=1),this.x=(y-M)/w,this.y=(p-S)/w,this.z=(v-d)/w,this.w=Math.acos((f+_+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N1 extends O1{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new B5(0,0,e,t),this.scissorTest=!1,this.viewport=new B5(0,0,e,t);const o={width:e,height:t,depth:1};n.encoding!==void 0&&(E4("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===I1?i5:U1),this.texture=new U9(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:n2,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends U9{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=A9,this.minFilter=A9,this.wrapR=d2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wd extends U9{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=A9,this.minFilter=A9,this.wrapR=d2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e9{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,l,c){let h=n[o+0],f=n[o+1],d=n[o+2],p=n[o+3];const v=a[l+0],_=a[l+1],M=a[l+2],S=a[l+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(c===1){e[t+0]=v,e[t+1]=_,e[t+2]=M,e[t+3]=S;return}if(p!==S||h!==v||f!==_||d!==M){let y=1-c;const g=h*v+f*_+d*M+p*S,w=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const T=Math.sqrt(E),U=Math.atan2(T,g*w);y=Math.sin(y*U)/T,c=Math.sin(c*U)/T}const L=c*w;if(h=h*y+v*L,f=f*y+_*L,d=d*y+M*L,p=p*y+S*L,y===1-c){const T=1/Math.sqrt(h*h+f*f+d*d+p*p);h*=T,f*=T,d*=T,p*=T}}e[t]=h,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,o,a,l){const c=n[o],h=n[o+1],f=n[o+2],d=n[o+3],p=a[l],v=a[l+1],_=a[l+2],M=a[l+3];return e[t]=c*M+d*p+h*_-f*v,e[t+1]=h*M+d*v+f*p-c*_,e[t+2]=f*M+d*_+c*v-h*p,e[t+3]=d*M-c*p-h*v-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,o=e._y,a=e._z,l=e._order,c=Math.cos,h=Math.sin,f=c(n/2),d=c(o/2),p=c(a/2),v=h(n/2),_=h(o/2),M=h(a/2);switch(l){case"XYZ":this._x=v*d*p+f*_*M,this._y=f*_*p-v*d*M,this._z=f*d*M+v*_*p,this._w=f*d*p-v*_*M;break;case"YXZ":this._x=v*d*p+f*_*M,this._y=f*_*p-v*d*M,this._z=f*d*M-v*_*p,this._w=f*d*p+v*_*M;break;case"ZXY":this._x=v*d*p-f*_*M,this._y=f*_*p+v*d*M,this._z=f*d*M+v*_*p,this._w=f*d*p-v*_*M;break;case"ZYX":this._x=v*d*p-f*_*M,this._y=f*_*p+v*d*M,this._z=f*d*M-v*_*p,this._w=f*d*p+v*_*M;break;case"YZX":this._x=v*d*p+f*_*M,this._y=f*_*p+v*d*M,this._z=f*d*M-v*_*p,this._w=f*d*p-v*_*M;break;case"XZY":this._x=v*d*p-f*_*M,this._y=f*_*p-v*d*M,this._z=f*d*M+v*_*p,this._w=f*d*p+v*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],l=t[1],c=t[5],h=t[9],f=t[2],d=t[6],p=t[10],v=n+c+p;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(d-h)*_,this._y=(a-f)*_,this._z=(l-o)*_}else if(n>c&&n>p){const _=2*Math.sqrt(1+n-c-p);this._w=(d-h)/_,this._x=.25*_,this._y=(o+l)/_,this._z=(a+f)/_}else if(c>p){const _=2*Math.sqrt(1+c-n-p);this._w=(a-f)/_,this._x=(o+l)/_,this._y=.25*_,this._z=(h+d)/_}else{const _=2*Math.sqrt(1+p-n-c);this._w=(l-o)/_,this._x=(a+f)/_,this._y=(h+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(u9(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,l=e._w,c=t._x,h=t._y,f=t._z,d=t._w;return this._x=n*d+l*c+o*f-a*h,this._y=o*d+l*h+a*c-n*f,this._z=a*d+l*f+n*h-o*c,this._w=l*d-n*c-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=o,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*n+t*this._x,this._y=_*o+t*this._y,this._z=_*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(h),d=Math.atan2(f,c),p=Math.sin((1-t)*d)/f,v=Math.sin(t*d)/f;return this._w=l*p+this._w*v,this._x=n*p+this._x*v,this._y=o*p+this._y*v,this._z=a*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),n*Math.sin(a),n*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bi.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bi.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,l=e.y,c=e.z,h=e.w,f=h*t+l*o-c*n,d=h*n+c*t-a*o,p=h*o+a*n-l*t,v=-a*t-l*n-c*o;return this.x=f*h+v*-a+d*-c-p*-l,this.y=d*h+v*-l+p*-a-f*-c,this.z=p*h+v*-c+f*-l-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,l=t.x,c=t.y,h=t.z;return this.x=o*h-a*c,this.y=a*l-n*h,this.z=n*c-o*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return R8.copy(this).projectOnVector(e),this.sub(R8)}reflect(e){return this.sub(R8.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(u9(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const R8=new N,bi=new e9;class P4{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(F2.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(F2.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=F2.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),i7.copy(e.boundingBox),i7.applyMatrix4(e.matrixWorld),this.union(i7);else{const o=e.geometry;if(o!==void 0)if(t&&o.attributes!==void 0&&o.attributes.position!==void 0){const a=o.attributes.position;for(let l=0,c=a.count;l<c;l++)F2.fromBufferAttribute(a,l).applyMatrix4(e.matrixWorld),this.expandByPoint(F2)}else o.boundingBox===null&&o.computeBoundingBox(),i7.copy(o.boundingBox),i7.applyMatrix4(e.matrixWorld),this.union(i7)}const n=e.children;for(let o=0,a=n.length;o<a;o++)this.expandByObject(n[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,F2),F2.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(a4),x3.subVectors(this.max,a4),r7.subVectors(e.a,a4),s7.subVectors(e.b,a4),o7.subVectors(e.c,a4),e1.subVectors(s7,r7),t1.subVectors(o7,s7),M1.subVectors(r7,o7);let t=[0,-e1.z,e1.y,0,-t1.z,t1.y,0,-M1.z,M1.y,e1.z,0,-e1.x,t1.z,0,-t1.x,M1.z,0,-M1.x,-e1.y,e1.x,0,-t1.y,t1.x,0,-M1.y,M1.x,0];return!P8(t,r7,s7,o7,x3)||(t=[1,0,0,0,1,0,0,0,1],!P8(t,r7,s7,o7,x3))?!1:(S3.crossVectors(e1,t1),t=[S3.x,S3.y,S3.z],P8(t,r7,s7,o7,x3))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,F2).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(F2).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(N2[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),N2[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),N2[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),N2[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),N2[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),N2[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),N2[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),N2[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(N2),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const N2=[new N,new N,new N,new N,new N,new N,new N,new N],F2=new N,i7=new P4,r7=new N,s7=new N,o7=new N,e1=new N,t1=new N,M1=new N,a4=new N,x3=new N,S3=new N,x1=new N;function P8(r,e,t,n,o){for(let a=0,l=r.length-3;a<=l;a+=3){x1.fromArray(r,a);const c=o.x*Math.abs(x1.x)+o.y*Math.abs(x1.y)+o.z*Math.abs(x1.z),h=e.dot(x1),f=t.dot(x1),d=n.dot(x1);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>c)return!1}return!0}const Td=new P4,l4=new N,C8=new N;class C4{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Td.setFromPoints(e).getCenter(n);let o=0;for(let a=0,l=e.length;a<l;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;l4.subVectors(e,this.center);const t=l4.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(l4,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(C8.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(l4.copy(e.center).add(C8)),this.expandByPoint(l4.copy(e.center).sub(C8))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const O2=new N,L8=new N,E3=new N,n1=new N,I8=new N,A3=new N,U8=new N;class i6{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,O2)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=O2.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(O2.copy(this.origin).addScaledVector(this.direction,t),O2.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){L8.copy(e).add(t).multiplyScalar(.5),E3.copy(t).sub(e).normalize(),n1.copy(this.origin).sub(L8);const a=e.distanceTo(t)*.5,l=-this.direction.dot(E3),c=n1.dot(this.direction),h=-n1.dot(E3),f=n1.lengthSq(),d=Math.abs(1-l*l);let p,v,_,M;if(d>0)if(p=l*h-c,v=l*c-h,M=a*d,p>=0)if(v>=-M)if(v<=M){const S=1/d;p*=S,v*=S,_=p*(p+l*v+2*c)+v*(l*p+v+2*h)+f}else v=a,p=Math.max(0,-(l*v+c)),_=-p*p+v*(v+2*h)+f;else v=-a,p=Math.max(0,-(l*v+c)),_=-p*p+v*(v+2*h)+f;else v<=-M?(p=Math.max(0,-(-l*a+c)),v=p>0?-a:Math.min(Math.max(-a,-h),a),_=-p*p+v*(v+2*h)+f):v<=M?(p=0,v=Math.min(Math.max(-a,-h),a),_=v*(v+2*h)+f):(p=Math.max(0,-(l*a+c)),v=p>0?a:Math.min(Math.max(-a,-h),a),_=-p*p+v*(v+2*h)+f);else v=l>0?-a:a,p=Math.max(0,-(l*v+c)),_=-p*p+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(L8).addScaledVector(E3,v),_}intersectSphere(e,t){O2.subVectors(e.center,this.origin);const n=O2.dot(this.direction),o=O2.dot(O2)-n*n,a=e.radius*e.radius;if(o>a)return null;const l=Math.sqrt(a-o),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,l,c,h;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),d>=0?(a=(e.min.y-v.y)*d,l=(e.max.y-v.y)*d):(a=(e.max.y-v.y)*d,l=(e.min.y-v.y)*d),n>l||a>o||((a>n||isNaN(n))&&(n=a),(l<o||isNaN(o))&&(o=l),p>=0?(c=(e.min.z-v.z)*p,h=(e.max.z-v.z)*p):(c=(e.max.z-v.z)*p,h=(e.min.z-v.z)*p),n>h||c>o)||((c>n||n!==n)&&(n=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,O2)!==null}intersectTriangle(e,t,n,o,a){I8.subVectors(t,e),A3.subVectors(n,e),U8.crossVectors(I8,A3);let l=this.direction.dot(U8),c;if(l>0){if(o)return null;c=1}else if(l<0)c=-1,l=-l;else return null;n1.subVectors(this.origin,e);const h=c*this.direction.dot(A3.crossVectors(n1,A3));if(h<0)return null;const f=c*this.direction.dot(I8.cross(n1));if(f<0||h+f>l)return null;const d=-c*n1.dot(U8);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class L5{constructor(){L5.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,o,a,l,c,h,f,d,p,v,_,M,S,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=o,g[1]=a,g[5]=l,g[9]=c,g[13]=h,g[2]=f,g[6]=d,g[10]=p,g[14]=v,g[3]=_,g[7]=M,g[11]=S,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new L5().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/a7.setFromMatrixColumn(e,0).length(),a=1/a7.setFromMatrixColumn(e,1).length(),l=1/a7.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(o),f=Math.sin(o),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const v=l*d,_=l*p,M=c*d,S=c*p;t[0]=h*d,t[4]=-h*p,t[8]=f,t[1]=_+M*f,t[5]=v-S*f,t[9]=-c*h,t[2]=S-v*f,t[6]=M+_*f,t[10]=l*h}else if(e.order==="YXZ"){const v=h*d,_=h*p,M=f*d,S=f*p;t[0]=v+S*c,t[4]=M*c-_,t[8]=l*f,t[1]=l*p,t[5]=l*d,t[9]=-c,t[2]=_*c-M,t[6]=S+v*c,t[10]=l*h}else if(e.order==="ZXY"){const v=h*d,_=h*p,M=f*d,S=f*p;t[0]=v-S*c,t[4]=-l*p,t[8]=M+_*c,t[1]=_+M*c,t[5]=l*d,t[9]=S-v*c,t[2]=-l*f,t[6]=c,t[10]=l*h}else if(e.order==="ZYX"){const v=l*d,_=l*p,M=c*d,S=c*p;t[0]=h*d,t[4]=M*f-_,t[8]=v*f+S,t[1]=h*p,t[5]=S*f+v,t[9]=_*f-M,t[2]=-f,t[6]=c*h,t[10]=l*h}else if(e.order==="YZX"){const v=l*h,_=l*f,M=c*h,S=c*f;t[0]=h*d,t[4]=S-v*p,t[8]=M*p+_,t[1]=p,t[5]=l*d,t[9]=-c*d,t[2]=-f*d,t[6]=_*p+M,t[10]=v-S*p}else if(e.order==="XZY"){const v=l*h,_=l*f,M=c*h,S=c*f;t[0]=h*d,t[4]=-p,t[8]=f*d,t[1]=v*p+S,t[5]=l*d,t[9]=_*p-M,t[2]=M*p-_,t[6]=c*d,t[10]=S*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rd,e,Pd)}lookAt(e,t,n){const o=this.elements;return H9.subVectors(e,t),H9.lengthSq()===0&&(H9.z=1),H9.normalize(),i1.crossVectors(n,H9),i1.lengthSq()===0&&(Math.abs(n.z)===1?H9.x+=1e-4:H9.z+=1e-4,H9.normalize(),i1.crossVectors(n,H9)),i1.normalize(),b3.crossVectors(H9,i1),o[0]=i1.x,o[4]=b3.x,o[8]=H9.x,o[1]=i1.y,o[5]=b3.y,o[9]=H9.y,o[2]=i1.z,o[6]=b3.z,o[10]=H9.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,l=n[0],c=n[4],h=n[8],f=n[12],d=n[1],p=n[5],v=n[9],_=n[13],M=n[2],S=n[6],y=n[10],g=n[14],w=n[3],E=n[7],L=n[11],T=n[15],U=o[0],O=o[4],V=o[8],A=o[12],P=o[1],j=o[5],Z=o[9],G=o[13],Y=o[2],K=o[6],h0=o[10],Q=o[14],$=o[3],a0=o[7],f0=o[11],S0=o[15];return a[0]=l*U+c*P+h*Y+f*$,a[4]=l*O+c*j+h*K+f*a0,a[8]=l*V+c*Z+h*h0+f*f0,a[12]=l*A+c*G+h*Q+f*S0,a[1]=d*U+p*P+v*Y+_*$,a[5]=d*O+p*j+v*K+_*a0,a[9]=d*V+p*Z+v*h0+_*f0,a[13]=d*A+p*G+v*Q+_*S0,a[2]=M*U+S*P+y*Y+g*$,a[6]=M*O+S*j+y*K+g*a0,a[10]=M*V+S*Z+y*h0+g*f0,a[14]=M*A+S*G+y*Q+g*S0,a[3]=w*U+E*P+L*Y+T*$,a[7]=w*O+E*j+L*K+T*a0,a[11]=w*V+E*Z+L*h0+T*f0,a[15]=w*A+E*G+L*Q+T*S0,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],l=e[1],c=e[5],h=e[9],f=e[13],d=e[2],p=e[6],v=e[10],_=e[14],M=e[3],S=e[7],y=e[11],g=e[15];return M*(+a*h*p-o*f*p-a*c*v+n*f*v+o*c*_-n*h*_)+S*(+t*h*_-t*f*v+a*l*v-o*l*_+o*f*d-a*h*d)+y*(+t*f*p-t*c*_-a*l*p+n*l*_+a*c*d-n*f*d)+g*(-o*c*d-t*h*p+t*c*v+o*l*p-n*l*v+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],d=e[8],p=e[9],v=e[10],_=e[11],M=e[12],S=e[13],y=e[14],g=e[15],w=p*y*f-S*v*f+S*h*_-c*y*_-p*h*g+c*v*g,E=M*v*f-d*y*f-M*h*_+l*y*_+d*h*g-l*v*g,L=d*S*f-M*p*f+M*c*_-l*S*_-d*c*g+l*p*g,T=M*p*h-d*S*h-M*c*v+l*S*v+d*c*y-l*p*y,U=t*w+n*E+o*L+a*T;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return e[0]=w*O,e[1]=(S*v*a-p*y*a-S*o*_+n*y*_+p*o*g-n*v*g)*O,e[2]=(c*y*a-S*h*a+S*o*f-n*y*f-c*o*g+n*h*g)*O,e[3]=(p*h*a-c*v*a-p*o*f+n*v*f+c*o*_-n*h*_)*O,e[4]=E*O,e[5]=(d*y*a-M*v*a+M*o*_-t*y*_-d*o*g+t*v*g)*O,e[6]=(M*h*a-l*y*a-M*o*f+t*y*f+l*o*g-t*h*g)*O,e[7]=(l*v*a-d*h*a+d*o*f-t*v*f-l*o*_+t*h*_)*O,e[8]=L*O,e[9]=(M*p*a-d*S*a-M*n*_+t*S*_+d*n*g-t*p*g)*O,e[10]=(l*S*a-M*c*a+M*n*f-t*S*f-l*n*g+t*c*g)*O,e[11]=(d*c*a-l*p*a-d*n*f+t*p*f+l*n*_-t*c*_)*O,e[12]=T*O,e[13]=(d*S*o-M*p*o+M*n*v-t*S*v-d*n*y+t*p*y)*O,e[14]=(M*c*o-l*S*o-M*n*h+t*S*h+l*n*y-t*c*y)*O,e[15]=(l*p*o-d*c*o+d*n*h-t*p*h-l*n*v+t*c*v)*O,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,l=e.x,c=e.y,h=e.z,f=a*l,d=a*c;return this.set(f*l+n,f*c-o*h,f*h+o*c,0,f*c+o*h,d*c+n,d*h-o*l,0,f*h-o*c,d*h+o*l,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,l){return this.set(1,n,a,0,e,1,l,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,l=t._y,c=t._z,h=t._w,f=a+a,d=l+l,p=c+c,v=a*f,_=a*d,M=a*p,S=l*d,y=l*p,g=c*p,w=h*f,E=h*d,L=h*p,T=n.x,U=n.y,O=n.z;return o[0]=(1-(S+g))*T,o[1]=(_+L)*T,o[2]=(M-E)*T,o[3]=0,o[4]=(_-L)*U,o[5]=(1-(v+g))*U,o[6]=(y+w)*U,o[7]=0,o[8]=(M+E)*O,o[9]=(y-w)*O,o[10]=(1-(v+S))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=a7.set(o[0],o[1],o[2]).length();const l=a7.set(o[4],o[5],o[6]).length(),c=a7.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],u2.copy(this);const f=1/a,d=1/l,p=1/c;return u2.elements[0]*=f,u2.elements[1]*=f,u2.elements[2]*=f,u2.elements[4]*=d,u2.elements[5]*=d,u2.elements[6]*=d,u2.elements[8]*=p,u2.elements[9]*=p,u2.elements[10]*=p,t.setFromRotationMatrix(u2),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,o,a,l){const c=this.elements,h=2*a/(t-e),f=2*a/(n-o),d=(t+e)/(t-e),p=(n+o)/(n-o),v=-(l+a)/(l-a),_=-2*l*a/(l-a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,o,a,l){const c=this.elements,h=1/(t-e),f=1/(n-o),d=1/(l-a),p=(t+e)*h,v=(n+o)*f,_=(l+a)*d;return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=-2*d,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const a7=new N,u2=new L5,Rd=new N(0,0,0),Pd=new N(1,1,1),i1=new N,b3=new N,H9=new N,wi=new L5,Ti=new e9;class L4{constructor(e=0,t=0,n=0,o=L4.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],l=o[4],c=o[8],h=o[1],f=o[5],d=o[9],p=o[2],v=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(u9(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-u9(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(u9(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-u9(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(u9(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-u9(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ti.setFromEuler(this),this.setFromQuaternion(Ti,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}L4.DEFAULT_ORDER="XYZ";class ve{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cd=0;const Ri=new N,l7=new e9,B2=new L5,w3=new N,c4=new N,Ld=new N,Id=new e9,Pi=new N(1,0,0),Ci=new N(0,1,0),Li=new N(0,0,1),Ud={type:"added"},Ii={type:"removed"};class X5 extends O1{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=a1(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=X5.DEFAULT_UP.clone();const e=new N,t=new L4,n=new e9,o=new N(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new L5},normalMatrix:{value:new m5}}),this.matrix=new L5,this.matrixWorld=new L5,this.matrixAutoUpdate=X5.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=X5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ve,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return l7.setFromAxisAngle(e,t),this.quaternion.multiply(l7),this}rotateOnWorldAxis(e,t){return l7.setFromAxisAngle(e,t),this.quaternion.premultiply(l7),this}rotateX(e){return this.rotateOnAxis(Pi,e)}rotateY(e){return this.rotateOnAxis(Ci,e)}rotateZ(e){return this.rotateOnAxis(Li,e)}translateOnAxis(e,t){return Ri.copy(e).applyQuaternion(this.quaternion),this.position.add(Ri.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pi,e)}translateY(e){return this.translateOnAxis(Ci,e)}translateZ(e){return this.translateOnAxis(Li,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(B2.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?w3.copy(e):w3.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),c4.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?B2.lookAt(c4,w3,this.up):B2.lookAt(w3,c4,this.up),this.quaternion.setFromRotationMatrix(B2),o&&(B2.extractRotation(o.matrixWorld),l7.setFromRotationMatrix(B2),this.quaternion.premultiply(l7.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ud)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ii)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ii)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),B2.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),B2.multiply(e.parent.matrixWorld)),e.applyMatrix4(B2),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let o=0,a=this.children.length;o<a;o++){const l=this.children[o].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(c4,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(c4,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,l=o.length;a<l;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const p=h[f];a(e.shapes,p)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(e.materials,this.material[h]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(a(e.animations,h))}}if(t){const c=l(e.geometries),h=l(e.materials),f=l(e.textures),d=l(e.images),p=l(e.shapes),v=l(e.skeletons),_=l(e.animations),M=l(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),v.length>0&&(n.skeletons=v),_.length>0&&(n.animations=_),M.length>0&&(n.nodes=M)}return n.object=o,n;function l(c){const h=[];for(const f in c){const d=c[f];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}X5.DEFAULT_UP=new N(0,1,0);X5.DEFAULT_MATRIX_AUTO_UPDATE=!0;X5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const h2=new N,z2=new N,D8=new N,G2=new N,c7=new N,u7=new N,Ui=new N,N8=new N,F8=new N,O8=new N;let T3=!1;class i2{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),h2.subVectors(e,t),o.cross(h2);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){h2.subVectors(o,t),z2.subVectors(n,t),D8.subVectors(e,t);const l=h2.dot(h2),c=h2.dot(z2),h=h2.dot(D8),f=z2.dot(z2),d=z2.dot(D8),p=l*f-c*c;if(p===0)return a.set(-2,-1,-1);const v=1/p,_=(f*h-c*d)*v,M=(l*d-c*h)*v;return a.set(1-_-M,M,_)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,G2),G2.x>=0&&G2.y>=0&&G2.x+G2.y<=1}static getUV(e,t,n,o,a,l,c,h){return T3===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),T3=!0),this.getInterpolation(e,t,n,o,a,l,c,h)}static getInterpolation(e,t,n,o,a,l,c,h){return this.getBarycoord(e,t,n,o,G2),h.setScalar(0),h.addScaledVector(a,G2.x),h.addScaledVector(l,G2.y),h.addScaledVector(c,G2.z),h}static isFrontFacing(e,t,n,o){return h2.subVectors(n,t),z2.subVectors(e,t),h2.cross(z2).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return h2.subVectors(this.c,this.b),z2.subVectors(this.a,this.b),h2.cross(z2).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i2.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i2.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,o,a){return T3===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),T3=!0),i2.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}getInterpolation(e,t,n,o,a){return i2.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return i2.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i2.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let l,c;c7.subVectors(o,n),u7.subVectors(a,n),N8.subVectors(e,n);const h=c7.dot(N8),f=u7.dot(N8);if(h<=0&&f<=0)return t.copy(n);F8.subVectors(e,o);const d=c7.dot(F8),p=u7.dot(F8);if(d>=0&&p<=d)return t.copy(o);const v=h*p-d*f;if(v<=0&&h>=0&&d<=0)return l=h/(h-d),t.copy(n).addScaledVector(c7,l);O8.subVectors(e,a);const _=c7.dot(O8),M=u7.dot(O8);if(M>=0&&_<=M)return t.copy(a);const S=_*f-h*M;if(S<=0&&f>=0&&M<=0)return c=f/(f-M),t.copy(n).addScaledVector(u7,c);const y=d*M-_*p;if(y<=0&&p-d>=0&&_-M>=0)return Ui.subVectors(a,o),c=(p-d)/(p-d+(_-M)),t.copy(o).addScaledVector(Ui,c);const g=1/(y+S+v);return l=S*g,c=v*g,t.copy(n).addScaledVector(c7,l).addScaledVector(u7,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dd=0;class c1 extends O1{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=a1(),this.name="",this.type="Material",this.blending=R7,this.side=l1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wr,this.blendDst=kr,this.blendEquation=E7,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ne,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=S8,this.stencilZFail=S8,this.stencilZPass=S8,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==R7&&(n.blending=this.blending),this.side!==l1&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}if(t){const a=o(e.textures),l=o(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $r={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},f2={h:0,s:0,l:0},R3={h:0,s:0,l:0};function B8(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class d5{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=i5){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,c2.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=c2.workingColorSpace){return this.r=e,this.g=t,this.b=n,c2.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=c2.workingColorSpace){if(e=vd(e,1),t=u9(t,0,1),n=u9(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=B8(l,a,e+1/3),this.g=B8(l,a,e),this.b=B8(l,a,e-1/3)}return c2.toWorkingColorSpace(this,o),this}setStyle(e,t=i5){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=o[1],c=o[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=i5){const n=$r[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=C7(e.r),this.g=C7(e.g),this.b=C7(e.b),this}copyLinearToSRGB(e){return this.r=w8(e.r),this.g=w8(e.g),this.b=w8(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=i5){return c2.fromWorkingColorSpace(m9.copy(this),e),Math.round(u9(m9.r*255,0,255))*65536+Math.round(u9(m9.g*255,0,255))*256+Math.round(u9(m9.b*255,0,255))}getHexString(e=i5){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=c2.workingColorSpace){c2.fromWorkingColorSpace(m9.copy(this),t);const n=m9.r,o=m9.g,a=m9.b,l=Math.max(n,o,a),c=Math.min(n,o,a);let h,f;const d=(c+l)/2;if(c===l)h=0,f=0;else{const p=l-c;switch(f=d<=.5?p/(l+c):p/(2-l-c),l){case n:h=(o-a)/p+(o<a?6:0);break;case o:h=(a-n)/p+2;break;case a:h=(n-o)/p+4;break}h/=6}return e.h=h,e.s=f,e.l=d,e}getRGB(e,t=c2.workingColorSpace){return c2.fromWorkingColorSpace(m9.copy(this),t),e.r=m9.r,e.g=m9.g,e.b=m9.b,e}getStyle(e=i5){c2.fromWorkingColorSpace(m9.copy(this),e);const t=m9.r,n=m9.g,o=m9.b;return e!==i5?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(f2),f2.h+=e,f2.s+=t,f2.l+=n,this.setHSL(f2.h,f2.s,f2.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(f2),e.getHSL(R3);const n=A8(f2.h,R3.h,t),o=A8(f2.s,R3.s,t),a=A8(f2.l,R3.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const m9=new d5;d5.NAMES=$r;class F7 extends c1{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new d5(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ge,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Q5=new N,P3=new H0;class t9{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ae,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)P3.fromBufferAttribute(this,t),P3.applyMatrix3(e),this.setXY(t,P3.x,P3.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Q5.fromBufferAttribute(this,t),Q5.applyMatrix3(e),this.setXYZ(t,Q5.x,Q5.y,Q5.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Q5.fromBufferAttribute(this,t),Q5.applyMatrix4(e),this.setXYZ(t,Q5.x,Q5.y,Q5.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Q5.fromBufferAttribute(this,t),Q5.applyNormalMatrix(e),this.setXYZ(t,Q5.x,Q5.y,Q5.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Q5.fromBufferAttribute(this,t),Q5.transformDirection(e),this.setXYZ(t,Q5.x,Q5.y,Q5.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=s1(t,this.array)),t}setX(e,t){return this.normalized&&(t=C5(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=s1(t,this.array)),t}setY(e,t){return this.normalized&&(t=C5(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=s1(t,this.array)),t}setZ(e,t){return this.normalized&&(t=C5(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=s1(t,this.array)),t}setW(e,t){return this.normalized&&(t=C5(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=C5(t,this.array),n=C5(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=C5(t,this.array),n=C5(n,this.array),o=C5(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=C5(t,this.array),n=C5(n,this.array),o=C5(o,this.array),a=C5(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ae&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class es extends t9{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ts extends t9{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class D5 extends t9{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nd=0;const e2=new L5,z8=new X5,h7=new N,W9=new P4,u4=new P4,o9=new N;class z5 extends O1{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=a1(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jr(e)?ts:es)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new m5().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return e2.makeRotationFromQuaternion(e),this.applyMatrix4(e2),this}rotateX(e){return e2.makeRotationX(e),this.applyMatrix4(e2),this}rotateY(e){return e2.makeRotationY(e),this.applyMatrix4(e2),this}rotateZ(e){return e2.makeRotationZ(e),this.applyMatrix4(e2),this}translate(e,t,n){return e2.makeTranslation(e,t,n),this.applyMatrix4(e2),this}scale(e,t,n){return e2.makeScale(e,t,n),this.applyMatrix4(e2),this}lookAt(e){return z8.lookAt(e),z8.updateMatrix(),this.applyMatrix4(z8.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(h7).negate(),this.translate(h7.x,h7.y,h7.z),this}setFromPoints(e){const t=[];for(let n=0,o=e.length;n<o;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new D5(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new P4);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];W9.setFromBufferAttribute(a),this.morphTargetsRelative?(o9.addVectors(this.boundingBox.min,W9.min),this.boundingBox.expandByPoint(o9),o9.addVectors(this.boundingBox.max,W9.max),this.boundingBox.expandByPoint(o9)):(this.boundingBox.expandByPoint(W9.min),this.boundingBox.expandByPoint(W9.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new C4);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(W9.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];u4.setFromBufferAttribute(c),this.morphTargetsRelative?(o9.addVectors(W9.min,u4.min),W9.expandByPoint(o9),o9.addVectors(W9.max,u4.max),W9.expandByPoint(o9)):(W9.expandByPoint(u4.min),W9.expandByPoint(u4.max))}W9.getCenter(n);let o=0;for(let a=0,l=e.count;a<l;a++)o9.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(o9));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],h=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)o9.fromBufferAttribute(c,f),h&&(h7.fromBufferAttribute(e,f),o9.add(h7)),o=Math.max(o,n.distanceToSquared(o9))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,o=t.position.array,a=t.normal.array,l=t.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new t9(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,f=[],d=[];for(let P=0;P<c;P++)f[P]=new N,d[P]=new N;const p=new N,v=new N,_=new N,M=new H0,S=new H0,y=new H0,g=new N,w=new N;function E(P,j,Z){p.fromArray(o,P*3),v.fromArray(o,j*3),_.fromArray(o,Z*3),M.fromArray(l,P*2),S.fromArray(l,j*2),y.fromArray(l,Z*2),v.sub(p),_.sub(p),S.sub(M),y.sub(M);const G=1/(S.x*y.y-y.x*S.y);isFinite(G)&&(g.copy(v).multiplyScalar(y.y).addScaledVector(_,-S.y).multiplyScalar(G),w.copy(_).multiplyScalar(S.x).addScaledVector(v,-y.x).multiplyScalar(G),f[P].add(g),f[j].add(g),f[Z].add(g),d[P].add(w),d[j].add(w),d[Z].add(w))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let P=0,j=L.length;P<j;++P){const Z=L[P],G=Z.start,Y=Z.count;for(let K=G,h0=G+Y;K<h0;K+=3)E(n[K+0],n[K+1],n[K+2])}const T=new N,U=new N,O=new N,V=new N;function A(P){O.fromArray(a,P*3),V.copy(O);const j=f[P];T.copy(j),T.sub(O.multiplyScalar(O.dot(j))).normalize(),U.crossVectors(V,j);const G=U.dot(d[P])<0?-1:1;h[P*4]=T.x,h[P*4+1]=T.y,h[P*4+2]=T.z,h[P*4+3]=G}for(let P=0,j=L.length;P<j;++P){const Z=L[P],G=Z.start,Y=Z.count;for(let K=G,h0=G+Y;K<h0;K+=3)A(n[K+0]),A(n[K+1]),A(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new t9(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,_=n.count;v<_;v++)n.setXYZ(v,0,0,0);const o=new N,a=new N,l=new N,c=new N,h=new N,f=new N,d=new N,p=new N;if(e)for(let v=0,_=e.count;v<_;v+=3){const M=e.getX(v+0),S=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,y),d.subVectors(l,a),p.subVectors(o,a),d.cross(p),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),c.add(d),h.add(d),f.add(d),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(S,h.x,h.y,h.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let v=0,_=t.count;v<_;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),d.subVectors(l,a),p.subVectors(o,a),d.cross(p),n.setXYZ(v+0,d.x,d.y,d.z),n.setXYZ(v+1,d.x,d.y,d.z),n.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)o9.fromBufferAttribute(e,t),o9.normalize(),e.setXYZ(t,o9.x,o9.y,o9.z)}toNonIndexed(){function e(c,h){const f=c.array,d=c.itemSize,p=c.normalized,v=new f.constructor(h.length*d);let _=0,M=0;for(let S=0,y=h.length;S<y;S++){c.isInterleavedBufferAttribute?_=h[S]*c.data.stride+c.offset:_=h[S]*d;for(let g=0;g<d;g++)v[M++]=f[_++]}return new t9(v,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new z5,n=this.index.array,o=this.attributes;for(const c in o){const h=o[c],f=e(h,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let d=0,p=f.length;d<p;d++){const v=f[d],_=e(v,n);h.push(_)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let p=0,v=f.length;p<v;p++){const _=f[p];d.push(_.toJSON(e.data))}d.length>0&&(o[h]=d,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const o=e.attributes;for(const f in o){const d=o[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],p=a[f];for(let v=0,_=p.length;v<_;v++)d.push(p[v].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Di=new L5,y2=new i6,C3=new C4,Ni=new N,f7=new N,d7=new N,p7=new N,G8=new N,L3=new N,I3=new H0,U3=new H0,D3=new H0,Fi=new N,Oi=new N,Bi=new N,N3=new N,F3=new N;class P0 extends X5{constructor(e=new z5,t=new F7){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=o.length;a<l;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){L3.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const d=c[h],p=a[h];d!==0&&(G8.fromBufferAttribute(p,e),l?L3.addScaledVector(G8,d):L3.addScaledVector(G8.sub(t),d))}t.add(L3)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),C3.copy(n.boundingSphere),C3.applyMatrix4(a),y2.copy(e.ray).recast(e.near),!(C3.containsPoint(y2.origin)===!1&&(y2.intersectSphere(C3,Ni)===null||y2.origin.distanceToSquared(Ni)>(e.far-e.near)**2))&&(Di.copy(a).invert(),y2.copy(e.ray).applyMatrix4(Di),!(n.boundingBox!==null&&y2.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,h=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,p=o.groups,v=o.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const S=p[_],y=a[S.materialIndex],g=Math.max(S.start,v.start),w=Math.min(l.count,Math.min(S.start+S.count,v.start+v.count));for(let E=g,L=w;E<L;E+=3){const T=l.getX(E),U=l.getX(E+1),O=l.getX(E+2);n=O3(this,y,e,y2,h,f,d,T,U,O),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=S.materialIndex,t.push(n))}}else{const _=Math.max(0,v.start),M=Math.min(l.count,v.start+v.count);for(let S=_,y=M;S<y;S+=3){const g=l.getX(S),w=l.getX(S+1),E=l.getX(S+2);n=O3(this,a,e,y2,h,f,d,g,w,E),n&&(n.faceIndex=Math.floor(S/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const S=p[_],y=a[S.materialIndex],g=Math.max(S.start,v.start),w=Math.min(c.count,Math.min(S.start+S.count,v.start+v.count));for(let E=g,L=w;E<L;E+=3){const T=E,U=E+1,O=E+2;n=O3(this,y,e,y2,h,f,d,T,U,O),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=S.materialIndex,t.push(n))}}else{const _=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let S=_,y=M;S<y;S+=3){const g=S,w=S+1,E=S+2;n=O3(this,a,e,y2,h,f,d,g,w,E),n&&(n.faceIndex=Math.floor(S/3),t.push(n))}}}}function Fd(r,e,t,n,o,a,l,c){let h;if(e.side===w9?h=n.intersectTriangle(l,a,o,!0,c):h=n.intersectTriangle(o,a,l,e.side===l1,c),h===null)return null;F3.copy(c),F3.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(F3);return f<t.near||f>t.far?null:{distance:f,point:F3.clone(),object:r}}function O3(r,e,t,n,o,a,l,c,h,f){r.getVertexPosition(c,f7),r.getVertexPosition(h,d7),r.getVertexPosition(f,p7);const d=Fd(r,e,t,n,f7,d7,p7,N3);if(d){o&&(I3.fromBufferAttribute(o,c),U3.fromBufferAttribute(o,h),D3.fromBufferAttribute(o,f),d.uv=i2.getInterpolation(N3,f7,d7,p7,I3,U3,D3,new H0)),a&&(I3.fromBufferAttribute(a,c),U3.fromBufferAttribute(a,h),D3.fromBufferAttribute(a,f),d.uv1=i2.getInterpolation(N3,f7,d7,p7,I3,U3,D3,new H0),d.uv2=d.uv1),l&&(Fi.fromBufferAttribute(l,c),Oi.fromBufferAttribute(l,h),Bi.fromBufferAttribute(l,f),d.normal=i2.getInterpolation(N3,f7,d7,p7,Fi,Oi,Bi,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:c,b:h,c:f,normal:new N,materialIndex:0};i2.getNormal(f7,d7,p7,p.normal),d.face=p}return d}class K5 extends z5{constructor(e=1,t=1,n=1,o=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:l};const c=this;o=Math.floor(o),a=Math.floor(a),l=Math.floor(l);const h=[],f=[],d=[],p=[];let v=0,_=0;M("z","y","x",-1,-1,n,t,e,l,a,0),M("z","y","x",1,-1,n,t,-e,l,a,1),M("x","z","y",1,1,e,n,t,o,l,2),M("x","z","y",1,-1,e,n,-t,o,l,3),M("x","y","z",1,-1,e,t,n,o,a,4),M("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(h),this.setAttribute("position",new D5(f,3)),this.setAttribute("normal",new D5(d,3)),this.setAttribute("uv",new D5(p,2));function M(S,y,g,w,E,L,T,U,O,V,A){const P=L/O,j=T/V,Z=L/2,G=T/2,Y=U/2,K=O+1,h0=V+1;let Q=0,$=0;const a0=new N;for(let f0=0;f0<h0;f0++){const S0=f0*j-G;for(let E0=0;E0<K;E0++){const n0=E0*P-Z;a0[S]=n0*w,a0[y]=S0*E,a0[g]=Y,f.push(a0.x,a0.y,a0.z),a0[S]=0,a0[y]=0,a0[g]=U>0?1:-1,d.push(a0.x,a0.y,a0.z),p.push(E0/O),p.push(1-f0/V),Q+=1}}for(let f0=0;f0<V;f0++)for(let S0=0;S0<O;S0++){const E0=v+S0+K*f0,n0=v+S0+K*(f0+1),p0=v+(S0+1)+K*(f0+1),y0=v+(S0+1)+K*f0;h.push(E0,n0,y0),h.push(n0,p0,y0),$+=6}c.addGroup(_,$,A),_+=$,v+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new K5(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function O7(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const o=r[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function E9(r){const e={};for(let t=0;t<r.length;t++){const n=O7(r[t]);for(const o in n)e[o]=n[o]}return e}function Od(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ns(r){return r.getRenderTarget()===null?r.outputColorSpace:E2}const Bd={clone:O7,merge:E9};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class F1 extends c1{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=O7(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const l=this.uniforms[o].value;l&&l.isTexture?t.uniforms[o]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[o]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[o]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[o]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[o]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[o]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[o]={type:"m4",value:l.toArray()}:t.uniforms[o]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class is extends X5{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new L5,this.projectionMatrix=new L5,this.projectionMatrixInverse=new L5}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class k9 extends is{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ce*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(E8*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ce*2*Math.atan(Math.tan(E8*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,o,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(E8*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;a+=l.offsetX*o/h,t-=l.offsetY*n/f,o*=l.width/h,n*=l.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const m7=-90,g7=1;class Hd extends X5{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const o=new k9(m7,g7,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const a=new k9(m7,g7,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const l=new k9(m7,g7,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const c=new k9(m7,g7,e,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const h=new k9(m7,g7,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const f=new k9(m7,g7,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,-1),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[o,a,l,c,h,f]=this.children,d=e.getRenderTarget(),p=e.toneMapping,v=e.xr.enabled;e.toneMapping=W2,e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,o),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,c),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class rs extends U9{constructor(e,t,n,o,a,l,c,h,f,d){e=e!==void 0?e:[],t=t!==void 0?t:U7,super(e,t,n,o,a,l,c,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wd extends N1{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];t.encoding!==void 0&&(E4("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===I1?i5:U1),this.texture=new rs(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:n2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new K5(5,5,5),a=new F1({name:"CubemapFromEquirect",uniforms:O7(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:w9,blending:o1});a.uniforms.tEquirect.value=t;const l=new P0(o,a),c=t.minFilter;return t.minFilter===A4&&(t.minFilter=n2),new Hd(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,o){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,o);e.setRenderTarget(a)}}const H8=new N,kd=new N,Vd=new m5;class A1{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=H8.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(H8),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vd.getNormalMatrix(e),o=this.coplanarPoint(H8).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const S1=new C4,B3=new N;class _e{constructor(e=new A1,t=new A1,n=new A1,o=new A1,a=new A1,l=new A1){this.planes=[e,t,n,o,a,l]}set(e,t,n,o,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(o),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],f=n[5],d=n[6],p=n[7],v=n[8],_=n[9],M=n[10],S=n[11],y=n[12],g=n[13],w=n[14],E=n[15];return t[0].setComponents(c-o,p-h,S-v,E-y).normalize(),t[1].setComponents(c+o,p+h,S+v,E+y).normalize(),t[2].setComponents(c+a,p+f,S+_,E+g).normalize(),t[3].setComponents(c-a,p-f,S-_,E-g).normalize(),t[4].setComponents(c-l,p-d,S-M,E-w).normalize(),t[5].setComponents(c+l,p+d,S+M,E+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),S1.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),S1.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(S1)}intersectsSprite(e){return S1.center.set(0,0,0),S1.radius=.7071067811865476,S1.applyMatrix4(e.matrixWorld),this.intersectsSphere(S1)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(B3.x=o.normal.x>0?e.max.x:e.min.x,B3.y=o.normal.y>0?e.max.y:e.min.y,B3.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(B3)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ss(){let r=null,e=!1,t=null,n=null;function o(a,l){t(a,l),n=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Xd(r,e){const t=e.isWebGL2,n=new WeakMap;function o(f,d){const p=f.array,v=f.usage,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)M=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version}}function a(f,d,p){const v=d.array,_=d.updateRange;r.bindBuffer(p,f),_.count===-1?r.bufferSubData(p,0,v):(t?r.bufferSubData(p,_.offset*v.BYTES_PER_ELEMENT,v,_.offset,_.count):r.bufferSubData(p,_.offset*v.BYTES_PER_ELEMENT,v.subarray(_.offset,_.offset+_.count)),_.count=-1),d.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(r.deleteBuffer(d.buffer),n.delete(f))}function h(f,d){if(f.isGLBufferAttribute){const v=n.get(f);(!v||v.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);p===void 0?n.set(f,o(f,d)):p.version<f.version&&(a(p.buffer,f,d),p.version=f.version)}return{get:l,remove:c,update:h}}class B7 extends z5{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,l=t/2,c=Math.floor(n),h=Math.floor(o),f=c+1,d=h+1,p=e/c,v=t/h,_=[],M=[],S=[],y=[];for(let g=0;g<d;g++){const w=g*v-l;for(let E=0;E<f;E++){const L=E*p-a;M.push(L,-w,0),S.push(0,0,1),y.push(E/c),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let w=0;w<c;w++){const E=w+f*g,L=w+f*(g+1),T=w+1+f*(g+1),U=w+1+f*g;_.push(E,L,U),_.push(L,T,U)}this.setIndex(_),this.setAttribute("position",new D5(M,3)),this.setAttribute("normal",new D5(S,3)),this.setAttribute("uv",new D5(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new B7(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd="vec3 transformed = vec3( position );",$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,np=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Np=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Wp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,im=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Om=`#ifdef USE_UV
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
#endif`,Bm=`#ifdef USE_UV
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
#endif`,zm=`#ifdef USE_UV
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Qm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$m=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,ng=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,rg=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,og=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,ug=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,fg=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,pg=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,_g=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,a5={alphamap_fragment:Yd,alphamap_pars_fragment:Zd,alphatest_fragment:qd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:Kd,begin_vertex:Jd,beginnormal_vertex:$d,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:vp,encodings_fragment:_p,encodings_pars_fragment:yp,envmap_fragment:Mp,envmap_common_pars_fragment:xp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Ap,fog_vertex:bp,fog_pars_vertex:wp,fog_fragment:Tp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Pp,lightmap_fragment:Cp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Up,lights_pars_begin:Dp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Wp,lights_fragment_maps:kp,lights_fragment_end:Vp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:qp,map_fragment:jp,map_pars_fragment:Qp,map_particle_fragment:Kp,map_particle_pars_fragment:Jp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,output_fragment:mm,packing:gm,premultiplied_alpha_fragment:vm,project_vertex:_m,dithering_fragment:ym,dithering_pars_fragment:Mm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Am,shadowmap_vertex:bm,shadowmask_pars_fragment:wm,skinbase_vertex:Tm,skinning_pars_vertex:Rm,skinning_vertex:Pm,skinnormal_vertex:Cm,specularmap_fragment:Lm,specularmap_pars_fragment:Im,tonemapping_fragment:Um,tonemapping_pars_fragment:Dm,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Gm,background_vert:Hm,background_frag:Wm,backgroundCube_vert:km,backgroundCube_frag:Vm,cube_vert:Xm,cube_frag:Ym,depth_vert:Zm,depth_frag:qm,distanceRGBA_vert:jm,distanceRGBA_frag:Qm,equirect_vert:Km,equirect_frag:Jm,linedashed_vert:$m,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:rg,meshmatcap_vert:sg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:vg,shadow_frag:_g,sprite_vert:yg,sprite_frag:Mg},b0={common:{diffuse:{value:new d5(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new m5},alphaMap:{value:null},alphaMapTransform:{value:new m5},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new m5}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new m5}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new m5}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new m5},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new m5},normalScale:{value:new H0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new m5},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new m5}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new m5}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new m5}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new d5(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new d5(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new m5}},sprite:{diffuse:{value:new d5(16777215)},opacity:{value:1},center:{value:new H0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new m5},alphaMap:{value:null},alphaTest:{value:0}}},x2={basic:{uniforms:E9([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.fog]),vertexShader:a5.meshbasic_vert,fragmentShader:a5.meshbasic_frag},lambert:{uniforms:E9([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,b0.lights,{emissive:{value:new d5(0)}}]),vertexShader:a5.meshlambert_vert,fragmentShader:a5.meshlambert_frag},phong:{uniforms:E9([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,b0.lights,{emissive:{value:new d5(0)},specular:{value:new d5(1118481)},shininess:{value:30}}]),vertexShader:a5.meshphong_vert,fragmentShader:a5.meshphong_frag},standard:{uniforms:E9([b0.common,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.roughnessmap,b0.metalnessmap,b0.fog,b0.lights,{emissive:{value:new d5(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:a5.meshphysical_vert,fragmentShader:a5.meshphysical_frag},toon:{uniforms:E9([b0.common,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.gradientmap,b0.fog,b0.lights,{emissive:{value:new d5(0)}}]),vertexShader:a5.meshtoon_vert,fragmentShader:a5.meshtoon_frag},matcap:{uniforms:E9([b0.common,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,{matcap:{value:null}}]),vertexShader:a5.meshmatcap_vert,fragmentShader:a5.meshmatcap_frag},points:{uniforms:E9([b0.points,b0.fog]),vertexShader:a5.points_vert,fragmentShader:a5.points_frag},dashed:{uniforms:E9([b0.common,b0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:a5.linedashed_vert,fragmentShader:a5.linedashed_frag},depth:{uniforms:E9([b0.common,b0.displacementmap]),vertexShader:a5.depth_vert,fragmentShader:a5.depth_frag},normal:{uniforms:E9([b0.common,b0.bumpmap,b0.normalmap,b0.displacementmap,{opacity:{value:1}}]),vertexShader:a5.meshnormal_vert,fragmentShader:a5.meshnormal_frag},sprite:{uniforms:E9([b0.sprite,b0.fog]),vertexShader:a5.sprite_vert,fragmentShader:a5.sprite_frag},background:{uniforms:{uvTransform:{value:new m5},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:a5.background_vert,fragmentShader:a5.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:a5.backgroundCube_vert,fragmentShader:a5.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:a5.cube_vert,fragmentShader:a5.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:a5.equirect_vert,fragmentShader:a5.equirect_frag},distanceRGBA:{uniforms:E9([b0.common,b0.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:a5.distanceRGBA_vert,fragmentShader:a5.distanceRGBA_frag},shadow:{uniforms:E9([b0.lights,b0.fog,{color:{value:new d5(0)},opacity:{value:1}}]),vertexShader:a5.shadow_vert,fragmentShader:a5.shadow_frag}};x2.physical={uniforms:E9([x2.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new m5},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new m5},clearcoatNormalScale:{value:new H0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new m5},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new m5},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new m5},sheen:{value:0},sheenColor:{value:new d5(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new m5},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new m5},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new m5},transmissionSamplerSize:{value:new H0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new m5},attenuationDistance:{value:0},attenuationColor:{value:new d5(0)},specularColor:{value:new d5(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new m5},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new m5}}]),vertexShader:a5.meshphysical_vert,fragmentShader:a5.meshphysical_frag};const z3={r:0,b:0,g:0};function xg(r,e,t,n,o,a,l){const c=new d5(0);let h=a===!0?0:1,f,d,p=null,v=0,_=null;function M(y,g){let w=!1,E=g.isScene===!0?g.background:null;switch(E&&E.isTexture&&(E=(g.backgroundBlurriness>0?t:e).get(E)),E===null?S(c,h):E&&E.isColor&&(S(E,1),w=!0),r.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,l),w=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,l),w=!0;break}(r.autoClear||w)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),E&&(E.isCubeTexture||E.mapping===n6)?(d===void 0&&(d=new P0(new K5(1,1,1),new F1({name:"BackgroundCubeMaterial",uniforms:O7(x2.backgroundCube.uniforms),vertexShader:x2.backgroundCube.vertexShader,fragmentShader:x2.backgroundCube.fragmentShader,side:w9,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=E.colorSpace!==i5,(p!==E||v!==E.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,p=E,v=E.version,_=r.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new P0(new B7(2,2),new F1({name:"BackgroundMaterial",uniforms:O7(x2.background.uniforms),vertexShader:x2.background.vertexShader,fragmentShader:x2.background.fragmentShader,side:l1,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=E.colorSpace!==i5,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||v!==E.version||_!==r.toneMapping)&&(f.material.needsUpdate=!0,p=E,v=E.version,_=r.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null))}function S(y,g){y.getRGB(z3,ns(r)),n.buffers.color.setClear(z3.r,z3.g,z3.b,g,l)}return{getClearColor:function(){return c},setClearColor:function(y,g=1){c.set(y),h=g,S(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,S(c,h)},render:M}}function Sg(r,e,t,n){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,c={},h=y(null);let f=h,d=!1;function p(Y,K,h0,Q,$){let a0=!1;if(l){const f0=S(Q,h0,K);f!==f0&&(f=f0,_(f.object)),a0=g(Y,Q,h0,$),a0&&w(Y,Q,h0,$)}else{const f0=K.wireframe===!0;(f.geometry!==Q.id||f.program!==h0.id||f.wireframe!==f0)&&(f.geometry=Q.id,f.program=h0.id,f.wireframe=f0,a0=!0)}$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(a0||d)&&(d=!1,V(Y,K,h0,Q),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function v(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function _(Y){return n.isWebGL2?r.bindVertexArray(Y):a.bindVertexArrayOES(Y)}function M(Y){return n.isWebGL2?r.deleteVertexArray(Y):a.deleteVertexArrayOES(Y)}function S(Y,K,h0){const Q=h0.wireframe===!0;let $=c[Y.id];$===void 0&&($={},c[Y.id]=$);let a0=$[K.id];a0===void 0&&(a0={},$[K.id]=a0);let f0=a0[Q];return f0===void 0&&(f0=y(v()),a0[Q]=f0),f0}function y(Y){const K=[],h0=[],Q=[];for(let $=0;$<o;$++)K[$]=0,h0[$]=0,Q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:h0,attributeDivisors:Q,object:Y,attributes:{},index:null}}function g(Y,K,h0,Q){const $=f.attributes,a0=K.attributes;let f0=0;const S0=h0.getAttributes();for(const E0 in S0)if(S0[E0].location>=0){const p0=$[E0];let y0=a0[E0];if(y0===void 0&&(E0==="instanceMatrix"&&Y.instanceMatrix&&(y0=Y.instanceMatrix),E0==="instanceColor"&&Y.instanceColor&&(y0=Y.instanceColor)),p0===void 0||p0.attribute!==y0||y0&&p0.data!==y0.data)return!0;f0++}return f.attributesNum!==f0||f.index!==Q}function w(Y,K,h0,Q){const $={},a0=K.attributes;let f0=0;const S0=h0.getAttributes();for(const E0 in S0)if(S0[E0].location>=0){let p0=a0[E0];p0===void 0&&(E0==="instanceMatrix"&&Y.instanceMatrix&&(p0=Y.instanceMatrix),E0==="instanceColor"&&Y.instanceColor&&(p0=Y.instanceColor));const y0={};y0.attribute=p0,p0&&p0.data&&(y0.data=p0.data),$[E0]=y0,f0++}f.attributes=$,f.attributesNum=f0,f.index=Q}function E(){const Y=f.newAttributes;for(let K=0,h0=Y.length;K<h0;K++)Y[K]=0}function L(Y){T(Y,0)}function T(Y,K){const h0=f.newAttributes,Q=f.enabledAttributes,$=f.attributeDivisors;h0[Y]=1,Q[Y]===0&&(r.enableVertexAttribArray(Y),Q[Y]=1),$[Y]!==K&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,K),$[Y]=K)}function U(){const Y=f.newAttributes,K=f.enabledAttributes;for(let h0=0,Q=K.length;h0<Q;h0++)K[h0]!==Y[h0]&&(r.disableVertexAttribArray(h0),K[h0]=0)}function O(Y,K,h0,Q,$,a0){n.isWebGL2===!0&&(h0===r.INT||h0===r.UNSIGNED_INT)?r.vertexAttribIPointer(Y,K,h0,$,a0):r.vertexAttribPointer(Y,K,h0,Q,$,a0)}function V(Y,K,h0,Q){if(n.isWebGL2===!1&&(Y.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const $=Q.attributes,a0=h0.getAttributes(),f0=K.defaultAttributeValues;for(const S0 in a0){const E0=a0[S0];if(E0.location>=0){let n0=$[S0];if(n0===void 0&&(S0==="instanceMatrix"&&Y.instanceMatrix&&(n0=Y.instanceMatrix),S0==="instanceColor"&&Y.instanceColor&&(n0=Y.instanceColor)),n0!==void 0){const p0=n0.normalized,y0=n0.itemSize,w0=t.get(n0);if(w0===void 0)continue;const W=w0.buffer,Y0=w0.type,G0=w0.bytesPerElement;if(n0.isInterleavedBufferAttribute){const M0=n0.data,B0=M0.stride,u5=n0.offset;if(M0.isInstancedInterleavedBuffer){for(let F0=0;F0<E0.locationSize;F0++)T(E0.location+F0,M0.meshPerAttribute);Y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=M0.meshPerAttribute*M0.count)}else for(let F0=0;F0<E0.locationSize;F0++)L(E0.location+F0);r.bindBuffer(r.ARRAY_BUFFER,W);for(let F0=0;F0<E0.locationSize;F0++)O(E0.location+F0,y0/E0.locationSize,Y0,p0,B0*G0,(u5+y0/E0.locationSize*F0)*G0)}else{if(n0.isInstancedBufferAttribute){for(let M0=0;M0<E0.locationSize;M0++)T(E0.location+M0,n0.meshPerAttribute);Y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=n0.meshPerAttribute*n0.count)}else for(let M0=0;M0<E0.locationSize;M0++)L(E0.location+M0);r.bindBuffer(r.ARRAY_BUFFER,W);for(let M0=0;M0<E0.locationSize;M0++)O(E0.location+M0,y0/E0.locationSize,Y0,p0,y0*G0,y0/E0.locationSize*M0*G0)}}else if(f0!==void 0){const p0=f0[S0];if(p0!==void 0)switch(p0.length){case 2:r.vertexAttrib2fv(E0.location,p0);break;case 3:r.vertexAttrib3fv(E0.location,p0);break;case 4:r.vertexAttrib4fv(E0.location,p0);break;default:r.vertexAttrib1fv(E0.location,p0)}}}}U()}function A(){Z();for(const Y in c){const K=c[Y];for(const h0 in K){const Q=K[h0];for(const $ in Q)M(Q[$].object),delete Q[$];delete K[h0]}delete c[Y]}}function P(Y){if(c[Y.id]===void 0)return;const K=c[Y.id];for(const h0 in K){const Q=K[h0];for(const $ in Q)M(Q[$].object),delete Q[$];delete K[h0]}delete c[Y.id]}function j(Y){for(const K in c){const h0=c[K];if(h0[Y.id]===void 0)continue;const Q=h0[Y.id];for(const $ in Q)M(Q[$].object),delete Q[$];delete h0[Y.id]}}function Z(){G(),d=!0,f!==h&&(f=h,_(f.object))}function G(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:G,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:j,initAttributes:E,enableAttribute:L,disableUnusedAttributes:U}}function Eg(r,e,t,n){const o=n.isWebGL2;let a;function l(f){a=f}function c(f,d){r.drawArrays(a,f,d),t.update(d,a,1)}function h(f,d,p){if(p===0)return;let v,_;if(o)v=r,_="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](a,f,d,p),t.update(d,a,p)}this.setMode=l,this.render=c,this.renderInstances=h}function Ag(r,e,t){let n;function o(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=a(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,L=l||e.has("OES_texture_float"),T=E&&L,U=l?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:L,floatVertexTextures:T,maxSamples:U}}function bg(r){const e=this;let t=null,n=0,o=!1,a=!1;const l=new A1,c=new m5,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const _=p.length!==0||v||n!==0||o;return o=v,n=p.length,_},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,v){t=d(p,v,0)},this.setState=function(p,v,_){const M=p.clippingPlanes,S=p.clipIntersection,y=p.clipShadows,g=r.get(p);if(!o||M===null||M.length===0||a&&!y)a?d(null):f();else{const w=a?0:n,E=w*4;let L=g.clippingState||null;h.value=L,L=d(M,v,E,_);for(let T=0;T!==E;++T)L[T]=t[T];g.clippingState=L,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,v,_,M){const S=p!==null?p.length:0;let y=null;if(S!==0){if(y=h.value,M!==!0||y===null){const g=_+S*4,w=v.matrixWorldInverse;c.getNormalMatrix(w),(y===null||y.length<g)&&(y=new Float32Array(g));for(let E=0,L=_;E!==S;++E,L+=4)l.copy(p[E]).applyMatrix4(w,c),l.normal.toArray(y,L),y[L+3]=l.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,y}}function wg(r){let e=new WeakMap;function t(l,c){return c===ie?l.mapping=U7:c===re&&(l.mapping=D7),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const c=l.mapping;if(c===ie||c===re)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new Wd(h.height/2);return f.fromEquirectangularTexture(r,l),e.set(l,f),l.addEventListener("dispose",o),t(f.texture,l.mapping)}else return null}}return l}function o(l){const c=l.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ye extends is{constructor(e=-1,t=1,n=1,o=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,c-=d*this.view.offsetY,h=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const A7=4,zi=[.125,.215,.35,.446,.526,.582],T1=20,W8=new ye,Gi=new d5;let k8=null;const b1=(1+Math.sqrt(5))/2,v7=1/b1,Hi=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,b1,v7),new N(0,b1,-v7),new N(v7,0,b1),new N(-v7,0,b1),new N(b1,v7,0),new N(-b1,v7,0)];class Wi{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100){k8=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(k8),e.scissorTest=!1,G3(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===U7||e.mapping===D7?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),k8=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:n2,minFilter:n2,generateMipmaps:!1,type:b4,format:p2,colorSpace:E2,depthBuffer:!1},o=ki(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ki(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(a)),this._blurMaterial=Rg(a,e,t)}return o}_compileMaterial(e){const t=new P0(this._lodPlanes[0],e);this._renderer.compile(t,W8)}_sceneToCubeUV(e,t,n,o){const c=new k9(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,v=d.toneMapping;d.getClearColor(Gi),d.toneMapping=W2,d.autoClear=!1;const _=new F7({name:"PMREM.Background",side:w9,depthWrite:!1,depthTest:!1}),M=new P0(new K5,_);let S=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,S=!0):(_.color.copy(Gi),S=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(c.up.set(0,h[g],0),c.lookAt(f[g],0,0)):w===1?(c.up.set(0,0,h[g]),c.lookAt(0,f[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,f[g]));const E=this._cubeSize;G3(o,w*E,g>2?E:0,E,E),d.setRenderTarget(o),S&&d.render(M,c),d.render(e,c)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=v,d.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===U7||e.mapping===D7;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vi());const a=o?this._cubemapMaterial:this._equirectMaterial,l=new P0(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;G3(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,W8)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Hi[(o-1)%Hi.length];this._blur(e,o-1,o,a,l)}t.autoClear=n}_blur(e,t,n,o,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,o,"latitudinal",a),this._halfBlur(l,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new P0(this._lodPlanes[o],f),v=f.uniforms,_=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*T1-1),S=a/M,y=isFinite(a)?1+Math.floor(d*S):T1;y>T1&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${T1}`);const g=[];let w=0;for(let O=0;O<T1;++O){const V=O/S,A=Math.exp(-V*V/2);g.push(A),O===0?w+=A:O<y&&(w+=2*A)}for(let O=0;O<g.length;O++)g[O]=g[O]/w;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=l==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:E}=this;v.dTheta.value=M,v.mipInt.value=E-n;const L=this._sizeLods[o],T=3*L*(o>E-A7?o-E+A7:0),U=4*(this._cubeSize-L);G3(t,T,U,3*L,2*L),h.setRenderTarget(t),h.render(p,W8)}}function Tg(r){const e=[],t=[],n=[];let o=r;const a=r-A7+1+zi.length;for(let l=0;l<a;l++){const c=Math.pow(2,o);t.push(c);let h=1/c;l>r-A7?h=zi[l-r+A7-1]:l===0&&(h=0),n.push(h);const f=1/(c-2),d=-f,p=1+f,v=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,M=6,S=3,y=2,g=1,w=new Float32Array(S*M*_),E=new Float32Array(y*M*_),L=new Float32Array(g*M*_);for(let U=0;U<_;U++){const O=U%3*2/3-1,V=U>2?0:-1,A=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];w.set(A,S*M*U),E.set(v,y*M*U);const P=[U,U,U,U,U,U];L.set(P,g*M*U)}const T=new z5;T.setAttribute("position",new t9(w,S)),T.setAttribute("uv",new t9(E,y)),T.setAttribute("faceIndex",new t9(L,g)),e.push(T),o>A7&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ki(r,e,t){const n=new N1(r,e,t);return n.texture.mapping=n6,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function G3(r,e,t,n,o){r.viewport.set(e,t,n,o),r.scissor.set(e,t,n,o)}function Rg(r,e,t){const n=new Float32Array(T1),o=new N(0,1,0);return new F1({name:"SphericalGaussianBlur",defines:{n:T1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Me(),fragmentShader:`

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
		`,blending:o1,depthTest:!1,depthWrite:!1})}function Vi(){return new F1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Me(),fragmentShader:`

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
		`,blending:o1,depthTest:!1,depthWrite:!1})}function Xi(){return new F1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Me(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:o1,depthTest:!1,depthWrite:!1})}function Me(){return`

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
	`}function Pg(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===ie||h===re,d=h===U7||h===D7;if(f||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=e.get(c);return t===null&&(t=new Wi(r)),p=f?t.fromEquirectangular(c,p):t.fromCubemap(c,p),e.set(c,p),p.texture}else{if(e.has(c))return e.get(c).texture;{const p=c.image;if(f&&p&&p.height>0||d&&p&&o(p)){t===null&&(t=new Wi(r));const v=f?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let h=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&h++;return h===f}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Cg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const o=t(n);return o===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Lg(r,e,t,n){const o={},a=new WeakMap;function l(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",l),delete o[v.id];const _=a.get(v);_&&(e.remove(_),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(p,v){return o[v.id]===!0||(v.addEventListener("dispose",l),o[v.id]=!0,t.memory.geometries++),v}function h(p){const v=p.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER);const _=p.morphAttributes;for(const M in _){const S=_[M];for(let y=0,g=S.length;y<g;y++)e.update(S[y],r.ARRAY_BUFFER)}}function f(p){const v=[],_=p.index,M=p.attributes.position;let S=0;if(_!==null){const w=_.array;S=_.version;for(let E=0,L=w.length;E<L;E+=3){const T=w[E+0],U=w[E+1],O=w[E+2];v.push(T,U,U,O,O,T)}}else{const w=M.array;S=M.version;for(let E=0,L=w.length/3-1;E<L;E+=3){const T=E+0,U=E+1,O=E+2;v.push(T,U,U,O,O,T)}}const y=new(jr(v)?ts:es)(v,1);y.version=S;const g=a.get(p);g&&e.remove(g),a.set(p,y)}function d(p){const v=a.get(p);if(v){const _=p.index;_!==null&&v.version<_.version&&f(p)}else f(p);return a.get(p)}return{get:c,update:h,getWireframeAttribute:d}}function Ig(r,e,t,n){const o=n.isWebGL2;let a;function l(v){a=v}let c,h;function f(v){c=v.type,h=v.bytesPerElement}function d(v,_){r.drawElements(a,_,c,v*h),t.update(_,a,1)}function p(v,_,M){if(M===0)return;let S,y;if(o)S=r,y="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[y](a,_,c,v*h,M),t.update(_,a,M)}this.setMode=l,this.setIndex=f,this.render=d,this.renderInstances=p}function Ug(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Dg(r,e){return r[0]-e[0]}function Ng(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Fg(r,e,t){const n={},o=new Float32Array(8),a=new WeakMap,l=new B5,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function h(f,d,p){const v=f.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=_!==void 0?_.length:0;let S=a.get(d);if(S===void 0||S.count!==M){let w=function(){G.dispose(),a.delete(d),d.removeEventListener("dispose",w)};S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,L=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,U=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],V=d.morphAttributes.color||[];let A=0;E===!0&&(A=1),L===!0&&(A=2),T===!0&&(A=3);let P=d.attributes.position.count*A,j=1;P>e.maxTextureSize&&(j=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Z=new Float32Array(P*j*4*M),G=new Jr(Z,P,j,M);G.type=C1,G.needsUpdate=!0;const Y=A*4;for(let K=0;K<M;K++){const h0=U[K],Q=O[K],$=V[K],a0=P*j*4*K;for(let f0=0;f0<h0.count;f0++){const S0=f0*Y;E===!0&&(l.fromBufferAttribute(h0,f0),Z[a0+S0+0]=l.x,Z[a0+S0+1]=l.y,Z[a0+S0+2]=l.z,Z[a0+S0+3]=0),L===!0&&(l.fromBufferAttribute(Q,f0),Z[a0+S0+4]=l.x,Z[a0+S0+5]=l.y,Z[a0+S0+6]=l.z,Z[a0+S0+7]=0),T===!0&&(l.fromBufferAttribute($,f0),Z[a0+S0+8]=l.x,Z[a0+S0+9]=l.y,Z[a0+S0+10]=l.z,Z[a0+S0+11]=$.itemSize===4?l.w:1)}}S={count:M,texture:G,size:new H0(P,j)},a.set(d,S),d.addEventListener("dispose",w)}let y=0;for(let w=0;w<v.length;w++)y+=v[w];const g=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",g),p.getUniforms().setValue(r,"morphTargetInfluences",v),p.getUniforms().setValue(r,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}else{const _=v===void 0?0:v.length;let M=n[d.id];if(M===void 0||M.length!==_){M=[];for(let E=0;E<_;E++)M[E]=[E,0];n[d.id]=M}for(let E=0;E<_;E++){const L=M[E];L[0]=E,L[1]=v[E]}M.sort(Ng);for(let E=0;E<8;E++)E<_&&M[E][1]?(c[E][0]=M[E][0],c[E][1]=M[E][1]):(c[E][0]=Number.MAX_SAFE_INTEGER,c[E][1]=0);c.sort(Dg);const S=d.morphAttributes.position,y=d.morphAttributes.normal;let g=0;for(let E=0;E<8;E++){const L=c[E],T=L[0],U=L[1];T!==Number.MAX_SAFE_INTEGER&&U?(S&&d.getAttribute("morphTarget"+E)!==S[T]&&d.setAttribute("morphTarget"+E,S[T]),y&&d.getAttribute("morphNormal"+E)!==y[T]&&d.setAttribute("morphNormal"+E,y[T]),o[E]=U,g+=U):(S&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),y&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),o[E]=0)}const w=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:h}}function Og(r,e,t,n){let o=new WeakMap;function a(h){const f=n.render.frame,d=h.geometry,p=e.get(h,d);return o.get(p)!==f&&(e.update(p),o.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER)),p}function l(){o=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}const os=new U9,as=new Jr,ls=new wd,cs=new rs,Yi=[],Zi=[],qi=new Float32Array(16),ji=new Float32Array(9),Qi=new Float32Array(4);function z7(r,e,t){const n=r[0];if(n<=0||n>0)return r;const o=e*t;let a=Yi[o];if(a===void 0&&(a=new Float32Array(o),Yi[o]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(a,c)}return a}function n9(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function i9(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function r6(r,e){let t=Zi[e];t===void 0&&(t=new Int32Array(e),Zi[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(n9(t,e))return;r.uniform2fv(this.addr,e),i9(t,e)}}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(n9(t,e))return;r.uniform3fv(this.addr,e),i9(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(n9(t,e))return;r.uniform4fv(this.addr,e),i9(t,e)}}function Wg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(n9(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),i9(t,e)}else{if(n9(t,n))return;Qi.set(n),r.uniformMatrix2fv(this.addr,!1,Qi),i9(t,n)}}function kg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(n9(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),i9(t,e)}else{if(n9(t,n))return;ji.set(n),r.uniformMatrix3fv(this.addr,!1,ji),i9(t,n)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(n9(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),i9(t,e)}else{if(n9(t,n))return;qi.set(n),r.uniformMatrix4fv(this.addr,!1,qi),i9(t,n)}}function Xg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(n9(t,e))return;r.uniform2iv(this.addr,e),i9(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(n9(t,e))return;r.uniform3iv(this.addr,e),i9(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(n9(t,e))return;r.uniform4iv(this.addr,e),i9(t,e)}}function jg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(n9(t,e))return;r.uniform2uiv(this.addr,e),i9(t,e)}}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(n9(t,e))return;r.uniform3uiv(this.addr,e),i9(t,e)}}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(n9(t,e))return;r.uniform4uiv(this.addr,e),i9(t,e)}}function $g(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture2D(e||os,o)}function ev(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||ls,o)}function tv(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||cs,o)}function nv(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||as,o)}function iv(r){switch(r){case 5126:return Bg;case 35664:return zg;case 35665:return Gg;case 35666:return Hg;case 35674:return Wg;case 35675:return kg;case 35676:return Vg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return qg;case 5125:return jg;case 36294:return Qg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(r,e){r.uniform1fv(this.addr,e)}function sv(r,e){const t=z7(e,this.size,2);r.uniform2fv(this.addr,t)}function ov(r,e){const t=z7(e,this.size,3);r.uniform3fv(this.addr,t)}function av(r,e){const t=z7(e,this.size,4);r.uniform4fv(this.addr,t)}function lv(r,e){const t=z7(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cv(r,e){const t=z7(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uv(r,e){const t=z7(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hv(r,e){r.uniform1iv(this.addr,e)}function fv(r,e){r.uniform2iv(this.addr,e)}function dv(r,e){r.uniform3iv(this.addr,e)}function pv(r,e){r.uniform4iv(this.addr,e)}function mv(r,e){r.uniform1uiv(this.addr,e)}function gv(r,e){r.uniform2uiv(this.addr,e)}function vv(r,e){r.uniform3uiv(this.addr,e)}function _v(r,e){r.uniform4uiv(this.addr,e)}function yv(r,e,t){const n=this.cache,o=e.length,a=r6(t,o);n9(n,a)||(r.uniform1iv(this.addr,a),i9(n,a));for(let l=0;l!==o;++l)t.setTexture2D(e[l]||os,a[l])}function Mv(r,e,t){const n=this.cache,o=e.length,a=r6(t,o);n9(n,a)||(r.uniform1iv(this.addr,a),i9(n,a));for(let l=0;l!==o;++l)t.setTexture3D(e[l]||ls,a[l])}function xv(r,e,t){const n=this.cache,o=e.length,a=r6(t,o);n9(n,a)||(r.uniform1iv(this.addr,a),i9(n,a));for(let l=0;l!==o;++l)t.setTextureCube(e[l]||cs,a[l])}function Sv(r,e,t){const n=this.cache,o=e.length,a=r6(t,o);n9(n,a)||(r.uniform1iv(this.addr,a),i9(n,a));for(let l=0;l!==o;++l)t.setTexture2DArray(e[l]||as,a[l])}function Ev(r){switch(r){case 5126:return rv;case 35664:return sv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return vv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return Sv}}class Av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=iv(t.type)}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ev(t.type)}}class wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,l=o.length;a!==l;++a){const c=o[a];c.setValue(e,t[c.id],n)}}}const V8=/(\w+)(\])?(\[|\.)?/g;function Ki(r,e){r.seq.push(e),r.map[e.id]=e}function Tv(r,e,t){const n=r.name,o=n.length;for(V8.lastIndex=0;;){const a=V8.exec(n),l=V8.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===o){Ki(t,f===void 0?new Av(c,r,e):new bv(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new wv(c),Ki(t,p)),t=p}}}class J3{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Tv(a,l,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,l=t.length;a!==l;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const l=e[o];l.id in t&&n.push(l)}return n}}function Ji(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Rv=0;function Pv(r,e){const t=r.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=o;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function Cv(r){switch(r){case E2:return["Linear","( value )"];case i5:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function $i(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Pv(r.getShaderSource(e),l)}else return o}function Lv(r,e){const t=Cv(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Iv(r,e){let t;switch(e){case Yf:t="Linear";break;case Zf:t="Reinhard";break;case qf:t="OptimizedCineon";break;case jf:t="ACESFilmic";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Uv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(y4).join(`
`)}function Dv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=r.getActiveAttrib(e,o),l=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function y4(r){return r!==""}function er(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tr(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ue(r){return r.replace(Fv,Ov)}function Ov(r,e){const t=a5[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ue(t)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nr(r){return r.replace(Bv,zv)}function zv(r,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function ir(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hr?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Af?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===H2&&(e="SHADOWMAP_TYPE_VSM"),e}function Hv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case U7:case D7:e="ENVMAP_TYPE_CUBE";break;case n6:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case D7:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ge:e="ENVMAP_BLENDING_MULTIPLY";break;case Vf:e="ENVMAP_BLENDING_MIX";break;case Xf:e="ENVMAP_BLENDING_ADD";break}return e}function Vv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xv(r,e,t,n){const o=r.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const h=Gv(t),f=Hv(t),d=Wv(t),p=kv(t),v=Vv(t),_=t.isWebGL2?"":Uv(t),M=Dv(a),S=o.createProgram();let y,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[M].filter(y4).join(`
`),y.length>0&&(y+=`
`),g=[_,M].filter(y4).join(`
`),g.length>0&&(g+=`
`)):(y=[ir(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(y4).join(`
`),g=[_,ir(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==W2?"#define TONE_MAPPING":"",t.toneMapping!==W2?a5.tonemapping_pars_fragment:"",t.toneMapping!==W2?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",a5.encodings_pars_fragment,Lv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(y4).join(`
`)),l=ue(l),l=er(l,t),l=tr(l,t),c=ue(c),c=er(c,t),c=tr(c,t),l=nr(l),c=nr(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Si?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Si?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=w+y+l,L=w+g+c,T=Ji(o,o.VERTEX_SHADER,E),U=Ji(o,o.FRAGMENT_SHADER,L);if(o.attachShader(S,T),o.attachShader(S,U),t.index0AttributeName!==void 0?o.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(S,0,"position"),o.linkProgram(S),r.debug.checkShaderErrors){const A=o.getProgramInfoLog(S).trim(),P=o.getShaderInfoLog(T).trim(),j=o.getShaderInfoLog(U).trim();let Z=!0,G=!0;if(o.getProgramParameter(S,o.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,S,T,U);else{const Y=$i(o,T,"vertex"),K=$i(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(S,o.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+Y+`
`+K)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||j==="")&&(G=!1);G&&(this.diagnostics={runnable:Z,programLog:A,vertexShader:{log:P,prefix:y},fragmentShader:{log:j,prefix:g}})}o.deleteShader(T),o.deleteShader(U);let O;this.getUniforms=function(){return O===void 0&&(O=new J3(o,S)),O};let V;return this.getAttributes=function(){return V===void 0&&(V=Nv(o,S)),V},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(S),this.program=void 0},this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=U,this}let Yv=0;class Zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(o)===!1&&(l.add(o),o.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qv(e),t.set(e,n)),n}}class qv{constructor(e){this.id=Yv++,this.code=e,this.usedTimes=0}}function jv(r,e,t,n,o,a,l){const c=new ve,h=new Zv,f=[],d=o.isWebGL2,p=o.logarithmicDepthBuffer,v=o.vertexTextures;let _=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return A===1?"uv1":A===2?"uv2":A===3?"uv3":"uv"}function y(A,P,j,Z,G){const Y=Z.fog,K=G.geometry,h0=A.isMeshStandardMaterial?Z.environment:null,Q=(A.isMeshStandardMaterial?t:e).get(A.envMap||h0),$=Q&&Q.mapping===n6?Q.image.height:null,a0=M[A.type];A.precision!==null&&(_=o.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const f0=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,S0=f0!==void 0?f0.length:0;let E0=0;K.morphAttributes.position!==void 0&&(E0=1),K.morphAttributes.normal!==void 0&&(E0=2),K.morphAttributes.color!==void 0&&(E0=3);let n0,p0,y0,w0;if(a0){const S5=x2[a0];n0=S5.vertexShader,p0=S5.fragmentShader}else n0=A.vertexShader,p0=A.fragmentShader,h.update(A),y0=h.getVertexShaderID(A),w0=h.getFragmentShaderID(A);const W=r.getRenderTarget(),Y0=G.isInstancedMesh===!0,G0=!!A.map,M0=!!A.matcap,B0=!!Q,u5=!!A.aoMap,F0=!!A.lightMap,k0=!!A.bumpMap,b5=!!A.normalMap,I5=!!A.displacementMap,y5=!!A.emissiveMap,N5=!!A.metalnessMap,g5=!!A.roughnessMap,v5=A.clearcoat>0,w5=A.iridescence>0,D=A.sheen>0,C=A.transmission>0,i0=v5&&!!A.clearcoatMap,g0=v5&&!!A.clearcoatNormalMap,_0=v5&&!!A.clearcoatRoughnessMap,x0=w5&&!!A.iridescenceMap,B=w5&&!!A.iridescenceThicknessMap,c0=D&&!!A.sheenColorMap,t0=D&&!!A.sheenRoughnessMap,A0=!!A.specularMap,L0=!!A.specularColorMap,D0=!!A.specularIntensityMap,R0=C&&!!A.transmissionMap,U0=C&&!!A.thicknessMap,j0=!!A.gradientMap,$0=!!A.alphaMap,G5=A.alphaTest>0,H=!!A.extensions,r0=!!K.attributes.uv1,v0=!!K.attributes.uv2,C0=!!K.attributes.uv3;return{isWebGL2:d,shaderID:a0,shaderName:A.type,vertexShader:n0,fragmentShader:p0,defines:A.defines,customVertexShaderID:y0,customFragmentShaderID:w0,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,instancing:Y0,instancingColor:Y0&&G.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:E2,map:G0,matcap:M0,envMap:B0,envMapMode:B0&&Q.mapping,envMapCubeUVHeight:$,aoMap:u5,lightMap:F0,bumpMap:k0,normalMap:b5,displacementMap:v&&I5,emissiveMap:y5,normalMapObjectSpace:b5&&A.normalMapType===md,normalMapTangentSpace:b5&&A.normalMapType===Zr,metalnessMap:N5,roughnessMap:g5,clearcoat:v5,clearcoatMap:i0,clearcoatNormalMap:g0,clearcoatRoughnessMap:_0,iridescence:w5,iridescenceMap:x0,iridescenceThicknessMap:B,sheen:D,sheenColorMap:c0,sheenRoughnessMap:t0,specularMap:A0,specularColorMap:L0,specularIntensityMap:D0,transmission:C,transmissionMap:R0,thicknessMap:U0,gradientMap:j0,opaque:A.transparent===!1&&A.blending===R7,alphaMap:$0,alphaTest:G5,combine:A.combine,mapUv:G0&&S(A.map.channel),aoMapUv:u5&&S(A.aoMap.channel),lightMapUv:F0&&S(A.lightMap.channel),bumpMapUv:k0&&S(A.bumpMap.channel),normalMapUv:b5&&S(A.normalMap.channel),displacementMapUv:I5&&S(A.displacementMap.channel),emissiveMapUv:y5&&S(A.emissiveMap.channel),metalnessMapUv:N5&&S(A.metalnessMap.channel),roughnessMapUv:g5&&S(A.roughnessMap.channel),clearcoatMapUv:i0&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:g0&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_0&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:x0&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:B&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:c0&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:t0&&S(A.sheenRoughnessMap.channel),specularMapUv:A0&&S(A.specularMap.channel),specularColorMapUv:L0&&S(A.specularColorMap.channel),specularIntensityMapUv:D0&&S(A.specularIntensityMap.channel),transmissionMapUv:R0&&S(A.transmissionMap.channel),thicknessMapUv:U0&&S(A.thicknessMap.channel),alphaMapUv:$0&&S(A.alphaMap.channel),vertexTangents:b5&&!!K.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:r0,vertexUv2s:v0,vertexUv3s:C0,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(G0||$0),fog:!!Y,useFog:A.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:S0,morphTextureStride:E0,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:A.toneMapped?r.toneMapping:W2,useLegacyLights:r.useLegacyLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===S2,flipSided:A.side===w9,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:H&&A.extensions.derivatives===!0,extensionFragDepth:H&&A.extensions.fragDepth===!0,extensionDrawBuffers:H&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&A.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function g(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const j in A.defines)P.push(j),P.push(A.defines[j]);return A.isRawShaderMaterial===!1&&(w(P,A),E(P,A),P.push(r.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function w(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function E(A,P){c.disableAll(),P.isWebGL2&&c.enable(0),P.supportsVertexTextures&&c.enable(1),P.instancing&&c.enable(2),P.instancingColor&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),A.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.skinning&&c.enable(4),P.morphTargets&&c.enable(5),P.morphNormals&&c.enable(6),P.morphColors&&c.enable(7),P.premultipliedAlpha&&c.enable(8),P.shadowMapEnabled&&c.enable(9),P.useLegacyLights&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),A.push(c.mask)}function L(A){const P=M[A.type];let j;if(P){const Z=x2[P];j=Bd.clone(Z.uniforms)}else j=A.uniforms;return j}function T(A,P){let j;for(let Z=0,G=f.length;Z<G;Z++){const Y=f[Z];if(Y.cacheKey===P){j=Y,++j.usedTimes;break}}return j===void 0&&(j=new Xv(r,P,A,a),f.push(j)),j}function U(A){if(--A.usedTimes===0){const P=f.indexOf(A);f[P]=f[f.length-1],f.pop(),A.destroy()}}function O(A){h.remove(A)}function V(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:L,acquireProgram:T,releaseProgram:U,releaseShaderCache:O,programs:f,dispose:V}}function Qv(){let r=new WeakMap;function e(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function t(a){r.delete(a)}function n(a,l,c){r.get(a)[l]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:o}}function Kv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rr(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sr(){const r=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function l(p,v,_,M,S,y){let g=r[e];return g===void 0?(g={id:p.id,object:p,geometry:v,material:_,groupOrder:M,renderOrder:p.renderOrder,z:S,group:y},r[e]=g):(g.id=p.id,g.object=p,g.geometry=v,g.material=_,g.groupOrder=M,g.renderOrder=p.renderOrder,g.z=S,g.group=y),e++,g}function c(p,v,_,M,S,y){const g=l(p,v,_,M,S,y);_.transmission>0?n.push(g):_.transparent===!0?o.push(g):t.push(g)}function h(p,v,_,M,S,y){const g=l(p,v,_,M,S,y);_.transmission>0?n.unshift(g):_.transparent===!0?o.unshift(g):t.unshift(g)}function f(p,v){t.length>1&&t.sort(p||Kv),n.length>1&&n.sort(v||rr),o.length>1&&o.sort(v||rr)}function d(){for(let p=e,v=r.length;p<v;p++){const _=r[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:c,unshift:h,finish:d,sort:f}}function Jv(){let r=new WeakMap;function e(n,o){const a=r.get(n);let l;return a===void 0?(l=new sr,r.set(n,[l])):o>=a.length?(l=new sr,a.push(l)):l=a[o],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function $v(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new d5};break;case"SpotLight":t={position:new N,direction:new N,color:new d5,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new d5,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new d5,groundColor:new d5};break;case"RectAreaLight":t={color:new d5,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function e_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H0,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let t_=0;function n_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function i_(r,e){const t=new $v,n=e_(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)o.probe.push(new N);const a=new N,l=new L5,c=new L5;function h(d,p){let v=0,_=0,M=0;for(let j=0;j<9;j++)o.probe[j].set(0,0,0);let S=0,y=0,g=0,w=0,E=0,L=0,T=0,U=0,O=0,V=0;d.sort(n_);const A=p===!0?Math.PI:1;for(let j=0,Z=d.length;j<Z;j++){const G=d[j],Y=G.color,K=G.intensity,h0=G.distance,Q=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=Y.r*K*A,_+=Y.g*K*A,M+=Y.b*K*A;else if(G.isLightProbe)for(let $=0;$<9;$++)o.probe[$].addScaledVector(G.sh.coefficients[$],K);else if(G.isDirectionalLight){const $=t.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity*A),G.castShadow){const a0=G.shadow,f0=n.get(G);f0.shadowBias=a0.bias,f0.shadowNormalBias=a0.normalBias,f0.shadowRadius=a0.radius,f0.shadowMapSize=a0.mapSize,o.directionalShadow[S]=f0,o.directionalShadowMap[S]=Q,o.directionalShadowMatrix[S]=G.shadow.matrix,L++}o.directional[S]=$,S++}else if(G.isSpotLight){const $=t.get(G);$.position.setFromMatrixPosition(G.matrixWorld),$.color.copy(Y).multiplyScalar(K*A),$.distance=h0,$.coneCos=Math.cos(G.angle),$.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),$.decay=G.decay,o.spot[g]=$;const a0=G.shadow;if(G.map&&(o.spotLightMap[O]=G.map,O++,a0.updateMatrices(G),G.castShadow&&V++),o.spotLightMatrix[g]=a0.matrix,G.castShadow){const f0=n.get(G);f0.shadowBias=a0.bias,f0.shadowNormalBias=a0.normalBias,f0.shadowRadius=a0.radius,f0.shadowMapSize=a0.mapSize,o.spotShadow[g]=f0,o.spotShadowMap[g]=Q,U++}g++}else if(G.isRectAreaLight){const $=t.get(G);$.color.copy(Y).multiplyScalar(K),$.halfWidth.set(G.width*.5,0,0),$.halfHeight.set(0,G.height*.5,0),o.rectArea[w]=$,w++}else if(G.isPointLight){const $=t.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity*A),$.distance=G.distance,$.decay=G.decay,G.castShadow){const a0=G.shadow,f0=n.get(G);f0.shadowBias=a0.bias,f0.shadowNormalBias=a0.normalBias,f0.shadowRadius=a0.radius,f0.shadowMapSize=a0.mapSize,f0.shadowCameraNear=a0.camera.near,f0.shadowCameraFar=a0.camera.far,o.pointShadow[y]=f0,o.pointShadowMap[y]=Q,o.pointShadowMatrix[y]=G.shadow.matrix,T++}o.point[y]=$,y++}else if(G.isHemisphereLight){const $=t.get(G);$.skyColor.copy(G.color).multiplyScalar(K*A),$.groundColor.copy(G.groundColor).multiplyScalar(K*A),o.hemi[E]=$,E++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=b0.LTC_FLOAT_1,o.rectAreaLTC2=b0.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=b0.LTC_HALF_1,o.rectAreaLTC2=b0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=_,o.ambient[2]=M;const P=o.hash;(P.directionalLength!==S||P.pointLength!==y||P.spotLength!==g||P.rectAreaLength!==w||P.hemiLength!==E||P.numDirectionalShadows!==L||P.numPointShadows!==T||P.numSpotShadows!==U||P.numSpotMaps!==O)&&(o.directional.length=S,o.spot.length=g,o.rectArea.length=w,o.point.length=y,o.hemi.length=E,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=T,o.pointShadowMap.length=T,o.spotShadow.length=U,o.spotShadowMap.length=U,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=T,o.spotLightMatrix.length=U+O-V,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=V,P.directionalLength=S,P.pointLength=y,P.spotLength=g,P.rectAreaLength=w,P.hemiLength=E,P.numDirectionalShadows=L,P.numPointShadows=T,P.numSpotShadows=U,P.numSpotMaps=O,o.version=t_++)}function f(d,p){let v=0,_=0,M=0,S=0,y=0;const g=p.matrixWorldInverse;for(let w=0,E=d.length;w<E;w++){const L=d[w];if(L.isDirectionalLight){const T=o.directional[v];T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(g),v++}else if(L.isSpotLight){const T=o.spot[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(g),M++}else if(L.isRectAreaLight){const T=o.rectArea[S];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(g),c.identity(),l.copy(L.matrixWorld),l.premultiply(g),c.extractRotation(l),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),S++}else if(L.isPointLight){const T=o.point[_];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(g),_++}else if(L.isHemisphereLight){const T=o.hemi[y];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(g),y++}}}return{setup:h,setupView:f,state:o}}function or(r,e){const t=new i_(r,e),n=[],o=[];function a(){n.length=0,o.length=0}function l(p){n.push(p)}function c(p){o.push(p)}function h(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:o,lights:t},setupLights:h,setupLightsView:f,pushLight:l,pushShadow:c}}function r_(r,e){let t=new WeakMap;function n(a,l=0){const c=t.get(a);let h;return c===void 0?(h=new or(r,e),t.set(a,[h])):l>=c.length?(h=new or(r,e),c.push(h)):h=c[l],h}function o(){t=new WeakMap}return{get:n,dispose:o}}class s_ extends c1{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o_ extends c1{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`;function c_(r,e,t){let n=new _e;const o=new H0,a=new H0,l=new B5,c=new s_({depthPacking:pd}),h=new o_,f={},d=t.maxTextureSize,p={[l1]:w9,[w9]:l1,[S2]:S2},v=new F1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H0},radius:{value:4}},vertexShader:a_,fragmentShader:l_}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const M=new z5;M.setAttribute("position",new t9(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new P0(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let g=this.type;this.render=function(T,U,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||T.length===0)return;const V=r.getRenderTarget(),A=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),j=r.state;j.setBlending(o1),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Z=g!==H2&&this.type===H2,G=g===H2&&this.type!==H2;for(let Y=0,K=T.length;Y<K;Y++){const h0=T[Y],Q=h0.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",h0,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const $=Q.getFrameExtents();if(o.multiply($),a.copy(Q.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(a.x=Math.floor(d/$.x),o.x=a.x*$.x,Q.mapSize.x=a.x),o.y>d&&(a.y=Math.floor(d/$.y),o.y=a.y*$.y,Q.mapSize.y=a.y)),Q.map===null||Z===!0||G===!0){const f0=this.type!==H2?{minFilter:A9,magFilter:A9}:{};Q.map!==null&&Q.map.dispose(),Q.map=new N1(o.x,o.y,f0),Q.map.texture.name=h0.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const a0=Q.getViewportCount();for(let f0=0;f0<a0;f0++){const S0=Q.getViewport(f0);l.set(a.x*S0.x,a.y*S0.y,a.x*S0.z,a.y*S0.w),j.viewport(l),Q.updateMatrices(h0,f0),n=Q.getFrustum(),L(U,O,Q.camera,h0,this.type)}Q.isPointLightShadow!==!0&&this.type===H2&&w(Q,O),Q.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(V,A,P)};function w(T,U){const O=e.update(S);v.defines.VSM_SAMPLES!==T.blurSamples&&(v.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new N1(o.x,o.y)),v.uniforms.shadow_pass.value=T.map.texture,v.uniforms.resolution.value=T.mapSize,v.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(U,null,O,v,S,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(U,null,O,_,S,null)}function E(T,U,O,V){let A=null;const P=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)A=P;else if(A=O.isPointLight===!0?h:c,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const j=A.uuid,Z=U.uuid;let G=f[j];G===void 0&&(G={},f[j]=G);let Y=G[Z];Y===void 0&&(Y=A.clone(),G[Z]=Y),A=Y}if(A.visible=U.visible,A.wireframe=U.wireframe,V===H2?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:p[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const j=r.properties.get(A);j.light=O}return A}function L(T,U,O,V,A){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===H2)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const Z=e.update(T),G=T.material;if(Array.isArray(G)){const Y=Z.groups;for(let K=0,h0=Y.length;K<h0;K++){const Q=Y[K],$=G[Q.materialIndex];if($&&$.visible){const a0=E(T,$,V,A);r.renderBufferDirect(O,null,Z,a0,T,Q)}}}else if(G.visible){const Y=E(T,G,V,A);r.renderBufferDirect(O,null,Z,Y,T,null)}}const j=T.children;for(let Z=0,G=j.length;Z<G;Z++)L(j[Z],U,O,V,A)}}function u_(r,e,t){const n=t.isWebGL2;function o(){let H=!1;const r0=new B5;let v0=null;const C0=new B5(0,0,0,0);return{setMask:function(O0){v0!==O0&&!H&&(r.colorMask(O0,O0,O0,O0),v0=O0)},setLocked:function(O0){H=O0},setClear:function(O0,S5,E5,r9,r2){r2===!0&&(O0*=r9,S5*=r9,E5*=r9),r0.set(O0,S5,E5,r9),C0.equals(r0)===!1&&(r.clearColor(O0,S5,E5,r9),C0.copy(r0))},reset:function(){H=!1,v0=null,C0.set(-1,0,0,0)}}}function a(){let H=!1,r0=null,v0=null,C0=null;return{setTest:function(O0){O0?W(r.DEPTH_TEST):Y0(r.DEPTH_TEST)},setMask:function(O0){r0!==O0&&!H&&(r.depthMask(O0),r0=O0)},setFunc:function(O0){if(v0!==O0){switch(O0){case Of:r.depthFunc(r.NEVER);break;case Bf:r.depthFunc(r.ALWAYS);break;case zf:r.depthFunc(r.LESS);break;case ne:r.depthFunc(r.LEQUAL);break;case Gf:r.depthFunc(r.EQUAL);break;case Hf:r.depthFunc(r.GEQUAL);break;case Wf:r.depthFunc(r.GREATER);break;case kf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}v0=O0}},setLocked:function(O0){H=O0},setClear:function(O0){C0!==O0&&(r.clearDepth(O0),C0=O0)},reset:function(){H=!1,r0=null,v0=null,C0=null}}}function l(){let H=!1,r0=null,v0=null,C0=null,O0=null,S5=null,E5=null,r9=null,r2=null;return{setTest:function(H5){H||(H5?W(r.STENCIL_TEST):Y0(r.STENCIL_TEST))},setMask:function(H5){r0!==H5&&!H&&(r.stencilMask(H5),r0=H5)},setFunc:function(H5,T9,V9){(v0!==H5||C0!==T9||O0!==V9)&&(r.stencilFunc(H5,T9,V9),v0=H5,C0=T9,O0=V9)},setOp:function(H5,T9,V9){(S5!==H5||E5!==T9||r9!==V9)&&(r.stencilOp(H5,T9,V9),S5=H5,E5=T9,r9=V9)},setLocked:function(H5){H=H5},setClear:function(H5){r2!==H5&&(r.clearStencil(H5),r2=H5)},reset:function(){H=!1,r0=null,v0=null,C0=null,O0=null,S5=null,E5=null,r9=null,r2=null}}}const c=new o,h=new a,f=new l,d=new WeakMap,p=new WeakMap;let v={},_={},M=new WeakMap,S=[],y=null,g=!1,w=null,E=null,L=null,T=null,U=null,O=null,V=null,A=!1,P=null,j=null,Z=null,G=null,Y=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let h0=!1,Q=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec($)[1]),h0=Q>=1):$.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),h0=Q>=2);let a0=null,f0={};const S0=r.getParameter(r.SCISSOR_BOX),E0=r.getParameter(r.VIEWPORT),n0=new B5().fromArray(S0),p0=new B5().fromArray(E0);function y0(H,r0,v0,C0){const O0=new Uint8Array(4),S5=r.createTexture();r.bindTexture(H,S5),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let E5=0;E5<v0;E5++)n&&(H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY)?r.texImage3D(r0,0,r.RGBA,1,1,C0,0,r.RGBA,r.UNSIGNED_BYTE,O0):r.texImage2D(r0+E5,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,O0);return S5}const w0={};w0[r.TEXTURE_2D]=y0(r.TEXTURE_2D,r.TEXTURE_2D,1),w0[r.TEXTURE_CUBE_MAP]=y0(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(w0[r.TEXTURE_2D_ARRAY]=y0(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),w0[r.TEXTURE_3D]=y0(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),f.setClear(0),W(r.DEPTH_TEST),h.setFunc(ne),I5(!1),y5(Yn),W(r.CULL_FACE),k0(o1);function W(H){v[H]!==!0&&(r.enable(H),v[H]=!0)}function Y0(H){v[H]!==!1&&(r.disable(H),v[H]=!1)}function G0(H,r0){return _[H]!==r0?(r.bindFramebuffer(H,r0),_[H]=r0,n&&(H===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=r0),H===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=r0)),!0):!1}function M0(H,r0){let v0=S,C0=!1;if(H)if(v0=M.get(r0),v0===void 0&&(v0=[],M.set(r0,v0)),H.isWebGLMultipleRenderTargets){const O0=H.texture;if(v0.length!==O0.length||v0[0]!==r.COLOR_ATTACHMENT0){for(let S5=0,E5=O0.length;S5<E5;S5++)v0[S5]=r.COLOR_ATTACHMENT0+S5;v0.length=O0.length,C0=!0}}else v0[0]!==r.COLOR_ATTACHMENT0&&(v0[0]=r.COLOR_ATTACHMENT0,C0=!0);else v0[0]!==r.BACK&&(v0[0]=r.BACK,C0=!0);C0&&(t.isWebGL2?r.drawBuffers(v0):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(v0))}function B0(H){return y!==H?(r.useProgram(H),y=H,!0):!1}const u5={[E7]:r.FUNC_ADD,[wf]:r.FUNC_SUBTRACT,[Tf]:r.FUNC_REVERSE_SUBTRACT};if(n)u5[Qn]=r.MIN,u5[Kn]=r.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(u5[Qn]=H.MIN_EXT,u5[Kn]=H.MAX_EXT)}const F0={[Rf]:r.ZERO,[Pf]:r.ONE,[Cf]:r.SRC_COLOR,[Wr]:r.SRC_ALPHA,[Ff]:r.SRC_ALPHA_SATURATE,[Df]:r.DST_COLOR,[If]:r.DST_ALPHA,[Lf]:r.ONE_MINUS_SRC_COLOR,[kr]:r.ONE_MINUS_SRC_ALPHA,[Nf]:r.ONE_MINUS_DST_COLOR,[Uf]:r.ONE_MINUS_DST_ALPHA};function k0(H,r0,v0,C0,O0,S5,E5,r9){if(H===o1){g===!0&&(Y0(r.BLEND),g=!1);return}if(g===!1&&(W(r.BLEND),g=!0),H!==bf){if(H!==w||r9!==A){if((E!==E7||U!==E7)&&(r.blendEquation(r.FUNC_ADD),E=E7,U=E7),r9)switch(H){case R7:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zn:r.blendFunc(r.ONE,r.ONE);break;case qn:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jn:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case R7:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qn:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jn:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}L=null,T=null,O=null,V=null,w=H,A=r9}return}O0=O0||r0,S5=S5||v0,E5=E5||C0,(r0!==E||O0!==U)&&(r.blendEquationSeparate(u5[r0],u5[O0]),E=r0,U=O0),(v0!==L||C0!==T||S5!==O||E5!==V)&&(r.blendFuncSeparate(F0[v0],F0[C0],F0[S5],F0[E5]),L=v0,T=C0,O=S5,V=E5),w=H,A=!1}function b5(H,r0){H.side===S2?Y0(r.CULL_FACE):W(r.CULL_FACE);let v0=H.side===w9;r0&&(v0=!v0),I5(v0),H.blending===R7&&H.transparent===!1?k0(o1):k0(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),c.setMask(H.colorWrite);const C0=H.stencilWrite;f.setTest(C0),C0&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),g5(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?W(r.SAMPLE_ALPHA_TO_COVERAGE):Y0(r.SAMPLE_ALPHA_TO_COVERAGE)}function I5(H){P!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),P=H)}function y5(H){H!==Sf?(W(r.CULL_FACE),H!==j&&(H===Yn?r.cullFace(r.BACK):H===Ef?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Y0(r.CULL_FACE),j=H}function N5(H){H!==Z&&(h0&&r.lineWidth(H),Z=H)}function g5(H,r0,v0){H?(W(r.POLYGON_OFFSET_FILL),(G!==r0||Y!==v0)&&(r.polygonOffset(r0,v0),G=r0,Y=v0)):Y0(r.POLYGON_OFFSET_FILL)}function v5(H){H?W(r.SCISSOR_TEST):Y0(r.SCISSOR_TEST)}function w5(H){H===void 0&&(H=r.TEXTURE0+K-1),a0!==H&&(r.activeTexture(H),a0=H)}function D(H,r0,v0){v0===void 0&&(a0===null?v0=r.TEXTURE0+K-1:v0=a0);let C0=f0[v0];C0===void 0&&(C0={type:void 0,texture:void 0},f0[v0]=C0),(C0.type!==H||C0.texture!==r0)&&(a0!==v0&&(r.activeTexture(v0),a0=v0),r.bindTexture(H,r0||w0[H]),C0.type=H,C0.texture=r0)}function C(){const H=f0[a0];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function i0(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function g0(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _0(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function x0(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function B(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function c0(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function t0(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function A0(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function L0(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function D0(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function R0(H){n0.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),n0.copy(H))}function U0(H){p0.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),p0.copy(H))}function j0(H,r0){let v0=p.get(r0);v0===void 0&&(v0=new WeakMap,p.set(r0,v0));let C0=v0.get(H);C0===void 0&&(C0=r.getUniformBlockIndex(r0,H.name),v0.set(H,C0))}function $0(H,r0){const C0=p.get(r0).get(H);d.get(r0)!==C0&&(r.uniformBlockBinding(r0,C0,H.__bindingPointIndex),d.set(r0,C0))}function G5(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},a0=null,f0={},_={},M=new WeakMap,S=[],y=null,g=!1,w=null,E=null,L=null,T=null,U=null,O=null,V=null,A=!1,P=null,j=null,Z=null,G=null,Y=null,n0.set(0,0,r.canvas.width,r.canvas.height),p0.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),f.reset()}return{buffers:{color:c,depth:h,stencil:f},enable:W,disable:Y0,bindFramebuffer:G0,drawBuffers:M0,useProgram:B0,setBlending:k0,setMaterial:b5,setFlipSided:I5,setCullFace:y5,setLineWidth:N5,setPolygonOffset:g5,setScissorTest:v5,activeTexture:w5,bindTexture:D,unbindTexture:C,compressedTexImage2D:i0,compressedTexImage3D:g0,texImage2D:L0,texImage3D:D0,updateUBOMapping:j0,uniformBlockBinding:$0,texStorage2D:t0,texStorage3D:A0,texSubImage2D:_0,texSubImage3D:x0,compressedTexSubImage2D:B,compressedTexSubImage3D:c0,scissor:R0,viewport:U0,reset:G5}}function h_(r,e,t,n,o,a,l){const c=o.isWebGL2,h=o.maxTextures,f=o.maxCubemapSize,d=o.maxTextureSize,p=o.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let S;const y=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,C){return g?new OffscreenCanvas(D,C):w4("canvas")}function E(D,C,i0,g0){let _0=1;if((D.width>g0||D.height>g0)&&(_0=g0/Math.max(D.width,D.height)),_0<1||C===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const x0=C?_d:Math.floor,B=x0(_0*D.width),c0=x0(_0*D.height);S===void 0&&(S=w(B,c0));const t0=i0?w(B,c0):S;return t0.width=B,t0.height=c0,t0.getContext("2d").drawImage(D,0,0,B,c0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+B+"x"+c0+")."),t0}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function L(D){return Ei(D.width)&&Ei(D.height)}function T(D){return c?!1:D.wrapS!==d2||D.wrapT!==d2||D.minFilter!==A9&&D.minFilter!==n2}function U(D,C){return D.generateMipmaps&&C&&D.minFilter!==A9&&D.minFilter!==n2}function O(D){r.generateMipmap(D)}function V(D,C,i0,g0,_0=!1){if(c===!1)return C;if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let x0=C;return C===r.RED&&(i0===r.FLOAT&&(x0=r.R32F),i0===r.HALF_FLOAT&&(x0=r.R16F),i0===r.UNSIGNED_BYTE&&(x0=r.R8)),C===r.RG&&(i0===r.FLOAT&&(x0=r.RG32F),i0===r.HALF_FLOAT&&(x0=r.RG16F),i0===r.UNSIGNED_BYTE&&(x0=r.RG8)),C===r.RGBA&&(i0===r.FLOAT&&(x0=r.RGBA32F),i0===r.HALF_FLOAT&&(x0=r.RGBA16F),i0===r.UNSIGNED_BYTE&&(x0=g0===i5&&_0===!1?r.SRGB8_ALPHA8:r.RGBA8),i0===r.UNSIGNED_SHORT_4_4_4_4&&(x0=r.RGBA4),i0===r.UNSIGNED_SHORT_5_5_5_1&&(x0=r.RGB5_A1)),(x0===r.R16F||x0===r.R32F||x0===r.RG16F||x0===r.RG32F||x0===r.RGBA16F||x0===r.RGBA32F)&&e.get("EXT_color_buffer_float"),x0}function A(D,C,i0){return U(D,i0)===!0||D.isFramebufferTexture&&D.minFilter!==A9&&D.minFilter!==n2?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function P(D){return D===A9||D===Jn||D===g8?r.NEAREST:r.LINEAR}function j(D){const C=D.target;C.removeEventListener("dispose",j),G(C),C.isVideoTexture&&M.delete(C)}function Z(D){const C=D.target;C.removeEventListener("dispose",Z),K(C)}function G(D){const C=n.get(D);if(C.__webglInit===void 0)return;const i0=D.source,g0=y.get(i0);if(g0){const _0=g0[C.__cacheKey];_0.usedTimes--,_0.usedTimes===0&&Y(D),Object.keys(g0).length===0&&y.delete(i0)}n.remove(D)}function Y(D){const C=n.get(D);r.deleteTexture(C.__webglTexture);const i0=D.source,g0=y.get(i0);delete g0[C.__cacheKey],l.memory.textures--}function K(D){const C=D.texture,i0=n.get(D),g0=n.get(C);if(g0.__webglTexture!==void 0&&(r.deleteTexture(g0.__webglTexture),l.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let _0=0;_0<6;_0++)r.deleteFramebuffer(i0.__webglFramebuffer[_0]),i0.__webglDepthbuffer&&r.deleteRenderbuffer(i0.__webglDepthbuffer[_0]);else{if(r.deleteFramebuffer(i0.__webglFramebuffer),i0.__webglDepthbuffer&&r.deleteRenderbuffer(i0.__webglDepthbuffer),i0.__webglMultisampledFramebuffer&&r.deleteFramebuffer(i0.__webglMultisampledFramebuffer),i0.__webglColorRenderbuffer)for(let _0=0;_0<i0.__webglColorRenderbuffer.length;_0++)i0.__webglColorRenderbuffer[_0]&&r.deleteRenderbuffer(i0.__webglColorRenderbuffer[_0]);i0.__webglDepthRenderbuffer&&r.deleteRenderbuffer(i0.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let _0=0,x0=C.length;_0<x0;_0++){const B=n.get(C[_0]);B.__webglTexture&&(r.deleteTexture(B.__webglTexture),l.memory.textures--),n.remove(C[_0])}n.remove(C),n.remove(D)}let h0=0;function Q(){h0=0}function $(){const D=h0;return D>=h&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+h),h0+=1,D}function a0(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function f0(D,C){const i0=n.get(D);if(D.isVideoTexture&&v5(D),D.isRenderTargetTexture===!1&&D.version>0&&i0.__version!==D.version){const g0=D.image;if(g0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(g0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y0(i0,D,C);return}}t.bindTexture(r.TEXTURE_2D,i0.__webglTexture,r.TEXTURE0+C)}function S0(D,C){const i0=n.get(D);if(D.version>0&&i0.__version!==D.version){Y0(i0,D,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,i0.__webglTexture,r.TEXTURE0+C)}function E0(D,C){const i0=n.get(D);if(D.version>0&&i0.__version!==D.version){Y0(i0,D,C);return}t.bindTexture(r.TEXTURE_3D,i0.__webglTexture,r.TEXTURE0+C)}function n0(D,C){const i0=n.get(D);if(D.version>0&&i0.__version!==D.version){G0(i0,D,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,i0.__webglTexture,r.TEXTURE0+C)}const p0={[se]:r.REPEAT,[d2]:r.CLAMP_TO_EDGE,[oe]:r.MIRRORED_REPEAT},y0={[A9]:r.NEAREST,[Jn]:r.NEAREST_MIPMAP_NEAREST,[g8]:r.NEAREST_MIPMAP_LINEAR,[n2]:r.LINEAR,[Kf]:r.LINEAR_MIPMAP_NEAREST,[A4]:r.LINEAR_MIPMAP_LINEAR};function w0(D,C,i0){if(i0?(r.texParameteri(D,r.TEXTURE_WRAP_S,p0[C.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,p0[C.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,p0[C.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,y0[C.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,y0[C.minFilter])):(r.texParameteri(D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==d2||C.wrapT!==d2)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(D,r.TEXTURE_MAG_FILTER,P(C.magFilter)),r.texParameteri(D,r.TEXTURE_MIN_FILTER,P(C.minFilter)),C.minFilter!==A9&&C.minFilter!==n2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const g0=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===A9||C.minFilter!==g8&&C.minFilter!==A4||C.type===C1&&e.has("OES_texture_float_linear")===!1||c===!1&&C.type===b4&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(D,g0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function W(D,C){let i0=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",j));const g0=C.source;let _0=y.get(g0);_0===void 0&&(_0={},y.set(g0,_0));const x0=a0(C);if(x0!==D.__cacheKey){_0[x0]===void 0&&(_0[x0]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,i0=!0),_0[x0].usedTimes++;const B=_0[D.__cacheKey];B!==void 0&&(_0[D.__cacheKey].usedTimes--,B.usedTimes===0&&Y(C)),D.__cacheKey=x0,D.__webglTexture=_0[x0].texture}return i0}function Y0(D,C,i0){let g0=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(g0=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(g0=r.TEXTURE_3D);const _0=W(D,C),x0=C.source;t.bindTexture(g0,D.__webglTexture,r.TEXTURE0+i0);const B=n.get(x0);if(x0.version!==B.__version||_0===!0){t.activeTexture(r.TEXTURE0+i0),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const c0=T(C)&&L(C.image)===!1;let t0=E(C.image,c0,!1,d);t0=w5(C,t0);const A0=L(t0)||c,L0=a.convert(C.format,C.colorSpace);let D0=a.convert(C.type),R0=V(C.internalFormat,L0,D0,C.colorSpace);w0(g0,C,A0);let U0;const j0=C.mipmaps,$0=c&&C.isVideoTexture!==!0,G5=B.__version===void 0||_0===!0,H=A(C,t0,A0);if(C.isDepthTexture)R0=r.DEPTH_COMPONENT,c?C.type===C1?R0=r.DEPTH_COMPONENT32F:C.type===P1?R0=r.DEPTH_COMPONENT24:C.type===P7?R0=r.DEPTH24_STENCIL8:R0=r.DEPTH_COMPONENT16:C.type===C1&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===L1&&R0===r.DEPTH_COMPONENT&&C.type!==Xr&&C.type!==P1&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=P1,D0=a.convert(C.type)),C.format===N7&&R0===r.DEPTH_COMPONENT&&(R0=r.DEPTH_STENCIL,C.type!==P7&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=P7,D0=a.convert(C.type))),G5&&($0?t.texStorage2D(r.TEXTURE_2D,1,R0,t0.width,t0.height):t.texImage2D(r.TEXTURE_2D,0,R0,t0.width,t0.height,0,L0,D0,null));else if(C.isDataTexture)if(j0.length>0&&A0){$0&&G5&&t.texStorage2D(r.TEXTURE_2D,H,R0,j0[0].width,j0[0].height);for(let r0=0,v0=j0.length;r0<v0;r0++)U0=j0[r0],$0?t.texSubImage2D(r.TEXTURE_2D,r0,0,0,U0.width,U0.height,L0,D0,U0.data):t.texImage2D(r.TEXTURE_2D,r0,R0,U0.width,U0.height,0,L0,D0,U0.data);C.generateMipmaps=!1}else $0?(G5&&t.texStorage2D(r.TEXTURE_2D,H,R0,t0.width,t0.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,t0.width,t0.height,L0,D0,t0.data)):t.texImage2D(r.TEXTURE_2D,0,R0,t0.width,t0.height,0,L0,D0,t0.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){$0&&G5&&t.texStorage3D(r.TEXTURE_2D_ARRAY,H,R0,j0[0].width,j0[0].height,t0.depth);for(let r0=0,v0=j0.length;r0<v0;r0++)U0=j0[r0],C.format!==p2?L0!==null?$0?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,r0,0,0,0,U0.width,U0.height,t0.depth,L0,U0.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,r0,R0,U0.width,U0.height,t0.depth,0,U0.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$0?t.texSubImage3D(r.TEXTURE_2D_ARRAY,r0,0,0,0,U0.width,U0.height,t0.depth,L0,D0,U0.data):t.texImage3D(r.TEXTURE_2D_ARRAY,r0,R0,U0.width,U0.height,t0.depth,0,L0,D0,U0.data)}else{$0&&G5&&t.texStorage2D(r.TEXTURE_2D,H,R0,j0[0].width,j0[0].height);for(let r0=0,v0=j0.length;r0<v0;r0++)U0=j0[r0],C.format!==p2?L0!==null?$0?t.compressedTexSubImage2D(r.TEXTURE_2D,r0,0,0,U0.width,U0.height,L0,U0.data):t.compressedTexImage2D(r.TEXTURE_2D,r0,R0,U0.width,U0.height,0,U0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$0?t.texSubImage2D(r.TEXTURE_2D,r0,0,0,U0.width,U0.height,L0,D0,U0.data):t.texImage2D(r.TEXTURE_2D,r0,R0,U0.width,U0.height,0,L0,D0,U0.data)}else if(C.isDataArrayTexture)$0?(G5&&t.texStorage3D(r.TEXTURE_2D_ARRAY,H,R0,t0.width,t0.height,t0.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,t0.width,t0.height,t0.depth,L0,D0,t0.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,R0,t0.width,t0.height,t0.depth,0,L0,D0,t0.data);else if(C.isData3DTexture)$0?(G5&&t.texStorage3D(r.TEXTURE_3D,H,R0,t0.width,t0.height,t0.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,t0.width,t0.height,t0.depth,L0,D0,t0.data)):t.texImage3D(r.TEXTURE_3D,0,R0,t0.width,t0.height,t0.depth,0,L0,D0,t0.data);else if(C.isFramebufferTexture){if(G5)if($0)t.texStorage2D(r.TEXTURE_2D,H,R0,t0.width,t0.height);else{let r0=t0.width,v0=t0.height;for(let C0=0;C0<H;C0++)t.texImage2D(r.TEXTURE_2D,C0,R0,r0,v0,0,L0,D0,null),r0>>=1,v0>>=1}}else if(j0.length>0&&A0){$0&&G5&&t.texStorage2D(r.TEXTURE_2D,H,R0,j0[0].width,j0[0].height);for(let r0=0,v0=j0.length;r0<v0;r0++)U0=j0[r0],$0?t.texSubImage2D(r.TEXTURE_2D,r0,0,0,L0,D0,U0):t.texImage2D(r.TEXTURE_2D,r0,R0,L0,D0,U0);C.generateMipmaps=!1}else $0?(G5&&t.texStorage2D(r.TEXTURE_2D,H,R0,t0.width,t0.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,L0,D0,t0)):t.texImage2D(r.TEXTURE_2D,0,R0,L0,D0,t0);U(C,A0)&&O(g0),B.__version=x0.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function G0(D,C,i0){if(C.image.length!==6)return;const g0=W(D,C),_0=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+i0);const x0=n.get(_0);if(_0.version!==x0.__version||g0===!0){t.activeTexture(r.TEXTURE0+i0),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const B=C.isCompressedTexture||C.image[0].isCompressedTexture,c0=C.image[0]&&C.image[0].isDataTexture,t0=[];for(let r0=0;r0<6;r0++)!B&&!c0?t0[r0]=E(C.image[r0],!1,!0,f):t0[r0]=c0?C.image[r0].image:C.image[r0],t0[r0]=w5(C,t0[r0]);const A0=t0[0],L0=L(A0)||c,D0=a.convert(C.format,C.colorSpace),R0=a.convert(C.type),U0=V(C.internalFormat,D0,R0,C.colorSpace),j0=c&&C.isVideoTexture!==!0,$0=x0.__version===void 0||g0===!0;let G5=A(C,A0,L0);w0(r.TEXTURE_CUBE_MAP,C,L0);let H;if(B){j0&&$0&&t.texStorage2D(r.TEXTURE_CUBE_MAP,G5,U0,A0.width,A0.height);for(let r0=0;r0<6;r0++){H=t0[r0].mipmaps;for(let v0=0;v0<H.length;v0++){const C0=H[v0];C.format!==p2?D0!==null?j0?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0,0,0,C0.width,C0.height,D0,C0.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0,U0,C0.width,C0.height,0,C0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j0?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0,0,0,C0.width,C0.height,D0,R0,C0.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0,U0,C0.width,C0.height,0,D0,R0,C0.data)}}}else{H=C.mipmaps,j0&&$0&&(H.length>0&&G5++,t.texStorage2D(r.TEXTURE_CUBE_MAP,G5,U0,t0[0].width,t0[0].height));for(let r0=0;r0<6;r0++)if(c0){j0?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,0,0,0,t0[r0].width,t0[r0].height,D0,R0,t0[r0].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,0,U0,t0[r0].width,t0[r0].height,0,D0,R0,t0[r0].data);for(let v0=0;v0<H.length;v0++){const O0=H[v0].image[r0].image;j0?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0+1,0,0,O0.width,O0.height,D0,R0,O0.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0+1,U0,O0.width,O0.height,0,D0,R0,O0.data)}}else{j0?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,0,0,0,D0,R0,t0[r0]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,0,U0,D0,R0,t0[r0]);for(let v0=0;v0<H.length;v0++){const C0=H[v0];j0?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0+1,0,0,D0,R0,C0.image[r0]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+r0,v0+1,U0,D0,R0,C0.image[r0])}}}U(C,L0)&&O(r.TEXTURE_CUBE_MAP),x0.__version=_0.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function M0(D,C,i0,g0,_0){const x0=a.convert(i0.format,i0.colorSpace),B=a.convert(i0.type),c0=V(i0.internalFormat,x0,B,i0.colorSpace);n.get(C).__hasExternalTextures||(_0===r.TEXTURE_3D||_0===r.TEXTURE_2D_ARRAY?t.texImage3D(_0,0,c0,C.width,C.height,C.depth,0,x0,B,null):t.texImage2D(_0,0,c0,C.width,C.height,0,x0,B,null)),t.bindFramebuffer(r.FRAMEBUFFER,D),g5(C)?v.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,g0,_0,n.get(i0).__webglTexture,0,N5(C)):(_0===r.TEXTURE_2D||_0>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_0<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,g0,_0,n.get(i0).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function B0(D,C,i0){if(r.bindRenderbuffer(r.RENDERBUFFER,D),C.depthBuffer&&!C.stencilBuffer){let g0=r.DEPTH_COMPONENT16;if(i0||g5(C)){const _0=C.depthTexture;_0&&_0.isDepthTexture&&(_0.type===C1?g0=r.DEPTH_COMPONENT32F:_0.type===P1&&(g0=r.DEPTH_COMPONENT24));const x0=N5(C);g5(C)?v.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,x0,g0,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,x0,g0,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,g0,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,D)}else if(C.depthBuffer&&C.stencilBuffer){const g0=N5(C);i0&&g5(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,g0,r.DEPTH24_STENCIL8,C.width,C.height):g5(C)?v.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,g0,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,D)}else{const g0=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let _0=0;_0<g0.length;_0++){const x0=g0[_0],B=a.convert(x0.format,x0.colorSpace),c0=a.convert(x0.type),t0=V(x0.internalFormat,B,c0,x0.colorSpace),A0=N5(C);i0&&g5(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,A0,t0,C.width,C.height):g5(C)?v.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,A0,t0,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,t0,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function u5(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),f0(C.depthTexture,0);const g0=n.get(C.depthTexture).__webglTexture,_0=N5(C);if(C.depthTexture.format===L1)g5(C)?v.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,g0,0,_0):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,g0,0);else if(C.depthTexture.format===N7)g5(C)?v.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,g0,0,_0):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,g0,0);else throw new Error("Unknown depthTexture format")}function F0(D){const C=n.get(D),i0=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(i0)throw new Error("target.depthTexture not supported in Cube render targets");u5(C.__webglFramebuffer,D)}else if(i0){C.__webglDepthbuffer=[];for(let g0=0;g0<6;g0++)t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[g0]),C.__webglDepthbuffer[g0]=r.createRenderbuffer(),B0(C.__webglDepthbuffer[g0],D,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),B0(C.__webglDepthbuffer,D,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function k0(D,C,i0){const g0=n.get(D);C!==void 0&&M0(g0.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),i0!==void 0&&F0(D)}function b5(D){const C=D.texture,i0=n.get(D),g0=n.get(C);D.addEventListener("dispose",Z),D.isWebGLMultipleRenderTargets!==!0&&(g0.__webglTexture===void 0&&(g0.__webglTexture=r.createTexture()),g0.__version=C.version,l.memory.textures++);const _0=D.isWebGLCubeRenderTarget===!0,x0=D.isWebGLMultipleRenderTargets===!0,B=L(D)||c;if(_0){i0.__webglFramebuffer=[];for(let c0=0;c0<6;c0++)i0.__webglFramebuffer[c0]=r.createFramebuffer()}else{if(i0.__webglFramebuffer=r.createFramebuffer(),x0)if(o.drawBuffers){const c0=D.texture;for(let t0=0,A0=c0.length;t0<A0;t0++){const L0=n.get(c0[t0]);L0.__webglTexture===void 0&&(L0.__webglTexture=r.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&D.samples>0&&g5(D)===!1){const c0=x0?C:[C];i0.__webglMultisampledFramebuffer=r.createFramebuffer(),i0.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,i0.__webglMultisampledFramebuffer);for(let t0=0;t0<c0.length;t0++){const A0=c0[t0];i0.__webglColorRenderbuffer[t0]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,i0.__webglColorRenderbuffer[t0]);const L0=a.convert(A0.format,A0.colorSpace),D0=a.convert(A0.type),R0=V(A0.internalFormat,L0,D0,A0.colorSpace,D.isXRRenderTarget===!0),U0=N5(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,U0,R0,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+t0,r.RENDERBUFFER,i0.__webglColorRenderbuffer[t0])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(i0.__webglDepthRenderbuffer=r.createRenderbuffer(),B0(i0.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_0){t.bindTexture(r.TEXTURE_CUBE_MAP,g0.__webglTexture),w0(r.TEXTURE_CUBE_MAP,C,B);for(let c0=0;c0<6;c0++)M0(i0.__webglFramebuffer[c0],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+c0);U(C,B)&&O(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(x0){const c0=D.texture;for(let t0=0,A0=c0.length;t0<A0;t0++){const L0=c0[t0],D0=n.get(L0);t.bindTexture(r.TEXTURE_2D,D0.__webglTexture),w0(r.TEXTURE_2D,L0,B),M0(i0.__webglFramebuffer,D,L0,r.COLOR_ATTACHMENT0+t0,r.TEXTURE_2D),U(L0,B)&&O(r.TEXTURE_2D)}t.unbindTexture()}else{let c0=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(c?c0=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(c0,g0.__webglTexture),w0(c0,C,B),M0(i0.__webglFramebuffer,D,C,r.COLOR_ATTACHMENT0,c0),U(C,B)&&O(c0),t.unbindTexture()}D.depthBuffer&&F0(D)}function I5(D){const C=L(D)||c,i0=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let g0=0,_0=i0.length;g0<_0;g0++){const x0=i0[g0];if(U(x0,C)){const B=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,c0=n.get(x0).__webglTexture;t.bindTexture(B,c0),O(B),t.unbindTexture()}}}function y5(D){if(c&&D.samples>0&&g5(D)===!1){const C=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],i0=D.width,g0=D.height;let _0=r.COLOR_BUFFER_BIT;const x0=[],B=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,c0=n.get(D),t0=D.isWebGLMultipleRenderTargets===!0;if(t0)for(let A0=0;A0<C.length;A0++)t.bindFramebuffer(r.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+A0,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,c0.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+A0,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,c0.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,c0.__webglFramebuffer);for(let A0=0;A0<C.length;A0++){x0.push(r.COLOR_ATTACHMENT0+A0),D.depthBuffer&&x0.push(B);const L0=c0.__ignoreDepthValues!==void 0?c0.__ignoreDepthValues:!1;if(L0===!1&&(D.depthBuffer&&(_0|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&(_0|=r.STENCIL_BUFFER_BIT)),t0&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,c0.__webglColorRenderbuffer[A0]),L0===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[B]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[B])),t0){const D0=n.get(C[A0]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D0,0)}r.blitFramebuffer(0,0,i0,g0,0,0,i0,g0,_0,r.NEAREST),_&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,x0)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),t0)for(let A0=0;A0<C.length;A0++){t.bindFramebuffer(r.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+A0,r.RENDERBUFFER,c0.__webglColorRenderbuffer[A0]);const L0=n.get(C[A0]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,c0.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+A0,r.TEXTURE_2D,L0,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,c0.__webglMultisampledFramebuffer)}}function N5(D){return Math.min(p,D.samples)}function g5(D){const C=n.get(D);return c&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function v5(D){const C=l.render.frame;M.get(D)!==C&&(M.set(D,C),D.update())}function w5(D,C){const i0=D.colorSpace,g0=D.format,_0=D.type;return D.isCompressedTexture===!0||D.format===le||i0!==E2&&i0!==U1&&(i0===i5?c===!1?e.has("EXT_sRGB")===!0&&g0===p2?(D.format=le,D.minFilter=n2,D.generateMipmaps=!1):C=Qr.sRGBToLinear(C):(g0!==p2||_0!==D1)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",i0)),C}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=f0,this.setTexture2DArray=S0,this.setTexture3D=E0,this.setTextureCube=n0,this.rebindTextures=k0,this.setupRenderTarget=b5,this.updateRenderTargetMipmap=I5,this.updateMultisampleRenderTarget=y5,this.setupDepthRenderbuffer=F0,this.setupFrameBufferTexture=M0,this.useMultisampledRTT=g5}function f_(r,e,t){const n=t.isWebGL2;function o(a,l=U1){let c;if(a===D1)return r.UNSIGNED_BYTE;if(a===td)return r.UNSIGNED_SHORT_4_4_4_4;if(a===nd)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Jf)return r.BYTE;if(a===$f)return r.SHORT;if(a===Xr)return r.UNSIGNED_SHORT;if(a===ed)return r.INT;if(a===P1)return r.UNSIGNED_INT;if(a===C1)return r.FLOAT;if(a===b4)return n?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===id)return r.ALPHA;if(a===p2)return r.RGBA;if(a===rd)return r.LUMINANCE;if(a===sd)return r.LUMINANCE_ALPHA;if(a===L1)return r.DEPTH_COMPONENT;if(a===N7)return r.DEPTH_STENCIL;if(a===le)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===od)return r.RED;if(a===ad)return r.RED_INTEGER;if(a===ld)return r.RG;if(a===cd)return r.RG_INTEGER;if(a===ud)return r.RGBA_INTEGER;if(a===v8||a===_8||a===y8||a===M8)if(l===i5)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===v8)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===_8)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===y8)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===M8)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===v8)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===_8)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===y8)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===M8)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===$n||a===ei||a===ti||a===ni)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===$n)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ei)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ti)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ni)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===hd)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ii||a===ri)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ii)return l===i5?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ri)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===si||a===oi||a===ai||a===li||a===ci||a===ui||a===hi||a===fi||a===di||a===pi||a===mi||a===gi||a===vi||a===_i)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===si)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===oi)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ai)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===li)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ci)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ui)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hi)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fi)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===di)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pi)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mi)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gi)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vi)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_i)return l===i5?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===x8)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===x8)return l===i5?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===fd||a===yi||a===Mi||a===xi)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===x8)return c.COMPRESSED_RED_RGTC1_EXT;if(a===yi)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Mi)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===xi)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===P7?n?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class d_ extends k9{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class b9 extends X5{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class X8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new b9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new b9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new b9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const S of e.hand.values()){const y=t.getJointPose(S,n),g=this._getHandJoint(f,S);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],v=d.position.distanceTo(p.position),_=.02,M=.005;f.inputState.pinching&&v>_+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=_-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new b9;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class m_ extends U9{constructor(e,t,n,o,a,l,c,h,f,d){if(d=d!==void 0?d:L1,d!==L1&&d!==N7)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===L1&&(n=P1),n===void 0&&d===N7&&(n=P7),super(null,o,a,l,c,h,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:A9,this.minFilter=h!==void 0?h:A9,this.flipY=!1,this.generateMipmaps=!1}}class g_ extends O1{constructor(e,t){super();const n=this;let o=null,a=1,l=null,c="local-floor",h=1,f=null,d=null,p=null,v=null,_=null,M=null;const S=t.getContextAttributes();let y=null,g=null;const w=[],E=[],L=new Set,T=new Map,U=new k9;U.layers.enable(1),U.viewport=new B5;const O=new k9;O.layers.enable(2),O.viewport=new B5;const V=[U,O],A=new d_;A.layers.enable(1),A.layers.enable(2);let P=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n0){let p0=w[n0];return p0===void 0&&(p0=new X8,w[n0]=p0),p0.getTargetRaySpace()},this.getControllerGrip=function(n0){let p0=w[n0];return p0===void 0&&(p0=new X8,w[n0]=p0),p0.getGripSpace()},this.getHand=function(n0){let p0=w[n0];return p0===void 0&&(p0=new X8,w[n0]=p0),p0.getHandSpace()};function Z(n0){const p0=E.indexOf(n0.inputSource);if(p0===-1)return;const y0=w[p0];y0!==void 0&&(y0.update(n0.inputSource,n0.frame,f||l),y0.dispatchEvent({type:n0.type,data:n0.inputSource}))}function G(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",Y);for(let n0=0;n0<w.length;n0++){const p0=E[n0];p0!==null&&(E[n0]=null,w[n0].disconnect(p0))}P=null,j=null,e.setRenderTarget(y),_=null,v=null,p=null,o=null,g=null,E0.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n0){a=n0,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n0){c=n0,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(n0){f=n0},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(n0){if(o=n0,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",G),o.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const p0={antialias:o.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,p0),o.updateRenderState({baseLayer:_}),g=new N1(_.framebufferWidth,_.framebufferHeight,{format:p2,type:D1,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let p0=null,y0=null,w0=null;S.depth&&(w0=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,p0=S.stencil?N7:L1,y0=S.stencil?P7:P1);const W={colorFormat:t.RGBA8,depthFormat:w0,scaleFactor:a};p=new XRWebGLBinding(o,t),v=p.createProjectionLayer(W),o.updateRenderState({layers:[v]}),g=new N1(v.textureWidth,v.textureHeight,{format:p2,type:D1,depthTexture:new m_(v.textureWidth,v.textureHeight,y0,void 0,void 0,void 0,void 0,void 0,void 0,p0),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Y0=e.properties.get(g);Y0.__ignoreDepthValues=v.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await o.requestReferenceSpace(c),E0.setContext(o),E0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function Y(n0){for(let p0=0;p0<n0.removed.length;p0++){const y0=n0.removed[p0],w0=E.indexOf(y0);w0>=0&&(E[w0]=null,w[w0].disconnect(y0))}for(let p0=0;p0<n0.added.length;p0++){const y0=n0.added[p0];let w0=E.indexOf(y0);if(w0===-1){for(let Y0=0;Y0<w.length;Y0++)if(Y0>=E.length){E.push(y0),w0=Y0;break}else if(E[Y0]===null){E[Y0]=y0,w0=Y0;break}if(w0===-1)break}const W=w[w0];W&&W.connect(y0)}}const K=new N,h0=new N;function Q(n0,p0,y0){K.setFromMatrixPosition(p0.matrixWorld),h0.setFromMatrixPosition(y0.matrixWorld);const w0=K.distanceTo(h0),W=p0.projectionMatrix.elements,Y0=y0.projectionMatrix.elements,G0=W[14]/(W[10]-1),M0=W[14]/(W[10]+1),B0=(W[9]+1)/W[5],u5=(W[9]-1)/W[5],F0=(W[8]-1)/W[0],k0=(Y0[8]+1)/Y0[0],b5=G0*F0,I5=G0*k0,y5=w0/(-F0+k0),N5=y5*-F0;p0.matrixWorld.decompose(n0.position,n0.quaternion,n0.scale),n0.translateX(N5),n0.translateZ(y5),n0.matrixWorld.compose(n0.position,n0.quaternion,n0.scale),n0.matrixWorldInverse.copy(n0.matrixWorld).invert();const g5=G0+y5,v5=M0+y5,w5=b5-N5,D=I5+(w0-N5),C=B0*M0/v5*g5,i0=u5*M0/v5*g5;n0.projectionMatrix.makePerspective(w5,D,C,i0,g5,v5),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert()}function $(n0,p0){p0===null?n0.matrixWorld.copy(n0.matrix):n0.matrixWorld.multiplyMatrices(p0.matrixWorld,n0.matrix),n0.matrixWorldInverse.copy(n0.matrixWorld).invert()}this.updateCamera=function(n0){if(o===null)return;A.near=O.near=U.near=n0.near,A.far=O.far=U.far=n0.far,(P!==A.near||j!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,j=A.far);const p0=n0.parent,y0=A.cameras;$(A,p0);for(let w0=0;w0<y0.length;w0++)$(y0[w0],p0);y0.length===2?Q(A,U,O):A.projectionMatrix.copy(U.projectionMatrix),a0(n0,A,p0)};function a0(n0,p0,y0){y0===null?n0.matrix.copy(p0.matrixWorld):(n0.matrix.copy(y0.matrixWorld),n0.matrix.invert(),n0.matrix.multiply(p0.matrixWorld)),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.updateMatrixWorld(!0);const w0=n0.children;for(let W=0,Y0=w0.length;W<Y0;W++)w0[W].updateMatrixWorld(!0);n0.projectionMatrix.copy(p0.projectionMatrix),n0.projectionMatrixInverse.copy(p0.projectionMatrixInverse),n0.isPerspectiveCamera&&(n0.fov=ce*2*Math.atan(1/n0.projectionMatrix.elements[5]),n0.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&_===null))return h},this.setFoveation=function(n0){h=n0,v!==null&&(v.fixedFoveation=n0),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=n0)},this.getPlanes=function(){return L};let f0=null;function S0(n0,p0){if(d=p0.getViewerPose(f||l),M=p0,d!==null){const y0=d.views;_!==null&&(e.setRenderTargetFramebuffer(g,_.framebuffer),e.setRenderTarget(g));let w0=!1;y0.length!==A.cameras.length&&(A.cameras.length=0,w0=!0);for(let W=0;W<y0.length;W++){const Y0=y0[W];let G0=null;if(_!==null)G0=_.getViewport(Y0);else{const B0=p.getViewSubImage(v,Y0);G0=B0.viewport,W===0&&(e.setRenderTargetTextures(g,B0.colorTexture,v.ignoreDepthValues?void 0:B0.depthStencilTexture),e.setRenderTarget(g))}let M0=V[W];M0===void 0&&(M0=new k9,M0.layers.enable(W),M0.viewport=new B5,V[W]=M0),M0.matrix.fromArray(Y0.transform.matrix),M0.matrix.decompose(M0.position,M0.quaternion,M0.scale),M0.projectionMatrix.fromArray(Y0.projectionMatrix),M0.projectionMatrixInverse.copy(M0.projectionMatrix).invert(),M0.viewport.set(G0.x,G0.y,G0.width,G0.height),W===0&&(A.matrix.copy(M0.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),w0===!0&&A.cameras.push(M0)}}for(let y0=0;y0<w.length;y0++){const w0=E[y0],W=w[y0];w0!==null&&W!==void 0&&W.update(w0,p0,f||l)}if(f0&&f0(n0,p0),p0.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:p0.detectedPlanes});let y0=null;for(const w0 of L)p0.detectedPlanes.has(w0)||(y0===null&&(y0=[]),y0.push(w0));if(y0!==null)for(const w0 of y0)L.delete(w0),T.delete(w0),n.dispatchEvent({type:"planeremoved",data:w0});for(const w0 of p0.detectedPlanes)if(!L.has(w0))L.add(w0),T.set(w0,p0.lastChangedTime),n.dispatchEvent({type:"planeadded",data:w0});else{const W=T.get(w0);w0.lastChangedTime>W&&(T.set(w0,w0.lastChangedTime),n.dispatchEvent({type:"planechanged",data:w0}))}}M=null}const E0=new ss;E0.setAnimationLoop(S0),this.setAnimationLoop=function(n0){f0=n0},this.dispose=function(){}}}function v_(r,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,ns(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function o(y,g,w,E,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(y,g):g.isMeshToonMaterial?(a(y,g),p(y,g)):g.isMeshPhongMaterial?(a(y,g),d(y,g)):g.isMeshStandardMaterial?(a(y,g),v(y,g),g.isMeshPhysicalMaterial&&_(y,g,L)):g.isMeshMatcapMaterial?(a(y,g),M(y,g)):g.isMeshDepthMaterial?a(y,g):g.isMeshDistanceMaterial?(a(y,g),S(y,g)):g.isMeshNormalMaterial?a(y,g):g.isLineBasicMaterial?(l(y,g),g.isLineDashedMaterial&&c(y,g)):g.isPointsMaterial?h(y,g,w,E):g.isSpriteMaterial?f(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===w9&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===w9&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const w=e.get(g).envMap;if(w&&(y.envMap.value=w,y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;const E=r.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*E,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function c(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,w,E){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*w,y.scale.value=E*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function p(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function _(y,g,w){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===w9&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,g){g.matcap&&(y.matcap.value=g.matcap)}function S(y,g){const w=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function __(r,e,t,n){let o={},a={},l=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(w,E){const L=E.program;n.uniformBlockBinding(w,L)}function f(w,E){let L=o[w.id];L===void 0&&(M(w),L=d(w),o[w.id]=L,w.addEventListener("dispose",y));const T=E.program;n.updateUBOMapping(w,T);const U=e.render.frame;a[w.id]!==U&&(v(w),a[w.id]=U)}function d(w){const E=p();w.__bindingPointIndex=E;const L=r.createBuffer(),T=w.__size,U=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,T,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,L),L}function p(){for(let w=0;w<c;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const E=o[w.id],L=w.uniforms,T=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let U=0,O=L.length;U<O;U++){const V=L[U];if(_(V,U,T)===!0){const A=V.__offset,P=Array.isArray(V.value)?V.value:[V.value];let j=0;for(let Z=0;Z<P.length;Z++){const G=P[Z],Y=S(G);typeof G=="number"?(V.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,A+j,V.__data)):G.isMatrix3?(V.__data[0]=G.elements[0],V.__data[1]=G.elements[1],V.__data[2]=G.elements[2],V.__data[3]=G.elements[0],V.__data[4]=G.elements[3],V.__data[5]=G.elements[4],V.__data[6]=G.elements[5],V.__data[7]=G.elements[0],V.__data[8]=G.elements[6],V.__data[9]=G.elements[7],V.__data[10]=G.elements[8],V.__data[11]=G.elements[0]):(G.toArray(V.__data,j),j+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,A,V.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(w,E,L){const T=w.value;if(L[E]===void 0){if(typeof T=="number")L[E]=T;else{const U=Array.isArray(T)?T:[T],O=[];for(let V=0;V<U.length;V++)O.push(U[V].clone());L[E]=O}return!0}else if(typeof T=="number"){if(L[E]!==T)return L[E]=T,!0}else{const U=Array.isArray(L[E])?L[E]:[L[E]],O=Array.isArray(T)?T:[T];for(let V=0;V<U.length;V++){const A=U[V];if(A.equals(O[V])===!1)return A.copy(O[V]),!0}}return!1}function M(w){const E=w.uniforms;let L=0;const T=16;let U=0;for(let O=0,V=E.length;O<V;O++){const A=E[O],P={boundary:0,storage:0},j=Array.isArray(A.value)?A.value:[A.value];for(let Z=0,G=j.length;Z<G;Z++){const Y=j[Z],K=S(Y);P.boundary+=K.boundary,P.storage+=K.storage}if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=L,O>0){U=L%T;const Z=T-U;U!==0&&Z-P.boundary<0&&(L+=T-U,A.__offset=L)}L+=P.storage}return U=L%T,U>0&&(L+=T-U),w.__size=L,w.__cache={},this}function S(w){const E={boundary:0,storage:0};return typeof w=="number"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function y(w){const E=w.target;E.removeEventListener("dispose",y);const L=l.indexOf(E.__bindingPointIndex);l.splice(L,1),r.deleteBuffer(o[E.id]),delete o[E.id],delete a[E.id]}function g(){for(const w in o)r.deleteBuffer(o[w]);l=[],o={},a={}}return{bind:h,update:f,dispose:g}}function y_(){const r=w4("canvas");return r.style.display="block",r}class us{constructor(e={}){const{canvas:t=y_(),context:n=null,depth:o=!0,stencil:a=!0,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let v;n!==null?v=n.getContextAttributes().alpha:v=l;let _=null,M=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=i5,this.useLegacyLights=!0,this.toneMapping=W2,this.toneMappingExposure=1;const g=this;let w=!1,E=0,L=0,T=null,U=-1,O=null;const V=new B5,A=new B5;let P=null,j=t.width,Z=t.height,G=1,Y=null,K=null;const h0=new B5(0,0,j,Z),Q=new B5(0,0,j,Z);let $=!1;const a0=new _e;let f0=!1,S0=!1,E0=null;const n0=new L5,p0=new N,y0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function w0(){return T===null?G:1}let W=n;function Y0(I,J){for(let s0=0;s0<I.length;s0++){const q=I[s0],l0=t.getContext(q,J);if(l0!==null)return l0}return null}try{const I={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${me}`),t.addEventListener("webglcontextlost",U0,!1),t.addEventListener("webglcontextrestored",j0,!1),t.addEventListener("webglcontextcreationerror",$0,!1),W===null){const J=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&J.shift(),W=Y0(J,I),W===null)throw Y0(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let G0,M0,B0,u5,F0,k0,b5,I5,y5,N5,g5,v5,w5,D,C,i0,g0,_0,x0,B,c0,t0,A0,L0;function D0(){G0=new Cg(W),M0=new Ag(W,G0,e),G0.init(M0),t0=new f_(W,G0,M0),B0=new u_(W,G0,M0),u5=new Ug(W),F0=new Qv,k0=new h_(W,G0,B0,F0,M0,t0,u5),b5=new wg(g),I5=new Pg(g),y5=new Xd(W,M0),A0=new Sg(W,G0,y5,M0),N5=new Lg(W,y5,u5,A0),g5=new Og(W,N5,y5,u5),x0=new Fg(W,M0,k0),i0=new bg(F0),v5=new jv(g,b5,I5,G0,M0,A0,i0),w5=new v_(g,F0),D=new Jv,C=new r_(G0,M0),_0=new xg(g,b5,I5,B0,g5,v,h),g0=new c_(g,g5,M0),L0=new __(W,u5,M0,B0),B=new Eg(W,G0,u5,M0),c0=new Ig(W,G0,u5,M0),u5.programs=v5.programs,g.capabilities=M0,g.extensions=G0,g.properties=F0,g.renderLists=D,g.shadowMap=g0,g.state=B0,g.info=u5}D0();const R0=new g_(g,W);this.xr=R0,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const I=G0.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=G0.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(j,Z,!1))},this.getSize=function(I){return I.set(j,Z)},this.setSize=function(I,J,s0=!0){if(R0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=I,Z=J,t.width=Math.floor(I*G),t.height=Math.floor(J*G),s0===!0&&(t.style.width=I+"px",t.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(j*G,Z*G).floor()},this.setDrawingBufferSize=function(I,J,s0){j=I,Z=J,G=s0,t.width=Math.floor(I*s0),t.height=Math.floor(J*s0),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(h0)},this.setViewport=function(I,J,s0,q){I.isVector4?h0.set(I.x,I.y,I.z,I.w):h0.set(I,J,s0,q),B0.viewport(V.copy(h0).multiplyScalar(G).floor())},this.getScissor=function(I){return I.copy(Q)},this.setScissor=function(I,J,s0,q){I.isVector4?Q.set(I.x,I.y,I.z,I.w):Q.set(I,J,s0,q),B0.scissor(A.copy(Q).multiplyScalar(G).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(I){B0.setScissorTest($=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){K=I},this.getClearColor=function(I){return I.copy(_0.getClearColor())},this.setClearColor=function(){_0.setClearColor.apply(_0,arguments)},this.getClearAlpha=function(){return _0.getClearAlpha()},this.setClearAlpha=function(){_0.setClearAlpha.apply(_0,arguments)},this.clear=function(I=!0,J=!0,s0=!0){let q=0;I&&(q|=W.COLOR_BUFFER_BIT),J&&(q|=W.DEPTH_BUFFER_BIT),s0&&(q|=W.STENCIL_BUFFER_BIT),W.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",U0,!1),t.removeEventListener("webglcontextrestored",j0,!1),t.removeEventListener("webglcontextcreationerror",$0,!1),D.dispose(),C.dispose(),F0.dispose(),b5.dispose(),I5.dispose(),g5.dispose(),A0.dispose(),L0.dispose(),v5.dispose(),R0.dispose(),R0.removeEventListener("sessionstart",O0),R0.removeEventListener("sessionend",S5),E0&&(E0.dispose(),E0=null),E5.stop()};function U0(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function j0(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const I=u5.autoReset,J=g0.enabled,s0=g0.autoUpdate,q=g0.needsUpdate,l0=g0.type;D0(),u5.autoReset=I,g0.enabled=J,g0.autoUpdate=s0,g0.needsUpdate=q,g0.type=l0}function $0(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function G5(I){const J=I.target;J.removeEventListener("dispose",G5),H(J)}function H(I){r0(I),F0.remove(I)}function r0(I){const J=F0.get(I).programs;J!==void 0&&(J.forEach(function(s0){v5.releaseProgram(s0)}),I.isShaderMaterial&&v5.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,s0,q,l0,z0){J===null&&(J=y0);const W0=l0.isMesh&&l0.matrixWorld.determinant()<0,Q0=H7(I,J,s0,q,l0);B0.setMaterial(q,W0);let e5=s0.index,r5=1;q.wireframe===!0&&(e5=N5.getWireframeAttribute(s0),r5=2);const s5=s0.drawRange,l5=s0.attributes.position;let M5=s5.start*r5,j5=(s5.start+s5.count)*r5;z0!==null&&(M5=Math.max(M5,z0.start*r5),j5=Math.min(j5,(z0.start+z0.count)*r5)),e5!==null?(M5=Math.max(M5,0),j5=Math.min(j5,e5.count)):l5!=null&&(M5=Math.max(M5,0),j5=Math.min(j5,l5.count));const D9=j5-M5;if(D9<0||D9===1/0)return;A0.setup(l0,q,Q0,s0,e5);let X9,k5=B;if(e5!==null&&(X9=y5.get(e5),k5=c0,k5.setIndex(X9)),l0.isMesh)q.wireframe===!0?(B0.setLineWidth(q.wireframeLinewidth*w0()),k5.setMode(W.LINES)):k5.setMode(W.TRIANGLES);else if(l0.isLine){let h5=q.linewidth;h5===void 0&&(h5=1),B0.setLineWidth(h5*w0()),l0.isLineSegments?k5.setMode(W.LINES):l0.isLineLoop?k5.setMode(W.LINE_LOOP):k5.setMode(W.LINE_STRIP)}else l0.isPoints?k5.setMode(W.POINTS):l0.isSprite&&k5.setMode(W.TRIANGLES);if(l0.isInstancedMesh)k5.renderInstances(M5,D9,l0.count);else if(s0.isInstancedBufferGeometry){const h5=s0._maxInstanceCount!==void 0?s0._maxInstanceCount:1/0,W7=Math.min(s0.instanceCount,h5);k5.renderInstances(M5,D9,W7)}else k5.render(M5,D9)},this.compile=function(I,J){function s0(q,l0,z0){q.transparent===!0&&q.side===S2&&q.forceSinglePass===!1?(q.side=w9,q.needsUpdate=!0,V2(q,l0,z0),q.side=l1,q.needsUpdate=!0,V2(q,l0,z0),q.side=S2):V2(q,l0,z0)}M=C.get(I),M.init(),y.push(M),I.traverseVisible(function(q){q.isLight&&q.layers.test(J.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(g.useLegacyLights),I.traverse(function(q){const l0=q.material;if(l0)if(Array.isArray(l0))for(let z0=0;z0<l0.length;z0++){const W0=l0[z0];s0(W0,I,q)}else s0(l0,I,q)}),y.pop(),M=null};let v0=null;function C0(I){v0&&v0(I)}function O0(){E5.stop()}function S5(){E5.start()}const E5=new ss;E5.setAnimationLoop(C0),typeof self<"u"&&E5.setContext(self),this.setAnimationLoop=function(I){v0=I,R0.setAnimationLoop(I),I===null?E5.stop():E5.start()},R0.addEventListener("sessionstart",O0),R0.addEventListener("sessionend",S5),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),R0.enabled===!0&&R0.isPresenting===!0&&(R0.cameraAutoUpdate===!0&&R0.updateCamera(J),J=R0.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,J,T),M=C.get(I,y.length),M.init(),y.push(M),n0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),a0.setFromProjectionMatrix(n0),S0=this.localClippingEnabled,f0=i0.init(this.clippingPlanes,S0),_=D.get(I,S.length),_.init(),S.push(_),r9(I,J,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,K),f0===!0&&i0.beginShadows();const s0=M.state.shadowsArray;if(g0.render(s0,I,J),f0===!0&&i0.endShadows(),this.info.autoReset===!0&&this.info.reset(),_0.render(_,I),M.setupLights(g.useLegacyLights),J.isArrayCamera){const q=J.cameras;for(let l0=0,z0=q.length;l0<z0;l0++){const W0=q[l0];r2(_,I,W0,W0.viewport)}}else r2(_,I,J);T!==null&&(k0.updateMultisampleRenderTarget(T),k0.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(g,I,J),A0.resetDefaultState(),U=-1,O=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function r9(I,J,s0,q){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)s0=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)M.pushLight(I),I.castShadow&&M.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||a0.intersectsSprite(I)){q&&p0.setFromMatrixPosition(I.matrixWorld).applyMatrix4(n0);const W0=g5.update(I),Q0=I.material;Q0.visible&&_.push(I,W0,Q0,s0,p0.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||a0.intersectsObject(I))){I.isSkinnedMesh&&I.skeleton.frame!==u5.render.frame&&(I.skeleton.update(),I.skeleton.frame=u5.render.frame);const W0=g5.update(I),Q0=I.material;if(q&&(W0.boundingSphere===null&&W0.computeBoundingSphere(),p0.copy(W0.boundingSphere.center).applyMatrix4(I.matrixWorld).applyMatrix4(n0)),Array.isArray(Q0)){const e5=W0.groups;for(let r5=0,s5=e5.length;r5<s5;r5++){const l5=e5[r5],M5=Q0[l5.materialIndex];M5&&M5.visible&&_.push(I,W0,M5,s0,p0.z,l5)}}else Q0.visible&&_.push(I,W0,Q0,s0,p0.z,null)}}const z0=I.children;for(let W0=0,Q0=z0.length;W0<Q0;W0++)r9(z0[W0],J,s0,q)}function r2(I,J,s0,q){const l0=I.opaque,z0=I.transmissive,W0=I.transparent;M.setupLightsView(s0),f0===!0&&i0.setGlobalState(g.clippingPlanes,s0),z0.length>0&&H5(l0,z0,J,s0),q&&B0.viewport(V.copy(q)),l0.length>0&&T9(l0,J,s0),z0.length>0&&T9(z0,J,s0),W0.length>0&&T9(W0,J,s0),B0.buffers.depth.setTest(!0),B0.buffers.depth.setMask(!0),B0.buffers.color.setMask(!0),B0.setPolygonOffset(!1)}function H5(I,J,s0,q){if(E0===null){const Q0=M0.isWebGL2;E0=new N1(1024,1024,{generateMipmaps:!0,type:G0.has("EXT_color_buffer_half_float")?b4:D1,minFilter:A4,samples:Q0&&c===!0?4:0})}const l0=g.getRenderTarget();g.setRenderTarget(E0),g.clear();const z0=g.toneMapping;g.toneMapping=W2,T9(I,s0,q),k0.updateMultisampleRenderTarget(E0),k0.updateRenderTargetMipmap(E0);let W0=!1;for(let Q0=0,e5=J.length;Q0<e5;Q0++){const r5=J[Q0],s5=r5.object,l5=r5.geometry,M5=r5.material,j5=r5.group;if(M5.side===S2&&s5.layers.test(q.layers)){const D9=M5.side;M5.side=w9,M5.needsUpdate=!0,V9(s5,s0,q,l5,M5,j5),M5.side=D9,M5.needsUpdate=!0,W0=!0}}W0===!0&&(k0.updateMultisampleRenderTarget(E0),k0.updateRenderTargetMipmap(E0)),g.setRenderTarget(l0),g.toneMapping=z0}function T9(I,J,s0){const q=J.isScene===!0?J.overrideMaterial:null;for(let l0=0,z0=I.length;l0<z0;l0++){const W0=I[l0],Q0=W0.object,e5=W0.geometry,r5=q===null?W0.material:q,s5=W0.group;Q0.layers.test(s0.layers)&&V9(Q0,J,s0,e5,r5,s5)}}function V9(I,J,s0,q,l0,z0){I.onBeforeRender(g,J,s0,q,l0,z0),I.modelViewMatrix.multiplyMatrices(s0.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),l0.onBeforeRender(g,J,s0,q,I,z0),l0.transparent===!0&&l0.side===S2&&l0.forceSinglePass===!1?(l0.side=w9,l0.needsUpdate=!0,g.renderBufferDirect(s0,J,q,l0,I,z0),l0.side=l1,l0.needsUpdate=!0,g.renderBufferDirect(s0,J,q,l0,I,z0),l0.side=S2):g.renderBufferDirect(s0,J,q,l0,I,z0),I.onAfterRender(g,J,s0,q,l0,z0)}function V2(I,J,s0){J.isScene!==!0&&(J=y0);const q=F0.get(I),l0=M.state.lights,z0=M.state.shadowsArray,W0=l0.state.version,Q0=v5.getParameters(I,l0.state,z0,J,s0),e5=v5.getProgramCacheKey(Q0);let r5=q.programs;q.environment=I.isMeshStandardMaterial?J.environment:null,q.fog=J.fog,q.envMap=(I.isMeshStandardMaterial?I5:b5).get(I.envMap||q.environment),r5===void 0&&(I.addEventListener("dispose",G5),r5=new Map,q.programs=r5);let s5=r5.get(e5);if(s5!==void 0){if(q.currentProgram===s5&&q.lightsStateVersion===W0)return U4(I,Q0),s5}else Q0.uniforms=v5.getUniforms(I),I.onBuild(s0,Q0,g),I.onBeforeCompile(Q0,g),s5=v5.acquireProgram(Q0,e5),r5.set(e5,s5),q.uniforms=Q0.uniforms;const l5=q.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(l5.clippingPlanes=i0.uniform),U4(I,Q0),q.needsLights=o6(I),q.lightsStateVersion=W0,q.needsLights&&(l5.ambientLightColor.value=l0.state.ambient,l5.lightProbe.value=l0.state.probe,l5.directionalLights.value=l0.state.directional,l5.directionalLightShadows.value=l0.state.directionalShadow,l5.spotLights.value=l0.state.spot,l5.spotLightShadows.value=l0.state.spotShadow,l5.rectAreaLights.value=l0.state.rectArea,l5.ltc_1.value=l0.state.rectAreaLTC1,l5.ltc_2.value=l0.state.rectAreaLTC2,l5.pointLights.value=l0.state.point,l5.pointLightShadows.value=l0.state.pointShadow,l5.hemisphereLights.value=l0.state.hemi,l5.directionalShadowMap.value=l0.state.directionalShadowMap,l5.directionalShadowMatrix.value=l0.state.directionalShadowMatrix,l5.spotShadowMap.value=l0.state.spotShadowMap,l5.spotLightMatrix.value=l0.state.spotLightMatrix,l5.spotLightMap.value=l0.state.spotLightMap,l5.pointShadowMap.value=l0.state.pointShadowMap,l5.pointShadowMatrix.value=l0.state.pointShadowMatrix);const M5=s5.getUniforms(),j5=J3.seqWithValue(M5.seq,l5);return q.currentProgram=s5,q.uniformsList=j5,s5}function U4(I,J){const s0=F0.get(I);s0.outputColorSpace=J.outputColorSpace,s0.instancing=J.instancing,s0.skinning=J.skinning,s0.morphTargets=J.morphTargets,s0.morphNormals=J.morphNormals,s0.morphColors=J.morphColors,s0.morphTargetsCount=J.morphTargetsCount,s0.numClippingPlanes=J.numClippingPlanes,s0.numIntersection=J.numClipIntersection,s0.vertexAlphas=J.vertexAlphas,s0.vertexTangents=J.vertexTangents,s0.toneMapping=J.toneMapping}function H7(I,J,s0,q,l0){J.isScene!==!0&&(J=y0),k0.resetTextureUnits();const z0=J.fog,W0=q.isMeshStandardMaterial?J.environment:null,Q0=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:E2,e5=(q.isMeshStandardMaterial?I5:b5).get(q.envMap||W0),r5=q.vertexColors===!0&&!!s0.attributes.color&&s0.attributes.color.itemSize===4,s5=!!q.normalMap&&!!s0.attributes.tangent,l5=!!s0.morphAttributes.position,M5=!!s0.morphAttributes.normal,j5=!!s0.morphAttributes.color,D9=q.toneMapped?g.toneMapping:W2,X9=s0.morphAttributes.position||s0.morphAttributes.normal||s0.morphAttributes.color,k5=X9!==void 0?X9.length:0,h5=F0.get(q),W7=M.state.lights;if(f0===!0&&(S0===!0||I!==O)){const h9=I===O&&q.id===U;i0.setState(q,I,h9)}let Y5=!1;q.version===h5.__version?(h5.needsLights&&h5.lightsStateVersion!==W7.state.version||h5.outputColorSpace!==Q0||l0.isInstancedMesh&&h5.instancing===!1||!l0.isInstancedMesh&&h5.instancing===!0||l0.isSkinnedMesh&&h5.skinning===!1||!l0.isSkinnedMesh&&h5.skinning===!0||h5.envMap!==e5||q.fog===!0&&h5.fog!==z0||h5.numClippingPlanes!==void 0&&(h5.numClippingPlanes!==i0.numPlanes||h5.numIntersection!==i0.numIntersection)||h5.vertexAlphas!==r5||h5.vertexTangents!==s5||h5.morphTargets!==l5||h5.morphNormals!==M5||h5.morphColors!==j5||h5.toneMapping!==D9||M0.isWebGL2===!0&&h5.morphTargetsCount!==k5)&&(Y5=!0):(Y5=!0,h5.__version=q.version);let m2=h5.currentProgram;Y5===!0&&(m2=V2(q,J,l0));let k7=!1,u1=!1,V7=!1;const a9=m2.getUniforms(),b2=h5.uniforms;if(B0.useProgram(m2.program)&&(k7=!0,u1=!0,V7=!0),q.id!==U&&(U=q.id,u1=!0),k7||O!==I){if(a9.setValue(W,"projectionMatrix",I.projectionMatrix),M0.logarithmicDepthBuffer&&a9.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),O!==I&&(O=I,u1=!0,V7=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const h9=a9.map.cameraPosition;h9!==void 0&&h9.setValue(W,p0.setFromMatrixPosition(I.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&a9.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||l0.isSkinnedMesh)&&a9.setValue(W,"viewMatrix",I.matrixWorldInverse)}if(l0.isSkinnedMesh){a9.setOptional(W,l0,"bindMatrix"),a9.setOptional(W,l0,"bindMatrixInverse");const h9=l0.skeleton;h9&&(M0.floatVertexTextures?(h9.boneTexture===null&&h9.computeBoneTexture(),a9.setValue(W,"boneTexture",h9.boneTexture,k0),a9.setValue(W,"boneTextureSize",h9.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const B1=s0.morphAttributes;if((B1.position!==void 0||B1.normal!==void 0||B1.color!==void 0&&M0.isWebGL2===!0)&&x0.update(l0,s0,m2),(u1||h5.receiveShadow!==l0.receiveShadow)&&(h5.receiveShadow=l0.receiveShadow,a9.setValue(W,"receiveShadow",l0.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(b2.envMap.value=e5,b2.flipEnvMap.value=e5.isCubeTexture&&e5.isRenderTargetTexture===!1?-1:1),u1&&(a9.setValue(W,"toneMappingExposure",g.toneMappingExposure),h5.needsLights&&s6(b2,V7),z0&&q.fog===!0&&w5.refreshFogUniforms(b2,z0),w5.refreshMaterialUniforms(b2,q,G,Z,E0),J3.upload(W,h5.uniformsList,b2,k0)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(J3.upload(W,h5.uniformsList,b2,k0),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&a9.setValue(W,"center",l0.center),a9.setValue(W,"modelViewMatrix",l0.modelViewMatrix),a9.setValue(W,"normalMatrix",l0.normalMatrix),a9.setValue(W,"modelMatrix",l0.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const h9=q.uniformsGroups;for(let z1=0,X7=h9.length;z1<X7;z1++)if(M0.isWebGL2){const D4=h9[z1];L0.update(D4,m2),L0.bind(D4,m2)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return m2}function s6(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function o6(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,J,s0){F0.get(I.texture).__webglTexture=J,F0.get(I.depthTexture).__webglTexture=s0;const q=F0.get(I);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=s0===void 0,q.__autoAllocateDepthBuffer||G0.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,J){const s0=F0.get(I);s0.__webglFramebuffer=J,s0.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,s0=0){T=I,E=J,L=s0;let q=!0,l0=null,z0=!1,W0=!1;if(I){const e5=F0.get(I);e5.__useDefaultFramebuffer!==void 0?(B0.bindFramebuffer(W.FRAMEBUFFER,null),q=!1):e5.__webglFramebuffer===void 0?k0.setupRenderTarget(I):e5.__hasExternalTextures&&k0.rebindTextures(I,F0.get(I.texture).__webglTexture,F0.get(I.depthTexture).__webglTexture);const r5=I.texture;(r5.isData3DTexture||r5.isDataArrayTexture||r5.isCompressedArrayTexture)&&(W0=!0);const s5=F0.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(l0=s5[J],z0=!0):M0.isWebGL2&&I.samples>0&&k0.useMultisampledRTT(I)===!1?l0=F0.get(I).__webglMultisampledFramebuffer:l0=s5,V.copy(I.viewport),A.copy(I.scissor),P=I.scissorTest}else V.copy(h0).multiplyScalar(G).floor(),A.copy(Q).multiplyScalar(G).floor(),P=$;if(B0.bindFramebuffer(W.FRAMEBUFFER,l0)&&M0.drawBuffers&&q&&B0.drawBuffers(I,l0),B0.viewport(V),B0.scissor(A),B0.setScissorTest(P),z0){const e5=F0.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+J,e5.__webglTexture,s0)}else if(W0){const e5=F0.get(I.texture),r5=J||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,e5.__webglTexture,s0||0,r5)}U=-1},this.readRenderTargetPixels=function(I,J,s0,q,l0,z0,W0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q0=F0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&W0!==void 0&&(Q0=Q0[W0]),Q0){B0.bindFramebuffer(W.FRAMEBUFFER,Q0);try{const e5=I.texture,r5=e5.format,s5=e5.type;if(r5!==p2&&t0.convert(r5)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const l5=s5===b4&&(G0.has("EXT_color_buffer_half_float")||M0.isWebGL2&&G0.has("EXT_color_buffer_float"));if(s5!==D1&&t0.convert(s5)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(s5===C1&&(M0.isWebGL2||G0.has("OES_texture_float")||G0.has("WEBGL_color_buffer_float")))&&!l5){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-q&&s0>=0&&s0<=I.height-l0&&W.readPixels(J,s0,q,l0,t0.convert(r5),t0.convert(s5),z0)}finally{const e5=T!==null?F0.get(T).__webglFramebuffer:null;B0.bindFramebuffer(W.FRAMEBUFFER,e5)}}},this.copyFramebufferToTexture=function(I,J,s0=0){const q=Math.pow(2,-s0),l0=Math.floor(J.image.width*q),z0=Math.floor(J.image.height*q);k0.setTexture2D(J,0),W.copyTexSubImage2D(W.TEXTURE_2D,s0,0,0,I.x,I.y,l0,z0),B0.unbindTexture()},this.copyTextureToTexture=function(I,J,s0,q=0){const l0=J.image.width,z0=J.image.height,W0=t0.convert(s0.format),Q0=t0.convert(s0.type);k0.setTexture2D(s0,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,s0.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s0.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,s0.unpackAlignment),J.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,q,I.x,I.y,l0,z0,W0,Q0,J.image.data):J.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,q,I.x,I.y,J.mipmaps[0].width,J.mipmaps[0].height,W0,J.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,q,I.x,I.y,W0,Q0,J.image),q===0&&s0.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),B0.unbindTexture()},this.copyTextureToTexture3D=function(I,J,s0,q,l0=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const z0=I.max.x-I.min.x+1,W0=I.max.y-I.min.y+1,Q0=I.max.z-I.min.z+1,e5=t0.convert(q.format),r5=t0.convert(q.type);let s5;if(q.isData3DTexture)k0.setTexture3D(q,0),s5=W.TEXTURE_3D;else if(q.isDataArrayTexture)k0.setTexture2DArray(q,0),s5=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const l5=W.getParameter(W.UNPACK_ROW_LENGTH),M5=W.getParameter(W.UNPACK_IMAGE_HEIGHT),j5=W.getParameter(W.UNPACK_SKIP_PIXELS),D9=W.getParameter(W.UNPACK_SKIP_ROWS),X9=W.getParameter(W.UNPACK_SKIP_IMAGES),k5=s0.isCompressedTexture?s0.mipmaps[0]:s0.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,k5.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,k5.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,I.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,I.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,I.min.z),s0.isDataTexture||s0.isData3DTexture?W.texSubImage3D(s5,l0,J.x,J.y,J.z,z0,W0,Q0,e5,r5,k5.data):s0.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(s5,l0,J.x,J.y,J.z,z0,W0,Q0,e5,k5.data)):W.texSubImage3D(s5,l0,J.x,J.y,J.z,z0,W0,Q0,e5,r5,k5),W.pixelStorei(W.UNPACK_ROW_LENGTH,l5),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,M5),W.pixelStorei(W.UNPACK_SKIP_PIXELS,j5),W.pixelStorei(W.UNPACK_SKIP_ROWS,D9),W.pixelStorei(W.UNPACK_SKIP_IMAGES,X9),l0===0&&q.generateMipmaps&&W.generateMipmap(s5),B0.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?k0.setTextureCube(I,0):I.isData3DTexture?k0.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?k0.setTexture2DArray(I,0):k0.setTexture2D(I,0),B0.unbindTexture()},this.resetState=function(){E=0,L=0,T=null,B0.reset(),A0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===i5?I1:Yr}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===I1?i5:E2}}class M_ extends us{}M_.prototype.isWebGL1Renderer=!0;class x_ extends X5{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class S_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ae,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=a1()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[n+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=a1()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=a1()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const x9=new N;class e6{constructor(e,t,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)x9.fromBufferAttribute(this,t),x9.applyMatrix4(e),this.setXYZ(t,x9.x,x9.y,x9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)x9.fromBufferAttribute(this,t),x9.applyNormalMatrix(e),this.setXYZ(t,x9.x,x9.y,x9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)x9.fromBufferAttribute(this,t),x9.transformDirection(e),this.setXYZ(t,x9.x,x9.y,x9.z);return this}setX(e,t){return this.normalized&&(t=C5(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=C5(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=C5(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=C5(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=s1(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=s1(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=s1(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=s1(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=C5(t,this.array),n=C5(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=C5(t,this.array),n=C5(n,this.array),o=C5(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=C5(t,this.array),n=C5(n,this.array),o=C5(o,this.array),a=C5(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new t9(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new e6(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hs extends c1{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new d5(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _7;const h4=new N,y7=new N,M7=new N,x7=new H0,f4=new H0,fs=new L5,H3=new N,d4=new N,W3=new N,ar=new H0,Y8=new H0,lr=new H0;class E_ extends X5{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",_7===void 0){_7=new z5;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new S_(t,5);_7.setIndex([0,1,2,0,2,3]),_7.setAttribute("position",new e6(n,3,0,!1)),_7.setAttribute("uv",new e6(n,2,3,!1))}this.geometry=_7,this.material=e!==void 0?e:new hs,this.center=new H0(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),y7.setFromMatrixScale(this.matrixWorld),fs.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),M7.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&y7.multiplyScalar(-M7.z);const n=this.material.rotation;let o,a;n!==0&&(a=Math.cos(n),o=Math.sin(n));const l=this.center;k3(H3.set(-.5,-.5,0),M7,l,y7,o,a),k3(d4.set(.5,-.5,0),M7,l,y7,o,a),k3(W3.set(.5,.5,0),M7,l,y7,o,a),ar.set(0,0),Y8.set(1,0),lr.set(1,1);let c=e.ray.intersectTriangle(H3,d4,W3,!1,h4);if(c===null&&(k3(d4.set(-.5,.5,0),M7,l,y7,o,a),Y8.set(0,1),c=e.ray.intersectTriangle(H3,W3,d4,!1,h4),c===null))return;const h=e.ray.origin.distanceTo(h4);h<e.near||h>e.far||t.push({distance:h,point:h4.clone(),uv:i2.getInterpolation(h4,H3,d4,W3,ar,Y8,lr,new H0),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function k3(r,e,t,n,o,a){x7.subVectors(r,t).addScalar(.5).multiply(n),o!==void 0?(f4.x=a*x7.x-o*x7.y,f4.y=o*x7.x+a*x7.y):f4.copy(x7),r.copy(e),r.x+=f4.x,r.y+=f4.y,r.applyMatrix4(fs)}class G7 extends c1{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new d5(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cr=new N,ur=new N,hr=new L5,Z8=new i6,V3=new C4;class t2 extends X5{constructor(e=new z5,t=new G7){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)cr.fromBufferAttribute(t,o-1),ur.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=cr.distanceTo(ur);e.setAttribute("lineDistance",new D5(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),V3.copy(n.boundingSphere),V3.applyMatrix4(o),V3.radius+=a,e.ray.intersectsSphere(V3)===!1)return;hr.copy(o).invert(),Z8.copy(e.ray).applyMatrix4(hr);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=new N,d=new N,p=new N,v=new N,_=this.isLineSegments?2:1,M=n.index,y=n.attributes.position;if(M!==null){const g=Math.max(0,l.start),w=Math.min(M.count,l.start+l.count);for(let E=g,L=w-1;E<L;E+=_){const T=M.getX(E),U=M.getX(E+1);if(f.fromBufferAttribute(y,T),d.fromBufferAttribute(y,U),Z8.distanceSqToSegment(f,d,v,p)>h)continue;v.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(v);V<e.near||V>e.far||t.push({distance:V,point:p.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,l.start),w=Math.min(y.count,l.start+l.count);for(let E=g,L=w-1;E<L;E+=_){if(f.fromBufferAttribute(y,E),d.fromBufferAttribute(y,E+1),Z8.distanceSqToSegment(f,d,v,p)>h)continue;v.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(v);U<e.near||U>e.far||t.push({distance:U,point:p.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=o.length;a<l;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const fr=new N,dr=new N;class A_ extends t2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let o=0,a=t.count;o<a;o+=2)fr.fromBufferAttribute(t,o),dr.fromBufferAttribute(t,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+fr.distanceTo(dr);e.setAttribute("lineDistance",new D5(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class b_ extends t2{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xe extends c1{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new d5(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pr=new L5,he=new i6,X3=new C4,Y3=new N;class ds extends X5{constructor(e=new z5,t=new xe){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),X3.copy(n.boundingSphere),X3.applyMatrix4(o),X3.radius+=a,e.ray.intersectsSphere(X3)===!1)return;pr.copy(o).invert(),he.copy(e.ray).applyMatrix4(pr);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,p=n.attributes.position;if(f!==null){const v=Math.max(0,l.start),_=Math.min(f.count,l.start+l.count);for(let M=v,S=_;M<S;M++){const y=f.getX(M);Y3.fromBufferAttribute(p,y),mr(Y3,y,h,o,e,t,this)}}else{const v=Math.max(0,l.start),_=Math.min(p.count,l.start+l.count);for(let M=v,S=_;M<S;M++)Y3.fromBufferAttribute(p,M),mr(Y3,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=o.length;a<l;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function mr(r,e,t,n,o,a,l){const c=he.distanceSqToPoint(r);if(c<t){const h=new N;he.closestPointToPoint(r,h),h.applyMatrix4(n);const f=o.ray.origin.distanceTo(h);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:l})}}class ps{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,o=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(o),t.push(a),o=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let o=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let c=0,h=a-1,f;for(;c<=h;)if(o=Math.floor(c+(h-c)/2),f=n[o]-l,f<0)c=o+1;else if(f>0)h=o-1;else{h=o;break}if(o=h,n[o]===l)return o/(a-1);const d=n[o],v=n[o+1]-d,_=(l-d)/v;return(o+_)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const l=this.getPoint(o),c=this.getPoint(a),h=t||(l.isVector2?new H0:new N);return h.copy(c).sub(l).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,o=[],a=[],l=[],c=new N,h=new L5;for(let _=0;_<=e;_++){const M=_/e;o[_]=this.getTangentAt(M,new N)}a[0]=new N,l[0]=new N;let f=Number.MAX_VALUE;const d=Math.abs(o[0].x),p=Math.abs(o[0].y),v=Math.abs(o[0].z);d<=f&&(f=d,n.set(1,0,0)),p<=f&&(f=p,n.set(0,1,0)),v<=f&&n.set(0,0,1),c.crossVectors(o[0],n).normalize(),a[0].crossVectors(o[0],c),l[0].crossVectors(o[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),l[_]=l[_-1].clone(),c.crossVectors(o[_-1],o[_]),c.length()>Number.EPSILON){c.normalize();const M=Math.acos(u9(o[_-1].dot(o[_]),-1,1));a[_].applyMatrix4(h.makeRotationAxis(c,M))}l[_].crossVectors(o[_],a[_])}if(t===!0){let _=Math.acos(u9(a[0].dot(a[e]),-1,1));_/=e,o[0].dot(c.crossVectors(a[0],a[e]))>0&&(_=-_);for(let M=1;M<=e;M++)a[M].applyMatrix4(h.makeRotationAxis(o[M],_*M)),l[M].crossVectors(o[M],a[M])}return{tangents:o,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class w_ extends ps{constructor(e=0,t=0,n=1,o=1,a=0,l=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=c,this.aRotation=h}getPoint(e,t){const n=t||new H0,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(l?a=0:a=o),this.aClockwise===!0&&!l&&(a===o?a=-o:a=a-o);const c=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),v=h-this.aX,_=f-this.aY;h=v*d-_*p+this.aX,f=v*p+_*d+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gr extends w_{constructor(e,t,n,o,a,l){super(e,t,n,n,o,a,l),this.isArcCurve=!0,this.type="ArcCurve"}}function T_(r,e){const t=1-r;return t*t*e}function R_(r,e){return 2*(1-r)*r*e}function P_(r,e){return r*r*e}function q8(r,e,t,n){return T_(r,e)+R_(r,t)+P_(r,n)}class C_ extends ps{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,o=this.v0,a=this.v1,l=this.v2;return n.set(q8(e,o.x,a.x,l.x),q8(e,o.y,a.y,l.y),q8(e,o.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v9 extends z5{constructor(e=1,t=1,n=1,o=32,a=1,l=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:h};const f=this;o=Math.floor(o),a=Math.floor(a);const d=[],p=[],v=[],_=[];let M=0;const S=[],y=n/2;let g=0;w(),l===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new D5(p,3)),this.setAttribute("normal",new D5(v,3)),this.setAttribute("uv",new D5(_,2));function w(){const L=new N,T=new N;let U=0;const O=(t-e)/n;for(let V=0;V<=a;V++){const A=[],P=V/a,j=P*(t-e)+e;for(let Z=0;Z<=o;Z++){const G=Z/o,Y=G*h+c,K=Math.sin(Y),h0=Math.cos(Y);T.x=j*K,T.y=-P*n+y,T.z=j*h0,p.push(T.x,T.y,T.z),L.set(K,O,h0).normalize(),v.push(L.x,L.y,L.z),_.push(G,1-P),A.push(M++)}S.push(A)}for(let V=0;V<o;V++)for(let A=0;A<a;A++){const P=S[A][V],j=S[A+1][V],Z=S[A+1][V+1],G=S[A][V+1];d.push(P,j,G),d.push(j,Z,G),U+=6}f.addGroup(g,U,0),g+=U}function E(L){const T=M,U=new H0,O=new N;let V=0;const A=L===!0?e:t,P=L===!0?1:-1;for(let Z=1;Z<=o;Z++)p.push(0,y*P,0),v.push(0,P,0),_.push(.5,.5),M++;const j=M;for(let Z=0;Z<=o;Z++){const Y=Z/o*h+c,K=Math.cos(Y),h0=Math.sin(Y);O.x=A*h0,O.y=y*P,O.z=A*K,p.push(O.x,O.y,O.z),v.push(0,P,0),U.x=K*.5+.5,U.y=h0*.5*P+.5,_.push(U.x,U.y),M++}for(let Z=0;Z<o;Z++){const G=T+Z,Y=j+Z;L===!0?d.push(Y,Y+1,G):d.push(Y+1,Y,G),V+=3}f.addGroup(g,V,L===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new v9(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Se extends z5{constructor(e=[],t=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:o};const a=[],l=[];c(o),f(n),d(),this.setAttribute("position",new D5(a,3)),this.setAttribute("normal",new D5(a.slice(),3)),this.setAttribute("uv",new D5(l,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function c(w){const E=new N,L=new N,T=new N;for(let U=0;U<t.length;U+=3)_(t[U+0],E),_(t[U+1],L),_(t[U+2],T),h(E,L,T,w)}function h(w,E,L,T){const U=T+1,O=[];for(let V=0;V<=U;V++){O[V]=[];const A=w.clone().lerp(L,V/U),P=E.clone().lerp(L,V/U),j=U-V;for(let Z=0;Z<=j;Z++)Z===0&&V===U?O[V][Z]=A:O[V][Z]=A.clone().lerp(P,Z/j)}for(let V=0;V<U;V++)for(let A=0;A<2*(U-V)-1;A++){const P=Math.floor(A/2);A%2===0?(v(O[V][P+1]),v(O[V+1][P]),v(O[V][P])):(v(O[V][P+1]),v(O[V+1][P+1]),v(O[V+1][P]))}}function f(w){const E=new N;for(let L=0;L<a.length;L+=3)E.x=a[L+0],E.y=a[L+1],E.z=a[L+2],E.normalize().multiplyScalar(w),a[L+0]=E.x,a[L+1]=E.y,a[L+2]=E.z}function d(){const w=new N;for(let E=0;E<a.length;E+=3){w.x=a[E+0],w.y=a[E+1],w.z=a[E+2];const L=y(w)/2/Math.PI+.5,T=g(w)/Math.PI+.5;l.push(L,1-T)}M(),p()}function p(){for(let w=0;w<l.length;w+=6){const E=l[w+0],L=l[w+2],T=l[w+4],U=Math.max(E,L,T),O=Math.min(E,L,T);U>.9&&O<.1&&(E<.2&&(l[w+0]+=1),L<.2&&(l[w+2]+=1),T<.2&&(l[w+4]+=1))}}function v(w){a.push(w.x,w.y,w.z)}function _(w,E){const L=w*3;E.x=e[L+0],E.y=e[L+1],E.z=e[L+2]}function M(){const w=new N,E=new N,L=new N,T=new N,U=new H0,O=new H0,V=new H0;for(let A=0,P=0;A<a.length;A+=9,P+=6){w.set(a[A+0],a[A+1],a[A+2]),E.set(a[A+3],a[A+4],a[A+5]),L.set(a[A+6],a[A+7],a[A+8]),U.set(l[P+0],l[P+1]),O.set(l[P+2],l[P+3]),V.set(l[P+4],l[P+5]),T.copy(w).add(E).add(L).divideScalar(3);const j=y(T);S(U,P+0,w,j),S(O,P+2,E,j),S(V,P+4,L,j)}}function S(w,E,L,T){T<0&&w.x===1&&(l[E]=w.x-1),L.x===0&&L.z===0&&(l[E]=T/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function g(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Se(e.vertices,e.indices,e.radius,e.details)}}class b7 extends Se{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new b7(e.radius,e.detail)}}class T4 extends z5{constructor(e=1,t=32,n=16,o=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+c,Math.PI);let f=0;const d=[],p=new N,v=new N,_=[],M=[],S=[],y=[];for(let g=0;g<=n;g++){const w=[],E=g/n;let L=0;g===0&&l===0?L=.5/t:g===n&&h===Math.PI&&(L=-.5/t);for(let T=0;T<=t;T++){const U=T/t;p.x=-e*Math.cos(o+U*a)*Math.sin(l+E*c),p.y=e*Math.cos(l+E*c),p.z=e*Math.sin(o+U*a)*Math.sin(l+E*c),M.push(p.x,p.y,p.z),v.copy(p).normalize(),S.push(v.x,v.y,v.z),y.push(U+L,1-E),w.push(f++)}d.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){const E=d[g][w+1],L=d[g][w],T=d[g+1][w],U=d[g+1][w+1];(g!==0||l>0)&&_.push(E,L,U),(g!==n-1||h<Math.PI)&&_.push(L,T,U)}this.setIndex(_),this.setAttribute("position",new D5(M,3)),this.setAttribute("normal",new D5(S,3)),this.setAttribute("uv",new D5(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new T4(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class R1 extends z5{constructor(e=1,t=.4,n=12,o=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:o,arc:a},n=Math.floor(n),o=Math.floor(o);const l=[],c=[],h=[],f=[],d=new N,p=new N,v=new N;for(let _=0;_<=n;_++)for(let M=0;M<=o;M++){const S=M/o*a,y=_/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(S),p.y=(e+t*Math.cos(y))*Math.sin(S),p.z=t*Math.sin(y),c.push(p.x,p.y,p.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),v.subVectors(p,d).normalize(),h.push(v.x,v.y,v.z),f.push(M/o),f.push(_/n)}for(let _=1;_<=n;_++)for(let M=1;M<=o;M++){const S=(o+1)*_+M-1,y=(o+1)*(_-1)+M-1,g=(o+1)*(_-1)+M,w=(o+1)*_+M;l.push(S,y,w),l.push(y,g,w)}this.setIndex(l),this.setAttribute("position",new D5(c,3)),this.setAttribute("normal",new D5(h,3)),this.setAttribute("uv",new D5(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new R1(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fe extends c1{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new d5(16777215),this.specular=new d5(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new d5(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new H0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ge,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class L_{constructor(e,t,n){const o=this;let a=!1,l=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,a===!1&&o.onStart!==void 0&&o.onStart(d,l,c),a=!0},this.itemEnd=function(d){l++,o.onProgress!==void 0&&o.onProgress(d,l,c),l===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(d){o.onError!==void 0&&o.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,v=f.length;p<v;p+=2){const _=f[p],M=f[p+1];if(_.global&&(_.lastIndex=0),_.test(d))return M}return null}}}const I_=new L_;class ms{constructor(e){this.manager=e!==void 0?e:I_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(o,a){n.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class U_ extends ms{constructor(e){super(e)}load(e,t,n,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=vr.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const c=w4("img");function h(){d(),vr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(p){d(),o&&o(p),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class t6 extends ms{constructor(e){super(e)}load(e,t,n,o){const a=new U9,l=new U_(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,o),a}}class Ee extends X5{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new d5(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const j8=new L5,_r=new N,yr=new N;class gs{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H0(512,512),this.map=null,this.mapPass=null,this.matrix=new L5,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _e,this._frameExtents=new H0(1,1),this._viewportCount=1,this._viewports=[new B5(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_r.setFromMatrixPosition(e.matrixWorld),t.position.copy(_r),yr.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yr),t.updateMatrixWorld(),j8.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(j8),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(j8)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mr=new L5,p4=new N,Q8=new N;class D_ extends gs{constructor(){super(new k9(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new H0(4,2),this._viewportCount=6,this._viewports=[new B5(2,1,1,1),new B5(0,1,1,1),new B5(3,1,1,1),new B5(1,1,1,1),new B5(3,0,1,1),new B5(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,o=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),p4.setFromMatrixPosition(e.matrixWorld),n.position.copy(p4),Q8.copy(n.position),Q8.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Q8),n.updateMatrixWorld(),o.makeTranslation(-p4.x,-p4.y,-p4.z),Mr.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr)}}class N_ extends Ee{constructor(e,t,n=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new D_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class F_ extends gs{constructor(){super(new ye(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O_ extends Ee{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(X5.DEFAULT_UP),this.updateMatrix(),this.target=new X5,this.shadow=new F_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B_ extends Ee{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class z_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xr(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xr();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xr(){return(typeof performance>"u"?Date:performance).now()}class vs{constructor(e,t,n=0,o=1/0){this.ray=new i6(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new ve,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return de(e,this,n,t),n.sort(Sr),n}intersectObjects(e,t=!0,n=[]){for(let o=0,a=e.length;o<a;o++)de(e[o],this,n,t);return n.sort(Sr),n}}function Sr(r,e){return r.distance-e.distance}function de(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const o=r.children;for(let a=0,l=o.length;a<l;a++)de(o[a],e,t,!0)}}class Er{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(u9(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class G_ extends A_{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new z5;o.setAttribute("position",new D5(t,3)),o.setAttribute("color",new D5(n,3));const a=new G7({vertexColors:!0,toneMapped:!1});super(o,a),this.type="AxesHelper"}setColors(e,t,n){const o=new d5,a=this.geometry.attributes.color.array;return o.set(e),o.toArray(a,0),o.toArray(a,3),o.set(t),o.toArray(a,6),o.toArray(a,9),o.set(n),o.toArray(a,12),o.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:me}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=me);const Ar={type:"change"},K8={type:"start"},br={type:"end"};class H_ extends O1{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:e7.ROTATE,MIDDLE:e7.DOLLY,RIGHT:e7.PAN},this.touches={ONE:t7.ROTATE,TWO:t7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",v5),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v5),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ar),n.update(),a=o.NONE},this.update=function(){const B=new N,c0=new e9().setFromUnitVectors(e.up,new N(0,1,0)),t0=c0.clone().invert(),A0=new N,L0=new e9,D0=2*Math.PI;return function(){const U0=n.object.position;B.copy(U0).sub(n.target),B.applyQuaternion(c0),c.setFromVector3(B),n.autoRotate&&a===o.NONE&&A(O()),n.enableDamping?(c.theta+=h.theta*n.dampingFactor,c.phi+=h.phi*n.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let j0=n.minAzimuthAngle,$0=n.maxAzimuthAngle;return isFinite(j0)&&isFinite($0)&&(j0<-Math.PI?j0+=D0:j0>Math.PI&&(j0-=D0),$0<-Math.PI?$0+=D0:$0>Math.PI&&($0-=D0),j0<=$0?c.theta=Math.max(j0,Math.min($0,c.theta)):c.theta=c.theta>(j0+$0)/2?Math.max(j0,c.theta):Math.min($0,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=f,c.radius=Math.max(n.minDistance,Math.min(n.maxDistance,c.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),B.setFromSpherical(c),B.applyQuaternion(t0),U0.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),f=1,p||A0.distanceToSquared(n.object.position)>l||8*(1-L0.dot(n.object.quaternion))>l?(n.dispatchEvent(Ar),A0.copy(n.object.position),L0.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",C),n.domElement.removeEventListener("pointerdown",k0),n.domElement.removeEventListener("pointercancel",I5),n.domElement.removeEventListener("wheel",g5),n.domElement.removeEventListener("pointermove",b5),n.domElement.removeEventListener("pointerup",I5),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",v5),n._domElementKeyEvents=null)};const n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const l=1e-6,c=new Er,h=new Er;let f=1;const d=new N;let p=!1;const v=new H0,_=new H0,M=new H0,S=new H0,y=new H0,g=new H0,w=new H0,E=new H0,L=new H0,T=[],U={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function V(){return Math.pow(.95,n.zoomSpeed)}function A(B){h.theta-=B}function P(B){h.phi-=B}const j=function(){const B=new N;return function(t0,A0){B.setFromMatrixColumn(A0,0),B.multiplyScalar(-t0),d.add(B)}}(),Z=function(){const B=new N;return function(t0,A0){n.screenSpacePanning===!0?B.setFromMatrixColumn(A0,1):(B.setFromMatrixColumn(A0,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(t0),d.add(B)}}(),G=function(){const B=new N;return function(t0,A0){const L0=n.domElement;if(n.object.isPerspectiveCamera){const D0=n.object.position;B.copy(D0).sub(n.target);let R0=B.length();R0*=Math.tan(n.object.fov/2*Math.PI/180),j(2*t0*R0/L0.clientHeight,n.object.matrix),Z(2*A0*R0/L0.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(t0*(n.object.right-n.object.left)/n.object.zoom/L0.clientWidth,n.object.matrix),Z(A0*(n.object.top-n.object.bottom)/n.object.zoom/L0.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(B){n.object.isPerspectiveCamera?f/=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*B)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(B){n.object.isPerspectiveCamera?f*=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/B)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function h0(B){v.set(B.clientX,B.clientY)}function Q(B){w.set(B.clientX,B.clientY)}function $(B){S.set(B.clientX,B.clientY)}function a0(B){_.set(B.clientX,B.clientY),M.subVectors(_,v).multiplyScalar(n.rotateSpeed);const c0=n.domElement;A(2*Math.PI*M.x/c0.clientHeight),P(2*Math.PI*M.y/c0.clientHeight),v.copy(_),n.update()}function f0(B){E.set(B.clientX,B.clientY),L.subVectors(E,w),L.y>0?Y(V()):L.y<0&&K(V()),w.copy(E),n.update()}function S0(B){y.set(B.clientX,B.clientY),g.subVectors(y,S).multiplyScalar(n.panSpeed),G(g.x,g.y),S.copy(y),n.update()}function E0(B){B.deltaY<0?K(V()):B.deltaY>0&&Y(V()),n.update()}function n0(B){let c0=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),c0=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),c0=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),c0=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),c0=!0;break}c0&&(B.preventDefault(),n.update())}function p0(){if(T.length===1)v.set(T[0].pageX,T[0].pageY);else{const B=.5*(T[0].pageX+T[1].pageX),c0=.5*(T[0].pageY+T[1].pageY);v.set(B,c0)}}function y0(){if(T.length===1)S.set(T[0].pageX,T[0].pageY);else{const B=.5*(T[0].pageX+T[1].pageX),c0=.5*(T[0].pageY+T[1].pageY);S.set(B,c0)}}function w0(){const B=T[0].pageX-T[1].pageX,c0=T[0].pageY-T[1].pageY,t0=Math.sqrt(B*B+c0*c0);w.set(0,t0)}function W(){n.enableZoom&&w0(),n.enablePan&&y0()}function Y0(){n.enableZoom&&w0(),n.enableRotate&&p0()}function G0(B){if(T.length==1)_.set(B.pageX,B.pageY);else{const t0=x0(B),A0=.5*(B.pageX+t0.x),L0=.5*(B.pageY+t0.y);_.set(A0,L0)}M.subVectors(_,v).multiplyScalar(n.rotateSpeed);const c0=n.domElement;A(2*Math.PI*M.x/c0.clientHeight),P(2*Math.PI*M.y/c0.clientHeight),v.copy(_)}function M0(B){if(T.length===1)y.set(B.pageX,B.pageY);else{const c0=x0(B),t0=.5*(B.pageX+c0.x),A0=.5*(B.pageY+c0.y);y.set(t0,A0)}g.subVectors(y,S).multiplyScalar(n.panSpeed),G(g.x,g.y),S.copy(y)}function B0(B){const c0=x0(B),t0=B.pageX-c0.x,A0=B.pageY-c0.y,L0=Math.sqrt(t0*t0+A0*A0);E.set(0,L0),L.set(0,Math.pow(E.y/w.y,n.zoomSpeed)),Y(L.y),w.copy(E)}function u5(B){n.enableZoom&&B0(B),n.enablePan&&M0(B)}function F0(B){n.enableZoom&&B0(B),n.enableRotate&&G0(B)}function k0(B){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",b5),n.domElement.addEventListener("pointerup",I5)),i0(B),B.pointerType==="touch"?w5(B):y5(B))}function b5(B){n.enabled!==!1&&(B.pointerType==="touch"?D(B):N5(B))}function I5(B){g0(B),T.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",b5),n.domElement.removeEventListener("pointerup",I5)),n.dispatchEvent(br),a=o.NONE}function y5(B){let c0;switch(B.button){case 0:c0=n.mouseButtons.LEFT;break;case 1:c0=n.mouseButtons.MIDDLE;break;case 2:c0=n.mouseButtons.RIGHT;break;default:c0=-1}switch(c0){case e7.DOLLY:if(n.enableZoom===!1)return;Q(B),a=o.DOLLY;break;case e7.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;$(B),a=o.PAN}else{if(n.enableRotate===!1)return;h0(B),a=o.ROTATE}break;case e7.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;h0(B),a=o.ROTATE}else{if(n.enablePan===!1)return;$(B),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(K8)}function N5(B){switch(a){case o.ROTATE:if(n.enableRotate===!1)return;a0(B);break;case o.DOLLY:if(n.enableZoom===!1)return;f0(B);break;case o.PAN:if(n.enablePan===!1)return;S0(B);break}}function g5(B){n.enabled===!1||n.enableZoom===!1||a!==o.NONE||(B.preventDefault(),n.dispatchEvent(K8),E0(B),n.dispatchEvent(br))}function v5(B){n.enabled===!1||n.enablePan===!1||n0(B)}function w5(B){switch(_0(B),T.length){case 1:switch(n.touches.ONE){case t7.ROTATE:if(n.enableRotate===!1)return;p0(),a=o.TOUCH_ROTATE;break;case t7.PAN:if(n.enablePan===!1)return;y0(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case t7.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(),a=o.TOUCH_DOLLY_PAN;break;case t7.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y0(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(K8)}function D(B){switch(_0(B),a){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;G0(B),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;M0(B),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;u5(B),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F0(B),n.update();break;default:a=o.NONE}}function C(B){n.enabled!==!1&&B.preventDefault()}function i0(B){T.push(B)}function g0(B){delete U[B.pointerId];for(let c0=0;c0<T.length;c0++)if(T[c0].pointerId==B.pointerId){T.splice(c0,1);return}}function _0(B){let c0=U[B.pointerId];c0===void 0&&(c0=new H0,U[B.pointerId]=c0),c0.set(B.pageX,B.pageY)}function x0(B){const c0=B.pointerId===T[0].pointerId?T[1]:T[0];return U[c0.pointerId]}n.domElement.addEventListener("contextmenu",C),n.domElement.addEventListener("pointerdown",k0),n.domElement.addEventListener("pointercancel",I5),n.domElement.addEventListener("wheel",g5,{passive:!1}),this.update()}}const L7=(r,e,t)=>{let n=e*Math.PI/180,o=t*Math.PI/180;n=-n;const a=r*Math.cos(o)*Math.cos(n),l=r*Math.sin(o),c=r*Math.cos(o)*Math.sin(n);return{x:a,y:l,z:c}},W_=(r,e)=>{const t=new N(0,0,0),n=r.clone().sub(t),o=e.clone().sub(t),a=new N().crossVectors(n,o).normalize(),l=new e9().setFromUnitVectors(a,new N(0,0,1)),c=r.clone().applyQuaternion(l),h=e.clone().applyQuaternion(l),f=new N().addVectors(c,h).multiplyScalar(.5).normalize(),d=new e9().setFromUnitVectors(f,new N(0,1,0)),p=c.clone().applyQuaternion(d),v=h.clone().applyQuaternion(d);return{quaternion:l.clone().invert().multiply(d.clone().invert()),startPoint3D:p,endPoint3D:v}},wr=(r,e,t)=>{const n=r.clone().sub(t).normalize(),o=e.clone().sub(t).normalize(),a=n.clone().dot(o);return Math.acos(a)},k_=(r,e,t)=>{const n=r.lengthSq(),o=e.lengthSq(),a=t.lengthSq(),l=r.x,c=r.y,h=e.x,f=e.y,d=t.x,p=t.y,v=l*f+h*p+d*c-l*p-h*c-d*f,_=(o*p+n*f+a*c-o*c-a*f-n*p)/v/2,M=(a*h+o*l+n*d-n*h-o*d-a*l)/v/2;return new N(_,M,0)};function V_(r,e){const t=(e.y-r.y)/(e.x-r.x);r.y-t*r.x;const n=-1/t,o=(e.x+r.x)/2,a=(e.y+r.y)/2,l=o-n*a,c=r.distanceTo(e);return X_(o,a,n,l,c/5)}function X_(r,e,t,n,o){const a=o/Math.sqrt(1+Math.pow(t,2)),l=o*t/Math.sqrt(1+Math.pow(t,2));return new N(r+a,e+l,0)}var I7=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return this.None(r)},Out:function(r){return this.None(r)},InOut:function(r){return this.None(r)}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-I7.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?I7.Bounce.In(r*2)*.5:I7.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),M4=function(){return performance.now()},Y_=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},r.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},r.prototype.update=function(e,t){e===void 0&&(e=M4()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var o=0;o<n.length;o++){var a=this._tweens[n[o]],l=!t;a&&a.update(e,l)===!1&&!t&&delete this._tweens[n[o]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),w7={Linear:function(r,e){var t=r.length-1,n=t*e,o=Math.floor(n),a=w7.Utils.Linear;return e<0?a(r[0],r[1],n):e>1?a(r[t],r[t-1],t-n):a(r[o],r[o+1>t?t:o+1],n-o)},Bezier:function(r,e){for(var t=0,n=r.length-1,o=Math.pow,a=w7.Utils.Bernstein,l=0;l<=n;l++)t+=o(1-e,n-l)*o(e,l)*r[l]*a(n,l);return t},CatmullRom:function(r,e){var t=r.length-1,n=t*e,o=Math.floor(n),a=w7.Utils.CatmullRom;return r[0]===r[t]?(e<0&&(o=Math.floor(n=t*(1+e))),a(r[(o-1+t)%t],r[o],r[(o+1)%t],r[(o+2)%t],n-o)):e<0?r[0]-(a(r[0],r[0],r[1],r[1],-n)-r[0]):e>1?r[t]-(a(r[t],r[t],r[t-1],r[t-1],n-t)-r[t]):a(r[o?o-1:0],r[o],r[t<o+1?t:o+1],r[t<o+2?t:o+2],n-o)},Utils:{Linear:function(r,e,t){return(e-r)*t+r},Bernstein:function(r,e){var t=w7.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){var r=[1];return function(e){var t=1;if(r[e])return r[e];for(var n=e;n>1;n--)t*=n;return r[e]=t,t}}(),CatmullRom:function(r,e,t,n,o){var a=(t-r)*.5,l=(n-e)*.5,c=o*o,h=o*c;return(2*e-2*t+a+l)*h+(-3*e+3*t-2*a-l)*c+a*o+e}}},Z_=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),pe=new Y_,q_=function(){function r(e,t){t===void 0&&(t=pe),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=I7.Linear.None,this._interpolationFunction=w7.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Z_.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=M4()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var o={};for(var a in this._valuesEnd)o[a]=this._valuesEnd[a];this._valuesEnd=o}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,n,o,a){for(var l in n){var c=e[l],h=Array.isArray(c),f=h?"array":typeof c,d=!h&&Array.isArray(n[l]);if(!(f==="undefined"||f==="function")){if(d){var p=n[l];if(p.length===0)continue;for(var v=[c],_=0,M=p.length;_<M;_+=1){var S=this._handleRelativeValue(c,p[_]);if(isNaN(S)){d=!1,console.warn("Found invalid interpolation list. Skipping.");break}v.push(S)}d&&(n[l]=v)}if((f==="object"||h)&&c&&!d){t[l]=h?[]:{};var y=c;for(var g in y)t[l][g]=y[g];o[l]=h?[]:{};var p=n[l];if(!this._isDynamic){var w={};for(var g in p)w[g]=p[g];n[l]=p=w}this._setupProperties(y,t[l],p,o[l],a)}else(typeof t[l]>"u"||a)&&(t[l]=c),h||(t[l]*=1),d?o[l]=n[l].slice().reverse():o[l]=t[l]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(e){return e===void 0&&(e=M4()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},r.prototype.resume=function(e){return e===void 0&&(e=M4()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e===void 0&&(e=pe),this._group=e,this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=I7.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=w7.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){if(e===void 0&&(e=M4()),t===void 0&&(t=!0),this._isPaused)return!0;var n,o,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),o=(e-this._startTime)/this._duration,o=this._duration===0||o>1?1:o;var l=this._easingFunction(o);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,o),o===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var c=0,h=this._chainedTweens.length;c<h;c++)this._chainedTweens[c].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,n,o){for(var a in n)if(t[a]!==void 0){var l=t[a]||0,c=n[a],h=Array.isArray(e[a]),f=Array.isArray(c),d=!h&&f;d?e[a]=this._interpolationFunction(c,o):typeof c=="object"&&c?this._updateProperties(e[a],l,c,o):(c=this._handleRelativeValue(l,c),typeof c=="number"&&(e[a]=l+(c-l)*o))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r}(),A2=pe;A2.getAll.bind(A2);A2.removeAll.bind(A2);A2.add.bind(A2);A2.remove.bind(A2);var j_=A2.update.bind(A2),m4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R4={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(r,e){(function(){var t,n="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,v=2,_=4,M=1,S=2,y=1,g=2,w=4,E=8,L=16,T=32,U=64,O=128,V=256,A=512,P=30,j="...",Z=800,G=16,Y=1,K=2,h0=3,Q=1/0,$=9007199254740991,a0=17976931348623157e292,f0=0/0,S0=4294967295,E0=S0-1,n0=S0>>>1,p0=[["ary",O],["bind",y],["bindKey",g],["curry",E],["curryRight",L],["flip",A],["partial",T],["partialRight",U],["rearg",V]],y0="[object Arguments]",w0="[object Array]",W="[object AsyncFunction]",Y0="[object Boolean]",G0="[object Date]",M0="[object DOMException]",B0="[object Error]",u5="[object Function]",F0="[object GeneratorFunction]",k0="[object Map]",b5="[object Number]",I5="[object Null]",y5="[object Object]",N5="[object Promise]",g5="[object Proxy]",v5="[object RegExp]",w5="[object Set]",D="[object String]",C="[object Symbol]",i0="[object Undefined]",g0="[object WeakMap]",_0="[object WeakSet]",x0="[object ArrayBuffer]",B="[object DataView]",c0="[object Float32Array]",t0="[object Float64Array]",A0="[object Int8Array]",L0="[object Int16Array]",D0="[object Int32Array]",R0="[object Uint8Array]",U0="[object Uint8ClampedArray]",j0="[object Uint16Array]",$0="[object Uint32Array]",G5=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,r0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,v0=/&(?:amp|lt|gt|quot|#39);/g,C0=/[&<>"']/g,O0=RegExp(v0.source),S5=RegExp(C0.source),E5=/<%-([\s\S]+?)%>/g,r9=/<%([\s\S]+?)%>/g,r2=/<%=([\s\S]+?)%>/g,H5=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T9=/^\w*$/,V9=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V2=/[\\^$.*+?()[\]{}|]/g,U4=RegExp(V2.source),H7=/^\s+/,s6=/\s/,o6=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,I=/\{\n\/\* \[wrapped with (.+)\] \*/,J=/,? & /,s0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,q=/[()=,{}\[\]\/\s]/,l0=/\\(\\)?/g,z0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,W0=/\w*$/,Q0=/^[-+]0x[0-9a-f]+$/i,e5=/^0b[01]+$/i,r5=/^\[object .+?Constructor\]$/,s5=/^0o[0-7]+$/i,l5=/^(?:0|[1-9]\d*)$/,M5=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,j5=/($^)/,D9=/['\n\r\u2028\u2029\\]/g,X9="\\ud800-\\udfff",k5="\\u0300-\\u036f",h5="\\ufe20-\\ufe2f",W7="\\u20d0-\\u20ff",Y5=k5+h5+W7,m2="\\u2700-\\u27bf",k7="a-z\\xdf-\\xf6\\xf8-\\xff",u1="\\xac\\xb1\\xd7\\xf7",V7="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",a9="\\u2000-\\u206f",b2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",B1="A-Z\\xc0-\\xd6\\xd8-\\xde",h9="\\ufe0e\\ufe0f",z1=u1+V7+a9+b2,X7="['’]",D4="["+X9+"]",we="["+z1+"]",N4="["+Y5+"]",Te="\\d+",ys="["+m2+"]",Re="["+k7+"]",Pe="[^"+X9+z1+Te+m2+k7+B1+"]",a6="\\ud83c[\\udffb-\\udfff]",Ms="(?:"+N4+"|"+a6+")",Ce="[^"+X9+"]",l6="(?:\\ud83c[\\udde6-\\uddff]){2}",c6="[\\ud800-\\udbff][\\udc00-\\udfff]",G1="["+B1+"]",Le="\\u200d",Ie="(?:"+Re+"|"+Pe+")",xs="(?:"+G1+"|"+Pe+")",Ue="(?:"+X7+"(?:d|ll|m|re|s|t|ve))?",De="(?:"+X7+"(?:D|LL|M|RE|S|T|VE))?",Ne=Ms+"?",Fe="["+h9+"]?",Ss="(?:"+Le+"(?:"+[Ce,l6,c6].join("|")+")"+Fe+Ne+")*",Es="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",As="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Oe=Fe+Ne+Ss,bs="(?:"+[ys,l6,c6].join("|")+")"+Oe,ws="(?:"+[Ce+N4+"?",N4,l6,c6,D4].join("|")+")",Ts=RegExp(X7,"g"),Rs=RegExp(N4,"g"),u6=RegExp(a6+"(?="+a6+")|"+ws+Oe,"g"),Ps=RegExp([G1+"?"+Re+"+"+Ue+"(?="+[we,G1,"$"].join("|")+")",xs+"+"+De+"(?="+[we,G1+Ie,"$"].join("|")+")",G1+"?"+Ie+"+"+Ue,G1+"+"+De,As,Es,Te,bs].join("|"),"g"),Cs=RegExp("["+Le+X9+Y5+h9+"]"),Ls=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Is=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Us=-1,U5={};U5[c0]=U5[t0]=U5[A0]=U5[L0]=U5[D0]=U5[R0]=U5[U0]=U5[j0]=U5[$0]=!0,U5[y0]=U5[w0]=U5[x0]=U5[Y0]=U5[B]=U5[G0]=U5[B0]=U5[u5]=U5[k0]=U5[b5]=U5[y5]=U5[v5]=U5[w5]=U5[D]=U5[g0]=!1;var P5={};P5[y0]=P5[w0]=P5[x0]=P5[B]=P5[Y0]=P5[G0]=P5[c0]=P5[t0]=P5[A0]=P5[L0]=P5[D0]=P5[k0]=P5[b5]=P5[y5]=P5[v5]=P5[w5]=P5[D]=P5[C]=P5[R0]=P5[U0]=P5[j0]=P5[$0]=!0,P5[B0]=P5[u5]=P5[g0]=!1;var Ds={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ns={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fs={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Os={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Bs=parseFloat,zs=parseInt,Be=typeof m4=="object"&&m4&&m4.Object===Object&&m4,Gs=typeof self=="object"&&self&&self.Object===Object&&self,l9=Be||Gs||Function("return this")(),h6=e&&!e.nodeType&&e,h1=h6&&!0&&r&&!r.nodeType&&r,ze=h1&&h1.exports===h6,f6=ze&&Be.process,Y9=function(){try{var k=h1&&h1.require&&h1.require("util").types;return k||f6&&f6.binding&&f6.binding("util")}catch{}}(),Ge=Y9&&Y9.isArrayBuffer,He=Y9&&Y9.isDate,We=Y9&&Y9.isMap,ke=Y9&&Y9.isRegExp,Ve=Y9&&Y9.isSet,Xe=Y9&&Y9.isTypedArray;function N9(k,o0,e0){switch(e0.length){case 0:return k.call(o0);case 1:return k.call(o0,e0[0]);case 2:return k.call(o0,e0[0],e0[1]);case 3:return k.call(o0,e0[0],e0[1],e0[2])}return k.apply(o0,e0)}function Hs(k,o0,e0,I0){for(var K0=-1,_5=k==null?0:k.length;++K0<_5;){var J5=k[K0];o0(I0,J5,e0(J5),k)}return I0}function Z9(k,o0){for(var e0=-1,I0=k==null?0:k.length;++e0<I0&&o0(k[e0],e0,k)!==!1;);return k}function Ws(k,o0){for(var e0=k==null?0:k.length;e0--&&o0(k[e0],e0,k)!==!1;);return k}function Ye(k,o0){for(var e0=-1,I0=k==null?0:k.length;++e0<I0;)if(!o0(k[e0],e0,k))return!1;return!0}function X2(k,o0){for(var e0=-1,I0=k==null?0:k.length,K0=0,_5=[];++e0<I0;){var J5=k[e0];o0(J5,e0,k)&&(_5[K0++]=J5)}return _5}function F4(k,o0){var e0=k==null?0:k.length;return!!e0&&H1(k,o0,0)>-1}function d6(k,o0,e0){for(var I0=-1,K0=k==null?0:k.length;++I0<K0;)if(e0(o0,k[I0]))return!0;return!1}function F5(k,o0){for(var e0=-1,I0=k==null?0:k.length,K0=Array(I0);++e0<I0;)K0[e0]=o0(k[e0],e0,k);return K0}function Y2(k,o0){for(var e0=-1,I0=o0.length,K0=k.length;++e0<I0;)k[K0+e0]=o0[e0];return k}function p6(k,o0,e0,I0){var K0=-1,_5=k==null?0:k.length;for(I0&&_5&&(e0=k[++K0]);++K0<_5;)e0=o0(e0,k[K0],K0,k);return e0}function ks(k,o0,e0,I0){var K0=k==null?0:k.length;for(I0&&K0&&(e0=k[--K0]);K0--;)e0=o0(e0,k[K0],K0,k);return e0}function m6(k,o0){for(var e0=-1,I0=k==null?0:k.length;++e0<I0;)if(o0(k[e0],e0,k))return!0;return!1}var Vs=g6("length");function Xs(k){return k.split("")}function Ys(k){return k.match(s0)||[]}function Ze(k,o0,e0){var I0;return e0(k,function(K0,_5,J5){if(o0(K0,_5,J5))return I0=_5,!1}),I0}function O4(k,o0,e0,I0){for(var K0=k.length,_5=e0+(I0?1:-1);I0?_5--:++_5<K0;)if(o0(k[_5],_5,k))return _5;return-1}function H1(k,o0,e0){return o0===o0?ro(k,o0,e0):O4(k,qe,e0)}function Zs(k,o0,e0,I0){for(var K0=e0-1,_5=k.length;++K0<_5;)if(I0(k[K0],o0))return K0;return-1}function qe(k){return k!==k}function je(k,o0){var e0=k==null?0:k.length;return e0?_6(k,o0)/e0:f0}function g6(k){return function(o0){return o0==null?t:o0[k]}}function v6(k){return function(o0){return k==null?t:k[o0]}}function Qe(k,o0,e0,I0,K0){return K0(k,function(_5,J5,T5){e0=I0?(I0=!1,_5):o0(e0,_5,J5,T5)}),e0}function qs(k,o0){var e0=k.length;for(k.sort(o0);e0--;)k[e0]=k[e0].value;return k}function _6(k,o0){for(var e0,I0=-1,K0=k.length;++I0<K0;){var _5=o0(k[I0]);_5!==t&&(e0=e0===t?_5:e0+_5)}return e0}function y6(k,o0){for(var e0=-1,I0=Array(k);++e0<k;)I0[e0]=o0(e0);return I0}function js(k,o0){return F5(o0,function(e0){return[e0,k[e0]]})}function Ke(k){return k&&k.slice(0,tt(k)+1).replace(H7,"")}function F9(k){return function(o0){return k(o0)}}function M6(k,o0){return F5(o0,function(e0){return k[e0]})}function Y7(k,o0){return k.has(o0)}function Je(k,o0){for(var e0=-1,I0=k.length;++e0<I0&&H1(o0,k[e0],0)>-1;);return e0}function $e(k,o0){for(var e0=k.length;e0--&&H1(o0,k[e0],0)>-1;);return e0}function Qs(k,o0){for(var e0=k.length,I0=0;e0--;)k[e0]===o0&&++I0;return I0}var Ks=v6(Ds),Js=v6(Ns);function $s(k){return"\\"+Os[k]}function eo(k,o0){return k==null?t:k[o0]}function W1(k){return Cs.test(k)}function to(k){return Ls.test(k)}function no(k){for(var o0,e0=[];!(o0=k.next()).done;)e0.push(o0.value);return e0}function x6(k){var o0=-1,e0=Array(k.size);return k.forEach(function(I0,K0){e0[++o0]=[K0,I0]}),e0}function et(k,o0){return function(e0){return k(o0(e0))}}function Z2(k,o0){for(var e0=-1,I0=k.length,K0=0,_5=[];++e0<I0;){var J5=k[e0];(J5===o0||J5===d)&&(k[e0]=d,_5[K0++]=e0)}return _5}function B4(k){var o0=-1,e0=Array(k.size);return k.forEach(function(I0){e0[++o0]=I0}),e0}function io(k){var o0=-1,e0=Array(k.size);return k.forEach(function(I0){e0[++o0]=[I0,I0]}),e0}function ro(k,o0,e0){for(var I0=e0-1,K0=k.length;++I0<K0;)if(k[I0]===o0)return I0;return-1}function so(k,o0,e0){for(var I0=e0+1;I0--;)if(k[I0]===o0)return I0;return I0}function k1(k){return W1(k)?ao(k):Vs(k)}function s2(k){return W1(k)?lo(k):Xs(k)}function tt(k){for(var o0=k.length;o0--&&s6.test(k.charAt(o0)););return o0}var oo=v6(Fs);function ao(k){for(var o0=u6.lastIndex=0;u6.test(k);)++o0;return o0}function lo(k){return k.match(u6)||[]}function co(k){return k.match(Ps)||[]}var uo=function k(o0){o0=o0==null?l9:V1.defaults(l9.Object(),o0,V1.pick(l9,Is));var e0=o0.Array,I0=o0.Date,K0=o0.Error,_5=o0.Function,J5=o0.Math,T5=o0.Object,S6=o0.RegExp,ho=o0.String,q9=o0.TypeError,z4=e0.prototype,fo=_5.prototype,X1=T5.prototype,G4=o0["__core-js_shared__"],H4=fo.toString,A5=X1.hasOwnProperty,po=0,nt=function(){var i=/[^.]+$/.exec(G4&&G4.keys&&G4.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),W4=X1.toString,mo=H4.call(T5),go=l9._,vo=S6("^"+H4.call(A5).replace(V2,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k4=ze?o0.Buffer:t,q2=o0.Symbol,V4=o0.Uint8Array,it=k4?k4.allocUnsafe:t,X4=et(T5.getPrototypeOf,T5),rt=T5.create,st=X1.propertyIsEnumerable,Y4=z4.splice,ot=q2?q2.isConcatSpreadable:t,Z7=q2?q2.iterator:t,f1=q2?q2.toStringTag:t,Z4=function(){try{var i=v1(T5,"defineProperty");return i({},"",{}),i}catch{}}(),_o=o0.clearTimeout!==l9.clearTimeout&&o0.clearTimeout,yo=I0&&I0.now!==l9.Date.now&&I0.now,Mo=o0.setTimeout!==l9.setTimeout&&o0.setTimeout,q4=J5.ceil,j4=J5.floor,E6=T5.getOwnPropertySymbols,xo=k4?k4.isBuffer:t,at=o0.isFinite,So=z4.join,Eo=et(T5.keys,T5),$5=J5.max,f9=J5.min,Ao=I0.now,bo=o0.parseInt,lt=J5.random,wo=z4.reverse,A6=v1(o0,"DataView"),q7=v1(o0,"Map"),b6=v1(o0,"Promise"),Y1=v1(o0,"Set"),j7=v1(o0,"WeakMap"),Q7=v1(T5,"create"),Q4=j7&&new j7,Z1={},To=_1(A6),Ro=_1(q7),Po=_1(b6),Co=_1(Y1),Lo=_1(j7),K4=q2?q2.prototype:t,K7=K4?K4.valueOf:t,ct=K4?K4.toString:t;function b(i){if(V5(i)&&!J0(i)&&!(i instanceof f5)){if(i instanceof j9)return i;if(A5.call(i,"__wrapped__"))return hn(i)}return new j9(i)}var q1=function(){function i(){}return function(s){if(!W5(s))return{};if(rt)return rt(s);i.prototype=s;var u=new i;return i.prototype=t,u}}();function J4(){}function j9(i,s){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}b.templateSettings={escape:E5,evaluate:r9,interpolate:r2,variable:"",imports:{_:b}},b.prototype=J4.prototype,b.prototype.constructor=b,j9.prototype=q1(J4.prototype),j9.prototype.constructor=j9;function f5(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=S0,this.__views__=[]}function Io(){var i=new f5(this.__wrapped__);return i.__actions__=R9(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=R9(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=R9(this.__views__),i}function Uo(){if(this.__filtered__){var i=new f5(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function Do(){var i=this.__wrapped__.value(),s=this.__dir__,u=J0(i),m=s<0,x=u?i.length:0,R=Ya(0,x,this.__views__),F=R.start,z=R.end,X=z-F,u0=m?z:F-1,d0=this.__iteratees__,m0=d0.length,T0=0,N0=f9(X,this.__takeCount__);if(!u||!m&&x==X&&N0==X)return Ut(i,this.__actions__);var Z0=[];e:for(;X--&&T0<N0;){u0+=s;for(var n5=-1,q0=i[u0];++n5<m0;){var c5=d0[n5],p5=c5.iteratee,z9=c5.type,M9=p5(q0);if(z9==K)q0=M9;else if(!M9){if(z9==Y)continue e;break e}}Z0[T0++]=q0}return Z0}f5.prototype=q1(J4.prototype),f5.prototype.constructor=f5;function d1(i){var s=-1,u=i==null?0:i.length;for(this.clear();++s<u;){var m=i[s];this.set(m[0],m[1])}}function No(){this.__data__=Q7?Q7(null):{},this.size=0}function Fo(i){var s=this.has(i)&&delete this.__data__[i];return this.size-=s?1:0,s}function Oo(i){var s=this.__data__;if(Q7){var u=s[i];return u===h?t:u}return A5.call(s,i)?s[i]:t}function Bo(i){var s=this.__data__;return Q7?s[i]!==t:A5.call(s,i)}function zo(i,s){var u=this.__data__;return this.size+=this.has(i)?0:1,u[i]=Q7&&s===t?h:s,this}d1.prototype.clear=No,d1.prototype.delete=Fo,d1.prototype.get=Oo,d1.prototype.has=Bo,d1.prototype.set=zo;function w2(i){var s=-1,u=i==null?0:i.length;for(this.clear();++s<u;){var m=i[s];this.set(m[0],m[1])}}function Go(){this.__data__=[],this.size=0}function Ho(i){var s=this.__data__,u=$4(s,i);if(u<0)return!1;var m=s.length-1;return u==m?s.pop():Y4.call(s,u,1),--this.size,!0}function Wo(i){var s=this.__data__,u=$4(s,i);return u<0?t:s[u][1]}function ko(i){return $4(this.__data__,i)>-1}function Vo(i,s){var u=this.__data__,m=$4(u,i);return m<0?(++this.size,u.push([i,s])):u[m][1]=s,this}w2.prototype.clear=Go,w2.prototype.delete=Ho,w2.prototype.get=Wo,w2.prototype.has=ko,w2.prototype.set=Vo;function T2(i){var s=-1,u=i==null?0:i.length;for(this.clear();++s<u;){var m=i[s];this.set(m[0],m[1])}}function Xo(){this.size=0,this.__data__={hash:new d1,map:new(q7||w2),string:new d1}}function Yo(i){var s=h3(this,i).delete(i);return this.size-=s?1:0,s}function Zo(i){return h3(this,i).get(i)}function qo(i){return h3(this,i).has(i)}function jo(i,s){var u=h3(this,i),m=u.size;return u.set(i,s),this.size+=u.size==m?0:1,this}T2.prototype.clear=Xo,T2.prototype.delete=Yo,T2.prototype.get=Zo,T2.prototype.has=qo,T2.prototype.set=jo;function p1(i){var s=-1,u=i==null?0:i.length;for(this.__data__=new T2;++s<u;)this.add(i[s])}function Qo(i){return this.__data__.set(i,h),this}function Ko(i){return this.__data__.has(i)}p1.prototype.add=p1.prototype.push=Qo,p1.prototype.has=Ko;function o2(i){var s=this.__data__=new w2(i);this.size=s.size}function Jo(){this.__data__=new w2,this.size=0}function $o(i){var s=this.__data__,u=s.delete(i);return this.size=s.size,u}function ea(i){return this.__data__.get(i)}function ta(i){return this.__data__.has(i)}function na(i,s){var u=this.__data__;if(u instanceof w2){var m=u.__data__;if(!q7||m.length<o-1)return m.push([i,s]),this.size=++u.size,this;u=this.__data__=new T2(m)}return u.set(i,s),this.size=u.size,this}o2.prototype.clear=Jo,o2.prototype.delete=$o,o2.prototype.get=ea,o2.prototype.has=ta,o2.prototype.set=na;function ut(i,s){var u=J0(i),m=!u&&y1(i),x=!u&&!m&&$2(i),R=!u&&!m&&!x&&J1(i),F=u||m||x||R,z=F?y6(i.length,ho):[],X=z.length;for(var u0 in i)(s||A5.call(i,u0))&&!(F&&(u0=="length"||x&&(u0=="offset"||u0=="parent")||R&&(u0=="buffer"||u0=="byteLength"||u0=="byteOffset")||L2(u0,X)))&&z.push(u0);return z}function ht(i){var s=i.length;return s?i[F6(0,s-1)]:t}function ia(i,s){return f3(R9(i),m1(s,0,i.length))}function ra(i){return f3(R9(i))}function w6(i,s,u){(u!==t&&!a2(i[s],u)||u===t&&!(s in i))&&R2(i,s,u)}function J7(i,s,u){var m=i[s];(!(A5.call(i,s)&&a2(m,u))||u===t&&!(s in i))&&R2(i,s,u)}function $4(i,s){for(var u=i.length;u--;)if(a2(i[u][0],s))return u;return-1}function sa(i,s,u,m){return j2(i,function(x,R,F){s(m,x,u(x),F)}),m}function ft(i,s){return i&&v2(s,s9(s),i)}function oa(i,s){return i&&v2(s,C9(s),i)}function R2(i,s,u){s=="__proto__"&&Z4?Z4(i,s,{configurable:!0,enumerable:!0,value:u,writable:!0}):i[s]=u}function T6(i,s){for(var u=-1,m=s.length,x=e0(m),R=i==null;++u<m;)x[u]=R?t:a8(i,s[u]);return x}function m1(i,s,u){return i===i&&(u!==t&&(i=i<=u?i:u),s!==t&&(i=i>=s?i:s)),i}function Q9(i,s,u,m,x,R){var F,z=s&p,X=s&v,u0=s&_;if(u&&(F=x?u(i,m,x,R):u(i)),F!==t)return F;if(!W5(i))return i;var d0=J0(i);if(d0){if(F=qa(i),!z)return R9(i,F)}else{var m0=d9(i),T0=m0==u5||m0==F0;if($2(i))return Ft(i,z);if(m0==y5||m0==y0||T0&&!x){if(F=X||T0?{}:tn(i),!z)return X?Oa(i,oa(F,i)):Fa(i,ft(F,i))}else{if(!P5[m0])return x?i:{};F=ja(i,m0,z)}}R||(R=new o2);var N0=R.get(i);if(N0)return N0;R.set(i,F),Ln(i)?i.forEach(function(q0){F.add(Q9(q0,s,u,q0,i,R))}):Pn(i)&&i.forEach(function(q0,c5){F.set(c5,Q9(q0,s,u,c5,i,R))});var Z0=u0?X?Z6:Y6:X?C9:s9,n5=d0?t:Z0(i);return Z9(n5||i,function(q0,c5){n5&&(c5=q0,q0=i[c5]),J7(F,c5,Q9(q0,s,u,c5,i,R))}),F}function aa(i){var s=s9(i);return function(u){return dt(u,i,s)}}function dt(i,s,u){var m=u.length;if(i==null)return!m;for(i=T5(i);m--;){var x=u[m],R=s[x],F=i[x];if(F===t&&!(x in i)||!R(F))return!1}return!0}function pt(i,s,u){if(typeof i!="function")throw new q9(l);return s4(function(){i.apply(t,u)},s)}function $7(i,s,u,m){var x=-1,R=F4,F=!0,z=i.length,X=[],u0=s.length;if(!z)return X;u&&(s=F5(s,F9(u))),m?(R=d6,F=!1):s.length>=o&&(R=Y7,F=!1,s=new p1(s));e:for(;++x<z;){var d0=i[x],m0=u==null?d0:u(d0);if(d0=m||d0!==0?d0:0,F&&m0===m0){for(var T0=u0;T0--;)if(s[T0]===m0)continue e;X.push(d0)}else R(s,m0,m)||X.push(d0)}return X}var j2=Ht(g2),mt=Ht(P6,!0);function la(i,s){var u=!0;return j2(i,function(m,x,R){return u=!!s(m,x,R),u}),u}function e3(i,s,u){for(var m=-1,x=i.length;++m<x;){var R=i[m],F=s(R);if(F!=null&&(z===t?F===F&&!B9(F):u(F,z)))var z=F,X=R}return X}function ca(i,s,u,m){var x=i.length;for(u=t5(u),u<0&&(u=-u>x?0:x+u),m=m===t||m>x?x:t5(m),m<0&&(m+=x),m=u>m?0:Un(m);u<m;)i[u++]=s;return i}function gt(i,s){var u=[];return j2(i,function(m,x,R){s(m,x,R)&&u.push(m)}),u}function c9(i,s,u,m,x){var R=-1,F=i.length;for(u||(u=Ka),x||(x=[]);++R<F;){var z=i[R];s>0&&u(z)?s>1?c9(z,s-1,u,m,x):Y2(x,z):m||(x[x.length]=z)}return x}var R6=Wt(),vt=Wt(!0);function g2(i,s){return i&&R6(i,s,s9)}function P6(i,s){return i&&vt(i,s,s9)}function t3(i,s){return X2(s,function(u){return I2(i[u])})}function g1(i,s){s=K2(s,i);for(var u=0,m=s.length;i!=null&&u<m;)i=i[_2(s[u++])];return u&&u==m?i:t}function _t(i,s,u){var m=s(i);return J0(i)?m:Y2(m,u(i))}function _9(i){return i==null?i===t?i0:I5:f1&&f1 in T5(i)?Xa(i):rl(i)}function C6(i,s){return i>s}function ua(i,s){return i!=null&&A5.call(i,s)}function ha(i,s){return i!=null&&s in T5(i)}function fa(i,s,u){return i>=f9(s,u)&&i<$5(s,u)}function L6(i,s,u){for(var m=u?d6:F4,x=i[0].length,R=i.length,F=R,z=e0(R),X=1/0,u0=[];F--;){var d0=i[F];F&&s&&(d0=F5(d0,F9(s))),X=f9(d0.length,X),z[F]=!u&&(s||x>=120&&d0.length>=120)?new p1(F&&d0):t}d0=i[0];var m0=-1,T0=z[0];e:for(;++m0<x&&u0.length<X;){var N0=d0[m0],Z0=s?s(N0):N0;if(N0=u||N0!==0?N0:0,!(T0?Y7(T0,Z0):m(u0,Z0,u))){for(F=R;--F;){var n5=z[F];if(!(n5?Y7(n5,Z0):m(i[F],Z0,u)))continue e}T0&&T0.push(Z0),u0.push(N0)}}return u0}function da(i,s,u,m){return g2(i,function(x,R,F){s(m,u(x),R,F)}),m}function e4(i,s,u){s=K2(s,i),i=on(i,s);var m=i==null?i:i[_2(J9(s))];return m==null?t:N9(m,i,u)}function yt(i){return V5(i)&&_9(i)==y0}function pa(i){return V5(i)&&_9(i)==x0}function ma(i){return V5(i)&&_9(i)==G0}function t4(i,s,u,m,x){return i===s?!0:i==null||s==null||!V5(i)&&!V5(s)?i!==i&&s!==s:ga(i,s,u,m,t4,x)}function ga(i,s,u,m,x,R){var F=J0(i),z=J0(s),X=F?w0:d9(i),u0=z?w0:d9(s);X=X==y0?y5:X,u0=u0==y0?y5:u0;var d0=X==y5,m0=u0==y5,T0=X==u0;if(T0&&$2(i)){if(!$2(s))return!1;F=!0,d0=!1}if(T0&&!d0)return R||(R=new o2),F||J1(i)?Jt(i,s,u,m,x,R):ka(i,s,X,u,m,x,R);if(!(u&M)){var N0=d0&&A5.call(i,"__wrapped__"),Z0=m0&&A5.call(s,"__wrapped__");if(N0||Z0){var n5=N0?i.value():i,q0=Z0?s.value():s;return R||(R=new o2),x(n5,q0,u,m,R)}}return T0?(R||(R=new o2),Va(i,s,u,m,x,R)):!1}function va(i){return V5(i)&&d9(i)==k0}function I6(i,s,u,m){var x=u.length,R=x,F=!m;if(i==null)return!R;for(i=T5(i);x--;){var z=u[x];if(F&&z[2]?z[1]!==i[z[0]]:!(z[0]in i))return!1}for(;++x<R;){z=u[x];var X=z[0],u0=i[X],d0=z[1];if(F&&z[2]){if(u0===t&&!(X in i))return!1}else{var m0=new o2;if(m)var T0=m(u0,d0,X,i,s,m0);if(!(T0===t?t4(d0,u0,M|S,m,m0):T0))return!1}}return!0}function Mt(i){if(!W5(i)||$a(i))return!1;var s=I2(i)?vo:r5;return s.test(_1(i))}function _a(i){return V5(i)&&_9(i)==v5}function ya(i){return V5(i)&&d9(i)==w5}function Ma(i){return V5(i)&&_3(i.length)&&!!U5[_9(i)]}function xt(i){return typeof i=="function"?i:i==null?L9:typeof i=="object"?J0(i)?At(i[0],i[1]):Et(i):Vn(i)}function U6(i){if(!r4(i))return Eo(i);var s=[];for(var u in T5(i))A5.call(i,u)&&u!="constructor"&&s.push(u);return s}function xa(i){if(!W5(i))return il(i);var s=r4(i),u=[];for(var m in i)m=="constructor"&&(s||!A5.call(i,m))||u.push(m);return u}function D6(i,s){return i<s}function St(i,s){var u=-1,m=P9(i)?e0(i.length):[];return j2(i,function(x,R,F){m[++u]=s(x,R,F)}),m}function Et(i){var s=j6(i);return s.length==1&&s[0][2]?rn(s[0][0],s[0][1]):function(u){return u===i||I6(u,i,s)}}function At(i,s){return K6(i)&&nn(s)?rn(_2(i),s):function(u){var m=a8(u,i);return m===t&&m===s?l8(u,i):t4(s,m,M|S)}}function n3(i,s,u,m,x){i!==s&&R6(s,function(R,F){if(x||(x=new o2),W5(R))Sa(i,s,F,u,n3,m,x);else{var z=m?m($6(i,F),R,F+"",i,s,x):t;z===t&&(z=R),w6(i,F,z)}},C9)}function Sa(i,s,u,m,x,R,F){var z=$6(i,u),X=$6(s,u),u0=F.get(X);if(u0){w6(i,u,u0);return}var d0=R?R(z,X,u+"",i,s,F):t,m0=d0===t;if(m0){var T0=J0(X),N0=!T0&&$2(X),Z0=!T0&&!N0&&J1(X);d0=X,T0||N0||Z0?J0(z)?d0=z:Z5(z)?d0=R9(z):N0?(m0=!1,d0=Ft(X,!0)):Z0?(m0=!1,d0=Ot(X,!0)):d0=[]:o4(X)||y1(X)?(d0=z,y1(z)?d0=Dn(z):(!W5(z)||I2(z))&&(d0=tn(X))):m0=!1}m0&&(F.set(X,d0),x(d0,X,m,R,F),F.delete(X)),w6(i,u,d0)}function bt(i,s){var u=i.length;if(u)return s+=s<0?u:0,L2(s,u)?i[s]:t}function wt(i,s,u){s.length?s=F5(s,function(R){return J0(R)?function(F){return g1(F,R.length===1?R[0]:R)}:R}):s=[L9];var m=-1;s=F5(s,F9(V0()));var x=St(i,function(R,F,z){var X=F5(s,function(u0){return u0(R)});return{criteria:X,index:++m,value:R}});return qs(x,function(R,F){return Na(R,F,u)})}function Ea(i,s){return Tt(i,s,function(u,m){return l8(i,m)})}function Tt(i,s,u){for(var m=-1,x=s.length,R={};++m<x;){var F=s[m],z=g1(i,F);u(z,F)&&n4(R,K2(F,i),z)}return R}function Aa(i){return function(s){return g1(s,i)}}function N6(i,s,u,m){var x=m?Zs:H1,R=-1,F=s.length,z=i;for(i===s&&(s=R9(s)),u&&(z=F5(i,F9(u)));++R<F;)for(var X=0,u0=s[R],d0=u?u(u0):u0;(X=x(z,d0,X,m))>-1;)z!==i&&Y4.call(z,X,1),Y4.call(i,X,1);return i}function Rt(i,s){for(var u=i?s.length:0,m=u-1;u--;){var x=s[u];if(u==m||x!==R){var R=x;L2(x)?Y4.call(i,x,1):z6(i,x)}}return i}function F6(i,s){return i+j4(lt()*(s-i+1))}function ba(i,s,u,m){for(var x=-1,R=$5(q4((s-i)/(u||1)),0),F=e0(R);R--;)F[m?R:++x]=i,i+=u;return F}function O6(i,s){var u="";if(!i||s<1||s>$)return u;do s%2&&(u+=i),s=j4(s/2),s&&(i+=i);while(s);return u}function o5(i,s){return e8(sn(i,s,L9),i+"")}function wa(i){return ht($1(i))}function Ta(i,s){var u=$1(i);return f3(u,m1(s,0,u.length))}function n4(i,s,u,m){if(!W5(i))return i;s=K2(s,i);for(var x=-1,R=s.length,F=R-1,z=i;z!=null&&++x<R;){var X=_2(s[x]),u0=u;if(X==="__proto__"||X==="constructor"||X==="prototype")return i;if(x!=F){var d0=z[X];u0=m?m(d0,X,z):t,u0===t&&(u0=W5(d0)?d0:L2(s[x+1])?[]:{})}J7(z,X,u0),z=z[X]}return i}var Pt=Q4?function(i,s){return Q4.set(i,s),i}:L9,Ra=Z4?function(i,s){return Z4(i,"toString",{configurable:!0,enumerable:!1,value:u8(s),writable:!0})}:L9;function Pa(i){return f3($1(i))}function K9(i,s,u){var m=-1,x=i.length;s<0&&(s=-s>x?0:x+s),u=u>x?x:u,u<0&&(u+=x),x=s>u?0:u-s>>>0,s>>>=0;for(var R=e0(x);++m<x;)R[m]=i[m+s];return R}function Ca(i,s){var u;return j2(i,function(m,x,R){return u=s(m,x,R),!u}),!!u}function i3(i,s,u){var m=0,x=i==null?m:i.length;if(typeof s=="number"&&s===s&&x<=n0){for(;m<x;){var R=m+x>>>1,F=i[R];F!==null&&!B9(F)&&(u?F<=s:F<s)?m=R+1:x=R}return x}return B6(i,s,L9,u)}function B6(i,s,u,m){var x=0,R=i==null?0:i.length;if(R===0)return 0;s=u(s);for(var F=s!==s,z=s===null,X=B9(s),u0=s===t;x<R;){var d0=j4((x+R)/2),m0=u(i[d0]),T0=m0!==t,N0=m0===null,Z0=m0===m0,n5=B9(m0);if(F)var q0=m||Z0;else u0?q0=Z0&&(m||T0):z?q0=Z0&&T0&&(m||!N0):X?q0=Z0&&T0&&!N0&&(m||!n5):N0||n5?q0=!1:q0=m?m0<=s:m0<s;q0?x=d0+1:R=d0}return f9(R,E0)}function Ct(i,s){for(var u=-1,m=i.length,x=0,R=[];++u<m;){var F=i[u],z=s?s(F):F;if(!u||!a2(z,X)){var X=z;R[x++]=F===0?0:F}}return R}function Lt(i){return typeof i=="number"?i:B9(i)?f0:+i}function O9(i){if(typeof i=="string")return i;if(J0(i))return F5(i,O9)+"";if(B9(i))return ct?ct.call(i):"";var s=i+"";return s=="0"&&1/i==-Q?"-0":s}function Q2(i,s,u){var m=-1,x=F4,R=i.length,F=!0,z=[],X=z;if(u)F=!1,x=d6;else if(R>=o){var u0=s?null:Ha(i);if(u0)return B4(u0);F=!1,x=Y7,X=new p1}else X=s?[]:z;e:for(;++m<R;){var d0=i[m],m0=s?s(d0):d0;if(d0=u||d0!==0?d0:0,F&&m0===m0){for(var T0=X.length;T0--;)if(X[T0]===m0)continue e;s&&X.push(m0),z.push(d0)}else x(X,m0,u)||(X!==z&&X.push(m0),z.push(d0))}return z}function z6(i,s){return s=K2(s,i),i=on(i,s),i==null||delete i[_2(J9(s))]}function It(i,s,u,m){return n4(i,s,u(g1(i,s)),m)}function r3(i,s,u,m){for(var x=i.length,R=m?x:-1;(m?R--:++R<x)&&s(i[R],R,i););return u?K9(i,m?0:R,m?R+1:x):K9(i,m?R+1:0,m?x:R)}function Ut(i,s){var u=i;return u instanceof f5&&(u=u.value()),p6(s,function(m,x){return x.func.apply(x.thisArg,Y2([m],x.args))},u)}function G6(i,s,u){var m=i.length;if(m<2)return m?Q2(i[0]):[];for(var x=-1,R=e0(m);++x<m;)for(var F=i[x],z=-1;++z<m;)z!=x&&(R[x]=$7(R[x]||F,i[z],s,u));return Q2(c9(R,1),s,u)}function Dt(i,s,u){for(var m=-1,x=i.length,R=s.length,F={};++m<x;){var z=m<R?s[m]:t;u(F,i[m],z)}return F}function H6(i){return Z5(i)?i:[]}function W6(i){return typeof i=="function"?i:L9}function K2(i,s){return J0(i)?i:K6(i,s)?[i]:un(x5(i))}var La=o5;function J2(i,s,u){var m=i.length;return u=u===t?m:u,!s&&u>=m?i:K9(i,s,u)}var Nt=_o||function(i){return l9.clearTimeout(i)};function Ft(i,s){if(s)return i.slice();var u=i.length,m=it?it(u):new i.constructor(u);return i.copy(m),m}function k6(i){var s=new i.constructor(i.byteLength);return new V4(s).set(new V4(i)),s}function Ia(i,s){var u=s?k6(i.buffer):i.buffer;return new i.constructor(u,i.byteOffset,i.byteLength)}function Ua(i){var s=new i.constructor(i.source,W0.exec(i));return s.lastIndex=i.lastIndex,s}function Da(i){return K7?T5(K7.call(i)):{}}function Ot(i,s){var u=s?k6(i.buffer):i.buffer;return new i.constructor(u,i.byteOffset,i.length)}function Bt(i,s){if(i!==s){var u=i!==t,m=i===null,x=i===i,R=B9(i),F=s!==t,z=s===null,X=s===s,u0=B9(s);if(!z&&!u0&&!R&&i>s||R&&F&&X&&!z&&!u0||m&&F&&X||!u&&X||!x)return 1;if(!m&&!R&&!u0&&i<s||u0&&u&&x&&!m&&!R||z&&u&&x||!F&&x||!X)return-1}return 0}function Na(i,s,u){for(var m=-1,x=i.criteria,R=s.criteria,F=x.length,z=u.length;++m<F;){var X=Bt(x[m],R[m]);if(X){if(m>=z)return X;var u0=u[m];return X*(u0=="desc"?-1:1)}}return i.index-s.index}function zt(i,s,u,m){for(var x=-1,R=i.length,F=u.length,z=-1,X=s.length,u0=$5(R-F,0),d0=e0(X+u0),m0=!m;++z<X;)d0[z]=s[z];for(;++x<F;)(m0||x<R)&&(d0[u[x]]=i[x]);for(;u0--;)d0[z++]=i[x++];return d0}function Gt(i,s,u,m){for(var x=-1,R=i.length,F=-1,z=u.length,X=-1,u0=s.length,d0=$5(R-z,0),m0=e0(d0+u0),T0=!m;++x<d0;)m0[x]=i[x];for(var N0=x;++X<u0;)m0[N0+X]=s[X];for(;++F<z;)(T0||x<R)&&(m0[N0+u[F]]=i[x++]);return m0}function R9(i,s){var u=-1,m=i.length;for(s||(s=e0(m));++u<m;)s[u]=i[u];return s}function v2(i,s,u,m){var x=!u;u||(u={});for(var R=-1,F=s.length;++R<F;){var z=s[R],X=m?m(u[z],i[z],z,u,i):t;X===t&&(X=i[z]),x?R2(u,z,X):J7(u,z,X)}return u}function Fa(i,s){return v2(i,Q6(i),s)}function Oa(i,s){return v2(i,$t(i),s)}function s3(i,s){return function(u,m){var x=J0(u)?Hs:sa,R=s?s():{};return x(u,i,V0(m,2),R)}}function j1(i){return o5(function(s,u){var m=-1,x=u.length,R=x>1?u[x-1]:t,F=x>2?u[2]:t;for(R=i.length>3&&typeof R=="function"?(x--,R):t,F&&y9(u[0],u[1],F)&&(R=x<3?t:R,x=1),s=T5(s);++m<x;){var z=u[m];z&&i(s,z,m,R)}return s})}function Ht(i,s){return function(u,m){if(u==null)return u;if(!P9(u))return i(u,m);for(var x=u.length,R=s?x:-1,F=T5(u);(s?R--:++R<x)&&m(F[R],R,F)!==!1;);return u}}function Wt(i){return function(s,u,m){for(var x=-1,R=T5(s),F=m(s),z=F.length;z--;){var X=F[i?z:++x];if(u(R[X],X,R)===!1)break}return s}}function Ba(i,s,u){var m=s&y,x=i4(i);function R(){var F=this&&this!==l9&&this instanceof R?x:i;return F.apply(m?u:this,arguments)}return R}function kt(i){return function(s){s=x5(s);var u=W1(s)?s2(s):t,m=u?u[0]:s.charAt(0),x=u?J2(u,1).join(""):s.slice(1);return m[i]()+x}}function Q1(i){return function(s){return p6(Wn(Hn(s).replace(Ts,"")),i,"")}}function i4(i){return function(){var s=arguments;switch(s.length){case 0:return new i;case 1:return new i(s[0]);case 2:return new i(s[0],s[1]);case 3:return new i(s[0],s[1],s[2]);case 4:return new i(s[0],s[1],s[2],s[3]);case 5:return new i(s[0],s[1],s[2],s[3],s[4]);case 6:return new i(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new i(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var u=q1(i.prototype),m=i.apply(u,s);return W5(m)?m:u}}function za(i,s,u){var m=i4(i);function x(){for(var R=arguments.length,F=e0(R),z=R,X=K1(x);z--;)F[z]=arguments[z];var u0=R<3&&F[0]!==X&&F[R-1]!==X?[]:Z2(F,X);if(R-=u0.length,R<u)return qt(i,s,o3,x.placeholder,t,F,u0,t,t,u-R);var d0=this&&this!==l9&&this instanceof x?m:i;return N9(d0,this,F)}return x}function Vt(i){return function(s,u,m){var x=T5(s);if(!P9(s)){var R=V0(u,3);s=s9(s),u=function(z){return R(x[z],z,x)}}var F=i(s,u,m);return F>-1?x[R?s[F]:F]:t}}function Xt(i){return C2(function(s){var u=s.length,m=u,x=j9.prototype.thru;for(i&&s.reverse();m--;){var R=s[m];if(typeof R!="function")throw new q9(l);if(x&&!F&&u3(R)=="wrapper")var F=new j9([],!0)}for(m=F?m:u;++m<u;){R=s[m];var z=u3(R),X=z=="wrapper"?q6(R):t;X&&J6(X[0])&&X[1]==(O|E|T|V)&&!X[4].length&&X[9]==1?F=F[u3(X[0])].apply(F,X[3]):F=R.length==1&&J6(R)?F[z]():F.thru(R)}return function(){var u0=arguments,d0=u0[0];if(F&&u0.length==1&&J0(d0))return F.plant(d0).value();for(var m0=0,T0=u?s[m0].apply(this,u0):d0;++m0<u;)T0=s[m0].call(this,T0);return T0}})}function o3(i,s,u,m,x,R,F,z,X,u0){var d0=s&O,m0=s&y,T0=s&g,N0=s&(E|L),Z0=s&A,n5=T0?t:i4(i);function q0(){for(var c5=arguments.length,p5=e0(c5),z9=c5;z9--;)p5[z9]=arguments[z9];if(N0)var M9=K1(q0),G9=Qs(p5,M9);if(m&&(p5=zt(p5,m,x,N0)),R&&(p5=Gt(p5,R,F,N0)),c5-=G9,N0&&c5<u0){var q5=Z2(p5,M9);return qt(i,s,o3,q0.placeholder,u,p5,q5,z,X,u0-c5)}var l2=m0?u:this,D2=T0?l2[i]:i;return c5=p5.length,z?p5=sl(p5,z):Z0&&c5>1&&p5.reverse(),d0&&X<c5&&(p5.length=X),this&&this!==l9&&this instanceof q0&&(D2=n5||i4(D2)),D2.apply(l2,p5)}return q0}function Yt(i,s){return function(u,m){return da(u,i,s(m),{})}}function a3(i,s){return function(u,m){var x;if(u===t&&m===t)return s;if(u!==t&&(x=u),m!==t){if(x===t)return m;typeof u=="string"||typeof m=="string"?(u=O9(u),m=O9(m)):(u=Lt(u),m=Lt(m)),x=i(u,m)}return x}}function V6(i){return C2(function(s){return s=F5(s,F9(V0())),o5(function(u){var m=this;return i(s,function(x){return N9(x,m,u)})})})}function l3(i,s){s=s===t?" ":O9(s);var u=s.length;if(u<2)return u?O6(s,i):s;var m=O6(s,q4(i/k1(s)));return W1(s)?J2(s2(m),0,i).join(""):m.slice(0,i)}function Ga(i,s,u,m){var x=s&y,R=i4(i);function F(){for(var z=-1,X=arguments.length,u0=-1,d0=m.length,m0=e0(d0+X),T0=this&&this!==l9&&this instanceof F?R:i;++u0<d0;)m0[u0]=m[u0];for(;X--;)m0[u0++]=arguments[++z];return N9(T0,x?u:this,m0)}return F}function Zt(i){return function(s,u,m){return m&&typeof m!="number"&&y9(s,u,m)&&(u=m=t),s=U2(s),u===t?(u=s,s=0):u=U2(u),m=m===t?s<u?1:-1:U2(m),ba(s,u,m,i)}}function c3(i){return function(s,u){return typeof s=="string"&&typeof u=="string"||(s=$9(s),u=$9(u)),i(s,u)}}function qt(i,s,u,m,x,R,F,z,X,u0){var d0=s&E,m0=d0?F:t,T0=d0?t:F,N0=d0?R:t,Z0=d0?t:R;s|=d0?T:U,s&=~(d0?U:T),s&w||(s&=~(y|g));var n5=[i,s,x,N0,m0,Z0,T0,z,X,u0],q0=u.apply(t,n5);return J6(i)&&an(q0,n5),q0.placeholder=m,ln(q0,i,s)}function X6(i){var s=J5[i];return function(u,m){if(u=$9(u),m=m==null?0:f9(t5(m),292),m&&at(u)){var x=(x5(u)+"e").split("e"),R=s(x[0]+"e"+(+x[1]+m));return x=(x5(R)+"e").split("e"),+(x[0]+"e"+(+x[1]-m))}return s(u)}}var Ha=Y1&&1/B4(new Y1([,-0]))[1]==Q?function(i){return new Y1(i)}:d8;function jt(i){return function(s){var u=d9(s);return u==k0?x6(s):u==w5?io(s):js(s,i(s))}}function P2(i,s,u,m,x,R,F,z){var X=s&g;if(!X&&typeof i!="function")throw new q9(l);var u0=m?m.length:0;if(u0||(s&=~(T|U),m=x=t),F=F===t?F:$5(t5(F),0),z=z===t?z:t5(z),u0-=x?x.length:0,s&U){var d0=m,m0=x;m=x=t}var T0=X?t:q6(i),N0=[i,s,u,m,x,d0,m0,R,F,z];if(T0&&nl(N0,T0),i=N0[0],s=N0[1],u=N0[2],m=N0[3],x=N0[4],z=N0[9]=N0[9]===t?X?0:i.length:$5(N0[9]-u0,0),!z&&s&(E|L)&&(s&=~(E|L)),!s||s==y)var Z0=Ba(i,s,u);else s==E||s==L?Z0=za(i,s,z):(s==T||s==(y|T))&&!x.length?Z0=Ga(i,s,u,m):Z0=o3.apply(t,N0);var n5=T0?Pt:an;return ln(n5(Z0,N0),i,s)}function Qt(i,s,u,m){return i===t||a2(i,X1[u])&&!A5.call(m,u)?s:i}function Kt(i,s,u,m,x,R){return W5(i)&&W5(s)&&(R.set(s,i),n3(i,s,t,Kt,R),R.delete(s)),i}function Wa(i){return o4(i)?t:i}function Jt(i,s,u,m,x,R){var F=u&M,z=i.length,X=s.length;if(z!=X&&!(F&&X>z))return!1;var u0=R.get(i),d0=R.get(s);if(u0&&d0)return u0==s&&d0==i;var m0=-1,T0=!0,N0=u&S?new p1:t;for(R.set(i,s),R.set(s,i);++m0<z;){var Z0=i[m0],n5=s[m0];if(m)var q0=F?m(n5,Z0,m0,s,i,R):m(Z0,n5,m0,i,s,R);if(q0!==t){if(q0)continue;T0=!1;break}if(N0){if(!m6(s,function(c5,p5){if(!Y7(N0,p5)&&(Z0===c5||x(Z0,c5,u,m,R)))return N0.push(p5)})){T0=!1;break}}else if(!(Z0===n5||x(Z0,n5,u,m,R))){T0=!1;break}}return R.delete(i),R.delete(s),T0}function ka(i,s,u,m,x,R,F){switch(u){case B:if(i.byteLength!=s.byteLength||i.byteOffset!=s.byteOffset)return!1;i=i.buffer,s=s.buffer;case x0:return!(i.byteLength!=s.byteLength||!R(new V4(i),new V4(s)));case Y0:case G0:case b5:return a2(+i,+s);case B0:return i.name==s.name&&i.message==s.message;case v5:case D:return i==s+"";case k0:var z=x6;case w5:var X=m&M;if(z||(z=B4),i.size!=s.size&&!X)return!1;var u0=F.get(i);if(u0)return u0==s;m|=S,F.set(i,s);var d0=Jt(z(i),z(s),m,x,R,F);return F.delete(i),d0;case C:if(K7)return K7.call(i)==K7.call(s)}return!1}function Va(i,s,u,m,x,R){var F=u&M,z=Y6(i),X=z.length,u0=Y6(s),d0=u0.length;if(X!=d0&&!F)return!1;for(var m0=X;m0--;){var T0=z[m0];if(!(F?T0 in s:A5.call(s,T0)))return!1}var N0=R.get(i),Z0=R.get(s);if(N0&&Z0)return N0==s&&Z0==i;var n5=!0;R.set(i,s),R.set(s,i);for(var q0=F;++m0<X;){T0=z[m0];var c5=i[T0],p5=s[T0];if(m)var z9=F?m(p5,c5,T0,s,i,R):m(c5,p5,T0,i,s,R);if(!(z9===t?c5===p5||x(c5,p5,u,m,R):z9)){n5=!1;break}q0||(q0=T0=="constructor")}if(n5&&!q0){var M9=i.constructor,G9=s.constructor;M9!=G9&&"constructor"in i&&"constructor"in s&&!(typeof M9=="function"&&M9 instanceof M9&&typeof G9=="function"&&G9 instanceof G9)&&(n5=!1)}return R.delete(i),R.delete(s),n5}function C2(i){return e8(sn(i,t,pn),i+"")}function Y6(i){return _t(i,s9,Q6)}function Z6(i){return _t(i,C9,$t)}var q6=Q4?function(i){return Q4.get(i)}:d8;function u3(i){for(var s=i.name+"",u=Z1[s],m=A5.call(Z1,s)?u.length:0;m--;){var x=u[m],R=x.func;if(R==null||R==i)return x.name}return s}function K1(i){var s=A5.call(b,"placeholder")?b:i;return s.placeholder}function V0(){var i=b.iteratee||h8;return i=i===h8?xt:i,arguments.length?i(arguments[0],arguments[1]):i}function h3(i,s){var u=i.__data__;return Ja(s)?u[typeof s=="string"?"string":"hash"]:u.map}function j6(i){for(var s=s9(i),u=s.length;u--;){var m=s[u],x=i[m];s[u]=[m,x,nn(x)]}return s}function v1(i,s){var u=eo(i,s);return Mt(u)?u:t}function Xa(i){var s=A5.call(i,f1),u=i[f1];try{i[f1]=t;var m=!0}catch{}var x=W4.call(i);return m&&(s?i[f1]=u:delete i[f1]),x}var Q6=E6?function(i){return i==null?[]:(i=T5(i),X2(E6(i),function(s){return st.call(i,s)}))}:p8,$t=E6?function(i){for(var s=[];i;)Y2(s,Q6(i)),i=X4(i);return s}:p8,d9=_9;(A6&&d9(new A6(new ArrayBuffer(1)))!=B||q7&&d9(new q7)!=k0||b6&&d9(b6.resolve())!=N5||Y1&&d9(new Y1)!=w5||j7&&d9(new j7)!=g0)&&(d9=function(i){var s=_9(i),u=s==y5?i.constructor:t,m=u?_1(u):"";if(m)switch(m){case To:return B;case Ro:return k0;case Po:return N5;case Co:return w5;case Lo:return g0}return s});function Ya(i,s,u){for(var m=-1,x=u.length;++m<x;){var R=u[m],F=R.size;switch(R.type){case"drop":i+=F;break;case"dropRight":s-=F;break;case"take":s=f9(s,i+F);break;case"takeRight":i=$5(i,s-F);break}}return{start:i,end:s}}function Za(i){var s=i.match(I);return s?s[1].split(J):[]}function en(i,s,u){s=K2(s,i);for(var m=-1,x=s.length,R=!1;++m<x;){var F=_2(s[m]);if(!(R=i!=null&&u(i,F)))break;i=i[F]}return R||++m!=x?R:(x=i==null?0:i.length,!!x&&_3(x)&&L2(F,x)&&(J0(i)||y1(i)))}function qa(i){var s=i.length,u=new i.constructor(s);return s&&typeof i[0]=="string"&&A5.call(i,"index")&&(u.index=i.index,u.input=i.input),u}function tn(i){return typeof i.constructor=="function"&&!r4(i)?q1(X4(i)):{}}function ja(i,s,u){var m=i.constructor;switch(s){case x0:return k6(i);case Y0:case G0:return new m(+i);case B:return Ia(i,u);case c0:case t0:case A0:case L0:case D0:case R0:case U0:case j0:case $0:return Ot(i,u);case k0:return new m;case b5:case D:return new m(i);case v5:return Ua(i);case w5:return new m;case C:return Da(i)}}function Qa(i,s){var u=s.length;if(!u)return i;var m=u-1;return s[m]=(u>1?"& ":"")+s[m],s=s.join(u>2?", ":" "),i.replace(o6,`{
/* [wrapped with `+s+`] */
`)}function Ka(i){return J0(i)||y1(i)||!!(ot&&i&&i[ot])}function L2(i,s){var u=typeof i;return s=s??$,!!s&&(u=="number"||u!="symbol"&&l5.test(i))&&i>-1&&i%1==0&&i<s}function y9(i,s,u){if(!W5(u))return!1;var m=typeof s;return(m=="number"?P9(u)&&L2(s,u.length):m=="string"&&s in u)?a2(u[s],i):!1}function K6(i,s){if(J0(i))return!1;var u=typeof i;return u=="number"||u=="symbol"||u=="boolean"||i==null||B9(i)?!0:T9.test(i)||!H5.test(i)||s!=null&&i in T5(s)}function Ja(i){var s=typeof i;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?i!=="__proto__":i===null}function J6(i){var s=u3(i),u=b[s];if(typeof u!="function"||!(s in f5.prototype))return!1;if(i===u)return!0;var m=q6(u);return!!m&&i===m[0]}function $a(i){return!!nt&&nt in i}var el=G4?I2:m8;function r4(i){var s=i&&i.constructor,u=typeof s=="function"&&s.prototype||X1;return i===u}function nn(i){return i===i&&!W5(i)}function rn(i,s){return function(u){return u==null?!1:u[i]===s&&(s!==t||i in T5(u))}}function tl(i){var s=g3(i,function(m){return u.size===f&&u.clear(),m}),u=s.cache;return s}function nl(i,s){var u=i[1],m=s[1],x=u|m,R=x<(y|g|O),F=m==O&&u==E||m==O&&u==V&&i[7].length<=s[8]||m==(O|V)&&s[7].length<=s[8]&&u==E;if(!(R||F))return i;m&y&&(i[2]=s[2],x|=u&y?0:w);var z=s[3];if(z){var X=i[3];i[3]=X?zt(X,z,s[4]):z,i[4]=X?Z2(i[3],d):s[4]}return z=s[5],z&&(X=i[5],i[5]=X?Gt(X,z,s[6]):z,i[6]=X?Z2(i[5],d):s[6]),z=s[7],z&&(i[7]=z),m&O&&(i[8]=i[8]==null?s[8]:f9(i[8],s[8])),i[9]==null&&(i[9]=s[9]),i[0]=s[0],i[1]=x,i}function il(i){var s=[];if(i!=null)for(var u in T5(i))s.push(u);return s}function rl(i){return W4.call(i)}function sn(i,s,u){return s=$5(s===t?i.length-1:s,0),function(){for(var m=arguments,x=-1,R=$5(m.length-s,0),F=e0(R);++x<R;)F[x]=m[s+x];x=-1;for(var z=e0(s+1);++x<s;)z[x]=m[x];return z[s]=u(F),N9(i,this,z)}}function on(i,s){return s.length<2?i:g1(i,K9(s,0,-1))}function sl(i,s){for(var u=i.length,m=f9(s.length,u),x=R9(i);m--;){var R=s[m];i[m]=L2(R,u)?x[R]:t}return i}function $6(i,s){if(!(s==="constructor"&&typeof i[s]=="function")&&s!="__proto__")return i[s]}var an=cn(Pt),s4=Mo||function(i,s){return l9.setTimeout(i,s)},e8=cn(Ra);function ln(i,s,u){var m=s+"";return e8(i,Qa(m,ol(Za(m),u)))}function cn(i){var s=0,u=0;return function(){var m=Ao(),x=G-(m-u);if(u=m,x>0){if(++s>=Z)return arguments[0]}else s=0;return i.apply(t,arguments)}}function f3(i,s){var u=-1,m=i.length,x=m-1;for(s=s===t?m:s;++u<s;){var R=F6(u,x),F=i[R];i[R]=i[u],i[u]=F}return i.length=s,i}var un=tl(function(i){var s=[];return i.charCodeAt(0)===46&&s.push(""),i.replace(V9,function(u,m,x,R){s.push(x?R.replace(l0,"$1"):m||u)}),s});function _2(i){if(typeof i=="string"||B9(i))return i;var s=i+"";return s=="0"&&1/i==-Q?"-0":s}function _1(i){if(i!=null){try{return H4.call(i)}catch{}try{return i+""}catch{}}return""}function ol(i,s){return Z9(p0,function(u){var m="_."+u[0];s&u[1]&&!F4(i,m)&&i.push(m)}),i.sort()}function hn(i){if(i instanceof f5)return i.clone();var s=new j9(i.__wrapped__,i.__chain__);return s.__actions__=R9(i.__actions__),s.__index__=i.__index__,s.__values__=i.__values__,s}function al(i,s,u){(u?y9(i,s,u):s===t)?s=1:s=$5(t5(s),0);var m=i==null?0:i.length;if(!m||s<1)return[];for(var x=0,R=0,F=e0(q4(m/s));x<m;)F[R++]=K9(i,x,x+=s);return F}function ll(i){for(var s=-1,u=i==null?0:i.length,m=0,x=[];++s<u;){var R=i[s];R&&(x[m++]=R)}return x}function cl(){var i=arguments.length;if(!i)return[];for(var s=e0(i-1),u=arguments[0],m=i;m--;)s[m-1]=arguments[m];return Y2(J0(u)?R9(u):[u],c9(s,1))}var ul=o5(function(i,s){return Z5(i)?$7(i,c9(s,1,Z5,!0)):[]}),hl=o5(function(i,s){var u=J9(s);return Z5(u)&&(u=t),Z5(i)?$7(i,c9(s,1,Z5,!0),V0(u,2)):[]}),fl=o5(function(i,s){var u=J9(s);return Z5(u)&&(u=t),Z5(i)?$7(i,c9(s,1,Z5,!0),t,u):[]});function dl(i,s,u){var m=i==null?0:i.length;return m?(s=u||s===t?1:t5(s),K9(i,s<0?0:s,m)):[]}function pl(i,s,u){var m=i==null?0:i.length;return m?(s=u||s===t?1:t5(s),s=m-s,K9(i,0,s<0?0:s)):[]}function ml(i,s){return i&&i.length?r3(i,V0(s,3),!0,!0):[]}function gl(i,s){return i&&i.length?r3(i,V0(s,3),!0):[]}function vl(i,s,u,m){var x=i==null?0:i.length;return x?(u&&typeof u!="number"&&y9(i,s,u)&&(u=0,m=x),ca(i,s,u,m)):[]}function fn(i,s,u){var m=i==null?0:i.length;if(!m)return-1;var x=u==null?0:t5(u);return x<0&&(x=$5(m+x,0)),O4(i,V0(s,3),x)}function dn(i,s,u){var m=i==null?0:i.length;if(!m)return-1;var x=m-1;return u!==t&&(x=t5(u),x=u<0?$5(m+x,0):f9(x,m-1)),O4(i,V0(s,3),x,!0)}function pn(i){var s=i==null?0:i.length;return s?c9(i,1):[]}function _l(i){var s=i==null?0:i.length;return s?c9(i,Q):[]}function yl(i,s){var u=i==null?0:i.length;return u?(s=s===t?1:t5(s),c9(i,s)):[]}function Ml(i){for(var s=-1,u=i==null?0:i.length,m={};++s<u;){var x=i[s];m[x[0]]=x[1]}return m}function mn(i){return i&&i.length?i[0]:t}function xl(i,s,u){var m=i==null?0:i.length;if(!m)return-1;var x=u==null?0:t5(u);return x<0&&(x=$5(m+x,0)),H1(i,s,x)}function Sl(i){var s=i==null?0:i.length;return s?K9(i,0,-1):[]}var El=o5(function(i){var s=F5(i,H6);return s.length&&s[0]===i[0]?L6(s):[]}),Al=o5(function(i){var s=J9(i),u=F5(i,H6);return s===J9(u)?s=t:u.pop(),u.length&&u[0]===i[0]?L6(u,V0(s,2)):[]}),bl=o5(function(i){var s=J9(i),u=F5(i,H6);return s=typeof s=="function"?s:t,s&&u.pop(),u.length&&u[0]===i[0]?L6(u,t,s):[]});function wl(i,s){return i==null?"":So.call(i,s)}function J9(i){var s=i==null?0:i.length;return s?i[s-1]:t}function Tl(i,s,u){var m=i==null?0:i.length;if(!m)return-1;var x=m;return u!==t&&(x=t5(u),x=x<0?$5(m+x,0):f9(x,m-1)),s===s?so(i,s,x):O4(i,qe,x,!0)}function Rl(i,s){return i&&i.length?bt(i,t5(s)):t}var Pl=o5(gn);function gn(i,s){return i&&i.length&&s&&s.length?N6(i,s):i}function Cl(i,s,u){return i&&i.length&&s&&s.length?N6(i,s,V0(u,2)):i}function Ll(i,s,u){return i&&i.length&&s&&s.length?N6(i,s,t,u):i}var Il=C2(function(i,s){var u=i==null?0:i.length,m=T6(i,s);return Rt(i,F5(s,function(x){return L2(x,u)?+x:x}).sort(Bt)),m});function Ul(i,s){var u=[];if(!(i&&i.length))return u;var m=-1,x=[],R=i.length;for(s=V0(s,3);++m<R;){var F=i[m];s(F,m,i)&&(u.push(F),x.push(m))}return Rt(i,x),u}function t8(i){return i==null?i:wo.call(i)}function Dl(i,s,u){var m=i==null?0:i.length;return m?(u&&typeof u!="number"&&y9(i,s,u)?(s=0,u=m):(s=s==null?0:t5(s),u=u===t?m:t5(u)),K9(i,s,u)):[]}function Nl(i,s){return i3(i,s)}function Fl(i,s,u){return B6(i,s,V0(u,2))}function Ol(i,s){var u=i==null?0:i.length;if(u){var m=i3(i,s);if(m<u&&a2(i[m],s))return m}return-1}function Bl(i,s){return i3(i,s,!0)}function zl(i,s,u){return B6(i,s,V0(u,2),!0)}function Gl(i,s){var u=i==null?0:i.length;if(u){var m=i3(i,s,!0)-1;if(a2(i[m],s))return m}return-1}function Hl(i){return i&&i.length?Ct(i):[]}function Wl(i,s){return i&&i.length?Ct(i,V0(s,2)):[]}function kl(i){var s=i==null?0:i.length;return s?K9(i,1,s):[]}function Vl(i,s,u){return i&&i.length?(s=u||s===t?1:t5(s),K9(i,0,s<0?0:s)):[]}function Xl(i,s,u){var m=i==null?0:i.length;return m?(s=u||s===t?1:t5(s),s=m-s,K9(i,s<0?0:s,m)):[]}function Yl(i,s){return i&&i.length?r3(i,V0(s,3),!1,!0):[]}function Zl(i,s){return i&&i.length?r3(i,V0(s,3)):[]}var ql=o5(function(i){return Q2(c9(i,1,Z5,!0))}),jl=o5(function(i){var s=J9(i);return Z5(s)&&(s=t),Q2(c9(i,1,Z5,!0),V0(s,2))}),Ql=o5(function(i){var s=J9(i);return s=typeof s=="function"?s:t,Q2(c9(i,1,Z5,!0),t,s)});function Kl(i){return i&&i.length?Q2(i):[]}function Jl(i,s){return i&&i.length?Q2(i,V0(s,2)):[]}function $l(i,s){return s=typeof s=="function"?s:t,i&&i.length?Q2(i,t,s):[]}function n8(i){if(!(i&&i.length))return[];var s=0;return i=X2(i,function(u){if(Z5(u))return s=$5(u.length,s),!0}),y6(s,function(u){return F5(i,g6(u))})}function vn(i,s){if(!(i&&i.length))return[];var u=n8(i);return s==null?u:F5(u,function(m){return N9(s,t,m)})}var ec=o5(function(i,s){return Z5(i)?$7(i,s):[]}),tc=o5(function(i){return G6(X2(i,Z5))}),nc=o5(function(i){var s=J9(i);return Z5(s)&&(s=t),G6(X2(i,Z5),V0(s,2))}),ic=o5(function(i){var s=J9(i);return s=typeof s=="function"?s:t,G6(X2(i,Z5),t,s)}),rc=o5(n8);function sc(i,s){return Dt(i||[],s||[],J7)}function oc(i,s){return Dt(i||[],s||[],n4)}var ac=o5(function(i){var s=i.length,u=s>1?i[s-1]:t;return u=typeof u=="function"?(i.pop(),u):t,vn(i,u)});function _n(i){var s=b(i);return s.__chain__=!0,s}function lc(i,s){return s(i),i}function d3(i,s){return s(i)}var cc=C2(function(i){var s=i.length,u=s?i[0]:0,m=this.__wrapped__,x=function(R){return T6(R,i)};return s>1||this.__actions__.length||!(m instanceof f5)||!L2(u)?this.thru(x):(m=m.slice(u,+u+(s?1:0)),m.__actions__.push({func:d3,args:[x],thisArg:t}),new j9(m,this.__chain__).thru(function(R){return s&&!R.length&&R.push(t),R}))});function uc(){return _n(this)}function hc(){return new j9(this.value(),this.__chain__)}function fc(){this.__values__===t&&(this.__values__=In(this.value()));var i=this.__index__>=this.__values__.length,s=i?t:this.__values__[this.__index__++];return{done:i,value:s}}function dc(){return this}function pc(i){for(var s,u=this;u instanceof J4;){var m=hn(u);m.__index__=0,m.__values__=t,s?x.__wrapped__=m:s=m;var x=m;u=u.__wrapped__}return x.__wrapped__=i,s}function mc(){var i=this.__wrapped__;if(i instanceof f5){var s=i;return this.__actions__.length&&(s=new f5(this)),s=s.reverse(),s.__actions__.push({func:d3,args:[t8],thisArg:t}),new j9(s,this.__chain__)}return this.thru(t8)}function gc(){return Ut(this.__wrapped__,this.__actions__)}var vc=s3(function(i,s,u){A5.call(i,u)?++i[u]:R2(i,u,1)});function _c(i,s,u){var m=J0(i)?Ye:la;return u&&y9(i,s,u)&&(s=t),m(i,V0(s,3))}function yc(i,s){var u=J0(i)?X2:gt;return u(i,V0(s,3))}var Mc=Vt(fn),xc=Vt(dn);function Sc(i,s){return c9(p3(i,s),1)}function Ec(i,s){return c9(p3(i,s),Q)}function Ac(i,s,u){return u=u===t?1:t5(u),c9(p3(i,s),u)}function yn(i,s){var u=J0(i)?Z9:j2;return u(i,V0(s,3))}function Mn(i,s){var u=J0(i)?Ws:mt;return u(i,V0(s,3))}var bc=s3(function(i,s,u){A5.call(i,u)?i[u].push(s):R2(i,u,[s])});function wc(i,s,u,m){i=P9(i)?i:$1(i),u=u&&!m?t5(u):0;var x=i.length;return u<0&&(u=$5(x+u,0)),y3(i)?u<=x&&i.indexOf(s,u)>-1:!!x&&H1(i,s,u)>-1}var Tc=o5(function(i,s,u){var m=-1,x=typeof s=="function",R=P9(i)?e0(i.length):[];return j2(i,function(F){R[++m]=x?N9(s,F,u):e4(F,s,u)}),R}),Rc=s3(function(i,s,u){R2(i,u,s)});function p3(i,s){var u=J0(i)?F5:St;return u(i,V0(s,3))}function Pc(i,s,u,m){return i==null?[]:(J0(s)||(s=s==null?[]:[s]),u=m?t:u,J0(u)||(u=u==null?[]:[u]),wt(i,s,u))}var Cc=s3(function(i,s,u){i[u?0:1].push(s)},function(){return[[],[]]});function Lc(i,s,u){var m=J0(i)?p6:Qe,x=arguments.length<3;return m(i,V0(s,4),u,x,j2)}function Ic(i,s,u){var m=J0(i)?ks:Qe,x=arguments.length<3;return m(i,V0(s,4),u,x,mt)}function Uc(i,s){var u=J0(i)?X2:gt;return u(i,v3(V0(s,3)))}function Dc(i){var s=J0(i)?ht:wa;return s(i)}function Nc(i,s,u){(u?y9(i,s,u):s===t)?s=1:s=t5(s);var m=J0(i)?ia:Ta;return m(i,s)}function Fc(i){var s=J0(i)?ra:Pa;return s(i)}function Oc(i){if(i==null)return 0;if(P9(i))return y3(i)?k1(i):i.length;var s=d9(i);return s==k0||s==w5?i.size:U6(i).length}function Bc(i,s,u){var m=J0(i)?m6:Ca;return u&&y9(i,s,u)&&(s=t),m(i,V0(s,3))}var zc=o5(function(i,s){if(i==null)return[];var u=s.length;return u>1&&y9(i,s[0],s[1])?s=[]:u>2&&y9(s[0],s[1],s[2])&&(s=[s[0]]),wt(i,c9(s,1),[])}),m3=yo||function(){return l9.Date.now()};function Gc(i,s){if(typeof s!="function")throw new q9(l);return i=t5(i),function(){if(--i<1)return s.apply(this,arguments)}}function xn(i,s,u){return s=u?t:s,s=i&&s==null?i.length:s,P2(i,O,t,t,t,t,s)}function Sn(i,s){var u;if(typeof s!="function")throw new q9(l);return i=t5(i),function(){return--i>0&&(u=s.apply(this,arguments)),i<=1&&(s=t),u}}var i8=o5(function(i,s,u){var m=y;if(u.length){var x=Z2(u,K1(i8));m|=T}return P2(i,m,s,u,x)}),En=o5(function(i,s,u){var m=y|g;if(u.length){var x=Z2(u,K1(En));m|=T}return P2(s,m,i,u,x)});function An(i,s,u){s=u?t:s;var m=P2(i,E,t,t,t,t,t,s);return m.placeholder=An.placeholder,m}function bn(i,s,u){s=u?t:s;var m=P2(i,L,t,t,t,t,t,s);return m.placeholder=bn.placeholder,m}function wn(i,s,u){var m,x,R,F,z,X,u0=0,d0=!1,m0=!1,T0=!0;if(typeof i!="function")throw new q9(l);s=$9(s)||0,W5(u)&&(d0=!!u.leading,m0="maxWait"in u,R=m0?$5($9(u.maxWait)||0,s):R,T0="trailing"in u?!!u.trailing:T0);function N0(q5){var l2=m,D2=x;return m=x=t,u0=q5,F=i.apply(D2,l2),F}function Z0(q5){return u0=q5,z=s4(c5,s),d0?N0(q5):F}function n5(q5){var l2=q5-X,D2=q5-u0,Xn=s-l2;return m0?f9(Xn,R-D2):Xn}function q0(q5){var l2=q5-X,D2=q5-u0;return X===t||l2>=s||l2<0||m0&&D2>=R}function c5(){var q5=m3();if(q0(q5))return p5(q5);z=s4(c5,n5(q5))}function p5(q5){return z=t,T0&&m?N0(q5):(m=x=t,F)}function z9(){z!==t&&Nt(z),u0=0,m=X=x=z=t}function M9(){return z===t?F:p5(m3())}function G9(){var q5=m3(),l2=q0(q5);if(m=arguments,x=this,X=q5,l2){if(z===t)return Z0(X);if(m0)return Nt(z),z=s4(c5,s),N0(X)}return z===t&&(z=s4(c5,s)),F}return G9.cancel=z9,G9.flush=M9,G9}var Hc=o5(function(i,s){return pt(i,1,s)}),Wc=o5(function(i,s,u){return pt(i,$9(s)||0,u)});function kc(i){return P2(i,A)}function g3(i,s){if(typeof i!="function"||s!=null&&typeof s!="function")throw new q9(l);var u=function(){var m=arguments,x=s?s.apply(this,m):m[0],R=u.cache;if(R.has(x))return R.get(x);var F=i.apply(this,m);return u.cache=R.set(x,F)||R,F};return u.cache=new(g3.Cache||T2),u}g3.Cache=T2;function v3(i){if(typeof i!="function")throw new q9(l);return function(){var s=arguments;switch(s.length){case 0:return!i.call(this);case 1:return!i.call(this,s[0]);case 2:return!i.call(this,s[0],s[1]);case 3:return!i.call(this,s[0],s[1],s[2])}return!i.apply(this,s)}}function Vc(i){return Sn(2,i)}var Xc=La(function(i,s){s=s.length==1&&J0(s[0])?F5(s[0],F9(V0())):F5(c9(s,1),F9(V0()));var u=s.length;return o5(function(m){for(var x=-1,R=f9(m.length,u);++x<R;)m[x]=s[x].call(this,m[x]);return N9(i,this,m)})}),r8=o5(function(i,s){var u=Z2(s,K1(r8));return P2(i,T,t,s,u)}),Tn=o5(function(i,s){var u=Z2(s,K1(Tn));return P2(i,U,t,s,u)}),Yc=C2(function(i,s){return P2(i,V,t,t,t,s)});function Zc(i,s){if(typeof i!="function")throw new q9(l);return s=s===t?s:t5(s),o5(i,s)}function qc(i,s){if(typeof i!="function")throw new q9(l);return s=s==null?0:$5(t5(s),0),o5(function(u){var m=u[s],x=J2(u,0,s);return m&&Y2(x,m),N9(i,this,x)})}function jc(i,s,u){var m=!0,x=!0;if(typeof i!="function")throw new q9(l);return W5(u)&&(m="leading"in u?!!u.leading:m,x="trailing"in u?!!u.trailing:x),wn(i,s,{leading:m,maxWait:s,trailing:x})}function Qc(i){return xn(i,1)}function Kc(i,s){return r8(W6(s),i)}function Jc(){if(!arguments.length)return[];var i=arguments[0];return J0(i)?i:[i]}function $c(i){return Q9(i,_)}function eu(i,s){return s=typeof s=="function"?s:t,Q9(i,_,s)}function tu(i){return Q9(i,p|_)}function nu(i,s){return s=typeof s=="function"?s:t,Q9(i,p|_,s)}function iu(i,s){return s==null||dt(i,s,s9(s))}function a2(i,s){return i===s||i!==i&&s!==s}var ru=c3(C6),su=c3(function(i,s){return i>=s}),y1=yt(function(){return arguments}())?yt:function(i){return V5(i)&&A5.call(i,"callee")&&!st.call(i,"callee")},J0=e0.isArray,ou=Ge?F9(Ge):pa;function P9(i){return i!=null&&_3(i.length)&&!I2(i)}function Z5(i){return V5(i)&&P9(i)}function au(i){return i===!0||i===!1||V5(i)&&_9(i)==Y0}var $2=xo||m8,lu=He?F9(He):ma;function cu(i){return V5(i)&&i.nodeType===1&&!o4(i)}function uu(i){if(i==null)return!0;if(P9(i)&&(J0(i)||typeof i=="string"||typeof i.splice=="function"||$2(i)||J1(i)||y1(i)))return!i.length;var s=d9(i);if(s==k0||s==w5)return!i.size;if(r4(i))return!U6(i).length;for(var u in i)if(A5.call(i,u))return!1;return!0}function hu(i,s){return t4(i,s)}function fu(i,s,u){u=typeof u=="function"?u:t;var m=u?u(i,s):t;return m===t?t4(i,s,t,u):!!m}function s8(i){if(!V5(i))return!1;var s=_9(i);return s==B0||s==M0||typeof i.message=="string"&&typeof i.name=="string"&&!o4(i)}function du(i){return typeof i=="number"&&at(i)}function I2(i){if(!W5(i))return!1;var s=_9(i);return s==u5||s==F0||s==W||s==g5}function Rn(i){return typeof i=="number"&&i==t5(i)}function _3(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=$}function W5(i){var s=typeof i;return i!=null&&(s=="object"||s=="function")}function V5(i){return i!=null&&typeof i=="object"}var Pn=We?F9(We):va;function pu(i,s){return i===s||I6(i,s,j6(s))}function mu(i,s,u){return u=typeof u=="function"?u:t,I6(i,s,j6(s),u)}function gu(i){return Cn(i)&&i!=+i}function vu(i){if(el(i))throw new K0(a);return Mt(i)}function _u(i){return i===null}function yu(i){return i==null}function Cn(i){return typeof i=="number"||V5(i)&&_9(i)==b5}function o4(i){if(!V5(i)||_9(i)!=y5)return!1;var s=X4(i);if(s===null)return!0;var u=A5.call(s,"constructor")&&s.constructor;return typeof u=="function"&&u instanceof u&&H4.call(u)==mo}var o8=ke?F9(ke):_a;function Mu(i){return Rn(i)&&i>=-$&&i<=$}var Ln=Ve?F9(Ve):ya;function y3(i){return typeof i=="string"||!J0(i)&&V5(i)&&_9(i)==D}function B9(i){return typeof i=="symbol"||V5(i)&&_9(i)==C}var J1=Xe?F9(Xe):Ma;function xu(i){return i===t}function Su(i){return V5(i)&&d9(i)==g0}function Eu(i){return V5(i)&&_9(i)==_0}var Au=c3(D6),bu=c3(function(i,s){return i<=s});function In(i){if(!i)return[];if(P9(i))return y3(i)?s2(i):R9(i);if(Z7&&i[Z7])return no(i[Z7]());var s=d9(i),u=s==k0?x6:s==w5?B4:$1;return u(i)}function U2(i){if(!i)return i===0?i:0;if(i=$9(i),i===Q||i===-Q){var s=i<0?-1:1;return s*a0}return i===i?i:0}function t5(i){var s=U2(i),u=s%1;return s===s?u?s-u:s:0}function Un(i){return i?m1(t5(i),0,S0):0}function $9(i){if(typeof i=="number")return i;if(B9(i))return f0;if(W5(i)){var s=typeof i.valueOf=="function"?i.valueOf():i;i=W5(s)?s+"":s}if(typeof i!="string")return i===0?i:+i;i=Ke(i);var u=e5.test(i);return u||s5.test(i)?zs(i.slice(2),u?2:8):Q0.test(i)?f0:+i}function Dn(i){return v2(i,C9(i))}function wu(i){return i?m1(t5(i),-$,$):i===0?i:0}function x5(i){return i==null?"":O9(i)}var Tu=j1(function(i,s){if(r4(s)||P9(s)){v2(s,s9(s),i);return}for(var u in s)A5.call(s,u)&&J7(i,u,s[u])}),Nn=j1(function(i,s){v2(s,C9(s),i)}),M3=j1(function(i,s,u,m){v2(s,C9(s),i,m)}),Ru=j1(function(i,s,u,m){v2(s,s9(s),i,m)}),Pu=C2(T6);function Cu(i,s){var u=q1(i);return s==null?u:ft(u,s)}var Lu=o5(function(i,s){i=T5(i);var u=-1,m=s.length,x=m>2?s[2]:t;for(x&&y9(s[0],s[1],x)&&(m=1);++u<m;)for(var R=s[u],F=C9(R),z=-1,X=F.length;++z<X;){var u0=F[z],d0=i[u0];(d0===t||a2(d0,X1[u0])&&!A5.call(i,u0))&&(i[u0]=R[u0])}return i}),Iu=o5(function(i){return i.push(t,Kt),N9(Fn,t,i)});function Uu(i,s){return Ze(i,V0(s,3),g2)}function Du(i,s){return Ze(i,V0(s,3),P6)}function Nu(i,s){return i==null?i:R6(i,V0(s,3),C9)}function Fu(i,s){return i==null?i:vt(i,V0(s,3),C9)}function Ou(i,s){return i&&g2(i,V0(s,3))}function Bu(i,s){return i&&P6(i,V0(s,3))}function zu(i){return i==null?[]:t3(i,s9(i))}function Gu(i){return i==null?[]:t3(i,C9(i))}function a8(i,s,u){var m=i==null?t:g1(i,s);return m===t?u:m}function Hu(i,s){return i!=null&&en(i,s,ua)}function l8(i,s){return i!=null&&en(i,s,ha)}var Wu=Yt(function(i,s,u){s!=null&&typeof s.toString!="function"&&(s=W4.call(s)),i[s]=u},u8(L9)),ku=Yt(function(i,s,u){s!=null&&typeof s.toString!="function"&&(s=W4.call(s)),A5.call(i,s)?i[s].push(u):i[s]=[u]},V0),Vu=o5(e4);function s9(i){return P9(i)?ut(i):U6(i)}function C9(i){return P9(i)?ut(i,!0):xa(i)}function Xu(i,s){var u={};return s=V0(s,3),g2(i,function(m,x,R){R2(u,s(m,x,R),m)}),u}function Yu(i,s){var u={};return s=V0(s,3),g2(i,function(m,x,R){R2(u,x,s(m,x,R))}),u}var Zu=j1(function(i,s,u){n3(i,s,u)}),Fn=j1(function(i,s,u,m){n3(i,s,u,m)}),qu=C2(function(i,s){var u={};if(i==null)return u;var m=!1;s=F5(s,function(R){return R=K2(R,i),m||(m=R.length>1),R}),v2(i,Z6(i),u),m&&(u=Q9(u,p|v|_,Wa));for(var x=s.length;x--;)z6(u,s[x]);return u});function ju(i,s){return On(i,v3(V0(s)))}var Qu=C2(function(i,s){return i==null?{}:Ea(i,s)});function On(i,s){if(i==null)return{};var u=F5(Z6(i),function(m){return[m]});return s=V0(s),Tt(i,u,function(m,x){return s(m,x[0])})}function Ku(i,s,u){s=K2(s,i);var m=-1,x=s.length;for(x||(x=1,i=t);++m<x;){var R=i==null?t:i[_2(s[m])];R===t&&(m=x,R=u),i=I2(R)?R.call(i):R}return i}function Ju(i,s,u){return i==null?i:n4(i,s,u)}function $u(i,s,u,m){return m=typeof m=="function"?m:t,i==null?i:n4(i,s,u,m)}var Bn=jt(s9),zn=jt(C9);function eh(i,s,u){var m=J0(i),x=m||$2(i)||J1(i);if(s=V0(s,4),u==null){var R=i&&i.constructor;x?u=m?new R:[]:W5(i)?u=I2(R)?q1(X4(i)):{}:u={}}return(x?Z9:g2)(i,function(F,z,X){return s(u,F,z,X)}),u}function th(i,s){return i==null?!0:z6(i,s)}function nh(i,s,u){return i==null?i:It(i,s,W6(u))}function ih(i,s,u,m){return m=typeof m=="function"?m:t,i==null?i:It(i,s,W6(u),m)}function $1(i){return i==null?[]:M6(i,s9(i))}function rh(i){return i==null?[]:M6(i,C9(i))}function sh(i,s,u){return u===t&&(u=s,s=t),u!==t&&(u=$9(u),u=u===u?u:0),s!==t&&(s=$9(s),s=s===s?s:0),m1($9(i),s,u)}function oh(i,s,u){return s=U2(s),u===t?(u=s,s=0):u=U2(u),i=$9(i),fa(i,s,u)}function ah(i,s,u){if(u&&typeof u!="boolean"&&y9(i,s,u)&&(s=u=t),u===t&&(typeof s=="boolean"?(u=s,s=t):typeof i=="boolean"&&(u=i,i=t)),i===t&&s===t?(i=0,s=1):(i=U2(i),s===t?(s=i,i=0):s=U2(s)),i>s){var m=i;i=s,s=m}if(u||i%1||s%1){var x=lt();return f9(i+x*(s-i+Bs("1e-"+((x+"").length-1))),s)}return F6(i,s)}var lh=Q1(function(i,s,u){return s=s.toLowerCase(),i+(u?Gn(s):s)});function Gn(i){return c8(x5(i).toLowerCase())}function Hn(i){return i=x5(i),i&&i.replace(M5,Ks).replace(Rs,"")}function ch(i,s,u){i=x5(i),s=O9(s);var m=i.length;u=u===t?m:m1(t5(u),0,m);var x=u;return u-=s.length,u>=0&&i.slice(u,x)==s}function uh(i){return i=x5(i),i&&S5.test(i)?i.replace(C0,Js):i}function hh(i){return i=x5(i),i&&U4.test(i)?i.replace(V2,"\\$&"):i}var fh=Q1(function(i,s,u){return i+(u?"-":"")+s.toLowerCase()}),dh=Q1(function(i,s,u){return i+(u?" ":"")+s.toLowerCase()}),ph=kt("toLowerCase");function mh(i,s,u){i=x5(i),s=t5(s);var m=s?k1(i):0;if(!s||m>=s)return i;var x=(s-m)/2;return l3(j4(x),u)+i+l3(q4(x),u)}function gh(i,s,u){i=x5(i),s=t5(s);var m=s?k1(i):0;return s&&m<s?i+l3(s-m,u):i}function vh(i,s,u){i=x5(i),s=t5(s);var m=s?k1(i):0;return s&&m<s?l3(s-m,u)+i:i}function _h(i,s,u){return u||s==null?s=0:s&&(s=+s),bo(x5(i).replace(H7,""),s||0)}function yh(i,s,u){return(u?y9(i,s,u):s===t)?s=1:s=t5(s),O6(x5(i),s)}function Mh(){var i=arguments,s=x5(i[0]);return i.length<3?s:s.replace(i[1],i[2])}var xh=Q1(function(i,s,u){return i+(u?"_":"")+s.toLowerCase()});function Sh(i,s,u){return u&&typeof u!="number"&&y9(i,s,u)&&(s=u=t),u=u===t?S0:u>>>0,u?(i=x5(i),i&&(typeof s=="string"||s!=null&&!o8(s))&&(s=O9(s),!s&&W1(i))?J2(s2(i),0,u):i.split(s,u)):[]}var Eh=Q1(function(i,s,u){return i+(u?" ":"")+c8(s)});function Ah(i,s,u){return i=x5(i),u=u==null?0:m1(t5(u),0,i.length),s=O9(s),i.slice(u,u+s.length)==s}function bh(i,s,u){var m=b.templateSettings;u&&y9(i,s,u)&&(s=t),i=x5(i),s=M3({},s,m,Qt);var x=M3({},s.imports,m.imports,Qt),R=s9(x),F=M6(x,R),z,X,u0=0,d0=s.interpolate||j5,m0="__p += '",T0=S6((s.escape||j5).source+"|"+d0.source+"|"+(d0===r2?z0:j5).source+"|"+(s.evaluate||j5).source+"|$","g"),N0="//# sourceURL="+(A5.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Us+"]")+`
`;i.replace(T0,function(q0,c5,p5,z9,M9,G9){return p5||(p5=z9),m0+=i.slice(u0,G9).replace(D9,$s),c5&&(z=!0,m0+=`' +
__e(`+c5+`) +
'`),M9&&(X=!0,m0+=`';
`+M9+`;
__p += '`),p5&&(m0+=`' +
((__t = (`+p5+`)) == null ? '' : __t) +
'`),u0=G9+q0.length,q0}),m0+=`';
`;var Z0=A5.call(s,"variable")&&s.variable;if(!Z0)m0=`with (obj) {
`+m0+`
}
`;else if(q.test(Z0))throw new K0(c);m0=(X?m0.replace(G5,""):m0).replace(H,"$1").replace(r0,"$1;"),m0="function("+(Z0||"obj")+`) {
`+(Z0?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+m0+`return __p
}`;var n5=kn(function(){return _5(R,N0+"return "+m0).apply(t,F)});if(n5.source=m0,s8(n5))throw n5;return n5}function wh(i){return x5(i).toLowerCase()}function Th(i){return x5(i).toUpperCase()}function Rh(i,s,u){if(i=x5(i),i&&(u||s===t))return Ke(i);if(!i||!(s=O9(s)))return i;var m=s2(i),x=s2(s),R=Je(m,x),F=$e(m,x)+1;return J2(m,R,F).join("")}function Ph(i,s,u){if(i=x5(i),i&&(u||s===t))return i.slice(0,tt(i)+1);if(!i||!(s=O9(s)))return i;var m=s2(i),x=$e(m,s2(s))+1;return J2(m,0,x).join("")}function Ch(i,s,u){if(i=x5(i),i&&(u||s===t))return i.replace(H7,"");if(!i||!(s=O9(s)))return i;var m=s2(i),x=Je(m,s2(s));return J2(m,x).join("")}function Lh(i,s){var u=P,m=j;if(W5(s)){var x="separator"in s?s.separator:x;u="length"in s?t5(s.length):u,m="omission"in s?O9(s.omission):m}i=x5(i);var R=i.length;if(W1(i)){var F=s2(i);R=F.length}if(u>=R)return i;var z=u-k1(m);if(z<1)return m;var X=F?J2(F,0,z).join(""):i.slice(0,z);if(x===t)return X+m;if(F&&(z+=X.length-z),o8(x)){if(i.slice(z).search(x)){var u0,d0=X;for(x.global||(x=S6(x.source,x5(W0.exec(x))+"g")),x.lastIndex=0;u0=x.exec(d0);)var m0=u0.index;X=X.slice(0,m0===t?z:m0)}}else if(i.indexOf(O9(x),z)!=z){var T0=X.lastIndexOf(x);T0>-1&&(X=X.slice(0,T0))}return X+m}function Ih(i){return i=x5(i),i&&O0.test(i)?i.replace(v0,oo):i}var Uh=Q1(function(i,s,u){return i+(u?" ":"")+s.toUpperCase()}),c8=kt("toUpperCase");function Wn(i,s,u){return i=x5(i),s=u?t:s,s===t?to(i)?co(i):Ys(i):i.match(s)||[]}var kn=o5(function(i,s){try{return N9(i,t,s)}catch(u){return s8(u)?u:new K0(u)}}),Dh=C2(function(i,s){return Z9(s,function(u){u=_2(u),R2(i,u,i8(i[u],i))}),i});function Nh(i){var s=i==null?0:i.length,u=V0();return i=s?F5(i,function(m){if(typeof m[1]!="function")throw new q9(l);return[u(m[0]),m[1]]}):[],o5(function(m){for(var x=-1;++x<s;){var R=i[x];if(N9(R[0],this,m))return N9(R[1],this,m)}})}function Fh(i){return aa(Q9(i,p))}function u8(i){return function(){return i}}function Oh(i,s){return i==null||i!==i?s:i}var Bh=Xt(),zh=Xt(!0);function L9(i){return i}function h8(i){return xt(typeof i=="function"?i:Q9(i,p))}function Gh(i){return Et(Q9(i,p))}function Hh(i,s){return At(i,Q9(s,p))}var Wh=o5(function(i,s){return function(u){return e4(u,i,s)}}),kh=o5(function(i,s){return function(u){return e4(i,u,s)}});function f8(i,s,u){var m=s9(s),x=t3(s,m);u==null&&!(W5(s)&&(x.length||!m.length))&&(u=s,s=i,i=this,x=t3(s,s9(s)));var R=!(W5(u)&&"chain"in u)||!!u.chain,F=I2(i);return Z9(x,function(z){var X=s[z];i[z]=X,F&&(i.prototype[z]=function(){var u0=this.__chain__;if(R||u0){var d0=i(this.__wrapped__),m0=d0.__actions__=R9(this.__actions__);return m0.push({func:X,args:arguments,thisArg:i}),d0.__chain__=u0,d0}return X.apply(i,Y2([this.value()],arguments))})}),i}function Vh(){return l9._===this&&(l9._=go),this}function d8(){}function Xh(i){return i=t5(i),o5(function(s){return bt(s,i)})}var Yh=V6(F5),Zh=V6(Ye),qh=V6(m6);function Vn(i){return K6(i)?g6(_2(i)):Aa(i)}function jh(i){return function(s){return i==null?t:g1(i,s)}}var Qh=Zt(),Kh=Zt(!0);function p8(){return[]}function m8(){return!1}function Jh(){return{}}function $h(){return""}function ef(){return!0}function tf(i,s){if(i=t5(i),i<1||i>$)return[];var u=S0,m=f9(i,S0);s=V0(s),i-=S0;for(var x=y6(m,s);++u<i;)s(u);return x}function nf(i){return J0(i)?F5(i,_2):B9(i)?[i]:R9(un(x5(i)))}function rf(i){var s=++po;return x5(i)+s}var sf=a3(function(i,s){return i+s},0),of=X6("ceil"),af=a3(function(i,s){return i/s},1),lf=X6("floor");function cf(i){return i&&i.length?e3(i,L9,C6):t}function uf(i,s){return i&&i.length?e3(i,V0(s,2),C6):t}function hf(i){return je(i,L9)}function ff(i,s){return je(i,V0(s,2))}function df(i){return i&&i.length?e3(i,L9,D6):t}function pf(i,s){return i&&i.length?e3(i,V0(s,2),D6):t}var mf=a3(function(i,s){return i*s},1),gf=X6("round"),vf=a3(function(i,s){return i-s},0);function _f(i){return i&&i.length?_6(i,L9):0}function yf(i,s){return i&&i.length?_6(i,V0(s,2)):0}return b.after=Gc,b.ary=xn,b.assign=Tu,b.assignIn=Nn,b.assignInWith=M3,b.assignWith=Ru,b.at=Pu,b.before=Sn,b.bind=i8,b.bindAll=Dh,b.bindKey=En,b.castArray=Jc,b.chain=_n,b.chunk=al,b.compact=ll,b.concat=cl,b.cond=Nh,b.conforms=Fh,b.constant=u8,b.countBy=vc,b.create=Cu,b.curry=An,b.curryRight=bn,b.debounce=wn,b.defaults=Lu,b.defaultsDeep=Iu,b.defer=Hc,b.delay=Wc,b.difference=ul,b.differenceBy=hl,b.differenceWith=fl,b.drop=dl,b.dropRight=pl,b.dropRightWhile=ml,b.dropWhile=gl,b.fill=vl,b.filter=yc,b.flatMap=Sc,b.flatMapDeep=Ec,b.flatMapDepth=Ac,b.flatten=pn,b.flattenDeep=_l,b.flattenDepth=yl,b.flip=kc,b.flow=Bh,b.flowRight=zh,b.fromPairs=Ml,b.functions=zu,b.functionsIn=Gu,b.groupBy=bc,b.initial=Sl,b.intersection=El,b.intersectionBy=Al,b.intersectionWith=bl,b.invert=Wu,b.invertBy=ku,b.invokeMap=Tc,b.iteratee=h8,b.keyBy=Rc,b.keys=s9,b.keysIn=C9,b.map=p3,b.mapKeys=Xu,b.mapValues=Yu,b.matches=Gh,b.matchesProperty=Hh,b.memoize=g3,b.merge=Zu,b.mergeWith=Fn,b.method=Wh,b.methodOf=kh,b.mixin=f8,b.negate=v3,b.nthArg=Xh,b.omit=qu,b.omitBy=ju,b.once=Vc,b.orderBy=Pc,b.over=Yh,b.overArgs=Xc,b.overEvery=Zh,b.overSome=qh,b.partial=r8,b.partialRight=Tn,b.partition=Cc,b.pick=Qu,b.pickBy=On,b.property=Vn,b.propertyOf=jh,b.pull=Pl,b.pullAll=gn,b.pullAllBy=Cl,b.pullAllWith=Ll,b.pullAt=Il,b.range=Qh,b.rangeRight=Kh,b.rearg=Yc,b.reject=Uc,b.remove=Ul,b.rest=Zc,b.reverse=t8,b.sampleSize=Nc,b.set=Ju,b.setWith=$u,b.shuffle=Fc,b.slice=Dl,b.sortBy=zc,b.sortedUniq=Hl,b.sortedUniqBy=Wl,b.split=Sh,b.spread=qc,b.tail=kl,b.take=Vl,b.takeRight=Xl,b.takeRightWhile=Yl,b.takeWhile=Zl,b.tap=lc,b.throttle=jc,b.thru=d3,b.toArray=In,b.toPairs=Bn,b.toPairsIn=zn,b.toPath=nf,b.toPlainObject=Dn,b.transform=eh,b.unary=Qc,b.union=ql,b.unionBy=jl,b.unionWith=Ql,b.uniq=Kl,b.uniqBy=Jl,b.uniqWith=$l,b.unset=th,b.unzip=n8,b.unzipWith=vn,b.update=nh,b.updateWith=ih,b.values=$1,b.valuesIn=rh,b.without=ec,b.words=Wn,b.wrap=Kc,b.xor=tc,b.xorBy=nc,b.xorWith=ic,b.zip=rc,b.zipObject=sc,b.zipObjectDeep=oc,b.zipWith=ac,b.entries=Bn,b.entriesIn=zn,b.extend=Nn,b.extendWith=M3,f8(b,b),b.add=sf,b.attempt=kn,b.camelCase=lh,b.capitalize=Gn,b.ceil=of,b.clamp=sh,b.clone=$c,b.cloneDeep=tu,b.cloneDeepWith=nu,b.cloneWith=eu,b.conformsTo=iu,b.deburr=Hn,b.defaultTo=Oh,b.divide=af,b.endsWith=ch,b.eq=a2,b.escape=uh,b.escapeRegExp=hh,b.every=_c,b.find=Mc,b.findIndex=fn,b.findKey=Uu,b.findLast=xc,b.findLastIndex=dn,b.findLastKey=Du,b.floor=lf,b.forEach=yn,b.forEachRight=Mn,b.forIn=Nu,b.forInRight=Fu,b.forOwn=Ou,b.forOwnRight=Bu,b.get=a8,b.gt=ru,b.gte=su,b.has=Hu,b.hasIn=l8,b.head=mn,b.identity=L9,b.includes=wc,b.indexOf=xl,b.inRange=oh,b.invoke=Vu,b.isArguments=y1,b.isArray=J0,b.isArrayBuffer=ou,b.isArrayLike=P9,b.isArrayLikeObject=Z5,b.isBoolean=au,b.isBuffer=$2,b.isDate=lu,b.isElement=cu,b.isEmpty=uu,b.isEqual=hu,b.isEqualWith=fu,b.isError=s8,b.isFinite=du,b.isFunction=I2,b.isInteger=Rn,b.isLength=_3,b.isMap=Pn,b.isMatch=pu,b.isMatchWith=mu,b.isNaN=gu,b.isNative=vu,b.isNil=yu,b.isNull=_u,b.isNumber=Cn,b.isObject=W5,b.isObjectLike=V5,b.isPlainObject=o4,b.isRegExp=o8,b.isSafeInteger=Mu,b.isSet=Ln,b.isString=y3,b.isSymbol=B9,b.isTypedArray=J1,b.isUndefined=xu,b.isWeakMap=Su,b.isWeakSet=Eu,b.join=wl,b.kebabCase=fh,b.last=J9,b.lastIndexOf=Tl,b.lowerCase=dh,b.lowerFirst=ph,b.lt=Au,b.lte=bu,b.max=cf,b.maxBy=uf,b.mean=hf,b.meanBy=ff,b.min=df,b.minBy=pf,b.stubArray=p8,b.stubFalse=m8,b.stubObject=Jh,b.stubString=$h,b.stubTrue=ef,b.multiply=mf,b.nth=Rl,b.noConflict=Vh,b.noop=d8,b.now=m3,b.pad=mh,b.padEnd=gh,b.padStart=vh,b.parseInt=_h,b.random=ah,b.reduce=Lc,b.reduceRight=Ic,b.repeat=yh,b.replace=Mh,b.result=Ku,b.round=gf,b.runInContext=k,b.sample=Dc,b.size=Oc,b.snakeCase=xh,b.some=Bc,b.sortedIndex=Nl,b.sortedIndexBy=Fl,b.sortedIndexOf=Ol,b.sortedLastIndex=Bl,b.sortedLastIndexBy=zl,b.sortedLastIndexOf=Gl,b.startCase=Eh,b.startsWith=Ah,b.subtract=vf,b.sum=_f,b.sumBy=yf,b.template=bh,b.times=tf,b.toFinite=U2,b.toInteger=t5,b.toLength=Un,b.toLower=wh,b.toNumber=$9,b.toSafeInteger=wu,b.toString=x5,b.toUpper=Th,b.trim=Rh,b.trimEnd=Ph,b.trimStart=Ch,b.truncate=Lh,b.unescape=Ih,b.uniqueId=rf,b.upperCase=Uh,b.upperFirst=c8,b.each=yn,b.eachRight=Mn,b.first=mn,f8(b,function(){var i={};return g2(b,function(s,u){A5.call(b.prototype,u)||(i[u]=s)}),i}(),{chain:!1}),b.VERSION=n,Z9(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){b[i].placeholder=b}),Z9(["drop","take"],function(i,s){f5.prototype[i]=function(u){u=u===t?1:$5(t5(u),0);var m=this.__filtered__&&!s?new f5(this):this.clone();return m.__filtered__?m.__takeCount__=f9(u,m.__takeCount__):m.__views__.push({size:f9(u,S0),type:i+(m.__dir__<0?"Right":"")}),m},f5.prototype[i+"Right"]=function(u){return this.reverse()[i](u).reverse()}}),Z9(["filter","map","takeWhile"],function(i,s){var u=s+1,m=u==Y||u==h0;f5.prototype[i]=function(x){var R=this.clone();return R.__iteratees__.push({iteratee:V0(x,3),type:u}),R.__filtered__=R.__filtered__||m,R}}),Z9(["head","last"],function(i,s){var u="take"+(s?"Right":"");f5.prototype[i]=function(){return this[u](1).value()[0]}}),Z9(["initial","tail"],function(i,s){var u="drop"+(s?"":"Right");f5.prototype[i]=function(){return this.__filtered__?new f5(this):this[u](1)}}),f5.prototype.compact=function(){return this.filter(L9)},f5.prototype.find=function(i){return this.filter(i).head()},f5.prototype.findLast=function(i){return this.reverse().find(i)},f5.prototype.invokeMap=o5(function(i,s){return typeof i=="function"?new f5(this):this.map(function(u){return e4(u,i,s)})}),f5.prototype.reject=function(i){return this.filter(v3(V0(i)))},f5.prototype.slice=function(i,s){i=t5(i);var u=this;return u.__filtered__&&(i>0||s<0)?new f5(u):(i<0?u=u.takeRight(-i):i&&(u=u.drop(i)),s!==t&&(s=t5(s),u=s<0?u.dropRight(-s):u.take(s-i)),u)},f5.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},f5.prototype.toArray=function(){return this.take(S0)},g2(f5.prototype,function(i,s){var u=/^(?:filter|find|map|reject)|While$/.test(s),m=/^(?:head|last)$/.test(s),x=b[m?"take"+(s=="last"?"Right":""):s],R=m||/^find/.test(s);x&&(b.prototype[s]=function(){var F=this.__wrapped__,z=m?[1]:arguments,X=F instanceof f5,u0=z[0],d0=X||J0(F),m0=function(c5){var p5=x.apply(b,Y2([c5],z));return m&&T0?p5[0]:p5};d0&&u&&typeof u0=="function"&&u0.length!=1&&(X=d0=!1);var T0=this.__chain__,N0=!!this.__actions__.length,Z0=R&&!T0,n5=X&&!N0;if(!R&&d0){F=n5?F:new f5(this);var q0=i.apply(F,z);return q0.__actions__.push({func:d3,args:[m0],thisArg:t}),new j9(q0,T0)}return Z0&&n5?i.apply(this,z):(q0=this.thru(m0),Z0?m?q0.value()[0]:q0.value():q0)})}),Z9(["pop","push","shift","sort","splice","unshift"],function(i){var s=z4[i],u=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",m=/^(?:pop|shift)$/.test(i);b.prototype[i]=function(){var x=arguments;if(m&&!this.__chain__){var R=this.value();return s.apply(J0(R)?R:[],x)}return this[u](function(F){return s.apply(J0(F)?F:[],x)})}}),g2(f5.prototype,function(i,s){var u=b[s];if(u){var m=u.name+"";A5.call(Z1,m)||(Z1[m]=[]),Z1[m].push({name:s,func:u})}}),Z1[o3(t,g).name]=[{name:"wrapper",func:t}],f5.prototype.clone=Io,f5.prototype.reverse=Uo,f5.prototype.value=Do,b.prototype.at=cc,b.prototype.chain=uc,b.prototype.commit=hc,b.prototype.next=fc,b.prototype.plant=pc,b.prototype.reverse=mc,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=gc,b.prototype.first=b.prototype.head,Z7&&(b.prototype[Z7]=dc),b},V1=uo();h1?((h1.exports=V1)._=V1,h6._=V1):l9._=V1}).call(m4)})(R4,R4.exports);function Ae(r,e,t,n){const o={duration:2e3,delay:0,repeat:1/0};R4.exports.merge(o,n);const a=new q_(r);return a.to(e,o.duration),a.delay(o.delay),a.easing(I7.Linear.None),a.onUpdate(function(l){t(l)}),a.start(),a.repeat(o.repeat),n&&n.onComplete&&a.onComplete(()=>{n.onComplete(n.data)}),a}class Q_{constructor(e,t){X0(this,"_config"),X0(this,"_store"),X0(this,"_currentData"),X0(this,"_currentConfig"),X0(this,"createPathLine",(n,o,a,l)=>{const h=new gr(n.x,n.y,o,a,l,!1).getSpacedPoints(200),f=new z5().setFromPoints(h),d=new G7({color:this._currentConfig.pathStyle.color}),p=new t2(f,d);return p.name="pathLine",p}),X0(this,"createShader",(n,o,a)=>{const l=new gr(0,0,n,o,a,!1).getSpacedPoints(200),c=new z5,h=l,f=[];for(let S=0;S<h.length;S++)f.push(S/h.length);const d=[],p=new d5(this._currentConfig.pathStyle.color),v=new d5(this._currentConfig.flyLineStyle.color);for(let S=0;S<h.length;S++){const y=p.lerp(v,S/h.length);d.push(y.r,y.g,y.b)}c.setFromPoints(h),c.attributes.percent=new t9(new Float32Array(f),1),c.attributes.color=new t9(new Float32Array(d),3);const _=new xe({vertexColors:!0,size:3}),M=new ds(c,_);return _.onBeforeCompile=function(S){S.vertexShader=S.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),S.vertexShader=S.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`
`))},M.name="tadpolePointsMesh",M}),this._store=e,this._config=e.getConfig(),this._currentConfig={flyLineStyle:this._config.flyLineStyle,pathStyle:this._config.pathStyle},this._currentData=t,t.style&&Object.assign(this._currentConfig,t.style)}createMesh(e){const t=new b9,[n,o]=e,l=new N().addVectors(n,o).clone().multiplyScalar(.5).clone().normalize(),c=wr(n,o,new N(0,0,0)),h=l.multiplyScalar(this._config.R+c*this._config.R*.2),f=k_(n,o,h),d=h.clone().sub(f).length(),p=wr(n,new N(0,-1,0),f),v=-Math.PI/2+p,_=Math.PI-v,M=this.createPathLine(f,d,v,_),S=(_-v)/7,y=this.createShader(d,v,v+S);return y.position.y=f.y,y.name="tadpolePointsMesh",Ae({z:0},{z:_-v},g=>{y.rotation.z=g.z},{...this._currentConfig.flyLineStyle,data:this._currentData}),t.add(y),t.add(M),t.name="flyLine",t}create(e,t){const{quaternion:n,startPoint3D:o,endPoint3D:a}=W_(e,t),l=this.createMesh([o,a]);return l.quaternion.multiply(n),l}}const K_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAABCtJREFUWIXVmU1oXFUUx3/zSptF4qYliNAUJB8tUnRhXSiSWhcmEekiXVi1C20Ximm7li5EsFDUrYsuBVeNCCroIgXF2iKtCRioIp1shIC1I0g7TUIS7d/FPTfz+vLu+5i8GewfLjP33vPxf3fu3HfuOTVJbAG9wLPAQeAxYAR4GOiz+bvAn8AN4FfgEvADsNS2R0llW03SuKQLkpZVHsumO262SvmvlVzhSeBd4Anr3wNmgW+BOVvJxdgK9gK7gWHgAHAIeAqIbH4eeA/4ouoVHpQ0E1ulRUlnJO1p4xfaY7qLMXsz5iNXv4iDlyXdNsMNSScl9bRBNNl6zFbDbN+WdHQrhGuSzsZW4TNJuyogmmy7zLbHWWXs7SyyH5uBfySd6gDRZDspad18ng+RDimfM8VlSYe7QNa3lyQtme9zRQkfja1sEbI1SaOSPpB0WdJNSavWbtrYhyZT5Bg7bL4l6ZU8woNq/cFO5xiOJB2XVFdx1E0nyrF92uTvKHF6JAX90TWdY/BRSddKEE3imtnI8jFtsjMhwpMm8Jek/gxDz6l1FG0FDbltEvKzU9Itk51MEq5J+tkmpzKMvCC3N6vCqqSxDH9vmdy8cdwgPGYTv0vaHlDeK7enqkbTbKf53G6cJBd7bLzT37DP88B6yht8G/Ap8FDhd35x9JntbSlz68YJ4HUAJPVKWpH0r6SBwJMe78DKJnEi4HvAuK1I6o1vh6sBhZrKHV3toq7wOX3VZMYiXPANLkRMwygwVNkGCGPIfKXBczsYAfutMxcQfrFKVjkI+fLc9ke44Brgt4DwM5VSysbTgXHPbTgC+q3zR0B4ODDeCYwExj23/pqkVWAH0AOspQj7+W5gzXgkscN4rEUpk/9rREDTvodeCn93iUuWL8+tGQEN6zwSEK5XSikbNwLjnlsjokVob0D4x0opZSPky3OrR8B16zwZEP66UkrZ+CYwfsA+r0e49BHA8wHhS8BClawCWMClsdJwaIOLigU/J7oQSxQKfiJcWulL3IlxLPCEn+BSUp3CnPlIwzEct6+AJf8U4/aUWQH8Prlgu2o0zXZeAD+hxBVp3ibeDihjSlVfkSYy/L1pcpuuSGUuoROqZqWbOWTjl9AjfjwpVPSav0/S7BbIziq8DXy7YLIX4+NJoUG1Lpp5+TSfSFkoQXRBxRIpp0z+jqShLMKofKoqkssvfCTpijanqq7Y3GgBoqhkqsq3ByoZiB7AdKsnHU9oT6szCe2dauXRpDYT2vH2qu4vGUypupLBlO4vGbyWp1fU+JDc8eKxKOkdtVeUGTDdeFHmohKnQaiVLXsdwZW9Hrf+PeAn4DtcrOHLXndtvg9X9hohXPZ6H/i8MIM2VsgXFqflIqiyWDHdrhQWk+jDlW5HcQmZYTaXbm/hVv4X4HvgMq1foDT+A+dj9DaZa2PgAAAAAElFTkSuQmCC",J_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu2dCdQ2SVXf6xqNCqKScUHFIFE0CVFJFAgJASXGiCgEUARxIaw5gpJoDkggCYkgYU4kDNuBYWRTdkGQHRwW2QYGhlW2kWXYhBmYzIAQQOWf83vn9kt/9VV13+qnn/XtOuc5z/t9T3d19a36V939WlraQoGFAlUK2EKbhQILBeoUWACy4dUh6e+klL7GP19d+JsR/XVK6W/8+5S/zexvNzzkE/24BSAzT7+kK6eUvjGl9E3+/bUZCL5qxUd+OQPPF1NKn0kpXc63mX1uxf6X23sUWAAycTlIgnYdCLpvgMGpsM3GyQNgjkEDeMxM2xzUvj57AUhw5iRxEnxHSumqDoyrBG/dlcs+66fM/00p/aWZcfIsbYQCC0AGCOTs0rc7MP7ega2mSwFKSumTC1u2COnhtS3pm1NK3+Kg4O+5G6wOgnftw/M6Ib70vY5N7TIHy6fMjL+X5hRYB7H3jriSAMS3+gd5YtXWsTMIznyOwWBmyAiTm6S+5gsAMd7uMwfbx3gv4WNmn5o80AO58cQCRNLXp5T+fkrpO1NK37DCfHbCcAeGy8wMTdPGmyQ0ZJx6fdCgOJja/iql9PGU0ofN7P9N7WSf7ztxAJEEGADGd6eU/m7j5GGD+ERK6dN+Muy8dqinbQM0Z6SUrpZSwhbT0r6UUvqIAwXQnJh2YgAiiQUCKABHywL5goPiE2YG67H3TRLsJEDh83UNL8QG8WHAYmacmAffDh4gklDLAgo+0YYM8cmU0sVmxmlxsE0Sp8q3pZTQ1rXIMAAF1gu18cG2gwWIC96cGFcPzh7am4tdOEUFeuKaJFTZnC4AJqrB+6ifKAcp0B8cQCQxuZwWGPUiDVsAOyHgWJpTYKHjFYQ4GIBIulJK6ftdzogs9IPe+SIEiFwz4SRGmH+fmX0+0v+uX3MQAJHEiQE4UN0ONYx0nTbmoHnnuRdeT5aDbR1bN6iEAQlyyl63sRfd6ZdzV5AfSCl918hAO+0LrBR2i602d3kHzJx6/e8O4CwwPuzCx9+74OouCbtKp/QY0wZ+LKX03n12ZdlbgEi6hp8aQ2pK9PedtmVjbuAOAGSh/gf7SweGVvtLB2jepwMN9gjkpuPPJgHkm1MHlKH3QU3OaXLRVneliQ/fO4BIQhUJO4UFvNZgpd7n2pW1WoBdmO2A0GmAUJ1uo6GSPtLEdcBZt/LBPRJgu5iTofWERR6goELfm7ZXAJF0TZ+IoR2LBXKhma1FVeunw7VSSv/EP/sw2e9MKfGBLmuJSHQVMXRhs6g1TkBA8sF9IBpj3AuAON/LDjWkusUhEOJ/YG7iS8Ip8PtSSv/QQTHGe889hLn6AxwA5T0ppb8wM2g2a5P0D3wTg2a1hmqdudq6PDj28jsPEEkc39d2F/Da+3B8szvORnBJyDaAgs8/SikRMLVKw4GRHZRApfy7/388g2dxSvLd/7v7P75XDd3lme8GKA4WZIVZmm9onCZDbDDg/HMzQ6u4s22nASIJIrNr19rs6kRJaMT+mYMCLdOUxk6NBgfgHn3mdh13+wQLsPsw7qknG4I/YLnAzBj3LC2ofn+PmV04ywPX0MnOAkTSD6aUvmfgndFOcUzPIoT7SfUjKaXrTKAzLMMpn3Xx+rWxuWwEC5p/Wl/nrSmlN8+1s7sQD3s85Av3ITN7R+tAN3H9TgJE0nXd07REA9go2Cl25pWbJEDIifFDDZ1xQsCavN/Zk7UoBBrGU7zUBWdYxO91VrHlhHm7nygfWnUc3C+Jkw6OoBafgrf0+XM8a84+dgogHvDzLwcc5XAPeeccwqULk5wYyDeRhtzQB8VeuXu7u38fLFFbzJ/7ibKy8sOVHWj/ag6kOIy+dlsBZ6VFsDMAcV+qGw4Iwx8wMyZrpeZyTSdjjPUF+9YHxUEEC3nQWB8sYy460KmTUVaWFySxKaHtKjWUB6/ZFV+unQCIswKcHLWGuwKGv8lNErz5jUeE/q5/WKa38DGzgwBFjXAOln+aUuITydyCivhVZobMNblJQi7BTajWOEm2zrpuHSDOm8Lq1No7zGwlPlgS4AMcY2wFQVIdME5U3ijP+9UBheCpoQa7CUheOxkhV8glyH8oY2oNZcEssubUcW4VIC4H1GQABOHzVwlzdX+tG7mQOkQjdPEdME50BkKPYe+Agg1qqKGk+LNV/Kw8/BelTE2BgK1kZfln7wAysntgtHq1mU0yXrmwz4kBOIY2AQgPG7WTKsapkzrXfa5qByw1eYFHsaH8mZ8ok7K5uFH2Xw3Ex6/MRUylyVZOEDdy3aAyaBIwv2rqC0lC+AQcQ7sfLNvrzey9U5+zyn3O98PvEy/Pd/9D1/De/Q+xK5duSx6ShKzAfA3ZpTiFYbtQakxqkpi3mhqY+dp4WO/GAeKL48crFCRn7JumUNd5aAj8LwbuZ4djEicDMDo29/JlLIwJFqIPhjFZqPYYeP8OOIAGuwHv8rp1e+0eHRVXLGA+Q24ur3MaT5LhJP3ogM/dKza9SWwUIL6If7Iy+5M1VW4Fv9mAcZFHwi8DjrVEuTnLeP2U0j9PKf3YRIt8FH+l67CAvzKldF5K6Q2rKjZqA3H3EUCC8bHWyB32gqnW+BEN10s3mXh7YwBx4Y+FU8piSKTf26asDkn/OKX0swPhtjjFAYzXTOl/YKHAbtwkpXS9lBLAmOKiMueQ8r4AzBtSSm9MKb18bsBIwmYFUGpeu9iQnmdm75rykpJ+uOKegtr9lZsq57BJgNTcR8gBy67X3CSxMG86cCO2E8AxpwMeYPw5/0x1Zmx+1xVvwBnxj/iY2fNW7Ov4dnfsBCTYNGrtRWYGUJubJE5jgtDytjG3lI0ARBLuBQQ75e2zZgZb0Nwk/ZuUUs24iPYLYLy+uePCDX7kd6BAq7NqQ4VN9B8fBM/u7y5JHRGJ3YfE2t3fLb5UtTGizu7AspLxtXuAJAR4gFILf8bo97IpRJME11FKaPdBMyO2Za1t7QAZ4CfJcv6nU/yqJN1qwLkQw9KfmBl88EpN0q17p8WUylFMIMY0PmjMjoAwtcSAl2bowIJmiQ2CDxtQa4P+HVCe1Xpzfr0k0pjefCAG5O1m9uzW57j/1k9UKndNlluj41grQDxEtjZ57PDNAU6SfrVyGvHO2DX+eJW4Zy8vcN+U0s83ODLybGQdgMCp1QnKWObX3iRh+e4UBOzmgGYooi8fEz5uz0wpPXCV8gyeL+CWA3YTdv0nthLEA7A4oUoN59W1hfCuDSCS8NissSNoWZozGUq6hxe3KREKiyuTPLlJ+umUEuAYUhX3++8WFjw277QTubY8hxWA4dMCdFS0gOSFk4l4hTp46JkU6XlEa/+uNud9Sg1jL57es7e1AMQRzyIr7WIctc0pYCTdZ8DTF5+dycKnGy7vl1K6Z5DCAPGZqwIy+KyVL/MFy6LlE2lnpZQesIphThLKjJqP3RfN7EGRgfSvcdehUtwOpze2oGaOZGwM6wJIzdhDBGCz9VrSvTzJWul9YNVeMfaitd8l/aKfGqiLh1p3WgCMSarLqWOc6z5XiXdAGYuD4R05TZ4y9fmSMAjXWKPPm9mZrX27Vb+kNZtsZB4aw+wAGZA7qCmBbr6pSfr3KSWSxJUai3VSjIi7pHBqINMMtb06LaLEbThVkBk4TSa5kHjsR+3kusjMHh8dc3edJGxOJVei2eWRWQHiQhqsVe5KwdHHEdiUZmbkmH7UFDkGIkv6NT81hrJuvNR3UBzxDrZJwqETuavm4cC7oxnkNHnUFEK4/ADNS62ZPXbNFuss99vCFYd1NltyurkBAs9ZWnTNfv2uW/+3JYqa2f0nThRBUwiIqIlrDV8nFsNDpjxjX++R9JsOlKGgKdS095gaLCWpNm8vabVZDcQRkUHmzXPNw2wAGRCgmt1IJKH9ukXlJR8yRRiTxI4DOIYMfU9zcKzdADXXBM7Zjxt0OU1uO9AvhkZAgsarqbnyBiCW2nPNjL7DbcAdZZIiqLgZh0czcKEnMmYB5pZU/HGwooZT80giSdsvVB53zhR1ngvijxxIBoEjI6dGMz88B/12rQ+X+wBKzSGR5Ap3nyLAu/r/zpV3frqZEfseap5SCJtPHlOPJwWs1soJy2c5QSSRBKFUguBtLd6zHmH4KxXqPGOK9kgSE/2AAYrDVwOOrYZ2hlbEBi9yFgba1WQHRnM/M3tg67Bcm3abyn1PaokgdO9iHBvz9jEzu6B1bPn1KwNkYIBNvKBPCEd7KWDmxVMcGiWdk1K6U4VIGPXuYmYru1msOgm7fL+72zzW41lKQ/19M6udCNVXc0fEnypcgELnaS0blqSa7Nu0Qc/OYnmqHlir/IhrMtx4nAjqXPx58sZRiUapqUk6193RS/eRmQNwzOoC3zTAPbrYXdsBSS0NLO70/7r1lSShOSt5LeBH9/ho3MeAYRrWnvUzuRzcSifIgD66KdB+gFDotXGoa2qS8MkqeQ/TDxF4t9qFlDJNL7Xliz01E1qsmuEPP6uh2PXiG0jCS7rkr9e0MQ4kAJlkf+sGOxkgA74x1BYP+/+7we6XCtQj8u8prYkbJA1lJUGOqSkAtrwE9+Pxkp6eUqrJD8nMmtaUJ2zAm6GUu/cPWwyUHh9Uqk8yyfePGWl6mf4UVmKHWZwgP5Twy7OPwFrlVlG0EE9odVmXRDx7zf/nTDO7934sw90epaQHp5Rw/yk1bF64GoWbu8rfoaAFJREErFYoW4qfcrBs+bqe7IYyCSADWUma/PMHfHWmGI4ek1K6a2VWbj0lFiE8wyfwQo/JqSk4zjazu7WQZcAw3ORrNxB/NCkrylSAYGzLExBj5ieJWMjm4YZFdo18DDg0NjnISQIYAKTUrj5nyG3LpB/6tR5yW3Mzv5uZnd1CA7dX5Y6IcCVwEyEPcLeN4D6Tuzt9tNUQOYnF8lgDAvbzRkmvFiPPLxcMUWi/IEY4hlzSvyNIqjIRZ0TZvZaJXK79CgWcrelChXPS3NLMnhOllwOOTTMPk3i/mf1BQz8Ym8mPljeSYjfF7DSfIBXzPjHWHIUhy6XnyiWmPG+E4IZVr95P7frr7WK9iegk79N1Xs+F7CmldsOWHL6uUibENm8vi/bjnh1o2/IY/ma3pyaAeI0Jjq+8hQPoPcs6gnl+BLbuEhzFxIGUnCNvZ2b4VS1tQxSQhJH3qYXH4aHw4y3Z+SWVuAtYeAT2UFb5gUQhiAHh2i6tACllJznKzRp1IHRC5gYntBSwVqGkbp684Lmeezefk0nuDxtaRwf9mAG3HkIGbhFNVuHeGbBaeQZH6hmGNj43HpZyM4c3cyYrDBBPGcoDJx9bXrzm9oVVQkrJcDpQSRgPyTiSN3aYOx70Ktzxl5P0uJQSHELenmVmGAVDzdOcllLUPjla9HNAHGBDD9V9aQEIIakl786w4CMJIx0CVL9RwPEJIap9JdgJz9y8sUvdLPri0ect17VRwDfSF1ROdzyAw0FXkjhF8oTZ7zYzjJWjbUChBDsfCpsOAWQO1dmAp+5To3HqbnXnpMnlDvjcn56avnSU0ssFTRTwnZvMKKV5unHUOu7x57crPDzs8euxRZNNElGAkKSsFCgfNr5UUsFQd/BJUepL4qQpxZAvhsAoETd03YAh8YlmxskQapIIf8h9vMIpngaM2qEEIlGAkKT5ytkbhc33nvm8RBT40lDxGjciPblAVWLT7x6i9nLRRikgCVa4FE9y+6gx2Iv4lORNlDqh0nwVt6jPmdnLxwgyChAvkUUS4byFHcAqqULxsvz9sQHyu+8CsFZ5ah4iAW/UEjsQed5yzTwU8BgfZMNcdoX/h9UKFcSRRExP7q8XTmU64Fh73liJvwhASiV7LzOzV0fI6LU7SkFL5M8NRXxJemglqdsdlzDZyCxs7xoP30WzlbezzOw/RkbmEavk/c0bwVo4NI42SZR4++bswtHS4hGAlLJrh91K3BUkr51BztpHR2o8eDpQtCJ5I+qsJMCNEmu5YLMUkIQBsZQIAq3jaJpTry3zH1JKefXdt0ZdWTzXQe5+MlpdYBAgA/XLQ8K5+9bcpTAdoRBaTyQNa5VHneFOzxF9IrOPbHZ5r/40t2ozj3lKITKjMI9kmh9sAyG6j4347g0I64P12McAUnL6Cgk3vG0l8RuL+zGRcEpJ/z2lVMql9FsnLW/V2ALa9d8979bvFcZ5fzP7H2Pj97BsXOhzkIUTz0kqKZsGuaExgJSqjmLYG9U8ebz6rxfi1c9tkF84IfIcstSoKyaUGyPy8vt2KSDpJYUMjqhsQ/VNXI7IY98Jr3h4JO7cNWK54XGwqnIVIJ5GFPkjbyHtlRuLqBXRb7zMIyPWbs+mUYpH50g+6HSg213G63u6pzktuRT9XCS7jFvpUennSUKoCTNa43JAm0XNw2K60iGAXKuQxYK09aEMIxXDIAXhQ2l2KoIdyaqr8dDrm9ql57koIOkZhTIMYYWLb5w/mI2nxXBIJpWvze7HCfLC0jsOAaSkFgtFZUnClf0/F1zanxPJ8O5hk2Rtz8ue3WZfanLMtaAOrR/fOAFJvyGkXzviEu+ZdAiS6zdc4f+3mfE92CquJ1WzRREgnmmiFNB0fiSRwsBLPCzIXv0Xsh0WdokQrzpGpOX37VJAUkm2vK+Z/e7YyJzN+o0VNl9yr1FxOW8EZJEs5JRWAwiCTH6MfdnMSvaI055Uifl4l5nlO0eRHpIwIOZJpkPajjECL79vnwIV7SRl1EhhO9okwWbnXhUtsSI3K8SawP6f5rpSA0gpKUMolagk4kU4AfK4EYrKj6ald9XwnxSoxBEcclEepfBywVYp4Ll5S4WPbh4ppeepRinx1m+Eff+umfE92CqpSoviQw0gJet5KKV8xbmMQcNejYY6SqKiUZ7AehHOx2Z9z36vCOu4sY9V/MK+9k0pJdisfBMOOb9WSnUUreqnAcTN+j9ToPerIyGTleOPfFmleOVTHuNev+wsV8qevwjnewaAseFWhHVy6MIpjHrpSsLNiDCMfgux8R6yjRIqb8/P3Z9KAMGhK3RziQiVKkIvNLNa1ovjbtxrk4zs/RY2JI1NyvL7blGgIqzfOeLlLel6BMnlbxSpPtZyCJQAQo7UvN7CoLWxG+RALTrYq9F0pJVyBYtwvlvrerbRVIT1UDkF9xOEzcpbqHalx7znpTZOK5dQAgjaq9wcH8qQ7U5peWD+J8zs0RGqVnaUn4lqzyLPWK7ZHQpIQpv0/KkcgyQ8fPOSGX8UcWKtVCY4zY2qBBBKWuUOYaHyuu4MlufNCrkke7x5bs3EgHQ1M6tl7tud2V5G0kwBSWeklKgFkhuErxWJW6+EUpCxZDRSsFKu/NI8OV0JIDctDHjQJbjHYpWyloQSUVcCa3CrLxVYaZ6M5YbdpIAkXN5vkI0uFAhXSXgdynpSCeX4GzN7UX8spwDEUzbiEpy3F0RS0EvCe5ddod/IVTWaeLgifyC73HM3p3YZ1RwUkHSWq2z73UXlkGsUcnB92swePjY2L70Bi5c3qmUdp9DNAUId8by2w2jUFU9wA+F/zZ7WYrwpuR8sKUTHZnrPf6+kLA1pLgeM0r8TNBiW7H1v6qc3zQFCSlC8ePst6qAIuPKaEFQapbbdYPMCKqWcq9+1JGQYo95+/+6JHUrZ/L8j6PdHxGpeYZmAvNEcvhXHxQvNjBqWRy0HCLrlPO43VG+wEv8BGnMtxWkzWjEa4VuTZ2Hc79WwjL5IAUmUzcjzNYeMw5IwaudcTzQ+hHxbeUDeJ/s2uxwgJRd3SqqNapEk4f2LBqzfou7tD0spIb/02+PMrFbCeVlqB0QBSaR/ynMqEyVYsnOc8uYVz3GUSi8bI5Fr0XIl0Cmu7zlASjG71P2gdvUYm0RS6pw9I3rwksC91PjIwXUHM8Mva2kHTgFJ+F/l+ZlZ5KVCTTlAvjWllCcOhE0qJRnM78VQmFftPSXnQg4QYr3zuh0UtRktqyYJ+QM5pGu4x//PyNxKwv8qd1++fsQ9JdL/cs1uU8DdRvLKyPhV5exP8UUk/bfMfZ2sn7WSfMd9eM7pvFjPl8yM2PmjlgOk5Cf/omBaFpKA9RNzfcHM/ldkaiQhUOUW0e8zMzInLu3AKSCJzIt/kb0mHhj9DbdKBUm/nVXIhU0i2eBg87RS2P367ZS4p2OAuMosd/5SRMimd0nEgPRPn8vN7P+MDdLv/WLh5LpqxHs40v9yzW5TwL1r89qB7OR57HjtBPlPKSVc4LvGvaPRib72EPJzgznOtUdxJX2AfF1KKQ+zPeW4qZG5YgO5xMxKdTxO6cZDKPOMEn9rZrn7wW7P8jK6lSggCbeiPL7jKsEQbWQQZJF+i9pCSmLFcfhtHyBXSSnlaX5CSeJ8kZOkod+wn+Su66cR0ctt5Zb2i80sVzevNAHLzbtNAUmko/22bJTXiJTlk3TnQllykjiMVpGqJJM7TgPUB8hVU0q51iCUpLri5h6q/eH2k7dmhMGfJhfad3uGl9GtRAFJhFPndq/rBPNdlWqIRN3eS6aN46ppfYCA3utnbwmbdN7Ym3sIY16XLuo0Rh263PuS6MVSNd2xoSy/7ykFJJEMMA/Uu4mZUcl4sFVK+0V9ACntkbNnx8kR+wDBXJ9nlYgmagD5ePL2W9TNneIoeQZFDIx5VsYxOi2/7zEFJP1xSinPdxXNuMh9eQWBp5sZFvoxcP1IoVTcBV1C7D5A8Iz8oay3i8zs7YGHAKy8fsMbg6nt8aU5O3tGyJtzbFzL7/tDgYo3912DvnxoX3GT6rdQ/RlJrHnWfr8dJyjpA4TaCTkPGKoDIgkreK4Bg006d2yKJN07pZTbS840M/5/aSeEApIenFK6V/a6v21m/P/YKUBC65w9QxP12sC9pQoGiAdHdpkFIGMUXH7fCAX2ASALi7WRpbA8pESBfWCxFiF9Wbtbo8A+COmLmndry2N58D6oeRdD4bJOt0aBfTAULq4mW1sey4P3wdVkcVZc1unWKLAPzop4Ui7u7ltbIif3wXvh7s70eCrIr8qmagmYOrlrdyNvvhcBUw6QJeR2I0tieUifAvsUcjt30oZHmNmnxpaDpFLShl8xsz8Yu3f5ff8pIOmXU0pPyt4kmrThW1JK98juXVvShrnT/jw76OxIaC4x7f1G8i+ydy/twCkgiez/edLBh5oZobSDzZ0Nb1UA11rS/sydOO48M3tx4CVxV8bdud/IKJ8XEh3ravl9Dykg6R0ppbyC8S3N7DljryPpp1JKxHT029oSx82devTDZva4wEtixSfkMm+UPij9/1iXy+97QgFJhFZTAiFv325mF4+9hiQSzlH0qd/Wlnp0m8mr31IIermFmZUq3o7Rbfl9TyggiTii52bDJdguLwN+2httI3n1lVNKc5c/OMfMPjo2X5JKcsiDzIx0Qks7UApIIj3PfbLXi8ofV08pkbCh39ZX/oCnSJq7gA61Rc4fm1+PK35adh3ZJYhZX9qBUkASMed5Np3bmtnTx15Z0nVTSnmNj2guBKqo5eluhwvoOEDmLsFGfO8om+QloD+YEeWvyTZvZnlSsTHaLb/vAQUk4SCLjPk12XCvGSwFDXuW51FYewm2uYt4hvKkOjhLcshNI5qwPVgPyxAzCrgG6pSSZymlkPzh6yXPB81/r72I5zbLQJf04UsZ6AOFVqUMdMj+tc0y0CSgzgPgmaLnm5nG5krS/QvXkOv0jYF7UdlRK6LfQuW4xvpeft89ClTKft8paBrAZpc71yYzK62/U15eErkYyMmbNxKNXNb/z1KV2/DNJZJLok56bvR5r5k9dWyKXA6hFMKVsmtD1YbG+l9+3x0KVKqKfZ6KT0H543YppR/I3gjjcp5j7bSXdu/h0CFwGkCctysVNzzOFTREZkkYG2+bXUOmbCrWXj42RZIomkMqyX57ppndZuze5ff9oYCkZ6SUfj4b8ZPMjGI6g00SmdypPpUnu35av75grRPPBJrngCsWq60BBCMNOuZ+oyDnBYHBM2hsF/ngn2dmbw7c/7MppZLWi52F/K1L23MKSCLvMpxC3m5uZs8bez1JZENknfRbS0VlNF954c9isdoaQL4npZT7QVGS4IVjg+d3SaQN/eHsWioGsWuMNkkAMbekLsL6KOX244KKcP4WM8tVtsUXkgQ3kSc3f5uZ5f58tfuRXfIN/B0l1q4GEAqX/GShd5wPIzUHS7l6v+RsViQlPSfQA7PnL8L6fqz/0VFWhPP7RoreeKkN2Ku8VGA0Fy+JqnPnRsb8UjOjkNMprQgQPwVKBsMPmRmel4NNEoYf6oXkFYKiVW+/34/gvIjOIqyPEX/Hf68I5xTPgYV+39jwK1VtWdjUA8GwPLY2S3a+S2tpSocAUqohTd3BUT97B1gp4zbH2LPGXsLvR+uVC/uLsB4h3g5fUxHOEa7RSo02SVQDyNn/UCUBX1fkkCZBSb/BnXyg9PAhgNQcF6N101H1ovLtN6rlUho6wmaVyiLQ143NjFoSS9szCkii5surCsOOljn4Bi/5/PVZH1Hr+RkppbwuOl293Mw+1wQQR1spwjCa8R2UwivmNo1zzezVkbmt8KrwisTOL23PKCCJ8sq5bBuWLSWxHsnk3m/YTjAhfGGMHJJKmdwHq6hVTxAHSKkkQlFfXBqcJFRxqOT67dKUEu4EpwlEeR8VbQeX/ZaZPWSMIMvvu0MBSb+ZUvq9wohC2klJyLP4XuGF229vjqiGfT2X7HvHpQ6mnCA1txMC6lnog00SumYK5OTtxcHSbgjpHMn5scizYbXeOTaG5fftU0AS7DbzmC/u1/k8IqSPrSU0T4TX5u2xXTWooQ7cdyt3b+eW09xL+v0MniCOOvjGfg1q/vt9ZvbesZfy+0vCOi7Ojw76dqGzfkHhWWHBLjLO5Zr1UUBSSeHCA28Wsa257xQJPPLKxy3COW4paEf77fIxeTYCkGa+rT8CSd+dUrpTgZSeKm4AABKOSURBVPyhElkOsoemlO5Z6OOOZvb49U3t0vOqFJBEcddSXoKzzCzPZFN8nKRSiT+upVTfRyJjdPkFjqjfRuXpCEDIO3SDwiCOK4GODVASaVly35ePmFnuuVsjEGPgiM6tp+9PKd3IzD4+Nobl981TQNJ3ppTQOH5v9nRchmCRR3Om+QbJBstG22/4Bj478lZepjyv4Mytrx8bwyhAfICEvaJi6zcCod4UHCCuK3coXPusiOHRx/CLKaUnF/qgHvbdI+NYrtksBSQ9MqX0a4Wn3t7MnhIZjSRsHqj88/aEiNevr50fTSmRkKTf/ipSYjoKkBL/FkJgNyK3oF47G+QHzCzPqFelm6QnpJRK3p4hPXpkQpZr5qGAG/RKrudPNLPSZll8sCQ8uzFa9xuq4WdGRiqpxgGF5OgoQDDMIKzn/i9FD8jSwCXxkrkbO5c+tUHgR+0Mq8XR3W/ErOMJSgrTpW2ZApJu6B7ZxJz3G6wwrNVRBdmxJomNuWRhxy2+aPnO+5RU8kzHL5DYdQzXgy0EEHpwF+Wcl+Sn10STKnjmkrzUNP5dnAyhJokjm6M7b+8hS0VE/Rx60HLRJAq4OpXyy8QF5e3uZvaoaMeSOGlgz/stlLXE12ypaho/vT8aOtECEGQQTpHcTZjsiW+LvLSka6WUbl+49hVmVnJBKHYrCX+uPB8r177KzPIUMpGhLdfMRAFJr+SUKHRHnuaSLFGbY/oopXx6spldGBmuJEIu8qyLxI1weoy6O/GMMEAckRh8rpkNjjh1HviZ4KBxQMx3ly+nlBC6PhzsA4EL20gp+94zzOwXIv0s18xLAUnksipFfpKtBpvHX0aeKIlFzemR16p5j5nludNqAPtG39DzNf7BFgNzK0AwGHKK5C38UEksbnTjuTzDsRcudyAJ6zogyXXbjO1MM7t3ZDKWa+ahgKQHp5TuVeiNJAiAA6t5qHk5hJydR254fAPISps5z2czHw397gbaBBA/RWrHFuxN0SMyp4okTP64HeftT1sEbUk11S/93jqqJw/N2nJRlQJu56qFMYRVur6+EPB/ovCwl9ViNgrrC090WLTJ4sAqAKkJPqNWyf6LVHYJAl5gtT4WXY+S7ptSekDl+qu39BV95nLdVyjg/na13Mv3M7M8MnQIaPjuwVrlmRZbuYuS9wfPDSuUJgPEUb6S6sz7uIYTIz/F0E+HjEjdS0g6p+LOwiVnLJqt9UDaNVafrvSOG0ieWHpwIM4R5P5SyLhsmhdF3kLSyiaJ/nOaWSxf3DXjC/mvRsMmewsbLUVJ4/ESM3t9hCC9vs6tZKbnkutFEmi3PO+kX+uJo2vJAAlAyuM2xsCBO1MpzgfWnQTXoSYJgOX5srh31K2k9IBJAHGQlMz3oJ2Iw1FXeO8DLQUCe+5nQ/ALu0apsMrQEY3xKNeyddffLqoBCc3ECb5IEprIWiJAFDa55XsMHFdzbiIPhcUREcEcLedo8xMN5U2+rsNuUflDVgEIVaFKDmAXm9kbRt/GL5CEdfyXCtdjdcXK/tloXw66ofSoTTxxy3NPyrUjMh+pP5vWlKSruLU8946ApH8Ytbr73LMeWZd5CzvWzgYQH9B1Crs/P1WD4EsLSRJhmKVY4SZfra5vSThR5pGM3c+4x/9G1FB0Uhb+2Ht6up2H+YlfupzIPriKplbxtaIPOJGXRjtzV6bc14/b8Rp/a7SfuQFCvDkLOw+iRxvFC0aNh4RTwmpx1OYt7JjWv1HSY1JKd60QBhdsQBLyAJhK3EO5zy3SgKNkA+M1zzazvErt6OtXHFi5D9Ya1mo0LNs3aoyCrMNc+4WvFeuQuPVJrek4rOz+pXIJXPrxSKrR3q6PHIJdIwcbl4TjjjOQABCAUmqwcL++2EqG143bOB5ecBDtbrybmZ3duvoq+QrohkX9lGgglAMEbqHEopFtMeSdURv/ygDxAZZynfJT0wDdIbKWpLpJm9EDXqnEdJ8eOM89cAm6OnWJeLATNqZSPEd3cahUc774JNW0l1yKq1A4B7O7peRpbuknlEt6DNhzAQTLJUdcroVgNyDBw6hbcW9BI2hRJ7HUSBxXSno8+J5uuScvcGmX4V4iEwHJEr57hec27C7gKHlvH3EH+FxFLdvZqY6ckGd17y55UaOCB24Dr4yc60ALCmsV8uwYWjyzAMRPEQx/eVgtP4W9fXsgwQ2llIGCS4ggHK2fXdi10I8/doCP5hYc4QDKicyW4tlHAEae0bJPTuS3u7TYu3rzioapdiKxkYaydvb6K7k98XOoVMfY6cHvswHEQVLjBZEhmuLGK3HsR+8UqSJUenkvnILVfcjtGhsOIDlRebc8bxXgyFPz9EmJv9Wd8ypMkYXm66NW/SkcX94DB9xASVPZJPuOjX1ugKDThtXKPXXRZnHkjSYXzo5jwmtrhr+HRLVkhdOEXYzFUGO5uAUVI0A56DSnng4UWpSy+XekY3ODFuFgp2we0TKROK7UMCxSNCncPDk664x++w2PX9ZZk+1s6MGzAsR3CRZ0XoKNn8LhuRlx75FSwrWl1M4xs5qj3CDB3UB5v0qMe/9eYp+RfUIx0OFZ3vKFrmJFFqjJA90IWbwPaDHYZfNHIaaaT9anzOwRraSohNHSDSXY8lLird2fcv3sAHGQlNxQ+AnD3xQh+z6FUgrdizRpPXJquYMcO2ieUii/lHF3YAlrWVaanZlvdi1hB4qSUa3/RN6RU6PJcTQDBzStaSW/aGYPan1FSYy75Moy2Z1koyeIA6RmuOHnJofGbvCSCMbJE2F3P4dSmdYI4ZkvOE1KyelKt+3VqdJwWnTvepafGqG8VSUCSaqlCuXyz5vZmRPAUXNEbDJMtzx3LSeIgwTDH64opVYsdzU2cFc/oi0rtSbXhMqkkuaU06Tk9lK6pTtVcG2h+lbN9Xvs1Wb9XRJp/lmgnOScGGOnRfd8ov44NUKl9gY2nJrrELdcNEWd7hWQ87og3RBIQRrKsNhK6LUBxEFCkoZSdgt+DpVzy19owALLpahnqec+mgp/YHJJmA1IWhYW3ZGA+Xz/4KpPaGeT5q518rrr3aiHGwgu49f1T16da6j7DuiAYzSR9ADtsINRf7wkg3LbVI+IWtk0+iROPZTEYQp91woQB0mp5BU/kV2CuIHmxSypFjtAv7gWvLDVVb5yoqAOpggQn5YF13VHKiJ2ZTRh704pccJ8egU1KfH3nA58iJoDFJx2tU1oaE0ABBK7UXwmVPVrqDNJ+NFxAudZRLrbmmN8fP0AupsUwmf5OVQScAowunvWDhB/SXa1kiNiuKRb4SQhqvEWlZcHdLimNAVdDeyM8L4dUEqZVFrngM3hCCwpJfj87u+ORetAwDcavO7feYx163O5ngwjHTDCwW0j4GDDIvAt96TobnuumfHc5iapVDKNfj6xiSC4jQDEQVKqVsVPn2nJidWnsFcMGkrxwwIAKOEY97EZdBavA0tNaTDWzaZ/x5u1A8VoHfLo4DweHWDkYbL9LkLVZysnOH3ntg4uHawKFR1/5LpNAoToQbJV5JVvGedkFZ3HAeCQWCIkfaPhACSzpiV1oZGwUnZPBOKoIByZlzmuQa44j1DTlBJl7z40R6ddH55elAWcu5h3l2AcpqpxKEVogUOomQpwgSf7TSjKcNV33hhA/BRhx63FKk9S/3q/WMRvXmHjOhrhkAhQVnJ/rhHcDY+ckviQbQMwHSBI+0nVpFD+29YF5N6zAKPmyHjE/pCbd6qSYiCunL4B++T4jtb33ShAfDHj61NzRGx2bOztaJxMTNyQipZdB5CE05y2ErQ3HmQuAMOHcADSJfHufHJXnOhjcKXAV4wPCbsvAAwOiKb4/egD+9dJgr588oyH/ctQSkDjULBT4eSoOSByaaj035R3q92zcYD0dvxaSOwlkfqFIzs5k5gngujfArtBlotQGbk5Ce7vT55jgNIHTQceLulA0AcDxe5D+WTXMF6yhMBK5omk+4/CDgEwJp9cblxEpVtqzQ6vc9BhKwDxRYK7QI1vx9mM3aLJubG3e7PDARLUoEPvCH/8lmgRnzkIvk99ePEatHZDWUqOcjM7OCbJBe58CFeBs2upNeU4mJPGWwOIg4QdqWYdRU8PSEJx7SWiSMLqDkiG+GVuZfdDDQlYhrKizEn7nezLC2YCCj5DpzDjR67DIBpK6laZI5QrgKNmZ5rkdTEXcbcKEAdJLQld946TU7b0ThQmgBNljPen+m4HlEk89FwTs+l+vA55B4y8mmw+HGQh2CkUApPbQO3Ars9Jyd4mD6hw49YB4iCBJy/VguiGvHKEmGeVByQRqzO8fweUrfD9c07yUF+ezqcDxlCwVNcN3gGAI1TKoPZsP91LEajdLdSM2TrtdwIgDhK0UGig8mKhHcFCNeXGFpYX8UGrlFe6Kt1KLD1CJ6wEybm3PmFj7xf53UFBwj5YT75LmWTyrnCVuWAOvycvrVYzLkJjHE934gTfGYA4SBgPBqKSWwqXICsgsE0S3vsz7gZGNGlRAx9sRR8s4RoTkUW77mskUdulD4oxdrMbEvYVNEiTDH4ZzTEqQu+abIOq+k27JAfuFEB6MkOt+AmXILRfONUIlS9Et4hzogwd9/lt+FL1wRLKRbxuEBTeDZapD4oWX663+4kxiwXePY7x7q55PISLMG2SjjsJED9NasExHX2wiMN2hVMKjfDi7GqcKLUYlqHb2fn4IOTj4k54MSDaWJPE4ie8Fa8ChGxO4dpJPDQu0nRyYswSX+HlCJjLmpcvY5nsRbFuAu8sQBwktfj2ji6AA5DM5j7iDnicKISLRnjz0hwBDgCDIEvMPEnMLplzMiVhUKPgDKCgrB1gaDkh+sOBjoTYImPM6dgJKADHEB1njyOfk847DRAHCQsAlqvmFMdl7NqwXZNtJgX2BL8xWAImmO8oz16bH4xoyDEIn/l3//+4H4UFz+O7/3f3f3wPuXtE1ghjINAIj2doN5t/kyTYKGg2lDUGORJwTEq6EXnBOa7ZeYA4SCA4C5WdstYgOKfJysJkASwsSE4UVMRM/NSdeo45W6UPTjZAgar2XWYGSGZtrvxgroY2NE5W5mq2DW3Wl+h1thcA6cYrCZYL4g/t5mRdZEdci+DsvD5gQU08lgllXfPW2i/sE2paQLEW2ciL17B5lOpzdOMFkABj1tQ8rcRouX6vAOKnCf46gGTo+MZdBNaB2hCzCPE1oro1mEXBB7mAbyIAt9GISGSDQN7hm2JGzWlaWwbuQjgKDuZkaD3BBgOO2ZK6tYxz6rV7B5DeaYKfFZNSC/PkUnYsBHjc6FdOZBwlsp8yHWi6bwygCKvINlPlGd4HWQHQY1A7AkEPDGs5HUrvLYmE5QjhfIbeh/BngDHZXytK93Vct7cA8dOEScIVG23OUGPhdEDZOt/rAOrA0v/utD0AgE8HhqPvdbFHLQvLBfAOGGOyGBoxVLgb25xa3iVy7V4DpHeaRNSJR5hyazwnCgFHSwtSQBKxK9AZdmps3cyufg8Oc/bLxl509geuq0NJsC6wXGMu2t0QUC8io0zOHriud9mlfj3rJDRF3R5pGBhhqWZTG0ceuq5rDgYgvdMEnp+dbkgl3KcnKkdOlLUKs+uawHX168qHE0/HgwNIDyjEmbTsfJd5jipCfk/kqeKnBZo4aEeSukg76JP4YAHSA0rHOw/5AuULAaESVeknD/1k8ZMC3y2AgdIj2jqlx0HLcgcPkB5QcPfmRAEoY9qX/iLBDQSwkLtr7ZlDoqtzles8TSgsKKAo5Smrdd9pA5Hd9srdfyq9TgxAekDBHtFpY1rtEfhTARJYMBbI5bsUu1BaBB5jzubAB9YJp8ZWPy7sLwjfyGoHETQWBcyJA0gPKNgcAAo2lBbWIqctdpUjsPiHtJiTsntEJ612nSQWPrJDBwi+a/EXkcfBamLLABhr9UiIDGYb15xYgPSJ7a7jnatILfVMy/zgTtEHDY6UR59VygswAElk/8ARsPv0wTDX2I9cVeZ20W8h4K5cuwAkmwl3ukNoBTCr7L7Vjb4DS+Wb+/oAyP9ex5xxCqLmRimxFifPXVnwreNYB7Fbx7Cz10tiR+4i86Jqz519n2xgqLWPIiH3zYFwkwReABKktiScIgELamPYmjnYmeDTZ7msY/tQywKK5sJFs4xizzpZADJxwnraIdiwThjm7ymVqCaOongbGSlhmTrlwdH3rmvb5iTAnH0tAJmTmlcI0WjE+qDBztDJEYCnVcWajxANGSDoBH/sNMdg2GfP2ZmnYpbuFoDMQsZ4J+7q3gdM/jedsfj7IDj+exdc3uNvu/9XLgDZ/zlc3mCNFFgAskbiLl3vPwX+P/I48fVbm9z+AAAAAElFTkSuQmCC";class Tr{constructor(e){X0(this,"_config"),X0(this,"_store"),X0(this,"customStyle"),X0(this,"_currentStyle"),X0(this,"_currentData"),X0(this,"createScatterMesh",t=>{const{geometry:n,material:o}=this.createScatter(),{mesh:a,size:l}=this.setMeshAttr(n,o,t);return a.name="scatter",Ae({size:l*1.5,opacity:0},{size:[l*2.8,l*3.5],opacity:[1,.1]},function(c){a.scale.set(c.size,c.size,c.size),a.material.opacity=c.opacity},{...this._currentStyle,data:this._currentData}),a}),X0(this,"createPointMesh",t=>{const{geometry:n,material:o}=this.createPoint(),{mesh:a}=this.setMeshAttr(n,o,t);return a.name="point",a}),this._config=e.getConfig(),this._store=e,this._currentStyle=this._config.scatterStyle}setMeshAttr(e,t,{lon:n,lat:o,...a}){const l=new P0(e,t),c=t.name==="scatter"?this._config.R*1.001:this._config.R*1.002,h=this._config.scatterStyle.size||this._config.R*.05;if(l.scale.set(h*1.3,h*1.3,h*1.3),this._store.mode==="3d"){const{x:f,y:d,z:p}=L7(c,n,o);l.position.set(f,d,p);const v=new N(0,0,1),_=new N(f,d,p).normalize();l.quaternion.setFromUnitVectors(v,_)}else l.position.set(n,o,.1);return l.userData=a,{mesh:l,size:h}}createScatter(){const e=new B7(1,1),t=new t6().load(J_),n=new F7({map:t,transparent:!0,color:this._currentStyle.color,opacity:1,depthWrite:!1});return n.name="scatter",{geometry:e,material:n}}createPoint(){const e=new B7(1,1),t=new t6().load(K_),n=new F7({map:t,transparent:!0,color:this._currentStyle.color});return n.name="point",{geometry:e,material:n}}create(e){e.style&&(this._currentStyle=e.style);const t=new b9,n=this.createPointMesh(e),o=this.createScatterMesh(e);return n.userData={...e},o.userData={...e},t.name="pointScatter",t.add(n,o),t}}class $_{constructor(e,t){X0(this,"_config"),X0(this,"_store"),X0(this,"_currentData"),X0(this,"_currentConfig"),X0(this,"createPathLine",n=>{const o=new z5().setFromPoints(n),a=new G7({color:this._currentConfig.pathStyle.color}),l=new t2(o,a);return l.name="pathLine",l}),X0(this,"createShader",(n,o)=>{const a=new z5,l=n.slice(0,o),c=[];for(let _=0;_<l.length;_++)c.push(_/l.length);const h=[],f=new d5(this._currentConfig.pathStyle.color),d=new d5(this._currentConfig.flyLineStyle.color);for(let _=0;_<l.length;_++){const M=f.lerp(d,_/l.length);h.push(M.r,M.g,M.b)}a.setFromPoints(l),a.attributes.percent=new t9(new Float32Array(c),1),a.attributes.color=new t9(new Float32Array(h),3);const p=new xe({vertexColors:!0,size:3}),v=new ds(a,p);return p.onBeforeCompile=function(_){_.vertexShader=_.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),_.vertexShader=_.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`