<template>
    <div class="applicationInfoEntering">
      <v-applicationHead flag="3"></v-applicationHead>
      <span class="remind">以下操作不分先后顺序，如有疑问，请查看</span>
      <div class="guide">操作指引</div>
      <ul>
        <li>
          <img src="../../image/information@2x.png" alt="">
          <span class="text">客户详细信息</span>
          <span class="status">未完成</span>
        </li>
        <li>
          <img src="../../image/creditInvestigation@2x.png" alt="">
          <span class="text">客户授权查询征信</span>
          <span class="status">未完成</span>
        </li>
        <li>
          <img src="../../image/loan@2x.png" alt="">
          <span class="text">选择产品及贷款方案</span>
          <span class="status">未完成</span>
        </li>
      </ul>
      <router-link to="/commit">
        <div class="button">
          <button>提交</button>
        </div>
      </router-link>
    </div>
</template>

<script>
  import ApplicationHead from '@/components/Subcomponents/applicationHead/applicationHead'
    export default {
        name: "applicationInfoEntering",
      components:{
          'v-applicationHead':ApplicationHead
      }
    }
</script>

<style lang="scss" scoped>
.applicationInfoEntering{
  .remind{
    display: inline-block;
    margin: 24px 0 0 16px;
    color: #B0B1B7;
    font-size: 0.12rem;
  }
  .guide{
    display: inline-block;
    width: 64px;
    height: 20px;
    background: #fff;
    font-size: 0.12rem;
    color: #2A8EF0;
    text-align: center;
    line-height: 20px;
    border-radius: 2px;
  }
  ul{
    margin-top: 8px;
    background: #fff;
    li{
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #EEEFF2;
      img{
        width: 40px;
        height: 40px;
      }
      .text{
        display: inline-block;
        margin-left: 2px;
        font-size: 0.14rem;
        color: #282A2E;
      }
      .status{
        position: absolute;
        right: 44px;
        width: 48px;
        height: 20px;
        background: #F6CB5B;
        color: #fff;
        font-size: 0.12rem;
        border-radius: 2px;
        line-height: 20px;
        text-align: center;
      }
      &:after{
        position: absolute;
        right: 16px;
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        border-top: 1px solid #EEF0F2;
        border-right: 1px solid #EEF0F2;
        transform: rotate(45deg);
      }
    }
  }
  .button{
    margin-top: 28px;
  }
}
</style>
