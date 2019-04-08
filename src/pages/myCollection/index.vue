<template>
  <div class="container myCollection">
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
      pageSize: 4
    };
  },

  components: {},

  mounted() {
    this.getList();
  },
  methods: {
    jumpDetail(item) {
      const url = "../officeDetail/main?id=" + item.roomId;
      wx.navigateTo({ url });
    },
    lower(e) {
      if (this.isLoadingList || this.listIsOver) return;
      this.isLoadingList = true;
      this.getList();
    },
    getList() {
      let reqUrl = this.$API.BUSINESS.USER.COLLECTPAGE;
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
            if (bussData && bussData.length > 0) {
              bussData.forEach((element,index) => {
                if (element.officeRoom.isSale!==0) {
                  this.officeList.push({
                    id: element.officeRoom.id,
                    roomId: element.officeRoom.id,
                    img: element.officeRoom.firstImage ? element.officeRoom.firstImage.fileUrl : "",
                    // img: "",
                    name: element.officeRoom.name,
                    size: element.officeRoom.area,
                    address: element.officeRoom.detailAddress,
                    money: element.officeRoom.totalPrice,
                    unit: element.officeRoom.unitPrice
                  });
                  this.changeFile2(element.officeRoom.firstImage ? element.officeRoom.firstImage.fileUrl : "",index)
                }
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
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container.myCollection {
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
