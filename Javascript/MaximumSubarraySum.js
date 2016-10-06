var maxSequence = function(arr){
  var _maxs = [];
  arr.forEach(function(x,y){
    var sum = 0;
    arr.slice(y).forEach(function(x){
      _maxs.push(sum += x);
    });
  });
  return Math.max(0, ..._maxs);
}
