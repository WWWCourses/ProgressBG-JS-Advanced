let add =function (){
	let sum = 0;

	for(let p in arguments){
		sum += arguments[p]
	}

	console.log(`Function was called by: ${add.caller}`);
	return sum;
}



let bar = function(){
	add()
}

bar()
