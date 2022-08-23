class QueueNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedListQueue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {this} So the method can be chained.
   */
    enqueue(item) {
      let newNode = new QueueNode(item)
  
      if(this.head ==null){
        this.head=newNode;
        this.tail=newNode;
        return this
      }else{
        this.tail.next = newNode;
        this.tail = newNode;
      }
      return this
      
    }
  
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
      if(this.head){
      //create a temp which holds the first item in the queue
      let tempItem = this.head;
      //set the head of the queue to the next item in line
      this.head = this.head.next
      //return tempItem which was removed from queue
      return tempItem;
      }else{
        return null;
      }
    }
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
      if(this.head){
        return this.head
      }else{
        return undefined;
      }
      
      
    }
  
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
      if(this.head==null){
        return true;
      }else{
        return false;
      }
    }
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
      //declare count and set to 0
      let count= 0;
      //if head is empty return 0
      if(this.isEmpty()){
        return count
      }else{
      //queue has at least one
        count ++;
        //do this until head.next == null
        while(this.next){ // note that... this.head is always the first node
        count ++;
        }
        //return the count
        return count
      }
    }
  
  
  
    
    queueToArray() {
        let temp = new LinkedListQueue();
        let output = ["Head->"]
        while(this.head) temp.enqueue(this.dequeue().data)
        while(temp.head){
            output.push(temp.head.data)
            this.enqueue(temp.dequeue().data)
        } 
        output.push("<-Tail")
        return output
    }
  }
  
  const queue = new LinkedListQueue();
  // comment out after enqueue is finished
  queue.enqueue(34).enqueue(78).enqueue(87).enqueue(34).enqueue(56).enqueue(15)
  // comment out after dequeue is finished
  console.log(queue.queueToArray())
  console.log(queue);