<template>
  <div class="container">
    <div class="top" v-if="isAuthUserinfo">
      <div class="head">
        <div class="address" @click='jumpAddress'>
          <span>{{titleCity}}</span>
          <img src="/static/images/51@2x.png" alt="">
        </div>
        <div class="icon">
          <img src="/static/images/52@2x.png" alt="">
        </div>
        <div @click='jumpSearch' class="sreach">
          <img src="/static/images/49@2x.png" alt="">
        </div>
      </div>
      <div class="middle">
        <swiper class="swiper-box" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color='#1980FF' indicator-color='#ffffff'>
          <block v-for="(item, index) in imgUrls" :key='index'>
            <swiper-item @click='jumpDetail(item)'>
              <img :src="item.img" alt="" mode='aspectFill'>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <div class="foot">
        <div v-for="(item, index) in footList" :key='index' @click='jumpList(item)'>
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="middle" v-if="isAuthUserinfo"></div>
    <div class="foot" v-if="isAuthUserinfo">
      <div class="head">
        <div v-for="(item, index) in brushConditionList" @click='brushConditionClick(item)' :key='index'>
          <span>{{item.name}}</span>
          <img :src="item.img" alt="">
        </div>
      </div>
      <div class="hide" v-show="showAreaBox">
        <div class="formBox">
          <div class="inputBox">
            <input type="number" v-model="minArea">
            <span class='line'></span>
            <input type="number" v-model="maxArea">
            <span class='unit'>㎡</span>
          </div>
          <div class="btn-box">
            <a @click='reset("area")' class="weui-btn weui-btn_plain-default">重置</a>
            <a @click='sortPrimary("area")' class="weui-btn weui-btn_plain-default">确定</a>
          </div>
        </div>
      </div>
      <div class="hide" v-show="showPriceBox">
        <div class="formBox">
          <div class="inputBox">
            <input type="number" v-model="minTotalPrice">
            <span class='line'></span>
            <input type="number" v-model="maxTotalPrice">
            <span class='unit'>元</span>
          </div>
          <div class="btn-box">
            <a @click='reset("price")' class="weui-btn weui-btn_plain-default">重置</a>
            <a @click='sortPrimary("price")' class="weui-btn weui-btn_plain-default">确定</a>
          </div>
        </div>
      </div>
      <div class="hide" v-show="showAddressList">
        <ul>
          <li v-for="(item, index) in cityList" :key='index' @click='sortAddress(item)'>
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="hide" v-show="showSortList">
        <ul>
          <li v-for="(item, index) in sortList" :key='index' @click='sortKindof(item)'>
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="middle">
        <scroll-view scroll-y style="height: 624px;" @scrolltolower="lower">
          <ul>
            <li v-for="(item, index) in officeList" :key='index' @click='jumpDetail(item)'>
              <img :src="item.img" alt="" mode='aspectFill'>
              <div class="size">
                <img src="/static/images/42@2x.png" alt="">
                <span>{{item.size}}㎡</span>
              </div>
              <p>{{item.name}}
                <span class='unit'>{{item.unit}}</span>
                <span>元/㎡</span>
              </p>
              <div class="foot-child clear">
                <div class="address">
                  <img src="/static/images/48@2x.png" alt="">
                  <p>{{item.address}}</p>
                </div>
                <p>
                  <span class='money'>{{"￥ "+item.money}}</span>
                  <span>元/月</span>
                </p>
              </div>
            </li>
            <div v-show="!listIsOver" class="ul-foot">
              <img src="/static/images/46@2x.png" alt=""> 加载中
            </div>
            <div v-show="listIsOver" class="ul-foot">
              已加载完全
            </div>
          </ul>
        </scroll-view>
      </div>
    </div>
    <div class="auth-box" v-if="!isAuthUserinfo">
      <div class="top">
        <img src="/static/images/23@2x.png" alt="logo">
      </div>
      <section>
        <img src="/static/images/wx.png" alt="weixin">
        <p class="auth-text">点击授权并使用苏成空间</p>
        <button class="auth-btn" open-type="getUserInfo" @getuserinfo="handleBindUserInfo" @click="handleAuthBtnClick"></button>
      </section>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import QQMapWX from "../../utils/qqmap";
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key: "T5KBZ-BLY6V-XYSPD-UNLWC-4WAUS-TVFB4"
});
export default {
  data() {
    return {
      isAuthUserinfo: false,
      officeList: [],
      brushConditionList: [
        {
          name: "面积",
          img: "/static/images/28@2x.png"
        },
        {
          name: "位置",
          img: "/static/images/28@2x.png"
        },
        {
          name: "价格",
          img: "/static/images/28@2x.png"
        },
        {
          name: "排序",
          img: "/static/images/29@2x.png"
        }
      ],
      footList: [
        {
          img: "/static/images/26@2x.png",
          name: "写字楼"
        },
        {
          img: "/static/images/25@2x.png",
          name: "共享空间"
        },
        {
          img: "/static/images/24@2x.png",
          name: "公司简介"
        }
      ],
      imgUrls: [
        // {
        //   img: "/static/images/1.jpg",
        //   id: ""
        // },
        // {
        //   img: "/static/images/2.jpg",
        //   id: ""
        // }
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      sortList: [
        {
          name: "默认排序",
          orderBy: "total_price",
          orderSort: "DESC"
        },
        {
          name: "价格从低到高",
          orderBy: "total_price",
          orderSort: "ASC"
        },
        {
          name: "价格从高到低",
          orderBy: "total_price",
          orderSort: "DESC"
        },
        {
          name: "面积从小到大",
          orderBy: "area",
          orderSort: "ASC"
        },
        {
          name: "面积从大到小",
          orderBy: "area",
          orderSort: "DESC"
        }
      ],
      cityList: [
        {
          name: "北京",
          longitude: 114.06667,
          latitude: 39.91667
        },
        {
          name: "上海",
          longitude: 121.43333,
          latitude: 22.61667
        },
        {
          name: "广州",
          longitude: 113.23333,
          latitude: 34.5
        },
        {
          name: "深圳",
          longitude: 114.06667,
          latitude: 22.61667
        },
        {
          name: "成都",
          longitude: 104.06667,
          latitude: 30.66667
        }
      ],
      isLoadingList: false,
      showAreaBox: false,
      showPriceBox: false,
      showSortList: false,
      showAddressList: false,
      pageIndex: 1,
      pageSize: 10,
      latitude: "", // 用户目前纬度
      longitude: "", // 用户目前经度
      maxArea: "", // 最大面积
      maxTotalPrice: "", // 最大价格
      minArea: "", // 最小面积
      minTotalPrice: "", // 最小价格
      orderBy: "area", // 排序字段 = ['area', 'location', 'total_price'],
      orderSort: "ASC", // ['ASC', 'DESC'],
      listIsOver: false
    };
  },

  components: {},

  computed: {
    titleCity() {
      return store.state.titleCity;
    }
  },
  mounted() {
      
  },
  created() {
    this.landlordLogin();
  },
  methods: {
    getLocation() {
      var _this = this
      wx.getLocation({
        type: "wgs84",
        success: function(res) {
          console.log(res);
          var latitude = res.latitude; // 纬度
          var longitude = res.longitude; // 经度
          console.log("getLocation");
          _this.latitude = latitude;
          _this.longitude = longitude;
          // 深圳经纬度:(114.06667,22.61667)<br>
          //北京市市中心经纬度:(116.41667,39.91667)<br>
          //上海市区经纬度:(121.43333,34.50000)<br>
          //广州经纬度:(113.23333,23.16667)<br>
          //成都经纬度:(104.06667,30.66667)<br>
          var speed = res.speed;
          var accuracy = res.accuracy;
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function(res) {
              console.error(res);
              var result = res.result
              store.state.titleCity = result.address_component.city.substr(0,res.result.address_component.city.length - 1)
              var nation_code = result.ad_info.nation_code
              var index = nation_code.length
              var city_code = result.ad_info.city_code
              store.state.cityCode = city_code.substr(index,city_code.length)
            },
            fail: function(error) {
              // console.error(error);
            }
          });
        }
      });
    },
    handleAuthBtnClick () {
      console.log('授权按钮被点击')
      if (wx.canIUse('button.open-type.getUserInfo')) {
        // 用户版本可用
      } else {
        console.log('请升级微信版本')
      }
    },
    handleBindUserInfo (e) {
      let res = e.mp.detail
      if (res.errMsg == 'getUserInfo:fail auth deny') {
        console.log('用户拒绝授权')
        // this.getAccess('小程序需要获取用户权限，点击确认前往设置')
      } else {
        console.log('用户允许授权')
        this.isAuthUserinfo = true
        // wx.redirectTo({
        //     url: '/pages/landlord/landlordIndex/main?source=inner'
        // })
      }
    },
    brushConditionClick(item) {
      if (item.name === "面积") {
        this.showPriceBox = false;
        this.showSortList = false;
        this.showAddressList = false;
        this.showAreaBox = !this.showAreaBox;
      } else if (item.name === "价格") {
        this.showAreaBox = false;
        this.showSortList = false;
        this.showAddressList = false;
        this.showPriceBox = !this.showPriceBox;
      } else if (item.name === "位置") {
        this.showPriceBox = false;
        this.showAreaBox = false;
        this.showSortList = false;
        this.showAddressList = !this.showAddressList;
      } else if (item.name === "排序") {
        this.showPriceBox = false;
        this.showAreaBox = false;
        this.showAddressList = false;
        this.showSortList = !this.showSortList;
      }
    },
    lower(e) {
      if (this.isLoadingList || this.listIsOver) return;
      this.isLoadingList = true;
      this.getList();
    },
    sortPrimary(type) {
      this.listIsOver = false;
      this.pageIndex = 1;
      this.isLoadingList = true;
      this.officeList = [];
      this.showAreaBox = false;
      this.showPriceBox = false;
      this.getList();
    },
    reset(type) {
      if (type === "area") {
        this.maxArea = "";
        this.minArea = "";
      } else {
        this.maxTotalPrice = "";
        this.minTotalPrice = "";
      }
    },
    sortKindof(item) {
      // 排序
      this.showSortList = false;
      this.orderBy = item.orderBy;
      this.orderSort = item.orderSort;
      this.listIsOver = false;
      this.pageIndex = 1;
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
    },
    sortAddress(item) {
      // 城市
      this.orderBy = "location";
      this.showAddressList = false;
      this.latitude = item.latitude;
      this.longitude = item.longitude;
      this.listIsOver = false;
      this.pageIndex = 1;
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
    },
    landlordLogin() {
      var _this = this
      wx.showLoading({ title: "登录中..." });
      // let that = this
      wx.login({
        success: res => {
          wx.getSetting({
            success(res) {
              if (!res.authSetting['scope.userInfo']) {
                _this.isAuthUserinfo = false
              }else {
                _this.isAuthUserinfo = true
                _this.postWxInfo()
                
              }
            }
          })
          
          // 获取登录态成功
          console.log(res);
          if (res.code) {
            let reqUrl = _this.$API.USER.LOGIN + res.code;
            _this.$http
              .get(reqUrl, {})
              .then(({ data }) => {
                console.log('data')
                console.log(data)
                if (
                  data.status === 500 &&
                  data.msg.indexOf("Failed to find landlord data") !== -1
                ) {
                  // 未创建用户，去注册
                  wx.hideLoading();
                  wx.showToast({
                    title: "请先登录或注册!",
                    icon: "none"
                  });
                } else if (data.status === 403) {
                  wx.hideLoading();
                  wx.showToast({
                    title: "登录状态已过期, 请重新登录!",
                    icon: "none"
                  });
                } else if (data.status === 200) {
                  let resData = data.data.bussData;
                  // wx.setStorageSync('openId', resData.openId)
                  // wx.setStorageSync('sessionId', resData.sessionId)
                  wx.setStorageSync("sessionId", resData);
                  wx.hideLoading();
                  _this.getSipwer();
                  _this.getList();
                  _this.getLocation();
                  _this.getMobile();
                  // wx.setStorageSync('userId', resData.userId)
                }
              })
              .catch(error => {
                console.log(error, "error");
              });
          } else {
            console.log("获取用户登录态失败！" + res);
          }
        },
        fail(err) {
          console.log("landlord wx.login error: ", err);
        }
      });
    },
    postWxInfo() {
      var _this = this
      wx.getUserInfo({
        success(res2) {
          console.log('res2');
          console.log(res2);
          var rawData = JSON.parse(res2.rawData)
          let reqUrl = _this.$API.USER.SAVEWXUSERINFO;
          _this.$myRequest(reqUrl, {
            "encryptedData": res2.encryptedData,
            "iv": res2.iv
          }, {})
            .then(res => {
              if (res.data.status === 200) {
                
              }
            })
            .catch(error => {
              console.log("pdf 2 png error: ", error);
            });
        },
        fail(error) {
          console.log('error')
          console.log(error)
        }
      })
    },
    getSipwer() {
      let reqUrl = this.$API.BUSINESS.BANNER.BANNER;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if (bussData && bussData.length > 0) {
              bussData.forEach(element => {
                this.imgUrls.push({
                  img: element.coverUrl,
                  id: element.id
                });
              });
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    getList() {
      console.log("getList");
      let reqUrl = this.$API.BUSINESS.OFFICEROOM.PAGE;
      this.$myRequest(
        reqUrl,
        {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          latitude: this.latitude, // 用户目前纬度
          longitude: this.longitude, // 用户目前经度
          maxArea: this.maxArea, // 最大面积
          maxTotalPrice: this.maxTotalPrice, // 最大价格
          minArea: this.minArea, // 最小面积
          minTotalPrice: this.minTotalPrice, // 最小价格
          orderBy: this.orderBy, // 排序字段 = ['area', 'location', 'total_price'],
          orderSort: this.orderSort // ['ASC', 'DESC'],
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            this.isLoadingList = false;
            this.pageIndex++;
            let bussData = res.data.data.bussData;
            if (bussData && bussData.length > 0) {
              bussData.forEach(element => {
                this.officeList.push({
                  id: element.id,
                  buildingId: element.buildingId,
                  img: element.firstImage ? element.firstImage.fileUrl : "",
                  name: element.name,
                  size: element.area,
                  address: element.detailAddress,
                  money: element.totalPrice,
                  unit: element.unitPrice
                });
              });
              if(bussData.length < this.pageSize) {
                this.listIsOver = true;
              }
            } else if(bussData.length == 0){
              this.listIsOver = true;
            } else {
              this.listIsOver = true;
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    getMobile() {
      wx.showLoading({
        title: "加载中...",
        mask: true
      });
      let reqUrl = this.$API.USER.USER;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            console.log("bussData");
            console.log(bussData);
            if (!bussData.mobile) {
              const url = "../bindPhone/main";
              console.log(url);
              wx.navigateTo({ url });
            }
            wx.hideLoading();
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    jumpAddress() {
      const url = "../indexChooseCity/main";
      console.log(url);
      wx.navigateTo({ url });
    },
    jumpSearch() {
      const url = "../indexSreach/main";
      console.log(url);
      wx.navigateTo({ url });
    },
    jumpDetail(item) {
      const url = "../officeDetail/main?id=" + item.id;
      console.log(url);
      wx.navigateTo({ url });
    },
    jumpList(item) {
      if (item.name === "写字楼") {
        const url = "../officeBuildingList/main";
        console.log(url);
        wx.navigateTo({ url });
      }
    }
  }
};
</script>

<style scoped lang='less'>
.container {
  position: relative;
  margin-bottom: 0;
  .top {
    .head {
      height: 64px;
      line-height: 64px;
      text-align: center;
      .address {
        float: left;
        margin-left: 20px;
        span {
          font-size: 15px;
          font-family: PingFang-SC-Medium;
          color: #343434;
          margin-right: 5px;
        }
        img {
          width: 9px;
          height: 5px;
          vertical-align: middle;
        }
      }
      .icon {
        margin: 5px auto;
        display: inline-block;
        height: 20px;
        img {
          height: 20px;
          width: 76px;
        }
      }
      .sreach {
        float: right;
        margin-right: 28px;
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
    .middle {
      height: 180px;
      swiper {
        height: 180px;
        swiper-item {
          img {
            height: 180px;
            width: 100%;
          }
        }
      }
    }
    .foot {
      display: flex;
      height: 120px;
      div {
        flex: 1;
        img {
          width: 59px;
          height: 59px;
          display: block;
          margin: 20px auto 12px;
        }
        p {
          font-size: 12px;
          font-family: PingFang-SC-Medium;
          color: #000;
          text-align: center;
        }
      }
    }
  }
  > .middle {
    height: 8px;
    background-color: #f7f7f7;
  }
  .foot {
    .head {
      display: flex;
      height: 43px;
      line-height: 43px;
      border-bottom: 1px solid #f0f0f0;
      div {
        flex: 1;
        text-align: center;
        span {
          font-family: PingFang-SC-Regular;
          font-size: 12px;
          color: #666;
        }
        img {
          width: 9px;
          height: 5px;
          vertical-align: middle;
          margin-left: 5px;
        }
        &:last-child {
          img {
            height: 10px;
          }
        }
      }
    }
    .hide {
      // position: absolute;
      // top: 415px;
      // left: 0;
      width: 100%;
      z-index: 2;
      ul {
        box-shadow: 0px 2px 2px #999;
        li {
          height: 41px;
          line-height: 41px;
          color: #333333;
          font-family: PingFang-SC-Medium;
          font-size: 12px;
          text-align: center;
          border-top: 1px solid #e1e1e1;
          background: #fff;
          &:first-child {
            border: none;
          }
        }
      }
      .formBox {
        background: #fff;
        box-shadow: 0px 2px 2px #999;
        .inputBox {
          padding-top: 20px;
          margin: 0px 20px 40px 20px;
          input {
            background-color: #fbfbfb;
            border: 1px solid #e1e1e1;
            color: #333;
            font-size: 15px;
            font-family: PingFang-SC-Regular;
            display: inline-block;
            width: 110px;
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
          .line {
            height: 1px;
            display: inline-block;
            width: 27px;
            background: #e1e1e1;
            margin: 0 15px;
            position: relative;
            top: -20px;
          }
          .unit {
            margin-left: 15px;
            font-family: PingFang-SC-Regular;
            color: #000;
            font-size: 15px;
            position: relative;
            top: -17px;
          }
        }
        .btn-box {
          display: flex;
          border-top: 1px solid #e1e1e1;
          a {
            flex: 1;
            height: 41px;
            line-height: 41px;
            text-align: center;
            font-family: PingFang-SC-Regular;
            font-size: 15px;
            &:first-child {
              color: #000;
              border-right: 1px solid #e1e1e1;
            }
            &:last-child {
              color: #16509b;
              margin-top: 0;
            }
          }
        }
      }
    }
    .middle {
      ul {
        margin: 0 15px;
        li {
          position: relative;
          margin: 15px 0 10px;
          > img {
            width: 100%;
            height: 190px;
            border: 1px solid transparent;
            border-radius: 5px;
          }
          .size {
            position: absolute;
            width: 63px;
            height: 27px;
            line-height: 24px;
            background-color: #000;
            opacity: 0.5;
            border: 1px solid transparent;
            border-radius: 13px;
            left: 273px;
            top: 145px;
            text-align: center;
            img {
              width: 11px;
              height: 11px;
              margin-right: 5px;
            }
            span {
              font-family: PingFang-SC-Medium;
              font-size: 10px;
              color: #fff;
            }
          }
          > p {
            font-family: PingFang-SC-Bold;
            font-size: 15px;
            color: #333;
            margin: 15px 0 10px;
            span {
              font-family: PingFang-SC-Regular;
              font-size: 12px;
              color: #999;
            }
            .unit {
              margin-left: 8px;
            }
          }
          .foot-child {
            // height: 30px;
            line-height: 30px;
            .address {
              width: 60%;
              float: left;
              img {
                width: 9px;
                height: 12px;
                float: left;
                margin-right: 6px;
                position: relative;
                top: 9px;
              }
              p {
                font-family: PingFang-SC-Regular;
                font-size: 12px;
                color: #999;
              }
            }
            > p {
              float: right;
              width: 35%;
              span {
                font-family: PingFang-SC-Regular;
                font-size: 12px;
                color: #999;
              }
              .money {
                font-family: PingFang-SC-Bold;
                font-size: 19px;
                color: #f90432;
              }
            }
          }
        }
      }
    }
  }
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
}
</style>
