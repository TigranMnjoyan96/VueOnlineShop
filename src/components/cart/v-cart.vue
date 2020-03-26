<template>
  <div>
    <router-link :to="{ name: 'catalog' }">
      <div class="v__cart__products__count">Back to Catalog</div>
    </router-link>
    <h2>Cart</h2>

    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @increment="increment(index)"
      @decrement="decrement(index)"
      @deleteItem="deleteItem(index)"
    ></v-cart-item>
    <h2 v-if="!cart_data.length">There are no Cars</h2>
    <div class="total__price">
      <p>Total Price: {{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./cart-item/v-cart-item";
import { mapActions } from "vuex";

export default {
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    totalPrice() {
      let arr = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          arr.push(item.price * item.quantity);
        }
        arr = arr.reduce((a, b) => {
          return a + b;
        });
        return arr;
      } else {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "INCREMENT_COUNT", "DECREMENT_COUNT"]),
    deleteItem(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_COUNT(index);
    },
    decrement(index) {
      this.DECREMENT_COUNT(index);
    }
  }
};
</script>

<style lang="less">
.total__price {
  width: 100%;
  height: 100px;
  background: chartreuse;
  font-size: 25px;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
