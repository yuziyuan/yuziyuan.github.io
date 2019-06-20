<template>
  <!-- <scroll-view scroll-y class="container" @scroll="scrollContainer" style="height: 100vh;" scroll-top="scrollTop" @scrolltolower="lower"> -->
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
              <div class="img-bg" :style="{'background':'url('+item.img+') center;','background-size':'100%;'}"
              ></div>
              <!-- <img :src="item.img" alt="" mode='aspectFill'> -->
              <!-- <canvas style="width: 750rpx; height:380rpx;" :canvas-id="'myCanvas'+index"></canvas> -->
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
      <div class="head" :class='{"abso": isIphone &&(scrollY > 300)&&officeList.length > 2}'>
        <div :class='{"active":brushConditionListIndex == 0}'  @click='brushConditionClick({name: "所有房源"},0)'>
          <span>所有房源</span>
          <img src="" alt="">
        </div>
        <div :class='{"active":brushConditionListIndex == 1}'  @click='brushConditionClick({name: "面积"},1)'>
          <span>面积</span>
          <img src="/static/images/28@2x.png" alt="">
        </div>
        <div :class='{"active":brushConditionListIndex == 2}'  @click='brushConditionClick({name: "位置"},2)'>
          <!-- <span>位置</span> -->
          <!-- <picker mode="region" @change="bindRegionChange" value="region" :custom-item="customItem">
            <view class="picker">
              位置
            </view>
          </picker> -->
          <picker mode="multiSelector" 
          @change="bindMultiPickerChange" 
          @columnchange="bindMultiPickerColumnChange" 
          :value="multiIndex" 
          :range="multiArray"
          :range-key="'value'">
            <view class="picker">
              位置
              <!-- 当前选择：{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}} -->
            </view>
          </picker>

          <img src="/static/images/28@2x.png" alt="">
        </div>
        <div :class='{"active":brushConditionListIndex == 3}'  @click='brushConditionClick({name: "价格"},3)'>
          <span>价格</span>
          <img src="/static/images/28@2x.png" alt="">
        </div>
        <div :class='{"active":brushConditionListIndex == 4}'  @click='brushConditionClick({name: "排序"},4)'>
          <span>排序</span>
          <img src="/static/images/29@2x.png" alt="">
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
            <span class='unit unit1'>总价</span>
            <input type="number" v-model="minTotalPrice">
            <span class='line'></span>
            <input type="number" v-model="maxTotalPrice">
            <span class='unit'>元/月</span>
          </div>
          <div class="inputBox">
            <span class='unit unit1'>单价</span>
            <input type="number" v-model="minUnitPrice">
            <span class='line'></span>
            <input type="number" v-model="maxUnitPrice">
            <span class='unit'>元/㎡</span>
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
            {{item.value}}
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
        <ul>
          <li v-for="(item, index) in officeList" :key='index' @click='jumpDetail(item)' >
            <!-- <img :src="item.img" alt="" mode='aspectFill'> -->
            <div class="img-bg" :style="{'background':'url('+item.img+') center;','background-size':'100%;'}"></div>
            <div class="size">
              <img src="/static/images/42@2x.png" alt="">
              <span>{{item.size}}㎡</span>
            </div>
            <p>
              <span class="feature" v-if="item.feature">
                {{item.feature}}
              </span>
              {{item.name}}
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
  <!-- </scroll-view> -->
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
      // multiArray: [],
      isAuthUserinfo: true,
      officeList: [],
      brushConditionListIndex: 0,
      brushConditionList: [
        {
          name: '所有房源'
        },
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
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
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
      cityList: [],
      isLoadingList: false,
      showAreaBox: false,
      showPriceBox: false,
      showSortList: false,
      showAddressList: false,
      pageIndex: 1,
      pageSize: 4,
      latitude: "", // 用户目前纬度
      longitude: "", // 用户目前经度
      maxArea: "", // 最大面积
      maxTotalPrice: "", // 最大价格
      minArea: "", // 最小面积
      minTotalPrice: "", // 最小价格
      minUnitPrice: "", // 最小单价价格
      maxUnitPrice: "", // 最大单价价格
      orderBy: "area", // 排序字段 = ['area', 'location', 'total_price'],
      orderSort: "ASC", // ['ASC', 'DESC'],
      listIsOver: false,
      scrollTop: '',
      scrollY: '',
    };
  },

  components: {},
  onReachBottom() {
    // Do something when page reach bottom.
    console.log('onReachBottom      index')
    this.lower()
  },

  computed: {
    isIphone() {
      return store.state.isIphone
    },
    titleCity() {
      return store.state.titleCity;
    },
    multiIndex(){
      return store.state.multiIndex
    },
    multiArray(){
      return store.state.multiArray
    },
    cityCode(){
      return store.state.cityCode
    },
    adCode(){
      return store.state.adCode
    },
    openedCityList(){
      return store.state.openedCityList
    }
  },
  mounted() {
    
  },
  created() {
    
  },
  onLoad(query) {
    this.landlordLogin(query);
  },
  onShow(){
    // if(this.cityCode!=store.state.cityCode){
    //   this.listIsOver = false;
    //   this.pageIndex = 1; 
    //   this.isLoadingList = true;
    //   this.officeList = [];
    //   this.getList();
    // }
    console.log(323)
    console.log(this.cityCode)
    console.log(this.adCode)
  },
  watch:{
    '$store.state.cityCode'() {
      this.listIsOver = false;
      this.pageIndex = 1; 
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
    },
    '$store.state.adCode'() {
      this.listIsOver = false;
      this.pageIndex = 1; 
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
    },
  },
  methods: {
    bindMultiPickerChange (e) {
      console.log('picker发送选择改变，携带值为', e.target.value)
      this.cityInit(e.target.value)
    },
    cityInit(val){
      this.orderBy = "";
      this.showAddressList = false;
      store.state.adCode = this.multiArray[1][val[1]].key
      store.state.cityCode = this.multiArray[0][val[0]].key
      console.log(this.adCode)
      console.log(this.cityCode)
      this.listIsOver = false;
      this.pageIndex = 1;
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
    },
    bindMultiPickerColumnChange (e) {
      console.log('修改的列为', e.target.column, '，值为', e.target.value);
      store.state.multiIndex[e.target.column] = e.target.value;
      if(e.target.column==0){
        store.state.multiArray = [store.state.multiArray[0],this.openedCityList[store.state.multiIndex[0]].child] 
        store.state.multiIndex = [store.state.multiIndex[0],0];
      }
    },
    getListcity() {
      let reqUrl = '/mini/open-city'
      this.$myRequestGet(
        reqUrl,
        {},
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if (bussData && bussData.length > 0) {
              bussData.forEach(element => {
                this.getDistrict(element)
              });
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    getDistrict(element) {
      let reqUrl = this.$API.BASE.FINDDISTRICT
      this.$myRequestGet(
        reqUrl,
        {
          cityCode:element.codeId
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;

            if (bussData && bussData.length > 0) {
              element.child=[{
                key:'',
                value:'全部'
              }]
              bussData.forEach(element2 => {
                element.child.push(element2)
              });
              store.state.openedCityList.push(element)
              store.state.multiArray[0].push({
                key:element.codeId,
                value:element.codeName
              })
              store.state.multiArray[1] = store.state.openedCityList[0].child
            }
            console.log('store.state.openedCityList')
            console.log(store.state.openedCityList)
            console.log(store.state.multiArray)
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    scrollContainer(e) {
      if(this.officeList.length> 2) {
        this.showAreaBox = false
        this.showPriceBox = false
        this.showAddressList = false
        this.showSortList = false
      }
      // console.log(e.target.scrollTop)
      this.scrollY = e.target.scrollTop
    },
    scrollUl() {
      this.showAreaBox = false
      this.showPriceBox = false
      this.showAddressList = false
      this.showSortList = false
    },
    getLocation() {
      var _this = this
      wx.getLocation({
        type: "gcj02",
        success: function(res) {
          var latitude = res.latitude; // 纬度
          var longitude = res.longitude; // 经度
          _this.latitude = latitude;
          _this.longitude = longitude;
          var speed = res.speed;
          var accuracy = res.accuracy;
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
              // latitude: '39.91667',
              // longitude: '116.41667'
            },
            success: function(res) {
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
            },
            fail: function(error) {
              console.error(error);
              
            }
          });
        },
        fail: function(error) {
        }
      });
    },
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为2222', e)
      this.orderBy = "";
      this.showAddressList = false;
      // this.latitude = latitude;
      // this.longitude = longitude;
      this.adCode = e.target.code[2]
      this.cityCode = e.target.code[1]
      this.listIsOver = false;
      this.pageIndex = 1;
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
    },
    getCityListLatLng(item) {
      console.log(this.titleCity+'市'+item.dname)
      var _this = this;
      //调用地址解析接口
      qqmapsdk.geocoder({
        //获取表单传入地址
        address: this.titleCity+'市'+item.dname, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
        success: function(res) {
          //成功后的回调
          console.log(res)
          var res = res.result;
          var latitude = res.location.lat;
          var longitude = res.location.lng;
          _this.latitude = latitude;
          _this.longitude = longitude;
          _this.listIsOver = false;
          _this.pageIndex = 1;
          _this.isLoadingList = true;
          _this.officeList = [];
          _this.getList();
        },
        fail: function(error) {
          console.error(error);
        },
        complete: function(res) {
          console.log(res);
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
        this.postWxinfoToSucheng()
        // wx.redirectTo({
        //     url: '/pages/landlord/landlordIndex/main?source=inner'
        // })
      }
    },
    postWxinfoToSucheng() {
      var _this = this
      wx.getUserInfo({
        success(res2) {
          var rawData = JSON.parse(res2.rawData)
          let reqUrl = _this.$API.USER.SAVEUSERINFO;
          _this.$myRequest(reqUrl, {
            avatar: rawData.avatarUrl,
            nickname: rawData.nickName,
          }, {})
            .then(res => {
              if (res.data.status === 200) {
                  console.log('res_this.$API.USER.SAVEUSERINFO');
              }
            })
            .catch(error => {
              console.log("pdf 2 png error: ", error);
            });
        },
        fail(error) {
          console.log(error)
        }
      })
    },
    brushConditionClick(item,index) {
      this.brushConditionListIndex = index
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
        // this.showAddressList = !this.showAddressList;
      } else if (item.name === "排序") {
        this.showPriceBox = false;
        this.showAreaBox = false;
        this.showAddressList = false;
        this.showSortList = !this.showSortList;
      }else if (item.name === "所有房源") {
        this.showPriceBox = false;
        this.showAreaBox = false;
        this.showAddressList = false;
        this.showSortList = false;
        this.brushConditionListIndex = 1
        const url = "../indexSreach/main";
        wx.navigateTo({ url });
      }
    },
    lower(e) {
      console.log('lower')
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
        this.minUnitPrice = "";
        this.maxUnitPrice = "";
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
      this.orderBy = "";
      this.showAddressList = false;
      // this.latitude = latitude;
      // this.longitude = longitude;
      this.adCode = item.key;
      this.listIsOver = false;
      this.pageIndex = 1;
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
      
      this.getCityListLatLng(item)
    },
    landlordLogin(query) {
      var _this = this
      wx.showLoading({ 
        title: "登录中..." ,
        mask: true
      });
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
          if (res.code) {
            let reqUrl = _this.$API.USER.LOGIN + res.code;
            const scene = decodeURIComponent(query.scene)
            _this.$http
              .get(reqUrl, {
                recommendCode: scene
              })
              .then(({ data }) => {
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
                  _this.getMobile();
                  _this.getLocation();
                  _this.getConsumerHotline()
                  _this.getListcity()
                  
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
    getConsumerHotline  () {
      let reqUrl = this.$API.BUSINESS.USER.SYS+'consumerHotline';
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if (bussData) {
              store.state.consumerHotline = bussData
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
    postWxInfo() {
      var _this = this
      wx.getUserInfo({
        success(res2) {
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
              bussData.forEach((element,index) => {
                this.imgUrls.push({
                  img: element.coverUrl,
                  id: element.outId
                });
                //this.changeFile(element.coverUrl,index)
              });
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    changeFile(imgurl,index) {
      imgurl = imgurl.replace('http://','https://')
      console.log(709)
      var that = this
      wx.getFileSystemManager().access({
        path: imgurl,
        success:function(res){
          console.log(715)
          console.log(res)
          // that.imgUrls[index].img = res.tempFilePath
        },
        fail:function(res){
          wx.downloadFile({
            url: imgurl,
            success:function(res2){
              console.log(res2)
              // that.imgUrls[index].img = res2.tempFilePath
            }
          })
        },
      })
      console.log(728)
    },
    // 绘制图片到canvas上
    chooseWxImage: function(imgurl,id) {
      imgurl = imgurl.replace('http://','https://')
      console.log(imgurl)
      wx.downloadFile({
        url: imgurl,
        success: function (sres) {
          console.log(sres);
          const ctx = wx.createCanvasContext("myCanvas" + id); //画布
          ctx.drawImage(sres.tempFilePath, 0, 0, store.state.width-30, 190*store.state.width/375)
          ctx.draw();
        },fail:function(fres){
          console.log('fres');
          console.log(fres);
        }
      })
      wx.downloadFile({
        url: imgurl,
        success: function (sres) {
          console.log(sres);
          console.log(imgurl);
          console.log(id);
          const ctx = wx.createCanvasContext("myCanvas" + id); //画布
          ctx.drawImage(sres.tempFilePath, 0, 0, store.state.width, 190*store.state.width/375)
          ctx.draw();
        },fail:function(fres){
          console.log('fres');
          console.log(fres);
        }
      })
    },
    getList() {
      console.log("getList");
      let reqUrl = this.$API.BUSINESS.OFFICEROOM.PAGE;
      this.$myRequest(
        reqUrl,
        {
          adCode: this.adCode,
          pageIndex: this.pageIndex,
          isRecommend : 1,
          pageSize: this.pageSize,
          cityCode: this.cityCode,
          // latitude: this.latitude, // 用户目前纬度
          // longitude: this.longitude, // 用户目前经度
          maxArea: this.maxArea, // 最大面积
          maxTotalPrice: this.maxTotalPrice, // 最大价格
          minArea: this.minArea, // 最小面积
          minTotalPrice: this.minTotalPrice, // 最小价格
          minUnitPrice: this.minUnitPrice, // 最小单价价格
          maxUnitPrice: this.maxUnitPrice, // 最大单价价格
          orderBy: this.orderBy, // 排序字段 = ['area', 'total_price'],
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
              bussData.forEach((element,index) => {
                this.officeList.push({
                  id: element.id,
                  buildingId: element.buildingId,
                  img: element.firstImage ? element.firstImage.fileUrl : "",
                  name: element.name,
                  size: element.area,
                  address: element.detailAddress,
                  feature: element.feature,
                  money: element.totalPrice,
                  unit: element.unitPrice
                });
                //this.changeFile2(element.firstImage ? element.firstImage.fileUrl : "",index)
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
    changeFile2(imgurl,index) {
      if(!imgurl)return
      imgurl = imgurl.replace('http://','https://')
      console.log(709)
      var that = this
      wx.getFileSystemManager().access({
        path: imgurl,
        success:function(res){
          console.log(715)
          console.log(res)
          // that.officeList[index].img = res.tempFilePath
        },
        fail:function(res){
          wx.downloadFile({
            url: imgurl,
            success:function(res2){
              console.log(res2)
              // that.officeList[index].img = res2.tempFilePath
            }
          })
        },
      })
      console.log(728)
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
            if (!bussData.mobile) {
              const url = "../bindPhone/main";
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
      wx.navigateTo({ url });
    },
    jumpSearch() {
      const url = "../indexSreach/main";
      wx.navigateTo({ url });
    },
    jumpDetail(item) {
      const url = "../officeDetail/main?id=" + item.id;
      wx.navigateTo({ url });
    },
    jumpList(item) {
      if (item.name === "写字楼") {
        const url = "../officeBuildingList/main";
        wx.navigateTo({ url });
      }else if(item.name === '公司简介') {
        const url = "../indexCommInfo/main";
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
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 64px;
      line-height: 64px;
      text-align: center;
      background: #fff;
      z-index: 9999;
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
      margin-top: 64px;
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
      background: #fff;
      z-index: 999;
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
        picker{
          display: inline-block;
          font-family: PingFang-SC-Regular;
          font-size: 12px;
          color: #666;
        }
        &:last-child {
          img {
            height: 10px;
          }
        }
      }
      .active{
        span{
          color: #333;
        }
      }
    }
    .abso{
      position: fixed;
      width: 100%;
      top: 64px;
      left: 0;
    }
    .hide {
      width: 100%;
      z-index: 2;
      ul {
        box-shadow: 0px 2px 2px #999;
        overflow-y:scroll;
        height:auto;
        max-height:300px;
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
          height: 40px;
          line-height: 40px;
          text-align:center;
          input {
            background-color: #fbfbfb;
            border: 1px solid #e1e1e1;
            color: #333;
            font-size: 15px;
            font-family: PingFang-SC-Regular;
            display: inline-block;
            width: 70px;
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
            // top: -20px;
          }
          .unit {
            margin-left: 15px;
            font-family: PingFang-SC-Regular;
            color: #000;
            font-size: 15px;
            position: relative;
            // top: -17px;
          }
          .unit1{
            margin-left: 0px;
            margin-right: 15px;
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
    .abso ~ .hide{
      position: fixed;
      top: 107px;
      background: #fff;
      z-index: 999;
      left: 0;
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
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
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
