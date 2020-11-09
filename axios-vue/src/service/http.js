import axios from 'axios'
import service from './contactApi'

//service 循环遍历输出不同的请求方法
//创建axios实例制定baseURL以及timeout(超时时长)
let instance = axios.create({
    baseURL:'http://local:9000/api',
    timeout:5000
})
const Http = {} //包裹请求方法的容器,通过对service进行遍历,然后生成不同的请求方法,将请求方法以及它对应的key放在Http对象里边

for(let key in service){
    let api = service[key] //里面有在service里面的url以及method
    //async 作用:避免进入回调地狱
    Http[key] = async function(
        params,//请求参数,  get与delete是url put,post,patch是data
        isFormData = false, //标识是否是form-data请求
        config = {} //配置axios参数 (params\data等等)
        ){
        let url = api.url //获取在service中的url
        let newParams = {}

        //判断content-type是否是form-data的判断
        if(params && isFormData){
            newParams = new FormData()
            for(let i in params){
                newParams.append(i,params[i])
            }
        }else{
            newParams = params
        }
        
        //不同请求的判断
        let response = {} //请求的返回值
        if(api.method === 'put' || api.method === 'post' || api.method === 'patch'){
            try{
                response = await instance[api.method](url,newParams,config)
            }catch(err){
                response = err
            } 
        }else if(api.method === 'get' ||api.method === 'delete'){
            config.params = newParams
            try{
                response = await instance[api.method](url,config)
            }catch(err){
                response = err
            } 
        }
        return response //返回请求响应值 
    }
}
export default Http