export interface responseData<T = any> {
	code : number,
	message : string,
	data : T
}