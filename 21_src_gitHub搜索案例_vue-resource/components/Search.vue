<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input 
          type="text" 
          placeholder="enter the name you search"
          v-model="keyUsers"
        />&nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyUsers:'',
    }
  },
  methods: {
    getUsers(){
      //请求前更新MyList的数据
      
      // this.$bus.$emit('updateInfo',false,true,'',[])
      this.$bus.$emit('updateInfo',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      

      this.$http.get('https://api.github.com/search/users?q='+this.keyUsers).then(
        response => {
          console.log('请求成功了');
          //请求成功后更新MyList的数据
          // this.$bus.$emit('updateInfo',response.data.items)
          // this.$bus.$emit('updateInfo',false,false,'',response.data.items)
         this.$bus.$emit('updateInfo',{isLoading:false,errMsg:'',users:response.data.items})
        },
        error => {
          console.log('请求失败',error.message);
          //请求失败后更新MyList的数据
          this.$bus.$emit('updateInfo',{isLoading:false,errMsg:error.message ,users:[]})
        }
      )
    }
  },
}
</script>

<style scoped>

</style>