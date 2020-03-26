import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, payload) => {
      state.products = payload;
    },
    SET_CART: (state, payload) => {
      const car = state.cart.find(c => c === payload);
      if (!car) {
        state.cart.push(payload);
      }
    },
    SET_DELETE_FROM_CART: (state, payload) => {
      
        state.cart.splice(payload, 1);
      
    },
    SET_INCREMENT_COUNT(state, index) {
      state.cart[index].quantity++;
    },
    SET_DECREMENT_COUNT(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } 
      else {
        state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET"
      })
        .then(products => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch(err => {
          console.log(err);
          return err;
        });
    },
    ADD_TO_CART({ commit }, payload) {
      commit("SET_CART", payload);
    },
    DELETE_FROM_CART({ commit }, payload) {
      commit("SET_DELETE_FROM_CART", payload);
    },
    INCREMENT_COUNT({ commit }, payload) {
      commit("SET_INCREMENT_COUNT", payload);
    },
    DECREMENT_COUNT({ commit }, payload) {
      commit("SET_DECREMENT_COUNT", payload);
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  },
  modules: {}
});
