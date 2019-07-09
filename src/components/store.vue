<template>
    <!-- 栏目名称 -->
    <div class="info">
      <van-row type="flex" justify="space-between">
        <van-col span="18" class="info-name">栏目名称</van-col>
      </van-row>
       <van-row type="flex" justify="space-between">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </van-row>
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
.van-swipe-item:nth-child(odd) {
  background-color: #66c6f2;
}
.van-swipe-item:nth-child(even) {
  background-color: #e10f02;
}
/* .demo-swipe .van-swipe-item{
    color: #fff;
    
} */
.van-swipe {
  margin-bottom: 0.8rem;
}
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>


