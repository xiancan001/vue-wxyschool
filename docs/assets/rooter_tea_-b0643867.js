import{_ as c}from"./RooterModel-70e23d3c.js";import{_ as f,d as h,o as e,c as n,F as r,S as _,b as j,C as O,w as g,e as k,a3 as i}from"./index-ae53bb55.js";import{E as M}from"./el-link-c6d71276.js";import{s as T,a as D,b as A,c as F}from"./school-58c3d948.js";import{a as s,b as l,c as m,d as p}from"./area-2a5b68a1.js";import{d as y,a as C,b as E,c as R}from"./department-19b28161.js";import{t as $,a as L,b as w,c as B}from"./teacher-90a4e93b.js";import"./el-overlay-3b85e2f1.js";import"./el-button-034252dd.js";import"./el-input-7b5180f0.js";import"./el-pagination-0a0b544d.js";import"./el-select-f4ca1eaa.js";import"./el-table-column-95c8a42d.js";import"./validator-72ca27f5.js";import"./el-popover-da40d4ae.js";/* empty css                   */import"./cloneDeep-3d5bcdf8.js";const v=h({data(){return{information:[{MainTitle:"地域",FuncObj:[s,l,m,p]},{MainTitle:"学校",FuncObj:[T,D,A,F]},{MainTitle:"部门",FuncObj:[y,C,E,R]},{MainTitle:"教师",FuncObj:[$,L,w,B]}],ObjDataapi:{MainTitle:"地域",FuncObj:[s,l,m,p]}}},methods:{getRandColor(){let t=["primary","success","warming","danger","info"],o=Math.floor(Math.random()*t.length);return t[o]},btnLink(t){this.ObjDataapi=this.information[t],console.log(t,this.ObjDataapi)}},components:{RooterModel:c}});function I(t,o,N,S,U,V){const d=M,u=c;return e(),n(r,null,[(e(!0),n(r,null,_(t.information,(b,a)=>(e(),O(d,{style:{"margin-left":"20px"},onClick:x=>t.btnLink(a),href:"",type:t.getRandColor(),target:"_blank",key:a},{default:g(()=>[k(i(a)+"、"+i(b.MainTitle),1)]),_:2},1032,["onClick","type"]))),128)),j(u,{mainTitle:t.ObjDataapi.MainTitle,muncObj:t.ObjDataapi.FuncObj},null,8,["mainTitle","muncObj"])],64)}const rt=f(v,[["render",I]]);export{rt as default};