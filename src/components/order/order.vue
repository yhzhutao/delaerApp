<template>
    <div class="order">
      <header>
        <span>订单</span>
        <ul>
          <li>全部</li>
          <li>待提交</li>
          <li>待发送</li>
          <li>待审批</li>
          <li>已退回</li>
          <li>已审批</li>
        </ul>
      </header>
      <div class="content">
        <ul>
          <li>
            <div class="first clearfix">
              <span class="status">待提交</span>
              <div class="tele">
                <img src="../../image/tele@2x.png" alt="">
                <span class="teleNum">18768145525</span>
              </div>
            </div>
            <div class="second clearfix">
              <span class="name">
                李敏
              </span>
              <div class="camera">
                <img src="../../image/camera@2x.png" alt="">
                <span>****11571x</span>
              </div>
            </div>
            <div class="third">
              <img src="../../image/motoType@2x.png" alt="">
              <div class="motoType">
                <span>上汽通用</span>
                <span>五菱宏光S1</span>
                <span>旗舰版</span>
                <span>棕色</span>
              </div>
            </div>
            <div class="fourth">
              <img src="../../image/RMB@2x.png" alt="">
              <span>120,000.00</span>
            </div>
          </li>
        </ul>
        <div class="bottomDesc">已全部加载</div>
        <div class="createOrder">
          <img src="../../image/createOrder@2x.png" alt="">
        </div>
      </div>
      <v-FooterNav flag='2'></v-FooterNav>
    </div>
</template>

<script>
  import FooterNav from '@/components/Subcomponents/footerNav/footerNav'
    export default {
        name: "order",
      components:{
          'v-FooterNav':FooterNav
      }
    }
</script>

<style lang="scss" scoped>
.order{
  header{
    width: 100%;
    text-align: center;
    color: #fff;
    height: 135px;
    font-size: 17px;
    background: url('../../image/title@2x.png') no-repeat;
    background-size: 100% 100%;
    span{
      display: inline-block;
      line-height: 24px;
      margin-top: 30px;
    }
    ul{
      display: flex;
      margin-top: 15px;
      justify-content: space-around;
      font-size: 15px;
      line-height: 21px;
    }
  }
  .content{
    margin: -31px 16px 0 16px;
    ul{
      li{
        height: 126px;
        padding: 16px;
        background: #fff;
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        .first{
          .status{
            display: block;
            float: left;
            width: 48px;
            height: 20px;
            background: #F2CD63;
            color: #fff;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
            border-radius: 2px;
          }
          .tele{
            position: relative;
            width: 110px;
            height: 20px;
            float: right;
            background: #EBF3FB;
            line-height: 20px;
            img{
              margin-left: 8px;
              vertical-align: middle;
              width: 0.14rem;
              height: 0.14rem;
            }
            .teleNum{
              font-size: 12px;
              color: #2A8FF0;
              vertical-align: middle;
            }
          }
        }
        .second{
          margin-top: 6px;
          .name{
            float: left;
            line-height: 22px;
            font-size: 16px;
            color: #282A2E;
            font-weight: 700;
          }
          .camera{
            float:right;
            img{
              width: 18px;
              height: 18px;
              vertical-align: middle;
            }
            span{
              color: #B0B1B7;
              font-size: 12px;
              vertical-align: middle;
            }
          }
        }
        .third{
          margin-top: 6px;
          img{
            vertical-align: middle;
            width: 18px;
            height: 18px;
          }
          .motoType{
            vertical-align: middle;
            display: inline-block;
            font-size: 12px;
            color: #5D6065;
          }
        }
        .fourth{
          margin-top: 4px;
          img{
            vertical-align: middle;
            width: 0.18rem;
            height: 0.18rem;
          }
          span{
            vertical-align: middle;
            color:#5D6065;
            font-size: 12px;
          }
        }
        &:last-child{
          margin-bottom: 24px;
        }
      }
    }
    .bottomDesc{
      font-size: 12px;
      color: #B0B1B7;
      text-align: center;
      margin-bottom: 74px;
    }
    .createOrder{
      position: fixed;
      right: 40px;
      bottom: 90px;
      img{
        width: 0.56rem;
        height: 0.56rem;
      }
    }
  }
  .footerNav{
    position: fixed;
    bottom: 0;
  }
}
</style>
