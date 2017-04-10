import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
console.log('Vuex', Vuex)
export default new Vuex.Store({
    category: null,
    mutations: {
        setCategory(category, val) {
            category = val;
        }
    }
})
