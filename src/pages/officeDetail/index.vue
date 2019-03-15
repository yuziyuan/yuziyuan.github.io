<template>
  <div class="container" v-if="isloading" :class='{"notHavePadding":!isIphone}'>
    <div class="top">
      <div>
        <swiper class="swiper-box" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color='#F90432' indicator-color='#ffffff'>
          <block v-for="(item, index) in detail.imgUrls" :key='index'>
            <swiper-item>
              <img :src="item" alt="" mode='aspectFill' @click='lookImg(item)'>
            </swiper-item>
          </block>
        </swiper>
        <div class="collection" @click='collAndUncoll'>
          <img :src="detail.collectionStatus" alt="">
        </div>
        <div class="size">
          <img src="/static/images/42@2x.png" alt="">
          <span>{{detail.size}}㎡</span>
        </div>
        <div class='unitAndMoney clear'>
          <p>{{detail.name}}
            <span class='unit'>{{detail.unit}}</span>
            <span>元/㎡</span>
          </p>
          <p>
            <span class='money'>{{"￥ "+detail.money}}</span>
            <span>元/月</span>
          </p>
        </div>
        <div style="height:1px;"></div>
        <div class="btn-box clear">
          <button v-for="(item, index) in detail.advantageList" :key='index'>{{item}}</button>
        </div>
        <div class="foot-child clear">
          <div class="address">
            <img src="/static/images/48@2x.png" alt="">
            <p>{{detail.address}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="midlle"></div>
    <div class="foot">
      <div class="houseDetail">
        <div class="one">
          <h3 class="title">
            <i></i>
            房源详情
          </h3>
          <div class="content clear">
            <div>
              <span>
                房 号：
              </span>
              <span>{{detail.houseDetailNum}}</span>
            </div>
            <div>
              <span>
                工 位：
              </span>
              <span>{{detail.houseDetailWorkstation?detail.houseDetailWorkstation+'个':'暂无数据'}}</span>
            </div>
            <div>
              <span>
                面 积：
              </span>
              <span>{{detail.houseDetailAcreage?detail.houseDetailAcreage:'暂无数据'}}</span>
            </div>
            <div>
              <span>
                装修情况：
              </span>
              <span>{{detail.houseDetailDecoration?detail.houseDetailDecoration:'暂无数据'}}</span>
            </div>
            <div>
              <span>
                格 局：
              </span>
              <span>{{detail.houseDetailPattern?detail.houseDetailPattern:'暂无数据'}}</span>
            </div>
            <div>
              <span>
                管 理 费：
              </span>
              <span>{{detail.houseDetailManagementExpense?detail.houseDetailManagementExpense:'暂无数据'}}</span>
            </div>
            <div>
              <span>
                朝 向：
              </span>
              <span>{{detail.houseDetailOrientation?detail.houseDetailOrientation:'暂无数据'}}</span>
            </div>
            <div>
              <span>
                空 调 费：
              </span>
              <span>{{detail.houseDetailAirConditionFee?detail.houseDetailAirConditionFee:'暂无数据'}}</span>
            </div>
          </div>
        </div>
        <div class="two">
          <h3 class="title">
            <i></i>
            房源介绍
          </h3>
          <div class="content">
            <!-- <p>{{}}</p> -->
            <rich-text class='p' :nodes='detail.houseIntroduction'></rich-text>
          </div>
        </div>
        <div class="three">
          <h3 class="title" v-show="detail.houseVideo">
            <i></i>
            房源视频
          </h3>
          <div class="content">
            <video v-show="detail.houseVideo" id="myVideo" @fullscreenchange='fullscreenchange' :src="detail.houseVideo" controls></video>
            <map id="map" @tap='tapMap' :longitude="detail.longitude" :latitude="detail.latitude" scale="14" :markers="markers" :polyline="polyline" show-location style="width: 100%; height: 200px;">
              <!-- <cover-view>
              <cover-image class="img" src="/static/images/3@2x.png" />
            </cover-view> -->
            </map>
          </div>
        </div>
      </div>
      <cover-view v-show='!isMake && !isFullScreen' class='make' @click='jumpMakeP'>
        预约看房
      </cover-view>
      <button v-show='!isMake && isFullScreen' class='make' @click='jumpMakeP'>
        预约看房
      </button>
      <cover-view v-show='isMake' class='maked'>
        已预约
      </cover-view>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import QQMapWX from "../../utils/qqmap";
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key: "MJSBZ-N7NCJ-6SYFC-F6JNJ-J76R7-A4BYI"
});
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      detail: {
        imgUrls: [],
        collectionStatus: "",
        isCollected: "",
        name: "",
        size: "",
        houseDetailNum: "",
        houseDetailWorkstation: "",
        houseDetailAcreage: "",
        houseDetailDecoration: "",
        houseDetailPattern: "",
        houseDetailManagementExpense: "",
        houseDetailOrientation: "",
        houseDetailAirConditionFee: "",
        houseIntroduction: "",
        houseVideo: "",
        houseMap: "",
        address: "",
        money: "",
        latitude: "",
        longitude: "",
        unit: "",
        advantageList: []
      },
      officeId: "",
      isMake: false,
      isloading: false,
      latitude: "",
      longitude: "",
      markers: [],
      polyline: [],
      isFullScreen: false,
      mapTitile1: '',
      mapTitile2: ''
    };
  },
  computed: {
    isIphone() {
      return store.state.isIphone
    },
  },
  components: {},
  mounted() {
    this.officeId = this.$root.$mp.query.id;
    this.getDetail();

    this.isMake = this.$root.$mp.query.isAppoint;
  },
  methods: {
    lookImg(item) {
      if (this.detail.imgUrls.length > 0) {
        wx.previewImage({
          current: item, // 当前显示图片的http链接
          urls: this.detail.imgUrls // 需要预览的图片http链接列表
        });
      }
    },
    fullscreenchange(e) {
      console.log(e);
      this.isFullScreen = e.target.fullScreen;
    },
    getLocation() {
      var _this = this;
      console.log(_this.detail.latitude)
      console.log(_this.detail.longitude)
      _this.markers = [
        {
          iconPath: "/static/images/map.png",
          id: 0,
          // latitude: 23.099994,
          // longitude: 113.32452,
          latitude: _this.detail.latitude,
          longitude: _this.detail.longitude,
          width: 18,
          height: 18
        }
      ];
      wx.getLocation({
        type: "gcj02",
        success: function(res2) {
          console.log('res2')
          console.log(res2)
          _this.polyline = [
            {
              points: [
                {
                  longitude: _this.detail.longitude,
                  latitude: _this.detail.latitude
                },
                {
                  longitude: res2.longitude,
                  latitude: res2.latitude
                },
              ],
              color: "#FF0000DD",
              width: 2,
              dottedLine: true
            }
          ];
          
          console.log( _this.markers)
          console.log( _this.polyline)
        },
        fail: function(error) {}
      });
    },
    tapMap() {
      var _this = this
      console.log(_this.detail.latitude)
      console.log(_this.detail.longitude)
      console.log(_this.mapTitile1)
      console.log(_this.mapTitile2)
      wx.showModal({
        title: '提示',
        content: '是否打开本地地图？',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.openLocation({//​使用微信内置地图查看位置。
              latitude: _this.detail.latitude,//要去的纬度-地址
              longitude: _this.detail.longitude,//要去的经度-地址
              name: _this.mapTitile1,
              address:_this.mapTitile2
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    preImg() {
      wx.previewImage({
        current: this.houseMap, // 当前显示图片的http链接
        urls: [this.houseMap] // 需要预览的图片http链接列表
      });
    },
    getDetail() {
      wx.showLoading({ title: "加载中" });
      let reqUrl = this.$API.BUSINESS.OFFICEROOM.DETIAL + this.officeId;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            this.isloading = true;
            wx.hideLoading();
            let bussData = res.data.data.bussData;
            if (bussData) {
              this.detail = {
                imgUrls: bussData.images.map(item => {
                  return item.fileUrl;
                }),
                collectionStatus: bussData.isCollected
                  ? "/static/images/coll1.png"
                  : "/static/images/coll0.png",
                isCollected: bussData.isCollected,
                name: bussData.name,
                size: bussData.area,
                houseDetailNum: bussData.roomNo,
                houseDetailWorkstation: bussData.seat,
                houseDetailAcreage: bussData.area + "㎡",
                houseDetailDecoration: bussData.decoration,
                houseDetailPattern: bussData.structure,
                houseDetailManagementExpense: bussData.managementFee + "元/㎡",
                houseDetailOrientation: bussData.face,
                houseDetailAirConditionFee: bussData.airConditionerFee,
                // houseIntroduction: bussData.introduce,
                houseIntroduction: this.getRichText(bussData.introduce),
                houseVideo: bussData.videoUrl,
                houseMap: "/static/images/map.jpg",
                address: bussData.detailAddress,
                money: bussData.totalPrice,
                unit: bussData.unitPrice,
                latitude: bussData.latitude,
                longitude: bussData.longitude,
                advantageList: bussData.tags.map(item => {
                  return item.name;
                })
                
              };
              this.mapTitile1 = bussData.name;
              this.mapTitile2 = bussData.detailAddress;
              this.getLocation();
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    getRichText(p) {
      var p0
      var r1 = '<font'
      var r2 = "</font"
      if (p) {
        p0 = p.replace(/<font/g,'<span').replace(/\/font>/g,'/span>')
      } 
      console.log(p0)
      console.log(p)
      return p0
    },
    collAndUncoll() {
      let reqUrl = this.$API.BUSINESS.USER.COLLECT + this.officeId;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if (bussData) {
              if (this.detail.isCollected) {
                this.detail.collectionStatus = "/static/images/coll0.png";
                this.detail.isCollected = !this.detail.isCollected;
              } else {
                this.detail.collectionStatus = "/static/images/coll1.png";
                this.detail.isCollected = !this.detail.isCollected;
              }
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    jumpMakeP() {
      const url = "../makeAnAppoint/main?id=" + this.officeId;
      wx.navigateTo({ url });
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
  padding-bottom: 50px;
  .top {
    margin: 15px;
    position: relative;
    swiper {
      height: 190px;
      swiper-item {
        img {
          height: 190px;
          width: 100%;
        }
      }
    }
    .collection {
      position: absolute;
      width: 38px;
      height: 38px;
      line-height: 46px;
      background-color: #000;
      opacity: 0.5;
      border: 1px solid transparent;
      border-radius: 50%;
      right: 15px;
      top: 15px;
      text-align: center;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .btn-box {
      button {
        float: left;
        display: inline-block;
        padding: 5px 11px;
        // border: 1px solid #999999;
        color: #999999;
        border-radius: 2px;
        margin-top: 10px;
        margin-right: 10px;
        line-height: 1;
        background-color: #fff;
        font-size: 10px;
      }
    }
    .unitAndMoney {
      min-height: 30px;
      line-height: 30px;
      margin: 15px 0 5px;
      p {
        &:first-child {
          // float: left;
          // width: 60%;
          font-family: PingFang-SC-Bold;
          font-size: 15px;
          color: #333;
          span {
            font-family: PingFang-SC-Regular;
            font-size: 12px;
            color: #999;
          }
          .unit {
            margin-left: 8px;
          }
        }
        &:last-child {
          // float: left;
          // text-align: right;
          // width: 35%;
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
    .foot-child {
      margin-top: 15px;
      .address {
        img {
          width: 9px;
          height: 12px;
          float: left;
          margin-right: 6px;
          position: relative;
          top: 3px;
        }
        p {
          font-family: PingFang-SC-Regular;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .middle {
    height: 10px;
    background-color: #f4f4f4;
  }
  .foot {
    margin: 20px 15px;
    .houseDetail {
      div {
        h3 {
          font-family: PingFang-SC-Medium;
          color: #333;
          font-size: 15px;
          margin-bottom: 15px;
          height: 15px;
          line-height: 15px;
          i {
            display: inline-block;
            height: 14px;
            width: 1px;
            background-color: #16509b;
            margin-right: 6px;
          }
        }
        .content {
          margin-bottom: 20px;
        }
      }
      .one {
        .content {
          div {
            float: left;
            width: 50%;
            span {
              &:first-child {
                font-family: PingFang-SC-Regular;
                color: #666;
                font-size: 12px;
              }
              &:last-child {
                font-family: PingFang-SC-Regular;
                color: #333;
                font-size: 12px;
              }
            }
          }
        }
      }
      .two {
        .content {
          p,.p {
            font-family: PingFang-SC-Regular;
            color: #000;
            font-size: 12px;
            line-height: 24px;
            margin-left: 3px;
          }
        }
      }
      .three {
        .content {
          video {
            width: 100%;
            height: 195px;
            margin-bottom: 15px;
          }
          img {
            width: 100%;
            height: 199px;
          }
        }
      }
    }
    cover-view,
    button {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 49px;
      line-height: 49px;
      color: #fff;
      font-family: PingFang-SC-Medium;
      font-size: 17px;
      text-align: center;
      border-radius: 0;
      z-index: 9999;
    }
    .make {
      background-color: #16509b;
    }
    .maked {
      background-color: #b1b1b1;
    }
  }
}
.notHavePadding{
  padding-bottom: 0;
}
</style>
