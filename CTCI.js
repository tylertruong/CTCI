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


