import { BaseError } from "../Base/BaseError";
import { Notify } from "../Notify/Notify";

export class RequestError extends BaseError {
  /*** @inheritDoc * */
  dispatchError() {
    Notify.showMessage("error", this.message);
  }
}
