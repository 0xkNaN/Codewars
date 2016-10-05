function doubleChar(str) {
  return str.replace(/./g,function(){
    return arguments[0].repeat(2);
  })
}
