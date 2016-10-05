function countPositivesSumNegatives(input) {
  var _ret = [0,0];
  if(!input || input.length === 0){return [];}
  input.forEach(function(){
    return ((0 < arguments[0])? _ret[0] = ++_ret[0] : _ret[1] = (_ret[1] + arguments[0]));
  });
  return _ret;
}
