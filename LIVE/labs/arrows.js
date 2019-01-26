// arrow function which return the sum of variable number of arguments

let add = (...args)=>{
	sum = 0;
	for(let i = 0; i<args.length; i++){
		sum += args[i]
	}

	return sum
}


console.log(add(1,2));
console.log(add(1,2,3));