// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


function multiply (a, b) {
  var count = b;
  var total = 0;
  while (count) {
    total += a;
    count--;
  }
  return total;
}

function divide (a, b, decimal) {
  var count = 0;
  var total = a;
  while (total > 0) {
    if (total - b >= 0) {
      total -= b;
      count++;
    } else {
      if (decimal) {
        var numerator = multiply(total, 10000);
        return count + '.'+ String(divide(numerator, b, false));
      } else {
        count = String(count);
        if (Number(count[3]) >= 5) {
          var lastNum = Number(count[2]) + 1;
          return count.slice(0,2).concat(lastNum);
        }
        return count.slice(0,3);
      }
    }
  }
  return count;
}

function modulo (a, b) {
 var total = a;
 while (total > 0) {
   total -= b;
 }
 return total < 0 ? Math.abs(total) : 0;
}

console.log(modulo(6,3));

