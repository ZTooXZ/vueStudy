<template>
  <div> 
    <h2>{{msg}},{{studentName}}</h2>
    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一张写法：@/v-on) -->
    <Student @demo="getStudentName" @demo1="m1"></Student>

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二种写法： ref) -->
    <!-- @click="show" 会变成自定义事件  native修饰符：原生的-->
    <!-- <Student ref="student" @click.native="show"></Student> -->
    <hr/>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
    <School :getSchoolName="getSchoolName" ></School>
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
      studentName:''
    }
  },
  methods: {
    getSchoolName(name){
      console.log('App收到了',name)
    },
    getStudentName(name){
      console.log('App收到了',name)
      this.studentName = name
    },
    m1(){
      console.log('demo1被调用了')
    },
    show(){
      alert(123)
    }
  },
 /*  mounted() {
   //ref绑定一个自定义事件实现:子给父传递数据
   setTimeout(()=>{
     this.$refs.student.$on('demo',this.getStudentName) //绑定自定义事件
     this.$refs.student.$on('demo',(name) => {
        console.log('App收到了',name)
        this.studentName = name
     }) //绑定自定义事件
     this.$refs.student.$once('demo',this.getStudentName) //绑定一次性自定义事件
   },3000)
    
  }, */
}
</script>

<style>

</style>