<template>
  <div class="container" v-if="isLoaded">
    <div class="top">
      <div class="weui-search-bar" id="searchBar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <img class="weui-icon-search" src="/static/images/49@2x.png" alt="">
            <input @blur='blurInput' type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="div1">
        <h4 :style="{opacity: priceValue === 0? 1:0}">价格不限</h4>
        <!-- <p :style="{marginLeft: priceValue*4.8+'px'}">{{priceValue===50?'50000元以上/月':priceValue*1000+"元/月"}}</p> -->
        <p>{{priceValue===50?'50000元以上/月':priceValue*1000+"元/月"}}</p>
        <slider @change='priceChange' background-color='#F1F1F1' active-color='#16509B' min='0' max='50' block-color='#16509B' block-size='21' />
      </div>
      <div class="div2">
        <h4 :style="{opacity: peopleCountValue === 0? 1:0}">人数不限</h4>
        <!-- <p :style="{marginLeft: peopleCountValue*5.6+10+'px'}">{{peopleCountValue===50?peopleCountValue+"人以上":peopleCountValue+'人'}}</p> -->
        <p>{{peopleCountValue===50?peopleCountValue+"人以上":peopleCountValue+'人'}}</p>
        <slider @change='peopleCountChange' background-color='#F1F1F1' active-color='#16509B' min='0' max='50' block-color='#16509B' block-size='21' />
      </div>
      <div class="div3">
        <p v-show="sizeValue1" class='p1'>希望空间偏经济</p>
        <p v-show="sizeValue2" class='p2'>希望空间偏舒适</p>
        <p v-show="sizeValue3" class='p3'>希望空间偏高端</p>
        <slider background-color='#F1F1F1' active-color='#F1F1F1' block-color='#16509B' max='3' min='1' block-size='21' @change='sizeChange' />
        <ul>
          <li>经济</li>
          <li>舒适</li>
          <li>高端</li>
        </ul>
      </div>
    </div>
    <div class="foot">
      <a  @click='jumpList' class="weui-btn weui-btn_plain-default">智能找房</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceValue: 0,
      peopleCountValue: 0,
      sizeValue: 1,
      sizeValue1: true,
      sizeValue2: false,
      sizeValue3: false,
      degree: "ECONOMY",
      isLoaded: false
    };
  },

  components: {},
  watch: {
    sizeValue() {
      if (this.sizeValue === 1) {
        this.sizeValue1 = true;
        this.sizeValue2 = false;
        this.sizeValue3 = false;
        this.degree = "ECONOMY";
      } else if (this.sizeValue === 2) {
        this.sizeValue1 = false;
        this.sizeValue2 = true;
        this.sizeValue3 = false;
        this.degree = "COMFORT";
      } else {
        this.sizeValue1 = false;
        this.sizeValue2 = false;
        this.sizeValue3 = true;
        this.degree = "HIGHEND";
      }
    }
  },
  created() {},
  mounted() {
    this.isLoaded = true
  },
  methods: {
    priceChange(e) {
      this.priceValue = e.target.value;
      console.log("this.priceValue");
      console.log(this.priceValue);
    },
    peopleCountChange(e) {
      this.peopleCountValue = e.target.value;
      console.log("this.peopleCountValue");
      console.log(this.peopleCountValue);
    },
    sizeChange(e) {
      this.sizeValue = e.target.value;
      console.log("this.sizeValue");
      console.log(this.sizeValue);
    },
    jumpList() {
      var params =
        "?degree=" +
        this.degree +
        "&maxSeat=" +
        this.peopleCountValue+
        "&maxTotalPrice=" +
        this.priceValue * 1000;
      console.log(params);
      const url = "../inteSearchRoomList/main" + params;
      console.log(url);
      wx.navigateTo({ url });
    }
  }
};
</script>

<style scoped lang='less'>
.container {
  .top {
    .weui-search-bar {
      // height: 69px;
      // line-height: 69px;
      width: 285px;
      background-color: #fff;
      padding: 0;
      margin: 0px auto 0;
      border: none;
      .weui-search-bar__form {
        padding: 15px 0;
        height: 38px;
        line-height: 38px;
        border: none;
        .weui-search-bar__box {
          border-radius: 19px;
          background-color: #f4f4f4;
          text-align: left;
          height: 38px;
          line-height: 35px;
          padding: 0;
          .weui-icon-search {
            width: 16px;
            height: 16px;
            margin-left: 13px;
            margin-right: 6px;
          }
          .weui-search-bar__input {
            display: inline-block;
            position: relative;
            top: 6px;
          }
        }
      }
    }
  }
  .middle {
    margin: 15px;
    > div {
      h4 {
        font-family: PingFang-SC-Medium;
        color: #050505;
        font-size: 15px;
      }
    }
    .div1,
    .div2 {
      p {
        margin-left: 9px;
        font-family: PingFang-SC-Regular;
        color: #999;
        font-size: 13px;
        margin: 6px 0 8px 9px;
        display: inline;
      }
      slider {
        margin-left: 18px;
      }
    }
    .div2 {
      margin-top: 25px;
    }
    .div3 {
      margin-top: 70px;
      margin-bottom: 60px;
      p {
        color: #999;
        font-size: 13px;
        font-family: PingFang-SC-Regular;
      }
      .p1 {
        text-align: left;
      }
      .p2 {
        text-align: center;
      }
      .p3 {
        text-align: right;
      }
      slider {
        margin: 15px 25px 15px 15px;
      }
      ul {
        display: flex;
        li {
          flex: 1;
          text-align: center;
          color: #050505;
          font-family: PingFang-SC-Regular;
          font-size: 15px;
        }
      }
    }
  }
  .foot {
    .weui-btn {
      width: 270px;
      height: 45px;
      line-height: 45px;
      border-radius: 23px;
      border-color: transparent;
      background-color: #16509b;
      color: #fff;
      margin: 0 auto;
      font-family: PingFang-SC-Medium;
      font-size: 17px;
      text-align: center;
    }
  }
}
</style>
