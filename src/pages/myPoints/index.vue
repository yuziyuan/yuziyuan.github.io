<template>
  <div class="container">
    <div class="top">
      <img src="/static/images/39@2x.png" alt="">
      <div>
        <span>积分余额</span>
        <span>{{pointsConut||0}}</span>
      </div>
    </div>
    <div class="f4"></div>
    <scroll-view scroll-y style="height: 624px;" @scrolltolower="lower">
      <ul>
        <li v-for="(item, index) in list" :key='index'>
          <div class='text'>
            <p>{{item.p}}</p>
            <p>{{item.date}}</p>
          </div>
          <span>
            {{item.dynamic}}
          </span>
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
      pointsConut: 0,
      list: [
        // {
        //   p: "好友注册成功",
        //   date: "2018-12-21 10:01",
        //   dynamic: "+2"
        // },
        // {
        //   p: "好友注册成功",
        //   date: "2018-12-21 10:01",
        //   dynamic: "+2"
        // },
        // {
        //   p: "好友注册成功",
        //   date: "2018-12-21 10:01",
        //   dynamic: "+2"
        // }
      ],
      isLoadingList: false,
      listIsOver: false,
      pageIndex: 1,
      pageSize: 10
    };
  },

  components: {},
  onShow() {
    this.pointsConut = wx.getStorageSync("userInfo").point|| 0;
  },
  mounted() {
    this.getList();
  },
  methods: {
    lower(e) {
      if (this.isLoadingList || this.listIsOver) return;
      this.isLoadingList = true;
      this.getList();
    },
    getList() {
      let reqUrl = this.$API.BUSINESS.USER.POINTFLOW;
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
              bussData.forEach(element => {
                this.list.push({
                  p: element.operateMemo,
                  date: element.gmtCreated,
                  dynamic:
                   ( element.operateType == "IN"
                      ? "+"
                      : "-") + element.operatePoint.toString()
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
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
  .top {
    > img {
      height: 150px;
      width: 100%;
      z-index: -1;
      position: absolute;
    }
    div {
      padding-top: 37px;
      margin: 0 auto;
      text-align: center;
      span {
        display: block;
        &:first-child {
          font-family: PingFang-SC-Regular;
          font-size: 13px;
          color: #fff;
          margin-bottom: 15px;
        }
        &:last-child {
          font-family: PingFang-SC-Medium;
          font-size: 24px;
          color: #fff;
        }
      }
    }
  }
  .f4 {
    height: 10px;
    background-color: #f4f4f4;
    margin-top: 40px;
  }
  ul {
    margin: 0 15px;
    li {
      height: 55px;
      border-bottom: 1px solid #e1e1e1;
      div.text {
        p {
          height: 15px;
          &:first-child {
            font-family: PingFang-SC-Regular;
            font-size: 15px;
            color: #333;
            margin: 11px 0;
          }
          &:last-child {
            font-family: PingFang-SC-Regular;
            font-size: 12px;
            color: #999;
          }
        }
      }
      span {
        float: right;
        font-family: PingFang-SC-Regular;
        font-size: 15px;
        color: #333;
        margin-top: -33px;
      }
    }
  }
}
</style>
