var NestedIterator = function(nestedList) {
  this.list = nestedList;
  this.listIndex = 0;
  this.nestedIndex = 0;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.list[this.listIndex] !== undefined;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  var result = [];
  var recurse = function(value) {
    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        recurse(value[i]);
      }
    } else {
      result.push(value);
    }
  };

  recurse(this.list[this.listIndex]);
  var returnValue = result[this.nestedIndex];
  if (result[this.nestedIndex+1] !== undefined) {
    this.nestedIndex++;
  } else {
    this.nestedIndex = 0;
    this.listIndex++;
  }
  return returnValue;
};

 // Your NestedIterator will be called like this:

// var nestedList = [[1,1],2,[1,1]];
var nestedList = [1,[4,[6]]];
var i = new NestedIterator(nestedList), a = [];
while (i.hasNext()) a.push(i.next());
console.log(a);
