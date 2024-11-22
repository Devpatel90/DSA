let arr = [1,2,3,4,6]
let max = -Infinity
let sum  = 0;
for(let x=0; x<arr.length; x++){
   sum += arr[x];
   max = Math.max(sum,max)
   if(sum < 0){
     sum = 0
   }
}

console.log(max)