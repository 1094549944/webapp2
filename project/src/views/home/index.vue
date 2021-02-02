<template>
  <div class="home">
    <header class="g-header-container">
      <home-header
        :class="{ 'header-transition': isHeaderTransition }"
        ref="header"
      />
    </header>
    <me-scroll
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll"
    >
      <home-slider ref="slider" />
      <home-nav />
      <home-recommend @loaded="getRecommends" ref="recommend" />
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MeScroll from '../../components/scrollCom/index'
import MeBacktop from '../../components/backtop/index'
import HomeHeader from './components/header'
import HomeSlider from './components/slider'
import HomeNav from './components/nav'
import HomeRecommend from './components/recommend'
import { HEADER_TRANSITION_HEIGHT } from './components/navConfig'
export default {
  name: 'Home',
  components: {
    MeScroll,
    HomeHeader,
    HomeSlider,
    HomeNav,
    HomeRecommend,
    MeBacktop
  },
  data() {
    return {
      recommends: [],
      isBacktopVisible: false,
      isHeaderTransition: false
    }
  },
  // created() {
  //   setTimeout(() =>{
  //       this.isBacktopVisible = true;
  //     },1000);
  // },
  methods: {
    updateScroll() {},
    getRecommends(recommends) {
      this.recommends = recommends
    },
    async pullToRefresh(end) {
      await this.$refs.slider.update()
      await end()
      // setTimeout(() =>{
      //   console.log('下拉刷新');
      //   end();
      // },1000);
    },
    async pullToLoadMore(end) {
      await this.$refs.recommend.update()
      await end()
    },
    scroll(translate) {
      this.changeHeaderStatus(translate)
    },
    scrollEnd(translate, scroll, pulling) {
      if (!pulling) {
        this.changeHeaderStatus(translate)
      }
      this.isBacktopVisible = translate < 0 && -translate > scroll.height
    },
    pullDownTransitionEnd() {
      this.$refs.header.show()
    },
    backToTop() {
      this.$refs.scroll && this.$refs.scroll.scrollToTop()
    },
    changeHeaderStatus(translate) {
      if (translate > 0) {
        this.$refs.header.hide()
        return
      }

      this.$refs.header.show()

      this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixin';
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>
