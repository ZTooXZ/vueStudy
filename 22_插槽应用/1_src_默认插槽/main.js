//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue'
//引入vue_resource插件
import vueResource from 'vue-resource'
//关闭Vue生产提示
Vue.config.productionTip = false
//使用vue_resource插件
Vue.use(vueResource)

//创建Vue实例对象
new Vue({
  el:'#app',
  render: h => h(App),
  //注册全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }

})