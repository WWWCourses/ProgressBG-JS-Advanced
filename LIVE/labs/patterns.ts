class Dev{
  public name:string;
  private id:number;

  constructor(name, id){
    this.name = name;
    this.id = 1;
  }
  getID(){
    return this.id;
  }
}

const pesho = new Dev("Pesho", 1);
console.log(`pesho.getID: ${pesho.getID}`); // 1

console.log(`pesho.id = ${pesho.id}`); // error
pesho.id = 4; //error - private ....