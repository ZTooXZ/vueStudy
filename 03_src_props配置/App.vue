<template>
  <div> 
    <Student name="李四" :age="20"  sex='男'></Student>
    <hr/>
    <Student name="王五" age="22"  sex='男'></Student>
  </div>  
</template>

<script>
//引入school组件
import Student from './components/Student.vue';
export default {
  name:'App',
  components:{Student},
  data() {
    return {
      /* msg:'欢迎光临学习' */
    }
  },
  /* methods: {
    showDOM(){
      //console.log(document.getElementById("title")) 
      console.log(this.$refs.title)//真实dom元素
      console.log(this.$refs.sch)//School组件的实例对象（vc）
    }
  }, */
}
</script>

<style>

</style>