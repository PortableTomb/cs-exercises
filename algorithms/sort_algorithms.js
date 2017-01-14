'use strict'

function swap(arr, idx1, idx2) {
  var temp = arr[idx1]
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  var done = false;
    while (!done) {
        done = true;
        for (var index = 1; index < arr.length; index++) {
            if (arr[index-1] > arr[index]) {
                done = false;
                swap(arr, index-1, index);
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
 for(var index = 0; index < arr.length; index++) {
   var min = index;
   for (var k = index+1; k < arr.length; k++) {
     if(arr[k] < arr[min]){
       min = k;
     }
   }
   swap(arr, index, min);
 }
  return arr;
};

function insertionSort(arr) {
  var length = arr.length;
  for(var i = 1; i < length; ++i) {
    var temp = arr[i];
    var j = i - 1;
    for(; j >= 0 && arr[j] > temp; --j) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}

function merge(arr1, arr2) {
  var merged = [],
      aElm = arr1[0],
      bElm = arr2[0],
      i = 1,
      j = 1;

  if(arr1.length ==0)
    return b;
  if(arr2.length ==0)
    return a;
  /*
  if arr1 or bElm exists we will insert to merged array
  (will go inside while loop)
   to insert: aElm exists and bElm doesn't exists
             or both exists and aElm < bElm
    this is the critical part of the example
  */
  while(aElm || bElm){
   if((aElm && !bElm) || aElm < bElm){
     merged.push(aElm);
     aElm = arr1[i++];
   }
   else {
     merged.push(bElm);
     bElm = arr2[j++];
   }
  }
  return merged;
}

// }

function partition(arr, left, right) {

}

function mergeSort(arr) {
  if (arr.length < 2)
         return arr;

     var middle = parseInt(arr.length / 2);
     var left   = arr.slice(0, middle);
     var right  = arr.slice(middle, arr.length);

     return merge(mergeSort(left), mergeSort(right));
 // }

 function merge(left, right) {
     var result = [];

     while (left.length && right.length) {
         if (left[0] <= right[0]) {
             result.push(left.shift());
         } else {
             result.push(right.shift());
         }
     }

     while (left.length)
         result.push(left.shift());

     while (right.length)
         result.push(right.shift());

     return result;
 }
}

function quickSort(arr) {

}

module.exports = {
  swap,
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  partition,
  mergeSort,
  quickSort
};
