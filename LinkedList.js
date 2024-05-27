class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }

    append(value) {
        let current;
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.nextNode !== null) {
                current = current.nextNode
        }
        current.nextNode = node
        this.tail = node
        this.size++
        }
    }
    
    prepend(value) {
        const node = new Node(value)
        node.nextNode = this.head
        this.head = node
        this.size++
    }
    
    at(index) {
        let current = this.head
        if (index > this.size) {
            return;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.nextNode
            }
        }
        
        return current
    }
    
    pop() {
        let current = this.head
        for (let i = 0; i < (this.size-1); i++) {
            current = current.nextNode
        }
        current.nextNode = null
        this.size--
    }
    
    contains(value) {
        let current = this.head
        let verdict = false
        
        while (verdict !== true && current !== null) {
            if (current.value === value) {
                verdict = true
            }
            current = current.nextNode
        }
        
        return verdict
    }
    
    find(value) {
        let counter = 0
        let current = this.head
        while (current !== null && current !== this.tail) {
            current = current.nextNode
            counter++
        }

        if (current.value == value) {
            return counter
        } else {
            return null
        }
    }
    
    toString() {
        let current = this.head.nextNode
        let str = `( ${this.head.value} ) -> `;

        while (current !== null) {
            str += `( ${current.value} ) -> `
            current = current.nextNode
            if (current === null) {
                str += `${current}`
                break
            }
        }

        return str
    }
    
    printNodes() {
        let current = this.head
        while (current !== null) {
            console.log(current.value)
            current = current.nextNode
        }
    }
}

class Node {
    constructor(value=null, nextNode=null) {
        this.value = value
        this.nextNode = nextNode
    }
}