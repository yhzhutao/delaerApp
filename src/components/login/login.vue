<template>
  <div class="login">
    <div class="logo">
      <img src="../../image/logo@2x.png" alt="">
    </div>
    <div class="content">
      <div class="mobile-phone">
        <div class="mobile">
          <img :src="require(mobileIsFlag?'../../image/mobile@2x.png':'../../image/mobile-active@2x.png')" alt="">
        </div>
        <input type="text" placeholder="请输入手机号码" @change="test" @focus="changeMobileStatus" @blur="changeMobileStatus" ref="mobilePhone"/>
        <div class="cleanUp" @click="onUpLoad">
          <img src="../../image/cleanUp@2x.png"/>
        </div>
        <div class="arrow-top">
          <img src="../../image/arrow-top@2x.png">
        </div>
      </div>
      <div class="identifying-code">
        <div class="lock">
          <img :src="require(lockIsFlag?'../../image/lock@2x.png':'../../image/lock-active@2x.png')" alt="">
        </div>
        <input type="text" placeholder="请输入验证码" @focus="changeLockStatus" @blur="changeLockStatus"/>
        <span>获取验证码</span>
      </div>
    </div>
    <router-link to="/home">
      <div class="button">
        <button>登录</button>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            mobileIsFlag:true,
            lockIsFlag:true
          }
        },
      methods:{
          //改变手机输入框的状态
          changeMobileStatus(){
            this.mobileIsFlag = !this.mobileIsFlag
          },
          //改变验证码输入框的状态
          changeLockStatus(){
            this.lockIsFlag = !this.lockIsFlag
          },
          onUpLoad(){
            this.$refs.mobilePhone.value=''
          },
          test(){
            console.log(11111);
            let reg=/^[0-9]+.?[0-9]*$/;
            if(!reg.test(this.$refs.mobilePhone.value)){
              alert('请输入数字');
            }
          }
      }
    }
</script>

<style lang="scss" scoped>
  .login{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    .logo{
      width: 70px;
      height: 70px;
      margin: 80px auto 0 auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .content{
      margin: 32px 38px 0 38px;
      .mobile-phone{
        position: relative;
        height: 50px;
        .mobile{
          position: absolute;
          width: 40px;
          height: 40px;
          left: -12px;
          top:50%;
          transform: translate(0,-50%);
          img{
            width: 100%;
            height: 100%;
          }
        }
        input{
          width: 100%;
          height: 100%;
          padding: 0 40px;
          box-sizing: border-box;
          border: none;
          border-bottom: 1px solid #D7DAE4;
          outline: none;
        }
        input:focus{
          border-bottom: 1px solid #2A8EF0;
        }
        .cleanUp{
          position: absolute;
          right: 31px;
          top: 50%;
          transform: translate(0,-50%);
          img{
            width: 0.4rem;
            height: 0.4rem;
          }
        }
        .arrow-top{
          position: absolute;
          right: -12px;
          top:50%;
          transform: translate(0,-50%);
          img{
            width: 0.4rem;
            height: 0.4rem;
          }
        }
      }
      .identifying-code{
        margin-top: 8px;
        position: relative;
        height: 50px;

        .lock{
          position: absolute;
          width: 40px;
          height: 40px;
          left: -12px;
          top: 50%;
          transform: translate(0,-50%);
          img{
            width: 100%;
            height: 100%   ;
          }
        }
        input{
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: none;
          border-bottom: 1px solid #B5BACD;
          outline: none;
          padding: 0 40px;
        }
        input:focus{
          border-bottom: 1px solid #2A8EF0;
        }
        span{
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(0,-50%);
          color: #2A8EF0;
        }
      }
    }
    .button{
      height:50px;
      margin: 40px 38px 0 38px;
      button{
        width: 100%;
        height: 100%;
        background: #2A8EF0;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 8px;
      }
    }
  }
</style>
