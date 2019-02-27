<template>
  <div class="container">
    <div class="top">
      <img src="/static/images/17@2x.png" alt="">
      <p v-if="maxTotalPriceTxt">{{maxTotalPriceTxt}}，{{maxSeatTxt}}，{{degreeTxt}}</p>
      <span @click='jumpIndex'>
        <i></i>
        修改
      </span>
    </div>
    <div class="middle"></div>
    <div class="foot">
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
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      officeList: [
      ],
      isLoadingList: false,
      listIsOver: false,
      degree: "",
      maxSeat: "",
      maxTotalPrice: "",
      degreeTxt: "",
      maxSeatTxt: "",
      maxTotalPriceTxt: "",
      pageIndex: 1,
      pageSize: 10,
      wd: ''
    };
  },

  components: {},

  mounted() {
    console.log("this.$root.$mp.query");
    console.log(this.$root.$mp.query);
    var params = this.$root.$mp.query;
    this.degree = params.degree;
    this.maxSeat = params.maxSeat == '0'?'':parseInt(params.maxSeat); // 最大人数
    this.maxTotalPrice = params.maxTotalPrice == '0'?'':parseInt(params.maxTotalPrice); // 最大价格
    this.wd = params.wd
    this.getTxt();
    this.getList();
  },
  created() {},
  methods: {
    lower(e) {
      if (this.isLoadingList || this.listIsOver) return;
      this.isLoadingList = true;
      this.getList();
    },
    getList() {
      console.log("getList");
      let reqUrl = this.$API.BUSINESS.OFFICEROOM.SMARTPAGE;
      this.$myRequest(
        reqUrl,
        {
          degree: this.degree,
          maxSeat: this.maxSeat,
          maxTotalPrice: this.maxTotalPrice,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          wd: this.wd
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
    },
    getTxt() {
      if (this.degree == "ECONOMY") {
        this.degreeTxt = "经济空间";
      } else if (this.degree == "COMFORT") {
        this.degreeTxt = "舒适空间";
      } else {
        this.degreeTxt = "豪华空间";
      }

      if (this.maxSeat == 0) {
        this.maxSeatTxt = "人数不限";
      } else if (this.maxSeat == 50) {
        this.maxSeatTxt = "50人以上";
      } else {
        this.maxSeatTxt = this.maxSeat + "人左右";
      }

      if (this.maxTotalPrice == 0) {
        this.maxTotalPriceTxt = "价格不限";
      } else if (this.maxTotalPrice == 50) {
        this.maxTotalPriceTxt = "5万元以上";
      } else {
        this.maxTotalPriceTxt = this.maxTotalPrice + "元左右";
      }
    }
  }
};
</script>

<style scoped lang='less'>
.container {
  .top {
    height: 45px;
    line-height: 45px;
    margin: 0 25px 0 14px;
    img {
      height: 14px;
      width: 15px;
      vertical-align: middle;
      margin-right: 10px;
    }
    p {
      display: inline-block;
      font-family: PingFang-SC-Regular;
      color: #333;
      font-size: 15px;
    }
    span {
      i {
        display: inline-block;
        height: 16px;
        width: 1px;
        background-color: #e1e1e1;
        margin-right: 16px;
        position: relative;
        top: 3px;
      }
      float: right;
      font-family: PingFang-SC-Regular;
      font-size: 15px;
      color: #1c549d;
    }
  }
  .middle {
    height: 10px;
    background-color: #f4f4f4;
  }
  .foot {
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
              top: 3px;
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
</style>
