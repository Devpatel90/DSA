function call(n)
{
    if(n.length == 0)
    {
        return 0;
    }

    function inner(i)
    {
        if(i == n.length-1)
        {
            return n[i];
        }
        return n[i] + inner(i+1);
    }

    console.log(inner(0));

}

call([3,6,4]);