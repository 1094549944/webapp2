<template>
  <div>
    <home-header />
  </div>
</template>

<script>
import HomeHeader from './components/header'
import { getSlider } from '../../api/index'
export default {
  name: 'home',
  components: {
    HomeHeader
  },
  created() {
    this.test()
  },
  methods: {
    test() {
      getSlider().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>