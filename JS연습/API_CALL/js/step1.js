const API = `https://api.instantwebtools.net/v1/airlines`
const _get = (target) => {
  return document.querySelector(target)
}
const handleLoadData = async () => {
  await fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      data.forEach((m) => {
      _get('.name').innerHTML = m.name
      _get('.country').innerHTML = m.country
      // console.log(m)
      })
    })
    .catch((err) => console.error(err))
}
handleLoadData()