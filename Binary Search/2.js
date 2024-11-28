let arr=[4,9,16,16,25,30,25]
let target=25;
let low=0;
let high=arr.length-1;

let ans= -1
while(low <= high){
    let mid=Math.floor((low+high)/2)
    if(arr[mid] == target)
    {
        ans=mid
        high=mid-1
    }

    if(arr[mid] < target)
    {
        low = mid + 1
    }
    if(arr[mid] > target)
    {
        high = mid - 1
    }
}

console.log("FIrst Occurence of Target:- 25 is:- "+ans);

