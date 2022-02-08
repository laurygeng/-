// 动态规划
// 解题思路
// dp[i][j]表示从i到j数和
// i = j，dp[i][j] = nums[i]
// j > i，dp[i][j] = dp[i][j - 1] + nums[j]
// 降维：i相同时，dp只与上一状态有关
// i = j，dp = nums[i]
// j > i，dp = dp + nums[j]
// dp在区间[lower, upper]内，n++，返回n

var countRangeSum = function(nums, lower, upper, dp = 0, n = 0) {
  for (var i = 0; i < nums.length; i++)
      for (var j = i; j < nums.length; j++) {
          dp = j === i ? nums[i] : dp + nums[j]
          if (dp >= lower && dp <= upper) n++
      }
  return n
};

// 归并排序
// 解题思路
// 第一步：将nums转为前缀和数组，即[0, nums[0], nums[0] + nums[1]...]
// 第二步：归并排序，递归二分切数组，切到不可切，返回0
// 第三步：递归回溯，每次得到两个升序数组
// 固定一个数组的索引i，找另一个数组前缀和差在区间[lower, upper]的索引
// 指针p1向右，找前缀和差>=lower第一个索引
// 指针p2从p1位置起向右，找前缀和差>upper第一个索引
// f = 1第一次调用d函数，回溯到f = 1时，返回结果。归并排序最后一次不合并

var countRangeSum = function(nums, lower, upper) {
  var d = (l, r, f) => {
      if (l === r) return 0
      var m = l + r >>> 1, res = d(l, m) + d(m + 1, r), i = l, p1 = m + 1, p2, a
      while (i <= m) {
          while(p1 <= r && sums[p1] - sums[i] <  lower) p1++
          p2 = p1
          while(p2 <= r && sums[p2] - sums[i] <= upper) p2++
          res += p2 - p1, i++
      }
      if (f === 1) return res
      i = 0, p1 = l, p2 = m + 1, a = []
      while(p1 <= m || p2 <= r) 
          a[i++] = p2 > r || p1 <= m && sums[p1] < sums[p2] ? sums[p1++] : sums[p2++]
      for(i = 0; i < a.length; i++) sums[l + i] = a[i]
      return res
  }, sums = [0]
  for(var i = 1; i <= nums.length; i++) sums[i] = sums[i - 1] + nums[i - 1]
  return d(0, sums.length - 1, 1)
};
