const API_URL = `https://api.instantwebtools.net/v1/passenger/4`;

const _get = (target) => {
  return document.querySelector(target)
}

const currentPage = 1;
const currentPassenger = 1;

const _listBox = _get('.list_box')
const _btntBox = _get('.btn_box')

const fetchHandle = async () => {
  const res = await fetch(API_URL)
  const data = res.json()

  return data;
}

fetchHandle().then((data) => {
  return console.log(data)
})





























