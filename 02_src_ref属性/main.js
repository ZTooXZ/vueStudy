import Vue from "vue";
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip = false
//创建Vue实例对象
new Vue({
  el:'#app',
  render: h => h(App)
})