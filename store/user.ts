import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore(
	'user',
	() => {
		// 登录token
		const token = ref<string>('')

		return { token }
	},
	{
		persist: {
			paths: ['token']
		}
	}
)