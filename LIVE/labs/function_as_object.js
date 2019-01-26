let car = {
    'initLevel': 0,
    'inflate': function(maxLevel){
        this.initLevel = maxLevel;
    }
}

let bicycle = {
    'initLevel':0
}

// function.call(thisArg, arg1, arg2, ...)
// function.apply(thisArg, [argsArray])
// function.bind(thisArg[, arg1[, arg2[, ...]]])
car.inflate.apply(bicycle, [50])
console.log(bicycle.initLevel);

let f =  car.inflate.bind(bicycle, 80)


f();
console.log(bicycle.initLevel);

