const API = `https://api.instantwebtools.net/v1/airlines`;

const _get = (target) => {
  return document.querySelector(target);
}

const handleLoadData = async () => {
  await fetch(API)
  .then((res) => res.json())
  .then((data) => {
    // console.table(data)
    for( var i = 0; i <= 10; i++){
      _get('.name').innerHTML = `${data[i].name}`
      // document.write('<p class="name">' + data[i].name + '</p>')
    }
    })
    .catch((err) => console.error(err))
}
handleLoadData();