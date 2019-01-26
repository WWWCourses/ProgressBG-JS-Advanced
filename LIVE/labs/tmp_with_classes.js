class A{
    constructor(a){
        this.a = a;
    }
}

class B extends A{
    id = 3;
    constructor(a, b){
        super(a)
        this.b = b;
    }
    getB(){
        console.log(`This in CLASS: ${this}`);

        // console.log(`b = ${this.b}`);
    }
}


let b1 =  new B('aaa1', 'bbb1');

console.log(b1.a);
let f = b1.getB;
f();


