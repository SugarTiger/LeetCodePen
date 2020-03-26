/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let n = nums.length;
  let bucket = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    let cell = nums[i];
    if (cell <= n) {
      bucket[cell]++;
    }
  }
  for (let i = 1; i < bucket.length; i++) {
    if (bucket[i] === 0) return i;
  }
  return n + 1;
};
firstMissingPositive([4, 6, 7, 8, 9]);
firstMissingPositive([1, 0, -1, 2]);
// @lc code=end
