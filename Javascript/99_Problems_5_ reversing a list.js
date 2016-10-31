function rev(xs){
  return xs.map(function(){ return xs[xs.length - 1 - arguments[1]]; })
}
