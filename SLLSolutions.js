/** 
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
constructor(data) {
    this.data = data;
    this.next = null;
}
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
constructor() {
    this.head = null;
}

/** ------------- W1D2 -----------------
 * Determines if this list is empty.
 * @returns {boolean}
 */
isEmpty() { // this.head
    if (this.head === null) return true;
    else return false;
}

/**
 * Creates a new node with the given data and inserts it at the back of
 * this list.
 * @param {any} data The data to be added to the new node.
 * @returns {SinglyLinkedList} This list.
 */
insertAtBack(data) {
    if (!this.head) {
    this.head = new ListNode(data);
    return
    }
    var runner = this.head;
    while (runner.next) { // while(runner.next != null)
    runner = runner.next;
    }
    runner.next = new ListNode(data);
}

insertAtBackMany(vals) {
    for (const item of vals) {
    this.insertAtBack(item);
    }
    return this;
}

// -----------W1D3 -------------
insertAtFront(data){
    var node = new ListNode(data);
    node.next = this.head;
    this.head = node; 
}

removeHead() {
    if (this.head) {
    this.head = this.head.next;
    } 
    else {
    console.log("Empty list");
    }
}

// -----------W1D4 -------------
    contains(data){
    var runner = this.head;

    while(runner){
        if(runner.data === data){
        return true;
        }
        runner = runner.next;
    }
    return false;
    }

    removeBack(){
    
    var prevRunner = null;
    var runner = this.head;
    while (runner){
        //Will save this iterations runner object 
        prevRunner = runner;
        runner = runner.next
        if (runner ===null){
        this.head = null;
        }
        else if ( runner.next === null){
        //sets value of the prevRunner to null if runner.next == null
        prevRunner.next = null;
        break;
        }
    }
    }

    containsRecursive(val, current = this.head) {
    if (current === null) {
    return false;
    }
    if (current.data === val) {
    return true;
    }
    return this.containsRecursive(val, current.next);
}

recursiveMax(runner = this.head, maxNode = this.head) {
    if (this.head === null) {
    return null;
    }

    if (runner === null) {
    return maxNode.data;
    }

    if (runner.data > maxNode.data) {
    maxNode = runner;
    }

    return this.recursiveMax(runner.next, maxNode);
}

    secondToLast(){
        if(!this.head.next){ // equal to this.head.next === null
            return null
        }
        if(!this.head.next.next){ // equal to this.head.next.next === null
            return this.head.data
        }
        let runner = this.head
        while(runner.next.next){  // equal to runner.next.next != null
            runner = runner.next
        }
        return runner.data
    }

    removeVal(val){
        if(this.head.data === val){
            let temp = this.head
            this.head = this.head.next
            temp.next = null
            return this
        }
        let runner = this.head
        while(runner.next){ // equal to runner.next != null
            if (runner.next.data === val){
                let temp = runner.next
                runner.next = runner.next.next
                temp.next = null
                return this
            }
            runner = runner.next
        }
        console.log("your data was not found in the list")
        return this
    }

    prepend(eVal,newVal){
        if(!this.head){ // equal to this.head === null
            return false
        }
        const newNode = new Node(newVal);
        if(this.head.data === eVal){
            newNode.next = this.head
            this.head = newNode
            return true
        }
        let runner = this.head
        while(runner.next){ // equal to runner.next != null
            if(runner.next.data === eVal){
                newNode.next = runner.next
                runner.next = newNode
                return true
            }
            runner = runner.next
        }
        console.log("your data was not found in the list")
        return false
    }
//given
printList() {
    if (!this.head) {
    console.log("Empty list")
    } else {
    var runner = this.head;
    while (runner) { // runner !== null
        console.log(runner.data)
        runner = runner.next
    }


    }
}
}

// instantiate nodes
var node1 = new ListNode(5)
var node2 = new ListNode(6)
var node3 = new ListNode(7)

node1.next = node2 // .next points to another node (not data)
node2.next = node3

// create empty list
var emptyList = new SLL();

var list1 = new SLL();
list1.head = node1;
// list1.insertAtBack(8)

console.log(list1.printList())


var sll2 = new SLL();
console.log("Check if sll2 is empty after instantiation:", sll2.isEmpty());
sll2.head = node1;
// HEAD
// (5) -> (6) -> (7) -> NULL
sll2.printList();

console.log("Insert 8, then print list:");
sll2.insertAtBack(8);
sll2.printList();
console.log("Insert 9, then print list:");
sll2.insertAtBack(9);
sll2.printList();
