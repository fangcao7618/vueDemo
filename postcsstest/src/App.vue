<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner';
export default {
  name: 'app',
  components:{
    Banner
  }
};
</script>

<style lang="postcss">
:root{
  --color-one:green;
}
body{
  background-color:var(--color-one);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
