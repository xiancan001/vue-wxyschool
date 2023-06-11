import{bQ as Fl,g as Wl,aZ as Kl,d as ae,q as ie,y as v,o as h,c as $,a as k,V as ee,D as b,E as L,C as P,w as C,b as Z,K as yl,H as N,J as ul,I as B,G as x,W as dl,Y as ge,a1 as kl,au as ze,bw as Pe,br as W,z as K,aA as cl,b0 as De,b1 as pl,ai as Hl,A as z,T as be,U as fl,a3 as X,r as q,B as vl,b5 as Ml,p as ml,aE as Rl,x as Sl,a$ as Nl,ag as te,bR as he,i as jl,k as Ql,bS as sl,bh as Cl,$ as Ol,a6 as $l,af as Gl,ad as Ul,ab as wl,bg as Jl,bB as Yl,bT as Zl,aF as Vl,bU as Xl,bD as Y,bE as xl,F as Ve,S as rl,bl as F,aa as _l,aH as en,P as Tl,b9 as zl}from"./index-6beb3d85.js";import{d as El,t as ln,E as nn}from"./el-input-118885d8.js";import{i as Ll,c as on,C as tn}from"./el-table-column-409b1d59.js";import{u as Pl,c as an,U as _,s as sn,C as Dl}from"./el-button-255fb666.js";import{i as rn}from"./validator-e98441a3.js";const un=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),dn=e=>Fl[e||"default"],cn=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),Bl=Wl({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:Kl,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),pn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},fn=ae({name:"ElTag"}),vn=ae({...fn,props:Bl,emits:pn,setup(e,{emit:l}){const i=e,y=Pl(),c=ie("tag"),d=v(()=>{const{type:r,hit:S,effect:p,closable:g,round:O}=i;return[c.b(),c.is("closable",g),c.m(r),c.m(y.value),c.m(p),c.is("hit",S),c.is("round",O)]}),s=r=>{l("close",r)},m=r=>{l("click",r)};return(r,S)=>r.disableTransitions?(h(),$("span",{key:0,class:b(L(d)),style:x({backgroundColor:r.color}),onClick:m},[k("span",{class:b(L(c).e("content"))},[ee(r.$slots,"default")],2),r.closable?(h(),P(L(ul),{key:0,class:b(L(c).e("close")),onClick:N(s,["stop"])},{default:C(()=>[Z(L(yl))]),_:1},8,["class","onClick"])):B("v-if",!0)],6)):(h(),P(dl,{key:1,name:`${L(c).namespace.value}-zoom-in-center`,appear:""},{default:C(()=>[k("span",{class:b(L(d)),style:x({backgroundColor:r.color}),onClick:m},[k("span",{class:b(L(c).e("content"))},[ee(r.$slots,"default")],2),r.closable?(h(),P(L(ul),{key:0,class:b(L(c).e("close")),onClick:N(s,["stop"])},{default:C(()=>[Z(L(yl))]),_:1},8,["class","onClick"])):B("v-if",!0)],6)]),_:3},8,["name"]))}});var mn=ge(vn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const hn=kl(mn),Al=Symbol("ElSelectGroup"),Be=Symbol("ElSelect");function bn(e,l){const i=ze(Be),y=ze(Al,{disabled:!1}),c=v(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),d=v(()=>i.props.multiple?g(i.props.modelValue,e.value):O(e.value,i.props.modelValue)),s=v(()=>{if(i.props.multiple){const t=i.props.modelValue||[];return!d.value&&t.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),m=v(()=>e.label||(c.value?"":e.value)),r=v(()=>e.value||e.label||""),S=v(()=>e.disabled||l.groupDisabled||s.value),p=cl(),g=(t=[],f)=>{if(c.value){const w=i.props.valueKey;return t&&t.some(H=>Pe(W(H,w))===W(f,w))}else return t&&t.includes(f)},O=(t,f)=>{if(c.value){const{valueKey:w}=i.props;return W(t,w)===W(f,w)}else return t===f},E=()=>{!e.disabled&&!y.disabled&&(i.hoverIndex=i.optionsArray.indexOf(p.proxy))};K(()=>m.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),K(()=>e.value,(t,f)=>{const{remote:w,valueKey:H}=i.props;if(Object.is(t,f)||(i.onOptionDestroy(f,p.proxy),i.onOptionCreate(p.proxy)),!e.created&&!w){if(H&&typeof t=="object"&&typeof f=="object"&&t[H]===f[H])return;i.setSelected()}}),K(()=>y.disabled,()=>{l.groupDisabled=y.disabled},{immediate:!0});const{queryChange:V}=Pe(i);return K(V,t=>{const{query:f}=L(t),w=new RegExp(un(f),"i");l.visible=w.test(m.value)||e.created,l.visible||i.filteredOptionsCount--},{immediate:!0}),{select:i,currentLabel:m,currentValue:r,itemSelected:d,isDisabled:S,hoverItem:E}}const gn=ae({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),i=De({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:y,itemSelected:c,isDisabled:d,select:s,hoverItem:m}=bn(e,i),{visible:r,hover:S}=pl(i),p=cl().proxy;s.onOptionCreate(p),Hl(()=>{const O=p.value,{selected:E}=s,t=(s.props.multiple?E:[E]).some(f=>f.value===p.value);z(()=>{s.cachedOptions.get(O)===p&&!t&&s.cachedOptions.delete(O)}),s.onOptionDestroy(O,p)});function g(){e.disabled!==!0&&i.groupDisabled!==!0&&s.handleOptionSelect(p,!0)}return{ns:l,currentLabel:y,itemSelected:c,isDisabled:d,select:s,hoverItem:m,visible:r,hover:S,selectOptionClick:g,states:i}}});function yn(e,l,i,y,c,d){return be((h(),$("li",{class:b([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=N((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[ee(e.$slots,"default",{},()=>[k("span",null,X(e.currentLabel),1)])],34)),[[fl,e.visible]])}var hl=ge(gn,[["render",yn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Sn=ae({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ze(Be),l=ie("select"),i=v(()=>e.props.popperClass),y=v(()=>e.props.multiple),c=v(()=>e.props.fitInputWidth),d=q("");function s(){var m;d.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return vl(()=>{s(),Ml(e.selectWrapper,s)}),{ns:l,minWidth:d,popperClass:i,isMultiple:y,isFitInputWidth:c}}});function Cn(e,l,i,y,c,d){return h(),$("div",{class:b([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:x({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ee(e.$slots,"default")],6)}var On=ge(Sn,[["render",Cn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function wn(e){const{t:l}=ml();return De({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const Tn=(e,l,i)=>{const{t:y}=ml(),c=ie("select");Rl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},v(()=>e.suffixTransition===!1));const d=q(null),s=q(null),m=q(null),r=q(null),S=q(null),p=q(null),g=q(null),O=q(-1),E=Sl({query:""}),V=Sl(""),t=q([]);let f=0;const{form:w,formItem:H}=an(),ye=v(()=>!e.filterable||e.multiple||!l.visible),G=v(()=>e.disabled||(w==null?void 0:w.disabled)),Ae=v(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!G.value&&l.inputHovering&&n}),Se=v(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),qe=v(()=>c.is("reverse",Se.value&&l.visible&&e.suffixTransition)),Ce=v(()=>e.remote?300:0),de=v(()=>e.loading?e.loadingText||y("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||y("el.select.noMatch"):l.options.size===0?e.noDataText||y("el.select.noData"):null),M=v(()=>{const n=Array.from(l.options.values()),o=[];return t.value.forEach(a=>{const u=n.findIndex(T=>T.currentLabel===a);u>-1&&o.push(n[u])}),o.length?o:n}),Fe=v(()=>Array.from(l.cachedOptions.values())),We=v(()=>{const n=M.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),le=Pl(),Ke=v(()=>["small"].includes(le.value)?"small":"default"),He=v({get(){return l.visible&&de.value!==!1},set(n){l.visible=n}});K([()=>G.value,()=>le.value,()=>w==null?void 0:w.size],()=>{z(()=>{R()})}),K(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),K(()=>e.modelValue,(n,o)=>{e.multiple&&(R(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",U(l.query))),ce(),e.filterable&&!e.multiple&&(l.inputLength=20),!Ll(n,o)&&e.validateEvent&&(H==null||H.validate("change").catch(a=>Nl()))},{flush:"post",deep:!0}),K(()=>l.visible,n=>{var o,a,u,T,I;n?((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(T=(u=m.value)==null?void 0:u.focus)==null||T.call(u),e.multiple?(I=s.value)==null||I.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),U(l.query),!e.multiple&&!e.remote&&(E.value.query="",he(E),he(V)))):(e.filterable&&(te(e.filterMethod)&&e.filterMethod(""),te(e.remoteMethod)&&e.remoteMethod("")),s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Re(),z(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),K(()=>l.options.entries(),()=>{var n,o,a;if(!jl)return;(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R();const u=((a=p.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(u).includes(document.activeElement)||ce(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&we()},{flush:"post"}),K(()=>l.hoverIndex,n=>{Ql(n)&&n>-1?O.value=M.value[n]||{}:O.value={},M.value.forEach(o=>{o.hover=O.value===o})});const R=()=>{z(()=>{var n,o;if(!d.value)return;const a=d.value.$el.querySelector("input");f=f||(a.clientHeight>0?a.clientHeight+2:0);const u=S.value,T=dn(le.value||(w==null?void 0:w.size)),I=le.value||T===f||f<=0?T:f;!(a.offsetParent===null)&&(a.style.height=`${(l.selected.length===0?I:Math.max(u?u.clientHeight+(u.clientHeight>I?6:0):0,I))-2}px`),l.tagInMultiLine=Number.parseFloat(a.style.height)>=I,l.visible&&de.value!==!1&&((o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n))})},U=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(te(e.filterMethod)||te(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,z(()=>{var o,a;l.visible&&((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&z(()=>{const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Oe(),R()}),e.remote&&te(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):te(e.filterMethod)?(e.filterMethod(n),he(V)):(l.filteredOptionsCount=l.optionsCount,E.value.query=n,he(E),he(V)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await z(),we())}},Oe=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},we=()=>{const n=M.value.filter(u=>u.visible&&!u.disabled&&!u.states.groupDisabled),o=n.find(u=>u.created),a=n[0];l.hoverIndex=Le(M.value,o||a)},ce=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=Te(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(Te(a))}),l.selected=o,z(()=>{R()})},Te=n=>{let o;const a=sl(n).toLowerCase()==="object",u=sl(n).toLowerCase()==="null",T=sl(n).toLowerCase()==="undefined";for(let Q=l.cachedOptions.size-1;Q>=0;Q--){const A=Fe.value[Q];if(a?W(A.value,e.valueKey)===W(n,e.valueKey):A.value===n){o={value:n,currentLabel:A.currentLabel,isDisabled:A.isDisabled};break}}if(o)return o;const I=a?n.label:!u&&!T?n:"",j={value:n,currentLabel:I};return e.multiple&&(j.hitState=!1),j},Re=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>M.value.findIndex(a=>W(a,n)===W(o,n)))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex(o=>ue(o)===ue(l.selected))},300)},Ne=()=>{var n,o;je(),(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R()},je=()=>{var n;l.inputWidth=(n=d.value)==null?void 0:n.$el.offsetWidth},Qe=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,U(l.query))},Ge=El(()=>{Qe()},Ce.value),Ue=El(n=>{U(n.target.value)},Ce.value),ne=n=>{Ll(e.modelValue,n)||i.emit(Dl,n)},se=n=>{if(n.code!==Ol.delete){if(n.target.value.length<=0&&!ve()){const o=e.modelValue.slice();o.pop(),i.emit(_,o),ne(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},Je=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!G.value){const u=e.modelValue.slice();u.splice(a,1),i.emit(_,u),ne(u),i.emit("remove-tag",o.value)}n.stopPropagation()},Ee=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!$l(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(_,o),ne(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},pe=(n,o)=>{var a;if(e.multiple){const u=(e.modelValue||[]).slice(),T=Le(u,n.value);T>-1?u.splice(T,1):(e.multipleLimit<=0||u.length<e.multipleLimit)&&u.push(n.value),i.emit(_,u),ne(u),n.created&&(l.query="",U(""),l.inputLength=20),e.filterable&&((a=s.value)==null||a.focus())}else i.emit(_,n.value),ne(n.value),l.visible=!1;l.isSilentBlur=o,fe(),!l.visible&&z(()=>{re(n)})},Le=(n=[],o)=>{if(!Cl(o))return n.indexOf(o);const a=e.valueKey;let u=-1;return n.some((T,I)=>Pe(W(T,a))===W(o,a)?(u=I,!0):!1),u},fe=()=>{l.softFocus=!0;const n=s.value||d.value;n&&(n==null||n.focus())},re=n=>{var o,a,u,T,I;const j=Array.isArray(n)?n[0]:n;let Q=null;if(j!=null&&j.value){const A=M.value.filter(al=>al.value===j.value);A.length>0&&(Q=A[0].$el)}if(r.value&&Q){const A=(T=(u=(a=(o=r.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:u.querySelector)==null?void 0:T.call(u,`.${c.be("dropdown","wrap")}`);A&&sn(A,Q)}(I=g.value)==null||I.handleScroll()},Ye=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Ze=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Xe=n=>{n.code!==Ol.backspace&&ve(!1),l.inputLength=s.value.value.length*15+20,R()},ve=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},xe=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,z(()=>U(o));else{const a=o[o.length-1]||"";l.isOnComposition=!ln(a)}},_e=()=>{z(()=>re(l.selected))},el=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},J=()=>{var n,o,a;l.visible=!1,(n=d.value)==null||n.blur(),(a=(o=m.value)==null?void 0:o.blur)==null||a.call(o)},Ie=n=>{z(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},ll=n=>{Ee(n)},ke=()=>{l.visible=!1},nl=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Me=n=>{var o;n&&!l.mouseEnter||G.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!r.value||!r.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=s.value||d.value)==null||o.focus()))},ol=()=>{l.visible?M.value[l.hoverIndex]&&pe(M.value[l.hoverIndex],void 0):Me()},ue=n=>Cl(n.value)?W(n.value,e.valueKey):n.value,tl=v(()=>M.value.filter(n=>n.visible).every(n=>n.disabled)),il=v(()=>l.selected.slice(0,e.maxCollapseTags)),me=v(()=>l.selected.slice(e.maxCollapseTags)),$e=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!tl.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=M.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&$e(n),z(()=>re(O.value))}};return{optionList:t,optionsArray:M,selectSize:le,handleResize:Ne,debouncedOnInputChange:Ge,debouncedQueryChange:Ue,deletePrevTag:se,deleteTag:Je,deleteSelected:Ee,handleOptionSelect:pe,scrollToOption:re,readonly:ye,resetInputHeight:R,showClose:Ae,iconComponent:Se,iconReverse:qe,showNewOption:We,collapseTagSize:Ke,setSelected:ce,managePlaceholder:Oe,selectDisabled:G,emptyText:de,toggleLastOptionHitState:ve,resetInputState:Xe,handleComposition:xe,onOptionCreate:Ye,onOptionDestroy:Ze,handleMenuEnter:_e,handleFocus:el,blur:J,handleBlur:Ie,handleClearClick:ll,handleClose:ke,handleKeydownEscape:nl,toggleMenu:Me,selectOption:ol,getValueKey:ue,navigateOptions:$e,dropMenuVisible:He,queryChange:E,groupQueryChange:V,showTagList:il,collapseTagList:me,reference:d,input:s,iOSInput:m,tooltipRef:r,tags:S,selectWrapper:p,scrollbar:g,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}};var En=ae({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:i}){let y=[];function c(d,s){if(d.length!==s.length)return!1;for(const[m]of d.entries())if(d[m]!=s[m])return!1;return!0}return()=>{var d,s;const m=(d=l.default)==null?void 0:d.call(l),r=[];function S(p){Array.isArray(p)&&p.forEach(g=>{var O,E,V,t;const f=(O=(g==null?void 0:g.type)||{})==null?void 0:O.name;f==="ElOptionGroup"?S(!$l(g.children)&&!Array.isArray(g.children)&&te((E=g.children)==null?void 0:E.default)?(V=g.children)==null?void 0:V.default():g.children):f==="ElOption"?r.push((t=g.props)==null?void 0:t.label):Array.isArray(g.children)&&S(g.children)})}return m.length&&S((s=m[0])==null?void 0:s.children),c(r,y)||(y=r,i("update-options",r)),m}}});const Il="ElSelect",Ln=ae({name:Il,componentName:Il,components:{ElInput:nn,ElSelectMenu:On,ElOption:hl,ElOptions:En,ElTag:hn,ElScrollbar:on,ElTooltip:Gl,ElIcon:ul},directives:{ClickOutside:tn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:rn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:Ul.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:wl,default:Jl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:wl,default:Yl},tagType:{...Bl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Zl,default:"bottom-start"}},emits:[_,Dl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=ie("select"),y=ie("input"),{t:c}=ml(),d=wn(e),{optionList:s,optionsArray:m,selectSize:r,readonly:S,handleResize:p,collapseTagSize:g,debouncedOnInputChange:O,debouncedQueryChange:E,deletePrevTag:V,deleteTag:t,deleteSelected:f,handleOptionSelect:w,scrollToOption:H,setSelected:ye,resetInputHeight:G,managePlaceholder:Ae,showClose:Se,selectDisabled:qe,iconComponent:Ce,iconReverse:de,showNewOption:M,emptyText:Fe,toggleLastOptionHitState:We,resetInputState:le,handleComposition:Ke,onOptionCreate:He,onOptionDestroy:R,handleMenuEnter:U,handleFocus:Oe,blur:we,handleBlur:ce,handleClearClick:Te,handleClose:Re,handleKeydownEscape:Ne,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:Ue,dropMenuVisible:ne,reference:se,input:Je,iOSInput:Ee,tooltipRef:pe,tags:Le,selectWrapper:fe,scrollbar:re,queryChange:Ye,groupQueryChange:Ze,handleMouseEnter:Xe,handleMouseLeave:ve,showTagList:xe,collapseTagList:_e}=Tn(e,d,l),{focus:el}=cn(se),{inputWidth:J,selected:Ie,inputLength:ll,filteredOptionsCount:ke,visible:nl,softFocus:Me,selectedLabel:ol,hoverIndex:ue,query:tl,inputHovering:il,currentPlaceholder:me,menuVisibleOnFocus:$e,isOnComposition:bl,isSilentBlur:gl,options:n,cachedOptions:o,optionsCount:a,prefixWidth:u,tagInMultiLine:T}=pl(d),I=v(()=>{const D=[i.b()],oe=L(r);return oe&&D.push(i.m(oe)),e.disabled&&D.push(i.m("disabled")),D}),j=v(()=>({maxWidth:`${L(J)-32}px`,width:"100%"})),Q=v(()=>({maxWidth:`${L(J)>123?L(J)-123:L(J)-75}px`}));Vl(Be,De({props:e,options:n,optionsArray:m,cachedOptions:o,optionsCount:a,filteredOptionsCount:ke,hoverIndex:ue,handleOptionSelect:w,onOptionCreate:He,onOptionDestroy:R,selectWrapper:fe,selected:Ie,setSelected:ye,queryChange:Ye,groupQueryChange:Ze})),vl(()=>{d.cachedPlaceHolder=me.value=e.placeholder||(()=>c("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(me.value=""),Ml(fe,p),e.remote&&e.multiple&&G(),z(()=>{const D=se.value&&se.value.$el;if(D&&(J.value=D.getBoundingClientRect().width,l.slots.prefix)){const oe=D.querySelector(`.${y.e("prefix")}`);u.value=Math.max(oe.getBoundingClientRect().width+5,30)}}),ye()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(_,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(_,"");const A=v(()=>{var D,oe;return(oe=(D=pe.value)==null?void 0:D.popperRef)==null?void 0:oe.contentRef});return{isIOS:Xl,onOptionsRendered:D=>{s.value=D},tagInMultiLine:T,prefixWidth:u,selectSize:r,readonly:S,handleResize:p,collapseTagSize:g,debouncedOnInputChange:O,debouncedQueryChange:E,deletePrevTag:V,deleteTag:t,deleteSelected:f,handleOptionSelect:w,scrollToOption:H,inputWidth:J,selected:Ie,inputLength:ll,filteredOptionsCount:ke,visible:nl,softFocus:Me,selectedLabel:ol,hoverIndex:ue,query:tl,inputHovering:il,currentPlaceholder:me,menuVisibleOnFocus:$e,isOnComposition:bl,isSilentBlur:gl,options:n,resetInputHeight:G,managePlaceholder:Ae,showClose:Se,selectDisabled:qe,iconComponent:Ce,iconReverse:de,showNewOption:M,emptyText:Fe,toggleLastOptionHitState:We,resetInputState:le,handleComposition:Ke,handleMenuEnter:U,handleFocus:Oe,blur:we,handleBlur:ce,handleClearClick:Te,handleClose:Re,handleKeydownEscape:Ne,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:Ue,dropMenuVisible:ne,focus:el,reference:se,input:Je,iOSInput:Ee,tooltipRef:pe,popperPaneRef:A,tags:Le,selectWrapper:fe,scrollbar:re,wrapperKls:I,selectTagsStyle:j,nsSelect:i,tagTextStyle:Q,handleMouseEnter:Xe,handleMouseLeave:ve,showTagList:xe,collapseTagList:_e}}}),In=["disabled","autocomplete"],kn=["disabled"],Mn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function $n(e,l,i,y,c,d){const s=Y("el-tag"),m=Y("el-tooltip"),r=Y("el-icon"),S=Y("el-input"),p=Y("el-option"),g=Y("el-options"),O=Y("el-scrollbar"),E=Y("el-select-menu"),V=xl("click-outside");return be((h(),$("div",{ref:"selectWrapper",class:b(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[22]||(l[22]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[23]||(l[23]=N((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[Z(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:C(()=>[k("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=t=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=t=>e.inputHovering=!1)},[e.multiple?(h(),$("div",{key:0,ref:"tags",class:b([e.nsSelect.e("tags"),e.nsSelect.is("disabled",e.selectDisabled)]),style:x(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(h(),P(dl,{key:0,onAfterLeave:e.resetInputHeight},{default:C(()=>[k("span",{class:b([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(h(!0),$(Ve,null,rl(e.showTagList,t=>(h(),P(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text")),style:x(e.tagTextStyle)},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(h(),P(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:C(()=>[e.collapseTagsTooltip?(h(),P(m,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text"))},"+ "+X(e.selected.length-e.maxCollapseTags),3)]),content:C(()=>[k("div",{class:b(e.nsSelect.e("collapse-tags"))},[(h(!0),$(Ve,null,rl(e.collapseTagList,t=>(h(),$("div",{key:e.getValueKey(t),class:b(e.nsSelect.e("collapse-tag"))},[Z(s,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:f=>e.deleteTag(f,t)},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(h(),$("span",{key:1,class:b(e.nsSelect.e("tags-text"))},"+ "+X(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):B("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):B("v-if",!0),e.collapseTags?B("v-if",!0):(h(),P(dl,{key:1,onAfterLeave:e.resetInputHeight},{default:C(()=>[k("span",{class:b([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(h(!0),$(Ve,null,rl(e.selected,t=>(h(),P(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),e.filterable?be((h(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:b([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.is("disabled",e.selectDisabled)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:x({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=F(N(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=F(N(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=F((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=F(N((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=F((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=F(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,In)),[[_l,e.query]]):B("v-if",!0)],6)):B("v-if",!0),B(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(h(),$("input",{key:1,ref:"iOSInput",class:b([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,kn)):B("v-if",!0),Z(S,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:b([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=F(N(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[17]||(l[17]=F(N(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),F(N(e.selectOption,["stop","prevent"]),["enter"]),F(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=F(t=>e.visible=!1,["tab"]))]},en({suffix:C(()=>[e.iconComponent&&!e.showClose?(h(),P(r,{key:0,class:b([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:C(()=>[(h(),P(Tl(e.iconComponent)))]),_:1},8,["class"])):B("v-if",!0),e.showClose&&e.clearIcon?(h(),P(r,{key:1,class:b([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:C(()=>[(h(),P(Tl(e.clearIcon)))]),_:1},8,["class","onClick"])):B("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:C(()=>[k("div",Mn,[ee(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:C(()=>[Z(E,null,{default:C(()=>[be(Z(O,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:b([e.nsSelect.is("empty",!e.allowCreate&&!!e.query&&e.filteredOptionsCount===0)])},{default:C(()=>[e.showNewOption?(h(),P(p,{key:0,value:e.query,created:!0},null,8,["value"])):B("v-if",!0),Z(g,{onUpdateOptions:e.onOptionsRendered},{default:C(()=>[ee(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["wrap-class","view-class","class"]),[[fl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(h(),$(Ve,{key:0},[e.$slots.empty?ee(e.$slots,"empty",{key:0}):(h(),$("p",{key:1,class:b(e.nsSelect.be("dropdown","empty"))},X(e.emptyText),3))],64)):B("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[V,e.handleClose,e.popperPaneRef]])}var Vn=ge(Ln,[["render",$n],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const zn=ae({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),i=q(!0),y=cl(),c=q([]);Vl(Al,De({...pl(e)}));const d=ze(Be);vl(()=>{c.value=s(y.subTree)});const s=r=>{const S=[];return Array.isArray(r.children)&&r.children.forEach(p=>{var g;p.type&&p.type.name==="ElOption"&&p.component&&p.component.proxy?S.push(p.component.proxy):(g=p.children)!=null&&g.length&&S.push(...s(p))}),S},{groupQueryChange:m}=Pe(d);return K(m,()=>{i.value=c.value.some(r=>r.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function Pn(e,l,i,y,c,d){return be((h(),$("ul",{class:b(e.ns.be("group","wrap"))},[k("li",{class:b(e.ns.be("group","title"))},X(e.label),3),k("li",null,[k("ul",{class:b(e.ns.b("group"))},[ee(e.$slots,"default")],2)])],2)),[[fl,e.visible]])}var ql=ge(zn,[["render",Pn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Wn=kl(Vn,{Option:hl,OptionGroup:ql}),Kn=zl(hl);zl(ql);export{Kn as E,Wn as a};
