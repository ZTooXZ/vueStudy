 <template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name:'School',
    data() {
      return {
        name:'一天学院',
        address:'合川',
      }
    },
    methods: {
      demo(msgName,data){
        console.log("hello",this,msgName,data);
      }
    },
    mounted() {
      /* this.$bus.$on('hello',(data) => {
        console.log('School组件收到了：',data);
      }) */
      /* this.pubId = pubsub.subscribe('hello',function(msgName,data){
        console.log(this);//undefined
        console.log('school组件=订阅了消息，回调函数被使用',msgName,data);
      }) */
      //改良
      /* this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        console.log(this);//vc
        console.log('school组件=订阅了消息，回调函数被使用',msgName,data);
      }) */
      this.pubId = pubsub.subscribe('hello',this.demo)
    },  
    beforeDestroy() {
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
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