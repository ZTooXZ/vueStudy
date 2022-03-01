import Vue from "vue";
import App from './App.vue'

//引入全局混合
import {mixin,mixin2} from './mixin'
//关闭Vue生产提示
Vue.config.productionTip = false
//启用混合
Vue.mixin(mixin)
Vue.mixin(mixin2)

//创建Vue实例对象
new Vue({
  el:'#app',
  render: h => h(App),
  mixins:[mixin,mixin2]
})