import Vue from 'vue'
import App from './App'
//import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/entrance/main','pages/mainIndex/main','pages/logs/main', 'pages/index/main', 'pages/user/main', 'pages/news/main', 'pages/fllow/main',
      'pages/userinfo/main', 'pages/newsdetail/main', 'pages/index2/main','pages/myrecom/main'],
    window: {
      backgroundTextStyle:'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'What',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color:"white",
      selectedColor:'black',
      "list": [{
        "pagePath": "pages/index/main",
        "text": "首页",
        "iconPath":"static/images/home3.png",
        "selectedIconPath": "static/images/home4.png"
      },{
        "pagePath": "pages/news/main",
        "text": "推荐",
        "iconPath":"static/images/reco3.png",
        "selectedIconPath": "static/images/reco4.png"
      }, {
        "pagePath": "pages/fllow/main",
        "text": "跟踪",
        "iconPath": "static/images/fllow3.png",
        "selectedIconPath": "static/images/fllow4.png"
      },
       {
        "pagePath": "pages/user/main",
        "text": "我的",
        "iconPath": "static/images/user3.png",
        "selectedIconPath": "static/images/user4.png"
      }
    
    ]
    }
  }

}
