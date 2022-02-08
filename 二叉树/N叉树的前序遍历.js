// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/

// 二叉树中前序遍历就是先遍历当前节点，再遍历此节点的左右子节点
// 多叉树中唯一的区别就是不只左右二个子节点，会有多个子节点
// 循环遍历多个子节点，再递归调用就OK了

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function (root) {
  let res = [];
  const dfs = (root) => {
    if (root == null) return;
    res.push(root.val);
    for (let node of root.children) {
      dfs(node);
    }
  };
  dfs(root);
  return res;
};

