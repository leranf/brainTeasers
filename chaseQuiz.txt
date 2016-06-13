function maxRangeSum (str) {
  var gains = str.split(' ').slice(1);
  var highest = 0;
  var current = 0;
  gains.forEach(function(gain, i) {
    if (Number(gain) > 0) {
      current += Number(gain);
    } else {
      if (gains[i+1]) {
        if (current + Number(gain) + Number(gains[i+1]) > current) {
          current += Number(gain);
        } else {
          current = 0;
        }
      }
    }
    if (current > highest) {
      highest = current;
    }
  });
  return highest;
}

function textDollar(number) {
  var numberOfSegments = {
    2: 'Thousand',
    3: 'Million'
  };

  var nums = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };

  var teens = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen'
  };

  var tens = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Fourty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety'
  };

  function parsing(numbers) {
    var result = '';
    if (!Number(numbers[0]) && !Number(numbers[1]) && !Number(numbers[2])) {
      return false;
    }

    if (numbers.length === 3) {
      if (nums[numbers[0]]) {
        result += nums[numbers[0]] + 'Hundred';
      }
      if (nums[numbers[1]]) {
        if (tens[numbers[1]]) {
          result += tens[numbers[1]];
          if (nums[numbers[2]]) {
            result += nums[numbers[2]];
          }
        } else {
          result += teens[numbers[1] + numbers[2]];
        }
      } else {
        result += nums[numbers[2]];
      }
    } else if (numbers.length === 2) {
      if (tens[numbers[0]]) {
        result += tens[numbers[0]];
        if (nums[numbers[1]]) {
          result += nums[numbers[1]];
        }
      } else {
        result += teens[numbers[0] + numbers[1]];
      }
    } else {
      result = nums[numbers[0]];
    }
    return result;
  };

  function seperate(arr) {
    if (arr.length < 3) {
      segments.unshift(arr.splice(0));
      return;
    } 
    segments.unshift(arr.splice(-3));
  };

  var result = '';
  var numbers = number.split('');
  var segments = [];
  var currentSegment = undefined;

  while (numbers.length) {
    seperate(numbers);
  }

  var currPlace = segments.length;
  if (numberOfSegments[currPlace]) {
    currentSegment = numberOfSegments[currPlace];
  }

  if (currentSegment) {
    var i = 0;
    while (currentSegment = numberOfSegments[currPlace--]) {
      if (parsing(segments[i])) {
        result += parsing(segments[i++]) + currentSegment;
      }
    }
    if (parsing(segments[i])) {
      result += parsing(segments[i]);
    }
  } else {
    return parsing(segments[0]);
  }

  return result;
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  input = input.split('\n');
  input.forEach(function(num) {
    console.log(textDollar(num) + 'Dollars');
  })
});
