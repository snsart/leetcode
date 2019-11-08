/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;
    let s=root;
    let p=s;
    while(s.left){
        while(p){
            p.left.next=p.right;
            if(p.next){
                p.right.next=p.next.left;
            }
            p=p.next;
        }
        s=s.left;
        p=s;
    }
    return root;
};