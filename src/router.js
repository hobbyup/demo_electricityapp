import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/login.vue'
import Register from './views/Register/register.vue'
import ForgetPwd from './views/ForgetPwd/forgetPwd.vue'
import Verification from './views/ForgetPwd/Verification/verification.vue'
import SetPwd from './views/Register/SetPwd/setPwd.vue'
import NoInt from './views/NoInt/NoInt.vue'
import List from './views/List/List.vue'
import PullRefresh from './views/PullRefresh/PullRefresh.vue'

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
	  path: '/',
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
  }
]

export default new Router({
  routes
}) 
