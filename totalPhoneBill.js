function totalPhoneBill(bill){
  var total = 0;
  var cost  =bill.split(', ')
  for(var i = 0;i <cost.length;i++){
   switch(cost[i]){
   case 'call':
   total += 2.75;
   break;
     case 'sms':
   total += 0.65;
   break;
  // default:
  // total += 0.00;
   }
}
  return 'R' + total.toFixed(2);

 }
  totalPhoneBill('call, sms, call, sms, sms');
