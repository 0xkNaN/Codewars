function iqTest(numbers){
  var _nums = numbers.split(" "); 
  var _odd = [];
  var _even = [];
  console.log(_nums);
  for(var int in _nums){
    if(_nums[int] % 2 === 0){_even.push(_nums[int]);}else{_odd.push(_nums[int]);}
  }
  
  return ((_odd.length < _even.length)? _nums.indexOf(_odd[0]) + 1: _nums.indexOf(_even[0]) + 1);
}
