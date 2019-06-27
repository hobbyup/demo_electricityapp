import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vant from 'vant';
import Popup from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible';
import '../src/style/style.css'
import Button from 'vant';
import Icon from 'vant';
import Image  from 'vant';
import List from 'vant';
import PullRefresh from 'vant';


Vue.use(Vant);
Vue.use(Popup);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Image);
Vue.use(List);
Vue.use(PullRefresh);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
