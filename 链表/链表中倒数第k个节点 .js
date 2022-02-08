// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
//顺序查找
var getKthFromEnd = function(head, k) {
  let node = head, n = 0;
  while (node) {
      node = node.next;
      n++;
  }
  node = head;
  for (let i = 0; i < n - k; i++) {
      node = node.next;
  }
  return node; 
};
//双指针
var getKthFromEnd = function(head, k) {
  let fast = head, slow = head;
  
  while (fast && k > 0) {
      [fast, k] = [fast.next, k - 1];
  }
  while (fast) {
      [fast, slow] = [fast.next, slow.next];
  }
  return slow;
};
