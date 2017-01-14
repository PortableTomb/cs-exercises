const FixedArray = require('./fixed_array');

class DynamicArray {
  constructor(length) {
    this.length = length;

    // Initialize the array for twice the length
    this.array = new FixedArray(length * 2);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    return this.array.get(index);
  }

  set(index, item) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    this.array.set(index, item);
  }
  // Compare this.length to this.array.length
  // Implement a method push that takes in one argument, item (a number), it
  // adds the item to the end of the array, copying it to a new FixedArray if
  // necessary. There is no need to return anything.
  push(item) {
    if(this.length < this.array.length) {
      this.array.set(this.length, item);
      this.length++;
    } else {

    const fA = new FixedArray(this.array.length * 2);

      for(var i = 0; i < this.array.length; i++) {
        fA.set(i, this.array.get(i));
      }
      fA.set(this.array.length, item);
      this.array = fA;
      this.length++;
    }
  }
  // Minus the length, change the index to undefined
  // Decrement length
  // Implement a method pop that does not take in any arguments. It delete the
  // item at the end of the array.
  pop() {
      this.array.set(this.length -1, undefined);
      this.length--;
  }

  // Implement a method del that takes in one argument, index (a number), it
  // deletes the item at that index. There is no need to return anything.
  // starting at index to delete, move items over
  // set last index to undefined
  // decrement the length so that it matches the length of the actual array
  del(index) {
    for (var i = index; i < this.length -1; i++) {
      this.array.set(i, this.array.get(i + 1));
    }
    this.array.set(this.length -1, undefined);
    this.length--;
  }
}

module.exports = DynamicArray;
