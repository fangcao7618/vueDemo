<template lang="html">
  <div class="play">

    <div :style="{backgroundColor: skinColor}" class="header">

      <div class="back">
        <div class="icon-back"><i @click="back"></i></div>
      </div>

      <div @click="isShowMusicList=false" class="title">
        <div class="name">{{audio.name || (musicData[0]&&musicData[0].name) || 'Powered by microzz.com'}}</div>
      </div>

      <div class="list">
        <div class="icon-list"><i @click="isShowMusicList=!isShowMusicList"></i></div>
      </div>

    </div>

    <div class="content">

      <transition name="fade">
        <div v-show="isShowMusicList" class="music-list">
          <ul>
            <li @click="toggleMusic(index)" v-for="(item, index) of musicData" :class="{ activeColor: index === audio.index}">{{ (index + 1) +'. &nbsp;'+ item.name}}</li>
          </ul>
        </div>
      </transition>

      <img @click.stop.prevent="isShowSkinColors=false;isShowMusicList=false" :src="audio.musicImgSrc || (musicData[0]&&musicData[0].musicImgSrc) || defaultImg" alt="microzz.com">
      <div @click.stop.prevent="isShowSkinColors=false;isShowMusicList=false" class="img">
        <img :src="audio.musicImgSrc || (musicData[0]&&musicData[0].musicImgSrc) || defaultImg" alt="microzz.com">
      </div>
      <div class="progress">
        <div class="start-time">{{transformTime(now)}}</div>
        <div @click="changeTime($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" ref="progressBar" class="progress-bar">
          <div ref="now" :style="{width: (now / nativeAudio.duration).toFixed(3)*100 + '%'}" class="now"></div>
        </div>
        <div class="end-time" v-text="totalTime"></div>
      </div>
      <div class="skin">
        <transition name="slide-fade">
          <div v-show="isShowSkinColors" class="skin-colors">
            <i @click="changeSkinColor('#B72712')" :class="{selected: skinColor==='#B72712'}" class="one"></i>
            <i @click="changeSkinColor('#1565C0')" :class="{selected: skinColor==='#1565C0'}" class="two"></i>
            <i @click="changeSkinColor('#212121')" :class="{selected: skinColor==='#212121'}" class="three"></i>
            <i @click="changeSkinColor('#1B5E20')" :class="{selected: skinColor==='#1B5E20'}" class="four"></i>
          </div>
        </transition>

        <div @click="showSkinColor" :class="{'icon-skin-red': skinColor === '#B72712','icon-skin-blue': skinColor === '#1565C0','icon-skin-black': skinColor === '#212121','icon-skin-green': skinColor === '#1B5E20'}" class="icon-skin"></div>
      </div>
    </div>

    <div :style="{backgroundColor: skinColor}" class="footer">
      <div class="prev">
        <div class="icon-prev"><i @click="prev"></i></div>
      </div>
      <div class="play">
        <div class="icon-play"><i @click="play" :class="[isPlaying ? 'pause-icon' : 'play-icon']"></i></div>
      </div>
      <div class="next">
        <div class="icon-next"><i @click="next"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play',
  mounted() {
    this.nativeAudio = document.querySelector('audio');
    this.nativeAudio.addEventListener('play', () => {
      this.totalTime = this.transformTime(this.nativeAudio.duration);
      this.now = this.nativeAudio.currentTime;
      setInterval(() => {
        this.now = this.nativeAudio.currentTime;
      }, 1000);
      this.now = this.nativeAudio.currentTime;

    })
  },
  computed: {
    audio() {
      return this.$store.state.audio;
    },
    musicData() {
      return this.$store.state.musicData;
    },
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    DOM() {
      return this.$store.state.DOM;
    },
    skinColor() {
      return this.$store.state.skinColor;
    }
  },
  data() {
    return {
      defaultImg: 'https://microzz.com/img/avatar.jpg',
      playIcons: ['url("./play.svg")', 'url("./pause.svg")'],
      now: 0,
      nativeAudio: {},
      totalTime: '0:00',
      isShowSkinColors: false,
      isShowMusicList: false
    }
  },
  watch: {
    skinColor(val) {
      localStorage.skinColor = val;
    }
  },
  methods: {
    back() {
      this.$store.commit('showIndex', true);
      this.$store.commit('showMiniMusic', true);
      this.isShowSkinColors = false;
      this.isShowMusicList = false
    },
    toggleMusic(index) {
      this.$store.commit('toggleMusic', index);
      this.$store.commit('play', true);
      setTimeout(() => {
        this.isShowMusicList = false;
      }, 100);
    },
    prev() {
      this.audio.index = this.audio.index === 0 ? this.musicData.length - 1 : (--this.audio.index);
      this.$store.commit('toggleMusic', this.audio.index);
    },
    play() {
      this.$store.commit('play', !this.isPlaying);
      !this.isPlaying ? this.DOM.audio.pause() : this.DOM.audio.play();
    },
    next() {
      this.audio.index = this.audio.index === this.musicData.length - 1 ? 0 : (++this.audio.index);
      this.$store.commit('toggleMusic', this.audio.index);
    },
    showSkinColor() {
      this.isShowSkinColors = !this.isShowSkinColors;
    },
    changeSkinColor(color) {
      this.$store.commit('changeSkinColor', color);
      this.isShowSkinColors = false;
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
      this.nativeAudio.currentTime = this.$refs.now.style.width.replace('%', '')/100 * this.nativeAudio.duration;
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
  @import '_Play.scss';
</style>
