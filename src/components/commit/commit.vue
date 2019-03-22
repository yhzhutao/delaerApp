<template>
    <div class="commit">
      <v-applicationHead flag="3"></v-applicationHead>
      <div class="commit-content">
        <div class="container">
          <img src="../../image/commit@2x.png" alt="">
          <p class="complete">提交成功</p>
          <p class="explain">请耐心等待管理人员发送申请</p>
        </div>
      </div>
      <router-link to="/home">
        <div class="button">
          <button>完成</button>
        </div>
      </router-link>
    </div>
</template>

<script>
  import ApplicationHead from '@/components/Subcomponents/applicationHead/applicationHead'
    export default {
        name: "commit",
      components:{
          'v-applicationHead':ApplicationHead
      }
    }
</script>

<style lang="scss" scoped>
.commit{
  .commit-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 162px;
    background-color: #fff;
    margin-top: 16px;
    .container{
      text-align: center;
      img{
        width: 48px;
        height: 48px;
      }
      .complete{
        margin-top: 4px;
        color: #2A8EF0;
        font-size: 0.16rem;
        line-height: 22px;
      }
      .explain{
        margin-top: 4px;
        line-height: 20px;
        font-size: 0.14rem;
        color: #B0B1B7;
      }

    }
  }
  .button{
    margin-top: 28px;
  }
}
</style>
