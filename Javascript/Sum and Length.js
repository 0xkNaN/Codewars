function sumLength (arr){
  var _ret = [0,0];
  arr.forEach(function(x){ 0 <= x ? _ret[0] += x : _ret[1] += 1});
  return String(_ret[0]+" "+ [_ret[1] + Math.ceil(arr.filter(function(y){ return y == 0}).length / 2)]);
}
