 <template>
  <div class="box">
    <div class="titile"></div>
    <span class="message">
      新用户注册并成功登录欧拉ORA APP
      <br> 
      即可获得200欧币及1个抽奖码
      <br> 
      更有黑猫半价车、大牌女包、iPhone13 Pro M等 
      <br>
      诸多大奖，等你来拿
    </span>
  </div>
</template>

<script>
  export default {
    name:'Logo',
    data() {
      return {
        
      }
    },
  }
</script>

<style >

.box {
  padding-top: 100px;
  padding-bottom: 10px;
}

.titile {
  width: 65%;
  height: 40px;
  background-image: url(../img/titile.png);
  margin: auto;
}

.message {
  font-size: 12px;
  font-weight: bold;
  color: rgb(204, 102, 153);
}

</style> 