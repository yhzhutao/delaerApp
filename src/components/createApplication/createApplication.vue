<template>
    <div class="createApplication">
      <v-applicationHead flag="1"></v-applicationHead>
      <p class="remind">拍摄时请确保身份证边框完整、字迹清晰</p>
      <div class="createApplication-content">
        <div class="human-face">
          <div class="face">
            <img src="../../image/humanFace@2x.png" alt="">
            <img src="../../image/camera@2x.png" alt="" class="camera">
          </div>
        </div>
        <p>身份证人面像</p>
        <div class="national-emblem">
          <div class="emblem">
            <img src="../../image/nationalEmblem@2x.png" alt="">
            <img src="../../image/camera@2x.png" alt="" class="camera">
          </div>
        </div>
        <p>身份证国徽像</p>
      </div>
      <router-link to="/applicationInfo">
        <div class="button">
          <button>
            识别
          </button>
        </div>
      </router-link>
    </div>
</template>

<script>
  import applicationHead from '@/components/Subcomponents/applicationHead/applicationHead'
    export default {
        name: "createApplication",
        components:{
          'v-applicationHead':applicationHead
        }
    }
</script>

<style lang="scss" scoped>
.createApplication{
  .remind{
    color: #B0B1B7;
    font-size: 0.12rem;
    margin: 24px 0 8px 16px;
  }
  .createApplication-content{
    height: 4.22rem;
    background: #fff;
    text-align: center;
    .human-face{
      padding-top: 24px;
      .face{
        position: relative;
        padding: 0 62px;
        height: 1.5rem;
        img{
          width: 100%;
          height: 100%;
        }
        .camera{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          transform: translate(-50%,-50%);
        }
      }
    }
    p{
      margin-top: 8px;
      color: #303640;
      font-size: 0.12rem;
    }
    .national-emblem{
      padding-top: 24px;
      .emblem{
        position: relative;
        padding: 0 62px;
        height: 1.5rem;
        img{
          width: 100%;
          height: 100%;
        }
        .camera{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          transform: translate(-50%,-50%);
        }
      }
    }
  }
  .button{
   margin-top: 28px;
  }
}
</style>
