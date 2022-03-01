<template>
  <div>
    <button @click=" isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" :appear="true"> -->
    <!--enter-active-class=""配置进入动画  -->
    <transition-group 
      appear
      name="animate__animated animate__bounce" 
      enter-active-class="animate__fadeInUp"
      leave-active-class="animate__zoomOut"
    >
      <h1 v-show="!isShow" class="come" key="1">你好啊！</h1>
      <h1 v-show="isShow" class="come" key="2">猴赛雷！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
    return {
      isShow:true,
    }
  },
}
</script>

<style scoped>

h1 {
  background-color: orange;
}





</style>