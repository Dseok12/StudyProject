const _current_temp = document.querySelector('.current_temp');
const _feel = document.querySelector('.feel');
const _min = document.querySelector('.min');

navigator.geolocation.getCurrentPosition(suc, err);

function suc (pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const apikey = 'apikey';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      _current_temp.innerHTML = json.main.temp;
      _feel.innerHTML = json.main.feels_like;
      _min.innerHTML = json.main.temp_min;
      
    });
}

function err (err) {
  console.error('Error',err);
}