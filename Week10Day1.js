class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null
    }
  }
  /**
   * Class to represent a stack using Double linked nodes to store the stacked items.
   * Follows a LIFO (Last In First Out) order where new items are stacked on
   * top (back) and removed items are removed from the top / back.
   */
  
  class DoubleLinkedListStack {
    /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
    constructor() {
      this.top = null;
      this.bottom = null;
    }
  
    /**
     * Adds a new given item to the top of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top.
     * @returns {this} this so the method can be chained.
     */
    push(item) {
    }
  
    /**
     * Removes the top item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { }
  
    /**
     * Retrieves the top item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top item of this stack.
     */
    peek() { }
  
    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { }
  
    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { }
  
    print() {
      console.log("top:", this.top.data);
      let r = this.top.next
      while (r.next) {
        console.log("    ", r.data);
        r = r.next;
      }
      console.log("bot:", this.bottom.data)
      return this;
    }
  }
  
  const dlls = new DoubleLinkedListStack();
  // comment out when push is finished
  // dlls.push(20).push(78).push(64).push(12).push(34)