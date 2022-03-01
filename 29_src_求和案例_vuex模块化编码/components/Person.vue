<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addName">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">随机添加一句话</button>
    <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <h3>上方的总和为：{{sum}}</h3>
  </div>
</template>

<script>
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: 'Person',
  data() {
    return {
      name:'',
    }
  },

  computed: {
    personList(){
      // return this.$store.state.personAbout.personList
      return this.$store.state.personAbout.personList
    },
    sum(){
      return this.$store.state.countAbout.sum
    },
    firstPersonName(){
       return this.$store.getters['personAbout/firstPersonName']
    }
  },
  

  methods: {
    addName(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('personAbout/ADD_PERSON',personObj)
      console.log(personObj);
      this.name = ''
      
    },
    addWang(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/addPersonWang',personObj)
      this.name = ''
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
    },
  },
}
</script>

<style>

</style>