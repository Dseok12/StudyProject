import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],

    // Show, Newest 내가 연습하는것
    shows: [],
    newests: []
  },
  actions,
  mutations,
  getters
})
