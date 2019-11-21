/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
    if(!head){
        return null;
    }
    let newhead;
    let map=new Map();
    let node=head;
  
    while(node){
        let newNode;
        
        if(node==head){
            newNode=new Node(head.val,null,null);
            map.set(head,newNode);
            newhead=newNode;
        }else{
            newNode=map.get(node);
        }
        
        if(node.next){
            let nextNode;
            if(map.has(node.next)){
                nextNode=map.get(node.next);
            }else{
                nextNode=new Node(node.next.val,null,null);
                map.set(node.next,nextNode);
            }
            newNode.next=nextNode;
        }
        
        if(node.random){
            let randNode;
            if(map.has(node.random)){
                randNode=map.get(node.random);
            }else{
                randNode=new Node(node.random.val,null,null);
                map.set(node.random,randNode);
            }
            newNode.random=randNode;
        }
        
        node=node.next;
    }
    return newhead;
};

/* 代码优化 */
var copyRandomList = function(head) {
    if (head == null) return head;
    
    let curr = head;
    let map = new Map();
    
    while(curr != null) {
        let copy = new Node(curr.val, curr.next, curr.random);
        map.set(curr, copy);
        curr = curr.next;
    };
    
    map.forEach((node, key) => {
        if (node.next) node.next = map.get(node.next);
        if (node.random) node.random = map.get(node.random);
    });
    
    return map.get(head);
};
