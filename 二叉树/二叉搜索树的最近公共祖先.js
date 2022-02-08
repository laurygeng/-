// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (p.val > q.val) {
    // 保证 p.val <= q.val，便于后续情况讨论
    return lowestCommonAncestor(root, q, p);
  }
  if (root.val >= p.val && root.val <= q.val) {
    // p <= root <= q，也就是说 p 和 q 分别在 root 的左右子树，那么 root 就是 LCA
    return root;
  }
  if (root.val > q.val) {
    // p 和 q 都在 root 的左子树，那么 LCA 在左子树\
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < p.val) {
    // p 和 q 都在 root 的右子树，那么 LCA 在右子树
    return lowestCommonAncestor(root.right, p, q);
  }
};
