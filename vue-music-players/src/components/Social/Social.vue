<template lang="html">

  <transition name="showRouter">
    <div  @click="isShowControl=true" @touchend="isShowControl=true" class="social">

      <div v-show="isShowMask" class="mask">
        <div class="loading">
          <i class="icon-loading"></i>加载中
        </div>
      </div>

      <div class="title">
        <div v-text="date" class="date" ></div>
        <div v-text="volume" class="title-desc" ></div>
      </div>

      <div class="img">
        <img v-bind:src="imgUrl" alt="插画 - microzz.com">
        <div class="img-desc" >插画 | {{picInfo}}</div>
      </div>

      <div class="content">
        <p v-text="forward"></p>
        <div v-text="wordsInfo" class="content-desc"></div>
      </div>

      <transition name="fade">
        <div v-show="isShowControl" class="control">
          <div class="prev">
            <a @click="getOne(--index)" :class="{gray: index === 0}" href="javascript:;">上一篇</a>
          </div>
          <div class="loading">
            <div v-if="!isLoading" class="one">One</div>
            <div v-else class="icon-loading"></div>
          </div>
          <div class="next">
            <a @click="getOne(++index)" :class="{gray: index === 9}" href="javascript:;">下一篇</a>
          </div>

        </div>
      </transition>
    </div>
  </transition>

</template>

<script>

export default {
  name: 'Social',
  components: {},
  beforeCreate() {
    this.$store.commit('showMiniMusic', false);
  },
  created() {
    this.getOne();
  },
  mounted() {
    this.$store.commit('changeLinkBorderIndex', 3);
  },
  data() {
    return {
      date: '',
      volume: '',
      imgUrl: '',
      picInfo: '',
      forward: '',
      wordsInfo: '',
      index: 0,
      isLoading: false,
      isShowMask: true,
      isShowControl: false
    }
  },
  methods: {
    getOne(index = 0) {
      if (index > 9) {
        this.index = 9;
        return ;
      }
      if (index < 0) {
        this.index = 0;
        return ;
      }
      this.isLoading = true;
      this.axios.get('/api/one/' + index)
        .then(res => res.data.data.content_list[0])
        .then(one => {
          this.date = one.post_date.split(' ')[0].replace(/\-/g, ' / ');
          this.volume = one.volume;
          this.imgUrl = one.img_url;
          this.picInfo = one.pic_info;
          this.forward = one.forward;
          this.wordsInfo = one.words_info;
          this.isLoading = false;
          this.isShowMask = false;
          setTimeout(() => {
            this.isShowControl=false;
          }, 250)

        })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '_Social.scss';
</style>
