<!-- 该文件由超级管理员调用与维护 -->
<template>
    <!-- <div>
        <el-link @click="btnLink()" type="primary">-添加{{ MainTitle }}-</el-link>
        <el-link @click="btnLink()" type="primary">测试</el-link>
    </div> -->

    <el-link style="margin-left: 20px;" @click="btnLink(i)" href="" v-for="(obj, i ) in information" :type="getRandColor()"
        target="_blank" :key="i">
        {{ i }}、{{ obj.MainTitle }} 
    </el-link>

    <RooterModel :mainTitle="ObjDataapi.MainTitle" :muncObj="ObjDataapi.FuncObj">
    </RooterModel>
</template>
  
<script>
import { defineComponent } from "vue"
import RooterModel from "../../components/RooterModel.vue"
import { schoolAdd, schoolRemove, schoolUpdate, schoolAll } from "../../http/school"
import { areaAll, areaDelId, areaAdd, areaEdit } from "../../http/area";
import { departmentAdd, departmentDelId, departmentEdit, departmentAll, } from "../../http/department";
import { teacherAdd, teacherDel, teacherUpdate, teacherAll } from "../../http/teacher";
import {  userinfoAdd,userinfoDel,userinfoEdit,userinfoAll } from "../../http/userinfo"


export default defineComponent({
    data() {
        return {
            information: [
                { MainTitle: "地域", FuncObj: [areaAdd, areaDelId, areaEdit, areaAll] },
                { MainTitle: "学校", FuncObj: [schoolAdd, schoolRemove, schoolUpdate, schoolAll] },
                { MainTitle: "部门", FuncObj: [departmentAdd, departmentDelId, departmentEdit, departmentAll] },
                { MainTitle: "教师", FuncObj: [teacherAdd, teacherDel, teacherUpdate, teacherAll] },
                { MainTitle: "用户", FuncObj: [userinfoAdd,userinfoDel,userinfoEdit,userinfoAll] }


            ],
            ObjDataapi: { MainTitle: "地域", FuncObj: [areaAdd, areaDelId, areaEdit, areaAll] }

            // MainTitle: "地域",
            // FuncObj: [areaAdd, areaDelId, areaEdit, areaAll],

        }
    },
    methods: {
        //获取随机类型颜射
        getRandColor() {
            let colortypes = ["primary", "success", "warming", "danger", "info"];
            let clo = Math.floor(Math.random() * colortypes.length);
            return colortypes[clo];
        },

        btnLink(i) {
            // console.log(en, i);
            this.ObjDataapi = this.information[i];
            console.log(i, this.ObjDataapi);
        }
    },

    components: {
        RooterModel
    }
})
</script>

<style lang="scss" scoped></style>
  