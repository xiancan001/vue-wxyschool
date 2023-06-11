import{a8 as a,_ as b,d as y,o as V,c as I,b as t,w as o,a as f,e as m}from"./index-f62cc32f.js";import{E as r,a as B,b as E}from"./el-table-column-c3297e3c.js";import{E as T}from"./el-overlay-1ec9b8d8.js";import{E as _,a as U,b as k}from"./el-input-12cc074f.js";import{E as q}from"./el-button-302ba8ae.js";/* empty css                   *//* empty css                       */import{E as C}from"./index-3f75df8a.js";import"./validator-926dd4ee.js";const F=e=>a.request({url:"api/interview/add",method:"post",data:e}),W=e=>a.request({url:"api/interview/delete",method:"get",params:e}),D=e=>a.request({url:"api/interview/edit",method:"post",data:e}),$=e=>a.request({url:"api/interview/one",method:"get",params:e}),P=()=>a.request({url:"api/interview/all",method:"get"}),z=e=>a.request({url:"api/interview/getInterviewWithTypeByPage",method:"post",data:e}),N=e=>a.request({url:"api/interview/getInterviewWithTypeByPageAndUser",method:"post",data:e}),A=e=>a.request({url:"api/interview/getInterviewWithTypeNameVOById",method:"get",data:e}),L=e=>a.request({url:"api/interview/getInterviewsPageByUserId",method:"post",data:e}),M=e=>a.request({url:"api/interview/colums",method:"get",data:e}),O=e=>a.request({url:"api/interview/getInterviewByUserId",method:"get",data:e}),p={add:F,remove:W,update:D,select:$,entire:P,getInterviewsPageByUserId:L,getInterviewWithTypeNameVOById:A,getInterviewWithTypeByPageAndUser:N,getInterviewWithTypeByPage:z,colums:M,getInterviewByUserId:O},S=y({data(){return{list:[],interview:{},dialogFormVisible:!1,current:1,size:10,total:0}},mounted(){this.fetchData()},methods:{fetchData(){p.entire().then(e=>{console.log(e),this.list=e.data.interviews})},changeSize(e){this.size=e,this.fetchData(1)},handleDelete(e){const i={id:e};C.confirm("您是否需要删除该面试题吗?","提示",{confirmButtonText:"ok",cancelButtonText:"no",type:"warning"}).then(()=>{p.remove(i).then(w=>{w.success?(r({type:"success",message:"删除成功"}),this.fetchData()):r({type:"error",message:"网络出问题，联系管理员"})})}).catch(()=>{r({type:"warning",message:"取消删除"})})},handleEdit(e){this.dialogFormVisible=!0;const i={id:e};p.select(i).then(w=>{this.interview=w.data.interview})},toAdd(){this.interview={},this.dialogFormVisible=!0},confirm(){this.interview.id==null?p.add(this.interview).then(e=>{e.success?(r({type:"success",message:"添加成功"}),this.fetchData()):r({type:"error",message:"网络出问题，联系管理员"}),this.dialogFormVisible=!1}):(p.update(this.interview).then(e=>{e.success?(r({type:"success",message:"编辑成功"}),this.fetchData()):r({type:"error",message:"网络出问题，联系管理员"})}),this.dialogFormVisible=!1)}}}),j={class:"root"},G={class:"dialog-footer"},H={class:"table"};function J(e,i,w,K,Q,R){const s=q,d=_,u=U,h=k,g=T,n=E,v=B;return V(),I("div",j,[t(s,{type:"success",plain:"",onClick:e.toAdd},{default:o(()=>[m("新增")]),_:1},8,["onClick"]),t(g,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":i[7]||(i[7]=l=>e.dialogFormVisible=l),title:"表单"},{footer:o(()=>[f("span",G,[t(s,{onClick:i[5]||(i[5]=l=>e.dialogFormVisible=!1)},{default:o(()=>[m("取消")]),_:1}),t(s,{type:"primary",onClick:i[6]||(i[6]=l=>e.confirm())},{default:o(()=>[m(" 确定 ")]),_:1})])]),default:o(()=>[t(h,{model:e.interview},{default:o(()=>[t(u,{label:"面试题型","label-width":e.formLabelWidth},{default:o(()=>[t(d,{modelValue:e.interview.interviewType,"onUpdate:modelValue":i[0]||(i[0]=l=>e.interview.interviewType=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"面试题","label-width":e.formLabelWidth},{default:o(()=>[t(d,{modelValue:e.interview.title,"onUpdate:modelValue":i[1]||(i[1]=l=>e.interview.title=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"用户id","label-width":e.formLabelWidth},{default:o(()=>[t(d,{modelValue:e.interview.userinfoId,"onUpdate:modelValue":i[2]||(i[2]=l=>e.interview.userinfoId=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"查看次数","label-width":e.formLabelWidth},{default:o(()=>[t(d,{modelValue:e.interview.view,"onUpdate:modelValue":i[3]||(i[3]=l=>e.interview.view=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"面试题型解析"},{default:o(()=>[t(d,{modelValue:e.interview.analysis,"onUpdate:modelValue":i[4]||(i[4]=l=>e.interview.analysis=l),type:"textarea",rows:5},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),f("div",H,[t(v,{data:e.list,style:{width:"100%"}},{default:o(()=>[t(n,{fixed:"",prop:"id",label:"id",width:"80",align:"center"}),t(n,{prop:"title",label:"面试题",width:"150",align:"center"}),t(n,{prop:"analysis",label:"面试题型解析",width:"700",align:"center"}),t(n,{prop:"interviewType",label:"面试题型",width:"100",align:"center"}),t(n,{prop:"createTime",label:"创建时间",width:"250",align:"center"}),t(n,{prop:"updateTime",label:"更新时间",width:"250",align:"center"}),t(n,{prop:"userinfoId",label:"用户id",width:"100",align:"center"}),t(n,{prop:"view",label:"查看次数",width:"80",align:"center"}),t(n,{fixed:"right",label:"权限",width:"150",align:"center"},{default:o(l=>[t(s,{type:"info",plain:"",size:"small",onClick:c=>e.handleEdit(l.row.id)},{default:o(()=>[m("编辑")]),_:2},1032,["onClick"]),t(s,{type:"danger",plain:"",size:"small",onClick:c=>e.handleDelete(l.row.id)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])}const ae=b(S,[["render",J]]);export{ae as default};
