export default {
  /**
   * @params {mixed} state
   * @params mixed userCredential
   * @desc logout function
   * @author karam mustafa
   * */
  LOGIN(state, data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.type);
    localStorage.setItem("loginStatus", true);
    state.token = data.token;
    state.role = data.type;
    state.isLogin = true;
  },
  /**
   * @params {mixed} state
   * @params mixed userCredential
   * @desc logout function
   * @author karam mustafa
   * */
  REGISTER(state, data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("loginStatus", true);
    state.token = data.token;
    state.isLogin = true;
  },
  /**
   * @params {mixed} state
   * @desc logout function
   * @author karam mustafa
   * */
  LOGOUT(state) {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("loginStatus");
    state.token = "";
    state.role = "";
    state.isLogin = true;
  }
};
