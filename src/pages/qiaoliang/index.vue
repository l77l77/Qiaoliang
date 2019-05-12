<template>

   <div class="">  
      <div class="wraper">
<div class="section-two">
<!-- 轮播图 -->
<swiper class="cont" autoplay="true" @change="switchItem('switchItem',$event)" :current="currentTab" circular="true" skip-hidden-item-layout="true" indicator-dots="true">

<swiper-item><div class="item">泰国</div></swiper-item>
<swiper-item><div class="item">缅甸</div></swiper-item>
<swiper-item><div class="item">印度</div></swiper-item>
</swiper>
</div>
</div>
<!-- 活动详情 -->
<i-row>
   <p></p>
</i-row>
<i-row>
    <i-col offset="10" span="8" i-class="col-class" >活动详情</i-col>
</i-row>
<i-row>
  <i-col offset="11" span="10"> 
  <i-icon type="unfold" size="28" color="#a31e21" />
  </i-col>
</i-row>

<i-row>
    <i-col offset="10" span="8" i-class="col-class" ></i-col>
</i-row>
<i-row>
    <i-col offset="14" span="10" style="color:#a31e21;font-size:30rpx;margin-top:20rpx">查看更多活动  <i-icon type="enterinto" size="25" /></i-col>
</i-row>
<i-row>
 <i-card title="欢度泼水节" full=ture thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">华文学院主办</view>
    <view slot="footer">时间：2018年10月20日</view>
    
</i-card>
<!-- 点击跳转到另外页面 -->
<i-button @click="routetoactivity">点击查看详细信息</i-button>
</i-row>

 <i-card title="欢度泼水节" full=ture thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">华文学院主办</view>
    <view slot="footer">时间：2018年10月20日</view>
  
</i-card>
  <i-button @click="routetoactivity1">点击查看详细信息</i-button>
 <i-card title="欢度泼水节" full=ture thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">华文学院主办</view>
    <view slot="footer">时间：2018年10月20日</view>
</i-card>
<i-row>
  <i-col  offset="8" span="10" i-class="col2-class">
 我也是有底线的
  </i-col>
</i-row>
   </div>
   
</template>

<script>
// Use Vuex

export default {
 data () {
return {
currentTab: "0",
}
},
components: {
},
methods: {
  routetoactivity:function(){
    console.log("success")
    wx.navigateTo({
      url:`../showActivity/main`,
    })
    console.log("finally")
  },
    routetoactivity1:function(){
    console.log("success")
    wx.navigateTo({
      url:`../fabu/main`,
    })
    console.log("finally")
  },
switchTab: function (prompt,res) {
// console.log(prompt,res);
let oIndex = res.mp.currentTarget.dataset.current;
this.currentTab = oIndex;
},
switchItem: function (prompt,res) {
// console.log(prompt,res.mp.detail.current);
let oIndex = res.mp.detail.current;
this.currentTab = oIndex;
}
},
created () {
}
}
</script>

<style>
.col-class{
  margin-top: 50rpx;
  color:#a31e21;
}
.col2-class{
  font-size: 35rpx;
  margin: 50rpx;
  color:black;
}
.icon-class{
margin-top: 30rpx;
  color:#a31e21;
}
.showactivity{
margin: 20rpx;
}
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color:brown;
  border: 1px solid blue;
}
.container {
flex: 1;
}
/*第二功能模块*/
.section-two {
width: 100%;
height: auto;
overflow: hidden;
background-color:brown;
}
/*轮播图导航 */
.tab {
width: 100%;
height: 60rpx;
box-sizing: border-box;
padding: 20rpx 0 20rpx;
display: flex;
align-items: center;
border-bottom: 1rpx solid #ebebeb;
}
.nav {
text-align: center;
flex: 1;
font-weight: 600;
box-sizing: border-box;
}
.nav:nth-of-type(odd) {
border-left: 1rpx solid #ebebeb;
border-right: 1rpx solid #ebebeb;
}
.nav.active {
color: #ebebeb;
}
/*轮播图内容*/
.cont {
width: 100%;
height: 520rpx;
padding-top: 25rpx;
font-size: 28rpx;
}
.cont swiper-item {
width: auto;
height: 60rpx;
background-color: #ebebeb; 
/*轮播图背景*/
border: 1rpx solid #ebebeb;
text-align: center;
font-size: 50rpx;
box-sizing: border-box;
}
</style>
