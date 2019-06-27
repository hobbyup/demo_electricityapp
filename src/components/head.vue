<template>
  <div class="top">
    <van-row>
      <van-col offset="2" span="1">
       <van-icon @click="Back()" name="arrow-left" />
      </van-col>
    </van-row>
    
     
  </div>
</template>
<script>
export default {
  data() {
    return {
        
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

}
</style>
