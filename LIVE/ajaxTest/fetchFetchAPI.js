// DOM cache
var nodes={
  output:  document.getElementsByClassName('output')[0],
  getData1Btn: document.getElementsByClassName('getDataBtn')[0],
  getData2Btn: document.getElementsByClassName('getDataBtn')[1],
};

function doSomethingWithData1(data){
  nodes.output.innerHTML = data;
}

function getProductTmpl(product){
  return  `
    <section class="product">
      <h2>${product.product_name}</h2>
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

function showNameDays(data){
  let nameDaysObj  = JSON.parse(data);
  console.dir(nameDaysObj);
}


nodes.getData1Btn.addEventListener('click', function(){
  // fetch(band1LyricsURL, doSomethingWithData1);
  fetch(nameDaysAPI)
  .then(function (response){
    return response.text();
  })
  .then(function (responseText){
    showNameDays(responseText)
  })

});

nodes.getData2Btn.addEventListener('click', function(){
 fetch(productsAPI)
  .then(function (response){
    return response.text();
  })
  .then(function (responseText){
    showProducts(responseText)
  })
});


let band1LyricsURL = '/band1Lyrics.json';
let productsAPI = '/products.json';


let nameDaysAPI = 'http://date.nager.at/api/v1/get/BG/2019 '

