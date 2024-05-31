/*
 1. Given a string s, and a pattern p. 
You need to find if p exists in s or not and return the starting index of p in s. 
If p does not exist in s then -1 will be returned.

*/

// function findPatterns(s, p) {
//   let flag = false;
//   let i, j;

//   for (i = 0; i < s.length; i++) {
//     for (j = 0; j < p.length; j++) {
//       if (s[i + j] !== p[j]) {
//         break;
//       }
//     }

//     if (j >= p.length) {
//       break;
//     }
//   }

//   return i;
// }

// let s = "Hello";
// let p = "llo";
// const index = findPatterns(s, p);

// console.log(`${p} starts from the ${index} in ${p}`);

// 2. Prime Factorization

// function primeFactors(n) {
//   let smallestPrimeNo = 2,
//     factors = [];

//   while (n > 1) {
//     if (n % smallestPrimeNo === 0) {
//       factors.push(smallestPrimeNo);
//       n = n / smallestPrimeNo;
//     } else {
//       smallestPrimeNo++;
//     }
//   }

//   return factors;
// }

// let n = 100;
// const factors = primeFactors(n);

// console.log(factors);

// 3. Anagram strings

// function anagramString(str1, str2) {
//   let str1_sort = str1.split("").sort().join(""),
//     str2_sort = str2.split("").sort().join("");

//     if(str1_sort === str2_sort){
//         return true
//     }else{
//         return false
//     }
// }

// let str1 = "geeksforgeeks",
//   str2 = "forgeeksgeeks";
// const findAnagram = anagramString(str1, str2);
// console.log(findAnagram);

// 4. Find one extra character
// let s1 = "abcd", s2 = "badce", s1_sum = 0, s2_sum = 0

// for(a of s1){
//     s1_sum += a.charCodeAt()

// }

// for(a of s2){
//     s2_sum += a.charCodeAt()

// }

// let subExtraChar = s2_sum - s1_sum

// console.log(subExtraChar)

// console.log(String.fromCharCode(subExtraChar))

// 5. Print alphabets

// function printAlphabets(c1, c2) {
//   // convert inputs to ascii code
//   // initiate a loop based on ascii code
//   // convert ascii code to character on each iteration

//   let c1_ascii = c1.charCodeAt();
//   let c2_ascii = c2.charCodeAt();
//   let alphabets = [];

//   for (c1_ascii; c1_ascii <= c2_ascii; c1_ascii++) {
//     alphabets.push(String.fromCharCode(c1_ascii));
//   }

//   return alphabets;
// }

// let c1 = "a",
//   c2 = "z";

// const alphabets = printAlphabets(c1, c2);
// console.log(alphabets.join(" "));

// 6. Binary to decimal

// function binaryToDecimal(n) {
//   let sum = 0,
//     power = 0,
//     result;

//   for (let i = n.length - 1; i >= 0; i--) {
//     result = 2 ** power * Number(n[i]);
//     sum += result;
//     power++;
//   }

//   return sum;
// }

// let n = 101010;
// n = Array.from(String(n));

// const numberInDecimal = binaryToDecimal(n);
// console.log(numberInDecimal);

// 7. Decimal to Binary

// function decimalToBinary(n) {
//   let binaryNumber = [];

//   while (n > 0) {
//     binaryNumber.push(n % 2);
//     n = Math.floor(n / 2);
//   }

//   return binaryNumber.reverse()
// }

// let n = 13;
// const numberInBinary = decimalToBinary(n);
// console.log(numberInBinary.join(""));

// 8. Substring
// function subString(str, l, r) {
//   let subSt = [];

//   for (l; l <= r; l++) {
//     subSt.push(str[l]);
//   }

//   return subSt;
// }

// const str = "cdbkdub";

// let L = 0,
//   R = 5;
// const subStr = subString(str, L, R);
// console.log(subStr.join(""));

// 9. Implement strstr
/*

Your task is to implement the function strstr. 
The function takes two strings as arguments (s,x) and 
locates the occurrence of the string x in the string s.
The function returns an integer denoting the first occurrence of the string x in s (0 based indexing).

*/

// function strstr(s, x) {
//   let i, j;

//   for (i = 0; i < s.length; i++) {
//     for (j = 0; j < x.length; j++) {
//       if (s[i + j] !== x[j]) break;
//     }

//     if (j === x.length) break;
//   }
//   if (j == x.length) {
//     return i;
//   } else {
//     return -1;
//   }
// }

// let s = "GeeksForGeeks",
//   x = "For";
// const indexOfPresentString = strstr(s, x);
// console.log(indexOfPresentString);

// 10. Reverse of a string

// function reverseStr(str){
//     let revArr = []

//     for(let i = str.length-1; i >= 0; i--){
//         revArr.push(str[i])
//     }

//     return revArr

// }

// const str = "Hello"
// const afterReverse = reverseStr(str)
// console.log(afterReverse.join(""))

// 11. Pangram Checking - A panagram contains all the letters of english alphabet at least once.

// function panagram(str) {
//   let alphabets = [];
//   for (let i = 65; i <= 90; i++) {
//     alphabets.push(String.fromCharCode(i));
//   }

//   for (let i = 97; i <= 122; i++) {
//     alphabets.push(String.fromCharCode(i));
//   }

//   alphabets = alphabets.join("")
//   console.log(alphabets)

//   return str.includes(alphabets);
// }

// const str = "Thequickbrownfoxjumpsoverthelazydog";
// const pangramCheck = panagram(str);
// console.log(pangramCheck);

// 12. Count Words in String

// const str = "Geeks Geeks Geeks"
// let count = 1

// for(let i = 0; i < str.length; i++){
//     if(str[i] == " "){
//         count++
//     }

// }

// console.log(count)

// 13. Palindrome String

// function isPalindrome(str){
//     let reverseStr = str.split("").reverse().join("")

//     if(str === reverseStr){
//         return 1
//     } else{
//         return 0
//     }

// }

// let str = "abba"

// const checkPalindrome = isPalindrome(str)
// console.log(checkPalindrome)

// 14. Slice The String

// function sliceTheString(str){
//     const sliceStr = str.split("").slice(1, -1).join("")
//     return sliceStr

// }

// let str = "World"
// const slice = sliceTheString(str)
// console.log(slice)

// 15. Check if array is sorted

// function arraySortedOrNot(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] > arr[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// const arr = [10, 20, 30, 40, 50];
// const isArraySorted = arraySortedOrNot(arr);
// console.log(isArraySorted);

// 16. Search element in an array

// function searchElement(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return i;
//     }
//   }

//   return -1;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// const x = 5;
// const isElementPresent = searchElement(arr, x);
// console.log(isElementPresent);

// 17. Count the Zeros

// function countTheZeros(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count += 1;
//     }
//   }

//   return count;
// }

// const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
// const totalZeros = countTheZeros(arr);
// console.log(totalZeros);

// 18. Average

// function averageOfNumbers(arr) {
//   let sum = 0,
//     count = 0,
//     average;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//       count += 1;
//     }
//   }

//   average = count === 0 ? 0 : Math.floor(sum / count);

//   return average;
// }

// const arr = [-12, 8, -7, 6, 12, -9, 14];
// const average = averageOfNumbers(arr);
// console.log(average);

// 19. Largest element in Array

// function largestElement(arr) {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// const arr = [1, 2, 0, 13, 3, 2, 4, 5];

// const largest = largestElement(arr);
// console.log(largest);

// 20. Remove vowels from String

// function removeVowels(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let result = "";

//   for (char of string) {
//     if (!vowels.includes(char.toLowerCase())) {
//       result += char;
//     }
//   }

//   return result;
// }
// const string = "The quick browm fox jumps over the lazy dog";
// const afterRemovingString = removeVowels(string);
// console.log(afterRemovingString);

// 21. Mask the last 4 characters with #

// function maskTheCharacter(str, digitsToMask) {
//   const hash = "#".repeat(digitsToMask);
//   str = str.slice(0, -digitsToMask) + hash;
//   return str;
// }

// const str = "123456789987654321";
// const digitsToMask = 4;
// const maskLast4 = maskTheCharacter(str, digitsToMask);
// console.log(maskLast4);

// 22. Generate secret code from a string

// function encryption(str) {
//   let charToAscii,

//     finalStr = "";
//   for (char of str) {
//     charToAscii = char.charCodeAt() + 2;
//     finalStr += String.fromCharCode(charToAscii);
//   }

//   return finalStr
// }

// const str = "prakash";
// const encryptedStr = encryption(str);
// console.log(encryptedStr);

// 23. Sub string exp:- //const str = "prakash_sakari"; -> p, pr, pra, prak, ra, Įra

// function subStringCombinations(str) {
//   let line = "";

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       console.log(str.slice(i, j));

//     }
//     break
//   }
// }

// const str = "Sourav";
// const strCombinations = subStringCombinations(str);
// console.log(strCombinations);

// 24. Odd to even vice vers

// function oddToEvenViceVersa(arr){

//     const result = arr.map((el) => el % 2 === 0 ? el -1 : el + 1)

//     return result
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const conversion = oddToEvenViceVersa(arr)
// console.log(conversion)

// 25. Sum of numbers less than 40

// function sumLessThan40(arr) {
//   let initialValue = 0;

//   const result = arr.reduce(
//     (acc, currentValue) => (currentValue < 40 ? acc + currentValue : acc),
//     initialValue
//   );
//   return result;
// }

// const arr = [10, 17, 61, 54, 44, 32, 39, 23];
// const sum = sumLessThan40(arr);
// console.log(sum);

// 26. Return Array of Names From An Object - Chaining Methods

// function filteredSeniorEmployees(employees){

//     const result = employees.filter(emp => emp.numOfYears > 3).map(emp => emp.name)

//     return result

// }

// const employees = [
//     {
//         name: "Prakash",
//         numOfYears: 5
//     },
//     {
//         name: "Ashish",
//         numOfYears: 3
//     },
//     {
//         name: "Riya",
//         numOfYears: 1
//     },
//     {
//         name: "Jay",
//         numOfYears: 1
//     },
//     {
//         name: "Chinmoy",
//         numOfYears: 5
//     }
// ]

// const seniorEmployees = filteredSeniorEmployees(employees)
// console.log(seniorEmployees)

/**
* 27.  Given an array write a function that returns an object with sum of even and odd numbers
* arr= [1, 2, 3, 4, 5, 6]
* OUTPUT = {even: 12, odd: 9}

*/

// function sumEvenAndOdd(arr) {
//   const result = arr.reduce(
//     (acc, curr) =>
//       curr % 2 === 0
//         ? { ...acc, even: acc.even + curr }
//         : { ...acc, odd: acc.odd + curr },
//     { even: 0, odd: 0 }
//   );

//   return result
// }

// const arr = [1, 2, 3, 4, 5, 6];
// const sumOddEven = sumEvenAndOdd(arr);
// console.log(sumOddEven);

// 28.Find Average Age of Family Members

// function calculateAge(familyMembers) {
//   const totalAge = familyMembers.reduce((acc, cur) => acc + cur.age, 0);

//   return totalAge / familyMembers.length;
// }

// const familyMembers = [
//   {
//     name: "Narsingrao",
//     age: 56,
//   },
//   {
//     name: "Padma",
//     age: 52,
//   },
//   {
//     name: "Poonam",
//     age: 30,
//   },
//   {
//     name: "Prakash",
//     age: 27,
//   },
//   {
//     name: "Ashish",
//     age: 50,
//   },
// ];

// const averageAgeOfFamily = calculateAge(familyMembers);
// console.log(averageAgeOfFamily);


// 29. 
/*
Count occurence of distinct elements
Output: {a:2, b:2,c:2,d:1,e:1,f:1}
*/



function countOccurence(arr){
    

}

const arr = [
"a", "b", "c",
"c", "d", "e",
"b", "f", "a"
]

const occurence = countOccurence(arr)
console.log(arr)