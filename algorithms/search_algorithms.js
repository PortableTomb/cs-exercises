'use strict'

const linearSearch = function(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}
linearSearch([1,5,-2,3,-7,19,4,9], 4);


const binarySearch = function(array, value) {
  var lo = 0;
  var hi = array.length;

  while(lo <= hi) {
    var mid = Math.floor(lo + (hi - lo) / 2);

    if( array[mid] === value){
      return mid;
    } else if( array[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
   return -1;
}
binarySearch([1,2,3,4,5,6,7,8,9,10], 4);
module.exports = { linearSearch, binarySearch };
