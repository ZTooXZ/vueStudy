 <template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">点击按钮发送学校名给App</button>
  </div>
</template>

<script>
  export default {
    name:'School',
    props:['getSchoolName'],
    data() {
      return {
        name:'一天学院',
        address:'合川',
      }
    },
    methods: {
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    },
  }
</script>

<style scoped>
/* .school {
  background-color: gray;
} */
.school {
  background-color: gray;
}
</style> 