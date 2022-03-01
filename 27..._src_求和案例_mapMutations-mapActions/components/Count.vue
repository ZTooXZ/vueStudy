<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>放大后的和为：{{bigSum}}</h3>
    <h4>欢迎来到：{{school}}  学习：{{sudject}}</h4>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name:'Count',
  props:['title'],
  data() {
    return {
      num:1,
    }
  },
  computed:{
    /* 
    //自己编写计算属性
    sum(){
      return this.$store.state.sum
    },
    school(){
      return this.$store.state.school
    },
    sudject(){
      return this.$store.state.sudject
    }, */

    //借助mapState生成计算属性，从state中读取数据(对象写法)
    /* ...mapState({
      sum:'sum',
      school:'school',
      sudject:'sudject',
    }), */
    //借助mapState生成计算属性，从state中读取数据(数组写法,前提:定义的计算属性名 必须和state中的变量名一致)
    ...mapState(['sum','school','sudject']),

/* ************************************************************** */

    /* bigSum(){
      return this.$store.getters.bigSum
    }, */
    //借助mapGetters生成计算属性，从getters中读取数据
    ...mapGetters(['bigSum'])
  },

  methods: {
    /* increment(){
      this.$store.dispatch('jia',this.num)
    },
    decrement(){
      this.$store.dispatch('jian',this.num)
    },*/

    //自己编写的计算方法函数
    /* increment(){
      this.$store.commit('JIA',this.num)
    },
    decrement(){
      this.$store.commit('JIAN',this.num)
    }, */
    
    //借助mapMutations 生成对应的方法，方法中会调用commit去联系mtations
    ...mapMutations({increment:'JIA' ,decrement:'JIAN'}),



  /* incrementOdd(){
      if( this.$store.state.sum % 2){
        this.$store.dispatch('jia',this.num)
      }
    }, */



    // incrementOdd(){
    //   this.$store.dispatch('jiaOdd',this.num)
    // },
    // // incrementWait(){
    // //   setTimeout(() => {
    // //     this.$store.dispatch('jia',this.num)
    // //   },1000)
    // // },
    // incrementWait(){
    //   this.$store.dispatch('jiaWait',this.num)
    // },
    ...mapActions({
      incrementOdd:'jiaOdd',
      incrementWait:'jiaWait'
    })
  },
  mounted() {
    console.log(this)
    const x = mapState({
      sum:'sum',
      school:'school',
      sudject:'sudject',
    })
  },
}
</script>

<style scoped>
button {
  margin-left: 4px;
}
</style>