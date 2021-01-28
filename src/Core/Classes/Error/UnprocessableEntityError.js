import { Notify } from "../Notify/Notify";
import { BaseError } from "../Base/BaseError";

export class UnprocessableEntityError extends BaseError {
  /*** @inheritDoc * */
  dispatchError() {
    Object.values(this.error.response.data ?? []).forEach(items => {
      if (items) {
        items.forEach(item => {
          Notify.showMessage("error", item);
        });
      }
    });
  }
}
