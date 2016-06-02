var txt = '3\n6\n7\n8';

var sumArr = function(str) {
  var nums = str.split('\n').splice(1);
  return nums.reduce(function(total, current, index) {
    return Number(total) + Number(current);    
  });
};

console.log(sumArr(txt));