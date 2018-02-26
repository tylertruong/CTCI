// Other

const findIsland = (arr=[[0,0,0,0, 0], [0,1,1,1,0],[0,1,1,1,0],[0,0,0,0,0]]) => {
  let topLeft;
  
  const islandSearch = (i, j) => {
      let width = i;
      let height = j;
      
      let currentWidth = i;
      while(arr[currentWidth] && arr[currentWidth][j] !== 0) {
        currentWidth++;
      }
      
      let currentHeight = j;
      while(arr[i][currentHeight] !== 0 && arr[i][currentHeight] !== undefined) {
        console.log(arr[i][currentHeight]);
        currentHeight++;
      }
      
      return [currentWidth - i, currentHeight - j];
  };
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 1) {
        topLeft = [i, j];
        return {topLeft, size: islandSearch(i,j)};
        
      }
    }
  }
};

const findIsland = (arr=[[0,1,0], [0,1,0],[1,0,1]]) => {
  let markedIsland = {};
  let numberIslands = 0;

  const findSurrounding = (i,j) => {
    //checktop
    if(!markedIsland[i]) {
      markedIsland[i] = {}
    }
    
    markedIsland[i][j] = true;
    
    if(arr[i-1] && arr[i-1][j] && arr[i-1][j] === 1 && (!markedIsland[i-1] || markedIsland[i-1][j] === false)) {
      findSurrounding(i-1, j);
    }
    if(arr[i+1] && arr[i+1][j] && arr[i+1][j] === 1 && (!markedIsland[i+1] || markedIsland[i+1][j] === false)) {
      findSurrounding(i+1, j);
    }
    if(arr[i] && arr[i][j-1] && arr[i][j-1] === 1 && (!markedIsland[i][j-1] || markedIsland[i][j-1] === false)) {
      findSurrounding(i, j-1);
    }
    if(arr[i] && arr[i][j+1] && arr[i][j+1] === 1 && (!markedIsland[i][j+1] || markedIsland[i][j+1] === false)) {
      findSurrounding(i, j+1);
    }
    
    return;
    
  }
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 1 && (!markedIsland[i] || !markedIsland[i][j])) {
        if(!markedIsland[i]) {
          markedIsland[i] = {}
        }
        markedIsland[i][j] = true;
        numberIslands++;
        findSurrounding(i, j)
      }
    }
  }
  
  return numberIslands;
  
  
  
  
};

// Chapter 1 Arrays and Strings

const allUniqueChars = (string) => {
  let hash = {};
  
  for(let i = 0; i < string.length; i++) {
    if(hash[string[i]]) {
      return false;
    } else {
      hash[string[i]] = true;
    }
  }
  
  return true;
}

const isPermutation = (str1, str2) => {
  
  const createHash = (string) => {
    let hash = {};
    
    for (let i = 0; i < string.length; i++) {
      if(hash[string[i]]) {
        hash[string[i]]++;
      } else {
        hash[string[i]] = 1;
      }
    }
    
    return hash;
  };
  
  let hash1 = createHash(str1);
  let hash2 = createHash(str2);
  
  if(Object.keys(hash1).length !== Object.keys(hash2).length) {
    return false;
  }
  
  for(let key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }
  return true;
};

const isPermutationSort = (str1, str2) => {

  return str1.split("").sort().toString() === str2.split("").sort().toString();
}

const isPermutation = (str1, str2) => {
  
  const createHash = (string) => {
    let hash = {};
    
    for (let i = 0; i < string.length; i++) {
      if(hash[string[i]]) {
        hash[string[i]]++;
      } else {
        hash[string[i]] = 1;
      }
    }
    
    return hash;
  };
  
  let hash1 = createHash(str1);
  let hash2 = createHash(str2);
  
  if(Object.keys(hash1).length !== Object.keys(hash2).length) {
    return false;
  }
  
  for(let key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }
  return true;
};

const isPermutationSort = (str1, str2) => {

  return str1.split("").sort().toString() === str2.split("").sort().toString();
}

const urlify = (string, length) => {
  let i = length - 1;
  let j = string.length - 1;
  while (i !== 0) {
    if(string[i] === " ") {
      string[j] = '0';
      string[j-1] = '2';
      string[j-2] = '%';
      j -= 3;
      i --;
    } else {
      string[j--] = string[i--]
    }
  }
  
  return string;
}

const isPalPerm = (string1) => {
  let string = string1.toLowerCase();
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if(string[i] === " ") {
      continue;
    }
    
    if(hash[string[i]]){
      hash[string[i]]++;
    } else {
      hash[string[i]] =1;
    }
  }
  
  let odd = false;
  console.log(hash);
  for (let key in hash) {
    if(hash[key] % 2 === 1) {
      if(odd) {
        return false;
      } else {
        odd = true;
      }
    }
  }
  return true;
  
}


const oneAway = (str1, str2) => {
    const checkString = (long, short) => {
      let l = 0;
      let s = 0;
      let away = false;
      while (l < long.length) {
        if(long[l] !== short[s]) {
          if(away) {
            return false;
          } else {
            away = true;
          }
          l++;
          
          if(long.length === short.length) {
            s++;  
          }
        } else {
          l++;
          s++;
        }
      }
      return true;
   };
  
  if (str1.length > str2.length) {
    return checkString(str1, str2);
  } else if (str2.length > str1.length) {
    return checkString(str2, str1);
  } else {
    return checkString(str1, str2);
  }
  

};

const stringComp = (str) => {
  let newStr = '';
  let count = 1;
  
  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== str[i-1] || i === str.length) {
      newStr += str[i-1] + count;
      count = 1;
    } else {
      count++;
    }
  }
  
  return newStr.length < str.length ? newStr : str;
}

const rotateMatrix = (matrix=[
[1,2,3,4, 5],
[6,7,8, 9, 10],
[11,12,13,14, 15],
[16,17,18,19, 20], 
[21,22,23,24,25]]) => {
  let n = matrix.length - 1;
  let i = 0;
for (let i = 0; i < Math.ceil(n/2); i++) {
  for(let j = i; j < n - i; j++) {
    let holder = matrix[i][j];
    matrix[i][j] = matrix[n - j][i];
    
    matrix[n - j][i]  = matrix[n - i][n - j];
    
    matrix[n - i][n-j] = matrix[j][n-i];
    
    matrix[j][n-i] = holder;
    console.log(matrix);
  }
 }
  return matrix;
}

const zeroMatrix = (matrix =[[1, 0,1,2],[2,1,1,0],[3,4,5,6]]) => {
  let rows = {};
  let columns = {};
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i]  = true;
        columns[j] = true;
      }
    }
  }
  
  for (let k = 0; k < matrix.length; k++) {
    for (let l = 0; l < matrix[k].length; l++) {
      if (rows[k]) {
        matrix[k][l] = 0;
      } else if (columns[l]) {
        matrix[k][l] = 0;
      }
      
    }
  }
  return matrix;
}


// Chapter 2: Linked List
class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    if (this.tail) {
      this.tail.next = this.makeNode(value);
      this.tail = this.tail.next;
    } else {
      this.tail = this.makeNode(value);
      this.head = this.tail;
    }
  }

  removeHead() {
    if (this.head) {
      let oldHead = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return oldHead;
    }
    return null;
  }

  contains(value) {
    let current = this.head;
    while(current !== null) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  makeNode(value) {
    let node = {};
    node.value = value;
    node.next = null;
    return node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  removeDuplicates() {
    
    let current = this.head;
    let prev;
    let hash = {};
    
    while(current !==null) {
      if(hash[current.value]) {
        this.removeNode(prev, current);
      } else {
        hash[current.value] = true;
      }
      prev = current;
      current = current.next;
    }
  }
  
  removeDuplicatesNoBuffer() {
    
    let current = this.head;
    let checker;
    
    while(current !==null) {
      let checker = current.next;
      let prevChecker = current;
      while(checker !== null) {
        if (checker.value === current.value) {
          this.removeNode(prevChecker, checker);
        } 
        prevChecker = checker;
        checker = checker.next;
      }
      current = current.next;
    }
    
  }
  
   
  removeKthLastRecursive(k, node, i) {
    console.log(k, node);
    
    if(node === undefined) {
      return this.removeKthLastRecursive(k, this.head);
    }
    if(node === null) {
      return 0;
    } else {
      let value = this.removeKthLastRecursive(k, node.next, i)
      if(value === k) {
        return node.next;
      }
      
      if(typeof value !== 'number') {
        return value;
      }
      return value + 1;
     
    }
  }
   
  removeKthLast(k) {
    let number = 0;
    
    let current = this.head;
    while(current !== null) {
      number++;
      current = current.next; 
    }
    
    let end = number - k + 1;
    let curr = this.head;
    let prev;
    
    while(end !== 0) {
      prev = curr;
      curr = curr.next;
      end--;
    }
    
    return curr;
  }
  
  removeNode(prev, current) {
    // refactor, you only need previous node and can see current by doing prev.next and setting prev.next to prev.next.next
    console.log(prev, current);
    prev.next = current.next;
    if(current.next === null) {
      this.tail = prev;
    }
  }
  
  addToTail(value) {
    if (this.tail) {
      this.tail.next = this.makeNode(value);
      this.tail = this.tail.next;
    } else {
      this.tail = this.makeNode(value);
      this.head = this.tail;
    }
  }

  removeHead() {
    if (this.head) {
      let oldHead = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return oldHead;
    }
    return null;
  }

  deleteMiddleNode(node) {
    let current = node;
    if(current.next === null) {
      current = null;
    } else {
    current.value = current.next.value;
    current.next = current.next.next;
    }
  }
  
  reverseLinkedList() {
    
    let prev = this.head;
    let mid = prev.next;
    let end = mid.next;
    
    prev.next = null;
    while (prev !== null) {
      if(mid === null) {
        this.head = prev;
      } else if(end === null) {
        this.head = mid;
      }
      mid.next = prev;
      
      prev = end && end.next ? end.next : null;
      if(end) {
        end.next = mid;
      }
      mid = prev && prev.next ? prev.next : null;
      end = mid && mid.next ? mid.next : null;
    }
  }
  
  printValues() {
    let current = this.head;
    while(current !== null) {
      console.log(current.value);
      current = current.next;
    }
    
  }
  
  partitionList(number){
    let beg = new LinkedList();
    let end = new LinkedList();
    let current = this.head;
    while (current !== null) {
      if(current.value < number) {
        beg.addToTail(current);
      } else {
        end.addToTail(current);
      }
      current = current.next;
    }
    //needs an add to tail that can add multiple items, but same concept.
    beg.addToTail(end.head)
    return beg;
  }

  contains(value) {
    let current = this.head;
    while(current !== null) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  makeNode(value) {
    let node = {};
    node.value = value;
    node.next = null;
    return node;
  }
  
  makeCopy() {
    let ll = new LinkedList();
    let current = this.head;
    while(current !== null) {
      ll.addToTail(current.value);
      current = current.next;
    }
    return ll;
  }
}

let ll = new LinkedList();
ll.addToTail(9);
ll.addToTail(7);
ll.addToTail(8);
ll.addToTail(7);
ll.addToTail(9);

let aa = new LinkedList();
aa.addToTail(6);
aa.addToTail(8);
aa.addToTail(5);

const sumLL = (ll1, ll2) => {
  let summedValues = new LinkedList();  
  
  const sumList = (ll1, ll2, remainder=0) => {

    if(ll1 === null && ll2 === null) {
      if(remainder) {
        summedValues.addToTail(remainder);
      }
      return;
    }
    
    if(ll1 === null) {
      let total = ll2.value + remainder;
      
      summedValues.addToTail(total >= 10 ? total - 10 : total);
      sumList(null, ll2.next, total >= 10 ? 1 : 0 );
      return;
    }
    
    if(ll2 === null) {
      let total = ll1.value + remainder;
      
      summedValues.addToTail(total >= 10 ? total - 10 : total);
      sumList(null, ll1.next, total >= 10 ? 1 : 0 );
      return;
    }

    let total = ll1.value + ll2.value + reaminder;
    summedValues.addToTail(total >= 10 ? total - 10 : total);
    sumList(ll1.next, ll2.next, total >= 10 ? 1 : 0 );
    return;
    
  }
  
  sumList(ll1.head, ll2.head);
  
  return summedValues;

}



const reverseLinkedList = (ll) =>  {
    
    let prev = ll.head;
    let mid = prev.next;
    let end = mid.next;
    
    prev.next = null;
    while (prev !== null) {
      if(mid === null) {
        this.head = prev;
      } else if(end === null) {
        this.head = mid;
      }
      mid.next = prev;
      
      prev = end && end.next ? end.next : null;
      if(end) {
        end.next = mid;
      }
      mid = prev && prev.next ? prev.next : null;
      end = mid && mid.next ? mid.next : null;
    }
    console.log(ll);

    return ll;
}

const isPalindrome = (ll) =>{
  let bb = reverseLinkedList(ll.makeCopy());
  
  let current = ll.head;
  let current2 = bb.head;
  ll.printValues();
  console.log('---------')
  bb.printValues();
  while(current !== null) {
    if(current.value !== current2.value) {
      return false;
    }
    current = current.next;
    current2 = current2.next;
  }
  return true;
}


// Chapter 3 Stacks and Queues
class Stack {
  constructor() {
    this.stack = [];
    this.minValues = [];
    this.length = 0;
  }
  
  push(value) {
    this.stack = this.stack.concat(value);
    if(this.minValues[this.minValues.length - 1] 
    && this.minValues[this.minValues.length - 1] < value) {
      this.minValues = this.minValues.concat(this.minValues[this.minValues.length - 1]);
    } else {
      this.minValues = this.minValues.concat(value)
    }
    this.length++;
    return value;
  }
  
  pop() {
    if(this.size() > 0) {
      let popValue = this.stack[this.stack.length - 1];
      this.stack = this.stack.slice(0, this.stack.length - 1);
      this.minValues = this.minValues.slice(0, this.minValues.length - 1);
      this.length--;
      return popValue;
    }
    return null;
  }
  
  size() {
    return this.length;
  }
  
  peek() {
    return this.stack[this.stack.length - 1];
  }
  
  min() {
    return this.minValues[this.minValues.length - 1];
  }
}

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackCounter = 0;
    this.hash = {};
    this.hash[0] = new Stack();
  }
  
  increaseSize(){
    this.stackCounter++;
    if(!this.hash[this.stackCounter]) {
      this.hash[this.stackCounter] = new Stack();
    } else {
      while(this.hash[this.stackCounter] && this.hash[this.stackCounter].size() === capacity) {
        this.stackCounter++;
      }
      if (!this.hash[this.stackCounter]) {
        this.hash[this.stackCounter] = new Stack();
      }
    }
  }
  
  push(value) {
    if (this.hash[this.stackCounter].size() >= this.capacity) {
      this.increaseSize();
    }
    this.hash[this.stackCounter].push(value);
    return value;
  }
  
  pop(value) {
    let popValue = this.hash[this.stackCounter].peek();
    this.hash[this.stackCounter].pop();
    if(this.hash[this.stackCounter].size() <= 0) {
      this.stackCounter--;
    }
    return popValue;
  }
  
  popAt(index) {
    this.hash[index].pop();
    this.stackCounter = index;
  }
  
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.size = 0;
  }
  
  add(value) {
    this.size++;
    this.stack1.push(value)
  }
  
  remove(){
    this.size--;
    while(this.stack1.length) {
      let popValue = this.stack1.peek();
      this.stack1.pop();
      this.stack2.push(popValue);
    }
    
    let popperValue = this.stack2.peek();
    this.stack2.pop();
    
    while(this.stack2.length) {
      let popValue = this.stack2.peek();
      this.stack2.pop();
      this.stack1.push(popValue);
    }
    
    return popperValue;
  }
  
  peek(){
        while(this.stack1.length) {
      let popValue = this.stack1.peek();
      this.stack1.pop();
      this.stack2.push(popValue);
    }
    
    let peekValue = this.stack2.peek();

    while(this.stack2.length) {
      let popValue = this.stack2.peek();
      this.stack2.pop();
      this.stack1.push(popValue);
    }
    
    return peekValue;
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  
}

class SortStack {
  constructor() {
    this.stack = new Stack();
    this.tempStack = new Stack();
  }
  
  
  push(value) {
    while(value > this.stack.peek() && this.stack.size() !== 0) {
      let popValue = this.stack.peek();
      this.stack.pop();
      this.tempStack.push(popValue);
    }
    
    this.stack.push(value);
    
    while(this.tempStack.size() !== 0) {
      let popValue = this.tempStack.peek();
      this.tempStack.pop();
      this.stack.push(popValue);
    }
  }
  
  pop() {
    return this.stack.pop();
  }
  
  peek() {
    return this.stack.peek();
  }
  
  isEmpty() {
    this.stack.size() === 0;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();

  }

  enqueue(animal){
    animal.time = new Date ();
    if(animal.type === dog) {    
      dogQueue.add(animal);
    } else {
      catQueue.add(animal);
    }

  }

  dequeueAny() {
    if(dogQueue.size() > 0 && dogQueue.peek().time > catQueue.peek().time) {
      return dogQueue.remove();
    } else {
      return catQueue.remove();
    }

  }

  dequeueDog() {
    return dogQueue.remove();
  }

  dequeueCat() {
    return catQueue.remove();
  }
}

// Chapter 4 Trees and Graphs


// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.graph[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.graph[node]) {
    for(let i = 0; i < this.graph[node].length; i++) {
      this.removeEdge(node, this.graph[node][i]);
    }
    delete this.graph[node];
  }
 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(let i = 0; i < this.graph[fromNode].length; i++) {
    if(this.graph[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.graph[fromNode]) {
    this.graph[fromNode].push(toNode);
  }

   if(this.graph[toNode]) {
    this.graph[toNode].push(fromNode);
  }
};

Graph.prototype.printGraph = function() {
  console.log(this.graph);
  return;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(let i = 0; i < this.graph[fromNode].length; i++) {
    if(this.graph[fromNode][i] === toNode) {
      console.log('here');
      this.graph[fromNode].splice(i, 1);
      console.log(this.graph);
    }
  }

  for(let j = 0; j < this.graph[toNode].length; j++) {
    if(this.graph[toNode][j] === fromNode) {
      this.graph[toNode].splice(j, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let allNodes = Object.keys(this.graph);

  for (let i = 0; i < allNodes.length; i++) {
    cb(allNodes[i]);
  }
};

Graph.prototype.routeBetweenNodes = function(nodeOne, nodeTwo) {
  let visitedNodes = {};
  
  let queueOne = [nodeOne];
  let queueTwo = [nodeTwo];
  //might have to  break this part into two parts and use || if not undirected graph
  while(queueOne.length !== 0 && queueTwo.length !== 0) {
    let currentNodeOne = queueOne.pop();
    let currentNodeTwo = queueTwo.pop();
   
    if(!visitedNodes[currentNodeOne] && !visitedNodes[currentNodeTwo]) {
      visitedNodes[currentNodeOne] = true;
      visitedNodes[currentNodeTwo] = true;
    } else {
      return true;
    }
    
    for(let i = 0; i < this.graph[currentNodeOne].length; i++) {
      queueOne.push(this.graph[currentNodeOne][i]);
    }
    
    for(let j = 0; j < this.graph[currentNodeTwo].length; j++) {
      queueTwo.push(this.graph[currentNodeTwo][j]);
    }
  }
  
  return false;
};

var BinarySearchTree = function(value) {

  let instance = Object.create(BinarySearchTree.prototype);
  instance.value = value;
  return instance;

};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value); 
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value)
    }
  }
  return;
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
   callback(this.value);
    if (this.left) {
     this.left.depthFirstLog(callback);
   }

   if (this.right) {
     this.right.depthFirstLog(callback);
   }


   return;
}

BinarySearchTree.prototype.breadthFirstLog = function(callback) {

   let queue = [this];
   while (queue.length !== 0) {
     let currentNode = queue.pop();
     callback(currentNode.value);

     if (currentNode.left) {
      queue.unshift(currentNode.left);
     }

     if (currentNode.right) {
      queue.unshift(currentNode.right);
     }
   }
}

let BST = new BinarySearchTree();

let minimalTree = (sortedArray) => {
let BST;
let elementsAdded = 0;

  let addElements = (array) => {

    if(array.length === 1) {
      BST.insert(array[0]);
      return;
    } else if (array.length === 0) {
      return;
    }

    let middleElement = Math.floor((array.length - 1)/2);
    if (!BST) {
      BST = new BinarySearchTree(array[middleElement])
    } else {
    BST.insert(array[middleElement]);
    }
    
    addElements(array.slice(0, middleElement));
    addElements(array.slice(middleElement + 1, array.length))
  }
  addElements(sortedArray);
  return BST;


};

let pointerMinimalTree = (sortedArray) => {
  let BST;

  let addElements = (currentMin, currentMax) => {
    if(currentMin > currentMax) {
      return;
    } else if (currentMin === currentMax) {
      BST.insert(sortedArray[currentMin]);
      return;
    }
    
    let mid = Math.floor((currentMax + currentMin) / 2);
    if (!BST) {
      BST = new BinarySearchTree(sortedArray[mid])
    } else {
      BST.insert(sortedArray[mid]);
    }
    let leftMin = currentMin;
    let leftMax = mid - 1;
    let rightMin = mid + 1;
    let rightMax = currentMax;
    console.log(leftMin, leftMax, rightMin, rightMax);
    addElements(leftMin, leftMax);
    addElements(rightMin, rightMax)
  }
  addElements(0, sortedArray.length - 1);
  return BST;


}

let listOfDepths = (root) => {
  let linkedLists = [];
  let currentLinkedList;
  let currentRow = 1;
  let nextRow = 0;

  let queue = [root];

  while (queue.length !== 0) {
    let currentNode = queue.pop();
    currentRow--;

    if (currentlinkedList) {
      currentLinkedList.addNode(currentNode);
    } else {
      currentLinkedList = new LinkedList(curretNode);
    }

    if (currentNode.left) {
      nextRow++;
      queue.unshift(currentNode.left);
    }
    if (currentNode.right) {
      nextRow++;
      queue.unshift(currentNode.right);
    }

    if(currentRow === 0) {
      currentRow = nextRow;
      nextRow = 0;
    }
  }

}

//see leetcode for other problems;

let successor = (node) => {
  if(node.right) {
    
    let current = node.right;
    while(current.left !== null) {
      current = current.left;
    }
  } else {
    let current = node;
    let parent = node.parent;
    while(parent !== null && parent.left !== current) {
      current = parent;
      parent = parent.parent;
    }

    return parent;
  }
}


