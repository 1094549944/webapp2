<template>
  <div>首页</div>
</template>

<script>
import { getSlider } from '../../api/index'
export default {
  name: 'home',
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