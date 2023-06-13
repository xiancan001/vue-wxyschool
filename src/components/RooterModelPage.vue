<template  >
    <div>

        <div class="tools">
            <h3>{{ MainTitle }}管理</h3>
        </div>

        <!-- 页面数据 -->
        <!-- <div>
            <el-link @click="btnLink()" type="primary">-添加{{ MainTitle }}-</el-link>
            <el-link @click="btnLink()" type="primary">测试</el-link>
        </div> -->

        <div>
            <el-table max-height="600" :data="topics" style="width: 100%;">

                <el-table-column v-for="(,va) in  topic " :prop="va" :label="va" :key="va.id"
                    :formatter="getCategoryNameFormat" />


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

        <el-button icon="Plus" style="width: 100%;background-color: #e3f7d8;" @click="showDialog(true)" />

        <div style="margin-top: 10px;margin-left: 30%;">
            <el-pagination v-model:current-page="resultData.current" v-model:page-size="resultData.size" :small="small"
                :disabled="disabled" :background="background" :page-sizes="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="resultData.total" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>


        <el-dialog v-model="dialogFormVisible" :title="wantAdd ? MainTitle + '添加' : MainTitle + '修改'">
            <el-form ref="dialogFormRef" :model="topic" :rules="rules">


                <el-form-item v-for=" (v, ke, i) in  topic " :label="ke" :prop="ke" :key="i" :label-width="formLabelWidth">
                    <el-input v-model="topic[ke]" autocomplete="off" clearable :key="ke" />
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

    </div>
</template>
  
<script>
import { cloneDeep } from 'lodash-es';
import { defineComponent } from "vue";
// import { topicAdd, topicDelId, topicEdit, topicPage } from "../../http/topic";

export default defineComponent({

    props: {
        mainTitle: {

            type: String,
            // default: "话题",
            required: true
        },
        muncObj: {
            type: Array,
            // default: [topicAdd, topicDelId, topicEdit, topicPage],
            required: true
        }

    },
    data() {
        return {

            MainTitle: this.mainTitle,
            FuncObj: this.muncObj,


            pageSize: [3, 5, 7, 10, 20, 30],

            dat: {},//正在操作的数据对象
            topics: [],   //话题
            resultData: {},
            requestData: {
                "current": 1,
                "size": 7
            },
            topic: {


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
                // "name": [
                //     { required: true, message: '必须填入话题名称!', trigger: 'blur' },
                //     { max: 10, message: '话题名称长度超过限制? 限制10字!', trigger: 'blur' },
                // ],
                // "content": [
                //     { required: true, message: '必须填入话题内容!', trigger: 'blur' },
                // ],
                // "attendType": [
                //     { required: true, message: '必须填入话题参与方式!', trigger: 'blur' },
                // ],

                // "attentionCount": [
                //     { required: true, message: '必须填入话题关注数!', trigger: 'blur' },
                //     // { type: 'number', message: '只能输入数字,请输入正确的数据类型!!!' },
                // ],
                // "readCount": [
                //     { required: true, message: '必须填入话题阅览量!', trigger: 'blur' },
                //     // { type: 'number', message: '只能输入数字,请输入正确的数据类型!!!' },
                // ],
            }
        }
    },
    mounted() {//渲染完毕就开始调用
        //加载数据
        this.getTopicPage();
    },
    methods: {
        //测试
        // btnLink() {
        //     console.log("<---------------->", this.topic);
        //     console.log(this.topics);
        //     console.log();
        // },
        getTopicPage() {
            this.FuncObj[3](this.requestData).then(res => {

                //第一次请求
                if (res.success) {

                    console.log(res);
                    this.topics = res.data.page.records;
                    if (res.data.page) {
                        this.resultData = res.data.page;
                    }
                    this.topic = this.topics[0];

                } else {
                    //获取数据失败就跳到第一页去
                    // this.requestData.
                    console.log("请求失败 ===> ", res);
                    //发起一个一定会成功的请求
                    this.FuncObj[3]({
                        "current": 1,
                        "size": 7
                    }).then(res => {
                        if (res.success) {

                            //页码对不上就发起主界面小数据请求
                            this.resultData = res.data.page;

                            //将请求的相关数据
                            this.topics = res.data.page.records;

                        } else {
                            ElMessage({ message: '该项数据为空 !!!',  type: 'warning' })
                        }
                    })

                }

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
            console.log("保存数据----------------", wantadd);
            this.wantAdd = wantadd;
            this.dat = cloneDeep(dat);

            if (!wantadd) {   //想保存
                this.topic = cloneDeep(dat);
                console.log(dat);
            } else {  // 想添加

                // this.topic.name = "";
                // this.topic.awardName = "";
                // this.topic.content = "";
                // this.topic.categoryId = null;
                // this.topic.attendCount = null;
                // this.topic.readCount = null;
                // this.topic.attentionCount = null;
                // this.topic.attendType = null;
                this.topic = cloneDeep(this.topic)
                this.setObjPropsToNull(this.topic);

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

                    this.getTopicPage(id)
                    if (id % 2 != 0) { //该处应该判断为奇数页面就删除前进一个也买呢
                        // console.log("--删除成功- %2-");
                        this.requestData.current -= 1;
                        this.getTopicPage();
                    }
                    else {
                        // console.log("--删除成功!-else--");
                        this.getTopicPage(this.requestData.current);
                    }
                    ElMessage({ message: '数据删除成功!', type: 'success' });
                } else {
                    ElMessage({
                        message: res.msg + ', 数据删除失败!',
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
                    // console.log('submit!')
                    //添加
                    if (this.wantAdd) {
                        //获取日期
                        // this.topic.createTime = (() => {
                        //     moment.locale("zh-cn");
                        //     return moment().format("YYYY-MM-DDTHH:mm:ss");
                        // })();
                        //
                        this.FuncObj[0](this.topic).then(res => {
                            // topicAdd(this.topic).then(res => {

                            if (res.success) {
                                ElMessage({ message: '数据添加成功!', type: 'success' });
                                //没有多余?
                                this.requestData.current = Math.ceil((this.resultData.total + 1) / this.resultData.size);
                                this.getTopicPage();
                            } else {

                                ElMessage({
                                    message: res.msg + ' 数据添加失败! ',
                                    type: 'warning',
                                })

                            }



                        }).catch(err => {
                            ElMessage.error('添加错误，网络接口出错！')
                        })

                    } else {
                        //编辑 保存
                        this.FuncObj[2](this.topic).then(res => {
                            // topicEdit(this.topic).then(res => {

                            if (res.success) {
                                ElMessage({ message: '数据修改成功! ', type: 'success' });
                                this.getTopicPage();
                            } else {
                                ElMessage({
                                    message: res.msg + ' 数据修改失败!! ',
                                    type: 'warning',
                                })
                            }


                        }).catch(err => {
                            ElMessage.error('修改错误，网络接口出错！')
                        })
                    }
                    this.dialogFormVisible = false;
                } else {
                    // console.log('error submit!', fields)
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
                obj[key] = null;
            });
        },
        //获取随机类型颜射
        getRandColor() {
            let colortypes = ["primary", "success", "warming", "danger", "info"];
            let clo = Math.floor(Math.random() * colortypes.length);
            return colortypes[clo];
        }

    },
    //开启监听
    watch: {
        mainTitle: {
            handler(newV, oldV) {
                this.MainTitle = newV
                console.log("点击了新的选项!!!");
            }
        },
        muncObj: {
            deep: true,
            handler(newV, oldV) {
                this.FuncObj = newV;
                // console.log("----更改数据-----");
                this.getTopicPage();
            }
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               