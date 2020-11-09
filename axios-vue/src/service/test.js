import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000/api'
const test = {
    get:function(url,params){
      return new Promise((resolve,reject)=>{
        axios({
        method:'get',
        url:url,
        params:params
        }).then((res)=>{
        resolve(res.data.data)
        }).catch((err)=>{
        reject(err)
        })
      }) 
},
    post:function(url,data,params){
      return new Promise((resolve,reject)=>{
        axios({
        method:'post',
        url:url,
        data:data,
        params:params
        }).then((res)=>{
        console.log(res)
        resolve(res.data.data)
        }).catch((err)=>{
        reject(err)
        })
      }) 
    },
    delete:function(url,id){
      return new Promise((resolve,reject)=>{
        axios({
        method:'delete',
        url:url,
        params:{
          id:id
        }
        }).then((res)=>{
        console.log(res)
        resolve(res.data.data)
        }).catch((err)=>{
        reject(err)
        })
      }) 
    }
}



// axios({
//   baseURL:'http://localhost:9000/api',
//   method:'get',
//   url:'/contactList',
//   params:{
//     id:12
//   }
// }).then(res=>{
//  resolve(res.data.data)
// }).catch(err =>{
//     console.log(err)
// })
export default test