import { Mapper } from "../Mapper/Mapper";
import { Notify } from "../Notify/Notify";

export default class BaseService {
  static data;

  /**
   * @param {response} item
   * @param {CallableFunction} callbackFn
   * @author karam mustafa
   * @return Boolean|CallableFunction
   * */
  static checkIfExists(item = null, callbackFn = null) {
    try {
      let checkIfElementExists =
        item !== null && item !== undefined && item !== "";
      if (checkIfElementExists) {
        return callbackFn !== null ? callbackFn(item) : checkIfElementExists;
      }
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }
  /**
   * @param {Integer} status
   * @param {Object} res
   * @author karam mustafa
   * @return Promise<Object>
   * */
  static resolveStatusResponse(status = 200, res = {}) {
    try {
      return status < 300 ? Promise.resolve(res) : Promise.reject(res);
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @author karam mustafa
   * @desc this function is convert obj to formData , you can use it if you have an image
   * @return FormData
   * */
  static FormBuilder() {
    try {
      let formData = new FormData();
      Object.keys(this.data).forEach(item => {
        formData.append(item, this.data[item]);
      });
      return formData;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @param {Object} keys
   * @author karam mustafa
   * @desc this function is convert the values to String
   * @return BaseService
   * */
  static toString(keys) {
    try {
      keys.forEach(key => {
        if (this.data[key]) {
          this.data[key] = this.data[key].toString();
        }
      });
      return this;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @param {Array , Object} data
   * @author karam mustafa
   * @param data
   * @return void
   * */
  static setData(data) {
    try {
      this.data = Mapper.camelToUnderscore(data);
      return this;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @author karam mustafa
   * @desc this function is filter data if there any value null or empty , then we will remove it
   * @return BaseService
   * */
  static filterForEmpty() {
    try {
      let newData = this.data;
      Object.keys(this.data).forEach(item => {
        this.checkIfEmpty(this.data[item], function(value) {
          delete newData[value];
        });
      });
      this.data = newData;
      return this;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @param {string} item
   * @param {function} callback
   * @desc check if inserted parameter is empty or null or undefined
   * @author karam mustafa
   * @return CallableFunction
   * */
  static checkIfEmpty(item, callback) {
    try {
      if (item === "" || item == null || item == undefined) {
        return callback(item);
      }
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @param {array}  dataToUnset
   * @author karam mustafa
   * @desc this function is remove any items inside dataToUnset parameter form data property
   * @return BaseService
   * */
  static unsetData(dataToUnset) {
    try {
      let newData = this.data;
      dataToUnset.forEach(item => {
        delete newData[item];
      });
      this.data = newData;
      return this;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @author karam mustafa
   * */
  static getWithFormBuilder() {
    try {
      return this.FormBuilder();
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @param {object}  obj
   * @desc this function is rename keys based on obj params
   * @exampe if we have [test_id] in data property and we want to convert to [testId]
   *  then we will run this function with obj parameter {testId : "test_id"}
   * @author karam mustafa
   * @return BaseService
   * */
  static customizeData(obj) {
    try {
      Object.keys(obj).map(item => (this.data[item] = this.data[obj[item]]));
      return this;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @author karam mustafa
   * @return Object | any
   * */
  static get() {
    try {
      return this.data;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }

  /**
   * @desc auto map response data
   * @author karam mustafa
   * @return resolveResponse|Object
   * */
  static responseMapperToCamel(res) {
    try {
      if (res.data.response) {
        if (!Array.isArray(res.data.response)) {
          res.data.response = [res.data.response];
        }
        res.data.response.map((item, index) => {
          if (res.data.response[index]) {
            res.data.response[index] = Mapper.underscoreToCamel(item);
          }
        });
      }
      return res;
    } catch (e) {
      Notify.showMessage("error", e);
    }
  }
}
