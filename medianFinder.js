var MedianFinder = function() {
  this.storage = [];
};

// Adds a num into the data structure.
MedianFinder.prototype.addNum = function(num) {
  this.storage.push(num);
  this.storage.sort();
};

// Return median of current data stream
MedianFinder.prototype.findMedian = function() {
  if (this.storage.length % 2 === 0) {
    var lower = this.storage[this.storage.length/2 - 1];
    var upper = this.storage[this.storage.length/2];
    return (lower + upper) / 2;
  }
  return this.storage[Math.floor(this.storage.length/2)];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */

var mf = new MedianFinder();
mf.addNum(1);
mf.addNum(3);
mf.addNum(4);
mf.addNum(2);
mf.addNum(5);
console.log(mf);

var result = mf.findMedian();
console.log(result);