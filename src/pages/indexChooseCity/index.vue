<template>
  <div class="container" v-show="!isloadingCity">
    <div class="top">
      <div class="success" v-show="chooseStatus">
        <p><img src="/static/images/48@2x.png" alt="">定位</p>
        
        <!-- <span>当前定位城市</span> -->
        <span class='city' @click='jumpIndex2'>{{titleCity}}</span>

        <div class='reset' @click='getLocation' v-show="!chooseStatus2 && chooseStatus">
          <img src="/static/images/12@2x.png" alt="">
          <span>重新定位</span>
        </div>
        <!-- <div class="ing" v-show="chooseStatus2">
          <img src="/static/images/48@2x.png" alt="">
          <span>定位中</span>
        </div> -->
      </div>
      <div class="close" v-show="!chooseStatus">
        <div>
          <img :src="img1" alt="">
          <span>{{p1}}</span>
        </div>
        <p class='bold'>{{p2}}</p>
        <p>{{p3}}</p>
      </div>
      <!-- <div class="ing" v-show="status3">
        <img src="/static/images/48@2x.png" alt="">
        <span>定位中</span>
      </div> -->
    </div>
    <div class="middle"></div>
    <div class="foot">
      <ul>
        <li v-for="(item, index) in list" :key='index'>
          <span>{{item.codeName}}</span>
          <a class="weui-btn weui-btn_plain-default" v-for="(item2, index2) in item.cityList" :key='index2' @click='jumpIndex(item2)'>{{item2.codeName}}</a>
        </li>
      </ul>
      <!-- <span>已开通城市</span> -->
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
      openedCityList: [
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
      list: store.state.cityList,
      // isloadingCity: true
      p1: '重新定位',
      p2: '定位服务已关闭 去设置',
      p3: '请到设置>隐私>定位服务中打开定位权限',
      img1: '/static/images/12@2x.png',
    };
  },
  computed: {
    titleCity() {
      return store.state.titleCity;
    },
    chooseStatus() {
      return store.state.chooseStatus
    },
    chooseStatus2() {
      return store.state.chooseStatus2
    },
    isloadingCity() {
      return store.state.isloadingCity
    },
  },
  components: {},
  
  mounted() {
    wx.showLoading({ 
      title: "加载中..." ,
      mask: true
    });
    this.getLocation();
  },
  created() {
    // this.getLocation();
  },
  methods: {
    jumpIndex(item) {
      this.formSubmit(item);
    },
    getLocation() {
      var _this = this 
      store.state.chooseStatus = true
      store.state.chooseStatus2 = true
      wx.getLocation({
        type: "gcj02",
        success: function(res) {
          var latitude = res.latitude; // 纬度
          var longitude = res.longitude; // 经度
          var speed = res.speed;
          var accuracy = res.accuracy;
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function(res) {
              var city = res.result.address_component.city.substr(
                0,
                res.result.address_component.city.length - 1
              );
              store.state.titleCity = city
              store.state.chooseStatus = true
              store.state.chooseStatus2 = false //定位成功
              store.state.isloadingCity= false
              wx.hideLoading();
            },
            fail: function(error) {
              wx.hideLoading();
            }
          });
        },
        fail(error) {
          store.state.chooseStatus = false//定位失败
          store.state.isloadingCity= false
          wx.hideLoading();
        }
      });
    },
    jumpIndex2() {
      var _this = this;
      //调用地址解析接口
      qqmapsdk.geocoder({
        //获取表单传入地址
        address: _this.titleCity, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
        success: function(res) {
          //成功后的回调
          var res = res.result;
          var latitude = res.location.lat;
          var longitude = res.location.lng;
          store.state.latitude = res.location.lat;
          store.state.longitude = res.location.lng;
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: latitude,
              longitude: longitude
            },
            success: function(res) {
              console.error(res);
              var result = res.result
              store.state.titleCity = result.address_component.city.substr(0,res.result.address_component.city.length - 1)
              var nation_code = result.ad_info.nation_code
              var index = nation_code.length
              var city_code = result.ad_info.city_code
              store.state.cityCode = city_code.substr(index,city_code.length)
              
              if(store.state.titleCity.indexOf('北京')> -1){
                store.state.cityCode = '110100'
              }else if(store.state.titleCity.indexOf('天津')> -1){
                store.state.cityCode = '120100'
              }else if(store.state.titleCity.indexOf('上海')> -1){
                store.state.cityCode = '310100'
              }else if(store.state.titleCity.indexOf('重庆')> -1){
                store.state.cityCode = '500100'
              }
              wx.navigateBack();
            },
            fail: function(error) {
              // console.error(error);
            }
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
    formSubmit(item) {
      var _this = this;
      //调用地址解析接口
      qqmapsdk.geocoder({
        //获取表单传入地址
        address: item.codeName, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
        success: function(res) {
          //成功后的回调
          var res = res.result;
          var latitude = res.location.lat;
          var longitude = res.location.lng;

          store.state.titleCity = item.codeName;
          store.state.cityCode = item.codeId;
          store.state.latitude = res.location.lat;
          store.state.longitude = res.location.lng;
          wx.navigateBack();
        },
        fail: function(error) {
          console.error(error);
          wx.showToast({
            title: error.message,
            icon: "none"
          });
        },
        complete: function(res) {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style scoped lang='less'>
.container {
  .top {
    margin-left: 15px;
    .success {
      .city {
        margin-left: 6px;
        font-family: PingFang-SC-Regular;
        color: #333;
        font-size: 14px;
        border:1px solid #e1e1e1;
        padding:4px 9px;
        margin-right:10px;
        border-radius: 5px;

      }
      p{
        display: block;
        font-family: PingFang-SC-Regular;
        color: #999;
        font-size: 12px;
        >img {
          width: 11px;
          height: 14px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
      .reset{
        height: 40px;
        line-height: 40px;
        display: inline-block;
        margin-right: 10px;
        img {
          width: 16px;
          height: 11px;
          vertical-align: middle;
          margin-right: 5px;
        }
        span {
          font-family: PingFang-SC-Regular;
          font-size: 12px;
          color: #999;
        }
      }
      .ing{
        height: 40px;
        line-height: 40px;
        display: inline-block;
        padding: 4px 9px;
        background: #e1e1e1;
        border-radius: 5px;
        img {
          width: 11px;
          height: 14px;
          vertical-align: middle;
          margin-right: 5px;
        }
        span {
          font-family: PingFang-SC-Regular;
          font-size: 15px;
          color: #333;
        }
      }
    }
    .close {
      div {
        height: 40px;
        line-height: 40px;
        img {
          width: 16px;
          height: 11px;
          vertical-align: middle;
          margin-right: 5px;
        }
        span {
          font-family: PingFang-SC-Regular;
          font-size: 15px;
          color: #333;
        }
      }
      p {
        font-family: PingFang-SC-Regular;
        font-size: 12px;
        color: #999;
        margin-bottom: 20px;
      }
      .bold {
        font-family: PingFang-SC-Medium;
        font-size: 15px;
        color: #333;
        margin: 10px 0 5px;
      }
    }
    .ing {
      height: 40px;
      line-height: 40px;
      img {
        width: 11px;
        height: 14px;
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
        font-family: PingFang-SC-Regular;
        font-size: 15px;
        color: #999;
      }
    }
  }
  .middle {
    height: 10px;
    background-color: #f4f4f4;
  }
  .foot {
    margin: 15px;
    span {
      display: block;
      font-family: PingFang-SC-Regular;
      color: #999;
      font-size: 12px;
    }
    a {
      display: inline-block;
      width: 75px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      background-color: #f4f4f4;
      border: none;
      border-radius: 2px;
      font-family: PingFang-SC-Regular;
      color: #333;
      font-size: 15px;
      margin-right: 10px;
      margin-top: 15px;
      &:hover {
        background-color: #dcd9d9;
      }
    }
  }
}
</style>
