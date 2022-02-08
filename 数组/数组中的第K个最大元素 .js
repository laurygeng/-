// 数组中的第K个最大元素       
// https://leetcode-cn.com/problems/kth-largest-element-in-an-array

// 快排，分区，partition
// 其实没有必要全部排序，可以利用快速排序的 partition 操作，找到第 K 个最大元素。
// 每进行一次快速排序的 partition 操作，就能找到这次我们选中的基准值排序之后的正确位置。
// 如果它的位置刚好是排序之后第 K 个最大元素的位置，即 len - k，我们直接得到了答案；
// 因为进行 partition 操作之后，位于基准值之前的元素都要小于基准值，位于基准值之后的元素都要大于等于基准值。
// 如果它的位置小于排序之后第 K 个最大元素的位置，我们就去它之后寻找第 K 个最大元素；
// 如果它的位置大于排序之后第 K 个最大元素的位置，我们就去它之前寻找第 K 个最大元素；

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function (nums, k) {
  const len = nums.length;
  const targetIndex = len - k;
  let left = 0,
  right = len - 1;
  while (left < right) {
    const index = partition(nums, left, right);
    if (index === targetIndex) {
      return nums[index];
    } else if (index < targetIndex) {
      left = index + 1;
    } else {
      right = index - 1;
    }
  }
  return nums[left];
};

function partition(nums, start, end) {
  const povit = nums[start];
  while (start < end) {
    while (start < end && nums[end] >= povit) {
      end--;
    }
    nums[start] = nums[end];
    while (start < end && nums[start] < povit) {
      start++;
    }
    nums[end] = nums[start];
  }
  nums[start] = povit;
  return start;
}


