// subarray
let arr=[1,2,3,4,5]
for(let x=0;x<arr.length;x++)
{
    let a=[]
    for(let i=x;i<arr.length;i++)
    {
        a.push(arr[i])
        console.log(a);
    }
}