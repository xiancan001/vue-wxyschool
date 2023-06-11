import{_ as k,d as M,o as n,c as m,a as c,a3 as b,b as a,w as s,F as _,S as T,C as f,e as u}from"./index-f62cc32f.js";import{E as q}from"./el-overlay-1ec9b8d8.js";import{E as L,a as N,b as B}from"./el-input-12cc074f.js";import{E as U}from"./el-pagination-e63cbe7e.js";import{E as p,b as Y,a as I}from"./el-table-column-c3297e3c.js";import"./el-select-90d8ce95.js";import{E as H}from"./el-popover-01084f51.js";import{E as W}from"./el-button-302ba8ae.js";/* empty css                   */import{c as h}from"./cloneDeep-a88f16a9.js";import{E as X}from"./el-link-20858659.js";import{p as C,a as F,b as O,c as E,d as G,e as J,f as K,g as Q,h as Z,i as x,j as ee,k as te,s as oe,l as ae,m as se,n as ie}from"./patent-e1b9f631.js";import"./validator-926dd4ee.js";const le=M({props:{mainTitle:{type:String,required:!0},muncObj:{type:Array,required:!0}},data(){return{MainTitle:this.mainTitle,FuncObj:this.muncObj,pageSize:[3,5,7,10,20,30],dat:{},topics:[],resultData:{},requestData:{current:1,size:7},topic:{},choseRow:{},dialogFormVisible:!1,formLabelWidth:70,dialogVisible:!1,wantAdd:!0,rules:{}}},mounted(){this.getTopicPage()},methods:{getTopicPage(){console.log(this.FuncObj),this.FuncObj[3](this.requestData).then(e=>{console.log(e),this.topics=e.data.page.records,this.resultData=e.data.page,this.topic=this.topics[0]}).catch(e=>{console.log(e)})},handleSizeChange(e){this.requestData.size=e,this.getTopicPage()},handleCurrentChange(e){this.requestData.current=e,this.getTopicPage()},showDialog(e,t){this.wantAdd=e,this.dat=h(t),e?this.setObjPropsToNull(this.topic):(this.topic=h(t),console.log(t)),this.dialogFormVisible=!0},del(e){const t={id:e};this.FuncObj[1](t).then(l=>{l.success?(console.log("--删除成功--"),this.getTopicPage(e),e%2!=0?this.getTopicPage(this.requestData.current-1):(console.log("--删除成功!--"),this.getTopicPage(this.requestData.current)),p({message:"数据删除成功!",type:"success"})):p({message:"删除警告,数据删除失败!",type:"warning"})}).catch(l=>{console.log("访问错误",l),p.error("删除错误，代码可能有错！"+l)})},async save(){await this.$refs.dialogFormRef.validate((e,t)=>{e?(console.log("submit!"),this.wantAdd?(this.topic.createTime=(()=>(moment.locale("zh-cn"),moment().format("YYYY-MM-DDTHH:mm:ss")))(),this.FuncObj[0](this.topic).then(l=>{p({message:"数据添加成功!",type:"success"}),this.requestData.current=Math.ceil((this.resultData.total+1)/this.resultData.size),this.getTopicPage()}).catch(l=>{p.error("添加错误，网络接口出错！")})):this.FuncObj[2](this.topic).then(l=>{p({message:"数据修改成功!",type:"success"}),this.getTopicPage()}).catch(l=>{p.error("修改错误，网络接口出错！")}),this.dialogFormVisible=!1):console.log("error submit!",t)})},resetForm(){console.log(this.$refs.dialogFormRef),this.$refs.dialogFormRef.resetFields(),this.wantAdd?this.topic=h(this.topic):this.topic=h(this.dat)},setObjPropsToNull(e){Object.keys(e).forEach(t=>{e[t]=null})},getRandColor(){let e=["primary","success","warming","danger","info"],t=Math.floor(Math.random()*e.length);return e[t]}},watch:{mainTitle:{handler(e,t){this.MainTitle=e,console.log("<-->")}},muncObj:{deep:!0,handler(e,t){this.FuncObj=e,console.log("----更改数据-----"),this.getTopicPage()}}}}),ne={class:"tools"},re={style:{"margin-top":"10px","margin-left":"30%"}},pe={class:"dialog-footer"};function ue(e,t,l,w,z,V){const g=Y,r=W,y=H,d=I,D=U,$=L,v=N,R=B,A=q;return n(),m("div",null,[c("div",ne,[c("h3",null,b(e.MainTitle)+"管理",1)]),c("div",null,[a(d,{"max-height":"600",data:e.topics,style:{width:"100%"}},{default:s(()=>[(n(!0),m(_,null,T(e.topic,(o,i)=>(n(),f(g,{prop:i,label:i,key:i.id,formatter:e.getCategoryNameFormat},null,8,["prop","label","formatter"]))),128)),a(g,{fixed:"right",label:"功能管理",width:"170"},{default:s(o=>[a(r,{size:"small",onClick:i=>e.showDialog(!1,o.row)},{default:s(()=>[u("编辑")]),_:2},1032,["onClick"]),a(y,{title:"删除将无法恢复！确定删除?",onConfirm:i=>e.del(o.row.id)},{reference:s(()=>[a(r,{size:"small",type:"danger"},{default:s(()=>[u("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),a(r,{icon:"Plus",style:{width:"100%","background-color":"#e3f7d8"},onClick:t[0]||(t[0]=o=>e.showDialog(!0))}),c("div",re,[a(D,{"current-page":e.resultData.current,"onUpdate:currentPage":t[1]||(t[1]=o=>e.resultData.current=o),"page-size":e.resultData.size,"onUpdate:pageSize":t[2]||(t[2]=o=>e.resultData.size=o),small:e.small,disabled:e.disabled,background:e.background,"page-sizes":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.resultData.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","small","disabled","background","page-sizes","total","onSizeChange","onCurrentChange"])]),a(A,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[4]||(t[4]=o=>e.dialogFormVisible=o),title:e.wantAdd?e.MainTitle+"添加":e.MainTitle+"修改"},{footer:s(()=>[c("span",pe,[a(r,{onClick:t[3]||(t[3]=o=>e.resetForm())},{default:s(()=>[u("重置")]),_:1}),a(r,{type:"primary",onClick:e.save},{default:s(()=>[u(" 保存 ")]),_:1},8,["onClick"])])]),default:s(()=>[a(R,{ref:"dialogFormRef",model:e.topic,rules:e.rules},{default:s(()=>[(n(!0),m(_,null,T(e.topic,(o,i,j)=>(n(),f(v,{label:i,prop:i,key:j,"label-width":e.formLabelWidth},{default:s(()=>[u(b(j)+" ",1),(n(),f($,{modelValue:e.topic[i],"onUpdate:modelValue":S=>e.topic[i]=S,autocomplete:"off",clearable:"",key:i},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label","prop","label-width"]))),128))]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}const P=k(le,[["render",ue],["__scopeId","data-v-8b1242fa"]]),de=M({data(){return{userid:1,information:[{MainTitle:"论文",FuncObj:[C,F,O,E]},{MainTitle:"著作",FuncObj:[G,J,K,Q]},{MainTitle:"专利",FuncObj:[Z,x,ee,te]},{MainTitle:"课题",FuncObj:[oe,ae,se,ie]}],ObjDataapi:{MainTitle:"论文",FuncObj:[C,F,O,E]}}},methods:{getRandColor(){let e=["primary","success","warming","danger","info"],t=Math.floor(Math.random()*e.length);return e[t]},btnLink(e){this.ObjDataapi=this.information[e],console.log(e,this.ObjDataapi)}},components:{RooterModelPage:P}});function ce(e,t,l,w,z,V){const g=X,r=P;return n(),m(_,null,[(n(!0),m(_,null,T(e.information,(y,d)=>(n(),f(g,{style:{"margin-left":"20px"},onClick:D=>e.btnLink(d),href:"",type:e.getRandColor(),target:"_blank",key:d,userido:e.userid},{default:s(()=>[u(b(d)+"、"+b(y.MainTitle),1)]),_:2},1032,["onClick","type","userido"]))),128)),a(r,{mainTitle:e.ObjDataapi.MainTitle,muncObj:e.ObjDataapi.FuncObj},null,8,["mainTitle","muncObj"])],64)}const Ee=k(de,[["render",ce]]);export{Ee as default};
