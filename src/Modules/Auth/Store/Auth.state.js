export default {
  /** @type {boolean} */
  isLogin: localStorage.getItem("loginStatus")
    ? JSON.parse(localStorage.getItem("loginStatus"))
    : false,
  /** @type {Object} */
  user: {},
  /** @type {string} */
  role: localStorage.getItem("role"),
  /** @type {string | null | undefined} */
  token: localStorage.getItem("token")
};
