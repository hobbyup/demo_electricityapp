<template>
    <div>
        <!-- <div>
            <v-head></v-head>
        </div> -->
        <div class="Login">
            <van-row type="flex">
                <van-col offset="2" span="6">登录</van-col>
            </van-row>
            <van-row class="check" type="flex">
                <van-col offset="2" span="6">
                    <button v-bind:class="{selectOne:oneSize}" class="changeJoin1" @click="getJoin"> 验证码登录</button>
                   </van-col>/
                <van-col offset="1" span="7">
                        <button v-bind:class="{selectTwo:twoSize}"  class="changeJoin1" @click="getPassWord"> 密码登录</button>
                    </van-col>
            </van-row>
        </div>
        <div class="Phone"  v-show="join">
            <div class="inpotSend">
                <div class="inpotSend-one">
                    <van-cell-group>
                        <van-field
                                v-model="phone"
                                placeholder="请输入手机号"
                                @input="keyValu"
                            />
                        <van-field
                                v-model="sms"
                                center
                                clearable
                                placeholder="请输入短信验证码"
                                @input="keyValu"
                            >
                                <van-button v-show="sendAuthCode" @click="getAuthCode" slot="button" size="small" type="primary">获取验证码</van-button>
                                <van-button  disabled v-show="!sendAuthCode" slot="button" size="small" type="primary">{{auth_time}}秒后重发</van-button>
                                
                            </van-field>
                    </van-cell-group>
                </div>
                
            </div>
            <div class="logon-center">
                <div class="logon">
                    <van-button v-show="btnShow1" disabled type="primary" size="large">登录</van-button>
                    <van-button  @click="sendCode" v-show="!btnShow1" type="primary" size="large">登录</van-button>
                </div>
            </div>
        </div>
        <div class="password"   v-show="!join">
            <div class="inpotSend">
                <div class="inpotSend-one">
                <van-cell-group>
                    <van-field
                        v-model="userPhone"
                        placeholder="请输入手机号"
                        @input="keyValu"
                    />
                    <van-field
                        v-model="passWord"
                        placeholder="请输入密码"
                        @input="keyValu"
                    />
                    </van-cell-group>
                </div>
            </div>
                    <div class="logon-center">
                        <div class="logon">
                            <van-button v-show="btnShow" disabled type="primary" size="large">登录</van-button>
                            <van-button  @click="sendCodeTwo" v-show="!btnShow" type="primary" size="large">登录</van-button>
                        </div>
                    </div>
        </div>
        <div class="forgetPwd">
            <div class="forgetPwd-art">
                <van-row type="flex" justify="space-around">
                    <van-col span="12">
                        还没有账号？ 
                        <button @click="register" class="changeJoin5">
                                    注册
                        </button>
                    </van-col>
                    <van-col span="12"></van-col>
                    <van-col span="6">
                        <button @click="forgetPwd" class="changeJoin5">
                                    忘记密码?
                            </button>
                    </van-col>
                </van-row>
            </div>
        </div>
        
    </div>
</template>
<script>
import vHead from '../../components/head'
export default {
    data() {
        return {
            status: 'join',
            phone: '',
            userPhone: '',
            passWord: '',
            sms: '',
            sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
            auth_time: 0, /*倒计时 计数器*/
            join: true,
            oneSize: true,
            twoSize: false,
            btnShow1: true,
            btnShow: true

        }
    },
    components:{
        vHead
    },
    methods: {
         getAuthCode:function () {
            this.sendAuthCode = false;
            this.auth_time = 6;
            var auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        },
        getJoin: function() {
            this.join = true
            this.oneSize = true
            this.twoSize = false
        },
        getPassWord: function() {
            this.join = false
            this.oneSize = false
            this.twoSize = true
        },
        keyValu: function() {
            if (this.phone.length >= 1 && this.sms.length >= 1) {
                this.btnShow1 = false
            } else if (this.phone.length === 0 || this.sms.length === 0) {
                this.btnShow1 = true
            }
            if (this.userPhone.length >= 1 && this.passWord.length >= 1) {
                this.btnShow = false
            } else if (this.userPhone.length === 0 || this.passWord.length === 0) {
                this.btnShow = true 
            }
        },
        forgetPwd: function() {
            this.$router.push('forgetPwd')
        },
        register: function() {
            this.$router.push('register')
        },
        sendCode: function() {
            var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if (!reg.test(this.phone)) {
                this.$toast("手机号格式不正确");
            }
        },
        sendCodeTwo: function() {
            var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if (!reg.test(this.userPhone)) {
                this.$toast("手机号格式不正确");
            }
        }
    }
}
</script>
<style>
.Login{
    margin-top:50px;
}
.check{
    margin-top: 20px;
    font-size: 12px;
}
.Phone{
    margin-top: 30px;
    font-size: 12px;
    
}
.password{
    margin-top: 30px;
    font-size: 12px;
}
.changeJoin1{
    border: 1px solid transparent;
    outline: none;
    background: #fff;
    
}
.changeJoin2{
    border: 1px solid transparent;
    outline: none;
    background: #fff;
}
.changeJoin5{
    border: 1px solid transparent;
    outline: none;
    background: #fff;
    color: blue;
}
.selectOne{
    font-size: 15px;
    font-weight: 700;
}
.selectTwo{
    font-size: 15px;
    font-weight: 700;
}
.logon-center{
    display: flex;
    justify-content: center;
}
.logon{
    width: 90%;
    margin-top:40px;
}
.forgetPwd{
    font-size: 12px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.forgetPwd-art{
    width: 90%;
}
.inpotSend{
    display: flex;
    justify-content: center;
}
.inpotSend-one{
    width: 90%;
}
</style>
