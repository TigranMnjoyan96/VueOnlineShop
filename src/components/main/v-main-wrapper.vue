<template>
  <div id="main__wrapper">
    
    <router-view></router-view>
  </div>
</template>

<script>
// import Catalog from "../catalog/v-catalog.vue";
// import vCart from "../cart/v-cart";
import { mapGetters } from "vuex";

export default {
  // components: {
  //   vCatalog: Catalog,
  //   vCart: vCart
  // },
  computed: {
    ...mapGetters(["CART"])
  }
};
</script>

<style lang="less">
@import "../../less/variables";
@import "../../less/mixin";

#main__wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
