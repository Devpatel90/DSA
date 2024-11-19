let arr = [1,2,3,2,4];

function call(data,target)
{
    let newarr = [];

    data.forEach((el,i)=>{
        if(target == el)
        {
            newarr.push(i);
        }
    })

    return newarr[newarr.length-1];

}

console.log(call(arr,2));
console.log(call(arr,5));