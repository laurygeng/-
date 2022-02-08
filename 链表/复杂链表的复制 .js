//  使用map，空间复杂度O(n)
// 时间复杂度O(n),空间复杂度O(n)
// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
var copyRandomList = function(head) {
  if(!head) return head;
  let node = head;
  let map = new Map();

  // 复制节点，将新节点放入map中
  while(node){
      map.set(node, new Node(node.val));
      node = node.next;
  }
  node = head;

  //对map里的新节点进行遍历操作
  while(node){
      map.get(node).next = map.get(node.next) === undefined ? null : map.get(node.next);
      map.get(node).random = map.get(node.random);
      node = node.next;
  }
  return map.get(head);
};
