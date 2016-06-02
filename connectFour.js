var checkforFour = function(i, j, color, board) {
  // check horizontal
  var count = 0;
  var x = i;
  var y = j;
  while (y < board[0].length && board[x][y] === color) {
    y++;
    count++;
    if (count === 4) {
      return true;
    }
  }
  // check vertical
  count = 0;
  x = i;
  y = j;
  while (x < board.length && board[x][y] === color) {
    x++;
    count++;
    if (count === 4) {
      return true;
    }
  }
  // check front diagonal
  count = 0;
  x = i;
  y = j;
  while (x < board.length && y < board[0].length && board[x][y] === color) {
    x++;
    y++;
    count++;
    if (count === 4) {
      return true;
    }
  }
  // check back diagonal
  count = 0;
  x = i;
  y = j;
  while (x < board.length && y >= 0 && board[x][y] === color) {
    x++;
    y--;
    count++;
    if (count === 4) {
      return true;
    }
  }
  return false;
}

var hasWon = function(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      var current = board[i][j];
      if (checkforFour(i, j, current, board)) {
        return current + ' has won';
      }
    }  
  }
  return 'no winner';
};



// var options = ['black', 'red'];
// var board = [];
// for (var i = 0; i < 6; i++) {
//   for (var j = 0; j < 7; j++) {
//     board[i] = board[i] || [];
//     var num = Math.floor(Math.random()*2);
//     board[i][j] = options[num];
//   }
// }

// console.log(hasWon(board));




