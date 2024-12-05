let arr= [1, 2, 2, 3, 3, 3];

const myMap= new Map()

for(let val of arr)
{
    if(myMap.has(val))
    {
        myMap.set(val ,myMap.get(val)+ 1)
    }
    else
    {
        myMap.set(val,1)
    }
}

console.log(myMap);

    