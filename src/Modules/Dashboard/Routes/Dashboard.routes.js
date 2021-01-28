/**
 * @desc dashboard module page routes
 * @author karam mustafa
 *
 * */
export default {
  path: "/dashboard",
  name: "dashboard",
  component: () => import("../Dashboard"),
  meta: {
    requiresAuth: true,
    role: "admin"
  },
  children: []
};
