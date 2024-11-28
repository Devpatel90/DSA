function diagonalarray(arr)
{

    let newArray = [];

    for(let row=0; row<arr.length; row++)
    {
        let main = [];
        for(let col=0; col<arr.length; col++)
        {
            if(row == col)
            {
                main.push(0);
            }
            else
            {
                main.push(arr[row][col]);
            }
        }
        newArray.push(main);
    }

    console.log(newArray);

}

diagonalarray([[5,1,2,3],[4,6,7,8],[9,10,11,12],[13,14,15,16]]);