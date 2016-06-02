/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function(arr, val) {

  var recurse = function(low, high) {
    var index = Math.floor((low + high) / 2);
    if (arr[index] === val) {
      return index;
    } else if (low === high) {
      return null;
    } else if (arr[index] < val) {
      return recurse(index + 1, high);
    } else if (arr[index] > val) {
      return recurse(low, index - 1);
    }
  }

  return recurse(0, arr.length - 1);

};

var index = binarySearch([1, 2, 3, 4, 5, 7, 9, 23, 45, 67], 67);
console.log(index); // 3