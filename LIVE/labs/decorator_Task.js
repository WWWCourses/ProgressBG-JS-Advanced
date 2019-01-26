function toCammelCase(str){
  return str.replace(/\W+(.)/g, function(match, chr)
         {
            console.log(`match: ${match}`);
            console.log(`chr: ${chr}`);
              return chr.toUpperCase();
          });
}

console.log(toCammelCase('test'));

// TODO: upload solution with global array

// // define function listArrayElements() which logs in console an array elements

// const users = ['PeSHo', 'maria'];
// listArrayElements();
// // 'PeSHo'
// // 'maria'


// function beautify(f){

//   return function(){
//     // let usersConverted = users.toCammelCase();
//     // log usersConverted
//   }
// }

// listArrayElements = beautify(listArrayElements);
// listArrayElements(users);
// // 'Pesho'
// // 'Maria'






