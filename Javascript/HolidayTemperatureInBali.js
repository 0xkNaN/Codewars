function bareable(heat, humidity){
  if(0.5 < humidity ||  35 < heat){return false;}
  if(0.4<humidity && (25 < heat && heat<36)){return false;}
  return true;
}
