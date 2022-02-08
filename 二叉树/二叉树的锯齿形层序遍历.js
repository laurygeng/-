// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal


var zigzagLevelOrder = function(root) {
  if (!root) {
      return [];
  }

  const ans = [];
  const nodeQueue = [root];

  let isOrderLeft = true;

  while (nodeQueue.length) {
      let levelList = [];
      const size = nodeQueue.length;
      for (let i = 0; i < size; ++i) {
          const node = nodeQueue.shift();
          if (isOrderLeft) {
              levelList.push(node.val);
          } else {
              levelList.unshift(node.val);
          }
          if (node.left !== null) {
              nodeQueue.push(node.left);
          }
          if (node.right !== null) {
              nodeQueue.push(node.right);
          }
      }            
      ans.push(levelList);
      isOrderLeft = !isOrderLeft;
  }

  return ans;
};

// 时间复杂度：O(N)O(N)，其中 NN 为二叉树的节点数。每个节点会且仅会被遍历一次。
// 空间复杂度：O(N)O(N)。我们需要维护存储节点的队列和存储节点值的双端队列，空间复杂度为 O(N)O(N)。


