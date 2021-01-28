import AuthService from "../Services/Auth.service";

export default {
  /**
   * @param mixed commit
   * @param data
   * @desc login function
   * @author karam mustafa
   * */
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      AuthService.login(data)
        .then(res => {
          let { data, status } = res;
          return AuthService.resolveStatusResponse(status, res).then(() => {
            commit("LOGIN", data.data);
            return resolve(res);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * @param mixed commit
   * @param data
   * @desc login function
   * @author karam mustafa
   * */
  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      AuthService.register(data)
        .then(res => {
          let { data, status } = res;
          return AuthService.resolveStatusResponse(status, res).then(() => {
            commit("REGISTER", data.data);
            return resolve(res);
          });
        })
        .catch(err => reject(err));
    });
  },
  /**
   * @params mixed commit
   * @desc logout function
   * @author karam mustafa
   * */
  logout({ commit }) {
    return new Promise(resolve => {
      commit("LOGOUT");
      resolve();
    });
  },
  /**
   * @params mixed commit
   * @desc forget password  function
   * @author karam mustafa
   * */
  forgetPassword(_, data) {
    return new Promise((resolve, reject) => {
      AuthService.forgetPassword(data)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  /**
   * @params mixed commit
   * @desc forget password  function
   * @author karam mustafa
   * */
  resetPassword(_, data) {
    return new Promise((resolve, reject) => {
      AuthService.resetPassword(data)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
};
