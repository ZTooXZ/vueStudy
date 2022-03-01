<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addName">添加</button>
    <li v-for="p in personList" :key="p.id">{{p.name}}</li>
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
      return this.$store.state.personList
    },
    sum(){
      return this.$store.state.sum
    }
  },
  methods: {
    addName(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('ADD_PERSON',personObj)
      console.log(personObj);
      this.name = ''
      
    }
  },
}
</script>

<style>

</style>