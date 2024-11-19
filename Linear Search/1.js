let arr = [10,20,30,40,50];
let tar = 30;

function add()
{

    for(let a=0; a<arr.length; a++)
    {
        if(target == arr[a])
        {
            return a;
        }
    }
    return -1;
}

console.log(add());