import{a8 as v,_ as w,r as p,B,o as P,c as U,b as e,w as l,e as u,a as $}from"./index-ae53bb55.js";import{E as q}from"./el-overlay-3b85e2f1.js";import{E as F,a as M,b as N}from"./el-input-7b5180f0.js";import{E as c,a as D,b as G}from"./el-table-column-95c8a42d.js";import{E as A}from"./el-button-034252dd.js";import{E as j}from"./index-004f297c.js";import"./validator-72ca27f5.js";const z=n=>v.request({url:"api/rolePermission/all",params:n}),H=n=>v.request({url:"api/rolePermission/add",method:"post",data:n}),J=n=>v.request({url:"api/rolePermission/edit",method:"post",data:n});const K={class:"dialog-footer"},L={__name:"rolePermission",setup(n){const i=p(!1),g=p([]),m=p(!0),s=p({id:"",roleId:"",permissionIds:""});B(()=>{I()});const I=async()=>{const t=await z();if(t.code!==1)return c("数据获取失败");g.value=t.data.rolePermissions,console.log(t),console.log(t.code)},y=()=>{s.value={id:"",roleId:"",permissionIds:""},m.value=!0,i.value=!0},E=async t=>{if(m){const o=await H(t.value);console.log(o)}else{const o=await J(t.value);console.log(o)}},V=t=>{m.value=!1,i.value=!0,s.value={...t},console.log(t)},b=async t=>{j.confirm("是否删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{b({id:val.id}).then(o=>{o.code===1?(c({type:"success",message:"删除成功"}),this.findPage()):c({type:"error",message:"删除失败"})})}).catch(()=>{c({type:"info",message:"取消删除"})})};return(t,o)=>{const d=A,r=G,k=D,f=F,_=M,x=N,C=q;return P(),U("div",null,[e(d,{type:"primary",onClick:y},{default:l(()=>[u("添加用户")]),_:1}),e(k,{data:g.value},{default:l(()=>[e(r,{prop:"id",label:"id",align:"center"}),e(r,{prop:"roleId",label:"roleId",align:"center"}),e(r,{prop:"permissionIds",label:"permissionIds",align:"center"}),e(r,{prop:"createTime",label:"createTime",align:"center"}),e(r,{prop:"updateTime",label:"updateTime",align:"center"}),e(r,{label:"操作"},{default:l(a=>[e(d,{type:"primary",onClick:T=>V(a.row)},{default:l(()=>[u("编辑")]),_:2},1032,["onClick"]),e(d,{type:"danger",onClick:T=>b(a.row.id)},{default:l(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(C,{modelValue:i.value,"onUpdate:modelValue":o[5]||(o[5]=a=>i.value=a),title:m.value?"添加学生信息":"修改学生信息"},{footer:l(()=>[$("span",K,[e(d,{onClick:o[3]||(o[3]=a=>i.value=!1)},{default:l(()=>[u("取消")]),_:1}),e(d,{type:"primary",onClick:o[4]||(o[4]=a=>E("form"))},{default:l(()=>[u(" 确定 ")]),_:1})])]),default:l(()=>[e(x,{model:s.value},{default:l(()=>[e(_,{label:"id",prop:"id"},{default:l(()=>[e(f,{modelValue:s.value.id,"onUpdate:modelValue":o[0]||(o[0]=a=>s.value.id=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(_,{label:"roleId",prop:"roleId"},{default:l(()=>[e(f,{modelValue:s.value.roleId,"onUpdate:modelValue":o[1]||(o[1]=a=>s.value.roleId=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(_,{label:"permissionIds",prop:"permissionIds"},{default:l(()=>[e(f,{modelValue:s.value.permissionIds,"onUpdate:modelValue":o[2]||(o[2]=a=>s.value.permissionIds=a),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}},Z=w(L,[["__scopeId","data-v-af5dbfc6"]]);export{Z as default};