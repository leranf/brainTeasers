var runAsyncFunctions = function(tasks, callback) {
  var results = [];
  var counter = 0;

  for (var i = 0; i < tasks.length; i++) {
    (function(i) {
      tasks[i](function(val) {
        console.log(val);
        results[i] = val;
        counter++;
        if (counter === tasks.length) {
          callback(results);
        }
      });
    })(i);
  }
}

runAsyncFunctions([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
], function(results) {
    console.log(results);
});