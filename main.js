import App from './App'

// 引入工具库
import './utils/utils'

//1. 引入 Pinia
import {
	createPinia
} from 'pinia'
// 引入pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)

	// 2. 实例化Pinia
	const pinia = createPinia()
	// 注册pinia持久化插件
	pinia.use(piniaPluginPersistedstate)

	// 3. 传递给项目应用
	app.use(pinia)

	return {
		app
	}
}
// #endif