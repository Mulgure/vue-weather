import Vue from 'vue'
import Router from 'vue-router'
import Forecast from '@/components/Forecast'
import Air from '@/components/Air'
import Suggestion from '@/components/Suggestion'
Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', redirect: '/forecast' },
		{ path: '/forecast', component: Forecast },
		{ path: '/air', component: Air },
		{ path: '/suggestion', component: Suggestion }
	]
})
