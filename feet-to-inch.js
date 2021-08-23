// feet to inches
function getInchesTofeet(feets){
    let totalInches=feets*12;
    return totalInches;
}
var totalFeet=5;
var inchesFromFeet=getInchesTofeet(totalFeet);
console.log(inchesFromFeet,'inches at 5 feet');
