//grade calculation
function getGrade(number) {
    if (number >100) {
       let number='Ops, You have inputed a wrong number.Please input less than 100';
        return number;
    } 
    else if (number >= 80 && number<=100) {
       let number='You have got A+ grade';
        return number;
    } 
    else if (number <= 79 && number >= 70) {
        let number='You have got A grade';
        return number;
    }
    else if (number <= 69 && number >= 60) {
       let number='You have got A- grade';
        return number;
    }
    else if (number <= 59 && number >= 50) {
       let number='You have got B grade';
        return number;
    }
    else if (number <= 49 && number >= 40) {
       let number='You have got C grade';
        return number;
    }
    else if (number <= 39 && number >= 33) {
       let number='You have got D grade';
        return number;
    }
    else {
       let number='Sorry! You could not pass,You have got F grade';
        return number;
    }
}
const result = getGrade(3);
console.log(result)