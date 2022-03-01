<template>
  <div class="school">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
      }
    },
    /* props:['name','age','sex']   简单声明接收接收 */


/*     //接收的同时对数据进行类型限制
  props:{
     name:String,
    age:Number,
    sex:String
  } */

  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限定
  props:{
    name:{
      type:String,  //定义name类型为字符串
      required:true //定义 name是必须的
    },
    sex:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:99 //设置年龄的默认值为99
    }
  }

  }
</script>

<style>
/* .school {
  background-color: gray;
} */
</style>