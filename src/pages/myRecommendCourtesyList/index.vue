<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in list" :key='index'>
        <div>{{item.time}}</div>
        <div>{{item.name}}</div>
        <div>{{item.phone}}</div>
        <div>{{item.whether}}</div>
      </li>
      <div class="isEmpty" v-show="isEmpty">
        暂无推荐记录
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // {
        //   time: "推荐时间",
        //   name: "昵称",
        //   phone: "手机号",
        //   whether: "是否签约"
        // },
        // {
        //   time: "2018.12.30",
        //   name: "Pishy",
        //   phone: "15835765324",
        //   whether: "是"
        // },
        // {
        //   time: "2018.12.30",
        //   name: "Pishy",
        //   phone: "15835765324",
        //   whether: "是"
        // },
        // {
        //   time: "2018.12.30",
        //   name: "Pishy",
        //   phone: "15835765324",
        //   whether: "是"
        // },
        // {
        //   time: "2018.12.30",
        //   name: "Pishy",
        //   phone: "15835765324",
        //   whether: "是"
        // }
      ],
      isEmpty: false
    };
  },

  components: {},

  mounted() {
    console.log("mounted");
    this.getList()
  },
  methods: {
    getList() {
      let reqUrl = this.$API.BUSINESS.USER.RECOMMEND;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            console.log("bussData");
            console.log(bussData);
            if (
              bussData &&
              bussData.recordList &&
              bussData.recordList.length > 0
            ) {
              bussData.recordList.forEach(element => {
                this.list.push({
                  time: element.gmtCreated,
                  name: element.userName,
                  phone: element.mobile,
                  whether: element.isSigning == '1' ? '是': '否'
                });
              });
            } else if(bussData.recordList.length == 0){
              wx.showToast({
                title: '您暂无推荐记录',
                icon: "none",
                duration: 1500
              });
              this.isEmpty = true
            }else {
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
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
  ul {
    padding: 0 15px;
    li {
      border-bottom: 1px solid #e1e1e1;
      height: 42px;
      line-height: 42px;
      display: flex;
      div {
        flex: 1;
        color: #050505;
        font-family: PingFang-SC-Regular;
        font-size: 12px;
        text-align: center;
      }
      &:first-child {
        div {
          color: #050505;
          font-family: PingFang-SC-Medium;
          font-size: 15px;
        }
      }
    }
    .isEmpty{
      height: 40px;
      line-height: 40px;
      color: #999999;
      font-family: PingFang-SC-Regular;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>