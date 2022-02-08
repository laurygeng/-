

 var largestNumber = function(nums) {
  let maxNum = 0;
  let maxIndex = 0;
  let maxItem = '';
  let maxArray = []
  var buildMax = (nums)=>{
    nums.map((item,index)=>{
      item = item.toString()
      if( item.substring(0,1) > maxNum ){
        maxNum = item.substring(0,1);
        maxIndex = index;
        maxItem = item;
      }
      if(item.substring(0,1) == maxNum ){
        maxNum = item >= maxNum ? item : maxNum
      }
    })
    maxArray.push(maxItem);
    nums.splice(maxIndex,1);
  }
  while(nums.length > 0){
    buildMax(nums);
  }
  return maxArray.join('')
};

console.log(largestNumber([22,23,91,99,66,77,89,10]))

function selectionSort(arr){
  let minIndex,temp;
  for(let i = 0; i< arr.length-1; i++){
    minIndex = i
    for(let j= i+1; j< arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

function insertionSort(arr){
  const len = arr.length
  let preIndex, current
  for(let i = 1; i< len; i++){
    preIndex = i-1
    current = arr[i]
    while(preIndex >=0 && arr[preIndex] > current){
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

function sort(arr, left, right){
  var len = arr.length
  var partitionIndex
  var left = left ? left:0;
  var right = right ? right : len-1
  if(left < right){
    //  确定排头兵之后递归调用
    partitionIndex = partition(arr, left, right);
    sort(arr, left, partitionIndex - 1)
    sort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr,left,right){
  var pivot = left
  var index = pivot + 1
  for(var i  = index; i <= right; i++){
    if(arr[i] < arr[pivot]){
      swap(arr, i, index)
      index ++
    }
  }
  swap(arr, pivot, index-1)
  return index -1 
}
function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
function buble(){
  var len = arr.length;
  for(var i = 0; i< len-1; i++){
    for(var j=0;  j< len-1-i; j++){
      if(arr[j]>arr[j+1]){
        swap(arr, i, j)
      }
    }
  }
  return arr
}
function shellSort(arr){
  var len = arr.length
  gap = Math.floor(len/2)
  for(gap; gap>0; gap= Math.floor(gap/2)){
    console.log(gap);
    for(var i = gap; i<len; i++){
      temp = arr[i];
      for(var j= i-gap; j>= 0 && arr[j]>temp; j-=gap){
        arr[j+gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
  return arr;
}

function preOrderTraverse(node){
  if(!node)return [];
  let result = [];
  result.push(node.val);
  result.push(...preOrderTraverse(node.left));
  result.push(...preOrderTraverse(node.right));
  return result;
}
//链表的构造函数
function ListNode(val){
  this.val = val;
  this.next = null;
}
// 链表和数组的相互转换
function mergeTwoLists(l1, l2){
  let fakeHead = new ListNode(0);//伪头节点方便遍历
  let current = fakeHead;
  while(l1 & l2){
    if(l1.val < l2.val){
      current.next = l1;
      l1 = l1.next;
    }else{
      current.next = l2;
      l2 = l2.next
    }
  }
  if(l1){
    current.next = l1;
  }
  if(l2){
    current.next = l2;
  }
  return fakeHead.next
}
//回文，从左向右，从右向左都是一样的
function isPalindrome(x){
  let str = x.toString().split('').reverse().join('')
}
function isPalindrome2(){
  if(x<0 || x% 10 == 0 && !==0){
    return false
  }
  let revertedNumber = 0;
  while(x > revertedNumber){
    revertedNumber = revertedNumber*10 + x % 10
    x = Math.floor(x/10)
  }
  //当数字长度为奇数的时候就除以10去掉中间的多余数字
  return x === revertedNumber || x=== Math.floor(revertedNumber/10)
}
// 计数排序
let maxValue = 0;
let array = [2,3,8,7,1,2,3,9,7,9,8]
for(let i = 0;i<array.length; i++){
  if(maxValue < array[i]){
    maxValue = array[i]
  }
}
let sortArray = countingSort(array, maxValue);
console.log(sortArray);
function countingSort(arr, maxValue){
  var bucket = new Array(maxValue + 1);
  for(var i = 0; i< arr.length; i++){
    var num = arr[i];
    if(bucket[num] == null){
      bucket[num] = 1;
    }else{
      bucket[num] +=1
    }
  }
  var arrCurrIndex = 0;
  for(var i = 0; i< bucket.length; i++){
    while(bucket[i]>0){
      var num = i;
      arr[arrCurrIndex++] = num;
      bucket[i] -= i;
    }
  }
}
//有效括号
while(d){
  let res = true;
  const stack = []//pop,push
  const map = new Map([[')','('],[']','['],['}','{']])//get 和has方法
  for(let s of d){
    if(map.has(s)){//匹配右括号
      if(!stack.length || (stack[stack.length - 1] !== map.get((s)))){//栈顶元素到map里去取到的一对不一样，就不符合了返回false
        res = false
        break
      }
      stack.pop() //成功了就出栈，表示已经有完美的一对了
    }else{//没匹配到就推入进去
      stack.push(s)
    }
  }
}
//翻转二叉树
function invertTree(node){
  if(!node)return;
  let tmp = node.left;
  node.left = node.right;
  node.right = tmp;
  invertTree(node.left);
  invertTree(node.right);
  return node;
}
//翻转链表
 function LinkedList(){
  length = 0;
  head = null;
  Node = class{
    data;
    next = null;
    constructor(data){
      this.data = data;
    }
  }
  this.append = (data)=>{
    const newNode = new this.Node(data);
    if(this.length === 0){
      this.head = newNode;
    }else{
      let currentNode = currentNode.next;
    }
  }
}

var reverseList = function(head){
  let prev = null;
  let curr = head;
  while(curr){
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
// 初始化链表添加数据，调用反转链表
let LinkedList = new LinkedList();
let input = [1,2,3,4,5]
for(let i=0;i<input.length; i++){
  LinkedList.append(input[i])
}
let newHead = reverseList(linkedList.head)