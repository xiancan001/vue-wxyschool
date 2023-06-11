import{a8 as p,_ as w,d as c,o as E,c as C,a as s,b as l,w as t,F as T,e as u}from"./index-f62cc32f.js";import{E as k}from"./el-overlay-1ec9b8d8.js";import{E as F,a as _,b as y}from"./el-input-12cc074f.js";import{E as v}from"./el-pagination-e63cbe7e.js";import{E as m,a as L,b as U}from"./el-table-column-c3297e3c.js";import"./el-select-90d8ce95.js";import{E as W}from"./el-button-302ba8ae.js";import{c as $}from"./cloneDeep-a88f16a9.js";import"./validator-926dd4ee.js";const z=e=>p.request({url:"/api/admin-group/edit",method:"post",data:e}),B=e=>p.request({url:"/api/admin-group/add",method:"post",data:e}),A=c({data(){return{admingroups:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,admingroup:{createTime:"",id:0,name:"",pid:0,rules:"",status:"",updateTime:""},formLabelWidth:80}},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.admingroup=$(e)},del(e){console.log(e)},toAdd(){this.dialogFormVisible=!0,this.admingroup={createTime:"",id:0,name:"",pid:0,rules:"",status:"",updateTime:""}},save(){const e=this.admingroup;e.id==0?B(e).then(o=>{if(o.success)this.dialogFormVisible=!1,m(o.msg);else return m(o.msg),!1}).catch(o=>{m("网络错误联系管理员")}):z(e).then(o=>{if(o.success)this.dialogFormVisible=!1,m(o.msg);else return m(o.msg),!1}).catch(o=>{m("网络错误联系管理员")})}}}),N={class:"admin-group"},q={class:"admin-tools"},D={class:"dialog-footer"};function I(e,o,M,P,j,G){const r=W,i=U,f=L,g=v,d=F,n=_,b=y,V=k;return E(),C(T,null,[s("div",N,[s("div",q,[l(r,{type:"warning",onClick:e.toAdd},{default:t(()=>[u("添加")]),_:1},8,["onClick"])]),l(f,{data:e.admingroups,style:{width:"100%"}},{default:t(()=>[l(i,{fixed:"",prop:"idn",label:"#"}),l(i,{prop:"id",label:"id"}),l(i,{prop:"name",label:"name"}),l(i,{prop:"pid",label:"pid"}),l(i,{prop:"rules",label:"rules"}),l(i,{prop:"createTime",label:"create_time"}),l(i,{prop:"updateTime",label:"update_time"}),l(i,{fixed:"right",label:"操作",width:"120"},{default:t(a=>[l(r,{link:"",type:"primary",size:"small",onClick:h=>e.toEdit(a.row)},{default:t(()=>[u("更新")]),_:2},1032,["onClick"]),l(r,{link:"",type:"primary",size:"small",onClick:h=>e.del(a.row.id)},{default:t(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(g,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[7]||(o[7]=a=>e.dialogFormVisible=a),title:"管理组编辑"},{footer:t(()=>[s("span",D,[l(r,{onClick:o[6]||(o[6]=a=>e.dialogFormVisible=!1)},{default:t(()=>[u("Cancel")]),_:1}),l(r,{type:"primary",onClick:e.save},{default:t(()=>[u(" 保存 ")]),_:1},8,["onClick"])])]),default:t(()=>[l(b,{model:e.admingroup},{default:t(()=>[l(n,{label:"id","label-width":e.formLabelWidth},{default:t(()=>[l(d,{modelValue:e.admingroup.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.admingroup.id=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"name","label-width":e.formLabelWidth},{default:t(()=>[l(d,{modelValue:e.admingroup.name,"onUpdate:modelValue":o[1]||(o[1]=a=>e.admingroup.name=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"pid","label-width":e.formLabelWidth},{default:t(()=>[l(d,{modelValue:e.admingroup.pid,"onUpdate:modelValue":o[2]||(o[2]=a=>e.admingroup.pid=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"rules","label-width":e.formLabelWidth},{default:t(()=>[l(d,{modelValue:e.admingroup.rules,"onUpdate:modelValue":o[3]||(o[3]=a=>e.admingroup.rules=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"createTime","label-width":e.formLabelWidth},{default:t(()=>[l(d,{modelValue:e.admingroup.createTime,"onUpdate:modelValue":o[4]||(o[4]=a=>e.admingroup.createTime=a),type:"date",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"updateTime","label-width":e.formLabelWidth},{default:t(()=>[l(d,{modelValue:e.admingroup.updateTime,"onUpdate:modelValue":o[5]||(o[5]=a=>e.admingroup.updateTime=a),type:"date",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const Z=w(A,[["render",I]]);export{Z as default};
