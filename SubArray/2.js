//sum of subarray
let arr=[1,2,3,4,6]
let sum=0
for(let x=0;x<arr.length;x++)
{
    let a=0
    for(let i=x;i<arr.length;i++)
    {
        a+=arr[i]
        console.log(a);
    }
}