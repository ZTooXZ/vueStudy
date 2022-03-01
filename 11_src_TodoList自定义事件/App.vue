<template>
  <body>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo"></MyHeader>
      <MyList 
        :todos="todos" 
        :changeTodo="changeTodo" 
        :deleteTodo="deleteTodo">
      </MyList>
      <MyFooter 
        :todos="todos" 
        @ckeckedAllTodo="ckeckedAllTodo"
        @clearAllTodo="clearAllTodo">
      </MyFooter>
    </div>
  </div>
</div>

</body>  
</template>

<script>
//引入school组件
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name:'App',
  components:{MyHeader,MyList,MyFooter},
  data() {
    return {
      /* 创建一个默认的list表单内容，通过App父组件将内容传输给List组件 */
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  //创建 添加todoObj对象的函数，通过对todos数组内容的添加修改List组件内容
  methods: {
    //添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    //勾选或取消勾选
    changeTodo(id){
      this.todos.forEach((todo) => {
        if(todo.id === id) todo.done = !todo.done
      });
    },
    //删除指定id的todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    //全选或取消全选
    ckeckedAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    //删除所有选定的todo
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

 

  


  

</style>