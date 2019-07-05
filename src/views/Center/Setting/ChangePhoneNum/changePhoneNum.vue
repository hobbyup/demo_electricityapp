<template>
  <div>
    <van-nav-bar title="手机号" left-arrow @click-left="onClickLeft"/>
    <div class="main">
      <van-row type="flex" justify="center">
        <van-col span="2">
          <van-icon name="phone-circle-o" />
        </van-col>
        <van-col span="20" class="main-text">您当前手机号为</van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="20" class="main-text">15200000000</van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="20" class="warn" style="line-height:1">更换手机号码不会影响您的储值卡、钱包等账户信息，更改后，请用新的手机号码登录</van-col>
      </van-row>
      <div class="loginOut" @click="changeNum">
        <van-button type="primary" size="large">更换手机号</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import topHead from "../../../../components/topHead";
export default {
  data() {
    return {
      headTitle: "手机号"
    };
  },
  components: {
    topHead
  },
  methods:{
      changeNum:function(){
          this.$router.push('code')
      },
      onClickLeft:function(){
        this.$router.go(-1)
      }
  }
};
</script>
<style scoped>
.main {
  margin: 0.2rem auto;
}
.main-text {
  font-size: 0.35rem;
  line-height: 26px;
}
.warn {
  font-size: 0.35rem;
  margin: 0.2rem auto;
}
.loginOut {
  margin: 2rem auto;
  width: 80%;
}
</style>
