<template>
  <div id="app">
    <ElBanner></ElBanner>
    {{msg}}
    <router-view/>
  </div>
</template>

<script>
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
      ElBanner,
    },
  };
</script>

<style lang="scss" style="text/css">
  @import '../../assets/layout/_common.scss';
  @import '../../assets/layout/_mixins.scss';
  @import '../../assets/fonts/_styles.scss';
  
</style>
