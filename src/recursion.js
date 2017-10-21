/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) { return null; }
  if (n <= 1) { return 1; }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var holder = array.slice();
  if (holder.length === 0) {
    return 0;
  }
  return holder.pop() + sum(holder);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var holder = array.slice();
  if (holder.length === 0) {
    return 0;
  }
  var test = holder.pop();
  if (Array.isArray(test)) {
    test = arraySum(test);
  }
  return test + arraySum(holder);
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) { return true; }
  if (n === 1) { return false; }
  if (n < 0) { return isEven(n+2)};
  return isEven(n-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) { return n; }
  if (n < 0) { return n + 1 + sumBelow(n + 1); }
  return n-1 + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x < y) {
    if (x > y - 2) { return []; }
    return [x+1].concat(range(x+1, y));
  }
  if (x < y + 2) { return []; }
  return [x-1].concat(range(x-1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) { return 1; }
  if (exp === 1) { return base; }
  if (exp > 0) { return base * exponent(base, exp - 1); }
  return exponent(base, exp + 1) / base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) { return true; }
  if (n < 2) { return false; }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) { return ''; };
  var holder = string.split('');
  var holderpop = holder.pop();
  return [holderpop].concat(reverse(holder.join(''))).join('');
  // return string.substr(len - 2) + reverse(string.substr(len - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length <= 1) { return true; }
  var holder = string.toLowerCase().replace(/ /g, '').split('');
  if (holder.shift() !== holder.pop()) {
    return false;
  }
  return true && palindrome(holder.join('')); 
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1 --> what happens when x < y
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0 && x === 0) { return NaN; }
  if (x === 0 || y > x) { return x;}
  if (x < 0 && y < 0) { 
    if (x > y) { return x; }
  }
  return modulo(x - y, y);
};

  // if (x < 0) {
  //   if (y > x) { x = modulo(x+y, y); }
  // } else if (y < x) { x = modulo(x-y, y); }
  // return x;

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) { return null; }
  if (y % x === 0) { return x; }
  
  // let temp = [...Array(x + 1).keys()].filter((a) => x % a === 0).reverse();
  // let res;
  // for (let i = 0; i < temp.length; i++) {
  //   let test = gcd(x, y);
  //   if (test) {
  //     res = x;
  //     return;
  //   }
  // }
  return null;
};
// 88 -> 1 2 4 8 11, 22, 44, 88
// 24 -> 1, 2, 3, 4, 6, 8, 12, 24

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  let test = true;
  if (str1.charAt(0) !== str2.charAt(0)) { return test = false; }
  if (!str1.length && !str2.length) { return test = true; }
  return test && compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) { return []; }
  return [str.substr(0, 1)].concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) { return []; }
  holder = array.slice();
  return [holder.pop()].concat(reverseArr(holder));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) { return []; }
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

// unshift returns the actual current length 
var fizzBuzz = function(n) {
  if (n === 0) { return []; }
  let tempStr = '';
  if (n % 3 === 0) { tempStr += 'Fizz'; }
  if (n % 5 === 0) { tempStr += 'Buzz'; }
  if (!tempStr) { tempStr = n.toString(); }
  let temp = [tempStr];
  temp.unshift(fizzBuzz(n-1));
  while (temp.some((a) => Array.isArray(a))) {
    temp = temp.reduce((a, b) => a.concat(b));
  }
  return temp;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) { return 0; }
  let holder = array.pop();
  return (holder === value ? 1 : 0) + countOccurrence(array, value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) { return []; }
  var holder = array.slice();
  return [callback(holder.shift())].concat(rMap(holder, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let res = 0;
  Object.keys(obj).forEach((a) => {
    if (typeof obj[a] === 'object') {
      res += countKeysInObj(obj[a], key);
    }
    if (a === key) {
      res += 1;
    }
  });
  return res;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let res = 0;
  Object.keys(obj).forEach((a) => {
    if (typeof obj[a] === 'object') {
      res += countValuesInObj(obj[a], value);
    } 
    if (obj[a] === value) {
      res++;
    }
  });
  return res;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  Object.keys(obj).forEach((key) => {
    if (typeof(obj[key]) === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      let val = obj[key];
      delete obj[key];
      obj[newKey] = val;
    }
  });
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n === null || n === 0) { return null; }
  if (n < 3) { return [0, 1]; }
  return [fibonacci(n - 1) + fibonacci(n - 2)].concat(fibonacci(n-1));
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) { return null; }
  if (n < 2) { return n; }

  // something like if test.push === 5, return n?
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) { return []; }
  let holder = array.shift();
  return [holder.toUpperCase()].concat(capitalizeWords(array));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) { return []; };
  let holder = array.shift();
  holder = holder.charAt(0).toUpperCase() + holder.slice(1);
  return [holder].concat(capitalizeFirst(array));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let res = 0;
  Object.keys(obj).forEach((a) => {
    if (typeof obj[a] === 'object') {
      res += nestedEvenSum(obj[a]);
    } else if (obj[a] % 2 === 0) {
      res += obj[a];
    }
  });
  return res;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  array = array.reduce((a, b) => a.concat(b), []);
  return array.some((a) => Array.isArray(a)) ? flatten(array) : array;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) { return obj; }
  let temp = str.charAt(0);
  if (obj[temp]) { 
    obj[temp] = obj[temp] + 1;
  } else {
    obj[temp] = 1;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 1) { return list; }
  let holder = list.slice();
  let temp = holder.shift();
  let res = temp === holder[0] ? [] : [temp];
  return res.concat(compress(holder));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) { return []; }
  let holder = array.shift();
  holder.push(aug);
  return [holder].concat(augmentElements(array, aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) { return []; }
  let holder = array.slice();
  let temp = holder.shift();
  let res = temp !== 0 ? [temp] : temp === 0 && temp === holder[0] ? [] : [temp];
  return res.concat(minimizeZeroes(holder));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
// FIX THIS
var alternateSign = function(array) {
  if (array.length === 0) { return []; }
  let holder = array.slice();
  let temp = Math.abs(holder.shift());
  temp = temp === 0 ? [] : [temp]
  return temp.concat(alternateSign(holder)).map((a) => Math.abs(a)).map((a, i) => i % 2 === 0 ? a : -a);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) { return ''; }
  let keys = {0:'zero',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'};
  return (Number(str.charAt(0)) ? keys[str.charAt(0)] : str.charAt(0)) + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document.body) {

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min = 0, max = array.length) {
  if (min > max || max < min) { return null; }
  let mid = Math.floor((min + max) / 2);
  if (array[mid] === target) { 
    return mid; 
  } else if (target < array[mid]) {
    return binarySearch(array, target, min, mid - 1);
  } else {
    return binarySearch(array, target, mid + 1, max);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length === 1) { return array; }
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  let obj = Array.isArray(input) ? [] : {};
  Object.keys(input).forEach((a) => {
    if (typeof input[a] === 'object') {
      obj[a] = clone(input[a]);
    } else {
      obj[a] = input[a];
    }
  })
  return obj;
};
