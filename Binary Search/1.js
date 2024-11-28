let arr=[4,7,13,17,25,30]
let target=13;
let low=0;
let high=arr.length-1;

while(low <= high){
    let mid=Math.floor((low+high)/2)
    if(arr[mid] == target)
    {
        console.log(mid);
        break;
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