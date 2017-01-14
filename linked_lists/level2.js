// Write a function named insertInBack that takes in the following:
//   value (a number)
//   list (a linked list)
// The function returns the linked list with the node inserted at the end.
// Example:
//    insertInBack(1 -> 2 -> 3 -> ., 4) produces 1 -> 2 -> 3 -> 4 -> .
function insertInBack(value, list) {
  // Inserts an item to the end of a empty linked list
  if(list === null ) {
    return {next:list, value: value}
  }
  return {
    value: list.value,
    next:  insertInBack(value, list.next)
  }

}

// Write a function named removeNodeAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the linked list with the node at that index removed.
// Example:
//  removeNodeAtIndex(1 -> 2 -> 3 -> ., 1) produces 1 -> 3 -> .
function removeNodeAtIndex(list, index) {
  let i = 0;
    for(let linkedList = list; linkedList; linkedList = linkedList.next) {
      if (i + 1 === index) {
        linkedList.next = linkedList.next.next;
      }
      i++;
    }
    return list;
    }

// Write a function named reverse that takes in the following:
//   list (a linked list)
// The function returns a NEW linked list with the items in reverse order.
// Example:
//   1 -> 2 -> 3 -> . would produce 3 -> 2 -> 1 -> .
function reverse(list) {

  var currNode = list, prevNode = temp = null;

   while(currNode != null) {
      temp = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = temp;
   }
   return prevNode ;
 }
// }

module.exports = {
  insertInBack,
  removeNodeAtIndex,
  reverse
};
