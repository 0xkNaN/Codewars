function isPangram(string){
  return string.toLowerCase().match(/[a-z]/g).filter(function(_c,_p,_ret){ return _ret.slice(0,_p).indexOf(_c) === -1; }).length === 26;
}
