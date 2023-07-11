<template>
  <div class="containerHeader">
    <img src="../static/HeaderView/JT-logo.png" class="logo" alt="" />
    <div class="tabs">
      <div class="triangle"></div>
      <NuxtLink to="/" class="index">首页</NuxtLink>
      <NuxtLink to="about" class="about">关于我们</NuxtLink>
      <NuxtLink to="solution" class="solution">解决方案</NuxtLink>
      <NuxtLink to="case" class="case">成功案例</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.containerHeader {
  width: 100%;
  height: 100px;
  background: #095dc0;
  position: relative;
}
.logo {
  padding: 30px 0 0 360px;
}
.tabs {
  width: 50%;
  height: 80px;
  background: #ffffff;
  float: right;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}
.triangle {
  width: 40px;
  height: 90px;
  position: absolute;
  background: #095dc0;
  transform: rotate(20deg);
  left: -24px;
  top: -14px;
}

.index {
  margin-left: 159px;
  line-height: 80px;
  color: #777777;
}
.about {
  margin-left: 69px;
  line-height: 80px;
  color: #777777;
}
.solution {
  margin-left: 69px;
  line-height: 80px;
  color: #777777;
}
.case {
  margin-left: 69px;
  line-height: 80px;
  color: #777777;
}

.nuxt-link-exact-active {
  color: #294dce !important;
}
</style>
