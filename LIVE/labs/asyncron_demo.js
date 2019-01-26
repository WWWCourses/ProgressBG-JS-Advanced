// synchronized:
// console.log(`1`);
// alert("OK");
// console.log(`2`);

console.log(`1`);
setTimeout(()=>console.log(`3 in setTimeout`), 3000);
console.log(`2`);