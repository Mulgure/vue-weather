// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import $ from 'jquery'


Vue.use(Vuex);

Vue.config.productionTip = false;

var store = new Vuex.Store({
	state: {
		show:false,
		weathers:{}
	},
	mutations: {
		increment(state,payload) {
			state.show=true;
			state.weathers=payload.weathers
		}
  	}
})


window.vm = new Vue({
	el: '#app',
	store,
	router,
	data: {
	},
	template: '<App/>',
  	components: { App },
}).$mount('#app');
