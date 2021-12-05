/*


const COORDS = 'coords'
const apikey = 'APIKEY';
const wea = document.querySelector(".h1");

function getweather(lat,long){
    //데이터를 얻는 함수
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`
    ).then(function(res){
      //데이터가 우리한테 넘어왔을때, 즉 fetch가 완전히 완료된 후, js에서 뭔가를 끝날때까지 기다리도록 함
        return res.json();//json을 얻음
    }).then(function(json){
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        wea.innerText = `${temp} ${place}`;
    });
    //데이터를 얻음, 홈페이지에서 확인 가능
    //데이터가 우리한테 완전히 넘어와서 한수를 호출할거
}

function savecoord(obj){
    localStorage.setItem(COORDS,JSON.stringify(obj));
    //저장값은 스트링이다.
}

function handelsucces(position){
    console.log("handle Geo Success!!");
    console.log(position.coords.latitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsobj = {
        latitude,
        longitude
    };
    savecoord(coordsobj); //위치정보를 저장한다.
    getweather(latitude,longitude)
}
function handleerror(){
    console.log("handle Geo Error!!!");
}

function askcall(){
    navigator.geolocation.getCurrentPosition(handelsucces,handleerror);
    //현재위치를 가져오는 함수, 수락하지 않으면 에러, 수락하면 위치정보가 뜸
}

function loadcoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askcall();
    }
    else{
        const parseCoords = JSON.parse(loadCoords);
        console.log(parseCoords);
        getweather(parseCoords.latitude,parseCoords.longitude);
        //좌표값을 가지고 있는경우 날씨를 얻는 함수를 바로 호출
    }
}

function init(){
    loadcoords();
}

init();


*/