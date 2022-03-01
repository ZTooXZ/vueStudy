<template>
  <div> 
    <h1 v-text="msg"  ref="title"></h1>
    <button @click="showDOM">点我输出上方DOM元素</button>
    <School ref="sch"></School>  
  </div>  
</template>

<script>
//引入school组件
import School from './components/School.vue';
export default {
  name:'App',
  components:{School},
  data() {
    return {
      msg:'欢迎光临学习'
    }
  },
  methods: {
    showDOM(){
      /* console.log(document.getElementById("title")) */
      console.log(this.$refs.title)//真实dom元素
      console.log(this.$refs.sch)//School组件的实例对象（vc）
    }
  },
}
</script>

<style>

</style>