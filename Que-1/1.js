let arr = [1,2,3,4,6];
let target = 6;

function add() {
  let left=0;
  let right=arr.length-1;
  while(left <= right){
    let sum=arr[left]+arr[right]
    if(sum == target)
    {
        return [left,right]
    }
    else if(sum > target){
        right--
    }
    else if(sum < target){
        left++
    }
  }
}
  
  console.log(add());