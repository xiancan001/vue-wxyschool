<template>
    <el-button text @click="dialogMapVisible = true">
        Click to open the Dialog
    </el-button>


    <!-- <div>sdf</div> -->
    <!-- 百度地图 -->
    <el-dialog v-model="dialogMapVisible" width="40%" center>
        <div>
            <BaiduMapModel />
        </div>
    </el-dialog>
</template>

<script>
import { defineComponent } from "vue"
import BaiduMapModel from "../../components/BaiduMapModel.vue";
export default defineComponent({
    data() {
        return {
            dialogMapVisible: true
        }
    },

    components: {
        BaiduMapModel
    }

})
</script>

<style lang="scss" scoped></style>
