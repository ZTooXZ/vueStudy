 <template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <h2>{{nmuber}}</h2>
    <button @click="add" >点我number++</button>
    <button @click="sendStudentName" >点击发送学生名给App</button>
    <button @click="unbind">点击解绑'demo'事件</button>
    <button @click="death">销毁当前student组件实例对象（vc）</button>
    <!-- <input type="text" v-fbind:value="name"> -->
  </div>
</template>

<script>
  export default {
    name:'Student',
    data() {
      return {
        name:'张三',
        sex:'男',
        age:18,
        nmuber:0,
      }
    },
    methods: {
      add(){
        console.log('add被回调了')
        this.nmuber++
      },
      sendStudentName(){
        this.$emit('demo',this.name)
        this.$emit('demo1')
        /* this.$emit('click')   没有native修饰符修饰则作为自定义事件 */
      },

      //解绑自定义事件
      unbind(){
        //解绑一个自定义事件
        this.$off('demo')
        //解绑多个自定义事件
        /* this.$off(['demo','demo1']) */
        //解绑所有自定义事件
        /* this.$off() */
      },
      death(){
        this.$destroy()//销毁当前student组件实例  销毁后所有实例的自定义事件都不奏效了
      }
    },
  }
</script>

<style>
/* .school {
  background-color: gray;
} */
.student {
  background-color: aqua;
}
</style> 