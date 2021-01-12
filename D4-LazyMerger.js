// I want you to write a function which takes an array as a parameter.
//  That array will itself contain some number of arrays.
//  I want your function to return an object with one method, called next.
//  Each time someone calls next, it should return the next element from the next array.
// If one array is exhausted you should skip over it to the next array.

// Find the next non-undefined element" is a single operation, which you don't do the same each time
//  And you don't look arbitrarily far ahead in the array,
//  you always look either one or two elements forward, rather than keeping looking until you find one
// So... Work out the general way of finding the next element, and write that, maybe as a method of its own

let example = [[1, 2, 3], [], ["a", "b", "c"], [6, 7, 8, 9]];
function lazyMerger(array) {
  let rowIndex = 0;
  let columnIndex = 0;
  let element;
  const result = {
    next: () => {
      let checked = 0;
      while (checked <= columnIndex) {
        if(array[rowIndex][columnIndex] !== undefined ){
          element = array[rowIndex][columnIndex];
          rowIndex = (rowIndex + 1) % array.length;
          if(rowIndex === 0){
            columnIndex++;
          }
          return element;
        }
        else{
          while(array[rowIndex][columnIndex] === undefined){
            rowIndex = (rowIndex + 1) % array.length;
            if(rowIndex === 0){
              columnIndex++;
            }
          }
        }
        checked++;
      }
      return undefined;
    }
}
  return result;
}
const obj = lazyMerger(example);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());