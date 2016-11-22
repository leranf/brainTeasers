var findMedianSortedArrays = function(nums1, nums2) {
  var low_1 = nums1[0];
  var low_2 = nums2[0];
  var high_1 = nums1[nums1.length - 1];
  var high_2 = nums2[nums2.length - 1];
  var trueLow = low_1 < low_2 ? low_1 : low_2;  
  var trueHigh = high_1 > high_2 ? high_1 : high_2;
  return (trueLow + trueHigh) / 2;
};