function f(){
	console.dir(this);

	this.name = "Ada"
	this.f = function(){
		console.log(`I'm method f()`);
		console.dir(this);
	}
}

// console.log(`this in function call:`);
// f()

// console.log(`this in method call:`);
// var obj1 = {}
// obj1.f()

console.log(`this in constructor call:`);
var pesho = new f();


