 <template>
  <div class="school">
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
        name:'一天学院ytxy',
        address:'合川',
      }
    },
  }
</script>

<style>
/* .school {
  background-color: gray;
} */
</style> 