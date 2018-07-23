import Vue from 'vue'
import App from './weChat.vue'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '微信',
    usingComponents: {
      painter: '/static/painter/painter'
    }
  }
}
