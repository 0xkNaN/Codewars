function fisHex(name) {
  if(name.length <= 0) return 0;
  var _name = name.replace(/\s/g, "").toLowerCase().match(/[abcdef]/g);
  var _xor = _name.reduce(function(a,b){var _ret = parseInt(a,16) ^ parseInt(b,16); return _ret.toString(16);});
  return parseInt(_xor,16);
}
