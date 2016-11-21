// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// function twoSum(nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

function twoSum(nums, target) {
  var possibilities = {};
  for (var i = 0; i < nums.length; i++) {
    possibilities[nums[i]] = i;
  }
  for (var i = 0; i < nums.length; i++) {
    var diff = target - nums[i];
    if (possibilities.hasOwnProperty(diff) && possibilities[diff] !== i) {
      return [i, possibilities[diff]];
    }
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));