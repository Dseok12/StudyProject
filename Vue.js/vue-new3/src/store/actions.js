import {
  fetchNewsList,
  fetchAsk,
  fetchJobs,
  fetchShow,
  fetchNewest,
  fetchUserInfo,
  fetchCommentItem
} from '../api/index'

export default {
  FETCH_NEWS ({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        console.log(data)
        commit('SET_NEWS', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  FETCH_ASK ({ commit }) {
    fetchAsk()
      .then(({ data }) => {
        console.log(data)
        commit('SET_ASK', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  FETCH_JOBS ({ commit }) {
    fetchJobs()
      .then(({ data }) => {
        console.log(data)
        commit('SET_JOBS', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  // Show, Newest 내가 연습하는것
  FETCH_SHOW (context) {
    fetchShow()
      .then((response) => {
        console.log(response)
        context.commit('SET_SHOW', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  FETCH_NEWEST (context) {
    fetchNewest()
      .then((response) => {
        console.log(response)
        context.commit('SET_NEWEST', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // Show, Newest 내가 연습하는것

  FETCH_USER ({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data)
        commit('SET_USER', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  FETCH_ITEM ({ commit }, item) {
    fetchCommentItem(item)
      .then(({ data }) => {
        console.log(data)
        commit('SET_ITEM', data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
