<template>
<div>
   <!-- 梗概 -->
<i-row>
    <i-col  span="8" style="color:black;font-size:30rpx;" >29.Nov.2018</i-col>
</i-row>
<i-row>
    <i-col offset="14" span="10" style="color:black;font-size:50rpx;">三味书屋</i-col>
</i-row>
<i-row>
  <i-col  span="10">戊戌十月十一
  </i-col>
</i-row>
  <i-row>
    <i-col span="24" offset="2">
      <img src="" style="margin-top:20px;height:50px;background-color:#a31e21">
      </i-col>
  </i-row>
  <!-- 内容 -->
<i-row>
    <i-col offset="10" span="8" i-class="col-class" >xxxxxxxx</i-col>
</i-row>
<i-row>
    <i-col offset="14" span="10" style="color:black;font-size:30rpx;margin-top:20rpx">文/xxx </i-col>
</i-row>
   </div>
</template>

<script>
// Use Vuex

export default {
 data () {
return {

}
},
components: {
},
methods: {

},
created () {
}
}
</script>

<style>
.col-class{
  margin-top: 50rpx;
  color:black;
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
