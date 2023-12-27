import uniFetch from "../utils/uni-fetch"

import { loginParamsType } from "./types/loginType"


// 账号登录接口
export const login = (data : loginParamsType) => {
	return uniFetch({
		url: '/driver/login/account',
		method: "POST",
		data,
	})
}