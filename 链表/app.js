// var partition = function(head,x){
//     if(!head)return null;
//     let h1 = new ListNode();
//     let h2 = new ListNode();
//     let p1 = h1;
//     let p2 = h2;
//     for(let p= head, q; p; p=q){
//         q = p.next;
//         p.next = null;
//         if(p.val < x){
//             [p1.next, p1] = [p, p];
//         }else{
//             [p2.next, p2] = [p, p];
//         }
//     }
//     p1.next = h2.next;
//     return h1.next;
// }

//快乐数
var findNext = function(n){
    var res = 0;
    while(n){
        res += Math.ceil(n % 10) * Math.ceil(n % 10);
        n /= 10;
    }
    console.log(res)
    return res;

    //res = n % 10;
    //console.log(res);//弥补了一个自身的知识点缺陷，就是取余10永远都是那个数字的个位数的值
}
findNext(1);
