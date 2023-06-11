import{_ as g,d as F,r as E,m as h,o as k,c as b,a as f,b as o,w as r,u as V,e as c}from"./index-f62cc32f.js";import{b as w,E as v,a as N}from"./el-input-12cc074f.js";import{E as $}from"./el-button-302ba8ae.js";import{E as y}from"./el-image-viewer-73621488.js";import{t as C}from"./index-5a3dd612.js";const U=F({setup(){return{src:E("../../src/assets/logo.png")}},data(){return{n:30,userForm:{password:"12345678",userName:"zhangsana"},rules:{password:[{required:!0,message:"请输入正确的用户密码",trigger:"blur"},{min:8,message:"密码长度不得小于8个字符",trigger:"blur"}]}}},mounted(){},methods:{...h(V,["setToken","fillUserinfo"]),btnLogin(){const e=this,s=e.$refs.ruleFormRef;s&&s.validate(m=>{if(m)C(e.userForm).then(t=>{if(t.success){const l=t.data.userinfo;console.log(e),e.setToken(l.token),e.fillUserinfo(l),e.$router.push("/")}else return!1}).catch(t=>{console.log(t)});else return console.log("error submit!"),!1})},resetForm(){this.$refs.ruleFormRef.resetFields()}}}),B={class:"login"},I={class:"login-form"},L={class:"login-form-logo"};function R(e,s,m,d,t,l){const p=y,u=v,n=N,i=$,_=w;return k(),b("div",B,[f("div",I,[f("div",L,[o(p,{src:e.src,fit:"fill",lazy:!0},null,8,["src"])]),o(_,{ref:"ruleFormRef",model:e.userForm,"status-icon":"",rules:e.rules,class:"login-ruleForm"},{default:r(()=>[o(n,{prop:"userName"},{default:r(()=>[o(u,{modelValue:e.userForm.userName,"onUpdate:modelValue":s[0]||(s[0]=a=>e.userForm.userName=a),autocomplete:"off",placeholder:"请输入你的用户名","suffix-icon":"Message"},null,8,["modelValue"])]),_:1}),o(n,{prop:"password"},{default:r(()=>[o(u,{modelValue:e.userForm.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.userForm.password=a),type:"password",autocomplete:"off",placeholder:"请输入你的用户密码","suffix-icon":"Lock"},null,8,["modelValue"])]),_:1}),o(n,{class:"login-form-btns"},{default:r(()=>[o(i,{type:"primary",onClick:e.btnLogin},{default:r(()=>[c("用户登录")]),_:1},8,["onClick"]),o(i,{onClick:e.resetForm},{default:r(()=>[c("Reset")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])}const S=g(U,[["render",R],["__scopeId","data-v-c409facf"]]);export{S as default};
