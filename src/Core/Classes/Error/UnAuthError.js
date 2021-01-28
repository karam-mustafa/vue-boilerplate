import { Notify } from "../Notify/Notify";
import { BaseError } from "../Base/BaseError";

export class UnAuthError extends BaseError {
  dispatchError() {
    Notify.showMessage("error", this.data?.message);
  }
}
