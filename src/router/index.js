import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () => import( "../views/account/Login.vue")
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import( "../views/account/Register.vue")
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import( "../views/layout/Index.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import( "../views/layout/Index.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // {
  //   path: "/Login",
  //   name: "Login",
  //   component: () => import( "../views/account/Login.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
