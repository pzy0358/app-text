<template>
	<view class="form">
		<uni-forms ref="form" :rules="accountRules" :modelValue="formData">
			<uni-forms-item name="account">
				<input type="text" v-model="formData.account" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<input type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
			<button @click="submitLogin" class="submit-button">登录</button>
		</uni-forms>
	</view>
</template>
<script setup lang="ts">
	import { ref } from "vue"
	import { formDataType } from "./types/type"
	import { accountRules } from "./rules/rule"
	import { login } from "@/api/login"

	import { useUserStore } from "../../../store/user"
	const store = useUserStore()

	// 表单标识
	const form = ref()

	const formData = ref<formDataType>({
		account: 'xbsj001',
		password: '123456'
	})

	// 账号登录方法
	const submitLogin = async () => {
		try {
			// 触发表单验证
			await form.value.validate()
			// 调用登录
			const res = await login(formData.value)
			// if (res.code !== 200) return uni.utils.toast('登录失败，请重试！')
			// success
			store.token = res.data
			// 成功跳转
			uni.navigateTo({
				url: '/pages/index/index'
			})
		} catch (e) {
			//TODO handle the exception
			console.log("error");
		}
	}
	console.log('token', store.token)
</script>
<style lang="scss">
	.form {
		margin-top: 20rpx;
	}

	.submit-button {
		height: 100rpx;
		line-height: 100rpx;
		padding-top: 4rpx;
		margin-top: 80rpx;
		border: none;
		color: #fff;
		background-color: darkorange;
		border-radius: 100rpx;
		font-size: 40rpx;
	}

	button[disabled] {
		background-color: #ccc;
		color: #fff;
	}
</style>
utils: any;