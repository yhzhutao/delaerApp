<template>
    <div class="applicationHead">
      <div class="applicationHead-head">
        <div class="back" @click="routerBack"></div>
        新建申请
      </div>
      <ul class="applicationHead-content">
        <li class="left">
          <div class="left-top" :style="(flag==1||flag==2||flag==3)?{background:'#F6CB5B'}:{background:'#F2ECDB'}"></div>
          <div class="left-middle" :style="(flag==1||flag==2||flag==3)?{background:'#F6CB5B'}:{background:'#F2ECDB'}">1</div>
          <p class="left-bottom" :style="(flag==1||flag==2||flag==3)?{color:'#5D6065'}:{color:'#B0B1B7'}">身份证拍摄</p>
        </li>
        <li class="center">
          <div class="left-top" :style="(flag==2||flag==3)?{background:'#F6CB5B'}:{background:'#F2ECDB'}"></div>
          <div class="left-middle" :style="(flag==2||flag==3)?{background:'#F6CB5B'}:{background:'#F2ECDB'}">2</div>
          <p class="left-bottom" :style="(flag==2||flag==3)?{color:'#5D6065'}:{color:'#B0B1B7'}">手机号码验证</p>
        </li>
        <li class="right">
          <div class="left-top" :style="flag==3?{background:'#F6CB5B'}:{background:'#F2ECDB'}"></div>
          <div class="left-middle" :style="flag==3?{background:'#F6CB5B'}:{background:'#F2ECDB'}">3</div>
          <p class="left-bottom" :style="flag==3?{color:'#5D6065'}:{color:'#B0B1B7'}">申请信息录入</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "applicationHead",
      data(){
          return {
          }
      },
      props:{
          flag:String,
          default:'0'
      },
      methods:{
        getStatus:function(){
          switch (this.flag) {
            case '0':
              break;
            case '1':
              break;
            case '2':
              break;
            default:
              break;
          }
        },
        routerBack: function () {
          this.$router.back(-1);
        },
      }
    }
</script>

<style lang="scss" scoped>
.applicationHead{
  .applicationHead-head{
    position: relative;
    background: #2A8EF0;
    font-size: 0.17rem;
    font-weight: 700;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    .back{
      position: absolute;
      left: 25px;
      top: 16px;
      width: 14px;
      height: 14px;
      font-weight: 700;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transform: rotate(45deg);
    }
  }
  .applicationHead-content{
    display: flex;
    flex: 1;
    height: 72px;
    background: #fff;
    li{
      width: 33.3%;
      .left-top{
        width: 100%;
        height: 10px;
        background: #F2ECDB;
      }
      .left-middle{
        margin: -10px auto 0 auto;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #F2ECDB;
        color: #fff;
        line-height: 24px;
        text-align: center;
      }
      .left-bottom{
        margin-top: 6px;
        font-size: 0.14rem;
        color: #B0B1B7;
        text-align: center;
      }
    }

  }
}
</style>
