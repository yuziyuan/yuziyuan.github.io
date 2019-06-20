<template>
  <div class="container">
    <div class="top">
      <div class="search-bar" id="searchBar">
        <div class="search-bar__box">
          <img class="icon-search" src="/static/images/49@2x.png" alt="">
          <input :class='{"isAndroidSreach": !isIphone}' v-model="wd" type="search" @input='inputChange' class="search-bar__input" id="searchInput" placeholder="搜索" required="">
          <img v-show="wd.length > 0" @click='wd = ""' src="/static/images/close2.png" class='close' alt="">
        </div>
        <a class="search-bar__cancel-btn" id="searchCancel" @click='jumpIndex'>取消</a>
      </div>
    </div>
    <div class="foot">
      <div class="head">
        <!-- <div v-for="(item, index) in brushConditionList" @click='brushConditionClick(item,index)' :key='index'>
          <span>{{item.name}}</span>
          <img :src="item.img" :class='{"reserve1":index == brushConditionClickIndex}' alt="">
        </div> -->
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
        <!-- <scroll-view @scroll="scrollUl" scroll-y style="height: 624px;" @scrolltolower="lower"> -->
          <ul>
            <li v-for="(item, index) in officeList" :key='index' @click='jumpDetail(item)'>
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
        <!-- </scroll-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
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
      isLoadingList: false,
      showAreaBox: false,
      showPriceBox: false,
      showSortList: false,
      showAddressList: false,
      wd: "",
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
      brushConditionClickIndex: 0,
      buildingId: ''
    };
  },

  computed: {
    isIphone() {
      return store.state.isIphone
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
  onReachBottom() {
    // Do something when page reach bottom.
    console.log('onReachBottom      indexSreach')
    this.lower()
  },
  components: {},
  mounted() {
    store.state.adCode=''
    store.state.cityCode=''
    this.buildingId = this.$root.$mp.query.id;
    this.getList();
  },
  methods: {
    bindMultiPickerChange (e) {
      console.log('picker发送选择改变，携带值为', e.target.value)
      this.cityInit(e.target.value)
    },
    cityInit(val){
      console.log(this.multiArray)
      console.log(this.multiArray[1][val[1]].key)
      console.log(this.multiArray[0][val[0]].key)
      store.state.adCode = this.multiArray[1][val[1]].key
      store.state.cityCode = this.multiArray[0][val[0]].key
      console.log(this.adCode)
      console.log(this.cityCode)
      this.orderBy = "";
      this.showAddressList = false;
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
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为2222', e)
      // this.orderBy = "";
      // this.showAddressList = false;
      // // this.latitude = latitude;
      // // this.longitude = longitude;
      // this.adCode = e.target.code[2]
      // this.cityCode = e.target.code[1]
      // this.listIsOver = false;
      // this.pageIndex = 1;
      // this.isLoadingList = true;
      // this.officeList = [];
      this.getList();
    },
    scrollUl() {
      this.showAreaBox = false
      this.showPriceBox = false
      this.showAddressList = false
      this.showSortList = false
    },
    inputChange() {
      this.officeList = [];
      this.pageIndex = 1;
      this.getList();
    },
    brushConditionClick(item,index) {
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
        if(this.brushConditionClickIndex == index) {
          wx.showToast({
            title: "已经是所有房源",
            icon: "none",
            duration: 1500
          });
          return
        }
        this.showPriceBox = false;
        this.showAreaBox = false;
        this.showAddressList = false;
        this.showSortList = false
        this.listIsOver = false;
      this.maxArea="", // 最大面积
      this.maxTotalPrice= "", // 最大价格
      this.wd = ''
      this.minArea="", // 最小面积
      this.minTotalPrice= "", // 最小价格
      this.minUnitPrice= "", // 最小单价价格
      this.maxUnitPrice= "", // 最大单价价格
      this.orderBy= "area", // 排序字段 = ['area', 'location', 'total_price'],
      this.orderSort= "ASC", // ['ASC', 'DESC'],
        this.adCode = ''
        this.cityCode = ''
        this.pageIndex = 1;
        this.isLoadingList = true;
        this.officeList = [];
        this.getList();
      }
      this.brushConditionClickIndex = index
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
      // this.latitude = item.latitude;
      // this.longitude = item.longitude;
      this.adCode = item.key;
      this.listIsOver = false;
      this.pageIndex = 1;
      this.isLoadingList = true;
      this.officeList = [];
      this.getList();
    },
    getList() {
      wx.showLoading({ title: "加载中" });
      let reqUrl = this.$API.BUSINESS.OFFICEROOM.PAGE;
      this.$myRequest(
        reqUrl,
        {
          // cityCode: this.buildingId ? store.state.cityCode : "",cityCode
          cityCode: this.cityCode,
          wd: this.wd,
          adCode: this.adCode,
          buildingId: this.buildingId,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          // latitude: this.latitude, // 用户目前纬度
          // longitude: this.longitude, // 用户目前经度
          maxArea: this.maxArea, // 最大面积
          maxTotalPrice: this.maxTotalPrice, // 最大价格
          minArea: this.minArea, // 最小面积
          minTotalPrice: this.minTotalPrice, // 最小价格
          minUnitPrice: this.minUnitPrice, // 最小单价价格
          maxUnitPrice: this.maxUnitPrice, // 最大单价价格
          orderBy: this.orderBy, // 排序字段 = ['area', 'location', 'total_price'],
          orderSort: this.orderSort // ['ASC', 'DESC'],
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            this.isLoadingList = false;
            wx.hideLoading();
            this.pageIndex++;
            let bussData = res.data.data.bussData;
            if (bussData && bussData.length > 0) {
              bussData.forEach((element,index) => {
                this.officeList.push({
                  id: element.id,
                  feature: element.feature,
                  buildingId: element.buildingId,
                  img: element.firstImage ? element.firstImage.fileUrl : "",
                  // img: "",
                  name: element.name,
                  size: element.area,
                  address: element.detailAddress,
                  money: element.totalPrice,
                  unit: element.unitPrice
                });
                //this.changeFile2(element.firstImage ? element.firstImage.fileUrl : "",index)
              });
              if (bussData.length < this.pageSize) {
                this.listIsOver = true;
              }
            } else if (bussData.length == 0) {
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
    jumpDetail(item) {
      const url = "../officeDetail/main?id=" + item.id;
      wx.navigateTo({ url });
    },
    jumpIndex(item) {
      wx.navigateBack();
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
  margin-bottom: 0;
  .top {
    .search-bar {
      height: 69px;
      line-height: 69px;
      background-color: #fff;
      padding: 0;
      .search-bar__box {
        width: 285px;
        border: 1px solid transparent;
        border-radius: 19px;
        background-color: #f4f4f4;
        text-align: left;
        height: 38px;
        line-height: 35px;
        padding: 0;
        margin-top: 15px;
        margin-left: 34px;
        display: inline-block;
        .icon-search {
          width: 16px;
          height: 16px;
          margin-left: 13px;
          margin-right: 6px;
          vertical-align: middle;
        }
        img.close{
          width: 16px;
          height: 16px;
          position: relative;
          top: 2px;
        }
        .search-bar__input {
          font-family: PingFang-SC-Regular;
          color: #999999;
          font-size: 15px;
          display: inline-block;
          width: 74%;
          position: relative;
          top: 1px;
        }
      }
      a.search-bar__cancel-btn {
        font-family: PingFang-SC-Regular;
        font-size: 15px;
        color: #333;
        line-height: 69px;
        margin-left: 12px;
        display: inline-block;
      }
    }
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
          transition: all .2s ease;
        }
        picker{
          display: inline-block;
          font-family: PingFang-SC-Regular;
          font-size: 12px;
          color: #666;
        }
        .reserve1{
          transform: rotateX(180deg);
          transition: all .2s ease;
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
            .address {
              width: 60%;
              float: left;
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
}
</style>
