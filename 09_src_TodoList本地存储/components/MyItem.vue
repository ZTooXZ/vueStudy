<template>
    <li>
      <label>
        <!-- :change="change(todo.id)" 接收来自App父组件的id  -->
        <input type="checkbox" :checked="todo.done" @click="change(todo.id)"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" @click="deleteBtn(todo.id)">删除</button>
    </li>
</template>

<script>
  export default {
    name:'Item',
    props:['todo','changeTodo','deleteTodo'],
    methods: {
      //勾选或取消勾选
      change(id){
        //通知App父组件将对应的todo对象的done值取反
        this.changeTodo(id)

      },
      //删除
      deleteBtn(id){
         if(confirm("确认删除吗")){
          //通知App删除对应id的list
          this.deleteTodo(id)
        } 
      }
    },
    
  }
</script>

<style scoped>
    /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }
  
  li:hover button{
    display: block;
  }
</style>