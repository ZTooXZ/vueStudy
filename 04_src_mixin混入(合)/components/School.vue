 <template>
  <div class="school">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
/* //引入局部混合
  import {mixin,mixin2} from '../mixin' */
  export default {
    name:'School',
    data() {
      return {
        name:'一天学院',
        address:'合川',
        x:400,
      }
    },
    /* //配置局部混合
    mixins:[mixin,mixin2] */
  }
</script>

<style>
/* .school {
  background-color: gray;
} */
</style> 