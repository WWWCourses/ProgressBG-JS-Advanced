// DOM cache
var nodes={
  output:  document.getElementsByClassName('output')[0],
  getData1Btn: document.getElementsByClassName('getDataBtn')[0],
  getData2Btn: document.getElementsByClassName('getDataBtn')[1],
};

function doSomethingWithData1(data){
  nodes.output.innerHTML = data;
}

let cart = [
  {
    "name":"Apple",
    "price":2.50
  }
]

function getProductTmpl(product){
  return  `
    <section class="product">
      <h2>${product.name}</h2>
      <div><span>price: </span><span>${product.price}</span></div>
    </section>
  `
};

function showProducts(data){
  let products = JSON.parse(data);

  for(let i = 0; i<products.length; i++){
    let product = products[i];

    nodes.output.innerHTML += getProductTmpl(product);
  }
}

var fetch = function(dataURL, callback){
  // create a XMLHttpRequest object
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
          new ActiveXObject("Microsoft.XMLHTTP");

  // initializes the request:
  xhr.open("GET", dataURL);

  // sends the request:
  xhr.send();

  // on ready (4)
  let res;
  xhr.onreadystatechange = function(){
    if( this.readyState == 4){
      if( this.status == 200){
        res = xhr.response;
        callback(res)
      }
    }
  }
};

nodes.getData1Btn.addEventListener('click', function(){
  fetch(band1LyricsURL, doSomethingWithData1);

});

nodes.getData2Btn.addEventListener('click', function(){
 fetch(productsAPI,showProducts);
});


let band1LyricsURL = '/band1Lyrics.json';
let productsAPI = '/products.json';

