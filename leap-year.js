//finding leap year below by the two ways
function findLeapYear(year){
    if (year%400===0) 
        return true;

    if (year%100===0) 
        return false;
        console.log(year,'is not a leap year');
    return year%4===0;
} 
const year=2400;
const leap=findLeapYear(year);
console.log(year,'is a leap year:',leap);
