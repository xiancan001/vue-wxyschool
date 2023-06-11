<template>
    <el-aside style="width: auto;">
        <el-menu default-active="1" :collapse="isCollapse" router class="el-menu-vertical-demo" @open="handleOpen"
            @close="handleClose">


            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Platform />
                    </el-icon>
                    <span>智慧校园平台</span>
                </template>
                <el-menu-item-group title="管理中心">
                    <el-menu-item index="/admin">首页</el-menu-item>
                    <el-menu-item index="/admin/info">管理员信息</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="安全中心">
                    <el-menu-item index="/admin/changepassword">修改密码</el-menu-item>
                    <el-menu-item index="/admin/logout">安全登出</el-menu-item>
                    <el-menu-item index="/admin/forgetpassword">忘记密码</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <Avatar />
                    </el-icon>
                    <span>教师管理</span>
                </template>
                <el-menu-item-group title="超级权限">
                    <el-menu-item index="/rooter">教师管理版图</el-menu-item>
                    <el-menu-item index="/rooterpage">科研管理版图</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="常规权限">
                    <el-menu-item index="/school">学校查询</el-menu-item>
                    <el-menu-item index="/department">部门管理</el-menu-item>
                    <el-menu-item index="/teacher">教师管理</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>




            <el-menu-item index="4" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>

            <el-menu-item index="5">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>

        </el-menu>
    </el-aside>
</template>

<script>
import { defineComponent } from "vue"
import mitt from "../../utils/mitt";
import { Platform, Document, Menu, Location, Setting, Avatar } from '@element-plus/icons-vue'
export default defineComponent({
    data() {
        return {
            isCollapse: false
        }
    },
    mounted() {

        mitt.on("want_isCollapse", (data) => {
            // console.log("拿到的信息是 "+data);
            this.isCollapse = data;
        })

    },
    methods: {


        handleOpen(key, keyPath) {
            console.log("open", key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log("close", key, keyPath)
        }


    },
    components: {
        Document,
        Menu,
        Location,
        Setting,
    },


});
</script>

<style lang="scss" scoped>
.el-menu {
    height: calc(100vh - 20px) !important;
}
</style>
