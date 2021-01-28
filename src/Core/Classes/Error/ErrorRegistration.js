import { UnAuthError } from "./UnAuthError";
import { BadRequestError } from "./BadRequestError";
import { RequestError } from "./RequestError";
import { UnprocessableEntityError } from "./UnprocessableEntityError";

export class ErrorRegistration {
  statusCodeClasses = {
    401: new UnAuthError(),
    400: new BadRequestError(),
    301: new RequestError(),
    422: new UnprocessableEntityError()
  };
  /**
   * @desc this function is return class based on the status code from response
   * @author karam mustafa
   * */
  getClassFromStatusCode(code) {
    return this.statusCodeClasses[code];
  }
}
