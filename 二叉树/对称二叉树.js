// https://leetcode-cn.com/problems/symmetric-tree/

var isSymmetric = function(root) {
  return check(root, root)
};
const check = (leftPtr, rightPtr) => {
  // 如果只有根节点，返回true
  if (!leftPtr && !rightPtr) return true
  // 如果左右节点只存在一个，则返回false
  if (!leftPtr || !rightPtr) return false
  return leftPtr.val === rightPtr.val && check(leftPtr.left, rightPtr.right) && check(leftPtr.right, rightPtr.left)
}
