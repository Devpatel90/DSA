let arr = [-7, -3, 2, 3, 11];
function sortedSquares(arr) {
    let result = new Array(arr.length);
    let left = 0;
    let right = arr.length - 1;
    let pos = arr.length - 1;

    while (left <= right) {
        let ls = arr[left] * arr[left];
        let rs = arr[right] * arr[right];

        if (ls > rs) {
            result[pos] = ls;
            left++;
        } else {
            result[pos] = rs;
            right--;
        }

        pos--;
    }

    return result;
}

console.log(sortedSquares(arr)); // Output: [4, 9, 9, 49, 121]
