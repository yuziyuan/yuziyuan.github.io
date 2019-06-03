<template>
  <div class="container bingPhone">
    <!-- <div class="box">
      <div class="top">
        <div class="image">
          <img src="/static/images/23@2x.png" alt="">
        </div>
        <p @click='Jump'>跳过</p>
      </div>
      <div class="middle">
        <view class="section">
          <img src="/static/images/22@2x.png" alt="">
          <input :class='{"isAndroidBindPhone": !isIphone}' type='number' v-model="phoneNumber" placeholder="请输入手机号" />
        </view>
        <view class="section">
          <img src="/static/images/21@2x.png" alt="">
          <input :class='{"isAndroidBindPhone": !isIphone}' v-model="code" placeholder="请输入验证码" />
          <p @click='getCode'>{{codeTxt}}</p>
        </view>
        <view class="btn-area">
          <button @click='formSubmit'>保存</button>
        </view>
      </div>
    </div> -->
    <div class="auth-box">
      <div class="top">
        <img src="/static/images/23@2x.png" alt="logo">
      </div>
      <section>
        <img src="/static/images/wx.png" alt="weixin">
        <p class="auth-text">点击授权微信手机信息</p>
        <button class="auth-btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" @click="handleAuthBtnClick"></button>
      </section>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      phoneNumber: "",
      code: "",
      codeTxt: "获取验证码",
      isGetCode: false,
      showBox:true
    };
  },
  computed: {
    isIphone() {
      return store.state.isIphone
    }
  },
  components: {},
  mounted() {
    
  },
  methods: {
    getPhoneNumber(e) {
      // getPhoneNumber:fail user deny getPhoneNumber:ok
      console.log(e);
      console.log(e.target.errMsg);
      console.log(e.target.errMsg.indexOf("ok") > -1);
      if (e.target.errMsg.indexOf("ok") > -1) {
        console.log('591')
        this.savePhone(e.target);
      } else if (e.target.errMsg.indexOf("fail") > -1) {
        console.log('594')
        wx.showToast({
          title: '微信手机信息授权失败，请重试',
          duration: 2000
        })
      }
    },
    savePhone(resPhone) {
      let reqUrl = 'mini/user/saveWxPhoneNumber'
      var params = {
        encryptedData: resPhone.encryptedData,
        iv: resPhone.iv,
      };
      console.log('保存手机',params)
      this.$myRequest(reqUrl, params, {})
        .then(res => {
          console.log(res)
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if(bussData){
              wx.showToast({
                title: '授权成功',
                icon:'success',
                duration: 2000
              })
              setTimeout(() => {
                wx.navigateBack()
              }, 1500);
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    getCode() {
      if (!this.phoneNumber) {
        wx.showToast({
          title: "未输入手机号",
          icon: "none",
          duration: 1500
        });
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNumber)) {
        wx.showToast({
          title: "您的手机号格式不正确，请重新输入",
          icon: "none",
          duration: 1500
        });
        return;
      }
      wx.showLoading({
        title: "加载中"
      });
      this.isGetCode = true
      var count = 60;
      var t = setInterval(() => {
        count--;
        this.codeTxt = count + "s后获取";
        if (count === 0) {
          this.codeTxt = "重新获取";
          clearInterval(t);
        }
      }, 1000);
      let reqUrl = this.$API.USER.CHECKMOBILE + this.phoneNumber; //检验手机号是否可用 GET
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            // return;
            let bussData = res.data.data.bussData; //true:不存在可用/false:已存在不可用
            if (!bussData) {
              wx.hideLoading();
              wx.showToast({
                title: "该手机号已被绑定，请输入其他手机号",
                icon: "none",
                duration: 1500
              });
            } else {
              this.getCode2();
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    getCode2() {
      let reqUrl = this.$API.COMMON.SEND; //检验手机号是否可用 GET
      this.$myRequest(
        reqUrl,
        {
          mobile: this.phoneNumber,
          type: "BIND_MOBILE"
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            // return;
            wx.hideLoading();
            let bussData = res.data.data.bussData; //true:不存在可用/false:已存在不可用
            if (bussData) {
              wx.showToast({
                title: "发送成功，注意查收",
                icon: "none",
                duration: 1500
              });
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    formSubmit(e) {
      if (!this.phoneNumber) {
        wx.showToast({
          title: "未输入手机号",
          icon: "none",
          duration: 1500
        });
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNumber)) {
        wx.showToast({
          title: "您的手机号格式不正确，请重新输入",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if(!this.isGetCode) {
        wx.showToast({
          title: "您未获取验证码",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.code) {
        wx.showToast({
          title: "未输入验证码",
          icon: "none",
          duration: 1500
        });
        return;
      }
      wx.showLoading({
        title: "加载中"
      });
      let reqUrl = this.$API.USER.BINDMOBILE; //绑定手机号POST
      this.$myRequest(
        reqUrl,
        {
          mobile: this.phoneNumber,
          verifyCode: this.code
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            // return;
            wx.hideLoading();
            let bussData = res.data.data.bussData;
            if (bussData) {
              wx.showToast({
                title: "绑定成功",
                icon: "none",
                duration: 1500
              });
              store.state.mobile = this.phoneNumber
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                });
              }, 1500);
            } else {
              wx.showToast({
                title: bussData,
                icon: "none",
                duration: 1500
              });
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    Jump() {
      const url = "../index/main";

      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
  },
  created() {
    
  }
};
</script>

<style scoped lang='less'>
.container.bingPhone {
  .auth-box{
    text-align: center;
    width: 100%;
    height: 1000rpx;
    margin-top: 100rpx;
    .top{
      padding: 73rpx 0 100rpx;
      text-align: center;
      img{
        width: 337rpx;
        height: 400rpx;
      }
    }
    section{
      position: relative;
      height: 80rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .auth-text {
        color: #999;
        font-size: 26rpx;
        line-height: 80rpx;
      }
      img{
        width: 46rpx;
        height: 38rpx;
        margin-right: 30rpx;
      }
    }
    .auth-btn {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: 9;
    }
  }
  .box {
    .top {
      position: relative;
      text-align: center;
      .image {
        margin: 0 auto 23px;
        padding-top: 32px;
        width: 67px;
        height: 87px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        position: absolute;
        color: #333;
        font-size: 15px;
        font-family: PingFang-SC-Medium;
        top: 16px;
        right: 16px;
        border: none;
        background-color: transparent;
        border-color: transparent;
      }
      button{
        position: absolute;
        color: #333;
        font-size: 15px;
        font-family: PingFang-SC-Medium;
        top: 16px;
        right: 16px;
        border: none;
        background-color: transparent;
        border-color: transparent;
      }
    }
    .middle {
      margin: 0 31px;
      .section {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e2e2e2;
        img {
          width: 16px;
          height: 18px;
          object-fit: cover;
          vertical-align: middle;
        }
        p {
          float: right;
          display: inline-block;
          color: #16509b;
          font-size: 15px;
          font-family: PingFang-SC-Regular;
        }
        input {
          margin-left: 12px;
          display: inline-block;
          color: #333;
          font-size: 15px;
          font-family: PingFang-SC-Medium;
          // position: relative;
          // top: 4px;
        }
        &:first-child {
          img {
            width: 12px;
          }
          input {
            margin-left: 12px;
          }
        }
      }
      .btn-area {
        margin-top: 38px;
        button,
        .weui-btn {
          background-color: #16509b;
          border-color: #16509b;
          border-radius: 23px;
          color: #fff;
          font-size: 17px;
          font-family: PingFang-SC-Medium;
        }
      }
    }
  }
}
</style>
