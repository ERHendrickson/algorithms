class slStack {
    constructor() {
      this.top = null;
    }
    // add to top
    push(data) {
      let newNode = new QueueNode(data)
      if (this.top === null) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    }
    // remove from top
    pop() {
      if (this.top === null) return null;
      var removed = this.top;
      this.top = this.top.next;
      removed.next = null;
      return removed.data;
    }
  
    peek() {
      return this.top;
    }
  
  }
  
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
  
  
    enqueue(item) {
      let newNode = new QueueNode(item);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
  
  
    dequeue() {
      if (!this.head) return null;
      let output = this.head;
      this.head = this.head.next;
      output.next = null;
      if (!this.head) this.tail = null;
      return output;
    }
  
  
    front() {
      return this.head === null ? null : this.head.data;
    }
  
  
    isEmpty() {
      return this.head === null;
    }
  
  
    size() {
      let count = 0;
      if (this.isEmpty()) return count;
      let temp = new LinkedListQueue();
      while (this.head) {
        temp.enqueue(this.dequeue().data)
        count++
      }
      while (temp.head) this.enqueue(temp.dequeue().data)
      return count
    }
  
    /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid using runner to itterate through the queue, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  
    // ***CHALLANGE ONLY USE ONE TEMP QUEUE***
    compareQueues(q2) {
      //compare the size of the queue. if they are dif return false
      if(this.size() != q2.size()){
        return false
      }
      let temp = new LinkedListQueue();
      let matching = true;
      //compare the top of each queue. if they are dif return false
      while(this.head){
        temp.enqueue(this.dequeue().data)
        temp.enqueue(d2.dequeue().data)
      }
      while(temp.head){
        this.enqueue(temp.dequeue().data);
        q2.enqueue(temp.dequeue().data);
        if(this.head.data != q2.head.data){
          matching = flase;
        }
      }
      return matching;
    }
  
    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() {
      let temp = new LinkedListQueue();
      let tempStack = new slStack();
      let isPal = true;
      while(this.head){
        let nodeData = this.dequeue().data
        temp.enqueue(nodeData)
        tempStack.push(nodeData)
      }
      while(tempQ.head){
        let nodeData = tempQ.dequeue().data
        if(nodeData !== tempStack.pop()) isPal = flase;
        this.enqueue(nodeData);
      }
      return isPal;
    }
  
    queueToArray() {
      let temp = new LinkedListQueue();
      let output = ["Head->"]
      while (this.head) temp.enqueue(this.dequeue().data)
      while (temp.head) {
        output.push(temp.head.data)
        this.enqueue(temp.dequeue().data)
      }
      output.push("<-Tail")
      return output
    }
  }
  
  const que1 = new LinkedListQueue();
  const que2 = new LinkedListQueue();
  const que3 = new LinkedListQueue();
  que1.enqueue(4) // <- head
      .enqueue(8)
      .enqueue(7)
      .enqueue(7)
      .enqueue(8)
      .enqueue(4) // <- tail
  
  que2.enqueue(4) // <- head
      .enqueue(8)
      .enqueue(7)
      .enqueue(7)
      .enqueue(8)
      .enqueue(4) // <- tail
  
  que3.enqueue(34) // <- head
      .enqueue(78)
      .enqueue(87)
      .enqueue(34)
      .enqueue(56)
      .enqueue(34)
      .enqueue(84) // <- tail
  
  // comment out after finishing compareQueues
  console.log(que1.compareQueues(que2));// should return true
  // console.log(que1.compareQueues(que3));// should return false
  // console.log(que1.queueToArray())
  // console.log(que2.queueToArray())// queues should keep there original order
  
  // comment out after finishing isPalindrome
  // console.log(que1.isPalindrome())// should return true
  // console.log(que3.isPalindrome())//should return false
  // console.log(que1.queueToArray())
  // console.log(que3.queueToArray())// queues should keep there original order