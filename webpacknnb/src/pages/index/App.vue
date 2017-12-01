<template>
  <div id="app">
    <ElButton></ElButton>
    {{msg}}
    <img src="../../assets/img/logo.png">
    <img src="../../assets/img/index_bg.jpg">
    <img src="./assets/1008x360.png">
    <img src="./assets/safari-pinned-tab.svg">
    <router-view/>
  </div>
</template>

<script>
  import ElButton from '@/components/Button/Button';
  
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hello Vue!',
        articles: [],
      };
    },
    components: {
      ElButton,
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
