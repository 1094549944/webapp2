<template>
  <div class="g-tabbar">
    <router-link
      v-for="(item, index) in listData"
      :key="index"
      :to="item.path"
      class="g-tabbar-item"
    >
      <i :class="`iconfont ${item.icon}`"></i>
      <span>{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CTabbar',
  data() {
    return {
      listData: [
        {
          name: '首页',
          path: '/path',
          icon: ' icon-home'
        },
        {
          name: '分类',
          path: '/category',
          icon: 'icon-category'
        },
        {
          name: '购物车',
          path: '/cart',
          icon: 'icon-cart'
        },
        {
          name: '我的',
          path: '/personal',
          icon: 'icon-personal'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin';
.g-tabbar {
  display: flex;
  width: 100%;
  height: $tabbar-height;
  background-color: #fff;

  &-item {
    flex: 1;
    @include flex-center(column);

    .iconfont {
      margin-bottom: 4px;
      font-size: $icon-font-size;
    }
  }
  .router-link-active {
    color: $link-active-color;
  }
}
</style>