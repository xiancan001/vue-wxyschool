import{a8 as p,_ as R,d as E,o as T,c as C,a as f,b as l,w as a,F as y,e as r}from"./index-ae53bb55.js";import{E as U}from"./el-overlay-3b85e2f1.js";import{E as W,a as k,b as D}from"./el-input-7b5180f0.js";import{E as L}from"./el-pagination-0a0b544d.js";import{E as u,a as N,b as z}from"./el-table-column-95c8a42d.js";import"./el-select-f4ca1eaa.js";import{E as $}from"./el-button-034252dd.js";import{c as B}from"./cloneDeep-3d5bcdf8.js";import{E as P}from"./index-004f297c.js";import"./validator-72ca27f5.js";const v=e=>p.request({url:"/api/role/add",method:"POST",data:e}),S=e=>p.request({url:"/api/role/delete",method:"GET",params:e}),q=e=>p.request({url:"/api/role/edit",method:"POST",data:e}),F=e=>p.request({url:"api/role/all",method:"get",data:e}),A=E({data(){return{Roles:[],pageinfo:{currentPage:1,pageSize:5,totalpage:10},Role:{createTime:"",deleted:0,description:"",id:0,roleName:"",status:0,updateTime:""},DialogVisible:!1,EditDialogVisible:!1}},mounted(){this.getdormitorys()},methods:{pageChange(e){this.pageinfo.currentPage=e,this.getdormitorys()},getdormitorys(){let e=this.pageinfo.pageSize*(this.pageinfo.currentPage-1),o=this.pageinfo.currentPage*this.pageinfo.pageSize;F().then(d=>{if(d.success)this.pageinfo.totalpage=d.data.roles.length,this.Roles=d.data.roles.slice(e,o),u(d.msg);else return u(d.msg),!1;console.log(d)}).catch(d=>{console.log(d)})},add(){this.DialogVisible=!0},confirmAdd(){const e=this.Role;v(e).then(o=>{this.getdormitorys()}).catch(o=>{console.log(o)}),this.DialogVisible=!1},edit(e){this.EditDialogVisible=!0,this.Role=B(e)},confirmEdit(){let e=this.Role;console.log(e),q(e).then(o=>{if(o.success)this.EditDialogVisible=!1,this.getdormitorys(),u(o.msg);else return u(o.msg),!1}).catch(o=>{u("网络错误联系管理员")})},del(e){console.log(e);const o={id:e};P.confirm("是否确认删除","Warning",{confirmButtonText:"确认删除",cancelButtonText:"再考虑一下",type:"warning"}).then(()=>{u({type:"success",message:"删除成功"}),S(o).then(d=>{if(d.success)this.getdormitorys();else return console.log(d.msg),!1}).catch(d=>{console.log(d)})}).catch(()=>{u({type:"info",message:"再考虑一下"})})}}}),O={class:"dialog-footer"},I={class:"dialog-footer"};function M(e,o,d,G,j,H){const s=$,m=z,V=N,h=L,i=W,n=k,b=D,g=U;return T(),C(y,null,[f("div",null,[l(s,{type:"primary",round:"",onClick:e.add},{default:a(()=>[r("添加")]),_:1},8,["onClick"]),l(V,{data:e.Roles,style:{width:"100%"}},{default:a(()=>[l(m,{fixed:"",prop:"id",label:"id",width:"150"}),l(m,{prop:"deleted",label:"deleted",width:"120"}),l(m,{prop:"description",label:"description",width:"120"}),l(m,{prop:"createTime",label:"createTime",width:"120"}),l(m,{prop:"roleName",label:"roleName",width:"120"}),l(m,{prop:"status",label:"status",width:"120"}),l(m,{prop:"updateTime",label:"updateTime",width:"120"}),l(m,{fixed:"right",label:"Operations",width:"240"},{default:a(t=>[l(s,{type:"primary",round:"",size:"small",onClick:w=>e.edit(t.row)},{default:a(()=>[r("修改")]),_:2},1032,["onClick"]),l(s,{type:"danger",round:"",size:"small",onClick:w=>e.del(t.row.id)},{default:a(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(h,{layout:"prev, pager, next",total:e.pageinfo.totalpage,"page-size":e.pageinfo.pageSize,onCurrentChange:e.pageChange},null,8,["total","page-size","onCurrentChange"])]),l(g,{modelValue:e.DialogVisible,"onUpdate:modelValue":o[8]||(o[8]=t=>e.DialogVisible=t),title:"添加",width:"50%",center:""},{footer:a(()=>[f("span",O,[l(s,{onClick:o[7]||(o[7]=t=>e.DialogVisible=!1)},{default:a(()=>[r("取消")]),_:1}),l(s,{type:"primary",onClick:e.confirmAdd},{default:a(()=>[r(" 确认 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(b,{model:e.Role},{default:a(()=>[l(n,{label:"id","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.id,"onUpdate:modelValue":o[0]||(o[0]=t=>e.Role.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"deleted","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.deleted,"onUpdate:modelValue":o[1]||(o[1]=t=>e.Role.deleted=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"description","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.description,"onUpdate:modelValue":o[2]||(o[2]=t=>e.Role.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"createTime","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.createTime,"onUpdate:modelValue":o[3]||(o[3]=t=>e.Role.createTime=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"roleName","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.roleName,"onUpdate:modelValue":o[4]||(o[4]=t=>e.Role.roleName=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"status","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.status,"onUpdate:modelValue":o[5]||(o[5]=t=>e.Role.status=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"updateTime","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.updateTime,"onUpdate:modelValue":o[6]||(o[6]=t=>e.Role.updateTime=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(g,{modelValue:e.EditDialogVisible,"onUpdate:modelValue":o[17]||(o[17]=t=>e.EditDialogVisible=t),title:"修改",width:"50%",center:""},{footer:a(()=>[f("span",I,[l(s,{onClick:o[16]||(o[16]=t=>e.EditDialogVisible=!1)},{default:a(()=>[r("Cancel")]),_:1}),l(s,{type:"primary",onClick:e.confirmEdit},{default:a(()=>[r(" Confirm ")]),_:1},8,["onClick"])])]),default:a(()=>[l(b,{model:e.Role},{default:a(()=>[l(n,{label:"id","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.id,"onUpdate:modelValue":o[9]||(o[9]=t=>e.Role.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"deleted","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.deleted,"onUpdate:modelValue":o[10]||(o[10]=t=>e.Role.deleted=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"description","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.description,"onUpdate:modelValue":o[11]||(o[11]=t=>e.Role.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"createTime","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.createTime,"onUpdate:modelValue":o[12]||(o[12]=t=>e.Role.createTime=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"roleName","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.roleName,"onUpdate:modelValue":o[13]||(o[13]=t=>e.Role.roleName=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"status","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.status,"onUpdate:modelValue":o[14]||(o[14]=t=>e.Role.status=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"updateTime","label-width":e.formLabelWidth},{default:a(()=>[l(i,{modelValue:e.Role.updateTime,"onUpdate:modelValue":o[15]||(o[15]=t=>e.Role.updateTime=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const le=R(A,[["render",M]]);export{le as default};