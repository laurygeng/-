// 解法1-优先队列
// 使用最小优先队列 MinPriorityQueue 存储 nums1 中所有元素下标与 nums2 的 0 下标构成的数对
// 然后取队头下标数对进行遍历，遍历时以 nums2 的下标步进
// 若队头下标数对所对应元素之和比当前数对之和更小则将当前下标入队并中断遍历，反之将当前数对推入结果数组 res
// 重复前两步遍历直至结束

var kSmallestPairs = function (nums1, nums2, k) {
  const res = [];
  const pq = new MinPriorityQueue({ compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) });

  for (let i = 0; i < nums1.length; i++) pq.enqueue([i, 0]);

  while (res.length < k && pq.size()) {
      let [i, j] = pq.dequeue();

      for (; res.length < k && j < nums2.length; j++) {
          // 队头的数对和更小
          const [i1, j1] = pq.front() || [];
          if (pq.size() && nums1[i1] + nums2[j1] < nums1[i] + nums2[j]) {
              pq.enqueue([i, j]);
              break;
          }

          // 队头的数对和相等或更大
          res.push([nums1[i], nums2[j]]);
      }
  }

  return res;
};
//优化
// 问题1：因为是求 TopK，所以优先队列没必要存储超过 k 个元素，这是导致时间空间过高的主要原因
// 问题2：既然是求 TopK，队列初始时已加入 k 个元素，后续只要在队列中排序和轮替所有数据即可；而上述逻辑是一边遍历一边与队头元素比较，虽然不影响时间和空间，但是代码和逻辑都更复杂
// 优化1：优先队列添加初始数据时，只需要加入 Math.min(k, nums1.length) 个元素即可
// 优化2：while 循环那段代码的逻辑改成：每次取队头下标对应的数对推入结果数组 res，并且将下一对未入队的下标 [i, j + 1] 加入队列中

var kSmallestPairs = function (nums1, nums2, k) {
  const res = [];
  const pq = new MinPriorityQueue({ compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) });

  for (let i = 0; i < Math.min(k, nums1.length); i++) pq.enqueue([i, 0]);

  while (res.length < k && pq.size()) {
      const [i, j] = pq.dequeue();
      if (j + 1 < nums2.length) pq.enqueue([i, j + 1]);
      res.push([nums1[i], nums2[j]]);
  }

  return res;
};




