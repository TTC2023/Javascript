class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let new_node = new Node(value);
        if (!this.head) {
            this.head = new_node;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }
        return this;
    }
    removeFront(){
        if(this.head){
            this.head = this.head.next;
            return this;
        }
    }
    showFront(){
        if(this.head){
            console.log(this.head)
            return this.head
        } else{
            console.log(this.head)
            return null;
        }
    }
}

let SLL1 = new SLL(); 
SLL1.addFront(18);
SLL1.addFront(5)
SLL1.addFront(73)
SLL1.removeFront()
SLL1.removeFront()
SLL1.showFront()
SLL1.removeFront()
SLL1.showFront()