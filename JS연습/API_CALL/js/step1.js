const API = `https://api.instantwebtools.net/v1/airlines`;

const _get = (target) => {
  return document.querySelector(target);
}

const nameBox = _get('.name_box');

const nameLi = (data) => `<li class="name_box">
  <p class="name">${data.name}</p>
  <p class="country">${data.country}</p>
  <p calss="slogan">${data.slogan}</p>
</li>`

const handleData = async () => {
  const res = await fetch(API)
  const data = res.json()

  return data;
}



handleData().then((datas) => {
  console.log(datas.name)
  nameBox.innerHTML = datas.map((datas) => nameLi(datas)).join('')
})
.catch((err) => {
  return console.error(err)
})




