<template>
  <div class="container my">
    <div class="top">
      <img @click='jumpInfo' src="/static/images/33@2x.png" alt="">
      <div class="info">
        <div class="left" @click='jumpInfo'>
          <img :src="myInfo.avatar" alt="" mode='aspectFill'>
          <span>{{myInfo.name}}</span>
        </div>
        <div class="right" @click='jumpNews'>
          <img :src="myInfo.newsIcon" alt="">
          <span>{{myInfo.newsCount}}</span>
        </div>
      </div>
    </div>
    <div class="middle">
      <ul>
        <li @click='jump(item)' v-for="(item, index) in myList" :key='index'>
          <img class='icon' :src="item.icon" alt="">
          <span>{{item.name}}</span>
          <img class='allow' src="/static/images/121.png" alt="">
        </li>
      </ul>
    </div>
    <div v-show="showService" class="hide">
      <div @click='hideAlert' class="mask"></div>
      <img @click='hideAlert' src="/static/images/close.png" alt="">
      <div class="box">
        <h3>温馨提示</h3>
        <h5>请选择你要联系方式</h5>
        <!-- <button @click='call' class='btn-phone'>拨打电话</button> -->
        <a class="weui-btn weui-btn_plain-default btn-phone" @click='call'>拨打电话</a>
        <p>工作时间：09:00-18:00</p>
        <button @click='JumpService' open-type='contact' class='btn-service'>在线客服</button>

        <!-- <button @click='hideAlert' class='btn-cancel'>取消</button> -->
        <a class="weui-btn weui-btn_plain-default btn-cancel" @click='hideAlert'>取消</a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      myInfo: {
        avatar: "/static/images/8@2x.png",
        name: "昵称",
        newsCount: '',
        newsIcon: "/static/images/38@2x.png",
        infoRouter: "../myInfo/main",
        newsRouter: "../myNews/main"
      },
      myList: [
        // 我的预约 我的签约 我的积分 我的收藏 常见问题 推荐有礼 联系客服
        {
          icon: "/static/images/1@2x.png",
          name: "我的预约",
          router: "../myAppoint/main"
        },
        {
          icon: "/static/images/2@2x.png",
          name: "我的签约",
          router: "../myContract/main"
        },
        {
          icon: "/static/images/3@2x.png",
          name: "我的积分",
          router: "../myPoints/main"
        },
        {
          icon: "/static/images/4@2x.png",
          name: "我的收藏",
          router: "../myCollection/main"
        },
        {
          icon: "/static/images/5@2x.png",
          name: "常见问题",
          router: "../myCommonProblem/main"
        },
        {
          icon: "/static/images/6@2x.png",
          name: "推荐有礼",
          router: "../myRecommendCourtesy/main"
        },
        {
          icon: "/static/images/7@2x.png",
          name: "联系客服",
          router: "../myService/main",
          isAlert: true
        }
      ],
      showService: false
    };
  },

  components: {},
  mounted() {
    this.getInfos();
  },
  created() {
    
  },
  onShow() {
    try {
      const bussData = wx.getStorageSync("userInfo");
      if (bussData) {
        this.myInfo.avatar = bussData.avatarUrl || "/static/images/8@2x.png";
        this.myInfo.name = bussData.nickname || "昵称";
      }
    } catch (e) {}
  },
  methods: {
    getInfos() {
      wx.showLoading({
        title: "加载中...",
        mask: true
      });
      let reqUrl = this.$API.USER.USER;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            this.myInfo.avatar = bussData.avatarUrl || "/static/images/8@2x.png";
            console.log(this.myInfo.avatar)
            this.myInfo.name = bussData.nickname || "昵称";
            store.state.mobile = bussData.mobile;
            wx.hideLoading();
            wx.setStorageSync("userInfo", bussData);
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });

      let reqUrl2 = this.$API.BUSINESS.USER.UNREADCOUNT;
      this.$myRequestGet(reqUrl2, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            this.myInfo.newsCount = bussData || "0";
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    jumpInfo() {
      const url = "../myInfo/main";
      console.log(url);
      wx.navigateTo({ url });
    },
    jumpNews() {
      const url = "../myNews/main";
      console.log(url);
      wx.navigateTo({ url });
    },
    jump(item) {
      if (item.isAlert) {
        this.showService = true;
      } else {
        const url = item.router;
        console.log(url);
        wx.navigateTo({ url });
      }
    },
    hideAlert() {
      this.showService = false;
    },
    call() {
      wx.makePhoneCall({
        phoneNumber: "1340000"
      });
    },
    JumpService() {
      // ../myService/main
      // const url = item.router;
      // console.log(url);
      // wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped lang='less'>
.container.my {
  .top {
    > img {
      width: 100%;
      height: 88px;
      position: absolute;
      z-index: -1;
    }
    .info {
      height: 114px;
      margin: 0px 15px 10px;
      background-color: #fff;
      border: 1px solid #e1e1e1;
      border-radius: 12px;
      position: relative;
      top: 15px;
      .left {
        display: inline-block;
        float: left;
        margin: 21px 0 0 19px;
        img {
          width: 72px;
          height: 72px;
          border: 1px solid transparent;
          border-radius: 50%;
          margin-right: 15px;
          vertical-align: middle;
          object-fit: cover;
        }
        span {
          color: #333;
          font-size: 17px;
          font-family: PingFang-SC-Medium;
        }
      }
      .right {
        display: inline-block;
        float: right;
        img {
          width: 26px;
          height: 26px;
          position: absolute;
          top: 16px;
          right: 17px;
        }
        span {
          display: inline-block;
          width: 11px;
          height: 11px;
          text-align: center;
          line-height: 11px;
          background-color: #ff0000;
          color: #fff;
          font-size: 7px;
          border: 1px solid transparent;
          border-radius: 50%;
          position: absolute;
          top: 13px;
          right: 12px;
        }
      }
    }
  }
  .middle {
    ul {
      margin: 25px 15px 0;
      li {
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #e1e1e1;
        img.icon {
          width: 15px;
          height: 15px;
          margin-right: 12px;
        }
        img.allow {
          float: right;
          width: 8px;
          height: 8px;
          padding-top: 24px;
        }
        span {
          font-family: PingFang-SC-Regular;
          font-size: 15px;
          color: #333;
          position: relative;
          top: -2px;
        }
      }
    }
  }
  .hide {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .mask {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #000;
      opacity: 0.6;
    }
    img {
      position: fixed;
      top: 111px;
      right: 70px;
      width: 29px;
      height: 29px;
    }
    .box {
      height: 273px;
      width: 231px;
      border: 1px solid transparent;
      border-radius: 5px;
      background-color: #fff;
      text-align: center;
      position: absolute;
      top: 156px;
      left: 70px;
      h3 {
        color: #333;
        font-family: PingFang-SC-Regular;
        font-size: 17px;
        margin: 18px 0 25px;
      }
      h5 {
        color: #666;
        font-family: MicrosoftYaHei;
        font-size: 12px;
      }
      a ,button{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        border: 1px solid;
        border-radius: 17px;
        width: 156px;
        height: 35px;
        line-height: 35px;
      }
      p {
        color: #999;
        font-family: MicrosoftYaHei;
        font-size: 10px;
      }
      .btn-phone {
        background-color: #16509b;
        border:1px solid #16509b;
        color: #fff;
        margin: 20px auto 5px;
      }
      .btn-service {
        background-color: #fff;
        border:1px solid #16509b;
        color: #16509b;
        margin: 12px auto 10px;
      }
      .btn-cancel {
        background-color: #fff;
        border:1px solid #999999;
        color: #999999;
        margin: 0 auto;
      }
    }
  }
}
</style>
