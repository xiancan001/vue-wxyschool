import request from "./axios";

//分页查询业务
const userinfoAll = () => {
   return request({
      url: '/api/userinfo/all', //url=baseURL+url
      method: 'get',

   })
}


//分页查询业务
const userinfoPage = (data) => {
   return request({
      url: '/api/userinfo/page', //url=baseURL+url
      method: 'post',
      data

   })
}

//删除业务
const userinfoDel = (data) => {
   return request({
      url: '/api/userinfo/delete',
      method: 'get',
      params: data
   })
}

//编辑业务
const userinfoEdit = (data) => {
   return request({
      url:'/api/userinfo/edit',
      method:'post',
      data
   })
}


//添加业务
const userinfoAdd = (data) => {
   return request({
      url:'/api/userinfo/add',
      method:'post',
      data
   })
}







export  {
   userinfoAll,
   userinfoDel,
   userinfoEdit,
   userinfoAdd,
   userinfoPage
   
}