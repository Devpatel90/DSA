let arr = [4, 5, 2, 25]
let any1 = new Array(arr.length).fill(-1);
let stack = [];


for(let i=0; i<arr.length; i++)
{
    while(stack.length > 0 && arr[stack[stack.length-1]] < arr[i])
    {
        let a=stack.pop();
        any1[a]=arr[i];
    }
    stack.push(i)
}
console.log(any1);