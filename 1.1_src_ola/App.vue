<template>
  <div class="bg"> 
    <Logo/>
    <!-- <Toptitle/> -->
    <Centermsg/>
  </div>  
</template>

<script>
//引组件

import Centermsg from './components/Centermsg'
import Logo from './components/Logo'
export default {
  name:'App',
  components:{Centermsg,Logo},
  data() {
    return {
      
    }
  },
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  background-size: cover
  
}

.bg {
  width: 100%;
  height:  812px;
  text-align: center;
  background-image: url(./img/01.png);
  /* background-size: cover */
}



</style>