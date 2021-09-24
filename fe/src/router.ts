import { createRouter, createWebHistory, RouteLocationRaw, RouteRecordRaw } from "vue-router";

import { Component, defineAsyncComponent } from "@vue/runtime-core";

import CError from "./components/CError.vue";
import CLoading from "./components/CLoading.vue";
import { isHovering } from "./reactivity/theCursor";
import { setTitle } from "./utils/setTitle";

const About = defineAsyncComponent({
  loader: () => import("./pages/About.vue"),
  errorComponent: CError,
  loadingComponent: CLoading,
});
const AdminCompose = defineAsyncComponent({
  loader: () => import("./pages/AdminCompose.vue"),
  errorComponent: CError,
  loadingComponent: CLoading,
});
const AdminLogin = defineAsyncComponent({
  loader: () => import("./pages/AdminLogin.vue"),
  errorComponent: CError,
  loadingComponent: CLoading,
});
const Home = defineAsyncComponent({
  loader: () => import("./pages/Home.vue"),
  errorComponent: CError,
  loadingComponent: CLoading,
});
const PostDetail = defineAsyncComponent({
  loader: () => import("./pages/PostDetail.vue"),
  errorComponent: CError,
  loadingComponent: CLoading,
});
const Posts = defineAsyncComponent({
  loader: () => import("./pages/Posts.vue"),
  errorComponent: CError,
  loadingComponent: CLoading,
});
const NotFound = defineAsyncComponent({
  loader: () => import("./pages/NotFound.vue"),
  errorComponent: CError,
  loadingComponent: CLoading,
});

let routes: RouteRecordRaw[] = [
  {
    path: "/",
    // name: "home",
    // component: Home,
    // meta: {
    //   title: "首页",
    // },
    redirect: {
      name: "posts",
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      title: "关于我",
    },
  },
  {
    path: "/admin/compose",
    name: "admin-compose",
    component: AdminCompose,
    meta: {
      title: "发表",
      admin: true,
    },
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: AdminLogin,
    meta: {
      title: "登录后台",
      admin: true,
    },
  },
  {
    path: "/post/:id",
    name: "post-detail",
    component: PostDetail,
    meta: {
      title: "文章详情",
    },
    props: (route) => ({
      id: route.params.id,
    }),
    beforeEnter: (to) => {
      if (!to.params.id) return { name: "not-found" };
    },
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
    meta: {
      title: "文章列表",
    },
    props: (route) => ({
      fromDate: route.query.fromDate,
      toDate: route.query.toDate,
      kw: route.query.kw,
    }),
  },
  {
    path: "/:foo(.*)*",
    name: "not-found",
    component: NotFound,
    meta: {
      title: "404",
    },
  },
];

routes = routes.map((route) =>
  route.name === "not-found"
    ? route
    : { ...route, path: "/blog3.0" + route.path }
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  setTitle((to.meta.title as string) || "oops");
});
router.afterEach(async (to, from) => {
  isHovering.value = false;
});

export default router;
