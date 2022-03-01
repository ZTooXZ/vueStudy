 <template>
  <div>
    <!-- 注册部分 -->
      <div class="submit">
        <table>
          <Toptitle/>
          <tr>
            <td class="telno">
              <span>
                <div><input 
                  type="text" 
                  class="username" 
                  id="username" 
                  name="username" 
                  placeholder="请输入手机号">
                </div>        
              </span>           
            </td>
          </tr>
          
          <tr>
            <td class="verification">
              <span>
                <label class="label" id="label" >获取验证码</label>
                <input  
                  class="password" 
                  id="password" 
                  type="text" 
                  name="password" 
                  placeholder="请输入验证码">  
              </span>
            </td>
          </tr>
          
          <tr>
            <td>
              <div class="firstCheck">
                <div class="checkboxDiv"><input type="checkbox" checked> </div>
                <div class="spanDiv">我已阅读并同意<span style=" color: #c43b56;">《欧拉用户服务协议》和《欧拉用户隐私协议》</span></div>
                
              </div>
              
            </td>
          </tr>
          
          <td>
            <input type="submit" value="注册" class="submitbtn" id="submitbtn">
            <p></p>
            <span class="error" id="error"></span>
          </td>

        </table>
      </div>
  </div>
</template>

<script>
import Toptitle from './Toptitle';
  export default {
    name:'Centermsg',
    components:{Toptitle},
    data() {
      return {
        
      }
    },
  }
</script>

<style>
.submit {
  width: 90%;
  height: 280px;
  background-color:rgba(250, 170, 190, 0.5);
  margin: 0px auto;
  border-radius: 15px;
}



.username ,.password {
  width: 90%;
  height: 40px;
  border: 1px solid rgba(204, 102, 153, 0.3);
  border-radius: 25px;
  margin: 5px auto;
  padding-left: 20px;
}


.label {
  font-size: 16px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: bold;
  color: #e76679;
  line-height: 45px;
  position: absolute;
  margin-left: 225px;
  margin-top: 3px;
}



.firstCheck {
  text-align: left;
  padding-left: 20px;
}

.checkboxDiv {
  float: left;
}
.spanDiv {
  font-size: 10px;
  color: white;
  padding-top: 2px;
  padding-left: 20px;
  text-align: left;
}

.submitbtn {
  width: 50%;
  height: 40px;
  border: 0px solid rgba(204, 102, 153, 0.1);
  border-radius: 25px;
  margin: 5px auto;
  background-image: url(../img/page03.png);
  font-size: 16px;
  color: white;
  font-weight: bold;
}

/* 弹窗背景 */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-bottom: 100px;  /* Location of the box 
  width: 100%; /* Full width */
  height: 52px; /* Full height */
  /* overflow: auto; */ /* Enable scroll if needed */
  /* background-color: rgb(0,0,0); /* Fallback color */ 
 
}

.modal-content {
  /* margin: auto; */
  display: block;
  width: 100%;
  height: 760px;
  background-size: cover;
  /* max-width: 700px; */
  
}
.modal1 {
  height: 52px; /* Full height */
  /* overflow: auto; */ /* Enable scroll if needed */
  /* background-color: rgb(0,0,0); /* Fallback color */ 
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */ 
}

.error {
  font-size: 12px;
  color: #e76679;
}

</style> 