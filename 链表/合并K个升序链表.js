// https://leetcode-cn.com/problems/merge-k-sorted-lists/
// 解题思路：
// 利用哈希表先将相同val的节点连起来，再对连接后的链表排序，从小到大将不同val链表连起来，返回最小val链表的头结点即可。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  let map = new Map()
  lists.forEach(head => {
      while(head){
          if(map.has(head.val)){
              let temp = map.get(head.val)
              temp[1].next = head
              temp[1] = temp[1].next
              head = head.next
          }else{
              map.set(head.val, [head, head])
              head = head.next
          }
      }
  })
  let newLists = [...map]
  if(!newLists.length) return null
  newLists.sort((a , b) => a[0] - b[0])
  newLists.reduce((a, b) => {
      a[1][1].next = b[1][0]
      return b
  })
  return newLists[0][1][0]
};
