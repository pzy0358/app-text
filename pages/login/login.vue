<template>
	<view class="user-login">
		<view class="login-type">
			<view class="title">{{ tabMeta.title }}</view>
			<view class="type">
				<text @click="handeCheckType">{{ tabMeta.subTitle }}</text>
			</view>
		</view>
		<!-- 登录表单 -->
		<phone v-if="tabIndex===0"></phone>
		<number v-else></number>
	</view>
</template>

<script setup lang="ts">
	import { ref, computed } from "vue"
	import { metaType } from "./types/type"



	import phone from "./commponet/phone.vue"
	import number from "./commponet/number.vue"
	const tabIndex = ref<number>(0)
	const tabMetas = ref<metaType[]>([
		{
			title: '手机号登录',
			subTitle: '账号登录'
		},
		{
			title: '账号登录',
			subTitle: '手机号登录'
		}
	])
	const tabMeta = computed(() => {
		return tabMetas.value[tabIndex.value]
	})

	const handeCheckType = () => {
		tabIndex.value = Math.abs(tabIndex.value - 1)
	}
</script>

<style>
	@import "./login.scss";
</style>