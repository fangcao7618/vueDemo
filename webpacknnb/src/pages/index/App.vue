<template>
  <div id="app">
    <ElBanner></ElBanner>
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
  import ElBanner from '@/components/Banner/Banner';
  
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
      ElBanner,
    },
  };
</script>

<style lang="scss" style="text/css">
  @import '../../assets/layout/_common.scss';
  @import '../../assets/layout/_mixins.scss';
  @import '../../assets/fonts/_styles.scss';
</style>
