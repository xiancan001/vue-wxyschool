import request from "./axios";

// export function login(data){
// 	return request({
// 		url: 'api/mobile/elogin',
// 		method: 'post',
// 		data
// 	});
// }

export function teacherAll(){
	return request({
		url: '/api/teacher/all',
		method: 'get',
	});
}



export function teacherDel(data){
	return request({
		url: `/api/teacher/delete?id=${data}`,
		method: 'get'
	});
}

export function teacherAdd(data){
	return request({
		url: '/api/teacher/add',
		method: 'post',
		data
	});
}

export function teacherUpdate(data){
	return request({
		url: '/api/teacher/edit',
		method: 'post',
		data
	});
}

export function teachersGetPageBySchoolName(data){
	return request({
		url: `/api/teacher/page/school`,
		method: 'post',
		data
	});
}