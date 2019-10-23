/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let addTwoNumbers = function(l1, l2) {
    
    let curNode=null,root=null,carry=0;
    let pl1=l1,pl2=l2;
    
    [root,carry]=mergeNode(pl1,pl2,carry);
    
    curNode=root;
    pl1=pl1.next;
    pl2=pl2.next;
    
    while(pl1||pl2){
        let newNode;
        [newNode,carry]=mergeNode(pl1,pl2,carry);
        
        curNode.next=newNode;
        curNode=curNode.next;
        pl1=pl1?pl1.next:null;
        pl2=pl2?pl2.next:null;
    }
   
    /*判断最后是否有进位*/
    
    if(carry>0){
        curNode.next=new ListNode(carry);
    }
    
    return root;
    
};

let mergeNode=function(n1,n2,carry){
    let x=n1!=null?n1.val:0;
    let y=n2!=null?n2.val:0;
    let sum=x+y+carry;
    carry=sum>9?1:0;
    let newNode=new ListNode(sum%10);
    return [newNode,carry];
}