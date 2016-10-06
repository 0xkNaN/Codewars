function validateSequence(x) {
  return x.slice(1).reduce(function(a,b,c){return a && (b - x[c] === x[1]-x[0]);});
}
