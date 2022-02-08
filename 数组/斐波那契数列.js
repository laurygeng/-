// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof

//动态规划
// 时间复杂度：O(n)O(n)
// 空间复杂度：O(1)O(1)

var fib = function(n) {
  const MOD = 1000000007;
  if (n < 2) {
      return n;
  }
  let p = 0, q = 0, r = 1;
  for (let i = 2; i <= n; ++i) {
      p = q; 
      q = r; 
      r = (p + q) % MOD;
  }
  return r;
};

