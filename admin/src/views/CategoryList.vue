<template>
    <div class="about">
        <h1>分类列表</h1>
        <!-- label-width 一行排列 -->
         <el-table :data="items">
            <el-table-column prop="_id" label="ID" width="220">
            </el-table-column>
            <el-table-column prop="name" label="分类名称" >
            </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name:'CategoryList',
        data() {
            return {
                items:[]
                
            }
        },
        methods:{
            fetch(){
                // this.$http.get("/categories")
            },
        }
    }
</script>

<style >
    
</style>