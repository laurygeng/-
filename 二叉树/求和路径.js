// https://leetcode-cn.com/problems/paths-with-sum-lcci/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
 var pathSum = function(root, sum) {
  if (root === null) {
      return 0
  }
  let result = 0 // 路径和为 sum 的路径数量
  let pathNum = 0 // 当前递归到的节点的路径和
  let pathArray = [] // 当前递归到的节点的路径数组
  var dfs = function (node) {
      pathNum = pathNum + node.val // 路径和 +1
      pathArray.push(node.val) // 记录路径数组
      if (pathNum === sum) { // 如果当前路径和等于sum，结果加1
          result++
      }
      // 继续判断当前路径上是否存在路径和等于sum的路径
      let nowPathNum = pathNum
      for (let i = 0; i < pathArray.length - 1; i++) { // 遍历判断当前路径上是否存在路径，使得路径和为 sum
          nowPathNum = nowPathNum - pathArray[i]
          if (nowPathNum === sum) { // 如果有相等的路径和，则结果 +1
              result++
          }
      }
      node.left && dfs(node.left) // 如果左节点不为空则继续递归左节点
      node.right && dfs(node.right) // 如果右节点不为空则继续递归右节点
      pathNum = pathNum - node.val // 尝试完毕该节点后还原路径和
      pathArray.pop() // 尝试完毕该节点后还原路径数组
  }
  dfs(root)
  return result
};

//前序递归，记录路径和路径数组，遍历当前路径，判断路径上是否存在满足路径和为 sum 的路径，存在则结果 +1,递归完毕当前节点后，记得把路径数组和路径和还原（回溯）。同：437. 路径总和 III

