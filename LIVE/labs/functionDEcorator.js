// decorator function defined with function declaration
function decorator(f){
  return function(...args){
    console.log(`Decorated!`);
    f(...args);
  }
}

// the function to be decorated
function howdy(msg, un){
  console.log(`${msg} - ${un}!`);
}
// decorate the function
howdy = decorator(howdy)

// use the decorated function
howdy("Hello", "Ada");
