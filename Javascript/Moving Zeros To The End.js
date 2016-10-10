var moveZeros = function (arr) {
  var _arr = arr.filter(function(a){return  a !== 0;});
  return _arr.concat(Array.from({length: arr.length - _arr.length}, () => 0));
}
