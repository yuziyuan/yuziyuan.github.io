import Vue from 'vue'
import App from './App'
import store from './store'
console.log(store,'1')
import './weui.css'
import './base.css'
import API from '@/utils/apiConstant'
import {http,httpGet} from '@/utils/index'
const somePlugin = {
  install: function () {
    Vue.mixin({
      onUnload () {
        if (this.timer) {
          clearInterval(this.timer)
        }
        if (this.$options.data) {
          Object.assign(this.$data, this.$options.data())
        }
      }
    })
  }
}
// 使用插件
Vue.use(somePlugin)
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

// flyio配置
let Fly = require('flyio/dist/npm/wx')
let fly = new Fly()
// fly.config.headers = {
//   'content-type': 'application/json'
// }
// fly.config.baseURL = 'https://192.29.11.219/api/'
fly.config.baseURL = 'https://sucheng.icebartech.com/api/'
fly.config.withCredentials = false
fly.interceptors.response.use(
  (response) => {
    if (response.data.status === 401) {
      wx.removeStorageSync('sessionId')
      wx.removeStorageSync('landlordSignIn')
      wx.removeStorageSync('renterSignIn')
      wx.redirectTo({
        url: `/pages/index/main`
      })
    } else if (response.data.status !== 200) {
      wx.showToast({
        title: response.data.msg,
        icon: 'none'
      })
    } else if (response.status === 404) {
      wx.showToast({
        title: '服务器网络繁忙,请稍后再试',
        icon: 'none'
      })
    }
  }
)
Vue.prototype.$http = fly
Vue.prototype.$API = API
Vue.prototype.$myRequest = http
Vue.prototype.$myRequestGet = httpGet
export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // pages: ['^pages/landlord/withdrawManage/bankList/main'],
    // pages: ['^pages/landlord/withdrawManage/addBankCard/main'],
    // pages: ['^pages/landlord/landlordIndex/main'],
    // pages: ['^pages/renter/renterIndex/main'],
    // pages: ['^pages/register/main'],
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '苏成空间',
      navigationBarTextStyle: 'black'
    }
  }
}
