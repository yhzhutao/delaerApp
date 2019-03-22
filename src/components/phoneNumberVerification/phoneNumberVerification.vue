<template>
    <div class="phoneNumberVerification">
      <v-applicationHead flag="2"></v-applicationHead>
      <ul>
        <li class="mobile-phone">
          <div class="info">
            <span class="col">客户手机号码</span>
            <input type="text" placeholder="请输入手机号码" class="val">
          </div>
        </li>
        <li class="identifying-code">
          <div class="info">
            <span class="col">验证码</span>
            <div class="get-identifying-code">
              <input type="text" placeholder="请输入验证码" class="val">
              <span class="code">获取验证码</span>
            </div>
          </div>
        </li>
      </ul>
      <router-link to="/applicationInfoEntering">
        <div class="button">
          <button>下一步</button>
        </div>
      </router-link>
    </div>
</template>

<script>
    import ApplicationHead from '@/components/Subcomponents/applicationHead/applicationHead'
    export default {
        name: "phoneNumberVerification",
      components:{
          'v-applicationHead':ApplicationHead
      }
    }
</script>

<style lang='scss' scoped>
.phoneNumberVerification{
  ul{
    margin-top: 16px;
    background: #fff;
    .mobile-phone{
      height: 50px;
      .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        margin-left: 16px;
        border-bottom: 1px solid #B5BACD;
        .col{
          color: #282A2E;
          font-size: 0.14rem;
        }
        .val{
          border: none;
          text-align: right;
          outline: none;
          padding-right: 16px;
          color: #B5BACD;
        }
      }
    }
    .identifying-code{
      .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        margin-left: 16px;
        .col{
          font-size: 0.14rem;
          color: #282A2E;
        }
        .get-identifying-code{
          display: inline-block;
          .val{
            text-align: right;
            padding-right: 10px;
            color: #B5BACD;
            border: none;
            outline: none;
          }
          .code{
            padding-right: 16px;
            font-size: 0.14rem;
            color: #2A8EF0;
          }
        }
      }
    }
  }
  .button{
    margin-top: 28px;
  }
}
</style>
