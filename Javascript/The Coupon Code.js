function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var _months  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  var _currY = currentDate.split(",")[1];
  var _exprY = expirationDate.split(",")[1];
  
  var _currM = _months.indexOf(currentDate.split(",")[0].split(" ")[0]);
  var _exprM = _months.indexOf(expirationDate.split(",")[0].split(" ")[0]);
  
  var _currD = Number(currentDate.split(",")[0].split(" ")[1]);
  var _exprD = Number(expirationDate.split(",")[0].split(" ")[1]);
  
  if(enteredCode !== correctCode) return false;
	if(_exprY < _currY)return false;
	else if(_exprY == _currY && _exprM < _currM)return false;
	else if(_exprY == _currY && _exprM == _currM && _exprD < _currD)return false;
	else return true;
}
