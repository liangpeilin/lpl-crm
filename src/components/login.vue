<template>
  <div id="login_form">
    <div id="form">
      <div>
        <a href="javascript:;" :class="{active: toggleActive}" @click="toggleActive = true">log in</a>
        <a href="javascript:;" :class="{active: !toggleActive}" @click="toggleActive = false">sign up</a>
      </div>
      <form  v-show="toggleActive" @submit.prevent="signIn">
        <div>
          <input type="text" placeholder="Username/Email" v-model="userName"  name="userName" required/>
        </div>
        <div>
          <input type="password" placeholder="Password" v-model="password"  name="password" required/>
        </div>
        <div>
          <label class="form-label"><input type="checkbox" v-model="Remember" name="Rmemeber"/>Remember Me</label>
        </div>
        <div>
          <button type="submit">Log In</button>
          <button type="button">Find PassWord</button>
        </div>
      </form>
      <form  method="post" v-show="!toggleActive" @submit.prevent="signUp">
        <div>
          <input type="email" placeholder="Email" v-model="email" name="email" required/>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: function () {
      return {
        toggleActive: true,
        userName: '',
        password: '',
        Remember: false,
        email: ''
      }
    },
    computed: {
    },
    methods: {
      signIn: () => {
        alert('勺子一个')
      },
      signUp: () => {
        alert('吃货一枚')
      }
    }
  }
</script>

<style scoped lang="less">
  #login_form{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 999;
    font-size: 14px;
    text-align: left;
  }
  #form{
    width: 460px;
    box-sizing: border-box;
    transition: all .15s ease;
    margin:120px auto;
    .active{
      background-color: #42B983;
    }
    div a{
      text-transform: uppercase;
      display: inline-block;
      background: #ddd;
      color: #fff;
      border: none;
      text-decoration: none;
      float: left;
      width: 30%;
      text-align: center;
      padding: 5px 0;
    }
    form{
      padding-top: 60px;
      div{
        padding-bottom: 40px;
      }
      input{
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd;
        width: 100%;
        background-color: transparent;
        font-size: 18px;
        padding: 10px;
        box-sizing: border-box;
      }
      input[type="checkbox"]{
        width: inherit;
        border: none;
        margin-left: 0px;
      }
      .form-label{
        padding: 10px;
        display: inline-block;
      }
      button{
        display: inline-block;
        background-color: #42B983;
        text-decoration: none;
        padding: 0 24px;
        color: white;
        font: normal 500 13px/32px 'Avenir', Helvetica, Arial, sans-serif;
        border-radius: 32px;
        /*border: none;*/
        outline: none;
        margin-right: 28px;
      }
    }
  }
</style>
