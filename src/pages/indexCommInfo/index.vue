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
      // p:'<span class="--mb--rich-text" style="font-family: SourceHanSansSC; color: rgb(16, 16, 16); letter-spacing: 0px; line-height: 21px;" data-boldtype="0"><p align="justify" style="line-height:0; margin-bottom:5px;"><span color="#085294"></span><br></p><p align="justify" style="line-height:0; margin-bottom:5px;">↵↵<span color="#085294"></span><br></p><p align="justify" style="margin: 0px; text-indent: 12pt;"><span style="margin: 0px; font-family: 宋体; font-size: 12pt;"><span color="#085294">深圳市苏成投资发展有限公司成立于<span lang="EN-US" style="margin: 0px;">2006</span>年，坐落于深圳市福田区上梅林卓越汇，系深圳市商务资产租赁行业的知名企业。</span><span lang="EN-US" style="margin: 0px;"></span></span></p><p align="justify" style="line-height:0; margin-bottom:5px;">↵↵<span color="#085294"></span><br></p><p align="justify" style="margin: 0px; text-indent: 12pt;"><span style="margin: 0px; font-family: 宋体; font-size: 12pt;"><span color="#085294">深圳市苏成投资发展有限公司倚靠于大型科技企业发展背景，以前瞻性的眼光打造了深圳市苏成空间商务办公品牌，布局于房地产存量市场，专注于高档商务办公空间的租赁业务，通过自身强大的资金实力和卓越的运营管理能力，打造“轻资产”办公，创造<span style="margin: 0px;">新型办公租赁模式。</span></span></span></p><p align="justify" style="margin: 0px; text-indent: 12pt;"><span style="margin: 0px; font-family: 宋体; font-size: 12pt;"><span style="margin: 0px;"><span style="margin: 0px; font-family: 宋体; font-size: 12pt;"><span color="#085294">公司目前拥有<span lang="EN-US" style="margin: 0px;">50</span>多个甲级写字楼项目，覆盖了深圳、北京各区的<span lang="EN-US" style="margin: 0px;">CBD</span>中心和产业园区。合作客户包括众多知名央企国企、知名院校、自主创业者，入驻行业覆盖了金融、电子商务、资产管理、餐饮、医疗、教育、培训、咨询、制造等。</span></span></span></span></p><span style="margin: 0px; font-family: 宋体; font-size: 12pt;"><span color="#000000"><span style="margin: 0px;"><span style="margin: 0px; font-family: 宋体; font-size: 12pt;"><p style="margin: 0px; text-indent: 12pt;"><span color="#6badde"></span><span color="#085294"></span><br></p></span></span></span></span><p style="margin: 0px; text-indent: 12pt;"><img class="note-float-left" style="width: 100%; float: left;" src= "http://sucheng-1254155544.cos.ap-guangzhou.myqcloud.com/icebartech-sucheng/279.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDsapvujX0Xbr02FHLCydRfYFet18irMq6%26q-sign-time%3D1551752548%3B1551754348%26q-key-time%3D1551752548%3B1551754348%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4f679f05aab69245ff924e8927aace84ce374b7e"><span style="margin: 0px; font-family: 宋体; font-size: 12pt;"><span color="#000000"><span style="margin: 0px;"><span lang="EN-US" style="margin: 0px;"><br></span></span></span></span></p><p style="line-height:0; margin-bottom:5px;"><span color="#b00000" face="宋体" size="3"><br></span></p></span><p style="line-height:0; margin-bottom:5px;"><span face="宋体" size="3"></span><span class="--mb--rich-text" style="font-family: SourceHanSansSC; color: rgb(16, 16, 16); letter-spacing: 0px; line-height: 21px;" data-boldtype="0"><br></span></p>"'
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
            var r1 = '<font'
            var r2 = "</font"
            if (bussData) {
              this.p = bussData.replace(/<font/g,'<span').replace(/\/font>/g,'/span>')
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
