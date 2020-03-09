<template>
    <div class="about">
        <h1>分类列表</h1>
        <!-- label-width 一行排列 -->
        <el-form label-width="120px" @submit.native="save">
            <el-form-item label="名称" >
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-button type="primary" natie-type="submit">保存</el-button>
        
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'CategoryList',
        data() {
            return {
                model:{
                    name:''
                }
            }
        },
        methods:{
            async save(){
                //async.await 把异步回调函数的写法,换成类似同步的写法.(替换掉.then())
                const res = await this.$http.post('categorys',this.model)
                //下一步
                this.$router.push('/categorys/list')
                thi.$message({
                    type:'success',
                    message:'保存成功!'
                })
                
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>