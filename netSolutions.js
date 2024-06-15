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

const str = "hello";
const result = highestFrequencyCharacter(str);
console.log(result);
