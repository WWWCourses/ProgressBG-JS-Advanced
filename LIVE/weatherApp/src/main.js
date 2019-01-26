function getWeatherData(){
  // request to weatherService - to get the weather json

  console.log(`@@@@@@@@@@@@@@getWeatherData`);
  // let URL_API  = 'api.openweathermap.org/data/2.5/weather?q=London';
  // let URL_API = '/weatherService/dataAPI.json';

  // let URL_API = 'https://api.github.com/users/Microsoft/repos'


  let URL_API = '/src/index.html'

  //send AJAX request:
  let xhr = new XMLHttpRequest();

  // init the XHR object:
  xhr.open('GET', URL_API, false);

  xhr.send();



  let res = xhr.response;


  return res;
}

function attachClickEvents(){
  let townMenu = document.querySelector('ul.town_menu');

  townMenu.addEventListener('click', function(e){
    let className = e.target.classList.item(0);

    let data = getWeatherData();

    outputNode.innerHTML = data;

    console.log(`DO SOMEHTING VERY IMPORTANT`);
  });
}


attachClickEvents();

let outputNode  = document.querySelector('.output');