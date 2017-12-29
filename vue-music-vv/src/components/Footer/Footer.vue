<template lang="html">
  <transition name="fade">
    <div v-show="isShowMiniMusic" :style="{backgroundColor: skinColor}" class="footer">
      <div class="mini-music">
        <div class="music-img">
          <img @click="showPlay" ref="img" v-bind:src="audio.musicImgSrc || (musicData[0]&&musicData[0].musicImgSrc) || defaultImg" alt="microzz.com">
        </div>
        <div class="music-name">
          <p @click="showPlay">{{audio.name || (musicData[0]&&musicData[0].name) || 'Powered by microzz.com'}}</p>
          <div class="progress">
            <span class="start">{{transformTime(now)}}</span>
            <div @click="changeTime($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" ref="progressBar" class="progress-bar">
              <div class="now" ref="now" :style="{width: (now / nativeAudio.duration).toFixed(3)*100 + '%'}"></div>
            </div>
            <span class="end" v-text="totalTime"></span>
          </div>
        </div>
        <div class="music-control">
          <i @click="play()" v-bind:class="[isPlaying ? pauseIcon : playIcon]"></i>
        </div>
      </div>
    </div>
  
  </transition>
</template>

<script>
  export default {
    mounted() {
      this.nativeAudio = document.querySelector('audio');
  
      this.nativeAudio.addEventListener('play', () => {
        this.totalTime = this.transformTime(this.nativeAudio.duration);
        this.now = this.nativeAudio.currentTime;
        console.log(this.now);
        setInterval(() => {
          this.now = this.nativeAudio.currentTime;
        }, 1000)
      })
    },
    computed: {
      isPlaying() {
        return this.$store.state.isPlaying;
      },
      isShowAsideMenu() {
        return this.$store.state.isShowAsideMenu;
      },
      isShowMiniMusic() {
        return this.$store.state.isShowMiniMusic;
      },
      audio() {
        return this.$store.state.audio;
      },
      DOM() {
        return this.$store.state.DOM;
      },
      musicData() {
        return this.$store.state.musicData;
      },
      skinColor() {
        return this.$store.state.skinColor;
      }
  
    },
    data() {
      return {
        playIcon: 'play-icon',
        pauseIcon: 'pause-icon',
        now: 0,
        nativeAudio: {},
        totalTime: '0:00',
        defaultImg: 'https://microzz.com/img/avatar.jpg'
      }
    },
    methods: {
      play() {
        this.$store.commit('play', !this.isPlaying);
        !this.isPlaying ? this.DOM.audio.pause() : this.DOM.audio.play();
      },
      showPlay() {
        if (this.isShowAsideMenu) {
          return;
        }
        this.$store.commit('showIndex', false);
        this.$store.commit('showMiniMusic', false);
      },
      changeTime(event) {
        let progressBar = this.$refs.progressBar;
        let coordStart = progressBar.getBoundingClientRect().left;
        let coordEnd = event.pageX;
        this.nativeAudio.currentTime = (coordEnd - coordStart) / progressBar.offsetWidth * this.nativeAudio.duration;
        this.now = this.nativeAudio.currentTime;
        this.nativeAudio.play();
        this.$store.commit('play', true);
      },
      touchMove(event) {
        let progressBar = this.$refs.progressBar;
        let coordStart = progressBar.getBoundingClientRect().left;
        let coordEnd = event.touches[0].pageX;
        this.$refs.now.style.width = ((coordEnd - coordStart) / progressBar.offsetWidth).toFixed(3) * 100 + '%';
      },
      touchEnd(event) {
        this.nativeAudio.currentTime = this.$refs.now.style.width.replace('%', '') / 100 * this.nativeAudio.duration;
        this.now = this.nativeAudio.currentTime;
        this.nativeAudio.play();
        this.$store.commit('play', true);
      },
      transformTime(seconds) {
        let m, s;
        m = Math.floor(seconds / 60);
        m = m.toString().length == 1 ? ('0' + m) : m;
        s = Math.floor(seconds - 60 * m);
        s = s.toString().length == 1 ? ('0' + s) : s;
        return m + ':' + s;
      }
  
    }
  }
</script>

<style lang="scss" scoped>
  @import '_Footer.scss';
</style>
