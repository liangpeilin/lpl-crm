<template>
  <div>
    <h1><img src="../assets/404.jpg" alt="404"/></h1>
    <h2><em><span class="STYLE1">404 Error&nbsp;&nbsp; </span></em>:所查找的页面不存在,可能已被删除或您输错了网址!</h2>
    <p class="link">
      <a href="javascript:;" @click="back_off('home')">&#9666;返回首页</a>
      <a href="javascript:;" @click="back_off(-1)">&#9666;返回上一页</a>
    </p>
    <dl class="texts">
      <dt>正在联系总部查找您所需要的页面.请返回等待信息..</dt>
      <dd>
        <ul>
          <li>不要返回吗?</li>
          <li>确定不要返回吗?</li>
          <li>真的真的确定不要返回吗?</li>
          <li>好吧.还是随便你要不要真的确定返回吧</li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    },
    methods: {
      back_off: function (value) {
        if (typeof value === 'string') this.$router.push({name: value})
        this.$router.go(value)
      }
    }
  }
</script>

<style type="text/css" scoped>
  body {
    margin: 0;
    padding: 0;
    font: 14px/1.6 Arial, Sans-serif;
  }

  a:link, a:visited {
    color: #007ab7;
    text-decoration: none;
  }

  h1 {
    position: relative;
    z-index: 2;
    width: 540px;
    height: 230px;
    margin: 110px auto 15px;
    overflow: hidden;
  }

  h2 {
    position: absolute;
    top: 17px;
    left: 187px;
    margin: 0;
    font-size: 0;
    text-indent: -999px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
    width: 534px;
  }

  h2 em {
    display: block;
    font: italic bold 200px/120px "Times New Roman", Times, Serif;
    text-indent: 0;
    letter-spacing: -5px;
    color: rgba(216, 226, 244, 0.3);
  }

  .link a {
    margin-right: 1em;
  }

  .link, .texts {
    width: 540px;
    margin: 0 auto 15px;
    color: #505050;
  }

  .texts {
    line-height: 2;
  }

  .texts dd {
    margin: 0;
    padding: 0 0 0 15px;
  }

  .texts ul {
    margin: 0;
    padding: 0;
  }

  .portal {
    color: #505050;
    text-align: center;
    white-space: nowrap;
    word-spacing: 0.45em;
  }

  .portal a:link, .portal a:visited {
    color: #505050;
    word-spacing: 0;
  }

  .portal a:hover, .portal a:active {
    color: #007ab7;
  }

  .STYLE1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 65px;
  }
</style>
