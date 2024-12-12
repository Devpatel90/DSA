let arr = [1,2,3,4,5,6]
let target  = 9;

function sum(a,t)
{
    let left = 0;
   let right = arr.length-1;
   let ans = 'false';

   while(left<=right)
   {
    let sum = arr[left] + arr[right];
   

    if(sum==target)
    {
      ans = `true (${arr[left]},${arr[right]})`
      break;
      
    }

    if(sum < target)
    {
        left++ ;
    }
    else{
        right--;
    }
   }
   console.log(ans);
   
}

sum(arr,target);