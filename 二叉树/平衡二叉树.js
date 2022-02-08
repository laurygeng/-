// https://leetcode-cn.com/problems/balanced-binary-tree/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (root) {
  // 记录二叉树是否平衡
  let flag = true;
  const maxDepth = (root) => {
    if (root == null) return 0;
    let leftMaxDepth = maxDepth(root.left);
    let rightMaxDepth = maxDepth(root.right);
    // 如果左右最大深度大于 1，就不是平衡二叉树
    if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
      flag = false;
    }
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
  };
  maxDepth(root);
  return flag;
};

