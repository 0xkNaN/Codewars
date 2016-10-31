function persistence(num) {
  var _mul = 0, _str = num.toString();
  while(1 < _str.length){
  _str = _str.split("").reduce(function(a,b){ return Number(a) * Number(b); }).toString();
  _mul++;
  }
  	  
  return _mul;
}
