<template>
  <div class="container">
    <div class="top" v-show="!success">
      <div>
        <p>姓名</p>
        <input type="text" v-model="realname" placeholder="请输入">
      </div>
      <div>
        <p>公司名称</p>
        <input type="text" v-model="company" placeholder="请输入">
      </div>
      <div>
        <p>手机号</p>
        <input type="number" v-model="mobile" placeholder="请输入">
      </div>
      <div>
        <p>预约时间</p>
        <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
          <input :disabled='true' :value='time' placeholder='请选择' />
        </picker>
      </div>
      <button @click='submit'>确认提交</button>
    </div>
    <div class="hide" v-show="success">
      <img src="/static/images/13@2x.png" alt="">
      <h2>预约成功</h2>
      <p>
        恭喜您预约成功，我们将尽快与您联系 请您保持电话畅通
      </p>
      <a class="weui-btn weui-btn_plain-default" @click='backIndex'>回首页</a>
    </div>
  </div>
</template>

<script>
const date = new Date();
const years = [];
const months = [];
const days = [];
const hours = [];
const minutes = [];
//获取年
for (let i = 2019; i <= date.getFullYear() + 5; i++) {
  years.push("" + i);
}
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i);
}
//获取日期
for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  days.push("" + i);
}
//获取小时
for (let i = 0; i < 24; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  hours.push("" + i);
}
//获取分钟
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  minutes.push("" + i);
}
var date2 = new Date()
var y = date2.getFullYear()+1
var m = date2.getMonth()
var d = date2.getDate()-1
var hh = date2.getHours()
var mm = date2.getMinutes()
export default {
  data() {
    return {
      success: false,
      bookingTime: "",
      company: "",
      mobile: "",
      realname: "",
      roomId: "",
      time: "",
      multiArray: [years, months, days, hours, minutes],
      // multiIndex: [0, 9, 16, 10, 17],
      multiIndex: [y, m, d, hh, mm],
      choose_year: ""
    };
  },

  components: {},
  mounted() {
    this.roomId = this.$root.$mp.query.id;

    this.choose_year = this.multiArray[0][0];
  },
  methods: {
    //获取时间日期
    bindMultiPickerChange: function(e) {
      // console.log('picker发送选择改变，携带值为', e.detail.value)
      this.multiIndex = e.target.value;
      const index = this.multiIndex;
      const year = this.multiArray[0][index[0]];
      const month = this.multiArray[1][index[1]];
      const day = this.multiArray[2][index[2]];
      const hour = this.multiArray[3][index[3]];
      const minute = this.multiArray[4][index[4]];
      // console.log(`${year}-${month}-${day}-${hour}-${minute}`);
      this.time = year + "-" + month + "-" + day + " " + hour + ":" + minute;
      
      this.bookingTime =year + "-" + month + "-" + day +'T'+hour + ":" + minute+':00.000Z'
      // this.bookingTime = this.time
    },
    //监听picker的滚动事件
    bindMultiPickerColumnChange: function(e) {
      //获取年份
      if (e.detail.column == 0) {
        let choose_year = this.multiArray[e.detail.column][e.detail.value];
        this.choose_year = choose_year;
      }
      //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      if (e.detail.column == 1) {
        let num = parseInt(this.multiArray[e.detail.column][e.detail.value]);
        let temp = [];
        if (
          num == 1 ||
          num == 3 ||
          num == 5 ||
          num == 7 ||
          num == 8 ||
          num == 10 ||
          num == 12
        ) {
          //判断31天的月份
          for (let i = 1; i <= 31; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.multiArray[2] = temp;
        } else if (num == 4 || num == 6 || num == 9 || num == 11) {
          //判断30天的月份
          for (let i = 1; i <= 30; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.multiArray[2] = temp;
        } else if (num == 2) {
          //判断2月份天数
          let year = parseInt(this.choose_year);
          if ((year % 400 == 0 || year % 100 != 0) && year % 4 == 0) {
            for (let i = 1; i <= 29; i++) {
              if (i < 10) {
                i = "0" + i;
              }
              temp.push("" + i);
            }
            this.multiArray[2] = temp;
          } else {
            for (let i = 1; i <= 28; i++) {
              if (i < 10) {
                i = "0" + i;
              }
              temp.push("" + i);
            }
            this.multiArray[2] = temp;
          }
        }
      }
      var data = {
        multiArray: this.multiArray,
        multiIndex: this.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
    },
    backIndex() {
      wx.navigateBack({
        delta: 2
      });
    },
    submit() {
      if (
        !this.bookingTime ||
        !this.mobile ||
        !this.realname
      ) {
        wx.showToast({
          title: "请填写完整信息",
          icon: "none",
          duration: 1500
        });
        return;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.mobile)) {
        wx.showToast({
          title: "您的手机号格式不正确，请重新输入",
          icon: "none",
          duration: 1500
        });
        return;
      }
      wx.showLoading({
        title: "加载中"
      });
      let reqUrl = this.$API.BUSINESS.USER.LOOKINGSUBMIT;
      this.$myRequest(
        reqUrl,
        {
          bookingTime: this.bookingTime,
          company: this.company,
          mobile: this.mobile,
          realname: this.realname,
          roomId: this.roomId
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            let bussData = res.data.data.bussData;
            wx.hideLoading();
            if (bussData) {
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });
      this.success = true;
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container {
  .top {
    margin: 20px 15px;
    div {
      border-bottom: 1px solid #e1e1e1;
      p {
        color: #050505;
        font-family: PingFang-SC-Medium;
        font-size: 15px;
        margin-top: 20px;
      }
      input {
        color: #333;
        font-family: PingFang-SC-Regular;
        font-size: 13px;
        margin: 15px 0;
      }
    }
    button {
      width: 270px;
      height: 45px;
      line-height: 45px;
      background-color: #16509b;
      border: 1px solid transparent;
      border-radius: 23px;
      font-family: PingFang-SC-Medium;
      font-size: 17px;
      color: #fff;
      text-align: center;
      margin: 30px auto 0;
    }
  }
  .hide {
    text-align: center;
    margin-top: 47px;
    img {
      width: 75px;
      height: 75px;
    }
    h2 {
      margin: 15px 0;
      color: #333;
      font-size: 24px;
      font-family: PingFang-SC-Medium;
    }
    p {
      margin: 0 auto;
      width: 245px;
      color: #999;
      font-size: 15px;
      font-family: PingFang-SC-Regular;
      line-height: 24px;
    }
    a {
      margin-top: 20px;
      margin: 20px auto 0;
      border: 1px solid;
      border-color: #999;
      border-radius: 15px;
      color: #999;
      width: 70px;
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      padding: 0;
      background-color: #fff;
    }
  }
}
</style>
