<template>
  <div class="container">
    <scroll-view scroll-y style="height: 624px;" @scrolltolower="lower">
      <ul>
        <li v-for="(item, index) in list" :key='index'>
          <div class='text'>
            <p>{{item.p}}</p>
            <p>{{item.date}}</p>
          </div>
          <img class='allow' src="/static/images/121.png" alt="">
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
      list: [
        // {
        //   p: "您签约的办公室名称还有2个月即将到期",
        //   date: "2018-12-21 10:01"
        // },
        // {
        //   p: "您签约的办公室名称还有2个月即将到期",
        //   date: "2018-12-21 10:01"
        // },
        // {
        //   p: "您签约的办公室名称还有2个月即将到期",
        //   date: "2018-12-21 10:01"
        // }
      ],
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
    lower(e) {
      if (this.isLoadingList || this.listIsOver) return;
      this.isLoadingList = true;
      this.getList();
    },
    getList() {
      let reqUrl = this.$API.BUSINESS.USER.MESSAGEPAGE;
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
                  p: element.content,
                  date: element.gmtCreated
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
  ul {
    margin: 0 15px;
    li {
      // margin: 11px 0;
      height: 55px;
      // line-height: 55px;
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
      .allow {
        float: right;
        width: 7px;
        height: 7px;
        margin-top: -24px;
      }
    }
  }
}
</style>
