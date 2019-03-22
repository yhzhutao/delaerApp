<template>
    <div class="applicationInfo">
      <v-applicationHead flag="1"></v-applicationHead>
      <p class="remind">请核对自动识别信息,若有误请重新拍摄</p>
      <ul>
        <li>
          <div class="info">
            <span class="col">身份证号</span>
            <span class="val">330522199909098987</span>
          </div>
        </li>
        <li>
          <div class="info">
            <span class="col">姓名</span>
            <span class="val">张三</span>
          </div>
        </li>
        <li>
          <div class="info">
            <span class="col">性别</span>
            <span class="val">男</span>
          </div>
        </li>
        <li>
          <div class="info">
            <span class="col">民族</span>
            <span class="val">汉</span>
          </div>
        </li>
        <li>
          <div class="info">
            <span class="col">出生</span>
            <span class="val">1999年09月09日</span>
          </div>
        </li>
        <li>
          <div class="info">
            <span class="col">户籍地址</span>
            <span class="val">杭州市滨江区江南大道3888号信雅达大厦</span>
          </div>
        </li>
      </ul>
      <div class="signing">
        <div class="info">
          <span class="col">签发机关</span>
          <span class="val">杭州市公安局</span>
        </div>
      </div>
      <div class="validity-period">
        <div class="info">
          <span class="col">有限期限</span>
          <span class="val">2010.09.09-2020.09.0</span>
        </div>
      </div>
      <router-link to="/PhoneNumberVerification">
        <div class="button">
          <button>下一步</button>
        </div>
      </router-link>
    </div>
</template>

<script>
  import ApplicationHead from '@/components/Subcomponents/applicationHead/applicationHead'
    export default {
        name: "applicationInfo",
      components:{
          'v-applicationHead':ApplicationHead
      }
    }
</script>

<style lang="scss" scoped>
.applicationInfo{
  .remind{
    margin: 24px 0 8px 16px;
    font-size: 12px;
    color: #B0B1B7;
  }
  ul{
    background: #fff;
    li{
      height: 50px;
      .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 16px;
        padding-right: 16px;
        height: 50px;
        border-bottom: 1px solid #EEEFF2;
        font-size: 0.14rem;
        .col{
          color: #282A2E;
        }
        .val{
          color: #8B8C90;
        }
      }
    }
  }
  .signing,.validity-period{
    height: 50px;
    background: #fff;
    .info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 49px;
      border-bottom: 1px solid #EEEFF2;
      margin-left: 16px;
      padding-right: 16px;
      font-size: 0.14rem;
      .col{
        color: #282A2E;
      }
      .val{
        color: #8B8C90;
      }
    }
  }
  .signing{
    margin-top: 16px;
  }
  .button{
   margin-top: 28px;
  }
}
</style>
