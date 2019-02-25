<template>
  <div class="container">
    <div class="top">
      <div class="weui-search-bar" id="searchBar">
        <div class="weui-search-bar__form2">
          <div class="weui-search-bar__box">
            <img class="weui-icon-search" src="/static/images/49@2x.png" alt="">
            <input v-model="wd" type="search" @input='inputChange' class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
          </div>
        </div>
        <a class="weui-search-bar__cancel-btn" id="searchCancel" @click='jumpIndex'>取消</a>
      </div>
    </div>
    <div class="foot">
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
      wd: "",
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
      listIsOver: false,
      // buildingId: ''
      // wd (string, optional): 关键词
    };
  },

  components: {},
  mounted() {
    this.buildingId = this.$root.$mp.query.id
    console.log(this.buildingId)
    console.log(this.buildingId)
    this.getList();
  },
  methods: {
    inputChange() {
      this.officeList = []
      this.pageIndex = 1
      this.getList()
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
    getList() {
      console.log("getList");
      wx.showLoading({ title: "加载中" });
      let reqUrl = this.$API.BUSINESS.OFFICEROOM.PAGE;
      this.$myRequest(
        reqUrl,
        {
          cityCode: this.buildingId?store.state.cityCode: '',
          wd: this.wd,
          buildingId: this.buildingId,
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
            wx.hideLoading();
            this.pageIndex++;
            let bussData = res.data.data.bussData;
            console.log('bussData2')
            console.log(bussData)
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
            console.log(this.officeList);
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
    },
    jumpDetail(item) {
      const url = "../officeDetail/main?id=" + item.id;
      console.log(url);
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
    .weui-search-bar {
      height: 69px;
      line-height: 69px;
      background-color: #fff;
      padding: 0;
      .weui-search-bar__form2 {
        padding: 0;
        height: 38px;
        line-height: 38px;
        width: 285px;
        border: none;
        margin-top: 15px;
        margin-left: 34px;
        .weui-search-bar__box {
          width: 285px;
          border: 1px solid transparent;
          border-radius: 19px;
          background-color: #f4f4f4;
          text-align: left;
          height: 38px;
          line-height: 35px;
          padding: 0;
          .weui-icon-search {
            width: 16px;
            height: 16px;
            margin-left: 13px;
            margin-right: 6px;
          }
          .weui-search-bar__input {
            display: inline-block;
            position: relative;
            top: 6px;
          }
        }
      }
      a.weui-search-bar__cancel-btn {
        font-family: PingFang-SC-Regular;
        font-size: 15px;
        color: #333;
        line-height: 69px;
        // margin-left: -4px;
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
