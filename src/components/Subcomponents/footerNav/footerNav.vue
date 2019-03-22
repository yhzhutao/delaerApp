<template>
    <div class="footerNav">
      <router-link to="/home" >
        <div class="home">
          <img :src="url1" alt="">
          <p :style="flag==1?{color:'#2A8EF0'}:{color:'#8B8D97'}">首页</p>
        </div>
      </router-link>
      <router-link to="/order">
        <div class="order">
          <img :src="url2" alt="">
          <p :style="flag==2?{color:'#2A8EF0'}:{color:'#8B8D97'}">订单</p>
        </div>
      </router-link>
      <router-link to="/mime">
        <div class="personInformation">
          <img :src="url3" alt="">
          <p :style="flag==3?{color:'#2A8EF0'}:{color:'#8B8D97'}">我的</p>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
      name: "footerNav",
      data(){
        return {
          url1:'',
          url2:'',
          url3:''
        }
      },
      props:{
        flag:String,
        default:'0'
      },
      mounted(){
        this.getUrl();
      },
      methods:{
        getUrl(){
          switch (this.flag) {
            case '0':
              this.url1 = require('../../../image/home@2x.png');
              this.url2 = require('../../../image/order@2x.png');
              this.url3 = require('../../../image/personal@2x.png');
                  break;
            case '1':
              this.url1 = require('../../../image/home-active@2x.png');
              this.url2 = require('../../../image/order@2x.png');
              this.url3 = require('../../../image/personal@2x.png');
                  break;
            case '2':
              this.url1 = require('../../../image/home@2x.png');
              this.url2 = require('../../../image/order-active@2x.png');
              this.url3 = require('../../../image/personal@2x.png');
                  break;
            default:
              this.url1 = require('../../../image/home@2x.png');
              this.url2 = require('../../../image/order@2x.png');
              this.url3 = require('../../../image/personal-active@2x.png');
                  break;
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
.footerNav{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding-top: 6px;
  text-align: center;
  box-sizing: border-box;
  a{
    text-decoration: none;
    img{
      width: 0.22rem;
      height: 0.22rem;
    }
  }
  p{
    font-size: 12px;
    color: #8B8D97;
  }
}
</style>
