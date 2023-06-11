import { createApp } from 'vue'
import App from './App.vue'//首页面
import router from './router'
import 'element-plus/dist/index.css' //全局样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from './http/axios'
import pinia from './utils/pinia'
import { TroisJSVuePlugin } from 'troisjs';

import  BaiduMap  from 'vue-baidu-map-3x' //百度地图


const app = createApp(App)

app.use(BaiduMap,{
    ak:'i2gQmQ20cMPrBKHES3KLtSMXan9XMtHh',
    v:'3.0',
})



app.use(pinia) //挂载pinia
//全局注册组件  全局组件
//app.component('MyComponent',MyComponent)
app.use(router) //挂载router
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(TroisJSVuePlugin);




app.mount('#app') //挂在index.html

app.config.globalProperties.$axios = axios
