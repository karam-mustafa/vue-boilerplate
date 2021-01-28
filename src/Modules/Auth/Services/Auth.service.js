import Request from "../../../Core/Classes/Request/Request";
import {
  forgetPasswordApi,
  loginApi,
  logoutApi,
  registerApi,
  resetPasswordApi
} from "./Auth.api";
import BaseService from "../../../Core/Classes/Base/BaseService";
import { Mapper } from "../../../Core/Classes/Mapper/Mapper";

export default class AuthService extends BaseService {
  /**
   * @param data
   * @desc login function
   * @author karam mustafa
   * */
  static login(data) {
    return Request.post(loginApi, Mapper.camelToUnderscore(data)).then(res =>
      Promise.resolve(res)
    );
  }

  /**
   * @param data
   * @desc login function
   * @author karam mustafa
   * */
  static register(data) {
    return Request.post(registerApi, Mapper.camelToUnderscore(data)).then(res =>
      Promise.resolve(res)
    );
  }
  /**
   * @desc login function
   * @author karam mustafa
   * */
  static logout() {
    return Request.delete(logoutApi).then(res => Promise.resolve(res));
  }
  /**
   * @param data
   * @desc forget password function
   * @author karam mustafa
   * */
  static forgetPassword(data) {
    return Request.post(
      forgetPasswordApi,
      Mapper.camelToUnderscore(data)
    ).then(res => Promise.resolve(res));
  }
  /**
   * @param data
   * @desc reset password function
   * @author karam mustafa
   * */
  static resetPassword(data) {
    let newResetPasswordApi = `${resetPasswordApi}/${data.hash}`;
    return Request.post(
      newResetPasswordApi,
      Mapper.camelToUnderscore(data)
    ).then(res => Promise.resolve(res));
  }
}
