<template>
  <div class="container">
    <div class="top">
      <!-- <p>{{p}}</p> -->
      <rich-text class='p' :nodes='p'></rich-text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p:''
    };
  },
  components: {},
  
  mounted() {
    this.getCompanyProfile();
  },
  created() {
    
  },
  methods: {
    getCompanyProfile() {
      let reqUrl = this.$API.BUSINESS.USER.SYS + "companyProfile";
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            if (bussData) {
              this.p = bussData;
            } else {
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
    },
  }
};
</script>

<style scoped lang='less'>
.container {
  .top {
    margin: 15px;
    .p,p{
      line-height: 24px;
      font-size: 15px;
      color: #333;
      font-family: PingFang-SC-Regular;
    }
  }
}
</style>
