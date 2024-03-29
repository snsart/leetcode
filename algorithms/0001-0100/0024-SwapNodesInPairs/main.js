/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    if(head==null) return null;
    if(head.next==null) return head;
    var current = head;
    var next = head.next;
    var result = next;
    var pre = null;
    while(next!=null&&next.next!=null){
        if(pre!=null) pre.next = next;
        pre = current;
        current.next = next.next;
        next.next = current;
        current = current.next;
        next = current.next;
    }

    if(next!=null&&next.next==null){
        if(pre!=null) pre.next = next;
        current.next = null;
        next.next = current;
    }

    return result;
};