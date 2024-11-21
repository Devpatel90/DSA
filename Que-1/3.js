let arr=[1,1,2,3,3,4]

function rev(){
    let i=0;
    for(let j=1; j<arr.length; j++)
    {
        if (arr[i] != arr[j])
        {
            i++;
            arr[i] =arr[j]
        }
    }
    // console.log(arr);
    let narr=[];
    for(let x=0; x<=i; x++)
    {
        narr.push(arr[x])
    }
    console.log(narr);
    
    return i+1
}
console.log(rev());
