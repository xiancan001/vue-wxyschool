import{a8 as m,u as D,r as v,o as b,c as T,T as u,U as y,a as t,e as s,aa as a,F as O,S,a3 as r}from"./index-f62cc32f.js";function B(i){return m({url:"api/mobile/elogin",method:"post",data:i})}function F(){return m({url:"/api/student/all",method:"get"})}function I(i){return m({url:`/api/student/one?id=${i}`,method:"get"})}function L(i){return m({url:`/api/student/delete?id=${i}`,method:"get"})}function q(i){return m({url:"/api/student/add",method:"post",data:i})}function E(i){return m({url:"/api/student/edit",method:"post",data:i})}const A=t("br",null,null,-1),M={border:"1"},z=t("tr",null,[t("th",null,"id"),t("th",null,"school"),t("th",null,"depart"),t("th",null,"studentNo"),t("th",null,"studentName"),t("th",null,"major"),t("th",null,"classinfo"),t("th",null,"createTime"),t("th",null,"updateTime"),t("th",null,"操作")],-1),G=["onClick"],H=["onClick"],J=t("br",null,null,-1),K=t("td",null,"id:",-1),P=t("td",null,"school:",-1),Q=t("td",null,"depart:",-1),R=t("td",null,"studentNo:",-1),W=t("td",null,"studentName:",-1),X=t("td",null,"major:",-1),Y=t("td",null,"classinfo:",-1),Z={colspan:"2"},tt={__name:"student",setup(i){const x=D(),p=v(!1),f=v({email:"414090297@qq.com",password:"12345678"}),U=v([]),o=v({createTime:"",depart:"",id:0,major:"",school:"",studentName:"",studentNo:"",updateTime:"",classinfo:"2020软件工程4班"}),n=v({});let c=v(2);const k=()=>{let d=f.value;B(d).then(e=>{if(e.code==1){let l=e.data.userinfo.token;c.value=e.data.userinfo.id,x.setToken(l),p.value=!0,N()}else alert("登录失败，请检查账号或密码输入是否有误。")})},g=()=>{confirm("是否要退出登录？")&&(x.setToken(""),p.value=!1,alert("退出登录成功。"))},h=()=>{let d={createTime:new Date,depart:o.value.depart,id:0,major:o.value.major,school:o.value.school,studentName:o.value.studentName,studentNo:o.value.studentNo,classinfo:o.value.classinfo,updateTime:new Date,userId:c.value};q(d).then(e=>{e.code==1&&(alert("添加学生信息成功！"),N())})},j=d=>{I(d).then(e=>{let l=e.data.student;n.value=l})},w=()=>{if(confirm("是否要进行更新？"))if(n.value.id=="")alert("请选择要操作的学生信息。");else{let d={createTime:n.value.createTime,depart:n.value.depart,id:n.value.id,major:n.value.major,school:n.value.school,studentName:n.value.studentName,studentNo:n.value.studentNo,classinfo:n.value.classinfo,updateTime:new Date,userId:c.value};E(d).then(e=>{e.code==1&&(alert("更新成功。"),V(),setTimeout(()=>{N()},1e3))})}},V=()=>{n.value={createTime:"",depart:"",id:0,major:"",school:"",studentName:"",studentNo:"",updateTime:"",classinfo:"2020软件工程4班"}},C=d=>{confirm("是否要删除该学生信息？")&&L(d).then(e=>{e.code==1&&(alert("成功删除学生信息！"),N())})};function N(){F().then(d=>{console.log(d),U.value=d.data.students.filter(e=>e.classinfo==="2020软件工程4班")})}return(d,e)=>(b(),T("div",null,[u(t("div",null,[s(" 账号："),u(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>f.value.email=l)},null,512),[[a,f.value.email]]),s("   密码："),u(t("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=l=>f.value.password=l)},null,512),[[a,f.value.password]]),s("   "),u(t("button",{type:"button",onClick:e[2]||(e[2]=l=>k())}," 登录 ",512),[[y,p.value==!1]])],512),[[y,p.value==!1]]),u(t("div",null,[s(" school: "),u(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=l=>o.value.school=l)},null,512),[[a,o.value.school]]),s("   depart: "),u(t("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=l=>o.value.depart=l)},null,512),[[a,o.value.depart]]),s("   studentNo: "),u(t("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=l=>o.value.studentNo=l)},null,512),[[a,o.value.studentNo]]),s("   studentName: "),u(t("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=l=>o.value.studentName=l)},null,512),[[a,o.value.studentName]]),s("   major: "),u(t("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=l=>o.value.major=l)},null,512),[[a,o.value.major]]),s("   classinfo: "),u(t("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=l=>o.value.classinfo=l)},null,512),[[a,o.value.classinfo]]),s("   "),t("button",{type:"button",onClick:e[9]||(e[9]=l=>h())},"添加"),s("   "),t("button",{type:"button",onClick:e[10]||(e[10]=l=>g())},"退出登录")],512),[[y,p.value]]),A,u(t("div",null,[t("div",null,[t("table",M,[z,(b(!0),T(O,null,S(U.value,l=>(b(),T("tr",{key:l.id},[t("td",null,r(l.id),1),t("td",null,r(l.school),1),t("td",null,r(l.depart),1),t("td",null,r(l.studentNo),1),t("td",null,r(l.studentName),1),t("td",null,r(l.major),1),t("td",null,r(l.classinfo),1),t("td",null,r(l.createTime),1),t("td",null,r(l.updateTime),1),t("td",null,[t("button",{onClick:$=>j(l.id)},"更新",8,G),t("button",{onClick:$=>C(l.id)},"删除",8,H)])]))),128))])]),J,t("table",null,[t("tr",null,[K,t("td",null,[u(t("input",{type:"text","onUpdate:modelValue":e[11]||(e[11]=l=>n.value.id=l),readonly:""},null,512),[[a,n.value.id]])])]),t("tr",null,[P,t("td",null,[u(t("input",{type:"text","onUpdate:modelValue":e[12]||(e[12]=l=>n.value.school=l)},null,512),[[a,n.value.school]])])]),t("tr",null,[Q,t("td",null,[u(t("input",{type:"text","onUpdate:modelValue":e[13]||(e[13]=l=>n.value.depart=l)},null,512),[[a,n.value.depart]])])]),t("tr",null,[R,t("td",null,[u(t("input",{type:"text","onUpdate:modelValue":e[14]||(e[14]=l=>n.value.studentNo=l)},null,512),[[a,n.value.studentNo]])])]),t("tr",null,[W,t("td",null,[u(t("input",{type:"text","onUpdate:modelValue":e[15]||(e[15]=l=>n.value.studentName=l)},null,512),[[a,n.value.studentName]])])]),t("tr",null,[X,t("td",null,[u(t("input",{type:"text","onUpdate:modelValue":e[16]||(e[16]=l=>n.value.major=l)},null,512),[[a,n.value.major]])])]),t("tr",null,[Y,t("td",null,[u(t("input",{type:"text","onUpdate:modelValue":e[17]||(e[17]=l=>n.value.classinfo=l)},null,512),[[a,n.value.classinfo]])])]),t("tr",null,[t("td",Z,[t("button",{type:"button",onClick:e[18]||(e[18]=l=>w())},"更新"),t("button",{type:"button",onClick:e[19]||(e[19]=l=>V())},"清空")])])])],512),[[y,p.value]])]))}};export{tt as default};
