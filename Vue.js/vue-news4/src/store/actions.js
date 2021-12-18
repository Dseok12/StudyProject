import {
  fetchNews,
  fetchAsk
  // fetchJobs,
  // fetchShow,
  // fetchNewest
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
  }
}
