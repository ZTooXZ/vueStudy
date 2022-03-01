<template>
  <div>
    <ul>
      <li>消息编号：{{id}}</li>
      <li>消息标题：{{title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Detail',
  data() {
    return {
      id:this.$route.query.id.substr(0, 6),
      title:this.$route.query.title.substr(0, 12),
    }
  },
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style>

</style>