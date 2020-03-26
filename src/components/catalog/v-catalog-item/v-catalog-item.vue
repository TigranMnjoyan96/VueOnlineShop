<template>
  <div class="v__catalog__item">
    <img
      :src="require('./images/' + productData.image)"
      :alt="productData.name"
      :title="productData.name"
      class="v__img"
    />
    <p>{{ productData.name }}</p>
    <p>{{ productData.price }}$</p>
    <button class="v__btn__primary" @click="addToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.productData);
    }
  }
};
</script>

<style lang="less">
.v__catalog__item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 10px;
  margin-bottom: 8px;
  .v__img {
    width: 200px;
  }
  .v__btn__primary {
    border: none;
    border-radius: 5px;
    background: rgb(6, 95, 117);
    color: white;
    outline: none;
    padding: 4px 7px;
    cursor: pointer;
  }
}
</style>
