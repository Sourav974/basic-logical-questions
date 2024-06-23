/* Q1:
Given large integer, n as array. E.g. n = 4219 as [4,2,1,9]. Increment the n by one and returnÂ the resulting array of digits of n.
Input -> [4,2,1,9] Output -> [4,2,2,0]
*/

function arrIncrement(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i]++;

    if (arr[i] < 10) {
      return arr;
    }

    arr[i] = 0;
  }

  arr.unshift(1);

  return arr;
}

// const arr = [4, 2, 1, 9];
// const incrementBy = 1;
// const resultingArray = arrIncrement(arr);
// console.log(resultingArray);

// Q2: Write program to generate fibonacci series.

function fibonacci(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  } else {
    let first = 0,
      second = 1,
      sum = 0;

    for (let i = 3; i <= n; i++) {
      sum = first + second;
      first = second;
      second = sum;
    }

    return sum;
  }
}

// const n = 5;
// const result = fibonacci(n);
// console.log(result);

/* Q5. Write a program which return 1 if product is positive,
 -1 if product is negative and 0 if product is 0, given array like [-1,-2,-3,-4,3,2,1]. 
 */

function productOfArrElements(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
}

// const arr = [-1, -2, -3, -4, 3, 2, 1];
// const result = productOfArrElements(arr);
// console.log(result);

// Q6. Write program to find the nth largest number in the array

function nthLargestElement(arr, nthEle) {
  let sortArr = arr.sort((a, b) => b - a);

  return sortArr[nthEle - 1];
}

// let arr = [66, 44, 55, 88, 7, 9, 3, 22, 322];
// const nthEle = 3
// const largest = nthLargestElement(arr, nthEle);
// console.log(largest);

// 7. Write a program to find square root of an integer without using in-built functions

function squareRoot(n) {
  let left = 0,
    right = n,
    result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// const n = 64;
// const result = squareRoot(n);
// console.log(result);

//  8. Write program to find high frequency character in the given string

function highestFrequencyCharacter(str) {
  str = str.split("");
  const frequencyMap = str.reduce(
    (acc, cur) =>
      cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
    {}
  );

  let highestFreq = 0,
    highestFreqChar = null;

  for (let char in frequencyMap) {
    if (frequencyMap[char] > highestFreq) {
      highestFreq = frequencyMap[char];
      highestFreqChar = char;
    }
  }

  return highestFreqChar;
}

// const str = "hello";
// const result = highestFrequencyCharacter(str);
// console.log(result);

// 9. Write a program to find the sum of odd numbers from the given array

function oddSum(arr) {
  if (arr.length === 0) return "Array cannot be empty";

  let sum = 0;
  let flag = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      flag = false;
      sum += arr[i];
    }
  }

  if (flag) {
    return "There's no odd numbers in the array";
  } else {
    return sum;
  }
}

// const arr = [4, 7, 8, 99, 6, 7, 889, 9, 334, 43];

// const result = oddSum(arr);
// console.log("Result:- ", result);

// 10. Write program to calculate the power m(n)

function power(n, pow) {
  // Base case: any number to the power of 0 is 1
  if (pow === 0) return 1;

  // Handle negative exponents by computing the positive exponent and then taking the reciprocal
  if (pow < 0) return 1 / power(n, -pow);

  // Calculate power for positive exponents
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= n;
  }

  return result;
}

// const n = 2,
//   pow = 0;

// const result = power(n, pow);
// console.log("result:- ", result);

// 11. Write a program to find the factorial of given number n

function factorial(num) {
  if (num < 0) return "Not a valid no. for factorial!";

  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

// const num = 5
// const result = factorial(num)
// console.log("result:- ", result)

// 12. Find duplicate number in two arrays

function findDuplicates(arr1, arr2) {
  // Edge case: If either array is empty, return an empty array as there can be no duplicates.
  if (arr1.length === 0 || arr2.length === 0) return [];

  // Convert the first array to a set for efficient lookup
  const set1 = new Set(arr1);
  // Initialize an empty set to store duplicates
  const duplicates = new Set();

  // Iterate through the second array
  arr2.forEach((element) => {
    // If an element is found in set1, add it to the duplicates set
    if (set1.has(element)) duplicates.add(element);
  });

  // Convert the set of duplicates to an array and return it
  return Array.from(duplicates);
}

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 1, 0, 5];
// const duplicates = findDuplicates(arr1, arr2);
// console.log("duplicates:- ", duplicates);
