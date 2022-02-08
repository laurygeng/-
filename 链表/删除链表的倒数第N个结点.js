// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if(!n){
      return head
  }
  let cur = head;
  let temp = head;
  let pre = head;

  while(n){
      temp = temp.next;
      n--
  }

  if(!temp){
      head = head.next
      return head
  }

  while(temp){
      pre = cur;
      cur = cur.next;
      temp = temp.next;
  }

  pre.next = cur.next
  
  return head
};
