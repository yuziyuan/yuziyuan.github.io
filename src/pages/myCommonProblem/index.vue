<template>
  <div class="container myCommonProblem">
    <ul>
      <li v-for="(item, index) in list" :key='index'>
        <p>
          {{index+1+'.'+item.question}}
        </p>
        <p>
          {{item.answer}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
      ]
    };
  },

  components: {},

  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let reqUrl = this.$API.BUSINESS.USER.QUESTION;
      this.$myRequestGet(reqUrl, {}, {})
        .then(res => {
          if (res.data.status === 200) {
            this.isLoadingList = false;
            let bussData = res.data.data.bussData;
            if (bussData && bussData.length > 0) {
              this.list = bussData
            }
          }
        })
        .catch(error => {
          console.log("pdf 2 png error: ", error);
        });

      // BUSINESS.USER.QUESTION
    }
  },

  created() {}
};
</script>

<style scoped lang='less'>
.container.myCommonProblem {
  ul {
    li {
      p {
        &:first-child {
          height: 44px;
          line-height: 44px;
          font-size: 15px;
          font-family: PingFang-SC-Medium;
          color: #16509b;
          padding-left: 15px;
        }
        &:last-child {
          height: 40px;
          line-height: 40px;
          background-color: #f4f4f4;
          font-size: 13px;
          font-family: PingFang-SC-Medium;
          color: #333;
          padding-left: 15px;
        }
      }
    }
  }
}
</style>
