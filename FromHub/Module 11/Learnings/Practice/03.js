// Check whether an array is pallindrome or not.
const myArr = [1, 2, 2, 1];

const isPalindrome = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left != arr.length) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome(myArr));
