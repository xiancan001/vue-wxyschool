import { defineStore } from 'pinia'

//负责管理地图相关的信息
export const Maperstate = defineStore('map', {
    state: () => {
        return {
            mapCenterXy:{
                lng: null,
                lat: null,
            },
        }
    },
    getters:{
        getMapXy(){
            return this.mapCenterXy;
        }
    },
    actions:{
        /**
         * 赋值
         * @param {*} token 
         */
        setMapXy(mapCenterXy){
            this.mapCenterXy=mapCenterXy;
        }
    },
    // // persist进行持久化
    // persist:{
    //     enabled:true,
    //     strategies:[
    //         {
    //             key:'userinfo',
    //             storage:localStorage, //会话存储 sessionStorage 本地存储：localStorage
    //             paths: ['token','userinfo']
    //         }
    //     ]
    // }
})