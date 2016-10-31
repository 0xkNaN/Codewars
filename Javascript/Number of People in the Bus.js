var number = function(busStops){
  var _ret = 0;
  busStops.forEach(function(_a){
    _ret += _a[0] - _a[1];
  });
  
  return _ret;
}
