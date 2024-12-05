function union(arr1,arr2)
{
   
    let myset = new Set();

   for(let value of arr1)
   {
       if(myset.has(value) == false)
       {
        myset.add(value);
       }
   }

   for(let value of arr2)
    {
        if(myset.has(value) == false)
        {
         myset.add(value);
        }
    }

     console.log(myset);
     
}
union([1,2,3],[3,4,5]);