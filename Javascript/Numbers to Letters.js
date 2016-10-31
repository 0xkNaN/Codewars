function switcher(x){
  var _db = [,"z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a","!","?"," "];
  return x.map(function(c){return _db[c]}).join("");
}
