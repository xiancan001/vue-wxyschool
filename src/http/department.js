//统一api管理
import instance from "./axios";


const departmentAll=(data)=>{
   return instance.request({
    url:'/api/department/all',
    method:'get',
    data
   })
}
const departmentDelId=(params)=>{
    return instance.request({
        url:'/api/department/delete',
        method:'get',
        params
    })
}
const departmentAdd=(data)=>{
    return instance.request({
        url:'/api/department/add',
        method:'post',
        data
    })
}
const departmentEdit=(data)=>{
    return instance.request({
        url:'/api/department/edit',
        method:'post',
        data
    })
}


const departsGetBySchoolId=(data)=>{
    return instance.request({
        url:`/api/department/getDeparts/${data.schoolId}`,
        method:'get',

    })
}

export {
  departmentAll,
  departmentDelId,
  departmentAdd,
  departmentEdit,
  departsGetBySchoolId
 
} 

