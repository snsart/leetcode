/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head==null){
        return null;
    }
    let mid=finMiddleElement(head);
    let node=new TreeNode(mid.val);
    if(head==mid){
        return node;
    }
    node.left=sortedListToBST(head);
    node.right=sortedListToBST(mid.next);
    return node;
};

function finMiddleElement(head){
    let prePtr=null;
    let slowPtr=head;
    let fastPtr=head;
    while(fastPtr!=null&&fastPtr.next!=null){
        prePtr=slowPtr;
        slowPtr=slowPtr.next;
        fastPtr=fastPtr.next.next;
    }
    if(prePtr!=null){
        prePtr.next=null;
    }
    return slowPtr;
}
