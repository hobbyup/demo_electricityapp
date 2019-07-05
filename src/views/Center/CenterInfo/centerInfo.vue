<template>
  <div>
    <div>
      <van-nav-bar title="个人中心" left-arrow/>
    </div>
    <div class="box">
      <div>
        <van-row type="flex" justify="center">
          <van-col span="4" class="icon">
            <van-icon name="wap-home" />
          </van-col>
          <van-col span="4" offset="16" class="icon">
            <van-icon name="setting-o"  @click="setting"/>
          </van-col>
        </van-row>
      </div>
      <div class="image"  @click="setInfo">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt />
      </div>
      <div class="nickName">nickName</div>
    </div>
    <div class="list">
      <div  @click="help">
          <van-row type="flex" justify="center">
        <van-col span="6" class="icon">
            <van-icon name="question-o" />
        </van-col>
        <van-col span="12" class="list-name">
            帮助与反馈
        </van-col>
      </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import vHead from "../../../components/head";
export default {
  data() {
      return{}
  },
  components: {
    vHead
  },
  methods:{
      setInfo:function(){
          this.$router.push('userInfo')
      },
      setting:function(){
          this.$router.push('setting')
      },
      help:function(){
        this.$router.push('help')
      }
  }
};
</script>
<style scoped>
.box {
  padding: 0.2rem 0;
  background: #ccc;
}
.icon {
  text-align: center;
}
.image {
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
}
.image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.nickName {
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: #fff;
  font-size: 0.5rem;
}
.list{
    padding: 0.2rem 0;
}
.list-name{
    text-align: left;
    line-height: 1rem;
    font-size: .5rem;
}
</style>


