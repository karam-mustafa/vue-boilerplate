/**
 * @desc auth module page routes
 * @author karam mustafa
 *
 * */
export default {
  path: "/auth",
  name: "auth",
  component: () => import("../Auth"),
  meta: {
    // requiresAuth: true,
    // role: "admin"
  },
  children: [
    {
      path: "login",
      name: "login",
      component: () => import("../Pages/Login")
    },
    {
      path: "register",
      name: "register",
      component: () => import("../Pages/Register")
    }
  ]
};
