<template>
  <div>
    <top-head :headTitle="headTitle"></top-head>
    <van-cell-group>
      <van-field
        v-model="userPhone"
        required
        clearable
        label="手机号"
        left-icon="phone-o"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="userCode"
        center
        clearable
        label="短信验证码"
        left-icon="edit"
        placeholder="请输入短信验证码"
      >
        <van-button
          slot="button"
          size="small"
          type="primary"
          v-show="sendAuthCode1"
          @click="getAuthCodeb"
        >发送验证码</van-button>
        <van-button
          slot="button"
          size="small"
          type="primary"
          disabled
          v-show="!sendAuthCode1"
        >{{auth_time}}秒后重发</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn">
      <van-button type="primary" size="large" @click="changePhone">更换手机号</van-button>
    </div>
  </div>
</template>
<script>
import topHead from "../../../components/topHead";
export default {
  data() {
    return {
      userPhone: "",
      userCode: "",
      headTitle: "更换手机号",
      btnShow1: true,
      sendAuthCode1: true,
      auth_time: 0
    };
  },
  components: {
    topHead
  },
  methods: {
    changePhone: function() {
      var re = /^\d{5}$/;
      if (!re.test(this.userCode)) {
        this.$toast("验证码不正确");
      } else {
        this.$dialog
          .alert({
            message: "您已成功修改手机号,点确定使用新手机号登录"
          })
          .then(() => {
            // on close
            this.$router.push('login')
          });
      }
    },
    getAuthCodeb: function() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (!reg.test(this.userPhone)) {
        this.$toast("手机号格式不正确");
      } else {
        this.sendAuthCode1 = false;
        this.auth_time = 60;
        var auth_timetimer = setInterval(() => {
          this.auth_time--;
          if (this.auth_time <= 0) {
            this.sendAuthCode1 = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.btn {
  width: 80%;
  margin: 2rem auto;
}
</style>
