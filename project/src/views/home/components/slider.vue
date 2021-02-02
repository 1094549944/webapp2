<template>
  <div class="slider-wapper">
    <me-loading v-if="!sliders.length" />
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-else
    >
      <swiper-slide v-for="(item, index) in sliders" :key="index">
        <a :href="item.linkUrl" alt="" class="slider-link">
          <img :src="item.picUrl" alt="" class="slider-img" />
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from '@/components/slider/index'

import { swiperSlide } from 'vue-awesome-swiper'
import { sliderOptions } from './navConfig'
import { getSlider } from '@/api/index'
import MeLoading from '@/components/loading/index'
export default {
  name: 'HomeSlider',
  components: {
    MeSlider,
    MeLoading,
    swiperSlide
  },
  data() {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
    }
  },
  created() {
    this.getSliders()
  },
  methods: {
    update() {
      return this.getSliders()
    },
    getSliders() {
      getSlider().then((res) => {
        this.sliders = res.data.slider
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-wapper {
  width: 100%;
  height: 183px;
}

.slider-link {
  display: block;
}

.slider-link,
.slider-img {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>