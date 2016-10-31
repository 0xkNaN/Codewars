function twoSum(numbers, target){
  var _ret = [];
  numbers.forEach(function(n,p){
    for(var i =p+1; i < numbers.length; i++){
      if(n + numbers[i] === target){ _ret[0] = p; _ret[1] = i;}
    }
  });
  return _ret;
}
