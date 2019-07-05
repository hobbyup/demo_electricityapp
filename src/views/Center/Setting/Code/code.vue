<template>
  <div>
    <van-nav-bar title="验证手机" left-arrow @click-left="onClickLeft"/>
    <van-row type="flex" justify="center">
      <van-col span="18" class="code-text">请输入手机188XXXX8525收到的短信验证码</van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="3" class="code-text">验证码</van-col>
      <van-col span="9">
        <van-cell-group>
          <van-field v-model="code" left clearable placeholder="请输入短信验证码" @input="keyValu" />
        </van-cell-group>
      </van-col>
      <van-col span="6">
          <van-button type="primary" size="small" v-show="sendAuthCode1" @click="getAuthCodeb">点击获取</van-button>
          <van-button type="primary" size="small" disabled v-show="!sendAuthCode1">{{auth_time}}秒后重发</van-button>
      </van-col>
    </van-row>
    <div class="Nextreg-master">
      <div class="Nextreg">
        <van-button v-show="btnShow1" disabled type="primary" size="large">下一步</van-button>
        <van-button @click="NextOne" v-show="!btnShow1" type="primary" size="large">下一步</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import topHead from "../../../../components/topHead";
export default {
  data() {
    return {
      headTitle: "验证手机",
      code: "",
      btnShow1: true,
      sms: "",
      sendAuthCode1: true,
      auth_time: 0
    };
  },
  components: {
    topHead
  },
  methods: {
        NextOne: function() {
           var re=/^\d{5}$/
            if (!re.test(this.code)) {
                this.$toast("验证码不正确");
            } else {
                 this.$router.push('changePhone')
            }
        },
    keyValu: function() {
        console.log(this.code)
      if (this.code.length >= 1) {
        this.btnShow1 = false;
      } else if (this.code.length === 0) {
        this.btnShow1 = true;
      }
    },
    sendCode: function() {
      this.$router.push("/");
    },
    getAuthCodeb: function() {
      this.sendAuthCode1 = false;
      this.auth_time = 60;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode1 = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    },
    onClickLeft:function(){
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.code-text {
  font-size: 0.35rem;
  padding: 0.3rem 0;
}
.code {
  height: 1rem;
  width: 100%;
  margin: 0.5rem 0;
}
.van-cell{
    padding:10px 6px;
}
</style>

