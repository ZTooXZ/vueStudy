 <template>
  <div class="school">
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>

  </div>
</template>

<script>
//引入混合
  import {mixin,mixin2} from '../mixin'

  export default {
    name:'Student',
    data() {
      return {
        name:'张三',
        sex:'男',
        age:18
      }
    },
    mixins:[mixin,mixin2]
  }
</script>

<style>
/* .school {
  background-color: gray;
} */
</style> 