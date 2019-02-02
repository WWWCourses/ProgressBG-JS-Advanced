let calcPromise = new Promise((resolve,reject)=>{
	let num = Math.floor(Math.random()*100);
	console.log(`num = ${num}`);

	if(num%2===0){
		resolve('Even')
	}else{
		reject('Odd')
	}
});

calcPromise
.then(msg=>console.log(`Resolved: ${msg}`))
.catch(msg=>console.log(`Rejected: ${msg}`))