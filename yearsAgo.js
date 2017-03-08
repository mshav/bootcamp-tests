function yearsAgo(year){

  var d = new Date();
  var m = d.getFullYear();
  var g = (m - year);
   return g;
};

console.log(yearsAgo(1996));
