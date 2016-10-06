function removeSmallest(numbers) {
  if(!numbers){return [];}else{numbers.splice(numbers.indexOf(Math.min(...numbers)),1);}
  return numbers;
}
