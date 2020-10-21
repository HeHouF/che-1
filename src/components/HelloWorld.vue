<template>
  <header class="hello">
  <el-row>
    <el-col :span="6" class="logo-container">
      <span class="title">qqqwer</span>
    </el-col>
    <el-col ></el-col>
  </el-row>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding:5px;
  background: #324057;
  color:springgreen;
  border-bottom: 1px solid #1f2d3d;
}
.title{
  
  
}
</style>
