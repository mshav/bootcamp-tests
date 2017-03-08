function countAllPaarl(regNum){
  var numberPlates = [];
  var reg = regNum.split(',');
  for (var i=0;i<reg.length;i++){

    var regNumbers = reg[i].trim();

    if(regNumbers.startsWith("CJ")){

      numberPlates.push(regNumbers);


  }


  }
  return numberPlates.length;
}
console.log(countAllPaarl(" CY 345435,CL 65456,EC 43563456"))
