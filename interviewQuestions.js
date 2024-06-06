// 1. Write a program to remove duplicates from an array

// function removeDuplicates(arr) {
//   let distinctEl = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (distinctEl.indexOf(arr[i]) == -1) {
//       distinctEl.push(arr[i]);
//     }
//   }
//   return distinctEl;

//   //   for (let i = 0; i < arr.length; i++) {
//   //     let count = 0;

//   //     for (let j = i + 1; j < arr.length; j++) {
//   //       if (arr[i] === arr[j]) {
//   //         count += 1;
//   //       }
//   //     }

//   //     if (count < 1) {
//   //       distinctEl.push(arr[i]);
//   //     }
//   //   }

//   //   return distinctEl;
// }

// function removeDuplicatesWithSets(arr) {
//   return Array.from(new Set(arr));
// }

// const arr = [1, 2, 2, 4, 5, 1];
// const remDuplicate = removeDuplicates(arr);
// console.log(remDuplicate);

// 2. Find longest word in a sentence

// function findLongestWord(str) {
//   let longestWord = str.split(" ");
//   let max = ""

//   for(let i = 0; i < str.length; i++){
//     if(max.length < longestWord.length){
//         max = longestWord[i]
//     }

//   }

//   return max;
// }

// const str = "I am Sourav Yadav and I am Unstoppable";
// const longestWord = findLongestWord(str);
// console.log(longestWord);

// 3. Find reverse of a string without a inbuilt method

function reverseStr(str) {
  let revStr = "";
  for (let i = str.length-1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}

const str = "Sourav";
const reverse = reverseStr(str);
console.log(reverse);
