//统一api管理
import instance from "./axios";

const subjectAdd=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'api/subject/add',
        method:'post',
        data,
      
    })
}

//删除其实是没有开放接口的
const subjectDelX=(params)=>{
    return instance.request({
        url:'api/subject/delete',
        params
    })
}
const subjectEdit=(data)=>{
    return instance.request({
        url:'api/subject/edit',
        method:'post',
        data
    })
}



const subjectPage=(data)=>{
    return instance.request({
     url:'api/subject/page',
     method:'post',
     data
    })
 }

 const subjectsGetByUserId=(params)=>{
    return instance.request({
     url:`/api/subject/getSubjects/${params.userId}`,
     method:'get',
       
    })
 }



export {
  
    subjectAdd,
    subjectDelX,
    subjectEdit,
    subjectPage,
    subjectsGetByUserId

} 