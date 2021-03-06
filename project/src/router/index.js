import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/home/index.vue'
import Category from '../views/category/index'
import Cart from '../views/cart/index'
import Personal from '../views/personal/index'
Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: 'home'
},
{
  path: "/home",
  name: "home",
  component: Home
},
{
  path: "/category",
  name: "category",
  component: Category
},
{
  path: "/cart",
  name: "cart",
  component: Cart
}, {
  path: "/personal",
  name: "personal",
  component: Personal
},
{
  path: "/about",
  name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/About.vue")
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
