<template>
  <div>
    <h1>新建分类</h1>
    <el-form ref="form" :model="model" label-width="80px">
      <el-form-item label="创建分类">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
        <el-input v-model="form.name"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "CategoryEdit",
  data() {
    return {
      model: {name: "",},
      
    };
  },
  methods: {
    async save() {
    //   const res = await this.$http.post("/categories", this.model);
      this.$router.push("/categories/list");
      this.$message({
        type: success,
        message: "保存成功"
      });
    } ,

  }
};
</script lang="scss">

<style >
</style>