import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /** @var {boolean}*/
    drawerVisibilityValue: false,
    isLoading: false
  },
  mutations: {
    /**
     * @desc change sidebar opining status
     * @author karam mustafa
     * */
    IS_LOADING(state, value) {
      state.isLoading = value;
    },
    /**
     * @return {boolean}
     * @author karam mustafa
     */
    CHANGE_DRAWER_VISIBILITY(state) {
      state.drawerVisibilityValue = !state.drawerVisibilityValue;
    }
  },
  getters: {
    getDrawerVisibilityValue: state => state.drawerVisibilityValue,
    /**
     * @author karam mustafa
     * */
    getIsLoading(state) {
      return state.isLoading;
    }
  },
  actions: {},
  modules
});
