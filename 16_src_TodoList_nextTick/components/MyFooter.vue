<template>
  <div class="todo-footer" v-show="totals">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneNumber}}</span> / 全部{{totals}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:'MyFooter',
   /*  props:['todos','ckeckedAllTodo','clearAllTodo'], */
    props:['todos'],
    computed: {
      totals(){
        return this.todos.length
      },
      doneNumber(){
        /* this.todos.reduce((total,current) => {
          console.log('--',total,'---',current)
          //return pre + (current.done ? 1 : 0)
          return total + (current.done ? 1 : 0)
        },0) */
        return this.todos.reduce((total,todo) => {return total + (todo.done ? 1 : 0)
        },0)  
      },
      
      isAll:{
        get(){
          return this.doneNumber === this.totals && this.totals>0
        },
        set(value){
          /* this.ckeckedAllTodo(value) */
          this.$emit('ckeckedAllTodo',value)
        }
      }
    },
    methods: {
      /* ckeckedAll(e){
        this.ckeckedAllTodo(e.target.checked)
      } */
      clearAll(){
        /* this.clearAllTodo() */
        this.$emit('clearAllTodo')
      }
    },
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>