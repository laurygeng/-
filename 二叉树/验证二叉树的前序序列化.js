// https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree

var isValidSerialization = function(preorder) {
  const n = preorder.length;
  let i = 0;
  let slots = 1;
  while (i < n) {
      if (slots === 0) {
          return false;
      }
      if (preorder[i] === ',') {
          ++i;
      } else if (preorder[i] === '#') {
          --slots;
          ++i;
      } else {
          // 读一个数字
          while (i < n && preorder[i] !== ',') {
              ++i;
          }
          ++slots; // slots = slots - 1 + 2
      }
  }
  return slots === 0;
};

// 方法二：计数
// 能否将方法一的空间复杂度优化至 O(1)O(1) 呢？
// 回顾方法一的逻辑，如果把栈中元素看成一个整体，即所有剩余槽位的数量，也能维护槽位的变化。
// 因此，我们可以只维护一个计数器，代表栈中所有元素之和，其余的操作逻辑均可以保持不变。

// 时间复杂度：O(n)O(n)，其中 nn 为字符串的长度。我们每个字符只遍历一次，同时每个字符对应的操作都是常数时间的。
// 空间复杂度：O(1)O(1)。