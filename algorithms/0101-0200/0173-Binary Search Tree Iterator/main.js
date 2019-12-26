/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.list = [];
    this.helper = function(node) {
        if(node === null) return;
        this.helper(node.left);
        this.list.push(node.val);
        this.helper(node.right);
    }
    this.helper(root)
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.list.shift();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.list.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 /**
 * 方法二
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    function *dfs (root) {
        if(root) {
            yield *dfs(root.left);
            yield root.val;
            yield *dfs(root.right);
        }
    };
    this.iterator = dfs(root);
    this.next();
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const tmp = this.value;
    const {value, done} = this.iterator.next();
    this.value = value;
    this.done = done;
    return tmp;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !this.done;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */