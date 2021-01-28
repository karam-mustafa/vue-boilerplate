import Vue from "vue";
import VueRouter from "vue-router";
// import store from "./../store/Index.js";

Vue.use(VueRouter);

/**
 * @desc this function is pull all routes from modules , the .routes extension is required required in route files
 * @author karam mustafa
 * @return Object[]
 * */
const routesFiles = require.context("../", true, /\.routes.js$/);
const routesModules = routesFiles.keys().reduce((routesModules, routePath) => {
  const value = routesFiles(routePath);
  routesModules.push(value.default);
  return routesModules;
}, []);

const routes = [
  ...routesModules,
  {
    path: "*",
    redirect: "/site/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== "NavigationDuplicated") throw err;
  });
};

// router.beforeEach(async (to, from, next) => {
//   store.commit("IS_LOADING", true);
//   if (to.matched.some(route => route.meta.requiresAuth)) {
//     if (store.getters["Auth/getIsLogIn"]) {
//       // if (to.meta.role) {
//       //   if (to.meta.role === store.getters["Auth/getRole"]) {
//       //     next();
//       //   } else {
//       //     next({ name: "home" });
//       //   }
//       // } else {
//       //   next();
//       // }
//     } else {
//       next({ name: "login" });
//     }
//   } else {
//     next();
//   }
// });
//
// router.afterEach((to, from) => {
//   store.commit("IS_LOADING", false);
//   window.scrollTo(0, 0);
// });

export default router;
