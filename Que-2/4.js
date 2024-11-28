function transposearray(arr)
{

    let newarr = [];

    for(let row=0; row<arr.length; row++)
    {
        let main = [];
        for(let col=0; col<arr.length; col++)
        {
            main.push(arr[col][row]);
        }
        newarr.push(main);
    }

    console.log(newarr);

}

transposearray([[1,2,3],[4,5,6],[7,8,9]]);