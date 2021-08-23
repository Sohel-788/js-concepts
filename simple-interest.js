// Formula:
// SI = (P * T * R) / 100
// Where:
// P = principal amount
// T = time
// R = rate
// SI = simple interest
function getInterest(p,t,r) {
    let interest=(p * t* r)/ 100;
    let monthlyRate=interest / 12;
    return monthlyRate;
}
var amount=100000;
var time=1;//yearly
var rate=5.5;//5%
const totalInterest=getInterest(amount,time,rate);
console.log('Monthly',totalInterest,'taka')