import{M as u}from"./maperstate-41fafbe1.js";import{_ as h,d as A,bD as o,o as r,c as M,C as b,w as B,b as n,I as C}from"./index-0b72622a.js";const R=A({props:{Center:{type:Object,required:!0}},data(){return{hackRest:!0,center:{lat:null,lng:null},zoom:18}},methods:{handler({BMap:e,map:t}){const a=u().getMapXy;this.center=a},syncCenterAndZoom(e){}},watch:{Center:{deep:!0,handler(e,t){this.center=e,this.hackRest=!1,this.$nextTick(()=>{this.center=e,this.hackRest=!0})}}}}),O={class:""};function g(e,t,s,a,y,k){const c=o("bm-scale"),m=o("bm-navigation"),_=o("bm-map-type"),i=o("bm-overview-map"),p=o("bm-geolocation"),d=o("bm-marker"),l=o("baidu-map");return r(),M("div",O,[e.hackRest?(r(),b(l,{key:0,"auto-resize":"true",style:{width:"700px",height:"500px"},center:e.center,zoom:e.zoom,onReady:e.handler,onMoving:e.syncCenterAndZoom,onMoveend:e.syncCenterAndZoom,onZoomend:e.syncCenterAndZoom,"scroll-wheel-zoom":!0,"double-click-zoom":!0},{default:B(()=>[n(c,{anchor:"BMAP_ANCHOR_BOTTOM_LEFT"}),n(m,{anchor:"BMAP_ANCHOR_LEFT_RIGHT",enableGeolocation:!0}),n(_,{"map-types":["BMAP_NORMAL_MAP","BMAP_HYBRID_MAP"],anchor:"BMAP_ANCHOR_TOP_RIGHT"}),n(i,{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",isOpen:!0}),n(p,{showAddressBar:!0,autoLocation:!0}),n(d,{position:e.center,dragging:!0,animation:"BMAP_ANIMATION_BOUNCE"},null,8,["position"])]),_:1},8,["center","zoom","onReady","onMoving","onMoveend","onZoomend"])):C("",!0)])}const N=h(R,[["render",g]]);export{N as _};