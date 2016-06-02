var arr = [1,2,1,0,3];

var findZeroIndex = function (arr) {
  var result = [];
  arr.forEach(function(number, index) {
    if (number === 0) {
      result.push(index);
    } else {
      var foundZeroGoingUp = false;
      var foundZeroGoingDown = false;
      var upIndex = index;
      var downIndex = index;
      var steps = number;

      while (steps > 0) {
        upIndex++;
        downIndex--;
        steps--;
        
        if (upIndex < arr.length && arr[upIndex] === 0) {
          foundZeroGoingUp = true;
        } else if (downIndex >= 0 && arr[downIndex] === 0) {
          foundZeroGoingDown = true;
        }
      }

      if (foundZeroGoingUp || foundZeroGoingDown) {
        result.push(index);
      }
    }
  });

  return result;
};

console.log(findZeroIndex(arr));