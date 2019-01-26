function changeColorInterval(){
	let count = 0;

	let f = function(){
		console.log(`Hi`);
		if( count === 2){
			clearInterval(intID);
		}
		count++;
	}
	let intID = setInterval(f, 600);
}

// function (x){
// 	let f = function(){
// 		console.log(`1:  x=${x}`);
// 	}

// 	setTimeout(f, 1000*x);

// 	console.log(`2: x = ${x}`);
// }


for(let i = 1; i<4; i++){

	setTimeout(function(){
		console.log(`inner:  i=${i}`);
	}, 1000*i);

	console.log(`outer: i = ${i}`);
}


// outer: 1, 2, 3
// inner: 4, 4, 4