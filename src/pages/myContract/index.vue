<template>
  <div class="container">
    <scroll-view scroll-y style="height: 624px;" @scrolltolower="lower">
      <ul>
        <li v-for="(item, index) in list" :key='index'>
          <p>{{item.address}}</p>
          <span>{{"签约日期："+item.contractTime}}</span>
          <span>{{"签约日期："+item.contractDate+'年'}}</span>
          <span>{{"到期日期："+item.ExpireTime}}</span>
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
        //   address: '沛鸿大厦506室',
        //   contractTime: '2018.12.30',
        //   contractDate: '2',
        //   ExpireTime: '2020.12.30',
        // },
        // {
        //   address: '沛鸿大厦506室',
        //   contractTime: '2018.12.30',
        //   contractDate: '2',
        //   ExpireTime: '2020.12.30',
        // },
        // {
        //   address: '沛鸿大厦506室',
        //   contractTime: '2018.12.30',
        //   contractDate: '2',
        //   ExpireTime: '2020.12.30',
        // },
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
      let reqUrl = this.$API.BUSINESS.USER.SINGING;
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
                    address: element.roomName ,
                    contractTime: element.signingDate.substr(0,10) ,
                    contractDate: element.signingLimit ,
                    ExpireTime: element.dueDate.substr(0,10)
                });
              });
              if(bussData.length < this.pageSize) {
                this.listIsOver = true;
              }
            }else if(bussData.length == 0){
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
.container{
  margin-bottom: 0;
  ul{
    li{
      margin: 20px 15px 0 15px;
      padding-bottom: 20px;
      border-bottom: 1px solid #E1E1E1;
      p{
        color: #16509B;
        font-family: PingFang-SC-Medium;
        font-size: 15px;
      }
      span{
        display: inline-block;
        width: 50%;
        font-family: PingFang-SC-Regular;
        font-size: 12px;
        color: #050505;
      }
    }
  }
}
</style>
