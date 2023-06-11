import{z as q,aj as be,bZ as x,A as $,$ as ye,Y as Ce,d as he,aG as Ee,J as Be,bM as we,bK as Me,y as w,r as M,b0 as ke,bL as _,ay as ee,B as Te,ai as Se,b1 as Ie,bD as k,o as c,C as b,w as m,T as F,b as C,a as p,D as i,G as ne,H as z,c as N,P,I as T,a3 as R,bl as D,V as Ae,e as K,U as j,W as Re,i as $e,a6 as le,bN as re,bO as ie,by as se,bh as Oe,bv as Ve,ag as oe,a5 as te}from"./index-6beb3d85.js";import{E as Le}from"./el-button-255fb666.js";import{E as ze}from"./el-input-118885d8.js";import{a as Pe,u as De,b as He,c as Ue}from"./el-overlay-798aa1cc.js";import{i as Fe}from"./validator-e98441a3.js";const Ne=(e,n)=>{let t;q(()=>e.value,r=>{var a,o;r?(t=document.activeElement,be(n)&&((o=(a=n.value).focus)==null||o.call(a))):t.focus()})},G="_trap-focus-children",h=[],ae=e=>{if(h.length===0)return;const n=h[h.length-1][G];if(n.length>0&&e.code===ye.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,r=e.target===n[0],a=e.target===n[n.length-1];r&&t&&(e.preventDefault(),n[n.length-1].focus()),a&&!t&&(e.preventDefault(),n[0].focus())}},Ke={beforeMount(e){e[G]=x(e),h.push(e),h.length<=1&&document.addEventListener("keydown",ae)},updated(e){$(()=>{e[G]=x(e)})},unmounted(){h.shift(),h.length===0&&document.removeEventListener("keydown",ae)}},je=he({name:"ElMessageBox",directives:{TrapFocus:Ke},components:{ElButton:Le,ElFocusTrap:Ee,ElInput:ze,ElOverlay:Pe,ElIcon:Be,...we},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Fe},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:r,ns:a,size:o}=Me("message-box",w(()=>e.buttonSize)),{t:d}=t,{nextZIndex:f}=r,v=M(!1),s=ke({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:f()}),H=w(()=>{const l=s.type;return{[a.bm("icon",l)]:l&&_[l]}}),U=ee(),u=ee(),ue=w(()=>s.icon||_[s.type]||""),de=w(()=>!!s.message),E=M(),W=M(),I=M(),V=M(),X=M(),ce=w(()=>s.confirmButtonClass);q(()=>s.inputValue,async l=>{await $(),e.boxType==="prompt"&&l!==null&&J()},{immediate:!0}),q(()=>v.value,l=>{var g,B;l&&(e.boxType!=="prompt"&&(s.autofocus?I.value=(B=(g=X.value)==null?void 0:g.$el)!=null?B:E.value:I.value=E.value),s.zIndex=f()),e.boxType==="prompt"&&(l?$().then(()=>{var Q;V.value&&V.value.$el&&(s.autofocus?I.value=(Q=ve())!=null?Q:E.value:I.value=E.value)}):(s.editorErrorMessage="",s.validateError=!1))});const fe=w(()=>e.draggable);De(E,W,fe),Te(async()=>{await $(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),Se(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){v.value&&(v.value=!1,$(()=>{s.action&&n("action",s.action)}))}const Z=()=>{e.closeOnClickModal&&L(s.distinguishCancelAndClose?"close":"cancel")},me=Ue(Z),pe=l=>{if(s.inputType!=="textarea")return l.preventDefault(),L("confirm")},L=l=>{var g;e.boxType==="prompt"&&l==="confirm"&&!J()||(s.action=l,s.beforeClose?(g=s.beforeClose)==null||g.call(s,l,s,A):A())},J=()=>{if(e.boxType==="prompt"){const l=s.inputPattern;if(l&&!l.test(s.inputValue||""))return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;const g=s.inputValidator;if(typeof g=="function"){const B=g(s.inputValue);if(B===!1)return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;if(typeof B=="string")return s.editorErrorMessage=B,s.validateError=!0,!1}}return s.editorErrorMessage="",s.validateError=!1,!0},ve=()=>{const l=V.value.$refs;return l.input||l.textarea},Y=()=>{L("close")},ge=()=>{e.closeOnPressEscape&&Y()};return e.lockScroll&&He(v),Ne(v),{...Ie(s),ns:a,overlayEvent:me,visible:v,hasMessage:de,typeClass:H,contentId:U,inputId:u,btnSize:o,iconComponent:ue,confirmButtonClasses:ce,rootRef:E,focusStartRef:I,headerRef:W,inputRef:V,confirmRef:X,doClose:A,handleClose:Y,onCloseRequested:ge,handleWrapperClick:Z,handleInputEnter:pe,handleAction:L,t:d}}}),qe=["aria-label","aria-describedby"],Ge=["aria-label"],We=["id"];function Xe(e,n,t,r,a,o){const d=k("el-icon"),f=k("close"),v=k("el-input"),s=k("el-button"),H=k("el-focus-trap"),U=k("el-overlay");return c(),b(Re,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[F(C(U,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:i(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[C(H,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:i([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ne(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=z(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(c(),N("div",{key:0,ref:"headerRef",class:i(e.ns.e("header"))},[p("div",{class:i(e.ns.e("title"))},[e.iconComponent&&e.center?(c(),b(d,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:m(()=>[(c(),b(P(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),p("span",null,R(e.title),1)],2),e.showClose?(c(),N("button",{key:0,type:"button",class:i(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=D(z(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[C(d,{class:i(e.ns.e("close"))},{default:m(()=>[C(f)]),_:1},8,["class"])],42,Ge)):T("v-if",!0)],2)):T("v-if",!0),p("div",{id:e.contentId,class:i(e.ns.e("content"))},[p("div",{class:i(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(c(),b(d,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:m(()=>[(c(),b(P(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),e.hasMessage?(c(),N("div",{key:1,class:i(e.ns.e("message"))},[Ae(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(c(),b(P(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(c(),b(P(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[K(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):T("v-if",!0)],2),F(p("div",{class:i(e.ns.e("input"))},[C(v,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:i({invalid:e.validateError}),onKeydown:D(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:i(e.ns.e("errormsg")),style:ne({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[j,e.showInput]])],10,We),p("div",{class:i(e.ns.e("btns"))},[e.showCancelButton?(c(),b(s,{key:0,loading:e.cancelButtonLoading,class:i([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=D(z(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[K(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):T("v-if",!0),F(C(s,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:i([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=D(z(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[K(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[j,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,qe)]),_:3},8,["z-index","overlay-class","mask"]),[[j,e.visible]])]),_:3})}var Ze=Ce(je,[["render",Xe],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const O=new Map,Je=e=>{let n=document.body;return e.appendTo&&(le(e.appendTo)&&(n=document.querySelector(e.appendTo)),te(e.appendTo)&&(n=e.appendTo),te(n)||(n=document.body)),n},Ye=(e,n,t=null)=>{const r=C(Ze,e,oe(e.message)||re(e.message)?{default:oe(e.message)?e.message:()=>e.message}:null);return r.appContext=t,ie(r,n),Je(e).appendChild(n.firstElementChild),r.component},Qe=()=>document.createElement("div"),xe=(e,n)=>{const t=Qe();e.onVanish=()=>{ie(null,t),O.delete(a)},e.onAction=o=>{const d=O.get(a);let f;e.showInput?f={value:a.inputValue,action:o}:f=o,e.callback?e.callback(f,r.proxy):o==="cancel"||o==="close"?e.distinguishCancelAndClose&&o!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(f)};const r=Ye(e,t,n),a=r.proxy;for(const o in e)se(e,o)&&!se(a.$props,o)&&(a[o]=e[o]);return a.visible=!0,a};function S(e,n=null){if(!$e)return Promise.reject();let t;return le(e)||re(e)?e={message:e}:t=e.callback,new Promise((r,a)=>{const o=xe(e,n??S._context);O.set(o,{options:e,callback:t,resolve:r,reject:a})})}const _e=["alert","confirm","prompt"],en={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};_e.forEach(e=>{S[e]=nn(e)});function nn(e){return(n,t,r,a)=>{let o="";return Oe(t)?(r=t,o=""):Ve(t)?o="":o=t,S(Object.assign({title:o,message:n,type:"",...en[e]},r,{boxType:e}),a)}}S.close=()=>{O.forEach((e,n)=>{n.doClose()}),O.clear()};S._context=null;const y=S;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const rn=y;export{rn as E};
