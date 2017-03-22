import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.$http = Axios

import vHome from './components/v-home.vue'

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routers: [{
		//主页
		name: 'home',
		path: '/',
		component: vHome
	}]
})


const app = new Vue({
	router
}).$mount('#app')

