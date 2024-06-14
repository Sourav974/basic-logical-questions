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
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}

// const str = "Sourav";
// const reverse = reverseStr(str);
// console.log(reverse);

/*
* 

* Q4: Arrange the words in the sentence in ascending order of their length
* Input - gfg is a comp science learning platform
* Output - a is gfg comp science learning platform
*/

function bubbleSort(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length - i - 1; j++) {
      if (str[j].length > str[j + 1].length) {
        let temp = str[j];
        str[j] = str[j + 1];
        str[j + 1] = temp;
      }
    }
  }

  return str;
}

function arrangeWords(str) {
  str = str.trim().split(" ");

  // Bubble sort
  return bubbleSort(str);
}

// const str = "gfg is a comp science learning platform";
// const wordsInAscending = arrangeWords(str);
// console.log(wordsInAscending);

// 5. Reverse of a words of a string without changing their order

function reverseWords(str) {
  let arrOfWords = str.split(" ");

  const reversedArrOfWords = arrOfWords.map((word) =>
    word.split("").reverse().join("")
  );

  return reversedArrOfWords.join(" ");
}

// const str = "react is a library";
// const reverse = reverseWords(str);
// console.log(reverse);

/* Most important question
 * 6. Count frequency of all numbers in an array, return the
 * number with the max frequency, if 2 or more numbers have
 * the same max freq then return the number with highest number
 */

function getNumberWithMaxFrequency(arr) {
  let maxCount = 0,
    maxKey = 0;
  let arrOfMaxFreqKeys = [];

  // Count frquency of all the numbers
  const numberFreqObj = arr.reduce(
    (acc, cur) =>
      cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
    {}
  );

  // highest frequency
  const arrOfKeyValue = Object.entries(numberFreqObj);

  for (let [_, value] of arrOfKeyValue) {
    if (maxCount < value) {
      maxCount = value;
    }
  }

  // Collect the numbers with highest frquency
  for (let [key, value] of arrOfKeyValue) {
    if (maxCount === value) {
      arrOfMaxFreqKeys = [...arrOfMaxFreqKeys, key];
    }
  }

  // Determine the largest number from among frequencies
  for (let key of arrOfMaxFreqKeys) {
    if (maxKey < key) {
      maxKey = key;
    }
  }

  return maxKey;
}

const arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5];
const frequency = getNumberWithMaxFrequency(arr);
console.log(frequency);
