function rae()
{
    let newArray = [];
    let size = 3;

    for(let row=0; row<size; row++)
    {
        let main = [];
        for(let col=0; col<size; col++)
        {
            main.push(Math.round(Math.random() * 100));
        }

        newArray.push(main);
    }

    console.log(newArray);

}

rae();