//sum of subarray
let arr=[1,1,1]
let target = 2;
let count= 0;
for(let x=0;x<arr.length;x++)
{
    let sum=0
    for(let i=x;i<arr.length;i++)
    {
        sum += arr[i]
        if(sum==target)
        {
            count++
        }
    }
}
console.log(count);