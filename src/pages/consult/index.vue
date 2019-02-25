<template>
  <div class="container">
    <div class="top">
      <img src="/static/images/33@2x.png" alt="">
    </div>
    <div class="middle">
      <ul>
        <li>
          <img class='icon' src="/static/images/6.jpg" alt="">
          <div class="txt">
            <h3>在线咨询</h3>
            <p>一对一客服为您解答</p>
          </div>
          <img class='allow' src="/static/images/4.png" alt="">
          <button open-type='contact'></button>
        </li>
        <li @click='jump'>
          <img class='icon' src="/static/images/8.jpg" alt="">
          <div class="txt">
            <h3>预约咨询</h3>
            <p>预约时间为您解答</p>
          </div>
          <img class='allow' src="/static/images/4.png" alt="">
        </li>
        <li @click='call'>
          <img class='icon' src="/static/images/7.jpg" alt="">
          <div class="txt">
            <h3>电话咨询</h3>
            <p>快速解答客服，不耽误！</p>
          </div>
          <img class='allow' src="/static/images/4.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    jump() {
      const url = '../makeAnAppointC/main';
      console.log(url);
      wx.navigateTo({ url });
    },
    call() {
      wx.makePhoneCall({
        phoneNumber: "1340000"
      });
    },
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
  .top {
    height: 32px;
    > img {
      width: 100%;
      height: 88px;
      position: absolute;
      z-index: -1;
    }
  }
  .middle {
    margin: 0 30px 0;
    ul {
      li {
        border: 1px solid #e1e1e1;
        border-radius: 12px;
        margin-bottom: 20px;
        padding: 20px 25px 19px 18px;
        background-color: #fff;
        height: 75px;
        position: relative;
        img.icon {
          width: 62px;
          height: 75px;
          // vertical-align: middle;
          margin-right: 15px;
        }
        .allow {
          width: 15px;
          height: 15px;
          float: right;
          position: absolute;
          top: 50px;
          right: 25px;
        }
        div.txt {
          display: inline-block;
          position: relative;
          top: -12px;
          h3 {
            font-family: PingFang-SC-Medium;
            color: #16509b;
            font-size: 21px;
            margin-bottom: 15px;
          }
          p {
            font-family: PingFang-SC-Regular;
            color: #333;
            font-size: 15px;
          }
        }
        &:first-child {
          button {
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
          }
        }
      }
    }
  }
}
</style>
