import axios from 'axios'

// Http Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들 정리
function fetchNewsList () {
  return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAsk () {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobs () {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchShow () {
  return axios.get(`${config.baseUrl}show/1.json`)
}

function fetchNewest () {
  return axios.get(`${config.baseUrl}newest/1.json`)
}

function fetchUserInfo (username) {
  return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchCommentItem (id) {
  return axios.get(`${config.baseUrl}item/${id}.json`)
}

export {
  fetchNewsList,
  fetchAsk,
  fetchJobs,
  fetchShow,
  fetchNewest,
  fetchUserInfo,
  fetchCommentItem
}
