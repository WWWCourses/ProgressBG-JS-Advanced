// TODO: update labs examples in slides
function old(){
	function f_for(x){
		let fact = 1;
		for(let i=1; i<=x; i++){
			fact = fact * i;
		}
		return fact
	}
	// TODO: update in slides iterative examples
	function f_while(x){
		// let fact = 1;

		// while(x>=1){
		// 	fact = fact * (x-1)

		// }

		// return
	}


	function factorial(n){
	    if (n > 1) {
	    	return (n * factorial(n - 1));
	    }else {
	      return 1;
	    }
	}

	function power(a, b){

	}
}


let ul = document.querySelector('ul');
// console.dir(ul);

function changeInRed(node){
	node.style.backgroundColor = "red";
}

function domTravers(parent, value){
	let childs = parent.children;
	console.log(parent.className);

	if( parent.className === value){
		changeInRed(parent)
	}

	for(let i = 0; i<childs.length; i++){
		let el = childs[i];
		domTravers(el,value);
	}
}

domTravers(ul, 'red')