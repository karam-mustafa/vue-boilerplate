import { Notify } from "../Notify/Notify";
import axios from "axios";
import store from "../../../store";
import { ResponseErrorWrapper } from "../Error/ResponseErrorWrapper";

export default class Request {
  /**
   * @param axios
   * @desc initialed axios
   * @author karam mustafa
   * */
  static initHttp(axios) {
    axios.defaults.baseURL = process.env.VUE_APP_URL;
    axios.interceptors.request.use(
      async config => {
        config = this.prepareInterceptorsConfig(config);
        store.commit("IS_LOADING", true);
        return config;
      },
      error => {
        console.warn(error);
        store.commit("IS_LOADING", false);
      }
    );
    axios.interceptors.response.use(
      response => {
        if (response?.status == 200) {
          Notify.showMessage("success", response?.data?.message);
        }
        store.commit("IS_LOADING", false);
        return Promise.resolve(response);
      },
      async error => {
        try {
          store.commit("IS_LOADING", false);
          return new ResponseErrorWrapper(error);
        } catch (e) {
          console.warn(e);
          store.commit("IS_LOADING", false);
          return Promise.reject(e);
        }
      }
    );
    return axios;
  }

  /**
   * @param {object} queryParams
   * @param {String} url
   * @desc login function
   * @author karam mustafa
   * */
  static async get(url, queryParams = null) {
    // get header
    let headers = this.getHeaders();
    // check if there is any query params inserted
    let config = {
      params: queryParams !== null ? queryParams : "",
      headers: headers
    };
    return await axios
      .get(url, config)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(function(error) {
        // show error if failed
        Notify.showMessage("error", Notify.getMessage(error));
      });
  }

  /**
   * @param {string} url
   * @param {object} data
   * @param {object} options
   * @author karam mustafa
   * */
  static async post(url, data, options = {}) {
    // get header
    let headers = this.getHeaders(options);
    return await axios
      .post(url, data, { headers: headers })
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(error => {
        // show error if failed
        Notify.showMessage("error", Notify.getMessage(error));
      });
  }

  /**
   * @param {string} url
   * @param {object} data
   * @param {object} options
   * @author karam mustafa
   * */
  static async patch(url, data, options = {}) {
    // get header
    let headers = this.getHeaders(options);
    return await axios
      .patch(url, data, { headers: headers })
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(error => {
        // show error if failed
        Notify.showMessage("error", Notify.getMessage(error));
      });
  }

  /**
   * @param {string} url
   * @param {object} options
   * @author karam mustafa
   * */
  static async delete(url, options = {}) {
    // get header
    let headers = this.getHeaders(options);
    return await axios
      .delete(url, { headers: headers })
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(error => {
        // show error if failed
        Notify.showMessage("error", Notify.getMessage(error));
      });
  }

  /**
   * @param {object} options
   * @author karam mustafa
   * */
  static getHeaders(options = {}) {
    let result = {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: "Bearer " + localStorage.getItem("token")
    };
    if (options.headers) {
      result[options.headers.key] = options?.headers?.value;
    }
    return result;
  }

  static prepareInterceptorsConfig(config) {
    config.params = {
      ...config.params,
      local: localStorage.getItem("locale")
    };
    return config;
  }
}
