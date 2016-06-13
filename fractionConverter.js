/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

function toFraction(num) {
  var divided = String(num).split('.');
  var whole = divided[0];
  var fraction = divided[1];
  if (fraction) {
    var denominator = Math.pow(10, fraction.length);
    for (var i = denominator - 1; i > 1; i--) {
      if (denominator % i === 0 && fraction % i === 0) {
        fraction = fraction / i;
        denominator = denominator / i;
        break;
      }
    }
    whole = whole * denominator;
    return (whole + fraction) + '/' + denominator;
  } else {
    return whole + '/1';
  }
}


console.log(toFraction(3.2));
