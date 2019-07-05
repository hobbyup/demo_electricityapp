import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/login.vue'
import Register from './views/Register/register.vue'
import ForgetPwd from './views/ForgetPwd/forgetPwd.vue'
import Verification from './views/ForgetPwd/Verification/verification.vue'
import SetPwd from './views/Register/SetPwd/setPwd.vue'
import NoInt from './views/NoInt/noInt.vue'
import List from './views/List/list.vue'
import PullRefresh from './views/PullRefresh/pullRefresh.vue'
import Center from './views/Center/CenterInfo/centerInfo.vue'
import UserInfo from './views/Center/UserInfo/userInfo.vue'
import Setting from './views/Center/Setting/setting.vue'
import ChangePhoneNum from './views/Center/Setting/ChangePhoneNum/changePhoneNum.vue'
import Code from './views/Center/Setting/Code/code.vue'
import ChangePhone from './views/Center/Setting/changePhone.vue'
import Help from './views/Center/Help/help.vue'
import HelpDetail from './views/Center/Help/HelpDetail/helpDetail.vue'
import Opinion from './views/Center/Opinion/opinion.vue'
import Index from './views/Index/index.vue'
Vue.use(Router)
 

const routes = [
  {
	  path: '/',
	  component: Index
	},
	{
	  path: '/pullRefresh',
	  component: PullRefresh
	},
	{
	  path: '/list',
	  component: List
	},
	{
	  path: '/noInt',
	  component: NoInt
	},
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/setPwd',
    component: SetPwd
  },
  {
    path: '/forgetPwd',
    component: ForgetPwd
  },
  {
    path: '/verification',
    component: Verification
  },
  {
	  path: '/center',
	  component: Center
  },
  {
    path:'/userInfo',
    component:UserInfo
  },
  {
    path:'/setting',
    component:Setting
  },
  {
    path:'/changePhoneNum',
    component:ChangePhoneNum
  },
  {
    path:'/code',
    component:Code
  },
  {
    path:'/changePhone',
    component:ChangePhone
  },
  {
    path:'/help',
    component:Help
  },
  {
    path:'/helpDetail',
    component:HelpDetail
  },
  {
    path:'/opinion',
    component:Opinion
  }
]

export default new Router({
  routes
}) 
