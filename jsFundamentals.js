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

const str = "Geeks Geeks Geeks"
let count = 1

for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
        count++
    }

}

console.log(count)

