// 计算右侧小于当前元素的个数        
// https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self
// 降序归并排序+记录上次合并的数字的索引
// 对原数组进行降序的归并排序处理时，由于左右区间已经时降序序列，
// 记录左右区间对比元素下标为 p1,p2,末尾位置为 mid,r,t为p1在原数组中的位置，则
// 当左区间数字大于右区间数字时，由于右区间为降序，所以后面的p2~r位置的数字都小于t位置的数字
// res存放的是 每个位置对应的数字 右侧小于它的元素个数
// 而，由于排序过程元素位置发生变动，所以需要保存在每次合并后的 每个元素的位置信息tmp，
// 在下一次合并时，使用合并后的索引(此时已经不是在原数组中的位置)去tmp中找到真是的位置，然后对res进行更新即可

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function (nums) {
  function merge_sort(arr, l, r) {
      if (l == r) return
      let mid = l + r >> 1
      merge_sort(arr, l, mid)
      merge_sort(arr, mid + 1, r)
      let p1 = l, p2 = mid + 1, k = l
      while (p1 <= mid || p2 <= r) {
          // 进行降序排序
          if (p2 > r || p1 <= mid && arr[p1] > arr[p2]) {
              tmp[k] = arr[p1]
              // 左区间数字大于右区间数字时，由于右区间为降序，所以后面的p2~r位置的数字都小于t位置的数字
              // 获取到数字在原始数组中的下标
              let t = index[p1++]
              // 更新合并后数字的下标
              tmpIndex[k] = t
              // 更新数字 当前右侧小于它的元素个数
              res[t] += r - p2 + 1
          } else {
              tmp[k] = arr[p2]
              tmpIndex[k] = index[p2++]
          }
          k++
      }
      for (let i = l; i <= r; i++) {
          index[i] = tmpIndex[i]
          arr[i] = tmp[i]
      }
  }
  let index = Array(nums.length).fill().map((_, ind) => ind) // 记录本地合并后数字的位置
  let tmpIndex = Array(nums.length).fill(0)  // 记录上次合并后数字的位置
  // 使用需要原数组相同长度的存储空间来存放排序好的序列
  let tmp = Array(nums.length).fill(0) 
  let res = Array(nums.length).fill(0) // 结果数组
  merge_sort(nums, 0, nums.length - 1)
  return res
};
