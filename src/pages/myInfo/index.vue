<template>
  <div class="container">
    <ul>
      <li>
        <span>头像</span>
        <img @click='chooseImg' class='avatar' :src="avatar" alt="" mode='aspectFill'>
      </li>
      <li>
        <span>昵称</span>
        <input type="text" maxlength="50" v-model="nickname" placeholder="请输入">
      </li>
      <li @click='jumpChangePhone' class='phoneBox'>
        <span>手机号</span>
        <input :disabled='true' type="text" v-model="mobile" placeholder="请输入">
        <!-- <p>15270914294</p> -->
        <img class='phone' src="/static/images/121.png" alt="">
      </li>
      <li>
        <span>姓名</span>
        <input type="text" maxlength="50" v-model="realname" placeholder="请输入">
      </li>
      <li>
        <span>公司昵称</span>
        <input type="text" maxlength="50" v-model="company" placeholder="请输入">
      </li>
    </ul>
    <button @click='sumbit'>保存</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      avatar: "",
      company: "",
      nickname: "",
      realname: "",
      file: ""
      // mobile: store.state.mobile
    };
  },

  components: {},
  computed: {
    mobile() {
      return store.state.mobile;
    }
  },
  mounted() {
    try {
      const value = wx.getStorageSync("userInfo");
      console.log(value.avatarUrl)
      if (value) {
        // Do something with return value{"avatar":"","avatarUrl":"","company":"","id":1,"mobile":"","point":0,"realname":""}
        this.avatar = value.avatarUrl || "/static/images/8@2x.png";
        this.company = value.company;
        this.mobile = value.mobile;
        this.realname = value.realname;
        this.nickname = value.nickname;
      }
    } catch (e) {
      // Do something when catch error
    }
  },

  methods: {
    sumbit() {
      console.log("sumbit");
      let reqUrl = this.$API.USER.SAVEUSERINFO;
      this.$myRequest(
        reqUrl,
        {
          avatar: this.avatar,
          company: this.company,
          nickname: this.nickname,
          realname: this.realname
        },
        {}
      )
        .then(res => {
          if (res.data.status === 200) {
            this.isLoadingList = false;
            let bussData = res.data.data.bussData;
            console.log("bussData");
            console.log(bussData);
            if (bussData) {
              wx.setStorage({
                key: "userInfo",
                data: {
                  avatarUrl: this.avatar,
                  company: this.company,
                  nickname: this.nickname,
                  realname: this.realname,
                  mobile: store.state.mobile
                }
              });
              wx.showToast({
                title: "保存成功",
                icon: "none",
                duration: 1500
              });
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
    jumpChangePhone() {
      if (this.mobile) {
        const url = "../changePhone/main";
        console.log(url);
        wx.navigateTo({ url });
      } else {
        const url = "../bindPhoneInfo/main";
        console.log(url);
        wx.navigateTo({ url });
      }
    },
    chooseImg() {
      var _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths;
          var sessionId = wx.getStorageSync('sessionId')
          wx.uploadFile({
            url: _this.$http.config.baseURL+_this.$API.BASE.MINIUPLOADFILE+'?sessionId='+sessionId, 
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {},
            success(res2) {
              const data = res2.data
              if(res2.statusCode == '200') {
                _this.avatar = JSON.parse(data).data.bussData.fileUrl
              }
              // do something
            }
          })
        }
      });
    }
  },
  created() {}
};
</script>

<style scoped lang='less'>
.container {
  ul {
    margin: 10px 15px;
    li {
      border-bottom: 1px solid #e1e1e1;
      height: 55px;
      line-height: 55px;
      position: relative;
      span {
        color: #000;
        font-size: 15px;
        font-family: PingFang-SC-Regular;
      }
      input {
        float: right;
        text-align: right;
        font-family: PingFang-SC-Regular;
        font-size: 15px;
        margin-top: 14px;
        width: 80%;
      }
      img.avatar {
        float: right;
        width: 40px;
        height: 40px;
        border: 1px solid transparent;
        border-radius: 50%;
        margin-top: 8px;
        object-fit: cover;
      }
      .avatarInput{
        position: absolute;
        // opacity: 0;
        display: block;
        float: right;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      .phone {
        position: absolute;
        top: 21px;
        right: 0px;
        width: 12px;
        height: 12px;
      }
      p {
        float: right;
        display: inline-block;
        text-align: right;
        font-family: PingFang-SC-Regular;
        font-size: 15px;
        margin-right: 14px;
      }
    }
    .phoneBox {
      input {
        margin-right: 16px;
      }
    }
  }
  button {
    background-color: #16509b;
    width: 270px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 17px;
    font-family: PingFang-SC-Medium;
    margin-top: 30px;
    border: 1px solid transparent;
    border-radius: 23px;
  }
}
</style>
