<template>
  <div id="home">
    <!-- <div id="nav">
      <router-link to="/test">test</router-link>
    </div>
    <router-view/>
    //这是异步请求，一开始是没有数据的也就是undefined，因此加一个判断等异步请求结束数据存在了再进行挂载  -->
    
    <div v-if="this.list"> 
      <!-- <p v-bind:title="list[0].id">123</p> -->
      <p>{{list[0].name}}</p>
      <p>{{list[list.length - 1].name}}</p>
      
    </div>
    <p>id为2的内容已被删除</p>
    <!-- <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button> -->
  </div>

</template>

<style>
</style>

<script>
// import Vue from 'vue'
// import axios from 'axios'
// import { Button } from 'vant'
// Vue.use(Button);
export default {
  name: 'home',
  data(){
    return{
      list:null,
      title:"属性绑定的内容v-bind"
    }
  },
  created(){
    this.getContactList();
    this.post();
    this.delete();
    console.log(this.list)
    // let data ={
    //   name:'小明',
    //   tel:'123123',
    //   id:4
    // }
    // axios({
    //   url:'/post',
    //   data:data
    // }).then(res=>{
    //   console.log(res)
    // })
  },
  methods:{
    //get方法获取数据
    async getContactList(){
      var b = await this.$Test.get('/contactList',12)
      this.list = b
      console.log(this.list[0].name)
    },
    //post方法上传数据
    async post(){
      let data ={
      name:'我是post上传的内容',
      tel:'123124',
      
    }
      var b = await this.$Test.post('/contact/new/json',data)
      this.list.push(b)
      console.log(this.list)
      console.log(this.list[this.list.length - 1].name)
    },
    //delete根据参数params删除对应内容
    async delete(){
      var b = await this.$Test.delete('/contact',2)
      console.log(b)
    }
  }
}
</script>