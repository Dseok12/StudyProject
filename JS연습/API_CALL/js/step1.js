const API = `https://api.instantwebtools.net/v1/airlines`;

const _get = (target) => {
  return document.querySelector(target);
}

const handleData = async () => {
  const res = await fetch(API)
  const data = res.json()

  return data;
}


const createElem = `<p class="name"></p>`

handleData().then((data) => {
  console.log(data)
  // createElem.innerHTML = data.name
})
.catch((err) => {
  return console.log(err)
})




