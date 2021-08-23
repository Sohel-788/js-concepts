// even number
function evenNum(num) {
    if (num%2==0) {
        return true;
    }
    return false;
}
const num=102;
const result=evenNum(num);
console.log(result);

//odd number
function oddNum(num1) {
    // if (num1%2==1) {//process one
    //     return true;
    // }
    if (num1%2!=0) {//process two
        return true;
    }
    return false;
}
const num1=103;
const oddResult=oddNum(num1);
console.log(oddResult);