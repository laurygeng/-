// 调整数组顺序使奇数位于偶数前面        
// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof

//双指针解法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  let l = 0, r = nums.length-1;
  while(l < r){
      if(nums[l] % 2 === 0 && nums[r] % 2 !== 0){
          swap(l, r);
          l++;
          r--;
          continue;
      }
      if(nums[l] % 2 !== 0) l++;
      if(nums[r] % 2 === 0) r--;
  }
  return nums;
  function swap(i, j){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  }
};

