// 子数组和排序后的区间和        
// https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums

// 连续子数组，用前n项和之差
// 题目告诉了，都是正整数 ， 那么可以桶排 。
// 这题不难，但是怎么感觉如此麻烦.
// 先求出前缀和。
// 然后遍历数组片段， 这个时候我就法线，前缀和，要从0开始才行。
// 因为都是整数，并且已经确定最大值，因此用桶排序。
// 上面遍历的时，就把数字入桶， 然后取出来。
// 最后再遍历，
// 注意结果取余

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 /* 连续子数组，用前n项和之差 
 题目告诉了，都是正整数 ， 那么可以桶排 。
 这题不难，但是怎么感觉如此麻烦，
 */
 var rangeSum = function(nums, n, left, right) {
  let sums = [0],sum = 0; 
  for( const n of nums){
      sum +=n ;
      sums.push(sum)
  }
  console.log(sums)
  /* 这个总和就是最高水位了 */
  const buckets  = new Array(sum +1).fill( 0)
  /* 双重循环是跑不掉的   前缀和之差永远取不到第一个，除非用0 占第一位*/
  for ( let i = 0;i< sums.length -1 ;i++){
      /* j - i 所以j至少比i大1  i不能取最后一个 */
      for( let j = i+1; j < sums.length; j++){
         let dfi  =sums[j] -sums[i]
      //    console.log(dfi)
          buckets[dfi]++
      }
  }
  // console.log( buckets)
  const arr = [] 
  for ( let i = 0;i< sum +1; i++ ){
      if( buckets[i]){
          while( buckets[i]-- > 0){
              arr.push( i)
          }
      }
  }
  // console.log( arr)
  let res =0 ; 
      for( let i = left-1; i< right ; i++){
          res +=arr[i]
      }
  
  return res % 1000000007 ;
};




