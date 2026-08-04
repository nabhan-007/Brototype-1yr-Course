// 1480. Running Sum of 1d Array

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

// var runningSum = function (nums) {
//   var total = 0;
//   return nums.reduce((acc, x) => {
//     total += x;
//     acc.push(total);
//     return acc;
//   }, []);
// };

// var arr = [1, 2, 3, 4];
// console.log(runningSum(arr));
