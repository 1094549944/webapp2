<template>
  <div>
    <me-navbar class="header">
      <i class="iconfont icon-scan" slot="left"></i>
      <me-search-box
        placeholder="开学季有礼，好货5折起"
        slot="center"
        fake
        @query="getQuery"
        @click.native="goToSearch"
      ></me-search-box>
      <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
  </div>
</template>

<script>
import MeNavbar from '@/components/navbar'
import MeSearchBox from '@/components/search-box/index'
export default {
  name: 'HomeHeader',
  components: {
    MeNavbar,
    MeSearchBox
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    // API
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    getQuery(query) {
      console.log(query)
    },
    goToSearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixin';
.header {
  &.mine-navbar {
    /*background-color: $header-bgc-translucent; */
    background-color: transparent;
    transition: background-color 0.5s;
  }

  &.header-transition {
    background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
}
</style>
