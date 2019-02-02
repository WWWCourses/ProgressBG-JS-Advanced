const fs = require('fs');

function readFile(fileName,enc) {
  return new Promise(function(resolve, reject){
    fs.readFile(fileName, enc, (err, data) => {
        err ? reject(err) : resolve(data);
    });
  });
}

function countWords(data){
	let words = data.split(' ');
	let words_count = {};

	words.forEach(e=>{
		if(words_count[e]){
			words_count[e]++
		}else{
			words_count[e] = 1
		}
	})

	console.log(sortObjByValue(words_count));
}

function sortObjByValue(obj){
	return new Map(
		Object.entries(obj)
		.sort((a, b) => b[1] - a[1])
	);
}



let fileName = 'sample_data/lorem.tx';

readFile(fileName,'utf8')
	.then(countWords)
	.catch('Error')



// let data = 'one two one two three';
// console.log(countWords(data));

