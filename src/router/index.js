import Vue from "vue";
import VueRouter from "vue-router";
import vCatalog from "../components/catalog/v-catalog.vue";
import vCart from "../components/cart/v-cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: vCatalog,
    name: "catalog"
  },
  {
    path: "/cart",
    component: vCart,
    name: "cart",
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
