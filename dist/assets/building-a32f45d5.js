import{a8 as m,_,d as w,o as C,c as E,a as p,b as i,w as o,F as k,e as u}from"./index-f62cc32f.js";import{E as F}from"./el-overlay-1ec9b8d8.js";import{E as I,a as y,b as P}from"./el-input-12cc074f.js";import{E as s,a as v,b as $}from"./el-table-column-c3297e3c.js";import{E as z}from"./el-button-302ba8ae.js";import{c as L}from"./cloneDeep-a88f16a9.js";const U=e=>m.request({url:"api/building/page",method:"post",data:e}),W=e=>m.request({url:"api/building/delete",params:e}),q=e=>m.request({url:"api/building/add",method:"post",data:e}),A=e=>m.request({url:"api/building/edit",method:"post",data:e}),B=w({data(){return{buildings:[],building:{colums:[],current:0,size:0},dialogFormVisible:!1,building:{chager:0,id:0,name:"",schoolId:0},formLabelWidth:80}},mounted(){this.getbuildingsPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.building=L(e)},getbuildingsPage(e){U({current:e,size:10}).then(a=>{console.log(a);const b=a.data.page;this.buildings=b.records,this.page=b}).catch(a=>{console.log(a)})},currentchange(e){this.getbuildingsPage(e),this.page.current=e},del(e){console.log(e),W({id:e}).then(a=>{if(a.success)this.getbuildingsPage(this.page.current),this.page.total%this.page.size==1?this.getAdCatesPage(this.page.current-1):this.getAdCatesPage(this.page.current);else return console.log(a.msg),!1}).catch(a=>{})},toAdd(){this.dialogFormVisible=!0,this.building={chager:0,id:0,name:"",schoolId:0}},save(){const e=this.building;e.id==0?q(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getbuildingsPage(this.page.current),s(l.msg);else return s(l.msg),!1}).catch(l=>{s("网络错误联系管理员")}):A(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getbuildingsPage(this.page.current),s(l.msg);else return s(l.msg),!1}).catch(l=>{s("网络错误联系管理员")})}}}),N={class:"buildings"},T={class:"building-tools"},D={class:"dialog-footer"};function S(e,l,a,b,M,j){const n=z,d=$,h=v,r=I,g=y,c=P,f=F;return C(),E(k,null,[p("div",N,[p("div",T,[i(n,{type:"warning",onClick:e.toAdd},{default:o(()=>[u("添加")]),_:1},8,["onClick"])]),i(h,{data:e.buildings,style:{width:"100%"}},{default:o(()=>[i(d,{fixed:"",prop:"id",label:"序号",width:"50"}),i(d,{prop:"chager",label:"楼管"}),i(d,{prop:"id",label:"宿舍楼编号"}),i(d,{prop:"name",label:"宿舍楼名称"}),i(d,{prop:"schoolId",label:"SchoolId"}),i(d,{fixed:"right",label:"操作",width:"120"},{default:o(t=>[i(n,{link:"",type:"primary",size:"small",onClick:V=>e.toEdit(t.row)},{default:o(()=>[u("更新")]),_:2},1032,["onClick"]),i(n,{link:"",type:"primary",size:"small",onClick:V=>e.del(t.row.id)},{default:o(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),i(f,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[5]||(l[5]=t=>e.dialogFormVisible=t),title:"楼栋编辑"},{footer:o(()=>[p("span",D,[i(n,{onClick:l[4]||(l[4]=t=>e.dialogFormVisible=!1)},{default:o(()=>[u("Cancel")]),_:1}),i(n,{type:"primary",onClick:e.save},{default:o(()=>[u("保存")]),_:1},8,["onClick"])])]),default:o(()=>[i(c,{model:e.building},{default:o(()=>[i(g,{label:"SchoolId","label-width":e.formLabelWidth},{default:o(()=>[i(r,{modelValue:e.building.schoolId,"onUpdate:modelValue":l[0]||(l[0]=t=>e.building.schoolId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),i(g,{label:"楼管","label-width":e.formLabelWidth},{default:o(()=>[i(r,{modelValue:e.building.chager,"onUpdate:modelValue":l[1]||(l[1]=t=>e.building.chager=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),i(g,{label:"宿舍楼编号","label-width":e.formLabelWidth},{default:o(()=>[i(r,{modelValue:e.building.id,"onUpdate:modelValue":l[2]||(l[2]=t=>e.building.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),i(g,{label:"宿舍楼名称","label-width":e.formLabelWidth},{default:o(()=>[i(r,{modelValue:e.building.name,"onUpdate:modelValue":l[3]||(l[3]=t=>e.building.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const R=_(B,[["render",S]]);export{R as default};
