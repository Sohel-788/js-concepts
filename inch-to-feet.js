function inchTofeet(inches){
    var feet=inches/12;
    return feet;
}
// var myInches=654;
// var feet=inchTofeet(myInches);
// console.log(feet,'feet at 654 inches');
const totalInches=72;
const result=inchTofeet(totalInches);
console.log(result,'feet at 72 inches')