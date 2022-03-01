 <template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="sendStudentName">点击发送学生信息</button>
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
      }
    },
    methods: {
      sendStudentName(){
        this.$bus.$emit('hello',this.name)
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