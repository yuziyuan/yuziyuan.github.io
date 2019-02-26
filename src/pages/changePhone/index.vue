<template>
  <div class="container">
    <div class="box">
      <div class="top">
        <p>
          本次操作需要短信确认，请输入123#65收到的短信 验证码
        </p>
      </div>
      <div class="middle">
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">手机号</label>
            </div>
            <div class="weui-cell__bd">
              <input :disabled='true' v-model="phoneNumberOld" class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号">
            </div>
          </div>
          <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd">
              <label class="weui-label">验证码</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" v-model="codeOld" placeholder="请输入验证码">
            </div>
            <div class="weui-cell__ft">
              <a class="weui-vcode-btn" @click='getCodeOld'>{{codeTxtOld}}</a>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">新手机号</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input" v-model="phoneNumberNew" type="number" pattern="[0-9]*" placeholder="请输入手机号">
            </div>
          </div>
          <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd">
              <label class="weui-label">验证码</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" v-model="codeNew" placeholder="请输入验证码">
            </div>
            <div class="weui-cell__ft">
              <a class="weui-vcode-btn" @click='getCodeNew'>{{codeTxtNew}}</a>
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
      phoneNumberOld: store.state.mobile,
      phoneNumberNew: "",
      codeOld: "",
      codeNew: "",
      isGetCodeOld: false,
      isGetCodeNew: false,
      codeTxtOld: "获取验证码",
      codeTxtNew: "获取验证码"
    };
  },

  components: {},
  mounted() {
    console.log(store.state.mobile)
    this.phoneNumberOld = store.state.mobile
  },
  methods: {
    getCodeOld() {
      if (this.codeTxtOld.indexOf("s") > -1) {
        wx.showToast({
          title: "请稍后",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.phoneNumberOld) {
        wx.showToast({
          title: "未输入旧手机号",
          icon: "none",
          duration: 1500
        });
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNumberOld)) {
        wx.showToast({
          title: "您的旧手机号格式不正确，请重新输入",
          icon: "none",
          duration: 1500
        });
        return;
      }
      wx.showLoading({
        title: "加载中"
      });
      this.isGetCodeOld = true;
      var count = 60;
      var t = setInterval(() => {
        count--;
        this.codeTxtOld = count + "s后获取";
        if (count === 0) {
          this.codeTxtOld = "重新获取";
          clearInterval(t);
        }
      }, 1000);
      let reqUrl = this.$API.COMMON.SEND;
      this.$myRequest(
        reqUrl,
        {
          mobile: this.phoneNumberOld,
          type: "OLD_MOBILE_VERIFY"
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
                title: "旧手机号验证短信发送成功，注意查收",
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
    getCodeNew() {
      if (this.codeTxtNew.indexOf("s") > -1) {
        wx.showToast({
          title: "请稍后",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.phoneNumberNew) {
        wx.showToast({
          title: "未输入新手机号",
          icon: "none",
          duration: 1500
        });
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNumberNew)) {
        wx.showToast({
          title: "您的新手机号格式不正确，请重新输入",
          icon: "none",
          duration: 1500
        });
        return;
      }
      wx.showLoading({
        title: "加载中"
      });
      this.isGetCodeNew = true;
      var count = 60;
      var t = setInterval(() => {
        count--;
        this.codeTxtNew = count + "s后获取";
        if (count === 0) {
          this.codeTxtNew = "重新获取";
          clearInterval(t);
        }
      }, 1000);
      let reqUrl = this.$API.USER.CHECKMOBILE + this.phoneNumberNew; //检验手机号是否可用 GET
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
              this.getCodeNew2();
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    getCodeNew2() {
      let reqUrl = this.$API.COMMON.SEND;
      this.$myRequest(
        reqUrl,
        {
          mobile: this.phoneNumberNew,
          type: "CHANGE_NEW_MOBILE"
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
                title: "新手机号验证短信发送成功，注意查收",
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
      console.log(this.phoneNumberOld);
      console.log(this.codeOld);
      if (!this.phoneNumberOld) {
        wx.showToast({
          title: "未输入旧手机号",
          icon: "none",
          duration: 1500
        });
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNumberOld)) {
        wx.showToast({
          title: "您的旧手机号格式不正确，请重新输入",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.isGetCodeOld) {
        wx.showToast({
          title: "您未获取旧手机号验证码",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.codeOld) {
        wx.showToast({
          title: "未输入旧手机号验证码",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.phoneNumberNew) {
        wx.showToast({
          title: "未输入新手机号",
          icon: "none",
          duration: 1500
        });
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNumberNew)) {
        wx.showToast({
          title: "您的新手机号格式不正确，请重新输入",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.isGetCodeNew) {
        wx.showToast({
          title: "您未获取新手机号验证码",
          icon: "none",
          duration: 1500
        });
        return;
      }
      if (!this.codeNew) {
        wx.showToast({
          title: "未输入新手机号验证码",
          icon: "none",
          duration: 1500
        });
        return;
      }
      wx.showLoading({
        title: "加载中"
      });
      let reqUrl = this.$API.USER.CHANGEMOBILE; // 修改手机号
      this.$myRequest(
        reqUrl,
        {
          mobile: this.phoneNumberNew,
          oldVerifyCode: this.codeOld,
          verifyCode: this.codeNew
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            console.log("CHANGEMOBILE");
            console.log(bussData);
            if (bussData) {
              wx.showToast({
                title: "绑定成功",
                icon: "none",
                duration: 1500
              });
              store.state.mobile = this.phoneNumberNew;
              console.log("store.state.mobile");
              console.log(store.state.mobile);
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                });
              }, 1500);
            } else {
              wx.hideLoading();
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
    formSubmit2(e) {
      console.log(this.phoneNumberNew);
      console.log(this.codeNew);
      let reqUrl = this.$API.USER.BINDMOBILE; //绑定手机号POST
      this.$myRequest(
        reqUrl,
        {
          mobile: this.phoneNumberNew,
          verifyCode: this.codeNew
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
              store.state.mobile = this.phoneNumberNew;
              console.log("store.state.mobile");
              console.log(store.state.mobile);
              return;
              wx.navigateBack({
                delta: 1
              });
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
