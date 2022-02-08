// https://leetcode-cn.com/problems/longest-univalue-path/
// 递归
const longestUnivaluePath = (root) => {
  let res = 0

  const dfs = (root) => {
      if (root == null) {
          return 0
      }
      const left = dfs(root.left)
      const right = dfs(root.right)

      let leftPath = 0, rightPath = 0

      if (root.left && root.left.val == root.val) {
          leftPath = left + 1
      }
      if (root.right && root.right.val == root.val) {
          rightPath = right + 1
      }
      res = Math.max(res, leftPath + rightPath)

      return Math.max(rightPath, leftPath)
  }

  dfs(root)
  return res
}
