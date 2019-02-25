import Vue from 'vue'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')
  return `${t1} ${t2}`
}

export function http (url, data = {}, dataForm = {}, header = {'content-type': 'application/json'}) {
  // const openId = wx.getStorageSync('openId')
  const sessionId = wx.getStorageSync('sessionId')
  let api = url
  let str = ''
  if (sessionId) {
    api = url + '?sessionId=' + sessionId
    for (let item in dataForm) {
      str = str + '&' + item + '=' + dataForm[item]
    }
  } else {
    str = '?'
    for (let item in dataForm) {
      str = str + '&' + item + '=' + dataForm[item]
    }
  }
  // let api = sessionId ? url + '?openId=' + openId + '&sessionId=' + sessionId : url + '?openId=' + openId
  let requestUrl = str ? api + str : api
  return Vue.prototype.$http.post(requestUrl, data, {headers: header})
}

export function httpGet (url, data = {}, dataForm = {}, header = {'content-type': 'application/json'}) {
  // const openId = wx.getStorageSync('openId')
  const sessionId = wx.getStorageSync('sessionId')
  let api = url
  let str = ''
  if (sessionId) {
    api = url + '?sessionId=' + sessionId
    for (let item in dataForm) {
      str = str + '&' + item + '=' + dataForm[item]
    }
  } else {
    str = '?'
    for (let item in dataForm) {
      str = str + '&' + item + '=' + dataForm[item]
    }
  }
  // let api = sessionId ? url + '?openId=' + openId + '&sessionId=' + sessionId : url + '?openId=' + openId
  let requestUrl = str ? api + str : api
  return Vue.prototype.$http.get(requestUrl, data, {headers: header})
  // return new Promise((resolve, reject) => {
  //   const openId = wx.getStorageSync('openId')
  //   const sessionId = wx.getStorageSync('sessionId')
  //   let str = ''
  //   for (var item in dataForm) {
  //     str = str + '&' + item + '=' + dataForm[item]
  //   }
  //   let api = sessionId ? url + '?openId=' + openId + '&sessionId=' + sessionId : url + '?openId=' + openId
  //   let requestUrl = str ? api + str : api
  //   wx.request({
  //     url: requestUrl,
  //     data,
  //     header,
  //     method,
  //     success: function (res) {
  //       if (res.status === 200) {
  //         resolve(res)
  //       } else {
  //         reject(res)
  //       }
  //     }
  //   })
  // })
}

// export function idCardValidatePost (imgUrl, side) {
//   let reqUrl = 'https://dm-51.data.aliyun.com/rest/160601/ocr/ocr_idcard.json'
//   let imageBase64Url = Base.encode(imgUrl)
//   let data = {
//     image: imageBase64Url,
//     side
//   }
//   let headers = {
//     Authorization: 'APPCODE 4d379a6ca32a4c50b836505464d25356',
//     'content-type': 'application/json; charset=UTF-8'
//   }
//   let config = {
//     method: 'POST',
//     headers
//   }
//   return fly.request(reqUrl, data, config)
// }

export default {
  formatNumber,
  formatTime,
  http
  // idCardValidatePost
}
