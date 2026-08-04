// 1920. Build array from Permutation

var buildArray = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
};

let arr = [5, 0, 1, 2, 3, 4];
console.log(buildArray(arr));
