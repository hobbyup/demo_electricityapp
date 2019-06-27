<template>
  <div>
    <div class="noInt">
      <van-row type="flex">
        <!-- <van-col span="12" offset="4">无网络提示</van-col> -->
      </van-row>
    </div>
    <div style="margin:0 auto;width:5rem;height:5rem">
		<van-image width="5rem" height="5rem" fit="cover" src="http://via.placeholder.com/200x200"/>
	</div>
	 <div class="no-int-font">
      <van-row  gutter="20">
		<van-col  offset="5"></van-col>
        <van-col span="12">网络链接不可用</van-col>
		<van-col  offset="4"></van-col>
      </van-row>
    </div>
    <van-button type="info" @click="allow" class="btnCheck">重新加载试试</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    allow() {
      this.show = true;
    }
  }
};
</script>

<style>
.noInt {
  font-size: 0.29rem;
  margin-bottom: 2rem;
}
.btnCheck {
  left: 35%;
  margin-top: 2rem;
  border-radius: 10px;
}
.van-button{
	border-radius: 10px;
}
.close {
  text-align: center;
}

.van-overlay {
  background-color: rgba(0, 0, 0, 0.2);
}

.van-popup {
  font-size: 0.29rem;
  height: 0.92rem;
}

.showFont {
  font-size: 0.29rem;
}
.no-int-font{
	text-align: center;
	font-size: 0.3rem;
  color: dimgray;
	margin: 0.2rem 0;
}
</style>
