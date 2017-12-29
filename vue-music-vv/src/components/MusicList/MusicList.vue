<template lang="html">

  <transition name="showRouter">
    <div class="music-list">

      <div v-for="(item, index) of musicData" class="music-item">
        <img v-bind:src="item.musicImgSrc || 'https://microzz.com/img/avatar.jpg'" class="music-img"></img>
        <span @click="toggleMusic(index)" class="music-name">{{ (index+1) + '.&nbsp; ' + item.name}}</span>
        <span v-on:click="del(index)" class="del-icon"></span>
      </div>

      <div class="tips">没有更多歌曲了～</div>

    </div>
  </transition>

</template>

<script>

export default {
  name: 'MusicList',
  beforeCreate() {
    this.$store.commit('showMiniMusic', true);
  },
  mounted() {
    this.$store.commit('changeLinkBorderIndex', 1);
  },
  computed: {
    musicData() {
      return this.$store.state.musicData;
    },
    DOM() {
      return this.$store.state.DOM;
    },
    isPlaying() {
      return this.$store.state.isPlaying;
    }
  },
  watch: {
    musicData: {
      handler(val, oldVal) {
        console.log(val,oldVal);
        localStorage.musics = JSON.stringify(val);
      },
      deep: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // 点击切换音乐
    toggleMusic(index) {
      if (this.$store.state.audio.index === index) {
        this.DOM.audio.paused ? this.DOM.audio.play() : this.DOM.audio.pause();
        this.$store.commit('play', !this.isPlaying);
      } else {
        this.DOM.audio.play();
        this.$store.commit('play', true);
      }
      this.$store.commit('toggleMusic', index);

    },
    // 删除音乐
    del(index) {
      this.$store.commit('del', index);
    }
  }
}
</script>

<style lang="scss">
@import '_MusicList.scss';
</style>
