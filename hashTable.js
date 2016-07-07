// /**
//  * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
//  * The hashtable does not need to resize but it should still handle collisions.
//  */

// function HashTable() {
//   this.maxSize = 10;
//   this.storage = [];
// };

// HashTable.prototype.insert = function(key, val) {
//   var index = getIndexBelowMaxForKey(key, this.maxSize);
//   var overwritten = false;
//   this.storage[index] = this.storage[index] || [];
//   this.storage[index].forEach(function(tuple) {
//     if (tuple[0] === key) {
//       tuple[1] = val;
//       overwritten = true;
//     }
//   });
//   if (!overwritten) {
//     this.storage[index].push([key, val]);
//   }
// };


// HashTable.prototype.retrieve = function(key) {
//   var index = getIndexBelowMaxForKey(key, this.maxSize);

// };


// HashTable.prototype.remove = function(key) {
//   var index = getIndexBelowMaxForKey(key, this.maxSize);

// };




// // This is a "hashing function". You don't need to worry about it, just use it
// // to turn any string into an integer that is well-distributed between
// // 0 and max - 1
// var getIndexBelowMaxForKey = function(str, max){
//   var hash = 0;
//   for (var i = 0; i < str.length; i++) {
//     hash = (hash<<5) + hash + str.charCodeAt(i);
//     hash = hash & hash; // Convert to 32bit integer
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// };
// 
// 


