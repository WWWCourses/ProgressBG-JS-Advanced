function Developer(name, x){
	// var obj = {}
	// this = obj;


	this.name = name;
	var skills = x;

	this.calcSalary = function(){
		console.log(`${this.name} salary is ${skills.length * 1000}`);
	}
}

dev1 = new Developer("pesho", ["PHP", "Ruby", "JS"]);
dev2 = new Developer("maria", ["Python", "C++"]);

dev1.skills = ["@@@@@"];
dev1.calcSalary()

console.dir(dev1);


