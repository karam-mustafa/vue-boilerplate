import Vue from "vue";

/**
 * @desc this will call all files which has Base Key words
 * @author karam mustafa
 *
 * */
const requireComponent = require.context("./", true, /Base[\w-]+\.vue$/);
/**
 * @desc now for each path we will require this module, and then will register this component
 * then this file will call by main.js
 * @author karam mustafa
 *
 * */
requireComponent.keys().forEach(fileName => {
  // get component config
  const componentConfig = requireComponent(fileName);
  console.log(componentConfig)
  // register component globally
  Vue.component(
    componentConfig.default.name,
    componentConfig.default || componentConfig
  );
});
