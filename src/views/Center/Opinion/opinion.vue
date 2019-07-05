<template>
  <div>
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft"/>
    <div class="opinion-main">
      <div class="opinion-type">
        <p class="opinion-text">请选择反馈类型（必选啦）</p>
        <div class="type-main">
          <van-radio-group v-model="radio">
            <van-radio name="1">BUG:程序报错或者异常</van-radio>
            <van-radio name="2">产品改进：我觉得一些点可以做更好</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="opinion-type">
        <p class="opinion-text">详细描述（必选啦）</p>
        <div class="type-main">
          <van-cell-group>
            <van-field
              v-model="message"
              type="textarea"
              placeholder="请描述下遇到的问题和故障"
              rows="10"
              autosize
            />
          </van-cell-group>
        </div>
      </div>
      <div class="opinion-type">
        <p class="opinion-text">添加图片（请提供相关截图，更快改正哈）</p>
        <div class="type-main">
          <van-uploader :before-read="beforeRead" style="margin-top:0.2rem;margin-left:0.2rem;" />
        </div>
      </div>
      <div class="opinion-type">
          <van-button type="primary" size="large">提交</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1"
    }
  },
      methods: {
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg/png') {
        this.$toast('图片上传格式不正确');
        return false;
      }
    
      return true;
    },

    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg/png') {
          this.$toast('图片上传格式不正确');
          reject();
        } else {
          resolve();
        }
      });
    },
    onClickLeft:function(){
      this.$router.go(-1)
    }
  }
  }
</script>
<style scoped>
.opinion-main {
  width: 80%;
  margin: 0 auto;
  padding: 0.2rem 0;
}
.opinion-type {
  width: 100%;
  height: auto;
  margin-bottom: 0.2rem;
}
.opinion-text {
  color: #666;
  text-align: left;
  font-size: 0.35rem;
}
.type-main {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.2rem;
}
.van-radio {
  width: 100%;
  padding: 0.3rem 0.2rem;
  font-size: 0.35rem;
}
.submitButton{

}
</style>


