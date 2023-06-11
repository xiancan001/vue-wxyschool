<template>
    <el-main>
        <el-menu :default-active="0"  class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">

            <el-menu-item index="0">
                <el-icon  :size="60" @click="collapse(icon)">
                    <component :is="icon" />
                </el-icon>
            </el-menu-item>

            <div class="flex-grow" />
            <el-sub-menu index="1">
                <template #title>管理员</template>
                <el-menu-item index="2-1">返回首页</el-menu-item>
                <el-menu-item @click="golayout()" index="2-2">安全退出</el-menu-item>
                <el-menu-item index="2-3">用户信息</el-menu-item>
            </el-sub-menu>
        </el-menu>
        <RouterView :key="key"></RouterView>
    </el-main>
</template>

<script>
import { defineComponent } from "vue"
import mitt from "../../utils/mitt";

export default defineComponent({
    data() {
        return {
            icon:"Expand",
            src: '../../../src/assets/logo.png',
            want_isCollapse:false
        }
    },
    computed: {
        key() {
            return this.$route.path
        },
        
    },
    methods: {
        golayout(){
            console.log("----------目标---------------");
            this.$router.push("/admin/logout")
        },
        handleSelect(key, keyPath) {

            this.want_isCollapse=!this.want_isCollapse;
            // console.log(" want_isCollapse",key, keyPath);

            //发消息过去
            mitt.emit("want_isCollapse",this.want_isCollapse);
           
        },
        collapse(icon){
            console.log("------icon");
            if(icon=='Expand'){
                this.icon="Fold"
                this.isCollapse=true;
            }
            else{
                this.icon=='Expand'
                this.isCollapse=false
            }

        }
    }

});
</script>

<style lang="scss" scoped>
.el-main {
    padding: 0 !important;
}

.flex-grow {
    flex-grow: 1;
}
</style>
