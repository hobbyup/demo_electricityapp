<template>
  <div>
    <top-head :headTitle="headTitle"></top-head>
    <div class="setting-main">
      <div>
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="22" class="info"> 新手攻略</van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row type="flex" justify="center" class="info-text">
           <van-col span="22" class="info"> 共享收益怎么计算</van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import topHead from "../../../../components/topHead";
export default {
  data() {
    return {
      headTitle: "有什么需要帮助的?"
    };
  },
  components: {
    topHead
  }
};
</script>
<style scoped>
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
  text-align: center;
}
</style>
