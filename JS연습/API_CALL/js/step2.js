const API = `https://api.instantwebtools.net/v1/airlines`;

const _get = (target) => {
  return document.querySelector(target);
}


const handleLoadData = async (e) => {
  e.preventDefault();
  const address = {
    name,
    country
  } 
  await fetch(API, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(address)
  })
  .then((res) => res.json())
  .then(() => {
    console.log('데이터 보내기 성공')
  })
  .catch((err) => console.error(err))
}
// handleLoadData();
const init = () => {
  _get('.submit_btn').addEventListener('submit',handleLoadData)
}

init();