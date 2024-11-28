function rsa(arr)
{

    let newarr = [];

    for(let row=0; row<arr.length; row++)
    {
        let sum = 0;
        for(let col=0; col<arr[row].length; col++)
        {
            sum += arr[row][col];
        }
        newarr.push(sum);
    }

    console.log(newarr);

}

rsa([[1,2,3],[4,5,6],[7,8,9]]);