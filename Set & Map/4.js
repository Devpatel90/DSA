function a1(arr1,arr2)
{
   
    let myset = new Set();
    let newarr = [];

   for(let value of arr1)
   {
       if(myset.has(value)==false)
       {
        myset.add(value);
       }
   }

   for(let value of arr2)
    {
        if(myset.has(value))
        {
        //  myset.add(value);
        newarr.push(value)
        }
    }

     console.log(newarr);
     
}
a1([1,2,3,4],[3,4,5,6]);