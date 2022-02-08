// 最长连续序列        
// https://leetcode-cn.com/problems/longest-consecutive-sequence
// 哈希表
// 将数组元素存入 set 中
// 遍历nums，如果 当前项 - 1 存在于 set ，说明当前项不是连续序列的起点，忽略，继续遍历
// 如果当前项没有“左邻居”，它就是连续序列的起点，循环查看当前项连续的右邻居有多少个
// 返回最长的连续次数

 var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (let a of nums) {
    //没有左邻居，是序列的起点
    if (!set.has(a - 1)) {
      let count = 1;
      let cur = a;
      //有右邻居，看连续的右邻居有多少个
      while (set.has(cur + 1)) {
        cur++;
        count++;
      }
      // 存放最大的连续邻居的值
      max = Math.max(max, count);
    }
  }
  return max;
};
