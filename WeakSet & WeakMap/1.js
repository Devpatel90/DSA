const mySet = new WeakSet();

let obj = {name : "dev"}
let obj1 = {id : 25}

mySet.add(obj)
mySet.add(obj1)

console.log(mySet.has(obj));
console.log(mySet.has(obj1));


mySet.delete(obj1);

console.log(mySet.has(obj1));

