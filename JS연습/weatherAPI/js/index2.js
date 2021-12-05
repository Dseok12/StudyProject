
navigator.geolocation.getCurrentPosition(suc, err);

function suc (pos) {
  const _test = document.querySelector('.h1');
  const _test1 = document.querySelector('.test1');
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const apikey = 'APIKEY';
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

  // console.log(lat);
  // console.log(lon);
  console.log(url);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if(xhr.readyState === xhr.DONE) {
      if(xhr.status === 200) {
        console.log(xhr.response)
        const temp = JSON.parse(xhr.response).main.temp;
        const temp1 = JSON.parse(xhr.response).main;
        console.log(typeof temp)
        _test.innerText = temp;
        _test1.innerText = temp1;
      } else {
        console.error('error')
      }
    }
  }

  xhr.open('GET', url);
  xhr.send();
  
}

function err (err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
// suc();
