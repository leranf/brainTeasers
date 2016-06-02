var cards = [1, 'King', 3, 'Queen', 'Jack', 6, 2];

var faceCards = {
  Ace: 14,
  King: 13,
  Queen: 12,
  Jack: 11
};

console.log(cards.sort(function(a, b) { 
  return (faceCards[a] || a) > (faceCards[b] || b);
}));



// function Worker(name) {
//   this.name = name;
// }

// function subWorker() {
//   Worker.call(this);
// }

// subWorker.prototype = Object.create(Worker.prototype);
// subWorker.constructor = subWorker;