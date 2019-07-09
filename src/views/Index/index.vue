<template>
  <div>
    <van-row>
      <van-col span="2" offset="2">
        <van-icon name="chat" class="chat" />
      </van-col>
      <van-col span="20">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </van-col>
    </van-row>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
   
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
     <store></store>
    <van-tabbar v-model="active" class="active_tab">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)">
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Store from '../../components/store.vue'
export default {
  name: "tabbar",
  data() {
    return {
      currIndex: 0,
      active: 0,

      tabbars: [
        {
          name: "index",
          title: "首页"
        },
        {
          name: "category",
          title: "分类"
        },
        {
          name: "message",
          title: "消息"
        },
        {
          name: "cart",
          title: "购物车"
        },
        {
          name: "center",
          title: "我的"
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      //   console.log(val);
      this.$router.push(val);
    },
    onChange(index) {
      this.current = index;
    }
  },
  components:{
    Store
  }
};
</script>
<style scoped>
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
}
.chat {
  line-height: 54px;
}
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
.info-name{
  font-size: .5rem;
}
.info{
  padding: 0 0.5rem;
  margin:0.8rem 0;
}
</style>
