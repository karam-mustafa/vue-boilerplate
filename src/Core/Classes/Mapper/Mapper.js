export class Mapper {
  /**
   * @desc this function convert all obj content to camelCase words
   * @author karam mustafa
   * @return Object
   * */
  static underscoreToCamel(obj) {
    return JSON.parse(
      JSON.stringify(obj).replace(
        /(_\w)\w+":/g,
        match => match[1].toUpperCase() + match.substring(2)
      )
    );
  }
  /**
   * @desc this function return all keys from an object in camel case formatting and convert to under score words
   * @author karam mustafa
   * @return Object
   * */
  static camelToUnderscore(obj) {
    let newObj = {};
    for (let camel in obj) {
      newObj[camel.replace(/([A-Z])/g, "_$1").toLowerCase()] = obj[camel];
    }
    return newObj;
  }
}
