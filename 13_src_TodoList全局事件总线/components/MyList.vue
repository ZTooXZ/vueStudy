<template>
  <ul class="todo-main">
    <!-- 遍历todos数组对象  -->
    <MyItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj" 
    />
  </ul>
</template>

<script>
import MyItem from './MyItem'

export default {
  name:'MyList',
  components:{MyItem},
  //接收从App父组件传过来的todos数组对象
  props:['todos','',''],
  methods: {
    
  },
}
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>