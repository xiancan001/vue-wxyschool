import{_ as h}from"./RooterModel-0d23f7d4.js";import{_ as j,d as g,o as i,c as r,a as k,b as s,w as p,F as l,S as O,e as d,C as _,a3 as u}from"./index-1dae9f6e.js";import{E as M}from"./el-link-c44e765e.js";import{p as m,a as c,b,o as f,s as T,l as D,m as B,q as C,d as F,e as $,f as E,r as I,h as L,i as A,j as G,t as R}from"./patent-2cbfbb16.js";import"./el-overlay-0bab04bc.js";import"./el-button-4bf1a566.js";import"./el-input-55c0597a.js";import"./el-pagination-4e61ace7.js";import"./el-select-7cbccf1a.js";import"./el-table-column-6da1545f.js";import"./validator-bce67e05.js";import"./el-popover-d387bae8.js";/* empty css                   */import"./cloneDeep-c5edf04c.js";const U=g({data(){return{userid:1,information:[{MainTitle:"论文",FuncObj:[m,c,b,f]},{MainTitle:"课题",FuncObj:[T,D,B,C]},{MainTitle:"著作",FuncObj:[F,$,E,I]},{MainTitle:"专利",FuncObj:[L,A,G,R]}],ObjDataapi:{MainTitle:"论文",FuncObj:[m,c,b,f]}}},mounted(){this.userid=this.$route.query.userId,console.log("拿到的userid -----===>",this.$route.query.userId)},methods:{btnLinktext(){this.userid==4?this.userid=1:this.userid=4,console.log("------测试！------",this.userid)},getRandColor(){let e=["primary","success","warming","danger","info"],t=Math.floor(Math.random()*e.length);return e[t]},btnLink(e){this.ObjDataapi=this.information[e],console.log(e,this.ObjDataapi)}},components:{RooterModel:h}});function q(e,t,v,w,N,V){const n=M,y=h;return i(),r(l,null,[k("div",null,[s(n,{onClick:t[0]||(t[0]=o=>e.btnLinktext()),type:"primary"},{default:p(()=>[d("测试")]),_:1})]),(i(!0),r(l,null,O(e.information,(o,a)=>(i(),_(n,{style:{"margin-left":"20px"},onClick:S=>e.btnLink(a),href:"",type:e.getRandColor(),target:"_blank",key:a},{default:p(()=>[d(u(a)+"、"+u(o.MainTitle),1)]),_:2},1032,["onClick","type"]))),128)),s(y,{userido:e.userid,mainTitle:e.ObjDataapi.MainTitle,muncObj:e.ObjDataapi.FuncObj},null,8,["userido","mainTitle","muncObj"])],64)}const ie=j(U,[["render",q]]);export{ie as default};