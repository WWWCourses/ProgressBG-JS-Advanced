let obj1 = {
    'a': 1,
    'b': 2,
    'c': 3,
}

// Object.assign(target, ...sources)
let obj2 = {};
Object.assign(obj2,obj1, {'d':4}, {'e':5});
console.dir( obj2 );
