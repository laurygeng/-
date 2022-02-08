// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
// 递归的方式非常容易，只需要按照左右根的顺序去递归就行了
// 在左右子树都遍历的情况下才把根节点放到结果集中
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function (root) {
  /* 定义：输入一个节点，返回以该节点为根的二叉树的后序遍历结果 */
  let res = [];
  if (root == null) return res;
  // 后序遍历结果特点：先是左子树，然后是右子树，最后是根节点的值
  res.push(...postorderTraversal(root.left));
  res.push(...postorderTraversal(root.right));
  res.push(root.val);
  return res;
};
