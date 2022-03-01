<template>
<!-- 组件结构 -->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点位提示学校名</button>
  </div>

</template>

<script>
/* 组件交互的相关代码（数据、方法等） */
/* const school = Vue.extend({
    data(){
      return{
        name:'ytxy',
        address:'合川',
      }
    },
    methods: {
      showName(){
        alert(this.name)
      }
    },
  })
  //默认暴露
  export default school */

 /*  export default Vue.extend({
    data(){
      return{
        name:'ytxy',
        address:'合川',
      }
    },
    methods: {
      showName(){
        alert(this.name)
      }
    },
  }) */

  //优化
  export default {
    name:'School',
    data(){
      return{
        name:'ytxy',
        address:'合川',
      }
    },
    methods: {
      showName(){
        alert(this.name)
      }
    },
  }
</script>

<style>
/* 组件样式 */
  .demo{
    background-color: orange;
  }
</style>