<template>
    <el-link style="margin-left: 20px;" @click="btnLink(i)" href="" v-for="(obj, i ) in information" :type="getRandColor()"
        target="_blank" :key="i" :userido="userid" >
        {{ i }}、{{ obj.MainTitle }}
    </el-link>

    <RooterModelPage :mainTitle="ObjDataapi.MainTitle" :muncObj="ObjDataapi.FuncObj">

    </RooterModelPage>
</template>

<script>
import { defineComponent } from "vue"
import RooterModelPage from "../../components/RooterModelPage.vue";
import { paperAdd, paperDel, paperEdit, paperPage } from "../../http/paper"
import { subjectAdd,subjectDelX,subjectEdit,subjectPage } from "../../http/subject"
import { copyrightAdd,copyrightOne,copyrightEdit,copyrightPage } from "../../http/copyright"
import { patentAdd,patentDel,patentEdit,patentPage } from "../../http/patent"

export default defineComponent({
    data() {
        return {
            userid:1,
            information: [
                { MainTitle: "论文", FuncObj: [paperAdd, paperDel, paperEdit, paperPage] },
                { MainTitle: "著作", FuncObj: [copyrightAdd,copyrightOne,copyrightEdit,copyrightPage] },
                { MainTitle: "专利", FuncObj: [patentAdd,patentDel,patentEdit,patentPage] },
                { MainTitle: "课题", FuncObj: [ subjectAdd,subjectDelX,subjectEdit,subjectPage] }

            ],
            ObjDataapi: { MainTitle: "论文", FuncObj: [paperAdd, paperDel, paperEdit, paperPage] }

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
    }
    ,
    components: {
        RooterModelPage
    }
})
</script>

<style lang="scss" scoped></style>
