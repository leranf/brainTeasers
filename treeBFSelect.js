/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(val) {
  this.val = val;
  this.children = [];
}

Tree.prototype.BFSelect = function(filter) {
  var queue = [];
  var result = [];

  queue.push(this);

  while (current = queue.shift()) {
    current.children.forEach(function(child) {
      queue.push(child);
    });

    if (filter(current)) {
      result.push(current.val);
    }

  };

  return result;
};