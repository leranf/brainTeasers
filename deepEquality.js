/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 
function deepEquals(obj1, obj2) {
  for (var key in obj1) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!deepEquals(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      } 
    }
  }
  return true;  
}

console.log(deepEquals({a:1, b: {c:3, d:{a:2}}},{a:1, b: {c:3, d:{a:2}}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
