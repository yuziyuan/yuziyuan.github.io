// 配置项
// 在线文档地址: https://sucheng.icebartech.com/api/swagger-ui.html#!/23567312432420732367182577322270/findListUsingGET_2
// 本地文档地址: http://api/swagger-ui.html#/
const API = {
  COMMON: {
    SEND: 'verify/code/send' // 发送验证码
  },
  USER: {
    USER: 'mini/user', //获取详情
    BINDMOBILE: 'mini/user/bindMobile',//绑定手机号
    CHANGEMOBILE: 'mini/user/changeMobile', // 修改手机号
    CHECKMOBILE: 'mini/user/checkMobile/',//检验手机号是否可用
    LOGIN: 'mini/user/login/',//小程序登录
    LOGOUT: 'mini/user/logout',//登出
    SAVEUSERINFO: 'mini/user/saveUserInfo',//编辑个人信息
    SAVEWXUSERINFO: 'mini/user/saveWxUserInfo',//保存微信授权用户信息
    GETCITY: '/mini/user/get_city' ,// 
  },
  BASE:{
    MINIUPLOADFILE: 'base/sys/mini/miniUploadFile'
  },
  BUSINESS: {
    OFFICEROOM: {
      PAGE: 'mini/office/room/page',
      SMARTPAGE: 'mini/office/room/smart/page',
      DETIAL: 'mini/office/room/',
    },
    BANNER: {
      BANNER: 'mini/banner'
    },
    USER: {
      // 常见问题
      QUESTION: 'mini/common/question',
      // 我的推荐
      RECOMMEND: 'mini/user/recommend/detail',
      //我的签约
      SINGING: 'mini/office/room/signing/page', // 我的签约
      //我的收藏
      COLLECTPAGE: 'mini/user/collect/page', // 我的收藏 获取分页
      COLLECT: 'mini/user/collect/', // 收藏和取消收藏
      //公介/活规/客电
      SYS: 'mini/sys/', //   公介/活规/客电
      //写字楼
      BUILDINGPAGE: 'mini/office/building/page', // 写字楼
      //用户积分
      POINT: 'mini/user/point', //获取用户积分
      POINTFLOW: 'mini/user/point/flow',//获取流水分页
      // 用户消息
      MESSAGEPAGE: 'mini/user/message/page', //用户消息 获取分页
      UNREADCOUNT: 'mini/user/message/unread/count', //用户消息 获取未读数
      MESSAGEDETIAL: 'mini/user/message/', // 用户消息 获取详情
      //预约看房
      LOOKINGPAGE:'mini/visit/house/booking/page',//获取分页 
      LOOKINGSUBMIT:'mini/visit/house/booking/submit',//提交预约
      // 咨询预约
      CONSULTBOOKINGSUBMIT: 'mini/consult/booking/submit',
    },
  }
}
export default API
