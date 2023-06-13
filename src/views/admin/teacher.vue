<!-- 声明的超级用户 使用信息模型 -->
<template  >
    <div>
        <div class="tools">
            <p>{{ MainTitle }}管理</p>
        </div>

        <!-- <div>
            <el-link @click="btnLink()" type="primary">-添加话题-</el-link>
            <el-link @click="btnLink()" type="primary">测试</el-link>
        </div> -->

        <!-- 数据界面 -->
        <div>
            <el-table max-height="600" :data="topics" style="width: 100%;">

                <el-table-column v-for="(,va) in  topic " :prop="va" :label="va" :key="va.id"
                    :formatter="getCategoryNameFormat" />

                <el-table-column label="科研">
                    <template #default="scope">
                        <el-button size="small" @click="goToKeyan(scope)">成果</el-button>
                    </template>
                </el-table-column>


                <el-table-column fixed="right" label="功能管理" width="170">
                    <template #default="scope">
                        <el-button size="small" @click="showDialog(false, scope.row)">编辑</el-button>

                        <el-popconfirm title="删除将无法恢复！确定删除?" @confirm="del(scope.row.id)">
                            <template #reference>
                                <el-button size="small" type="danger">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>

            </el-table>
        </div>

        <!-- 添加按钮 -->
        <el-button icon="Plus" style="width: 100%;background-color: #e3f7d8;" @click="showDialog(true, dat)" />


        <!--修改弹框 -->
        <el-dialog v-model="dialogFormVisible" :title="wantAdd ? MainTitle + '添加' : MainTitle + '修改'">

            <el-form ref="dialogFormRef" :model="dat" :rules="rules">

                <el-form-item v-for=" (v, ke, i) in  topic " :label="ke" :prop="ke" :key="i" :label-width="formLabelWidth">
                    <el-input v-model="dat[ke]" autocomplete="off" clearable :key="ke" />
                </el-form-item>

            </el-form>


            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="resetForm()">重置</el-button>
                    <el-button type="primary" @click="save">
                        保存
                    </el-button>
                </span>
            </template>



        </el-dialog>


        <!-- 分页 -->
        <div style="margin-top: 10px;margin-left: 30%;">
            <el-pagination v-model:current-page="resultData.current" v-model:page-size="resultData.size" :small="small"
                :disabled="disabled" :background="background" :page-sizes="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="resultData.total" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>



    </div>
</template>

<script>
import { cloneDeep } from 'lodash-es';
import { defineComponent } from "vue";
import { teacherAdd, teacherAll, teacherDel, teacherUpdate, teachersGetPageBySchoolName } from "../../http/teacher";


export default defineComponent({

    data() {
        return {



            dialogMapVisible: false,
            MainTitle: "教师",
            FuncObj: [teacherAdd, teacherDel, teacherUpdate, teacherAll],
            // FuncObj: [teacherAdd, teacherDel, teacherUpdate, teachersGetPageBySchoolName  ],


            pageSize: [3, 5, 7, 10, 20, 30],
            dat: {},//正在操作的数据对象
            topics: [],   //话题
            resultData: {},

            requestData: {
                "current": 1,
                "schoolName": "",
                "size": 7
            },

            topic: {
                // "id": 0,
                "createTime": "",
                "depart": "",
                "id": 0,
                "professional": "",
                "school": "",
                "teacherName": "",
                "teacherNo": "",
                "updateTime": "",
                "userId": 0


                // "updateTime": ""
            },
            choseRow: {},//选中的某一行
            dialogFormVisible: false,//编辑框
            formLabelWidth: 70,
            dialogVisible: false,//确定提示框
            wantAdd: true, //添加 或者 修改的 意图
            rules: {
                // "categoryId": [
                //     { required: true, message: '必须填写话题类别!', trigger: 'blur' },
                //     // { type: 'number', message: '只能输入数字,请输入正确的数据类型!!!', trigger: 'blur' },
                // ],

            }
        }
    },
    mounted() {//渲染完毕就开始调用
        //加载数据
        if (this.$route.query.school) {
            console.log(" teacher 收到 params--->  ", this.$route.query.school);
            this.requestData.schoolName = this.$route.query.school;
            this.FuncObj[3]=teachersGetPageBySchoolName;
        }


        this.getTopicPage();
    },
    methods: {
        // //测试
        // btnLink() {
        //     console.log("<---------------->", this.topic);
        //     console.log(this.topics);
        //     console.log();
        // },

        //打开科研
        goToKeyan(scope) {
            console.log("------------>", scope);
            console.log(scope.row, " ===== ", scope.row.userId);
            this.$router.push({
                name: 'teakeyan', query: {
                    userId: scope.row.userId
                }
            });

        },

        getTopicPage() {
            this.FuncObj[3](this.requestData).then(res => {
                // topicPage(this.requestData).then(res => {
                console.log(Object.values(res.data)[0]);

                if (this.FuncObj[3] == teacherAll) { //可以拿到全部数据的情况
                    this.topics = Object.values(res.data)[0];

                } else {  //分页拿数据的情况
                    this.topics = Object.values(res.data)[0].records;
                    this.resultData = res.data.page;
                }

                console.log("---->", res);

                // this.resultData = res.data;

                // this.topic = cloneDeep(this.topics[0]);//保存了所有属性，实际需要的是部分属性

                // let alshux = cloneDeep(this.topics[0]); //有所有属性
                // console.log(alshux);

                // //拿取部分属性
                // this.getSomeThing(this.topic, alshux);
                // this.setObjPropsToNull(this.topic);


            }).catch(err => {
                console.log(err);
            })
        },

        //改变数据量
        handleSizeChange(val) {
            this.requestData.size = val;
            this.getTopicPage();
        },
        //改变页码
        handleCurrentChange(val) {
            this.requestData.current = val
            this.getTopicPage();
        },
        //显示弹框编辑和添加弹框
        showDialog(wantadd, dat) {
            //保存意图信息
            this.wantAdd = wantadd;
            this.dat = cloneDeep(dat);

            if (!wantadd) {
                // this.topic = cloneDeep(dat);
                //拿取部分属性
                this.setSomeThing(this.topic, this.dat, 2);
                // console.log(dat);
            } else {

                //属性清空
                console.log("-----------------属性清空-------------------");
                // console.log(this.dat);
                this.setObjPropsToNull(this.dat);
                this.dat = {
                    "schoolName": "四川大学",
                    "province": "四川省",
                    "area": "武侯区",
                    "city": "成都市",
                    "address": "民南路三段17号",
                    // "createTime": "",
                    "deleted": 0,
                    "description": "",
                    "enable": 0,
                    "latitude": "104.081969",
                    "longitude": "30.626604",
                }
            }
            //显示页面
            this.dialogFormVisible = true;
        },
        del(id) {

            const params = {
                id: id
            };
            this.FuncObj[1](params).then(res => {
                // topicDelId(params).then(res => {
                if (res.success) {
                    console.log("--删除成功--");
                    this.getTopicPage(id)
                    if (id % 2 != 0) { //该处应该判断为奇数页面就删除前进一个也买呢
                        this.getTopicPage(this.requestData.current - 1);
                    }
                    else {
                        console.log("--删除成功!--");
                        this.getTopicPage(this.requestData.current);
                    }
                    ElMessage({ message: '数据删除成功!', type: 'success' });
                } else {
                    ElMessage({
                        message: '删除警告,数据删除失败!',
                        type: 'warning',
                    })
                }
            }).catch(err => {
                console.log("访问错误", err);
                ElMessage.error('删除错误，代码可能有错！' + err)
            })
        },
        // 添加保存  和  编辑保存
        async save() {
            await this.$refs.dialogFormRef.validate((valid, fields) => {
                if (valid) {
                    console.log('submit!')
                    //添加
                    if (this.wantAdd) {
                        console.log("   -------添加-----   ");


                        this.FuncObj[0](this.dat).then(res => {
                            // topicAdd(this.topic).then(res => {

                            ElMessage({ message: '数据添加成功!', type: 'success' });
                            //没有多余?
                            this.requestData.current = Math.ceil((this.resultData.total + 1) / this.resultData.size);
                            this.getTopicPage();

                        }).catch(err => {
                            ElMessage.error('添加错误，网络接口出错！')
                        })

                    } else {

                        this.setSomeThing(this.topic, this.dat, 1);
                        //编辑 保存
                        this.FuncObj[2](this.dat).then(res => {
                            // topicEdit(this.topic).then(res => {

                            if (res.success) {
                                ElMessage({ message: '数据修改成功!', type: 'success' });

                                this.getTopicPage();

                            } else {
                                ElMessage({ message: '数据修改失败!', type: 'warning' });
                            }

                            console.log(res);


                        }).catch(err => {
                            ElMessage.error('修改错误，网络接口出错！')
                        })
                    }
                    this.dialogFormVisible = false;
                } else {
                    console.log('error submit!', fields)
                }
            })

        },
        // 重置表单
        resetForm() {
            console.log(this.$refs.dialogFormRef);
            this.$refs.dialogFormRef.resetFields();
            if (!this.wantAdd) {
                this.topic = cloneDeep(this.dat);
            } else {
                this.topic = cloneDeep(this.topic);
            }
        },
        //属性制空
        setObjPropsToNull(obj) {
            Object.keys(obj).forEach(key => {
                obj[key] = undefined;
            });
        },
        //让两个对象的部分属性变得一样     index 为0 或者 1 表示以arrayLess或者arrayMore 为准
        setSomeThing(arrayLess, arrayMore, index) {
            Object.keys(arrayLess).forEach((key) => {  //拿取部分属性
                if (index == 0) {  // 以 arrayLess 为准
                    arrayMore[key] = arrayLess[key];
                } else {   //以 arrayMore为准
                    arrayLess[key] = arrayMore[key];
                }

            });
        }
    }


})
</script>

<style lang="scss" scoped>
.el-link {
    margin-right: 8px;
}

.el-link .el-icon--right.el-icon {
    vertical-align: text-bottom;
}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             