import request from '../plugin/axios';

//post发送请求
// export  function getUseInfors(data){
//     return request({
//         //api地址
//         url:'/index',
//         //请求方法
//         method:'post',
//         data:data
//     })
// }


// 首页
export function homedata(data){
    return request({
        //api地址
        url:'/',
        //请求方法
        method:'get',
        parmas:data
    })
}
// city
// export function getUseCity(data){
//     return request({
//         //api地址
//         url:'/city',
//         //请求方法
//         method:'get',
//         parmas:data
//     })
// }

