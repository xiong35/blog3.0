import { createRouter, createWebHistory, RouteLocationRaw, RouteRecordRaw } from "vue-router";

import { Component, defineAsyncComponent } from "@vue/runtime-core";

// const Home = defineAsyncComponent({
//   loader: () => import("./pages/Home.vue"),
//   errorComponent: CErrorVue,
//   loadingComponent: CLoadingVue,
// });

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home,
  //   meta: {
  //     title: "首页",
  //     mustLogin: true,
  //   },
  // },
  // {
  //   path: "/:foo(.*)*",
  //   name: "not-found",
  //   component: NotFound,
  //   meta: {
  //     title: "404",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const TRAILING = " | Xiong35's Blog";
router.beforeEach(async (to, from) => {
  document.title = (to.meta.title || "oops") + TRAILING;
});

export default router;
