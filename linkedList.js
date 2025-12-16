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
        if (list.head === null && list.tail === null) {
            list.head = newNode;
            list.tail = newNode;
        } else {
            // Else, set the tail to the new node
            list.tail.next = newNode;
            list.tail = newNode;
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