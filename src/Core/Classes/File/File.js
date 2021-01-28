export default class File {
  /**
   * @return file
   * @desc get file
   * @author karam mustafa
   * @return File
   * */
  static resolveFile(file) {
    if (file.$refs.input.files) {
      return file.$refs.input.files[0];
    }
  }
  /**
   * @return file
   * @desc get file
   * @author karam mustafa
   * @return File
   * */
  static basicReturnFile(file) {
    return file;
  }
}
