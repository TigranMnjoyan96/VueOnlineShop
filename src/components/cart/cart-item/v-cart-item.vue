<template>
  <div class="v__cart__item__data">
    <img
      :src="
        require('../../catalog/v-catalog-item/images/' + cart_item_data.image)
      "
      :alt="cart_item_data.name"
      class="v__item__img"
    />
    <p>{{ cart_item_data.name }}</p>
    <p>{{ cart_item_data.price }}$</p>

    <p class="inc__counter">
      <span @click="decrement">-</span>{{ cart_item_data.quantity
      }}<span @click="increment">+</span>
    </p>

    <button @click="deleteItem">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem");
    },
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    }
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  }
};
</script>

<style lang="less" scoped>
.v__item__img {
  width: 300px;
}
.v__cart__item__data {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 8px;
  margin-bottom: 8px;
  span {
    padding: 5px 10px;
    cursor: pointer;
    margin: 0 10px;
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: greenyellow;
    }
  }
}
</style>
