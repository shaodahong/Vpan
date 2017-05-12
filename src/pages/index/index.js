import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import store from './store';

import '../../assets/css/reset.scss';
import '../../lib/font-awesome/scss/font-awesome.scss';

Vue.use(VueRouter);

<<<<<<< HEAD
Vue.prototype.$http = Axios;;
=======
Vue.prototype.$http = Axios
>>>>>>> master

import vHome from './components/v-home/v-home.vue';
import vFile from './components/v-file/v-file.vue';
import vChat from './components/v-chat/v-chat.vue';
import vList from './components/v-list/v-list.vue';

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
	router,
    store
}).$mount('#app');

