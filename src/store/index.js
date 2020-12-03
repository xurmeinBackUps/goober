import Vue from 'vue';
import Vuex from 'vuex';
import testData from '@/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...testData
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
