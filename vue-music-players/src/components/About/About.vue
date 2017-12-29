<template lang="html">
  <transition name="showAbout">
    <div class="about">
      <i @click="showAbout" class="close"></i>
      <div class="about-content">
        <h1>关于</h1>
        <p class="skill"><b>技术栈</b>：</p>
        <div>Vue2<br>Vuex<br>vue-router<br>axios<br>SASS(SCSS)<br>Express(上线版本是Koa2)<br>Webpack<br>ES6<br>localStorage(HTML5)<br>CSS3</div>
        <p class="url"><b>源码地址</b>：<a @touchstart="isHover=true" @touchEnd="isHover=false" :class="{hover: isHover}" href="https://github.com/microzz/vue-music-player" target="_blank">GitHub</a></p>
        <p class="url"><b>个人网站</b>：<a @touchstart="isHover=true" @touchEnd="isHover=false" :class="{hover: isHover}" href="https://microzz.com/" target="_blank">microzz</a></p>
        <p><br>&nbsp;&nbsp;&nbsp;待业码农，求工作～～如果你觉得该项目不错，还可以请我吃辣条😄↓↓↓</p>
        <div class="help">
          <img src="./help.png" alt="microzz.com">
        </div>
        <p class="copyright"><b>【声明】</b>：本项目仅供学习使用，请不要用作任何商业用途。有任何疑问请联系作者↓ <br>📩：<a href="mailto:zhaohui@microzz.com">zhaohui@microzz.com</a></p>
      </div>
      <div @click="showAbout" class="mask"></div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      isHover: false
    }
  },
  computed: {
    isShowAbout() {
      return this.$store.state.isShowAbout;
    }
  },
  methods: {
    showAbout() {
      this.$store.commit('showAbout', false);
    }
  }

}
</script>

<style lang="scss" scoped>
@import '_About.scss';
</style>