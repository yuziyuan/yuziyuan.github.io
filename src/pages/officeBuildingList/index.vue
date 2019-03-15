<template>
  <div class="container">
    <div class="top">
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
    </div>
    <div class="foot">
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
                <!-- <span>元/㎡</span> -->
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
import QQMapWX from "../../utils/qqmap";
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key: "MJSBZ-N7NCJ-6SYFC-F6JNJ-J76R7-A4BYI"
});
export default {
  data() {
    return {
      officeList: [
      ],
      isLoadingList: false,
      name: "",
      pageIndex: 1,
      pageSize: 10,
      // titleCity: '',
      listIsOver:false
    };
  },
  computed:{
    cityCode() {
      return store.state.cityCode
    },
    titleCity() {
      return store.state.titleCity
    },
  },
  watch:{
    cityCode() {
      this.pageIndex = 1
      this.getList();
    }
  },
  components: {},
  onShow() {
    this.pageIndex = 1
    this.officeList = []
    this.getList();
  },

  methods: {
    jumpAddress() {
      const url = "../indexChooseCity/main";
      wx.navigateTo({ url });
    },
    lower(e) {
      if (this.isLoadingList || this.listIsOver) return;
      this.isLoadingList = true;
      this.getList();
    },
    getList() {
      let reqUrl = this.$API.BUSINESS.USER.BUILDINGPAGE;
      this.$myRequest(
        reqUrl,
        {
          cityCode: this.cityCode,
          name: this.name,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
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
                  img: element.coverUrl,
                  name: element.name,
                  size: element.minArea+'-'+element.maxArea,
                  address: element.detailAddress,
                  money: element.minPrice,
                  unit: "在租"+element.officeCount+"套"
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
    jumpSearch() {
      const url = "../indexSreach/main";
      wx.navigateTo({ url });
    },
    jumpDetail(item) {
      const url = "../indexSreach/main?id=" + item.id;
      wx.navigateTo({ url });
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
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
  }
  .foot {
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
            width: 100px;
            height: 27px;
            line-height: 24px;
            background-color: #000;
            opacity: 0.5;
            border: 1px solid transparent;
            border-radius: 13px;
            left: 235px;
            top: 154px;
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
              color: #1c549e;
            }
            .unit {
              margin-left: 12px;
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
}
</style>
