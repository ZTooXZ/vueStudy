//该文件用于创建Vuex最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备 actions --用于响应组件中的动作
const actions = {
  /* jia(context,value){
    // console.log(context,value);
    context.commit('JIA',value)
  },
  jian(context,value){
    context.commit('JIAN',value)
  }, */
  jiaOdd(context,value){
    // console.log(context,value);
    if(state.sum % 2){
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    // console.log(context,value);
    setTimeout(()=>{
      context.commit('JIA',value)
    },500)
    
  },
}
//准备 mutations --用于操作数据(state)
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  },
  ADD_PERSON(state,personObj){
    state.personList.unshift(personObj)
  }

}
//准备 state --用于存储数据
const state = {
  sum:0,
  school:'移通',
  sudject:'Java',
  personList: [
    {id:'001',name:'zhangsan'}
  ]
  
}
//准备 getters --用于加工数据
const getters = {
  bigSum(state){
    return state.sum*10
  }
}
//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})