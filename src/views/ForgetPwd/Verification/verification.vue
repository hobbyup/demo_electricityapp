<template>
    <div>
        <div>
            <v-head></v-head>
        </div>
        <div class="title">
            <van-row type="flex">
                <van-col  offset="2" span="12">重新设置密码</van-col>
            </van-row>
            <van-row class="Tips" type="flex">
                <van-col offset="2" span="12">8-20个字符，不可以是纯数字</van-col>
            </van-row>
        </div>
        <div class="phoneNum">
            <div class="phoneNum-set">
                <van-cell-group>
                    <van-field
                        v-model="newPwd"
                        placeholder="请输入密码"
                        @input="keyValu"
                    />
                    <van-field
                        v-model="twoNewPwd"
                        placeholder="请再次输入密码"
                        @input="keyValu"
                    />
                </van-cell-group> 
            </div>
        </div>
        <div class="resetPwd-send">
            <div class="resetPwd">
                <van-button v-show="btnShowa" disabled type="primary" size="large">重置密码</van-button>
                <van-button  @click="reset" v-show="!btnShowa" type="primary" size="large">重置密码</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import vHead from '../../../components/head'
export default {
    data() {
        return {
            newPwd: '',
            twoNewPwd: '',
            btnShowa: true
        }
    },
    components:{
        vHead
    },
    methods: {
        reset: function() {
            let regst = /^[a-zA-Z][a-zA-Z0-9_]{7,19}$/
            if (!regst.test(this.newPwd)) {
                this.$toast("8-20个字符，不可以是纯数字"); 
            } else if(this.newPwd !== this.twoNewPwd) {
                this.$toast("两次密码不一致");
            } else {
                this.$toast("重置成功");
            }
        },
        keyValu: function() {
            if (this.newPwd.length >= 1 && this.twoNewPwd.length >= 1) {
                this.btnShowa = false
            } else if (this.newPwd.length === 0 || this.twoNewPwd.length === 0) {
                this.btnShowa = true
            }
        }
    }
} 
</script>
<style>
.title {
    font-size: 22px;
    margin-top:50px;
}
.phoneNum{
    margin-top: 40px;
    display: flex;
    justify-content: center;
   
}
.phoneNum-set{
    width: 90%;
}
.resetPwd-send{
    display: flex;
    justify-content: center;
}
.resetPwd{
    margin-top: 50px;
    width: 90%;
}
.Tips{
    font-size: 12px;
    color: gainsboro;
}
</style>
