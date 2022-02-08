/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
//  https://leetcode-cn.com/problems/unique-binary-search-trees-ii

 var generateTrees = function(n) {
  let a = []; // [1,2,3,4] 
  for (let i=1; i<=n; i++) {
      a.push(i); // a记录了从1到n的数组。
  }
  function build(l = 0, r = a.length-1) { 
      // 因为a是一个递增数组，使用任何一个节点作为根节点，其左侧元素一定小于它本身，右侧一定大于它本身，因此都可以构造一个二叉搜索树。
      // 使用l,r记录当前构造树的左右边界[l,r]
      if (l > r) return [null]; // 
      if (l === r) return [new TreeNode(a[l])];
      let res = [];
      for (let m = l; m <= r; m++) { // 对每个区间内的元素，选取其作为根节点m，构造二叉搜索树。
          let left = build(l, m-1);
          let right = build(m+1, r);
          for (let lf of left) {
              for (let rt of right) {
                  let root = new TreeNode(a[m], lf, rt); // 需要遍历左右两侧构造树的数组，并记录在当前结果中。
                  res.push(root);
              }
          }
      }
      return res;
  }
  return build();
};

