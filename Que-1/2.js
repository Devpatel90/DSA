let s = "hello";
let str=s.split("")
function rev() {
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    }
  
    return str.join("");
  }

  console.log(rev());