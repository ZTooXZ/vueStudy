 <template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
        name:'一天学院',
        address:'合川',
      }
    },
    mounted() {
      this.$bus.$on('hello',(data) => {
        console.log('School组件收到了：',data);
      })
    },  
    beforeDestroy() {
      this.$bus.$off('hello')
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