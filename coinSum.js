/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// var makeChange = function(amount) {
//   var count = 0;
//   var options = {};
//   var coins = [1, 2, 5, 10, 20, 50, 100, 200];

//   var permutations = function(left, group) {
//     if (left === 0) {
//       group.sort();
//       if (options[JSON.stringify(group)]) {
//         return;
//       }
//       options[JSON.stringify(group)] = true;
//       count++;
//       return;
//     } else if (left < 0) {
//       return;
//     }

//     coins.forEach(function(coin) {
//       permutations(left - coin, group.concat(coin));
//     });
//   };

//   permutations(amount, []);
//   return count;;

// };

var makeChange = function(total){
  var output = 0;
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

  (function recurse (index, tot) {
    var currentDenomination = denominations[index];
    if (index === 0) {
      // support a lowest currency that is not 1
      tot % currentDenomination === 0 && output++;
      return
    }
    while (tot >= 0) {
      recurse(index-1, tot);
      tot -= currentDenomination;
    }
  })(denominations.length-1, total);

  return output;
};

// console.log(makeChange(25));



