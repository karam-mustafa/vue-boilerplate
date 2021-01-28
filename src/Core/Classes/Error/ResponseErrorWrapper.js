import { ErrorRegistration } from "./ErrorRegistration";
import { BadRequestError } from "./BadRequestError";
/**
 * @desc the ResponseErrorWrapper class below is follow open close principle
 * @author karam mustafa
 * */
export class ResponseErrorWrapper {
  constructor(error) {
    this.error = error;
    this.data = this.registerResponse(error);
    return this.wrapError();
  }
  /**
   * @desc this function is return status code from response
   * @author karam mustafa
   * */
  registerResponse(error) {
    return error?.response?.data;
  }
  /**
   * @desc this function is detected the class to dispatch error based status code , and run this class which is
   * show the message error
   * @author karam mustafa
   * */
  wrapError() {
    let errorClass = new ErrorRegistration().getClassFromStatusCode(
      this?.data?.status
    );
    return errorClass != undefined
      ? errorClass?.initData(this.error, this.data).dispatchError()
      : new BadRequestError().initData(this.error, this.data).dispatchError();
  }
}
