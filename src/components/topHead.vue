<template>
  <div class="top">
    <van-row>
      <van-col offset="2" span="1">
       <van-icon @click="Back()" name="arrow-left" />
      </van-col>
      <van-col  span="20" class="top-title">
       {{title}}
      </van-col>
    </van-row>
    
     
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: ['headTitle'],
  data () {
    return {
      title: this.headTitle
    }
  },
  methods: {
    Back() {
        this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.top{
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom:1px solid #ccc;
}
.top-title{
  font-size: .625rem;
  text-align: center;
}
</style>
