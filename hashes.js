var hashString = function(n) {
  var spaces = [];
  for (var i = 0; i < n-1; i++) {
    spaces.push(' ');
  }
  var hashes = '';
  var count = n;
  while (count > 0) {
    hashes += '#';
    count--;
    console.log(spaces.join('') + hashes);
    spaces.splice(0,1);
  }
};

hashString(10);