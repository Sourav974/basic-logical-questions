// 1. fibonacci series

// function fibonnaci(n) {
//   if (n === 0) {
//     console.log(0);
//     return;
//   }

//   if (n >= 1) {
//     console.log(0);
//     console.log(1);
//     return;
//   }

//   let last = 1,
//     secondLast = 0;

//   for (let i = 2; i <= n; i++) {
//     let sum = last + secondLast;
//     console.log(sum);

//     secondLast = last;
//     last = sum;
//   }
// }

// const n = 8;

// fibonnaci(n);

// 2. Reverse a given number

// function reverseNumber(num) {
//   let reverseNum = 0,
//     sumDigits = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reverseNum = reverseNum * 10 + digit;
//     sumDigits += digit;

//     num = Math.floor(num / 10);
//   }
//   console.log("Sum of digits", sumDigits);

//   return reverseNum;
// }

// const num = 12345;
// const result = reverseNumber(num);
// console.log("Reversed Number", result);

// 3. GCD or HCF of two numbers

function gcd(num1, num2) {
  let ans = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      ans = i;
    }
  }

  return ans;
}

// const num1 = 28,
//   num2 = 24;

// const result = gcd(num1, num2);
// console.log("result:- ", result);

// 4. Given two numbers a and b, calculate the LCM of two numbers

function lcm(a, b) {
  const G = gcd(a, b);

  return (a * b) / G;
}

const a = 9,
  b = 12;
const result = lcm(a, b);
console.log("result", result);

// 4. Sum of digits

// function sumOfDigits(num) {
//   let sumDigit = 0;

//   while (num > 0) {
//     let lastDigit = num % 10;
//     sumDigit += lastDigit;
//     num = Math.floor(num / 10);
//   }

//   return sumDigit;
// }

// const num = 1234;
// const result = sumOfDigits(num);
// console.log("result:- ", result);
