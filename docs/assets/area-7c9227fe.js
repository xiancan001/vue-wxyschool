import{_ as c}from"./RooterModel-75938f01.js";import{_ as b,d as h,o as e,c as n,F as r,S as _,b as j,C as O,w as M,e as g,a3 as i}from"./index-d5b0a6e4.js";import{E as k}from"./el-link-f12d8cc0.js";import{s as T,a as A,b as D,c as F}from"./school-2f93df6f.js";import{a as s,b as l,c as m,d as p}from"./area-85e2e98e.js";import{d as y,a as C,b as E,c as R}from"./department-9ab7da4f.js";import{t as $,a as L,b as w,c as B}from"./teacher-239bb5b5.js";import{u as v,a as I,b as N,d as S}from"./userinfo-9945ac9a.js";import"./el-overlay-cf244d20.js";import"./el-button-0aef382d.js";import"./el-input-d6573bb7.js";import"./el-pagination-b41c46ac.js";import"./el-select-8813745e.js";import"./el-table-column-8681785a.js";import"./validator-c74f63d6.js";import"./el-popover-5fd4b6c5.js";/* empty css                   */import"./cloneDeep-62aa146b.js";const U=h({data(){return{information:[{MainTitle:"地域",FuncObj:[s,l,m,p]},{MainTitle:"学校",FuncObj:[T,A,D,F]},{MainTitle:"部门",FuncObj:[y,C,E,R]},{MainTitle:"教师",FuncObj:[$,L,w,B]},{MainTitle:"用户",FuncObj:[v,I,N,S]}],ObjDataapi:{MainTitle:"地域",FuncObj:[s,l,m,p]}}},methods:{getRandColor(){let a=["primary","success","warming","danger","info"],o=Math.floor(Math.random()*a.length);return a[o]},btnLink(a){this.ObjDataapi=this.information[a],console.log(a,this.ObjDataapi)}},components:{RooterModel:c}});function V(a,o,x,q,z,G){const d=k,u=c;return e(),n(r,null,[(e(!0),n(r,null,_(a.information,(f,t)=>(e(),O(d,{style:{"margin-left":"20px"},onClick:H=>a.btnLink(t),href:"",type:a.getRandColor(),target:"_blank",key:t},{default:M(()=>[g(i(t)+"、"+i(f.MainTitle),1)]),_:2},1032,["onClick","type"]))),128)),j(u,{mainTitle:a.ObjDataapi.MainTitle,muncObj:a.ObjDataapi.FuncObj},null,8,["mainTitle","muncObj"])],64)}const pa=b(U,[["render",V]]);export{pa as default};