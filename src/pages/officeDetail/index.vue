<template>
  <div class="container" v-if="isloading">
    <div class="top">
      <div>
        <swiper class="swiper-box" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color='#F90432' indicator-color='#ffffff'>
          <block v-for="(item, index) in detail.imgUrls" :key='index'>
            <swiper-item>
              <img :src="item" alt="" mode='aspectFill'>
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
              <span>{{detail.houseDetailWorkstation+'个'}}</span>
            </div>
            <div>
              <span>
                面 积：
              </span>
              <span>{{detail.houseDetailAcreage}}</span>
            </div>
            <div>
              <span>
                装修情况：
              </span>
              <span>{{detail.houseDetailDecoration}}</span>
            </div>
            <div>
              <span>
                格 局：
              </span>
              <span>{{detail.houseDetailPattern}}</span>
            </div>
            <div>
              <span>
                管 理 费：
              </span>
              <span>{{detail.houseDetailManagementExpense}}</span>
            </div>
            <div>
              <span>
                朝 向：
              </span>
              <span>{{detail.houseDetailOrientation}}</span>
            </div>
            <div>
              <span>
                空 调 费：
              </span>
              <span>{{detail.houseDetailAirConditionFee}}</span>
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
          <h3 class="title">
            <i></i>
            房源视频
          </h3>
          <div class="content">
            <video id="myVideo" :src="detail.houseVideo" controls></video>
            <img v-for="(item, index) in detail.imgUrls" :key='index' :src="item" alt="" @click='preImg'>
          </div>
        </div>
      </div>
      <cover-view v-show='!isMake' class='make' @click='jumpMakeP'>
        预约看房
      </cover-view>
      <cover-view v-show='isMake' class='maked'>
        已预约
      </cover-view>
    </div>
  </div>
</template>

<script>
import store from "@/store";
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
        isCollected: '',
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
        houseIntroduction:'',
        houseVideo:'',
        houseMap: "",
        address:"",
        money: "",
        unit: "",
        advantageList: []
      },
      officeId: '',
      isMake: false,
      isloading: false
    };
  },

  components: {},
  mounted() {
    this.officeId = this.$root.$mp.query.id
    this.getDetail()

    this.isMake = this.$root.$mp.query.isAppoint
  },
  methods: {
    preImg() {
      wx.previewImage({
        current: this.houseMap, // 当前显示图片的http链接
        urls: [this.houseMap] // 需要预览的图片http链接列表
      })
    },
    getDetail() {
      wx.showLoading({ title: "加载中" });
      let reqUrl = this.$API.BUSINESS.OFFICEROOM.DETIAL+this.officeId;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            this.isloading = true
            wx.hideLoading();
            let bussData = res.data.data.bussData;
            if (bussData) {
              this.detail = {
                imgUrls: bussData.images.map((item)=>{
                  return item.fileUrl
                }),
                collectionStatus: bussData.isCollected? "/static/images/coll1.png":"/static/images/coll0.png",
                isCollected: bussData.isCollected,
                name: bussData.name,
                size: bussData.area,
                houseDetailNum: bussData.roomNo,
                houseDetailWorkstation: bussData.seat,
                houseDetailAcreage: bussData.area+"㎡",
                houseDetailDecoration: bussData.decoration,
                houseDetailPattern: bussData.structure,
                houseDetailManagementExpense: bussData.managementFee+"元/㎡",
                houseDetailOrientation: bussData.face,
                houseDetailAirConditionFee: bussData.airConditionerFee+"元/㎡",
                houseIntroduction:
                  bussData.introduce,
                houseVideo:bussData.videoUrl,
                houseMap: "/static/images/map.jpg",
                address:
                  bussData.detailAddress,
                money: bussData.totalPrice,
                unit: bussData.unitPrice,
                advantageList: bussData.tags.map((item)=>{
                  return item.name
                }),
              }
              console.log('this.detail')
              console.log(this.detail)
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    collAndUncoll(){
      let reqUrl = this.$API.BUSINESS.USER.COLLECT+this.officeId;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            console.log(bussData)
            if(bussData) {
              if(this.detail.isCollected) {
                this.detail.collectionStatus = "/static/images/coll0.png"
                this.detail.isCollected = !this.detail.isCollected
              }else {
                this.detail.collectionStatus = "/static/images/coll1.png"
                this.detail.isCollected = !this.detail.isCollected
              }
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    jumpMakeP() {
      const url = "../makeAnAppoint/main?id="+this.officeId;
      console.log(url);
      wx.navigateTo({ url });
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
  margin-bottom: 50px;
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
      height: 30px;
      line-height: 30px;
      margin: 15px 0 5px;
      p {
        &:first-child {
          float: left;
          width: 60%;
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
    cover-view{
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
    }
    .make{
      background-color: #16509B;
    }
    .maked{
      background-color:#B1B1B1;
    }
  }
}
</style>
