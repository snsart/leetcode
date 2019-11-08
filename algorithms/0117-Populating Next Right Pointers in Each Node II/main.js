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

 /* 方法一:按层和列遍历每个结点 */

var connect = function(root) {
    if(!root) return null;
    let level=root;
    while(level){
        let cur=level;
        while(cur){
            if(isleaf(cur)){
                cur=cur.next;
                continue;
            }
           
            let next=cur.next;
            
            while(next&&isleaf(next)){
                next=next.next;
            }
            
            if(next){
                if(cur.left){
                    cur.left.next=cur.right||next.left||next.right;
                    console.log(cur.left.val,cur.left.next);
                }
                if(cur.right){
                    cur.right.next=next.left||next.right; 
                }
            }else{
                if(cur.left){
                    cur.left.next=cur.right;
                }
                if(cur.right){
                    cur.right.next=null; 
                }
            }
            cur=next;
           
        }
        level=nextLevel(level);
    }
    return root;
};

function isleaf(node){
    return !node.left&&!node.right
}
function nextLevel(level){
    while(isleaf(level)){
        level=level.next
        if(level==null){
            return null;
        }
    }
    return level.left||level.right;
}


 /* 方法二:递归 */

 var connect = function(root) {
    if(!root) return null;
    
    if(root.left){
        root.left.next = root.right? root.right:getNextMost(root.next);
    }
    if(root.right){
        root.right.next = getNextMost(root.next);
    }
    connect(root.right);
    connect(root.left);
    
    return root;
    
};

var getNextMost = function(root){
    if(!root) return null;
    
    if(root.left) return root.left;
    if(root.right) return root.right;
    return getNextMost(root.next);
    
};

 /* 方法三:遍历结点，创建新结点指向每一层第一个结点 */

var connect = function(root) {
    let node = root,
        dummy = new Node(-1),
        tmp = dummy
    
    while(node){
        
        if(node.left){
            tmp.next = node.left
            tmp = tmp.next
        }
        
        if(node.right){
            tmp.next = node.right
            tmp = tmp.next
        }
        
        if(node.next){
            node = node.next
        }
        else{
            node = dummy.next
            dummy.next = null
            tmp = dummy//每次换行tmp会重新指向dummy
        }
    }
    
    return root
};