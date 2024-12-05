let arr=[1, 2, 2, 3, 4, 4, 5]
let a=[];

const myMap= new Set(arr)

for(let value of myMap)
{
    a.push(value)
}

console.log(a);
