let arr = [3,7,1,5,9,0,2];
let min = +Infinity;
let max = -Infinity;

function maxnum(arr)
{
    for(let a=0; a<arr.length; a++)
    {
        if(max < arr[a])
        {
            max = arr[a];
        }
    }
    
    return max;    
}

function minnum(arr)
{
    for(let a=0; a<arr.length; a++)
    {
        if(min > arr[a])
        {
            min = arr[a];
        }
    }
    
    return min;    
}

function call(arr)
{
    console.log("Minimum :- " +minnum(arr) + " , Maximum :- " +maxnum(arr) );
}

call(arr);