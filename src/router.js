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
Vue.use(Router)
 

const routes = [
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
	  path: '/',
	  component: Center
  },
  {
    path:'/userInfo',
    component:UserInfo
  }
]

export default new Router({
  routes
}) 
