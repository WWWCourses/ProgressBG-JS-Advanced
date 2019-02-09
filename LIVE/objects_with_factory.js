function appleFactory(color, price){
  var obj = {};

  obj.color = color
  obj.price = price

  obj.calcMinPrice =  function(){
    return  Math.min( ...this.price ); // from ES6
  };
  obj.calcMaxPrice =function(){
    return  Math.max( ...this.price ); // from ES6
  };
  obj.sayPrice =function(p){
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

  return obj;
}

var apple1 = appleFactory('red', [20, 22, 24])
var apple2 = appleFactory('green', [17, 18.5, 21])




apple1.sayPrice("max");
// Max Price of the  red apple is: 21
apple2.sayPrice("min");
// Min Price of the  green apple is: 21



var obj = {}

obj.name = "Ada"


