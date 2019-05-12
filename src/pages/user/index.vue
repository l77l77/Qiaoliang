<template>
   <div>
       <i-card title="阿尔法" extra="个人信息" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg"></i-card>
       <i-row>
              <i-button @click="routetoactivity">我的发布</i-button>
           <!-- <i-col i-class="col-class" span="5" >我的发布</i-col>
           <i-col offset="13" span="5"><i-icon type="enter" /></i-col> -->
       </i-row>
       <!-- 选项 -->
       <i-row>
              <i-button>在线客服</i-button>
           <!-- <i-col i-class="col-class" span="5">在线客服</i-col>
           <i-col offset="13" span="5"><i-icon type="enter" /></i-col> -->
       </i-row>
       <i-row>
            <i-button>帮助中心</i-button>
           <!-- <i-col i-class="col-class" span="5">帮助中心</i-col>
           <i-col offset="13" span="5"><i-icon type="enter" /></i-col> -->
       </i-row>
       <!-- <i-row>
           <i-col i-class="col-class" span="5">发布消息</i-col>
            
           <i-col offset="13" span="5">
               <i-icon type="enter"/>
           </i-col>
       </i-row> -->
       <i-button @click="routetoactivity1">发布消息</i-button>
   </div>
</template>

<script >
export default {
    name: '',
 data () {
return {

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

},
}

</script>

<style scoped >
.col-class{
    font-size: 36px,
}
</style>
