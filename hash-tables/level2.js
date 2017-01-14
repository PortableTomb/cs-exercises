'use strict';

/*
Create a function named reverseMerge.
It takes two arguments "keyArr" and "valArr" both of type Array.
It will return a hash that is a merge between the two inputs where
the values in keyArr will be the hashes key and
the values in valArr will be the hashes value.
The catch is that the values from the valArr will be assigned in from last to first.

i.e.
keyArr = [a, b, c];
valArr = [1, 2];
output => {a: 3, b: 2, c: 1}

*/

const reverseMerge = (keyArr, valArr) => {
  let newObj = {};

  while(keyArr.length > valArr.length) {
    valArr.push(42);
  }

  for(let i =0; i < keyArr.length; i ++) {
    let key = keyArr[i];
    let value = valArr[ valArr.length -1 -i];
    newObj[key] = value;
  }

  if (valArr.length > keyArr.length) {
    newObj.foo = valArr.slice(0, valArr.length - keyArr.length).reverse()
  }

return newObj;
}


/*

Create a function named mostUsedWord.
It takes a single argument "sentence" of type string.
It will return an object with a single key-value pair.
The key will be the word with the highest occurance in the string.
The value will the the number of occurances of that word in the string.

*/

const mostUsedWord = (sentence) => {
var splitSentnce = sentence.toLowerCase().split(" ");
var charCounts = {};
var maxKey = '';
for(var i = 0; i < splitSentnce.length; i++)
{
    var key = splitSentnce[i];
    if(!charCounts[key] ){
      charCounts[key] = 0
    }
    charCounts[key]++;
    if(maxKey === '' || charCounts[key] > charCounts[maxKey]){
        maxKey = key;
    }
}
  var result = {};
  result[maxKey] = charCounts[maxKey];
 return result;
// const keys = Object.keys(obj)
//
// const max = Math.max.apply(Math, keys.map(function(key) {
//   console.log(obj[key]);
//   return obj[key];
// })),
//
//   result = keys.filter(function(key) {
// 	if (obj[key] === max) {
//     return sentence;
//   };
// });

}


/*

Write a function, isAnagram.
It takes a two arguments "test" and "original", both of type string.
It returns TRUE if the words are anagrams of one another and FALSE if it is not.

*/

const isAnagram = (test, original) => {
  let arr = [];

  for (let i = 0; i < test.length; i++) {
    const index = test.charCodeAt(i)-97;
    arr[index] = (arr[index] || 0) + 1;
  }

  for (let i = 0; i < original.length; i++) {
    let index = (original.charCodeAt(i)-97);
    if (!arr[index]) {
      return false;
    }
      arr[index]--;
  }

  return true;
}

module.exports = { reverseMerge, mostUsedWord, isAnagram };
