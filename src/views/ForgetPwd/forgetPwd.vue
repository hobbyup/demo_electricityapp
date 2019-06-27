<template>
    <div>
        <div>
            <v-head></v-head>
        </div>
        <div class="title">
            <van-row type="flex">
                <van-col  offset="2" span="12">忘记密码</van-col>
            </van-row>
        </div>
        <div class="inpotSend">
            <div class="inpotSend-one">
                <van-cell-group>
                    <van-field
                        v-model="userPhone"
                        placeholder="手机号"
                        @input="keyValu"
                    />
                    <van-field
                        v-model="sms"
                        center
                        clearable
                        placeholder="请输入短信验证码"
                        @input="keyValu"
                    >
                        <van-button v-show="sendAuthCode1" @click="getAuthCode1" slot="button" size="small" type="primary">获取验证码</van-button>
                        <van-button  disabled v-show="!sendAuthCode1" slot="button" size="small" type="primary">{{auth_time}}秒后重发</van-button>
                        
                    </van-field>
                </van-cell-group> 
            </div>
        </div>
        <div class="NextContent">
            <div class="NextOne">
                <van-button v-show="btnShow1" disabled type="primary" size="large">下一步</van-button>
                <van-button  @click="NextOne" v-show="!btnShow1" type="primary" size="large">下一步</van-button>
            </div>
        </div>
        
        
    </div>
</template>
<script>
import vHead from '../../components/head'
export default {
    data() {
        return {
            userPhone: '',
            btnShow1: true,
            sms: '',
            sendAuthCode1: true,
            auth_time: 0,
        }
    },
    components:{
        vHead
    },
    methods: {
        NextOne: function() {
            var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if (!reg.test(this.userPhone)) {
                this.$toast("手机号格式不对");
            } else {
                 this.$router.push('verification')
            }
           
        },
        keyValu: function() {
            if (this.userPhone.length >= 1 && this.sms.length >= 1) {
                this.btnShow1 = false
            } else if (this.userPhone.length === 0 || this.sms.length === 0) {
                this.btnShow1 = true
            }
        },
        getAuthCode1:function () {
            this.sendAuthCode1 = false;
            this.auth_time = 6;
            var auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode1 = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        }
    }
} 
</script>
<style>
.title {
    font-size: 22px;
    margin-top:50px;
    margin-bottom: 20px;
}
.NextContent{
    display: flex;
    justify-content: center;
}
.NextOne{
    margin-top: 30px;
    width: 90%;
}
</style>
