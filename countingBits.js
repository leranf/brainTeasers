// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's
// in their binary representation and return them as an array.
// TC/SC O(n)

var countOnes = function(num) {
  var count = 0;
  
  var createBit = function (left, bit) {
    if (left === 0) {
      if (bit === undefined) {
        return 0;
      }
      return count;;
    } else if (left === 1) {
      if (bit === undefined) {
        return 1;
      }
      count++;
      return count;
    }
    
    bit = bit || [];
    var num = Math.floor(Math.log(left)/Math.log(2));
    count++;
    return createBit(left - Math.pow(2, num), bit);
    
  };

  return createBit(num);

};

var countBits = function(num) {
  var result = [];
  for (var i = 0; i <= num; i++) {
    result.push(countOnes(i));
  }
  return result;
};

console.log(countBits(5));

