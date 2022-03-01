<template>
<!-- 组件结构 -->
  <div class="demo">
    <h2>学生名称：{{name}}</h2>
    <h2>学校年龄：{{age}}</h2>
    <!-- <button @click="showName">点位提示学校名</button> -->
  </div>

</template>

<script>
/* 组件交互的相关代码（数据、方法等） */
  //优化
  export default {
    name:'School',
    data(){
      return  {
        name:'张三',
        age:18,
      }
    },
    /* methods: {
      showName(){
        alert(this.name)
      }
    }, */
  }
</script>

<style>
/* 组件样式 */
  .demo{
    background-color: orange;
  }
</style>