<template>
  <div class="container myAppoint">
    <scroll-view scroll-y style="height: 624px;" @scrolltolower="lower">
      <ul>
        <li v-for="(item, index) in officeList" :key='index' @click='jumpDetail(item)'>
          <img :src="item.img" alt="" mode='aspectFill'>
          <div class="right">
            <p>{{item.name}}</p>
            <div class="size">
              <img src="/static/images/42@2x.png" alt="">
              <span>{{item.size}}㎡</span>
            </div>
            <div class="address">
              <img src="/static/images/48@2x.png" alt="">
              <p>{{item.address}}</p>
            </div>
            <div class="foot">
              <p>
                <span class='money'>{{"￥ "+item.money}}</span>
                <span>元/月</span>
                <span class='unit'>{{item.unit}}</span>
                <span>元/㎡</span>
              </p>
            </div>
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
</template>

<script>
export default {
  data() {
    return {
      officeList: [],
      isLoadingList: false,
      listIsOver: false,
      pageIndex: 1,
      pageSize: 10
    };
  },

  components: {},

  mounted() {
    this.getList();
  },
  methods: {
    jumpDetail(item) {
      const url = "../officeDetail/main?isAppoint=true&id=" + item.roomId;
      console.log(url);
      wx.navigateTo({ url });
    },
    lower(e) {
      if (this.isLoadingList || this.listIsOver) return;
      this.isLoadingList = true;
      this.getList();
    },
    getList() {
      console.log("getList");
      let reqUrl = this.$API.BUSINESS.USER.LOOKINGPAGE;
      this.$myRequest(
        reqUrl,
        {
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
            console.log("bussData");
            console.log(bussData);
            if (bussData && bussData.length > 0) {
              bussData.forEach(element => {
                this.officeList.push({
                  id: element.id,
                  roomId: element.roomId,
                  img: element.firstImage ? element.firstImage.fileUrl : "",
                  name: element.roomName,
                  size: element.roomArea ,
                  address: element.roomDetailAddress ,
                  money: element.roomTotalPrice,
                  unit: element.roomUnitPrice
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
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container.myAppoint {
  margin-bottom: 0;
  ul {
    li {
      margin: 15px 15px 0px 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e1e1e1;
      > img {
        width: 110px;
        height: 110px;
        border: 1px solid transparent;
        border-radius: 5px;
        margin-right: 15px;
        object-fit: cover;
        vertical-align: top;
      }
      .right {
        display: inline-block;
        width: 202px;
        > p {
          font-family: PingFang-SC-Bold;
          font-size: 15px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .size {
          img {
            width: 11px;
            height: 11px;
            margin-right: 6px;
          }
          span {
            font-family: PingFang-SC-Regular;
            font-size: 10px;
            color: #999;
          }
        }
        .address {
          img {
            width: 9px;
            height: 12px;
            margin-right: 5px;
            float: left;
            margin-top: 3px;
          }
          p {
            font-family: PingFang-SC-Regular;
            font-size: 12px;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
        .foot {
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          span {
            font-family: PingFang-SC-Regular;
            font-size: 12px;
            color: #999;
          }
          .money {
            font-family: PingFang-SC-Bold;
            font-size: 19px;
            color: #f90432;
            margin-right: 9px;
          }
          .unit {
            margin-left: 24px;
          }
        }
      }
    }
  }
}
</style>
