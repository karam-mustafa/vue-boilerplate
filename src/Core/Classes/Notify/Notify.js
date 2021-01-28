import { EventBus } from "../../../main";

export class Notify {
  /**
   * @return string
   * @desc get available message
   * @author karam mustafa
   * */
  static getMessage(code) {
    let codeAvailable = {
      401: "تم انتهاء الجلسة الخاصة بك ، الرجاء اعادة تسجيل الدخول مرة اخرى."
    };
    return codeAvailable[code] != null || undefined
      ? codeAvailable[code]
      : code;
  }

  /**
   * @desc show notification message
   * @param type
   * @param message
   * @author karam mustafa
   * */
  static showMessage(type, message) {
    EventBus.$notify({
      group: "public",
      type: type,
      title: message,
      duration: 4000
    });
  }
}
