// 排序数组        
// https://leetcode-cn.com/problems/sort-an-array


// https://leetcode-cn.com/problems/sort-an-array/solution/dong-hua-mo-ni-yi-ge-kuai-su-pai-xu-wo-x-7n7g/
//十大排序算法，包含计数，快速、冒泡、桶排，堆排、归并，希尔、插入、选择

// 计数排序，性能好
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
  let max=-1,min=-1
  let count=0
  let dp =[];
  max=Math.max(...nums)
  min=Math.min(...nums)
  let ans=new Array(max-min+1)
  for(var i=0;i<=max-min+1;i++){
      ans[i]=0
  }
  for(let d of nums){
      ans[d-min]++
  }
  for(var k = 0; k <= max-min+1; k++){
      while(ans[k]-- > 0){
          dp.push(k+min);
      }
  }
  return dp
};
//快排
var sortArray = function(nums) {
  quicksort(nums, 0, nums.length - 1)// 调用快排方法
  return nums
};
var quicksort = function(nums, low, high) {
  if(low < high) {
      let index = partition(nums, low, high)// 得到用来将数组分成两部分（左面全小于index 右面全大于index）的索引
      quicksort(nums, low, index - 1)// 以第一轮得出的index为基准划分出左半区和右半区 对数组的左半区进行递归 将其全部变为有序
      quicksort(nums, index + 1, high)// 同理左半区
  }
}
var partition = function(arr, low, high) {
  let pivot = arr[low]// 选定第一个元素为基准值 把它拿出来 即为“挖坑”
  while(low < high) {
      // 【1】 挖了坑就需要填坑~从high指针开始向左找 
      while(low < high && arr[high] >= pivot) {
          high--
      }
      arr[low] = arr[high]// 一旦找到比坑对应值pivot小的 就扔到low那侧的坑里
      // 【2】 同【1】从low指针开始向右找填坑值
      while(low < high && arr[low] < pivot) {
          low++
      }
      arr[high] = arr[low]// 一旦找到比坑对应值pivot大的 就扔到high那侧的坑里
      //（刚刚这侧有一个值去填low那侧的坑了 所以出现了一个坑位~）
  }
  // 经过上面【1】【2】的不断迭代 low===high 此时这个位置即为基准位置
  arr[low] = pivot
  return low// 分区成功！返回定海神针~（此时low=high哦~）
}

//冒泡
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
  let temp = null, lastIndex = nums.length - 1
  for(let i = 0; i < nums.length; i++) {
      let rowFlag = true, lastM = 0
      for(let j = 0; j < lastIndex; j++) {
          if(nums[j] > nums[j+1]) {
              temp = nums[j]
              nums[j] = nums[j+1]
              nums[j + 1] = temp
              rowFlag= false
              lastM = j
          }
      }
      if(rowFlag) {
          break
      } else {
          lastIndex = lastM
      }
  }
  return nums
};

//桶排序
// 时间复杂度： O(N+R)         144ms        58.7%
// 空间复杂度： O(N+R)         48MB         23.91%
const sortArray = nums => {
  const each = 100    // 每个桶的范围
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  for (const num of nums) {
    num < min && (min = num)
    num > max && (max = num)
  }
  const count = max - min + 1
  const bucketCount = count % each === 0 ? count / each : Math.floor(count / each) + 1

  const buckets = new Array(bucketCount)
  for (const num of nums) {
    const cur = Math.floor((num - min) / each)
    if (!buckets[cur]) buckets[cur] = []
    buckets[cur].push(num)
  }

  let index = 0
  for (const bucket of buckets) {
    if (!bucket) continue
    // 对每个桶内的元素排序，直接使用 sort
    bucket.sort((pre, next) => pre - next)
    for (const num of bucket) {
      nums[index++] = num
    }
  }
  return nums
}

// 堆排序
// 时间复杂度：O(NlogN)      148 ms     52.5%
// 空间复杂度：O(logN)       45.1 MB    45%
const sortArray = nums => {
  heapify(nums)
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, i, 0)
    rebuildHeap(nums, 0, i - 1)
  }

  // 数组转成最大堆
  function heapify(nums) {
    for (let i = 1; i < nums.length; i++) {
      let parent = (i - 1) >> 1
      let child = i
      while (child > 0 && nums[child] > nums[parent]) {
        swap(nums, parent, child)
        child = parent
        parent = (parent - 1) >> 1
      }
    }
  }

  function rebuildHeap(nums, parent, last) {
    const left = 2 * parent + 1
    const right = 2 * parent + 2
    let maxIndex = left
    if (right <= last && nums[right] > nums[left]) {
      maxIndex = right
    }

    if (maxIndex <= last && nums[maxIndex] > nums[parent]) {
      swap(nums, maxIndex, parent)
      rebuildHeap(nums, maxIndex, last)
    }
  }
  return nums
}

//归并排序
// 时间复杂度：O(NlogN)     144ms      53.13%
// 空间复杂度：O(N)         49.4MB     18.75%
const sortArray = (nums, left = 0, right = nums.length - 1) => {
  if (left >= right) return nums
  const mid = (left + right) >> 1

  sortArray(nums, left, mid)
  sortArray(nums, mid + 1, right)

  let i = left
  let j = mid + 1
  let index = 0
  const arr = new Array(right - left + 1)

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) arr[index++] = nums[i++]
    else arr[index++] = nums[j++]
  }

  while (i <= mid) arr[index++] = nums[i++]
  while (j <= right) arr[index++] = nums[j++]
  for (let k = 0; k < arr.length; k++) {
    nums[left + k] = arr[k]
  }
  return nums
}

//希尔排序
// 时间复杂度：O(N^(4/3))    120ms      92.50%
// 空间复杂度：O(1)          44.6MB     60%
const sortArray = nums => {
  const n = nums.length
  let gap = n >> 1
  while (gap > 0) {
    for (let i = 0; i < gap; i++) {
      for (let j = i + gap; j < n; j += gap) {
          let temp = j
          while (temp > i && nums[temp] < nums[temp - gap]) {
              swap(nums, temp, temp - gap)
              temp -= gap
          }
      }
    }
    gap >>= 1
  }
  return nums
}

//插入排序
// 时间复杂度：O(N^2)      1900ms      12.50%
// 空间复杂度：O(1)        44.6MB      68.75%
const sortArray = nums => {
  for (let i = 1; i < nums.length; i++) {
    let j = i
    while (j > 0 && nums[j] < nums[j - 1]) {
      swap(nums, j, j - 1)
      j--
    }
  }
  return nums
}

//选择排序
// 时间复杂度：O(N^2)   1372ms      12.50%
// 空间复杂度：O(1)     44.2MB      93.75%
const sortArray = nums => {
  const n = nums.length
  for (let i = n - 1; i > 0; i--) {
    let maxIndex = 0
    for (let j = 0; j <= i; j++) {
      if (nums[j] > nums[maxIndex]) maxIndex = j
    }
    swap(nums, i, maxIndex)
  }
  return nums
}
