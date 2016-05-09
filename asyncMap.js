var runAsyncFunctions = function(tasks) {
  for (var i = 0; i < tasks.length; i++) {
    (function (i) {
      tasks[i](function(val) {
        console.log(val);
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
]);