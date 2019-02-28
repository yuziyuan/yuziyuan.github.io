<template>
  <div class="container">
    <div class="box">
      <div class="middle">
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">手机号</label>
            </div>
            <div class="weui-cell__bd">
              <input v-model="phoneNumber" class="weui-input" type="number" pattern="[0-9]*" placeher="请输入手机号">
            </div>
          </div>
          <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd">
              <label class="weui-label">验证码</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" v-model="code" placeher="请输入验证码">
            </div>
            <div class="weui-cell__ft">
              <a class="weui-vcode-btn" @click='getCode'>{{codeTxt}}</a>
            </div>
          </div>
        </div>
        <view class="btn-area">
          <button @click='formSubmit'>确定</button>
        </view>
      </div>
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
      isGetCode: false,
      codeTxt: "获取验证码"
    };
  },

  components: {},

  methods: {
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
      this.isGetCode = true;
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
      let reqUrl = this.$API.COMMON.SEND;
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
      if (!this.isGetCode) {
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
    }
  },
  created() {}
};
</script>

<style scoped lang='less'>
.container {
  .box {
    .top {
      margin: 15px;
      p {
        color: #333;
        font-size: 15px;
        font-family: PingFang-SC-Regular;
      }
    }
    .middle {
      // margin: 0 31px;
      .weui-cells {
        margin: 23px 15px 0;
        &:after,
        &:before {
          border: none;
        }
        .weui-cell {
          height: 55px;
          line-height: 55px;
          padding-left: 0;
          border-bottom: 1px solid #e1e1e1;
          &:after,
          &:before {
            border: none;
          }
          .weui-cell__hd {
            label.weui-label {
              font-size: 15px;
              color: #333;
              font-family: PingFang-SC-Regular;
              width: 95px;
              display: inline-block;
            }
          }
          .weui-cell__bd {
            input {
              font-size: 15px;
              color: #333;
              font-family: PingFang-SC-Regular;
            }
          }
          .weui-cell__ft {
            a {
              background: #fff;
              border: none;
              color: #16509b;
              font-family: PingFang-SC-Regular;
              font-size: 15px;
            }
          }
        }
      }
      .btn-area {
        position: fixed;
        bottom: 19px;
        left: 38px;
        width: 300px;
        height: 49px;
        line-height: 49px;
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
