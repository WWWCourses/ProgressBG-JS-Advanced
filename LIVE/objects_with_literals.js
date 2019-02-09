// TODO - upload as bad example in slides.
var apple1 = {
  color: "red",
  price: [23.5, 22, 25],

  calcMinPrice: function(){
    return  Math.min( ...this.price ); // from ES6
  },
  calcMaxPrice: function(){
    return  Math.max( ...this.price ); // from ES6
  },
   sayPrice:function(p){
  	var price;
  	var min_max;
  	if(p==='max'){
  		min_max = 'Max';
  		price = this.calcMaxPrice();
  	}else if(p==='min'){
  		min_max = 'Min';
  		price = this.calcMinPrice();
  	}else{
  		console.log(`########`);
  	}

  	console.log(`${min_max} Price of the  ${this.color} apple is: ${price}`);
  }
}

var apple2 = {
  color: "green",
  price: [18.5, 20, 21],

  calcMinPrice: function(){
    return  Math.min( ...this.price ); // from ES6
  },
  calcMaxPrice: function(){
    return  Math.max( ...this.price ); // from ES6
  },
  sayPrice:function(p){
  	var price;
  	var min_max;
  	if(p==='max'){
  		min_max = 'Max';
  		price = this.calcMaxPrice();
  	}else if(p==='min'){
  		min_max = 'Min';
  		price = this.calcMinPrice();
  	}else{
  		console.log(`########`);
  	}

  	console.log(`${min_max} Price of the  ${this["#color"]} apple is: ${price}`);
  }
}

apple1.sayPrice("max");
// Max Price of the  red apple is: 21
apple2.sayPrice("min");
// Min Price of the  green apple is: 21

