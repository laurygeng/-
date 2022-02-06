// 数组的相对排序        
// https://leetcode-cn.com/problems/relative-sort-array/

function relativeSortArray(arr1, arr2) {
  const map = new Map()
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i)
  }
  arr1.sort((pre, next) => {
    if (map.has(pre)) {
      return map.has(next) ? map.get(pre) - map.get(next) : -1
    }
    return map.has(next) ? 1 : pre - next
  })
  return arr1
}
