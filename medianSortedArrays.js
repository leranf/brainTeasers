var findMedianSortedArrays = function(nums1, nums2) {
  var finalArray = [];
  if (nums1.length && nums2.length) {
    if (nums1[nums1.length - 1] <= nums2[0]) {
      finalArray = nums1.concat(nums2);
    } else if (nums2[nums2.length - 1] <= nums1[0]) {
      finalArray = nums2.concat(nums1);
    } else {
      var currIndex1 = 0;
      var currIndex2 = 0;
      while (nums1[currIndex1] !== undefined && nums2[currIndex2] !== undefined) {
        if (nums1[currIndex1] < nums2[currIndex2]) {
          finalArray.push(nums1[currIndex1++]);
        } else if (nums1[currIndex1] > nums2[currIndex2]) {
          finalArray.push(nums2[currIndex2++]);
        } else {
          finalArray = finalArray.concat([nums1[currIndex1++], nums2[currIndex2++]])
        }
      }
      finalArray = nums1[currIndex1] !== undefined ? finalArray.concat(nums1.slice(currIndex1)) : finalArray.concat(nums2.slice(currIndex2));
    }
  } else {
    finalArray = nums1.length ? nums1 : nums2;
  }

  if (finalArray.length % 2) {
    var index = Math.floor(finalArray.length / 2);
    return finalArray[index]; 
  } else {
    var topMidIndex = finalArray.length / 2;
    var bottomMidIndex = topMidIndex - 1;
    return (finalArray[topMidIndex] + finalArray[bottomMidIndex]) / 2; 
  }
};

console.log(findMedianSortedArrays([0,1,2,6], [0,1,2,3,4,5,6,7]));