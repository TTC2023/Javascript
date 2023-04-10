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
    display(){
        let runner = this.head
        let values = ""
        while (runner !== null){
            if(runner.next !== null){
                values += runner.data + ", "
            } else{
                values += runner.data
            }
            runner = runner.next
        }
        console.log(values)
        return values
    }
}

let SLL1 = new SLL(); 
SLL1.addFront(76);
SLL1.addFront(2)
SLL1.display()
SLL1.addFront(11.41)
SLL1.display()
