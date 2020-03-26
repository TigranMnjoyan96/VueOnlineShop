<template>
  <div class="v__catalog">
    <h2>Catalog</h2>
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v__cart__products__count">Count: {{ CART.length }}</div>
    </router-link>
    <div class="v__catalog__list">
      <v-catalog-item
        v-for="item in PRODUCTS"
        :key="item.id"
        :productData="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item/v-catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vCatalogItem
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  }
};
</script>

<style lang="less">
.v__catalog {
  .v__catalog__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .v__cart__products__count {
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid black;
    padding: 10px;
  }
}
</style>
