<template>
    <div class="home">
      <header>
        <span>首页</span>
      </header>
      <div class="function">
        <router-link to="/createApplication">
          <div class="new-order">
            <div class="new-order-content">
              <img src="../../image/pencil@2x.png" alt="">
              <p>新增订单</p>
            </div>
          </div>
        </router-link>
        <div class="scheme-trial-calculation">
          <div class="scheme-trial-calculation-content">
            <img src="../../image/calculate@2x.png" alt="">
            <p>方案试算</p>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-head clearfix">
          <div class="title">重要通知</div>
          <div class="more">查看更多</div>
        </div>
        <div class="notice-content">
          <ul>
            <li>
              <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
              <div class="long-ago">32分钟前</div>
            </li>
            <li>
              <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
              <div class="long-ago">32分钟前</div>
            </li>
            <li>
              <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
              <div class="long-ago">32分钟前</div>
            </li>
          </ul>
        </div>
      </div>
      <v-FooterNav flag='1'></v-FooterNav>
    </div>
</template>

<script>
  import FooterNav from '@/components/Subcomponents/footerNav/footerNav'
    export default {
        name: "home",
      components:{
          'v-FooterNav':FooterNav
      }
    }
</script>

<style lang="scss" scoped>
  .home{
    header{
      width: 100%;
      text-align: center;
      color: #fff;
      height: 135px;
      font-size: 0.17rem;
      background: url('../../image/title@2x.png') no-repeat;
      background-size: 100% 100%;
      span{
        display: inline-block;
        margin-top: 30px;
      }
    }
    .function{
      display: flex;
      justify-content: space-around;
      margin-top: -31px;
      .new-order,.scheme-trial-calculation{
        position: relative;
        width: 160px;
        height: 120px;
        background: #fff;
        border-radius: 8px;
        text-align: center;
        p{
          margin: 8px;
          font-size: 0.14rem;
          line-height: 20px;
        }
      }
      .new-order{
        .new-order-content{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          img{
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
      .scheme-trial-calculation{
        .scheme-trial-calculation-content{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          img{
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
    }
    .notice{
      position: relative;
      background: #fff;
      margin-top: 16px;
      .notice-head{
        .title{
          float: left;
          margin: 14px 0 0 16px;
          font-size: 0.18rem;
          color: #303640;
          font-weight: 700;
          line-height: 25px;
        }
        .more{
          float: right;
          margin: 18px 24px 0 0;
          color: #B0B1B7;
          font-size: 0.15rem;
          line-height: 21px;
        }
        height: 40px;
      }
      .notice-content{
        ul{
          li{
            position: relative;
            box-sizing: border-box;
            padding: 16px 16px 32px 0;
            margin-left: 16px;
            border-bottom: 1px solid #EEEFF2;
            font-size: 0.14rem;
            line-height: 0.20rem;
            color: #282A2E;
            .long-ago{
              position: absolute;
              right: 16px;
              bottom: 8px;
              color: #B0B1B7;
              font-size: 0.14rem;
              line-height: 20px;
            }
          }
        }
      }
    }
    .footerNav{
      position: fixed;
      bottom: 0;
    }
  }
</style>
