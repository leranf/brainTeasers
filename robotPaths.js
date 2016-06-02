/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var Board = function() {
  var board = [];
  for (var i = 0; i < 5; i++) {
    board.push([0,0,0,0,0]);
  }
  return board;
};

var robotPaths = function() {
  var count = 0;

  var constructPath = function(i, j, board) {
    board = board || Board();

    if (i === 4 && j === 4) {
      count++;
      return;
    } else if (i < 0 || i > 4) {
      return;
    } else if (j < 0 || j > 4) {
      return;
    } else if (board[i][j] === 1) {
      return;
    }

    board[i][j] = 1;
    
    constructPath(i+1, j, board);
    constructPath(i, j+1, board);
    constructPath(i-1, j, board);
    constructPath(i, j-1, board);

    board[i][j] = 0;

  }

  constructPath(0,0);
  return count;
}
