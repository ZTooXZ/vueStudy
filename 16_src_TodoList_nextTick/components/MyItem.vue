<template>
    <li>
      <label>
        <!-- :change="change(todo.id)" 接收来自App父组件的id  -->
        <input type="checkbox" :checked="todo.done" @click="change(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input 
          type="text"
          :value="todo.title"
          v-show="todo.isEdit"
          @blur="handlBlur(todo,$event)"
          ref="inputTitle"
        >
      </label>
      <button class="btn btn-danger" @click="deleteBtn(todo.id)">删除</button>
      <button 
        class="btn btn-edit" 
        @click="changeEdit(todo)"
        v-show="!todo.isEdit"

      >编辑</button>
    </li>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name:'Item',
    props:['todo','',''],
    methods: {
      //勾选或取消勾选
      change(id){
        //通知App父组件将对应的todo对象的done值取反
        // this.changeTodo(id)
        // this.$bus.$emit('changeTodo',id)
        pubsub.publish('changeTodo',id)
      },
      //删除
      deleteBtn(id){
         if(confirm("确认删除吗")){
          //通知App删除对应id的list
          // this.deleteTodo(id)
          // this.$bus.$emit('deleteTodo',id)
          pubsub.publish('deleteTodo',id)
        } 
      },
      //切换文字与输入框
      changeEdit(todo){
        if( todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }else{
          // console.log('@');
          this.$set(todo,'isEdit',true)
        }
        //虚拟dom更新完成后再执行
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      handlBlur(todo,e){
        todo.isEdit = false
        if(!e.target.value.trim()) return   alert('输出不能为空')
        this.$bus.$emit('changeEdit',todo.id,e.target.value)
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