const requireModule = require.context("./../", true, /Index.js$/);
const modules = {};
/**
 * @desc now for each path of store modules we will require this module
 * then this file will include index.js
 * @author karam mustafa
 *
 * */
requireModule.keys().forEach(fileName => {
  if (fileName == "Index.js") return;
  const moduleName = fileName.split("/")[2];
  modules[moduleName] = requireModule(fileName).default;
});
export default modules;
