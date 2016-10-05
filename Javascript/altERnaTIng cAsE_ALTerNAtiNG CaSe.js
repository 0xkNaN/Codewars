String.prototype.toAlternatingCase = function () {
  var _str = ""; 
  for(var _c = 0; _c < this.length; _c++){
    _str += ((this[_c] === this[_c].toUpperCase())? this[_c].toLowerCase() : this[_c].toUpperCase());
  }
  return _str;
}
