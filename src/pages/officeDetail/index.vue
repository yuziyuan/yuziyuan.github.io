<template>
  <div class="container" v-if="isloading">
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
            <p>{{detail.houseIntroduction}}</p>
          </div>
        </div>
        <div class="three">
          <h3 class="title" v-show="detail.houseVideo">
            <i></i>
            房源视频
          </h3>
          <div class="content">
            <video v-show="detail.houseVideo" id="myVideo" @fullscreenchange='fullscreenchange' :src="detail.houseVideo" controls></video>
            <map id="map" @tap='tapMap' :longitude="longitude" :latitude="latitude" scale="14" :markers="markers" :polyline="polyline" show-location style="width: 100%; height: 200px;">
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
        imgUrls: [
          "/static/images/1.jpg",
          "/static/images/2.jpg",
          "/static/images/3.jpg"
        ],
        collectionStatus: "/static/images/coll0.png",
        name: "A栋203室",
        size: "132",
        houseDetailNum: "301",
        houseDetailWorkstation: "120个",
        houseDetailAcreage: "100㎡",
        houseDetailDecoration: "精装",
        houseDetailPattern: "正方形",
        houseDetailManagementExpense: "15元/㎡",
        houseDetailOrientation: "坐北朝南",
        houseDetailAirConditionFee: "8元/㎡",
        houseIntroduction:
          "项目位于龙岗区龙城街道盛龙路与碧新路交叉口东南，总建筑面积约30万平，分两期开发，一期由底商、一栋人才公寓和2座住宅组成，其中住宅面积段建面约为75-89平，商业面积段建面约为36-72平。开发商是远洋地产控股有限公司，香港上市的国内前十五的开发商，有国企背景且之前是开发别墅项目的。",
        houseVideo:
          "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        houseMap: "/static/images/map.jpg",
        address:
          "南山区粤海街道科慧路1号沛鸿大厦A2506南山区粤海街道科慧路1号沛鸿大厦A2506南山区粤海街道科慧路1号沛鸿大厦A2506南山区粤海街道科慧路1号沛鸿大厦A2506",
        money: "123451",
        unit: "3000",
        advantageList: [
          "共享办公",
          "商务繁华",
          "周边配套设施完善",
          "车位充足",
          "车位充足"
        ]
      },
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
      controls: [
        // {
        //   id: 1,
        //   iconPath: "/static/images/3@2x.png",
        //   position: {
        //     left: 0,
        //     top: 300 - 50,
        //     width: 50,
        //     height: 50
        //   },
        //   clickable: true
        // }
      ],
      isFullScreen: false,
      mapTitile: ''
    };
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
      //调用地址解析接口
      qqmapsdk.geocoder({
        //获取表单传入地址
        address: _this.detail.address, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
        success: function(res) {
          //成功后的回调
          console.log("1112");
          console.log(res);
          var res = res.result;
          _this.latitude = res.location.lat;
          _this.longitude = res.location.lng;
          _this.mapTitile = res.title;
          _this.markers = [
            {
              iconPath: "/static/images/map.png",
              id: 0,
              // latitude: 23.099994,
              // longitude: 113.32452,
              latitude: res.location.lat,
              longitude: res.location.lng,
              width: 18,
              height: 18
            }
          ];
          wx.getLocation({
            type: "gcj02",
            success: function(res2) {
              var latitude = res2.latitude; // 纬度
              var longitude = res2.longitude; // 经度
              _this.polyline = [
                {
                  points: [
                    {
                      longitude: res.location.lng,
                      latitude: res.location.lat
                    },
                    {
                      longitude: longitude,
                      latitude: latitude
                    }
                  ],
                  color: "#FF0000DD",
                  width: 2,
                  dottedLine: true
                }
              ];
            },
            fail: function(error) {}
          });
        },
        fail: function(error) {
          console.error(error);
        },
        complete: function(res) {
          console.log(res);
        }
      });
    },
    tapMap() {
      var _this = this
      console.log(_this.latitude)
      console.log(_this.longitude)
      wx.showModal({
        title: '提示',
        content: '是否打开本地地图？',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.openLocation({//​使用微信内置地图查看位置。
              latitude: _this.latitude,//要去的纬度-地址
              longitude: _this.longitude,//要去的经度-地址
              name: _this.mapTitile,
              address:_this.mapTitile
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
                houseIntroduction: bussData.introduce,
                houseVideo: bussData.videoUrl,
                houseMap: "/static/images/map.jpg",
                address: bussData.detailAddress,
                money: bussData.totalPrice,
                unit: bussData.unitPrice,
                advantageList: bussData.tags.map(item => {
                  return item.name;
                })
              };
              this.getLocation();
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
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
          p {
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
</style>
