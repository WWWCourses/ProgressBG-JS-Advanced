function Obj(name){
  this.name = name;
}
Obj.prototype.sayName = function(){
  console.log(this.name);
}

const obj1 = new Obj('obj1');
const obj2 = new Obj('obj2');

obj1.sayName(); // obj1
obj2.sayName(); // obj2

const mixin1 = {
  mf1:()=>console.log(`mf1`),
  mf2:()=>console.log(`mf2`),
}

// add mixins to objects:
obj1.mf2 = mixin1.mf2;
obj2.mf1 = mixin1.mf1;

obj1.mf2(); // mf2
obj2.mf1(); // mf1
obj1.mf1(); // error!
