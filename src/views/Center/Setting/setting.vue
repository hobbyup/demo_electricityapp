<template :style="{background:#000}">
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft"/>
    <div class="setting-main">
      <div @click="changePhoneNum">
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="6">手机号</van-col>
          <van-col span="10" offset="10" class="info" v-text="phoneNum"></van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
      <div @click="untying">
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="6">微信</van-col>
          <van-col span="10" offset="10" class="info" v-text="weChat"></van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="10">修改登录密码</van-col>
          <van-col span="10" offset="10" class="info"></van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="10">修改提现密码</van-col>
          <van-col span="10" offset="10" class="info"></van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="version">
      <van-row type="flex" justify="center" class="info-text">
        <van-col span="6">版本号:</van-col>
        <van-col span="10" offset="10" class="info" v-text="version"></van-col>
        <van-col span="2">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
    <div class="loginOut">
      <van-button type="primary" size="large">退出登录</van-button>
    </div>
  </div>
</template>
<script>
import topHead from "../../../components/topHead";
export default {
  data() {
    return {
      headTitle: "设置",
      phoneNum: "18200000000",
      weChat: "养亿人",
      version: "1.0.0"
    };
  },
  components: {
    topHead
  },
  methods: {
    changePhoneNum: function() {
      this.$router.push("changePhoneNum");
    },
    untying: function() {
      this.$dialog
        .confirm({
          title: "",
          message: "确定要解绑微信吗?"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    onClickLeft:function(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
html {
  background: #ccc;
  width: 100%;
  height: 100%;
}
.setting-main {
  width: 100%;
  padding-top: 0.2rem;
  margin: 0.2rem 0;
  border-top: 1px solid #ccc;
  /* border-bottom:1px solid #ccc; */
}
.info-text {
  text-align: left;
  padding: 0.2rem 0.2rem;
  line-height: 1rem;
  font-size: 0.4rem;
  border-bottom: 0.5px solid #ccc;
  overflow: hidden;
}
.info {
  text-align: right;
}
.version {
  margin-top: 0.2rem;
}
.loginOut {
  margin: 3rem auto;
  width: 80%;
}
</style>


