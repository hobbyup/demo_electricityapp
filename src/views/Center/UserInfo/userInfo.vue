<template>
  <div>
    <van-nav-bar title="个人中心" left-arrow @click-left="onClickLeft"/>
    <div class="info-list">
      <van-row type="flex" justify="center" class="info-text">
        <van-col span="6">头像</van-col>
        <van-col span="8" offset="12" class="img-f">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt class="img" />
        </van-col>
        <van-col span="2">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
      <div @click="onClick">
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="6">昵称</van-col>
          <van-col span="10" offset="10" class="info" v-text="userName"></van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
      <div @click="sex">
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="6">性别</van-col>
          <van-col span="10" offset="10" class="info" v-text="userSex"></van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
      <div @click="age">
        <van-row type="flex" justify="center" class="info-text">
          <van-col span="6">年龄</van-col>
          <van-col span="10" offset="10" class="info" v-text="userAge"></van-col>
          <van-col span="2">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>

      <van-popup v-model="show" position="bottom" class="popup">
        <van-picker
          show-toolbar
          title="标题"
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
      </van-popup>
      <van-popup v-model="sexShow" position="bottom" class="popup">
        <van-picker
          show-toolbar
          title="标题"
          :columns="sexList"
          @cancel="onSexCancel"
          @confirm="onSexConfirm"
        />
      </van-popup>

      <van-dialog v-model="isShow" show-cancel-button>
        <van-field v-model="userName" label="昵称" placeholder="请输入昵称" />
      </van-dialog>
    </div>
  </div>
</template>
<script>
import topHead from "../../../components/topHead";
export default {
  data() {
    return {
      show: false,
      headTitle: "个人信息",
      columns: ["00后", "90后", "80后", "70后", "60后"],
      sexList: ["男", "女"],
      userAge: "请选择",
      userSex: "请选择",
      sexShow: false,
      isShow: false,
      userName: "JFF1237373773"
    };
  },
  components: {
    topHead
  },
  methods: {
    onClick: function() {
      this.isShow = !this.isShow;
    },
    age: function() {
      if (!this.show) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    onConfirm(value, index) {
      this.userAge = value;
      this.show = false;
      //   console.log(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.show = false;
      //   console.log("取消");
    },
    sex: function() {
      if (!this.sexShow) {
        this.sexShow = true;
      } else {
        this.sexShow = false;
      }
    },
    onSexCancel: function() {
      this.sexShow = false;
    },
    onSexConfirm: function(value, index) {
      this.userSex = value;
      this.sexShow = false;
    },
    onClickLeft:function(){
      this.$router.go(-1)
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
  text-align: center;
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

