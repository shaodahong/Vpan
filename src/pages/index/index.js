import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Axios from 'axios';
import '../../assets/css/reset.scss';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.prototype.$http = Axios;

import vHome from './components/v-home.vue';

const router = new VueRouter({
	routes: [{
		//主页
		name: 'home',
		path: '/',
		component: vHome
	}]
});


const app = new Vue({
	router
}).$mount('#app');

