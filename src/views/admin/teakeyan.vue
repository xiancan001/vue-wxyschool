<!-- 该文件由超级管理员调用与维护 -->
<template>
    <div>
        <!-- <el-link @click="btnLink()" type="primary">-添加-</el-link> -->
        <el-link @click="btnLinktext()" type="primary">测试</el-link>
    </div>

    <el-link style="margin-left: 20px;" @click="btnLink(i)" href="" v-for="(obj, i ) in information" :type="getRandColor()"
        target="_blank" :key="i">
        {{ i }}、{{ obj.MainTitle }}
    </el-link>

    <RooterModel :userido="userid" :mainTitle="ObjDataapi.MainTitle" :muncObj="ObjDataapi.FuncObj">
    </RooterModel>
</template>
  
<script>
import { defineComponent } from "vue"
import RooterModel from "../../components/RooterModel.vue"
import { paperAdd, paperDel, paperEdit, papersGetByUserId } from "../../http/paper"
import { subjectAdd, subjectDelX, subjectEdit, subjectsGetByUserId } from "../../http/subject"
import { copyrightAdd, copyrightOne, copyrightEdit, copyrightGetByUserId } from "../../http/copyright"

import { patentAdd, patentDel, patentEdit, patentGetByUserId } from "../../http/patent"


export default defineComponent({
    data() {
        return {

            userid:1,
            information: [
                { MainTitle: "论文", FuncObj: [paperAdd, paperDel, paperEdit, papersGetByUserId] },
                { MainTitle: "课题", FuncObj: [subjectAdd, subjectDelX, subjectEdit, subjectsGetByUserId] },
                { MainTitle: "著作", FuncObj: [copyrightAdd, copyrightOne, copyrightEdit, copyrightGetByUserId] },
                { MainTitle: "专利", FuncObj: [patentAdd, patentDel, patentEdit, patentGetByUserId] },

            ],
            ObjDataapi: { MainTitle: "论文", FuncObj: [paperAdd, paperDel, paperEdit, papersGetByUserId] }

            // MainTitle: "地域",
            // FuncObj: [areaAdd, areaDelId, areaEdit, areaAll],

        }
    },
    mounted(){
        // this.userid=this.route.params.userid;
        this.userid=this.$route.query.userId;
        console.log(  "拿到的userid -----===>",this.$route.query.userId);
    },
    methods: {
        //测试
        btnLinktext() {
            if(this.userid==4){
                this.userid=1
            }else{
                this.userid=4
            }
            console.log("------测试！------",this.userid);
            

        },
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
  