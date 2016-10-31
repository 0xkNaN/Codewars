function binToDec(bin){
  return bin.split("").reverse().map(function(a,b){return Number(a) * Math.pow(2,b)}).reduce(function(a,b){return a+b});
}
