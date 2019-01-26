//@ts-check

// TODO: finish and upload in slides
const Person = function(username, year){
    this.username = username;
    this.year = year;
}
Person.prototype.sayHello = function(){
    console.log(`Hi, I'm ${this.username}`);

}

const Developer = function (username, year, skills) {
    // call Person constructor
    this.skills = skills;
}

Developer.prototype.calcSalary = function () {
    console.log(`Salaray of ${this.username} is ${ this.skills.length * 1000 } `);
}

// Developer.__proto__ =  Person.__proto__

let pesho = new Developer("Pesho", 23, ['PHP', 'Jade']);
let maria = new Developer("Maria", 18, ['JS', 'Angular', 'React']);



pesho.sayHello()
// maria.calcSalary()

