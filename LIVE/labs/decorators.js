function timestampDecorator(component) {
  //assign new method to component
  // TODO:

  return component;
}

// the client, which will be Decorated
class GetItem{
  constructor(name){
    this.name = name
  }

  requestItem(){
    console.log(`An Item is requested for ${this.name}`);
  }
}

let getItem1 = new GetItem('getItem1');
getItem1.requestItem();

getItem1 = timestampDecorator(getItem1);
getItem1.requestItem();