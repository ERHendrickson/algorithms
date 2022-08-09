/**
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null; 
}
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
    this.root = null;
    }

/**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal : The number to search for
 * @returns {boolean} : Indicates if the searchVal was found.
 */
contains(searchVal,current = this.root) {
    // while loop checks to see if current has a value or if it is empty/null
    while(current){
    // if the searchValue is less than this.root (left side of root means its smaller)
    if(searchVal < current.data){
        // if thats true, we want to change the runner value from this.root to this.root.left (we want the runner to be set to the value that we want to compare to the searchValue since we confirmed its smaller than the root)
        current = current.left;
    }
    // if the searchValue is actually larger than the this.root value (the larger values will be on the right of the this.root)
    else if(searchVal > current.data){
        // if its true, we want to set the runner to this.root.right
        current = current.right;
    }
    // if the current(whatever value weve set this to)'s value = to the search value, we want to return true
    else if(current.data == searchVal){
        return true;
    }
    }
    return false;
}

    
    /**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal: The number to search for in the node's data.
 * @returns {boolean} : Indicates if the searchVal was found.
 */
containsRecursive(searchVal, current = this.root) {
    if(!current){
    return false;
    }
    else if(searchVal == current.data){
    return true;
    }
    else if(searchVal < current.data){
    return this.containsRecursive(searchVal, current.left);
    }
    else if(searchVal > current.data){
    return this.containsRecursive(searchVal, current.right);
    }
    return false;
}

/**
 * Calculates the range (max - min) from the given startNode.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} startNode : The node to start from 
 * @returns {number|null} : The range of this tree or a sub tree 
 * depending on if the startNode is the root or not.
 *   
 */
range(startNode = this.root) {
    while(startNode.left){
        var minVal = startNode.left.data;
        startNode = startNode.left;
    }
    startNode = this.root
    while(startNode.right){
        var maxVal = startNode.right.data;
        startNode = startNode.right;
    }
    return maxVal-minVal;
}



// HELPER METHOD
// Logs this tree horizontally with the root on the left.
print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
    return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
    " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
}
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
    /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
    /   \
    5     15
/ \    / \
2   8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(8);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print()
console.log(threeLevelTree.contains(5));
console.log(threeLevelTree.contains(11));

console.log(threeLevelTree.containsRecursive(5));

/* fullTree
                    root
                <-- 25 -->
            /            \
            15             50
        /    \         /    \
        10     22      35     70
    /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

