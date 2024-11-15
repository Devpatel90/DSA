let arr=[1,23,45,78,99]

 for(let x=0;x<=arr.length-2;x++)
 {
   let min = x;

     for(let i=x+1;i<arr.length;i++)
     {
        if(arr[i] < arr[min])
        {
              min=i;
        }
     }
 }

 console.log(arr);