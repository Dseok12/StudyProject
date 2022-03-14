const API = `https://api.instantwebtools.net/v1/passenger`;

const _get = (target) => {
  return document.querySelector(target);
}


const handleLoadData = async (e) => {
  e.preventDefault();
  
  const address = {
    name,
    trips,
    airline
  }

  await fetch(API, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(address)
  })
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
    return console.log('데이터 보내기 성공')
  })
  .catch((err) =>{
    console.error(err)
    return console.log('데이터 전송 실패')
  })

}
// handleLoadData();
const init = () => {
  _get('.submit_btn').addEventListener('submit',handleLoadData)
}

init();