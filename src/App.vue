<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  export default {
//    data () {
//      seller:{
//
//      }
//    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl";
  #app .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border-bottom: 1px solid rgba(7, 17, 27, 0.1);*/
    border-1px(rgba(7, 17, 27, 0.1))
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93)
  }

  .tab .tab-item .active {
    color: rgb(240, 20, 20);
  }
</style>
