function isWeekday(day){

  var weekday = !day.startsWith("S");

 return weekday;

}

console.log(isWeekday("Sunday"));
