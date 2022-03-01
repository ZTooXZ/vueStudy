<template>
  <div>
    <tr>
      <td>
        <div class="first">
          <div class="hand" id="hand" ref="hand">
            <img :src="urlIdNum" alt="" />
          </div>
          <div class="tips">
            你的好友<span>{{ nameIdNum }}</span> <span>{{ phoneIdNum }}</span> <br />
            邀请您注册欧拉ORA APP
          </div>
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "Toptitle",
  data() {
    return {
      urlIdNum: "",
      nameIdNum: "",
      phoneIdNum: "",
    }
  },
  methods: {
    getId() {
      this.ajax("get", "https://elhqyr.vip/tencent/getUserInfo?ID=100")
      //  console.log(this);
    },

    ajax(type, url) {
      const that = this
      console.log(this);
      // this.$refs.hand.style.backgroundImage = urlId;
      const xhr = new XMLHttpRequest()
      xhr.open(type, url, true)
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            const rep = JSON.parse(this.response)
            if (rep.code === 0) {
              console.log(that);
              that.urlIdNum = rep.data.avatar
              that.nameIdNum = rep.data.name
              that.phoneIdNum = rep.data.openId.substr(0, 12)
            } else {
              alert(rep.msg)
            }
          }
        }
      }
    },
  },

  mounted() {
    this.getId()
  },
}
</script>

<style>
.first {
  width: 330px;
  float: left;
  /* display:inline */
  /* margin-left: 20px;
  margin-top: 15px; */
}

.hand {
  float: left;
  margin: 10px;
  max-width: 40px;
  width: 40px;
  height: 40px;
  background: white;
  background-image: url();
  border-radius: 50%;
  background-size: 100%;
  overflow: hidden;
}

.tips {
  float: left;
  font-size: 14px;
  padding-top: 10px;
  color: white;
  text-align: left;
  /*  text-align: center */
}
</style>
