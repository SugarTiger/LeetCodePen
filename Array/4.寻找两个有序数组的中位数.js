/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2,nums1)
  }
  let newNums = nums2.concat(nums1);
  let i = nums2.length - 1;
  let len = newNums.length;
  // 排序
  newNums = insertSort(newNums, i);
  if (len % 2 === 0) {
    return (newNums[len / 2] + newNums[len / 2 - 1]) / 2;
  } else {
    return newNums[Math.floor(len / 2)];
  }
};
// 插入排序
var insertSort = function(nums, i) {
  var len = nums.length;
  for (; i < len; i++) {
    let tempI = i;
    let j = i - 1;
    while (j >= 0) {
      if (nums[j] > nums[tempI]) {
        var item = nums[tempI];
        nums[tempI] = nums[j];
        nums[j] = item;
        tempI--;
      }
      j--;
    }
  }
  return nums;
};
