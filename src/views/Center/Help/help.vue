<template>
  <div class="info-list">
    <top-head :headTitle="headTitle"></top-head>

    <div @click="toList">
      <van-row type="flex" justify="center" class="info-text">
        <van-col span="6">常见问题</van-col>
        <van-col span="10" offset="10" class="info"></van-col>
        <van-col span="2">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
    <div>
      <van-row type="flex" justify="center" class="info-text">
        <van-col span="6">意见反馈</van-col>
        <van-col span="10" offset="10" class="info"></van-col>
        <van-col span="2">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
    <div @click="call(phoneNum)">
      <van-row type="flex" justify="center" class="info-text">
        <van-col span="6">联系客服</van-col>
        <van-col span="18" style="text-align:right">工作日10:00-17:00</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import topHead from "../../../components/topHead";
export default {
  data() {
    return {
      headTitle: "帮助与反馈",
      phoneNum: "020-88888888"
    };
  },
  components: {
    topHead
  },
  methods: {
    call: function(phoneNum) {
      this.$dialog
        .confirm({
          title: "联系客服",
          message: "020-88888888",
          cancelButtonText: "取消",
          confirmButtonText: "拨打"
        })
        .then(() => {
          // on confirm
          if (!this.phoneNum) {
            this.$taost("未设置号码");
          } else {
            window.location.href = "tel:" + this.phoneNum;
          }
        })
        .catch(() => {
          // on cancel
        });
    },
    toList:function(){
        console.log(11)
        this.$router.push('helpDetail')
    }
  }
};
</script>
<style scoped>
.info-list {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}
.info-text {
  text-align: left;
  padding: 0.2rem 0;
  line-height: 1rem;
  font-size: 0.4rem;
  border-bottom: 0.5px solid #ccc;
  overflow: hidden;
}
.info {
  text-align: right;
}
.img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  /* margin: 0.25rem auto; */
}
.img-f {
  overflow: hidden;
}
.popup {
  height: 8rem;
}
</style>


