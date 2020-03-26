/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i=-1,len = nums.length,result=0;
    while (++i<len) {
      if(nums[i]!==val){
        nums[result] = nums[i];
        result++;
      }
    }
    return result;
};

