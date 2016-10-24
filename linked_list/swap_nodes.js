/**
 * Given a Linked List and two keys in it, swap the keys by exchanging 
 * links and NOT the values itself.
 */

function LinkedList() {
    this.head = null;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

LinkedList.prototype.add = function(data) {
    // Create a new node
    var node = new Node(data),
        current = this.head;

    // If list is empty
    if(current === null) {
        this.head = node;
    } else {    // Traverse till last node
        while(current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }
};

LinkedList.prototype.printList = function() {
    var current = this.head;
    var output = '';
    while(current !== null) {
        output += current.data+'->';
        current = current.next;
    }
    console.log(output);
};

/**
 * Swaps the two keys of the Linked List
 * @params x,y - Two keys in the list which needs to be swapped
 */
LinkedList.prototype.swap = function(x, y) {
    if(!x || !y) {
        console.log("Invalid Arguments to swap");
        return;
    }

    var current = this.head,
        temp = null,
        nodeX = null,
        nodeY = null;

    // Case 1: Either of the key is at the head of the list
    if(this.head.data === x) {
        nodeX = this.head;
        while(current.next !== null) {
            if(current.next.data === y) {
                nodeY = current;
                break;
            }
            current = current.next;
        }
        if(nodeY === null) {
            console.log('Key: '+y+', was not found in the List');
            return;
        }
        this.head = nodeY.next;
        nodeY.next = nodeX;
        temp = this.head.next;
        this.head.next = nodeX.next;
        nodeX.next = temp;
    } else if(this.head.data === y) {
        nodeY = current = this.head;
        while(current.next !== null) {
            if(current.next.data === x) {
                nodeX = current;
                break;
            }
            current = current.next;
        }
        if(nodeX === null) {
            console.log('Key: '+x+', was not found in the List');
            return;
        }
        this.head = nodeX.next;
        nodeX.next = nodeY;
        temp = this.head.next;
        this.head.next = nodeY.next;
        nodeY.next = temp;
    } else {
      // Case 2: when both the keys are in between
      current = this.head;
      while(current.next !== null){
          if(current.next.data === x) {
              nodeX = current;
          }
          if(current.next.data === y) {
              nodeY = current;
          }
          current = current.next;
      }
    
      temp = nodeY.next.next;
      nodeY.next.next = nodeX.next;
      nodeX.next = nodeY.next;
      nodeY.next = temp;
   }

};

// Main runner function
(function () {
    var list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(5);
    list.add(8);
    list.add(13);
    list.printList();

    list.swap(5, 8);
    list.printList();

})();
