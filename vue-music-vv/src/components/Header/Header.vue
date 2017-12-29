<template lang="html">
  <div :style="{backgroundColor: skinColor}" class="header">
    <div class="name">
      <span @click="showAsideMenu(true)" class="func"><i class="func-icon"></i></span>
      <p>云音乐</p>
      <span class="search"><i @click="toSearch" class="search-icon"></i></span>
    </div>
    <div class="tab">
      <div v-bind:class="{link: linkBorderIndex==1}" class="item">
        <router-link to="/music-list">我的</router-link>
      </div>
      <div v-bind:class="{link: linkBorderIndex==2}" class="item">
        <router-link to="/find">发现</router-link>
      </div>
      <div v-bind:class="{link: linkBorderIndex==3}" class="item">
        <router-link to="/social">一个</router-link>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'header',

  data() {
    return {
      index: ''
    };
  },
  computed: {
    linkBorderIndex() {
      return this.$store.state.linkBorderIndex;
    },
    skinColor() {
      return this.$store.state.skinColor;
    }
  },
  methods: {
    toSearch() {
      this.$router.push('/find');
    },
    showAsideMenu(flag) {
      this.$store.commit('showAsideMenu', flag);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '_Header.scss';
</style>
