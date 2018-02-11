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
class LinkedList() {

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