// given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

var integerBreak = function(n) {
  var largestProduct;

  var half = Math.floor(n/2);
  if (half * 2 === n) {
    largestProduct = half * half;
  } else {
    largestProduct = half * (n - half);
  }

  var findLargestProduct = function(current, sumLeft, product) {
    if (sumLeft === 0) {
      if (product > largestProduct) {
        largestProduct = product;
      }
      return;
    } else if (sumLeft < 0) {
      return;
    }

    var options = [];
    var num = current;
    while (num > 1) {
      options.push(num);
      num--;
    }

    for (var i = 0; i < options.length; i++) {
      findLargestProduct(options[i], sumLeft - options[i], product * options[i]);
    }

  }

  findLargestProduct(half - 1, n, 1);

  return largestProduct;
};

var result = integerBreak(3);
console.log(result);
