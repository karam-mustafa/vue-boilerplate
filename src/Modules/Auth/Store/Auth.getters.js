export default {
  /**
   * @desc check login status or actor if signed in
   * @author karam mustafa
   * @task #BACT-101
   * */
  getIsLogIn(state) {
    return state.isLogin;
  },
  /**
   * @desc get token value
   * @author karam mustafa
   * */
  getToken(state) {
    return state.token;
  },
  /**
   * @desc get token value
   * @author karam mustafa
   * */
  getRole(state) {
    return state.role;
  }
};
