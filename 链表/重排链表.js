// https://leetcode-cn.com/problems/reorder-list

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
 function reorderList(head) {
  const arr = [];

  while(head){
      const temp = head.next;
      head.next = null;
      arr.push(head);
      head = temp;
  }

  let cur = arr.shift(), i = 0;
  while(arr.length){
      cur.next = i++ % 2 === 0 ? arr.pop() : arr.shift();
      cur = cur.next;
  }

};
