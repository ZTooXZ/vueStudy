<template>
  <div> 
    <h2>{{msg}}</h2>
    <School/>
    <Student/>
  </div>  
</template>

<script>
//引入school组件
import Student from './components/Student';
import School from './components/School.vue'
export default {
  name:'App',
  components:{Student,School},
  data() {
    return {
      /* msg:'欢迎光临学习' */
      msg:'你好啊！',
    }
  },
}
</script>

<style>

</style>