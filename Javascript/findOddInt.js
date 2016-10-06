function findOdd(A) {
  var _str = A.toString() + ",";
  var _odd;
  A.forEach(function(){
    if(_str.match(new RegExp(arguments[0]+",", "g")).length % 2 === 1){_odd = arguments[0];}
  });
  return _odd;
}
