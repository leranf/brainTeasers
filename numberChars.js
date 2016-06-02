// "asss55sdd" => "1a3s251s2d"

var numberString = function(string) {
  var resultString = '';
  var lastChar = string[0];
  var counter = 1;
  
  for (var i = 1; i < string.length; i++) {
    if (lastChar === string[i]) {
      counter++;
    } else {
      resultString += counter + lastChar;
      lastChar = string[i];
      counter = 1;
    }
  }

  resultString += counter + lastChar;
  
  return resultString;
};

console.log(numberString('asss55sdd'));