function regCheck(regNum, location){

 var checkPlates = regNum.endsWith(location);

  return checkPlates;

};
regCheck("DV 23 NB GP", "GP");
regCheck("DV 23 LP GP", "L");
regCheck("EC98912", "12");
