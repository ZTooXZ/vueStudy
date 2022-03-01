<template>
  <div>
    <button @click=" isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" :appear="true"> -->
    <transition-group name="hello" appear><!--  -->
      <h1 v-show="!isShow" class="come" key="1">你好啊！</h1>
      <h1 v-show="isShow" class="come" key="2">猴赛雷！</h1>
    </transition-group>
  </div>
</template>

<script>
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
  transition: 0.5s linear;
}
/* 进入的起点 离开的终点*/
.hello-enter ,.hello-leave-to{
  transform: translateX(-100%);
}

/* 离开和进入的动画 */
/* .hello-enter-active ,.hello-leave-active {
  transition: 0.5s linear;
} */

/*离开的起点 进入的终点  */
.hello-leave ,.hello-enter-to {
  transform: translateX(0);
}



</style>