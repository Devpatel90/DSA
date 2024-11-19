let arr = [1,2,2,3,4,2];
let counts = 0;

function count(data,target)
{
    data.forEach((el,i)=>{
        if(target == el)
        {
            counts++;
        }
    });

    return counts;
}

console.log(count(arr,2));