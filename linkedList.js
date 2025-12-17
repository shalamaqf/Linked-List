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
            return 'List is empty';
        }

        while(temp !== null) {
            size++;
            temp = temp.next;
        }

        return size;
    }


    // Create a method to get the first node of the list
    getHead() {
        if (this.head === null) return 'List is empty';
        return this.head;
    }


    // Create a method to get the last node of the list
    getTail() {
        if (this.tail === null) return 'List is empty';
        return this.tail;
    }

    
    // Create a method to get the a node in spesific 'index'
    at(index) {
        // Check if list is empty
        if (this.head === null && this.tail === null) return 'List is empty';

        // Return head
        if (index === 0) {
            return this.head;
        }

        // Return tail
        const listLength = this.getSize();
        if (index === (listLength - 1)) {
            return this.tail;
        }

        // Check if index is out of bound
        if (index >= listLength) return 'Index is out of bound.';

        // Get the node in spesific index
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }


    // Create a method to pop/delete the last element
    pop() {
        if (this.head === null && this.tail === null) return 'List is empty';

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        let temp = this.head;
        let current = temp.next;
        while(current.next !== null) {
            temp = temp.next;
            current = temp.next;
        }

        this.tail = temp;
        temp.next = null;
    } 


    /* 
        Create a method to return a true if value is in the list,
        and false if the value isn't in the list.
    */
    contains(value) {
        if (this.head === null && this.tail === null) return 'List is empty';

        let temp = this.head;
        while(temp !== null) {
            if (temp.value === value) return true;
            temp = temp.next;
        }
        return false;
    }


    /*
        Create a method to find a value and return it,
        if it's not found, return null.
    */
    find(value) {
        if (this.head === null && this.tail === null) return 'List is empty';

        let temp = this.head;
        while(temp !== null) {
            if (temp.value === value) return temp;
            temp = temp.next;
        }
        return null;
    }
    

    // Create a method to represent nodes as a string
    toString() {
        if (this.head === null && this.tail === null) return 'List is empty';

        let string = ''
        let temp = this.head;
        while(temp !== null) {
            string += `( ${temp.value} ) -> `;
            temp = temp.next;
        }
        string += 'null';
        return string;
    }


    // Create a method to insert a value at spesific index in the list
    insertAt(value, index) {
        // Check the index out of bound
        const listLength = this.getSize();
        if (index > listLength || index < 0) return 'Index is out of bound.';

        // Set new node as head if index 0
        if (index === 0) {
            this.prepend(value);
            return;
        }

        // Set the new node as tail if index is the last node
        if (index === (listLength)) {
            this.append(value);
            return;
        }

        // Create a new node and set its value
        const newNode = new Node();
        newNode.value = value;
        newNode.next = null;

        // Traverse to the spesific index
        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;
    }
}  

// Creat a class for a node
export class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}