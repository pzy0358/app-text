import { createUniFetch } from 'uni-app-fetch'

import { responseData } from "./types/responseType"

import { useUserStore } from "@/store/user"

interface responseData {
	code : number
	message : string
	data : any
}

// #ifdef VUE3
declare module 'vue' {
	interface ComponentCustomProperties {
		fetch : typeof uniFetch
	}
}

// 使用自定义选项创建实例
const uniFetch = createUniFetch<responseData>({
	loading: { title: 'loading...' },
	baseURL: 'https://slwl-api.itheima.net',
	intercept: {
		// 请求拦截器
		request(config) {
			// 初始化store
			const store = useUserStore()
			// 发送token
			if (store.token) {
				const defaultHeaders = {
					Authorization: store.token
				}
				config.header = Object.assign({}, defaultHeaders.config.header)
			}

			return config
		},
		// 响应拦截器
		response(result) {
			return result.data
		},
	},
})
// 模块导出
export default uniFetch