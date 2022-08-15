/**

* Class to represent a MinHeap which is a Priority Queue optimized for fast
* retrieval of the minimum value. It is implemented using an array but it is
* best visualized as a tree structure where each 'node' has left and right
* children except the 'node' may only have a left child.
* - parent is located at: Math.floor(i / 2);
* - left child is located at: i * 2
* - right child is located at: i * 2 + 1
*/
class MinHeap {
constructor() {
    /**
     * 0th index not used, so null is a placeholder. 
     * Not using 0th index makes calculating the left and right
     * children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
}

/**
 * Retrieves the size of the heap, ignoring the null placeholder.
 * @returns {?number} Null if empty.
 */
size() {
    // - 1 since 0 index is unused
    let counter = 0;
    if(this.heap[0] == null){
        console.log(this.heap);
        return;
    }
    return this.heap.length-1
}
}

// -1 the index i think
//array alway start at index 0 so the length
// no -1?
    // small notes/hint: minHeap is stored as an array
    // so... no .left because they are not nodes
    // for the size, remember that.. it's just an array
    // with the first index as NULL. 
    // how can we find the size of an array?

// this.heap.length()-1
}

/**
 * Retrieves the top (minimum number) in the heap without removing it.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {?number} Null if empty.
 */
top() {
    if(this.heap[1]==null){
        return -1;
    }
    return this.heap[1];

}

/**
 * Inserts a new number into the heap and maintains the heaps order.
 * 1. Push new num to back then.
 * 2. Iteratively swap the new num with it's parent while it is smaller than its parent.
 *    
 * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
 * - Space: O(1) constant.
 * @param {number} num The num to add.
 */
insert(num) {
    //p;ush new num to back then
    this.heap.push(num);
    //iterratively swap the new num with it's parent while it is smaller than its parent
    if(this.heap.length === 1) return;
    let index = this.heap.length-1;
    let parent = Math.floor(index/2);
    let tempSwap = 0;
    while(index > 1){
        parent = Math.floor(index/2);
        if(this.heap[index]< this.heap[parent]){
            tempSwap = this.heap[index];
            this.heap[index] = this.heap[parent];
            this.heap[parent] = tempSwap;
            index = parent;
            continue;
        }
    
        index=0;
    }
}



/**
 * Logs the tree horizontally with the root on the left and the index in
 * parenthesis using reverse inorder traversal.
 */
printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
    return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
    " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
}
}


var heap = new MinHeap();

heap.printHorizontalTree()