// Create a class for a list
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Create a method to append a node to the end of the list
    append(value) {
        // Create the new node and set its properties
        const newNode = new Node();
        newNode.value = value;
        newNode.next = null;

        // Set the node as head and tail if the list is empty
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Else, set the tail to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }


    // Create a method to prepend a node to the start of the list
    prepend(value) {
        const newNode = new Node();
        newNode.value = value;
        newNode.next = this.head;

        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode
        }
    }


    // Create a method to get total number of the nodes in the list
    getSize() {
        let size = 0;
        let temp = this.head;
    
        // Check if the list is empty
        if (this.head === null && this.tail === null) {
            size = 0;
        }

        while(temp !== null) {
            size++;
            temp = temp.next;
        }

        return size;
    }

    // Create a method to get the first node of the list
    getHead() {
        if (this.head === null) return null;
        return this.head;
    }
}  

// Creat a class for a node
export class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

const list = new LinkedList();
list.append('dog')
list.append('cat')
list.prepend('fish')
list.prepend('bird')
list.append('bear')
list.prepend('shark')
console.log(list.getHead())