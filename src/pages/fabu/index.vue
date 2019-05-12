<template>
<div>
  <i-panel title="发布信息">
    <i-input  title="活动主题" />
    <i-input  title="活动时间" />
    <i-input  title="活动地点" />
    <i-input  title="发布人" placeholder="姓名加专业" />
    <i-input  type="textarea" title="活动内容" maxlength="300" />
    <i-button bind:click="handleClick" type="success" shape="circle" size="small">提交</i-button>
 </i-panel> 
  <div class="weui-uploader__bd th-backwhite clearfix">
      <div class="weui-uploader__files" id="uploaderFiles">
        <block v-for="(item,index) in files" :key="index">
          <div class="weui-uploader__file posi-rela" @click="predivImage" :id="item">
            <icon type="cancel" size="20" class="th-icon-cancel" @click.stop="deletImg(index)"/>
            <image class="weui-uploader__img" :src="item" mode="aspectFill" />
          </div>
        </block>
      </div>
      <div class="weui-uploader__input-box">
        <div class="weui-uploader__input" style="color:#a31e21" @click="chooseImage"></div>
      </div>
    </div>
    
</div>
</template>
<script>
export default {
    data() {
        return{
        files: [],
        filesOnline: [] 
        }
    },

  methods: {
    chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.files = _this.files.concat(res.tempFilePaths)
          
          var tempFilePaths = res.tempFilePaths
          // console.log(tempFilePaths)
          wx.uploadFile({
            url: 'http://asdasdasdsadasdasd',    //模拟接口 
            filePath: tempFilePaths[0],
            name: 'file',
            header: {  
              "Content-Type": "multipart/form-data"  
            },  
            success: function(res){
              _this.filesOnline = _this.filesOnline.concat(JSON.parse(res.data).data)
            }
          })
          
        },
        fail: function () {
          console.log('fail');
        },
        complete: function () {
          console.log('commplete');
        }
      })
    },
    predivImage(e) {
      console.log(e);
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files // 需要预览的图片http链接列表
      })
    },
    deletImg(index){
      this.files.splice(index,1)
      this.filesOnline.splice(index,1)
    }
  }
}
</script>
<style scoped>

</style>


