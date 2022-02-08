// https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees

// 解题思路：
// 题目内容很短，有两个二叉搜索树，需要把它们里面的所有值放进一个数组中，并且结果是要保持顺序递增的。
// 读完之后第一反应，这题还真是直白呀，没包装个什么描述性的说法，搞的我都不好写文章了，哼 >.<
// 关于什么是二叉搜索树，这个大家可以自行搜索，当然我之后也会写文章介绍常见的数据结构，一不小心给自己开了个新坑。
// 对于这道题目的要求，我们可以遍历这两个二叉搜索树，得到所有的值放进新数组中，然后再进行排序。当然，既然是非常科班的题目，自然有很套路的应对方式。毕竟一涉及到基于比较的排序，那复杂度就直接上 O(nlogn)O(nlogn) 了。
// 直接方案：
// 我们想要得到符合递增顺序的二叉搜索树内的所有值，直接进行中序遍历即可，需要的时间复杂度是 O(n)O(n)。关于什么是中序遍历，同样我会在新坑里面提到。这里先不做过多展开。
// 然后对于两个有序数组进行合并，我们可以这样做：
// 取得两个数组中各自的最小值，即第一个值
// 把它们进行比较，得到的小值一定是当前所有剩余的未合并元素中的最小值
// 把这个小值从数组开头剔除掉，放进最终的结果的末端
// 重复回到步骤 1，直到有一个数组空了
// 把剩下的那个数组中的值直接添加进结果的末端
// 这样我们只需要 O(n)O(n) 的时间复杂度即可完成合并了。
// 当然在实际代码中，我们还可以做一些优化，例如并不把数组开头的值剔除掉，而是使用一个索引标识当前访问的位置。因为对于数组这样的线性表，我们剃掉第一值也就意味着后续所有值的前移，代价还是很大的。

const traversal = (node, arr = []) => {
  if (node) {
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
  }
  return arr;
};
const merge = (arr1, arr2) => {
  const ret = [];
  let idx1 = idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    arr1[idx1] < arr2[idx2] ? ret.push(arr1[idx1++]) : ret.push(arr2[idx2++]);
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  while (idx2 < arr2.length) ret.push(arr2[idx2++]);
  return ret;
};
const getAllElements = (root1, root2) => merge(traversal(root1), traversal(root2));

