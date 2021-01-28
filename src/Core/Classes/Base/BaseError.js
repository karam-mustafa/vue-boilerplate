import { Notify } from "../Notify/Notify";

export class BaseError {
  data;
  message =
    "there is an error thorough request, please check your internet connection first.";
  initData(error, data) {
    this.error = error;
    this.data = data;
    return this;
  }
  /**
   * @desc the basic function to show error from response
   * @author karam mustafa
   * */
  dispatchError() {
    Notify.showMessage("error", this.data?.message ?? this.message);
  }
}
