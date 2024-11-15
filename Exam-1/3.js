let arr=[1,23,45,78,99]
let any=[];
let flag=true;

   for(let i=0; i<arr.length; i++)
   {
    any[i]=arr[i];
   }

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

     let temp=arr[min];
     arr[min]=arr[x];
     arr[x]=temp;

     for(let i=0; i<arr.length; i++)
      {
         if(arr[i]!=any[i])
         {
           flag=false;
           break;
         }
      }
 }

 console.log(flag);