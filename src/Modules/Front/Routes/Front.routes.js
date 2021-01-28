import Home from "../Pages/Home";

/**
 * @desc site module page routes
 * @author karam mustafa
 *
 * */
export default {
  path: "/site",
  name: "site",
  component: () => import("../Front"),
  meta: {
    // requiresAuth: true,
    // role: "admin"
  },
  children: [
    {
      path: "home",
      name: "Home",
      component: Home
    }
  ]
};
