<template>
    <div class="mime">
      <header>
        <span>我的</span>
      </header>
      <div class="content">
        <div class="content-top">
          <div class="person-info">
            <div class="icon">
              <img src="../../image/headPortrait@2x.png" alt="">
            </div>
            <div class="person-info-content">
              <p>张敏</p>
              <p>13588889999</p>
            </div>
          </div>
          <div class="company-info">
            <div class="company">
              <img src="../../image/company@2x.png" alt="">
            </div>
            <div class="company-info-content">
              信雅达系统工程股份有限公司
            </div>
          </div>
        </div>
        <ul class="content-bottom">
          <li class="order">
            <img src="../../image/myApplication@2x.png" alt="" class="icon">
            我的订单
          </li>
          <li class="account-management">
            <img src="../../image/subAccount @2x.png" alt="" class="icon">
            账户管理
          </li>
          <li class="help">
            <img src="../../image/feedback@2x.png" alt="" class="icon">
            帮助与反馈
          </li>
          <li class="about-us">
            <img src="../../image/aboutUs@2x.png" alt="" class="icon">
            关于我们
          </li>
        </ul>
        <router-link to="/login">
          <div class="login-out">
            <button>
              退出登录
            </button>
          </div>
        </router-link>
      </div>
      <v-FooterNav flag='3'></v-FooterNav>
    </div>
</template>

<script>
    import FooterNav from '@/components/Subcomponents/footerNav/footerNav'
    export default {
        name: "mime",
      components:{
          'v-FooterNav':FooterNav
      }
    }
</script>

<style lang="scss"  scoped>
.mime{
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
      margin-top: 30px;
    }
  }
  .content{
    margin: -30px 16px 0 16px;
    .content-top{
      background: #fff;
      border-radius: 16px;
      .person-info{
        display: flex;
        align-items: center;
        height: 82px;
        border-bottom: 1px solid #EEEFF2;
        .icon{
          display: inline-block;
          width: 50px;
          border-radius: 50%;
          padding-left: 16px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .person-info-content{
          display: inline-block;
          margin-left: 8px;
          line-height: 22px;
          p:first-child{
            color: #282A2E;
            font-size: 0.16rem;
          }
          p:last-child{
            color: #5D6065;
            font-size: 0.14rem;
          }
        }
      }
      .company-info{
        display: flex;
        align-items: center;
        .company{
          display: inline-block;
          width: 40px;
          height: 40px;
          vertical-align: middle;
          margin-left: 16px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .company-info-content{
          display: inline-block;
          margin-left: 13px;
          color: #282A2E;
          font-size: 0.14rem;
        }
        height: 50px;
      }
    }
    .content-bottom{
      margin-top: 16px;
      background: #fff;
      height: 202px;
      border-radius: 8px;
      li{
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 16px;
        height: 50px;
        border-bottom: 1px solid #EEF0F2;
        color: #282A2E;
        font-size: 0.14rem;
        .icon{
          width: 40px;
          height: 40px;
          margin-right: 16px;
        }
        &:after{
          position: absolute;
          display: block;
          content: '';
          width: 0.14rem;
          height: 0.14rem;
          border-top: 1px solid #EEF0F2;
          border-right: 1px solid #EEF0F2;
          transform: rotate(45deg);
          right: 32px;
        }
      }
    }
    .login-out{
      margin: 40px 16px 0 16px;
      height: 50px;
      font-size: 0.16rem;
      border-radius: 4px;
      button{
        width: 100%;
        height: 100%;
        background: #fff;
        border: none;
        color: #EA5C5C;
        border-radius: 4px;
        outline: none;
        &:hover{
          color: #8B8D97;
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
