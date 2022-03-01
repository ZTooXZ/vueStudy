<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name:'About',
  beforeRouteEnter (to, from, next) {
    if(to.meta.isAuth){
      if(localStorage.getItem('school') === 'yt'){
        next()
      }else{
        alert('无权限')
      }
    }else{
      next()
    }
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}

</script>

<style>

</style>