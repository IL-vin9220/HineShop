<template>
  <div class="container">
    <TheHeader />
    <TheMenu />
    <router-view />
    <!-- <TheFooter /> -->
  </div>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue'
import TheMenu from './components/layout/TheMenu.vue'
// import TheFooter from './components/layout/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,TheMenu,
  }
}
</script>

<style>

/* @import url(./css/main.css); */
@import url(./assets/icons/uicons-thin-straight/css/uicons-thin-straight.css);
@import url(./assets/icons/uicons-regular-rounded/css/uicons-regular-rounded.css);
@font-face {
    font-family: Gilroy-Light;
    src: url(./assets/fonts/Gilroy-Light.woff);
}

@font-face {
    font-family: Gilroy-Bold;
    src: url(./assets/fonts/Gilroy-Bold.woff);
}

@font-face {
    font-family: Gilroy-Medium;
    src: url(./assets/fonts/Gilroy-Medium.woff);
}

@font-face {
    font-family: Gilroy-Regular;
    src: url(./assets/fonts/Gilroy-Regular.woff);
}

@font-face {
    font-family: Gilroy-Heavy;
    src: url(./assets/fonts/Gilroy-Heavy.woff);
}

body{
    margin: 0;
    padding: 0;
    font-family: Gilroy-Medium;
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    color: black;
}

.container{
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
}
</style>
