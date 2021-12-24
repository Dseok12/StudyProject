import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchShow,
  fetchNewest,
  fetchUser,
  fetchItem
} from '../api/index'

export default {
  FETCH_NEWS (context) {
    fetchNews()
      .then((response) => {
        console.log(response.data)
        context.commit('SET_NEWS', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  FETCH_ASK (context) {
    fetchAsk()
      .then((response) => {
        console.log(response.data)
        context.commit('SET_ASK', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  FETCH_JOBS (context) {
    fetchJobs()
      .then((response) => {
        console.log(response.data)
        context.commit('SET_JOBS', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  FETCH_SHOW (context) {
    fetchShow()
      .then((response) => {
        console.log(response.data)
        context.commit('SET_SHOW', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  FETCH_NEWEST (context) {
    fetchNewest()
      .then((response) => {
        console.log(response.data)
        context.commit('SET_NEWEST', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  FETCH_USER ({ commit }, name) {
    fetchUser(name)
      .then(({ data }) => {
        console.log(data)
        commit('SET_USER', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  FETCH_ITEM ({ commit }, name) {
    fetchItem(name)
      .then(({ data }) => {
        console.log(data)
        commit('SET_ITEM', data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
