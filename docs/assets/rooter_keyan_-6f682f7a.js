import{_ as w,d as E,o as r,c as m,a as d,a3 as _,b as s,w as i,F as b,S as T,C as f,e as c}from"./index-8bad451a.js";import{E as q}from"./el-overlay-fd40d234.js";import{E as L,a as N,b as B}from"./el-input-c972809f.js";import{E as U}from"./el-pagination-410705ae.js";import{E as n,b as I,a as W}from"./el-table-column-67e74f19.js";import"./el-select-97b94fc3.js";import{E as X}from"./el-popover-aedc9a34.js";import{E as G}from"./el-button-96e83fbf.js";/* empty css                   */import{c as h}from"./cloneDeep-373de097.js";import{E as H}from"./el-link-d74cba77.js";import{p as C,a as D,b as F,c as O,d as J,e as K,f as Q,g as Y,h as Z,i as x,j as ee,k as te,s as oe,l as ae,m as se,n as ie}from"./patent-9e6d8e6d.js";import"./validator-72fb58bf.js";const le=E({props:{mainTitle:{type:String,required:!0},muncObj:{type:Array,required:!0}},data(){return{MainTitle:this.mainTitle,FuncObj:this.muncObj,pageSize:[3,5,7,10,20,30],dat:{},topics:[],resultData:{},requestData:{current:1,size:7},topic:{},choseRow:{},dialogFormVisible:!1,formLabelWidth:70,dialogVisible:!1,wantAdd:!0,rules:{}}},mounted(){this.getTopicPage()},methods:{getTopicPage(){console.log(this.FuncObj),this.FuncObj[3](this.requestData).then(e=>{console.log(e),this.topics=e.data.page.records,this.resultData=e.data.page,this.topic=this.topics[0]}).catch(e=>{console.log(e)})},handleSizeChange(e){this.requestData.size=e,this.getTopicPage()},handleCurrentChange(e){this.requestData.current=e,this.getTopicPage()},showDialog(e,t){this.wantAdd=e,this.dat=h(t),e?this.setObjPropsToNull(this.topic):(this.topic=h(t),console.log(t)),this.dialogFormVisible=!0},del(e){const t={id:e};this.FuncObj[1](t).then(o=>{o.success?(console.log("--删除成功--"),this.getTopicPage(e),e%2!=0?this.getTopicPage(this.requestData.current-1):(console.log("--删除成功!--"),this.getTopicPage(this.requestData.current)),n({message:"数据删除成功!",type:"success"})):n({message:"删除警告,数据删除失败!",type:"warning"})}).catch(o=>{console.log("访问错误",o),n.error("删除错误，代码可能有错！"+o)})},async save(){await this.$refs.dialogFormRef.validate((e,t)=>{e?(console.log("submit!"),this.wantAdd?this.FuncObj[0](this.topic).then(o=>{o.success?(n({message:"数据添加成功!",type:"success"}),this.requestData.current=Math.ceil((this.resultData.total+1)/this.resultData.size),this.getTopicPage()):n({message:"数据添加失败,检测数据规范!!",type:"warning"})}).catch(o=>{n.error("添加错误，网络接口出错！")}):this.FuncObj[2](this.topic).then(o=>{o.success?(n({message:"数据修改成功!",type:"success"}),this.getTopicPage()):n({message:"数据修改失败,检测数据规范!!",type:"warning"})}).catch(o=>{n.error("修改错误，网络接口出错！")}),this.dialogFormVisible=!1):console.log("error submit!",t)})},resetForm(){console.log(this.$refs.dialogFormRef),this.$refs.dialogFormRef.resetFields(),this.wantAdd?this.topic=h(this.topic):this.topic=h(this.dat)},setObjPropsToNull(e){Object.keys(e).forEach(t=>{e[t]=null})},getRandColor(){let e=["primary","success","warming","danger","info"],t=Math.floor(Math.random()*e.length);return e[t]}},watch:{mainTitle:{handler(e,t){this.MainTitle=e,console.log("<-->")}},muncObj:{deep:!0,handler(e,t){this.FuncObj=e,console.log("----更改数据-----"),this.getTopicPage()}}}}),ne={class:"tools"},re={style:{"margin-top":"10px","margin-left":"30%"}},pe={class:"dialog-footer"};function ue(e,t,o,P,M,z){const g=I,p=G,y=X,u=W,j=U,V=L,$=N,v=B,R=q;return r(),m("div",null,[d("div",ne,[d("h3",null,_(e.MainTitle)+"管理",1)]),d("div",null,[s(u,{"max-height":"600",data:e.topics,style:{width:"100%"}},{default:i(()=>[(r(!0),m(b,null,T(e.topic,(a,l)=>(r(),f(g,{prop:l,label:l,key:l.id,formatter:e.getCategoryNameFormat},null,8,["prop","label","formatter"]))),128)),s(g,{fixed:"right",label:"功能管理",width:"170"},{default:i(a=>[s(p,{size:"small",onClick:l=>e.showDialog(!1,a.row)},{default:i(()=>[c("编辑")]),_:2},1032,["onClick"]),s(y,{title:"删除将无法恢复！确定删除?",onConfirm:l=>e.del(a.row.id)},{reference:i(()=>[s(p,{size:"small",type:"danger"},{default:i(()=>[c("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),s(p,{icon:"Plus",style:{width:"100%","background-color":"#e3f7d8"},onClick:t[0]||(t[0]=a=>e.showDialog(!0))}),d("div",re,[s(j,{"current-page":e.resultData.current,"onUpdate:currentPage":t[1]||(t[1]=a=>e.resultData.current=a),"page-size":e.resultData.size,"onUpdate:pageSize":t[2]||(t[2]=a=>e.resultData.size=a),small:e.small,disabled:e.disabled,background:e.background,"page-sizes":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.resultData.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","small","disabled","background","page-sizes","total","onSizeChange","onCurrentChange"])]),s(R,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[4]||(t[4]=a=>e.dialogFormVisible=a),title:e.wantAdd?e.MainTitle+"添加":e.MainTitle+"修改"},{footer:i(()=>[d("span",pe,[s(p,{onClick:t[3]||(t[3]=a=>e.resetForm())},{default:i(()=>[c("重置")]),_:1}),s(p,{type:"primary",onClick:e.save},{default:i(()=>[c(" 保存 ")]),_:1},8,["onClick"])])]),default:i(()=>[s(v,{ref:"dialogFormRef",model:e.topic,rules:e.rules},{default:i(()=>[(r(!0),m(b,null,T(e.topic,(a,l,A)=>(r(),f($,{label:l,prop:l,key:A,"label-width":e.formLabelWidth},{default:i(()=>[(r(),f(V,{modelValue:e.topic[l],"onUpdate:modelValue":S=>e.topic[l]=S,autocomplete:"off",clearable:"",key:l},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label","prop","label-width"]))),128))]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}const k=w(le,[["render",ue],["__scopeId","data-v-b90bc1bd"]]),de=E({data(){return{userid:1,information:[{MainTitle:"论文",FuncObj:[C,D,F,O]},{MainTitle:"著作",FuncObj:[J,K,Q,Y]},{MainTitle:"专利",FuncObj:[Z,x,ee,te]},{MainTitle:"课题",FuncObj:[oe,ae,se,ie]}],ObjDataapi:{MainTitle:"论文",FuncObj:[C,D,F,O]}}},methods:{getRandColor(){let e=["primary","success","warming","danger","info"],t=Math.floor(Math.random()*e.length);return e[t]},btnLink(e){this.ObjDataapi=this.information[e],console.log(e,this.ObjDataapi)}},components:{RooterModelPage:k}});function ce(e,t,o,P,M,z){const g=H,p=k;return r(),m(b,null,[(r(!0),m(b,null,T(e.information,(y,u)=>(r(),f(g,{style:{"margin-left":"20px"},onClick:j=>e.btnLink(u),href:"",type:e.getRandColor(),target:"_blank",key:u,userido:e.userid},{default:i(()=>[c(_(u)+"、"+_(y.MainTitle),1)]),_:2},1032,["onClick","type","userido"]))),128)),s(p,{mainTitle:e.ObjDataapi.MainTitle,muncObj:e.ObjDataapi.FuncObj},null,8,["mainTitle","muncObj"])],64)}const we=w(de,[["render",ce]]);export{we as default};
