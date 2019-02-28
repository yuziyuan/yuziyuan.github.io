<template>
  <div class="container">
    <div class="top">
      <img src="/static/images/推荐有礼bg@2x.png" alt="">
      <div>
        <span>活动规则</span>
        <span @click='jump'>推荐记录>></span>
      </div>
    </div>
    <div class="middle">
      <p>{{rule}}</p>
      <img :src="img" alt="">
      <!-- <button open-type='share'>分享给好友</button> -->
      <button @click='onSavePicClick'>分享给好友</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "",
      rule: ""
    };
  },

  components: {},

  mounted() {
    this.getDetail();
    this.getRule();
  },
  onShareAppMessage(res) {
    console.log("onShareAppMessage");
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "你好",
      path: "../myRecommendCourtesy/main?"
    };
  },
  methods: {
    onSavePicClick: function() {
      wx.showLoading({
        title: "",
        mask: true
      });
      var _this = this;
      var downloadUrl = _this.img;
      if (!wx.saveImageToPhotosAlbum) {
        wx.showModal({
          title: "提示",
          content:
            "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
        wx.hideLoading();
        return;
      } // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.writePhotosAlbum" 这个 scope
      wx.getSetting({
        success(res) {
          console.log("getSetting: success");
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            console.log("1-没有授权《保存图片》权限"); // 接口调用询问
            wx.authorize({
              scope: "scope.writePhotosAlbum",
              success() {
                console.log("2-授权《保存图片》权限成功");
                _this.downloadImage(downloadUrl);
              },
              fail() {
                // 用户拒绝了授权
                wx.hideLoading();
                wx.showToast({
                  icon: "",
                  title: "2-授权《保存图片》权限失败"
                });
                console.log("2-授权《保存图片》权限失败"); // 打开设置页面
                wx.openSetting({
                  success: function(data) {
                    console.log("openSetting: success");
                  },
                  fail: function(data) {
                    console.log("openSetting: fail");
                  }
                });
              }
            });
          } else {
            console.log("1-已经授权《保存图片》权限");
            _this.downloadImage(downloadUrl);
          }
        },
        fail(res) {
          console.log("getSetting: success");
          console.log(res);
          wx.hideLoading();
        }
      });
    },
    downloadImage(imageUrl) {
      // 下载文件
      wx.downloadFile({
        url: imageUrl,
        success: function(res) {
          console.log("下载文件：success");
          console.log(res); // 保存图片到系统相册
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              console.log("保存图片：success");
              wx.hideLoading();
              // wx.showToast({
              //   title: "保存推荐二维码成功，请转发给您的朋友或朋友圈"
              // });
              wx.showModal({
                title: "提示",
                showCancel: false,
                content: "保存推荐二维码成功，请转发给您的朋友或朋友圈",
                success(res) {
                  if (res.confirm) {
                    console.log("用户点击确定");
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                  }
                }
              });
            },
            fail(res) {
              wx.hideLoading();
              console.log(res);
              console.log("保存图片：fail");
              wx.showToast({
                icon: "",
                title: "保存图片：fail"
              });
              console.log(res);
            }
          });
        },
        fail: function(res) {
          wx.hideLoading();
          wx.showToast({
            icon: "",
            title: "下载文件：fail"
          });
          console.log(res);
        }
      });
    },
    jump() {
      const url = "../myRecommendCourtesyList/main";
      wx.navigateTo({ url });
    },
    getRule() {
      let reqUrl = this.$API.BUSINESS.USER.SYS + "recommendActivityRule";
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if (bussData) {
              this.rule = bussData;
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
    getDetail() {
      let reqUrl = this.$API.BUSINESS.USER.RECOMMEND;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if (bussData) {
              this.img = bussData.wxCodeFileUrl;
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
  .top {
    position: relative;
    height: 82px;
    > img {
      height: 82px;
      width: 100%;
      z-index: -1;
      position: absolute;
    }
    div {
      padding-top: 31px;
      margin: 0 auto;
      text-align: center;
      span {
        display: block;
        &:first-child {
          font-family: PingFang-SC-Medium;
          font-size: 17px;
          color: #fff;
          margin-bottom: 15px;
        }
        &:last-child {
          font-family: PingFang-SC-Regular;
          font-size: 15px;
          color: #fff;
          position: absolute;
          top: 15px;
          right: 15px;
        }
      }
    }
  }
  .middle {
    margin: 18px;
    text-align: center;
    p {
      line-height: 24px;
      font-size: 15px;
      color: #333;
      font-family: PingFang-SC-Regular;
    }
    img {
      margin: 60px auto;
      width: 134px;
      height: 134px;
    }
    button {
      width: 270px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      background-color: #16509b;
      color: #fff;
      font-family: PingFang-SC-Medium;
      font-size: 17px;
      border-radius: 23px;
    }
  }
}
</style>
