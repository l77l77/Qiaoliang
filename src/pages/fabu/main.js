import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        usingComponents: {
          'i-pannel': '../../../static/iView/pannel/index',
          'i-input': '../../../static/iView/input/index',
          'icon': '../../../static/iView/icon/index'
        }
      }
}