var TreeNode = function (val) {
 this.val = val;
 this.children = [];
};

TreeNode.prototype.addChild = function(val) {
  var child = new TreeNode(val);
  this.children.push(child);
  return child;
};

var Queue = function() {
  this.storage = [];
}

Queue.prototype.enqueue = function(val) {
  this.storage.push(val);
};

Queue.prototype.dequeue = function() {
  return this.storage.shift();
};

var getNodes = function(root) {
  var result = {};
  var queue = new Queue();
  var total1 = 0;
  var total2 = 0;

  queue.enqueue({node: root, depth: 0});

  while (item = queue.dequeue()) {
    var tree = item.node;
    var depth = item.depth;
    result[depth] = result[depth] || [];
    result[depth].push(tree.val);

    for (var i = 0; i < tree.children.length; i++) {
      queue.enqueue({node: tree.children[i], depth: depth + 1});
    }
  }

  var start = 0;
  while (result[start]) {
    var values = result[start];
    for (var i = 0; i < values.length; i++) {
      total1 += values[i];
    }
    start += 2;
  }
  
  start = 1;
  while (result[start]) {
    var values = result[start];
    for (var i = 0; i < values.length; i++) {
      total2 += values[i];
    }
    start += 2;
  }
  
  if (total1 > total2) {
    return total1;
  } else {
    return total2;
  }
}

var threeRoot = new TreeNode(3);
var twoChild = threeRoot.addChild(4);
var threeChild = threeRoot.addChild(5);
twoChild.addChild(1);
twoChild.addChild(3);
threeChild.addChild(1);

console.log(getNodes(threeRoot));