<template>
  <div id="nav">
    <nav>
      <span>这是我logo</span>
      <a v-for="i in items">{{i}}</a>
    </nav>
    <ul>
      <li v-if="is_login" ></li>
      <li v-else :style="styleData.login_style" @click="show_loginForm">log in</li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  const styleData = {
    login_style: {
      marginLeft: '20%',
      borderRadius: '32px',
      background: '#4bd094',
      padding: '9px',
      width: '10%',
      color: '#fff'
    }
  }
  export default {
    name: 'nav',
    data: function () {
      return {
        items: [
          'site',
          'about',
          'abc'
        ],
        styleData: styleData,
        is_login: false
      }
    },
    methods: {
//      展示登录/注册表单
      show_loginForm: function () {
        this.$router.push({ path: 'Login' })
      }
    }
  }
</script>

<style lang="less" scoped>
  .child{
    text-transform: capitalize;
    box-sizing: border-box;
    width: 50%;
    padding: 0;
    margin: 0;
    font-size: 14px;
    display: inline-block;
  }
  .child-child{
    display: inline-block;
    padding: 20px;
    vertical-align: middle;
    text-decoration: none;
    position: relative;

    list-style: none;
    cursor: pointer;
  }
  .login_btn{
    margin-left: 20%;
    border-radius: 32px;
    background: #4bd094;
    padding: 9px;
    width: 10%;
    color: #fff;
  }
  #nav{
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    color: #8B909A;
    font-size:0;
    box-shadow: 0 -3px 0 #4bd094 inset;
    nav{
      .child;
      a{
        .child-child;
        &:hover{
          box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
        }
      }
    }
    ul{
      .child;
      li{
        .child-child;
      }
    }
  }
</style>
