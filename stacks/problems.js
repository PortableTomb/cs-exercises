// An implementation of a stack with push, pop, peek, and length methods are
// provided for you.
const Stack = require('./stack');

// Write a function named checkParens that takes in the following:
//   - str (a string)
// The function returns true if all matching start parenthesis has a matching
// end parenthesis in proper order. All other characters are ignored.
// Example:
//   checkParens('()') -> true
//   checkParens('(Hello)') -> true
//   checkParens('') -> true
//   checkParens('(') -> false
//   checkParens(')(') -> false (closes before one is open)
//   checkParens('()()') -> true
//   checkParens('(adfa(dvb)') -> false

// Soultion Psdueo Code
// create a stack and store it in a variable
// create two objects — one for all the open parenthesis characters and one for all the closed parenthesis characters
// for the open parentheses map, set the keys to the open parenthesis symbols and the values to the matching closing parenthesis symbol
// for the closed parentheses map, set the the keys to the closed parenthesis symbols and the values to true
// iterate through the characters of the string for each character
// if the character is an open parenthesis character, push the character onto the stack
// else if the character is a closed parenthesis character, then pop off the last opening parenthesis from the stack and compare it’s closing pair to the current character
// if the character is not equal to the required closing parenthesis symbol, then you have an imbalanced string and should return false
// return an equality comparison between the stack length and 0 — if the stack is empty and we have looped through the whole input string, we can assume that we have a balanced string.

function checkParens(str) {

  let stack = [];

  const open = { '{': '}', '[': ']', '(': ')' };
  const closed = { '}': true, ']': true, ')': true };

  for (let i = 0; i < str.length; i ++) {
    const char = str[i];
      if (open[char]) {
        stack.push(char);
        } else if (closed[char]) {

      if (open[stack.pop()] !== char) return false;
      }
    }

  return stack.length === 0;
  }


// Write a function named validate that takes in a string of text
// representing some code filled with parentheses (), brackets [], and
// curly braces {}.
//
// (, {, [ are called "openers."
// ), }, ] are called "closers."
//
// The function returns true if the input strings openers are matched in
// properly nested with the closers.
//
// Examples:
//
// "{ [ ] ( ) }" should return true (properly nested and matched)
// "{ [ ( ] ) }" should return false (closing bracket before closing
// parentheses)
// "{ [ }" should return false (no closing bracket)
// "}" should return false (no opening curly brace)

function validate(str) {

  let stack = [];

  const open = { '{': '}', '[': ']', '(': ')' };
  const closed = { '}': true, ']': true, ')': true };

  for (let i = 0; i < str.length; i ++) {
    const char = str[i];
      if (open[char]) {
        stack.push(char);
        } else if (closed[char]) {

      if (open[stack.pop()] !== char) return false;
      }
    }

  return stack.length === 0;

}

// Write a function called finalText that takes in an array of commands. A
// command is one of the following:
//   * { command: 'write', text: STRING }
//   * { command: 'undo' }
//
// The array of commands follows an order of commands issued to an editor. For
// example, given the following input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' }
// ]
//
// The function would produce 'HelloWorld'. This because we first wrote "Hello", and then we wrote "World" (no spaces or newlines in between)
//
// The undo command undoes the last write command. For example, given:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
// ]
//
// The function would produce just 'Hello'. This is because it wrote the first
// two commands, and then it undo-ed the last write command. You can undo
// multiple times too. For example, given the input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]
//
// The function would produce the empty string (''). This is because it wrote
// the first two commands, and then it undid each command. If there are too
// many undo's throw an error. The following example would throw an error.
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]
function finalText(commands) {
 let stack = [];

 for(cmd of commands) {
   if(cmd.command === 'write'){
     stack.push(cmd.text);
   }

   if(cmd.command === 'undo'){
     if( stack.length === 0){
      throw new Error('error');
       }
     stack.pop();
   }

 }

let str = '';
while(stack.length > 0){
  str = stack.pop() + str;
}

 return str;

}

// Write a function called finalText2 that takes in an array of commands. A
// command is one of the following:
//   * { command: 'write', text: STRING }
//   * { command: 'undo' }
//   * { command: 'redo' }
//
// The difference is the addition of the redo command, which allows the ability
// to redo an action that was undone.
//
// Example: All of the above examples should apply.
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
//   { command: 'redo' }
// ]
// Should produce 'HelloWorld'
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
//   { command: 'redo' }
//   { command: 'undo' }
// ]
// Should produce 'Hello'
//
// Similarly, if there's nothing to redo, the function should throw an error.
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'undo' },
//   { command: 'redo' },
//   { command: 'redo' }
// ]
// Should throw an error.
function finalText2(commands) {
  let stack = [];
  let redostack = [];

  for(cmd of commands) {
    if(cmd.command === 'write'){
      stack.push(cmd.text);
    }

    if(cmd.command === 'undo'){
      if( stack.length === 0){
       throw new Error('error');
        }
      redostack.push(stack.pop());
    }

    if(cmd.command === 'redo'){
      if( redostack.length === 0){
       throw new Error('error');
        }
      stack.push(redostack.pop());
    }
  }
    let str = '';
    while(stack.length > 0){
     str = stack.pop() + str;
    }
    return str;



}

module.exports = {
  checkParens,
  validate,
  finalText,
  finalText2
};
