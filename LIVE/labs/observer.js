//The Subject "class"
var Subject = function () {
  this.observerList = [];
}
Subject.prototype.registerObserver = function(observer) {
  this.observerList.push(observer);
}
Subject.prototype.unregisterObserver = function(observer) {
  // find the Observer that wants to be removed
  var index = this.observerList.indexOf(observer);
  // Remove it from the array
  this.observerList.splice(index, 1);
}
Subject.prototype.notifyObservers = function() {
  for (let i = 0, len = this.observerList.length; i < len; i += 1) {
    this.observerList[i].notify();
  }
}

// The Observer "class"
var Observer = function() {
  // notification means calling a method of the subscriber object
  this.notify = function() {
    throw "notify() is not implemented";
  }
}




var data = 0;

// create Subject
var subject = new Subject();

// create Observers
var a = new Observer();
a.notify = ()=> {console.log(data)}
var b = new Observer();
b.notify = ()=> {console.log(data)}

// Register the observers
subject.registerObserver(a);
subject.registerObserver(b);

// use
for (var i = 0; i < 4; i += 1){
  data += 1;
  subject.notifyObservers();
}

// Unregister observer a
subject.unregisterObserver(a);

// change data and notify again
data += 1;
subject.notifyObservers();