import{_ as h}from"./RooterModel-3c102516.js";import{_ as j,d as g,o as i,c as r,a as k,b as s,w as p,F as l,S as O,e as d,C as _,a3 as u}from"./index-6beb3d85.js";import{E as M}from"./el-link-07ac54d0.js";import{p as m,a as c,b,o as f,s as T,l as D,m as B,q as C,d as F,e as $,f as E,r as I,h as L,i as A,j as G,t as R}from"./patent-5f96a61d.js";import"./el-overlay-798aa1cc.js";import"./el-button-255fb666.js";import"./el-input-118885d8.js";import"./el-pagination-a86e46d2.js";import"./el-select-75127696.js";import"./el-table-column-409b1d59.js";import"./validator-e98441a3.js";import"./el-popover-f795615d.js";/* empty css                   */import"./cloneDeep-94d042f3.js";const U=g({data(){return{userid:1,information:[{MainTitle:"论文",FuncObj:[m,c,b,f]},{MainTitle:"课题",FuncObj:[T,D,B,C]},{MainTitle:"著作",FuncObj:[F,$,E,I]},{MainTitle:"专利",FuncObj:[L,A,G,R]}],ObjDataapi:{MainTitle:"论文",FuncObj:[m,c,b,f]}}},mounted(){this.userid=this.$route.query.userId,console.log("拿到的userid -----===>",this.$route.query.userId)},methods:{btnLinktext(){this.userid==4?this.userid=1:this.userid=4,console.log("------测试！------",this.userid)},getRandColor(){let e=["primary","success","warming","danger","info"],t=Math.floor(Math.random()*e.length);return e[t]},btnLink(e){this.ObjDataapi=this.information[e],console.log(e,this.ObjDataapi)}},components:{RooterModel:h}});function q(e,t,v,w,N,V){const n=M,y=h;return i(),r(l,null,[k("div",null,[s(n,{onClick:t[0]||(t[0]=o=>e.btnLinktext()),type:"primary"},{default:p(()=>[d("测试")]),_:1})]),(i(!0),r(l,null,O(e.information,(o,a)=>(i(),_(n,{style:{"margin-left":"20px"},onClick:S=>e.btnLink(a),href:"",type:e.getRandColor(),target:"_blank",key:a},{default:p(()=>[d(u(a)+"、"+u(o.MainTitle),1)]),_:2},1032,["onClick","type"]))),128)),s(y,{userido:e.userid,mainTitle:e.ObjDataapi.MainTitle,muncObj:e.ObjDataapi.FuncObj},null,8,["userido","mainTitle","muncObj"])],64)}const ie=j(U,[["render",q]]);export{ie as default};
