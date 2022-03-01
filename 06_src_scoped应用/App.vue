<template>
  <div> 
    <Student ></Student>
    <hr/>
    <School></School>
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
    }
  },
}
</script>

<style>

</style>