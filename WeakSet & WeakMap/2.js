const myMap = new WeakMap();

let obj = {name : "dev"}
let obj1 = {id : 25}

myMap.set(obj,"dev")
myMap.set(obj1)

console.log(myMap.get(obj));


console.log(myMap.has(obj));

myMap.delete(obj1);

console.log(myMap.has(obj1));

