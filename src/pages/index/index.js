import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Axios from 'axios';

import '../../assets/css/reset.scss';
import '../../lib/font-awesome/scss/font-awesome.scss';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.prototype.$http = Axios;

import vHome from './components/v-home.vue';
import vFile from './components/v-file.vue';
import vChat from './components/v-chat.vue';
import vList from './components/v-list.vue';

const router = new VueRouter({
	routes: [{
		//主页
		name: 'home',
		path: '/',
		component: vHome,
		children: [{
			name: 'file',
			path: 'file',
			component: vFile,
			children:[{
                name: 'list',
                path: 'list/:id',
                component: vList,
			}]
		},{
			name: 'chat',
            path: 'chat',
            component: vChat
		}]
	},{
		path: '*', redirect: { name: 'file' }
	}]
});


const app = new Vue({
	router
}).$mount('#app');

