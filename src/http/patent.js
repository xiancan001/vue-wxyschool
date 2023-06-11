import request from "./axios";

export function patentPage(data){
	return request({
		url: '/api/patent/page',
		method: 'post',
		data
	});
}


export function patentDel(data){
	return request({
		url: `/api/patent/delete?id=${data}`,
		method: 'get'
	});
}

export function patentAdd(data){
	return request({
		url: '/api/patent/add',
		method: 'post',
		data
	});
}

export function patentEdit(data){
	return request({
		url: '/api/patent/edit',
		method: 'post',
		data
	});
}

export function patentGetByUserId(params){
	return request({
		url: `/api/patent/getPatents/${params.userId}`,
		method: 'get'
	});
}

