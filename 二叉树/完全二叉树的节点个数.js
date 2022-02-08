// https://leetcode-cn.com/problems/count-complete-tree-nodes

var countNodes = function (root) {
  let h = 0;
  // 计算树的高度
  while (root) {
    root = root.left;
    h++;
  }
  // 节点总数就是 2^h - 1
  return Math.pow(2, h) - 1;
};


/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countNodes = function (root) {
  // 记录左、右子树的高度
  let hl = 0,
    hr = 0;
  let l = root,
    r = root;
  // 计算左子树高
  while (l) {
    l = l.left;
    hl++;
  }
  // 计算右子树高
  while (r) {
    r = r.right;
    hr++;
  }
  // 如果左右子树的高度相同，则是一棵满二叉树
  if (hl == hr) {
    return Math.pow(2, hl) - 1;
  }
  // 如果左右高度不同，则按照普通二叉树的逻辑计算，两个递归只有一个会真的递归下去，另一个一定会触发hl == hr而立即返回，不会递归下去
  return 1 + countNodes(root.left) + countNodes(root.right);
};

