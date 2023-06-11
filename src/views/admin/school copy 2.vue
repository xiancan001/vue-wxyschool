<!-- 声明的超级用户 使用信息模型 -->
<template  >
  <div>
      <div class="tools">
          <h3>{{ MainTitle }}管理</h3>
      </div>

      <!-- 页面数据 -->
      <div>
          <el-link @click="btnLink()" type="primary">-添加{{ MainTitle }}-</el-link>
          <el-link @click="btnLink()" type="primary">测试</el-link>
      </div>

      <div>
          <el-table max-height="600" :data="topics" style="width: 100%;">

              <el-table-column v-for="(,va) in  topic " :prop="va" :label="va" :key="va.id"
                  :formatter="getCategoryNameFormat" />


              <!-- <el-table-column prop="categoryId" label="类别" width="80" :formatter="getCategoryNameFormat" />
              <el-table-column prop="id" label="编号" width="80" />
              <el-table-column prop="name" label="名称" width="120" />
              <el-table-column prop="content" label="内容" width="280" />
              <el-table-column prop="awardName" label="奖品" width="180" />
              <el-table-column prop="attendType" label="参与方式" width="180" />
              <el-table-column prop="attentionCount" label="关注数" width="100" />
              <el-table-column prop="readCount" label="阅览量" width="100" /> -->
              <!-- <el-table-column prop="createTime" label="创建时间" width="180" /> -->

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


              <el-form-item v-for=" (v, ke, i) in  topic " :label="ke" :prop="ke" :key="i" :label-width="formLabelWidth">{{
                  i }}
                  <el-input v-model="topic[ke]" autocomplete="off" clearable :key="ke" />
              </el-form-item>

              <!--            <el-form-item label="话题类别" prop="categoryId" :label-width="formLabelWidth">
                  <el-input v-model.number="topic.categoryId" autocomplete="off" clearable />
              </el-form-item>
              <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
                  <el-input maxlength="20" v-model="topic.name" autocomplete="off" clearable />
              </el-form-item>
              <el-form-item label="内容" prop="content" :label-width="formLabelWidth">
                  <el-input v-model="topic.content" autocomplete="off" clearable />
              </el-form-item>
              <el-form-item label="奖品" prop="awardName" :label-width="formLabelWidth">
                  <el-input v-model="topic.awardName" autocomplete="off" clearable />
              </el-form-item>
              <el-form-item label="参与方式" prop="attendType" :label-width="formLabelWidth">
                  <el-input v-model="topic.attendType" autocomplete="off" clearable />
              </el-form-item>
              <el-form-item label="关注数" prop="attentionCount" :label-width="formLabelWidth">
                  <el-input v-model.number="topic.attentionCount" autocomplete="off" clearable />
              </el-form-item>
              <el-form-item label="阅览量" prop="readCount" :label-width="formLabelWidth">
                  <el-input v-model.number="topic.readCount" autocomplete="off" clearable />
              </el-form-item> -->
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
import {schoolAdd,schoolRemove,schoolUpdate,schoolAll, } from "../../http/school"
// import { topicAdd, topicDelId, topicEdit, topicPage } from "../../http/topic";

export default defineComponent({
  data() {
      return {

          // MainTitle: "话题",
          // FuncObj: [topicAdd, topicDelId, topicEdit, topicPage],

          MainTitle: "校园",
          FuncObj: [schoolAdd,schoolRemove,schoolUpdate,schoolAll],


          pageSize: [3, 5, 7, 10, 20, 30],

          dat: {},//正在操作的数据对象
          topics: [],   //话题
          resultData: {},
          requestData: {
              "current": 1,
              "size": 7
          },
          topic: {
              // "id": 0,
              // "attendCount": 0,
              // "attendType": "",
              // "attentionCount": 0,
              // "awardName": "",
              // "categoryId": 0,
              // "content": "",
              // "createTime": "",
              // "name": "",
              // "readCount": 0,
              // "startTime": "",
              // "endTime": "",

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
      btnLink() {
          console.log("<---------------->", this.topic);
          console.log(this.topics);
          console.log();
      },

      getTopicPage() {
          this.FuncObj[3](this.requestData).then(res => {
              // topicPage(this.requestData).then(res => {
              console.log(res.data);
              this.topics = res.data.schools;
              this.resultData = res.data;

              // this.topics = res.data.page.records;
              // this.resultData = res.data.page;

              this.topic = this.topics[0];

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
              this.topic = cloneDeep(dat);
              console.log(dat);
          } else {

              // this.topic.name = "";
              // this.topic.awardName = "";
              // this.topic.content = "";
              // this.topic.categoryId = null;
              // this.topic.attendCount = null;
              // this.topic.readCount = null;
              // this.topic.attentionCount = null;
              // this.topic.attendType = null;
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
                      //获取日期
                      this.topic.createTime = (() => {
                          moment.locale("zh-cn");
                          return moment().format("YYYY-MM-DDTHH:mm:ss");
                      })();
                      //
                      this.FuncObj[0](this.topic).then(res => {
                          // topicAdd(this.topic).then(res => {

                          ElMessage({ message: '数据添加成功!', type: 'success' });
                          //没有多余?
                          this.requestData.current = Math.ceil((this.resultData.total + 1) / this.resultData.size);
                          this.getTopicPage();

                      }).catch(err => {
                          ElMessage.error('添加错误，网络接口出错！')
                      })

                  } else {
                      //编辑 保存
                      this.FuncObj[2](this.topic).then(res => {
                          // topicEdit(this.topic).then(res => {
                          ElMessage({ message: '数据修改成功!', type: 'success' });
                          this.getTopicPage();

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
              obj[key] = null;
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             