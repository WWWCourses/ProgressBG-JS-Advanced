var Dev = /** @class */ (function () {
    function Dev(name, id) {
        this.name = name;
        this.id = 1;
    }
    Dev.prototype.getID = function () {
        return this.id;
    };
    return Dev;
}());
var pesho = new Dev("Pesho", 1);
console.log("pesho.getID: " + pesho.getID); // 1
console.log("pesho.id = " + pesho.id); // error
pesho.id = 4; //error - private ....
