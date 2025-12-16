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
}  

// Creat a class for a node
export class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}