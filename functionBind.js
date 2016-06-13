/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

function bind() {
  var args = Array.prototype.slice.call(arguments);
  var fn = args[0];
  var ref = args[1];
  var params = args.slice(2);

  return function() {
    var moreArgs = Array.prototype.slice.call(arguments);
    return fn.apply(ref, params.concat(moreArgs));
  }
}
