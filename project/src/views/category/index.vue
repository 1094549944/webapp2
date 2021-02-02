<template>
  <div class="category">
    <header class="g-header-container">
      <category-header />
    </header>
    <div class="g-content-container">
      <div class="sidebar">
        <category-tab @switch-tab="getCurrentId" />
      </div>
      <div class="main">
        <category-content :curId="curId"></category-content>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHeader from './components/header'
import CategoryTab from './components/tabCom'
import CategoryContent from './components/content'
export default {
  name: 'category',
  components: {
    CategoryHeader,
    CategoryTab,
    CategoryContent
  },
  data() {
    return {
      curId: ''
    }
  },
  methods: {
    getCurrentId(id) {
      this.curId = id
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin';
.category {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}

.g-content-container {
  display: flex;
}
.sidebar {
  width: 80px;
  height: 100%;
}
.main {
  flex: 1;
  height: 100%;
}
</style>